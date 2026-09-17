# Template: FormGate (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 09** — a dark-background contact page
with a centered header, three-column contact info row (tan/gold circular icons),
a "Get in touch with us" heading, and a full-width form (Name, Email, Subject,
Message textarea) with a tan/gold "SEND MESSAGE" button.

- **Source slug:** `contact-form-09`
- **Source URL:** https://colorlib.com/wp/template/contact-form-09/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-09/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

| Token       | Value                                  | Use                                                        |
| ----------- | -------------------------------------- | ---------------------------------------------------------- |
| Page bg     | `#1a1a1a` (near-black)                | Full-viewport solid dark background                        |
| Brand       | `#c9a96e` (tan/gold)                  | Icon circles, button background, accent highlights         |
| Ink         | `#ffffff` (white)                      | Headings, body text, label text                            |
| Muted       | `#aaaaaa` (light gray)                | Placeholder text, secondary info text                      |
| Input bg    | `#222222` (dark gray)                 | Form field backgrounds (slightly lighter than page)        |
| Input text  | `#ffffff`                              | Typed text in form fields                                  |
| Placeholder | `#999999`                             | Input placeholder labels (Name, Email, Subject, Message)   |
| Button text | `#1a1a1a` (dark)                      | "SEND MESSAGE" button label                                |
| Font        | Google Fonts 'Open Sans' 400/600/700  | Sans-serif body/heading font                               |
| Icons       | Circular, 60px diameter, 50% radius   | tan/gold `#c9a96e` background, white lucide icon inside    |
| Button      | Full-width, no border-radius (rectangular) | tan/gold background, dark uppercase text, ~50px height |
| Inputs      | Full-width, no visible border, dark bg | Height ~50px, left-aligned placeholder                     |
| Textarea    | Full-width, no visible border, dark bg | Minimum 120px tall, resizable                              |

## Requirements

### Requirement: Page layout

The page renders a full-viewport dark background with centered content.

#### Scenario: Dark background displayed

- **WHEN** I visit the FormGate page
- **THEN** the page has a near-black background (`#1a1a1a` or equivalent)

#### Scenario: Centered content

- **WHEN** I visit the FormGate page
- **THEN** all content is centered horizontally with appropriate max-width and padding

### Requirement: Page title

A large heading displays the template name at the top of the page.

#### Scenario: Title displayed

- **WHEN** I visit the FormGate page
- **THEN** I see a centered heading with the template name in white text

### Requirement: Contact info row

Three columns display contact information (Address, Phone, Email) with circular tan/gold icons.

#### Scenario: Three columns rendered

- **WHEN** I visit the FormGate page
- **THEN** I see three columns arranged horizontally, centered on the page

#### Scenario: Address column

- **WHEN** I visit the FormGate page
- **THEN** the left column shows a circular tan/gold icon (location pin), "Address:" label, and address text "198 West 21th Street, Suite 721 New York NY 10016"

#### Scenario: Phone column

- **WHEN** I visit the FormGate page
- **THEN** the center column shows a circular tan/gold icon (phone), "Phone:" label, and phone number "+ 1235 2355 98"

#### Scenario: Email column

- **WHEN** I visit the FormGate page
- **THEN** the right column shows a circular tan/gold icon (paper plane), "Email:" label, and email "info@yoursite.com"

#### Scenario: Icon circles styled

- **WHEN** I visit the FormGate page
- **THEN** each contact icon is displayed inside a 60px diameter circle with tan/gold background and a white icon

#### Scenario: Contact labels styled

- **WHEN** I visit the FormGate page
- **THEN** each contact label ("Address:", "Phone:", "Email:") is in tan/gold color, bold

#### Scenario: Contact values styled

- **WHEN** I visit the FormGate page
- **THEN** each contact value (address, phone number, email) is in white or light gray text

### Requirement: Form heading

A heading separates the contact info from the form.

#### Scenario: Form heading displayed

- **WHEN** I visit the FormGate page
- **THEN** I see a "Get in touch with us" heading in white text, centered above the form

### Requirement: Contact form

The page contains a contact form with four fields and a submit button.

#### Scenario: Name input field

- **WHEN** I visit the FormGate page
- **THEN** I see a full-width Name input field with placeholder text "Name"

#### Scenario: Email input field

- **WHEN** I visit the FormGate page
- **THEN** I see a full-width Email input field with placeholder text "Email"

#### Scenario: Subject input field

- **WHEN** I visit the FormGate page
- **THEN** I see a full-width Subject input field with placeholder text "Subject"

#### Scenario: Message textarea

- **WHEN** I visit the FormGate page
- **THEN** I see a full-width Message textarea with placeholder text "Message" and at least 120px height

#### Scenario: Form fields styled consistently

- **WHEN** I visit the FormGate page
- **THEN** all input fields have a dark gray background (slightly lighter than page), no visible border, and white/gray placeholder text

#### Scenario: Send Message button

- **WHEN** I visit the FormGate page
- **THEN** I see a full-width "SEND MESSAGE" button with tan/gold background and dark uppercase text

### Requirement: Footer

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the FormGate page
- **THEN** I see "More templates at Component Dock" with a link to https://www.componentdock.com/

### Requirement: Form interactivity

The form fields accept user input and the form submits without error.

#### Scenario: Typing in Name field

- **WHEN** I type into the Name field
- **THEN** the field value updates to reflect my input

#### Scenario: Typing in Email field

- **WHEN** I type into the Email field
- **THEN** the field value updates to reflect my input

#### Scenario: Typing in Subject field

- **WHEN** I type into the Subject field
- **THEN** the field value updates to reflect my input

#### Scenario: Typing in Message field

- **WHEN** I type into the Message textarea
- **THEN** the field value updates to reflect my input

#### Scenario: Form submission

- **WHEN** I click the Send Message button
- **THEN** the form submits without throwing an error

## Verification checklist

- [ ] Page renders with dark background
- [ ] Title heading is centered and white
- [ ] Three-column contact info row with circular icons
- [ ] "Get in touch with us" heading displayed
- [ ] Four form fields (Name, Email, Subject, Message) with correct placeholders
- [ ] Full-width tan/gold SEND MESSAGE button
- [ ] Form accepts input in all fields
- [ ] Form submits without error
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` = `formgate.free.componentdock.com`
- [ ] `homepage` = `https://formgate.free.componentdock.com`
