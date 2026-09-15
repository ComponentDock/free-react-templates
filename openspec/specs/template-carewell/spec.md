# Template: Carewell (Nonprofit / Charity)

## Purpose

Recreation of ColorLib's **Kare** charity template as a React 19 + Vite + Tailwind CSS 4 + TypeScript app.

- **Source slug**: `kare`
- **Preview URL**: https://preview.colorlib.com/theme/kare/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/kare-free-template.jpg
- **New name**: `carewell`
- **Package**: `@free-react-templates/carewell`
- **Deploy target**: `carewell.free.componentdock.com`
- **Category**: Nonprofit / Charity

## Design Tokens

Extracted from the live preview at https://preview.colorlib.com/theme/kare/ and its stylesheet `css/style.css`.

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#ea2c58` (hot pink-red) | Primary buttons, links, progress bars, accents |
| `--brand-gold` | `#f8b600` | Accent highlights, funding badges |
| `--brand-cyan` | `#4cd3e3` | Secondary accent, icon colors |
| `--brand-blue` | `#38a4ff` | Info/accent color |
| `--brand-red` | `#f44a40` | Warning/urgency |

### Neutrals

| Token | Value | Usage |
|-------|-------|-------|
| `--text-primary` | `#222222` | Body text, headings |
| `--text-muted` | `#777777` | Secondary text, descriptions |
| `--text-light` | `#999999` | Tertiary text |
| `--bg-light` | `#f9f9ff` | Section alternating background |
| `--bg-white` | `#ffffff` | Default section background |
| `--border` | `#eeeeee` | Card borders, dividers |

### Typography

- **Font family**: `"Roboto", sans-serif`
- Loaded via Google Fonts
- Standard Bootstrap-based sizing

### Button Styles

- Primary buttons: `background: #ea2c58`, white text, no border-radius (sharp/square edges), `padding: 15px 30px`
- Hover: darker shade
- Secondary buttons: white background with border, `#ea2c58` hover fill

### Section Backgrounds

- Hero: Full-width background image (`banner/home.jpg`) with dark overlay (`rgba(24,24,24,0.33)`)
- Donation stats: White (`#ffffff`)
- Major causes: Light blue-gray (`#f9f9ff`)
- Make a donation: White
- Clients logos: White
- Support campaign: Light blue-gray (`#f9f9ff`)
- Experience: Full-width background image with dark overlay (`rgba(0,0,0,0.42)`)
- Footer: Dark (implied by text color)

## Section Structure (from live DOM)

Order as found on the preview page:

1. **Navbar** — "Kare Charity" branding, dropdown menus (home, causes, events, Pages, About, Blog, Contact), "donate now" button
2. **Hero / Banner** — Full-width background image with dark overlay, headline + description text + "donate now" CTA
3. **Donation Stats** — 4 stat boxes in a row: Total Donation, Fund Raised, Highest Donation, Total Donation (each with large number + label)
4. **Our Major Causes** — Section title + description, owl-carousel of cause cards. Each card: image, progress bar (76%), raised/total amounts, title, description, "donate here" link
5. **Make a Donation** — "Make a Donation Today" heading + description, preset amount buttons ($10, $50, $100, $250), USD selector, "donate now" submit button
6. **Clients Logo Area** — Logo carousel (6 partner logos)
7. **Support Campaign** — "Support a campaign or fundraiser" heading + description, cards showing campaign name, amount raised, funding progress
8. **Experience Donation** — Parallax background image section, "Experience How your Donation Can Reach" heading + description + "make donation now" CTA
9. **About Me + Newsletter** — Sidebar about card with photo + "Create Fundraising today" heading, newsletter signup form + social media links
10. **Footer** — Copyright, "Made with Colorlib" attribution → replace with Component Dock

## Gherkin Requirements

### Navbar
```gherkin
Feature: Carewell Navbar

  Scenario: Displays branding and navigation
    Given the user loads the page
    Then the navbar shows "Carewell" as the brand name
    And navigation links include "Home", "Causes", "Events", "About", "Blog", "Contact"
    And a "Donate Now" call-to-action button is visible

  Scenario: Brand link navigates to home
    Given the user clicks the "Carewell" brand link
    Then the page scrolls to the top

  Scenario: Donate Now button is styled
    Given the user views the navbar
    Then the donate button has primary brand color (#ea2c58) background
```

