# Template: Solvox (Digital Innovation Agency)
<!-- prep-status: shipped-as=innovex -->
> **SHIPPED-UNDER** — the ColorLib `eroo` design this prep describes already
> ships as `apps/innovex` (<https://innovex.free.componentdock.com>).
> Do not scaffold `apps/solvox`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-innovex/spec.md`.

## Purpose

Recreation of ColorLib **Eroo** — a dark-themed digital innovation / creative
agency website template.

- **Source:** https://colorlib.com/wp/template/eroo/
- **Preview:** https://preview.colorlib.com/theme/eroo/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `solvox` (apps/solvox, @free-react-templates/solvox)

## Design tokens (extracted from preview CSS)

| Token               | Value                                    | Notes                                              |
| ------------------- | ---------------------------------------- | -------------------------------------------------- |
| Brand accent        | `#cdb30c` (gold)                         | Active service cards, counter icon highlights       |
| Dark surface        | `#1a1a1a`                                | Service card backgrounds                            |
| Darker surface      | `#232429`                                | Portfolio section bg                                |
| Darkest surface     | `#141b25`                                | Navbar / general dark areas                         |
| Hero overlay        | `rgba(0,0,0,0.5)`                       | Semi-transparent over hero images                   |
| Button primary      | `#007bff` (blue)                         | CTA buttons                                         |
| Light section bg    | `#f4f5f9` / `#f7f7f7`                   | FAQ, team, testimonials sections                    |
| Text on dark         | `#fff` / `rgba(255,255,255,0.8)`        | Headings and body on dark backgrounds               |
| Text on light        | `#212529`                                | Body text on light backgrounds                      |
| Muted text           | `#999` / `#b3b3b3`                      | Secondary / caption text                            |
| Heading font         | `"Roboto Condensed", Arial, sans-serif`  | h1-h3 headings                                      |
| Body font            | `"Roboto", Arial, sans-serif`            | Paragraphs, nav, buttons                            |
| Border radius (card) | `5px`                                    | Service cards, general card shapes                  |
| Border radius (btn)  | `0.25rem`                                | Buttons                                             |
| Shadow (card)        | `0 2px 25px -16px rgba(0,0,0,0.26)`     | Subtle card lift                                    |
| Section spacing      | ~`80px` vertical padding                 | Standard ftco-section padding                       |

## Requirements

### Navbar

#### Scenario: Sticky navbar with logo and navigation links

- **GIVEN** the user loads the page
- **THEN** a sticky navbar is visible at the top
- **AND** it contains the logo text "Solvox"
- **AND** navigation links: Home, About, Pricing, Portfolio, Blog, Contact
- **AND** the navbar has a dark background (#141b25)
- **AND** the navbar becomes fixed on scroll

### Hero

#### Scenario: Full-height hero slider with background images

- **GIVEN** the user loads the page
- **THEN** a full-height hero section is displayed
- **AND** it contains the heading "Digital Innovation Company that Creates Solution"
- **AND** it contains a subheading "Professional & Creative Design Solution"
- **AND** there is a paragraph of descriptive text
- **AND** there are two CTA buttons: "Get Started" and "View Portfolio"
- **AND** the hero has a dark overlay over the background image
- **AND** the slider auto-rotates between slides

#### Scenario: Hero CTA buttons navigate correctly

- **GIVEN** the hero section is visible
- **WHEN** the user clicks "Get Started"
- **THEN** the page scrolls to the services or contact section
- **WHEN** the user clicks "View Portfolio"
- **THEN** the page scrolls to the portfolio section

### Services

#### Scenario: Services section with 6 service cards

- **GIVEN** the user scrolls to the services section
- **THEN** the heading reads "We Shape The Perfect Solutions"
- **AND** there is a description paragraph below the heading
- **AND** 6 service cards are displayed in a grid
- **AND** the service cards are: Digital Products, Online Marketing, Graphic Design,
Application Development, Web Development, UX/UI Design
- **AND** each card has an icon, title, and short description
- **AND** the section has a dark textured background
- **AND** non-active cards have background #1a1a1a
- **AND** the active/hovered card has background #cdb30c (gold)

#### Scenario: Service card hover interaction

- **GIVEN** the services section is visible
- **WHEN** the user hovers over a service card
- **THEN** the card background transitions to the gold accent color #cdb30c
- **AND** the card text color changes to dark for contrast

### About

#### Scenario: About section with background image and text overlay

- **GIVEN** the user scrolls to the about section
- **THEN** the heading reads "Highest Creative Standards"
- **AND** there is a "Welcome to Solvox" label above the heading
- **AND** there are two columns: image on the left, text on the right
- **AND** the section has a background image with overlay
- **AND** the text describes the company's creative approach
- **AND** there is a CTA button ("Learn More" or similar)

### Counter

#### Scenario: Animated counter statistics

- **GIVEN** the user scrolls to the counter section
- **THEN** 4 statistics are displayed in a row
- **AND** the statistics are: Project Completed, Our Staff, Services Provided, Happy Customers
- **AND** each stat has an icon and a number
- **AND** the numbers animate (count up) when scrolled into view
- **AND** the section has a background image with overlay

### Experience / FAQ

#### Scenario: Experience section with skill bars and FAQ accordion

- **GIVEN** the user scrolls to the experience section
- **THEN** the left side shows "We Are Very Experienced & Professionals"
- **AND** 4 skill bars are displayed: Creative Design (95%), Product Engineering (85%),
Marketing Strategy (95%), Support Tips (90%)
- **AND** the right side shows a FAQ accordion
- **AND** the FAQ has 4 questions: "How to fix a problem?", "How to manage your Website?",
"How to grow your investments funds?", "What are those requirements for businesses?"
- **AND** the section has a light background (#f4f5f9)

#### Scenario: FAQ accordion interaction

- **GIVEN** the FAQ accordion is visible
- **WHEN** the user clicks a question
- **THEN** the answer expands below the question
- **AND** only one answer is open at a time
- **WHEN** the user clicks the same question again
- **THEN** the answer collapses

### Team

#### Scenario: Team members grid

- **GIVEN** the user scrolls to the team section
- **THEN** the heading reads "Professional Creative Team Members"
- **AND** 4 team member cards are displayed in a row
- **AND** each card has a photo, name, and role
- **AND** the team members are: Lloyd Wilson, Liam Neil, Alen Broke, John Hayes
- **AND** there is a "View All Members" link

#### Scenario: Team member card hover

- **GIVEN** the team section is visible
- **WHEN** the user hovers over a team card
- **THEN** social media icons overlay appears on the photo

### Portfolio

#### Scenario: Portfolio grid with filter tabs

- **GIVEN** the user scrolls to the portfolio section
- **THEN** the heading reads "We Have Done Many Latest Projects"
- **AND** a grid of portfolio items is displayed
- **AND** each item has an image and a category label ("Interior Design")
- **AND** there are filter tabs to filter by category
- **AND** there is a "View All Projects" link
- **AND** the section has a dark background (#232429)

### Testimonials

#### Scenario: Testimonial carousel

- **GIVEN** the user scrolls to the testimonials section
- **THEN** the heading reads "People Say About Our Works"
- **AND** testimonial cards are displayed in a carousel
- **AND** each testimonial has a quote, author name, and photo
- **AND** carousel navigation dots/arrows allow switching testimonials
- **AND** the section has a light background

### Blog

#### Scenario: Recent blog posts

- **GIVEN** the user scrolls to the blog section
- **THEN** the heading reads "Recent Post"
- **AND** 3 blog post cards are displayed in a row
- **AND** each card has a featured image, category tag, title, date, and excerpt
- **AND** the blog posts share the title "Marketing Strategies for Digital Ecosystem"

#### Scenario: Blog post card hover

- **GIVEN** the blog section is visible
- **WHEN** the user hovers over a blog card
- **THEN** the card lifts with a shadow effect

### Newsletter

#### Scenario: Newsletter signup section

- **GIVEN** the user scrolls to the newsletter section
- **THEN** the heading reads "Join Us Newsletter"
- **AND** there is a description: "Sign Up to our Newsletter and get our latest news update"
- **AND** an email input field is displayed
- **AND** a "Subscribe" button is next to the input
- **AND** the section has a dark background with overlay

### Footer

#### Scenario: Footer with columns and contact info

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has 4 columns: About, Explore, Info, Company
- **AND** the About column has the logo "Solvox" and a description
- **AND** the Explore column has links: About, Contact, Portfolio, Blog
- **AND** the Info column has links: Join us, Blog, Privacy & Policy, Terms & Conditions
- **AND** the Company column has links: About Us, Blog, Contact, Careers
- **AND** there is a "Have a Questions?" column with address and phone
- **AND** there is a copyright line with "Made with Component Dock"
- **AND** the footer has a dark background

## Verification checklist

- [ ] Navbar: sticky, dark bg, logo + 6 nav links
- [ ] Hero: full-height slider, heading, subheading, 2 CTAs, dark overlay
- [ ] Services: dark textured bg, 6 cards in grid, gold hover/active state
- [ ] About: bg image, overlay, 2-column layout, heading + description
- [ ] Counter: 4 animated stats with icons, bg image with overlay
- [ ] Experience/FAQ: skill bars left, accordion right, light bg
- [ ] Team: 4 member cards with photos, hover social icons
- [ ] Portfolio: dark bg, grid with filter tabs, category labels
- [ ] Testimonials: carousel, quotes, author info, light bg
- [ ] Blog: 3 post cards, images, titles, dates, excerpts
- [ ] Newsletter: email input + subscribe button, dark bg
- [ ] Footer: 4 columns, links, contact info, copyright with Component Dock link
- [ ] Design tokens: gold accent #cdb30c, dark surfaces, Roboto fonts, 5px radius
- [ ] Fonts loaded: Roboto + Roboto Condensed via Google Fonts
- [ ] Responsive: works on mobile (hamburger nav, stacked sections)
- [ ] Footer links to https://www.componentdock.com/
