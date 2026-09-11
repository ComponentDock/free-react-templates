# Template: Tokenly (Cryptocurrency / ICO Landing Page)

## Purpose

Recreation of ColorLib's **Cryptian** cryptocurrency and ICO landing page template.

- **Source:** https://colorlib.com/wp/template/cryptian/
- **Preview:** https://preview.colorlib.com/theme/cryptian/
- **New name:** `tokenly`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Cryptocurrency / ICO Landing Page

## Design tokens

Extracted from the live preview CSS (`style.css`):

| Token            | Value                                                         | Usage                                                        |
| ---------------- | ------------------------------------------------------------- | ------------------------------------------------------------ |
| `--brand-blue`   | `#062489`                                                     | Page body background, primary deep blue                      |
| `--brand-dark`   | `#000D47`                                                     | Sticky header bg, darkest navy                               |
| `--brand-mid`    | `#1938a2`                                                     | Card backgrounds (feature cards)                             |
| `--brand-mid-hover` | `#122e91`                                                  | Card hover state                                             |
| `--brand-deep`   | `#031b69`                                                     | ICO section background                                       |
| `--accent-pink`  | `#f9748f` / `#FB9A8C`                                         | Accent links, active nav, hover highlights                   |
| `--accent-gold`  | `#F6D266`                                                     | Secondary hover accent                                       |
| `--text-body`    | `#cbe5ff`                                                     | Body text (light blue on dark background)                    |
| `--text-heading` | `#FFFFFF`                                                     | Headings and emphasis text                                   |
| `--progress-blue`| `#004cff`                                                     | Progress bar track                                           |
| `--dropdown-bg`  | `#001763`                                                     | Dropdown menu background                                     |
| `font-family`    | `"Montserrat", sans-serif`                                    | Global font (weights 300–800)                                |
| `border-radius`  | `5px`                                                         | Buttons, dropdowns, cards                                    |
| `progress-radius`| `50px`                                                        | Progress bar rounded pill shape                              |
| Gradient button  | `linear-gradient(to right, #fe998b, #fa768d, #f78ca0)`        | Primary CTA buttons (pink/coral gradient)                    |
| Button hover     | Slides pseudo-element from left (width transition 0.3s)       | Fill-in hover animation                                      |

### Color palette summary

- **Deep blue** `#062489` — dominant page background
- **Coral/pink gradient** `#fe998b → #fa768d → #f78ca0` — primary CTA buttons, active highlights
- **Light blue** `#cbe5ff` — body text
- **Gold** `#F6D266` — secondary accent on hover
- **Card blue** `#1938a2` — feature card backgrounds
- **Dark navy** `#000D47` — sticky header
- **White** `#FFFFFF` — headings, nav text

## Visual design notes (from TEMPLATES.md screenshot + preview)

- Dark blue full-page background with particle.js animation in hero
- Floating/absolute header with transparent bg, becomes solid dark on scroll
- Hero: two-column — left has headline "Fast Growing ICO Agency for Blockchain Investors and Founders" + two gradient CTA buttons; right has a crypto illustration
- "We are featured in" logo carousel (partner logos)
- About section: two-column with large illustration (left) and heading + text + gradient "join us on telegraph" button (right)
- 3-column feature cards with icon + title + description on darker blue background, hover lifts 5px
- ICO Live section: deeper blue bg, countdown timer (days/hours/minutes/seconds), progress bar (80% filled with gradient), token stats (ETH/BTC collected)
- White Paper/Documentation section: 5 flag icons for language downloads (English, Spanish, Russian, Arabic, Portuguese)
- Token Distribution: two pie chart illustrations + legend lists
- Roadmap: horizontal timeline carousel with milestones (dates + descriptions)
- Team section: 4 core team + 4 advisory team members in a grid, each with photo, name, role, and 3 social links (LinkedIn, Dribbble, Twitter)
- Mobile App section: two-column with text + Google Play / Apple App Store buttons + phone mockup image
- FAQ section: tabbed pill navigation (General Questions, ICO, Token, Cryptocurrency) with carousel of FAQ cards
- Community section: masonry-style grid of social media icons (Google+, LinkedIn, Dribbble, GitHub, Behance, YouTube, Twitter, Flickr)
- Footer: logo, nav links, newsletter subscribe form with gradient "GO" button

