# Template: ClassNova (Education / Online Learning)

## Purpose

Recreation of ColorLib's **Eskwela** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template:** Eskwela
- **ColorLib URL:** https://colorlib.com/wp/template/eskwela/
- **Live preview:** https://preview.colorlib.com/theme/eskwela/
- **New app name:** `classnova`
- **Package:** `@free-react-templates/classnova`

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token            | Value                                |
| ---------------- | ------------------------------------ |
| Brand primary    | `#429FFD` (bright blue)              |
| Brand secondary  | `#FFC300` (golden yellow)            |
| Accent blue      | `#5bacfd` (lighter blue)             |
| Dark             | `#000000` / `#252525`               |
| Text dark        | `#333333`                            |
| Text muted       | `#999999` / `#b3b3b3`               |
| Background light | `#f2f3f7` (light gray-blue)          |
| Background alt   | `#f0f0f0`                            |
| White            | `#ffffff`                            |
| Font heading     | `"Playfair Display", Georgia, serif` |
| Font body        | `"Open Sans", Arial, sans-serif`     |
| Button radius    | `30px` (rounded) / `100px` (pill)    |
| Card radius      | `4px`                                |
| Avatar radius    | `50%` (circular)                     |
| Link hover       | `#429FFD` (matches primary)          |

## Section structure (order from preview)

1. **Navbar** — Logo ("Eskwela"), navigation (Home, Courses, About, Events, News, Contact), "Free Trial" CTA button (blue). Dark/transparent over hero.
2. **Hero Slider** — Flexslider with 4 slides. Each slide: background image, centered white text (heading + subtext), CTA buttons ("Register Now" / "Free Trial"). Slides: "Best Online Learning System", "Online Free Course", "Education is a Key to Success", "Best Online Learning Center".
3. **About Section** — Split layout. Left: heading "Welcome to Eskwela", tabbed content ("Why choose us?", "What we do?", "Offer Services"). Right: 4 service items with icons (Professional Courses, Experienced Instructor, Practical Training, Validated Certificate).
4. **Classes Section** — "Our Classes" heading on light gray background. 6 course cards in a 3-column grid. Each: image with dark overlay + title + "Learn More" link. Courses: Developing Mobile Apps, Convert PSD to HTML, etc.
5. **Trainers Section** — Instructor profiles (colorlib-trainers). Circular avatar images with names.
6. **Events Section** — Event entries with date badges, titles, descriptions. Layout with featured image on one side.
7. **Blog Section** — "Latest Blog" on light gray background. 3 blog post cards with images, titles, meta info.
8. **Counter Section** — 4 stat counters (number + label) on dark background.
9. **Footer** — Dark background. Multiple columns: About text, Course links, Recent posts, Newsletter signup form. Social icons. Copyright bar.

## Requirements

### Navbar

Feature: ClassNova Navigation

#### Scenario: Navbar displays logo and links

- **GIVEN** the user visits the ClassNova homepage
- **THEN** the navbar shows the "ClassNova" logo
- **AND** navigation links include: Home, Courses, About, Events, News, Contact
- **AND** a "Free Trial" CTA button is visible

#### Scenario: Navbar is transparent over hero

- **GIVEN** the user views the top of the homepage
- **THEN** the navbar has a transparent/dark background overlaying the hero

### Hero Slider

Feature: ClassNova Hero Slider

#### Scenario: Hero slider has multiple slides

- **GIVEN** the user visits the ClassNova homepage
- **THEN** a full-width image slider is visible
- **AND** each slide has a heading, subtext, and CTA button(s)

#### Scenario: Hero slider auto-advances

- **GIVEN** the user waits on the homepage
- **THEN** the slider advances to the next slide

#### Scenario: Hero slide CTAs are clickable

- **GIVEN** the user views a slide
- **WHEN** the user clicks "Register Now"
- **THEN** the user is navigated to the registration page

### About Section

Feature: ClassNova About

#### Scenario: About section shows welcome text and services

- **GIVEN** the user scrolls to the about section
- **THEN** a heading reads "Welcome to ClassNova"
- **AND** tabbed content is available: "Why choose us?", "What we do?", "Offer Services"
- **AND** 4 service items are displayed with icons

#### Scenario: About tabs are switchable

- **GIVEN** the user views the about section
- **WHEN** the user clicks "What we do?"
- **THEN** the content updates to show "What we do?" details

### Classes Section

Feature: ClassNova Classes

#### Scenario: Six course cards are displayed

- **GIVEN** the user scrolls to the classes section
- **THEN** 6 course cards are shown in a 3-column grid
- **AND** each card has an image, title overlay, and "Learn More" link

#### Scenario: Course cards have hover effect

- **GIVEN** the user hovers over a course card
- **THEN** the card shows a hover state (overlay or scale effect)

### Trainers Section

Feature: ClassNova Trainers

#### Scenario: Instructor profiles are displayed

- **GIVEN** the user scrolls to the trainers section
- **THEN** instructor profiles are shown with circular avatar images and names

### Events Section

Feature: ClassNova Events

#### Scenario: Event entries are shown

- **GIVEN** the user scrolls to the events section
- **THEN** event entries are displayed with date badges, titles, and descriptions

### Blog Section

Feature: ClassNova Blog

#### Scenario: Three blog posts are shown

- **GIVEN** the user scrolls to the blog section
- **THEN** 3 blog post cards are displayed
- **AND** each has an image, title, and meta information
- **AND** the section heading reads "Latest Blog"

### Counter Section

Feature: ClassNova Counters

#### Scenario: Four stat counters are displayed

- **GIVEN** the user scrolls to the counter section
- **THEN** 4 counters are shown with numbers and labels
- **AND** the section has a dark background

### Footer

Feature: ClassNova Footer

#### Scenario: Footer has multiple columns

- **GIVEN** the user scrolls to the footer
- **THEN** columns are visible: About, Courses, Recent Posts, Newsletter

#### Scenario: Footer links to Component Dock

- **GIVEN** the user scrolls to the footer
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** it is branded as "Component Dock"

#### Scenario: Newsletter signup form exists

- **GIVEN** the user views the footer
- **THEN** a newsletter email input and subscribe button are visible

## Verification checklist

- [ ] All sections match the original section order 1:1
- [ ] Brand color `#429FFD` used for primary buttons, links, accents
- [ ] Secondary color `#FFC300` used for highlights and badges
- [ ] Playfair Display used for headings; Open Sans for body text
- [ ] Rounded buttons (30px radius) for CTAs
- [ ] Hero slider with 4 slides, centered text, background images
- [ ] About section has tabbed content + 4 service items
- [ ] Classes section shows 6 course cards in 3-column grid
- [ ] Trainers section with circular avatars
- [ ] Events section with date badges
- [ ] Blog section with 3 post cards
- [ ] Counter section with 4 stats on dark background
- [ ] Footer with 4 columns + newsletter form + Component Dock link
- [ ] No ColorLib references in app code
- [ ] All images use `picsum.photos/seed/classnova-<n>/...` placeholders
- [ ] Typography loaded via Google Fonts in index.html
- [ ] 100% test coverage on all new code
