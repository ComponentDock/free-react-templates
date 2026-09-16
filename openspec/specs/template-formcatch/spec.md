# Template: Formcatch (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 03** — a contact page with a horizontal
info bar at the top (four items with circular teal icons) and a two-column card
below (form on left, image on right).

- **Source slug:** `contact-form-03`
- **Source URL:** https://colorlib.com/wp/template/contact-form-03/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-03/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand teal        | `#7EC8E3`              | Icons, button, link accents                |
| Background        | `#F5F5F5`              | Page background (light gray)               |
| Card surface      | `#FFFFFF`              | Form panel background                      |
| Text primary      | `#333333`              | Headings, body copy                        |
| Text secondary    | `#999999`              | Input placeholders, lighter text           |
| Text on teal      | `#FFFFFF`              | Text inside icon circles, button text      |
| Label color       | `#555555`              | Uppercase field labels                     |
| Link color        | `#7EC8E3`              | Phone number, email, website values        |
| Font — headings   | Playfair Display (serif)| "Contact Form #03", "Contact Us"           |
| Font — body       | Poppins (sans-serif)   | Labels, contact info, button               |
| Button radius     | 3px                     | Nearly rectangular, very slight rounding   |
| Button bg         | Brand teal              | —                                          |
| Button text       | White                   | —                                          |
| Info bar icons    | Teal circles (bg)       | Circular icon containers, teal background  |
| Icon color        | White inside teal circle| —                                          |
| Input style       | Underline (no border)   | Bottom border only                         |
| Image placeholder | B&W photo (cat)         | Use picsum.photos seed for placeholder     |

## Visual design (from screenshot)

The page has three stacked sections on a light gray background:

1. **Title** — "Contact Form #03" centered, serif font, dark text.

2. **Info bar** — horizontal row of four contact items, each with a circular
   teal icon above text. Items: Address, Phone, Email, Website. The phone
   number, email, and website values appear as teal-colored links.

3. **Two-column card** — centered below the info bar:
   - Left (~50%): white background, "Contact Us" heading, form with
     underline-style inputs (FULL NAME + EMAIL ADDRESS side by side, SUBJECT
     full width, MESSAGE tall textarea), "Send Message" button (teal bg).
   - Right (~50%): full-height image placeholder (screenshot shows a B&W cat
     photo). Use `picsum.photos/seed/formcatch/<w>/<h>` for the placeholder.

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders the title
  Given I visit the Formcatch page
  Then I see "Contact Form #03" centered at the top

Scenario: Page renders the info bar
  Given I visit the Formcatch page
  Then I see a horizontal row of four contact items below the title

Scenario: Page renders the two-column card
  Given I visit the Formcatch page
  Then I see a centered card with a form on the left and an image on the right
```

### Info bar

```gherkin
Scenario: Info bar displays address
  Given I visit the Formcatch page
  Then I see an address icon and text "Address: 198 West 21th Street, Suite 721 New York NY 10016"

Scenario: Info bar displays phone
  Given I visit the Formcatch page
  Then I see a phone icon and text "Phone: + 1235 2355 98"

Scenario: Info bar displays email
  Given I visit the Formcatch page
  Then I see an email icon and text "Email: info@yoursite.com"

Scenario: Info bar displays website
  Given I visit the Formcatch page
  Then I see a globe icon and text "Website: yoursite.com"

Scenario: Info bar items have circular teal icon containers
  Given I visit the Formcatch page
  Then each info bar item has a circular teal icon container
```

### Contact form

```gherkin
Scenario: Form displays all fields
  Given I visit the Formcatch page
  Then I see a Full Name input field
  And I see an Email Address input field
  And I see a Subject input field
  And I see a Message textarea
  And I see a Send Message button

Scenario: Full Name and Email Address fields are side by side
  Given I visit the Formcatch page
  Then the Full Name and Email Address inputs are displayed in the same row

Scenario: Subject field spans full width
  Given I visit the Formcatch page
  Then the Subject input spans the full width of the form

Scenario: Inputs have underline style
  Given I visit the Formcatch page
  Then all form inputs have a bottom border only (underline style)

Scenario: Field labels are uppercase
  Given I visit the Formcatch page
  Then all form field labels are displayed in uppercase

Scenario: Send Message button is styled
  Given I visit the Formcatch page
  Then the Send Message button has a teal background and white text
```

### Image panel

```gherkin
Scenario: Right column displays an image
  Given I visit the Formcatch page
  Then the right column of the card displays a placeholder image
  And the image fills the full height of the card
```

### Responsive behavior

```gherkin
Scenario: Info bar wraps on mobile
  Given I visit the Formcatch page on a mobile viewport
  Then the info bar items wrap to multiple rows

Scenario: Card columns stack on mobile
  Given I visit the Formcatch page on a mobile viewport
  Then the form and image columns stack vertically
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formcatch page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Page title "Contact Form #03" centered at top
- [ ] Info bar: 4 items in a row with circular teal icons
- [ ] Two-column card: form (white) left, image right
- [ ] Form: "Contact Us" heading with underline-style inputs
- [ ] Full Name + Email Address in a two-column row
- [ ] Subject input full width
- [ ] Message textarea tall
- [ ] Uppercase labels above inputs
- [ ] Send Message button: teal bg, white text, slight radius
- [ ] Right column: placeholder image filling card height
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Responsive: info bar wraps, card stacks on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
