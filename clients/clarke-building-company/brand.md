# Clarke Building Company - Brand Identity & Build Guide

**Owner-Operated General Contractor | West Newbury, MA**
**Last Updated:** March 4, 2026

---

## Brand Essence

### Brand Promise

> "Reliable, skilled experts who take pride in your home as if it were their own."

### Core Differentiator

Dave Clarke is the owner, general contractor, and primary point of contact from first conversation through final walkthrough. He personally walks homeowners through every option, every cost, and how each decision affects the outcome. No sales team, no project manager handoff, no runaround. His calm, transparent approach is especially valued on insurance and damage restoration calls. This is a craftsman who runs his business the way he builds - with care, honesty, and attention to detail.

---

## Brand Overview

| Field | Value |
|-------|-------|
| **Business Name (NAP)** | Clarke Building Co. |
| **Legal Entity** | David A Clarke Jr. (LLC) |
| **Owner / GC** | Dave Clarke |
| **Website** | https://clarkebuildingcompany.com/ |
| **Phone** | (978) 257-5331 |
| **Email** | dave@clarkebuildingcompany.com |
| **Address** | 51 Pleasant St., West Newbury, MA 01985 |
| **Hours** | Monday - Friday, 8:00am - 5:00pm |
| **Domain Registrar** | Google Domains (now Squarespace Domains) |

---

## Color Palette

The Clarke palette is built on **deep brick red and charcoal** - grounded, warm, and professional. The red anchors to the existing logo. Aged brass accents add a craft/quality signal that separates Clarke from generic contractor sites running stock blue-and-white templates. Warm neutrals keep everything approachable, matching Dave's calm personality.

### Primary Colors

| Color Name | Hex | RGB | CSS Variable | Usage |
|------------|-----|-----|--------------|-------|
| **Clarke Red** | `#8B2727` | 139, 39, 39 | `--color-primary` | Logo, primary CTAs, key accent elements, section highlights |
| **Clarke Red Dark** | `#722020` | 114, 32, 32 | `--color-primary-hover` | Button hover states, active states |
| **Charcoal Slate** | `#1C2434` | 28, 36, 52 | `--color-secondary` | Navigation, footer, dark section backgrounds, headings |
| **Charcoal Slate Dark** | `#151C2B` | 21, 28, 43 | `--color-secondary-hover` | Nav/link hover on dark backgrounds |

### Accent Color

| Color Name | Hex | RGB | CSS Variable | Usage |
|------------|-----|-----|--------------|-------|
| **Aged Brass** | `#C9A96E` | 201, 169, 110 | `--color-accent` | Trust badges, star ratings, divider accents, icon highlights, secondary CTAs, subtle frame details |
| **Aged Brass Dark** | `#B8944F` | 184, 148, 79 | `--color-accent-hover` | Accent hover states |

### Neutral Colors

| Color Name | Hex | RGB | CSS Variable | Usage |
|------------|-----|-----|--------------|-------|
| **Warm White** | `#F8F6F3` | 248, 246, 243 | `--color-bg-primary` | Page backgrounds, light section backgrounds |
| **Pure White** | `#FFFFFF` | 255, 255, 255 | `--color-bg-white` | Cards on dark, form backgrounds |
| **Stone Gray** | `#E5E0DA` | 229, 224, 218 | `--color-border` | Borders, dividers, card outlines, form field borders |
| **Body Text** | `#374151` | 55, 65, 81 | `--color-text-primary` | Paragraphs, lists, descriptions |
| **Heading Text** | `#111827` | 17, 24, 39 | `--color-text-heading` | H1 headlines on light backgrounds |
| **Secondary Text** | `#6B7280` | 107, 114, 128 | `--color-text-secondary` | Captions, meta info, timestamps |

### CSS Custom Properties

```css
:root {
  /* Primary */
  --color-primary: #8B2727;
  --color-primary-hover: #722020;
  --color-secondary: #1C2434;
  --color-secondary-hover: #151C2B;

  /* Accent */
  --color-accent: #C9A96E;
  --color-accent-hover: #B8944F;

  /* Backgrounds */
  --color-bg-primary: #F8F6F3;
  --color-bg-white: #FFFFFF;

  /* Borders */
  --color-border: #E5E0DA;

  /* Text */
  --color-text-primary: #374151;
  --color-text-heading: #111827;
  --color-text-secondary: #6B7280;
  --color-text-inverse: #FFFFFF;

  /* Typography */
  --font-heading: 'DM Serif Display', serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-xl: 12px;
}
```

### Color Usage Guidelines

