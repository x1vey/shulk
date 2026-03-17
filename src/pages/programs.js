import { getSiteData } from '../dataManager.js';
import { renderNavbar } from '../sections/navbar.js';
import { renderFooter } from '../sections/footer.js';

export function renderProgramsPage(app) {
  const data = getSiteData();
  const p = data.programs;

  renderNavbar(app);

  // Page hero banner
  const hero = document.createElement('section');
  hero.className = 'page-hero';
  hero.innerHTML = `
    <div class="page-hero-bg">
      <video src="${p.backgroundVideo}" class="page-hero-video" autoplay muted loop playsinline preload="auto"></video>
      <div class="page-hero-overlay"></div>
    </div>
    <div class="container">
      <div class="page-hero-badge">TRAINING</div>
      <h1 class="heading-xl">OUR PROGRAMS</h1>
      <p class="body-lg">Structured. Science-backed. Built for results at every level.</p>
    </div>
  `;
  app.appendChild(hero);

  // Philosophy section
  const philosophy = document.createElement('section');
  philosophy.className = 'section section-dark';
  philosophy.innerHTML = `
    <div class="container">
      <div class="content-block">
        <h2 class="heading-lg">THE METHODOLOGY BEHIND THE PROGRAMS</h2>
        <div class="content-columns">
          <div class="content-col">
            <p>Every program in our library is built on the principles of progressive overload, periodization, and specificity — the three pillars that separate real training from random workouts. We don't believe in cookie-cutter routines or one-size-fits-all approaches.</p>
            <p>Each program has been designed, tested, and refined through hundreds of real-world applications. From the warm-up protocols to the deload weeks, every detail is intentional. We track the metrics that matter — volume, intensity, frequency, and recovery — to ensure you're always moving forward.</p>
          </div>
          <div class="content-col">
            <p>Our training philosophy is rooted in the science of muscle physiology and biomechanics. We understand that hypertrophy, strength, and fat loss each require distinct stimulus patterns. That's why we offer specialized programs for each goal rather than trying to do everything at once.</p>
            <p>Whether you're a complete beginner learning proper movement patterns or an advanced athlete preparing for competition, our programs meet you exactly where you are and systematically progress you toward where you want to be. No plateaus. No wasted effort.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  app.appendChild(philosophy);

  // Programs grid
  const section = document.createElement('section');
  section.className = 'section section-darker';
  section.id = 'programs';

  const cardsHtml = p.items.map(item => `
    <div class="program-card">
      <img class="program-card-image" src="${item.imageUrl}" alt="${item.title}" loading="lazy">
      <div class="program-card-body">
        ${item.tag ? `<span class="program-card-tag">${item.tag}</span>` : ''}
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="program-card-duration">DURATION: ${item.duration}</div>
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">${p.headline}</h2>
        <p class="body-lg">${p.subline}</p>
      </div>
      <div class="programs-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
  app.appendChild(section);

  // What's Included section
  const included = document.createElement('section');
  included.className = 'section section-dark';
  included.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">WHAT'S INCLUDED IN EVERY PROGRAM</h2>
        <p class="body-lg">No matter which program you choose, you get access to the full suite of tools designed to accelerate your results.</p>
      </div>
      <div class="included-grid">
        <div class="included-item">
          <h3>HD VIDEO DEMONSTRATIONS</h3>
          <p>Every exercise comes with professional, high-definition video demonstrations. We show you proper form, common mistakes to avoid, muscle activation cues, and exercise modifications for different skill levels. No guessing — just execute with confidence.</p>
        </div>
        <div class="included-item">
          <h3>PROGRESSIVE OVERLOAD TRACKING</h3>
          <p>Built-in progression protocols tell you exactly when and how to increase weight, reps, or sets. Our tracking system ensures you're always pushing the boundary of what your body can handle — the single most important factor in long-term growth.</p>
        </div>
        <div class="included-item">
          <h3>STRUCTURED DELOAD WEEKS</h3>
          <p>Every program includes strategically placed deload weeks to prevent overtraining and optimize recovery. These recovery phases are when your body actually builds the muscle and strength you've been training for.</p>
        </div>
        <div class="included-item">
          <h3>NUTRITION GUIDELINES</h3>
          <p>Pair your training with goal-specific nutrition recommendations. Whether you're in a caloric surplus for muscle gain or a deficit for fat loss, we provide macro targets, meal timing strategies, and supplement guidance.</p>
        </div>
        <div class="included-item">
          <h3>MOBILE-OPTIMIZED PORTAL</h3>
          <p>Access your program anywhere, anytime. Our training portal is fully optimized for mobile devices, so you can pull up your workout in the gym, track your sets in real-time, and log your progress on the go.</p>
        </div>
        <div class="included-item">
          <h3>COMMUNITY ACCESS</h3>
          <p>Join a private community of athletes running the same programs. Share your progress, ask questions, find accountability partners, and stay motivated with people who understand the grind.</p>
        </div>
      </div>
    </div>
  `;
  app.appendChild(included);

  // CTA section
  const cta = document.createElement('section');
  cta.className = 'section section-darker';
  cta.innerHTML = `
    <div class="container" style="text-align:center">
      <h2 class="heading-lg" style="margin-bottom:20px">READY TO START?</h2>
      <p class="body-lg" style="margin:0 auto 40px">Choose the program that matches your goal and get started today. Every day you wait is a day of progress left on the table.</p>
      <a href="/pricing" class="btn btn-primary">VIEW PRICING</a>
    </div>
  `;
  app.appendChild(cta);

  renderFooter(app);
}
