import { getSiteData } from '../dataManager.js';

export function renderCoaching(container) {
  const data = getSiteData();
  const coaching = data.coaching;

  const section = document.createElement('section');
  section.className = 'section section-dark coaching';
  section.id = 'coaching';

  const benefitsHtml = coaching.benefits.map(b => `
    <div class="coaching-benefit">
      <div class="coaching-benefit-icon">${b.icon}</div>
      <h3>${b.title}</h3>
      <p>${b.description}</p>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="coaching-layout">
        <div class="coaching-text">
          <div class="coaching-label">${coaching.label}</div>
          <h2 class="heading-lg">${coaching.headline}</h2>
          <p class="body-lg">${coaching.description}</p>
          <div class="coaching-benefits-grid">
            ${benefitsHtml}
          </div>
          <a href="${coaching.ctaLink}" class="btn btn-primary" target="_blank" rel="noopener">${coaching.ctaText}</a>
        </div>
        <div class="coaching-image-wrapper">
          ${coaching.backgroundVideo ? `
            <video 
              src="${coaching.backgroundVideo}" 
              class="coaching-video" 
              autoplay 
              muted 
              loop 
              playsinline
              preload="auto"
              style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg); filter: grayscale(50%) contrast(1.2);"
            ></video>
          ` : `
            <img src="${coaching.imageUrl}" alt="1:1 Coaching" class="coaching-image">
          `}
          <div class="coaching-image-accent"></div>
        </div>
      </div>
    </div>
  `;

  container.appendChild(section);
}
