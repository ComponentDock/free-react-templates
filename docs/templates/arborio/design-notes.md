# Arborio — Design Notes

## Source
- **ColorLib:** Risotto — https://colorlib.com/wp/template/risotto/
- **Preview:** https://preview.colorlib.com/theme/risotto/
- **Category:** Restaurant landing page

## Structure order (section-by-section fidelity notes)

### 1. Navbar (dual-layer)
- **Top bar:** white background (#FFF), logo left, social icon buttons right (Facebook, Twitter, Google+ — use lucide-react equivalents)
- **Bottom bar:** light grey background (#F9F9F9), main nav left (uppercase, 14px), CTA "Reserve" button right, contact info (phone + address with icons) far right
- **Sticky behavior:** on scroll, bottom nav becomes fixed with shadow + border, white bg
- **Mobile:** hamburger toggle, slide-in dark sidebar nav (#151515 bg)

### 2. Hero
- Full viewport height (100vh), parallax background image, dark overlay (0.7 opacity black)
- Centered content: "Welcome To" heading in Dancing Script cursive font (white), subtext paragraph (white), orange CTA "Discover Menu" button
- Heading h1 font: Dancing Script, white text

### 3. About
- Section padding: 80px top/bottom
- Section header centered: subtitle "About Us" in brand orange (#f36700), weight 400; title "The Arborio Restaurant" in Dancing Script cursive
- Title has a 15px × 2px orange underline accent, centered
- Two-column layout: left 5 cols (welcome paragraph, lead weight), right 7 cols (description)
- Below: owl-carousel gallery slider with mixed single/stacked image items
  - Single items: full-width image
  - Double items: two images stacked vertically
  - Triple items: one large + two small in a sub-grid

### 4. Menu
- Parallax background with overlay (same treatment as hero)
- Section header: subtitle "Discover" (white, not orange — check CSS: actually sub-title is #f36700), title "Our Menu" in white Dancing Script
- Tab navigation: Dinner | Drinks | Lunch | Dessert (note: original has "Launch" typo — fix to "Lunch")
- Active tab: white text on transparent bg; inactive: white text
- 2-column dish grid, each dish: name (Quicksand bold) + price (right-aligned, brand orange) + description paragraph
- Tab switching: show/hide content panels (use state)

### 5. Reservation
- Background image (no overlay, no parallax — check CSS: `.bg-image` without `.overlay` or `.bg-parallax`)
- Left side (col-md-6 + offset-1): form with section header
  - Subtitle "Reservation", title "Book Your Table" (white, Dancing Script)
  - 2-column form grid: Name, Phone, Date (left) | Email, Guests select, Time (right)
  - Inputs: rounded (border-radius 40px), 2px solid #ECECEC border, transparent bg
  - "Book Now" CTA button centered
- Right side (col-md-4): Opening Time panel
  - Title "Opening Time" (white, Dancing Script)
  - List of days with hours: Sun–Thu 8:00am–11:00pm, Fri–Sat Closed

### 6. Events
- White background section
- Section header centered: subtitle "Special Event" (brand orange), title "Upcoming Event" (Dancing Script)
- 2-column grid, 4 event cards:
  - Left: small image (160px wide) with orange date badge overlay (60×60px, triangular cutout at bottom)
  - Right: time (clock icon + "8.00PM - 10.00PM"), title (h3 link), description paragraph
  - Date badge: brand orange bg, white text (day + month), CSS triangle cutout using border tricks

### 7. Contact
- White background section
- Map placeholder: left 50%, positioned absolute within the section
- Right side (col-md-5, offset-7 from left):
  - Section header (left-aligned, NOT centered): subtitle "Contact Us" (brand orange), title "Get In Touch" (Dancing Script)
  - Description paragraph
  - Phone (linked), address, email (linked)
  - Social follow links: "Follow Us:" label + icon links

### 8. Footer
- Dark background (#151515), padding 40px top/bottom
- Left (col-md-6): copyright line
- Right (col-md-6): footer nav links (uppercase, 14px, grey #969696, hover brand orange)
- Links: Home, About, Menu, Reservation, Gallery, Events, Contact
- ComponentDock attribution replaces Colorlib attribution

## Token summary

| Token | Value | Usage |
|-------|-------|-------|
| brand | #f36700 | CTA buttons, active states, accents, sub-titles |
| body | #969696 | Body text, footer nav, social icons default |
| dark | #151515 | Headers, footer bg, mobile nav bg |
| grey-light | #F9F9F9 | Bottom nav bar bg |
| grey-border | #ECECEC | Input borders, social icon borders, fixed nav border |
| overlay | rgba(0,0,0,0.7) | Parallax image overlay |
| font-heading | Quicksand | h1-h4 headings (weights 400, 700) |
| font-body | Cabin | Body text (weight 400) |
| font-script | Dancing Script | Decorative titles, hero heading (weight 400) |
| btn-radius | 40px | All CTA buttons |
| btn-padding | 15px 30px | CTA buttons |
| input-radius | 40px | Form inputs (textarea 20px) |
| section-pad | 80px | Section top/bottom padding |
| title-underline | 15px × 2px #f36700 | Decorative accent below section titles |

## Implementation notes

- Use Tailwind @theme to register brand colors as custom tokens
- Load Quicksand (400,700), Cabin (400), Dancing Script (400) via Google Fonts <link> in index.html
- Gallery slider: implement as a simple CSS/JS carousel (no owl-carousel dependency)
- Tab menu: React state for active tab, conditional rendering
- Sticky nav: IntersectionObserver or scroll event for fixed class toggle
- Parallax: CSS `background-attachment: fixed` (with mobile fallback to scroll)
- Event date badge: CSS clip-path or border-based triangle for the bottom cutout
- Map: simple div placeholder (no Google Maps API key needed)
- Contact form: controlled inputs, no submission logic needed (static template)
- Mobile nav: useState toggle for hamburger, slide-in panel with backdrop
