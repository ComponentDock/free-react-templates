# Template: Formrise (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 07** — a single dark card with a form on
the left and contact information on the right, featuring an orange/amber
"Send Message" button and underline-style inputs on a dark background.

- **Source slug:** `contact-form-07`
- **Source URL:** https://colorlib.com/wp/template/contact-form-07/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-07/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Card bg           | `#343A40`              | Dark charcoal/navy card background         |
| Button orange     | `#E8A838`              | Send Message button background             |
| Background        | `#F5F5F5`              | Page background (light gray)               |
| Text on dark      | `#FFFFFF`              | Headings, labels on dark bg                |
| Text secondary    | `#AAAAAA`              | Placeholders, lighter text on dark         |
| Input border      | `#555555`              | Underline borders on dark bg               |
| Divider color     | `#4A4A4A`              | Vertical divider between form and info     |
| Font — headings   | Playfair Display (serif)| "Write us", "Contact information"          |
| Font — body       | Poppins (sans-serif)   | Labels, contact info, button               |
| Button radius     | 3px                     | Nearly rectangular, very slight rounding   |
| Button text       | White                   | —                                          |
| Input style       | Underline (no border)   | Bottom border only, light on dark bg       |
| Card radius       | 5px                     | Slight rounding on card corners            |
| Icon color        | White/light gray        | Icons on dark background                   |

## Visual design (from screenshot)

The page has a centered title and a single dark card on a light gray background.
The page title "Contact Form #07" sits above the card, centered.

The entire card has a dark charcoal/navy background (#343A40) with slight
rounded corners. Inside the card, a vertical divider separates two sections:

Left section (~50%): "Write us" heading in white serif font, then a vertical
stack of underline-style inputs (Name, Email, Subject, Message) with light
bottom borders on the dark background. "Send Message" button at the bottom
with orange/amber background and white text.

Right section (~50%): "Contact information" heading in white, subtext "We're
open for any suggestion or just to have a chat" in lighter gray. Four contact
items each with a small icon and text: Address, Phone, Email, Website.

Key difference from Forms 01–06: the entire card is dark (not split white/green/etc),
orange accent button, all content on dark background.

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders a centered dark card
  Given I visit the Formrise page
  Then I see a centered card with a dark background on a light gray page
  And the page title "Contact Form #07" is displayed above the card

Scenario: Card has two sections divided by a vertical divider
  Given I visit the Formrise page
  Then the card contains a form section on the left
  And a contact information section on the right
  And a vertical divider separates the two sections
```

### Contact form

```gherkin
Scenario: Form displays all fields
  Given I visit the Formrise page
  Then I see a Name input field
  And I see an Email input field
  And I see a Subject input field
  And I see a Message textarea
  And I see a Send Message button

Scenario: Form fields are stacked vertically
  Given I visit the Formrise page
  Then all form fields are displayed in a single vertical column

Scenario: Inputs have underline style on dark background
  Given I visit the Formrise page
  Then all form inputs have a bottom border only (underline style)
  And the input borders are light colored against the dark background

Scenario: Send Message button is styled
  Given I visit the Formrise page
  Then the Send Message button has an orange background and white text
```

### Contact information

```gherkin
Scenario: Info section displays heading
  Given I visit the Formrise page
  Then I see "Contact information" heading on the right side of the card

Scenario: Info section displays subtext
  Given I visit the Formrise page
  Then I see "We're open for any suggestion or just to have a chat" below the heading

Scenario: Info section displays address
  Given I visit the Formrise page
  Then I see an address icon and text "Address: 198 West 21th Street, Suite 721 New York NY 10016"

Scenario: Info section displays phone
  Given I visit the Formrise page
  Then I see a phone icon and text "Phone: + 1235 2355 98"

Scenario: Info section displays email
  Given I visit the Formrise page
  Then I see an email icon and text "Email: info@yoursite.com"

Scenario: Info section displays website
  Given I visit the Formrise page
  Then I see a globe icon and text "Website: yoursite.com"
```

### Responsive behavior

```gherkin
Scenario: Sections stack on mobile
  Given I visit the Formrise page on a mobile viewport
  Then the form and contact information sections stack vertically
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formrise page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Page title "Contact Form #07" centered above the card
- [ ] Entire card has dark background (#343A40)
- [ ] Card has slight rounded corners (~5px)
- [ ] Vertical divider separates form and info sections
- [ ] Form: "Write us" heading, underline-style inputs stacked vertically
- [ ] Send Message button: orange bg, white text, slight radius
- [ ] Info: "Contact information" heading + subtext + 4 items with icons
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Responsive: sections stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
