# DropForm — Design Notes

- **Source slug:** `contact-form-v8`
- **ColorLib name:** Contact Form V8 (the demo page's `<title>` is “Contact V8”)
- **Listing:** https://colorlib.com/wp/template/contact-form-v8/
- **Preview:** https://colorlib.com/etc/cf/ContactFrom_v8/ — **HTTP 200** (the `/etc/cf/`
  demo folder IS the design; `/theme/contact-form-v8/` and
  `/theme/bootstrap/contact-form-v8/` both answer **404**)
- **New name:** dropform · **Category:** Contact form
- **Spec:** `openspec/specs/template-dropform/spec.md`
- **App:** `apps/dropform/` (ContactForm · Footer — no navbar, hero or content bands)

Rewrite status: this brief replaced a **Dropdown 07** description (a dropdown playground,
`theme/bootstrap/dropdown-07/`) on 2026-10-24. Docs-source drift caught by
`verify-docs-source.py` — the spec, the `TEMPLATES.md` row (`line 1442`) and the shipped
app all describe `contact-form-v8`. Every value below was re-measured from the live
reference that day.

**Correction to the spec's reachability note:** the spec says “no live demo” because it
probed `/theme/*` and `/etc/{regform,bforms}/` — the contact-form family actually lives at
**`/etc/cf/<folder>/`**, and `https://colorlib.com/etc/cf/ContactFrom_v8/` answers **200**
with the full design. The spec's own token table was already correct (it measured the
archive); only the reachability sentence was wrong. Fixed in the spec on 2026-10-24.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `etc/cf/ContactFrom_v8/` (index) | 2,115 | `cd831f59a093a0d4…` |
| `…/css/style.css?v=dfe4dfb6` | 11,120 | `5ed785486f991766…` |
| `downloads/free/contact-form-v8.zip` | 81,489 | `…/index.html` 2,045 B `fc21d79b…` |

The archive's `css/style.css` hashes **identical** to the live sheet
(`5ed785486f991766…`), so the live preview is verified and the archive is its
un-versioned twin — the "live verified, archive is its twin" claim the spec could not
make before.

The page is one screen: **0 anchors**, one `<form>`, **3** inputs (Full Name, Email, and
the `copy-mail` checkbox) + **1** textarea, one full-bleed Google-map `<iframe>`
(`40.722047,-73.986422`, zoom 12) behind the card, and `js/snippet.js` for validation
only. There are no inner pages.

## Design tokens (from `css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand green | `#57b846` | 4 — `.contact100-form-btn` background, the two `focus-input100-*` focus strokes, `.input-checkbox100:checked + .label-checkbox100::before` |
| Ink green-black | `#1b3815` | 3 — `.input100` text, `.label-checkbox100` text, `.contact100-form-btn:hover` background |
| Placeholder | `#999999` | 8 — every vendor `::placeholder` variant |
| Field border | `#e6e6e6` | 2 — `.wrap-input100` 1px box, `.label-checkbox100::before` unchecked box |
| Error | `#c80000` | 3 — `.alert-validate` bubble text/border and its glyph |
| Card title | `#333333` | 1 — `.contact100-form-title` |
| Card | `#ffffff`, **500px**, `border-radius: 10px`, `padding: 62px 55px 65px 55px` (`62/15/65/15` ≤576px), `box-shadow: 0 3px 20px 0 rgba(0,0,0,.1)` | `.wrap-contact100` |
| Title | `JosefinSans-Bold` **30px**, `#333333`, **left-aligned**, `padding-bottom: 30px` | `.contact100-form-title` |
| Fields | 1px `#e6e6e6` box, **no radius**, `margin-bottom: 17px`; input **62px** tall, `padding: 0 20px 0 23px`; textarea `min-height: 199px` | `.wrap-input100`, `input.input100` |
| Field text | `JosefinSans-Bold` 15px `#1b3815` | `.input100` |
| Focus | a 1px `#57b846` stroke that **draws around** the field: two spans (`focus-input100-1/2`) each animating `full-w` (0.2s) then `full-h` (0.1s) — top edge, then right, then bottom, then left | `@keyframes full-w { to { width: calc(100% + 1px) } }` |
| Checkbox | native input hidden; **22px** box, `1px solid #e6e6e6`, white bed, FontAwesome check transparent until checked (then `#57b846`); label `Oswald-Medium` 15px `#1b3815`, `padding-left: 32px` | `.label-checkbox100` |
| Button | **42px** tall, `min-width: 160px`, `padding: 0 20px` (+5px top), `JosefinSans-Bold` 14px, uppercase, white on `#57b846`, hover `#1b3815` | `.contact100-form-btn` |
| Map | `.contact100-map` absolute, `z-index: -1`, full-bleed iframe behind the centred card | `.container-contact100 { padding: 15px }` |
| Typefaces | **Josefin Sans** (body/inputs/title, self-hosted `JosefinSans-Bold` woff2) + **Oswald** (checkbox label, `Oswald-Medium`) | 5 + 2 `font-family` declarations |

