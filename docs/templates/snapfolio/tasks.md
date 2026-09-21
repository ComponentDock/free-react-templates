# Snapfolio — Implementation Tasks & Design Notes

## Template Overview
- **New name:** snapfolio
- **Source:** ColorLib Capture (https://colorlib.com/wp/template/capture/)
- **Category:** Gallery (Photography Portfolio)
- **Complexity:** Medium — sidebar layout + grid gallery + hover effects

## Implementation Tasks

### Phase 1: Project Setup
1. Create `apps/snapfolio/` by copying simplest existing gallery app
2. Rename package to `@free-react-templates/snapfolio`
3. Update `package.json` with correct name and dependencies
4. Configure `vite.config.ts` with `injectUiSource()` helper
5. Set up `public/CNAME` with `snapfolio.free.componentdock.com`
6. Run `npm install` at repo root to register workspace

### Phase 2: Core Components
7. Create `src/components/Sidebar.tsx` — fixed left sidebar with:
   - Logo (camera icon + "Snapfolio" text)
   - Navigation menu (Home, Gallery, About, Blog, Contact)
   - Social media icons at bottom
   - Mobile toggle (hamburger menu)

8. Create `src/components/PhotoGrid.tsx` — 3-column gallery grid:
   - Map over photography entries
   - Each entry: background image + overlay + title + tag
   - Hover effect: overlay opacity 0 → 0.7, text opacity 0 → 1

9. Create `src/components/PhotoCard.tsx` — individual gallery item:
   - Props: image, title, tag
   - Background image with object-cover
   - Dark overlay div with transition
   - Text positioned absolute, centered

10. Create `src/components/Footer.tsx` — dark footer with 3 columns:
    - Category links with counts
    - Archives with month + count
    - Contact info (address, phone, email)
    - Copyright line with Component Dock link

### Phase 3: Page Composition
11. Create `src/App.tsx` — compose layout:
    - Flex container: Sidebar (20%) + Main (80%)
    - Main contains PhotoGrid
    - Footer at bottom

12. Create `src/index.css` — Tailwind setup + custom tokens:
    - Import Tailwind directives
    - Define custom colors (primary: #78d5ef, footer: #343a40)
    - Add Work Sans and Poppins/Montserrat font imports
    - Custom utility classes for hover effects

### Phase 4: Testing
13. Write tests for Sidebar component
    - Renders logo and navigation
    - Toggle works on mobile
    - Social links are present

14. Write tests for PhotoGrid component
    - Renders correct number of items
    - Grid layout is applied
    - Hover state changes overlay opacity

15. Write tests for PhotoCard component
    - Displays title and tag
    - Background image is applied
    - Overlay transitions work

16. Write tests for Footer component
    - Renders all 3 sections
    - Category links are present
    - Contact info is displayed

### Phase 5: Verification
17. Run typecheck: `npm run typecheck`
18. Run lint: `npm run lint`
19. Run tests with coverage: `npm run test:coverage` (must be 100%)
20. Run build: `npm run build`
21. Run knip: `npm run knip`
22. Verify deploy URL works

## Design Notes

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ SIDEBAR (20%)  │  MAIN CONTENT (80%)           │
│                │                                │
│ 📷 Snapfolio   │  ┌──────┐ ┌──────┐ ┌──────┐  │
│                │  │ Work │ │ Work │ │ Work │  │
│ Home           │  │  01  │ │  02  │ │  03  │  │
│ Gallery        │  └──────┘ └──────┘ └──────┘  │
│ About          │  ┌──────┐ ┌──────┐ ┌──────┐  │
│ Blog           │  │ Work │ │ Work │ │ Work │  │
│ Contact        │  │  04  │ │  05  │ │  06  │  │
│                │  └──────┘ └──────┘ └──────┘  │
│ ─────────────  │  ┌──────┐ ┌──────┐ ┌──────┐  │
│ 📱 Social      │  │ Work │ │ Work │ │ Work │  │
│ Icons          │  │  07  │ │  08  │ │  09  │  │
│                │  └──────┘ └──────┘ └──────┘  │
│                │  ┌──────┐ ┌──────┐ ┌──────┐  │
│                │  │ Work │ │ Work │ │ Work │  │
│                │  │  10  │ │  11  │ │  12  │  │
│                │  └──────┘ └──────┘ └──────┘  │
│                │                                │
│                │  FOOTER (Dark #343a40)         │
│                │  Categories | Archives | Contact│
└─────────────────────────────────────────────────┘
```

### Color Palette
- Primary: #78d5ef (light blue) — buttons, links
- Background: #ffffff (white) — main area
- Text: #212529 (dark) — body text
- Footer: #343a40 (dark charcoal) — footer background
- Overlay: #000000 with opacity transitions

### Typography
- Body: "Work Sans" (Google Fonts)
- Headings: "Poppins" + "Montserrat" (Google Fonts)
- Logo: Camera icon + bold text

### Hover Effects
- Gallery cards: overlay fades in (0 → 0.7 opacity)
- Text appears on hover (opacity 0 → 1)
- Sidebar links: underline animation on hover
- Transition duration: 0.3s ease

### Responsive Breakpoints
- Desktop (>992px): Sidebar visible, 3-column grid
- Tablet (768-992px): Sidebar hidden, 2-column grid
- Mobile (<768px): Sidebar slide-in, 1-column grid

### Accessibility Notes
- Semantic HTML: nav, main, section, footer
- ARIA labels on navigation
- Focus-visible rings on interactive elements
- Alt text for all gallery images
- Keyboard navigation support

### Placeholder Images
- Use `https://picsum.photos/seed/snapfolio-{n}/600/400` for gallery items
- Deterministic seeds ensure consistent images across builds

### Component Dock Attribution
- Footer copyright: "Made with ❤️ by Component Dock"
- Link to https://www.componentdock.com/
