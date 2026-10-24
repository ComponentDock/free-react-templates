# QueryBar — Design Notes

- **Source slug:** `colorlib-search-19`
- **ColorLib name:** Colorlib Search Form 19 — its live demo is served as **“Au Form Wizard”**
- **Listing:** https://colorlib.com/wp/template/colorlib-search-19/
- **Preview:** https://colorlib.com/etc/searchf/colorlib-search-19/ (HTTP 200 · the slug-only
  `preview.colorlib.com/theme/colorlib-search-19/` answers **404** — this family has no
  `/theme/` demo at all, the `/etc/searchf/` folder IS the design)
- **New name:** querybar · **Category:** Flight / travel search form
- **Spec:** `openspec/specs/template-querybar/spec.md`
- **App:** `apps/querybar/` (FlightSearchForm · Footer — no navbar, hero or content bands)

Rewrite status: this brief replaced a **Colorlib Search Form V18** description (a tabs
card: Hotels | Car | Flight, dark `#1a1a2e` card, indigo `#6c7ae0` button) on 2026-10-24.
Docs-source drift caught by `verify-docs-source.py` — the spec, the `TEMPLATES.md` row
(`line 2743`) and the shipped app all describe `colorlib-search-19`; only this file was
the stale layer. Every value below was re-measured from the live reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `etc/searchf/colorlib-search-19/` (index) | 6,720 | `a9c649bfa092c098…` |
| `…/css/style.css?v=bbb46df3` | 13,153 | `b465e80c93abe818…` |
| `downloads/free/colorlib-search-19.zip` | 695,877 | `…/index.html` 6,650 B `60c9a558…` |

The archive's `css/style.css` hashes **identical** to the live sheet
(`b465e80c93abe818…`), so the live preview is verified and the archive is its
un-versioned twin. The page `<title>` is **“Au Form Wizard”** — the demo folder name and
the ColorLib listing name disagree, and the folder is authoritative for the DOM.

The page holds **1** anchor — the “Add room” link, dead (`href="#"`) — plus one `<form>`
with **7** inputs (From, To, Passengers (readonly), Depart date, Return date, two
quantity number fields) and **no** `<select>`, `<textarea>` or images. There are no inner
pages: this is a single-band widget, not a multi-page theme.

## Design tokens (from `css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Card gradient (brand) | `linear-gradient(to top, #c949fe 0%, #47a9ff 100%)` at **opacity .9**, `border-radius: 10px` | `.card-5::before` — `#c949fe` ×5 and `#47a9ff` ×5 are the sheet's two brand literals |
| Stepper hover | `#6c7ae0` | `.minus:hover`, `.plus:hover` background + border, `.list-room__footer a` colour |
| Action / submit green | `#00ad5f`, hover `#00994b` | `.btn-submit` background / `.btn-submit:hover` |
| Paper | `#ffffff` | input beds, `.input-icon` background |
| Field ink | `#666666` · placeholder `#cccccc` ×7 | `.input--style-1` colour / all vendor placeholder rules |
| Page | photo `images/bg-img-02.jpg`, `cover` centre, no colour fallback | `.bg-img-2`, page padding `290px` top / `120px` bottom (120/250 below 768px) |
| Card body | `padding: 59px 55px 71px` (desktop) · `40px 30px 55px` (≤767px) | `.card-5 .cl-card-body` |
| Labels | `#ffffff`, 18px, **700**, `text-transform: capitalize`, `padding-left: 8px` | `.label` — the DOM writes `from` / `to`, CSS renders “From” / “To” |
| Inputs | 18px, `padding: 16.5px 20px`, radius 10px, white bed, Poppins | `.input--style-1` (the passengers field uses `.input--text-small`: 16px / `17.5px 20px`) |
| Submit | full-width, `line-height: 60px`, uppercase, 18px **700**, radius 10px, `margin-top: 37px` | `.btn-submit` |
| Dropdown panel | `min-width: 385px`, `font-family: Lato`, `.list-room` `max-height: 324px` + scroll, footer rule `1px solid #e5e5e5` | `.dropdown-select`, `.list-room*` |
| Stepper numerals | 18px **700** `#555`, input width 55px centred | `.quantity > input`, `.list-person__item .name` |
| Typeface | **Poppins** (body, 14px/400) + **Lato** (dropdown internals only) | 4 + 4 `font-family` declarations |
| Wrapper | `max-width: 1226px` centred | `.wrapper--w1226` |

## Visual design (from the TEMPLATES.md screenshot, `colorlib-search-form-19.jpg`)

A full-bleed travel photograph (a jet on an apron / coastline scene) with one wide
gradient card floating over it: magenta at the bottom-left running to azure at the
top-right, 10px corners, white bold labels above white pill-cornered inputs. Two rows:
`From | To`, then a nested pair — `Passengers | Depart` and `Return | SEARCH` — with the
green uppercase SEARCH button flush to the card's bottom-right. Pixel samples of the
screenshot: page `#141311` (the photo), card mid `#9371e2` — consistent with the
`#c949fe → #47a9ff` ramp. **Not re-skinned:** the live DOM, the sheet and the screenshot
describe the same design.

## Section order (as shipped)

1. **Page** — photo background, `290px` top / `120px` bottom breathing room, `1226px` wrapper
2. **Gradient card** — `.card-5` + `.cl-card-body`, one `<form>`
3. **Row 1** — `From` · `To` (both `input--style-1`, placeholder “City, Region or Airport”)
4. **Row 2 (nested 2 × 2)** — `Passengers` (readonly summary + dropdown panel) · `Depart` (`input[type=date]`)
5. **Row 2 (nested 2 × 2, second pair)** — `Return` (`input[type=date]`) · `SEARCH` (`button.btn-submit`)
6. **Footer** — the reference has none; the app appends the Component Dock footer

