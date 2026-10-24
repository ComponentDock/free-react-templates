# Template: ReachForm (Contact Form)

## Purpose

ReachForm is a centered contact form template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Contact Form V2"
free template (source: https://colorlib.com/wp/template/contact-form-v2/),
built under a DIFFERENT name (**ReachForm**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a full-page contact form with a mountain landscape background
image overlaid with a pink-to-coral gradient. A centered white card contains
the form with three fields (Name, Email, Message) using underline-style inputs
and a gradient submit button. The title is set in a bold geometric sans
(Poppins-Bold, 39px).

## Design Tokens (reference measured 2026-10-24)

Reference: **live demo** `https://colorlib.com/etc/cf/ContactFrom_v2/` (HTTP 200, 1,685 B,
`<title>` "Contact V2") — the `/etc/cf/` demo folder IS the design;
`preview.colorlib.com/theme/contact-form-v2/` and `/theme/bootstrap/contact-form-v2/` both
answer **404**. Sheet `css/style.css?v=6c4ee4df` — 10,677 B, sha256 `fe59dd56fc10aec2…`,
identical to the copy inside `downloads/free/contact-form-v2.zip` (460,365 B) ⇒ live preview
verified, the archive is its un-versioned twin. The page holds **0** anchors, one `<form>`,
2 inputs + 1 textarea (the e-mail field is `type="text" name="email"`, validated by regex).

- **Font Family:** **Poppins** only — `Poppins-Bold` 39px title, `Poppins-Regular` 15px
  fields, `Poppins-Medium` 16px button (8 `font-family` declarations; the source
  self-hosts the woff2 trio). There is no serif/display face in this design.
- **Background:** photograph `images/bg-01.jpg` (mountain landscape) with a **45° wash** on
  `.container-contact2`: `linear-gradient(45deg, rgba(213,0,125,.8), rgba(229,57,53,.8))` —
  80 % alpha, so the photo reads through as texture; page is `min-height: 100vh`, 15px padding
- **Gradient:** `#d5007d → #e53935` at 45° (page wash, 80 % alpha) and at full strength for
  the field focus rule (`45deg`) and the button sweep (`-135deg`, four stops)
- **Card:** White `#ffffff`, **790px**, `border-radius: 10px`, `padding: 72px 55px 90px 55px`
  (`72/15/90/15` ≤576px), **no shadow**
- **Title:** `#333333`, 39px, `Poppins-Bold`, **centred**, `padding-bottom: 90px`
- **Input labels:** floating label inside the field — `#999999`, 13px `Poppins-Regular`,
  `top: 16px` at rest, `top: -13px` on focus or when the field has a value (the markup's
  `data-placeholder` reads `NAME` / `EMAIL` / `MESSAGE`)
- **Input borders:** **2px `#adadad` bottom rule only** (no box, no radius), fields 37px
  apart; input 45px tall, textarea `min-height: 115px`; focus draws a 2px pink→red rule from
  `width: 0` to `100%` in .4s
- **Button:** `linear-gradient(-135deg, #d5007d, #e53935, #d5007d, #e53935)` on a **300 %-wide**
  child parked at `left: -100%` that slides to `0` on hover; `244px × 50px`, radius 2px,
  `Poppins-Medium` 16px white
- **Field text:** `#555555` 15px; placeholder colour `#999999`
- **Error state:** white bubble, `1px solid #c80000`, radius 2px, `#c80000` 13px
- **Spacing:** card `72/55/90/55`; title `90px` below; button block `padding-top: 13px`
- **Brand measured:** `#d5007d` — live sheet paints it ×12 — 45° page wash, field focus rule
  and button sweep; style.css?v=6c4ee4df (10,677 B, sha256 fe59dd56fc10) · <https://colorlib.com/etc/cf/ContactFrom_v2/index.html>

## App deltas (as shipped)

The app was built from a pre-correction token list (Playfair Display / DM Sans,
`#e84393` / `#fd7e14`) and is **not** changed by this prep correction. Its measured deviations from the reference:

- Title face is `--font-display` **Playfair Display 700** and body **DM Sans**; the reference
  is Poppins-Bold 39px / Poppins-Regular 15px.
- Wash is `linear-gradient(135deg, #e84393, #fd7e14)` at `opacity .85`; the reference is
  `45deg rgba(213,0,125,.8) → rgba(229,57,53,.8)`.
- Labels are printed above the field (`text-xs uppercase`), not floated inside it.
- Card is `rounded-lg` (8px) with `shadow-xl`, capped at 520px; the reference is 10px, no
  shadow, 790px.
- Button is a static `to-r` gradient fill at `px-8 py-3`; the reference sweeps a 300 %-wide
  gradient child on a 244 × 50 slab.
- The reference has no success state and no footer; the app adds both (footer is the
  Component Dock credit required by AGENTS.md rule 5).

## Requirements

### Requirement 1: Page Layout

The page shall display a full-viewport background with a mountain landscape
image overlaid with a pink-to-coral gradient. A centered white card sits on top
containing the contact form.

#### Scenario: User views the page on initial load

- **WHEN** the user opens the application
- **THEN** the page shows a full-bleed background image with gradient overlay
- **AND** a centered white card with the contact form is visible

### Requirement 2: Contact Form Title

The form card shall display a bold heading "Contact Us".

#### Scenario: User sees the form title

- **WHEN** the page loads
- **THEN** the heading "Contact Us" is visible in the form card

### Requirement 3: Form Fields

The form shall contain three fields: Name (text input), Email (email input),
and Message (textarea). All fields use underline-style borders.

#### Scenario: User sees all form fields

- **WHEN** the page loads
- **THEN** a Name input field is visible
- **AND** an Email input field is visible
- **AND** a Message textarea is visible

#### Scenario: User types in the Name field

- **WHEN** the user clicks the Name input and types "Kevin Nguyen"
- **THEN** the Name field shows "Kevin Nguyen"

#### Scenario: User types in the Email field

- **WHEN** the user clicks the Email input and types "test@example.com"
- **THEN** the Email field shows "test@example.com"

#### Scenario: User types in the Message field

- **WHEN** the user clicks the Message textarea and types "Hello there!"
- **THEN** the Message textarea shows "Hello there!"

### Requirement 4: Submit Button

The form shall have a "Send Your Message" submit button with a pink-coral
gradient background.

#### Scenario: User sees the submit button

- **WHEN** the page loads
- **THEN** a button labeled "Send Your Message" is visible

#### Scenario: User submits the form

- **WHEN** the user clicks "Send Your Message"
- **THEN** a thank-you confirmation message is displayed
- **AND** the form fields are hidden

### Requirement 5: Thank You State

After form submission, the card shall show a thank-you message with a "Send
another message" reset link.

#### Scenario: User sees thank-you after submission

- **WHEN** the form is submitted
- **THEN** the card shows "Thank You!" heading
- **AND** the card shows a confirmation message

#### Scenario: User resets the form

- **WHEN** the user clicks "Send another message" after submission
- **THEN** the form is shown again with empty fields

### Requirement 6: Footer

The page shall include a footer linking to Component Dock.

#### Scenario: User sees the footer

- **WHEN** the page loads
- **THEN** a footer with a "Component Dock" link to https://www.componentdock.com/ is visible

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/reachform/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/reachform/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page Layout — the page shows a full-bleed background image with gradient overlay
- [x] Contact Form Title — the heading "Contact Us" is visible in the form card
- [ ] Form Fields — a Name input field is visible
- [x] Submit Button — a button labeled "Send Your Message" is visible
- [x] Thank You State — the card shows "Thank You!" heading
