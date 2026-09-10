# Autolane — Implementation Tasks & Design Notes

Source: ColorLib Autoroad
Preview: https://preview.colorlib.com/theme/autoroad/
New name: autolane

## Section Order (top to bottom)

1. Navbar
2. Hero (background image + booking form card)
3. Search/Filter Bar (4 selects + Search button)
4. Our Services (4-column card grid)
5. Choose Your Car (8-card car grid, 4x2)
6. How It Works (parallax section)
7. Testimonials (carousel)
8. About Us (50/50 split layout)
9. Recent Blog (3-card grid)
10. Footer (4-column dark)

## Tasks

### Project setup
- [ ] Create apps/autolane/ by copying simplest existing app
- [ ] Rename package to @free-react-templates/autolane
- [ ] Set public/CNAME to autolane.free.componentdock.com
- [ ] Set homepage to https://autolane.free.componentdock.com
- [ ] Run npm install at repo root to register workspace in lockfile

### Theme and tokens (src/index.css)
- [ ] Import Poppins font via Google Fonts link in index.html
- [ ] Set brand color --color-brand: #fc983c in @theme
- [ ] Set footer bg --color-footer: #3c312e in @theme
- [ ] Set body text --color-body: #666666 in @theme

### Components
- [ ] Navbar.tsx — transparent overlay navbar, scroll-to-white behavior
- [ ] Hero.tsx — full-width bg image, dark overlay, headline + play CTA
- [ ] BookingForm.tsx — floating white card form (5 inputs + submit)
- [ ] FilterBar.tsx — 4-column select filters + Search button
- [ ] Services.tsx — 4-column service cards with lucide-react icons
- [ ] CarGrid.tsx — 8-card car listing grid (4x2) with price badges
- [ ] HowItWorks.tsx — parallax bg, 4 workflow steps
- [ ] Testimonials.tsx — carousel with person images, quotes, names
- [ ] AboutUs.tsx — 50/50 split (image left, text right + CTA)
- [ ] BlogCards.tsx — 3-column blog entries with meta + excerpt
- [ ] Footer.tsx — dark 4-column footer with social icons + contact

### App.tsx composition
- [ ] Import and compose all sections in order

### Tests (TDD)
- [ ] Navbar render + scroll behavior
- [ ] Hero layout + overlay
- [ ] BookingForm fields + submit
- [ ] FilterBar selects + search
- [ ] Services: 4 cards rendered
- [ ] CarGrid: 8 cards, price badges, Book/Details buttons
- [ ] HowItWorks: 4 steps rendered
- [ ] Testimonials: carousel renders items
- [ ] AboutUs: split layout + CTA button
- [ ] BlogCards: 3 cards rendered
- [ ] Footer: 4 columns, social icons, copyright with Component Dock link

### Verification
- [ ] scripts/verify-app.sh autolane passes (typecheck + lint + tests 100% + build)
- [ ] Visual check: matches ColorLib preview fidelity

## Design Notes

### Navbar
- Transparent over hero, fixed on scroll with white bg + subtle shadow
- Brand text: "Auto" in white, "lane" in orange (#fc983c), font-weight 800, uppercase
- Nav links: white text, orange (#f7b71d) on active/hover
- Mobile: black (#000) background, hamburger toggle

### Hero
- Full-width, 850px height, background-image (desert/off-road landscape)
- Dark overlay: #000 at 40% opacity
- Left column: h1 in white, font-weight 200, font-size 60px
- Play button: 70px circle, bg #fc983c, white icon
- Description text: white, 18px

### Booking Form (floating card)
- White card, padding 30px, border-radius 5px
- Shadow: 0px 10px 31px -21px rgba(0,0,0,0.33)
- h2 "Make your trip" in black, font-weight 600, font-size 22px
- Inputs: height 50px, border 1px #ebebeb, radius 0, padding-left 20px
- Labels: font-weight 600, font-size 16px, color rgba(0,0,0,0.8)
- Submit button: full-width, bg #fc983c, white text

### Filter Bar
- White section with 4 equal columns
- Each select: height 50px, border 1px #ebebeb, radius 0, appearance: none
- Arrow icon in #fc983c at right of each select
- Search button: full-width, bg #fc983c, white text

### Services
- Section heading: "Our Services" centered, subheading above
- 4 cards in a row, each with:
  - Icon (use lucide-react equivalent: Headphones, MapPin, Calendar, Car)
  - Heading below icon
  - Short paragraph description
- Cards have padding, no borders/shadows (clean style)

### Car Grid
- Container-fluid for full-width
- 8 cards in 4-column layout
- Each card:
  - Top: background-image car photo (200px height)
  - Price badge: absolute-positioned white box with shadow, orange rate text
  - Below image: car name (h2, black), brand label (uppercase, letter-spacing 2px, muted)
  - Two buttons: "Book now" + "Details" (black outline style)
- Button hover: border #fc983c, bg #fc983c, text white

### How It Works (Parallax)
- Background image with dark overlay
- White heading: "Work flow" subheading + "How it works" h2
- 4 steps: icon (white) + h3 + paragraph
- Steps: Pick Destination, Select Term, Choose A Car, Enjoy The Ride

### Testimonials
- "Testimonial" subheading + "Happy Clients" h2, centered
- OwlCarousel-style sliding testimonials
- Each item: person image, quote text, name, position
- Navigation: owl-nav prev/next arrows (implement with embla or similar)

### About Us
- 50/50 split, no gap
- Left: background-image (full height, justify-center + align-center for potential content)
- Right: subheading "About us", h2 "Choose A Perfect Car", 2 paragraphs, orange CTA button
- Button: bg #fc983c, text "Search Vehicle"

### Blog Cards
- 3-column layout
- Each card: background-image thumbnail (block-20 class), meta row (date, author, comment count), heading, excerpt
- Meta links in brand color

### Footer
- Background: #3c312e (warm dark brown)
- 4 columns: About, Information, Customer Support, Have a Questions?
- Social icons: Twitter, Facebook, Instagram (circle links)
- Contact: map marker + address, phone, email
- Copyright: links to Component Dock (replaces Colorlib attribution)
