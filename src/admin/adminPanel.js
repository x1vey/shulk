import { ADMIN_PASSWORD } from '../../password.js';
import { getSiteData, saveSiteData, resetSiteData, applyColors } from '../dataManager.js';

export function renderAdminPanel(container) {
  // Check if already authenticated
  const isAuth = sessionStorage.getItem('shulk_admin_auth') === 'true';
  if (isAuth) {
    renderDashboard(container);
  } else {
    renderPasswordGate(container);
  }
}

function renderPasswordGate(container) {
  const gate = document.createElement('div');
  gate.className = 'admin-gate';
  gate.innerHTML = `
    <div class="admin-gate-box">
      <h1>Admin Panel</h1>
      <p>Enter password to access the dashboard</p>
      <div class="error" id="gateError">Incorrect password. Try again.</div>
      <input type="password" id="gatePassword" placeholder="••••" maxlength="10" autocomplete="off">
      <button class="btn btn-primary" id="gateSubmit" style="width:100%">Enter</button>
    </div>
  `;
  container.appendChild(gate);

  const input = gate.querySelector('#gatePassword');
  const btn = gate.querySelector('#gateSubmit');
  const error = gate.querySelector('#gateError');

  const tryLogin = () => {
    if (input.value === ADMIN_PASSWORD) {
      sessionStorage.setItem('shulk_admin_auth', 'true');
      container.innerHTML = '';
      renderDashboard(container);
    } else {
      error.classList.add('show');
      input.value = '';
      input.focus();
    }
  };

  btn.addEventListener('click', tryLogin);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') tryLogin();
    error.classList.remove('show');
  });

  setTimeout(() => input.focus(), 100);
}

