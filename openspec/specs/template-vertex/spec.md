---
template: vertex
original: boxus
colorlib: https://colorlib.com/wp/template/boxus/
preview: https://preview.colorlib.com/theme/boxus/
status: in-progress
---

## Purpose

Vertex is a creative digital agency single-page landing template, recreating
the ColorLib "Boxus" design (https://colorlib.com/wp/template/boxus/) as
`apps/vertex` with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens (extracted from preview CSS)

| Token          | Value      | Source                          |
| -------------- | ---------- | ------------------------------- |
| brand (green)  | `#32DB8A`  | Section title backgrounds, CTAs |
| brand-dark     | `#26276d`  | Section title alt bg            |
| nav-bg         | `#221C5A`  | Top navigation bar              |
| ink            | `#23214c`  | Body text                       |
| accent-pink    | `#ee87a4`  | Link hover                      |
| accent-magenta | `#E74C78`  | Pink accent                     |
| muted          | `#5b5881`  | Secondary text                  |
| mist           | `#8e8da9`  | Tertiary text                   |
| body-font      | Roboto     | Body text                       |
| heading-font   | Montserrat | Section numbers, titles         |

## Requirements

### Requirement: Navbar

The template SHALL display a fixed dark purple (#221C5A) top navigation bar
with the "Vertex" logo on the left and 8 section anchor links on the right
(Home, Services, Portfolio, Crafters, Stories, Offer, Expertise, Contact).
The nav SHALL be responsive with a hamburger menu toggle on mobile.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** I see "Vertex" logo and 8 nav links (Home, Services, Portfolio, Crafters, Stories, Offer, Expertise, Contact)

#### Scenario: Mobile menu toggles open and closed

- **WHEN** I click the hamburger menu button on mobile
- **THEN** the mobile nav menu opens with all 8 links visible

#### Scenario: Mobile menu closes on link click

- **WHEN** I click a nav link in the mobile menu
- **THEN** the menu closes

### Requirement: Hero section

The template SHALL display a full-width hero with the headline
"We Craft Awesome Web And Graphic Design Solutions", a subtitle, and a
"Get Started" CTA linking to the contact section.

#### Scenario: Hero displays headline and CTA

- **WHEN** I view the hero section
- **THEN** I see the headline, subtitle, and a "Get Started" button

#### Scenario: Get Started links to contact

- **WHEN** I click the "Get Started" button
- **THEN** the page scrolls to the contact section

### Requirement: Services section

The template SHALL display 4 service cards (Branding, Mobile Apps, Web, Graphic)
each with a lucide-react icon, title, and description paragraph. The section
SHALL be numbered "01" in large green text.

#### Scenario: Four service cards render

- **WHEN** I scroll to the services section
- **THEN** I see 4 cards with icons for Branding, Mobile Apps, Web, and Graphic

### Requirement: Portfolio section

The template SHALL display 4 portfolio items in a grid, each with a
placeholder image (picsum.photos), a "PSD Mockup" tag, and a title.
Items SHALL show a hover overlay effect. The section SHALL be numbered "02".

#### Scenario: Four portfolio items render

- **WHEN** I scroll to the portfolio section
- **THEN** I see 4 portfolio items with images and a "Load More" button

### Requirement: Crafters (team) section

The template SHALL display 3 team member cards with photos (picsum.photos),
names, roles (Lead Designer, SEO Master, PSD Guru), and short bio paragraphs.
The section SHALL be numbered "03".

#### Scenario: Three team members render

- **WHEN** I scroll to the crafters section
- **THEN** I see Robert Williams (Lead Designer), John Doe (SEO Master), and Ann Peterson (PSD Guru)

### Requirement: Stories (blog) section

The template SHALL display 4 blog post cards in a 2-column grid, each with
a number (01-04), author name, category tag, and excerpt paragraph.
A "Go To Blog" CTA SHALL be present. The section SHALL be numbered "04".

#### Scenario: Four blog posts render

- **WHEN** I scroll to the stories section
- **THEN** I see 4 post cards with authors, categories, and excerpts

### Requirement: Offer (video features) section

The template SHALL display a dark purple section with 6 feature items
(Video Editing, Premium Clear, For All Displays, Right On Time, Innovative
Ideas, Perfect Sound), each with a lucide-react icon. The section SHALL be
numbered "05".

#### Scenario: Six feature items render

- **WHEN** I scroll to the offer section
- **THEN** I see 6 feature icons with labels

### Requirement: Expertise (skills) section

The template SHALL display 4 skill progress bars (HTML 81%, CSS 93%, PSD 72%,
Design 99%) with green (#32DB8A) fill. The section SHALL be numbered "06".

#### Scenario: Four skill bars render with correct percentages

- **WHEN** I scroll to the expertise section
- **THEN** I see 4 progress bars showing HTML 81%, CSS 93%, PSD 72%, Design 99%

### Requirement: Contact section

The template SHALL display a contact form with 4 required fields (Name, Email,
Subject, Message) and a "Send Message" submit button. The section SHALL be
numbered "07".

#### Scenario: Contact form renders all fields

- **WHEN** I scroll to the contact section
- **THEN** I see input fields for Name, Email, Subject, Message, and a submit button

#### Scenario: Form fields accept input

- **WHEN** I type into the Name field
- **THEN** the field displays the typed text

### Requirement: Footer

The template SHALL display a dark purple footer with the "Vertex" logo,
copyright notice, and a link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** I scroll to the footer
- **THEN** I see a "Component Dock" link pointing to https://www.componentdock.com/

#### Scenario: Footer renders in new tab

- **WHEN** I look at the Component Dock link
- **THEN** it opens in a new tab (target="_blank")
