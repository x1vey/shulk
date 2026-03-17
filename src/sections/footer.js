import { getSiteData } from '../dataManager.js';

export function renderFooter(container) {
  const data = getSiteData();
  const f = data.footer;

  const footer = document.createElement('footer');
  footer.className = 'footer';

  const navLinksHtml = f.links.map(l =>
    `<li><a href="${l.href}">${l.label}</a></li>`
  ).join('');

  const legalLinksHtml = f.legalLinks.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('');

  footer.innerHTML = `
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h2>${f.tagline}</h2>
            <p>${f.description}</p>
            <a href="${f.ctaLink}" class="btn btn-primary">${f.ctaText}</a>
          </div>
          <div class="footer-col">
            <h4>Navigation</h4>
            <ul>${navLinksHtml}</ul>
          </div>
          <div class="footer-col">
            <h4>Connect</h4>
            <div class="footer-social">
              ${f.socialLinks.instagram ? `<a href="${f.socialLinks.instagram}" target="_blank" rel="noopener" aria-label="Instagram">IG</a>` : ''}
              ${f.socialLinks.youtube ? `<a href="${f.socialLinks.youtube}" target="_blank" rel="noopener" aria-label="YouTube">YT</a>` : ''}
              ${f.socialLinks.whatsapp ? `<a href="${f.socialLinks.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>${f.copyright}</p>
        <div class="footer-legal">
          ${legalLinksHtml}
        </div>
      </div>
    </div>
  `;

  container.appendChild(footer);
}
