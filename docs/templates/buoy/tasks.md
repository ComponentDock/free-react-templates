# Buoy (ColorLib Bootstrap Buttons 11) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Buoy** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 11"). Implementation
> ships on `feat/template-buoy` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 11" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-11/). TEMPLATES.md
  row: line 672 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-11`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-11/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-11/` (HTTP 200,
  18.2KB HTML, `<title>Button #1</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page, which links to it —
  same pattern as Buttons 01–10). Stylesheets: `css/style.css` (3.7KB —
  ftco custom button rules, the token source), `css/bootstrap.min.css`
  (Bootstrap 4 — `.btn` base reset + `.btn-block`), plus an unused
  `fonts/icomoon` glyph font. JS bundle (jquery/popper/bootstrap +
  `js/main.js`) is inert on this page — it is a pure static showcase.
  Computed styles verified in a live browser (2026-08-14): `.btn`
  `border-radius: 4px`, `font-size: 13px`, `padding: 8px 25px`,
  `font-weight: 400`, `border: none`, `letter-spacing: 0.32px` (.02rem),
  `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)` at rest; `.btn-sm` 12px /
  `5px 15px`; `.btn-lg` 16px / `15px 30px`; `.btn-block` display block
  width 100%; `.content` padding `7rem 0`; `col-md-10` text-left; h2
  `mb-5` = 3rem.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-11/`. Mention this in the PR
  description.
- **⚠ Heading-number artifact:** the `h2` renders **"#01 — Bootstrap 4
  Buttons"** (em dash `&mdash;`) and the `<title>` is "Button #1" — the
  number was copy-pasted from the "Bootstrap Buttons 01" sibling and never
  updated (same kind of artifact as Slant/05's "#02"). Render the h2
  EXACTLY as the reference: **"#01 — Bootstrap 4 Buttons"**, em dash
  included. Do NOT "fix" it to "#11". Use the app's own `<title>` (e.g.
  "Buoy — Button Showcase") per repo convention.
- **⚠ Screenshot quirk (outdated asset):** the TEMPLATES.md screenshot
  (`bootstrap-buttons-11.jpg`, 1200×972, captured from the OLD
  `ui-preview.colorlib.com`) shows an OLDER iteration: FLAT buttons with NO
  drop shadows. The LIVE page renders every button with the soft floating
  shadow. The live DOM + CSS is AUTHORITATIVE — the soft shadow IS the
  signature and MUST be implemented (same discrepancy as Bezel/BB 10's
  outdated screenshot).
- **Signature (name source):** every button floats on a soft drop shadow
  `0 15px 30px 0 rgba(0,0,0,0.2)` at rest; on hover the shadow lifts off
  (`box-shadow: none`) and the fill darkens to a fixed per-color shade.
  Text color never changes on hover (white, except Warning/Light which are
  dark). This is what makes the buttons look like buoys floating on the
  page.
- **Not a classic page template:** NO navbar, NO hero, NO imagery, NO
  footer in the original — the entire page is a single-section button
  showcase. The only added element is the mandatory Component Dock
  attribution footer.
- **Structure observed (1:1):** one `div.container.content` (`padding:
7rem 0`) → `row align-items-center justify-content-center` →
  `col-md-10 text-left`. Heading `h2.mb-5` **"#01 — Bootstrap 4
  Buttons"** → `div.d-block.mb-5.d-flex` size row (3 × `div.mb-3.mr-3`:
  centered `<small>` caption `Large`/`Medium`/`Small` above `btn-primary
btn-lg` / `btn-primary` / `btn-primary btn-sm` "Button") → `div class="
mb-3"` (sloppy leading space, as authored) > `div.text-center` >
  centered `<small>` **"Button Colors"** → `div.mb-5` with 18
  `btn mb-3 mr-3 btn-{color}` buttons (Primary, Secondary, Success, Info,
  Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark,
  Black, Purple, Blue, Brown, Blue Gray) → `div.mb-3.mr-3` with centered
  `<small>` **"Full width button"** + `btn btn-primary btn-block`
  "Button".
- **Button anatomy:** `<button class="btn ...">Label</button>` — label is
  a DIRECT text node (NO inner span, NO `::before`/`::after` pseudo-
  elements). All styling is plain properties on `.btn` + per-color rules.
- **Hover/active/focus:** `.btn:hover, .btn:active, .btn:focus` —
  `box-shadow: none` only. Per-color `:hover/:focus` rules set a fixed
  darker `background-color` (see token list below). `btn-light` has NO
  hover rule (Bootstrap default `#f8f9fa` / `#212529` text, unchanged).
  `btn-black` hover is `#000` (no visible change). Pure CSS; no JS.
