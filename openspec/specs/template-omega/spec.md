# Template: Omega (Footer)

## Purpose

Omega is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 14"
design (source: https://colorlib.com/wp/template/bootstrap-footer-14/), built
under a DIFFERENT name (**Omega** — the final letter of the Greek alphabet,
"the end", the fourteenth entry in the footer series' ending-themed naming:
Colophon → Envoi → Epilogue → Coda → Outro → Finale → Postlude → Stretto →
Fermata → Finis → Tailpiece → Terminus → Capstone → **Omega**; a single
lowercase word, kebab-case, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-16), per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The
page is a footer-only component demo: a white filler section (source labels
it "Footer #04", `padding: 12em 0`) → the footer — a DARK charcoal band
(`background: #272727`, footer global `padding: 7em 0`, `.footer-04` sets
`padding-bottom: 0`), **Nunito Sans** typeface (body 15px / line-height 1.8).
The grid splits into FOUR columns (`col-md-6 col-lg-3`): (1) **Brand** — logo
link "Colorlib", a short about paragraph, and a gold "read more →" link;
(2) **Categories** — a stacked `ul` of four links; (3) **Tag cloud** — eight
uppercase 11px tag chips (faint white border, 4px radius); (4) **Subscribe +
Follow us** — a square-edge newsletter form (input + gold 52×52 icon submit
button, `ion-ios-send`) above a "Follow us" heading with THREE square social
chips (Twitter, Facebook, Instagram — NO Linkedin in this variant). The
bottom bar (`background: #1a1a1a`, `border-top` same) carries the copyright
line ("…made with ♥ by Colorlib.com" → Component Dock per convention) on the
left and THREE legal links **Terms** / **Privacy** / **Compliances** on the
right. The accent color is a single gold **`#f7b633`** (read-more link,
subscribe button). This is a DARK variant — charcoal band — continuing the
dark footer preps (Stretto/footer-08, Tailpiece/footer-11, Terminus/footer-12),
with a new gold accent and Nunito Sans font (contrast with the rose/light
Capstone/footer-13). No navbar, no hero, no images, no behavior beyond the
(static) newsletter form.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 14" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a filler
  strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-14/. TEMPLATES.md has ONE
  copy (line 790, `- [ ]` unchecked). This prep: Bootstrap Footer 14 →
  **Omega**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (series-wide — see the colophon/terminus/capstone
  preps):** `https://preview.colorlib.com/theme/bootstrap-footer-14/` returns
  **HTTP 404** ("Not Found" — a 9-byte body). The footer series is served
  under the **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live
  preview is `https://preview.colorlib.com/theme/bft/bootstrap-footer-14/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-14/` (HTTP 200,
  10,300 bytes HTML, `<title>Footer 04</title>` — the title is the variant
  label, not the series number). Stylesheets: `css/ionicons.min.css` (icon
  font — glyphs `ion-logo-twitter`, `ion-logo-facebook`,
  `ion-logo-instagram`, `ion-ios-send`, `ion-ios-heart`,
  `ion-ios-arrow-round-forward`) + `css/style.css` (222,692 bytes — the FULL
  shared FTCO sheet bundling rules for many variants; only the `.footer-04`
  block and the shared helpers apply to this page). No Google Fonts `<link>`
  — cf-fonts inline `@font-face` blocks load **Nunito Sans**; body rule:
  `font-family: "Nunito Sans", Arial, sans-serif`, `font-size: 15px`,
  `line-height: 1.8` (headings: same family, weight 400, line-height 1.5).
  No JS behavior needed (jquery/popper/bootstrap.min.js load but the footer
  is static; the newsletter form has `action="#"` and no handler — none
  needed in the recreation).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-14.jpg`, 1200×972 AVIF, viewed in browser):** screenshot
  matches the live DOM (NO variance): a large white demo area with "Footer
  #04" centered; below it a dark charcoal footer band. Four columns: brand
  block (white "Colorlib" logo, light-grey paragraph, gold "read more →"
  link), "CATEGORIES" heading with light-grey vertical links, "TAG CLOUD"
  heading with small rectangular grey-bordered white uppercase tag chips,
  "SUBSCRIBE" heading with a dark input (grey "Enter email address"
  placeholder) and a square gold submit button with a paper-airplane icon,
  then "FOLLOW US" with three small white-outline social icons (Twitter,
  Facebook, Instagram). A darker near-black bottom bar: copyright line left
  (with a heart), legal links Terms / Privacy / Compliances right. Clean,
  minimal, modern dark e-commerce aesthetic; the ONLY accent is the gold
  `#f7b633`.
- **Structure (DOM order, 1:1):**
  `section.ftco-section` (`padding: 12em 0`; no background — white),
  `div.container` → `div.row.justify-content-center` →
  `div.col-md-6.text-center` → `h2` "Footer #04", `margin-bottom: 0`) →
  `footer.footer-04` (`background: #272727`; footer global `padding: 7em 0`
  but `.footer-04 { padding-bottom: 0 }` — the bottom bar owns the bottom;
  `font-size: 14px` inherited) → `div.container` → `div.row`:
  - **Col 1 (Brand)** — `div.col-md-6.col-lg-3.mb-md-0.mb-4`:
    `h2.footer-heading` → `a.logo` **"Colorlib"** (16px, white, capitalize;
    recreation may use its own brand name), `p` (short about line,
    `rgba(255,255,255,.3)`): "A small river named Duden flows by their place
    and supplies it with the necessary regelialia." → `a` **"read more"**
    (gold `#f7b633` via `.footer-04 a`) + `span.ion-ios-arrow-round-forward`
  - **Col 2 (Categories)** — `div.col-md-6.col-lg-3.mb-md-0.mb-4`:
    `h2.footer-heading` **"Categories"** → `ul.list-unstyled` → `li` →
    `a.py-1.d-block` (color `rgba(255,255,255,.7)`): **Buy & Sell, Merchant,
    Giving back, Help & Support** (4)
  - **Col 3 (Tag cloud)** — `div.col-md-6.col-lg-3.mb-md-0.mb-4`:
    `h2.footer-heading` **"Tag cloud"** → `div.tagcloud` → EIGHT
    `a.tag-cloud-link` (uppercase, 11px, `padding: 4px 10px`, `margin: 0 4px
7px 0`, `border: 1px solid rgba(255,255,255,.1)`, white, 4px radius):
    **dish, menu, food, sweet, tasty, delicious, desserts, drinks**
  - **Col 4 (Subscribe + Follow us)** — `div.col-md-6.col-lg-3.mb-md-0.mb-4`:
    `h2.footer-heading` **"Subcribe"** (source typo — missing 's'; fix to
    "Subscribe", keep the kind of content) + `form.subscribe-form` →
    `div.form-group.d-flex` (no bottom margin): `input.form-control.rounded-left`
    (type text, `placeholder="Enter email address"`, dark translucent bg
    `rgba(255,255,255,.05)`, no border, 16px) + `button.form-control.submit.rounded-right`
    (type submit: 52×52, gold `#f7b633`, white, radius 0, containing
    `span.sr-only` "Submit" + `i.ion-ios-send` — an ICON button, not a text
    button) — then `h2.footer-heading.mt-5` **"Follow us"** +
    `ul.ftco-footer-social.p-0` → THREE `li.ftco-animate` → `a` (tooltip
    title Twitter / Facebook / Instagram) → `span.ion-logo-*` (40×40 square
    chips, `border-radius: 4px`, `border: 1px solid rgba(255,255,255,.1)`,
    white 20px glyphs — NO Linkedin in this variant)
  - **Bottom bar** — `div.w-100.mt-5.border-top.py-5` (`.footer-04 .border-top`
    = `border-color: #1a1a1a !important; background: #1a1a1a`) →
    `div.container` → `div.row`:
    `div.col-md-6.col-lg-8` → `p.copyright`: "Copyright © <year> All rights
    reserved | This template is made with ♥ by Colorlib.com" (heart
    `ion-ios-heart`, `aria-hidden`; recreation replaces the Colorlib
    attribution with the Component Dock link per convention; `.footer-04
.copyright a` = `rgba(255,255,255,.5)`) + `div.col-md-6.col-lg-4.text-md-right`
    → `p.mb-0.list-unstyled` with THREE legal links **"Terms"**, **"Privacy"**,
    **"Compliances"** (`mr-md-3` spacing, `rgba(255,255,255,.7)` via
    `.footer-04 .list-unstyled a`)
