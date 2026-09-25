# Template: Portfolium (Personal Portfolio)

## Purpose

Portfolium is a single-page personal portfolio/resume template — a React
recreation of the ColorLib free "Niko" template
(preview: https://preview.colorlib.com/theme/niko/ — personal portfolio for
a freelance web developer), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/niko/

Design tokens captured from the original (see docs/replication.md):

- Brand blue `#0075f6` (hire-me banner, accent spans, progress bars)
- Font: Poppins (Google Fonts via `<link>`)
- White background, light grey `#f8f9fa` section backgrounds
- Hero: split layout — left text + right background image, "HELLO" uppercase
  label, large bold name, subtitle, outlined "HIRE ME" button (1px solid
  #0075f6, uppercase, letter-spacing 3px, 12px font)
- Navbar: dark/transparent, white text, "N" logo, right-aligned nav links
- Counter/stats: blue background (`bg-primary`) block with white number + label
- Skills section: progress bars with colored fills (blue shades)
- Services: icon + title + bullet list, 3-column layout
- Projects: image grid with dark overlay + hover text
- Blog: 3-column cards with image + date + title + excerpt
- Contact: split — left map/image + right form with grey background
- Footer: dark, 4-column (talk/links/services/contact)
- Hire-me banner: full-width blue bar with "Available for Freelancing" + button

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

Portfolium lives in `apps/portfolium` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark/transparent sticky navbar with the logo "P"
(linking to #home), and navigation links: Home, About, Skills, Projects,
Blog, Contact. The navbar SHALL become visible on scroll with a dark
background. A hamburger toggle SHALL show/hide a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the logo "P" linking to #home
- **AND** it SHALL show links to Home, About, Skills, Projects, Blog, Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small viewport
- **WHEN** the hamburger toggle is pressed
- **THEN** the mobile menu SHALL become visible
- **AND** the toggle SHALL report `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a split hero with the left side containing:
- Uppercase "HELLO" label (bold, letter-spaced)
- Large heading: "I'm [Name]"
- Subtitle: "A Freelance Web Developer"
- Outlined "HIRE ME" button (1px solid blue border, uppercase, letter-spaced)

The right side SHALL display a portrait background image with a play button
overlay (video icon, optional).

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain the "HELLO" label
- **AND** it SHALL show the heading with the name
- **AND** it SHALL show the subtitle
- **AND** it SHALL show a "HIRE ME" button linking to #contact

### Requirement: About section

The system SHALL render a two-column about section:
- Left: portrait image with overlay
- Right: "WELCOME" label, "About Me" heading, paragraph, two service cards
  (Web Design, Web Application) with icons, and a counter/stats block
  (blue background, "200 Finished Projects")

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a portrait image on the left
- **AND** it SHALL show "WELCOME" label and "About Me" heading on the right
- **AND** it SHALL show a paragraph of bio text
- **AND** it SHALL show two service items with icons and descriptions
- **AND** it SHALL show a counter block with the number "200" and "Finished Projects"

### Requirement: Skills section

The system SHALL render a light-background section with:
- Section header: "SKILLS" label, "My Skills" heading, description
- Six progress bars in a 2-column grid: Photoshop (75%), jQuery (60%),
  HTML5 (85%), CSS3 (90%), WordPress (70%), SEO (80%)
- Each progress bar SHALL have a colored fill and percentage label

#### Scenario: Skills display

- **GIVEN** the page is rendered
- **WHEN** the skills section is displayed
- **THEN** it SHALL show the section heading "My Skills"
- **AND** it SHALL display six progress bars with correct names and percentages

### Requirement: Services section

The system SHALL render a 3-column services grid with:
- "WHAT I DO" label, "Strategy, design and a bit of magic" heading
- Three service cards: Explore (Design Sprints, Product Strategy, UX Strategy),
  Create (Information, UX/UI Design, Branding),
  Learn (Prototyping, User Testing, UI Testing)
- Each card has an icon, title, and bullet list

#### Scenario: Services display

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show three service cards with the correct titles and items

### Requirement: Hire-me banner

The system SHALL render a full-width blue banner (`#0075f6` background) with:
- "I'm Available for Freelancing" heading (white, bold "Available")
- White "Hire me" button on the right

#### Scenario: Hire-me banner content

- **GIVEN** the page is rendered
- **WHEN** the hire-me banner is displayed
- **THEN** it SHALL show the "Available for Freelancing" heading
- **AND** it SHALL show a "Hire me" button

### Requirement: Projects section

The system SHALL render a project gallery grid with:
- "ACCOMPLISHMENTS" label, "Our Projects" heading, description
- 5 project cards in a 2-row masonry-style grid (8/4 column split, then 4/8)
- Each card: background image, dark overlay, hover text with title + category

#### Scenario: Projects grid

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show the section heading "Our Projects"
- **AND** it SHALL display five project cards with images and overlay text

### Requirement: Blog section

The system SHALL render a light-background blog section with:
- "BLOG" label, "Our Blog" heading, description
- Three blog cards in a 3-column grid
- Each card: image, date, author, comment count, title, excerpt

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the section heading "Our Blog"
- **AND** it SHALL display three blog cards with images, dates, titles, excerpts

### Requirement: Contact section

The system SHALL render a two-column contact section:
- Left: background image
- Right: contact form with fields (Name, Email, Subject, Message) and
  "Send Message" submit button on a light background

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the section heading "Contact Me"
- **AND** it SHALL show a form with Name, Email, Subject, Message fields
- **AND** it SHALL show a "Send Message" submit button
- **AND** it SHALL show a background image on the left

### Requirement: Footer

The system SHALL render a dark footer with four columns:
- "Lets talk about" with social icons (Twitter, Facebook, Instagram)
- Links: Home, About, Services, Projects, Contact
- Services: Web Design, Web Development, Business Strategy, Data Analysis, Graphic Design
- "Have a Questions?" with address and phone
- A "Made with Component Dock" attribution line linking to componentdock.com

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show four columns of content
- **AND** it SHALL show social media icon links
- **AND** it SHALL link to componentdock.com

## Verification checklist

- [ ] All sections render in the correct order: Navbar → Hero → About → Skills → Services → Hire-me Banner → Projects → Blog → Contact → Footer
- [ ] Brand color #0075f6 is used for accents, buttons, banner, progress bars
- [ ] Poppins font loaded via Google Fonts
- [ ] Mobile hamburger toggle works with aria-expanded
- [ ] Progress bars animate to correct percentages
- [ ] Contact form has all four fields + submit button
- [ ] Footer links to componentdock.com
- [ ] No references to ColorLib in app code (provenance in spec only)
- [ ] All images use picsum.photos placeholders
- [ ] 100% test coverage (lines, functions, branches, statements)
