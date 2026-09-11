# ListFinder — Implementation Notes

## Source
- ColorLib: DirectoryAds
- Preview: https://preview.colorlib.com/theme/directoryads/
- Deploy: https://listfinder.free.componentdock.com

## Section order (implement in this sequence)

1. **Navbar** — `Navbar.tsx`
   - Sticky top, dark transparent → solid on scroll
   - Logo: "ListFinder" text (left-aligned)
   - Nav links: Home (active), Ads, About (dropdown with 4 sub-items), Blog, Contact
   - Right side: "Log In" link + "Register" primary badge button
   - Mobile: hamburger menu toggle (icon-menu), slide-in menu

2. **Hero** — `Hero.tsx`
   - Full-width background image (use picsum.photos/seed/listfinder-hero/1920/800)
   - Dark overlay: rgba(0, 0, 0, 0.3)
   - Centered content: heading + subtitle + search form + trending tags
   - Search form: 4-column row (xl) → stacked (mobile)
     - Keyword input: "What are you looking for?"
     - Location input: with map-pin icon, placeholder "Location"
     - Category select: "All Categories", Real Estate, Books & Magazines, Furniture, Electronics, Cars & Vehicles, Others
     - Search button: btn-primary, rounded, full-width on mobile
   - Trending search: inline heading + tag links (iPhone, Cars, Flowers, House)
   - AOS fade-up animations with staggered delays

3. **Featured Ads** — `FeaturedAds.tsx`
   - Section: bg-light (#f8f9fa)
   - Heading: "Featured Ads" (h5, text-black)
   - Carousel: horizontal scroll with snap, 4 visible on desktop, 1 on mobile
   - Card structure (`.listing`): box-shadow, 7px radius, white bg
     - Thumbnail: 230px wide (flex: 0 0 230px), cover, 7px left radius
     - Content: padding 20px
       - Category badge: 11px font, #e9ecef bg, 30px radius pill
       - Heart bookmark: top-right, 30px circle, hover → #f23a2e
       - Title: h3, 16px
       - Address: 13px
       - Star rating: 4 filled (text-warning) + 1 empty (text-secondary), review count

4. **Popular Categories** — `PopularCategories.tsx`
   - Section: default (white bg)
   - Heading: "Popular Categories" (h2, font-weight-light, text-primary)
   - Subtitle: "Lorem Ipsum Dolor Sit Amet" (color-black-opacity-5)
   - Grid: 6 cards in `.overlap-category` container (white bg, 10px radius, z-index 20)
   - Each card (`.popular-category`): white bg, 7px radius, 30px padding, centered
     - Icon: 45px font-size (use lucide-react icons)
     - Caption: 15px, #666666 color
     - Count pill: #e9ecef bg, 30px radius, 14px font
   - Hover: bg → #2f89fc, scale 1.09, blue box-shadow, white text
   - Categories + lucide icon mapping:
     - Cars & Vehicles → Car
     - Furniture → Armchair
     - Real Estate → Home
     - Books & Magazines → BookOpen
     - Electronics → Tv
     - Other → Grid

5. **Trending Today** — `TrendingToday.tsx`
   - Section: bg-light
   - Heading: "Trending Today" (h2, font-weight-light, text-primary)
   - 2-column grid of horizontal listing cards (same card as Featured Ads)
   - Cards are horizontal (not vertical like carousel)

6. **Testimonials** — `Testimonials.tsx`
   - Section: bg-white
   - Heading: "Testimonials" (h2, font-weight-light, text-primary)
   - Carousel of testimonial items
   - Each: centered avatar (rounded), name, blockquote with quotes
   - Use carousel dots/prev-next navigation

7. **Our Blog** — `BlogPosts.tsx`
   - Section: bg-light
   - Heading: "Our Blog" (h2, font-weight-light, text-primary) + subtitle "See Our Daily News & Updates"
   - 3-column grid of blog post cards
   - Each card: image (rounded), title link, meta (author, date, category tag), excerpt
   - "View All Posts" button centered below (btn-primary, rounded)

8. **Newsletter** — `Newsletter.tsx`
   - Section: bg-primary, py-5
   - 2-column layout:
     - Left: heading "Newsletter" (h2, white) + description (white 70% opacity)
     - Right: form with email input (white border-bottom, no bg) + Subscribe button
   - Input placeholder: italic, white 90% opacity

9. **Footer** — `Footer.tsx`
   - Dark background: #333333, padding 4em/8em
   - 2-row layout:
     - Row 1:
       - Col 9: 3 sub-columns
         - About (6 cols): heading + paragraph
         - Navigations (3 cols): heading + list (About Us, Services, Testimonials, Contact Us)
         - Follow Us (3 cols): heading + social icons (Facebook, Twitter, Instagram, LinkedIn)
       - Col 3: Search form (input + button)
     - Row 2: Copyright with Component Dock link, border-top

## Key design decisions

- Font: Nanum Gothic (Google Fonts) — weights 400, 700, 800
- Primary: #2f89fc throughout — buttons, headings, hover states, newsletter bg
- Cards: 7px border-radius, subtle box-shadow, white background
- Badges/pills: 30px border-radius (fully rounded), #e9ecef background
- Hero: dark overlay on background image, centered search form
- Mobile: hamburger nav, stacked layouts, single-column grids
- No parallax effects (simplify to static background)
- Replace owl.carousel with CSS scroll-snap or simple React carousel
- Replace Bootstrap grid with Tailwind grid utilities
- Use picsum.photos for placeholder images with deterministic seeds

## Component structure

```
apps/listfinder/
  src/
    App.tsx           — compose all sections
    main.tsx          — entry
    index.css         — Tailwind + theme tokens
    components/
      Navbar.tsx
      Hero.tsx
      FeaturedAds.tsx
      PopularCategories.tsx
      TrendingToday.tsx
      Testimonials.tsx
      BlogPosts.tsx
      Newsletter.tsx
      Footer.tsx
```
