# Template: Tailpiece (Footer)

## Purpose

Tailpiece is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 11"
design (source: https://colorlib.com/wp/template/bootstrap-footer-11/), built
under a DIFFERENT name (**Tailpiece** — "a decorative design printed at the
end of a chapter or book", continuing the footer series' ending-themed naming:
Colophon → Envoi → Epilogue → Coda → Outro → Finale → Postlude → Stretto →
Fermata → Finis → **Tailpiece**; a single lowercase word, kebab-case, no
collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
2026-08-16), per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript. The page is a footer-only component
demo: a light-gray (`#f8f8f8`) filler section (the source labels it
"Footer #01", `padding: 12em 0`) → the footer itself — a DARK navy band
(`background: #0d1824`, `padding: 7em 0`) with a subtle decorative blob SVG
(800×800px, opacity .05, top-left, z-index -1), Poppins typeface (body 15px /
line-height 1.8), a FOUR-COLUMN top grid (**brand column** "Colorlib" with a
lorem paragraph + three circular violet social icon buttons Twitter /
Facebook / Instagram; **"Latest News"** with two 80×80 rounded-thumbnail news
blocks each having a title link + meta row date / author / comment-count;
**"Quick Links"** with six stacked links Home, About, Services, Works, Blog,
Contact; **"Have a Questions?"** with three icon+text contact rows: pin /
address, call / phone, send / email) → then a centered copyright bar
("Copyright © <year> All rights reserved | made with ♥ by Colorlib.com" in
the source). The accent color is a soft violet `#7f72e4` used for links,
heading underlines, meta links, and the social icon-button backgrounds. This
is the DARK brand/news variant of the series (second dark treatment after
Stretto/footer-08, but with violet accents instead of gold and a blob
watermark instead of a photo band): a "made with ♥ by Colorlib" line in the
copyright. No navbar, no hero, no logo image, no forms.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 11" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a filler
  strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-11/. TEMPLATES.md has ONE
  copy (line 787, `- [ ]` unchecked). This prep: Bootstrap Footer 11 →
  **Tailpiece**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (series-wide — see the colophon prep):**
  `https://preview.colorlib.com/theme/bootstrap-footer-11/` returns **HTTP
  404** ("Not Found" — a 9-byte body). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-11/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-11/` (HTTP 200,
  11,477 bytes HTML, `<title>Footer 01</title>` — the title is the variant
  label, not the series number). Stylesheets: `css/ionicons.min.css` (icon
  font — brand glyphs `ion-logo-twitter` / `ion-logo-facebook` /
  `ion-logo-instagram` + UI glyphs `ion-ios-pin` / `ion-ios-call` /
  `ion-ios-send` / `ion-ios-heart`), `css/style.css` (222,134 bytes — a FULL
  shared FTCO sheet bundling rules for many variants; only the `.footer-01`
  block (lines ~8246–8297) and `.ftco-footer-social` / `.block-21` / `.block-23`
  helpers apply to this page). No Google Fonts `<link>` — cf-fonts inline
  `@font-face` blocks load **Poppins** weights 300–900; body rule:
  `font-family: "Poppins", Arial, sans-serif`, `font-size: 15px`,
  `line-height: 1.8`, `font-weight: normal`. No JS behavior needed
  (jquery/popper/bootstrap.min.js load but the footer is static — none needed
  in the recreation).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-11.jpg`, viewed in browser):** screenshot matches the
  live DOM (NO variance): a large white/light-gray demo area with "Footer
  #01" centered; below it a DARK navy-blue footer band with four columns:
  (1) a brand wordmark + lorem paragraph + three CIRCULAR VIOLET social icon
  buttons (Twitter, Facebook, Instagram); (2) "Latest News" — two rows of
  small rounded square thumbnails with a white title and a small meta line
  (date, Admin, comment count); (3) "Quick Links" — stacked white links;
  (4) "Have a Questions?" — three contact lines with small gray icons
  (location pin, phone, email). Bottom: a centered thin copyright bar with a
  purple heart: "Copyright ©2021 All rights reserved | This template is made
  with ♥ by Colorlib.com". Clean, dark, high-contrast; the ONLY accent is the
  soft violet `#7f72e4` (links, underlines, social buttons, heart).
