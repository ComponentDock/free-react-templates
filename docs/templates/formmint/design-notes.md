# Formmint — Design Notes

> Source: ColorLib Contact Form V10
> Preview URL: https://colorlib.com/etc/cf/ContactFrom_v10/index.html
> Name: `formmint` (new name; never reuse ColorLib source name)

## Visual Design Summary

A single-page, centered contact form on a uniform light gray (#f2f2f2)
background. No header, no navigation, no footer in the original — pure form.
The aesthetic is minimal, rounded, and soft: pill-shaped inputs, purple accent,
Ubuntu Bold font, no visible borders or shadows on the form container itself.

## Section Order (1:1 fidelity)

1. **Page wrapper** — full viewport, flex-centered, light gray background
2. **Form container** — 550px wide, transparent background, padded
3. **Title** — "Send Us A Message", uppercase, dark indigo (#403866), 30px,
   centered, 49px bottom padding
4. **Full Name input** — pill shape, white bg, 62px tall, 35px horizontal pad
5. **E-mail input** — same as name
6. **Phone input** — same as name
7. **Message textarea** — pill shape, white bg, min-height 169px
8. **Send button** — purple (#827ffe) background via pseudo-element, white text,
   uppercase, pill shape, centered, 62px tall, hover darkens to #403866
9. **Footer** — "Component Dock" link (our addition, not in original)

## Design Token Notes

### Background
- Page: `#f2f2f2` — flat, no gradient, no image
- Inputs: `#fff` white
- Button bg: `#827ffe` (pseudo-element), hover `#403866`

### Typography
- Font: Ubuntu Bold (Google Fonts: `@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap')`)
- Title: 30px, uppercase, `#403866`
- Input text: 18px, `#8f8fa1`
- Button: 16px, uppercase, `#fff`
- Placeholder: `#bdbdd3`

### Shapes
- Border-radius: 31px on all inputs and button (pill shape)
- No visible borders on inputs (white bg only)
- No shadows on form container or inputs

### Animations
- Input focus: pseudo-element (`.focus-input100`) expands width by 20px
  (10px each side) with 0.4s transition
- Button hover: pseudo-element expands by 20px and changes color from
  `#827ffe` to `#403866` with 0.4s transition

### Validation
- Error tooltip: white bg, `#c80000` red border (1px solid), 14px radius
- Error text: `#c80000`, 13px, positioned right of input
- Error icon: FontAwesome exclamation-circle, red

## Implementation Notes

### Component Structure
```
src/
  App.tsx              — page wrapper, flex centering, bg color
  components/
    ContactForm.tsx    — the form (title, inputs, button)
```

### Styling Approach
- Use Tailwind utilities for layout, spacing, colors
- Define design tokens in `index.css` via `@theme`:
  ```css
  @theme {
    --color-form-bg: #f2f2f2;
    --color-form-title: #403866;
    --color-form-btn: #827ffe;
    --color-form-btn-hover: #403866;
    --color-form-input-text: #8f8fa1;
    --color-form-placeholder: #bdbdd3;
    --color-form-error: #c80000;
    --font-family-ubuntu: 'Ubuntu', sans-serif;
  }
  ```
- Pill shape: `rounded-[31px]` Tailwind class
- Focus expansion: use CSS transition on width via a sibling pseudo-element,
  or use a simpler Tailwind `focus:ring` + custom focus state
- Button hover: `hover:bg-form-btn-hover` with transition

### Reference Material
- Original HTML: `https://colorlib.com/etc/cf/ContactFrom_v10/index.html`
- Main CSS: `https://colorlib.com/etc/cf/ContactFrom_v10/css/main.css`
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v10.jpg`

### What Differs from Original
- New name: `formmint` (not "contact-form-v10")
- No ColorLib references in app code
- No jQuery, no Bootstrap JS, no vendor scripts — React 19 + Tailwind only
- Placeholder images via picsum.photos if needed (none needed here — pure form)
- Footer link to componentdock.com added (not in original)
- Font loaded via Google Fonts link in index.html (original used @font-face)
