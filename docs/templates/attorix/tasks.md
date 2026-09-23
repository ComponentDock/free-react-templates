# Attorix (ColorLib Atorni) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the source name (template-atorni);
> renamed to the NEW name **Attorix** in the implementation PR.

## Design notes (replication findings)

- **Original:** ColorLib "Atorni" — law firm agency template
  (source: https://colorlib.com/wp/template/atorni/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/atorni/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** law firm landing with a
  **gold** brand (`#c18e3c`) on dark backgrounds (`#191919`, `#262626`),
  Bootstrap blue primary buttons (`#0d6efd`), square/boxy aesthetic
  (no border-radius), and Cormorant Garamond + Poppins fonts.
- **Structure (1:1, section order):**
  1. Top bar: phone number + location on dark `#191919` with gold icons.
  2. Navbar: logo "Attorix" + 7 nav links + search toggle, `#262626` bg.
  3. Hero slider: 3 full-height parallax slides with headlines + "Make An
     Appointment" CTA (blue button, px-5 py-3).
  4. Stats counter: 4 items (1500 Lawyers, 2100 Cases, 2700 Clients,
     1010 Awards) — dark cards on `#262626` bg, gold labels.
  5. About: "80 Years Of Experience In Legal Solution" + video play image.
  6. Practice Areas: 4 cards (Bank & Financial, Personal Injury, Family
     Law, Criminal Law) — image + icon + title + blurb.
  7. Appointment: parallax bg, split — left "Our Performance" + 3 services,
     right "Free Case Evaluation" form (5 fields).
  8. Case Studies: 4 cards with image + title + hover effects.
  9. CTA banner: "Are You Facing Criminal Charges?" + black button.
  10. Testimonials: carousel with quote icon + avatar + name + position.
  11. Blog: 3 cards with date overlay + title + excerpt.
  12. Newsletter CTA: "Subscribe for updates" + email input.
  13. Footer: 4 columns (About, Practice Areas, Quick Links, Contact) +
      social icons + copyright on black `#000000` bg.
- **Design tokens extracted from `css/style.css`:**
  - Primary gold: `#c18e3c` (subheadings, icons, accents, footer hover).
  - Dark backgrounds: `#191919` (top bar, footer, counter cards),
    `#262626` (navbar, bg-darken sections).
  - Primary button: `#0d6efd` (Bootstrap blue, hero CTA, form submit).
  - Black button: `#000000` with white text (CTA banner).
  - Fonts: **"Cormorant Garamond"** (serif headings, Google Fonts) +
    **"Poppins"** (sans-serif body, Google Fonts).
  - Square aesthetic: no border-radius on buttons or cards.
  - Light bg: `#f9f9f9` (`.bg-light` sections).
- **Recreation name:** Attorix (NEW — the ColorLib source is "Atorni").
  App folder `apps/attorix`, package `@free-react-templates/attorix`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/atorni-<n>/<w>/<h>`); lucide-react icons;
  Cormorant Garamond + Poppins via Google Fonts; forms prevent default
  (no backend); gold primary in `@theme`; repo-standard Footer chrome
  linking Component Dock.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [ ] Write `openspec/specs/template-attorix/spec.md` (Gherkin requirements
      + scenarios reflecting the REAL sections above). DONE (prepped).
- [ ] Create `apps/attorix` (copy the simplest existing app, rename package
      to `@free-react-templates/attorix`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement each section top-to-bottom, matching design tokens.
- [ ] Run `scripts/verify-app.sh attorix` — all green.
- [ ] `npm install` at repo root (lockfile registration).
- [ ] Commit + push + PR merge + surge deploy.
