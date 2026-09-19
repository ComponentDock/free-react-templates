# Template: Modiste (E-commerce / Fashion)

## Purpose

Recreation of the ColorLib "Fashiop" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page template.

- **Source:** ColorLib Fashiop — https://colorlib.com/wp/template/fashiop/
- **Preview:** https://preview.colorlib.com/theme/fashiop/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fashiop-free-template.jpg
- **New name:** modiste (French for a woman who makes or sells women's clothing/fashion)
- **Deploy target:** https://modiste.free.componentdock.com

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand / accent | `#1641ff` | Buttons, links, active states, hot-deal hover, social icon accent |
| Text dark | `#222222` | Headings, nav links, body text on light bg |
| Text muted | `#777777` | Body copy, footer paragraph text |
| White | `#ffffff` | Card backgrounds, footer, page background |
| Light lavender bg | `#f9f9ff` | Subscription area bg, button bg (`.white_bg_btn`) |
| Hot deals black | `#000000` | Hot deal card background (image overlay) |
| Font family | `"Roboto", sans-serif` | Body + headings (weight 500) |
| Base font size | `14px` | Body |
| Line height | `24px` | Body |
| Button radius | `5px` | Primary CTA (`.white_bg_btn`) |
| Newsletter input radius | `25px` | Pill-shaped subscription input |
| Newsletter button | `#1641ff` bg, `#fffdff` text, `0px 30px` padding | `.newsl-btn` (positioned inside input) |

### Font import

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

## Section structure (order from preview DOM)

1. **TopBar** — thin gray bar: phone number left, login/register · my account · contact us right
2. **Navbar** — logo left, centered nav links (Home, Shop, Blog, Pages, Contact), right-side icons (search, user, heart, cart) with vertical `hr` dividers
3. **Hero** — full-width parallax background image, dark overlay (`rgba(0,0,0,0.33)`), centered heading "Fashion for Upcoming Winter", description paragraph, white CTA button "View Collection" (`border-radius: 5px`)
4. **HotDeals** — two equal-width image cards side-by-side in `container-fluid`, black bg with semi-transparent image, white text overlay "Hot Deals of this Month" / "shop now", hover turns bg to `#1641ff` and fades image
5. **ClientLogos** — horizontal scrolling carousel (OwlCarousel in original) of client brand logos, light gray bg
6. **FeaturedProducts** — section title "Featured Products" + subtitle, 5-column product card grid (image with hover overlay showing heart + cart icons, product name link, price), pagination below
7. **Newsletter** — subscription area with `#f9f9ff` bg, centered title "Subscribe for Our Newsletter", subtitle "We won't send any kind of spam", email input with pill border-radius, "Get Started" button (blue, positioned inside input)
8. **Footer** — 4-column layout: About Us text, Newsletter form with arrow button, Instagram feed (8 thumbnail images), Follow Us social icons (facebook, twitter, dribbble, behance); bottom bar with copyright + "Made with ❤ by Colorlib" → replace with "Component Dock"

## Gherkin requirements

### TopBar

```gherkin
Feature: TopBar
  Scenario: TopBar displays phone number and utility links
    Given the user loads the page
    Then a thin bar shows "Call Us: 012 44 5698 7456 896" on the left
    And "Login/Register", "My Account", "Contact Us" links appear on the right

  Scenario: TopBar is visually subtle
    Given the user views the top bar
    Then the background is light gray
    And the text is small and muted (#777777)
```

### Navbar

```gherkin
Feature: Navbar
  Scenario: Navbar shows logo, nav links, and icon actions
    Given the user loads the page
    Then a logo appears on the left
    And centered nav links include "Home", "Shop", "Blog", "Pages", "Contact"
    And right-side icons include search, user, heart, and cart

  Scenario: Navbar is sticky or static at top
    Given the user scrolls down
    Then the navbar remains accessible at the top of the viewport

  Scenario: Nav icons have vertical dividers
    Given the user views the right-side icons
    Then each icon is separated by a vertical line divider
```

### Hero

```gherkin
Feature: Hero Banner
  Scenario: Hero shows fashion image with centered content
    Given the user loads the page
    Then a full-width hero banner displays a fashion image
    And a dark overlay covers the image
    And centered text reads "Fashion for Upcoming Winter"
    And a description paragraph appears below the heading
    And a "View Collection" button is shown

  Scenario: Hero button has correct styling
    Given the user views the hero CTA
    Then the button has white/light background (#f9f9ff)
    And the button text is dark (#222222)
    And the button has border-radius 5px
```

### HotDeals

```gherkin
Feature: Hot Deals
  Scenario: Two hot deal cards are displayed side-by-side
    Given the user loads the page
    Then two large image cards appear in a 2-column layout
    And each card shows "Hot Deals of this Month" and "shop now"

  Scenario: Hot deal cards have dark overlay
    Given the user views the hot deal cards
    Then the background is black (#000000)
    And the image has opacity 0.5

  Scenario: Hot deal cards change on hover
    Given the user hovers over a hot deal card
    Then the background transitions to brand blue (#1641ff)
    And the image fades to opacity 0.2
```

### ClientLogos

```gherkin
Feature: Client Logos
  Scenario: Logo carousel shows brand logos
    Given the user loads the page
    Then a horizontal row of client logos is displayed
    And the logos scroll or auto-rotate
```

### FeaturedProducts

```gherkin
Feature: Featured Products
  Scenario: Section title and subtitle are displayed
    Given the user loads the page
    Then "Featured Products" heading appears
    And a subtitle "Who are in extremely love with eco friendly system." is shown

  Scenario: Product grid shows items with hover actions
    Given the user views the product grid
    Then product cards display an image, product name, and price
    And hovering over a product reveals heart and cart icon overlays

  Scenario: Pagination is shown below the grid
    Given the user scrolls past the products
    Then pagination controls (01, 02, 03, ..., 09) with prev/next arrows appear
```

### Newsletter

```gherkin
Feature: Newsletter Subscription
  Scenario: Subscription form is displayed
    Given the user loads the page
    Then a section with light lavender background (#f9f9ff) appears
    And the title reads "Subscribe for Our Newsletter"
    And a subtitle "We won't send any kind of spam" is shown
    And an email input with pill-shaped border-radius is present
    And a "Get Started" button is inside or adjacent to the input

  Scenario: Newsletter button styling
    Given the user views the subscribe button
    Then the button background is #1641ff
    And the button text is white (#fffdff)
    And the button has rounded (pill) shape
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer has four columns
    Given the user loads the page
    Then the footer shows "About Us" text, "Newsletter" form, "Instagram Feed" thumbnails, and "Follow Us" social links

  Scenario: Footer social icons are present
    Given the user views the Follow Us section
    Then icons for Facebook, Twitter, Dribbble, and Behance are shown

  Scenario: Footer bottom bar shows copyright
    Given the user views the footer bottom
    Then a copyright line with a heart icon is displayed
    And it links to Component Dock (not ColorLib)
```

## Verification checklist

- [ ] All 8 sections render in correct order: TopBar → Navbar → Hero → HotDeals → ClientLogos → FeaturedProducts → Newsletter → Footer
- [ ] Brand color #1641ff used for buttons, links, active states, hot-deal hover
- [ ] Font is Roboto (imported via Google Fonts)
- [ ] Hero has parallax background with dark overlay
- [ ] Hot deal cards have black bg + opacity image + hover-to-blue transition
- [ ] Product grid is 5-column with hover icon overlays
- [ ] Newsletter area has #f9f9ff background
- [ ] Newsletter input is pill-shaped (border-radius: 25px)
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] No references to ColorLib in app code
- [ ] `public/CNAME` contains `modiste.free.componentdock.com`
- [ ] `homepage` in package.json is `https://modiste.free.componentdock.com`
