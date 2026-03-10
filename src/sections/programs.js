import { getSiteData } from '../dataManager.js';

export function renderPrograms(container) {
  const data = getSiteData();
  const p = data.programs;

  const section = document.createElement('section');
  section.className = 'section section-dark';
  section.id = 'programs';

  const cardsHtml = p.items.map(item => `
    <div class="program-card">
      <img class="program-card-image" src="${item.imageUrl}" alt="${item.title}" loading="lazy">
      <div class="program-card-body">
        ${item.tag ? `<span class="program-card-tag">${item.tag}</span>` : ''}
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="program-card-duration">⏱ ${item.duration}</div>
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">${p.headline}</h2>
        <p class="body-lg">${p.subline}</p>
      </div>
      <div class="programs-grid">
        ${cardsHtml}
      </div>
    </div>
  `;

  container.appendChild(section);
}
