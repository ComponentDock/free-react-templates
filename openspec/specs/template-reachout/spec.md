# Template: Reachout (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 13** — a split-screen contact page with a blue-to-cyan gradient background. Left side shows contact info for two office locations (city, address, phone, email) over the gradient. Right side has a white form card with Name, Email, Message fields and a blue "Send Message" button.

- **Source slug:** `contact-form-13`
- **Source URL:** https://colorlib.com/wp/template/contact-form-13/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/contact-form-13/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (from CSS)

| Token           | Value                         | Notes                     |
| --------------- | ----------------------------- | ------------------------- |
| Gradient start  | `#66a6ff` (blue)              | Page background left      |
| Gradient end    | `#89f7fe` (light cyan)        | Page background right     |
| Gradient angle  | 120deg                        | Linear gradient direction |
| Body font       | `'Roboto', sans-serif`        | Body text                 |
| Heading font    | `'Poppins', sans-serif`       | All headings              |
| Heading color   | `#000` (black)                | h1–h6 default             |
| Body text color | `#999` (gray)                 | Paragraphs                |
| White text      | `#ffffff`                     | Contact info on gradient  |
| Form background | `#ffffff`                     | White card with shadow    |
| Form shadow     | `0 15px 30px rgba(0,0,0,0.2)` | Card elevation            |
| Form padding    | `40px 70px`                   | Inside the form card      |
| Input border    | `#d9d9d9`                     | Light gray                |
| Input height    | `55px`                        | Uniform input height      |
| Button color    | `#007bff` (Bootstrap primary) | Blue button               |
| Button radius   | `4px`                         | Rounded corners           |
| Button shadow   | `0 1px 5px rgba(0,0,0,0.1)`   | Subtle elevation          |
| Button height   | `55px`                        | Matches inputs            |
| Section heading | `14px`, uppercase, `#888`     | "Send us a message"       |

## Requirements

### Requirement: Page layout

The page renders a full-viewport gradient background with two side-by-side columns.

#### Scenario: Page renders with split layout

- **WHEN** I visit the Reachout page
- **THEN** I see a blue-to-cyan gradient background
- **AND** I see two columns: left (contact info) and right (form card)

#### Scenario: Gradient background fills viewport

- **WHEN** I view the page
- **THEN** the background has a gradient from blue (#66a6ff) to light cyan (#89f7fe)

### Requirement: Contact information (left column)

The left column displays contact details for two office locations.

#### Scenario: Two-city contact layout

- **WHEN** I view the left column
- **THEN** I see two columns of contact details side by side (London and New York)

#### Scenario: Each city shows address, phone, email

- **WHEN** I view a city's contact section
- **THEN** I see the city name as a heading
- **AND** I see an address with a map icon
- **AND** I see a phone number with a phone icon
- **AND** I see an email address with an envelope icon

#### Scenario: Contact info uses white text

- **WHEN** I view the contact info on the gradient background
- **THEN** all text and icons are white

### Requirement: Contact form (right column)

The right column contains a white card with a contact form.

#### Scenario: Form card styling

- **WHEN** I view the right column
- **THEN** I see a white card with a shadow
- **AND** the card has the heading "Send us a message"

#### Scenario: Form fields

- **WHEN** I look at the form
- **THEN** I see a "Name" text input
- **AND** I see an "Email" text input
- **AND** I see a "Message" textarea
- **AND** I see a "Send Message" button

#### Scenario: Submit button is full width and blue

- **WHEN** I view the submit button
- **THEN** it spans the full width of the form
- **AND** it has a blue background with white text
- **AND** it has rounded corners

### Requirement: Form submission

The form handles submission gracefully.

#### Scenario: Form submits without page reload

- **WHEN** I fill in Name, Email, Message and click "Send Message"
- **THEN** the form submits without a page reload

### Requirement: Footer

Every template's footer links to Component Dock.

#### Scenario: Footer contains Component Dock link

- **WHEN** I view the page footer
- **THEN** I see a link to https://www.componentdock.com/
- **AND** the link text references "Component Dock"

### Requirement: Accessibility

The page is accessible and uses semantic HTML.

#### Scenario: Semantic elements

- **WHEN** I inspect the page structure
- **THEN** I see a `<main>` element wrapping the content
- **AND** form fields have associated `<label>` elements
- **AND** the form button is a `<button>` element

#### Scenario: ARIA attributes

- **WHEN** I view the form
- **THEN** each input has an `id` matching its label's `htmlFor`
