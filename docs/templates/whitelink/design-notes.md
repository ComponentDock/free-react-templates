# Whitelink — Design Notes

## Source
- ColorLib: Bootstrap Footer 05
- Slug: `bootstrap-footer-05`
- Preview URL: https://preview.colorlib.com/theme/bft/bootstrap-footer-05/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-05.jpg

## Structure (section order, top to bottom)

1. **Content area** — Light grey background, 70vh height, centered heading "Footer #5".
   Implement as a simple placeholder section.

2. **Footer (white background)** — 4rem vertical padding. Contains:
   - **Top section** (border-bottom, pb-5, mb-4): 3 columns
     - Col 1 (col-lg-3): Email subscribe form (input + rotated submit button)
     - Col 2 (col-lg-6, text-center): Nav links (Features, Blog, Pricing, Services) inline
     - Col 3 (col-lg-3): Social icons (Twitter, Instagram, Facebook, Pinterest) right-aligned
   - **Bottom section**: 3 columns
     - Col 1 (col-lg-4, order-2): Site logo "Component Dock" (blue #3e64ff, 30px, weight 900), centered
     - Col 2 (col-lg-4, order-1): Legal links (Terms, About, Privacy, Contact) inline, left-aligned
     - Col 3 (col-lg-4, text-right): Copyright "© 2019. All Rights Reserved."

## Section-by-section fidelity notes

### Content area
- Bootstrap `d-flex align-items-center bg-light` with 70vh
- Centered h2 with text "Footer #5"
- Simple placeholder on light background

### Footer — Top section
- White background with subtle top border (#efefef)
- 3-column layout: subscribe | nav | social
- Subscribe form: grey input (#e6e6e6), 45px height, no border, no focus shadow
  - Placeholder: "Enter your email" in #b3b3b3, 14px
  - Submit button: absolute positioned inside input, rotated arrow icon (180deg transform)
- Nav links: inline, centered, grey (#777), hover blue (#3e64ff), 10px padding
- Social icons: inline, right-aligned, grey (#ccc or #777)

### Footer — Bottom section
- Logo centered: "Component Dock" in blue #3e64ff, 30px, weight 900
- Legal links left: Terms, About, Privacy, Contact — inline, 10px padding
- Copyright right: "© 2019. All Rights Reserved." small text, grey #777
- Mobile: logo moves to top (order reversal via Tailwind order utilities)

## Design tokens for Tailwind @theme

```css
@theme {
  --color-footer-bg: #ffffff;
  --color-footer-accent: #3e64ff;
  --color-footer-text: #777777;
  --color-footer-link: #777777;
  --color-footer-link-hover: #3e64ff;
  --color-footer-logo: #3e64ff;
  --color-footer-divider: #efefef;
  --color-footer-input-bg: #e6e6e6;
  --color-footer-input-placeholder: #b3b3b3;
}
```

## Implementer checklist

- [ ] Create `apps/whitelink/` (copy simplest existing footer app as base)
- [ ] Set package name: `@free-react-templates/whitelink`
- [ ] Set `public/CNAME`: `whitelink.free.componentdock.com`
- [ ] Set `homepage` in package.json: `https://whitelink.free.componentdock.com`
- [ ] Footer links use "Component Dock" branding (not ColorLib)
- [ ] No ColorLib references in app code
- [ ] Run `npm install` at repo root for lockfile registration
- [ ] TDD: write tests first, then implement, 100% coverage
- [ ] Build passes, typecheck clean
- [ ] Email subscribe form has correct grey background and no focus outline
- [ ] Logo is blue (#3e64ff), 30px, weight 900
- [ ] Mobile responsive: order reversal for bottom bar columns
