# Template: Missive (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form V12"
(https://colorlib.com/wp/template/contact-form-v12/).
Preview URL (unreachable at prep time — 404):
https://preview.colorlib.com/theme/contact-form-v12/
Screenshot reference: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v12.jpg

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Design Tokens (from screenshot analysis)

> **Note:** The live preview at preview.colorlib.com was unreachable (404) at
> prep time. All tokens below are extracted from the screenshot.

### Colors

| Token               | Value        | Usage                                      |
| ------------------- | ------------ | ------------------------------------------ |
| `--color-brand`     | `#7c3aed`    | Primary purple — button, accent elements   |
| `--color-bg`        | gradient     | Page background — purple gradient overlay on cityscape photo |
| `--color-card`      | `#ffffff`    | White card background                      |
| `--color-text`      | `#1a1a2e`    | Headings and body text                     |
| `--color-input-bg`  | `#f0f0f0`    | Light gray input field backgrounds         |
| `--color-input-text`| `#555555`    | Placeholder/input text                     |
| `--color-send-btn`  | `#7c3aed`    | "Send" button background                   |

### Typography

| Token          | Value                                |
| -------------- | ------------------------------------ |
| Font family    | `"Poppins", sans-serif` (Google Fonts) |
| Heading weight | 700 (bold)                           |
| Body weight    | 400 (regular)                        |

### Layout & Shapes

| Token          | Value                                        |
| -------------- | -------------------------------------------- |
| Card           | Centered, white, rounded (border-radius ~12px), subtle shadow |
| Card layout    | Two-column: illustration (left) + form (right) |
| Button shape   | Full-width, heavily rounded (border-radius ~25px) |
| Inputs         | Light gray bg, rounded (border-radius ~8px), padding ~12px |
| Page bg        | Full-viewport purple gradient over cityscape photo |

## Gherkin Requirements

### Background: Page Structure

Given the user visits the Missive page
Then a purple gradient background fills the viewport
And a white card is centered on the page
And the card has two columns: illustration on the left, form on the right

### Scenario: Card heading

Given the card is visible
Then the heading reads "Get in touch"
And the heading is bold and dark-colored

### Scenario: Name input

Given the contact form is displayed
Then a "Name" input field is visible
And it has a user icon prefix
And it has a light gray background

### Scenario: Email input

Given the contact form is displayed
Then an "Email" input field is visible
And it has an email icon prefix
And it has a light gray background

### Scenario: Message textarea

Given the contact form is displayed
Then a "Message" textarea is visible
And it has a light gray background
And it is taller than the single-line inputs

### Scenario: Send button

Given the contact form is displayed
Then a "Send" button is visible
And the button is full-width
And the button has a purple background
And the button text is white
And the button has a heavily rounded shape (pill-like)

### Scenario: Illustration panel

Given the card is visible
Then the left column shows an envelope/mail illustration
And the illustration includes abstract decorative elements (triangles, circles, dots)
And the illustration uses brand purple as the primary color

### Scenario: Footer

Given the page is fully rendered
Then the footer contains a link to https://www.componentdock.com/
And the footer is branded "Component Dock"

### Scenario: Form submission

Given all form fields are empty
When the user clicks "Send"
Then form validation errors should appear
And the form should not submit

Given valid name, email, and message are entered
When the user clicks "Send"
Then the form should submit successfully

## Verification Checklist

- [ ] Page renders with purple gradient background
- [ ] White card is centered with correct two-column layout
- [ ] "Get in touch" heading renders bold and dark
- [ ] Name input has user icon and gray background
- [ ] Email input has email icon and gray background
- [ ] Message textarea has gray background and correct sizing
- [ ] "Send" button is purple, full-width, pill-shaped
- [ ] Left panel shows envelope illustration with decorative elements
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] `public/CNAME` contains `missive.free.componentdock.com`
- [ ] `package.json` `homepage` is `https://missive.free.componentdock.com`
- [ ] `vite.config.ts` registers `injectUiSource()`
- [ ] Tests pass at 100% coverage
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
