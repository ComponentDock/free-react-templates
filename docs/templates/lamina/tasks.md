# Lamina — Template Tasks

## Source

- ColorLib: Accordion 07
- Preview: https://preview.colorlib.com/theme/accordion-07/ (404 — fallback to screenshot)

## Design Tokens

- Page background: #1a1a1a (gray-950)
- Accordion item bg: #ffffff (white)
- Border: #e5e7eb (gray-200)
- Header text: #111827 (gray-900)
- Body text: #374151 (gray-700)
- Toggle collapsed: #16a34a (green-600)
- Toggle expanded: #2563eb (blue-600)
- Toggle icon: #ffffff (white)
- Font: Inter (Google Fonts)
- Toggle size: 40x40px (h-10 w-10)

## Structure

1. Dark page background (gray-950)
2. Centered heading "Accordion #07"
3. Three accordion items vertically stacked (0.5rem gap)
4. Each item: white bg, gray border, flex row (question + toggle)
5. Toggle: green (collapsed) / blue (expanded), plus/minus icons
6. Expanded panel: white bg, gray-700 body text
7. Footer: Component Dock link

## Files

- apps/lamina/src/App.tsx — main layout
- apps/lamina/src/components/Accordion.tsx — accordion logic
- apps/lamina/src/components/Footer.tsx — footer
- apps/lamina/src/data.ts — accordion items
- apps/lamina/src/index.css — Tailwind tokens
