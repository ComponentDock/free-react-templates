# Clipper (Colorlib Alotan) — Tasks & Design Notes

> Prep artifacts prepared on `main` (originally as "Alotan"); implementation
> ships on `feat/template-clipper`. Recreation name: **Clipper** (NEW name —
> the ColorLib source keeps its name "Alotan").

## Design notes

- **Original:** ColorLib "Alotan" — free barber shop website template
  (source: https://colorlib.com/wp/template/alotan/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/alotan/`
  (HTTP 200, 32.1KB) + stylesheet `css/style.css` (13.9KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens + visual check of
  the rendered preview (hero = dark photo with script wordmark "Alotan" +
  "Barber Shop"; navbar transparent over hero).
- **Structure observed (1:1):** navbar (logo + Home/Haircut/About/Contact) →
  hero (photo bg + script wordmark) → quick-info orange strip (phone +1 234
  5633 342 · location 249 Division Rad · hours Daily 8am-10pm) → services
  ("Services", prev/next + photo cards: Haircuting, Beard Shaving, Cream &
  Shampoo) → barber features ("Barber Features", 6 cards: Shave & Haircut,
  Cream & Shampoo, Mustache Expert, Haircut Styler, Razor For Beards,
  Haircomb) → CTA band (photo bg, "Appoint a Haircut Today and Get 25%
  discount" + black "Make an Appointment") → "Good Looking Style" (video
  image + play button, "Start with us today" lead) → light gray footer
  (#f9f9f9: About + Links + Latest Blog + Connect + copyright).
- **Design tokens:** brand orange **#ff6d24** (quick-info strip, accents);
  dark gray text on white; black buttons; font **Roboto** via Google Fonts
  (+ **Dancing Script** for the script wordmark); photo backdrops for hero
  and CTA band.
- **Design approach:** light theme with orange accents; hero = seeded picsum
  photo + script wordmark; quick-info strip with lucide icons (phone,
  map-pin, clock); service photo cards with titles + "Read More"; 6 feature
  cards with lucide icons; CTA band with discount message + black button;
  video block with play icon; all images picsum-seeded
  (`picsum.photos/seed/clipper-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/clutch` (latest multi-section app: dark-mode
  toggle, BrandIcon, tokenized `@theme` CSS) — copy and adapt; keep the
  `injectUiSource()` vite plugin and the `@custom-variant dark` block.

## Tasks

- [x] Write `openspec/specs/template-clipper/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (prep, as Alotan).
- [x] Rename spec + docs to the NEW name "Clipper" (this branch).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/clipper` (copy `apps/clutch`; rename package to
      `@free-react-templates/clipper`).
- [ ] TDD: tests first for Navbar, Hero, QuickInfo, Services, Features, Cta,
      StyleSection, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh clipper` (typecheck + lint +
      100% coverage tests + build) + `npm run spec:validate`.
- [ ] PR `feat: Clipper — Barber Shop template (ColorLib Alotan)` → merge
      immediately.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main): append `· [clipper](https://free-react-templates-clipper.surge.sh)`.
