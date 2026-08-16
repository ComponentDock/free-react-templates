# Template: Swansong (Footer)

## Purpose

Swansong is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 19"
design (source: https://colorlib.com/wp/template/bootstrap-footer-19/), built
under a DIFFERENT name (**Swansong** — "a final song or performance",
continuing the footer series' ending-themed naming: Colophon → Envoi →
Epilogue → Coda → Outro → Finale → Postlude → Stretto → Fermata → Finis →
Tailpiece → Terminus → Capstone → Omega → Ultimo → Adieu → Valediction →
Farewell → **Swansong**; a single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-16),
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The page is a footer-only component demo: a
white filler section (source labels it "Footer #09", `padding: 12em 0`) →
the footer — a **DARK PURPLE GRADIENT band** (`linear-gradient(45deg, #2a1a5e
0%, #5126a7 100%)`; the base `footer { padding: 7em 0 }` is NOT overridden —
this variant keeps the 7em vertical rhythm), **Poppins** typeface (body 15px
/ line-height 1.8; headings weight 400 / line-height 1.5). The footer splits
into FOUR `col-md-6 col-lg-3` columns (2×2 on md, 4-across on lg+):
**(1) About** — icon + contact list (address / phone / email) + a NEWSLETTER
subscribe form (email input + pink square submit button); **(2) Latest
News** — TWO `block-21` posts (80×80 thumbnail, 16px heading link, 12px meta
row: date / author / comments); **(3) Information** — a plain FIVE-link list
(About / Products / Blog / Contact / Help & Support); **(4) Instagram** — a
SIX-thumbnail grid (2 rows × 3, 100px-tall square links). Below: a
`row.mt-5.pt-4.border-top` copyright bar — left "Copyright © All rights
reserved.", right "This template is made with ♥ by Colorlib.com" (recreation
replaces the Colorlib attribution with the Component Dock link per
convention). Brand accents: **pink `#fe59d7`** (all footer links + the
40px circular heading icons) and **light pink `#fe8ce3`** (subscribe input
2px border + the square submit button). No navbar, no hero; the only
interactive elements are the static subscribe form (`action="#"`, no JS
handler in source) and the links.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 19" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a filler
  strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-19/. TEMPLATES.md has ONE
  copy (line 795, `- [ ]` unchecked). This prep: Bootstrap Footer 19 →
  **Swansong**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (series-wide — see the colophon/terminus/capstone/
  omega/ultimo/adieu/valediction/farewell preps):**
  `https://preview.colorlib.com/theme/bootstrap-footer-19/` returns **HTTP
  404** ("Not Found" — a 9-byte body). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-19/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-19/` (HTTP 200,
  12,724 bytes HTML, `<title>Footer 09</title>` — the title is the variant
  label, not the series number). Stylesheets: `css/ionicons.min.css` (icon
  font — glyphs `ion-logo-ionic`, `ion-ios-list-box`, `ion-ios-document`,
  `ion-logo-instagram`, `ion-ios-pin`, `ion-ios-call`, `ion-ios-send`,
  `ion-ios-heart`) + `css/style.css` (223,848 bytes — the FULL shared FTCO
  sheet bundling rules for many variants; only the `.footer-09` block and the
  shared helpers apply to this page). No Google Fonts `<link>` — cf-fonts
  inline `@font-face` blocks load **Poppins** (300–900); body rule:
  `font-family: "Poppins", Arial, sans-serif`, `font-size: 15px`,
  `line-height: 1.8`, `font-weight: normal`; FTCO headings rule: same family,
  weight 400, line-height 1.5. No JS behavior needed (jquery/popper/
  bootstrap.min.js + main.js load but the footer is static; the subscribe
  form has `action="#"` and no handler — none needed in the recreation).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-19.jpg`, 1200×972, viewed in browser):** screenshot
  matches the live DOM (NO variance). A white demo area with "Footer #09"
  centered; below it a **deep purple → violet gradient** band (`45deg`,
  `#2a1a5e` → `#5126a7`). Four columns: **About** — pink circular icon +
  white 22px heading, contact rows (pin/call/send glyphs + muted white text:
  "203 Fake St. Mountain View, San Francisco, California, USA", "+2 392 3929
  210", "info@yourdomain.com"), then a newsletter row — a dark translucent
  email input with a **light-pink 2px border** and a square **pink submit
  button** with a white send arrow; **Latest News** — newspaper icon heading,
  TWO post rows each with an 80×80 rounded photo, a 16px white link heading
  ("Even the all-powerful Pointing has no control about"), and a 12px muted
  meta line (calendar/person/chat: "Oct. 16, 2019 / Admin / 19"); **Information**
  — document icon heading + FIVE plain links (About, Products, Blog, Contact,
  Help & Support); **Instagram** — camera icon heading + a 3×2 grid of square
  food photos (rounded). Below: a faint white 10%-alpha top border, then the
  copyright bar — left "Copyright © 2021 All rights reserved.", right "This
  template is made with ♥ by Colorlib.com" (the "Colorlib.com" link pink
  `#fe59d7`). Overall aesthetic: dark, modern, sleek corporate — the ONLY
  saturated colors are the pink accents; white headings on the dark gradient.
  THIS VARIANT HAS NO SOCIAL CHIPS and NO blog-only image set beyond the two
  news thumbs + six instagram tiles (contrast with footer-18/farewell's light
  band + contact form, and footer-06/adieu's checkmark bullets).
- **Structure (DOM order, 1:1):**
  `section.ftco-section` (`padding: 12em 0`; no background — white),
  `div.container` → `div.row.justify-content-center` →
  `div.col-md-6.text-center` → `h2` **"Footer #09"** (`margin-bottom: 0`) →
  `footer.footer-09` (`background: linear-gradient(45deg, #2a1a5e 0%, #5126a7
100%)`; inherits base `footer { padding: 7em 0 }` — NOT overridden, unlike
  footer-08) → `div.container` → `div.row` with FOUR columns
  `div.col-md-6.col-lg-3.mb-md-0.mb-4`:
  - **Col 1 — About** — `h2.footer-heading.d-flex` → `span.icon.d-flex.align-items-center.justify-content-center`
    → `i.ion-logo-ionic` (circular 40px 1px `#fe59d7`-bordered icon) +
    **"About"** → `div.block-23.mb-3` → `ul` → THREE `li` (table layout,
    `margin-bottom: 15px`):
    - `li` → `span.icon.ion-ios-pin` + `span.text` **"203 Fake St. Mountain
      View, San Francisco, California, USA"**
    - `li` → `a[href=#]` → `span.icon.ion-ios-call` + `span.text` **"+2 392
      3929 210"**
    - `li` → `a[href=#]` → `span.icon.ion-ios-send` + `span.text`
      **"info@yourdomain.com"**
      (block-23 text color `rgba(255,255,255,0.5)`; icons 40px wide, 18px
      font-size, `padding-top: 2px`)
      → `form.subscribe-form` (`action="#"`) → `div.form-group.d-flex`:
    - `input.form-control.rounded-left` (type text) placeholder **"Enter
      email address"** — `.footer-09 .subscribe-form .form-group input`:
      `background: rgba(0,0,0,0.05) !important; border: 2px solid #fe8ce3
!important; outline: none; color: rgba(255,255,255,0.3) !important;
font-size: 16px; border-radius: 0` (the `.rounded-left` radius is
      overridden to 0); placeholder color `rgba(255,255,255,0.3)`; `:focus`
      keeps `outline: none; box-shadow: none` (no focus ring in source —
      recreation SHOULD add a visible focus style for a11y)
    - `button.form-control.submit.rounded-right` (type submit) →
      `span.sr-only` **"Submit"** + `i.ion-ios-send` — `width: 52px; height:
52px; font-size: 16px; background: #fe8ce3 !important; color: #fff
!important; border: none; border-radius: 0`
  - **Col 2 — Latest News** — `h2.footer-heading.d-flex.align-items-center`
    → `span.icon` → `i.ion-ios-list-box` + **"Latest News"** → TWO
    `div.block-21.mb-4.d-flex`:
    - `a.img.mr-4.rounded` (`background-image: url(images/image_1.jpg)` /
      `image_2.jpg`; `display: block; height: 80px; width: 80px;
background-size: cover`) → `div.text` (`width: calc(100% - 100px)`):
      - `h3.heading` → `a[href=#]` **"Even the all-powerful Pointing has no
        control about"** (`font-size: 16px; font-weight: 400; line-height:
1.4`; color `rgba(255,255,255,0.5)` via `.footer-09 .block-21 .heading
a` — source repeats the SAME title on both posts; recreation SHOULD
        use two distinct news titles of the same kind)
      - `div.meta` → THREE `div` → `a[href=#]` → `span.icon-calendar` +
        **"Oct. 16, 2019"** / `span.icon-person` + **"Admin"** / `span.icon-chat`
        - **"19"** (`font-size: 12px; margin-right: 5px; display:
inline-block`; color `rgba(255,255,255,0.3)` via `.footer-09 .block-21
.meta div a`; the `icon-calendar/icon-person/icon-chat` classes have
          NO CSS rule in the sheet — the glyphs don't render; recreation may
          add lucide Calendar/User/MessageCircle or plain text)
  - **Col 3 — Information** — `h2.footer-heading.d-flex.align-items-center`
    → `span.icon` → `i.ion-ios-document` + **"Information"** → `ul.list-unstyled`
    → FIVE `li` → `a.py-1.d-block[href=#]`: **"About"**, **"Products"**,
    **"Blog"**, **"Contact"**, **"Help &amp; Support"** (color
    `rgba(255,255,255,0.5)` via `.footer-09 ul.list-unstyled li a`; **NO
    bullet glyphs** — contrast with footer-06)
  - **Col 4 — Instagram** — `h2.footer-heading.d-flex.align-items-center`
    → `span.icon` → `i.ion-logo-instagram` + **"Instagram"** →
    `div.block-24` → `div.row.no-gutters` → SIX `div.col-4.col-md-4.p-1` →
    `a.img.rounded[href=#]` (`background-image: url(images/insta-1..6.jpg)`;
    `width: 100%; height: 100px; display: block; background-size: cover`;
    `rounded` = 0.25rem radius) — 3×2 grid
  - **Copyright bar** — `div.row.mt-5.pt-4.border-top` (`border-color:
rgba(255,255,255,0.1) !important` via `.footer-09 .border-top`):
    - `div.col-md-6.col-lg-8` → `p.copyright` — **"Copyright © All rights
      reserved."** (no year in source markup; JS writes it — the screenshot
      shows 2021; recreation may render the current year)
    - `div.col-md-6.col-lg-4.text-md-right` → `p.copyright` — **"This
      template is made with <i class="ion-ios-heart" aria-hidden="true"></i>
      by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>"**
      (the "Colorlib.com" link is `#fe59d7` via `.footer-09 a`; recreation
      replaces it with the Component Dock link per convention)
- **Grid behavior (Bootstrap 4.3.1, reproduce responsively):** Footer row —
  FOUR `col-md-6 col-lg-3` columns → **2×2 on md, 4-across on lg+** (below
  md they stack full-width with `mb-4` gaps). Copyright row: `mt-5 pt-4`
  (3rem/1.5rem top spacing) with `border-top`; left `col-md-6 col-lg-8` +
  right `col-md-6 col-lg-4 text-md-right` — side-by-side on md+, stacked on
  xs (right aligned on md+). No order flips, no horizontal scroll.
- **Icons:** ionicons — `ion-logo-ionic` (About heading), `ion-ios-list-box`
  (Latest News), `ion-ios-document` (Information), `ion-logo-instagram`
  (Instagram) as the 40px circular heading icons; `ion-ios-pin` /
  `ion-ios-call` / `ion-ios-send` (contact rows); `ion-ios-send` (submit
  button); `ion-ios-heart` (copyright heart); `icon-calendar` / `icon-person`
  / `icon-chat` (news meta — UNSTYLED in the source sheet, glyphs don't
  render). **lucide-react removed brand icons** (Instagram → `undefined`).
  Recreation mapping: heading icons → lucide (User/Info for About,
  Newspaper for Latest News, FileText for Information, Camera for Instagram)
  inside 40px circular 1px-pink-bordered icons; contact rows → MapPin/Phone/
  Send lucide glyphs; submit → Send glyph; heart → ♥ text glyph `aria-hidden`;
  meta → Calendar/User/MessageCircle lucide glyphs (or plain text).
- **Images:** `images/image_1.jpg` + `image_2.jpg` (news thumbs, 80×80,
  rounded), `images/insta-1.jpg` … `insta-6.jpg` (instagram tiles, square).
  Recreation: seeded picsum placeholders
  (`picsum.photos/seed/swansong-<n>/<w>/<h>`) — verify each seed renders a
  suitable scene (news photos + food/square tiles) before pinning.

## Design tokens (from the reference — `.footer-09` + shared FTCO helpers)

| Token             | Value                                                                                                                                                                                                                                                                                                                                                                                                         | Source                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Footer background | **DARK PURPLE GRADIENT** — `linear-gradient(45deg, #2a1a5e 0%, #5126a7 100%)` (`.footer-09`; vendor-prefixed copies for moz/webkit/o/ms + a `#2a1a5e` solid fallback). Footer keeps the base `footer { padding: 7em 0 }` (NOT overridden — contrast with footer-08's `padding: 0`)                                                                                                                            | `.footer-09`, base `footer`                                 |
| Brand accent      | **Pink `#fe59d7`** — `.footer-09 a { color: #fe59d7 }` (ALL footer links: contact phone/email links, news title + meta links, Information links, copyright "Colorlib.com"/Component Dock link) AND `.footer-09 .footer-heading .icon { color: #fe59d7; border: 1px solid #fe59d7 }` (the four circular heading icons). Hover: `a:hover { color: rgba(255,255,255,0.9) }`                                      | `.footer-09 a`, `.footer-09 .footer-heading .icon`          |
| Accent (light)    | **Light pink `#fe8ce3`** — subscribe input `border: 2px solid #fe8ce3 !important` AND submit button `background: #fe8ce3 !important` (the ONLY filled element on the page)                                                                                                                                                                                                                                    | `.footer-09 .subscribe-form .form-group input`/`.submit`    |
| Headings          | `.footer-09 .footer-heading`: **`color: #fff; font-size: 22px; margin-bottom: 30px`**, weight 400 (FTCO headings rule) — NOT uppercase, NO underline; each has a leading 40×40 circular icon (`border-radius: 50%`, 1px `#fe59d7` border, `#fe59d7` glyph, `margin-right: 10px`, `display: block`)                                                                                                            | `.footer-09 .footer-heading` (+ `.icon`)                    |
| Body text         | White-ish on dark: `#fff` headings; `rgba(255,255,255,0.5)` — `.footer-09 .block-23 ul li` (contact rows) + `.footer-09 .block-21 .heading a` (news titles) + `.footer-09 ul.list-unstyled li a` (Information links); `rgba(255,255,255,0.3)` — `.footer-09 p` (copyright lines) + `.footer-09 .block-21 .meta div a` (news meta) + input text/placeholder                                                    | `.footer-09` sub-rules                                      |
| Contact rows      | `.block-23`: `ul { padding: 0 }`; `li, li > a { display: table; line-height: 1.5; margin-bottom: 15px }`; `.icon, .text { display: table-cell; vertical-align: top }`; `.icon { width: 40px; font-size: 18px; padding-top: 2px }` (glyph color inherits the link/li `rgba(255,255,255,0.5)`)                                                                                                                  | `.block-23` + `.footer-09 .block-23 ul li`                  |
| Subscribe input   | `input.form-control.rounded-left`: **`background: rgba(0,0,0,0.05) !important; border: 2px solid #fe8ce3 !important; outline: none !important; color: rgba(255,255,255,0.3) !important; font-size: 16px; border-radius: 0`** (overrides bootstrap's `.rounded-left` 0.25rem); placeholder `rgba(255,255,255,0.3)`; `:focus` → `outline: none; box-shadow: none` (recreation SHOULD add a visible focus style) | `.footer-09 .subscribe-form .form-group input` (+ `:focus`) |
| Submit button     | `button.form-control.submit.rounded-right`: **`width: 52px; height: 52px; font-size: 16px; background: #fe8ce3 !important; color: #fff !important; border: none; border-radius: 0`** — square pink button with a white send arrow (`i.ion-ios-send`); `span.sr-only` "Submit" (recreation: `aria-label` on the button)                                                                                        | `.footer-09 .subscribe-form .form-group .submit`            |
| News posts        | `.block-21`: `a.img` **80×80** `display: block` (bg-image cover, `mr-4` 1.5rem gap, `rounded` 0.25rem); `.text { width: calc(100% - 100px) }`; `.heading { font-size: 16px; font-weight: 400; line-height: 1.4 }` (link `rgba(255,255,255,0.5)`); `.meta > div { display: inline-block; font-size: 12px; margin-right: 5px }` (links `rgba(255,255,255,0.3)`); `mb-4` (1.5rem) between the two posts          | `.block-21` + `.footer-09 .block-21 …`                      |
| Instagram grid    | `.block-24`: `div.row.no-gutters` → SIX `div.col-4.col-md-4.p-1` (1.5rem→0.25rem cell padding... `p-1` = 0.25rem) → `a.img.rounded` **`width: 100%; height: 100px; display: block`** (bg-image cover, `rounded` 0.25rem) — 3 columns × 2 rows                                                                                                                                                                 | `.block-24 a.img` + bootstrap grid classes                  |
| Copyright bar     | `div.row.mt-5.pt-4.border-top` — `border-color: rgba(255,255,255,0.1) !important`; two `p.copyright` lines in `rgba(255,255,255,0.3)`: left "Copyright © [year] All rights reserved.", right "This template is made with ♥ by [Component Dock]" (heart `i.ion-ios-heart` `aria-hidden`; the brand link `#fe59d7`; `text-md-right` on md+)                                                                     | `.footer-09 .border-top`, `.footer-09 p`                    |
| Filler area       | `.ftco-section`: **`padding: 12em 0`**, NO background (white), centered `h2` **"Footer #09"** (`margin-bottom: 0`)                                                                                                                                                                                                                                                                                            | `.ftco-section`, `.ftco-section h2`                         |
| Font family       | **Poppins** — `body { font-family: "Poppins", Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight: normal; }`; FTCO headings rule: `h1..h5, .h1..h5 { line-height: 1.5; font-weight: 400; font-family: "Poppins", Arial, sans-serif; }` (cf-fonts loads weights 300–900; recreation needs 400 for body + headings, maybe 600 for emphasis)                                                      | `css/style.css` body + FTCO headings rules                  |
| Icons             | ionicons (heading circles, contact rows, submit arrow, heart) + unstyled `icon-calendar/person/chat` classes in the news meta → lucide-react equivalents (see Recreation decisions); Instagram/brand glyphs NOT in lucide → inline SVG or lucide Camera                                                                                                                                                       | `css/ionicons.min.css` classes in DOM                       |
| Images            | 2 news thumbs (80×80) + 6 instagram tiles (square, ~100px) — background-image links in the source; recreation uses seeded picsum placeholders                                                                                                                                                                                                                                                                 | DOM inline `style="background-image: url(images/…)"`        |
| Mobile behavior   | Footer columns: 2×2 on md (`col-md-6`), 4-across on lg+ (`col-lg-3`); stacked full-width below md with `mb-4` gaps. Copyright bar: `col-md-6` split — side-by-side on md+ (right `text-md-right`), stacked below md. No order flips, no horizontal scroll                                                                                                                                                     | Bootstrap grid classes                                      |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Swansong app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler section and the footer inside the
  main landmark
- **AND** the document title SHALL be "Swansong — Footer"

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
  **"Footer #09"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Dark gradient footer band

The system SHALL render the dark purple-gradient footer band with the
source's background and Poppins typeface.

#### Scenario: Footer band renders dark

- **GIVEN** the filler section is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with
  `background: linear-gradient(45deg, #2a1a5e 0%, #5126a7 100%)` and the
  source's `padding: 7em 0` vertical rhythm
- **AND** the font family SHALL be Poppins (body 15px, line-height 1.8;
  headings weight 400, line-height 1.5)
- **AND** the page SHALL have a main landmark and a semantic `<footer>`
  landmark

### Requirement: About column with contact info and subscribe form

The system SHALL render the About column — pink circular icon + heading,
the THREE contact rows, and the newsletter subscribe form.

#### Scenario: About column renders

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the first footer column
- **THEN** a column SHALL render (2-across on md, 4-across on lg+) containing:
  - the 22px white heading **"About"** with a leading 40×40 circular icon
    (1px `#fe59d7` border, pink glyph)
  - THREE contact rows (table-cell layout, `rgba(255,255,255,0.5)`, 15px
    spacing): a **MapPin** row with the address **"203 Fake St. Mountain
    View, San Francisco, California, USA"**, a **Phone** link row with
    **"+2 392 3929 210"**, and a **Send** link row with
    **"info@yourdomain.com"** (all pink on hover per the source)
- **AND** below the contact rows the column SHALL show a subscribe form:
  an email input (dark translucent background, 2px `#fe8ce3` border, square
  corners) with placeholder **"Enter email address"** and a square pink
  submit button (`#fe8ce3`, white, 52×52) with a send glyph and an
  accessible name ("Submit")

#### Scenario: Subscribe form submits

- **GIVEN** the subscribe form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL NOT navigate away (the source uses `action="#"`
  with no handler — a static form suffices; add `aria-label`/labeled input
  for the email field)

### Requirement: Latest News column

The system SHALL render the Latest News column with TWO post rows — 80×80
thumbnail, heading link, and 12px meta line.

#### Scenario: News posts render

- **GIVEN** the About column is rendered
- **WHEN** the user inspects the second footer column
- **THEN** a column SHALL render with the 22px white heading **"Latest
  News"** (list-box circular icon) and TWO post rows, each with:
  - an 80×80 rounded photo (seeded picsum placeholder)
  - a 16px heading link **"Even the all-powerful Pointing has no control
    about"** in `rgba(255,255,255,0.5)` (the source repeats the SAME title
    twice — the recreation SHOULD use two distinct news headlines of the
    same kind)
  - a 12px meta line in `rgba(255,255,255,0.3)` with a date, an author, and
    a comment count (source: **"Oct. 16, 2019"**, **"Admin"**, **"19"**; the
    meta glyph classes are unstyled in the source — recreation may add
    lucide Calendar/User/MessageCircle icons)

### Requirement: Information column

The system SHALL render the Information column with FIVE plain links.

#### Scenario: Information links render

- **GIVEN** the Latest News column is rendered
- **WHEN** the user inspects the third footer column
- **THEN** a column SHALL render with the 22px white heading **"Information"**
  (document circular icon) and an unordered list of FIVE block-level links
  (`py-1`, `rgba(255,255,255,0.5)`, NO bullet glyphs): **"About"**,
  **"Products"**, **"Blog"**, **"Contact"**, **"Help & Support"**

### Requirement: Instagram grid

The system SHALL render the Instagram column with a 3×2 grid of six square
photo links.

#### Scenario: Instagram tiles render

- **GIVEN** the Information column is rendered
- **WHEN** the user inspects the fourth footer column
- **THEN** a column SHALL render with the 22px white heading **"Instagram"**
  (camera circular icon) and a 3-column × 2-row grid of six square photo
  links (`rounded`, ~100px tall, seeded picsum placeholders)

### Requirement: Copyright bar

The system SHALL render the top-bordered copyright bar with the two credit
lines and the mandatory Component Dock link.

#### Scenario: Copyright bar renders

- **GIVEN** the four footer columns are rendered
- **WHEN** the user inspects the bottom of the footer
- **THEN** a row SHALL render with `border-top` in `rgba(255,255,255,0.1)`
  and two lines in `rgba(255,255,255,0.3)`:
  - left: **"Copyright © <current year> All rights reserved."**
  - right (text-md-right on md+): **"This template is made with ♥ by
    Component Dock"** — the source shows "…by Colorlib.com" with the brand
    link in pink `#fe59d7`
- **AND** the heart SHALL be `aria-hidden` (decorative)
- **AND** the "Component Dock" text SHALL link to
  `https://www.componentdock.com/` per convention — ColorLib must NOT appear
  anywhere in `apps/swansong`

### Requirement: Responsive layout

The system SHALL reproduce the source's grid: 2×2 columns on md, 4-across on
lg+, stacked below md, no horizontal overflow.

#### Scenario: Grid adapts across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the footer SHALL show the four columns 2×2 (`col-md-6`)
- **AND** at the lg breakpoint (≥992px) the columns SHALL be 4-across
  (`col-lg-3`)
- **AND** below md the columns SHALL stack full-width with `mb-4` gaps
- **AND** the copyright bar SHALL show the left/right lines side-by-side on
  md+ (right aligned right) and stacked below md
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
- **AND** the submit button SHALL have an accessible name (the source uses a
  `sr-only` span — the recreation may use `aria-label` or visible text)
- **AND** the decorative heart SHALL carry `aria-hidden`
- **AND** all icon links (contact rows, news thumbs, instagram tiles) SHALL
  have accessible names (`aria-label` — the source links are icon+text or
  bare `href="#"` image links)
- **AND** the circular heading icons SHALL be decorative (`aria-hidden`)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring (the source removes the focus outline from the input —
  the recreation SHALL restore a visible focus style)

## Verification checklist

- [ ] `openspec/specs/template-swansong/spec.md` present with the REAL
      section list (filler → dark gradient footer band → About/Latest
      News/Information/Instagram columns → copyright bar).
- [ ] Design tokens above (purple gradient `#2a1a5e`→`#5126a7`, pink
      `#fe59d7`, light pink `#fe8ce3`, white/rgba-white text scale, Poppins,
      square pink subscribe button, circular 1px-pink heading icons, 7em
      footer padding, 12em filler) captured in the spec.
- [ ] `docs/templates/swansong/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh
    swansong`, PR lists source (ColorLib Bootstrap Footer 19), the
      `/theme/bft/` preview URL, tokens, and what differs.
