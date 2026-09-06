# Template: Modalbox (Modal)

## Purpose

Recreation of the ColorLib "Modal V14" template — a coupon form pop-up modal
with warm cream background, promotional image, dashed coupon code box, and
full-width CTA button.

- **Source:** [ColorLib Modal 14](https://colorlib.com/wp/template/modal-14/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-14/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-14.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`) and HTML structure:

| Token                    | Value                                  | Notes                                  |
| ------------------------ | -------------------------------------- | -------------------------------------- |
| Body font                | `Roboto`, sans-serif, 300 weight       | Main body text                         |
| Heading font             | `Roboto`, sans-serif                   | Same family, default weight            |
| Paragraph color (page)   | `#b3b3b3`                              | Light gray text                        |
| Paragraph color (modal)  | `#777`                                 | Darker gray for modal body paragraphs  |
| Heading color (in modal) | `#000`                                 | Black headings                         |
| Close button color       | `#000`                                 | Black close icon                       |
| Brand color (modal bg)   | `#fff4e4`                              | Warm cream/light orange (`bg-4` class) |
| Button style             | `btn-primary`                          | Full-width block button, sharp corners |
| Button radius            | `4px`                                  | Slightly rounded                       |
| Button padding           | `py-3`                                 | Taller button                          |
| Button color             | Bootstrap primary blue (`#007bff`)     | Standard Bootstrap primary             |
| Modal background         | `#fff4e4` (cream)                      | Warm cream background                  |
| Modal border-radius      | `7px`                                  | Slightly rounded corners               |
| Modal shadow             | `0 10px 50px -10px rgba(0,0,0,0.9)`    | Deep, strong shadow                    |
| Modal content bg         | Transparent → inherits from modal-body | No separate content bg                 |
| Coupon box bg            | `#fff`                                 | White background                       |
| Coupon box border        | `2px dashed #6c757d`                   | Dashed gray border                     |
| Coupon box text          | `#000`                                 | Black monospace text                   |
| Coupon box padding       | `10px`                                 | Internal spacing                       |
| Promo image width        | `200px`                                | Fixed-width flex item                  |
| Close icon               | icomoon `icon-close`                   | Use Lucide X icon                      |
| Page layout              | Full viewport height, centered         | `height: 100vh`                        |
| Content alignment        | Vertically + horizontally centered     | Bootstrap `align-items-center`         |
| Cancel text              | Small, gray color                      | Bottom of modal                        |
| Launch button            | `btn-secondary`, `px-4 py-3`           | Centered on page                       |

## Visual Design

From the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/modal-14/`):
A full-viewport centered page with "Modal #4" heading and a "Launch modal" button.
Clicking the button opens a centered modal dialog with:

- Warm cream (#fff4e4) background
- Flexbox layout: promotional image (left) + text content (right)
- Heading: "60% off coupon"
- Description paragraph text
- Dashed-border coupon code box showing "SUMMER60"
- Full-width primary "Use a coupon" button
- "Sorry, I don't want this." cancel/dismiss link at the bottom
- Deep box-shadow, slightly rounded corners (7px), clean promotional feel

## Gherkin Requirements

### Background

Given the page loads with a centered layout
When the viewport is displayed
Then the content is vertically and horizontally centered
And the page title "Modal #4" is visible
And a "Launch modal" button is displayed below the title

### Scenario: Modal opens on button click

Given the page is loaded
When the user clicks the "Launch modal" button
Then a modal dialog appears centered in the viewport
And the modal has a warm cream (#fff4e4) background
And the modal displays a promotional image on the left side
And the modal displays the title "60% off coupon"
And the modal displays a description paragraph
And the modal displays a dashed-border coupon code box with text "SUMMER60"
And the modal displays a full-width "Use a coupon" primary button
And the modal displays a "Sorry, I don't want this." cancel link at the bottom
And a close button (X) is visible in the top-right corner

### Scenario: Modal closes on close button click

Given the modal is open
When the user clicks the close button (X)
Then the modal closes with a fade-out animation
And the page content is visible again

### Scenario: Modal closes on backdrop click

Given the modal is open
When the user clicks the dark backdrop area outside the modal
Then the modal closes
And the page content is visible again

### Scenario: Modal closes on Escape key

Given the modal is open
When the user presses the Escape key
Then the modal closes
And the page content is visible again

### Scenario: Modal closes on cancel link click

Given the modal is open
When the user clicks the "Sorry, I don't want this." link
Then the modal closes
And the page content is visible again

### Scenario: Modal content layout is correct

Given the modal is open
Then the promotional image occupies a fixed-width column on the left (200px)
And the text content column is on the right
And the coupon code box has a white background with dashed gray border
And the "Use a coupon" button spans the full width of the text column

## Verification Checklist

- [ ] Modal opens with fade-in animation on button click
- [ ] Modal closes on X button click
- [ ] Modal closes on backdrop click
- [ ] Modal closes on Escape key
- [ ] Modal closes on cancel link click
- [ ] Warm cream (#fff4e4) background applied to modal body
- [ ] Promotional image renders at 200px width on the left
- [ ] Coupon code box shows dashed border with white background
- [ ] "Use a coupon" button is full-width with primary blue color
- [ ] Cancel link text is gray and small
- [ ] Modal has 7px border-radius and deep box-shadow
- [ ] Layout is responsive (stacks vertically on mobile)
- [ ] Accessibility: focus trap within modal when open
- [ ] Accessibility: aria-labelledby on modal dialog
- [ ] Accessibility: focus returns to trigger button on close
- [ ] Footer links to https://www.componentdock.com/
