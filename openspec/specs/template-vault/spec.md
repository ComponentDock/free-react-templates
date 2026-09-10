# Template: Vault (Cryptocurrency Landing Page)

## Purpose

Vault is a single-page cryptocurrency/Bitcoin landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bitcoin" free template (source:
https://colorlib.com/wp/template/bitcoin/), built under a DIFFERENT name
(**Vault**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based single-page site for a Bitcoin/cryptocurrency
service. It features a full-width hero banner with a dark overlay over a
photographic background, a currency converter section with a yellow-to-orange
gradient, service feature cards, a dark-background about section with an image
carousel, a features section, a stats/chart area, a call-to-action section,
three pricing cards, a blog grid, and a dark footer with newsletter signup and
social links.

**Preview URL:** https://preview.colorlib.com/theme/bitcoin/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bitcoin-free-template.jpg

**WHAT MAKES VAULT DISTINCT (signature behaviors):**

1. **Dark photographic hero with large price display.** Full-width banner area
   with `background: url(header-bg.jpg) right; background-size: cover` and a
   dark overlay (`rgba(4,9,30,0.85)`). Centered white text with a massive
   h1 (100px desktop, 700 weight) displaying a live price like "Currently
   Purchase Rate $12,356". Subtitle paragraph below. Square-cornered CTA
   button ("Buy Bitcoin") with `border-radius: 3px`.

2. **Currency converter section overlapping the hero.** Overlaps the banner
   by `-105px` margin-top with `z-index: 2`. Uses the signature yellow-to-orange
   gradient background (`linear-gradient(0deg, #f3c400 0%, #f88845 100%)`).
   Contains form inputs with transparent background, white placeholder text,
   and a white "Calculate" button.

3. **Three service feature cards (simple-services-area).** Three centered
   cards: "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", "Send &
   Receive Bitcoin". Each has an icon, heading, and paragraph. Plain white
   background section.

4. **Dark about-us section with carousel.** `background-color: #222`, two-column
   layout: left side has an image carousel (owl-carousel with arrow controls),
   right side has white h1 heading and white body text.

5. **Four-column feature cards (service-area).** Four icon-based feature cards
   with colored icons, headings (h4), and paragraph descriptions. Hover turns
   heading orange (#f78f3d). White background with section-gap padding.

6. **Stats area with chart-like display.** Light background (`#f9f9ff`).
   Title "Ups and Downs of Bitcoin (Realtime)" with descriptive text and a
   gradient-bordered CTA button.

7. **Call-to-action with gradient background.** Uses the same yellow-to-orange
   gradient as the converter. Centered white text: "Huge Transaction in last
   Week" with a white "Buy Bitcoin Now!" button (dark text).

8. **Three pricing cards.** Each card: light header area (`#fbfcff`), body
   (`#f9f9ff`), coin name (Ripple/Ethereum/Bitcoin), description, large price
   ($7999/$9999/$5999) in 60px font, and a dark "Get Started" button.
   Hover: body turns gradient bg, button turns gold `#ca9814`.

9. **Three blog post cards.** Image, heading (h4), excerpt paragraph, and
   author row with avatar + name + date. Hover turns heading orange.

10. **Dark navy footer.** `background-color: #04091e`. Four columns: About Us
    text, Newsletter form (rounded inputs, gradient submit), Top Products
    links, Social icons row. Bottom bar with copyright and social icons
    (dark `#111111` bg, hover orange).

## Design Tokens

Extracted from the live preview CSS (`css/main.css`):

| Token             | Value                                        | Notes                                  |
| ----------------- | -------------------------------------------- | -------------------------------------- |
| font-family       | "Poppins", sans-serif                        | All headings + body                    |
| body font-size    | 14px, weight 300, line-height 1.625em        | Light body text                        |
| heading weight    | 600                                          | All h1-h6                              |
| h1 font-size      | 100px (hero), 36px (default)                 | Hero is oversized                      |
| brand-primary     | #f78f3d (orange)                             | Primary accent, selection highlight    |
| brand-gradient    | linear-gradient(0deg, #f3c400, #f88845)     | Yellow-to-orange, converter + CTA bg   |
| dark-bg           | #04091e (navy)                               | Footer background                      |
| dark-bg-alt       | #222                                         | About section background               |
| light-bg          | #f9f9ff                                      | Stat area, input fields, card bodies   |
| card-header-bg    | #fbfcff                                      | Pricing card top                       |
| overlay-bg        | rgba(4,9,30,0.85)                            | Hero banner overlay                    |
| heading-color     | #222                                         | All headings default                   |
| body-text-color   | #777                                         | Body paragraphs                        |
| heading-white     | #fff                                         | Hero + dark-bg section headings        |
| accent-cyan       | #4cd3e3                                     | Feature accent                         |
| accent-blue       | #38a4ff                                     | Feature accent                         |
| accent-green      | #73fbaf                                     | Feature accent                         |
| accent-pink       | #e66686                                     | Feature accent                         |
| accent-indigo     | #6382e6                                     | Feature accent                         |
| accent-purple     | #a367e7                                     | Feature accent                         |
| accent-yellow     | #f4e700                                     | Feature accent                         |
| accent-red        | #f44a40                                     | Feature accent                         |
| accent-gold       | #ca9814                                     | Pricing hover                          |
| button-primary-bg | #f78f3d                                     | Generic buttons                        |
| button-radius     | 3px (banner), 20px (circle), 25px (primary) | Varies by context                      |
| primary-btn-radius| 25px (pill shape)                            | Main CTA buttons                       |
| footer-btn-radius | 57px                                         | Newsletter submit                      |
| section-gap       | padding: 120px 0                             | Between major sections                 |
| logo-border       | 4px solid #f78f3d left border on logo h1     | Brand accent on navbar                 |
| nav-text          | white, 12px, uppercase, weight 400           | Navbar links                           |
| nav-scrolled-bg   | rgba(34,34,34,0.9)                           | Header on scroll                       |
| social-icon-bg    | #111111, hover #f78f3d                       | Footer social buttons                  |
| footer-link-color | #777777, hover #f78f3d                       | Footer menu links                      |

## Requirements

### Gherkin: Hero Banner

Scenario: Full-width banner with overlay and price display
  Given the page loads
  When the hero banner is visible
  Then it shows a full-width background image with a dark overlay
  And a large white heading displays the current price (e.g. "$12,356")
  And a subtitle paragraph is shown below the heading
  And a "Buy Bitcoin" CTA button is visible with square corners

Scenario: Navbar fixed position with scroll effect
  Given the page loads
  When the user scrolls down
  Then the navbar background changes to semi-transparent dark
  And navigation links (Home, Convert, Feature, Price, Blog) are visible

### Gherkin: Currency Converter

Scenario: Converter section overlapping hero
  Given the hero banner is displayed
  When the converter section renders
  Then it overlaps the banner by negative margin
  And it has a yellow-to-orange gradient background
  And it shows a heading "The Currency Converter"
  And it has form inputs with transparent background and white text

### Gherkin: Services

Scenario: Three service feature cards
  Given the services section is visible
  Then three cards are displayed in a row
  And each card has an icon, heading, and description paragraph
  And cards are centered with equal spacing

### Gherkin: About Us

Scenario: Dark about section with carousel
  Given the about section is visible
  Then it has a dark (#222) background
  And a left column shows an image carousel with arrow navigation
  And a right column shows a white heading and white body text

### Gherkin: Features

Scenario: Four feature cards
  Given the features section is visible
  Then four feature cards are displayed
  And each has a colored icon, heading, and description
  And hovering a card turns its heading orange

### Gherkin: Stats

Scenario: Stats area with chart
  Given the stats section is visible
  Then it has a light (#f9f9ff) background
  And it shows a "Ups and Downs of Bitcoin (Realtime)" heading
  And a CTA button with gradient border is present

### Gherkin: Call to Action

Scenario: Gradient CTA section
  Given the CTA section is visible
  Then it has the yellow-to-orange gradient background
  And it shows "Huge Transaction in last Week" heading
  And a white "Buy Bitcoin Now!" button is displayed

### Gherkin: Pricing

Scenario: Three pricing cards
  Given the pricing section is visible
  Then three cards are shown (Ripple, Ethereum, Bitcoin)
  And each has a light header, coin name, description, price, and button
  And hovering a card changes the button to gold color

Scenario: Pricing card hover effect
  Given the pricing cards are displayed
  When the user hovers over a card
  Then the button background changes to gold (#ca9814)

### Gherkin: Blog

Scenario: Three blog post cards
  Given the blog section is visible
  Then three blog cards are displayed
  And each has an image, heading, excerpt, and author info
  And hovering a card turns the heading orange

### Gherkin: Footer

Scenario: Dark footer with newsletter
  Given the footer is visible
  Then it has a dark navy (#04091e) background
  And it contains four columns: About, Newsletter, Products, Social
  And the newsletter has rounded input fields and a gradient submit button
  And social icons are in dark (#111111) square buttons
  And the footer links to https://www.componentdock.com/

## Verification Checklist

- [ ] Hero banner renders with dark overlay and large price heading
- [ ] Navbar is fixed, transparent initially, dark on scroll
- [ ] Converter section overlaps hero with gradient background
- [ ] Three service cards render with icons and text
- [ ] About section has dark bg, carousel on left, text on right
- [ ] Four feature cards with colored icons render correctly
- [ ] Stats section with light bg and chart area
- [ ] CTA section with gradient bg and white button
- [ ] Three pricing cards with prices and hover effects
- [ ] Three blog cards with images and author info
- [ ] Footer has dark bg, four columns, newsletter form, social icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code (only in spec + TEMPLATES.md)
- [ ] Uses picsum.photos for placeholder images
- [ ] Uses lucide-react for icons
- [ ] All sections match original section order 1:1
- [ ] Design tokens match extracted CSS values
