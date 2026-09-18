# Template: Formdock (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 12** — a clean two-column contact page
with a heading, paragraph, and contact info on the left, and a form with
labeled bordered inputs on the right. Features a blue button.

- **Source slug:** `contact-form-12`
- **Source URL:** https://colorlib.com/wp/template/contact-form-12/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-12/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand blue        | `#4285F4`              | Send Message button background             |
| Background        | `#FFFFFF`              | White page background                      |
| Text primary      | `#222222`              | Headings (bold black)                      |
| Text body         | `#666666`              | Paragraph text                             |
| Text secondary    | `#999999`              | Lighter text                               |
| Label color       | `#333333`              | Form field labels (dark)                   |
| Input border      | `#E0E0E0`              | Bordered input boxes                       |
| Icon color        | `#555555`              | Contact info icons (dark gray)             |
| Font — headings   | Poppins (sans-serif, bold)| "Contact Us" heading                    |
| Font — body       | Poppins (sans-serif)   | Paragraph, labels, contact info, button    |
| Button radius     | 4px                     | Slight rounding                            |
| Button bg         | Brand blue              | —                                          |
| Button text       | White                   | —                                          |
| Input style       | Bordered box            | Full border around inputs                  |

## Visual design (from screenshot)

The page has a clean white background with a centered two-column layout.

Left column (~50%):
- "Contact Us" heading: bold, black, sans-serif, ~36px
- Paragraph of lorem ipsum text in gray
- Contact info items (vertically stacked):
  - Building icon + "34 Street Name, City Name Here, United States"
  - Phone icon + "+1 (222) 345 6789"
  - Mail icon + "info@mywebsite.com"

Right column (~50%):
- Form with labels ABOVE inputs (not placeholders):
  - Name (label + bordered input)
  - Email (label + bordered input)
  - Message (label + bordered textarea, tall)
- "Send Message" button (blue bg, white text)

Key differences: labels above inputs (not placeholders), different address
format, very clean/simple layout, no serif fonts.

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders a centered two-column layout
  Given I visit the Formdock page
  Then I see a centered two-column layout on a white background

Scenario: Left column contains heading, text, and contact info
  Given I visit the Formdock page
  Then the left column has a "Contact Us" heading
  And it contains a paragraph of text
  And it contains contact information items

Scenario: Right column contains the form
  Given I visit the Formdock page
  Then the right column contains a contact form
```

### Contact info

```gherkin
Scenario: Info displays address
  Given I visit the Formdock page
  Then I see a building icon and text "34 Street Name, City Name Here, United States"

Scenario: Info displays phone
  Given I visit the Formdock page
  Then I see a phone icon and text "+1 (222) 345 6789"

Scenario: Info displays email
  Given I visit the Formdock page
  Then I see a mail icon and text "info@mywebsite.com"
```

### Contact form

```gherkin
Scenario: Form displays all fields with labels
  Given I visit the Formdock page
  Then I see a "Name" label above an input field
  And I see an "Email" label above an input field
  And I see a "Message" label above a textarea
  And I see a Send Message button

Scenario: Inputs have bordered box style
  Given I visit the Formdock page
  Then all form inputs have a full border (box style)
  And the input borders are light gray

Scenario: Labels appear above inputs
  Given I visit the Formdock page
  Then each form field has a label displayed above the input

Scenario: Send Message button is styled
  Given I visit the Formdock page
  Then the Send Message button has a blue background and white text
```

### Responsive behavior

```gherkin
Scenario: Columns stack on mobile
  Given I visit the Formdock page on a mobile viewport
  Then the two columns stack vertically
  And the left column appears above the form
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formdock page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Two-column layout on white background
- [ ] Left: "Contact Us" bold heading
- [ ] Left: paragraph of text
- [ ] Left: contact info with icons (Address, Phone, Email)
- [ ] Right: form with labels ABOVE inputs
- [ ] Right: Name, Email, Message fields with bordered boxes
- [ ] Right: Send Message button (blue bg, white text)
- [ ] Labels: dark text above each input
- [ ] Fonts: Poppins bold for headings, Poppins for body
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
