# ModalPulse — Implementation Todo & Design Notes

## Source mapping

- **ColorLib source:** Modal 18
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-18/
- **New name:** modal-pulse
- **Category:** Bootstrap Modal (offer-with-CTA)

## Section structure (from preview DOM)

1. **Page layout** — full-height centered container with heading + launch button
2. **Modal dialog** — Bootstrap-style centered modal with:
   - Illustration hero image (SVG) with light cyan (#b2fcff) background
   - Text content area with h3 heading + paragraph
   - Dual-action buttons: dismiss link ("No thanks") + primary CTA ("Get the app")

## Design notes

### Layout
- The page behind the modal is minimal: a centered "Modal #8" heading and a single "Launch modal" button
- The modal itself is a centered overlay dialog (Bootstrap `.modal-dialog-centered`)
- Modal width: medium (Bootstrap `.modal-md`)

### Visual fidelity notes
- **Modal shape:** 7px border-radius on both the dialog and inner content, with a heavy drop shadow (`0 10px 50px -10px rgba(0,0,0,0.9)`)
- **Illustration area:** Full-width at top of modal body, light cyan background (#b2fcff), contains an SVG illustration
- **Typography:** Roboto for body/headings (weights 300 for body, 900 for h3), Poppins for modal container
- **Colors:** White modal background, #000 headings, #777 paragraph text, gray dismiss link
- **Buttons:** 4px border-radius, no border, primary color for CTA
- **Spacing:** No horizontal padding on modal-body outer, 1.5rem padding on `.content-text` inner

### What differs from ColorLib original
- Original uses Bootstrap 4 jQuery modal → we use React state + Tailwind
- Original loads jQuery + Popper.js → we use pure React
- Original uses inline SVG illustration → we use a placeholder or Lucide icon
- "No references to ColorLib" in app code — provenance only in spec

## Implementation tasks

- [ ] Create `apps/modal-pulse/` workspace (copy simplest modal app, rename package)
- [ ] Build `src/App.tsx` — page layout with centered heading + "Launch modal" button
- [ ] Build `src/components/ModalDialog.tsx` — the CTA modal with illustration + text + buttons
- [ ] Implement modal open/close state (useState + useEffect for Escape key)
- [ ] Implement backdrop overlay with click-to-dismiss
- [ ] Implement focus trap within modal (Tab cycling)
- [ ] Style with Tailwind tokens: border-radius-7, shadow-heavy, bg-white
- [ ] Use Roboto + Poppins fonts via `<link>` in index.html
- [ ] Add aria-labelledby, role="dialog", aria-hidden attributes
- [ ] Footer with https://www.componentdock.com/ link
- [ ] Write Vitest tests: render, open, close (3 methods), content, accessibility, focus trap
- [ ] Verify 100% coverage
- [ ] Run `scripts/verify-app.sh modal-pulse`
- [ ] Commit + push to feat branch, open PR, merge

## CSS tokens to replicate in Tailwind @theme

```
@theme {
  --color-modal-bg: #fff;
  --color-modal-heading: #000;
  --color-modal-text: #777;
  --color-modal-illustration-bg: #b2fcff;
  --color-modal-dismiss: gray;
  --color-modal-radius: 7px;
  --color-btn-radius: 4px;
}
```

## Component structure

```
apps/modal-pulse/
  src/
    main.tsx              — entry (excluded from coverage)
    App.tsx               — page layout: heading + launch button + ModalDialog
    index.css             — Tailwind entry + theme tokens
    test/setup.ts         — jest-dom import
    components/
      ModalDialog.tsx     — modal overlay + content + focus trap
      ModalDialog.test.tsx
  vite.config.ts
  vitest.config.ts
  package.json
  public/CNAME            — modal-pulse.free.componentdock.com
```
