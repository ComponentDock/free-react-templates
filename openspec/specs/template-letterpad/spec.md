# Template: Letterpad (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form V18" — a split-screen contact form page with a full-bleed dark background image on the left and a clean white form panel on the right.

- **ColorLib source:** `contact-form-v18`
- **Preview URL:** `https://preview.colorlib.com/theme/contact-form-v18/` (unreachable; design derived from screenshot `ContactFrom_v18.jpg`)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design tokens

Extracted from the screenshot analysis (preview was 404):

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#5B6BF5` | Blue-purple used for button and dropdown highlight |
| Background left | Dark photo (black/charcoal surface) | Full-bleed desk image |
| Background right | `#FFFFFF` | White form panel |
| Heading font | Serif (Playfair Display or similar) | "Send Us A Message" |
| Body font | Sans-serif (system/Poppins) | Form labels and placeholders |
| Button color | `#5B6BF5` | Solid fill, full-width |
| Button text | `#FFFFFF` | White on blue |
| Button radius | `4px` | Subtle rounded corners |
| Input border | `#E0E0E0` | Light gray, 1px solid |
| Input background | `#FFFFFF` | White |
| Label color | `#333333` | Dark gray, uppercase |
| Placeholder color | `#999999` | Light gray |
| Social icon Facebook | `#3B5998` | Blue circle |
| Social icon Twitter | `#1DA1F2` | Light blue circle |
| Social icon Instagram | `#E4405F` | Pink-red circle |
| Social icon shape | Circle | Solid colored circles |

## Section structure (top to bottom)

1. **Full-viewport split layout** — no navbar, single section fills the viewport
   - **Left half:** Full-bleed dark background image (laptop, coffee, notebook on dark surface) — decorative only
   - **Right half:** White background, centered contact form

2. **Contact form panel (right half)**
   - **Heading:** "Send Us A Message" — centered, serif font, dark color
   - **Full Name field:** text input, label "FULL NAME" (uppercase), placeholder "Enter your name..."
   - **Email Address field:** text input, label "EMAIL ADDRESS" (uppercase), placeholder "Enter your email..."
   - **What Do You Need? field:** select dropdown, label "WHAT DO YOU NEED?" (uppercase), options: "Please chooses", "UI/UX Design", "eCommerce Business", "Online Services"
   - **Send button:** full-width solid blue-purple button, text "SEND", white text
   - **Social icons row:** three circular icons — Facebook, Twitter, Instagram — centered below button

## Gherkin requirements

### Scenario: Full viewport split layout
```gherkin
Given the user visits the Letterpad page
Then the page fills the full viewport
And the left half displays a dark background image
And the right half displays a white background with the contact form
```

### Scenario: Contact form heading
```gherkin
Given the contact form is visible
Then the heading reads "Send Us A Message"
And the heading is displayed in a serif font
And the heading is centered in the form panel
```

### Scenario: Full Name input
```gherkin
Given the contact form is visible
Then a "FULL NAME" input field is displayed
And the placeholder text is "Enter your name..."
And the input accepts text
```

### Scenario: Email Address input
```gherkin
Given the contact form is visible
Then an "EMAIL ADDRESS" input field is displayed
And the placeholder text is "Enter your email..."
And the input accepts email format
```

### Scenario: What Do You Need? dropdown
```gherkin
Given the contact form is visible
Then a "WHAT DO YOU NEED?" select field is displayed
And the default option is "Please chooses"
And the options include "UI/UX Design", "eCommerce Business", "Online Services"
```

### Scenario: Send button
```gherkin
Given the contact form is visible
Then a full-width "SEND" button is displayed
And the button has a blue-purple background
And the button text is white
```

### Scenario: Social icons
```gherkin
Given the contact form is visible
Then three social media icons are displayed below the Send button
And the icons are circular
And the icons are for Facebook, Twitter, and Instagram
And each icon uses its brand color
```

### Scenario: Responsive layout
```gherkin
Given the user views the page on a mobile viewport
Then the split layout stacks vertically
And the image appears above the form
And all form fields remain accessible
```

## Verification checklist

- [ ] Split layout renders correctly (left image, right form)
- [ ] Heading uses serif font, centered
- [ ] All three form fields present with correct labels and placeholders
- [ ] Dropdown has correct options
- [ ] Send button is full-width, blue-purple, white text
- [ ] Social icons are circular with correct brand colors
- [ ] Responsive: stacks on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Coverage 100%
- [ ] Build succeeds
