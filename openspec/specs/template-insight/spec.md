# Spec: Insight — Consulting Company Landing Template

## Purpose

Recreate the ColorLib "Buson" consulting company landing page as a modern
React 19 + Tailwind CSS 4 + TypeScript single-page template named "Insight".
The template provides a full-featured consulting company website with header,
hero slider, team, trusted section, services, cases, blog, callback form,
and footer sections.

- **ColorLib source:** "Buson"
- **Source URL:** https://colorlib.com/wp/template/buson/
- **Preview URL:** https://preview.colorlib.com/theme/buson/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/buson-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Framework heritage:** Bootstrap 5 (structure), Owl Carousel (replaced by custom React carousel), Magnific Popup (lightbox — replace with React lightbox), SlickNav (mobile menu — replace with React hamburger), Nice Select (custom select — replace with native or React select)

## Design tokens (from live preview CSS, verified 2026-09-16)

| Token         | Value               | Notes                                                    |
| ------------- | ------------------- | -------------------------------------------------------- |
| Brand primary | `#ff656a`           | Coral/salmon red; 34 occurrences; buttons, accents       |
| Dark navy     | `#002d5b`           | Hero heading color, CTA section bg (4 uses)              |
| Secondary dark| `#191d34`           | Body text, headings (11 uses)                            |
| Light lavender| `#f9f9ff`           | Section alternating bg (23 uses)                         |
| Footer bg     | `#f8fafe`           | Very light blue-gray footer background                   |
| Muted text    | `#999999`           | Secondary/muted text (10 uses)                           |
| Blue accent   | `#415094`           | Links, secondary accent (7 uses)                         |
| Cyan accent   | `#4cd3e3`           | Hover/secondary accents (5 uses)                         |
| Font          | Poppins 400/500/600/700/900 | Google Fonts; body 16px/1.6                     |
| Button bg     | `#ff656a`           | Coral red, uppercase, 14px, weight 500, letter-spacing 1px |
| Button hover  | `#e6373d`           | Darker red on hover (via scaleX animation)               |
| Button radius | 5px                 | Subtle rounded corners                                   |
| Hero heading  | 700px (desktop)     | Weight 900, color `#002d5b`, uppercase, line-height 1.2 |
| Trusted card  | `rgba(255,255,255,0.8)` | Semi-transparent white overlay on image              |
| Request CTA bg| `#002d5b`           | Dark navy full-width section for callback form           |
| Card radius   | 5px, 8px, 12px      | Various card border-radius values                        |
| Stat counter  | `#ff656a`           | Counter numbers in brand color                           |

## Section structure (DOM order from live preview)

| #  | Section            | Key content                                                 |
| -- | ------------------ | ----------------------------------------------------------- |
| 1  | Header Top         | Address (65/A, 17th floor, Kings land, New York) · email (info@consulting.com) · social icons |
| 2  | Navbar             | Logo "Insight" · Home · About · Services · Cases · Blog · Contact · CTA button |
| 3  | Hero Slider        | 2-slide carousel · "We help you to grow your business" h1 · "Contact Now" CTA · Background image |
| 4  | Team Profiles      | 3 circular team member photos with names and roles          |
| 5  | We're Trusted      | Left: background image · Right: semi-transparent white card with "What we do for you" heading + description |
| 6  | Our Services       | "Our Services" heading · 3 service cards: Strategic Planning, Trades & Stocks, Audit & Assurance · Icons · "More Services" button |
| 7  | Completed Cases    | "Completed Cases" heading · 2-column: left image with stat counters, right "Marketing Strategy" text blocks |
| 8  | Recent News        | "Our Recent News" heading · 3 blog cards with images, titles, dates, "See more" links |
| 9  | Request Callback   | Dark navy bg · "Request for Call Back" heading · Form with Name, Phone inputs · Submit button |
| 10 | Footer             | 4 columns: Logo + description · Company links · Services links · Get in Touch (phone, email, address) |
| 11 | Footer Bottom      | Copyright bar with "Component Dock" link                   |

## Requirements

### Requirement: All sections render in correct order

The template SHALL display 11 sections in the correct order: HeaderTop, Navbar, HeroSlider, TeamProfiles, WeAreTrusted, OurServices, CompletedCases, RecentNews, RequestCallback, Footer, FooterBottom.

#### Scenario: Page loads with all sections

- **GIVEN** the page loads
- **THEN** all 11 sections are visible in the correct order

### Requirement: Header top displays contact info

The HeaderTop SHALL display a physical address and email address with social media icons.

#### Scenario: Header top renders contact details

- **GIVEN** the HeaderTop renders
- **THEN** a physical address is visible
- **AND** an email address is visible
- **AND** social media icons are displayed

### Requirement: Navbar displays navigation and logo

The navbar SHALL display the logo "Insight", navigation links (Home, About, Services, Cases, Blog, Contact), and a CTA button. The navbar SHALL have a white background with dark text.

#### Scenario: Navbar renders all nav items

- **GIVEN** the navbar renders
- **THEN** "Insight" logo is visible
- **AND** Home, About, Services, Cases, Blog, Contact links are visible
- **AND** a CTA button is displayed

