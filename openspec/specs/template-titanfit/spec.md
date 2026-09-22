# Spec: TitanFit

## Purpose

TitanFit is a free React gym/fitness landing page template. It recreates the ColorLib "Ironmuscle" design with a top info bar, sticky red navbar with dropdown, hero image slider, four-column feature blocks, about section, featured classes carousel, weekly schedule with tabs, testimonials carousel, trainer grid with hover overlays, and a multi-column footer. Built with React 19, Tailwind CSS 4, and TypeScript.

## Origin

- **Source:** ColorLib Ironmuscle — https://colorlib.com/wp/template/ironmuscle/
- **Preview:** https://preview.colorlib.com/theme/ironmuscle/
- **Recreation name:** TitanFit (different from the source name per project rules)

## Design Tokens

### Fonts

| Token            | Family           | Usage                                        |
| ---------------- | ---------------- | -------------------------------------------- |
| `--font-body`    | **Nunito Sans**  | Body copy, navigation, buttons, all UI text  |

Nunito Sans loaded via Google Fonts (weights 300, 400, 700). The source also references Roboto Mono in its font stack but does not actually use it visually — skip Roboto Mono.

### Colors

| Token                | Value     | Usage                                             |
| -------------------- | --------- | ------------------------------------------------- |
| `--color-primary`    | `#f23a2e` | Red — navbar background, buttons, accents, focus  |
| `--color-black`      | `#000000` | Headings, bold text, text-black utility           |
| `--color-white`      | `#FFFFFF` | Card surfaces, navbar text, light backgrounds     |
| `--color-text`       | `#4d4d4d` | Default body text                                 |
| `--color-text-dark`  | `#25262a` | Section headings, strong emphasis                 |
| `--color-bg-light`   | `#f8f9fa` | Alternating section backgrounds (`.bg-light`)     |
| `--color-border`     | `#edf0f5` | Dropdown borders                                  |
| `--color-overlay`    | `rgba(0,0,0,0.4)` | Hero/schedule background overlay           |

### Buttons

- **Primary:** Red (`#f23a2e`) background, white text, `.pill` class = `border-radius: 30px`. Padding horizontal `px-4`. Hover adds `box-shadow: 0 5px 20px -7px rgba(0,0,0,0.9)`.
- No secondary/outlined button variant observed in the source.

### Layout

- `.site-section` padding: `3em 0` mobile, `7em 0` desktop (≥768px)
- `.site-footer` padding: `4em 0`
- Container: Bootstrap-style `.container` (centered, max-width responsive)
- Feature blocks: 4-column grid (`col-lg-3`), alternating `bg-light` on columns 1 and 3
- Trainer grid: 3-column (`col-lg-4`), hover overlay with social icons
- Schedule: tabbed (Sunday–Friday), rows with 4 columns (class, time, instructor, join button)

### Images

- Hero: background images with parallax (`data-stellar-background-ratio="0.5"`) and dark overlay (`rgba(0,0,0,0.4)`)
- About: single right-aligned image
- Featured classes: card images
- Testimonials: circular person photos (`rounded-circle`)
- Trainers: full-width images with hover overlay
- All images replaced with `https://picsum.photos/seed/titanfit-<n>/<w>/<h>` placeholders

## Requirements

### Requirement: Page renders all sections in order

The template SHALL display all sections in the following order: TopBar, Navbar, HeroSlider, FeatureBlocks, About, FeaturedClasses, Schedule, Testimonials, Trainers, Footer.

#### Scenario: All sections visible on load

- **WHEN** the user visits the TitanFit template
- **THEN** all 10 sections are rendered in the page
- **AND** the page title is "TitanFit — Gym & Fitness Landing Template"

#### Scenario: Section order is correct

- **WHEN** the user views the rendered page
- **THEN** TopBar appears first (top of page)
- **AND** Navbar appears after TopBar
- **AND** HeroSlider appears after Navbar
- **AND** FeatureBlocks appears after HeroSlider
- **AND** About appears after FeatureBlocks
- **AND** FeaturedClasses appears after About
- **AND** Schedule appears after FeaturedClasses
- **AND** Testimonials appears after Schedule
- **AND** Trainers appears after Testimonials
- **AND** Footer appears last (bottom of page)

### Requirement: Top bar

The top bar SHALL display social media icons and contact information.

#### Scenario: Desktop top bar content

- **WHEN** the user views the top bar on desktop
- **THEN** social icons for Twitter, Facebook, LinkedIn, and Instagram are visible on the left
- **AND** an email address is visible on the right
- **AND** a phone number is visible on the right

#### Scenario: Mobile top bar

- **WHEN** the user views the top bar on mobile
- **THEN** the social icons are visible
- **AND** the email/phone text is hidden (responsive `d-none d-md-inline-block`)

### Requirement: Navbar

The navbar SHALL be a sticky red bar with a logo and horizontal navigation links.

#### Scenario: Desktop navigation

- **WHEN** the user views the navbar on desktop
- **THEN** the logo text reads "TitanFit" (with "Fit" bold)
- **AND** navigation links include: Home, Classes (with dropdown), Services, About, Contact

#### Scenario: Classes dropdown

- **WHEN** the user hovers over the "Classes" navigation item
- **THEN** a dropdown menu appears with options: Running, Yoga, Boxing, Weight Lifting

