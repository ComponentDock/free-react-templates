# Template: CanvasGallery (Modeling Agency)

## Purpose

Recreation of ColorLib's **Mona** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page template. Mona is a modeling/talent agency website with a pink brand palette, hero slider, about section with service cards, tabbed portfolio gallery, testimonials carousel, CTA banner, blog grid, and footer.

- **Source template:** https://colorlib.com/wp/template/mona/
- **Live preview:** https://preview.colorlib.com/theme/mona/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/mona-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package name:** `@free-react-templates/canvas-gallery`

## Design Tokens (extracted from preview CSS)

| Token                | Value             | Notes                                            |
| -------------------- | ----------------- | ------------------------------------------------ |
| Brand primary        | `#ed489d`         | Hot pink — used on buttons, active tabs, accents |
| Brand secondary      | `#f6a4ce`         | Lighter pink — hover/alternate state             |
| Text dark            | `#232323`         | Primary body text                                |
| Text muted           | `#666666`         | Secondary text, descriptions                     |
| Background           | `#ffffff`         | White page background                            |
| Font family          | `"HK Grotesk"`    | Via Google Fonts; weights 400, 500, 600          |
| Button radius        | `40px`            | Fully rounded pill buttons                       |
| Button primary bg    | `#ed489d`         | Solid pink fill                                  |
| Button primary hover | `#000000`         | Turns black on hover                             |
| Section padding      | `80px` top/bottom |                                                  |

## Requirements

### Requirement: Navbar renders with logo, links, and search

The navbar SHALL display a logo, navigation links (Home, Pages, Project, Models, Casting, Blog, Contact), and a search icon button.

#### Scenario: Navbar renders logo and navigation links

- **WHEN** the page loads
- **THEN** a navigation bar is visible at the top
- **AND** the nav contains links: Home, Pages, Project, Models, Casting, Blog, Contact
- **AND** a search icon button is present

#### Scenario: Search modal opens on search icon click

- **GIVEN** the search modal is closed
- **WHEN** I click the search icon
- **THEN** a search modal overlay appears
- **AND** an input field with placeholder "Search and hit enter..." is focused

#### Scenario: Search modal closes

- **GIVEN** the search modal is open
- **WHEN** I click the close button
- **THEN** the search modal is hidden

#### Scenario: Mobile hamburger menu toggles

- **GIVEN** the viewport is mobile-sized
- **WHEN** I click the hamburger toggle
- **THEN** the mobile menu slides into view
- **WHEN** I click the close icon
- **THEN** the mobile menu is hidden

### Requirement: Hero slider displays model slides

The hero section SHALL display a carousel of model slides with names, subtitles, social icons, and CTA buttons.

#### Scenario: Hero slider displays model slides

- **WHEN** the page loads
- **THEN** a hero carousel section is visible
- **AND** at least 3 slides are rendered
- **AND** each slide shows a model name and subtitle

#### Scenario: Hero slide shows social icons

- **WHEN** the page loads
- **THEN** each hero slide contains social media icon links

#### Scenario: Hero CTA button is present

- **WHEN** the page loads
- **THEN** each hero slide has a "Model details" button

### Requirement: About section displays agency info and services

The about section SHALL show heading, description text, thumbnail images, and 4 service cards.

#### Scenario: About section displays heading and content

- **WHEN** the page loads
- **THEN** an about section is visible
- **AND** the heading reads "We Have 20+ Years Practical Experience in Agency"
- **AND** a paragraph of description text is present

#### Scenario: About section shows thumbnail images

- **WHEN** the page loads
- **THEN** two thumbnail images are displayed in the about section

#### Scenario: About section shows 4 service cards

- **WHEN** the page loads
- **THEN** 4 service cards are rendered in the about section
- **AND** each card has an icon, title, and description

### Requirement: Gallery shows filterable portfolio

The gallery section SHALL display tabs (All, Model, Actor, Singer) that filter a grid of model items.

#### Scenario: Gallery shows filter tabs

- **WHEN** the page loads
- **THEN** a tabbed gallery section is visible
- **AND** tabs are rendered: All, Model, Actor, Singer
- **AND** the "All" tab is active by default

#### Scenario: Gallery tab switching works

- **GIVEN** the "All" tab is active
- **WHEN** I click the "Model" tab
- **THEN** the "Model" tab becomes active
- **AND** the gallery grid updates

#### Scenario: Gallery displays model items

- **WHEN** the page loads
- **THEN** at least 6 gallery items are rendered
- **AND** each item shows a model photo

### Requirement: Testimonials section displays client feedback

The testimonials section SHALL show client quotes, star ratings, names, roles, and navigation arrows.

#### Scenario: Testimonials section displays client quotes

- **WHEN** the page loads
- **THEN** a testimonials section is visible
- **AND** at least 3 testimonial cards are rendered
- **AND** each card shows a quote, client name, and role

#### Scenario: Testimonials show star ratings

- **WHEN** the page loads
- **THEN** each testimonial card shows 5 star rating icons

#### Scenario: Testimonials have navigation

- **WHEN** the page loads
- **THEN** previous/next navigation arrows are present

### Requirement: CTA banner renders with heading and button

The CTA section SHALL display a pink background banner with a heading and contact button.

#### Scenario: CTA section renders with heading and button

- **WHEN** the page loads
- **THEN** a call-to-action banner is visible
- **AND** the heading reads "Do You Want To Be A Model?"
- **AND** a "Contact Us" button is present

### Requirement: Blog section shows latest posts

The blog section SHALL display a grid of blog post cards with thumbnails, titles, and dates.

#### Scenario: Blog section shows latest posts

- **WHEN** the page loads
- **THEN** a blog section is visible with heading "Latest News"
- **AND** at least 4 blog post cards are rendered
- **AND** each card shows a thumbnail, title, and date

### Requirement: Footer renders with three columns and Component Dock link

The footer SHALL display three columns (brand/copyright, links, contact) and link to Component Dock.

#### Scenario: Footer renders three columns

- **WHEN** the page loads
- **THEN** a footer section is visible
- **AND** the footer contains a brand/copyright column
- **AND** the footer contains a links column titled "Our Link"
- **AND** the footer contains a contact column titled "Contact"

#### Scenario: Footer shows contact info

- **WHEN** the page loads
- **THEN** the contact column displays a phone number
- **AND** the contact column displays an address

#### Scenario: Footer shows social links

- **WHEN** the page loads
- **THEN** the footer contains social media icon links

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text mentions "Component Dock"

### Requirement: Layout is responsive

The template SHALL be responsive across viewport sizes.

#### Scenario: Layout is responsive

- **GIVEN** the viewport is mobile-sized
- **WHEN** the page loads
- **THEN** the navbar collapses to a hamburger menu
- **AND** service cards stack vertically
- **AND** gallery items reflow to fewer columns
- **AND** footer columns stack vertically
