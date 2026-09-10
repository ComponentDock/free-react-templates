# Template: BitClasp (Cryptocurrency / Finance Landing Page)

## Purpose

Recreation of ColorLib **Bitcoin** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/bitcoin/
- **Preview:** https://preview.colorlib.com/theme/bitcoin/
- **New name:** `bitclasp` (apps/bitclasp, @free-react-templates/bitclasp)
- **Deploy target:** https://bitclasp.free.componentdock.com

## Design Tokens

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| brand-accent | #f78f3d | Primary buttons, hover states, logo left-border, inline highlights, newsletter button, footer social hover |
| brand-gradient-start | #f3c400 | Gradient start for primary CTA buttons (gold) |
| brand-gradient-end | #f88845 | Gradient end for primary CTA buttons (orange) |
| deep-bg | #04091e | Banner hero overlay, footer background |
| dark-bg | #222 | About Us section, header on scroll, pricing button |
| dark-navy | #1e2235 | Footer input fields, newsletter input background |
| light-bg | #f9f9ff | Stat section, form inputs, pricing bottom |
| card-bg | #fbfcff | Pricing card top |
| body-text | #777 | Body paragraph text |
| heading-text | #222 | Headings (h1-h6) |
| white | #fff | Banner text, overlay text, button text |

### Typography

- **Font family:** "Poppins", sans-serif
- **Weight range:** 300 (body), 400 (nav), 500 (buttons), 600 (headings), 700 (banner h1)
- **Sizes:** h1=36px, h2=30px, h3=24px, h4=18px, h5=16px, h6=14px
- **Banner h1:** 100px desktop, 45px tablet, 36px mobile (responsive breakpoints)
- **Body:** 14px, font-weight 300, line-height 1.625em

### Buttons

