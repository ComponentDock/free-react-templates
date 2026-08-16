# Template: Finis (Footer)

## Purpose

Finis is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 10"
design (source: https://colorlib.com/wp/template/bootstrap-footer-10/), built
under a DIFFERENT name (**Finis** — Latin for "the end", the classic closing
word of books and films, continuing the footer series' ending-themed naming:
Colophon → Envoi → Epilogue → Coda → Outro → Finale → Postlude → Stretto →
Fermata → **Finis**; a single lowercase word, kebab-case, no collision with
`apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-16), per
the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The page is a footer-only component demo: a
light-gray `70vh` filler area (labeled "Footer #10" in the source) → the
footer itself — a WHITE band (`padding: 7rem 0`, base text `color: #9d9d9d`,
Roboto throughout — no font override in this variant), containing a
FOUR-COLUMN top grid (three auto-width link columns **Store** (6 links: Men,
Women, Children, New Arrivals, Top Brands, Special Offers), **About** (6
links: About us, Clients, Services, Best sellers, Blog, Contact), **Legal**
(4 links: Terms & Conditions, Privacy Policy, Legality, Author License) +
one `col-md-4` **Subscribe** column with a blurb paragraph and a pill email
form: gray `#e6e6e6` pill input (radius 30px, height 50px, placeholder
italic `#b3b3b3` "Enter your e-mail") with an absolutely-positioned violet
`#614ad3` pill button "Send" (height 40px, white bold, soft shadow)) → then a
BOTTOM BAR separated by a `border-top` divider (`my-5`): left a small gray
copyright line ("© 2019 All Rights Reserved." in the source) and right five
MONOCHROME gray icon-only social links (Facebook, Twitter, Pinterest,
Instagram, Behance — `color: #9d9d9d`, hover → violet `#614ad3`; note: this
variant uses Behance, NOT Dribbble like footer-09/Fermata). This is the
STORE variant of the series: stacked (block) nav links, a subscribe form,
and the first right-aligned social bar — the design is LIGHT and minimal:
white background, one violet accent (`#614ad3`) reserved for the button and
hovers, dark `#000` bold 16px/900 column headings, gray link text, thin
divider. No images, no brand logo, no dark treatment.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 10" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a 70vh
  filler strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-10/. TEMPLATES.md has ONE
  copy (line 786, `- [ ]` unchecked). This prep: Bootstrap Footer 10 →
  **Finis**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (series-wide — see the colophon prep):**
  `https://preview.colorlib.com/theme/bootstrap-footer-10/` returns **HTTP
  404** ("Not Found" — a 9-byte body). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-10/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-10/` (HTTP 200,
  18,448 bytes HTML, `<title>Footer 10</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font — FontAwesome 4 codepoints, verified:
  facebook `\f09a`, twitter `\f099`, pinterest `\f0d2`, instagram `\f16d`,
  behance `\f1b4`), `css/bootstrap.min.css` (**Bootstrap v4.5.3**, shared
  with the series), `css/style.css` (2,578 bytes — a DEDICATED sheet
  containing ONLY the `.footer-39201` rules; verified: no other
  `footer-\d+` class anywhere in the HTML or the sheet). No JS behavior
  needed (jquery/popper/bootstrap.min.js are loaded but the footer is static
  — the recreation needs none of them). The `<head>` inlines cf-fonts
  `@font-face` blocks for **Roboto**, **Poppins** and **Source Serif Pro**
  (no Google Fonts `<link>`); the body declares Roboto and the footer
  **`.footer-39201` sets NO font-family override** — so the footer inherits
  Roboto. **Poppins and Source Serif Pro are loaded but never used in this
  footer's CSS** (theme leftovers — the recreation needs ONLY Roboto; this
  differs from footer-09/Fermata which overrode to Poppins).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-10.jpg`, viewed in browser):** light, minimal,
  store-style. Screenshot matches the live DOM (NO variance): light-gray
  (`#f8f9fa`) demo area with "Footer #10" centered; below it a WHITE footer
  band with a four-column top grid — three link columns (Store, About,
  Legal) with small gray stacked links under bold black 16px headings, and a
  Subscribe column with a paragraph, a light-gray pill email input
  (placeholder "Enter your e-mail") and a violet/periwinkle rounded "Send"
  button — then a thin horizontal divider and a bottom bar: small gray
  "© 2019 All Rights Reserved." on the left, five small gray social icons
  (Facebook, Twitter, Pinterest, Instagram, Behance) on the right. Clean,
  generous whitespace, no background image, no cards, no logo. The ONE
  violet accent (`#614ad3`) appears only on the Send button and as the hover
  color for nav links and social icons.
