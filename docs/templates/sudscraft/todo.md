# SudsCraft — Design Notes & Task Outline

## Source

- **ColorLib slug:** carwash
- **Preview URL:** https://preview.colorlib.com/theme/carwash/
- **New name:** sudscraft
- **Category:** Car Wash / Auto Detailing Services

## Section order (top to bottom)

1. Navbar (sticky, with phone CTA)
2. Hero Slider (background image + animated text)
3. Office Environments (split: bg image left / text right)
4. Pricing Cards (3 tiers)
5. Testimonials (carousel + founder info)
6. Services / Categories (4 cards with icons)
7. Video Section (dark bg + play button)
8. Maps Section (two side-by-side map images)
9. Footer (dark bg image + 4 columns + copyright)

## Design notes

### Navbar
- White background, sticky on scroll
- Logo left (2/12 cols)
- Nav links: Home, About, Services, Blog (dropdown: Blog, Blog Details, Element), Contact
- Right: phone CTA button with smartphone icon + number
- Mobile: hamburger menu
- Nav link style: #072366, uppercase, 500 weight, 14px, padding 29px 23px
- Hover: #007AFF

### Hero Slider
- Full-width background image with overlay
- Large heading "Car Wash" with fadeInUp animation
- Rotating text "& Detailing" (animated headline effect)
- Description paragraph
- Pill CTA button "Our Services" (gradient #0BC6FF → #0d80f3, border-radius: 30px)
- Dot navigation for slider

### Office Environments
- Split layout: decorative background image left (~40%), text panel right (offset 5 cols)
- Light blue-tinted background: #EEF6FF
- Title: "We have the latest equipment"
- Description text
- "About Us" outlined button (border: 1px solid #007AFF, border-radius: 30px)

### Pricing Cards
- Title: "We offer best services to our customer"
- 3 equal-width cards with white background, border, rounded corners
- Each card: icon top, service name, "Starting at" label, price (large), feature list (5 items), "Get Started" border button
- Cards: Car wash ($50), Detailing ($100), Wash & Detailing ($200)
- Hover: border-top-color #007AFF highlight

### Testimonials
- Left side: carousel with dot navigation
- Quote icon (SVG), testimonial paragraph
- Founder section: avatar image, name "Robart Brown", role
- Right side: decorative image
- Background: white

### Services / Categories
- Left-aligned title "Why take our services?" + description (6/12 cols)
- 4 service cards in a row (3 cols each):
  - Car wash 100% without detergents
  - Efficient surface drying machines
  - We have an application
  - Safe lacquer protection
- Each: SVG icon + title + description
- Fade-in-up animation on scroll

### Video Section
- Full-width dark background image
- Circular play button (centered or offset right)
- YouTube popup on click
- Text: "Your car will look as your new one" + description (right-aligned)

### Maps Section
- Two map images side by side (no interactive maps, just images)

### Footer
- Dark background image (#010A44 / navy tones)
- 4 columns:
  - Logo + description + phone + email
  - Opening hours: Mon-Fri 9-19, Sat 12-19, Sun Closed
  - Navigation: Home, About, Services, Blog, Contact
  - Social icons: Twitter, Facebook, Pinterest
- Copyright bar centered
- Footer MUST link to componentdock.com

## Task checklist

- [ ] Scaffold `apps/sudscraft/` (copy simplest app, rename package)
- [ ] Set up `index.html` with Poppins + Work Sans Google Fonts
- [ ] Create `src/index.css` with `@theme` tokens (brand colors, gradient)
- [ ] Build `Navbar` component (sticky, with dropdown and phone CTA)
- [ ] Build `HeroSlider` component (background image + animated text + CTA)
- [ ] Build `OfficeEnvironments` component (split layout)
- [ ] Build `PricingCards` component (3 cards with features)
- [ ] Build `Testimonials` component (carousel + founder)
- [ ] Build `Services` component (4 cards with SVG icons)
- [ ] Build `VideoSection` component (dark bg + play button)
- [ ] Build `MapsSection` component (two map images)
- [ ] Build `Footer` component (4 columns + copyright)
- [ ] Compose all sections in `App.tsx` in correct order
- [ ] Write tests for every component (100% coverage)
- [ ] Run `npm run verify:app sudscraft`
- [ ] Commit + push
