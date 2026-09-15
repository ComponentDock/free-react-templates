# Template: Kindfund (Charity / Nonprofit Template)

## Purpose

Kindfund is a single-page charity / nonprofit website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Charifit" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Charifit" — charity / donation website template
  (source: https://colorlib.com/wp/template/charifit/).
- **Preview URL:** https://preview.colorlib.com/theme/charifit/
  (HTTP 200, ~39.4 KB rendered DOM, title "Charifit — ColorLib Website Template").
  Stylesheets: `css/style.css` (150 KB) + `css/bootstrap.min.css` + font-awesome.
  Fonts via Google Fonts: **Open Sans** (body) + **Yeseva One** (headings).
- **Visual design:** clean charity aesthetic — white/light-grey page, near-black
  text `#222222`, brand green `#3CC78F` (primary CTA, progress bars, footer
  accent), accent orange `#ff5e13`, light lavender backgrounds `#f9f9ff` /
  `#f0e9ff`, deep navy `#191d34` / `#415094`, light teal `#4cd3e3`, muted grey
  `#7a7b7c` / `#999999`. Open Sans 16px body, Yeseva One display headings.
- **Structure (1:1, section order):**
  1. Top bar — phone and email, social media icons
  2. Navbar — logo, nav links (Home, About, Blog, Cause, Contact), "Donate Now" CTA, sticky
  3. Hero — full-width background image with green overlay, headline + "Learn More" CTA
  4. Reasons — "Reason of Helping" title, three feature cards
  5. Latest Activities — background image with green overlay, heading + "Donate Now" CTA
  6. Popular Causes — three cause cards with progress bars, raised/goal amounts
  7. Counter/Stats — four stat boxes with icons over green overlay background
  8. Volunteers — three team member cards with hover overlay
  9. News/Blog — three blog post cards with category tags
  10. Donation Form — amount buttons ($25/$50/$100/$200), name/email inputs, "Donate Now" submit
  11. Footer — four columns (About, Services, Contacts, Top News) + Component Dock link

## Requirements

### Requirement: Top bar

The top bar SHALL display contact information (phone, email) and social media icon links.

#### Scenario: Contact information visible

- **WHEN** the user visits the Kindfund homepage
- **THEN** the top bar shows a phone number and email address
- **AND** social media icon links are visible on the right side

### Requirement: Navbar

The navbar SHALL be sticky with navigation links and a "Donate Now" CTA, with a mobile hamburger menu.

#### Scenario: Desktop navbar with links and CTA

- **WHEN** the user views the page on desktop
- **THEN** the navbar shows the brand "Kindfund", all navigation links, and the "Donate Now" button

#### Scenario: Mobile navbar toggle

- **WHEN** the user is on mobile viewport
- **THEN** a hamburger button is visible that toggles the mobile menu
- **WHEN** the user taps the hamburger button
- **THEN** the mobile menu opens with all navigation links
- **WHEN** the user taps a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section

The hero section SHALL display a headline about helping children with a "Learn More" CTA button over a full-width background image with green overlay.

#### Scenario: Hero renders heading and CTA

- **WHEN** the user visits the Kindfund homepage
- **THEN** a headline about helping children is displayed
- **AND** a "Learn More" call-to-action button linking to causes is present
- **AND** the hero has a full-width background image with green overlay

### Requirement: Reasons section

The reasons section SHALL display three feature cards (Collecting Fund, Blood Camp, Friendly Volunteer) with icons, descriptions, and "Read More" links.

#### Scenario: Three reasons render with icons and descriptions

- **WHEN** the user scrolls to the "Reason of Helping" section
- **THEN** three feature cards are displayed: Collecting Fund, Blood Camp, Friendly Volunteer
- **AND** each card has an icon, title, description, and "Read More" link

### Requirement: Latest Activities section

The latest activities section SHALL display a background image with green-tinted overlay, a heading, description, and "Donate Now" button.

#### Scenario: Latest Activities content renders

- **WHEN** the user scrolls to the Latest Activities section
- **THEN** a background image with green-tinted overlay is displayed
- **AND** the section contains a heading, description paragraph, and "Donate Now" button

### Requirement: Popular Causes section

The popular causes section SHALL display three cause cards with progress bars showing raised/goal amounts and "Read More" links.

#### Scenario: Cause cards render with progress information

- **WHEN** the user scrolls to the "Popular Causes" section
- **THEN** three cause cards are displayed
- **AND** each card shows a progress bar with percentage and dollar amounts (Raised / Goal)
- **AND** each card has a title, description, and "Read More" link

### Requirement: Counter stats section

The counter section SHALL display four stat boxes with icons and numbers over a green overlay background.

#### Scenario: Stats render with icons and values

- **WHEN** the user scrolls to the counter/stats section
- **THEN** four stat boxes are displayed with icons and numbers
- **AND** the section has a green overlay background

### Requirement: Volunteer section

The volunteer section SHALL display three team member cards with photo, name, and role.

#### Scenario: Volunteer cards render with names and roles

- **WHEN** the user scrolls to the "Our Volunteer" section
- **THEN** three team member cards are displayed
- **AND** each card shows a photo, name, and role

### Requirement: News section

The news section SHALL display three blog post cards with images, category tags, dates, and "Read More" links.

#### Scenario: Blog posts render with category tags

- **WHEN** the user scrolls to the "News & Updates" section
- **THEN** three blog post cards are displayed
- **AND** each card has an image, category tag, date, title, and "Read More" link

### Requirement: Donation form

The donation form SHALL display amount buttons ($25, $50, $100, $200), name and email inputs, and a "Donate Now" submit button.

#### Scenario: Donation form renders and handles interaction

- **WHEN** the user scrolls to the "Make a Donation" section
- **THEN** donation amount buttons are displayed ($25, $50, $100, $200)
- **AND** name and email input fields are present
- **AND** a "Donate Now" submit button is visible
- **WHEN** the user clicks an amount button
- **THEN** the selected button is highlighted

### Requirement: Footer

The footer SHALL include four columns (About, Services, Contacts, Top News) and a "Made with Component Dock" attribution link to https://www.componentdock.com/.

#### Scenario: Footer renders all sections with CD link

- **WHEN** the user scrolls to the footer
- **THEN** four columns are displayed: About + social, Services links, Contacts, Top News
- **AND** a "Made with Component Dock" link to https://www.componentdock.com/ is present
- **AND** the footer background is light green-tinted #F3FCF8

### Requirement: Responsive layout

The layout SHALL be responsive on mobile devices with hamburger menu, stacked cards, and 2×2 grid for stats.

#### Scenario: Mobile responsive layout

- **WHEN** the user views Kindfund on a mobile device (< 768px)
- **THEN** the navbar collapses into a hamburger menu
- **AND** cards stack vertically in a single column
- **AND** the counter stats wrap into a 2×2 grid

## Verification checklist

- [ ] Spec reviewed; all sections from the original DOM mapped 1:1
- [ ] Design tokens match the extracted CSS values
- [ ] Section order matches: top bar → navbar → hero → reasons → latest activities → popular causes → counter → volunteer → news → donation form → footer
- [ ] Footer has Component Dock attribution link
- [ ] No ColorLib references in any app code
- [ ] 100% test coverage on all components
- [ ] `npm run verify:app kindfund` passes
