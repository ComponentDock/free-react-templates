# Plated Template Implementation Tasks

## Design & Structure Notes

- **Source:** ColorLib Restauco (`https://preview.colorlib.com/theme/restauco/`)
- **New Name:** `plated` (`apps/plated`)
- **Aesthetic:** Warm restaurant / dining landing page with warm peach/coral accents (`#FE5F41`), deep chocolate brown headings (`#4D312C`), and Raleway/Mitr typography.

## Section Implementation Plan

1. **Scaffold Workspace:**
   - Create `apps/plated` copying structure from an existing clean app (e.g. `apps/bistro` or `apps/feast`).
   - Register workspace package `@free-react-templates/plated`.
   - Configure `vite.config.ts` with `injectUiSource()`.
   - Update `package-lock.json` via `npm install`.
2. **Components (`src/components/`):**
   - `Navbar.tsx`: Sticky navigation, logo, nav links, phone badge, "Book a Table" CTA.
   - `Hero.tsx`: Warm peach background, headline, subheadline, CTAs, floating rating card, food image.
   - `Features.tsx`: 3-column healthy eating features (Healthy Meal, Fast Food, Delicious Coffee).
   - `PopularDishes.tsx`: Category tabs (Breakfast, Lunches, Dinner, Drinks, Fastfood) + interactive dish cards.
   - `Reservation.tsx`: Table booking form with interactive state validation.
   - `Testimonials.tsx`: Customer reviews carousel / cards.
   - `Footer.tsx`: 4-column footer with Component Dock attribution link (`https://www.componentdock.com/`).
3. **Tests & Coverage:**
   - Write comprehensive unit tests for all components covering 100% lines/functions/branches/statements.
4. **Verification:**
   - Run `scripts/verify-app.sh plated`.
