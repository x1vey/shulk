import './styles/index.css';
import { initRouter } from './router.js';
import { getSiteData, applyColors } from './dataManager.js';
import { renderNavbar } from './sections/navbar.js';
import { renderHero } from './sections/hero.js';
import { renderTicker } from './sections/ticker.js';
import { renderTransformations } from './sections/transformations.js';
import { renderTestimonials } from './sections/testimonials.js';
import { renderPrograms } from './sections/programs.js';
import { renderFeatures } from './sections/features.js';
import { renderCoaching } from './sections/coaching.js';
import { renderPricing } from './sections/pricing.js';
import { renderFooter } from './sections/footer.js';
import { renderAdminPanel } from './admin/adminPanel.js';

// Apply saved colors on load
const data = getSiteData();
applyColors(data.colors);

// Initialize router
initRouter(renderHomePage, renderAdminPage);

function renderHomePage(app) {
  renderNavbar(app);
  renderHero(app);
  renderTicker(app);
  renderTransformations(app);
  renderTestimonials(app);
  renderPrograms(app);
  renderFeatures(app);
  renderCoaching(app);
  renderPricing(app);
  renderFooter(app);

  // Setup scroll animations
  setupScrollAnimations();
}

function renderAdminPage(app) {
  renderAdminPanel(app);
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Observe all major sections for fade-in
  document.querySelectorAll('.section-header, .transform-card, .testimonial-card, .program-card, .feature-block, .coaching-benefit, .pricing-card').forEach((el, i) => {
    el.classList.add('animate-on-scroll');
    el.style.transitionDelay = `${Math.min(i * 0.05, 0.3)}s`;
    observer.observe(el);
  });
}
