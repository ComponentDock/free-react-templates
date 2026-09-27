# Template: Sleuth (Real Estate)

## Purpose

Recreation of the ColorLib "Holmes" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `holmes`
- **Source URL:** https://colorlib.com/wp/template/holmes/
- **Preview URL:** https://preview.colorlib.com/theme/holmes/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/holmes-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/sleuth`
- **Surge target:** `sleuth.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/main.css`) at https://preview.colorlib.com/theme/holmes/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#ea6c5d` | Buttons, accents, selection highlight, menu hover, focus borders |
| Brand teal | `#4cd3e3` | Secondary stat color (e.g. "Yes" badges) |
| Brand blue | `#38a4ff` | Third stat color |
| Brand yellow | `#f4e700` | Fourth stat color |
| Brand red | `#f44a40` | Fifth stat color |
| Dark bg | `#222222` | Footer background |
| Body bg | `#FFFFFF` | Main content backgrounds |
| Muted bg | `#f9f9ff` | Top bar background, search field background |
| Heading text | `#222222` | All headings, nav links, logo |
| Body text | `#777777` | Body copy, paragraphs |
| White text | `#FFFFFF` | On dark backgrounds, on brand buttons |
| Font primary | `Poppins`, sans-serif | All text (weights 300–700) |
| Button shape | Pill (border-radius: 25px) | CTA buttons |
| Button bg | `#ea6c5d` | Primary CTA buttons |
| Button text | `#FFFFFF` | White on brand |
| Button size | height: 40px, padding: 0 30px 0 60px | |
| Banner overlay | `rgba(0,0,0,0.18)` | Hero image dark overlay |
| Header shadow | `rgba(158,158,158,0.3)` | Default header box-shadow |
| Nav hover | `#ea6c5d` bg, white text | Menu item hover |

## Section Structure (in page order)

### 1. Top Bar
- Background: `#f9f9ff` (muted lavender)
- Right-aligned list: phone number ("+880 1234 654 953"), "Sell / Rent Property", "Login / Register"
- Hidden on mobile (<992px)

### 2. Main Navigation
- White background, box-shadow
- Logo (left)
- Nav links (right): Home, Properties, About, Blog (dropdown: Blog Home, Blog Single), Pages (dropdown: Agents, Elements), Contact
- Dropdown sub-menus on hover
- Hamburger menu for mobile

### 3. Hero / Banner
- Full-screen background image with dark overlay (rgba(0,0,0,0.18))
- Headline: "We're Real Estate King"
- Property search form with:
  - Sell / Rent toggle switch
  - Location select dropdown
  - Property Type select dropdown
  - Bedrooms select dropdown (×2)
  - Price Range slider input
  - Area Range slider input
  - "Search Properties" pill button (brand coral)

### 4. Properties
- Section heading: "Properties in Various Cities" + subtitle
- 3-column grid of property cards
- Each card: image with "For Sale" badge, title + price, bed/bath/area specs, pool/internet/cleaning status (green "Yes" / red "No"), likes + comments count

### 5. About
- Full-width, 2-column layout (no container gap)
- Left: 3 info blocks stacked — "Why Choose Us", "Our Properties", "Legal Notice" (each heading + lorem paragraph)
- Right: full-height image

### 6. City Properties (Gallery)
- Section heading: "Properties in Various Cities" + subtitle
- Asymmetric grid: 1 tall image (left, 4 cols) + 1 wide image (right, 8 cols) + 2 equal images below (6 cols each)
- Each image: dark overlay with hover-reveal text title
- Cities: San Francisco, New York, Boston, Elay

### 7. Testimonials
- Section heading: "Feedback from our real clients" + subtitle
- Carousel of testimonial cards
- Each card: circular user photo, paragraph quote, name (h4), title/role
- 3 unique testimonials: Helena Phillips (CEO at Facebook), Cordelia Barton (CEO at Twitter), Carrie Reese (CEO at Google)

### 8. Blog
- Section heading: "Feedback from our real clients" + subtitle (reuses same heading — original quirk)
- 3-column blog post cards
- Each card: thumbnail image, title link, excerpt paragraph, meta (date icon + date, heart icon + count, bubble icon + count)

