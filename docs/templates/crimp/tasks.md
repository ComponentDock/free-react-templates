# Crimp (ColorLib Accordion 08) — Tasks & Design Notes

> Prep artifacts (spec + research) prepared on `main` by the prep stream.
> Implementation ships later on `feat/template-crimp` by an implementer
> stream — this folder is the handoff.

## Design notes

- **Original:** ColorLib "Accordion 08" — free single-page accordion /
  account-menu component template (source:
  https://colorlib.com/wp/template/accordion-08/). TEMPLATES.md row: line
  646 (**Bootstrap Accordions (20)**). The `accordion-08` slug appears
  exactly once (no dup rows to mark).
- **Recreation name:** Crimp ("to press into small regular folds or
  ridges" — the accordion-folding theme, same family as the Accordion 07
  recreation Gusset). App folder `apps/crimp`, package
  `@free-react-templates/crimp`, `public/CNAME` =
  `crimp.free.componentdock.com`, `"homepage"` =
  `https://crimp.free.componentdock.com`.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/accordion-08/` returns 404 —
  the REAL preview is `https://preview.colorlib.com/theme/bac/accordion-08/`
  (HTTP 200, 13,600 bytes HTML; same `/bac/` subpath pattern as Accordion
  01–07). Stylesheet: `css/style.css` (222.9KB = bootstrap + custom tokens;
  the only non-vendor stylesheet) + Ionicons 4.5.6 CDN for menu glyphs.
  Screenshot (`accordion-08.jpg`, 1200×972 AVIF) browser-verified AND
  pixel-sampled 2026-08-14 (see below).
- **⚠️ STALE-HEADING ARTIFACT:** the source title tag AND its `h2` heading
  both say "Accordion #04" — the pack author copied Accordion 04's file and
  forgot to update the number (the OFFICIAL screenshot shows it too). The
  design is unique to accordion-08: panels Account(10)/Messages(89)/
  Cloud(102) differ from the real Accordion 04 (My Files/Mail/Cloud) and 05
  (Manage/Location/Hobbies). **Recreate the heading VERBATIM as "Accordion
  #04"** — that's what the live preview + official screenshot render.
  Document the artifact in the PR. App `<title>` = "Crimp — Account Menu
  Accordion".
- **Pixel-verified rendering (acc08-full.png, 1200×972):** white page
  (255,255,255); heading dark text centered x≈523-676; card x 392-807
  (centered ~50%); toggle bars solid coral (205,104,85 ≈ `#db624e`); bar 1
  "Account" y 218-275 with badge "10" at top-right (x 754-777, y 232-257,
  lighter coral ≈ `#df7563`); bar 2 "Messages" y 275-330; OPEN dark body
  y 330-489 exact `#453f3e` (68,61,62); bar 3 "Cloud" y 490-545; white
  below. The Messages bar's `:after` coral triangle is NOT visible in the
  render (stacked behind the bar) — omit it.
- **Structure observed (1:1):** `section.ftco-section` (padding 7em 0,
  white page) → `col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
  "Accordion #04" (28px, `#000`) → `row.justify-content-center` →
  `col-md-6` → `div#accordion.myaccordion.w-100` (bg `#fff`,
  `border-radius: 5px`, `box-shadow: 0px 10px 38px -19px rgba(0,0,0,0.66)`,
  `overflow: hidden`) → 3 `.card` panels (border none, transparent bg):
  header `.card-header.p-0` → `h2.mb-0` → full-width `.btn.btn-link` toggle
  (`d-flex py-3 px-4 align-items-center justify-content-between`, bg
  `#db624e`, 18px, radius 0, `border-bottom: 1px solid rgba(0,0,0,0.1)`;
  hover/focus no underline) containing `div.heading` (`div.icon` 40×40px
  radius 50% border `1px solid rgba(255,255,255,0.5)` + 20px white glyph +
  `h3.mb-0.ml-3` 16px white label) and `p.mb-0.num` pill badge (bg
  `#df7563`, 16px white, padding 4px 15px, radius 40px). Open body:
  `.card-body.p-0.py-3` (bg `#453f3e`) → `ul` → `li` (none style,
  `border-bottom: 1px solid rgba(255,255,255,0.05)`, last none) →
  `a.d-flex.justify-content-between.align-items-center` (padding 15px 30px)
  → `p` (`rgba(255,255,255,0.8)`, 600) + `span.icon` (white 16px chevron).
  **Panel 2 "Messages" open by default** (`collapse show`); Account +
  Cloud closed. `data-parent` = only one open at a time. NO footer in the
  original — add the mandatory Component Dock attribution footer.
- **Source markup bug to NOT reproduce:** the open "Messages" button keeps
  a stale `.collapsed` class with `aria-expanded="true"` — recreate with
  correct semantics (open button: `aria-expanded="true"`, no `.collapsed`).
- **Toggle glyphs:** Ionicons glyph font (`ion-ios-person` / `ion-ios-mail`
  / `ion-ios-cloud` / `ion-ios-arrow-forward`) — recreate with lucide-react
  `User` / `Mail` / `Cloud` / `ChevronRight`. Do NOT copy the font.
- **Design tokens:** page/card `#fff`; bars `#db624e` (coral); badges
  `#df7563`; open body `#453f3e` (dark charcoal); heading `#000`; body
  labels `rgba(255,255,255,0.8)` weight 600; chevrons `#fff`; bar
  separators `rgba(0,0,0,0.1)`; row separators `rgba(255,255,255,0.05)`;
  icon circle border `rgba(255,255,255,0.5)`; card shadow
  `0 10px 38px -19px rgba(0,0,0,0.66)`; font Poppins (body 14px/1.8,
  heading 28px, bar 18px, label 16px, badge 16px, rows 14px/600, chevrons
  16px); radii: card 5px, icon circle 50%, badge pill 40px, bars 0; section
  padding 7em 0.
- **Design approach:** minimal account-menu accordion — ONE component
  surface. Fidelity is about: the all-coral toggle bars (NO active color
  swap — the open/closed distinction is purely body visibility), the dark
  `#453f3e` dropdown rows, the pill count badges, the icon circle treatment
  (translucent circle + white glyph, NOT a solid white fill), the radius-5
  card with its distinctive shadow, and the `col-md-6` centered column.
  Default `openIndex = 1` (Messages). Keep the footer tiny and muted.
- **Placeholders:** none needed (no imagery in the reference).
- **Copy:** keep the original content kinds — three menu sections (Account:
  5 storage rows; Messages: New/Sent/Trash; Cloud: 4 cloud rows).
  Paraphrase row labels freely (the source repeats "Dropbox" and has a
  "Skyrdrive" typo — dedupe/clean).

## Implementation tasks

1. **Scaffold** — `apps/crimp` from the simplest existing app; rename
   package to `@free-react-templates/crimp`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `crimp.free.componentdock.com`,
   `"homepage"` = `https://crimp.free.componentdock.com`.
2. **Theme tokens** — add `#ffffff` / `#000000` / `#db624e` / `#df7563` /
   `#453f3e` + the `rgba(255,255,255,…)` / `rgba(0,0,0,…)` tints to
   `@theme`; Poppins Google Fonts `<link>` in `index.html`; card shadow via
   Tailwind arbitrary value or token.
3. **Components** (per section, TDD — tests first):
   - `Accordion` (or `CrimpAccordion`) — the core component: takes panel
     data (label, count, icon, rows), holds `openIndex` state (default 1,
     only one open), renders toggle bars (full width, coral `#db624e`,
     18px, white label + icon circle + pill badge, `aria-expanded`/
     `aria-controls`, no `.collapsed` on the open one) + bodies
     (`role="region"`, `aria-labelledby`, dark `#453f3e` bg, rows as links
     with `ChevronRight`).
   - `MenuPanel` (optional split) — bar + body pair if the Accordion gets
     large; otherwise keep it one component.
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: heading "Accordion #04" → card →
   Account bar (closed, 10) → Messages bar (OPEN, 89, dark body New/Sent/
   Trash) → Cloud bar (closed, 102) → footer.
5. **Verify** — `scripts/verify-app.sh crimp` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Accordion 08" row (line 646, Bootstrap
   Accordions) `[~]`→`[x]` + surge URL + `npm run readme:status`; PR
   description MUST list: source template, the REAL preview URL
   (`preview.colorlib.com/theme/bac/accordion-08/` — note the `/bac/`
   subpath), the stale "Accordion #04" heading artifact (recreated verbatim
   by design), design tokens, and paraphrased row labels.
