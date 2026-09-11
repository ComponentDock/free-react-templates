# Template: ChainFlux (Cryptocurrency / ICO Landing)

## Purpose

Recreation of ColorLib "Cryptian" template.
- **Source slug:** `cryptian`
- **Preview URL:** https://preview.colorlib.com/theme/cryptian/
- **Source page:** https://colorlib.com/wp/template/cryptian/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | Montserrat (400, 700) | Google Fonts via `<link>` |
| Brand dark | `#062489` | Deep blue — body background, primary dark |
| Brand darker | `#000D47` | Very dark navy — sticky header bg |
| Dark navy | `#031b69` | Section backgrounds, dark panels |
| Medium blue | `#1938a2` / `#122e91` | Alternate blues for sections |
| Accent coral/pink | `#FB9A8C` / `#fa758e` / `#f9748f` | Accent text, links, interactive elements |
| Accent gold | `#F6D266` | Highlight color, secondary accent |
| Gradient button | `linear-gradient(right, #fe998b, #fa768d, #f78ca0)` | Primary CTA buttons (coral-pink gradient) |
| Gradient hover | `linear-gradient(right, #072487, #fa768d, #fe998b)` | Button hover (blue to pink) |
| Button blue | `#004cff` | Secondary buttons, progress bars |
| Button hover blue | `#143dc7` | Secondary button hover |
| Light text | `#cbe5ff` | Body text on dark backgrounds |
| White | `#fff` | Headings, highlights |
| LinkedIn | `#0077b5` | Social icon |
| Instagram | `#E84C88` | Social icon |
| Twitter | `#55acee` | Social icon |
| Border radius | `5px` (cards, buttons), `50px` (pill buttons), `35px` (rounded elements), `10px` (some elements) | Mix of rounded and sharp |
| Button style | Uppercase, bold, gradient background, 10px 20px padding, 5px radius | Consistent CTA pattern |

## Section structure (order from preview)

1. **Navbar** — transparent/absolute header, logo left, centered nav (Home with dropdown, About, White Paper, Token Sale, Roadmap, Team, APP, FAQ, Contact), gradient "login" button right, mobile hamburger
2. **Hero/Welcome** — particles.js animated background, left text (heading "Fast Growing ICO Agency for Blockchain Investors and Founders" + subtext), right illustration, two gradient CTA buttons ("Register for the ICO", "Download Whitepaper")
3. **Featured In** — logo carousel of partner/investor logos
4. **About** — split layout: left illustration, right heading "A Platform for Exchange Cryptocurrency and shares" + description text + "join us on telegraph" gradient button
5. **Features (Single About)** — 3 feature cards with icons: "Exciting Opportunity", "Vetted ICO Marketplace", "Diverse Profit Ways"
6. **ICO Live Now** — stats section: Token Sold count, ETH/BTC/LTH collected, countdown timer (days/hours/minutes/seconds), progress bar (soft cap $38M → max cap), "Buy Tokens" button
7. **Whitepaper/Documentation** — "Download Documentation" heading, 5 language buttons with flags (English, Spanish, Russian, Arabic, Portuguese)
8. **Token Distribution** — "initial distribution" heading, pie chart image + legend (Build Up Team 15%, ICO Investors 50%, Branding & Marketing 25%, Bounty 10%)
9. **Token Sales Contribution** — "Sale breakdown" heading, second pie chart + legend (HR & Development 40%, Branding & Marketing 30%, Possible Buyout 20%, Legal Advisory 10%)
10. **Roadmap** — "Development Roadmap" heading, timeline carousel with alternating left/right items (date + title + description)
11. **Core Team** — "Our Superman" heading, 4 team member cards (photo, name, role, social icons)
12. **Advisory Board** — "Advisory Board" heading, 5 advisor cards (same layout)
13. **Mobile App** — "Track from Anywhere" heading, left text + Google Play / Apple App Store buttons, right phone mockup
14. **FAQ** — tabbed interface (General Questions, ICO, Token, Cryptocurrency), carousel of FAQ cards with "readmore" links
15. **Community** — "Our Community" heading, grid of social media icons (Google+, LinkedIn, Dribbble, GitHub, Behance, YouTube, Twitter, Flickr)
16. **Footer** — 4 columns: logo + description + copyright, navigation links, secondary links, newsletter subscription form

## Gherkin requirements

