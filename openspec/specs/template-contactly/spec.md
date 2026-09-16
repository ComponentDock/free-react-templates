# Template: Contactly (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 02** — a two-column contact page with a
green/teal info panel on the left and a form with underline-style inputs on the
right.

- **Source slug:** `contact-form-02`
- **Source URL:** https://colorlib.com/wp/template/contact-form-02/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-02/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand green       | `#4ECDC4`              | Info panel background, button, accents     |
| Background        | `#F5F5F5`              | Page background (light gray)               |
| Card surface      | `#FFFFFF`              | Form panel background                      |
| Text primary      | `#333333`              | Headings, body copy                        |
| Text secondary    | `#999999`              | Input placeholders, lighter text           |
| Text on green     | `#FFFFFF`              | Text inside the info panel                 |
| Label color       | `#555555`              | Uppercase field labels                     |
| Font — headings   | Playfair Display (serif)| "Let's get in touch", "Get in touch"      |
| Font — body       | Poppins (sans-serif)   | Labels, contact info, button               |
| Button radius     | 3px                     | Nearly rectangular, very slight rounding   |
| Button bg         | Brand green             | Same as info panel                         |
| Button text       | White                   | —                                          |
| Info panel icons  | White circles (bg)      | Circular icon containers on green bg       |
| Input style       | Underline (no border)   | Bottom border only, no full border/box     |
| Shadow on card    | None visible            | Flat card on gray bg                       |

## Visual design (from screenshot)

The page has a centered two-column card on a light gray background.
The page title "Contact Form #02" sits above the card, centered.

Left column (brand green, ~30% width): "Let's get in touch" heading in white,
followed by subtext "We're open for any suggestion or just to have a chat".
Below: four contact items (Address, Phone, Email, Website) each with a circular
white icon and white text.

Right column (white, ~70% width): "Get in touch" heading in dark text, then a
form with underline-style inputs: FULL NAME + EMAIL ADDRESS side by side,
SUBJECT full width, MESSAGE full width (tall textarea). "Send Message" button
at the bottom-left with green background and white text.

Key difference from Form 01: reversed column order (info left, form right),
green instead of blue, underline-style inputs instead of bordered boxes,
uppercase labels above fields.

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders a centered two-column card
  Given I visit the Contactly page
  Then I see a centered card with two columns on a light gray background
  And the page title "Contact Form #02" is displayed above the card

Scenario: Left column is green and contains contact info
  Given I visit the Contactly page
  Then the left column has a green background
  And it contains a "Let's get in touch" heading

Scenario: Right column is white and contains the form
  Given I visit the Contactly page
  Then the right column has a white background
  And it contains a "Get in touch" heading
```

### Info panel (left)

```gherkin
Scenario: Info panel displays subtext
  Given I visit the Contactly page
  Then I see "We're open for any suggestion or just to have a chat" below the heading

Scenario: Info panel displays address
  Given I visit the Contactly page
  Then I see an address icon and text "Address: 198 West 21th Street, Suite 721 New York NY 10016"

Scenario: Info panel displays phone
  Given I visit the Contactly page
  Then I see a phone icon and text "Phone: + 1235 2355 98"

Scenario: Info panel displays email
  Given I visit the Contactly page
  Then I see an email icon and text "Email: info@yoursite.com"

Scenario: Info panel displays website
  Given I visit the Contactly page
  Then I see a globe icon and text "Website: yoursite.com"

Scenario: Info panel icons have circular white backgrounds
  Given I visit the Contactly page
  Then each contact info item has a circular white icon container
```

### Contact form

```gherkin
Scenario: Form displays all fields
  Given I visit the Contactly page
  Then I see a Full Name input field
  And I see an Email Address input field
  And I see a Subject input field
  And I see a Message textarea
  And I see a Send Message button

Scenario: Full Name and Email Address fields are side by side
  Given I visit the Contactly page
  Then the Full Name and Email Address inputs are displayed in the same row

Scenario: Subject field spans full width
  Given I visit the Contactly page
  Then the Subject input spans the full width of the form

Scenario: Inputs have underline style
  Given I visit the Contactly page
  Then all form inputs have a bottom border only (underline style)
  And there are no full border boxes around inputs

Scenario: Field labels are uppercase
  Given I visit the Contactly page
  Then all form field labels are displayed in uppercase
  And labels appear above their respective inputs

Scenario: Message textarea is multi-line
  Given I visit the Contactly page
  Then the Message textarea has a tall height suitable for multi-line input

Scenario: Send Message button is styled
  Given I visit the Contactly page
  Then the Send Message button has a green background and white text
```

### Responsive behavior

```gherkin
Scenario: Columns stack on mobile
  Given I visit the Contactly page on a mobile viewport
  Then the two columns stack vertically
  And the info panel appears above the form
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Contactly page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Page title "Contact Form #02" centered above the card
- [ ] Two-column layout: info (green) left, form (white) right
- [ ] Info panel: green bg, "Let's get in touch" + subtext + 4 items
- [ ] Form: "Get in touch" heading with underline-style inputs
- [ ] Full Name + Email Address in a two-column row
- [ ] Subject input full width
- [ ] Message textarea tall
- [ ] Uppercase labels above inputs
- [ ] Send Message button: green bg, white text, slight radius
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