- **Structure (DOM order, 1:1):**
  `section.ftco-section` (`padding: 12em 0`, `background: #f8f8f8`,
  `div.container` → `div.row.justify-content-center` → `div.col-md-6.text-center`
  → `h2` "Footer #01", `margin-bottom: 0`) →
  `footer.footer-01` (`background: #0d1824`, `position: relative`,
  `z-index: 0`, `overflow: hidden`; `:after` = decorative blob
  `url(../images/blob-shape.svg)`, 800×800px at `top: -300px; left: -100px`,
  `opacity: .05`, `z-index: -1`; footer global `padding: 7em 0`) →
  `div.container` → `div.row`:
  - **Row 1 — FOUR columns** (`col-md-6 col-lg-3 mb-4 mb-md-0` each):
    1. Brand column — `h2.footer-heading` **"Colorlib"** (→ recreation uses
       its own brand, see below) + `p` (lorem ipsum "A small river named
       Duden flows by their place..." — keep the same KIND of content) +
       `ul.ftco-footer-social.p-0` with THREE icon-only links
       (`li.ftco-animate` `display: inline-block`, `margin: 0 10px 0 0`;
       `a` 40×40px, `border-radius: 50%`, `background: #7f72e4`, `color:
#fff`, `position: relative`, icon `span` 20px centered via absolute
       translate; tooltip titles Twitter / Facebook / Instagram): **Twitter,
       Facebook, Instagram** (ion-logo-*)
    2. **"Latest News"** column — `h2.footer-heading` + TWO `div.block-21.mb-4.d-flex`
       news blocks: `a.img.mr-4.rounded` (80×80px, `background-image:
url(images/image_1.jpg)` / `image_2.jpg`, `border-radius: .25rem`;
       thumbnail) + `div.text` (`width: calc(100% - 100px)`): `h3.heading`
       (16px, weight 400, line-height 1.4) `a` "Even the all-powerful
       Pointing has no control about" (color `rgba(255,255,255,.7)` — same
       copy in BOTH blocks) + `div.meta` (`div` inline-block, 12px,
       margin-right 5px): `a` with `span.icon-calendar` "Oct. 16, 2019",
       `a` with `span.icon-person` "Admin", `a` with `span.icon-chat` "19"
       (meta links color `#7f72e4`)
    3. **"Quick Links"** column — `div.col-md-6.col-lg-3.pl-lg-5.mb-4.mb-md-0`:
       `h2.footer-heading` + `ul.list-unstyled` with SIX stacked links
       (`li > a.py-2.d-block`, color `rgba(255,255,255,.7)`): Home, About,
       Services, Works, Blog, Contact
    4. **"Have a Questions?"** column — `h2.footer-heading` +
       `div.block-23.mb-3` → `ul` with THREE rows (`li` display table,
       line-height 1.5, margin-bottom 15px; `span.icon` 40px wide, 18px,
       padding-top 2px, color `rgba(255,255,255,.4)`; `span.text`
       `rgba(255,255,255,.6)`): `ion-ios-pin` + "203 Fake St. Mountain View,
       San Francisco, California, USA"; `ion-ios-call` + "+2 392 3929 210";
       `ion-ios-send` + "info@yourdomain.com"
  - **Row 2** (`div.row.mt-5` → `div.col-md-12.text-center`) —
    `p.copyright` (color `#999999`): "Copyright © <year> All rights
    reserved | This template is made with ♥ by Colorlib.com" (heart =
    `ion-ios-heart`, violet) — the recreation replaces the Colorlib
    attribution with the Component Dock link per convention.
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** Row 1 uses
  `col-md-6 col-lg-3` — TWO columns side by side on md (≥768px, 6/12 each)
  and FOUR across on lg (≥992px, 3/12 each); below md every column stacks
  full-width with `mb-4` gaps (`mb-md-0` removes them on md+). The Quick
  Links column carries `pl-lg-5` (extra left padding on lg+). Row 2 is a
  single centered column. No order flips, no horizontal scroll.
