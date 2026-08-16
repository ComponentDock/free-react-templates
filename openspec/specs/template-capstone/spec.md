# Template: Capstone (Footer)

## Purpose

Capstone is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 13"
design (source: https://colorlib.com/wp/template/bootstrap-footer-13/), built
under a DIFFERENT name (**Capstone** — "the final, finishing stone of a
structure", the thirteenth entry in the footer series' ending-themed naming:
Colophon → Envoi → Epilogue → Coda → Outro → Finale → Postlude → Stretto →
Fermata → Finis → Tailpiece → Terminus → **Capstone**; a single lowercase
word, kebab-case, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-16), per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The
page is a footer-only component demo: a white filler section (source labels
it "Footer #03", `padding: 12em 0`) → the footer — a PALE ROSE band
(`background: #f8f1f1`, footer global `padding: 7em 0`), Poppins typeface
(body 15px / line-height 1.8; footer 14px). The grid splits 6/6: on the LEFT
a row of THREE link columns **"Men"** (Jeans, Jumpers, Leather, Shorts,
Boots, Watches), **"Women"** (Dresses, Jumpsuits, Shirts, T-shirts,
Sweatshirts, Jackets, Coats), **"Kids"** (Shirts, T-shirts, Polos, Sweaters,
Sweatshirts, Jackets, Watches) — each heading `.footer-heading` (14px,
uppercase, 2px letter-spacing, weight 500, `margin-bottom: 30px`) over a
stacked `ul` of low-contrast links (`rgba(0,0,0,.3)`). On the RIGHT: a
**"Follow Us"** heading + FOUR circular social buttons (Twitter, Facebook,
Instagram, Linkedin — 40×40 circles, `rgba(0,0,0,.05)` background, rose
`#f17e7e` glyphs, hover flips the glyph to white) and a **"Subscribe Us"**
heading with a square-edge newsletter form: transparent gray input
(`rgba(0,0,0,.05)` background, no border, placeholder "Enter email address")

- a rose **"Subscribe"** button (`#f17e7e`, 130×52, white 16px, radius 0).
  The bottom bar (`border-top`) carries the copyright line ("…made with ♥ by
  Colorlib.com" → Component Dock per convention) on the left and legal links
  **Terms & Conditions** / **Privacy** on the right. The accent color is a
  single coral-rose **`#f17e7e`** (all links, social glyphs, subscribe button).
  This is a LIGHT variant — pale rose band — the first light footer prep in the
  recent series (contrast with the dark Stretto/footer-08, Tailpiece/footer-11
  and Terminus/footer-12 preps). No navbar, no hero, no images, no behavior
  beyond the (static) newsletter form.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 13" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a filler
  strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-13/. TEMPLATES.md has ONE
  copy (line 789, `- [ ]` unchecked). This prep: Bootstrap Footer 13 →
  **Capstone**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (series-wide — see the colophon/terminus preps):**
  `https://preview.colorlib.com/theme/bootstrap-footer-13/` returns **HTTP
  404** ("Not Found" — a 9-byte body). The footer series is served under the
  **`/theme/bft/`** prefix (NOT `/theme/bootstrap/`): the live preview is
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-13/`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-13/` (HTTP 200,
  11,623 bytes HTML, `<title>Footer 03</title>` — the title is the variant
  label, not the series number). Stylesheets: `css/ionicons.min.css` (icon
  font — glyphs `ion-logo-twitter`, `ion-logo-facebook`,
  `ion-logo-instagram`, `ion-logo-linkedin`, `ion-ios-heart`) +
  `css/style.css` (222,289 bytes — the FULL shared FTCO sheet bundling rules
  for many variants; only the `.footer-03` block and the shared helpers apply
  to this page). No Google Fonts `<link>` — cf-fonts inline `@font-face`
  blocks load **Poppins** weights 300–900; body rule: `font-family:
"Poppins", Arial, sans-serif`, `font-size: 15px`, `line-height: 1.8`.
  No JS behavior needed (jquery/popper/bootstrap.min.js load but the footer
  is static; the newsletter form has `action="#"` and no handler — none
  needed in the recreation).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-13.jpg`, 1200×972 AVIF, viewed in browser):** screenshot
  matches the live DOM (NO variance): a large white demo area with "Footer
  #03" centered; below it a pale rose/pink footer band. Headings are
  uppercase dark-gray sans-serif; the three left link columns (Men / Women /
  Kids) show light-gray links on the rose background. Right side: four small
  circular social buttons in a row (muted rose glyphs on faint gray
  circles), then a "Subscribe Us" heading and a rectangle input with a solid
  rose "Subscribe" button with white text. A thin horizontal divider precedes
  the bottom bar: copyright left, "Terms & Conditions / Privacy" right.
  Clean, minimal, modern e-commerce fashion aesthetic; the ONLY accent is the
  coral-rose `#f17e7e`.
- **Structure (DOM order, 1:1):**
  `section.ftco-section` (`padding: 12em 0`; no background — white),
  `div.container` → `div.row.justify-content-center` →
  `div.col-md-6.text-center` → `h2` "Footer #03", `margin-bottom: 0`) →
  `footer.footer-03` (`background: #f8f1f1`; footer global `padding: 7em 0`;
  `font-size: 14px`) → `div.container`:
  - **Left block** — `div.row` → THREE `div.col-md-4.mb-md-0.mb-4` link
    columns, each `h2.footer-heading` + `ul.list-unstyled` → `li` →
    `a.py-1.d-block` (color `rgba(0,0,0,.3)`; `py-1` vertical rhythm):
    1. **"Men"** — Jeans, Jumpers, Leather, Shorts, Boots, Watches (6)
    2. **"Women"** — Dresses, Jumpsuits, Shirts, T-shirts, Sweatshirts,
       Jackets, Coats (7; source spells "Sweatshirts" as "Swearshirts" —
       fix the typo, keep the kind of content)
    3. **"Kids"** — Shirts, T-shirts, Polos, Sweaters, Sweatshirts,
       Jackets, Watches (7)
  - **Right block** — `div.row.justify-content-end` →
    `div.col-md-12.col-lg-11.mb-md-0.mb-4`:
    - `h2.footer-heading` **"Follow Us"** + `ul.ftco-footer-social.p-0` →
      FOUR `li.ftco-animate` → `a` (tooltip title Twitter / Facebook /
      Instagram / Linkedin) → `span.ion-logo-*` (40×40 circular buttons,
      see tokens)
    - `h2.footer-heading.mt-5` **"Subscribe Us"** +
      `form.subscribe-form` → `div.form-group.d-flex` (no bottom margin):
      `input.form-control.rounded-left` (type text, `placeholder="Enter
email address"`, transparent gray bg, no border, 16px) +
      `input.form-control.submit.px-3.rounded-right` (type submit,
      `value="Subscribe"`, 130×52, `#f17e7e`, white 16px, radius 0)
  - **Bottom bar** — `div.row.mt-5.pt-4.border-top` (Bootstrap `.border-top`
    = `1px solid #dee2e6`): `div.col-md-6.col-lg-8` → `p.copyright`
    (`color: rgba(0,0,0,.4)`): "Copyright © <year> All rights reserved |
    This template is made with ♥ by Colorlib.com" (heart
    `ion-ios-heart`, `aria-hidden`; recreation replaces the Colorlib
    attribution with the Component Dock link per convention) +
    `div.col-md-6.col-lg-4.text-md-right` → `p.mb-0.list-unstyled` with
    TWO legal links **"Terms & Conditions"** and **"Privacy"** (`mr-md-3`
    spacing, rose `#f17e7e` via `.footer-03 a`)
