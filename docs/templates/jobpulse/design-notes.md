# JobPulse — Design Notes

- **Source slug:** `search-form-bar-08`
- **ColorLib name:** Search Form Bar 08 (the demo page's own headings read “Search Form/Bar
  #08” and “Find For A Jobs”)
- **Listing:** https://colorlib.com/wp/template/search-form-bar-08/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/search-form-bar-08/ (HTTP 200 ·
  the slug-only `preview.colorlib.com/theme/search-form-bar-08/` answers **404** — the
  `search-form-bar-*` family is served under the `/theme/bootstrap/` prefix)
- **New name:** jobpulse · **Category:** Job search form (bar)
- **Spec:** `openspec/specs/template-jobpulse/spec.md`
- **App:** `apps/jobpulse/` (SearchBar · Footer — no navbar, results list or content bands)

Rewrite status: this brief replaced a **ColorLib Jobsco** description (a different job
board design) on 2026-10-24. Docs-source drift caught by `verify-docs-source.py` — the
spec, the `TEMPLATES.md` row (`line 2765`) and the shipped app all describe
`search-form-bar-08`. Every value below was re-measured from the live reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `theme/bootstrap/search-form-bar-08/` (index) | 4,963 | `e0de7dc3b134d581…` |
| `…/css/style.css?v=1b7b7dc0` | 15,416 | `84ad4e04c002ccfd…` |
| `downloads/free/search-form-bar-08.zip` | 256,693 | `…/index.html` 4,760 B `25c69b79…` |

The sheet identity **matches the spec's recorded identity** (`15,416 B`, sha
`84ad4e04c002…`) — the spec's measurement was sound; only this brief was stale. The
archive's `css/style.css` hashes identical to the live sheet, so the live preview is
verified and the archive is its un-versioned twin.

The page is one band: **1** anchor (the “Search Job” call-to-action, dead `href="#"`), one
`<form>` with **2** text inputs + **1** `<select>`, and one script (`js/snippet.js`)
that does nothing but re-measure the selects once web fonts land — the design is static
markup, no state behaviour at all. There are no inner pages.

## Design tokens (from `css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Page bed (brand blue) | `#1089ff` | 9 literals; `body { background: #1089ff; }` (the second, winning `body` rule) |
| Field text / icons | `#1089ff` | `.booking-form .cl-form-control` `color`, `.icon span` `color` |
| Button | `background: #000`, `height: 40px`, `border-radius: 4px`, 14px, uppercase 500, white | `.booking-form .cl-btn-primary` (and its `:hover`/`:focus`, which stay `#000`) |
| Fields | `height: 40px`, `border: 1px solid rgba(0,0,0,.05)`, `border-radius: 4px`, `padding-left: 10px` / `padding-right: 25px`, 14px, white bed | `.booking-form .cl-form-control` |
| Placeholder | `rgba(0, 0, 0, 0.7)` | all vendor `::placeholder` rules |
| Headings | `.heading-section` 28px `#fff` · `.title-job` 24px `#fff` | both rules |
| Icons | `.icon` absolute `right: 10px`, `top: 50%`, `font-size: 8px`, blue glyph | `.booking-form .cl-form-group .icon` |
| Typeface | **Poppins**, 16px / 1.8 body | `body { font-family: "Poppins", Arial, sans-serif; }` |
| Band padding | `7em 0`, content in `cl-col-md-12` | `.ftco-section` |
| Budget options | 5 — `$100 - $200`, `$200 - $300`, `$300 - $400`, `$400 - $500`, `$500 - $600` | the `<select>`'s `<option>` list |

**Dead base-layer tokens — never put them in `@theme`.** The sheet bundles Bootstrap and
then overrides it: `.cl-btn-primary` is `#007bff` (with `#0069d9` / `#0062cc` / `#005cbf`
states) at line 422, and `.booking-form .cl-btn-primary` at line 722 repaints it `#000`
with a `none` border and a fixed 40px height — the black button the page actually renders.
Likewise `#6c757d` (placeholder), `#495057`, `#ced4da`, `#80bdff`, `#e9ecef` and `#212529`
belong to the Bootstrap form-control block, not to this design.

## Visual design (from the TEMPLATES.md screenshot, `search-form-bar-08.jpg`)

A full-bleed vivid blue page with two lines of centred white type (“Search Form/Bar #08”
then a smaller “Find For A Jobs”), a row of three white inputs — keywords, location, a
budget select with a blue chevron — and a **black square-cornered “SEARCH JOB”** button at
the row's end. Nothing below the row; the blue runs to the fold.

