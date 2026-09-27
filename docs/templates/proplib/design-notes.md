# Proplib — Task Outline & Design Notes

Source: ColorLib "Real Estate" — https://colorlib.com/wp/template/real-estate/
Preview: https://preview.colorlib.com/theme/real-estate/ (404, screenshot-only reference)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/realestate-free-realstate-website-template.jpg

## Section-by-section implementation order

### 1. Header (Navbar)
- Top info bar: phone, sell/rent link, login/register (dark background)
- Main nav: bold "M." logo, nav links (Home, Service, Property, Contact, Generic, Elements)
- Sticky on scroll with white background
- Responsive: hamburger menu on mobile

### 2. Hero Section
- Full-viewport-width background image (cityscape placeholder from picsum.photos)
- Dark overlay for text contrast
- Centered heading "WE'RE REAL ESTATE KING" in large white text
- Use `object-cover` for the background image

### 3. Search Form (overlapping hero)
- White card that overlaps the hero bottom edge
- "Search Properties For" title
- Toggle: Sell (orange active) / Rent tabs
- Row of 4 dropdown selects: Location, Property Type, Bedrooms, Bedrooms
- Price range: dual-handle slider ($1000 – $4000)
- Area range: dual-handle slider (1000 – 4000 sqm)
- Gradient CTA button: "Search Properties →" (orange-to-yellow gradient, rounded)

### 4. Features Section ("Why we are the best")
- Section heading + subtitle
- 3-column responsive grid
- Each card: lucide-react icon + title + description paragraph
- Cards: white bg, subtle border/shadow
- Expert Technicians, Professional Service, Great Support

### 5. Footer
- Minimal: Component Dock link

## Design notes

- **Color palette**: White body, dark headings, orange-to-yellow gradient for CTAs
- **Typography**: Geometric sans-serif (Poppins recommended)
- **Hero**: Full-bleed image with text overlay; hero takes ~60-70vh
- **Search card**: Absolute positioned overlapping hero bottom, white bg, rounded corners, subtle shadow
- **Slider controls**: Custom dual-range inputs for price/area
- **Toggle tabs**: Pill-shaped, orange active state
- **Feature cards**: Clean with line icons, generous padding
- **Responsive**: Single column on mobile, 3-col on desktop

## Replication fidelity notes

- Preview was 404 — all design decisions based on screenshot only
- ColorLib nav has "Generic" and "Elements" pages — omit those (not relevant to real estate SPA)
- "Sell/Rent" toggle in search form is a key interactive element — must function
- Gradient CTA button is distinctive — match the orange-to-yellow gradient
- The "M." logo is a stylized initial — can be recreated as bold text or SVG
