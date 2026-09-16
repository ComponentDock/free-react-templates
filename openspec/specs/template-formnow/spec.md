# Template: Formnow (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 13** — a full-page gradient background
(blue-to-teal) with contact info and two location blocks on the left, and a
white form card on the right. Features an olive/yellow-green button and
uppercase letter-spaced form heading.

- **Source slug:** `contact-form-13`
- **Source URL:** https://colorlib.com/wp/template/contact-form-13/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-13/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Gradient start    | `#5B9BD5`              | Blue (left side of gradient)               |
| Gradient end      | `#7DD8C0`              | Teal/cyan (right side of gradient)         |
| Button olive      | `#C5CC5A`              | Send Message button background             |
| Card surface      | `#FFFFFF`              | White form card                            |
| Text on gradient  | `#FFFFFF`              | Headings, contact info on gradient         |
| Text on white     | `#333333`              | Form labels, input text                    |
| Text secondary    | `#999999`              | Form heading (uppercase)                   |
| Label color       | `#333333`              | Form field labels (dark)                   |
| Input border      | `#E0E0E0`              | Bordered input boxes                       |
| Font — headings   | Playfair Display (serif)| "Contact Info" heading                     |
| Font — form label | Poppins (sans-serif)   | "SEND US A MESSAGE", field labels          |
| Font — body       | Poppins (sans-serif)   | Contact info, button                       |
| Button radius     | 4px                     | Slight rounding                            |
| Button text       | White                   | —                                          |
| Card radius       | 5px                     | Rounded corners on white card              |
| Card shadow       | Light box-shadow        | Subtle shadow on white card                |
| Form heading style| Uppercase, letter-spaced| "SEND US A MESSAGE"                        |

## Visual design (from screenshot)

The entire page has a blue-to-teal gradient background. Content is overlaid.

Left column (~45%, on gradient):
- "Contact Info" heading: white serif, ~28px
- Paragraph: "Lorem ipsum dolor sit amet..." white, smaller
- Two location blocks side by side:
  - **London** — address, phone, email (white text, icons)
  - **New York** — address, phone, email (white text, icons)

Right column (~55%):
- White card with shadow and rounded corners
- "SEND US A MESSAGE" heading: uppercase, letter-spaced, gray, ~14px
- Form with labeled bordered inputs:
  - Name (label + bordered input)
  - Email (label + bordered input)
  - Message (label + bordered textarea, tall)
- "Send Message" button: olive/yellow-green bg, white text, full width

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders with gradient background
  Given I visit the Formnow page
  Then the entire page has a blue-to-teal gradient background

Scenario: Content is overlaid on gradient
  Given I visit the Formnow page
  Then I see contact info on the left and a white form card on the right
```

### Contact info

```gherkin
Scenario: Info displays heading and paragraph
  Given I visit the Formnow page
  Then I see "Contact Info" heading in white
  And I see a paragraph of text below the heading

Scenario: Info displays two location blocks
  Given I visit the Formnow page
  Then I see a "London" location block
  And I see a "New York" location block

Scenario: Each location displays address, phone, and email
  Given I visit the Formnow page
  Then each location block has an address, phone number, and email
```

### Contact form

```gherkin
Scenario: Form displays all fields in white card
  Given I visit the Formnow page
  Then I see a white card with rounded corners and shadow
  And the card contains a "SEND US A MESSAGE" heading
  And I see a Name input field
  And I see an Email input field
  And I see a Message textarea
  And I see a Send Message button

Scenario: Form heading is uppercase and letter-spaced
  Given I visit the Formnow page
  Then the form heading "SEND US A MESSAGE" is uppercase with letter spacing

Scenario: Inputs have bordered box style
  Given I visit the Formnow page
  Then all form inputs have a full border (box style)

Scenario: Labels appear above inputs
  Given I visit the Formnow page
  Then each form field has a label displayed above the input

Scenario: Send Message button spans full width
  Given I visit the Formnow page
  Then the Send Message button spans the full width of the card
  And the button has an olive/yellow-green background and white text
```

### Responsive behavior

```gherkin
Scenario: Columns stack on mobile
  Given I visit the Formnow page on a mobile viewport
  Then the contact info and form card stack vertically
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formnow page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Full-page blue-to-teal gradient background
- [ ] Left: "Contact Info" white heading + paragraph
- [ ] Left: two location blocks (London, New York) side by side
- [ ] Each location: address, phone, email with icons
- [ ] Right: white card with shadow and rounded corners
- [ ] Card: "SEND US A MESSAGE" uppercase letter-spaced heading
- [ ] Card: Name, Email, Message with labels above bordered inputs
- [ ] Card: full-width olive/yellow-green Send Message button
- [ ] Fonts: Playfair Display for "Contact Info", Poppins for rest
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
