# Template: Archcraft (Architecture / Interior Design)

## Purpose

Recreation of the ColorLib "Archs" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `archs`
- **Source URL:** https://colorlib.com/wp/template/archs/
- **Preview URL:** https://preview.colorlib.com/theme/archs/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/archcraft`
- **Surge target:** `archcraft.free.componentdock.com`

## Requirements

### Requirement: Top bar renders social links and contact info

The template SHALL display a top bar with social media icon links (Twitter, Facebook, LinkedIn, Instagram) on the left and contact information (email, phone) on the right.

#### Scenario: Top bar renders social links and contact info

- **WHEN** the template is loaded in a browser
- **THEN** I should see social icon links for Twitter, Facebook, LinkedIn, and Instagram
- **AND** I should see an email address and phone number

### Requirement: Navbar displays logo and navigation

The template SHALL display a sticky navbar with the logo "Archcraft" on the left, navigation links (Home, About Us, Services, News, Contact) on the right, a dropdown under "More" with Team/Pricing/FAQ, a "Get a Quote" CTA, and a mobile hamburger menu.

#### Scenario: Navbar displays logo and navigation

- **WHEN** the template is loaded in a browser
- **THEN** I should see the logo text "Archcraft"
- **AND** I should see navigation links: Home, About Us, Services, News, Contact
- **AND** I should see a "Get a Quote" button
- **AND** I should see a "More" dropdown button

#### Scenario: Dropdown menu opens and closes

- **WHEN** I click the "More" dropdown button
- **THEN** I should see a dropdown with Team, Pricing, FAQ
- **WHEN** I click a dropdown item
- **THEN** the dropdown should close

#### Scenario: Mobile menu opens and closes

- **WHEN** I click the "Open menu" button
- **THEN** I should see a mobile navigation menu
- **WHEN** I click a link in the mobile menu
- **THEN** the mobile menu should close

### Requirement: Hero section shows headline and subtitle

The template SHALL display a full-width hero section with a background image, dark overlay, play button, "Interior Design" headline, and italic subtitle.

#### Scenario: Hero section shows headline and subtitle

- **WHEN** the template is loaded in a browser
- **THEN** I should see the heading "Interior Design"
- **AND** I should see an italic subtitle paragraph
- **AND** I should see a video play button

### Requirement: Features strip displays 3 items

The template SHALL display a features strip with 3 items in a grid, each containing an icon, heading, and description.

#### Scenario: Features strip displays 3 items

- **WHEN** the template is loaded in a browser
- **THEN** I should see 3 feature items
- **AND** each feature should have an icon, heading, and description

### Requirement: About section renders content

The template SHALL display an About section with "About Us" heading and descriptive paragraphs.

#### Scenario: About section renders content

- **WHEN** the template is loaded in a browser
- **THEN** I should see an "About Us" heading
- **AND** I should see a description paragraph

### Requirement: Team section shows 6 members

The template SHALL display a Team section with "Our Team" heading and 6 team member cards in a 3-column grid, each with photo, name, role, and social icons.

#### Scenario: Team section shows 6 members

- **WHEN** the template is loaded in a browser
- **THEN** I should see the heading "Our Team"
- **AND** I should see 6 team member cards
- **AND** each card should show a photo, name, role, and social icons

### Requirement: Pricing section shows 3 plans

The template SHALL display a Pricing section with "Choose Your Plan" heading and 3 pricing cards (Starter $30, Professional $72, Enterprise $149), each with features list and "Buy Now" button.

#### Scenario: Pricing section shows 3 plans

- **WHEN** the template is loaded in a browser
- **THEN** I should see the heading "Choose Your Plan"
- **AND** I should see 3 pricing cards
- **AND** each card should show a plan name, price, features list, and buy button

### Requirement: FAQ section has accordion with 5 items

The template SHALL display a FAQ section with split layout (image left, accordion right), "Frequently Ask Questions" heading, and 5 expandable accordion items.

#### Scenario: FAQ section has accordion with 5 items

- **WHEN** the template is loaded in a browser
- **THEN** I should see the heading "Frequently Ask Questions"
- **AND** I should see an image on the left
- **AND** I should see 5 accordion questions on the right
- **WHEN** I click a question
- **THEN** the answer should expand
- **WHEN** I click the same question again
- **THEN** the answer should collapse

### Requirement: Testimonials carousel displays client quotes

