# Template: FormWell (Contact form snippet)

## Purpose

A single contact band on a white page and nothing else: a centred 28px heading, then a 1140px
container holding an 83.33%-wide card whose surface **is** a photograph — a white wall with ivy
running down its right third — rounded to 5px. The form sits on that photograph's left 58.33% at
desktop width, padded 3rem: a 28px "Get in touch with us" heading, four white borderless 50px
fields carrying a soft `0 8px 19px -13px rgba(0,0,0,.09)` shadow, 12px/600 uppercase labels in
`#000`, and one green `#71a95a` "Send Message" button whose `0 10px 20px -6px` shadow deepens as it
darkens to `#5a8947`. Submitting runs the browser's native validation (email `required`, message
`required minlength="5"`) and then POSTs the form without leaving the page, revealing either a red
warning line or the green "Your message was sent, thank you!" for 6.6 seconds. The reference is a
snippet: no navigation, no hero, no footer — and **zero anchors**, so the credit line is the
recreation's own addition.

Recreation of the ColorLib **"Contact Form 08"** snippet
(https://colorlib.com/wp/template/contact-form-08/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

- **Source slug:** `contact-form-08`
- **ColorLib page:** https://colorlib.com/wp/template/contact-form-08/ (HTTP 200, 114,304 B)
- **Live preview:** https://preview.colorlib.com/theme/bootstrap/contact-form-08/ (HTTP 200,
  2,970 B, page title `Contact Form 08`). The `contact-form-*` family lives under the
  `/theme/bootstrap/` prefix; the slug-only path
  `https://preview.colorlib.com/theme/contact-form-08/` answers **404** (9 B).
- **New name:** `formwell` (apps/formwell, `@free-react-templates/formwell`) — a single lowercase
  word that differs from the source name, has no collision in `apps/` and none in
  `openspec/specs/`
- **Deploy target:** https://formwell.free.componentdock.com (`apps/formwell/public/CNAME`,
  `homepage` in `apps/formwell/package.json`)
- **Category:** TEMPLATES.md `## Contact Form (42)`, row **1411** — the row links
  `contact-form-08` and `formwell`, which is what this spec now records
- **Screenshot reference:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-08.jpg — **36,536 B**, served as
  **AVIF** (1200 × 972). It shows the same two-column card the live DOM renders, including the
  green button on the card's left edge.

### Why this spec was rewritten

