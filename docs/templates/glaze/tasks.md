# Glaze (ColorLib Bootstrap Buttons 19) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Glaze** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 19"). Implementation
> ships on `feat/template-glaze` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 19" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-19/). TEMPLATES.md
  row: line 680 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-19`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-19/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-19/` (HTTP 200,
  14.6KB HTML, `<title>Button 09</title>`; the nested `/bb/` subpath is
  the same pattern as Palette/01, Toggle/02, Float/03, Swell/04, Slant/05,
  Bezel/10, Tally/16, Pill/17 and Paddle/18). Stylesheets:
  `css/ionicons.min.css` (icon font — brush/chatboxes/pulse/people/
  briefcase/pricetag glyphs; do NOT copy — map to lucide-react),
  `css/style.css` (224KB = Bootstrap 4.3.1 + custom ftco rules; the custom
  tail of the file is the token source). JS bundle (jquery 3.3.1/popper/
  bootstrap.min.js/`js/main.js`) drives NOTHING — pure static showcase,
  hover is CSS-only. Computed styles verified in a live browser
  (2026-08-14): `.btn` `border-radius: 4px`, `padding: 0`, 14px/500,
  `border: none`, `overflow: hidden`, shadow `0px 7px 15px -13px
rgba(0,0,0,0.17)`; `.btn .icon` 60px box `bottom: 0`, `i` 30px;
  `.btn .text` `calc(100% - 60px)`, `h4` 22px `margin-bottom: 0`; label
  colors `rgba(0,0,0,0.3)` (white buttons) / `rgba(255,255,255,0.8)`
  (colored); h2 32px, h2>small 16px; body Poppins 15px/1.8; page bg
  `#f8f8f8`; section padding `7em 0`.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-19/`. Mention this in the PR
  description.
- **✅ Heading-number ARTIFACT (keep it):** the slug is
  `bootstrap-buttons-19` but the `<title>` says "Button 09" and the `h2`
  renders **"Button #09"** (with a leading space in the source) — a
  copy-paste artifact from an earlier sibling (same artifact class as
  Tally/16 "Button #06" and Paddle/18 "Button #08"). Fidelity mandate =
  render the heading EXACTLY as the reference renders it ("Button #09");
  do NOT "fix" it to #19.
- **✅ Subsection-heading artifact (keep it):** the only block heading is
  `h2.heading-section` containing ONLY a `<small>` — the custom CSS
  `.heading-section { font-size: 32px }` is overridden by
  `.heading-section small { font-size: 16px }`, so "Pick Your Color"
  renders at **16px**, while the page header "Button #09" (no small)
  renders at 32px. Recreate that sizing difference.
- **✅ Icon-pairing artifact (keep it):** the white row uses `brush` for
  "New Projects" and `chatboxes` for "New Clients"; the colored row uses
  `briefcase` and `people` for the same cards. The source is inconsistent
  between rows — recreate each row exactly, do NOT unify.
- **✅ Other copy artifacts (keep them):** "Default Gradient" is a FLAT
  lime `#a1dd70` (no real gradient); the metric `68 %` has a space before
  `%`.
- **✅ Screenshot matches live:** the TEMPLATES.md screenshot
  (`bootstrap-buttons-19.jpg`, 1200×972) shows the SAME light-gray page,
  "Button #09" heading, purple/teal/pink/lime "Pick Your Color" row, and
  4×4 stat-card grid (white cards with solid color icon boxes on top,
  solid colored cards below) as the live render — no structural
  discrepancy (only nuance: the static screenshot reads slightly flatter;
  the live CSS shadows are authoritative).
- **✅ Desktop-only quirk:** the reference `body` rule sets
  `min-width: 992px !important` — the original is effectively desktop-only.
  The recreation SHALL be responsive (columns stack below `md`, no
  horizontal overflow, reduced section padding on phones).
