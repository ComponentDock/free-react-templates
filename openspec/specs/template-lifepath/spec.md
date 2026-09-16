# Template: LifePath (Life Coaching Landing Page)

## Purpose

LifePath is a life-coaching landing-page template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Life Coaching" free template
(source: https://colorlib.com/wp/template/life-coaching/,
preview: https://preview.colorlib.com/theme/lifecoaching/),
built under a DIFFERENT name (**LifePath**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 single-page life-coaching landing site with
a top bar (phone + social links), a sticky dark navbar with brand
"Life<span>coach</span>", a full-width hero slider (background images +
dark overlay, 3 slides), an info row (phone, address, hours, appointment CTA),
a 4-card services section (Career & Business, Mental & Physical Care, People &
Relationships, Life Coaching), a "Why coaching works" section with 4 items
(Accountability, Expertise, Speed, Delivery), an animated stats counter
(4 items), a testimonials carousel on a secondary-bg section, a 3-card blog
section, a newsletter subscribe strip, a 3-plan pricing section, and a dark
footer with 4-column links. The design uses a **lime/chartreuse brand palette**
(`#c5cf31`), Poppins font, Bootstrap-default button radius, and a dark
`#252525` footer.

> **Provenance:** This spec documents the original ColorLib Life Coaching design
> as a reference for implementation. No references to "ColorLib" or "Life Coaching"
> shall appear in the application code, comments, or runtime — provenance
> lives only in this spec.

## Design tokens

| Token              | Value                      | Notes                                                          |
| ------------------ | -------------------------- | -------------------------------------------------------------- |
| Brand lime         | `#c5cf31`                  | Primary accent: nav link underlines, CTA buttons, pricing btn  |
| Brand lime hover   | transparent + `#c5cf31` border | Button hover: outline style                              |
| Services icon bg   | `#8fd0d2`                  | Teal circle behind service/feature icons                       |
| Navbar bg          | `#333333`                  | Dark navbar background                                         |
| Navbar brand text  | `#000000` (main) + `#cccccc` (span) | "Life" black, "coach" grey                     |
| Nav link text      | `#4d4d4d`                  | Default nav link color                                         |
| Nav link hover     | `#ffffff` on lime underline| White text + `#c5cf31` bottom border on hover                  |
| Hero overlay       | `#000000` at opacity 0.4   | Dark semi-transparent overlay on hero images                   |
| Text heading       | `#202020` / `#333333`      | Section headings                                               |
| Text body          | `#6c757d` / `#4d4d4d`      | Body text, secondary text                                      |
| Section bg white   | `#ffffff`                  | Default section background                                     |
| Section bg light   | `#f8f9fa` / `#f7f7f7`      | Alternating section background (`.bg-light`)                   |
| Testimony bg       | Bootstrap secondary         | Dark teal/blue secondary background for testimonials           |
| Footer bg          | `#252525`                  | Dark footer background                                         |
| Footer text        | `#ffffff` / `#cccccc`      | Footer link and text colors                                    |
| Button radius      | `0.25rem` (4px)            | Bootstrap default rounded buttons                              |
| Font — body        | `"Poppins", Arial, sans-serif` | All text throughout                                        |
| Overlay dark       | `rgba(0,0,0,0.5)`          | Hero slider-2 and footer CTA area overlay                      |

## Requirements

### Requirement: Top bar

The system SHALL render a top utility bar with phone number and social links.

#### Scenario: Top bar content

- **GIVEN** the top bar is rendered
- **THEN** a phone number SHALL be displayed on the left (e.g. "+00 1234 567")
- **AND** social media icon links (Facebook, Twitter, Instagram, Dribbble)
  SHALL appear on the right
- **AND** the top bar SHALL have a dark background matching the navbar

### Requirement: Navbar

The system SHALL render a sticky responsive navbar with the LifePath brand
and navigation links.

#### Scenario: Desktop navbar

- **GIVEN** the LifePath app is rendered on a desktop viewport (>=992px)
- **THEN** a `<nav>` SHALL render with the brand text "LifePath" on the left
- **AND** navigation links SHALL appear: Home, About, Services, Stories, Blog, Contact
- **AND** the navbar background SHALL be `#333333` (dark)
- **AND** nav links SHALL be `#4d4d4d` text, with `#c5cf31` underline on hover/active

#### Scenario: Mobile navbar

- **GIVEN** the viewport is <=991px
- **THEN** the navbar SHALL collapse to a hamburger toggle button
- **AND** clicking the toggle SHALL expand/collapse the navigation links vertically

#### Scenario: Navbar sticks on scroll

- **GIVEN** the user scrolls past the hero
- **THEN** the navbar SHALL stick to the top of the viewport

### Requirement: Hero section

The system SHALL render a full-width hero banner with a background image,
dark overlay, and slider content.

#### Scenario: Hero slides

- **GIVEN** the hero section is rendered
- **THEN** a full-width section SHALL display with a background image
  and a black overlay at 0.4 opacity
- **AND** the hero SHALL contain at least 3 slides, each with:
  - A headline (e.g. "We are your personal life coach", "Improving the world",
    "Welcome to lifecoach")
  - A subheading
  - A "Connect with us" CTA button
- **AND** slides SHALL auto-rotate or have navigation controls

### Requirement: Info row

The system SHALL render a row of contact information below the hero.

#### Scenario: Info boxes

- **GIVEN** the info row is rendered
- **THEN** four info boxes SHALL appear: phone number, address, opening hours,
  and a "Make an Appointment" CTA
- **AND** the CTA button SHALL use `#c5cf31` background

### Requirement: Services section 1

The system SHALL render a 4-card services grid.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **THEN** the heading SHALL read "We can help you in different situations" / "We offer Services"
- **AND** 4 service cards SHALL appear in a row:
  1. Career & Business
  2. Mental & Physical Care
  3. People & Relationships
  4. Life coaching
- **AND** each card SHALL have an icon with `#8fd0d2` (teal) background circle
- **AND** each card SHALL have a title and short description

### Requirement: Why coaching works

The system SHALL render a "Why coaching works?" section with 4 items.

#### Scenario: Coaching items

- **GIVEN** the "Why coaching works" section is rendered
- **THEN** the section SHALL have a light (`#f7f7f7`) background
- **AND** 4 items SHALL appear: Accountability, Expertise, Speed, Delivery
- **AND** each item SHALL have an icon with `#8fd0d2` background circle
- **AND** each item SHALL have a title and description text

### Requirement: Counter section

The system SHALL render an animated statistics counter.

#### Scenario: Counter stats

- **GIVEN** the counter section is rendered
- **THEN** 4 stat boxes SHALL display:
  1. Years of Experienced
  2. Successful Entrepreneurs
  3. Companies Founded
  4. Book, DVD's and Podcasts
- **AND** the numbers SHALL animate on scroll into view
- **AND** the section SHALL have a background image with overlay

### Requirement: Testimonials section

The system SHALL render a testimonials carousel on a dark background.

#### Scenario: Testimonial carousel

- **GIVEN** the testimonials section is rendered
- **THEN** the section SHALL have a dark secondary background
- **AND** the heading SHALL read "Happy Clients & Feedbacks" / "Testimonies"
- **AND** a carousel SHALL display testimonial entries with quote text,
  author name, and role
- **AND** the carousel SHALL support navigation (prev/next or dots)

### Requirement: Blog section

The system SHALL render a 3-card blog grid.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **THEN** the heading SHALL read "Latest news from our blog" / "News & Blog"
- **AND** 3 blog cards SHALL appear, each with:
  - A cover image (placeholder via `picsum.photos`)
  - A date and author
  - A title/excerpt

### Requirement: Newsletter section

The system SHALL render a newsletter subscribe strip.

#### Scenario: Newsletter content

- **GIVEN** the newsletter section is rendered
- **THEN** a heading "Subscribe for our weekly tips" SHALL appear
- **AND** an email input + subscribe button SHALL render
- **AND** the section SHALL have a dark overlay background

### Requirement: Pricing section

The system SHALL render a 3-plan pricing table.

#### Scenario: Pricing plans

- **GIVEN** the pricing section is rendered
- **THEN** the heading SHALL read "Life saving packages" / "Price & Plans"
- **AND** 3 pricing cards SHALL appear:
  1. Single Session (feature list)
  2. Personal Session (feature list)
  3. Life Coaching ($149, feature list)
- **AND** each card SHALL have a "Get Started" button with `#c5cf31` background

### Requirement: Footer

The system SHALL render a dark footer with links and copyright.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **THEN** the footer SHALL have a `#252525` background
- **AND** 4 columns SHALL appear: About us, Courses, Topics, Resources
- **AND** a copyright bar SHALL render at the bottom

#### Scenario: Footer Component Dock link

- **GIVEN** the footer is rendered
- **THEN** a link to `https://www.componentdock.com/` ("Component Dock")
  SHALL be present in the copyright text

### Requirement: Accessibility

The system SHALL provide accessible markup for all interactive elements.

#### Scenario: Keyboard navigation

- **GIVEN** any interactive element in the LifePath app
- **THEN** it SHALL be reachable via keyboard Tab key
- **AND** focus-visible rings SHALL be displayed on focused elements

#### Scenario: Semantic HTML

- **GIVEN** the LifePath app is rendered
- **THEN** the navbar SHALL use `<nav>`, the main content SHALL use `<main>`,
  sections SHALL use `<section>`, and the footer SHALL use `<footer>`
- **AND** all images SHALL have descriptive `alt` attributes

## Verification checklist

- [ ] Top bar with phone + social icons renders
- [ ] Navbar is sticky, responsive, `#333` dark background
- [ ] Navbar brand shows "LifePath" (no ColorLib reference)
- [ ] Hero has full-cover bg image, black overlay at 0.4, 3 slider slides
- [ ] Info row has phone, address, hours, appointment CTA
- [ ] Services section 1 has 4 cards with teal icon circles
- [ ] Why coaching works section has 4 items on light bg
- [ ] Counter section has 4 animated stats on bg image
- [ ] Testimonials carousel on dark secondary bg
- [ ] Blog section has 3 cards with cover images
- [ ] Newsletter subscribe strip with email input
- [ ] Pricing section has 3 plan cards with `#c5cf31` buttons
- [ ] Footer is `#252525` dark, 4-column links, copyright
- [ ] Footer links to componentdock.com
- [ ] All CTA buttons use `#c5cf31` brand lime
- [ ] Poppins font used throughout
- [ ] All interactive elements keyboard-accessible
- [ ] No references to ColorLib in app code
- [ ] Uses `lucide-react` for icons (no Font Awesome)
- [ ] Uses `picsum.photos` for all placeholder images
