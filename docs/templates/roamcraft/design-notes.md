# Roamcraft — Prep Notes

Source: ColorLib Pacific (https://preview.colorlib.com/theme/pacific/)

## Implementation Task Outline

### Phase 1: Scaffold
1. Copy simplest existing app (e.g. `apps/abjure`) to `apps/roamcraft`
2. Rename package to `@free-react-templates/roamcraft`
3. Update `public/CNAME` → `roamcraft.free.componentdock.com`
4. Update `package.json` homepage → `https://roamcraft.free.componentdock.com`
5. Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Theme Tokens (`src/index.css`)
- `@import "tailwindcss"` + `@source` via `injectUiSource()`
- `@theme` block with:
  - `--color-brand: #f15d30` (primary orange)
  - `--color-brand-dark: #c7390d` (darker orange for badges/hover)
  - `--color-body-text: #212529` (headings, paragraphs)
  - `--color-muted: rgba(0,0,0,0.4)` (placeholder text)
  - `--color-label: rgba(0,0,0,0.8)` (form labels)
  - `--color-dark-overlay: rgba(0,0,0,0.3)` (hero, video, testimonial overlays)
  - `--color-dark-bg: #000000` (hero overlay base)
- Google Fonts link in `index.html`: Poppins (300, 400, 500, 600, 700, 800) + Arizonia (400)

### Phase 3: Components (section order)

#### Navbar.tsx
- Dark bg, absolute positioned over hero
- Brand text: "Roamcraft" (bold, white, 24px) + "Travel Agency" (small, orange, uppercase, letter-spacing 1px)
- Nav links right-aligned: Home, About, Destination, Hotel, Blog, Contact
- Mobile: hamburger icon, slide-down menu
- Use `lucide-react` Menu icon

#### Hero.tsx
- Fullscreen height (`min-h-screen`), bg image via `picsum.photos/seed/roamcraft-hero/1920/1080`
- Dark overlay: `bg-black/30` (opacity 0.3)
- Left content (col-md-7):
  - Subheading "Welcome to Roamcraft" — Arizonia font, 30px, orange
  - Heading "Discover Your Favorite Place with Us" — white, 55px, bold
  - Tagline paragraph — white/0.9, 16px
- Right: circular video play button (80px, white bg, orange play icon, pulse animation)
- Use `lucide-react` Play icon

#### SearchForm.tsx
- Floating over hero bottom (`-mt-24` relative to hero)
- Tab pills: "Search Tour" (active, orange bg) / "Hotel" (inactive)
- White bg, rounded-lg, shadow-xl, border-radius 7px
- Form row with 5 fields:
  - Destination (text input with search icon)
  - Check-in date (text input with calendar icon)
  - Check-out date (text input with calendar icon)
  - Price Limit (select dropdown with chevron-down icon)
  - Search button (orange bg, white text, full-width)
- Labels: uppercase, bold, 14px, orange color
- Use `lucide-react` Search, Calendar, ChevronDown icons

#### Services.tsx
- 2-col layout:
  - Left (col-md-6): "Welcome to Roamcraft" subheading (Arizonia, orange) + heading "It's time to start your adventure" + paragraphs + "Search Destination" CTA (orange btn)
  - Right (col-md-6): 2×2 grid of 4 service cards
- Each service card:
  - Bg image via `picsum.photos/seed/roamcraft-svc-{n}/600/400`
  - Dark overlay on hover
  - Centered icon + title + description
  - Service items: Activities (Paragliding icon), Travel Arrangements (Route icon), Private Guide (Users icon), Location Manager (Map icon)
- Use `lucide-react` Paragliding, Route, Users, Map icons

#### SelectDestination.tsx
- Parallax bg image: `picsum.photos/seed/roamcraft-dest-bg/1920/800`
- Dark overlay
- Heading "Select Your Destination" (white text)
- Carousel of 5 destination cards:
  - Each: bg image, 320px height, rounded-lg
  - Orange label badge at top (destination name) with triangle pseudo-elements
  - Tour count badge at bottom-right (orange bg, rounded-l)
- Destinations: Philippines (8 Tours), Canada (2 Tours), Thailand (5 Tours), Australia (5 Tours), Greece (7 Tours)
- Use `picsum.photos/seed/roamcraft-place-{n}/400/320`

#### TourDestinations.tsx
- Heading "Tour Destination" with "Destination" subheading
- 3×2 grid of 6 tour cards:
  - Each card: bg image (300px height), orange price badge ("$550/person") at top-left with triangle pseudo-elements
  - White content area below: "X Days Tour" label, tour name, location with map pin, amenity icons (shower, bed, mountain/beach)
  - Box shadow: `0px 10px 23px -8px rgba(0,0,0,0.11)`
- Use `picsum.photos/seed/roamcraft-tour-{n}/400/300`
- Use `lucide-react` MapPin, ShowerHead (or Droplets), Bed, Mountain, Umbrella icons

#### VideoBanner.tsx
- Full-width bg image: `picsum.photos/seed/roamcraft-video/1920/600`
- Dark overlay: `bg-black/30`
- Centered circular play button (white bg, orange icon, pulse animation)

#### AboutUs.tsx
- 2-col layout:
  - Left: bg image `picsum.photos/seed/roamcraft-about/600/600`
  - Right: "About Us" subheading (Arizonia, orange) + heading "Make Your Tour Memorable and Safe With Us" + paragraphs + "Book Your Destination" CTA (orange btn)

#### Testimonials.tsx
- Bg image: `picsum.photos/seed/roamcraft-testi/1920/800`
- Dark overlay: `bg-black/30`
- Heading "Tourist Feedback" with "Testimonial" subheading (white Arizonia)
- Carousel of testimonial cards:
  - 5 orange stars (use `lucide-react` Star)
  - Quote paragraph (white text)
  - User avatar: `picsum.photos/seed/roamcraft-person-{n}/100/100`
  - Name + position text

#### Blog.tsx
- Heading "Recent Post" with "Our Blog" subheading
- 3-card grid:
  - Each: bg image `picsum.photos/seed/roamcraft-blog-{n}/400/250`
  - Date badge (day number + month + year)
  - Heading "Most Popular Place In This World"
  - "Read more" CTA (orange btn)

#### CtaBanner.tsx
- Full-width bg image: `picsum.photos/seed/roamcraft-cta/1920/400`
- Dark overlay: `bg-black/30`
- Centered content: heading "We Are Roamcraft A Travel Agency" + paragraph + "Ask For A Quote" CTA (orange btn)

#### Footer.tsx
- Bg image: `picsum.photos/seed/roamcraft-footer/1920/600`
- Dark overlay: `bg-black/30`
- 4-column layout:
  - Col 1: "About" heading + paragraph + social icons (Twitter, Facebook, Instagram from `lucide-react`)
  - Col 2: "Information" heading + link list (Online Enquiry, General Enquiries, Booking Conditions, Privacy and Policy, Refund Policy, Call Us)
  - Col 3: "Experience" heading + link list (Adventure, Hotel and Restaurant, Beach, Nature, Camping, Party)
  - Col 4: "Have a Questions?" heading + contact info (address, phone, email with icons)
- Copyright line at bottom
- MUST include ComponentDock link

### Phase 4: App.tsx Assembly
- Compose all sections in order: Navbar → Hero → SearchForm → Services → SelectDestination → TourDestinations → VideoBanner → AboutUs → Testimonials → Blog → CtaBanner → Footer

### Phase 5: Testing (TDD)
- One `describe` per component
- Test renders, text content, responsive behavior
- 100% coverage required

### Phase 6: Verification
- `scripts/verify-app.sh roamcraft` passes
- Push to main

## Design Fidelity Notes

- **Color palette:** Warm orange brand (#f15d30) with darker variant (#c7390d) for pseudo-element borders. Used consistently across buttons, badges, subheadings, form labels, star ratings, and hover states.
- **Typography:** Two-font system — Poppins (body, weights 300–800) and Arizonia (cursive, decorative subheadings only). Arizonia is used for "Welcome to Roamcraft", "About Us", "Testimonial", "Our Blog", section subheadings.
- **Button style:** Primary buttons are rectangular (border-radius 4px) with orange bg and white text. On hover, they invert to transparent bg with orange text and orange border. Search button is full-width within the form.
- **Hero:** Full-height with dark overlay at 0.3 opacity. The video play button is a white circle (80px) with orange play icon and a pulse CSS animation.
- **Search form:** Floating card that overlaps the hero bottom by -100px. Has tab pills (orange for active, white for inactive) and a white rounded card with shadow containing the form fields. Labels are uppercase and orange.
- **Service cards:** Image-based cards in a 2×2 grid with icon, title, and description overlay. Each has a different background image.
- **Destination cards:** Rounded (5px) with background image cover, orange label badge at top with CSS triangle pseudo-elements (using border tricks), and tour count badge at bottom-right.
- **Tour cards:** White card with shadow, image on top (300px), orange price badge with triangle pseudo-elements, and content area with amenities icons.
- **Video/CTA banners:** Full-width background images with dark overlay (0.3 opacity) and centered content.
- **Testimonials:** Background image with dark overlay, carousel of cards with star ratings, quote, and user info.
- **Footer:** Background image with dark overlay, 4-column layout with social icons, link lists, and contact info. Copyright at bottom.
- **Parallax:** Used on Select Destination section background.
- **Responsive:** Hamburger nav, stacked columns, reduced font sizes on mobile.
