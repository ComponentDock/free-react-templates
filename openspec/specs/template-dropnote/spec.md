# Template: DropNote (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form V19" — a minimal, single-page contact form
template with a full-viewport Google Maps background and a centered white card
overlay containing the message form.

- **ColorLib source:** https://colorlib.com/wp/template/contact-form-v19/
- **Live preview:** https://preview.colorlib.com/theme/contact-form-v19/ (404 at
  time of research — 2026-09-17; screenshot used as primary reference) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **ColorLib description:** "Our basic free contact form template for sending
  messages with a Google Maps background integration and responsive design."
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cf/ContactFrom_v19/index.html` — HTTP 200, 1,688 B, title `Contact V19`.
>
> Sheet: `https://colorlib.com/etc/cf/ContactFrom_v19/css/style.css?v=7f3c4b1b` (9,709 B).
> Faces it actually declares: `OpenSans-Regular`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens (extracted from screenshot + ColorLib page)

| Token | Value | Source |
|-------|-------|--------|
| Brand blue (button) | `#3b82f6` (approx Tailwind blue-500) | Screenshot — blue "SEND MESSAGE" button |
| Card background | `#ffffff` | Screenshot — white centered card |
| Card shadow | subtle box-shadow (0 4px 24px rgba(0,0,0,0.12) approx) | Screenshot — card floats over map |
| Card border-radius | ~4px subtle rounding | Screenshot |
| Input border | `#e5e7eb` (light gray) | Screenshot — input/textarea borders |
| Heading color | `#1f2937` (dark gray) | Screenshot — "Send Us A Message" |
| Placeholder text | `#9ca3af` (medium gray) | Screenshot — "Your Email Address", "How Can We Help?" |
| Font family | System sans-serif (Inter/system-ui stack) | ColorLib page CSS |
| Button border-radius | ~4px | Screenshot — rectangular with slight rounding |
| Map background | Full-viewport Google Maps embed (NYC metro area in screenshot) | Screenshot |

## Requirements

### Feature: DropNote template behaviour

**Background**

- **GIVEN** the page is loaded
- **THEN** the viewport is filled with an interactive map background
- **AND** a centered white card is visible over the map

#### Scenario: Page renders the contact form card

- **GIVEN** the user visits the page
- **WHEN** the page finishes loading
- **THEN** a white card is centered on the viewport
- **AND** the card has a subtle drop shadow
- **AND** the card is overlaid on top of a full-viewport map

#### Scenario: Card displays heading

- **GIVEN** the contact form card is visible
- **WHEN** the user reads the card
- **THEN** the heading "Send Us A Message" is displayed
- **AND** the heading is in a dark color and large font size

#### Scenario: Email input field

- **GIVEN** the contact form card is visible
- **WHEN** the user looks at the email input
- **THEN** there is an email input field with placeholder "Your Email Address"
- **AND** the input has an envelope/email icon on the left
- **AND** the input has a light gray border

#### Scenario: Message textarea

- **GIVEN** the contact form card is visible
- **WHEN** the user looks at the message field
- **THEN** there is a textarea with placeholder "How Can We Help?"
- **AND** the textarea has a light gray border
- **AND** the textarea is taller than the email input (multi-line)

#### Scenario: Send message button

- **GIVEN** the contact form card is visible
- **WHEN** the user sees the submit button
- **THEN** there is a blue "SEND MESSAGE" button
- **AND** the button text is uppercase and white
- **AND** the button spans a portion of the card width (not full-width)

#### Scenario: Map background fills viewport

- **GIVEN** the user visits the page
- **WHEN** the page loads
- **THEN** a map occupies the full viewport behind the card
- **AND** the map is interactive (zoomable, pannable)

#### Scenario: Responsive layout

- **GIVEN** the user visits the page on a mobile device
- **WHEN** the page loads
- **THEN** the card is centered and responsive
- **AND** the form fields stack vertically
- **AND** the map still fills the viewport behind

#### Scenario: Form submission

- **GIVEN** the contact form card is visible
- **WHEN** the user fills in the email and message
- **AND** clicks "SEND MESSAGE"
- **THEN** the form validates the email field
- **AND** the form validates that the message is not empty
- **AND** the form prevents submission if validation fails

## Verification checklist

- [ ] Full-viewport map background renders behind the form card
- [ ] Centered white card with subtle shadow
- [ ] "Send Us A Message" heading in dark color
- [ ] Email input with icon and placeholder
- [ ] Textarea with placeholder "How Can We Help?"
- [ ] Blue "SEND MESSAGE" button (uppercase, white text)
- [ ] Responsive: card adapts to mobile, fields stack
- [ ] Form validation: email required, message required
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage (lines/functions/branches/statements)
- [ ] `npm run verify:app dropnote` passes
