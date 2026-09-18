# Trailquest — Implementation Tasks & Design Notes

**Source**: ColorLib "Adventure 2" → https://preview.colorlib.com/theme/adventure2/
**New name**: trailquest
**Spec**: openspec/specs/template-trailquest/spec.md

## Design notes

### Brand identity

- Primary accent: `#08c299` (green/teal) — active elements, buttons
- Active search pill: `#78d5ef` (light blue)
- Scrolled nav highlight: `#f9be37` (amber/gold)
- Fonts: Abril Fatface (display/headings), Poppins (body/UI), Work Sans (secondary)
- Buttons: pill-shaped (`border-radius: 25px–30px`), green/teal accent
- Overall aesthetic: modern travel agency, dark navbar, full-screen hero, card-based destinations

### Section structure (in order)

1. **Navbar** — Dark bg (`#1d2124`), white brand text, right-aligned nav links, hamburger on mobile, scroll effect (bg change + active link amber)
2. **Hero** — Full viewport, background image with dark overlay, centered headline "Discover A new Place" in Abril Fatface, subtitle text
3. **Search Tabs** — Overlapping hero bottom, 3 tabs (Flight/Hotel/Car Rent), each with form fields and search button, active tab in `#78d5ef`
4. **Features Intro** — Light bg, 3-column numbered items (01 Travel, 02 Experience, 03 Relax)
5. **Featured Destinations** — Heading "See our latest vacation ideas", 3 image cards with dark overlay + destination name
6. **Services** — Light bg, 4-column service cards with lucide-react icons, heading, description
7. **Popular Destinations** — Heading "Most Popular Destination", multiple destination cards (image + name + rating + price + duration + location + "Discover" link), alternating layout
8. **Counter** — Dark bg image, 4 animated stats (100K Happy Customers, 40K Destinations, 87K Hotels, 56.4K Restaurants), Abril Fatface numbers
9. **More Destinations** — Second set of destination cards
10. **Testimonials** — Heading "Our satisfied customer says", carousel with 5 cards (circular photo + quote icon, quote text, name, position)
11. **Blog** — Light bg, heading "Tips & Articles", 3 blog cards (image + tag + title + date + author + comment count)
12. **Newsletter** — Parallax bg, heading "Subscribe to our Newsletter", email input + subscribe button
13. **Footer** — Dark bg `#222831`, 4 columns (Brand+social, Information links, Experience links, Contact info), copyright with Component Dock link

### Fidelity notes

- Hero background image: use `https://picsum.photos/seed/trailquest-hero/1920/1080`
- Destination images: use `https://picsum.photos/seed/trailquest-dest-<n>/600/400`
- Blog images: use `https://picsum.photos/seed/trailquest-blog-<n>/600/400`
- Testimonial photos: use `https://picsum.photos/seed/trailquest-person-<n>/200/200`
- Counter background: use `https://picsum.photos/seed/trailquest-counter/1920/800`
- Newsletter parallax: use `https://picsum.photos/seed/trailquest-newsletter/1920/600`
- Service icons use lucide-react (Ship, Compass, Map, Globe)
- Search tabs use Bootstrap pill navigation — replicate with Tailwind + state management
- Destination cards alternate layout (image-top vs image-bottom) — use flex-col / flex-col-reverse
- Counter animation uses JS counter effect — implement with `useEffect` + `IntersectionObserver`
- Testimonial carousel uses Owl Carousel — implement as CSS carousel
- Newsletter section uses parallax background — implement with CSS `background-attachment: fixed`
- Footer social icons use lucide-react (Twitter, Facebook, Instagram)

### Implementation order

1. Scaffold app from simplest existing app (copy + rename)
2. Set up `index.html` with Google Fonts (Abril Fatface, Poppins, Work Sans) + Tailwind config
3. Build Navbar component (dark, sticky, scroll effect, mobile hamburger)
4. Build Hero component (full viewport bg image, overlay, headline, subtitle)
5. Build SearchTabs component (3 tabs with forms)
6. Build FeaturesIntro component (3 numbered items)
7. Build FeaturedDestinations component (3 image cards)
8. Build Services component (4 service cards)
9. Build DestinationCard component (reusable, supports alternating layout)
10. Build PopularDestinations section (heading + multiple DestinationCards)
11. Build Counter component (4 animated stats on dark bg)
12. Build Testimonials component (carousel with 5 cards)
13. Build Blog component (3 blog cards)
14. Build Newsletter component (parallax bg, form)
15. Build Footer component (4 columns, copyright with Component Dock link)
16. Compose all sections in App.tsx
17. Write tests for each component (100% coverage)
18. Verify: typecheck, lint, test:coverage, build
