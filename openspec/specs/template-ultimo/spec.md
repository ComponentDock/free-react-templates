# Template: Ultimo (Footer)

## Purpose

Ultimo is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 15"
design (source: https://colorlib.com/wp/template/bootstrap-footer-15/), built
under a DIFFERENT name (**Ultimo** — Italian/Latin for "last, final", the
fifteenth entry in the footer series' ending-themed naming: Colophon → Envoi
→ Epilogue → Coda → Outro → Finale → Postlude → Stretto → Fermata → Finis →
Tailpiece → Terminus → Capstone → Omega → **Ultimo**; a single lowercase
word, kebab-case, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-16), per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The
page is a footer-only component demo: a white filler section (source labels
it "Footer #05", `padding: 12em 0`) → the footer — a **GREEN** band
(`background: #68983b`, footer global `padding: 7em 0` overridden to
`padding: 4em 0 !important`), **Poppins** typeface (body 15px / line-height
1.8). The footer splits into THREE stacked rows: (1) **Top row** —
`row.border-bottom.mb-5.pb-4.align-items-center` with the two-tone logo
(`h2.logo` → `a` "Colorlib" 28px white + `span` "Free Templates" 14px block
pale-yellow `#fff8a1`) on the left and THREE **circular** social chips
(Twitter, Facebook, Instagram; transparent bg, `1px solid #81ba4c` border,
hover border `#fff8a1`, white 20px glyphs) right-aligned; (2) **Main row** —
FOUR `col-md-6 col-lg-3` columns: **(a) Brand/Contact** — `h2.footer-heading`
"Colorlib", a `block-23` contact list (pin icon + address line "203 Fake St.
Mountain View, San Francisco, California, USA", call icon + phone link "+2
392 3929 210", send icon + email link "info@yourdomain.com"; icons 40px/18px,
all `rgba(255,255,255,.5)`), then a `subscribe-form` (email input: `rgba(0,0,0,.05)`
bg, **2px solid #81ba4c border**, 15px, `rgba(255,255,255,.4)` text, square
edges + 52×52 `#81ba4c` square icon submit button with a paper-plane glyph
and sr-only "Submit"); **(b) Latest News** — TWO `block-21` rows (80×80
rounded thumbnail `image_1.jpg` / `image_2.jpg`, 16px heading link
"Even the all-powerful Pointing has no control about" in pale-yellow
`#fff8a1`, 12px meta line `rgba(255,255,255,.5)` with calendar/person/chat
glyphs: "Oct. 16, 2019" / "Admin" / "19"); **(c) Best Sellers** — `div.featured`
(100%-wide 150px rounded product image `prod-1.jpg`, h3 link "Grilled Beef
with potatoes", `p.rate` with FIVE star glyphs `ion-ios-star` — colored
`#fff8a1` via `.footer-05 a`); **(d) Instagram** — `div.block-24` a 3×2 grid
of SIX square `a.img` cells (100% × 100px, bg `insta-1.jpg` … `insta-6.jpg`);
(3) **Bottom bar** — `row.mt-5.pt-4.border-top` (`border-color: #75aa42`):
left `col-md-6 col-lg-8` → `p.copyright` "Copyright © <year> All rights
reserved." + right `col-md-6 col-lg-4.text-md-right` → `p.copyright` "This
template is made with ♥ by Colorlib.com" (recreation replaces the Colorlib
attribution with the Component Dock link per convention). The accents are
**pale yellow `#fff8a1`** (all links, logo subtitle, news headings, stars,
social-chip hover border) and **lighter green `#81ba4c`** (social-chip
borders, subscribe input border, subscribe button bg) on the **green
`#68983b`** band with **`#75aa42`** divider lines. This is a LIGHT-COLOR
variant — green band — breaking from the recent dark charcoal footer preps
(Stretto/footer-08, Tailpiece/footer-11, Terminus/footer-12, Omega/footer-14)
and continuing the rose/light Capstone/footer-13 direction. No navbar, no
hero; images are thumbnails only (news, product, instagram grid); no behavior
beyond the (static) newsletter form.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 15" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a filler
  strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-15/. TEMPLATES.md has ONE
  copy (line 791, `- [ ]` unchecked). This prep: Bootstrap Footer 15 →
  **Ultimo**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (series-wide — see the colophon/terminus/capstone/
  omega preps):** `https://preview.colorlib.com/theme/bootstrap-footer-15/`
  returns **HTTP 404** ("Not Found" — a 9-byte body). The footer series is
  served under the **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the
  live preview is `https://preview.colorlib.com/theme/bft/bootstrap-footer-15/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-15/` (HTTP 200,
  13,265 bytes HTML, `<title>Footer 05</title>` — the title is the variant
  label, not the series number). Stylesheets: `css/ionicons.min.css` (icon
  font — glyphs `ion-logo-twitter`, `ion-logo-facebook`, `ion-logo-instagram`,
  `ion-ios-pin`, `ion-ios-call`, `ion-ios-send`, `ion-ios-star`,
  `ion-ios-heart`) + `css/style.css` (223,683 bytes — the FULL shared FTCO
  sheet bundling rules for many variants; only the `.footer-05` block and the
  shared helpers apply to this page). No Google Fonts `<link>` — cf-fonts
  inline `@font-face` blocks load **Poppins**; body rule:
  `font-family: "Poppins", Arial, sans-serif`, `font-size: 15px`,
  `line-height: 1.8` (headings: same family, weight 400, line-height 1.5).
  No JS behavior needed (jquery/popper/bootstrap.min.js load but the footer
  is static; the newsletter form has `action="#"` and no handler — none
  needed in the recreation).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-15.jpg`, 1200×972 AVIF, viewed in browser):** screenshot
  matches the live DOM (NO variance — only the JS-rendered copyright year
  differs: static capture shows 2021, live shows the current year). A white
  demo area with "Footer #05" centered; below it a solid **green** footer
  band. Top row: white two-tone logo ("Colorlib" + smaller pale-yellow "Free
  Templates") left, three circular outline social icons right. Four columns:
  contact info with pale icons + square newsletter field with a green send
  button; two news rows (small square thumbs, pale-yellow headline links,
  small meta); a featured product image with title and five pale-yellow
  stars; an Instagram grid of six square food photos. A green bottom bar
  separated by a lighter line: copyright left, "made with ♥" right. Clean,
  minimal, modern green food/restaurant aesthetic; the ONLY accents are the
  pale yellow `#fff8a1` and lighter green `#81ba4c`.
