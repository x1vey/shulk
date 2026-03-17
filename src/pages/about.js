import { getSiteData } from '../dataManager.js';
import { renderNavbar } from '../sections/navbar.js';
import { renderFooter } from '../sections/footer.js';

export function renderAboutPage(app) {
  const data = getSiteData();
  const about = data.about;
  const features = data.features;

  renderNavbar(app);

  // Page hero
  const hero = document.createElement('section');
  hero.className = 'page-hero';
  hero.innerHTML = `
    <div class="page-hero-bg">
      <video src="${about.backgroundVideo}" class="page-hero-video" autoplay muted loop playsinline preload="auto"></video>
      <div class="page-hero-overlay"></div>
    </div>
    <div class="container">
      <div class="page-hero-badge">WHO WE ARE</div>
      <h1 class="heading-xl">ABOUT US</h1>
      <p class="body-lg">${about.subline}</p>
    </div>
  `;
  app.appendChild(hero);

  // Story section
  const story = document.createElement('section');
  story.className = 'section section-dark';
  story.innerHTML = `
    <div class="container">
      <div class="content-block">
        <h2 class="heading-lg">${about.headline}</h2>
        <div class="content-columns">
          <div class="content-col">
            <p>${about.story}</p>
            <p>Our team consists of certified coaches, competitive athletes, and sports science professionals who have spent years refining the craft of physical transformation. We've worked with beginners who had never touched a barbell and elite competitors who needed that final edge on stage. The common thread? A relentless commitment to doing things the right way.</p>
          </div>
          <div class="content-col">
            <p>We built this platform because we saw a gap in the fitness industry — a space between expensive personal training and generic, one-size-fits-all apps. We wanted to create something that delivered the quality of premium coaching with the accessibility of modern technology.</p>
            <p>The result is a training ecosystem that adapts to your goals, tracks your progress, and connects you with a community of people who share your commitment to excellence. This isn't just another fitness app. This is a training partner that never takes a day off.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  app.appendChild(story);

  // Mission section
  const mission = document.createElement('section');
  mission.className = 'section section-darker';
  mission.innerHTML = `
    <div class="container" style="text-align:center">
      <h2 class="heading-lg" style="margin-bottom:20px">${about.mission.headline}</h2>
      <p class="body-lg" style="margin:0 auto 60px;max-width:800px">${about.mission.description}</p>
    </div>
  `;
  app.appendChild(mission);

  // Values section
  const values = document.createElement('section');
  values.className = 'section section-dark';

  const valuesHtml = about.values.map(v => `
    <div class="value-card">
      <div class="value-icon">${v.icon}</div>
      <h3>${v.title}</h3>
      <p>${v.description}</p>
    </div>
  `).join('');

  values.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">WHAT WE STAND FOR</h2>
        <p class="body-lg">The core values that guide every program, interaction, and decision we make.</p>
      </div>
      <div class="values-grid">
        ${valuesHtml}
      </div>
    </div>
  `;
  app.appendChild(values);

  // Features / Methodology
  const featSection = document.createElement('section');
  featSection.className = 'section section-darker';
  featSection.id = 'features';

  const blocksHtml = features.items.map((item, i) => {
    const words = item.title.split(' ');
    const titleHtml = words.length > 1
      ? `<span>${words[0]}</span> ${words.slice(1).join(' ')}`
      : item.title;

    return `
      <div class="feature-block">
        <div class="feature-text">
          <h2>${titleHtml}</h2>
          <p>${item.description}</p>
          <a href="/programs" class="btn btn-outline">Explore Programs</a>
        </div>
        <div class="feature-image">
          <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
        </div>
      </div>
    `;
  }).join('');

  featSection.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">OUR APPROACH</h2>
        <p class="body-lg">The tools and methodology that power every program we build.</p>
      </div>
      ${blocksHtml}
    </div>
  `;
  app.appendChild(featSection);

  // Credentials
  const creds = document.createElement('section');
  creds.className = 'section section-dark';

  const credsHtml = about.credentials.map(c => `
    <div class="credential-item">
      <span>${c}</span>
    </div>
  `).join('');

  creds.innerHTML = `
    <div class="container" style="text-align:center">
      <h2 class="heading-lg" style="margin-bottom:20px">CREDENTIALS & CERTIFICATIONS</h2>
      <p class="body-lg" style="margin:0 auto 48px;max-width:600px">Our coaching team holds industry-leading certifications and brings decades of combined experience.</p>
      <div class="credentials-list">
        ${credsHtml}
      </div>
    </div>
  `;
  app.appendChild(creds);

  // CTA
  const cta = document.createElement('section');
  cta.className = 'section section-darker';
  cta.innerHTML = `
    <div class="container" style="text-align:center">
      <h2 class="heading-lg" style="margin-bottom:20px">READY TO WORK WITH US?</h2>
      <p class="body-lg" style="margin:0 auto 40px">Whether you choose a self-guided program or premium 1-on-1 coaching, we're here to support your journey every step of the way.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
        <a href="/programs" class="btn btn-primary">EXPLORE PROGRAMS</a>
        <a href="/contact" class="btn btn-outline">GET IN TOUCH</a>
      </div>
    </div>
  `;
  app.appendChild(cta);

  renderFooter(app);
}
