# Template: RuneForm (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 9" — a multi-step user onboarding form
wizard with category selection. The React implementation uses React 19 + Vite +
Tailwind CSS 4 + TypeScript.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-wizard-9/
- **Preview (live):** https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html
  (NOTE: the preview.colorlib.com/theme/ URL returns 404; the real template
  lives at the /etc/bwiz/ path)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-9.jpg
- **New name:** `runeform` (apps/runeform, @free-react-templates/runeform)
- **Surge target:** runeform.free.componentdock.com

## Design Tokens (extracted from preview CSS)

| Token              | Value                         | Notes                                      |
| ------------------ | ----------------------------- | ------------------------------------------ |
| Brand primary      | `#3377c0`                     | Blue — headings, active states, buttons    |
| Brand hover        | `#3b87d9`                     | Lighter blue for hover states              |
| Body text          | `#999`                        | Light gray for body / placeholder text     |
| Input text         | `#333`                        | Dark gray for input content                |
| Label color        | `#333`                        | Same dark gray for form labels             |
| Border color       | `#ccc`                        | Input borders, step indicator              |
| Grid inactive      | `#b3b3b3`                     | Inactive category heading background       |
| Card background    | `#ffffff`                     | White wizard card                          |
| Button text        | `#ffffff`                     | White text on filled buttons               |
| Font family        | Poppins (Regular/Medium/SemiBold) | Google Font via `<link>`              |
| Card width         | 819px (7px wrapper padding)   | Centered floating card                     |
| Card min-height    | 548px                         | Fixed height in original                   |
| Input height       | 42px                          | All form controls                          |
| Button height      | 42px                          | Action buttons                             |
| Button width       | 112px                         | Fixed width action buttons                 |
| Border radius      | 0 (sharp corners)             | Original has no border-radius on card      |
| Letter spacing     | 3px headings, 1px buttons     | Uppercase headings/buttons                 |

## Section Structure (3-step wizard)

### Step 1 — User Profile

- Section title: "USER PROFILE" (uppercase, Poppins-SemiBold, 35px, #3377c0)
- 2-column × 3-row grid of form fields:
  1. Full Name (account icon, text input)
  2. Education Level (edit icon, text input)
  3. Email ID (email icon, text input)
  4. Phone Number (smartphone icon, text input)
  5. Specialization (spellcheck icon, text input)
  6. Date of Birth (calendar icon, date input)
- Each field: label above, icon inside input (left-aligned), gray border

### Step 2 — Residential Address

- Section title: "RESIDENTIAL ADDRESS" (same style)
- 2-column × 3-row grid:
  1. Country (account icon, select dropdown with chevron-down)
  2. Street Address (pin icon, text input)
  3. Apartment (home icon, text input)
  4. Town / City (pin-drop icon, text input)
  5. County (pin icon, text input)
  6. Postcode / Zip (eye icon with toggle, password-type input)

### Step 3 — What Are You Doing?

- Section title: "WHAT ARE YOU DOING?" (same style)
- 3-column × 2-row grid of selectable category cards:
  1. Programming (image thumbnail + vertical heading bar)
  2. Sports
  3. Business
  4. Tour Guide
  5. Art-Design
  6. Doctor
- Each card: image thumb (86% width) + vertical text label (14% width, writing-mode: tb-rl)
- Active state: heading bar turns #3377c0 (blue), inactive is #b3b3b3 (gray)
- Hover: image opacity drops to 0.6

### Navigation (all steps)

- Step indicator: top-right, large current number (40px, #ccc) + "/ 3" suffix
- Previous button: outline style (1px solid #3377c0, text #3377c0, transparent bg)
- Next button: filled (#3377c0 bg, white text)
- Both buttons: 112×42px, uppercase, letter-spacing 1px
- When fields are incomplete: "Your must fill all fields, to be able to continue" message (replicating original typo? No — fix to "You must fill all fields to continue")
- Disabled state hides buttons, shows helper text

### Responsive (≤767px)

- Form rows collapse to single column
- Grid items collapse to 2 columns
- Vertical heading text becomes horizontal
- Background image removed, body height auto
- Navigation stacks vertically, right-aligned

## Gherkin Requirements

### Scenario: Wizard renders Step 1 on load
```gherkin
Given the user opens the RuneForm page
Then the wizard shows "USER PROFILE" as the step title
And the step indicator shows "1 / 3"
And 6 form fields are visible in a 2-column grid
And "NEXT" button is visible
```

### Scenario: Navigate to Step 2
```gherkin
Given the user is on Step 1
When the user fills all 6 fields on Step 1
And clicks "NEXT"
Then the wizard transitions to Step 2
And the title changes to "RESIDENTIAL ADDRESS"
And the step indicator shows "2 / 3"
```

### Scenario: Navigate back to Step 1 from Step 2
```gherkin
Given the user is on Step 2
When the user clicks "PREVIOUS"
Then the wizard returns to Step 1
And the previously entered data is preserved
```

### Scenario: Navigate to Step 3 (category selection)
```gherkin
Given the user is on Step 2
When the user fills all 6 fields on Step 2
And clicks "NEXT"
Then the wizard shows Step 3
And the title changes to "WHAT ARE YOU DOING?"
And 6 category cards are displayed in a 3-column grid
```

### Scenario: Select a category
```gherkin
Given the user is on Step 3
When the user clicks on "Programming"
Then the Programming card heading turns blue (#3377c0)
And other cards remain gray (#b3b3b3)
```

### Scenario: Validation prevents advancing
```gherkin
Given the user is on Step 1
And some fields are empty
When the user clicks "NEXT"
Then the user cannot advance to Step 2
And a validation message is shown: "You must fill all fields to continue"
```

### Scenario: Step indicator updates correctly
```gherkin
Given the user navigates forward through all 3 steps
Then the step indicator shows "1 / 3" on Step 1
And "2 / 3" on Step 2
And "3 / 3" on Step 3
```

### Scenario: Responsive layout on mobile
```gherkin
Given the user opens the page on a viewport ≤767px wide
Then form fields stack into a single column
And category grid shows 2 columns
And navigation buttons stack vertically
```

### Scenario: Select dropdown on Country field
```gherkin
Given the user is on Step 2
When the user clicks the Country dropdown
Then options for "United States", "United Kingdom", "Viet Nam" are shown
And a chevron-down icon is visible on the right side of the dropdown
```

### Scenario: Date picker on Date of Birth field
```gherkin
Given the user is on Step 1
When the user clicks the Date of Birth field
Then a date picker appears
And the user can select a date
```

## Verification Checklist

- [ ] 3-step wizard with smooth transitions between steps
- [ ] Step indicator (1/3, 2/3, 3/3) in top-right corner
- [ ] Step 1: "USER PROFILE" with 6 fields in 2-column grid
- [ ] Step 2: "RESIDENTIAL ADDRESS" with 6 fields (select, text, password)
- [ ] Step 3: "WHAT ARE YOU DOING?" with 6 selectable category cards
- [ ] Form fields have left-aligned icons (use lucide-react equivalents)
- [ ] Previous (outline) and Next (filled) navigation buttons
- [ ] Active card category shows blue heading bar
- [ ] Responsive: single-column forms, 2-column grid on mobile
- [ ] Keyboard accessible: all form fields and buttons reachable
- [ ] Brand color #3377c0 used for headings, buttons, active states
- [ ] Poppins font family applied
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] CNAME set to runeform.free.componentdock.com
- [ ] 100% test coverage
