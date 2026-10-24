# ReachForm — Design Notes

- **Source slug:** `contact-form-v2`
- **ColorLib name:** Contact Form V2 (the demo page's `<title>` is “Contact V2”)
- **Listing:** https://colorlib.com/wp/template/contact-form-v2/
- **Preview:** https://colorlib.com/etc/cf/ContactFrom_v2/ (HTTP 200 — the `/etc/cf/` demo
  folder IS the design; `preview.colorlib.com/theme/contact-form-v2/` and
  `/theme/bootstrap/contact-form-v2/` both answer **404**)
- **New name:** reachform · **Category:** Contact form
- **Spec:** `openspec/specs/template-reachform/spec.md`
- **App:** `apps/reachform/` (ContactForm · Footer — no navbar, hero or info column)

Rewrite status: this brief replaced a **Contact Form 17** description (a two-column
navy `#35477d` / Roboto card with an info panel — `theme/bootstrap/contact-form-17/`) on
2026-10-24. Docs-source drift caught by `verify-docs-source.py` — the spec, the
`TEMPLATES.md` row (`line 1435`) and the shipped app all describe `contact-form-v2`. Every
value below was re-measured from the live reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `etc/cf/ContactFrom_v2/` (index) | 1,685 | `970eefdb2461ec5a…` |
| `…/css/style.css?v=6c4ee4df` | 10,677 | `fe59dd56fc10aec2…` |
| `downloads/free/contact-form-v2.zip` | 460,365 | `…/index.html` 1,615 B `c58067cb…` |

The archive's `css/style.css` hashes **identical** to the live sheet
(`fe59dd56fc10aec2…`), so the live preview is verified and the archive is its
un-versioned twin. Sheet and screenshot both say **Poppins**, not a display serif — the
old brief and the spec's “Playfair Display / serif” claim were wrong.

The page is one screen with **0 anchors**, one `<form>`, **2** inputs + **1** textarea
(note: the e-mail field is `type="text"` with `name="email"`; the source validates it by
regex, not by input type) and no links anywhere. There are no inner pages.

## Design tokens (from `css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Page wash (brand) | `linear-gradient(45deg, rgba(213,0,125,.8), rgba(229,57,53,.8))` over the photo | `.container-contact2` background (4 vendor forms) |
| Brand literals | `#d5007d` ×12 · `#e53935` ×12 | the same pink→red pair in three places: the page wash, the field underline, the button sweep |
| Card | `#ffffff`, **790px**, `border-radius: 10px`, `padding: 72px 55px 90px 55px` (`72/15/90/15` ≤576px) | `.wrap-contact2` |
| Title | `Poppins-Bold` **39px**, `#333333`, centred, `padding-bottom: 90px` | `.contact2-form-title` |
| Fields | `border-bottom: 2px solid #adadad`, no box, no radius, `margin-bottom: 37px` | `.wrap-input2` |
| Field text | `Poppins-Regular` 15px `#555555`; input height 45px, textarea `min-height: 115px` (13px vertical padding) | `.input2`, `input.input2`, `textarea.input2` |
| Floating label | `Poppins-Regular` 13px `#999999`, sits at `top: 16px` until focus/value, then `top: -13px` | `.focus-input2::after` (content = `data-placeholder`) |
| Focus rule | 2px `linear-gradient(45deg, #d5007d, #e53935)` underline drawing from `width: 0` to `100%` in .4s | `.focus-input2::before` |
| Button | `min-width: 244px`, `height: 50px`, `Poppins-Medium` 16px white, wrapper radius 2px, `overflow: hidden` | `.wrap-contact2-form-btn` + `.contact2-form-btn` |
| Button fill | a **300 %-wide** `linear-gradient(-135deg, #d5007d, #e53935, #d5007d, #e53935)` parked at `left: -100%`, sliding to `left: 0` on hover | `.contact2-form-bgbtn`, `.wrap-contact2-form-btn:hover` |
| Error bubble | white, `1px solid #c80000`, radius 2px, `#c80000` 13px Poppins-Regular + a FontAwesome exclamation | `.alert-validate::before` / `::after` |
| Typeface | **Poppins** only (Regular / Medium / Bold woff2 in `fonts/`) | 8 `font-family` declarations |

`#212529`, `#c80000` and `#999999` complete the sheet; `#212529` is the bundled Bootstrap
body text (overridden), not a design token.

## Visual design (from the TEMPLATES.md screenshot, `ContactFrom_v2.jpg`)

A mountain landscape photograph under a heavy **magenta → coral** diagonal wash (top-left
magenta `223,64,130`, bottom-right coral `211,67,90`), with a wide white card floating in
the centre: “Contact Us” in a bold geometric sans, three **underline-only** fields labelled
NAME / EMAIL / MESSAGE in small grey caps that rise into the gap above the field, and a
small rectangular pink-to-red button reading “Send Your Message”. Corners are 10px on the
card and nearly square (2px) on the button. **Not re-skinned:** the live DOM and the sheet
render the same card, wash and button.

## Section order (as shipped)

1. **Page** — photo bed + 45° magenta/coral wash at 80 % opacity, `min-height: 100vh`, centred
2. **Card** — 790px white panel, 10px corners, `72/55/90/55` padding
3. **Title** — “Contact Us”, 39px Poppins-Bold `#333`, centred, `90px` below
4. **Fields** — NAME · EMAIL · MESSAGE (2px `#adadad` underline, floating label, gradient focus rule)
5. **Submit** — “Send Your Message”, 244 × 50, pink→red sweep on hover
6. **Footer** — the reference has none; the app appends the Component Dock footer

## Section-by-section fidelity notes

