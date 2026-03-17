import { getSiteData } from '../dataManager.js';
import { renderNavbar } from '../sections/navbar.js';
import { renderFooter } from '../sections/footer.js';

export function renderResultsPage(app) {
  const data = getSiteData();
  const t = data.transformations;
  const testi = data.testimonials;

  renderNavbar(app);

  // Page hero
  const hero = document.createElement('section');
  hero.className = 'page-hero';
  hero.innerHTML = `
    <div class="page-hero-bg">
      <video src="${t.backgroundVideo}" class="page-hero-video" autoplay muted loop playsinline preload="auto"></video>
      <div class="page-hero-overlay"></div>
    </div>
    <div class="container">
      <div class="page-hero-badge">SUCCESS STORIES</div>
      <h1 class="heading-xl">REAL RESULTS</h1>
      <p class="body-lg">Proof that the process works. Every transformation here started with a decision to commit.</p>
    </div>
  `;
  app.appendChild(hero);

  // Intro copy
  const intro = document.createElement('section');
  intro.className = 'section section-dark';
  intro.innerHTML = `
    <div class="container">
      <div class="content-block">
        <h2 class="heading-lg">TRANSFORMATIONS DON'T LIE</h2>
        <div class="content-columns">
          <div class="content-col">
            <p>There's no better proof of a program's effectiveness than the people who've lived it. The transformations you see on this page represent real individuals who committed to the process — showing up day after day, following the plan, trusting the science, and pushing through the moments when quitting felt easier.</p>
            <p>These aren't overnight results. These are the product of structured programs, disciplined nutrition, consistent effort, and expert guidance. Every single person on this page started exactly where you might be right now — uncertain, skeptical, maybe even afraid. They chose to start anyway.</p>
          </div>
          <div class="content-col">
            <p>What separates a good program from a great one is the results it consistently delivers. We don't cherry-pick success stories — these transformations represent the standard our athletes achieve because the methodology works when you work it.</p>
            <p>Whether your goal is losing body fat, building lean muscle, competing on stage, or simply feeling stronger and more confident in your own skin, the principles are the same. Progressive overload. Nutritional precision. Accountability. Recovery. And the unwavering belief that you are capable of more than you think.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  app.appendChild(intro);

  // Transformations grid
  const transSection = document.createElement('section');
  transSection.className = 'section section-darker';
  transSection.id = 'transformations';

  const cardsHtml = t.items.map(item => `
    <div class="transform-card">
      <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
      <div class="transform-card-overlay">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');

  transSection.innerHTML = `
    <div class="section-header">
      <h2 class="heading-lg">${t.headline}</h2>
      <p class="body-lg">${t.subline}</p>
    </div>
    <div class="transformations-grid">
      ${cardsHtml}
    </div>
  `;
  app.appendChild(transSection);

  // Methodology
  const method = document.createElement('section');
  method.className = 'section section-dark';
  method.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">THE SCIENCE OF TRANSFORMATION</h2>
        <p class="body-lg">Understanding why our methodology delivers consistent results.</p>
      </div>
      <div class="method-grid">
        <div class="method-card">
          <div class="method-number">01</div>
          <h3>PROGRESSIVE OVERLOAD</h3>
          <p>The cornerstone of every program we build. By systematically increasing training stimulus over time — whether through added weight, increased volume, or reduced rest periods — your body is forced to adapt and grow. This isn't random intensity; it's calculated progression that compounds week after week.</p>
        </div>
        <div class="method-card">
          <div class="method-number">02</div>
          <h3>NUTRITIONAL PRECISION</h3>
          <p>Training breaks down muscle. Nutrition builds it back stronger. Our programs include macro-optimized nutrition protocols tailored to your specific goal — surplus for growth, deficit for fat loss, maintenance for recomposition. We take the confusion out of eating for performance.</p>
        </div>
        <div class="method-card">
          <div class="method-number">03</div>
          <h3>STRATEGIC RECOVERY</h3>
          <p>Growth doesn't happen in the gym — it happens during recovery. Our programs incorporate periodized deload phases, sleep optimization guidelines, and stress management strategies to ensure your body is always primed for the next phase of training.</p>
        </div>
        <div class="method-card">
          <div class="method-number">04</div>
          <h3>ACCOUNTABILITY SYSTEMS</h3>
          <p>The missing piece in most fitness journeys. Through community support, progress tracking, and coaching check-ins, we create an environment where showing up consistently becomes the default — not the exception. Transformation is a team sport.</p>
        </div>
      </div>
    </div>
  `;
  app.appendChild(method);

  // Testimonials
  const testiSection = document.createElement('section');
  testiSection.className = 'section section-darker';
  testiSection.id = 'testimonials';

  const testiHtml = testi.items.map(item => `
    <div class="testimonial-card">
      <blockquote>${item.quote}</blockquote>
      <div class="author">${item.author}</div>
    </div>
  `).join('');

  testiSection.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">${testi.headline}</h2>
        <p class="body-lg">${testi.subline}</p>
      </div>
      <div class="testimonials-grid">
        ${testiHtml}
      </div>
    </div>
  `;
  app.appendChild(testiSection);

  // CTA
  const cta = document.createElement('section');
  cta.className = 'section section-dark';
  cta.innerHTML = `
    <div class="container" style="text-align:center">
      <h2 class="heading-lg" style="margin-bottom:20px">YOUR TRANSFORMATION STARTS HERE</h2>
      <p class="body-lg" style="margin:0 auto 40px">These results aren't reserved for the genetically gifted. They're available to anyone willing to commit. The only question is — are you ready?</p>
      <a href="/programs" class="btn btn-primary">EXPLORE PROGRAMS</a>
    </div>
  `;
  app.appendChild(cta);

  renderFooter(app);
}
