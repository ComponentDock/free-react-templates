# Template: DealBounce (Modal / Popup)

## Purpose

Recreation of ColorLib "Modal 14" — a coupon form pop-up modal with a split
layout: left-side promotional image and right-side content area displaying a
discount heading, description, dashed-border coupon code, full-width CTA
button, and a dismiss link. Warm cream background (#fff4e4) with dark text.

- **Source slug:** `modal-14`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-14/
- **ColorLib page:** https://colorlib.com/wp/template/modal-14/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (`css/style.css` + `css/bootstrap.min.css`).

| Token               | Value                                  | Notes                                        |
| ------------------- | -------------------------------------- | -------------------------------------------- |
| Body font           | `"Roboto", sans-serif`                 | Loaded via Google Fonts, weight 300 for body  |
| Heading font        | `"Roboto", sans-serif`                 | Same family as body                          |
| Background color    | `#fff4e4`                              | Warm cream (`.bg-4` class on modal body)      |
| Page background     | white                                  | Light page behind the launch button          |
| Heading text (h3)   | `#000`                                 | Black, 22px                                  |
| Paragraph text      | `#777`                                 | Medium gray, 14px                            |
| Cancel link color   | `gray`                                 | Dismiss link text                            |
| Close button color  | `#000`                                 | Black X icon (top-right)                     |
| Primary button      | `#007bff`                              | Bootstrap 4 default primary blue             |
| Button border-radius| `4px`                                  | Rounded-rect Bootstrap buttons               |
| Button padding      | `py-3 px-4` (via Bootstrap classes)    | Generous vertical, moderate horizontal       |
| Modal border-radius | `7px`                                  | Rounded corners on modal container           |
| Modal shadow        | `0 10px 50px -10px rgba(0,0,0,0.9)`   | Heavy drop shadow                            |
| Coupon border       | `2px dashed #6c757d`                   | Dashed gray border on coupon code box        |
| Coupon background   | `#fff`                                 | White background inside coupon box           |
| Coupon text color   | `#000`                                 | Black monospace coupon code                  |
| Promo image width   | `200px` (flex: 0 0 200px)              | Fixed-width left-side image                  |
| Body font weight    | `300`                                  | Light weight for paragraph text              |

## Visual design (from screenshot + CSS)

The template shows a centered layout on a white page with "Modal #4" as a
heading and a gray "Launch modal" button. Clicking the button opens a modal
dialog with:

1. **Warm cream background** (#fff4e4) — solid color, no image overlay.
2. **Split layout**: left side is a fixed-width (200px) promotional product
   image with `background-size: cover`; right side is the content area.
3. **Content area** (right side):
   - Heading: "60% off coupon" — h3, black, 22px, centered.
   - Description: gray paragraph (#777), 14px, centered.
   - Coupon code box: white background, dashed gray border (2px dashed #6c757d),
     centered text "SUMMER60" in black, padded 10px.
   - CTA button: "Use a coupon" — full-width primary blue (#007bff), 4px radius,
     generous vertical padding (py-3).
   - Dismiss link: "Sorry, I don't want this." — gray, 14px, centered below button.
4. **Close button**: black X icon in the top-right corner of the modal.
5. **Overall aesthetic**: warm, inviting coupon/discount modal with product
   image and clear call-to-action.

## Gherkin requirements

```gherkin
Feature: DealBounce — coupon form pop-up modal

  Background:
    Given the page loads at the root URL
    And the modal is hidden by default

  Scenario: Launch button opens modal
    Given the user sees the "Launch modal" button
    When the user clicks the "Launch modal" button
    Then the modal dialog appears centered on screen
    And the modal has a warm cream (#fff4e4) background
    And the modal shows a left-side image and right-side content

  Scenario: Modal displays coupon content
    Given the modal is open
    Then the heading reads "60% off coupon"
    And a gray description paragraph is visible
    And a coupon code box displays "SUMMER60" with dashed border
    And a "Use a coupon" primary button is visible
    And a "Sorry, I don't want this." dismiss link is visible

  Scenario: Close modal via close button
    Given the modal is open
    When the user clicks the close (X) button
    Then the modal closes

  Scenario: Close modal via dismiss link
    Given the modal is open
    When the user clicks "Sorry, I don't want this."
    Then the modal closes

  Scenario: Use coupon button
    Given the modal is open
    When the user clicks the "Use a coupon" button
    Then the action fires (href="#")

  Scenario: Keyboard accessibility
    Given the modal is open
    When the user presses Escape
    Then the modal closes
    And focus returns to the launch button

  Scenario: Modal is responsive
    Given the modal is open on a mobile viewport
    Then the split layout stacks vertically or adjusts
    And the coupon code box remains readable
    And the CTA button remains full-width

  Scenario: Visual design match
    Given the modal is open
    Then the background is warm cream (#fff4e4)
    And headings are black (#000) at 22px
    And paragraphs are gray (#777) at 14px
    And the coupon box has white background with 2px dashed gray border
    And the modal has 7px border-radius and heavy drop shadow
    And the CTA button is primary blue (#007bff) with 4px radius
```

## Component breakdown

1. **PageContent** — static background page with heading "Modal #4" + gray launch button
2. **ModalDialog** — centered modal with warm cream background, no image overlay
3. **ModalClose** — close button (top-right, black X)
4. **PromoImage** — left-side fixed-width (200px) product image with background-size: cover
5. **CouponContent** — right-side content: heading, description, coupon code box, CTA button, dismiss link

## Verification checklist

- [ ] Modal opens on launch button click
- [ ] Modal closes on close button click
- [ ] Modal closes on "Sorry, I don't want this." dismiss link click
- [ ] Modal closes on Escape key
- [ ] Coupon code box has dashed gray border and white background
- [ ] Warm cream (#fff4e4) background renders correctly
- [ ] Left-side image is 200px wide with cover sizing
- [ ] Headings are black (#000) at 22px, paragraphs gray (#777) at 14px
- [ ] CTA button is full-width primary blue with 4px radius
- [ ] Modal has 7px border-radius and heavy drop shadow
- [ ] Responsive: split layout adapts on mobile
- [ ] Focus trap within modal when open
- [ ] Footer links to https://www.componentdock.com/

## Replication notes

- **Preview URL:** `https://preview.colorlib.com/theme/bootstrap/modal-14/`
  (fetched successfully on 2026-09-06). The non-`/bootstrap/` URL returned 404.
- **Screenshot:** ColorLib page at
  `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-14.jpg`.
- **Assets:** Use a placeholder image via `https://picsum.photos/seed/dealbounce-1/200/300`
  for the promotional product image. Do NOT copy the original image.
- **jQuery/Bootstrap JS:** Replace with React state (useState for open/close)
  and Tailwind CSS. No jQuery dependency.
- **Key difference from other modal templates:** Split layout with product image
  on the left, coupon code display with dashed border, and warm cream background
  instead of dark overlay or solid white.
