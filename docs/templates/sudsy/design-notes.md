# Sudsy — Design Notes

## Source

- **ColorLib slug:** carwash
- **Preview URL:** https://preview.colorlib.com/theme/carwash/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carwash-free-template.jpg
- **New name:** sudsy

## Section Order (from preview DOM, 1:1 fidelity)

1. **Navbar** — Sticky header: logo (left), nav links (center), phone CTA button (right)
2. **Hero** — Full-width background image with dark navy-blue overlay. Large heading "Car Wash & Detailing", subtitle text, blue pill CTA "Our Services"
3. **About / Office Environments** — Light blue (#EEF6FF) background. Left: car wash equipment photo. Right: overlapping white card with heading "We have the latest equipment", paragraph, blue "About Us" button
4. **Pricing Cards** — 3 cards in a row:
   - Car wash — $50.00
   - Detailing — $100.00
   - Wash & Detailing — $200.00
     Each card: service name + icon top, price middle, 5-item feature list bottom, blue outlined "Get Started" button
5. **Testimonials** — Slick slider: circular avatar, quote text, author name + role. Two testimonials shown.
6. **Services / Features** — 4 service items with icon + title + description:
   - Car wash 100% without detergents
   - Efficient surface drying machines
   - We have an application
   - Safe lacquer protection
7. **Video / CTA** — Dark background section: heading "Your car will look as your new one" + description text
8. **Footer** — Dark bg (image overlay), 4 columns:
   - Column 1: Logo + description + phone + email
   - Column 2: Opening hours
   - Column 3: Navigation links
   - Column 4: Social icons (Twitter, Facebook, Pinterest)
     Copyright bar at bottom

## Fidelity Notes

### Color Palette

- Primary: #007AFF (bright sky-blue) — used for all CTAs, links, interactive elements
- Dark navy: #010A44 / #072366 — headings, nav links
- Blue gradient: linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF) — button backgrounds
- Body text: #10285d
- Section subtitle accent: #70D76A — green uppercase span in section titles
- Card/widget bg: #f9f9ff
- Section bg: #EEF6FF (about section)
- Card border: 1px solid #E7E6EB

### Typography

- Body + hero: Poppins (300–800)
- Headings + nav: Work Sans (300–800)
- Hero heading: Poppins 800, 124px desktop → 47px mobile
- Section headings: Work Sans 500, 48px desktop

### Button Styles

- `.btn`: border-radius 30px, gradient bg, uppercase, 14px, box-shadow
- `.borders-btn`: outlined, blue border, fills on hover
- `.boxed-btn`: white bg, blue text/border, uppercase, letter-spacing 3px

### Layout Patterns

- Hero: min-height 850px desktop, full-width bg with dark overlay
- About: overlapping card layout (negative margin top -100px)
- Pricing: 3-column Bootstrap grid (col-xl-4)
- Testimonials: slick slider
- Footer: dark bg with image, 4-column grid

### Key Visual Details from Screenshot

- Professional automotive service aesthetic
- Blue + neutral color scheme feels clean and trustworthy
- Layered overlapping elements add depth (about card overlaps hero)
- Large bold typography in hero creates strong visual impact
- Pill-shaped CTA buttons are prominent and inviting
