# Locatia — Design Notes

Recreation of ColorLib Listingo (https://colorlib.com/wp/template/listingo/).
Preview: https://preview.colorlib.com/theme/listingo/

## Section structure (top → bottom)

1. **Header** — Sticky top bar, logo left, nav center (Home, Listings, Pages, About, Blog, Contact), "Sign In" button right. Mobile: hamburger.
2. **Hero / Search** — Full-width bg image + dark navy overlay. Centered: "Find Nearby Attraction" heading, 3-col search form (keyword input, location input, Search button), row of category filter buttons (Hotel, Food, Shopping, Bar & Pubs, Places).
3. **Popular Categories** — White bg. Title "Most Popular Categories". 4×2 grid of category cards (image + name + "05 Listings" count). Hover overlay reveals name/count.
4. **Explore Europe** — Light bg. Title "Explore Europe". Nav-tabs: England, Switzerland, Italy, France, Germany. Each tab panel: carousel of listing cards (name, address, phone, email).
5. **CTA Banner ("Sprayed")** — Full-width bg image + navy overlay at 50%. White text: "Sprayed Your Business with Us", description, "Add Your Business" coral button.
6. **Testimonials** — White bg. Title "What our Client Says". Carousel of cards: quote icon, text, author avatar (42px round), author name, author title.
7. **Footer** — Dark navy (`#001D38`). 4-col: logo+desc, Services links, Useful Links, Subscribe form. Bottom: copyright + Component Dock link.

## Design fidelity notes

- Brand navy `#001D38` — used for headings (h1–h5), overlay backgrounds, footer.
- Accent coral `#F91842` — primary button bg, active tab underline, link hover, CTA.
- Orange `#FD8E5E` — owl-carousel hover, secondary accent.
- Fonts: "Shadows Into Light" (cursive) for headings, "Raleway" (sans-serif) for body/nav/buttons. Load via Google Fonts `<link>` in index.html.
- Buttons (`boxed-btn2`): 5px border-radius, coral bg (#F91842), white text, hover stays coral.
- Category cards: 10px border-radius, image thumbnail, semi-transparent hover overlay with name + count.
- Hero overlay: `#001D38` at 50% opacity via `::before` pseudo-element.
- Hero category buttons: translucent white bg (`rgba(255,255,255,0.2)`), 5px radius, hover → coral.
- Section padding: 120px top/bottom (desktop), reduced on tablet/mobile.
- Testimonials: carousel (use embla-carousel-react or swiper instead of OwlCarousel). Quote icon SVG. Avatar: 42px circle.
- Footer newsletter form: white input, coral subscribe button positioned absolute right.
- Responsive: hamburger on mobile, single-column stacking for grids, tab bar scrolls horizontally.

## Component outline

```
src/
  App.tsx            — compose all sections
  components/
    Header.tsx       — logo + nav + Sign In + hamburger
    HeroSearch.tsx   — bg image + overlay + heading + search form + category buttons
    PopularCategories.tsx — 4×2 grid of category cards with hover overlay
    ExploreEurope.tsx — tab bar + listing card carousel per tab
    CtaBanner.tsx    — bg image + overlay + heading + CTA button
    Testimonials.tsx — carousel of review cards
    Footer.tsx       — 4-col layout + newsletter + Component Dock link
```

## Implementation tasks

- [ ] Scaffold app from simplest existing template, rename package
- [ ] Set up index.css with Tailwind @theme tokens (navy #001D38, coral #F91842, orange #FD8E5E)
- [ ] Add Google Fonts link (Shadows Into Light + Raleway) to index.html
- [ ] Implement Header with nav links, Sign In button, and mobile hamburger menu
- [ ] Implement HeroSearch with background image, overlay, heading, search form, category buttons
- [ ] Implement PopularCategories with 8-card grid and hover overlay
- [ ] Implement ExploreEurope with tab bar and listing card carousel
- [ ] Implement CtaBanner with background image, overlay, heading, and coral button
- [ ] Implement Testimonials carousel with quote, avatar, name, title
- [ ] Implement Footer with 4-column layout, newsletter form, Component Dock link
- [ ] Write tests for all components (Vitest + RTL, 100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build