### Hero Banner
```gherkin
Feature: Carewell Hero Banner

  Scenario: Hero section displays with background
    Given the user loads the page
    Then a full-width hero banner is visible
    And it has a background image with dark overlay

  Scenario: Hero contains headline and CTA
    Given the user views the hero section
    Then a headline text is displayed
    And a description paragraph is shown
    And a "Donate Now" button is visible

  Scenario: Donate button links to donation section
    Given the user clicks the hero "Donate Now" button
    Then the page scrolls to the donation section
```

### Donation Stats
```gherkin
Feature: Carewell Donation Stats

  Scenario: Displays four stat boxes
    Given the user views the donation stats section
    Then four statistic boxes are displayed in a row
    And each box shows a number and a label
    And labels include "Total Donation", "Fund Raised", "Highest Donation"

  Scenario: Stats are visually distinct
    Given the user views the stat boxes
    Then each box has a white background and subtle border
    And numbers are large and prominent
```

### Major Causes
```gherkin
Feature: Carewell Major Causes

  Scenario: Section title and description
    Given the user scrolls to the causes section
    Then the heading "Our Major Causes" is displayed
    And a description paragraph is shown

  Scenario: Cause cards in carousel
    Given the user views the causes carousel
    Then multiple cause cards are visible
    And each card has an image, title, description, and progress bar

  Scenario: Progress bar shows funding status
    Given a cause card is displayed
    Then the progress bar shows a percentage
    And the raised amount and total are displayed
    And a "Donate Here" link is present

  Scenario: Carousel navigation
    Given the user views the carousel
    Then prev/next arrows are available
    And the carousel can be scrolled
```

### Make a Donation
```gherkin
Feature: Carewell Make a Donation

  Scenario: Donation form displays correctly
    Given the user scrolls to the donation section
    Then "Make a Donation Today" heading is displayed
    And four preset amount buttons ($10, $50, $100, $250) are shown
    And a USD currency indicator is visible
    And a "Donate Now" submit button is present

  Scenario: Amount selection
    Given the user clicks a preset amount
    Then that amount is selected/highlighted

  Scenario: Donate submission
    Given the user has selected an amount
    And clicks "Donate Now"
    Then the donation action is triggered
```

### Clients Logo Area
```gherkin
Feature: Carewell Clients Logos

  Scenario: Logo carousel displays
    Given the user views the clients section
    Then a carousel of partner/client logos is displayed
    And logos scroll automatically
```

### Support Campaign
```gherkin
Feature: Carewell Support Campaign

  Scenario: Campaign section heading
    Given the user scrolls to the support section
    Then "Support a campaign or fundraiser" heading is shown
    And a description paragraph is displayed

  Scenario: Campaign cards
    Given the user views the campaign cards
    Then each card shows a campaign name, amount raised, and funding percentage
    And cards are displayed in a responsive grid/carousel
```

### Experience Donation
```gherkin
Feature: Carewell Experience Donation

  Scenario: Parallax section displays
    Given the user scrolls to the experience section
    Then a background image with dark overlay is shown
    And "Experience How your Donation Can Reach" heading is visible
    And a description paragraph is present
    And a "Make Donation Now" CTA button is displayed
```

### About + Newsletter
```gherkin
Feature: Carewell About and Newsletter

  Scenario: About card
    Given the user views the bottom section
    Then an "About Me" card with avatar photo is displayed
    And "Create Fundraising today" heading is shown

  Scenario: Newsletter signup
    Given the user views the newsletter area
    Then "Newsletter" heading and "Stay updated with our latest trends" text are shown
    And an email input field is present
    And a submit button is visible

  Scenario: Social media links
    Given the user views the footer area
    Then social media icon links are displayed under "Follow Us"
```

### Footer
```gherkin
Feature: Carewell Footer

  Scenario: Footer content
    Given the user scrolls to the footer
    Then copyright text is displayed
    And a link to "https://www.componentdock.com/" is present
    And it reads "Component Dock" or similar branding
```

## Verification Checklist

- [ ] Spec covers all 10 sections from the live preview DOM
- [ ] Design tokens match the ColorLib source CSS
- [ ] Font family matches (Roboto)
- [ ] Primary brand color matches (#ea2c58)
- [ ] Button styles are sharp/square (no border-radius)
- [ ] Section backgrounds alternate white / #f9f9ff
- [ ] Hero has dark image overlay
- [ ] Experience section has dark image overlay
- [ ] All Gherkin scenarios are testable
- [ ] Footer links to Component Dock (not Colorlib)
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
