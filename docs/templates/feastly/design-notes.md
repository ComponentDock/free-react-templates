# Feastly — Design Notes

- **Source slug:** `foodfun`
- **ColorLib name:** Foodfun (free restaurant landing template)
- **Listing:** https://colorlib.com/wp/template/foodfun/
- **Preview:** https://preview.colorlib.com/theme/foodfun/ — HTTP 200, 27,258 B,
  sha256 `74eab6b15955f322…` (measured 2026-10-24); page title `Foodfun`
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/foodfun-free-template.jpg
  (1,200 × 946, AVIF bytes served as `.jpg`; converted to PNG for sampling)
- **New name:** feastly · **Category:** Restaurant landing
- **Spec:** `openspec/specs/template-feastly/spec.md`
- **App:** `apps/feastly/` (Navbar · Banner · Welcome · Menu · ReservationCTA ·
  Specials · Testimonials · Updates · BookingForm · Footer)

Rewrite status: this brief replaced a **Buri** description on 2026-10-24 — Buri
is a different ColorLib restaurant theme with an unrelated layout. Docs-source
drift caught it (`scripts/verify-docs-source.py`, `DOCS-STALE`
`brief=buri`); the spec (`Playfair Display`, golden-yellow `#ffb606`, "Discover
the flavors of feastly"), the `TEMPLATES.md` row (`line 1786`) and the shipped
app all recreate `foodfun`. Every value below was re-measured from the live
reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `/theme/foodfun/` (index) | 27,258 | `74eab6b15955f322…` |
| `theme/foodfun/assets/css/style.css` | 41,591 | `d11177ff5d55d975…` |

The sheet opens with two Google Font imports —
`Roboto:300,400,500,700` and `Playfair Display:400,700` — over
`assets/css/bootstrap-4.1.3.min.css`, `font-awesome-4.7.0`, `animate-3.7.0`,
`owl-carousel`, `magnific-popup` and `jquery.datetimepicker`. The home page
(`index.html`) holds **24** anchors, **17** `<img>` tags, **1** `<form>` with
**3** inputs, and **no** inline `background-image` — every photo band is painted
by CSS. Sibling pages exist (`about.html`, `menu.html`, `blog-home.html`,
`blog-details.html`, `contact-us.html`, `elements.html`); Feastly recreates the
**home page only**.

## Design tokens (from `assets/css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand yellow | `#ffb606` (47) · shade `#f8b600` (16) | buttons, kickers, headline accents, hover fills |
| Brand navy | `#131230` (33) | dark hero ground, footer, headings on white |
| Aqua accent | `#4cd3e3` (11) | secondary links / icon hovers |
| Bright accent | `#f4e700` (10) | badge / small highlight |
| Paper | `#fff` (77) · smoke `#f9f9ff` (25) · `#eee` (13) | page, alternating bands |
| Heading type | `"Playfair Display", serif` | 4 declarations — `h1`–`h4`, italic display lines |
| Body type | `"Roboto", sans-serif` | 8 declarations — body, nav, buttons |
| Radii | `3px` (23) · `8px` (6) · `8.5px` (5) · `50%` (9) | buttons 3px, cards 8px, avatars/dots 50% |
| Buttons | `.template-btn` — uppercase, 3px radius; `.template-btn2` filled yellow on dark bands | the sheet's button family |

Palette census, most-used first: `#fff` ×77, `#ffb606` ×47, `#131230` ×33,
`#f9f9ff` ×25, `#f8b600` ×16, `#eee` ×13, `#4cd3e3` ×11.

## Visual design (from the TEMPLATES.md screenshot)

A white masthead floats over a near-black navy hero (screenshot samples
`#0d1321`, `#1b2232`, `#090d18`): chick-mark logo plus the lower-case `foodfun`
wordmark, uppercase tracked nav, with food photography bleeding in at both edges.
The hero is text-only in the centre — a small tracked yellow kicker, then a huge
Playfair Display line `Discover the flavors of foodfun` with the words
**flavors** and **foodfun** italic in yellow, and generous whitespace below.
Bands under it alternate white / `#f9f9ff`: a split welcome block (photo left,
copy right, yellow `book a table`), a menu list with dotted price leaders, a
full-bleed dark reservation band with a yellow `reservation` button, numbered
specials (`01.` `02.`), a testimonial row of circular avatars, three blog cards,
and a full-width booking form. Dark navy footer with yellow headings closes the
page.

## Section order (as the reference renders)

1. **Header** — `.header-area` → `.logo-area`: logo left, nav
   `home / about / menu / blog (dropdown: Blog Home · Blog Details) / contact /
   Elements`.
2. **Banner** — `.banner-area.text-center`: kicker
   "the most interesting food in the world", `h1` "Discover the flavors of
   foodfun", `book a table` button.
3. **Welcome** — `.welcome-area.section-padding2`: photo + `h3`
   "welcome to food fun", paragraph, `book a table` button.
4. **Menu / food area** — `.food-area.section-padding`: `h3`
   "we serve delicious food" + intro paragraph, then priced dishes
   (e.g. *Mexican Eggrolls — $14.50*) with a blurb each.
5. **Reservation band** — `.reservation-area.section-padding.text-center`
   (dark photo): `h2` "Natural ingredients and testy food", `h4` "some trendy
   and popular courses offerd", `reservation` button.
6. **Specials** — `.deshes-area.section-padding`: `h3` "Our special deshes" and
   numbered items (`h1` 01. / 02.) each with `h3` dish name + copy + `read more`.
7. **Testimonials** — `.testimonial-area.section-padding4`: `h3`
   "Customer says" + avatars/quotes.
8. **Updates** — `.update-area.section-padding`: `h3` "Our food update" +
   three blog cards.
9. **Booking form** — `.table-area.section-padding`: `h3` "Book your table" +
   italic lede + one `<form>` (datepicker + name/phone/e-mail, 3 inputs) +
   submit.
10. **Footer** — `.footer-area` → `.footer-widget` (about, opening hours,
    contact) + `.footer-copyright`.

## Section-by-section fidelity notes

**Header.** The masthead is white and sits *over* the hero, not inside it; the
logo is a small mark plus a lower-case wordmark. Nav labels are lower-case in the
DOM and rendered uppercase by CSS with wide tracking. `blog` is the only item
with a dropdown.

**Banner.** No image of its own — the navy ground and the side photography come
from the section's CSS background. Text is centred: small tracked kicker, one
oversized Playfair line with two italic yellow words, then a single yellow
button. Reproduce the italic emphasis word-by-word (emphasise *flavors* and
*feastly*), not as a whole-line colour.

**Welcome.** Two columns: photo left (8px radius, no shadow), copy right —
lower-case `h3`, two paragraphs, yellow `book a table`. The band is white.

**Menu.** Heading plus paragraph, then rows of dish + dotted leader + price and
a second line of blurb. Prices are yellow. No tabs in the home page's food area
(the tabbed menu lives on `menu.html`, out of scope).

**Reservation band.** Full-bleed dark photograph with centred white `h2`, a
lighter `h4` and a yellow filled button — the page's strongest colour moment
after the hero.

**Specials.** Numbered list, not cards: a large yellow `01.` / `02.` numeral
beside a dish name, blurb and a `read more` link; dish photo on the other side,
alternating sides per item.

**Testimonials.** Circular avatars above italic quotes on a white ground; three
visible at desktop width.

**Updates.** Three blog cards: photo, date/meta line, title, `read more`.

**Booking form.** One form on a light ground: a calendar-icon input group for the
date (the source uses jQuery UI's datepicker) then name/phone/e-mail fields and a
submit. In React the date field is a native `input[type=date]`; keep the
calendar glyph inside the field.

**Footer.** Dark navy, yellow column headings, an about blurb, opening-hours
list, contact lines, then a centred copyright row. Replace the source's ColorLib
credit with the Component Dock line.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.logo-area` | logo + 6-item nav with blog dropdown | `Navbar` |
| `.banner-area` | navy hero, tracked kicker, italic-accent `h1`, CTA | `Banner` |
| `.welcome-area` | photo + copy + CTA | `Welcome` |
| `.food-area` | dish rows with dotted leaders and prices | `Menu` |
| `.reservation-area` | dark photo band + filled CTA | `ReservationCTA` |
| `.deshes-area` | numbered specials with alternating photos | `Specials` |
| `.testimonial-area` | avatars + quotes | `Testimonials` |
| `.update-area` | three blog cards | `Updates` |
| `.table-area` | datepicker form with 3 inputs | `BookingForm` (native date input) |
| `.footer-area` | 3 widget columns + copyright | `Footer` (Component Dock credit) |

## Placeholder images / fonts

`https://picsum.photos/seed/feastly-<n>/<w>/<h>` for the welcome photo, the
reservation band, specials and blog cards. `Playfair Display` (400/700) and
`Roboto` (300–700) come from Google Fonts via `<link>` — the same two families
the source imports. Icons from `lucide-react`; the Font Awesome set is not
copied.

## App deltas (as shipped in `apps/feastly/`)

- Palette is tokenised as a yellow ramp around `#ffb606` (`--color-primary-400`),
  navy `--color-ink: #131230`, smoke `--color-mist: #f9f9ff` — all three are the
  sheet's own literals; the ramp's darker steps (500–900) are app additions for
  hover/active states.
- The menu section ships as a card grid of dishes rather than the source's
  dotted-leader rows; prices and dish copy keep the same kind of content.
- The booking form uses a native date input instead of the jQuery UI datepicker
  widget; field count and labels match (date, name, phone, e-mail).
- All photography is picsum placeholders; body copy is paraphrased.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link
  [Component Dock](https://www.componentdock.com/). That is the only attribution
  line the recreation carries.
- **Provenance ban.** No file under `apps/feastly/` may name the source
  designer, carry a `colorlib.com` URL, or reuse the source template's name —
  code, comments, CSS, markup, metadata and filenames included (AGENTS.md
  rule 5).
- **Deploy identity.** `apps/feastly/public/CNAME` =
  `feastly.free.componentdock.com` and the package `homepage` =
  `https://feastly.free.componentdock.com`.