- **Grid behavior (Bootstrap 4.3.1, reproduce responsively):** FOUR columns
  `col-md-6 col-lg-3` — 2×2 grid on md–lg, 4-across on lg+, stacked
  full-width below md with `mb-4` gaps. Bottom bar: `col-md-6 col-lg-8` +
  `col-md-6 col-lg-4 text-md-right`. No order flips, no horizontal scroll.
- **Icons:** ionicons — `ion-logo-twitter`, `ion-logo-facebook`,
  `ion-logo-instagram` (THREE social buttons — no linkedin glyph in this
  variant; lucide REMOVED brand icons, so render tiny inline SVG brand marks
  or neutral lucide glyphs per the skill's icon guidance — probe every import
  with the `typeof` check), `ion-ios-send` (subscribe button — a paper-plane;
  lucide `Send` exists — probe it), `ion-ios-heart` (copyright heart →
  lucide `Heart` or a ♥ text glyph, `aria-hidden`), `ion-ios-arrow-round-forward`
  (read-more arrow → lucide `ArrowRight` or similar).
- **Images:** NONE — this footer variant has no photos, thumbnails or
  backgrounds. No picsum seeds needed. Solid `#272727` footer band + `#1a1a1a`
  bottom bar only.

## Design tokens (from the reference — `.footer-04` + helpers)

