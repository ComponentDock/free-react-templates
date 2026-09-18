# Template: Dictum (Business Consulting)

## Purpose

Recreation of the ColorLib "Consula" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site.

- **Source slug:** `consula`
- **ColorLib page:** https://colorlib.com/wp/template/consula/
- **Live preview:** https://preview.colorlib.com/theme/consula/
- **New name:** `dictum`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Deploy target:** https://dictum.free.componentdock.com

## Design Tokens (extracted from preview CSS)

| Token                   | Value                                                                                                  | Source                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| Font family             | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | CSS headings, form controls                                     |
| Primary accent          | `#46ddb0` (teal/green)                                                                                 | `.btn.btn-primary`, `.section-sub-title`, `.form-control:focus` |
| Primary hover (button)  | `#fff` bg, `#46ddb0` text                                                                              | `.btn.btn-primary:hover`                                        |
| Dark hover              | `#666666`                                                                                              | `.btn.btn-primary.btn-black--hover:hover`                       |
| Body color              | `gray`                                                                                                 | `body`                                                          |
| Body weight             | 400, font-size 1rem, line-height 1.7                                                                   | `body`                                                          |
| Selection               | `#000` bg, `#fff` text                                                                                 | `::selection`                                                   |
| Button border-radius    | 30px                                                                                                   | `.btn`                                                          |
| Button padding          | 10px 30px                                                                                              | `.btn`                                                          |
| Button font-size        | 16px                                                                                                   | `.btn`                                                          |
| Form height             | 43px, border-radius 30px                                                                               | `.form-control`                                                 |
| Footer bg               | `#333333`                                                                                              | `.site-footer`                                                  |
| Footer padding          | 4em 0                                                                                                  | `.site-footer`                                                  |
| Section sub-title       | font-size 13px, color `#46ddb0`                                                                        | `.section-sub-title`                                            |
| Text-muted              | `#737373`                                                                                              | `.text-muted`                                                   |
| Navbar                  | White bg, sticky header, fixed position                                                                | `.site-navbar`                                                  |
| Top bar                 | `bg-light`, py-3                                                                                       | `.top-bar`                                                      |
| Hero                    | Background image with overlay (`.overlay:before`)                                                      | `.site-blocks-cover`                                            |
| Testimonial             | max-width 800px, centered, blockquote 1.5rem italic, circular avatar (border-radius 50%)               | `.testimonial`                                                  |
| Brand color in headings | `#46ddb0` for dot in logo, nav active state                                                            | `.text-primary`                                                 |

## Visual Design Notes (from screenshot + preview DOM)

