# Template: Vestly (Crypto / Blockchain Landing Page)

## Purpose

Recreation of ColorLib **Invest** template.
- **Source slug:** `invest`
- **Preview URL:** https://preview.colorlib.com/theme/invest/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/invest-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Category:** Cryptocurrency / blockchain investment landing page

## Design tokens

Extracted from the live preview stylesheet (`styles/main_styles.css`) on 2026-09-13:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--brand` | `#ffa800` | Primary accent (amber/gold) — CTA buttons, active states, slider nav hover, logo accent, top bar coin prices |
| `--dark` | `#11100e` | Top bar background, header mobile bg, secondary dark |
| `--footer-bg` | `#15191f` | Footer section background (dark blue-gray) |
| `--hero-overlay` | `rgba(17,16,14,0.83)` | Semi-transparent dark overlay on hero slider |
| `--heading` | `#212121` | Intro title, news titles |
| `--body-text` | `#a5a5a5` | General body copy, footer text |
| `--body-text-alt` | `#838383` | Secondary body text |
| `--white` | `#FFFFFF` | Hero text, button text, nav links |
| `--slider-dot-inactive` | `#d2d2d2` | Inactive slider pagination dot |
| `--slider-dot-active` | `#bda994` | Active slider pagination dot (muted gold) |

### Typography
| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings (h1) | `'gill', sans-serif` | normal | ~40px (section titles) |
| Hero h1 | `'gill', sans-serif` | normal | Hero slider heading |
| Body | `'Open Sans', sans-serif` | 400 | standard |
| Top bar logo | `'gill', sans-serif` | normal | brand text |
| Nav links | system sans-serif | normal | uppercase |
| Buttons | `'gill', sans-serif` | normal | uppercase, centered |
| Subtitles | system sans-serif | normal | small, uppercase, letter-spaced |

### Buttons
- **Shape:** Rectangular (174px × 59px), no border-radius (sharp corners)
- **Brand button:** background `#ffa800`, white text, uppercase
- **Hover:** white underline animation slides in from left
- **CTA text:** lowercase "read more"

### Section backgrounds
- Hero slider: full-viewport background image with dark overlay (0.83 opacity)
- Header/top bar: `#11100e` (very dark)
- Intro: white (default)
- Services: white (default)
- News: white (default)
- Footer: `#15191f` (dark blue-gray)
- Copyright: `#1a1e24` (slightly lighter than footer)

## Gherkin requirements

### Top Bar & Header
```gherkin
Feature: Top bar

  Scenario: Top bar renders with logo and crypto prices
    Given the page loads
    When the top bar is visible
    Then the background is #11100e (very dark)
    And the logo shows "invest" with "in" in brand gold (#ffa800) and "vest" in white
    And a "Blockchain" subtitle is below the logo
    And crypto prices (BTC, ETH, XRP) are displayed in gold

  Scenario: Top bar has register and login buttons
    Given the page loads
    When the top bar is visible
    Then a "register" button with gold background is shown
    And a "login" link is shown

  Scenario: Main menu renders below top bar
    Given the page loads
    When the main menu is visible
    Then nav links include "Home", "Blockchain", "Financial", "About Us", "Services"
    And a phone number and email are displayed on the right
    And a search icon button is visible
```

### Hero Slider
```gherkin
Feature: Hero slider

  Scenario: Hero slider renders full-viewport with background images
    Given the page loads
    When the hero slider is visible
    Then it occupies the full viewport height
    And background images cover the section with dark overlay (0.83 opacity)
    And the heading "A new World is coming" is centered in white
    And a subtitle paragraph is displayed below the heading
    And a gold "read more" button is centered below the text

  Scenario: Hero slider has navigation arrows and dots
    Given the hero slider is visible
    Then prev/next navigation arrows are shown on left/right edges
    And pagination dots are shown at the bottom
    And the active dot is muted gold (#bda994)
```

### Intro Section
```gherkin
Feature: Intro section

  Scenario: Intro renders with split layout
    Given the page loads
    When the intro section is visible
    Then a left column shows an illustration image
    And a right column shows a subtitle "take a look at our"
    And an h1 title "Buy and Sell Bitcoin" in dark text (#212121)
    And a paragraph of body text
    And a gold "read more" button
```

### Services Section
```gherkin
Feature: Services section

  Scenario: Services carousel renders service cards
    Given the page loads
    When the services section is visible
    Then a carousel of service cards is displayed
    And each card has an SVG icon, a title ("Exchange Fiat for Crypto"), description text, and a "Read More" link
    And navigation arrows allow scrolling through cards

  Scenario: Service card hover changes icon color
    Given a service card is rendered
    When the card is hovered
    Then the icon SVG path color changes to brand gold (#ffa800)
    And the title and link text change to brand gold
```

### News Section
```gherkin
Feature: News section

  Scenario: News grid renders 3 cards
    Given the page loads
    When the news section is visible
    Then a subtitle "take a look at our" is displayed
    And a section title "Latest News in Crypto" is centered
    And 3 news cards are displayed in a 3-column grid
    And each card has an image, title, excerpt text, and a button

  Scenario: News cards are responsive
    Given the viewport width is < 992px
    Then the 3 news cards stack vertically (1 column)
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer renders with 4 columns
    Given the page loads
    When the footer is visible
    Then the background is #15191f (dark blue-gray)
    And column 1 shows the logo and about text
    And column 2 shows "Useful Links" (Home, About, Case Studies, Services, etc.)
    And column 3 shows "Subscribe to our newsletter" with email input and subscribe button
    And column 4 shows social icons (Google Plus, Facebook, Twitter, YouTube)

  Scenario: Footer newsletter form has email input and subscribe button
    Given the footer is rendered
    Then an email input with placeholder "Your E-mail" is shown
    And a "subscribe" button is shown

  Scenario: Copyright bar renders at the bottom
    Given the footer is rendered
    Then a copyright line is displayed
```

## Verification checklist

- [ ] Top bar: dark bg (#11100e), logo with gold "in" + white "vest", crypto prices in gold
- [ ] Main menu: nav links (Home, Blockchain, Financial, About Us, Services), phone/email, search
- [ ] Hero: full-viewport slider, dark overlay, heading + text + gold CTA button, arrows + dots
- [ ] Intro: split layout (image left, text right), subtitle + h1 + paragraph + button
- [ ] Services: carousel with icon cards, hover color change to gold
- [ ] News: 3-column grid with image cards, section title
- [ ] Footer: 4 columns (about, links, newsletter, social), dark bg
- [ ] All design tokens match extracted values (gold #ffa800 brand, dark backgrounds)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Placeholder images via picsum.photos/seed/vestly-*
