# ModalDrift — Design Notes & Implementation Outline

## Source

- ColorLib slug: `modal-16`
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-16/
- Category: Bootstrap Modal Templates
- Description: Split-screen registration pop-up modal with image + form

## Section Structure (order)

1. **PageLayout** — Full-viewport centered container (100vh)
2. **PageContent** — Title heading ("Modal #6") + launch button
3. **ModalDialog** — Overlay/backdrop + centered modal box
4. **ModalSplitLayout** — Flex container: image left (50%) + form right (50%)
5. **ModalImage** — Left half with background image (placeholder)
6. **ModalForm** — Right half with heading, description, form fields, submit

## Design Notes

- Split-screen modal is the defining feature — image left, form right
- Modal has rounded corners (7px border-radius), deep box-shadow
- Modal body has light gray (#efefef) background (NOT white)
- Launch button uses secondary (gray) Bootstrap style, px-4 py-3
- Sign-up button uses primary (blue) Bootstrap style, full-width, border-radius 4px
- Form inputs have transparent borders with subtle box-shadow (0 1px 3px 0 rgba(0,0,0,0.2))
- Country dropdown uses custom-select styling with same shadow treatment
- Date of birth split into three columns (MM, DD, YYYY) with responsive grid
- Privacy policy note in small text (#999) with dark link (#555, font-weight 900)
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
- Title heading ("Modal #6")
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
- Right: form content area with #efefef background

### `components/ModalForm.tsx`
- Heading: "Registration form"
- Description paragraph
- Form with: country dropdown, full name, email, date of birth (3 columns)
- "Sign up" submit button (primary, full-width)
- Privacy policy note with link

### `components/CountrySelect.tsx`
- Custom styled select dropdown
- Pre-populated with country list
- Matches modal styling (transparent border, shadow)

### `components/DateOfBirthInputs.tsx`
- Three-column grid: MM, DD, YYYY
- Each column is a text input with placeholder
- Responsive: stacks on mobile

## Implementation Priority

1. PageContent (static layout, simplest)
2. ModalDialog (overlay + animation + accessibility)
3. ModalSplitLayout (flex 50/50)
4. CountrySelect (dropdown component)
5. DateOfBirthInputs (three-column input group)
6. ModalForm (inputs + validation + submit)
7. Integration + responsive stacking
8. Tests (100% coverage)
