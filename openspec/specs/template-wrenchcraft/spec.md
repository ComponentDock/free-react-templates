# Template: WrenchCraft (Automotive Repair)

## Purpose

Recreation of ColorLib **Autorepair** template for React 19 + Vite + Tailwind 4 + TypeScript.

- **Source slug:** `autorepair`
- **Source URL:** https://colorlib.com/wp/template/autorepair/
- **Preview URL:** https://preview.colorlib.com/theme/autorepair/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/autorepair-free-template.jpg
- **Category:** Automotive / Car Repair Services

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and inline `<style>`:

| Token | Value | Notes |
|---|---|---|
| Font family | `Poppins`, sans-serif | Google Fonts, weights 300–900 |
| Brand blue | `#064acb` | Intro bar background, primary accent |
| Bootstrap primary | `#007bff` | Hero CTA buttons, general primary |
| Accent orange | `#f79f24` | Nav link underline hover effect |
| Dark backgrounds | `#1d2124`, `#202020`, `#23272b` | Footer, dark sections |
| Light backgrounds | `#f7f7f7`, `#f8f9fa` | Alternating section backgrounds |
| Text color | `#000` (body), `#fff` (on dark) | Standard Bootstrap dark text |
| Button radius | Rounded (Bootstrap 4 default ~0.25rem) | `.btn` classes |
| Overlay | `rgba(0, 0, 0, 0.4)` (hero) | Dark semi-transparent on hero/appointment images |
| Section pattern | Alternating white / light gray | `.ftco-section` / `.bg-light` |

## Section Order (from live preview)

