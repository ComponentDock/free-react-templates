# Coolcraft (ColorLib Hvacompany) — Tasks & Design Notes

> Recreation of ColorLib "Hvacompany" under the new name **Coolcraft** (HVAC
> company landing page template).

## Design notes (replication findings)

- **Original:** ColorLib "Hvacompany" — HVAC company landing page template
  (source: https://colorlib.com/wp/template/hvacompany/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/hvacompany/
  (HTTP 200, full rendered DOM + `css/style.css` (69KB) extracted).
- **Visual design (from DOM + CSS tokens):** a standard HVAC landing page
  with a **dark navy `#142336`** and **blue `#4586D5`** brand palette, a
  hero slider with dark overlay, 4 benefit badges with icons, a 6-card
  services grid, an about section with blue background and counter stats,
  blog post cards, a testimonial carousel, and a multi-column dark footer.
  Accent color is **yellow `#FAD110`** for service badges.
- **Structure (1:1, section order):**
  1. Navbar: "Coolcraft" brand + social icons + navigation links.
  2. Hero slider: 2 slides — "Keeping your home comfortable all year long"
     + "Contact us" CTA.
  3. Benefits bar: 4 items — No Upfront Payments, Satisfaction Guarantee,
     Emergency Service, 8 Years Experience.
  4. Services grid: 6 cards — Maintenance & Repair, Heating & Water,
     Cleaning & Optimization, Duct Services, A/C Installation, Cleaning &
     Optimization. Each with icon, title, description, "More info" link.
  5. About section: "Welcome to HVAC Quality Heating & Cooling" + text,
     blue background (`#4586D5`).
  6. Counter stats: 4 circular badge items — 3589 Satisfied Customers,
     868 Professional, 5148 Equipment Sold, 025 Branches Operating.
  7. Blog section: 3 post cards with "Tips & tricks" tag, title, author,
     date.
  8. Testimonial carousel: 3 quotes with placeholder text.
  9. Footer: contact info, newsletter, links, copyright. Links to
     componentdock.com.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#4586D5`**; dark **navy `#142336`**; accent
    **yellow `#FAD110`**.
  - Light gray `#c4c4c4` (service/testimonial bg), `#e1e1e1` (alt bg).
  - Text: `#888888` (body), `#222222`/`#111111` (headings).
  - Buttons: blue `#4586D5` bg + white text, radius 2px; hover darkens.
  - Circular counter badges: radius 60px/50px, white bg, soft shadow.
  - Font: **"Saira Condensed"** (headings), **"Mulish"** (body).
  - Hero: full-width, dark overlay, white text, CTA button.
- **Recreation name:** Coolcraft (NEW — the ColorLib source name
  "Hvacompany" is never reused). App folder `apps/coolcraft`, package
  `@free-react-templates/coolcraft`, homepage
  `https://coolcraft.free.componentdock.com`.
- **Recreation approach:** full-page HVAC landing with hero slider (single
  hero for simplicity), benefit badges, service cards, about/counter
  section, blog grid, testimonials, and footer; placeholder images via
  picsum.photos; lucide-react icons for benefits/services; blue primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn).

## Tasks

- [ ] Write `openspec/specs/template-coolcraft/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/coolcraft` (copy the simplest app; rename package to
      `@free-react-templates/coolcraft`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh coolcraft` (typecheck + lint +
      100% coverage tests + build) + `npm run spec:validate`.
- [ ] Push `feat/template-coolcraft`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
