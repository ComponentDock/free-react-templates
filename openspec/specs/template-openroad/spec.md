# Template: OpenRoad (Car Rental)

## Purpose

Recreation of ColorLib's **Autoroad** — a car rental HTML template with a dark
navbar, hero section with booking form, vehicle search filter, services grid,
car listing cards with pricing, how-it-works workflow, testimonial carousel,
about section, blog cards, and a multi-column dark footer.

- **Source:** Autoroad — https://colorlib.com/wp/template/autoroad/
- **Preview:** https://preview.colorlib.com/theme/autoroad/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (extracted from preview)

| Token | Value | Notes |
|-------|-------|-------|
| Brand color (primary) | `#007bff` | Bootstrap blue — buttons, links, focus states |
| Accent / price color | `#fc983c` | Orange — used on car rental pricing rate text |
| Dark background | `#000` | Footer, services section overlay |
| Overlay | `rgba(0, 0, 0, 0.7)` | Hero background overlay, services section overlay |
| White | `#fff` | Body background, request form background, text on dark |
| Dark text | `#212529` | Primary body text |
| Body font | `'Poppins', sans-serif` | Google Fonts, loaded via Cloudflare font-face |
| Button radius | `0.25rem` | Bootstrap default `.form-control` and buttons |
| Request form radius | `5px` | Hero booking form card |
| Request form shadow | `0px 10px 31px -21px rgba(0,0,0,0.33)` | Elevated booking form card |
| Car card shadow | `-10px 10px 25px -15px rgba(0,0,0,0.17)` | Car listing card image shadow |
| Section padding | default (Bootstrap `py-5`) | Consistent vertical rhythm |
| Button primary bg hover | `#0069d9` | Slightly darker blue on hover |
| Button primary border hover | `#0062cc` | Border darkens on hover |
| Footer widget heading | `#fff` | White headings on black footer |
| Footer widget links | `rgba(255, 255, 255, 0.8)` | Semi-transparent white links |
| Footer newsletter button | `#fff bg` | White button on black footer |

## Visual Design (from screenshot reference)

