function loadStyles() {
  return new Promise((resolve, reject) => {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('../css/portfolio-guide.css', import.meta.url).href;
    stylesheet.onload = resolve;
    stylesheet.onerror = () => {
      stylesheet.remove();
      reject(new Error('Portfolio guide styles could not be loaded.'));
    };
    document.head.append(stylesheet);
  });
}

export async function initializeGuide(launcher, attempt = 0) {
  const knowledgeUrl = new URL('./guide-knowledge.mjs', import.meta.url);
  if (attempt) knowledgeUrl.searchParams.set('retry', String(attempt));
  const { answerQuestion, suggestedTopics, topics } = await import(knowledgeUrl.href);
  await loadStyles();
  const dialog = document.createElement('dialog');
  dialog.id = 'portfolio-guide';
  dialog.className = 'portfolio-guide';
  dialog.setAttribute('aria-labelledby', 'guide-title');
  dialog.setAttribute('aria-describedby', 'guide-description');
  dialog.innerHTML = `
    <header class="guide-header">
      <span class="guide-mark" aria-hidden="true">✦</span>
      <div><h2 id="guide-title">Portfolio guide</h2><p id="guide-description">A little direction. A lot of possibilities.</p></div>
      <button class="guide-close" type="button" aria-label="Close portfolio guide"><svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
    </header>
    <div class="guide-conversation" role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions" tabindex="0"></div>
    <div class="guide-topics" role="group" aria-label="Suggested questions"></div>
    <form class="guide-form">
      <label class="guide-input-label" for="guide-question">Ask about Suprabhat</label>
      <div class="guide-input-row"><input id="guide-question" name="question" type="text" placeholder="Ask about projects, skills, or experience..." maxlength="300" autocomplete="off" required enterkeyhint="send"><button type="submit" aria-label="Send question"><svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true"><path d="M10 15V4m-5 5 5-5 5 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>
      <p class="guide-form-status" role="status"></p>
    </form>
    <footer class="guide-note">Curated answers, not generative AI.<br>Messages stay in this tab. No chat data is sent or saved.</footer>`;
  document.body.append(dialog);
  const conversation = dialog.querySelector('.guide-conversation');
  const suggestions = dialog.querySelector('.guide-topics');
  const form = dialog.querySelector('.guide-form');
  const input = dialog.querySelector('input');
  const formStatus = dialog.querySelector('.guide-form-status');

  function addMessage(text, sender = 'guide', links = []) {
    const message = document.createElement('div');
    message.className = `guide-message guide-message-${sender}`;
    const label = document.createElement('span');
    label.className = 'guide-message-label';
    label.textContent = sender === 'user' ? 'YOU' : 'PORTFOLIO GUIDE';
    const content = document.createElement('p');
    content.textContent = text;
    message.append(label, content);
    if (links.length) {
      const actions = document.createElement('div');
      actions.className = 'guide-answer-links';
      for (const link of links) {
        const anchor = document.createElement('a');
        anchor.textContent = `${link.label} ↗`;
        anchor.href = link.href;
        if (link.href.startsWith('#')) {
          anchor.addEventListener('click', () => dialog.close());
        } else if (!link.href.startsWith('mailto:')) {
          anchor.target = '_blank';
          anchor.rel = 'noopener';
        }
        actions.append(anchor);
      }
      message.append(actions);
    }
    conversation.append(message);
    // Bound the in-memory transcript without persisting visitors' questions.
    while (conversation.children.length > 40) conversation.firstElementChild.remove();
    conversation.scrollTop = conversation.scrollHeight;
  }

  function showTopics(ids) {
    suggestions.replaceChildren();
    for (const id of ids) {
      const topic = topics.find(item => item.id === id);
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = topic.label;
      button.addEventListener('click', () => {
        addMessage(topic.question, 'user');
        addMessage(topic.answer, 'guide', topic.links);
        showTopics(suggestedTopics.filter(item => item !== id));
        formStatus.textContent = '';
        input.focus({ preventScroll: true });
      });
      suggestions.append(button);
    }
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const question = input.value.trim();
    const result = answerQuestion(question);
    if (result.kind === 'empty') {
      formStatus.textContent = result.text;
      input.focus();
      return;
    }
    addMessage(question, 'user');
    if (result.kind === 'answer') {
      addMessage(result.topic.answer, 'guide', result.topic.links);
      showTopics(suggestedTopics.filter(id => id !== result.topic.id));
    } else {
      addMessage(result.text);
      showTopics(result.topics);
    }
    input.value = '';
    formStatus.textContent = '';
    input.focus({ preventScroll: true });
  });
  dialog.querySelector('.guide-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      dialog.close();
    }
  });
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    launcher.setAttribute('aria-expanded', 'false');
    launcher.setAttribute('aria-label', 'Ask about me: open portfolio guide');
    launcher.focus({ preventScroll: true });
  });
  addMessage('Hi! I am a lightweight guide to Suprabhat\'s public experience. Ask about his work, projects, skills, or how to connect. Where would you like to start?');
  showTopics(suggestedTopics);
  return () => {
    if (dialog.open) dialog.close();
    else {
      dialog.showModal();
      launcher.setAttribute('aria-expanded', 'true');
      launcher.setAttribute('aria-label', 'Ask about me: close portfolio guide');
      dialog.querySelector('.guide-close').focus({ preventScroll: true });
    }
  };
}