- **Primary CTA:** gradient background (linear-gradient(0deg, #f3c400 0%, #f88845 100%)), white text, border-radius 25px, uppercase, weight 500, padding 0 30px line-height 42px
- **Banner button:** solid #f78f3d, border-radius 3px, padding 0 40px, uppercase, transparent on hover with white border
- **Footer newsletter button:** #f78f3d, border-radius 57px, height 36px
- **Pricing "Get Started":** #222 bg, transforms to #ca9814 on card hover
- **Call to action button:** white bg, transparent on hover with dark border

### Section Backgrounds

- Banner: background image with 85% opacity dark overlay (#04091e at 0.85)
- Convert Area: gradient (linear-gradient(0deg, #f3c400, #f88845)), positioned -105px top margin
- Simple Services: transparent (default white)
- About Us: solid #222
- Features: transparent (white)
- Stats: #f9f9ff
- Call to Action: gradient (same gold-to-orange)
- Pricing: transparent (white)
- Blog: transparent (white)
- Footer: solid #04091e

### Spacing

- Section gap: padding 120px 0
- Container max-width: standard Bootstrap 1140px
- Grid: Bootstrap 12-column (col-lg-4, col-lg-6, col-lg-3, etc.)

### Other

- **Border radius on primary-btn (general):** 25px (pill shape)
- **Border radius on primary-btn (banner):** 3px (sharp square)
- **Border radius on form inputs:** 0 (square)
- **Footer newsletter input:** border-radius 20px
- **Icons:** Linearicons (lnr-*) for feature icons, Font Awesome for social
- **Image carousel:** Owl Carousel in About Us section

## Section Structure (in page order)

### 1. Navbar (fixed header)
- Logo: "BitClasp" with white text + orange left-border (4px solid #f78f3d)
- Nav links: Home, Convert, Features, Pricing, Blog, Pages (dropdown)
- On scroll: background becomes rgba(34,34,34,0.9)

### 2. Banner / Hero (section#home)
- Full-screen height, background image with dark overlay
- Label: "CURRENTLY PURCHASE RATE" (uppercase, white, small caps)
- Headline: large responsive h1 (white, uppercase)
- Subtext paragraph (white)
- CTA button: "Buy Bitcoin" (solid #f78f3d, square corners)

### 3. Currency Converter (section#convert)
- Positioned overlapping the banner (-105px top margin, z-index 2)
- Gradient background (gold-to-orange)
- Title: "The Currency Converter" (white)
- Subtitle: "Who are in extremely love with eco friendly system."
- Form: two columns of form fields + icon column + calculate button
- Button: white bg, dark text, square corners, uppercase

### 4. Simple Services (3-column)
- Three icon+title cards: "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", "Send & Receive Bitcoin"
- Each has an icon above the heading, centered layout

### 5. About Us (dark #222 background)
- 50/50 split: image carousel (left) + text (right)
- Owl Carousel with up/down navigation arrows
- White text on dark background

### 6. Features / Why Choose Us (section#feature)
- Centered heading: "Why choose us during purchase bitcoin"
- 6 feature cards in 3x2 grid
- Each card: icon (Linearicons) + title
- Icons: lnr-user, lnr-license, lnr-phone, lnr-rocket, lnr-diamond, lnr-bubble
- Hover effect: title turns #f78f3d

### 7. Stats / Ups and Downs (section, #f9f9ff bg)
- 50/50: image (left) + text (right)
- Heading: "Ups and Downs"
- Description paragraph
- CTA button: gradient primary, bordered on hover (#f78f3d border)

### 8. Call to Action (gradient bg)
- Centered text: "Huge Transaction in last Week" (white)
- Subtext paragraph (white)
- Button: "Buy Bitcoin Now!" (white bg, transparent on hover)

### 9. Pricing (section#price)
- Centered heading: "Purchase whatever you want"
- 3 pricing cards side by side
- Each card: top (title, e.g. "01 Bitcoin") + bottom (price, "Get Started" button)
- Card top bg: #fbfcff, bottom bg: #f9f9ff
- Hover: bottom gets gradient bg, button turns #ca9814

### 10. Blog (section#blog)
- Centered heading: "Latest Posts from our Blog"
- 3 blog cards: thumbnail image + title + author (avatar + name)
- Hover: title turns #f78f3d

### 11. Footer (bg #04091e)
- 4 columns: About Us, Top Products (link list), Newsletter (input + button)
- Bottom bar: copyright text + social icons (Facebook, Twitter, Dribbble, Behance)
- Social icon bg: #111, hover: #f78f3d
- **Footer must link Component Dock** (https://www.componentdock.com/) — replaces ColorLib attribution

## Gherkin Requirements

### Navbar
```gherkin
Feature: Navigation Bar
  Scenario: Logo displays with brand styling
    Given the page loads
    Then the logo text "BitClasp" is visible
    And the logo has a left orange border

  Scenario: Navigation links are present
    Given the page loads
    Then nav links "Home", "Convert", "Features", "Pricing", "Blog" are visible

  Scenario: Header scrolls with background change
    Given the page loads
    When the user scrolls down past the hero
    Then the header background becomes semi-transparent dark

  Scenario: Mobile menu toggle
    Given the viewport is less than 800px wide
    When the user clicks the hamburger toggle
    Then the mobile navigation drawer slides in from the left
```

### Banner / Hero
```gherkin
Feature: Hero Banner
  Scenario: Hero content is displayed
    Given the page loads
    Then the hero banner fills the viewport height
    And a dark overlay covers the background image
    And the label "Currently Purchase Rate" is visible
    And the main headline is visible in white uppercase text
    And the "Buy Bitcoin" button is visible

  Scenario: Hero button links to convert section
    Given the page loads
    When the user clicks "Buy Bitcoin"
    Then the page scrolls to the converter section
```

### Currency Converter
```gherkin
Feature: Currency Converter
  Scenario: Converter form is visible
    Given the page loads
    Then the converter section overlaps the hero
    And the heading "The Currency Converter" is visible
    And form input fields are visible
    And the "Calculate" button is visible

  Scenario: Converter has gradient background
    Given the page loads
    Then the converter section has a gold-to-orange gradient background
```

### Simple Services
```gherkin
Feature: Simple Services
  Scenario: Three service cards displayed
    Given the page loads
    Then three service cards are visible
    And the cards show "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", "Send & Receive Bitcoin"
    And each card has an icon above its title
```

### About Us
```gherkin
Feature: About Us Section
  Scenario: About section has dark background
    Given the page loads
    Then the about section has a dark (#222) background
    And an image carousel is visible on the left
    And white descriptive text is visible on the right
```

### Features
```gherkin
Feature: Features Section
  Scenario: Six feature items displayed
    Given the page loads
    Then the heading "Why choose us during purchase bitcoin" is visible
    And six feature cards are displayed in a grid
    And each card has an icon and a title

  Scenario: Feature hover effect
    Given the features section is visible
    When the user hovers over a feature card
    Then the feature title turns orange (#f78f3d)
```

### Stats
```gherkin
Feature: Stats Section
  Scenario: Stats section displayed
    Given the page loads
    Then the stats section has a light (#f9f9ff) background
    And an image is visible on the left
    And "Ups and Downs" heading is visible on the right
    And a "View Details" button is visible
```

### Call to Action
```gherkin
Feature: Call to Action Banner
  Scenario: CTA section content
    Given the page loads
    Then the CTA section has a gold-to-orange gradient background
    And "Huge Transaction in last Week" heading is visible in white
    And the "Buy Bitcoin Now!" button is visible with white background
```

### Pricing
```gherkin
Feature: Pricing Section
  Scenario: Three pricing cards displayed
    Given the page loads
    Then three pricing cards are visible
    And each card has a title (e.g. "01 Bitcoin")
    And each card has a "Get Started" button

  Scenario: Pricing card hover effect
    Given the pricing section is visible
    When the user hovers over a pricing card
    Then the button background changes to gold (#ca9814)
```

### Blog
```gherkin
Feature: Blog Section
  Scenario: Three blog posts displayed
    Given the page loads
    Then the heading "Latest Posts from our Blog" is visible
    And three blog cards are visible
    And each card has a thumbnail, title, and author info

  Scenario: Blog post hover effect
    Given the blog section is visible
    When the user hovers over a blog post
    Then the post title turns orange (#f78f3d)
```

### Footer
```gherkin
Feature: Footer
  Scenario: Footer columns displayed
    Given the page loads
    Then the footer has a dark (#04091e) background
    And an "About Us" column is visible
    And a "Top Products" link list is visible
    And a newsletter input with subscribe button is visible

  Scenario: Footer links to Component Dock
    Given the page loads
    Then the footer contains a link to https://www.componentdock.com/

  Scenario: Social icons are visible
    Given the page loads
    Then social media icons (Facebook, Twitter, Dribbble, Behance) are visible
    And social icons have dark background
    And social icons turn orange on hover
```

## Verification Checklist

- [ ] All 11 sections render in correct page order
- [ ] Navbar is fixed-positioned, changes background on scroll
- [ ] Hero is full-screen with dark overlay and responsive h1 (100px→45px→36px)
- [ ] Converter overlaps hero with gradient background
- [ ] 3-column service cards centered
- [ ] About Us has dark bg, carousel left, text right
- [ ] Features shows 6 cards in 3x2 grid with Linearicons
- [ ] Stats section has light bg, image left, text right
- [ ] CTA banner has gradient background, centered white text
- [ ] Pricing shows 3 cards with hover gradient effect
- [ ] Blog shows 3 post cards with thumbnails and author info
- [ ] Footer has 4 columns, newsletter, social icons, Component Dock link
- [ ] All CTA buttons use gold-to-orange gradient (#f3c400→#f88845)
- [ ] Primary font is Poppins throughout
- [ ] Mobile responsive (hamburger menu, stacked columns)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains bitclasp.free.componentdock.com
- [ ] homepage field set to https://bitclasp.free.componentdock.com
