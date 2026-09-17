# Template: Pixelcraft (Creative Agency Landing)

## Purpose

Pixelcraft is a single-page creative digital agency template — a React recreation
of the ColorLib free "Boxus" template
(preview: https://preview.colorlib.com/theme/boxus/), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Primary dark: `#221c5a` (navy — menu bg, hero bg, footer bg)
- Body text: `#23214c`
- Link hover: `#ee87a4`
- Section title block: `#32DB8A` (green, 370×370)
- Section number color: `#55B286`
- Brand pink: `#e54b76` (accent)
- Timeline yellow: `#FFBA42`
- Progress bar colors: green `#32DB8A`, yellow `#FFBB42`, pink `#E74C78`, blue `#4C9EE7`
- Gray text: `#727190`
- Fonts: Montserrat (headings/hero, weight 700), Roboto (body, weights 300/400/700), PT Serif (subtitle, weight 400)

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

Pixelcraft lives in `apps/pixelcraft` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark navy navbar with the site name "Pixelcraft", section
links (Home, Services, Portfolio, About, Stories, Contact), and a hamburger toggle
that opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Pixelcraft" linking to `#home`
- **AND** it SHALL show links to Home, Services, Portfolio, About, Stories and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu

### Requirement: Hero section

The system SHALL render a dark navy hero with a background image, centered logo,
big title and subtitle.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain the headline "We Craft Awesome Web And Graphic Design Solutions"
- **AND** it SHALL contain the subtitle "Support bright students today for a better tomorrow"

### Requirement: Services section

The system SHALL render a services section with a green title block (number 01) on
the left and a 2×2 grid of service cards on the right.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the section number "01" and title "Services" in a green block
- **AND** it SHALL show 4 service cards: Branding, Mobile Apps, Web, Graphic
- **AND** each card SHALL have an icon, title and description

### Requirement: Portfolio section

The system SHALL render a portfolio section with a green title block (number 02) on
the right and a grid of portfolio items with hover overlays.

#### Scenario: Portfolio grid

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show the section number "02" and title "Portfolio" in a green block
- **AND** it SHALL show at least 4 portfolio items with images
- **AND** each item SHALL display a type label and title on hover

### Requirement: About / Crafters section

The system SHALL render an about section with a green title block (number 03) on the
left, about text, a timeline and team member cards.

#### Scenario: Team members

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the section number "03" and title "Crafters"
- **AND** it SHALL show at least 3 team member cards with name and position

### Requirement: Stories section

The system SHALL render a stories/news section with a green title block (number 04)
on the right and numbered blog posts.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the stories section is displayed
- **THEN** it SHALL show the section number "04" and title "Stories"
- **AND** it SHALL show at least 3 blog posts with titles

### Requirement: Offer section

The system SHALL render an offer/video section with a green title block (number 05) on
the left, a video thumbnail and an icon carousel.

#### Scenario: Video and carousel

- **GIVEN** the page is rendered
- **WHEN** the offer section is displayed
- **THEN** it SHALL show the section number "05" and title "Offer"
- **AND** it SHALL show a video thumbnail with a play button
- **AND** it SHALL show at least 4 carousel items

### Requirement: Expertise section

The system SHALL render a skills/expertise section with a green title block (number 06)
on the right and progress bars.

#### Scenario: Progress bars

- **GIVEN** the page is rendered
- **WHEN** the expertise section is displayed
- **THEN** it SHALL show the section number "06" and title "Expertise"
- **AND** it SHALL show progress bars for HTML, CSS, PSD and Design
- **AND** each bar SHALL display a percentage label

### Requirement: Contact section

The system SHALL render a contact section with a green title block (number 07) on the
left, descriptive text, a form and an embedded map.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the section number "07" and title "Contact"
- **AND** it SHALL show a form with Name, Email, Subject and Message fields
- **AND** it SHALL show a Send button

### Requirement: Footer

The system SHALL render a dark navy footer with copyright text, social icons and a
link to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show copyright text containing "Pixelcraft"
- **AND** it SHALL show social links for Twitter, Behance, Dribbble and Facebook
- **AND** it SHALL link to https://www.componentdock.com/ branded "Component Dock"
