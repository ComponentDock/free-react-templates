# Sweep (ColorLib Bootstrap Buttons 20) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Sweep** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 20"). Implementation
> ships on `feat/template-sweep` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 20" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-20/). TEMPLATES.md
  row: line 681 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-20`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-20/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-20/` (HTTP 200,
  18.1KB HTML, `<title>Button 10</title>`; the nested `/bb/` subpath is
  the same pattern as Palette/01…Paddle/18 and Glaze/19). Stylesheets:
  `css/ionicons.min.css` (icon font — heart/twitter/facebook/dribbble/
  linkedin/pinterest glyphs; do NOT copy — map to lucide-react),
  `css/style.css` (226KB = Bootstrap 4.3.1 + custom ftco rules; the custom
  tail is the token source and is TEMPLATE-SPECIFIC — diffed against
  bb-19's style.css: different `.btn` base, different palette, bb-20 alone
  has the `.btn:after` sweep). JS bundle (jquery 3.3.1/popper/
  bootstrap.min.js/`js/main.js`) drives NOTHING — pure static showcase,
  hover is CSS-only. Computed styles verified in a live browser
  (2026-08-14): `.btn` `padding: 12px 16px`, `border-width: 1px`,
  `border-radius: 5px`, 14px/500, `overflow: hidden`, `position:
relative`, `z-index: 0`, shadow `0px 10px 20px -6px rgba(0,0,0,0.12)`,
  transition `all 0.3s ease`; `.btn:after` sweep `top: 0; left: -100%;
bottom: 0; width/height: 100%; z-index: -1; transition: all 0.2s ease`,
  hover `left: 0`; `.btn span` `z-index: 1`; h2 32px, h2>small 16px; body
  Poppins 15px/1.8; page bg white `#ffffff`; section padding `7em 0`.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-20/`. Mention this in the PR
  description.
- **✅ Heading-number ARTIFACT (keep it):** the slug is
  `bootstrap-buttons-20` but the `<title>` says "Button 10" and the `h2`
  renders **"Button #10"** (with a leading space in the source) — a
  copy-paste artifact (series drift: Glaze/19 shows "#09"). Fidelity
  mandate = render the heading EXACTLY as the reference renders it
  ("Button #10"); do NOT "fix" it to #20.
- **✅ Heading-size artifact (keep it):** all three block headings are
  `h2.heading-section` containing ONLY a `<small>` — the custom CSS
  `.heading-section { font-size: 32px }` is overridden by
  `.heading-section small { font-size: 16px }`, so "Pick Your Style" /
  "Pick Your Color" / "Social Buttons" render at **16px**, while the page
  header "Button #10" (no small) renders at 32px. Recreate that sizing
  difference.
- **✅ Heading-ORDER artifact (keep it):** the 4-column social grid block
  has **NO heading at all**. DOM order: "Pick Your Color" block → unheaded
  grid → "Social Buttons" heading + the five brand rows. The heading
  FOLLOWS the grid it names — recreate the DOM order exactly; do NOT move
  the heading above the grid.
- **✅ Spelling artifacts (keep them):** `Default Quarternary` (not
  "Quaternary") and `Connect with Linkedin` (no "d") are the source
  spellings; `Share - 8.2k` / `Share - 8.5k` / `Share - 8k` and
  `Pin it - 1k` keep their exact formats.
- **✅ Screenshot matches live:** the TEMPLATES.md screenshot
  (`bootstrap-buttons-20.jpg`, 1200×972) shows the SAME white page,
  "Button #10" heading, blue solid/outline "Pick Your Style" rows,
  blue/cyan/pink/green "Pick Your Color" rows, the 3×4 social grid, and
  the five per-brand rows — no structural discrepancy. The CSS hexes are
  ground truth (the preview's antialiasing makes the light-cyan secondary
  read purplish in the screenshot).
- **✅ Desktop-only quirk:** the reference sets `min-width: 992px
!important` on BOTH `body` and `.container` — the original is
  effectively desktop-only. The recreation SHALL be responsive (columns
  stack below `md`, rows wrap, no horizontal overflow, reduced section
  padding on phones).
- **Signature:** SWEEP-FILL HOVER — every button carries an off-canvas
  `:after` layer that slides in from the left on hover (0.2s), painting
  the hover color across the 5px-radius, `12px 16px`, 14px/500 button
  face (shadow `0px 10px 20px -6px rgba(0,0,0,0.12)`). Hover fills:
  solid color buttons → darker hover hex (`#002ad7`/`#00c6f7`/
  `#e1005c`/`#016c49`); outline color buttons → brand hex + white text;
  social buttons (solid AND outline) → white + brand-colored text. The
  `.btn:after` sweep exists ONLY in bb-20's stylesheet (diffed against
  bb-19 — the siblings do not have it). Four custom accents (DIFFERENT
  from Glaze/19): primary `#3e64ff` (vivid blue), secondary `#5edfff`
  (light cyan), tertiary `#ff4893` (pink), quarternary `#01d28e` (green).
  Social brands: twitter `#69b6f0`, fb `#4f69a2`, dribbble `#ea6294`,
  linkedin `#2884ba`, pinterest `#d03940`. NOT stat cards (Glaze/19, 4px
  radius, #f8f8f8 bg), NOT tinted icon boxes (Tally/16), NOT asymmetric
  paddle (Paddle/18), NOT borderless pills (Pill/17), NOT skew (Slant/05),
  NOT bezel (Bezel/10). This is the SOCIAL-button sibling.
- **Exact structure (1:1 from live DOM), single `section.ftco-section`:**
  1. `div.row.mb-4` > `div.col-md-12` > `h2.heading-section`
     **"Button #10"** (32px Poppins; the ONLY `mb-4` row).
  2. **Pick Your Style** — `div.row.mb-5` > `div.col-md-12` >
     `h2.heading-section > small` "Pick Your Style" (16px) +
     `div.w-100.mb-3` (3 solid `btn-primary`) + `div.w-100` (3
     `btn-outline-primary`): `Default Primary` / `Default with icon`
     (heart, `mr-3`) / icon-only heart.
  3. **Pick Your Color** — `div.row.mb-5` > `div.col-md-12` >
     `h2.heading-section > small` "Pick Your Color" (16px) +
     `div.w-100.mb-3` (4 solid: `Default Primary` / `Default Secondary` /
     `Default Tertiary` / `Default Quarternary`) + `div.w-100` (4 outline).
  4. **Unheaded social grid** — `div.row.mb-5` > `div.col-md-12` (NO
     heading) > `div.row` > 4 × `div.col-md-3`, each 3 full-width
     left-aligned buttons (`btn mb-2 {variant} text-left w-100 mb-md-3`):
     `Twitter` / `Facebook` / `Find us on Dribbble` (logo icons `mr-2`).
     Columns: solid → outline → round → round+outline.
  5. **Social Buttons** — `div.row.mb-5` > `div.col-md-12` >
     `h2.heading-section > small` "Social Buttons" (16px), then 5 ×
     `div.col-md-12.mb-4` brand rows (fb, twitter, linkedin, pinterest,
     dribbble), each 7 buttons: icon-only solid / icon-only round /
     icon-only outline / icon-only round+outline / labeled solid / labeled
     outline / labeled link (`ml-2`). Labels: fb `Share - 8.2k` /
     `Share - 8.5k` / `Share - 8k`; twitter `Connect with Twitter` (×3);
     linkedin `Connect with Linkedin` (×3); pinterest `Pin it - 1k` (×3);
     dribbble `Find us on Dribbble` (×3).
- **61 buttons total**; no navbar, no hero, no images, no footer (add the
  minimal Component Dock footer per repo convention).
- **4-color brand palette (base / hover fill):** primary `#3e64ff`/
  `#002ad7`, secondary `#5edfff`/`#00c6f7`, tertiary `#ff4893`/
  `#e1005c`, quarternary `#01d28e`/`#016c49`. Social: twitter `#69b6f0`,
  fb `#4f69a2`, dribbble `#ea6294`, linkedin `#2884ba`, pinterest
  `#d03940`. White page bg `#ffffff`; black text; generic outline border
  `1px solid rgba(0,0,0,0.1)`.
- **Copy is fixed and minimal:** the labels listed above; no uppercase
  anywhere.
- **Font:** Poppins for body AND headings (`style.css` sets the same
  Poppins-first stack on `body` and `h1–h6`). Body 15px; page header
  32px; block headings 16px; buttons 14px/500. Load Poppins via Google
  Fonts `<link>` in `index.html`.
- **Implementation pointers (Tailwind v4):**
  - One section component (e.g. `UiShowcase`) + building blocks:
    `PageHeader` ("Button #10"), `ButtonRow` (data-driven, reused for
    Pick Your Style and Pick Your Color — a `variant` prop switches
    solid vs outline), `SocialGrid` (the unheaded 4-col grid),
    `BrandButtonRow` (data-driven for the 5 brand rows: brand, labels,
    icons), plus the muted Component Dock footer. No Navbar/Hero — none
    in the reference.
  - Palette in `src/index.css` `@theme`: `--color-primary: #3e64ff`,
    `--color-secondary: #5edfff`, `--color-tertiary: #ff4893`,
    `--color-quarternary: #01d28e` + hover shades
    (`primary-hover #002ad7`, `secondary-hover #00c6f7`,
    `tertiary-hover #e1005c`, `quarternary-hover #016c49`) + social
    brands (`twitter #69b6f0`, `fb #4f69a2`, `dribbble #ea6294`,
    `linkedin #2884ba`, `pinterest #d03940`).
  - Button base: `rounded-[5px] px-4 py-3 text-sm font-medium
shadow-[0_10px_20px_-6px_rgba(0,0,0,0.12)] overflow-hidden relative
transition-all duration-300` (border-width 1px).
  - **The sweep-fill:** an absolutely positioned full-size layer
    `left-[-100%]` behind the content (`-z-10` or `z-[-1]`) that slides
    to `left-0` on hover with `duration-200`; implement as a pseudo-
    element via Tailwind arbitrary variants (e.g.
    `after:absolute after:inset-y-0 after:left-[-100%] after:w-full
after:transition-all after:duration-200 hover:after:left-0` +
    `after:z-[-1]`) or as a child `<span aria-hidden>` layer. Content
    span `relative z-[1]`. Hover fills per variant: solid →
    `hover:after:bg-<color>-hover`; outline-color →
    `hover:after:bg-<color>` + `hover:text-white`; social →
    `hover:after:bg-white` + `hover:text-<brand>`.
  - Variants: `btn-round` → `rounded-[40px]`; generic `btn-outline` →
    `border border-black/10 text-black bg-transparent`; `btn-link` →
    `border-none shadow-none text-black`; outline-{color} →
    `bg-white text-<color> border-<color>`.
  - Rows: `flex flex-wrap gap-y-2` with buttons `mb-2 md:mb-0`; wrapper
    divs `w-full mb-3` (first row) / `w-full` (second). Social grid:
    `grid grid-cols-1 md:grid-cols-4 gap-3` (buttons `w-full text-left
mb-2 md:mb-3`). Brand rows: `flex flex-wrap` with `mb-4` row gap and
    `ml-2` on the link button.
  - Container `max-w-[1140px] mx-auto px-4`; section `py-[7em] md:py-24
bg-white`.
  - Icons: `lucide-react` — Heart, Twitter, Facebook, Dribbble, Linkedin
    (Ionicons heart/logo-twitter/logo-facebook/logo-dribbble/
    logo-linkedin). **Pinterest: lucide has NO brand glyph — use an
    inline SVG of the Pinterest "P" (or closest lucide stand-in) and
    note the substitution in the PR.** Icon gaps: `mr-3` (Default with
    icon), `mr-2` (social grid), `mr-1` (brand rows).
  - `focus-visible` ring per repo convention (reference has none — its
    hover sweep alone is insufficient as an a11y indicator). Icon-only
    buttons need `aria-label` (the reference has empty-text buttons).
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency, no jquery, no Ionicons font.
  - Import `cn()` from `@free-react-templates/ui` (packages/ui — knip
    gate); packages/ui `Button`/`ButtonLink` only where they fit the
    anatomy (the reference button is custom — precedent: hostelry
    imports `cn` from the ui barrel).

## Tasks (implementer checklist)

1. [ ] `feat/template-sweep` branch from latest main
2. [ ] Scaffold `apps/sweep` (copy the simplest existing app; package
       `@free-react-templates/sweep`; `public/CNAME` =
       `sweep.free.componentdock.com`; `"homepage"` =
       `https://sweep.free.componentdock.com`)
3. [ ] `npm install` at repo root so `package-lock.json` registers the
       workspace; verify `grep -c "free-react-templates/sweep"`
       package-lock.json
4. [ ] `vite.config.ts` with `injectUiSource()` (per conventions)
5. [ ] Spec-first: `openspec/specs/template-sweep/spec.md` is the
       contract — Gherkin scenarios map 1:1 to test cases
6. [ ] TDD: write tests (RED) → implement (GREEN) → 100% coverage
       (lines/functions/branches/statements)
7. [ ] Run `scripts/verify-app.sh sweep` until green (typecheck + lint +
       knip + fallow + vitest 100% + build)
8. [ ] Self-review per `docs/self-review.md`
9. [ ] PR to main with description: source template (ColorLib "Bootstrap
       Buttons 20"), real preview URL
       (https://preview.colorlib.com/theme/bb/bootstrap-buttons-20/ —
       default 404s), design tokens used, artifacts kept ("Button #10",
       16px small headings, unheaded social grid before the "Social
       Buttons" heading, "Quarternary"/"Linkedin" spellings), icons
       mapped from Ionicons → lucide-react (+ Pinterest substitution)
10. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
11. [ ] After merge: TEMPLATES.md `[~]` → `[x]` + surge URL
        (`sweep.free.componentdock.com`) + `npm run readme:status`; push
        (mark line 681 — Bootstrap Buttons (20) category; single row, no
        dups)
