# Template: StepFlow (Multi-step Form Wizard)

## Purpose

Recreation of the ColorLib "Colorlib Wizard 5" template as a React component.
The original is a multi-step checkout/billing form wizard with a split-column
layout — decorative image on the left, a white card form with a step progress
indicator on the right. The template demonstrates a polished multi-step form UX.

**Source:** `https://colorlib.com/wp/template/colorlib-wizard-5/`
**Preview:** `https://preview.colorlib.com/theme/colorlib-wizard-5/` (404 — preview unavailable; analysis based on screenshot)
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (from screenshot analysis)

| Token | Value | Notes |
|---|---|---|
| Page background | `#F2E6DC` | Warm light beige/peach, solid flat fill |
| Card background | `#FFFFFF` | White form card, subtle drop shadow |
| Brand accent | `#F5C8AA` | Soft peach/coral — active progress bar + "Next" button |
| Inactive indicator | `#D1D1D1` | Light gray inactive progress lines |
| Text primary | `#333333` | Dark charcoal gray |
| Input border | `#E0E0E0` | Light gray borders on form fields |
| Font family | `Roboto` or similar clean sans-serif | Weights: 400, 500, 600, 700 |
| Button shape | Rounded corners (subtle `border-radius ~4px`) | Rectangular with slight rounding |
| Button text | Dark charcoal (`#333333`) | On peach background |
| Form card | Elevated with subtle drop shadow | White card on beige background |
| Progress bar | 4-step horizontal indicator | Active = peach, inactive = gray lines |
| Decorative image | Lifestyle/product scene | Left column, split layout |

## Section Structure

1. **Split-column layout** — full viewport height
   - Left column (~45%): decorative placeholder image (lifestyle scene)
   - Right column (~55%): white form card, vertically centered
2. **Form card** containing:
   - **Title:** "Billing Details" heading
   - **Progress indicator:** 4 horizontal lines, first peach (active), rest gray
   - **Form fields** (step 1 of 4):
     - First Name / Last Name (side-by-side row)
     - Company Name (full width)
     - Country (dropdown/select, e.g. "Viet Nam" selected)
     - Address — Street address + Apartment/suite/unit (optional) (two fields)
     - Town / City (full width)
   - **"Next →" button:** bottom-right, peach background, arrow icon

## Gherkin Requirements

### Feature: StepFlow multi-step checkout form

  Scenario: Page renders with split-column layout
    Given the user loads the StepFlow page
    Then a decorative image occupies the left column
    And a white form card occupies the right column
    And the page background is warm beige (#F2E6DC)

  Scenario: Progress indicator shows current step
    Given the user is on step 1
    Then four progress lines are visible
    And the first line is peach-colored (#F5C8AA)
    And the remaining lines are gray (#D1D1D1)

  Scenario: Step 1 displays billing fields
    Given the user is on step 1
    Then the heading reads "Billing Details"
    And fields are visible: First Name, Last Name, Company Name, Country, Street Address, Apartment (optional), Town/City
    And a "Next" button with arrow is visible

  Scenario: Required fields are marked
    Given the user is on step 1
    Then First Name, Last Name, Country, Street Address, and Town/City are marked required (*)
    And Company Name and Apartment are optional

  Scenario: Next button advances to step 2
    Given the user fills required fields on step 1
    When the user clicks "Next"
    Then the progress indicator advances to step 2
    And step 2 fields are displayed

  Scenario: Next button validates before advancing
    Given required fields are empty on step 1
    When the user clicks "Next"
    Then the form shows validation errors
    And the progress indicator stays on step 1

  Scenario: Previous button returns to prior step
    Given the user is on step 2
    When the user clicks "Previous" or "Back"
    Then the progress indicator returns to step 1
    And step 1 fields are displayed with previous values

  Scenario: Country dropdown is interactive
    Given the user is on step 1
    When the user opens the Country dropdown
    Then a list of countries is displayed
    And the user can select a country

  Scenario: Form card has subtle shadow
    Given the user loads the StepFlow page
    Then the form card has a subtle drop shadow separating it from the background

  Scenario: Responsive layout on mobile
    Given the user views StepFlow on a viewport width < 768px
    Then the columns stack vertically
    And the form card takes full width

## Verification Checklist

- [ ] Page background matches warm beige (#F2E6DC)
- [ ] Split-column layout: image left (~45%), form card right (~55%)
- [ ] Form card is white with subtle drop shadow
- [ ] "Billing Details" heading rendered
- [ ] 4-step progress indicator with active peach highlight
- [ ] All 7 form fields present (First Name, Last Name, Company, Country, Address, Apartment, Town/City)
- [ ] Required fields marked with asterisk
- [ ] Country dropdown is functional
- [ ] "Next →" button with arrow icon
- [ ] Next button validates required fields before advancing
- [ ] Step navigation (next/previous) works with state preservation
- [ ] Progress indicator updates on step change
- [ ] Responsive: stacks on mobile (< 768px)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Specs validated with `npm run spec:validate`
