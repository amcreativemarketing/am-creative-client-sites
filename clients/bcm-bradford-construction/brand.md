## Logos and standard video logo assets:

[drive.google.com](http://drive.google.com)

# Bradford Construction Management - Brand Kit

## Brand Overview

Bradford Construction Management (BCM) is a premium design-build contractor serving Eastern Massachusetts and Southern New Hampshire. We deliver additions, whole-home renovations, ADUs, and custom homes with commercial-grade project management. Our brand reflects professionalism, transparency, and lifetime commitment through our partnership with Bradford Home Services.

**One-sentence identity:** Premium New England design-build contractor with professional project management and lifetime support.

**Tagline:** Your Builder for Life

**Brand personality:** Calm, assured, established, precise, premium. Warm but not soft. Architectural but not sterile. The sweet spot: refined, grounded, and quietly confident.

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

### Primary Palette

| Name | Hex | RGB | CMYK | Usage |
| --- | --- | --- | --- | --- |
| **Primary Black** | #1A1A1A | 26, 26, 26 | 0, 0, 0, 90 | Primary logo color, headers, dark backgrounds, hero overlays |
| **Refined Gold** | #C8A24D | 200, 162, 77 | 0, 19, 62, 22 | Accents, CTAs, "Construction Management" text, tagline lines |
| **Rich Charcoal** | #1C2331 | 28, 35, 49 | 43, 29, 0, 81 | Body text, secondary dark backgrounds, UI elements |
| **Warm White** | #FAF9F7 | 250, 249, 247 | 0, 0, 1, 2 | Backgrounds, reverse text on dark |

### Secondary Palette

| Name | Hex | Usage |
| --- | --- | --- |
| **Deep Maritime** | #0F2A45 | Optional accent sections (max 1 per page), not heroes or primary dark |
| **Sage** | #7A9B7E | Rare supporting accent, nods to BCM's original green heritage |
| **Light Gray** | #F1F1F1 | Section backgrounds, cards, subtle separation |

### Color Rules
- Black and Gold is the primary brand expression for all default applications
- Never use pure #000000 - always #1A1A1A for softer premium feel
- Gold is used like brass hardware - precise, purposeful, not decorative
- Deep Maritime is an opt-in accent for a single featured section per page - not for heroes, not for primary dark surfaces
- Sage is rare - use sparingly in web design to add warmth
- Retired colors: #060097 (navy), #FFCD57 (bright gold), #04006B (dark navy), #C10FFF (purple) - do not use on any pages

---

## Typography

### Font Families

**Headings: Plus Jakarta Sans**

- Google Fonts: https://fonts.google.com/specimen/Plus+Jakarta+Sans
- Weights: 600 (Semi-Bold), 700 (Bold), 800 (Extra Bold)

**Body Text: Inter**

- Google Fonts: https://fonts.google.com/specimen/Inter
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold)

### Type Scale

| Element | Font | Weight | Size | Line Height | Letter Spacing |
| --- | --- | --- | --- | --- | --- |
| **H1** | Plus Jakarta Sans | 700 | clamp(2.2rem, 5vw, 3.4rem) | 1.15 | -0.025em |
| **H2** | Plus Jakarta Sans | 700 | clamp(1.7rem, 3.5vw, 2.4rem) | 1.15 | -0.02em |
| **H3** | Plus Jakarta Sans | 600 | clamp(1.15rem, 2vw, 1.4rem) | 1.15 | -0.01em |
| **H4** | Plus Jakarta Sans | 600 | 1.05rem | 1.15 | 0 |
| Lead | Inter | 400 | 1.08rem | 1.7 | 0 |
| Body | Inter | 400 | 0.93-0.96rem | 1.65 | 0 |
| Caption | Inter | 400 | 0.85rem | 1.55 | 0 |
| Label | Plus Jakarta Sans | 600 | 0.72rem | 1 | 0.1em (uppercase) |

