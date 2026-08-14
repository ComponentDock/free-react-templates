# Float (ColorLib Bootstrap Buttons 03) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Float** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 03"). Implementation
> ships on `feat/template-float` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 03" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-03/). TEMPLATES.md
  row: line 664 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-03`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-03/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-03/` (HTTP 200,
  23.5KB HTML, `<title>Button #3</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page, which links to it —
  same pattern as Palette/Bootstrap Buttons 01 and Toggle/Bootstrap
  Buttons 02). Stylesheets: `css/style.css` (11KB — ftco custom button
  rules, the token source), `css/bootstrap.min.css` (Bootstrap 4), plus an
  unused `fonts/icomoon` glyph font. JS bundle (jquery/popper/bootstrap +
  `js/main.js`) is inert on this page — it is a pure static showcase.
  Screenshot (`bootstrap-buttons-03.jpg`, 1200×972) browser-verified
  2026-08-14: white page, dark "#03 — Bootstrap 4 Buttons (Solid)" heading,
  three blue size buttons (Large/Medium/Small), "Button Colors" caption +
  18 colored solid buttons (~3 rows), "Full width button" caption + wide
  blue block button. The screenshot only shows the Solid section (first
  100vh); the Outline section is confirmed from the live DOM.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-03/`. Mention this in the PR
  description.
- **⚠ Heading quirk:** the page `<title>` is "Button #3" but the visible
  `h2` headings render the full "#03 — Bootstrap 4 Buttons (Solid)" /
  "(Outline)" (em dash `&mdash;`). Fidelity mandate: render the h2 text
  exactly, em dash included.
- **⚠ Not a classic page template:** there is NO navbar, NO hero, NO
  imagery, NO footer in the original — the entire page is a two-section
  button showcase. Fidelity = section order, exact button labels/variants,
  the 18-color palette, paddings/radii, and the float hover. The only
  added element is the mandatory Component Dock attribution footer.
- **Structure observed (1:1):** two stacked `div.container.content`
  (each `height: 100vh`) → `row align-items-center content
justify-content-center` → `col-md-10 text-left`. Section 1 heading
  `h2.mb-5` **"#03 — Bootstrap 4 Buttons (Solid)"** → `div.d-block.mb-5
d-flex` size row (3 × `div.mb-3.mr-3`: centered `<small>` caption
  `Large`/`Medium`/`Small` above `btn-primary btn-lg` / `btn-primary` /
  `btn-primary btn-sm` "Button") → centered `<small>` **"Button Colors"**
  → `div.mb-5` with 18 `btn mb-3 mr-3 btn-{color}` buttons (Primary,
  Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink,
  Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray) →
  centered `<small>` **"Full width button"** + `btn btn-primary btn-block`
  "Button". Section 2 identical, heading **"#03 — Bootstrap 4 Buttons
  (Outline)"**, every button `btn-outline ...` (block = `btn btn-outline
btn-primary btn-block`).
- **Button anatomy:** `<button class="btn ..."><span class="bg-float"></span><span class="text">Button</span></button>`.
  `.bg-float` = absolute inset-0 fill (z-index 1; solid = palette color,
  outline = `#fff !important` + `2px solid <color>` border); `.text` =
  relative label span (z-index 2); `:before` pseudo = absolute inset-0
  `2px solid <color>` border (same color as fill on solid → invisible at
  rest). Base `.btn`: 13px, `8px 25px`, `border-radius: 0` (square), no
  border, `letter-spacing: .01rem`, `background: none !important`. Sizes:
  `.btn-sm` 12px/`5px 15px`, `.btn-lg` 16px/`15px 30px`. `.btn-block` =
  `display:block; width:100%`.
- **Signature hover (name source):** `.btn:hover > .bg-float, .btn:hover >
.text { top:-4px; left:-4px }` with `.1s all ease` — fill AND label
  shift 4px up-left while the 2px border stays, so the button "floats" out
  from under its outline. Same on `.btn-outline:hover`. Pure CSS; no JS.
- **Design tokens (from `style.css` — ftco overrides the Bootstrap
  defaults):** page `#fff`; font **Roboto**; heading 20px Roboto dark;
  solid buttons — primary `#007bff`, secondary `#6c757d`, success
  `#28a745`, info `#17a2b8`, warning `#ffc107` (DARK text `#212529`),
  danger `#dc3545`, light `#dae0e5` (DARK text `#212529`; NOT Bootstrap
  `#f8f9fa`), orange `#fd7e14`, indigo `#6610f2`, pink `#e83e8c`, deep
  orange `#ffac8e`, aqua `#3fc5f0`, dark `#393e46`, black `#000`, purple
  `#6f42c1`, blue `#007bff` (same as primary), brown `#a0855b`, blue gray
  `#3f4d71` — all white text except Warning/Light; outline variants =
  white fill + 2px colored border + colored text (Light outline text
  `#657a8e`). Section captions = Bootstrap `<small>` (12.8px) in centered
  `div.text-center`. Spacing: `mb-5` = 3rem, `mb-3 mr-3` = 1rem.
- **Recreation notes:**
  - Implement the button internals with real elements: a wrapper span for
    the fill (Tailwind `absolute inset-0` + bg token + `transition-all
duration-100` + `group-hover:-translate-x-1 -translate-y-1`) and the
    label above it (`relative`); the 2px border via `border-2
border-<color>` on the button itself (equivalent of the `:before`
    layer — simpler than a pseudo-element and matches the visual). Use
    `group` on the button for the hover shift. `ease` duration-100 matches
    `.1s all ease`.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency; no jquery.
  - All buttons are `<button>` elements (not links) in the reference.
  - The two sections can be one `Section` component parameterized by
    `variant: 'solid' | 'outline'` — the structure is identical except the
    `btn-outline` class and heading text.
  - Mobile: relax the reference's fixed `100vh` per section (use
    `min-h-screen` or auto) so content never clips; keep `col-md-10`
    → full width below md.
  - Icons: none on this page — plain text labels only (no lucide needed).
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.

## Tasks (implementer checklist)

1. [ ] `feat/template-float` branch from latest main
2. [ ] Scaffold app `apps/float` (copy simplest existing app; rename
       package to `@free-react-templates/float`; `npm install` at root
       BEFORE committing so `package-lock.json` registers the workspace;
       `public/CNAME` = `float.free.componentdock.com`; `"homepage"` =
       `https://float.free.componentdock.com`; vite.config.ts keeps
       `injectUiSource()`)
3. [ ] Write spec-driven tests first (TDD, 100% coverage required):
       page structure, Solid section (sizes/colors/full-width), Outline
       section, hover float shift, focus-visible, responsive, footer
4. [ ] Implement `src/App.tsx` + `src/components/` (e.g. `KitSection.tsx`
       parameterized by variant, `FloatButton.tsx`, `Navbar`/`Footer` not
       needed — no navbar in reference; add the muted Component Dock
       footer)
5. [ ] Tokens in `src/index.css` `@theme` (see design tokens list)
6. [ ] `scripts/verify-app.sh float` green (typecheck + lint + vitest 100% + build); `npm run spec:validate` for `template-float`
7. [ ] PR: "feat: add Float (ColorLib Bootstrap Buttons 03 recreation)"
       — description MUST include: source template + preview URL (note the
       `/bb/` quirk), design tokens used, what differs (renames,
       placeholders)
8. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
9. [ ] After merge: TEMPLATES.md "Bootstrap Buttons 03" row (line 664)
       `[~]` → `[x]` + `https://float.free.componentdock.com` + `npm run
    readme:status`; push
