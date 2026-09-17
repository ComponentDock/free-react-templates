# Template: Reachbox (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V11** — a centered contact form card
over a full-viewport background image, featuring a two-column top row for
name and email inputs, full-width website and message fields, an animated
gradient submit button, and a phone number callout below the form.

- **Source slug:** `contact-form-v11`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v11/
- **Live preview:** https://colorlib.com/etc/cf/ContactFrom_v11/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v11.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (`css/main.css` + `css/util.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Font family | Raleway (Google Font) — Black, SemiBold, Bold weights | All text |
| Page background | Background image (`bg-01.jpg`) covering full viewport | Full-viewport cover |
| Form card background | `#ffffff` white | Centered white card |
| Form card border-radius | `2px` | Slightly rounded corners |
| Form card max-width | `960px` | Card width |
| Form card padding | `66px 115px 59px 115px` (desktop) | Inner spacing |
| Title font | Raleway-Black, 30px | "Get in Touch" heading |
| Title color | `#333333` | Dark gray heading text |
| Title text-transform | uppercase | All-caps heading |
| Input background | `#f2f2f2` | Light gray input fields |
| Input focus background | `#e6e6e6` | Slightly darker on focus |
| Input font | Raleway-SemiBold, 20px | Input text |
| Input text color | `#686868` | Medium-dark gray |
| Input height | `62px` | Standard input height |
| Input padding | `0 28px` | Horizontal padding |
| Input border-radius | `2px` | Slightly rounded |
| Placeholder color | `#adadad` | Light gray placeholder text |
| Label font | Raleway-SemiBold, 14px | Field labels |
| Label color | `#555555` | Dark gray labels |
| Button gradient | `#2f91ff` → `#00c513` → `#2f91ff` → `#00c513` (linear-gradient right) | Animated gradient background |
| Button text | white, Raleway-Bold, 16px, uppercase | Submit button label |
| Button height | `62px` | Match input height |
| Button min-width | `150px` | Minimum button width |
| Button border-radius | `2px` | Slightly rounded |
| Error color | `#c80000` | Validation error text/border |
| Body/link color | `#666666` | General body text |
| Contact-more text | white, Raleway-SemiBold, 20px | Phone number below form |

## Requirements

### Requirement: Full-viewport background

The page renders a background image covering the entire viewport with the
form centered on top.

#### Scenario: Background image fills viewport

- **WHEN** I visit the Reachbox page
- **THEN** the background is a full-viewport background image covering the
  entire screen with `background-size: cover`

#### Scenario: Form centered on page

- **WHEN** I visit the Reachbox page
- **THEN** the form card is vertically and horizontally centered on the page
  using flexbox

### Requirement: Form card

A white card containing the contact form, with subtle rounded corners.

#### Scenario: Card styling

