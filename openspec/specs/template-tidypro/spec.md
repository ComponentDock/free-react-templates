# Template: TidyPro (Cleaning Company / Services)

## Purpose

Recreation of ColorLib "Cleaning Company" — a cleaning company website template with a hero banner, appointment form, business hours, services grid, team showcase, testimonials, portfolio, pricing plans, blog, and CTA section.

- **Source slug:** `cleaningcompany`
- **Preview URL:** https://preview.colorlib.com/theme/cleaningcompany/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cleaningcompany.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Cleaning Company / Home Services

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

### Colors

| Token            | Value             | Usage                                               |
| ---------------- | ----------------- | --------------------------------------------------- |
| brand-blue       | `#2b98f0`         | Primary brand color, accent throughout              |
| brand-yellow     | `#f3e53d`         | Secondary accent, highlights                        |
| btn-primary      | `#007bff`         | Bootstrap primary buttons (Learn more, Get Started) |
| footer-dark      | `#111111`         | Footer background                                   |
| testimonial-dark | `#33313b`         | Testimonials section background (`.ftco-bg-dark`)   |
| overlay-dark     | `rgba(0,0,0,0.5)` | Hero and background section overlays                |
| text-dark        | `#000000`         | Headings                                            |
| text-body        | `#6c757d`         | Body paragraph text                                 |
| bg-light         | `#f8f9fa`         | Light section backgrounds                           |
| white            | `#fff`            | Button text, card backgrounds                       |
| border-light     | `#dee2e6`         | Light borders                                       |

### Typography

- **Font family:** `"Roboto", Arial, sans-serif`
- **Body:** 16px base, `line-height: 1.7`, `font-weight: 400`, color `#6c757d`
- **Headings:** Roboto bold (700), color `#000`
- **Hero h1:** Large white text on dark overlay
- **Section subheading (`.subheading`):** Small, muted text above section headings
- **Footer heading (`.footer-heading`):** White text, Roboto bold

### Buttons & Shapes

- **Primary CTA (`.btn-primary`):** `#007bff` blue bg, white text, Bootstrap default
- **Custom button (`.btn-custom`):** Used for "Read more" links on service cards
- **Service card buttons:** "Read more" custom style

### Section Backgrounds

1. **Navbar:** Dark/transparent, sticky top
2. **Hero:** Background image (`images/bg_1.jpg`) + dark overlay
3. **Appointment Form:** Dark overlay bg with white form card
4. **Business Hours + About:** White bg — 2-column (image left with hours, text right)
5. **Services ("How We Works"):** White bg — 6 service cards with icons
6. **Team ("Our Team"):** White bg — 3 team member cards
7. **Testimonials ("Happy Customer"):** Dark bg (`#33313b`) — owl-carousel
8. **Portfolio:** White bg — 4-column grid of project images
9. **Blog ("Latest News"):** White bg — 3 blog cards
10. **CTA ("Together we will explore"):** Background image + dark overlay
11. **Pricing ("Choose Your Perfect Plans"):** Light bg — 3 pricing cards
12. **Footer:** Dark bg (`#111111`) — 4 columns + copyright

## Section Structure (page order)

1. **Navbar** — dark bg, sticky top:
   - Brand: "TidyPro" (white text)
   - Nav links: Home, About, Services, Portfolio, Pricing, Blog, Contact
   - Mobile: hamburger toggle

2. **Hero** — full-width background image + dark overlay:
   - Subheading: "Leave the house cleaning chores to us"
   - Heading: "Let us do the dirty work, so you don't have to."
   - "Learn more" blue CTA button with arrow

3. **Appointment Form** — dark overlay bg:
   - White card form with fields:
     - Name (text input)
     - Phone number (text input)
     - Select Services dropdown (Spinal Manipulation, Electrotherapy, etc. — replace with cleaning services)
     - Select Cleaners dropdown (John Doe, William Smith, etc.)
     - Date picker
     - Time picker
   - "Request A Quote" submit button

4. **Business Hours + About** — 2-column:
   - Left: background image with overlay card
     - "Business Hours" heading
     - Opening Days: Monday-Friday 9am-8pm, Saturday 9am-5pm
     - Vacations: All Sundays, All Official Holidays
     - Emergency phone number (yellow bg)
   - Right: "Welcome to TidyPro" heading, description paragraphs, checkmark list

5. **Services ("How We Works")** — 3-column grid (2 rows = 6):
   - Office Cleaning (workplace icon)
   - Pool Cleaning (pool icon)
   - Carpet Cleaning (carpet icon)
   - Kitchen Cleaning (kitchen icon)
   - Garden Cleaning (garden icon)
   - Each: icon + heading + description + "Read more" link

6. **Team ("Our Team")** — 3-column:
   - 3 team member cards: photo, name, position, description
   - Members: Lloyd Wilson (Office Cleaner), Lloyd Wilson (Office Cleaner), Lloyd Wilson (Office Cleaner)
   - Social icons on hover

7. **Testimonials ("Happy Customer")** — dark bg (`#33313b`), carousel:
   - Testimonial cards: quote icon, user photo (circle), name, location, quote
   - 5 testimonial items
   - Owl carousel style

