# Template: Formlane (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 13** — a split-screen contact page with a
full-height Google Maps background on the left and a white contact form card
overlaid on the right. A floating green phone pill sits on the map area. The form
has underline-style inputs with a magenta-red gradient accent.

- **Source slug:** `contact-form-v13`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v13/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v13/ (404 at
  time of prep — design tokens extracted from source HTML + CSS)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v13.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page layout

The page renders a full-viewport split-screen layout with a Google Maps embed on
the left and a contact form card on the right.

#### Scenario: Full viewport height layout

- **WHEN** I visit the Formlane page
- **THEN** the page occupies the full viewport height
- **AND** a Google Maps embed occupies the left portion of the viewport
- **AND** a white form card occupies the right portion (640px wide, full height)

#### Scenario: Form card overlay

- **WHEN** I visit the Formlane page
- **THEN** the form card is positioned on the right side with white background
- **AND** the card has a 2px border radius and vertical padding of 82px top, 33px bottom
- **AND** the card has 55px horizontal padding

### Requirement: Google Maps embed

The left side displays an interactive Google Maps embed with a custom marker.

#### Scenario: Map renders

- **WHEN** I visit the Formlane page
- **THEN** an interactive map is displayed on the left side
- **AND** the map is centered approximately on coordinates 40.72, -73.99 (NYC area)
- **AND** the map has a custom red marker pin

#### Scenario: Map is interactive

- **WHEN** I drag on the map area
- **THEN** the map pans (interactive map)

### Requirement: Floating phone bar

A green pill-shaped phone number bar floats on the map area.

#### Scenario: Phone bar visible

