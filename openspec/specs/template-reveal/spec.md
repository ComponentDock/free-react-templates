# Template: Reveal

## Purpose

Recreation of ColorLib "Unfold" — modern one-page portfolio template.

- **Source:** https://colorlib.com/wp/template/unfold/
- **Preview:** https://preview.colorlib.com/theme/unfold/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/unfold-free-template.jpeg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Personal / Portfolio

### Description

> "Unfold is a modern, responsive one-page portfolio template perfect for designers, developers, and creative professionals to showcase their work."

Dark-themed single-page portfolio with parallax hero, masonry-style project grid, client logos, about section, services, skills counters, testimonials carousel, blog/journal grid, and contact form.

## Requirements

### Requirement: Navbar displays brand and navigation

The navbar SHALL display "Reveal." as the centered logo with navigation links split on both sides. On mobile, a hamburger menu toggle SHALL be visible.

#### Scenario: Desktop navigation layout

- **GIVEN** a user visits Reveal on a desktop device
- **WHEN** the page loads
- **THEN** the navbar displays "Reveal." as the centered logo
- **AND** navigation links are split on both sides of the logo

#### Scenario: Mobile menu toggle

- **GIVEN** a user visits Reveal on a mobile device
- **WHEN** the user taps the hamburger menu icon
- **THEN** the mobile menu expands showing all navigation links

### Requirement: Hero section with background image

The hero SHALL display a full-width background image with the heading "Reveal" and a subtitle describing the designer's role and location.

#### Scenario: Hero renders heading and subtitle

- **GIVEN** a user visits Reveal
- **WHEN** the hero section is visible
- **THEN** the heading "Reveal" is centered on the hero
- **AND** a subtitle describes the designer's role and location

### Requirement: Portfolio grid with 9 items

The portfolio section SHALL display 9 project cards in a 3-column grid with hover overlay showing title, tags, and link icon.

#### Scenario: Portfolio items render

- **GIVEN** a user scrolls to the portfolio section
- **WHEN** the portfolio section loads
- **THEN** 9 portfolio items are shown in a 3-column grid
- **AND** each item shows a project image, title, and tags

### Requirement: Client logos row

The client logos section SHALL display 4 brand logo placeholders in a horizontal row.

#### Scenario: Client logos render

- **GIVEN** a user scrolls to the client logos section
- **WHEN** the section loads
- **THEN** 4 client logo placeholders are displayed in a row

### Requirement: About me section

The about section SHALL display a two-column layout with a portrait image on the left and descriptive text on the right, including a "Download my CV" pill button.

#### Scenario: About section content

- **GIVEN** a user scrolls to the about section
- **WHEN** the section loads
- **THEN** a portrait image appears on the left
- **AND** descriptive text appears on the right
- **AND** a "Download my CV" pill button is shown

### Requirement: Services section with 6 cards

The services section SHALL display 6 service cards in a 3x2 grid, each with an icon, title, and description.

#### Scenario: Services cards render

- **GIVEN** a user scrolls to the services section
- **WHEN** the section loads
- **THEN** 6 service cards are shown in a 3x2 grid
- **AND** each card has an icon, title, and description

### Requirement: Skills section with counters

The skills section SHALL display 4 skill counters on a dark background: WordPress 90%, HTML/CSS 99%, JavaScript 95%, Design 100%.

#### Scenario: Skill counters render

- **GIVEN** a user scrolls to the skills section
- **WHEN** the section loads
- **THEN** 4 skill counters are shown with their percentages

### Requirement: Testimonials section

The testimonials section SHALL display 3 testimonial cards, each with a quote, author photo, name, and position.

#### Scenario: Testimonials render

- **GIVEN** a user scrolls to the testimonials section
- **WHEN** the section loads
- **THEN** 3 testimonial cards are displayed
- **AND** each card shows a quote, author photo, name, and position

### Requirement: Blog journal section

The journal section SHALL display 5 blog posts in an asymmetric grid with image, title, author, and read time.

#### Scenario: Blog posts render

- **GIVEN** a user scrolls to the journal section
- **WHEN** the section loads
- **THEN** 5 blog posts are shown in an asymmetric grid
- **AND** each post shows an image, title, author, and read time

### Requirement: Contact section with form

