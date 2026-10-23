# Template: Cartofield (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V19** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/contact-form-v19/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v19/ (404 — fallback to screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v19.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from screenshot analysis (preview unreachable) — **re-probed 2026-10-23: the demo serves** (measured record below): — **re-probed 2026-10-23: the demo serves** (measured record below)

| Token | Value | Notes |
|-------|-------|-------|
| Background | Map image (blue-gray tinted) | Full-viewport map background, Manhattan/NYC area |
| Card background | `#ffffff` | White centered card with shadow |
| Heading color | `#333333` | Dark charcoal for "Send Us A Message" |
| Input border | `#e0e0e0` | Light gray border on form inputs |
| Placeholder text | `#999999` | Muted gray placeholder |
| Button color | `#4a7ec5` | Medium blue background |
| Button text | `#ffffff` | White on blue |
| Button border-radius | `4px` | Slightly rounded |
| Font family | Open Sans (or similar clean sans-serif) | Clean, readable sans-serif |
| Card shadow | `0 4px 20px rgba(0,0,0,0.1)` | Subtle elevation shadow |
| Icon color | `#999999` | Gray envelope icon in email field |

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cf/ContactFrom_v19/index.html` — HTTP 200, 1,688 B, title `Contact V19`.
>
> Sheet: `https://colorlib.com/etc/cf/ContactFrom_v19/css/style.css?v=7f3c4b1b` (9,709 B).
> Faces it actually declares: `OpenSans-Regular`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Layout

Full-viewport layout with map background:

- **Background:** Full-viewport map image (blue-gray tinted, showing a geographic area)
- **Center:** White card (max-width ~500px) vertically and horizontally centered
  - Heading: "Send Us A Message"
  - Email input with envelope icon
  - Textarea: "How Can We Help?"
  - Submit button: "SEND MESSAGE"

## Sections (in order)

1. **Map Background + Centered Contact Card**
   - Full viewport background: map image (use a placeholder map or gradient)
   - Centered white card with subtle shadow
     - Heading: "Send Us A Message"
     - Email field: text input with envelope icon on left, placeholder "Your Email Address"
     - Message textarea: placeholder "How Can We Help?"
     - Submit button: "SEND MESSAGE" — blue background, white text, rounded

## Requirements

### Feature: Cartofield template behaviour

#### Scenario: Page renders with map background

- **GIVEN** a user visits the Cartofield template
- **THEN** the page displays a full-viewport map background
- **AND** the background has a blue-gray tint

#### Scenario: Contact card is centered

- **GIVEN** the page has loaded
- **THEN** a white card is centered on the page
- **AND** the card has a subtle shadow

#### Scenario: Contact form heading

- **GIVEN** the card is visible
- **THEN** the heading "Send Us A Message" is displayed at the top of the card

#### Scenario: Email field with icon

- **GIVEN** the form is visible
- **THEN** there is an email input with an envelope icon on the left
- **AND** the placeholder reads "Your Email Address"

#### Scenario: Message textarea

- **GIVEN** the form is visible
- **THEN** there is a textarea
- **AND** the placeholder reads "How Can We Help?"

#### Scenario: Submit button

- **GIVEN** the form is visible
- **THEN** there is a submit button labeled "SEND MESSAGE"
- **AND** the button has a blue background (#4a7ec5)
- **AND** the button text is white

#### Scenario: Responsive behavior

- **GIVEN** a user views on mobile (viewport < 768px)
- **THEN** the card takes full width with padding
- **AND** the form fields remain usable and properly spaced

## Verification checklist

- [ ] Map background fills the viewport
- [ ] White card centered with shadow
- [ ] Heading "Send Us A Message" renders with correct color/size
- [ ] Email input has envelope icon and correct placeholder
- [ ] Textarea has correct placeholder "How Can We Help?"
- [ ] Submit button "SEND MESSAGE" styled with blue background, white text
- [ ] Responsive: card adapts on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Spec is the sole provenance record
