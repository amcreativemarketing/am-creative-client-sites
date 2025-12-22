# WordPress Integration Patterns

Common CSS patterns and fixes for HTML pages embedded in WordPress themes.

## Full-Width Override

When embedding custom HTML in WordPress, theme containers often constrain the width. Add this to the main wrapper class to break out:

```css
.your-wrapper-class {
  /* WordPress full-width override */
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(-50vw + 50%);
  position: relative;
  overflow-x: hidden; /* Prevent horizontal scroll */
}
```

**How it works:**
- `width: 100vw` - Sets width to full viewport
- `margin-left: calc(-50vw + 50%)` - Offsets the container's centering
- `overflow-x: hidden` - Prevents any horizontal scrollbar

## High Specificity for Theme Conflicts

WordPress themes often have aggressive CSS. Use these techniques:

```css
/* Double-class specificity */
.your-wrapper.your-wrapper { }

/* !important for critical overrides */
color: #FFFFFF !important;

/* Scoped reset */
.your-wrapper * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

## Mobile Responsive - Divi Theme Overrides

Divi and other page builders aggressively override mobile styles. Standard media queries often fail. Use this bulletproof pattern:

### Core Principles

1. **Force box-sizing on everything**
```css
.your-wrapper,
.your-wrapper *,
.your-wrapper *::before,
.your-wrapper *::after {
  box-sizing: border-box !important;
}
```

2. **Prevent horizontal overflow**
```css
.your-wrapper {
  overflow-x: hidden !important;
  width: 100% !important;
  max-width: 100vw !important;
}

.your-wrapper img {
  max-width: 100% !important;
  height: auto !important;
}
```

3. **Use double-class specificity + !important**
```css
/* Instead of: */
@media (max-width: 768px) {
  .intro-grid {
    grid-template-columns: 1fr;
  }
}

/* Use: */
@media screen and (max-width: 768px) {
  .your-wrapper .intro-grid {
    display: block !important;
    grid-template-columns: none !important;
  }
}
```

4. **Avoid grid-template-columns: 1fr for mobile**
Divi often fights single-column grid declarations. Use `display: block !important` instead:

```css
/* This can fail in Divi: */
grid-template-columns: 1fr !important;

/* This works reliably: */
display: block !important;
grid-template-columns: none !important;
```

5. **Explicit width on all child elements**
```css
.your-wrapper .child-element {
  width: 100% !important;
  margin-bottom: 20px !important;
}
```

### Recommended Breakpoints

```css
/* Tablet */
@media screen and (max-width: 1024px) { }

/* Mobile */
@media screen and (max-width: 768px) { }

/* Small phone */
@media screen and (max-width: 480px) { }
```

### Example: Mobile-Hardened Grid

```css
@media screen and (max-width: 768px) {
  /* Container */
  .your-wrapper .container {
    padding: 0 20px !important;
    width: 100% !important;
    max-width: 100% !important;
  }
  
  /* Grid to stack */
  .your-wrapper .benefits-grid {
    display: block !important;
    grid-template-columns: none !important;
  }
  
  .your-wrapper .benefit-card {
    width: 100% !important;
    margin-bottom: 20px !important;
  }
  
  .your-wrapper .benefit-card:last-child {
    margin-bottom: 0 !important;
  }
}
```

**Why this works:** Divi injects CSS at high specificity. The combination of parent-child selectors (`.your-wrapper .child`) plus `!important` plus `display: block` (instead of `grid-template-columns: 1fr`) reliably overrides Divi's mobile styles.

## Font Loading

Always include fallback fonts in case Google Fonts fail to load:

```css
--font-heading: 'Your Font', Georgia, serif;
--font-body: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
```

## Image Handling

Ensure images are responsive within WordPress:

```css
.your-wrapper img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

---

*Reference file for AM Creative client page builds*
*Last updated: December 2024 - Added Divi mobile override patterns*
