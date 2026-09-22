# Spec: RepForge

## Purpose

RepForge is a free React gym and fitness landing page template. It recreates the ColorLib "Ponigym" design with a sticky header, hero carousel, services grid with video preview, a call-to-action banner, a tab-based class showcase, a weekly trainer schedule table, team/trainer profiles, a latest news blog grid, and a footer split between a Google Map and a contact form. Built with React 19, Tailwind CSS 4, and TypeScript.

## Origin

- **Source:** ColorLib Ponigym — https://colorlib.com/wp/template/ponigym/
- **Preview:** https://preview.colorlib.com/theme/ponigym/
- **Recreation name:** RepForge (different from the source name per project rules)

## Design Tokens

### Fonts

| Token            | Family     | Usage                                      |
| ---------------- | ---------- | ------------------------------------------ |
| `--font-heading` | **Oswald** | Headlines, hero text, section titles, buttons |
| `--font-body`    | **Roboto** | Body copy, navigation, descriptions, UI    |

### Colors

| Token                | Value     | Usage                                                     |
| -------------------- | --------- | --------------------------------------------------------- |
| `--color-primary`    | `#f34e3a` | Primary red — CTAs, accents, highlights, section-title bars |
| `--color-heading`    | `#191919` | Heading text color                                        |
| `--color-body`       | `#8f8fa8` | Default paragraph/body text                               |
| `--color-text-muted` | `#6e6e6e` | Secondary text, descriptions                              |
| `--color-white`      | `#ffffff` | Light backgrounds, hero text, button text                 |
| `--color-team-bg`    | `#f2f4f5` | Team section background                                   |

### Service Card Colors

| Card           | Background |
| -------------- | ---------- |
| Weight Lifting | `#9d69d8`  |
| Body Building  | `#62b3d3`  |
| Healthy        | `#5acd57`  |
| Yoga           | `#ed5e4c`  |

### Buttons

The template uses a **flat, uppercase** button style: no border-radius, solid primary background, white text, Oswald font, letter-spacing 2px, uppercase transform. The `.primary-btn` class: `padding: 12px 39px`, `background: #f34e3a`, `color: #fff`.

### Section Spacing

- `.spad` = `padding-top: 100px; padding-bottom: 100px`
- Section title has a 3px wide, 29px tall red left bar via `::before` pseudo-element

## Requirements

### Requirement: Page renders all sections in order

The template SHALL display all sections in the following order: Header, Hero, Services, CTA, ClassSection, TrainerSchedule, Team, LatestNews, Footer.

#### Scenario: All sections visible on load

- **WHEN** the user visits the RepForge template
- **THEN** all 9 sections are rendered in the page
- **AND** the page title is "RepForge — Gym & Fitness Landing"

#### Scenario: Section order is correct

- **WHEN** the user views the rendered page
- **THEN** Header appears first (top of page)
- **AND** Hero appears after Header
- **AND** Services appears after Hero
- **AND** CTA appears after Services
- **AND** ClassSection appears after CTA
- **AND** TrainerSchedule appears after ClassSection
- **AND** Team appears after TrainerSchedule
- **AND** LatestNews appears after Team
- **AND** Footer appears last (bottom of page)

### Requirement: Header navigation

The header SHALL be sticky with a logo, horizontal navigation links, and a search icon.

#### Scenario: Desktop navigation links

- **WHEN** the user views the page on desktop
- **THEN** the nav contains links for Home, About, Schedule, Portfolio, Blog, and Contact
- **AND** a search icon is visible in the header right area

#### Scenario: Mobile hamburger toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation becomes visible
- **AND** the button `aria-expanded` attribute toggles to true

### Requirement: Hero carousel section

The hero section SHALL display an Owl-carousel-style slider with 3 slides, each containing a background image, subtitle text, a main headline, and a CTA button.

#### Scenario: Three hero slides render

- **WHEN** the user views the hero section
- **THEN** 3 slides are present in the carousel
- **AND** each slide has a background image (gym/fitness imagery)
- **AND** each slide shows "Elite Personal Training Services" as the subtitle
- **AND** each slide shows "Make it Shape" as the headline
- **AND** each slide has a "Join Us Now" CTA button

#### Scenario: Hero carousel auto-advances

- **WHEN** the user remains on the hero section
- **THEN** the carousel auto-advances through the 3 slides

### Requirement: Services section

The services section SHALL display a title ("Our Program"), a description, a 2x2 grid of service cards with icons, and a video preview with a play button.

#### Scenario: Four service cards render

- **WHEN** the user views the services section
- **THEN** exactly 4 service cards are displayed in a 2-column grid
- **AND** each card has a unique colored background (purple, blue, green, coral)
- **AND** each card has an icon, a title, and a description

#### Scenario: Service card titles

- **WHEN** the user views the services section
- **THEN** the service cards are titled: Weight Lifting, Body Building, Healthy, Yoga

