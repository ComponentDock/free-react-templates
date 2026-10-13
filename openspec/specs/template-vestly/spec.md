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

## Requirements

### Top Bar & Header

Feature: Top bar

#### Scenario: Top bar renders with logo and crypto prices

- **GIVEN** the page loads
- **WHEN** the top bar is visible
- **THEN** the background is #11100e (very dark)
- **AND** the logo shows "invest" with "in" in brand gold (#ffa800) and "vest" in white
- **AND** a "Blockchain" subtitle is below the logo
- **AND** crypto prices (BTC, ETH, XRP) are displayed in gold

#### Scenario: Top bar has register and login buttons

- **GIVEN** the page loads
- **WHEN** the top bar is visible
- **THEN** a "register" button with gold background is shown
- **AND** a "login" link is shown

#### Scenario: Main menu renders below top bar

- **GIVEN** the page loads
- **WHEN** the main menu is visible
- **THEN** nav links include "Home", "Blockchain", "Financial", "About Us", "Services"
- **AND** a phone number and email are displayed on the right
- **AND** a search icon button is visible

### Hero Slider

Feature: Hero slider

#### Scenario: Hero slider renders full-viewport with background images

- **GIVEN** the page loads
- **WHEN** the hero slider is visible
- **THEN** it occupies the full viewport height
- **AND** background images cover the section with dark overlay (0.83 opacity)
- **AND** the heading "A new World is coming" is centered in white
- **AND** a subtitle paragraph is displayed below the heading
- **AND** a gold "read more" button is centered below the text

#### Scenario: Hero slider has navigation arrows and dots

- **GIVEN** the hero slider is visible
- **THEN** prev/next navigation arrows are shown on left/right edges
- **AND** pagination dots are shown at the bottom
- **AND** the active dot is muted gold (#bda994)

### Intro Section

Feature: Intro section

#### Scenario: Intro renders with split layout

- **GIVEN** the page loads
- **WHEN** the intro section is visible
- **THEN** a left column shows an illustration image
- **AND** a right column shows a subtitle "take a look at our"
- **AND** an h1 title "Buy and Sell Bitcoin" in dark text (#212121)
- **AND** a paragraph of body text
- **AND** a gold "read more" button

### Services Section

Feature: Services section

#### Scenario: Services carousel renders service cards

- **GIVEN** the page loads
- **WHEN** the services section is visible
- **THEN** a carousel of service cards is displayed
- **AND** each card has an SVG icon, a title ("Exchange Fiat for Crypto"), description text, and a "Read More" link
- **AND** navigation arrows allow scrolling through cards

#### Scenario: Service card hover changes icon color

- **GIVEN** a service card is rendered
- **WHEN** the card is hovered
- **THEN** the icon SVG path color changes to brand gold (#ffa800)
- **AND** the title and link text change to brand gold

### News Section

Feature: News section

#### Scenario: News grid renders 3 cards

- **GIVEN** the page loads
- **WHEN** the news section is visible
- **THEN** a subtitle "take a look at our" is displayed
- **AND** a section title "Latest News in Crypto" is centered
- **AND** 3 news cards are displayed in a 3-column grid
- **AND** each card has an image, title, excerpt text, and a button

#### Scenario: News cards are responsive

- **GIVEN** the viewport width is < 992px
- **THEN** the 3 news cards stack vertically (1 column)

### Footer

Feature: Footer

#### Scenario: Footer renders with 4 columns

- **GIVEN** the page loads
- **WHEN** the footer is visible
- **THEN** the background is #15191f (dark blue-gray)
- **AND** column 1 shows the logo and about text
- **AND** column 2 shows "Useful Links" (Home, About, Case Studies, Services, etc.)
- **AND** column 3 shows "Subscribe to our newsletter" with email input and subscribe button
- **AND** column 4 shows social icons (Google Plus, Facebook, Twitter, YouTube)

#### Scenario: Footer newsletter form has email input and subscribe button

- **GIVEN** the footer is rendered
- **THEN** an email input with placeholder "Your E-mail" is shown
- **AND** a "subscribe" button is shown

#### Scenario: Copyright bar renders at the bottom

- **GIVEN** the footer is rendered
- **THEN** a copyright line is displayed

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
