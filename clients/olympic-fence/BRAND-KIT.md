# Olympic Fence Company - Brand Kit & Style Guide

**Last Updated:** January 9, 2026  
**Maintained by:** AM Creative Marketing

---

## ⚠️ CRITICAL - READ BEFORE BUILDING ANY PAGE

### Common Mistakes to Avoid

| Mistake | Wrong | Correct |
|---------|-------|---------|
| **Colors** | Navy `#0d2942`, Teal `#2d8a7b`, Blue `#357abd` | Purple `#272262`, `#4a4494` |
| **CSS prefix** | `.of-`, `.olympic-`, `.fence-` | `.ofc-[city]-` (e.g., `.ofc-bv-`) |
| **Page structure** | Including H1 in page content | Hero provides H1/H2 - content starts at H2 level |
| **Dead links** | Linking to pages that don't exist | Only link to verified live pages (see list below) |
| **Review count** | Making up numbers | Use "15+ reviews" or verify current count |
| **Phone format** | `+1-978-997-2302` | `978-997-2302` |

### Pre-Build Checklist

Before starting ANY Olympic Fence page:

- [ ] Using purple `#272262` as primary (NOT navy, teal, or blue)
- [ ] CSS variables use `--ofc-` prefix
- [ ] CSS classes use `.ofc-[city]-` namespace
- [ ] NOT including H1 (hero provides it) - content starts at H2
- [ ] Hero copy options provided in HTML comments for Elementor setup
- [ ] All internal links go to verified live pages only
- [ ] Phone number is `978-997-2302` everywhere
- [ ] Schema uses business HQ coordinates (42.8034, -70.9617)

---

## Company Information (NAP)

| Field | Value |
|-------|-------|
| **Business Name** | Olympic Fence Company |
| **Address** | 81 Garden Street, West Newbury, MA 01985 |
| **Phone** | 978-997-2302 |
| **Email** | jlapierre@olympicfencema.com |
| **Website** | https://olympicfencema.com |
| **GMB Type** | Service Area Business (no physical address shown) |
| **Owner** | James LaPierre (current), David LaPierre (founder) |
| **Founded** | 1985 |
| **AFA Member** | Yes (American Fence Association 2025) |

---

## Brand Colors

### ✅ CORRECT - Use These Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Primary Purple** | `#272262` | rgb(39, 34, 98) | Headers, buttons, trust bar backgrounds, section headings |
| **Accent Purple** | `#4a4494` | rgb(74, 68, 148) | Button hover states, secondary elements, links on hover |
| **Dark Text** | `#333333` | rgb(51, 51, 51) | Body text, paragraphs |
| **Light Text** | `#666666` | rgb(102, 102, 102) | Secondary text, captions, meta info |

### ❌ WRONG - Never Use These Colors

| Color | Hex | Why Wrong |
|-------|-----|-----------|
| Navy | `#0d2942` | Not our brand - this is a common mistake |
| Teal | `#2d8a7b` | Not our brand |
| Blue | `#357abd` | Not our brand |
| Any green | Various | Not in our palette |

### Supporting Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **White** | `#ffffff` | Backgrounds, text on dark backgrounds |
| **Light Gray** | `#f8f9fa` | Alternate section backgrounds |
| **Medium Gray** | `#e9ecef` | Borders, dividers, table backgrounds |
| **Success Green** | `#28a745` | Checkmarks, positive indicators ONLY |
| **Star Gold** | `#ffc107` | Star ratings ONLY |

### CSS Variables (REQUIRED for all location pages)

```css
:root {
  --ofc-primary: #272262;
  --ofc-primary-hover: #4a4494;
  --ofc-text-dark: #333333;
  --ofc-text-light: #666666;
  --ofc-bg-light: #f8f9fa;
  --ofc-border: #e9ecef;
  --ofc-white: #ffffff;
  --ofc-star: #ffc107;
  --ofc-success: #28a745;
}
```

---

## Typography

### Font Stack

