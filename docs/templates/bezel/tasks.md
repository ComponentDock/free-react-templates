# Bezel (ColorLib Bootstrap Buttons 10) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Bezel** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 10"). Implementation
> ships on `feat/template-bezel` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 10" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-10/). TEMPLATES.md
  row: line 671 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-10`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-10/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-10/` (HTTP 200,
  18.2KB HTML, `<title>Button #10</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page, which links to it —
  same pattern as Palette/Buttons 01, Toggle/02, Float/03, Swell/04 and
  Slant/05). Stylesheets: `css/style.css` (5.3KB — ftco custom button
  rules, the token source), `css/bootstrap.min.css` (Bootstrap 4 — `.btn`
  base reset + `.btn-block`), plus an unused `fonts/icomoon` glyph font.
  JS bundle (jquery/popper/bootstrap + `js/main.js`) is inert on this
  page — it is a pure static showcase. Computed styles verified in a live
  browser (2026-08-14): `.btn` `border-radius: 0px`, `background:
transparent`, `color: rgb(0,0,0)`, 14px bold / `8px 25px` (medium);
  `::before` inset 3px, `background: #fff`, `z-index: -1`, `border: 1px
solid #007bff`; `::after` `z-index: -2`, `border: 1px solid #007bff`,
  transparent at rest; sm 10px/`5px 15px`, lg 16px/`15px 30px`; `.content`
  padding `7rem 0` (NOT 100vh); `col-md-10` = 975px wide, text-left; h2
  `mb-5` = 3rem.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-10/`. Mention this in the PR
  description.
- **✅ No heading-number artifact:** the `h2` renders **"#10 — Bootstrap 4
  Buttons"** (em dash `&mdash;`) and the `<title>` is "Button #10" — the
  number correctly matches the slug (unlike the 05 sibling's "#02"
  copy-paste artifact). Render the h2 EXACTLY as "#10 — Bootstrap 4
  Buttons", em dash included. Use the app's own `<title>` (e.g. "Bezel —
  Button Showcase") per repo convention.
- **⚠ Screenshot quirk (outdated asset):** the TEMPLATES.md screenshot
  (`bootstrap-buttons-10.jpg`, 1200×972) shows an OLDER iteration: COLORED
  text matching each button's border color (Bootstrap outline-button
  look) and a single-border read. The LIVE page renders every button with
  BLACK text and the DOUBLE-ring bezel frame. The live DOM + CSS is
  AUTHORITATIVE — black text + double frame IS the signature and MUST be
  implemented. The static screenshot simply predates the current
  `style.css`.
- **⚠ Corner-shape note:** two vision passes described the buttons as
  "slightly rounded", but the computed style is `border-radius: 0px` —
  the buttons are SQUARE (the perceived roundness is a corner artifact of
  the 1px outer ring + 3px-inset inner ring + anti-aliasing). CSS wins.
- **⚠ Single-section quirk:** like the 05 sibling (Slant), THIS template
  is ONE section with 18 frame buttons only. No outline variants. But
  unlike Slant: buttons are PLAIN `<button>Label</button>` (NO inner
  `<span>`, NO skew transform), the section uses `padding: 7rem 0` (NOT
  `100vh`), there is NO diagonal hover shadow, and there is NO
  `text-transform: uppercase` (labels render title-case: "Button",
  "Primary", ...).
- **⚠ Not a classic page template:** there is NO navbar, NO hero, NO
  imagery, NO footer in the original — the entire page is a single-section
  button showcase. Fidelity = section order, exact button labels/variants,
  the 18-color palette, square corners, black text everywhere, and the
  double-ring bezel frame with its hover fill. The only added element is
  the mandatory Component Dock attribution footer.
- **Structure observed (1:1):** one `div.container.content` (`padding:
7rem 0`) → `row align-items-center justify-content-center` →
  `col-md-10 text-left`. Heading `h2.mb-5` **"#10 — Bootstrap 4
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
  a DIRECT text node (NO inner span). The double frame is built purely
  from `::before`/`::after` pseudo-elements.
- **Signature bezel frame (name source):** `.btn { position: relative;
border: none; background: transparent !important; color: #000
!important; border-radius: 0px; }` — square transparent box, black text.
  `::before`: absolute, inset 3px all sides, `background: #fff`,
  `z-index: -1`, `border: 1px solid <color>` (white panel + INNER ring).
  `::after`: absolute, full-bleed, `z-index: -2`, `border: 1px solid
<color>` (OUTER ring at the button edge). Both transition `.3s all
ease`. On hover/focus `::after` background fills with `<color>` — the
  3px band between the rings becomes a solid colored bezel; the white
  panel, rings, and black text stay unchanged. No shadow, no bg change on
  the button itself, no transform.
- **Hover/active/focus:** `.btn:hover, .btn:active, .btn:focus` —
  `box-shadow: none; color: #000` (black text guaranteed in every state).
  The ONLY visual change is the `::after` color fill. Pure CSS; no JS.
- **Design tokens (from `style.css` — ftco overrides the Bootstrap
  defaults; ring color = hover/focus fill):** page `#fff`; font **Roboto**;
  heading 20px Roboto dark; buttons — primary `#007bff`, secondary
  `#6c757d`, success `#28a745`, info `#17a2b8`, warning `#ffc107`, danger
  `#dc3545`, light `#dae0e5` (**CUSTOM — not Bootstrap's `#f8f9fa`**),
  orange `#fd7e14`, indigo `#6610f2`, pink `#e83e8c`, deep orange
  `#ffac8e`, aqua `#3fc5f0`, dark `#393e46`, black `#000`, purple
  `#6f42c1`, blue `#007bff` (same as primary), brown `#a0855b`, blue gray
  `#3f4d71`. ALL button text black `#000` (no white-text exceptions).
  Button base: 14px bold / `8px 25px`, `border-radius: 0px` (LAST
  declaration wins — intermediate `4px` is dead), `border: none`,
  transparent bg, `.3s all ease` transition, NO letter-spacing, NO shadow.
  Sizes: `btn-sm` 10px/`5px 15px`, `btn-lg` 16px/`15px 30px`. `.btn-block`
  = `display:block; width:100%`. Section captions = Bootstrap `<small>`
  (12.8px) in centered `div.text-center`. Spacing: `mb-5` = 3rem,
  `mb-3 mr-3` = 1rem.
- **Recreation notes:**
  - Implement the bezel with Tailwind arbitrary properties on a button
    wrapper, or a tiny CSS rule — the cleanest React approach: one
    `BezelButton` component that renders a `<button>` with `relative`,
    `bg-transparent`, `text-black`, `rounded-none` (0px), and two
    pseudo-element rings via CSS classes (Tailwind arbitrary variants
    `before:absolute before:inset-[3px] before:bg-white
before:z-[-1] before:border before:border-<color>` and
    `after:absolute after:inset-0 after:z-[-2] after:border
after:border-<color>` + `hover:after:bg-<color>`). Tailwind v4
    supports `before:`/`after:` variants on the element — verify the
    generated CSS contains both rings (`grep -- "--color-<token>:"` in
    the built CSS per the clobbered-index.css pitfall).
  - z-index layering matters: `::before` z −1 (white panel, ON TOP of
    `::after`), `::after` z −2 (outer ring). Button content (black label)
    renders above both (transparent button bg).
  - Hover: `transition-all duration-300 ease-in-out` (`.3s all ease`);
    hover = `after:bg-<color>` fill only — NO shadow, NO bg change, NO
    white wash, NO skew.
  - Buttons are `<button>` elements (not links) in the reference.
    `rounded-none` for the 0px radius. No border utility on the button
    itself (the rings are pseudo-elements).
  - `focus-visible` ring per repo convention (reference fills the bezel
    on `:focus` but that is not a sufficient a11y focus indicator).
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency; no jquery. NO `text-transform: uppercase` —
    keep labels title-case as written. NO inner `<span>` (that's Slant's
    anatomy — not needed here).
  - ONE section only — a single `KitSection`/`Showcase` component; no
    variant parameter needed (no Solid/Outline split).
  - Mobile: the reference's `7rem` vertical padding is tall on phones —
    reduce to `py-16`/`py-12`-ish on small screens; keep `col-md-10` →
    full width below md; rows wrap naturally (`flex-wrap`).
  - Icons: none on this page — plain text labels only (no lucide needed).
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.

## Tasks (implementer checklist)

1. [ ] `feat/template-bezel` branch from latest main
2. [ ] Scaffold app `apps/bezel` (copy simplest existing app; rename
       package to `@free-react-templates/bezel`; `npm install` at root
       BEFORE committing so `package-lock.json` registers the workspace;
       `public/CNAME` = `bezel.free.componentdock.com`; `"homepage"` =
       `https://bezel.free.componentdock.com`; vite.config.ts keeps
       `injectUiSource()`)
3. [ ] Write spec-driven tests first (TDD, 100% coverage required):
       page structure, heading text (em dash, "#10"), size row, color row
       (18 buttons + palette incl. Light `#dae0e5`), full-width button,
       bezel frame (square 0px radius, black text, `::before` white panel
       inset 3px + `::after` outer ring), hover/focus fill (no shadow,
       black text persists), focus-visible, responsive, footer
4. [ ] Implement `src/App.tsx` + `src/components/` (e.g. `KitSection.tsx`,
       `BezelButton.tsx`; `Navbar`/`Hero` not needed — none in reference;
       add the muted Component Dock footer)
5. [ ] Tokens in `src/index.css` `@theme` (see design tokens list —
       include all 18 ring colors; Light is `#dae0e5`, NOT `#f8f9fa`)
6. [ ] `scripts/verify-app.sh bezel` green (typecheck + lint + vitest 100% + build); `npm run spec:validate` for `template-bezel`
7. [ ] PR: "feat: add Bezel (ColorLib Bootstrap Buttons 10 recreation)"
       — description MUST include: source template + preview URL (note the
       `/bb/` quirk AND the screenshot-vs-live black-text/double-frame
       discrepancy), design tokens used, what differs (renames,
       placeholders)
8. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
9. [ ] After merge: TEMPLATES.md "Bootstrap Buttons 10" row (line 671)
       `[~]` → `[x]` + `https://bezel.free.componentdock.com` + `npm run
    readme:status`; push
