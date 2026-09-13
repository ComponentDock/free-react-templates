# Template: Turfcraft (Lawn Care Landing Page)

## Purpose

Turfcraft is a lawn-care landing-page template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Lawncare" free template
(source: https://colorlib.com/wp/template/lawncare/,
preview: https://preview.colorlib.com/theme/lawncare/),
built under a DIFFERENT name (**Turfcraft**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 single-page lawn-care landing site with
a full-width hero banner (background image + dark overlay), a services
grid, an about section with video placeholder, a seasonal tips carousel,
a CTA contact banner, testimonials carousel, a blog section, a newsletter
signup bar, and a dark four-column footer. The design uses a **green
brand palette** (`#4e9525`), Lato + Poppins fonts, Bootstrap `#007bff`
primary buttons, and a black `#000` dark footer.

## Design tokens

| Token                | Value                                              | Notes                                                       |
| -------------------- | -------------------------------------------------- | ----------------------------------------------------------- |
| Brand green          | `#4e9525`                                          | Navbar bg, service icons, blog badge, links, hover states   |
| Hero subheading      | `#fbd341`                                          | Golden yellow accent on hero "Welcome to Lawn care" text    |
| Primary button       | `#007bff`                                          | Bootstrap blue — CTA buttons (Learn More, Get a Quote)      |
| Button hover accent  | `#fbd341`                                          | Golden yellow — service list arrow hover bg                 |
| Dark bg              | `#000000`                                          | Footer background                                           |
| Text primary         | `#222222`                                          | Headings, body text                                         |
| Text muted           | `rgba(255,255,255,0.7)`                            | Footer contact links, blog date secondary text              |
| Light section bg     | `#f8f9fa` (Bootstrap `.bg-light`)                  | About section, blog section backgrounds                     |
| White                | `#ffffff`                                          | Card backgrounds, footer text, CTA banner text              |
| Font — body          | `"Lato", sans-serif`                               | Body text, paragraphs                                       |
| Font — headings      | `"Poppins", sans-serif`                            | Headings, nav links                                         |
| Button radius        | `0.25rem` (4px)                                    | Bootstrap default `.btn`                                    |
| Blog date badge bg   | `#4e9525`                                          | Green triangle badge on blog cards                          |
| CTA intro bg         | `#007bff`                                          | "Contact with us" banner (uses `.bg-primary`)               |
| Newsletter bg        | `#007bff`                                          | Newsletter signup bar (uses `.bg-primary`)                  |
| Footer bg            | `#000000`                                          | Dark footer with 4-column layout                            |

## Requirements

### Requirement: Top bar

The system SHALL render a top bar above the navbar with a logo, search
form, and social media icons.

#### Scenario: Desktop top bar

- **GIVEN** the Turfcraft app is rendered on a desktop viewport (≥992px)
- **THEN** a top bar SHALL render with the logo "Turfcraft" on the left
- **AND** a search form (text input + search button) SHALL appear on the right
- **AND** social media icon links (Facebook, Twitter, Instagram, Dribbble)
  SHALL render on the far right using `lucide-react` icons

#### Scenario: Mobile top bar

- **GIVEN** the viewport is ≤991px
- **THEN** the search form SHALL stack below the logo
- **AND** social media icons SHALL remain visible

### Requirement: Navbar

The system SHALL render a sticky responsive navbar with navigation links.

#### Scenario: Desktop navbar

- **GIVEN** the Turfcraft app is rendered on a desktop viewport (≥992px)
- **THEN** a `<nav>` SHALL render with links: Home, About Us, Services,
  Gallery, Blog, Contact
- **AND** the navbar background SHALL be `#4e9525` (green)
- **AND** nav links SHALL be white text on green background

#### Scenario: Mobile navbar

- **GIVEN** the viewport is ≤991px
- **THEN** the navbar SHALL collapse to a hamburger toggle button
- **AND** clicking the toggle SHALL expand/collapse the navigation links
  vertically

#### Scenario: Navbar sticks on scroll

- **GIVEN** the user scrolls past the top bar
- **THEN** the navbar SHALL stick to the top of the viewport

### Requirement: Hero banner

The system SHALL render a full-width hero banner with a background image,
dark overlay, headline, subtext, and a CTA button.

#### Scenario: Hero content

- **GIVEN** the hero banner is rendered
- **THEN** the background SHALL be a full-cover background image
  (use `picsum.photos/seed/turfcraft-hero/1920/1080`)
- **AND** a dark overlay SHALL sit at ~0.4 opacity
- **AND** a subheading "Welcome to Turfcraft" SHALL render in golden
  yellow (`#fbd341`)
- **AND** a headline "Lawn care for everyone" SHALL render in large white text
- **AND** a subtext "Let us work on your yard" SHALL render in white
- **AND** a "Learn more" CTA button SHALL render in blue (`#007bff`)
  with a right-arrow icon

### Requirement: Services section

The system SHALL render a services section with a left heading area and
right-aligned service cards.

#### Scenario: Services layout

- **GIVEN** the services section is rendered
- **THEN** the left side SHALL show a "Services" subheading, "Lawn Services"
  heading, a description paragraph, and a "Get a Quote" button
- **AND** the right side SHALL show a 3-column grid of service cards

#### Scenario: Service cards

- **GIVEN** the services grid is rendered
- **THEN** each service card SHALL have an icon (use `lucide-react`),
  a title, a description, and an arrow-link button
- **AND** the three services SHALL be: Garden Care, Lawn Mowing, Lawn Care
- **AND** the service icon color SHALL be `#4e9525` (green)
- **AND** on hover, the arrow button SHALL animate upward and become visible

### Requirement: About section

The system SHALL render an about/welcome section with a video placeholder
and a service list.

#### Scenario: About layout

- **GIVEN** the about section is rendered
- **THEN** the section SHALL have a light background (`#f8f9fa`)
- **AND** the left column SHALL show a video placeholder image with a
  play-button overlay (use `picsum.photos/seed/turfcraft-about/800/600`)
- **AND** the right column SHALL show "Welcome to Turfcraft" subheading,
  "Welcome to Turfcraft Company" heading, and a description

#### Scenario: Service list

- **GIVEN** the about section is rendered
- **THEN** a list of 5 service links SHALL render: Gutter cleaning,
  Organic fertilization and weed control, Compost top dressing & compost
  tea application, New lawn installation, Mulch and other services available
- **AND** each link SHALL have a green arrow icon on the right
- **AND** on hover the row SHALL turn green with white text

### Requirement: Seasonal tips carousel

The system SHALL render a seasonal tips section with a horizontal carousel.

#### Scenario: Carousel content

- **GIVEN** the seasonal tips section is rendered
- **THEN** the heading SHALL be "Seasonal Lawn Care Tips" with a
  "Tips & Techniques" subheading
- **AND** a horizontal carousel SHALL show 4 seasonal cards:
  Spring, Summer, Winter, Fall
- **AND** each card SHALL have a background image
  (use `picsum.photos/seed/turfcraft-season-N/600/400` where N=1..4),
  a season title, and a description paragraph

### Requirement: Contact CTA banner

The system SHALL render a contact call-to-action banner.

#### Scenario: CTA content

- **GIVEN** the contact CTA banner is rendered
- **THEN** the banner SHALL have a blue (`#007bff`) background
- **AND** the left side SHALL show "Contact with us" heading and a
  description paragraph
- **AND** the right side SHALL show a phone number: +00(123) 456-78-09
- **AND** text SHALL be white on blue

### Requirement: Testimonials section

The system SHALL render a testimonials carousel section.

#### Scenario: Testimonials layout

- **GIVEN** the testimonials section is rendered
- **THEN** the heading SHALL be "Happy Clients" with a "Testimonial" subheading
- **AND** a carousel SHALL display testimonial cards
- **AND** each card SHALL have a quote paragraph, a circular avatar
  (use `picsum.photos/seed/turfcraft-person-N/100/100`), a name,
  and a position title
- **AND** 3 testimonials SHALL render: Roger Scott (Marketing Manager)
  and 2 other placeholder entries

### Requirement: Blog section

The system SHALL render a recent blog section with 3 blog cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **THEN** the heading SHALL be "Recent Blog" with an "Our Blog" subheading
- **AND** the section SHALL have a light background
- **AND** 3 blog cards SHALL render in a 3-column grid
- **AND** each card SHALL have a cover image
  (use `picsum.photos/seed/turfcraft-blog-N/800/500` where N=1..3),
  a date badge (green triangle with day + month/year), a title,
  a description, and a "Read more" button in blue

### Requirement: Newsletter signup bar

The system SHALL render a newsletter signup bar.

#### Scenario: Newsletter content

- **GIVEN** the newsletter bar is rendered
- **THEN** the bar SHALL have a blue (`#007bff`) background
- **AND** the left side SHALL show "Subscribe to our Newsletter" in white
- **AND** the right side SHALL show an email input + "Subscribe" button
- **AND** the form SHALL be purely presentational (no backend submission)

### Requirement: Footer

The system SHALL render a dark four-column footer.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **THEN** the footer SHALL have a black (`#000`) background
- **AND** column 1 SHALL show the Turfcraft logo, a description, and
  3 social media icon links
- **AND** column 2 SHALL show a "Services" list with 5 items
- **AND** column 3 SHALL show "Contact information" with address,
  phone, and email
- **AND** column 4 SHALL show "Business Hours" with opening days and
  vacation info
- **AND** a copyright bar SHALL render at the bottom with a link to
  `https://www.componentdock.com/`

### Requirement: Accessibility

The system SHALL provide accessible markup for all interactive elements.

#### Scenario: Keyboard navigation

- **GIVEN** any interactive element in the Turfcraft app
- **THEN** it SHALL be reachable via keyboard Tab key
- **AND** focus-visible rings SHALL be displayed on focused elements

#### Scenario: Semantic HTML

- **GIVEN** the Turfcraft app is rendered
- **THEN** the navbar SHALL use `<nav>`, the main content SHALL use `<main>`,
  sections SHALL use `<section>`, and the footer SHALL use `<footer>`
- **AND** all images SHALL have descriptive `alt` attributes

## Verification checklist

- [ ] Top bar renders with logo, search, and social icons
- [ ] Navbar is sticky, responsive, green background
- [ ] Hero has full-cover bg image, overlay, headline, CTA
- [ ] Services section has 3 cards with icons
- [ ] About section has video placeholder + service list
- [ ] Seasonal carousel has 4 season cards
- [ ] CTA banner has blue bg, heading, phone number
- [ ] Testimonials carousel with 3 entries
- [ ] Blog section has 3 cards with date badges
- [ ] Newsletter bar with email input
- [ ] Footer is dark, 4-column, has Component Dock link
- [ ] All interactive elements keyboard-accessible
- [ ] No references to ColorLib in app code
- [ ] Uses `lucide-react` for icons (no Font Awesome)
- [ ] Uses `picsum.photos` for all placeholder images
- [ ] Footer links to componentdock.com