- **WHEN** I visit the Formlane page
- **THEN** a floating phone pill is visible on the map area
- **AND** the pill has a green (#39b54a) background with white text
- **AND** the pill has a 25px border-radius (pill shape)
- **AND** the pill displays a phone icon and the text "(+100) 345 6389"
- **AND** the pill is positioned at the vertical center of the map

#### Scenario: Phone bar hidden on mobile

- **WHEN** I view the page on a viewport narrower than 768px
- **THEN** the phone bar becomes transparent with green text at the bottom

### Requirement: Contact form

The form card contains a title, four form fields, and a submit button.

#### Scenario: Form title

- **WHEN** I visit the Formlane page
- **THEN** the heading "Contact Us" is displayed at the top of the form
- **AND** the heading uses Poppins Bold, 39px, color #333333

#### Scenario: Form fields present

- **WHEN** I visit the Formlane page
- **THEN** the form contains Name, Email, Phone, and Message fields
- **AND** the Name field has a label "Name" and placeholder "Name..."
- **AND** the Email field has a label "Email" and placeholder "Email address..."
- **AND** the Phone field has a label "Phone" and placeholder "Phone Number..."
- **AND** the Message field has a label "Message" and placeholder "Questions/Comments..."

#### Scenario: Field labels

- **WHEN** I visit the Formlane page
- **THEN** each field label is displayed above its input
- **AND** labels use Poppins SemiBold, 18px, color #999999

#### Scenario: Underline input style

- **WHEN** I visit the Formlane page
- **THEN** all form inputs have a bottom border only (underline style)
- **AND** the bottom border is 2px solid #dbdbdb
- **AND** input text uses Poppins Regular, 22px, color #555555

#### Scenario: Focus indicator

- **WHEN** I click into a form field
- **THEN** a gradient line appears below the field
- **AND** the gradient goes from #d5007d (magenta) to #e53935 (red)

#### Scenario: Message textarea

- **WHEN** I visit the Formlane page
- **THEN** the Message textarea is multi-line with adequate height

#### Scenario: Send button

- **WHEN** I visit the Formlane page
- **THEN** a "Send" button is centered below the form fields
- **AND** the button has a magenta-red gradient background
  (`linear-gradient(-135deg, #d5007d, #e53935, #d5007d, #e53935)`)
- **AND** the button text is white
- **AND** the button has a 25px border-radius (pill shape)
- **AND** the button height is 50px with a minimum width of 244px
- **AND** the button uses Poppins Medium, 16px

#### Scenario: Button hover effect

- **WHEN** I hover over the Send button
- **THEN** a sweeping gradient animation reveals from left to right

### Requirement: Form validation

The form validates required fields before allowing submission.

#### Scenario: Required field validation

- **WHEN** I leave the Name field empty and try to submit
- **THEN** the form shows a validation error for the Name field

#### Scenario: Email format validation

- **WHEN** I enter an invalid email address and try to submit
- **THEN** the form shows a validation error for the Email field

#### Scenario: Message required

- **WHEN** I leave the Message field empty and try to submit
- **THEN** the form shows a validation error for the Message field

### Requirement: Footer links to Component Dock

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the Formlane page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

### Requirement: Mobile responsiveness

The layout adapts for narrow viewports.

#### Scenario: Mobile layout

- **WHEN** I view the page on a viewport narrower than 768px
- **THEN** the form card takes full width
- **AND** the Google Maps area is hidden

## Design tokens

| Token            | Value                                                         | Notes                                              |
| ---------------- | ------------------------------------------------------------- | -------------------------------------------------- |
| Brand gradient   | `linear-gradient(45deg, #d5007d, #e53935)`                   | Focus indicator, button background                 |
| Button gradient  | `linear-gradient(-135deg, #d5007d, #e53935, #d5007d, #e53935)` | Send button background (magenta-red repeating)    |
| Phone pill green | `#39b54a`                                                     | Floating phone bar background                      |
| Form card bg     | `#FFFFFF`                                                     | White card background                              |
| Form card radius | `2px`                                                         | Very slight rounding                               |
| Form title       | `#333333`                                                     | "Contact Us" heading color                         |
| Label color      | `#999999`                                                     | Field label text                                   |
| Input text       | `#555555`                                                     | Typed text color                                   |
| Placeholder      | `#cccccc`                                                     | Placeholder text color                             |
| Input border     | `#dbdbdb` (2px solid bottom)                                  | Underline-style input borders                      |
| Focus gradient   | `#d5007d` → `#e53935` (45deg)                                | Underline accent on focus                          |
| Button bg        | Magenta-red gradient (same as brand gradient)                 | 50px height, 244px min-width                       |
| Button text      | `#FFFFFF`                                                     | White on gradient background                       |
| Button radius    | `25px`                                                        | Pill shape                                         |
| Body text        | `#666666`                                                     | Paragraph and link text                            |
| Font — headings  | Poppins Bold                                                  | 39px for form title                                |
| Font — labels    | Poppins SemiBold                                              | 18px for field labels                              |
| Font — input     | Poppins Regular                                               | 22px for input text                                |
| Font — button    | Poppins Medium                                                | 16px for Send button                               |
| Font — phone bar | Poppins Medium                                                | 16px for floating phone pill                       |
| Responsive 1200px| Card shrinks to 440px, map takes remaining space              | Tablet breakpoint                                  |
| Responsive 768px | Card goes full width, map hidden, phone bar at bottom         | Mobile breakpoint                                  |

## Verification checklist

- [ ] Split-screen layout: map left, form right
- [ ] Google Maps renders with marker
- [ ] Floating phone pill with green bg on map
- [ ] "Contact Us" heading with correct typography
- [ ] Four form fields: Name, Email, Phone, Message
- [ ] Underline input style with correct colors
- [ ] Focus gradient indicator on each field
- [ ] Pill-shaped Send button with magenta-red gradient
- [ ] Button hover animation (sweeping gradient)
- [ ] Form validation for required fields
- [ ] Footer links to Component Dock
- [ ] Mobile responsive (full-width card, hidden map)
- [ ] No ColorLib references in app code
