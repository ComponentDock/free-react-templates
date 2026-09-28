# Foodnest — Design Notes & Tasks

Source: ColorLib Foody — https://preview.colorlib.com/theme/foody/
New name: `foodnest`

## Section Order & Fidelity Notes

### 1. Header/Navbar
- Dark (black) background, fixed/sticky
- Brand "Foody" (left), nav links: Home, Recipes, Services (dropdown), About, News
- "Contact Us" CTA button right-aligned
- Mobile: hamburger toggle → collapsible menu
- Fidelity: match dark bg, orange active/hover, dropdown for Services

### 2. Hero Slider
- Full-width owl-carousel with 2 slides
- Each: background image, centered text, heading + paragraph + white outline CTA "Get Started"
- AOS fade-up animations on text elements
- Fidelity: match carousel behavior, white outline button style, centered layout

### 3. Services
- `bg-light` background with bottom slant CSS clip-path
- 4-column grid of service blocks
- Each: icon (flaticon dinner/fish/coffee/meat), orange heading, description
- AOS staggered fade-up
- Fidelity: match 4-col layout, orange headings, icon placement

### 4. The Restaurant
- Centered heading "The Restaurant" + paragraph
- 3 images in a row (2 food images + 1 about image)
- AOS fade animations
- Fidelity: match heading style, image row layout

### 5. Special Menu
- Owl-carousel of horizontal dish cards
- Each card: dish image + overlaid text (price in orange, dish name heading)
- Scrolling carousel (centered, non-looping)
- Fidelity: match card overlay style, horizontal scroll

### 6. Our Menu
- `bg-light` with top-slant-white and bottom-slant-gray clip-paths
- 2-column layout, 4 items per column (8 total)
- Each item: background image left, text right (name, description, price in orange)
- Alternating text/image order via CSS `order` property
- Fidelity: match slant separators, alternating layout, orange prices

### 7. Testimonial
- Clean section with centered heading
- Owl-carousel of testimonial slides
- Each: blockquote text, author row (round image + name + role)
- Fidelity: match blockquote style, author layout

### 8. Blog
- `bg-light` with top-slant-white
- 2 blog cards in a row
- Each: background image link, text area (title, date, excerpt, "Read More" orange button)
- Fidelity: match card style, date formatting, button color

### 9. Footer
- Newsletter subscribe section: centered heading + email input + "Subscribe" button
- 3 columns: About Us (text + social icons), Opening Hours + Contact Info, Quick Links
- Social icons: Twitter, Facebook, LinkedIn, Instagram
- Copyright line with Component Dock link
- Fidelity: match column layout, newsletter form, social icon row

## Implementation Tasks

- [ ] Create `apps/foodnest` workspace (copy base, rename package)
- [ ] Set up `index.html` with Google Fonts (Open Sans)
- [ ] Create `src/index.css` with Tailwind theme tokens (#ff7404 orange, slant utilities)
- [ ] Build `Navbar.tsx` — dark header, dropdown, mobile toggle
- [ ] Build `HeroSlider.tsx` — carousel with 2 slides, white outline CTA
- [ ] Build `Services.tsx` — 4-column icon grid with slant background
- [ ] Build `Restaurant.tsx` — heading + paragraph + 3 image row
- [ ] Build `SpecialMenu.tsx` — horizontal carousel of dish cards
- [ ] Build `OurMenu.tsx` — 2-column alternating image/text layout
- [ ] Build `Testimonials.tsx` — carousel with blockquotes and author info
- [ ] Build `Blog.tsx` — 2 blog cards with images and Read More
- [ ] Build `Footer.tsx` — newsletter + 3 columns + social + Component Dock
- [ ] Compose `App.tsx` with all sections in order
- [ ] Write tests for each component (Vitest + RTL)
- [ ] Verify 100% coverage, typecheck, lint, build
