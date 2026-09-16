# Template: Touchpoint (Contact Form)

## Purpose

Touchpoint is a two-column contact page in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Contact Form 01" free
template (source: https://colorlib.com/wp/template/contact-form-01/), built
under a DIFFERENT name (**Touchpoint**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based two-column layout: a white form card on the
left with "Get in touch" heading, four input fields (Name, Email, Subject,
Message), and a blue "Send Message" button; and a solid blue info card on the
right with "Contact us" heading and four contact items (address, phone, email,
website) each with a circular icon. The page sits on a light gray (#f5f5f5)
background.

## Requirements

### Requirement: Page Layout

The page SHALL display a centered two-column card layout on a light gray
background.

#### Scenario: Two-column card layout

- **WHEN** the user loads the page
- **THEN** a light gray background fills the page
- **AND** a two-column card layout is centered on the page
- **AND** the left card has a white background
- **AND** the right card has a blue background

#### Scenario: Responsive layout on mobile

- **WHEN** the viewport is narrow (≤768px)
- **THEN** the two cards stack vertically (form on top, contact info below)
- **AND** both cards span the full width with horizontal margins

### Requirement: Contact Form

The form card SHALL display "Get in touch" heading with four fields and a
submit button.

#### Scenario: Form heading displays "Get in touch"

- **WHEN** the user loads the page
- **THEN** the left card heading reads "Get in touch"
- **AND** the heading is dark text, bold, and large

#### Scenario: Form has four fields

- **WHEN** the user loads the page
- **THEN** the Name and Email fields are displayed side by side in a row
- **AND** the Subject field is displayed full width below them
- **AND** the Message textarea is displayed full width below Subject
- **AND** all fields have light gray borders and placeholder text

#### Scenario: Name field accepts text

- **WHEN** the user focuses the Name field and types a name
- **THEN** the text appears in the field

#### Scenario: Email field validates format

- **WHEN** the user enters an invalid email in the Email field
- **AND** the user clicks Send Message
- **THEN** a validation error is shown for the email field

#### Scenario: Message field is a textarea

- **WHEN** the user focuses the Message field and types a multi-line message
- **THEN** the textarea shows the entered text

#### Scenario: Send Message button submits form

- **WHEN** the user fills all required fields with valid data
- **AND** the user clicks "Send Message"
- **THEN** the form attempts submission (prevent default in React)
- **AND** no page navigation occurs (SPA behavior)

### Requirement: Contact Info Card

The contact info card SHALL display a heading and four contact items with icons.

#### Scenario: Contact info card displays heading and items

- **WHEN** the user loads the page
- **THEN** the right card heading reads "Contact us" in white
- **AND** four contact info items are visible

#### Scenario: Address item shows location details

- **WHEN** the user loads the page
- **THEN** the address item shows a location pin icon
- **AND** the text reads "Address: 198 West 21th Street, Suite 721 New York NY 10016"

#### Scenario: Phone item shows phone number

- **WHEN** the user loads the page
- **THEN** the phone item shows a phone icon
- **AND** the text reads "Phone: + 1235 2355 98"

#### Scenario: Email item shows email address

- **WHEN** the user loads the page
- **THEN** the email item shows a paper plane icon
- **AND** the text reads "Email: info@yoursite.com"

#### Scenario: Website item shows URL

- **WHEN** the user loads the page
- **THEN** the website item shows a globe icon
- **AND** the text reads "Website: yoursite.com"

#### Scenario: Contact info icons have circular backgrounds

- **WHEN** the user loads the page
- **THEN** each contact info icon is displayed inside a lighter blue circle

### Requirement: Button Styling

The Send Message button SHALL be blue with white text and rounded corners.

#### Scenario: Send Message button is blue with white text

- **WHEN** the user loads the page
- **THEN** the "Send Message" button has a blue background
- **AND** the button text is white
- **AND** the button has slightly rounded corners

#### Scenario: Button hover effect

- **WHEN** the user hovers over the Send Message button
- **THEN** the button darkens slightly or shows a hover state

### Requirement: Footer

The footer SHALL link to componentdock.com.

#### Scenario: Footer displays Component Dock link

- **WHEN** the user loads the page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"