```css
/* Primary font stack - system fonts for performance */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | 2.5rem (40px) | 700 | 1.2 | Page titles - SET IN ELEMENTOR HERO (not in page content) |
| H2 | 2rem (32px) | 700 | 1.3 | Section headings |
| H3 | 1.5rem (24px) | 600 | 1.4 | Subsection headings, card titles |
| H4 | 1.25rem (20px) | 600 | 1.4 | Minor headings |
| Body | 1rem (16px) | 400 | 1.6 | Paragraphs, general text |
| Small | 0.875rem (14px) | 400 | 1.5 | Captions, meta text |

### Text Colors by Context

- **Headers on white background:** `#272262` (primary purple)
- **Body text:** `#333333`
- **Text on purple/dark backgrounds:** `#ffffff`
- **Links:** `#272262` (hover: `#4a4494`)
- **Muted/secondary text:** `#666666`

---

## Logo Assets

### Primary Logos

| Logo | URL | Usage |
|------|-----|-------|
| **White Logo (horizontal)** | `/wp-content/uploads/2025/09/Olympic-new-square-logo-white.png` | Dark backgrounds, header, footer |
| **Color Logo (favicon style)** | `/wp-content/uploads/2025/09/cropped-LogoFINALOPTIMIZED.png` | Mobile header, favicon |

### Logo Usage Rules

- Always use white logo on dark/purple backgrounds
- Minimum clear space around logo: 20px
- Do not stretch, rotate, or alter colors
- Do not place on busy photographic backgrounds without overlay

---

## Brand Voice & Messaging

### Core Messaging Pillars

1. **"Responsive & Reliable" (Reliability)**
   - Clear communication throughout your project
   - Prompt response to inquiries
   - Professional follow-through from quote to completion

2. **"Built for New England" (Quality & Workmanship)**
   - Wood-on-steel system for durability
   - Materials that withstand harsh weather
   - Lifetime workmanship warranty

3. **"40 Years, 2 Generations" (Trust & Honesty)**
   - Family-owned since 1985
   - James and David LaPierre
   - Local community presence

4. **"The Right Fence, Done Right" (Expertise)**
   - Expert guidance on materials and permits
   - Local knowledge of terrain and regulations
   - Professional, clean process

### Taglines & Headlines

**Primary Tagline:**
> "New England-Tough Fences. Built Right. Backed for Life."

**Alternative Headlines:**
- "The Right Fence for Your Home, Done Right the First Time."
- "Expert Fencing Solutions Built to Last in New England"
- "Fast, no-pressure estimates. Lifetime workmanship warranty."

### Trust Signals (always include)

- ⭐ 5.0 Google Rating (15+ reviews)
- 🛡️ Lifetime Workmanship Warranty
- ✓ Licensed & Insured
- 🏠 Family-Owned Since 1985
- 🏅 American Fence Association Member 2025

### Tone Guidelines

| Do | Don't |
|----|-------|
| Professional but approachable | Overly casual or slangy |
| Confident without being boastful | Aggressive sales language |
| Specific and factual | Vague or exaggerated claims |
| Local and personal | Generic or corporate |
| Solution-oriented | Problem-focused negativity |
| Emphasize our strengths positively | Put competitors down or imply others fail |

**Note on Reliability Messaging:** Emphasize responsiveness and communication as Olympic strengths ("We Call You Back," "Prompt responses") without implying other companies ghost customers or fail to respond. Keep the focus on what Olympic does well, not what others do poorly. Avoid specific time promises that may not always be achievable.

---

## Key Differentiators

### Wood-on-Steel System
Olympic's proprietary installation method using steel posts with wood fencing. Key benefits:
- Won't rot at the base like traditional wood posts
- Better freeze-thaw performance
- Longer lifespan in New England climate
- Unavailable from most competitors

### Lifetime Workmanship Warranty
Exceeds all local competitors:
- Boston Fence & Vinyl: 2-year installation warranty
- Groveland Fence: 3-year workmanship guarantee
- Industry standard: 1-2 years
- **Olympic Fence: LIFETIME**

