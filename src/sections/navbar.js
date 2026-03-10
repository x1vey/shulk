import { getSiteData } from '../dataManager.js';

export function renderNavbar(container) {
  const data = getSiteData();
  const nav = data.navbar;

  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.id = 'navbar';

  const linksHtml = nav.links.map(l =>
    `<li><a href="${l.href}">${l.label}</a></li>`
  ).join('');

  navbar.innerHTML = `
    <div class="container">
      <a href="#home" class="navbar-logo">${nav.logoText.slice(0, 1)}<span>${nav.logoText.slice(1)}</span></a>
      <ul class="navbar-links" id="navLinks">
        ${linksHtml}
        <li><a href="${nav.ctaLink}" class="btn btn-primary navbar-cta">${nav.ctaText}</a></li>
      </ul>
      <button class="navbar-mobile-toggle" id="mobileToggle" aria-label="Menu">☰</button>
    </div>
  `;

  container.appendChild(navbar);

  // Scroll effect
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mobile toggle
  const toggle = navbar.querySelector('#mobileToggle');
  const links = navbar.querySelector('#navLinks');
  toggle.addEventListener('click', () => {
    links.classList.toggle('mobile-open');
    toggle.textContent = links.classList.contains('mobile-open') ? '✕' : '☰';
  });

  // Close mobile menu on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('mobile-open');
      toggle.textContent = '☰';
    });
  });
}
