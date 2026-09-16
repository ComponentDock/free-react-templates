# Template: Formbay (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 11** — a clean, minimalist two-column
contact page with a large bold heading, underline-style form on the left, and
a text block with a "Read more" link on the right. Features a coral/pink accent.

- **Source slug:** `contact-form-11`
- **Source URL:** https://colorlib.com/wp/template/contact-form-11/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-11/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand coral       | `#E8636F`              | Button bg, "Read more" link                |
| Background        | `#FFFFFF`              | White page background                      |
| Text primary      | `#222222`              | Headings (bold black)                      |
| Text body         | `#666666`              | Paragraph text                             |
| Text secondary    | `#999999`              | Input placeholders, labels                 |
| Input border      | `#E0E0E0`              | Underline bottom borders                   |
| Font — headings   | Poppins (sans-serif, bold)| "Fill the form. It's easy.", "Let's talk about everything." |
| Font — body       | Poppins (sans-serif)   | Paragraph text, placeholders, button       |
| Button radius     | 4px                     | Slight rounding                            |
| Button bg         | Brand coral             | —                                          |
| Button text       | White                   | —                                          |
| Input style       | Underline (no border)   | Bottom border only                         |

## Visual design (from screenshot)

The page has a clean white background with a centered two-column layout.

Left column (~50%):
- Large bold heading: "Fill the form. It's easy." (black, ~40px, sans-serif)
- Form with underline-style inputs:
  - Row 1: First name + Last name (side by side, light bottom borders)
  - Email (full width)
  - "Write your message" label + Message textarea (tall, underline style)
- "Send Message" button (coral bg, white text)

Right column (~50%):
- Bold heading: "Let's talk about everything." (~28px)
- Paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
  deleniti itaque similique magni. Magni, laboriosam perferendis maxime!"
- "Read more" link in coral color

Key differences: no card, no background image, very clean/minimal, large bold
heading, coral accent, text content on the right side.

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders a centered two-column layout
  Given I visit the Formbay page
  Then I see a centered two-column layout on a white background

Scenario: Left column contains heading and form
  Given I visit the Formbay page
  Then the left column has a large heading "Fill the form. It's easy."
  And it contains a contact form

Scenario: Right column contains text content
  Given I visit the Formbay page
  Then the right column has a heading "Let's talk about everything."
  And it contains a paragraph of text
  And it contains a "Read more" link
```

### Contact form

```gherkin
Scenario: Form displays all fields
  Given I visit the Formbay page
  Then I see a First name input field
  And I see a Last name input field
  And I see an Email input field
  And I see a Message textarea
  And I see a Send Message button

Scenario: First name and Last name are side by side
  Given I visit the Formbay page
  Then the First name and Last name inputs are in the same row

Scenario: Inputs have underline style
  Given I visit the Formbay page
  Then all form inputs have a bottom border only (underline style)

Scenario: Message field has label
  Given I visit the Formbay page
  Then the Message textarea has a "Write your message" label above it

Scenario: Send Message button is styled
  Given I visit the Formbay page
  Then the Send Message button has a coral background and white text
```

### Text content

```gherkin
Scenario: Right column displays heading
  Given I visit the Formbay page
  Then I see "Let's talk about everything." in the right column

Scenario: Right column displays paragraph
  Given I visit the Formbay page
  Then I see a paragraph of text below the heading in the right column

Scenario: Right column displays Read more link
  Given I visit the Formbay page
  Then I see a "Read more" link in coral color
```

### Responsive behavior

```gherkin
Scenario: Columns stack on mobile
  Given I visit the Formbay page on a mobile viewport
  Then the two columns stack vertically
  And the form appears above the text content
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formbay page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Two-column layout on white background
- [ ] Left: "Fill the form. It's easy." large bold heading
- [ ] Left: First name + Last name side by side
- [ ] Left: Email full width
- [ ] Left: "Write your message" label + Message textarea
- [ ] Left: Send Message button (coral bg, white text)
- [ ] Right: "Let's talk about everything." heading
- [ ] Right: Paragraph text
- [ ] Right: "Read more" coral link
- [ ] Inputs: underline style with light bottom borders
- [ ] Fonts: Poppins bold for headings, Poppins for body
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