Pixel sample of the screenshot's page bed: **`61,137,247` = `#3d89f7`** — a *marketing
re-render*, not the sheet's `#1089ff` (`16,137,255`). The button and layout match the live
DOM exactly, so the design is not re-skinned; where the picture and the sheet disagree on
the blue, **the sheet wins** (`body { background: #1089ff }`). This is the same class of
finding as `btnspark`/`shuttervibe`: never take a page colour from a screenshot when a
`body` rule exists.

## Section order (as shipped)

1. **Heading** — “Find For A Jobs”, 24px white, centred, `7em` band padding
2. **Search row** — Keywords · Location · Budget (select) · “Search Job” (black, 40px)
3. **Footer** — the reference has none; the app appends the Component Dock footer

(The source also prints the demo label “Search Form/Bar #08” above “Find For A Jobs”; a
recreation does not reproduce the demo label — the app drops it and keeps the job heading.)

## Section-by-section fidelity notes

**Heading.** `.title-job` is 24px white, centred, `cl-mb-4`. `.heading-section` (28px) is
the demo-label line the page prints above it — the recreation keeps only the 24px job
heading, since the 28px line names the ColorLib product.

**Search row.** A single `cl-row` of four `cl-col-md` cells (equal quarters at ≥768px,
stacked below), each cell a `.cl-form-group` holding one `.cl-form-field`. The three
fields are white 40px boxes with a **1px `rgba(0,0,0,.05)`** hairline (effectively a
shadow, not a border), 4px corners, 14px blue text, and a right-parked 8px blue glyph
(search, search, chevron-down). Placeholders: “Keywords (e.g Job Title, Position...)”,
“Location (City, Country...)”; the select's first option doubles as its visible value.

**Button.** `.cl-btn cl-btn-primary cl-px-4` inside `cl-d-flex cl-align-items-end` — a
**black** 40px block, 4px corners, no border, its `<span>` uppercase and weight 500,
hover/focus staying black. Because it is an `<a href="#">` in the source, the form has no
real submit control; a React port should use a `<button type="submit">` and keep the
visuals. The button spans the full cell width (`.booking-form .cl-form-group .cl-btn {
width: 100%; display: block }`).

**Everything else.** There is no navbar, no hero, no results grid and no footer in the
reference; the blue bed is the whole page.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `body` | `#1089ff` bed | root `div` `bg-[#1089ff]` |
| `.title-job` | 24px white centred | `<h1>` 24px white centred |
| `.booking-form` | 4-column row, stacks < 768px | `flex-col sm:flex-row` with `flex-1` cells |
| `.cl-form-control` | 40px, 4px radius, hairline, blue text | input/select `h-10 rounded-[4px] border-black/5 text-[#1089ff]` |
| `.icon` | absolute right 10px, 8px blue glyph | lucide `Search` / `ChevronDown` at `right-2.5 h-2 w-2` |
| `.cl-btn-primary` (overridden) | black 40px, uppercase 500 | `<button>` `bg-black h-10 rounded-[4px]` |
| 5 `<option>`s | `$100-$200 … $500-$600` | the same five ranges in the select |

## Placeholder images / fonts

No images in the reference. Poppins comes from Google Fonts via `<link>` (verified HTTP
200 on `fonts.googleapis.com/css2`). No ColorLib asset is copied.

## App deltas (as shipped in `apps/jobpulse/`)

- The app's page bed is `--color-brand-500` **`#4a90d9`**, not the sheet's `#1089ff`
  (ΔR 58, ΔG 7, ΔB 38) — the one substantial colour deviation on this page. The spec's
  `Surface (measured): #1089ff` line records the reference value.
- The heading renders at `text-3xl`/`md:text-4xl` (30/36px) where the sheet's
  `.title-job` is 24px; the demo-label line above it is correctly omitted.
- Fields are `rounded` (4px, matching) with `border-gray-300` and `placeholder-gray-400`
  where the sheet uses `rgba(0,0,0,.05)` + `rgba(0,0,0,.7)`; icons are 16px lucide where
  the sheet draws 8px glyphs, and text is `text-gray-700` where the sheet's is `#1089ff`.
- The button is `bg-gray-900` (near-black, matching the intent) at `py-3` instead of the
  sheet's exact `#000` / `40px`; it is a real submit button, not the source's dead anchor.
- The reference has no footer; the app appends the Component Dock footer.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string (“… made with ♥ by …”), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/jobpulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jobpulse/public/CNAME` = `jobpulse.free.componentdock.com`
  and the package `homepage` = `https://jobpulse.free.componentdock.com`.