The contact section SHALL display a contact form with name, email, and message fields, a "Send Message" button, and contact info on the right.

#### Scenario: Contact form renders

- **GIVEN** a user scrolls to the contact section
- **WHEN** the section loads
- **THEN** a contact form with name, email, and message fields is shown
- **AND** a "Send Message" button is present
- **AND** contact info appears on the right

### Requirement: Footer with Component Dock link

The footer SHALL display the "Reveal." logo, social media links, and a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders with required elements

- **GIVEN** a user scrolls to the footer
- **WHEN** the footer loads
- **THEN** the footer shows "Reveal." logo
- **AND** social media links are present
- **AND** a "More templates at Component Dock" link points to https://www.componentdock.com/

## Design tokens

Extracted from live preview CSS (`css/style.css`).

| Token                  | Value                          | Notes                                      |
| ---------------------- | ------------------------------ | ------------------------------------------ |
| Body font              | `'Raleway', sans-serif`        | weight 400 body, 500-700 headings          |
| Background (dark)      | `#000000`                      | hero, nav, footer                          |
| Background (dark alt)  | `#191919`                      | skills section                             |
| Background (light)     | `#ffffff`                      | portfolio, about, services, journal        |
| Background (light alt) | `#f9f9f9`                      | alternating sections                       |
| Text (on dark)         | `#ffffff`                      | headings, nav links                        |
| Text (on light)        | `#000000`                      | body text                                  |
| Text (muted)           | `#666666`                      | descriptions                               |
| Brand accent           | `#D63447`                      | red — links, hover states                  |
| Button shape           | `border-radius: 30px`          | pill-shaped outline buttons                |
| Button style           | `btn-outline-pill`             | white border on dark, dark border on light |
| Section divider        | decorative line under headings | centered, small width                      |

## Sections (in order)

1. **Navbar** — centered logo "Reveal." with nav links split on both sides (Home, Portfolio, About, Services | Skills, Testimonials, Journal, Contact). Mobile: logo + hamburger menu.
2. **Hero** — full-width parallax background image, large "Reveal" heading, subtitle "I'm a Product Designer Based In San Francisco", scroll indicator.
3. **Portfolio** — "Portfolio" heading, 3-column grid of 9 project cards with hover overlay (title + tags + link icon).
4. **Client Logos** — horizontal row of 4 brand logo placeholders.
5. **About Me** — centered heading with divider, two-column layout: left = portrait image, right = heading "We can make it together", descriptive text, "Download my CV" pill button.
6. **My Services** — centered heading with divider, 3x2 grid of 6 service cards with icon + title + description.
7. **My Skills** — dark background, centered heading with divider, 4-column counter display.
8. **My Happy Clients** — centered heading with divider, testimonial cards with quote, author photo, name, position.
9. **My Journal** — centered heading with divider, asymmetric blog grid: 1 large + 1 small top row, 3 small bottom row.
10. **Get In Touch** — centered heading with divider, two-column: left = contact form, right = contact info.
11. **Footer** — centered logo "Reveal.", social links, copyright + "More templates at Component Dock" link.

## Component map

| Component    | File                              | Description                                                 |
| ------------ | --------------------------------- | ----------------------------------------------------------- |
| Navbar       | `src/components/Navbar.tsx`       | Centered logo + split nav + mobile toggle                   |
| Hero         | `src/components/Hero.tsx`         | Parallax background + heading + subtitle + scroll indicator |
| Portfolio    | `src/components/Portfolio.tsx`    | 3-col grid of portfolio items with hover overlay            |
| ClientLogos  | `src/components/ClientLogos.tsx`  | Row of 4 brand logo placeholders                            |
| About        | `src/components/About.tsx`        | Two-column about section                                    |
| Services     | `src/components/Services.tsx`     | 3x2 grid of service cards                                   |
| Skills       | `src/components/Skills.tsx`       | 4-column skill counters on dark bg                          |
| Testimonials | `src/components/Testimonials.tsx` | Testimonial cards                                           |
| Blog         | `src/components/Blog.tsx`         | Asymmetric blog post grid                                   |
| Contact      | `src/components/Contact.tsx`      | Contact form + info                                         |
| Footer       | `src/components/Footer.tsx`       | Logo + social + copyright + Component Dock                  |
