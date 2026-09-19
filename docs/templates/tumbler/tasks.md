# Tumbler — Implementation Tasks

Source: ColorLib "Locksmith" (https://colorlib.com/wp/template/locksmith/)
Preview: https://preview.colorlib.com/theme/locksmith/
New name: tumbler (apps/tumbler)

## Task Outline

### 1. Scaffold app from existing template
- Copy simplest existing app
- Rename package to @free-react-templates/tumbler
- Update vite.config.ts with injectUiSource()
- Create public/CNAME with tumbler.free.componentdock.com
- Update homepage in package.json
- Run npm install at repo root

### 2. Page Preloader component (Preloader.tsx)
- Full-screen loading spinner
- Displays while page loads, then fades out
- Simple CSS animation spinner

### 3. Off-Canvas Menu component (OffCanvasMenu.tsx)
- Slides from RIGHT (not left like most templates)
- Contains site logo, mobile nav links, phone number
- Dark overlay behind
- Toggle via hamburger click

### 4. Header component (Header.tsx)
- Dark navy (#052336) background
- Logo left side
- Horizontal nav: Home (active), About, Services, Shop, Pages (dropdown), News, Contact
- Pages dropdown: Cart, Checkout, Wishlist, Product Details, Blog Details
- Phone number display
- Hamburger icon for mobile
- Sticky on scroll

### 5. Hero Slider component (HeroSlider.tsx)
- Full-width with dark background images (use picsum.photos)
- Centered white text: span label + h2 heading
- Gold (#ffc446) "Contact us" pill button (radius 60px)
- 3 slides with different headings
- OwlCarousel-style dot/arrow navigation

### 6. Filter Search component (FilterSearch.tsx)
- Light gray bar with 3-column form
- Location dropdown/select
- Service Type dropdown/select
- Date input
- Gold Search button

### 7. Services component (Services.tsx)
- Section title "Services We Offer"
- 3-column grid: Locksmith Services, Safes & Locks, Emergency Service
- Each with icon, title, description
- White background

### 8. Choose Us component (ChooseUs.tsx)
- "Why Choose Us" section
- Description text about the service
- Image or visual element

### 9. Counter component (Counter.tsx)
- Light gray (#f2f2f2) background
- 4 stats in a row: Years Experience, Clients, Projects, Awards
- Animated number counting on scroll

### 10. Product component (Products.tsx)
- Product cards grid
- Each card: image, title, price

### 11. Testimonial component (Testimonials.tsx)
- Dark navy (#052336) background
- Customer reviews carousel
- Each review: photo, name, gold star rating, quote

### 12. Latest component (LatestNews.tsx)
- Blog/news post cards
- Each card: image, title, date

### 13. Call To Action component (CTA.tsx)
- Dark navy (#052336) banner
- Heading text
- Gold (#ffc446) button

### 14. Footer component (Footer.tsx)
- Dark navy (#052336) background
- 4 columns: About (logo + description), Services links, Quick Links, Contact
- Social media icons
- Copyright bar
- MUST link https://www.componentdock.com/ ("Component Dock")

### 15. App.tsx composition
- Import all section components
- Compose in order: Preloader, OffCanvasMenu, Header, HeroSlider,
  FilterSearch, Services, ChooseUs, Counter, Products, Testimonials,
  LatestNews, CTA, Footer

### 16. Tests (TDD)
- Write tests for each component
- 100% coverage enforced
- Use vitest + Testing Library

### 17. Verification
- Run scripts/verify-app.sh tumbler
- Typecheck, lint, tests (100% coverage), build