- **Design tokens (from `style.css` + Bootstrap defaults; rest bg / text /
  hover bg):** page `#fff`; font **Roboto**; heading 20px `#212529`;
  buttons — primary `#007bff` / `#fff` / hover `#006adb`, secondary
  `#6c757d` / `#fff` / `#5b636a`, success `#28a745` / `#fff` / `#218a39`,
  info `#17a2b8` / `#fff` / `#138698`, warning `#ffc107` / `#212529` /
  `#e2aa00`, danger `#dc3545` / `#fff` / `#ca2333`, light `#f8f9fa` /
  `#212529` / (none), orange `#fd7e14` / `#fff` / `#eb6c02`, indigo
  `#6610f2` / `#fff` / `#570bd3`, pink `#e83e8c` / `#fff` / `#e41e79`,
  deep orange `#ffac8e` / `#fff` / `#ff926a`, aqua `#3fc5f0` / `#fff` /
  `#1ebbed`, dark `#393e46` / `#fff` / `#292d32`, black `#000` / `#fff` /
  `#000`, purple `#6f42c1` / `#fff` / `#5f37a8`, blue `#007bff` / `#fff` /
  `#006adb` (same as primary), brown `#a0855b` / `#fff` / `#89724e`, blue
  gray `#3f4d71` / `#fff` / `#323d5a`. Button base: 13px weight 400 /
  `8px 25px`, `border-radius: 4px`, `border: none`, `letter-spacing:
.02rem`, rest shadow `0 15px 30px 0 rgba(0,0,0,0.2)`, `.3s all ease`
  transition, NO text-transform (title-case labels as authored). Sizes:
  `btn-sm` 12px / `5px 15px`, `btn-lg` 16px / `15px 30px`. `.btn-block` =
  `display:block; width:100%`. Section captions = Bootstrap `<small>`
  (12.8px) in centered `div.text-center`. Spacing: `mb-5` = 3rem,
  `mb-3 mr-3` = 1rem.
- **Recreation notes:**
  - Tailwind v4 tokens: one `ShowcaseButton` component is enough — a
    `<button>` with `rounded-[4px] text-[13px] font-normal px-[25px]
py-2 tracking-[0.02rem] border-none` + the color token + the shadow:
    `shadow-[0_15px_30px_0_rgba(0,0,0,0.2)] hover:shadow-none` and hover
    darken `hover:bg-<hover-shade>` (or define `--color-*` tokens for the
    hover shades too, e.g. `--color-primary-hover: #006adb`, and use
    `hover:bg-primary-hover`).
  - The KEY fidelity points vs siblings: (1) REST shadow present — this is
    what makes it Buoy, do not ship flat buttons (screenshot is outdated);
    (2) hover = shadow-off + DARKEN only — no white fill inversion
    (Fillet), no rings (Bezel), no skew/uppercase (Slant); (3) weight 400
    — NOT bold; (4) 13px base / 12px sm (NOT 14px/10px like Fillet);
    (5) `letter-spacing: .02rem`; (6) `border: none`.
  - Warning text is `#212529` (dark), Light text is `#212529` (dark) —
    all others white.
  - Buttons are `<button>` elements (not links) in the reference.
  - `focus-visible` ring per repo convention (the reference's `:focus`
    only removes the shadow; a11y focus indicator still needed).
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency; no jquery. NO `text-transform: uppercase` —
    keep labels title-case as written. NO inner `<span>`.
  - ONE section only — a single `KitSection`/`Showcase` component; no
    variant parameter needed (no Solid/Outline split).
  - Mobile: the reference's `7rem` vertical padding is tall on phones —
    reduce to `py-16`/`py-12`-ish on small screens; keep `col-md-10` →
    full width below md; rows wrap naturally (`flex-wrap`).
  - Icons: none on this page — plain text labels only (no lucide needed).
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.

## Tasks (implementer checklist)

1. [ ] `feat/template-buoy` branch from latest main
2. [ ] Scaffold app `apps/buoy` (copy simplest existing app; rename
       package to `@free-react-templates/buoy`; `npm install` at root
       BEFORE committing so `package-lock.json` registers the workspace;
       `public/CNAME` = `buoy.free.componentdock.com`; `"homepage"` =
       `https://buoy.free.componentdock.com`; vite.config.ts keeps
       `injectUiSource()`)
3. [ ] Write spec-driven tests first (TDD, 100% coverage required):
       page structure, heading text (em dash, "#01" artifact — do NOT
       fix to "#11"), size row, color row (18 buttons + palette incl.
       Light `#f8f9fa` dark text), full-width button, rest shadow
       `0 15px 30px 0 rgba(0,0,0,0.2)`, hover (shadow → none + darken
       to fixed shade; text unchanged), focus-visible, responsive, footer
4. [ ] Implement `src/App.tsx` + `src/components/` (e.g. `KitSection.tsx`,
       `ShowcaseButton.tsx`; `Navbar`/`Hero` not needed — none in
       reference; add the muted Component Dock footer)
5. [ ] Tokens in `src/index.css` `@theme` (see design tokens list — all
       18 colors + 17 hover shades; Light is `#f8f9fa`, NOT `#dae0e5`
       like Bezel)
6. [ ] `scripts/verify-app.sh buoy` green (typecheck + lint + vitest 100% + build); `npm run spec:validate` for `template-buoy`
7. [ ] PR: "feat: add Buoy (ColorLib Bootstrap Buttons 11 recreation)"
       — description MUST include: source template + preview URL (note the
       `/bb/` quirk, the "#01" heading artifact, AND the
       screenshot-vs-live shadow discrepancy), design tokens used, what
       differs (renames, placeholders)
8. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
9. [ ] After merge: TEMPLATES.md "Bootstrap Buttons 11" row (line 672)
       `[~]` → `[x]` + `https://buoy.free.componentdock.com` + `npm run
    readme:status`; push
