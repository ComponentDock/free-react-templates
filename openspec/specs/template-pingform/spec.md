# Template: PingForm (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V11** — a centered contact form card on a
vivid blue-to-green diagonal gradient background with curved wave overlays, a
white card containing a 4-field form, and a dark footer band.

- **Source slug:** `contact-form-v11`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v11/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v11/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

| Token            | Value                                      | Notes                                              |
| ---------------- | ------------------------------------------ | -------------------------------------------------- |
| Brand green      | `#2ECC71`                                  | Gradient end, submit button background             |
| Brand blue       | `#3498DB`                                  | Gradient start                                     |
| Background       | Full-page diagonal gradient (blue→green)   | With curved SVG wave overlays                      |
| Card surface     | `#FFFFFF`                                  | White card with subtle shadow                      |
| Card shadow      | `0 4px 20px rgba(0,0,0,0.10)`              | Soft drop shadow                                   |
| Card border-radius | `8px`                                     | Rounded corners                                    |
| Input background | `#F0F0F0`                                  | Light gray input fields                            |
| Input border     | None (flat, solid gray bg)                 | No visible border, bg color defines field           |
| Input border-radius | `4px`                                    | Slight rounding                                    |
| Heading text     | `#222222`                                  | "GET IN TOUCH" — bold, uppercase                   |
| Label text       | `#555555`                                  | Field labels above inputs                          |
| Placeholder text | `#999999`                                  | Inside inputs                                       |
| Button bg        | Gradient (green similar to brand green)    | Matches background palette                         |
| Button text      | `#FFFFFF`                                  | White                                               |
| Button border-radius | `4px`                                    | Rounded corners                                    |
| Button padding   | `12px 36px`                                | Comfortable click target                            |
| Footer bg        | `#222222` or `#1a1a2e`                    | Dark band below card                               |
| Footer text      | `#FFFFFF`                                  | Phone number / CTA                                 |
| Font — headings  | Poppins or similar sans-serif              | Bold weight for "GET IN TOUCH"                     |
| Font — body      | Poppins or similar sans-serif              | Regular weight for labels, inputs, footer           |

## Requirements

### Requirement: Page layout

The page renders a full-viewport gradient background with a centered white form
card.

#### Scenario: Full-viewport gradient background

- **WHEN** I visit the PingForm page
- **THEN** the page has a full-viewport background with a diagonal gradient
  from blue (top-left) to green (bottom-right)

#### Scenario: Curved wave overlays

- **WHEN** I visit the PingForm page
- **THEN** the background includes curved wave or arc overlays creating a
  flowing, organic feel on top of the gradient

#### Scenario: Centered form card

- **WHEN** I visit the PingForm page
- **THEN** I see a white card centered horizontally and vertically (or
  slightly above center) with rounded corners and a subtle drop shadow

### Requirement: Form heading

The card contains a bold heading at the top.

#### Scenario: Heading text

- **WHEN** I visit the PingForm page
- **THEN** the card displays "GET IN TOUCH" as a bold, uppercase heading
  in dark text, left-aligned at the top of the card

### Requirement: Name and email fields

Two input fields are displayed side by side in the first row.

#### Scenario: Name field present

- **WHEN** I visit the PingForm page
- **THEN** I see a field labeled "Tell us your name" with a required marker (*)
  and placeholder text

#### Scenario: Email field present

- **WHEN** I visit the PingForm page
- **THEN** I see a field labeled "Enter your email" with a required marker (*)
  and placeholder text

#### Scenario: Name and email in same row

- **WHEN** I visit the PingForm page
- **THEN** the name and email fields are displayed side by side (two columns)
  on the same row

#### Scenario: Input field styling

- **WHEN** I visit the PingForm page
- **THEN** the name and email inputs have a light gray background, no visible
  border, and slight border radius

### Requirement: Website field

A full-width website input field spans the second row.

#### Scenario: Website field present

- **WHEN** I visit the PingForm page
- **THEN** I see a field labeled "Your Website" with placeholder "http://"

#### Scenario: Website field full width

- **WHEN** I visit the PingForm page
- **THEN** the website input spans the full width of the form card

### Requirement: Message textarea

A full-width message textarea spans the third row.

#### Scenario: Message textarea present

- **WHEN** I visit the PingForm page
- **THEN** I see a textarea labeled "Your Message" with a required marker (*)
  and placeholder "How can we help you?"

#### Scenario: Message textarea tall

- **WHEN** I visit the PingForm page
- **THEN** the message textarea has sufficient height for multi-line input
  (approximately 100-120px tall)

### Requirement: Submit button

A centered submit button appears below the form fields.

#### Scenario: Submit button present

- **WHEN** I visit the PingForm page
- **THEN** I see a "SUBMIT" button centered below the message textarea

#### Scenario: Submit button styling

- **WHEN** I visit the PingForm page
- **THEN** the submit button has a green gradient background matching the
  page gradient, white text, and rounded corners

#### Scenario: Submit button centered

- **WHEN** I visit the PingForm page
- **THEN** the submit button is horizontally centered within the card

### Requirement: Footer

A dark footer band appears below the card with contact information.

#### Scenario: Footer present

- **WHEN** I visit the PingForm page
- **THEN** I see a dark footer band below the form card

#### Scenario: Footer phone number

- **WHEN** I visit the PingForm page
- **THEN** the footer displays "Call us on +001 345 6178" in white text

#### Scenario: Component Dock link

- **WHEN** I visit the PingForm page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Verification checklist

- [ ] Full-viewport blue-to-green diagonal gradient background renders
- [ ] Curved wave/arc overlays are present on the gradient
- [ ] White card is centered with shadow and rounded corners
- [ ] "GET IN TOUCH" heading is bold, uppercase, left-aligned
- [ ] Name and email fields are side by side (two columns)
- [ ] Website field is full width
- [ ] Message textarea is full width and tall enough
- [ ] All inputs have light gray backgrounds with no visible borders
- [ ] Submit button is green with white text, centered
- [ ] Dark footer with "Call us on" phone number
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] `npm run spec:validate` passes
- [ ] Visual match to ColorLib Contact Form V11 screenshot