## Section-by-section fidelity notes

**Page.** `.page-wrapper.bg-img-2` is a photograph only — no colour bed, no overlay. The
source reserves `290px` above the card and `120px` below (mobile flips them: `120px` top,
`250px` bottom so the keyboard has room). The card is the whole page; there is no navbar,
no hero copy and no content band after it.

**Card.** `.card-5` is `background: transparent` and paints itself with an absolutely
positioned `::before` carrying the gradient at **opacity .9** and `border-radius: 10px` —
so the photo shows through faintly at the edges. Reproduce as the form's own background
with the same ramp and radius; do not add a shadow, the source has none.

**Row 1 — From / To.** Two `cl-col-2` halves of a `cl-row.row-space`. Both labels are
18px **700 white**, capitalised by CSS, with `8px` left padding aligning them to the
input's text. Inputs are `18px`, `#666` on white, `16.5px 20px`, radius 10px, placeholder
`#ccc`, placeholder copy “City, Region or Airport” (the source never varies it between the
two fields).

**Passengers control.** A **readonly text input** that shows the summary
`1 Adult, 0 Children, 1 Room` (from `js/snippet.js`: `a + ' Adult/Adults, ' + ch +
' Children, ' + rooms + ' Room/Rooms'`, singular/plural both inflected) with a `+` glyph
parked inside it at `right: 20px`, `#808080`, 24px. Because `.open` rotates/replaces that
glyph, the control reads as a disclosure, not a select. Clicking toggles the panel;
clicking anywhere else or pressing outside closes it (a `document` click listener).

**Dropdown panel.** `.dropdown-select` is absolutely positioned below the field,
`min-width: 385px`, Lato, hidden until `.cl-show`. Inside: one `.list-room__item` per room
(“Room 1”), each with an `Adults`/`Children` pair of steppers — `.minus` / `.plus` **32px
circles** (`border: 2px solid #ccc`, glyph `#ccc`, `border-radius: 50%`) either side of an
`input[type=number]` (`width: 55px`, centred, 18px **700** `#555`, spinners hidden), and
hover fills the circle `#6c7ae0` with a white glyph. The list scrolls past
`324px`. A `.list-room__footer` with `1px solid #e5e5e5` top rule holds the **“Add room”**
link — the page's only anchor — which clones the first room as “Room N” with every
quantity reset to its `min`.

**Depart / Return.** Native `input[type=date]`, same pill input skin. The snippet swaps
`type` text↔date on focus/blur (so an empty field shows its own placeholder) and couples
the pair: choosing Depart sets `return.min`, and clears a Return that is now earlier.
React state reproduces both; the coupling is a render-time clamp, not an effect.

**Submit.** `.btn-submit` is a full-width block inside a `cl-col-2` — `line-height: 60px`
(so it matches the input height), uppercase, 18px **700**, white on `#00ad5f`, radius
10px, `margin-top: 37px` (15px on mobile). It is the **green** element in an otherwise
magenta/azure card: do not theme it to the card gradient.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.page-wrapper.bg-img-2` | photo bed, `290/120` padding | `<main>` with `bg-cover` + picsum URL, `py-20` |
| `.card-5::before` | gradient at .9, radius 10 | inline `style.background` on the `<form>` (as shipped) |
| `.cl-input-group` + `.label` | label above white input | `label` + `input`, 18px, radius 10 |
| `#js-select-special` | readonly summary + `+`, `.open` toggle | `dropdownOpen` state, `aria-expanded`, click-outside handler |
| `.list-room` / `.list-person` | room list, steppers, `.cl-show` | `rooms: {adults, children}[]`, `updateRoom`, `addRoom` |
| `input-start` → `input-end` | `min` coupling in `snippet.js` | derived `min` on the Return date from `depart` |
| `.btn-submit` | `#00ad5f` block, 60px line-height | submit button, `bg-[#00ad5f]`, hover `#00994b` |

## Placeholder images / fonts

`https://picsum.photos/seed/querybar-ocean/1920/1080` for the page photograph. Poppins
(body) and Lato (the dropdown panel's smaller labels) come from Google Fonts via `<link>`
— both verified HTTP 200 on `fonts.googleapis.com/css2`. No ColorLib asset (photo, icon
font, CSS) is copied.

## App deltas (as shipped in `apps/querybar/`)

- The card is `max-w-[1000px]`, not the source's `1226px` wrapper; the gradient, radius
  (10px), padding (`59/55/71` → `40/30/55`) and label/input/button values match the sheet.
- The source's date fields are `input[type=date]`; the app keeps native dates but does not
  reproduce the text↔date swap or the empty-field placeholder behaviour.
- The app's passenger summary and steppers match the source's arithmetic and wording
  (“1 Adult, 0 Children, 1 Room”); the disclosure glyph is a lucide `Plus`/`Minus` pair
  rather than the source's `zmdi` icon font, and the open/closed rotation is a Tailwind
  transition.
- The page photograph is a picsum placeholder (`querybar-ocean`) instead of the source's
  travel photo; the page keeps the source's photo-only treatment (no overlay, no colour bed).
- The reference has no footer and no attribution line; the app appends the Component Dock
  footer, which is the only band on the page that the sheet does not describe.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string (“… made with ♥ by …”), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/querybar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/querybar/public/CNAME` = `querybar.free.componentdock.com`
  and the package `homepage` = `https://querybar.free.componentdock.com`.
