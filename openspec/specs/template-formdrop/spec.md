# Template: Formdrop (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 04** — a two-column contact page with a
deep purple form panel on the left and a white contact-info panel on the right.
Features a pink/magenta accent button and a decorative heading underline.

- **Source slug:** `contact-form-04`
- **Source URL:** https://colorlib.com/wp/template/contact-form-04/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-04/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand purple      | `#6C63FF`              | Form panel background                      |
| Accent pink       | `#E91E63`              | Button bg, heading underline               |
| Background        | `#F5F5F5`              | Page background (light gray)               |
| Card surface      | `#FFFFFF`              | Info panel background                      |
| Text primary      | `#333333`              | Headings, body copy                        |
| Text secondary    | `#999999`              | Input placeholders, lighter text           |
| Text on purple    | `#FFFFFF`              | Text inside the form panel                 |
| Text on white     | `#333333`              | Text inside the info panel                 |
| Icon bg           | `#E0E0E0`              | Gray circular icon containers on info side |
| Font — headings   | Playfair Display (serif)| "Send us a message", "Contact us"          |
| Font — body       | Poppins (sans-serif)   | Labels, contact info, button               |
| Button radius     | 3px                     | Nearly rectangular, very slight rounding   |
| Button bg         | Accent pink             | —                                          |
| Button text       | White                   | —                                          |
| Info panel icons  | Gray circles (bg)       | Circular icon containers on white bg       |
| Input style       | Underline (no border)   | Bottom border only, light on purple bg     |
| Heading underline | Accent pink             | Short pink line below "Contact us"         |

## Visual design (from screenshot)

The page has a centered two-column card on a light gray background.
The page title "Contact Form #04" sits above the card, centered.

Left column (deep purple, ~45% width): "Send us a message" heading in white,
then a vertical stack of underline-style inputs (Name, Email, Subject, Message)
with light bottom borders on the purple background. "Send Message" button at
the bottom with pink/magenta background and white text.

Right column (white, ~55% width): "Contact us" heading in dark text with a
short pink/magenta underline decoration below it. Subtext "We're open for any
suggestion or just to have a chat". Four contact items with gray circular icon
containers: Address, Phone, Email, Website.

Key differences from Forms 01–03: purple form panel, pink accent button,
heading underline decoration, all form fields stacked vertically (no side-by-side).

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders a centered two-column card
  Given I visit the Formdrop page
  Then I see a centered card with two columns on a light gray background
  And the page title "Contact Form #04" is displayed above the card

Scenario: Left column is purple and contains the form
  Given I visit the Formdrop page
  Then the left column has a purple background
  And it contains a "Send us a message" heading

Scenario: Right column is white and contains contact info
  Given I visit the Formdrop page
  Then the right column has a white background
  And it contains a "Contact us" heading
```

### Contact form

```gherkin
Scenario: Form displays all fields
  Given I visit the Formdrop page
  Then I see a Name input field
  And I see an Email input field
  And I see a Subject input field
  And I see a Message textarea
  And I see a Send Message button

Scenario: Form fields are stacked vertically
  Given I visit the Formdrop page
  Then all form fields are displayed in a single vertical column
  And no fields are side by side

Scenario: Inputs have underline style on purple background
  Given I visit the Formdrop page
  Then all form inputs have a bottom border only (underline style)
  And the input borders are light colored against the purple background

Scenario: Send Message button is styled
  Given I visit the Formdrop page
  Then the Send Message button has a pink background and white text
```

### Contact info panel

```gherkin
Scenario: Info panel has a heading underline
  Given I visit the Formdrop page
  Then the "Contact us" heading has a short pink underline decoration below it

Scenario: Info panel displays subtext
  Given I visit the Formdrop page
  Then I see "We're open for any suggestion or just to have a chat" below the heading

Scenario: Info panel displays address
  Given I visit the Formdrop page
  Then I see an address icon and text "Address: 198 West 21th Street, Suite 721 New York NY 10016"

Scenario: Info panel displays phone
  Given I visit the Formdrop page
  Then I see a phone icon and text "Phone: + 1235 2355 98"

Scenario: Info panel displays email
  Given I visit the Formdrop page
  Then I see an email icon and text "Email: info@yoursite.com"

Scenario: Info panel displays website
  Given I visit the Formdrop page
  Then I see a globe icon and text "Website: yoursite.com"

Scenario: Info panel icons have circular gray backgrounds
  Given I visit the Formdrop page
  Then each contact info item has a circular gray icon container
```

### Responsive behavior

```gherkin
Scenario: Columns stack on mobile
  Given I visit the Formdrop page on a mobile viewport
  Then the two columns stack vertically
  And the form appears above the contact info panel
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formdrop page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Page title "Contact Form #04" centered above the card
- [ ] Two-column layout: form (purple) left, info (white) right
- [ ] Form: "Send us a message" heading, all fields stacked vertically
- [ ] Inputs: underline style with light borders on purple bg
- [ ] Send Message button: pink bg, white text, slight radius
- [ ] Info panel: "Contact us" with pink underline decoration
- [ ] Info panel: subtext + 4 contact items with gray circular icons
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