- **Structure (DOM order, 1:1):** `div.content.d-flex.align-items-center.bg-light`
  (height 70vh, `h2.w-100.text-center` "Footer #10") →
  `footer.footer-39201` (`padding: 7rem 0`, `color: #9d9d9d`, Roboto,
  white/transparent bg) → `div.container`:
  - **Row 1** (`div.row`) — FOUR columns:
    1. `div.col-md.mb-4.mb-md-0` — `h3` **"Store"** + `ul.list-unstyled.nav-links`
       (SIX STACKED links, `li` `display: block`, `margin-bottom: 10px`; `a`
       `color: #9d9d9d`, hover → `#614ad3`): Men, Women, Children, New
       Arrivals, Top Brands, Special Offers
    2. `div.col-md.mb-4.mb-md-0` — `h3` **"About"** + six stacked links:
       About us, Clients, Services, Best sellers, Blog, Contact
    3. `div.col-md.mb-4.mb-md-0` — `h3` **"Legal"** + four stacked links:
       Terms & Conditions, Privacy Policy, Legality, Author License
    4. `div.col-md-4.mb-4.mb-md-0` — `h3` **"Subscribe"** + `p.mb-4` (lorem
       ipsum blurb, inherits `#9d9d9d`) + `form.subscribe`:
       `input.form-control` (placeholder "Enter your e-mail"; bg `#e6e6e6`,
       radius 30px, height 50px, `padding-left: 30px; padding-right: 130px`,
       no border, text `#000`, placeholder `#b3b3b3` italic 14px) +
       `input.btn.btn-submit` `value="Send"` (bg `#614ad3`, height 40px,
       radius 30px, `padding: 0 30px`, white bold, `position: absolute;
top: 5px; right: 5px`, shadow `0 2px 2px 0 rgba(0,0,0,0.2)`; the
       `padding-right: 130px` on the input reserves room for the
       absolutely-positioned button)
  - **Row 2** (`div.row.align-items-center`) — bottom bar: 5. `div.col-12` → `div.border-top.my-5` (thin divider, Bootstrap border
    `#dee2e6`, 3rem vertical margin) 6. `div.col-md-6` — `p > small` **"© 2019 All Rights Reserved."**
    (Bootstrap `small` = 80% font-size, color inherits `#9d9d9d`) 7. `div.col-md-6.text-md-right` — `ul.social.list-unstyled` with FIVE
    icon-only links (`li` `display: inline-block`; `a` `display:
   inline-block`, `padding: 10px`, `color: #9d9d9d`, hover → `#614ad3`):
    Facebook, Twitter, Pinterest, Instagram, **Behance** (NOT Dribbble —
    see the icomoon codepoints above)
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** Row 1 is
  three equal auto-width `col-md` columns PLUS one `col-md-4` (Subscribe) —
  on md+ (≥768px) all four sit side by side; below md each `col-md` /
  `col-md-4` stacks full-width with `mb-4` spacing between (removed on md+
  via `mb-md-0`). Row 2: `col-md-6` + `col-md-6.text-md-right` — copyright
  left / social right on md+; below md they stack and the social row loses
  its right alignment (text-md-right is md+ only). No order flips, no
  horizontal scroll.
- **Icons:** icomoon (FontAwesome 4 codepoints): `icon-facebook` `\f09a`,
  `icon-twitter` `\f099`, `icon-pinterest` `\f0d2`, `icon-instagram` `\f16d`,
  `icon-behance` `\f1b4` — brand glyphs only. **lucide-react REMOVED brand
  icons** (Twitter/Facebook/Instagram/Pinterest/Behance are NOT reliable
  exports — probe every import with the `typeof` check; per the skill's
  brand-icon guidance render the brand glyphs as inline SVGs (simple-icons
  paths) with `aria-label`s).

## Design tokens (from the reference — `.footer-39201` only)

