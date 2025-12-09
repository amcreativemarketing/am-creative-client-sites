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
