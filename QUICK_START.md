# Quick Start Guide

## 🚀 Get Your Site Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Your site will be available at `http://localhost:5173`

### Step 3: Customize Your Content

Open `src/siteData.js` and update:

#### Brand Name
```javascript
navbar: {
  logoText: "YOUR BRAND",  // Change this
  // ...
}
```

#### Hero Section
```javascript
hero: {
  headline: "YOUR HEADLINE HERE",
  subline: "Your compelling subheadline...",
  badgeText: "YOUR BADGE TEXT",
  // ...
}
```

#### Social Links
```javascript
footer: {
  socialLinks: {
    instagram: "https://instagram.com/yourusername",
    youtube: "https://youtube.com/@yourchannel",
    whatsapp: "https://wa.me/YOUR_PHONE_NUMBER"
  }
}
```

### Step 4: Replace Images

Update image URLs in `src/siteData.js`:

```javascript
hero: {
  backgroundImage: "YOUR_IMAGE_URL",
  backgroundVideo: "YOUR_VIDEO_URL", // Optional
}
```

For results section, edit `src/pages/homeSinglePage.js`:
```javascript
<img src="YOUR_TRANSFORMATION_IMAGE_URL" alt="Transformation">
```

### Step 5: Customize Colors (Optional)

Edit `src/siteData.js`:
```javascript
colors: {
  primary: "#1a1a2e",      // Background
  accent: "#d4722b",       // Buttons, highlights
  text: "#f5f1e8",         // Text color
  cardBg: "rgba(212, 114, 43, 0.08)",
  cardBorder: "rgba(212, 114, 43, 0.2)"
}
```

## 📝 Customize the Coaching Application Form

### Add Email Notifications

1. Sign up for a service like:
   - [Formspree](https://formspree.io/) (Easy, free tier)
   - [EmailJS](https://www.emailjs.com/) (Client-side)
   - [SendGrid](https://sendgrid.com/) (Backend required)

2. Update form handler in `src/pages/homeSinglePage.js`:

```javascript
// Example with Formspree
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
  
  if (response.ok) {
    alert('Application submitted successfully!');
    form.reset();
  } else {
    alert('Error submitting form. Please try again.');
  }
});
```

### Modify Form Fields

Edit `src/pages/homeSinglePage.js` to add/remove fields:

```javascript
<div class="form-group">
  <label for="newField">New Field Label *</label>
  <input type="text" id="newField" name="newField" required>
</div>
```

## 🎨 Admin Panel

Access at: `http://localhost:5173/adminpannel`

**Default Password**: Check `password.js` file

Use the admin panel to:
- Change colors in real-time
- Update content
- Preview changes

## 📱 Test Responsive Design

### Desktop
- Open in browser at `http://localhost:5173`

### Mobile
1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Select mobile device
4. Test navigation and forms

### Real Device Testing
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Access from phone: `http://YOUR_IP:5173`

## 🚢 Deploy to Production

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized files.

### Deploy Options

#### Vercel (Recommended - Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

#### Netlify (Free)
1. Drag `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Done!

#### GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repo settings
3. Set source to `gh-pages` branch

## ⚡ Performance Tips

### Optimize Images
- Use WebP format
- Compress images (use [TinyPNG](https://tinypng.com/))
- Recommended sizes:
  - Hero: 1920x1080px
  - Transformations: 800x1000px
  - Thumbnails: 400x400px

### Use a CDN
Upload images to:
- [Cloudinary](https://cloudinary.com/) (Free tier)
- [Imgix](https://imgix.com/)
- [AWS S3](https://aws.amazon.com/s3/)

### Enable Caching
Add to `vercel.json` or `netlify.toml`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 🔧 Common Issues

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Form Not Submitting
- Check browser console for errors (F12)
- Verify all required fields have values
- Ensure form action is configured

### Images Not Loading
- Verify URLs are accessible
- Check for CORS issues
- Use HTTPS URLs in production

### Styles Not Updating
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Restart dev server

## 📚 Next Steps

1. **Content**: Write compelling copy for each section
2. **Images**: Get professional photos or use quality stock images
3. **Testimonials**: Collect real client testimonials
4. **SEO**: Add meta tags in `index.html`
5. **Analytics**: Add Google Analytics or Plausible
6. **Legal**: Add Terms of Service and Privacy Policy

## 💡 Pro Tips

- **Test the form yourself** before going live
- **Get feedback** from friends/clients on design
- **A/B test** different headlines and CTAs
- **Monitor form submissions** regularly
- **Update testimonials** as you get new clients
- **Keep content fresh** - update regularly

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Review `CHANGES.md` for what was modified
- See `COLOR_PALETTE.md` for design guidelines
- Open browser console (F12) to debug issues

## ✅ Pre-Launch Checklist

- [ ] Updated all placeholder text
- [ ] Replaced all placeholder images
- [ ] Tested form submission
- [ ] Updated social media links
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Added favicon
- [ ] Set up form notifications
- [ ] Added analytics tracking
- [ ] Tested in multiple browsers
- [ ] Optimized images
- [ ] Added meta tags for SEO

---

**Ready to launch?** Run `npm run build` and deploy! 🎉