- **Signature:** GLASSY STAT-CARD BUTTONS — full-width flex cards,
  `border-radius: 4px`, soft shadow `0px 7px 15px -13px rgba(0,0,0,0.17)`,
  60px icon box pinned to one side: SOLID accent color with a WHITE glyph
  on the white cards (the "glazed" look), dark translucent
  `rgba(0,0,0,0.1)` box with white glyph on the colored cards. Four vivid
  custom accents: primary `#6c5ce7` (violet), secondary `#1ee3cf` (teal),
  tertiary `#ff00c8` (hot magenta), quarternary `#a1dd70` (lime), plus a
  "Pick Your Color" swatch row of four plain solid buttons (`py-3 px-4`).
  Hover darkens colored buttons to `#4430e0`/`#17b7a7`/`#cc00a0`/
  `#86d347`; white buttons don't change. NOT tinted icon boxes (that's
  Tally/16, 2px radius, cyan/orange/teal/magenta, no swatch row), NOT
  asymmetric paddle (Paddle/18), NOT borderless pills (Pill/17), NOT skew
  (Slant/05), NOT bezel (Bezel/10).
- **Exact structure (1:1 from live DOM), single section `#buttons`:**
  1. `section.ftco-section#buttons` (padding 7em 0, bg `#f8f8f8`) >
     `div.container` > `div.row.mb-4` > `div.col-md-12` >
     `h2.heading-section` **"Button #09"** (32px Poppins; the ONLY `mb-4`
     row).
  2. **Pick Your Color** — `div.row.mb-5` > `div.col-md-12` >
     `h2.heading-section > small` "Pick Your Color" (16px) + 4 buttons
     `btn mb-2 mb-md-0 py-3 px-4 btn-{primary,secondary,tertiary,
quarternary}`: `Default Primary` / `Default Secondary` / `Default
Tertiary` / `Default Gradient` (flat lime `#a1dd70`).
  3. **White stat buttons** — plain `div.row` > 8 × `div.col-md-3.mb-3`
     > `button.btn.btn-white.w-100.align-items-stretch.d-flex`. First 4:
     > `icon icon-left icon-{color}` + `text text-right py-2 pr-3` —
     > `275 New Posts` (brush/primary), `109 New Comment`
     > (chatboxes/secondary), `68 % Bounce Rate` (pulse/tertiary),
     > `343 Total Visits` (people/quarternary). Last 4:
     > `icon icon-right icon-{color}` + `text text-left py-2 pl-3` —
     > `275 New Projects` (brush/quarternary), `109 New Clients`
     > (chatboxes/primary), `68 % Conversion Rate` (pulse/secondary),
     > `343 Support Tickets` (pricetag/tertiary). Icon boxes = SOLID
     > accent bg + white 30px glyph.
  4. **Colored stat buttons** — plain `div.row` > 8 × `div.col-md-3.mb-3`
     > `button.btn.btn-{color}.w-100.align-items-stretch.d-flex` (no
     > `icon-{color}` class — box is `rgba(0,0,0,0.1)`, white glyph). First
     > 4 icon-left: `275 New Posts` (brush/primary), `109 New Comment`
     > (chatboxes/secondary), `68 % Bounce Rate` (pulse/tertiary),
     > `343 Total Visits` (people/quarternary). Last 4 icon-right: `275
New Projects` (**briefcase**/quarternary), `109 New Clients`
     > (**people**/primary), `68 % Conversion Rate` (pulse/secondary),
     > `343 Support Tickets` (pricetag/tertiary).
- **4-color brand palette (base / hover):** primary `#6c5ce7`/`#4430e0`,
  secondary `#1ee3cf`/`#17b7a7`, tertiary `#ff00c8`/`#cc00a0`,
  quarternary `#a1dd70`/`#86d347`. White `#ffffff` with black text; page
  bg `#f8f8f8`; muted labels `rgba(0,0,0,0.3)` / `rgba(255,255,255,0.8)`;
  colored-card icon box `rgba(0,0,0,0.1)`.
- **Copy is fixed and minimal:** the labels listed above; no uppercase
  anywhere.
- **Font:** Poppins for body AND headings (`style.css` sets the same
  Poppins-first stack on `body` and `h1–h6`). Body 15px; page header
  32px; block heading 16px; stat number 22px. Load Poppins via Google
  Fonts `<link>` in `index.html`.
