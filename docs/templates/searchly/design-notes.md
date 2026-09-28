# Searchly — Implementation Notes

## Structure order (top → bottom)

1. **Hero section** — full-viewport container with background image + dark overlay
2. **Heading** — bold white uppercase "QUICK FIND YOUR CITY", centered
3. **Search bar** — horizontal three-field form: WHAT (text), WHERE (dropdown), SEARCH (button)

## Section-by-section fidelity notes

### Hero
- Full viewport height (`h-screen`), background image via `picsum.photos` with deterministic seed
- Dark overlay using `bg-black/30` or similar semi-transparent layer
- Content centered both vertically and horizontally (`flex items-center justify-center`)

### Heading
- White (`text-white`), bold (`font-bold`), uppercase (`uppercase`)
- Font size: `text-4xl` to `text-5xl` responsive
- Centered below the search bar (or above, per screenshot positioning)
- Sans-serif font, loaded via Google Fonts (Poppins or similar geometric sans)

### Search bar
- White background (`bg-white`), no border-radius (sharp corners)
- Max width ~800px, centered on the hero
- Height ~60px
- Divided into three sections with subtle vertical borders (`border-r border-gray-200`)
- **WHAT section**: gray uppercase label "WHAT", text input with placeholder "ex: food, service, bar, hotel"
- **WHERE section**: gray uppercase label "WHERE", dropdown select showing "1 adult", chevron-down icon (lucide-react `ChevronDown`)
- **SEARCH button**: coral-red (`#ff4b5a`) background, white bold uppercase text, square corners, no border-radius
- Button takes ~25% width of the bar

### Footer
- Standard ComponentDock footer with link to https://www.componentdock.com/

## Design decisions
- Since preview URL is unreachable, all tokens are approximate from screenshot analysis
- Using placeholder image from picsum.photos with seed "searchly" for deterministic hero background
- No additional sections beyond the hero — this is a single-purpose search widget
- Responsive: stacks vertically on mobile (<768px), horizontal on desktop

## Component breakdown
- `App.tsx` — single component composing Hero + SearchBar
- `Hero.tsx` — background image + overlay + heading + search bar container
- `SearchBar.tsx` — the three-field horizontal form (WHAT input, WHERE dropdown, SEARCH button)
