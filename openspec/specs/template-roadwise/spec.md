# Template: Roadwise (Business — Car Rental)

## Purpose

Recreation of ColorLib "Autoroad" — a car rental business website template.

- **Source slug:** `autoroad`
- **Preview URL:** https://preview.colorlib.com/theme/autoroad/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/autoraod-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Business (car rental / transportation)

## Design Tokens

Extracted from the live preview CSS (`style.css`) and DOM analysis.

### Colors

| Token            | Value                           | Usage                                                                                                                 |
| ---------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| brand-orange     | `#fc983c`                       | Primary accent — buttons, play icon circle, active nav items, section label accents, hover states                     |
| dark             | `#000000`                       | Navbar background, hero overlay (40% opacity), footer background, services/workflow section backgrounds (70% opacity) |
| white            | `#ffffff`                       | Page backgrounds, hero text, form card, footer headings                                                               |
| gray-light       | `#f8f9fa` / `#f7f7f7`           | Alternate section backgrounds, input borders                                                                          |
| text-dark        | `#000000`                       | Headings, body text                                                                                                   |
| text-muted       | `rgba(0,0,0,0.4)`               | Form placeholders, subheadings                                                                                        |
| text-white-muted | `rgba(255,255,255,0.5/0.7/0.8)` | Nav links on dark, footer links                                                                                       |
| loader-stroke    | `#F96D00`                       | Circular loader animation stroke                                                                                      |

### Typography

- **Font family:** `"Poppins", Arial, sans-serif`
- **Hero h1:** `60px`, `font-weight: 200`, `line-height: 1.1`, white
- **Section labels:** Uppercase, `12px`, `font-weight: 600`, `letter-spacing: 2px`, orange accent
- **Section headings:** `36-40px`, `font-weight: 500`, white on dark / dark on light
- **Body text:** `16px`, `line-height: 1.5`
- **Form labels:** `12px`, uppercase, `font-weight: 600`
- **Footer heading:** `20px`, `font-weight: 400`, white

### Buttons & Shapes

- **Primary CTA (Search Vehicle):** Orange `#fc983c` bg, white text, `py-3 px-4`, Bootstrap `.btn` — no border-radius on form CTA
- **Play icon circle:** `70x70px`, `#fc983c` bg, `border-radius: 50%`, white icon
- **Black button:** `#000` bg, `#fc983c` border on hover, white text
- **Outline button:** transparent bg, `1px solid #ebebeb`, black text; hover → orange bg
- **Form inputs:** `border-radius: 0`, height `40px`, subtle `1px solid rgba(0,0,0,0.05)` border
- **Request form card:** white bg, `border-radius: 5px`, drop shadow `0px 10px 31px -21px rgba(0,0,0,0.33)`

### Section Backgrounds

- Hero: full-width background image + black overlay at 40% opacity
- Services: black background + overlay at 70% opacity
- Workflow ("How it works"): black background + overlay
- Testimonials: white background
- Blog: white/light background
- Footer: solid black `#000`

## Section Order (from live preview DOM)

1. **Navbar** — Dark/transparent, "Roadwise" brand, nav links: Home, About, Pricing, Our Fleet, Blog, Contact
2. **Hero** — Full-width bg image, dark overlay, split: left headline + play CTA, right floating booking form card (pick-up/drop-off locations, dates, time, "Search Vehicle")
3. **Advanced Search Bar** — White section, 5-column filter grid (Model, Brand, Year, Price Range, Search button)
4. **Our Services** — Dark section, 4 service cards with circular icons: Customer Support, Lots of Locations, Reservation, Rental Cars
5. **Choose Your Car (Pricing Grid)** — Car cards with images, "From $X/Day" pricing, "Book Now" + "Details" buttons
6. **How it works (Workflow)** — Dark section, 4-step process: Pick Destination, Select Term, Choose A Car, Enjoy The Ride — numbered steps with icons
7. **Testimonials** — White section, owl-carousel, "Happy Clients" heading, client quotes with name/role
8. **About Us / Choose A Perfect Car** — Split layout: left image, right text with stats/counters
9. **Blog** — 3-column blog cards with date, author, comment count, title, excerpt
10. **Footer** — Black background, 4 columns (About Roadwise, Information, Customer Support, Have a Questions? with contact info), social icons, copyright

