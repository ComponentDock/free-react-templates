# Template: Lodging (Real Estate)

## Purpose

Recreation of the ColorLib "Homespace" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `homespace`
- **Source URL:** https://colorlib.com/wp/template/homespace/
- **Preview URL:** https://preview.colorlib.com/theme/homespace/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/homespace-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/lodging`
- **Surge target:** `lodging.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/homespace/

| Token | Value | Usage |
|-------|-------|-------|
| Brand accent | `#f89d13` | Active nav, links, service icons, form focus, dropdown border-top, CTA banner bg |
| Price green | `#7cbd1e` | Property price text in hero cards |
| Dark bg | `#333333` | Footer background |
| CTA bg | `#f89d13` | Primary CTA banner section (.bg-primary) |
| Light bg | `#f9f9f9` | Property listings section, blog section |
| Body bg | `#FFFFFF` | Navbar, cards, service items |
| Body text | `rgba(0,0,0,0.6)` | Body copy, paragraphs |
| Heading text | `#000000` | All headings, logo |
| White text | `#FFFFFF` | On dark/primary backgrounds |
| Footer text | `#737373` | Footer paragraphs |
| Footer links | `#999999` | Footer navigation links |
| Footer link hover | `#FFFFFF` | Footer link hover state |
| Font primary | `Nunito Sans`, sans-serif | All text |
| Font secondary | `Roboto Mono`, monospace | Fallback (declared but overridden by Nunito Sans) |
| Button shape | Square (rounded-0, no border-radius) | All buttons |
| Button primary bg | `#f89d13` | Primary buttons (Bootstrap .btn-primary) |
| Button primary text | `#FFFFFF` | White on brand |
| Button outline | White border, white text | Outline CTA on dark/primary bg |
| Hero text box | White bg, padding 40px, positioned bottom-right, 50% width | Cover slide info overlay |
| Dropdown border-top | `4px solid #f89d13` | Dropdown menu top accent |
| Form focus | `#f89d13` | Input/select focus border |
| Selection bg | `#000000` | Text selection highlight |

## Section Structure (in page order)

### 1. Top Bar
- White background with bottom border
- Left side: phone icon + number ("+2 102 3923 3922"), email icon + address ("info@domain.com")
- Right side: Facebook, Twitter, LinkedIn social icons
- Hidden on small screens (icons only)

### 2. Main Navigation
- White background, no bottom border
- Logo: "HomeSpace" in bold with a red/danger dot (text-danger) — text uppercase
- Nav links (right-aligned): Home, Properties (dropdown: Buy, Rent, Lease, nested Menu submenu), Blog, About, Contact
- Dropdown: white bg, shadow, 4px top border in brand accent
- Hamburger menu for mobile (off-canvas slide)

