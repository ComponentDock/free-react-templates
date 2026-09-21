# FlavorHub — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Tasty Recipes" — https://colorlib.com/wp/template/tasty-recipes/
- **Preview:** https://preview.colorlib.com/theme/tastyrecipes/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/tastyrecipes-free-template.jpg
- **Preview fetched:** Yes (HTML + CSS extracted from live preview)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, section backgrounds

## Section Order (top → bottom)

1. **Navbar** — sticky, logo left, nav links right, search icon, hamburger on mobile
2. **Hero** — full-width background image, centered cursive headline, full viewport height
3. **Recipes** — 3-column grid of recipe cards (image, name, category, time, CTA button)
4. **Recipe Videos** — two-column: text + play button left, image grid right
5. **Dish/Catering** — 3-column flex layout of dish cards with images and descriptions
6. **Latest Trending** — parallax background, white text overlay, CTA button
7. **Customer Feedback** — dark bg, testimonial carousel with user photos and quotes
8. **Download App** — two-column: app mockup images left, heading + store buttons right
9. **Footer** — dark bg, 4-column widgets (links + newsletter), copyright bar with social icons

## Fidelity Notes

### Navbar
- Sticky header with background transition on scroll
- Navigation: Home, About, Recipes, Blog (dropdown), Pages (dropdown), Contact
- Search icon (magnifying glass) on right side
- Hamburger menu on mobile with slide-down nav
- Use `lucide-react` icons for search, hamburger, dropdown arrows

### Hero
- Full-viewport height section (100vh desktop, 500px mobile)
- Background image with dark overlay
- Headline in Satisfy cursive font, white text, centered
- No CTA button in original — just the headline text
- Replace background with `picsum.photos/seed/flavorhub-hero/1920/1080`

### Recipes Section
- 3 recipe cards in a row (col-xl-4)
- Each card: large rounded food image, recipe name (h3), category tag (span), time text (p), "View Full Recipe" outline button
- Outline button: `border: 1px solid #ffc000`, `border-radius: 50px`, hover fills yellow
- Replace recipe images with `picsum.photos/seed/flavorhub-recipe-<n>/400/300`
- 3 recipes: Egg Manchurian, Pure Vegetable Bowl, Egg Masala Ramen

### Recipe Videos
- Two-column layout (50/50)
- Left: heading "Recipe videos that never misses any portion" + paragraph + play button
- Play button: circular, brand yellow accent, links to YouTube popup
- Right: 1 large image + 2 smaller thumbnail images in stacked layout
- Replace images with `picsum.photos/seed/flavorhub-video-<n>/...`

### Dish/Catering
- 3-column flex layout
- Each item: food image, heading "Birthday Catering", lorem ipsum description
- Centered text, clean white background
- Replace images with `picsum.photos/seed/flavorhub-dish-<n>/400/300`

### Latest Trending
- Full-width parallax background (reuse hero banner image)
- Dark overlay with white text
- Heading: "Discover latest trending recipes" (large, white)
- Subtext: "Thousands of recipes are waiting to be watched"
- "View all Recipes" CTA button: pill shape, brand yellow bg, white text
- Hover: white bg, yellow text

### Customer Feedback
- Dark background (`#262626`)
- Section heading: "Feedback From Customers" + description paragraph
- Carousel of testimonials (use CSS scroll-snap or simple React carousel)
- Each testimonial: circular user photo, name, title, paragraph quote
- Replace avatars with `picsum.photos/seed/flavorhub-testimonial-<n>/150/150`

### Download App
- Two-column layout
- Left: stacked phone/app mockup images
- Right: heading "Download app to get recipes from Everywhere" + store buttons
- App Store button: Apple icon + "Available" + "on App Store"
- Play Store button: Android icon + "Download" + "from Play Store"
- Buttons: dark bg, white text, rounded corners
- Replace mockup images with `picsum.photos/seed/flavorhub-app-<n>/...`

### Footer
- Dark background (`#000` / `#333`)
- 4-column widget layout:
  - Top Products: Managed Website, Manage Reputation, Power Tools, Marketing Service
  - Quick Links: Jobs, Brand Assets, Investor Relations, Terms of Service
  - Features: Jobs, Brand Assets, Investor Relations, Terms of Service
  - Resources: Guides, Research, Experts, Agencies
  - Subscribe: newsletter form (email input + submit button)
- Copyright bar: copyright text + social icons (Facebook, Twitter, Dribbble, Behance)
- Footer MUST link `https://www.componentdock.com/` (replaces Colorlib attribution)
- Social icons: use `lucide-react` (Facebook, Twitter, Dribbble, Behance)

## Component Breakdown

| Component | Source Section | Notes |
|-----------|---------------|-------|
| `Navbar.tsx` | Header | Sticky, dropdown menus, hamburger on mobile |
| `Hero.tsx` | Hero Slider | Full-viewport bg image, cursive headline |
| `Recipes.tsx` | Recipe Area | 3-column grid, recipe cards with outline buttons |
| `RecipeVideos.tsx` | Recipe Videos | Two-column: text+play button, image grid |
| `DishSection.tsx` | Dish Area | 3-column flex, dish cards |
| `LatestTrending.tsx` | Latest Trend | Parallax bg, heading, CTA button |
| `CustomerFeedback.tsx` | Customer Feedback | Dark bg, testimonial carousel |
| `DownloadApp.tsx` | Download App | Two-column: images, heading + store buttons |
| `Footer.tsx` | Footer | 4-column widgets, newsletter, social icons |

## Placeholder Assets

- Hero background: `https://picsum.photos/seed/flavorhub-hero/1920/1080`
- Recipe images: `https://picsum.photos/seed/flavorhub-recipe-<n>/400/300` (n=1..3)
- Video thumbnails: `https://picsum.photos/seed/flavorhub-video-<n>/...` (n=1..3)
- Dish images: `https://picsum.photos/seed/flavorhub-dish-<n>/400/300` (n=1..3)
- Trending background: `https://picsum.photos/seed/flavorhub-trending/1920/800`
- Testimonial avatars: `https://picsum.photos/seed/flavorhub-testimonial-<n>/150/150` (n=1..5)
- App mockups: `https://picsum.photos/seed/flavorhub-app-<n>/...` (n=1..3)
- Icons: `lucide-react` (search, hamburger, play, apple, android, social)

## Key Differences from Original

- No FontAwesome — use `lucide-react` for all icons
- No jQuery/OwlCarousel — pure React carousel (CSS scroll-snap or simple state-based)
- No magnific-popup — simple modal or inline video embed
- No Bootstrap grid — Tailwind CSS grid/flex utilities
- Satisfy cursive font loaded via Google Fonts `<link>` in index.html
- Roboto font loaded via Google Fonts `<link>` in index.html
- Footer links to Component Dock instead of Colorlib
- All images are deterministic placeholders via picsum.photos
- No `gijgo` date picker, `nice-select`, `slick`, `slicknav` — replace with native/React alternatives
