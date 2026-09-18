# Template: Coachly (Life Coaching Landing Page)

## Purpose

Coachly is a life-coaching landing-page template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Lifecoach" free template
(source: https://colorlib.com/wp/template/lifecoach/,
preview: https://preview.colorlib.com/theme/lifecoach/),
built under a DIFFERENT name (**Coachly**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 single-page life-coaching landing site with
a sticky navbar, a full-width hero banner (background image + dark overlay),
a special offers section with dark overlay, an about section with split
layout, a training grid, a team section, blog categories, a services grid,
a testimonials carousel, blog posts, a contact form, and a dark footer
with newsletter signup. The design uses a **deep blue brand palette**
(`#3a4971`), Roboto font, rounded buttons (`border-radius: 30px`), and
a dark gray `#333` footer.

> **Provenance:** This spec documents the original ColorLib Lifecoach design
> as a reference for implementation. No references to "ColorLib" or "Lifecoach"
> shall appear in the application code, comments, or runtime — provenance
> lives only in this spec.

## Design tokens

| Token              | Value                  | Notes                                                          |
| ------------------ | ---------------------- | -------------------------------------------------------------- |
| Brand blue         | `#3a4971`              | Navbar bg, hero overlay tint, section headings, buttons, links |
| Primary button     | `#3a4971`              | All CTA buttons (Get Started, Learn More, Submit, etc.)        |
| Button hover       | `#2d3a5e`              | Slightly darker blue on hover                                  |
| Button radius      | `30px`                 | Fully rounded pill buttons                                     |
| Footer bg          | `#333333`              | Dark footer background                                         |
| Text primary       | `#333333`              | Headings, body text                                            |
| Text light         | `#ffffff`              | Text on dark overlays, footer text                             |
| Section bg — white | `#ffffff`              | Default section background                                     |
| Section bg — light | `#f8f9fa`              | Alternating section background (`.bg-light`)                   |
| Font — body        | `"Roboto", sans-serif` | All text — body, headings, nav, buttons                        |
| Overlay dark       | `rgba(0,0,0,0.6)`      | Hero and Special Offers dark overlays                          |
| Border color       | `#dee2e6`              | Card borders, form input borders                               |

## Requirements

### Requirement: Navbar

The system SHALL render a sticky responsive navbar with the Coachly brand
and navigation links.

#### Scenario: Desktop navbar

- **GIVEN** the Coachly app is rendered on a desktop viewport (≥992px)
- **THEN** a `<nav>` SHALL render with the brand text "Coachly" on the left
- **AND** navigation links SHALL appear: Home, About, Training, Services,
  Blog, Contact
- **AND** the navbar background SHALL be `#3a4971` (deep blue)
- **AND** nav links SHALL be white text on the blue background

#### Scenario: Mobile navbar

- **GIVEN** the viewport is ≤991px
- **THEN** the navbar SHALL collapse to a hamburger toggle button
- **AND** clicking the toggle SHALL expand/collapse the navigation links
  vertically
- **AND** the mobile menu background SHALL be `#3a4971`

#### Scenario: Navbar sticks on scroll

- **GIVEN** the user scrolls past the hero
- **THEN** the navbar SHALL stick to the top of the viewport

### Requirement: Hero section

The system SHALL render a full-width hero banner with a background image,
dark overlay, and a headline.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **THEN** the background SHALL be a full-cover background image
  (use `picsum.photos/seed/coachly-hero/1920/1080`)
- **AND** a dark overlay SHALL sit at ~0.6 opacity
- **AND** a heading "Professional Life Coaching" SHALL render in large
  white text centered on the overlay
- **AND** the hero SHALL span the full viewport width

#### Scenario: Hero heading size

- **GIVEN** the hero is rendered
- **THEN** the heading text SHALL be prominently sized (≥3rem on desktop)
- **AND** the text SHALL be white with strong contrast against the overlay

### Requirement: Special offers section

The system SHALL render a special offers section with a dark overlay
showing two offer cards.

#### Scenario: Special offers layout

- **GIVEN** the special offers section is rendered
- **THEN** the section SHALL have a dark overlay background
- **AND** the heading SHALL read "Special Offers" in white
- **AND** two offer cards SHALL render side by side

#### Scenario: Offer card content

- **GIVEN** a special offer card is rendered
- **THEN** it SHALL display an offer title and a brief description
- **AND** a "Get Started" CTA button SHALL render in `#3a4971` with
  `border-radius: 30px`
- **AND** the card text SHALL be white on the dark overlay

### Requirement: About section

The system SHALL render an about/welcome section with a split layout.

#### Scenario: About layout

- **GIVEN** the about section is rendered
- **THEN** the section SHALL have a white background
- **AND** the left column SHALL show an image placeholder
  (use `picsum.photos/seed/coachly-about/800/600`)
- **AND** the right column SHALL show a "Welcome to" subheading and
  "LifeCoach" heading (combined as "Welcome to LifeCoach")
- **AND** a description paragraph SHALL render below the heading

#### Scenario: About call-to-action

- **GIVEN** the about section is rendered
- **THEN** a CTA button SHALL render below the description text
- **AND** the button SHALL be styled with `#3a4971` background,
  white text, and `border-radius: 30px`

### Requirement: Training section

The system SHALL render a training section with a 2-column grid of
6 training items.

#### Scenario: Training layout

- **GIVEN** the training section is rendered
- **THEN** the section SHALL have a light background (`#f8f9fa`)
- **AND** the heading SHALL read "Training"
- **AND** a 2-column grid SHALL display 6 training items

#### Scenario: Training item content

- **GIVEN** a training item is rendered
- **THEN** it SHALL display a training category title and a description
- **AND** each item SHALL be in a card-like container with spacing
- **AND** the 6 items SHALL be: Life Coaching, Executive Coaching,
  Wellness Coaching, Career Coaching, Relationship Coaching,
  Performance Coaching

### Requirement: Team section

The system SHALL render a team section showcasing 4 team members.

#### Scenario: Team layout

- **GIVEN** the team section is rendered
- **THEN** the section SHALL have a white background
- **AND** the heading SHALL read "Our Team"
- **AND** 4 team member cards SHALL render in a row

#### Scenario: Team member card content

- **GIVEN** a team member card is rendered
- **THEN** it SHALL display a circular avatar image
  (use `picsum.photos/seed/coachly-team-N/200/200` where N=1..4)
- **AND** the member's name SHALL be displayed below the avatar
- **AND** the member's role/title SHALL be displayed below the name
- **AND** social media icon links SHALL render at the bottom of each card

### Requirement: Blog categories section

The system SHALL render a blog categories section with 3 category cards.

#### Scenario: Blog categories layout

- **GIVEN** the blog categories section is rendered
- **THEN** the section SHALL have a light background (`#f8f9fa`)
- **AND** the heading SHALL read "Blog Categories"
- **AND** 3 category cards SHALL render in a row

#### Scenario: Blog category card content

- **GIVEN** a blog category card is rendered
- **THEN** it SHALL display a category icon (use `lucide-react`)
- **AND** the category name SHALL be displayed
- **AND** the card SHALL have a `#3a4971` icon color

### Requirement: Services section

The system SHALL render a services section with a 6-item grid.

#### Scenario: Services layout

- **GIVEN** the services section is rendered
- **THEN** the section SHALL have a white background
- **AND** the heading SHALL read "Services"
- **AND** a 2-column (or 3-column) grid SHALL display 6 service items

#### Scenario: Service item content

- **GIVEN** a service item is rendered
- **THEN** it SHALL display a service icon (use `lucide-react`)
- **AND** the service title SHALL be displayed
- **AND** a brief description SHALL appear below the title
- **AND** the icon color SHALL be `#3a4971`

### Requirement: Testimonials section

The system SHALL render a testimonials section with a carousel.

#### Scenario: Testimonials layout

- **GIVEN** the testimonials section is rendered
- **THEN** the section SHALL have a light background (`#f8f9fa`)
- **AND** the heading SHALL read "Testimonials"
- **AND** a carousel SHALL display testimonial cards

#### Scenario: Testimonial card content

- **GIVEN** a testimonial card is rendered
- **THEN** it SHALL display a quote paragraph
- **AND** a circular avatar image
  (use `picsum.photos/seed/coachly-testimonial-N/100/100`)
- **AND** the person's name and title SHALL be displayed
- **AND** 3 testimonials SHALL be present in the carousel

#### Scenario: Testimonials carousel interaction

- **GIVEN** the testimonials carousel is rendered
- **THEN** the carousel SHALL allow navigation between testimonials
- **AND** carousel controls (arrows or dots) SHALL be visible

### Requirement: Blog posts section

The system SHALL render a recent blog posts section with 3 cards.

#### Scenario: Blog posts layout

- **GIVEN** the blog posts section is rendered
- **THEN** the section SHALL have a white background
- **AND** the heading SHALL read "Blog"
- **AND** 3 blog post cards SHALL render in a row

#### Scenario: Blog post card content

- **GIVEN** a blog post card is rendered
- **THEN** it SHALL display a cover image
  (use `picsum.photos/seed/coachly-blog-N/800/500` where N=1..3)
- **AND** the post title SHALL be displayed
- **AND** a brief excerpt SHALL appear
- **AND** a "Read More" link SHALL render in `#3a4971`

### Requirement: Contact section

The system SHALL render a contact section with a form.

#### Scenario: Contact layout

- **GIVEN** the contact section is rendered
- **THEN** the section SHALL have a light background (`#f8f9fa`)
- **AND** the heading SHALL read "Contact Us"

#### Scenario: Contact form fields

- **GIVEN** the contact form is rendered
- **THEN** the form SHALL contain input fields for: Name, Email,
  Subject, and Message
- **AND** a "Send Message" button SHALL render with `#3a4971` background
  and `border-radius: 30px`
- **AND** the form SHALL be purely presentational (no backend submission)

### Requirement: Footer

The system SHALL render a dark footer with newsletter signup and
copyright information.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **THEN** the footer SHALL have a `#333333` background
- **AND** the footer SHALL display the Coachly brand/logo

#### Scenario: Newsletter in footer

- **GIVEN** the footer is rendered
- **THEN** a newsletter signup area SHALL render with a text input
  and a "Subscribe" button
- **AND** the newsletter button SHALL use `#3a4971` background

#### Scenario: Footer copyright

- **GIVEN** the footer is rendered
- **THEN** a copyright bar SHALL render at the bottom
- **AND** a link to `https://www.componentdock.com/` ("Component Dock")
  SHALL be present in the copyright text

### Requirement: Accessibility

The system SHALL provide accessible markup for all interactive elements.

#### Scenario: Keyboard navigation

- **GIVEN** any interactive element in the Coachly app
- **THEN** it SHALL be reachable via keyboard Tab key
- **AND** focus-visible rings SHALL be displayed on focused elements

#### Scenario: Semantic HTML

- **GIVEN** the Coachly app is rendered
- **THEN** the navbar SHALL use `<nav>`, the main content SHALL use `<main>`,
  sections SHALL use `<section>`, and the footer SHALL use `<footer>`
- **AND** all images SHALL have descriptive `alt` attributes

## Verification checklist

- [ ] Navbar is sticky, responsive, `#3a4971` background
- [ ] Hero has full-cover bg image, dark overlay, "Professional Life Coaching" heading
- [ ] Special Offers section has dark overlay, 2 offer cards
- [ ] About section has split layout, "Welcome to LifeCoach" heading
- [ ] Training section has 2-col grid with 6 items
- [ ] Team section has 4 member cards with avatars and social icons
- [ ] Blog Categories section has 3 cards with icons
- [ ] Services section has 6-item grid
- [ ] Testimonials section has carousel with 3 entries
- [ ] Blog Posts section has 3 cards with cover images
- [ ] Contact section has form with Name, Email, Subject, Message fields
- [ ] Footer is dark (`#333`), has newsletter signup, links to componentdock.com
- [ ] All buttons use `border-radius: 30px` pill style
- [ ] Roboto font used throughout
- [ ] All interactive elements keyboard-accessible
- [ ] No references to ColorLib in app code
- [ ] Uses `lucide-react` for icons (no Font Awesome)
- [ ] Uses `picsum.photos` for all placeholder images
- [ ] Footer links to componentdock.com
