# Template: Peroration (Footer)

## Purpose

Peroration is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 20"
design (source: https://colorlib.com/wp/template/bootstrap-footer-20/), built
under a DIFFERENT name (**Peroration** — "the concluding part of a speech",
the FINAL word in the footer series' ending-themed naming: Colophon → Envoi →
Epilogue → Coda → Outro → Finale → Postlude → Stretto → Fermata → Finis →
Tailpiece → Terminus → Capstone → Omega → Ultimo → Adieu → Valediction →
Farewell → Swansong → **Peroration**; a single lowercase word, kebab-case, no
collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
2026-08-16), per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript. The page is a footer-only component
demo: a white filler section (source labels it "Footer #10", `padding: 12em
0`) → the footer — a **DARK CHARCOAL band** (`footer.footer-10`:
`background: #222222; padding: 0 0 4em 0` — overrides the base
`footer { padding: 7em 0 }`, so NO top padding; contrast with footer-09 which
keeps the 7em rhythm), **Poppins** typeface (body 15px / line-height 1.8;
headings weight 400 / line-height 1.5). The footer splits into FIVE zones:
**(1) a contact-card band** — THREE `col-md-4` tiles (near-black
`#1e1e1e`/`#1c1c1c`/`#252525`, `py-5`) each with a 50px **bright-blue
`#1089ff` circular icon** (phone / mail / pin) over white text
(`rgba(255,255,255,0.8)`); **(2) About** — a FOUR-link list ("Out story",
"Awards", "Our Team", "Career"); **(3) Company** — a FOUR-link list ("Our
services", "Clients", "Contact", "Press"); **(4) Resources** — a THREE-link
list ("Blog", "Newsletter", "Privacy Policy"); **(5) Subscribe** — a
**WHITE** email input + a **130×52 blue `#1089ff` "Subscribe" button** with a
13px subheading "Get digital marketing updates in your mailbox". Below: a
`row.mt-5.pt-4.border-top` copyright bar — left "Copyright © All rights
reserved. | This template is made with ♥ by Colorlib.com" (recreation
replaces the Colorlib attribution with the Component Dock link per
convention), right THREE circular social chips (Twitter / Facebook /
Instagram, `rgba(255,255,255,0.1)` circles, 40px). Brand accent: **bright
blue `#1089ff`** (contact icons, submit button, footer links, hover states).
NO images anywhere in the source (no news thumbs, no instagram grid — the
only visuals are the icon glyphs). The ONLY interactive elements are the
static subscribe form (`action="#"`, no JS handler in source), the link
lists, and the social chips.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 20" — the LAST of the free
  "Bootstrap Footer" series (footer-only component demos; the page body is a
  filler strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-20/. TEMPLATES.md has ONE
  copy (line 796, `- [ ]` unchecked). This prep: Bootstrap Footer 20 →
  **Peroration**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (series-wide — see the colophon/terminus/capstone/
  omega/ultimo/adieu/valediction/farewell/swansong preps):**
  `https://preview.colorlib.com/theme/bootstrap-footer-20/` returns **HTTP
  404** ("Not Found" — a 9-byte body). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-20/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-20/` (HTTP 200,
  17,636 bytes HTML, `<title>Footer 10</title>` — the title is the variant
  label, not the series number). Stylesheets: `css/ionicons.min.css` (icon
  font — glyphs `ion-ios-call`, `ion-ios-mail`, `ion-ios-pin`,
  `ion-logo-twitter`, `ion-logo-facebook`, `ion-logo-instagram`,
  `ion-ios-heart`) + `css/style.css` (222,587 bytes — the FULL shared FTCO
  sheet bundling rules for many variants; only the `.footer-10` block and the
  shared helpers apply to this page). Inline cf-fonts `<style>` blocks load
  **Poppins** (300–900) AND **Nunito Sans** (300) — but NO rule in the sheet
  references Nunito Sans (dead weight; recreation loads Poppins only). FTCO
  body rule: `font-family: "Poppins", Arial, sans-serif; font-size: 15px;
line-height: 1.8; font-weight: normal`; FTCO headings rule: `h1..h5,
.h1..h5 { line-height: 1.5; font-weight: 400; font-family: "Poppins",
Arial, sans-serif }`. No JS behavior needed (jquery/popper/bootstrap.min.js
  - main.js load but the footer is static; the subscribe form has
    `action="#"` and no handler — none needed in the recreation).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-20.jpg`, 1200×972 AVIF, viewed in browser):** screenshot
  matches the live DOM (NO structural variance). A white demo area with
  "Footer #10" centered; below it a **dark charcoal (`#222222`) band** with
  NO top padding. Top band: THREE near-black tiles in a row — left `#1e1e1e`
  (50px blue circle + white phone glyph + "(+00) 1234 5678"), center `#1c1c1c`
  (envelope + "info@email.com" — the screenshot's static capture shows
  "info@colorlib.com"; the live DOM is authoritative), right `#252525` (map
  pin + "203 Fake St. Mountain View, San Francisco, California, USA") — all
  text white at 80% alpha. Below: FOUR columns — **About** (4 links), **Company**
  (4 links), **Resources** (3 links), **Subscribe** (white input + blue
  130px button + 13px subheading). Bottom: `border-top` (`rgba(255,255,255,
0.1)`) copyright bar — left the copyright + "made with ♥ by Colorlib.com"
  line (Colorlib link blue `#1089ff`), right THREE 40px circular social chips
  (Twitter / Facebook / Instagram glyphs on `rgba(255,255,255,0.1)` circles).
  Overall aesthetic: dark, minimal, modern corporate — the ONLY saturated
  color is the bright blue `#1089ff` (icons + button + link hover); link
  text is very dim white (`rgba(255,255,255,0.2)`) that brightens to full
  white on hover. THIS VARIANT HAS NO news/instagram image grid and NO
  newsletter-with-square-pink-button (contrast with footer-09/swansong's
  purple gradient + pink accents, and footer-18/farewell's light band).
- **Structure (DOM order, 1:1):**
  `section.ftco-section` (`padding: 12em 0`; no background — white),
  `div.container` → `div.row.justify-content-center` →
  `div.col-md-6.text-center` → `h2` **"Footer #10"** (`margin-bottom: 0`) →
  `footer.footer-10` (`background: #222222; padding: 0 0 4em 0` — overrides
  the base `footer { padding: 7em 0 }` to remove top padding) →
  `div.container`:
  - **Contact-card band** — `div.row.mb-5.pb-3.no-gutters` → THREE
    `div.col-md-4.mb-md-0.mb-4.d-flex` → `div.con.con-N.w-100.py-5` →
    `div.con-info.w-100.text-center`:
    - `div.icon.d-flex.align-items-center.justify-content-center` →
      `span.ion-ios-call` (con-1) / `span.ion-ios-mail` (con-2) /
      `span.ion-ios-pin` (con-3) — `.con-info .icon`: `width: 50px; height:
50px; background: #1089ff; border-radius: 50%; margin: 0 auto;
margin-bottom: 10px`; glyph `color: #fff; font-size: 24px`
    - `div.text` → `span` — **"(+00) 1234 5678"** / **"info@email.com"** /
      **"203 Fake St. Mountain View, San Francisco, California, USA"**
      (`.con-info span { color: rgba(255,255,255,0.8) }`)
    - tile backgrounds: `.con-1` `#1e1e1e`, `.con-2` `#1c1c1c`, `.con-3`
      `#252525`; `py-5` = 3rem vertical padding
  - **Links + Subscribe row** — `div.row` → `div.col-md-7` + `div.col-md-5`:
    - `div.col-md-7` → `div.row` → THREE `div.col-md-4.mb-md-0.mb-4`, each
      with `h2.footer-heading` + `ul.list-unstyled`:
      - **"About"** → FOUR `li` → `a.d-block[href=#]`: **"Out story"**,
        **"Awards"**, **"Our Team"**, **"Career"**
      - **"Company"** → FOUR `li` → `a.d-block[href=#]`: **"Our services"**,
        **"Clients"**, **"Contact"**, **"Press"**
      - **"Resources"** → THREE `li` → `a.d-block[href=#]`: **"Blog"**,
        **"Newsletter"**, **"Privacy Policy"**
      - `.footer-10 .footer-heading`: `font-size: 18px; color: #fff;
margin-bottom: 30px` (NOT uppercase, NO underline — contrast with
        other footer variants); links: `.footer-10 .list-unstyled li a {
color: rgba(255,255,255,0.2) }`, hover `color: #fff`; NO bullet
        glyphs, NO icons
    - `div.col-md-5.mb-md-0.mb-4` → `h2.footer-heading` **"Subscribe"** →
      `form.subscribe-form` (`action="#"`) → `div.form-group.d-flex`:
      - `input.form-control.rounded-left` (type text) placeholder **"Enter
        email address"** — `.footer-10 .subscribe-form .form-group input`:
        `background: white !important; border: none !important; outline:
none !important; color: rgba(0,0,0,0.3) !important; font-size: 16px;
border-radius: 0` (the `.rounded-left` radius overridden to 0;
        WHITE input on the dark band); placeholder `rgba(0,0,0,0.3)`;
        `:focus` → `outline: none !important; -webkit-box-shadow: none;
box-shadow: none` (recreation SHOULD add a visible focus style)
      - `button.form-control.submit.rounded-right` (type submit) — **"Subscribe"**
        — `color: #fff !important; display: block; width: 130px; height:
52px; font-size: 16px; background: #1089ff !important; border: none;
border-radius: 0` (wide blue button — contrast with footer-09's 52px
        square pink)
      - `span.subheading` — **"Get digital marketing updates in your
        mailbox"** — `display: inline-block; margin-top: 5px; color:
rgba(255,255,255,0.3); font-size: 13px`
  - **Copyright bar** — `div.row.mt-5.pt-4.border-top` (`border-color:
rgba(255,255,255,0.1) !important` via `.footer-10 .border-top`):
    - `div.col-md-6.col-lg-8.mb-md-0.mb-4` → `p.copyright.mb-0` — **"Copyright
      © All rights reserved. | This template is made with <i
      class="ion-ios-heart" aria-hidden="true"></i> by <a
      href="https://colorlib.com" target="_blank">Colorlib.com</a>"** (no
      year in markup — JS writes it; the screenshot shows 2021; recreation
      may render the current year; the "Colorlib.com" link is `#1089ff` via
      `.footer-10 a`; recreation replaces it with the Component Dock link)
    - `div.col-md-6.col-lg-4.text-md-right` → `ul.ftco-footer-social.p-0` →
      THREE `li.ftco-animate` → `a[href=#]` (`data-toggle="tooltip"` title
      **Twitter** / **Facebook** / **Instagram**) → `span.ion-logo-twitter`
      / `span.ion-logo-facebook` / `span.ion-logo-instagram` —
      `.ftco-footer-social li a`: `height: 40px; width: 40px; display:
block; border-radius: 50%; position: relative` with `.footer-10
.ftco-footer-social li a { background: rgba(255,255,255,0.1); color:
#fff }` (overrides the base `rgba(0,0,0,0.05)`); glyph absolutely
      centered, `font-size: 20px`; `li { display: inline-block; margin: 0
10px 0 0 }`
- **Grid behavior (Bootstrap 4.3.1, reproduce responsively):** contact-card
  band — THREE `col-md-4` tiles → **3-across on md+**, stacked full-width
  below md (each card keeps `mb-4` on mobile); links+subscribe row —
  `col-md-7` (links) + `col-md-5` (subscribe) side-by-side on md+, stacked
  below md; the three link columns inside are `col-md-4` → 3-across on md+,
  stacked below md; copyright bar — `col-md-6 col-lg-8` + `col-md-6
col-lg-4 text-md-right` → side-by-side on md+ (right aligned right),
  stacked below md. No order flips, no horizontal scroll.
- **Icons:** ionicons — `ion-ios-call` / `ion-ios-mail` / `ion-ios-pin` (the
  three 50px blue circular contact icons), `ion-logo-twitter` /
  `ion-logo-facebook` / `ion-logo-instagram` (40px social chips), `ion-ios-heart`
  (copyright heart). **lucide-react removed brand icons** (Twitter/Facebook/
  Instagram → `undefined`). Recreation mapping: contact icons → lucide Phone /
  Mail / MapPin inside 50px `#1089ff` circles; social chips → **inline SVG**
  brand glyphs (X/Twitter, Facebook, Instagram) centered in 40px circles, or
  fall back to lucide generics; heart → ♥ text glyph `aria-hidden`.
- **Images:** NONE in the source DOM (no `images/` references, no
  `background-image` in `.footer-10` styles) — this is a text/icon-only
  footer. No picsum placeholders needed; keep the recreation image-free
  (the only visuals are lucide/SVG glyphs).

## Design tokens (from the reference — `.footer-10` + shared FTCO helpers)

| Token             | Value                                                                                                                                                                                                                                                                                                                                                                                                                | Source                                                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Footer background | **DARK CHARCOAL `#222222`** — `.footer-10 { background: #222222; padding: 0 0 4em 0 }` (top padding REMOVED — overrides the base `footer { padding: 7em 0 }`; contrast with footer-09 which keeps 7em)                                                                                                                                                                                                               | `.footer-10`, base `footer`                                                                                                               |
| Brand accent      | **Bright blue `#1089ff`** — `.footer-10 a { color: #1089ff }` (copyright "Colorlib.com"/Component Dock link) AND `.footer-10 .con-info .icon { background: #1089ff }` (the three 50px circular contact icons) AND `.footer-10 .submit { background: #1089ff !important }` (subscribe button)                                                                                                                         | `.footer-10 a`, `.con-info .icon`, `.submit`                                                                                              |
| Contact tiles     | THREE near-black tiles: `.con-1` **`#1e1e1e`**, `.con-2` **`#1c1c1c`**, `.con-3` **`#252525`** — each `div.con` = `w-100 py-5` (3rem vertical), content centered (`con-info text-center`); tile text `rgba(255,255,255,0.8)`                                                                                                                                                                                         | `.footer-10 .con.con-N`                                                                                                                   |
| Contact icons     | `.con-info .icon`: **`width: 50px; height: 50px; background: #1089ff; border-radius: 50%; margin: 0 auto; margin-bottom: 10px`** (flex-centered); glyph `color: #fff; font-size: 24px`                                                                                                                                                                                                                               | `.footer-10 .con-info .icon`                                                                                                              |
| Headings          | `.footer-10 .footer-heading`: **`font-size: 18px; color: #fff; margin-bottom: 30px`**, weight 400 (FTCO headings rule) — NOT uppercase, NO underline, NO leading icon (contrast with footer-09's 22px + circular icons)                                                                                                                                                                                              | `.footer-10 .footer-heading`                                                                                                              |
| Link lists        | `.footer-10 .list-unstyled li a { color: rgba(255,255,255,0.2) }`, **hover `color: #fff`**; links are `d-block` (block-level, full-width rows); NO bullet glyphs, NO icons; `ul.list-unstyled` = `padding-left: 0; list-style: none`                                                                                                                                                                                 | `.footer-10 .list-unstyled li a`                                                                                                          |
| Subscribe input   | `input.form-control.rounded-left`: **`background: white !important; border: none !important; outline: none !important; color: rgba(0,0,0,0.3) !important; font-size: 16px; border-radius: 0`** (WHITE input on the dark band — the only light element besides the button); placeholder `rgba(0,0,0,0.3)`; `:focus` → `outline: none; box-shadow: none` (recreation SHOULD add a visible focus style)                 | `.footer-10 .subscribe-form .form-group input`                                                                                            |
| Subscribe button  | `button.form-control.submit.rounded-right`: **`color: #fff !important; width: 130px; height: 52px; font-size: 16px; background: #1089ff !important; border: none; border-radius: 0`** — wide blue square-cornered button with visible text "Subscribe" (contrast with footer-09's 52px square pink icon-only button)                                                                                                 | `.footer-10 .subscribe-form .form-group .submit`                                                                                          |
| Subheading        | `span.subheading`: `display: inline-block; margin-top: 5px; color: rgba(255,255,255,0.3); font-size: 13px` — **"Get digital marketing updates in your mailbox"**                                                                                                                                                                                                                                                     | `.footer-10 .subscribe-form .subheading`                                                                                                  |
| Body text         | White-ish on dark: `#fff` headings; `rgba(255,255,255,0.8)` — contact tile text (`.con-info span`); `rgba(255,255,255,0.3)` — `.footer-10 p` (copyright lines) + subheading; `rgba(255,255,255,0.2)` — link lists (brighten to `#fff` on hover)                                                                                                                                                                      | `.footer-10` sub-rules                                                                                                                    |
| Social chips      | `.ftco-footer-social li a`: **`height: 40px; width: 40px; display: block; background: rgba(255,255,255,0.1); border-radius: 50%; position: relative; color: #fff`** (footer-10 overrides the base `rgba(0,0,0,0.05)`); glyph absolutely centered `font-size: 20px`; `li { display: inline-block; margin: 0 10px 0 0 }`; hover → `color: #fff` (base rule)                                                            | `.footer-10 .ftco-footer-social li a` + base                                                                                              |
| Copyright bar     | `div.row.mt-5.pt-4.border-top` — `border-color: rgba(255,255,255,0.1) !important`; `p.copyright.mb-0` in `rgba(255,255,255,0.3)`: left **"Copyright © [year] All rights reserved.                                                                                                                                                                                                                                    | This template is made with ♥ by [Component Dock]"** (heart `i.ion-ios-heart` `aria-hidden`; brand link `#1089ff`; `text-md-right` on md+) | `.footer-10 .border-top`, `.footer-10 p` |
| Filler area       | `.ftco-section`: **`padding: 12em 0`**, NO background (white), centered `h2` **"Footer #10"** (`margin-bottom: 0`) — inherits FTCO heading rule (Poppins 400/1.5, default dark color)                                                                                                                                                                                                                                | `.ftco-section`, `.ftco-section h2`                                                                                                       |
| Font family       | **Poppins** — FTCO body rule: `font-family: "Poppins", Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight: normal`; FTCO headings rule: `h1..h5, .h1..h5 { line-height: 1.5; font-weight: 400; font-family: "Poppins", Arial, sans-serif }` (cf-fonts loads Poppins 300–900 + a Nunito Sans 300 block that NO rule uses — recreation loads Poppins only: 400 body + headings, maybe 600 for emphasis) | `css/style.css` FTCO body + headings rules                                                                                                |
| Icons             | ionicons (3 contact glyphs, 3 social brand glyphs, copyright heart) → lucide (Phone/Mail/MapPin) + inline SVG brand glyphs for the social chips (lucide removed Twitter/Facebook/Instagram)                                                                                                                                                                                                                          | `css/ionicons.min.css` classes in DOM                                                                                                     |
| Images            | **NONE** — the source references no images (no thumbs, no tile grid, no `background-image`). Recreation stays image-free                                                                                                                                                                                                                                                                                             | DOM + `.footer-10` styles                                                                                                                 |
| Mobile behavior   | Contact tiles: 3-across on md (`col-md-4`), stacked below md; links+subscribe: `col-md-7`+`col-md-5` side-by-side on md+, stacked below md (link columns `col-md-4` → 3-across on md+); copyright bar: side-by-side on md+ (right `text-md-right`), stacked below md. No order flips, no horizontal scroll                                                                                                           | Bootstrap grid classes                                                                                                                    |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Peroration app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler section and the footer inside the
  main landmark
- **AND** the document title SHALL be "Peroration — Footer"

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
  **"Footer #10"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Dark charcoal footer band

The system SHALL render the dark charcoal footer band with the source's
background and Poppins typeface.

#### Scenario: Footer band renders dark

- **GIVEN** the filler section is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `background: #222222` and
  the source's `padding: 0 0 4em 0` (no top padding — the band starts flush
  under the filler)
- **AND** the font family SHALL be Poppins (body 15px, line-height 1.8;
  headings weight 400, line-height 1.5)
- **AND** the page SHALL have a main landmark and a semantic `<footer>`
  landmark

### Requirement: Contact-card band

The system SHALL render the THREE contact tiles — 50px blue circular icon +
white text, 3-across on md+.

#### Scenario: Contact tiles render

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the top of the footer
- **THEN** a row SHALL render THREE tiles (3-across on md+, stacked below
  md) with near-black backgrounds (`#1e1e1e` / `#1c1c1c` / `#252525`), `py-5`
  rhythm, and centered content, each containing:
  - a 50×50 circular icon with `background: #1089ff` and a white glyph
    (lucide Phone / Mail / MapPin)
  - white text at `rgba(255,255,255,0.8)`: **"(+00) 1234 5678"**,
    **"info@email.com"**, and **"203 Fake St. Mountain View, San Francisco,
    California, USA"**

### Requirement: Link columns

The system SHALL render the About / Company / Resources link lists — 18px
white headings with dim-white block links that brighten on hover.

#### Scenario: Link lists render

- **GIVEN** the contact-card band is rendered
- **WHEN** the user inspects the links area
- **THEN** the THREE `col-md-4` link columns SHALL render (3-across on md+
  within the `col-md-7` wrapper), each with an 18px white `footer-heading`
  (no icon, not uppercase) and a plain `list-unstyled`:
  - **"About"** with links **"Out story"**, **"Awards"**, **"Our Team"**,
    **"Career"**
  - **"Company"** with links **"Our services"**, **"Clients"**, **"Contact"**,
    **"Press"**
  - **"Resources"** with links **"Blog"**, **"Newsletter"**, **"Privacy
    Policy"**
- **AND** each link SHALL render as a full-width block row in
  `rgba(255,255,255,0.2)` that becomes `#fff` on hover/focus

### Requirement: Subscribe form

The system SHALL render the Subscribe column — white input + wide blue
button + 13px subheading — as a static form.

#### Scenario: Subscribe form renders

- **GIVEN** the link columns are rendered
- **WHEN** the user inspects the fourth column (`col-md-5`)
- **THEN** the column SHALL render with the 18px white heading **"Subscribe"**
  and a form containing:
  - a text input with **white background**, no border, square corners,
    `rgba(0,0,0,0.3)` text/placeholder, placeholder **"Enter email address"**
  - a 130×52 **`#1089ff`** button with white text **"Subscribe"** and square
    corners
  - a 13px subheading in `rgba(255,255,255,0.3)`: **"Get digital marketing
    updates in your mailbox"**

#### Scenario: Subscribe form submits

- **GIVEN** the subscribe form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (the source uses `action="#"`
  with no handler — a static form suffices; add `aria-label`/labeled input
  for the email field)

### Requirement: Copyright bar and social chips

The system SHALL render the top-bordered copyright bar with the credit line,
the mandatory Component Dock link, and the three circular social chips.

#### Scenario: Copyright bar renders

- **GIVEN** the subscribe column is rendered
- **WHEN** the user inspects the bottom of the footer
- **THEN** a row SHALL render with `border-top` in `rgba(255,255,255,0.1)`
  and:
  - left (`col-md-6 col-lg-8`): **"Copyright © <current year> All rights
    reserved. | This template is made with ♥ by Component Dock"** — the
    source shows "…by Colorlib.com" with the brand link in blue `#1089ff`
  - right (`col-md-6 col-lg-4 text-md-right`): THREE 40px circular social
    chips (`rgba(255,255,255,0.1)` background, white glyph) linking to
    Twitter/X, Facebook, and Instagram
- **AND** the heart SHALL be `aria-hidden` (decorative)
- **AND** the "Component Dock" text SHALL link to
  `https://www.componentdock.com/` per convention — ColorLib must NOT appear
  anywhere in `apps/peroration`

### Requirement: Responsive layout

The system SHALL reproduce the source's grid: 3-across contact tiles on md+,
col-md-7/col-md-5 split, no horizontal overflow.

#### Scenario: Grid adapts across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the contact tiles SHALL show 3-across (`col-md-4`), the links and
  subscribe SHALL sit side-by-side (`col-md-7` / `col-md-5`), and the three
  link columns SHALL be 3-across
- **AND** the copyright bar SHALL show the left/right lines side-by-side on
  md+ (right aligned right) and stacked below md
- **AND** below md the tiles and columns SHALL stack full-width with `mb-4`
  gaps
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, an accessible subscribe form, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** the email input SHALL have a programmatic label (the source uses a
  bare placeholder — the recreation adds a visually-hidden `<label>` or
  `aria-label`)
- **AND** the submit button SHALL have an accessible name (visible text
  "Subscribe" suffices)
- **AND** the decorative heart SHALL carry `aria-hidden`
- **AND** the contact tiles and social chips SHALL have accessible names
  (`aria-label` — e.g. "Phone", "Email", "Address", "Twitter", "Facebook",
  "Instagram"; the source uses tooltips on the social links)
- **AND** the social-chip glyphs SHALL be decorative (`aria-hidden` on the
  inner SVG)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring (the source removes the focus outline from the input —
  the recreation SHALL restore a visible focus style)

## Verification checklist

- [ ] `openspec/specs/template-peroration/spec.md` present with the REAL
      section list (filler → dark charcoal band → contact tiles →
      About/Company/Resources links → Subscribe form → copyright bar +
      social chips).
- [ ] Design tokens above (charcoal `#222222`, blue `#1089ff`, tiles
      `#1e1e1e`/`#1c1c1c`/`#252525`, white/rgba-white text scale, Poppins,
      50px blue circular contact icons, white subscribe input, 130×52 blue
      button, 40px social circles, 18px headings, 4em bottom padding, 12em
      filler) captured in the spec.
- [ ] `docs/templates/peroration/tasks.md` has the task outline + design
      notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh
    peroration`, PR lists source (ColorLib Bootstrap Footer 20), the
      `/theme/bft/` preview URL, tokens, and what differs.
