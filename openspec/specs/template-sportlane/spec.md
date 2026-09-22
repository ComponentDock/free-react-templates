---
name: sportlane
description: Gym/fitness landing page with hero slider, intro features, about, quote, CTA, classes carousel, pricing, and footer
template: colorlib-sportify
source: https://preview.colorlib.com/theme/sportify/
---

## Purpose

Recreation of ColorLib Sportify (https://colorlib.com/wp/template/sportify/) — a gym/fitness landing page with hero slider, feature boxes, about section, call-to-action, classes carousel, and pricing plans. The new name is "Sportlane".

### Design Tokens

- Font: Open Sans (Google Fonts)
- Primary brand color: #ff0e3b (vivid red — CTAs, buttons, highlights)
- Secondary brand color: #190a49 (dark navy/purple — header, pricing boxes, footer, menu)
- Purple accent: #7800ff (gradient overlays, secondary buttons)
- Gradient: linear-gradient(to right, rgba(120,0,255,0.34), rgba(255,14,59,0.34))
- Body text: #2c2c2c
- Muted text: #909090, #a5a5a5
- Background: #ffffff (white)
- Section alt background: #eef3f6 (light blue-grey)
- Pricing alt: #ffc016 (gold/yellow accent for alternate pricing box)
- Footer background: #0f0432 (deep dark purple)
- Footer text: #ffffff, rgba(255,255,255,0.38)
- Quote background: #190a49
- CTA purple: #443586 (quote author area)
- Button border-radius: 22px (fully rounded pill buttons)
- Icon circles: 50% border-radius (social/feature icons)
- Parallax backgrounds used on pricing section

## Requirements

### Requirement: Navbar with logo and navigation

The page SHALL render a header with the Sportlane logo, desktop navigation links (Home, About Us, Classes, Blog, Contact), social media icons, and a hamburger menu for mobile.

#### Scenario: Navigation links are present

- **WHEN** the page loads
- **THEN** links for Home, About Us, Classes, Blog, and Contact are visible in the header

#### Scenario: Logo is present

- **WHEN** the page loads
- **THEN** the Sportlane logo is visible in the header

#### Scenario: Social media icons are present

- **WHEN** the page loads
- **THEN** social media icons (Facebook, Twitter, Google+, Instagram) are visible in the header

### Requirement: Hero section with slider

The page SHALL render a full-width hero section with a carousel of slides, each containing a background image, overlay, subtitle, title, and CTA button.

#### Scenario: Hero slider renders

- **WHEN** the page loads
- **THEN** a hero section with background image, title text, and a "Go to the gym now!" CTA button is visible

#### Scenario: Multiple slides exist

- **WHEN** the page loads
- **THEN** multiple slides with different background images are present (carousel)

### Requirement: Intro feature boxes

The page SHALL render a row of 3 feature boxes, each with an icon, title, and description text.

#### Scenario: Three feature boxes are shown

- **WHEN** the page loads
- **THEN** feature titles "Aerobics Program", "Train Hard", and "Basic Program" are visible with descriptions

#### Scenario: Feature boxes have icons

- **WHEN** the page loads
- **THEN** each feature box displays an icon above its title

### Requirement: About section

The page SHALL render a split about section with a title, description text, a "Read More" CTA button on the left, and an image on the right.

#### Scenario: About heading renders

- **WHEN** the page loads
- **THEN** the heading "About Sportlane" is visible

#### Scenario: Read More button is present

- **WHEN** the page loads
- **THEN** a "Read More" button is visible in the about section

### Requirement: Quote section

The page SHALL render a quote/testimonial section on a dark background with quotation text and an author attribution.

#### Scenario: Quote text renders

- **WHEN** the page loads
- **THEN** a quote about training is visible with an author name

### Requirement: CTA (Join Our Gym) section

The page SHALL render a split CTA section with an image on the left, a bulleted list of gym features on the right, and two CTA buttons.

#### Scenario: CTA heading renders

- **WHEN** the page loads
- **THEN** the heading "Join Our Gym" is visible

#### Scenario: CTA list items render

- **WHEN** the page loads
- **THEN** at least 4 list items describing gym features are visible

#### Scenario: CTA buttons are present

- **WHEN** the page loads
- **THEN** two CTA buttons ("Read More" variants) are visible

### Requirement: Classes carousel section

The page SHALL render a classes section with a carousel of class cards, each showing a class image, title, and description.

#### Scenario: Classes heading renders

- **WHEN** the page loads
- **THEN** the heading "Classes" is visible

#### Scenario: Class cards render

- **WHEN** the page loads
- **THEN** class titles "Aerobics", "Pilates", and "Yoga" are visible with descriptions

#### Scenario: Our Programs link

- **WHEN** the page loads
- **THEN** an "Our Programs" link is visible in the classes section

### Requirement: Pricing section

The page SHALL render a pricing section on a parallax background with 3 pricing cards, each showing a plan name, price, feature list, and CTA button.

#### Scenario: Pricing heading renders

- **WHEN** the page loads
- **THEN** the heading "Pricing" is visible

#### Scenario: Three pricing plans render

- **WHEN** the page loads
- **THEN** 3 pricing cards are visible with feature lists and "Order Plan" buttons

### Requirement: Footer

The page SHALL render a footer with a logo, three columns of content (contact info, quick links, address), social media links, and a copyright bar.

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** a footer section with contact information and links is visible

#### Scenario: Footer has copyright

- **WHEN** the page loads
- **THEN** a copyright text is visible at the bottom of the footer

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

## Verification Checklist

- [ ] Open Sans font loaded from Google Fonts
- [ ] Hero slider renders with background images and CTAs
- [ ] 3 intro feature boxes with icons
- [ ] About section with split layout (text + image)
- [ ] Quote section on dark background
- [ ] CTA section with image, list, and buttons
- [ ] Classes carousel with 3 class cards
- [ ] Pricing section on parallax background with 3 plans
- [ ] Footer with logo, columns, social icons, and copyright
- [ ] All brand colors match tokens (#ff0e3b, #190a49, #7800ff)
- [ ] Pill-shaped buttons (border-radius: 22px)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
- [ ] Builds without errors
