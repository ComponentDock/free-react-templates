# Template: Caliber (Business Agency)

## Purpose

Caliber is a single-page business/creative agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Classic" website template design
(https://colorlib.com/wp/template/classic/), built under a DIFFERENT name
(**Caliber**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Classic" — one-page business agency template
  (source: https://colorlib.com/wp/template/classic/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/classic/ (HTTP
  200, full rendered DOM + `style.css` (32KB) extracted). The preview serves
  a Bootstrap-based one-page site with jQuery plugins. The TEMPLATES.md
  screenshot (`classic-free-template.jpg`) confirms a corporate blue-gradient
  aesthetic with a dark hero overlay and device mockups.
- **Section order (1:1):**
  1. Navbar (transparent → dark on scroll): logo + nav (Home, Services,
     Portfolio, Team, Price, Blog, Contact) + utility icons (user, search,
     language selector).
  2. Hero (full-width image bg + dark overlay): h1 "We Are Provide Creative
     Business" + tagline quote + "Contact Now" CTA button.
  3. About (white bg): "We Offer Quick & Powerful Business Solution" heading
     + body text + "Learn More" button + device mockup illustration.
  4. Mission/Vision/Support tabs (gray bg): video thumbnail on left + tabbed
     panel (Our Mission / Our Vission / Our Support) with "View More" buttons
     on right.
  5. Services (white bg): 6 feature cards in 3x2 grid — Unique Design, Clean
     Layout, Well Responsive, Pro Developing, Well Documented, Quick
     Marketing — each with icon, title, description, "Read More" link.
  6. Skills (gray bg): "Our Professional Skill" heading + 6 circular progress
     charts (WebDesign 95%, Coding 85%, Developing 90%, Java Script 95%,
     Apps Design 85%, Graphics Script 90%) + illustration image.
  7. Portfolio (white bg, full-width): "Portfolio Project" heading + filter
     tabs (All, Graphics, UI/UX, Web Design, Coding, Developing, Photography)
     + 8 project image cards with hover overlay titles.
  8. Team (white bg): "Our expert team" heading + 4 member cards — Roberto
     Peo (SEO Expert), Jhon Doe (Web Developer), Jakia Khan (UI/UX
     Designer), Jack Kalis (Programer) — each with photo, skill bars, and
     social icons on hover.
  9. Pricing (gray bg): "Pricing Plan" heading + Monthly/Yearly toggle tabs +
     4 pricing cards (Basic $10, Premium $50 [highlighted], Business $80,
     Ultimate $100) with feature lists and "Purchase Now" buttons.
  10. Blog (white bg): "Latest Blog" heading + featured post (large image +
      title + excerpt) + 3 sidebar list items (thumbnail, title, date,
      excerpt).
  11. Counters (gray bg): 4 stat counters — Project Complete 1172, Happy
      Client's 1000, Total Client's 1200, Wining Award 1172 — with icons.
  12. Contact (white bg with bg image): "Contact Now" heading + form (Full
      Name, Phone, Email, Subject, Message, "Send Now" button) + contact info
      sidebar (address, phone, email) + social links.
  13. Footer (dark bg): brand name + 4 link columns (News, Company, Resources,
      Solutions) + social icons + copyright bar.

- **Design tokens extracted from the DOM + CSS:**
  - **Brand colors:** primary gradient #a1c4fd → #c2e9fb (light blue,
    horizontal linear gradient). Used on buttons, active nav indicator, price
    tab active state.
  - **Gray sections:** #f9f9f9 alternating with white (#ffffff).
  - **Text:** #4f4f4f (body), #898989 (muted), #ffffff (hero/footer).
  - **Accent (minimal):** #f7c336 (yellow).
  - **Footer:** dark background (near-black).
  - **Fonts:** Montserrat (headings), Roboto (body/UI), Satisfy (cursive
    accents).
  - **Button shape:** slightly rounded (border-radius 2–5px), gradient fill,
    blue box-shadow on hover.
  - **Price cards:** white bg, no radius default, 5px radius on hover.
  - **Hero:** full-width background image with dark semi-transparent overlay.

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/caliber-<n>/<w>/<h>`); icons → lucide-react
  (Lightbulb, Code, Monitor, TrendingUp, FileText, DollarSign, BarChart3,
  Globe, Palette, Smartphone, Users, Star, Mail, Phone, MapPin, Quote,
  Play, Search, Calendar, Award, Heart); Google Fonts (Montserrat + Roboto +
  Satisfy); repo-standard Navbar (dark-mode toggle + mobile menu) + Footer
  chrome.

Caliber lives in `apps/caliber` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Caliber",
anchor links to all page sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Caliber page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Caliber" and links to Home,
  Services, Portfolio, Team, Price, Blog and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the viewport is mobile-width (below md breakpoint)
- **WHEN** the hamburger menu icon is pressed
- **THEN** the mobile navigation menu SHALL expand/collapse

### Requirement: Hero section

The system SHALL render a hero section with a background image, dark overlay,
heading text, tagline, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a heading "We Are Provide Creative Business"
- **AND** a tagline quote "We Make Sure Best Business Solution For Our Client"
- **AND** a "Contact Now" CTA button linking to the contact section

### Requirement: About section

The system SHALL render an about section with a heading, description, and
illustration.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading "We Offer Quick & Powerful Business Solution"
- **AND** a body paragraph describing the business
- **AND** a "Learn More" button
- **AND** a device mockup illustration on the right

### Requirement: Mission/Vision/Support tabs

The system SHALL render a tabbed section with video thumbnail and
Mission/Vision/Support content panels.

#### Scenario: Tabbed content

- **GIVEN** the page is rendered
- **WHEN** the mission section is displayed
- **THEN** it SHALL show a video thumbnail on the left
- **AND** tabbed panels for Our Mission, Our Vission, and Our Support on the
  right
- **AND** each tab panel SHALL show a heading, body text, and "View More"
  button

#### Scenario: Tab switching

- **GIVEN** the mission section is displayed
- **WHEN** the user clicks a different tab
- **THEN** the active tab content SHALL switch to the selected panel

### Requirement: Services section

The system SHALL render a services section with six feature cards in a 3x2
grid.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain six feature cards: Unique Design, Clean Layout,
  Well Responsive, Pro Developing, Well Documented, Quick Marketing
- **AND** each card SHALL have an icon, title, description paragraph, and
  "Read More" link

### Requirement: Skills section

The system SHALL render a skills section with circular progress charts.

#### Scenario: Skills content

- **GIVEN** the page is rendered
- **WHEN** the skills section is displayed
- **THEN** it SHALL show a heading "Our Professional Skill"
- **AND** six circular progress indicators: WebDesign (95%), Coding (85%),
  Developing (90%), Java Script (95%), Apps Design (85%), Graphics Script
  (90%)

### Requirement: Portfolio section

The system SHALL render a portfolio section with filterable project cards.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show a heading "Portfolio Project"
- **AND** filter tabs: All, Graphics, UI/UX, Web Design, Coding, Developing,
  Photography
- **AND** eight project cards with hover overlay titles

#### Scenario: Portfolio filtering

- **GIVEN** the portfolio section is displayed
- **WHEN** the user clicks a filter tab
- **THEN** only projects matching the selected category SHALL be visible

### Requirement: Team section

The system SHALL render a team section with member cards featuring hover
effects and skill bars.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show a heading "Our expert team"
- **AND** four team member cards: Roberto Peo (SEO Expert), Jhon Doe (Web
  Developer), Jakia Khan (UI/UX Designer), Jack Kalis (Programer)
- **AND** each card SHALL show photo, name, role, skill bars, and social
  links on hover

### Requirement: Pricing section

The system SHALL render a pricing section with toggleable monthly/yearly
plans.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show a heading "Pricing Plan"
- **AND** Monthly/Yearly toggle tabs
- **AND** four pricing cards: Basic ($10), Premium ($50, highlighted),
  Business ($80), Ultimate ($100)
- **AND** each card SHALL have a feature list and "Purchase Now" button

#### Scenario: Pricing tab switching

- **GIVEN** the pricing section is displayed
- **WHEN** the user clicks "Yearly"
- **THEN** the prices SHALL update to show yearly rates
- **AND** the Premium card SHALL remain highlighted

### Requirement: Blog section

The system SHALL render a blog section with a featured post and sidebar
list items.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a heading "Latest Blog"
- **AND** one featured blog post (large image, title, excerpt)
- **AND** three sidebar blog list items (thumbnail, title, date, excerpt)

### Requirement: Counters section

The system SHALL render a counters section with animated stat numbers.

#### Scenario: Counters content

- **GIVEN** the page is rendered
- **WHEN** the counters section is displayed
- **THEN** it SHALL show four stat counters: Project Complete (1172), Happy
  Client's (1000), Total Client's (1200), Wining Award (1172)
- **AND** each counter SHALL have an icon above the number

### Requirement: Contact section

The system SHALL render a contact section with a form and contact info.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a heading "Contact Now"
- **AND** a form with fields: Full Name, Phone Number, Email, Subject,
  Message
- **AND** a "Send Now" submit button

#### Scenario: Contact info

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show contact details: address, phone number, email
- **AND** social media links (Twitter, Skype, Instagram)

### Requirement: Footer

The system SHALL render a footer with link columns, social icons, and a
copyright line linking Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name "Caliber" and four link columns:
  News, Company, Resources, Solutions
- **AND** social media icons
- **AND** a copyright line with a link to https://www.componentdock.com/

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Caliber app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Caliber — Business Agency Template"

## Verification checklist

- [ ] Navbar renders with correct links and dark-mode toggle
- [ ] Hero shows heading, tagline, and CTA button
- [ ] About section shows heading, text, button, and illustration
- [ ] Mission/Vision/Support tabs switch content correctly
- [ ] Services section shows 6 feature cards
- [ ] Skills section shows 6 circular progress charts
- [ ] Portfolio section shows filterable grid of 8 projects
- [ ] Team section shows 4 member cards with hover effects
- [ ] Pricing section toggles between monthly and yearly
- [ ] Blog section shows featured post + 3 sidebar items
- [ ] Counters section shows 4 animated stats
- [ ] Contact section renders form and contact info
- [ ] Footer has link columns, social icons, and Component Dock link
- [ ] Dark mode toggle works across all sections
- [ ] Mobile responsive at all breakpoints
- [ ] All placeholder images use seeded picsum URLs
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
