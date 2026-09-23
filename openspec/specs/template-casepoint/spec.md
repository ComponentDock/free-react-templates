# Template: Casepoint (Law Firm Landing)

## Purpose

Casepoint is a single-page law firm landing template — a React recreation of
the ColorLib free "TheLawyer" template
(preview: https://preview.colorlib.com/theme/thelawyer/ — law firm landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand primary `#3957ff` (buttons, accent lines, subtitles)
- Brand dark `#112957` (hero button bg, submit buttons)
- Brand darker `#0b1416` (black CTA button)
- Typeface: Josefin Sans (headings) + Roboto (body) + Rubik (hero h1) via Google Fonts
- Sharp-corner buttons, white/light section backgrounds, card borders `#dddddd`
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Casepoint lives in `apps/casepoint` and uses shared components from `packages/ui`
(cn).

## Requirements

### Requirement: Navigation header

The system SHALL render a sticky white header with the brand name "Casepoint",
navigation links (Home, About, Services, Case Studies, Blog, Contact), a phone
number button "01654.066.456", and a hamburger toggle for mobile.

#### Scenario: Desktop navigation

- **WHEN** the user views the page on desktop
- **THEN** the header shows the "Casepoint" logo, 6 navigation links, and a phone CTA button

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** a mobile navigation panel opens with all links and the phone number

#### Scenario: Mobile menu close

- **WHEN** the user clicks a navigation link in the mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero section

The system SHALL render a hero section with a background image, a subtitle
"Committed to success" with a blue accent line, an h1 heading "Don't Feel
Helpless We Fight for Justice", a descriptive paragraph, and a "Learn About Us"
CTA button linking to #about.

#### Scenario: Hero content

- **WHEN** the user views the hero section
- **THEN** the heading, subtitle, paragraph, and CTA button are visible

#### Scenario: Hero background

- **WHEN** the user views the hero section
- **THEN** a background image is displayed

### Requirement: Practice Areas

The system SHALL render a section with subtitle "Our Practicing area", heading
"Area Of Practice That Can Help You To Win", and three practice area cards
(Health Law, Insurance Law, Vehicle Accident) with icons, descriptions, and
"Read More >" links.

#### Scenario: Practice area cards

- **WHEN** the user views the Practice Areas section
- **THEN** three cards are displayed with icons, titles, descriptions, and read more links

### Requirement: About section

The system SHALL render a split-layout About section with an image on the left,
subtitle "About Our Law agency", heading "We are committed for better service",
two descriptive paragraphs, and a "Learn About Us" button.

#### Scenario: About content

- **WHEN** the user views the About section
- **THEN** the subtitle, heading, two paragraphs, image, and CTA button are visible

### Requirement: Contact form

The system SHALL render a contact form section with a background image, subtitle
"Fill up to get a quote", heading "World's Leading Law Consultancy Agency!", and
form fields: Name, Phone, Practice Area (select), Email, Message, and a
"Submit Now" button.

#### Scenario: Form fields

- **WHEN** the user views the contact form
- **THEN** all 5 form fields and the submit button are visible

#### Scenario: Form submission

- **WHEN** the user fills all fields and clicks Submit Now
- **THEN** a thank-you confirmation message is displayed

#### Scenario: Empty form submission

- **WHEN** the user submits the form with empty fields
- **THEN** no confirmation is shown (early return)

### Requirement: Case Studies

The system SHALL render a tabbed Case Studies section with subtitle "our recent
work", heading "Reliable, Effective & Winning Law For Customers", and three tabs
(Accident Law, Health Law, Insurance Law) each showing a 2x2 grid of case cards.

#### Scenario: Tab switching

- **WHEN** the user clicks a different tab
- **THEN** the active tab highlights and the card grid updates

#### Scenario: Default tab

- **WHEN** the page loads
- **THEN** Accident Law is the active tab with 4 case cards

### Requirement: CTA Banner

The system SHALL render a CTA banner with a background image, heading "Are you
Searching For a First-Class Consultant?", and a "Contact Now" button.

#### Scenario: CTA content

- **WHEN** the user views the CTA banner
- **THEN** the heading and Contact Now button are visible

### Requirement: Team section

The system SHALL render a Team section with subtitle "Our lawyers", heading
"Meet Our Dedicated Team Members.", and three team member cards (Ethan Welch,
Trevor Stanley, Allen Guzman) with photos and role titles.

#### Scenario: Team members

- **WHEN** the user views the Team section
- **THEN** three team members are displayed with names, roles, and photos

### Requirement: Testimonial section

The system SHALL render a Testimonial section with a background image, a quote
SVG icon, a testimonial paragraph, founder name "Oliva Jems", role "Chief
Lawyer", and a founder photo.

#### Scenario: Testimonial content

- **WHEN** the user views the Testimonial section
- **THEN** the quote, founder name, role, and photo are visible

### Requirement: Blog section

The system SHALL render a Blog section with subtitle "Insight and Trends
Articles", heading "Lawyers news from around the world selected by us.", and two
blog post cards with images, date overlays, titles, and descriptions.

#### Scenario: Blog cards

- **WHEN** the user views the Blog section
- **THEN** two blog cards are displayed with images, dates, titles, and descriptions

### Requirement: Footer

The system SHALL render a footer with a dark background image, the "Casepoint"
logo, description, phone number "+564 7885 3222", email "youremail@gmail.com",
"Our Support" links, "Quick Link" links, a newsletter form with email input and
Send button, social icons (Twitter, Facebook, Globe, Instagram), copyright line,
and a "Component Dock" attribution link to https://www.componentdock.com/.

#### Scenario: Footer content

- **WHEN** the user views the footer
- **THEN** all footer sections, links, newsletter form, social icons, and Component Dock link are visible

#### Scenario: Newsletter form

- **WHEN** the user types an email and clicks Send
- **THEN** the email field is cleared

### Requirement: No ColorLib references

The system SHALL NOT contain any references to "colorlib" in app source files,
comments, or component code. Provenance lives only in the spec and TEMPLATES.md.

#### Scenario: Clean source code

- **WHEN** searching app source files for "colorlib"
- **THEN** no matches are found
