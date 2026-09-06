# Modalify — Design Notes & Implementation Outline

## Source

- ColorLib slug: `modal-13`
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-13/
- Category: Bootstrap Modal Templates
- Description: Subscription/offer modal popup with pink background, email form, dual action buttons

## Section Structure (order)

1. **PageLayout** — Full-viewport centered container (100vh)
2. **PageContent** — Title heading ("Modal #3") + launch button
3. **ModalDialog** — Overlay/backdrop + centered modal box with pink bg
4. **ModalHeader** — Close button (X) positioned top-right
5. **ModalBody** — Logo, title, description, email form, buttons, cancel text

## Design Notes

- Minimal page: one heading + launch button, same pattern as other Modal templates
- Modal is the main visual element — pink (#f9eaf2) background distinguishes this variant
- Instagram SVG logo used as decorative element (centered, 70px wide)
- Two-column button layout: "No, thanks" (secondary/left) + "Subscribe" (primary/right)
- Email input is full-width with subtle shadow, no visible border
- Close button (X) is positioned in the top-right of the modal body
- Cancel/disclaimer text at the bottom in small, semi-transparent white
- Modal has 7px border-radius (slightly rounded, unlike sharper modal-11)
- Deep box-shadow (0 10px 50px -10px rgba(0,0,0,0.9)) for prominent modal appearance
- Font: Roboto family, body text in light gray (#b3b3b3), modal text in darker (#777)

## Component Outline

### `App.tsx`
- Renders PageContent + ModalDialog
- Manages modal open/close state

### `components/PageContent.tsx`
- Full viewport centered container
- Title heading ("Modal #3")
- "Launch modal" button with onClick handler

### `components/ModalDialog.tsx`
- Overlay/backdrop div
- Modal container with pink background
- Props: isOpen, onClose
- Accessibility: role="dialog", aria-labelledby, aria-hidden
- Focus trap on open
- Close on backdrop click, Escape key

### `components/ModalBody.tsx`
- Close button (X) top-right
- Instagram logo (SVG or Lucide icon as placeholder)
- Title: "Exclusives offer from Instagram"
- Description paragraph
- Email form: input + two buttons
- Cancel/disclaimer text

## Implementation Priority

1. PageContent (static layout, simplest)
2. ModalDialog (overlay + pink bg + animation + state)
3. ModalBody (logo, form, buttons)
4. Accessibility (focus trap, aria)
5. Responsive refinements
6. Tests (100% coverage)

## Key Differences from Original

- React component-based (not Bootstrap JS)
- No jQuery dependency
- Uses React state + portal for modal overlay
- Lucide icons instead of icomoon
- Tailwind CSS instead of custom CSS
- Instagram SVG logo replaced with Lucide icon or placeholder image
- Same pink color scheme (#f9eaf2) preserved
