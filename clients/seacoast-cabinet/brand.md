# Seacoast Cabinet - Brand Reference

## Business Info

- **Name:** Seacoast Cabinet
- **Tagline:** The Very Best in Cabinetry
- **Founded:** 2019
- **Location:** 300 Newburyport Turnpike, Unit 3, Rowley, MA 01969
- **Phone:** 978-350-1040
- **Email:** inquiry@seacoastcabinetne.com
- **Website:** https://seacoastcabinetne.com

### Hours
- Mon-Fri: 9am - 5pm
- Sat: 10am - 4pm
- Sun: Closed

---

## Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Coastal Blue | `#7d99ad` | Headers, accents, trust elements |
| Warm Gold/Bronze | `#b8905f` | CTAs, highlights, premium accents |
| Deep Charcoal | `#2c3e50` | Body text, navigation, footer |
| Pure White | `#ffffff` | Backgrounds, clean space |

### Secondary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Light Gray | `#f8f8f8` | Section backgrounds, cards |
| Medium Gray | `#666666` | Secondary text, captions |
| Warm Beige | `#f5f2ed` | Subtle backgrounds, warmth |
| Success Green | `#5cb85c` | Positive indicators, checkmarks |

### CSS Variables
```css
:root {
    --coastal-blue: #7d99ad;
    --warm-gold: #b8905f;
    --deep-charcoal: #2c3e50;
    --pure-white: #ffffff;
    --light-gray: #f8f8f8;
    --medium-gray: #666666;
    --warm-beige: #f5f2ed;
    --success-green: #5cb85c;
}
```

---

## Typography

### Fonts
- **Headings:** Montserrat (400, 600, 700)
- **Body:** Open Sans (400, 600)

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

### CSS
```css
h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.2;
}

body {
    font-family: 'Open Sans', sans-serif;
    color: #2c3e50;
    line-height: 1.6;
}
```

---

## Voice & Tone

### Brand Voice
- **Warm and welcoming** - Family-owned feel, not corporate
- **Knowledgeable but approachable** - Expert guidance without jargon
- **Honest and transparent** - Clear pricing, realistic timelines
- **Local and personal** - North Shore roots, neighbor-to-neighbor trust

### Writing Guidelines
- Use "we" and "our" to feel personal
- Avoid overly sales-y language
- Focus on outcomes, not just features
- Acknowledge that kitchen projects are big decisions
- Be helpful first, promotional second

### Sample Phrases
✅ "We're here to help you make the right decisions for your home"
✅ "Our local design team"
✅ "Take your time, ask questions"
❌ "Premier cabinetry solutions"
❌ "Industry-leading expertise"
❌ "Transform your space today!"

---

## Key Services

1. **Kitchen Design Services** - Full design consultation, 3D renderings
2. **Custom Cabinetry** - Omega, Homecrest, Mantra brands
3. **Countertops** - Cambria surfaces and other materials
4. **Virtual Design** - Remote design service for clients who can't visit
5. **Multi-Unit Cabinets** - Builder/contractor projects

---

## Internal Link Destinations

### Service Pages
- `/kitchen-design/` - Kitchen Design
- `/cabinets/` - Cabinets
- `/countertops/` - Countertops
- `/design-services/` - Design Services
- `/virtual-design/` - Virtual Design
- `/our-process/` - Our Process
- `/multi-unit-kitchen-cabinets/` - Multi-Unit

### Location Pages
- `/kitchen-cabinets-rowley-ma/` - Rowley
- `/kitchen-cabinets-newburyport-ma/` - Newburyport
- `/ipswich/` - Ipswich
- `/kitchen-cabinets-topsfield/` - Topsfield
- `/kitchen-cabinets-haverhill-ma/` - Haverhill

### Other Pages
- `/about-us/` - About Us
- `/inspiration-gallery/` - Gallery
- `/budget-planner/` - Budget Planner
- `/contact/` - Contact / Get a Quote
- `/blog/` - Blog

