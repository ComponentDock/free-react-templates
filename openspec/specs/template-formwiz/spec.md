# Template: FormWiz (Multi-Step Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 30" — a minimal, responsive multi-step
form wizard with circular step indicators. This is a single-page component
(wizard card centered on a background image), not a multi-section landing page.

- **Source:** https://colorlib.com/wp/template/colorlib-wizard-30/
- **Source slug:** colorlib-wizard-30
- **Category:** Bootstrap Wizard Templates / Multi-Step Form
- **Preview (original):** https://colorlib.com/etc/bwiz/colorlib-wizard-30/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-30.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

### Structure (3 steps)

| Step | Fields |
|------|--------|
| 1 | First Name (text), Last Name (text) |
| 2 | Email Address (email), Password (password) |
| 3 | Subject (select: Finance / Marketing / IT Support), Comment (text) |

Navigation: Previous / Next buttons (pill-shaped), no submit on final step in
original. Step indicator: numbered circles (1, 2, 3) connected by lines, active
circle fills with brand color.

## Design tokens

Extracted from `css/style.css` of the original template:

| Token | Value | Usage |
|-------|-------|-------|
| `brand` | `#3760e5` | Header bg, active step circle, action buttons |
| `brand-hover` | `#2b4ab3` | Button hover state |
| `surface` | `#fff` | Wizard card background |
| `text-primary` | `#333` | Labels, input text |
| `text-secondary` | `#666` | Header subtitle, select placeholder, select icon |
| `border` | `1px solid #e5e5e5` | Input borders, step connector lines |
| `step-inactive` | `#ccc` | Inactive step circle background |
| `font-family` | `'Montserrat', sans-serif` | All text |
| `card-radius` | `8px` | Wizard card border-radius |
| `input-radius` | `5px` | Input and select border-radius |
| `button-radius` | `25px` | Action buttons (pill shape) |
| `step-circle-size` | `60px × 60px` | Step indicator circles |
| `card-shadow` | `0 8px 20px rgba(0,0,0,0.15)` | Wizard card box-shadow |
| `card-width` | `850px` | Wizard card max-width |

### Visual description (from screenshot analysis)

- Full-page background image (cityscape/abstract), wizard card centered vertically
- White card with rounded corners (8px), soft shadow
- Blue header bar (#3760e5) with "FORM WIZARD" title in white, bold, 28px
- Three circular step indicators (numbered 1/2/3) with connecting lines
- Active/completed circles fill with brand blue; inactive are gray (#ccc)
- Form fields stacked vertically with labels above inputs
- Pill-shaped Previous/Next buttons in brand blue, right-aligned
- Responsive: single-column on mobile, reduced circle sizes on small screens

## Gherkin requirements

### Background

Given the user opens the FormWiz page
And the browser has loaded the page successfully

### Scenario: Initial state shows step 1

Given the wizard is on step 1
Then the step-1 circle is highlighted in brand color
And the step-2 and step-3 circles are gray (inactive)
And the form shows "First Name" and "Last Name" fields
And the Previous button is hidden
And the Next button is visible

### Scenario: Navigate to step 2

Given the wizard is on step 1
When the user clicks the Next button
Then the wizard advances to step 2
And the step-2 circle is highlighted in brand color
And the step-1 circle shows as completed (brand color)
And the form shows "Email Address" and "Password" fields
And the Previous button is visible

### Scenario: Navigate to step 3

Given the wizard is on step 2
When the user clicks the Next button
Then the wizard advances to step 3
And the step-3 circle is highlighted in brand color
And the form shows "Subject" (select) and "Comment" (text) fields

### Scenario: Navigate back to previous step

Given the wizard is on step 2
When the user clicks the Previous button
Then the wizard returns to step 1
And the step-1 circle is highlighted in brand color
And the step-2 circle returns to inactive (gray)

### Scenario: Fields are required

Given the wizard is on any step
When the user clicks Next without filling required fields
Then the browser shows native validation (required fields)

### Scenario: Responsive layout on mobile

Given the viewport width is less than 576px
Then the wizard card takes 90% width
And the step circles reduce to 50px
And the form content padding reduces

### Scenario: Responsive layout on tablet

Given the viewport width is between 768px and 991px
Then the form rows stack vertically (single column)

## Verification checklist

- [ ] Card is centered on a full-page background image
- [ ] Header bar is brand blue (#3760e5) with "FORM WIZARD" title
- [ ] Three circular step indicators render with numbers 1, 2, 3
- [ ] Active step circle fills with brand color; inactive are gray
- [ ] Step circles are connected by horizontal lines
- [ ] Step 1 shows First Name and Last Name inputs
- [ ] Step 2 shows Email Address and Password inputs
- [ ] Step 3 shows Subject select and Comment text input
- [ ] Previous button is hidden on step 1, visible on steps 2–3
- [ ] Next button navigates forward through steps
- [ ] Previous button navigates backward through steps
- [ ] Input fields have 1px solid #e5e5e5 border, 5px border-radius
- [ ] Buttons are pill-shaped (25px radius), brand blue background
- [ ] Button hover darkens to #2b4ab3
- [ ] Font family is Montserrat
- [ ] Responsive: card shrinks on mobile, steps resize, fields stack
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME file contains formwiz.free.componentdock.com
- [ ] package.json homepage is https://formwiz.free.componentdock.com
