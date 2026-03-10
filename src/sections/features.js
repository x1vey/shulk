import { getSiteData } from '../dataManager.js';

export function renderFeatures(container) {
  const data = getSiteData();
  const f = data.features;

  const section = document.createElement('section');
  section.className = 'section section-darker';
  section.id = 'features';

  const blocksHtml = f.items.map((item, i) => {
    // Accent the first word of each title
    const words = item.title.split(' ');
    const titleHtml = words.length > 1
      ? `<span>${words[0]}</span> ${words.slice(1).join(' ')}`
      : item.title;

    return `
      <div class="feature-block">
        <div class="feature-text">
          <h2>${titleHtml}</h2>
          <p>${item.description}</p>
          <a href="#pricing" class="btn btn-outline">Learn More</a>
        </div>
        <div class="feature-image">
          <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
        </div>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="container">
      ${blocksHtml}
    </div>
  `;

  container.appendChild(section);
}
