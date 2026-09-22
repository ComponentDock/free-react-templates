# CoralHaven (ColorLib IslaGrande) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-coralhaven`. Recreation name: **CoralHaven** (NEW name —
> the ColorLib source keeps its name "IslaGrande").

## Source mapping

- **ColorLib item:** "Islagrande" (TEMPLATES.md line 1914; section "## Hotel (230)" region).
- **Source URL:** https://colorlib.com/wp/template/islagrande/
- **Preview URL:** https://preview.colorlib.com/theme/islagrande/ (verified reachable, 53KB HTML)
- **Preview CSS:** `css/style.css` (242KB — includes Bootstrap 4.1 + custom styles)

## Reference research (done — do not redo)

### Screenshot (1200×946 AVIF)

Browsed visually. Split-screen hero: left half is solid coral/salmon pink (#fb929e) with white text "Welcome to IslaGrande Hotel" / "A Perfect Place To Stay" / "Make A Booking" CTA button. Right half is an aerial beach/hotel photo (owl-carousel slider). Below the hero: a coral pink booking form strip with check-in, check-out, room type, adults, children selects + Reserve button. The overall aesthetic is tropical luxury hotel with a warm coral/salmon color palette. Navbar is dark/transparent with white text.

### Live preview DOM structure (section order)

1. **Navbar** — dark, transparent, brand "IslaGrande", links: Home, About, Amenities, Blog, Rooms, Restaurant, Contact
2. **Hero (split-screen)** — left: solid coral pink bg, h2 "Welcome to IslaGrande Hotel", h1 "A Perfect Place To Stay", btn-custom "Make A Booking"; right: owl-carousel slider with 4 beach/hotel images
3. **Booking Form** — coral pink full-width strip, "Reserve A Perfect Room" heading, horizontal form: check-in date, check-out date, room type select, adults select, children select, Reserve button
4. **Services** — 4 cards in row: 25/7 Front Desk (reception bell icon), Restaurant Bar (serving dish), Transfer Services (car), Spa Suites (spa) — each with icon, heading, description, "Read More" link
5. **Rooms** — light gray bg, "Book A Room" heading, owl-carousel of 6 room cards: Suite ($100), Family ($140), Deluxe ($130), Classic ($200), Superior ($120), Luxe ($500) — each with bg image, name, 4.5-star rating, price, "Reserve A Room" link
6. **Restaurant Menu** — "Our Restaurants" heading, tabbed: Main Dish (3 items), Drinks (3 items), Desserts (3 items) — each with food image, name, rating, description, price, "Add to cart"
7. **Video/About** — light gray bg, video thumbnail + play button (left), "Welcome to islaGrande Hotel" / "Watch Our Video" + text + social icons (right)
8. **Testimonials** — "Our satisfied customer says" heading, owl-carousel of review cards: circular photo, star rating, quote, name, location
9. **Blog** — light gray bg, "Our Latest Blog" heading, 3 blog cards: image, date/author/comments meta, heading
10. **Counter/Stats** — parallax bg image, 4 stats: 50 Hotel Branches, 20000 Happy Guests, 100 Rooms, 100 Destinations (animated count-up)
11. **Footer** — coral pink #fa6b7b bg, 4-column: About + social, Company links, Services links, Contact info + copyright

### Design tokens extracted

| Token | Value | Usage |
|-------|-------|-------|
| coral-pink | `#fb929e` | Nav pill active, buttons, highlights, booking form bg |
| footer-pink | `#fa6b7b` | Footer background |
| primary-cyan | `#78d5ef` | Link color, Bootstrap primary override |
| primary-hover | `#34c0e7` | Link hover |
| dark | `#343a40` | Footer text, dark elements |
| body-text | `#212529` | Body text |
| muted | `#6c757d` | Secondary text |
| white | `#ffffff` | Hero text, button text |
| light-bg | `#f8f9fa` | Rooms, video, blog section backgrounds |
| heading-font | Poppins | h1, h2, h3, service headings |
| serif-font | Playfair Display | Hero h1, subheading accents |
| body-font | Work Sans | Body text, paragraphs |

### Key implementation notes

- **Split-screen hero**: This is the most distinctive feature. Left 50% is solid coral pink with text overlay; right 50% is an image carousel. Use CSS flex/grid for the split layout.
- **Booking form**: Horizontal form strip spanning full width, coral pink background. Use native date inputs or a date picker library.
- **Restaurant tabs**: Use state management for tab switching (Main Dish / Drinks / Desserts). Each tab shows 3 menu items.
- **Room carousel**: Can simplify to a responsive grid (3×2) instead of a carousel for better mobile UX, or keep carousel with owl-carousel equivalent.
- **Counter animation**: Use Intersection Observer + animated count-up when stats section scrolls into view.
- **Parallax**: The counter section uses `data-stellar-background-ratio="0.5"` for parallax effect — implement with CSS `background-attachment: fixed` or a lightweight parallax library.
- **Icons**: Replace flaticon icons (reception-bell, serving-dish, car, spa) with lucide-react equivalents.
- **Star ratings**: Use lucide Star and StarHalf icons instead of flaticon icon-star.
- **Social icons**: Use lucide-react for Twitter, Facebook, Instagram (drop Google+ as it's defunct).
- **Image placeholders**: Use `https://picsum.photos/seed/coralhaven-<n>/<w>/<h>` for all images.

## Task outline

- [ ] Set up app scaffold (copy simplest existing app, rename to coralhaven)
- [ ] Create Navbar component (dark transparent, brand, links, mobile toggle)
- [ ] Create Hero component (split-screen: coral pink text left + image carousel right)
- [ ] Create BookingForm component (horizontal form on coral pink strip)
- [ ] Create Services component (4 cards with icons, hover effects)
- [ ] Create Rooms component (6 room cards with carousel or grid)
- [ ] Create RestaurantMenu component (tabbed: Main Dish, Drinks, Desserts)
- [ ] Create VideoAbout component (video thumbnail + text + social links)
- [ ] Create Testimonials component (carousel of review cards)
- [ ] Create Blog component (3 blog post cards)
- [ ] Create CounterStats component (animated count-up on parallax bg)
- [ ] Create Footer component (4-column, coral pink bg, Component Dock link)
- [ ] Compose App.tsx with all sections in correct order
- [ ] Write tests for all components (100% coverage)
- [ ] Run verification gate (typecheck + lint + test:coverage + build)
- [ ] Update TEMPLATES.md, public/CNAME, package.json homepage
- [ ] Commit and open PR
