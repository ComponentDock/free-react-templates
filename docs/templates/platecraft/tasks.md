# Platecraft — Implementation Tasks

> ColorLib Meal → Platecraft
> Preview: https://preview.colorlib.com/theme/meal/
> Source slug: meal

## Component Breakdown

### 1. Navbar (Side Navigation)
- [ ] Create `Navbar.tsx` — vertical side nav, 5 links (Home, About, Menu, Reservation, Contact)
- [ ] Sticky behavior: fixed on scroll past hero
- [ ] Hamburger toggle on mobile (collapsible drawer)
- [ ] Smooth scroll to section IDs

### 2. Header (Logo Bar)
- [ ] Create `Header.tsx` — centered bordered logo "P", burger menu icon on right
- [ ] Sticky header on scroll (white bg, reduced height)

### 3. Hero
- [ ] Create `Hero.tsx` — full-viewport section
- [ ] Background image (parallax via picsum placeholder)
- [ ] Heading "Welcome to Platecraft" in Playfair Display, white, centered
- [ ] "Reserve A Table" outline button (white border, 2px, no radius)

### 4. FoodShowcase
- [ ] Create `FoodShowcase.tsx` — heading + sub-heading + staggered grid
- [ ] ftco-46 layout: row 1 = image | text | image, row 2 = text | image | text
- [ ] Each text card: coral category label, dish title, description, "Learn More →"
- [ ] Responsive: stacks vertically on mobile

### 5. About
- [ ] Create `About.tsx` — "The Restaurant" heading + 2 paragraphs
- [ ] Centered text, max-width container

### 6. ParallaxImage
- [ ] Create `ParallaxImage.tsx` — full-width decorative food photo
- [ ] Use picsum placeholder, subtle parallax effect

### 7. Chefs
- [ ] Create `Chefs.tsx` — heading "Meet The Chefs"
- [ ] 2 chef cards in 6-col grid
- [ ] Each: circular portrait (picsum), name, title, bio, social icons (lucide-react)

### 8. Menu
- [ ] Create `Menu.tsx` — heading + sub-heading + 3 tabs
- [ ] Tabs: Breakfast, Brunch, Dinner (use tabs component from packages/ui)
- [ ] Each tab: 4 menu items (image, name, description, price)
- [ ] Prices right-aligned, bold

### 9. Services
- [ ] Create `Services.tsx` — heading + sub-heading + 6 cards in 3×2 grid
- [ ] Each card: circular icon (lucide-react), title, description
- [ ] Staggered fade-in animation (AOS equivalent via CSS or framer-motion)

### 10. Reservation
- [ ] Create `Reservation.tsx` — heading + sub-heading + form
- [ ] 6 fields: Name, Email, Phone (row 1), Persons (select), Date, Time (row 2)
- [ ] "Reserve Now" coral button
- [ ] Form validation with zod + react-hook-form

### 11. CustomerReviews
- [ ] Create `CustomerReviews.tsx` — heading + carousel
- [ ] 4 testimonial slides: quote, circular author photo, name, title
- [ ] Use a simple carousel or auto-rotating component

### 12. Contact
- [ ] Create `Contact.tsx` — heading "Get In Touch" + form
- [ ] 4 fields: Name, Email, Phone, Message (textarea)
- [ ] "Send Message" coral button
- [ ] Form validation with zod + react-hook-form

### 13. MapEmbed
- [ ] Create `MapEmbed.tsx` — embedded Google Maps placeholder (static image or iframe)

### 14. Footer
- [ ] Create `Footer.tsx` — dark background (#121212)
- [ ] 3 columns: About + Read More, Service Hours, Social + Newsletter
- [ ] Copyright line with Component Dock link
- [ ] Newsletter email input with envelope icon button

## App Composition
```
App.tsx
├── Navbar
├── Header
├── Hero
├── FoodShowcase
├── About
├── ParallaxImage
├── Chefs
├── Menu
├── Services
├── Reservation
├── CustomerReviews
├── Contact
├── MapEmbed
└── Footer
```

## Testing Strategy
- One `describe` per component
- Scenario-style `it` blocks matching spec Gherkin scenarios
- Test form validation (required fields, email format)
- Test tab switching in Menu
- Test nav scroll behavior
- Test mobile hamburger toggle
- 100% coverage enforced

## Design Notes
- Use `packages/ui` components where possible (Button, ButtonLink, Card, cn())
- Font loading: `<link>` in index.html for Playfair Display + Open Sans
- Colors via Tailwind `@theme`: `--color-coral: #ff7a5c`
- No parallax library needed — CSS `background-attachment: fixed` for hero + decorative image
- Icons: lucide-react for social icons and service icons (replace flaticon/ionicons)
