# Template: Orenda (Online Education / E-Learning)

## Purpose

Orenda is an online-education landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Onlineedu"
template (see TEMPLATES.md), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/onlineedu/
Live preview (analyzed for this spec): https://preview.colorlib.com/theme/onlineedu/

The original is a bold, flat e-learning one-pager: a dark-indigo utility
topbar over a white header with search, a light-blue hero slider with a big
white headline and a square indigo "Get Started" button beside a student
photo, then white/light sections for course categories (cards that fill
indigo on hover), stat counters, popular course cards, a faculty grid, an
about block with checklist, an image-backed testimonial strip, blog cards,
and a very dark navy footer. Brand color is indigo `#2d3092`; body type is
Josefin Sans with Sen for headings; buttons are square with an animated
hover sweep.

Orenda lives in `apps/orenda` and uses shared components from `packages/ui`
(Button, ButtonLink, cn). No ColorLib name or URL appears in any app file —
provenance lives only in this spec, TEMPLATES.md, and the PR.

## Design tokens (from the live preview DOM + `assets/css/style.css`)

| Token                 | Value                                                                                                                  | Usage                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Primary brand         | `#2d3092` (indigo)                                                                                                     | buttons, category-card hover fill, active nav/link accents |
| Dark indigo           | `#1f2b7b`                                                                                                              | top utility bar, logo/heading accents                      |
| Button hover sweep    | `#3e44ec`                                                                                                              | `.btn::before` scaleX sweep on hover                       |
| Section title         | `#030431` (near-black navy), 49px/600                                                                                  | `.section-tittle h2` (white variant on dark bgs)           |
| Light backgrounds     | `#f9f9ff`, `#f0e9ff`                                                                                                   | section/card backgrounds, light purple tints               |
| Accent cyan/red/green | `#4cd3e3`, `#f05510`, `#1e9d78`                                                                                        | small accents (ratings, badges, icons)                     |
| Footer bg             | `#0b0b1d` (very dark navy)                                                                                             | `.footer-area`                                             |
| Font family           | "Josefin Sans" (body) + "Sen" (headings/cards), Roboto alt                                                             | all text                                                   |
| Button shape          | square (`border-radius: 0`), `background: #2d3092`, `padding: 27px 44px`, `letter-spacing: 1px`, hover sweep `#3e44ec` | primary CTAs                                               |
| Category card         | `border: 1px solid #ddd`, white/`#f9f9ff` bg, hover → fill `#2d3092` + white text                                      | course category cards                                      |
| Hero headline         | 60px / weight 700, white, over image bg (`h1_hero.png`, min-height 840px)                                              | hero slider                                                |

## Requirements

### Requirement: Header with utility bar

The system SHALL render a two-part header: a dark-indigo top utility bar with
contact info (email + phone), Login/Register links, and social icons; below
it a white main bar with the logo "Orenda" (with a graduation-cap icon), the
nav links (Home, About, Courses, Instructors, Blog, Contact), and a search
input. On mobile the nav SHALL collapse into a slide-out menu.

#### Scenario: Utility bar

- **GIVEN** the Orenda page is rendered
- **WHEN** the header is displayed
- **THEN** the top bar SHALL show an email and a phone number
- **AND** it SHALL show "Login" and "Register" links
- **AND** it SHALL show social icon links with accessible labels

#### Scenario: Main navigation

- **GIVEN** the header is rendered
- **WHEN** the main bar is displayed
- **THEN** it SHALL show the site name "Orenda" with an education icon as a logo link
- **AND** it SHALL show nav links: Home, About, Courses, Instructors, Blog, Contact
- **AND** it SHALL show a search input

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user presses the menu toggle
- **THEN** a slide-out menu SHALL open with the same nav links
- **AND** the toggle SHALL expose `aria-expanded` state and an `aria-label`

### Requirement: Hero slider

