# Template: Trolley (Shopping Cart Dropdown)

## Purpose

Trolley is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 05" demo design
(source: https://colorlib.com/wp/template/dropdown-05/), built under a
DIFFERENT name (Trolley) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page showcases a
shopping-cart dropdown — a salmon-pink "Cart [3]" bar with a 60×60 split
button (white cart icon) that opens a white card menu of three product rows
(thumbnail, name, price, quantity) plus a "VIEW ALL" link — a minimal,
functional component-showcase page on a flat light-gray background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 05" — fifth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 758). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime** (see
  `docs/templates/menubar/`, `docs/templates/popmenu/`,
  `docs/templates/skycast/`, `docs/templates/chime/`).
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-05/`
  (HTTP 200, 15.7 KB HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-05/` 404s — the dropdown
  demos live under the `/theme/bootstrap/` subpath; the ColorLib template
  page (`colorlib.com/wp/template/dropdown-05/`) links the correct preview.
  Stylesheet `css/style.css` (222 KB, ftco-style Bootstrap 4 theme; the
  template-specific rules are the LAST ~90 lines, around line 8135); libs:
  jquery, popper, bootstrap.min.js, ionicons (4.5.6). Google Font **Roboto**
  (weights 400/500/700) loaded via a Cloudflare `/cf-fonts/s/roboto/`
  @font-face block in the preview HTML (for the recreation, use a Google
  Fonts `<link>` per conventions). `js/main.js` is only a `fullHeight`
  helper — no dropdown logic (Bootstrap handles it).
  Cross-checked against the TEMPLATES.md screenshot (`dropdown-05.jpg`,
  1200×972, viewed in browser) — all match. The demo brands itself
  "Dropdown #05"; the recreation uses the NEW name **Trolley**.
