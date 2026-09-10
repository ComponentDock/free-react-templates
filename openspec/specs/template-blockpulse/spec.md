# Template: Blockpulse (Cryptocurrency / ICO Landing Page)

## Purpose

Blockpulse is a full-page cryptocurrency/ICO landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Cryptian" free template (source:
https://colorlib.com/wp/template/cryptian/), built under a DIFFERENT name
(**Blockpulse**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 cryptocurrency/ICO site with a deep navy blue
(`#062489`) + coral-pink gradient (`#fe998b → #fa768d → #f78ca0`) palette,
Montserrat font, rounded buttons (5px border-radius), and a long-scroll
single-page layout with 13 distinct sections: navbar, hero (particles.js
background), featured-in logo carousel, about section with image + text,
3-column feature highlights, ICO live stats with countdown + progress bar,
whitepaper documentation downloads (5 languages), token distribution
(pie charts), token sales contribution, development roadmap carousel,
team members (core + advisory), mobile app showcase, FAQ accordion with
tabs, community social icons, and dark footer with newsletter. The navbar
is absolute-positioned with logo left, centered nav links, and login button
right. The hero uses a particles.js animated background with headline and
two CTA buttons. The body background is deep navy blue throughout.

**Preview URL — REACHABLE:** `https://preview.colorlib.com/theme/cryptian/`
(verified 2026-09-11 by curl, full HTML returned).

**Source URL:** https://colorlib.com/wp/template/cryptian/

## Design Tokens (extracted from preview CSS)

| Token               | Value                                         | Usage                                            |
| ------------------- | --------------------------------------------- | ------------------------------------------------ |
| body-bg             | `#062489`                                     | Deep navy blue: page background                  |
| header-scrolled-bg  | `#000D47`                                     | Darker navy: scrolled navbar background          |
| dropdown-bg         | `#001763`                                     | Dark navy: dropdown menus                        |
| ico-area-bg         | `#031b69`                                     | Slightly darker navy: ICO stats section          |
| text-light          | `#cbe5ff`                                     | Light blue: body text on dark backgrounds        |
| white               | `#fff`                                        | Headings, button text                            |
| accent-pink         | `#FB9A8C`                                     | Coral-pink: active nav link                      |
| gradient-start      | `#fe998b`                                     | Coral: gradient button left                      |
| gradient-mid        | `#fa768d`                                     | Pink: gradient button center                     |
| gradient-end        | `#f78ca0`                                     | Rose: gradient button right                      |
| gradient-reverse    | `#072487 → #fa768d → #fe998b`                 | Button hover gradient (navy to coral)            |
| font-family         | `'Montserrat', sans-serif`                    | All text (weights: 300–800)                      |
| border-radius       | `5px`                                         | Buttons, dropdown menus                          |
| button-style        | `text-transform: uppercase; font-weight: 700` | All CTA buttons                                  |

## Section Structure (order from preview DOM)

1. **Header / Navbar** — absolute navbar, logo left, centered nav links (Home, About, White Paper, Token Sale, Roadmap, Team, APP, FAQ, Contact), login button right with gradient; mobile hamburger menu
2. **Hero / Welcome** — particles.js animated background, headline "Fast Growing ICO Agency for Blockchain Investors and Founders", subtitle, two CTA buttons ("Register for the ICO", "Download Whitepaper"), welcome illustration right
3. **Featured In** — logo carousel of partner/featured-in logos
4. **About** — 2-column: illustration left, heading + description + "Join us on Telegraph" button right
5. **Feature Highlights** — 3-column cards (Exciting Opportunity, Vetted ICO Marketplace, Diverse Profit Ways) with icon + title + description
6. **ICO Live Stats** — dark navy bg, headline "ICO Live Now", stats grid (Token Sold, ETH/BTC/LTH collected, countdown timer), progress bar (Soft Cap → Max Cap), "Buy Tokens" button
7. **Whitepaper / Documentation** — heading "Download Documentation", 5 language flag buttons (English, Spanish, Russian, Arabic, Portuguese)
8. **Token Distribution** — dark bg with background image, heading "Token Distribution", pie chart image + legend (Build Up Team 15%, ICO Investors 50%, Branding 25%, Bounty 10%)
9. **Token Sales Contribution** — heading "Token Sales Contribution", legend + pie chart (HR & Development 40%, Branding 30%, Possible Buyout 20%, Legal Advisory 10%)
10. **Development Roadmap** — carousel timeline with dates + milestones + icons
11. **Team** — dark bg, "Core Team" heading, 4-column team cards (image + name + role + social icons); second row "Advisory Board" with 4 more members
12. **Mobile App** — 2-column: text + app store buttons left, phone mockup image right
13. **FAQ** — tabbed accordion (General Questions, ICO, Token, Cryptocurrency), carousel of FAQ items per tab
14. **Community** — social icon grid (Google+, LinkedIn, Dribbble, GitHub, Behance, YouTube, Twitter, Flickr)
15. **Footer** — dark bg, 4-column: logo + about text + copyright, links column 1, links column 2, newsletter subscribe form

## Gherkin Requirements

### Feature: Navbar

  Scenario: Logo and navigation links are visible
    Given the user loads the page
    Then the navbar displays the logo
    And the nav links include "Home", "About", "White Paper", "Token Sale", "Roadmap", "Team", "APP", "FAQ", "Contact"
    And a "login" button is visible on the right

  Scenario: Navbar becomes fixed on scroll
    Given the user scrolls down past the hero
    Then the navbar gets a solid dark background

  Scenario: Mobile hamburger menu toggles
    Given the user is on a mobile viewport
    When they click the hamburger menu button
    Then the mobile navigation menu slides in

### Feature: Hero / Welcome

  Scenario: Hero displays headline and CTAs
    Given the user views the page
    Then the hero shows the headline about ICO/blockchain
    And two CTA buttons are displayed ("Register for the ICO", "Download Whitepaper")
    And an illustration is displayed on the right side
    And a particles.js animated background is active

### Feature: Featured In (Logo Carousel)

  Scenario: Logo carousel displays partner logos
    Given the user scrolls to the "We are featured in" section
    Then a carousel of partner logos is visible
    And the logos auto-scroll horizontally

### Feature: About

  Scenario: About section displays content
    Given the user scrolls to the about section
    Then an illustration is shown on the left
    And a heading, description text, and CTA button are shown on the right

### Feature: Feature Highlights

  Scenario: Three feature cards are displayed
    Given the user scrolls to the feature highlights section
    Then 3 feature cards are visible in a row
    And each card has an icon, title, and description

### Feature: ICO Live Stats

  Scenario: ICO stats and countdown are displayed
    Given the user scrolls to the ICO section
    Then the headline "ICO Live Now" is visible
    And token sale statistics are displayed (Token Sold, ETH/BTC collected)
    And a countdown timer shows days, hours, minutes, seconds
    And a progress bar shows fundraising progress
    And a "Buy Tokens" button is visible

### Feature: Whitepaper / Documentation

  Scenario: Download options are displayed
    Given the user scrolls to the documentation section
    Then 5 language download buttons are visible (English, Spanish, Russian, Arabic, Portuguese)
    And each button shows a flag icon and language name

### Feature: Token Distribution

  Scenario: Token distribution is displayed
    Given the user scrolls to the token distribution section
    Then a pie chart image is visible
    And a legend shows allocation percentages (Build Up Team, ICO Investors, Branding, Bounty)

### Feature: Development Roadmap

  Scenario: Roadmap timeline is displayed
    Given the user scrolls to the roadmap section
    Then a carousel of timeline milestones is visible
    And each milestone shows a date, title, and description

### Feature: Team

  Scenario: Core team members are displayed
    Given the user scrolls to the team section
    Then 4 core team member cards are visible
    And each card shows a photo, name, role, and social icons

  Scenario: Advisory board is displayed
    Given the user scrolls further in the team section
    Then 4 advisory board member cards are visible

### Feature: Mobile App

  Scenario: App download section is displayed
    Given the user scrolls to the apps section
    Then a heading "Track from Anywhere" is visible
    And description text is shown
    And "Google Playstore" and "Apple Appstore" buttons are visible
    And a phone mockup image is displayed

### Feature: FAQ

  Scenario: FAQ tabs and questions are displayed
    Given the user scrolls to the FAQ section
    Then tab navigation shows categories (General Questions, ICO, Token, Cryptocurrency)
    And FAQ items are displayed in a carousel per tab
    And each item has a title, description, and "readmore" link

### Feature: Community

  Scenario: Social media icons are displayed
    Given the user scrolls to the community section
    Then social media icon links are visible (Google+, LinkedIn, Dribbble, GitHub, YouTube, Twitter)

### Feature: Footer

  Scenario: Footer content is visible
    Given the user scrolls to the footer
    Then the footer displays logo, about text, link columns, and newsletter form
    And the copyright line links to "https://www.componentdock.com/" (branded "Component Dock")

## Verification Checklist

- [ ] All 15 sections present in correct order
- [ ] Navbar: logo, centered nav links, login button, mobile hamburger, scroll behavior
- [ ] Hero: particles.js background, headline, subtitle, 2 CTA buttons, illustration
- [ ] Featured In: logo carousel auto-scrolling
- [ ] About: illustration left, text + CTA right
- [ ] Feature Highlights: 3 cards with icon + title + description
- [ ] ICO Stats: headline, stats, countdown timer, progress bar, "Buy Tokens"
- [ ] Whitepaper: 5 language download buttons with flags
- [ ] Token Distribution: pie chart + legend with percentages
- [ ] Token Sales: legend + pie chart
- [ ] Roadmap: timeline carousel with dates/milestones
- [ ] Team: 4 core + 4 advisory members with photos/roles/social
- [ ] Mobile App: heading, description, app store buttons, phone mockup
- [ ] FAQ: tabbed navigation, carousel per tab, FAQ items with readmore
- [ ] Community: social icon grid
- [ ] Footer: logo, about, links, newsletter, Component Dock link
- [ ] No ColorLib references in app code
- [ ] Design tokens: Montserrat font, #062489 body bg, coral-pink gradient buttons
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] Responsive: mobile hamburger, stacked layouts on small screens
- [ ] Accessibility: semantic HTML, aria-labels on interactive elements
