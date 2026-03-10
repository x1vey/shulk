import { getSiteData } from '../dataManager.js';

export function renderTransformations(container) {
  const data = getSiteData();
  const t = data.transformations;

  const section = document.createElement('section');
  section.className = 'section section-dark';
  section.id = 'transformations';

  const cardsHtml = t.items.map(item => `
    <div class="transform-card">
      <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
      <div class="transform-card-overlay">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="section-header">
      <h2 class="heading-lg">${t.headline}</h2>
      <p class="body-lg">${t.subline}</p>
    </div>
    <div class="transformations-grid">
      ${cardsHtml}
    </div>
  `;

  container.appendChild(section);
  observeAnimations(section);
}

function observeAnimations(section) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  section.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}
