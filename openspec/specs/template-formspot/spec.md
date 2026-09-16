# Template: Formspot (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 08** — a two-column contact page with a
form on the left and an image on the right, featuring an olive green button and
bordered-box inputs.

- **Source slug:** `contact-form-08`
- **Source URL:** https://colorlib.com/wp/template/contact-form-08/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-08/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand olive       | `#7C9A5E`              | Button background                          |
| Background        | `#F5F5F5`              | Page background (light gray)               |
| Card surface      | `#FFFFFF`              | Form panel background                      |
| Text primary      | `#333333`              | Headings, body copy                        |
| Text secondary    | `#999999`              | Input placeholders, lighter text           |
| Label color       | `#333333`              | Uppercase field labels (dark, bold)        |
| Input border      | `#E0E0E0`              | Bordered input boxes                       |
| Font — headings   | Playfair Display (serif)| "Get in touch with us"                     |
| Font — body       | Poppins (sans-serif)   | Labels, contact info, button               |
| Button radius     | 3px                     | Nearly rectangular, very slight rounding   |
| Button bg         | Brand olive             | —                                          |
| Button text       | White                   | —                                          |
| Input style       | Bordered box            | Full border around inputs                  |
| Image placeholder | Ivy on white wall       | Use picsum.photos seed for placeholder     |

## Visual design (from screenshot)

The page has a centered two-column card on a light gray background.
The page title "Contact Form #08" sits above the card, centered.

Left column (white, ~55% width): "Get in touch with us" heading in dark serif
font. Form with bordered-box inputs and uppercase labels: FULL NAME + EMAIL
ADDRESS side by side, SUBJECT full width, MESSAGE tall textarea. "Send Message"
button at the bottom with olive green background and white text.

Right column (image, ~45% width): full-height image placeholder (screenshot
shows ivy/vines on a white wall with a window). Use
`https://picsum.photos/seed/formspot-1/600/600` as placeholder.

Key difference from Form 05: olive green button instead of gold, no social
links section, no three-column contact info row — simpler layout.

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders a centered two-column card
  Given I visit the Formspot page
  Then I see a centered card with two columns on a light gray background
  And the page title "Contact Form #08" is displayed above the card

Scenario: Left column is white and contains the form
  Given I visit the Formspot page
  Then the left column has a white background
  And it contains a "Get in touch with us" heading

Scenario: Right column displays an image
  Given I visit the Formspot page
  Then the right column displays a placeholder image
  And the image fills the full height of the card
```

### Contact form

```gherkin
Scenario: Form displays all fields
  Given I visit the Formspot page
  Then I see a Full Name input field
  And I see an Email Address input field
  And I see a Subject input field
  And I see a Message textarea
  And I see a Send Message button

Scenario: Full Name and Email Address are side by side
  Given I visit the Formspot page
  Then the Full Name and Email Address inputs are in the same row

Scenario: Inputs have bordered box style
  Given I visit the Formspot page
  Then all form inputs have a full border (box style)
  And the input borders are light gray

Scenario: Field labels are uppercase
  Given I visit the Formspot page
  Then all form field labels are displayed in uppercase

Scenario: Send Message button is styled
  Given I visit the Formspot page
  Then the Send Message button has an olive green background and white text
```

### Image panel

```gherkin
Scenario: Right column displays an image
  Given I visit the Formspot page
  Then the right column of the card displays a placeholder image
  And the image fills the full height of the card
```

### Responsive behavior

```gherkin
Scenario: Columns stack on mobile
  Given I visit the Formspot page on a mobile viewport
  Then the two columns stack vertically
  And the form appears above the image
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formspot page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Page title "Contact Form #08" centered above the card
- [ ] Two-column layout: form (white) left, image right
- [ ] Form: "Get in touch with us" heading with bordered-box inputs
- [ ] Full Name + Email Address in a two-column row
- [ ] Subject input full width
- [ ] Message textarea tall
- [ ] Uppercase labels above inputs
- [ ] Send Message button: olive green bg, white text, slight radius
- [ ] Right column: full-height placeholder image
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
