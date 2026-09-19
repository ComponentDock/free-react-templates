# Template: Treklore (Travel & Tourism)

## Purpose

Recreation of the ColorLib "Travello" template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page travel agency site.

- **Source template:** [ColorLib Travello](https://colorlib.com/wp/template/travello/)
- **Live preview:** https://preview.colorlib.com/theme/travello/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/travello-free-template-1.jpg
- **New name:** `treklore` (app: `apps/treklore`, package: `@free-react-templates/treklore`)
- **Surge URL:** `https://treklore.free.componentdock.com`

## Design Tokens

| Token | Value | Notes |
|---|---|---|
| Font family (body) | `Open Sans` (300–800) | Google Fonts `<link>` |
| Font family (display/logo) | `Oswald` (400–700) | Logo, headings, buttons |
| Brand dark (navy) | `#1a1a2e` | Header bg, search button, dark overlays |
| Brand accent (blue) | `#3b82f6` | Link color, active states |
| Brand accent hover (blue) | `#2563eb` | Link hover |
| Text muted | `#64748b` | Body text, paragraphs |
| Warm brown | `#937c6f` | Hover states, warm accent |
| White | `#FFFFFF` | Search bg, cards, content areas |
| Dark background | `#232323` | Dark section backgrounds |
| Button radius | `0` (sharp) | Search button, nav elements |
| Card radius | `0.375rem` (Bootstrap default) | Standard Bootstrap rounded |
| Parallax | `background-attachment: fixed` | Why Choose Us section |

## Sections (order preserved 1:1)

### 1. Header
- Transparent/overlay header with dark background `rgba(24, 24, 24, 0.6)`.
- Logo text "Travello" in Oswald font.
- Nav links: Home, About us, Services, News, Contact.
- Phone number on right: "Call us: 00-56 445 678 33".
- Hamburger menu for mobile.
- Social icons row (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn) positioned absolute right.

### 2. Hero Slider
- Full-width Swiper carousel (3 slides) with background images.
- Centered headline text per slide: "Let us take you away", "Discover the world", "Adventure awaits".
- Right-side vertical navigation dots (01 Offers, 02 Testimonials, 03 Latest).

### 3. Search Form
- White search bar overlapping the hero section.
- Title: "Search for your trip".
- Inline form: City, Departure, Arrival, Budget inputs + dark navy "search" button.

### 4. Intro / Features
- White background with background image overlay.
- 3-column feature cards with icons (beach, wallet, suitcase).
- Items: "Top Destinations", "The Best Prices", "Amazing Services".
- AOS fade-up animations.

### 5. Popular Destinations
- White background.
- Title: "simply amazing places" subtitle + "Popular Destinations" heading.
- Isotope-style grid of 6 destination cards. Each card:
  - Image with optional "Special Offer" badge.
  - Destination name, subtitle text, price ("From $679").

### 6. Why Choose Us
- Parallax background image (fixed attachment).
- Dark overlay section.
- Title: "simply amazing places" + "Why Choose Us?"
- 3-column cards: "Fast Services", "Expert Guides", "Best Deals".
- Each card: image with icon overlay + title + description.

### 7. Featured Tours
- White background.
- Title: "curated experiences" + "Featured Tours".
- Swiper slider of tour cards. Each card:
  - Image with "Best Seller" badge + duration badge.
  - Location + star rating, title, description, price, "View Details" button.

### 8. Testimonials
- Background image with dark overlay.
- Title: "simply amazing places" + "Testimonials".
- Swiper slider: quote text + author name + role.
- Right-side navigation (City Breaks Clients, Cruises Clients, All Inclusive Clients).

### 9. Instagram Feed
- White background.
- Title: "follow our journey" + "@Travello on Instagram".
- 6-column grid of images with Instagram icon overlay on hover.

### 10. Latest News
- White background.
- Left side (8 cols): 3 news posts in horizontal layout (image + date + title + category + excerpt).
- Right side (4 cols): Promotional sidebar with background image + "Get 20% Discount" CTA.

### 11. Footer / Newsletter
- Background image footer with dark overlay.
- Newsletter section: title + subtitle + form (Name + Email + Subscribe button).
- 3-column contact info: phone, address, email with SVG icons.
- Copyright bar at bottom.

## Gherkin Requirements

### Feature: Treklore — Travel & Tourism Template

#### Scenario: Header provides navigation and contact info
- GIVEN the user loads the page
- THEN the logo "treklore" is visible in Oswald font
- AND nav links (home, about us, services, news, contact) are present
- AND phone number is displayed
- AND social icons are visible

#### Scenario: Hero slider displays travel imagery
- GIVEN the user loads the page
- THEN a full-width hero carousel is visible
- AND each slide shows a centered headline
- AND vertical navigation dots are on the right side

#### Scenario: Search form allows trip search
- GIVEN the user scrolls to the search section
- THEN "Search for your trip" title is visible
- AND 4 input fields are present (City, Departure, Arrival, Budget)
- AND a dark "search" button is present

#### Scenario: Intro features highlight services
- GIVEN the user scrolls to the intro section
- THEN 3 feature items are displayed with icons
- AND each shows a title and subtitle description

#### Scenario: Destinations grid shows popular places
- GIVEN the user scrolls to destinations
- THEN 6 destination cards are displayed in a grid
- AND each card shows an image, name, subtitle, and price
- AND some cards show a "Special Offer" badge

#### Scenario: Why Choose Us section displays with parallax
- GIVEN the user scrolls to Why Choose Us
- THEN a parallax background image is visible
- AND 3 feature cards are shown (Fast Services, Expert Guides, Best Deals)

#### Scenario: Featured Tours slider showcases packages
- GIVEN the user scrolls to featured tours
- THEN a tour card slider is visible
- AND each card shows image, badges, location, rating, title, price, and details button

#### Scenario: Testimonials section shows client reviews
- GIVEN the user scrolls to testimonials
- THEN a background image section with testimonial slider is visible
- AND each slide shows quote text, author name, and role

#### Scenario: Instagram feed displays travel photos
- GIVEN the user scrolls to Instagram section
- THEN 6 images are displayed in a row
- AND each shows an Instagram icon on hover

#### Scenario: News section shows latest articles
- GIVEN the user scrolls to news
- THEN 3 news posts are displayed with images, dates, titles, and excerpts
- AND a promotional sidebar with discount offer is visible

#### Scenario: Footer provides newsletter and contact
- GIVEN the user scrolls to the footer
- THEN a newsletter form (Name + Email + Subscribe) is visible
- AND 3 contact info columns are shown (phone, address, email)
- AND copyright bar with Component Dock link is present

## Verification Checklist

- [ ] Header: logo, nav links, phone, social icons, hamburger
- [ ] Hero slider: 3 slides with headlines, vertical nav dots
- [ ] Search form: 4 inputs + dark search button
- [ ] Intro: 3 feature cards with icons
- [ ] Destinations: 6 cards in grid with images, names, prices
- [ ] Why Choose Us: parallax bg, 3 feature cards
- [   Featured Tours: tour card slider with badges, prices, CTA
- [ ] Testimonials: background image, slider with quotes
- [ ] Instagram: 6 images with hover overlay
- [ ] News: 3 posts + promotional sidebar
- [ ] Footer: newsletter form, 3 contact columns, copyright + Component Dock
- [ ] Responsive design (mobile hamburger, stacked columns)
- [ ] No ColorLib references in app code
- [ ] Placeholder images via `picsum.photos/seed/treklore-<n>/`
- [ ] Open Sans + Oswald loaded via Google Fonts
- [ ] Brand tokens in `@theme` / `index.css`
- [ ] `public/CNAME` set to `treklore.free.componentdock.com`
- [ ] `homepage` set to `https://treklore.free.componentdock.com`