| Token             | Value                                                                                                                                                                                                                                                                                                                                                                                                                                             | Source                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Font family       | **Nunito Sans** — `body { font-family: "Nunito Sans", Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight: normal; }`; headings: same family, weight 400, line-height 1.5 (cf-fonts loads weights 300–900; recreation needs 400 + 600 — `.footer-heading` uses weight 600)                                                                                                                                                          | `css/style.css` body + headings rules                                     |
| Footer background | **`#272727`** (dark charcoal) — `.footer-04 { background: #272727; padding-bottom: 0; }`; footer global `padding: 7em 0` (DARK variant; the bottom bar provides the bottom padding)                                                                                                                                                                                                                                                               | `.footer-04` + `footer`                                                   |
| Brand accent      | **`#f7b633`** (gold) — `.footer-04 a` (read-more link); `.footer-04 .subscribe-form .form-group .submit` (button background). The ONE accent color in the design                                                                                                                                                                                                                                                                                  | `.footer-04 a`, `.submit`                                                 |
| Column headings   | `.footer-heading`: **`font-size: 13px`, `color: #fff`, `margin-bottom: 30px`, `text-transform: uppercase`, `font-weight: 600`, `letter-spacing: 1px`**; the logo variant `.footer-heading .logo`: `letter-spacing: none`, `font-size: 16px`, `color: #fff`, `text-transform: capitalize`; NO `:after` underline in this variant                                                                                                                   | `.footer-04 .footer-heading` (+ `.logo`)                                  |
| Body paragraph    | `.footer-04 p`: **`color: rgba(255,255,255,.3)`** (the about paragraph under the logo)                                                                                                                                                                                                                                                                                                                                                            | `.footer-04 p`                                                            |
| Column links      | **`color: rgba(255,255,255,.7)`** — `ul.list-unstyled li a` / `.list-unstyled a` (Categories links AND the bottom-bar legal links); `a.py-1.d-block` vertical rhythm; no explicit hover color in `.footer-04`                                                                                                                                                                                                                                     | `.footer-04 .list-unstyled li a`                                          |
| Tag cloud chips   | `div.tagcloud` → `a.tag-cloud-link`: **`text-transform: uppercase; display: inline-block; padding: 4px 10px; margin-bottom: 7px; margin-right: 4px; border-radius: 4px; font-size: 11px; border: 1px solid rgba(255,255,255,.1); color: #fff`** (base `.tagcloud a` + `.footer-04 .tagcloud a` override)                                                                                                                                          | `.tagcloud a` + `.footer-04 .tagcloud a`                                  |
| Social chips      | `.ftco-footer-social li`: `list-style: none; margin: 0 10px 0 0; display: inline-block`; `li a`: **40×40, `display: block`, `background: rgba(0,0,0,.05)`, `position: relative`** with `.footer-04` override: **`border-radius: 4px` (SQUARE chips, not circles), `border: 1px solid rgba(255,255,255,.1)`, `color: #fff`** (white glyphs, 20px, absolutely centered); hover keeps `#fff` (base `.ftco-footer-social li a:hover { color: #fff }`) | `.ftco-footer-social li a` + `.footer-04 .ftco-footer-social li a`        |
| Subscribe input   | `input.form-control.rounded-left`: **`background: rgba(255,255,255,.05) !important`, `border: none !important`, `border-radius: 0`, `font-size: 16px`, `color: rgba(255,255,255,.3) !important`**; placeholder same `rgba(255,255,255,.3)`; no focus box-shadow                                                                                                                                                                                   | `.footer-04 .subscribe-form .form-group input` (+ placeholders, `:focus`) |
| Subscribe button  | `button.form-control.submit.rounded-right` (type submit): **`width: 52px; height: 52px; font-size: 16px; background: #f7b633 !important; color: #fff !important; border: none; border-radius: 0`**; contains `span.sr-only` "Submit" + `i.ion-ios-send` (paper-plane icon) — an ICON button with sr-only label                                                                                                                                    | `.footer-04 .subscribe-form .form-group .submit`                          |
| Form group        | `div.form-group.d-flex` — `position: relative; margin-bottom: 0; border-radius: 0` (input + button side by side, square edges)                                                                                                                                                                                                                                                                                                                    | `.footer-04 .subscribe-form .form-group`                                  |
| Bottom bar        | `div.w-100.mt-5.border-top.py-5`: `.footer-04 .border-top` = **`border-color: #1a1a1a !important; background: #1a1a1a`** (darker near-black); `p.copyright` inherits `rgba(255,255,255,.3)`; `.footer-04 .copyright a`: **`rgba(255,255,255,.5)`**; legal links Terms / Privacy / Compliances (`mr-md-3` spacing, `rgba(255,255,255,.7)` via `.footer-04 .list-unstyled a`) right-aligned on md+                                                  | `.footer-04 .border-top`, `.copyright a`, DOM                             |
| Filler area       | `.ftco-section`: **`padding: 12em 0`**, NO background (white), centered `h2` "Footer #04" (`margin-bottom: 0`)                                                                                                                                                                                                                                                                                                                                    | `.ftco-section`, `.ftco-section h2`                                       |
| Link transition   | `a { transition: .3s all ease; }`; `a:hover, a:focus { text-decoration: none !important; outline: none !important; }` (global)                                                                                                                                                                                                                                                                                                                    | `css/style.css` top rules                                                 |
| Icons             | ionicons: `ion-logo-twitter/facebook/instagram` (THREE — no linkedin here; lucide REMOVED brand icons — use tiny inline SVG brand marks or neutral lucide glyphs per brand, probe with `typeof`); `ion-ios-send` (paper-plane → lucide `Send`, probe it); `ion-ios-heart` → lucide `Heart` (or ♥ text, `aria-hidden`); `ion-ios-arrow-round-forward` → lucide `ArrowRight`                                                                        | `css/ionicons.min.css` classes in DOM                                     |
| Images            | **NONE** — no photos/thumbnails/backgrounds anywhere in this variant; solid `#272727` footer band + `#1a1a1a` bottom bar only                                                                                                                                                                                                                                                                                                                     | DOM + CSS audit                                                           |
| Mobile behavior   | FOUR `col-md-6 col-lg-3` columns: stacked full-width below md with `mb-4` gaps, 2×2 on md, 4-across on lg+; bottom bar `col-md-6 col-lg-8` + `col-md-6 col-lg-4 text-md-right`; no horizontal scroll                                                                                                                                                                                                                                              | Bootstrap classes                                                         |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Omega app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler section and the footer inside the
  main landmark
