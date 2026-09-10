# Template: CoinWave (Cryptocurrency Landing Page)

## Purpose

Recreation of ColorLib "Bitcoin" — a cryptocurrency / bitcoin landing page template.

- **Source slug:** `bitcoin`
- **ColorLib page:** https://colorlib.com/wp/template/bitcoin/
- **Preview URL:** https://preview.colorlib.com/theme/bitcoin/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bitcoin-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/coinwave`
- **Deploy:** `coinwave.free.componentdock.com`

## Design Tokens

Extracted from the live preview's `css/main.css` and visual analysis.

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--brand-orange` | `#f78f3d` | Primary accent, links hover, selection color, service hover |
| `--brand-gradient-start` | `#f3c400` | Primary button gradient start, convert area bg |
| `--brand-gradient-end` | `#f88845` | Primary button gradient end |
| `--bg-dark-nav` | `#04091e` | Footer background |
| `--bg-dark` | `#222222` | About section bg, heading text |
| `--bg-dark-overlay` | `rgba(4,9,30,0.85)` | Banner overlay |
| `--bg-light` | `#f9f9ff` | Stat area bg, form inputs, default buttons |
| `--bg-input` | `#1e2235` | Footer newsletter input bg |
| `--bg-social` | `#111111` | Social icon bg |
| `--text-dark` | `#222222` | Headings, body text |
| `--text-muted` | `#777777` | Body text, footer links |
| `--text-white` | `#ffffff` | Hero text, banner text, nav |
| `--border-light` | `#eeeeee` | Pricing card borders |
| `--border-gold` | `#f9c065` | Convert area input borders |

### Typography

- **Font family:** "Poppins", sans-serif (loaded via Google Fonts / Cloudflare)
- **Weights used:** 300 (light — body, price numbers), 400 (regular — nav), 500 (medium — buttons), 600 (semibold — headings), 700 (bold — hero price, logo)
- Hero price: 100px bold white
- Section headings: 30-36px semibold
- Body text: 14px light weight

### Buttons & Interactive

- **Primary button:** border-radius 25px, padding 0 30-60px, line-height 42px, gradient `linear-gradient(0deg, #f3c400, #f88845)`, white text, uppercase
- **Banner CTA ("Buy Bitcoin"):** border-radius 3px (square), solid orange `#f78f3d`, white text, hover → transparent bg + white border
- **Convert area button:** white bg, dark text, hover → transparent + white border
- **Pricing button:** dark `#222` bg, hover → gold `#ca9814`
- **Footer newsletter button:** orange `#f78f3d`, border-radius 57px (pill)
- **Social icons:** square `#111111` bg, hover → orange `#f78f3d`

### Section Backgrounds

| Section | Background |
|---------|-----------|
| Header | Transparent (becomes `rgba(34,34,34,0.9)` on scroll) |
| Banner/Hero | Background image with dark navy overlay `rgba(4,9,30,0.85)` |
| Convert Area | Orange gradient `#f3c400 → #f88845`, overlaps banner by -105px |
| Simple Services | White (default) |
| About Us | Dark `#222222` |
| Service Features | White (default) |
| Stats | Light lavender `#f9f9ff` |
| Call to Action | Orange gradient (same as primary button) |
| Pricing | White (default) |
| Blog | White (default) |
| Footer | Very dark navy `#04091e` |

### Layout Notes

- Convert area overlaps banner by negative margin (-105px) with z-index:2
- About Us uses full-width container-fluid, split 50/50 (carousel left, text right)
- Stats section: 50/50 split (chart image left, text + CTA right)
- Pricing: 3 equal columns with bordered cards
- Blog: 3 columns with image thumbnails, titles, descriptions, author info
- Footer: 4-column (3+3+6) layout with About Us, Top Products, Newsletter
- Sticky header with scroll-triggered background change

## Gherkin Requirements

### Feature: Header / Navigation

```gherkin
Scenario: Fixed header with navigation
  Given the user visits the CoinWave homepage
  Then a logo is visible in the header
  And navigation links "Home", "Convert", "Feature", "Price", "Blog", "Pages" are present
  And the header is fixed at the top of the viewport

Scenario: Header scroll effect
  Given the user is at the top of the page
  When they scroll down
  Then the header background becomes semi-transparent dark

Scenario: Mobile navigation
  Given the user is on a mobile viewport
  Then the nav menu is hidden
  And a hamburger toggle button is visible
  When they tap the toggle
  Then a slide-in mobile navigation panel appears from the left
```

### Feature: Hero / Banner Section

```gherkin
Scenario: Hero content displays
  Given the user visits the homepage
  Then a label "Currently Purchase Rate" is visible
  And a large price "$12,356" is displayed prominently
  And descriptive paragraph text is shown
  And a "Buy Bitcoin" call-to-action button is visible

Scenario: Hero CTA hover
  Given the "Buy Bitcoin" button is visible
  When the user hovers over it
  Then the button becomes transparent with a white border
```

### Feature: Currency Converter Section

```gherkin
Scenario: Converter form displays
  Given the user scrolls to the converter section
  Then a heading "The Currency Converter" is visible
  And descriptive text "Who are in extremely love with eco friendly system." is shown
  And a bitcoin icon image is displayed
  And input fields for currency values are visible
  And a "Calculate Your BMI" (converted to relevant label) button is present

Scenario: Converter overlaps banner
  Given the converter section renders
  Then it visually overlaps the bottom of the banner section
```

