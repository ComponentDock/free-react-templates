# Template: Stamina (Crossfit / Gym)

## Purpose

Recreation of ColorLib "Endurance" — a crossfit/gym landing page template.
- **Source slug:** `endurance`
- **Source URL:** https://colorlib.com/wp/template/endurance/
- **Preview URL:** https://preview.colorlib.com/theme/endurance/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict)
- **Package:** `@free-react-templates/stamina`
- **Surge target:** `stamina.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`style.css`) and inline styles.

| Token | Value | Usage |
|---|---|---|
| `--brand-primary` | `#007bff` | Buttons, links, highlights |
| `--brand-yellow` | `#fcd307` | Accent (pulsing dot animation) |
| `--brand-orange` | `#fc6b29` | Accent (pulsing dot animation) |
| `--dark-bg` | `#1d1919` | Navbar scrolled, counter section bg |
| `--light-bg` | `#f8f9fa` | Alternating section backgrounds |
| `--overlay` | `rgba(0,0,0,0.2)` | Hero slider overlay |
| `--text-dark` | `#000` | Heading text |
| `--text-muted` | `#666666` | Body copy |
| Font family | `Roboto` (300, 400, 500, 700, 900) | All text |
| Button radius (hero) | `30px` (pill) | Hero CTA buttons |
| Button radius (standard) | `0.25rem` | General `.btn` |
| Navbar | Transparent → solid `#000` on scroll | Sticky dark nav |

## Section Structure (order from preview)

1. **TopBar** — contact info (phone, email) + open hours on black strip
2. **Navbar** — dark, transparent-to-solid on scroll, logo "Stamina" with decorative bars, links: Home, About, Programs, Trainers, Pricing, Blog, Contact
3. **HeroSlider** — owl-carousel style, two slides with full-height background images + dark overlay, large heading ("Crossfit is for Everyone" / "Crossfit Gym"), subheading, CTA button (pill shape, white border)
4. **About** — two-column: image left (video thumb style), text right ("Welcome to Endurance Crossfit Gym"), animated counters strip (1K+ Equipment, Open 24/7, Food Supply, Successful Stories)
5. **Features/Goals** — `bg-light`, 4-column icon grid, items: "Kick your feet up", "Analyze Your Goal", "Work Hard On It", "Improve Your Performance", "Achieve Your Perfect Body"
6. **Programs** — `bg-darken` (dark #1d1919), carousel of 6 program cards with icons: Muscle Sculpt, Fat Burn, Cycling, Pilates & Stretching, Boxing, + more
7. **Pricing** — `bg-light`, 3-column pricing cards: One Day Training, Monthly, Annual (with features list and CTA button)
8. **Testimonials** — carousel with avatar, quote, and dots
9. **Appointment/CTA** — full-width parallax background, "Have a Questions?" heading, contact form (name, email, subject, message + submit)
10. **Blog** — `bg-light`, 3-column grid of blog cards with image, date, title, excerpt
11. **Counter** — dark parallax bg, animated number counters (staff count, service count, client count, happy clients)
12. **Footer** — dark, 3-column widget layout: about text + social icons, quick links, recent blog sidebar, contact info

## Gherkin Requirements

### Feature: Stamina Template Rendering

Scenario: TopBar displays contact info
  Given the page loads
  Then the top bar shows a phone number, email address, and open hours
  And the top bar has a black background with white text

Scenario: Navbar is sticky and changes on scroll
  Given the page loads
  When the user scrolls past the hero
  Then the navbar becomes solid dark background
  And the logo reads "Stamina" with decorative side bars
  And navigation links include Home, About, Programs, Trainers, Pricing, Blog, Contact

Scenario: Hero slider shows full-screen slides
  Given the page loads
  Then the hero section displays a carousel with at least 2 slides
  And each slide has a full-height background image with dark overlay
  And each slide has a large heading, subheading, and CTA button
  And CTA buttons have pill shape (border-radius 30px) with white border

Scenario: About section shows gym info and counters
  Given the user scrolls to the About section
  Then there is a heading "Welcome to Stamina Crossfit Gym"
  And an image/video area on the left
  And animated counters show Equipment count, open hours, food supply, stories

Scenario: Features grid displays goals
  Given the user scrolls to the Features section
  Then 5 feature items are displayed in a grid
  And each has an icon, title, and brief description

Scenario: Programs carousel shows training types
  Given the user scrolls to Programs
  Then a carousel displays 6 program cards
  And each card has an icon and label (Muscle Sculpt, Fat Burn, Cycling, Pilates & Stretching, Boxing, and one more)

Scenario: Pricing cards show membership plans
  Given the user scrolls to Pricing
  Then 3 pricing cards are displayed
  And each card has a plan name, price, feature list, and CTA button
  And the middle/featured card is visually highlighted

Scenario: Testimonials carousel
  Given the user scrolls to Testimonials
  Then a carousel displays testimonial quotes
  And each testimonial has an avatar image, quote text, and pagination dots

Scenario: Contact form in appointment section
  Given the user scrolls to the Contact section
  Then a form is displayed with fields: name, email, subject, message
  And a submit button is present
  And the section has a parallax background image

Scenario: Blog section shows recent posts
  Given the user scrolls to Blog
  Then 3 blog cards are displayed in a row
  And each card has an image, date tag, title, and excerpt text

Scenario: Counter bar shows animated stats
  Given the user scrolls to the Counter section
  Then 4 animated counters are displayed on a dark parallax background
  And counters show: staff count, service hours, clients served, happy clients

Scenario: Footer layout
  Given the user scrolls to the footer
  Then the footer has 3 widget columns
  And column 1 has about text and social icons
  And column 2 has quick links
  And column 3 has contact info
  And the footer links to Component Dock

Scenario: Responsive design
  Given the page loads on a mobile viewport
  Then the navbar collapses to a hamburger menu
  And columns stack vertically
  And the hero text remains centered and readable

Scenario: Footer links to Component Dock
  Given the user scrolls to the footer
  Then there is a link to https://www.componentdock.com/
  And the link text includes "Component Dock"

## Verification Checklist

- [ ] TopBar renders with contact info on black background
- [ ] Navbar sticky with scroll behavior (transparent → solid)
- [ ] Logo uses decorative bars styling
- [ ] Hero slider with 2+ slides, overlay, pill CTA buttons
- [ ] About section with image and counter strip
- [ ] Features grid with 5 items (icon + title + description)
- [ ] Programs carousel with 6 program cards
- [ ] Pricing cards (3 plans) with featured highlight
- [ ] Testimonials carousel with avatars
- [ ] Contact form with all fields
- [ ] Blog grid with 3 cards
- [ ] Counter section with dark parallax and 4 animated counters
- [ ] Footer with 3 columns + Component Dock link
- [ ] All fonts are Roboto (loaded via Google Fonts)
- [ ] Brand colors: #007bff primary, #fcd307 yellow, #fc6b29 orange accents
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] lucide-react icons throughout
- [ ] Footer links to componentdock.com
- [ ] CNAME: stamina.free.componentdock.com
