# Flairkit — design notes

Recreation of ColorLib **"Regen Ui Kit"** (free Bootstrap 4 UI kit on a
pink/rose design — photographic hero + 13 component showcase bands).
Source: https://colorlib.com/wp/template/regen-ui-kit/ · Preview
analyzed: https://preview.colorlib.com/theme/regen/ (HTTP 200, 75,580
bytes HTML + 16,279 bytes `css/style.css` + 65,498 bytes compiled
`css/bootstrap.min.css`; 2026-10-11; saved to `/tmp/regen-regen.html`,
`/tmp/regen-style.css`, `/tmp/regen-bs.css`). NOTE the theme slug is
**`regen`** — the product-slug path `theme/regen-ui-kit/` 404s (same
short-slug pattern as Buildex → `theme/buildex/`, Next → `theme/next/`).
Screenshot reviewed: `regen-free-template.jpg` (desaturated misty-mountain
hero with NO gradient wash, bold white "Regen UI Kit", pink "View All
Here" button, then a `bg-light` "Buttons" band with small gray row labels
left and pink demo buttons right). The demo brand "Regen"/"Regen UI Kit"
is NEVER reused in app files — hence the new name **flairkit**. The
preview is a classic Colorlib build: compiled Bootstrap 4 (custom palette
— no stock #007bff blues) + icomoon + font-awesome 4.3 + nouislider +
datetimepicker + jQuery.

## Structure order (1:1 with preview DOM)

1. Hero — `.site-section.bg-image`: 80vh cover/center photo
   (`images/...`, desaturated misty mountain ridges in cloud). NO
   gradient overlay (unlike Next Ui Kit's `.gradient-1` — the photo
   stands alone). Centered `col-md-7`: BOLD white h1 "Regen UI Kit" (→
   "Flairkit UI Kit"), white lorem subtitle ("Lorem ipsum dolor sit
   amet, consectetur adipisicing elit. Esse iure possimus cum illum ab
   accusantium, aliquid, delectus tempora." — paraphrasable), pink
   `#f34573` "View All Here" button (`btn-primary px-4 py-3`, default
   ~4px corners, NOT uppercase) → `#start`. NOTE: there is NO site
   navbar — the page starts at the hero.
2. Buttons — `bg-light`. Band heading is a plain `.section-heading` h3
   "Buttons" (`#454d66`, weight 300 — no accent bar, unlike Next). Demo
   rows use a label column (small gray labels "Style" / "Sizes" /
   "Colors" / "Outline" / "Outline Style 2") + demo column:
   - Style: "Default" (solid primary), "Rounded" (`btn-pill` radius 50px
     + icomoon home icon), "fab" (32px circle, heart icon)
   - Sizes: "Small" (`btn-sm` 12px) / "Regular" (`btn-md` 14px) /
     "Large" (`btn-lg` 16px)
   - Colors: Primary Secondary Success Danger Warning Info Light Dark
     Link (9 solid; `border:transparent` at rest)
   - Outline: eight `btn-outline-*` (Primary…Dark) — DOM tags the
     PRIMARY one `btn-pill`, rest square
   - Outline Style 2: same eight + `.width-2` (2px borders) — primary
     also pill
   Buttons are 0.9rem and NOT uppercase. Per-color hover shadow
   `0 5px 15px -5px rgba(<color>, .8)` (primary rgba(243,69,115,.8),
   success rgba(127,187,0,.8), danger rgba(236,28,36,.8), warning
   rgba(255,217,0,.8), info rgba(28,199,208,.8), secondary
   rgba(108,117,125,.8)).
3. Inputs — white. Four labeled groups ("Inputs Style 1..4"):
   - Style 1: three inline `form-control m-1` — "Default", "First name"
     (is-valid), "First name" (is-invalid)
   - Style 2: same three in `form-pill` (radius 30px)
   - Style 3: transparent-icon input groups — lock + "Password"
     (`pl-0 border-left-0`), person + "Username" (pill), "Email address"
     + person icon appended (`border-right-0`)
   - Style 4: `.input-group.form-control-border` underline-only —
     person + "Username", lock + "Password", envelope + "Email";
     transparent bg, `border-bottom:1px solid #ccc` → `#f34573` on
     focus. Focus ring everywhere: `border-color:#f34573`, NO
     box-shadow.
4. Checkboxes / Radioboxes / Toggle Buttons — `bg-light`. Checkboxes:
   Unchecked / Checked / Unchecked (Disabled) / Checked (Disabled).
   Radioboxes: Radio is on / off / on (Disabled) / off (Disabled).
   Toggle Buttons: "Toggle this switch element" (off) / "Checked switch
   element" (on). Checked color = primary `#f34573`.
5. Sliders + Badges + Pagination + Progress — white, two `col-lg-6`.
   LEFT: "Sliders" (`#slider` + `#slider-2` nouislider demos — recreate
   as native range or static styled tracks), "Progress Bars" (four 7px
   bars: bg-success / bg-info / bg-warning / bg-danger),
   "Progress Bars with percent" (ONE row: "WordPress" 94% — the source
   has only this one; do NOT invent extra brand labels). RIGHT:
   "Default Badges" (8 solid `badge px-3 badge-*` Primary…Dark —
   uppercase 11px/400, SOLID fills not tints), "Pill Badges" (8 ×
   `badge-pill`), "Pagination" (three `custom-pagination` rows, DOM
   order: `pagination-info` « 1 2 3 », `pagination-primary` « 1 2 3 »,
   `pagination-secondary` "Prev … 5 6 7 8 9 … Next"). Page links: 40px
   circles, 13px, `margin 0 2px`; active filled with variant color +
   `0 2px 5px rgba(<color>, .2)`; Prev/Next/ellipsis are gray
   `#6c757d` `span.page-link` with letter-spacing.
6. Navbars — `site-section pb-0`. Six stacked `navbar-dark px-4 mb-4`
   bars: bg-primary `#f34573`, bg-success `#7fbb00`, bg-info `#1cc7d0`,
   bg-danger `#ec1c24`, bg-secondary `#6c757d`, bg-transparent. Bars
   1/3/4/5: "Brand" + Home / Features / Pricing / "Dropdown link" →
   Action / Another action / Something else here. Bar 2 (success) is
   the expanded variant: Home (current) / Link / "Dropdown" → Action /
   Another action / Something else here / Disabled. Bar 6: brand text
   "Transparent" + Home / Features / Pricing / Dropdown link. Items:
   uppercase `.8rem`/400 white, padding 15px 10px, hover/active
   `rgba(255,255,255,0.2)`, disabled `opacity:.5`; dropdowns borderless
   `.8rem`, `box-shadow: 0 0 30px rgba(0,0,0,0.2)`.
7. Tab — `bg-light`. Two white `tab-card p-4` cards side by side: card 1
   `tab-menu.tab-secondary` (active pill `#6c757d`), card 2
   `tab-menu.tab-info` (active pill `#1cc7d0`); both Profile / Messages
   / Settings with lorem panes ("Mist enveloped the ship three hours out
   from port. A shining crescent far beneath the flying vessel..." —
   paraphrasable). Card shadow `0 10px 10px -5px rgba(108,117,125,.2)`;
   nav-link text black, icons `#ccc` → white active.
8. Alerts — white. Five SOLID dismissible alerts in DOM order:
   `alert-primary` `#f34573`, `alert-success` `#7fbb00`, `alert-danger`
   `#ec1c24`, `alert-warning` `#ffd900`, `alert-info` `#1cc7d0`. Copy
   kind: "A simple primary alert with an example link. Give it a click
   if you like." Each has a linked phrase + × close.
9. Typography — white. Labeled rows Heading 1–6 ("Almost before we knew
   it, we had left the ground.", weight 300 `#394a6d` lh 1.5),
   "Paragraph" (lorem), "Quote" (blockquote + attribution — source
   reads "Joh Smith, CEO & Fouder"; write clean "Jane Smith, CEO &
   Founder" style), colored text rows: Muted `#d4d7dd` / Primary
   `#f34573` / Info `#1cc7d0` / Success `#7fbb00` / Warning `#ffd900`
   / Danger `#ec1c24`.
10. Images — `bg-light`. Four columns over ONE shared image: Rounded
    Raised (shadow), Rounded, Circle, Thumbnail (bordered).
11. Javascript Components — white. "Datetime Picker" (one native
    datetime-local field), "Modal" ("Basic Modal" button → centered
    "Modal title" + × + two lorem paragraphs), "Popovers" (top / right
    / bottom / left), "Tooltips" (top / right / bottom / left).
12. Carousel — `bg-light`. 3 image slides with bottom captions — white
    h5 `.carousel-heading` ("First slide label" / "Second slide label"
    / "Third slide label") + lorem lines ("Nulla vitae elit libero..."
    kind). Previous / Next controls (no dots markup in this kit).
13. Cards — white. Three cards (all `0 5px 15px -5px rgba(0,0,0,.2)`):
    (a) `.card-20201` image-top (30px body) — "Card title" + "Some
    quick example text to build on the card title..." + "Go somewhere";
    (b) `.card-21029` text-center (30px sides, 40px bottom) — 30px
    pink icon at top + same copy; (c) `.card-39902` text-center
    `border-0` — 80px pink round icon circle (white 20px glyph) + same
    copy.
14. Footer — `site-section bg-light`, centered single line:
    "Copyright © All rights reserved | This template is made with ♥ by
    Colorlib" → link `https://www.componentdock.com/` ("Component
    Dock").

## Palette summary (verified against compiled bootstrap.min.css)

The reference Bootstrap is compiled with the custom palette — zero
occurrences of #007bff/#28a745/#ffc107/#dc3545/#17a2b8:

- primary `#f34573` (pink/rose) — brand anchor
- secondary `#6c757d` (gray)
- success `#7fbb00` (lime green)
- danger `#ec1c24` (red)
- warning `#ffd900` (yellow)
- info `#1cc7d0` (cyan)
- headings `#394a6d` (navy, weight 300) / `.section-heading` h3
  `#454d66` (slate)
- body `gray` weight 300, lh 1.7, Roboto
- `.text-muted` `#d4d7dd`; light bands `#f8f9fa`

## Fidelity pitfalls

- NO hero gradient overlay (the trap: sibling kit Next Ui Kit has one —
  Regen does not).
- Buttons are NOT uppercase (also unlike Next).
- `.section-heading` is a plain h3 — NO left accent bar (unlike Next's
  `.heading-21921`).
- Badges are SOLID fills (not Next's 0.1-alpha tints).
- "Progress Bars with percent" has exactly ONE row (WordPress 94%).
- Pagination rows order: info first, then primary, then secondary.
- Hero h1 is BOLD white while all other headings are weight 300.
- icomoon glyphs (icon-home/heart/lock/person/envelope) → lucide-react
  (Home/Heart/Lock/User/Mail); never copy the icon font.
