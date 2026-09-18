# Template: Orchid (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V14** — a single-page contact form with
a vivid pink-to-purple gradient background and a centered white card containing
a multi-field form with underline-style inputs, inline validation, and a dark
pill-shaped submit button.

- **Source slug:** `contact-form-v14`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v14/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v14/ (404 at
  time of prep — design captured from screenshot only)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v14.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (from screenshot reference)

| Token | Value | Notes |
| --- | --- | --- |
| `--brand-gradient-start` | `#E91E8C` | Hot pink / magenta (left side) |
| `--brand-gradient-end` | `#8B5CF6` | Violet / purple (right side) |
| `--card-bg` | `#FFFFFF` | White card |
| `--text-primary` | `#1A1A2E` | Near-black for headings |
| `--text-label` | `#6B7280` | Gray uppercase labels |
| `--input-border` | `#D1D5DB` | Light gray underline |
| `--input-border-focus` | `#1A1A2E` | Dark underline on focus |
| `--valid-color` | `#10B981` | Green checkmark |
| `--error-color` | `#EF4444` | Red X mark |
| `--button-bg` | `#1A1A2E` | Dark charcoal button |
| `--button-text` | `#FFFFFF` | White button label |
| Font family | `"Poppins", sans-serif` | Assumed from screenshot (sans-serif, geometric) |
| Button shape | Pill / rounded-full | Fully rounded submit button |
| Card shape | Rounded corners | ~12px border-radius, subtle shadow |
| Input style | Underline only | No box border; bottom-border line |

## Visual design notes (screenshot analysis)

- **Background:** Full-viewport linear gradient from hot pink/magenta (left) to
  purple/violet (right). No texture, no pattern — clean smooth gradient.
- **Card:** Centered white rectangle with generous padding, subtle drop shadow,
  rounded corners. Occupies roughly 40–45% of viewport width on desktop.
- **Title:** "Contact Us" in bold, large, dark sans-serif, centered at top of
  card.
- **Form fields:** Labels in small uppercase gray text above each field. Inputs
  have underline-style bottom borders (no box). Fields:
  1. YOUR NAME — split into two columns: first name | last name
  2. EMAIL ADDRESS — single full-width field
  3. PHONE NUMBER — single full-width field
  4. MESSAGE — textarea, taller, placeholder text "Please enter your comments..."
- **Validation:** Inline indicators — green ✓ next to valid fields, red ✗ next
  to invalid fields. These appear to the right of the input.
- **Submit button:** Dark charcoal/black pill-shaped button with white text
  "Submit →" (arrow icon), centered below the form.
- **No navbar, no footer** in the visible design — single-page form only.
- **Typography:** Clean sans-serif, moderate weight, good spacing between fields.

## Gherkin requirements

### Background
  Given the user navigates to the Orchid template
  Then the page displays a contact form on a gradient background

### Scenario: Page layout
  Given the page loads
  Then a full-viewport gradient background is visible (pink-to-purple)
  And a centered white card is displayed
  And the card contains the heading "Contact Us"

### Scenario: Name fields
  Given the page loads
  Then a "YOUR NAME" label is visible
  And two side-by-side input fields are shown (first name and last name)
  And both fields have underline-style borders

### Scenario: Email field
  Given the page loads
  Then an "EMAIL ADDRESS" label is visible
  And a single full-width input field is shown with underline border

### Scenario: Phone field
  Given the page loads
  Then a "PHONE NUMBER" label is visible
  And a single full-width input field is shown with underline border

### Scenario: Message field
  Given the page loads
  Then a "MESSAGE" label is visible
  And a textarea is shown with placeholder "Please enter your comments..."
  And the textarea has underline-style border

### Scenario: Submit button
  Given the page loads
  Then a "Submit" button is visible at the bottom of the form
  And the button is dark/charcoal with white text
  And the button has a pill/rounded shape
  And the button displays a right-arrow icon after the text

### Scenario: Valid field indicator
  Given the user enters a valid email address
  Then a green checkmark appears next to the email field

### Scenario: Invalid field indicator
  Given the user enters an invalid phone number
  Then a red X mark appears next to the phone field

### Scenario: Form submission with empty fields
  Given the user clicks Submit without filling any fields
  Then validation error indicators appear on required fields
  And the form is not submitted

### Scenario: Responsive layout
  Given the user views on a mobile device (width < 768px)
  Then the card takes near-full width with horizontal padding
  And the name fields stack vertically instead of side-by-side

## Verification checklist

- [ ] Gradient background renders correctly (pink-to-purple, full viewport)
- [ ] White card is centered with correct padding and shadow
- [ ] "Contact Us" heading is bold and centered
- [ ] All five form fields present with correct labels (uppercase, gray)
- [ ] Name fields are side-by-side on desktop, stacked on mobile
- [ ] All inputs have underline-style borders (no box borders)
- [ ] Textarea has placeholder text
- [ ] Submit button is dark, pill-shaped, with arrow icon
- [ ] Inline validation: green ✓ for valid, red ✗ for invalid
- [ ] Form does not submit when required fields are empty
- [ ] Responsive: card scales properly on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
