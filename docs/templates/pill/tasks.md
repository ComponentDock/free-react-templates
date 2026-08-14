# Pill (ColorLib Bootstrap Buttons 17) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Pill** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 17"). Implementation
> ships on `feat/template-pill` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 17" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-17/). TEMPLATES.md
  row: line 678 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-17`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-17/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-17/` (HTTP 200,
  18.2KB HTML, `<title>Button #1</title>`; the nested `/bb/` subpath is the
  same pattern as Palette/Buttons 01, Toggle/02, Float/03, Swell/04,
  Slant/05, Bezel/10 and Tally/16). Stylesheets: `fonts/icomoon/style.css`
  (icon font — loaded but **UNUSED**: zero icon elements in the DOM),
  `css/bootstrap.min.css` (Bootstrap 4.3.1 — standard colors + size/block
  utilities), `css/style.css` (3.8KB custom — the token source). JS bundle
  (jquery-3.3.1/popper/bootstrap.min.js/`js/main.js`) is inert on this page
  — pure static showcase; hover is CSS-only. Computed styles verified in a
  live browser (2026-08-14): `.btn` `border-radius: 30px`, `border: none`,
  13px/`8px 25px`, `letter-spacing: .02rem`, shadow `0 15px 30px 0
rgba(0,0,0,0.2)`; hover = shadow off + `top: 1px`; `.btn-lg` 16px/`15px
30px`, `.btn-sm` 12px/`5px 15px`; h2 20px Roboto; `.content`
  `height: 100vh` with `align-items-center justify-content-center`.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-17/`. Mention this in the PR
  description.
- **✅ Heading-number ARTIFACT (keep it):** the slug is
  `bootstrap-buttons-17` but the `<title>` says "Button #1" and the `h2`
  renders **"#02 — Bootstrap 4 Buttons"** (with em dash) — a copy-paste
  artifact from an earlier sibling. Fidelity mandate = render the heading
  EXACTLY as the reference renders it ("#02 — Bootstrap 4 Buttons"); do NOT
  "fix" it to #17. (Same artifact class as Tally's 16-slug "Button #06"
  heading and Bezel's 10-slug "02" heading.)
- **✅ Screenshot matches live:** the TEMPLATES.md screenshot
  (`bootstrap-buttons-17.jpg`, 1200×972) shows the SAME white page, "#02 –
  Bootstrap 4 Buttons" heading, three blue size pills, 8/8/2 grid of 18
  color pills, and full-width blue pill as the live render — no structural
  discrepancy (only nuance: the static screenshot reads slightly flatter;
  the live CSS shadow `0 15px 30px 0 rgba(0,0,0,0.2)` is authoritative).
- **Signature:** BORDERLESS PILL buttons — `border-radius: 30px`, `border:
none`, letter-spacing `.02rem`, broad soft shadow, and a press-down hover
  (shadow → none + `top: 1px`). Classic text-button showcase (sizes +
  colors + block), NOT stat cards (that's Tally), NOT skew (Slant), NOT
  bezel (Bezel), NOT white-wash (Swell).
- **No icons on this page:** the icomoon font is loaded but unused — do NOT
  copy it and do NOT add lucide icons (unlike Tally there is no icon
  mapping).
- **Exact structure (1:1 from live DOM), single section:**
  1. `container.content` (100vh) > row `align-items-center content
