# Darkstore — Design Notes

## Source
- ColorLib: Bootstrap Footer 04
- Slug: `bootstrap-footer-04`
- Preview URL: https://preview.colorlib.com/theme/bft/bootstrap-footer-04/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-04.jpg

## Structure (section order, top to bottom)

1. **Content area** — Light grey background, 70vh height, centered heading.
   Placeholder content above the footer (implementer may use a simple hero or
   blank area with heading).

2. **Footer** — Black background, 7rem vertical padding. Contains:
   - **Row 1** (4 columns, `mb-5`):
     - Col 1 (`col-md-3`): Site logo (white, 26px, bold) + description paragraph
     - Col 2 (`col-md-2`, `ml-auto`): "Shop" heading + 5 links
     - Col 3 (`col-md-2`, `ml-auto`): "Press" heading + 5 links
     - Col 4 (`col-md-2`, `ml-auto`): "About" heading + 5 links
   - **Divider** — 1px solid rgba(255,255,255,0.2)
   - **Row 2** (2 columns):
     - Left (`col-md-6`, text-left): Legal links (Privacy Policy, Terms & Conditions, Code of Conduct) — inline display
     - Right (`col-md-6`, text-right): Social icons (Twitter, Instagram, Facebook, Pinterest)
   - **Copyright row** (`col-md-7`): Small text with copyright/description

## Section-by-section fidelity notes

### Content area
- Original uses Bootstrap `d-flex align-items-center bg-light` with 70vh height
- Centered h2 with text "Footer #4"
- Implement as a simple placeholder with heading on light background

### Footer (dark background)
- Background: solid black `#000`
- Body text: grey `#777`
- All font-family: `Roboto` (load via Google Fonts link in index.html)
- Links: grey `#999`, hover to white `#fff`, transition 0.3s ease
- Section headings (h3): white `#fff`, 16px, bold, 20px bottom margin
- Link lists: 10px bottom margin per item, `list-unstyled`

### Navigation columns
- 4-column layout using Tailwind grid (`grid-cols-4` on desktop, stack on mobile)
- Columns: Logo+Description | Shop | Press | About
- Each link list has 5 items
- Column headings: white, 16px, bold

### Divider
- 1px top border, semi-transparent white: `rgba(255,255,255,0.2)`
- Use Tailwind: `border-t border-white/20`

### Bottom bar
- Legal links on left: white, inline display, 10px padding, first item no left padding
- Social icons on right: silver `#ccc`, inline display, 10px padding
- Use lucide-react icons for social media (Twitter→X, Instagram, Facebook, Pinterest→external link)

### Copyright
- Small text, grey `#777`
- Use `<small>` or `text-sm` Tailwind class

## Design tokens for Tailwind @theme

```css
@theme {
  --color-footer-bg: #000000;
  --color-footer-text: #777777;
  --color-footer-link: #999999;
  --color-footer-link-hover: #ffffff;
  --color-footer-heading: #ffffff;
  --color-footer-divider: rgba(255, 255, 255, 0.2);
  --color-footer-social: #cccccc;
  --color-footer-logo: #ffffff;
}
```

## Implementer checklist

- [ ] Create `apps/darkstore/` (copy simplest existing footer app as base)
- [ ] Set package name: `@free-react-templates/darkstore`
- [ ] Set `public/CNAME`: `darkstore.free.componentdock.com`
- [ ] Set `homepage` in package.json: `https://darkstore.free.componentdock.com`
- [ ] Footer links use "Component Dock" branding (not ColorLib)
- [ ] No ColorLib references in app code
- [ ] Run `npm install` at repo root for lockfile registration
- [ ] TDD: write tests first, then implement, 100% coverage
- [ ] Build passes, typecheck clean
