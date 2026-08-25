# Advocate — Design Notes & Fidelity Reference

## Source Template

- **ColorLib slug**: `solicitor`
- **Preview URL**: https://preview.colorlib.com/theme/solicitor/
- **Source page**: https://colorlib.com/wp/template/solicitor/

## Design Tokens (from live preview CSS)

| Token                   | Value                       | Notes                                |
| ----------------------- | --------------------------- | ------------------------------------ |
| Primary Blue            | `#037ef3`                   | Buttons, accents, focus rings        |
| Primary Blue Hover      | `#2991f5`                   | `.btn-primary:hover`                 |
| Primary Blue Active     | `#3598f5`                   | `.btn-primary:active`                |
| Deep Charcoal           | `#0f0f11`                   | Hero overlay bg, section backgrounds |
| Surface Dark            | `#1b1c1e`                   | Card backgrounds, navbar bg          |
| Dark Grey               | `#2991f5`                   | Additional accent                    |
| Text Primary            | `#fff`                      | Main headings/body on dark           |
| Text Muted              | `rgba(255,255,255,0.5)`     | `.text-white-50`, secondary copy     |
| Font: Headings          | `"Playfair Display", serif` | Serif, elegant, large (45px desktop) |
| Font: Body/UI           | `"Roboto", sans-serif`      | Sans-serif, clean                    |
| Hero Overlay            | `rgba(0,0,0,0.4)`           | Dark overlay on hero image           |
| Border Radius (buttons) | `0.375rem` (6px)            | Bootstrap default rounded            |

## Section Order & Structure

1. **Navbar** — Fixed top, transparent → dark on scroll; logo "Solicitor" (→ "Advocate"), nav links, phone CTA
2. **Hero** — Fullscreen (100vh, min 780px), background image + dark overlay, headline + subtext, dual CTAs (solid + outline)
3. **About** (`sec-about-me`) — Dark bg, two-column: left = text ("I'm Jon Campbell"), right = image with accent bar (bg-1::after #0f0f11)
4. **Services Grid** (`bg-custom-light` → `rgba(255,255,255,0.02)`) — 6 cards (Councel, Legal Dept, Compliance, Identity, Hall of Justice, Law Abiding)
5. **Why Us** (`sec-why-us`) — Dark bg, two-col: left text + image, right 3 feature tabs (Investigative, Security, Criminal Defense)
6. **Services Tabs** (`sec-3`) — Vertical pill tabs on left, content on right; same 3 categories
7. **Practice Areas** (`sec-4`) — Numbered cards grid (01 Asset Searches, 02 Background Investigations, 03 Business Due Diligence, etc.) linking to single pages
8. **Testimonials** (`sec-testimonial`) — Vertical avatar tabs + quote panels
9. **Resources** (`sec-list`) — Icon-bullet list of links
10. **Footer** — Dark bg, "Made with Component Dock" link to https://www.componentdock.com/

## Fidelity Notes (from screenshot + DOM)

- Hero: grayscale professional photo, headline in Playfair Display serif 45px/30px responsive, dual CTAs (solid primary blue + white outline)
- About: "I'm Jon Campbell" heading, two paragraphs, blue CTA; right side has portrait with decorative dark accent bar behind it
- Services Grid: 6 cards, 3 cols lg, 2 cols md/sm; each has h4 title + paragraph
- Why Us: Two-column, left has "Security Consultants" + "Justice serves" + copy, right has tabbed features with icons
- Practice Areas: Numbered cards (01, 02, 03...) with h3 title + right-arrow icon, full card link
- Testimonials: Vertical tab nav with avatar + name/title, quote content on right
- Resources: List with icomoon icon bullets (`\e5ca`), muted text links
- Overall: Dark theme throughout, consistent spacing rhythm, AOS scroll animations (not required in React)

## Placeholder Image Strategy (picsum.photos deterministic seeds)

| Image                              | Seed                     | Dimensions |
| ---------------------------------- | ------------------------ | ---------- |
| Hero background                    | `advocate-hero`          | 1920x1080  |
| About portrait                     | `advocate-about`         | 600x800    |
| Why Us image                       | `advocate-why`           | 600x800    |
| Testimonial avatar 1               | `advocate-testimonial-1` | 100x100    |
| Testimonial avatar 2               | `advocate-testimonial-2` | 100x100    |
| Testimonial avatar 3               | `advocate-testimonial-3` | 100x100    |
| Practice area cards (bg if needed) | `advocate-practice-{n}`  | 400x300    |

## Fonts (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
  rel="stylesheet"
/>
```

## Icons

- Use `lucide-react` for: `Phone`, `ChevronRight`, `ArrowRight`, `Quote`, `User`, `Check`, etc.
- No icomoon/flaticon fonts — replace with Lucide equivalents.

---

## Implementation Task Outline

### 1. App Scaffold

- [ ] Create `apps/advocate/` with Vite + React + TS + Tailwind 4 workspace
- [ ] Configure `vite.config.ts` with `injectUiSource()` and proper paths
- [ ] Set `package.json` name to `@free-react-templates/advocate`
- [ ] Add `public/CNAME` → `advocate.free.componentdock.com`
- [ ] Add Google Fonts link in `index.html`

### 2. Shared UI Components (extend `packages/ui` if needed)

- [ ] `Button` variants: primary (solid blue), outline (white border)
- [ ] `Card` compound component for practice areas/testimonials
- [ ] `Section` wrapper with consistent spacing

### 3. Section Components (in order)

- [ ] `Navbar.tsx` — responsive, dark-on-scroll, logo + links + phone CTA
- [ ] `Hero.tsx` — fullscreen, overlay, headline, dual CTAs
- [ ] `About.tsx` — two-col, text + image with accent bar
- [ ] `ServicesGrid.tsx` — 6 service cards, responsive grid
- [ ] `WhyUs.tsx` — two-col with tabbed feature list
- [ ] `ServicesTabs.tsx` — vertical pills + content panels
- [ ] `PracticeAreas.tsx` — numbered cards with hover arrow
- [ ] `Testimonials.tsx` — vertical avatar tabs + quotes
- [ ] `Resources.tsx` — icon-bullet link list
- [ ] `Footer.tsx` — Component Dock attribution

### 4. App Assembly

- [ ] `App.tsx` — compose all sections in order
- [ ] `main.tsx` — entry point
- [ ] `index.css` — Tailwind + `@theme` tokens (colors, fonts)

### 5. Tests & Verification

- [ ] Unit tests for each section component (rendering, props, interactions)
- [ ] 100% coverage (lines/functions/branches/statements)
- [ ] Typecheck, lint, build pass
- [ ] Deploy verification on `advocate.free.componentdock.com`

---

## ColorLib Attribution (PR/Spec only — NOT in app code)

This template recreates ColorLib "Solicitor" (https://colorlib.com/wp/template/solicitor/).
Provenance recorded in spec and PR description only. App code uses design-token comments only.
