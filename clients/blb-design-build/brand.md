# BLB Design / Build - Brand Reference

## Business Information

**Address:** 6 Chestnut Street, Suite 200, Amesbury, MA 01913

**Service Area:** 30 miles from Amesbury including Newburyport, West Newbury, Newbury, Rowley, Boxford, Georgetown, Amesbury

**Phone:** [TBD - obtain from client]

---

## Brand Voice & Positioning

**Market Position:** Premium/High-End residential design-build firm

**Target Audience:** Affluent homeowners aged 35-60, household income $150K+, value quality over price

**Core Differentiator:** Design-build model (one team handles design through completion) + founder Ben's hands-on trade background + unwavering commitment to treating clients' homes as their own

**Brand Promise:** Beautiful outcomes + transparent communication + zero surprises

### Voice Guidelines
- **Emphasize:** Trust, craftsmanship, coordination, clear communication, treating homes like our own
- **Avoid:** "Stress-free" language, "we do everything ourselves" claims (they coordinate with specialized trade partners)
- Position BLB as **coordinators and project managers** rather than direct installers

---

## Colors & Typography

### Color Palette
| Usage | Hex | Description |
|-------|-----|-------------|
| Primary | `#1a1a1a` | Near black - headers, buttons, text |
| Secondary | `#666666` | Medium gray - body text |
| Body Text Alt | `#555555` | Darker gray - some body text |
| Background | `#f8f8f8` | Light gray - section backgrounds |
| Button Gray | `#f1f1f1` | Light gray - portfolio/review CTAs |
| White | `#ffffff` | Clean backgrounds, button text |
| Header Bar | `#b8b8ae` | Stone gray - blog/project headers |

### Typography
| Element | Specs |
|---------|-------|
| Font Family | Messina Modern Light |
| Headlines | Font-weight: 300 (light), negative letter-spacing (-1px on large) |
| Body | Font-size: 16-18px, line-height: 1.6-1.8 |
| Body Color | `#555` or `#666` |
| H2 Override | `font-family: 'Messina Modern Light', sans-serif !important; font-weight: 400;` |

### Button Styles
| Type | Specs |
|------|-------|
| Primary | Black background (`#1a1a1a`), white text, 2px border |
| Outline | Transparent background, black border, black text |
| White | White background, dark text (for dark backgrounds) |
| Light Gray | Gray background (`#f1f1f1`), white text, Messina Sans font - Used for portfolio/review CTAs |
| Hover | Inverse colors (swap fill/border) |
| Padding | 20px 50px (large CTAs), 15px 30px (standard) |

**Font Family Override:** Buttons use `'Messina Sans', 'Messina Modern Light', sans-serif` as fallback chain

---

## Service Page Standards (SOP)

### Core Messaging Principles

**Positioning:**
- BLB is a **coordinator and guide**, not claiming to "do everything ourselves"
- Emphasize **project management** and **coordination of trusted trades**
- One team managing the entire process (design through construction)
- Never promise direct manufacturing or installation unless BLB specifically does it

**Language Standards:**
- Remove all "stress-free" language (unrealistic promise)
- Avoid "we make" or "we install" - use "we coordinate," "we guide," "we help select"
- Don't encourage living in home during major remodels
- Use bullet points (•) not checkmarks (✓) for lists

### Page Structure Template

**Section 1: Hero (handled by Divi)**
- H1 headline with H2 subheading
- CTA button
- Trust signals optional

**Section 2: Problem-Solution**
- Left column: Emotional hook headline + benefits paragraph + value prop list + CTA
- Right column: High-quality project image
- Bullet list format: Simple bullets (•) not checkmarks
- Include 4 key differentiators

**Section 3: Services Grid**
- Header: "Everything Coordinated" or similar
- 8 service cards in 4x2 grid
- Frame services as coordination/guidance
- Example: "Cabinet Coordination" not "Custom Cabinetry"

**Section 4: Process Timeline**
- 5-step visual timeline
- No promises about living arrangements during reno
- Focus on transparency and communication
- Single CTA button

**Section 5: Portfolio Gallery**
- 6 images in 3x2 grid
- NO location names in overlays (just descriptive titles)
- Hover overlays with project descriptions
- Dual CTA buttons below

**Section 6: Testimonials**
- 3 testimonials in grid format
- 5-star ratings
- Real client quotes only (verified)
- Location identifiers okay here (e.g., "Newburyport Family")

