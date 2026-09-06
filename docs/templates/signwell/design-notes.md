# Signwell — Design Notes

## Structure (section order)

1. **Page body** — centered launch button ("Launch modal") on full-viewport page
2. **Modal overlay** — semi-transparent dark backdrop
3. **Modal dialog** — centered, max-width ~800px (modal-lg), 7px border-radius
4. **Modal body (split-screen)**
   - Left column (50%): background image, cover, centered
   - Right column (50%): white background, padding
     - Heading
     - Paragraph description
     - Form (email, name, password)
     - Submit button (full-width)
     - Privacy policy note
5. **Footer** — Component Dock link (replacing original attribution)

## Fidelity notes

### Layout

- Original uses Bootstrap grid (`d-flex`, `col-*`, `modal-lg modal-dialog-centered`)
- React version: Tailwind flex with `flex-1` halves, `min-h-screen` overlay
- Split-screen: `flex: 0 0 50%` for image, auto for content → use `w-1/2` each

### Typography

- Font: Roboto (weights 300, 400) — load via Google Fonts link in index.html
- Heading: 22px, color #000
- Paragraph: 14px, color #777, font-weight 300
- Form labels: default Bootstrap sizing

### Colors

- Background: white (#fff)
- Text heading: black (#000)
- Text body: #777
- Text paragraph (outside modal): #b3b3b3
- Form border: #ccc
- Close button: #000
- Button primary: Bootstrap blue (#007bff or Tailwind blue-600)
- Privacy note: #999, link bold #555

### Modal chrome

- Border-radius: 7px on outer modal
- Button radius: 4px
- Shadow: `0 10px 50px -10px rgba(0,0,0,0.9)` — very prominent
- No box-shadow on form inputs (explicitly overridden)
- Overlay: Bootstrap default (dark semi-transparent)

### Behavior

- Launch button centered on page
- Modal opens on click, closes on backdrop click or X button
- Responsive: stacks vertically below Bootstrap md breakpoint (~768px)
- Form: standard HTML validation (no external deps)

### Placeholder assets

- Image: use `https://picsum.photos/seed/signwell/600/800` (deterministic)
- No icon fonts needed (use lucide-react for X/close icon)
- No jQuery dependency (pure React event handling)

## Component breakdown

- `App.tsx` — renders launch button + modal state
- `components/Modal.tsx` — the modal overlay + dialog
- `components/ModalForm.tsx` — right side form (heading, fields, button, note)
- `components/CloseButton.tsx` — X button in top-right corner