- **Visual design (from live DOM + CSS tokens + screenshot):** minimalist
  component-showcase page on a flat very-light-gray background `#fafafa`
  (confirmed by both the CSS `body` rule and the screenshot). Centered dark
  heading "Dropdown #05" (28px Roboto, `#000`, `.heading-section` with
  `mb-5 pb-md-4` margins); below it a single centered column holding the
  cart bar. The bar is `div.btn-group.justify-content-between.align-items-center`
  — Bootstrap base `position: relative; display: inline-flex` overridden by
  `min-width: 25rem` (400px), `background: #fa697c` (salmon pink),
  `border-radius: 4px`, `padding-left: 20px`. LEFT side: `p.text-left.mb-0.heading`
  "Cart [3]" (the `[3]` is a `span`) in WHITE (`.btn-group .heading { color:
#fff }`). RIGHT side: the trigger `a.split.dropdown-toggle.dropdown-toggle-split.d-flex.align-items-center.justify-content-center`
  — a 60×60 square button (`width/height: 60px`), `background: #f83851`
  (deeper pink), `border-radius: 0 4px 4px 0` (right side only), holding a
  white `i.ion-ios-cart` cart icon (`span.icon`, color #fff); hover/focus
  `background: #f95066`. Bootstrap's caret is suppressed
  (`.dropdown-toggle::after { display: none }` — no caret on the trigger).
  The menu card (`.btn-group .dropdown-menu`) is white, borderless,
  `min-width: 25rem` (400px; 22rem on ≤767.98px), `padding: 0`,
  `margin-top: 80px`, horizontally centered on the bar
  (`left: 50% !important; transform: translateX(-50%) !important`),
  shadow `0 10px 34px -20px rgba(0,0,0,.41)`, with a small white caret
  triangle near its top-RIGHT (`.dropdown-menu:after`, `top: -.7em`,
  `right: 20px`, `border-width: 0 .7em .8em .7em`, `border-bottom-color:
#fff`; a translucent `rgba(0,0,0,.02)` duplicate `:before` at `top: -.8em`
  casts a soft shadow; both `z-index: -1`). NOTE: unlike Dropdown 04
  (Chime, caret top-CENTER), this demo's caret is at the RIGHT
  (`right: 20px`) — it sits roughly under the split button.
  Three rows, each `div.dropdown-item.d-flex.align-items-start` (16px,
  `rgba(0,0,0,.7)`, weight 400, `padding: 20px`, `border-bottom: 1px solid
rgba(0,0,0,.05)` — last row none, `white-space: normal`, hover
  `background: transparent`): a 60×60 `div.img` thumbnail
  (`background-size: cover`, product photo in the original) on the LEFT,
  and a `div.text.pl-3` (width `calc(100% - 60px)`, `pl-3` = 12px gap) on
  the right: `h4` product name (18px, weight 500, `rgba(0,0,0,.8)`,
  `margin-bottom: 0`) then `p.mb-0` with the price as an `<a href="#">`
  (link color `#fa697c` — pink) plus `span.quantity.ml-3` "Quantity: NN"
  (`rgba(0,0,0,.3)` gray). Fourth row:
  `div.dropdown-item.text-center.btn-link` "View All" — uppercase, 13px,
  weight 500, link color `#fa697c`, with a right arrow icon
  (`ion-ios-arrow-round-forward`). Screenshot shows the menu OPEN (default
  reference state) — matches CSS exactly. Section padding is `7em 0`;
  container max-width 1140px. No header, no hero, no footer — the page is
  purely the demo section.
- **Product copy (from live DOM, verbatim):**
  1. Casual Shoes X340 — $25.99 — Quantity: 01 — thumbnail: tan/brown
     casual sneakers
  2. Sport Shoes N700 — $30.89 — Quantity: 02 — thumbnail: blue athletic
     sneakers
  3. Casual Shoes ADS20 — $22.50 — Quantity: 01 — thumbnail: dark
     blue/black casual sneakers
  (TEMPLATES.md screenshot confirms the same three footwear thumbs; the
  third price is `$22.50` per the DOM — the screenshot text is small and
     easily misread.)
- **Section order (1:1, from live demo DOM):**
  1. Section (`section.ftco-section`, padding 7em 0) → `div.container`.
  2. Header row (`div.row` → `div.col-md-12.text-center`): `h2.heading-section.mb-5.pb-md-4`
     "Dropdown #05" (28px, `#000`, centered).
  3. Demo row (`div.row.justify-content-center` → `div.col-md-12.d-flex.justify-content-center`):
     `.btn-group.justify-content-between.align-items-center` (400px salmon
     bar) containing:
     - Static label: `p.text-left.mb-0.heading` "Cart [3]" (white, 18px).
     - Trigger: `a.split.dropdown-toggle.dropdown-toggle-split.d-flex.align-items-center.justify-content-center`
       (60×60 `#f83851` button, white cart icon, `data-toggle="dropdown"`,
       `aria-haspopup="true"`, `aria-expanded="false"`).
     - `.dropdown-menu` (400px white card, shadow, caret top-right): three
       `div.dropdown-item.d-flex.align-items-start` (16px, `rgba(0,0,0,.7)`,
       `padding: 20px`, `border-bottom` 1px `rgba(0,0,0,.05)`), each:
       `div.img` 60×60 product thumbnail + `div.text.pl-3` (`h4` name +
       `p` with price link + `span.quantity`), in order:
       1. Casual Shoes X340 — $25.99 — Quantity: 01
       2. Sport Shoes N700 — $30.89 — Quantity: 02
       3. Casual Shoes ADS20 — $22.50 — Quantity: 01
          then `div.dropdown-item.text-center.btn-link` "View All" + right
          arrow icon (uppercase, 13px, `#fa697c`).
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                                                                                                | Source                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| Page background | `#fafafa` (flat very light gray — confirmed in screenshot)                                                                                                                                                                                                                                                                                                                           | `body` ftco rule                                    |
| Brand pink      | `#fa697c` (salmon/coral pink — cart bar background, plain `a` link color, prices, "View All" link)                                                                                                                                                                                                                                                                                   | `a` ftco rule + `.btn-group` + `.btn-link` override |
| Split button    | 60×60 square, `#f83851` (deeper pink), `border-radius: 0 4px 4px 0` (right side only), white cart icon; hover/focus `#f95066`                                                                                                                                                                                                                                                        | `.btn-group .split`                                 |
| Bar             | `min-width: 25rem` (400px), `background: #fa697c`, `border-radius: 4px`, `padding-left: 20px`; left label "Cart [3]" WHITE (`#fff`), Bootstrap base keeps `position: relative; display: inline-flex`                                                                                                                                                                                 | `.btn-group` + `.btn-group .heading`                |
| Heading color   | `#000` (black), 28px Roboto, centered, `mb-5 pb-md-4` (2rem/1.5rem bottom margins)                                                                                                                                                                                                                                                                                                   | `.heading-section`                                  |
| Menu card       | `min-width: 25rem` (400px; 22rem on ≤767.98px), bg `#fff`, border none, padding 0, `margin-top: 80px`, centered under bar (`left: 50%`, `translateX(-50%)`), shadow `0 10px 34px -20px rgba(0,0,0,.41)`; white caret triangle near top-RIGHT (`right: 20px`; `:after` `top: -.7em` `border-bottom-color: #fff`, `:before` shadow-cast duplicate at `top: -.8em`, both `z-index: -1`) | `.btn-group .dropdown-menu` + `::before/::after`    |
| Item row        | 16px, `rgba(0,0,0,.7)`, weight 400, `padding: 20px`, `border-bottom: 1px solid rgba(0,0,0,.05)` (last row none), `white-space: normal`, hover `background: transparent`                                                                                                                                                                                                              | `.btn-group .dropdown-menu .dropdown-item`          |
| Thumbnail       | 60×60 square (`background-size: cover`), product photo in the original (shoes); text column `width: calc(100% - 60px)` + `pl-3` (12px gap)                                                                                                                                                                                                                                           | `.dropdown-item .img` + `.dropdown-item .text`      |
| Item text       | Name `h4`: 18px, weight 500, `rgba(0,0,0,.8)`, `margin-bottom: 0`; price link: `#fa697c` (pink); quantity `span.quantity`: `rgba(0,0,0,.3)` gray                                                                                                                                                                                                                                     | `.dropdown-item .text h4` + `a` + `.quantity`       |
| View All link   | Uppercase, 13px, weight 500, `#fa697c`, centered, right arrow icon (lucide `ArrowRight`)                                                                                                                                                                                                                                                                                             | `.dropdown-menu .dropdown-item.btn-link`            |
| Font family     | `"Roboto", Arial, sans-serif` (weights 400/500/700 via Cloudflare @font-face; body 18px/1.8)                                                                                                                                                                                                                                                                                         | `body` + preview HTML @font-face block              |
| Section rhythm  | `7em 0` padding; container max-width 1140px                                                                                                                                                                                                                                                                                                                                          | `.ftco-section`, `.container`                       |
| Icons           | `ion-ios-cart` → lucide `ShoppingCart`; `ion-ios-arrow-round-forward` → lucide `ArrowRight` (ionicons NOT copied)                                                                                                                                                                                                                                                                    | preview HTML                                        |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Trolley app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Trolley — Shopping Cart Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
mirroring the reference heading "Dropdown #05".

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #05"
- **AND** the heading SHALL use the brand font (Roboto), black color, 28px,
  with generous bottom margins (mb-5 pb-md-4 equivalent)

### Requirement: Cart bar

The system SHALL render the salmon-pink cart bar exactly like the reference:
a 400px-wide pink bar with the white "Cart [3]" label on the left and a
60×60 deeper-pink split button with a white cart icon on the right, on the
flat `#fafafa` page background.

#### Scenario: Cart bar renders with label and split trigger

- **GIVEN** the demo section is rendered
- **WHEN** the cart bar area loads
- **THEN** a bar SHALL be visible with the brand background `#fa697c`,
  `border-radius: 4px`, `min-width: 25rem` (400px), `padding-left: 20px`
- **AND** its left side SHALL show the white 18px label "Cart [3]" (the
  count "3" in a `span`)
- **AND** its right side SHALL show a 60×60 square button with background
  `#f83851`, `border-radius: 0 4px 4px 0`, containing a white cart icon
  (lucide `ShoppingCart`)
- **AND** the split button SHALL have `aria-haspopup="menu"` and dynamic
  `aria-expanded` (menu closed → `false`)
- **AND** the trigger SHALL have NO caret (`.dropdown-toggle::after` is
  suppressed in the reference)

### Requirement: Dropdown menu behavior

The system SHALL open the cart menu on trigger click, close it on outside
click, Escape, or item selection, and keep only one menu open at a time.

#### Scenario: Open and close the menu

- **GIVEN** the split trigger button with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, directly below the bar, horizontally
  centered on it (with the small white caret triangle near its top-right,
  per the reference)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu or presses Escape
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

#### Scenario: Selecting an item closes the menu

- **GIVEN** the menu is open
- **WHEN** the user activates any cart item or the "View All" link
- **THEN** the menu SHALL close (the demo items are selection placeholders —
  no navigation required, but closing is required)

### Requirement: Cart items

The system SHALL render the three reference product rows in order, each as
a 60×60 product thumbnail on the left and a text block on the right
(name + price + quantity), mirroring the reference copy exactly.

#### Scenario: Three product rows in order

- **GIVEN** the dropdown menu is open
- **THEN** it SHALL contain, in order, the rows:
  "Casual Shoes X340 — $25.99 — Quantity: 01",
  "Sport Shoes N700 — $30.89 — Quantity: 02",
  "Casual Shoes ADS20 — $22.50 — Quantity: 01"
- **AND** each row SHALL have a 60×60 thumbnail image (deterministic
  placeholder, e.g. `https://picsum.photos/seed/trolley-<n>/120/120` — the
  original thumbs are footwear photos, so screen the seed for a product-like
  subject per the replication skill)
- **AND** the name SHALL be 18px/500/`rgba(0,0,0,.8)` and the price SHALL
  be the brand pink `#fa697c`
- **AND** the quantity text SHALL be `rgba(0,0,0,.3)` gray
- **AND** rows SHALL be separated by `1px solid rgba(0,0,0,.05)` borders
  (no border after the last row)

### Requirement: View All link

The system SHALL render the "View All" link at the bottom of the menu,
mirroring the reference: centered, uppercase, 13px, weight 500, link color
`#fa697c`, with a right arrow icon.

#### Scenario: View All row

- **GIVEN** the dropdown menu is open
- **WHEN** the menu footer row loads
- **THEN** a link SHALL be visible with the text "View All" and a right arrow
  icon (lucide `ArrowRight`)
- **AND** the link SHALL be centered, uppercase, 13px, weight 500, and use
  the brand pink `#fa697c`

### Requirement: Accessibility

The system SHALL expose dropdown semantics to assistive technology.

#### Scenario: Screen reader exposure

- **GIVEN** the trigger button and menu are rendered
- **WHEN** assistive technology inspects the dropdown
- **THEN** the trigger SHALL expose `aria-haspopup="menu"` and reflect the
  open state via `aria-expanded`
- **AND** the menu SHALL be associated with the trigger (e.g. `aria-controls`
  / `id` pairing)
- **AND** all interactive rows (cart items, "View All") SHALL be keyboard
  focusable

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

- [ ] `npm run verify:app trolley` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #05" (black, 28px Roboto, centered) on
      flat `#fafafa` background
- [ ] Cart bar is `#fa697c`, 400px min-width, radius 4px; left "Cart [3]"
      white label; right 60×60 `#f83851` split button (radius `0 4px 4px 0`,
      hover `#f95066`) with white lucide `ShoppingCart` icon
- [ ] Menu opens centered under the bar (margin-top 80px), white card 400px
      (352px on small screens), shadow `0 10px 34px -20px rgba(0,0,0,.41)`,
      white caret near top-right (`right: 20px`)
- [ ] Three rows in order with the reference copy (names, $25.99/$30.89/
      $22.50, Quantity 01/02/01), 60×60 thumbs, pink prices, gray
      quantities, 1px `rgba(0,0,0,.05)` separators
- [ ] "VIEW ALL" row: uppercase 13px/500 `#fa697c` + `ArrowRight` icon,
      centered
- [ ] `aria-haspopup`/`aria-expanded` flip on open/close; menu closes on
      outside click, Escape, and item selection
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/trolley` (provenance lives only here + TEMPLATES.md + PR)