| Token             | Value                                                                                                                                                                                                                                                                                      | Source                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Font family       | **Roboto** — `body` sets `font-family: "Roboto", ...` and the footer `.footer-39201` does NOT override it (unlike footer-09/Fermata's Poppins). Poppins + Source Serif Pro are loaded by cf-fonts but NEVER used → the recreation adds ONLY a Roboto Google Fonts `<link>` in index.html   | `css/style.css` `body` + `.footer-39201` (no override)                                |
| Footer background | **White/transparent** — NO background color, NO image, NO overlay on `.footer-39201`; the white page shows through; `padding: 7rem 0` (LIGHT variant — no dark photo band)                                                                                                                 | `.footer-39201`                                                                       |
| Footer base color | **`#9d9d9d`** (medium gray) — set on `.footer-39201`; inherited by the nav links, social icons, blurb paragraph and copyright small                                                                                                                                                        | `.footer-39201`                                                                       |
| Brand accent      | **`#614ad3`** (violet/periwinkle) — the ONLY accent color: submit-button background AND the hover color for both `.nav-links li a` and `.social li a`                                                                                                                                      | `.footer-39201 .subscribe .btn-submit`, `.nav-links li a:hover`, `.social li a:hover` |
| Column headings   | `h3`: **`font-size: 16px`, `font-weight: 900`, `color: #000`, `margin-bottom: 20px`** (headings inherit Roboto — no font override)                                                                                                                                                         | `.footer-39201 h3`                                                                    |
| Nav links         | `li` **`display: block`** (STACKED vertically — NOT inline like footer-09), `margin-bottom: 10px`; `a` **`color: #9d9d9d`**, hover → **`#614ad3`**                                                                                                                                         | `.footer-39201 .nav-links li`, `li a`, `li a:hover`                                   |
| Subscribe input   | `.form-control`: **`background-color: #e6e6e6`**, `border-radius: 30px` (pill), `height: 50px`, `padding-left: 30px`, `padding-right: 130px` (room for the absolute button), `border: none`, `color: #000`; placeholder **`#b3b3b3`, `font-style: italic`, `font-size: 14px`**             | `.footer-39201 .subscribe .form-control` (+ placeholder rules)                        |
| Submit button     | `.btn-submit`: **`background: #614ad3`**, `height: 40px`, `border-radius: 30px` (pill), `padding-left/right: 30px`, `color: #fff`, `font-weight: bold`, **`position: absolute; top: 5px; right: 5px`** inside the relative `.subscribe` wrapper, `box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2)` | `.footer-39201 .subscribe .btn-submit`                                                |
| Subscribe wrapper | `.subscribe { position: relative; }` (the button's absolute positioning context)                                                                                                                                                                                                           | `.footer-39201 .subscribe`                                                            |
| Social icons      | `li` **`display: inline-block`**; `a` **`display: inline-block`, `padding: 10px`**, `color: #9d9d9d` (MONOCHROME gray — the colored-glyph treatment of footer-09 does NOT apply here), hover → **`#614ad3`**; five glyphs: Facebook, Twitter, Pinterest, Instagram, **Behance**            | `.footer-39201 .social li`, `li a`, `li a:hover`                                      |
| Divider           | `div.border-top.my-5` — Bootstrap `border-top` (`1px solid #dee2e6`) with `my-5` = 3rem top/bottom margin                                                                                                                                                                                  | DOM Bootstrap classes                                                                 |
| Copyright         | `p > small` (Bootstrap `small` = 80% font-size), color inherits `#9d9d9d`; source text "© 2019 All Rights Reserved." → recreation **"© <current year> Finis. All Rights Reserved."** + Component Dock link                                                                                 | DOM + `.footer-39201` color                                                           |
| Filler area       | `.content`: `height: 70vh`, Bootstrap `bg-light` = **`#f8f9fa`**, `d-flex align-items-center` with a centered `h2.w-100.text-center` label "Footer #10"                                                                                                                                    | `.content` + Bootstrap classes                                                        |
| Link transition   | `a { transition: .3s all ease; }`; `a, a:hover { text-decoration: none !important; }` (global)                                                                                                                                                                                             | `css/style.css` top rules                                                             |
| Icons             | icomoon (FontAwesome 4 codepoints): `icon-facebook` `\f09a`, `icon-twitter` `\f099`, `icon-pinterest` `\f0d2`, `icon-instagram` `\f16d`, `icon-behance` `\f1b4` — brand glyphs only; lucide brand icons removed → inline SVG (simple-icons) + `aria-label`                                 | `fonts/icomoon/style.css`                                                             |
| Mobile behavior   | Row 1: 3× `col-md` + `col-md-4` side by side on md+ (≥768px), stacked full-width with `mb-4` gaps below md; Row 2: `col-md-6`/`col-md-6` with social right-aligned (`text-md-right`) only on md+; no horizontal scroll                                                                     | Bootstrap classes                                                                     |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Finis app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler area and the footer inside the
  main landmark
- **AND** the document title SHALL be "Finis — Footer"

### Requirement: Filler demo area

The system SHALL render the light-gray filler strip above the footer,
matching the source's demo-content role.

#### Scenario: Filler renders with a centered label

- **GIVEN** the page is rendered
- **WHEN** the top of the page loads
- **THEN** a `#f8f9fa` light-gray area SHALL be visible filling the viewport
  above the footer (the source uses `height: 70vh`; the recreation may use a
  similar min-height so the footer still peeks into the first viewport)
- **AND** a centered level-2 heading SHALL label the demo (the source shows
  **"Footer #10"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Light footer band

The system SHALL render the white footer band with the source's padding,
base text color and Roboto typeface (this variant has NO background image,
NO overlay, NO dark treatment, NO Poppins override).

#### Scenario: Footer band renders light

- **GIVEN** the filler area is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `padding: 7rem 0` and
  base text `color: #9d9d9d`
- **AND** the footer SHALL have NO background color, NO background image and
  NO overlay — the white page background shows through (the LIGHT variant;
  do NOT copy Stretto/footer-08's dark photo band)
- **AND** the font family SHALL be Roboto (the source's `.footer-39201` does
  NOT override the body font — do NOT add Poppins like footer-09/Fermata)

### Requirement: Link columns

The system SHALL render the three link columns (Store, About, Legal) with
the source's exact headings, stacked link lists, gray link color and violet
hover.

#### Scenario: Link columns render with stacked links

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the top grid
- **THEN** three equal-width columns SHALL render on md+ with bold black
  16px/900 headings (`margin-bottom: 20px`) reading, left to right:
  1. **Store** — links in order: Men, Women, Children, New Arrivals, Top
     Brands, Special Offers
  2. **About** — links in order: About us, Clients, Services, Best sellers,
     Blog, Contact
  3. **Legal** — links in order: Terms & Conditions, Privacy Policy,
     Legality, Author License
- **AND** each link SHALL render STACKED (block layout, NOT inline —
  contrast footer-09/Fermata), with `margin-bottom: 10px`, `color: #9d9d9d`,
  hover → `#614ad3`
- **AND** links SHALL use `transition: .3s all ease` and no underlines

### Requirement: Subscribe column

The system SHALL render the Subscribe column: heading, blurb paragraph, and
the pill email form with the gray input and absolutely-positioned violet
button.

#### Scenario: Subscribe form renders as a pill pair

- **GIVEN** the three link columns are rendered
- **WHEN** the user inspects the fourth column
- **THEN** a **"Subscribe"** heading SHALL render styled like the other
  column headings (bold black 16px/900, `margin-bottom: 20px`)
- **AND** a short blurb paragraph SHALL render below it (the source uses
  lorem ipsum; keep the same kind of content, `color: #9d9d9d`,
  ~1.5rem bottom margin)
- **AND** a form SHALL render containing:
  - a text input with placeholder **"Enter your e-mail"**, styled as a
    light-gray pill: `background-color: #e6e6e6`, `border-radius: 30px`,
    `height: 50px`, `padding-left: 30px`, `padding-right: 130px`, `border:
none`, text `color: #000`, placeholder `#b3b3b3` italic 14px
  - a submit button labeled **"Send"** styled as a violet pill:
    `background: #614ad3`, `height: 40px`, `border-radius: 30px`, padding
    `0 30px`, `color: #fff`, `font-weight: bold`, absolutely positioned at
    `top: 5px; right: 5px` inside the relative form wrapper, with
    `box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2)`
- **AND** the input's `padding-right: 130px` SHALL reserve room so the
  overlaid button never covers the typed text

### Requirement: Bottom bar

The system SHALL render the divider and the bottom bar: small gray
copyright on the left and five monochrome social icon links on the right
(md+), each with an accessible name.

#### Scenario: Bottom bar renders with divider, copyright and social icons

- **GIVEN** the four-column top grid is rendered
- **WHEN** the user inspects below it
- **THEN** a thin `border-top` divider (Bootstrap `#dee2e6`, ~3rem vertical
  margin) SHALL separate the grid from the bottom bar
- **AND** on the left, a small (80%-scale) gray `#9d9d9d` text line SHALL
  render reading **"© <current year> Finis. All Rights Reserved."** (the
  source shows a fixed "© 2019 All Rights Reserved.")
- **AND** on the right, five icon-only social links SHALL render
  (`display: inline-block`, `padding: 10px`, `color: #9d9d9d`, hover →
  `#614ad3`): **Facebook, Twitter, Pinterest, Instagram, Behance** (note:
  Behance, NOT Dribbble — differs from footer-09/Fermata)
- **AND** on md+ the social row SHALL be right-aligned (the source uses
  `text-md-right`)
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock" (e.g. in the
  copyright line)
- **NOTE (lucide-react limitation):** lucide-react REMOVED brand icons
  (Twitter/Facebook/Instagram/Pinterest/Behance are `undefined` exports) —
  render the brand glyphs as inline SVGs (simple-icons paths), matching the
  skill's brand-icon guidance. Probe every icon import with the `typeof`
  check before committing.

### Requirement: Responsive layout

The system SHALL reproduce the source's grid: three auto columns + one
`col-md-4` on md+, stacking below md; bottom bar splitting 6/6 on md+.

#### Scenario: Grid adapts across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the top grid SHALL render four columns side by side — three equal
  auto-width link columns plus a 4/12 Subscribe column (the source uses
  `col-md` ×3 + `col-md-4`)
- **AND** the bottom bar SHALL render copyright left (6/12) and social right
  (6/12, right-aligned)
- **AND** below md all columns SHALL stack full-width with ~1.5rem gaps (the
  source uses `mb-4` on each column, removed via `mb-md-0` on md+)
- **AND** below md the social row SHALL lose its right alignment
  (`text-md-right` is md+ only)
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible social controls, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** the five icon-only social links SHALL have accessible names
  (Facebook, Twitter, Pinterest, Instagram, Behance)
- **AND** the subscribe input SHALL have an accessible label (placeholder
  alone is not sufficient — associate a `label` or `aria-label`)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app finis` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Finis — Footer"
- [ ] Filler: `#f8f9fa` area (~70vh) with a centered demo label
- [ ] Footer band: LIGHT — white/transparent background (NO image, NO
      overlay, NO dark treatment); `padding: 7rem 0`, base color `#9d9d9d`,
      Roboto (NO Poppins override — differs from Fermata); semantic
      `<footer>` + main landmark
- [ ] Link columns (md+): Store, About, Legal — exact copy; bold black
      16px/900 headings with 20px bottom margin; STACKED block links with
      10px bottom margin, `#9d9d9d`, hover `#614ad3`, `.3s` transition, no
      underlines
- [ ] Subscribe column: "Subscribe" heading + blurb paragraph + pill form —
      input `#e6e6e6` radius 30px height 50px, `padding-right: 130px`,
      placeholder "Enter your e-mail" (`#b3b3b3` italic 14px); "Send"
      button `#614ad3` white bold radius 30px, absolute top 5 right 5,
      shadow `0 2px 2px rgba(0,0,0,0.2)`
- [ ] Bottom bar: `border-top` divider (my-5) → left small gray
      "© <current year> Finis. All Rights Reserved." + Component Dock link
      `https://www.componentdock.com/`; right five icon-only social links
      (Facebook, Twitter, Pinterest, Instagram, **Behance**) — monochrome
      `#9d9d9d`, hover `#614ad3`, inline SVG brand icons per lucide
      limitation, `aria-label`s; right-aligned on md+
- [ ] Responsive: 3× auto + `col-md-4` side by side on md+, stacked with
      `mb-4` gaps below md; bottom bar 6/6 with social right-aligned only on
      md+; no horizontal overflow
- [ ] Roboto ONLY via Google Fonts `<link>` in `index.html` (Poppins +
      Source Serif Pro NOT needed — loaded but unused in the source footer)
- [ ] ZERO images (this variant has none); NO ColorLib reference anywhere in
      `apps/finis` (provenance lives only here + TEMPLATES.md + PR)
