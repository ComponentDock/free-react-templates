# Template: Bitlab (Digital Agency Landing)

## Purpose

Bitlab is a digital agency landing page in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Digilab" free template
(source: https://colorlib.com/wp/template/digilab/), built under a DIFFERENT
name (**Bitlab**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a multi-section digital agency template defined by a vibrant
green (#31de79) accent color, Nunito Sans font, dark navbar, hero slider with
split layout, vertical tabbed services, project carousel, about section with
animated counter, stats bar, 4-step process, client logos, FAQ accordion,
testimonials carousel, blog cards, contact form, and a dark footer. The source
has multiple HTML pages; this recreation focuses on the homepage (index.html).

## Design tokens (from live preview stylesheet, verified 2026-09-11)

| Token            | Value                                                 | Use                                                                   |
| ---------------- | ----------------------------------------------------- | --------------------------------------------------------------------- |
| Font primary     | 'Nunito Sans', Arial, sans-serif                      | Body text, paragraphs, general UI                                     |
| Brand green      | `#31de79`                                             | Primary accent, buttons, stats bg, active pill bg                      |
| Lime green       | `#a0f669`                                             | Button gradient start, secondary accent                                |
| Green gradient   | `linear-gradient(135deg, #9ff669 0%, #31de79 100%)`   | Primary button background                                             |
| Dark bg          | `#000000`                                             | Navbar background                                                      |
| Dark charcoal    | `#232931`                                             | Footer background                                                     |
| Brown            | `#3c312e`                                             | Secondary dark accent                                                 |
| White            | `#fff`                                                | Text on dark, button text, card/section backgrounds                   |
| Light gray bg    | `#f2f2f2`                                             | Services section, projects section, blog section backgrounds           |
| Off-white bg     | `#f8f9fa`                                             | Body default, contact form background                                  |
| Warm gray        | `#e6e6e6`                                             | Dividers, subtle borders                                              |
| Button style     | bg green gradient, white text, no visible radius      | px-5 py-3, bold, hover turns text green with green border             |
| Section title    | 'Nunito Sans', weight 700, centered                   | Section headings with subheading label above                           |
| Subheading       | Green `#31de79`, uppercase, small                     | "Welcome to the digilab", "Accomplishments", etc.                      |
| Process step     | Large step number (01-04) + icon + title + description | 4-column layout on white bg                                           |
| Counter box      | Green bg, white text, 48px number                      | "20 Years of experience" in about section                              |
| Testimonial      | Circular avatar bg-image, quote icon, name, position   | Carousel with pagination dots                                          |
| Blog card        | Background image top, text bottom with date badge      | Day/Month/Year layout, "Read More" CTA                                |
| Card shadow      | Default Bootstrap shadow                               | Project cards, blog cards                                              |

## Section structure (from live homepage DOM)

1. **Navbar** (dark, fixed-top):
   - Logo "BitLab" (green "Bit" + white "Lab") left
   - Nav links center: Home, Services, Projects, About, Testimony, Blog, Contact
   - CTA button "Get in touch" (green) right — collapses to hamburger on mobile

2. **Hero Slider** (swiper, 2 slides, split layout):
   - Left: text content (subheading green, h1 with green accent span, paragraph, CTA button)
   - Right: full-height background image with dark overlay
   - Slide 1: "Small Details Make A Big Impression"
   - Slide 2: "Strategic Design And Technology Agency"
   - Both have "Get in touch" green CTA button

3. **Services** (vertical tabbed pills, bg-light):
   - Left column (col-md-4): vertical pill nav with 7 items:
     Business Strategy, Research, Data Analysis, UI Design, UX Design,
     Technology, Creative — each with flaticon icon
   - Right column (col-md-8): tab content with icon, title, description,
     "Learn More" button

4. **Parallax Image** (full-width bg image with overlay):
   - Background image section acting as visual break
   - Text overlay on right side

5. **Projects** (carousel, bg-light):
   - Section title: "Accomplishments" / "Our Projects"
   - Swiper carousel of project cards with:
     background image, title overlay, category label
   - Pagination dots

6. **About/Counter** (split layout):
   - Left: background image (about.jpg)
   - Right: "Welcome to digilab" subheading, "We Are Digital Agency" h2,
     3 paragraphs of text, green counter box "20 Years of experience"

7. **Stats Bar** (green bg-primary):
   - 4 stat counters in a row:
     500 Happy Clients, 850 Projects Completed, 20 Years Experience, 100+ Team Members
   - White text on green background, animated number counters

8. **Process** (4 steps, white bg):
   - Section title: "Our Process" / "How We Work"
   - 4 columns each with: step number (01-04), icon, title, description
   - Steps: Discovery, Planning, Execution, Result

9. **Clients/Partners** (bg-light):
   - Section title: "Our Partners" / "Trusted By Industry Leaders"
   - 6 placeholder client logos in a row

10. **FAQ** (accordion, white bg):
    - Section title: "FAQ" / "Frequently Asked Questions"
    - Bootstrap accordion with 4+ items, first expanded by default
    - Questions about services, process, pricing, timelines

11. **Testimony** (carousel, dark bg):
    - Section title: "Happy Clients" (white)
    - Swiper carousel with testimonials:
      circular avatar bg-image, quote icon, quote text, name, position
    - Pagination dots

12. **Blog** (3 cards, bg-light):
    - Section title: "Blog" / "Our Blog"
    - 3 blog cards each with:
      background image header, date badge (day/month/year),
      title, excerpt, "Read More" CTA, author + comments metadata

13. **Contact** (form + info cards):
    - Section title: "Contact" / "Contact Us"
    - 4 info cards in a row: Address, Phone, Email, Website
    - Contact form: Name, Email, Subject, Message textarea, "Send Message" button

14. **Footer** (dark bg `#232931`):
    - 4 columns: About (description + social icons Twitter/Facebook/Instagram),
      Links (Home/About/Services/Projects/Contact),
      Services (list), Newsletter (text + subscribe input)
    - Copyright bar at bottom with Component Dock link

## Gherkin requirements

### Requirement: Navbar

The system SHALL render a dark fixed-top navbar with logo, navigation links,
and a CTA button.

#### Scenario: Navbar renders on desktop

- **GIVEN** the Bitlab app is rendered on desktop (≥992px)
- **THEN** a dark (#000000) fixed-top navbar SHALL display
- **AND** a logo "BitLab" SHALL render left with "Bit" in green (#31de79)
  and "Lab" in white
- **AND** navigation links SHALL render center: Home, Services, Projects,
  About, Testimony, Blog, Contact (white text)
- **AND** a "Get in touch" green CTA button SHALL render right
- **AND** the navbar SHALL remain fixed at the top on scroll

#### Scenario: Navbar collapses on mobile

- **GIVEN** the Bitlab app is rendered on mobile (<992px)
- **THEN** a hamburger toggler button SHALL display
- **AND** clicking it SHALL toggle the navigation links vertically

### Requirement: Hero slider

The system SHALL render a hero section with a swiper slider containing
two slides with split layout (text left, image right).

#### Scenario: Hero slider renders

- **GIVEN** the hero section is rendered
- **THEN** a swiper slider SHALL display with 2 slides
- **AND** each slide SHALL have a left text area with subheading (green),
  heading (with green accent span), paragraph, and CTA button
- **AND** each slide SHALL have a right side with a full-height background
  image and dark overlay
- **AND** slide 1 heading SHALL read "Small Details Make A Big Impression"
- **AND** slide 2 heading SHALL read "Strategic Design And Technology Agency"
- **AND** slide navigation dots SHALL allow switching between slides

### Requirement: Services (vertical tabbed pills)

The system SHALL render a services section with vertical pill tabs on the
left and tab content on the right.

#### Scenario: Services render on desktop

- **GIVEN** the services section is rendered on desktop
- **THEN** a left column (col-md-4) SHALL show 7 vertical pill nav items:
  Business Strategy, Research, Data Analysis, UI Design, UX Design,
  Technology, Creative
- **AND** each pill SHALL have an icon and label text
- **AND** the first pill (Business Strategy) SHALL be active by default
- **AND** a right column (col-md-8) SHALL show the active tab content
  with icon, title, two paragraphs, and "Learn More" button
- **AND** clicking a different pill SHALL switch the visible content

#### Scenario: Services render on mobile

- **GIVEN** the services section is rendered on mobile (<768px)
- **THEN** the pills and content SHALL stack vertically
- **AND** the tabbed interaction SHALL still function

### Requirement: Parallax image section

The system SHALL render a full-width parallax image section as a visual break.

#### Scenario: Parallax image renders

- **GIVEN** the parallax section is rendered
- **THEN** a full-width section SHALL display with a background image
- **AND** a dark overlay SHALL be applied for contrast
- **AND** text content SHALL overlay on the right side

### Requirement: Projects carousel

The system SHALL render a project carousel with image cards.

#### Scenario: Projects carousel renders

- **GIVEN** the projects section is rendered
- **THEN** a centered title "Our Projects" SHALL display with subheading
  "Accomplishments"
- **AND** a swiper carousel SHALL show project cards
- **AND** each card SHALL have a background image, title, and category label
- **AND** carousel pagination dots SHALL allow navigation

### Requirement: About section with counter

The system SHALL render an about section with a split layout: image on the
left and text with an animated counter on the right.

#### Scenario: About section renders

- **GIVEN** the about section is rendered
- **THEN** a left column SHALL display a background image
- **AND** a right column SHALL show "Welcome to digilab" subheading (green),
  "We Are Digital Agency" heading, and 3 paragraphs
- **AND** a green (#31de79) counter box SHALL display "20 Years of experience"
- **AND** the counter number SHALL animate from 0 to 20 on scroll

### Requirement: Stats bar

The system SHALL render a green stats bar with 4 animated counters.

#### Scenario: Stats bar renders

- **GIVEN** the stats section is rendered
- **THEN** a green (#31de79) background section SHALL display
- **AND** 4 stat counters SHALL render in a row: 500 Happy Clients,
  850 Projects Completed, 20 Years Experience, 100+ Team Members
- **AND** each counter number SHALL animate from 0 to its value on scroll

### Requirement: Process section

The system SHALL render a 4-step process section.

#### Scenario: Process section renders

- **GIVEN** the process section is rendered
- **THEN** a centered title "How We Work" SHALL display with subheading
  "Our Process"
- **AND** 4 columns SHALL render each with: step number (01-04),
  icon, title, description
- **AND** the steps SHALL be: Discovery, Planning, Execution, Result

### Requirement: Clients/Partners section

The system SHALL render a client logos section.

#### Scenario: Clients section renders

- **GIVEN** the clients section is rendered
- **THEN** a centered title "Trusted By Industry Leaders" SHALL display
  with subheading "Our Partners"
- **AND** 6 placeholder logo slots SHALL render in a row (gray SVG
  placeholders)

### Requirement: FAQ accordion

The system SHALL render an FAQ section with an accordion.

#### Scenario: FAQ renders with first item open

- **GIVEN** the FAQ section is rendered
- **THEN** a centered title "Frequently Asked Questions" SHALL display
- **AND** an accordion with 4+ items SHALL render
- **AND** the first item SHALL be expanded by default
- **AND** clicking a different question SHALL collapse the current and
  expand the clicked one

### Requirement: Testimonials carousel

The system SHALL render a testimonials carousel on a dark background.

#### Scenario: Testimonials render

- **GIVEN** the testimonial section is rendered
- **THEN** a dark background section SHALL display with title "Happy Clients"
  (white text)
- **AND** a swiper carousel SHALL show testimonial cards
- **AND** each card SHALL have a circular avatar (bg-image), quote icon,
  quote text, client name, and position
- **AND** pagination dots SHALL allow navigation

### Requirement: Blog section

The system SHALL render a blog section with 3 blog cards.

#### Scenario: Blog cards render

- **GIVEN** the blog section is rendered
- **THEN** a centered title "Our Blog" SHALL display with subheading "Blog"
- **AND** 3 blog cards SHALL render in a row
- **AND** each card SHALL have a background image header, date badge
  (day/month/year), title, excerpt, "Read More" CTA, author and
  comment count metadata

### Requirement: Contact section

The system SHALL render a contact section with info cards and a form.

#### Scenario: Contact info and form render

- **GIVEN** the contact section is rendered
- **THEN** a centered title "Contact Us" SHALL display
- **AND** 4 info cards SHALL render in a row: Address, Phone, Email, Website
  — each with an icon and text
- **AND** a contact form SHALL render with fields: Name, Email, Subject,
  Message (textarea), and a "Send Message" button
- **AND** the form SHALL be on a light (#f8f9fa) background

#### Scenario: Contact form validates

- **GIVEN** the user clicks "Send Message" with empty fields
- **THEN** the form SHALL prevent submission and show validation feedback

### Requirement: Footer

The system SHALL render a dark footer with multiple columns and a copyright bar.

#### Scenario: Footer renders

- **GIVEN** the footer is rendered
- **THEN** a dark (#232931) footer SHALL display with 4 columns:
  About (description + social icons), Links, Services, Newsletter
- **AND** social icons SHALL include Twitter, Facebook, Instagram
- **AND** a copyright bar SHALL display at the bottom
- **AND** the footer SHALL link to https://www.componentdock.com/
  (branded "Component Dock")

### Requirement: Responsive design

The system SHALL be fully responsive across all breakpoints.

#### Scenario: Mobile layout

- **GIVEN** the app is rendered at 375px width
- **THEN** the navbar SHALL show a hamburger menu
- **AND** hero text and image SHALL stack vertically
- **AND** services pills and content SHALL stack vertically
- **AND** project cards SHALL display one per row
- **AND** about section image and text SHALL stack
- **AND** stats SHALL wrap to 2×2 grid
- **AND** process steps SHALL stack or show 2 per row
- **AND** client logos SHALL wrap to 3 per row
- **AND** blog cards SHALL stack vertically
- **AND** contact info cards SHALL stack and form SHALL be full-width
- **AND** footer columns SHALL stack

## Verification checklist

- [ ] `npm run verify:app -- bitlab` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/digilab/:
      dark navbar, hero slider with split layout, vertical tabbed services,
      parallax image, project carousel, about with counter, green stats bar,
      4-step process, client logos, FAQ accordion, testimonials, blog cards,
      contact form, dark footer.
- [ ] Design tokens match: Nunito Sans font, brand green #31de79,
      lime #a0f669, dark #000000/#232931, button gradient from #9ff669 to
      #31de79, white text on green.
- [ ] Responsive check at 767px: hamburger nav, stacked sections, wrapped grids.
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
