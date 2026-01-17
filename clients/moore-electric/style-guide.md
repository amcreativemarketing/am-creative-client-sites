# Moore Electric Inc. - Web Style Guide

**Design System for Cohesive Page Development**

---

## CSS Variables (Copy to all pages)

```css
:root {
    /* Primary Colors */
    --moore-teal: #0B4B4B;
    --moore-teal-dark: #093C3C;
    --moore-gold: #C9A227;
    --moore-gold-dark: #A8891F;
    --moore-gold-light: #E8D48A;
    
    /* Neutrals */
    --moore-cream: #F2F0EA;
    --moore-gray: #C7D0D0;
    --moore-gray-dark: #9BABAB;
    
    /* Text */
    --moore-text: #0C2424;
    --moore-text-light: #FFFFFF;
    --moore-text-muted: #4A5F5F;
    
    /* Spacing */
    --section-padding: clamp(60px, 8vw, 100px);
    --container-max: 1200px;
    
    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(12,36,36,0.06);
    --shadow-md: 0 4px 20px rgba(12,36,36,0.08);
    --shadow-lg: 0 8px 40px rgba(12,36,36,0.12);
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-med: 0.3s ease;
}
```

---

## Typography

### Font Stack

```css
/* Headlines */
font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;

/* Body Text */
font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
```

### Heading Sizes

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | Raleway | clamp(2.25rem, 5vw, 3.25rem) | 700 |
| H2 | Raleway | clamp(1.75rem, 4vw, 2.5rem) | 700 |
| H3 | Raleway | clamp(1.25rem, 2.5vw, 1.5rem) | 600 |
| H4 | Raleway | 1rem | 600 |
| Body | Source Sans Pro | 18px | 400 |
| Small/Caption | Source Sans Pro | 14px | 400 |

### Line Heights

- Headlines: 1.2
- Body text: 1.7
- Lead paragraphs: 1.6

---

## Color Usage

### Backgrounds

| Context | Color | Variable |
|---------|-------|----------|
| Primary dark sections | Teal gradient | `linear-gradient(135deg, var(--moore-teal-dark), var(--moore-teal))` |
| Light sections | Cream | `var(--moore-cream)` |
| White sections | White | `#fff` |
| Cards on cream | White | `#fff` |
| Cards on white | Cream | `var(--moore-cream)` |

### Text on Backgrounds

| Background | Heading Color | Body Color |
|------------|---------------|------------|
| White | `--moore-text` | `--moore-text` or `--moore-text-muted` |
| Cream | `--moore-text` | `--moore-text` or `--moore-text-muted` |
| Teal | `--moore-text-light` | `rgba(255,255,255,0.85)` |

### Accent Usage

- **Gold** - CTAs, icons, badges, eyebrow text, hover states
- **Teal** - Primary buttons, icon backgrounds, links on light backgrounds
- **Gold on Teal** - Links and accents on dark sections

---

## Buttons

### Primary (Gold)

```css
.btn--gold {
    background: var(--moore-gold);
    color: var(--moore-text);
    border: 2px solid var(--moore-gold);
    padding: 16px 32px;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-radius: 4px;
}
.btn--gold:hover {
    background: var(--moore-gold-dark);
    border-color: var(--moore-gold-dark);
    transform: translateY(-2px);
}
```

### Secondary (Teal)

```css
.btn--primary {
    background: var(--moore-teal);
    color: var(--moore-text-light);
    border: 2px solid var(--moore-teal);
}
.btn--primary:hover {
    background: var(--moore-teal-dark);
}
```

### Outline (for dark backgrounds)

```css
.btn--outline-white {
    background: transparent;
    color: var(--moore-text-light);
    border: 2px solid var(--moore-text-light);
}
.btn--outline-white:hover {
    background: var(--moore-text-light);
    color: var(--moore-teal);
}
```

---

## Section Patterns

### Trust Bar (Top of page)

- Background: `--moore-cream`
- Border bottom: `1px solid rgba(12,36,36,0.08)`
- Items: Master Electrician, 25+ Years, Licensed MA/NH/ME, 5.0 Rating

### Hero Section

- Background: Teal gradient with subtle pattern overlay
- Text: White headline, 85% white body
- Badge: Gold border pill with gold text
- CTA: Gold primary + white outline secondary

### Content Section (Light)

- Background: White or Cream (alternate)
- Eyebrow: Gold uppercase, 13px, letter-spacing 2px
- Heading: Dark text
- Body: Muted text

### CTA Band (Dark)

- Background: Teal solid or gradient
- All text: White
- CTA: Gold button

