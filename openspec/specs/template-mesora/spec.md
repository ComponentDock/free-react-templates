# Template: Mesora (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V18** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/contact-form-v18/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v18/ (404 — fallback to screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v18.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from screenshot analysis (preview unreachable):

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#6366f1` | Indigo-500 — button, dropdown highlight |
| Background (form side) | `#ffffff` | White panel, right half |
| Background (hero image) | Dark desk photo | Left half, full-height background image |
| Heading color | `#333333` | Dark charcoal for "Send Us A Message" |
| Input border | `#e0e0e0` | Light gray border on form inputs |
| Placeholder text | `#999999` | Muted gray placeholder |
| Button text | `#ffffff` | White on indigo |
| Button border-radius | `4px` | Slightly rounded |
| Font family | Poppins (or similar geometric sans-serif) | Clean, modern sans-serif |
| Social icon size | ~36px circular | Facebook (blue), Twitter (sky), YouTube (red) |

## Layout

Split-screen layout (50/50):

- **Left half:** Full-height hero image (dark overhead desk photo — laptop, notebook, phone, coffee cup). Serves as visual backdrop.
- **Right half:** White panel with centered contact form and social links.

## Sections (in order)

1. **Split Hero / Contact Form Panel**
   - Full viewport height split layout
   - Left: background image (dark desk photography)
   - Right: white panel, vertically centered content
     - Heading: "Send Us A Message"
     - Form with three fields:
       - Full Name (text input, label "FULL NAME", placeholder "Enter your name...")
       - Email Address (email input, label "EMAIL ADDRESS", placeholder "Enter your email...")
       - What Do You Need? (select dropdown, label "WHAT DO YOU NEED?", options: Please chooses, UI/UX Design, eCommerce Bussiness, Online Services)
     - Submit button: "SEND" — indigo background, white text, full-width
     - Social icons row: Facebook, Twitter/X, YouTube — circular, brand-colored, horizontally centered

## Gherkin requirements

### Scenario: Page renders the split layout
```
Given a user visits the Mesora template
Then the page displays a split-screen layout
And the left half shows a dark desk background image
And the right half shows a white contact form panel
```

### Scenario: Contact form heading is visible
```
Given the page has loaded
Then the heading "Send Us A Message" is displayed in the form panel
```

### Scenario: Full Name field
```
Given the form is visible
Then there is a text input labeled "FULL NAME"
And the placeholder reads "Enter your name..."
```

### Scenario: Email Address field
```
Given the form is visible
Then there is an email input labeled "EMAIL ADDRESS"
And the placeholder reads "Enter your email..."
```

### Scenario: Service dropdown
```
Given the form is visible
Then there is a select dropdown labeled "WHAT DO YOU NEED?"
And it contains options: "Please chooses", "UI/UX Design", "eCommerce Bussiness", "Online Services"
```

### Scenario: Submit button
```
Given the form is visible
Then there is a submit button labeled "SEND"
And the button has an indigo background (#6366f1)
And the button text is white
```

### Scenario: Social links
```
Given the page has loaded
Then there are social media icons below the form
And the icons include Facebook, Twitter/X, and YouTube
And each icon is circular with its brand color
```

### Scenario: Responsive behavior
```
Given a user views on mobile (viewport < 768px)
Then the split layout stacks vertically
And the image section appears above the form panel
And the form fields remain usable and properly spaced
```

## Verification checklist

- [ ] Split layout renders at full viewport height
- [ ] Left panel shows background image (placeholder via picsum.photos)
- [ ] Right panel has white background
- [ ] Heading "Send Us A Message" renders with correct color/size
- [ ] All three form fields render with labels and placeholders
- [ ] Select dropdown has all four options
- [ ] Submit button styled with indigo background, white text
- [ ] Social icons render (Facebook, Twitter/X, YouTube) with brand colors
- [ ] Responsive: stacks on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Spec is the sole provenance record