### 9. Footer
- Background: `#222222`, white text
- 4-column layout:
  - Col 1 (3 cols): "About Us" + paragraph
  - Col 2 (4 cols): "Newsletter" + email input + submit arrow button
  - Col 3 (3 cols): "Instagram Feed" + 8 thumbnail images in grid
  - Col 4 (2 cols): "Follow Us" + social icons (Facebook, Twitter, Dribbble, Behance)
- Footer bottom bar: copyright text with "Made with ❤ by Colorlib" → replace with "Made with ❤ by Component Dock" + link to https://www.componentdock.com/

## Gherkin Requirements

### Feature: Sleuth Real Estate Template

#### Scenario: Top bar displays contact and navigation links
- Given the page is loaded
- Then the top bar shows phone number, "Sell / Rent Property", and "Login / Register"
- And the top bar is right-aligned with a light lavender background
- And the top bar is hidden on mobile viewports

#### Scenario: Navigation has dropdown menus
- Given the page is loaded
- When I hover over "Blog" in the nav
- Then a dropdown appears with "Blog Home" and "Blog Single"
- When I hover over "Pages" in the nav
- Then a dropdown appears with "Agents" and "Elements"

#### Scenario: Hero banner shows search form
- Given the page is loaded
- Then the hero section displays the headline "We're Real Estate King"
- And a property search form is visible with location, property type, and bedroom selects
- And a Sell/Rent toggle is present
- And price range and area range inputs are present
- And a "Search Properties" button is displayed

#### Scenario: Properties section shows property cards
- Given the page is loaded
- When I scroll to the properties section
- Then 3 property cards are displayed in a grid
- And each card shows an image, title, price, bed/bath/area specs
- And each card shows pool/internet/cleaning status indicators
- And each card shows a likes count and comments count

#### Scenario: About section shows info blocks and image
- Given the page is loaded
- When I scroll to the about section
- Then 3 info blocks are displayed: "Why Choose Us", "Our Properties", "Legal Notice"
- And a full-height image is displayed on the right side

#### Scenario: City gallery shows hover overlay
- Given the page is loaded
- When I hover over a city image in the gallery
- Then a dark overlay with the city name appears

#### Scenario: Testimonials carousel displays client feedback
- Given the page is loaded
- When I scroll to the testimonials section
- Then testimonial cards are displayed with circular user photos
- And each card shows a quote, name, and title

#### Scenario: Blog section shows post cards
- Given the page is loaded
- When I scroll to the blog section
- Then 3 blog post cards are displayed
- And each card shows a thumbnail, title, excerpt, and meta information (date, likes, comments)

#### Scenario: Footer shows newsletter and social links
- Given the page is loaded
- When I scroll to the footer
- Then the footer has a dark background with 4 columns: About Us, Newsletter, Instagram Feed, Follow Us
- And the newsletter has an email input field
- And the footer bottom shows copyright with a link to Component Dock

#### Scenario: Footer links to Component Dock
- Given the page is loaded
- When I look at the footer bottom
- Then it contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] Top bar with phone, Sell/Rent, Login/Register links
- [ ] Main nav with logo, 6 links, 2 dropdown sub-menus
- [ ] Hero with background image, dark overlay, headline, full search form
- [ ] Sell/Rent toggle switch in search form
- [ ] Properties section: 3 property cards in grid
- [ ] Each property card: image, badge, title, price, specs, status, social counts
- [ ] About section: 3 stacked info blocks left, image right
- [ ] City gallery: asymmetric 4-image grid with hover overlay
- [ ] Testimonials: carousel with 3 testimonial cards (circular photo, quote, name, role)
- [ ] Blog: 3 post cards (image, title, excerpt, date/likes/comments meta)
- [ ] Footer: 4 columns (About Us, Newsletter with email input, Instagram feed, Follow Us)
- [ ] Footer bottom: copyright + Component Dock link (NOT Colorlib)
- [ ] Responsive: hamburger nav, stacked layout on mobile
- [ ] No ColorLib references in app code (only in spec)
- [ ] Placeholder images via picsum.photos/seed/sleuth-*
- [ ] Poppins font loaded via Google Fonts link
