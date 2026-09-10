# ProfileFlow — Design Notes & Task Outline

## Structure Order (section-by-section)

1. **App.tsx** — Compose wizard wrapper: background image, centered card, step indicator
2. **WizardCard.tsx** — Main container: manages current step state, renders active section, step counter
3. **StepIndicator.tsx** — "1 / 3" counter in top-right corner, updates per step
4. **StepOneProfile.tsx** — "User Profile" form: 6 fields in 2-column grid
5. **StepTwoAddress.tsx** — "Residential Address" form: 6 fields in 2-column grid
6. **StepThreeActivities.tsx** — "What Are You Doing?" grid: 6 clickable image cards
7. **FormField.tsx** — Reusable input with icon-left pattern (icon + input + label)
8. **SelectField.tsx** — Dropdown variant with chevron-down icon on right
9. **ActivityCard.tsx** — Thumbnail + vertical label, active/inactive state
10. **NavigationButtons.tsx** — Next (solid) and Back (outlined) buttons

## Section-by-Section Fidelity Notes

### Global

- Font: Poppins (Regular/Medium/SemiBold) via Google Fonts `<link>` in index.html
- Body: full-viewport background image (picsum placeholder), cover, center
- Wrapper: 819px centered, pattern overlay background (can skip pattern — white card is key)
- Card: white bg, padding 64px top/bottom, 58px sides

### Step 1: User Profile

- h3 "USER PROFILE" — Poppins-SemiBold, 35px, uppercase, #3377c0, letter-spacing 3px
- 2-column flex grid, fields: Full Name (account icon), Education Level (edit), Email (email), Phone (smartphone), Specialization (spellcheck), Date of Birth (calendar)
- Each field: label + icon-left input (46px left padding, 42px height, 1px solid #ccc border)
- No "BACK" button on step 1

### Step 2: Residential Address

- h3 "RESIDENTIAL ADDRESS"
- Fields: Country (select with chevron-down), Street Address (pin), Apartment (home), Town/City (pin-drop), County (pin), Postcode/Zip (eye icon, password field)
- Shows both BACK and NEXT buttons

### Step 3: What Are You Doing?

- h3 "WHAT ARE YOU DOING?"
- 3×2 grid of cards: thumbnail (86% width) + vertical label (14% width)
- Vertical label: writing-mode tb-rl, rotated 180deg, 11px uppercase
- Active card: label bg #3377c0; inactive: label bg #b3b3b3
- Hover: image opacity 0.6
- Placeholder images via picsum.photos/seed/<card>/<w>/<h>

### Navigation

- Next button: 112×42px, bg #3377c0, white text, uppercase, letter-spacing 1px
- Back button: 112×42px, transparent bg, 1px solid #3377c0 border, #3377c0 text
- Hover: bg #3b87d9, white text
- Validation: if fields empty, show message and hide Next

### Responsive (< 768px)

- Body: no background image, auto height, block display
- Wrapper: full width, no padding
- Card: auto height, padding 60px 20px
- Form rows: single column (block)
- Grid items: 2 columns (47% width)
- Heading: 30px

## Lucide Icon Mapping

| Original ZMDI Icon      | Lucide React           |
| ----------------------- | ---------------------- |
| zmdi-account-o          | User                   |
| zmdi-edit               | Pencil                 |
| zmdi-email              | Mail                   |
| zmdi-smartphone-android | Smartphone             |
| zmdi-spellcheck         | SpellCheck             |
| zmdi-calendar           | Calendar               |
| zmdi-pin                | MapPin                 |
| zmdi-home               | Home                   |
| zmdi-pin-drop           | MapPin (or Navigation) |
| zmdi-chevron-down       | ChevronDown            |
| zmdi-eye                | Eye                    |
