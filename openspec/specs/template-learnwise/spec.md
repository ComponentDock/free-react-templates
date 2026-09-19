# Template: Learnwise (Education & Courses)

## Purpose

Recreation of ColorLib's "Clever" template — an education and online courses website. The React version preserves the same section structure, design tokens, and layout patterns while using modern React 19 + Vite + Tailwind CSS 4 + TypeScript.

- **Source**: ColorLib Clever (https://colorlib.com/wp/template/clever/)
- **Preview**: https://preview.colorlib.com/theme/clever/
- **Package**: `@free-react-templates/learnwise`
- **Surge target**: `learnwise.free.componentdock.com`

## Requirements

### Requirement: TopHeader displays contact info and social links

The template SHALL render a top header bar with contact information (phone, email) and social media icon links.

#### Scenario: Contact info visible

- **WHEN** the page loads
- **THEN** the top header shows "Phone: +44 300 303 0266" and "Email: info@learnwise.com"

#### Scenario: Social links open in new tab

- **WHEN** the user clicks a social icon in the top header
- **THEN** the link opens in a new tab

### Requirement: Navbar with navigation and actions

The template SHALL render a sticky navbar with logo, navigation links, search icon, and Register/Login buttons.

#### Scenario: Desktop nav links

- **WHEN** the page loads on desktop
- **THEN** navigation links for Home, Courses, Instructors, Blog, and Contact are visible

#### Scenario: Register and Login buttons

- **WHEN** the page loads
- **THEN** "Register" and "Login" buttons are rendered in the navbar

#### Scenario: Mobile hamburger menu toggles

- **WHEN** the viewport width is less than 768px and the user clicks the hamburger icon
- **THEN** the mobile navigation menu opens with all nav links

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a nav link is clicked
- **THEN** the mobile menu closes

### Requirement: Hero section with parallax background

The template SHALL render a full-width hero section with a parallax background image, dark overlay, heading, and CTA button.

#### Scenario: Hero displays heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows "Let's Study Together" heading and a "Get Started" CTA button

### Requirement: CoolFacts section with four statistics

The template SHALL render a four-column grid of statistics with icons, numbers, and labels.

#### Scenario: Four statistics displayed

- **WHEN** the cool facts section is visible
- **THEN** four statistics are displayed: "1912 Success Stories", "123 Dedicated Tutors", "89 Scheduled Events", "56 Available Courses"

### Requirement: PopularCourses section with three course cards

The template SHALL render a three-column grid of course cards with images, titles, metadata, descriptions, and fees.

#### Scenario: Three course cards rendered

- **WHEN** the popular courses section is visible
- **THEN** three course cards are displayed with titles "English Grammar", "Vocabulary", and "Expository Writing"

#### Scenario: Course fees displayed

- **WHEN** the popular courses section is visible
- **THEN** each card shows a fee: "Free", "$20", or "$45"

### Requirement: BestTutors section with carousel

The template SHALL render a horizontal scrollable carousel of tutor cards with photos, names, roles, bios, and social icons.

#### Scenario: Tutor cards rendered

- **WHEN** the best tutors section is visible
- **THEN** five tutor cards are displayed with names "Alex Parker", "Maria Johnson", "James Wilson", "Sophie Chen", and "David Brown"

#### Scenario: Carousel navigation buttons

- **WHEN** the best tutors section is visible
- **THEN** "Previous tutor" and "Next tutor" navigation buttons are rendered

### Requirement: RegisterNow split section with form

The template SHALL render a split section with a registration form on the left and CTA text on the right.

#### Scenario: Registration form fields

- **WHEN** the register section is visible
- **THEN** a form with Name, Email, Phone, and Site input fields and a "Send Message" button is rendered

#### Scenario: Form submission

- **WHEN** the user submits the registration form
- **THEN** the form does not navigate away (preventDefault)

### Requirement: UpcomingEvents section with event cards

The template SHALL render a three-column grid of event cards with images, date badges, titles, times, and fees.

#### Scenario: Three event cards rendered

- **WHEN** the upcoming events section is visible
- **THEN** three event cards are displayed with titles "Networking Day", "Open Doors Day", and "Creative Leadership"

#### Scenario: Date badges displayed

- **WHEN** the upcoming events section is visible
- **THEN** each card shows a date badge with the event date

### Requirement: Blog section with two post cards

The template SHALL render a two-column grid of blog post cards with images, headlines, metadata, and excerpts.

#### Scenario: Two blog posts rendered

- **WHEN** the blog section is visible
- **THEN** two blog posts are displayed with titles "Effective Study Habits" and "Online Learning Tips"

### Requirement: Footer with Component Dock link

The template SHALL render a dark footer with logo, copyright, contact info, social links, and a link to Component Dock.

#### Scenario: Footer displays copyright and contact

- **WHEN** the footer is visible
- **THEN** the footer shows the "Learnwise" logo, copyright text, phone number, and email

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" branded as "Component Dock" is present and opens in a new tab

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Top header with contact info and social links
- [ ] Sticky navbar with logo, nav links, search, register/login
- [ ] Hero with parallax background, heading, CTA button
- [ ] Cool facts with 4 counters (1912, 123, 89, 56) and icons
- [ ] Popular courses with 3 cards (image, title, meta, description, price)
- [ ] Best tutors carousel with tutor slides (photo, name, role, bio, social)
- [ ] Register Now split section with form and CTA text
- [ ] Upcoming events with 3 cards (image, date badge, title, time, fee)
- [ ] Blog with 2 cards (image, headline, meta, excerpt)
- [ ] Footer with logo, copyright, contact info, social links, Component Dock link
- [ ] Design tokens: #3762f0 primary blue, #e3d21b accent yellow, Raleway + Open Sans fonts
- [ ] Button style: height 40px, min-width 160px, #3762f0 bg, uppercase, 6px radius
- [ ] Mobile responsive: hamburger menu, stacked layouts
- [ ] 100% test coverage (lines, functions, branches, statements)
