# Heartward — Charity & Donation Landing

## Purpose

Recreation of ColorLib [Charilife](https://colorlib.com/wp/template/charilife/) as a free React template. Heartward is a charity and donation landing page with hero banner, about section, feature highlights, cause cards with progress, call-to-action banner, events with countdown, blog, newsletter, and footer.

## Design Tokens

- **Brand color:** `#ff573d` (coral/orange-red) — CTA buttons, accent
- **Dark background:** `#15181d` — navbar, footer
- **Light background:** `#ececec` — alternating sections
- **Body text:** `#666`
- **Fonts:** Lora (headings), Roboto (body)
- **Button style:** rounded, solid coral bg, white text, hover transitions

## Requirements

### Requirement: Sticky navbar with navigation and CTA

The page SHALL display a sticky navbar with brand name "Heartward", navigation links (Home, About, Features, Causes, Events, Blog), and a "Donate" CTA button.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop viewport
- **THEN** the navbar shows the brand "Heartward", all navigation links, and the "Donate" button

#### Scenario: Mobile navbar toggle

- **WHEN** the user is on mobile viewport
- **THEN** a hamburger button is visible that toggles the mobile menu
- **WHEN** the user taps the hamburger button
- **THEN** the mobile menu opens with all navigation links and the "Donate" link
- **WHEN** the user taps a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero banner section

The page SHALL display a full-width hero banner with background image, subtitle "More charity. More better life.", headline "Save the children", description text, and a "Start Donation" CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows the heading "Save the children"
- **AND** a "Start Donation" button links to the causes section

### Requirement: About section

The page SHALL display a two-column about section with heading "We Are A Non-profit Organization", descriptive text, an image, a "Learn More" CTA, and partner logos.

#### Scenario: About renders content

- **WHEN** the about section is visible
- **THEN** the heading "We Are A Non-profit Organization" is shown
- **AND** the "Learn More" link navigates to the features section
- **AND** 5 partner logos are displayed

### Requirement: Features section

The page SHALL display a features section with 3 feature cards: Give Donation, Give Inspiration, and Become Volunteer.

#### Scenario: All feature cards render

- **WHEN** the features section is visible
- **THEN** 3 feature cards are displayed with icons, titles, and descriptions

### Requirement: Popular Causes section

The page SHALL display a causes section with 3 cause cards, each showing an image, title, raised amount, goal amount, progress percentage, and a "Donate" button.

#### Scenario: Cause cards render with progress

- **WHEN** the causes section is visible
- **THEN** 3 cause cards are shown with donation progress information

### Requirement: Call-to-action banner

The page SHALL display a full-width CTA banner with background image, heading "Volunteer Needed At Your Area", description, and a "Learn More" button.

#### Scenario: CTA banner renders

- **WHEN** the CTA banner is visible
- **THEN** the heading "Volunteer Needed At Your Area" is shown
- **AND** a "Learn More" button links to the events section

### Requirement: Upcoming Events section

The page SHALL display an events section with 3 event cards, each showing an image, title, date badge, and countdown values (days, hours, minutes).

#### Scenario: Event cards render with countdown

- **WHEN** the events section is visible
- **THEN** 3 event cards are shown with date and countdown information

### Requirement: Blog section

The page SHALL display a blog section with a featured post (large card) and 3 sidebar posts (small cards), each showing category, title, date, and comment count.

#### Scenario: Blog renders featured and sidebar posts

- **WHEN** the blog section is visible
- **THEN** the featured post and 3 sidebar posts are displayed

### Requirement: Newsletter signup

The page SHALL display a newsletter section with heading "Need your help?", description, email input, and a "Subscribe" button.

#### Scenario: Newsletter form renders

- **WHEN** the newsletter section is visible
- **THEN** an email input and "Subscribe" button are displayed
- **WHEN** the user submits the form
- **THEN** the form prevents default submission

### Requirement: Footer

The page SHALL display a footer with About Us, Quick Links, Newsletter, Contact Us sections, social icons, copyright, and a "Component Dock" link.

#### Scenario: Footer renders all sections

- **WHEN** the footer is visible
- **THEN** the "About Us", "Quick Links", "Newsletter", and "Contact Us" sections are shown
- **AND** social icons (Facebook, Twitter, Instagram, Skype) are displayed
- **AND** the copyright text includes a "Component Dock" link to componentdock.com
