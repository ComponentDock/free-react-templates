# Template: Formedge (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 10** — a full-width dark background image
(city skyline) with a white form card overlaid on the right and contact info on
the left. Features a blue "Send Message" button.

- **Source slug:** `contact-form-10`
- **Source URL:** https://colorlib.com/wp/template/contact-form-10/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-10/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token            | Value                    | Notes                                            |
| ---------------- | ------------------------ | ------------------------------------------------ |
| Button blue      | `#4A90D9`                | Send Message button background                   |
| Card surface     | `#FFFFFF`                | White form card                                  |
| Text on dark     | `#FFFFFF`                | Headings, contact info on background image       |
| Text on white    | `#333333`                | Form heading, input text                         |
| Text secondary   | `#999999`                | Input placeholders                               |
| Input border     | `#E0E0E0`                | Bordered input boxes                             |
| Font — headings  | Playfair Display (serif) | "Contact Form #10", "Contact us", "Get in touch" |
| Font — body      | Poppins (sans-serif)     | Labels, contact info, button                     |
| Button radius    | 3px                      | Slight rounding                                  |
| Card radius      | 5px                      | Rounded corners on white card                    |
| Card shadow      | Light box-shadow         | Subtle shadow on white card                      |
| Background image | Dark city skyline        | Use picsum.photos seed for placeholder           |

## Requirements

### Requirement: Full-width dark background image

The page SHALL display a full-width dark background image (city skyline at night).

#### Scenario: Background image renders

- **WHEN** I visit the Formedge page
- **THEN** I see a full-width dark background image covering the viewport

### Requirement: Page title centered on background

The page SHALL display "Contact Form #10" centered at the top in white serif font.

#### Scenario: Title displays correctly

- **WHEN** I visit the Formedge page
- **THEN** I see "Contact Form #10" centered at the top in white text

### Requirement: Two-column content layout

The page SHALL display contact info on the left and a white form card on the right.

#### Scenario: Content layout renders

- **WHEN** I visit the Formedge page
- **THEN** I see contact info on the left and a white form card on the right

### Requirement: Contact info displays all items

The contact info section SHALL display address, phone, email, and website with white icons and uppercase labels.

#### Scenario: Address displayed

- **WHEN** I visit the Formedge page
- **THEN** I see a white icon and text "ADDRESS: 198 West 21th Street, Suite 721 New York NY 10016"

#### Scenario: Phone displayed

- **WHEN** I visit the Formedge page
- **THEN** I see a white icon and text "PHONE: + 1235 2355 98"

#### Scenario: Email displayed

- **WHEN** I visit the Formedge page
- **THEN** I see a white icon and text "EMAIL: info@yoursite.com"

#### Scenario: Website displayed

- **WHEN** I visit the Formedge page
- **THEN** I see a white icon and text "WEBSITE: yoursite.com"

### Requirement: Contact form displays all fields in white card

The form SHALL display in a white card with rounded corners and shadow, containing a "Get in touch" heading, Name, Email, Subject, Message fields, and a Send Message button.

#### Scenario: Form renders with all fields

- **WHEN** I visit the Formedge page
- **THEN** I see a white card with rounded corners and shadow
- **AND** the card contains a "Get in touch" heading
- **AND** I see a Name input field
- **AND** I see an Email input field
- **AND** I see a Subject input field
- **AND** I see a Message textarea
- **AND** I see a Send Message button

#### Scenario: Form fields are stacked vertically

- **WHEN** I visit the Formedge page
- **THEN** all form fields are displayed in a single vertical column

#### Scenario: Send Message button is styled

- **WHEN** I visit the Formedge page
- **THEN** the Send Message button has a blue background and white text

### Requirement: Responsive behavior

The columns SHALL stack vertically on mobile viewports.

#### Scenario: Columns stack on mobile

- **WHEN** I visit the Formedge page on a mobile viewport
- **THEN** the contact info and form card stack vertically
- **AND** the form card appears below the contact info

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer displays Component Dock link

- **WHEN** I visit the Formedge page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock
