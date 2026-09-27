# NestFind — Implementation Tasks & Design Notes

Source: ColorLib "Real Estate 2" → https://preview.colorlib.com/theme/realestate2/

## Section-by-section structure (implement in this order)

### 1. Header (`Header.tsx`)
- Top bar (desktop only, hidden on mobile via d-none d-lg-block):
  - Left: "Welcome to Conbusi consulting service" (replace with generic welcome)
  - Right: email (info@docmed.com → placeholder), phone (1601-609 6780), social icons (LinkedIn, Facebook, Instagram)
- Sticky navbar:
  - Logo (left)
  - Nav links (center): Home, Pages (dropdown: About, Property Details, Elements), Property, Blog (dropdown: Blog, Single Blog), Contact
  - Right: search icon + "Add Property" button (outlined style)
- Mobile: hamburger menu
- Design tokens: bg white, text #1F1F1F, headings #001D38

### 2. Hero/Slider (`Hero.tsx`)
- Full-width section with background image (picsum.photos/seed/nestfind-hero/1920/900)
- Dark overlay: #001D38 at 0.7 opacity
- Centered content:
  - h3: "Find your best Property" (white)
  - p: "Esteem spirit temper too say adieus who direct esteem." (white)
- Search form (horizontal flex):
  - Location select dropdown
  - Property Type select dropdown
  - Price range (static display with visual slider bar)
  - Bed Room select
  - Bath Room select
  - Search icon button (circular, orange gradient bg)
- Form fields are visual only (no backend)

### 3. Popular Properties (`PopularProperties.tsx`)
- Section heading: "Popular Properties" (centered, #001D38)
- 6 property cards in 3×2 grid (col-xl-4 col-md-6)
- Each card structure:
  - Image container with "For Sale" (green) or "For Rent" (red) tag badge
  - Title: "Comfortable Apartment in Palace"
  - Location with map pin icon: "Popular Properties"
  - Price: "From $20k" or "$563/month" (orange #FD8E5E)
  - Footer: sqft (1200 Sqft), bed (2 Bed), bath (2 Bath) with SVG icons
- Use picsum.photos/seed/nestfind-prop-{n}/ for images
- "More Properties" outlined button at bottom (centered)

### 4. Home Details (`HomeDetails.tsx`)
- Carousel/slider of featured property detail cards (use static card, not real carousel)
- Each card layout: row with image on left (col-6), info on right (col-6)
- Info section:
  - "For Sale" badge
  - Title: "Blue haven modern home"
  - Location with icon
  - Stats: 1200 Sqft, 2 Bed, 2 Bath
  - Description paragraph
  - Price ($4567) + "View Details" outlined button
- Background: white

### 5. Accordion (`Accordion.tsx`)
- Split layout: col for accordion (left), col for image (right)
- 3 FAQ accordion items with expand/collapse
- Accordion headers (use state for open/close)
- Right side: decorative image (picsum.photos/seed/nestfind-faq/600/400)
- Background: white or light

### 6. Counter Area (`CounterArea.tsx`)
- 3 stat counters in a row:
  - "200+" (Properties) — with counter animation
  - "300" (Clients) — with counter animation
  - "15" (Awards) — with counter animation
- Gradient background: orange gradient or dark overlay
- White text, large numbers

### 7. Testimonial Section (`TestimonialSection.tsx`)
- Dark overlay background (#001D38, 0.7 opacity)
- Testimonial cards with:
  - Client quote text
  - Client name
  - Client role/title
- Carousel-style (show one at a time, or static)
- White text on dark background

### 8. Team Area (`TeamArea.tsx`)
- Section heading centered
- 3-4 team member cards in a row
- Each card: photo (picsum.photos/seed/nestfind-team-{n}/300/300), name, role/title
- Background: white

### 9. Contact Action CTA (`ContactAction.tsx`)
- Full-width bar with orange gradient background
- Left: "Add your property for sale" heading (white)
- Right: phone number + "Add Property" outlined button (white border, white text)

### 10. Footer (`Footer.tsx`)
- 4 columns:
  - Col 1: Logo + contact info (email, phone, address) + social icons (Facebook, Twitter, Instagram)
  - Col 2: "Services" heading + link list (Marketing & SEO, Startup, Finance solution, Food, Travel)
  - Col 3: "Useful Links" heading + link list (About, Blog, Contact, Appointment)
  - Col 4: "Subscribe" heading + email input + "Subscribe" button + newsletter text
- Bottom bar: copyright + Component Dock link
- MUST link to https://www.componentdock.com/

## Design notes

- **Brand colors**: Orange gradient (#FDAE5C → #FD8E5E) for buttons and accents
- **Dark color**: #001D38 (navy) — headings, overlay backgrounds
- **Font**: Poppins (Google Fonts), weights 200–700
- **Body text**: #4D4D4D, **Headings**: #001D38, **Links**: #1F1F1F
- **Buttons**: Primary = orange gradient, outlined = transparent with orange/white border
- **Overlays**: #001D38 at 0.7 opacity for hero and testimonial sections
- **Property tags**: "For Sale" = green badge, "For Rent" = red badge
- **Icons**: Use Lucide React for stat/social/form icons, SVG for property detail icons (bed, bath, sqft, location)
- **Images**: Use picsum.photos with deterministic seeds per section
- **No ColorLib references** in app code — design tokens only