---

## Trust Signals & Assets

### Badges
- Best of Newburyport 2025: `https://seacoastcabinetne.com/wp-content/uploads/2025/08/best-of-nbpt-badge.png`
- NKBA Member: `https://seacoastcabinetne.com/wp-content/uploads/2022/01/National-Kitchen-and-Bath-Association-Member-Logo.png.webp`

### Social Profiles
- Facebook: https://www.facebook.com/SeacoastCabinetRowley/
- Instagram: https://www.instagram.com/seacoastcabinet/
- Pinterest: https://www.pinterest.com/07ziwo1xfcs4vcoj0bpsdv2xcjnyjg/_saved/
- LinkedIn: https://www.linkedin.com/in/frank-leblanc-36a80652
- Houzz: https://www.houzz.com/professionals/cabinets-and-cabinetry/seacoast-cabinet-pfvwus-pf~28773603

---

## Schema Markup

### LocalBusiness (use on all pages)
```json
{
    "@type": "LocalBusiness",
    "@id": "https://seacoastcabinetne.com/#localbusiness",
    "name": "Seacoast Cabinet",
    "telephone": "+1-978-350-1040",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "300 Newburyport Turnpike, Unit 3",
        "addressLocality": "Rowley",
        "addressRegion": "MA",
        "postalCode": "01969",
        "addressCountry": "US"
    }
}
```

---

## Technical Notes (Divi/WordPress)

### Divi List Style Fix
Divi overrides custom list styles. When using custom checkmark lists, add `!important` flags:

```css
.step-includes,
.step-includes li {
    list-style: none !important;
    list-style-type: none !important;
    padding: 0 !important;
    margin: 0 !important;
}
```

Or add to **Divi > Theme Options > Custom CSS** for site-wide fix.

### Code Module Usage
When embedding custom HTML in Divi:
1. Use a Code Module (not Text Module)
2. Include all CSS in `<style>` tags within the module
3. Use `!important` on any styles that conflict with Divi defaults
4. Test responsive breakpoints - Divi may override at mobile

---

## Project Photos (High Quality)

### Showroom
- Team reviewing plans: `https://seacoastcabinetne.com/wp-content/uploads/2025/09/SC-April-2025-5.jpg`
- Showroom interior: `https://seacoastcabinetne.com/wp-content/uploads/2025/09/seacoast-showroom-7.jpg`

### Kitchen Projects
- `https://seacoastcabinetne.com/wp-content/uploads/2025/09/Seacoast-Photos-84.jpg`
- `https://seacoastcabinetne.com/wp-content/uploads/2025/09/Seacoast-Photos-83.jpg`
- `https://seacoastcabinetne.com/wp-content/uploads/2025/09/Seacoast-Photos-72.jpg`
- `https://seacoastcabinetne.com/wp-content/uploads/2025/09/Seacoast-Photos-70.jpg`
- `https://seacoastcabinetne.com/wp-content/uploads/2025/09/Seacoast-Photos-48.jpg`
- `https://seacoastcabinetne.com/wp-content/uploads/2025/09/Seacoast-Photos-40.jpg`
- `https://seacoastcabinetne.com/wp-content/uploads/2026/01/22-Hancock-16.jpg` (Newburyport project)

---

## Pages Built (GitHub)

| Page | File | Live Preview |
|------|------|--------------|
| Homepage | `pages/homepage.html` | [Preview](https://amcreativemarketing.github.io/am-creative-client-sites/clients/seacoast-cabinet/pages/homepage.html) |
| About Us | `pages/about-us.html` | [Preview](https://amcreativemarketing.github.io/am-creative-client-sites/clients/seacoast-cabinet/pages/about-us.html) |
| Design Services | `pages/design-services.html` | [Preview](https://amcreativemarketing.github.io/am-creative-client-sites/clients/seacoast-cabinet/pages/design-services.html) |

---

*Last updated: January 2026*
