# Template: Tidecrest (Hotel)

## Purpose

Recreation of ColorLib's **Marian** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source slug:** `marian`
- **ColorLib page:** https://colorlib.com/wp/template/marian/
- **Live preview:** https://preview.colorlib.com/theme/marian/
- **New name:** `tidecrest` (package `@free-react-templates/tidecrest`)
- **Surge target:** `tidecrest.free.componentdock.com`

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#dca73a` | Golden amber — buttons, nav hover, booking accents |
| `--brand-primary-hover` | `#f1b233` | Lighter gold — button hover states |
| `--brand-dark` | `#16161a` | Near-black — footer background |
| `--brand-accent-teal` | `#4cd3e3` | Teal accent |
| `--brand-accent-blue` | `#415094` | Deep blue accent |
| `--brand-accent-coral` | `#f44a40` | Coral/red accent |
| `--bg-white` | `#ffffff` | White sections, booking box |
| `--bg-light` | `#f9f9ff` | Very light lavender-white section backgrounds |
| `--text-dark` | `#222222` | Dark headings, nav links |
| `--text-body` | `#999999` | Body text |
| `--text-muted` | `#888888` | Muted/secondary text |
| `--font-heading` | `"Noto Serif", serif` | All headings (h1–h3) |
| `--font-body` | `"Lato", sans-serif` | Body text, nav, forms, buttons |
| `--btn-radius` | `5px` | Slightly rounded buttons |
| `--booking-box-radius` | `10px` | Booking form card border-radius |
| `--booking-box-shadow` | `0 8px 79px rgba(0,0,0,0.08)` | Booking form card shadow |

## Section Structure (from preview DOM)

### 1. Navbar
- Sticky header with transparent → white background on scroll
- Logo (image-based, brand text "Hotel")
- Nav links: Home, About, Service, Blog (with dropdown), Pages (Rooms, Element), Contact
- CTA button: "Book Online" (golden amber `#dca73a`)
- Responsive hamburger on mobile

### 2. Hero Slider
- Full-width carousel (3 slides) with dark overlay on background image
- Min-height: 800px (desktop), 600px (tablet), 350px (mobile)
- Centered text: "top hotel in the city" (heading) + "Hotel & Resort" (subheading)
- Dot navigation style

### 3. Booking Form
- Floating card overlapping hero (negative margin -89px)
- White background, border-radius 10px, subtle shadow
- Fields: Check In Date, Check Out Date, Adults (select), Children (select), Rooms (select)
- CTA: "Book Now" button (golden amber)
- Responsive flex-wrap layout

### 4. About / Customer Section
- Two-column layout: customer images left (overlapping people), text right
- "25 Years of Service Experience" badge (circular, heartbeat animation)
- Heading: "Make the customer the hero of your story"
- Body text: company description
- CTA: "Learn More" link with arrow

### 5. Room Cards
- Section heading: "Our Rooms" (decorative double-text archivment style)
- 6-column grid (3x2): room card per item
- Each card: image + "Classic Double Bed" title + "$150 / par night" price
- "View more" CTA button (golden amber)

### 6. Dining & Facilities
- Two stacked full-width background image sections
- Left-aligned: "Our Restaurant" → "Dining & Drinks" + description + "Learn More" border button
- Right-aligned: "Our Pool" → "Swimming Pool" + description + "Learn More" border button
- Parallax-style background images

### 7. Testimonials
- Centered carousel with decorative heading (logo image + "Testimonial" double-text)
- Star rating (5 gold stars)
- Quote text + author: "Clifford Frazier, Regular Client"

### 8. Blog
- Section heading: "Our Blog" (decorative double-text)
- 3-column card grid
- Each card: image + category tag ("news") + author ("Jhon Guru") + title + date + comments count
- Card title: "5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are"

### 9. Gallery
- Full-width owl carousel slider
- 3 gallery images
- Hover effects on images

### 10. Footer
- Dark background (`#16161a`)
- 4-column layout:
  - Logo + social icons (Facebook, Twitter, Globe, Behance) + copyright
  - Quick Links: About Mariana, Our Best Rooms, Our Photo Gallery, Pool Service
  - Reservations: phone, Skype, email
  - Our Location: address + newsletter email signup form

## Requirements

### Feature: Tidecrest template behaviour

Feature: Tidecrest — Hotel Template

Background:
- **GIVEN** the app is deployed at tidecrest.free.componentdock.com
- **AND** the page loads with no errors

#### Scenario: Navbar renders all navigation items

- **THEN** the navbar displays the brand "Tidecrest"
- **AND** the navbar has links for "Home", "About", "Service", "Blog", "Contact"
- **AND** the navbar shows a "Book Online" CTA button
- **AND** the navbar collapses to a hamburger on mobile

#### Scenario: Hero slider renders correctly

- **THEN** the hero section displays a full-width background image
- **AND** the hero displays the heading "top hotel in the city"
- **AND** the hero displays the subtitle "Hotel & Resort"
- **AND** the hero has dot-style navigation

#### Scenario: Booking form renders correctly

- **THEN** the booking form displays Check In Date input
- **AND** the booking form displays Check Out Date input
- **AND** the booking form displays Adults selector
- **AND** the booking form displays Children selector
- **AND** the booking form displays Rooms selector
- **AND** the booking form displays a "Book Now" button in golden amber

#### Scenario: About section displays service experience

- **THEN** the about section displays "25 Years of Service Experience"
- **AND** the about section displays the heading "Make the customer the hero of your story"
- **AND** the about section displays a "Learn More" link

#### Scenario: Room cards display pricing

- **THEN** 6 room cards are displayed in a grid
- **AND** each room card shows an image
- **AND** each room card shows a title "Classic Double Bed"
- **AND** each room card shows a price "$150 / par night"
- **AND** a "View more" button is displayed below the grid

#### Scenario: Dining and pool sections display correctly

- **THEN** a "Dining & Drinks" section is displayed with a background image
- **AND** a "Swimming Pool" section is displayed with a background image
- **AND** each section has a "Learn More" border button

#### Scenario: Testimonials section renders correctly

- **THEN** the testimonial section displays a star rating
- **AND** the testimonial section displays a quote
- **AND** the testimonial section displays the author "Clifford Frazier, Regular Client"

#### Scenario: Blog section displays articles

- **THEN** 3 blog cards are displayed in a grid
- **AND** each blog card shows an image
- **AND** each blog card shows a category tag
- **AND** each blog card shows an author name
- **AND** each blog card shows a title
- **AND** each blog card shows a date and comment count

#### Scenario: Gallery carousel renders

- **THEN** the gallery section displays a carousel of images

#### Scenario: Footer renders all columns

- **THEN** the footer displays a logo and social icons
- **AND** the footer displays Quick Links
- **AND** the footer displays Reservations contact info
- **AND** the footer displays a location address
- **AND** the footer displays a newsletter signup form
- **AND** the footer links to componentdock.com

## Verification Checklist

- [ ] Navbar sticky with scroll effect, all links functional
- [ ] Hero slider auto-rotates with dot navigation
- [ ] Booking form fields all render, dates use date pickers
- [ ] About section: overlapping images + service badge visible
- [ ] Room cards: 6 cards in 3x2 grid with prices
- [ ] Dining/pool sections with background images and border buttons
- [ ] Testimonials carousel with star ratings
- [ ] Blog cards: 3 in grid with metadata
- [ ] Gallery carousel functional
- [ ] Footer: 4 columns, newsletter form, social icons, Component Dock link
- [ ] Responsive: mobile hamburger menu, stacked layouts
- [ ] Design tokens: golden amber `#dca73a` brand, Noto Serif headings, Lato body
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
