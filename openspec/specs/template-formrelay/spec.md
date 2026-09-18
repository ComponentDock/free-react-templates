# Template: Formrelay (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 06** — a two-column contact page with a
form on the left and a map on the right, plus a row of contact info items with
large circular navy icons below the card.

- **Source slug:** `contact-form-06`
- **Source URL:** https://colorlib.com/wp/template/contact-form-06/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-06/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Brand navy        | `#2C3E7B`              | Button bg, icon circles                    |
| Link teal         | `#55B68A`              | Email/website link text                    |
| Background        | `#F5F5F5`              | Page background (light gray)               |
| Card surface      | `#FFFFFF`              | Form panel background                      |
| Text primary      | `#333333`              | Headings, body copy                        |
| Text secondary    | `#999999`              | Input placeholders, lighter text           |
| Label color       | `#333333`              | Uppercase field labels (dark, bold)        |
| Input border      | `#E0E0E0`              | Bordered input boxes                       |
| Font — headings   | Playfair Display (serif)| "Contact Us" heading                       |
| Font — body       | Poppins (sans-serif)   | Labels, contact info, button               |
| Button radius     | 3px                     | Nearly rectangular, very slight rounding   |
| Button bg         | Brand navy              | —                                          |
| Button text       | White                   | —                                          |
| Input style       | Bordered box            | Full border around inputs (not underline)  |
| Icon circles      | Navy bg (~60px)         | Large circular icon containers below card  |
| Map placeholder   | Map image               | Use static map or picsum seed              |

## Visual design (from screenshot)

The page has three sections on a light gray background:

1. **Title** — "Contact Form #06" centered, serif font, dark text.

2. **Two-column card** — centered below the title:
   - Left (~50%): white background, "Contact Us" heading (serif), form with
     bordered-box inputs and uppercase labels: FULL NAME + EMAIL ADDRESS side
     by side, SUBJECT full width, MESSAGE tall textarea. "Send Message" button
     (navy bg, white text).
   - Right (~50%): full-height map image (Google Maps view of New York area).
     Use a static map placeholder or `picsum.photos/seed/formrelay-map/600/600`.

3. **Contact info row** — below the card, four items centered in a row:
   - Each has a large circular navy icon container (~60px) with white icon
   - Below each: label (bold) + value text
   - Items: Address, Phone, Email (teal link), Website (teal link)

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders the title
  Given I visit the Formrelay page
  Then I see "Contact Form #06" centered at the top

Scenario: Page renders a centered two-column card
  Given I visit the Formrelay page
  Then I see a centered card with a form on the left and a map on the right

Scenario: Page renders contact info below the card
  Given I visit the Formrelay page
  Then I see four contact items in a row below the card
```

### Contact form

```gherkin
Scenario: Form displays all fields
  Given I visit the Formrelay page
  Then I see a Full Name input field
  And I see an Email Address input field
  And I see a Subject input field
  And I see a Message textarea
  And I see a Send Message button

Scenario: Full Name and Email Address are side by side
  Given I visit the Formrelay page
  Then the Full Name and Email Address inputs are in the same row

Scenario: Inputs have bordered box style
  Given I visit the Formrelay page
  Then all form inputs have a full border (box style)
  And the input borders are light gray

Scenario: Field labels are uppercase
  Given I visit the Formrelay page
  Then all form field labels are displayed in uppercase

Scenario: Send Message button is styled
  Given I visit the Formrelay page
  Then the Send Message button has a navy blue background and white text
```

### Map panel

```gherkin
Scenario: Right column displays a map
  Given I visit the Formrelay page
  Then the right column of the card displays a map placeholder image
  And the image fills the full height of the card
```

### Contact info row

```gherkin
Scenario: Info row displays address
  Given I visit the Formrelay page
  Then I see a navy circular icon and text "Address: 198 West 21th Street, Suite 721 New York NY 10016"

Scenario: Info row displays phone
  Given I visit the Formrelay page
  Then I see a navy circular icon and text "Phone: + 1235 2355 98"

Scenario: Info row displays email
  Given I visit the Formrelay page
  Then I see a navy circular icon and text "Email: info@yoursite.com"

Scenario: Info row displays website
  Given I visit the Formrelay page
  Then I see a navy circular icon and text "Website: yoursite.com"

Scenario: Info row items have large circular navy icon containers
  Given I visit the Formrelay page
  Then each contact info item has a large circular navy icon container
```

### Responsive behavior

```gherkin
Scenario: Card columns stack on mobile
  Given I visit the Formrelay page on a mobile viewport
  Then the form and map columns stack vertically

Scenario: Contact info wraps on mobile
  Given I visit the Formrelay page on a mobile viewport
  Then the contact info row wraps to multiple rows
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formrelay page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Page title "Contact Form #06" centered at top
- [ ] Two-column card: form (white) left, map right
- [ ] Form: "Contact Us" heading with bordered-box inputs
- [ ] Full Name + Email Address in a two-column row
- [ ] Subject input full width
- [ ] Message textarea tall
- [ ] Uppercase labels above inputs
- [ ] Send Message button: navy bg, white text, slight radius
- [ ] Right column: map placeholder image filling card height
- [ ] Below card: 4 contact items with large circular navy icons
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Responsive: card stacks, info wraps on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
