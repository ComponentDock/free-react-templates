# EcoGrove — Implementation Notes

Source: ColorLib Ecoverde (https://colorlib.com/wp/template/ecoverde/)
Preview: https://preview.colorlib.com/theme/ecoverde/

## Section Order (top to bottom)

1. Navbar (dark bg, logo + nav links + hamburger)
2. Hero (background image, overlay, headline, blurb, CTA button)
3. Search bar (dark navy bg, 4 form fields, overlaps hero bottom)
4. Services row (green bg, 4 feature cards with icons)
5. Featured Properties (carousel of property cards)
6. Cities grid (3 city cards with background images + overlay text)
7. How it works (dark bg, 4 numbered steps)
8. Stats counter (parallax bg, 4 stat items)
9. Testimonials (light bg, carousel of quotes)
10. Our Agents (4 agent cards with photos)
11. Recent Blog (4 blog cards with images)
12. Footer (dark bg, brand + link columns + social + Component Dock)

## Fidelity Notes

### Navbar
- Dark background, flex row: logo left, nav links center
- Nav items: Home, About, Properties, Blog, Agents, Contact
- Hamburger icon for mobile (hidden on desktop)
- Becomes sticky on scroll

### Hero
- Full-width, background image with dark overlay (opacity)
- Headline: "Find Perfect House From Your Area." (large, white, bold)
- Blurb paragraph below headline
- "View all properties" blue button (#007bff)
- Height ~850px on desktop

### Search Bar
- Positioned to overlap hero bottom (negative margin)
- Dark navy background (#21243d) with box-shadow
- 4 form fields in a row: Keyword (text input), Property Type (select),
  Price Range (select), Location (select)
- Each field has a label and icon (search/chevron-down)
- Search button (not visible in source, implied submit)

### Services Row
- Green background (#24A148) across full width
- 4 equal columns, each with icon (flaticon), heading, description
- Cards: "Trusted by Thousands", "Wide Range of Properties",
  "Financing Made Easy", "Locked in Pricing"
- Alternating green shades for visual depth (#219442 darken, #229944 lighten)
- Responsive: stacks on mobile

### Featured Properties
- Carousel (owl-carousel in original, use embla in React)
- Property cards with:
  - Background image (cover)
  - Price badge overlay (top-left or top area)
  - "Sale" or "Rent" badge (colored)
  - Price text (strikethrough old price for rent)
  - Bed/bath/sqft icons row (flaticon)
  - Property name (heading link)
  - Location text
  - Link icon button
  - Agent row: photo + name + "2 weeks ago" timestamp

### Cities Grid
- 3 equal columns
- Each city card: background image, dark overlay
- Overlay text: city name (large), property count (smaller)
- Cities: Miami (24), Chicago (20), Illinois (15)
- Hover effect on cards

### How It Works
- Dark background section (bg-darken)
- "Work flow" subheading (green accent #24A148)
- "How it works" heading
- 4 steps in a row:
  - Numbered badge (01-04) with blob SVG icon
  - Step title: "Evaluate Property", "Meet Your Agent",
    "Close the Deal", "Have Your Property"
  - Description text
- Responsive: stacks on mobile

### Stats Counter
- Parallax background image
- 4 stat items in a row:
  - "1000" — Area Population
  - "2500" — Total Properties
  - "500" — Average House
  - "67" — Total Branches
- Right border separators between items (on desktop)
- Animated counter (count-up on scroll)

### Testimonials
- Light gray background (#f8f9fa)
- "Testimonial" subheading (green accent)
- "Happy Clients" heading
- Carousel of testimonial cards:
  - Quote icon (fa-quote-left)
  - Quote text paragraph
  - Client photo (circular)
  - Client name + position

### Our Agents
- White background
- "Agents" subheading, "Our Agents" heading
- 4 agent cards in a row:
  - Agent photo (full-width, rounded corners)
  - Overlay description: name + "Listing" + "10 Properties"
  - Agents: Carlos Henderson, Mike Bochs, Jessica Moore, Sarah Geronimo

### Recent Blog
- "Recent Blog" heading
- 4 blog cards in a row:
  - Background image (cover, rounded corners)
  - Date + author + comment count (meta bar)
  - Article title

### Footer
- Very dark background (#0f101c)
- 5 columns:
  - Brand: "EcoGrove" + description + social icons (Twitter, Facebook, Instagram)
  - Community: Search Properties, For Agents, Reviews, FAQs
  - About Us: Our Story, Meet the team, Careers
  - Company: About Us, Press, Contact, Careers
  - Have a Questions?: contact info (address, phone, email)
- Social icons row under brand
- Component Dock link at bottom

## Component Mapping (React)

| Original class       | React component     | Notes                          |
|---------------------|---------------------|--------------------------------|
| `.navbar`           | `Navbar.tsx`        | Dark bg, sticky, hamburger     |
| `.hero-wrap`        | `Hero.tsx`          | Bg image, overlay, CTA         |
| `.search-wrap-1`    | `SearchBar.tsx`     | 4-field form, dark bg          |
| `.services-bg`      | `Services.tsx`      | 4 feature cards, green bg      |
| `.carousel-properties` | `FeaturedProperties.tsx` | Carousel, property cards |
| `.search-place`     | `CitiesGrid.tsx`    | 3 city cards with overlays     |
| `.services-section.bg-darken` | `HowItWorks.tsx` | 4 steps, dark bg    |
| `.ftco-counter`     | `StatsCounter.tsx`  | 4 counters, parallax bg        |
| `.testimony-section` | `Testimonials.tsx`  | Carousel, quote cards          |
| `.ftco-agent`       | `Agents.tsx`        | 4 agent cards                  |
| `blog-entry`        | `RecentBlog.tsx`    | 4 blog cards                   |
| `.ftco-footer`      | `Footer.tsx`        | Dark bg, 5 columns             |

## Design Token Summary

| Token              | Value        | Usage                              |
|-------------------|-------------|-------------------------------------|
| Green primary      | `#24A148`   | Services bg, subheading accent     |
| Green darken       | `#219442`   | Alternating services card          |
| Green lighten      | `#229944`   | Alternating services card          |
| Bootstrap blue     | `#007bff`   | Buttons, bg-primary                |
| Navy               | `#21243d`   | Search bar background              |
| Footer dark        | `#0f101c`   | Footer background                  |
| Light bg           | `#f8f9fa`   | Testimonials section               |
| Text primary       | `#000000`   | Headings, body text                |
| Text muted         | `#6c757d`   | Secondary text                     |
| Font               | Nunito Sans | Google Fonts, all body text        |
| Button radius      | ~4px        | Bootstrap default                  |
