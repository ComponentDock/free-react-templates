# Template: Peewee (Education / Kids School)
<!-- prep-status: shipped-as=tinybrights -->
> **SHIPPED-UNDER** — the ColorLib `kiddos` design this prep describes already
> ships as `apps/tinybrights` (<https://tinybrights.free.componentdock.com>).
> Do not scaffold `apps/peewee`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-tinybrights/spec.md`.

## Purpose

Recreation of ColorLib's **Kiddos** template — a kids' learning school website.

- **Source slug:** `kiddos`
- **ColorLib page:** https://colorlib.com/wp/template/kiddos/
- **Preview URL:** https://preview.colorlib.com/theme/kiddos/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/kiddos-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview CSS)

| Token             | Value                                |
| ----------------- | ------------------------------------ |
| Primary color     | `#1eaaf1` (sky blue)                 |
| Secondary color   | `#fda638` (warm orange)              |
| Tertiary color    | `#5d50c6` (purple)                   |
| Quarternary color | `#8cc152` (green)                    |
| Accent red        | `#f1453d` (hero banner bg)           |
| Dark footer bg    | `#3c312e` (dark brown)               |
| Body font         | `"Work Sans", Arial, sans-serif`     |
| Button radius     | `0.375rem` (6px)                     |
| Button radius-lg  | `0.5rem` (8px)                       |
| Light bg          | `#f8f9fa`                            |
| Body text         | `#212529`                            |

## Section structure (order from preview)

1. **Navbar** — top bar with address/email/phone, then main nav: Home, About, Teacher, Courses, Pricing, Blog, Contact. Brand logo "Kiddos".
2. **Hero Slider** — full-width swiper with headline "Kids Are The Best" / "Perfect Learned", CTA buttons, background image.
3. **Services Row** — 4-column cards: Certified Teachers, Special Education, Book & Library, Certification. Each with icon, title, description.
4. **About** — 2-column: image left, text right. "Welcome to Kiddos Learning School" heading + two paragraphs.
5. **What We Offer** — 6-item grid: Safety First, Regular Classes, Certified Teachers, Sufficient Classrooms, Creative Lessons, Sports Facilities. Each with icon + title + description.
6. **Testimonials** — "Teaching Your Child Some Good Manners" heading, teacher profiles carousel: Bianca Wilson (Teacher), Mitch Parker (English Teacher), Stella Smith (Art Teacher), Monshe Henderson (Science Teacher). Each with photo, name, role, quote.
7. **Counter/Stats** — parallax background image with animated counters.
8. **Gallery** — image grid with lightbox.
9. **CTA / Consult** — "Our Class time" section with background image, class schedule info.
10. **Footer** — dark (`#3c312e`) with 3 columns: contact info, Recent Blog posts, Links. Social icons row at bottom.

## Requirements

### Navbar

#### Scenario: Navbar displays brand and navigation links

- **GIVEN** the user visits the homepage
- **THEN** the navbar shows the "Peewee" brand name
- **AND** the nav links are: Home, About, Teacher, Courses, Pricing, Blog, Contact
- **AND** the top bar shows address, email, and phone

#### Scenario: Navbar is responsive on mobile

- **GIVEN** the user views the page on a 375px viewport
- **THEN** the nav collapses into a hamburger menu
- **AND** tapping the hamburger reveals the nav links

### Hero Slider

#### Scenario: Hero section displays headline and CTA

- **GIVEN** the user visits the homepage
- **THEN** the hero shows the headline "Kids Are The Best"
- **AND** a CTA button is visible

#### Scenario: Hero auto-advances slides

- **GIVEN** the user stays on the page for 5 seconds
- **THEN** the hero slide advances automatically

### Services Row

#### Scenario: Services row shows 4 items

- **GIVEN** the user scrolls to the services section
- **THEN** 4 service cards are displayed
- **AND** each card has an icon, title, and description

#### Scenario: Services row has colored backgrounds

- **GIVEN** the user views the services section
- **THEN** each card has a distinct color accent (blue, orange, purple, green)

### About

#### Scenario: About section has 2-column layout

- **GIVEN** the user scrolls to the about section
- **THEN** the heading reads "Welcome to Peewee Learning School"
- **AND** an image occupies the left column
- **AND** descriptive text occupies the right column

### What We Offer

#### Scenario: Offerings grid shows 6 items

- **GIVEN** the user scrolls to the offerings section
- **THEN** 6 offering cards are displayed in a grid
- **AND** each card has an icon, title, and short description

### Testimonials

#### Scenario: Testimonials show teacher profiles

- **GIVEN** the user scrolls to the testimonials section
- **THEN** at least 4 teacher profiles are shown
- **AND** each profile has a photo, name, role, and quote

#### Scenario: Testimonials are in a carousel

- **GIVEN** the user views the testimonials section
- **THEN** the profiles rotate in a carousel/slider

### Counter / Stats

#### Scenario: Counter section shows animated numbers

- **GIVEN** the user scrolls to the counter section
- **THEN** at least 3 stat counters are displayed
- **AND** the counters animate on scroll into view
- **AND** a parallax background image is behind the counters

### Gallery

#### Scenario: Gallery displays image grid

- **GIVEN** the user scrolls to the gallery section
- **THEN** a grid of images is displayed
- **AND** clicking an image opens a lightbox view

### CTA / Consult

#### Scenario: CTA section shows class info

- **GIVEN** the user scrolls to the CTA section
- **THEN** the heading reads "Our Class time"
- **AND** a background image is displayed
- **AND** class schedule or enrollment info is shown

### Footer

#### Scenario: Footer has dark background and columns

- **GIVEN** the user scrolls to the footer
- **THEN** the footer background is dark brown (#3c312e)
- **AND** 3 columns are visible: contact info, recent blog, links
- **AND** social media icons are shown at the bottom
- **AND** a "Component Dock" link is present

#### Scenario: Footer links are clickable

- **GIVEN** the user clicks a footer navigation link
- **THEN** the page navigates to the corresponding section

## Verification checklist

- [ ] All sections match the original order: Navbar → Hero → Services → About → Offerings → Testimonials → Counter → Gallery → CTA → Footer
- [ ] Brand color `#1eaaf1` (blue) is used for primary buttons and accents
- [ ] Secondary color `#fda638` (orange) used for secondary buttons
- [ ] Font is Work Sans loaded from Google Fonts
- [ ] Button border-radius is `0.375rem`
- [ ] Hero has a swiper/carousel with auto-advance
- [ ] Services row has 4 items with colored left borders
- [ ] About section is 2-column with image + text
- [ ] Offerings grid has 6 items with icons
- [ ] Testimonials carousel with teacher profiles
- [ ] Counter section has parallax background + animated numbers
- [ ] Gallery has lightbox functionality
- [ ] CTA section has parallax background
- [ ] Footer is dark (`#3c312e`) with 3 columns + social icons
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code
- [ ] Placeholder images use `https://picsum.photos/seed/peewee-<n>/<w>/<h>`
- [ ] Tests pass at 100% coverage
