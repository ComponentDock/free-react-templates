# Template: Formsend (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V12** — a centered card contact form with
a purple gradient background overlay on a city skyline image. Two-column layout:
left side shows a decorative envelope illustration with geometric shapes, right
side contains a clean "Get in touch" form with Name, Email, Message fields and a
purple Send button.

- **Source slug:** `contact-form-v12`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v12/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v12/ (404 at
  time of implementation — design tokens extracted from screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cf/ContactFrom_v12/index.html` — HTTP 200, 3,495 B, title `Contact V12`.
>
> Sheet: `https://colorlib.com/etc/cf/ContactFrom_v12/css/style.css?v=8fccd02d` (10,730 B).
> Faces it actually declares: `Montserrat-Bold`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
> The prescribed face `poppins` occurs in no rule of it.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Requirements

### Requirement: Page layout

The page SHALL display a centered card on a purple gradient background with a
background image of a city skyline.

#### Scenario: Full-screen background with purple overlay

- **WHEN** I visit the Formsend page
- **THEN** I see a full-screen background with a city skyline image
- **AND** there is a purple overlay (opacity ~70%) covering the background

#### Scenario: Centered white card

- **WHEN** I visit the Formsend page
- **THEN** I see a white card centered on the page
- **AND** the card has rounded corners and a shadow

### Requirement: Two-column layout

The card SHALL have two columns on desktop — a decorative illustration on the
left and the contact form on the right.

#### Scenario: Left column shows envelope illustration

- **WHEN** I visit the Formsend page on desktop
- **THEN** the left column displays a decorative envelope illustration
- **AND** the illustration includes geometric shapes (triangles, circles)

#### Scenario: Left column hidden on mobile

- **WHEN** I visit the Formsend page on mobile
- **THEN** the left column illustration is hidden

### Requirement: Contact form

The right column SHALL contain a contact form with Name, Email, Message fields
and a Send button.

#### Scenario: Form heading

- **WHEN** I view the contact form
- **THEN** I see a "Get in touch" heading

#### Scenario: Name input field

- **WHEN** I view the contact form
- **THEN** I see a Name input field with a user icon
- **AND** the input has a rounded pill shape with light gray background

#### Scenario: Email input field

- **WHEN** I view the contact form
- **THEN** I see an Email input field with a mail icon
- **AND** the input has a rounded pill shape with light gray background

#### Scenario: Message textarea

- **WHEN** I view the contact form
- **THEN** I see a Message textarea with rounded corners
- **AND** it has a light gray background

#### Scenario: Send button

- **WHEN** I view the contact form
- **THEN** I see a "Send" button with a send icon
- **AND** the button is purple, rounded, and full-width

#### Scenario: Form submission

- **WHEN** I click the Send button
- **THEN** the form submission is handled (preventDefault)

### Requirement: Footer

The page SHALL display a footer linking to Component Dock.

#### Scenario: Footer link

- **WHEN** I scroll to the bottom of the page
- **THEN** I see "Made with Component Dock" text
- **AND** "Component Dock" links to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formsend/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formsend/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Design Tokens

| Token              | Value   | Usage                |
| ------------------ | ------- | -------------------- |
| brand-purple       | #7c3aed | Button, overlay      |
| brand-purple-dark  | #6d28d9 | Button hover         |
| brand-purple-light | #a78bfa | Envelope accent      |
| bg-card            | #ffffff | Card background      |
| bg-input           | #f0f0f0 | Input backgrounds    |
| text-primary       | #1a1a2e | Headings, input text |
| text-secondary     | #6b7280 | Icons                |
| text-placeholder   | #9ca3af | Placeholder text     |
| Font               | Poppins | Body text            |

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page layout — I see a full-screen background with a city skyline image
- [ ] Two-column layout — the left column displays a decorative envelope illustration
- [x] Contact form — I see a "Get in touch" heading
