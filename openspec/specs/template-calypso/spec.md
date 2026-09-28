# Calypso Template — OpenSpec

Personal portfolio / resume template recreating ColorLib Calvin.

## Purpose

Provide a free, open-source React portfolio/resume template with a modern design featuring a hero section, services grid, portfolio gallery, skill bars, testimonials, blog, and a branded footer.

## Requirements

### Requirement: Navbar — Logo, Navigation, and CTA

The Navbar SHALL display a logo on the left, navigation links (Home, Work, Service, Blog, Contact) in the center, and a "Let's Talk" CTA button on the right.

#### Scenario: Desktop navbar renders all elements

- **GIVEN** the viewport width is ≥ 768 px
- **WHEN** the page loads
- **THEN** the Navbar displays the "Calypso" logo text
- **AND** the Navbar displays navigation links: Home, Work, Service, Blog, Contact
- **AND** the Navbar displays a "Let's Talk" button with brand color background

#### Scenario: Mobile hamburger toggle

- **GIVEN** the viewport width is < 768 px
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile navigation menu expands
- **AND** the user can see all navigation links and the CTA button

#### Scenario: Mobile menu closes on link click

- **GIVEN** the mobile menu is open
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes

---

### Requirement: Hero — Person Image, Name, and Title

The Hero section SHALL display a person image alongside a heading with name and title.

#### Scenario: Hero renders heading and image

- **GIVEN** the page loads
- **WHEN** the Hero section is visible
- **THEN** the heading reads "My name is Alex. Digital Product Designer"
- **AND** a profile image is displayed from picsum.photos
- **AND** two CTA buttons are shown: "View My Work" and "Get In Touch"

---

### Requirement: About Info Bar — Contact Details

The About Info Bar SHALL display three contact items: Design For, Phone, and Email.

#### Scenario: Info bar renders all three items

- **GIVEN** the page loads
- **WHEN** the About Info Bar section is visible
- **THEN** it displays "Design For" with value "Web & Mobile"
- **AND** it displays "Phone" with value "+1 (555) 234-5678"
- **AND** it displays "Email" with value "alex@calypso.design"

---

### Requirement: Services — 4 Cards in 2×2 Grid

The Services section SHALL display 4 service cards in a 2-column grid with icons, titles, and descriptions.

#### Scenario: All four services render

- **GIVEN** the page loads
- **WHEN** the Services section is visible
- **THEN** it displays cards for Strategy, UX Design, Development, and Marketing
- **AND** each card has an icon, title, and description paragraph

---

### Requirement: Gallery — 4 Images with Hover Overlay

The Gallery section SHALL display 4 portfolio images in a 2-column grid with hover overlays.

#### Scenario: Gallery renders all items

- **GIVEN** the page loads
- **WHEN** the Gallery section is visible
- **THEN** it displays 4 images with alt text: Project Alpha, Project Beta, Project Gamma, Project Delta
- **AND** each image is loaded from picsum.photos

---

### Requirement: About Me — Text and Skill Bars

The About Me section SHALL display biographical text alongside 3 skill progress bars.

#### Scenario: About Me renders skills with percentages

- **GIVEN** the page loads
- **WHEN** the About Me section is visible
- **THEN** it displays skill bars for UI Design (60%), UX Research (89%), and Illustration (95%)
- **AND** each skill bar has a label, percentage, and visual progress indicator

---

### Requirement: Brand Carousel

The Brand Carousel section SHALL display a row of 6 brand placeholders.

#### Scenario: All brands render

- **GIVEN** the page loads
- **WHEN** the Brand Carousel section is visible
- **THEN** it displays 6 brand items: Brand Alpha through Brand Zeta

---

### Requirement: Testimonials — Quote and Author

The Testimonials section SHALL display a client quote with author info.

#### Scenario: Testimonial renders correctly

- **GIVEN** the page loads
- **WHEN** the Testimonials section is visible
- **THEN** it displays a quote about Alex's design work
- **AND** it shows the author "Sarah Johnson" with role "VP of Product, TechCorp"
- **AND** it shows the author's avatar image from picsum.photos

---

### Requirement: Blog — 3 Article Cards

The Blog section SHALL display 3 blog post cards with images, categories, dates, and titles.

#### Scenario: All blog posts render

- **GIVEN** the page loads
- **WHEN** the Blog section is visible
- **THEN** it displays 3 articles with titles, categories, and dates
- **AND** each article has a thumbnail image from picsum.photos

---

### Requirement: Footer — CTA, Copyright, and Component Dock Link

The Footer SHALL display a CTA area, social links, and a copyright line linking to Component Dock.

#### Scenario: Footer renders all elements

- **GIVEN** the page loads
- **WHEN** the Footer is visible
- **THEN** it displays a CTA heading "Have a project in mind?"
- **AND** it shows "Let's Talk" and "Download CV" buttons
- **AND** it shows social links for Twitter, GitHub, and LinkedIn
- **AND** it links to https://www.componentdock.com/ with text "Component Dock"

---

### Requirement: Responsive Behavior — Mobile

The template SHALL be fully responsive on mobile viewports (≤ 767 px).

#### Scenario: Mobile layout stacks sections

- **GIVEN** the viewport width is ≤ 767 px
- **WHEN** the page loads
- **THEN** all grid layouts switch to single-column
- **AND** the Navbar collapses to a hamburger menu
