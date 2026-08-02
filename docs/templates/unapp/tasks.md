# Unapp (Colorlib Unapp) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-unapp`.

## Design notes (replication findings)

- **Original:** ColorLib "Unapp" — app / template-builder landing page
  (source: https://colorlib.com/wp/template/unapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/unapp/
  (HTTP 200, full rendered DOM + `css/style.css` (38KB) extracted).
- **Visual design (from DOM + CSS tokens):** app/template-builder landing
  with a **blue** brand (`#499bea`) + **indigo** (`#798eea`) and **green**
  (`#4aca85`) accents, Nunito + Poppins fonts, a "Take on your biggest
  projects" hero, 3 feature tiles, a collaborate split, and a blog strip.
- **Structure (1:1, section order):**
  1. Navbar: logo "Unapp" + Home, Works, Services, Blog, About, Shop,
     Contact.
  2. Hero: h1 "Take on your biggest projects and goals with Unapp's high
     quality features" + **Get premium**.
  3. Feature tiles: **Automatic Backup Data, Page Builder, Create your own
     template** (icon + blurb).
  4. Split: "Collaborate with your design team in a new way" + **Real
     template creation**.
  5. Steps: "Start collaborating / Finish template creation" (numbered).
  6. Stats: satisfaction %, preset options, response time.
  7. Blog: "News from our Blog" + **Building the Mention Sales Application
     on Unapp** x3 (May 12, 2018, by Dave Miller).
  8. Trust: "Already trusted by over 10,000 users".
  9. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#499bea`**; indigo `#798eea`; **green `#4aca85`**.
  - Dark text `#303133`.
  - Fonts: **"Nunito"** + **"Poppins"** (Google Fonts `<link>`).
  - Blue rounded buttons with white text.
- **Recreation name:** Unapp (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/unapp`, package
  `@free-react-templates/unapp`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/unapp-<n>/<w>/<h>`); lucide-react icons; Nunito +
  Poppins via Google Fonts; blue primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-unapp/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/unapp` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/unapp`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-unapp`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
