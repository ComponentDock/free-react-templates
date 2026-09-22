# Template: Healpoint (Healthcare Landing)

## Purpose

Healpoint is a single-page healthcare template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Medicare2"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a purple-accented medical page: a top bar with language
selector / phone / email / Appointment CTA, a navbar (logo, Home, About,
Department, Pages, Blog, Contact), a hero banner ("Growing up your children
with our most smart monitization"), a 3-card features row (Emergency Services,
Doctors Schedule, Online Appointment), an about section ("Welcome to Medicare
Center" with doctor timetable overlay), a departments grid (Cardiology, Urology,
Dental Care, Eye Care, Neurology, Plastic Surgery), a counter/stats bar (30K
years, 2K+ donors, 5K+ patients, 20K+ staff), a team section (4 doctor
cards), a blog + appointment form section (3 posts + booking form), and a
footer (About Us, Contact Us, Newsletter). Healpoint recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Medicare2" — free medical website template
  (source: https://colorlib.com/wp/template/medicare2/).
- **Live preview DOM analyzed:** the official preview portal
  (`https://preview.colorlib.com/theme/medicare2/`) returned HTTP 200 (34.7KB
  HTML). Stylesheet `css/style.css` (79.6KB) fetched and parsed. The rendered
  DOM is the reference below; the TEMPLATES.md screenshot
  (`medicare2-free-template.jpg`) confirms the visual design (purple top bar,
  blue gradient buttons, white/light sections, dark counter overlay).
- **Section order (1:1):**
  1. Top Bar (`header-top`): language selector, phone number, email, "Appointment" CTA — purple gradient background.
  2. Navbar (`main_menu > navbar`): logo, Home, About, Department, Pages (dropdown: Doctors, Elements), Blog (dropdown: Blog, Blog Details), Contact, search icon.
  3. Hero Banner (`home_banner_area`): background image, headline "Growing up your children with our most smart monitization", paragraph, "Learn More" CTA.
  4. Features (`features_area section_gap`): 3 cards — Emergency Services, Doctors Schedule, Online Appointment — each with icon, title, description, action button.
  5. About (`about_area lite_bg`): "Welcome to Medicare Center" heading, paragraph, bullet list, doctor timetable overlay card (Mon–Fri schedule).
  6. Departments (`department_area section_gap`): "Medicare Popular Departments" heading, 6 department icons (Cardiology, Urology, Dental Care, Eye Care, Neurology, Plastic Surgery), "Learn More" button.
  7. Counter (`counter_area overlay`): 4 stat cards — 30K Years of Experiences, 2K+ Instant Blood Donors, 5K+ Well Cured Patients, 20K+ Internal Staff Groups — dark overlay background.
  8. Team (`team_area lite_bg`): "Our Doctors" heading, 4 team member cards (Ethel Davis, Rodney Cooper, Dane Walker, Lena Keller) — photo, name, profession, social links, bio.
  9. Blog + Appointment (`blog_area`): left side = "Our Recent Blogs" + 3 horizontal blog cards (thumbnail, date/likes/comments meta, title, excerpt); right side = "Make an Appointment" + form (Patient name, Email, Date of birth, Doctor select, Appointment date, Message, "confirm booking" button).
  10. Footer (`footer-area section_gap`): About Us column, Contact Us column (phone numbers), Newsletter column (email input + "get started" button), copyright bar, social links (Facebook, Twitter, Dribbble, Behance).
- **Design tokens extracted from `css/style.css`:**
  - Primary color: **#772dff** (purple — header-top gradient, about list bullets, counter accents).
  - Accent color: **#0ba9ff** / **#56d9ff** (blue gradient — buttons, links, gradient text, footer social hover).
  - Text color: **#222222** (headings), **#777777** (body paragraphs).
  - Section backgrounds: **#f9f9f9** (`.lite_bg` — about, team sections); dark image overlay (counter area, about background).
  - Font families: **"Roboto"** (sans-serif — body, buttons), **"Playfair Display"** (serif — headings).
  - Buttons: `.primary-btn` — blue gradient (`#0ba9ff` → `#56d9ff`), white text, `border-radius: 50px` (pill shape), uppercase, gradient-to-right hover animation. `.header-top .primary-btn` override: `border-radius: 0` (square).
  - Counter overlay: semi-transparent dark (`opacity: 0.3`, `background: #000`) over background image.
- **Recreation decisions:** repo-standard Navbar (site name "Healpoint", Home link, dark-mode toggle) + Footer chrome; top bar omitted (repo patterns don't use a secondary bar); hero = seeded picsum photo + headline + CTA; features = 3 icon cards with lucide icons; about = text + list + doctor schedule card; departments = 6 lucide icon cards; counter = 4 stat cards with animated counts; team = 4 member cards with initials avatars; blog + appointment = side-by-side with seeded photos + form; footer = link columns + newsletter + social; all images picsum-seeded (`picsum.photos/seed/healpoint-N/w/h`); Google Fonts via `<link>`.

Healpoint lives in `apps/healpoint` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Healpoint",
a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Healpoint page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Healpoint" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero banner

The system SHALL render a hero banner section with a level-1 headline and a
call-to-action button.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner section is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Growing up your children with our most smart monitization")
- **AND** it SHALL show a paragraph of introductory text
- **AND** it SHALL show a "Learn More" CTA button

### Requirement: Features

The system SHALL render a features section with at least three feature cards.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL render three feature cards (Emergency Services, Doctors Schedule, Online Appointment)
- **AND** each card SHALL show an icon, title, description, and action button/link

### Requirement: About section

The system SHALL render an about section with a heading and a doctor
timetable overlay.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Welcome to Medicare Center"
- **AND** it SHALL show a paragraph of text
- **AND** it SHALL show a bulleted list of items
- **AND** it SHALL show a doctor timetable card (Mon–Fri schedule)

### Requirement: Departments

The system SHALL render a departments section with at least six department
icons.

#### Scenario: Department grid

- **GIVEN** the page is rendered
- **WHEN** the departments section is displayed
- **THEN** it SHALL show the heading "Medicare Popular Departments"
- **AND** it SHALL render six department items (Cardiology, Urology, Dental Care, Eye Care, Neurology, Plastic Surgery)
- **AND** each item SHALL show an icon and name
- **AND** it SHALL show a "Learn More" button

### Requirement: Counter / stats

The system SHALL render a counter section with at least four stat cards on a
dark overlay background.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL render four stat cards
- **AND** each card SHALL show a numeric value and label (e.g. "30K Years of Experiences", "2K+ Instant Blood Donors", "5K+ Well Cured Patients", "20K+ Internal Staff Groups")

### Requirement: Team

The system SHALL render a team section with at least four doctor cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Doctors"
- **AND** it SHALL render four team member cards
- **AND** each card SHALL show a photo/avatar, name, profession, social links, and bio text

### Requirement: Blog and appointment

The system SHALL render a section with a blog column (recent posts) and an
appointment form column side by side.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Our Recent Blogs"
- **AND** it SHALL render at least three horizontal blog cards with thumbnail, date/likes/comments meta, title, and excerpt

#### Scenario: Appointment form

- **GIVEN** the page is rendered
- **WHEN** the appointment form section is displayed
- **THEN** it SHALL show the heading "Make an Appointment"
- **AND** it SHALL show a form with fields: Patient name, Email, Date of birth, Doctor (select), Appointment date, Message
- **AND** it SHALL show a "confirm booking" submit button

### Requirement: Footer

The system SHALL render a footer with site name, link columns, newsletter
signup, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" column, a "Contact Us" column, and a "Newsletter" column
- **AND** it SHALL show a newsletter email input and "get started" button
- **AND** it SHALL show social links (Facebook, Twitter, Dribbble, Behance)
- **AND** it SHALL show a copyright bar with a link to "Component Dock"

## Verification checklist

- [ ] App builds without errors (`npm run build` in `apps/healpoint`)
- [ ] All tests pass at 100% coverage (`npm run test:coverage`)
- [ ] Type checking passes (`npm run typecheck`)
- [ ] Linting passes (`npm run lint`)
- [ ] `public/CNAME` contains `healpoint.free.componentdock.com`
- [ ] `package.json` has `"homepage": "https://healpoint.free.componentdock.com"`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No references to ColorLib in app code (spec only)
- [ ] All images use `picsum.photos/seed/healpoint-N/w/h`
- [ ] Section order matches the original 1:1
- [ ] Design tokens match extracted values (brand purple #772dff, accent blue #0ba9ff, fonts Roboto + Playfair Display)
