# Template: Locanda (Directory / Local Listings)

## Purpose

Recreation of ColorLib **Listingo** — a directory / local listings template for
finding nearby attractions, hotels, food, shopping, and entertainment.

| Field | Value |
| --- | --- |
| Source | ColorLib "Listingo" |
| Source URL | https://colorlib.com/wp/template/listingo/ |
| Preview URL | https://preview.colorlib.com/theme/listingo/ |
| Stack | React 19 · Vite · Tailwind CSS 4 · TypeScript |
| Design category | Directory / Local Listings |

## Design tokens

Extracted from `css/style.css` on the live preview.

| Token | Value | Notes |
| --- | --- | --- |
| Primary font | `"Raleway", sans-serif` | Loaded via Google Fonts |
| Heading font | `"Raleway", sans-serif` | Same as body |
| Accent font | `"Shadows Into Light", cursive` | Used sparingly for emphasis |
| Brand navy | `#001D38` | Slider overlay gradient, dark sections |
| Brand orange | `#FF5748` / `#f44a40` | Primary CTA buttons, accents |
| Brand cyan | `#00ACED` | Secondary accent (links, highlights) |
| Light bg | `#f9f9ff` / `#fbf9ff` | Off-white section backgrounds |
| Medium bg | `#eeeeee` | Dividers, subtle backgrounds |
| Dark text | `#1F1F1F` | Body text |
| White | `#fff` | Card backgrounds, light-on-dark text |
| Button radius | ~4px (default Bootstrap) | Rounded but not pill |
| Button bg | `#f44a40` (primary) | `.book_btn`, `.boxed-btn` |
| Button hover | `#001D38` | Dark navy on hover |
| Slider overlay | `linear-gradient(to bottom, #001d38 0%, rgba(0,29,56,0.6) 100%)` | Dark navy gradient on hero |
| Section padding | 100–184px vertical | Generous whitespace |

## Section structure (from live preview DOM)

1. **Header** — Sticky nav bar with logo left, nav links center (Home, Listings, Pages, Elements, Single listing, About, Blog, Contact), Sign In button right. Below nav: sub-links for Blog, Single-blog, Contact.
2. **Hero / Slider** — Full-width background image with dark navy gradient overlay. Centered heading "Find Nearby Attraction", search form with three inputs (keyword, location, category) and Search button. Category tab pills below: Hotel, Food, Shopping, Bar & Pubs, Places, Discover.
3. **Popular Categories** — Section title "Popular Categories" centered. Grid of category cards (3–4 columns) with icon image, title (e.g. "Amazing Places", "Concerts", "Travel guide", "Music Festival", "Night Club", "Bars & Pubs", "Cafe", "Restaurants").
4. **Explore / Quality** — Heading "Explore Europe" with descriptive text. Likely a featured listings or content area.
5. **Sprayed CTA** — Full-width section with background image, dark overlay. Heading "Sprayed Your Business with Us", subtext "Esteem spirit temper too say adieus who direct esteem...", CTA button "Add Your Business".
6. **Testimonials** — Section title "Testimonials", subtext "Donec imperdiet congue orci consequat mattis". Carousel/slider of testimonial cards with quote, person name ("Robert Thomson"), role ("Business Owner").
7. **Newsletter** — Newsletter subscription area with heading, descriptive text, and email input + subscribe button.
8. **Footer** — Multi-column footer: about text (with logo), service links (SEO/SEM, Web design, Ecommerce, Digital marketing), About/Blog/Contact/Support links, newsletter signup. Copyright line at bottom.

## Gherkin requirements

### Header

```gherkin
Feature: Header navigation
  Scenario: Sticky header with logo and nav links
    Given a visitor lands on the page
    Then the header displays the site logo on the left
    And the nav links "Home", "Listings", "Pages", "About", "Blog", "Contact" are visible
    And a "Sign In" button is visible in the header

  Scenario: Header stays sticky on scroll
    Given the visitor scrolls down
    Then the header remains fixed at the top of the viewport
```

### Hero / Search

```gherkin
Feature: Hero search section
  Scenario: Hero displays search form
    Given the visitor views the hero section
    Then a heading "Find Nearby Attraction" is visible
    And a search form with keyword, location, and category inputs is displayed
    And a "Search" button is visible

  Scenario: Category tabs are shown
    Given the visitor views the hero section
    Then category pills are displayed: "Hotel", "Food", "Shopping", "Bar & Pubs", "Places", "Discover"
```

### Popular Categories

```gherkin
Feature: Popular Categories section
  Scenario: Categories displayed in grid
    Given the visitor scrolls to the categories section
    Then a heading "Popular Categories" is visible
    And category cards are displayed in a grid layout
    And each card shows an icon, a title, and is clickable

  Scenario: Category cards include expected items
    Given the visitor views the categories section
    Then cards for "Amazing Places", "Concerts", "Travel guide", "Music Festival", "Night Club", "Bars & Pubs", "Cafe", "Restaurants" exist
```

### Sprayed CTA

```gherkin
Feature: Business CTA section
  Scenario: CTA displays with background and button
    Given the visitor scrolls to the CTA section
    Then a heading "Sprayed Your Business with Us" is visible
    And descriptive text is shown below the heading
    And an "Add Your Business" button is visible
```

### Testimonials

```gherkin
Feature: Testimonials section
  Scenario: Testimonials display
    Given the visitor scrolls to the testimonials section
    Then a heading "Testimonials" is visible
    And testimonial cards show a quote, person name, and role
    And the testimonials can be navigated via carousel controls

  Scenario: Testimonial content
    Given the visitor views a testimonial card
    Then it shows a quote, the name "Robert Thomson", and the role "Business Owner"
```

### Newsletter

```gherkin
Feature: Newsletter section
  Scenario: Newsletter subscription form
    Given the visitor scrolls to the newsletter section
    Then an email input field is displayed
    And a subscribe button is visible
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer columns
    Given the visitor scrolls to the footer
    Then the footer displays columns with service links (SEO/SEM, Web design, Ecommerce, Digital marketing)
    And navigation links (About, Blog, Contact, Support) are shown
    And a newsletter subscription form is present
    And a copyright line with "Component Dock" link is shown

  Scenario: Footer brand link
    Given the visitor views the footer
    Then a link to "https://www.componentdock.com/" is present
```

## Verification checklist

- [ ] Section order matches preview: Header → Hero → Categories → Explore → CTA → Testimonials → Newsletter → Footer
- [ ] Brand colors: navy `#001D38`, orange `#f44a40`, cyan `#00ACED`
- [ ] Font: Raleway from Google Fonts
- [ ] Hero has dark navy gradient overlay on background image
- [ ] Search form has three inputs + Search button
- [ ] Category pills are horizontally scrollable / wrapped
- [ ] Category cards in responsive grid (3–4 columns desktop, 1–2 mobile)
- [ ] CTA section has background image with overlay
- [ ] Testimonial carousel with navigation
- [ ] Newsletter section with email input + subscribe
- [ ] Footer has multi-column layout with Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] 100% test coverage on all components