`apps/formwell` shipped recreating this design, but the spec it shipped with named a different
one — ColorLib **"Contact Form V15"** (`/template/contact-form-v15/`, demo at
`https://colorlib.com/etc/cf/ContactFrom_v15/index.html`, title `Contact V15`, 12,176 B of
stylesheet) — and described a page the app does not contain: a full-page Google Maps `iframe`
under a dark overlay, a centred white card with a banner photo, "Contact Us" + "Feel free to drop
us a line below!", Phone and underline-style fields, a pill "Submit" arrow button, palette
`#4cd137`/`#5cb85c` (the V15 sheet's paint is `#57b846`). None of that is in `apps/formwell`, and
none of it is in the row's design.

The spec ↔ row census (`docs/spec-row-mismatch.md`, `scripts/verify-spec-row-mismatch.py`) flagged
the disagreement (`spec=contact-form-v15 rows=contact-form-08`); its copy adjudication searched the
app's own strings in both candidate previews and found them **exclusively** in the contact-form-08
body — `Get in touch with us` (c08 1 / v15 0), `Email Address` (1 / 0), `Send Message` (1 / 0),
`Subject` (2 / 0) — four exclusive hits, verdict **`SPEC-STALE`**. (The twin `contact-form-09` also
renders "Get in touch with us", but it centres that heading and its copy breaks the tie on
`Full Name` / `Email Address`, which is why the adjudication does not stop at the shared line.)
This spec is the measured contact-form-08 reference and its Requirements describe what
`apps/formwell` actually ships; `docs/templates/formwell/` was rewritten with it, because a
corrected spec carrying a stale brief still misdirects the next implementer. The folder name
stays: `formwell` ≠ `contact-form-08`, so rule 5 is satisfied and no rename is needed.

## Reference readings (2026-10-24, `curl -4`)

`preview.colorlib.com` answers IPv4 only from this host — plain `curl` (IPv6 first) hangs, so every
probe below passes `-4`. Hashes are the canonical body.

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/bootstrap/contact-form-08/` page (DOM authority) | 2,970 | — (page bodies are request-unstable; bytes only — `index.html` is byte-identical to the directory URL, so it is the same page, not a second one) |
| `theme/bootstrap/contact-form-08/css/style.css?v=ccb2648b` (token authority) | 14,838 | `2e79597579e7eabf8694c85a4a5cbc510375ac7229c0984377b6cb055130780e` |
| `theme/bootstrap/contact-form-08/js/snippet.js?v=6fddec7c` (submit + validation behaviour) | 2,687 | `dd02a14fec1238e54e82f2d304951dfcde20e96aa86721f818ca1c02f958f7ab` |
| `images/img.jpg` (the card's photograph, 1500 × 1000 JPEG) | 212,315 | — (asset — **never copied**; the recreation uses a seeded placeholder) |
| screenshot (above) | 36,536 | — (AVIF 1200 × 972) |
| `downloads/free/contact-form-08.zip` | 469,451 | — its `css/style.css` and `js/snippet.js` hash **identically** to the live pair above, so the archive is the live twin |

- **`measure-reference-tokens.py --url …/bootstrap/contact-form-08/` reports `rebuilt: False`** —
  the demo is the original build, so any mismatch with the shipped app is DRIFT, not a redesign.
- **Anchor census: the page holds 0 anchors, 2 headings, 1 form, 4 inputs (3 text/email + 1
  submit), 1 textarea, 4 labels.** There is no nav, no footer and no inner page, so the snippet
  shows no link at all; the Component Dock credit is the recreation's own addition, in its last
  band.
- The sheet is the same self-contained snippet packaging the rest of the bootstrap family ships: a
  `:where(html) :is(…) { all: revert }` reset that keeps a host page's reboot off the snippet,
  Bootstrap's grid re-emitted under `cl-` prefixes, and **four `@font-face` blocks for Roboto**
  (400 and 700, latin and latin-ext, `font-display: swap`) that nothing on this page uses: `body`
  asks for `"Poppins", Arial, sans-serif`, and the sheet delivers no Poppins while the page loads
  no font stylesheet at all. So the **declared** face is Poppins and the **rendered** face is the
  Arial fallback (the screenshot's letterforms are Arial's). The recreation loads Poppins from
  Google Fonts, which restores the declared intent; never copy the woff2.
- **The green focus rule cannot paint.** `.cl-form-control:focus, :active { border-color: #71a95a
  !important }` targets a border the theme has already removed (`.contactForm .cl-form-control {
  border: none }` leaves width 0), and the theme's input `box-shadow` is `!important`, which also
  outranks the reboot's blue `0 0 0 .2rem rgba(0,123,255,.25)` ring. A focused field therefore
  changes nothing but its caret — the button is the only place the green is actually seen.

## Design tokens (measured from `css/style.css`, 14,838 B)

Sheet census, theme sheet only: `#fff`×11, `#6c757d`×4, `#007bff`×4, `#212529`×3, `#495057`×3,
`#000`×3, `#71a95a`×3, `#0062cc`×2, `#5a8947`×2, `#ced4da`×1, `#80bdff`×1, `#e9ecef`×1,
`#0069d9`×1, `#fcf8e3`×1, plus `#28a745`×1 for the success line and `red` for the warning.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (only chromatic a visitor sees) | `#71a95a` | 3 declarations — `.cl-btn.cl-btn-primary` background **and** border, plus the focus `border-color` that cannot paint (above) |
| Accent hover | `#5a8947` | `.cl-btn.cl-btn-primary:hover, :focus` |
| Page ground | `#ffffff` | `body { background-color: #fff }`; `.ftco-section` adds no tint |
| Heading / label ink | `#000` | `h2`, `h3` and `.contactForm .label` (`#000`), `.heading-section` (`color: #000`) |
| Body ink | `#666666` | second `body` block: `color: #666666`, `font-size: 16px`, `line-height: 1.8` |
| Input ink | `rgba(0,0,0,0.8)` | `#contactForm .cl-form-control { color: rgba(0, 0, 0, 0.8) }` — overrides the reboot's `#495057` |
| Placeholder ink | `rgba(0,0,0,0.3)` | `.cl-form-control::placeholder` (`!important`) |
| Input surface | `#ffffff` | `.cl-form-control { background: #fff }` |
| Input shadow | `0 8px 19px -13px rgba(0,0,0,0.09)` | `.cl-form-control` `box-shadow` (`!important`) — the fields' only edge, since the border is removed |
| Button shadow | `0 10px 20px -6px rgba(0,0,0,0.12)` → `-0.22` on hover/focus | `.cl-btn` |
| Success ink | `#28a745` | `#form-message-success { color: #28a745; font-size: 18px; font-weight: 500 }` — parked in `display: none` until a submit resolves |
| Warning ink | `red` | `#form-message-warning { color: red }`, also `display: none` by default |
| Card radius | `5px` | `.wrapper { border-radius: 5px; overflow: hidden }` |
| Field / button radius | `5px` | `.cl-form-control`, `.cl-btn` (both `border-radius: 5px`) |
| Field height | `50px` | `.cl-form-control { height: 50px }` (`textarea` resets to `auto`) |
| Card width | `83.33333%` of the container | `.cl-col-lg-10` |
| Form column | `58.33333%` ≥992px · `75%` 768–991 · `100%` below | `.cl-col-lg-7` / `.cl-col-md-9` |
| Card padding | `3rem` ≥768px · `1.5rem` below | `.contact-wrap` — `cl-p-md-5` / `cl-p-4` |
| Band padding | `7em 0` (= 112px at the 16px body size) | `.ftco-section` |
| Container | 540 / 720 / 960 / 1140 px at 576 / 768 / 992 / 1200 | `.cl-container` |
| Label type | 12px / 600 / uppercase | `.contactForm .label { font-size: 12px; font-weight: 600; text-transform: uppercase }` |
| Type scale | 28 / 28 / 16 / 14 / 12 px | `.heading-section` 28px; `h3` 1.75rem; field text 16px; button 14px; label 12px |
| Typeface | `Poppins` declared, Arial rendered | `body`, `h2`/`h3` — see the font note above |
| Border | none on a field | `.contactForm .cl-form-control { border: none }`; separation comes from the shadow |

Declared but never painted: `#007bff` / `#0069d9` / `#0062cc` (the reboot's `.cl-btn-primary`
family, superseded by the theme's `!important` green), `#495057` (reboot input ink), `#ced4da`
(reboot field border), `#80bdff` (reboot focus border), `#e9ecef` (disabled field), `#212529`
(reboot body ink), `#fcf8e3` (`mark`), `#6c757d` (reboot placeholder, superseded). `#fff` is
painted — it is the field surface and no longer just the reboot.

## Reference document order (one band, no chrome)

| # | what | detail |
| --- | --- | --- |
| 1 | centred heading | `<h2 class="heading-section">` "Contact Form #08", 28px, `#000`, weight 400, `text-align: center`, `3rem` below |
| 2 | card | `.wrapper.img` — `83.33%` wide, `5px` radius, `overflow: hidden`, `images/img.jpg` as a `cover` / `center` CSS background, no card shadow |
| 2a | form column | `.cl-col-md-9 cl-col-lg-7` → 58.33% at ≥992px, padded `3rem` |
| 2b | card heading | `<h3>` "Get in touch with us", 28px, `#000`, weight 400, `1.5rem` below |
| 2c | status lines | `#form-message-warning` (red) and `#form-message-success` ("Your message was sent, thank you!", `#28a745`, 18px/500) — `display: none` until the ajax submit resolves |
| 2d | row 1 | "Full Name" (placeholder `Name`) and "Email Address" (placeholder `Email`, `required`) — 50/50 at ≥768px |
| 2e | subject | "Subject" (placeholder `Subject`), full width |
| 2f | message | "Message" — textarea `rows="4"`, placeholder `Message`, `required`, `minlength="5"`, `resize: vertical` |
| 2g | submit | `<input type="submit" value="Send Message">` painted by `.cl-btn.cl-btn-primary`, `12px 16px` padding, `5px` radius, `0 10px 20px -6px` shadow, `20px` below |

There is no header, navigation, hero, imagery band, testimonial block or footer in the reference:
the entire demo is one `.ftco-section > .cl-container` holding the heading and the card. The
recreation therefore has room for exactly one form band plus the mandatory credit.

## Requirements

### Requirement: One contact band, and the recreation's own name in the heading slot

The template SHALL render a single band: a centred heading naming the recreation, then the contact
card, on a light page ground.

#### Scenario: Page loads with the single band

- **WHEN** the page loads
- **THEN** exactly one `h1` names the template — "Formwell"
- **AND** the contact card is rendered directly below it
- **AND** no navigation, hero, feature grid, testimonial or newsletter band is rendered

#### Scenario: Document identity

- **WHEN** the document head is inspected
- **THEN** `document.title` is `Formwell — Contact Form Template`
- **AND** the description names a contact form, not the source site or its design

### Requirement: Two-column card — form beside the photograph

The card SHALL place the form and a photograph side by side at desktop width and SHALL drop the
photograph below the `sm` breakpoint so the form keeps the full card width.

#### Scenario: Desktop shows form and photograph

- **WHEN** the viewport is at least 640px wide
- **THEN** the card renders a form column and a photograph column side by side
- **AND** the photograph occupies the card's right 40%
- **AND** the photograph is a seeded placeholder with the accessible name "Contact us"

#### Scenario: Narrow viewport drops the photograph

- **WHEN** the viewport is narrower than 640px
- **THEN** the photograph column is hidden
- **AND** the form fills the card's width

#### Scenario: Card surface

- **WHEN** the card is inspected
- **THEN** it is white, rounded and carries a soft elevation shadow
- **AND** the page keeps a readable gutter around it

### Requirement: The reference's four-field form

The card SHALL contain the reference's heading and its four fields, in the reference's order and
with its own labels and placeholders.

#### Scenario: Heading verbatim

- **WHEN** the visitor reads the card
- **THEN** the heading "Get in touch with us" is rendered above the fields

#### Scenario: Field set and order

- **WHEN** the form is rendered
- **THEN** "Full Name" and "Email Address" are on one row at the `sm` breakpoint and above
- **AND** "Subject" follows, then "Message"
- **AND** the email field is `type="email"`

#### Scenario: Labels, placeholders and assistive names

- **WHEN** each field is inspected
- **THEN** its label is uppercase and programmatically associated with the field
- **AND** its placeholder reads `Name`, `Email`, `Subject` and `Message` respectively

#### Scenario: Message is a textarea

- **WHEN** the visitor inspects the Message field
- **THEN** it is a `textarea` with `rows="5"`

#### Scenario: The visitor can type

- **WHEN** the visitor types into the Full Name field
- **THEN** the field's value updates to what was typed

### Requirement: Submit never leaves the page

The form SHALL expose a single "Send Message" submit control, and activating it SHALL NOT navigate
or reload.

#### Scenario: Button present and labelled

- **WHEN** the form is rendered
- **THEN** a `submit` control labelled "Send Message" is rendered below the fields

#### Scenario: Clicking it is inert

- **GIVEN** the form has been rendered
- **WHEN** the visitor activates "Send Message"
- **THEN** the browser's default submit is prevented
- **AND** no navigation occurs

### Requirement: Footer with Component Dock attribution

The template SHALL credit Component Dock in a footer, because the reference's own snippet carries
no footer and no anchors at all.

#### Scenario: Visitor checks the footer

- **GIVEN** the visitor scrolls to the bottom of the page
- **WHEN** they view the footer
- **THEN** a link labelled "Component Dock" points at `https://www.componentdock.com/`
- **AND** it opens in a new tab with `rel="noopener noreferrer"`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under `apps/formwell/` may
contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments,
CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md`
and the PR; where the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formwell/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Known app delta — fidelity debt for the next implementer pass

`apps/formwell` reproduces the reference's **structure and copy** (one band, the centred heading
slot, the photograph beside the form, the four reference fields in order, the "Send Message"
submit, a footer credit) but not its **skin**, and it does not implement the reference's submit
behaviour. These deltas are recorded, not claimed:

| axis | reference (measured) | shipped `apps/formwell` | note |
| --- | --- | --- | --- |
| Photograph | the card's CSS background, bleeding under the 58.33% form column | a separate `<img>` panel at 40% width beside a white card | two different compositions; the reference never shows a hard split |
| Card shadow | none on the card (only fields and button carry shadows) | `shadow-md` on the card | |
| Accent | `#71a95a`, hover `#5a8947` | `#86b574`, hover `#6d9a5c` | 36 RGB units from the reference green |
| Field surface | `#ffffff`, 50px tall, 16px text, 5px radius, `0 8px 19px -13px rgba(0,0,0,.09)` | `#f7f7f7`, ~40px tall, 14px text, 2px radius, no shadow | the shadow is what separates the fields from the photo |
| Placeholder ink | `rgba(0,0,0,0.3)` | `#999999` | |
| Label ink | `#000`, 12px/600 uppercase | `#555555`, 12px/600 uppercase | |
| Page ground | `#ffffff` | `#f5f5f5` | |
| Body ink | `#666666` | `#333333` | |
| Textarea | `rows="4"` | `rows="5"` | |
| Band | `7em 0` padding, 1140px container | `py-12` (48px), 1024px container | |
| Submit behaviour | native `required` / `minlength="5"`, ajax POST, success line for 6.6s, red warning line | `preventDefault()` only — no validation feedback, no status lines | the largest functional delta |
| Typeface | Poppins declared (demo falls back to Arial) | Poppins loaded from Google Fonts | the recreation restores the declared face — not a divergence |

Closing this delta is an implementer change (tests + per-app gate), not a prep one — it is not part
of this rewrite.

## Verification checklist

- [x] App exists and ships at https://formwell.free.componentdock.com
- [x] Footer links `https://www.componentdock.com/`
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, `docs/templates/formwell/`, `TEMPLATES.md` and the PR
- [x] Requirements describe what `apps/formwell` renders (one band, two-column card, four fields, inert submit, footer credit)
- [x] Tokens re-measured from the reference sheet (`theme/bootstrap/contact-form-08/css/style.css`, 14,838 B)
- [ ] Typecheck / lint / 100% coverage / build — per-app gate, run by the implementer on any app change
- [ ] Skin parity and submit-behaviour parity (see "Known app delta")