#### Scenario: Video preview with play button

- **WHEN** the user views the services section
- **THEN** a video preview image is shown in a 5-column offset layout
- **AND** a circular play button is centered on the video preview

### Requirement: CTA parallax section

The CTA section SHALL display a headline, subtitle, and join button over a parallax background image.

#### Scenario: CTA content renders

- **WHEN** the user views the CTA section
- **THEN** a headline "Start your Journey with our exciting offers" is visible
- **AND** a subtitle description is visible below the headline
- **AND** a "Join With Us" primary button is visible
- **AND** the background is a full-width parallax image

### Requirement: Class section with tabs

The class section SHALL display a title ("Our Class"), a description, a "View All Schedule" button, and tabbed content showing class details.

#### Scenario: Tab navigation renders

- **WHEN** the user views the class section
- **THEN** 5 tabs are present: Body Building, Racing Running, Yoga Fitness, Kick Boxing, Cardio Workout

#### Scenario: Active tab shows class detail

- **WHEN** the Body Building tab is active by default
- **THEN** a class image is displayed on the left
- **AND** a class description and "View Schedule" link are displayed on the right

#### Scenario: Tab switching

- **WHEN** the user clicks a different class tab
- **THEN** the corresponding class content is shown
- **AND** the previously visible content is hidden

### Requirement: Trainer schedule table

The trainer schedule section SHALL display a weekly timetable on a parallax background.

#### Scenario: Schedule table renders

- **WHEN** the user views the trainer schedule section
- **THEN** a table with columns for Monday through Sunday is visible
- **AND** rows show time slots (10.00, 14.00, 16.00, 18.00)
- **AND** each cell shows a workout type, time range, and trainer name

#### Scenario: Section background

- **WHEN** the user views the trainer schedule section
- **THEN** the section has a dark parallax background image
- **AND** the section title "Our Trainer" is rendered in white

### Requirement: Team section

The team section SHALL display 3 trainer profiles in an alternating photo-text layout.

#### Scenario: Three trainer cards render

- **WHEN** the user views the team section
- **THEN** exactly 3 trainer profiles are displayed
- **AND** each profile has a photo, specialization tag, name, description, and social media icons (Facebook, Twitter, Pinterest, Vimeo)

#### Scenario: Alternating layout

- **WHEN** the user views the team section
- **THEN** the first trainer shows photo-text-photo layout
- **AND** subsequent trainers alternate the photo-text arrangement

### Requirement: Latest news section

The latest news section SHALL display 3 blog post cards with images, dates, and comment counts.

#### Scenario: Three news cards render

- **WHEN** the user views the latest news section
- **THEN** exactly 3 blog post cards are displayed
- **AND** each card has a thumbnail image, a date, a comment count, and a title link

#### Scenario: Section title

- **WHEN** the user views the latest news section
- **THEN** the section title "Latest News" is displayed with a subtitle

### Requirement: Footer

The footer SHALL contain a split layout with a Google Map on the left and a contact form on the right, plus a copyright bar at the bottom.

#### Scenario: Map and form layout

- **WHEN** the user views the footer
- **THEN** a Google Maps embed is shown on the left half
- **AND** a contact form with Name, Email, Subject, Message, and Submit button is shown on the right half
- **AND** the contact form section has a parallax background image

#### Scenario: Contact form fields

- **WHEN** the user views the contact form
- **THEN** input fields for Name, Email, Subject, and a textarea for Message are visible
- **AND** a "Submit" button with an arrow icon is present

#### Scenario: Copyright bar

- **WHEN** the user views the bottom of the footer
- **THEN** a copyright line with "Made with Component Dock" link is visible
- **AND** footer widget links (Privacy Policy, Terms Of Service, Careers) are visible
- **AND** social media icons (Facebook, Twitter, Instagram) are visible

### Requirement: Component Dock attribution

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer attribution

- **WHEN** the user views the footer
- **THEN** a link to "https://www.componentdock.com/" is visible
- **AND** the link text reads "Component Dock"

## Verification Checklist

- [ ] All 9 sections render in correct order
- [ ] Header is sticky with nav links and search icon
- [ ] Hero carousel shows 3 slides with auto-advance
- [ ] Services section shows 4 colored cards + video preview
- [ ] CTA section has parallax background and join button
- [ ] Class section has 5 tabs with switchable content
- [ ] Trainer schedule table renders weekly grid on parallax bg
- [ ] Team section shows 3 trainer profiles with social links
- [ ] Latest news shows 3 blog cards with dates and comments
- [ ] Footer has map + contact form split layout
- [ ] Footer copyright includes Component Dock attribution
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] `packages/ui` components reused where applicable
- [ ] 100% test coverage (lines/functions/branches/statements)
- [ ] Fonts loaded via Google Fonts (Oswald + Roboto)
- [ ] Brand color `#f34e3a` used consistently for CTAs/accents
