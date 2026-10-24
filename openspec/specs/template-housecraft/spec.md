# Template: HouseCraft (Real Estate)
<!-- prep-status: shipped-as=homeward -->
> **SHIPPED-UNDER** — the ColorLib `myhome` design this prep describes already
> ships as `apps/homeward` (<https://homeward.free.componentdock.com>).
> Do not scaffold `apps/housecraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-homeward/spec.md`.

## Purpose

Recreation of ColorLib "Myhome" — a real estate property listing template.

- **Source slug:** `myhome`
- **Source URL:** https://colorlib.com/wp/template/myhome/
- **Preview URL:** https://preview.colorlib.com/theme/myhome/
- **New name:** `housecraft`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Tests:** Vitest + Testing Library, 100% coverage

## Design tokens

Extracted from the live preview CSS (`styles/main.css`):

| Token             | Value                  | Notes                                 |
| ----------------- | ---------------------- | ------------------------------------- |
| `brand`           | `#adc867`              | Green — primary CTA, buttons, accents |
| `accent`          | `#55407d`              | Purple — secondary, overlays          |
| `dark`            | `#1e1332`              | Dark purple — footer, dark sections   |
| `text`            | `#2b2e35`              | Near-black body text                  |
| `text-light`      | `#a2b0bf` / `#bdc4d4` | Muted gray text                       |
| `text-muted`      | `#6c7079`              | Tertiary text                         |
| `white`           | `#ffffff`              | Card backgrounds, primary bg          |
| `coral`           | `#db5246`              | Hover accent (links)                  |
| `orange`          | `#ffa07f`              | Accent (tag background for rent)      |
| `font-family`     | `'Montserrat', sans-serif` | Primary font                     |
| `border-radius`   | `50%` on circular elements (avatars, nav dots) | |
| `button-radius`   | Rounded / pill shape   | `.submit` class, green bg             |

## Section structure (order from live DOM)

1. **TopBar** — phone, address, email, login/register links, social icons (Pinterest, Facebook, Twitter, Dribbble, Behance)
2. **Navbar** — logo ("myhome" → "HouseCraft"), main nav (Home, About Us, Listings, News, Contact), "Submit Listing" green button
3. **HeroSlider** — OwlCarousel with 3 slides; each slide: background property image, address + price tag overlay, dark overlay (`rgba(85,64,125,0.67)`), navigation dots
4. **SearchForm** — "Find your home" title; search inputs (location/type/bedrooms/price range), green "Search" button
5. **FeaturedProperties** — "The best deals" subtitle, "Featured Properties" heading; 3 property cards in a row (image, tag "house for sale/rent", price, address, sqft, beds, baths, garages)
6. **ChooseLocation** — "The best deals" subtitle, "Choose a location" heading; list of 8 locations (Downtown Miami, Chicago, Manhattan, etc.)
7. **HotDeal** — "The best deals" subtitle, "Today's Hot Deal" heading; large property image, details (sqft, baths, beds, garages), agent name ("Maria Smith, Agent"), description text
8. **Testimonials** — "Clients testimonials" heading; slider with client quote, name, avatar; dark purple overlay on image background
9. **Footer** — logo, about text, useful links column, contact info column (phone, address, email), navigation links; green "Submit Listing" button; bottom bar with copyright + Component Dock link
10. **GoogleMap** — embedded map (static placeholder in React)

## Requirements

### Feature: TopBar

#### Scenario: TopBar displays contact info

- **GIVEN** the page is loaded
- **THEN** the top bar shows phone number "+546 990221 123"
- **AND** the top bar shows address "Main Str, no 23, New York"
- **AND** the top bar shows email "hosting@contact.com"
- **AND** the top bar shows Login and Register links

#### Scenario: TopBar shows social icons

- **GIVEN** the page is loaded
- **THEN** the top bar shows 5 social icon links (Pinterest, Facebook, Twitter, Dribbble, Behance)

### Feature: Navbar

#### Scenario: Navbar renders logo and nav links

- **GIVEN** the page is loaded
- **THEN** the navbar displays the "HouseCraft" logo text
- **AND** the navbar shows 5 navigation links: Home, About Us, Listings, News, Contact
- **AND** the navbar shows a green "Submit Listing" button

#### Scenario: Navbar is sticky on scroll

- **GIVEN** the user scrolls down past the hero
- **THEN** the navbar remains visible at the top of the viewport

### Feature: HeroSlider

#### Scenario: Hero slider displays property overlays

- **GIVEN** the page is loaded
- **THEN** the hero section shows a carousel with 3 slides
- **AND** each slide has a property image background with a purple overlay
- **AND** each slide shows an address and price tag

#### Scenario: Hero slider supports navigation

- **GIVEN** the page is loaded
- **THEN** dot navigation indicators are present

### Feature: SearchForm

#### Scenario: Search form renders inputs and button

- **GIVEN** the page is loaded
- **THEN** the search section shows a "Find your home" heading
- **AND** the search form has input fields for location, property type, bedrooms, and price
- **AND** the search form has a green "Search" button

#### Scenario: Search form is functional

- **GIVEN** the user fills in search criteria
- **WHEN** the user clicks the Search button
- **THEN** the form does not cause a page error

### Feature: FeaturedProperties

#### Scenario: Featured properties section shows 3 property cards

- **GIVEN** the page is loaded
- **THEN** the featured properties section shows "The best deals" subtitle
- **AND** the featured properties section shows "Featured Properties" heading
- **AND** 3 property cards are displayed in a row
- **AND** each card shows a property image, tag (house for sale/rent), price, address, sqft, beds, baths, and garages

#### Scenario: Property cards have correct tag styling

- **GIVEN** the page is loaded
- **THEN** sale tags are styled differently from rent tags (different background color)

### Feature: ChooseLocation

#### Scenario: Location chooser shows 8 locations

- **GIVEN** the page is loaded
- **THEN** the location section shows "The best deals" subtitle
- **AND** the location section shows "Choose a location" heading
- **AND** 8 location names are listed (Downtown Miami, Chicago, Manhattan, West Hollywood, Washington, Maryland, San Francisco, Orange County)

### Feature: HotDeal

#### Scenario: Hot deal section shows featured property

- **GIVEN** the page is loaded
- **THEN** the hot deal section shows "Today's Hot Deal" heading
- **AND** the hot deal shows a property image
- **AND** the hot deal shows price "$ 562 346"
- **AND** the hot deal shows property details: 1234 sqft, 2 baths, 5 beds, 2 garages
- **AND** the hot deal shows agent name "Maria Smith, Agent"

### Feature: Testimonials

#### Scenario: Testimonials section shows client quotes

- **GIVEN** the page is loaded
- **THEN** the testimonials section shows "Clients testimonials" heading
- **AND** the testimonials section shows a client quote
- **AND** the testimonials section shows client name "Cristinne Smith, Client"

#### Scenario: Testimonials have image background with overlay

- **GIVEN** the page is loaded
- **THEN** the testimonials section has a background image with a dark overlay

### Feature: Footer

#### Scenario: Footer shows brand and links

- **GIVEN** the page is loaded
- **THEN** the footer shows the "HouseCraft" logo
- **AND** the footer shows "Useful Links" column
- **AND** the footer shows contact info (phone, address, email)
- **AND** the footer shows a "Submit Listing" button

#### Scenario: Footer links to Component Dock

- **GIVEN** the page is loaded
- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the footer link text mentions "Component Dock"

### Feature: Overall Layout

#### Scenario: Template uses Montserrat font

- **GIVEN** the page is loaded
- **THEN** the primary font family is "Montserrat"

#### Scenario: Template brand color is green

- **GIVEN** the page is loaded
- **THEN** primary CTA buttons use the brand green color (#adc867)

## Verification checklist

- [ ] TopBar: phone, address, email, social icons all render
- [ ] Navbar: logo, 5 nav links, Submit Listing button, sticky behavior
- [ ] HeroSlider: 3 slides with images, overlays, addresses, prices, dot nav
- [ ] SearchForm: heading, 4 input fields, Search button
- [ ] FeaturedProperties: subtitle, heading, 3 cards with image/tag/price/address/specs
- [ ] ChooseLocation: subtitle, heading, 8 location items
- [ ] HotDeal: heading, large image, price, details, agent info
- [ ] Testimonials: heading, client quote, client name, image background with overlay
- [ ] Footer: logo, links, contact info, Submit Listing, Component Dock link
- [ ] Font: Montserrat loaded and applied
- [ ] Colors: brand green (#adc867), purple accent (#55407d), dark (#1e1332) used correctly
- [ ] Responsive: layout adapts to mobile/tablet/desktop
- [ ] Tests: 100% coverage on all components
- [ ] No ColorLib references in app code
