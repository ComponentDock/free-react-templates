# Template: Vessel (Logistics / Freight)

## Purpose

Recreation of ColorLib "Carries" — a professional logistics and freight company
website template with hero slider, service cards, about/stats section, service
catalog with hexagon icons, promo features, testimonials, and dark newsletter
footer.

- **Source:** ColorLib Carries — https://colorlib.com/wp/template/carries/
- **Preview:** https://preview.colorlib.com/theme/carries/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `vessel` (packages/ui + apps/vessel)

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/carries/style.css`:

| Token           | Value                               | Notes                                      |
| --------------- | ----------------------------------- | ------------------------------------------ |
| Font family     | `Roboto` (Google Fonts)             | 300, 400, 700 weights                      |
| Primary color   | `#0083FF`                           | Bright blue — blue-bg class                |
| Accent color    | `#F39C12`                           | Warm orange — buttons, icons, blog-meta    |
| Dark bg         | `#5D6B82`                           | Muted blue-gray — dark-bg, service icons   |
| Headings        | `#1A1A1A`                           | Near-black                                 |
| Body text       | `#687284`                           | Gray-blue                                  |
| Light bg        | `#F7F9FC` / `#EFF1FF`               | Gray-bg, deep-gray-bg sections             |
| Quote bg        | `#EEF1F5`                           | Quote-form-area background                 |
| Nav bg          | `#212121`                           | Dark charcoal — mainmenu-area              |
| White           | `#FFF`                              | Page background, card backgrounds          |
| Button radius   | `3px` (read-more), `5px` (primary)  | Slightly rounded                           |
| Button style    | `#F39C12` bg with white text        | Orange accent buttons; blue for nav/header |
| Hexagon icon bg | `#F5F7F9`                           | Hex-shaped service icon containers         |
| Section padding | Generous (class: `section-padding`) | ~80px vertical                             |

## Section Order

1. **Navbar** — dark background (`#212121`), logo left (icon + "Vessel" text),
   nav links center (Home, About, Service, Blog, Contact with dropdowns),
   utility icons right (user, search, cart, language selector). Sticky on scroll.

2. **Hero Slider** — full-width background image slides with dark overlay.
   Centered text: uppercase headline ("WE MAKE STRONGEST SERVICE ABOVE THE WORLD"),
   subtitle lorem ipsum, two outlined CTA buttons ("Our Service", "Get A Quote").
   Multiple slides with parallax (`data-stellar-background-ratio`).

3. **Service Cards** — gray background (`#F7F9FC`), 3 equal columns.
   Each card: image with orange icon overlay badge (ship, plane, truck),
   bold title (Ocean Freight, Air Freight, Street Freight), description,
   "Read More" link. Hover effect with orange accent.

4. **About / Stats** — gray background, two-column layout.
   Left: contact/quote form area (`#EEF1F5` bg) with input + send button.
   Right: text content with heading ("We have 25 years experience"),
   paragraph, 3 stat counters in orange boxes (120 Project Done, 100 Project Done,
   30 Project Done).

5. **Service Catalog** — white background, split layout.
   Left: title ("Our Service"), subtitle, description text, "Learn More" link.
   Right: catalog area with dark background (`#5D6B82`) overlay showing
   "Why Choose Us?" checklist with blue checkmarks.

6. **Service List** — dark gray parallax background (`#5D6B82`),
   right-aligned service items with hexagon icon containers.
   4 services: Ware House, Road Freight, Sea Freight, Air Freight.
   Each: hex-shaped icon + h4 title + paragraph + "read more" link.

7. **Promo Features** — white background, 2x2 grid of icon + text blocks.
   Our Location, Latest News, 24/7 Support, Fast Delivery.
   Each: orange icon circle + h3 title + short paragraph.

8. **Promo CTA** — parallax background image with dark overlay,
   centered headline ("we provide international freight & logistics service worldwide"),
   "Get a Quote" orange button.

9. **Testimonials** — white background, centered.
   Title ("What Client's Say"), circular client photos carousel,
   left/right navigation arrows, quote text + client name + role.

