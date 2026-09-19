# Template: Passport (Travel Agency)

## Purpose

Recreation of ColorLib **Travelers** template.
Preview URL: https://preview.colorlib.com/theme/travelers/
Source slug: `travelers`
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.
A multi-section travel agency landing page with hero slider, testimonials, destinations gallery, services grid, blog cards, and a newsletter CTA.

## Design tokens

Extracted from live preview (`css/style.css`) and Google Fonts reference.

| Token | Value | Notes |
| --- | --- | --- |
| Primary brand color | `#ef6c57` | Coral/salmon — buttons, hover states, active links, icon accents |
| Dark | `#25262a` | Near-black — headings, text overlays, footer background |
| Body text | `#333333` | Primary body copy |
| Secondary text | `#4d4d4d` | Lighter paragraph text |
| Muted text | `#737373` | Meta, captions, secondary info |
| Light muted | `#999999` | Subtle placeholders |
| Background (alt sections) | `#f4f5f9` | Light gray — used on alternating `site-section` blocks |
| Background (slightly cool) | `#edf0f5` | Slightly blue-gray — footer / secondary backgrounds |
| Background (near-white) | `#f8f9fa` | Bootstrap-like near-white |
| White | `#fff` | Cards, overlays, overlap sections |
| Overlay dark | `rgba(0,0,0,0.5)` / `rgba(0,0,0,0.8)` | Hero cover overlay, gradient before pseudo-element |
| Font family | `Poppins` (200, 300, 400, 700, 900) | Primary sans-serif |
| Heading font | `Playfair Display` (200, 300, 400, 700) | Used for display headings |
| Border radius | `0` (sharp corners) + `50%` (circular icons) | Buttons are square-ish; icons in service cards are round |
| Button primary | `#ef6c57` bg, white text, sharp corners | `.btn-primary` |
| Button outline | `#ef6c57` border, transparent bg, sharp corners | `.btn-outline-primary.border-2` |

## Section structure (in order)

### 1. Navbar
- Brand text "Travelers" (h1 link, `text-black h2 mb-0`)
- Nav links: Home (active), Destinations (dropdown: Japan, Europe, China, France), Discount, About, Blog, Contact
- Social icons right-aligned: TripAdvisor, Twitter, Facebook, Instagram (icomoon icons)
- Mobile hamburger menu
- Sticky/absolute positioning, white background, bottom border-top separator

### 2. Hero Slider
- Full-width overlay section (`.site-blocks-cover.overlay`)
- Owl carousel (`slide-one-item home-slider`) with 3 slides
- Each slide: background image, dark overlay (`.overlay` pseudo-element), centered content
- Headings: "Never Stop Exploring", "Love The Places", "Write Down Your Experience"
- Subtext lorem ipsum
- Two CTA buttons: "Book Now!" (outline-primary + primary)

### 3. Featured Destinations (Carousel)
- Light background (`site-section bg-light`)
- Owl carousel (`nonloop-block-13`) with destination cards
- 3 visible cards at once (col-md-6 col-lg-4)
- Each card: image with hover zoom, overlay text, title
- Examples: "Explore Asian Mountains", "Safe Trip With Airasia"

### 4. Services Grid (3 items)
- White background, 3-column layout
- Each item: circular coral icon (unit-4-icon), heading, "Learn More" link
- Services: Air Ticketing, Cruises, Tour Packages

### 5. Testimonials
- Light background (`site-section bg-light`)
- Carousel with testimonial quotes
- Quote text, author name "— James Martin, Traveler"
- 3 testimonial items

### 6. Destinations Gallery (6 items)
- Light background
- Heading: "Our Destinations" / "Choose Your Next Destination"
- 3x2 grid of destination cards (col-md-6 col-lg-4)
- Each card: image, overlay title text
- Destinations: Santorini Greece, Rome Italy, Mount Fuji Japan, Camels Dubai, Elizabeth Tower London, Opera House Australia

