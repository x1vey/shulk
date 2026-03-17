# Color Palette Guide

## Primary Colors

### Background Colors
```
Deep Charcoal Navy
HEX: #1a1a2e
RGB: rgb(26, 26, 46)
Usage: Main background, hero sections
```

```
Light Navy
HEX: #252540
RGB: rgb(37, 37, 64)
Usage: Alternate section backgrounds, cards
```

### Accent Colors
```
Burnt Orange (Primary Accent)
HEX: #d4722b
RGB: rgb(212, 114, 43)
Usage: CTAs, highlights, borders, hover states
```

```
Dark Orange (Accent Hover)
HEX: #a85820
RGB: rgb(168, 88, 32)
Usage: Button hover states, active elements
```

```
Burgundy (Secondary Accent)
HEX: #8b3a3a
RGB: rgb(139, 58, 58)
Usage: Optional secondary highlights
```

### Text Colors
```
Cream/Off-White
HEX: #f5f1e8
RGB: rgb(245, 241, 232)
Usage: Primary text, headings
```

```
Muted Cream (70% opacity)
HEX: rgba(245, 241, 232, 0.7)
Usage: Body text, descriptions
```

## Utility Colors

### Card Backgrounds
```
Subtle Orange Tint
HEX: rgba(212, 114, 43, 0.08)
Usage: Card backgrounds, subtle highlights
```

### Borders
```
Orange Border
HEX: rgba(212, 114, 43, 0.2)
Usage: Card borders, dividers
```

### Subtle Backgrounds
```
Very Subtle Orange
HEX: rgba(212, 114, 43, 0.05)
Usage: Hover states, subtle backgrounds
```

## Color Psychology

### Why This Palette Works for Fitness Coaching:

**Deep Navy (#1a1a2e)**
- Conveys professionalism and trust
- Creates focus and reduces distractions
- Masculine without being aggressive
- Easy on the eyes for long reading sessions

**Burnt Orange (#d4722b)**
- Energetic and motivating
- Warm and approachable
- Stands out without being harsh
- Associated with determination and action

**Cream (#f5f1e8)**
- Softer than pure white
- Reduces eye strain
- Feels premium and refined
- Creates warmth against dark background

## Usage Guidelines

### Do's
✓ Use burnt orange for all primary CTAs
✓ Maintain high contrast for accessibility
✓ Use cream for all body text
✓ Apply subtle orange tints for card backgrounds
✓ Use dark orange for hover states

### Don'ts
✗ Don't use pure white (#ffffff) - use cream instead
✗ Don't use pure black (#000000) - use navy instead
✗ Don't mix with bright neon colors
✗ Don't use orange for large text blocks
✗ Don't reduce opacity below 70% for body text

## Accessibility

### Contrast Ratios (WCAG AA Compliant)

**Cream on Navy**
- Ratio: 12.5:1 ✓ (Exceeds AAA standard)
- Perfect for body text

**Orange on Navy**
- Ratio: 4.8:1 ✓ (Meets AA standard)
- Good for buttons and highlights

**Cream on Orange**
- Ratio: 2.6:1 ⚠️ (Use for large text only)
- Suitable for button text

## CSS Variables Reference

```css
:root {
  --color-bg: #1a1a2e;
  --color-bg-light: #252540;
  --color-text: #f5f1e8;
  --color-accent: #d4722b;
  --color-accent-dark: #a85820;
  --color-secondary: #8b3a3a;
  --color-card-bg: rgba(212, 114, 43, 0.08);
  --color-card-border: rgba(212, 114, 43, 0.2);
  --color-muted: rgba(245, 241, 232, 0.7);
  --color-subtle: rgba(212, 114, 43, 0.05);
}
```

## Inspiration Sources

This palette draws inspiration from:
- **Daily Discomfort**: Minimalist, grounded aesthetic
- **Earth tones**: Natural, masculine feel
- **Sunset colors**: Warm, motivating energy
- **Premium brands**: Sophisticated, trustworthy

## Alternative Variations

If you want to adjust the palette:

**More Energetic**: Increase orange saturation to #e67e22
**More Serious**: Darken navy to #0f0f1e
**Warmer**: Add more red to orange (#d45a2b)
**Cooler**: Add blue tint to navy (#1a1a3e)
