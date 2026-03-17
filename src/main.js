import './styles/index.css';
import { getSiteData, applyColors } from './dataManager.js';
import { renderSinglePageHome } from './pages/homeSinglePage.js';
import { renderAdminPanel } from './admin/adminPanel.js';

// Apply saved colors on load
const data = getSiteData();
applyColors(data.colors);

// Check if admin panel route
const path = window.location.pathname;
const app = document.getElementById('app');

if (path === '/adminpannel' || path === '/adminpannel/') {
  renderAdminPanel(app);
} else {
  // Render single-page home
  renderSinglePageHome(app);
  setupScrollAnimations();
  setupSmoothScroll();
}

function setupScrollAnimations() {
  // Wait for DOM to paint
  requestAnimationFrame(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll(
      '.section-header, .pillar-card, .coaching-app-feature, .result-card, .testimonial-card, .mission-content'
    ).forEach((el, i) => {
      el.classList.add('animate-on-scroll');
      el.style.transitionDelay = `${Math.min(i * 0.05, 0.3)}s`;
      observer.observe(el);
    });
  });
}

function setupSmoothScroll() {
  // Smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
}