### 3. Hero Slider
- Full-viewport background image carousel (OwlCarousel, 2 slides)
- Each slide: bg image with parallax (data-stellar-background-ratio)
- White text box positioned bottom-right (50% width) containing:
  - Property address (h2, light weight)
  - Location with room icon
  - Price in green (#7cbd1e)
  - "More Details" link (uppercase, letter-spacing, bold)
- Min height: 600px or calc(100vh - 134px)

### 4. Search Form
- White background section with padding
- 8 form fields in a row:
  - Lot Area select, Property Status select, Location select, Lot Area (second) select
  - Bedrooms select, Bathrooms select
  - Price range slider (jQuery UI slider)
  - Search button (primary, full-width, square)
- All selects: square (rounded-0), custom dropdown arrow

### 5. Features
- 3-column grid, white background
- Each feature: large icon (flaticon) + heading + description
- "Wide Range of Properties", "Rent or Sale", "Property Location"

### 6. New Properties for You
- Light background (#f9f9f9)
- Section title: "New Properties for You"
- 3-column grid × 2 rows = 6 property cards
- Each card: image with hover-reveal text overlay (gradient bg from transparent to dark)
  - Price badge (rounded, green), title, location
  - Bottom panel: Area, Beds, Baths, Garages
- Pagination: circular page numbers (1, 2, 3, 4, 5, ..., 10)

### 7. Our Services
- White background, centered section title
- 3×2 grid of bordered service cards (rounded corners)
- Each card: icon (flaticon, amber #f89d13) + heading + "Learn More" link
- "Research Suburbs", "Sold Houses", "Security Priority" (duplicated for 6 total)

### 8. Our Blog
- Light background (#f9f9f9)
- Section title: "Our Blog"
- 3-column blog cards with fade-up animation (AOS)
- Each card: image on top, white bg text area below with:
  - Date (uppercase, small, secondary color)
  - Title (h5, black)
  - Excerpt paragraph

### 9. Our Agents
- White background, centered section title
- OwlCarousel of agent cards
- Each agent: circular photo (50% width, rounded), name, role ("Real Estate Agent"), bio paragraph, 3 social icons (Facebook, Twitter, LinkedIn)
- 3 unique agents: Megan Smith, Brooke Cagle, Philip Martin (repeated for carousel)

### 10. CTA Banner
- Brand primary background (#f89d13)
- Two columns: text (left) + button (right)
- Heading: "Wide Range of Properties Just For You"
- Subtext (white-50 opacity)
- "See Properties" button: outline-white, full-width, large padding

### 11. Footer
- Dark background (#333333), padding 4-7em
- 3-column layout:
  - Col 1: "About HomeSpace" heading + paragraph
  - Col 2: "Navigations" heading + 2-column link lists (Home, Buy, Rent, Properties | About Us, Privacy Policy, Contact Us, Terms)
  - Col 3: "Follow Us" heading + social icons (Facebook, Twitter, Instagram, LinkedIn)
- Footer headings: uppercase, letter-spacing, white, bottom border (40px white line)
- Copyright bar: centered, "Made with ❤ by Colorlib" → replace with "Made with ❤ by Component Dock" + link to https://www.componentdock.com/

## Gherkin Requirements

### Feature: Lodging Real Estate Template

#### Scenario: Top bar shows contact info and social links
- Given the page is loaded
- Then the top bar shows phone number and email on the left
- And social icons (Facebook, Twitter, LinkedIn) on the right
- And the top bar has a white background with a bottom border

#### Scenario: Navigation has dropdown menus
- Given the page is loaded
- When I hover over "Properties" in the nav
- Then a dropdown appears with "Buy", "Rent", "Lease", and a nested "Menu" submenu
- And the dropdown has a brand accent (#f89d13) top border

#### Scenario: Hero slider displays property details
- Given the page is loaded
- Then a hero slider with background images is displayed
- And each slide shows a white info box with address, location, price, and "More Details" link
- And the price is displayed in green

#### Scenario: Search form has filter selects
- Given the page is loaded
- When I scroll to the search form
- Then 6 select dropdowns are displayed (Lot Area, Property Status, Location, Lot Area, Bedrooms, Bathrooms)
- And a price range slider is present
- And a "Search" button is displayed

#### Scenario: Features section shows 3 items
- Given the page is loaded
- When I scroll to the features section
- Then 3 feature cards are displayed: "Wide Range of Properties", "Rent or Sale", "Property Location"
- And each has an icon and description

#### Scenario: Properties section shows 6 property cards
- Given the page is loaded
- When I scroll to the properties section
- Then 6 property cards are displayed in a 3-column grid
- And each card shows an image, price, title, location, and area/beds/baths/garages info
- And pagination numbers are shown below

#### Scenario: Services section shows 6 service cards
- Given the page is loaded
- When I scroll to the services section
- Then 6 bordered service cards are displayed in a 3×2 grid
- And each card shows an icon, heading, and "Learn More" link

#### Scenario: Blog section shows 3 post cards
- Given the page is loaded
- When I scroll to the blog section
- Then 3 blog post cards are displayed
- And each card shows an image, date, title, and excerpt

#### Scenario: Agents section shows agent profiles
- Given the page is loaded
- When I scroll to the agents section
- Then agent cards are displayed in a carousel
- And each agent shows a circular photo, name, role, bio, and social links

#### Scenario: CTA banner invites action
- Given the page is loaded
- When I scroll to the CTA banner
- Then a brand-colored (#f89d13) banner is displayed
- And it contains the heading "Wide Range of Properties Just For You"
- And a "See Properties" outline button is displayed

#### Scenario: Footer shows navigation and social links
- Given the page is loaded
- When I scroll to the footer
- Then the footer has a dark background with 3 columns: About, Navigations, Follow Us
- And footer headings have an uppercase style with a white bottom border line
- And the copyright text links to Component Dock

#### Scenario: Footer links to Component Dock
- Given the page is loaded
- When I look at the footer copyright
- Then it contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] Top bar with phone, email, social icons
- [ ] Main nav with "HomeSpace." logo (bold + danger dot), 5 links, Properties dropdown with nested submenu
- [ ] Hero slider with 2 bg image slides, white info boxes (address, price, "More Details")
- [ ] Price displayed in green (#7cbd1e)
- [ ] Search form: 6 selects, price range slider, Search button
- [ ] Features: 3-column cards with flaticon icons
- [ ] Properties: 6 cards in 3-col grid, hover-reveal overlay, pagination
- [ ] Services: 6 bordered cards (3×2), amber icons, "Learn More"
- [ ] Blog: 3 cards with image + white text area (date, title, excerpt)
- [ ] Agents: carousel with 3 agent profiles (photo, name, role, bio, social)
- [ ] CTA banner: brand amber bg, heading, outline-white button
- [ ] Footer: dark bg, 3-col (About, Navigations, Follow Us), copyright with Component Dock link
- [ ] Responsive: hamburger off-canvas menu, stacked layout on mobile
- [ ] No ColorLib references in app code (only in spec)
- [ ] Placeholder images via picsum.photos/seed/lodging-*
- [ ] Nunito Sans font loaded via Google Fonts link
