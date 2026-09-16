# Template: Formpeak (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 05** — a two-column contact page with a
white form/info panel on the left and a full-height image on the right. Features
a gold/amber button, three-column contact info row, and social media links.

- **Source slug:** `contact-form-05`
- **Source URL:** https://colorlib.com/wp/template/contact-form-05/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-05/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand gold        | `#D4A574`              | Button background                          |
| Social link color | `#55B68A`              | Social media links (teal/green)            |
| Background        | `#F5F5F5`              | Page background (light gray)               |
| Card surface      | `#FFFFFF`              | Left panel background                      |
| Text primary      | `#333333`              | Headings, body copy                        |
| Text secondary    | `#999999`              | Input placeholders, lighter text           |
| Label color       | `#555555`              | Uppercase contact info labels              |
| Font — headings   | Playfair Display (serif)| "Contact us", "Follow us here"             |
| Font — body       | Poppins (sans-serif)   | Labels, contact info, button               |
| Button radius     | 3px                     | Nearly rectangular, very slight rounding   |
| Button bg         | Brand gold              | —                                          |
| Button text       | White                   | —                                          |
| Input style       | Underline (no border)   | Bottom border only                         |
| Image placeholder | Room with plants        | Use picsum.photos seed for placeholder     |

## Visual design (from screenshot)

The page has a centered two-column card on a light gray background.
The page title "Contact Form #05" sits above the card, centered.

Left column (white, ~55% width):
- "Contact us" heading (serif, dark)
- Subtext: "We're open for any suggestion or just to have a chat"
- Three-column contact info row: ADDRESS, EMAIL, PHONE
- Form fields (underline style): Name, Email, Subject, Message ("Create a message here")
- "Send Message" button (gold/amber bg, white text)
- Social section: "Follow us here" heading + FACEBOOK | TWITTER | INSTAGRAM | DRIBBBLE links (teal)

Right column (image, ~45% width): full-height photo placeholder (room with plants).
Use `https://picsum.photos/seed/formpeak-1/600/800` as placeholder.

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders a centered two-column card
  Given I visit the Formpeak page
  Then I see a centered card with two columns on a light gray background
  And the page title "Contact Form #05" is displayed above the card

Scenario: Left column is white and contains form and info
  Given I visit the Formpeak page
  Then the left column has a white background
  And it contains a "Contact us" heading

Scenario: Right column displays an image
  Given I visit the Formpeak page
  Then the right column displays a placeholder image
  And the image fills the full height of the card
```

### Contact info

```gherkin
Scenario: Info row displays three items side by side
  Given I visit the Formpeak page
  Then I see ADDRESS, EMAIL, and PHONE in a horizontal row

Scenario: Info row displays address
  Given I visit the Formpeak page
  Then I see "ADDRESS:" followed by "198 West 21th Street, Suite 721 New York NY 10016"

Scenario: Info row displays email
  Given I visit the Formpeak page
  Then I see "EMAIL:" followed by "info@yoursite.com"

Scenario: Info row displays phone
  Given I visit the Formpeak page
  Then I see "PHONE:" followed by "+ 1235 2355 98"
```

### Contact form

```gherkin
Scenario: Form displays all fields
  Given I visit the Formpeak page
  Then I see a Name input field
  And I see an Email input field
  And I see a Subject input field
  And I see a Message textarea
  And I see a Send Message button

Scenario: Form fields are stacked vertically
  Given I visit the Formpeak page
  Then all form fields are displayed in a single vertical column

Scenario: Message textarea has custom placeholder
  Given I visit the Formpeak page
  Then the Message textarea placeholder reads "Create a message here"

Scenario: Send Message button is styled
  Given I visit the Formpeak page
  Then the Send Message button has a gold background and white text
```

### Social links

```gherkin
Scenario: Social section displays heading
  Given I visit the Formpeak page
  Then I see "Follow us here" heading below the button

Scenario: Social section displays platform links
  Given I visit the Formpeak page
  Then I see FACEBOOK, TWITTER, INSTAGRAM, and DRIBBBLE links
  And the links are styled in teal/green color
```

### Responsive behavior

```gherkin
Scenario: Columns stack on mobile
  Given I visit the Formpeak page on a mobile viewport
  Then the two columns stack vertically
  And the form appears above the image

Scenario: Contact info row wraps on mobile
  Given I visit the Formpeak page on a mobile viewport
  Then the three-column contact info wraps to multiple rows
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formpeak page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Page title "Contact Form #05" centered above the card
- [ ] Two-column layout: form (white) left, image right
- [ ] "Contact us" heading with subtext
- [ ] Three-column contact info row (Address, Email, Phone)
- [ ] Form: Name, Email, Subject, Message fields stacked vertically
- [ ] Message placeholder: "Create a message here"
- [ ] Send Message button: gold bg, white text, slight radius
- [ ] Social links: "Follow us here" + 4 teal platform links
- [ ] Right column: full-height placeholder image
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Responsive: columns stack, info row wraps on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
