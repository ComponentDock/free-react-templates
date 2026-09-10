# Template: Divine (4-Step Order Wizard)

## Purpose

Divine is a single-page four-step ORDER WIZARD in the free-react-templates
monorepo. It is an original React recreation of the ColorLIB "Colorlib Wizard 5"
free template (source: https://colorlib.com/wp/template/colorlib-wizard-5/),
built under a DIFFERENT name (**Divine**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a jQuery-Steps form wizard: a split-screen layout with an
artistic left visual side and a white billing-details form card on the right,
on a soft peach/beige page background. It features a four-step horizontal
progress bar (Step 1 highlighted in the accent peach color, steps 2–4 grey),
a form with billing fields (first/last name, company, country, address, city),
and a "Next" button with a right-arrow icon.

- **Source template**: [Colorlib Wizard 5](https://colorlib.com/wp/template/colorlib-wizard-5/)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-5/` (unreachable at prep time — 404; fallback to screenshot)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Naming

The ColorLIB source name "Colorlib Wizard 5" is FORBIDDEN as the app name (and
"wizard" itself must not be reused). **Divine** is the new, original name —
single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified:
zero hits for `divine` in `ls apps/`, `openspec/specs/`, `docs/templates/`,
and TEMPLATES.md). It continues the magic-practice verb / adjective chain
established by the wizard family preps: Conjure (1), Evoke (2), Summon (3),
Invoke (4), Enchant (5), Charm (6), Hex (7), Bless (8), Curse (9), Banish (10),
Dispel (11), Abjure (12), and so on through the 30-member family. Divine fits
the 5th slot (wizard-5), matching its chain position. Source slug + preview
URL are recorded above.

## Design reference (replication findings)

- **Original**: ColorLIB "Colorlib Wizard 5" (page title: "Free 4-Step Order
  Template 2026"). Listed in TEMPLATES.md under **Bootstrap Wizards (30)**
  (section header around line 844). Member 5 of colorlib-wizard-1 … 30. Sibling
  preps: Conjure (wizard-1, chain seed — cream/olive, 920px card, dot nav),
  Banish (wizard-10 — photo bg, #333 monochrome, 451px card, progress bar),
  Dispel (wizard-11 — coral page, 630px card, square tile nav), Abjure
  (wizard-12 — sky-blue page, 665px pill card, hidden step nav). Divine's
  tokens are a distinct scheme: peach/beige split-screen page, white card,
  peach accent progress bar.
- **Live preview — UNREACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/colorlib-wizard-5/` returns HTTP 404
  ("Not Found"). The naive preview URL does not resolve for this member.
  Fallback: screenshot analysis below. The Colorlib template page
  (`https://colorlib.com/wp/template/colorlib-wizard-5/`) returns HTTP 200
  and confirms the template is "A very flexible and extensible free 4-step
  order template that you can integrate into any eCommerce website. With the
  ready-to-use four-step process, the free wizard takes care of it all out of
  the box." Category: Bootstrap Wizard Templates.
- **Screenshot** (`colorlib-free-wizard-5.jpg`, 1200×972, the TEMPLATES.md row
  embeds a downscaled copy), viewed in the browser:
  - Split-screen layout inside a browser frame (Google Chrome on macOS).
  - **Left side (~40%)**: solid flat warm peach/beige (`#e6d0b3` approx)
    full-viewport background. On a light blue geometric triangular platform
    rests an artistic arrangement: a tall sage-green floor lamp leaning left,
    a small yellow tripod table with two bird figurines, a grey modern
    watering can, and a large green palm frond. No photos of real people.
  - **Right side (~60%)**: a large white rectangular card containing the
    "Billing Details" form, floating over the peach background.
  - **Step indicator**: below the "Billing Details" heading, a horizontal
    progress bar of four segments. Step 1 is filled with the peach accent
    color (current step); steps 2, 3, and 4 are light grey (inactive).
  - **Form fields (Billing Details)**:
    - First Name * (asterisk = required) and Last Name * — side by side in a row.
    - Company Name — full-width, optional (no asterisk).
    - Country — dropdown select, currently set to "Viet Nam", required.
    - Address — full-width, placeholder "Street address", required.
    - Apartment, suite, unit etc. — full-width, placeholder
      "Apartment, suite, unit etc. (optional)", optional.
    - Town / City — full-width, required.
  - **Input styling**: subtle light grey borders, borderless/minimalist
    "until interacted" appearance.
  - **"Next" button**: bottom right of the form card, rectangular, filled
    with the peach accent color, white text "Next" followed by a right-pointing
    arrow (`→`).
  - **Aesthetic**: minimalist, clean, modern. "Card" metaphor separating the
    form from the artistic background. Soft pastel color palette. Spacious
    layout with ample padding.

## Design tokens

> Extracted from the screenshot analysis (preview unreachable). The source
> preview returns 404, so tokens are inferred from the visual reference per
> the fidelity rules.

| Token                | Value                          | Notes                                      |
| -------------------- | ------------------------------ | ------------------------------------------ |
| Background (page)    | `#e6d0b3` (approx warm peach)  | Soft pastel peach/beige, full viewport     |
| Background (card)    | `#ffffff` (pure white)         | Form card on the right side                |
| Accent / CTA         | `#faaca8` (dusty peach/terracotta) | Active step indicator, "Next" button   |
| Text primary         | `#333333` (dark grey)          | Headings and labels                        |
| Text secondary       | `#999999` (light grey)         | Inactive step segments                     |
| Input border         | `#e0e0e0` (subtle light grey)  | Minimal input field borders                |
| Font family          | `Poppins, sans-serif`          | Common Colorlib wizard font                |
| Border radius (card) | `8px`                          | Rounded card corners                       |
| Border radius (input)| `4px`                          | Slightly rounded inputs                    |
| Border radius (button)| `4px`                         | Rounded button corners                     |
| Step indicator       | Horizontal progress bar        | 4 segments, active = peach, inactive = grey |
| Navigation button    | Arrow (→) icon                 | "Next" with right-pointing arrow           |
| Transitions          | Smooth between steps           | Fade/slide between form steps              |

## Gherkin requirements

### Feature: Divine — 4-Step Order Wizard

  Scenario: Page loads with step 1 active (Billing Details)
    Given the user opens the Divine page
    Then a four-step order wizard should be visible
    And step 1 "Billing Details" should be displayed and active
    And steps 2, 3, and 4 should be shown in the progress indicator but inactive
    And the form should contain "First Name" and "Last Name" inputs side by side
    And the form should contain a "Company Name" input
    And the form should contain a "Country" dropdown
    And the form should contain an "Address" input
    And the form should contain an "Apartment, suite, unit etc." input
    And the form should contain a "Town / City" input
    And a "Next" button with a right arrow should be visible

  Scenario: Progress indicator shows step progress
    Given the user is on any step
    Then a horizontal progress bar with 4 segments should be visible
    And the active step should be highlighted in the peach accent color
    And future steps should appear in light grey
    And completed steps should show as active/highlighted

  Scenario: Country dropdown contains Vietnam
    Given the user is on the Billing Details step
    When the user opens the Country dropdown
    Then "Viet Nam" should be available as a selectable option
    And the dropdown should display "Viet Nam" as the default or available value

  Scenario: Navigate to step 2
    Given the user is on step 1 with valid billing information
    When the user clicks "Next"
    Then step 2 should become active
    And step 1 should show as completed in the progress indicator

  Scenario: Required fields validation on step 1
    Given the user is on step 1 "Billing Details"
    And the "First Name" field is empty
    When the user clicks "Next"
    Then the user should remain on step 1
    And a validation error should appear on the "First Name" field
    And a validation error should appear on the "Last Name" field
    And a validation error should appear on the "Country" field
    And a validation error should appear on the "Address" field
    And a validation error should appear on the "Town / City" field

  Scenario: Navigate back to step 1
    Given the user is on step 2
    When the user clicks "Back"
    Then step 1 should become active again
    And the previously entered data should be preserved

  Scenario: Navigate to step 4
    Given the user is on step 2 with valid information
    When the user clicks "Next"
    Then step 2 should show as completed
    And step 3 should become active

  Scenario: Navigate to final step
    Given the user is on step 3 with valid information
    When the user clicks "Next"
    Then step 3 should show as completed
    And step 4 should become active
    And the "Next" button should change to a "Submit" or "Confirm" button

  Scenario: Optional fields do not block advancement
    Given the user is on step 1
    And the "Company Name" field is empty
    And the "Apartment, suite, unit etc." field is empty
    When the user clicks "Next" with all required fields filled
    Then the wizard should advance to step 2

  Scenario: Responsive layout on mobile
    Given the user opens the page on a viewport width less than 768px
    Then the wizard card should fit the screen width
    And all form fields should remain usable and accessible
    And the step indicator should remain visible above the form

## Verification checklist

- [ ] Preview unreachable (404) — fallback to screenshot used for all design
      tokens; noted in spec.
- [ ] Page background is a soft peach/beige (`#e6d0b3` approx)
- [ ] Form card is white with rounded corners (`8px` radius)
- [ ] Step indicator: horizontal 4-segment bar, active = peach, inactive = grey
- [ ] "Billing Details" heading and form on step 1
- [ ] First Name * and Last Name * side by side
- [ ] Company Name (optional, no asterisk)
- [ ] Country dropdown with "Viet Nam" option
- [ ] Address * field with "Street address" placeholder
- [ ] Apartment, suite, unit etc. (optional) field
- [ ] Town / City * required field
- [ ] "Next" button with right arrow (→) icon
- [ ] Required field validation prevents advancement (asterisk-marked fields)
- [ ] Optional fields (Company Name, Apartment) do not block advancement
- [ ] Back navigation preserves data
- [ ] Progress bar updates as user advances through steps
- [ ] Responsive layout stacks on mobile (<768px)
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] No references to ColorLib in app code (provenance in spec only)
- [ ] Uses `cn()` from `packages/ui` for class composition
- [ ] Font family: Poppins via Google Fonts `<link>` in `index.html`
- [ ] 100% test coverage (lines, functions, branches, statements)