## Gherkin Requirements

### Feature: Roadwise Car Rental Template

```gherkin
Scenario: Navbar renders with correct links and brand
  Given the Roadwise page loads
  Then the navbar displays the brand "Roadwise"
  And the navbar contains links: Home, About, Pricing, Our Fleet, Blog, Contact
  And the navbar is sticky/transparent on scroll

Scenario: Hero section displays booking form
  Given the Roadwise page loads
  Then the hero section shows a headline about renting a car
  And a circular orange play button with "Easy steps for renting a car" is visible
  And a booking form card is displayed with fields:
    | Field           | Type   |
    | Pick-up location | text  |
    | Drop-off location | text |
    | Pick-up date    | date   |
    | Drop-off date   | date   |
    | Pick-up time    | time   |
  And a "Search Vehicle" button is present

Scenario: Advanced search bar renders filter controls
  Given the Roadwise page loads
  Then the search bar section shows filter dropdowns for:
    | Filter      |
    | Model       |
    | Brand       |
    | Year        |
    | Price Range |
  And a "Search" button is present

Scenario: Our Services section displays 4 service cards
  Given the Roadwise page loads
  Then the services section shows 4 cards with icons:
    | Service           | Icon             |
    | Customer Support  | customer-support |
    | Lots of Locations | route            |
    | Reservation       | online-booking   |
    | Rental Cars       | rent             |
  And each card has a title and description text

Scenario: Choose Your Car section shows car grid
  Given the Roadwise page loads
  Then a car grid displays vehicle cards
  And each card shows: car image, model name, brand, daily price ("From $X/Day")
  And each card has "Book Now" and "Details" buttons

Scenario: How it works section shows 4-step workflow
  Given the Roadwise page loads
  Then the workflow section shows 4 numbered steps:
    | Step              | Icon     |
    | Pick Destination  | route    |
    | Select Term       | select   |
    | Choose A Car      | rent     |
    | Enjoy The Ride    | review   |
  And each step has a title and description

Scenario: Testimonials carousel renders client quotes
  Given the Roadwise page loads
  Then the testimonials section displays "Happy Clients"
  And an owl-carousel shows client testimonials
  And each testimonial has: quote text, client name, client role

Scenario: About Us section with split layout
  Given the Roadwise page loads
  Then the about section shows "Choose A Perfect Car"
  And a left column displays a car image
  And a right column displays descriptive text

Scenario: Blog section shows 3-column grid
  Given the Roadwise page loads
  Then 3 blog cards are displayed
  And each card shows: date, author, comment count, title, excerpt

Scenario: Footer with 4 columns
  Given the Roadwise page loads
  Then the footer has a black background
  And 4 columns are present:
    | Column           | Content                                           |
    | About Roadwise   | Brand description, links                          |
    | Information      | About, Services, Terms, Privacy links             |
    | Customer Support | FAQ, Payment, Booking Tips, How it works, Contact |
    | Contact          | Address, phone, email                             |
  And social media icon links are displayed
  And the footer contains "Made with Component Dock" linking componentdock.com
```

## Verification Checklist

- [ ] Navbar renders with all 6 links and "Roadwise" brand
- [ ] Hero section has background image with dark overlay
- [ ] Booking form card has all 5 input fields + search button
- [ ] Advanced search bar has 4 filter dropdowns + search button
- [ ] Services section shows 4 icon cards on dark background
- [ ] Car grid displays vehicle cards with pricing
- [ ] Workflow section shows 4-step process on dark background
- [ ] Testimonials carousel with owl-carousel behavior
- [ ] About section has split image + text layout
- [ ] Blog section has 3-column card grid
- [ ] Footer is black background with 4 columns + social icons
- [ ] Footer links to componentdock.com
- [ ] Brand color `#fc983c` used for CTAs, play button, accents
- [ ] Font: Poppins loaded from Google Fonts
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer attribution: "Made with Component Dock"
- [ ] `public/CNAME` contains `roadwise.free.componentdock.com`
- [ ] `package.json` homepage: `https://roadwise.free.componentdock.com`
