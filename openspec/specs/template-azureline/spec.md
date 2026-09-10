# Template: Azureline (Business Landing)

## Purpose

Recreation of ColorLib **Blueline** template as a fullscreen business landing page.

- **Source slug:** `blueline`
- **Preview URL:** https://preview.colorlib.com/theme/blueline/
- **ColorLib page:** https://colorlib.com/wp/template/blueline/
- **New name:** `azureline` (apps/azureline, @free-react-templates/azureline)

## Design tokens

- **Primary blue:** #2954c9
- **Gradient:** linear-gradient(0deg, #3c50ca, #77d5f7)
- **Accent cyan:** #77d5f7
- **Body background:** #f9f9ff
- **Dark sections:** #000000
- **Text color:** #777777
- **Heading color:** #222222
- **Font:** Poppins (Google Fonts, weights 200–700)

## Requirements

### Requirement: Navbar renders logo and navigation links

The navbar SHALL display a logo on the left and navigation links (Home, About, Services, Work, Contact) with smooth scroll, plus a mobile hamburger toggle.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page is loaded
- **THEN** I see a logo "Azureline" on the left
- **AND** I see navigation links for Home, About, Services, Work, Contact

#### Scenario: Mobile hamburger menu

- **WHEN** the page is loaded on a mobile viewport
- **THEN** I see a hamburger menu toggle button
- **AND** clicking it reveals the navigation links
- **AND** clicking a link closes the mobile menu

### Requirement: Hero displays fullscreen intro banner

The hero section SHALL display a fullscreen gradient background with centered "INTRODUCING" subtitle and "AZURELINE" main heading.

#### Scenario: Hero renders content

- **WHEN** I view the hero section
- **THEN** I see the subtitle "Introducing"
- **AND** I see the heading "Azureline" with large text styling
- **AND** the section has a dark-to-blue gradient background

### Requirement: Features display numbered cards

The features section SHALL display three numbered feature cards (01, 02, 03) with gradient text numbers, titles, and descriptions.

#### Scenario: Three features render

- **WHEN** I scroll to the features section
- **THEN** I see three feature cards
- **AND** each card has a gradient number (01, 02, 03)
- **AND** each card has a title and description paragraph

### Requirement: Video section shows thumbnail and content

The video section SHALL display a video thumbnail with a play button overlay and a heading with descriptive text below.

#### Scenario: Video section renders

- **WHEN** I view the video section
- **THEN** I see a video thumbnail image with a play button
- **AND** I see the heading "Great Modern Design Built with usability in mind"
- **AND** I see a descriptive paragraph

### Requirement: Services section with split layout

The services section SHALL display a dark left panel with "Services We Offered" heading and a white right panel with a 2x2 grid of service cards.

#### Scenario: Services render correctly

- **WHEN** I view the services section
- **THEN** I see the heading "Services We Offered"
- **AND** I see four service cards: Graphics Design, Web Development, Mobile Apps, SEO Marketing
- **AND** each card has an icon, title, and description

### Requirement: Latest Works carousel

The latest works section SHALL display a heading and an image carousel with prev/next navigation.

#### Scenario: Works carousel renders

- **WHEN** I view the latest works section
- **THEN** I see the heading "Some Of Our Latest Works"
- **AND** I see a portfolio image
- **AND** I see prev/next navigation buttons

#### Scenario: Carousel navigation

- **WHEN** I click the next button
- **THEN** the next slide is displayed
- **WHEN** I click the previous button
- **THEN** the previous slide is displayed

### Requirement: Newsletter subscription form

The newsletter section SHALL display a heading, email input, and a "Get Started" CTA button.

#### Scenario: Newsletter form renders

- **WHEN** I view the newsletter section
- **THEN** I see "Subscribe for our Newsletter"
- **AND** I see an email input field
- **AND** I see a "Get Started" button

### Requirement: Contact form with split layout

The contact section SHALL display an image on the left and a form (name, email, message, send button) on the right.

#### Scenario: Contact form renders

- **WHEN** I view the contact section
- **THEN** I see a contact image on the left
- **AND** I see input fields for name, email, and message
- **AND** I see a "Send Message" button

#### Scenario: Form prevents default submission

- **WHEN** I fill in the form and click "Send Message"
- **THEN** the page does not navigate away

### Requirement: Footer with Component Dock link

The footer SHALL display copyright text with the current year, social media icon links, and a link to Component Dock.

#### Scenario: Footer renders correctly

- **WHEN** I scroll to the footer
- **THEN** I see the copyright text with the current year
- **AND** I see social media links for Facebook, Twitter, Instagram, LinkedIn
- **AND** I see a "Component Dock" link pointing to https://www.componentdock.com/
