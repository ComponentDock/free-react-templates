# Swell (ColorLib Bootstrap Buttons 04) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Swell** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 04"). Implementation
> ships on `feat/template-swell` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 04" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-04/). TEMPLATES.md
  row: line 665 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-04`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-04/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-04/` (HTTP 200,
  18.2KB HTML, `<title>Buttons #4</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page, which links to it —
  same pattern as Palette/Bootstrap Buttons 01, Toggle/02 and Float/03).
  Stylesheets: `css/style.css` (4.7KB — ftco custom button rules, the token
  source), `css/bootstrap.min.css` (Bootstrap 4 — rest-state colors +
  `.btn-block`), plus an unused `fonts/icomoon` glyph font. JS bundle
  (jquery/popper/bootstrap + `js/main.js`) is inert on this page — it is a
  pure static showcase. Screenshot (`bootstrap-buttons-04.jpg`, 1200×972)
  browser-verified 2026-08-14: white page, dark "#04 — Bootstrap 4 Buttons"
  heading, three blue size buttons (Large/Medium/Small captions, uppercase
  "BUTTON" labels), "Button Colors" caption + 18 colored solid buttons
  (~3 rows, 4px rounded corners, subtle shadows), "Full width button"
  caption + wide blue block button. The screenshot shows the whole page
  (single 100vh screen).
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-04/`. Mention this in the PR
  description.
- **⚠ Heading quirk:** the page `<title>` is "Buttons #4" but the visible
  `h2` heading renders the full "#04 — Bootstrap 4 Buttons" (em dash
  `&mdash;`). Fidelity mandate: render the h2 text exactly, em dash
  included.
- **⚠ Single-section quirk:** unlike the 03 sibling (Float — two 100vh
  sections, Solid + Outline), THIS template is ONE `100vh` section with 18
  SOLID buttons only. No outline variants, no `.bg-float`/`.text` inner
  spans — buttons are plain `<button class="btn ...">Button</button>`.
  The hover wash lives on a `:before` pseudo-element.
- **⚠ Not a classic page template:** there is NO navbar, NO hero, NO
  imagery, NO footer in the original — the entire page is a single-section
  button showcase. Fidelity = section order, exact button labels/variants,
  the 18-color palette, paddings/radii/shadows, uppercase rendering, and
  the swell hover. The only added element is the mandatory Component Dock
  attribution footer.
- **Structure observed (1:1):** one `div.container.content` (`height:
100vh`) → `row align-items-center content justify-content-center` →
  `col-md-10 text-left`. Heading `h2.mb-5` **"#04 — Bootstrap 4 Buttons"**
  → `div.d-block.mb-5 d-flex` size row (3 × `div.mb-3.mr-3`: centered
  `<small>` caption `Large`/`Medium`/`Small` above `btn-primary btn-lg` /
  `btn-primary` / `btn-primary btn-sm` "Button") → centered `<small>`
  **"Button Colors"** → `div.mb-5` with 18 `btn mb-3 mr-3 btn-{color}`
  buttons (Primary, Secondary, Success, Info, Warning, Danger, Light,
  Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue,
  Brown, Blue Gray) → centered `<small>` **"Full width button"** +
  `btn btn-primary btn-block` "Button".
- **Button anatomy:** `<button class="btn ...">Button</button>` — plain
  text label, NO spans. Base `.btn` (style.css wins over Bootstrap): 12px
  font, `8px 25px` padding, `border-radius: 4px` (the block declares 4px →
  0px → 4px; the LAST declaration wins — the intermediate 0px is dead),
  `border: none`, `letter-spacing: .03rem`, `position: relative`,
  `overflow: hidden`, `text-transform: uppercase`, `box-shadow: 0 2px 5px
-1px rgba(0,0,0,.2)` (removed on `:active`/`:focus`). Sizes: `.btn-sm`
  11px/`5px 15px`, `.btn-lg` 16px/`15px 30px`. `.btn-block` =
  `display:block; width:100%`.
- **Signature hover (name source):** `.btn:before` — `position: absolute;
content: ""; background: rgba(255,255,255,.2); height: 0%; bottom: 0;
left: 0; width: 100%; transition: .2s all ease-in-out`. `.btn:hover:before
{ height: 100%; }` — a translucent white wash rises from the button's
  bottom edge to cover the fill (the "swell"). Standard Bootstrap colors
  keep their bg on hover (`background-color: <color> !important`); custom
  colors keep white text. Pure CSS; no JS.
- **Design tokens (from `style.css` — ftco overrides the Bootstrap
  defaults):** page `#fff`; font **Roboto**; heading 20px Roboto dark;
  buttons — primary `#007bff`, secondary `#6c757d`, success `#28a745`,
  info `#17a2b8`, warning `#ffc107` (DARK text `#212529`), danger
  `#dc3545`, light `#f8f9fa` at rest (DARK text `#212529`; hover bg
  `#dae0e5` per style.css), orange `#fd7e14`, indigo `#6610f2`, pink
  `#e83e8c`, deep orange `#ffac8e`, aqua `#3fc5f0`, dark `#393e46`, black
  `#000`, purple `#6f42c1`, blue `#007bff` (same as primary), brown
  `#a0855b`, blue gray `#3f4d71` — all white text except Warning/Light.
  Section captions = Bootstrap `<small>` (12.8px) in centered
  `div.text-center`. Spacing: `mb-5` = 3rem, `mb-3 mr-3` = 1rem.
- **Recreation notes:**
  - Implement the wash with a real element or Tailwind pseudo support: a
    button wrapper with `relative overflow-hidden` + an absolute
    `bottom-0 left-0 w-full h-0 bg-white/20 transition-all duration-200
ease-in-out group-hover:h-full` overlay (Tailwind `group` on the
    button; `duration-200 ease-in-out` matches `.2s all ease-in-out`). Do
    NOT use `:before` with arbitrary Tailwind if a child span is simpler —
    either is fine as long as the visual matches.
  - Buttons are `<button>` elements (not links) in the reference. Use
    `uppercase`, `rounded` (4px), `shadow` (`0 2px 5px -1px
rgb(0 0 0 / 0.2)`), no border, `tracking-wide` for `.03rem`
    letter-spacing.
  - `focus-visible` ring per repo convention (reference drops shadow on
    `:focus` but has only Bootstrap's default outline).
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency; no jquery.
  - ONE section only — a single `KitSection`/`Showcase` component; no
    variant parameter needed (no Solid/Outline split, unlike Float).
  - Mobile: relax the reference's fixed `100vh` (use `min-h-screen` or
    auto) so content never clips; keep `col-md-10` → full width below md.
  - Icons: none on this page — plain text labels only (no lucide needed).
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.

## Tasks (implementer checklist)

1. [ ] `feat/template-swell` branch from latest main
2. [ ] Scaffold app `apps/swell` (copy simplest existing app; rename
       package to `@free-react-templates/swell`; `npm install` at root
       BEFORE committing so `package-lock.json` registers the workspace;
       `public/CNAME` = `swell.free.componentdock.com`; `"homepage"` =
       `https://swell.free.componentdock.com`; vite.config.ts keeps
       `injectUiSource()`)
3. [ ] Write spec-driven tests first (TDD, 100% coverage required):
       page structure, heading text (em dash), size row, color row (18
       buttons + palette + dark-text Warning/Light), full-width button,
       swell hover wash (0%→100% height, .2s ease-in-out), shadow removal
       on active/focus, focus-visible, responsive, footer
4. [ ] Implement `src/App.tsx` + `src/components/` (e.g. `KitSection.tsx`,
       `SwellButton.tsx`; `Navbar`/`Hero` not needed — none in reference;
       add the muted Component Dock footer)
5. [ ] Tokens in `src/index.css` `@theme` (see design tokens list)
6. [ ] `scripts/verify-app.sh swell` green (typecheck + lint + vitest 100% + build); `npm run spec:validate` for `template-swell`
7. [ ] PR: "feat: add Swell (ColorLib Bootstrap Buttons 04 recreation)"
       — description MUST include: source template + preview URL (note the
       `/bb/` quirk), design tokens used, what differs (renames,
       placeholders)
8. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
9. [ ] After merge: TEMPLATES.md "Bootstrap Buttons 04" row (line 665)
       `[~]` → `[x]` + `https://swell.free.componentdock.com` + `npm run
    readme:status`; push
