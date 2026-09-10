# Garnish (ColorLib Caviar) — Tasks & Design Notes

> Recreation of ColorLib "Caviar" under the new name **Garnish**.

## Design notes (replication findings)

- **Original:** ColorLib "Caviar" — Premium Restaurant template
  (source: https://colorlib.com/wp/template/caviar/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/caviar/
  (HTTP 200, full rendered DOM + `style.css` (25KB) extracted).
- **Visual design (from DOM + CSS tokens):** a dark, elegant
  **premium restaurant** landing with a full-viewport hero slider,
  split-column about section with soft-shadow thumbnails, a 3-column
  dish showcase ("Special") with prices, a horizontal awards row,
  testimonial carousel, split reservation form + image, and a dark
  footer. The aesthetic is clean and high-contrast with red accents.
- **Structure (1:1, section order):**
  1. Navbar: "Garnish" brand, links (Home, About Us, Menu, Awards,
     Testimonials, Reservation, Contact), search icon, hamburger.
  2. Hero: full-viewport background image slider, headline, description,
     "Reservation" CTA, social links (Facebook, Instagram, Twitter).
  3. About Us: two sub-sections — first (image left / text right with
     "restaurant style" subtitle), second (text left / image right with
     "our chef" subtitle).
  4. Dish Menu: "Special" heading, 3 dish cards (image + name + price),
     "View The Menu" button.
  5. Awards: heading + row of 5 award images.
  6. Testimonials: carousel with avatar, name, subtitle, quote.
  7. Reservation: split layout — form (date, time, persons, name,
     message + "Reserve Your Desk" submit) + decorative image.
  8. Footer: dark background, brand name, copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **red `#ff0000`** (button hover, accents, reservation CTA).
  - Body font: `'Open Sans', sans-serif`.
  - Button/heading font: `'Work Sans', sans-serif`.
  - Body background: `#fafafa`.
  - Text: `#000` (primary), `rgba(0,0,0,0.8)` (secondary).
  - Buttons: white bg, `1px solid #b2b2b2` border, `border-radius: 0`
    (square), height `54px`, min-width `180px`; hover → red text.
  - Thumbnails: `box-shadow: 3px 5px 45px rgba(0,0,0,0.15)`.
  - Footer: `#333333` bg, white text at 20% opacity, centered.
  - Circular avatar images: `border-radius: 50%`.
  - Reservation form: split layout (50% - 100px) with image on the other side.
- **Recreation name:** Garnish (NEW — the ColorLib source name "Caviar" is
  never reused). App folder `apps/garnish`, package
  `@free-react-templates/garnish`, homepage
  `https://garnish.free.componentdock.com`.
- **Recreation approach:** single-page restaurant landing with hero slider,
  section-by-section fidelity, lucide-react icons for social/nav, red
  primary in `@theme`, repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, cn).

## Tasks

- [ ] Write `openspec/specs/template-garnish/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/garnish` (copy the simplest app; rename package to
      `@free-react-templates/garnish`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh garnish` (typecheck + lint +
      100% coverage tests + build) + `npm run spec:validate`.
- [ ] Push `feat/template-garnish`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
