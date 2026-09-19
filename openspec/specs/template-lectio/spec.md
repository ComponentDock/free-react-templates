# Template: Lectio (Education — University / Online Course Platform)

## Purpose

Lectio is a single-page education/university template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Academica" template
design (preview: https://preview.colorlib.com/theme/academica/), built under a
different name ("Lectio" — Latin for reading/study, evoking an academic atmosphere)
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).
No ColorLib references in app code — provenance lives in this spec, TEMPLATES.md,
and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Academica" — a free education/university WordPress theme
  designed for colleges, online courses, and training centers.
  Source: https://colorlib.com/wp/template/academica/
  Preview: https://preview.colorlib.com/theme/academica/ (LIVE, HTTP 200).
  Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/academica-free-template.jpg
- **Live preview ANALYZED:** Full HTML + CSS fetched and parsed (css/style.css,
  bootstrap.min.css, font-awesome.min.css, flaticon.css, owl.carousel.css).
  Section structure and design tokens extracted from live CSS.
- **Visual design (screenshot + live preview):** A university/online-course
  platform template with a professional, clean, trustworthy aesthetic. Features
  a dark navy header bar, a full-width hero with a study/reading lifestyle image,
  dark overlay, white headline text, author attribution, and a blue CTA button.
  Below the hero: a white multi-field course search form overlapping the hero
  section. A 3x2 grid of "Training Center" service cards with blue icons. A
  testimonials slider on a blue gradient background. A course carousel with
  course cards (image, title, teacher, "Enroll Now" button). A stats/fun-facts
  section with large numbers. A newsletter subscription section with a dark
  background. A 4-column dark footer with category links and copyright.

## Design tokens (from live preview CSS — style.css)

| Token             | Value                                         | Notes                                                          |
| ----------------- | --------------------------------------------- | -------------------------------------------------------------- |
| Brand color       | `#185dd0`                                     | Deep blue — buttons, links, active states, course card accents |
| Brand gradient    | `linear-gradient(to right, #185dd0, #7076fc)` | Blue-to-purple gradient — course cards, CTA button bg          |
| Accent yellow     | `#fbb710`                                     | Gold/yellow — navbar underline, author link highlight          |
| Accent yellow alt | `#f3e830`                                     | Bright yellow — secondary highlight                            |
| Dark navy         | `#0e2040`                                     | Very dark navy — header bar background                         |
| Dark bg           | `#1d1d1d`                                     | Near-black — footer background                                 |
| Light gray bg     | `#f8fafc`                                     | Off-white — alternating section backgrounds                    |
| Border gray       | `#dbe0e2`                                     | Light gray borders on cards and dividers                       |
| Heading text      | `#1d1d1d`                                     | Dark near-black for headings                                   |
| Body text         | `#333333`                                     | Dark gray for paragraphs                                       |
| Muted text        | `#838383`                                     | Medium gray for secondary text                                 |
| Light text        | `#9c9c9c`                                     | Light gray for captions/meta                                   |
| White             | `#ffffff`                                     | Text on dark backgrounds, card backgrounds                     |
| Button radius     | `25px` (site-btn)                             | Rounded/pill-shaped buttons                                    |
| Card radius       | `15px`                                        | Rounded card corners                                           |
| Avatar radius     | `50%`                                         | Circular author avatars                                        |
| Font family       | `'Raleway', sans-serif`                       | Clean geometric sans-serif (Google Fonts)                      |
| Font weights      | 300, 400, 500, 600, 700                       | Light through bold                                             |

## Requirements

### Requirement: Navbar

The template SHALL display a dark navy navigation bar with a book icon brand logo, horizontal navigation links (Home, About Us, Courses, News, Contact), a Login/Register link, and a yellow accent bottom border.

#### Scenario: Desktop navbar renders all navigation links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the brand name "Lectio" with a book icon
- **AND** navigation links for Home, About Us, Courses, News, Contact are visible
- **AND** a "Login / Register" link is visible

#### Scenario: Mobile hamburger menu toggles

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile menu expands showing all navigation links
- **AND** clicking a link closes the mobile menu

### Requirement: Hero section

The template SHALL display a full-width hero with a background image, dark overlay, headline "Literature Course", description text, author info with avatar, and a blue "See Details" CTA button.

#### Scenario: Hero renders content

- **WHEN** the page loads
- **THEN** the hero shows the headline "Literature Course"
- **AND** a description paragraph is visible
- **AND** author info shows "By Sebastian Smith, Senior Lead Developer"
- **AND** a "See Details" button is present

### Requirement: Course search form

The template SHALL display a dark-background card overlapping the hero with a "Search your Course" heading and a horizontal form with 5 fields (Course, Level, Date, Teacher, Price) and a blue Search button.

