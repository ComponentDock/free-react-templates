# Template: Formhub (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 14** — a full-page olive green background
with a "Let's work together" text section on the left and a white form card on
the right. Features a complex form with Name/Organization side by side, Budget
dropdown, Target Lunch field, and an olive/yellow-green button.

- **Source slug:** `contact-form-14`
- **Source URL:** https://colorlib.com/wp/template/contact-form-14/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-14/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Background        | `#7A8B5C`              | Olive green page background                |
| Button olive      | `#C5CC5A`              | Send Message button background             |
| Card surface      | `#FFFFFF`              | White form card                            |
| Text on green     | `#FFFFFF`              | Headings, paragraphs on green              |
| Text on white     | `#333333`              | Form labels, input text                    |
| Text secondary    | `#999999`              | Form heading (uppercase)                   |
| Label color       | `#333333`              | Form field labels (dark)                   |
| Required color    | `#E53E3E`              | Asterisk for required fields               |
| Input border      | `#E0E0E0`              | Bordered input boxes                       |
| Font — headings   | Poppins (sans-serif, bold)| "Let's work together"                    |
| Font — form label | Poppins (sans-serif)   | "HOW CAN WE HELP?", field labels          |
| Font — body       | Poppins (sans-serif)   | Paragraphs, contact info, button           |
| Button radius     | 4px                     | Slight rounding                            |
| Button text       | White                   | —                                          |
| Card radius       | 5px                     | Rounded corners on white card              |
| Card shadow       | Light box-shadow        | Subtle shadow on white card                |
| Form heading style| Uppercase, letter-spaced| "HOW CAN WE HELP?"                        |

## Visual design (from screenshot)

The entire page has an olive green background. Content is overlaid.

Left column (~45%, on green bg):
- "Let's work together" heading: white, bold, sans-serif, ~32px
- Multiple paragraphs of lorem ipsum text (white, ~14px)
- "info@mywebsite.com" email link (white, underlined) at the bottom

Right column (~55%):
- White card with shadow and rounded corners
- "HOW CAN WE HELP?" heading: uppercase, letter-spaced, gray
- Form with labeled bordered inputs:
  - Row 1: Name * + Organization (side by side, placeholders: "Your name", "Your organization")
  - Email * (full width, placeholder: "Your email address")
  - Project Description * (full width textarea, tall)
  - Row 2: Budget (dropdown "Choose...") + Target Lunch (text input "Example: January 15th")
- "Send Message" button: full width, olive bg, white text

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders with olive green background
  Given I visit the Formhub page
  Then the entire page has an olive green background

Scenario: Content is overlaid on green background
  Given I visit the Formhub page
  Then I see text content on the left and a white form card on the right
```

### Text content

```gherkin
Scenario: Left column displays heading
  Given I visit the Formhub page
  Then I see "Let's work together" heading in white

Scenario: Left column displays paragraphs
  Given I visit the Formhub page
  Then I see paragraphs of text below the heading

Scenario: Left column displays email link
  Given I visit the Formhub page
  Then I see an "info@mywebsite.com" email link
```

### Contact form

```gherkin
Scenario: Form displays all fields in white card
  Given I visit the Formhub page
  Then I see a white card with rounded corners and shadow
  And the card contains a "HOW CAN WE HELP?" heading
  And I see a Name input field marked as required
  And I see an Organization input field
  And I see an Email input field marked as required
  And I see a Project Description textarea marked as required
  And I see a Budget dropdown
  And I see a Target Lunch input field
  And I see a Send Message button

Scenario: Name and Organization are side by side
  Given I visit the Formhub page
  Then the Name and Organization inputs are in the same row

Scenario: Budget and Target Lunch are side by side
  Given I visit the Formhub page
  Then the Budget dropdown and Target Lunch input are in the same row

Scenario: Required fields have asterisks
  Given I visit the Formhub page
  Then Name, Email, and Project Description have red asterisks

Scenario: Budget is a dropdown
  Given I visit the Formhub page
  Then the Budget field is a dropdown with "Choose..." as default

Scenario: Send Message button spans full width
  Given I visit the Formhub page
  Then the Send Message button spans the full width of the card
  And the button has an olive/yellow-green background and white text
```

### Responsive behavior

```gherkin
Scenario: Columns stack on mobile
  Given I visit the Formhub page on a mobile viewport
  Then the text content and form card stack vertically

Scenario: Side-by-side fields stack on mobile
  Given I visit the Formhub page on a mobile viewport
  Then Name and Organization stack vertically
  And Budget and Target Lunch stack vertically
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formhub page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Full-page olive green background
- [ ] Left: "Let's work together" white heading
- [ ] Left: paragraphs of text + email link
- [ ] Right: white card with shadow
- [ ] Card: "HOW CAN WE HELP?" uppercase heading
- [ ] Card: Name + Organization side by side
- [ ] Card: Email full width (required)
- [ ] Card: Project Description textarea (required)
- [ ] Card: Budget dropdown + Target Lunch side by side
- [ ] Card: full-width olive Send Message button
- [ ] Required fields have red asterisks
- [ ] Fonts: Poppins throughout
- [ ] Responsive: columns stack, side-by-side fields stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
