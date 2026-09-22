# Template: Crestview (Hotel)

## Purpose

Recreation of ColorLib's **Radisson** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source slug:** `radisson`
- **ColorLib page:** https://colorlib.com/wp/template/radisson/
- **Live preview:** https://preview.colorlib.com/theme/radisson/
- **New name:** `crestview` (package `@free-react-templates/crestview`)
- **Surge target:** `crestview.free.componentdock.com`

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#4d8eff` | Bright blue — nav links, buttons, links, accents |
| `--brand-primary-hover` | `#4d8eff` (darker shade on hover) | Button hover states |
| `--brand-dark` | `#000000` | Black — banner area overlay, dark section background |
| `--bg-white` | `#ffffff` | White sections, cards |
| `--bg-light` | `#f1f9ff` | Very light blue — section backgrounds, testimonial area |
| `--text-dark` | `#222222` | Dark headings, nav active |
| `--text-body` | `#777777` | Body text, secondary text |
| `--text-muted` | `#eeeeee` | Borders, dividers |
| `--font-heading` | `"Playfair Display", serif` | All headings (h1–h6) |
| `--font-body` | `"Roboto", sans-serif` | Body text, nav, forms, buttons |
| `--btn-radius` | `0px` | Sharp rectangular buttons (no border-radius) |
| `--btn-bg` | `#4d8eff` | Primary button background |
| `--btn-text` | `#ffffff` | Button text |
| `--section-shadow` | `0px 3px 16px 0px rgba(0,0,0,0.1)` | Cards, booking form shadow |
| `--overlay-black` | `rgba(0,0,0,0.15)` | Hero image overlay gradient |

## Section Structure (from preview DOM)

### 1. Top Bar + Navbar
- Top info bar: phone number + currency/language selectors (dark or subtle bg)
- Sticky navbar with white background + shadow on scroll
- Logo (image-based)
- Nav links: Home, About, Gallery, Pages (Elements, Rooms), Blog, Contact
- Responsive hamburger toggle on mobile

### 2. Hero Banner
- Full-width section with parallax background image
- Dark gradient overlay (rgba(0,0,0,0.15))
- Centered text: "Welcome to" (small uppercase) + "Radisson" (very large Playfair Display, 120px desktop / 60px mobile)
- Subtext paragraph (max-width 620px, centered)
- Play button for video popup

### 3. Booking Form
- White card with shadow (box-shadow: 0px 3px 16px 0px rgba(0,0,0,0.1))
- 4-column grid: Check-in, Check-out, Total Guests, Coupon Code + Check Availability button
- Date displays with day/month styling
- "Check Availability" button (sharp corners, #4d8eff blue)

### 4. About Section
- Centered text-only section with light bg (#f1f9ff)
- Decorative title treatment: small subtitle + large heading + body paragraph
- "Request Custom Price" CTA button
- Video embed area below (parallax image with play button overlay, dark overlay bg)

### 5. Rooms Section
- Split layout: room image left, carousel right
- Room carousel with: price ($250/night), room name (e.g. "Double Deluxe Room"), description, amenity list (2 columns: AC, Parking, Pool / Restaurant, Rental, Meal)
- "Book Now" button per slide
- Navigation arrows for carousel

### 6. Testimonials
- Light blue bg (#f1f9ff) section
- Quote icon at top
- Testimonial carousel: star ratings (5 gold stars), testimonial text, author name
- Thumbnail gallery navigation (small circular images below)

### 7. Blog
- Light blue bg (#f1f9ff) continuation
- Section heading: "Our Blog Posts"
- 3-column grid: blog card with image thumbnail, category button tag, date + comments meta, heading link, excerpt text

### 8. Footer
- Dark bg section (implied dark, standard footer treatment)
- 4-column layout: About Agency text, Quick Links (2 sub-columns), Newsletter signup form, Instagram feed (8 image grid)
- Bottom bar: copyright text + social icons (Facebook, Twitter, Dribbble, Behance)
- Newsletter form with email input + submit button

## Verification Checklist

- [ ] Section order matches original: TopBar → Navbar → Hero → Booking → About → Rooms → Testimonials → Blog → Footer
- [ ] Playfair Display + Roboto font pairing loaded via Google Fonts
- [ ] Sharp-cornered buttons (border-radius: 0px) matching Radisson style
- [ ] Blue primary color (#4d8eff) used consistently for CTAs and accents
- [ ] Hero has parallax-style background with dark gradient overlay
- [ ] Booking form has shadow card, 4-field grid, "Check Availability" button
- [ ] Rooms section uses split layout (image left, carousel right)
- [ ] Testimonials on light blue (#f1f9ff) background with star ratings
- [ ] Blog section with 3-column card grid
- [ ] Footer has 4-column layout + newsletter + Instagram grid
- [ ] No ColorLib references in app code; footer links to Component Dock
- [ ] `public/CNAME` contains `crestview.free.componentdock.com`
- [ ] `package.json` homepage set to `https://crestview.free.componentdock.com`
