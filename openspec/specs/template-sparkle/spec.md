# Template: Sparkle (Cleaning Company / Services)

## Purpose

Recreation of ColorLib "Cleanex" — a cleaning company website template with a hero banner, booking form, service cards, industries list, how-it-works steps, testimonials, pricing plans, counters, blog, and CTA section.

- **Source slug:** `cleanex`
- **Preview URL:** https://preview.colorlib.com/theme/cleanex/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cleanex-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Cleaning Company / Home Services

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

### Colors

| Token        | Value             | Usage                                        |
| ------------ | ----------------- | -------------------------------------------- |
| brand-blue   | `#225ae1`         | Primary brand color, accent throughout       |
| brand-yellow | `#fedd32`         | Secondary accent (highlights, active states) |
| btn-primary  | `#007bff`         | Bootstrap primary buttons (Sign Up, etc.)    |
| overlay-dark | `rgba(0,0,0,0.5)` | Hero and background section overlays         |
| text-dark    | `#161655`         | Dark heading text (navy)                     |
| text-body    | `#6c757d`         | Body paragraph text                          |
| bg-light     | `#f8f9fa`         | Light section backgrounds (`.bg-light`)      |
| bg-cream     | `#f4f5f0`         | About section background                     |
| white        | `#fff`            | Button text, card backgrounds                |
| border-light | `#dee2e6`         | Light borders                                |

### Typography

- **Font family:** `"Roboto", Arial, sans-serif`
- **Body:** 16px base, `line-height: 1.7`, `font-weight: 400`, color `#6c757d`
- **Headings:** Roboto bold (700), color `#161655` (navy) or `#000`
- **Hero h1:** Large white text on dark overlay
- **Section subheading (`.subheading`):** Small, muted text above section headings
- **Section heading:** Roboto bold with underline accent

### Buttons & Shapes

- **Primary CTA (`.btn-primary`):** `#007bff` blue bg, white text, Bootstrap default
- **Secondary CTA (`.btn-secondary`):** Used for "Request A Quote" in hero
- **Custom circle button (`.btn-custom`):** Circle with chevron icon, used on service cards
- **Service card buttons:** "Learn more" circle with right chevron

### Section Backgrounds

1. **Navbar:** Dark/transparent, sticky top
2. **Hero:** Background image (`images/bg_1.jpg`) + dark overlay
3. **About ("Most Awarded"):** White bg with booking form (left) + content (right)
4. **Why Choose Us features:** White bg — 4 feature cards (Trained Staff, Best Equipment, 100% Warranty, Fast & Effective)
5. **Industries:** White bg with background image — 2-column (image left, checklist right)
6. **Services ("Offering Best Cleaning"):** White bg — 6 service cards with images
7. **How It Works:** Background image (`images/bg_2.jpg`) + dark overlay — 3 steps
8. **Testimonials:** Light bg (`#f8f9fa`) — owl-carousel slider
9. **Pricing:** White bg — 4 pricing cards (Basic, Standard, Premium, Ultimate)
10. **CTA ("Need to clean"):** Background image (`images/bg_4.jpg`) + dark overlay
11. **Blog ("Recent Post"):** Light bg — 3 blog cards
12. **Counters:** Background image + dark overlay — 4 stat boxes
13. **Footer:** Background image + dark overlay — 4 columns + copyright

## Section Structure (page order)

1. **Navbar** — dark bg, sticky top:
   - Brand: "Sparkle" (white text)
   - Nav links: Home, About, Pricing, Services, Blog, Contact
   - CTA: "Request A Quote" button (highlighted)
   - Mobile: hamburger toggle

2. **Hero** — full-width background image + dark overlay:
   - Subheading: "Introducing Sparkle"
   - Heading: "A Clean Home is A Happy Home" (white)
   - Description paragraph
   - "Request A Quote" secondary CTA button

3. **About ("Most Awarded Cleaning Company Since 2000")** — 2-column:
   - Left (col-5): Booking form "Book A Service"
     - First Name, Last Name (side by side)
     - Service dropdown (Residential, Commercial, Construction, Windows, Carpet, Furniture, Other)
     - Phone number
     - Date picker
     - Time picker
     - "Request A Quote" submit button
   - Right (col-7): About content with background image
     - Heading, description paragraphs
     - Checkmark list of services

4. **Why Choose Us** — 4-column feature grid:
   - Highly Trained Staff (cleaning-staff icon)
   - Best Equipments (cleaning-tools icon)
   - 100% Warranty (checkmark icon)
   - Fast & Effective Service (clock icon)
   - Each: icon + heading + description

5. **Industries ("Indestries We Serve")** — 2-column:
   - Left: background image
   - Right: heading, description, 2-column checklist
   - Industries: Airport & Airlines, House & Offices, Auto Dealerships, Sports & Fitness Centers, Schools & Universities, Commercial Building, Medical Facilities, Entertainment Venues

6. **Services ("Offering Best Cleaning Services")** — 3-column grid (2 rows = 6):
   - Residential Cleaning ($50), Commercial Cleaning ($50), Construction Cleaning ($50)
   - Windows Cleaning ($50), Carpet Cleaning ($50), Furniture Cleaning ($50)
   - Each card: background image, service name, price, circle "Learn more" button

7. **How It Works** — bg image + dark overlay, 3-column:
   - 01: Pick a suitable plan (checklist icon)
   - 02: Set your schedule (calendar icon)
   - 03: Get things done (check-circle icon)
   - Each: numbered icon circle + heading + description

8. **Testimonials ("What Are Clients Says")** — light bg, carousel:
   - Testimonial cards: user photo (circle), name, location, quote
   - 5 testimonial items (Harold Howard — New York, etc.)
   - Owl carousel style slider

