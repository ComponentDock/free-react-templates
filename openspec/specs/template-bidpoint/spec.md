# Template: Bidpoint (Auction Marketplace)

## Purpose

Bidpoint is a single-page auction marketplace landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Auction" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Auction" — auction marketplace / buy-sell-bid
  template (source: https://colorlib.com/wp/template/auction/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/auction/
  (HTTP 200, ~24 KB HTML fetched; `css/style.css` ~30 KB parsed for
  tokens). Title tag: "Auction — Website by Colorlib". Bootstrap 4 +
  owl-carousel + flaticon/icomoon icon fonts, AOS animations.
- **Screenshot analyzed:** `auction-free-template.jpg` (TEMPLATES.md) —
  clean professional auction marketplace: warm orange accent on a white
  neutral base, blurred lifestyle hero background with centered headline
  "The Best Place to Buy and Sell", product grid with orange price badges,
  circular orange icons in steps and feature lists, testimonials over
  background image with orange overlay, light gray footer.
- **Section order (1:1):**
  1. Navbar (`.site-navbar`, absolute, transparent bg over hero) — logo
     left, nav links center (Home, Buy, Sell, Services dropdown with
     Sell Items / Buy Items / Submit a Bid, Blog, About, Contact), Sign
     In / Register right.
  2. Hero (`.intro-section`, bg image `images/hero_1.jpg` + dark overlay
     `rgba(0,0,0,0.2)`) — centered h1 "The Best Place to Buy and Sell",
     subtext paragraph, `.btn.btn-primary` "Register" CTA.
  3. Current Auctions (`.site-section`) — `.caption` "Auctions" eyebrow,
     h2 "Current **Auctions**"; 8 `.auctions-entry .item` cards in
     4-col responsive grid (6/col-6 md/col-4 lg/col-3): each card has
     price badge (`.price` absolute top-left), product image, h3 title,
     category + bid count row, `.btn.btn-bid` "Submit a Bid" button.
  4. How It Works (`.site-section.pt-0`) — `.caption` "How?" eyebrow,
     h2 "How **It Works**"; 4 `.step` items in 4-col grid: Register
     (`.icon-user`), Buy or Bid (`.icon-money`), Submit a bid
     (`.icon-glass`), Win (`.icon-trophy`). Each step has a circular
     orange `.wrap-icon` (90px, #f37121 bg, white icon), heading,
     description. `.step.last` hides the connecting arrow.
  5. About Us (`.site-section`) — two-column: left col-lg-7 hero image;
     right col-lg-5: `.caption` "About?" eyebrow, h2 "About **Us**",
     3 `.feature-icon` rows (Fast Support `.icon-paper-plane`, Happy
     Customers `.icon-smile-o`, 24/7 Support `.icon-support`), each with
     70px circular orange icon and heading + description.
  6. Testimonials (`.section-bg.style-1`, bg image `hero_1.jpg` + orange
     overlay #f37121) — `.caption` "Testimonials" white, h2 "Happy
     **Clients**" white; owl-carousel of `.ftco-testimonial-1` cards:
     each has `.ftco-testimonial-vcard` (person photo + name + role)
     and a quote paragraph. White text on orange-bg overlay.
  7. CTA (`.site-section`) — centered h2 "Create an account and start
     Buy, Bid or Sell Now!" + `.btn.btn-primary` "Register".
  8. Footer (`.footer`, bg `#f8f9fa`, padding 4rem) — 4-column: logo +
     description + "Learn More" link, Solutions heading + 5 links,
     Services heading + 5 links, Contact heading + 5 links. Copyright
     bar at bottom (centered, text-only).
- **Design tokens extracted from the preview CSS:**
  - Font: **"Muli"**, sans-serif (Google Fonts, weights 300/400/700/900).
    Fallback stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif.
  - Brand accent: **#f37121** (warm orange) — `.caption` text color,
    `.step .wrap-icon` background (90px circle), `.feature-icon .wrap-icon`
    background (70px circle), `.section-bg.style-1` overlay background,
    `.section-bg.style-1 h3` color, `.btn.btn-primary` background,
    testimonial heading accents.
  - Backgrounds: **#f8f9fa** (light gray — `.footer`, `.btn-bid`,
    loader stroke), **#fff** (white — default section bg, card bg).
  - Text colors: **#000** (headings, navbar, step titles, footer
    headings), **#25262a** (body text, dropdown hover), **#777**
    (footer link text), **#212529** (body text base).
  - Buttons: `.btn-primary` — #f37121 bg, white text, border-radius: 0
    (sharp corners), standard Bootstrap padding. `.btn-bid` — padding
    7px 15px, no text-transform, border-radius: 0, background: #f8f9fa,
    color: #000.
  - Caption style: color #f37121, uppercase, font-size 11px,
    letter-spacing .2rem, font-weight 700.
  - Icon circles: `.step .wrap-icon` — 90px, border-radius 50%,
    background #f37121, white text, font-size 40px, font-family
    'icomoon'; `.feature-icon .wrap-icon` — 70px, same colors.
  - Hero: `.intro-section` — background-size cover, overlay
    rgba(0,0,0,0.2), h1 white centered, `.btn.btn-primary` for CTA.
  - Testimonials: `.section-bg.style-1` — background-size cover,
    overlay #f37121, white headings, avatar photos in round crop
    (border-radius 50%).
  - Footer: bg #f8f9fa, padding 4rem 0, headings 16px/normal,
    links #777 with underline, copyright bar centered at bottom.
  - Navbar: absolute position, transparent bg over hero, white text,
    nav links inline, dropdown on hover.
- **Recreation decisions:** hero/about/testimonial background images →
  seeded picsum with appropriate overlays (dark ~0.2 for hero, orange
  #f37121 at full opacity for testimonials); icons → lucide-react
  (User, Coins, Gavel, Trophy for steps; Plane, Smile, Headphones for
  features; navigation links plain text); product images →
  `picsum.photos/seed/bidpoint-<n>/<w>/<h>`; testimonial avatars →
  `picsum.photos/seed/bidpoint-person-<n>/80/80`; Muli via Google Fonts
  `<link>` in `index.html`; #f37121 / #f8f9fa / #000 in `@theme`; no
  assets copied.

Bidpoint lives in `apps/bidpoint` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render an absolute-positioned transparent navbar with the
brand name "Bidpoint" and anchor links to the page sections.

#### Scenario: Navbar content

- **GIVEN** the Bidpoint page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show "Bidpoint" as the brand name on the left
- **AND** the navbar SHALL show links for Home, Buy, Sell, Services
  (with a dropdown containing Sell Items, Buy Items, Submit a Bid),
  Blog, About, and Contact
- **AND** the navbar SHALL show "Sign In / Register" on the right

#### Scenario: Navbar styling

- **GIVEN** the navbar is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL have a transparent background positioned
  absolutely over the hero section
- **AND** all nav link text SHALL be white to contrast the dark hero overlay
- **AND** the active link SHALL have a white underline indicator

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user activates the menu toggle
- **THEN** the nav links SHALL be reachable via a hamburger icon toggle

### Requirement: Hero section

The system SHALL render a full-width hero with a background image, dark
overlay, centered headline, subtext paragraph, and a Register CTA button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the hero is in view
- **THEN** the hero SHALL show the headline "The Best Place to Buy and
  Sell" in white, bold, centered
- **AND** the hero SHALL show a subtext paragraph below the headline
- **AND** the hero SHALL show a primary orange button labeled "Register"

#### Scenario: Hero background

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL use a full-width background photo (seeded
  picsum) with a dark overlay at ~20% opacity so white text stays readable
- **AND** the hero content SHALL be centered both vertically and
  horizontally

### Requirement: Current Auctions grid

The system SHALL render a product grid section with an eyebrow caption,
a heading, and 8 auction item cards in a responsive 4-column grid.

#### Scenario: Section heading

- **GIVEN** the auctions section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the orange uppercase eyebrow "Auctions"
  (11px, letter-spacing .2rem, font-weight 700, color #f37121)
- **AND** the section SHALL show the heading "Current Auctions"

#### Scenario: Product cards

- **GIVEN** the auctions section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show 8 product cards in a 4-column grid
  (stacking to 2 columns on tablet, 1 on mobile)
- **AND** each card SHALL display: a product image, an overlaid price
  badge (positioned top-left), a product title, a category label and
  bid count in a row, and a "Submit a Bid" button

#### Scenario: Card button styling

- **GIVEN** a product card is rendered
- **WHEN** the "Submit a Bid" button is displayed
- **THEN** the button SHALL have a light gray background (#f8f9fa), black
  text, no border-radius (sharp corners), and padding 7px 15px

### Requirement: How It Works steps

The system SHALL render a 4-column step section with circular orange
icons, headings, and descriptions explaining the auction process.

#### Scenario: Step items

- **GIVEN** the How It Works section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the orange eyebrow "How?" and the
  heading "How It Works"
- **AND** it SHALL show 4 steps in a 4-column grid (stacking on mobile):
  Register, Buy or Bid, Submit a Bid, Win
- **AND** each step SHALL have a 90px circular orange icon (#f37121 bg,
  white icon), a heading, and a description paragraph

#### Scenario: Step connecting arrows

- **GIVEN** the steps are rendered on a wide viewport
- **WHEN** the steps are displayed
- **THEN** steps 1–3 SHALL show a right-pointing arrow between them
- **AND** step 4 (Win) SHALL NOT show a trailing arrow

### Requirement: About Us section

The system SHALL render a split two-column section with a large image on
the left and an about heading with 3 feature rows on the right.

#### Scenario: About content

- **GIVEN** the About Us section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show a large product/hero image
- **AND** the right column SHALL show the orange eyebrow "About?" and
  the heading "About Us"
- **AND** the right column SHALL show 3 feature rows: Fast Support
  (paper-plane icon), Happy Customers (smile icon), 24/7 Support
  (headphones icon)

#### Scenario: Feature row styling

- **GIVEN** a feature row is rendered
- **WHEN** the page loads
- **THEN** each feature row SHALL have a 70px circular orange icon
  (#f37121 bg, white text), a heading, and a description paragraph
- **AND** feature rows SHALL be stacked vertically with spacing

### Requirement: Testimonials section

The system SHALL render a testimonial carousel over a background image
with an orange overlay.

#### Scenario: Testimonials heading

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the orange eyebrow "Testimonials" in
  white and the heading "Happy Clients" in white
- **AND** the section background SHALL use a background image with an
  orange (#f37121) overlay

#### Scenario: Testimonial cards

- **GIVEN** the testimonials carousel is rendered
- **WHEN** the page loads
- **THEN** the carousel SHALL show testimonial cards, each with a
  round avatar photo, a person name, a role label, and a quote paragraph
- **AND** all text in the testimonial cards SHALL be white to contrast
  the orange overlay

### Requirement: Call-to-action section

The system SHALL render a centered CTA section encouraging registration.

#### Scenario: CTA content

- **GIVEN** the CTA section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Create an account and
  start Buy, Bid or Sell Now!"
- **AND** the section SHALL show a primary orange "Register" button

### Requirement: Footer

The system SHALL render a 4-column footer with logo, link widgets, and
a copyright bar.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a light gray background (#f8f9fa) with
  padding 4rem
- **AND** the footer SHALL show 4 columns: logo + description +
  "Learn More" link, Solutions (5 links), Services (5 links), Contact
  (5 links)
- **AND** each column heading SHALL be 16px black text

#### Scenario: Footer copyright

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL show a centered copyright bar at the bottom
- **AND** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Full page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Bidpoint app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections (Hero, Current Auctions, How It Works, About Us, Testimonials,
  CTA) in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Bidpoint — Auction Marketplace"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/bidpoint` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- bidpoint` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#f37121, #f8f9fa, #000, Muli) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `bidpoint-<n>`, Google Fonts link for Muli, lucide-react icons only)
