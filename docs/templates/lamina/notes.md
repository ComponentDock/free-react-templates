# Lamina — Implementation Tasks & Design Notes

## Source Mapping

- **ColorLib source**: Accordion 07 (`https://colorlib.com/wp/template/accordion-07/`)
- **Preview URL**: `https://preview.colorlib.com/theme/accordion-07/` (404 — screenshot only)
- **New template name**: `lamina` (single lowercase word, evokes thin layers/panels)
- **App folder**: `apps/lamina`
- **Package**: `@free-react-templates/lamina`
- **Deploy target**: `https://lamina.free.componentdock.com/`

## Structure Order (matching screenshot 1:1)

1. **Page wrapper** — dark background (gray-950), min-h-screen, flex column, center content
2. **Heading** — "Accordion #07", centered, dark gray text (gray-900), mb-12
3. **Accordion container** — centered, max-w-xl (≈560px), w-full px-4
4. **Accordion items** (3x) — vertical stack, gap-2
   - Each item: white bg, gray-200 border, no radius
   - Header row: flex, items-center, justify-between, px-6 py-4
   - Question text: text-gray-900, font-medium
   - Toggle button: 40x40px (h-10 w-10), flex center, rounded
     - Collapsed: bg-green-600, plus icon (lucide: Plus)
     - Expanded: bg-blue-600, minus icon (lucide: Minus)
     - Icon: white, size 5 (w-5 h-5)
   - Content panel: hidden when collapsed, shown when expanded
     - px-6 py-4, border-t gray-200
     - Body text: text-gray-700, leading-relaxed
5. **Footer** — "Made with Component Dock" link to `https://www.componentdock.com/`

## Section-by-Section Fidelity Notes

### Page Background

- **Screenshot shows**: Very dark gray, nearly black
- **Token**: `bg-gray-950` (#030712) or `bg-gray-900` (#111827) — use `gray-950` for closer match
- **Implementation**: `min-h-screen bg-gray-950 flex flex-col items-center py-16 px-4`

### Heading

- **Text**: "Accordion #07" (exact from screenshot)
- **Style**: Centered, dark gray, generous bottom margin
- **Token**: `text-gray-900 text-2xl font-semibold mb-12` (adjust size to match)

### Accordion Container

- **Width**: Centered, max ~600px (max-w-xl = 560px, max-w-2xl = 672px — use max-w-xl)
- **Padding**: Horizontal padding on mobile
- **Token**: `w-full max-w-xl px-4`

### Accordion Items (3x)

- **Gap**: 0.5rem (gap-2)
- **Background**: White
- **Border**: 1px solid gray-200 (border border-gray-200)
- **Border radius**: None (sharp corners)

### Header Row

- **Layout**: Flex, space-between, items-center
- **Padding**: px-6 py-4
- **Question text**: Left-aligned, text-gray-900, font-medium, text-base or text-lg

### Toggle Button

- **Size**: 40x40px (h-10 w-10)
- **Shape**: Rounded (rounded-lg or rounded — screenshot shows slightly rounded)
- **Collapsed state**: bg-green-600, Plus icon (white, w-5 h-5)
- **Expanded state**: bg-blue-600, Minus icon (white, w-5 h-5)
- **Focus/hover**: Slight opacity change, focus ring

### Content Panel

- **Visibility**: Controlled by state (CSS height transition or conditional render with animation)
- **Border top**: 1px solid gray-200 (border-t border-gray-200)
- **Padding**: px-6 py-4
- **Text**: text-gray-700, leading-relaxed

### Footer

- **Position**: Bottom of page, centered
- **Text**: "Made with Component Dock" or "More templates at Component Dock"
- **Link**: `https://www.componentdock.com/`
- **Style**: Subtle, text-gray-500 hover:text-gray-400

## Implementation Plan

### Phase 1: Spec & Setup

- [x] Spec written at `openspec/specs/template-lamina/spec.md`
- [ ] Create app scaffold: `apps/lamina/` (copy from simplest existing app like `apps/abode`)
- [ ] Update `package.json` name to `@free-react-templates/lamina`
- [ ] Add `public/CNAME` with `lamina.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://lamina.free.componentdock.com`
- [ ] Run `npm install` at root to register workspace in lockfile

### Phase 2: Design Tokens (index.css)

- [ ] Define Tailwind @theme with custom colors:
  - `--color-bg-page` → `gray-950`
  - `--color-toggle-collapsed` → `green-600`
  - `--color-toggle-expanded` → `blue-600`
- [ ] Import system font stack (no Google Fonts needed — system UI)

### Phase 3: Components (TDD)

- [ ] `Accordion.tsx` — main container component
- [ ] `AccordionItem.tsx` — single item with state
- [ ] `AccordionTrigger.tsx` — toggle button with icon
- [ ] `AccordionContent.tsx` — collapsible panel
- [ ] Write tests FIRST (Vitest + Testing Library)
- [ ] Implement to pass tests
- [ ] 100% coverage

### Phase 4: App Composition

- [ ] `App.tsx` — composes heading + Accordion + footer
- [ ] `main.tsx` — entry point
- [ ] `index.html` — proper meta, CNAME handled by Vite

### Phase 5: Verification

- [ ] Run `scripts/verify-app.sh lamina`
- [ ] Fix any failures
- [ ] Visual check in browser

### Phase 6: Deploy Prep

- [ ] Build produces `dist/` with correct assets
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code

## Test Scenarios (from spec Gherkin)

1. Page renders with heading and three items
2. Initial state: all collapsed, plus icons, green toggles
3. Click expands item → shows content, minus icon, blue toggle
4. Click again collapses → hides content, plus icon, green toggle
5. Multiple items can be expanded simultaneously
6. Question texts match exactly
7. Expanded content text matches exactly
8. Keyboard: Tab, Enter, Space work
9. ARIA: proper semantics (details/summary or ARIA)
10. Smooth height transition
11. Responsive on mobile

## Notes for Implementer

- Use `<details>` + `<summary>` for native accordion behavior + accessibility, OR custom ARIA pattern with `role="region"`, `aria-expanded`, `aria-controls`
- `<details>` is simpler but less stylable; custom gives full control over animation
- For smooth height animation with `<details>`, use CSS `details[open] > summary + * { animation: slideDown }` or similar
- Or use custom state + CSS transition on max-height (classic pattern)
- Toggle icons: `lucide-react` Plus / Minus icons
- State management: each item independent (multiple open allowed per spec)
- Footer MUST link to `https://www.componentdock.com/` — no ColorLib attribution
- Design tokens in `index.css` @theme, not inline in components
- Use `cn()` from `packages/ui` for class composition
