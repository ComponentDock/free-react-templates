# Template: Roofmark (Real Estate)

## Purpose

Recreation of ColorLib **Myhome** — a real estate agency website template.
- Source slug: `myhome`
- ColorLib page: https://colorlib.com/wp/template/myhome/
- Preview URL: https://preview.colorlib.com/theme/myhome/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Section order (top → bottom)

1. **Header** — Top bar (phone, address, email + social icons + Login/Register) + main nav bar (logo + nav links + Submit Listing CTA)
2. **Hero Slider** — Full-width background-image carousel (3 slides) with address headline + price tag overlay, right-arrow navigation
3. **Search Bar** — "Find your home" form: Property type, No rooms, Location inputs + Submit button; overlay on parallax/purple background
4. **Featured Properties** — Section title ("the best deals" / "Featured Properties"), 3-column card grid; each card: image + tags (house/sale/rent) + price + location + sq ft + bed/bath/garage stats
5. **Hot Deal** — 2-column: left = hero image with tags, right = price, title, location, agent photo + name, property stats
6. **Testimonials** — 2-column: left = image with overlay, right = section title ("the best deals" / "Clients testimonials") + carousel of quote slides (quote + text + author)
7. **Footer** — Dark background, 4 columns: About (logo + text + social + submit listing), Information links, Useful links, Properties Types + Featured Property mini-card
8. **Footer Bar** — Copyright + footer nav links

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Font family | `Montserrat` (Google Fonts) | Weights 300–900 |
| Brand green | `#adc867` | Primary CTA, tags (house), header logo span, selection, buttons |
| Purple accent | `#55407d` | Header bar, sale tags, search bar overlay |
| Dark purple/navy | `#1e1332` | Footer background |
| Deep purple bg | `#110a1f` | Darkest background |
| Body text | `#2b2e35` | Headings + general text |
| Secondary text | `#a2b0bf` | Paragraph body |
| Muted text | `#6c7079` | Footer column text |
| Light muted | `#bdc4d4` | Secondary muted |
| Link underline | `#ffa07f` | Paragraph link underline, hover bg |
| Form input border | `#db5246` | `.form-control` color |
| Button | `#adc867` bg, white text, no border-radius, sharp corners |
| Search bar bg | `rgba(85,64,125,0.67)` | Semi-transparent purple overlay |
| Tag: house | `#adc867` bg | White text |
| Tag: sale | `#55407d` bg | White text |
| Tag: rent | `#ff006c` bg | White text |
| Footer bg | `#1e1332` | White text |
| Selection | `#adc867` bg | White text |
| Light section bg | `#f3f7fb` / `#f1f6fc` | Alternate section backgrounds |

## Gherkin requirements

### Header

**Scenario: Top bar displays contact info**
  Given the page loads
  Then the top bar shows a phone number, address, and email
  And social icons (Pinterest, Facebook, Twitter, Dribbble, Behance) are visible on the right
  And Login and Register links are present

**Scenario: Main nav bar shows logo and links**
  Given the page loads
  Then the logo reads "myhome" with "home" in the brand green color
  And nav links include Home, About us, Listings, News, Contact
  And a "submit listing" button is on the right
  And the nav bar has a white background with shadow

**Scenario: Mobile hamburger menu**
  Given the viewport width is below 992px
  Then a hamburger icon appears
  And clicking it opens a slide-in menu with nav links

### Hero Slider

**Scenario: Hero displays property slides**
  Given the page loads
  Then a full-width hero image carousel is visible
  And each slide shows an address headline and a price tag
  And a right-arrow navigation button is present

**Scenario: Hero slides are navigable**
  Given the hero slider is visible
  When the user clicks the right arrow
  Then the next slide appears with a smooth transition

### Search Bar

**Scenario: Search form is visible**
  Given the hero section is above the viewport
  Then a "Find your home" search bar appears
  And it contains three text inputs: Property type, No rooms, Location
  And a "submit listing" button is on the right
  And the search bar has a semi-transparent purple background

### Featured Properties

**Scenario: Featured section displays property cards**
  Given the page scrolls to the Featured Properties section
  Then a section title reads "the best deals" (subtitle) and "Featured Properties" (heading)
  And 3 property cards are shown in a row
  And each card has an image, tags (house + sale or rent), price, location, and stats (sq ft, beds, baths, garage)

**Scenario: Property card tags are color-coded**
  Given a property card is visible
  Then the "house" tag has a green (#adc867) background
  And the "for sale" tag has a purple (#55407d) background
  And the "for rent" tag has a pink (#ff006c) background

### Hot Deal

**Scenario: Hot deal section shows a featured listing**
  Given the page scrolls to the Hot Deal section
  Then a large image is on the left with tags
  And the right side shows the price, property title, location, and agent photo + name
  And property stats (sq ft, beds, baths, garage) are listed

### Testimonials

**Scenario: Testimonials section displays client quotes**
  Given the page scrolls to the Testimonials section
  Then an image is on the left with a dark overlay
  And the right side shows "the best deals" subtitle and "Clients testimonials" heading
  And a carousel of testimonial slides is visible
  And each slide shows a quote, body text, and author name + "Client" label

**Scenario: Testimonials carousel is navigable**
  Given the testimonials carousel is visible
  When the user navigates (next/prev)
  Then the next/previous testimonial slide appears

### Footer

**Scenario: Footer has four columns**
  Given the page scrolls to the footer
  Then a dark purple (#1e1332) background is visible
  And column 1 shows the logo, about text, social icons, and submit listing link
  And column 2 shows "Information" links
  And column 3 shows "Useful links"
  And column 4 shows "Properties Types" links and a "Featured Property" mini-card

**Scenario: Footer mini-card shows a property**
  Given the footer is visible
  Then the featured property mini-card shows an image, tags, price, location, and stats

**Scenario: Footer bar shows copyright and nav**
  Given the footer is visible
  Then a bottom bar shows copyright text and footer navigation links

## Verification checklist

- [ ] All 8 sections render in the correct order
- [ ] Font: Montserrat loaded from Google Fonts
- [ ] Brand colors match tokens (#adc867 green, #55407d purple, #1e1332 dark)
- [ ] Hero slider transitions between slides
- [ ] Search form renders 3 inputs + button with correct styling
- [ ] Featured properties show 3 cards with tags, price, location, stats
- [ ] Tags are color-coded (house=green, sale=purple, rent=pink)
- [ ] Hot deal section has 2-column layout with agent info
- [ ] Testimonials carousel cycles through quotes
- [ ] Footer has 4 columns on the dark background
- [ ] Footer links to componentdock.com (not Colorlib)
- [ ] No Colorlib references in app source code
- [ ] Responsive layout works (mobile hamburger, stacked columns)
- [ ] Tests: 100% coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app roofmark` passes
