# Template: FormDesk (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V18** — a split-screen contact page with
a lifestyle desk-photo on the left and a clean contact form with dropdown on
the right, finished with social media icons.

- **Source slug:** `contact-form-v18`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v18/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v18/ (404 at
  prep time — design tokens extracted from screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v18.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the ColorLib screenshot (preview unavailable):

| Token | Value | Notes |
|-------|-------|-------|
| Brand / accent color | `#5b6abf` (indigo-blue) | Submit button background, dropdown highlight |
| Page background | `#ffffff` (white) | Right panel and page |
| Left panel | Full-bleed photo | Lifestyle desk scene (laptop, coffee, notebook, phone) |
| Heading text | `#212121` (near-black) | "Send Us A Message" heading |
| Label text | `#333333` (dark gray) | Uppercase field labels |
| Placeholder text | `#aaaaaa` (gray-400) | Input placeholder text |
| Input border | `#e0e0e0` (gray-300) | Light gray input borders |
| Button background | `#5b6abf` (indigo-blue) | "SEND" button |
| Button text | `#ffffff` | White button label |
| Dropdown highlight | `#5b6abf` (indigo-blue) | Selected item background in dropdown |
| Social Facebook | `#3b5998` | Facebook icon circle |
| Social Twitter | `#1da1f2` | Twitter icon circle |
| Social Instagram | `#e1306c` | Instagram icon circle |
| Font family | `"Jost", sans-serif` | Inferred from visual weight/letter-spacing |
| Border radius (button) | `4px` | Slightly rounded submit button |
| Border radius (inputs) | `0px` | Square inputs (no visible rounding) |

## Requirements

### Requirement: Split-screen layout

The page SHALL render a two-column layout with a full-height photo on the left
and a contact form on the right.

#### Scenario: Two-column layout

- **WHEN** I visit the FormDesk page
- **THEN** a left column (full-height desk photo) and a right column (white
  contact form) SHALL be displayed side by side

#### Scenario: Left column photo

- **WHEN** I view the left column
- **THEN** it SHALL display a full-height lifestyle desk photograph (laptop,
  coffee cup, notebook, smartphone on a dark desk surface)

#### Scenario: Right column background

- **WHEN** I view the right column
- **THEN** it SHALL have a white background

### Requirement: Contact form

The right column SHALL display a contact form titled "Send Us A Message".

#### Scenario: Form heading

- **WHEN** I view the form
- **THEN** a heading "Send Us A Message" SHALL be displayed at the top in
  dark text

#### Scenario: Full name field

- **WHEN** I view the form
- **THEN** a text input SHALL be displayed under the label "FULL NAME" with
  placeholder "Enter your name..."

#### Scenario: Email address field

- **WHEN** I view the form
- **THEN** an email input SHALL be displayed under the label "EMAIL ADDRESS"
  with placeholder "Enter your email..."

#### Scenario: Service dropdown

- **WHEN** I view the form
- **THEN** a select/dropdown SHALL be displayed under the label "WHAT DO YOU
  NEED?" with default text "Please chooses" and options including
  "UI/UX Design", "eCommerce Bussiness", and "Online Services"

#### Scenario: Dropdown highlight

- **WHEN** I open the dropdown
- **THEN** the currently focused option SHALL be highlighted with the brand
  indigo-blue color

### Requirement: Submit button

The form SHALL have a blue/indigo submit button.

#### Scenario: Submit button displayed

- **WHEN** I view the form
- **THEN** a "SEND" button SHALL be displayed at the bottom of the form with
  an indigo-blue background, white text, and slightly rounded corners

#### Scenario: Submit button hover

- **WHEN** I hover over the submit button
- **THEN** the button SHALL show a hover state (darker shade or shadow)

#### Scenario: Form submission

- **WHEN** I fill all fields and click "SEND"
- **THEN** the form SHALL submit (or show a success state)

### Requirement: Social media icons

Below the form, social media icons SHALL be displayed.

#### Scenario: Social icons displayed

- **WHEN** I scroll below the submit button
- **THEN** three social media icons SHALL be displayed: Facebook, Twitter,
  and Instagram, each in a colored circle

#### Scenario: Social icon colors

- **WHEN** I view the social icons
- **THEN** Facebook SHALL be blue (`#3b5998`), Twitter SHALL be light blue
  (`#1da1f2`), and Instagram SHALL be pink/red (`#e1306c`)

### Requirement: Footer

The page footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** I scroll to the bottom of the page
- **THEN** I SHALL see a footer with a link to "https://www.componentdock.com/"
  branded as "Component Dock"

### Requirement: Responsive layout

#### Scenario: Mobile layout

- **WHEN** I view the page on a mobile device (viewport < 768px)
- **THEN** the two columns SHALL stack vertically with the photo on top and
  the form below

## Verification checklist

- [ ] Two-column layout with desk photo on left, form on right
- [ ] Full-height lifestyle photo (laptop, coffee, notebook, phone)
- [ ] "Send Us A Message" heading
- [ ] Full Name input with placeholder
- [ ] Email Address input with placeholder
- [ ] Service dropdown with "UI/UX Design", "eCommerce Bussiness", "Online Services"
- [ ] "SEND" button with indigo-blue background
- [ ] Social media icons (Facebook, Twitter, Instagram) in colored circles
- [ ] Footer with Component Dock link
- [ ] Responsive: columns stack on mobile
- [ ] No ColorLib references in app code
- [ ] `packages/ui` components reused where possible
