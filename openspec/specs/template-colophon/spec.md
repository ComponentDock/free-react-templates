# Template: Colophon (Footer)

## Purpose

Colophon is a footer-component demo in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Bootstrap Footer 01"
design (source: https://colorlib.com/wp/template/bootstrap-footer-01/), built
under a DIFFERENT name (**Colophon** — a publisher's emblem/inscription block
at the end of a book, a fitting name for a footer template; a single lowercase
word, kebab-case, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-16), per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The
page is a footer-only component demo: a light-gray `70vh` filler area
(labeled "Footer #1" in the source) → the footer itself — a dark `#141d2a`
band whose top edge is overlapped by a periwinkle CTA box ("Ready for a next
project?" + "Contact us" square dark button) with a hard offset shadow,
followed by a five-column row (brand + copyright, Customers, Company, Further
Information, Follow us with round social icons).

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 01" — one of the free "Bootstrap
  Footer" series (footer-only component demos; the page body is a 70vh
  filler strip so the footer is the deliverable). Source page:
  https://colorlib.com/wp/template/bootstrap-footer-01/. TEMPLATES.md has ONE
  copy (line 777, `- [ ]` unchecked). This prep: Bootstrap Footer 01 →
  **Colophon**. When the implementer finishes, that row gets bookkept `[x]`.
- **PREVIEW PATH QUIRK (documented for future preps):** the standard
  `https://preview.colorlib.com/theme/bootstrap-footer-01/` returns **HTTP
  404** ("Not Found"), like the rest of the "Bootstrap *" series. The
  ColorLib template page's "Live Preview" href reveals the real path:
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-01/` — this
  footer series is served under the **`/theme/bft/`** prefix (NOT
  `/theme/bootstrap/` — that prefix serves the Calendar/Carousel series).
  When a preview 404s, grep the template page for its Live Preview href
  before falling back to the screenshot.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-01/` (HTTP 200,
  17,953 bytes HTML, `<title>Footer 01</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font, 79,820 bytes), `css/bootstrap.min.css`
  (**Bootstrap v4.5.3**, 160,392 bytes), `css/style.css` (the template CSS —
  only **2,270 bytes**, all custom rules below are from it). No JS libs, no
  Google Fonts `<link>` (Roboto comes from a system stack).
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `bootstrap-footer-01.jpg`, viewed in browser):** clean, modern, corporate.
  Screenshot matches the live DOM exactly (NO variance): a large light-gray
  (`#f8f9fa`) demo area with "Footer #1" centered in dark sans-serif; below
  it the periwinkle CTA strip ("Ready for a next project?" white +
  "Let's get started!" dark, "Contact us" square dark button); then the deep
  dark-navy `#141d2a` footer with five columns — brand "COLORLIB" in white
  uppercase + "© 2019", three link columns (Customers / Company / Further
  Information) with muted gray links, and a "Follow us" column with five
  round periwinkle circles holding white social glyphs.
- **Structure (DOM order, 1:1):** `div.content.d-flex.align-items-center.bg-light`
  (height 70vh, `h2.w-100.text-center` "Footer #1") → `footer.footer-20192`
  (bg `#141d2a`, `padding: 7rem 0`, color `#fff`) →
  `div.site-section > div.container` →
  1. `div.cta.d-block.d-md-flex.align-items-center.px-5`: `h2.mb-0` "Ready
     for a next project?" + `h3.text-dark` "Let's get started!" + `div.ml-auto`
     with `a.btn.btn-dark.rounded-0.py-3.px-5` "Contact us"
  2. `div.row` with FIVE columns:
     - `div.col-sm`: `a.footer-logo` "Colorlib" + `p.copyright > small`
       "© 2019"
     - `div.col-sm`: `h3` "Customers" + `ul.list-unstyled.links`: Buyer,
       Supplier
     - `div.col-sm`: `h3` "Company" + links: About us, Careers, Contact us
     - `div.col-sm`: `h3` "Further Information" + links: Terms & Conditions,
       Privacy Policy
     - `div.col-md-3`: `h3` "Follow us" + `ul.list-unstyled.social`: five
       `li > a > span` icons: `icon-facebook`, `icon-twitter`,
       `icon-linkedin`, `icon-medium`, `icon-paper-plane`
- **Grid behavior (Bootstrap 4.5.3, reproduce responsively):** four `.col-sm`
  are equal-width auto columns (each 18.75% on md+); `.col-md-3` is 25% on
  md+. So on md+ all five columns fit one row (4×18.75% + 25%); on sm
  (576–767px) the four auto columns fill the first line and "Follow us"
  wraps to a second full-width line; on xs all columns stack full-width.

## Design tokens (from the reference)

| Token             | Value                                                                                                                                                                                                                           | Source                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Font family       | **Roboto** — body stack `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`; headings use the same stack                                                        | `css/style.css` `body` + `h1..h6` rules            |
| Footer background | **`#141d2a`** (deep dark navy) — footer band, `padding: 7rem 0`, text `#fff`                                                                                                                                                    | `.footer-20192`                                    |
| Accent            | **`#8186d5`** (soft periwinkle/violet) — CTA box background AND social-icon circle background                                                                                                                                   | `.footer-20192 .cta`, `.footer-20192 .social li a` |
| Muted text        | **`#666873`** (gray) — column link text + copyright; hover → `#fff`                                                                                                                                                             | `.footer-20192 .links li a`, `.copyright`          |
| Dark              | **`#343a40`** (Bootstrap `dark`) — "Contact us" button bg (`btn-dark`) and the CTA sub-headline `h3.text-dark`                                                                                                                  | Bootstrap `btn-dark` / `text-dark`                 |
| Light filler      | **`#f8f9fa`** (Bootstrap `light`) — the 70vh demo area above the footer                                                                                                                                                         | Bootstrap `bg-light`                               |
| CTA shadow        | `-webkit-box-shadow: -20px -20px 0 0 rgba(52, 58, 64, 0.2)` — hard-edged offset shadow cast UP-LEFT (no blur), `padding: 20px`, `position: relative; top: -150px` (box pulls UP over the footer top edge / into the light area) | `.footer-20192 .cta`                               |
| CTA button        | `.btn-dark`: bg `#343a40`, white text, **`rounded-0` (square corners — NO radius)**, `py-3 px-5` (1rem / 3rem padding)                                                                                                          | Bootstrap `.btn-dark` + `.rounded-0`               |
| Column heading    | `h3`: **16px**, `margin-bottom: 10px`, `line-height: 1.5`, white                                                                                                                                                                | `.footer-20192 h3`                                 |
| Link list         | `li`: `margin-bottom: 10px`, `line-height: 1.5`, block; links `#666873`, hover `#fff`; `transition: .3s all ease` on `a` everywhere                                                                                             | `.footer-20192 .links li`, `a` rule                |
| Logo              | `.footer-logo`: **20px, white, `text-transform: uppercase`, `letter-spacing: .1rem`**                                                                                                                                           | `.footer-20192 .footer-logo`                       |
| Social circles    | **40×40px, `border-radius: 50%`, bg `#8186d5`, white icon glyph** centered via absolute translate(-50%,-50%); `li` inline-block                                                                                                 | `.footer-20192 .social li a`                       |
| Copyright         | `small` inside `p.copyright`, color `#666873`; source text "© 2019" (bare year, no name)                                                                                                                                        | DOM + `.copyright`                                 |
| Section rhythm    | Filler 70vh; footer `padding: 7rem 0`; CTA pulled up `-150px` overlapping the footer's top edge                                                                                                                                 | `.content`, `.footer-20192`, `.cta`                |
| Mobile behavior   | `.cta` `d-md-flex` → stacks on xs (heading block + button below); grid columns per Bootstrap breakpoints (see Grid behavior above)                                                                                              | Bootstrap classes                                  |

## Requirements

### Requirement: Page composition

The system SHALL render the footer-component demo with a main landmark, a
document title, and the mandatory footer landmark.

#### Scenario: Full page render

- **GIVEN** the Colophon app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the filler area and the footer inside the
  main landmark
- **AND** the document title SHALL be "Colophon — Footer"

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
  **"Footer #1"** — the recreation may show the template's own name as the
  demo label; keep the same kind of filler content)

### Requirement: Call-to-action band

The system SHALL render the periwinkle CTA band overlapping the footer's top
edge, with the source's copy and a dark square button.

#### Scenario: CTA renders with headline and button

- **GIVEN** the filler area is rendered
- **WHEN** the footer area loads
- **THEN** a CTA band SHALL be visible with background **`#8186d5`**, white
  text, `padding: 20px`, `position: relative; top: -150px` (pulled UP over
  the footer's top edge), and a hard-edged offset shadow
  `-20px -20px 0 0 rgba(52,58,64,.2)` (no blur, cast up-left)
- **AND** the band SHALL show the headline **"Ready for a next project?"**
  (`h2`, no bottom margin) and the sub-headline **"Let's get started!"**
  (`h3`, 20px, dark `#343a40`)
- **AND** the band SHALL show a **"Contact us"** button on the right
  (stacked below on small screens), styled `btn-dark`: background `#343a40`,
  white text, **square corners (`rounded-0`, NO radius)**, padding `1rem
3rem`

### Requirement: Footer brand and copyright

The system SHALL render the brand column with the renamed brand, the
copyright line, and the mandatory monorepo Component Dock credit (the source
brands "Colorlib" + "© 2019" — the Component Dock link is the monorepo
addition per conventions.md; NO ColorLib reference in app code).

#### Scenario: Brand, copyright, and Component Dock link

- **GIVEN** the CTA band is rendered
- **WHEN** the user scrolls to the footer's brand column
- **THEN** a brand link SHALL read **"Colophon"** in white, 20px,
  uppercase, `letter-spacing: .1rem` (the source's logo treatment)
- **AND** a copyright line SHALL read "© <current year> Colophon"
  (the source shows a bare "© 2019"; the recreation keeps a small muted
  `#666873` copyright line)
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock" (e.g. a
  "Made with Component Dock" line in the brand column or copyright area)

### Requirement: Footer link columns

The system SHALL render the three link columns with the source's exact
column headings and link sets, styled per the reference tokens.

#### Scenario: Link columns render with source copy

- **GIVEN** the brand column is rendered
- **WHEN** the user inspects the link columns
- **THEN** three columns SHALL be visible, each with a 16px white `h3`
  heading and a link list (`#666873` links, `margin-bottom: 10px` per item,
  hover → `#fff`):
  1. **Customers** — Buyer, Supplier
  2. **Company** — About us, Careers, Contact us
  3. **Further Information** — Terms & Conditions, Privacy Policy

### Requirement: Follow us social column

The system SHALL render the social column with five round periwinkle icon
buttons matching the source's glyph set.

#### Scenario: Social icons render as round buttons

- **GIVEN** the link columns are rendered
- **WHEN** the user inspects the "Follow us" column
- **THEN** five social buttons SHALL be visible as **40×40px circles**
  (`border-radius: 50%`, background `#8186d5`) with white glyphs, in the
  source's order:
  1. **Facebook**
  2. **Twitter**
  3. **LinkedIn**
  4. **Medium**
  5. **Paper plane** (Send)
- **AND** each button SHALL be a link with an accessible name (the source
  uses bare icon-font spans — the recreation SHALL add `aria-label`s)
- **NOTE (lucide-react limitation):** lucide-react REMOVED brand icons
  (Facebook/Twitter/Linkedin are `undefined` exports) — render the four
  brand glyphs as inline SVGs (simple-icons paths) and the paper plane as
  lucide `Send` (or inline SVG), matching the skill's brand-icon guidance.
  Probe every icon import with the `typeof` check before committing.

### Requirement: Responsive layout

The system SHALL reproduce the source's responsive grid behavior.

#### Scenario: Columns adapt across breakpoints

- **GIVEN** the footer is rendered
- **WHEN** the viewport is at the md breakpoint (≥768px)
- **THEN** the five columns SHALL fit in one row (four equal columns +
  "Follow us" at 25% width)
- **AND** at the sm breakpoint (576–767px) the four equal columns fill the
  first line while "Follow us" wraps to its own full-width line
- **AND** below 576px all columns SHALL stack vertically
- **AND** the CTA band SHALL stack its text block above the button below the
  md breakpoint (`d-md-flex` behavior)

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible social links, and
keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark and a semantic `<footer>`
  landmark
- **AND** all icon-only social buttons SHALL have `aria-label`s (Facebook,
  Twitter, LinkedIn, Medium, Send)
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app colophon` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Colophon — Footer"
- [ ] Filler: `#f8f9fa` area (~70vh) with a centered demo label
- [ ] CTA band: `#8186d5` bg, `padding: 20px`, pulled up `top: -150px` over
      the footer edge, hard shadow `-20px -20px 0 0 rgba(52,58,64,.2)`;
      "Ready for a next project?" (`h2` mb-0) + "Let's get started!"
      (`h3` `#343a40`, 20px); "Contact us" button `#343a40` bg, white text,
      SQUARE corners (no radius), padding 1rem 3rem, right-aligned
      (stacked below on xs)
- [ ] Brand column: "Colophon" 20px white uppercase `letter-spacing: .1rem`;
      copyright "© <year> Colophon" in `#666873`; Component Dock link
      `https://www.componentdock.com/`
- [ ] Link columns: Customers (Buyer, Supplier) / Company (About us,
      Careers, Contact us) / Further Information (Terms & Conditions,
      Privacy Policy) — 16px white h3, links `#666873` hover `#fff`, 10px
      item spacing
- [ ] Follow us: 5 round 40px `#8186d5` circles with white glyphs — Facebook,
      Twitter, LinkedIn, Medium, Send (inline SVG brand icons per lucide
      limitation; lucide `Send` for the paper plane); `aria-label`s on each
- [ ] Responsive: 5-in-one-row on md+ (Follow us 25%), Follow us wraps below
      on sm, stacked on xs; CTA stacks on xs
- [ ] Footer: dark `#141d2a`, `padding: 7rem 0`; semantic `<footer>` +
      main landmark; focus-visible rings
- [ ] Roboto via Google Fonts `<link>` in `index.html`
- [ ] NO images needed (the source footer is image-free — no picsum
      placeholders required); NO ColorLib reference anywhere in `apps/colophon`
      (provenance lives only here + TEMPLATES.md + PR)
