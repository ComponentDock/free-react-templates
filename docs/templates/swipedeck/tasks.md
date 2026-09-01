# SwipeDeck Tasks & Design Notes

## Tasks / TODO Outline

1. **Setup App Workspace & Metadata**:
   - Create `apps/swipedeck/` with standard Vite + React + Tailwind CSS 4 configuration (`vite.config.ts` with `injectUiSource()`, `index.html` with Roboto font link and CNAME `swipedeck.free.componentdock.com`).
   - Configure package name `@free-react-templates/swipedeck`.
2. **Component Structure**:
   - `src/App.tsx`: Root component assembling Navbar/Header, Hero Carousel, and Footer with Component Dock attribution.
   - `src/components/CarouselHero.tsx`: Full-screen carousel component with React state tracking active slide index, next/prev arrow handlers, and interactive dot navigation.
3. **Styling & Design Tokens**:
   - Apply Roboto typography and full-screen (`100vh`) slide layouts with high-contrast photo overlays (`rgba(0, 0, 0, 0.3)`).
   - Style navigation buttons and active/inactive pagination dots matching the ColorLib Carousel 13 reference design.
4. **Testing & Verification**:
   - Write comprehensive unit and integration tests in `src/App.test.tsx` and `src/components/CarouselHero.test.tsx` achieving 100% coverage.
   - Run per-app verification script (`scripts/verify-app.sh swipedeck`).