`#212529` is the bundled Bootstrap body colour (overridden by the `body, html` rule) and
`#e6e6e6` doubles as the checkbox frame — neither is a page colour.

## Visual design (from the TEMPLATES.md screenshot, `ContactFrom_v8.jpg`)

A pale grey Google map fills the frame; a white 500px card sits dead centre with a soft
shadow. “Contact Us” is bold, geometric and **left-aligned**, followed by three
hairline-bordered boxes (placeholder “Full Name” / an e-mail / “Your Message”, the
message box four rows tall), a small green-ticked “Send copy to my-email” checkbox, and a
compact green uppercase **SEND EMAIL** button bottom-left. Corners are 10px on the card and
square on the fields and button. **Not re-skinned:** the live DOM, the sheet and the
screenshot describe the same design.

## Section order (as shipped)

1. **Map bed** — full-bleed map iframe at `z-index: -1`, page `min-height: 100vh`, 15px padding
2. **Card** — 500px white, 10px corners, `62/55/65/55` padding, soft shadow
3. **Title** — “Contact Us”, 30px Josefin Sans Bold `#333`, left, `30px` below
4. **Fields** — Full Name · Email · Your Message (1px `#e6e6e6`, 62px tall, draw-on focus)
5. **Checkbox** — “Send copy to my-email” (22px box, green check)
6. **Submit** — “Send Email”, 160 × 42, green → ink hover
7. **Footer** — the reference has none; the app appends the Component Dock footer

## Section-by-section fidelity notes

**Map bed.** The source embeds a live Google Maps iframe
(`https://maps.google.com/maps?q=40.722047,-73.986422&z=12&output=embed`,
`loading="lazy"`, `referrerpolicy="no-referrer-when-downgrade"`) at `z-index: -1` across
the whole page — the card floats on the map, it is not a map *inside* a panel. A React port
must not ship a keyless Google embed; a static map-styled placeholder image is the correct
substitute (the app does this).

**Card.** `.wrap-contact100` is 500px, white, 10px corners, `overflow: hidden`,
`62px 55px 65px` padding, and a subtle `0 3px 20px rgba(0,0,0,.1)` shadow — the only
shadow in the design. It is vertically and horizontally centred in a
`min-height: 100vh` flex container with 15px padding.

**Title.** Left-aligned (not centred like most contact cards), `JosefinSans-Bold` 30px,
`#333333`, `padding-bottom: 30px`. The geometric Joséfin shapes are the design's character:
the app's Poppins is a documented substitution.

**Fields.** `.wrap-input100` is a **bordered box** (1px `#e6e6e6`, no radius) rather than
the underline style of the other contact forms; the input inside is **62px** tall with
`0 20px 0 23px` padding, 15px Joséfin Sans in `#1b3815`, placeholder `#999`. The focus
treatment is the theme's signature: two sibling spans each draw a 1px `#57b846` line
(`full-w` 0.2s, then `full-h` 0.1s) so a green stroke runs around the field's perimeter in
sequence. A plain `focus:border-green` reproduces the colour but not the perimeter draw.

