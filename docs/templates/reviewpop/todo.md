# Reviewpop — Design Notes & Implementation Outline

## Source

- ColorLib slug: `modal-19`
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-19/
- Category: Bootstrap Modal Templates
- Description: Split-screen product review modal with image, star rating, social actions

## Section Structure (order)

1. **PageLayout** — Full-viewport centered container (100vh)
2. **PageContent** — Title heading ("Modal #9") + launch button
3. **ModalDialog** — Overlay/backdrop + centered large modal with light gray bg
4. **ModalLayout** — Two-column flex container (50/50 split)
5. **ProductImage** — Left column: background image with price badge overlay
6. **ProductDetails** — Right column: share button, title, stars, description, social row

## Design Notes

- Minimal page: one heading + launch button, same pattern as other Modal templates
- Modal is large (modal-lg) with two-column split-screen layout — key differentiator
- Light gray (#efefef) background distinguishes this from white-background modals
- Left column: product image (background-size cover, 50% width) with price badge
  absolute-positioned top-left in white text
- Right column: centered content with generous padding (p-4 px-5)
- Share icon absolute-positioned top-right of content area
- Product title "Grand Prix 4000" with decorative underline (::after pseudo-element,
  70px centered line, #ccc color)
- 4/5 star rating using Bootstrap text-warning yellow stars
- Description paragraph in gray (#777, 14px)
- Social action row: 50% width, centered, flex with three items:
  - Heart icon (red #dc3545) + count 25
  - Chat icon (blue #007bff) + count 10
  - Add icon (blue #007bff) + count 55
- Modal has 7px border-radius, deep box-shadow
- Font: Roboto family, body text in light gray (#b3b3b3), modal text in darker (#777)
- Modal-level paragraphs are larger (18px, 1.5 line-height)
- No explicit CTA button — social engagement is the primary action

## Component Outline

### `App.tsx`

- Renders PageContent + ModalDialog
- Manages modal open/close state

### `components/PageContent.tsx`

- Full viewport centered container
- Title heading ("Modal #9")
- "Launch modal" button with onClick handler

### `components/ModalDialog.tsx`

- Overlay/backdrop div
- Modal container with light gray background
- Props: isOpen, onClose
- Accessibility: role="dialog", aria-labelledby, aria-hidden
- Focus trap on open
- Close on backdrop click, Escape key

### `components/ProductImage.tsx`

- Left column (50% width)
- Background image via CSS background-image
- Price badge ("$2000") absolute-positioned top-left
- White text on badge

### `components/ProductDetails.tsx`

- Right column (50% width) with centered content
- Share icon (absolute top-right)
- Title "Grand Prix 4000" with decorative underline
- Star rating component (4 filled, 1 empty)
- Description paragraph
- SocialActionRow component

### `components/StarRating.tsx`

- Renders 5 stars (filled/unfilled)
- Props: rating (number of filled stars)
- Filled stars: Bootstrap text-warning (yellow)
- Empty stars: default color

### `components/SocialActions.tsx`

- Flex row, 50% width, centered
- Three action items: like (heart, red), message (chat, blue), add (plus, blue)
- Each with icon + count
