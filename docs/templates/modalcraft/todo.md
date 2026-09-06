# ModalCraft — Design Notes & Implementation Outline

## Source

- ColorLib slug: `modal-11`
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-11/
- Category: Bootstrap Modal Templates
- Description: Minimal text modal with title + body + close button

## Section Structure (order)

1. **PageLayout** — Full-viewport centered container (100vh)
2. **PageContent** — Title heading ("Modal #1") + launch button
3. **ModalDialog** — Overlay with backdrop + centered modal box
4. **ModalHeader** — Title + close button (X)
5. **ModalBody** — Text content paragraphs

## Design Notes

- Extremely minimal: one page, one interactive element (the modal)
- No navbar, no footer sections beyond Component Dock attribution
- Vertical + horizontal centering of page content (100vh)
- Modal uses custom scale-in animation (scale(0)→scale(1), 0.2s)
- Sharp corners everywhere (no border-radius)
- Subtle shadows: button has blue offset shadow, modal has deep soft shadow
- Close button uses custom icon (use Lucide X icon)
- Paragraphs in light gray (#b3b3b3), font-weight 300

## Component Outline

### `App.tsx`
- Renders PageContent + ModalDialog
- Manages modal open/close state

### `components/PageContent.tsx`
- Full viewport centered container
- Title heading
- "Launch modal" button with onClick handler

### `components/ModalDialog.tsx`
- Overlay/backdrop div
- Modal container with header + body
- Props: isOpen, onClose, title, children
- Accessibility: role="dialog", aria-labelledby, aria-hidden
- Focus trap on open
- Close on backdrop click, Escape key

## Implementation Priority

1. PageContent (static layout, simplest)
2. ModalDialog (overlay + animation + state)
3. Accessibility (focus trap, aria)
4. Responsive refinements
5. Tests (100% coverage)

## Key Differences from Original

- React component-based (not Bootstrap JS)
- No jQuery dependency
- Uses React state + portal for modal overlay
- Lucide icons instead of icomoon
- Tailwind CSS instead of custom CSS
