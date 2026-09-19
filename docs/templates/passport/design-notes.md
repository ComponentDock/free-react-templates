# Passport — Design Notes & Implementation Outline

## Source
- ColorLib slug: `travelers`
- Preview: https://preview.colorlib.com/theme/travelers/
- Screenshot: `travelers-free-template.jpg`

## Section-by-section fidelity notes

### 1. Navbar
- Sticky header with white background, subtle bottom border
- Brand text on left ("Passport"), nav center, social right
- Dropdown on "Destinations" — use `<details>` or state-based toggle
- Mobile: hamburger menu with slide-in panel (use `useState` for open/close)
- Icons: use `lucide-react` equivalents (Twitter/X, Facebook, Instagram, Linkedin)

### 2. Hero Slider
- Full-viewport-height overlay with background image + dark pseudo-element
- Implement as CSS-only auto-rotating slider or simple `useState` interval
- 3 slides with different headings and background images
- Use `picsum.photos/seed/passport-hero-1/1920/1080` etc. for placeholders
- Two CTA buttons: outline (border-2) + filled primary

### 3. Featured Destinations Carousel
- 3 visible cards, horizontal scroll or CSS snap for simplicity
- Each card: image with overlay gradient at bottom, title text
- Hover: slight scale-up on image

### 4. Services Grid (3 items)
- 3-column grid, each item: circular icon bg, heading, link
- Coral `#ef6c57` circle icons (24px icon inside 80px circle)
- Use `lucide-react` icons: Plane, Ship, Map (for Air Ticketing, Cruises, Tour Packages)

### 5. Testimonials
- Carousel or simple 3-column layout
- Each: quote text in italic, author name + role
- Light gray background

### 6. Destinations Gallery (6 items)
- 3x2 grid of image cards
- Each card: full image with dark overlay, white text at bottom
- Hover: slight opacity change on overlay

### 7. Services Detail (6 items)
- 3x2 grid similar to services grid but with 6 items
- Same circular icon pattern as services grid
- Use `lucide-react` icons for each service

### 8. Blog Section
- 3-column card layout
- Each: image top, content below with author meta, title, excerpt, read more link
- Light gray background

### 9. Newsletter CTA
- Full-width dark overlay section
- Centered text + email form (input + button inline)
- Background image with dark overlay

### 10. Footer
- Dark background (#25262a)
- 3 columns: About (brand + social), Navigation links, Newsletter form
- Bottom copyright line
- Component Dock link in footer

## Component hierarchy

```
App
├── Navbar
├── HeroSlider
│   └── HeroSlide (×3)
├── FeaturedDestinations
│   └── DestinationCard (×3)
├── ServicesGrid
│   └── ServiceItem (×3)
├── Testimonials
│   └── TestimonialCard (×3)
├── DestinationsGallery
│   └── DestinationCard (×6)
├── ServicesDetail
│   └── ServiceItem (×6)
├── BlogSection
│   └── BlogCard (×3)
├── NewsletterCTA
└── Footer
```

## Color palette reference
- Brand coral: `#ef6c57` → Tailwind: `bg-[#ef6c57]` or define in `@theme`
- Dark bg: `#25262a` → `bg-[#25262a]`
- Light sections: `#f4f5f9` → `bg-[#f4f5f9]`
- Body text: `#333333` → `text-[#333333]`

## Fonts
- Poppins: import via Google Fonts link in `index.html`
- Playfair Display: import via Google Fonts link in `index.html`
- Apply `font-poppins` as default body, `font-playfair` for display headings
