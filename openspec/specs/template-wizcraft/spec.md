# Template: WizCraft (Checkout Wizard Form)

## Purpose

Recreation of ColorLib Wizard 5 — a free 4-step checkout/order wizard form
template with a split layout (illustration left, white form panel right), step
progress indicators, and multi-step form navigation. The original is a
jQuery-based Bootstrap template for e-commerce checkout flows.

- **Source template**: [Colorlib Wizard 5](https://colorlib.com/wp/template/colorlib-wizard-5/)
- **New Name**: `wizcraft` (App directory: `apps/wizcraft`, Package: `@free-react-templates/wizcraft`)
- **Category**: Form / Checkout Wizard
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-5/` (unreachable at prep time; analysis based on source HTML + CSS from `https://colorlib.com/etc/bwiz/colorlib-wizard-5/`)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design tokens

> Extracted from the source CSS (`css/style.css`) at
> `https://colorlib.com/etc/bwiz/colorlib-wizard-5/css/style.css`.

| Token                          | Value               | Notes                                                        |
| ------------------------------ | ------------------- | ------------------------------------------------------------ |
| Font family (body)             | `"Poppins", sans-serif` | Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)     |
| Font family (bold accent)      | `"Muli", sans-serif`    | Weight: 700 (Bold) — used for total price                 |
| Accent / CTA                   | `#f3d4b7`           | Warm peach/tan — step bars, buttons, focus borders           |
| Accent hover                   | `#d9bda3`           | Darker peach for button hover                                |
| Text primary (headings)        | `#333333`           | Dark headings, step titles                                   |
| Text body                      | `#666666`           | Body text, form labels                                       |
| Text placeholder / muted       | `#999999`           | Placeholder text, checkbox labels, icons                     |
| Border (inputs)                | `1px solid #e6e6e6` | Default input borders                                        |
| Border focus                   | `#f3d4b7`           | Input focus border turns accent peach                        |
| Background (body)              | Background image    | Full-screen background image (replace with gradient/placeholder) |
| Background (wizard panel)      | `#ffffff`           | White form panel                                             |
| Background (step bar inactive) | `#e6e6e6`           | Gray inactive step indicator                                 |
| Background (step bar active)   | `#f3d4b7`           | Peach active step indicator                                  |
| Background (tooltip)           | `#f2f2f2`           | Light gray tooltip background                                |
| Background (checkbox)          | `#ebebeb`           | Checkbox/radio default background                            |
| Radio selected                 | `#666666`           | Inner dot color for selected radio                           |
| Button next                    | `#f3d4b7`           | Peach background, height 51px, width 135px, left-aligned text |
| Button previous                | `#e6e6e6`           | Gray background, width 135px                                 |
| Button hover                   | `#d9bda3` (next) / `#ccc` (prev) | Hover state for navigation buttons            |
| Form control height            | `42px`              | Standard input height                                        |
| Form control padding           | `0 18px`            | Horizontal padding inside inputs                             |
| Wizard panel padding           | `107px 75px 65px`   | Top-heavy padding for step header space                      |
| Wizard panel min-height        | `834px`             | Minimum height for the form panel                            |
| Step bar height                | `7px`               | Thin progress bar height                                     |
| Step bar radius                | `3.5px`             | Rounded ends on progress bars                                |
| Step bar width                 | `20.16%` each       | 4 equal-width bars with 10px gap                             |
| Tooltip arrow                  | `border-bottom: 10px solid #f2f2f2` | Upward-pointing triangle arrow     |
| Section spacing (step→form)    | `30px`              | Gap between step bars and form content                       |
| Form row margin                | `24px`              | Vertical spacing between form fields                         |
| Product item border            | `1px solid #e6e6e6` | Bottom border on product rows                                |
| Checkbox size                  | `13px × 12px`       | Small custom checkbox                                        |
| Radio size                     | `14px × 14px`       | Circular radio button                                        |
| Radio inner dot                | `6px × 6px`         | Center dot when selected                                     |
| Transitions                    | `all 0.5s ease`     | Step bar transitions; button hover `0.3s`                    |
| Icons                          | Material Design Iconic Font (`zmdi-*`) | Step arrows, caret-down       |

## Gherkin requirements

### Feature: WizCraft — 4-Step Checkout Wizard

Scenario: Page loads with split layout
Given the user opens the WizCraft page
Then a full-screen background should be visible behind the layout
And a left-side illustration/image should occupy approximately 51% of the viewport
And a white wizard panel should occupy approximately 49% of the right side
And the wizard panel should show 4 step progress bars at the top

