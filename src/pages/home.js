import { getSiteData } from '../dataManager.js';
import { renderNavbar } from '../sections/navbar.js';
import { renderHero } from '../sections/hero.js';
import { renderTicker } from '../sections/ticker.js';
import { renderTransformations } from '../sections/transformations.js';
import { renderTestimonials } from '../sections/testimonials.js';
import { renderFooter } from '../sections/footer.js';

export function renderHomePage(app) {
  const data = getSiteData();

  renderNavbar(app);
  renderHero(app);
  renderTicker(app);

  // Condensed overview section linking to full pages
  const overview = document.createElement('section');
  overview.className = 'section section-dark';
  overview.id = 'overview';

  overview.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">EVERYTHING YOU NEED TO TRANSFORM</h2>
        <p class="body-lg">From structured programs to personalized coaching, we provide the complete toolkit for your fitness journey. Explore what we offer below.</p>
      </div>
      <div class="overview-grid">
        <a href="/programs" class="overview-card">
          <h3>TRAINING PROGRAMS</h3>
          <p>Science-backed programs for every goal — from beginner fundamentals to competition prep. Structured periodization that eliminates guesswork and delivers consistent results.</p>
          <span class="overview-card-link">Explore Programs →</span>
        </a>
        <a href="/results" class="overview-card">
          <h3>PROVEN RESULTS</h3>
          <p>Real transformations from real people. See the before-and-after journeys that prove our methodology works — backed by testimonials from athletes who've been in your shoes.</p>
          <span class="overview-card-link">View Results →</span>
        </a>
        <a href="/pricing" class="overview-card">
          <h3>FLEXIBLE PRICING</h3>
          <p>Invest in yourself with plans that fit your budget. Whether you want full program access or premium 1-on-1 coaching, we have an option designed for your commitment level.</p>
          <span class="overview-card-link">See Pricing →</span>
        </a>
        <a href="/about" class="overview-card">
          <h3>OUR PHILOSOPHY</h3>
          <p>Built by athletes who've competed at the highest level. Learn about the science, methodology, and relentless standards that drive everything we do.</p>
          <span class="overview-card-link">Learn More →</span>
        </a>
      </div>
    </div>
  `;

  app.appendChild(overview);

  // Compact transformations preview
  renderTransformations(app);

  // Compact testimonials preview
  renderTestimonials(app);

  renderFooter(app);
}
