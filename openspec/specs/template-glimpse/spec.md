# Template: Glimpse (Media Card Dropdown)

## Purpose

Glimpse is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 09" demo design
(source: https://colorlib.com/wp/template/dropdown-09/), built under a
DIFFERENT name (Glimpse) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page showcases a
button-triggered media-card dropdown — a centered light-cyan "View Details"
button (with the standard white caret) that opens a right-aligned white card
below it holding a two-column media layout: a portrait photo on the left
(50% width) and a short descriptive paragraph on the right (50% width) — a
minimal, functional component-showcase page on a flat light-gray background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 09" — ninth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 762). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee** (see `docs/templates/menubar/`,
  `docs/templates/popmenu/`, `docs/templates/skycast/`,
  `docs/templates/chime/`, `docs/templates/trolley/`,
  `docs/templates/passkey/`, `docs/templates/onboard/`,
  `docs/templates/marquee/`). This prep: Dropdown 09 → **Glimpse**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-09/`
  (HTTP 200, 14.6 KB HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-09/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet `css/style.css`
  (222 KB, 8288 lines, ftco-style Bootstrap 4 theme; the template-specific
  rules are the LAST ~150 lines, from the ftco `body` rule at line 8135
  through `.btn-group .text { width: 50% }` at line 8288); libs: jquery,
  popper, bootstrap.min.js, ionicons 4.5.6 (loaded but NOT used by this
  demo — no icons in the markup). Google Font **Roboto** (weights
  400/500/700) loaded via a Cloudflare `/cf-fonts/s/roboto/` @font-face
  block in the preview HTML (for the recreation, use a Google Fonts
  `<link>` per conventions). `js/main.js` is only a `fullHeight` helper —
  no dropdown logic (Bootstrap handles it). Cross-checked against the
  TEMPLATES.md screenshot (`dropdown-09.jpg`, 1200×972, viewed in browser)
  — all match.
- **Visual design (from live DOM + CSS tokens + screenshot):** minimalist
  component-showcase page on a flat **light-gray background `#fafafa`**
  (the ftco `body` rule at line 8140 — SAME treatment as Dropdown
  06/Passkey and 08/Marquee). Centered BLACK heading "Dropdown #09" (28px
  Roboto, `#000`, `.heading-section` with `mb-5 pb-md-4` margins — note
  `mb-5` (3rem), NOT Marquee's `mb-4`). Below it a single centered column
  holding the demo group:
  - **Trigger** = a real `<button type="button" class="btn btn-primary
dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
aria-expanded="false">` with text "View Details". ftco `.btn` override:
    `padding: 12px 16px; border-width: 1px; border-radius: 5px;
font-size: 14px; font-weight: 400; box-shadow: 0px 10px 20px -6px
rgba(0,0,0,.12); position: relative; margin-bottom: 20px`. Brand fill:
    `.btn.btn-primary { background: #3fc5f0 !important; border-color:
#3fc5f0 !important; color: #fff }`, hover/focus `#12b5ea`. **The
    standard Bootstrap caret IS PRESENT** (`.dropdown-toggle::after` at
    line 2531 is untouched — NOT suppressed like Marquee; the caret is
    white on the primary button). Unlike the earlier series demos there is
    NO split/bar/logo — the button is the whole trigger.
  - **Menu** = `div.dropdown-menu.dropdown-menu-right` — RIGHT-aligned
    (Bootstrap base `right: 0; left: auto`), `border: none`, bg `#fff`,
    shadow `0px 10px 34px -20px rgba(0,0,0,.41)`, **`padding: 20px`**,
    **`min-width: 20rem` (320px)**, `margin-top: 20px`. Small white caret
    triangle near its top-RIGHT (`.btn-group .dropdown-menu:after`,
    `right: 35px`, `top: -.7em`, `border-width: 0 .7em .8em .7em`,
    `border-bottom-color: #fff`; a translucent `rgba(0,0,0,.02)` duplicate
    `:before` at `top: -.8em` casts a soft shadow; both `z-index: -1`).
    **MOBILE media query (max-width: 767.98px):** the menu CENTERS under
    the button (`left: 50% !important; transform: translateX(-50%)
!important`), `margin-top: 70px`, and the caret moves to `left: 50%;
margin-left: -.7em` (same treatment as Onboard; the INVERSE of
    Marquee/Passkey which have no mobile query).
  - **Media content** = `div.d-flex` inside the menu → two 50% columns:
    `div.img` (width 50%, `background-image: url(images/img.jpg)`, cover —
    the source photo is a 400×601 portrait, black-and-white shot of a
    musician/artist on a chair) and `div.text.pl-3` (width 50%, Bootstrap
    `pl-3` = 1rem left padding) containing one `<p>`: "A small river named
    Duden flows by their place and supplies it with the necessary
    regelialia." (gray body text, Roboto 18px/1.8 inherited).
- **Section order (1:1, from live demo DOM):**
  1. Section (`section.ftco-section`, padding **7em 0** — NOT Marquee's
     5em) → `div.container` (max-width 1140px).
  2. Header row (`div.row` → `div.col-md-12.text-center`):
     `h2.heading-section.mb-5.pb-md-4` "Dropdown #09" (28px, **#000 black**,
     centered — the light-background treatment, NOT white-on-periwinkle).
  3. Demo row (`div.row.justify-content-center` →
     `div.col-md-12.d-flex.justify-content-center`): `div.btn-group`
     containing:
     - Trigger: `button.btn.btn-primary.dropdown-toggle` "View Details"
       (cyan `#3fc5f0`, radius 5px, padding 12px 16px, 14px font, shadow
       `0px 10px 20px -6px rgba(0,0,0,.12)`, margin-bottom 20px, WHITE
       caret present, `aria-haspopup="true"` / `aria-expanded="false"`).
     - Menu: `div.dropdown-menu.dropdown-menu-right` — white card (320px,
       padding 20px, shadow, caret top-right `right: 35px`), right-aligned
       under the trigger, containing `div.d-flex` with `div.img` (50%,
       cover portrait photo) + `div.text.pl-3` (50%, 1rem left padding,
       one gray paragraph). On mobile (<768px) the card centers under the
       button with margin-top 70px.
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                                                                                                                    | Source                                           |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Page background | `#fafafa` (flat light gray — SAME as Passkey/Marquee)                                                                                                                                                                                                                                                                                                                                                    | ftco `body` rule (line 8140)                     |
| Brand cyan      | `#3fc5f0` (button background AND border, plain `a` link color); hover/focus `#12b5ea`                                                                                                                                                                                                                                                                                                                    | `.btn.btn-primary` + `a` rules                   |
| Button          | `btn.btn-primary` — `padding: 12px 16px`, `border-width: 1px`, `border-radius: 5px`, `font-size: 14px`, `font-weight: 400`, shadow `0px 10px 20px -6px rgba(0,0,0,.12)`, `margin-bottom: 20px`, white text; **standard caret PRESENT** (white triangle, `border-top: 0.3em solid` base rule untouched)                                                                                                   | `.btn` + `.btn.btn-primary`                      |
| Menu card       | `min-width: 20rem` (320px), bg `#fff`, border none, **`padding: 20px`**, `margin-top: 20px`, RIGHT-aligned (`dropdown-menu-right` → `right: 0; left: auto`), shadow `0px 10px 34px -20px rgba(0,0,0,.41)`; white caret triangle near top-RIGHT (`right: 35px`; `:after` `top: -.7em` `border-bottom-color: #fff`, `:before` shadow-cast duplicate at `top: -.8em` `rgba(0,0,0,.02)`, both `z-index: -1`) | `.btn-group .dropdown-menu` + `::before/::after` |
| Mobile menu     | `@media (max-width: 767.98px)`: menu `left: 50% !important; transform: translateX(-50%) !important`, `margin-top: 70px`; caret `left: 50%; margin-left: -.7em` (menu CENTERS under the button — INVERSE of Marquee which stays right-aligned at all viewports)                                                                                                                                           | `.btn-group .dropdown-menu` media query          |
| Media layout    | `div.d-flex` → `div.img` `width: 50%` (background-image, cover, no explicit height — driven by content) + `div.text` `width: 50%`, `pl-3` = 1rem left padding (Bootstrap utility)                                                                                                                                                                                                                        | `.btn-group .img` / `.btn-group .text`           |
| Media image     | Source `images/img.jpg` — 400×601 portrait, B&W musician/artist on a chair. Recreation MUST use a picsum placeholder (never the ColorLib asset): suggest a portrait crop (e.g. `https://picsum.photos/id/1027/400/600` — verified portrait, dark bg — or a `glimpse-<n>` seed); subject screening required before pinning (see skill)                                                                    | preview HTML inline style                        |
| Media text      | One `<p>`: "A small river named Duden flows by their place and supplies it with the necessary regelialia." — gray body color (`color: gray`), Roboto 18px/1.8 inherited; text may be paraphrased but keep the same kind of content (short filler description)                                                                                                                                            | preview DOM                                      |
| Heading color   | `#000` (BLACK — on the light `#fafafa` background, NOT white like Onboard), 28px Roboto, centered, `mb-5 pb-md-4` (3rem bottom margin — NOTE: `mb-5`, not Marquee's `mb-4`)                                                                                                                                                                                                                              | `.heading-section`                               |
| Font family     | `"Roboto", Arial, sans-serif` (weights 400/500/700 via Cloudflare @font-face; body 18px/1.8)                                                                                                                                                                                                                                                                                                             | ftco `body` + preview HTML @font-face block      |
| Section rhythm  | **7em 0** padding (NOT Marquee's 5em); container max-width 1140px                                                                                                                                                                                                                                                                                                                                        | `.ftco-section`, `.container`                    |
| Icons           | NONE — this demo uses no icons (unlike Marquee's hamburger/arrows); the only adornment is the standard Bootstrap caret on the button                                                                                                                                                                                                                                                                     | preview HTML (ionicons loaded but unused)        |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Glimpse app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Glimpse — Media Card Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
mirroring the reference heading "Dropdown #09".

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #09"
- **AND** the heading SHALL use the brand font (Roboto), BLACK color (#000),
  28px, with generous bottom margins (mb-5 pb-md-4 equivalent — 3rem bottom
  margin, more than Marquee's mb-4)

### Requirement: Trigger button

The system SHALL render the centered cyan "View Details" button with the
standard white caret and full dropdown semantics.

#### Scenario: Button renders with caret

- **GIVEN** the demo section is rendered
- **WHEN** the demo row loads
- **THEN** a centered button SHALL be visible with the text "View Details"
- **AND** the button SHALL use the brand fill `#3fc5f0` (background AND
  border), white text, `border-radius: 5px`, padding 12px 16px, 14px font
  size, and the reference shadow `0px 10px 20px -6px rgba(0,0,0,.12)`
- **AND** the button SHALL show the standard dropdown caret (a small white
  triangle — it is NOT suppressed in this demo, unlike Marquee)
- **AND** on hover/focus the button SHALL darken to `#12b5ea`
- **AND** the trigger SHALL be a semantic `<button>` with
  `aria-haspopup="menu"` and dynamic `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the media card on trigger click, close it on outside
click, Escape, or button re-click, and keep only one menu open at a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger button with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, directly below the button, RIGHT-aligned
  (white card, min-width 320px, padding 20px, shadow
  `0px 10px 34px -20px rgba(0,0,0,.41)`, small white caret triangle near its
  top-right at `right: 35px`, per the reference)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu, presses Escape, or clicks the
  trigger again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

### Requirement: Media card content

The system SHALL render the media card's two-column layout: portrait image
on the left (50%) and descriptive text on the right (50%).

#### Scenario: Media columns

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL contain a two-column horizontal layout
  (`d-flex` equivalent)
- **AND** the LEFT column SHALL be a 50%-width image (cover) showing a
  portrait photo (picsum placeholder — the source is a 400×601 B&W
  musician portrait; never copy the ColorLib asset)
- **AND** the RIGHT column SHALL be 50%-width with 1rem left padding
  (`pl-3` equivalent) and SHALL contain one short paragraph (source: "A
  small river named Duden flows by their place and supplies it with the
  necessary regelialia." — paraphrasing allowed, same kind of content)
- **AND** the paragraph SHALL use gray body text in the brand font (Roboto)

### Requirement: Mobile menu behavior

The system SHALL center the menu card under the button on small viewports,
mirroring the reference media query.

#### Scenario: Menu centers on mobile

- **GIVEN** the viewport is narrower than 768px (max-width: 767.98px
  equivalent)
- **WHEN** the menu is open
- **THEN** the menu SHALL be horizontally centered under the button
  (left 50% + translateX(-50%) equivalent) with `margin-top: 70px`
- **AND** the caret SHALL move to the horizontal center of the card
  (left 50%, margin-left -.7em equivalent)

### Requirement: Accessibility

The system SHALL expose dropdown semantics to assistive technology.

#### Scenario: Screen reader exposure

- **GIVEN** the trigger button and menu are rendered
- **WHEN** assistive technology inspects the dropdown
- **THEN** the trigger SHALL expose `aria-haspopup="menu"` and reflect the
  open state via `aria-expanded`
- **AND** the menu SHALL be associated with the trigger (e.g. `aria-controls`
  / `id` pairing)
- **AND** the media image SHALL be decorative (`alt=""` / background-image —
  it carries no information beyond the text column)

### Requirement: Footer

The system SHALL render the mandatory monorepo footer with the Component
Dock credit link (the source demo has no footer — this is a monorepo
addition per conventions.md).

#### Scenario: Footer with Component Dock link

- **GIVEN** the page is rendered
- **WHEN** the footer area loads
- **THEN** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app glimpse` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #09" (BLACK, 28px Roboto, centered,
      mb-5/3rem bottom margin) on flat light-gray `#fafafa` background
      (NOT #79a0eb periwinkle — that's Onboard)
- [ ] Section padding is **7em 0** (NOT Marquee's 5em)
- [ ] Centered "View Details" button is cyan `#3fc5f0` (bg AND border),
      white text, radius 5px, padding 12px 16px, 14px, shadow
      `0px 10px 20px -6px rgba(0,0,0,.12)`, margin-bottom 20px, hover
      `#12b5ea`, with the standard WHITE caret (present, NOT suppressed)
- [ ] Menu opens RIGHT-aligned under the button (margin-top 20px), white
      card min-width 320px, padding 20px, shadow
      `0px 10px 34px -20px rgba(0,0,0,.41)`, white caret near top-right
      (`right: 35px`)
- [ ] Menu contains a d-flex two-column media layout: 50% cover portrait
      image (picsum placeholder, NOT the ColorLib asset) + 50% text column
      with 1rem left padding and one short gray paragraph
- [ ] On mobile (<768px) the menu centers under the button
      (translateX(-50%) equivalent) with margin-top 70px and centered caret
- [ ] `aria-haspopup`/`aria-expanded` flip on open/close; menu closes on
      outside click, Escape, and trigger re-click
- [ ] No icons in the demo (ionicons are loaded but unused in the source —
      the only adornment is the caret)
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/glimpse` (provenance lives only here + TEMPLATES.md + PR)
