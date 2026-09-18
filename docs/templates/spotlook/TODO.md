# Spotlook — Implementation Tasks

Source: ColorLib Browse (https://preview.colorlib.com/theme/browse/)
Preview URL: https://preview.colorlib.com/theme/browse/
New name: spotlook

## Section-by-section tasks

### 1. Project scaffold
- [ ] Copy simplest existing app, rename package to @free-react-templates/spotlook
- [ ] Set up index.css with Tailwind 4 + @theme tokens for #00918e
- [ ] Add Google Fonts link for Rubik (400, 700) in index.html
- [ ] Add picsum.photos seed for hero background and listing images

### 2. Navbar
- [ ] Transparent header with logo "Spotlook" left-aligned
- [ ] Nav links right-aligned: Home (active pill), Listings, About, Blog, Contact
- [ ] Active item: teal bg (#00918e), white text, border-radius 30px
- [ ] Mobile hamburger toggle (hidden below xl breakpoint)
- [ ] Use lucide-react Menu icon for mobile toggle

### 3. Hero / Search
- [ ] Full-width section with bg image + rgba(0,0,0,0.6) overlay
- [ ] Centered headline: "Find Nearby" + typing animation word
- [ ] Typing animation: cycle through "Attractions", "Events", "Hotels", "Restaurants"
- [ ] Subtitle text below headline
- [ ] Search bar: white bg, rounded (or sharp per original), 4 inputs
  - Keyword input (text)
  - Location input with lucide-react MapPin icon
  - Category dropdown (Hotels, Restaurants, Events, Spa, Stores, Other)
  - Search button (teal bg, white text, sharp corners)

### 4. Most Visited Places
- [ ] Section heading with teal underline accent
- [ ] 3-column grid (6 items): image, heart bookmark overlay, category pill, name, address
- [ ] Cards: image fills top, content overlay at bottom
- [ ] Use picsum.photos for card images

### 5. Popular Categories
- [ ] Section heading with teal underline accent
- [ ] 6-column grid of category tiles: icon, label, count number
- [ ] Categories: Hotels 489, Events 482, Spa 194, Stores 1472, Restaurants 439, Other 692
- [ ] Use lucide-react icons (Hotel, Mic, Flower2, Store, Utensils, Bike)
- [ ] "View All Categories" outline-primary button (border #00918e, text #00918e)

### 6. Why Us / FAQ
- [ ] Two-column layout: left image, right accordion
- [ ] "Why Us" heading in teal
- [ ] 4 collapsible FAQ items with border
- [ ] Items: "How to list my item?", "Is this available in my country?", "Is it free?", "How the system works?"
- [ ] Use React state for accordion expand/collapse (no Bootstrap JS)

### 7. How It Works
- [ ] Section heading with teal underline accent
- [ ] 3-column layout: step 1, 2, 3
- [ ] Each: SVG illustration placeholder, large number, title, description
- [ ] Number styled in teal

### 8. Testimonials
- [ ] bg-light (#f8f9fa) section background
- [ ] "Satisfied Customers" heading
- [ ] Carousel with 4 testimonials: avatar, name, blockquote
- [ ] Implement carousel with useState for index + prev/next controls
- [ ] Use picsum.photos for avatar images

### 9. Tips & Articles (Blog)
- [ ] Section heading with teal underline accent
- [ ] 3-column grid: article cards with image, title, author + date, excerpt
- [ ] Use picsum.photos for article images

### 10. CTA Banner
- [ ] Full-width teal (#00918e) background
- [ ] White heading: "Let's get started. Create your account"
- [ ] White description text
- [ ] "Sign Up" button: outline-white (border white, text white, transparent bg)

### 11. Footer
- [ ] White background, 4-column grid
- [ ] Columns: Quick Links, Products, Features, Follow Us (social icons)
- [ ] Subscribe Newsletter: email input + Send button (teal)
- [ ] Copyright line: "© {year} All rights reserved | Made with ❤ by Component Dock"
- [ ] Component Dock link: https://www.componentdock.com/
- [ ] Use lucide-react for social icons (Facebook, Twitter, Instagram, Linkedin)

### 12. Verification
- [ ] All sections render in correct order
- [ ] Responsive: mobile hamburger, stacked grids
- [ ] No ColorLib references in code
- [ ] Footer links to componentdock.com
- [ ] All images use picsum.photos placeholders
- [ ] Typography: Rubik font loaded and applied
- [ ] Brand color #00918e consistent throughout

## Design fidelity notes

- Original uses Bootstrap 4 grid — translate to Tailwind grid/flex utilities
- Original nav is transparent over hero — replicate with absolute positioning
- Typing animation originally uses Typed.js — use simple React useEffect + CSS animation
- Original FAQ uses Bootstrap collapse — replace with React state
- Original testimonial carousel uses Owl Carousel — replace with custom React carousel
- Card overlay effect (image + bottom content) can be done with relative/absolute positioning
- Category tiles have a hover effect with teal color — add hover state
- Search bar uses Bootstrap form-control — use Tailwind form styles
- The active nav pill has border-radius 30px (fully rounded)
