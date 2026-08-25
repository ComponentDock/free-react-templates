# Startline (Colorlib Startright) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the source name (template-startright);
> renamed to the NEW name **Startline** in the implementation PR.

## Design notes (replication findings)

- **Original:** ColorLib "Startright" — business/SaaS startup template
  (source: https://colorlib.com/wp/template/startright/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/startright/
  (HTTP 200, full rendered DOM + `css/style.css` (62KB) extracted).
- **Visual design (from DOM + CSS tokens):** business/SaaS landing with a
  **golden-orange** brand (`#f2ad5f`) on **dark teal** (`#10495c`) hero and
  accent sections, light gray (`#f8f9fa`) alternating backgrounds, Poppins
  font, and outline-style CTA buttons.
- **Structure (1:1, section order):**
  1. Navbar: logo "Startline." + Home, Solutions (dropdown), Plans & Pricing,
     Why Us, Contact Us + dark-mode toggle.
  2. Hero: "A big business starts small" + **Get started** CTA + illustration
     (dark teal bg, white heading).
  3. Logo strip: "As seen on" + 5 press logo placeholders (light bg).
  4. Split section: illustration left (golden-orange bg) + "A better way to
     run your business" checklist right (dark teal overlay).
  5. Productivity section: "Productive with Startline" + description +
     horizontal testimonial with avatar (light bg, two-column).
  6. Stats counter: "Stats" — Reviews / Downloads / Employees (dark teal bg,
     white text, large numbers).
  7. Features grid: "Features" heading + 6 cards (3×2 grid): Easy to use,
     Fast and Secure, Robust and Intuitive (each repeated).
  8. Footer: Help / About / Support link columns + Subscribe email form +
     copyright + Component Dock link.
- **Design tokens extracted from `css/style.css`:**
  - Primary **golden-orange `#f2ad5f`** (buttons, logo, check marks, hero
    illustration bg).
  - Secondary **dark teal `#10495c`** (hero, stats section, split overlay,
    secondary buttons).
  - Light backgrounds: `#f8f9fa` (alternating sections).
  - Font: **"Poppins"** (Google Fonts, weights 400 + 700).
  - Button border-radius: `0.25rem` (4px).
  - Hero heading: 60px / 700 / white. Section heading: 40px / 700.
  - Feature cards: `border: 2px solid rgba(0,0,0,0.05); border-radius: 4px`.
- **Recreation name:** Startline (NEW — the ColorLib source is "Startright").
  App folder `apps/startline`, package `@free-react-templates/startline`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/startline-<n>/<w>/<h>`); lucide-react icons; Poppins
  via Google Fonts; forms prevent default (no backend); golden-orange primary
  (`#f2ad5f`) + dark teal secondary (`#10495c`) in `@theme`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome with Component Dock link.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-startline/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/startline` (copy the simplest existing app pattern;
      rename package to `@free-react-templates/startline`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh startline` +
      `npm run spec:validate`.
- [ ] Push `feat/template-startline`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
