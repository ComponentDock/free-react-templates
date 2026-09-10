# Template: Potion (Onboarding Registration Wizard)

## Purpose

Recreation of ColorLib Wizard 6 — a free 3-step onboarding/registration wizard
with avatar upload, category selection grid, and address form.

- **Source:** [Colorlib Wizard 6](https://colorlib.com/wp/template/colorlib-wizard-6/)
- **Demo (original):** https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Design category:** Multi-step form wizard (onboarding/registration)

## Design tokens (extracted from original CSS)

| Token                  | Value                               | Usage                                             |
|------------------------|-------------------------------------|---------------------------------------------------|
| Brand accent (pink)    | `#f6c2ec` (lavender pink)           | Back button, form indicators, active dots          |
| Brand accent hover     | `#dbadd2` (darker pink)             | Back button hover                                 |
| Next button bg         | `#aac1f0` (lavender blue)           | Primary action buttons                            |
| Next button hover      | `#98add6` (darker blue)             | Primary action hover                              |
| Body text              | `#808080` (grey)                    | Default text, body font                           |
| Input text             | `#333`                              | Input field text color                            |
| Placeholder text       | `#808080`, uppercase                | Input placeholders                                |
| Input background       | `#f7f7f7` (light grey)              | Form input backgrounds                            |
| Card background        | `#fff` (white)                      | Wizard card                                       |
| Progress dot inactive  | `#ffffff` (white)                   | Inactive step indicators                          |
| Grid overlay           | darkened via background-image       | Category cards with image overlays                |
| **Font family**        | Poppins (Regular/Medium/SemiBold) + Muli Bold | Body, headings, labels          |
| Body font size         | 13px                                | Base font size                                    |
| Input height           | 46px                                | Form inputs                                       |
| Input border-radius    | 23px (pill)                         | All form inputs                                   |
| Input padding          | 0 25px                              | Horizontal input padding                          |
| Card width             | 738px                               | Wizard card                                       |
| Card height            | 554px                               | Wizard card                                       |
| Card border-radius     | 10px                                | Rounded card corners                              |
| Card shadow            | 0px 2px 7px rgba(0,0,0,0.1)        | Card drop shadow                                  |
| Card padding           | 71px 93px 0                         | Inner card padding                                |
| Button height          | 46px                                | Action buttons                                    |
| Button border-radius   | 23px (pill)                         | Both back and next buttons                        |
| Button text transform  | uppercase                           | Button labels                                     |
| Grid item height       | 134px                               | Category card height                              |
| Grid item width        | 30%                                 | Category card width                               |
| Grid item border-radius| 7px                                 | Category card corners                             |
| Grid item margin       | 27px gap                            | Grid spacing                                      |
| Progress dots size     | 10px (inactive), 22px wide (active) | Step indicators                                   |
| Form indicator size    | 10px circle, 2px border             | Input field left indicators                       |

## Layout

Centered card layout (no split screen):
- Full-viewport gradient background (soft lavender-pink gradient, with faded text overlay "TELL US ABOUT YOURS")
- Single centered white card (738×554px, rounded corners, drop shadow)
- Progress dots positioned below the card (absolute positioned at bottom -50px)
- On mobile (<768px): card goes full-width, no shadow, no border-radius, background hidden

## Section structure (3 steps)

### Step 1 — Profile Setup
- Avatar section (left 33.75% of form-header):
  - Circular avatar image with thin lavender-blue border
  - "Choose Picture" link with camera icon (file upload trigger)
- Form fields (right 66.25% of form-header):
  - First Name (pill input with pink circle indicator)
  - Last Name (pill input with pink circle indicator)
  - Team Name (pill input with pink circle indicator)
- Full-width fields below:
  - Email (pill input, active indicator — filled pink circle)
  - Create a password (pill input, pink circle indicator)
- Progress: dot 1 active (22px pill shape), dots 2-3 inactive (10px circles)
- Actions: Next button (lavender blue, pill)

### Step 2 — Category Selection
- 2-row × 3-column grid of category cards:
  - Each card: background-image cover, 134px height, 30% width, 7px border-radius
  - Content: icon image + uppercase white label text
  - Categories: Programming, Research, Teacher, Tour Guide, Business, Artist
- Hover: elevated shadow
- Progress: dot 2 active
- Actions: Back (pink, pill) + Next (blue, pill)

### Step 3 — Address
- Form fields (all pill-shaped):
  - Street Name + Street Number (side-by-side, 50% each)
  - City + Country (side-by-side, 50% each)
- Progress: dot 3 active
- Actions: Back (pink, pill) + Submit (blue, pill, last step)

## Gherkin scenarios

### Scenario: Wizard renders Step 1 on load
```
Given the user navigates to the registration page
When the page loads
Then the wizard displays Step 1 "Profile Setup"
And an avatar placeholder with "Choose Picture" is shown
And the form shows First Name, Last Name, Team Name, Email, Password fields
And progress dot 1 is active (wide pill shape)
And the "Next" button is visible in lavender blue
And the "Back" button is not visible
```

### Scenario: Avatar upload
```
Given the user is on Step 1
When the user clicks "Choose Picture"
Then a file picker dialog opens
When the user selects an image file
Then the avatar preview updates to show the selected image
```

### Scenario: Navigation between steps
```
Given the user is on Step 1
When the user fills fields and clicks "Next"
Then the wizard advances to Step 2 "Category Selection"
And progress dot 2 becomes active
And both "Back" (pink) and "Next" (blue) buttons are visible

When the user clicks "Back"
Then the wizard returns to Step 1
And progress dot 1 becomes active again
```

### Scenario: Category selection grid
```
Given the user is on Step 2
Then six category cards are displayed in a 2×3 grid
And each card shows an icon and an uppercase label
When the user hovers over a category card
Then a drop shadow appears on the card
When the user clicks "Next"
Then the wizard advances to Step 3
```

### Scenario: Step 3 address form
```
Given the user is on Step 3
Then the form shows Street Name, Street Number, City, Country as pill inputs
And the "Back" button is visible (pink)
And the "Next" button shows a submit action
When the user clicks the submit button
Then the form submits
```

### Scenario: Responsive behavior
```
Given the user views on a viewport wider than 768px
Then the card is 738px wide, centered, with shadow and rounded corners
And the background gradient is visible

Given the user views on a viewport narrower than 768px
Then the card is full-width with no shadow and no border-radius
And the background is hidden
And form fields stack vertically
```

## Verification checklist

- [ ] Centered white card on gradient background
- [ ] 3-step wizard with dot progress indicators (below card)
- [ ] Active dot: 22px pill; inactive dots: 10px circles
- [ ] Avatar upload section with circular preview and "Choose Picture"
- [ ] Pill-shaped inputs (border-radius 23px, bg #f7f7f7)
- [ ] Pink circle indicators on each input (active = filled)
- [ ] 2×3 category grid with background-image cards (7px radius)
- [ ] Category cards with uppercase white labels
- [ ] Back button: pink #f6c2ec, pill shape, hidden on step 1
- [ ] Next button: blue #aac1f0, pill shape, white uppercase text
- [ ] Card: 738×554px, 10px border-radius, subtle shadow
- [ ] Responsive: full-width + no shadow at <768px
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Lucide React icons (replace Material Design Iconic Font)
- [ ] 100% test coverage (Vitest + Testing Library)
