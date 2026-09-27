# Template: RegNoir (Event Registration Form)

## Purpose

RegNoir is a single-page event registration form in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Colorlib
Regform 3" free template (source:
https://colorlib.com/wp/template/colorlib-regform-3/), built under a
DIFFERENT name (**RegNoir**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a split-screen card centered on a purple/lavender gradient
full-page background. The left half is a dramatic photograph (woman in hat
surrounded by pink smoke). The right half is a dark (near-black) form panel
with a "Registration Info" heading in white serif font, underline-style form
fields (Name, Birthdate, Gender dropdown, Email, Phone), and a green pill-
shaped "Submit" button. The aesthetic is bold, moody, fashion/event-
themed — suitable for music festivals, nightlife, or creative events.

**Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-3/
(returns 404 at time of prep — fell back to screenshot analysis)

**Screenshot URL:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-3.jpg

## Design tokens (from screenshot analysis)

| Token          | Value                              | Use                                                        |
| -------------- | ---------------------------------- | ---------------------------------------------------------- |
| Page bg        | Purple/lavender gradient           | Top ~#9b59b6, bottom ~#d4a5d4 (vertical gradient)         |
| Card           | Split-screen, centered, shadow     | Left 50% image, right 50% dark form panel                  |
| Form panel bg  | Near-black `~#1a1a2e`              | Dark right side of card                                    |
| Heading        | White, serif/display font          | "Registration Info" — decorative serif, centered           |
| Field labels   | White, sans-serif, ~14px           | "Name", "Birthdate", "Gender", "Email", "Phone"           |
| Field borders  | Gray underline `~#444`             | Bottom border only on each input                           |
| Input text     | White                              | Text color on dark background                              |
| Button bg      | Green/olive `~#7cb342`             | "Submit" button, pill-shaped (high radius)                 |
| Button text    | White                              | Submit button label                                        |
| Button shape   | Pill (high border-radius ~25px)    | Rounded green button                                       |
| Image          | Dramatic photo (pink smoke/hat)    | Left half of card — fashion/music festival aesthetic       |
| Card shadow    | Subtle drop shadow                 | Elevates card above gradient background                    |
| Card radius    | ~8-12px                            | Rounded corners on the card                                |

**Note:** Preview URL returned 404. Tokens extracted from screenshot
(1200x972 AVIF converted to PNG, analyzed visually). Exact hex values are
approximate — implementer should match visual appearance closely.

## Gherkin requirements

### Feature: RegNoir Event Registration Form

  Scenario: Page renders with split-screen card layout
    Given the user navigates to the RegNoir page
    Then a purple/lavender gradient full-page background is visible
    And a centered card is displayed
    And the card is split into a left image section and a right form section

  Scenario: Left side displays a dramatic photograph
    Given the page has loaded
    Then the left half of the card displays a photograph
    And the photograph fills the entire left half of the card

  Scenario: Registration form heading is visible
    Given the page has loaded
    Then the heading "Registration Info" is visible on the dark form panel
    And the heading is white and styled with a serif/display font

  Scenario: Form fields are present and functional
    Given the page has loaded
    Then a "Name" text input is visible
    And a "Birthdate" date picker input is visible
    And a "Gender" dropdown select is visible
    And an "Email" text input is visible
    And a "Phone" text input is visible
    And all inputs have underline-style borders (bottom border only)

  Scenario: Submit button is visible and styled
    Given the page has loaded
    Then a "Submit" button is visible
    And the button has a green/olive background (~#7cb342)
    And the button has a pill shape (high border-radius)
    And the button text is white

  Scenario: Submit button triggers form submission
    Given the user fills in all form fields
    When the user clicks the "Submit" button
    Then the form submission is triggered

  Scenario: Responsive layout
    Given the user views the page on a mobile device (viewport < 768px)
    Then the card stacks vertically (image above form)
    And all form fields remain accessible

  Scenario: Footer section
    Given the page has loaded
    Then a Component Dock credit link is present

## Verification checklist

- [ ] Page background matches purple/lavender gradient
- [ ] Card is centered with subtle shadow and rounded corners
- [ ] Left half displays a dramatic placeholder photograph
- [ ] Right half has dark (near-black) background
- [ ] "Registration Info" heading in white serif font
- [ ] All 5 form fields present (name, birthdate, gender, email, phone)
- [ ] Form fields use underline-style borders (bottom border only)
- [ ] "Submit" button is green pill-shaped with white text
- [ ] Responsive: card stacks on mobile
- [ ] Footer includes Component Dock credit link
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] `public/CNAME` = `regnoir.free.componentdock.com`
- [ ] `"homepage"` = `https://regnoir.free.componentdock.com`
- [ ] Package name = `@free-react-templates/regnoir`
