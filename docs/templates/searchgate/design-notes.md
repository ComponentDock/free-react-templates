# SearchGate — Design Notes

- **Source slug:** `search-form-bar-06`
- **ColorLib name:** Search Form Bar 06 (the demo page's own `<h2>` reads “Search Form/Bar #06”)
- **Listing:** https://colorlib.com/wp/template/search-form-bar-06/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/search-form-bar-06/ (HTTP 200 ·
  the slug-only `preview.colorlib.com/theme/search-form-bar-06/` answers **404** — the
  `search-form-bar-*` family is served under the `/theme/bootstrap/` prefix)
- **New name:** searchgate · **Category:** Search form (animated bar)
- **Spec:** `openspec/specs/template-searchgate/spec.md`
- **App:** `apps/searchgate/` (SearchBar · Footer — no navbar, hero or content bands)

Rewrite status: this brief replaced a **Colorlib Search Form V5** (`colorlib-search-5`)
description on 2026-10-24. Docs-source drift caught by `verify-docs-source.py` — the spec,
the `TEMPLATES.md` row (`line 2763`) and the shipped app all describe
`search-form-bar-06`. Every value below was re-measured from the live reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `theme/bootstrap/search-form-bar-06/` (index) | 1,976 | `9a4cfa8f8deadccc…` |
| `…/css/style.css?v=7aee19ab` | 10,477 | `08ba0f75b30d2bc1…` |
| `downloads/free/search-form-bar-06.zip` | 254,876 | `…/index.html` 1,784 B `ec1b319b…` |

The archive's `css/style.css` hashes **identical** to the live sheet
(`08ba0f75b30d2bc1…`), so the live preview is verified and the archive is its
un-versioned twin.

The page is one band and nothing else: **0 anchors**, one `<form>` with **1** input, no
`<select>`, no `<textarea>`, no images and **no `js/` at all** — the width animation is
pure CSS (`:hover` on the wrapper, `:focus` on the input). There are no inner pages.

## Design tokens (from `css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand (olive green) | `#76a21e` | 2 — `.search-icon-btn` `background-color` **and** its 1px border |
| Page bed | `#fafafa` | `body { background: #fafafa; color: gray; }` (the second, winning `body` rule) |
| Paper | `#ffffff` | `.search-bar` bed, `.cl-form-control` bed |
| Heading ink | `#000` | `.heading-section { font-size: 28px; color: #000; }` |
| Typeface | **Poppins**, 16px / `line-height: 1.8`, weight normal | `body { font-family: "Poppins", Arial, sans-serif; }` |
| Circle button | **60 × 60**, `border-radius: 50%`, `box-shadow: 0 5px 20px -12px rgba(0,0,0,.36)`, white glyph | `.search-icon-btn` |
| Search field | height **50px**, `border-radius: 40px`, bed white, `box-shadow: 0 5px 20px -12px rgba(0,0,0,.34)` | `.search-input input.search-bar` |
| Collapsed width | **150px**, `padding-left: 70px` | same rule |
| Expanded width | **300px**, `padding-left: 75px`, `padding-right: 15px` | `.search-bar:focus` **and** `.search-container:hover > .search-input input.search-bar` |
| Transition | `0.3s`, both the field and the circle | `.search-input input.search-bar, .search-icon-btn { transition: 0.3s; }` |
| Band padding | `7em 0` | `.ftco-section` |
| Field base | `.cl-form-control` height 50px, radius **2px**, 14px, `#000` on `#fff` | dead base rule — `.search-bar` wins (40px radius) |
| Reduced motion | transitions removed under `prefers-reduced-motion: reduce` | the sheet's own media query |

`#6c757d` / `#495057` / `#ced4da` / `#80bdff` / `#e9ecef` / `#212529` in the same file are
the bundled Bootstrap form-control block — **not** this design's palette. `#76a21e` is
the only brand literal in the sheet; the darker hover `#6b9319` the app ships is an
app-side choice, not a reference value.

## Visual design (from the TEMPLATES.md screenshot, `search-form-bar-06.jpg`)