function renderDashboard(container) {
  const data = getSiteData();

  const dashboard = document.createElement('div');
  dashboard.className = 'admin-dashboard';

  dashboard.innerHTML = `
    <div class="admin-topbar">
      <h1>SHULK <span>ADMIN</span></h1>
      <div class="admin-topbar-actions">
        <a href="#/" class="btn btn-ghost">← View Site</a>
        <button class="btn btn-ghost" id="adminReset">Reset All</button>
        <button class="btn btn-primary" id="adminSave">Save Changes</button>
      </div>
    </div>
    <div class="admin-tabs" id="adminTabs">
      <button class="admin-tab active" data-tab="colors">Colors</button>
      <button class="admin-tab" data-tab="hero">Hero & VSL</button>
      <button class="admin-tab" data-tab="sections">Sections Copy</button>
      <button class="admin-tab" data-tab="testimonials">Testimonials</button>
      <button class="admin-tab" data-tab="programs">Programs</button>
      <button class="admin-tab" data-tab="pricing">Pricing</button>
      <button class="admin-tab" data-tab="links">Links</button>
      <button class="admin-tab" data-tab="images">Images</button>
    </div>
    <div class="admin-body" id="adminBody">
      <!-- Colors Tab -->
      <div class="admin-section active" data-section="colors">
        <div class="admin-field-group">
          <h3>Site Colors</h3>
          <div class="admin-field-row">
            <div class="admin-field">
              <label>Background Color</label>
              <input type="color" id="colorPrimary" value="${data.colors.primary}">
            </div>
            <div class="admin-field">
              <label>Accent Color (Red)</label>
              <input type="color" id="colorAccent" value="${data.colors.accent}">
            </div>
          </div>
          <div class="admin-field">
            <label>Text Color</label>
            <input type="color" id="colorText" value="${data.colors.text}">
          </div>
        </div>
      </div>

      <!-- Hero & VSL Tab -->
      <div class="admin-section" data-section="hero">
        <div class="admin-field-group">
          <h3>Hero Content</h3>
          <div class="admin-field">
            <label>Headline</label>
            <input type="text" id="heroHeadline" value="${escAttr(data.hero.headline)}">
          </div>
          <div class="admin-field">
            <label>Subline</label>
            <textarea id="heroSubline">${escHtml(data.hero.subline)}</textarea>
          </div>
          <div class="admin-field-row">
            <div class="admin-field">
              <label>CTA Button Text</label>
              <input type="text" id="heroCtaText" value="${escAttr(data.hero.ctaText)}">
            </div>
            <div class="admin-field">
              <label>CTA Button Link</label>
              <input type="url" id="heroCtaLink" value="${escAttr(data.hero.ctaLink)}">
            </div>
          </div>
        </div>
        <div class="admin-field-group">
          <h3>Video Sales Letter (VSL)</h3>
          <div class="admin-field">
            <label class="admin-toggle">
              <input type="checkbox" id="heroVslEnabled" ${data.hero.vslEnabled ? 'checked' : ''}>
              <div class="admin-toggle-track"></div>
              <span class="admin-toggle-label">Enable VSL in Hero</span>
            </label>
          </div>
          <div class="admin-field">
            <label>VSL Embed URL (YouTube/Vimeo embed URL)</label>
            <input type="url" id="heroVslUrl" value="${escAttr(data.hero.vslUrl)}">
          </div>
        </div>
      </div>

      <!-- Sections Copy Tab -->
      <div class="admin-section" data-section="sections">
        <div class="admin-field-group">
          <h3>Navbar</h3>
          <div class="admin-field">
            <label>Logo Text</label>
            <input type="text" id="navLogoText" value="${escAttr(data.navbar.logoText)}">
          </div>
          <div class="admin-field">
            <label>CTA Button Text</label>
            <input type="text" id="navCtaText" value="${escAttr(data.navbar.ctaText)}">
          </div>
        </div>
        <div class="admin-field-group">
          <h3>Ticker / Marquee</h3>
          <div class="admin-field">
            <label>Ticker Text</label>
            <input type="text" id="tickerText" value="${escAttr(data.ticker.text)}">
          </div>
        </div>
        <div class="admin-field-group">
          <h3>Transformations Section</h3>
          <div class="admin-field">
            <label>Headline</label>
            <input type="text" id="transHeadline" value="${escAttr(data.transformations.headline)}">
          </div>
          <div class="admin-field">
            <label>Subline</label>
            <input type="text" id="transSubline" value="${escAttr(data.transformations.subline)}">
          </div>
        </div>
        <div class="admin-field-group">
          <h3>Testimonials Section</h3>
          <div class="admin-field">
            <label>Headline</label>
            <input type="text" id="testiHeadline" value="${escAttr(data.testimonials.headline)}">
          </div>
          <div class="admin-field">
            <label>Subline</label>
            <input type="text" id="testiSubline" value="${escAttr(data.testimonials.subline)}">
          </div>
        </div>
        <div class="admin-field-group">
          <h3>Programs Section</h3>
          <div class="admin-field">
            <label>Headline</label>
            <input type="text" id="progsHeadline" value="${escAttr(data.programs.headline)}">
          </div>
          <div class="admin-field">
            <label>Subline</label>
            <textarea id="progsSubline">${escHtml(data.programs.subline)}</textarea>
          </div>
        </div>
        <div class="admin-field-group">
          <h3>Pricing Section</h3>
          <div class="admin-field">
            <label>Headline</label>
            <input type="text" id="pricingHeadline" value="${escAttr(data.pricing.headline)}">
          </div>
          <div class="admin-field">
            <label>Subline</label>
            <textarea id="pricingSubline">${escHtml(data.pricing.subline)}</textarea>
          </div>
        </div>
        <div class="admin-field-group">
          <h3>Footer</h3>
          <div class="admin-field">
            <label>Tagline</label>
            <input type="text" id="footerTagline" value="${escAttr(data.footer.tagline)}">
          </div>
          <div class="admin-field">
            <label>Description</label>
            <textarea id="footerDesc">${escHtml(data.footer.description)}</textarea>
          </div>
          <div class="admin-field-row">
            <div class="admin-field">
              <label>CTA Text</label>
              <input type="text" id="footerCtaText" value="${escAttr(data.footer.ctaText)}">
            </div>
            <div class="admin-field">
              <label>CTA Link</label>
              <input type="url" id="footerCtaLink" value="${escAttr(data.footer.ctaLink)}">
            </div>
          </div>
          <div class="admin-field">
            <label>Copyright</label>
            <input type="text" id="footerCopyright" value="${escAttr(data.footer.copyright)}">
          </div>
        </div>
      </div>

      <!-- Testimonials Tab -->
      <div class="admin-section" data-section="testimonials">
        <div class="admin-field-group">
          <h3>Testimonial Items</h3>
          <div id="testimonialItems">
            ${data.testimonials.items.map((item, i) => `
              <div class="admin-item-card">
                <h4>Testimonial ${i + 1}</h4>
                <div class="admin-field">
                  <label>Quote</label>
                  <textarea class="testi-quote" data-index="${i}">${escHtml(item.quote)}</textarea>
                </div>
                <div class="admin-field">
                  <label>Author (e.g. @username)</label>
                  <input type="text" class="testi-author" data-index="${i}" value="${escAttr(item.author)}">
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Programs Tab -->
      <div class="admin-section" data-section="programs">
        <div class="admin-field-group">
          <h3>Program Items</h3>
          <div id="programItems">
            ${data.programs.items.map((item, i) => `
              <div class="admin-item-card">
                <h4>Program ${i + 1}</h4>
                <div class="admin-field-row">
                  <div class="admin-field">
                    <label>Title</label>
                    <input type="text" class="prog-title" data-index="${i}" value="${escAttr(item.title)}">
                  </div>
                  <div class="admin-field">
                    <label>Duration</label>
                    <input type="text" class="prog-duration" data-index="${i}" value="${escAttr(item.duration)}">
                  </div>
                </div>
                <div class="admin-field">
                  <label>Description</label>
                  <textarea class="prog-desc" data-index="${i}">${escHtml(item.description)}</textarea>
                </div>
                <div class="admin-field-row">
                  <div class="admin-field">
                    <label>Image URL</label>
                    <input type="url" class="prog-image" data-index="${i}" value="${escAttr(item.imageUrl)}">
                  </div>
                  <div class="admin-field">
                    <label>Tag (e.g. POPULAR, ELITE)</label>
                    <input type="text" class="prog-tag" data-index="${i}" value="${escAttr(item.tag)}">
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Pricing Tab -->
      <div class="admin-section" data-section="pricing">
        <div class="admin-field-group">
          <h3>Pricing Plans</h3>
          <div id="pricingItems">
            ${data.pricing.plans.map((plan, i) => `
              <div class="admin-item-card">
                <h4>${plan.name}</h4>
                <div class="admin-field-row">
                  <div class="admin-field">
                    <label>Plan Name</label>
                    <input type="text" class="plan-name" data-index="${i}" value="${escAttr(plan.name)}">
                  </div>
                  <div class="admin-field">
                    <label>Price</label>
                    <input type="text" class="plan-price" data-index="${i}" value="${escAttr(plan.price)}">
                  </div>
                </div>
                <div class="admin-field-row">
                  <div class="admin-field">
                    <label>Period (e.g. /year, /month)</label>
                    <input type="text" class="plan-period" data-index="${i}" value="${escAttr(plan.period)}">
                  </div>
                  <div class="admin-field">
                    <label>Per Month Text</label>
                    <input type="text" class="plan-permonth" data-index="${i}" value="${escAttr(plan.perMonth)}">
                  </div>
                </div>
                <div class="admin-field-row">
                  <div class="admin-field">
                    <label>CTA Text</label>
                    <input type="text" class="plan-cta-text" data-index="${i}" value="${escAttr(plan.ctaText)}">
                  </div>
                  <div class="admin-field">
                    <label>CTA Link</label>
                    <input type="url" class="plan-cta-link" data-index="${i}" value="${escAttr(plan.ctaLink)}">
                  </div>
                </div>
                <div class="admin-field">
                  <label>Features (comma-separated)</label>
                  <input type="text" class="plan-features" data-index="${i}" value="${escAttr(plan.features.join(', '))}">
                </div>
                <div class="admin-field">
                  <label>Badge (e.g. BEST VALUE, leave blank for none)</label>
                  <input type="text" class="plan-badge" data-index="${i}" value="${escAttr(plan.badge)}">
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Links Tab -->
      <div class="admin-section" data-section="links">
        <div class="admin-field-group">
          <h3>Button Links</h3>
          <div class="admin-field">
            <label>Hero CTA Link</label>
            <input type="url" id="linkHeroCta" value="${escAttr(data.hero.ctaLink)}">
          </div>
          <div class="admin-field">
            <label>Navbar CTA Link</label>
            <input type="url" id="linkNavCta" value="${escAttr(data.navbar.ctaLink)}">
          </div>
          <div class="admin-field">
            <label>Footer CTA Link</label>
            <input type="url" id="linkFooterCta" value="${escAttr(data.footer.ctaLink)}">
          </div>
        </div>
        <div class="admin-field-group">
          <h3>Social Links</h3>
          <div class="admin-field">
            <label>Instagram</label>
            <input type="url" id="linkInstagram" value="${escAttr(data.footer.socialLinks.instagram)}">
          </div>
          <div class="admin-field">
            <label>YouTube</label>
            <input type="url" id="linkYoutube" value="${escAttr(data.footer.socialLinks.youtube)}">
          </div>
          <div class="admin-field">
            <label>TikTok</label>
            <input type="url" id="linkTiktok" value="${escAttr(data.footer.socialLinks.tiktok)}">
          </div>
        </div>
        <div class="admin-field-group">
          <h3>Navbar Links</h3>
          ${data.navbar.links.map((link, i) => `
            <div class="admin-item-card">
              <div class="admin-field-row">
                <div class="admin-field">
                  <label>Label</label>
                  <input type="text" class="nav-link-label" data-index="${i}" value="${escAttr(link.label)}">
                </div>
                <div class="admin-field">
                  <label>Href</label>
                  <input type="text" class="nav-link-href" data-index="${i}" value="${escAttr(link.href)}">
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Images Tab -->
      <div class="admin-section" data-section="images">
        <div class="admin-field-group">
          <h3>Transformation Images</h3>
          ${data.transformations.items.map((item, i) => `
            <div class="admin-item-card">
              <h4>${item.title}</h4>
              <div class="admin-field">
                <label>Image URL</label>
                <input type="url" class="trans-image" data-index="${i}" value="${escAttr(item.imageUrl)}">
                <img class="admin-img-preview" src="${item.imageUrl}" alt="Preview" onerror="this.style.display='none'">
              </div>
              <div class="admin-field-row">
                <div class="admin-field">
                  <label>Title</label>
                  <input type="text" class="trans-title" data-index="${i}" value="${escAttr(item.title)}">
                </div>
                <div class="admin-field">
                  <label>Description</label>
                  <input type="text" class="trans-desc" data-index="${i}" value="${escAttr(item.description)}">
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="admin-field-group">
          <h3>Feature Images</h3>
          ${data.features.items.map((item, i) => `
            <div class="admin-item-card">
              <h4>${item.title}</h4>
              <div class="admin-field">
                <label>Image URL</label>
                <input type="url" class="feat-image" data-index="${i}" value="${escAttr(item.imageUrl)}">
                <img class="admin-img-preview" src="${item.imageUrl}" alt="Preview" onerror="this.style.display='none'">
              </div>
              <div class="admin-field-row">
                <div class="admin-field">
                  <label>Title</label>
                  <input type="text" class="feat-title" data-index="${i}" value="${escAttr(item.title)}">
                </div>
                <div class="admin-field">
                  <label>Description</label>
                  <textarea class="feat-desc" data-index="${i}">${escHtml(item.description)}</textarea>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="admin-toast" id="adminToast">Changes saved successfully!</div>
  `;

  container.appendChild(dashboard);

  // Tab switching
  const tabs = dashboard.querySelectorAll('.admin-tab');
  const sections = dashboard.querySelectorAll('.admin-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      dashboard.querySelector(`[data-section="${tab.dataset.tab}"]`).classList.add('active');
    });
  });

  // Save
  dashboard.querySelector('#adminSave').addEventListener('click', () => {
    const updated = collectFormData(data, dashboard);
    saveSiteData(updated);
    applyColors(updated.colors);
    showToast(dashboard);
  });

  // Reset
  dashboard.querySelector('#adminReset').addEventListener('click', () => {
    if (confirm('Reset all changes to defaults? This cannot be undone.')) {
      resetSiteData();
      container.innerHTML = '';
      renderDashboard(container);
      showToast(dashboard, 'All changes reset to defaults!');
    }
  });

  // Live preview for image URLs
  dashboard.querySelectorAll('input[type="url"]').forEach(input => {
    const preview = input.parentElement.querySelector('.admin-img-preview');
    if (preview) {
      input.addEventListener('input', () => {
        preview.src = input.value;
        preview.style.display = input.value ? '' : 'none';
      });
    }
  });
}

function collectFormData(currentData, dashboard) {
  const data = JSON.parse(JSON.stringify(currentData));

  // Colors
  data.colors.primary = dashboard.querySelector('#colorPrimary').value;
  data.colors.accent = dashboard.querySelector('#colorAccent').value;
  data.colors.text = dashboard.querySelector('#colorText').value;

  // Hero
  data.hero.headline = dashboard.querySelector('#heroHeadline').value;
  data.hero.subline = dashboard.querySelector('#heroSubline').value;
  data.hero.ctaText = dashboard.querySelector('#heroCtaText').value;
  data.hero.ctaLink = dashboard.querySelector('#heroCtaLink').value;
  data.hero.vslEnabled = dashboard.querySelector('#heroVslEnabled').checked;
  data.hero.vslUrl = dashboard.querySelector('#heroVslUrl').value;

  // Navbar
  data.navbar.logoText = dashboard.querySelector('#navLogoText').value;
  data.navbar.ctaText = dashboard.querySelector('#navCtaText').value;
  data.navbar.ctaLink = dashboard.querySelector('#linkNavCta').value;

  // Ticker
  data.ticker.text = dashboard.querySelector('#tickerText').value;

  // Section headings
  data.transformations.headline = dashboard.querySelector('#transHeadline').value;
  data.transformations.subline = dashboard.querySelector('#transSubline').value;
  data.testimonials.headline = dashboard.querySelector('#testiHeadline').value;
  data.testimonials.subline = dashboard.querySelector('#testiSubline').value;
  data.programs.headline = dashboard.querySelector('#progsHeadline').value;
  data.programs.subline = dashboard.querySelector('#progsSubline').value;
  data.pricing.headline = dashboard.querySelector('#pricingHeadline').value;
  data.pricing.subline = dashboard.querySelector('#pricingSubline').value;

  // Footer
  data.footer.tagline = dashboard.querySelector('#footerTagline').value;
  data.footer.description = dashboard.querySelector('#footerDesc').value;
  data.footer.ctaText = dashboard.querySelector('#footerCtaText').value;
  data.footer.ctaLink = dashboard.querySelector('#footerCtaLink').value;
  data.footer.copyright = dashboard.querySelector('#footerCopyright').value;

  // Links
  data.hero.ctaLink = dashboard.querySelector('#linkHeroCta').value;
  data.footer.ctaLink = dashboard.querySelector('#linkFooterCta').value;
  data.footer.socialLinks.instagram = dashboard.querySelector('#linkInstagram').value;
  data.footer.socialLinks.youtube = dashboard.querySelector('#linkYoutube').value;
  data.footer.socialLinks.tiktok = dashboard.querySelector('#linkTiktok').value;

  // Navbar links
  dashboard.querySelectorAll('.nav-link-label').forEach(el => {
    const i = parseInt(el.dataset.index);
    if (data.navbar.links[i]) {
      data.navbar.links[i].label = el.value;
      data.navbar.links[i].href = dashboard.querySelector(`.nav-link-href[data-index="${i}"]`).value;
    }
  });

  // Testimonials
  dashboard.querySelectorAll('.testi-quote').forEach(el => {
    const i = parseInt(el.dataset.index);
    if (data.testimonials.items[i]) {
      data.testimonials.items[i].quote = el.value;
      data.testimonials.items[i].author = dashboard.querySelector(`.testi-author[data-index="${i}"]`).value;
    }
  });

  // Programs
  dashboard.querySelectorAll('.prog-title').forEach(el => {
    const i = parseInt(el.dataset.index);
    if (data.programs.items[i]) {
      data.programs.items[i].title = el.value;
      data.programs.items[i].duration = dashboard.querySelector(`.prog-duration[data-index="${i}"]`).value;
      data.programs.items[i].description = dashboard.querySelector(`.prog-desc[data-index="${i}"]`).value;
      data.programs.items[i].imageUrl = dashboard.querySelector(`.prog-image[data-index="${i}"]`).value;
      data.programs.items[i].tag = dashboard.querySelector(`.prog-tag[data-index="${i}"]`).value;
    }
  });

  // Pricing plans
  dashboard.querySelectorAll('.plan-name').forEach(el => {
    const i = parseInt(el.dataset.index);
    if (data.pricing.plans[i]) {
      data.pricing.plans[i].name = el.value;
      data.pricing.plans[i].price = dashboard.querySelector(`.plan-price[data-index="${i}"]`).value;
      data.pricing.plans[i].period = dashboard.querySelector(`.plan-period[data-index="${i}"]`).value;
      data.pricing.plans[i].perMonth = dashboard.querySelector(`.plan-permonth[data-index="${i}"]`).value;
      data.pricing.plans[i].ctaText = dashboard.querySelector(`.plan-cta-text[data-index="${i}"]`).value;
      data.pricing.plans[i].ctaLink = dashboard.querySelector(`.plan-cta-link[data-index="${i}"]`).value;
      data.pricing.plans[i].features = dashboard.querySelector(`.plan-features[data-index="${i}"]`).value.split(',').map(f => f.trim()).filter(Boolean);
      data.pricing.plans[i].badge = dashboard.querySelector(`.plan-badge[data-index="${i}"]`).value;
    }
  });

  // Transformation images
  dashboard.querySelectorAll('.trans-image').forEach(el => {
    const i = parseInt(el.dataset.index);
    if (data.transformations.items[i]) {
      data.transformations.items[i].imageUrl = el.value;
      data.transformations.items[i].title = dashboard.querySelector(`.trans-title[data-index="${i}"]`).value;
      data.transformations.items[i].description = dashboard.querySelector(`.trans-desc[data-index="${i}"]`).value;
    }
  });

  // Feature images
  dashboard.querySelectorAll('.feat-image').forEach(el => {
    const i = parseInt(el.dataset.index);
    if (data.features.items[i]) {
      data.features.items[i].imageUrl = el.value;
      data.features.items[i].title = dashboard.querySelector(`.feat-title[data-index="${i}"]`).value;
      data.features.items[i].description = dashboard.querySelector(`.feat-desc[data-index="${i}"]`).value;
    }
  });

  return data;
}

function showToast(dashboard, text) {
  const toast = dashboard.querySelector('#adminToast');
  if (text) toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function escAttr(str) {
  return String(str || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escHtml(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