**Section 7: FAQs**
- Accordion style with expand/collapse
- Add "Schedule a consultation" links for vague answers
- Remove FAQs about living in home during renovation
- 5-6 relevant questions max
- Don't mention specific timelines or prices

**Section 8: Meet the Team**
- Two-column layout
- Mention "Pro NE recognition" (not PROEN or NARI)
- Focus on "Beyond the Build" philosophy
- Team photo

**Section 9: Final CTA**
- Light gray background (`#f8f8f8`) - NOT black (avoid bleed with footer)
- Centered content with flexbox
- Strong headline + subhead + button
- Trust signals in footer text

### Content Guidelines

**CTAs:**
- Vary the language (not always "Contact Us")
- Examples: "Tell Us About Your Project," "Schedule Your Discovery Call," "Start the Conversation"
- All CTAs link to: https://blbdesignbuild.com/contact-us/
- Link to contact page for vague FAQ answers

**Images:**
- Use actual BLB project photos only
- Match descriptions to real projects (no fake locations or fabricated details)
- Remove any award badges from galleries
- No placeholders - only verified URLs

**Trust Signals:**
- "Since 2012"
- "Five-Star Rated"
- "Award-Winning Design-Build"
- "Pro NE Member"

### Quality Checklist

Before publishing any service page:

- [ ] All "we install/make" language changed to coordination
- [ ] No "stress-free" promises
- [ ] No encouragement to live in home during major renos
- [ ] Portfolio images have no location names
- [ ] Vague FAQs link to consultation page
- [ ] Bullets not checkmarks in lists
- [ ] Pro NE (not NARI) mentioned
- [ ] CTAs vary throughout page
- [ ] Mobile responsive design verified
- [ ] All links verified (no placeholders)
- [ ] All testimonials/reviews verified as real

### Technical Implementation

**Page Context:**
- Most service page HTML sits below existing Divi hero (H1/H2 already handled)
- Content goes above footer
- Start HTML sections with H2 (not H1)

**SEO Structure:**
- Only one H1 per page (in Divi hero)
- H2s for major sections
- H3s for subsections within
- H4s for accordion/expandable items

**CSS Notes:**
- Divi theme overrides require `!important` for font-family
- Font-weight can be controlled in builder without `!important`
- Font-size controlled in Divi Text module settings

---

## Key Services

- Kitchen Remodeling
- Bathroom Remodeling
- Home Additions (Second Story, In-Law Suites, First Floor Master)
- Whole Home Remodeling
- Unique Builds / Custom Work
- Historic Home Renovations

---

## Site Architecture Strategy

### Core Principle
**Build depth before width.** Service expertise pages establish topical authority first; location pages layer on top for local SEO. This prevents thin content penalties, consolidates ranking signals, and creates a scalable foundation.

### Page Hierarchy
Homepage → Core Service Pages → Service Depth Pages → Location Pages → Blog/Content

Each layer supports the one above it. Skipping layers or building out of order dilutes authority and creates weak pages competing against each other.

### URL Structure Standards

| Page Type | URL Pattern | Example |
|-----------|-------------|---------|
| Core Service | `/[service-name]/` | `/kitchen-remodeling/` |
| Service Depth | `/[specific-service]/` | `/second-story-additions/` |
| Location | `/areas-we-serve/[city]/` | `/areas-we-serve/newburyport/` |
| Future Location+Service | `/areas-we-serve/[city]/[service]/` | `/areas-we-serve/newburyport/kitchen-remodeling/` |

### Content Depth Guidelines

- **Core Service Pages:** 1,500-2,500 words - Comprehensive overview, process explanation, project examples, FAQ, testimonials, related services links
- **Service Depth Pages:** 1,000-1,500 words - Specific focus, cost considerations, decision factors, project examples, links back to parent service page
- **Location Pages:** 800-1,200 words - Area-specific content, local project examples, community connection, links to ALL services, local testimonials

---

## Page Rollout Plan

### Phase 1: Core Service Pages (In Progress)
| Page | URL Path | Purpose |
|------|----------|---------|
| Home Additions | `/home-additions/` | Parent page for all addition types; captures 'home addition contractor' searches |
| Whole Home Remodeling | `/whole-home-remodeling/` | Highest project value; captures 'whole house renovation' intent |

