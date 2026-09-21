# Template: FitForge (Crossfit & Fitness Landing)

## Purpose

Recreation of ColorLib **Crossfit** — a crossfit/gym landing page with hero, features, subscription, portfolio, testimonials, pricing plans, CTA banner, and footer.

- **Source slug:** `crossfit`
- **ColorLib URL:** https://colorlib.com/wp/template/crossfit/
- **Preview URL:** https://preview.colorlib.com/theme/crossfit/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Name:** FitForge (new name — never reuse "Crossfit")

## Requirements

### Requirement: Navbar with logo, navigation, and CTA

The page SHALL display a fixed navbar with the "FitForge" logo, navigation links (Home, About, Classes, News, Contact), a search icon, and a "Get in touch" CTA button. The navbar SHALL support a mobile hamburger menu toggle.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on desktop
- **THEN** the navbar shows "FitForge" logo, all five nav links, search button, and "Get in touch" button

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens with all nav links
- **AND** clicking a nav link closes the menu

### Requirement: Hero section with headline and CTA

The page SHALL display a full-width hero section with a background image, the headline "Don't stop when you're tired. Stop when you're done", and a "Get Started" CTA button.

#### Scenario: Hero renders headline and CTA

- **WHEN** the hero section is visible
- **THEN** the heading text contains "Don't stop when you're tired"
- **AND** a "Get Started" link is present

### Requirement: Features section with 4 feature cards

The page SHALL display a features section with 4 feature cards, each containing an icon, title, and description. The features are: Award Winning Gym, Expert Coaches, Nutrition Plans, Community Events.

#### Scenario: All 4 features render

- **WHEN** the features section is visible
- **THEN** 4 feature cards are displayed with icons and text

### Requirement: Subscription section with benefits list

The page SHALL display a split subscription section with a heading "Get your subscription", descriptive text, a checklist of 4 benefits, a CTA button, and an image on the right.

#### Scenario: Subscription renders all elements

- **WHEN** the subscription section is visible
- **THEN** the heading says "Get your subscription"
- **AND** 4 benefit items are listed with check icons

### Requirement: Portfolio gallery with hover overlay

The page SHALL display a portfolio section with 4 images that show a "View More" overlay on hover.

#### Scenario: Portfolio images and overlays

- **WHEN** the portfolio section is visible
- **THEN** 4 portfolio images are displayed
- **AND** each image has a "View More" overlay text

### Requirement: Testimonials section

The page SHALL display a testimonials section with a quote, author avatar, name, and role.

#### Scenario: Testimonial content renders

- **WHEN** the testimonials section is visible
- **THEN** a testimonial quote is displayed
- **AND** the author name "James Smith" and role "Crossfit Coach" are shown

### Requirement: Pricing plans section

The page SHALL display a pricing section with 3 plan cards: Free Trial ($0), Basic ($30), and Unlimited ($55), each with feature lists and CTA buttons.

#### Scenario: All 3 pricing plans render

- **WHEN** the pricing section is visible
- **THEN** 3 plan cards are displayed with prices $0, $30, and $55
- **AND** each plan has a "Get it now" button

### Requirement: CTA banner

The page SHALL display a call-to-action banner with the text "Get your subscription now!" where "subscription" is a link to the pricing section.

#### Scenario: CTA banner content

- **WHEN** the CTA banner is visible
- **THEN** the text "now!" is displayed
- **AND** a "subscription" link points to the pricing section

### Requirement: Footer with Component Dock link

The page SHALL display a footer with the FitForge logo, description, social media icons (Facebook, Twitter, Instagram, YouTube), and a "More templates at Component Dock" link to https://www.componentdock.com/.

#### Scenario: Footer renders all elements

- **WHEN** the footer is visible
- **THEN** social media icon links are present (Facebook, Twitter, Instagram, YouTube)
- **AND** a "Component Dock" link points to https://www.componentdock.com/

### Requirement: Page landmarks for accessibility

The page SHALL include proper HTML landmarks: navigation, main content area, and footer.

#### Scenario: Accessibility landmarks

- **WHEN** the page loads
- **THEN** a navigation landmark is present
- **AND** a main landmark is present
- **AND** a contentinfo (footer) landmark is present
