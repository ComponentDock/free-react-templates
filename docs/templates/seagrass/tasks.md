# Seagrass — Design Notes & Task Outline

Source: ColorLib Bootstrap Footer 18 (`bootstrap-footer-18`)
Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-18/

## Structure order (section-by-section)

### 1. Hero section
- White background, centered heading text
- Padding: 12em vertical (ftco-section)
- Purpose: visual spacer above the footer

### 2. Footer
- Background: #f1f6f5 (light gray-green)
- Full-width, container with fluid padding (px-lg-5)
- Two-panel layout:
  - **Left panel** (col-md-9, py-5):
    - Row 1: 4+8 column split
      - col-4: "About us" heading + description + social icons
      - col-8: 3 link columns in a row (Discover | About | Resources)
    - Row 2 (mt-md-5): Copyright line
  - **Right sidebar** (col-md-3, py-md-5): Teal #12cc94 background
    - "Contact us" heading (white, on md+)
    - Contact form: Name, Email, Subject, Message textarea, Send button

## Fidelity notes

- Font: Poppins (Google Fonts, weights 300-900). Load via `<link>` in index.html.
- Colors: bg #f1f6f5, accent #12cc94 (teal), submit #2f89fc (blue)
- Social icons: lucide-react (Twitter/X, Facebook, Instagram) — 40px circles
- Form inputs: white bg, 5px radius, 50px height, no border/shadow
- Send button: blue #2f89fc, white text, full-width
- Right sidebar: teal background only on md+ screens (transparent on mobile)
- Component Dock footer link replaces original Colorlib attribution
- No copied assets — use picsum.photos for any placeholder images

## Tasks

- [ ] Create app scaffold: `apps/seagrass/` (copy simplest existing footer app)
- [ ] Set up index.css with Tailwind @theme tokens: `--color-accent: #12cc94`, `--color-bg-light: #f1f6f5`, `--color-submit: #2f89fc`
- [ ] Build Hero.tsx: white section with centered heading
- [ ] Build Footer.tsx: two-panel layout (left content + right sidebar)
- [ ] Build AboutSection: heading + description + social icons
- [ ] Build LinkColumns: 3-column grid (Discover, About, Resources)
- [ ] Build ContactSidebar: teal bg, white heading, contact form
- [ ] Build ContactForm: Name, Email, Subject, Message, Send button
- [ ] Use lucide-react icons for social (Twitter/X, Facebook, Instagram)
- [ ] Ensure responsive: sidebar collapses on mobile
- [ ] Add Component Dock footer link
- [ ] Write App.tsx composing Hero + Footer
- [ ] Write tests: 100% coverage (Vitest + Testing Library)
- [ ] Verify no ColorLib references in app code
- [ ] Set up public/CNAME: `seagrass.free.componentdock.com`
- [ ] Set up package.json homepage
- [ ] Run `npm install` at repo root to register workspace
- [ ] Run per-app gate: typecheck + lint + tests + build