## Gherkin requirements

### Scenario: Header navigation

```gherkin
Feature: Header

  Scenario: Navbar displays logo and navigation links
    Given the page loads
    Then I see the Tokenly logo on the left
    And I see nav links: Home, About, White Paper, Token Sale, Roadmap, Team, App, FAQ, Contact
    And a "login" gradient button appears on the right

  Scenario: Sticky header on scroll
    Given I scroll past the hero section
    Then the header background changes from transparent to dark navy (#000D47)
    And the header remains fixed at the top of the viewport

  Scenario: Dropdown menu on hover
    Given I hover over a nav item with a dropdown (e.g. Home)
    Then a dropdown menu appears below the link
    And the dropdown has background #001763 with white text
```

### Scenario: Hero / Welcome section

```gherkin
Feature: Hero

  Scenario: Hero displays headline and CTAs
    Given the page loads
    Then I see the headline "Fast Growing ICO Agency for Blockchain Investors and Founders"
    And I see subtext describing the platform
    And I see two gradient buttons: "Register for the ICO" and "Download Whitepaper"
    And a crypto illustration appears on the right side

  Scenario: Particle animation in background
    Given the page loads
    Then a particle.js animation is visible behind the hero content
```

### Scenario: Featured logos carousel

```gherkin
Feature: Featured Logos

  Scenario: Partner logos are displayed
    Given I scroll to the "We are featured in" section
    Then I see a horizontal carousel of partner logos
    And the carousel auto-plays or responds to navigation
```

### Scenario: About section

```gherkin
Feature: About

  Scenario: About section shows platform description
    Given I scroll to the about section
    Then I see a heading "A Platform for Exchange Cryptocurrency and shares"
    And I see descriptive paragraph text
    And I see a gradient "join us on telegraph" button with a send icon
    And an illustration appears on the left side
```

### Scenario: Feature cards

```gherkin
Feature: Feature Cards

  Scenario: Three feature cards are displayed
    Given I scroll to the feature cards section
    Then I see 3 cards in a row
    And each card has an icon, title, and description
    And the cards have background #1938a2

  Scenario: Feature card hover effect
    Given I hover over a feature card
    Then the card lifts up 5px (translateY(-5px))
    And the background darkens to #122e91
```

### Scenario: ICO Live section

```gherkin
Feature: ICO Live

  Scenario: ICO section displays token sale info
    Given I scroll to the ICO section
    Then I see "ICO Live Now" heading
    And I see token sale stats (tokens sold, ETH rate, bonus)
    And I see ETH/BTC/LTC collected amounts
    And I see a countdown timer (days, hours, minutes, seconds)

  Scenario: Progress bar shows funding progress
    Given I scroll to the ICO section
    Then I see a progress bar at approximately 80% filled
    And the filled portion uses a gradient (gold to orange)
    And I see "Soft Cap" on the left and "Max Cap" on the right
    And I see a "Buy Tokens" gradient button
```

### Scenario: White Paper / Documentation

```gherkin
Feature: Documentation

  Scenario: Documentation downloads are available
    Given I scroll to the White Paper section
    Then I see "Download Documentation" heading
    And I see 5 language options with flag icons: English, Spanish, Russian, Arabic, Portuguese
    And each language is a clickable download button
```

### Scenario: Token Distribution

```gherkin
Feature: Token Distribution

  Scenario: Token distribution chart is displayed
    Given I scroll to the Token Distribution section
    Then I see "Token Distribution" heading
    And I see a pie chart illustration with legend
    And the legend shows: 50% ICO Investors, 25% Branding & Marketing, 15% Build Up Team, 10% Bounty

  Scenario: Token Sales Contribution chart is displayed
    Given I scroll further in the distribution section
    Then I see "Token Sales Contribution" heading
    And I see a second pie chart with: 40% HR & Development, 30% Branding & Marketing, 20% Possible Buyout, 10% Legal Advisory
```

