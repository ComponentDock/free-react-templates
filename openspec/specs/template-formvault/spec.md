# Template: FormVault (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 13** — a two-column contact page with a
blue-to-cyan gradient background, a left-side contact info panel with two
location columns, and a white card form on the right.

- **Source slug:** `contact-form-13`
- **Source URL:** https://colorlib.com/wp/template/contact-form-13/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/contact-form-13/
  (live preview available at the `/theme/bootstrap/` path)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from live preview CSS)

| Token               | Value                                      | Source                        |
| ------------------- | ------------------------------------------ | ----------------------------- |
| Font family (body)  | `"Roboto", sans-serif`                     | `style.css` body              |
| Font family (headings) | `"Poppins", sans-serif`                 | `style.css` h1–h6             |
| Body text color     | `#999`                                     | `style.css` body color        |
| Heading color       | `#000` (overridden to white on gradient bg)| `style.css` h1–h6 + `.text-white` |
| Background gradient | `linear-gradient(120deg, #66a6ff 0%, #89f7fe 100%)` | `style.css` body bg |
| Form card bg        | `#ffffff`                                  | `.box` background             |
| Card shadow         | `0 15px 30px 0 rgba(0,0,0,0.2)`           | `.box` box-shadow             |
| Card padding        | `40px 70px`                                | `.box` padding                |
| Card heading color  | `#888`                                     | `.heading` color              |
| Card heading style  | uppercase, letter-spacing .05rem, font-weight 400, font-size 14px, text-align center | `.heading` |
| Form label color    | `#000`                                     | `.col-form-label` color       |
| Input border        | `1px solid #d9d9d9`                        | `.form-control` border        |
| Input border-radius | `4px`                                      | `.form-control` border-radius |
| Input height        | `55px`                                     | `.form-control` height        |
| Button primary bg   | `#ccda46` (yellow-green)                   | Bootstrap override            |
| Button primary text | `#212529` (dark gray)                      | Bootstrap override            |
| Button hover bg     | `#c0d02a`                                  | Bootstrap override            |
| Button active bg    | `#b7c628`                                  | Bootstrap override            |
| Button border-radius| `4px`                                      | `.btn` border-radius          |
| Button height       | `55px`                                     | `.btn` height                 |
| Button shadow       | `0 1px 5px 0 rgba(0,0,0,0.1)`             | `.btn` box-shadow             |
| Success message     | `#55A44E`                                  | `#form-message-success`       |
| Error message       | `#B90B0B`                                  | `#form-message-warning`       |

## Visual design notes (from screenshot)

The screenshot shows a full-page blue-to-cyan gradient background. The left
half has white text: a "Contact Info" heading, a paragraph of lorem ipsum, and
two location columns ("London" and "New York") each with address, phone, and
email entries using icomoon icons. The right half is a white elevated card with
a shadow containing the form heading "SEND US A MESSAGE", three fields (Name,
Email, Message textarea), and a full-width yellow-green submit button. The
overall aesthetic is clean, modern, with a gradient hero feel applied to the
entire page.

## Requirements

### Requirement: Page layout

The page renders a two-column layout on a full-page gradient background with a
centered container.

#### Scenario: Gradient background rendered

- **WHEN** I visit the FormVault page
- **THEN** the page background is a gradient from blue (#66a6ff) to cyan (#89f7fe)

#### Scenario: Two-column layout

- **WHEN** I visit the FormVault page
- **THEN** I see a container with two equal-width columns (left info, right form)

### Requirement: Left column — contact info panel

The left column contains a heading, description text, and two location blocks
arranged side by side.

#### Scenario: Contact Info heading

- **WHEN** I visit the FormVault page
- **THEN** the left column displays a "Contact Info" heading in white, bold,
  Poppins font

#### Scenario: Description text

- **WHEN** I visit the FormVault page
- **THEN** below the heading I see a white paragraph describing the company

#### Scenario: Two location columns

- **WHEN** I visit the FormVault page
- **THEN** I see two location blocks side by side: "London" and "New York"

#### Scenario: Location details — London

- **WHEN** I visit the FormVault page
- **THEN** the London block shows a map icon + "34 Street Name, City Name Here, United States",
  a phone icon + "+1 (222) 345 6789", and an email icon + "info@mywebsite.com"

#### Scenario: Location details — New York

- **WHEN** I visit the FormVault page
- **THEN** the New York block shows the same structure and placeholder data as London

### Requirement: Right column — contact form card

The right column contains a white elevated card with a contact form.

#### Scenario: White card rendered

- **WHEN** I visit the FormVault page
- **THEN** the right column displays a white card with padding 40px 70px and a
  box-shadow of 0 15px 30px rgba(0,0,0,0.2)

#### Scenario: Form heading

- **WHEN** I visit the FormVault page
- **THEN** inside the card I see "Send us a message" in uppercase, centered,
  color #888, letter-spacing .05rem, font-size 14px

#### Scenario: Name field

- **WHEN** I visit the FormVault page
- **THEN** I see a "Name" label and a text input with border #d9d9d9, border-radius 4px

#### Scenario: Email field

- **WHEN** I visit the FormVault page
- **THEN** I see an "Email" label and a text input

#### Scenario: Message field

- **WHEN** I visit the FormVault page
- **THEN** I see a "Message" label and a textarea (7 rows, resizable vertically)

#### Scenario: Submit button

- **WHEN** I visit the FormVault page
- **THEN** I see a full-width "Send Message" button with yellow-green background
  (#ccda46), dark text (#212529), border-radius 4px, height 55px

### Requirement: Form validation

#### Scenario: Empty form submission

- **WHEN** I click "Send Message" without filling any fields
- **THEN** the form shows validation errors

#### Scenario: Successful submission

- **WHEN** I fill all fields and submit
- **THEN** I see a success message "Your message was sent, thank you!" in green (#55A44E)

### Requirement: Footer

#### Scenario: Component Dock footer link

- **WHEN** I scroll to the bottom of the page
- **THEN** I see a footer with a link to https://www.componentdock.com/

## Verification checklist

- [ ] Two-column layout on gradient background
- [ ] Left: "Contact Info" heading (white, Poppins, bold)
- [ ] Left: Description paragraph (white, Roboto)
- [ ] Left: Two location blocks (London, New York) with icons
- [ ] Right: White card with shadow
- [ ] Right: "Send us a message" heading (uppercase, centered, #888)
- [ ] Right: Name, Email, Message fields with correct styling
- [ ] Right: Yellow-green submit button (#ccda46)
- [ ] Form validation and success message
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] Uses Poppins for headings, Roboto for body (Google Fonts)
- [ ] Uses lucide-react icons (map, phone, mail)
