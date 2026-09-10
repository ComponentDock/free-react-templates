# Template: FormTrail (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 9" — a three-step user profile wizard
with an immersive nature background and a centered white form card.

- **Source slug:** `colorlib-wizard-9`
- **ColorLib page:** https://colorlib.com/wp/template/colorlib-wizard-9/
- **Live preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html
- **Category:** Bootstrap Wizard / Multi-step Form
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design tokens (extracted from preview CSS)

| Token                  | Value                       | Notes                                      |
| ---------------------- | --------------------------- | ------------------------------------------ |
| `--brand`              | `#3377c0`                   | Blue — headings, active states, buttons     |
| `--brand-hover`        | `#3b87d9`                   | Button hover                               |
| `--card-bg`            | `#ffffff`                   | White form card                            |
| `--text-primary`       | `#333333`                   | Dark text (labels, headings)               |
| `--text-secondary`     | `#999999`                   | Gray text (body, inputs)                   |
| `--border`             | `#cccccc`                   | Input borders                              |
| `--grid-inactive`      | `#b3b3b3`                   | Inactive grid item sidebar                 |
| `--grid-active`        | `#3377c0`                   | Active grid item sidebar (matches brand)   |
| Font family            | Poppins (Regular/Medium/SB) | Google Fonts, fallback sans-serif          |
| Card width             | 819 px                      | Centered on page                           |
| Card padding           | 64 px top, 58 px sides      | Inside the white card                      |
| Button shape           | Rectangular, no radius      | Uppercase, letter-spacing: 1px, height 42px|
| Input height           | 42 px                       | Left-padded 46 px for icon                 |
| Border radius          | 0 (none)                    | Sharp corners throughout                   |
| Background image       | Warm nature photo           | Copper-brown foliage with blue flowers     |

## Section structure (from live preview HTML)

The template is a single-page multi-step wizard with three sections.

### Step 1 — User Profile

Heading: "USER PROFILE" (uppercase, brand blue, Poppins SemiBold 35px)

Two-column grid of 3 rows (6 fields total):

| Column 1             | Column 2           |
| --------------------- | ------------------ |
| Full Name             | Education Level    |
| Email ID              | Phone Number       |
| Specialization        | Date of Birth      |

Each field: label (14px, #333), input with left-aligned icon (Material Design
Iconic Font: account-o, edit, email, smartphone-android, spellcheck, calendar).
Date of Birth uses a datepicker (dd - mm - yyyy format).

### Step 2 — Residential Address

Heading: "RESIDENTIAL ADDRESS" (same style)

Two-column grid of 3 rows (6 fields):

| Column 1             | Column 2           |
| --------------------- | ------------------ |
| Country (select)      | Street Address     |
| Apartment             | Town / City        |
| County                | Postcode / Zip     |

Country is a `<select>` with chevron-down icon. Postcode/Zip uses password
input type with eye toggle icon.

### Step 3 — What Are You Doing?

Heading: "WHAT ARE YOU DOING?" (same style)

3×2 grid of selectable cards (6 items). Each card: thumbnail image (86% width)
+ vertical text sidebar (14% width, vertical writing-mode, rotated -180deg).

Cards: Programming, Sports, Business, Tour Guide, Art-Design, Doctor.

Active card: sidebar turns brand blue (#3377c0). Inactive: gray (#b3b3b3).
Hover: image opacity 0.6.

### Navigation

- **Step indicator:** top-right of card, large gray number + "/ 3" suffix.
  Updates on step change (1/3 → 2/3 → 3/3).
- **Buttons:** Previous (outlined: border #3377c0, text #3377c0) and Next
  (filled: bg #3377c0, text white). Both 42px height, 112px width, uppercase.
- **Validation message:** "Your must fill all fields, to be able to continue"
  (original typo preserved in design — we fix the grammar in our recreation).
- **Disabled state:** When fields are empty, Next is replaced by the
  validation text message.

## Gherkin requirements

```gherkin
Feature: FormTrail — Multi-step User Profile Wizard

  Background:
    Given I open the FormTrail page
    Then I see a white card centered on a nature background photo
    And I see a step indicator showing "1 / 3" in the top-right corner

  Scenario: Step 1 displays user profile form
    Given I am on step 1
    Then I see the heading "USER PROFILE"
    And I see 6 form fields in a 2-column grid:
      | Field            | Icon            |
      | Full Name        | account-o       |
      | Education Level  | edit            |
      | Email ID         | email           |
      | Phone Number     | smartphone      |
      | Specialization   | spellcheck      |
      | Date of Birth    | calendar        |
    And each input has a left-aligned icon
    And the Date of Birth field is a datepicker

  Scenario: Navigate from step 1 to step 2
    Given I am on step 1
    When I click the "NEXT" button
    Then the step indicator shows "2 / 3"
    And I see the heading "RESIDENTIAL ADDRESS"
    And I see 6 address fields in a 2-column grid

  Scenario: Step 2 displays residential address form
    Given I am on step 2
    Then I see the heading "RESIDENTIAL ADDRESS"
    And I see a Country select dropdown
    And I see fields: Street Address, Apartment, Town / City, County, Postcode / Zip

  Scenario: Navigate from step 2 to step 3
    Given I am on step 2
    When I click the "NEXT" button
    Then the step indicator shows "3 / 3"
    And I see the heading "WHAT ARE YOU DOING?"
    And I see a 3x2 grid of selectable category cards

  Scenario: Step 3 displays category selection grid
    Given I am on step 3
    Then I see 6 category cards: Programming, Sports, Business, Tour Guide, Art-Design, Doctor
    And each card has a thumbnail image and a vertical text label
    And the first card is active (brand blue sidebar)

  Scenario: Select a category on step 3
    Given I am on step 3
    When I click the "Sports" card
    Then the "Sports" card becomes active (brand blue sidebar)
    And the previously active card becomes inactive (gray sidebar)

  Scenario: Navigate backwards
    Given I am on step 2
    When I click the "PREVIOUS" button
    Then the step indicator shows "1 / 3"
    And I see the heading "USER PROFILE"
    And the form fields retain their entered values

  Scenario: Validation message on empty form
    Given I am on step 1 with empty fields
    Then I see the validation message instead of the Next button

  Scenario: Responsive layout on mobile
    Given I view the page at 767px width or less
    Then the form rows stack vertically (single column)
    And the grid items become 2-column
    And the background image is hidden
```

## Verification checklist

- [ ] Three steps with correct headings and field counts
- [ ] 2-column grid layout on desktop, single-column on mobile
- [ ] Step indicator updates (1/3 → 2/3 → 3/3)
- [ ] Previous/Next navigation works bidirectionally
- [ ] Active state toggles on category cards (step 3)
- [ ] Brand color #3377c0 used consistently for headings, active states, buttons
- [ ] Poppins font loaded via Google Fonts
- [ ] Responsive breakpoint at 767px
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Lucide-react icons replace Material Design Iconic Font
- [ ] 100% test coverage