8. **Portfolio ("We have done many latest cleaning project")** — 4-column grid:
   - 4 project items: background image, expand icon on hover, title
   - Projects: House Cleaning, Window Cleaning, Pool Cleaning, Office Cleaning

9. **Blog ("Latest News")** — 3-column:
   - 3 blog cards: image, date/author/comments meta, title
   - Blog titles: "10 Tips to clean your window" etc.

10. **CTA ("Together we will explore new things")** — bg image + dark overlay:
    - Heading (white)
    - Video play button (circle icon)

11. **Pricing ("Choose Your Perfect Plans")** — light bg, 3-column:
    - Starter ($49), Standard ($79 — highlighted), Premium ($109)
    - Each: icon, plan name, price, 5-item feature list, "Get Started" blue CTA
    - Standard plan highlighted (`.active`)

12. **Footer** — dark bg (`#111111`), 4-column:
    - About: "TidyPro" heading, description, social icons (Twitter, Facebook, Instagram)
    - Latest News: 2 blog post previews with images
    - Quick Links: Home, About, Services, Works, Blog, Contact
    - Contact: address, phone, email
    - Copyright line + "Made with Component Dock" link

## Gherkin Scenarios

### Navbar

```gherkin
Scenario: Navbar displays brand and navigation
  Given the user is on the TidyPro homepage
  Then the navbar shows the brand "TidyPro"
  And the nav contains links: Home, About, Services, Portfolio, Pricing, Blog, Contact
```

### Hero Section

```gherkin
Scenario: Hero displays heading and CTA
  Given the user is on the TidyPro homepage
  Then the hero shows "Let us do the dirty work, so you don't have to."
  And a "Learn more" blue CTA button is visible
  And a dark overlay covers the background image
```

### Appointment Form

```gherkin
Scenario: Appointment form accepts service details
  Given the user scrolls to the appointment section
  Then a form with Name, Phone, Service dropdown, Cleaner dropdown, Date, Time fields is shown
  And a "Request A Quote" submit button is present
```

### Business Hours

```gherkin
Scenario: Business hours display opening times
  Given the user scrolls to the "Business Hours" section
  Then opening days are shown: Monday-Friday 9am-8pm, Saturday 9am-5pm
  And vacation days are listed
  And an emergency phone number is displayed
```

### Services

```gherkin
Scenario: Services section shows 5 service cards
  Given the user scrolls to the "How We Works" section
  Then 5 service cards are displayed
  And the services are: Office Cleaning, Pool Cleaning, Carpet Cleaning, Kitchen Cleaning, Garden Cleaning
```

### Team

```gherkin
Scenario: Team section shows member cards
  Given the user scrolls to the "Our Team" section
  Then 3 team member cards are displayed
  And each card shows a photo, name, and position
```

### Testimonials

```gherkin
Scenario: Testimonials carousel displays reviews
  Given the user scrolls to the "Happy Customer" section
  Then a carousel of testimonial cards is visible
  And each card shows a user photo, name, location, and quote
  And the section has a dark background
```

### Portfolio

```gherkin
Scenario: Portfolio shows project grid
  Given the user scrolls to the portfolio section
  Then 4 project items are displayed in a grid
  And each item shows a background image and title
  And hovering shows an expand icon
```

### Pricing

```gherkin
Scenario: Pricing shows 3 plans
  Given the user scrolls to the "Choose Your Perfect Plans" section
  Then 3 pricing cards are shown: Starter ($49), Standard ($79), Premium ($109)
  And each card has a feature list and "Get Started" button
  And the Standard plan is highlighted
```

### Footer

```gherkin
Scenario: Footer displays columns and contact
  Given the user scrolls to the footer
  Then 4 columns are shown: About, Latest News, Quick Links, Contact
  And social media icons are in the About column
  And a "Made with Component Dock" link is present
```

## Verification Checklist

- [ ] Navbar: sticky, brand + 7 nav links, mobile hamburger
- [ ] Hero: bg image + dark overlay, subheading, heading, "Learn more" CTA
- [ ] Appointment form: 6 fields (Name, Phone, Service, Cleaner, Date, Time) + submit
- [ ] Business Hours: opening days, vacations, emergency phone
- [ ] About: heading, description, checkmark list
- [ ] Services: 5 cards with icons, headings, descriptions, "Read more"
- [ ] Team: 3 member cards with photos, names, positions
- [ ] Testimonials: carousel on dark bg, user photos, quotes
- [ ] Portfolio: 4 project items with images and expand icons
- [ ] Blog: 3 cards with images, meta, titles
- [ ] CTA: bg image + overlay, heading, video play button
- [ ] Pricing: 3 plan cards, Standard highlighted, "Get Started" CTAs
- [ ] Footer: dark bg, 4 columns, social icons, copyright, Component Dock link
- [ ] Design tokens: brand-blue #2b98f0, brand-yellow #f3e53d, footer #111111, Roboto font
- [ ] Responsive: mobile hamburger, stacked columns
- [ ] Accessibility: semantic HTML, aria labels, keyboard nav
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