### Scenario: Roadmap

```gherkin
Feature: Roadmap

  Scenario: Development roadmap timeline is displayed
    Given I scroll to the Roadmap section
    Then I see "Development Roadmap" heading
    And I see a horizontal carousel of timeline milestones
    And each milestone has a date, title, and description
    And milestones alternate between left-aligned and right-aligned layouts
```

### Scenario: Team section

```gherkin
Feature: Team

  Scenario: Core team members are displayed
    Given I scroll to the Team section
    Then I see "Our Superman" heading for core team
    And I see 4 team members in a row, each with photo, name, and role

  Scenario: Advisory team members are displayed
    Given I scroll past the core team
    Then I see "Advisory Board" heading
    And I see 4 advisory members in a row, each with photo, name, and role

  Scenario: Team member social links
    Given I view a team member card
    Then I see 3 social icons: LinkedIn, Dribbble, Twitter
```

### Scenario: Mobile App section

```gherkin
Feature: Mobile App

  Scenario: App promotion section is displayed
    Given I scroll to the App section
    Then I see "Track from Anywhere" heading
    And I see descriptive text about the mobile app
    And I see two buttons: "Google Playstore" and "Apple Appstore"
    And I see a phone mockup image on the right
```

### Scenario: FAQ section

```gherkin
Feature: FAQ

  Scenario: FAQ tabs are displayed
    Given I scroll to the FAQ section
    Then I see "Frequently Asked Questions" heading
    And I see 4 tab buttons: General Questions, ICO, Token, Cryptocurrency
    And "General Questions" is active by default

  Scenario: FAQ content carousel
    Given I view the active FAQ tab
    Then I see a carousel of FAQ cards
    And each card has a question title, description, and "readmore" link

  Scenario: Switching FAQ tabs
    Given I click a different FAQ tab (e.g. "Token")
    Then the carousel content updates to show that tab's FAQ items
```

### Scenario: Community section

```gherkin
Feature: Community

  Scenario: Social media grid is displayed
    Given I scroll to the Community section
    Then I see "Our Community" heading
    And I see social media icons in a masonry-style grid
    And the icons include: Google+, LinkedIn, Dribbble, GitHub, Behance, YouTube, Twitter, Flickr
    And icons have different sizes (some larger, some smaller)
```

### Scenario: Footer

```gherkin
Feature: Footer

  Scenario: Footer displays logo, links, and newsletter
    Given I scroll to the footer
    Then I see the Tokenly logo and description
    And I see two columns of navigation links
    And I see a newsletter subscribe form with email input and "GO" gradient button
    And I see a Component Dock attribution link

  Scenario: Footer link hover
    Given I hover over a footer link
    Then the link text transitions to white with a 0.3s animation
```

## Verification checklist

- [ ] Header: transparent → solid on scroll, all nav links present, login button visible
- [ ] Hero: particles.js background, headline, subtext, two gradient CTA buttons, illustration
- [ ] Featured logos: carousel of partner logos renders and scrolls
- [ ] About: heading, text, "join us on telegraph" button, illustration
- [ ] Feature cards: 3 cards with icon, title, description; hover lifts 5px
- [ ] ICO Live: countdown timer, token stats, progress bar at ~80%, "Buy Tokens" button
- [ ] White Paper: 5 language download buttons with flag icons
- [ ] Token Distribution: two pie charts with correct legend percentages
- [ ] Roadmap: timeline carousel with alternating left/right milestones
- [ ] Team: 4 core + 4 advisory members with photos, names, roles, social links
- [ ] Mobile App: heading, text, Google Play + Apple buttons, phone mockup
- [ ] FAQ: 4 tabbed categories, carousel cards per tab, tab switching works
- [ ] Community: social media icon grid with varying sizes
- [ ] Footer: logo, links, newsletter subscribe, Component Dock link
- [ ] Design tokens: deep blue bg, coral gradient buttons, Montserrat font, 5px radius
- [ ] Responsive: mobile menu, stacked columns, adjusted typography
- [ ] All images use picsum.photos placeholders with deterministic seeds
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
