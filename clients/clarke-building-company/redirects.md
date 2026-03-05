# Clarke Building Company - 301 Redirect Map

**Purpose:** Map all existing Topline Pro URLs to new WordPress destinations
**When to implement:** After WordPress launch, before DNS cutover (or immediately after)
**Method:** WordPress redirection plugin (Redirection or Rank Math) or .htaccess
**Last Updated:** March 5, 2026

---

## Why This Matters

The current site has 3 Google-indexed pages and 39 total indexed URLs (mostly thin blog posts). While traffic is minimal (7 visits/month), proper redirects:
- Preserve any existing link equity from the 3 indexed pages
- Prevent 404 errors that hurt crawl efficiency
- Ensure anyone with bookmarked or cached old URLs lands correctly
- Clean up Google's index faster (redirects signal the new canonical)

---

## Service Page Redirects

These are the core pages that have Google-indexed equivalents or known URLs from the current site.

| Old Topline Pro URL | New WordPress URL | Type | Notes |
|---|---|---|---|
| `/service-kitchen-renovation` | `https://clarkebuildingcompany.com/kitchen-remodeling/` | 301 | **Indexed by Google.** Highest priority redirect. |
| `/service-general-remodeling` | `https://clarkebuildingcompany.com/renovations/` | 301 | **Indexed by Google.** Second highest priority. |
| `/service-house-additions` | `https://clarkebuildingcompany.com/additions/` | 301 | Known URL from site navigation. |
| `/service-deck-patio-installation` | `https://clarkebuildingcompany.com/deck-construction/` | 301 | Known URL from site navigation. |
| `/service-carpentry` | `https://clarkebuildingcompany.com/renovations/` | 301 | Carpentry absorbed into Home Renovations page per strategy. |
| `/service-flooring` | `https://clarkebuildingcompany.com/renovations/` | 301 | Flooring absorbed into Home Renovations page per strategy. |
| `/service-bathroom-renovation` | `https://clarkebuildingcompany.com/services/` | 301 | **Excluded service.** Do not market bathrooms per client. Redirect to Services hub - not a 410 since the URL was public. |

---

## Standard Page Redirects

| Old Topline Pro URL | New WordPress URL | Type | Notes |
|---|---|---|---|
| `/reviews` | `https://clarkebuildingcompany.com/reviews/` | 301 | Adding trailing slash + new page. |
| `/about` | `https://clarkebuildingcompany.com/about/` | 301 | Standard Topline Pro page, likely existed. |
| `/contact` | `https://clarkebuildingcompany.com/contact/` | 301 | Adding trailing slash. |

---

## Gallery Page Redirects

The old site had 3 gallery pages. All replaced by single Projects Portfolio page.

| Old Topline Pro URL | New WordPress URL | Type | Notes |
|---|---|---|---|
| `/gallery-All` | `https://clarkebuildingcompany.com/projects/` | 301 | All galleries → single portfolio. |
| `/gallery-Exterior-Renovations` | `https://clarkebuildingcompany.com/projects/` | 301 | |
| `/gallery-Interior-Renovations` | `https://clarkebuildingcompany.com/projects/` | 301 | |

---

## Blog Redirects

The current site has 20+ AI-generated blog posts from July-November 2025 producing zero organic traffic. Strategy calls for auditing each individually. Two options per post:

**Option A - 301 redirect** to a relevant service page (if the blog topic maps to a service)
**Option B - 410 Gone** (if the post is thin/duplicate/irrelevant with no backlinks)

Blog posts need individual audit before deciding. Here's the framework:

| Decision | When to Use | Implementation |
|---|---|---|
| **301 to service page** | Blog post topic maps to a real service (e.g., "kitchen remodel tips" → /kitchen-remodeling/) | 301 redirect |
| **301 to blog hub** | Blog post is general/topical but not service-specific | 301 to /blog/ |
| **410 Gone** | Post is thin AI content with no backlinks and no keyword relevance | 410 status |

**Action needed:** Pull the full list of blog post URLs from the Topline Pro sitemap or Google Search Console and audit each one. Prioritize checking for any backlinks (even spam) before 410ing.

| Old Blog URL Pattern | Decision | New Destination |
|---|---|---|
| `/blog` (hub) | 301 | `https://clarkebuildingcompany.com/blog/` | 
| `/blog/[individual-posts]` | TBD - audit each | See framework above |

---

## Sitemap & Utility Redirects

| Old Topline Pro URL | New WordPress URL | Type | Notes |
|---|---|---|---|
| `/sitemap.xml` | `https://clarkebuildingcompany.com/sitemap.xml` | 301 | WordPress auto-generates sitemap. Redirect old path just in case. |

---

## URLs That Don't Need Redirects

| URL | Reason |
|---|---|
| `/` (homepage) | Same path - no redirect needed, just new content. |
| Topline Pro system pages (login, admin, etc.) | Platform-specific, won't exist on new domain. |
| CDN image URLs (`d3p2r6ofnvoe67.cloudfront.net`) | External CDN, not our domain. |

---

## Implementation Checklist

- [ ] Install Redirection plugin (or configure Rank Math redirects) on WordPress
- [ ] Add all service page redirects (7 redirects)
- [ ] Add standard page redirects (3 redirects)
- [ ] Add gallery page redirects (3 redirects)
- [ ] Add blog hub redirect (1 redirect)
- [ ] Audit individual blog posts and add redirects/410s (20+ posts)
- [ ] Add sitemap redirect (1 redirect)
- [ ] Test all redirects after DNS cutover
- [ ] Submit updated sitemap to Google Search Console
- [ ] Use URL Inspection tool in GSC to request re-crawl of key redirected pages
- [ ] Monitor GSC for 404 errors in the weeks following launch - add redirects for any missed URLs
- [ ] After 3-6 months: check if old URLs have dropped from Google index

---

## Redirect Priority Order

1. **Immediate (before/during launch):** Service page redirects + gallery redirects (these are the pages most likely bookmarked or linked to)
2. **Day 1 post-launch:** Standard page redirects + blog hub redirect
3. **Week 1 post-launch:** Individual blog post audit + redirects/410s
4. **Ongoing:** Monitor GSC for missed 404s and add redirects as needed

---

*301 Redirect Map - Clarke Building Company*
*Prepared by AM Creative | March 2026*
