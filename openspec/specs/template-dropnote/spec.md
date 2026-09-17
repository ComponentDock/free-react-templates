# Template: DropNote (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form V19" — a minimal, single-page contact form
template with a full-viewport Google Maps background and a centered white card
overlay containing the message form.

- **ColorLib source:** https://colorlib.com/wp/template/contact-form-v19/
- **Live preview:** https://preview.colorlib.com/theme/contact-form-v19/ (404 at
  time of research — 2026-09-17; screenshot used as primary reference)
- **ColorLib description:** "Our basic free contact form template for sending
  messages with a Google Maps background integration and responsive design."
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

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

## Gherkin requirements

### Background

- Given the page is loaded
- Then the viewport is filled with an interactive map background
- And a centered white card is visible over the map

### Scenario: Page renders the contact form card

- Given the user visits the page
- When the page finishes loading
- Then a white card is centered on the viewport
- And the card has a subtle drop shadow
- And the card is overlaid on top of a full-viewport map

### Scenario: Card displays heading

- Given the contact form card is visible
- When the user reads the card
- Then the heading "Send Us A Message" is displayed
- And the heading is in a dark color and large font size

### Scenario: Email input field

- Given the contact form card is visible
- When the user looks at the email input
- Then there is an email input field with placeholder "Your Email Address"
- And the input has an envelope/email icon on the left
- And the input has a light gray border

### Scenario: Message textarea

- Given the contact form card is visible
- When the user looks at the message field
- Then there is a textarea with placeholder "How Can We Help?"
- And the textarea has a light gray border
- And the textarea is taller than the email input (multi-line)

### Scenario: Send message button

- Given the contact form card is visible
- When the user sees the submit button
- Then there is a blue "SEND MESSAGE" button
- And the button text is uppercase and white
- And the button spans a portion of the card width (not full-width)

### Scenario: Map background fills viewport

- Given the user visits the page
- When the page loads
- Then a map occupies the full viewport behind the card
- And the map is interactive (zoomable, pannable)

### Scenario: Responsive layout

- Given the user visits the page on a mobile device
- When the page loads
- Then the card is centered and responsive
- And the form fields stack vertically
- And the map still fills the viewport behind

### Scenario: Form submission

- Given the contact form card is visible
- When the user fills in the email and message
- And clicks "SEND MESSAGE"
- Then the form validates the email field
- And the form validates that the message is not empty
- And the form prevents submission if validation fails

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
