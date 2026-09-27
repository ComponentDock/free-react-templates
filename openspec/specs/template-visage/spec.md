# Template: Visage (Personal vCard / CV)

## Purpose

Visage is a single-page personal vCard / CV template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Vcard2" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a personal portfolio / vCard site with a sidebar layout:
fixed header with logo + navigation tabs, left sidebar with profile photo
and general information (name, location, email, phone, website) plus social
links, and a right content area with tab panels (About, Skills, Services,
Experience, Education, Portfolio, Testimonials, Contact). Visage recreates
that structure as a single-page SPA with tab navigation, matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Vcard2" — free personal vCard website template
  (source: https://colorlib.com/wp/template/vcard2/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/vcard2/`
  (HTTP 200). The rendered DOM is the reference below; the TEMPLATES.md
  screenshot confirms the visual design.
- **Design tokens extracted from CSS:**
  - Font: Montserrat (300–900) via Google Fonts
  - Primary brand: #8583e1 (indigo/purple) — CTAs, active nav, accents
  - Dark navy: #100f3a — nav background, logo, button hover
  - Body text: #a5a5a5
  - Paragraph text: #838393
  - Accent hover: #ffa07f (salmon)
  - Background: #ffffff
- **Section order (1:1):**
  1. Header — fixed top bar with logo "Visage." + navigation tabs (About,
     Skills, Services, Experience, Education, Portfolio, Testimonials,
     Contact) + "Available for freelance work" CTA.
  2. Sidebar (left) — profile photo, "General Information" list (name,
     location, email, phone, website), social media icon links.
  3. Main Content (right, tab panels):
     - About — job title, name, description paragraph, skill loaders.
     - Skills — skill bars with percentages.
     - Services — service cards (Web Design, Development, Branding).
     - Experience — timeline of work history.
     - Education — education history.
     - Portfolio — image grid with hover overlay.
     - Testimonials — client quote cards.
     - Contact — contact form with success state.
  4. Footer — "Made with Component Dock" branded link.

## Requirements

### Requirement: Header with navigation

The template SHALL display a fixed header containing the logo "Visage."
and navigation tabs for all eight sections, plus a "Available for freelance
work" CTA link.

#### Scenario: Header renders on page load

- **WHEN** the page loads
- **THEN** the header is visible at the top of the page
- **AND** the logo "Visage" is displayed
- **AND** navigation buttons for About, Skills, Services, Experience,
  Education, Portfolio, Testimonials, Contact are present
- **AND** a CTA "Available for freelance work" link is present

#### Scenario: Active tab is highlighted

- **WHEN** the About tab is active
- **THEN** the About button has the brand color background
- **AND** other tabs have the dark navy background

### Requirement: Sidebar with personal information

The template SHALL display a left sidebar with a profile photo, general
information items (name, location, email, phone, website), and social
media icon links.

#### Scenario: Sidebar displays profile information

- **WHEN** the page loads
- **THEN** a profile photo is displayed
- **AND** "General Information" heading is shown
- **AND** name, location, email, phone, website items are listed
- **AND** social media links (GitHub, LinkedIn, Twitter, Dribbble) are present

### Requirement: Tab navigation switches content

The template SHALL allow users to switch between content panels by clicking
navigation tabs.

#### Scenario: Clicking Skills tab shows skills panel

- **WHEN** the user clicks the "Skills" tab
- **THEN** the Skills panel is displayed
- **AND** the About panel is hidden

#### Scenario: Clicking Contact tab shows contact form

- **WHEN** the user clicks the "Contact" tab
- **THEN** the contact form is displayed with name, email, subject, message
  fields and a "Send Message" button

### Requirement: About section displays profile content

The About section SHALL display a job title, name heading, description
paragraph, and skill loader bars.

#### Scenario: About section renders correctly

- **WHEN** the About tab is active
- **THEN** the job title "HTML5 & CSS Developer" is shown
- **AND** the name "Jeremy Smith" is displayed as a heading
- **AND** a description paragraph is present
- **AND** four skill loaders (Intuition, Creativity, Pure Luck, Awesomeness)
  with percentage values are displayed

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded
as "Component Dock".

#### Scenario: Footer renders with Component Dock link

- **WHEN** the page loads
- **THEN** the footer is visible at the bottom
- **AND** a link to "https://www.componentdock.com/" is present
- **AND** the link text mentions "Component Dock"
- **AND** the link opens in a new tab