| Element | Color | Notes |
|---------|-------|-------|
| **Page backgrounds** | `--color-bg-primary` or `--color-bg-white` | Alternate for visual rhythm |
| **Hero sections** | `--color-secondary` | With grain texture overlay (see Design System) |
| **Dark sections** | `--color-secondary` | White/brass text, grain texture |
| **Light sections** | `--color-bg-primary` | Subtle diagonal hatching optional |
| **Primary buttons** | `--color-primary` | White text, shadow on dark BGs |
| **Secondary buttons** | Transparent | `--color-primary` border/text on light, white border on dark |
| **Links (body copy)** | `--color-primary` | Underline on hover |
| **Icons/accents** | `--color-accent` | Trust badges, ratings, decorative details |
| **Cards (light BG)** | `--color-bg-white` | Stone Gray border or subtle shadow |
| **Cards (dark BG)** | Glass blur (`rgba(28,36,52,0.85)`) | `backdrop-filter: blur(16px)`, brass border-left |
| **Footer** | `--color-secondary` | White text at 80%, brass link hovers |
| **Navigation** | `--color-bg-white` or `--color-bg-primary` | Red logo, text links, red CTA button |

---

## Typography

### Font Stack

| Usage | Font | Weight | Size | Line Height |
|-------|------|--------|------|-------------|
| **H1 Hero** | DM Serif Display | Regular (400) | 48px / clamp(38px, 5vw, 58px) | 1.1 |
| **H2 Section** | DM Serif Display | Regular (400) | 36px / clamp(28px, 4vw, 36px) | 1.25 |
| **H3 Subsection** | DM Serif Display | Regular (400) | 28px / clamp(22px, 3vw, 28px) | 1.3 |
| **H4 Card Title** | Inter | SemiBold (600) | 20px | 1.4 |
| **Body (large)** | Inter | Regular (400) | 18px | 1.7 |
| **Body (default)** | Inter | Regular (400) | 16px | 1.7 |
| **Body (small)** | Inter | Regular (400) | 14px | 1.6 |
| **Buttons** | Inter | SemiBold (600) | 15-16px | 1 |
| **Nav links** | Inter | Medium (500) | 15px | 1 |
| **Badges/labels** | Inter | SemiBold (600) | 11px | 1 |
| **Captions** | Inter | Medium (500) | 12px | 1.5 |

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
font-family: 'DM Serif Display', serif;  /* Headings */
font-family: 'Inter', sans-serif;         /* Everything else */
```

---

## Brand Voice & Personality

### Voice Pillars

| Pillar | Description |
|--------|-------------|
| **CALM** | Dave's demeanor. Reassuring, not urgent. Homeowners are already anxious - we don't add pressure. |
| **CLEAR** | Transparent about options, pricing, and timelines. No jargon, no vagueness. |
| **PERSONAL** | This is Dave, not a company. First-person where appropriate. Warm without being casual. |
| **COMPETENT** | Confidence backed by experience. State facts, show work, let quality speak. |

### We Are / We Are Not

| We Are | We Are Not |
|--------|------------|
| The contractor who answers your call | A corporate franchise |
| One point of contact, start to finish | Handing you off to a project manager |
| Transparent about how costs break down | Vague estimates that balloon |
| Calm and reassuring on stressful calls | High-pressure sales tactics |
| Treating your home like our own | Cutting corners for speed |
| Proud of our craft and showing it | Too busy to explain the process |

### Writing Rules

- Readability: Grade 7-9 level
- No em dashes - use regular dashes or commas
- Avoid: discover, leverage, synergize, delve, dive into, game-changer, elevate, harness, unlock, empower, robust, seamless, cutting-edge, innovative, "In today's..."
- Use VOC language: "reliable," "trustworthy," "go over all options," "constant communication," "honest," "on time," "on budget"
- Test: Would Dave say this in a conversation with a homeowner? If not, rewrite.

---

## Key Messages & Taglines

### Primary Tagline

> "Your Home. Our Craft. Built to Last."

### Supporting Taglines

| Context | Tagline |
|---------|---------|
| **Owner focus** | "One Point of Contact. Start to Finish." |
| **Trust focus** | "Built for How You Live" |
| **Process focus** | "Every Option. Every Cost. No Surprises." |
| **Service focus** | "Kitchen Remodels, ADUs & Home Renovations - North Shore MA" |

### Trust Signals (Use Prominently)

- Licensed & Insured
- Owner-Operated
- 5-Star Rated
- 15+ Years Experience
- North Shore, MA
- Same-Week Responses

---

## Logo

### Available Formats

- **Red Logo:** `CBC-Red_Logo.png` - Primary, use on light backgrounds
- **White Logo:** `Copy_of_White_Logo_(3).png` - Use on dark backgrounds

### Usage Rules

- On Warm White / White backgrounds: Red Logo
- On Charcoal Slate: White Logo
- On Clarke Red: White Logo
- On photography / hero overlays: White Logo with dark overlay behind it
- Minimum clear space: Height of the "C" in Clarke on all sides
- Minimum display width: 120px digital, 1 inch print
- Never stretch, rotate, add effects, or place on clashing backgrounds

---

## Button Styles

### Primary Button

```css
.btn-primary {
  background: var(--color-primary);
  color: #fff;
  padding: 16px 36px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 15px;
  border: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.btn-primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
}
/* On dark backgrounds, add shadow: */
.dark-bg .btn-primary {
  box-shadow: 0 4px 20px rgba(139,39,39,0.3);
}
```

### Secondary Button

```css
.btn-secondary {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: 14px 32px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 15px;
  border-radius: 6px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.btn-secondary:hover {
  background: var(--color-primary);
  color: #fff;
}
/* On dark backgrounds: */
.dark-bg .btn-secondary {
  border-color: rgba(255,255,255,0.18);
  color: rgba(255,255,255,0.75);
}
.dark-bg .btn-secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  background: rgba(201,169,110,0.06);
}
```

---

## Design System - Build Guidelines

These patterns define the visual language for the Clarke website. The homepage hero uses the "Craftsman Editorial" style (dark, textured, with social proof). Inner pages adapt these elements without copying the hero layout exactly.

### Approved Design Direction: Craftsman Editorial (A+C Hybrid)

The site's visual identity blends a textured, premium dark aesthetic with editorial warmth and front-loaded social proof. Key characteristics:

- **Dark hero sections** with subtle grain texture and brass grid lines
- **Single focused images** with brass offset frame details (not busy mosaics)
- **Floating social proof cards** (review quotes, star ratings) above the fold
- **Stat badges** (red background, white text) anchored to images
- **Brass accent details** used sparingly: corner accents, divider lines, star ratings, frame offsets
- **Editorial headline treatment**: DM Serif Display with brass underline highlights on key phrases
- **Body copy bolding** on key phrases to catch scanners (every option, every cost, no surprises)

### Background Textures

Use these CSS patterns on dark sections to add depth. They're subtle - barely visible - but they prevent flat, lifeless backgrounds.

**Grain Noise Overlay (use on all dark sections):**
```css
.dark-section::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}
```

**Brass Grid Lines (homepage hero, key dark sections):**
```css
.textured-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 70% 50%, rgba(139,39,39,0.06) 0%, transparent 55%),
    repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(201,169,110,0.025) 100px, rgba(201,169,110,0.025) 101px),
    repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(201,169,110,0.018) 100px, rgba(201,169,110,0.018) 101px);
  pointer-events: none;
  z-index: 0;
}
```

**Subtle Diagonal Hatching (light sections, optional):**
```css
.light-section-textured::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(28,36,52,0.015) 30px, rgba(28,36,52,0.015) 31px);
  pointer-events: none;
}
```

### Image Framing

**Brass Offset Frame (hero images, featured project images):**
```css
.image-frame {
  position: relative;
  padding: 20px;
}
.image-frame::before {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border: 1.5px solid rgba(201,169,110,0.3);
  border-radius: 10px;
  z-index: 0;
}
```

**Brass Corner Accent:**
```css
.corner-accent {
  position: absolute;
  width: 48px; height: 48px;
  border-top: 2px solid var(--color-accent);
  border-right: 2px solid var(--color-accent);
  border-radius: 0 10px 0 0;
}
```

### Floating Cards

**Review Card (glass blur on dark backgrounds):**
```css
.review-card {
  background: rgba(28, 36, 52, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 18px 22px;
  border-radius: 10px;
  border: 1px solid rgba(201,169,110,0.12);
  border-left: 3px solid var(--color-accent);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3);
  max-width: 270px;
}
```

**Stat Badge (red, anchored to images):**
```css
.stat-badge {
  background: var(--color-primary);
  color: #fff;
  padding: 14px 18px;
  border-radius: 10px;
  box-shadow: 0 8px 28px rgba(139,39,39,0.35);
}
.stat-badge-num {
  font-family: var(--font-heading);
  font-size: 28px;
  line-height: 1;
}
.stat-badge-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.8;
}
```

### Badge/Label Pattern

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 8px 18px;
  border-radius: 100px;
}
/* On dark backgrounds: */
.badge-dark {
  background: rgba(201,169,110,0.1);
  border: 1px solid rgba(201,169,110,0.22);
  color: var(--color-accent);
}
/* On light backgrounds: */
.badge-light {
  background: rgba(139,39,39,0.08);
  border: 1px solid rgba(139,39,39,0.15);
  color: var(--color-primary);
}
```

