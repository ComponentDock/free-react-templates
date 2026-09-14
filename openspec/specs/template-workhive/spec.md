# Workhive — Coworking & Shared Workspace Landing Template

## Purpose

Recreation of ColorLib "Sharespace" (https://colorlib.com/wp/template/sharespace/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page coworking/workspace landing page. Delivers a sticky navbar with logo and social icons, a hero with background image and floating rating badge, an about section with 2-column layout, testimonials on peach background, a spaces gallery with hover overlays, features with check icons, a video section with play button, a brands logo strip, a blog grid, and a dark footer with subscribe form and Component Dock link.

## Design Tokens

| Token        | Value        | Usage                                          |
| ------------ | ------------ | ---------------------------------------------- |
| Primary      | #F86011      | Buttons, accents, hover states, underlines     |
| Primary Dark | #e2560b      | Button hover gradient                          |
| Bg Peach     | #FFF8F5      | Testimonials, brands, feature cards            |
| Heading      | #072366      | Section headings (dark navy) — via `ink` token |
| Nav Text     | #1D2547      | Navigation links — via `nav-text` token        |
| Body Text    | #5E5E5E      | Paragraphs — via `body` token                  |
| Font Display | DM Sans      | Headings, nav, buttons — via `font-display`    |
| Font Body    | Josefin Sans | Body text, paragraphs                          |

## Requirements

### Requirement: Sticky navbar with logo, navigation links, and social icons

The template SHALL render a sticky top navbar with the logo text "Workhive" on the left, navigation links (Home, Spaces, About, Blog, Contact) in the center, and social icon links (Twitter, Facebook, LinkedIn) on the right. On mobile, a hamburger toggle button SHALL show/hide a slide-down menu containing all nav links and social icons.

#### Scenario: Desktop navbar renders logo and nav links

- **GIVEN** the page is loaded on a desktop viewport
- **THEN** I see a sticky navbar with the logo "Workhive"
- **AND** I see navigation links: Home, Spaces, About, Blog, Contact
- **AND** I see social icon links for Twitter, Facebook, and LinkedIn

#### Scenario: Mobile menu toggles open and closed

- **GIVEN** the page is loaded on mobile
- **WHEN** I click the "Open menu" button
- **THEN** the mobile menu appears with all nav links
- **AND** the button label changes to "Close menu"

#### Scenario: Mobile menu closes when a link is clicked

- **GIVEN** the mobile menu is open
- **WHEN** I click a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section with background image, heading, and rating badge

The template SHALL render a full-width hero section with a background image and dark overlay, a heading "Amazing workspace you will love", a subtitle about discovering spaces, an "Explore Our Spaces" CTA button linking to the spaces section, and a floating rating badge showing "4.8" with 5 star icons.

#### Scenario: Hero renders heading and CTA

- **GIVEN** the page is loaded
- **THEN** I see the heading "Amazing workspace you will love"
- **AND** I see an "Explore Our Spaces" button linking to "#spaces"

#### Scenario: Hero displays floating rating badge

- **GIVEN** the page is loaded
- **THEN** I see a rating badge displaying "4.8"
- **AND** I see 5 star icons in the badge

### Requirement: About section with 2-column image and text layout

The template SHALL render an "About Us" section with a 2-column grid: a workspace image on the left and text content on the right containing the label "About Us", a heading "Premium quality spaces for agency and personal", a descriptive paragraph, and a "Learn More" link with an arrow icon.

#### Scenario: About section renders heading, text, and image

- **GIVEN** the page is loaded
- **THEN** I see the label "About Us"
- **AND** I see the heading "Premium quality spaces for agency and personal"
- **AND** I see a "Learn More" link

### Requirement: Testimonials section on peach background

The template SHALL render a testimonials section with a peach background, a centered heading "Spaces that you'd love", a blockquote with testimonial text, and the author name and role.

#### Scenario: Testimonials section renders quote and author

- **GIVEN** the page is loaded
- **THEN** I see the heading "Spaces that you'd love"
- **AND** I see a blockquote with testimonial text
- **AND** I see the author name "Sarah Johnson" and role "Creative Director, Pixel Studio"

### Requirement: Spaces gallery with 3 hover-overlay cards

The template SHALL render a spaces gallery section with 3 space cards (Modern Open Space, Private Studio, Collaborative Hub) in a 3-column grid. Each card SHALL show an image that reveals an overlay on hover with the heading "Spaces that you'd love", a price, and an "Explore More Spaces" button.

#### Scenario: Spaces section renders 3 cards

- **GIVEN** the page is loaded
- **THEN** I see 3 space cards
- **AND** I see an "Explore More Spaces" button on each card

### Requirement: Features section with 4 check-icon cards

The template SHALL render a features section with a centered "Features" label, a heading "Make the customer the hero of your story", and 4 feature cards (Money Saver, Locker and Key, Active Listening, Space for Events) each with a check icon, title, and description.

#### Scenario: Features section renders all 4 cards

- **GIVEN** the page is loaded
- **THEN** I see the label "Features"
- **AND** I see the heading "Make the customer the hero of your story"
- **AND** I see 4 feature cards with titles: Money Saver, Locker and Key, Active Listening, Space for Events

### Requirement: Video section with background image and play button

The template SHALL render a video section with a background image, dark overlay, and a centered circular play button.

#### Scenario: Video section renders play button

- **GIVEN** the page is loaded
- **THEN** I see a play button in the video section

### Requirement: Brands logo strip on peach background

The template SHALL render a brands section with a peach background displaying 5 brand name placeholders (Brand Alpha, Brand Beta, Brand Gamma, Brand Delta, Brand Epsilon) in a centered flex layout.

#### Scenario: Brands section renders brand placeholders

- **GIVEN** the page is loaded
- **THEN** I see 5 brand name placeholders

### Requirement: Blog section with 3 article cards

The template SHALL render a blog section with a centered "Our Insights" label, a heading "Company Insights", and 3 blog article cards each with an image, title, and excerpt.

#### Scenario: Blog section renders 3 cards

- **GIVEN** the page is loaded
- **THEN** I see the heading "Company Insights"
- **AND** I see 3 blog article cards

### Requirement: Footer with subscribe form, nav links, social icons, and Component Dock link

The template SHALL render a dark footer with a 3-column grid: brand name "Workhive" with description, Quick Links column with nav links, and a Subscribe section with email input and submit button. Below SHALL be centered social icon links (Twitter, Facebook, LinkedIn) and a copyright line with a link to Component Dock (https://www.componentdock.com/).

#### Scenario: Footer renders brand, subscribe form, and Component Dock link

- **GIVEN** the page is loaded
- **THEN** I see the brand name "Workhive" in the footer
- **AND** I see a subscribe form with an email input and a "Subscribe" button
- **AND** I see social icon links for Twitter, Facebook, and LinkedIn
- **AND** I see a copyright line with a link to Component Dock

### Requirement: App integration renders all sections in order

The template SHALL render all sections in the correct order: Navbar, Hero, About, Testimonials, Spaces, Features, VideoSection, Brands, Blog, Footer. The document title SHALL be set to "Workhive — Coworking & Shared Workspace Template".

#### Scenario: Full page renders all sections in order

- **GIVEN** the page is loaded
- **THEN** I see all sections rendered in order: Navbar, Hero, About, Testimonials, Spaces, Features, VideoSection, Brands, Blog, Footer
- **AND** the document title is "Workhive — Coworking & Shared Workspace Template"