Scenario: Step progress indicators
Given the page is loaded
Then 4 horizontal progress bars should be displayed in a row
And each bar should be approximately 20% width with a 10px gap
And inactive bars should have a gray (#e6e6e6) background
And the active step bar should have a peach (#f3d4b7) background
And a step title should appear above the bars (e.g. "Billing Details" for step 1)
And transitioning between steps should animate the bar fill color

Scenario: Step 1 — Billing Details
Given the user is on step 1
Then the heading "Billing Details" should be visible above the progress bars
And the form should contain "First Name *" and "Last Name *" inputs side by side
And a "Company Name" input should be visible (optional, no asterisk)
And a "Country *" dropdown with options (Viet Nam, United States, United Kingdom) should be present
And an "Address *" section with "Street address" and "Apartment, suite, unit etc. (optional)" inputs should be visible
And a "Town / City *" input should be present
And a "Next" button should be visible at the bottom

Scenario: Next button navigation
Given the user is on any step except the last
Then a "Next" button (peach background, left-aligned text) should be visible
And clicking "Next" should advance to the next step
And the progress bar for the completed step should turn peach
And the step title should update to reflect the new section

Scenario: Previous button navigation
Given the user is on any step except the first
Then a "Previous" button (gray background) should be visible to the left of "Next"
And clicking "Previous" should return to the prior step
And the step title should update accordingly

Scenario: Step 2 — Additional Information
Given the user navigates to step 2
Then the heading "Additional Information" should appear above the progress bars
And a "County *" input should be visible
And a "Postcode / Zip *" input should be visible
And "Phone *" and "Email Address *" inputs should be displayed side by side
And an "Order Notes" textarea with placeholder "Note about your order, eg. special notes for delivery." should be present
And a "Create an account?" checkbox should be visible

Scenario: Step 3 — Your Order
Given the user navigates to step 3
Then the heading "Your Order" should appear above the progress bars
And a product list should display at least 2 items with thumbnail images, names, quantities, and prices
And item thumbnails should be in bordered containers (100px × 90px)
And a subtotal line should show the total (e.g. "$364")
And a shipping note should indicate shipping availability
And a total line should display the final amount in bold

Scenario: Step 4 — Billing Method
Given the user navigates to step 4
Then the heading "Billing Method" should appear above the progress bars
And 3 radio options should be visible: "Direct bank transfer", "Check payments", "Cash on delivery"
And the "Direct bank transfer" radio should be selected by default
And selecting a radio should display a tooltip with payment instructions
And the tooltip should have a light gray (#f2f2f2) background with an upward arrow
And the "Previous" button should be visible but no "Next" button (final step)

Scenario: Form input focus styling
Given the user clicks into any form input
Then the input border should change to the accent peach color (#f3d4b7)
And the focus transition should be smooth

Scenario: Responsive layout on mobile
Given the viewport width is below 768px
Then the left-side illustration should stack above the form panel
And the form panel should take full width
And the two-column form rows (First/Last Name, Phone/Email) should stack vertically
And the wizard panel padding should reduce

Scenario: Responsive layout on tablet
Given the viewport width is between 768px and 991px
Then the left-side illustration should be hidden
And the form panel should take approximately 60% width and be centered

Scenario: Component Dock footer link
Given the page footer is visible
Then a link to "https://www.componentdock.com/" should be present
And it should read "Component Dock" or "Made with Component Dock"

## Verification checklist

- [ ] Split layout renders: illustration left (~51%), white form panel right (~49%)
- [ ] 4 step progress bars displayed with correct widths and gap
- [ ] Step 1 (Billing Details) fields all present and correctly laid out
- [ ] Step 2 (Additional Information) fields all present
- [ ] Step 3 (Your Order) product list and checkout summary render
- [ ] Step 4 (Billing Method) radio buttons with tooltips functional
- [ ] Next/Previous navigation works between all steps
- [ ] Step bar animation transitions correctly
- [ ] Input focus state shows peach border
- [ ] Responsive: mobile stacks illustration on top, form full-width
- [ ] Responsive: tablet hides illustration, centers form at 60%
- [ ] Footer links to Component Dock
- [ ] All components have 100% test coverage
- [ ] TypeScript strict mode passes
- [ ] Build succeeds (`npm run build` in workspace)
