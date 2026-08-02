# Alex Rivera (Colorlib Alex Rivera) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-alex-rivera`.

## Design notes (replication findings)

- **Original:** ColorLib "Alex Rivera" — personal portfolio template
  (source: https://colorlib.com/wp/template/alex-rivera/).
- **Demo DOM analyzed:** https://alexrivera-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/alex-rivera/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** personal portfolio with
  gray neutrals and **yellow** accents (`yellow-400`), Inter + Space
  Grotesk fonts, "I design & build digital experiences" hero, "My
  Expertise" skills (Frontend, Backend, Design), and "Featured Work"
  projects (E-commerce Platform, Design System, Analytics Dashboard).
- **Structure (1:1, section order):**
  1. Navbar: About, Skills, Projects, Experience, Pricing, Blog,
     Contact.
  2. Hero: "I design & build digital experiences".
  3. About: "About Me".
  4. Expertise: "My Expertise" + Frontend, Backend, Design.
  5. Featured Work: E-commerce Platform, Design System, Analytics
     Dashboard.
  6. Experience: timeline.
  7. Pricing: plans.
  8. Blog: post cards.
  9. Contact: form.
  10. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Gray neutrals, **yellow `yellow-400`** accents, dark-mode aware.
  - Fonts: **"Inter"** + **"Space Grotesk"** (Google Fonts `<link>`).
- **Recreation name:** Alex Rivera (kept — matches ColorLib name; folder
  uses kebab case). App folder `apps/alex-rivera`, package
  `@free-react-templates/alex-rivera`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/alexrivera-<n>/<w>/<h>`); lucide-react icons; Inter
  - Space Grotesk via Google Fonts; yellow accent in `@theme`;
    repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-alex-rivera/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/alex-rivera` (copy the section-rich landing app
      pattern — Aurora; rename package to
      `@free-react-templates/alex-rivera`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-alex-rivera`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
