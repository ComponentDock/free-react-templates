# Template: Locatia (Directory / Business Listings)

## Purpose

Recreation of ColorLib "Listingo" — a business directory/listing template with
a search hero, category grid, tabbed explore section with listing cards,
CTA banner, testimonials carousel, and a multi-column footer with newsletter.

- **Source**: [ColorLib Listingo](https://colorlib.com/wp/template/listingo/)
- **Preview**: https://preview.colorlib.com/theme/listingo/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/listingo-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `locatia` (apps/locatia, `@free-react-templates/locatia`)

## Design tokens (extracted from preview CSS)

| Token            | Value                            | Source                         |
| ---------------- | -------------------------------- | ------------------------------ |
| Brand primary    | `#001D38` (dark navy)            | headings, overlay bg           |
| Brand accent     | `#F91842` (coral-red)            | buttons, links, active tab     |
| Brand secondary  | `#FD8E5E` (orange)               | hover states, owl-carousel nav |
| Light navy       | `#0f2137`                        | dark section tint              |
| Blue accent      | `#334A60`                        | secondary accents              |
| Body text        | `#4D4D4D`                        | paragraphs                     |
| Muted text       | `#919191`                        | captions, footer links         |
| Label text       | `#7e7e7e`                        | form labels                    |
| Light bg         | `#f9f9ff` / `#fbf9ff`           | light section backgrounds      |
| White            | `#FFFFFF`                        | card bg, section bg            |
| Dark footer bg   | `#001D38` / `#0f2137`           | footer background              |
| Font headings    | `'Shadows Into Light', cursive`  | h1–h5                          |
| Font body        | `'Raleway', sans-serif`          | body text, buttons, nav        |
| Button radius    | `5px`                            | `.boxed-btn2`                  |
| Button bg        | `#F91842` (coral-red)            | primary CTA buttons            |
| Button text      | `#FFFFFF`                        | button label                   |
| Category card radius | `10px`                       | `.single_catagory`             |
| Overlay opacity  | `0.5` (navy `#001D38`)          | `.overlay::before`             |
| Hero category btn | `rgba(255,255,255,0.2)` bg     | `.quality ul li button`        |
| Hero category hover | `#F91842` bg                  | hover state                    |

## Sections (in order, from preview DOM)

1. **Header** — Sticky top bar, flex row: logo left, main nav center (Home, Listings, Pages dropdown, About, Blog dropdown, Contact), "Sign In" button right. Mobile: hamburger menu.
2. **Hero / Search** — Full-width background image with dark overlay (`#001D38` at 50% opacity). Centered content: "Find Nearby Attraction" heading, search form (3-col: "What are you finding?" input, Location input, Search button in coral `#F91842`). Below form: row of category filter buttons (Hotel, Food, Shopping, Bar & Pubs, Places) with translucent white bg, hover → coral.
3. **Popular Categories** — White/light bg. Section title "Discover / Most Popular Categories". 4×2 grid of category cards: each has an image thumbnail, hover overlay with category name + "05 Listings" count. Categories: Amazing Places, Concerts, Travel Guide, Music Festival, Night Club, Bars & Pubs, Cafe, Restaurants. Cards have 10px border-radius.
4. **Explore Europe** — Light bg. Section title "Explore Europe". Tab bar (nav-tabs): England, Switzerland, Italy, France, Germany. Each tab panel shows a carousel of listing cards: business name, address, phone, email. Cards in white bg with rounded corners.
5. **Sprayed (CTA Banner)** — Full-width background image with navy overlay (`#001D38` at 50%). Centered white text: "Sprayed Your Business with Us" heading (42px, weight 300), description paragraph, "Add Your Business" coral button (`boxed-btn2`).
6. **Testimonials** — White/light bg. Section title "Testimonials / What our Client Says". OwlCarousel of testimonial cards: quote icon, paragraph text, author avatar (42px round), author name, author title. Multiple identical cards (carousel items).
7. **Footer** — Dark navy bg (`#001D38`). 4-column layout: Logo + description paragraph (col 1), "Services" links (col 2: SEO/SEM, Web design, Ecommerce, Digital marketing), "Useful Links" (col 3: About, Blog, Contact), "Subscribe" newsletter form (col 4: email input + subscribe button). Bottom bar: copyright text with Component Dock attribution link.

## Gherkin requirements

### Feature: Header Navigation

```gherkin
Scenario: Header displays logo and navigation
  Given the user loads the page
  Then the header shows the logo
  And the navigation links are visible: "home", "listings", "pages", "about", "blog", "contact"
  And a "Sign In" button is visible on the right

Scenario: Mobile hamburger menu opens overlay
  Given the viewport is narrow (mobile)
  When the user taps the hamburger icon
  Then a mobile menu overlay opens with navigation links
```

### Feature: Hero Search Section

```gherkin
Scenario: Hero displays search form and heading
  Given the user is on the homepage
  Then the hero section shows a heading "Find Nearby Attraction"
  And a search form with two text inputs and a "Search" button is visible
  And the search button has a coral-red background

Scenario: Hero displays category filter buttons
  Given the hero section is visible
  Then category buttons are displayed: "Hotel", "Food", "Shopping", "Bar & Pubs", "Places"
  And each button has a translucent white background
  And hovering a button changes its background to coral-red

Scenario: Search form has two input fields
  Given the search form is visible
  Then the first input has placeholder "What are you finding?"
  And the second input has placeholder "Location"
```

### Feature: Popular Categories

```gherkin
Scenario: Categories section displays 8 items
  Given the user scrolls to the popular categories section
  Then a section title "Most Popular Categories" is displayed
  And 8 category cards are shown in a 4-column grid
  And each card has an image, a category name, and a listing count

Scenario: Category cards have hover overlay
  Given the user hovers over a category card
  Then an overlay appears with the category name and listing count
```

### Feature: Explore Europe

```gherkin
Scenario: Explore section displays tabbed listings
  Given the user scrolls to the explore section
  Then a section title "Explore Europe" is displayed
  And tab buttons are visible: "England", "Switzerland", "Italy", "France", "Germany"
  And the first tab (England) is active by default

Scenario: Switching tabs shows different listings
  Given the explore section is visible
  When the user clicks the "France" tab
  Then the France listings panel becomes active
  And listing cards with business name, address, phone, and email are shown
```

### Feature: CTA Banner

```gherkin
Scenario: CTA banner displays with background image
  Given the user scrolls to the CTA banner section
  Then a background image with dark overlay is visible
  And the heading reads "Sprayed Your Business with Us"
  And an "Add Your Business" button is centered below
  And the button has coral-red background with white text
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials carousel displays review cards
  Given the user scrolls to the testimonials section
  Then a section title "What our Client Says" is displayed
  And a carousel of testimonial cards is shown
  And each card has a quote icon, paragraph text, author avatar, name, and title

Scenario: Testimonials carousel is navigable
  Given the testimonials carousel is visible
  When the user clicks the next arrow
  Then the next testimonial card slides in
```

### Feature: Footer

```gherkin
Scenario: Footer displays four columns
  Given the user scrolls to the footer
  Then a dark navy background footer is displayed
  And the first column shows the logo and description text
  And the second column shows "Services" links
  And the third column shows "Useful Links"
  And the fourth column shows a "Subscribe" newsletter form

Scenario: Footer has Component Dock attribution
  Given the footer is visible
  Then a "Component Dock" attribution link is present
  And a copyright line is shown
```

## Verification checklist

- [ ] All 7 sections rendered in correct order
- [ ] Header: logo, nav links, Sign In button, mobile hamburger
- [ ] Hero: heading, search form (2 inputs + Search button), category filter buttons
- [ ] Popular Categories: 8 cards in 4-col grid with hover overlay
- [ ] Explore Europe: tab bar with 5 countries, listing cards per tab
- [ ] CTA Banner: background image + overlay, heading, coral button
- [ ] Testimonials: carousel with quote, avatar, name, title
- [ ] Footer: 4-column layout, newsletter form, Component Dock link
- [ ] Brand color `#001D38` used for dark sections/headings
- [ ] Accent color `#F91842` used for buttons and active states
- [ ] Font: Shadows Into Light for headings, Raleway for body
- [ ] Button style: 5px border-radius, coral bg, white text
- [ ] Category cards: 10px border-radius, image + hover overlay
- [ ] Hero overlay: navy at 50% opacity
- [ ] Mobile responsive (hamburger menu, stacked layouts)
- [ ] No ColorLib references in app code
