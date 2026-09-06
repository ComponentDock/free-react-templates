# ModalGate — Implementation Notes

## Source

- **ColorLib template:** Modal 12
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-12/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-12.jpg

## Section order (from preview DOM)

1. **Page container** — full viewport (100vh), centered content
   - Heading: "Modal #2"
   - Trigger button: "Launch modal" (Bootstrap btn-primary style)
2. **Modal dialog** — Bootstrap-style centered modal
   - **Modal header bar**
     - Logo icon (left)
     - "Exclusive Offer" heading (center)
     - Close button / X (right)
     - Thin white bottom border separator
   - **Modal body**
     - Background image with dark overlay (rgba(0,0,0,0.5))
     - "Get a free Ebook" heading
     - Descriptive paragraph
     - Email subscription form (inline: input + subscribe button)
     - "Maybe later" dismiss link

## Design token mapping (ColorLib → Tailwind)

| ColorLib CSS                                     | Tailwind equivalent                          |
| ------------------------------------------------ | -------------------------------------------- |
| `font-family: "Roboto"`                          | `font-sans` (configure Roboto in theme)      |
| `color: #b3b3b3` (paragraphs)                    | `text-neutral-400`                           |
| `color: #fff` (modal text)                       | `text-white`                                 |
| `border-radius: 7px` (modal)                     | `rounded-[7px]` or custom token              |
| `border-radius: 4px` (buttons)                   | `rounded`                                    |
| `background-color: rgba(0,0,0,0.5)` (overlay)    | `bg-black/50`                                |
| `border-bottom: 1px solid rgba(255,255,255,0.3)` | `border-b border-white/30`                   |
| `color: rgba(255,255,255,0.5)` (cancel link)     | `text-white/50`                              |
| `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)`  | `shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]` |

## Fidelity notes

- The original uses Bootstrap modal JS for open/close. In React, use state-driven modal with AnimatePresence or similar.
- Background image: use `picsum.photos/seed/modal-gate-1/800/600` as placeholder.
- Logo: use a simple SVG icon or lucide-react icon (not the Google Drive icon from original).
- The "Launch modal" button is Bootstrap btn-primary (blue). Map to Tailwind `bg-blue-600 hover:bg-blue-700 text-white`.
- Email form is inline horizontal on desktop, stacks on mobile.
- "Maybe later" link is small, bold, semi-transparent white, becomes full white on hover.

## Component breakdown

- `src/App.tsx` — Page container with centered content + modal state
- `src/components/ModalTrigger.tsx` — Centered heading + launch button
- `src/components/ModalDialog.tsx` — The modal overlay + content
- `src/components/ModalHeader.tsx` — Logo, title, close button row
- `src/components/SubscriptionForm.tsx` — Email input + subscribe button
