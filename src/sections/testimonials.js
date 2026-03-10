import { getSiteData } from '../dataManager.js';

export function renderTestimonials(container) {
  const data = getSiteData();
  const t = data.testimonials;

  const section = document.createElement('section');
  section.className = 'section section-darker';
  section.id = 'testimonials';

  const cardsHtml = t.items.map(item => `
    <div class="testimonial-card">
      <blockquote>${item.quote}</blockquote>
      <div class="author">${item.author}</div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">${t.headline}</h2>
        <p class="body-lg">${t.subline}</p>
      </div>
      <div class="testimonials-grid">
        ${cardsHtml}
      </div>
    </div>
  `;

  container.appendChild(section);
}
