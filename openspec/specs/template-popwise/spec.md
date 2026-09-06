# Template: Popwise (Split-Screen Review Modal)

## Purpose

Recreation of **ColorLib Modal V19** — a free split-screen review modal
for showcasing product details with social interaction (likes, comments, saves).

- **Source:** https://colorlib.com/wp/template/modal-19/
- **Preview (live):** https://preview.colorlib.com/theme/bootstrap/modal-19/ (was 404 at prep time; falling back to ColorLib listing page + CSS analysis)
- **ColorLib listing:** https://colorlib.com/wp/template/modal-19/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Category:** Modal / Product Review

## Design Tokens (extracted from preview CSS)

| Token               | Value                                   | Source                         |
| ------------------- | --------------------------------------- | ------------------------------ |
| Font (body)         | Roboto 300, 400                         | `css/style.css` font-family    |
| Font (headings)     | Roboto 300, 400                         | Same as body                   |
| Modal bg            | `#efefef`                               | `.modal-body` background-color |
| Modal border-radius | 7px                                     | `.modal` and `.modal-content`  |
| Modal shadow        | `0 10px 50px -10px rgba(0,0,0,0.9)`     | `.modal-body` box-shadow       |
| Modal width         | lg (modal-lg) + centered                | Bootstrap modal-lg class       |
| Promo image width   | 50% flex                                | `.promo-img` flex: 0 0 50%     |
| Heading h2          | 18px, color unspecified (inherits #000) | `.modal-body h2`               |
| Heading h3          | 22px, `#000`                            | `.modal-body h3`               |
| Paragraph (modal)   | 14px, `#777`, font-weight 300           | `.modal-body p`                |
| Paragraph (body)    | `#b3b3b3`, font-weight 300              | `p` rule                       |
| Star rating color   | `#ffc107` (text-warning)                | Bootstrap text-warning         |
| Divider line        | 70px × 1px, `#ccc`, centered            | `.line:after`                  |
| Price badge         | absolute, top 20px left 20px, white     | `.price`                       |
| Share icon          | `#ccc`, hover `#000`                    | `.share`                       |
| Social - heart      | `#dc3545` (red)                         | `.like .icon`                  |
| Social - message    | `#007bff` (blue)                        | `.message .icon`               |
| Social - add        | `#007bff` (blue)                        | `.add .icon`                   |
| Social text color   | `#b3b3b3`                               | `.social a`                    |
| Button radius       | 4px                                     | `.btn` rule                    |
| Button secondary    | Bootstrap default (`#6c757d`)           | `btn-secondary` class          |
| Close icon color    | `#000`                                  | `.close-btn`                   |
| Content text color  | `#999`                                  | `.custom-note`                 |
| Link color          | `#555`, font-weight 900                 | `.custom-note a`               |

## Design Notes (from ColorLib listing + screenshot)

The original ColorLib listing page describes this as:

> "A modern and highly effective free split-screen review modal that will
> help build customer trust in your products and brand."

Category: Bootstrap Modal Templates.

Visual layout from the screenshot and HTML:

- Full-screen centered launch button ("Launch modal") on a clean white background
- Modal opens centered on screen (modal-lg, centered dialog)
- Split-screen inside modal: left half = product image with price badge overlay; right half = product info
- Right panel has: share icon (top-right, absolute), product name with centered divider line below, 5-star rating (4 filled + 1 empty), description paragraph, social action row (heart/like count, message/comment count, add/save count)
- Clean, minimal aesthetic: light gray (#efefef) modal body, sharp corners on image (rounded-0), soft shadow
- Bootstrap 4 styling throughout

## Gherkin Requirements

### Feature: Popwise Split-Screen Review Modal

Scenario: Page loads with launch button
Given the page has loaded
Then a "Launch modal" button is visible in the center of the page
And the button is styled as Bootstrap btn-secondary

Scenario: Modal opens on button click
Given the page has loaded
When the user clicks the "Launch modal" button
Then a modal dialog opens centered on screen
And the modal has a split-screen layout

Scenario: Modal split-screen layout
Given the modal is open
Then the left half shows a product image
And a price badge is overlaid on the top-left of the image
And the price badge text is white
And the right half shows product details

Scenario: Product info section
Given the modal is open
Then a share icon is visible at the top-right of the right panel
And a product name heading is displayed centered
And a divider line appears below the heading
And a 5-star rating is displayed (4 filled yellow, 1 empty)
And a description paragraph is shown

Scenario: Social interaction row
Given the modal is open
Then a social row is visible at the bottom of the right panel
And the row contains a like button with heart icon and count
And the row contains a message button with chat icon and count
And the row contains an add/save button with add icon and count
And the social icons are centered with equal spacing

Scenario: Modal closes on backdrop click
Given the modal is open
When the user clicks outside the modal (backdrop)
Then the modal closes

Scenario: Modal closes on close button
Given the modal is open
When the user clicks the close button (×)
Then the modal closes

Scenario: Responsive layout
Given the modal is open on a mobile viewport
Then the split-screen layout stacks vertically
And the product image is on top
And the product details are below

Scenario: Accessibility
Given the modal is open
Then the modal has an aria-labelledby attribute
And the modal has role="dialog"
And focus is trapped within the modal
And pressing Escape closes the modal

## Verification Checklist

- [ ] Launch button renders centered on page
- [ ] Clicking button opens modal dialog
- [ ] Modal has split-screen layout (image left, info right)
- [ ] Product image fills left half with price badge overlay
- [ ] Share icon positioned top-right of right panel
- [ ] Product name heading centered with divider line
- [ ] 5-star rating shows 4 filled + 1 empty
- [ ] Description paragraph visible
- [ ] Social row shows heart, message, add icons with counts
- [ ] Modal closes on backdrop click
- [ ] Modal closes on close button
- [ ] Escape key closes modal
- [ ] Responsive: stacks on mobile
- [ ] Accessibility: aria-labelledby, role="dialog", focus trap
- [ ] Design tokens match reference (#efefef bg, 7px radius, #000 headings)
- [ ] Font family: Roboto 300/400
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass with 100% coverage
