# Template: Coinwell (Cryptocurrency)

## Purpose

Recreation of the ColorLib **Cryptos** cryptocurrency and mining template as a
React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/cryptos/
- **Preview:** https://preview.colorlib.com/theme/cryptos/
- **New name:** `coinwell` (apps/coinwell, @free-react-templates/coinwell)
- **Deploy target:** https://coinwell.free.componentdock.com
- **Category:** Cryptocurrency / Fintech
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/cryptos-free-template.jpg

## Design Tokens

Extracted from the live preview stylesheet (style.css at preview.colorlib.com/theme/cryptos/).

### Colors

| Token                    | Value                    | Usage                                  |
| ------------------------ | ------------------------ | -------------------------------------- |
| `--color-primary-dark`   | `#0d104d`               | Dark navy (gradient start, overlays)   |
| `--color-primary`        | `#28408b`               | Blue (gradient end, nav, footer)       |
| `--color-accent`         | `#ffaf02`               | Gold/amber (CTAs, highlights, links)   |
| `--color-text`           | `#292929`               | Headings, links, dark text             |
| `--color-text-muted`     | `#8e8e8e`               | Body text, paragraphs                  |
| `--color-bg`             | `#ffffff`               | White sections                         |
| `--color-bg-light`       | `#eef3f6`               | Light blue-gray (buttons, inputs)      |
| `--color-overlay`        | `rgba(10,12,18,0.9)`    | Dark overlay on background images      |

**Gradient:** `linear-gradient(to right, #0d104d, #28408b)`

### Fonts

| Font     | Family                         | Usage                      |
| -------- | ------------------------------ | -------------------------- |
| Headings | `'Montserrat', sans-serif`    | Nav, titles, section heads |
| Body     | `'Open Sans', sans-serif`     | Paragraphs, body text      |

### Button Shape

- **Border-radius:** `0` (square/sharp corners, no rounding)
- **Height:** `54px`, min-width `150px`
- **Default:** bg `#eef3f6`, color `#292929`
- **Hover:** bg `#292929`, color `#ffffff`
- **Variant btn-2 (gold CTA):** bg `#ffaf02`, color `#ffffff`, bottom border `3px solid #292929`
- **Variant btn-3 (dark CTA):** bg `#292929`, color `#ffffff`, bottom border `3px solid #ffaf02`

### Section Backgrounds

- **Top header:** `#292929` (dark bar)
- **Main navbar:** `#ffffff` (white, with styled classy-nav)
- **Hero:** Background image with dark overlay (`rgba(10,12,18,0.9)`)
- **Features:** White (`#ffffff`)
- **About:** White (`#ffffff`)
- **Currency Calculator:** Background image with dark overlay
- **Blog + Prices:** White (`#ffffff`)
- **Newsletter:** Light background area
- **Footer main:** Background image with dark overlay (`rgba(10,12,18,0.9)`)
- **Footer bottom:** Dark (`#292929`-ish)

## Section Structure (DOM order)

1. **Top Header Bar** — Dark `#292929` background bar with "Welcome to Coinwell" text (accent color on "Coinwell") and right-aligned links: Login | Register, FAQ, Earn Money.

2. **Main Navbar** — White background with logo. Navigation: Home, Pages (dropdown), Mega Menu, Currencies, Contact. Newsletter subscribe form in nav area. Hamburger mobile menu.

3. **Hero Area** — Carousel with 2 slides. Each slide: left column with headline "Take a step into the Crypto World" (gold accent on "Crypto World"), descriptive text, "Read More" CTA button (btn-2 gold variant). Right column: hero image/illustration.