9. **Pricing ("Our Plans & Pricing")** — 4-column:
   - Basic ($29/session), Standard ($59/session), Premium ($79/session — highlighted), Ultimate ($99/session)
   - Each: plan name, price, feature list (5 items), "Sign Up" blue CTA
   - Premium card has `.active` class (highlighted/featured)

10. **CTA ("Need to clean your house? Just hire us!")** — bg image + dark overlay:
    - Heading (white)
    - Phone number CTA button (blue) + Email button (secondary)

11. **Blog ("Recent Post")** — light bg, 3-column:
    - 3 blog cards: image, date/author/comments meta, title, description
    - Blog titles: "Tips on how to hire a house cleaning service" etc.

12. **Counters** — bg image + dark overlay, 4-column:
    - Project Completed: 4800 (ok/checkmark icon)
    - Employees: 14000 (customers icon)
    - Clients: 200 (rating icon)
    - Awards: 5000 (gift icon)
    - Each: icon + count number + label

13. **Footer** — bg image + dark overlay, 4-column:
    - About: "Sparkle" logo, description, social icons (Twitter, Facebook, Instagram)
    - Recent Posts: 2 blog post previews with images
    - Explore: links (About, Contact, Services, Blog, Pricing)
    - Contact: address, phone, email
    - Copyright line + "Made with Component Dock" link

## Gherkin Scenarios

### Navbar

```gherkin
Scenario: Navbar displays brand and navigation
  Given the user is on the Sparkle homepage
  Then the navbar shows the brand "Sparkle"
  And the nav contains links: Home, About, Pricing, Services, Blog, Contact
  And a "Request A Quote" CTA button is visible
```

### Hero Section

```gherkin
Scenario: Hero displays heading and CTA
  Given the user is on the Sparkle homepage
  Then the hero shows "A Clean Home is A Happy Home"
  And a "Request A Quote" button is visible
  And a dark overlay covers the background image
```

### Booking Form

```gherkin
Scenario: Booking form accepts service details
  Given the user scrolls to the "Book A Service" section
  Then a form with First Name, Last Name, Service dropdown, Phone, Date, and Time fields is shown
  And a "Request A Quote" submit button is present
  And the service dropdown has options: Residential, Commercial, Construction, Windows, Carpet, Furniture, Other
```

### Why Choose Us

```gherkin
Scenario: Why Choose Us shows 4 feature cards
  Given the user scrolls to the "Why Choose Us" section
  Then 4 feature cards are displayed
  And the features are: Highly Trained Staff, Best Equipments, 100% Warranty, Fast & Effective Service
```

### Industries

```gherkin
Scenario: Industries section shows checklist
  Given the user scrolls to the "Industries We Serve" section
  Then 8 industries are listed with checkmark icons
  And the industries include Airport & Airlines, House & Offices, Schools & Universities
```

### Services

```gherkin
Scenario: Services section shows 6 service cards
  Given the user scrolls to the "Offering Best Cleaning Services" section
  Then 6 service cards are displayed in a grid
  And each card shows a background image, service name, price, and "Learn more" button
```

### How It Works

```gherkin
Scenario: How it works shows 3 steps
  Given the user scrolls to the "How it Works" section
  Then 3 steps are shown: Pick a suitable plan, Set your schedule, Get things done
  And each step has a numbered icon and description
  And the section has a dark overlay background
```

### Testimonials

```gherkin
Scenario: Testimonials carousel displays reviews
  Given the user scrolls to the "What Are Clients Says" section
  Then a carousel of testimonial cards is visible
  And each card shows a user photo, name, location, and quote
```

### Pricing

```gherkin
Scenario: Pricing shows 4 plans
  Given the user scrolls to the "Our Plans & Pricing" section
  Then 4 pricing cards are shown: Basic ($29), Standard ($59), Premium ($79), Ultimate ($99)
  And each card has a feature list and "Sign Up" button
  And the Premium plan is highlighted
```

### Blog

```gherkin
Scenario: Blog section shows recent posts
  Given the user scrolls to the "Recent Post" section
  Then 3 blog cards are displayed
  And each card shows an image, date, author, title, and description
```

### Counters

```gherkin
Scenario: Counters display statistics
  Given the user scrolls to the counters section
  Then 4 stats are shown: Project Completed (4800), Employees (14000), Clients (200), Awards (5000)
```

### Footer

```gherkin
Scenario: Footer displays columns and contact
  Given the user scrolls to the footer
  Then 4 columns are shown: About, Recent Posts, Explore, Contact
  And social media icons are in the About column
  And a "Made with Component Dock" link is present
```

## Verification Checklist

- [ ] Navbar: sticky, brand + 6 nav links + "Request A Quote" CTA, mobile hamburger
- [ ] Hero: bg image + dark overlay, heading, description, "Request A Quote" CTA
- [ ] About: booking form (7 fields) + about content with checkmark list
- [ ] Why Choose Us: 4 feature cards with icons
- [ ] Industries: bg image + 8-item checklist
- [ ] Services: 6 cards with images, prices, circle buttons
- [ ] How It Works: bg image + overlay, 3 numbered steps
- [ ] Testimonials: carousel with user photos, names, quotes
- [ ] Pricing: 4 plan cards, Premium highlighted, "Sign Up" CTAs
- [ ] CTA: bg image + overlay, heading, phone + email buttons
- [ ] Blog: 3 cards with images, meta, titles
- [ ] Counters: 4 stat boxes with icons and animated numbers
- [ ] Footer: bg image + overlay, 4 columns, social icons, copyright, Component Dock link
- [ ] Design tokens: brand-blue #225ae1, brand-yellow #fedd32, Roboto font, overlay-dark
- [ ] Responsive: mobile hamburger, stacked columns
- [ ] Accessibility: semantic HTML, aria labels, keyboard nav
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
