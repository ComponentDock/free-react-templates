# Blueprint (ColorLib Unapp) — Tasks & Design Notes

> Prepared by the prep stream on `main`; implementation ships on
> `feat/template-blueprint`. The recreation is named **Blueprint** (new,
> original name — the ColorLib source name "Unapp" is never reused).

## Design notes (replication findings)

- **Original:** ColorLib "Unapp" — app / template-builder landing page
  (source: https://colorlib.com/wp/template/unapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/unapp/
  (HTTP 200, full rendered DOM + `css/style.css` (38KB) extracted).
- **Visual design (screenshot + DOM + CSS tokens):** app/template-builder
  landing with a **blue** brand (`#499bea`) + **indigo** (`#798eea`) hero
  gradient and **green** (`#4aca85`) accents, Nunito + Poppins fonts, a
  "Take on your biggest projects" hero with a dashboard mockup, 3 feature
  tiles, a collaborate split, numbered steps, a stats strip, a blog
  strip, a trust/subscribe band, and a 4-plan pricing row.
- **Structure (1:1, section order):**
  1. Navbar: logo "Blueprint" + Home, Works, Services, Blog, About,
     Shop, Contact (kept as anchors: Home, Works, Services, Blog,
     Pricing, Contact).
  2. Hero: h1 "Take on your biggest projects and goals" + "with
     Blueprint's high quality features" + **Get premium** (green pill)
     - dashboard preview image.
  3. Feature tiles: **Automatic Backup Data, Page Builder, Create your
     own template** (icon + blurb).
  4. Split: "Collaborate with your design team in a new way" +
     checklist + preview image.
  5. Steps: **Real template creation** / **Finish template creation**
     (numbered, alternating rows).
  6. Stats: **1500** customers satisfied / **500** preset options /
     **1200** response time.
  7. Blog: "News from our Blog" + **Building the Mention Sales
     Application on Blueprint** x3 (May 12, 2018, by Dave Miller).
  8. Trust: "Already trusted by over 10,000 users" + email subscribe
     form with **Subscribe Now**.
  9. Pricing: **Starter $9, Basic $27, Pro $74, Unlimited $140** (per
     month) + **Select Plan**.
  10. Footer: About + social, Information, Recent Blog, Contact Info,
      copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#499bea`**; indigo `#798eea`; **green `#4aca85`**
    (buttons, hover `#5ed092`, pricing price).
  - Dark text `#303133`; muted `#7f7f7f`.
  - Fonts: **"Nunito"** (body) + **"Poppins"** (headings) (Google Fonts).
  - Blue rounded buttons with white text; hero is a -45deg blue→indigo
    gradient at 0.95 opacity over a cover photo.
- **Recreation name:** Blueprint (NEW — never reuse the ColorLib source
  name). App folder `apps/blueprint`, package
  `@free-react-templates/blueprint`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/blueprint-<n>/<w>/<h>`); lucide-react icons;
  Nunito + Poppins via Google Fonts; blue primary in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-blueprint/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/blueprint` (copy the section-rich app landing pattern —
      driven; rename package to `@free-react-templates/blueprint`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh blueprint` + spec:validate
      (FAST_MODE; full gate runs in CI on merge + nightly).
- [ ] Push `feat/template-blueprint`, open PR (source template, preview
      URL, design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage +
      `npm run readme:status` (bookkeeping on main, state D).
