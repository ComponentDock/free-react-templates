# Template: RegVault (Registration Form)

## Purpose

Recreation of ColorLib **Regform 21** (`colorlib-regform-21`).
Preview URL: https://preview.colorlib.com/theme/colorlib-regform-21/ (unreachable at prep time — design captured from screenshot).
Source: https://colorlib.com/wp/template/colorlib-regform-21/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-21.jpg

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Design tokens

Extracted from the screenshot (preview was 404):

| Token             | Value                              | Notes                                      |
| ----------------- | ---------------------------------- | ------------------------------------------ |
| Brand primary     | `#0C1456` (deep navy)             | Left panel background, card background     |
| Accent / CTA      | `#E88DAA` (pink/coral)            | Heading text, button fill, label color     |
| Page background   | Gradient `#4B2A7A` → `#C47A94`   | Full-viewport purple-to-mauve diagonal     |
| Text primary      | `#FFFFFF`                          | Body text on dark backgrounds              |
| Text secondary    | `#E88DAA`                         | Form labels, headings                      |
| Button text       | `#FFFFFF`                         | White on pink button                       |
| Button bg         | `#E88DAA`                         | Pink/coral fill                            |
| Input border      | `rgba(255,255,255,0.3)`           | Underline-only (bottom border)             |
| Card radius       | `0` (sharp corners)               | No border-radius on the card               |
| Button radius     | `4px`                             | Slightly rounded pill shape                |
| Font family       | Serif display + sans-serif body   | Heading: serif (e.g. Playfair Display); body: sans (e.g. Poppins) |

## Gherkin requirements

### Background
Given the page is loaded
Then a full-viewport gradient background is visible (purple to mauve)

### Scenario: Card layout
Given the page is loaded
Then a centered card is visible
And the card is split into two equal columns
And the left column has a dark navy background
And the right column displays an image with an overlay

### Scenario: Form heading
Given the card is visible
Then the heading "Set The Event" appears in pink/coral serif font
And the heading is left-aligned within the left panel

### Scenario: Price display
Given the card is visible
Then "Price" label is shown with value "$270"
And the value is displayed as read-only text (not editable)

### Scenario: People selector
Given the card is visible
Then "People" label is shown with a dropdown selector defaulting to "1"

### Scenario: Name input
Given the card is visible
Then a "Name" text input is shown with an underline-only border style

### Scenario: Mail input
Given the card is visible
Then a "Mail" text input is shown with an underline-only border style

### Scenario: Phone input
Given the card is visible
Then a "Phone" text input is shown with an underline-only border style

### Scenario: Comment input
Given the card is visible
Then a "Comment" text input is shown with an underline-only border style

### Scenario: Submit button
Given the card is visible
Then a "Send your booking" button is shown
And the button has a pink/coral background
And the button text is white

### Scenario: Contact info overlay
Given the card is visible
Then the right panel shows an overlay at the bottom
And the overlay displays an address, phone number, and email

### Scenario: Responsive behavior
Given the page is viewed on a mobile viewport
Then the card stacks vertically (form on top, image below)
And the form fields remain accessible and properly sized

## Verification checklist

- [ ] Full-viewport gradient background renders correctly
- [ ] Card is centered and split into two columns on desktop
- [ ] Left panel: dark navy background with form
- [ ] Right panel: image with bottom overlay showing contact info
- [ ] Heading "Set The Event" in pink/coral serif font
- [ ] Price field displays "$270" as read-only text
- [ ] People field is a dropdown with options (1, 2, 3, etc.)
- [ ] Name, Mail, Phone, Comment inputs use underline-only style
- [ ] Submit button "Send your booking" styled with pink/coral fill
- [ ] Contact info (address, phone, email) in right panel overlay
- [ ] Mobile responsive: card stacks vertically
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
