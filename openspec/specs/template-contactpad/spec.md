# Template: ContactPad (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 15** — a minimal, trendy contact page
with monospace-style typography, two-column info bar, and underline-style form
inputs on a white background.

- **Source slug:** `contact-form-15`
- **Source URL:** https://colorlib.com/wp/template/contact-form-15/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-15/ (404 at
  time of prep — design tokens extracted from screenshot + ColorLib page metadata)
- **Description:** "The best free trendy contact form template that acclimatizes
  to any website theme easily due to its simplicity." — minimal, monospace
  typography, clean grid layout, black button accent.
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from screenshot + page metadata)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `monospace` (Courier, Consolas, or system mono) | Screenshot headings appear monospaced |
| Heading font weight | 400–500 (regular, not bold) | Screenshot — uppercase headings |
| Heading text transform | uppercase | All headings ("NEW YORK", "CONTACT INFO", "MESSAGE US") |
| Background | `#ffffff` (white) | Full-page white background |
| Text color (headings) | `#000000` (black) | Screenshot — bold black headings |
| Text color (body) | `#000000` or `#333333` | Address/contact text |
| Placeholder color | `#999999` or `#888888` (gray) | "Your name", "Email", "Write your message" |
| Button background | `#000000` (black) | "Send Message" solid black button |
| Button text color | `#ffffff` (white) | White text on button |
| Button border radius | ~4px (slightly rounded corners) | Screenshot — small radius |
| Input border | bottom-only underline, `#cccccc` or `#dddddd` (light gray) | Screenshot — thin horizontal lines |
| Input border bottom on focus | `#000000` or `#333333` | Standard underline focus behavior |
| Section spacing | generous whitespace, ~80–100px between sections | Screenshot — very spacious layout |
| Content max-width | ~800–900px centered | Form and info constrained in center |

## Requirements

### Requirement: Page layout

The page renders a single-column centered layout with generous whitespace on a
pure white background.

#### Scenario: White background

- **WHEN** I visit the ContactPad page
- **THEN** the page background is white

#### Scenario: Centered content

- **WHEN** I visit the ContactPad page
- **THEN** all content is centered with a max-width constraint (~800–900px)

### Requirement: Info bar (top section)

A two-column info bar displays address on the left and contact details on the
right, with generous spacing between them.

#### Scenario: Address column (left)

- **WHEN** I visit the ContactPad page
- **THEN** I see a "NEW YORK" heading (uppercase, monospace)
- **AND** below it the address "9757 Aspen Lane South, Richmond Hill, NY 11419"

#### Scenario: Contact info column (right)

- **WHEN** I visit the ContactPad page
- **THEN** I see a "CONTACT INFO" heading (uppercase, monospace)
- **AND** below it "T: +1 (291) 929 9321"
- **AND** "E: info@mywebsite.com"

#### Scenario: Two-column layout

- **WHEN** I visit the ContactPad page
- **THEN** the address and contact info are displayed side by side in two
  columns on desktop
- **AND** they stack vertically on mobile (single column)

### Requirement: Contact form

Below the info bar is a message form with underline-style inputs and a black
submit button.

#### Scenario: Form heading

- **WHEN** I visit the ContactPad page
- **THEN** I see a "MESSAGE US" heading (uppercase, monospace)

#### Scenario: Name input

- **WHEN** I visit the ContactPad page
- **THEN** there is an input field with placeholder "Your name"
- **AND** it has a bottom border underline style (no full border box)

#### Scenario: Email input

- **WHEN** I visit the ContactPad page
- **THEN** there is an input field with placeholder "Email"
- **AND** it has a bottom border underline style

#### Scenario: Name and email side by side

- **WHEN** I visit the ContactPad page on desktop
- **THEN** the name and email inputs appear in the same row (two columns)

#### Scenario: Message textarea

- **WHEN** I visit the ContactPad page
- **THEN** there is a textarea with placeholder "Write your message"
- **AND** it spans the full width of the form
- **AND** it has a bottom border underline style

#### Scenario: Send Message button

- **WHEN** I visit the ContactPad page
- **THEN** there is a "Send Message" button
- **AND** it has a black background with white text
- **AND** it has slightly rounded corners (~4px radius)

#### Scenario: Form submit with valid data

- **WHEN** I fill in the name, email, and message fields
- **AND** I click "Send Message"
- **THEN** the form submits (or shows a success state)

#### Scenario: Form validation — empty fields

- **WHEN** I click "Send Message" without filling any fields
- **THEN** validation errors are shown for required fields

### Requirement: Typography

All headings use monospace font with uppercase text transform.

#### Scenario: Monospace font

- **WHEN** I visit the ContactPad page
- **THEN** all headings ("NEW YORK", "CONTACT INFO", "MESSAGE US") use a
  monospace font family

#### Scenario: Uppercase headings

- **WHEN** I visit the ContactPad page
- **THEN** all section headings are displayed in uppercase

### Requirement: Footer

The page includes a footer linking to Component Dock.

#### Scenario: Footer link

- **WHEN** I visit the ContactPad page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

## Verification checklist

- [ ] Two-column info bar renders correctly on desktop, stacks on mobile
- [ ] Monospace font applied to all headings
- [ ] Underline-style inputs (bottom border only, no box border)
- [ ] Name + email inputs side by side on desktop, stacked on mobile
- [ ] Black "Send Message" button with white text and slight radius
- [ ] Generous whitespace between sections (~80–100px)
- [ ] White background, black text
- [ ] Form validation works (required fields enforced)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in any app source file
- [ ] Placeholder images use picsum.photos/seed pattern
