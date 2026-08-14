# Paddle (ColorLib Bootstrap Buttons 18) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Paddle** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 18"). Implementation
> ships on `feat/template-paddle` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 18" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-18/). TEMPLATES.md
  row: line 679 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-18`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-18/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-18/` (HTTP 200,
  24.9KB HTML, `<title>Button 08</title>`; the nested `/bb/` subpath is
  the same pattern as Palette/01, Toggle/02, Float/03, Swell/04, Slant/05,
  Bezel/10, Tally/16 and Pill/17). Stylesheets: `css/ionicons.min.css`
  (icon font — the logo/heart/checkbox glyphs; do NOT copy — map to
  lucide-react), `css/style.css` (229KB = Bootstrap 4.3.1 + custom ftco
  rules; the custom tail of the file is the token source). JS bundle
  (jquery 3.3.1/popper/bootstrap.min.js/`js/main.js`) drives ONLY the
  dropdowns (Bootstrap dropdown plugin); everything else is a pure static
  showcase, hover is CSS-only. Computed styles verified in a live browser
  (2026-08-14): `.btn` `border-radius: 0px 40px` (asymmetric paddle: TL 0 /
  TR 40px / BR 0 / BL 40px), 14px/`12px 20px`, weight 500, shadow
  `0 10px 20px -6px rgba(0,0,0,0.12)`; hover shadow
  `0 12px 20px -6px rgba(0,0,0,0.21)` (deepens, no press-down — opposite
  of Pill/17); `.btn-sm` 12px/`5px 20px`, `.btn-lg` 16px/`17px 24px`
  (both keep the paddle radius); `.btn-round` `40px`; h2 32px, h2>small
  16px; body Poppins 15px; section padding 7em 0; active pagination
  `#4ba1fa`.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-18/`. Mention this in the PR
  description.
- **✅ Heading-number ARTIFACT (keep it):** the slug is
  `bootstrap-buttons-18` but the `<title>` says "Button 08" and the `h2`
  renders **"Button #08"** — a copy-paste artifact from an earlier sibling
  (same artifact class as Tally/16 "Button #06" and Pill/17 "#02 — Bootstrap
  4 Buttons"). Fidelity mandate = render the heading EXACTLY as the
  reference renders it ("Button #08"); do NOT "fix" it to #18.
- **✅ Subsection-heading artifact (keep it):** every block heading is
  `h2.heading-section` containing ONLY a `<small>` — the custom CSS
  `.heading-section { font-size: 32px }` is overridden by
  `.heading-section small { font-size: 16px }`, so the ten block headings
  ("Tags & Pointers" … "Social Buttons") actually render at **16px**, while
  the page header "Button #08" (no small) renders at 32px. Recreate that
  sizing difference.
- **✅ Other copy artifacts (keep them):** "Radios Buttons" (no "Button" on
  the plural); "Default Gradient" is a FLAT lime `#a7e52d` (no real
  gradient); group buttons repeat `Button 1`/`Button 2` on both ends of
  each group; the w-100 social grid (4 col-md-3 columns) has NO heading —
  the "Social Buttons" heading belongs to the share-rows block below it;
  dropdown toggles all read "Dropdown button".
- **✅ Screenshot matches live:** the TEMPLATES.md screenshot
  (`bootstrap-buttons-18.jpg`, 1200×972) shows the SAME white page,
  "Button #08" heading, tag/pill/paddle buttons, blue active pagination
  circle, and no navbar/footer as the live render — no structural
  discrepancy (only nuance: the static screenshot reads slightly flatter;
  the live CSS shadows are authoritative).
- **Signature:** ASYMMETRIC PADDLE buttons — `border-radius: 0 40px 0 40px`
  (top-right + bottom-left rounded, top-left + bottom-right square),
  `border-width: 1px`, weight 500, soft shadow that DEEPENS on hover (no
  press-down), plus three variant shapes: full pill `btn-round` (40px),
  ribbon tag `btn-tag` (2px radius + white dot + triangle pointer), and
  ghost `btn-outline` (1px `rgba(0,0,0,0.1)` border, black text). The
  most complete showcase of the series: buttons + pagination + dropdowns +
  groups + checkboxes + radios + socials. NOT borderless pills (that's
  Pill/17), NOT skew (Slant/05), NOT bezel (Bezel/10), NOT white-wash
  (Swell/04), NOT stat cards (Tally/16).
