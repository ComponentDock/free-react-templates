# Template: Flairkit (UI Kit Showcase)

## Purpose

Flairkit is a component-showcase UI kit page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Regen
Ui Kit" template (a pink/rose Bootstrap 4 UI kit demo — photographic hero
+ 13 component showcase bands), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a LONG single-page component catalog with NO site
navbar: an 80vh photographic hero (misty mountain photo, NO gradient
wash) with a bold white headline, a lorem subtitle, and a pink "View All
Here" CTA anchoring to the kit — followed, 1:1 in order, by the showcase
bands Buttons, Inputs, Checkboxes/Radioboxes/Toggle Buttons, a two-column
Sliders+Badges+Pagination+Progress band, Navbar demos, Tab, Alerts,
Typography, Images, Javascript Components (datetime picker, modal,
popovers, tooltips), Carousel, Cards, then a light-gray centered footer
whose attribution line links Component Dock instead of the source.

Every showcase band shares one rhythm: a `.site-section` (7rem vertical
padding, alternating white / `bg-light`) whose heading is a plain h3 in a
`.section-heading` block (slate `#454d66`, weight 300 — the reference has
NO accent bar), then labeled demo rows. Where the source wraps them
(`.bd-example`), demo groups sit in light-gray Bootstrap-docs style
panels. The Buttons band uses a label-column row pattern (small gray
label like "Style" / "Sizes" / "Colors" on the left, demos on the
right).