### Feature: Simple Services Section

```gherkin
Scenario: Services cards display
  Given the user scrolls to the simple services section
  Then 3 service cards are visible in a row
  And each card has an icon image, a title link, and a description paragraph

Scenario: Service card content
  Given the services section is visible
  Then the titles are "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", and "Send & Receive Bitcoin"
```

### Feature: About Us Section

```gherkin
Scenario: About section layout
  Given the user scrolls to the about section
  Then the section has a dark background (#222)
  And an image carousel is on the left half
  And a bitcoin icon, heading "Exchange Bitcoin is not that tough Anymore", and description text are on the right half

Scenario: About carousel navigation
  Given the about carousel is visible
  Then previous/next arrow controls are present
```

### Feature: Service Features Section

```gherkin
Scenario: Feature grid displays
  Given the user scrolls to the features section
  Then a heading "Why choose us during purchase bitcoin" is visible
  And 6 feature items are displayed in a 3-column grid
  And each feature has a linear icon, a title, and a description

Scenario: Feature content
  Given the features section is visible
  Then the feature titles are "Expert Technicians", "Professional Service", "Great Support", "Technical Skills", "Highly Recomended", and "Positive Reviews"

Scenario: Feature hover effect
  Given a feature item is visible
  When the user hovers over it
  Then the title color changes to orange (#f78f3d)
```

### Feature: Stats Section

```gherkin
Scenario: Stats layout
  Given the user scrolls to the stats section
  Then the section has a light background (#f9f9ff)
  And a chart image is on the left half
  And heading "Ups and Downs of Bitcoin (Realtime)" is on the right
  And descriptive text and a "View Details" button are shown

Scenario: Stats CTA hover
  Given the "View Details" button is visible
  When the user hovers over it
  Then it shows an orange border and orange text
```

### Feature: Call to Action Section

```gherkin
Scenario: CTA banner displays
  Given the user scrolls to the call-to-action section
  Then a heading "Huge Transaction in last Week" is visible in white
  And descriptive paragraph text is shown in white
  And a "Buy Bitcoin Now!" button is present
  And the section has the orange gradient background
```

### Feature: Pricing Section

```gherkin
Scenario: Pricing cards display
  Given the user scrolls to the pricing section
  Then a heading "Purchase whatever you want" is visible
  And 3 pricing cards are shown in a row

Scenario: Pricing card content
  Given the pricing section is visible
  Then the cards are titled "01 Ripple" ($7999), "01 Ethereum" ($9999), and "01 Bitcoin" ($5999)
  And each card has a description and a "Get Started" button

Scenario: Pricing card hover
  Given a pricing card is visible
  When the user hovers over it
  Then the "Get Started" button background changes to gold (#ca9814)
```

### Feature: Blog Section

```gherkin
Scenario: Blog cards display
  Given the user scrolls to the blog section
  Then a heading "Latest Posts from our Blog" is visible
  And 3 blog cards are shown in a row
  And each card has a thumbnail image, a title, a description, and an author row (avatar + name + date)

Scenario: Blog card content
  Given the blog section is visible
  Then all 3 cards are titled "Portable Fashion for women"
  And author names are "Belle Beck", "Harriet Barrett", and "Fannie Simmons"
```

### Feature: Footer

```gherkin
Scenario: Footer layout
  Given the user scrolls to the footer
  Then the footer has a very dark background (#04091e)
  And an "About Us" column with description text is visible
  And a "Top Products" column with a link list is visible
  And a "Newsletter" column with email input and subscribe button is visible

Scenario: Footer social icons
  Given the footer is visible
  Then social media icons (Facebook, Twitter, Dribbble, Behance) are present in the footer bottom
  And a copyright line is displayed
  And a link to "https://www.componentdock.com/" branded as "Component Dock" is present

Scenario: Newsletter form in footer
  Given the footer newsletter is visible
  Then an email input with placeholder "Email address" is shown
  And an arrow submit button is present
```

## Verification Checklist

- [ ] Fixed header renders with logo + nav links + mobile hamburger
- [ ] Header becomes semi-transparent on scroll
- [ ] Hero shows "Currently Purchase Rate" + "$12,356" + "Buy Bitcoin" CTA
- [ ] Converter section overlaps banner with orange gradient bg + form inputs
- [ ] Simple services shows 3 cards (icons + titles + descriptions)
- [ ] About Us shows dark bg, image carousel, heading, description
- [ ] Service features shows 6 items in 3-column grid with icons
- [ ] Stats section shows chart image + heading + description + CTA on light bg
- [ ] CTA section shows heading + text + button on orange gradient
- [ ] Pricing shows 3 cards with names, prices, descriptions, CTAs
- [ ] Blog shows 3 cards with thumbnails, titles, descriptions, author info
- [ ] Footer shows 3 columns (About, Products, Newsletter) + social icons + copyright + Component Dock link
- [ ] All design tokens match: Poppins font, orange (#f78f3d) brand, gradient buttons, dark sections
- [ ] Section order matches original
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Responsive layout works on mobile