```gherkin
Feature: ChainFlux cryptocurrency/ICO landing template

  Background:
    Given the user opens the ChainFlux template

  Scenario: Navbar renders correctly
    Then the navbar has a transparent background overlaying the hero
    And the logo is displayed on the left
    And navigation links include Home, About, White Paper, Token Sale, Roadmap, Team, APP, FAQ, Contact
    And a gradient "login" button is on the right
    And a mobile hamburger menu exists

  Scenario: Hero section displays
    Then an animated particle background is visible
    And a heading about ICO/blockchain agency is displayed
    And a descriptive subtext line is shown
    And an illustration/image is on the right side
    And two gradient CTA buttons are present ("Register for the ICO" and "Download Whitepaper")

  Scenario: Featured In section displays
    Then a carousel of partner logos is visible

  Scenario: About section displays
    Then a split layout with image on left and text on right is shown
    And the heading reads "A Platform for Exchange Cryptocurrency and shares"
    And a "join us on telegraph" gradient button is present

  Scenario: Features section displays
    Then 3 feature cards are shown in a row
    And each card has an icon, title, and description
    And the titles are "Exciting Opportunity", "Vetted ICO Marketplace", "Diverse Profit Ways"

  Scenario: ICO Live Now section displays
    Then token sale statistics are shown (Token Sold count, ETH/BTC/LTH collected)
    And a countdown timer with days, hours, minutes, seconds is visible
    And a progress bar showing soft cap to max cap is displayed
    And a "Buy Tokens" button is present

  Scenario: Whitepaper section displays
    Then a "Download Documentation" heading is visible
    And 5 language buttons with flags are shown (English, Spanish, Russian, Arabic, Portuguese)

  Scenario: Token Distribution section displays
    Then an "initial distribution" heading is shown
    And a pie chart with 4 segments is displayed
    And the legend shows: Build Up Team 15%, ICO Investors 50%, Branding & Marketing 25%, Bounty 10%

  Scenario: Token Sales Contribution section displays
    Then a "Sale breakdown" heading is shown
    And a second pie chart with 4 segments is displayed
    And the legend shows: HR & Development 40%, Branding & Marketing 30%, Possible Buyout 20%, Legal Advisory 10%

  Scenario: Roadmap section displays
    Then a "Development Roadmap" heading is visible
    And a timeline carousel with alternating left/right items is shown
    And each item has a date, title, and description

  Scenario: Core Team section displays
    Then an "Our Superman" heading is visible
    And 4 team member cards are shown in a row
    And each card has a photo, name, role, and social icons

  Scenario: Advisory Board section displays
    Then an "Advisory Board" heading is visible
    And 5 advisor cards are shown in a row

  Scenario: Mobile App section displays
    Then a "Track from Anywhere" heading is visible
    And a description text is shown
    And Google Play and Apple App Store buttons are present
    And a phone mockup image is on the right

  Scenario: FAQ section displays
    Then tabbed navigation with 4 tabs is shown (General Questions, ICO, Token, Cryptocurrency)
    And FAQ cards with questions and "readmore" links are displayed in a carousel

  Scenario: Community section displays
    Then a grid of social media icons is shown
    And icons include Google+, LinkedIn, Dribbble, GitHub, Behance, YouTube, Twitter, Flickr

  Scenario: Footer renders correctly
    Then a 4-column footer layout is present
    And column 1 has logo, description, and copyright
    And column 2 has navigation links (About, Token Sale, Roadmap, Contact)
    And column 3 has secondary links (White Paper, Team, APP, FAQ)
    And column 4 has a newsletter subscription form
    And a link to Component Dock is present
```

## Verification checklist

- [ ] All 16 sections render in the correct order
- [ ] Navbar is transparent/absolute, centered nav, gradient login button
- [ ] Hero has particles.js animation, heading, subtext, illustration, 2 CTA buttons
- [ ] Featured In has a logo carousel
- [ ] About has split layout with image and text
- [ ] Features: 3 cards with icons, titles, descriptions
- [ ] ICO Live Now: stats, countdown timer, progress bar, buy button
- [ ] Whitepaper: 5 language flag buttons
- [ ] Token Distribution: pie chart with legend (4 segments)
- [ ] Token Sales Contribution: second pie chart with legend
- [ ] Roadmap: timeline carousel with alternating items
- [ ] Core Team: 4 member cards with photos and social icons
- [ ] Advisory Board: 5 advisor cards
- [ ] Mobile App: text + store buttons + phone mockup
- [ ] FAQ: tabbed interface with carousel
- [ ] Community: social media icon grid
- [ ] Footer: 4-column layout, newsletter form, Component Dock link
- [ ] Brand dark blue (#062489) used as primary background
- [ ] Gradient buttons (coral-pink) used consistently for CTAs
- [ ] Font is Montserrat (Google Fonts)
- [ ] No references to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Public/CNAME contains chainflux.free.componentdock.com
- [ ] homepage field set to https://chainflux.free.componentdock.com