### Requirement: Hero slider displays heading and CTA

The hero slider SHALL display a background image with "We help you to grow your business" heading and a "Contact Now" CTA button. The hero SHALL support 2 slides with auto-rotation.

#### Scenario: Hero renders heading and CTA

- **GIVEN** the hero slider renders
- **THEN** "We help you to grow your business" heading is visible
- **AND** a "Contact Now" button is displayed

#### Scenario: Hero has background image

- **GIVEN** the hero slider renders
- **THEN** a background image is displayed behind the text

### Requirement: Team profiles section shows 3 members

The team profiles section SHALL display 3 circular team member photos with names and roles.

#### Scenario: Team profiles renders 3 members

- **GIVEN** the team profiles section renders
- **THEN** 3 team member cards are displayed
- **AND** each card has a circular photo, name, and role

### Requirement: We're trusted section with overlay card

The We're Trusted section SHALL display a background image on the left with a semi-transparent white overlay card on the right containing "What we do for you" heading and a description paragraph.

#### Scenario: Trusted section renders overlay card

- **GIVEN** the We're Trusted section renders
- **THEN** a background image is visible
- **AND** a semi-transparent white card overlays the image
- **AND** "What we do for you" heading is visible inside the card

### Requirement: Our Services shows 3 service cards

The Our Services section SHALL display "Our Services" heading and 3 service cards (Strategic Planning, Trades & Stocks, Audit & Assurance), each with an icon, title, description, and a "Learn More" link. A "More Services" button SHALL appear below.

#### Scenario: Services renders 3 cards

- **GIVEN** the Our Services section renders
- **THEN** "Our Services" heading is visible
- **AND** 3 service cards are displayed
- **AND** "Strategic Planning" card is visible
- **AND** "Trades & Stocks" card is visible
- **AND** "Audit & Assurance" card is visible
- **AND** a "More Services" button is present

### Requirement: Completed Cases section with stats

The Completed Cases section SHALL display "Completed Cases" heading, a left column with an image and stat counters, and a right column with "Marketing Strategy" text blocks.

#### Scenario: Completed Cases renders content

- **GIVEN** the Completed Cases section renders
- **THEN** "Completed Cases" heading is visible
- **AND** stat counters are displayed
- **AND** "Marketing Strategy" content is visible

### Requirement: Recent News shows 3 blog cards

The Recent News section SHALL display "Our Recent News" heading and 3 blog post cards, each with an image, title, date, and "See more" link.

#### Scenario: Recent News renders 3 cards

- **GIVEN** the Recent News section renders
- **THEN** "Our Recent News" heading is visible
- **AND** 3 blog cards are displayed
- **AND** each card has an image, title, and date

### Requirement: Request Callback form

The Request Callback section SHALL display on a dark navy (`#002d5b`) background with "Request for Call Back" heading and a form with Name and Phone input fields.

#### Scenario: Callback form renders inputs

- **GIVEN** the Request Callback section renders
- **THEN** "Request for Call Back" heading is visible
- **AND** a Name input field is present
- **AND** a Phone input field is present
- **AND** the background is dark navy

### Requirement: Footer with 4 columns

The footer SHALL have a light background with 4 columns: Logo + description, Company links, Services links, and Get in Touch (phone, email, address). A copyright bar with "Component Dock" link SHALL appear at the bottom.

#### Scenario: Footer renders all columns

- **GIVEN** the footer renders
- **THEN** 4 columns are visible
- **AND** "Company" column has navigation links
- **AND** "Services" column has service links
- **AND** "Get in Touch" column has contact information
- **AND** a copyright bar with "Component Dock" link is present

### Requirement: Responsive design

The template SHALL be fully responsive. On mobile, the navbar SHALL collapse into a hamburger menu, columns SHALL stack vertically, and the hero SHALL adapt to smaller viewports.

#### Scenario: Mobile view adapts layout

- **GIVEN** the viewport is 375px wide
- **THEN** the navbar shows a hamburger menu
- **AND** multi-column sections stack vertically
- **AND** all content remains readable

### Requirement: Footer links to Component Dock

The footer SHALL include a link to `https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: Footer has Component Dock link

- **GIVEN** the footer renders
- **THEN** a link to `https://www.componentdock.com/` is present
- **AND** the link text includes "Component Dock"

## Verification checklist

- [ ] All 11 sections render in correct order
- [ ] HeaderTop has address and email
- [ ] Navbar has logo, nav links, and CTA
- [ ] Hero slider has heading, CTA, and background image
- [ ] Team profiles show 3 circular photos
- [ ] We're Trusted has overlay card with heading
- [ ] Our Services shows 3 service cards
- [ ] Completed Cases has stats and marketing content
- [ ] Recent News shows 3 blog cards
- [ ] Request Callback form has Name and Phone inputs
- [ ] Footer has 4 columns and Component Dock link
- [ ] Responsive on mobile (375px)
- [ ] Brand color `#ff656a` used for buttons and accents
- [ ] Font is Poppins via Google Fonts
- [ ] No ColorLib references in app code
- [ ] `packages/ui` components reused where applicable
- [ ] Tests pass with 100% coverage
