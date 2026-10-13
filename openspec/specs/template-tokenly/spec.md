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

## Requirements

### Feature: Tokenly template behaviour

#### Scenario: Header navigation

Feature: Header

#### Scenario: Navbar displays logo and navigation links

- **GIVEN** the page loads
- **THEN** I see the Tokenly logo on the left
- **AND** I see nav links: Home, About, White Paper, Token Sale, Roadmap, Team, App, FAQ, Contact
- **AND** a "login" gradient button appears on the right

#### Scenario: Sticky header on scroll

- **GIVEN** I scroll past the hero section
- **THEN** the header background changes from transparent to dark navy (#000D47)
- **AND** the header remains fixed at the top of the viewport

#### Scenario: Dropdown menu on hover

- **GIVEN** I hover over a nav item with a dropdown (e.g. Home)
- **THEN** a dropdown menu appears below the link
- **AND** the dropdown has background #001763 with white text

#### Scenario: Hero / Welcome section

Feature: Hero

#### Scenario: Hero displays headline and CTAs

- **GIVEN** the page loads
- **THEN** I see the headline "Fast Growing ICO Agency for Blockchain Investors and Founders"
- **AND** I see subtext describing the platform
- **AND** I see two gradient buttons: "Register for the ICO" and "Download Whitepaper"
- **AND** a crypto illustration appears on the right side

#### Scenario: Particle animation in background

- **GIVEN** the page loads
- **THEN** a particle.js animation is visible behind the hero content

#### Scenario: Featured logos carousel

Feature: Featured Logos

#### Scenario: Partner logos are displayed

- **GIVEN** I scroll to the "We are featured in" section
- **THEN** I see a horizontal carousel of partner logos
- **AND** the carousel auto-plays or responds to navigation

#### Scenario: About section

Feature: About

#### Scenario: About section shows platform description

- **GIVEN** I scroll to the about section
- **THEN** I see a heading "A Platform for Exchange Cryptocurrency and shares"
- **AND** I see descriptive paragraph text
- **AND** I see a gradient "join us on telegraph" button with a send icon
- **AND** an illustration appears on the left side

#### Scenario: Feature cards

Feature: Feature Cards

#### Scenario: Three feature cards are displayed

- **GIVEN** I scroll to the feature cards section
- **THEN** I see 3 cards in a row
- **AND** each card has an icon, title, and description
- **AND** the cards have background #1938a2

#### Scenario: Feature card hover effect

- **GIVEN** I hover over a feature card
- **THEN** the card lifts up 5px (translateY(-5px))
- **AND** the background darkens to #122e91

#### Scenario: ICO Live section

Feature: ICO Live

#### Scenario: ICO section displays token sale info

- **GIVEN** I scroll to the ICO section
- **THEN** I see "ICO Live Now" heading
- **AND** I see token sale stats (tokens sold, ETH rate, bonus)
- **AND** I see ETH/BTC/LTC collected amounts
- **AND** I see a countdown timer (days, hours, minutes, seconds)

#### Scenario: Progress bar shows funding progress

- **GIVEN** I scroll to the ICO section
- **THEN** I see a progress bar at approximately 80% filled
- **AND** the filled portion uses a gradient (gold to orange)
- **AND** I see "Soft Cap" on the left and "Max Cap" on the right
- **AND** I see a "Buy Tokens" gradient button

#### Scenario: White Paper / Documentation

Feature: Documentation

#### Scenario: Documentation downloads are available

- **GIVEN** I scroll to the White Paper section
- **THEN** I see "Download Documentation" heading
- **AND** I see 5 language options with flag icons: English, Spanish, Russian, Arabic, Portuguese
- **AND** each language is a clickable download button

#### Scenario: Token Distribution

Feature: Token Distribution

#### Scenario: Token distribution chart is displayed

- **GIVEN** I scroll to the Token Distribution section
- **THEN** I see "Token Distribution" heading
- **AND** I see a pie chart illustration with legend
- **AND** the legend shows: 50% ICO Investors, 25% Branding & Marketing, 15% Build Up Team, 10% Bounty

#### Scenario: Token Sales Contribution chart is displayed

- **GIVEN** I scroll further in the distribution section
- **THEN** I see "Token Sales Contribution" heading
- **AND** I see a second pie chart with: 40% HR & Development, 30% Branding & Marketing, 20% Possible Buyout, 10% Legal Advisory

#### Scenario: Roadmap

Feature: Roadmap

#### Scenario: Development roadmap timeline is displayed

- **GIVEN** I scroll to the Roadmap section
- **THEN** I see "Development Roadmap" heading
- **AND** I see a horizontal carousel of timeline milestones
- **AND** each milestone has a date, title, and description
- **AND** milestones alternate between left-aligned and right-aligned layouts

#### Scenario: Team section

Feature: Team

#### Scenario: Core team members are displayed

- **GIVEN** I scroll to the Team section
- **THEN** I see "Our Superman" heading for core team
- **AND** I see 4 team members in a row, each with photo, name, and role

#### Scenario: Advisory team members are displayed

- **GIVEN** I scroll past the core team
- **THEN** I see "Advisory Board" heading
- **AND** I see 4 advisory members in a row, each with photo, name, and role

#### Scenario: Team member social links

- **GIVEN** I view a team member card
- **THEN** I see 3 social icons: LinkedIn, Dribbble, Twitter

#### Scenario: Mobile App section

Feature: Mobile App

#### Scenario: App promotion section is displayed

- **GIVEN** I scroll to the App section
- **THEN** I see "Track from Anywhere" heading
- **AND** I see descriptive text about the mobile app
- **AND** I see two buttons: "Google Playstore" and "Apple Appstore"
- **AND** I see a phone mockup image on the right

#### Scenario: FAQ section

Feature: FAQ

#### Scenario: FAQ tabs are displayed

- **GIVEN** I scroll to the FAQ section
- **THEN** I see "Frequently Asked Questions" heading
- **AND** I see 4 tab buttons: General Questions, ICO, Token, Cryptocurrency
- **AND** "General Questions" is active by default

#### Scenario: FAQ content carousel

- **GIVEN** I view the active FAQ tab
- **THEN** I see a carousel of FAQ cards
- **AND** each card has a question title, description, and "readmore" link

#### Scenario: Switching FAQ tabs

- **GIVEN** I click a different FAQ tab (e.g. "Token")
- **THEN** the carousel content updates to show that tab's FAQ items

#### Scenario: Community section

Feature: Community

#### Scenario: Social media grid is displayed

- **GIVEN** I scroll to the Community section
- **THEN** I see "Our Community" heading
- **AND** I see social media icons in a masonry-style grid
- **AND** the icons include: Google+, LinkedIn, Dribbble, GitHub, Behance, YouTube, Twitter, Flickr
- **AND** icons have different sizes (some larger, some smaller)

#### Scenario: Footer

Feature: Footer

#### Scenario: Footer displays logo, links, and newsletter

- **GIVEN** I scroll to the footer
- **THEN** I see the Tokenly logo and description
- **AND** I see two columns of navigation links
- **AND** I see a newsletter subscribe form with email input and "GO" gradient button
- **AND** I see a Component Dock attribution link

#### Scenario: Footer link hover

- **GIVEN** I hover over a footer link
- **THEN** the link text transitions to white with a 0.3s animation

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