- **AND** the document title SHALL be "Omega — Footer"

### Requirement: Filler demo area

The system SHALL render the white filler strip above the footer, matching the
source's demo-content role.

#### Scenario: Filler renders with a centered label

- **GIVEN** the page is rendered
- **WHEN** the top of the page loads
- **THEN** a white section SHALL be visible above the footer with the
  source's `padding: 12em 0` rhythm (the recreation may use a similar
  min-height so the footer band still peeks into the first viewport)
- **AND** a centered level-2 heading SHALL label the demo (the source shows
  **"Footer #04"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Dark charcoal footer band

The system SHALL render the dark charcoal footer band with the source's
background, padding, and Nunito Sans typeface.

#### Scenario: Footer band renders charcoal

- **GIVEN** the filler section is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `background: #272727` and
  `padding: 7em 0` (top; the bottom bar owns the bottom padding)
- **AND** the font family SHALL be Nunito Sans (body 15px, line-height 1.8;
  headings weight 400, line-height 1.5)
- **AND** the page SHALL have a main landmark and a semantic `<footer>`
  landmark

### Requirement: Brand column (left)

The system SHALL render the first column with the logo link, the about
paragraph, and the gold "read more" link.

#### Scenario: Brand column renders

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the first column
- **THEN** a `.footer-heading` SHALL render containing a logo link (the
  source shows "Colorlib", 16px white capitalize — the recreation may show
  the template's own brand name)
- **AND** a short paragraph SHALL render below it in `rgba(255,255,255,.3)`
  (the source's Duden-river filler copy; keep the same kind of about text)
- **AND** a **"read more"** link SHALL render in the gold accent `#f7b633`
  with a forward arrow icon (lucide `ArrowRight` or similar) after the text

### Requirement: Categories link column

The system SHALL render the "Categories" column with the source's exact
headings and links.

#### Scenario: Categories column renders

- **GIVEN** the brand column is rendered
- **WHEN** the user inspects the second column
- **THEN** a `.footer-heading` SHALL render with the text **"Categories"**
  (13px, white, uppercase, weight 600, 1px letter-spacing, `margin-bottom:
30px`)
- **AND** a stacked `ul` SHALL render with FOUR `py-1 d-block` links in
  `rgba(255,255,255,.7)`: **Buy & Sell, Merchant, Giving back, Help &
  Support**
- **AND** links SHALL use `transition: .3s all ease` and no underlines

### Requirement: Tag cloud column

The system SHALL render the "Tag cloud" column with eight uppercase tag
chips.

#### Scenario: Tag chips render

- **GIVEN** the categories column is rendered
- **WHEN** the user inspects the third column
- **THEN** a `.footer-heading` SHALL render with the text **"Tag cloud"**
- **AND** EIGHT tag links SHALL render as uppercase 11px chips (`padding:
4px 10px`, `margin: 0 4px 7px 0`, `border: 1px solid rgba(255,255,255,.1)`,
  `border-radius: 4px`, white text): **dish, menu, food, sweet, tasty,
  delicious, desserts, drinks**
- **AND** the chips SHALL wrap naturally across the column width

### Requirement: Subscribe form + Follow us (right column)

The system SHALL render the "Subscribe" heading, the square-edge newsletter
form with an email input and a gold icon submit button, the "Follow us"
heading, and the three square social chips.

#### Scenario: Newsletter form renders with gold icon button

- **GIVEN** the tag cloud is rendered
- **WHEN** the user inspects the fourth column
- **THEN** a `.footer-heading` SHALL render with the text **"Subscribe"**
  (the source spells it "Subcribe" — a typo; fix it, keep the kind of
  content)
- **AND** a real `<form>` SHALL render (no backend needed — the source uses
  `action="#"` with no handler) containing a flex row with:
  - an email input (square edges, `background: rgba(255,255,255,.05)`, no
    border, 16px, text `rgba(255,255,255,.3)`, placeholder **"Enter email
    address"`)
  - a **52×52 square submit button** (`background: #f7b633`, white) carrying
    a paper-plane icon (lucide `Send`) and a visually-hidden **"Submit"**
    label (the source uses `span.sr-only` — an icon button, NOT a text
    button)
- **AND** the email input SHALL have a programmatic label (the source uses a
  bare placeholder — the recreation adds a visually-hidden `<label>` or
  `aria-label`)
- **AND** below the form, a `.footer-heading.mt-5` SHALL render with the text
  **"Follow us"**
- **AND** THREE square social chips SHALL render in a row (40×40,
  `border-radius: 4px`, `border: 1px solid rgba(255,255,255,.1)`, `margin:
0 10px 0 0`) with centered white 20px glyphs for **Twitter, Facebook,
  Instagram** (lucide removed brand icons — use tiny inline SVG brand marks
  or neutral lucide glyphs; probe imports with `typeof`; NO Linkedin in this
  variant)
- **AND** each chip SHALL be a link with an accessible name (the source uses
  a Bootstrap tooltip `title` — the recreation uses `aria-label` or a
  visible tooltip; keep the same kind of content)

### Requirement: Bottom bar

The system SHALL render the darker bottom bar with the copyright line, the
heart, the mandatory Component Dock link, and the three legal links.

#### Scenario: Copyright and legal links render

- **GIVEN** the footer columns are rendered
- **WHEN** the user inspects the bottom of the footer
- **THEN** a row SHALL render separated by a `#1a1a1a` top border with a
  `#1a1a1a` background (`w-100 mt-5 py-5`; left `col-md-6 col-lg-8`, right
  `col-md-6 col-lg-4 text-md-right` on md+; stacked below md)
- **AND** the left side SHALL render the copyright line:
  **"© <current year> Omega. All rights reserved. Made with ♥ by Component
  Dock"** (the source shows "Copyright © <year> All rights reserved | This
  template is made with ♥ by Colorlib.com"; `.copyright a` is
  `rgba(255,255,255,.5)`)
- **AND** the heart SHALL be `aria-hidden` (decorative)
- **AND** the "Component Dock" text SHALL link to
  `https://www.componentdock.com/` (per convention, the Colorlib attribution
  is replaced — ColorLib must NOT appear anywhere in `apps/omega`)
- **AND** the right side SHALL render THREE legal links in
  `rgba(255,255,255,.7)`: **Terms**, **Privacy**, **Compliances** (spacing
  `mr-md-3`)

### Requirement: Responsive layout

The system SHALL reproduce the source's grid: four `col-lg-3` columns
(2×2 on md, 4-across on lg+), bottom `col-md-6 col-lg-8` +
`col-md-6 col-lg-4`.

#### Scenario: Grid adapts across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the lg breakpoint (≥992px)
- **THEN** the FOUR columns SHALL render side by side (each `col-lg-3`),
  with the bottom bar showing copyright left (8/12) + legal links right
  (4/12)
- **AND** at the md breakpoint (≥768px) the columns SHALL render as a 2×2
  grid (each `col-md-6`), and the bottom bar SHALL show the same 8/4 split
- **AND** below md all columns SHALL stack full-width with ~1.5rem gaps (the
  source uses `mb-4` on each column, removed via `mb-md-0` on md+)
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, an accessible newsletter form,
and keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** the newsletter email input SHALL have a programmatic label (the
  source uses a bare placeholder — the recreation adds a visually-hidden
  `<label>` or `aria-label`)
- **AND** the submit button SHALL have an accessible name (the source uses a
  `span.sr-only` "Submit" inside the icon button — keep the sr-only text or
  an equivalent `aria-label`)
- **AND** the decorative heart SHALL carry `aria-hidden`
- **AND** each social chip SHALL have an accessible name (the source relies
  on a tooltip `title` — the recreation uses `aria-label`)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app omega` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Omega — Footer"
- [ ] Filler: white section (source `padding: 12em 0`) with a centered demo
      label
- [ ] Footer band: DARK CHARCOAL — `background: #272727`, `padding: 7em 0`
      top (bottom bar owns the bottom); semantic `<footer>` + main landmark;
      Nunito Sans (body 15px/1.8, headings weight 400/1.5)
- [ ] Brand column: logo link (16px white capitalize), about paragraph
      `rgba(255,255,255,.3)`, gold `#f7b633` "read more" + forward arrow
- [ ] Categories: EXACT four links (Buy & Sell, Merchant, Giving back, Help
      & Support), `py-1 d-block` rhythm, `rgba(255,255,255,.7)`; heading
      13px white uppercase weight 600 ls 1px mb 30px
- [ ] Tag cloud: EIGHT chips (dish, menu, food, sweet, tasty, delicious,
      desserts, drinks) — uppercase 11px, `4px 10px` padding, faint white
      border, 4px radius, wrapping
- [ ] Subscribe: real `<form>` with labeled email input (square,
      `rgba(255,255,255,.05)` bg, 16px, placeholder "Enter email address") +
      52×52 gold `#f7b633` square icon button (paper-plane, sr-only
      "Submit"); heading typo fixed to "Subscribe"
- [ ] Follow us: THREE square social chips (40×40, radius 4px, faint white
      border, white glyphs, accessible names) — Twitter, Facebook, Instagram
      only (NO Linkedin); inline SVG brand marks / neutral lucide glyphs
      (lucide removed brand icons — probe imports with `typeof`)
- [ ] Bottom bar: `background: #1a1a1a` + `border-top` `#1a1a1a`; left
      "© <current year> Omega. All rights reserved. Made with ♥ by Component
      Dock" (heart `aria-hidden`, Component Dock link `rgba(255,255,255,.5)`,
      copyright text `rgba(255,255,255,.3)`); right Terms / Privacy /
      Compliances (`rgba(255,255,255,.7)`, `mr-md-3`); NO ColorLib reference
      anywhere in `apps/omega` (provenance lives only here + TEMPLATES.md +
      PR)
- [ ] Responsive: 4×`col-lg-3` (2×2 on md, stacked below md with `mb-4`
      gaps); bottom `col-md-6 col-lg-8` + `col-md-6 col-lg-4 text-md-right`;
      no horizontal overflow
- [ ] Nunito Sans via Google Fonts `<link>` in `index.html` (weights 400 +
      600 suffice; the source loads 300–900)
- [ ] Images: NONE required (no photos/thumbnails/backgrounds in this
      variant)
- [ ] Icons: lucide `Send` (paper-plane, probe it), `Heart` (aria-hidden) or
      ♥ text glyph, `ArrowRight` (read-more); social brand marks as tiny
      inline SVGs / neutral lucide glyphs (lucide removed brand icons — probe
      imports with `typeof`)
