import { getSiteData } from '../dataManager.js';
import { renderNavbar } from '../sections/navbar.js';
import { renderFooter } from '../sections/footer.js';

export function renderPricingPage(app) {
  const data = getSiteData();
  const p = data.pricing;
  const coaching = data.coaching;

  renderNavbar(app);

  // Page hero
  const hero = document.createElement('section');
  hero.className = 'page-hero';
  hero.innerHTML = `
    <div class="page-hero-bg">
      <video src="${p.backgroundVideo}" class="page-hero-video" autoplay muted loop playsinline preload="auto"></video>
      <div class="page-hero-overlay"></div>
    </div>
    <div class="container">
      <div class="page-hero-badge">INVEST IN YOURSELF</div>
      <h1 class="heading-xl">PRICING</h1>
      <p class="body-lg">Transparent pricing with no hidden fees. Choose the plan that fits your goals and budget.</p>
    </div>
  `;
  app.appendChild(hero);

  // Value proposition
  const value = document.createElement('section');
  value.className = 'section section-dark';
  value.innerHTML = `
    <div class="container">
      <div class="content-block">
        <h2 class="heading-lg">MORE THAN JUST A PROGRAM</h2>
        <div class="content-columns">
          <div class="content-col">
            <p>When you invest in our platform, you're not just buying a workout plan. You're gaining access to a complete ecosystem designed to eliminate every barrier between you and your fitness goals. From expertly designed training programs to nutrition tracking tools, video demonstrations, community support, and ongoing education — everything you need is in one place.</p>
            <p>Consider the alternative: hiring a personal trainer at $60-150 per session, subscribing to multiple apps for nutrition tracking and workout logging, buying separate programs for different goals, and hoping it all works together. With us, you get an integrated system at a fraction of the cost.</p>
          </div>
          <div class="content-col">
            <p>Our pricing is deliberately simple because we believe in transparency. No hidden fees, no upsells within the platform, no paywalled features. When you sign up for a plan, you get everything that plan includes — period. We'd rather earn your loyalty through results than through lock-in tactics.</p>
            <p>And if you're not completely satisfied? Every plan comes with a 30-day money-back guarantee. We're that confident in what we've built. Try it, use it, track your progress — and if it's not for you, we'll refund every penny. No questions asked, no hard feelings.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  app.appendChild(value);

  // Pricing cards
  const section = document.createElement('section');
  section.className = 'section section-darker';
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
  app.appendChild(section);

  // 1-on-1 Coaching section
  const coachSection = document.createElement('section');
  coachSection.className = 'section section-dark coaching';
  coachSection.id = 'coaching';

  const benefitsHtml = coaching.benefits.map(b => `
    <div class="coaching-benefit">
      <div class="coaching-benefit-icon">${b.icon}</div>
      <h3>${b.title}</h3>
      <p>${b.description}</p>
    </div>
  `).join('');

  coachSection.innerHTML = `
    <div class="container">
      <div class="coaching-layout">
        <div class="coaching-text">
          <div class="coaching-label">${coaching.label}</div>
          <h2 class="heading-lg">${coaching.headline}</h2>
          <p class="body-lg">${coaching.description}</p>
          <div class="coaching-benefits-grid">
            ${benefitsHtml}
          </div>
          <a href="${coaching.ctaLink}" class="btn btn-primary">${coaching.ctaText}</a>
        </div>
        <div class="coaching-image-wrapper">
          <video src="${coaching.backgroundVideo}" class="coaching-video" autoplay muted loop playsinline preload="auto" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg); filter: grayscale(50%) contrast(1.2);"></video>
          <div class="coaching-image-accent"></div>
        </div>
      </div>
    </div>
  `;
  app.appendChild(coachSection);

  // Comparison section
  const comparison = document.createElement('section');
  comparison.className = 'section section-darker';
  comparison.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">WHY CHOOSE US OVER THE ALTERNATIVES</h2>
        <p class="body-lg">See how we compare to the typical fitness industry options.</p>
      </div>
      <div class="comparison-table">
        <div class="comparison-row comparison-header">
          <div class="comparison-cell">Feature</div>
          <div class="comparison-cell highlight">Our Platform</div>
          <div class="comparison-cell">Personal Trainer</div>
          <div class="comparison-cell">Generic App</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-cell">Structured Programs</div>
          <div class="comparison-cell highlight">YES</div>
          <div class="comparison-cell">YES</div>
          <div class="comparison-cell">Partial</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-cell">Video Demonstrations</div>
          <div class="comparison-cell highlight">YES</div>
          <div class="comparison-cell">NO</div>
          <div class="comparison-cell">YES</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-cell">Nutrition Tracking</div>
          <div class="comparison-cell highlight">YES</div>
          <div class="comparison-cell">Extra $$</div>
          <div class="comparison-cell">YES</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-cell">Community Support</div>
          <div class="comparison-cell highlight">YES</div>
          <div class="comparison-cell">NO</div>
          <div class="comparison-cell">Limited</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-cell">Monthly Cost</div>
          <div class="comparison-cell highlight">~$17-30</div>
          <div class="comparison-cell">$400-1200</div>
          <div class="comparison-cell">$10-20</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-cell">Proven Methodology</div>
          <div class="comparison-cell highlight">YES</div>
          <div class="comparison-cell">Varies</div>
          <div class="comparison-cell">NO</div>
        </div>
      </div>
    </div>
  `;
  app.appendChild(comparison);

  // Guarantee
  const guarantee = document.createElement('section');
  guarantee.className = 'section section-dark';
  guarantee.innerHTML = `
    <div class="container" style="text-align:center">
      <div class="guarantee-badge">30-DAY MONEY-BACK GUARANTEE</div>
      <h2 class="heading-lg" style="margin-bottom:20px">ZERO RISK. FULL COMMITMENT.</h2>
      <p class="body-lg" style="margin:0 auto 20px;max-width:700px">We stand behind our programs with a no-questions-asked money-back guarantee. Try any plan for a full 30 days. If you don't see value, email us and we'll refund you completely. We can make this promise because we know the results speak for themselves.</p>
      <a href="/contact" class="btn btn-primary">HAVE QUESTIONS? CONTACT US</a>
    </div>
  `;
  app.appendChild(guarantee);

  renderFooter(app);
}
