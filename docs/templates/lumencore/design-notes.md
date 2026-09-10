# Lumencore — Design Notes + Task Outline

Source: ColorLib CellOn (`https://colorlib.com/wp/template/cellon/`)
Preview: `https://preview.colorlib.com/theme/cellon/`
New name: `lumencore`

## Section Order (top to bottom)

1. **Navbar** — Absolute position, logo left, nav links right (Home, Generic, Elements)
2. **Banner** — Split layout: illustration left (col-6), text right (col-6) with headline + CTA
3. **Video** — Full-width section with green overlay, play button, heading text
4. **About** — Split layout: text left (col-6), illustration right (col-6)
5. **Features** — Green overlay bg, 7 feature cards (icon + title + description) in 3-col grid
6. **Stats + FAQ** — Two columns: left = 4 stat counters, right = 3 FAQ items
7. **Contact** — Green overlay bg, heading + form (name, email, message, send button)
8. **Footer** — White bg, 4-column link grid, bottom bar with copyright + social icons

## Component Mapping

| Original Section | React Component | Notes |
|-----------------|----------------|-------|
| `<header class="default-header">` | `Navbar.tsx` | Absolute overlay nav, hamburger on mobile |
| `<section class="banner-area">` | `Hero.tsx` | Split: image + text, pill CTA button |
| `<section class="video-area">` | `VideoShowcase.tsx` | Green overlay, play button, heading |
| `<section class="about-area">` | `About.tsx` | Split: text + image, bordered CTA |
| `<section class="feature-area">` | `Features.tsx` | 7 feature cards, green overlay bg |
| `<section class="faq-area">` | `StatsFaq.tsx` | 4 counters left, 3 FAQ items right |
| `<section class="contact-area">` | `Contact.tsx` | Green overlay, form with styled inputs |
| `<footer class="section-gap">` | `Footer.tsx` | 4-column links + copyright bar |

## Fidelity Notes

### Color tokens to set in `index.css` `@theme`
- `--color-brand`: `#6cbb23` (green — primary CTAs, accents)
- `--color-surface`: `#fff` (card backgrounds)
- `--color-page`: `#f6f6fc` (page background)
- `--color-heading`: `#222`
- `--color-body`: `#777`
- `--color-icon-bg`: `#f0f8e9` (feature icon background)
- `--color-input-border`: `#a6d477`
- `--color-overlay`: `rgba(108,187,35,0.85)`

### Font
- Import Poppins (weights 100, 300, 400, 500, 600) from Google Fonts
- Body weight: 300, Headings: 500, H1: 100 (ultra-light hero)

### Buttons
- Primary CTA: pill shape (`rounded-full`), bg brand-green, white text
- Border variant: pill, green border + text on white bg
- Hover swaps fill/outline
- Arrow icon (lucide `ArrowRight`) inline after label

### Layout
- Body wrapper has `box-shadow: 0 0 50px rgba(0,0,0,0.2)` and `margin: 50px` (desktop)
- Section padding: `100px 0`
- Feature cards: `bg-white p-8`
- Feature icon: light green bg, 100px, centered, brand-green icon

### Contact Form
- Transparent inputs with light-green border
- White placeholder text
- Textarea 150px height
- Green overlay background image behind the section

### Footer
- 4 equal columns: Top Product, Navigation, Compare, Quick About
- Social icons: Facebook, Twitter, Dribbble, Behance → use lucide-react
- Bottom bar: copyright text + heart icon
- Include "Component Dock" link per conventions

## Implementation Tasks

- [ ] Scaffold `apps/lumencore` from simplest existing app template
- [ ] Set up `index.css` with `@theme` tokens (Poppins import, brand color)
- [ ] Implement `Navbar.tsx` — absolute overlay, logo + nav links
- [ ] Implement `Hero.tsx` — split layout, headline with brand accent, pill CTA
- [ ] Implement `VideoShowcase.tsx` — green overlay bg, play button, heading
- [ ] Implement `About.tsx` — split layout, text + illustration
- [ ] Implement `Features.tsx` — 7 feature cards on green overlay
- [ ] Implement `StatsFaq.tsx` — 4 counters + 3 FAQ items
- [ ] Implement `Contact.tsx` — green overlay, form with styled inputs
- [ ] Implement `Footer.tsx` — 4-column links + copyright + Component Dock link
- [ ] Compose in `App.tsx` following section order
- [ ] Write tests (Vitest + Testing Library, 100% coverage)
- [ ] Add `public/CNAME` → `lumencore.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Run `npm install` at root, verify lockfile
- [ ] Run `scripts/verify-app.sh lumencore`