### Trust Row Pattern

```css
.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  border-top: 1px solid rgba(201,169,110,0.1);
  padding-top: 28px;
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 24px;
  border-right: 1px solid rgba(201,169,110,0.1);
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.45);
}
.trust-item:first-child { padding-left: 0; }
.trust-item:last-child { border-right: none; }
.trust-item svg { color: var(--color-accent); width: 18px; height: 18px; }
```

### Section Layout Patterns

| Section Type | Background | Text | Special Elements |
|-------------|-----------|------|-----------------|
| **Homepage Hero** | Charcoal + grain + brass grid | White + brass accents | Offset frame image, review card, stat badge |
| **Service Page Hero** | Charcoal + grain (simpler) | White | Badge, H1, subhead, CTA - no image mosaic needed |
| **Light Content** | Warm White `#F8F6F3` | Body Text `#374151` | Optional diagonal hatching |
| **Dark Content** | Charcoal `#1C2434` | White / brass | Grain overlay, brass dividers |
| **Testimonials** | Warm White or White | Body Text | Brass star ratings, Stone Gray card borders or glass blur on dark |
| **CTA Band** | Clarke Red `#8B2727` | White | Clean, no texture needed |
| **Footer** | Charcoal `#1C2434` | White at 80% | White logo, brass link hovers, brass divider line |
| **Navigation** | White / Warm White | Body Text links | Red logo left, red CTA button right, sticky with Stone Gray bottom border |