The design is anchored by one signature color — pink `#f34573` — on
primary buttons/alerts/pagination active states, focused input borders,
card icon accents, and the navbar bg-primary bar, supported by a full
contextual palette (secondary `#6c757d`, success lime `#7fbb00`, danger
red `#ec1c24`, warning yellow `#ffd900`, cyan info `#1cc7d0`). The
compiled Bootstrap in the reference is built FROM this palette (no stock
#007bff blues anywhere). Typography is Roboto throughout, unusually
LIGHT for headings (weight 300, navy `#394a6d`) over a gray/300 body at
1.7 line-height (the hero h1 alone is bold white). Buttons are 0.9rem
(NOT uppercase), default ~4px corners with a pill variant (radius 50px),
and per-color soft drop shadows (`0 5px 15px -5px rgba(<color>, .8)`)
that appear on hover. Sections breathe at 7rem; the hero is 80vh.

## Design reference (replication findings)

- **Original:** ColorLib "Regen Ui Kit" — free Bootstrap 4 UI kit on a
  pink/rose design (source: https://colorlib.com/wp/template/regen-ui-kit/).
  Listed in TEMPLATES.md `## Ui Kit (8)` at line 3025; slug appears
  exactly once (there is no duplicate `- [ ]` line for it). NOTE: the
  theme preview slug is **`regen`**, not `regen-ui-kit` —
  `https://preview.colorlib.com/theme/regen-ui-kit/` returns HTTP 404,
  while `https://preview.colorlib.com/theme/regen/` is HTTP 200 and
  serves the kit (title "Regen &mdash; UI Kit Template by Colorlib", h1
  "Regen UI Kit"). Same short-slug pattern as Buildex
  (`theme/buildex/`) and Next (`theme/next/`). The demo brand
  "Regen"/"Regen UI Kit" is NEVER reused in app files — hence the NEW
  name **flairkit**.
- **Live preview URL:** https://preview.colorlib.com/theme/regen/
  (HTTP 200, 75,580 bytes HTML, verified 2026-10-11; theme stylesheet
  `css/style.css`, 16,279 bytes; compiled `css/bootstrap.min.css`,
  65,498 bytes — custom-palette build). HTML saved to
  `/tmp/regen-regen.html`; theme CSS saved to `/tmp/regen-style.css`;
  Bootstrap saved to `/tmp/regen-bs.css`. The preview DOM is
  authoritative for section order and copy.
- **Screenshot:** `regen-free-template.jpg`
  (`https://colorlib.com/wp/wp-content/uploads/sites/2/regen-free-template.jpg`,
  reviewed visually 2026-10-11) confirms the hero treatment: a
  desaturated misty-mountain photo (gray clouds over dark ridges) with
  NO gradient overlay; centered BOLD white h1 "Regen UI Kit"; two lines
  of white lorem subtitle; a pink rectangular "View All Here" button; a
  `bg-light` "Buttons" band below whose h3 sits above label rows
  ("Style", "Sizes", "Colors") — small gray labels left, pink demo
  buttons right (Default sharp-ish, "Rounded" pill with home icon, a
  round heart fab).
- **Stylesheets in the reference:** `fonts/icomoon/style.css`,
  `css/bootstrap.min.css` (compiled with the custom palette), Font
  Awesome 4.3 (maxcdn CDN), `css/nouislider.min.css`,
  `css/bootstrap-datetimepicker.css`, `css/style.css` (theme — canonical
  tokens). Bootstrap grid/JS, font-awesome, icomoon, nouislider,
  datetimepicker, and jQuery are NEVER copied: recreation uses Tailwind
  grid + flex, React-state tabs/carousel/dropdowns/modals/toggles/
  popovers/tooltips/alerts/pagination, lucide-react icons (Home, Heart,
  Lock, User, Mail replace icomoon `icon-home`/`icon-heart`/
  `icon-lock`/`icon-person`/`icon-envelope`), native
  `<input type="range">` / `<input type="datetime-local">`, and static
  styled slider demos. Roboto loads via Google Fonts `<link>` in
  `index.html` (weights 300–500).
- **Key theme rules (verified in style.css / bootstrap.min.css):**
  - Signature pink `#f34573`: `.btn-primary{background-color:#f34573}`,
    `.alert.alert-primary{background:#f34573}`,
    `.form-control:focus{border-color:#f34573}` (no ring),
    `.custom-pagination.pagination-primary .page-item.active .page-link
    {background-color:#f34573}`,
    `.card-39902 .wrap-icon{background:#f34573}` (80px round icon),
    `.card-21029 [class*="icon-"]{color:#f34573}` (30px icon), compiled
    Bootstrap `bg-primary`/`badge-primary` fills; the hero CTA
  - Hero: `.bg-image{height:80vh;background-size:cover;background-
    position:center center}` — the photo stands alone (NO gradient
    overlay, unlike Next Ui Kit's `.gradient-1`); markup
    `div.col-md-7.mx-auto.text-center.align-self-center` holds
    `h1.font-weight-bold.mb-0.text-white` "Regen UI Kit", `p.text-white`
    lorem, `a.btn.btn-primary.px-4.py-3` "View All Here" → `#start`
  - Font: `body{line-height:1.7;color:gray;font-weight:300;
    font-family:"Roboto",sans-serif}`
  - Headings: `h1–h6{font-weight:300!important;color:#394a6d;
    line-height:1.5}` — hero h1 EXCEPTED (font-weight-bold white);
    `.section-heading h3{color:#454d66;font-weight:300!important}`;
    `.section-heading small{color:#888;font-size:.9rem}`
  - Buttons: `.btn{transition:.3s all ease;font-size:0.9rem!important;
    position:relative}` — NOT uppercase (no text-transform); rest state
    `border:transparent` on solid variants; `.btn:hover/:active/:focus
    {outline:none;box-shadow:none}` but per-color hover shadow
    `0 5px 15px -5px rgba(<color>, 0.8)` (primary `rgba(243,69,115,.8)`,
    secondary `rgba(108,117,125,.8)`, success `rgba(127,187,0,.8)`,
    danger `rgba(236,28,36,.8)`, warning `rgba(255,217,0,.8)`, info
    `rgba(28,199,208,.8)`); `.btn.btn-pill{border-radius:50px}`;
    `.btn.btn-fab{border-radius:50%;32px circle}`; sizes `.btn-sm 12px` /
    `.btn-md 14px` / `.btn-lg 16px`; `.width-2{border-width:2px}` on
    "Outline Style 2" buttons; `.btn-outline-light{color:#6c757d}`
  - Forms: `.form-control{font-size:.9rem}`; focus `border-color:#f34573`
    with NO ring; `.form-control.form-pill{border-radius:30px}`;
    is-valid / is-invalid states (compiled Bootstrap green/red borders);
    `.input-group .input-icon-bg-transparent .input-group-text{background:
    transparent;box-shadow:none}` with the adjoining input dropping its
    shared border (`border-left-0` / `border-right-0`, `pl-0`); the
    `.input-group.input-group-pill` icon side rounds 30px on the left;
    `.input-group.form-control-border input{border:none;border-radius:0;
    background:transparent}` with `border-bottom:1px solid #ccc` on
    input+icon → `#f34573` on focus (underline-only inputs)
  - Badges: `.badge{text-transform:uppercase;font-size:11px;
    padding:4px 0;font-weight:400}` (markup adds `px-3`); SOLID
    contextual fills with white text (compiled `.badge-primary` etc. —
    palette colors, NOT tinted), pill variant `badge-pill`
  - Pagination: `.custom-pagination{font-size:13px}`; page links are
    40px circles (`border-radius:50%`, `margin:0 2px`), black text;
    `span.page-link` (Prev/Next/ellipsis) gray `#6c757d` with
    `letter-spacing:.1rem`, no hover fill; active page filled per
    variant + soft shadow `0 2px 5px 0 rgba(<color>, 0.2)`:
    pagination-primary `#f34573`, pagination-secondary `#6c757d`,
    pagination-info `#1cc7d0`
  - Progress: `.progress-20102{height:7px;border-radius:0;
    margin-bottom:30px}` (markup may add `rounded`)
  - Tab cards: `.tab-card{background:#fff;box-shadow:0 10px 10px -5px
    rgba(108,117,125,0.2)}`; active pill per variant —
    `.tab-menu.tab-secondary .nav-link.active{background:#6c757d}`,
    `.tab-menu.tab-info .nav-link.active{background:#1cc7d0}` (white
    text, `0 10px 10px -5px rgba(<color>,0.2)` shadow); nav-link text
    black, icons `#ccc` → white when active
  - Navbar demos: `navbar-dark` white uppercase `.8rem`/400 nav items
    (padding 15px 10px), hover/active `background-color:
    rgba(255,255,255,0.2)`, disabled `opacity:.5`; dropdown menus
    borderless, `.8rem`, `box-shadow:0 0 30px 0 rgba(0,0,0,0.2)`
  - Cards: `.card-20201` image-top card (30px body padding) and
    `.card-21029` / `.card-39902` icon cards — all with shadow
    `0 5px 15px -5px rgba(0,0,0,0.2)`; `.card-39902` is `border-0`
    text-center with the 80px pink circle icon
  - Sections: `.site-section{padding:7rem 0}`; the navbar band is
    `site-section pb-0`; footer band is `site-section bg-light`
  - Muted text: `.text-muted{color:#d4d7dd!important}`
  - Carousel: `.carousel .carousel-heading{color:#fff}` — slide caption
    h5s are white over the slide image
- **Content map (preview DOM):** hero `.site-section.bg-image` as above;
  each showcase band = `.section-heading` h3 (or a label row) then demo
  rows. Band order and contents:
  1. **Buttons** (`bg-light`): label rows "Style" (Default `btn-primary`
     `px-4`; "Rounded" `btn-pill` with home icon; heart `btn-fab` 32px
     round), "Sizes" ("Small" `btn-sm` / "Regular" `btn-md` / "Large"
     `btn-lg`), "Colors" (Primary / Secondary / Success / Danger /
     Warning / Info / Light / Dark / Link — solid, 9 buttons), "Outline"
     (eight `btn-outline-*` Primary…Dark — the DOM tags the PRIMARY one
     `btn-pill`; others square), "Outline Style 2" (same eight with
     `width-2` 2px borders — primary also `btn-pill`)
  2. **Inputs** (white): four labeled groups — "Inputs Style 1" (three
     inline `form-control m-1`: "Default", "First name" is-valid,
     "First name" is-invalid), "Inputs Style 2" (same three in
     `form-pill` radius 30px), "Inputs Style 3" (transparent-icon input
     groups: lock+Password `pl-0 border-left-0`, person+Username pill,
     "Email address" + person icon appended), "Inputs Style 4"
     (underline-only `.form-control-border` groups: person+Username,
     lock+Password, envelope+Email)
  3. **Checkboxes / Radioboxes / Toggle Buttons** (`bg-light`): three
     groups — "Checkboxes" (Unchecked / Checked / Unchecked (Disabled) /
     Checked (Disabled)), "Radioboxes" (Radio is on / Radio is off /
     Radio is on (Disabled) / Radio is off (Disabled)), "Toggle Buttons"
     ("Toggle this switch element" / "Checked switch element")
  4. **Sliders / Badges / Pagination / Progress** (white, two `col-lg-6`
     columns). LEFT: "Sliders" (two nouislider demos `#slider`,
     `#slider-2` — NEVER copied; native/styled range), "Progress Bars"
     (four 7px bars — `bg-success` / `bg-info` / `bg-warning` /
     `bg-danger`), "Progress Bars with percent" (ONE labeled row:
     "WordPress" 94% over a bar). RIGHT: "Default Badges" (eight solid
     `badge px-3`: Primary…Dark), "Pill Badges" (same eight
     `badge-pill`), "Pagination" (three `custom-pagination` rows in DOM
     order: pagination-info « 1 2 3 », pagination-primary « 1 2 3 »,
     pagination-secondary "Prev … 5 6 7 8 9 … Next")
  5. **Navbars** (`site-section pb-0`): six stacked `navbar-dark px-4
     mb-4` bars — bg-primary, bg-success, bg-info, bg-danger,
     bg-secondary, bg-transparent. Bars 1/3/4/5: "Brand" + Home /
     Features / Pricing / "Dropdown link" → Action / Another action /
     Something else here. Bar 2 (bg-success) shows the expanded variant:
     "Brand" + Home (current) / Link / "Dropdown" → Action / Another
     action / Something else here / Disabled. Bar 6 (transparent):
     brand text "Transparent" + Home / Features / Pricing / Dropdown
     link (the demo word "Transparent" describes the bar — keep or
     paraphrase, it is not the demo brand)
  6. **Tab** (`bg-light`): two `tab-card p-4` cards side by side
     (col-lg-6): card 1 `tab-menu.tab-secondary` (gray active pill),
     card 2 `tab-menu.tab-info` (cyan active pill); each a horizontal
     nav (Profile / Messages / Settings) + lorem pane copy ("Mist
     enveloped the ship three hours out from port..." kind —
     paraphrasable)
  7. **Alerts** (white): five dismissible solid alerts —
     `alert-primary` `#f34573`, `alert-success` `#7fbb00`,
     `alert-danger` `#ec1c24`, `alert-warning` `#ffd900`,
     `alert-info` `#1cc7d0` — each "A simple <color> alert with an
     example link. Give it a click if you like." kind of copy with a
     linked phrase and a × close
  8. **Typography** (white): labeled samples Heading 1–6 all rendering
     "Almost before we knew it, we had left the ground." + "Paragraph"
     (lorem) + "Quote" (blockquote + attribution line — source reads
     "Joh Smith, CEO & Fouder" with typos; write a clean paraphrase
     like "Jane Smith, CEO & Founder") + colored text rows: Muted text
     (`#d4d7dd`) / Primary text (`#f34573`) / Info text (`#1cc7d0`) /
     Success text (`#7fbb00`) / Warning text (`#ffd900`) / Danger text
     (`#ec1c24`)
  9. **Images** (`bg-light`): four columns over one shared image —
     "Rounded Raised Image" (shadowed), "Rounded Image", "Circle
     Image", "Thumbnail Image" (bordered)
  10. **Javascript Components** (white): "Datetime Picker" (one field —
      native `datetime-local`), "Modal" ("Basic Modal" button →
      centered "Modal title" modal with × close and 2 lorem paragraphs
      — paraphrasable), "Popovers" (Popover on top / right / bottom /
      left), "Tooltips" (Tooltip on top / right / bottom / left)
  11. **Carousel** (`bg-light`): 3 image slides with bottom captions
      (white h5 `.carousel-heading` — "First slide label" / "Nulla
      vitae elit libero, a pharetra augue mollis interdum." kind,
      "Second slide label" / "Lorem ipsum dolor sit amet, consectetur
      adipiscing elit." kind, "Third slide label" / "Praesent commodo
      cursus magna, vel scelerisque nisl consectetur." kind),
      Previous / Next controls
  12. **Cards** (white): three cards — (a) `.card-20201` image-top card
      (top image + 30px body: "Card title" + quick example text + "Go
      somewhere" link), (b) `.card-21029` text-center card (30px sides,
      40px bottom: 30px PINK icon at top + title + text + link),
      (c) `.card-39902` text-center border-0 card (80px PINK round icon
      circle with white glyph + title + text + link). All three share
      "Card title" + "Some quick example text to build on the card
      title..." + "Go somewhere" copy (paraphrasable)
  13. **Footer**: `site-section bg-light` centered single line —
      "Copyright © All rights reserved | This template is made with ♥ by
      Colorlib" — the recreation links `https://www.componentdock.com/`
      ("Component Dock") instead

## Design tokens

| Token | Value | Where |
| --- | --- | --- |
| brand/primary | `#f34573` | hero CTA, primary buttons/badges/alerts, active pagination, focused inputs, checked controls, card icons, navbar bg-primary |
| secondary | `#6c757d` | secondary buttons/badges/alerts, tab-secondary active pill, pagination-secondary active, Prev/Next pagination text |
| success | `#7fbb00` | success buttons/badges/alerts, success progress bar (lime green) |
| danger | `#ec1c24` | danger buttons/badges/alerts, danger progress bar |
| warning | `#ffd900` | warning buttons/badges/alerts, warning progress bar |
| info / cyan | `#1cc7d0` | info buttons/badges/alerts, tab-info active pill, pagination-info active, info progress bar |
| heading navy | `#394a6d` | h1–h6 text (weight 300) |
| heading slate | `#454d66` | `.section-heading` h3 (weight 300) |
| body text | `gray` (weight 300) | body, lorem copy |
| muted text | `#d4d7dd` | `.text-muted` rows |
| light band | `#f8f9fa` (bg-light) | Buttons band, controls band, Tab band, Images band, Carousel band, footer band |
| font family | `"Roboto", sans-serif` (Google Fonts 300–500) | everywhere |
| button type | 0.9rem, NOT uppercase, transition .3s; default radius .25rem; pill 50px; fab 50% 32px circle | all buttons |
| button shadow | `0 5px 15px -5px rgba(<color>, .8)` on hover | all colored buttons |
| input | .9rem, focus border `#f34573` no ring; pill variant 30px; underline variant bottom `#ccc` → `#f34573` | forms |
| badge | solid fill, uppercase 11px/400, `4px` vertical + `px-3`; pill variant | badges |
| pagination link | 40px circle, 13px, `margin 0 2px`; active fill + `0 2px 5px rgba(<color>, .2)` | pagination |
| progress bar | 7px tall, no/minimal radius, 30px gap | progress |
| tab card | white, `0 10px 10px -5px rgba(108,117,125,.2)` | tabs |
| card shadow | `0 5px 15px -5px rgba(0,0,0,.2)` | cards |
| navbar demo | dark bars, uppercase .8rem items, hover `rgba(255,255,255,.2)` | navbar band |
| section rhythm | `.site-section` `7rem 0`; hero 80vh cover/center, NO overlay | layout |
| hero photo | desaturated misty mountain (picsum seeded `flairkit-hero`) | hero |

## Requirements

### Feature: Hero

An 80vh photographic hero (no overlay): bold white headline, lorem
subtitle, pink CTA anchoring to the kit.

#### Scenario: Hero renders as in the reference
- **Given** the page loads
- **When** the hero renders
- **Then** the band is 80vh tall with a cover/center photo (picsum
  seeded `flairkit-hero`, a desaturated misty mountain scene per the
  screenshot)
- **And** the photo has NO gradient or color wash — the image stands
  alone (contrast comes from the photo itself, unlike the sibling kits)
- **And** the centered content shows the BOLD white h1 "Flairkit UI Kit"
  (the source headline kind "Regen UI Kit" — the demo brand is never
  reused)
- **And** a white two-line lorem subtitle below (paraphrasable — same
  kind: one sentence of placeholder marketing copy)
- **And** a pink `#f34573` button "View All Here" (default ~4px
  corners, `px-4 py-3`, white text, NOT uppercase) anchoring to
  `#start`

### Feature: Buttons showcase

The first `bg-light` band: label-row demos (label column + demo column)
covering style, sizes, colors, and two outline flavors.

#### Scenario: Button variant rows render as in the reference
- **Given** the buttons band renders
- **When** the demo rows are visible
- **Then** the band heading shows the h3 "Buttons" (`.section-heading`,
  slate `#454d66`, weight 300)
- **And** the "Style" row renders "Default" (solid primary, default
  corners), "Rounded" (pill radius 50px with a lucide Home icon), and a
  round 32px primary fab with a lucide Heart icon
- **And** the "Sizes" row renders "Small" (12px) / "Regular" (14px) /
  "Large" (16px) primary buttons
- **And** the "Colors" row renders NINE solid buttons — Primary
  `#f34573` / Secondary `#6c757d` / Success `#7fbb00` / Danger
  `#ec1c24` / Warning `#ffd900` / Info `#1cc7d0` / Light / Dark / Link
- **And** the "Outline" row renders eight outlined buttons
  (Primary…Dark) with the primary one in pill shape (per the reference
  DOM) and the rest square
- **And** the "Outline Style 2" row renders the same eight outlined
  buttons with 2px borders (`width-2`; primary also pill)
- **And** every colored button carries its per-color soft shadow on
  hover (`0 5px 15px -5px rgba(<color>, .8)`) and 0.9rem NOT-uppercase
  labels

### Feature: Inputs showcase

Four labeled input styles: plain, pill, icon groups, underline.

#### Scenario: Input style groups render as in the reference
- **Given** the inputs band renders
- **When** the groups are visible
- **Then** the heading shows the h3 "Inputs"
- **And** "Inputs Style 1" renders three inline inputs — "Default",
  "First name" (valid state, green border/feedback), "First name"
  (invalid state, red border/feedback)
- **And** "Inputs Style 2" renders the same three in the pill style
  (radius 30px)
- **And** "Inputs Style 3" renders transparent-icon input groups —
  Lock icon + "Password" (left border dropped), User icon + "Username"
  (pill), "Email address" + User icon appended
- **And** "Inputs Style 4" renders underline-only inputs (`.form-control-
  border`): User + "Username", Lock + "Password", Mail + "Email" —
  transparent, bottom border `#ccc` going `#f34573` on focus
- **And** plain inputs focus to a `#f34573` border with no ring

### Feature: Checkboxes, radios, toggles showcase

Three control groups on a `bg-light` band.

#### Scenario: Control variants render as in the reference
- **Given** the controls band renders
- **When** the groups are visible
- **Then** "Checkboxes" renders Unchecked / Checked / Unchecked
  (Disabled) / Checked (Disabled)
- **And** "Radioboxes" renders Radio is on / Radio is off / Radio is on
  (Disabled) / Radio is off (Disabled)
- **And** "Toggle Buttons" renders "Toggle this switch element"
  (off) and "Checked switch element" (on)
- **And** checked states use the primary `#f34573`, switches flip on
  click (React state, `aria-checked`), disabled rows do not toggle

### Feature: Sliders, badges, pagination & progress showcase

A two-column band: sliders + progress left; badges + pagination right.

#### Scenario: Left column renders as in the reference
- **Given** the two-column band renders
- **When** the left column is visible
- **Then** "Sliders" renders two range demos (a single-handle and a
  styled second track — native `<input type="range">` or static styled
  tracks; nouislider is never copied)
- **And** "Progress Bars" renders four 7px bars: success `#7fbb00`,
  info `#1cc7d0`, warning `#ffd900`, danger `#ec1c24`
- **And** "Progress Bars with percent" renders ONE labeled row —
  "WordPress" with right-aligned "94%" over its bar (a second label,
  if added, must not be the demo brand)

#### Scenario: Right column renders as in the reference
- **Given** the two-column band renders
- **When** the right column is visible
- **Then** "Default Badges" renders eight SOLID uppercase badges
  (Primary…Dark, white text on Light/Dark handled legibly, 11px/400,
  `px-3`)
- **And** "Pill Badges" renders the same eight in pill shape
- **And** "Pagination" renders three rows in DOM order — an info
  `#1cc7d0` row (« 1 2 3 »), a primary `#f34573` row (« 1 2 3 »), and
  a secondary `#6c757d` row ("Prev … 5 6 7 8 9 … Next") — 40px round
  page links, active page filled with the variant color + soft shadow,
  clickable (React state)

### Feature: Navbar showcase

Six stacked dark navbar demos on a `pb-0` band.

#### Scenario: Navbar variants render as in the reference
- **Given** the navbar band renders
- **When** the six bars are visible
- **Then** bars render in order: bg-primary `#f34573`, bg-success
  `#7fbb00`, bg-info `#1cc7d0`, bg-danger `#ec1c24`, bg-secondary
  `#6c757d`, bg-transparent
- **And** bars 1/3/4/5 show "Brand" + Home / Features / Pricing +
  "Dropdown link" opening Action / Another action / Something else here
- **And** bar 2 shows the expanded variant — Home (current) / Link /
  "Dropdown" → Action / Another action / Something else here / Disabled
  (dimmed, `opacity:.5`)
- **And** bar 6 (transparent) shows the descriptive brand text
  ("Transparent" or a paraphrase) + Home / Features / Pricing /
  Dropdown link
- **And** items are uppercase `.8rem`/400 white with `rgba(255,255,255,
  .2)` hover/active; dropdown menus are borderless `.8rem` cards with
  `0 0 30px rgba(0,0,0,.2)` shadow (React state, `aria-expanded`)

### Feature: Tabs showcase

Two side-by-side white tab cards on a `bg-light` band.

#### Scenario: Tab panels render as in the reference
- **Given** the tab band renders
- **When** the two cards are visible
- **Then** each card is a white `tab-card` (`0 10px 10px -5px
  rgba(108,117,125,.2)` shadow, 30px padding) with a horizontal nav —
  Profile / Messages / Settings
- **And** card 1's active pill is secondary gray `#6c757d`, card 2's is
  cyan `#1cc7d0` (white text + per-color soft shadow)
- **And** each pane shows two lorem paragraphs ("Mist enveloped the
  ship..." kind — paraphrasable); clicking a tab switches panes (React
  state, `aria-selected`)

### Feature: Alerts showcase

Five solid dismissible alerts on a white band.

#### Scenario: Alert variants render as in the reference
- **Given** the alerts band renders
- **When** the alerts are visible
- **Then** the heading shows the h3 "Alerts"
- **And** five solid alerts render in order — Primary `#f34573`,
  Success `#7fbb00`, Danger `#ec1c24`, Warning `#ffd900`, Info
  `#1cc7d0` — white text, "A simple <color> alert with an example
  link. Give it a click if you like." kind of copy (paraphrasable) with
  a linked phrase
- **And** each alert has a × close that dismisses it (React state)

### Feature: Typography showcase

Labeled type samples on a white band.

#### Scenario: Type scale renders as in the reference
- **Given** the typography band renders
- **When** the samples are visible
- **Then** labeled rows Heading 1–6 each render "Almost before we knew
  it, we had left the ground." at the respective size (weight 300,
  `#394a6d`, lh 1.5)
- **And** "Paragraph" renders a lorem paragraph and "Quote" renders a
  blockquote + a clean attribution line (e.g. "Jane Smith, CEO &
  Founder" — the source has typos; never reproduce them)
- **And** colored text rows render Muted `#d4d7dd` / Primary `#f34573`
  / Info `#1cc7d0` / Success `#7fbb00` / Warning `#ffd900` / Danger
  `#ec1c24` sample sentences

### Feature: Images showcase

Four image treatments over one shared image on a `bg-light` band.

#### Scenario: Image variants render as in the reference
- **Given** the images band renders
- **When** the row is visible
- **Then** four columns render over ONE shared picsum image
  (`flairkit-img-1`): "Rounded Raised Image" (soft drop shadow),
  "Rounded Image", "Circle Image", "Thumbnail Image" (bordered)

### Feature: Javascript components showcase

Datetime picker, modal, popovers, and tooltips on a white band.

#### Scenario: JS component demos render as in the reference
- **Given** the band renders
- **When** the demos are visible
- **Then** "Datetime Picker" renders one native `datetime-local` field
  (bootstrap-datetimepicker is never copied)
- **And** "Modal" renders a "Basic Modal" button opening a centered
  modal — "Modal title" + × close + two lorem paragraphs (paraphrasable)
  — closable via × / backdrop / Escape with focus managed
- **And** "Popovers" renders four toggles (top / right / bottom / left)
  opening borderless shadowed popover cards
- **And** "Tooltips" renders four triggers (top / right / bottom / left)
  showing white/black shadowed tooltips (`aria-describedby`)

### Feature: Carousel showcase

A three-slide image carousel with captions and controls on a `bg-light`
band.

#### Scenario: Carousel renders as in the reference
- **Given** the carousel band renders
- **When** the slideshow is visible
- **Then** the heading shows the h3 "Carousel"
- **And** three image slides render (picsum seeded
  `flairkit-slide-1..3`) each with a bottom caption: white h5
  `.carousel-heading` ("First slide label" / "Second slide label" /
  "Third slide label") + a one-line lorem subtitle (paraphrasable)
- **And** Previous / Next controls move between slides (React state —
  Bootstrap JS never copied)

### Feature: Cards showcase

Three card flavors on a white band.

#### Scenario: Card variants render as in the reference
- **Given** the cards band renders
- **When** the row is visible
- **Then** card (a) is an image-top card (picsum `flairkit-card-1`,
  30px body padding) with "Card title" + quick example text + a "Go
  somewhere" link
- **And** card (b) is a text-center card with a 30px PINK `#f34573`
  lucide icon at top (30px side padding, 40px bottom) + title + text +
  link
- **And** card (c) is a text-center borderless card with an 80px PINK
  `#f34573` round icon circle (white 20px glyph) + title + text + link
- **And** all three share the `0 5px 15px -5px rgba(0,0,0,.2)` shadow
  and "Card title" / "Some quick example text..." / "Go somewhere" copy
  kind (paraphrasable)

### Feature: Footer

A light-gray centered footer whose attribution links Component Dock.

#### Scenario: Footer renders as in the reference
- **Given** the footer renders
- **When** the footer is visible
- **Then** it is a `bg-light` (`#f8f9fa`) band with `.site-section`
  padding and a single centered line: "Copyright © <current year> All
  rights reserved | Made with <heart icon> by Component Dock"
- **And** the heart glyph renders (lucide Heart, small, warm accent)
- **And** the attribution links `https://www.componentdock.com/` branded
  "Component Dock" — never ColorLib, "Colorlib", "Regen", or the source
  slug

### Feature: Design tokens & typography

The recreation exposes the reference palette and Roboto as Tailwind 4
`@theme` tokens.

#### Scenario: Theme tokens match the reference palette
- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: primary `#f34573`, secondary
  `#6c757d`, success `#7fbb00`, danger `#ec1c24`, warning `#ffd900`,
  info/cyan `#1cc7d0`, heading navy `#394a6d`, heading slate
  `#454d66`, muted `#d4d7dd`, light band `#f8f9fa`
- **And** Roboto (300–500) loads via Google Fonts `<link>` in
  `index.html`; body renders weight 300 with lh 1.7, headings weight 300
  `#394a6d` lh 1.5 (hero h1 bold white)
- **And** colored buttons carry per-color soft shadows on hover
  (`0 5px 15px -5px rgba(<color>, .8)`), 0.9rem NOT-uppercase labels;
  pill buttons radius 50px; fab 32px circle
- **And** inputs focus to a `#f34573` border with no ring; section
  rhythm is 7rem top/bottom (80vh hero, no overlay)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/flairkit/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/flairkit/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Section order 1:1 with the preview DOM: hero (80vh photo, no
      overlay) → Buttons (bg-light) → Inputs → Checkboxes/Radios/Toggles
      (bg-light) → Sliders/Badges/Pagination/Progress (two-column) →
      Navbars (pb-0, 6 bars) → Tab (bg-light) → Alerts → Typography →
      Images (bg-light) → Javascript Components → Carousel (bg-light) →
      Cards → bg-light footer
- [ ] Pink `#f34573` is the single brand color: hero CTA, primary
      buttons/badges/alerts, active pagination, focused input borders,
      checked controls, card icon accents, navbar bg-primary bar
- [ ] Hero: photo (picsum `flairkit-hero`) at 80vh cover/center with NO
      gradient wash; bold white h1 "Flairkit UI Kit"; white lorem
      subtitle; pink "View All Here" button (default corners, px-4 py-3,
      not uppercase) → `#start`
- [ ] Buttons: label-row layout (Style / Sizes / Colors / Outline /
      Outline Style 2); Default + Rounded pill (Home icon) + Heart fab;
      sm/md/lg; nine solid colors incl. Link; eight outlines (primary
      pill per DOM) and eight `width-2` 2px-border outlines; per-color
      hover shadows; 0.9rem not-uppercase
- [ ] Inputs: Style 1 (Default / is-valid / is-invalid), Style 2 (pill
      30px), Style 3 (transparent icon groups: Password / Username pill
      / Email + append), Style 4 (underline-only Username / Password /
      Email); focus border `#f34573`, no ring
- [ ] Controls: checkboxes/radios/toggles with checked + disabled
      variants; switches flip with `aria-checked`; checked state
      `#f34573`
- [ ] Sliders: two native/styled range demos — no nouislider copy
- [ ] Badges: eight SOLID uppercase badges + pill variants (11px/400,
      px-3)
- [ ] Pagination: three rows in DOM order — info « 1 2 3 », primary « 1
      2 3 », secondary "Prev … 5 6 7 8 9 … Next"; 40px round links,
      active filled + soft shadow, clickable (React state)
- [ ] Progress: four 7px bars (success/info/warning/danger) + ONE
      labeled percent row ("WordPress" 94%)
- [ ] Navbar: six stacked dark bars (primary/success/info/danger/
      secondary/transparent) — Brand + Home/Features/Pricing + Dropdown
      link; bar 2 expanded variant (current/Link/Dropdown/Disabled);
      uppercase .8rem items, `rgba(255,255,255,.2)` hover; React-state
      dropdowns with `aria-expanded`
- [ ] Tabs: two white tab cards (secondary gray / cyan active pills),
      Profile/Messages/Settings, React state switching, `aria-selected`
- [ ] Alerts: five solid dismissible variants (primary/success/danger/
      warning/info) with working × closes
- [ ] Typography: Heading 1–6 "Almost before we knew it..." scale
      (weight 300 `#394a6d`), Paragraph + Quote (clean attribution,
      source typos never reproduced), Muted/Primary/Info/Success/
      Warning/Danger text rows
- [ ] Images: Rounded Raised / Rounded / Circle / Thumbnail over ONE
      shared picsum image (`flairkit-img-1`)
- [ ] JS components: native datetime-local picker; "Basic Modal" →
      centered modal (× / backdrop / Escape close, focus managed);
      4-direction popovers (borderless shadowed cards); 4-direction
      tooltips (white/black shadowed, `aria-describedby`)
- [ ] Carousel: 3 picsum slides (`flairkit-slide-1..3`) with white
      caption h5 + lorem line, Previous / Next controls (React state)
- [ ] Cards: image-top card, pink-icon center card, pink round-icon
      borderless card — all `0 5px 15px -5px rgba(0,0,0,.2)` shadow
- [ ] Footer: bg-light centered "Copyright © <year> All rights reserved
      | Made with <heart> by Component Dock" linking
      `https://www.componentdock.com/`
- [ ] All images are `picsum.photos/seed/flairkit-*` placeholders;
      icons from `lucide-react` (Home/Heart/Lock/User/Mail replace
      icomoon); no copied assets or CSS; no Bootstrap JS, nouislider,
      datetimepicker, font-awesome/icomoon fonts, or jQuery
- [ ] Zero `colorlib` / "Regen" / "Regen UI Kit" demo-brand references
      anywhere in `apps/flairkit` (comments included)
- [ ] App folder `apps/flairkit`, package
      `@free-react-templates/flairkit`, `homepage`
      `https://flairkit.free.componentdock.com`, `public/CNAME`
      `flairkit.free.componentdock.com`, lockfile registers the
      workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh flairkit` passes
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
