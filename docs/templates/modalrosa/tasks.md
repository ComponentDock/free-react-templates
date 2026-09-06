# ModalRosa — Design Notes & Task Outline

Source: ColorLib Modal 13 (https://colorlib.com/wp/template/modal-13/)
Preview: https://preview.colorlib.com/theme/bootstrap/modal-13/

## Structure (section order)

1. **Page Container** — full viewport (100vh), centered content, light background
   - Heading: "Modal #3"
   - Button: "Launch modal" (secondary style)
2. **Modal Dialog** — Bootstrap modal, centered, light pink background (#f9eaf2)
   - Close button (X) — top-right, black, icon-close2
   - Logo — Instagram SVG icon, centered, ~70px wide
   - Heading — "Exclusives offer from Instagram", black, 22px
   - Description paragraph — light gray (#777)
   - Email form:
     - Email input (full-width, transparent border, subtle shadow)
     - Two-column button row:
       - Left: "No, thanks" (secondary, dismisses modal)
       - Right: "Subscribe" (primary)
   - Cancel text — semi-transparent white, 13px bold

## Fidelity notes

- **No dark overlay** — this modal uses a solid pink background, not a background image with overlay
- **Two dismiss actions**: close button (X) AND "No, thanks" button both dismiss
- **Instagram branding** — SVG logo, heading references Instagram (keep the branding concept, use a social media icon from lucide-react)
- **Bootstrap layout** — modal-dialog-centered, modal-content with rounded-0, modal-body with bg-3 class
- **Button styles**: btn-secondary (outline-ish) for "No, thanks", btn-primary for "Subscribe"
- **Form control**: transparent border, box-shadow for elevation, no border on focus
- **Cancel text**: small italic text at very bottom, semi-transparent white on pink background

## Key design tokens to implement

```
--modal-bg: #f9eaf2
--text-primary: #000
--text-secondary: #777
--text-body: #b3b3b3
--btn-radius: 4px
--modal-radius: 7px
--modal-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)
--input-shadow: 0 2px 2px 0 rgba(0,0,0,0.1)
--cancel-color: rgba(255,255,255,0.5)
```

## Implementation tasks

- [ ] Create app folder `apps/modalrosa/` (copy simplest existing app, rename package)
- [ ] Set up `package.json` with `@free-react-templates/modalrosa`
- [ ] Create `public/CNAME` with `modalrosa.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://modalrosa.free.componentdock.com`
- [ ] Add Roboto font link in `index.html`
- [ ] Create `src/index.css` with Tailwind + theme tokens
- [ ] Create `src/App.tsx` — main layout with modal trigger
- [ ] Create `src/components/PageLayout.tsx` — full viewport centered content
- [ ] Create `src/components/ModalDialog.tsx` — the modal with all content
- [ ] Create `src/components/EmailForm.tsx` — email input + two buttons
- [ ] Create `src/components/CloseButton.tsx` — X icon button
- [ ] Create `src/components/Logo.tsx` — Instagram-style SVG icon (use lucide-react Instagram icon)
- [ ] Run `npm install` at repo root to register workspace
- [ ] Write tests for all components (100% coverage)
- [ ] Verify with `scripts/verify-app.sh modalrosa`
- [ ] Commit as `feat: add modalrosa (ColorLib Modal 13)`
- [ ] Update TEMPLATES.md: check off Modal 13
- [ ] PR + squash merge