1. **Navbar** — Logo "WrenchCraft." + links (Home, About, Services, Projects, Blog, Contact) + "Book an appointment" primary CTA button. Fixed/sticky navigation.
2. **Hero Slider** — Full-width image carousel (2 slides) with dark overlay. Each slide: subtitle (h2) + headline (h1) + primary CTA button. Left-aligned text within container.
3. **Intro CTA Bar** — Blue background (#064acb) banner spanning container width. Wrench icon + "Are you ready? Let's repair it now!" heading + orange "Book an Appointment" button on right.
4. **Services** — White background. Centered heading: "Our car services". 3-column grid, 2 rows (6 services total): Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck, Car Maintenance. Each card: icon + title + description + "Read more" link.
5. **About / Welcome** — Light gray background. Split layout: left = video thumbnail with play button overlay, right = "Welcome to WrenchCraft" subtitle + descriptive heading + paragraph + tabbed content (Our Mission / Our Vision / Our Value).
6. **Statistics Counter** — White background. 4-column grid: Years of Experience (45), Projects Completed (8,500), Happy Customers (2,342), Award Winning (30). Animated counters.
7. **Appointment Booking** — Full-width section with dark background image + overlay. Form panel on right half: service dropdown, name, vehicle number, date, time, message textarea, "Send message" dark button. White text on overlay.
8. **Testimonials** — Light gray background. "Testimonies" subtitle + "Happy Clients & Feedbacks" heading. Carousel of testimonial cards: quote icon, testimonial text, user avatar, name, position.
9. **Blog / News** — White background. "News & Blog" subtitle + "Latest news from our blog" heading. 3-column blog card grid: featured image, author avatar + name + date, article title.
10. **Pricing** — Light gray background. "Price & Plans" subtitle + "Pricing" heading. 4-column pricing cards: service name, price ($), description, "Get Started" button.
11. **Projects Gallery** — White background. "Projects" subtitle + "Done Projects" heading. Full-width 4-column image grid with overlay labels (category + title). Lightbox expand icon on hover.
12. **Footer** — Dark background. 4-column layout: Logo + description + social icons, Services list, Contact information (address, phone, email), Business Hours. Copyright bar at bottom with Component Dock link.

## Gherkin Requirements

### Feature: WrenchCraft Template

#### Scenario: Navbar renders with correct links and CTA
- **Given** the user visits the WrenchCraft homepage
- **Then** the navbar displays the "WrenchCraft." logo
- **And** navigation links include: Home, About, Services, Projects, Blog, Contact
- **And** a "Book an appointment" primary button is visible

#### Scenario: Hero slider displays slides with CTA
- **Given** the hero section is rendered
- **Then** at least 2 slides are displayed with background images
- **And** each slide shows a subtitle, headline, and primary CTA button
- **And** slides auto-advance or respond to navigation controls

#### Scenario: Intro CTA bar is visible
- **Given** the hero section is visible
- **Then** a blue background CTA bar appears below the hero
- **And** it shows a heading with "repair" messaging
- **And** a "Book an Appointment" button is present

#### Scenario: Services section shows 6 service cards
- **Given** the services section is rendered
- **Then** the heading "Our car services" is displayed
- **And** 6 service cards are shown in a 3-column grid
- **And** each card has an icon, title, description, and "Read more" link
- **And** services include: Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck, Car Maintenance

#### Scenario: About section with tabs
- **Given** the about section is rendered
- **Then** a video thumbnail area with play button is shown on the left
- **And** the right side shows "Welcome to WrenchCraft" heading
- **And** 3 tabs are present: Our Mission, Our Vision, Our Value
- **And** clicking each tab reveals its content

#### Scenario: Statistics counter section
- **Given** the counter section is rendered
- **Then** 4 statistics are displayed in a row
- **And** values include: 45 (Years), 8500 (Projects), 2342 (Customers), 30 (Awards)

#### Scenario: Appointment form submission
- **Given** the appointment section is rendered
- **Then** a form with fields is displayed: service select, name, vehicle number, date, time, message
- **And** a "Send message" button submits the form
- **And** the section has a dark background image with overlay

#### Scenario: Testimonials carousel
- **Given** the testimonials section is rendered
- **Then** a carousel of testimonial cards is displayed
- **And** each card shows a quote icon, testimonial text, avatar, name, and position

#### Scenario: Blog section shows 3 articles
- **Given** the blog section is rendered
- **Then** the heading "Latest news from our blog" is displayed
- **And** 3 blog cards are shown in a 3-column grid
- **And** each card has an image, author info, and article title

#### Scenario: Pricing section shows 4 plans
- **Given** the pricing section is rendered
- **Then** the heading "Pricing" is displayed
- **And** 4 pricing cards are shown
- **And** each card shows a service name, price, description, and "Get Started" button

#### Scenario: Projects gallery grid
- **Given** the projects section is rendered
- **Then** the heading "Done Projects" is displayed
- **And** a 4-column image grid is shown
- **And** each image has a category label and title overlay

#### Scenario: Footer with all columns
- **Given** the footer is rendered
- **Then** 4 footer columns are present: brand info + social links, services list, contact information, business hours
- **And** a copyright line includes a link to Component Dock (https://www.componentdock.com/)

#### Scenario: Responsive layout
- **Given** the user views the template on a mobile viewport
- **Then** the navbar collapses into a hamburger menu
- **And** service cards stack vertically
- **And** the about section stacks vertically (image above text)
- **And** pricing cards stack vertically
- **And** blog cards stack vertically
- **And** footer columns stack vertically

#### Scenario: No ColorLib references in app code
- **Given** the template is built
- **Then** no `apps/wrenchcraft/` file contains "colorlib" or "preview.colorlib.com"
- **And** provenance is only in the spec and TEMPLATES.md

#### Scenario: Footer links to Component Dock
- **Given** the footer is rendered
- **Then** a link to https://www.componentdock.com/ is present
- **And** it is branded as "Component Dock"

## Verification Checklist

- [ ] Navbar: logo, 6 nav links, primary CTA button
- [ ] Hero: 2 slides with images, overlay, subtitle + headline + CTA
- [ ] Intro bar: blue (#064acb) background, icon, heading, orange button
- [ ] Services: 6 cards (3x2 grid), icons via lucide-react, "Read more" links
- [ ] About: split layout, video thumbnail area, 3 tabs with content
- [ ] Counters: 4 animated stats in a row
- [ ] Appointment: dark background image, form with all fields, submit button
- [ ] Testimonials: carousel, 5+ cards with quote, avatar, name, position
- [ ] Blog: 3 cards with image, author, date, title
- [ ] Pricing: 4 cards with name, price, description, CTA button
- [ ] Projects: 4-column image grid with overlay labels
- [ ] Footer: 4 columns, social links, services, contact, hours, Component Dock link
- [ ] Responsive: hamburger nav, stacking on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Package name: @free-react-templates/wrenchcraft
- [ ] CNAME file: wrenchcraft.free.componentdock.com
- [ ] Tests at 100% coverage
- [ ] build passes, no lint/typecheck errors
