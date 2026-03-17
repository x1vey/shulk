import { getSiteData } from '../dataManager.js';
import { renderNavbar } from '../sections/navbar.js';
import { renderHero } from '../sections/hero.js';
import { renderFooter } from '../sections/footer.js';

export function renderSinglePageHome(app) {
  const data = getSiteData();

  renderNavbar(app);
  renderHero(app);

  // Mission Section
  const mission = document.createElement('section');
  mission.className = 'section section-mission';
  mission.id = 'about';
  mission.innerHTML = `
    <div class="container">
      <div class="mission-content">
        <div class="mission-label">THE MISSION</div>
        <h2 class="heading-xl">THE MAN YOU WERE BORN TO BE.</h2>
        <div class="mission-text">
          <p class="body-lg">The Forge exists to help men reach their fullest potential — physically, mentally, and emotionally.</p>
          <p class="body-lg">Whether you're navigating a breakup, training for a marathon, building your business, or simply tired of numbing out with distractions — this is your home for grounded conversations, inspiring stories, and a community that understands you.</p>
        </div>
      </div>
    </div>
  `;
  app.appendChild(mission);

  // Framework / Pillars Section - ASYMMETRIC 2-COLUMN LAYOUT
  const framework = document.createElement('section');
  framework.className = 'section section-framework';
  framework.id = 'framework';
  framework.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="framework-label">FIVE PILLARS</div>
        <h2 class="heading-lg">ONE DIRECTION.</h2>
        <p class="body-lg">A holistic approach to becoming the man you're meant to be.</p>
      </div>
      <div class="pillars-asymmetric">
        <div class="pillar-card pillar-large">
          <div class="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div class="pillar-number">01</div>
          <h3>PHYSICAL</h3>
          <p>Your body is the vehicle. Training, running, sport, nutrition — building the foundation that carries everything else.</p>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
          </div>
          <div class="pillar-number">02</div>
          <h3>EMOTIONAL MASTERY</h3>
          <p>Learning to identify, feel, and articulate what's happening inside instead of running from it.</p>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div class="pillar-number">03</div>
          <h3>SPIRITUAL</h3>
          <p>Breathwork, meditation, and connecting to something bigger than yourself. Purpose over performance.</p>
        </div>
        <div class="pillar-card pillar-large">
          <div class="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div class="pillar-number">04</div>
          <h3>COMMUNITY</h3>
          <p>Brotherhood isn't optional. The run club, the men's gatherings, the shared struggle — this is where real change compounds.</p>
        </div>
        <div class="pillar-card pillar-wide">
          <div class="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div class="pillar-number">05</div>
          <h3>MASCULINITY</h3>
          <p>Not hyper-masculine. Not passive. The grounded middle — a man who acts with discipline and leads with emotional intelligence.</p>
        </div>
      </div>
    </div>
  `;
  app.appendChild(framework);

  // 1:1 Coaching Application Section - SYMMETRICAL WITH ASYMMETRIC FEATURES
  const coachingApp = document.createElement('section');
  coachingApp.className = 'section section-coaching-application';
  coachingApp.id = 'coaching-application';
  coachingApp.innerHTML = `
    <div class="container">
      <div class="coaching-app-content">
        <div class="coaching-app-badge">THE FORGE</div>
        <h2 class="heading-xl">1:1 COACHING</h2>
        <p class="body-lg">A coaching program built for men who are ready to stop performing and start becoming. Covering all five pillars — physical training, emotional intelligence, breathwork, community, and modern masculinity.</p>
        
        <div class="coaching-app-features-asymmetric">
          <div class="coaching-app-feature feature-large">
            <div class="feature-icon-animated">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div>
              <h4>PERSONALIZED TRAINING</h4>
              <p>Custom workout programs designed for your goals, schedule, and current fitness level. Science-backed progressions that deliver results.</p>
            </div>
          </div>
          <div class="coaching-app-feature">
            <div class="feature-icon-animated">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div>
              <h4>MINDSET COACHING</h4>
              <p>Weekly check-ins focused on emotional mastery, stress management, and mental resilience.</p>
            </div>
          </div>
          <div class="coaching-app-feature">
            <div class="feature-icon-animated">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18V5l12-2v13"/>
                <circle cx="6" cy="18" r="3"/>
                <circle cx="18" cy="16" r="3"/>
              </svg>
            </div>
            <div>
              <h4>BREATHWORK SESSIONS</h4>
              <p>Guided breathwork to help you slow down, reconnect, and build daily discipline.</p>
            </div>
          </div>
          <div class="coaching-app-feature feature-large">
            <div class="feature-icon-animated">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <h4>COMMUNITY ACCESS</h4>
              <p>Join the Saturday morning run club and connect with men doing the work. Brotherhood and accountability built in.</p>
            </div>
          </div>
        </div>

        <div class="coaching-app-form-container">
          <h3 class="heading-md">READY TO START?</h3>
          <p class="body-md">Fill out the application below and we'll be in touch within 24 hours.</p>
          
          <form class="coaching-application-form" id="coachingForm">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required>
              </div>
            </div>
            
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone">
            </div>
            
            <div class="form-group">
              <label for="location">Location (City, Country) *</label>
              <input type="text" id="location" name="location" required>
            </div>
            
            <div class="form-group">
              <label for="goals">What are your primary goals? *</label>
              <textarea id="goals" name="goals" rows="4" required placeholder="e.g., Build muscle, improve mental health, find community..."></textarea>
            </div>
            
            <div class="form-group">
              <label for="challenges">What's your biggest challenge right now? *</label>
              <textarea id="challenges" name="challenges" rows="4" required placeholder="Be honest. This helps us understand how to support you."></textarea>
            </div>
            
            <div class="form-group">
              <label for="commitment">Why are you ready to commit now? *</label>
              <textarea id="commitment" name="commitment" rows="4" required></textarea>
            </div>
            
            <div class="form-group checkbox-group">
              <label>
                <input type="checkbox" name="terms" required>
                <span>I understand this is a minimum 12-week commitment and I'm ready to do the work. *</span>
              </label>
            </div>
            
            <button type="submit" class="btn btn-primary btn-submit">SUBMIT APPLICATION</button>
            <p class="form-note">* Required fields. We review all applications personally.</p>
          </form>
        </div>
      </div>
    </div>
  `;
  app.appendChild(coachingApp);

  // Results / Transformations Section - ASYMMETRIC 2-COLUMN
  const results = document.createElement('section');
  results.className = 'section section-results';
  results.id = 'results';
  results.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">REAL TRANSFORMATIONS</h2>
        <p class="body-lg">Men who committed to the process and never looked back.</p>
      </div>
      <div class="results-asymmetric">
        <div class="result-card result-large">
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=700&fit=crop" alt="Transformation">
          <div class="result-overlay">
            <h3>16-WEEK BUILD</h3>
            <p>From burnt out to elite condition. Gained 8kg of muscle while working 60-hour weeks.</p>
          </div>
        </div>
        <div class="result-card">
          <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop" alt="Transformation">
          <div class="result-overlay">
            <h3>MENTAL RESET</h3>
            <p>Overcame anxiety and depression through breathwork and community.</p>
          </div>
        </div>
        <div class="result-card">
          <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=500&fit=crop" alt="Transformation">
          <div class="result-overlay">
            <h3>COMPLETE REBUILD</h3>
            <p>Lost 15kg, quit drinking, and rebuilt his relationship with himself.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  app.appendChild(results);

  // Testimonials Section - SYMMETRICAL
  const testimonials = document.createElement('section');
  testimonials.className = 'section section-testimonials';
  testimonials.id = 'testimonials';
  testimonials.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="heading-lg">FROM THE COMMUNITY</h2>
        <p class="body-lg">Hear from men who've done the work.</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <blockquote>"The run club changed something in me I didn't know needed changing. Showing up at 6am every Saturday, next to other guys who are also doing the work — that's what shifted it."</blockquote>
          <div class="testimonial-author">— James, Brisbane</div>
        </div>
        <div class="testimonial-card">
          <blockquote>"Michael doesn't let you off easy. But it's not harsh — it's honest. The Forge gave me the structure I'd been missing for years."</blockquote>
          <div class="testimonial-author">— Marcus, Sydney</div>
        </div>
        <div class="testimonial-card">
          <blockquote>"I've listened to all the Goggins stuff, all the Jocko stuff. This is different. Michael actually talks about what happens when the hard exterior starts to crack."</blockquote>
          <div class="testimonial-author">— David, Melbourne</div>
        </div>
      </div>
    </div>
  `;
  app.appendChild(testimonials);

  renderFooter(app);

  // Form submission handler
  setTimeout(() => {
    const form = document.getElementById('coachingForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Form submitted:', data);
        alert('Thank you for your application! We\'ll be in touch within 24 hours.');
        form.reset();
      });
    }
  }, 100);
}