A near-empty light page (`#fafafa`, sampled `250,250,250`) with one line of black centred
type (“Search Form/Bar #06”) and, beneath it, a **green circular search button that laps
the left end of a white pill input**. The screenshot catches the field in its expanded
state with the placeholder “Search...” — the button sits *on top of* the field's leading
edge, so the pair reads as one capsule with a green cap. Pixel sample of the circle:
`133,157,61` — a JPEG/scale-softened `#76a21e`. **Not re-skinned:** the live DOM, the sheet
and the screenshot describe the same design.

## Section order (as shipped)

1. **Heading** — `<h2 class="heading-section">`, 28px `#000`, centred, `7em` from the top
2. **Search pair** — circular `#76a21e` button + white pill field (150px → 300px), centred
3. **Footer** — the reference has none; the app appends the Component Dock footer

## Section-by-section fidelity notes

**Heading.** The source's own heading is the **demo label** (“Search Form/Bar #06”), not
a product name. A recreation must not print the source label: the app renders its own
brand word (“SearchGate”) in the same slot, same size, same colour, same centring. Keep
the geometry, replace the string.

**The pair.** `.search-container` is `display: table; width: 60px` with the **button**
first in the DOM and `.search-input` absolutely positioned at `left: 0` behind it. That
stacking is the whole design: the input starts *under* the button (`z-index` 1 vs 2) at
150px width and `70px` left padding, so the placeholder clears the green circle; on hover
of the wrapper **or** focus of the input it grows to 300px, and the extra 5px of padding
keeps the caret off the circle. Both states animate in `0.3s`.

**The button.** 60 × 60, `border-radius: 50%`, `#76a21e` fill **and** a matching 1px border
(so the circle stays crisp on the white bed), white search glyph, and a very soft shadow
(`0 5px 20px -12px` black at 36 %) that lifts it off the page without a visible edge.
The whole pair carries the same soft shadow treatment on the field.

**No JavaScript.** Nothing in the source script-toggles the width — `:hover` and `:focus`
do it. A React port therefore needs *only* the `focus`/`blur` state to hold 300px for
keyboard users after the pointer leaves; the app does exactly that (`expanded` state +
`caretColor: transparent` while collapsed so the caret cannot flash under the circle).

**Reduced motion.** The sheet disables the transition under
`prefers-reduced-motion: reduce`; the app should keep `motion-safe:` semantics on the
width change.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.ftco-section` | `7em 0` band | `py-20`-scale section on `bg-[#fafafa]` |
| `.heading-section` | 28px `#000` centred | `<h1>` 28px, app's own word |
| `.search-container` | table + `width: 60px` | `relative flex items-center` wrapper |
| `.search-icon-btn` | 60px green circle, soft shadow | `<button>` `rounded-full bg-[#76a21e]` + lucide `Search` |
| `.search-input input.search-bar` | absolute, 150 → 300px, 40px radius | input with `w-[150px]` / `w-[300px]` on `expanded` |
| `:hover` / `:focus` expansion | CSS-only | `onFocus`/`onBlur` state (keyboard parity) |
| `prefers-reduced-motion` | transition off | `motion-safe:transition-[width]` |

## Placeholder images / fonts

No images at all in the reference. Poppins comes from Google Fonts via `<link>`
(verified HTTP 200 on `fonts.googleapis.com/css2`). No ColorLib asset is copied.

## App deltas (as shipped in `apps/searchgate/`)

- The heading renders the app's own brand word (“SearchGate”), 28px black centred — the
  source prints its demo label in that slot; the geometry matches, the string must not.
- Brand is `#76a21e` with a `#6b9319` hover; the sheet declares no hover colour for the
  circle, so the hover is an app-side addition (it is within the brand hue).
- The app expands on `focus` only (plus a click-outside reset) rather than the sheet's
  `:hover` **and** `:focus`; pointer users still get the expansion on click/tap, and
  keyboard users get it on tab-in. The 150/300px widths, 40px radius, 60px circle and the
  two shadows match the sheet.
- The reference has no footer and no attribution line; the app appends the Component Dock
  footer, which is the only band on the page that the sheet does not describe.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string (“… made with ♥ by …”), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/searchgate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchgate/public/CNAME` = `searchgate.free.componentdock.com`
  and the package `homepage` = `https://searchgate.free.componentdock.com`.
