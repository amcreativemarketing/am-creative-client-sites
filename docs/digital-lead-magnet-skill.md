# Digital Lead Magnet Creation

## Overview

This skill creates modern, interactive digital documents (lookbooks, guides, brochures) designed for screen viewing, not print. Output can be HTML for web hosting or printed to PDF via Chrome for email attachments.

These are landing-page-style documents with hero sections, visual grids, and clickable CTAs - not traditional boring PDFs.

## Before You Start: Required Information

**Always ask the user for these before building:**

### 1. Content Structure
- Document title and subtitle
- Number of pages/sections needed
- Key messaging points or copy (or should AI draft it?)
- Call-to-action destination (scheduler link, contact page URL, phone number)

### 2. Media Assets
Ask: "Please provide image URLs for the following (can be client photos, stock images, or placeholders to swap later):"

- **Hero/Cover image** - High-impact opener
- **Section images** - One per major section recommended
- **Product/Service images** - For showcasing offerings
- **Team/founder photo** - If including personal letter or about section
- **Logo URL** - If not using text-based brand mark

### 3. Brand Guidelines
- **Primary color** (hex code or describe)
- **Secondary color** (hex code or describe)
- **Accent color** (optional)
- **Font preference** (modern/clean, traditional/serif, playful, etc.)
- **Existing website URL** (to match brand if available)

### 4. Contact Information
- Phone number (will be clickable: `tel:` link)
- Email address (will be clickable: `mailto:` link)
- Website URL
- Scheduler/booking link (if applicable)
- Physical address (if applicable)

## Document Specifications

### Page Setup
```css
@page {
  size: 11in 8.5in;  /* Landscape for digital viewing */
  margin: 0;         /* Full bleed designs */
}
```

- **Orientation:** Landscape (11x8.5") - better for screens
- **Margins:** None (full-bleed designs)
- **Target:** 5-12 pages typical

### Design Principles

**DO:**
- Large hero images with text overlays
- Bold typography hierarchy
- Generous white space
- Card-based layouts for features/options
- Split-panel layouts (image | content)
- Gradient backgrounds for visual interest
- Clickable buttons styled as CTAs
- Consistent page footers with contact info

**DON'T:**
- Dense text blocks
- Small body copy (minimum 14px)
- Print-style layouts with columns of text
- Decorative borders or clip art
- Multiple fonts (2 max: heading + body)

### Interactive Elements

All contact points must be clickable:

```html
<!-- Phone -->
<a href="tel:+19785551234">978-555-1234</a>

<!-- Email -->
<a href="mailto:info@company.com">info@company.com</a>

<!-- CTA Button -->
<a href="https://scheduler-link.com" class="cta-button">Book Your Call</a>

<!-- Website -->
<a href="https://company.com">company.com</a>
```

### Standard Page Types

**1. Cover Page**
- Full-bleed hero image with dark overlay
- Large title + subtitle
- 2-3 trust badges or stats
- Brand mark in corner

**2. Letter/Intro Page**
- Split layout: image left, content right
- Personal message from founder/team
- Photo + signature block
- Establishes trust and voice

**3. Value Props Page**
- 3-column card grid
- Icon + title + description per card
- Highlight key differentiators

**4. Product/Service Showcase**
- Large hero image
- Specs in grid format
- Pricing block (if applicable)
- Feature highlights

**5. Options/Variants Grid**
- 3-4 column card layout
- Image + title + brief description per option
- Visual comparison format

**6. Pricing/What's Included**
- Split panel: Included (dark bg) | Additional (light bg)
- Checklist format
- Transparency messaging

**7. CTA/Contact Page**
- Centered content
- Large headline
- Primary CTA button (linked to scheduler)
- Phone + email as backup options
- Gradient or bold background

## CSS Framework Template

```css
:root {
  /* Brand Colors - CUSTOMIZE THESE */
  --primary: #7D8B6F;
  --primary-dark: #5C6A4E;
  --primary-light: #E8EDE4;
  --dark: #2C3E2D;
  --dark-light: #3D4F3E;
  --cream: #FAF8F5;
  --cream-dark: #F0EDE8;
  --white: #FFFFFF;
  --text: #4A5568;
  --text-light: #718096;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: var(--dark);
  line-height: 1.6;
  margin: 0;
}

.page {
  width: 11in;
  height: 8.5in;
  position: relative;
  overflow: hidden;
  page-break-after: always;
}

.page:last-child {
  page-break-after: avoid;
}

/* Hero/Cover Styling */
.cover {
  background: linear-gradient(135deg, var(--dark) 0%, var(--primary-dark) 100%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}

/* Split Panel Layout */
.split-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}

/* Card Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* CTA Button */
.cta-button {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}

/* Page Footer */
.page-footer {
  position: absolute;
  bottom: 24px;
  left: 48px;
  right: 48px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: var(--text-light);
}
```

## Output Workflow

### For PDF Output (Email Attachments)
1. Build complete HTML document
2. User opens HTML in Chrome
3. Print (Ctrl/Cmd + P)
4. Destination: "Save as PDF"
5. Layout: Landscape
6. Margins: None
7. Background graphics: Enabled
8. Save file

### For Web Output (Hosted Lead Magnet)
1. Same HTML, add responsive meta tag
2. Consider adding scroll behavior for single-page scroll
3. Add tracking pixels (Meta, GA4)
4. Host on GitHub Pages or client server
5. Link directly in emails/ads

### Storage Location
```
/clients/[client-name]/assets/
  ├── [document-name].html     # Source file
  ├── [document-name].pdf      # Generated PDF (optional)
  └── images/                  # Local images if needed
```

## Example Prompt Flow

**User:** "I need a lead magnet for our kitchen remodeling services"

**AI Response:**
"I'll create a digital lookbook for your kitchen remodeling services. Before I build it, I need a few things:

**Content:**
1. What's the main title? (e.g., "2025 Kitchen Design Guide")
2. How many kitchen styles/options do you want to showcase?
3. Do you have existing copy or should I draft the messaging?
4. What's your CTA - schedule a consultation? Request a quote?

**Images - please provide URLs for:**
- Hero/cover image (dream kitchen shot)
- 3-6 kitchen project photos
- Your logo (or company name for text mark)
- Team/founder photo (optional, for personal touch)

**Brand:**
- Primary brand color (or website URL to match)
- Any specific fonts you use?

**Contact:**
- Phone number
- Email
- Website URL  
- Scheduler link (if you have one)

Once I have these, I'll build a 6-8 page digital lookbook with a hero cover, your process, kitchen showcases, pricing transparency section, and a contact page with clickable CTAs."

## Quality Checklist

Before delivering, verify:

- [ ] All images load correctly
- [ ] Phone numbers are `tel:` links
- [ ] Email addresses are `mailto:` links
- [ ] CTA buttons link to correct destination
- [ ] Brand colors applied consistently
- [ ] Text is readable (14px+ body copy)
- [ ] Page footers on all pages
- [ ] No placeholder text remaining
- [ ] Prints correctly in Chrome (test landscape, no margins)
- [ ] Mobile-friendly if using as web page

## Notes

- Chrome Print-to-PDF is the recommended PDF generation method (WeasyPrint has CSS Grid/Flexbox limitations)
- Images must be absolute URLs (https://) for PDF generation
- For web hosting, same HTML works with minor responsive additions
- Always make the document feel like a mini-website, not a traditional brochure
