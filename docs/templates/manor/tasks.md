# Manor — Implementation Tasks & Design Notes

Source: ColorLib The Estate (https://preview.colorlib.com/theme/theestate/)
New name: manor (apps/manor)

## Section-by-section fidelity notes

### 1. Hero
- Full-viewport (100vh) background image slider
- White uppercase headline: "find your home" (Montserrat or Open Sans 700, ~92px)
- Navigation arrows (left/right) for slider
- Use carousel-like behavior (static hero image acceptable for v1)

### 2. Header (Navbar)
- Fixed position, transparent initially, navy `#0e1d41` on scroll
- Logo: "manor" text with Montserrat bold
- Nav links: home, about us, listings, news, contact (all lowercase in original)
- Phone number displayed right-aligned
- Hamburger menu for mobile
- Border-bottom: 1px solid `#aeaead` before scroll

### 3. Search Box
- Overlaps hero with negative margin-top (-161px in original)
- Dark navy `#0e1d41` background
- Title: "search your home" with magnifying glass icon
- Arrow/circle: "Search it here"
- Form: two rows of dropdowns (5+6 columns)
  - Row 1: keywords, property ID, property status, location, property type
  - Row 2: bedrooms, bathrooms, min price, max price, min sq ft, max sq ft
  - Plus search button
- Specific features section with checkboxes

### 4. Featured Properties
- Section title: "featured properties" / subtitle: "See our best offers"
- 3 equal-width cards (col-lg-4)
- Each card: image, "featured" orange badge, title (link), description, rooms grid (5 items: bedrooms, bathrooms, area, patio, garage with icons), amenity tags (Hottub, Swimming Pool, Garden, Patio, Hard Wood Floor)
- Price box: "For Sale" label + price, floating below card with orange tag icon

### 5. Testimonials
- Parallax background image
- Section title: "clients testimonials" / subtitle: "See our best offers"
- Carousel of testimonials, each with: quote text, user avatar placeholder, user name, user title ("Client in California")
- Text centered

### 6. Workflow
- Title: "see how we operate" / subtitle: "What you need to do"
- 3 steps in a row (col-lg-4 each)
- Each: concentric circle illustration (outer `#edeff4` semi-transparent, inner `#e1e5ec`), numbered (01, 02, 03), icon image, title, description
- Steps: Choose a Location, Find the Perfect Home, Move in your new life
- Rocket illustration floating above the steps

### 7. Cities
- Title: "cities clients prefer" / subtitle: "What you need to do"
- Carousel of city cards: image with search icon overlay, city name below
- Cities: Miami, Dublin, Vienna, Marbella, New York, Geneva
- Navigation arrows

### 8. CTA
- Light gray `#e7eaf0` background with parallax image overlay (32% opacity)
- Heading: "Do you want to talk with one of our real estate experts?" (orange highlight on "real estate experts")
- Phone number button: orange `#fd784f`, white text, right-aligned

### 9. Newsletter
- Dark navy `#0e1d41` background
- Two-column layout:
  - Left: "subscribe to our newsletter" / "Get the latest offers" + email input (`#4a5b85` bg, orange text) + orange subscribe button
  - Right: weekly offer promo card with background image

### 10. Footer
- Dark navy `#07122c` background
- 4 columns:
  1. Logo + social icons (Pinterest, Facebook, Twitter, Dribbble, Behance) + about text
  2. Useful links (Listings, Favorite Cities, Clients Testimonials, Featured Listings, Properties on Offer, Services, News, Our Agents)
  3. Contact form (name, email, message textarea, send button)
  4. Contact info (address, phone, email, website)
- Footer MUST link to https://www.componentdock.com/

## Implementation tasks

- [ ] Set up apps/manor workspace (copy boilerplate, rename package, register lockfile)
- [ ] Create index.css with Tailwind + @theme tokens (brand: #fd784f, navy: #0e1d41, etc.)
- [ ] Load Open Sans + Montserrat via Google Fonts link in index.html
- [ ] Build Hero component (background image, headline, nav arrows)
- [ ] Build Navbar component (fixed, transparent→navy, logo, nav links, phone, hamburger)
- [ ] Build SearchBox component (form with dropdowns, checkboxes, search button)
- [ ] Build FeaturedProperties component (3 cards with rooms, tags, price)
- [ ] Build Testimonials component (parallax bg, carousel, quote cards)
- [ ] Build Workflow component (3 steps with circles, rocket illustration)
- [ ] Build Cities component (carousel of city cards)
- [ ] Build CTA component (heading with orange highlight, phone button)
- [ ] Build Newsletter component (email form + weekly offer card)
- [ ] Build Footer component (4 columns, social icons, contact form, info)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests for each component (100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build pass
