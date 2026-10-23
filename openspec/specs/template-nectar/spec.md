# Template: Nectar (Construction / Business)

## Purpose

A construction company one-page template with a hero slider, request-a-quote form, services grid, project gallery, counter stats. It also includes testimonials carousel, blog cards, and a dark footer. Recreation of ColorLib "Bee".

- **Source**: [ColorLib Bee](https://colorlib.com/wp/template/bee/)
- **Preview**: https://preview.colorlib.com/theme/bee/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/bee-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `nectar` (apps/nectar, `@free-react-templates/nectar`)

## Design tokens (extracted from preview CSS)

| Token            | Value                                    | Source                              |
| ---------------- | ---------------------------------------- | ----------------------------------- |
| Brand primary    | `#fda729` (golden amber)                 | `.bg-primary`, buttons, accents     |
| Dark brown       | `#3c312e`                                | `.ftco-bg-dark`, footer wrapper     |
| Footer bg        | `#141313` (near-black)                   | `.ftco-footer`                      |
| Text primary     | `#000000`                                | headings, body on light             |
| Text secondary   | `rgba(0,0,0,0.3)`                        | subheadings                         |
| Text muted       | `rgba(255,255,255,0.7)`                  | footer text                         |
| White            | `#FFFFFF`                                | section backgrounds                 |
| Body bg          | `#FFFFFF`                                | page background                     |
| Font heading     | `'Poppins', sans-serif`                  | h1–h6, nav, buttons, counter labels |
| Font body        | `'Nunito Sans', sans-serif`              | paragraphs, body text               |
| Button radius    | `0.25rem` (Bootstrap default)            | `.btn`                              |
| Button primary   | `#fda729` bg, white text                 | `.btn-primary`                      |
| Button secondary | `#6c757d` bg, white text (Bootstrap)     | `.btn-secondary`                    |
| Counter bg       | `#fda729` (full-width yellow overlay)    | `#section-counter:after`            |
| Testimonial dots | `#fda729` active, `rgba(0,0,0,0.2)` idle | `.owl-dot`                          |
| Blog date badge  | `#fda729` bg, black text                 | `.meta-date`                        |
| Tagcloud bg      | `rgba(0,0,0,0.05)`, hover border `#000`  | `.tagcloud a`                       |
| Form border      | `rgba(0,0,0,0.1)`, focus `#000`          | `.form-control`                     |
| Parallax overlay | `rgba(0,0,0,0.2)`                        | `.overlay` on hero slides           |

## Sections (in order, from preview DOM)

1. **TopBar** — Contact info strip: email icon + address, phone icon + number, "Request A Quote" CTA button. Flex row, light background.
2. **Navbar** — Dark background (`bg-dark`), logo "Nectar." with bee icon, nav links (Home, About, Project, Blog, Contact), search input right-aligned, hamburger toggle for mobile.
3. **HeroSlider** — OwlCarousel (2 slides), full-width background images with parallax (`data-stellar-background-ratio`), dark overlay, right-aligned text (h1 with `<span>` accent, subheading paragraph, "Request A Quote" secondary button).
4. **QuoteAndAbout** — Two-column layout: left = "Request A Quote" form (yellow `.bg-primary` header, fields: first name, last name, service select, phone, message textarea, submit button); right = "We Are Highly Recommendable Construction Firm" heading + body text + "Read More" button.
5. **Services** — Section heading "Experience Great Services". Three service items with icon + title + description: "Expert & Professional", "High Quality Work", "24/7 Help Support". Includes social links per service card.
6. **CTABanner** — Full-width parallax background image with overlay, CTA text + button.
7. **TeamMembers** — Section heading. Four team member cards (avatar image, name, role, social icons row: twitter, facebook, google-plus, instagram).
8. **ProjectGallery** — Section heading. Three-column grid of project images with hover effect (yellow overlay, project name slides up from bottom, zoom icon circle).
9. **CounterStats** — Full-width yellow background (`#fda729` overlay), parallax background image. Four stat blocks: "30 Years Experienced", "1500 Project Successful", "100 Professional Expert", "300 Happy Customers". Numbers animate on scroll.
10. **ServicesAndTestimonials** — Two-column: left = "Experience Great Services" heading + three service flow items (icon + title + description); right = "Satisfied Customer" heading + OwlCarousel of testimonial cards (quote icon, text, name, role, avatar image).
11. **Blog** — Light gray background. Section heading "Recent Blog". Three blog cards: image with date badge overlay (day, month, year), title, excerpt, "Read More" button, author + comment count.
12. **Footer** — Dark brown background (`#3c312e`). Four columns: (a) logo "Nectar." + social icons, (b) Services list, (c) Recent Blog with thumbnails, (d) Newsletter subscribe form. Copyright line at bottom.

## Requirements

### Feature: TopBar

#### Scenario: TopBar displays contact information

- **GIVEN** the user loads the page
- **THEN** the top bar shows an email address
- **AND** a phone number
- **AND** a "Request A Quote" button

#### Scenario: TopBar is responsive

- **GIVEN** the viewport is narrow (mobile)
- **THEN** the top bar stacks vertically
- **AND** all contact items remain visible

### Feature: Navbar

#### Scenario: Navbar shows logo and navigation links

- **GIVEN** the user loads the page
- **THEN** the navbar shows the logo text "Nectar."
- **AND** the navigation links are visible: "Home", "About", "Project", "Blog", "Contact"
- **AND** a search input is visible on the right

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user taps the hamburger toggle
- **THEN** the navigation links expand/collapse

### Feature: Hero Slider

#### Scenario: Hero displays headline and CTA

- **GIVEN** the user is on the homepage
- **THEN** the hero section shows a headline with accent text
- **AND** a subheading paragraph
- **AND** a "Request A Quote" button

#### Scenario: Hero has multiple slides

- **GIVEN** the hero slider is visible
- **THEN** at least 2 slides are present
- **AND** each slide has a background image with overlay
- **AND** navigation dots or arrows allow slide switching

### Feature: Quote and About

#### Scenario: Request A Quote form is displayed

- **GIVEN** the user scrolls to the quote section
- **THEN** a form with fields is visible: First Name, Last Name, Service (select), Phone, Message
- **AND** a submit button labeled "Appointment" is present

#### Scenario: About section shows company description

- **GIVEN** the user scrolls to the about section
- **THEN** a heading "We Are Highly Recommendable Construction Firm" is visible
- **AND** a paragraph of description text is shown
- **AND** a "Read More" button is visible

### Feature: Services

#### Scenario: Services section shows service items

- **GIVEN** the user scrolls to the services section
- **THEN** a heading "Experience Great Services" is visible
- **AND** 3 service cards are displayed
- **AND** each card has an icon, title, and description

#### Scenario: Each service card has social links

- **GIVEN** a service card is rendered
- **THEN** social media icons are visible (twitter, facebook, google-plus, instagram)

### Feature: CTABanner

#### Scenario: CTA banner displays with parallax

- **GIVEN** the user scrolls to the CTA banner
- **THEN** a full-width section with a background image is visible
- **AND** the background image has a parallax effect

### Feature: Team Members

#### Scenario: Team section displays member cards

- **GIVEN** the user scrolls to the team section
- **THEN** 4 team member cards are visible
- **AND** each card has an avatar image, name, and role
- **AND** each card has social media icon links

#### Scenario: Team member cards are responsive

- **GIVEN** the viewport is narrow (mobile)
- **THEN** team member cards stack vertically

### Feature: Project Gallery

#### Scenario: Project gallery shows project images

- **GIVEN** the user scrolls to the project gallery
- **THEN** a heading is visible
- **AND** 3 project image cards are displayed in a grid

#### Scenario: Project card hover effect

- **GIVEN** the user hovers over a project card
- **THEN** a yellow overlay fades in
- **AND** the project name slides up from the bottom
- **AND** a circular zoom icon appears

### Feature: Counter Stats

#### Scenario: Counter section shows statistics

- **GIVEN** the user scrolls to the counter section
- **THEN** 4 stat blocks are visible
- **AND** each block shows a number and label
- **AND** the numbers are: 30 (Years Experienced), 1500 (Project Successful), 100 (Professional Expert), 300 (Happy Customers)

#### Scenario: Counter numbers animate on scroll

- **GIVEN** the counter section enters the viewport
- **THEN** the numbers animate from 0 to their target values

### Feature: Services and Testimonials

#### Scenario: Testimonials carousel displays reviews

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a heading "Satisfied Customer" is visible
- **AND** testimonial cards are displayed in a carousel
- **AND** each card has a quote icon, review text, name, and role

#### Scenario: Services flow list is displayed

- **GIVEN** the user views the left column
- **THEN** 3 service items are listed vertically
- **AND** each has an icon, title, and short description

### Feature: Blog

#### Scenario: Blog section shows recent posts

- **GIVEN** the user scrolls to the blog section
- **THEN** a heading "Recent Blog" is visible
- **AND** 3 blog cards are displayed
- **AND** each card has an image with a date badge overlay
- **AND** each card has a title, excerpt, "Read More" button, author, and comment count

#### Scenario: Blog date badge shows formatted date

- **GIVEN** a blog card is rendered
- **THEN** the date badge displays the day, month, and year
- **AND** the badge has a yellow background

### Feature: Footer

#### Scenario: Footer displays four columns

- **GIVEN** the user scrolls to the footer
- **THEN** 4 columns are visible: brand + social, services list, recent blog, newsletter

#### Scenario: Newsletter form in footer

- **GIVEN** the footer newsletter form is visible
- **THEN** an email input with placeholder "Enter email address" is shown
- **AND** a "Subscribe" button is present

#### Scenario: Footer copyright line

- **GIVEN** the footer is visible
- **THEN** a copyright line is shown at the bottom
- **AND** the footer links to Component Dock (https://www.componentdock.com/)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/nectar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/nectar/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] All 12 sections render in correct order
- [ ] Fonts: Poppins for headings/nav/buttons, Nunito Sans for body text
- [ ] Brand color `#fda729` used consistently for primary actions and accents
- [ ] Dark sections: navbar (`#343a40`), footer (`#3c312e`)
- [ ] Hero slider: 2 slides with parallax + overlay + text alignment (right)
- [ ] Quote form: all fields present, yellow header bar
- [ ] Services: 3 cards with icons and social links
- [ ] Project gallery: 3-column grid with hover overlay effect
- [ ] Counter: 4 stats on yellow background, animated numbers
- [ ] Testimonials: carousel with avatar, name, role, quote
- [ ] Blog: 3 cards with date badge overlays
- [ ] Footer: 4 columns, newsletter form, Component Dock link
- [ ] Responsive: hamburger nav, stacking grids, mobile-friendly forms
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images via `picsum.photos/seed/nectar-<n>/...`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