### Card Patterns

```css
/* Card on white background */
.card {
    background: var(--moore-cream);
    border-radius: 8px;
    padding: 32px;
    border: 1px solid transparent;
    transition: all 0.3s ease;
}
.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: rgba(201,162,39,0.2);
}

/* Card on cream background */
.card-on-cream {
    background: #fff;
    box-shadow: var(--shadow-sm);
}
```

---

## Icons

### Style

- Stroke-based (not filled)
- Stroke width: 2px
- Size: 16-24px typical, 48px for feature icons

### Icon Containers

```css
/* Teal circle (light backgrounds) */
.icon-circle {
    width: 48px;
    height: 48px;
    background: var(--moore-teal);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon-circle svg {
    color: var(--moore-text-light);
}

/* Gold square (dark backgrounds) */
.icon-square {
    width: 48px;
    height: 48px;
    background: var(--moore-gold);
    border-radius: 8px;
}
.icon-square svg {
    color: var(--moore-text);
}
```

---

## Spacing

### Section Padding

```css
section {
    padding: clamp(60px, 8vw, 100px) 0;
}
```

### Container

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}
```

### Common Gaps

- Card grids: 24-32px
- List items: 20px vertical
- Between heading and body: 16-20px
- Between body and CTA: 28-32px

---

## Animations (Optional)

### Fade In Up (on scroll)

```css
.animate-on-scroll {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
}
```

### Hover Lift

```css
.hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
}
```

### Float (for badges/awards)

```css
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}
.float {
    animation: float 3s ease-in-out infinite;
}
```

---

## Elementor Override Block

**Add this to any page with dark sections to prevent Elementor from overriding colors:**

```css
/* Elementor Overrides for Dark Sections */
.hero,.hero *,.hero h1,.hero h2,.hero h3,.hero p,.hero span,.hero a:not(.btn),
.hero .elementor-widget-container,.hero .elementor-heading-title,
.hero .elementor-widget-text-editor,.hero .elementor-text-editor p {
    color: var(--moore-text-light) !important;
}

.mid-cta,.mid-cta *,.mid-cta h1,.mid-cta h2,.mid-cta h3,.mid-cta p,
.mid-cta .elementor-widget-container,.mid-cta .elementor-heading-title {
    color: var(--moore-text-light) !important;
}

.final-cta,.final-cta *,.final-cta h1,.final-cta h2,.final-cta h3,.final-cta p,
.final-cta .elementor-widget-container,.final-cta .elementor-heading-title {
    color: var(--moore-text-light) !important;
}

/* Button text */
.btn--gold, .btn--gold * { color: var(--moore-text) !important; }
.btn--white, .btn--white * { color: var(--moore-teal) !important; }
.btn--outline-white, .btn--outline-white * { color: var(--moore-text-light) !important; }
.btn--outline-white:hover, .btn--outline-white:hover * { color: var(--moore-teal) !important; }
```

---

## Schema Markup (Required)

Every service page should include LocalBusiness + Service schema:

```json
{
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "[Service Name]",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Moore Electric Inc.",
        "telephone": "+1-603-836-9513",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "21 Wentworth Ave",
            "addressLocality": "Plaistow",
            "addressRegion": "NH",
            "postalCode": "03865"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "9"
        }
    },
    "areaServed": [
        {"@type": "State", "name": "New Hampshire"},
        {"@type": "State", "name": "Massachusetts"},
        {"@type": "State", "name": "Maine"}
    ]
}
```

---

## Trust Signals (Use Consistently)

- ⚡ Master Electrician
- ⚡ 25+ Years Experience
- ⚡ Licensed in MA, NH & ME
- ⚡ Family-Owned, Not a Franchise
- ⚡ Best of Newburyport 2024 & 2025
- ⚡ 5.0 ★ Google Rating

---

## Quick Reference: Page Structure

1. **Trust Bar** - Credentials strip
2. **Hero** - H1, value prop, dual CTAs, optional image
3. **Problem/Warning** - Pain points that trigger action
4. **Mid-CTA** - Dark band, simple message
5. **Solution/Included** - What they get
6. **Pricing** (if applicable) - With disclaimer
7. **Why Us** - Differentiators
8. **Process** - How it works (numbered steps)
9. **Testimonials** - Real reviews
10. **FAQ** - Common questions (helps SEO)
11. **Service Area** - Towns served + license numbers
12. **Final CTA** - Dark band, contact info

*Not every page needs all sections. Simpler pages might just need: Hero → Content → CTA → Service Area.*

---

**Last Updated:** January 2026
