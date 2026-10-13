# Creativex (Colorlib Creativex 3) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-creativex`.

## Design notes (replication findings)

- **Original:** ColorLib "Creativex 3" — creative agency template
  (source: https://colorlib.com/wp/template/creativex-3/).
- **Demo DOM analyzed:** https://creativex-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/creativex-3/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).

⚠️ **Pointer status (re-verified 2026-10-13c):** the Cloudflare Pages mirror
`https://creativex-colorlib.pages.dev/` **no longer resolves** — DNS
**NXDOMAIN** (`EAI_NONAME`), re-checked 2026-10-13c; all 48
`<slug>-colorlib.pages.dev` hosts this family of preps cites are gone. The
DOM/CSS evidence below was measured from that mirror at prep time and stays
the fidelity reference. The demo family now answers from the ColorLib preview
host `https://preview.colorlib.com/theme/creativex-3/` (this prep recorded a
**404** on that path at prep time — the move onto the preview host happened
after it, so treat the path as unverified). The host answered the provider's
bot wall (**403**, 17 B `text/plain`, Cloudflare error 1106) while this note
was written, so its own reading could not be re-taken this run — re-probe it
before relying on it. The app for this template has not shipped yet, so the
migration can still be taken into account when it is built.
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
