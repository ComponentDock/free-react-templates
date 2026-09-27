# Template: HouseCraft (Real Estate)

## Purpose

Recreation of ColorLib **Myhome** — a real estate property listing template.

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

## Gherkin requirements

### Feature: TopBar
```gherkin
Scenario: TopBar displays contact info
  Given the page is loaded
  Then the top bar shows phone number "+546 990221 123"
  And the top bar shows address "Main Str, no 23, New York"
  And the top bar shows email "hosting@contact.com"
  And the top bar shows Login and Register links

Scenario: TopBar shows social icons
  Given the page is loaded
  Then the top bar shows 5 social icon links (Pinterest, Facebook, Twitter, Dribbble, Behance)
```

### Feature: Navbar
```gherkin
Scenario: Navbar renders logo and nav links
  Given the page is loaded
  Then the navbar displays the "HouseCraft" logo text
  And the navbar shows 5 navigation links: Home, About Us, Listings, News, Contact
  And the navbar shows a green "Submit Listing" button

Scenario: Navbar is sticky on scroll
  Given the user scrolls down past the hero
  Then the navbar remains visible at the top of the viewport
```

### Feature: HeroSlider
```gherkin
Scenario: Hero slider displays property overlays
  Given the page is loaded
  Then the hero section shows a carousel with 3 slides
  And each slide has a property image background with a purple overlay
  And each slide shows an address and price tag

Scenario: Hero slider supports navigation
  Given the page is loaded
  Then dot navigation indicators are present
```

### Feature: SearchForm
```gherkin
Scenario: Search form renders inputs and button
  Given the page is loaded
  Then the search section shows a "Find your home" heading
  And the search form has input fields for location, property type, bedrooms, and price
  And the search form has a green "Search" button

Scenario: Search form is functional
  Given the user fills in search criteria
  When the user clicks the Search button
  Then the form does not cause a page error
```

### Feature: FeaturedProperties
```gherkin
Scenario: Featured properties section shows 3 property cards
  Given the page is loaded
  Then the featured properties section shows "The best deals" subtitle
  And the featured properties section shows "Featured Properties" heading
  And 3 property cards are displayed in a row
  And each card shows a property image, tag (house for sale/rent), price, address, sqft, beds, baths, and garages

Scenario: Property cards have correct tag styling
  Given the page is loaded
  Then sale tags are styled differently from rent tags (different background color)
```

### Feature: ChooseLocation
```gherkin
Scenario: Location chooser shows 8 locations
  Given the page is loaded
  Then the location section shows "The best deals" subtitle
  And the location section shows "Choose a location" heading
  And 8 location names are listed (Downtown Miami, Chicago, Manhattan, West Hollywood, Washington, Maryland, San Francisco, Orange County)
```

### Feature: HotDeal
```gherkin
Scenario: Hot deal section shows featured property
  Given the page is loaded
  Then the hot deal section shows "Today's Hot Deal" heading
  And the hot deal shows a property image
  And the hot deal shows price "$ 562 346"
  And the hot deal shows property details: 1234 sqft, 2 baths, 5 beds, 2 garages
  And the hot deal shows agent name "Maria Smith, Agent"
```

### Feature: Testimonials
```gherkin
Scenario: Testimonials section shows client quotes
  Given the page is loaded
  Then the testimonials section shows "Clients testimonials" heading
  And the testimonials section shows a client quote
  And the testimonials section shows client name "Cristinne Smith, Client"

Scenario: Testimonials have image background with overlay
  Given the page is loaded
  Then the testimonials section has a background image with a dark overlay
```

### Feature: Footer
```gherkin
Scenario: Footer shows brand and links
  Given the page is loaded
  Then the footer shows the "HouseCraft" logo
  And the footer shows "Useful Links" column
  And the footer shows contact info (phone, address, email)
  And the footer shows a "Submit Listing" button

Scenario: Footer links to Component Dock
  Given the page is loaded
  Then the footer contains a link to "https://www.componentdock.com/"
  And the footer link text mentions "Component Dock"
```

### Feature: Overall Layout
```gherkin
Scenario: Template uses Montserrat font
  Given the page is loaded
  Then the primary font family is "Montserrat"

Scenario: Template brand color is green
  Given the page is loaded
  Then primary CTA buttons use the brand green color (#adc867)
```

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