- **Grid behavior (Bootstrap 4.3.1, reproduce responsively):** the main row
  splits `col-md-6` / `col-md-6` (side by side on md+; stacked full-width
  below md). Left: THREE inner `col-md-4` columns side by side on md+
  (`mb-md-0 mb-4` gaps below md). Right: inner `col-md-12 col-lg-11` pushed
  right via `justify-content-end` on the row (11/12 on lg, full 12/12 below
  lg, aligned to the right edge). Bottom: `col-md-6 col-lg-8` +
  `col-md-6 col-lg-4 text-md-right`. No order flips, no horizontal scroll.
- **Icons:** ionicons — `ion-logo-twitter`, `ion-logo-facebook`,
  `ion-logo-instagram`, `ion-logo-linkedin` (the four social buttons; lucide
  REMOVED brand icons, so render tiny inline SVG brand marks or neutral
  lucide glyphs per the skill's icon guidance — probe every import with the
  `typeof` check), `ion-ios-heart` (copyright heart → lucide `Heart` or a ♥
  text glyph, `aria-hidden`).
- **Images:** NONE — this footer variant has no photos, thumbnails or
  backgrounds. No picsum seeds needed. Solid `#f8f1f1` footer band only.

## Design tokens (from the reference — `.footer-03` + helpers)