- **Implementation pointers (Tailwind v4):**
  - One section component (e.g. `UiShowcase` / `StatCards`) + building
    blocks: `PageHeader` ("Button #09"), `ColorSwatchRow` (4 buttons),
    `StatCardGrid` (data-driven, reused for the white and colored rows —
    a `variant` prop switches `btn-white` vs `btn-{color}` and the
    icon-box treatment), plus the muted Component Dock footer. No
    Navbar/Hero — none in the reference.
  - Palette in `src/index.css` `@theme`: `--color-primary: #6c5ce7`,
    `--color-secondary: #1ee3cf`, `--color-tertiary: #ff00c8`,
    `--color-quarternary: #a1dd70` + hover shades
    (`primary-hover #4430e0`, `secondary-hover #17b7a7`,
    `tertiary-hover #cc00a0`, `quarternary-hover #86d347`) + page bg
    `#f8f8f8` + muted label colors.
  - Stat card button base: `flex w-full items-stretch overflow-hidden
rounded-[4px] text-sm font-medium shadow-[0_7px_15px_-13px_rgba(0,0,0,0.17)]
transition-all duration-300 ease-in-out` (borderless). The 60px icon
    box: `flex w-[60px] items-center justify-center self-stretch`; on
    white cards `bg-<color>` (glazed solid) + white icon, on colored
    cards `bg-black/10` + white icon. Text block:
    `flex-1 py-2 pr-3 text-right` (icon-left) / `pl-3 text-left`
    (icon-right); number `text-[22px] leading-1.5 font-normal` +
    muted label span.
  - Pick Your Color buttons: `rounded-[4px] px-4 py-3 text-sm
font-medium shadow-[0_7px_15px_-13px_rgba(0,0,0,0.17)]` + per-color
    bg; `mb-2 md:mb-0` spacing.
  - Hover: `hover:bg-<color>-hover` on colored buttons; white buttons no
    bg change.
  - Grid: `grid grid-cols-1 md:grid-cols-4 gap-3` (the two `row` grids).
    Container `max-w-[1140px] mx-auto px-4`; section
    `py-[7em] md:py-24 bg-[#f8f8f8]`.
  - Icons: `lucide-react` — Paintbrush, MessageSquare, Activity, Users,
    Briefcase, Tag (Ionicons brush/chatboxes/pulse/people/briefcase/
    pricetag). Data array drives both rows (include the icon + color per
    card; the colored row's briefcase/people switches must live in the
    data, not be "fixed").
  - `focus-visible` ring per repo convention (reference has none — its
    hover only darkens the bg, insufficient as an a11y indicator).
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency, no jquery, no Ionicons font.
  - Import `cn()` from `@free-react-templates/ui` (packages/ui — knip
    gate); packages/ui `Button`/`ButtonLink` only where they fit the
    stat-card anatomy (the reference button is custom — precedent:
    hostelry imports `cn` from the ui barrel).

## Tasks (implementer checklist)

1. [ ] `feat/template-glaze` branch from latest main
2. [ ] Scaffold `apps/glaze` (copy the simplest existing app; package
       `@free-react-templates/glaze`; `public/CNAME` =
       `glaze.free.componentdock.com`; `"homepage"` =
       `https://glaze.free.componentdock.com`)
3. [ ] `npm install` at repo root so `package-lock.json` registers the
       workspace; verify `grep -c "free-react-templates/glaze"
package-lock.json`
4. [ ] `vite.config.ts` with `injectUiSource()` (per conventions)
5. [ ] Spec-first: `openspec/specs/template-glaze/spec.md` is the
       contract — Gherkin scenarios map 1:1 to test cases
6. [ ] TDD: write tests (RED) → implement (GREEN) → 100% coverage
       (lines/functions/branches/statements)
7. [ ] Run `scripts/verify-app.sh glaze` until green (typecheck + lint +
       knip + fallow + vitest 100% + build)
8. [ ] Self-review per `docs/self-review.md`
9. [ ] PR to main with description: source template (ColorLib "Bootstrap
       Buttons 19"), real preview URL
       (https://preview.colorlib.com/theme/bb/bootstrap-buttons-19/ —
       default 404s), design tokens used, artifacts kept ("Button #09",
       16px "Pick Your Color" heading, flat "Default Gradient",
       `68 %` space, briefcase/people icon switches), icons mapped from
       Ionicons → lucide-react
10. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
11. [ ] After merge: TEMPLATES.md `[~]` → `[x]` + surge URL
        (`glaze.free.componentdock.com`) + `npm run readme:status`; push
        (mark line 680 — Bootstrap Buttons (20) category; single row, no
        dups)