### Response Time
- Emphasize prompt, reliable responses
- Avoid specific time promises (e.g., "within minutes") that may not always be achievable

---

## Service Information

### Service Areas

| Type | Radius | From |
|------|--------|------|
| **Residential** | 30 miles | West Newbury, MA |
| **Commercial/Municipal** | 70 miles | West Newbury, MA |
| **Retail Services** | All of New England | - |

### Services Offered

**Residential:**
- Cedar fencing (traditional and no-dig)
- Vinyl fencing
- Chain-link fencing
- Privacy fencing
- Picket fencing
- Pool enclosures
- Pet containment

**Commercial/Municipal:**
- Security fencing
- Athletic field systems
- Engineered gates
- Temporary fencing
- Code-compliant installations

**Additional:**
- Fence repairs
- Gate service
- Replacement parts
- Permit handling

### Hours of Operation
Monday - Friday: 7:00 AM - 5:00 PM  
Saturday: By appointment  
Sunday: Closed

---

## URL Structure & Live Pages

### ⚠️ CRITICAL: Only Link to Verified Live Pages

**Rule: Never link to pages that don't exist.** Before adding any internal link, verify the page is in this list or check the live site.

### Live Location Pages (verified)

| City | URL | Status |
|------|-----|--------|
| Newburyport | `/newburyport-fence-company/` | ✅ Live |
| Haverhill | `/haverhill-fence-company/` | ✅ Live |
| Amesbury | `/amesbury-fence-company/` | ✅ Live |
| North Andover | `/north-andover-fence-company/` | ✅ Live |
| Salisbury | `/salisbury-fence-company/` | ✅ Live |
| Groveland | `/groveland-fence-company/` | ✅ Live |
| Beverly | `/beverly-fence-company/` | ✅ Live |

### Pages NOT Live (do not link)

| City | Status |
|------|--------|
| Salem | ❌ Not built |
| Danvers | ❌ Not built |
| Peabody | ❌ Not built |
| Andover | ❌ Not built |
| Methuen | ❌ Not built |

### Live Service Pages

| Service | URL |
|---------|-----|
| Residential | `/residential-projects/` |
| Commercial | `/commercial-projects/` |
| Repairs | `/fence-repairs/` |
| Cedar Fencing | `/residential-cedar-fence-newburyport/` |
| Vinyl | `/vinyl/` |
| Chain-Link | `/chain-link/` |
| Privacy | `/privacy-fencing/` |
| Contact | `/contact-us/` |
| About | `/about-us/` |

---

## CSS Namespace Requirements

### ⚠️ REQUIRED: Use City-Specific Prefixes

All custom styles for location pages MUST use the `.ofc-[city]-` prefix to prevent conflicts with the WordPress theme.

**Format:** `.ofc-[2-letter-city-code]-[element]`

| City | Prefix | Example |
|------|--------|---------|
| Beverly | `.ofc-bv-` | `.ofc-bv-hero`, `.ofc-bv-btn-primary` |
| North Andover | `.ofc-na-` | `.ofc-na-hero`, `.ofc-na-btn-primary` |
| Haverhill | `.ofc-hv-` | `.ofc-hv-hero`, `.ofc-hv-btn-primary` |
| Amesbury | `.ofc-am-` | `.ofc-am-hero`, `.ofc-am-btn-primary` |
| Newburyport | `.ofc-nb-` | `.ofc-nb-hero`, `.ofc-nb-btn-primary` |
| Salisbury | `.ofc-sb-` | `.ofc-sb-hero`, `.ofc-sb-btn-primary` |
| Groveland | `.ofc-gv-` | `.ofc-gv-hero`, `.ofc-gv-btn-primary` |

### ❌ Wrong Prefixes (Never Use)

- `.of-` (too generic, conflicts possible)
- `.olympic-` (too long, not namespaced)
- `.fence-` (too generic)
- No prefix at all

### Standard Class Names