| Token             | Value                                                                                                                                                                                                                                                                                                                                                                               | Source                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Font family       | **Poppins** — `body { font-family: "Poppins", Arial, sans-serif; font-size: 15px; line-height: 1.8; font-weight: normal; }`; footer base `font-size: 14px` (cf-fonts loads weights 300–900; recreation needs 400 + 700 at most)                                                                                                                                                     | `css/style.css` body + `.footer-03` rules                                 |
| Footer background | **`#f8f1f1`** (pale rose/pink) — `.footer-03 { background: #f8f1f1; }`; footer global `padding: 7em 0` (LIGHT variant; no decorative blob, no photo band)                                                                                                                                                                                                                           | `.footer-03` + `footer`                                                   |
| Brand accent      | **`#f17e7e`** (coral-rose) — `.footer-03 a`: ALL links (bottom legal links, copyright credit link); `.footer-03 .ftco-footer-social li a` (social glyphs); `.footer-03 .subscribe-form .form-group .submit` (button background). The ONE accent color in the design                                                                                                                 | `.footer-03 a`, `.ftco-footer-social li a`, `.submit`                     |
| Column headings   | `.footer-heading`: **`font-size: 14px`, `text-transform: uppercase`, `letter-spacing: 2px`, `font-weight: 500`, `margin-bottom: 30px`**; NO explicit color → inherits body default (Bootstrap `#212529` dark gray); NO `:after` underline in this variant                                                                                                                           | `.footer-03 .footer-heading`                                              |
| Column links      | **`color: rgba(0,0,0,.3)`** — `ul.list-unstyled li a` (all three link columns); `a.py-1.d-block` vertical rhythm; no explicit hover color in `.footer-03` (global `a:hover` only removes underlines)                                                                                                                                                                                | `.footer-03 .list-unstyled li a`                                          |
| Social circles    | `.ftco-footer-social li`: `list-style: none; margin: 0 10px 0 0; display: inline-block`; `li a`: **40×40, `display: block`, `background: rgba(0,0,0,.05)`, `border-radius: 50%`, `position: relative`**, glyph `span` absolutely centered (`font-size: 20px`), color **`#f17e7e`**, hover → **`color: #fff`** (glyph flips white on the faint circle — source quirk, keep faithful) | `.ftco-footer-social li`, `li a`, `li a span`, `li a:hover`               |
| Subscribe input   | `input.form-control.rounded-left`: **`background: rgba(0,0,0,.05)`, `border: none`, `border-radius: 0`, `font-size: 16px`, `color: rgba(0,0,0,.3)`**; placeholder same `rgba(0,0,0,.3)`; no focus box-shadow                                                                                                                                                                        | `.footer-03 .subscribe-form .form-group input` (+ placeholders, `:focus`) |
| Subscribe button  | `input.submit.px-3` (value "Subscribe"): **`width: 130px; height: 52px; font-size: 16px; background: #f17e7e; color: #fff; border: none; border-radius: 0`**; hover/focus only removes outline/text-decoration                                                                                                                                                                      | `.footer-03 .subscribe-form .form-group .submit`                          |
| Form group        | `div.form-group.d-flex` — `position: relative; margin-bottom: 0; border-radius: 0` (input + button side by side, square edges)                                                                                                                                                                                                                                                      | `.footer-03 .subscribe-form .form-group`                                  |
| Bottom bar        | `.border-top` = **`1px solid #dee2e6`** (Bootstrap default), row `mt-5 pt-4`; `p.copyright`: **`color: rgba(0,0,0,.4)`, `font-size: 14px`**; legal links **Terms & Conditions** / **Privacy** (`mr-md-3` spacing, rose `#f17e7e` via `.footer-03 a`) right-aligned on md+                                                                                                           | Bootstrap `.border-top` + `.footer-03 .copyright` + DOM                   |
| Filler area       | `.ftco-section`: **`padding: 12em 0`**, NO background (white), centered `h2` "Footer #03" (`margin-bottom: 0`)                                                                                                                                                                                                                                                                      | `.ftco-section`, `.ftco-section h2`                                       |
| Link transition   | `a { transition: .3s all ease; }`; `a:hover, a:focus { text-decoration: none !important; outline: none !important; }` (global)                                                                                                                                                                                                                                                      | `css/style.css` top rules                                                 |
| Icons             | ionicons: `ion-logo-twitter/facebook/instagram/linkedin` → lucide REMOVED brand icons — use tiny inline SVG brand marks or neutral lucide glyphs per brand (probe with `typeof`); `ion-ios-heart` → lucide `Heart` (or ♥ text, `aria-hidden`)                                                                                                                                       | `css/ionicons.min.css` classes in DOM                                     |
| Images            | **NONE** — no photos/thumbnails/backgrounds anywhere in this variant; solid `#f8f1f1` footer band only                                                                                                                                                                                                                                                                              | DOM + CSS audit                                                           |
| Mobile behavior   | Main row `col-md-6`/`col-md-6` stacked below md; left three `col-md-4` columns side by side on md+, stacked with `mb-4` gaps below; right inner `col-md-12 col-lg-11` full-width below lg; bottom `col-md-6 col-lg-8` + `col-md-6 col-lg-4 text-md-right`; no horizontal scroll                                                                                                     | Bootstrap classes                                                         |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Capstone app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler section and the footer inside the
  main landmark
