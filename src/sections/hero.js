import { getSiteData } from '../dataManager.js';

export function renderHero(container) {
  const data = getSiteData();
  const hero = data.hero;

  const section = document.createElement('section');
  section.className = 'hero';
  section.id = 'home';

  // VSL goes between subline and CTA
  const vslHtml = hero.vslEnabled ? `
    <div class="hero-vsl">
      <iframe 
        src="${hero.vslUrl}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        title="Video Sales Letter"
      ></iframe>
    </div>
  ` : '';

  section.innerHTML = `
    <div class="hero-bg">
      <img src="${hero.backgroundImage || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80'}" alt="" class="hero-bg-img" draggable="false">
      <div class="hero-overlay"></div>
      <div class="hero-vignette"></div>
    </div>
    <div class="hero-content">
      <div class="hero-badge">${hero.badgeText || 'ELITE COACHING'}</div>
      <h1 class="hero-headline">${hero.headline}</h1>
      <p class="hero-subline">${hero.subline}</p>
      ${vslHtml}
      <a href="${hero.ctaLink}" class="btn btn-hero" target="_blank" rel="noopener">${hero.ctaText}</a>
    </div>
    <div class="hero-scroll-indicator">
      <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
    </div>
  `;

  container.appendChild(section);

  // Initialize hero animations after DOM paint
  requestAnimationFrame(() => {
    initHeroAnimations(section);
  });
}

function initHeroAnimations(section) {
  // Subtle parallax on mouse move
  const content = section.querySelector('.hero-content');
  const bgImg = section.querySelector('.hero-bg-img');
  
  if (!content || !bgImg) return;

  // Mouse parallax — subtle 3D depth effect
  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Content moves slightly opposite to mouse (parallax)
    content.style.transform = `translate(${x * -8}px, ${y * -6}px)`;
    
    // Background moves with mouse (depth)
    bgImg.style.transform = `scale(1.08) translate(${x * 12}px, ${y * 8}px)`;
  });

  section.addEventListener('mouseleave', () => {
    content.style.transform = 'translate(0, 0)';
    bgImg.style.transform = 'scale(1.08) translate(0, 0)';
  });

  // Add smooth transition for parallax
  content.style.transition = 'transform 0.3s ease-out';
  bgImg.style.transition = 'transform 0.4s ease-out';
}
