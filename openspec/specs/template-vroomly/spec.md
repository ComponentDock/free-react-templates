# Template: Vroomly (Car Rental)

## Purpose

Recreation of the ColorLib "Car Rental" template as a single-page React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **Source**: [ColorLib Car Rental](https://colorlib.com/wp/template/car-rental/)
- **Preview**: https://preview.colorlib.com/theme/carrental/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/carrental-free-template.jpg
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)
- **Package**: `@free-react-templates/vroomly`
- **Deploy target**: `https://vroomly.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/main.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Brand / Primary | `#fab700` (gold) | Buttons, facts bar, footer links, hover states, model pricing |
| Dark background | `#04091e` (navy-black) | Footer background |
| Light background | `#f9f9ff` (off-white-blue) | Feature cards, review cards, blog area, default button |
| Text dark | `#222222` | Headings, body text |
| Text muted | `#777777` | Paragraph text |
| White | `#fff` | Overlay text, button text |
| Overlay (hero) | `rgba(0, 0, 0, 0.8)` | Banner background overlay |
| Overlay (CTA) | `rgba(4, 9, 30, 0.75)` | Call-to-action background overlay |
| Success | `#4cd3e3` | Info/success buttons |
| Star rating | `orange` | Checked stars in review cards |
| Social icon | `#cccccc` | Footer social icons |
| Border radius (cards) | `10px` | Feature cards, review cards |
| Border radius (circle btn) | `20px` | Circle variant buttons |
| Section gap | `120px 0` | Vertical padding between sections |
| Font family | `"Poppins", sans-serif` | Global typeface |
| Button font weight | `600` | CTA buttons |

## Section Order (from live DOM)

1. **Navbar** — Sticky header with logo and nav links (Home, About, Cars, Service, Team, Blog, Contact)
2. **Hero / Banner** — Full-screen background image with overlay, headline ("Relaxed Journey Ever"), subheadline, CTA button ("Rent Car Now"), plus booking form (car select, pickup/dropoff, dates, name/email/phone, confirm button)
3. **Features / Services** — "What Services we offer to our clients" heading, 6 service cards in 3×2 grid (Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews) with linear-icons
4. **About** — Split layout: left image, right text ("Globally Connected by Large Network") with CTA button
5. **Car Models** — "Choose your Desired Car Model" heading, carousel of car model cards (each: name, price/day, description, specs list, "Book This Car Now" button, car image)
6. **Facts / Stats** — Gold background bar with counter stats (Projects Completed, Happy Clients, Tasks Completed, Cups of Coffee, In House Professionals)
7. **Reviews** — "Some Features that Made us Unique" heading, 6 review cards in 3×2 grid (name, text, star rating)
8. **Call-to-Action** — Dark overlay section: "Experience Great Support" with description and "Reach Our Support Team" button
9. **Blog** — "Latest From Our Blog" heading, 4 blog cards in 4-col grid (thumbnail, date, title, excerpt, likes/comments)
10. **Footer** — Dark navy background, 5-column layout (Quick Links, Features, Resources, Social, Newsletter), copyright with Component Dock link

## Gherkin Requirements

### Scenario: Navbar renders with navigation links
```
Given the user visits the Vroomly homepage
Then the navbar displays logo and links: Home, About, Cars, Service, Blog, Contact
And the navbar is sticky on scroll
```

### Scenario: Hero section displays booking form
```
Given the user is on the homepage
Then the hero section shows a full-screen background with dark overlay
And the headline "Relaxed Journey Ever" is visible
And the subheadline paragraph is visible
And a "Rent Car Now" CTA button is visible
And the booking form contains: car model select, pickup/dropoff selects, date pickers, name/email/phone fields, and a "Confirm Car Booking" button
```

### Scenario: Features section shows 6 service cards
```
Given the user scrolls to the features section
Then 6 service cards are displayed in a 3-column responsive grid
And each card has an icon, title, and description
And cards have a light background (#f9f9ff) with 10px border-radius
```

### Scenario: About section shows split layout
```
Given the user scrolls to the about section
Then a left-aligned image and right-aligned text are shown side-by-side
And the heading reads "Globally Connected by Large Network"
And a "get details" primary button is visible
```

### Scenario: Car models section shows carousel
```
Given the user scrolls to the car models section
Then multiple car model cards are displayed
And each card shows: car name, price per day, description, specs (capacity, doors, AC, transmission), a "Book This Car Now" button, and a car image
And cards have a carousel/pagination behavior
```

### Scenario: Facts bar displays stat counters
```
Given the user scrolls to the facts section
Then a gold (#fab700) background bar is visible
And 5 stat counters are displayed (Projects, Clients, Tasks, Coffee, Professionals)
```

### Scenario: Reviews section shows 6 review cards
```
Given the user scrolls to the reviews section
Then 6 review cards are displayed in a 3-column responsive grid
And each card has a name, text, and star rating (out of 5)
```

### Scenario: Call-to-action section is visible
```
Given the user scrolls to the CTA section
Then a dark overlay background is shown
And the heading "Experience Great Support" is visible
And a "Reach Our Support Team" button with gold background is visible
```

### Scenario: Blog section shows 4 blog cards
```
Given the user scrolls to the blog section
Then 4 blog cards are displayed in a 4-column responsive grid
And each card has a thumbnail image, date, title, excerpt, likes count, and comments count
```

### Scenario: Footer renders with newsletter and links
```
Given the user scrolls to the footer
Then a dark navy (#04091e) background is visible
And 5 columns are shown: Quick Links, Features, Resources, Social, Newsletter
And the newsletter has an email input and submit button
And social icons (Facebook, Twitter, Dribbble, Behance) are displayed
And the copyright footer links to Component Dock
```

### Scenario: Responsive layout adapts to mobile
```
Given the user views on a mobile viewport (< 768px)
Then the navbar collapses to a hamburger menu
And the hero booking form stacks vertically
And feature/review cards stack in single column
And the car model section stacks vertically
And blog cards stack in single column
And the footer columns stack vertically
```

### Scenario: Primary buttons have hover animation
```
Given the user hovers over a primary button
Then the background transitions from gold (#fab700) to transparent
And the border and text color transition to gold (#fab700)
```

## Verification Checklist

- [ ] All 10 sections present in correct order
- [ ] Navbar is sticky on scroll
- [ ] Hero section has dark overlay on background image
- [ ] Booking form has all fields (car select, pickup, dropoff, dates, name, email, phone)
- [ ] 6 feature cards in 3-col grid with icons
- [ ] About section is split image/text layout
- [ ] Car models carousel with 3+ car cards
- [ ] Facts bar has gold background with 5 stat counters
- [ ] 6 review cards in 3-col grid with star ratings
- [ ] CTA section with dark overlay
- [ ] Blog section with 4 cards in 4-col grid
- [ ] Footer has 5 columns, newsletter, social icons
- [ ] Footer copyright links to Component Dock
- [ ] Poppins font loaded from Google Fonts
- [ ] Brand color #fab700 used consistently for buttons, facts bar, links
- [ ] All buttons have hover transition (bg → transparent, border/text → gold)
- [ ] Cards have 10px border-radius and light #f9f9ff background
- [ ] Responsive at mobile breakpoints
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] `public/CNAME` set to `vroomly.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://vroomly.free.componentdock.com`
- [ ] `injectUiSource()` present in `vite.config.ts`
