# Gearshift — Implementation Notes

## Source
- ColorLib Autoroad: https://colorlib.com/wp/template/autoroad/
- Preview: https://preview.colorlib.com/theme/autoroad/

## Section order (1:1 fidelity)

1. **Navbar** (`Navbar.tsx`)
   - Dark background, brand text "Gearshift"
   - Links: Home, About, Pricing, Our Fleet, Blog, Contact
   - Mobile hamburger toggle
   - Fidelity: match dark bg, nav link order, brand styling (bold + orange accent on part of name)

2. **Hero** (`Hero.tsx`)
   - Full-width background image with dark overlay
   - Left side: headline (light weight 60px), subtext paragraph, video play button (orange circle + white icon)
   - Right side: booking form (white card, rounded corners 5px, shadow)
   - Form fields: Pick-up location, Drop-off location, Pick-up date, Drop-off date, Pick-up time
   - "Search Vehicle" CTA button (brand orange, square corners in form)
   - Fidelity: match split hero layout, form card styling, play button circle

3. **SearchFilter** (`SearchFilter.tsx`)
   - Horizontal bar below hero
   - 4 dropdown selects: Model, Brand, Year, Price Limit
   - "Search" button (brand orange, full height)
   - Form inputs: 50px height, `#ebebeb` border, border-radius 0
   - Orange icon in select dropdowns

4. **Services** (`Services.tsx`)
   - Section heading with "Our Services" subheading + heading
   - 4 cards in a row: 24/7 Support, Locations, Reservation, Rental Cars
   - Each: icon (orange) + title + short description
   - Fidelity: match 4-column layout, icon styling

5. **Fleet** (`Fleet.tsx`)
   - "Choose Your Fleet" heading with subheading
   - 4-column grid, 8 car cards
   - Each card: bg image, price overlay (white card with shadow, orange rate, "From /Day"), car name, brand label, two outline buttons
   - Fidelity: match price overlay positioning, card button styling (outline black → orange on hover)

6. **HowItWorks** (`HowItWorks.tsx`)
   - Parallax background image with dark overlay
   - "How it works" heading (white), subheading "Work flow"
   - 4 centered steps: Pick Destination, Select Term, Choose A Car, Enjoy The Ride
   - Each: orange icon circle + heading + description
   - Fidelity: white text on dark overlay, centered layout

7. **Testimonials** (`Testimonials.tsx`)
   - "Happy Clients" heading, subheading "Testimonial"
   - Carousel with testimonials
   - Each: circular user photo, quote text, name, position
   - Fidelity: centered text, circular images

8. **About** (`About.tsx`)
   - 50/50 split layout (no gutters)
   - Left: background image
   - Right: "Choose A Perfect Car" heading, subheading "About us", description paragraphs, CTA button
   - Fidelity: match split layout, padding, CTA button style

9. **Blog** (`Blog.tsx`)
   - "Recent Blog" heading, subheading "Blog"
   - 3-column blog cards
   - Each: bg image with link, meta row (date, author, comment icon + count), heading link, excerpt
   - Fidelity: match meta layout, heading hover color

10. **Footer** (`Footer.tsx`)
    - Dark background (#000)
    - 4 columns: About (brand description + social icon circles), Information links, Customer Support links, Contact (address, phone, email)
    - Copyright line → links to Component Dock
    - Fidelity: dark bg, social icons in circles, column structure

## Component mapping

| ColorLib class | React component | Notes |
|---------------|-----------------|-------|
| `.hero-wrap` | `Hero` | Split hero with form |
| `.search-property-1` | `SearchFilter` | Dropdown filters |
| `.services-section` | `Services` | 4-column icons |
| `.car-wrap` | `Fleet` (card) | Price overlay card |
| `.services-section.img` (workflow) | `HowItWorks` | Parallax step cards |
| `.testimony-section` | `Testimonials` | Carousel |
| `.wrap-about` | `About` | Split layout |
| `.blog-entry` | `Blog` (card) | Blog card |
| `.ftco-footer` | `Footer` | Dark footer |

## Placeholder images

- Hero bg: `https://picsum.photos/seed/gearshift-hero/1920/850`
- Car images: `https://picsum.photos/seed/gearshift-car-1/600/400` through `car-8`
- Workflow bg: `https://picsum.photos/seed/gearshift-workflow/1920/600`
- User photos: `https://picsum.photos/seed/gearshift-user-1/150/150` through `user-3`
- About image: `https://picsum.photos/seed/gearshift-about/800/600`
- Blog images: `https://picsum.photos/seed/gearshift-blog-1/600/400` through `blog-3`

## Dependencies

- Lucide React icons (replace flaticon/ionicons icons)
- Google Fonts: Poppins (weights 200-800)
- `cn()` from `packages/ui` for class composition
- No external JS libraries needed (no carousel plugin — use CSS or simple state)

## Pitfalls

- Hero booking form is absolutely positioned on the right within a grid — ensure responsive stacking
- Price overlay on car cards uses box-shadow with negative offset — match precisely
- Search filter selects need custom styling (appearance: none + custom icon)
- Workflow section uses parallax bg — use `bg-fixed` or CSS `background-attachment: parallax`
- Testimonial carousel needs auto-play or manual navigation
- Footer social icons are circular with hover → brand orange