- **Top Bar:** Light gray bg, social icons (Facebook, Twitter, Instagram, LinkedIn) on left, phone + email on right. Social icons and contact use teal accent.
- **Navbar:** White bg, sticky, logo "Consula." (bold black + teal dot) on left, nav links on right (Home, About Us, Team, Services, Testimonials, Blog, Contact). Active link in teal.
- **Hero:** Full-width background image (casual office/cafe setting with people), dark overlay, large white heading "We Are The Best Consulting Agency", subtext, "Get Started" teal CTA button.
- **About Us:** Split layout — left has image with "50 years of experience" badge overlay, right has "About Us" sub-title + "Welcome To Consula" heading + description text.
- **Team:** 3-column grid — each member has circular avatar, name, role/title.
- **How It Works:** 3-column layout — Innovate, Create, Scale — each with heading and description.
- **Services:** 6 service cards in 3-column grid — Business Consulting, Market Analysis, User Monitoring, Insurance Consulting, Financial Investment, Financial Management. Each has icon, title, description.
- **Testimonials:** Centered carousel, blockquote with avatar, italic text, author name.
- **About/Specialties:** 2 items — "Web & Mobile Specialties" and "Intuitive Thinkers" with descriptions.
- **Blog:** 3-column with post titles/dates.
- **Contact:** Left sidebar "Our Services" list, right has contact form (first name, last name, email, subject, message + submit button).
- **CTA Banner:** Full-width teal (#46ddb0) bg, "Let's Get Started" heading in white.
- **Footer:** Dark (#333) bg, 4 columns: About Us, Quick Links, Follow Us (social icons), Subscribe Newsletter (email input). Copyright line.

## Requirements

### Requirement: Top Bar

The system SHALL render a top bar with social media icons (Facebook, Twitter, Instagram, LinkedIn) on the left and phone + email contact info on the right, on a light gray background.

#### Scenario: Top bar content

- **GIVEN** the user views the top bar
- **THEN** social media icons are on the left
- **AND** phone number and email are on the right
- **AND** the top bar has a light gray background

### Requirement: Navigation Bar

The system SHALL render a sticky white navbar with the logo "Dictum." on the left and navigation links (Home, About Us, Team, Services, Testimonials, Blog, Contact) on the right.

#### Scenario: Sticky navbar content

- **GIVEN** the user is on any section
- **WHEN** they look at the top
- **THEN** a white sticky navbar is visible
- **AND** a logo "Dictum" with teal dot is on the left
- **AND** nav links are: Home, About Us, Team, Services, Testimonials, Blog, Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the user is on a mobile device
- **WHEN** they click the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** clicking a link closes the menu

### Requirement: Hero Section

The system SHALL render a hero section with a background image, dark overlay, large white heading, descriptive text, and a teal "Get Started" CTA button.

#### Scenario: Hero content

- **GIVEN** the user views the hero
- **THEN** a background image fills the hero area
- **AND** a dark overlay covers the background
- **AND** a large white heading is shown
- **AND** a teal CTA button is visible

### Requirement: About Us Section

The system SHALL render a split-layout about section with an image + experience badge on the left and heading + description on the right.

#### Scenario: About section layout

- **GIVEN** the user scrolls to the about section
- **THEN** an image is on the left with an experience badge overlay
- **AND** a heading "Welcome To Dictum" is on the right
- **AND** descriptive paragraphs are below the heading

### Requirement: Team Section

The system SHALL render three team member cards in a 3-column grid, each with a circular avatar, name, and role.

#### Scenario: Team grid

- **GIVEN** the user scrolls to the team section
- **THEN** three team member cards are displayed in a 3-column grid
- **AND** each card has a circular avatar, name, and role

### Requirement: How It Works Section

The system SHALL render three process steps (Innovate, Create, Scale) in a 3-column layout.

#### Scenario: Process steps

- **GIVEN** the user scrolls to the how-it-works section
- **THEN** three steps are shown: Innovate, Create, Scale
- **AND** each step has a heading and description paragraph

### Requirement: Services Section

The system SHALL render six service cards in a 3-column grid, each with an icon, title, and description.

#### Scenario: Service cards

- **GIVEN** the user scrolls to the services section
- **THEN** six service cards are displayed in a 3-column grid
- **AND** each card has an icon, title, and description

### Requirement: Testimonials Section

The system SHALL render a testimonial carousel with quotes, circular avatars, and author names, centered with max-width.

#### Scenario: Testimonial carousel

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a carousel of testimonials is shown
- **AND** each testimonial has a circular avatar, quote text, and author
- **AND** navigation arrows allow cycling through testimonials

### Requirement: Specialties Section

The system SHALL render two specialty cards (Web & Mobile Specialties and Intuitive Thinkers) in a 2-column grid.

#### Scenario: Specialty cards

- **GIVEN** the user scrolls to the specialties section
- **THEN** two specialty cards are displayed
- **AND** each card has a heading and description

### Requirement: Blog Section

The system SHALL render three blog post cards with images, dates, titles, and descriptions.

#### Scenario: Blog posts

- **GIVEN** the user scrolls to the blog section
- **THEN** three blog post cards are shown
- **AND** each card has a title, date, and description

### Requirement: Contact Section

The system SHALL render a contact form with five fields (First Name, Last Name, Email, Subject, Message) and a sidebar with services list and contact info.

#### Scenario: Contact form

- **GIVEN** the user scrolls to the contact section
- **THEN** a contact form with five fields is on the right
- **AND** an "Our Services" sidebar is on the left
- **AND** a submit button is below the form

### Requirement: CTA Banner

The system SHALL render a full-width teal banner with a white "Let's Get Started" heading.

#### Scenario: CTA banner

- **GIVEN** the user scrolls to the CTA banner
- **THEN** a full-width teal background is shown
- **AND** a white heading is centered

### Requirement: Footer

The system SHALL render a dark four-column footer with About Us, Quick Links, Follow Us (social icons), and Subscribe Newsletter sections, plus a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the user scrolls to the footer
- **THEN** a dark background is visible
- **AND** four columns are shown: About Us, Quick Links, Follow Us, Subscribe Newsletter
- **AND** the copyright links to https://www.componentdock.com/

### Requirement: Design Tokens

The system SHALL use Roboto font, teal accent color (#46ddb0), button border-radius 30px, and dark footer (#333333) matching the original design.

#### Scenario: Design fidelity

- **GIVEN** the template is rendered
- **THEN** the font family is Roboto
- **AND** the primary accent color is teal (#46ddb0)
- **AND** buttons have 30px border-radius
- **AND** the footer has a dark background

## Verification Checklist

- [ ] All sections present in correct order: Top Bar, Navbar, Hero, About Us, Team, How It Works, Services, Testimonials, Blog, Contact, CTA Banner, Footer
- [ ] Font family is Roboto (loaded via Google Fonts in index.html)
- [ ] Primary accent #46ddb0 used for buttons, section sub-titles, nav active, form focus
- [ ] Button border-radius 30px, correct padding
- [ ] Hero: background image with dark overlay, white heading, teal CTA
- [ ] Top bar: light gray bg, social icons, contact info
- [ ] Navbar: white bg, sticky, logo with teal dot
- [ ] About: split layout with experience badge
- [ ] Team: 3 cards with circular avatars
- [ ] How It Works: 3 steps (Innovate, Create, Scale)
- [ ] Services: 6 cards in 3-col grid
- [ ] Testimonials: centered carousel with avatars
- [ ] Blog: 3 post previews
- [ ] Contact: form with 5 fields + sidebar
- [ ] CTA Banner: full-width teal bg, white heading
- [ ] Footer: 4 columns, dark bg, social icons, newsletter
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME file: dictum.free.componentdock.com
- [ ] Placeholder images use picsum.photos
- [ ] Icons from lucide-react
