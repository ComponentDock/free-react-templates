# Searchveil — Implementation Notes

## Template: Searchveil (ColorLib Search Form Bar 16)

### Structure (section order)

1. **SearchOverlay** — fullscreen overlay (fixed/inset-0, z-50)
   - Close button (×) positioned top-right (absolute, fixed)
   - "PRESS [ESC] TO CLOSE" text centered near top, uppercase, letter-spaced, light gray
   - Search input centered vertically+horizontally, underline-only style (border-bottom)
   - Placeholder: "Type here to search"
2. **Trigger mechanism** — could be a button/icon that opens the overlay (not shown in screenshot — the overlay is shown already open)
3. **Content behind overlay** — minimal page with a trigger button (search icon)

### Design fidelity notes

- **Overlay:** Full viewport, white (#FFFFFF) background, fixed positioning
- **Close button:** × icon (lucide-react X), positioned top-right, dark gray (#333)
- **Heading:** "PRESS [ESC] TO CLOSE" — uppercase, letter-spacing ~2px, font-size ~12px, color #AAA
- **Input:** Full width (~70% of viewport), centered, no box/background, just a bottom border (#E0E0E0), font-size ~18px
- **Animation:** Fade-in on open, fade-out on close (CSS transition opacity)
- **ESC key:** Dismiss overlay via keyboard event listener
- **Click outside:** Dismiss overlay when clicking the background overlay area

### Implementation approach

1. Copy simplest existing app as base (e.g. `searchsnap`)
2. Rename package to `@free-react-templates/searchveil`
3. Build `SearchOverlay.tsx` as a modal component:
   - Uses `useState` for open/close
   - useEffect for ESC key listener
   - CSS transition for fade animation
   - Focus trap (auto-focus input on open)
4. Build `SearchTrigger.tsx` — a simple search icon button that opens the overlay
5. Compose in `App.tsx`: main content area + SearchTrigger + SearchOverlay
6. Style with Tailwind: fixed inset-0, flex center, border-bottom input, uppercase heading
7. Tests: cover overlay open/close, ESC dismiss, click-outside dismiss, input functionality, accessibility

### Key differences from source

- No ColorLib branding or attribution in the app
- Footer links to Component Dock instead of ColorLib
- Placeholder images via picsum.photos if any are added
- The overlay trigger button is a minimal search icon
