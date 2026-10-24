# Template: BlockNest (Cryptocurrency / ICO Landing Page)
<!-- prep-status: shipped-as=coinforge -->
> **SHIPPED-UNDER** — the ColorLib `cryptian` design this prep describes already
> ships as `apps/coinforge` (<https://coinforge.free.componentdock.com>).
> Do not scaffold `apps/blocknest`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-coinforge/spec.md`.

## Purpose

Recreation of ColorLib's **Cryptian** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page ICO/cryptocurrency landing page.

- **Source:** [colorlib.com/wp/template/cryptian/](https://colorlib.com/wp/template/cryptian/)
- **Preview:** [preview.colorlib.com/theme/cryptian/](https://preview.colorlib.com/theme/cryptian/)
- **New name:** `blocknest` (apps/blocknest, @free-react-templates/blocknest)
- **Category:** Cryptocurrency / ICO / Blockchain landing page
- **Source design:** ColorLib "Cryptian" — https://colorlib.com/wp/template/cryptian/

## Design tokens (extracted from live preview CSS)

| Token                  | Value                               | Notes                     |
| ---------------------- | ----------------------------------- | ------------------------- |
| body background        | `#062489`                           | Deep navy blue, site-wide |
| body text color        | `#cbe5ff`                           | Light blue on navy        |
| heading color          | `#ffffff`                           | White headings            |
| sticky header bg       | `#000D47`                           | Darker navy when scrolled |
| nav dropdown bg        | `#001763`                           | Slightly lighter navy     |
| nav active/hover text  | `#FB9A8C`                           | Coral/salmon accent       |
| feature card bg        | `#1938a2` / `#122e91`               | Medium blue cards         |
| accent coral           | `#f9748f` / `#FB9A8C`               | Button hover, highlights  |
| accent gold            | `#F6D266`                           | Secondary accent          |
| bright blue            | `#004cff`                           | CTA buttons, progress bar |
| progress bar gradient  | `linear-gradient(#f6d365, #fda085)` | Gold-to-coral gradient    |
| distribution bg        | `#031b69`                           | Darker navy section       |
| font family            | `Montserrat` (300–800)              | Google Fonts, sans-serif  |
| base font size         | 14px                                |                           |
| button border-radius   | 5px (slightly rounded)              | `.gradient-btn` class     |
| dropdown border-radius | 5px                                 | Nav dropdowns             |
| particles background   | Canvas-based (particles.js style)   | Hero area                 |

### Gradient buttons

- Primary gradient: gold-to-coral (`#f6d365` → `#fda085`) — used for main CTAs
- V2 variant: same gradient, taller (55px height), 5 px rounding (`a.gradient-btn{border-radius:5px}`)

## Section structure (1:1 with source)

1. **Navbar** — Fixed/absolute top nav. Logo left, center nav links (Home, About, White Paper, Token Sale, Roadmap, Team, App, FAQ, Contact), login button right. Sticky with dark bg on scroll.
2. **Welcome / Hero** — Particles.js animated background. Split layout: headline ("Fast Growing ICO Agency for Blockchain Investors and Founders") + subtext + two gradient CTAs (Register for ICO, Download Whitepaper) on left; hero illustration on right.
3. **Featured Logos** — "We are featured in" heading + horizontal logo carousel (owl-carousel in source, use simple scroll in React).
4. **About** — Split layout: illustration left, heading + paragraph + CTA ("Join us on Telegraph") right.
5. **Feature Cards** — 3-column grid. Each card: icon image + title + description. Cards: "Exciting Opportunity", "Vetted ICO Marketplace", "Diverse Profit Ways".
6. **ICO Live Stats** — 4-column row: token sold count, ETH/BTC/LTH collected, countdown timer (days/hours/minutes/seconds). Below: progress bar (gradient fill, soft cap → max cap labels) + "Buy Tokens" CTA.
7. **Whitepaper / Documentation** — Heading + 5 language buttons with flag icons (English, Spanish, Russian, Arabic, Portuguese).
8. **Token Distribution** — Two pie-chart style sections with legend lists: Initial Distribution (15% Build Up Team, 50% ICO Investors, 25% Branding & Marketing, 10% Bounty) and Token Sales Contribution (40% HR & Development, 30% Branding & Marketing, 20% Possible Buyout, 10% Legal Advisory).
9. **Roadmap** — Timeline carousel. Alternating left/right items with icon + date + title + description. Milestones: Concept, Team Recruitment, Core Development, Main Development, Launch.
10. **Team** — 4-column grid. Each card: photo, name, role, social links (LinkedIn, Dribbble, Twitter).
11. **Mobile App** — Split layout: text + two store buttons (Google Play, Apple App Store) left; phone mockup right.
12. **FAQ** — Tabbed accordion. 4 tabs: General Questions, ICO, Token, Cryptocurrency. Each tab has FAQ items with question/answer + "Read more" link.
13. **Community** — Social media icon grid (Google+, LinkedIn, Dribbble, GitHub, Behance, YouTube, Twitter, Flickr) — use Lucide equivalents.
14. **Footer** — 4-column: logo + description + copyright, nav links (About, Token Sale, Roadmap, Contact), nav links (White Paper, Team, App, FAQ), newsletter subscription form (email + GO button). Footer MUST link componentdock.com.

## Requirements

### Navbar

#### Scenario: Navbar renders with all nav links

- **GIVEN** the page loads
- **THEN** the navbar displays logo and links for Home, About, White Paper, Token Sale, Roadmap, Team, App, FAQ, Contact
- **AND** a Login button is visible on the right

#### Scenario: Navbar becomes sticky on scroll

- **GIVEN** the user scrolls down past the hero
- **THEN** the navbar background transitions to dark navy (#000D47)

### Hero

#### Scenario: Hero displays headline and CTAs

- **GIVEN** the page loads
- **THEN** the hero section shows a headline about ICO/blockchain
- **AND** two CTA buttons are visible: "Register for the ICO" and "Download Whitepaper"

#### Scenario: Hero has animated particle background

- **GIVEN** the page loads
- **THEN** a particles animation renders behind the hero content

### Featured Logos

#### Scenario: Logo carousel displays partner logos

- **GIVEN** the page loads
- **THEN** a "We are featured in" section shows at least 5 partner logos
- **AND** the logos scroll automatically in a carousel

### About

#### Scenario: About section displays content

- **GIVEN** the page loads
- **THEN** the about section shows an illustration and heading
- **AND** a paragraph about cryptocurrency exchange is displayed
- **AND** a "Join us on Telegraph" CTA button is visible

### Feature Cards

#### Scenario: Three feature cards render

- **GIVEN** the page loads
- **THEN** three feature cards are displayed in a row
- **AND** each card has an icon, title, and description
- **AND** the cards are: Exciting Opportunity, Vetted ICO Marketplace, Diverse Profit Ways

### ICO Stats

#### Scenario: ICO stats section shows token sale data

- **GIVEN** the page loads
- **THEN** token sold count, ETH/BTC/LTH collected values are displayed
- **AND** a countdown timer shows days, hours, minutes, seconds

#### Scenario: Progress bar shows funding progress

- **GIVEN** the page loads
- **THEN** a gradient progress bar is rendered
- **AND** soft cap and max cap labels are visible
- **AND** a "Buy Tokens" CTA is displayed

### Whitepaper

#### Scenario: Whitepaper section shows language options

- **GIVEN** the page loads
- **THEN** a "Download Documentation" heading is shown
- **AND** 5 language buttons are visible with flag icons: English, Spanish, Russian, Arabic, Portuguese

### Token Distribution

#### Scenario: Token distribution shows allocation breakdown

- **GIVEN** the page loads
- **THEN** an "Initial Distribution" pie chart with legend is displayed
- **AND** percentages are shown: 15% Team, 50% ICO Investors, 25% Branding, 10% Bounty
- **AND** a "Token Sales Contribution" section with allocation breakdown is shown

### Roadmap

#### Scenario: Roadmap timeline renders milestones

- **GIVEN** the page loads
- **THEN** a "Development Roadmap" heading is shown
- **AND** at least 4 timeline milestones are displayed
- **AND** each milestone has a date, title, and description

### Team

#### Scenario: Team section shows member cards

- **GIVEN** the page loads
- **THEN** 4 team member cards are displayed
- **AND** each card has a photo, name, role, and social links (LinkedIn, Dribbble, Twitter)

### Mobile App

#### Scenario: App section shows download options

- **GIVEN** the page loads
- **THEN** a "Track from Anywhere" heading is displayed
- **AND** Google Play and Apple App Store buttons are visible
- **AND** a phone mockup image is displayed

### FAQ

#### Scenario: FAQ section displays tabbed questions

- **GIVEN** the page loads
- **THEN** 4 FAQ tabs are visible: General Questions, ICO, Token, Cryptocurrency
- **AND** the General Questions tab is active by default
- **AND** FAQ items show questions with "Read more" links

#### Scenario: Clicking a FAQ tab switches content

- **GIVEN** the FAQ section is visible
- **WHEN** the user clicks the "Token" tab
- **THEN** the token FAQ items are displayed

### Community

#### Scenario: Community social icons render

- **GIVEN** the page loads
- **THEN** a "Our Community" heading is displayed
- **AND** social media icons are shown in a grid layout
- **AND** icons include equivalents for Google+, LinkedIn, Dribbble, GitHub, Behance, YouTube, Twitter, Flickr

### Footer

#### Scenario: Footer renders with links and newsletter

- **GIVEN** the page loads
- **THEN** the footer shows logo and description
- **AND** nav link columns are displayed
- **AND** a newsletter subscription form with email input and GO button is visible
- **AND** a "Component Dock" link is present in the footer

## Verification checklist

- [ ] All 14 sections render in correct order (Navbar → Hero → Logos → About → Features → ICO Stats → Whitepaper → Distribution → Roadmap → Team → App → FAQ → Community → Footer)
- [ ] Design tokens match: body bg #062489, text #cbe5ff, Montserrat font, pill buttons (border-radius 50px)
- [ ] Particles animation or equivalent animated background in hero
- [ ] Countdown timer component with days/hours/minutes/seconds
- [ ] Progress bar with gradient fill and soft/max cap labels
- [ ] FAQ tab switching works (4 tabs)
- [ ] Roadmap timeline with alternating layout
- [ ] Footer links to componentdock.com (no Colorlib attribution)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No references to ColorLib in app code (only in spec + TEMPLATES.md)
- [ ] public/CNAME set to blocknest.free.componentdock.com
- [ ] homepage set to https://blocknest.free.componentdock.com
- [ ] Placeholder images use picsum.photos/seed/blocknest-N/W/H
- [ ] Google Fonts loaded via <link> in index.html
- [ ] Icons from lucide-react (no Font Awesome or Material Design Iconic Font)

## Shape re-verification (live sheet, 2026-10-22)

- `cryptian`: `a.gradient-btn{border-radius:5px}` — the provider button is slightly rounded, not a 50 px pill.
