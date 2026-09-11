# Template: BlockNest (Cryptocurrency / ICO Landing Page)

## Purpose

Recreation of ColorLib's **Cryptian** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page ICO/cryptocurrency landing page.

- **Source:** [colorlib.com/wp/template/cryptian/](https://colorlib.com/wp/template/cryptian/)
- **Preview:** [preview.colorlib.com/theme/cryptian/](https://preview.colorlib.com/theme/cryptian/)
- **New name:** `blocknest` (apps/blocknest, @free-react-templates/blocknest)
- **Category:** Cryptocurrency / ICO / Blockchain landing page

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| body background | `#062489` | Deep navy blue, site-wide |
| body text color | `#cbe5ff` | Light blue on navy |
| heading color | `#ffffff` | White headings |
| sticky header bg | `#000D47` | Darker navy when scrolled |
| nav dropdown bg | `#001763` | Slightly lighter navy |
| nav active/hover text | `#FB9A8C` | Coral/salmon accent |
| feature card bg | `#1938a2` / `#122e91` | Medium blue cards |
| accent coral | `#f9748f` / `#FB9A8C` | Button hover, highlights |
| accent gold | `#F6D266` | Secondary accent |
| bright blue | `#004cff` | CTA buttons, progress bar |
| progress bar gradient | `linear-gradient(#f6d365, #fda085)` | Gold-to-coral gradient |
| distribution bg | `#031b69` | Darker navy section |
| font family | `Montserrat` (300–800) | Google Fonts, sans-serif |
| base font size | 14px | |
| button border-radius | 50px (pill) | `.gradient-btn` class |
| dropdown border-radius | 5px | Nav dropdowns |
| particles background | Canvas-based (particles.js style) | Hero area |

### Gradient buttons
- Primary gradient: gold-to-coral (`#f6d365` → `#fda085`) — used for main CTAs
- V2 variant: same gradient, taller (55px height), pill shape (border-radius: 50px)

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

## Gherkin scenarios

### Navbar
```gherkin
Scenario: Navbar renders with all nav links
  Given the page loads
  Then the navbar displays logo and links for Home, About, White Paper, Token Sale, Roadmap, Team, App, FAQ, Contact
  And a Login button is visible on the right

Scenario: Navbar becomes sticky on scroll
  Given the user scrolls down past the hero
  Then the navbar background transitions to dark navy (#000D47)
```

### Hero
```gherkin
Scenario: Hero displays headline and CTAs
  Given the page loads
  Then the hero section shows a headline about ICO/blockchain
  And two CTA buttons are visible: "Register for the ICO" and "Download Whitepaper"

Scenario: Hero has animated particle background
  Given the page loads
  Then a particles animation renders behind the hero content
```

### Featured Logos
```gherkin
Scenario: Logo carousel displays partner logos
  Given the page loads
  Then a "We are featured in" section shows at least 5 partner logos
  And the logos scroll automatically in a carousel
```

### About
```gherkin
Scenario: About section displays content
  Given the page loads
  Then the about section shows an illustration and heading
  And a paragraph about cryptocurrency exchange is displayed
  And a "Join us on Telegraph" CTA button is visible
```

### Feature Cards
```gherkin
Scenario: Three feature cards render
  Given the page loads
  Then three feature cards are displayed in a row
  And each card has an icon, title, and description
  And the cards are: Exciting Opportunity, Vetted ICO Marketplace, Diverse Profit Ways
```

### ICO Stats
```gherkin
Scenario: ICO stats section shows token sale data
  Given the page loads
  Then token sold count, ETH/BTC/LTH collected values are displayed
  And a countdown timer shows days, hours, minutes, seconds

Scenario: Progress bar shows funding progress
  Given the page loads
  Then a gradient progress bar is rendered
  And soft cap and max cap labels are visible
  And a "Buy Tokens" CTA is displayed
```

### Whitepaper
```gherkin
Scenario: Whitepaper section shows language options
  Given the page loads
  Then a "Download Documentation" heading is shown
  And 5 language buttons are visible with flag icons: English, Spanish, Russian, Arabic, Portuguese
```

### Token Distribution
```gherkin
Scenario: Token distribution shows allocation breakdown
  Given the page loads
  Then an "Initial Distribution" pie chart with legend is displayed
  And percentages are shown: 15% Team, 50% ICO Investors, 25% Branding, 10% Bounty
  And a "Token Sales Contribution" section with allocation breakdown is shown
```

### Roadmap
```gherkin
Scenario: Roadmap timeline renders milestones
  Given the page loads
  Then a "Development Roadmap" heading is shown
  And at least 4 timeline milestones are displayed
  And each milestone has a date, title, and description
```

### Team
```gherkin
Scenario: Team section shows member cards
  Given the page loads
  Then 4 team member cards are displayed
  And each card has a photo, name, role, and social links (LinkedIn, Dribbble, Twitter)
```

### Mobile App
```gherkin
Scenario: App section shows download options
  Given the page loads
  Then a "Track from Anywhere" heading is displayed
  And Google Play and Apple App Store buttons are visible
  And a phone mockup image is displayed
```

### FAQ
```gherkin
Scenario: FAQ section displays tabbed questions
  Given the page loads
  Then 4 FAQ tabs are visible: General Questions, ICO, Token, Cryptocurrency
  And the General Questions tab is active by default
  And FAQ items show questions with "Read more" links

Scenario: Clicking a FAQ tab switches content
  Given the FAQ section is visible
  When the user clicks the "Token" tab
  Then the token FAQ items are displayed
```

### Community
```gherkin
Scenario: Community social icons render
  Given the page loads
  Then a "Our Community" heading is displayed
  And social media icons are shown in a grid layout
  And icons include equivalents for Google+, LinkedIn, Dribbble, GitHub, Behance, YouTube, Twitter, Flickr
```

### Footer
```gherkin
Scenario: Footer renders with links and newsletter
  Given the page loads
  Then the footer shows logo and description
  And nav link columns are displayed
  And a newsletter subscription form with email input and GO button is visible
  And a "Component Dock" link is present in the footer
```

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