- **Icons:** ionicons — brand glyphs `ion-logo-twitter`, `ion-logo-facebook`,
  `ion-logo-instagram` and UI glyphs `ion-ios-pin` (MapPin), `ion-ios-call`
  (Phone), `ion-ios-send` (Send), `ion-ios-heart` (Heart),
  `icon-calendar`/`icon-person`/`icon-chat` for the news meta. **lucide-react
  REMOVED brand icons** (Twitter/Facebook/Instagram are NOT reliable exports —
  probe every import with the `typeof` check; per the skill's brand-icon
  guidance render the brand glyphs as inline SVGs (simple-icons paths) with
  `aria-label`s). The UI glyphs map to existing lucide-react exports
  (MapPin, Phone, Send, Heart, Calendar, User, MessageSquare — verify with
  the `typeof` probe as well).

## Design tokens (from the reference — `.footer-01` + helpers)

| Token             | Value                                                                                                                                                                                                                                                                                                                 | Source                                                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Font family       | **Poppins** — `body { font-family: "Poppins", Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight: normal; }`; headings `h1–h5` inherit Poppins with `line-height: 1.5; font-weight: 400`. cf-fonts loads weights 300–900 (recreation needs 400 + 700 at most)                                          | `css/style.css` `body` + heading rules                                                                                          |
| Footer background | **`#0d1824`** (dark navy) — `.footer-01 { background: #0d1824; position: relative; z-index: 0; overflow: hidden; }`; footer global `padding: 7em 0` (DARK variant — second in the series after Stretto/footer-08, but NO photo band)                                                                                  | `.footer-01` + `footer`                                                                                                         |
| Decorative blob   | `.footer-01:after` — `url(../images/blob-shape.svg)`, 800×800px, `top: -300px; left: -100px`, `opacity: .05`, `z-index: -1` (subtle watermark behind the top-left). NEVER copy the SVG asset — approximate with an inline SVG blob / radial-gradient at the same position + opacity                                   | `.footer-01:after`                                                                                                              |
| Brand accent      | **`#7f72e4`** (soft violet) — the ONLY accent: link color (`.footer-01 a`), heading underline (`.footer-heading:after`), news meta links (`.block-21 .meta > div a`), social icon-button background (`.ftco-footer-social li a`) and the copyright heart                                                              | `.footer-01 a`, `.footer-01 .footer-heading:after`, `.footer-01 .block-21 .meta > div a`, `.footer-01 .ftco-footer-social li a` |
| Column headings   | `.footer-heading`: **`font-size: 18px`, `margin-bottom: 30px`, `color: #fff`**, `position: relative`; `:after` underline — `width: 40px; height: 2px; background: #7f72e4; position: absolute; bottom: -4px; left: 0`                                                                                                 | `.footer-01 .footer-heading` (+ `:after`)                                                                                       |
| Body text         | `p`: **`color: rgba(255,255,255,.6)`** (blurb + contact text); body copy 15px/1.8 Poppins                                                                                                                                                                                                                             | `.footer-01 p`, `.footer-01 .block-23 ul li`                                                                                    |
| Nav/news links    | **`color: rgba(255,255,255,.7)`** — Quick Links (`ul.list-unstyled li a.py-2.d-block`) and news block titles (`.block-21 .text .heading a`); no underline (`a:hover { text-decoration: none !important; }`)                                                                                                           | `.footer-01 ul.list-unstyled li a`, `.footer-01 .block-21 .text .heading a`                                                     |
| Social buttons    | `li` `display: inline-block`, `margin: 0 10px 0 0`; `a` **40×40px, `border-radius: 50%`, `background: #7f72e4`, `color: #fff`**, `position: relative`, icon `span` `font-size: 20px` absolutely centered; hover `color: #fff`                                                                                         | `.ftco-footer-social li a` + `.footer-01 .ftco-footer-social li a`                                                              |
| News thumbnails   | `a.img.mr-4.rounded` — **80×80px**, `background-size: cover`, `border-radius: .25rem`; text block `width: calc(100% - 100px)`; title `h3.heading` 16px / weight 400 / line-height 1.4; meta `div` inline-block 12px, `margin-right: 5px`, links `#7f72e4`                                                             | `.block-21 .img`, `.block-21 .text`, `.block-21 .meta` (+ footer overrides)                                                     |
| Contact rows      | `.block-23`: `li` `display: table`, `line-height: 1.5`, `margin-bottom: 15px`; `span.icon` **40px wide, 18px, padding-top 2px, `color: rgba(255,255,255,.4)`**; `span.text` `rgba(255,255,255,.6)`                                                                                                                    | `.block-23 ul li`, `.footer-01 .block-23 ul li`                                                                                 |
| Copyright         | `p.copyright`: **`color: #999999`** (source has `rgba(255,255,255,.3)` then overrides to `#999999`), centered in a `col-md-12.text-center` row with `mt-5`; heart `ion-ios-heart` tinted violet; source text → recreation **"© <current year> Tailpiece. All rights reserved. Made with ♥ by <a>Component Dock</a>"** | `.footer-01 .copyright` + DOM                                                                                                   |
| Filler area       | `.ftco-section`: **`padding: 12em 0`, `background: #f8f8f8`**, centered `h2` "Footer #01" (`margin-bottom: 0`, 2rem, Poppins)                                                                                                                                                                                         | `.ftco-section` + `.ftco-section h2`                                                                                            |
| Link transition   | `a { transition: .3s all ease; }`; `a:hover, a:focus { text-decoration: none !important; outline: none !important; }` (global)                                                                                                                                                                                        | `css/style.css` top rules                                                                                                       |
| Icons             | ionicons: brand `ion-logo-twitter/facebook/instagram` → inline SVG (simple-icons paths) + `aria-label` (lucide removed brand icons); UI `ion-ios-pin/call/send/heart`, `icon-calendar/person/chat` → lucide MapPin / Phone / Send / Heart / Calendar / User / MessageSquare (probe with `typeof`)                     | `css/ionicons.min.css` classes in DOM                                                                                           |
| Images            | TWO news thumbnails only (`images/image_1.jpg`, `images/image_2.jpg`, 80×80 rendered) — replace with `https://picsum.photos/seed/tailpiece-1/80/80` and `.../tailpiece-2/80/80` (deterministic placeholders)                                                                                                          | DOM `a.img` background images                                                                                                   |
| Mobile behavior   | Row 1: `col-md-6 col-lg-3` — 2-across on md, 4-across on lg, stacked full-width with `mb-4` gaps below md; Quick Links `pl-lg-5` on lg+; Row 2 always centered full-width; no horizontal scroll                                                                                                                       | Bootstrap classes                                                                                                               |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Tailpiece app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler section and the footer inside the
  main landmark
