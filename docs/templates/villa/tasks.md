# Villa (Colorlib Layal) — Tasks & Design Notes

> Prep artifacts renamed from the ColorLib source name "Layal" to the NEW
> template name "Villa" (per the new-original-name mandate) on
> `feat/template-villa`. Implementation ships on that branch.

## Design notes (replication findings)

- **Original:** ColorLib "Layal" — interior design / architecture template
  (source: https://colorlib.com/wp/template/layal/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/layal/
  (HTTP 200, full rendered DOM + `css/main.css` extracted).
- **Visual design (from DOM + CSS tokens):** interior-design landing with a
  **sky blue** (`#77d5f7`) + **indigo** (`#3c50ca`) palette, Poppins font,
  numbered feature steps on a black band, a services grid, and a latest
  projects gallery on a dark photo band.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Contact.
  2. Features: numbered steps ("01", "02", "03" + Becoming A Dvd Repair
     Expert Online) on a **black band**.
  3. Services: "Our Offred Services" + "Reasons To Choose Notebook" cards.
  4. Projects: "Our latest Projects" gallery on a dark photo band
     (rgba(0,0,0,0.8) overlay, white headings).
  5. Newsletter: "Subscribe Us" email band ("We won't send any kind of
     spam").
  6. Footer: columns (Top Products / Company / Support / Projects) +
     Quick Contact + social + copyright.
- **Design tokens extracted from `css/main.css`:**
  - Primary **sky blue `#77d5f7`** (accents) + **indigo `#3c50ca`**
    (buttons/gradient partner).
  - Button hover: indigo→sky gradient (`linear-gradient(0deg, #3c50ca,
#77d5f7)`); pill radius `20px`, uppercase white label.
  - Feature band: black background, white headings, grey body text.
  - Light backgrounds `#f9f9ff`; body text `#777777`; headings `#222222`.
  - Font: **"Poppins"** (Google Fonts `<link>`).
- **Recreation name:** Villa (NEW name — the ColorLib source name "Layal"
  is never reused). App folder `apps/villa`, package
  `@free-react-templates/villa`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/villa-<n>/<w>/<h>`); lucide-react icons; Poppins via
  Google Fonts; forms prevent default (no backend); sky-blue primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Rename prep to the new name: `openspec/specs/template-villa/spec.md` + `docs/templates/villa/` (was template-layal / layal).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/villa` (copy the section-rich landing app pattern —
      Aurora/Gable; rename package to `@free-react-templates/villa`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: typecheck → lint → vitest (100%) → build via
      `scripts/verify-app.sh villa`; `npm run spec:validate`.
- [ ] Push `feat/template-villa`, open PR (source template, preview URL,
      design tokens, what differs — new name Villa).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