The template SHALL display a Testimonials section with "Testimonials" heading and a carousel of 4 testimonial items with photo, name, role, and quote, with prev/next navigation.

#### Scenario: Testimonials carousel displays client quotes

- **WHEN** the template is loaded in a browser
- **THEN** I should see the heading "Testimonials"
- **AND** I should see a testimonial with photo, name, role, and quote
- **WHEN** I click "Next testimonial"
- **THEN** the next testimonial should display
- **WHEN** I click "Previous testimonial"
- **THEN** the previous testimonial should display

### Requirement: Projects gallery shows 6 items

The template SHALL display a Projects section with "Our Projects" heading and 6 project cards in a 3-column grid, each with image, name, and category.

#### Scenario: Projects gallery shows 6 items

- **WHEN** the template is loaded in a browser
- **THEN** I should see the heading "Our Projects"
- **AND** I should see 6 project cards
- **AND** each card should show an image, project name, and category

### Requirement: News section shows 3 blog posts

The template SHALL display a News section with "Our Blog Posts" heading, 3 blog post cards with image/date/title, and a "View All Posts" button.

#### Scenario: News section shows 3 blog posts

- **WHEN** the template is loaded in a browser
- **THEN** I should see the heading "Our Blog Posts"
- **AND** I should see 3 blog post cards with date and title
- **AND** I should see a "View All Posts" button

### Requirement: Services section shows 6 items

The template SHALL display a Services section with "Our Services" heading and 6 service items in a 3-column grid, each with icon, heading, and description.

#### Scenario: Services section shows 6 items

- **WHEN** the template is loaded in a browser
- **THEN** I should see the heading "Our Services"
- **AND** I should see 6 service items with icon, heading, and description

### Requirement: Contact section has a form

The template SHALL display a Contact section with "Contact Us" heading, a form with Full Name, Email, and Message fields, and a "Send Message" button. Inputs SHALL highlight with the brand color on focus.

#### Scenario: Contact section has a form

- **WHEN** the template is loaded in a browser
- **THEN** I should see the heading "Contact Us"
- **AND** I should see a form with Full Name, Email, and Message fields
- **AND** I should see a "Send Message" button
- **WHEN** I fill in the form and submit
- **THEN** a confirmation message should appear

### Requirement: Footer renders all columns with Component Dock link

The template SHALL display a dark footer with 4 columns (About/Navigation, Recent News, Subscribe Newsletter, Follow Us) and a Component Dock attribution link in the bottom bar.

#### Scenario: Footer renders all columns

- **WHEN** the template is loaded in a browser
- **THEN** I should see About Us text, Navigation links, Recent News, Subscribe Newsletter, and Follow Us sections
- **AND** I should see a Component Dock attribution link

### Requirement: Responsive layout adapts to mobile

The template SHALL be responsive, collapsing the navbar to a hamburger menu and stacking grid sections vertically on mobile viewports.

#### Scenario: Responsive layout adapts to mobile

- **WHEN** I resize to 375×667
- **THEN** the navbar should collapse to a hamburger menu
- **AND** grid sections should stack vertically

## Verification Checklist

- [x] All 14 sections render in correct page order
- [x] Top bar shows social icons + contact info
- [x] Navbar is sticky on scroll with dropdown functionality
- [x] Hero has parallax background, play button, headline, subtitle
- [x] Features strip has 3 items with icons
- [x] About section renders heading + text
- [x] Team section shows 6 members with photos and social overlays
- [x] Pricing shows 3 cards with correct prices ($30, $72, $149)
- [x] FAQ accordion expands/collapses correctly (5 items)
- [x] Testimonials carousel slides through 4 items
- [x] Projects gallery has 6 items in 3-column grid
- [x] News section has 3 blog cards + "View All Posts" button
- [x] Services section shows 6 items with icons
- [x] Contact form has Full Name, Email, Message fields + Send Message button
- [x] Footer has all 4 columns with Component Dock link
- [x] Brand color #ff5733 used for buttons and accents
- [x] Nunito Sans font loaded for headings
- [x] Square buttons (no border-radius) with 2px border
- [x] Form focus borders use brand color
- [x] Responsive: mobile hamburger, stacked grids
- [x] No ColorLib references in app code
- [x] CNAME set to archcraft.free.componentdock.com
- [x] Coverage at 100% lines/functions/branches/statements
