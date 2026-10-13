# Creativex (Colorlib Creativex 3) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-creativex`.

## Design notes (replication findings)

- **Original:** ColorLib "Creativex 3" — creative agency template
  (source: https://colorlib.com/wp/template/creativex-3/).
- **Demo DOM analyzed:** https://creativex-colorlib.pages.dev/
  (HTTP 200 at prep time; `https://preview.colorlib.com/theme/creativex-3/` returned 404 at prep time —
  demo was hosted on Cloudflare Pages per the ColorLib preview portal).

✅ **Pointer status — live reference re-probed 2026-10-13d (bot wall
lifted):** the demo is served by the ColorLib preview host —
`https://preview.colorlib.com/theme/creativex/` answers **HTTP 200**, 67,351
B `text/html; charset=utf-8` (58,342 B, sha256 `fda6e3ec7a53…` after
stripping the injected print-media `@font-face` block and the Insights
beacon); its stylesheet
`https://preview.colorlib.com/theme/creativex/_astro/Base.D2FQB9Bi.css` is
40,578 B sha256 `6c3bf736cb46…` (Inter). The Cloudflare Pages mirror
`https://creativex-colorlib.pages.dev` is still **NXDOMAIN** (re-checked
2026-10-13d). The app for this template has not shipped yet, so this live
path is the authoritative reference to build against.
- **Visual design (from DOM + Tailwind classes):** creative agency landing
  with **yellow** accents (`yellow-400`), Inter font, "We Create Bold
  Digital Experiences" hero, a "What We Do" services grid (Web Design,
  Mobile Apps, Brand Identity, Digital Marketing), and a "Selected Work"
  portfolio (Nova Fintech Rebrand).
- **Structure (1:1, section order):**
  1. Navbar: Work, Services, About, Contact, Start a Project.
  2. Hero: "We Create Bold Digital Experiences".
  3. Services: "What We Do" grid.
  4. Selected Work: "Selected Work" + Nova Fintech Rebrand cards.
  5. About: blurb.
  6. Contact: form.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Light surfaces, **yellow `yellow-400`** accents.
  - Font: **"Inter"** (Google Fonts `<link>`).
- **Recreation name:** Creativex (kept — matches ColorLib name). App
  folder `apps/creativex`, package `@free-react-templates/creativex`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/creativex-<n>/<w>/<h>`); lucide-react icons; Inter
  via Google Fonts; yellow accent in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-creativex/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/creativex` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/creativex`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-creativex`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
