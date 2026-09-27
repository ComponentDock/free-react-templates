# Template: Registra (Registration Form)

## Purpose

Recreation of [ColorLib Reg Form V1](https://colorlib.com/wp/template/colorlib-regform-1/) — a simple class registration form template. Preview URL: https://preview.colorlib.com/theme/colorlib-regform-1/ (unreachable at time of research; screenshot used as primary reference).

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript · Vitest + Testing Library

## Source

- **ColorLib slug:** `colorlib-regform-1`
- **ColorLib page:** https://colorlib.com/wp/template/colorlib-regform-1/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-1.jpg
- **Category:** Registration Forms (Bootstrap-compatible, framework-free)

## Design tokens (from screenshot analysis)

| Token | Value | Notes |
|---|---|---|
| Page background | `#4285F4` (Google blue) | Solid blue fills entire viewport |
| Card background | `#ffffff` | White card centered on page |
| Card shadow | `0 4px 20px rgba(0,0,0,0.15)` | Subtle drop shadow on card |
| Card border-radius | `0` | Sharp corners, no rounding |
| Hero image | City skyline (grayscale/muted) | Full-width header image above form |
| Heading font | Sans-serif (system/Roboto-like) | "Registration Info" — dark gray, ~28px |
| Label style | Uppercase, small, gray (`#999`) | NAME, BIRTHDATE, GENDER, CLASS, REGISTRATION CODE |
| Input border | Bottom border only, light gray (`#ddd`) | Underline-style inputs |
| Input font | Sans-serif, normal weight | Standard form inputs |
| Submit button | Green (`#77CC6D`), white text | Rounded corners (~4px), padded, left-aligned |
| Button hover | Slightly darker green | Subtle darken on hover |
| Section spacing | ~30-40px between fields | Comfortable vertical rhythm |

## Design tokens from ColorLib page CSS

- Accent green: `#77CC6D` (from `.ticon` / `.builder-top-icon` styling on the ColorLib listing page)
- Text color: `#4b4b4b` (from `.postid-24602 .site-content`)
- Border color: `#eee` (from `.step-block`)
- Font: System sans-serif stack (from WP theme defaults)

## Sections (structure from screenshot)

1. **Full-page blue background** — `#4285F4` fills the viewport
2. **Centered card container** — white, ~500px wide, centered vertically and horizontally
3. **Hero image** — city skyline photograph, full card width, ~200px tall, grayscale/muted tones
4. **Form section** — "Registration Info" heading
5. **Form fields:**
   - NAME — text input (full width)
   - BIRTHDATE — date picker + GENDER — dropdown (side by side, 50/50)
   - CLASS — dropdown (full width)
   - REGISTRATION CODE — text input (full width)
6. **Submit button** — green, left-aligned, "Submit" label

## Gherkin requirements

### Feature: Registration form page

```gherkin
Feature: Registra registration form
  As a visitor
  I want to fill out a class registration form
  So that I can register for a class

  Background:
    Given I am on the registration page
    And the page has a blue background (#4285F4)
    And a white card is centered on the page

  Scenario: Page loads with correct structure
    Then I should see a hero image at the top of the card
    And I should see the heading "Registration Info"
    And I should see a "Submit" button

  Scenario: Form fields are present
    Then I should see a "NAME" text input
    And I should see a "BIRTHDATE" date input
    And I should see a "GENDER" select dropdown
    And I should see a "CLASS" select dropdown
    And I should see a "REGISTRATION CODE" text input

  Scenario: Birthdate and gender are side by side
    Then the "BIRTHDATE" and "GENDER" fields should be in the same row

  Scenario: Form validation — empty submission
    When I click the "Submit" button without filling any fields
    Then the form should not submit
    And required field indicators should appear

  Scenario: Form submission with valid data
    When I enter "John Doe" in the "NAME" field
    And I select a birthdate
    And I select "Male" from the "GENDER" dropdown
    And I select a class from the "CLASS" dropdown
    And I enter "ABC123" in the "REGISTRATION CODE" field
    And I click the "Submit" button
    Then the form should submit successfully

  Scenario: Responsive layout
    Given I am on a mobile viewport (375px wide)
    Then the card should fill the screen width with padding
    And the BIRTHDATE and GENDER fields should stack vertically
```

## Verification checklist

- [ ] Blue full-page background (#4285F4)
- [ ] White centered card with shadow
- [ ] Hero city skyline image at card top
- [ ] "Registration Info" heading
- [ ] All 5 form fields present with correct types
- [ ] Birthdate + Gender side-by-side on desktop, stacked on mobile
- [ ] Green submit button (#77CC6D) with white text
- [ ] Form validation on empty submit
- [ ] Successful form submission handling
- [ ] Responsive layout (mobile + desktop)
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