### Phase 2: Service Depth Pages (Next Priority)
| Page | URL Path | Purpose |
|------|----------|---------|
| Second Story Additions | `/second-story-additions/` | Tracked keyword; specific high-intent search with serious buyers |
| In-Law Suites | `/in-law-suites/` | VoC validated; ADU/multigenerational trend; aging demographic |
| First Floor Master Suites | `/first-floor-master-suites/` | Targets 50-60 segment; aging-in-place planning |
| Historic Home Renovations | `/historic-home-renovations/` | Market differentiator; Newburyport historic housing stock |

### Phase 3: Location Pages (After Service Depth)
| Page | URL Path | Purpose |
|------|----------|---------|
| Newburyport | `/areas-we-serve/newburyport/` | Primary market; local pack rankings |
| Amesbury | `/areas-we-serve/amesbury/` | Office location; home base credibility |
| West Newbury | `/areas-we-serve/west-newbury/` | High-income area; less competitive |

### Phase 4: Process/Trust Page
| Page | URL Path | Purpose |
|------|----------|---------|
| Design-Build Process | `/design-build-process/` | Captures research searches; addresses VoC process fears |

---

## Link Destinations

### Money Pages (Link here for rankings)
*Pass authority to these pages using exact-match or partial-match anchor text*

- **Kitchen Remodeling:** https://blbdesignbuild.com/kitchen-remodeling/
- **Bathroom Remodeling:** https://blbdesignbuild.com/bathroom-remodeling/
- **Home Additions:** https://blbdesignbuild.com/home-additions/
- **Whole Home Remodeling:** https://blbdesignbuild.com/whole-home-remodeling/
- **Unique Builds / Custom Work:** https://blbdesignbuild.com/unique-builds/

### Trust & Authority Pages (Link here for credibility)
*Link to these from service pages to prove expertise and build trust*

- **Our Work / Portfolio:** https://blbdesignbuild.com/work/
- **Kitchen & Bath Gallery:** https://blbdesignbuild.com/kitchens-baths-gallery/
- **Testimonials:** https://blbdesignbuild.com/testimonials/
- **Our Team:** https://blbdesignbuild.com/team/
- **About Us:** https://blbdesignbuild.com/about/

### Conversion Pages (Link here to get leads)
*Every informational page should end with a CTA linking to one of these*

- **Contact Us:** https://blbdesignbuild.com/contact-us/
- **Apply (Careers):** https://blbdesignbuild.com/apply/

### Educational Hubs (Link here for engagement)

- **Blog:** https://blbdesignbuild.com/blog/
- **FAQs:** https://blbdesignbuild.com/faqs/

---

## Image Library

### Team Photos

| Description | URL |
|-------------|-----|
| Team working at community event 1 | https://blbdesignbuild.com/wp-content/uploads/2025/10/IMG_8988-rotated.jpeg |
| Team working at community event 2 | https://blbdesignbuild.com/wp-content/uploads/2025/10/IMG_9029.jpeg |
| Team photo at event | https://blbdesignbuild.com/wp-content/uploads/2025/10/IMG_8988-copy.jpg |
| Team photo outside office (general use) | https://blbdesignbuild.com/wp-content/uploads/2024/12/December2024_BLB-11.jpg |

### Kitchen Photos

| Description | URL |
|-------------|-----|
| Kitchen wide shot | https://blbdesignbuild.com/wp-content/uploads/2024/09/Stratham_FREEBIRD-32.jpg |
| Kitchen to open concept dining | https://blbdesignbuild.com/wp-content/uploads/2024/09/Stratham_FREEBIRD-38.jpg |
| Built-in coffee bar (vertical) | https://blbdesignbuild.com/wp-content/uploads/2024/09/Stratham_FREEBIRD-16.jpg |
| Kitchen island with LED lights (vertical) | https://blbdesignbuild.com/wp-content/uploads/2024/09/Stratham_FREEBIRD-45-copy.jpg |
| Wide kitchen view | https://blbdesignbuild.com/wp-content/uploads/2024/09/Stratham_FREEBIRD-36.jpg |
| Before photo (same kitchen as above) | https://blbdesignbuild.com/wp-content/uploads/2024/09/IMG_4619.jpg |
| Kitchen design | https://blbdesignbuild.com/wp-content/uploads/2024/08/410A8186-Enhanced-NR-copy-1.jpg |
| Decor/shelving above wine fridge (vertical) | https://blbdesignbuild.com/wp-content/uploads/2024/08/410A8197-Enhanced-NR-copy.jpg |
| Kitchen | https://blbdesignbuild.com/wp-content/uploads/2024/08/410A8258-Enhanced-NR.jpg |
| Kitchen | https://blbdesignbuild.com/wp-content/uploads/2024/06/88HighStreet_FREEBIRD-32.jpg |
| Kitchen | https://blbdesignbuild.com/wp-content/uploads/2022/08/2-3.png |
| Exterior with sunset | https://blbdesignbuild.com/wp-content/uploads/2022/04/IMG_9835.jpg |

