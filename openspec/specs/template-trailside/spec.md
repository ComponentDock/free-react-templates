# Template: Trailside (Travel)

## Purpose

Recreation of the ColorLib **Ecoland** travel/eco-tourism template as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source**: [ColorLib Ecoland](https://colorlib.com/wp/template/ecoland/)
- **Preview**: https://preview.colorlib.com/theme/ecoland/
- **Category**: Travel / Eco-Tourism / Destination
- **New name**: `trailside` (apps/trailside, @free-react-templates/trailside)
- **Deploy target**: https://trailside.free.componentdock.com

### Template description

A full-featured travel/eco-tourism website with a split-layout hero slider, search form, 4-column services grid, side-by-side about section, parallax CTAs, destination/hotel/restaurant card grids, blog entries, contact section with form, image gallery, and dark footer. The aesthetic is warm and nature-focused with a rose-beige accent, serif headings, and clean card layouts.

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/ecoland/:

| Token | Value | Notes |
|-------|-------|-------|
| Primary brand color | `#007bff` | Bootstrap blue — used on CTA buttons, active states |
| Accent / link color | `#e2c0bb` | Warm rose-beige — used on links, brand hover states, vertical label backgrounds |
| Loader accent | `#F96D00` | Orange — spinner accent color |
| Navbar background (mobile) | `#000000` | Black background on mobile |
| Navbar background (desktop) | `transparent` | Transparent overlay on hero |
| Navbar brand color (desktop) | `#000000` | Black brand text on desktop |
| Navbar brand color (scrolled) | `#e2c0bb` | Rose-beige brand text when scrolled |
| Body background | `#fff` | White |
| Body text color | `#999999` | Muted gray |
| Heading color | `rgba(0,0,0,0.9)` | Near-black |
| Heading font family | `"Cormorant Garamond", Georgia, serif` | Serif headings |
| Body font family | `"Poppins", Arial, sans-serif` | Sans-serif body |
| Body font size | `16px` | Line-height 1.8, font-weight 400 |
| Button border-radius | `0.25rem` | Slightly rounded |
| Button padding (hero CTA) | `px-5 py-3` | Generous padding |
| Subheading color | `#e2c0bb` | Rose-beige subheading text |
| Project card hover | Image expand overlay | Dark overlay with expand icon |
| Footer background | Dark (`.ftco-footer`) | Dark footer with social icons |
| Gallery hover | Dark overlay with Instagram icon | Image popup links |
| Section spacing | Standard ftco-section | Generous padding |
| Blog card background-image | Image with dark overlay | `.block-20` class |

## Section Structure (order)

1. **Navbar** — transparent on desktop (over hero), black on mobile, brand left, nav links right (Home, Services, About, Destination, Hotel, Restaurant, Blog, Contact)
2. **Hero Slider** — split layout: text column (left) with subheading, h1, description, "Discover" primary CTA; image column (right) with background image + vertical label badge (e.g., "Greece"); SVG blob decoration; multiple slides
3. **Search Form** — "Where do you want to go?" heading, 5-column form: Destination, Check-in date, Check-out date, Price Limit (select), Search button
4. **Services** — 4-column icon grid (Activities, Travel Arrangement, Private Guide, Location Manager), centered heading with subheading
5. **About** — side-by-side: left image, right darkened text block with "Get Best Travel Deals" heading, description, "Book now" + "Contact us" buttons
6. **Destination CTA** — full-width parallax background image with overlay, "Choose the Perfect Destination" heading + "Search Places" white button
7. **Destinations** — 3-column grid of 6 destination cards: image with optional "Sale" badge, price (old/new), duration, location name, star rating, review count, image popup icon
8. **Hotel CTA** — full-width parallax background with "Choose at $99 Per Night Only" + "Book a room now" white button
9. **Hotels** — 3-column grid of 3 hotel cards: same card format as destinations (image, price, nights, name, stars)
10. **Restaurant** — 3-column grid of 3 restaurant cards: image, "menu start at $X", location, name, stars
11. **Blog** — 3-column grid of 3 blog entries on light background: background image, date badge (day + month/year), title, excerpt, "Read More" primary button, admin + chat count
12. **Contact** — side-by-side: left contact form (Name, Email, Subject, Message, Send Message button), right info boxes (Address, Contact Number, Email Address, Website) each with icon
13. **Gallery** — 6-column grid of image thumbnails with hover overlay (Instagram icon), image popup
14. **Footer** — 4-column layout: About + social icons, Information links, Experience links, Contact info (address, phone, email); copyright bar

## Requirements

### Feature: Trailside template behaviour

Feature: Trailside Travel Template

Background:
- **GIVEN** the user visits https://trailside.free.componentdock.com
- **THEN** the page loads successfully

#### Scenario: Navbar renders with brand and navigation

- **THEN** the navbar displays brand text "Trailside"
- **AND** the navbar contains links: Home, Services, About, Destination, Hotel, Restaurant, Blog, Contact
- **AND** the navbar is transparent on desktop overlaying the hero
- **AND** the navbar has black background on mobile
- **AND** the brand text is black on desktop

#### Scenario: Hero slider displays split-layout slides

- **THEN** the hero slider has a split layout (text left, image right)
- **AND** each slide displays a subheading, headline, description, and "Discover" primary CTA button
- **AND** each slide has a background image on the right side
- **AND** each slide has a vertical label badge with location name (e.g., "Greece")
- **AND** the slider supports multiple slides (at least 2)
- **AND** an SVG blob decoration appears in the hero

#### Scenario: Search form accepts travel query parameters

- **THEN** a search form section appears with heading "Where do you want to go?"
- **AND** the form contains: Destination input, Check-in date, Check-out date, Price Limit dropdown, Search button
- **AND** the Price Limit dropdown offers values from $5,000 to $2,000,000
- **AND** the Search button is styled as a primary button

#### Scenario: Services section displays 4 service icons

- **THEN** a services section appears
- **AND** it contains 4 service items in a grid
- **AND** each service has an icon, title, and description
- **AND** the titles are: Activities, Travel Arrangement, Private Guide, Location Manager

#### Scenario: About section displays side-by-side image and text

- **THEN** an about section appears
- **AND** it has a left column with a background image
- **AND** it has a right column with dark background containing:
| Element | Content |
| Subheading | Get in touch with us |
| Heading | Get Best Travel Deals |
| Buttons | "Book now" (primary), "Contact us" (white) |

#### Scenario: Destination CTA parallax section

- **THEN** a full-width parallax section appears with background image
- **AND** it displays "Choose the Perfect Destination" heading
- **AND** a "Search Places" white outline button is shown

#### Scenario: Destinations section shows 6 destination cards in 3-column grid

- **THEN** a destinations section appears
- **AND** 6 destination cards are displayed in a 3-column grid
- **AND** each card has: image, price (with optional old price strikethrough), duration, location name, 5-star rating, review count
- **AND** the first card shows a "Sale" badge
- **AND** each card has an image popup expand icon

#### Scenario: Hotel CTA parallax section

- **THEN** a full-width parallax section appears with background image
- **AND** it displays "Choose at $99 Per Night Only" heading
- **AND** a "Book a room now" white outline button is shown

#### Scenario: Hotels section shows 3 hotel cards

- **THEN** a hotels section appears with "Suggested Hotel" subheading
- **AND** 3 hotel cards are displayed in a 3-column grid
- **AND** each card has: image, price, duration (e.g., "3 nights"), hotel name, star rating

#### Scenario: Restaurant section shows 3 restaurant cards

- **THEN** a restaurant section appears with "Restaurant" subheading
- **AND** 3 restaurant cards are displayed in a 3-column grid
- **AND** each card has: image, "menu start at $X.XX", location, restaurant name, star rating

#### Scenario: Blog section displays 3 blog entries

- **THEN** a blog section appears on light background
- **AND** 3 blog entries are displayed in a 3-column grid
- **AND** each entry has: background image, date badge (day + month/year), title, excerpt
- **AND** each entry has a "Read More" primary button and admin/chat count

#### Scenario: Contact section has form and info boxes

- **THEN** a contact section appears
- **AND** a contact form is on the left with: Name, Email, Subject, Message fields + "Send Message" button
- **AND** 4 info boxes appear on the right: Address, Contact Number, Email Address, Website
- **AND** each info box has an icon

#### Scenario: Gallery section displays 6 images in grid

- **THEN** a gallery section appears with 6 images in a row
- **AND** each image has a hover overlay with Instagram icon
- **AND** clicking an image opens a popup

#### Scenario: Footer renders with all content blocks

- **THEN** the footer has a dark background
- **AND** it contains: About section with brand link and social icons (Twitter, Facebook, Instagram)
- **AND** Information links: Online Enquiry, General Enquiry, Booking, Privacy, Refund Policy, Call Us
- **AND** Experience links: Adventure, Hotel and Restaurant, Beach, Nature, Camping, Party
- **AND** Contact info: address, phone, email
- **AND** the footer links to https://www.componentdock.com/ (branded "Component Dock")

#### Scenario: Design token fidelity

- **THEN** the primary color is #007bff (blue)
- **AND** the accent/link color is #e2c0bb (rose-beige)
- **AND** the font family is "Poppins", Arial, sans-serif for body
- **AND** the heading font is "Cormorant Garamond", Georgia, serif
- **AND** buttons have 0.25rem border-radius
- **AND** body text color is #999999
- **AND** heading color is rgba(0,0,0,0.9)

#### Scenario: Responsive behavior

- **THEN** the navbar collapses to hamburger on mobile
- **THEN** the hero split layout stacks vertically on mobile
- **THEN** the search form fields stack on mobile
- **THEN** the services grid stacks on mobile
- **THEN** the about section stacks on mobile
- **THEN** the destination/hotel/restaurant grids stack on mobile
- **THEN** the blog entries stack on mobile
- **THEN** the contact form and info stack on mobile
- **THEN** the footer columns stack on mobile

#### Scenario: Accessibility

- **THEN** all interactive elements have appropriate aria attributes
- **THEN** the navbar toggle has aria-label "Toggle navigation"
- **THEN** semantic HTML elements are used (nav, section, footer)
- **THEN** images have alt text
- **THEN** form inputs have labels

## Verification checklist

- [ ] Navbar: brand text, 8 nav links, transparent on desktop, black on mobile
- [ ] Hero slider: split layout, subheading, h1, description, CTA, vertical label, 2+ slides
- [ ] Search form: 5 fields (destination, check-in, check-out, price, search)
- [ ] Services: 4 icon cards (Activities, Travel Arrangement, Private Guide, Location Manager)
- [ ] About: side-by-side image + dark text, 2 buttons
- [ ] Destination CTA: parallax bg, heading, white button
- [ ] Destinations: 6 cards in 3-col grid, prices, stars, Sale badge on first
- [ ] Hotel CTA: parallax bg, "$99 Per Night" heading, white button
- [ ] Hotels: 3 cards in 3-col grid, prices, stars
- [ ] Restaurant: 3 cards in 3-col grid, menu prices, stars
- [ ] Blog: 3 entries on light bg, date badges, Read More buttons
- [ ] Contact: form (left) + 4 info boxes (right)
- [ ] Gallery: 6 images, hover overlay, popup
- [ ] Footer: 4 columns, social icons, info links, copyright
- [ ] Design tokens: #007bff primary, #e2c0bb accent, Poppins + Cormorant Garamond
- [ ] Footer links to Component Dock (no ColorLib references in app code)
- [ ] Deploy target: trailside.free.componentdock.com
