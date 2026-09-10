# AutoRent — Implementation Todo + Design Notes

Source: ColorLib "Carrentals" (https://preview.colorlib.com/theme/carrentals/)
New name: autorent · apps/autorent · @free-react-templates/autorent

## Component Breakdown (implementation order)

### 1. Navbar (`Navbar.tsx`)
- Sticky top, white bg, left-aligned logo "AutoRent"
- Simple nav links (Home only — minimal nav in original)
- Mobile hamburger menu toggle
- Use `packages/ui` `ButtonLink` if applicable

### 2. Hero (`Hero.tsx`)
- Full viewport height (`h-screen min-h-[570px]`)
- Background image: `https://picsum.photos/seed/autorent-hero/1920/1080`
- Dark overlay (`bg-black/45`)
- Heading: "Rent a car is within your finger tips." — 50px, bold, black on light overlay
- Subtitle below heading
- Car type dropdown selector (select element, branded)
- Center-aligned content

### 3. HowItWorks (`HowItWorks.tsx`)
- Section heading: "How it works?" + subtitle "Easy steps to get you started"
- 3-step horizontal row (`grid grid-cols-1 md:grid-cols-3`)
- Each step: blue circle with number (bg `#0779e4`, text white, 50% radius), title, description
- Number text class: `text-primary` → use brand-primary color

### 4. PromoSection (`PromoSection.tsx`)
- Two-column layout: image left (with play button overlay), text right
- Image: `https://picsum.photos/seed/autorent-promo/600/400`
- Play button: circular icon with `▶` on top of image
- Right side: section heading "You can easily avail our promo for renting a car."
- Body paragraph (descriptive text about car rental promo)
- "Meet them now" primary button (bg `#0779e4`, white text)

### 5. CarListings (`CarListings.tsx`)
- Section heading: "Car Listings" + subtitle
- Light bg (`#f6f5f5`)
- 6 car cards in 2-column grid (`grid grid-cols-1 md:grid-cols-2`)
- Each card: white bg, flex row — image left, content right
- Card content: car name (h3, h5 class), price `$389.00/day` in blue, 3 features (Luggage/Doors/Passenger) in border-bottom row, description, "Rent Now" primary button
- Images: `https://picsum.photos/seed/autorent-car-<1..6>/300/200`

### 6. Features (`Features.tsx`)
- Section heading: "Features" + subtitle
- 3-column grid (`grid grid-cols-1 md:grid-cols-3`)
- 6 feature cards: white circular icon (bg `#0779e4`), title, description, "Learn more" link
- Icons: use `lucide-react` icons (Car, Shield, Clock, MapPin, CreditCard, Headphones)

### 7. Testimonials (`Testimonials.tsx`)
- Section heading: "Testimonials" + subtitle
- Light bg (`#f6f5f5`)
- 3 testimonial cards
- Each: quote text in italics, author name, role (e.g. "Owner, Ford")
- Cards: white bg, padding, subtle shadow

### 8. CtaBanner (`CtaBanner.tsx`)
- Full-width section, bg `#0779e4` (brand-primary)
- Centered heading "What are you waiting for?"
- Subtitle paragraph
- "Rent a car now" white button (`bg-white text-[#0779e4]`)
- Padding: `py-20`

### 9. Footer (`Footer.tsx`)
- Dark bg (near-black `#212529`)
- 4 columns: Company info + social icons | Quick Links | Resources | Support
- Social icons: Facebook, Instagram, Twitter, LinkedIn (lucide-react)
- Links: About Us, Testimonials, Terms of Service, Privacy, Contact Us (repeated across columns)
- Bottom: copyright + "Component Dock" link (https://www.componentdock.com/)

## Design Fidelity Notes

### Color Palette
- Brand primary: `#0779e4` (bright blue) — used for buttons, icons, step numbers, CTA bg, price text
- Body text: `#000` (headings), `#888` (muted descriptions)
- Card backgrounds: `#fff`
- Section backgrounds: white (default), `#f6f5f5` (light gray for listings + testimonials), `#0779e4` (CTA)
- Borders: `#ccc`, `#ced4da`

### Typography
- Font: Roboto (Google Fonts) — weight 400 (body), 500–700 (headings)
- Hero h1: 50px, black, bold
- Section headings: `section-heading` class with bottom accent bar

### Layout Patterns
- Bootstrap-style grid (convert to Tailwind grid/flex)
- Cards: flex row (image left, content right) for listings
- Cards: flex column for features (icon + title + text + link)
- Step indicators: numbered circles with primary color bg
- Full-viewport hero with overlay

### Key Differences from Original
- No jQuery/Owl Carousel — use CSS or simple React state for any carousel needs
- No AOS scroll animations — can add Tailwind transitions if desired
- Placeholder images via picsum.photos
- Bootstrap grid → Tailwind grid
- Font imported via Google Fonts `<link>` in `index.html`

### Image Placeholders
- Hero background: `https://picsum.photos/seed/autorent-hero/1920/1080`
- Promo image: `https://picsum.photos/seed/autorent-promo/600/400`
- Car images (6): `https://picsum.photos/seed/autorent-car-<1..6>/300/200`
- Avatar for testimonials: `https://picsum.photos/seed/autorent-person-<1..3>/80/80`
