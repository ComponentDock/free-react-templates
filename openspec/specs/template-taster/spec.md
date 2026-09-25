# Template: Taster (Restaurant)

## Purpose

Recreation of ColorLib **Meal** — a restaurant website template with hero banner, food showcase, menu tabs, chefs section, reservation form, testimonials carousel, contact form, and footer with newsletter.

- **Source:** [colorlib.com/wp/template/meal/](https://colorlib.com/wp/template/meal/)
- **Preview:** `https://preview.colorlib.com/theme/meal/`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · Vitest

## Design Tokens (extracted from `css/style.css` + preview DOM)

### Colors

| Token         | Hex       | Usage                                    |
|---------------|-----------|------------------------------------------|
| brand         | `#FF7A5C` | Coral/orange accent — buttons, tabs, loader, links, subheadings |
| text-heading  | `#000000` | All h2/h3/h4 headings                   |
| text-body     | `gray`    | Body text (paragraphs, list items)       |
| text-muted    | `#B3B3B3` | Subheadings, chef roles, muted labels    |
| bg-white      | `#FFFFFF` | Default body, about, chefs, services, testimonials, contact |
| bg-light      | `#F8F9FA` | Menu section, reservation section, hero overlay tint |
| border-gray   | `#CCCCCC` | Form control borders                    |
| white         | `#FFFFFF` | Hero button text, cover heading text     |
| black         | `#000000` | Logo, nav links, site-nav-toggle bars    |
| overlay-dark  | `rgba(0,0,0,0.05)` | ftco-46 image overlay            |

### Typography

- **Headings (h2/h3/h4):** `"Playfair Display", serif`
- **Body:** `"Open Sans", Arial, sans-serif`
- **Body font-weight:** 300 (light)
- **Body font-size:** 20px (scaled down for mobile)
- **Body line-height:** 1.8
- **Subheadings / category labels:** uppercase, letter-spacing 0.2em, 14px, color `#FF7A5C`
- **Section headings:** 50px desktop, 30px mobile
- **Button text:** 14px, uppercase, letter-spacing 0.2em, font-weight 700

### Buttons

- **Outline white (hero CTA):** 2px solid #fff, transparent bg, white text. On hover: white bg, black text, border transparent.
- **Outline primary (reservation/contact):** 2px solid primary (#FF7A5C), transparent bg. Standard Bootstrap `.btn-outline-primary` overridden.
- **btn-link (Learn More):** 12px uppercase, letter-spacing 0.15em, black, weight 900, arrow icon on hover.

### Border Radius

- **Chef avatar images:** 50% (circle)
- **Testimonial author images:** 50% (circle)
- **Logo badge:** 0 (square border)
- **Form controls:** Bootstrap default (~4px)
- **Loader spinner:** 50% (circle)

### Shadows

- **No card shadows** — flat design throughout
- **Site menu:** `box-shadow: 0 -20px 20px -5px rgba(0,0,0,0.05)`

## Section Order (from source `index.html`)

1. **Navbar** — Fixed sidebar nav (right-sliding panel), hamburger toggle top-right, logo "M" centered top, links: Home, About Us, Our Menu, Reserve A Table, Contact. Logo: black border 2px, text "M" bold 30px. On scroll: fixed top, white bg, logo inverts to white on black bg.
2. **Hero (Cover 1)** — Full-width background image with dark overlay (`background: #000` overlay). Centered heading "Welcome to Meal". Outline-white CTA button "Reserve A Table" scrolls to reservation section.
3. **Features (Find Your Best Food)** — "Find your best food" heading + subheading. Alternating image+text cards (ftco-46 pattern): row 1 = image-left + text-right with arrow-left, row 2 = text-left + image-right with arrow-right, row 2 continued = text + image with arrow-up. Each card: category label (#FF7A5C uppercase), heading (uppercase), description, "Learn More →" link.
4. **About (The Restaurant)** — White bg section. Centered heading "The Restaurant" + two paragraphs of descriptive text.
5. **Image Divider** — Full-width background image (bg_hero.png), white bg section.
6. **Chefs (Meet The Chefs)** — White bg. Heading "Meet The Chefs". 2-column layout: each chef has circular photo (200px, border-radius 50%), name (30px, Playfair Display, light 300), role "Master Chef" (muted uppercase), bio text, social icons (Facebook, Twitter, Instagram).
7. **Menu** — Light bg section. Heading "Menu" + subheading. Tabbed interface with 3 tabs: Breakfast (active), Brunch, Dinner. Each tab has 4 menu items. Each item: horizontal layout (image left, text right) on desktop. Item has thumbnail, dish name (link), description, price ($XX.99 right-aligned). Tabs use `.site-tab-nav` with active state.
8. **Services (Other Services)** — White bg. Heading + subheading. 3×2 grid of service cards (6 total): Quality Cuisine, Fresh Food, Bread & Pancake, Reserve Now, Fresh Vegies Salad, Whole Chicken. Each: centered icon (flaticon class, use lucide-react), heading, description.
9. **Reservation** — Light bg section. Heading + subheading. Form in centered container (col-md-10, p-5): Name (person icon), Email (mail icon), Phone (call icon), Number of Persons (dropdown, 1-5+), Date (calendar icon), Time (clock icon). Submit button "Reserve Now" (btn-primary btn-outline-primary).
10. **Testimonials (Customer Reviews)** — White bg. Heading "Customer Reviews". Owl Carousel (use Embla/Swiper or custom) with 4 items: each has blockquote with curly-quote styled text, author section (circular photo, name, role "CEO, Founder").
11. **Contact (Get In Touch)** — White bg. Heading "Get In Touch". Form: Name, Email, Phone (3-column), Message (textarea full-width). Submit button "Send Message".
12. **Map** — Empty map container placeholder (Google Maps iframe or static placeholder).
13. **Footer** — Dark or default bg. 3-column layout: (1) "About Meal" heading + description + "Read More" button, (2) Lunch Service hours + Dinner Service hours, (3) Social icons (TripAdvisor, Twitter, Facebook, Instagram) + Newsletter form (email input + envelope icon button). Copyright line at bottom with heart icon and "Made with Component Dock" link.

## Gherkin Scenarios

```gherkin
Feature: Taster Restaurant Template

  Scenario: Navbar renders with logo and nav links
    Given the page loads
    Then the logo "T" is visible at the top center
    And a hamburger menu toggle is visible at the top right
    When I click the hamburger toggle
    Then a sidebar navigation panel slides in from the right
    And the panel contains links: Home, About Us, Our Menu, Reserve A Table, Contact

  Scenario: Hero section displays with background image and CTA
    Given the page loads
    Then the hero section shows a full-width background image
    And the heading "Welcome to Taster" is centered on the hero
    And a "Reserve A Table" button is visible below the heading
    When I click "Reserve A Table"
    Then the page scrolls to the reservation section

  Scenario: Features section shows alternating image-text cards
    Given the page loads
    When I scroll to the "Find Your Best Food" section
    Then 3 feature cards are displayed in alternating image/text layout
    And each card has a category label, heading, description, and "Learn More" link

  Scenario: About section displays restaurant description
    Given the page loads
    When I scroll to "The Restaurant" section
    Then a centered heading "The Restaurant" is visible
    And two descriptive paragraphs are displayed below it

  Scenario: Chefs section shows chef profiles
    Given the page loads
    When I scroll to "Meet The Chefs" section
    Then 2 chef cards are displayed side by side
    And each card has a circular photo, name, "Master Chef" role, bio text, and 3 social icons

  Scenario: Menu section has tabbed food items
    Given the page loads
    When I scroll to the "Menu" section
    Then 3 tabs are visible: Breakfast, Brunch, Dinner
    And the Breakfast tab is active by default
    And 4 menu items are shown with thumbnail, dish name, description, and price
    When I click the "Brunch" tab
    Then the Brunch tab becomes active and shows 4 different menu items
    When I click the "Dinner" tab
    Then the Dinner tab becomes active and shows 4 different menu items

  Scenario: Services section displays 6 service cards
    Given the page loads
    When I scroll to "Other Services" section
    Then 6 service cards are displayed in a 3-column grid
    And each card has an icon, heading, and description

  Scenario: Reservation form renders all fields
    Given the page loads
    When I scroll to the "Reservation" section
    Then a form is visible with fields: Name, Email, Phone, Number of Persons, Date, Time
    And a "Reserve Now" submit button is displayed

  Scenario: Testimonials carousel cycles through reviews
    Given the page loads
    When I scroll to "Customer Reviews" section
    Then a carousel with 4 testimonial slides is visible
    And each slide shows a quote, author photo, author name, and role

  Scenario: Contact form renders with fields
    Given the page loads
    When I scroll to "Get In Touch" section
    Then a contact form is visible with fields: Name, Email, Phone, Message
    And a "Send Message" submit button is displayed

  Scenario: Footer contains about, hours, social, and newsletter
    Given the page loads
    When I scroll to the footer
    Then 3 columns are displayed: About, Service Hours, Follow Along + Newsletter
    And the About column has a heading, description, and "Read More" button
    And the Service Hours column shows Lunch and Dinner booking times
    And the Follow Along column has social icons (TripAdvisor, Twitter, Facebook, Instagram)
    And a newsletter form with email input is visible
    And the copyright line includes a "Made with Component Dock" link

  Scenario: Section backgrounds alternate correctly
    Given the page loads
    Then the hero section has a background image with dark overlay
    And the features section has default (white) background
    And the menu section has light gray background
    And the services section has white background
    And the reservation section has light gray background
    And the testimonials section has white background
```

## Verification Checklist

- [ ] App folder `apps/taster/` exists with `package.json` named `@free-react-templates/taster`
- [ ] `public/CNAME` contains `taster.free.componentdock.com`
- [ ] `homepage` in `package.json` is `https://taster.free.componentdock.com`
- [ ] All sections match original order: Hero → Features → About → Image Divider → Chefs → Menu → Services → Reservation → Testimonials → Contact → Map → Footer
- [ ] Fonts: Playfair Display (headings) + Open Sans (body) via Google Fonts
- [ ] Brand accent color `#FF7A5C` used for subheadings, tab active states, loader
- [ ] No references to "colorlib" or "ColorLib" anywhere in app source
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] Placeholder images use `picsum.photos` with deterministic seeds
- [ ] Menu tabs switch content correctly (Breakfast/Brunch/Dinner)
- [ ] All sections are responsive (mobile-first Tailwind breakpoints)
- [ ] Tests pass at 100% coverage
- [ ] `npm install` run at repo root to update lockfile
- [ ] `scripts/verify-app.sh taster` passes