### 7. Services Detail (6 items)
- White background
- Heading: "Experience Our Outstanding Services" / "Our Services"
- 3x2 grid of service cards (col-md-6 col-lg-4)
- Each card: circular icon, heading, "Learn More" link
- Services: Air Ticketing, Cruises, Tour Packages, Hotel Accommodations, Sea Explorations, Ski Experiences

### 8. Blog Section
- Light background
- Heading: "Our Blog" / "See Our Daily News & Updates"
- 3 blog cards in a row (col-lg-4)
- Each card: image, author meta, date, category, title, excerpt, "Read More"
- Example: "How to Plan Your Vacation" by Theresa Winston

### 9. Newsletter CTA
- Dark overlay section with background image
- Heading: "Want To Travel With Us?"
- Subtext lorem ipsum
- Email input + Subscribe button (inline form)

### 10. Footer
- Dark background (`#25262a` / `#212529`)
- 3 columns: About Travelers (brand text + social icons), Navigations (link list), Subscribe Newsletter (email form)
- Social icons: Twitter, Facebook, Instagram, LinkedIn
- Component Dock attribution link required (per conventions)

## Gherkin requirements

### Feature: Passport Travel Agency Template

#### Scenario: Navbar renders with all navigation links
Given the user loads the Passport page
Then the navbar displays brand text "Passport"
And the navbar contains links: Home, Destinations, Discount, About, Blog, Contact
And the Destinations link has a dropdown with destination options
And social media icons are visible in the navbar

#### Scenario: Hero slider displays travel imagery
Given the user loads the Passport page
Then a full-width hero section is visible
And the hero contains a headline and descriptive text
And the hero has a call-to-action button

#### Scenario: Featured destinations carousel shows travel cards
Given the user scrolls to the featured destinations section
Then a carousel of destination cards is displayed
And each card shows an image and a title
And the carousel navigation arrows allow cycling through items

#### Scenario: Services grid shows three service items
Given the user scrolls to the services section
Then three service cards are displayed in a row
And each card has an icon, a title, and a "Learn More" link

#### Scenario: Testimonials carousel shows traveler quotes
Given the user scrolls to the testimonials section
Then testimonial quotes with author names are displayed
And the carousel allows cycling through testimonials

#### Scenario: Destinations gallery shows six destination cards
Given the user scrolls to the destinations gallery
Then six destination cards are displayed in a 3x2 grid
And each card shows a destination image and location name

#### Scenario: Services detail section shows six service items
Given the user scrolls to the services detail section
Then six service cards are displayed in a 3x2 grid
And each card has an icon, title, and link

#### Scenario: Blog section shows article previews
Given the user scrolls to the blog section
Then three blog post cards are displayed
And each card shows an image, author, date, title, and excerpt

#### Scenario: Newsletter CTA accepts email subscription
Given the user scrolls to the newsletter section
Then an email input field and subscribe button are visible
And the section has a dark overlay background

#### Scenario: Footer contains brand info and links
Given the user scrolls to the footer
Then the footer displays brand information
And navigation links are listed
And a newsletter subscription form is present
And a Component Dock attribution link is present

## Verification checklist

- [ ] Navbar renders with all links and mobile hamburger toggle
- [ ] Hero slider cycles through slides with overlay and CTAs
- [ ] Featured destinations carousel is functional with navigation
- [ ] Services grid shows 3 items with icons and links
- [ ] Testimonials carousel displays quotes with navigation
- [ ] Destinations gallery shows 6 cards in 3x2 grid with hover effects
- [ ] Services detail section shows 6 items in 3x2 grid
- [ ] Blog section shows 3 article cards with metadata
- [ ] Newsletter CTA has functional email input and subscribe button
- [ ] Footer has all columns, social links, and Component Dock link
- [ ] Brand color `#ef6c57` is applied consistently across CTAs and accents
- [ ] Font family Poppins is applied throughout
- [ ] Playfair Display is used for display headings
- [ ] All sections alternate between white and light gray backgrounds
- [ ] Images use `picsum.photos` placeholder URLs
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `passport.free.componentdock.com`
- [ ] `package.json` homepage is `https://passport.free.componentdock.com`
