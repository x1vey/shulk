import { getSiteData } from '../dataManager.js';

export function renderPricing(container) {
  const data = getSiteData();
  const p = data.pricing;

  const section = document.createElement('section');
  section.className = 'section section-dark';
  section.id = 'pricing';

  const cardsHtml = p.plans.map(plan => `
    <div class="pricing-card${plan.highlighted ? ' highlighted' : ''}">
      ${plan.badge ? `<div class="pricing-badge">${plan.badge}</div>` : ''}
      <h3>${plan.name}</h3>
      <div class="price">${plan.price}</div>
      <div class="period">${plan.period}</div>
      ${plan.perMonth ? `<div class="per-month">${plan.perMonth}</div>` : '<div class="per-month">&nbsp;</div>'}
      <ul class="pricing-features">
        ${plan.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="${plan.ctaLink}" class="btn btn-primary" target="_blank" rel="noopener" style="width:100%">${plan.ctaText}</a>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">${p.headline}</h2>
        <p class="body-lg">${p.subline}</p>
      </div>
      <div class="pricing-grid">
        ${cardsHtml}
      </div>
    </div>
  `;

  container.appendChild(section);
}
