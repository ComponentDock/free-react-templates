# Dwellpoint — Design Notes

## Source mapping

| Field         | Value                                                                      |
| ------------- | -------------------------------------------------------------------------- |
| ColorLib slug | `sel`                                                                      |
| Preview URL   | `https://preview.colorlib.com/theme/sel/`                                  |
| Screenshot    | `https://colorlib.com/wp/wp-content/uploads/sites/2/sel-free-template.jpg` |
| New name      | `dwellpoint`                                                               |
| Package       | `@free-react-templates/dwellpoint`                                         |

## Design tokens (from preview CSS)

- **Font:** Roboto (Google Fonts), weights 300/400/500/700
- **Brand accent:** `#f5204b` (crimson red) — buttons, active states, hover
- **Text primary:** `#222222`
- **Text secondary:** `#777777`
- **Footer background:** `#222222` (dark)
- **Buttons:** Rectangular (no border-radius), white text on crimson, uppercase

## Sections

1. **Navbar** — Logo ("Dwell" in white + "point" in crimson), 6 nav links, search icon, mobile hamburger
2. **Hero** — Full-width background image with gradient overlay, subtitle, headline, CTA, advanced search form
3. **Advanced Search** — White card: 4 selects (Locations, Property Type, Bedrooms, Bathrooms), 2 range sliders, submit
4. **Welcome** — 2-column: left image, right heading + description + 3 stat boxes (donations, projects, volunteers)
5. **Properties** — 3-column card grid: image, title, tag pills (beds/baths/sqm/amenities), price, "For Sale" CTA
6. **Testimonials** — Left heading + description, right: avatar cards with quote, name, role
7. **Cities** — 4-column image grid with gradient overlay and centered "Book Now" hover button
8. **Features** — 3×2 icon grid: Expert Agents, Professional Service, Great Support, Fast Transactions, Premium Listings, Trusted Reviews
9. **Client Logos** — Horizontal grayscale logo row
10. **Footer** — 4 columns (About Us, Newsletter email input, Instagram Feed grid, Follow Us social icons) + copyright with Component Dock link

## Implementation notes

- Placeholder images via `picsum.photos` with deterministic seeds
- Icons from `lucide-react` (replacing original linericon/font-awesome)
- Mobile-responsive with hamburger toggle in Navbar
- Newsletter form uses `onSubmit` with `preventDefault()`
- No carousel JS — testimonials and logos use static grid layout
