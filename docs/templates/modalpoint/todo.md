# ModalPoint — Implementation Todo

## Template Info
- **Name:** ModalPoint
- **Source:** ColorLib Modal 16
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-16/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section Order (from preview)

1. **LaunchButton** — Centered page with heading + "Launch Modal" button
2. **RegistrationModal** — Full-screen modal overlay with split layout
   - Left panel: background image (50% width)
   - Right panel: form with Country, DOB, Submit, Privacy note
3. **Footer** — Component Dock attribution link

## Component Breakdown

### src/App.tsx
- Renders LaunchButton + RegistrationModal
- State: `isModalOpen` boolean

### src/components/LaunchButton.tsx
- Full viewport height, centered content
- Heading: "Registration Modal"
- Button: gray secondary style, opens modal on click

### src/components/RegistrationModal.tsx
- Bootstrap-style modal overlay (backdrop + centered dialog)
- Split layout: flex row
  - Left: `div` with background image, 50% flex-basis
  - Right: form panel with fields
- Close button (X icon) in top-right
- Escape key closes modal
- Backdrop click closes modal

### src/components/RegistrationForm.tsx
- Country select dropdown (populated list)
- Date of Birth: three text inputs (MM, DD, YYYY) in a row
- Submit button (full-width, primary blue)
- Privacy Policy note with link

### src/components/Footer.tsx
- Simple footer with Component Dock link

## Design Notes

- **Modal border-radius:** 7px on the modal container
- **Modal shadow:** `0 10px 50px -10px rgba(0,0,0,0.9)` — very deep
- **Modal background:** `#efefef` (light gray)
- **Form inputs:** No visible border, only subtle box-shadow (`0 1px 3px 0 rgba(0,0,0,0.2)`)
- **Button primary:** Blue (#007bff), border-radius 4px, full-width
- **Button secondary:** Gray (#6c757d), for the launch trigger
- **Typography:** Roboto font family, 300 weight for body
- **Image:** Use `https://picsum.photos/seed/modalpoint/600/800` for the promo image
- **Privacy note:** Small text (#999), link color #555, font-weight 900

## Fidelity Notes

- Match the split-screen 50/50 layout exactly
- The modal is `modal-lg` sized (large Bootstrap modal)
- The form fields use Bootstrap-style form-group spacing
- The DOB row uses three equal-width columns (col-md-4 each)
- The country dropdown is a full-width select element
- The submit button is `btn-block` (full width of its container)
- The close button uses an X icon (use Lucide `X` icon)
- The background behind the modal is the full viewport with centered content
- Match the deep shadow and rounded corners for the modal appearance
