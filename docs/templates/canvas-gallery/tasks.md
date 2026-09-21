# CanvasGallery — Implementation Notes

Source: ColorLib Mona (https://preview.colorlib.com/theme/mona/)
New name: canvas-gallery
Package: @free-react-templates/canvas-gallery

## Section Order & Structure

### 1. Header (Navbar)
- Sticky/fixed top nav
- Logo on left, nav links on right: Home, Pages (dropdown), Project, Models, Casting, Blog, Contact
- Search icon triggers modal overlay with search input
- Mobile: hamburger toggle, slide-in menu with close button
- Decorative curve image below nav (use CSS gradient or SVG)

### 2. Hero (Welcome Area)
- Full-width carousel/slider with 3 slides
- Each slide: large background image, model name (h2), subtitle (h5), social icons row, "Model details" CTA button
- Social icons: Instagram, Facebook, Pinterest, Twitter, YouTube (use lucide-react equivalents)
- Decorative curve overlay at bottom of hero

### 3. About Us
- Two-column layout on desktop
- Left: 2 stacked thumbnail images with staggered animation
- Right: heading + paragraph + 4 service cards in a row
- Service cards: icon circle (pink bg, white icon), title (h5), description
- Icons: film, calendar, camera, house (use lucide-react: Film, Calendar, Camera, Home)

### 4. Model Portfolio Gallery
- Tabbed filter: All, Model, Actor, Singer
- Active tab: pink background (#ed489d), white text
- Grid: 6 columns desktop, responsive down to 1-2 columns
- Each item: model photo, hover overlay with Instagram icon
- Use CSS grid with filter logic (show/hide by category)

### 5. Client Feedback (Testimonials)
- Carousel/slider with testimonial cards
- Each card: quote icon (pink), testimonial text, 5 star icons, client name, role, circular photo
- Previous/next arrow navigation

### 6. CTA Banner
- Full-width section with pink (#ed489d) background
- Centered: "Do You Want To Be A Model?" (h2, white text)
- "Contact Us" pill button (white bg, pink text, or pink outline variant)

### 7. Blog (Latest News)
- Section heading "Latest News" centered
- Grid of 4 blog post cards
- Each card: thumbnail image, post title (linked), post date
- One card is "featured" (taller/larger)

### 8. Footer
- Dark background (#232323 or similar)
- 3 columns: Brand+copyright, "Our Link" nav links, "Contact" info
- Contact: phone number, address
- Social icons row: Facebook, Instagram, Pinterest, Twitter, YouTube
- Copyright with heart icon
- Must include Component Dock link

## Fidelity Notes

- Brand color: #ed489d (hot pink) — use as Tailwind theme color
- Font: HK Grotesk via Google Fonts (400, 500, 600)
- Buttons: pill-shaped (border-radius: 40px), pink fill, black on hover
- Section padding: 80px vertical
- Cards: sharp corners (no border-radius)
- Testimonial stars: filled pink stars
- Gallery hover: overlay with Instagram icon
- Animations: fadeInUp, bounceInUp (use Tailwind animate or framer-motion)
- Curve decorative element: SVG or CSS gradient at hero/nav bottom

## Component Map

| Section | Component | Notes |
|---|---|---|
| Header | `Navbar.tsx` | Sticky, mobile hamburger, search modal |
| Hero | `Hero.tsx` | Carousel with slides, social icons, CTA |
| About | `About.tsx` | Two-column, images + services grid |
| Gallery | `Portfolio.tsx` | Tabs + grid, category filtering |
| Testimonials | `Testimonials.tsx` | Carousel, quote cards, stars |
| CTA | `CtaBanner.tsx` | Pink banner, heading, button |
| Blog | `Blog.tsx` | Grid of post cards |
| Footer | `Footer.tsx` | 3-column, social, Component Dock link |