```css
.ofc-[city]-hero { }           /* Hero section wrapper */
.ofc-[city]-container { }      /* Content container */
.ofc-[city]-trust-bar { }      /* Trust signals bar */
.ofc-[city]-service-card { }   /* Service grid cards */
.ofc-[city]-btn-primary { }    /* Primary buttons */
.ofc-[city]-btn-secondary { }  /* Secondary buttons */
.ofc-[city]-section { }        /* Content sections */
.ofc-[city]-section-alt { }    /* Alternate background sections */
.ofc-[city]-faq-item { }       /* FAQ accordions */
.ofc-[city]-testimonial-card { } /* Customer reviews */
```

---

## Location Page Design Principles

### Variety Within Brand Consistency

**Location pages should NOT be carbon copies.** Each page should have the same brand feel (colors, typography, voice) but unique layouts and content structures that reflect the character of each community.

**Required consistency (non-negotiable):**
- Brand colors (purple #272262, #4a4494)
- Typography and font stack
- CSS namespace prefix (.ofc-[city]-)
- Trust bar with same messaging
- Schema markup structure
- Cross-linking to other live location pages ONLY
- CTA buttons and phone numbers
- Hero copy options (H1/H2) in HTML comments for Elementor

**Encouraged variety:**
- Section order and arrangement
- Hero/intro layout (text-only, text+image, image-first, etc.)
- Number of gallery images
- Local imagery and neighborhood sections
- FAQ questions tailored to each town
- Process sections vs. feature grids
- Testimonial display (cards, quotes, carousel)

**Layout options to mix between pages:**
1. **Hero with side image** - Two-column intro with image (e.g., Amesbury)
2. **Welcome sign feature** - Local landmark image in service area section (e.g., Haverhill)
3. **Coastal/waterfront focus** - Environmental imagery for beach towns (e.g., Newburyport, Salisbury, Beverly)
4. **Neighborhood grid** - Detailed area breakdowns for larger cities
5. **Process timeline** - Step-by-step installation focus
6. **Gallery-forward** - Lead with project photos

**Why this matters:**
- Avoids duplicate content penalties from Google
- Creates authentic local relevance
- Each page feels tailored to that community
- Better user experience for visitors

---

## Page Components

### Hero Section

The hero (H1, H2, CTA button) is provided by Elementor's standard template. Page content files should include hero copy options as HTML comments at the top:

```html
<!-- ================================================
     HERO COPY OPTIONS (set in Elementor):
     
     H1: [City] Fence Installation
     H2: Professional Fencing for [City]'s Homes Since 1985
     CTA: Get Your Free Estimate → /contact-us/
     ================================================ -->
     
<!-- Page content starts below the hero at H2 level -->
```

**Page Structure Note:** Olympic Fence uses Elementor with a standard hero template that provides the H1 and H2. Page content files should NOT include an H1 - they start at H2 level. Include hero copy options (H1, H2, CTA text) in HTML comments at the top of the file so they can be set in Elementor.

### Trust Bar (required on all location pages)

```html
<div class="ofc-[city]-trust-bar">
  <div class="ofc-[city]-trust-item">⭐ 5.0 Google Rating</div>
  <div class="ofc-[city]-trust-item">🛡️ Lifetime Warranty</div>
  <div class="ofc-[city]-trust-item">✓ Licensed & Insured</div>
  <div class="ofc-[city]-trust-item">🏠 Family-Owned Since 1985</div>
</div>
```

### Primary CTA Button

```html
<a href="/contact-us/" class="ofc-[city]-btn-primary">Get Your Free Estimate</a>
```

```css
.ofc-[city]-btn-primary {
  background: #272262;
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s ease;
}
.ofc-[city]-btn-primary:hover {
  background: #4a4494;
}
```

### Secondary CTA (Phone)

```html
<a href="tel:978-997-2302" class="ofc-[city]-btn-secondary">📞 Call 978-997-2302</a>
```

### Service Cards

Standard 4-card grid:
1. Cedar Fencing → `/residential-cedar-fence-newburyport/`
2. Vinyl Fencing → `/vinyl/`
3. Chain-Link → `/chain-link/`
4. Commercial → `/commercial-projects/`

---

## Schema Markup Templates

### LocalBusiness Schema

**Note:** Always use business HQ coordinates (West Newbury), not the service city coordinates.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Olympic Fence Company",
  "image": "https://olympicfencema.com/wp-content/uploads/2025/09/Olympic-new-square-logo-white.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "81 Garden Street",
    "addressLocality": "West Newbury",
    "addressRegion": "MA",
    "postalCode": "01985",
    "addressCountry": "US"
  },
  "telephone": "978-997-2302",
  "email": "jlapierre@olympicfencema.com",
  "url": "https://olympicfencema.com",
  "priceRange": "$$",
  "openingHours": ["Mo-Fr 07:00-17:00"],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.8034,
    "longitude": -70.9617
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "15"
  },
  "areaServed": {
    "@type": "City",
    "name": "[CITY NAME]",
    "addressRegion": "MA"
  }
}
```

### Service Schema (for location pages)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Fence Installation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Olympic Fence Company"
  },
  "areaServed": {
    "@type": "City",
    "name": "[CITY NAME]",
    "containedInPlace": {
      "@type": "State",
      "name": "Massachusetts"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fencing Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cedar Fence Installation"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Vinyl Fence Installation"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Chain-Link Fence Installation"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fence Repair"}}
    ]
  }
}
```

