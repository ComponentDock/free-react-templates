# Template: Formedge (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 10** — a full-width dark background image
(city skyline) with a white form card overlaid on the right and contact info on
the left. Features a blue "Send Message" button.

- **Source slug:** `contact-form-10`
- **Source URL:** https://colorlib.com/wp/template/contact-form-10/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-10/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Button blue       | `#4A90D9`              | Send Message button background             |
| Card surface      | `#FFFFFF`              | White form card                            |
| Text on dark      | `#FFFFFF`              | Headings, contact info on background image |
| Text on white     | `#333333`              | Form heading, input text                   |
| Text secondary    | `#999999`              | Input placeholders                         |
| Input border      | `#E0E0E0`              | Bordered input boxes                       |
| Font — headings   | Playfair Display (serif)| "Contact Form #10", "Contact us", "Get in touch" |
| Font — body       | Poppins (sans-serif)   | Labels, contact info, button               |
| Button radius     | 3px                     | Slight rounding                            |
| Card radius       | 5px                     | Rounded corners on white card              |
| Card shadow       | Light box-shadow        | Subtle shadow on white card                |
| Background image  | Dark city skyline       | Use picsum.photos seed for placeholder     |

## Visual design (from screenshot)

The page has a full-width dark background image (city skyline at night with dark
blue/purple tones). The content is overlaid on this background.

1. **Title** — "Contact Form #10" centered at the top in white serif font.

2. **Two-column content** (centered, ~70% max-width):
   - Left (~40%): "Contact us" heading in white serif, then four contact items
     vertically stacked, each with a white icon + uppercase label + value:
     Address, Phone, Email, Website.
   - Right (~60%): white card with slight shadow and rounded corners containing:
     "Get in touch" heading in dark serif, bordered-box form inputs (Name,
     Email, Subject, Message stacked vertically), "Send Message" button
     (blue bg, white text).

Key difference: background image covers the full viewport, white form card is
overlaid, contact info sits directly on the dark image.

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders with background image
  Given I visit the Formedge page
  Then I see a full-width dark background image

Scenario: Page title is centered on the background
  Given I visit the Formedge page
  Then I see "Contact Form #10" centered at the top in white text

Scenario: Content is overlaid on the background
  Given I visit the Formedge page
  Then I see contact info on the left and a white form card on the right
```

### Contact info

```gherkin
Scenario: Info displays address
  Given I visit the Formedge page
  Then I see a white icon and text "ADDRESS: 198 West 21th Street, Suite 721 New York NY 10016"

Scenario: Info displays phone
  Given I visit the Formedge page
  Then I see a white icon and text "PHONE: + 1235 2355 98"

Scenario: Info displays email
  Given I visit the Formedge page
  Then I see a white icon and text "EMAIL: info@yoursite.com"

Scenario: Info displays website
  Given I visit the Formedge page
  Then I see a white icon and text "WEBSITE: yoursite.com"
```

### Contact form

```gherkin
Scenario: Form displays all fields in white card
  Given I visit the Formedge page
  Then I see a white card with rounded corners and shadow
  And the card contains a "Get in touch" heading
  And I see a Name input field
  And I see an Email input field
  And I see a Subject input field
  And I see a Message textarea
  And I see a Send Message button

Scenario: Form fields are stacked vertically
  Given I visit the Formedge page
  Then all form fields are displayed in a single vertical column

Scenario: Send Message button is styled
  Given I visit the Formedge page
  Then the Send Message button has a blue background and white text
```

### Responsive behavior

```gherkin
Scenario: Columns stack on mobile
  Given I visit the Formedge page on a mobile viewport
  Then the contact info and form card stack vertically
  And the form card appears below the contact info
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formedge page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Full-width dark background image
- [ ] Page title "Contact Form #10" centered in white
- [ ] Contact info on left with white icons and uppercase labels
- [ ] White form card on right with shadow and rounded corners
- [ ] Form: "Get in touch" heading, bordered-box inputs stacked vertically
- [ ] Send Message button: blue bg, white text, slight radius
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