### Font Import

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
```

### Typography Rules
- Logo renders as SVG/image on website - Aviano is not loaded as a web font
- Plus Jakarta Sans and Inter are the only web fonts loaded
- All headings: Plus Jakarta Sans. All body copy: Inter
- No additional display or decorative fonts
- Section labels: uppercase, 0.72rem, weight 600, tracking 0.1em, gold color, with flanking gold accent lines

---

## Logo Assets

### Logo System
- **Primary wordmark:** "BRADFORD" in Aviano Bold (serif), "CONSTRUCTION MANAGEMENT" in Plus Jakarta Sans Light with wide letter-spacing
- **Tagline lockup:** "YOUR BUILDER FOR LIFE" in Plus Jakarta Sans Regular with flanking accent lines
- **BCM monogram:** Secondary mark for small-format applications only

### Logo Lockups
- Horizontal lockup - website header, proposals, wide-format
- Stacked lockup - print, signage, business cards
- Stacked with tagline - proposals, yard signs, select marketing
- BCM monogram - favicon, social icon, embroidery, signage stamp

### Color Variants
- Primary - black/gold on white
- Reverse - white/gold on dark
- Blackout - all black
- Goldout - all gold
- Whiteout - all white

### Logo Clear Space
Minimum 2X on all sides, 1X on top. X = height of the "O" in BRADFORD.

### Website Usage
- Header: horizontal lockup, SVG, black on white
- Footer: horizontal or stacked, white/gold on dark
- Favicon: BCM monogram

---

## Slogans & Taglines

### Primary Slogan

**"Your Builder for Life"**

*The only tagline in the brand system.*

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

## Page Design System (2026 Brand Identity)

Primary design language for all BCM web pages. This replaces all prior interim systems. Use for every new page build and as the reference for migrating existing pages.

### Design Philosophy

Architectural luxury. The goal is a page that looks like it was designed by a human who understands architecture - not generated by a marketing tool. Generous whitespace, restrained color, strong typography, and intentional use of accent. Think architectural firm lookbook, not contractor landing page.

**Guiding principles:**
- Black and gold is the primary expression. Deep Maritime is a deliberate accent choice, not a default.
- Gold used like brass hardware - precise, purposeful, not decorative. Thin rules, icon tints, step numbers, hover borders. Not large fills.
- Let photography and content do the heavy lifting. The design supports, not competes.
- Fewer visual effects, more precision in spacing and type.
- Every hover state, shadow, and accent should feel earned - not decorative.
- 6px border-radius on buttons (not pill) reads more premium for this brand.

### Live Component Reference

The full design system with live components is at:
`clients/bcm-bradford-construction/pages/bcm-design-system-2026.html`

Preview: https://amcreativemarketing.github.io/am-creative-client-sites/clients/bcm-bradford-construction/pages/bcm-design-system-2026.html

### CSS Custom Properties

```css
:root {
  /* Primary Palette */
  --bcm-black: #1A1A1A;
  --bcm-gold: #C8A24D;
  --bcm-charcoal: #1C2331;
  --bcm-white: #FAF9F7;

  /* Secondary Palette */
  --bcm-maritime: #0F2A45;
  --bcm-sage: #7A9B7E;
  --bcm-gray: #F1F1F1;

  /* Gold System */
  --bcm-gold-hover: #B8923F;
  --bcm-gold-light: #D4B46A;
  --bcm-gold-soft: rgba(200, 162, 77, 0.07);
  --bcm-gold-border: rgba(200, 162, 77, 0.18);
  --bcm-gold-glow: rgba(200, 162, 77, 0.12);

  /* Text Hierarchy */
  --bcm-text-primary: #1C2331;
  --bcm-text-secondary: #3A4255;
  --bcm-text-tertiary: #5C6478;
  --bcm-text-light: rgba(250, 249, 247, 0.88);
  --bcm-text-muted: rgba(250, 249, 247, 0.62);

  /* Surfaces */
  --bcm-surface: #F7F7F5;
  --bcm-surface-raised: #FFFFFF;
  --bcm-border: #E5E5E2;
  --bcm-border-subtle: rgba(28, 35, 49, 0.06);

  /* Shadows */
  --bcm-shadow-xs: 0 1px 2px rgba(28, 35, 49, 0.04);
  --bcm-shadow-sm: 0 2px 8px rgba(28, 35, 49, 0.05);
  --bcm-shadow-md: 0 4px 20px rgba(28, 35, 49, 0.07);
  --bcm-shadow-lg: 0 8px 40px rgba(28, 35, 49, 0.09);
  --bcm-shadow-gold: 0 4px 20px rgba(200, 162, 77, 0.2);

  /* Radii */
  --bcm-radius: 6px;
  --bcm-radius-md: 10px;
  --bcm-radius-lg: 14px;

  /* Typography */
  --bcm-font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --bcm-font-body: 'Inter', -apple-system, sans-serif;

  /* Transitions */
  --bcm-ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Color Usage Rules

- **Primary dark surfaces** (heroes, dark sections, stats rows, CTA bands) use `--bcm-black` to `--bcm-charcoal` gradient. This is the default.
- **Hero overlays** use a warm black/charcoal gradient with no blue shift: `linear-gradient(172deg, rgba(26, 26, 26, 0.94) 0%, rgba(26, 26, 26, 0.82) 45%, rgba(28, 35, 49, 0.75) 100%)`
- **Deep Maritime** is opt-in for a single accent section per page - not for heroes, headers, or primary dark surfaces.
- **Gold accents** are Refined Gold (#C8A24D). Use sparingly - thin rules, icon tints, step numbers, hover borders. Not large fills.
- **Text on dark backgrounds:** minimum 88% white opacity for body copy, gold for labels.
- Never use retired colors: #060097, #FFCD57, #04006B, #C10FFF, #c9a96e, #14181f.
- Dark sections get a subtle noise texture at 2.5% opacity for anti-banding and physical quality.
- Dark sections get a subtle radial gold glow (4% opacity) for warmth.

### Buttons

**Primary (Gold):**
- Background: `--bcm-gold` (#C8A24D), text: `--bcm-black` (#1A1A1A)
- Border-radius: 6px (not pill)
- Padding: 15px 34px, font-family: Plus Jakarta Sans, font-weight: 600, 0.92rem
- Hover: darken to #B8923F, translateY(-2px), gold shadow

**Dark (on light backgrounds):**
- Background: `--bcm-charcoal`, text: `--bcm-white`
- Hover: darken to `--bcm-black`, translateY(-2px)

**Maritime (accent CTA):**
- Background: `--bcm-maritime`, text: `--bcm-white`
- Hover: darken to #0b2238, translateY(-2px)

**Ghost (on dark backgrounds):**
- Background: rgba(250, 249, 247, 0.06), border: 1px solid rgba(250, 249, 247, 0.18)
- Text: rgba(250, 249, 247, 0.88)
- Hover: background rgba white 12%, border rgba white 32%

**Outline (subtle on light backgrounds):**
- Background: transparent, border: 1.5px solid `--bcm-border`
- Text: `--bcm-charcoal`
- Hover: border shifts to gold, translateY(-2px)

**WordPress specificity note:** All button rules need `.bcm-[page] a.bcm-[page]-cta--variant` selector pattern to beat global `a` color rules.

### Hero Treatment

- Background image with warm black/charcoal overlay (no blue shift)
- Optional location/service label above H1: gold text, uppercase, 0.72rem, letter-spacing 0.1em, with leading gold rule (24px wide, 1.5px)
- Labels are contextual: use on service and location pages (e.g., "Custom Homes", "Andover, MA"). Omit on homepage.
- Subtitle: 88% white opacity, max-width 520px
- Gold accent line at bottom: 3px, gradient left-to-right, 40% opacity
- Min-height: 520px mobile, 580px tablet, 640px desktop

### Trust Bar

- `--bcm-black` background with subtle gold bottom border at 12% opacity
- Text: 50% white, 0.7rem, uppercase, Plus Jakarta Sans weight 500, letter-spacing 0.07em
- Thin vertical dividers between items: 10% white
- Understated by design - should barely register visually

### Section Patterns

- Padding: 72px mobile, 96px tablet, 112px desktop
- Section headers: centered, max-width 640px, with gold flanking accent lines on label
- Gold accent rule above h2: 40px wide, 2px height (optional, use `<hr class="bcm-accent-rule">`)
- Alternate between `--bcm-white` and `--bcm-surface` (#F7F7F5) backgrounds
- Dark sections: `--bcm-black` to `--bcm-charcoal` gradient with noise texture and radial gold glow

### Card Design

- Border: 1px solid `--bcm-border` with `--bcm-shadow-xs`
- Hover: `--bcm-shadow-md` + translateY(-3px), border shifts to `--bcm-gold-border`
- Border-radius: 10px standard, 14px for larger cards/image cards
- Icon boxes: 44x44px, `--bcm-gold-soft` background, `--bcm-gold-border` border, 6px radius
- Icon box hover: solid gold background, icon stroke shifts to black

### Process Steps

Unified card approach with 1px dividers:
- Single container with border, border-radius 14px, overflow hidden
- Grid with gap: 1px and border-colored container background creates dividers
- Numbered circles: 36px, border 1.5px `--bcm-gold-border`, gold text
- Step hover: `--bcm-gold-soft` background, number fills solid gold
- Grid: 1 col mobile, 2 col tablet, up to 5 col desktop

### FAQ/Accordion Toggle (CSS-Only)

- Uses checkbox hack (no JavaScript) for Elementor compatibility
- Indicator: 32px circle, `--bcm-gold-soft` background, charcoal "+" text
- Expanded state: charcoal background, gold text, rotated 45deg (becomes "x")
- Active question text shifts to gold-hover color
- Answer: max-height transition, padded right 48px for indicator space

### Review Cards

- Header bar: charcoal-to-black gradient (no maritime), stars left, author right, white text
- Body: italic text with 3px gold left border + 20px padding-left
- Hover: subtle shadow lift

### Gallery Pattern

- Contained grid with border-radius 14px, overflow hidden
- Grid: 2 col mobile, 3 tablet, 4 desktop. Gap 6px. Background: border color (creates grid lines)
- Hover: scale(1.06) on image, 3px gold border overlay
- Support for `--tall` modifier (grid-row: span 2) on featured image

### CTA Band

- `--bcm-black` background with 4px gold accent bar on left edge
- Flex layout: text left, buttons right (stack on mobile)
- h3 + muted subtitle text + gold CTA button + ghost phone button
- Padding: 56px vertical mobile, 48px desktop

### Split Layout (Text + Image)

- CSS Grid: 1 col mobile, 2 col at 768px with 64px gap
- Image container: border-radius 14px, overflow hidden, aspect-ratio 4:3
- Gold corner accent on image: 80px wide, 3px height at bottom-left
- Support for `--reverse` modifier to flip image/text sides

### Location Page Differentiation

Vary layout structures across location pages to avoid duplicate content signals. The design system (colors, type, shadows, buttons) stays consistent - component arrangements change per page.

| Component | Pattern A | Pattern B | Pattern C |
| --- | --- | --- | --- |
| Services | Card grid (2x2 or 3-col) | Zigzag (alternating image/text rows) | Icon list with descriptions |
| Gallery | Contained grid + expand toggle | Masonry layout | Featured hero + thumbnail strip |
| Differentiators | Vertical gold bars on dark bg | Icon box cards on light bg | Numbered list |
| Process | Unified card with dividers | Horizontal timeline | Vertical accordion |
| Area Context | Split layout (text + image) | Full-width with inset text | Card with map |

### Migration Notes

- **All new pages:** Use the 2026 design system. Copy CSS custom properties from this brand.md or reference the component showcase HTML.
- **Existing pages:** Migrate when next touched for content or SEO updates. Swap the `:root` variable block and update class names as needed. Do not mix old and new palettes on the same page.
- **Font loading:** No changes needed - Plus Jakarta Sans and Inter remain the only web fonts.

### Pricing Disclaimer Standard

All pricing sections must include: "Ranges shown are general estimates - actual pricing and timelines vary by project scope, site conditions, and finish level. You'll receive detailed, transparent pricing as part of your initial consultation and project quote."

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
Licensed & Insured - MA HIC #201908
```

**Medium (trust bars):**
```
Licensed & Insured - MA HIC #201908 - Design-Build - Transparent Pricing - Lifetime Support
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

*Brand Kit - 2026 Primary Identity | Prepared by AM Creative Marketing*