justify-content-center` > `col-md-10.text-left` > `h2.mb-5`
     **"#02 — Bootstrap 4 Buttons"** (20px Roboto).
  2. **Sizes row** — `div.d-block.mb-5.d-flex` (flex row; `d-flex` wins the
     display conflict) with 3 groups (`div.mb-3.mr-3` > `div.text-center` >
     `small` label + button): **Large** (`btn-primary btn-lg`), **Medium**
     (`btn-primary`), **Small** (`btn-primary btn-sm`) — all read "Button".
  3. **"Button Colors" label** — `div.mb-3` (source has a leading-space
     class artifact `" mb-3"`) > `div.text-center` > `small`.
  4. **Color grid** — `div.mb-5` with **18** buttons
     (`btn mb-3 mr-3 btn-{color}`, wrap ~8/8/2): **Primary, Secondary,
     Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep
     Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray**.
  5. **Full width** — `div.mb-3.mr-3` > `div.text-center` > `small` "Full
     width button" + `btn btn-primary btn-block` "Button".
- **18-color palette (base / hover):** Primary `#007bff`/`#3395ff`,
  Secondary `#6c757d`/`#868e96`, Success `#28a745`/`#34ce57`, Info
  `#17a2b8`/`#1fc8e3`, Warning `#ffc107`/`#ffce3a` (text `#212529`), Danger
  `#dc3545`/`#e4606d`, Light `#f8f9fa`/`#e2e6ea` (text `#212529`), Orange
  `#fd7e14`/`#fd9a47`, Indigo `#6610f2`/`#8540f5`, Pink `#e83e8c`/`#ed6ca7`,
  Deep Orange `#ffac8e`/`#ffd1c1`, Aqua `#3fc5f0`/`#6ed3f4`, Dark
  `#393e46`/`#505762` (style.css OVERRIDES Bootstrap's `#343a40`), Black
  `#000`/`#1a1a1a`, Purple `#6f42c1`/`#8c68ce`, Blue `#007bff`/`#3395ff`,
  Brown `#a0855b`/`#b49d7a`, Blue Gray `#3f4d71`/`#516392`. Standards
  (Primary–Light) get base from Bootstrap 4.3.1 + hover overrides from
  style.css; the 11 custom colors are defined entirely in style.css. White
  text everywhere except Warning/Light (`#212529`).
- **Copy is fixed and minimal:** size + full-width buttons read "Button";
  labels "Large", "Medium", "Small", "Button Colors", "Full width button";
  the 18 color labels are the color names. No uppercase anywhere.
- **Font:** Roboto for body AND headings (style.css sets the same
  Roboto-first stack on `body` and `h1–h6`; `h2` = 20px). Load Roboto via
  Google Fonts `<link>` in `index.html`.
- **Implementation pointers (Tailwind v4):**
  - One section component (e.g. `KitSection` / `ButtonShowcase`) +
    small building blocks: `SizeRow` (3 groups), `ColorGrid` (18 pills
    from a data array), `FullWidthButton`; plus the muted Component Dock
    footer. No Navbar/Hero — none in the reference.
  - Palette in `src/index.css` `@theme`: `--color-primary: #007bff` …
    `--color-secondary: #6c757d`, `--color-success: #28a745`,
    `--color-info: #17a2b8`, `--color-warning: #ffc107`, `--color-danger:
#dc3545`, `--color-light: #f8f9fa`, plus the 11 customs (orange,
    indigo, pink, deep-orange, aqua, dark, black, purple, blue, brown,
    blue-gray) + a `*-hover` shade per color.
  - Button base: `rounded-full border-0 px-[25px] py-2 text-[13px]
tracking-[0.02em] shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]
transition-all duration-300 ease-in-out relative top-0` and
    `hover:shadow-none hover:top-[1px]` + `hover:bg-<color>-hover`
    (mirrors `.3s all ease` + press-down).
  - Sizes: lg `text-base px-[30px] py-[15px]`, sm `text-xs px-[15px]
py-[5px]` (both keep `rounded-full`).
  - Full width: `block w-full`.
  - Grid: `flex flex-wrap gap-3` or `grid grid-cols-2 md:grid-cols-4
lg:grid-cols-6 gap-3` — reference wraps in the col-md-10 column; match
    the natural wrap (8/8/2 at ~1140px). Sizes row: `flex flex-wrap gap-3`
    (reference flex row does NOT wrap — allow wrap so phones don't
    overflow).
  - Vertical centering: `min-h-screen flex items-center justify-center`
    (reference `height: 100vh` + align-items-center); relax on small
    screens (`py-*` instead of forcing 100vh).
  - `focus-visible` ring per repo convention (reference only drops the
    shadow + nudges 1px on `:focus` — insufficient as an a11y indicator).
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency, no jquery, no icomoon font (no icons at all).
  - Import `cn()` from `@free-react-templates/ui` (packages/ui — knip
    gate); packages/ui `Button`/`ButtonLink` only where they fit the pill
    anatomy (the reference button is custom — precedent: hostelry imports
    `cn` from the ui barrel).

## Tasks (implementer checklist)

1. [ ] `feat/template-pill` branch from latest main
2. [ ] Scaffold app `apps/pill` (copy simplest existing app; rename
       package to `@free-react-templates/pill`; `npm install` at root
       BEFORE committing so `package-lock.json` registers the workspace;
       `public/CNAME` = `pill.free.componentdock.com`; `"homepage"` =
       `https://pill.free.componentdock.com`; vite.config.ts keeps
       `injectUiSource()`)
3. [ ] Write spec-driven tests first (TDD, 100% coverage required): page
       structure, heading text ("#02 — Bootstrap 4 Buttons" — artifact,
       exact, with em dash), 3 size pills + labels, 18 color buttons in the
       exact order with exact base colors, warning/light dark text, hover
       hexes (18), press-down hover (shadow off + 1px), full-width button,
       pill anatomy (30px radius, no border, letter-spacing, signature
       shadow), focus-visible, responsive (wrap, no overflow), footer
4. [ ] Implement `src/App.tsx` + `src/components/` (e.g. `SizeRow.tsx`,
       `ColorGrid.tsx`, `FullWidthButton.tsx`, `Footer.tsx`; no
       Navbar/Hero — none in reference)
5. [ ] Tokens in `src/index.css` `@theme` (see design tokens list — 18
       base + 18 hover colors; white; `#212529` dark text for
       warning/light)
6. [ ] `scripts/verify-app.sh pill` green (typecheck + lint + vitest 100% +
       build); `npm run spec:validate` for `template-pill`
7. [ ] PR: "feat: add Pill (ColorLib Bootstrap Buttons 17 recreation)" —
       description MUST include: source template + preview URL (note the
       `/bb/` quirk AND the "#02 — Bootstrap 4 Buttons" heading-number
       artifact AND the unused icomoon font), design tokens used, what
       differs (renames, no icons, Tailwind re-implementation)
8. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
9. [ ] After merge: TEMPLATES.md "Bootstrap Buttons 17" row (line 678)
       `[~]` → `[x]` + `https://pill.free.componentdock.com` + `npm run
    readme:status`; push
