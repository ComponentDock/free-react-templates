# HouseCraft — Design Notes & Tasks

Source: ColorLib Myhome (https://preview.colorlib.com/theme/myhome/)
New name: `housecraft`

## Section order (top to bottom)

1. TopBar — contact info strip
2. Navbar — sticky nav with logo + links + Submit Listing CTA
3. HeroSlider — OwlCarousel property slides with purple overlay
4. SearchForm — "Find your home" search inputs
5. FeaturedProperties — 3 property cards grid
6. ChooseLocation — location list
7. HotDeal — single featured property with agent info
8. Testimonials — client quote slider
9. Footer — multi-column with links + copyright
10. GoogleMap — placeholder map section

## Implementation tasks

- [ ] Copy simplest existing app as base, rename to `housecraft`
- [ ] Update `package.json` name to `@free-react-templates/housecraft`
- [ ] Create `public/CNAME` with `housecraft.free.componentdock.com`
- [ ] Set up theme tokens in `src/index.css` (`@theme` with brand colors)
- [ ] Implement TopBar component (phone, address, email, social icons)
- [ ] Implement Navbar component (logo, nav links, Submit Listing button, sticky)
- [ ] Implement HeroSlider component (3 slides with overlays, prices, addresses)
- [ ] Implement SearchForm component (4 inputs + Search button)
- [ ] Implement FeaturedProperties component (3 property cards)
- [ ] Implement ChooseLocation component (8 location items)
- [ ] Implement HotDeal component (large image, details, agent)
- [ ] Implement Testimonials component (client quote, name, image bg)
- [ ] Implement Footer component (logo, links, contact, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Run `npm run spec:validate` — ensure spec passes
- [ ] Run `scripts/verify-app.sh housecraft` — full per-app gate

## Fidelity notes

- **HeroSlider**: Original uses OwlCarousel; React equivalent needed (CSS carousel or lightweight lib). Purple overlay `rgba(85,64,125,0.67)`. Price tag styled with green bg.
- **SearchForm**: 4 inputs in a horizontal row (responsive to column on mobile). Green "Search" button.
- **FeaturedProperties**: 3-column grid. Each card: image top, tag badge (green=house, orange=rent), price, address, specs row (sqft, beds, baths, garages).
- **HotDeal**: 2-column layout — large image left, details + agent right. Stats in a row below.
- **Testimonials**: Background image with dark overlay. Quote text centered. Client avatar (circular 50% border-radius).
- **Footer**: 4-column grid. Logo + about text, useful links, contact info, navigation links. Green "Submit Listing" button. Bottom bar with copyright + Component Dock.
- **Colors**: Primary CTA = #adc867 (green), secondary = #55407d (purple), dark = #1e1332, body text = #2b2e35.
- **Font**: Montserrat from Google Fonts.
- **No newsletter section** — this template does not have one.
- **Google Map**: Static placeholder or iframe embed.
