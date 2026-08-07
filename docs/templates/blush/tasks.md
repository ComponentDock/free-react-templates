# Blush (ColorLib Selene) — Tasks & Design Notes

> Prep artifacts prepared on `main` (originally under the name "selene");
> renamed to **Blush** on `feat/template-blush` because the mandatory naming
> rule requires a NEW name different from the ColorLib source slug.
> Implementation ships via the `feat/template-blush` PR.

## Design notes (replication findings)

- **Original:** ColorLib "Selene" — app landing page template
  (source: https://colorlib.com/wp/template/selene/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/selene/
  (HTTP 200, full rendered DOM extracted) + `style.css` (39KB) extracted.
  The TEMPLATES.md screenshot (`selene-free-template.jpg`) is the visual
  reference.
- **Visual design (from DOM + CSS tokens):** app landing with a **pink**
  brand (`#ff4c8b`) + **lime** accent (`#ccfa87`), dark ink `#292d4f`,
  Century Gothic/Futura LT headings + Open Sans body, a "SELENE — THE APP"
  hero with Google/Apple store buttons, an about split with feature icons,
  an FAQ accordion, a users map band, a stats band, a features grid, and a
  pricing section.
- **Structure (1:1, section order):**
  1. Navbar: logo "Blush" + Home, About Us, Services, Blog, Contact.
  2. Hero: "BLUSH THE APP" + blurb + **available on Google Store /
     available on Apple Store** + Scroll Down + device image.
  3. About split: "Mobile ready" + blurb + app slider + 4 feature icons.
  4. FAQ: "An app for Each & Everyone" + blurb + 3 accordion panels.
  5. Users map band: "used worldwide" stylized map with 4 pins.
  6. Stats: **10 Years of Experience, +500 Happy Clients, 17k Followers on
     FB, 132 Finished Projects, 3 Coffees a day**.
  7. Features: "All the best features" + 6 cards (No1 in Sales!, Online
     Marketing, Modern Design, Documented, Easy to use, Google Font).
  8. Pricing: "Purchase App" + blurb + 3 plans (Free / $29 / $59).
  9. Footer: store buttons + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#ff4c8b`**; darker pink `#fb397d`; light pink
    `#fa91b9`; **lime `#ccfa87`** accent; dark ink `#292d4f`; muted
    `#9597a6`.
  - Fonts: "Century Gothic"/"Futura LT" (headings) + "Open Sans" (body) —
    recreate with Poppins + Open Sans via Google Fonts `<link>`.
  - Buttons: solid pink `#ff4c8b` white text; 2px pink-border download
    buttons; plan cards with 5px pink top border + soft shadow.
- **Recreation name:** **Blush** (NEW name — pink brand evocation; the
  ColorLib source name "Selene" is NOT reused). App folder `apps/blush`,
  package `@free-react-templates/blush`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/blush-<n>/<w>/<h>`); lucide-react icons; Poppins +
  Open Sans via Google Fonts; pink primary + lime accent in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome; the map is a
  stylized "used worldwide" band with MapPin markers (no copyrighted map
  asset); preloader animation omitted.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Replication: fetch Selene preview DOM + `style.css`; extract 1:1
      section structure and design tokens (recorded above).
- [x] Write `openspec/specs/template-blush/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above), renamed from the
      stale `template-selene` prep.
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/blush` (copy the driven landing app pattern; rename
      package to `@free-react-templates/blush`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [x] Push `feat/template-blush`, open PR (source template, preview URL,
      design tokens, what differs).
- [x] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
