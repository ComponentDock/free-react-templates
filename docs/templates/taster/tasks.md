# Taster — Implementation Notes

Source: ColorLib **Meal** · https://preview.colorlib.com/theme/meal/
Recreation: `apps/taster/`

## Structure Order

1. Navbar (fixed sidebar + hamburger)
2. Hero (full-width bg image, heading, CTA)
3. Features (Find Your Best Food — alternating image/text)
4. About (The Restaurant — text section)
5. Image Divider (full-width bg image)
6. Chefs (Meet The Chefs — 2-column profiles)
7. Menu (tabbed: Breakfast/Brunch/Dinner)
8. Services (Other Services — 3×2 icon grid)
9. Reservation (form: Name/Email/Phone/Persons/Date/Time)
10. Testimonials (carousel with 4 quotes)
11. Contact (form: Name/Email/Phone/Message)
12. Map (placeholder)
13. Footer (3-col: About, Hours, Social+Newsletter)

## Section-by-Section Fidelity Notes

### 1. Navbar
- Fixed position sidebar panel (right slide-in, 300px wide, white bg)
- Hamburger toggle top-right (3 bars, black)
- Logo "T" centered: border 2px solid black, 30px bold font
- On scroll: header becomes fixed, white bg, logo inverts (white text on black bg)
- Nav links: Home, About Us, Our Menu, Reserve A Table, Contact
- Use lucide-react for hamburger icon

### 2. Hero (Cover 1)
- Full-width background image (`picsum.photos/seed/taster-hero/1920/1080`)
- Dark overlay (opacity: 0.3 on black)
- Heading "Welcome to Taster" — white, Playfair Display
- CTA button: outline-white, "Reserve A Table", scrolls to #reservation
- Min-height: 100vh on desktop

### 3. Features (Find Your Best Food)
- Section heading: "Find Your Best Food" (50px Playfair Display, centered)
- Subheading: "A Fine Dining Experience" (20px, muted)
- 3 cards in alternating layout (ftco-46 pattern):
  - Card 1: image left, text right (arrow-left pointing from text to image)
  - Card 2: text left, image right (arrow-right pointing from text to image)
  - Card 3: text centered, image below (arrow-up)
- Each card: category label (#FF7A5C, uppercase, 14px), heading (uppercase, 20px), description, "Learn More →" link
- Use picsum.photos with seeds: taster-food-1, taster-food-2, taster-food-3

### 4. About (The Restaurant)
- White bg, centered text
- Heading "The Restaurant" (50px Playfair Display)
- Two descriptive paragraphs
- Generous padding

### 5. Image Divider
- Full-width background image (`picsum.photos/seed/taster-divider/1920/400`)
- White bg section wrapping it

### 6. Chefs (Meet The Chefs)
- White bg
- Heading "Meet The Chefs"
- 2-column layout (col-md-6)
- Each chef: circular photo (200px, border-radius 50%), name (30px Playfair Display, weight 300), role "Master Chef" (14px, #B3B3B3, uppercase, letter-spacing 0.1em), bio text, 3 social icons (Facebook, Twitter, Instagram from lucide-react)
- Photos: picsum.photos/seed/taster-chef-1/200/200, taster-chef-2/200/200

### 7. Menu
- Light bg (#F8F9FA)
- Heading "Menu" + subheading
- 3 tab buttons: Breakfast (default active), Brunch, Dinner
- Tab styling: text uppercase, brand color active state
- Each tab content: 4 menu items in horizontal layout
- Each item: thumbnail image (picsum.photos/seed/taster-dish-N/100/100), dish name (link), description, price ($XX.99) right-aligned
- Tab switching: React state, no external dependency

### 8. Services (Other Services)
- White bg
- 3-column grid, 2 rows (6 cards total)
- Services: Quality Cuisine, Fresh Food, Bread & Pancake, Reserve Now, Fresh Vegies Salad, Whole Chicken
- Each: centered lucide-react icon, heading (20px, weight 700), description
- Icons: Utensils, Leaf, Cake, CalendarDays, Salad, Drumstick

### 9. Reservation
- Light bg
- Form in centered card (max-width ~900px, padding 40px, white bg or transparent)
- Fields: Name, Email, Phone (3-col row), Number of Persons (select, 1-5+), Date (date input), Time (time input)
- Each field: label above, input with icon (right-aligned)
- Submit: "Reserve Now" button, outline-primary, full-width on mobile

### 10. Testimonials
- White bg
- Heading "Customer Reviews"
- Simple carousel (state-based, auto-play optional, manual dots/arrows)
- 4 slides: each has blockquote with curly quotes, author section (circular photo, name, role)
- Photos: picsum.photos/seed/taster-person-N/100/100

### 11. Contact
- White bg
- Heading "Get In Touch"
- Form: Name, Email, Phone (3-col row), Message (textarea, full-width)
- Submit: "Send Message" button, outline-primary

### 12. Map
- Placeholder div, full-width, min-height 300px, light gray bg
- Could embed a static map image or leave as placeholder

### 13. Footer
- Default bg (white or very light)
- 3-column layout:
  - Col 1: "About Taster" heading + description + "Read More" outline-primary button
  - Col 2: Lunch Service (12:00pm–1:30pm) + Dinner Service (6:00pm–9:00pm)
  - Col 3: Social icons (TripAdvisor, Twitter, Facebook, Instagram) + Newsletter form (email input + envelope button)
- Copyright: "All rights reserved | Made with ❤ by Component Dock" linking to componentdock.com

## Key Implementation Decisions

1. **No jQuery** — Use React state for tabs, menu switching, navbar scroll, mobile menu toggle
2. **No Owl Carousel** — Use custom React carousel or Embla for testimonials
3. **No AOS** — Use CSS transitions or framer-motion for fade-in-on-scroll
4. **No Bootstrap** — Full Tailwind CSS 4 implementation
5. **Icons:** lucide-react replacing flaticon/ionicons/font-awesome
6. **Images:** picsum.photos with deterministic seeds for all placeholders
7. **Fonts:** Google Fonts link in index.html for Playfair Display + Open Sans
