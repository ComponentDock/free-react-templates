# PopSlide — Design Notes & Tasks

## Source
- **ColorLib template:** Modal V10
- **Source URL:** https://colorlib.com/wp/template/modal-10/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-10/
- **Recreation name:** PopSlide
- **App folder:** `apps/popslide`

## Structure order (section-by-section)

1. **Full-page section** — centered container with heading + launch button
2. **Modal overlay** — semi-transparent backdrop
3. **Modal dialog** — centered card with:
   - Header (gradient overlay over background image, close button)
   - Body (icon, heading, subheading, subscribe form)

## Design tokens (from preview CSS)

| Token | Value |
|-------|-------|
| Primary brand color | `#3e64ff` |
| Gradient start (magenta) | `#dd00ff` |
| Gradient end (blue) | `#3e65ff` |
| Gradient opacity | 0.3 |
| Font family | Poppins (Google Fonts) |
| Button radius | 40px (pill) |
| Input radius | 5px |
| Modal shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` |
| Modal max-width | 500px |
| Header height | 230px |
| Body overlap | -180px top margin |
| Icon circle size | 200x200px |
| Icon circle bg | `rgba(255,255,255,0.2)` |
| Input height | 52px |
| Input bg | `rgba(0,0,0,0.05)` |
| Submit button width | 130px |
| Body text color | `#212529` |
| Page background | `#ffffff` |

## Component breakdown

### App.tsx
- Renders full-page section + Modal component

### components/PageSection.tsx
- Full-viewport centered section
- Heading: "Newsletter Modal" (or similar)
- Launch button: pill-shaped, primary blue

### components/NewsletterModal.tsx
- Modal overlay (backdrop)
- Modal dialog (max-width 500px, shadow)
- ModalHeader: gradient background, close button
- ModalBody: icon circle, heading, subheading, form

### components/SubscribeForm.tsx
- Horizontal form: email input + submit button
- Email input: flex-grow, subtle background
- Submit: fixed 130px, primary blue, white text

## Fidelity notes

1. **Gradient header** — Use Tailwind with CSS gradient or inline style.
   The gradient is `linear-gradient(45deg, #dd00ff, #3e65ff)` at 30%
   opacity overlaying a background image (use picsum.photos placeholder).

2. **Negative margin body** — The body div has `margin-top: -180px`
   to overlap the header. This creates the layered card effect.

3. **Circular icon** — 200x200px circle with translucent white bg.
   Use an envelope/mail icon from lucide-react.

4. **Pill buttons** — `border-radius: 40px` on all buttons.

5. **Form layout** — Flex row: input (flex-grow) + submit (130px fixed).
   Input has no visible border, subtle bg, 52px height.

6. **Modal behavior** — Opens on button click, closes on:
   - Close button click
   - Overlay (backdrop) click
   - Escape key press

7. **No images needed** — Only the envelope icon (use lucide-react
   Mail icon) and gradient colors. Background image can be a
   placeholder or omitted with gradient-only header.

## Tasks

- [ ] Create `apps/popslide/` from template scaffold
- [ ] Configure package.json, vite.config.ts, CNAME
- [ ] Add Poppins Google Font to index.html
- [ ] Build PageSection component with launch button
- [ ] Build NewsletterModal with overlay + dialog
- [ ] Implement gradient header with close button
-  [ ] Implement circular icon container
- [ ] Build SubscribeForm with email input + submit
- [ ] Add modal open/close behavior (click, escape, backdrop)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: typecheck, lint, tests, build
- [ ] Commit and push
