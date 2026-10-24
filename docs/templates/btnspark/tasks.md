# BtnSpark — Task Outline

Source slug: `bootstrap-buttons-02` · preview
https://preview.colorlib.com/theme/bb/bootstrap-buttons-02/ · app `apps/btnspark`
· spec `openspec/specs/template-btnspark/spec.md`

The reference is a bare button swatch sheet — no navbar, no hero, no footer copy.
Build it as one section, not a landing page.

## Tasks / Todo outline

1. **Scaffold** — keep `apps/btnspark` (already registered in `package.json` +
   lockfile); do not create a second workspace. `vite.config.ts` must call
   `injectUiSource()`.
2. **Tokens** — replace the Bootstrap-default `@theme` block in `src/index.css`
   with the measured palette: `--color-brand: #ec8f6a` (hover `#e66d3d`),
   `--color-brand-2: #8bbabb` (`#6ba7a8`), `--color-brand-3: #e2c275`
   (`#d9af4b`), `--color-brand-4: #b96b9f` (`#a44d87`), ink `#000`, hairline
   `rgba(0,0,0,.1)`, toggle on `#03A9F4` / off `#f44336`; `--font-sans: Poppins`.
   Load Poppins 300–700 from Google Fonts in `index.html` (no copied files).
3. **Primitives** (`src/components/`):
   - `Button.tsx` — variants `solid | outline | white | brand-solid`, tones
     `1..4`, sizes `default | pill`, optional `iconPanel` (45px white right-edge
     panel, circular when `pill`), `block`; `12px 16px`, 14px, weight 500, radius
     5px / 40px, shadow `0 10px 20px -6px rgba(0,0,0,.12)`.
   - `ButtonGroup.tsx` — three children, rounded outer / square inner corners.
4. **Sections, in reference order:**
   - `ShowcaseHeading.tsx` — `h2` "Button #07" (32px) and a reusable `h2 small`
     band heading (16px).
   - `StateMatrix.tsx` — 4 columns × 5 states; glyphs heart / trash /
     paper-plane / cloud-download from `lucide-react`.
   - `DropdownBand.tsx` — four colour toggles, menu Action · Another action ·
     Something else here; one open at a time, closes on outside click + Escape,
     items inert (`<button>`, not dead anchors).
   - `GroupBand.tsx` — the two segmented triples.
   - `ControlRow.tsx` — `CheckboxGroup` (5 colour rows, all checked, Disabled
     disabled at 0.65), `RadioGroup` (same five, 18px ring), `SlideSwitch` ×2
     (real `<input type="checkbox" role="switch">`, ON/OFF knob + track colour,
     0.3s cross-fade, captions "Toggle is on" / "Toggle is Off").
   - `SocialBand.tsx` — 5 brands × 7 shapes + the closing 7-pill action row
     (Create Account solid coral, white icon circle).
   - `SiteFooter.tsx` — one line with the `https://www.componentdock.com/`
     link ("Component Dock"). No nav, no marketing copy.
5. **Delete** the landed-page components the reference does not have
   (`Navbar`, `Hero`, `Playground`, `ShapeVariants`, `SizesAndStates`) and their
   tests; keep the app to the reference's six bands.
6. **Tests** — Vitest + Testing Library for every component, including:
   dropdown open/close/Escape, checkbox + radio + switch state flips, disabled
   control not toggling, footer href, and the matrix rendering 4×5 buttons.
   Hold 100% lines/functions/branches/statements.
7. **Verify** — `npm run spec:validate`, `npm run verify:app btnspark`
   (typecheck + lint + knip + fallow + coverage + build), then the surge deploy
   workflow for `btnspark`.

## Do not

- Do not reference ColorLib in any app file (provenance stays in the spec,
  `TEMPLATES.md` and the PR).
- Do not copy the source's CSS, its Ionicons subset, or its woff2 files — reuse
  the measured hex values and `lucide-react` glyphs.
- Do not add a navbar, hero, testimonials or a newsletter band; the design has
  none, and inventing chrome is what drifted this template in the first place.
- Do not reproduce the source's `body { min-width: 992px }` desktop lock — stack
  the matrix and the control row responsively instead.
