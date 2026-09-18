# Scoutly (ColorLib Dorne) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-scoutly`. Recreation name: **Scoutly** (NEW name —
> the ColorLib source keeps its name "Dorne").

## Source mapping

- **ColorLib item:** "Dorne" (TEMPLATES.md line 982; section listing template).
- **Source URL:** https://colorlib.com/wp/template/dorne/
- **Preview URL — REACHABLE:** https://preview.colorlib.com/theme/dorne/
  (HTTP 200, full HTML page, "Dorne - Directory & Listing Template").
- **Preview CSS:** `style.css` (main stylesheet, ~900+ lines, hand-written,
  Bootstrap 4 based). Google Fonts import: Open Sans (300,400,600,700,800).
  Additional CSS: `css/responsive/responsive.css`.
  JS: jQuery 2.2.4, Bootstrap 4, Owl Carousel, Magnific Popup, WOW.js.
  Icons: Font Awesome + Pe icon-7-stroke → **REPLACE with lucide-react**.

## Reference research (done — do not redo)

### Live preview DOM analysis

Fetched from https://preview.colorlib.com/theme/dorne/ — 762 lines of HTML.

**Section structure (in order):**

1. **Navbar** (fixed, transparent → dark on scroll)
   - Logo image → use text "Scoutly"
   - Links: Home (active), Explore (dropdown), Listings (dropdown), Contact
   - Right: Search button, "Sign in or Register" link, "+ Add Listings" CTA button (purple)
   - Mobile: hamburger toggler

2. **Hero / Welcome area** (full-height, background image + dark overlay)
   - Headline: "Discover places near you" (72px white)
   - Subheading: "This is the best guide of your city" (white)
   - Tabbed search form: Places (active) / Events tabs
   - Each tab: 3 dropdown selects (Destination, Category, Price Range) + Search button
   - Hero Social sidebar (bottom-left, rotated 90°): "Follow us on Social Media" + social icons

3. **Category cards** (5 columns, overlapping hero by -50% top)
   - Hotels, Restaurants, Shopping, Beauty & Spa, Cinema
   - Each: icon image + label, purple bg (#7643ea), white text, shadow on hover

4. **About section** (white bg, centered)
   - Heading: "Discover your city with Dorne" → "Discover your city with Scoutly"
   - "Dorne" in purple → "Scoutly" in purple
   - Descriptive paragraph

5. **Editor's Pick (Cities)** (dark overlay bg image)
   - Heading: "Cities you must see" / "Editor's pick"
   - 2-column grid: left = 1 large card (New York), right = 2 stacked (Barcelona, Paris)
   - Each card: image + info badges (city name purple bg, destination count dark bg)

6. **Featured Destinations** (carousel, light bg)
   - Heading: "Featured destinations" / "Editor's pick"
   - 5 cards: Ibiza, Paris, Lake Como, Greece, Norway
   - Each: image, price badge ("FROM $59/night" purple), title, subtitle, heart icon
   - Hover: purple bg + white text

7. **Featured Restaurants** (carousel, solid purple bg)
   - Heading: "Featured Restaurants" / "Editor's pick"
   - 5 cards: Martha's bar, Delux Restaurant, Jim's corner Pub, Tower Risto bar, Pizzeria venezia
   - Each: image, rating badge (purple), map badge (dark → teal on hover), name, location, heart icon

8. **Featured Events** (2-column grid, dark overlay bg image)
   - Heading: "Featured events" / "Editor's pick"
   - 6 cards: Jazz Concert, DeeJay in the house, Theatre Night outside, Wine tasting, New Moon Party, Happy hour at pub
   - Each: thumbnail (170px), date badge ("26 Nov" purple), map pin (teal), name, location (Manhattan), description, "+" button

9. **Client logos** (horizontal strip, light bg)
   - 5 placeholder logos evenly spaced

10. **Footer** (dark bg)
    - Copyright text → replace with Component Dock link
    - Social icons (LinkedIn, Behance, Dribbble, Twitter, Facebook)

### Design tokens extracted from style.css

| Token | Value | Usage |
|-------|-------|-------|
| Brand purple | `#7643ea` | Buttons, category cards, badges, hover state |
| Dark purple | `#341a79` | Preloader, sticky header bg, search form bg |
| Hover purple | `#5d25dd` | Button hover |
| Teal accent | `#30c0a3` | Map pins, add-more buttons, restaurant hover |
| Heading text | `#2a2a2a` | All headings |
| Body text | `#848484` | Paragraphs |
| Feature card bg | `#f4f6f8` | Destination/restaurant card backgrounds |
| Gray bg | `#f9f9f9` | Light section backgrounds |
| White | `#fff` | Nav links, card text, hero text |
| Overlay 50% | `rgba(14, 2, 35, 0.5)` | Hero, events bg |
| Overlay 90% | `rgba(14, 2, 35, 0.9)` | Editor's pick, events bg |
| Font | Open Sans (Google Fonts) | Weights: 300,400,600,700,800 |
| Button radius | `0` (square) | All CTA buttons |
| Button height | `52px` | dorne-btn class |
| Button min-width | `180px` | dorne-btn class |
| Section heading underline | 30px × 2px white bar | Under section headings |

## Implementation tasks

### Phase 1: Project setup
1. `cp -r apps/abjure apps/scoutly` (copy simplest existing app as skeleton)
2. Rename package to `@free-react-templates/scoutly`
3. Update `public/CNAME` to `scoutly.free.componentdock.com`
4. Update `homepage` in `package.json`
5. `npm install` at root to register workspace

### Phase 2: Tailwind theme tokens (src/index.css)
- `@theme` block with brand colors: `brand: #7643ea`, `brand-dark: #341a79`, `brand-hover: #5d25dd`, `accent-teal: #30c0a3`, `heading: #2a2a2a`, `body: #848484`
- Font family: Open Sans via Google Fonts `<link>` in `index.html`

### Phase 3: Components (src/components/)
1. `Navbar.tsx` — Fixed transparent → dark on scroll, dropdowns, mobile hamburger, search button, sign-in link, "+ Add Listings" CTA
2. `Hero.tsx` — Full-viewport bg image + overlay, headline, subheading, tabbed search form with dropdowns + button, social sidebar
3. `CategoryCards.tsx` — 5 cards in a row with icons + labels, purple bg, hover shadow, overlapping hero position
4. `About.tsx` — Centered heading "Discover your city with Scoutly" (purple name) + paragraph
5. `EditorsPick.tsx` — Dark overlay bg, 2-column grid (1 large + 2 stacked city cards)
6. `FeaturedDestinations.tsx` — Carousel of destination cards with price badges + favorites
7. `FeaturedRestaurants.tsx` — Purple bg carousel of restaurant cards with rating badges
8. `FeaturedEvents.tsx` — 2-column grid of event cards with date badges + "+" buttons
9. `ClientLogos.tsx` — Horizontal row of 5 placeholder logos
10. `Footer.tsx` — Copyright + Component Dock link + social icons
11. `SearchOverlay.tsx` — Fixed overlay toggled by search button

### Phase 4: App.tsx composition
- Compose all sections in order: Navbar → Hero → CategoryCards → About → EditorsPick → FeaturedDestinations → FeaturedRestaurants → FeaturedEvents → ClientLogos → Footer

### Phase 5: TDD
- Write tests for each component before implementation
- Aim for 100% line/branch/function coverage
- Use getByRole, getByText, userEvent patterns