- **Exact structure (1:1 from live DOM), single section `#buttons`:**
  1. `section.ftco-section#buttons` (padding 7em 0) > `div.container` >
     `div.row.mb-4` > `div.col-md-12` > `h2.heading-section`
     **"Button #08"** (32px Poppins; only `mb-4` row — blocks below are
     `mb-5`).
  2. **Tags & Pointers** — h2>small + 4 buttons (`mb-2 mb-md-0 mr-3`/
     `mr-4`): `New` (`btn-secondary btn-sm btn-round` red pill), `Sale`
     (`btn-tertiary btn-sm btn-tag` orange ribbon), `Read more`
     (`btn-primary btn-sm` + `<i class="icon-effect
ion-ios-arrow-round-forward">` hidden arrow), `278,645`
     (`btn-outline btn-sm` ghost).
  3. **Pick Your Style** — 5 buttons: `Default` (primary), `Default`
     (outline), `Default with icon` (`btn-primary btn-round` + heart
     `mr-1`), `Like` (primary + heart + `<span class="sr-only">`),
     `Default with icon` (outline + heart `mr-1`).
  4. **Pick Your Size** — two `div.d-block.mb-3` rows: primary
     sm/base/lg then outline sm/base/lg; labels `Default Small` /
     `Default Regular` / `Default Large`.
  5. **Pick Your Color** — 4 buttons: `Default Primary` (`#4ba1fa`),
     `Default Secondary` (`#f9243f`), `Default Tertiary` (`#fc6946`),
     `Default Gradient` (`#a7e52d` flat).
  6. **Pagination Button** — `.block-27` ul: `<` a, `1` span.active,
     `2`..`5` a, `>` a; 40px circles, `1px solid #e6e6e6`, gray text;
     active = `#4ba1fa` bg + white text.
  7. **Dropdown Buttons** — col-md-12 h2 + 4 × col-md-3 > div.dropdown >
     button `btn btn-block btn-round dropdown-toggle` ("Dropdown button",
     primary/secondary/tertiary/quarternary) + div.dropdown-menu with
     `Action` / `Another action` / `Something else here`.
  8. **Group Buttons** — col-md-12 h2 + 2 × col-md-6 > div.btn-group
     .btn-block: `Button 1` / `Outline Button` / `Button 1` (primary,
     outline-primary) and `Button 2` / `Outline Button` / `Button 2`
     (secondary, outline-secondary).
  9. **Checkboxes + Radios Buttons** — ONE row.mb-5, TWO col-md-4 columns
     (no col-md-12 wrapper): checkboxes
     `div.checkbox.checkbox-{primary,secondary,tertiary,quarternary,dark}`
     > label > `input.styled[type=checkbox] checked` + span (labels
     > Primary/Success/Danger/Warning/Disabled — Disabled is checked AND
     > disabled); radios `div.radio.radio-{same}` > `input[type=radio]
checked` (each its own name group) + label (same labels).
  10. **Social w-100 grid (UNHEADED)** — col-md-12 > div.row > 4 ×
      col-md-3 (solid / `btn-outline` / `btn-round` / `btn-round
btn-outline`), each with `btn-twitter`/`btn-fb`/`btn-dribbble`
      `text-left w-100 mb-3` (logo icon `mr-2`): `Twitter`, `Facebook`,
      `Find us on Dribbble`.
  11. **Social Buttons (headed)** — col-md-12 h2>small "Social Buttons" +
      5 × col-md-12.mb-4 rows, each 7 buttons: icon-only solid, icon-only
      round, icon-only outline, icon-only round+outline, solid text,
      outline text, link text — Facebook `Share - 8.2k`/`8.5k`/`8k`,
      Twitter `Connect with Twitter` ×3, Linkedin `Connect with Linkedin`
      ×3, Pinterest `Pin it - 1k` ×3, Dribbble `Find us on Dribbble` ×3.
- **4-color brand palette (base / hover):** primary `#4ba1fa`/`#1987f9`,
  secondary `#f9243f`/`#e40622` (outline hover bg `#fa3d55`), tertiary
  `#fc6946`/`#fb4014`, quarternary `#a7e52d`/`#a7e52d`. Social: fb
  `#4f69a2`, twitter `#69b6f0`, linkedin `#2884ba`, pinterest `#d03940`,
  dribbble `#ea6294`. Dark `#343a40`. Outline: `1px solid
rgba(0,0,0,0.1)`, `#000` text, hover text `rgba(0,0,0,0.5)` + border
  `rgba(0,0,0,0.05)`. White text on all solid buttons; page text
  `#212529`.
- **Copy is fixed and minimal:** the labels listed above; no uppercase
  anywhere.
- **Font:** Poppins for body AND headings (`style.css` sets the same
  Poppins-first stack on `body` and `h1–h6`). Body 15px; page header 32px;
  block headings 16px; dropdown items 13px. Load Poppins via Google Fonts
  `<link>` in `index.html`.
