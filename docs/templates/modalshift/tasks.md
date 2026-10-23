# ModalShift — Implementation Notes

## Source

- **ColorLib:** Modal V17 (modal-17)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-17/
- **Category:** Bootstrap Modal Templates

## Structure (section order)

1. **Page Container** — full-viewport height, vertically + horizontally centered
   - Heading: "Login Modal" (or "Modal #7" per original)
   - Launch button: gray secondary, px-4 py-3

2. **Modal Overlay** — Bootstrap modal with fade animation
   - Backdrop: semi-transparent dark
   - Focus trap for accessibility

3. **Modal Content** — centered dialog (modal-md)
   - Top border: 4px solid #ed5107 (orange accent)
   - Background: #efefef (light gray)
   - Border-radius: 0px (sharp corners)
   - Box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)

4. **Modal Body** — single-column form layout
   - "Log In" heading (22px, #000)
   - Description paragraph (14px, #777)
   - Login form:
     - Username/Email input (shadow-styled, no border)
     - Password input (same style)
     - "Login" button (Bootstrap primary #007bff, px-5)
     - "Forgot password" link (gray text, bold dark hover #555)
   - "If you don't have account yet Sign up here" note (#999, bold #555 link)

5. **Footer** — links to Component Dock

## Design Fidelity Notes

- **No split-screen:** Unlike Modal 16 (modalpoint), this is a single-column form — no image panel
- **Orange accent:** The 4px top border (#ed5107) is the key differentiator from other modals
- **Sharp corners:** border-radius: 0px throughout (no rounding)
- **Input styling:** No visible border, just subtle box-shadow (0 1px 3px rgba(0,0,0,0.2))
- **Typography:** Roboto font, 300 weight for body, default for headings
- **Colors:** #efefef bg, #000 headings, #777 paragraphs, #999 notes, #555 links, #ed5107 accent, #007bff primary button

## Component Structure

```
src/
  App.tsx              — Page layout + modal state
  components/
    LaunchButton.tsx   — Centered heading + launch button
    LoginModal.tsx     — Modal dialog with form
    LoginForm.tsx      — Username/Email, Password, Login button, links
```

## Key Implementation Details

- Use React state for modal open/close
- Bootstrap modal classes for animation (fade)
- Focus trap: use useEffect to manage focus when modal opens
- Escape key: handle keydown event to close modal
- Backdrop click: handle onClick on modal overlay
- All form fields need htmlFor/id associations for accessibility
- Responsive: modal-md class handles sizing; add max-width for large screens
- Footer MUST link to https://www.componentdock.com/
