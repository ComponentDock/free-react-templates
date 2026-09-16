# Template: Touchbase (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 01** — a clean, two-column contact page
with a form on the left and a contact-info panel on the right.

- **Source slug:** `contact-form-01`
- **Source URL:** https://colorlib.com/wp/template/contact-form-01/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-01/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand blue        | `#4292E6`              | Info panel background, button, accents     |
| Background        | `#F5F5F5`              | Page background (light gray)               |
| Card surface      | `#FFFFFF`              | Form card background                       |
| Text primary      | `#333333`              | Headings, body copy                        |
| Text secondary    | `#666666`              | Input placeholders, lighter text           |
| Text on blue      | `#FFFFFF`              | Text inside the info panel                 |
| Font — headings   | Playfair Display (serif)| "Get in touch", "Contact us" headings     |
| Font — body       | Poppins (sans-serif)   | Form labels, contact info, button          |
| Button radius     | 3px                     | Nearly rectangular, very slight rounding   |
| Button bg         | Brand blue              | Same as info panel                         |
| Button text       | White                   | —                                          |
| Info panel icons  | White circles (bg)      | Circular icon containers on blue bg        |
| Shadow on card    | None visible            | Flat white card on gray bg                 |

## Visual design (from screenshot)

The page has a centered two-column card on a light gray background.
The page title "Contact Form #01" sits above the card, centered.

Left column (white, ~55% width): "Get in touch" heading, then a two-column
input row (Name + Email), a full-width Subject field, a tall Message textarea,
and a "Send Message" button at the bottom-left.

Right column (brand blue, ~45% width): "Contact us" heading, then four contact
items each with a circular white icon and text: Address, Phone, Email, Website.
The right panel is slightly taller than the left panel, extending below it.

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders a centered two-column card
  Given I visit the Touchbase page
  Then I see a centered card with two columns on a light gray background
  And the page title "Contact Form #01" is displayed above the card

Scenario: Left column is white and contains the contact form
  Given I visit the Touchbase page
  Then the left column has a white background
  And it contains a "Get in touch" heading

Scenario: Right column is blue and contains contact info
  Given I visit the Touchbase page
  Then the right column has a blue background
  And it contains a "Contact us" heading
```

### Contact form

```gherkin
Scenario: Form displays all fields
  Given I visit the Touchbase page
  Then I see a Name input field
  And I see an Email input field
  And I see a Subject input field
  And I see a Message textarea
  And I see a Send Message button

Scenario: Name and Email fields are side by side
  Given I visit the Touchbase page
  Then the Name and Email inputs are displayed in the same row

Scenario: Subject field spans full width
  Given I visit the Touchbase page
  Then the Subject input spans the full width of the form

Scenario: Message textarea is multi-line
  Given I visit the Touchbase page
  Then the Message textarea has a tall height suitable for multi-line input

Scenario: Send Message button is styled
  Given I visit the Touchbase page
  Then the Send Message button has a blue background and white text
```

### Contact info panel

```gherkin
Scenario: Panel displays address
  Given I visit the Touchbase page
  Then I see an address icon and text "Address: 198 West 21th Street, Suite 721 New York NY 10016"

Scenario: Panel displays phone
  Given I visit the Touchbase page
  Then I see a phone icon and text "Phone: + 1235 2355 98"

Scenario: Panel displays email
  Given I visit the Touchbase page
  Then I see an email icon and text "Email: info@yoursite.com"

Scenario: Panel displays website
  Given I visit the Touchbase page
  Then I see a globe icon and text "Website: yoursite.com"

Scenario: Contact info icons have circular white backgrounds
  Given I visit the Touchbase page
  Then each contact info item has a circular white icon container
```

### Responsive behavior

```gherkin
Scenario: Columns stack on mobile
  Given I visit the Touchbase page on a mobile viewport
  Then the two columns stack vertically
  And the form appears above the contact info panel
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Touchbase page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Page title "Contact Form #01" centered above the card
- [ ] Two-column layout: form (white) left, info (blue) right
- [ ] Name + Email inputs in a two-column row
- [ ] Subject input full width
- [ ] Message textarea tall
- [ ] Send Message button: blue bg, white text, slight radius
- [ ] Info panel: blue bg, white text, 4 contact items with circular icons
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
