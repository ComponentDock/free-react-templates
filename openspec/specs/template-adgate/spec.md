# Spec: AdGate — Classified Ads Listing Template

## Purpose

Recreation of ColorLib "Classy Ads" (https://colorlib.com/wp/template/classy-ads/) as "AdGate" — a classified ads / marketplace landing page with search, category browsing, featured listings, and newsletter. Built with React 19, Tailwind CSS 4, and TypeScript.

**Source slug:** `classy-ads`
**Preview URL:** https://preview.colorlib.com/theme/classy-ads/ (HTTP 404 — fallback to screenshot + ColorLib page description)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/classyads-free-template.jpg

## Design Tokens

| Token | Value | Usage |
| --- | --- | --- |
| Brand / Primary | #20c997 (teal/mint) | Buttons, search CTA, category icons, accent |
| Brand dark (hover) | #1aa87d | Button hover state |
| Hero overlay | rgba(0,0,0,0.5) | Dark semi-transparent overlay on hero image |
| Body text | #333333 | Main paragraph text |
| Heading text | #212121 | Headings, navbar logo |
| Muted text | #777777 | Subtitles, secondary text |
| Navbar background | #ffffff | Top navigation bar |
| Category card bg | #f8f9fa (light gray) | Category icon section background |
| Page background | #ffffff | Overall page background |
| Font family | Poppins (Google Fonts) | Body and headings |
| Button radius | 4px | "Search" and "Post an Ad" buttons |
| Search bar bg | #ffffff | Search bar container |

## Sections (in order)

1. **Navbar** — White top bar with logo "AdGate", nav links (Home, Ads, About, Blog, Contact), "Log In", "Register", and teal "Post an Ad" CTA button. Mobile hamburger menu.
2. **Hero** — Full-width background image (woman at laptop / workspace) with dark semi-transparent overlay. Centered white headline "Largest Classifieds In The World" and subtitle "You can buy, sell anything you want."
3. **Search Bar** — Horizontal form overlaid on hero bottom, white background, 3 inputs: keyword text input ("What are you looking for?"), location input with pin icon, category dropdown ("All Categories"), teal "Search" button.
4. **Categories** — 6 category cards in a row on light gray background: Real Estate, Books & Magazines, Furniture, Electronics, Cars & Vehicles, Other. Each has a teal line icon, category name, and listing count badge.
5. **Featured Ads** — Grid of ad listing cards with thumbnail images, titles, and brief descriptions. Section heading "Featured Ads".
6. **Trending Items** — Section with trending/classified listings (as described in ColorLib page: "trending items").
7. **Testimonials** — User testimonials section (as described in ColorLib page: "testimonials").
8. **Newsletter** — Newsletter subscription section with email input and subscribe button.
9. **Footer** — Multi-column footer with About text, Quick Links, Contact Info, social icons, and copyright "Made with Component Dock" linking https://www.componentdock.com/.

## Gherkin Requirements

### Requirement: Navbar with logo, navigation, and CTA

The navbar displays the "AdGate" logo, navigation links, login/register links, and a "Post an Ad" CTA button.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads
- **THEN** the navbar displays "AdGate" logo and navigation links (Home, Ads, About, Blog, Contact)
- **AND** "Log In" and "Register" links are visible
- **AND** a teal "Post an Ad" button is visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile hamburger menu button
- **THEN** the mobile navigation menu expands (aria-expanded becomes true)
- **AND** all navigation links are visible in the mobile menu

#### Scenario: About dropdown

- **WHEN** the user hovers over or clicks "About" on desktop
- **THEN** a dropdown menu appears with sub-links

### Requirement: Hero section with background image and headline

A full-width hero section with a dark overlay over a background image, white headline text, and subtitle.

#### Scenario: Hero renders on load

- **WHEN** the page loads
- **THEN** the hero section displays "Largest Classifieds In The World" as the main headline
- **AND** the subtitle reads "You can buy, sell anything you want."
- **AND** the background image is visible with a dark semi-transparent overlay

### Requirement: Search bar with keyword, location, and category fields

A horizontal search form with 3 input fields and a search button.

#### Scenario: Search form renders all fields

- **WHEN** the page loads
- **THEN** the search bar shows a text input with placeholder "What are you looking for?"
- **AND** a location input with a pin icon
- **AND** a category dropdown with "All Categories" default
- **AND** a teal "Search" button

#### Scenario: Search form has correct layout

- **WHEN** the page loads
- **THEN** the search bar is positioned at the bottom of the hero section
- **AND** all 3 inputs and the button are displayed horizontally in a single row

### Requirement: Categories section with icon cards

6 category cards displayed in a horizontal row, each with an icon, name, and listing count.

#### Scenario: Categories render with correct data

- **WHEN** the categories section loads
- **THEN** 6 category cards are displayed: Real Estate (3,921), Books & Magazines (398), Furniture (1,229), Electronics (32,891), Cars & Vehicles (29,221), Other (219)
- **AND** each card shows a teal line icon above the category name

#### Scenario: Category cards are interactive

- **WHEN** the user hovers over a category card
- **THEN** the card shows a hover effect (subtle lift or color change)

### Requirement: Featured Ads listing grid

A grid of advertisement cards with thumbnail images and titles.

#### Scenario: Featured ads render

- **WHEN** the featured ads section loads
- **THEN** the heading "Featured Ads" is visible
- **AND** a grid of ad listing cards is displayed, each with a thumbnail image and title

### Requirement: Trending items section

A section showcasing trending classified listings.

#### Scenario: Trending section renders

- **WHEN** the trending section loads
- **THEN** a section heading for trending items is visible
- **AND** trending ad cards are displayed with images and details

### Requirement: Testimonials section

User testimonials with quotes, names, and optional avatars.

#### Scenario: Testimonials render

- **WHEN** the testimonials section loads
- **THEN** testimonial cards are displayed with user quotes and names

### Requirement: Newsletter subscription

An email subscription form with input and submit button.

#### Scenario: Newsletter form renders

- **WHEN** the newsletter section loads
- **THEN** an email input field is visible
- **AND** a "Subscribe" button is present

#### Scenario: Newsletter form validation

- **WHEN** the user clicks "Subscribe" without entering an email
- **THEN** a validation error is shown or the form does not submit

### Requirement: Footer with links and copyright

A multi-column footer with navigation links, contact info, social icons, and copyright.

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** the footer displays About text, Quick Links, and Contact Info columns
- **AND** social media icons are visible

#### Scenario: Footer links to Component Dock

- **WHEN** the user scrolls to the footer
- **THEN** a "Made with Component Dock" link is visible pointing to https://www.componentdock.com/

### Requirement: Responsive design

The template adapts gracefully to mobile, tablet, and desktop viewports.

#### Scenario: Mobile layout stacks elements

- **WHEN** the viewport is 375px wide
- **THEN** the navbar shows a hamburger menu
- **AND** the search bar fields stack vertically
- **AND** category cards display in a 2-column or 3-column grid

## Verification Checklist

- [ ] Navbar: logo, all nav links, Log In, Register, Post an Ad button
- [ ] Hero: background image, dark overlay, headline, subtitle
- [ ] Search: 3 inputs + Search button in horizontal layout
- [ ] Categories: 6 cards with icons, names, counts
- [ ] Featured Ads: grid of listing cards
- [ ] Trending: trending listings section
- [ ] Testimonials: user quotes section
- [ ] Newsletter: email input + subscribe button
- [ ] Footer: columns, social icons, Component Dock link
- [ ] Responsive: mobile hamburger, stacked search, category grid
- [ ] No ColorLib references in app code
- [ ] All images use picsum.photos seeded URLs
- [ ] Google Fonts (Poppins) via index.html link
- [ ] Tests: 100% coverage (lines, functions, branches, statements)
