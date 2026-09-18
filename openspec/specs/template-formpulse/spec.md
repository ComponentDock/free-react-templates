# Template: FormPulse (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 19** — a minimalist centered contact card
with underline-style inputs, a budget dropdown, and a red pill-shaped CTA button.

- **Source slug:** `contact-form-19`
- **Source URL:** https://colorlib.com/wp/template/contact-form-19/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/contact-form-19/
  (note: `contact-form-19` redirects to `bootstrap/contact-form-19`)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

- **Font:** Roboto (weights 400, 700, 900) via Google Fonts
- **Brand / CTA color:** #ef4339 (vivid red)
- **CTA hover:** #ef4339 with darker red (approx #d43a30)
- **CTA shadow:** `0 15px 30px 0 rgba(239, 67, 57, 0.2)`
- **CTA shape:** pill (border-radius: 30px), uppercase, letter-spacing 0.2rem, font-size 11px
- **Page background:** #ffffff (white)
- **Body text color:** #8c8c8c (medium gray)
- **Heading color:** #000000 (black)
- **Label color:** #b3b3b3 (light gray), font-size 14px
- **Input border:** none (bottom border only, 1px solid #cccccc)
- **Input focus border:** #000000 (black)
- **Input height:** 45px, border-radius: 0
- **Card background:** #ffffff
- **Card border:** 1px solid #efefef
- **Card shadow:** `0 0px 20px 0 rgba(0, 0, 0, 0.05)`
- **Card padding:** 40px
- **Select height:** 45px, same underline styling as text inputs
- **Success color:** #55A44E (green), bold, 18px
- **Error color:** #B90B0B (dark red)

## Visual Design Notes (from screenshot)

The screenshot shows a clean, minimalist single-column contact form centered
on a white background. The form card has a subtle border and shadow. The heading
"Get Started" is large, bold, and black. Below are two columns for Name and Email
side by side, a full-width Budget dropdown, a full-width Message textarea, and a
red pill-shaped "Send Message" button. The form labels are small and gray. The
overall aesthetic is modern, clean, and corporate-minimal.

## Requirements

### Requirement: Page layout

The template SHALL render a centered contact form card on a white background.

#### Scenario: Card rendered centered

- **WHEN** I visit the FormPulse page
- **THEN** a single white card is centered on the page
- **AND** the card has a subtle box shadow and light border

#### Scenario: Page title heading

- **WHEN** I visit the FormPulse page
- **THEN** the heading "Get Started" is visible at the top of the card

### Requirement: Name and Email fields

The template SHALL display Name and Email fields side by side in the first row.

#### Scenario: Name field present

- **WHEN** the form loads
- **THEN** a "Name *" label is visible
- **AND** a text input with placeholder "Your name" is present

#### Scenario: Email field present

- **WHEN** the form loads
- **THEN** an "Email *" label is visible
- **AND** a text input with placeholder "Your email" is present

#### Scenario: Fields on same row

- **WHEN** the form loads
- **THEN** Name and Email fields appear side by side (50% width each)

### Requirement: Budget dropdown

The template SHALL display a Budget dropdown with preset budget ranges.

#### Scenario: Budget select rendered

- **WHEN** the form loads
- **THEN** a "Budget" label is visible
- **AND** a select dropdown is present with default text "Choose..."

#### Scenario: Budget options

- **WHEN** I open the Budget dropdown
- **THEN** I see options: "< $1,000", "$2,000 - $5,000", "$5,000 - $15,000", "$15,000 - $25,000", "$25,000 >"

### Requirement: Message textarea

The template SHALL display a multi-line Message textarea.

#### Scenario: Message field present

- **WHEN** the form loads
- **THEN** a "Message *" label is visible
- **AND** a textarea with placeholder "Write your message" is present
- **AND** the textarea has 4 rows

### Requirement: Submit button

The template SHALL display a red pill-shaped submit button.

#### Scenario: Button visible

- **WHEN** the form loads
- **THEN** a "Send Message" button is visible
- **AND** the button has a red background (#ef4339)
- **AND** the button text is uppercase with letter spacing
- **AND** the button has rounded corners (pill shape)

#### Scenario: Button has shadow

- **WHEN** the form loads
- **THEN** the submit button has a red box-shadow effect

### Requirement: Form input styling

The template SHALL style all inputs with underline-only borders.

#### Scenario: Input border style

- **WHEN** I view any text input
- **THEN** it has no visible border except a bottom border (underline style)

#### Scenario: Input focus state

- **WHEN** I focus on a text input
- **THEN** the bottom border changes to black (#000000)

### Requirement: Form submission feedback

The template SHALL display success and warning messages for form submission.

#### Scenario: Success message

- **WHEN** the form is submitted successfully
- **THEN** a "Your message was sent, thank you!" message appears in green

#### Scenario: Warning message container

- **WHEN** the page loads
- **THEN** warning and success message containers exist but are hidden by default

### Requirement: Responsive layout

The template SHALL be responsive across screen sizes.

#### Scenario: Mobile stacking

- **WHEN** I view the form on a mobile device (< 768px)
- **THEN** the Name and Email fields stack vertically (full width each)

#### Scenario: Card responsive padding

- **WHEN** I view the form on a small screen
- **THEN** the card padding adjusts appropriately for readability

## Verification Checklist

- [ ] Page renders centered white card with subtle shadow and border
- [ ] "Get Started" heading is bold, black, large
- [ ] Name and Email fields are side by side on desktop, stacked on mobile
- [ ] All inputs have underline-only bottom border (no box border)
- [ ] Input focus changes bottom border to black
- [ ] Budget dropdown has all 5 budget range options plus default "Choose..."
- [ ] Message textarea has 4 rows with "Write your message" placeholder
- [ ] "Send Message" button is red (#ef4339), pill-shaped, uppercase, letter-spaced
- [ ] Button has red box-shadow
- [ ] Success message appears in green after submission
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app source code
- [ ] Design tokens extracted from reference match implementation
- [ ] All tests pass at 100% coverage
