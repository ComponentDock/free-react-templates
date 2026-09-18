# Template: Routebook (Directory / Local Services)

## Purpose

Recreation of ColorLib **Directing** — a local services directory / listing template.
- **Source slug:** `directing`
- **Preview URL:** https://preview.colorlib.com/theme/directing/
- **ColorLib page:** https://colorlib.com/wp/template/directing/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `routebook` (apps/routebook, @free-react-templates/routebook)

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| **Primary brand color** | `#f03250` | Red — used on primary buttons, accent icons, testimonial quote |
| **Secondary accent** | `#f09d17` / `#E9AA13` | Orange/amber — star ratings, hover states |
| **Hero bg** | `img/hero/hero-bg.jpg` | Full-width background image overlay |
| **Work section bg** | `#f9f9f9` | Light gray |
| **Newsletter section bg** | `#f9f9f9` | Light gray |
| **Header bg** | transparent (default) / `#ffffff` (scrolled) | Fixed header with shadow on scroll |
| **Body text** | `#323232` | Dark charcoal |
| **Secondary text** | `#707070` / `#777C81` | Muted gray |
| **Font family** | `"Cairo", sans-serif` | Google Font |
| **Primary button** | `background: #f03250`, `color: #ffffff`, `border-radius: 2px`, `padding: 12px 30px`, `font-weight: 700`, `text-transform: uppercase` | Sharp corners, minimal radius |
| **Login button** | `border: 1px solid #ffffff`, `border-radius: 50%` | Circular icon button |
| **Listing card radius** | `5px` | Rounded corners on cards |
| **Section heading** | `h2` in section-title divs | Centered, bold |
| **Category icons** | Flaticon food icons (fork, kebab, food truck, croissant, take-away, delivery) | Tab navigation icons |
| **Footer** | Dark background, about/address/social columns | Standard footer layout |

## Visual design notes (from screenshot)

- Dark hero section with background image overlay, large white heading "Discover The Best Services Near You", search form with category/location dropdowns, red "Search" button
- White categories section with 5 icon+label items in a row (Food & Drink, Restaurant, Hotels, Beauty & Spa, Shopping)
- Tabbed "Most Searched Services" section with 6 food category tabs, each showing 3 listing cards (image, title, price, tags)
- "How Does It Work" section with 3 step cards on light gray bg (Explore Listing, Making Appointments, trusted info)
- "Top Featured Locations" section with 4 location cards (Washington D.C, Chicago, San Antonio, Los Angeles) showing city images
- Testimonials section with quote icon and user reviews
- Blog/News section with 3 post cards
- Newsletter subscription area
- Dark footer with logo, address, social links

## Gherkin requirements

### Header / Navigation
```gherkin
Scenario: Navbar displays logo and navigation links
  Given the user loads the page
  When the header renders
  Then the logo "Routebook" is visible on the left
  And navigation links "Home", "About", "Listings", "Blog", "Contact" are shown
  And a red "Add Listing" primary button appears
  And a circular login icon button appears

Scenario: Header becomes fixed on scroll
  Given the user scrolls past the hero
  When the header enters fixed position
  Then it gains a white background with box shadow
  And all nav link colors change from white to dark
```

### Hero Section
```gherkin
Scenario: Hero renders with search form
  Given the user is on the homepage
  When the hero section loads
  Then a full-width background image is displayed
  And the heading "Discover The Best Services Near You" is centered in white
  And a search form with two dropdowns (category, location) is shown
  And a red "Search" button is visible

Scenario: Hero search form has category options
  Given the hero search form is visible
  When the user clicks the category dropdown
  Then options for service categories are displayed
```

### Categories Section
```gherkin
Scenario: Categories section shows popular categories
  Given the user scrolls to the categories section
  When the section renders
  Then the heading "Most Popular Categories" is displayed
  And 5 category items are shown in a row: Food & Drink, Restaurant, Hotels, Beauty & Spa, Shopping
  And each category has an icon and label
```

### Most Searched / Listings Section
```gherkin
Scenario: Tabbed listings section renders
  Given the user scrolls to the most-searched section
  When the section loads
  Then the heading "The Most Searched Services" is displayed
  And 6 tab navigation items are shown with food icons
  And the first tab is active by default
  And 3 listing cards are visible in the active tab

Scenario: Listing cards display correctly
  Given a listing card is rendered
  When the user views it
  Then it shows a background image
  And a category tag label in the top-left
  And heart/bookmark icon buttons in the top-right
  And below the image: title, star rating, price range, location/address
  And an "Open Now" or status indicator

Scenario: Clicking a tab switches content
  Given the user is on the most-searched section
  When the user clicks a different tab
  Then the listing cards update to show that category's results
  And the clicked tab becomes active
```

### How It Works Section
```gherkin
Scenario: Work section shows steps
  Given the user scrolls to the how-it-works section
  When the section renders on light gray background
  Then the heading "How Does It Work" is centered
  And 3 step cards are displayed: "Explore Listing", "Make Appointments", "Get Services"
  And each card has an icon, title, and description text
```

### Featured Locations Section
```gherkin
Scenario: Location cards render
  Given the user scrolls to the locations section
  When the section renders
  Then the heading "Top Featured Locations" is displayed
  And 4 location cards are shown in a grid: Washington D.C, Chicago, San Antonio, Los Angeles
  And each card shows a city image with a label overlay
```

### Testimonials Section
```gherkin
Scenario: Testimonials render with user quotes
  Given the user scrolls to the testimonials section
  When the section renders on a background image
  Then the heading "Trusted By Over 5000+ Users" is displayed
  And testimonial cards show user name and quote text
  And a large decorative quote icon is visible
```

### Blog / News Section
```gherkin
Scenario: News posts render
  Given the user scrolls to the news section
  When the section renders
  Then the heading "News Post" is displayed
  And 3 blog post cards are shown with image, date, title, and excerpt
```

### Newsletter Section
```gherkin
Scenario: Newsletter form renders
  Given the user scrolls to the newsletter section
  When the section renders on light gray background
  Then the heading "Subscribe Newsletter" is displayed
  And an email input field is shown
  And a red "Subscribe" button is visible
```

### Footer
```gherkin
Scenario: Footer renders with links and Component Dock
  Given the user scrolls to the footer
  When the footer renders on dark background
  Then the Routebook logo/brand is shown
  And address and social icon links are displayed
  And a "Made with Component Dock" or equivalent link to https://www.componentdock.com/ is present
```

## Verification checklist

- [ ] Header: logo, nav links, Add Listing button, login icon, fixed-on-scroll behavior
- [ ] Hero: background image, heading, search form with dropdowns, search button
- [ ] Categories: 5 items with icons, centered heading
- [ ] Most Searched: 6 tabs with food icons, tab switching, listing cards with image/tag/rating/price
- [ ] How It Works: 3 step cards on gray bg
- [ ] Featured Locations: 4 city cards in grid
- [ ] Testimonials: background image, user quotes, decorative quote icon
- [ ] News: 3 blog post cards
- [ ] Newsletter: email input, subscribe button
- [ ] Footer: dark bg, logo, address, social links, Component Dock link
- [ ] Font: Cairo (Google Fonts)
- [ ] Brand color: #f03250 (red) on buttons and accents
- [ ] No ColorLib references in app code
- [ ] Tests: 100% coverage
- [ ] Build passes
