# Template: BugGuard (Pest Control Service)

## Purpose

Recreation of the ColorLib **Pestcontrol** template
(https://colorlib.com/wp/template/pestcontrol/) as a single-page React
application. Live preview analyzed:
https://preview.colorlib.com/theme/pestcontrol/

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) and
Cloudflare-hosted `Lato` web font:

| Token               | Value                                 | Usage                                     |
| ------------------- | ------------------------------------- | ----------------------------------------- |
| Brand primary       | `#d7553b` (orange-red)                | Buttons, accents, date highlights, links  |
| Brand secondary     | `#1c6ab8` (medium blue)               | Counter section background                |
| Text heading        | `#0d0d0d` (near-black)                | h2–h6, strong text                        |
| Text body           | `#111111` (dark gray)                 | Paragraph text                            |
| Text muted          | `#4e4e4e` (medium gray)               | Secondary/descriptive copy                |
| Background white    | `#ffffff`                             | Cards, body, service items                |
| Background light    | `#f2f4f5` (off-white)                 | Alternate section bg                      |
| Background dark     | `#222222`                             | Footer                                    |
| Background darkest  | `#111111`                             | Hero overlay, dark accents                |
| Font family         | `"Lato", sans-serif`                  | Global body + headings (300/400/700/900)  |
| Button radius       | `60px` (pill)                         | `.primary-btn` pill shape                 |
| Button padding      | default (~14px 30px)                  | Pill buttons                              |
| Card shadow         | `10px 5px 30px rgba(35,46,14,0.05)`   | Service cards                             |
| Icon circle         | `90×90px`, `border-radius: 50%`       | Service card icon holders                 |
| Section spacing     | `.spad` utility (~60px top/bottom)    | All major sections                        |

## Section order (from preview DOM)

1. **Header** — Top bar (address + hours left; phone + social icons right)
   → Main nav (logo left; Home/Services/Pages/Blog/Contact + Appointment CTA)
2. **Hero** — Full-width background image slider (owl-carousel), centered text
   overlay: subtitle span "Pest Control", h2 heading, tagline paragraph,
   "Learn More" pill button. Dark overlay on images.
3. **About** — Two-column layout: Left = heading "Welcome to the Pest Control
   Services Company" + description paragraph + two info sub-items ("How Does
   It Work?", "Services We Offers") + "About Us" pill button. Right = image
   gallery (1 large + 2 stacked smaller).
4. **Services** — "Our Services" title + subtitle, 2×4 grid of service cards.
   Each card: circular icon on top (half out of card), title, description
   paragraph. Services: Cockroaches, Ants, Rodents, Scorpion, Silver Fish,
   Millipedes, Spiders, Centipede. White cards with subtle shadow.
5. **Choose Us** — Three-column: Left = "Why People Choose Pest Control"
   heading + description + "Read More" button. Center = image. Right = 3
   feature items (icon + title + description): Comfortable Price, Safe And
   Clean, Friendly Customer Service.
