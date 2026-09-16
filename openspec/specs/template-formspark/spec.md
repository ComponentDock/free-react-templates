# Template: FormSpark (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 04** — a two-column contact page with a
deep purple form panel on the left and a white contact-info panel on the right,
centered on a light gray background.

- **Source slug:** `contact-form-04`
- **Source URL:** https://colorlib.com/wp/template/contact-form-04/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-04/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

| Token               | Value                  | Notes                                              |
| ------------------- | ---------------------- | -------------------------------------------------- |
| Brand purple        | `#512D97`              | Form panel background, primary accent              |
| Background          | `#FAFAFA`              | Page background (very light gray)                  |
| Card surface        | `#FFFFFF`              | Contact-info panel background                      |
| Text primary        | `#333333`              | Headings, body copy on white                       |
| Text secondary      | `#999999`              | Input placeholders, lighter text                   |
| Text on purple      | `#FFFFFF`              | Form heading, labels, input text, button text      |
| Button bg           | `#512D97`              | Same as brand purple (blends with panel)           |
| Button text         | `#FFFFFF`              | White text on purple                               |
| Font — headings     | Playfair Display (serif) | "Send us a message", "Contact us" headings       |
| Font — body         | Poppins (sans-serif)   | Labels, contact info, input placeholders, button   |
| Input style         | Underline (white line)  | White bottom-border inputs on purple background   |
| Card border-radius  | ~4px                   | Subtle rounded corners on the card                 |
| Section spacing     | ~60px vertical         | Generous padding inside the purple panel           |

## Requirements

### Requirement: Page layout

The page renders a centered two-column card on a light gray background with a
page title above it.

#### Scenario: Page title displayed

- **WHEN** I visit the FormSpark page
- **THEN** the page title "Contact Form #04" is displayed centered above the card

#### Scenario: Two-column card rendered

- **WHEN** I visit the FormSpark page
- **THEN** I see a centered card with two equal columns on a light gray background

### Requirement: Left column — form panel (purple)

The left column has a deep purple background and contains the contact form.

#### Scenario: Purple form panel

- **WHEN** I visit the FormSpark page
- **THEN** the left column has a purple (#512D97) background

#### Scenario: Form heading

- **WHEN** I visit the FormSpark page
- **THEN** the left column displays "Send us a message" as a heading in white

#### Scenario: Name input field

- **WHEN** I visit the FormSpark page
- **THEN** I see a "Name" input field with an underline-style white border on
  the purple background

#### Scenario: Email input field

- **WHEN** I visit the FormSpark page
- **THEN** I see an "Email" input field with an underline-style white border on
  the purple background

#### Scenario: Subject input field

- **WHEN** I visit the FormSpark page
- **THEN** I see a "Subject" input field with an underline-style white border on
  the purple background

#### Scenario: Message textarea

- **WHEN** I visit the FormSpark page
- **THEN** I see a "Message" textarea with an underline-style white border on
  the purple background, taller than the single-line inputs

#### Scenario: Send Message button

- **WHEN** I visit the FormSpark page
- **THEN** I see a "Send Message" button with white text below the form fields

### Requirement: Right column — contact info panel (white)

The right column has a white background and contains contact details.

#### Scenario: White info panel

- **WHEN** I visit the FormSpark page
- **THEN** the right column has a white background

#### Scenario: Info panel heading

- **WHEN** I visit the FormSpark page
- **THEN** the right column displays "Contact us" as a heading

#### Scenario: Info panel subtext

- **WHEN** I visit the FormSpark page
- **THEN** I see "We're open for any suggestion or just to have a chat" below
  the heading

#### Scenario: Address displayed

- **WHEN** I visit the FormSpark page
- **THEN** I see an address icon and text "198 West 21th Street, Suite 721
  New York NY 10016"

#### Scenario: Phone displayed

- **WHEN** I visit the FormSpark page
- **THEN** I see a phone icon and text "+ 1235 2355 98"

#### Scenario: Email displayed

- **WHEN** I visit the FormSpark page
- **THEN** I see an email icon and text "info@yoursite.com"

#### Scenario: Website displayed

- **WHEN** I visit the FormSpark page
- **THEN** I see a website/globe icon and text "yoursite.com"

### Requirement: Footer

The page includes a footer with a Component Dock link.

#### Scenario: Footer rendered

- **WHEN** I visit the FormSpark page
- **THEN** I see a footer with a link to "https://www.componentdock.com/"
  branded as "Component Dock"

### Requirement: Responsive layout

The two-column layout adapts to smaller viewports.

#### Scenario: Mobile layout

- **WHEN** I resize the viewport to under 768px wide
- **THEN** the two columns stack vertically (form panel above info panel)

#### Scenario: Tablet layout

- **WHEN** I resize the viewport to between 768px and 1024px wide
- **THEN** the two columns remain side by side but narrower

## Verification checklist

- [ ] Page title "Contact Form #04" renders centered above the card
- [ ] Two-column card is centered on a #FAFAFA background
- [ ] Left column has #512D97 purple background
- [ ] "Send us a message" heading in white on the purple panel
- [ ] Four form fields: Name, Email, Subject, Message (textarea)
- [ ] Input fields use underline-style white borders on purple
- [ ] "Send Message" button with white text below the form
- [ ] Right column has white background with "Contact us" heading
- [ ] Contact info: address, phone, email, website with icons
- [ ] Footer links to componentdock.com
- [ ] Responsive: columns stack on mobile (<768px)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer branded as "Component Dock"
- [ ] Placeholder images via picsum.photos if any images used
- [ ] Font loaded via Google Fonts link in index.html
