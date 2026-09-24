# Scoop — Implementation Tasks & Design Notes

**Source:** ColorLib Force (https://preview.colorlib.com/theme/force/)
**New name:** scoop
**Stack:** Vite + React 19 + Tailwind 4 + TypeScript

## Section Order (top to bottom)

1. TopMenuBar — date left, social icons right
2. LogoHeader — logo left, banner ad right
3. MainNav — logo (mobile), nav links (Home/Category/Archive/Elements/Contact), search icon; hamburger on mobile
4. HeroBanner — full-width carousel with 3 slides (category, date, comments, headline, CTA)
5. EditorsChoice — 4 equal article cards in a row
6. NewsArea — 8/4 split:
   - Left: LatestNews (4 horizontal cards), TravelAndFood (2x2 small + 1 large), WeddingAdventure (2 large + 4 small)
   - Right sidebar: MostPopularNews (featured + carousel), SocialNetworks (list with counts), Newsletter (email form)
7. ProductListArea — 3 columns: BestProductDeals, TechCulture, BrilliantIdeas (each 4 horizontal cards)
8. Footer — 3-col (about+logo, QuickLinks 2-col, MostViewedNews 2 cards) + footer bottom (copyright + social)

## Component Map

| Section           | Component File        | Notes                                     |
|-------------------|-----------------------|-------------------------------------------|
| TopMenuBar        | `TopMenuBar.tsx`      | Thin bar, date + social icons             |
| LogoHeader        | `LogoHeader.tsx`      | Logo + banner ad                          |
| MainNav           | `MainNav.tsx`         | Sticky, hamburger, search                 |
| HeroBanner        | `HeroBanner.tsx`      | Carousel with indicators + auto-advance   |
| EditorsChoice     | `EditorsChoice.tsx`   | 4-card grid                               |
| LatestNews        | `LatestNews.tsx`      | 4 horizontal article cards                |
| TravelAndFood     | `TravelAndFood.tsx`   | 2x2 small grid + 1 large featured         |
| WeddingAdventure  | `WeddingAdventure.tsx`| 2 large + 4 small cards                   |
| MostPopularNews   | `MostPopularNews.tsx` | Featured + owl carousel                   |
| SocialNetworks    | `SocialNetworks.tsx`  | List with platform icons + counts         |
| Newsletter        | `Newsletter.tsx`      | Email icon, heading, input + subscribe    |
| ProductListArea   | `ProductListArea.tsx` | 3 columns x 4 horizontal cards            |
| Footer            | `Footer.tsx`          | 3-col + bottom bar, Component Dock link   |

## Design Notes

### Colors (from CSS extraction)
- Brand: `#ff1857` (hot pink/red) — buttons, accents, submit
- Gold: `#f8b600` — category tag badges (`.gad_btn`)
- Dark: `#04091e` — banner background overlay
- Text primary: `#222222`
- Body text: `#777777`
- Light background: `#f9f9ff`

### Typography
- Font: Open Sans (Google Fonts)
- Headings: weight 600-700, color `#222222`
- Body: 16px, color `#777777`

### Buttons
- `.gad_btn`: category tag pill (gold bg)
- `.submit_btn`: `#ff1857` bg, transparent on hover with `#ff1857` border
- `.bbtns`: subscribe button in newsletter sidebar

### Layout Notes
- Bootstrap grid (migrate to Tailwind)
- News area: 8/4 column split
- Product list: 3 equal columns
- Footer: 3 equal columns
- Section padding: 100-120px
- Article cards use flex row (thumbnail left, content right)

### Fidelity Priorities
1. Match the 3-tier header (top bar, logo, nav)
2. Hero carousel with indicators is the visual centerpiece
3. Editor's Choice 4-card row must look uniform
4. The 8/4 news split with complex sub-sections is the core content area
5. 3-column product list at bottom is distinctive
6. Footer Quick Links in 2-column layout

### Placeholder Strategy
- All images → `https://picsum.photos/seed/scoop-<n>/<w>/<h>`
- Social icons → lucide-react
- Category tags → gold background spans with Tailwind
- Comments icon → lucide-react `MessageCircle`
- Calendar icon → lucide-react `Calendar`