- **WHEN** I visit the Reachbox page
- **THEN** I see a white (#ffffff) card with 2px border-radius and max-width
  of 960px

#### Scenario: Card padding desktop

- **WHEN** I view the card on desktop (width > 992px)
- **THEN** the card has padding of 66px top, 115px sides, 59px bottom

#### Scenario: Card padding tablet

- **WHEN** I view the card on tablet (width 576–992px)
- **THEN** the card has padding of 66px top, 80px sides, 59px bottom

#### Scenario: Card padding mobile

- **WHEN** I view the card on mobile (width < 576px)
- **THEN** the card has padding of 66px top, 15px sides, 59px bottom

### Requirement: Form title

A bold uppercase heading inside the form card.

#### Scenario: Title displayed

- **WHEN** I visit the Reachbox page
- **THEN** I see "Get in Touch" as the form title

#### Scenario: Title styling

- **WHEN** I view the form title
- **THEN** it is uppercase, left-aligned, Raleway-Black, 30px, #333333,
  with 32px padding-bottom

### Requirement: Name and email fields (two-column row)

Two labeled input fields side by side on desktop, stacking on tablet/mobile.

#### Scenario: Name field

- **WHEN** I visit the Reachbox page
- **THEN** I see a text input with label "Tell us your name *" and
  placeholder "Enter your name"

#### Scenario: Email field

- **WHEN** I visit the Reachbox page
- **THEN** I see a text input with label "Enter your email *" and
  placeholder "Enter your email"

#### Scenario: Two-column layout desktop

- **WHEN** I view the form on desktop (width > 768px)
- **THEN** the name and email fields display side by side at 50% width
  each with 30px gap between them

#### Scenario: Single-column layout mobile

- **WHEN** I view the form on tablet or mobile (width ≤ 768px)
- **THEN** the name and email fields stack to full width

### Requirement: Website field

A full-width optional input for a website URL.

#### Scenario: Website field displayed

- **WHEN** I visit the Reachbox page
- **THEN** I see a text input with label "Your Website" and
  placeholder "http://"

#### Scenario: Website field is optional

- **WHEN** I view the website field
- **THEN** it has no validation requirement (no `data-validate` attribute)

### Requirement: Message field

A full-width textarea for the message body.

#### Scenario: Message field displayed

- **WHEN** I visit the Reachbox page
- **THEN** I see a textarea with label "Message" and
  placeholder "Your message here..."

#### Scenario: Message field dimensions

- **WHEN** I view the message textarea
- **THEN** it has a minimum height of 162px with 19px top padding and
  13px bottom padding

### Requirement: Input styling

All inputs share consistent styling with a focus transition.

#### Scenario: Input background

- **WHEN** I view any input field
- **THEN** it has a light gray (#f2f2f2) background

#### Scenario: Input focus effect

- **WHEN** I click into an input field
- **THEN** the background transitions to slightly darker gray (#e6e6e6)
  with a 0.4s transition

#### Scenario: Input text styling

- **WHEN** I type into an input field
- **THEN** the text is Raleway-SemiBold, 20px, color #686868

#### Scenario: Placeholder styling

- **WHEN** I view an empty input field
- **THEN** the placeholder text is color #adadad

#### Scenario: Label styling

- **WHEN** I view any field label
- **THEN** it is Raleway-SemiBold, 14px, color #555555 with 10px margin-top

### Requirement: Submit button with gradient animation

A centered submit button with an animated gradient background that slides
in on hover.

#### Scenario: Button displayed

- **WHEN** I visit the Reachbox page
- **THEN** I see a "Submit" button centered below the form fields

#### Scenario: Button styling

- **WHEN** I view the submit button
- **THEN** it has white uppercase text, Raleway-Bold, 16px, 62px height,
  min-width 150px, and 2px border-radius

#### Scenario: Button gradient animation

- **WHEN** I hover over the submit button
- **THEN** a gradient background (linear-gradient right: #2f91ff, #00c513,
  #2f91ff, #00c513) slides in from the left over 0.4s

### Requirement: Form validation

Required fields (name, email, message) show validation errors when empty.

#### Scenario: Empty name error

- **WHEN** I submit the form without entering a name
- **THEN** I see a validation message "Name is required"

#### Scenario: Empty email error

- **WHEN** I submit the form without entering an email
- **THEN** I see a validation message "Valid email is required: ex@abc.xyz"

#### Scenario: Empty message error

- **WHEN** I submit the form without entering a message
- **THEN** I see a validation message "Message is required"

#### Scenario: Error styling

- **WHEN** a validation error is displayed
- **THEN** it shows as a tooltip-style bubble with white background, red
  (#c80000) text and border, 2px border-radius, 13px font, positioned
  above the input field, with a warning icon

#### Scenario: Error visibility

- **WHEN** I hover over a field with an error
- **THEN** the error tooltip becomes visible (opacity 0 → 1, 0.4s transition)

#### Scenario: Error always visible on tablet

- **WHEN** I view the form on tablet or mobile (width ≤ 992px)
- **THEN** validation error tooltips are always visible without hover

### Requirement: Contact info below form

A phone number callout text below the form card.

#### Scenario: Phone number displayed

- **WHEN** I visit the Reachbox page
- **THEN** I see "Call us on +001 345 6178" below the form card

#### Scenario: Phone number styling

- **WHEN** I view the phone number text
- **THEN** it is white, Raleway-SemiBold, 20px, centered, with 40px top
  padding

### Requirement: Responsive design

The form adapts to different screen sizes.

#### Scenario: Mobile layout

- **WHEN** I view the page on a mobile device (width < 576px)
- **THEN** the card padding reduces to 15px sides, all fields are full
  width, and the form remains centered

#### Scenario: Tablet layout

- **WHEN** I view the page on a tablet (width 576–768px)
- **THEN** all fields are full width with 80px card side padding

#### Scenario: Desktop layout

- **WHEN** I view the page on desktop (width > 992px)
- **THEN** name and email fields are side by side with 115px card side
  padding

### Requirement: Footer

A footer with the Component Dock attribution link.

#### Scenario: Footer link

- **WHEN** I visit the Reachbox page
- **THEN** I see a footer with a link to https://www.componentdock.com/
