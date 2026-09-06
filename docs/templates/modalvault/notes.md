# ModalVault — Notes

## Template Identity

- Name: ModalVault
- Folder: apps/modalvault
- Package: @free-react-templates/modalvault
- Recreation of: ColorLib Modal 20 (password-protected modal)
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-20/

## Section Order (from preview DOM)

1. **Launch section** — full-viewport centered container, heading + "Launch modal" button
2. **Password modal** — centered dialog with:
   - Close button (×) top-right
   - Circular lock icon (80×80, brand blue tint bg)
   - Label: "This link is password protected"
   - Description paragraph (gray #777)
   - Password input (bottom-border-only style)
   - Submit button (primary, centered)
3. **Footer** — Component Dock link

## Design Tokens

- Font: Roboto (300, 400) — loaded via Google Fonts
- Brand blue: #3e64ff (icon, icon bg tint rgba(62,100,255,0.05))
- Modal bg: #fff (white)
- Modal border-radius: 7px
- Modal shadow: 0 10px 50px -10px rgba(0,0,0,0.9)
- Body text: #b3b3b3, font-weight 300
- Heading: #000
- Description: #777, font-size 14px
- Close icon: #ccc, hover #000
- Button border-radius: 4px
- Button padding: 10px 30px
- Input: no border, only bottom border 1px solid #ccc; focus → #000
- Icon container: 80×80px circle, bg rgba(62,100,255,0.05)

## Fidelity Notes

- The ColorLib title says "Modal #10" internally — we rename to "ModalVault" for the template name
- The preview uses Bootstrap 4 JS for modal toggling; we implement with React state
- The icomoon icon font (lock2, close2) is replaced with lucide-react icons
- The modal backdrop overlay is implemented via React Portal + backdrop div
- All form elements use bottom-border-only styling (no standard input borders)
- The close button is absolutely positioned top-right of the modal body

## Key Decisions

- Use lucide-react for Lock and X (close) icons
- Modal open/close state managed via React useState
- Use React Portal for modal overlay (render into document.body)
- Form submission is a no-op (demo only) — preventDefault on submit
- Footer links to https://www.componentdock.com/ as required
