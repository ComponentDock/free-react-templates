# Gable (ColorLib Kd) — Tasks & Design Notes

> Recreation of ColorLib "Kd" (https://colorlib.com/wp/template/kd/). Built
> as **Gable** (new original name — the prep stream had kept the ColorLib
> name "Kd", which violates the mandatory new-name rule; renamed by the
> implementer). Branch: `feat/template-gable`.

## Design notes (replication findings)

- **Original:** ColorLib "Kd" — architecture template.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/kd/
  (HTTP 200, full rendered DOM + `css/style.css` extracted; screenshot viewed).
- **Visual design:** architecture landing with a **gold** accent (`#ccb78f`)
  on dark (`#000000`, `#212529`) sections; "Architects with need a different
  design" intro; "About KD Architecture" video-hero; stat counters
  (18 Years of Experienced, 351 Happy Clients, 564 Finished Projects,
  300 Working Days); three feature cards (Perfectly Design — idea,
  Carefully Planned — compass, Smartly Execute — layers); six-card project
  gallery (Home Interior Design, Office Interior Design, Apartment Design,
  Dining Table); dark footer (Instagram / Links / Archives / Have a
  Questions? columns).
- **Structure (1:1, section order):**
  1. Navbar: logo "Gable" + Home / Project / About / Services / Blog /
     Contact (original uses a left aside; repo convention is a top sticky
     navbar with dark-mode toggle).
  2. Hero: "Architects with need a different design" + supporting paragraph.
  3. About: "About Gable Architecture" + counters + Perfectly Design,
     Carefully Planned, Smartly Execute cards.
  4. Projects: six image cards + **View All Projects** button.
  5. Footer: dark, columns + socials + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **gold `#ccb78f`** (accents); dark `#000000`, `#212529`;
    light `#f8f9fa`; muted `#6c757d`.
  - Fonts: **"Work Sans"** (display) + **"Poppins"** (body) — Google Fonts
    `<link>`.
- **Recreation name:** Gable. App folder `apps/gable`, package
  `@free-react-templates/gable`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/gable-<n>/<w>/<h>`); lucide-react icons (Lightbulb,
  Compass, Layers); gold accent in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome; forms prevent default (no backend).
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Replication research: preview DOM (`kd`) + `css/style.css` tokens +
      screenshot (this run; spec updated with counters + real copy).
- [x] Rename prep artifacts `openspec/specs/template-kd` →
      `template-gable`, `docs/templates/kd` → `gable`; rewrite content with
      the new name + real sections/tokens.
- [x] Claim: `chore: claim Kd (Gable) [~]` on `feat/template-gable`, pushed.
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/gable` (copy mint; rename package to
      `@free-react-templates/gable`; Work Sans + Poppins; gold `#ccb78f`
      primary).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh gable` + spec:validate.
- [ ] Push `feat/template-gable`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main).
