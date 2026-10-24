# Template: DarkRelay (Dark Contact Form)
<!-- prep-status: shipped-as=formrise -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-07` design this prep describes already
> ships as `apps/formrise` (<https://formrise.free.componentdock.com>).
> Do not scaffold `apps/darkrelay`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-formrise/spec.md`.

## Purpose

Recreation of ColorLib "Contact Form 07" — a dark-themed contact form page
with a two-column card layout: contact information on the left and a
full-featured contact form on the right, set against a light gray page
background.

- **Source slug:** `contact-form-07`
- **Source URL:** https://colorlib.com/wp/template/contact-form-07/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-07/ (404 at
  time of prep — design tokens extracted from screenshot analysis)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from screenshot pixel analysis (AVIF image, 1200×972):

| Token              | Value     | Usage                              |
| ------------------ | --------- | ---------------------------------- |
| Page background    | `#FAFAFA` | Light gray page background         |
| Left section bg    | `#272A33` | Contact info panel (dark blue-gray)|
| Right section bg   | `#1D1E23` | Contact form panel (very dark)     |
| Accent color       | `#E89A41` | Orange/amber buttons, links, icons |
| Light text         | `#FFFFFF` | Headings and text on dark sections |
| Secondary text     | `#B8B8B8` | Muted/body text on dark sections   |
| Input bg (dark)    | `#2C2D31` | Form input field backgrounds       |
| Divider/border     | `#3A3B40` | Subtle borders between sections    |

**Typography:** System/sans-serif font stack (Bootstrap default). Likely
`system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial,
sans-serif`.

**Button style:** Solid orange/amber (#E89A41) with rounded corners, white
text, hover darkens slightly.

**Layout:** Two equal-width columns centered on the page, with rounded corners
on the card container.

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-07/` | HTTP 200 · 13,988 B · title `Contact Form 07` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-07/css/style.css?v=bc1b3538` | HTTP 200 · 17,028 B · sha256 `683de413988c` |

**Live palette** (hex × occurrences across the sheets): `#f39422`×3,
`#d67a0c`×2.

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#e89a41`.

## Requirements

### Requirement: Page layout

The page renders a centered two-column dark card on a light gray background.

#### Scenario: Page rendered

- **WHEN** I visit the DarkRelay page
- **THEN** I see a centered card with two columns on a light gray (#FAFAFA)
  background

#### Scenario: Card has rounded corners

- **WHEN** I view the card
- **THEN** the card container has rounded corners

### Requirement: Left column — contact information panel

The left column has a dark blue-gray background and contains contact
information with icons.

#### Scenario: Contact info panel rendered

- **WHEN** I visit the DarkRelay page
- **THEN** the left column has a dark blue-gray (#272A33) background

#### Scenario: Panel heading

- **WHEN** I view the left column
- **THEN** I see a heading (e.g., "Contact Information" or similar)

#### Scenario: Address displayed with icon

- **WHEN** I view the left column
- **THEN** I see a location/address icon in orange/amber and an address line

#### Scenario: Phone displayed with icon

- **WHEN** I view the left column
- **THEN** I see a phone icon in orange/amber and a phone number

#### Scenario: Email displayed with icon

- **WHEN** I view the left column
- **THEN** I see an email icon in orange/amber and an email address

#### Scenario: Icon styling

- **WHEN** I view any contact info icon
- **THEN** the icon is colored orange/amber (#E89A41)

### Requirement: Right column — contact form

The right column has a very dark background and contains a contact form with
styled inputs and a submit button.

#### Scenario: Form rendered

- **WHEN** I visit the DarkRelay page
- **THEN** the right column has a very dark (#1D1E23) background with a
  contact form

#### Scenario: Form heading

- **WHEN** I view the right column
- **THEN** I see a heading for the contact form

#### Scenario: Name input field

- **WHEN** I view the form
- **THEN** I see a "Name" text input field with placeholder text

#### Scenario: Email input field

- **WHEN** I view the form
- **THEN** I see an "Email" text input field with placeholder text

#### Scenario: Subject input field

- **WHEN** I view the form
- **THEN** I see a "Subject" text input field with placeholder text

#### Scenario: Message textarea

- **WHEN** I view the form
- **THEN** I see a "Message" textarea with placeholder text

#### Scenario: Submit button

- **WHEN** I view the form
- **THEN** I see a "Send Message" button styled with orange/amber (#E89A41)
  background and white text

#### Scenario: Input field styling

- **WHEN** I view any form input
- **THEN** the input has a dark background (#2C2D31 or similar), light text,
  and a subtle border

### Requirement: Footer

The page has a footer with a Component Dock link.

#### Scenario: Footer rendered

- **WHEN** I scroll to the bottom of the page
- **THEN** I see a footer with a link to https://www.componentdock.com/
  (branded as "Component Dock")

### Requirement: Responsive layout

The layout adapts to mobile viewports.

#### Scenario: Mobile single column

- **WHEN** I view the page on a mobile viewport (≤768px)
- **THEN** the two columns stack vertically into a single column

### Requirement: Accessibility

All interactive elements are accessible.

#### Scenario: Form labels

- **WHEN** I use a screen reader on the form
- **THEN** each input has an associated label

#### Scenario: Keyboard navigation

- **WHEN** I navigate the form with Tab key
- **THEN** focus moves through inputs in logical order and the submit button
  is reachable

## Verification checklist

- [ ] Page background is light gray (#FAFAFA)
- [ ] Left column has dark blue-gray (#272A33) background
- [ ] Right column has very dark (#1D1E23) background
- [ ] Orange/amber accent (#E89A41) on icons and buttons
- [ ] Two-column layout on desktop, stacked on mobile
- [ ] Contact info icons (address, phone, email) rendered
- [ ] Form has Name, Email, Subject, Message fields + Submit button
- [ ] Input fields styled with dark backgrounds
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `darkrelay.free.componentdock.com`
- [ ] `package.json` homepage is `https://darkrelay.free.componentdock.com`

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/contact-form-07/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#e89a41` — nearest `#f39422` (d=33)
<!-- live-palette-unverified:end -->