#### Scenario: Mobile hamburger menu

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation becomes visible
- **AND** the button aria-expanded attribute toggles

### Requirement: Hero slider

The hero section SHALL display a carousel with background images and centered headlines.

#### Scenario: Hero slides visible

- **WHEN** the user views the hero section
- **THEN** a carousel with at least 2 slides is displayed
- **AND** each slide has a background image with dark overlay
- **AND** each slide has centered white text headline

#### Scenario: Hero auto-rotation

- **WHEN** the user waits on the hero section
- **THEN** the slides auto-rotate after a few seconds

### Requirement: Feature blocks

Four feature blocks SHALL display in a row with icons, titles, and descriptions.

#### Scenario: Feature blocks visible

- **WHEN** the user scrolls to the feature blocks section
- **THEN** four blocks are displayed: Yoga, Weight Lifting, Boxing, Running
- **AND** each block has an icon, title, and short description
- **AND** blocks alternate between white and light gray backgrounds

### Requirement: About section

The about section SHALL display a heading, descriptive text, bullet list, and an image.

#### Scenario: About content

- **WHEN** the user views the about section
- **THEN** the heading reads "All About Our Gym"
- **AND** descriptive paragraphs are present
- **AND** a bullet list with 4+ items is shown
- **AND** a "Read More" pill button is visible
- **AND** an image appears to the right of the text

### Requirement: Featured classes carousel

The featured classes section SHALL display a carousel of class cards.

#### Scenario: Featured class cards

- **WHEN** the user views the featured classes section
- **THEN** class cards are displayed in a carousel
- **AND** each card shows a class image, title, description, and instructor name
- **AND** the section has a light gray background

### Requirement: Weekly schedule

The schedule section SHALL display a tabbed weekly timetable.

#### Scenario: Schedule tabs

- **WHEN** the user views the schedule section
- **THEN** day-of-week tabs are visible (Sunday through Friday)
- **AND** the section has a background image with dark overlay
- **AND** the heading reads "Schedule"

#### Scenario: Schedule content per day

- **WHEN** the user clicks a day tab
- **THEN** class rows are shown with: class name, time, instructor, and "Join Now" button
- **AND** each "Join Now" button is a red pill button

### Requirement: Testimonials

The testimonials section SHALL display a carousel of testimonial cards.

#### Scenario: Testimonial cards

- **WHEN** the user views the testimonials section
- **THEN** testimonial cards are displayed in a carousel
- **AND** each card shows a circular person photo, name/title, and a quote

### Requirement: Trainers grid

The trainers section SHALL display a grid of trainer cards with hover overlays.

#### Scenario: Trainer cards

- **WHEN** the user views the trainers section
- **THEN** 6 trainer cards are displayed in a 3-column grid
- **AND** each card shows a trainer photo
- **AND** on hover, an overlay appears with name, description, and social icons (Facebook, Twitter, Instagram)

### Requirement: Footer

The footer SHALL display About text, Quick Menu links, Contact Info, and Social Icons.

#### Scenario: Footer columns

- **WHEN** the user scrolls to the footer
- **THEN** an "About" column with description and "Read More" button is visible
- **AND** a "Quick Menu" column with navigation links is visible
- **AND** a "Contact Info" column with address and phone is visible
- **AND** a "Social Icons" row with Facebook, Twitter, Instagram, Vimeo icons is visible

#### Scenario: Component Dock attribution

- **WHEN** the user views the footer bottom
- **THEN** a "Made with Component Dock" link is present
- **AND** the link points to https://www.componentdock.com/

### Requirement: Accessibility

#### Scenario: Semantic landmarks

- **WHEN** the page is rendered
- **THEN** the navbar uses `<nav>` landmark
- **AND** the main content area uses `<main>` landmark
- **AND** the footer uses `<footer>` landmark
- **AND** all images have alt text

#### Scenario: Keyboard navigation

- **WHEN** the user navigates with keyboard
- **THEN** all interactive elements are focusable
- **AND** focus-visible rings are displayed on focused elements

### Requirement: Responsive design

#### Scenario: Mobile layout

- **WHEN** the user views the page on a mobile device (≤768px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** feature blocks stack vertically
- **AND** the about section stacks text above image
- **AND** trainer cards stack in a single column
- **AND** footer columns stack vertically

## Verification checklist

- [ ] All 10 sections render in correct order
- [ ] Top bar shows social icons and contact info
- [ ] Navbar is sticky, red (#f23a2e), with logo and nav links
- [ ] Classes dropdown opens on hover (desktop)
- [ ] Hero carousel auto-rotates with background images and overlay
- [ ] Feature blocks alternate white/light-gray backgrounds
- [ ] About section has heading, text, bullets, image, and pill button
- [ ] Featured classes carousel shows cards with instructor info
- [ ] Schedule tabs switch between days with class rows
- [ ] Testimonials carousel shows circular photos and quotes
- [ ] Trainers grid shows 6 cards with hover overlay
- [ ] Footer has About, Quick Menu, Contact, Social sections
- [ ] Footer links to Component Dock
- [ ] Responsive: hamburger menu, stacked layouts on mobile
- [ ] Accessibility: landmarks, alt text, keyboard focusable
- [ ] Design tokens: #f23a2e primary, Nunito Sans font, pill buttons
- [ ] No ColorLib references in app code
