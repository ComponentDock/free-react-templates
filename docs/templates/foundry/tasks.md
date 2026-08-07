# Foundry (ColorLib Architect) — Tasks & Design Notes

> Recreation of ColorLib "Architect" under the new name **Foundry**.
> Implementation ships on `feat/template-foundry`.

## Design notes (replication findings)

- **Original:** ColorLib "Architect" — construction services template
  (source: https://colorlib.com/wp/template/architect/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/architect/
  (HTTP 200, full rendered DOM + `css/style.css` (32KB) extracted).
- **Visual design (from DOM + CSS tokens):** construction/architecture
  landing with a **yellow** brand (`#FFCD00`), Montserrat font, a
  "Providing all Kinds of Construction Services" hero slider, a welcome
  section with "25 Years Experience", and a projects grid.
- **Structure (1:1, section order):**
  1. Navbar: logo "Foundry" + Home, Projects (dropdown: Commercial,
     Apartment, House, Building), Services, Blog, About, Contact.
  2. Hero slider: "Providing all Kinds of Construction Services" + rotating
     taglines — **Constructing Spaces For You / Building Your Solid /
     High Class Building** (3 slides, dark photo bg, 3 yellow dots).
  3. Welcome: "Welcome! Secrets of Success of Our Projects" + **25 Years
     Experience** yellow box + blurb.
  4. Works: "Our Done Projects" + **California Mega Mall, Commercial
     Building, Miami Private Apartment** + **View All Projects**.
  5. Counters band: **Projects / Employees / Constructor / Partners**
     (photo background).
  6. Services: "We Offer Services" + **General Constructing, Building
     Modeling, Design Build, Construction Services, Pre-Construction
     Design, Construction Management**.
  7. Blog: "Read Our Blog" + 3 posts + **View All Blog Post**.
  8. Engineers: "Our Engineers" + **John Miller, Brian Smith**.
  9. Testimonials: "What Our Client Says" + 3 client quotes.
  10. Newsletter: "Sign up for a Newsletter" + email input + Subscribe.
  11. Footer: About Company, Recent Blog, Information, Contact Info
      columns + social icons + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#FFCD00`** (buttons, accents).
  - Dark `#333333`, `#252525`; light `#fafafa`.
  - Font: **"Montserrat"** (Google Fonts `<link>`).
  - Buttons: uppercase, letter-spacing, sharp corners, yellow bg + dark text.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/foundry-<n>/<w>/<h>`); lucide-react icons;
  Montserrat via Google Fonts; yellow primary in `@theme`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks outline

- [ ] Scaffold `apps/foundry` (copy `apps/keystone`, rename package).
- [ ] `src/index.css` — Foundry tokens (yellow `#FFCD00` primary scale,
      Montserrat fonts, ink/paper/coal colors).
- [ ] `Navbar` — logo "Foundry", section links, dark-mode toggle + mobile menu.
- [ ] `Hero` — full-width slider, 3 slides with taglines, CTA.
- [ ] `Welcome` — heading + 25 Years Experience yellow box + blurb.
- [ ] `Work` — "Our Done Projects" + 3 project cards + View All Projects.
- [ ] `Counters` — Projects / Employees / Constructor / Partners band.
- [ ] `Services` — 6 services (lucide icons).
- [ ] `Blog` — 3 post cards + View All Blog Post.
- [ ] `Engineers` — team cards (John Miller, Brian Smith).
- [ ] `Testimonials` — 3 client quotes.
- [ ] `Newsletter` — email input + Subscribe button (zod validation).
- [ ] `Footer` — columns + social + copyright.
- [ ] `App` composition + document title.
- [ ] Tests for every component (100% coverage), spec:validate,
      `bash scripts/verify-app.sh foundry`.
- [ ] PR + immediate squash merge; bookkeeping (TEMPLATES.md both copies,
      homepage, `npm run readme:status`).
