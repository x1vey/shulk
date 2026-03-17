import { getSiteData } from '../dataManager.js';
import { renderNavbar } from '../sections/navbar.js';
import { renderFooter } from '../sections/footer.js';

export function renderContactPage(app) {
  const data = getSiteData();
  const contact = data.contact;

  renderNavbar(app);

  // Page hero
  const hero = document.createElement('section');
  hero.className = 'page-hero';
  hero.innerHTML = `
    <div class="page-hero-bg">
      <video src="${contact.backgroundVideo}" class="page-hero-video" autoplay muted loop playsinline preload="auto"></video>
      <div class="page-hero-overlay"></div>
    </div>
    <div class="container">
      <div class="page-hero-badge">REACH OUT</div>
      <h1 class="heading-xl">CONTACT US</h1>
      <p class="body-lg">${contact.subline}</p>
    </div>
  `;
  app.appendChild(hero);

  // Contact layout
  const section = document.createElement('section');
  section.className = 'section section-dark';
  section.innerHTML = `
    <div class="container">
      <div class="contact-layout">
        <div class="contact-form-wrapper">
          <h2 class="heading-lg" style="margin-bottom:12px">SEND US A MESSAGE</h2>
          <p class="body-lg" style="margin-bottom:32px">Fill out the form below and we'll get back to you within 24 hours. Whether you have questions about our programs, need help choosing the right plan, or want to discuss 1-on-1 coaching — we're here to help.</p>
          <form class="contact-form" id="contactForm">
            <div class="admin-field-row">
              <div class="admin-field">
                <label for="contactName">Your Name</label>
                <input type="text" id="contactName" placeholder="John Doe" required>
              </div>
              <div class="admin-field">
                <label for="contactEmail">Email Address</label>
                <input type="text" id="contactEmail" placeholder="john@example.com" required>
              </div>
            </div>
            <div class="admin-field">
              <label for="contactSubject">Subject</label>
              <input type="text" id="contactSubject" placeholder="What can we help you with?">
            </div>
            <div class="admin-field">
              <label for="contactMessage">Message</label>
              <textarea id="contactMessage" placeholder="Tell us about your goals, questions, or how we can help..." style="min-height:160px" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%">SEND MESSAGE</button>
          </form>
          <div class="contact-form-success" id="contactSuccess" style="display:none">
            <h3>MESSAGE SENT!</h3>
            <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
          </div>
        </div>
        <div class="contact-info">
          <div class="contact-info-card">
            <h3>EMAIL</h3>
            <p><a href="mailto:${contact.email}">${contact.email}</a></p>
          </div>
          <div class="contact-info-card">
            <h3>PHONE</h3>
            <p><a href="tel:${contact.phone.replace(/[^+\d]/g, '')}">${contact.phone}</a></p>
          </div>
          <div class="contact-info-card">
            <h3>LOCATION</h3>
            <p>${contact.address}</p>
          </div>
          <div class="contact-info-card">
            <h3>HOURS</h3>
            <p>${contact.hours.replace(/\n/g, '<br>')}</p>
          </div>
          <div class="contact-info-card">
            <h3>SOCIAL</h3>
            <div class="footer-social" style="margin-top:12px">
              ${data.footer.socialLinks.instagram ? `<a href="${data.footer.socialLinks.instagram}" target="_blank" rel="noopener" aria-label="Instagram">INSTAGRAM</a>` : ''}
              ${data.footer.socialLinks.youtube ? `<a href="${data.footer.socialLinks.youtube}" target="_blank" rel="noopener" aria-label="YouTube">YOUTUBE</a>` : ''}
              ${data.footer.socialLinks.whatsapp ? `<a href="${data.footer.socialLinks.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">WHATSAPP</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  app.appendChild(section);

  // Wire up form submission
  const form = section.querySelector('#contactForm');
  const success = section.querySelector('#contactSuccess');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    success.style.display = 'block';
  });

  // FAQ section
  const faq = document.createElement('section');
  faq.className = 'section section-darker';

  const faqHtml = contact.faq.map((item, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-question" aria-expanded="false">
        <span>${item.question}</span>
        <span class="faq-toggle">+</span>
      </button>
      <div class="faq-answer">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');

  faq.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">FREQUENTLY ASKED QUESTIONS</h2>
        <p class="body-lg">Quick answers to the questions we hear most often.</p>
      </div>
      <div class="faq-list">
        ${faqHtml}
      </div>
    </div>
  `;
  app.appendChild(faq);

  // FAQ accordion behavior
  faq.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      faq.querySelectorAll('.faq-item').forEach(fi => fi.classList.remove('open'));
      faq.querySelectorAll('.faq-question').forEach(q => {
        q.setAttribute('aria-expanded', 'false');
        q.querySelector('.faq-toggle').textContent = '+';
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('.faq-toggle').textContent = '−';
      }
    });
  });

  renderFooter(app);
}
