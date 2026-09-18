# Template: Cartofield (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V19** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/contact-form-v19/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v19/ (404 — fallback to screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v19.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from screenshot analysis (preview unreachable):

| Token | Value | Notes |
|-------|-------|-------|
| Background | Map image (blue-gray tinted) | Full-viewport map background, Manhattan/NYC area |
| Card background | `#ffffff` | White centered card with shadow |
| Heading color | `#333333` | Dark charcoal for "Send Us A Message" |
| Input border | `#e0e0e0` | Light gray border on form inputs |
| Placeholder text | `#999999` | Muted gray placeholder |
| Button color | `#4a7ec5` | Medium blue background |
| Button text | `#ffffff` | White on blue |
| Button border-radius | `4px` | Slightly rounded |
| Font family | Open Sans (or similar clean sans-serif) | Clean, readable sans-serif |
| Card shadow | `0 4px 20px rgba(0,0,0,0.1)` | Subtle elevation shadow |
| Icon color | `#999999` | Gray envelope icon in email field |

## Layout

Full-viewport layout with map background:

- **Background:** Full-viewport map image (blue-gray tinted, showing a geographic area)
- **Center:** White card (max-width ~500px) vertically and horizontally centered
  - Heading: "Send Us A Message"
  - Email input with envelope icon
  - Textarea: "How Can We Help?"
  - Submit button: "SEND MESSAGE"

## Sections (in order)

1. **Map Background + Centered Contact Card**
   - Full viewport background: map image (use a placeholder map or gradient)
   - Centered white card with subtle shadow
     - Heading: "Send Us A Message"
     - Email field: text input with envelope icon on left, placeholder "Your Email Address"
     - Message textarea: placeholder "How Can We Help?"
     - Submit button: "SEND MESSAGE" — blue background, white text, rounded

## Gherkin requirements

### Scenario: Page renders with map background
```
Given a user visits the Cartofield template
Then the page displays a full-viewport map background
And the background has a blue-gray tint
```

### Scenario: Contact card is centered
```
Given the page has loaded
Then a white card is centered on the page
And the card has a subtle shadow
```

### Scenario: Contact form heading
```
Given the card is visible
Then the heading "Send Us A Message" is displayed at the top of the card
```

### Scenario: Email field with icon
```
Given the form is visible
Then there is an email input with an envelope icon on the left
And the placeholder reads "Your Email Address"
```

### Scenario: Message textarea
```
Given the form is visible
Then there is a textarea
And the placeholder reads "How Can We Help?"
```

### Scenario: Submit button
```
Given the form is visible
Then there is a submit button labeled "SEND MESSAGE"
And the button has a blue background (#4a7ec5)
And the button text is white
```

### Scenario: Responsive behavior
```
Given a user views on mobile (viewport < 768px)
Then the card takes full width with padding
And the form fields remain usable and properly spaced
```

## Verification checklist

- [ ] Map background fills the viewport
- [ ] White card centered with shadow
- [ ] Heading "Send Us A Message" renders with correct color/size
- [ ] Email input has envelope icon and correct placeholder
- [ ] Textarea has correct placeholder "How Can We Help?"
- [ ] Submit button "SEND MESSAGE" styled with blue background, white text
- [ ] Responsive: card adapts on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Spec is the sole provenance record
