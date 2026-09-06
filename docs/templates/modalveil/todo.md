# ModalVeil — Design Notes & Implementation Outline

## Source

- ColorLib slug: `modal-15`
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-15/
- Category: Bootstrap Modal Templates
- Description: Split-screen sign-up pop-up modal with image + form

## Section Structure (order)

1. **PageLayout** — Full-viewport centered container (100vh)
2. **PageContent** — Title heading ("Modal #5") + launch button
3. **ModalDialog** — Overlay/backdrop + centered modal box
4. **ModalSplitLayout** — Flex container: image left (50%) + form right (50%)
5. **ModalImage** — Left half with background image
6. **ModalForm** — Right half with heading, description, form fields, submit

## Design Notes

- Split-screen modal is the defining feature — image left, form right
- Modal has rounded corners (7px border-radius), deep box-shadow
- Launch button uses secondary (gray) Bootstrap style
- Sign-up button uses primary (blue) Bootstrap style, full-width
- Form inputs have thin gray borders (#ccc), no focus glow
- Privacy policy note in small text (#999) with dark link (#555)
- Paragraphs in light gray (#b3b3b3), font-weight 300
- Modal heading in black (#000), 22px
- Body font: Roboto, 300 weight
- Responsive: stacks vertically on mobile (< 768px)

## Component Outline

### `App.tsx`
- Renders PageContent + ModalDialog
- Manages modal open/close state

### `components/PageContent.tsx`
- Full viewport centered container (100vh)
- Title heading ("Modal #5")
- "Launch modal" button (secondary style) with onClick handler

### `components/ModalDialog.tsx`
- Overlay/backdrop div with fade animation
- Modal container (modal-lg, centered)
- Props: isOpen, onClose, children
- Accessibility: role="dialog", aria-labelledby, aria-hidden
- Focus trap on open
- Close on backdrop click, Escape key

### `components/ModalSplitLayout.tsx`
- Flex container with two halves (50/50)
- Left: background image placeholder (picsum.photos)
- Right: form content area

### `components/ModalForm.tsx`
- Heading: "Sign up to access all the resources"
- Description paragraph
- Form with: email, first name, password inputs
- "Sign up" submit button (primary, full-width)
- Privacy policy note with link

## Implementation Priority

1. PageContent (static layout, simplest)
2. ModalDialog (overlay + animation + accessibility)
3. ModalSplitLayout (flex 50/50)
4. ModalForm (inputs + validation)
5. Integration + responsive stacking
6. Tests (100% coverage)