### Bathroom Photos

| Description | URL |
|-------------|-----|
| Bathroom toward window, sink left (vertical) | https://blbdesignbuild.com/wp-content/uploads/2025/09/4M4A0943-Enhanced-NR.jpg |
| Stone shower interior (vertical) | https://blbdesignbuild.com/wp-content/uploads/2025/09/4M4A0929-Enhanced-NR.jpg |
| Bathroom vanity wide | https://blbdesignbuild.com/wp-content/uploads/2025/09/4M4A1004-Enhanced-NR.jpg |
| Bathroom double sink wide | https://blbdesignbuild.com/wp-content/uploads/2025/09/4M4A0994-Enhanced-NR.jpg |

### Living Spaces

| Description | URL |
|-------------|-----|
| Living room with large ceiling | https://blbdesignbuild.com/wp-content/uploads/2024/01/314Haverhill_FREEBIRD-120.jpg |
| Living room tall ceiling from couch | https://blbdesignbuild.com/wp-content/uploads/2023/12/314Haverhill_FREEBIRD-129.jpg |
| Dining room | https://blbdesignbuild.com/wp-content/uploads/2024/01/314Haverhill_FREEBIRD-3.jpg |

### Bedrooms

| Description | URL |
|-------------|-----|
| Bedroom with decor | https://blbdesignbuild.com/wp-content/uploads/2025/03/Wilson_FREEBIRD-22.jpg |
| Bedroom vertical | https://blbdesignbuild.com/wp-content/uploads/2025/03/Wilson_FREEBIRD-20-copy.jpg |

### Misc Interior

| Description | URL |
|-------------|-----|
| Stacked washroom (space planning) | https://blbdesignbuild.com/wp-content/uploads/2025/09/4M4A1033-Enhanced-NR.jpg |
| Entry way decor | https://blbdesignbuild.com/wp-content/uploads/2025/09/314Haverhill_FREEBIRD-9.jpg |
| Mudroom (vertical) | https://blbdesignbuild.com/wp-content/uploads/2025/08/4M4A0763-Enhanced-NR.jpg |

### Exterior & Additions

| Description | URL |
|-------------|-----|
| Enclosed porch exterior | https://blbdesignbuild.com/wp-content/uploads/2025/08/4M4A0862-Enhanced-NR-crop.jpg |
| Exterior of home | https://blbdesignbuild.com/wp-content/uploads/2022/08/2-15.png |
| Second story addition exterior | https://blbdesignbuild.com/wp-content/uploads/2022/04/HighlandProject_Freebird-88.jpg |

---

## On-Page Requirements

Every service page should include:

- **Location modifiers in subheadings** - e.g., "Kitchen Remodeling for North Shore Homes"
- **FAQ schema with local questions** - e.g., "How much does a kitchen remodel cost in Newburyport?"
- **Internal links to related services** - Cross-link between service types, link depth pages to parent pages
- **Internal links to location pages** - Once location pages exist
- **Social proof** - Project examples, testimonials addressing VoC fears (trust, process, outcomes)
- **Clear CTA** - Consultation scheduling that addresses "stress-free process" desire

---

## Technical Notes

- **CMS:** WordPress with Divi theme
- **Page Context:** Most pages sit below existing hero (H1/H2) and above footer
- **Schema:** LocalBusiness on all pages, Service schema on service pages, FAQ schema where applicable

---

## Strategic Rationale

### Why depth before geographic expansion
A site with 4 strong service pages and 4 supporting depth pages will outrank a site with 4 service pages and 12 thin location variations. Google sees the first as an authority; the second as keyword stuffing.

### Why general location pages first
At BLB's current site size and authority level, one comprehensive Newburyport page that links to all services concentrates ranking signals. Six thin "Service + Newburyport" pages split that authority six ways.

### When to create location-specific service pages
Location-service combo pages (e.g., "Kitchen Remodeling Newburyport") make sense only when:
1. Core service pages are ranking and building authority
2. GBP presence is strong in that market
3. There's enough unique local content to differentiate (local project photos, area-specific testimonials, neighborhood considerations)

---

*Last updated: January 15, 2026*