- **Structure (DOM order, 1:1):**
  `section.ftco-section` (`padding: 12em 0`; no background — white),
  `div.container` → `div.row.justify-content-center` →
  `div.col-md-6.text-center` → `h2` "Footer #05", `margin-bottom: 0`) →
  `footer.footer-05` (`background: #68983b`; `padding: 4em 0 !important` —
  overrides the base `footer { padding: 7em 0 }`; `font-size: 14px`
  inherited) → `div.container`:
  - **Top row** — `div.row.border-bottom.mb-5.pb-4.align-items-center`
    (`border-color: #75aa42 !important` via `.footer-05 .border-bottom`):
    `div.col-md-6.mb-md-0.mb-4` → `h2.logo` → `a href="#"` **"Colorlib"**
    (28px, white, line-height 1.2) + `span` **"Free Templates"** (14px,
    `display: block`, pale-yellow `#fff8a1`); `div.col-md-6.mb-md-0.mb-4.text-md-right`
    → `ul.ftco-footer-social.p-0.mb-0` → THREE `li.ftco-animate` → `a`
    (tooltip title Twitter / Facebook / Instagram) → `span.ion-logo-*`
    (40×40 **CIRCULAR** chips — base `border-radius: 50%` NOT overridden;
    `background: transparent`, `border: 1px solid #81ba4c`; hover
    `border: 1px solid #fff8a1`; centered white 20px glyphs)
  - **Main row** — `div.row` → FOUR `div.col-md-6.col-lg-3.mb-md-0.mb-4`:
    - **Col 1 (Brand/Contact)** — `h2.footer-heading` **"Colorlib"** →
      `div.block-23.mb-3` → `ul`: `li` → `span.icon.ion-ios-pin` +
      `span.text` **"203 Fake St. Mountain View, San Francisco, California,
      USA"** (no link); `li` → `a` → `span.icon.ion-ios-call` + `span.text`
      **"+2 392 3929 210"**; `li` → `a` → `span.icon.ion-ios-send` +
      `span.text` **"info@yourdomain.com"** (all `rgba(255,255,255,.5)`;
      table-cell layout, icon column 40px / 18px, `margin-bottom: 15px`) →
      `form.subscribe-form` (`action="#"`) → `div.form-group.d-flex`:
      `input.form-control.rounded-left` (type text,
      `placeholder="Enter email address"`, `background: rgba(0,0,0,.05)
!important`, **`border: 2px solid #81ba4c !important`**, no outline,
      `color: rgba(255,255,255,.4) !important`, 15px, radius 0, 52px height)
      - `button.form-control.submit.rounded-right` (type submit: **52×52**,
        `background: #81ba4c !important`, white, `border: none`, radius 0,
        containing `span.sr-only` "Submit" + `i.ion-ios-send` — an ICON
        button, not a text button)
    - **Col 2 (Latest News)** — `h2.footer-heading` **"Latest News"** →
      TWO `div.block-21.mb-4.d-flex`: `a.img.mr-4.rounded` (80×80,
      `background-image: url(images/image_1.jpg)` / `image_2.jpg`) →
      `div.text` → `h3.heading` → `a` **"Even the all-powerful Pointing has
      no control about"** (16px, weight 400, line-height 1.4, pale-yellow
      `#fff8a1` via `.footer-05 .block-21 .heading a`) → `div.meta` →
      THREE `div`: `a` → `span.icon-calendar` **"Oct. 16, 2019"**, `a` →
      `span.icon-person` **"Admin"**, `a` → `span.icon-chat` **"19"** (12px,
      inline-block, `margin-right: 5px`, `rgba(255,255,255,.5)`; both news
      rows repeat the SAME copy)
    - **Col 3 (Best Sellers)** — `h2.footer-heading` **"Best Sellers"** →
      `div.row` → `div.col-md-12` → `div.featured`: `a.img.rounded.mb-3`
      (**100% × 150px**, `background-image: url(images/prod-1.jpg)`) →
      `div.text` → `h3` → `a` **"Grilled Beef with potatoes"** (16px,
      pale-yellow `#fff8a1` via `.footer-05 a`) → `p.rate` → FIVE `a` →
      `span.ion-ios-star` (5-star rating, pale-yellow `#fff8a1`)
    - **Col 4 (Instagram)** — `h2.footer-heading` **"Instagram"** →
      `div.block-24` → `div.row.no-gutters` → SIX `div.col-4.col-md-4` →
      `a.img` (**100% × 100px**, `background-image: url(images/insta-1.jpg)`
      … `insta-6.jpg`) — a 3×2 photo grid
  - **Bottom bar** — `div.row.mt-5.pt-4.border-top` (`border-color: #75aa42`):
    `div.col-md-6.col-lg-8` → `p.copyright`: "Copyright © <year> All rights
    reserved." + `div.col-md-6.col-lg-4.text-md-right` → `p.copyright`:
    "This template is made with ♥ by Colorlib.com" (heart `i.ion-ios-heart`,
    `aria-hidden`; recreation replaces the Colorlib attribution with the
    Component Dock link per convention; both `p.copyright` inherit
    `rgba(255,255,255,.5)` from `.footer-05 p`). **NO legal links (Terms /
    Privacy / Compliances) in this variant** — the right side carries the
    attribution line instead.
