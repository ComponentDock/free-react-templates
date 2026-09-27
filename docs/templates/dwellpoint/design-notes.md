# Dwellpoint — Design Notes & Task Outline

## Source

- **ColorLib:** SEL (https://colorlib.com/wp/template/sel/)
- **Preview:** https://preview.colorlib.com/theme/sel/
- **Category:** Real Estate / Property

## Section order (implement in this sequence)

1. **Header** — Sticky navbar with logo, nav links, dropdown menus (Pages, Blog), search icon
2. **Hero Banner** — Full-width background image, centered text (subtitle + headline + CTA)
3. **Advanced Search** — White card form: 4 select dropdowns, 2 range sliders, submit button
4. **Welcome** — 2-column: image left, text + 3 stat boxes right
5. **Properties** — 3-column card grid with image, title, tag pills, price, CTA
6. **Testimonials** — 2-column: left text block + right carousel
7. **Cities** — 4-column image grid with overlaid centered buttons
8. **Features** — 3x2 grid with icon + title + description
9. **Client Logos** — Horizontal carousel
10. **Footer** — 4 columns + copyright bar

## Component breakdown

| Component    | Files                          | Notes                                                |
| ------------ | ------------------------------ | ---------------------------------------------------- |
| Header       | `src/components/Header.tsx`    | Sticky, logo left, nav center/right, search icon     |
| Hero         | `src/components/Hero.tsx`      | bg image, subtitle, headline, CTA button             |
| SearchForm   | `src/components/SearchForm.tsx`| 4 dropdowns, 2 range sliders, submit                 |
| Welcome      | `src/components/Welcome.tsx`   | 2-col, image + text + 3 stat boxes with icons        |
| Properties   | `src/components/Properties.tsx`| 3-col grid, PropertyCard sub-component               |
| PropertyCard | `src/components/PropertyCard.tsx` | Image, title, tags, price, CTA                  |
| Testimonials | `src/components/Testimonials.tsx` | Left text + right carousel                       |
| Cities       | `src/components/Cities.tsx`    | 4-col image grid, button overlays                    |
| Features     | `src/components/Features.tsx`  | 3x2 grid, icon + title + desc                        |
| ClientLogos  | `src/components/ClientLogos.tsx` | Horizontal logo carousel                          |
| Footer       | `src/components/Footer.tsx`    | 4-col: About, Newsletter, Instagram, Social          |

## Fidelity notes

### Header
- Logo on left, nav links in center/right, search icon far right
- Sticky on scroll with white background
- Nav links: Home, About, Properties, Team, Pages (dropdown), Blog (dropdown), Contact
- Dropdown items: Pages → Elements; Blog → Blog, Blog Details

### Hero Banner
- Full-width background image
- Subtitle (small text above headline): "The joy of home owning"
- Headline: "Find Your New Home"
- Single CTA button: "Learn More"

### Advanced Search
- White card/form overlay positioned below hero
- 4 selects: Locations, Property Type, Bedrooms, Bathrooms
- 2 range sliders: Price Range ($200 min), Property Area (50sqm min)
- Submit button: "Search Property"
- Note: use native HTML range inputs for the sliders (no jQuery UI dependency)

### Welcome
- 2-column layout (image left, content right)
- Heading: "Welcome to SEL Center" (will rename for Dwellpoint branding)
- Description paragraph
- 3 stat boxes in a row:
  - Icon (database) + "$2.5M" + "Total Donation"
  - Icon (book) + "1465" + "Total Projects"
  - Icon (users) + "3965" + "Total Volunteers"

### Properties
- Section heading: "Our Top Rated Properties"
- 3 property cards, each with:
  - Top image (full-width of card)
  - Title link (e.g. "04 Bed Duplex")
  - Tag pills row (04 Beds, 03 Baths, 750 sqm, ✓Pool, ✗Bar, ✗Pool)
  - Footer row: price "Total: $3.5M" left, "For Sale" button right

### Testimonials
- Left column (col-4): "Client's Feedback" heading + description paragraph
- Right column (col-8): owl-carousel style slider
  - Each item: avatar image, quote text, name, role title

### Cities
- Section heading: "Demandable Cities"
- 4 image cards in a row
- Each card: background image with centered "Book Now" button overlay (absolutely positioned)

### Features
- Section heading: "Why we are the best"
- 3x2 grid of feature items
- Each: icon (lnr), h4 title, description paragraph
- Items: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews

### Client Logos
- Section heading: "Reliable Customers"
- Horizontal scrolling carousel of 5 client logo images

### Footer
- Dark background (#04091e)
- 4 columns:
  - About Us: heading + description
  - Newsletter: heading + email input + subscribe button
  - Instagram Feed: heading + 8 thumbnail images in a flex grid
  - Follow Us: heading + social icons (Facebook, Twitter, Dribbble, Behance)
- Copyright bar at bottom

## Key implementation decisions

1. **Range sliders:** Replace jQuery UI sliders with native HTML `<input type="range">` + custom styling
2. **Carousels:** Replace owl-carousel with simple CSS/JS carousel or use a lightweight React carousel
3. **Dropdowns:** Replace nice-select with native `<select>` styled with Tailwind
4. **Icons:** Replace themify-icons + linericon with lucide-react
5. **Images:** Replace all img/ paths with picsum.photos placeholders
6. **Logo:** Use text-based logo or placeholder SVG
