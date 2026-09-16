# Template: Formview (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 09** — a full dark-background contact page
with gold/tan accent icons, a centered form, and a full-width button. The entire
page is dark (no card container).

- **Source slug:** `contact-form-09`
- **Source URL:** https://colorlib.com/wp/template/contact-form-09/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-09/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Page bg           | `#1A1A1A`              | Very dark, nearly black — entire page      |
| Brand gold        | `#C4A76C`              | Button bg, icon circles                    |
| Input bg          | `#2A2A2A`              | Dark input field backgrounds               |
| Text primary      | `#FFFFFF`              | Headings, labels on dark                   |
| Text secondary    | `#888888`              | Input placeholders                         |
| Button text       | `#1A1A1A`              | Dark text on gold button                   |
| Font — headings   | Playfair Display (serif)| "Contact Form #09", "Get in touch with us" |
| Font — body       | Poppins (sans-serif)   | Labels, contact info, button               |
| Button radius     | 3px                     | Slight rounding                            |
| Button width      | Full width              | Spans the entire form width                |
| Icon circles      | Gold bg (~60px)         | Circular icon containers, dark icon inside |

## Visual design (from screenshot)

The entire page has a very dark background (#1A1A1A). Everything is centered.

1. **Title** — "Contact Form #09" in white serif font, centered.

2. **Icon row** — three circular gold/tan icon containers in a centered row:
   - Location pin → Address
   - Phone → Phone
   - Paper plane → Email
   - Below each icon: label (bold white) + value text

3. **Contact info** — three items below the icons, centered:
   - Address: 198 West 21th Street, Suite 721 New York NY 10016
   - Phone: + 1235 2355 98
   - Email: info@yoursite.com

4. **Form** — centered, ~50% max-width:
   - "Get in touch with us" heading in white serif
   - Full-width stacked inputs: Name, Email, Subject, Message (dark bg, light placeholder)
   - "SEND MESSAGE" button: full width, gold bg, dark text

Key differences from other forms: entire page is dark (no card), gold accent,
full-width button, no side-by-side fields, centered single-column layout.

## Gherkin requirements

### Page layout

```gherkin
Scenario: Page renders with dark background
  Given I visit the Formview page
  Then the entire page has a dark background
  And the page title "Contact Form #09" is displayed in white

Scenario: Page renders icon row
  Given I visit the Formview page
  Then I see three circular gold icons in a centered row

Scenario: Page renders centered form
  Given I visit the Formview page
  Then I see a centered form with a "Get in touch with us" heading
```

### Contact info

```gherkin
Scenario: Info displays address
  Given I visit the Formview page
  Then I see "Address:" followed by "198 West 21th Street, Suite 721 New York NY 10016"

Scenario: Info displays phone
  Given I visit the Formview page
  Then I see "Phone:" followed by "+ 1235 2355 98"

Scenario: Info displays email
  Given I visit the Formview page
  Then I see "Email:" followed by "info@yoursite.com"
```

### Contact form

```gherkin
Scenario: Form displays all fields
  Given I visit the Formview page
  Then I see a Name input field
  And I see an Email input field
  And I see a Subject input field
  And I see a Message textarea
  And I see a SEND MESSAGE button

Scenario: Form fields are stacked vertically and full width
  Given I visit the Formview page
  Then all form fields are displayed in a single vertical column
  And all inputs span the full width of the form

Scenario: Inputs have dark background
  Given I visit the Formview page
  Then all form inputs have a dark background
  And the input placeholders are gray

Scenario: Button is full width with gold background
  Given I visit the Formview page
  Then the SEND MESSAGE button spans the full width of the form
  And the button has a gold background and dark text
```

### Responsive behavior

```gherkin
Scenario: Form remains centered on mobile
  Given I visit the Formview page on a mobile viewport
  Then the form remains centered and full width
  And the icon row wraps if needed
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the Formview page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text references Component Dock
```

## Verification checklist

- [ ] Entire page has dark background (#1A1A1A)
- [ ] Page title "Contact Form #09" centered in white
- [ ] Three circular gold icons in a centered row
- [ ] Contact info below icons (Address, Phone, Email)
- [ ] "Get in touch with us" heading centered
- [ ] Form: Name, Email, Subject, Message stacked vertically, full width
- [ ] Inputs: dark bg, gray placeholders
- [ ] SEND MESSAGE button: full width, gold bg, dark text
- [ ] Fonts: Playfair Display for headings, Poppins for body
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