**Page wash.** `.bg-contact2` sets the photograph (`images/bg-01.jpg`) inline on the
wrapper, and `.container-contact2` lays the 45° gradient at **80 % alpha** on top of it —
that is why the picture reads through as texture rather than as a photo. Neither layer is
optional: a solid pink bed loses the mountain, an unwashed photo loses the brand. The page
is a `min-height: 100vh` flex box with 15px padding, so the card never touches the edges.

**Card.** 790px, pure white, 10px corners, no shadow at all (the wash carries the
separation), and a very tall `90px` bottom padding so the button sits high off the card's
edge. Below 576px the side padding collapses to 15px.

**Title.** `.contact2-form-title` is `Poppins-Bold` **39px**, `#333333`, centred, with
`padding-bottom: 90px` — the single largest gap in the design, and the reason the card
looks airy. Not a serif: Poppins-Bold (the app ships a display face here — see deltas).

**Fields.** `.wrap-input2` is only a **2px `#adadad` bottom rule** (`margin-bottom: 37px`),
so the "input" has no box. The label is a `.focus-input2::after` pseudo-element carrying
`attr(data-placeholder)` at 13px `#999`, parked at `top: 16px` over the field, lifting to
`top: -13px` when the field is focused **or** carries a value (the `.has-val` class the
source script maintains). On focus a 2px gradient rule draws left-to-right under the field
(`width: 0 → 100%`, .4s). The textarea is `min-height: 115px` with 13px top/bottom padding;
the input is 45px tall.

**Submit.** A small slab, not a wide CTA: `min-width: 244px`, 50px tall, 2px corners,
`Poppins-Medium` 16px white, centred by a flex container with `padding-top: 13px`. The
gradient lives on a **300 %-wide child** parked at `left: -100%`, so hovering *sweeps* the
pink→red band across the button (`.wrap-contact2-form-btn:hover .contact2-form-bgbtn {
left: 0 }`). A static gradient fill reproduces the resting state but not the sweep.

**Validation.** The source's `js/snippet.js` checks each `.validate-input` on submit
(required, plus an e-mail regex for the field named `email`) and adds `.alert-validate`,
which paints a white `1px #c80000` bubble with the field's own `data-validate` sentence
plus an exclamation glyph. Focus clears the bubble. There is **no** success state and no
`aria-invalid` wiring in the source — the React port should keep the message text but wire
`aria-invalid`/`aria-describedby` itself.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.bg-contact2` + `.container-contact2` | photo + 45° wash 80 % | page `<img>`/`bg-cover` + absolute gradient overlay |
| `.wrap-contact2` | 790px white, radius 10, `72/55/90/55` | card `max-w-[790px] rounded-[10px]` |
| `.contact2-form-title` | 39px Poppins-Bold `#333` centred | `<h1>` `text-[39px] font-bold text-[#333]` |
| `.wrap-input2` + `.input2` | 2px `#adadad` underline, 15px `#555` | input/textarea `border-b-2 border-[#adadad]` |
| `.focus-input2::after` | floating 13px `#999` label | label with `peer-placeholder-shown` / value state |
| `.focus-input2::before` | 2px pink→red rule drawing to 100 % | `focus` underline, `linear-gradient(45deg,#d5007d,#e53935)` |
| `.wrap-contact2-form-btn` + `bgbtn` | 244 × 50, 300 % sweep | button with a `group-hover` sliding gradient layer |
| `.alert-validate` | `#c80000` bubble + glyph | inline error text + `aria-invalid` |

## Placeholder images / fonts

`https://picsum.photos/seed/reachform-mountain/1920/1080` for the landscape bed (the source
ships `images/bg-01.jpg`). Poppins comes from Google Fonts via `<link>` (verified HTTP 200
on `fonts.googleapis.com/css2`; the source self-hosts Regular/Medium/Bold woff2). No
ColorLib asset (photo, font file, icon font, CSS) is copied.

## App deltas (as shipped in `apps/reachform/`)

- **Typography:** the app renders the title in `--font-display` **Playfair Display 700** and
  the body in **DM Sans**; the sheet is Poppins-Bold 39px for the title and Poppins-Regular
  15px for fields. The spec's “Playfair Display / serif” claim is the stale one — corrected in
  the spec on 2026-10-24; the reference is Poppins.
- **Wash:** the app uses `linear-gradient(135deg, #e84393, #fd7e14)` at `opacity .85`; the
  sheet is `linear-gradient(45deg, rgba(213,0,125,.8), rgba(229,57,53,.8))` — a different
  direction and a pinker/cooler pair (`#e84393`/`#fd7e14` vs `#d5007d`/`#e53935`).
- **Labels:** the app prints small uppercase labels *above* each field
  (`text-xs uppercase tracking-wider text-body`); the sheet hides the label inside the field
  (13px `#999`, `top: 16px`) and floats it to `-13px` on focus/value.
- **Card:** `rounded-lg` (8px) with `shadow-xl` and `px-8`; the sheet is 10px, **no shadow**,
  `72/55/90/55`. Width is capped at 520px in the app vs the sheet's 790px.
- **Button:** `rounded bg-gradient-to-r from-brand-pink to-brand-coral px-8 py-3` — a static
  left-to-right fill (the sheet's sweep is a 300 %-wide child) at a smaller min-width.
- The app validates with inline error text (not the source's `#c80000` bubble) and adds a
  success panel, which the source does not have. The reference has no footer; the app
  appends the Component Dock footer.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string (“… made with ♥ by …”), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/reachform/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reachform/public/CNAME` = `reachform.free.componentdock.com`
  and the package `homepage` = `https://reachform.free.componentdock.com`.
