# Template: SkyCrew (Construction Company Landing)

## Purpose

SkyCrew is a single-page construction company template — a faithful React
recreation of the ColorLib free "Constructioncompany" template
(preview: https://preview.colorlib.com/theme/constructioncompany/ —
construction/building services landing), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source mapping:
- **ColorLib source:** "Constructioncompany"
  (https://colorlib.com/wp/template/constructioncompany/)
- **Preview URL:** https://preview.colorlib.com/theme/constructioncompany/
  (HTTP 200, reachable; title: "Construction Company - Professional Building Services")

Design tokens captured from the live preview CSS (`assets/css/style.css`):

- Brand orange `#ff5f13` (buttons, preloader ring, hover states, CTA backgrounds,
  boxed-btn borders), secondary dark navy `#0b1c39` / `#0e132a` (headings),
  accent navy `#1f2b7b` (links, secondary buttons, unordered-list bullets)
- White content backgrounds, light gray `#f7f7fd` section backgrounds
- Typeface: **Barlow** (400/500/600/700/800/900) + **Teko** (300/400/500/600/700)
  — both via Google Fonts `<link>`
- Teko used for large section headings ("Our Services", "Who we are", etc.) —
  uppercase, 70px desktop / 40px mobile, weight 700
- Barlow used for body text (16px, line-height 24px) and nav/labels
- Button style: `.btn` — orange `#ff5f13` background, white text, 5px border-radius,
  uppercase, letter-spacing 1px, padding 25px 22px, hover slide-in via `::before`
  `#e25311`; `.boxed-btn` — white bg, orange text, 1px orange border, uppercase,
  letter-spacing 3px, hover fills orange; `.white-btn` — white bg, dark text `#161e46`,
  orange hover fill
- Hero: dark overlay gradient `rgba(2,8,52,0.75)` to `rgba(2,8,52,0.15)` over
  construction site photo, full-height slider with fade transitions
- Section headings use the "big text behind" pattern: large Teko heading in front
  with a ghost/stroke text span (`-webkit-text-stroke: 1px #f6f7f8`,
  `text-fill-color: transparent`) behind it for depth
- Services section: 3-column cards with images, overlay gradient, service icons
- Portfolio/gallery: tabbed filter (Show all / Interior / Recent / Big building / Park),
  2-column grid, hover overlay
- CTA section: dark photo background with orange-tinted overlay, chat icon, description,
  "Contact Us" button
- Counter section: 3 animated counters (34 / 76 / 08) with labels
- Team section: 3 team members with photos and roles (UX Designer, Ethan Welch)
- Testimonials: carousel with quote marks (orange stroke), author name + role
- Blog section: 3 blog cards with date badge, category tag, title, "Read more" link
- Footer: 4-column layout (logo + newsletter signup, Quick Links, Contact, Newsletter),
  dark background, copyright with Colorlib credit (replaced with Component Dock)

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

SkyCrew lives in `apps/skycrew` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky navbar with a top info bar (phone, email, hours,
social icons) and a bottom nav bar with the site name "SkyCrew", section links
(Home, About, Projects, Services, Blog, Contact), and a "Contact Now" CTA button.
On mobile, a hamburger toggle opens a mobile menu.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "SkyCrew" linking to `#home`
- **AND** it SHALL show links to Home, About, Projects, Services, Blog, and Contact
- **AND** it SHALL show a "Contact Now" button in the nav

#### Scenario: Top info bar

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed (desktop only)
- **THEN** it SHALL show phone number, email, and business hours
- **AND** it SHALL show social media icon links (Twitter/X, Facebook, LinkedIn, Instagram)

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on mobile
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero slider

The system SHALL render a full-height hero slider with dark overlay background images,
large Teko uppercase headlines ("ADVANCED CONSTRUCTION"), subtitle text, and a
"OUR SERVICES" link. Two slides with fade transitions.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show the headline "ADVANCED CONSTRUCTION" in large uppercase Teko font
- **AND** it SHALL show a subtitle with a small orange line accent
- **AND** it SHALL show a "OUR SERVICES" link/button

#### Scenario: Slider navigation

- **GIVEN** the hero slider is visible
- **WHEN** the user interacts with slide controls
- **THEN** the slider SHALL transition between slides with a fade effect

### Requirement: Services section

The system SHALL render a "Our Services" section with a large Teko heading
("OUR SERVICES") with ghost text behind, and 3 service cards in a row.
Each card has an image, service name, description text, and a "Read More" link.

#### Scenario: Services display

- **GIVEN** the page is rendered
- **WHEN** the services section is visible
- **THEN** it SHALL show the heading "Our Services" with decorative ghost text
- **AND** it SHALL show 3 service cards with images, titles, descriptions, and "Read More" links

### Requirement: About section

The system SHALL render a split "Who we are" section with the heading "About us",
a paragraph of introductory text, a "Read More" link, a "1994 Since" counter badge,
and a right-side image with an overlay caption.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is visible
- **THEN** it SHALL show the heading "Who we are" / "About us" with ghost text
- **AND** it SHALL show introductory paragraph text
- **AND** it SHALL show a "Read More" link
- **AND** it SHALL show a "1994 Since" badge

### Requirement: Projects gallery

The system SHALL render a "Our Projects" section with tabbed filter buttons
(Show all, Interior, Recent, Big building, Park) and a grid of project cards.
Each card has an image with hover overlay, project title, and category label.

#### Scenario: Gallery tabs

- **GIVEN** the page is rendered
- **WHEN** the projects gallery is visible
- **THEN** it SHALL show 5 tab buttons: Show all, Interior, Recent, Big building, Park
- **AND** "Show all" SHALL be active by default

#### Scenario: Gallery filtering

- **GIVEN** the projects gallery is visible
- **WHEN** the user clicks a tab button
- **THEN** that tab SHALL become active and the gallery SHALL filter accordingly

#### Scenario: Project cards

- **GIVEN** the projects gallery is visible
- **WHEN** cards are displayed
- **THEN** each card SHALL show a project image, title, and category text

### Requirement: CTA / Chat section

The system SHALL render a "Let's talk with us" section with a dark photo background,
a chat bubble icon, paragraph text, and a "Contact Us" button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is visible
- **THEN** it SHALL show the heading "Let's talk with us"
- **AND** it SHALL show descriptive text and a "Contact Us" button

### Requirement: Counter section

The system SHALL render a counter row with 3 animated number counters
(34 / 76 / 08) each labeled "Machinery / Tools".

#### Scenario: Counter display

- **GIVEN** the page is rendered
- **WHEN** the counter section is visible
- **THEN** it SHALL show 3 counters with the values 34, 76, and 08
- **AND** each counter SHALL have "Machinery" and "Tools" labels

### Requirement: Team section

The system SHALL render a "Our team" section with the heading "Experts" and
3 team member cards. Each card has a photo, role, and name (e.g. "Ethan Welch").

#### Scenario: Team display

- **GIVEN** the page is rendered
- **WHEN** the team section is visible
- **THEN** it SHALL show the heading "Our team" / "Experts"
- **AND** it SHALL show 3 team member cards with photos, roles, and names

### Requirement: Testimonials section

The system SHALL render a "Testimonial" section with the heading "Feedback"
and a carousel of testimonial cards. Each card has a quote icon (orange stroke),
a paragraph of testimonial text, the author's name and role.

#### Scenario: Testimonial display

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is visible
- **THEN** it SHALL show the heading "Testimonial" / "Feedback"
- **AND** it SHALL show at least 1 testimonial card with quote icon, text, author name and role

### Requirement: Blog section

The system SHALL render a "Latest News" section with the heading "Our Blog"
and 2-3 blog cards. Each card has a date badge, category tag, title, and
"Read more" link.

#### Scenario: Blog display

- **GIVEN** the page is rendered
- **WHEN** the blog section is visible
- **THEN** it SHALL show the heading "Latest News" / "Our Blog"
- **AND** it SHALL show blog cards with date, category, title, and "Read more" link

### Requirement: Footer

The system SHALL render a dark footer with a logo, newsletter signup form
(email input + button), Quick Links (About, Services, Projects, Contact Us),
Contact information (address, phone, cell), and a copyright line linking
to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL show a newsletter signup form
- **AND** it SHALL show Quick Links (About, Services, Projects, Contact Us)
- **AND** it SHALL show contact information
- **AND** the copyright SHALL link to https://www.componentdock.com/
