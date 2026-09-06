# ModalBreeze — Design Notes

## Source

- ColorLib: Modal V18 (slug: `modal-18`)
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-18/
- Category: Modal / CTA popup

## Structure order

1. **Page wrapper** — full-height centered content area with `align-items-center`
2. **Launch button** — centered "Launch modal" button (`btn-secondary`, Bootstrap)
3. **Modal overlay** — Bootstrap-style fade-in modal with backdrop
4. **Modal dialog** — `modal-md`, `modal-dialog-centered`
5. **Modal content** — white card with 7px border-radius and heavy drop shadow
6. **Illustration area** — SVG/image at top with #b2fcff (light cyan) background
7. **Text content area** — padded (p-4): heading (Roboto 900, 22px), paragraph (#777, 300 weight)
8. **Action buttons** — right-aligned: "No thanks" text link + "Get the app" solid primary button
9. **Footer** — "Made with Component Dock" attribution link

## Section-by-section fidelity notes

### Page wrapper
- Original uses Bootstrap grid (`container > row > col-12 text-center`)
- React: simple flexbox centering with min-h-screen

### Launch button
- `btn btn-secondary px-4 py-3` in Bootstrap
- React: Tailwind `bg-secondary text-white px-8 py-6 rounded`

### Modal
- Bootstrap modal with `fade` class for animation
- React: use state-driven show/hide with CSS transition (opacity + translate)
- `modal-dialog-centered` → flexbox center on viewport
- `modal-md` → max-width ~500px

### Illustration
- SVG (`undraw_updated_rr85.svg`) on #b2fcff background
- React: placeholder via `https://picsum.photos/seed/modalbreeze-1/500/250` or similar
- Or use a lucide-react icon group with the cyan background

### Text content
- `content-text p-4` wrapper
- Heading: h3, weight 900, font-size 22px, black
- Paragraph: Roboto, 14px, #777, weight 300
- Copy paraphrase (not verbatim): "Introducing Work from Anywhere" + descriptive text

### Action buttons
- Right-aligned via `ml-auto` (Bootstrap) or `ml-auto` Tailwind flex
- "No thanks": `btn btn-link text-gray-500 font-normal`
- "Get the app": `btn btn-primary px-4` solid fill, 4px border-radius
- Dismiss: `data-dismiss="modal"` → React onClick close handler

### Footer
- Must include: `<a href="https://www.componentdock.com/">Component Dock</a>`
- "Made with Component Dock" or similar branded text

## Design tokens summary (for Tailwind @theme)

```css
@theme {
  --color-brand: #b2fcff;          /* illustration background */
  --color-heading: #000000;        /* modal heading */
  --color-body-text: #777777;      /* modal paragraph */
  --color-paragraph-subtle: #b3b3b3; /* page-level paragraph */
  --font-heading: "Roboto", sans-serif;
  --font-modal: "Poppins", sans-serif;
  --radius-modal: 7px;
  --radius-button: 4px;
  --shadow-modal: 0 10px 50px -10px rgba(0, 0, 0, 0.9);
}
```

## Implementation notes

- Use React state (`useState<boolean>`) to toggle modal visibility
- Portal the modal to `document.body` to avoid z-index stacking issues
- Implement backdrop click and Escape key dismissal
- Add `role="dialog"`, `aria-labelledby`, `aria-modal="true"` for accessibility
- Use `@keyframes` or Tailwind transition utilities for fade-in animation
- No external CSS framework needed — pure Tailwind + custom theme tokens
