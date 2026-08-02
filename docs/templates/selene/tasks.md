# Selene (Colorlib Selene) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-selene`.

## Design notes (replication findings)

- **Original:** ColorLib "Selene" — app landing page template
  (source: https://colorlib.com/wp/template/selene/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/selene/
  (HTTP 200, full rendered DOM + `style.css` (39KB) extracted).
- **Visual design (from DOM + CSS tokens):** app landing with a **pink**
  brand (`#ff4c8b`) + **lime** accent (`#ccfa87`), Century Gothic/Futura
  LT (system) fonts, a "SELENE — THE APP" hero with store buttons, feature
  splits, and a stats band.
- **Structure (1:1, section order):**
  1. Navbar: logo "Selene" + Home, About Us, Services, Blog, Contact.
  2. Hero: "SELENE — THE APP" + blurb + **available on Google Store /
     available on Apple Store** + Scroll Down.
  3. Feature split: "Mobile ready" + blurb.
  4. App split: "An app for Each & Everyone" + blurb.
  5. Feature rows: "Curabitur pulvinar vel augue sit amet vestibulum" /
     "Lorem ipsum dolor sit amet, consectetur adipiscing" / "Donec
     scelerisque ante id efficitur pharetra" (icon + blurb).
  6. Stats: **10 Years of Experience, 500 Happy Clients, 17k Followers on
     FB, 132 Finished Projects, 03 Coffes a day**.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#ff4c8b`**; light pink `#fa91b9`; **lime `#ccfa87`**
    accent.
  - Dark text `#292d4f`.
  - Fonts: "Century Gothic"/"Futura LT" — recreate with a modern sans
    (e.g. Poppins) via Google Fonts `<link>`.
  - Pink rounded buttons with white text.
- **Recreation name:** Selene (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/selene`, package
  `@free-react-templates/selene`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/selene-<n>/<w>/<h>`); lucide-react icons; Poppins
  via Google Fonts; pink primary + lime accent in `@theme`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-selene/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/selene` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/selene`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-selene`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