10. **Footer** — dark background (`#5D6B82`), two-part:
    - Top: newsletter signup (heading + email input + subscribe button),
      divider line.
    - Bottom: 4-column layout — About Us (contact info), Latest Tweets,
      Customer Service (link list), Instagram feed grid.
    - Copyright bar with "Made with ❤ by Colorlib" → replaced with
      "Component Dock" link.

## Gherkin Scenarios

### Navbar

```gherkin
Scenario: Navbar renders with logo and navigation links
  Given the user loads the vessel page
  Then the navbar is visible with "Vessel" logo
  And navigation links "Home", "About", "Service", "Blog", "Contact" are present
  And utility icons (user, search, cart) are visible

Scenario: Navbar dropdown menus expand on hover
  Given the user hovers over "About"
  Then a dropdown with sub-links appears

Scenario: Navbar becomes sticky on scroll
  Given the user scrolls past the hero
  Then the navbar sticks to the top of the viewport
```

### Hero Slider

```gherkin
Scenario: Hero slider displays headline and CTAs
  Given the user loads the page
  Then the hero section shows an uppercase headline
  And a subtitle paragraph is visible
  And two CTA buttons are present ("Our Service", "Get A Quote")

Scenario: Hero background is a full-width image
  Given the hero is rendered
  Then the background covers the full viewport width
```

### Service Cards

```gherkin
Scenario: Three service cards render on desktop
  Given the user views the service cards section on desktop
  Then 3 cards are displayed in a row
  And each card has an image, icon badge, title, and description

Scenario: Service cards are accessible
  Given the service cards section loads
  Then each card image has alt text
  And each card title is a heading element
```

### About / Stats

```gherkin
Scenario: Stats counters display numeric values
  Given the about section loads
  Then 3 stat blocks are visible with numbers and labels
  And the stat blocks show "Project Done" labels

Scenario: Quote form is present
  Given the about section loads
  Then a contact/quote form with input and send button is visible
```

### Service Catalog

```gherkin
Scenario: Service catalog shows checklist
  Given the user views the service catalog
  Then a "Why Choose Us?" heading is visible
  And a checklist of 4 items is displayed
  And a "Learn More" link is present
```

### Service List (Hexagon Icons)

```gherkin
Scenario: Four service items render with hexagon icons
  Given the service list section loads
  Then 4 service items are displayed
  And each has a hex-shaped icon container
  And each has a title, description, and "read more" link
```

### Promo Features

```gherkin
Scenario: Four promo blocks render in a grid
  Given the promo section loads
  Then 4 feature blocks are displayed
  And each has an orange icon, title, and short description
```

### Promo CTA

```gherkin
Scenario: Promo CTA displays over parallax background
  Given the promo CTA section loads
  Then a headline about international freight is visible
  And a "Get a Quote" button is present
```

### Testimonials

```gherkin
Scenario: Testimonials carousel renders
  Given the testimonials section loads
  Then a heading "What Client's Say" is visible
  And client photos are displayed in a carousel
  And quote text with client name and role is shown
  And prev/next navigation arrows are present
```

### Footer

```gherkin
Scenario: Footer renders newsletter and columns
  Given the footer loads
  Then a newsletter signup with email input and subscribe button is visible
  And 4 footer columns are displayed (About, Tweets, Links, Images)
  And the copyright line links to Component Dock

Scenario: Footer background is dark
  Given the footer is rendered
  Then the background color is dark gray-blue
```

## Verification Checklist

- [ ] Navbar: logo, links, utility icons, sticky behavior, mobile hamburger
- [ ] Hero: background image slides, headline, subtitle, 2 CTA buttons
- [ ] Service Cards: 3 cards with images, icon badges, titles, descriptions
- [ ] About: form area + 3 stat counters with numbers
- [ ] Service Catalog: heading, description, checklist, "Learn More"
- [ ] Service List: 4 hexagon-icon services (Ware House, Road, Sea, Air)
- [ ] Promo Features: 4 icon + text blocks in grid
- [ ] Promo CTA: parallax bg, headline, quote button
- [ ] Testimonials: photo carousel, quotes, prev/next arrows
- [ ] Footer: newsletter form, 4 columns, copyright with Component Dock link
- [ ] Design tokens: Roboto font, #0083FF primary, #F39C12 accent, #5D6B82 dark
- [ ] Responsive: mobile hamburger nav, stacked columns on small screens
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