4. **Features Area** — Section heading "Let's change the world together". 4 feature cards in a row: Fast & Easy, No Strings Attached, Small Commissions, 10% Secure. Each card: icon, title, description, "Read More" button. Active/hovered card turns gold (#ffaf02).

5. **About Area** — Split layout: left side has about image/illustration, right side has section heading "Let's change the world together", subheading, paragraph text, and "Read More" button.

6. **Currency Calculator Area** — Dark overlay background image. Heading "Cryptocurrency Calculator" (white text). Two calculator rows, each: input + currency dropdown (=) input + currency dropdown. Simplified crypto conversion interface.

7. **Blog & Prices Area** — Two-column layout. Left (7 cols): 3 blog posts, each with thumbnail image, category tag ("Crypto News"), date, title link, excerpt text. Right (5 cols): Crypto price table listing 10 coins (Bitcoin, Ethereum, Bitcoin Cash, Ripple, Litecoin, Cardano, NEM, NEO, Stellar, IOTA) with icon, name, ticker, and price (increase/decrease indicator).

8. **Newsletter** — Centered subscribe section with heading "Subscribe to Newsletter", description, and email input + Subscribe button.

9. **Footer** — Dark overlay background image. 3 columns: Logo + description + social icons (Facebook, Twitter, Dribbble, Behance, Instagram); Recent Posts (3 items with date); Quick Links (grid of 11 links: Home, FAQ, About us, Terms, Services, Careers, Testimonials, Newsletter & Exchange, News, Exchange, Contact).

10. **Bottom Footer** — Copyright line: "Made with ♥ by Component Dock".

## Gherkin Requirements

### Scenario: Navbar displays logo and navigation links
```
GIVEN the page loads
WHEN the user views the top header
THEN "Welcome to Coinwell" is displayed with accent color on "Coinwell"
AND Login | Register, FAQ, Earn Money links are visible
WHEN the user views the main navbar
THEN logo, Home, Pages, Currencies, Contact links are visible
AND a newsletter form is present in the nav area
```

### Scenario: Hero carousel shows slides with CTA
```
GIVEN the hero area is in view
WHEN the carousel renders
THEN the headline "Take a step into the Crypto World" is displayed
AND descriptive text is shown below the headline
AND a gold CTA button "Read More" is visible
AND a hero image/illustration is shown beside the text
```

### Scenario: Feature cards are interactive
```
GIVEN the features area is visible
WHEN the user views the 4 feature cards
THEN each card shows an icon, title, description, and "Read More" button
WHEN the user hovers or focuses a feature card
THEN the card background changes to gold (#ffaf02)
AND text colors invert for contrast
```

### Scenario: About section shows split layout
```
GIVEN the about area is in view
WHEN the user views the section
THEN an illustration is displayed on the left
AND "Let's change the world together" heading is on the right
AND descriptive paragraph and "Read More" button are present
```

### Scenario: Currency calculator accepts input
```
GIVEN the currency calculator section is visible
WHEN the user views the calculator
THEN two converter rows are displayed
AND each row has a numeric input, a currency dropdown, an equals sign, a result input, and another currency dropdown
WHEN the user enters a value in the first input
THEN the form is interactive and accepts the input
```

### Scenario: Blog section displays posts and price table
```
GIVEN the blog area is visible
WHEN the user views the left column
THEN 3 blog posts are displayed with thumbnails, category, date, title, and excerpt
WHEN the user views the right column
THEN a crypto price table shows 10 coins with icon, name, ticker, and price
AND price changes are indicated with increase/decrease styling
```

### Scenario: Newsletter subscribe form works
```
GIVEN the newsletter section is visible
WHEN the user sees the form
THEN "Subscribe to Newsletter" heading is displayed
AND an email input and Subscribe button are present
WHEN the user enters a valid email and clicks Subscribe
THEN the form attempts submission
```

### Scenario: Footer displays content and links
```
GIVEN the footer is in view
WHEN the user scrolls to the bottom
THEN the main footer has 3 widget columns: logo+social, Recent Posts, Quick Links
AND social icons for Facebook, Twitter, Dribbble, Behance, Instagram are visible
AND the bottom footer shows copyright text with Component Dock link
```

## Verification Checklist

- [ ] Section order matches DOM: Top Header → Navbar → Hero → Features → About → Currency Calculator → Blog & Prices → Newsletter → Footer → Bottom Footer
- [ ] Color tokens match: navy (#0d104d), blue (#28408b), gold (#ffaf02), dark (#292929)
- [ ] Fonts: Montserrat for headings, Open Sans for body
- [ ] Buttons: square corners (border-radius 0), 54px height, gold variant with bottom border
- [ ] Hero carousel with two slides
- [ ] Feature cards with gold hover effect
- [ ] Currency calculator with two converter rows
- [ ] Blog section with 3 posts + crypto price table (10 coins)
- [ ] Newsletter subscribe form
- [ ] Footer with 3 columns + bottom copyright
- [ ] No references to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos or similar
- [ ] Responsive design (mobile hamburger menu, stacked columns)
- [ ] Dark theme overall aesthetic with gold accents maintained
