# Template: Reachform (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 17** — a two-column contact page with a white form panel on the left and a dark navy company-details sidebar on the right.

- **Source slug:** `contact-form-17`
- **Source URL:** https://colorlib.com/wp/template/contact-form-17/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/contact-form-17/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| font-family | `"Roboto", sans-serif` | Body and headings |
| brand-primary | `#35477d` (navy blue) | Button bg, form heading color, contact-info panel bg |
| bg-body | `#fff` | Page background, form panel background |
| bg-top-teal | `#8bbabb` | Top pseudo-element overlay (top 50vh) — used as subtle decorative background |
| text-body | `#8c8c8c` (gray) | Body paragraph text |
| text-heading | `#000` | Headings h1–h6 |
| text-label | `#b3b3b3` (light gray) | Form labels |
| text-info | `rgba(255,255,255,0.5)` | Contact info body text |
| icon-color | `#fff` | Contact info icons |
| shadow-wrap | `0 0 20px 0 rgba(0,0,0,0.2)` | Card shadow on contact-wrap |
| btn-radius | `0` (square) | Button and inputs have no border-radius |
| btn-letter-spacing | `0.2rem` | Button uppercase tracking |
| btn-font-size | `12px` | Button font size |
| input-style | bottom-border only (`border-bottom: 1px solid #ccc`) | Form controls use underline style |

### Layout

Two-column Bootstrap-style grid inside a `.container`:

- **Left column (col-md-8)** — white `.form` panel
  - Heading: "Send us a message" (`#35477d`, 20px)
  - Name * (text input, required)
  - Email * (text input, required)
  - Phone (text input, optional)
  - Company (text input, optional)
  - Message * (textarea, required, 4 rows)
  - "Send Message" button (square, navy, uppercase, letter-spacing 0.2rem)
  - Form success message: "Your message was sent, thank you!"
  - Form warning/error message area
- **Right column (col-md-4)** — dark navy `.contact-info` panel
  - Heading: "Contact Information" (white, 20px)
  - Description paragraph (lorem ipsum placeholder)
  - Address with room icon: "9757 Aspen Lane South Richmond Hill, NY 11419"
  - Phone with phone icon: "+1 (291) 939 9321"
  - Email with envelope icon: "info@mywebsite.com"
- Both columns are wrapped in `.contact-wrap` with box-shadow
- Full height stretching between columns (`.align-items-stretch`)
- No separate navbar/header — this is a standalone page section

### Screenshot visual notes

The screenshot at `https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-17.jpg` shows:
- A centered card with rounded box-shadow on a light/teal-tinted background
- Left 2/3: white form with underlined inputs, two columns of fields, "Send Message" button
- Right 1/3: dark navy sidebar with white text and icons for address/phone/email
- Clean, minimal aesthetic with Roboto font

## Gherkin requirements

### Scenario: Page renders with two-column layout

```gherkin
Given the user navigates to the Reachform page
Then a centered contact card is displayed with a box-shadow
And the card has two columns: a form panel and a contact-info panel
```

### Scenario: Form section displays all fields

```gherkin
Given the form panel is visible
Then the heading "Send us a message" is displayed in navy color
And the following fields are shown: Name, Email, Phone, Company, Message
And Name and Email fields are displayed side by side in the first row
And Phone and Company fields are displayed side by side in the second row
And Message textarea is displayed in a full-width third row
And all inputs use underline-style (bottom border only)
```

### Scenario: Required fields validation

```gherkin
Given the user submits the form without filling any fields
Then validation errors appear for Name, Email, and Message fields
And Phone and Company fields do not show validation errors
```

### Scenario: Form submission success

```gherkin
Given the user fills in Name, Email, and Message
When the user clicks "Send Message"
Then a success message "Your message was sent, thank you!" is displayed
And the form fields are cleared
```

### Scenario: Contact information panel

```gherkin
Given the contact-info panel is visible
Then the heading "Contact Information" is displayed in white
And a description paragraph is shown below the heading
And three contact items are listed: address, phone, email
And each contact item has an icon on the left and text on the right
And the panel background is navy blue (#35477d)
```

### Scenario: Button styling

```gherkin
Given the "Send Message" button is displayed
Then it has a navy blue background (#35477d)
And it has square corners (no border-radius)
And the text is uppercase with letter-spacing
And the button text is white
```

### Scenario: Responsive layout

```gherkin
Given the viewport is narrower than 768px
Then the two columns stack vertically
And the form panel appears above the contact-info panel
```

## Verification checklist

- [ ] Template name is `reachform` (apps/reachform)
- [ ] Package name is `@free-react-templates/reachform`
- [ ] No references to "colorlib", "contact-form-17", or the source template in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains `reachform.free.componentdock.com`
- [ ] homepage in package.json is `https://reachform.free.componentdock.com`
- [ ] Roboto font loaded via Google Fonts or similar
- [ ] Brand color #35477d used via Tailwind @theme
- [ ] Form uses underline-style inputs (bottom border only)
- [ ] Button is square, uppercase, navy blue
- [ ] Contact info panel is dark navy with white icons/text
- [ ] Box shadow on the contact-wrap card
- [ ] Placeholder images from picsum.photos (if needed)
- [ ] Icons from lucide-react
- [ ] All fields render correctly
- [ ] Form validation works for required fields
- [ ] Responsive stacking on mobile
- [ ] Tests at 100% coverage