### Fade-In Animations

Use staggered fade-up animations on hero and key sections. Keep it subtle on inner pages.

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: fadeUp 0.8s ease forwards; }
.fade-up-d1 { animation-delay: 0.1s; opacity: 0; }
.fade-up-d2 { animation-delay: 0.25s; opacity: 0; }
.fade-up-d3 { animation-delay: 0.4s; opacity: 0; }
.fade-up-d4 { animation-delay: 0.55s; opacity: 0; }
.fade-up-d5 { animation-delay: 0.7s; opacity: 0; }
```

### Iconography

- Style: Simple line icons, 1.5-2px stroke weight
- Library: Lucide Icons (preferred) or Heroicons
- Default: Charcoal Slate on light BGs, White on dark BGs, Brass for featured/highlighted
- Sizes: 18px (inline/trust), 24px (default), 32px (feature cards), 48px (hero features)

---

## Photography Guidelines

- Use Dave's actual project portfolio - not stock photos
- Natural lighting preferred over HDR or heavy editing
- Warm color grading that complements the brand palette
- Include Dave/crew on site when possible (reinforces owner-operated positioning)
- Hero images: wide landscape, dark overlay for text readability
- Project photos: clean, well-lit interiors and exteriors of North Shore homes

---

## Contact Information

| Field | Value |
|-------|-------|
| **Phone** | (978) 257-5331 |
| **Email** | dave@clarkebuildingcompany.com |
| **Address** | 51 Pleasant St., West Newbury, MA 01985 |
| **Website** | https://clarkebuildingcompany.com/ |
| **Contact URL** | https://clarkebuildingcompany.com/contact/ |
| **Hours** | Monday - Friday, 8:00am - 5:00pm |

### Social & Listings

| Platform | URL |
|----------|-----|
| **Facebook** | https://www.facebook.com/Clarkebuildingco/ |
| **Instagram** | TBD (create during onboarding) |
| **Google Business** | NOT YET VERIFIED - Priority #1 |

---

## Service Areas

**Primary:** West Newbury, MA

**Full Service Area:** West Newbury, Newburyport, Ipswich, Amesbury, Hamilton, Topsfield

---

## Services

**Core (Money Pages):**
- Kitchen Remodeling
- Home Renovations / General Remodeling
- ADUs (Accessory Dwelling Units)
- House Additions
- Deck Construction

**Secondary:**
- Carpentry
- Flooring

**Exclude from marketing:** Bathrooms

---

## Competitors

- Fahey Construction
- CS Builders (Ipswich)
- Open Meadows

---

*Brand Identity & Build Guide - Clarke Building Company*
*Prepared by AM Creative | March 2026*
