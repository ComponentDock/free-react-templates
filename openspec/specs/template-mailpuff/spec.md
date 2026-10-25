# Template: Mailpuff (Confirmation Modal)
<!-- prep-status: shipped-as=relay -->
> **SHIPPED-UNDER** — the ColorLib `modal-08` design this prep describes already
> ships as `apps/relay` (<https://relay.free.componentdock.com>).
> Do not scaffold `apps/mailpuff`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-relay/spec.md`.

## Purpose

Mailpuff is a single-page email confirmation MODAL in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 08" free template (source:
https://colorlib.com/wp/template/modal-08/), built under a DIFFERENT name
(**Mailpuff**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4.3 modal template: a centered page with a
"Launch Modal 08" button that opens a centered modal dialog showing an
email confirmation message. The modal has a gradient header (purple-to-orange
via `skewY` angle cuts), an email icon in a circular container, a heading
"You've Got Mail!", subtext "We sent confirmation link to:", and the
recipient's email address displayed prominently. The modal is vertically
centered with a drop shadow and a close (X) button in the top-right corner.

**WHAT MAKES MAILPUFF DISTINCT (signature behaviors):**

1. **Full-page centered layout with launch button.** A white
   `.ftco-section` fills the viewport with a centered heading ("Modal 08")
   and a Bootstrap primary button ("Launch Modal 08") that triggers the
   modal via `data-toggle="modal" data-target="#exampleModalCenter"`. The
   recreation uses React state to toggle the modal open/closed.

2. **Centered modal dialog with shadow and no border.** `.modal-dialog` is
   `max-width: 600px`, vertically centered (`.modal-dialog-centered`).
   `.modal-content` has no border (`border: none`), white background
   (`#fff`), and a prominent box-shadow
   `0px 10px 34px -15px rgba(0, 0, 0, 0.24)`.

3. **Gradient header with angular skew cuts.** The `.modal-header` has a
   230px height with a `linear-gradient(45deg, #915eff 0%, #ff8e59 100%)`
   background (purple to orange). Two `::before` and `::after` pseudo-elements
   create angular white "skew" cuts at the bottom corners using
   `skewY(10deg)` and `skewY(-10deg)`, each 50% width and 60px tall,
   creating a distinctive V-shaped angular transition between the gradient
   header and the white body below.

4. **Email confirmation content.** The modal body (overlapping the header
   by `margin-top: -180px`) contains:
   - A circular icon container (200×200px, `border-radius: 50%`) holding an
     SVG email/envelope icon.
   - Heading "You've Got Mail!" in bold white text (`font-weight: 700`).
   - Subtext "We sent confirmation link to:" in `h4` style (18px).
   - Email address "johndoe@gmail.com" in bold black text (`font-weight: 800`,
     `font-size: 22px`) with the "@" in light weight (`font-weight: 300`).

5. **Close button.** A white (×) close button positioned absolute in the
   top-right corner of the modal header (`width: 40px, height: 40px`,
   `color: #fff`).

## Naming

The ColorLib source name "Modal 08" is FORBIDDEN as the app name (and
"modal" itself must not be reused). **Mailpuff** is the new, original name
— single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified
2026-09-06: zero hits for `mailpuff` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`).

## Design reference (replication findings)

- **Original:** ColorLib "Modal 08" (page title: "Modal 08"). Listed in
  TEMPLATES.md under **Bootstrap Modal Templates** (category header around
  line 805; the unchecked row at line 809 — `wp/template/modal-08/`).
  Source slug: `modal-08`.
- **Live preview — REACHABLE (verified 2026-09-06 by direct fetch):** The
  naive `https://preview.colorlib.com/theme/modal-08/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/modal-08/`** (HTTP 200,
  HTML body). The page has `<title>Modal 08</title>`, loads Poppins font
  (weights 300–900) and two stylesheets: `css/ionicons.min.css` (icon
  font) + `css/style.css` (Bootstrap 4.3.1 + custom styles).
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-08.jpg`
  (1200×972px). Shows a white page with a centered "Modal 08" heading and a
  blue "Launch Modal 08" button; the modal is open in the screenshot showing
  the gradient header, email icon, and confirmation text.

## Design tokens

<!-- body-role-tokens: modal-08/brand/mailpuff -->
**Brand-fill role (measured 2026-10-25):** this prep states `#007bff`, which the render contradicts: the launch button paints #fb8691 (.cl-btn.cl-btn-primary{background:#fb8691 !important} out-ranks .cl-btn-primary{background-color:#007bff}). The sibling prep `dimbox` states the value the render supports.
<!-- /body-role-tokens -->

Extracted from the preview's `css/style.css` (custom styles, after Bootstrap
4.3.1 reset):

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#007bff` | Launch button background, Bootstrap primary |
| Gradient start | `#915eff` | Modal header gradient start (purple) |
| Gradient end | `#ff8e59` | Modal header gradient end (orange) |
| Text dark | `#212529` | Body text color |
| Text muted | `rgba(0,0,0,0.3)` | Subtle/secondary text |
| White | `#fff` | Section background, modal body, close button, skew cuts |
| Shadow | `rgba(0,0,0,0.24)` | Modal box-shadow color |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Poppins", sans-serif` | All text (loaded from Google Fonts via preview) |
| Heading bold | `font-weight: 700` | "You've Got Mail!" h2 |
| Heading extra-bold | `font-weight: 800` | Email address h3 |
| Heading light | `font-weight: 300` | "@" symbol in email, Poppins 300 weight |
| Body font-size | `18px` | h4 subtext |
| Email font-size | `22px` | Email address display |

