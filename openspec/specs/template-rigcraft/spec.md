# Template: Rigcraft (Construction / Heavy Equipment Rental)

## Purpose

Recreation of the ColorLib "Equipo" template — a heavy equipment rental
company single-page site. Built with React 19, Vite, Tailwind CSS 4,
TypeScript.

- **Source:** https://colorlib.com/wp/template/equipo/
- **Preview:** https://preview.colorlib.com/theme/equipo/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/equipo-free-template.jpg
- **New name:** `rigcraft` (app folder: `apps/rigcraft`, package: `@free-react-templates/rigcraft`)
- **Surge target:** `https://rigcraft.free.componentdock.com`

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and inline HTML.

### Brand Colors
| Token            | Value     | Usage                                       |
| ---------------- | --------- | ------------------------------------------- |
| `brand-primary`  | `#042e4f` | Dark navy — navbar, section headings, footer widget text |
| `brand-accent`   | `#ffa931` | Warm amber/orange — CTAs, highlights, loader spinner |
| `white`          | `#ffffff` | Body background, card backgrounds, footer text |
| `light-gray`     | `#f8f9fa` | `.bg-light` alternating section backgrounds  |
| `text-dark`      | `#212529` | Body text                                   |
| `text-muted`     | `#6c757d` | Secondary/meta text (blog dates, subtitles)  |
| `link-blue`      | `#007bff` | Hyperlinks, footer link hover               |

### Typography
- **Font family:** `"Roboto", sans-serif` (weights 300, 400, 500, 700, 900)
- Loaded via Google Fonts / CDN font-face

### Buttons
- **Primary (`.btn-primary`):** background `#007bff`, hover `#0069d9`, color `#fff`
- **Secondary (`.btn-secondary`):** background `#6c757d`, hover `#5a6268`, color `#fff`
- **Border radius:** `0.25rem` (Bootstrap 4 default — nearly flat, slight rounding)
- **Padding:** Bootstrap defaults (`py-2 px-3` in usage)

### Section Backgrounds
- Hero: full-screen background image (`images/bg_2.jpg`) with dark overlay
- Services strip (`ftco-services-2`): solid `bg-primary` = `#042e4f` navy
- About / counter section: white background
- CTA intro (`ftco-intro`): full-width background image (`images/bg_3.jpg`) with overlay
- Rental services grid: white background
- Testimonials: background image (`images/bg_1.jpg`) with overlay
- Blog section: `bg-light` = `#f8f9fa`
- Footer: dark `#141414` / `#111111` / `#02121e` dark
- Footer bottom bar: `bg-primary` = `#042e4f` navy

### Layout
- Bootstrap 4 grid (12-column, responsive)
- Container max-width: ~1140px (Bootstrap default)
- Hero: full-viewport height (`js-fullheight`)
- Services: 4-column grid (icon + heading + description)
- Counter/about: split layout (image left, text + counter right)
- CTA intro: full-width parallax image with centered text
- Rental services: 4-column card grid (image + title + price)
- Testimonials: owl-carousel slider
- Blog: 3-column card grid (image thumbnail + meta + excerpt)
- Footer: 4-column widget grid

## Gherkin Requirements

### Feature: Rigcraft Template

#### Scenario: Navbar renders with brand and navigation links
- Given the page loads
- Then a top utility bar shows the brand logo, phone number, and location
- And a dark navigation bar displays links: Home, About, Services, Gallery, Blog, Contact
- And a "Request A Quote" CTA link is visible in the nav
- And the navbar collapses to a hamburger menu on mobile

#### Scenario: Hero section displays full-screen with overlay
- Given the page loads
- Then a full-screen hero section shows with a background image and dark overlay
- And the heading reads "Lease The Right Equipment For Your Job"
- And a primary CTA button is visible
- And the hero section takes at least the full viewport height

#### Scenario: Why Choose section shows service highlights on navy background
- Given the user scrolls past the hero
- Then a navy-background section appears with heading "Why Choose To Rent"
- And four service items display: 24/7 Customer Service, Prompt Delivery, Reliable Equipment, New Heavy Equipment
- And each item has an icon, heading, and short description
- And a "Request Quote" button is visible

#### Scenario: About / Counter section shows company info with stats
- Given the user scrolls further
- Then a white section appears with heading "Welcome to Rigcraft"
- And a paragraph describes the rental company
- And a counter displays equipment numbers (animated on scroll)
- And a background image is shown on one side of the layout

#### Scenario: CTA banner with parallax background
- Given the user scrolls past the about section
- Then a full-width parallax image section appears
- And centered text reads "We Are Rigcraft A Heavy Equipment Renting Company"

#### Scenario: Rental Services grid shows equipment cards
- Given the user scrolls to services
- Then a section with heading "Rental Services" appears
- And four equipment cards display: Bulldozer, Forklift, Crane, Excavator
- And each card shows an image, title, and price
- And cards are arranged in a 4-column grid

#### Scenario: Testimonials carousel
- Given the user scrolls to testimonials
- Then a section with background image appears
- And the heading reads "Our Happy Customer Says"
- And a carousel shows customer testimonial cards
- And each card has an avatar, quote, name, and position

#### Scenario: Blog section shows recent posts
- Given the user scrolls to the blog area
- Then a light-gray section appears with heading "Latest Blog Updates"
- And three blog cards display with thumbnail, date, author, comment count
- And each card has a title, excerpt, and "Read more" button

#### Scenario: Footer with four widget columns
- Given the user scrolls to the bottom
- Then a dark footer appears with four columns: brand/logo, Links, Services, Have a Questions
- And social media icons (Twitter, Facebook, Instagram) are shown in the first column
- And the footer bottom bar has a navy background with copyright text

#### Scenario: Footer links to Component Dock
- Given the user views the footer
- Then the footer contains a link to https://www.componentdock.com/

## Verification Checklist

- [ ] Spec matches section order from the live preview DOM exactly
- [ ] Brand color `#042e4f` (navy) used for navbar and section backgrounds
- [ ] Brand accent `#ffa931` (amber) used for CTAs and highlights
- [ ] Font is Roboto (300, 400, 500, 700) via Google Fonts
- [ ] Button border-radius `0.25rem` (Bootstrap default)
- [ ] Hero is full-viewport with background image + overlay
- [ ] Services section has navy background with 4 items
- [ ] About section has counter numbers
- [ ] CTA parallax banner present
- [ ] Rental services grid: 4 equipment cards
- [ ] Testimonials carousel with avatar + quote
- [ ] Blog grid: 3 cards with meta info
- [ ] Footer: 4 columns, social icons, copyright
- [ ] Footer links to componentdock.com (not Colorlib)
- [ ] No ColorLib references in app code
- [ ] Placeholder images via `https://picsum.photos/seed/rigcraft-<n>/<w>/<h>`
- [ ] 100% test coverage for all components