- **AND** the document title SHALL be "Tailpiece — Footer"

### Requirement: Filler demo area

The system SHALL render the light-gray filler strip above the footer,
matching the source's demo-content role.

#### Scenario: Filler renders with a centered label

- **GIVEN** the page is rendered
- **WHEN** the top of the page loads
- **THEN** a `#f8f8f8` light-gray section SHALL be visible above the footer
  with the source's `padding: 12em 0` rhythm (the recreation may use a
  similar min-height so the footer still peeks into the first viewport)
- **AND** a centered level-2 heading SHALL label the demo (the source shows
  **"Footer #01"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Dark footer band

The system SHALL render the dark navy footer band with the source's
background, padding, Poppins typeface and the subtle blob watermark.

#### Scenario: Footer band renders dark with blob

- **GIVEN** the filler section is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `background: #0d1824`,
  `padding: 7em 0`, `position: relative` and `overflow: hidden`
- **AND** a subtle decorative blob SHALL sit behind the top-left of the
  footer (the source: 800×800px SVG at `top: -300px; left: -100px`,
  `opacity: .05`, `z-index: -1`) — approximate with an inline SVG blob or
  radial gradient, NEVER a copied asset
- **AND** the font family SHALL be Poppins (body 15px, line-height 1.8;
  headings line-height 1.5, weight 400)
- **AND** the page SHALL have a main landmark and a semantic `<footer>`
  landmark

### Requirement: Brand column

The system SHALL render the brand column: brand wordmark, lorem paragraph,
and three circular violet social icon buttons with accessible names.

#### Scenario: Brand column renders with social buttons

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the first column
- **THEN** a brand wordmark SHALL render as a `.footer-heading` (18px, white,
  `margin-bottom: 30px`, violet 40×2px underline at bottom -4px)
- **AND** a short paragraph SHALL render below it (the source uses lorem
  ipsum "A small river named Duden..." — keep the same kind of content;
  `color: rgba(255,255,255,.6)`)
- **AND** three icon-only social links SHALL render as 40×40px circles
  (`border-radius: 50%`, `background: #7f72e4`, white 20px glyph, inline
  spacing `margin: 0 10px 0 0`): **Twitter, Facebook, Instagram**
- **AND** each social link SHALL have an accessible name (Twitter, Facebook,
  Instagram) — the source uses bare spans with `title` tooltips; the
  recreation adds `aria-label`s
- **NOTE (lucide-react limitation):** lucide-react REMOVED brand icons —
  render Twitter/Facebook/Instagram as inline SVGs (simple-icons paths),
  probing every import with the `typeof` check

### Requirement: Latest News column

The system SHALL render the "Latest News" column with two thumbnail news
blocks, each with a title link and a meta row (date, author, comment count).

#### Scenario: News blocks render with thumbnails and meta

- **GIVEN** the brand column is rendered
- **WHEN** the user inspects the second column
- **THEN** a **"Latest News"** `.footer-heading` SHALL render (same heading
  style as the brand column)
- **AND** TWO news blocks SHALL render, each as a horizontal row: an 80×80px
  rounded thumbnail (placeholder image `https://picsum.photos/seed/tailpiece-<n>/80/80`)
  followed by a text block (width `calc(100% - 100px)`)
- **AND** each block SHALL contain a title link (16px, weight 400, line-height
  1.4, color `rgba(255,255,255,.7)`) — the source repeats "Even the
  all-powerful Pointing has no control about" in both blocks; keep the same
  kind of content
- **AND** a meta row SHALL render below the title (12px, inline items with
  5px spacing, links `#7f72e4`): date ("Oct. 16, 2019" — the source repeats
  it), author ("Admin"), comment count ("19")

### Requirement: Quick Links column

The system SHALL render the "Quick Links" column with the source's exact six
stacked links.

#### Scenario: Quick Links render stacked

- **GIVEN** the news column is rendered
- **WHEN** the user inspects the third column
- **THEN** a **"Quick Links"** `.footer-heading` SHALL render (same heading
  style; the source column carries `pl-lg-5` extra left padding on lg+)
- **AND** six stacked links SHALL render in order with `py-2` block rhythm
  and color `rgba(255,255,255,.7)`: Home, About, Services, Works, Blog,
  Contact
- **AND** links SHALL use `transition: .3s all ease` and no underlines

### Requirement: Contact column

The system SHALL render the "Have a Questions?" column with three icon+text
contact rows.

#### Scenario: Contact rows render with icons

- **GIVEN** the Quick Links column is rendered
- **WHEN** the user inspects the fourth column
- **THEN** a **"Have a Questions?"** `.footer-heading` SHALL render (same
  heading style)
- **AND** three contact rows SHALL render (15px row spacing, line-height 1.5),
  each an icon cell (40px wide, 18px, `padding-top: 2px`, color
  `rgba(255,255,255,.4)`) + text cell (`rgba(255,255,255,.6)`):
  1. pin icon + "203 Fake St. Mountain View, San Francisco, California, USA"
  2. phone icon + "+2 392 3929 210"
  3. send icon + "info@yourdomain.com"

### Requirement: Copyright bar

The system SHALL render the centered copyright bar with the year, the brand,
the heart, and the mandatory Component Dock link.

#### Scenario: Copyright renders with Component Dock link

- **GIVEN** the four-column top grid is rendered
- **WHEN** the user inspects below it
- **THEN** a centered bar (`mt-5` top margin) SHALL render a `#999999` small
  text line reading **"© <current year> Tailpiece. All rights reserved. Made
  with ♥ by Component Dock"** (the source shows "Copyright © <year> All
  rights reserved | This template is made with ♥ by Colorlib.com")
- **AND** the heart SHALL be tinted with the brand violet (`#7f72e4`)
- **AND** the "Component Dock" text SHALL link to
  `https://www.componentdock.com/` (per convention, the Colorlib attribution
  is replaced — ColorLib must NOT appear anywhere in `apps/tailpiece`)
- **AND** the footer SHALL contain NO other attribution links

### Requirement: Responsive layout

The system SHALL reproduce the source's grid: `col-md-6 col-lg-3` columns —
2-across on md, 4-across on lg, stacked below md.

#### Scenario: Grid adapts across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the lg breakpoint (≥992px)
- **THEN** the top grid SHALL render four columns side by side (3/12 each),
  with the Quick Links column carrying the extra `pl-lg-5` padding
- **AND** at the md breakpoint (≥768px) the grid SHALL render two columns
  side by side (6/12 each)
- **AND** below md all columns SHALL stack full-width with ~1.5rem gaps (the
  source uses `mb-4` on each column, removed via `mb-md-0` on md+)
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible social controls, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** the three icon-only social links SHALL have accessible names
  (Twitter, Facebook, Instagram)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring
- **AND** icon-only elements SHALL carry `aria-hidden` where decorative
  (e.g. contact icons next to visible text)

## Verification checklist

- [ ] `npm run verify:app tailpiece` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Tailpiece — Footer"
- [ ] Filler: `#f8f8f8` section (source `padding: 12em 0`) with a centered
      demo label
- [ ] Footer band: DARK — `background: #0d1824`, `padding: 7em 0`,
      `position: relative`, `overflow: hidden`; semantic `<footer>` + main
      landmark; Poppins (body 15px/1.8; headings 1.5/400)
- [ ] Blob watermark: subtle decorative blob behind the top-left (≈800×800px,
      opacity .05, z-index -1) — inline SVG / gradient approximation, NOT a
      copied asset
- [ ] Brand column: `.footer-heading` wordmark (18px white, 30px bottom
      margin, violet 40×2 underline) + lorem paragraph
      (`rgba(255,255,255,.6)`) + THREE circular violet social buttons
      (40×40, radius 50%, bg `#7f72e4`, white 20px glyph): Twitter, Facebook,
      Instagram — inline SVG brand glyphs + `aria-label`s (lucide removed
      brand icons)
- [ ] Latest News column: "Latest News" heading + TWO news blocks (80×80
      rounded picsum thumbnails, title link `rgba(255,255,255,.7)` 16px,
      meta row 12px with date / Admin / "19" in `#7f72e4`)
- [ ] Quick Links column: "Quick Links" heading + six stacked links (Home,
      About, Services, Works, Blog, Contact), `rgba(255,255,255,.7)`,
      `py-2` rhythm, `pl-lg-5` on lg+
- [ ] Contact column: "Have a Questions?" heading + three rows (pin/call/send
      icons `rgba(255,255,255,.4)` 40px cell + text `rgba(255,255,255,.6)`):
      Fake St address, +2 392 3929 210, info@yourdomain.com
- [ ] Copyright bar: centered `#999999` line "© <current year> Tailpiece. All
      rights reserved. Made with ♥ by Component Dock" — heart violet, link to
      `https://www.componentdock.com/`; NO ColorLib reference anywhere in
      `apps/tailpiece` (provenance lives only here + TEMPLATES.md + PR)
- [ ] Responsive: `col-md-6 col-lg-3` — 4-across lg, 2-across md, stacked
      with `mb-4` gaps below md; no horizontal overflow
- [ ] Poppins via Google Fonts `<link>` in `index.html` (weights 400 + 700
      suffice; the source loads 300–900)
- [ ] Images: ONLY the two 80×80 picsum news thumbnails
      (`seed/tailpiece-1`, `seed/tailpiece-2`); no other assets
