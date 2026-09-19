# Template: TickTock (Smart Timepieces)

## Purpose

TickTock is a single-page smartwatch landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Watch" free template (source: https://colorlib.com/wp/template/watch/), built under a DIFFERENT name (**TickTock**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a multi-section landing page for smartwatches with a blue gradient hero, about section with video, feature cards, product showcase on dark background, service grid, customer reviews with star ratings, FAQ accordion, and a footer with newsletter signup.

**Source slug:** `watch`
**Preview URL:** https://preview.colorlib.com/theme/watch/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/watch-free-template.jpg

## Design Tokens (extracted from live preview CSS)

### Colors

| Token       | Value                   | Usage                           |
| ----------- | ----------------------- | ------------------------------- |
| primary-500 | `#235ee7` (blue)        | CTA buttons, accent, links      |
| primary-600 | `#1a4bc5` (deeper blue) | Button hover                    |
| primary-800 | `#153083` (dark blue)   | Hero gradient start             |
| accent      | `#4cd3e3` (cyan)        | Secondary accent                |
| gray-500    | `#777777`               | Body text                       |
| gray-900    | `#222222`               | Headings, dark sections         |
| alt-bg      | `#f9f9ff`               | Light section backgrounds       |
| white       | `#fff`                  | Light backgrounds, text on dark |

### Typography

| Element   | Font    | Weight | Size |
| --------- | ------- | ------ | ---- |
| Body      | Poppins | 300    | 14px |
| Headings  | Poppins | 600    | 36px |
| Nav links | Poppins | 500    | 14px |

## Requirements

### Requirement: Navbar displays brand and navigation links

The template SHALL display a sticky navbar with the TickTock brand and 6 navigation links (Home, About, Services, Products, Reviews, FAQ).

#### Scenario: Desktop navbar renders all links

- **GIVEN** a user loads the page on a desktop viewport
- **WHEN** the navbar renders
- **THEN** the brand name "TickTock" and all 6 nav links are visible

#### Scenario: Mobile hamburger menu toggles

- **GIVEN** a user is on a mobile viewport
- **WHEN** they tap the hamburger button
- **THEN** the mobile menu opens showing all nav links
- **WHEN** they tap a nav link
- **THEN** the mobile menu closes

### Requirement: Hero section displays headline and CTA

The template SHALL display a full-screen hero with gradient background, subtitle, heading, and a Buy Now call-to-action.

#### Scenario: Hero renders content

- **GIVEN** a visitor lands on the page
- **WHEN** the hero section renders
- **THEN** the subtitle "Now you can feel the heat" and heading "Smart New Future" are visible
- **AND** a "Buy Now" link points to the products section

### Requirement: About section displays split layout

The template SHALL display an about section with text on the left and a video thumbnail on the right.

#### Scenario: About section renders

- **GIVEN** a visitor scrolls to the about section
- **WHEN** the section renders
- **THEN** the heading, description text, video play button, and "Get Started Now" link are visible

### Requirement: Features section displays cards and image

The template SHALL display 4 feature cards with icons and a central watch image.

#### Scenario: Features render all cards

- **GIVEN** a visitor scrolls to the features section
- **WHEN** the section renders
- **THEN** 4 feature cards (High Performance, Smart Design, Built to Last, Seamless Connect) are visible
- **AND** a watch collection image is displayed

### Requirement: Products section displays cards on dark background

The template SHALL display 4 product cards with images, names, prices, and Pre Order buttons on a dark background.

#### Scenario: Products render with prices

- **GIVEN** a shopper views the products section
- **WHEN** the section renders
- **THEN** 4 product cards with names and prices are visible
- **AND** each card has a "Pre Order" button

### Requirement: Services section displays grid of service cards

The template SHALL display 6 service cards in a responsive grid.

#### Scenario: Services render all cards

- **GIVEN** a visitor views the services section
- **WHEN** the section renders
- **THEN** 6 service cards are visible (Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews)

### Requirement: Reviews section displays cards with star ratings

The template SHALL display review cards with reviewer names, text, and star ratings.

#### Scenario: Reviews render with star ratings

- **GIVEN** a visitor views the reviews section
- **WHEN** the section renders
- **THEN** 6 review cards are visible with star ratings between 2 and 4 stars

### Requirement: FAQ section displays accordion

The template SHALL display an FAQ accordion with single-open behavior.

#### Scenario: First FAQ item is open by default

- **GIVEN** a visitor views the FAQ section
- **WHEN** the section renders
- **THEN** the first FAQ item is expanded

#### Scenario: Clicking FAQ items toggles them

- **GIVEN** a visitor clicks a closed FAQ item
- **WHEN** the click completes
- **THEN** the clicked item expands
- **AND** any previously open item collapses

### Requirement: Footer displays brand, newsletter, and social links

The template SHALL display a footer with the brand, newsletter signup form, social links, and Component Dock attribution.

#### Scenario: Footer renders all elements

- **GIVEN** a visitor scrolls to the footer
- **WHEN** the footer renders
- **THEN** the brand name, newsletter form, social links (Facebook, Twitter, Dribbble), and a "Component Dock" link to https://www.componentdock.com/ are visible

#### Scenario: Newsletter form prevents default submission

- **GIVEN** a visitor submits the newsletter form
- **WHEN** the form submission event fires
- **THEN** the default form submission is prevented
