# Roamgate — Replication Research & Tasks

**Source:** ColorLib Search Form V18 — https://colorlib.com/wp/template/colorlib-search-18/
**Preview:** https://preview.colorlib.com/theme/colorlib-search-18/ (404 at prep time — screenshot used as primary reference)

---

## Design Notes

### Overall Layout
- Single full-viewport section (100vh × 100vw)
- Background: scenic travel photo (sunset beach, palm trees, person silhouette)
- Centered dark semi-transparent card (~600-700px wide, auto height)
- Card has rounded corners and semi-transparent dark navy background

### Tab System
- Three tabs at top: HOTELS | CAR | FLIGHT
- Active tab: white text, uppercase, semi-bold, no underline/border
- Inactive tabs: muted white (rgba 255,255,255,0.6), same styling
- Clicking tab swaps the form content below (no page reload)

### Hotels Form (default)
1. **Where** field: full-width input, "Where:" label on left, placeholder "City, region or specific hotel", magnifying glass icon on right
2. **Check-In / Check-Out**: two-column date inputs, "Check-In:" and "Check-Out:" labels, placeholder "mm/dd/yyyy"
3. **Travellers + SEARCH**: two-column — Travellers dropdown ("1 Adult, 0 Children, 1 Room") + blue SEARCH button

### Car Form
1. **Pickup Location**: full-width text input
2. **Pick-Up Date/Time + Drop-Off Date/Time**: two-column datetime inputs
3. **Vehicle Type + SEARCH**: two-column — dropdown + blue SEARCH button

### Flight Form
1. **From / To**: two-column text inputs
2. **Departure / Return**: two-column date inputs
3. **Passengers + SEARCH**: two-column — dropdown + blue SEARCH button

### Styling Details
- All inputs: white bg, light gray border, rounded corners (8px), padding
- Labels: "Where:", "Check-In:", etc. — left of field, dark text
- Placeholder text: light gray (#9ca3af or similar)
- SEARCH button: full-width of its column, bg #1a73e8, white text, uppercase, rounded (8px), hover darker blue
- Card background: rgba(~20,25,40,0.85) — semi-transparent dark navy
- No drop shadow on card

### Color Tokens (from ColorLib page CSS)
- Accent/brand: `#1a73e8` (Google blue)
- Hover accent: `#1464cc`
- Body text: `#26282b`
- System sans-serif font family

### Assets
- Background image: use `https://picsum.photos/seed/roamgate/1920/1080` (travel/sunset vibe)
- No custom fonts needed — system sans-serif
- Icons: lucide-react (Search for magnifying glass, ChevronDown for dropdowns)

---

## Implementation Tasks

### 1. Scaffold app
- Copy `apps/aurora` (or simplest existing app) to `apps/roamgate`
- Rename package to `@free-react-templates/roamgate`
- Update `public/CNAME` to `roamgate.free.componentdock.com`
- Update `vite.config.ts` with `injectUiSource()`
- Run `npm install` at repo root

### 2. Create components
- `src/components/SearchCard.tsx` — main card container with tabs + form
- `src/components/TabBar.tsx` — three-tab navigation
- `src/components/HotelForm.tsx` — Hotels search form
- `src/components/CarForm.tsx` — Car rental search form
- `src/components/FlightForm.tsx` — Flight search form
- `src/components/SearchField.tsx` — reusable labeled input with icon slot
- `src/App.tsx` — full-viewport layout with background + card

### 3. Styling (index.css + Tailwind)
- Full-viewport bg image via `background-image` on App container
- Semi-transparent card: `bg-navy/85 backdrop-blur-sm rounded-lg`
- Tab styling: uppercase, semi-bold, active = white, inactive = muted white
- Fields: white bg, gray border, rounded-lg, placeholder styling
- Search button: `bg-brand hover:bg-brand-dark text-white uppercase rounded-lg`
- Responsive: single-column on mobile, two-column on desktop

### 4. Tests (TDD)
- `SearchCard.test.tsx`: renders card, default Hotels tab
- `TabBar.test.tsx`: renders 3 tabs, active state, click handler
- `HotelForm.test.tsx`: renders all fields, placeholder text, search icon
- `CarForm.test.tsx`: renders all fields
- `FlightForm.test.tsx`: renders all fields
- `SearchField.test.tsx`: renders label, placeholder, icon
- `App.test.tsx`: renders background, card, tabs
- Coverage: 100% lines/functions/branches/statements

### 5. Verify & deploy
- Run `npm run verify:app roamgate` (typecheck + lint + knip + fallow + tests + build)
- Commit: `feat: add Roamgate (ColorLib Search Form V18)`
- Push to `feat/template-roamgate` branch, open PR, merge, deploy to Surge
