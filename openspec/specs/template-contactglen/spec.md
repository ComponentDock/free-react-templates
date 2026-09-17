# Template: ContactGlen (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V9** — a centered white contact form card
floating over a full-screen Google Maps background with a cyan-to-magenta
gradient overlay. The card contains a "Contact Us" heading, name/email/message
inputs with live validation (error banners, success checkmarks), a purple pill
"Send Email" button, and a footer phone number line.

- **Source slug:** `contact-form-v9`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v9/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v9/ (404 at
  prep time — design tokens extracted from live CSS at
  `https://colorlib.com/etc/cf/ContactFrom_v9/css/main.css` + screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v9.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the original CSS (`main.css`) and screenshot:

| Token | Value | Notes |
|-------|-------|-------|
| Font family (body) | `"Source Sans 3", sans-serif` | Source Sans Pro Regular → Google Fonts equivalent |
| Font family (heading) | `"Source Sans 3", sans-serif` | Bold weight (700) |
| Font family (button) | `"Josefin Sans", sans-serif` | Josefin Sans Bold (700) |
| Primary brand color | `#bd59d4` (purple/magenta) | Button background, highlight text |
| Button hover color | `#4b2354` (dark purple) | Button hover state |
| Validation error color | `#fa4251` (red) | Error banner text, error shadow |
| Text color (heading) | `#333333` (dark gray) | "Contact Us" title |
| Text color (body) | `#666666` (medium gray) | Paragraph text |
| Text color (secondary) | `#999999` (light gray) | Placeholders, footer text |
| Input text color | `#4b2354` (dark purple) | Focused/typed input values |
| Card background | `#ffffff` (white) | Form card |
| Card border-radius | `10px` | Rounded card corners |
| Card shadow | `0 3px 20px rgba(0, 0, 0, 0.1)` | Subtle drop shadow |
| Card padding | `72px 150px 25px 150px` | Desktop (responsive: 50px, 15px sides) |
| Card width | `800px` | Fixed width centered card |
| Input wrapper border-radius | `20px` | Rounded input containers |
| Input wrapper shadow | `0 5px 20px rgba(0, 0, 0, 0.05)` | Default state |
| Input wrapper focus shadow | `0 5px 20px rgba(0, 0, 0, 0.15)` | Focus state |
| Input height | `62px` | Text input height |
| Textarea min-height | `199px` | Message textarea |
| Button border-radius | `21px` | Pill-shaped button |
| Button height | `42px` | Submit button height |
| Button min-width | `160px` | Minimum button width |
| Button shadow (hover) | `0 10px 30px rgba(189, 89, 212, 0.8)` | Purple glow on hover |
| Background overlay | `linear-gradient(to right, rgba(0,168,255,0.5), rgba(185,0,255,0.5))` | Cyan-to-magenta semi-transparent |
| Map coordinates | `40.722047, -73.986422` | Default map center (Newark/NYC area) |
| Title font size | `30px` | "Contact Us" heading |
| Title font weight | `700` (bold) | Source Sans Pro Bold |
| Title alignment | `left` | Left-aligned within card |
| Footer text size | `16px` | Phone number line |
| Footer alignment | `center` | Centered below button |

## Requirements

### Requirement: Page layout

The page SHALL render a full-viewport container with a map background and a
centered white contact form card.

#### Scenario: Full-viewport background

- **WHEN** I visit the ContactGlen page
- **THEN** the page SHALL fill the entire viewport with a background that
  includes a map (or map-like visual) with a semi-transparent cyan-to-magenta
  gradient overlay

#### Scenario: Centered form card

- **WHEN** I visit the ContactGlen page
- **THEN** a white card SHALL be centered horizontally and vertically on the
  page with `border-radius: 10px` and a subtle drop shadow

### Requirement: Form heading

The form card SHALL display a heading at the top.

#### Scenario: Heading text

- **WHEN** I view the form card
- **THEN** a "Contact Us" heading SHALL be displayed at the top-left of the
  card in dark bold text (`#333333`, 30px, Source Sans 3 Bold)

### Requirement: Name input field

The form SHALL contain a name input field with validation.

#### Scenario: Name field display

- **WHEN** I view the form
- **THEN** a text input SHALL be displayed with placeholder "Full Name"
- **AND** the input SHALL be inside a rounded container (`border-radius: 20px`)
  with a subtle box shadow

#### Scenario: Name validation error

- **WHEN** I submit the form without entering a name
- **THEN** a red validation banner SHALL overlay the name field showing
  "Please enter your name" in red (`#fa4251`)
- **AND** a red error icon (X) SHALL appear on the right side of the field

#### Scenario: Name validation success

- **WHEN** I type a name into the name field
- **THEN** a green success checkmark SHALL appear on the right side of the field

### Requirement: Email input field

The form SHALL contain an email input field with validation.

#### Scenario: Email field display

- **WHEN** I view the form
- **THEN** a text input SHALL be displayed with placeholder "Email"
- **AND** the input SHALL be inside a rounded container with a subtle box shadow

#### Scenario: Email validation error

- **WHEN** I submit the form without entering a valid email
- **THEN** a red validation banner SHALL overlay the email field showing
  "Please enter email: e@a.x" in red

#### Scenario: Email validation success

- **WHEN** I type a valid email into the email field
- **THEN** a green success checkmark SHALL appear on the right side of the field

### Requirement: Message textarea

The form SHALL contain a message textarea.

#### Scenario: Textarea display

- **WHEN** I view the form
- **THEN** a textarea SHALL be displayed with placeholder "Your Message"
- **AND** the textarea SHALL have a minimum height of 199px
- **AND** the textarea SHALL be inside a rounded container with a subtle box
  shadow

#### Scenario: Textarea validation error

- **WHEN** I submit the form without entering a message
- **THEN** a red validation banner SHALL overlay the textarea showing
  "Please enter your message" in red

### Requirement: Submit button

The form SHALL display a submit button below the fields.

#### Scenario: Button appearance

- **WHEN** I view the form
- **THEN** a "Send Email" button SHALL be displayed centered below the fields
- **AND** the button SHALL have a purple background (`#bd59d4`), white text,
  pill-shaped border-radius (`21px`), and height of 42px
- **AND** the button font SHALL be Josefin Sans Bold, 14px, uppercase

#### Scenario: Button hover

- **WHEN** I hover over the submit button
- **THEN** the button background SHALL change to dark purple (`#4b2354`)
- **AND** a purple glow shadow SHALL appear (`0 10px 30px rgba(189, 89, 212, 0.8)`)

### Requirement: Footer phone line

Below the button, the form SHALL display a contact phone number.

#### Scenario: Phone number display

- **WHEN** I view the form below the submit button
- **THEN** text reading "Contact our 24/7 call center: +001 345 6889" SHALL
  be displayed centered
- **AND** the phone number portion SHALL be highlighted in the brand purple
  (`#bd59d4`)

### Requirement: Responsive layout

The form SHALL be responsive across viewport sizes.

#### Scenario: Desktop layout

- **WHEN** I view the form on a desktop viewport (≥ 992px)
- **THEN** the card SHALL be 800px wide with 150px horizontal padding

#### Scenario: Tablet layout

- **WHEN** I view the form on a tablet viewport (576px–991px)
- **THEN** the card SHALL have reduced horizontal padding (50px)

#### Scenario: Mobile layout

- **WHEN** I view the form on a mobile viewport (< 576px)
- **THEN** the card SHALL have minimal horizontal padding (15px)

### Requirement: Accessibility

The form SHALL be accessible.

#### Scenario: Semantic form elements

- **WHEN** I view the form
- **THEN** all inputs SHALL have associated labels or aria-labels
- **AND** the submit button SHALL be a `<button>` element with type="submit"
- **AND** the form SHALL have proper heading hierarchy (h1 or h2 for title)

## Verification checklist

- [ ] Full-viewport map background with cyan-to-magenta gradient overlay
- [ ] Centered white card (800px, 10px radius, shadow)
- [ ] "Contact Us" heading (left-aligned, bold, 30px, #333333)
- [ ] Name input with "Full Name" placeholder, validation error/success states
- [ ] Email input with "Email" placeholder, validation error/success states
- [ ] Message textarea with "Your Message" placeholder, validation error state
- [ ] Purple pill button "Send Email" (#bd59d4, 21px radius, 42px height)
- [ ] Button hover: dark purple (#4b2354) with purple glow shadow
- [ ] Footer phone line centered with purple-highlighted number
- [ ] Responsive padding (150px → 50px → 15px)
- [ ] Input focus shadow transitions
- [ ] Form validation on submit (empty fields show red banners)
- [ ] Green checkmarks on valid fields
- [ ] Accessibility: labels, semantic elements, heading hierarchy
- [ ] Component Dock footer link