6. **Counter** — Full-width blue (#1c6ab8) background, 4 stat columns: icon +
   number + label (50+ Years Of Experience, 1254+ Satisfied Clients, 2000+
   Happy Customers, 42+ Awards & Certificates).
7. **Testimonials** — "Testimonials" h2 heading with rating widget (4.7 star
   score + "3000 Rating") on the right. Carousel of testimonial cards: quote
   paragraph + author name. Dots navigation below.
8. **Latest Blog** — "Latest Blog Post" centered section title + subtitle. 2×2
   grid: 1 large featured post (left, full height) + 3 smaller list posts
   (right, stacked). Each: image, date/category, title link, excerpt.
9. **Footer** — Dark (#222222) background. 4-column grid: About (logo +
   description + phone + "Request An Appointment" button), Useful Links
   (About Us, Contact Us, Testimonials, Terms, Affiliate Program), Our
   Services (5 service links), Contact Us (address, fax, email, hours).
   Copyright bar at bottom with social icon links.

## Gherkin requirements

### Header

```gherkin
Feature: Header navigation
  Scenario: Top bar displays contact info
    Then the header top bar shows the address "450 Strand, Charing Cross"
    And the header top bar shows hours "08:00 - 19:00"
    And the header top bar shows phone "(+800) 1234 56781"
    And social icons (facebook, twitter, instagram, linkedin) are visible

  Scenario: Main navigation links
    Then the navbar contains links: Home, Services, Pages, Blog, Contact
    And an "Appointment" pill button is visible

  Scenario: Logo links to home
    Then clicking the logo navigates to the home page
```

### Hero

```gherkin
Feature: Hero slider
  Scenario: Hero displays headline and CTA
    Then the hero section shows subtitle "Pest Control"
    And the hero section shows heading "Keep your House clean & Safe"
    And the hero section shows tagline "Trusted. Experienced. Dedicated."
    And a "Learn More" pill button is visible

  Scenario: Hero has background image
    Then the hero section displays a full-width background image
    And a dark overlay is applied over the image
```

### About

```gherkin
Feature: About section
  Scenario: About displays welcome text and info items
    Then the about section shows heading "Welcome to the Pest Control Services Company"
    And two info sub-items are displayed: "How Does It Work?" and "Services We Offers"
    And an "About Us" pill button is visible

  Scenario: About displays image gallery
    Then the about section shows a large image and two smaller images
```

### Services

```gherkin
Feature: Services section
  Scenario: Services grid displays 8 service cards
    Then the services section heading is "Our Services"
    And 8 service cards are displayed in a grid
    And each card has a circular icon, title, and description
    And the service titles are: Cockroaches, Ants, Rodents, Scorpion,
        Silver Fish, Millipedes, Spiders, Centipede

  Scenario: Service cards have shadow styling
    Then each service card has a subtle box shadow
    And each card has a white background
```

### Choose Us

```gherkin
Feature: Choose Us section
  Scenario: Choose Us displays features
    Then the section heading is "Why People Choose Pest Control"
    And a description paragraph is shown
    And a "Read More" pill button is visible
    And 3 feature items are displayed: Comfortable Price, Safe And Clean,
        Friendly Customer Service
    And each feature item has an icon, title, and description

  Scenario: Choose Us displays image
    Then a center column shows an image
```

### Counter

```gherkin
Feature: Counter statistics
  Scenario: Counter displays 4 stats
    Then the counter section has a blue background (#1c6ab8)
    And 4 stat items are displayed: "50+" Years Of Experience,
        "1254+" Satisfied Clients, "2000+" Happy Customers,
        "42+" Awards & Certificates
    And each stat item has an icon above the number
```

### Testimonials

```gherkin
Feature: Testimonials section
  Scenario: Testimonials displays heading and rating
    Then the section heading is "Testimonials"
    And a rating widget shows "4.7" with 5 stars
    And "3000 Rating" text is displayed

  Scenario: Testimonials carousel shows quotes
    Then at least 2 testimonial quotes are displayed
    And each quote has an author name "By John Smith"
    And dot navigation indicators are visible
```

### Latest Blog

```gherkin
Feature: Latest Blog section
  Scenario: Blog displays posts
    Then the section heading is "Latest Blog Post"
    And 1 large featured post is shown on the left
    And 3 smaller list posts are shown on the right
    And each post has an image, date, title, and excerpt

  Scenario: Blog posts have date display
    Then each post shows a calendar icon with date "13 January 2020"
    And each post shows a category "Climb"
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer displays 4 columns
    Then the footer has a dark background (#222222)
    And column 1 shows logo, description, phone, and "Request An Appointment" button
    And column 2 shows "Useful Links" with 5 navigation links
    And column 3 shows "Our Services" with 5 service links
    And column 4 shows "Contact Us" with address, fax, email, hours

  Scenario: Footer copyright and social links
    Then a copyright bar is displayed at the bottom
    And social icon links (facebook, twitter, linkedin, pinterest) are visible
    And the footer links to Component Dock (https://www.componentdock.com/)
```

## Verification checklist

- [ ] All 9 sections render in correct order
- [ ] Brand primary color `#d7553b` used on buttons and accents
- [ ] Counter section uses blue `#1c6ab8` background
- [ ] Font family is Lato (loaded via Google Fonts link)
- [ ] Buttons are pill-shaped (rounded-full or 60px radius)
- [ ] Service cards have circular icon holders with shadow
- [ ] Footer background is dark `#222222`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app source code
- [ ] All images use `picsum.photos` placeholders
- [ ] Mobile responsive layout works (stacked columns on small screens)
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] TypeScript strict mode passes
- [ ] Build succeeds without errors
