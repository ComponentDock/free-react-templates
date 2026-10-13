# Template: Laborline (Portfolio / Personal)

## Purpose

Recreation of the ColorLib "Work" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page portfolio/personal site.

- **Source:** [ColorLib Work](https://colorlib.com/wp/template/work/)
- **Preview:** https://preview.colorlib.com/theme/work/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict)
- **New name:** `laborline` (app: `apps/laborline`, package: `@free-react-templates/laborline`)

## Design tokens (extracted from preview CSS)

| Token | Value |
|---|---|
| Primary brand color | `#F75940` (vivid red-orange) |
| Background (main) | `#fff` (white) |
| Background (alt sections) | `#fafafa` (off-white) |
| Text primary | `#000` (black) |
| Text secondary | `rgba(0,0,0,0.7)` |
| Text muted | `#999999` |
| Font family | `"Quicksand", Arial, sans-serif` |
| Font weights used | 300, 400, 500, 700 |
| Button style (hero CTA) | Transparent bg, black border, uppercase, letter-spacing 2px, `border-radius: 30px` (pill) |
| Button primary | `background: #F75940`, white text, `border-radius: 30px` |
| Sidebar width | 20% (desktop), 270px (mobile, slide-in) |
| Sidebar bg | `#000` (black) |
| Sidebar text | `#fff` (white), logo bg black with white text, uppercase, letter-spacing 10px |
| Section padding | `4em 0` (standard sections) |
| Hero | Full-height flexslider with dark overlay, centered text, multiple slides |
| Accordion | Panel-group style, border-bottom separators |

## Visual design notes (from screenshot + DOM)

- **Sidebar layout:** Left sidebar (20% width) with logo "Work" in black box, navigation links (Home, Work, About, Services, Blog, Contact), social icons at bottom. Sidebar is sticky/full-height on desktop, slides in from left on mobile.
- **Hero:** Full-screen flexslider with dark overlay, centered text, multiple slides with headlines like "Strategic Design for Brands" and "Design & develop functional sites", CTA buttons.
- **About section:** Split layout — two offset images on left (stacked with overlap effect), text content on right with "Welcome & Introduce" heading, bio text, "Why choose me?" sub-section.
- **Services section:** 2-column grid of service items with icon + title + description (Branding, Web Design, SEO, Web Development, User Interface, Help & Support).
- **Specialties section:** Text-based section with "My Specialties" heading and descriptive copy.
- **Portfolio/Work grid:** 2x3 grid of project thumbnails with overlay on hover (category tags, heart/comment counts).
- **Blog section:** 3-column grid of blog cards with image, date, category, title, excerpt, "Read More" link.
- **Contact/Get in Touch:** Centered section with "Get in Touch!" heading and CTA button.
- **Footer:** Simple copyright line with Colorlib attribution (replaced with Component Dock link).
- **Color palette:** Black sidebar + white main content area, red-orange `#F75940` as accent throughout (buttons, links, borders, hover states).

## Requirements

### Sidebar navigation

Feature: Sidebar navigation

#### Scenario: Desktop sidebar displays logo and nav links

- **GIVEN** the viewport is wider than 768px
- **WHEN** the page loads
- **THEN** a fixed left sidebar is visible
- **AND** the sidebar contains the logo text "Laborline"
- **AND** the sidebar shows navigation links: Home, Work, About, Services, Blog, Contact
- **AND** the sidebar has a black background with white text

#### Scenario: Mobile sidebar is hidden by default

- **GIVEN** the viewport is 768px or narrower
- **WHEN** the page loads
- **THEN** the sidebar is hidden off-screen to the left
- **AND** a hamburger toggle button is visible

#### Scenario: Mobile sidebar opens on toggle click

- **GIVEN** the viewport is 768px or narrower
- **AND** the sidebar is hidden
- **WHEN** the user clicks the hamburger toggle
- **THEN** the sidebar slides in from the left
- **AND** the main content shifts right

#### Scenario: Mobile sidebar closes on toggle click

- **GIVEN** the viewport is 768px or narrower
- **AND** the sidebar is open
- **WHEN** the user clicks the hamburger toggle
- **THEN** the sidebar slides back off-screen

### Hero section

Feature: Hero section

#### Scenario: Hero displays with full-height slider

- **GIVEN** the page loads
- **THEN** a full-height hero section is visible
- **AND** it shows a dark overlay on the background
- **AND** it displays centered text with a headline and subtext
- **AND** a "Learn More" CTA button is visible

#### Scenario: Hero CTA button has pill style

- **GIVEN** the hero section is visible
- **THEN** the CTA button has a transparent background
- **AND** the button has a 1px solid black border
- **AND** the button text is uppercase with letter-spacing

#### Scenario: Hero is full viewport height

- **GIVEN** the page loads
- **THEN** the hero section height matches the viewport height

### About section

Feature: About section

#### Scenario: About section displays with split layout

- **GIVEN** the user scrolls to the About section
- **THEN** two offset images appear on the left side
- **AND** text content appears on the right side
- **AND** the heading reads "Welcome & Introduce"
- **AND** a bio paragraph is displayed

#### Scenario: About section has a sub-heading

- **GIVEN** the About section is visible
- **THEN** a "Why choose me?" sub-heading is present
- **AND** descriptive text follows below it

### Services section

Feature: Services section

#### Scenario: Services displays 6 service items in a grid

- **GIVEN** the user scrolls to the Services section
- **THEN** 6 service items are displayed
- **AND** each item has an icon, title, and description
- **AND** the services include: Branding, Web Design, SEO, Web Development, User Interface, Help & Support

#### Scenario: Services section has a heading

- **GIVEN** the Services section is visible
- **THEN** the heading reads "What I do?"
- **AND** a subtext "Here are some of my expertise" is present

### Specialties section

Feature: Specialties section

#### Scenario: Specialties section displays descriptive content

- **GIVEN** the user scrolls to the Specialties section
- **THEN** the heading reads "My Specialties"
- **AND** descriptive text paragraphs are displayed

### Portfolio / Work grid

Feature: Portfolio work grid

#### Scenario: Work grid displays 6 project thumbnails

- **GIVEN** the user scrolls to the Work section
- **THEN** 6 project cards are displayed in a 2-column grid
- **AND** each card shows a project image
- **AND** each card has a title and category tags

#### Scenario: Work grid section has a heading

- **GIVEN** the Work section is visible
- **THEN** the heading reads "My Work"
- **AND** a sub-heading "Recent Work" is present

### Blog section

Feature: Blog section

#### Scenario: Blog displays 3 blog post cards

- **GIVEN** the user scrolls to the Blog section
- **THEN** 3 blog cards are displayed in a row
- **AND** each card shows an image, date, category, title, and excerpt
- **AND** each card has a "Read More" link

#### Scenario: Blog section has a heading

- **GIVEN** the Blog section is visible
- **THEN** the heading reads "Recent Blog"

### Contact section

Feature: Contact section

#### Scenario: Contact section displays CTA

- **GIVEN** the user scrolls to the Contact section
- **THEN** the heading reads "Get in Touch!"
- **AND** descriptive text is shown
- **AND** a "Contact me!" button is visible

#### Scenario: Contact button has pill style

- **GIVEN** the Contact section is visible
- **THEN** the button has a rounded pill shape (border-radius: 30px)
- **AND** the button uses the primary brand color (#F75940)

### Footer

Feature: Footer

#### Scenario: Footer displays copyright and attribution

- **GIVEN** the page loads
- **THEN** a footer is visible at the bottom
- **AND** it contains a copyright notice with the current year
- **AND** it links to Component Dock (https://www.componentdock.com/)

## Verification checklist

- [ ] Sidebar navigation works on desktop (fixed left, 20% width)
- [ ] Sidebar navigation works on mobile (slide-in toggle)
- [ ] Hero section is full viewport height with dark overlay
- [ ] Hero CTA button has pill shape and correct styling
- [ ] About section has split layout with offset images
- [ ] Services section shows 6 items in a 2-column grid
- [ ] Specialties section has heading and descriptive content
- [ ] Work grid shows 6 project thumbnails in 2-column layout
- [ ] Blog section shows 3 cards with image, metadata, and excerpt
- [ ] Contact section has CTA button with pill shape
- [ ] Footer links to Component Dock
- [ ] Brand color (#F75940) used consistently for accents
- [ ] Font family "Quicksand" applied throughout
- [ ] Responsive: sidebar collapses on mobile
- [ ] Responsive: grids stack on mobile
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] All section order matches original: Hero → About → Services → Specialties → Work → Blog → Contact → Footer
