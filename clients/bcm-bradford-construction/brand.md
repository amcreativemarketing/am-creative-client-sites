## Logos and standard video logo assets:

[drive.google.com](http://drive.google.com)

# Bradford Construction Management - Brand Kit

## Brand Overview

Bradford Construction Management (BCM) is a design-build contractor serving Eastern Massachusetts and Southern New Hampshire. We deliver additions, whole-home renovations, ADUs, and custom homes with commercial-grade project management. Our brand reflects professionalism, transparency, and lifetime commitment through our partnership with Bradford Home Services.

---

## Service Areas

BCM serves homeowners across **Eastern Massachusetts** and **Southern New Hampshire**.

### Massachusetts
- **North Shore:** Newburyport, Amesbury, Newbury, Ipswich, Beverly, Boxford
- **Merrimack Valley:** Haverhill (HQ), Andover, North Andover, Georgetown, Groveland, West Newbury, Merrimac

### New Hampshire
- **Southern NH:** Exeter, Salem, Plaistow, and surrounding communities

### Service Area Notes
- Haverhill, MA is our headquarters and primary market
- We evaluate projects throughout Eastern MA and Southern NH on a case-by-case basis
- For location-specific SEO content, target the appropriate region (e.g., "North Shore MA" for Beverly pages, "Southern NH" for Exeter pages)
- Contact us to confirm service availability for locations not listed

---

## WordPress Integration

See [shared/wordpress-patterns.md](../../../shared/wordpress-patterns.md) for common CSS patterns including:
- Full-width override for theme containers
- High specificity techniques for theme conflicts
- Font loading fallbacks

---

## Color Palette

### Primary Colors

| Swatch | Name | Hex Code | RGB | Usage |
| --- | --- | --- | --- | --- |
| 🔵 | **BCM Navy** | #060097 | rgb(6, 0, 151) | Primary brand color, headers, logo, nav |
| 🟨 | **BCM Gold** | #FFCD57 | rgb(255, 205, 87) | Primary CTA buttons, accents, highlights |
| ⬜ | **White** | #FFFFFF | rgb(255, 255, 255) | Backgrounds, button text, logo on dark |

### Text & UI Colors

| Swatch | Name | Hex Code | RGB | Usage |
| --- | --- | --- | --- | --- |
| ⬛ | **Dark Slate** | #1E293B | rgb(30, 41, 59) | Primary body text, headings |
| 🩶 | **Medium Gray** | #67768E | rgb(103, 118, 142) | Secondary text, captions, subheadings |
| ⬜ | **Light Gray** | #F2F5F7 | rgb(242, 245, 247) | Borders, dividers, card backgrounds |
| 🔲 | **Off-White** | #F9FAFB | rgb(249, 250, 251) | Section backgrounds |

### Reserved / Avoid

| Color | Hex | Note |
| --- | --- | --- |
| ~~Bright Purple~~ | #C10FFF | Too tech/startup - avoid in primary use |
| *Green (TBD)* | *varies* | Reserved for potential future logo variant |

---

## Typography

### Font Families

**Headings: Plus Jakarta Sans**

- Google Fonts: https://fonts.google.com/specimen/Plus+Jakarta+Sans
- Weight: 600 (Semi-Bold)

**Body Text: Inter**

- Google Fonts: https://fonts.google.com/specimen/Inter
- Weights: 400 (Regular), 600 (Semi-Bold)

### Type Scale

| Element | Font | Weight | Size | Line Height |
| --- | --- | --- | --- | --- |
| **H1** | Plus Jakarta Sans | 600 | 32px / 3.5rem | 1.2 |
| **H2** | Plus Jakarta Sans | 600 | 24px / 2.7rem | 1.2 |
| **H3** | Plus Jakarta Sans | 600 | 18px / 1.3rem | 1.3 |
| **H4** | Plus Jakarta Sans | 600 | 16px / 1.1rem | 1.2 |
| Body | Inter | 400 | 16px / 1rem | 1.6 |
| Caption | Inter | 400 | 14px | 1.4 |

### Font Import

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Plus+Jakarta+Sans:wght@600&display=swap');
```

---

## Logo Assets

### Preferred Versions

| Context | Logo Version | Notes |
| --- | --- | --- |
| **Light backgrounds** | Navy/Blue solid color | Primary use |
| **Dark backgrounds** | White solid color | Footer, dark sections |
| **Mobile/Condensed** | Monochrome (navy or white) | Nav, small applications |

### Logo Clear Space

Maintain clear space around the logo equal to the height of the "B" in Bradford.

---

## Slogans & Taglines

### Primary Slogan

**"Your Builder for Life"**

*Currently used on logo outro*

### Service-Specific Slogans (Video Outros) - draft

| Service | Slogan Options | Notes |
| --- | --- | --- |
| **ADUs** | "More Space. More Value. Built Right." | Emphasizes ROI and quality |
| **ADUs** | "Your Property. More Possibilities." | Focuses on potential and flexibility |
| **Renovations/Additions** | "Love Where You Live. Again." | Emotional connection to refreshing a home |
| **Renovations/Additions** | "Reimagine Your Home. We'll Build It." | Design-build positioning |
| **New Build** | "From Vision to Foundation to Forever." | Full journey + lifetime commitment tie-in |
| **New Build** | "Built From Scratch. Built to Last." | Quality craftsmanship focus |

### Alternative General Slogans

- "Building Trust, One Home at a Time."
- "Professional Project Management. Personal Results."
- "Design-Build Done Right."

---

## Buttons

### Primary CTA (Gold)

| Property | Value |
| --- | --- |
| Background | #FFCD57 (BCM Gold) |
| Text Color | #060097 (BCM Navy) |
| Font | Inter, 600 weight |
| Padding | 16px 34px |
| Border Radius | 9999px (pill) |
| Box Shadow | 0 4px 16px rgba(255, 205, 87, 0.3) |
| Hover | Darken to #E5B84E, translateY(-2px), stronger shadow |

### Secondary Button (Outline - on dark backgrounds)

| Property | Value |
| --- | --- |
| Background | rgba(255, 255, 255, 0.15) |
| Border | 2px solid rgba(255, 255, 255, 0.6) |
| Text Color | #FFFFFF (White) |
| Backdrop Filter | blur(6px) |
| Hover | Fill white, text #060097 (Navy) |

### Navy Outline (on light backgrounds)

| Property | Value |
| --- | --- |
| Background | Transparent |
| Border | 2px solid #060097 |
| Text Color | #060097 (BCM Navy) |
| Hover | Fill with #060097, text white |

### Navy Solid

| Property | Value |
| --- | --- |
| Background | #060097 (BCM Navy) |
| Text Color | #FFFFFF (White) |
| Box Shadow | 0 2px 10px rgba(6, 0, 151, 0.2) |
| Hover | Darken to #04006B, stronger shadow |

### Button Specificity Note (WordPress)

All button color rules must use `.bcm-[page] a.bcm-[page]-cta--variant` selector pattern to beat the global `a` color rule and prevent WordPress/Elementor link styles from overriding button text colors. The global `a:hover` rule should exclude CTAs with `:not(.bcm-[page]-cta)`.

---

## Color Combinations

### Recommended Pairings

| Use Case | Background | Text/Element | Accent |
| --- | --- | --- | --- |
| **Hero sections** | White or Off-White | Dark Slate text | Gold CTAs |
| **Headers/Nav** | Navy | White text/logo | Gold highlights |
| **Cards** | White | Dark Slate | Navy links |
| **Footer** | Navy or Dark Slate | White text | Gold accents |
| **CTAs** | Gold | Dark Slate text | - |

### Accessibility Notes

- Gold (#FFCD57) on white fails contrast - **always use Dark Slate text on gold buttons**
- Navy (#060097) on white passes AAA
- Dark Slate (#1E293B) on white passes AAA

---

## Quick Reference

| Element | Value |
| --- | --- |
| Primary Brand Color | #060097 (Navy) |
| CTA Button Color | #FFCD57 (Gold) |
| Heading Font | Plus Jakarta Sans, 600 |
| Body Font | Inter, 400/600 |
| Body Text | #1E293B (Dark Slate) |
| Secondary Text | #67768E (Medium Gray) |

---

## Licensing & Business Information

### Massachusetts Home Improvement Contractor

| Field | Value |
| --- | --- |
| **HIC Registration Number** | 201908 |
| **Business Name** | Bradford Construction Management, LLC |
| **Status** | Active |
| **Lookup URL** | https://services.oca.state.ma.us/hic/licenseelist.aspx |

### Business Contact

| Field | Value |
| --- | --- |
| **Phone** | 978-945-9771 |
| **Address** | 145 S Main St, Haverhill, MA 01835 |
| **Website** | https://bradfordcm.com |

### Standard Copy for Credentials

**Short (footer/badges):**
```
Licensed & Insured · MA HIC #201908
```

**Medium (trust bars):**
```
Licensed & Insured · MA HIC #201908 · 10+ Years Experience · 100+ Successful Projects
```

**Full (FAQ/legal):**
```
We hold Massachusetts Home Improvement Contractor registration #201908 and carry comprehensive general liability and workers' compensation insurance.
```

---

## AM Connect Form Embed

**BCM Website Consultation Form**

Use this embed code for consultation/contact forms on BCM pages:

```html
<iframe 
  src="https://link.bradfordhs.com/widget/form/gjd0vNkXvXFZ1gi5Q51p" 
  style="width:100%;height:1434px;border:none;border-radius:4px" 
  id="inline-gjd0vNkXvXFZ1gi5Q51p" 
  data-form-name="*BCM Website form" 
  title="*BCM Website form">
</iframe>
<script src="https://link.bradfordhs.com/js/form_embed.js"></script>
```

| Field | Value |
| --- | --- |
| **Form ID** | gjd0vNkXvXFZ1gi5Q51p |
| **Form Name** | *BCM Website form |
| **Recommended Height** | 1434px (adjust based on container) |

---

## Page Design System (v3 Interim - March 2026)

Transitional design language established ahead of formal rebrand. Moves away from saturated purple-navy toward a warm, muted palette that reads as high-end residential construction rather than tech/SaaS. Use for all new page builds. Existing Portsmouth/Exeter pages remain on v2 until a broader refresh.

### Design Philosophy

Subtle luxury. The goal is a page that looks like it was designed by a human who understands architecture - not generated by a marketing tool. Generous whitespace, restrained color, strong typography, and intentional use of accent. Think architectural firm lookbook, not contractor landing page.

**Guiding principles:**
- Muted over saturated. Warm charcoals over purple. Brass over yellow.
- Let photography and content do the heavy lifting. The design should support, not compete.
- Fewer visual effects, more precision in spacing and type.
- Every hover state, shadow, and accent should feel earned - not decorative.
- Squared-off buttons (6px radius) feel more premium than pills for this palette.

### CSS Custom Properties

```css
:root {
  /* Core palette - warm charcoal family */
  --bcm-deep: #14181f;
  --bcm-charcoal: #1c2129;
  --bcm-slate: #2a3140;

  /* Accent - muted warm gold (brass, not yellow) */
  --bcm-warm-gold: #c9a96e;
  --bcm-gold-light: #dbc291;
  --bcm-gold-soft: rgba(201, 169, 110, 0.08);
  --bcm-gold-border: rgba(201, 169, 110, 0.18);

  /* Text hierarchy */
  --bcm-text-primary: #1f2328;
  --bcm-text-secondary: #2d3442;
  --bcm-text-tertiary: #4a5568;

  /* Surfaces and borders */
  --bcm-border: #e8eaef;
  --bcm-surface: #f7f8fa;
  --bcm-white: #ffffff;

  /* Shadows - subtle */
  --bcm-shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --bcm-shadow-md: 0 4px 16px rgba(0,0,0,0.06);
  --bcm-shadow-lg: 0 8px 32px rgba(0,0,0,0.08);

  /* Radii - squared-off, not pill */
  --bcm-radius: 8px;
  --bcm-radius-lg: 12px;
}
```

### Color Usage Rules

- **No saturated purple/navy.** Do not use #060097 or #04006B on new pages. Those colors are retired pending rebrand.
- **Dark sections** use `--bcm-deep` or `--bcm-charcoal`, not navy. Gradients go from `--bcm-deep` to `--bcm-charcoal` (170deg typical).
- **Gold accents** are muted brass (#c9a96e), not bright yellow (#FFCD57). Use sparingly - thin rules, icon tints, step numbers, hover borders. Not large fills.
- **Text on dark backgrounds** must be at minimum 70% white opacity for body copy, 80%+ for subheadings. The lightbox counter and decorative elements can go lower.
- **Text on tinted/gray sections** (#f7f8fa surface): use `--bcm-text-secondary` (#2d3442) minimum. The `--bcm-text-tertiary` is only for labels and footnotes.

### Typography

Fonts unchanged: Plus Jakarta Sans (headings, 600 weight), Inter (body, 400/500/600).

- H1: letter-spacing -0.02em, font-weight 700
- H2: letter-spacing -0.02em, font-weight 600
- H3: letter-spacing -0.01em, font-weight 600
- Lead paragraph: 1.04rem, `--bcm-text-secondary`, line-height 1.7
- Body: 0.93-0.96rem, `--bcm-text-secondary`, line-height 1.6
- Links: `--bcm-warm-gold` with subtle underline (text-underline-offset 3px, decoration-thickness 1px, decoration-color at 35% opacity). Hover darkens to #b8943f.

### Hero Treatment

- Background image with multi-stop charcoal overlay: `linear-gradient(175deg, rgba(20, 24, 31, 0.92) 0%, rgba(28, 33, 41, 0.72) 55%, rgba(42, 49, 64, 0.78) 100%)`
- Location label above H1: warm gold text, uppercase, 0.78rem, letter-spacing 0.08em, flanked by thin gold lines (not a frosted pill)
- Subtitle: rgba white 88%, max-width 540px
- Min-height: 500px mobile, 560px tablet, 600px desktop

### Trust Bar

- `--bcm-deep` background with subtle gold bottom border: `1px solid rgba(201, 169, 110, 0.12)`
- Text: rgba white 65%, 0.72rem, uppercase, weight 600, letter-spacing 0.06em
- Thin vertical dividers between items: rgba white 8%
- Understated by design - should barely register visually

### Buttons

**Primary (Gold):**
- Background: `--bcm-warm-gold`, text: `--bcm-deep`
- Border-radius: 6px (not pill)
- Padding: 15px 32px, font-weight 600, 0.92rem
- Hover: darken to #b8943f, translateY(-1px), subtle gold shadow

**Ghost (on dark backgrounds):**
- Background: rgba white 6%, border: 1px solid rgba white 18%
- Text: rgba white 90%
- Hover: background rgba white 12%, border rgba white 30%

**Dark (on light backgrounds):**
- Background: `--bcm-charcoal`, text white
- Hover: darken to `--bcm-deep`, translateY(-1px)

**WordPress specificity note:** All button rules need `.bcm-[page] a.bcm-[page]-cta--variant` selector pattern to beat global `a` color rules.

### Section Patterns

- Padding: 72px mobile, 88px tablet, 100px desktop
- Section headers: centered, max-width 620px
- Gold accent rule: 40px wide, 2px height, centered above h2 (not below). Use as a `<span>` element, not pseudo-element, for more reliable rendering.
- Alternate between white and `--bcm-surface` (#f7f8fa) backgrounds
- Dark sections: `--bcm-deep` solid or gradient to `--bcm-charcoal`. Optional radial gold glow at corner (0.04-0.07 opacity) for subtle warmth.

### Card Design

- Border: 1px solid `--bcm-border` with `--bcm-shadow-sm`
- Hover: `--bcm-shadow-md` + translateY(-2px), optionally shift border to `--bcm-gold-border`
- Border-radius: 8px standard, 12px for larger cards
- Image cards: overflow hidden, scale(1.04) on hover (0.5s ease)

### Icon/Accent Elements

Two approaches depending on section:

**Gold-tinted icon boxes (light sections):**
- 40x40px, background `--bcm-gold-soft`, border 1px `--bcm-gold-border`, 8px radius
- SVG icons: 18px, stroke `--bcm-warm-gold`, stroke-width 1.8

**Vertical accent bars (dark sections):**
- 3px wide, gradient from `--bcm-warm-gold` to transparent
- Paired with text in flex layout (gap 20px)

### Gallery Pattern

For pages with many photos, use a contained gallery approach:
- Show 6-8 images on load (with one tall/featured image for hierarchy)
- "View All [N] Photos" toggle button expands remaining images
- Collapse back with "Show Less" + smooth scroll to gallery top
- Full-screen lightbox with prev/next navigation and keyboard support (arrows, Escape)
- Grid: 2 columns mobile, 3 tablet, 4 desktop. Gap 6-8px. Rounded corners (6px) on items, larger radius (12px) on container.

### Process Steps

Unified card approach with 1px dividers between steps:
- Single container with border, border-radius 12px, overflow hidden
- Background white per step, 1px `--bcm-border` gaps (use grid with gap: 1px and border-colored container background)
- Numbered circles: 28px, border 1.5px `--bcm-gold-border`, gold text, rounded
- Grid: 1 col mobile, 2 col tablet, up to 5 col desktop (for 5-step processes)

### FAQ/Accordion Toggle

- Circular indicator: 30x30px, `--bcm-gold-soft` background, charcoal text
- Expanded state: `--bcm-charcoal` background, gold text
- Active item: `--bcm-shadow-md` + subtle warm border tint

### Review Cards

- Charcoal gradient header bar (stars left, author right, white text)
- Body: italic text with 3px gold left border + 20px padding-left
- Equal-height flex on desktop

### Pricing Disclaimer Standard

All pricing sections must include: "Ranges shown are general estimates - actual pricing and timelines vary by project scope, site conditions, and finish level. You'll receive detailed, transparent pricing as part of your initial consultation and project quote."

### Location Page Differentiation

Vary layout structures across location pages to avoid duplicate content signals. The design system (colors, type, shadows, buttons) stays consistent - component arrangements change per page.

| Component | Pattern A | Pattern B | Pattern C |
| --- | --- | --- | --- |
| Services | Card grid (2x2 or 4-col) | Zigzag (alternating image/text rows) | Icon list with descriptions |
| Gallery | Contained grid + expand toggle | Masonry layout | Featured hero + thumbnail strip |
| Differentiators | Vertical gold bars on dark bg | Icon box cards on light bg | Numbered list |
| Process | Unified card with dividers | Horizontal timeline | Vertical accordion |
| Area Context | Split layout (text + image) | Full-width with inset text | Card with map |

### Transition Notes

- **Existing v2 pages** (Portsmouth, Exeter ADU pages): Leave on the navy/gold palette until we do a batch update post-rebrand. Don't mix palettes on the same page.
- **New pages**: Always use v3 interim palette. If a new page needs to link visually to an existing v2 page (e.g., a spoke page under a v2 hub), flag it and we'll decide case-by-case.
- **When rebrand finalizes**: Swap CSS variables at the top of each page. The design language (spacing, typography, component patterns) carries over regardless of final brand colors.

---

## Brand Evolution Notes (March 2026)

### Direction
Rick approved evolving the Bradford Construction brand to better align with luxury/high-end custom home positioning. This is an evolution, not a rebrand - name stays the same, core identity stays, but the visual presentation levels up.

### What's Changing
- **Logo graphic:** The house graphic can be updated. The "Bradford Construction Management" text stays.
- **Colors:** Current purple and green were chosen intentionally (color psychology research). Can evolve but Rick wants to stay in that family. Note: the current brand.md already moved to Navy/Gold - confirm with Rick if he's referring to the original purple/green or the current Navy/Gold.
- **Yard signs:** Upgrading from corrugated plastic to premium materials (metal/wood, A-frame style). Adding QR codes.
- **Phone number:** Removing the 888/833 number from all materials - switching to local 978-945-9771 only.

### What's NOT Changing
- Business name: Bradford Construction Management
- Brand positioning: luxury design-build, custom homes, ADUs
- Primary tagline: "Your Builder for Life"

### Timeline
- Jennifer developing 2-3 concepts
- Professional designer for final assets ($100-200 budget, Rick paying at cost)
- Steve Tag handles print production (yard signs, materials)
- Test one premium yard sign on next big job before full rollout

### Print Contact
- **Steve Tag** - handles all print marketing materials for BCM

---

*Brand Kit v3.0 | March 2026 - Interim design language active, rebrand in progress*