#### Scenario: Search form renders all fields

- **WHEN** the page loads
- **THEN** a search form with role="search" is visible
- **AND** input fields for Course, Level, Date, Teacher, Price are present
- **AND** a "Search" button is present

### Requirement: Training center services

The template SHALL display a 3x2 grid of service cards, each with a blue icon, title, and description.

#### Scenario: All 6 service cards render

- **WHEN** the page loads
- **THEN** 6 service cards are visible: Applied Studies, Computer Engineering, Software Engineering, Information Engineering, System Engineering, Graphic Design
- **AND** each card has a description paragraph

### Requirement: Testimonials carousel

The template SHALL display a testimonials section with a blue gradient background, a quote, author avatar + name + role, and navigation arrows with dot indicators.

#### Scenario: Testimonial navigation works

- **WHEN** the user clicks the Next arrow
- **THEN** the next testimonial quote and author are displayed
- **WHEN** the user clicks the Previous arrow
- **THEN** the previous testimonial is displayed
- **WHEN** the user clicks a dot indicator
- **THEN** the corresponding testimonial is shown

#### Scenario: Testimonial carousel wraps

- **WHEN** the user is on the first testimonial and clicks Previous
- **THEN** the last testimonial is displayed
- **WHEN** the user is on the last testimonial and clicks Next
- **THEN** the first testimonial is displayed

### Requirement: Course cards carousel

The template SHALL display a courses section with a slider of course cards (image, title, teacher info, "Enroll Now" button), showing 3 cards at a time on desktop with navigation arrows.

#### Scenario: Course carousel navigation

- **WHEN** the user clicks the Next arrow
- **THEN** the next set of course cards is displayed
- **WHEN** the user clicks the Previous arrow
- **THEN** the previous set of course cards is displayed
- **AND** the Previous button is disabled at the start
- **AND** the Next button is disabled at the end

### Requirement: Fun facts / stats

The template SHALL display a stats section with 4 large numbers: 2500 (Total Students), 14k (Graduates), 129 (Courses), 1490 (Events).

#### Scenario: Stats render correctly

- **WHEN** the page loads
- **THEN** the stats 2500, 14k, 129, 1490 are visible
- **AND** labels Total Students, Graduates, Courses, Events are shown

### Requirement: Newsletter subscription

The template SHALL display a newsletter section with a dark background, "Stay Updated" heading, email input, and Subscribe button.

#### Scenario: Newsletter form renders

- **WHEN** the page loads
- **THEN** a "Stay Updated" heading is visible
- **AND** an email input field is present
- **AND** a "Subscribe" button is present

### Requirement: Footer

The template SHALL display a dark footer with 4 columns (Engineering, Business School, Art & Design, Higher Education), each with category links, and a copyright bar linking to Component Dock.

#### Scenario: Footer renders columns and links

- **WHEN** the page loads
- **THEN** 4 column headings are visible: Engineering, Business School, Art & Design, Higher Education
- **AND** category links are present in each column
- **AND** copyright text shows "Lectio. All rights reserved."
- **AND** a link to https://www.componentdock.com/ is present

### Requirement: Design fidelity

The template SHALL use the correct design tokens: brand blue #185dd0, gold accent #fbb710, Raleway font, pill-shaped buttons (border-radius 25px), and dark navy #0e2040 header.

#### Scenario: Design tokens are applied

- **WHEN** the page renders
- **THEN** the brand color blue is used for buttons and links
- **AND** the gold accent color is used for the navbar border and author name highlight
- **AND** the Raleway font family is applied

### Requirement: No ColorLib references

The template app code SHALL NOT contain any references to "ColorLib" or "colorlib" in source files, comments, or data.

#### Scenario: App code is clean

- **WHEN** the app source is inspected
- **THEN** no file in apps/lectio/ contains the string "colorlib" (case-insensitive)

### Requirement: Component Dock footer link

The template footer SHALL link to https://www.componentdock.com/ with "Component Dock" branding.

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"
- **AND** the link opens in a new tab

### Requirement: Placeholder images

The template SHALL use picsum.photos seeded placeholders instead of copied assets.

#### Scenario: Images use placeholder service

- **WHEN** the app renders
- **THEN** all images use https://picsum.photos/seed/... URLs with deterministic seeds

### Requirement: Workspace configuration

The template SHALL have a public/CNAME file with "lectio.free.componentdock.com" and homepage set to "https://lectio.free.componentdock.com" in package.json.

#### Scenario: CNAME and homepage are correct

- **WHEN** the app is deployed
- **THEN** public/CNAME contains "lectio.free.componentdock.com"
- **AND** package.json homepage is "https://lectio.free.componentdock.com"
