# Template: Formnook (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 06** — a centered two-column card contact
page with a form panel on the left and a map on the right, plus a row of
circular blue icon info cards below the main card.

- **Source slug:** `contact-form-06`
- **Source URL:** https://colorlib.com/wp/template/contact-form-06/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-06/ (404 at
  time of prep)
- **Screenshot analyzed:** https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-06.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from screenshot analysis (preview CSS unavailable — 404).

| Token                | Value                                        |
| -------------------- | -------------------------------------------- |
| Font family          | `"Poppins", Arial, sans-serif`               |
| Body font size       | 14px                                         |
| Body line-height     | 1.8                                          |
| Body color           | `#666666`                                    |
| Page background      | `#f4f4f4` (light warm gray)                 |
| Heading color        | `#000000`                                    |
| Brand / accent color | `#4e73df` (royal blue)                       |
| Button hover         | `#3b5fc0` (darker blue)                     |
| Button border-radius | 5px                                          |
| Button shadow        | `0px 10px 20px -6px rgba(0,0,0,0.12)`       |
| Card background      | `#ffffff`                                    |
| Card shadow          | `0px 21px 41px -13px rgba(0,0,0,0.18)`      |
| Card border-radius   | 10px                                         |
| Input style          | Light gray border (`1px solid #e1e1e1`), rounded corners |
| Input font size      | 16px                                         |
| Placeholder color    | `rgba(0,0,0,0.4)`                           |
| Input focus border   | `#4e73df` (brand blue)                      |
| Label style          | Uppercase, 13px, font-weight 600, color `#000000` |
| Info circle background| `#4e73df` (brand blue)                      |
| Info circle size     | ~56px                                        |
| Info circle color    | `#ffffff` (icon color)                       |
| Info text color      | `#666666`                                    |
| Info link color      | `#4e73df` (brand blue)                      |
| Success message      | `#28a745`, 18px, font-weight 500            |
| Error message        | `red`, 12px                                  |

## Visual design (from screenshot)

- Light warm-gray page background (`#f4f4f4`).
- A page title ("Contact Form #06") centered above the card — we replace with
  the template name or omit (no navbar needed).
- A centered card with `border-radius: 10px` and a large drop shadow. The card
  is a two-column layout:
  - **Left column** (white background, padded): "Contact Us" heading (bold,
    dark), form with labeled fields. Form fields have a two-column row at top:
    FULL NAME + EMAIL ADDRESS side by side, then SUBJECT full width, then
    MESSAGE textarea full width. Labels are uppercase, 13px, bold. Inputs have
    light gray borders with rounded corners (not underline-style). A dark blue
    "Send Message" button with rounded corners sits below the form.
  - **Right column** (full height): a map image showing the New York City area
    (replace with a placeholder map or image).
- Below the main card: a row of four circular info items, each with a dark blue
  circle containing a white icon, followed by a label and value/link:
  - Location pin → Address: 198 West 21th Street, Suite 721 New York NY 10016
  - Phone icon → Phone: + 1235 2355 98
  - Paper plane icon → Email: info@yoursite.com
  - Globe icon → Website: yoursite.com
- Minimal, clean aesthetic — no navbar, no separate footer beyond the info row.

## Requirements

### Requirement: Page layout

The page renders a centered card on a light gray background with a centered page
title above it.

#### Scenario: Full-page background

```gherkin
Given the user loads the page
Then the page background color is "#f4f4f4"
And the content is vertically and horizontally centered
```

#### Scenario: Card container

```gherkin
Given the user loads the page
Then a card container is visible with rounded corners and a drop shadow
And the card contains two side-by-side columns
```

### Requirement: Left column — heading

The left column displays a "Contact Us" heading.

#### Scenario: Heading present

```gherkin
Given the user views the left column
Then a "Contact Us" heading is visible
And the heading is bold and dark colored
```

### Requirement: Left column — contact form

The form has labeled fields and a submit button.

#### Scenario: Form fields present

```gherkin
Given the user views the contact form
Then there is a text input with label "FULL NAME"
And there is an email input with label "EMAIL ADDRESS"
And there is a text input with label "SUBJECT"
And there is a textarea with label "MESSAGE"
```

#### Scenario: Name and email side by side

```gherkin
Given the user views the form fields
Then the FULL NAME and EMAIL ADDRESS inputs are displayed side by side in a row
And the SUBJECT input is full width below them
And the MESSAGE textarea is full width below SUBJECT
```

#### Scenario: Input styling

```gherkin
Given the user views any form input
Then the input has a light gray border (#e1e1e1)
And the input has rounded corners
And the input font size is 16px
And the label above the input is uppercase and bold
```

#### Scenario: Submit button

```gherkin
Given the user views the form
Then a "Send Message" button is visible below the textarea
And the button has a dark blue background (#4e73df)
And the button has white text
And the button has rounded corners (border-radius ~5px)
```

### Requirement: Right column — map image

The right column shows a map image.

#### Scenario: Map placeholder

```gherkin
Given the user views the right column
Then a map image fills the entire column height
And the image uses cover sizing and center positioning
```

### Requirement: Info row — contact details

Below the main card, a row of four circular info items with icons.

#### Scenario: Info items present

```gherkin
Given the user views below the card
Then four info items are displayed in a horizontal row
And each item has a circular blue icon above a text label
```

#### Scenario: Address info item

```gherkin
Given the user views the info row
Then the first item shows a location pin icon
And the text reads "Address: 198 West 21th Street, Suite 721 New York NY 10016"
```

#### Scenario: Phone info item

```gherkin
Given the user views the info row
Then the second item shows a phone icon
And the text reads "Phone: + 1235 2355 98"
```

#### Scenario: Email info item

```gherkin
Given the user views the info row
Then the third item shows a paper plane icon
And the text reads "Email: info@yoursite.com"
And the email is displayed as a blue link
```

#### Scenario: Website info item

```gherkin
Given the user views the info row
Then the fourth item shows a globe icon
And the text reads "Website: yoursite.com"
And the website is displayed as a blue link
```

### Requirement: Responsive behavior

#### Scenario: Mobile layout

```gherkin
Given the user views the page on a viewport narrower than 768px
Then the two card columns stack vertically
And the form column appears above the map column
And the info row wraps into a 2x2 grid
```

## Verification checklist

- [ ] Card renders centered on light gray background
- [ ] Two-column layout: form left, map right
- [ ] "Contact Us" heading present
- [ ] Four form fields with uppercase labels and bordered inputs
- [ ] FULL NAME and EMAIL ADDRESS side by side; SUBJECT and MESSAGE full width
- [ ] Dark blue "Send Message" button with correct radius
- [ ] Right column has map placeholder image
- [ ] Four info items below card with circular blue icons
- [ ] Info items show Address, Phone, Email, Website
- [ ] Email and Website links styled in blue
- [ ] Responsive: stacks vertically on mobile (< 768px)
- [ ] Font: Poppins loaded via Google Fonts
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains `formnook.free.componentdock.com`
- [ ] package.json homepage is `https://formnook.free.componentdock.com`
