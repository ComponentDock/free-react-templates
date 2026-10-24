# Template: LearnBase (Education / Online Learning)
<!-- prep-status: shipped-as=learnpath -->
> **SHIPPED-UNDER** — the ColorLib `ezuca` design this prep describes already
> ships as `apps/learnpath` (<https://learnpath.free.componentdock.com>).
> Do not scaffold `apps/learnbase`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-learnpath/spec.md`.

## Purpose

Recreation of ColorLib's **Ezuca** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template:** Ezuca
- **ColorLib URL:** https://colorlib.com/wp/template/ezuca/
- **Live preview:** https://preview.colorlib.com/theme/ezuca/
- **New app name:** `learnbase`
- **Package:** `@free-react-templates/learnbase`
- **Source design:** ColorLib "Ezuca" — https://colorlib.com/wp/template/ezuca/

## Design tokens

| Token | Value |
| --- | --- |
| Brand primary | `#19c880` (green) |
| Brand secondary | `#f3a90b` (golden yellow) |
| Accent green | `#34d986` (light green) |
| Text dark | `#383749` |
| Text muted | `#757686` / `#c0c1cd` |
| Background light | `#f7f7f7` / `#f3f3f3` |
| Font | `"Roboto", sans-serif` |
| Button radius | `10px` (slightly rounded) |
| Card radius | `2px` |
| Avatar radius | `50%` (circular) |

## Section structure

1. **Top Bar** — email + Register/Login links, dark/gray bg
2. **Navbar** — Logo ("Ezuca"), nav (Home, About, Courses, Blog, Contact), search icon
3. **Hero Slider** — Swiper slider, centered text, background images, "read more" CTA. Heading: "best onlineLearning system"
4. **Features Row** — 5 feature items (Learn From The Experts, Book Library & Store, Best Course Online, Best Industry Leaders, +1) with icons, read more links
5. **Featured Courses Horizontal** — 2 course cards in row, each with image, title, author, ratings, date, cost
6. **About Section** — instructor profiles (3 people with universities)
7. **Testimonials** — Swiper carousel of testimonial slides
8. **Featured Courses Vertical** — Category tabs (All, Business, Design, Web Dev, Photography) + course card grid
9. **Latest News & Events** — news/event cards
10. **Home Gallery** — image gallery grid
11. **Footer** — columns with links, newsletter, social, Component Dock

## Requirements

### Feature: LearnBase template behaviour

Feature: LearnBase Navigation

#### Scenario: Navbar shows logo and links

- **GIVEN** the user visits the LearnBase homepage
- **THEN** the navbar has logo "LearnBase" and links: Home, About, Courses, Blog, Contact

Feature: LearnBase Hero Slider

#### Scenario: Hero has multiple slides with CTAs

- **GIVEN** the user visits the homepage
- **THEN** a slider shows headings and "read more" buttons

Feature: LearnBase Features

#### Scenario: Five feature items displayed

- **GIVEN** the user scrolls past the hero
- **THEN** 5 feature items with icons and "read more" links appear

Feature: LearnBase Featured Courses (Horizontal)

#### Scenario: Two featured courses shown

- **GIVEN** the user scrolls to featured courses
- **THEN** 2 course cards display with title, author, ratings, and cost

Feature: LearnBase About

#### Scenario: Instructor profiles displayed

- **GIVEN** the user scrolls to the about section
- **THEN** 3 instructor profiles with names and universities are shown

Feature: LearnBase Testimonials

#### Scenario: Testimonial slider works

- **GIVEN** the user scrolls to testimonials
- **THEN** a carousel of testimonial slides is displayed

Feature: LearnBase Featured Courses (Vertical)

#### Scenario: Category tabs filter courses

- **GIVEN** the user views the vertical courses section
- **WHEN** the user clicks "Design" tab
- **THEN** only design courses are shown

Feature: LearnBase News

#### Scenario: News and events displayed

- **GIVEN** the user scrolls to latest news
- **THEN** news/event cards are shown

Feature: LearnBase Gallery

#### Scenario: Image gallery grid

- **GIVEN** the user scrolls to the gallery
- **THEN** a grid of images is displayed

Feature: LearnBase Footer

#### Scenario: Footer links to Component Dock

- **GIVEN** the user scrolls to the footer
- **THEN** a link to "https://www.componentdock.com/" branded "Component Dock" exists

## Verification checklist

- [ ] Brand color `#19c880` (green) used for buttons/accents
- [ ] Secondary `#f3a90b` (gold) for highlights/prices
- [ ] Roboto font throughout
- [ ] 10px rounded buttons
- [ ] Hero slider with background images
- [ ] 5 feature items in a row
- [ ] Horizontal + Vertical featured courses sections
- [ ] About section with 3 instructor profiles
- [ ] Testimonial Swiper carousel
- [ ] Category tab filtering on vertical courses
- [ ] News & Events section
- [ ] Gallery grid
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