- **AND** the document title SHALL be "Capstone — Footer"

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
  **"Footer #03"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Pale rose footer band

The system SHALL render the pale rose footer band with the source's
background, padding, and Poppins typeface.

#### Scenario: Footer band renders pale rose

- **GIVEN** the filler section is rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render with `background: #f8f1f1` and
  `padding: 7em 0`
- **AND** the font family SHALL be Poppins (body 15px, line-height 1.8;
  footer base 14px)
- **AND** the page SHALL have a main landmark and a semantic `<footer>`
  landmark

### Requirement: Link columns (left)

The system SHALL render the three link columns (Men / Women / Kids) with the
source's exact headings and links.

#### Scenario: Three link columns render

- **GIVEN** the footer band is rendered
- **WHEN** the user inspects the left half of the footer
- **THEN** a row of THREE columns SHALL render (each `col-md-4` inside the
  left `col-md-6`; stacked with `mb-4` gaps below md), each with a
  `.footer-heading` (14px, uppercase, 2px letter-spacing, weight 500,
  `margin-bottom: 30px`, dark gray `~#212529`) and a stacked `ul` of
  `py-1 d-block` links (`rgba(0,0,0,.3)`):
  1. **Men** — Jeans, Jumpers, Leather, Shorts, Boots, Watches
  2. **Women** — Dresses, Jumpsuits, Shirts, T-shirts, Sweatshirts, Jackets,
     Coats
  3. **Kids** — Shirts, T-shirts, Polos, Sweaters, Sweatshirts, Jackets,
     Watches
- **AND** links SHALL use `transition: .3s all ease` and no underlines

### Requirement: Follow Us social buttons (right)

The system SHALL render the "Follow Us" heading and the four circular social
buttons.

#### Scenario: Social buttons render as circles

- **GIVEN** the link columns are rendered
- **WHEN** the user inspects the right half of the footer
- **THEN** a `.footer-heading` SHALL render with the text **"Follow Us"**
- **AND** FOUR circular social buttons SHALL render in a row (40×40,
  `border-radius: 50%`, `background: rgba(0,0,0,.05)`, `margin: 0 10px 0 0`)
  with centered rose (`#f17e7e`) glyphs for **Twitter, Facebook, Instagram,
  Linkedin** (20px glyphs; lucide removed brand icons — use tiny inline SVG
  brand marks or neutral lucide glyphs; probe imports with `typeof`)
- **AND** each button SHALL be a link with an accessible name (the source
  uses a Bootstrap tooltip `title` — the recreation uses `aria-label` or a
  visible tooltip; keep the same kind of content)
- **AND** on hover the glyph SHALL flip to white (`#fff`) per the source

### Requirement: Subscribe Us newsletter form (right)

The system SHALL render the "Subscribe Us" heading and the square-edge
newsletter form with an email input and a rose subscribe button.

#### Scenario: Newsletter form renders with rose button

- **GIVEN** the social buttons are rendered
- **WHEN** the user inspects below them
- **THEN** a `.footer-heading` SHALL render with the text **"Subscribe Us"**
  (spaced `mt-5` below the social row)
- **AND** a real `<form>` SHALL render (no backend needed — the source uses
  `action="#"` with no handler) containing a flex row with:
  - an email input (square edges, `background: rgba(0,0,0,.05)`, no border,
    16px, text `rgba(0,0,0,.3)`, placeholder **"Enter email address"**)
  - a **"Subscribe"** submit button (130×52, `background: #f17e7e`, white
    16px text, square edges, border none)
- **AND** the email input SHALL have a programmatic label (the source uses a
  bare placeholder — the recreation adds a visually-hidden `<label>` or
  `aria-label`)

### Requirement: Bottom bar

The system SHALL render the bottom bar with the copyright line, the heart,
the mandatory Component Dock link, and the two legal links.