**Checkbox.** The real `<input type="checkbox" id="ckb1">` is `display: none`; the visible
control is `.label-checkbox100::before` — a 22px white box with `1px #e6e6e6`, holding a
FontAwesome check that is `transparent` until `:checked` turns it `#57b846`. The label text
is `Oswald-Medium` 15px, `padding-left: 32px`, and clicking anywhere on it toggles the box
(the label is `for="ckb1"`). A recreation must keep real checkbox semantics
(`aria`/`:checked`), not a div.

**Submit.** Compact, bottom-left, 42px tall, `min-width: 160px`, uppercase 14px
`JosefinSans-Bold`, `#57b846` → `#1b3815` on hover — a dark-ink hover rather than a
lighter green. `padding-top: 5px` optically centres the Joséfin caps.

**Validation.** `js/snippet.js` validates on submit (required + e-mail regex), adding
`.alert-validate`, which paints a white `1px #c80000` bubble with the field's
`data-validate` sentence and an exclamation glyph; focus clears it.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `#google_map` iframe | live map at `z-index: -1` | fixed background image (`picsum` map seed), no API key |
| `.wrap-contact100` | 500px white, radius 10, soft shadow | card `max-w-[500px] rounded-[10px]` |
| `.contact100-form-title` | 30px Joséfin Bold, left | `<h1>` `text-[30px] font-bold text-[#333]` |
| `.wrap-input100` + `.input100` | 1px `#e6e6e6`, 62px, no radius | boxed input `h-[62px] border border-[#e6e6e6]` |
| `.focus-input100-1/2` | sequential perimeter draw | `focus:` ring/border in `#57b846` |
| `#ckb1` + `.label-checkbox100` | hidden native input, 22px painted box | real `<input type="checkbox">` with `accent-[#57b846]` |
| `.contact100-form-btn` | 160 × 42, green → ink hover | `<button>` `h-[42px] bg-[#57b846] hover:bg-[#1b3815]` |
| `.alert-validate` | `#c80000` bubble | inline error text + `aria-invalid` |

## Placeholder images / fonts

`https://picsum.photos/seed/mapbackground/1920/940` for the map bed. **Josefin Sans** and
**Oswald** come from Google Fonts via `<link>` (both verified HTTP 200 on
`fonts.googleapis.com/css2`: `family=Josefin+Sans:wght@400;700` and
`family=Oswald:wght@500`) — they are the real faces, not substitutes; the source
self-hosts them as woff2. No ColorLib asset (map, font file, icon font, CSS) is copied.

## App deltas (as shipped in `apps/dropform/`)

- The map bed is a picsum placeholder (`mapbackground`) behind a `bg-[--color-bg]` bed
  instead of the source's live keyless Google embed — deliberate, and the only way to ship
  without an API key.
- Brand green is `#4caf50` (hover `#43a047`) where the sheet is **`#57b846`**, and the
  checkbox accent follows the same app green (`#4caf50`) rather than the sheet's check
  colour `#57b846`; the sheet's ink hover `#1b3815` is not used.
- Fields are `rounded border` (4px, `#cccccc`) at `h-12`/`h-12`+textarea with
  `text-gray-700`; the sheet is square-cornered, 1px `#e6e6e6`, **62px** tall, with
  `#1b3815` text. The focus ring is a border-colour swap, not the sequential green
  perimeter draw.
- Type is Poppins (`text-2xl font-semibold`) rather than Joséfin Sans 30px; the checkbox
  label is the app's sans rather than Oswald-Medium.
- The title is left-aligned and the button is bottom-left in a flex row with the checkbox —
  matching the source's arrangement — but the app's button is `rounded px-6 py-2.5` and the
  title is 24px.
- The reference has no footer; the app appends the Component Dock footer.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string (“… made with ♥ by …”), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dropform/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropform/public/CNAME` = `dropform.free.componentdock.com`
  and the package `homepage` = `https://dropform.free.componentdock.com`.
