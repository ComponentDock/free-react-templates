# Signgate — Design Notes & Implementation Outline

## Source

- ColorLib slug: `modal-15`
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-15/
- Category: Bootstrap Modal Templates
- Description: Sign-up form pop-up with promotional image, three-field form (email, name, password), full-width CTA, and privacy policy note

## Section Structure (order)

1. **PageLayout** — Full-viewport centered container (100vh)
2. **PageContent** — Title heading ("Modal #5") + launch button
3. **ModalDialog** — Overlay/backdrop + centered modal box with white bg
4. **ModalHeader** — Close button (X) positioned top-right
5. **ModalBody** — Flex layout: promo image (left, 50%) + form content (right, 50%)

## Design Notes

- Minimal page: one heading + launch button, same pattern as other Modal templates
- Modal is the main visual element — white (#fff) background with deep shadow
- Two-column flex layout inside modal: promo image (50%) + form column (50%)
- Form has three labeled fields: Email Address, First Name, Password
- Full-width primary CTA button ("Sign up") below the form fields
- Privacy policy note at the bottom: "By signing up you will agree to our Privacy Policy"
- Modal has 7px border-radius (slightly rounded)
- Deep box-shadow (0 10px 50px -10px rgba(0,0,0,0.9)) for prominent modal appearance
- Font: Roboto family, body text in light gray (#b3b3b3), modal text in darker (#777)
- Heading in modal is black (#000, 22px)
- Button is Bootstrap primary blue with 4px radius
- Form controls have 1px solid #ccc border, no focus box-shadow
- Privacy link is dark (#555) with font-weight 900

## Component Outline

### `App.tsx`

- Renders PageContent + ModalDialog
- Manages modal open/close state

### `components/PageContent.tsx`

- Full viewport centered container
- Title heading ("Modal #5")
- "Launch modal" button with onClick handler (secondary style, px-4 py-3)

### `components/ModalDialog.tsx`

- Overlay/backdrop div
- Modal container with white background
- Props: isOpen, onClose
- Accessibility: role="dialog", aria-labelledby, aria-hidden
- Focus trap on open
- Close on backdrop click, Escape key

### `components/ModalBody.tsx`

- Close button (X) top-right
- Flex layout container
- Left column: promotional image (50% width, background-image)
- Right column:
  - Title: "Sign up to access all the resourcess"
  - Description paragraph
  - Form with Email Address, First Name, Password fields
  - Full-width "Sign up" primary button (btn-primary btn-block)
  - Privacy policy note with bold link

## Implementation Priority

1. PageContent (static layout, simplest)
2. ModalDialog (overlay + container, open/close state)
3. ModalBody (two-column layout, form fields, button)
4. Close button interactions (X, backdrop, Escape)
5. Accessibility (focus trap, aria, Escape key)
6. Responsive layout (stack on mobile)
7. Tests (Vitest + Testing Library)

## Fidelity Checklist

- [ ] White (#fff) modal background matches original
- [ ] Promo image is 50% width on the left
- [ ] Form has Email Address, First Name, Password fields with labels
- [ ] "Sign up" button is full-width, primary blue
- [ ] Privacy note is small gray (#999) text
- [ ] Privacy link is dark (#555) and bold
- [ ] Modal has 7px border-radius + deep shadow
- [ ] Font is Roboto family
- [ ] Heading color is #000, paragraph is #777
- [ ] Form controls have 1px solid #ccc border
- [ ] Layout stacks vertically on mobile screens
