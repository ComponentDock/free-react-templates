# Piazza — Implementation Outline

## Tasks

1. **Scaffold app** — Copy simplest existing modal app (e.g. `template-modalrosa`), rename package to `@free-react-templates/piazza`, set CNAME to `piazza.free.componentdock.com`, update `homepage` in `package.json`.

2. **Build LaunchSection component** — Full-viewport centered layout with heading "Modal #9" and a "Launch modal" button. Use `min-h-screen flex items-center justify-center`.

3. **Build Modal component** — Dialog with `role="dialog"`, `aria-modal="true"`, 7px border-radius, #efefef background, deep box-shadow. Controlled open/close state. Escape key handler. Focus trap.

4. **Build ProductImage column** — Left 50% column with background-image cover, absolute-positioned price badge "$2000" at top-left.

5. **Build ProductDetails column** — Right 50% column with padding (16px/20px), containing:
   - Share icon (absolute top-right, gray, hover black)
   - Product title "Grand Prix 4000" with decorative 70px centered line underneath
   - Star rating row (4 filled yellow, 1 empty)
   - Description paragraph (gray #777, 14px, 1.5 line-height)
   - Social engagement bar (50% width, centered): heart (red), chat (blue), add (blue) with counts

6. **Wire up App.tsx** — Compose LaunchSection + Modal into main layout.

7. **Write tests** — Vitest + Testing Library for:
   - LaunchSection renders heading and button
   - Modal opens on button click
   - Modal closes on Escape key
   - Modal has correct ARIA attributes
   - Focus trap works within modal
   - All visual elements render (title, stars, social bar, price badge)
   - 100% coverage

8. **Verify** — `scripts/verify-app.sh piazza` (typecheck + lint + tests + build).

## Design Notes

### Structure order (top to bottom inside modal)

1. Product image (left 50%) with price badge overlay
2. Product details (right 50%):
   - Share icon (absolute positioned)
   - Title + decorative line
   - Star rating
   - Description
   - Social bar (heart, message, add)

### Fidelity notes

- Match the 50/50 split exactly — original uses `flex: 0 0 50%` on the image column
- The decorative line under the title is key visual element: 70px wide, 1px gray, centered via `translateX(-50%)`
- The social bar uses Bootstrap utility classes (`d-flex`, `w-50`, `mx-auto`, `mr-auto`, `ml-auto`)
- Star icons use icomoon font — replace with lucide-react or similar icons
- Share icon uses icomoon font — replace with lucide-react Share2
- Heart, chat, add icons use icomoon — replace with lucide-react Heart, MessageCircle, Plus
- No dark overlay by default (transparent background on `.modal`)
- Modal shadow is heavy: `0 10px 50px -10px rgba(0,0,0,0.9)`
- The modal is `modal-lg` (large Bootstrap modal size)
- Background image should use `picsum.photos` seed for deterministic placeholder
