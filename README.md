# Fitness Coaching Website - Single Page Design

A modern, single-page website for fitness coaches with a dedicated 1:1 coaching application section.

## Design Inspiration

This website combines design elements from:
- **Daily Discomfort** - Clean, minimalist approach with focus on community and holistic development
- **Original DCC Template** - Bold typography and strong visual hierarchy

## Color Scheme

The new color palette features warm, earthy tones that create a grounded, masculine aesthetic:

- **Primary Background**: Deep charcoal navy (#1a1a2e)
- **Secondary Background**: Lighter navy (#252540)
- **Accent Color**: Burnt orange/copper (#d4722b)
- **Text Color**: Cream/off-white (#f5f1e8)
- **Card Backgrounds**: Subtle orange tint (rgba(212, 114, 43, 0.08))

## Key Features

### 1. Single-Page Layout
All content is on one scrollable page with smooth anchor navigation:
- Hero Section
- Mission Statement
- Five Pillars Framework
- 1:1 Coaching Application (Dedicated Section)
- Results/Transformations
- Testimonials
- Footer

### 2. Dedicated Coaching Application Section
A comprehensive application form including:
- Personal information fields
- Goal assessment
- Challenge identification
- Commitment verification
- Built-in form validation
- Responsive design

### 3. Five Pillars Framework
Inspired by Daily Discomfort's holistic approach:
1. Physical - Training and nutrition
2. Emotional Mastery - Mental health and self-awareness
3. Spiritual - Breathwork and meditation
4. Community - Brotherhood and support
5. Masculinity - Balanced, grounded leadership

### 4. Modern Design System
- Smooth scroll animations
- Hover effects and transitions
- Responsive grid layouts
- Mobile-friendly navigation
- Dark theme optimized for readability

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Customization

### Update Content
Edit `src/siteData.js` to customize:
- Navigation links
- Hero content
- Color scheme
- Footer information
- Social media links

### Modify Styles
Edit `src/styles/index.css` for:
- Color variables
- Typography
- Spacing
- Component styles

### Form Submission
The coaching application form currently logs to console. To connect to a backend:

1. Update the form handler in `src/pages/homeSinglePage.js`
2. Add your API endpoint
3. Configure form submission logic

Example:
```javascript
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Send to your backend
  await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
});
```

## Image Sources

All images should be provided as URLs (not local files). Current placeholders use Unsplash:
- Hero backgrounds
- Transformation photos
- Section backgrounds

Replace these with your own hosted images or CDN links.

## Admin Panel

Access the admin panel at `/adminpannel` to customize:
- Colors
- Content
- Settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a template for fitness coaches. Customize and use as needed for your coaching business.

## Credits

Design inspired by:
- [Daily Discomfort](https://daily-discomfort.vercel.app/)
- Original DCC Fitness Template

Built with:
- Vite
- Vanilla JavaScript
- CSS3
- HTML5
