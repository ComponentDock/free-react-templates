# Template: Civicharter (Politics / Government)
<!-- prep-status: shipped-as=civicpulse -->
> **SHIPPED-UNDER** — the ColorLib `politics` design this prep describes already
> ships as `apps/civicpulse` (<https://civicpulse.free.componentdock.com>).
> Do not scaffold `apps/civicharter`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-civicpulse/spec.md`.

## Purpose

Civicharter is a single-page political/party website in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Politics" free
template (source: https://colorlib.com/wp/template/politics/, preview:
https://preview.colorlib.com/theme/politics/), built under a DIFFERENT name
(**Civicharter**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 multi-section political site with Poppins font,
a dark overlay hero with fullscreen banner image, a countdown strip, 3 service
cards, a split about section, a photo gallery, animated counters on a parallax
background, an accordion + video section, a brand logo carousel, a 4-card blog
grid, and a dark footer with newsletter and Instagram feed. The primary brand
color is `#3898f8` (blue). The layout is a classic single-page scrolling design
with section-gap spacing (120px padding top/bottom).

## Design Tokens

| Token                | Value              | Source                                 |
|----------------------|--------------------|----------------------------------------|
| Font family          | `"Poppins", sans-serif` | `@font-face` + body CSS            |
| Brand color          | `#3898f8`          | `.primary-btn`, `.countdown-right`, `.single-counter h2`, accordion open state, link hover, pagination active, widget titles |
| Body text color      | `#777`             | `body { color: #777 }`                 |
| Heading color        | `#222`             | `h1-h6 { color: #222 }`               |
| Light background     | `#f9f9ff`          | `.countdown-wrap`, `.home-about-area`, `.brand-wrap`, `.testimonial-area`, `.team-area`, `.blog-page` |
| Dark footer bg       | `#04091e`          | `.footer-area { background: #04091e }` |
| Header top bar bg    | `#222`             | `.header-top { background-color: #222 }` |
| Banner overlay       | `rgba(0,0,0,0.5)` | `.banner-area .overlay { background: #000; opacity: .5 }` |
| Counter overlay      | `rgba(0,0,0,0.7)` | `.counter-area .overlay-bg`            |
| Video overlay        | `rgba(0,0,0,0.7)` | `.feedback-right .overlay-bg`          |
| Primary button       | bg `#3898f8`, radius `25px`, white text | `.primary-btn` |
| Banner button        | bg `#3898f8`, radius `0`, white text, hover: transparent + white border | `.header-btn` |
| Selection color      | `#3898f8`          | `::selection { background-color: #3898f8 }` |
| Section gap          | `120px`            | `.section-gap { padding: 120px 0 }`    |
| Blog date badge      | bg `#000`, white text | `.single-blog .date`                 |
| Footer social icons  | bg `#111`, hover `#3898f8` | `.footer-social a`                 |
| Accordion open       | bg `#3898f8`, white text | `.state-open .accordion-heading`  |
| Footer input radius  | `20px` (newsletter) | `.single-footer-widget input { border-radius: 20px }` |

## Section Order

The template has 11 distinct sections rendered in this order:

1. **TopBar** — dark bar with social icons (left) + phone/email (right)
2. **Navbar** — fixed white header with logo + nav links (Home, About, Service, Team, Blog dropdown, Elements, Contact)
3. **Hero/Banner** — fullscreen parallax banner image with dark overlay, centered text: subtitle "Don't look further, This is our Leader", h1 "Support Our Party", paragraph, "Get Started" button
4. **Countdown** — split row: left side has "Election is knocking at door" heading + subtext; right side has a blue `#3898f8` countdown clock with days/hours/minutes/seconds
5. **Services** — section header "What we Offer to our Supporters" + 3 image cards: "Conduct Campaign", "Generate Member", "Energy Saving Policy" (each with image + title + description)
6. **About** — split layout: left side is a background image (48% width, CSS `::after`), right side has heading "Who we are to Serve the nation" + paragraph + 2 feature boxes ("Expert Services" with diamond icon, "Great Support" with phone icon)
7. **Gallery** — section header "Our Gallery Archive" + 4 images in asymmetric grid (1 large 8-col + 1 small 4-col on top row, 2 equal 6-col on bottom row)
8. **Counters** — dark parallax background with 4 circular animated counters: "2K+ Projects Completed", "5.5K Total Employees", "959 Happy Clients", "367 Tickets Submited"
9. **Feedback/Goals** — section header "Goals to Achieve for the leadership" + left: 4 accordion items (Success, Info, Danger, Warning) + right: video play button on dark overlay background
10. **Brands** — grayscale logo carousel (5 brand logos), colorized on hover
11. **Blog** — section header "Latest From Our Blog" + 4 blog cards (image + date badge + title + excerpt + likes/comments meta)
12. **Footer** — dark background `#04091e`: 3-column layout (Top Products links | Newsletter with email input + subscribe | Instagram feed 3x3 grid), bottom bar with copyright + social icons

## Requirements

### Feature: Civicharter Political Website Template

Feature: Civicharter - Political party / government website

Background:
- **GIVEN** the user opens the Civicharter template
- **THEN** the page loads with Poppins font family

**--- TopBar ---**

#### Scenario: TopBar displays contact info and social links

- **GIVEN** the user is on any page
- **THEN** a dark top bar is visible at the very top
- **AND** the top bar shows social media icons on the left
- **AND** the top bar shows a phone number and email on the right

**--- Navbar ---**

#### Scenario: Navbar shows navigation links

- **GIVEN** the user is on the home page
- **THEN** a fixed white navigation bar is visible
- **AND** it contains a logo image on the left
- **AND** it contains nav links: Home, About, Service, Team, Blog, Elements, Contact
- **AND** the Blog link has a dropdown with "Blog Home" and "Blog Single"

#### Scenario: Navbar becomes styled on scroll

- **GIVEN** the user scrolls down the page
- **THEN** the navbar gains a box-shadow effect
- **AND** the navbar background becomes semi-transparent white

**--- Hero/Banner ---**

#### Scenario: Hero banner displays campaign message

- **GIVEN** the user views the hero section
- **THEN** a fullscreen banner image is displayed with a dark overlay
- **AND** the subtitle reads "Don't look further, This is our Leader"
- **AND** the main heading reads "Support Our Party"
- **AND** a "Get Started" button is visible

**--- Countdown ---**

#### Scenario: Countdown section shows election countdown

- **GIVEN** the user scrolls to the countdown section
- **THEN** a split layout is displayed
- **AND** the left side shows "Election is knocking at door"
- **AND** the right side shows a countdown with days, hours, minutes, seconds
- **AND** the countdown background is brand blue (#3898f8)

**--- Services ---**

#### Scenario: Services section displays three service cards

- **GIVEN** the user scrolls to the services section
- **THEN** the heading reads "What we Offer to our Supporters"
- **AND** three service cards are displayed in a row
- **AND** each card has an image, title, and description
- **AND** the service titles are "Conduct Campaign", "Generate Member", "Energy Saving Policy"

#### Scenario: Service card hover effect

- **GIVEN** the user hovers over a service card
- **THEN** the card image scales up slightly
- **AND** the card title color changes to brand blue

**--- About ---**

#### Scenario: About section shows split layout with features

- **GIVEN** the user scrolls to the about section
- **THEN** a left-side background image is displayed
- **AND** the right side shows "Who we are to Serve the nation"
- **AND** two feature boxes are shown: "Expert Services" and "Great Support"
- **AND** each feature box has an icon, title, and description

**--- Gallery ---**

#### Scenario: Gallery section shows image grid

- **GIVEN** the user scrolls to the gallery section
- **THEN** the heading reads "Our Gallery Archive"
- **AND** 4 gallery images are displayed in a 2-row asymmetric grid
- **AND** images are clickable (lightbox-ready)

**--- Counters ---**

#### Scenario: Counters section shows animated statistics

- **GIVEN** the user scrolls to the counters section
- **THEN** a dark parallax background is displayed
- **AND** 4 counters are shown: "2K+ Projects Completed", "5.5K Total Employees", "959 Happy Clients", "367 Tickets Submited"
- **AND** each counter has a circular animated indicator

**--- Feedback/Goals ---**

#### Scenario: Goals section shows accordion and video

- **GIVEN** the user scrolls to the goals section
- **THEN** the heading reads "Goals to Achieve for the leadership"
- **AND** a 4-item accordion is displayed on the left (Success, Info, Danger, Warning)
- **AND** a video play button is displayed on the right over a dark overlay

#### Scenario: Accordion items expand on click

- **GIVEN** the user clicks an accordion heading
- **THEN** the accordion item expands to show its content
- **AND** the heading background turns brand blue
- **AND** the heading text turns white

**--- Brands ---**

#### Scenario: Brands section shows logo carousel

- **GIVEN** the user scrolls to the brands section
- **THEN** a row of brand logos is displayed
- **AND** the logos are grayscale by default
- **AND** hovering a logo restores its full color

**--- Blog ---**

#### Scenario: Blog section shows four blog cards

- **GIVEN** the user scrolls to the blog section
- **THEN** the heading reads "Latest From Our Blog"
- **AND** 4 blog cards are displayed in a row
- **AND** each card has an image, date badge, title, excerpt, and likes/comments count

#### Scenario: Blog card hover effect

- **GIVEN** the user hovers over a blog card
- **THEN** the card image scales up slightly
- **AND** the card title color changes to brand blue

**--- Footer ---**

#### Scenario: Footer shows links, newsletter, and social

- **GIVEN** the user scrolls to the footer
- **THEN** a dark background footer is displayed
- **AND** it contains a "Top Products" link list
- **AND** it contains a newsletter section with email input and subscribe button
- **AND** it contains an Instagram feed grid
- **AND** it contains social media icon links
- **AND** a copyright line includes a link to Component Dock

#### Scenario: Newsletter form interaction

- **GIVEN** the user types an email in the newsletter input
- **AND** clicks the "Subscribe" button
- **THEN** the form attempts to submit (no page reload)

## Verification Checklist

- [ ] TopBar renders with social icons and contact info on dark background
- [ ] Navbar is fixed, white, with logo + full nav including Blog dropdown
- [ ] Navbar gains shadow on scroll
- [ ] Hero banner: fullscreen image, dark overlay, heading, subtitle, CTA button
- [ ] Countdown strip: split layout, blue countdown numbers on right
- [ ] Services: 3 cards with images, hover scale effect
- [ ] About: split layout with bg image left, text + 2 feature boxes right
- [ ] Gallery: 4 images in asymmetric 2-row grid
- [ ] Counters: dark parallax bg, 4 circular counters with animated numbers
- [ ] Feedback/Goals: accordion on left (4 items, expandable), video play on right
- [ ] Brands: grayscale logo carousel, color on hover
- [ ] Blog: 4 cards with image, date badge, title, meta
- [ ] Footer: dark bg, 3-column layout (links, newsletter, Instagram), social icons
- [ ] Footer copyright links to Component Dock
- [ ] All hover effects work (service cards, blog cards, accordion, brands)
- [ ] Responsive: sections stack on mobile
- [ ] No ColorLib references in app code
- [ ] Placeholder images from picsum.photos used (deterministic seeds)
- [ ] Google Fonts Poppins loaded via index.html link
