import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { answerQuestion, normalizeQuestion, suggestedTopics, topics } from '../assets/js/guide-knowledge.mjs';

const cases = [
  ['Who is Suprabhat?', 'overview'],
  ['What is his current role?', 'microsoft'],
  ['Walk me through his work experience', 'experience'],
  ['Experience?', 'experience'],
  ['Tell me about Redis geo-redundancy', 'cloud'],
  ['Does he know PostgreSQL?', 'cloud'],
  ['How has he used Etcd?', 'cloud'],
  ['What is CraftGuard?', 'craftguard'],
  ['Tell me about WCAG design audits', 'craftguard'],
  ['What is his experience with AI?', 'ai'],
  ['How has he used GitHub Copilot?', 'ai'],
  ['What has he built for Windows?', 'windows'],
  ['What is his automation work?', 'automation'],
  ['How did he use Azure Key Vault?', 'secrets'],
  ['Tell me about BlogVault', 'blogvault'],
  ['What did he do at IIT Patna?', 'internship'],
  ['Where did he study?', 'education'],
  ['What is his Codeforces rating?', 'achievements'],
  ['What technologies does he use?', 'skills'],
  ['Does he use C++?', 'skills'],
  ['What about C# and .NET?', 'skills'],
  ['What projects should I explore?', 'projects'],
  ['Tell me about Sanskriti', 'sanskriti'],
  ['What is the encryption project?', 'encryption'],
  ['How can I contact him?', 'contact'],
  ['What is his email address?', 'contact'],
  ['Can I download his résumé?', 'resume'],
  ['Where is his GitHub?', 'github'],
  ['What is his LinkedIn?', 'linkedin'],
  ['Where is he based?', 'location'],
  ['Tell me about Microsft', 'microsoft'],
  ['What is CraftGaurd?', 'craftguard']
];

for (const [question, expected] of cases) {
  test(`matches "${question}"`, () => {
    const result = answerQuestion(question);
    assert.equal(result.kind, 'answer');
    assert.equal(result.topic.id, expected);
  });
}

test('asks for clarification for multiple topics instead of arbitrarily answering', () => {
  const result = answerQuestion('Tell me about Redis and CraftGuard');
  assert.equal(result.kind, 'clarify');
  assert.ok(result.topics.includes('cloud'));
  assert.ok(result.topics.includes('craftguard'));
});

for (const question of ['What is the weather?', 'Does he know Rust?', 'Does he have Rust experience?', 'Does he have AWS experience?', 'Is he an AWS expert?', 'emailing a joke', '<img src=x onerror=alert(1)>']) {
  test(`does not invent answers to "${question}"`, () => {
    assert.equal(answerQuestion(question).kind, 'unknown');
  });
}

for (const question of ['What is his Microsoft salary?', 'Is he available for a role?', 'What is his notice period?', 'What is his phone number?', 'What is his home address?', 'Does he want remote work?']) {
  test(`does not infer private or unconfirmed information: "${question}"`, () => {
    const result = answerQuestion(question);
    assert.equal(result.kind, 'unknown');
    assert.ok(result.topics.includes('contact'));
  });
}

test('handles greetings, whitespace, invalid types, and excessive length explicitly', () => {
  assert.equal(answerQuestion('Hello!').kind, 'suggest');
  assert.equal(answerQuestion('   ').kind, 'empty');
  assert.equal(answerQuestion('x'.repeat(301)).kind, 'empty');
  assert.throws(() => answerQuestion(null), TypeError);
});

test('identifies itself as a curated guide rather than impersonating Suprabhat', () => {
  const result = answerQuestion('Who are you?');
  assert.equal(result.kind, 'suggest');
  assert.match(result.text, /not Suprabhat or a generative AI/);
});

test('normalizes accents and programming-language punctuation', () => {
  assert.equal(normalizeQuestion('  RÉSUMÉ, C++ / C# / .NET! '), 'resume cpp csharp dotnet');
});

test('knowledge is complete, uniquely identified, and uses approved link destinations', () => {
  const ids = topics.map(topic => topic.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const topic of topics) {
    assert.ok(topic.answer && topic.label && topic.question && topic.keywords.length && topic.links.length);
    for (const [phrase, weight] of topic.keywords) {
      assert.equal(normalizeQuestion(phrase), phrase);
      assert.ok(weight > 0);
    }
    for (const link of topic.links) {
      assert.match(link.href, /^(#|assets\/|https:\/\/(github\.com|www\.linkedin\.com)\/|mailto:jnvsuprabh@gmail\.com$)/);
    }
  }
  for (const id of suggestedTopics) assert.ok(ids.includes(id));
});

test('every curated example question resolves to its own topic', () => {
  for (const topic of topics) {
    const result = answerQuestion(topic.question);
    assert.equal(result.kind, 'answer', topic.question);
    assert.equal(result.topic.id, topic.id, topic.question);
  }
});

test('every internal answer link points to a real section or a local asset', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  for (const topic of topics) {
    for (const { href } of topic.links) {
      if (href.startsWith('#')) assert.ok(html.includes(`id="${href.slice(1)}"`), href);
      else if (href.startsWith('assets/')) assert.ok(readFileSync(new URL(`../${href}`, import.meta.url)).length);
    }
  }
});

test('lazy-loaded chat modules and styles stay below the 20 KB compressed budget', () => {
  const files = ['../assets/js/guide-knowledge.mjs', '../assets/js/portfolio-guide.mjs', '../assets/css/portfolio-guide.css'];
  const bytes = files.reduce((total, file) => total + gzipSync(readFileSync(new URL(file, import.meta.url))).length, 0);
  assert.ok(bytes < 20 * 1024, `Guide assets total ${bytes} compressed bytes`);
});
