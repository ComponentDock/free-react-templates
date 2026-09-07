# Template: FormForge (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 28" — a multi-step form wizard with
progress bar, built with Bootstrap in the original.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-wizard-28/
- **Preview (live demo):** https://colorlib.com/etc/bwiz/colorlib-wizard-28/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-28.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Description:** A beginner-friendly free form wizard with progression bar.
  Three-step card-based form (Personal Info → Address → Payment) centered on
  a vibrant gradient background.

## Design Tokens

Extracted from the preview page's `css/main.css`:

### Colors
| Token            | Value     | Usage                                      |
| ---------------- | --------- | ------------------------------------------ |
| `--brand-green`  | `#36c240` | Buttons (next/submit), progress bar fill, input focus border |
| `--brand-green-hover` | `#22ae2c` | Button hover state                 |
| `--gradient-start` | `#4158d0` | Background gradient start (blue)       |
| `--gradient-mid` | `#c850c0` | Background gradient middle (pink/magenta) |
| `--gradient-end` | `#ffcc70` | Background gradient end (yellow)          |
| `--card-bg`      | `#ffffff` | Card background                           |
| `--text-primary` | `#333333` | Input text, icons                         |
| `--text-label`   | `#666666` | Form labels                               |
| `--text-muted`   | `#999999` | Placeholders                              |
| `--border-light` | `#e5e5e5` | Input borders, progress track border      |
| `--progress-bg`  | `#f5f5f5` | Progress bar track background             |
| `--btn-back`     | `#999999` | Back button background                    |
| `--btn-back-hover` | `#666666` | Back button hover                       |
| `--shadow-card`  | `rgba(0,0,0,0.15)` | Card box shadow (0px 8px 20px)    |
| `--shadow-btn`   | `rgba(0,0,0,0.15)` | Button box shadow (0px 3px 14px)  |

### Typography
| Token       | Value                                        | Usage           |
| ----------- | -------------------------------------------- | --------------- |
| `--font-body` | `"Roboto", "Arial", "Helvetica Neue", sans-serif` | Body text, inputs |
| `--font-heading` | `"Montserrat", "Arial", "Helvetica Neue", sans-serif` | Card heading |

### Spacing & Radius
| Token           | Value  | Usage                          |
| --------------- | ------ | ------------------------------ |
| `--radius-card` | `5px`  | Card border-radius             |
| `--radius-btn`  | `22.5px` | Next/Submit/Back buttons (pill shape) |
| `--radius-progress` | `17.5px` | Progress bar & track     |
| `--radius-input` | `3px` | Input fields                   |
| Card padding    | `40px 30px 30px` | Card body padding     |

## Section Structure (from preview DOM)

1. **Page Background** — Full viewport gradient (`linear-gradient(316deg, #4158d0, #c850c0, #ffcc70)`)
2. **Card Container** — Centered white card (`max-width: 690px`), rounded corners, shadow
   - **Card Heading** — "Form Wizard" title, positioned top-left (absolutely, overlapping card), Montserrat 55px uppercase, white at 60% opacity
   - **Card Body** — Padding container for the form
3. **Progress Bar** — Rounded pill track with green fill, percentage label
4. **Step Navigation Dots** — Numbered circle indicators (hidden visually but present in DOM for accessibility)
5. **Form Steps** (tab panes, only active one visible):
   - **Step 1 — Personal Info:** Full name, Email, Phone number → Next button
   - **Step 2 — Address:** Building number, Street, Town, Zip code → Back + Next buttons
   - **Step 3 — Payment:** Card holder name, Card number (with icon), CVC (with icon), Expiration → Back + Submit button

## Gherkin Scenarios

### Scenario: Page renders with gradient background
```gherkin
Given the user visits the FormForge page
Then the page background should be a gradient from blue (#4158d0) through pink (#c850c0) to yellow (#ffcc70)
And the gradient angle should be approximately 316 degrees
```

### Scenario: Card displays centered with correct styling
```gherkin
Given the user visits the FormForge page
Then a white card should be centered on the page
And the card should have rounded corners (5px radius)
And the card should have a subtle shadow
And the card max-width should be 690px
```

### Scenario: Card heading shows "Form Wizard" title
```gherkin
Given the user visits the FormForge page
Then the card heading should display "Form Wizard"
And the heading should use Montserrat font
And the heading should be uppercase and white
```

### Scenario: Progress bar shows current step percentage
```gherkin
Given the user is on step 1 of 3
Then the progress bar should show 40%
And the progress bar track should have a light gray background
And the progress bar fill should be green (#36c240)
```

### Scenario: Step 1 displays personal info fields
```gherkin
Given the user is on step 1
Then the form should display fields for "Full name", "Email", and "Phone number"
And each field should have a label above it
And a "Next" button should be visible
```

### Scenario: User advances to step 2
```gherkin
Given the user is on step 1
When the user clicks "Next"
Then step 2 should become visible
And step 1 fields should be hidden
And the progress bar should update to reflect step 2
```

### Scenario: Step 2 displays address fields
```gherkin
Given the user is on step 2
Then the form should display fields for "Building Number", "Street", "Town", and "Zip code"
And "back" and "Next" buttons should be visible
```

### Scenario: User returns to step 1
```gherkin
Given the user is on step 2
When the user clicks "back"
Then step 1 should become visible again
And the previously entered data should be preserved
```

### Scenario: Step 3 displays payment fields
```gherkin
Given the user is on step 3
Then the form should display fields for "Card Holder Name", "Card Number", "CVC", and "Expiration"
And "back" and "Submit" buttons should be visible
And the card number and CVC inputs should display a card icon
```

### Scenario: Submit button completes the form
```gherkin
Given the user is on step 3
When the user clicks "Submit"
Then the form should handle the submission
```

### Scenario: Input focus styling
```gherkin
Given the user focuses on any form input
Then the input border should change to green (#36c240)
```

### Scenario: Responsive layout on mobile
```gherkin
Given the user views the page on a mobile device (width < 768px)
Then the card heading should reposition to top of card
And the card heading font size should reduce to 40px
And the buttons should display as full-width blocks
```

## Verification Checklist

- [ ] Gradient background renders with correct colors and angle
- [ ] Card is centered, white, rounded, with shadow
- [ ] "Form Wizard" heading uses Montserrat, uppercase, white, 55px
- [ ] Progress bar shows percentage and updates on step change
- [ ] Step 1 fields: Full name, Email, Phone number
- [ ] Step 2 fields: Building Number, Street, Town, Zip code
- [ ] Step 3 fields: Card Holder Name, Card Number, CVC, Expiration
- [ ] Next/Back/Submit navigation works correctly
- [ ] Input focus shows green border
- [ ] Pill-shaped buttons (22.5px radius) with green background
- [ ] Back buttons are gray without shadow
- [ ] Responsive layout for mobile (< 768px)
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
- [ ] Deploy target: `formforge.free.componentdock.com`
