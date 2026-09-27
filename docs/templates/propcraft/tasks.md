# PropCraft — Implementation Tasks & Design Notes

Source: ColorLib "Real Estate" → https://preview.colorlib.com/theme/realestate/

## Section-by-section structure (implement in this order)

### 1. Navbar (`Navbar.tsx`)
- Top bar: phone number, "Sell / Rent Property" link, "login / register" link
- Main navbar: logo (left), nav links (right): Home, Service, Property, Contact
- Sticky on scroll, hamburger menu on mobile
- Design tokens: white bg, dark text (#222), Poppins font

### 2. Banner/Hero (`Hero.tsx`)
- Full-screen section with background image (use picsum.photos/seed/propcraft-hero/1920/915)
- Dark overlay (rgba(0,0,0,0.5) or similar)
- Centered headline: "We're Real Estate King" (white, uppercase, large)
- Search form container:
  - Sell/Rent toggle switch (pill toggle)
  - 4 select dropdowns: Location, Property Type, Bedrooms (x2)
  - Price Range slider
  - Area Range slider
  - "Search Properties" button (pill shape, bg #f41068, white text, border-radius 25px)
- All form elements are static/visual (no real functionality needed)

### 3. Service Area (`ServiceArea.tsx`)
- Section heading: "Why we are the best" centered
- Subtext: "Who are in extremely love with eco friendly system."
- 6 service cards in 3×2 grid (col-lg-4 col-md-6)
- Each card: Lucide icon + h4 title + paragraph text
- Card titles from original: Expert Technicians, Professional Service, Great Support, Technical Support, Expert Technicians, Technical Support
- Use unique titles for the duplicate ones (e.g. "Licensed Professionals", "24/7 Availability")
- Background: white or #f9f9ff

### 4. Property Area (`PropertyArea.tsx`)
- 3 property listing cards in a row
- Each card: property image (picsum.photos), dark overlay on hover, price badge (absolute positioned)
- Below image: bed/bath/sqft icons with counts, property title
- Example prices: $250,000 / $350,000 / $450,000
- Section background: dark overlay-bg image or solid dark

### 5. City Area (`CityArea.tsx`)
- Asymmetric image grid:
  - Left column (col-lg-4): 1 tall image (San Francisco)
  - Right column (col-lg-8): 1 wide image on top (New York), 2 equal images below (Boston, Elay)
- Each image has dark overlay + fade-in-bottom text on hover
- Use picsum.photos/seed/propcraft-city-{n}/ for images

### 6. About Area (`AboutArea.tsx`)
- Split layout: col-lg-6 text + col-lg-6 image
- Left side has 3 text blocks stacked:
  - "Why Choose Us" + paragraph
  - "Our Properties" + paragraph
  - "Legal Notice" + paragraph
- Right side: full-height image (picsum.photos/seed/propcraft-about/800/600)
- Background: white

### 7. Contact Info Area (`ContactInfoArea.tsx`)
- 4 equal columns (col-lg-3 col-md-6 each)
- Columns: Visit Our Office, Let's Call Us, Let's Email Us, Customer Support
- Each: h4 heading + paragraph with details
- Background: #f9f9ff (light lavender)

### 8. Contact Area (`ContactArea.tsx`)
- Split: col-lg-6 map (left) + col-lg-4 form (right)
- Map: use a placeholder div styled as a map area (or embed OpenStreetMap)
- Form: name input, email input, message textarea, "Send Message" button
- Button: pill shape (#f41068 bg, white text)
- Background: white

### 9. Footer (`Footer.tsx`)
- 4 widget columns:
  - About Us (paragraph)
  - Newsletter (email input + arrow submit button)
  - Instagram Feed (8 small thumbnail images in a flex grid)
  - Quick Links (link list)
- Bottom bar: copyright text + social media icon links
- Footer MUST link to https://www.componentdock.com/

## Design notes

- **Brand color**: #f41068 (hot pink) — use as primary throughout
- **Font**: Poppins (Google Fonts), weights 300 (body), 600 (headings)
- **Body text**: #777, **Headings**: #222
- **Buttons**: Pill shape (border-radius 25px), bg #f41068, white text
- **Section spacing**: section-gap class (use consistent vertical padding ~100px)
- **Alternating backgrounds**: white and #f9f9ff
- **Overlay pattern**: dark overlay on hero + property cards + city grid images
- **Responsive**: Bootstrap-style grid → Tailwind equivalents (grid-cols-1/2/3/4)
- **Icons**: Use Lucide React (lucide-react) for service icons, social icons
- **Images**: Use picsum.photos with deterministic seeds per section
- **No ColorLib references** in app code — design tokens only
