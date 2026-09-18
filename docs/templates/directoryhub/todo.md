# DirectoryHub — Implementation TODO & Design Notes

## Template info

- **Name:** DirectoryHub (directory/listing template)
- **Source:** ColorLib "Listing" (slug: `listing`)
- **Source URL:** https://colorlib.com/wp/template/listing/
- **Preview URL:** https://preview.colorlib.com/theme/listing/
- **Spec:** openspec/specs/template-directoryhub/spec.md

## Implementation TODO

### 1. Project setup
- [ ] Copy simplest existing app as scaffold (e.g. `apps/catalog` or similar)
- [ ] Rename package to `@free-react-templates/directoryhub`
- [ ] Update `vite.config.ts` with `injectUiSource()` helper
- [ ] Set `public/CNAME` to `directoryhub.free.componentdock.com`
- [ ] Set `homepage` to `https://directoryhub.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

### 2. Design tokens (index.css)
- [ ] Add `@theme` block with brand color `--color-brand: #ff3a6d`
- [ ] Add light bg `--color-light-bg: #f3f4f7`
- [ ] Add dark bg `--color-dark-bg: #252a33`
- [ ] Add rating colors: `--color-rating-orange: #ffae00`, `--color-rating-green: #46cd38`
- [ ] Add muted text `--color-muted: #909090`
- [ ] Add card text `--color-card-text: #9fa9b9`
- [ ] Load Roboto font via Google Fonts link in `index.html`

### 3. Components (TDD order)
- [ ] `Navbar.tsx` — brand + nav links + dropdowns + Add Listing button
  - Desktop: horizontal nav, transparent bg, white text
  - Sticky: dark bg `#252a33` on scroll > 100px
  - Mobile: hamburger toggle with aria-expanded
- [ ] `Hero.tsx` — dark background image + h1 + subtitle + search form
  - Full-width bg image with dark overlay
  - Search form: two text inputs + pink SEARCH button
  - "Browse Popular or Recently Added" links below
- [ ] `FindPlaces.tsx` — asymmetric image grid with hover-reveal captions
  - 3-column grid: 1 tall + 2 stacked + 2 stacked
  - Hover: Ruby-style figcaption slide from bottom
  - 5 categories with listing counts
- [ ] `FeaturedPlaces.tsx` — 3 place cards with rating badges
  - Light grey `#f3f4f7` section background
  - Cards: image, circular rating badge, title box, details, status
  - Rating colors: pink `#ff7474`, orange `#ffae00`, green `#46cd38`
  - VIEW ALL button below
- [ ] `BrowseCategories.tsx` — 4×2 grid with SVG icons
  - 8 categories with inline SVG icons
  - Hover: icon turns pink `#ff3a6d`
  - Labels: Automotive, Beauty & Spa, Hotel, Restaurant, Shopping, Coffee,
    Club & Bar, Destinations
- [ ] `AddListingCta.tsx` — CTA section
  - Light grey bg, centered h2, subtitle, pink ADD LISTING button
- [ ] `Footer.tsx` — dark footer with copyright + social icons
  - Dark `#252a33` bg
  - Copyright text + Facebook, Twitter, Instagram icons
  - Component Dock link (mandatory)

### 4. App.tsx
- [ ] Compose all sections in order: Navbar → Hero → FindPlaces →
  FeaturedPlaces → BrowseCategories → AddListingCta → Footer

### 5. Tests (100% coverage)
- [ ] Navbar: renders brand, links, dropdown toggle, sticky behavior
- [ ] Hero: renders heading, subtitle, search form, links
- [ ] FindPlaces: renders grid, hover reveals captions
- [ ] FeaturedPlaces: renders cards, rating badges, VIEW ALL button
- [ ] BrowseCategories: renders grid, hover changes icon color
- [ ] AddListingCta: renders heading, subtitle, button
- [ ] Footer: renders copyright, social icons, Component Dock link
- [ ] Responsive: test key breakpoints

### 6. Verification
- [ ] Run `scripts/verify-app.sh directoryhub`
- [ ] Confirm no ColorLib references in app code
- [ ] Confirm picsum.photos for placeholder images
- [ ] Confirm Component Dock link in footer
- [ ] Build succeeds

## Design notes

### Section order (1:1 fidelity)

1. Navbar (transparent overlay on hero)
2. Hero/Search (dark bg image, search form)
3. Find Places (image grid with hover captions)
4. Featured Places (3 cards with ratings, light grey bg)
5. Browse Categories (4×2 icon grid)
6. Add Listing CTA (light grey bg, pink button)
7. Footer (dark bg, copyright, social)

### Visual design

- **Aesthetic:** Clean, modern directory/listing site. Dark hero with light
  body sections alternating white and `#f3f4f7`. Pink `#ff3a6d` as the
  dominant accent color on buttons and interactive elements.
- **Hero:** Full-width dark background image with semi-transparent overlay.
  Large thin-weight heading in white. Search form with rounded inputs and
  a bold pink button.
- **Find Places:** Asymmetric image grid with a "Ruby" hover effect (caption
  slides up from bottom with a dark overlay). The tall left image creates
  visual weight; the stacked right images provide variety.
- **Featured Cards:** Standard card layout with image on top, content below.
  The circular rating badges overlapping the image edge are a distinctive
  visual element. Color-coding (pink/orange/green) indicates rating quality.
- **Categories:** Clean icon grid with SVG icons that animate on hover.
  Simple, recognizable icons for each category.
- **Footer:** Minimal dark footer with centered copyright and social icons.

### Icon mapping (themify → lucide-react)

| Themify icon        | Lucide replacement   |
| ------------------- | -------------------- |
| icon-magnifier      | Search               |
| icon-arrow-down     | ChevronDown          |
| icon-location-pin   | MapPin               |
| icon-screen-smartphone | Phone             |
| icon-link           | Link                 |
| ti-heart            | Heart                |
| ti-bookmark         | Bookmark             |
| ti-plus             | Plus                 |
| ti-facebook         | Facebook             |
| ti-twitter-alt      | Twitter              |
| ti-instagram        | Instagram            |
| icon-menu           | Menu                 |

### Image strategy

- Hero background: `https://picsum.photos/seed/directoryhub-hero/1920/800`
- Find Places images: `https://picsum.photos/seed/directoryhub-{1..5}/600/400`
- Featured Places images: `https://picsum.photos/seed/directoryhub-feat-{1..3}/400/300`
- All images: deterministic seeds for consistent rendering

### Source quirks

- The original uses Bootstrap 4 grid classes (`col-md-3`, `col-md-4`, etc.)
  → recreate with Tailwind grid/flex utilities
- The original uses jQuery for sticky navbar → use React state + scroll event
- The original uses `themify-icons.css` and `simple-line-icons.css` → replace
  with lucide-react SVG icons
- The original's hover effect uses `set1.css` (CSS hover transitions) →
  recreate with Tailwind group-hover or CSS transitions
- SVG icons in Browse Categories are inline in the HTML → use lucide-react
  icons instead