The system SHALL render a hero slider on a light-blue image background (min
height ~840px) with two slides; each slide SHALL show a sub-heading
("Popular Online Courses"), a large white bold headline ("The New Way To
Learn Properly in With Us!"), and a square indigo "Get Started" button;
slide controls SHALL advance between slides.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL show a sub-heading above a level-1 headline (white, bold, large)
- **AND** it SHALL show a square indigo "Get Started" button
- **AND** it SHALL show a supporting illustration/photo area beside the text on wide screens

#### Scenario: Slide navigation

- **GIVEN** the hero slider is rendered
- **WHEN** the user activates the next/previous control or a slide dot
- **THEN** the visible slide SHALL change
- **AND** the active slide indicator SHALL update

### Requirement: Categories section

The system SHALL render a "Let's Browse All Categories" section with at
least four category cards (Web Design, App Development, Video Editing,
Digital Marketing, SEO Marketing), each with an icon, title, short copy, and
a "Read More" link; on hover the card SHALL fill with the indigo brand color
and its text SHALL turn white.

#### Scenario: Category cards

- **GIVEN** the categories section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show the section title "Let's Browse All Categories" (near-black navy, large)
- **AND** it SHALL render at least four category cards
- **AND** each card SHALL show an icon, a title, short copy, and a "Read More" link

#### Scenario: Card hover fill

- **GIVEN** a category card is rendered
- **WHEN** the user hovers/focuses the card
- **THEN** the card background SHALL fill with the indigo brand color
- **AND** the icon, title, copy, and link SHALL turn white

### Requirement: Stats counters

The system SHALL render a light section with stat counters (e.g. "1050+"
Topics, plus students, courses, instructors) whose values are emphasized in
the brand color.

#### Scenario: Stats

- **GIVEN** the stats section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show at least four stats, each with a large number (with a "+" suffix) and a label

### Requirement: Popular courses section

The system SHALL render a "Most Popular Course of This Week" section with
three course cards (Graphic Design, Web Development, Digital Marketing),
each with an image, a category tag, a rating ("52 Review"), a price ("Free"),
and a "Find More Courses" square indigo button below the grid.

#### Scenario: Course cards

- **GIVEN** the popular-courses section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show the section title and three course cards
- **AND** each card SHALL show an image, category, rating/review count, and price
- **AND** the section SHALL show a "Find More Courses" button below the grid

### Requirement: Faculty/team section

The system SHALL render a light-background "Our Best Teachers" section with
four faculty cards, each with a photo, name, and role label (e.g.
"Faculty"), and a "View All Faculty" button.

#### Scenario: Faculty grid

- **GIVEN** the faculty section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show the section title "Our Best Teachers"
- **AND** it SHALL render four faculty cards
- **AND** each card SHALL show a photo, a name, and a role label
- **AND** the section SHALL show a "View All Faculty" button

### Requirement: About section

The system SHALL render an "About Our Company" section with a heading
("Want to know more"), a paragraph, a checklist of three points, and a
"More About Us" button.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show a section title and a short paragraph
- **AND** it SHALL show a checklist of at least three bullet points
- **AND** it SHALL show a "More About Us" button

### Requirement: Testimonials section

The system SHALL render a background-image testimonials strip with a
carousel of at least two quotes; each quote SHALL show the quotation, the
author name, and a role/attribution.

#### Scenario: Testimonial carousel

- **GIVEN** the testimonials section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show one quote at a time (quotation text + author name)
- **AND** the user SHALL be able to advance to the next/previous quote
- **AND** the section SHALL use a background image with readable text treatment

### Requirement: Blog section

The system SHALL render a "Latest News From Blog" section with two post
cards, each with an image, a date badge ("24 Now"), a category, a post
title, and a "Read more" link.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show the section title "Latest News From Blog"
- **AND** it SHALL render at least two post cards
- **AND** each card SHALL show an image, date, category, title, and a "Read more" link

### Requirement: Footer

The system SHALL render a very dark navy footer (`#0b0b1d`) with a
"Subscribe Now" newsletter block (email input + square indigo subscribe
button), social icons ("Let's Get Social"), and four link columns (About
Us, Our Plans, Admissions, Support); the bottom bar SHALL carry the
copyright line and a link to https://www.componentdock.com/ ("Component
Dock").

#### Scenario: Newsletter and social

- **GIVEN** the footer is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Stay Updated / Subscribe Now" block with an email input and a subscribe button
- **AND** it SHALL show social icon links with accessible labels

#### Scenario: Link columns

- **GIVEN** the footer is rendered
- **WHEN** the link columns are displayed
- **THEN** it SHALL render four link columns (About Us, Our Plans, Admissions, Support)
- **AND** each column SHALL have a heading and a list of placeholder links

#### Scenario: Component Dock attribution

- **GIVEN** the footer is rendered
- **WHEN** the bottom bar is displayed
- **THEN** it SHALL show the copyright line
- **AND** it SHALL link to https://www.componentdock.com/ branded "Component Dock"

### Requirement: Page composition

The system SHALL compose all sections in the source order (header, hero
slider, categories, stats, popular courses, faculty, about, testimonials,
blog, footer) with the header in the banner landmark, content in the main
landmark, and the footer in the contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Orenda app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render sections in the source order above
- **AND** the document title SHALL be "Orenda — Online Education Template"

## Verification checklist

- [ ] `npm run spec:validate`
- [ ] `bash scripts/verify-app.sh orenda` (typecheck + lint + 100% coverage tests + build)
- [ ] Screenshot review: sections and order, `#2d3092` indigo brand, Josefin Sans/Sen, square buttons with hover sweep, dark `#0b0b1d` footer
- [ ] TEMPLATES.md bookkeeping on merge: `[ ]` Onlineedu → `[x]` with `apps/orenda` (implementer task)
