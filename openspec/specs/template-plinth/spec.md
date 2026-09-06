# Template: Plinth (Footer)

## Purpose

Recreation of ColorLib "Bootstrap Footer 01"
(https://colorlib.com/wp/template/bootstrap-footer-01/).
Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-01/

Stack: React 19, Vite, Tailwind CSS 4, TypeScript (strict). Vitest + Testing
Library with 100% coverage enforced.

## Source Reference

- **ColorLib slug:** bootstrap-footer-01
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-01/
- **ColorLib page:** https://colorlib.com/wp/template/bootstrap-footer-01/
- **Description:** A modern dark-themed Bootstrap footer template with a
  prominent CTA banner, five-column layout (logo+copyright, two link columns,
  one legal column, social icons), and clean typography.

## Design Tokens (extracted from live preview CSS)

### Colors

| Token             | Value           | Usage                                     |
| ----------------- | --------------- | ----------------------------------------- |
| Footer background | `#141d2a`       | Dark navy — main footer section bg        |
| CTA background    | `#8186d5`       | Lavender/periwinkle — CTA banner bg       |
| CTA shadow        | `rgba(52,58,64,0.2)` | Offset box-shadow: `-20px -20px 0 0` |
| Social icon bg    | `#8186d5`       | Circle buttons for social links           |
| Link text         | `#666873`       | Muted gray — footer link default color    |
| Link hover        | `#fff`          | White — link hover state                  |
| Text / headings   | `#fff`          | White — footer body text and headings     |
| Logo text         | `#fff`          | White, uppercase                          |
| Copyright text    | `#666873`       | Muted gray                                |
| Content area      | `bg-light`      | Light gray bg for the hero/placeholder    |
| CTA button        | `btn-dark`      | Bootstrap dark (near-black) button        |

### Typography

| Element     | Font family                                                  |
| ----------- | ------------------------------------------------------------ |
| Body        | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", ...` |
| Headings    | Same Roboto stack                                            |
| Also loaded | Poppins (300, 400, 500), Source Serif Pro (400, 600)         |

### Spacing & Shapes

| Token          | Value                                                  |
| -------------- | ------------------------------------------------------ |
| Footer padding | `7rem 0` (vertical)                                   |
| CTA padding    | `20px` inner (with `px-5` horizontal)                 |
| CTA offset     | `top: -150px` (overlaps above footer area)            |
| CTA shadow     | `-20px -20px 0 0 rgba(52,58,64,0.2)` (offset, no blur) |
| Button radius  | `rounded-0` (square/sharp corners)                    |
| Button padding | `py-3 px-5`                                           |
| Social buttons | 40x40px, `border-radius: 50%` (perfect circles)      |
| Link spacing   | `margin-bottom: 10px` per list item                   |
| Link line-height | 1.5                                                |
| Logo size      | 20px, uppercase, `letter-spacing: .1rem`              |
| Heading (h3)   | 16px, `margin-bottom: 10px`, line-height 1.5          |
| Transitions    | `0.3s all ease` on all anchor tags                    |

### Layout (Bootstrap Grid)

- CTA banner: full-width, flex row (heading left, button right via `ml-auto`)
- Footer columns: 5-column row using `col-sm` (equal width) except last is
  `col-md-3` (slightly narrower)
  1. Logo + copyright
  2. "Customers" links (Buyer, Supplier)
  3. "Company" links (About us, Careers, Contact us)
  4. "Further Information" links (Terms & Conditions, Privacy Policy)
  5. "Follow us" social icons (Facebook, Twitter, LinkedIn, Medium, Telegram)

## Gherkin Requirements

### Feature: Plinth — Dark Footer with CTA Banner

  Scenario: Footer renders with correct section structure
    Given the page loads
    Then a footer element is visible
    And the footer contains a CTA banner section
    And the footer contains a five-column grid
    And the footer has a dark navy background

  Scenario: CTA banner displays headline and call-to-action
    Given the footer is rendered
    Then the CTA banner shows "Ready for a next project?" as the heading
    And the CTA banner shows "Let's get started!" as the subheading
    And a "Contact us" button is visible in the CTA banner
    And the button has dark styling with sharp corners

  Scenario: CTA banner has correct visual styling
    Given the footer is rendered
    Then the CTA banner has a lavender/periwinkle background (#8186d5)
    And the CTA banner has an offset shadow effect
    And the CTA banner overlaps the footer area above it

  Scenario: Logo column displays brand and copyright
    Given the footer is rendered
    Then the first column contains a logo text link
    And the logo text is uppercase
    And a copyright notice with year is displayed below the logo

  Scenario: Link columns display correct headings and items
    Given the footer is rendered
    Then a "Customers" column contains "Buyer" and "Supplier" links
    And a "Company" column contains "About us", "Careers", and "Contact us" links
    And a "Further Information" column contains "Terms & Conditions" and "Privacy Policy" links

  Scenario: Social icons render as circular buttons
    Given the footer is rendered
    Then the "Follow us" column contains social icon links
    And each social icon is displayed in a circular button
    And the circular buttons have the lavender/periwinkle background

  Scenario: Footer link hover states
    Given the footer is rendered
    When a user hovers over a footer link
    Then the link text color changes to white

  Scenario: Responsive layout adjusts columns
    Given the footer is rendered on a mobile viewport
    Then the five columns stack vertically
    And the CTA banner stacks vertically with full-width button

  Scenario: Footer accessibility
    Given the footer is rendered
    Then all links are keyboard-focusable
    And social icons have accessible labels
    And the footer uses semantic HTML elements

## Verification Checklist

- [ ] Footer has dark navy background (`#141d2a`)
- [ ] CTA banner has lavender background (`#8186d5`)
- [ ] CTA banner has offset shadow effect
- [ ] CTA banner overlaps footer with `top: -150px`
- [ ] Five-column layout: logo, Customers, Company, Further Info, Follow us
- [ ] Logo text is uppercase with letter-spacing
- [ ] Link text is muted gray (`#666873`), hover turns white
- [ ] Social icons are 40x40 circles with lavender background
- [ ] "Contact us" button is dark, no border-radius (`rounded-0`)
- [ ] Roboto font family applied throughout
- [ ] Transitions on all links (`0.3s all ease`)
- [ ] Copyright line present with year
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to `https://www.componentdock.com/` (Component Dock)
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
