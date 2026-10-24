# Template: WizCraft (Checkout Wizard Form)
<!-- prep-status: shipped-as=divine -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-wizard-5` design this prep describes already
> ships as `apps/divine` (<https://divine.free.componentdock.com>).
> Do not scaffold `apps/wizcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-divine/spec.md`.

## Purpose

Recreation of ColorLib Wizard 5 — a free 4-step checkout/order wizard form
template with a split layout (illustration left, white form panel right), step
progress indicators, and multi-step form navigation. The original is a
jQuery-based Bootstrap template for e-commerce checkout flows.

- **Source template**: [Colorlib Wizard 5](https://colorlib.com/wp/template/colorlib-wizard-5/)
- **New Name**: `wizcraft` (App directory: `apps/wizcraft`, Package: `@free-react-templates/wizcraft`)
- **Category**: Form / Checkout Wizard
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-5/` (unreachable at prep time; analysis based on source HTML + CSS from `https://colorlib.com/etc/bwiz/colorlib-wizard-5/`) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html` — HTTP 200, 9,892 B, title `FormWizard_v5`.
>
> Sheet: `https://colorlib.com/etc/bwiz/colorlib-wizard-5/css/style.css?v=4559639a` (12,177 B).
> Faces it actually declares: `Poppins-Medium`, `Muli-Bold`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->
- **Source design:** ColorLib "Colorlib Wizard 5" — https://colorlib.com/wp/template/colorlib-wizard-5/

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

## Requirements

### Feature: WizCraft — 4-Step Checkout Wizard

#### Scenario: Page loads with split layout

- **GIVEN** the user opens the WizCraft page
- **THEN** a full-screen background should be visible behind the layout
- **AND** a left-side illustration/image should occupy approximately 51% of the viewport
- **AND** a white wizard panel should occupy approximately 49% of the right side
- **AND** the wizard panel should show 4 step progress bars at the top

#### Scenario: Step progress indicators

- **GIVEN** the page is loaded
- **THEN** 4 horizontal progress bars should be displayed in a row
- **AND** each bar should be approximately 20% width with a 10px gap
- **AND** inactive bars should have a gray (#e6e6e6) background
- **AND** the active step bar should have a peach (#f3d4b7) background
- **AND** a step title should appear above the bars (e.g. "Billing Details" for step 1)
- **AND** transitioning between steps should animate the bar fill color

#### Scenario: Step 1 — Billing Details

- **GIVEN** the user is on step 1
- **THEN** the heading "Billing Details" should be visible above the progress bars
- **AND** the form should contain "First Name *" and "Last Name *" inputs side by side
- **AND** a "Company Name" input should be visible (optional, no asterisk)
- **AND** a "Country *" dropdown with options (Viet Nam, United States, United Kingdom) should be present
- **AND** an "Address *" section with "Street address" and "Apartment, suite, unit etc. (optional)" inputs should be visible
- **AND** a "Town / City *" input should be present
- **AND** a "Next" button should be visible at the bottom

#### Scenario: Next button navigation

- **GIVEN** the user is on any step except the last
- **THEN** a "Next" button (peach background, left-aligned text) should be visible
- **AND** clicking "Next" should advance to the next step
- **AND** the progress bar for the completed step should turn peach
- **AND** the step title should update to reflect the new section

#### Scenario: Previous button navigation

- **GIVEN** the user is on any step except the first
- **THEN** a "Previous" button (gray background) should be visible to the left of "Next"
- **AND** clicking "Previous" should return to the prior step
- **AND** the step title should update accordingly

#### Scenario: Step 2 — Additional Information

- **GIVEN** the user navigates to step 2
- **THEN** the heading "Additional Information" should appear above the progress bars
- **AND** a "County *" input should be visible
- **AND** a "Postcode / Zip *" input should be visible
- **AND** "Phone *" and "Email Address *" inputs should be displayed side by side
- **AND** an "Order Notes" textarea with placeholder "Note about your order, eg. special notes for delivery." should be present
- **AND** a "Create an account?" checkbox should be visible

#### Scenario: Step 3 — Your Order

- **GIVEN** the user navigates to step 3
- **THEN** the heading "Your Order" should appear above the progress bars
- **AND** a product list should display at least 2 items with thumbnail images, names, quantities, and prices
- **AND** item thumbnails should be in bordered containers (100px × 90px)
- **AND** a subtotal line should show the total (e.g. "$364")
- **AND** a shipping note should indicate shipping availability
- **AND** a total line should display the final amount in bold

#### Scenario: Step 4 — Billing Method

- **GIVEN** the user navigates to step 4
- **THEN** the heading "Billing Method" should appear above the progress bars
- **AND** 3 radio options should be visible: "Direct bank transfer", "Check payments", "Cash on delivery"
- **AND** the "Direct bank transfer" radio should be selected by default
- **AND** selecting a radio should display a tooltip with payment instructions
- **AND** the tooltip should have a light gray (#f2f2f2) background with an upward arrow
- **AND** the "Previous" button should be visible but no "Next" button (final step)

#### Scenario: Form input focus styling

- **GIVEN** the user clicks into any form input
- **THEN** the input border should change to the accent peach color (#f3d4b7)
- **AND** the focus transition should be smooth

#### Scenario: Responsive layout on mobile

- **GIVEN** the viewport width is below 768px
- **THEN** the left-side illustration should stack above the form panel
- **AND** the form panel should take full width
- **AND** the two-column form rows (First/Last Name, Phone/Email) should stack vertically
- **AND** the wizard panel padding should reduce

#### Scenario: Responsive layout on tablet

- **GIVEN** the viewport width is between 768px and 991px
- **THEN** the left-side illustration should be hidden
- **AND** the form panel should take approximately 60% width and be centered

#### Scenario: Component Dock footer link

- **GIVEN** the page footer is visible
- **THEN** a link to "https://www.componentdock.com/" should be present
- **AND** it should read "Component Dock" or "Made with Component Dock"

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
