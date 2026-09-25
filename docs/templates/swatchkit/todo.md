# Swatchkit — Implementation Todo & Design Notes

## Source

- **ColorLib slug:** equip-ui-kit
- **Preview URL:** https://preview.colorlib.com/theme/equip-ui-kit/ (UNREACHABLE — 404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/equip-free-template.jpg
- **Category:** UI Kit / Component Showcase (single-page)

## Design Notes

### Overall Layout

The template is a UI Kit landing page — a single-page showcase of UI
components. It has a dark transparent navbar, a full-viewport hero with a
dark cityscape background, and a "Basic Elements" section demonstrating
button styles/sizes/colors. The full template likely includes additional
component sections (typography, forms, cards, etc.) below the fold.

### Section Order (1:1 fidelity)

1. **Navbar** (dark transparent, fixed top) — logo, Components dropdown, Download button
2. **Hero** (full-viewport, dark cityscape bg) — heading, subtitle, 2 CTA buttons
3. **Basic Elements > Buttons** — style variants, size variants, color variants
4. **[Additional sections below fold — not visible in screenshot]**
   Likely includes: Typography, Forms, Cards, Tables, Icons, etc.
5. **Footer** — Component Dock attribution

### Key Visual Characteristics

- **Dark moody hero** — cityscape background (Shanghai skyline at dusk)
  with purple/blue tones and dark overlay
- **Pink/magenta primary accent (#e91e63 approx)** — used on primary
  buttons, navbar download button, hero CTA, active states
- **Clean sans-serif typography** — geometric, modern feel
- **Button showcase** — the core content; organized into style/size/color
  groups with both filled and outlined variants
- **Dark-to-light transition** — hero and initial area dark, content
  sections lighter

### Component Structure

```
src/
  App.tsx                    — Composes all sections
  components/
    Navbar.tsx               — Dark transparent navbar with logo + dropdown + CTA
    Hero.tsx                 — Full-viewport hero with bg image + heading + CTAs
    BasicElements.tsx        — Button showcase section (styles, sizes, colors)
    ButtonShowcase.tsx       — Reusable button variant display component
    [Additional sections]    — Typography, Forms, Cards, etc. (if in full template)
    Footer.tsx               — Component Dock attribution
  index.css                  — Tailwind entry + theme tokens
```

### Placeholder Images

- Hero background: `https://picsum.photos/seed/swatchkit-hero/1920/1080`
  (dark cityscape-like image)

### Fonts

Use a clean geometric sans-serif — the original likely uses Poppins or
similar. Check the source CSS if preview becomes available. For now,
use Poppins (common in Bootstrap 4 UI kits):

```html
<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
```

### Tailwind Theme Tokens (index.css @theme)

```css
@theme {
  --color-brand: #e91e63;
  --color-brand-dark: #c2185b;
  --color-success: #4caf50;
  --color-danger: #f44336;
  --color-warning: #ff9800;
  --color-info: #00bcd4;
  --color-light: #f5f5f5;
  --color-dark: #212121;
  --font-heading: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
}
```

### Button Variant Taxonomy

The showcase demonstrates these button variations:

**By Style:**
| Style | Appearance |
|-------|-----------|
| Default | Filled, slightly rounded corners (4-6px radius) |
| Round | Filled, fully pill-shaped (large radius) |
| With Icon | Filled pill with icon + text |
| Icon-only | Circular (50% radius), icon only |
| Simple | Outlined (border only), text color matches border |

**By Size:**
| Size | Filled | Outlined |
|------|--------|----------|
| Small | Pink fill, small text/padding | Pink border, small text/padding |
| Regular | Pink fill, normal text/padding | Pink border, normal text/padding |
| Large | Pink fill, large text/padding | Pink border, large text/padding |

**By Color:**
| Color | Filled | Outlined |
|-------|--------|----------|
| Primary | Pink (#e91e63) fill | Pink border |
| Success | Green (#4caf50) fill | Green border |
| Danger | Red (#f44336) fill | Red border |
| Warning | Yellow/Orange (#ff9800) fill | Yellow border |
| Info | Teal (#00bcd4) fill | Teal border |
| Light | White/Gray (#f5f5f5) fill | Gray border |
| Dark | Black (#212121) fill | Dark border |

## Implementation Tasks

- [ ] Copy starter app scaffold (e.g. from simplest existing app)
- [ ] Rename package to @free-react-templates/swatchkit
- [ ] Set up index.html with Google Fonts link (Poppins)
- [ ] Configure Tailwind theme tokens in index.css (brand colors, font)
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Build Navbar component (dark transparent, logo, Components dropdown, Download CTA)
- [ ] Build Hero component (full-viewport bg image, dark overlay, heading, subtitle, 2 CTA buttons)
- [ ] Build BasicElements section (Buttons showcase with style/size/color groups)
- [ ] Build ButtonShowcase sub-component (reusable variant display)
- [ ] Build Footer component (Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Verify 100% coverage with npm run test:coverage
- [ ] Run npm run verify:app -- swatchkit
- [ ] Update TEMPLATES.md status
- [ ] NOTE: Preview URL is 404. If it becomes available, re-verify tokens
      and add any missing sections to the spec.
