(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionButton = document.querySelector('.motion-toggle');
  const projects = [...document.querySelectorAll('[data-stop]')];
  const routeLinks = [...document.querySelectorAll('.route-stops a')];
  const hero = document.querySelector('.hero');
  const work = document.querySelector('.work-layout');
  const heroArt = document.querySelector('.hero-landscape .landscape-art');
  const mapArt = document.querySelector('.journey-map .landscape-art');
  const destination = document.querySelector('#destination-name');
  const stopNumber = document.querySelector('.map-stop-number');
  const progressBar = document.querySelector('.scroll-progress > span');
  const heroTrain = document.querySelector('.hero-train');
  const heroPlane = document.querySelector('.hero-plane');
  const heroCar = document.querySelector('.hero-car');
  const mapTrain = document.querySelector('.map-train');
  const mapPlane = document.querySelector('.map-plane');
  const mapCar = document.querySelector('.map-car');
  const cloud = document.querySelector('.cloud-one');
  let userPaused = false;
  let ticking = false;
  let activeStop = -1;

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const motionAllowed = () => !reducedMotion.matches && !userPaused;

  function updateMotionButton() {
    const paused = !motionAllowed();
    document.body.classList.toggle('motion-paused', paused);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.innerHTML = paused ? 'Motion paused <span aria-hidden="true">▷</span>' : 'Pause motion <span aria-hidden="true">Ⅱ</span>';
    motionButton.disabled = reducedMotion.matches;
    motionButton.title = reducedMotion.matches ? 'Motion is disabled by your device’s reduced-motion preference.' : 'Toggle scroll-driven scenery and vehicles';
  }

  function update() {
    ticking = false;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${scrollable > 0 ? clamp(window.scrollY / scrollable) : 0})`;

    const mobileMapSticky = window.innerWidth <= 580 && window.innerHeight > 600;
    const focusLine = window.innerHeight * (mobileMapSticky ? 0.78 : 0.55);
    let nearest = 0;
    let distance = Infinity;
    projects.forEach((project, index) => {
      const rect = project.getBoundingClientRect();
      const nextDistance = Math.abs(rect.top + Math.min(rect.height / 2, 200) - focusLine);
      if (nextDistance < distance) {
        nearest = index;
        distance = nextDistance;
      }
    });

    if (nearest !== activeStop) {
      activeStop = nearest;
      destination.textContent = projects[nearest].dataset.destination;
      stopNumber.textContent = String(nearest + 1).padStart(2, '0');
      routeLinks.forEach((link, index) => {
        link.classList.toggle('is-active', index === nearest);
        if (index === nearest) link.setAttribute('aria-current', 'step');
        else link.removeAttribute('aria-current');
      });
    }

    if (!motionAllowed()) return;

    const heroProgress = clamp(-hero.getBoundingClientRect().top / hero.offsetHeight);
    const travelWidth = Math.min(window.innerWidth, 1400);
    heroTrain.style.transform = `translateX(${heroProgress * travelWidth * 0.4}px)`;
    heroPlane.style.transform = `translate(${heroProgress * travelWidth * 0.27}px, ${-heroProgress * 95}px) rotate(-8deg)`;
    heroCar.style.transform = `translateX(${-heroProgress * travelWidth * 0.3}px)`;
    heroArt.style.transform = `translateX(${-heroProgress * 35}px)`;
    cloud.style.transform = `translateX(${heroProgress * 70}px)`;

    const workRect = work.getBoundingClientRect();
    const journeyProgress = clamp((window.innerHeight * 0.4 - workRect.top) / Math.max(1, work.offsetHeight - window.innerHeight * 0.5));
    mapArt.style.transform = `translateX(${-journeyProgress * 66.6667}%)`;
    mapTrain.style.transform = `translateX(${Math.sin(journeyProgress * Math.PI * 2) * 55}px)`;
    mapPlane.style.transform = `translate(${Math.sin(journeyProgress * Math.PI * 2) * 65}px, ${-Math.sin(journeyProgress * Math.PI) * 30}px) rotate(-8deg)`;
    mapCar.style.transform = `translateX(${-Math.sin(journeyProgress * Math.PI * 2) * 45}px)`;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  motionButton.addEventListener('click', () => {
    userPaused = !userPaused;
    updateMotionButton();
    requestUpdate();
  });
  reducedMotion.addEventListener('change', () => {
    updateMotionButton();
    if (reducedMotion.matches) {
      [heroTrain, heroPlane, heroCar, heroArt, mapArt, mapTrain, mapPlane, mapCar, cloud].forEach(element => element.style.removeProperty('transform'));
    }
    requestUpdate();
  });
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', requestUpdate));
  window.addEventListener('load', requestUpdate);

  const copyButton = document.querySelector('.copy-email');
  const copyStatus = document.querySelector('.copy-status');
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('jnvsuprabh@gmail.com');
      copyStatus.textContent = 'Email copied. Let’s connect!';
    } catch (error) {
      console.error('Unable to copy email to clipboard:', error);
      copyStatus.textContent = 'Could not copy. Email me at jnvsuprabh@gmail.com.';
    }
  });

  document.querySelector('#year').textContent = String(new Date().getFullYear());
  updateMotionButton();
  requestUpdate();
})();
