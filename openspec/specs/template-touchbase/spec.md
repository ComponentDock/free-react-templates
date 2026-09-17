# Template: TouchBase (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form V12" — a clean, minimal two-column contact
page with company details on the left and a labeled contact form on the right.

- **Source:** https://colorlib.com/wp/template/contact-form-12/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/contact-form-12/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Description:** Free general inquiry contact form with additional company details (address, phone, email). Bootstrap-based original; recreated with Tailwind utilities.

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) and the rendered DOM:

| Token             | Value                        | Notes                                      |
| ----------------- | ---------------------------- | ------------------------------------------ |
| `--brand-primary` | `#0d6efd`                    | Bootstrap primary blue (Send Message button) |
| `--text-body`     | `#999999`                    | Paragraph/body text color                  |
| `--text-heading`  | `#000000`                    | h1–h6 and label color                      |
| `--bg-page`       | `#ffffff`                    | Page background                            |
| `--border-input`  | `#d9d9d9`                    | Form input border, 1px solid               |
| `--border-focus`  | `#000000`                    | Input focus border color                   |
| `--success`       | `#55A44E`                    | Success message color                      |
| `--error`         | `#B90B0B`                    | Error/warning message color                |
| Font — headings   | `"Poppins", sans-serif`      | All h1–h6, bold (700)                      |
| Font — body       | `"Roboto", sans-serif`       | Paragraphs, labels                         |
| h2 size           | `3.5rem`                     | "Contact Us" heading                       |
| h3 size           | `2rem`                       | Sub-headings                               |
| Input height      | `55px`                       | All form controls (inputs + button)        |
| Button shape      | Square corners (`rounded-0`) | Bootstrap `rounded-0`, padding `py-2 px-4`  |
| Button style      | Solid blue, white text       | `.btn-primary`                             |
| Section padding   | `7rem 0`                     | Top/bottom padding on `.content`           |
| Link transition   | `.3s all ease`               | Hover transition on all links              |
| Line height       | `2`                          | Body line-height                           |

## Layout

Two-column centered layout within a Bootstrap-style container:

- **Left column** (col-md-5, with `mr-auto`):
  1. "Contact Us" heading (h2, bold, 3.5rem, black)
  2. Paragraph description (gray body text, ~5 lines)
  3. Company details list (unordered, no bullets):
     - Map icon + address (two lines)
     - Phone icon + phone number
     - Envelope icon + email address
- **Right column** (col-md-6):
  1. Contact form:
     - Name field (text input, full width, labeled)
     - Email field (text input, full width, labeled)
     - Message field (textarea, full width, labeled, ~7 rows)
     - "Send Message" button (Bootstrap primary blue, square corners)
  2. Success message (hidden by default): "Your message was sent, thank you!"
  3. Warning/error message (hidden by default)

## Requirements (Gherkin)

### Scenario: Page renders with correct two-column layout

```gherkin
Given the user loads the TouchBase contact page
Then the page displays a "Contact Us" heading in the left column
And the right column contains a contact form with Name, Email, and Message fields
```

### Scenario: Contact details are displayed

```gherkin
Given the user loads the TouchBase contact page
Then the left column shows a street address with a map icon
And the left column shows a phone number with a phone icon
And the left column shows an email address with an envelope icon
```

### Scenario: Form fields are labeled and properly styled

```gherkin
Given the user loads the TouchBase contact page
Then each form field has a visible label above it (Name, Email, Message)
And inputs have a light gray border (#d9d9d9)
And inputs turn black-bordered on focus
```

### Scenario: Form submission shows success message

```gherkin
Given the user fills in Name, Email, and Message fields
When the user clicks "Send Message"
Then a success message "Your message was sent, thank you!" appears
And the success message is styled in green (#55A44E)
```

### Scenario: Form validation on empty fields

```gherkin
Given the user leaves all fields empty
When the user clicks "Send Message"
Then the form displays validation errors for required fields
And error text appears in red (#B90B0B)
```

### Scenario: Responsive layout on mobile

```gherkin
Given the user loads the TouchBase contact page on a mobile viewport
Then the two columns stack vertically (single column)
And the contact details appear above or below the form
```

### Scenario: Accessibility

```gherkin
Given the user loads the TouchBase contact page
Then all form fields have associated labels (htmlFor/id)
And the form inputs are keyboard-focusable
And the Submit button has accessible text
```

### Scenario: Brand styling consistency

```gherkin
Given the user loads the TouchBase contact page
Then headings use Poppins font
And body text uses Roboto font
And the page background is white (#ffffff)
And the "Send Message" button is solid blue (#0d6efd) with square corners
```

## Verification checklist

- [ ] Two-column layout renders correctly (left: heading + details, right: form)
- [ ] Heading uses Poppins font at ~3.5rem bold
- [ ] Body text uses Roboto font in gray (#999)
- [ ] Company details display with lucide-react icons (MapPin, Phone, Mail)
- [ ] Form has Name, Email, Message fields with labels
- [ ] Inputs have 1px solid #d9d9d9 border, square corners, 55px height
- [ ] Input focus turns border to black (#000)
- [ ] "Send Message" button is blue (#0d6efd), square, white text
- [ ] Form submission shows green success message
- [ ] Validation shows red error messages
- [ ] Layout stacks vertically on mobile (<768px)
- [ ] Footer links to ComponentDock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] TypeScript strict mode passes
- [ ] Build succeeds
