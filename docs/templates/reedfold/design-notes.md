# Reedfold — Design & Implementation Notes

## Source

- ColorLib "Accordion 05": https://colorlib.com/wp/template/accordion-05/
- Preview: https://preview.colorlib.com/theme/bac/accordion-05/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-05.jpg

## Section Order (1:1 from preview)

1. **Page wrapper** — light gray (#fafafa) background, Poppins font
2. **Section** — 7em vertical padding, centered content
3. **Heading** — "Accordion #05", 28px, black, centered
4. **Accordion container** — white bg, box-shadow, sharp corners, centered
   - **Card 1 (Manage)** — default expanded
     - Header: 60×60 teal icon (ion-ios-settings) + "Manage" + chevron
     - Body: teal bg, numbered list (01 Account, 02 Settings, 03 Profile) with forward arrows
   - **Card 2 (Location)** — collapsed
     - Header: 60×60 teal icon (ion-ios-pin) + "Location" + chevron
     - Body: teal bg, text paragraph
   - **Card 3 (Hobbies)** — collapsed
     - Header: 60×60 teal icon (ion-ios-basketball) + "Hobbies" + chevron
     - Body: teal bg, list (Playing Basketball, Playing Baseball, Running) with forward arrows

## Implementation Notes

### React Component Structure

```
src/
  App.tsx              — Section wrapper with heading + Accordion
  components/
    Accordion.tsx      — Container with single-expand state logic
    AccordionCard.tsx  — Individual card (header + collapsible body)
    AccordionHeader.tsx — Icon + title + chevron button
    AccordionBody.tsx  — Collapsible content area (teal bg, white text)
```

### State Management

- Use `useState<string | null>` to track the currently expanded card ID
- Only one card can be expanded at a time (single-expand accordion)
- Default: first card expanded on mount

### Icons

- Use `lucide-react` equivalents for Ionicons:
  - `ion-ios-settings` → `Settings` (lucide)
  - `ion-ios-pin` → `MapPin` (lucide)
  - `ion-ios-basketball` → `Circle` or `Dribbble` (lucide)
  - `ion-ios-arrow-forward` → `ChevronRight` (lucide)
  - Chevron toggle (expanded/collapsed) → `ChevronDown` (lucide), rotate 180° when expanded

### Tailwind Theme Tokens (index.css)

```css
@theme {
  --color-brand: #75d6d1;
  --color-brand-dark: #5abcb6;
  --font-family-heading: 'Poppins', Arial, sans-serif;
  --font-family-body: 'Poppins', Arial, sans-serif;
}
```

### Key Styles

- Page bg: `bg-[#fafafa]`
- Accordion container: `bg-white shadow-[0px_10px_29px_-16px_rgba(0,0,0,0.12)] rounded-none overflow-hidden`
- Icon box: `w-[60px] h-[60px] bg-brand flex items-center justify-center`
- Icon color: `text-white`
- Card header button: `w-full text-left px-0 py-0 border-b border-black/5 text-lg font-normal`
- Expanded chevron: `text-brand`
- Collapsed chevron: `text-black/30`
- Card body: `bg-brand text-white/80 mb-px`
- List items: `border-b border-white/25 px-7 py-[15px]`
- Numbered span: `font-light text-white/50 mr-2.5`
- Link arrow: `text-white/80`

### Accessibility

- Each card header is a `<button>` with `aria-expanded` and `aria-controls`
- Content panel uses `role="region"` with `aria-labelledby` pointing to the header
- Keyboard navigation: Enter/Space to toggle, Tab to move between headers
- Focus-visible ring on interactive elements

### Footer

- Must include link to https://www.componentdock.com/ (branded "Component Dock")
- No ColorLib references in any app file

### Fidelity Notes

- Original uses Bootstrap grid (col-md-7 col-lg-6) — recreate with Tailwind flex/centering
- Original uses jQuery for collapse toggle — use React state instead
- Original uses Ionicons font — use lucide-react SVG icons
- Single-expand behavior matches original (data-parent attribute)
- Teal content area with white text is the signature visual element