#### Scenario: Copyright and legal links render

- **GIVEN** the newsletter form is rendered
- **WHEN** the user inspects the bottom of the footer
- **THEN** a row SHALL render separated by a thin `#dee2e6` top border
  (`mt-5 pt-4`; left `col-md-6 col-lg-8`, right
  `col-md-6 col-lg-4 text-md-right` on md+; stacked below md)
- **AND** the left side SHALL render a 14px `rgba(0,0,0,.4)` line:
  **"© <current year> Capstone. All rights reserved. Made with ♥ by
  Component Dock"** (the source shows "Copyright © <year> All rights
  reserved | This template is made with ♥ by Colorlib.com")
- **AND** the heart SHALL be `aria-hidden` (decorative)
- **AND** the "Component Dock" text SHALL link to
  `https://www.componentdock.com/` (per convention, the Colorlib attribution
  is replaced — ColorLib must NOT appear anywhere in `apps/capstone`)
- **AND** the right side SHALL render two rose legal links: **Terms &
  Conditions** and **Privacy** (spacing `mr-md-3`)

### Requirement: Responsive layout

The system SHALL reproduce the source's grid: 6/6 split main row, three
`col-md-4` link columns, right inner `col-md-12 col-lg-11` pushed right,
bottom `col-md-6 col-lg-8` + `col-md-6 col-lg-4`.

#### Scenario: Grid adapts across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the lg breakpoint (≥992px)
- **THEN** the left block SHALL span 6/12 with the three link columns side by
  side (each `col-md-4`), and the right block SHALL span 6/12 with its inner
  content at 11/12 aligned to the right edge
- **AND** at the md breakpoint (≥768px) the same 6/6 split holds, the right
  inner column SHALL span 12/12, and the bottom bar SHALL show copyright
  left (8/12) + legal links right (4/12)
- **AND** below md all blocks SHALL stack full-width with ~1.5rem gaps (the
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
- **AND** the decorative heart SHALL carry `aria-hidden`
- **AND** each social button SHALL have an accessible name (the source relies
  on a tooltip `title` — the recreation uses `aria-label`)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app capstone` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Capstone — Footer"
- [ ] Filler: white section (source `padding: 12em 0`) with a centered demo
      label
- [ ] Footer band: PALE ROSE — `background: #f8f1f1`, `padding: 7em 0`;
      semantic `<footer>` + main landmark; Poppins (body 15px/1.8, footer
      14px)
- [ ] Three link columns (Men / Women / Kids) with EXACT link lists, `py-1
    d-block` rhythm, `rgba(0,0,0,.3)` links; `.footer-heading` 14px
      uppercase 2px ls weight 500 `mb-30px`, dark gray
- [ ] "Follow Us": FOUR circular social buttons (40×40, radius 50%,
      `rgba(0,0,0,.05)` bg, rose `#f17e7e` glyphs, hover white; accessible
      names) — inline SVG brand marks / neutral lucide glyphs (lucide
      removed brand icons — probe imports with `typeof`)
- [ ] "Subscribe Us" (`mt-5`): real `<form>` with labeled email input
      (square, `rgba(0,0,0,.05)` bg, 16px, placeholder "Enter email
      address") + "Subscribe" button (130×52, `#f17e7e`, white 16px, square)
- [ ] Bottom bar: `border-top: 1px solid #dee2e6`; left "© <current year>
      Capstone. All rights reserved. Made with ♥ by Component Dock" (14px
      `rgba(0,0,0,.4)`, heart `aria-hidden`, Component Dock link); right
      Terms & Conditions / Privacy (`#f17e7e`, `mr-md-3`); NO ColorLib
      reference anywhere in `apps/capstone` (provenance lives only here +
      TEMPLATES.md + PR)
- [ ] Responsive: 6/6 main split on md+; three `col-md-4` link columns side
      by side on md+, stacked with `mb-4` gaps below md; right inner
      `col-md-12 col-lg-11` aligned right; bottom `col-md-6 col-lg-8` +
      `col-md-6 col-lg-4 text-md-right`; no horizontal overflow
- [ ] Poppins via Google Fonts `<link>` in `index.html` (weights 400 + 700
      suffice; the source loads 300–900)
- [ ] Images: NONE required (no photos/thumbnails/backgrounds in this
      variant)
- [ ] Icons: lucide `Heart` (aria-hidden) or ♥ text glyph; social brand
      marks as tiny inline SVGs / neutral lucide glyphs (lucide removed
      brand icons — probe imports with `typeof`)