### Shapes & Spacing

| Token | Value | Usage |
|-------|-------|-------|
| Modal max-width | `600px` | `.modal-dialog` |
| Modal shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` | `.modal-content` |
| Header height | `230px` | `.modal-header` |
| Header gradient angle | `45deg` | `linear-gradient(45deg, ...)` |
| Skew angle | `10deg` / `-10deg` | `::before` skewY(10deg), `::after` skewY(-10deg) |
| Skew height | `60px` | Both pseudo-elements |
| Icon circle | `200×200px`, `border-radius: 50%` | Email icon container |
| Close button | `40×40px` | Top-right corner, white X |
| Body overlap | `margin-top: -180px` | Modal body overlaps header |
| Border | `none` | Modal content has no border |

### Section backgrounds

| Section | Background |
|---------|-----------|
| Page (.ftco-section) | `#fff` (white) |
| Modal header | `linear-gradient(45deg, #915eff, #ff8e59)` |
| Modal body | `#fff` (white, inherits from modal-content) |
| Skew cuts | `#fff` (white, creates angular transition) |

## Requirements

### Feature: Mailpuff template behaviour

#### Scenario: Page loads with centered launch button

- **GIVEN** the user visits the Mailpuff page
- **THEN** the page title "Mailpuff" is visible
- **AND** a "Launch Mailpuff" button is displayed centered on the page
- **AND** the page background is white

#### Scenario: Launch button opens the confirmation modal

- **GIVEN** the user is on the Mailpuff page
- **WHEN** the user clicks the "Launch Mailpuff" button
- **THEN** a modal dialog appears centered in the viewport
- **AND** the modal has a gradient header (purple to orange)
- **AND** the modal displays the email confirmation content
- **AND** the page background behind the modal is dimmed

#### Scenario: Modal displays email confirmation content

- **GIVEN** the modal is open
- **THEN** a circular email icon is visible in the modal
- **AND** the heading "You've Got Mail!" is displayed
- **AND** the subtext "We sent confirmation link to:" is shown
- **AND** the email address "johndoe@gmail.com" is displayed prominently

#### Scenario: Modal close button dismisses the modal

- **GIVEN** the modal is open
- **WHEN** the user clicks the close (×) button in the top-right corner
- **THEN** the modal closes and is no longer visible
- **AND** the page returns to its initial state with the launch button

#### Scenario: Modal has gradient header with angular skew

- **GIVEN** the modal is open
- **THEN** the modal header displays a purple-to-orange gradient background
- **AND** the bottom of the header has angular white skew cuts on both sides
- **AND** the modal body overlaps the header slightly (negative margin)

#### Scenario: Modal has proper shadow and no border

- **GIVEN** the modal is open
- **THEN** the modal card has a drop shadow
- **AND** the modal card has no visible border
- **AND** the modal content is white with no padding on the header

#### Scenario: Accessibility — modal can be closed with keyboard

- **GIVEN** the modal is open
- **WHEN** the user presses the Escape key
- **THEN** the modal closes

#### Scenario: Responsive — modal adapts to viewport

- **GIVEN** the user views the page on a mobile device
- **WHEN** the user opens the modal
- **THEN** the modal fills the available width (max 600px)
- **AND** the modal content remains readable
- **AND** the launch button remains centered on the page

## Verification checklist

- [ ] `openspec/specs/template-mailpuff/spec.md` exists and passes
  `npm run spec:validate`
- [x] `apps/mailpuff/` created with standard Vite + React + Tailwind + TS — superseded: shipped as `apps/relay`
  scaffold
- [x] `apps/mailpuff/package.json` has name — superseded: shipped as `apps/relay`
  `@free-react-templates/mailpuff`
- [x] `apps/mailpuff/public/CNAME` contains `mailpuff.free.componentdock.com` — superseded: shipped as `apps/relay`
- [x] `apps/mailpuff/vite.config.ts` registers `injectUiSource()` — superseded: shipped as `apps/relay`
- [ ] `npm install` at repo root updates `package-lock.json`
- [ ] Footer links to `https://www.componentdock.com/`
- [x] No references to "Colorlib" or "colorlib" in `apps/mailpuff/` — superseded: shipped as `apps/relay`
- [ ] Gradient header: `linear-gradient(45deg, #915eff, #ff8e59)`
- [ ] Skew cuts: `::before` / `::after` with `skewY(10deg)` / `skewY(-10deg)`
- [ ] Email icon in 200×200px circular container
- [ ] Modal max-width 600px, centered, no border, drop shadow
- [ ] Close button: white × in top-right corner
- [ ] Poppins font loaded (weights 300, 400, 500, 600, 700, 800)
- [ ] All tests pass at 100% coverage
- [ ] Build succeeds
- [ ] Commit: `docs: prep Mailpuff (ColorLib Modal 08) spec + research`
