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
| Text Color | #1E293B (Dark Slate) |
| Font | Inter, 600 weight |
| Padding | 20px 40px |
| Border Radius | 9999px (pill) |
| Hover | Scale to 95% or darken to #E5B84E |

### Secondary Button (Outline)

| Property | Value |
| --- | --- |
| Background | Transparent |
| Border | 2px solid #060097 |
| Text Color | #060097 (BCM Navy) |
| Hover | Fill with #060097, text white |

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

*Brand Kit v1.4 | December 2025*


