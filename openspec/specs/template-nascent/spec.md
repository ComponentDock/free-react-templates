# Template: Nascent (Startup Landing Page)

## Purpose

Recreation of ColorLib "Thestartup" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page startup landing site.

- **Source:** https://colorlib.com/wp/template/thestartup/
- **Preview:** https://preview.colorlib.com/theme/thestartup/
- **Category:** Startup / SaaS landing page
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/thestartup-free-template.jpg

## Design Tokens

Extracted from the live preview CSS (`assets/css/style.css`):

| Token             | Value                        | Notes                                                      |
| ----------------- | ---------------------------- | ---------------------------------------------------------- |
| `brand`           | `#FF9100`                    | Primary orange — buttons, accents, hovers, CTA backgrounds |
| `brand-dark`      | `#df7e00`                    | Gradient endpoint for orange button background             |
| `hero-bg`         | `#FFDDB5`                    | Light peach/tan — hero section background                  |
| `dark-purple`     | `#2D0A31`                    | Deep plum — testimonial section background                 |
| `black`           | `#000000`                    | Footer background                                          |
| `body-text`       | `#5E5E5E`                    | Paragraph text                                             |
| `heading-color`   | `#000000`                    | h1–h6 text                                                 |
| `font-heading`    | `"Josefin Sans", sans-serif` | All headings                                               |
| `font-body`       | `"Roboto", sans-serif`       | Body text, paragraphs                                      |
| `button-radius`   | `5px`                        | `.btn` border-radius                                       |
| `card-radius`     | `0`                          | Cards have sharp edges (no border-radius)                  |
| `section-padding` | `120px top / 100px bottom`   | `.section-padding`                                         |

## Section Structure (in order)

1. **Navbar** — sticky header, logo left, nav links (Home, About, Services, Blog dropdown, Contact), orange gradient "Join Us" CTA button right. White background on sticky.
2. **Hero** — split layout: left caption (tagline, heading, subtext, "Explore Us" button), right hero image. Background `#FFDDB5`. Orange tagline text, dark heading, dark paragraph.
3. **Services** — section title + description, 3 service cards in a row (icon, title, description, "Let's Talk" underline link).
4. **About** — split: left image, right content with "Our Philosophy" heading, two paragraphs, author attribution (CEO name + title).
5. **Pricing** — centered title + subtitle, 3 pricing cards (price, description, feature list, "Get Started Now" button). Middle card is active/highlighted.
6. **Features (Accordion)** — left column: title + 4 accordion items; right column: image. Collapsible content panels.
7. **Testimonials** — parallax background section (`#2D0A31`), carousel with testimonial quote, body text, founder name + role. Dot pagination.
8. **Blog** — centered title, 3 blog cards in a carousel (image with category badge, title, excerpt).
9. **Footer** — dark background (`#000`), 4-column: logo + social icons, Navigation links, Services links, Contact info. Bottom bar with copyright (links to Component Dock).

## Requirements

### Requirement: Navbar functionality

Users SHALL see a sticky navigation bar with logo, nav links, and a "Join Us" CTA button.

#### Scenario: Navbar renders with logo and navigation links

- **WHEN** the user loads the page
- **THEN** a navigation bar is visible at the top
- **AND** the logo is displayed on the left
- **AND** nav links "Home", "About", "Services", "Blog", "Contact" are shown
- **AND** a "Join Us" CTA button is displayed

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** the user scrolls down
- **THEN** the navbar remains fixed at the top
- **AND** the background turns white

### Requirement: Hero section

Users SHALL see a split hero section with tagline, heading, subtext, CTA, and hero image on a peach background.

#### Scenario: Hero section displays headline and image

- **WHEN** the user is on the landing page
- **THEN** a tagline "We are new but doing great" is displayed in orange
- **AND** a heading "We give the power back to the user" is visible
- **AND** a subtext paragraph is shown
- **AND** an "Explore Us" button is present
- **AND** a hero image is displayed on the right side

#### Scenario: Hero section uses peach background

- **WHEN** the hero section is rendered
- **THEN** the background color is #FFDDB5

### Requirement: Services section

Users SHALL see three service cards with icons, titles, descriptions, and "Let's Talk" links.

#### Scenario: Services section shows three service cards

- **WHEN** the user scrolls to the services section
- **THEN** a heading "Services we provide" is visible
- **AND** three service cards are displayed
- **AND** each card has an icon, title, description, and "Let's Talk" link

### Requirement: About section

Users SHALL see a split about section with image, philosophy heading, description paragraphs, and CEO attribution.

#### Scenario: About section displays philosophy content

- **WHEN** the user scrolls to the about section
- **THEN** "Our Philosophy" heading is visible
- **AND** two paragraphs of description are shown
- **AND** an author attribution with CEO name is displayed
- **AND** an image is shown alongside the text

### Requirement: Pricing section

Users SHALL see three pricing cards with plans, prices, features, and CTA buttons.

#### Scenario: Pricing section shows three plans

- **WHEN** the user scrolls to the pricing section
- **THEN** an "Affordable pricing plan" heading is shown
- **AND** three pricing cards are displayed
- **AND** each card has a price, description, feature list, and "Get Started Now" button
- **AND** the middle card is visually highlighted as active

### Requirement: Features accordion

Users SHALL see a collapsible accordion with four feature items and an image.

#### Scenario: Features accordion shows collapsible items

- **WHEN** the user scrolls to the features section
- **THEN** a section heading is displayed
- **AND** four accordion items are shown
- **AND** clicking an accordion header toggles its content
- **AND** one item is expanded by default
- **AND** an image is shown in the right column

### Requirement: Testimonials section

Users SHALL see a testimonials carousel on a dark purple background with dot pagination.

#### Scenario: Testimonials section shows quote carousel

- **WHEN** the user scrolls to the testimonials section
- **THEN** the background is dark purple (#2D0A31)
- **AND** a testimonial quote is displayed
- **AND** the founder name and role are shown
- **AND** dot pagination controls are present

### Requirement: Blog section

Users SHALL see three blog cards with images, category badges, titles, and excerpts.

#### Scenario: Blog section shows latest posts

- **WHEN** the user scrolls to the blog section
- **THEN** an "Our latest blog" heading is visible
- **AND** three blog cards are displayed
- **AND** each card has an image, category badge, title, and excerpt

### Requirement: Footer

Users SHALL see a four-column footer with black background and Component Dock link.

#### Scenario: Footer renders with four columns

- **WHEN** the user scrolls to the footer
- **THEN** the background is black (#000)
- **AND** a logo and social icons are displayed
- **AND** Navigation, Services, and Contact columns are shown
- **AND** the bottom bar links to Component Dock