The Autoroad screenshot shows:
- Dark navbar with "Autoroad" logo (styled with colored span), nav links: Home, About, Pricing, Our Car, Blog, Contact
- Full-width hero with background image + dark overlay; left side has large white headline "Now It's easy for you rent a car" with video play button; right side has white elevated booking form card (pick-up location, drop-off location, pick-up date, drop-off date, pick-up time, "Search Vehicle" blue button)
- Vehicle search filter bar below hero: 4-column form with dropdown selects (Select Model, Select Brand, Year Model, Min Year) + "Search Vehicle" button
- Services section: dark overlay background, "Our Services" heading, 4 service cards in a row (24/7 Car Support, Lots of location, Reservation, Rental Cars) each with flaticon icon
- "Choose Your Car" section: car listing grid with image cards, each showing car image, price ($25/Day in orange), car name, brand badge, "Book now" and "Details" buttons
- How it Works / Workflow: 4-step horizontal flow (Pick Destination, Select Term, Choose A Car, Enjoy The Ride) with icons
- Testimonials: carousel with client photos, quote text, name and role
- About Us: "Choose A Perfect Car" heading, descriptive text, "Search Vehicle" CTA button
- Blog: 3 blog cards with thumbnail image, date, author, title, excerpt
- Dark footer (#000): 4 columns — About Autoroad, Information links, Customer Support links, Contact Us with address/phone/email + social icons

## Gherkin Requirements

### Feature: OpenRoad — Car Rental Landing Page

#### Scenario: Navbar displays brand and navigation links
- GIVEN the user loads the page
- THEN a dark navigation bar is displayed at the top
- AND the brand logo "OpenRoad" appears on the left with a colored accent span
- AND navigation links appear on the right: Home, About, Pricing, Our Car, Blog, Contact
- AND the navbar becomes sticky/solid on scroll

#### Scenario: Hero section has headline and booking form
- GIVEN the user views the hero area
- THEN a full-width hero with background image and dark overlay is displayed
- AND a large white headline "Now It's easy for you rent a car" appears on the left
- AND a paragraph description appears below the headline
- AND a video play button link "Easy steps for renting a car" appears below the text
- AND a white elevated booking form card appears on the right with fields: pick-up location, drop-off location, pick-up date, drop-off date, pick-up time
- AND the booking form has rounded corners (5px) and shadow
- AND a blue "Search Vehicle" submit button is at the bottom of the form

#### Scenario: Vehicle search filter bar
- GIVEN the user scrolls past the hero
- THEN a search/filter bar is displayed with 4 dropdown selects
- AND the selects are: Select Model, Select Brand, Year Model, Min Year
- AND a "Search Vehicle" button is present
- AND the bar has a white background

#### Scenario: Services section displays 4 service cards
- GIVEN the user scrolls to the Services section
- THEN a dark overlay background section is shown
- AND a centered "Our Services" heading appears
- AND 4 service cards are displayed in a horizontal row
- AND each card has a flaticon icon, title, and description text
- AND the services are: 24/7 Car Support, Lots of location, Reservation, Rental Cars

#### Scenario: Choose Your Car section shows car listing cards
- GIVEN the user scrolls to the car listings section
- THEN a "Choose Your Car" heading is displayed
- AND car cards are shown in a grid layout
- AND each card has a car image, price display (orange #fc983c rate), car name, brand label
- AND each card has "Book now" and "Details" buttons
- AND cards have a subtle shadow effect

#### Scenario: How It Works section shows 4-step workflow
- GIVEN the user scrolls to the workflow section
- THEN a "How it works" heading is displayed
- AND 4 steps are shown horizontally: Pick Destination, Select Term, Choose A Car, Enjoy The Ride
- AND each step has an icon, title, and description

#### Scenario: Testimonials section displays client reviews
- GIVEN the user scrolls to the Testimonials section
- THEN a "Happy Clients" heading is displayed
- AND a carousel of testimonials is shown
- AND each testimonial has a client photo, quote text, client name, and role
- AND the carousel allows navigation between testimonials

#### Scenario: About section shows company info
- GIVEN the user scrolls to the About section
- THEN a "Choose A Perfect Car" heading is displayed
- AND descriptive text about the company is shown
- AND a "Search Vehicle" CTA button appears

#### Scenario: Blog section shows recent articles
- GIVEN the user scrolls to the Blog section
- THEN a "Recent Blog" heading is displayed
- AND 3 blog cards are shown in a row
- AND each card has a thumbnail image, date, author name, title, and excerpt
- AND cards have a subtle border and shadow

#### Scenario: Footer displays multi-column layout
- GIVEN the user scrolls to the footer
- THEN a dark black (#000) footer is displayed
- AND 4 columns appear: About Autoroad, Information links, Customer Support links, Contact Us
- AND social media icons are shown in the About column
- AND contact info includes address, phone, and email
- AND the footer links "Made with Component Dock" or "Component Dock" attribution is present

#### Scenario: Footer attribution links to Component Dock
- GIVEN the user views the footer
- THEN a link to "https://www.componentdock.com/" is present
- AND the link text references "Component Dock"

## Verification Checklist

- [ ] Navbar: dark background, brand logo with accent, 5 nav links, sticky on scroll
- [ ] Hero: background image with dark overlay, headline + description + video link on left, booking form card on right with 5 fields + submit button
- [ ] Search filter: 4-column dropdown bar with Model/Brand/Year/Min Year + Search Vehicle button
- [ ] Services: dark overlay background, 4 service cards with icons
- [ ] Car listings: grid of car cards with image, orange price, name, brand, Book/Details buttons
- [ ] How It Works: 4-step horizontal workflow with icons
- [ ] Testimonials: carousel with photos, quotes, names, roles
- [ ] About: heading, description text, CTA button
- [ ] Blog: 3 cards with image, date, author, title, excerpt
- [ ] Footer: dark background, 4 columns, social icons, contact info, Component Dock attribution
- [ ] All design tokens match: Poppins font, #007bff primary, #fc983c accent, #000 footer, 5px form radius
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images use picsum.photos/seed/openroad-N/W/H
- [ ] Footer links to componentdock.com

## Replication Notes

- Preview fetched from: https://preview.colorlib.com/theme/autoroad/
- CSS file: css/style.css (78KB) — Bootstrap 4 base + custom autoroad styles
- Font: Poppins (weights 200–800) loaded via Cloudflare CDN font-face
- Icon libraries used: flaticon, ionicons, open-iconic — replace with lucide-react
- The template uses Bootstrap 4 grid classes — convert to Tailwind equivalents
- The booking form in the hero uses a white card with shadow and border-radius
- Car cards use a price-wrap overlay pattern with orange pricing text
- Services section uses a full-width dark overlay background image
