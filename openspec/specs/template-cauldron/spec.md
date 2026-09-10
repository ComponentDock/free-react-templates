# Template: Cauldron (Checkout Wizard)

## Purpose

Recreation of ColorLib Wizard 5 — a free 4-step order/checkout wizard template
for eCommerce websites.

- **Source:** [Colorlib Wizard 5](https://colorlib.com/wp/template/colorlib-wizard-5/)
- **Demo (original):** https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Design category:** Multi-step form wizard (checkout flow)

## Design tokens (extracted from original CSS)

| Token               | Value                      | Usage                                         |
|---------------------|----------------------------|-----------------------------------------------|
| Brand accent        | `#f3d4b7` (warm beige)    | Progress bar active, buttons, focus borders   |
| Button hover        | `#d9bda3` (darker beige)  | Button hover state                            |
| Body text           | `#666`                     | Default text, form inputs                     |
| Heading text        | `#333`                     | Step titles, product names, total price       |
| Placeholder text    | `#999`                     | Input placeholders                            |
| Form border         | `#e6e6e6`                  | Input borders, inactive progress segments     |
| Inactive / back btn | `#e6e6e6` (light grey)    | Progress bar inactive, back button bg         |
| Back button hover   | `#ccc`                     | Back button hover                             |
| Card background     | `#fff`                     | White wizard card                             |
| Checkbox bg         | `#ebebeb`                  | Checkmark background                          |
| Tooltip bg          | `#f2f2f2`                  | Payment method tooltip                        |
| Total price color   | `#333` (Muli Bold)         | Order total                                   |
| **Font family**     | Poppins (Regular/Medium/SemiBold) + Muli Bold | Body, headings, totals |
| Button height       | 51px                       | Next/back buttons                             |
| Button radius       | none (sharp corners)       | Buttons, form inputs                          |
| Input height        | 42px                       | Text inputs                                   |
| Input padding       | 0 18px                     | Horizontal input padding                      |
| Card padding        | 107px 75px 65px            | Inner wizard card padding                     |
| Card min-height     | 834px                      | Wizard card minimum height                    |

## Layout

Split-screen layout:
- **Left panel (51%):** Lifestyle/brand image on warm beige background with pale blue angled overlay. Hidden on screens < 992px; shown full-width at top on mobile (< 768px).
- **Right panel (49%):** White card containing the multi-step form wizard. Full-width on mobile.

## Section structure (4 steps)

### Step 1 — Billing Details
- Progress bar: horizontal segmented bar (active segment = brand accent, inactive = light grey)
- Step title: "Billing Details" (Poppins SemiBold, 22px, #333)
- Form fields:
  - First Name * (text input, required)
  - Last Name * (text input, required)
  - Company Name (text input, optional)
  - Country * (dropdown select with options)
  - Address * (text input, "Street address" placeholder)
  - Address line 2 (text input, "Apartment, suite, unit etc. (optional)" placeholder)
  - Town / City * (text input)
- Actions: Back button (grey, hidden on first step), Next button (beige accent)

### Step 2 — Additional Information
- Progress bar updates (step 2 active)
- Step title: "Additional Information"
- Form fields:
  - County * (text input)
  - Postcode / Zip * (text input)
  - Phone * (text input)
  - Email Address * (text input)
  - Order Notes (textarea, "Note about your order..." placeholder)
  - Create an account? (checkbox)
- Actions: Back, Next

### Step 3 — Your Order
- Progress bar updates (step 3 active)
- Step title: "Your Order"
- Product list (each item):
  - Thumbnail image (100×90px bordered container)
  - Product name + quantity (e.g. "Low Table/Stool x4")
  - Price (right-aligned)
- Order summary:
  - Subtotal
  - Shipping notice ("there are no shipping methods available...")
  - Total (bold, Muli Bold)
- Actions: Back, Next

### Step 4 — Billing Method
- Progress bar updates (step 4 active)
- Step title: "Billing Method"
- Radio button options (circular checkmarks, tooltip on selection):
  - Direct bank transfer (default selected, with tooltip explanation)
  - Check payments (with tooltip)
  - Cash on delivery (with tooltip)
- Actions: Back (hidden), Submit/Place Order

## Gherkin scenarios

### Scenario: Wizard renders first step on load
```
Given the user navigates to the checkout page
When the page loads
Then the wizard displays Step 1 "Billing Details"
And the progress bar shows the first segment as active
And the "Next" button is visible
And the "Back" button is not visible
```

### Scenario: Navigation between steps
```
Given the user is on Step 1 "Billing Details"
When the user fills required fields and clicks "Next"
Then the wizard advances to Step 2 "Additional Information"
And the progress bar shows two segments active
And the "Back" button becomes visible

When the user clicks "Back"
Then the wizard returns to Step 1
And the progress bar reverts to one segment active
```

### Scenario: Step 3 displays order summary
```
Given the user has progressed to Step 3
Then the step title reads "Your Order"
And the product list shows items with thumbnail, name, quantity, and price
And the subtotal, shipping notice, and total are displayed
```

### Scenario: Step 4 payment method selection
```
Given the user has progressed to Step 4 "Billing Method"
Then three radio options are displayed: "Direct bank transfer", "Check payments", "Cash on delivery"
And "Direct bank transfer" is selected by default
And clicking a radio option shows its tooltip
And the "Next" button is replaced by a submit action
```

### Scenario: Responsive behavior
```
Given the user views the page on a viewport wider than 992px
Then the split layout shows the image panel (51%) on the left and the form (49%) on the right

Given the user views the page on a viewport between 768px and 991px
Then the image panel is hidden
And the form occupies 60% width, centered

Given the user views the page on a viewport narrower than 768px
Then the image panel is shown full-width at the top
And the form is full-width below it
And side-by-side form groups stack vertically
```

### Scenario: Form validation
```
Given the user is on Step 1 and clicks "Next" without filling required fields
Then validation errors appear for required fields
And the wizard does not advance

Given the user fills all required fields on Step 1
When the user clicks "Next"
Then the wizard advances to Step 2
```

## Verification checklist

- [ ] Split-screen layout (51/49) with brand image on left
- [ ] 4-step wizard with progress bar (segmented horizontal bar)
- [ ] Step titles match original: "Billing Details", "Additional Information", "Your Order", "Billing Method"
- [ ] Brand accent color #f3d4b7 used for active progress, buttons, focus
- [ ] Poppins font family (Regular, Medium, SemiBold) throughout
- [ ] Form inputs: 42px height, #e6e6e6 border, #f3d4b7 focus border
- [ ] Buttons: 51px height, beige accent bg, dark text, no border-radius
- [ ] Back button: grey #e6e6e6, hidden on step 1 and step 4
- [ ] Product list with thumbnails, names, quantities, prices
- [ ] Order summary with subtotal, shipping notice, total (Muli Bold)
- [ ] Payment method radio buttons with circular checkmarks and tooltips
- [ ] Responsive: image hidden < 992px, stacked < 768px
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Lucide React icons (replace Material Design Iconic Font arrows)
- [ ] 100% test coverage (Vitest + Testing Library)