- **Grid behavior (Bootstrap 4.3.1, reproduce responsively):** FOUR main
  columns `col-md-6 col-lg-3` — 2×2 grid on md–lg, 4-across on lg+, stacked
  full-width below md with `mb-4` gaps. Top row: `col-md-6` + `col-md-6
text-md-right` (logo left, socials right; stacked below md). Bottom bar:
  `col-md-6 col-lg-8` + `col-md-6 col-lg-4 text-md-right`. No order flips,
  no horizontal scroll.
- **Icons:** ionicons — `ion-logo-twitter`, `ion-logo-facebook`,
  `ion-logo-instagram` (THREE circular social buttons; lucide REMOVED brand
  icons, so render tiny inline SVG brand marks or neutral lucide glyphs per
  the skill's icon guidance — probe every import with the `typeof` check),
  `ion-ios-pin` (address → lucide `MapPin`, probe it), `ion-ios-call` (phone
  → lucide `Phone`, probe it), `ion-ios-send` (contact email AND the
  subscribe button — a paper-plane; lucide `Send` exists — probe it),
  `ion-ios-star` ×5 (rating → lucide `Star`, probe it), `ion-ios-heart`
  (copyright heart → lucide `Heart` or a ♥ text glyph, `aria-hidden`), plus
  the small meta glyphs `icon-calendar` / `icon-person` / `icon-chat` (news
  meta → lucide `Calendar` / `User` / `MessageCircle`, probe them).
- **Images:** six thumbnail roles, all replaced with deterministic picsum
  placeholders (`https://picsum.photos/seed/ultimo-<n>/<w>/<h>`): news thumb
  ×2 (80×80 → seed ultimo-1, ultimo-2), featured product (any food-ish
  landscape, ~400×150 → seed ultimo-3), instagram grid ×6 (square, ~200×200 →
  seeds ultimo-4 … ultimo-9). No full-bleed backgrounds. Solid `#68983b`
  footer band only.

## Design tokens (from the reference — `.footer-05` + shared helpers)

| Token             | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Source                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Font family       | **Poppins** — `body { font-family: "Poppins", Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight: normal; }`; headings: same family, weight 400, line-height 1.5 (cf-fonts loads weights 300–900; recreation needs 400; `.footer-heading` is weight 400 — NOT 600)                                                                                                                                                                                                                                                           | `css/style.css` body + headings rules                               |
| Footer background | **`#68983b`** (medium green) — `.footer-05 { background: #68983b; padding: 4em 0 !important; }` (overrides the base `footer { padding: 7em 0 }`; GREEN variant — contrast with the dark charcoal Omega/footer-14 and pale-rose Capstone/footer-13)                                                                                                                                                                                                                                                                                          | `.footer-05` + `footer`                                             |
| Divider lines     | **`#75aa42`** — `.footer-05 .border-bottom, .footer-05 .border-top { border-color: #75aa42 !important; }` (top-row divider AND bottom-bar divider)                                                                                                                                                                                                                                                                                                                                                                                          | `.footer-05 .border-bottom/.border-top`                             |
| Link accent       | **`#fff8a1`** (pale yellow) — `.footer-05 a { color: #fff8a1; }` (hover keeps `#fff8a1`): ALL links — news headings, product title, stars, contact phone/email, bottom-bar attribution link; also the logo subtitle `span` and the social-chip hover border                                                                                                                                                                                                                                                                                 | `.footer-05 a`, `.logo a span`, social hover                        |
| Secondary accent  | **`#81ba4c`** (lighter green) — social-chip borders (`1px solid #81ba4c`), subscribe input border (`2px solid #81ba4c`), subscribe button background                                                                                                                                                                                                                                                                                                                                                                                        | `.footer-05 .ftco-footer-social li a`, `.subscribe-form`, `.submit` |
| Muted text        | **`rgba(255,255,255,.5)`** — `.footer-05 p`; `.block-21 .meta div a`; `.block-23 ul li` / `li a`; bottom-bar `p.copyright` (the address/phone/email contact list and the news meta)                                                                                                                                                                                                                                                                                                                                                         | `.footer-05 p`, `.block-21 .meta`, `.block-23`                      |
| Input text        | **`rgba(255,255,255,.4)`** — subscribe input text AND placeholder (`::placeholder` all vendors)                                                                                                                                                                                                                                                                                                                                                                                                                                             | `.footer-05 .subscribe-form .form-group input` (+ placeholders)     |
| Logo              | `h2.logo` (`line-height: 1.2`): `a` **28px, white**; `span` **14px, `display: block`, `#fff8a1`** ("Colorlib" + "Free Templates" two-tone)                                                                                                                                                                                                                                                                                                                                                                                                  | `.footer-05 .logo a` (+ `span`)                                     |
| Column headings   | `.footer-heading`: **`font-size: 20px`, `color: #fff`, `margin-bottom: 30px`, weight 400** — NO `:after` underline, NOT uppercase in this variant (contrast with footer-04's 13px uppercase 600)                                                                                                                                                                                                                                                                                                                                            | `.footer-05 .footer-heading`                                        |
| Social chips      | `.ftco-footer-social li a` base: **40×40, `border-radius: 50%` (CIRCULAR — not overridden here), `background: rgba(0,0,0,.05)`** → `.footer-05` override: `background: transparent`, `border: 1px solid #81ba4c`; hover `border: 1px solid #fff8a1`; white 20px glyphs, absolutely centered; `margin: 0 10px 0 0` per `li`; `li a:hover { color: #fff }` (base)                                                                                                                                                                             | `.ftco-footer-social li a` + `.footer-05 .ftco-footer-social li a`  |
| Contact list      | `.block-23 ul li, li > a`: **`display: table`, `line-height: 1.5`, `margin-bottom: 15px`**; `.icon`/`.text` are `table-cell`, `vertical-align: top`; `.icon`: **width 40px, font-size 18px, padding-top 2px**; text `rgba(255,255,255,.5)`                                                                                                                                                                                                                                                                                                  | `.block-23 ul`                                                      |
| Subscribe input   | `input.form-control.rounded-left`: **`background: rgba(0,0,0,.05) !important`, `border: 2px solid #81ba4c !important`, `outline: none`, `border-radius: 0`, `font-size: 15px`, `color: rgba(255,255,255,.4) !important`, height 52px** (base `.form-control`); no focus box-shadow                                                                                                                                                                                                                                                          | `.footer-05 .subscribe-form .form-group input` (+ `:focus`)         |
| Subscribe button  | `button.form-control.submit.rounded-right` (type submit): **`width: 52px; height: 52px; font-size: 16px; background: #81ba4c !important; color: #fff !important; border: none; border-radius: 0`**; contains `span.sr-only` "Submit" + `i.ion-ios-send` (paper-plane icon) — an ICON button with sr-only label                                                                                                                                                                                                                              | `.footer-05 .subscribe-form .form-group .submit`                    |
| Form group        | `div.form-group.d-flex` — `position: relative; margin-bottom: 0; border-radius: 0` (input + button side by side, square edges)                                                                                                                                                                                                                                                                                                                                                                                                              | `.footer-05 .subscribe-form .form-group`                            |
| News rows         | `.block-21 .img`: **80×80, `display: block`, `border-radius` from the `rounded` utility (0.25rem)**; `.block-21 .text`: **`width: calc(100% - 100px)`**; `.heading`: **16px, weight 400, line-height 1.4**, link pale-yellow `#fff8a1`; `.meta > div`: **12px, inline-block, `margin-right: 5px`**, links `rgba(255,255,255,.5)`; `d-flex` row layout                                                                                                                                                                                       | `.block-21 .img/.text`, `.footer-05 .block-21`                      |
| Featured product  | `.featured` (in `.footer-05`): **`width: 100%`**; `.featured .img`: **`width: 100%`, `height: 150px`, `display: block`** (+ `rounded` utility); `.featured .text h3`: **16px**; `.rate` stars: FIVE `ion-ios-star` glyphs, pale-yellow `#fff8a1` (inherited from `.footer-05 a`)                                                                                                                                                                                                                                                            | `.footer-05 .featured` (+ `.img`, `.text h3`), `.footer-05 a`       |
| Instagram grid    | `.block-24 a.img`: **`width: 100%`, `height: 100px`, `display: block`**; SIX `col-4 col-md-4` cells in `row.no-gutters` → 3×2 grid (2 rows × 3 columns)                                                                                                                                                                                                                                                                                                                                                                                     | `.block-24 a.img`, DOM classes                                      |
| Bottom bar        | `div.row.mt-5.pt-4.border-top` — `.footer-05 .border-top` = **`border-color: #75aa42 !important`** (same green band bg, NO darker strip — contrast with footer-04's `#1a1a1a` bar); `p.copyright` inherits `rgba(255,255,255,.5)`; left `col-md-6 col-lg-8` copyright line, right `col-md-6 col-lg-4 text-md-right` "made with ♥" (NO Terms/Privacy/Compliances legal links in this variant)                                                                                                                                                | `.footer-05 .border-top`, `p.copyright`, DOM                        |
| Filler area       | `.ftco-section`: **`padding: 12em 0`**, NO background (white), centered `h2` "Footer #05" (`margin-bottom: 0`)                                                                                                                                                                                                                                                                                                                                                                                                                              | `.ftco-section`, `.ftco-section h2`                                 |
| Link transition   | `a { transition: .3s all ease; }`; `a:hover, a:focus { text-decoration: none !important; outline: none !important; }` (global)                                                                                                                                                                                                                                                                                                                                                                                                              | `css/style.css` top rules                                           |
| Icons             | ionicons: `ion-logo-twitter/facebook/instagram` (THREE circular chips — lucide REMOVED brand icons, use tiny inline SVG brand marks or neutral lucide glyphs per brand, probe with `typeof`); `ion-ios-pin` (→ lucide `MapPin`), `ion-ios-call` (→ lucide `Phone`), `ion-ios-send` (contact email + subscribe button → lucide `Send`), `ion-ios-star` ×5 (→ lucide `Star`), `ion-ios-heart` (→ lucide `Heart` or ♥ text, `aria-hidden`); meta glyphs `icon-calendar`/`icon-person`/`icon-chat` (→ lucide `Calendar`/`User`/`MessageCircle`) | `css/ionicons.min.css` classes in DOM                               |
| Images            | SIX thumbnail roles, ALL replaced with deterministic picsum seeds: news `image_1.jpg`/`image_2.jpg` (80×80 → `ultimo-1`/`ultimo-2`), featured `prod-1.jpg` (150px tall → `ultimo-3`), instagram `insta-1..6.jpg` (square → `ultimo-4`…`ultimo-9`). No full-bleed backgrounds; solid `#68983b` band only                                                                                                                                                                                                                                     | DOM `style="background-image: url(...)"` attributes                 |
| Mobile behavior   | Top row `col-md-6` + `col-md-6 text-md-right` (stacked below md); FOUR `col-md-6 col-lg-3` main columns: stacked full-width below md with `mb-4` gaps, 2×2 on md, 4-across on lg+; bottom bar `col-md-6 col-lg-8` + `col-md-6 col-lg-4 text-md-right`; instagram grid stays 3-across (`col-4`) at ALL breakpoints; no horizontal scroll                                                                                                                                                                                                     | Bootstrap classes                                                   |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Ultimo app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler section and the footer inside the
  main landmark
- **AND** the document title SHALL be "Ultimo — Footer"

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
  **"Footer #05"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Green footer band

The system SHALL render the green footer band with the source's background,
padding, and Poppins typeface.

#### Scenario: Footer band renders green

- **GIVEN** the filler section is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `background: #68983b` and
  `padding: 4em 0` (the source overrides the base 7em)
- **AND** the font family SHALL be Poppins (body 15px, line-height 1.8;
  headings weight 400, line-height 1.5)
- **AND** the page SHALL have a main landmark and a semantic `<footer>`
  landmark

### Requirement: Top row (logo + social chips)

The system SHALL render the bordered top row with the two-tone logo on the
left and three circular social chips on the right.

#### Scenario: Top row renders

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the top of the footer
- **THEN** a row SHALL render separated by a `#75aa42` bottom border
  (`border-bottom`, `mb-5 pb-4`, vertically centered)
- **AND** the left side SHALL render the logo link: **"Colorlib"** at 28px in
  white with a second line **"Free Templates"** at 14px in pale yellow
  `#fff8a1` (`display: block`) — the recreation may use its own brand name
- **AND** the right side SHALL render THREE **circular** 40×40 social chips
  (transparent background, `1px solid #81ba4c` border, white 20px glyphs,
  `margin: 0 10px 0 0`) for **Twitter, Facebook, Instagram** (lucide removed
  brand icons — use tiny inline SVG brand marks or neutral lucide glyphs;
  probe imports with `typeof`)
- **AND** each chip SHALL be a link with an accessible name (the source uses
  a tooltip `title` — the recreation uses `aria-label`)
- **AND** on hover the chip border SHALL turn pale yellow `#fff8a1`

### Requirement: Brand/Contact column (left)

The system SHALL render the first column with the heading, the three-item
contact list, and the newsletter form.

#### Scenario: Contact list and newsletter form render

- **GIVEN** the top row is rendered
- **WHEN** the user inspects the first column
- **THEN** a `.footer-heading` SHALL render with the text **"Colorlib"** (the
  recreation may use its own brand name; 20px, white, weight 400,
  `margin-bottom: 30px`)
- **AND** a contact list SHALL render with THREE items in
  `rgba(255,255,255,.5)` (table-cell layout, 40px/18px icon column, 15px
  spacing):
  - a map-pin icon + address **"203 Fake St. Mountain View, San Francisco,
    California, USA"** (plain text, no link)
  - a phone icon + phone link **"+2 392 3929 210"**
  - a paper-plane icon + email link **"info@yourdomain.com"**
- **AND** a real `<form>` SHALL render below (no backend needed — the source
  uses `action="#"` with no handler) containing a flex row with:
  - an email input (square edges, `background: rgba(0,0,0,.05)`,
    **2px solid #81ba4c border**, 15px, text `rgba(255,255,255,.4)`,
    placeholder **"Enter email address"**, 52px tall)
  - a **52×52 square submit button** (`background: #81ba4c`, white) carrying
    a paper-plane icon (lucide `Send`) and a visually-hidden **"Submit"**
    label (the source uses `span.sr-only` — an icon button, NOT a text
    button)
- **AND** the email input SHALL have a programmatic label (the source uses a
  bare placeholder — the recreation adds a visually-hidden `<label>` or
  `aria-label`)

### Requirement: Latest News column

The system SHALL render the "Latest News" column with the source's two news
rows (thumbnail, heading link, meta line).

#### Scenario: News rows render

- **GIVEN** the contact column is rendered
- **WHEN** the user inspects the second column
- **THEN** a `.footer-heading` SHALL render with the text **"Latest News"**
- **AND** TWO news rows SHALL render, each a flex row of:
  - an 80×80 rounded thumbnail (picsum placeholder, seeds `ultimo-1` /
    `ultimo-2`)
  - a 16px heading link in pale yellow `#fff8a1`: **"Even the all-powerful
    Pointing has no control about"** (both rows repeat the same copy — keep
    the same kind of content)
  - a 12px meta line in `rgba(255,255,255,.5)` with THREE inline items
    (calendar/person/chat glyphs): **"Oct. 16, 2019"**, **"Admin"**, **"19"**
- **AND** the text block SHALL be ~`calc(100% - 100px)` wide next to the
  thumbnail

### Requirement: Best Sellers column

The system SHALL render the "Best Sellers" column with the featured product
image, title, and five-star rating.

#### Scenario: Featured product renders

- **GIVEN** the news column is rendered
- **WHEN** the user inspects the third column
- **THEN** a `.footer-heading` SHALL render with the text **"Best Sellers"**
- **AND** a full-width rounded image SHALL render at 150px tall (picsum
  placeholder, seed `ultimo-3`)
- **AND** a 16px link SHALL render below it: **"Grilled Beef with potatoes"**
  in pale yellow `#fff8a1`
- **AND** FIVE star glyphs SHALL render below the title (lucide `Star`),
  each a link, in pale yellow `#fff8a1` (inherited from `.footer-05 a`)

### Requirement: Instagram column

The system SHALL render the "Instagram" column with a 3×2 grid of six square
image cells.

#### Scenario: Instagram grid renders

- **GIVEN** the best sellers column is rendered
- **WHEN** the user inspects the fourth column
- **THEN** a `.footer-heading` SHALL render with the text **"Instagram"**
- **AND** SIX square image cells SHALL render in a 3×2 grid (`col-4` at all
  breakpoints, no gutters), each 100% wide × 100px tall, each a link (picsum
  placeholders, seeds `ultimo-4` … `ultimo-9`)

### Requirement: Bottom bar

The system SHALL render the bottom bar with the copyright line, the heart,
and the mandatory Component Dock link.

#### Scenario: Copyright and attribution render

- **GIVEN** the footer columns are rendered
- **WHEN** the user inspects the bottom of the footer
- **THEN** a row SHALL render separated by a `#75aa42` top border
  (`mt-5 pt-4`; left `col-md-6 col-lg-8`, right `col-md-6 col-lg-4
text-md-right` on md+; stacked below md)
- **AND** the left side SHALL render the copyright line in
  `rgba(255,255,255,.5)`: **"Copyright © <current year> All rights
  reserved."**
- **AND** the right side SHALL render the attribution line:
  **"This template is made with ♥ by Component Dock"** (the source shows
  "...made with ♥ by Colorlib.com"; the heart SHALL be `aria-hidden`
  (decorative) and the "Component Dock" text SHALL link to
  `https://www.componentdock.com/` per convention — ColorLib must NOT appear
  anywhere in `apps/ultimo`)
- **AND** the bottom bar SHALL have NO legal links (the source variant has
  none — the right side carries the attribution line instead)

### Requirement: Responsive layout

The system SHALL reproduce the source's grid: top row logo + socials, four
`col-lg-3` columns (2×2 on md, 4-across on lg+), bottom `col-md-6 col-lg-8` +
`col-md-6 col-lg-4`.

#### Scenario: Grid adapts across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the lg breakpoint (≥992px)
- **THEN** the FOUR columns SHALL render side by side (each `col-lg-3`), the
  top row SHALL show logo left + social chips right, and the bottom bar SHALL
  show copyright left (8/12) + attribution right (4/12)
- **AND** at the md breakpoint (≥768px) the main columns SHALL render as a
  2×2 grid (each `col-md-6`), and the top/bottom rows SHALL show the same
  6/6 and 8/4 splits
- **AND** below md the top row and all columns SHALL stack full-width with
  ~1.5rem gaps (the source uses `mb-4` on each column, removed via `mb-md-0`
  on md+), with the social chips left-aligned under the logo
- **AND** the Instagram grid SHALL stay 3-across at all breakpoints
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
- **AND** each social chip and each Instagram cell SHALL have an accessible
  name (the source relies on tooltip `title` for socials and bare links for
  the grid — the recreation uses `aria-label`)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app ultimo` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Ultimo — Footer"
- [ ] Filler: white section (source `padding: 12em 0`) with a centered demo
      label
- [ ] Footer band: GREEN — `background: #68983b`, `padding: 4em 0`; semantic
      `<footer>` + main landmark; Poppins (body 15px/1.8, headings weight
      400/1.5)
- [ ] Top row: `border-bottom` `#75aa42`; logo link 28px white + 14px
      pale-yellow `#fff8a1` subtitle (block); THREE CIRCULAR 40×40 social
      chips (transparent bg, `1px solid #81ba4c` border, hover border
      `#fff8a1`, white 20px glyphs, accessible names) — Twitter, Facebook,
      Instagram only (NO Linkedin); inline SVG brand marks / neutral lucide
      glyphs (probe imports with `typeof`)
- [ ] Contact column: heading "Colorlib" (20px white weight 400 mb 30px);
      block-23 list — pin + address (no link), call + phone link, send +
      email link (all `rgba(255,255,255,.5)`, table-cell 40px/18px icons, 15px
      spacing)
- [ ] Subscribe: real `<form>` with labeled email input (square, `rgba(0,0,0,.05)`
      bg, **2px solid #81ba4c border**, 15px, placeholder "Enter email
      address") + 52×52 `#81ba4c` square icon button (paper-plane, sr-only
      "Submit")
- [ ] Latest News: TWO rows — 80×80 rounded thumbnail (picsum `ultimo-1`/`2`),
      pale-yellow `#fff8a1` 16px heading link, 12px meta `rgba(255,255,255,.5)`
      (Oct. 16, 2019 / Admin / 19)
- [ ] Best Sellers: full-width 150px rounded image (picsum `ultimo-3`), 16px
      pale-yellow title "Grilled Beef with potatoes", FIVE pale-yellow stars
- [ ] Instagram: SIX square cells in a 3×2 no-gutter grid (100% × 100px,
      picsum `ultimo-4`…`ultimo-9`), 3-across at all breakpoints, each a
      linked cell with accessible name
- [ ] Bottom bar: `border-top` `#75aa42` (same green band — NO darker strip);
      left "Copyright © <current year> All rights reserved."; right "This
      template is made with ♥ by Component Dock" (heart `aria-hidden`,
      Component Dock link → `https://www.componentdock.com/`); NO legal links
      in this variant; NO ColorLib reference anywhere in `apps/ultimo`
      (provenance lives only here + TEMPLATES.md + PR)
- [ ] Responsive: 4×`col-lg-3` (2×2 on md, stacked below md with `mb-4`
      gaps); top row 6/6 split (stacked below md); bottom 8/4 split; insta
      grid 3-across always; no horizontal overflow
- [ ] Poppins via Google Fonts `<link>` in `index.html` (weight 400 suffices;
      the source loads 300–900)
- [ ] Images: picsum seeds `ultimo-1`…`ultimo-9` only (news ×2, featured ×1,
      insta ×6); no ColorLib assets copied
- [ ] Icons: lucide `Send` (subscribe + email), `MapPin`, `Phone`, `Star`
      ×5, `Heart` (aria-hidden) or ♥ text glyph, `Calendar`/`User`/
      `MessageCircle` (news meta); social brand marks as tiny inline SVGs /
      neutral lucide glyphs (lucide removed brand icons — probe imports with
      `typeof`)
