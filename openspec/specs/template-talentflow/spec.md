---
name: talentflow
description: HR consulting landing page — recreation of ColorLib Humanresources
source: https://colorlib.com/wp/template/humanresources/
preview: https://preview.colorlib.com/theme/humanresources/
design_tokens:
  font: "Work Sans" (Google Fonts)
  primary: "#0389FF" (blue)
  text_body: "#999999"
  text_heading: "#000000"
  bg_light: "#f8f9fa"
  bg_white: "#ffffff"
  button_radius: 0 (square, uppercase, letter-spacing 0.1em)
  counter_text: "#0389FF"
---

## Purpose

Talentflow is a professional HR consulting landing page template, recreating the ColorLib "Humanresources" design under a new name. It provides a complete single-page marketing site with navbar, hero, features, about/accordion, stats counters, team, testimonials, blog, and footer sections.

## Requirements

### Requirement: Navbar with mobile toggle

Users SHALL see a sticky navbar with the "Talentflow" logo and navigation links (Home, About, Services, Team, Blog, Contact). On mobile, a hamburger button SHALL toggle the navigation menu.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays "Talentflow" logo and links for Home, About, Services, Team, Blog, Contact

#### Scenario: Mobile hamburger toggles menu

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** the mobile navigation menu expands and the button label changes to "Close menu"

### Requirement: Hero section with CTA

Users SHALL see a full-width hero section with a background image, headline "We Are Your Partners in Human Resource", a subtext paragraph, a "Get Started" button, and a "Learn More" text link.

#### Scenario: Hero renders headline and buttons

- **WHEN** the hero section is visible
- **THEN** the headline reads "We Are Your Partners in Human Resource" and a "Get Started" button is present

### Requirement: Features section with three cards

Users SHALL see three feature cards (Corporate Collaboration, Strategic Partners, Infinite Posibilities) each with an icon, title, description, and "Learn More" link.

#### Scenario: Three feature cards are displayed

- **WHEN** the features section is visible
- **THEN** three cards are rendered with titles "Corporate Collaboration", "Strategic Partners", and "Infinite Posibilities"

### Requirement: About section with image and accordion

Users SHALL see a two-column about section with an image carousel on the left and a "Why Us?" accordion on the right with four expandable items.

#### Scenario: Accordion expands and collapses

- **WHEN** the user clicks an accordion item title
- **THEN** the item content expands and clicking it again collapses it

### Requirement: Stats counters section

Users SHALL see three statistics: Number of Clients (99,399), Number of Personnel (199), and Years of Experience (24).

#### Scenario: Three stat counters are displayed

- **WHEN** the stats section is visible
- **THEN** values "99,399", "199", and "24" are displayed with their labels

### Requirement: Team section with leadership cards

Users SHALL see "The Leadership" heading and three team member cards (Bob Miller, Jean Smith, David Wilson) with name, role, and bio that reveals on hover.

#### Scenario: Three team members are rendered

- **WHEN** the team section is visible
- **THEN** three cards show names "Bob Miller", "Jean Smith", and "David Wilson" with role "CEO and Co-Founder"

### Requirement: Testimonials section

Users SHALL see a "Happy Customers" heading with a centered blockquote testimonial.

#### Scenario: Testimonial quote is displayed

- **WHEN** the testimonials section is visible
- **THEN** a blockquote with the text "Far far away, behind the word mountains" is displayed

### Requirement: Blog section with post cards

Users SHALL see "Our Blog" heading and four blog post cards in a 2x2 asymmetric layout with title, date, and author.

#### Scenario: Four blog posts are rendered

- **WHEN** the blog section is visible
- **THEN** four cards show titles "When she reached the first", "Duden flows by their place", "Italic Mountains", and "Behind the word mountains"

### Requirement: Footer with Component Dock link

Users SHALL see a footer with About text, Learn More links, Support links, About Us links, social icons (Facebook, Twitter, GitHub), and a copyright line linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" is present with text "Component Dock"