- **Implementation pointers (Tailwind v4):**
  - One section component (e.g. `KitSection` / `UiShowcase`) + building
    blocks: `TagPointers` (4 buttons), `StyleVariants` (5), `SizeMatrix`
    (2 trios), `ColorRow` (4), `PaginationRow`, `DropdownRow` (4
    toggles + menus, useState open index), `GroupRow` (2 groups),
    `CheckboxList` + `RadioList` (data arrays), `SocialGrid` (4×3
    unheaded), `SocialRows` (5×7 data-driven), plus the muted Component
    Dock footer. No Navbar/Hero — none in the reference.
  - Palette in `src/index.css` `@theme`: `--color-primary: #4ba1fa`,
    `--color-secondary: #f9243f`, `--color-tertiary: #fc6946`,
    `--color-quarternary: #a7e52d`, `--color-dark: #343a40` + hover
    shades (`primary-hover #1987f9`, `secondary-hover #e40622`,
    `tertiary-hover #fb4014`) + the five social colors + outline border
    `rgba(0,0,0,0.1)`.
  - Button base: `rounded-[0_40px_0_40px] border px-5 py-3 text-sm
font-medium shadow-[0_10px_20px_-6px_rgba(0,0,0,0.12)]
transition-all duration-300 ease-in-out` + `hover:shadow-[0_12px_20px_-6px_rgba(0,0,0,0.21)]`
    - `hover:bg-<color>-hover` (mirrors `.3s all ease` + deepening
      shadow). NOTE: use arbitrary rounded value — Tailwind's `rounded-*`
      utilities won't express the asymmetric 4-corner radius.
  - Variants: round `rounded-[40px]`; tag `rounded-[2px] relative` +
    white dot (`after`/`before` or a nested span) + triangle
    (`border-l-[10px] border-y-[14px] border-l-tertiary` style trick);
    outline `border-black/10 bg-transparent text-black hover:text-black/50`;
    link `border-0 bg-transparent text-black shadow-none`.
  - Sizes: lg `text-base px-6 py-[17px]`, sm `text-xs px-5 py-[5px]`
    (both keep the paddle radius).
  - Block: `block w-full` (dropdown toggles, group buttons,
    `w-100` socials). Group buttons: `inline-flex` with joined corners
    (middle button squared both sides — Bootstrap btn-group behavior).
  - Checkbox/radio: hidden native input (`sr-only`/`appearance-none` +
    `peer`) + visible box drawn with lucide `Check`/`Square` or CSS, brand
    color per variant; radio = 18px ring + 12px fill dot with scale-in
    transition; Disabled = `disabled` + dimmed.
  - Dropdown menu: `absolute w-full border-0 bg-white
shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)]` with items 13px
    `text-black/70 hover:bg-black/5`; manage open state in React (one at
    a time); close on outside click.
  - Icons: `lucide-react` — Heart, ArrowRight (Read more icon-effect:
    `opacity-0 group-hover:opacity-100 group-hover:ml-2.5 transition-all`),
    Twitter/Facebook/Linkedin/Pinterest/Dribbble logos (lucide has
    `Twitter`, `Facebook`, `Linkedin`; Pinterest/Dribbble → use a generic
    icon or a simple `span` glyph — NO icon-font assets), Check/Square
    for checkboxes. Icon-only buttons get `aria-label`.
  - `focus-visible` ring per repo convention (reference only deepens the
    shadow on focus — insufficient as an a11y indicator).
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency, no jquery, no Ionicons font.
  - Import `cn()` from `@free-react-templates/ui` (packages/ui — knip
    gate); packages/ui `Button`/`ButtonLink` only where they fit the
    paddle anatomy (the reference button is custom — precedent: hostelry
    imports `cn` from the ui barrel).

## Tasks (implementer checklist)

1. [ ] `feat/template-paddle` branch from latest main
2. [ ] Scaffold `apps/paddle` (copy the simplest existing app; package
       `@free-react-templates/paddle`; `public/CNAME` =
       `paddle.free.componentdock.com`; `"homepage"` =
       `https://paddle.free.componentdock.com`)
3. [ ] `npm install` at repo root so `package-lock.json` registers the
       workspace; verify `grep -c "free-react-templates/paddle"
   package-lock.json`
4. [ ] `vite.config.ts` with `injectUiSource()` (per conventions)
5. [ ] Spec-first: this spec is the contract — Gherkin scenarios map 1:1
       to test cases
6. [ ] TDD: write tests (RED) → implement (GREEN) → 100% coverage
       (lines/functions/branches/statements)
7. [ ] Run `scripts/verify-app.sh paddle` until green (typecheck + lint +
       knip + fallow + vitest 100% + build)
8. [ ] Self-review per `docs/self-review.md`
9. [ ] PR to main with description: source template (ColorLib "Bootstrap
       Buttons 18"), real preview URL
       (https://preview.colorlib.com/theme/bb/bootstrap-buttons-18/ —
       default 404s), design tokens used, artifacts kept ("Button #08",
       16px subsection headings, "Radios Buttons", flat "Default
       Gradient", repeated group labels, unheaded social grid), icons
       mapped from Ionicons → lucide-react
10. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
11. [ ] After merge: TEMPLATES.md `[~]` → `[x]` + surge URL
        (`paddle.free.componentdock.com`) + `npm run readme:status`; push
        (mark line 679 — Bootstrap Buttons (20) category; single row, no
        dups)
