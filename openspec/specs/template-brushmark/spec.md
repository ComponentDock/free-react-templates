# Brushmark — Creative Art Director Portfolio

Recreation of ColorLib "Breed2" (https://colorlib.com/wp/template/breed2/).

## Purpose

Deliver a faithful React recreation of the ColorLib Breed2 creative art director
portfolio page under the name "Brushmark". The template is a personal portfolio
for a creative art director / designer with a hero banner, statistics counter,
about section, service cards, testimonial carousel, portfolio grid with filter
tabs, blog cards, brand logos carousel, and a dark footer. Stack: Vite + React 19
+ Tailwind CSS 4 + TypeScript. Footer links Component Dock.

Preview URL: https://preview.colorlib.com/theme/breed2/

## Design tokens (extracted from preview CSS)

| Token              | Value                                        | Usage                                        |
| ------------------ | -------------------------------------------- | -------------------------------------------- |
| Font family        | "Roboto", sans-serif (300, 400, 500, 700)    | All text                                     |
| Heading color      | #05364d                                      | h1–h5, navbar links, card titles             |
| Body text color    | #797979                                      | Body paragraphs, meta text                   |
| Primary gradient   | linear-gradient(90deg, #1345e6, #ed239f)     | Primary button, social icon hover, stat text |
| Primary blue       | #1345e6                                      | Links, blog date badge, portfolio overlay    |
| Accent pink        | #ed239f                                      | Gradient endpoint, hover accent              |
| Light pink         | #efb6df                                      | Active/hover nav link color                  |
| Section bg tint    | #f8faff                                      | Stats, services, blog cards, about sidebar   |
| Service hover bg   | #5f30ff                                      | Service card hover background                |
| Footer bg          | #021017                                      | Footer area background                       |
| Star gold          | #ffd804                                      | Rating stars                                 |
| Star disabled      | #aeb9be                                      | Empty/disabled rating stars                  |
| Blog card shadow   | rgba(5,54,77,0.1)                            | Blog card hover box-shadow                   |
| Portfolio overlay  | rgba(19,69,230,0.9)                          | Portfolio item hover overlay                 |
| Button border-radius | 5px                                        | Primary button, form inputs, date badge      |
| Section gap        | 140px vertical padding (80px on tablet)      | Between major sections                       |
| Main title size    | 42px, line-height 52px, weight 700           | Section headings                             |
| Top text style     | uppercase, letter-spacing 2px, weight 500    | Section label ("Our Service", "Our Blog")    |
| Top text accent    | rgba(237,35,159,0.6) blur(4px)              | Pink blur underline beneath top text         |

## Requirements

### Requirement: Navbar with transparent header

The page SHALL display a transparent, absolutely-positioned navbar at the top
with a logo, navigation links (Home, About, Portfolio, Services, Blog, Contact),
and a mobile hamburger toggle.

#### Scenario: Navbar renders all navigation links

- **WHEN** the page loads
- **THEN** the navbar shows logo and navigation links: Home, About, Portfolio,
  Services, Blog, Contact

#### Scenario: Navbar becomes fixed on scroll

- **WHEN** the user scrolls down past the hero
- **THEN** the navbar becomes fixed with a white background and subtle shadow

#### Scenario: Mobile menu toggle

- **WHEN** the mobile hamburger icon is clicked
- **THEN** the navigation menu expands
- **AND** clicking the icon again collapses the menu

### Requirement: Hero banner with introduction

The hero section SHALL display a greeting headline ("Hey There!"), a main heading
("I Am Jo Breed" → paraphrased), a subtitle describing the role, social media
icon links, a "See My Work" call-to-action button, and a decorative hero image
on the right side.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero shows the greeting text, main name heading, role subtitle,
  social icon row, and a "See My Work" primary gradient button

#### Scenario: Hero image displays on desktop

- **WHEN** the viewport is desktop width (>= 992px)
- **THEN** a decorative portrait/avatar image appears on the right side of the hero

#### Scenario: Hero hides image on mobile

- **WHEN** the viewport is mobile (< 992px)
- **THEN** the right-side hero image is hidden

### Requirement: Statistics counter section

The statistics section SHALL display 3 stat cards overlapping the bottom of the
hero, each with a gradient-colored number and a label. Stats: 15k+ Happy
Customers, 12k+ Ticket Solved, 9/10 Average Rating.

#### Scenario: Stats render all three cards

- **WHEN** the statistics section loads
- **THEN** 3 stat items are displayed with gradient-colored numbers and labels

#### Scenario: Stats overlap hero on desktop

- **WHEN** the viewport is desktop (>= 992px)
- **THEN** the statistics section overlaps the hero banner by negative margin

### Requirement: About section

The about section SHALL display a portrait image on the left and text content on
the right with a "About me" top label, heading "Creative Art Director And
Designer", a descriptive paragraph, and a "Download CV" primary button.

#### Scenario: About section renders all content

- **WHEN** the about section loads
- **THEN** a portrait image, "About me" label, heading, paragraph, and
  "Download CV" button are visible

#### Scenario: About image hidden on mobile

- **WHEN** the viewport is < 992px
- **THEN** the left-side about image is hidden

### Requirement: Services section with 3 service cards

The services section SHALL display a section label ("Our Service"), heading
("What Service We Offer For You"), and 3 service cards in a row, each with an
icon image, title, description text, and a "Learn More" text link. Services:
Web Development, UX/UI Design, WP Developing.

#### Scenario: Services render all 3 cards

- **WHEN** the services section loads
- **THEN** 3 service cards are displayed with icons, titles, and descriptions

#### Scenario: Service card hover effect

- **WHEN** a user hovers over a service card
- **THEN** the card background transitions to purple (#5f30ff)
- **AND** text and link colors change to white

### Requirement: Testimonials carousel

The testimonials section SHALL display an Owl-Carousel-style slider with
testimonial items. Each item has a portrait image on the left, a name, role,
description paragraph, and a 5-star rating (4 filled + 1 disabled).

#### Scenario: Testimonials render with rating

- **WHEN** the testimonials section loads
- **THEN** at least one testimonial card is visible with name, role, text, and
  star rating

#### Scenario: Testimonials carousel navigation

- **WHEN** the user interacts with the carousel
- **THEN** the slider navigates between testimonial items

### Requirement: Portfolio grid with filter tabs

The portfolio section SHALL display section label ("Our Portfolio"), heading
("Check Our Recent Client Work"), filter tabs (all, popular, latest, following,
upcoming), and a 6-item image grid. Each item shows an overlay with title and
category on hover.

#### Scenario: Portfolio renders grid items

- **WHEN** the portfolio section loads
- **THEN** 6 portfolio items are displayed in a grid with category filter tabs

#### Scenario: Portfolio filter tabs work

- **WHEN** a filter tab is clicked
- **THEN** the grid filters to show only items matching that category

#### Scenario: Portfolio hover overlay

- **WHEN** a user hovers over a portfolio item
- **THEN** a blue overlay appears with the project title and category text

### Requirement: Blog section with 3 cards

The blog section SHALL display section label ("Our blog"), heading ("Latest
Story From Our Blog"), and 3 blog cards. Each card has a thumbnail image, meta
info (author + date), title, excerpt, and a "Learn More" link.

#### Scenario: Blog renders all 3 cards

- **WHEN** the blog section loads
- **THEN** 3 blog cards are displayed with images, meta, titles, excerpts, and links

#### Scenario: Blog card hover effect

- **WHEN** a user hovers over a blog card
- **THEN** the card gains a subtle box shadow
- **AND** the thumbnail image scales up slightly

### Requirement: Brands logo carousel

The brands section SHALL display a carousel of partner/client logos in a
scrolling row.

#### Scenario: Brands render logo items

- **WHEN** the brands section loads
- **THEN** multiple brand logo images are displayed in a horizontal carousel

### Requirement: Footer with dark background

The footer SHALL display a dark background (#021017), a centered logo, a row of
navigation links (Home, About, Portfolio, Blog, Services), social media icon
links (Facebook, Twitter, Skype, Pinterest), and a copyright line linking
Component Dock.

#### Scenario: Footer renders all elements

- **WHEN** the footer loads
- **THEN** the logo, navigation links, social icons, and copyright text are visible

#### Scenario: Footer links Component Dock

- **WHEN** the footer renders
- **THEN** the copyright line links to https://www.componentdock.com/

#### Scenario: Social icon hover effect

- **WHEN** a user hovers over a social icon
- **THEN** the icon background changes to the primary gradient

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero → Stats → About →
  Services → Testimonials → Portfolio → Blog → Brands → Footer
- [ ] Design tokens match: Roboto font, #1345e6/#ed239f gradient primary,
  #05364d headings, #f8faff section tints, #021017 footer
- [ ] Primary button uses gradient background with 5px border-radius
- [ ] Hero has transparent overlay on image background, social icons, and CTA
- [ ] Statistics overlap hero on desktop via negative margin
- [ ] Service cards have purple hover effect (#5f30ff)
- [ ] Portfolio grid has filter tabs and hover overlay effect
- [ ] Blog cards have hover shadow and image scale effect
- [ ] Footer is dark with gradient social icon hovers
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links Component Dock (https://www.componentdock.com/)
- [ ] Placeholder images use picsum.photos/seed/brushmark-*
- [ ] Responsive: hero image and about image hidden on mobile
- [ ] Mobile hamburger menu toggles navigation