---

## Internal Linking Strategy

**Rule: No placeholder links.** Only link to pages that exist and are live. Never use `#` or empty href attributes. If a location page doesn't exist yet, don't include it in the nearby communities section.

### From Location Pages, Link To:

1. **Service pages** (in service cards):
   - Cedar → `/residential-cedar-fence-newburyport/`
   - Vinyl → `/vinyl/`
   - Chain-Link → `/chain-link/`
   - Commercial → `/commercial-projects/`

2. **Other location pages** (only link to verified live pages - see list above)

3. **Contact page** (all CTAs):
   - `/contact-us/`

4. **About page** (for warranty/company info):
   - `/about-us/`

### External Links (always use `rel="noopener noreferrer"`)

- Town permit pages
- Google reviews link
- AFA membership (if linking)

---

## Image Guidelines

### Alt Text Format

Location pages: `[Material] fence installation in [City], MA by Olympic Fence Company`

Examples:
- "Cedar privacy fence installation in North Andover, MA by Olympic Fence Company"
- "Vinyl fence with gate in Haverhill, MA residential backyard"
- "Commercial chain-link security fence in Newburyport, MA"

### Image Dimensions

| Usage | Recommended Size |
|-------|--------------------|
| Hero background | 1920x1080px |
| Service cards | 800x600px |
| Gallery thumbnails | 600x450px |
| Inline content | 1200x800px max |

### File Naming

Pattern: `ofc-[material]-[type]-[location]-[number].jpg`

Example: `ofc-cedar-privacy-fence-north-andover-01.jpg`

---

## WordPress Implementation Checklist

When publishing a new location page:

- [ ] Page slug matches URL pattern
- [ ] Meta title set in Yoast/RankMath (60 chars max)
- [ ] Meta description set (155 chars max)
- [ ] Hero H1/H2 set in Elementor (page content starts at H2)
- [ ] Schema scripts added to page header
- [ ] Custom CSS uses `.ofc-[city]-` namespace
- [ ] All colors are brand purple (#272262, #4a4494)
- [ ] All phone numbers are 978-997-2302
- [ ] All internal links point to existing pages only
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Images have descriptive alt text
- [ ] Page added to Service Areas dropdown menu
- [ ] Mobile responsiveness tested
- [ ] Update this brand kit with new page URL

---

## Contact for Brand Questions

**AM Creative Marketing**  
Website: https://www.amcreativemktg.com  
Managing Olympic Fence digital presence and local SEO

---

*This brand kit is a living document. Update as the website evolves or new pages are created.*
