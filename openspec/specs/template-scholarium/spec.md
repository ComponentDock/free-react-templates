# Template: Scholarium (Education / E-Learning)
<!-- prep-status: shipped-as=uniwell -->
> **SHIPPED-UNDER** — the ColorLib `unicat` design this prep describes already
> ships as `apps/uniwell` (<https://uniwell.free.componentdock.com>).
> Do not scaffold `apps/scholarium`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-uniwell/spec.md`.

## Purpose

Recreation of ColorLib **Unicat** — a multi-section e-learning / university
landing template. The React version lives in `apps/scholarium`.

- **ColorLib source**: https://colorlib.com/wp/template/unicat/
- **Live preview**: https://preview.colorlib.com/theme/unicat/
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Design language**: Professional education — clean white backgrounds,
  cyan-blue accents, Roboto + Roboto Slab typography, Bootstrap-style
  4-column grid, parallax image sections.

## Design tokens

Extracted from the preview's `styles/main_styles.css`.

| Token            | Value                                | Notes                               |
| ---------------- | ------------------------------------ | ----------------------------------- |
| Brand primary    | `#14bdee`                            | Cyan-blue — buttons, active nav, links, accents |
| Dark heading     | `#384158`                            | Section titles, course titles       |
| Body text        | `#76777a`                            | Subtitles, descriptions             |
| Light text       | `#a5a5a5`                            | Top bar, secondary info             |
| White            | `#FFFFFF`                            | Page background, card backgrounds   |
| Light gray bg    | `#f3f3f3`                            | Feature section alternate bg        |
| Dark bg          | `#232323`                            | Top bar, footer background          |
| Brown accent     | `#937c6f`                            | Footer area accent                  |
| Font — body      | `'Roboto', sans-serif`               | All body text                       |
| Font — heading   | `'Roboto Slab', serif`               | Section titles, headings            |
| Border radius    | `3px`                                | Buttons, inputs                     |
| Button bg        | `#14bdee`                            | Primary CTA buttons                 |
| Button text      | `#FFFFFF`                            |                                     |

## Sections (HTML order)

1. **Header** — Top bar (phone, email, register/login) + main nav (Home, About, Courses, Blog, Page, Contact, search, cart icons)
2. **Hero Slider** — Full-width image carousel (3 slides), centered text overlay ("The Premium System Education" / "Future Of Education Technology"), inline search form with keyword input + category dropdown + price dropdown + SEARCH button
3. **Features** — "Welcome To Unicat E-Learning" heading + 4-column icon grid (The Experts, Book & Library, Best Courses, Award & Reward) with icon image + title + description
4. **Popular Courses** — Parallax background, "Popular Online Courses" heading, 3 course cards (image + title + teacher + description + footer with student count, rating, price)
5. **Counter / Registration** — Parallax background, left side: "Register Now" title + description + 4 animated milestones (15 years, 120k, 670+, 320), right side: registration form (name, phone, subject dropdown, message, submit button)
6. **Events** — "Upcoming events" heading, 3 event cards (image, date badge with day/month, title, time, location, description text)
7. **Team** — Parallax background, "The Best Tutors in Town" heading, 4 tutor cards (image, name, specialty, social icons)
8. **Latest News** — "Latest News" heading, 7/5 grid: 1 large featured post (image + title + meta + excerpt + read more) + 4 small posts (title + meta only)
9. **Newsletter** — Parallax background, "sign up for news and offers" + subtitle + email input + subscribe button
10. **Footer** — Dark background, 4 columns: About (logo + text + social), Contact (email, phone, address), Links (Home, About, Contact, Features, Courses, Events, Gallery, FAQs), Mobile (app store images). Copyright bar at bottom.

## Requirements

### Hero Slider

Feature: Hero Slider

#### Scenario: Displays search form with keyword input, category dropdown, price dropdown, and search button

- **GIVEN** the recreation is rendered
- **THEN** the Displays search form with keyword input, category dropdown, price dropdown, and search button behaves as described by the fidelity notes

#### Scenario: Search button is styled with brand primary color (#14bdee) and white text

- **GIVEN** the recreation is rendered
- **THEN** the Search button is styled with brand primary color (#14bdee) and white text behaves as described by the fidelity notes

#### Scenario: Hero section has a full-width background image overlay

- **GIVEN** the recreation is rendered
- **THEN** the Hero section has a full-width background image overlay behaves as described by the fidelity notes

#### Scenario: Navigation arrows are visible for carousel navigation

- **GIVEN** the recreation is rendered
- **THEN** the Navigation arrows are visible for carousel navigation behaves as described by the fidelity notes

### Features

Feature: Features Section

#### Scenario: Section title "Welcome To Unicat E-Learning" is centered

- **GIVEN** the recreation is rendered
- **THEN** the Section title "Welcome To Unicat E-Learning" is centered behaves as described by the fidelity notes

#### Scenario: 4 feature cards are displayed in a row (desktop) with icon, title, and description

- **GIVEN** the recreation is rendered
- **THEN** the 4 feature cards are displayed in a row (desktop) with icon, title, and description behaves as described by the fidelity notes

#### Scenario: Each feature card is centered with consistent spacing

- **GIVEN** the recreation is rendered
- **THEN** the Each feature card is centered with consistent spacing behaves as described by the fidelity notes

### Popular Courses

Feature: Popular Courses

#### Scenario: Section has a parallax background image

- **GIVEN** the recreation is rendered
- **THEN** the Section has a parallax background image behaves as described by the fidelity notes

#### Scenario: 3 course cards displayed in a 3-column grid

- **GIVEN** the recreation is rendered
- **THEN** the 3 course cards displayed in a 3-column grid behaves as described by the fidelity notes

#### Scenario: Each course card has an image, title, teacher name, description, and footer

- **GIVEN** the recreation is rendered
- **THEN** the Each course card has an image, title, teacher name, description, and footer behaves as described by the fidelity notes

#### Scenario: Course footer shows student count, rating, and price

- **GIVEN** the recreation is rendered
- **THEN** the Course footer shows student count, rating, and price behaves as described by the fidelity notes

#### Scenario: Price displays as plain text or with strikethrough for discounted

- **GIVEN** the recreation is rendered
- **THEN** the Price displays as plain text or with strikethrough for discounted behaves as described by the fidelity notes

### Counter / Registration

Feature: Counter Registration Section

#### Scenario: Left side shows "Register Now" heading, description, and 4 milestone counters

- **GIVEN** the recreation is rendered
- **THEN** the Left side shows "Register Now" heading, description, and 4 milestone counters behaves as described by the fidelity notes

#### Scenario: Milestones display numbers with labels (years, k, +)

- **GIVEN** the recreation is rendered
- **THEN** the Milestones display numbers with labels (years, k, +) behaves as described by the fidelity notes

#### Scenario: Right side shows a registration form with name, phone, subject select, message, and submit

- **GIVEN** the recreation is rendered
- **THEN** the Right side shows a registration form with name, phone, subject select, message, and submit behaves as described by the fidelity notes

#### Scenario: Section has a parallax background image

- **GIVEN** the recreation is rendered
- **THEN** the Section has a parallax background image behaves as described by the fidelity notes

### Events

Feature: Events Section

#### Scenario: 3 event cards in a 3-column grid

- **GIVEN** the recreation is rendered
- **THEN** the 3 event cards in a 3-column grid behaves as described by the fidelity notes

#### Scenario: Each event has an image, date badge (day + month), title, time, location, and description

- **GIVEN** the recreation is rendered
- **THEN** the Each event has an image, date badge (day + month), title, time, location, and description behaves as described by the fidelity notes

#### Scenario: Date badge is styled with accent color

- **GIVEN** the recreation is rendered
- **THEN** the Date badge is styled with accent color behaves as described by the fidelity notes

### Team

Feature: Team Section

#### Scenario: Section has a parallax background image

- **GIVEN** the recreation is rendered
- **THEN** the Section has a parallax background image behaves as described by the fidelity notes

#### Scenario: 4 tutor cards in a 4-column grid (2-column on tablet)

- **GIVEN** the recreation is rendered
- **THEN** the 4 tutor cards in a 4-column grid (2-column on tablet) behaves as described by the fidelity notes

#### Scenario: Each card has an image, name, specialty, and social media icons

- **GIVEN** the recreation is rendered
- **THEN** the Each card has an image, name, specialty, and social media icons behaves as described by the fidelity notes

### Latest News

Feature: Latest News

#### Scenario: 1 large featured post on the left (image + title + meta + excerpt + "read more" link)

- **GIVEN** the recreation is rendered
- **THEN** the 1 large featured post on the left (image + title + meta + excerpt + "read more" link) behaves as described by the fidelity notes

#### Scenario: 4 small posts on the right (title + meta only, stacked vertically)

- **GIVEN** the recreation is rendered
- **THEN** the 4 small posts on the right (title + meta only, stacked vertically) behaves as described by the fidelity notes

#### Scenario: Total of 5 news items visible

- **GIVEN** the recreation is rendered
- **THEN** the Total of 5 news items visible behaves as described by the fidelity notes

### Newsletter

Feature: Newsletter

#### Scenario: Section has a parallax background image

- **GIVEN** the recreation is rendered
- **THEN** the Section has a parallax background image behaves as described by the fidelity notes

#### Scenario: Title "sign up for news and offers" and subtitle displayed

- **GIVEN** the recreation is rendered
- **THEN** the Title "sign up for news and offers" and subtitle displayed behaves as described by the fidelity notes

#### Scenario: Email input and subscribe button in a horizontal form

- **GIVEN** the recreation is rendered
- **THEN** the Email input and subscribe button in a horizontal form behaves as described by the fidelity notes

#### Scenario: Subscribe button uses brand primary color

- **GIVEN** the recreation is rendered
- **THEN** the Subscribe button uses brand primary color behaves as described by the fidelity notes

### Footer

Feature: Footer

#### Scenario: 4-column layout: About, Contact, Links, Mobile

- **GIVEN** the recreation is rendered
- **THEN** the 4-column layout: About, Contact, Links, Mobile behaves as described by the fidelity notes

#### Scenario: About column has logo, description text, and social icons

- **GIVEN** the recreation is rendered
- **THEN** the About column has logo, description text, and social icons behaves as described by the fidelity notes

#### Scenario: Contact column shows email, phone, address

- **GIVEN** the recreation is rendered
- **THEN** the Contact column shows email, phone, address behaves as described by the fidelity notes

#### Scenario: Links column shows navigation links

- **GIVEN** the recreation is rendered
- **THEN** the Links column shows navigation links behaves as described by the fidelity notes

#### Scenario: Copyright bar at bottom with Component Dock link

- **GIVEN** the recreation is rendered
- **THEN** the Copyright bar at bottom with Component Dock link behaves as described by the fidelity notes

#### Scenario: Footer links to https://www.componentdock.com/

- **GIVEN** the recreation is rendered
- **THEN** the Footer links to https://www.componentdock.com/ behaves as described by the fidelity notes

### Header / Navigation

Feature: Header Navigation

#### Scenario: Top bar shows phone, email, and "Register or Login" button

- **GIVEN** the recreation is rendered
- **THEN** the Top bar shows phone, email, and "Register or Login" button behaves as described by the fidelity notes

#### Scenario: Main nav shows Home, About, Courses, Blog, Page, Contact

- **GIVEN** the recreation is rendered
- **THEN** the Main nav shows Home, About, Courses, Blog, Page, Contact behaves as described by the fidelity notes

#### Scenario: Home link is visually active (brand primary color)

- **GIVEN** the recreation is rendered
- **THEN** the Home link is visually active (brand primary color) behaves as described by the fidelity notes

#### Scenario: Search and cart icons are displayed

- **GIVEN** the recreation is rendered
- **THEN** the Search and cart icons are displayed behaves as described by the fidelity notes

#### Scenario: Logo shows "Scholarium" with "ium" styled in brand color

- **GIVEN** the recreation is rendered
- **THEN** the Logo shows "Scholarium" with "ium" styled in brand color behaves as described by the fidelity notes

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Brand color #14bdee used for buttons, active nav, accents
- [ ] Roboto body font + Roboto Slab heading font loaded via Google Fonts
- [ ] 3px border-radius on buttons and inputs
- [ ] Parallax backgrounds on Courses, Counter, Team, Newsletter sections
- [ ] Course cards show image, title, teacher, description, footer with stats
- [ ] Event cards show image, date badge, title, time, location
- [ ] Team cards show image, name, specialty, social icons
  - [ ] News section: 1 large + 4 small posts
- [ ] Newsletter form: email input + subscribe button
- [ ] Footer: 4 columns + copyright + Component Dock link
- [ ] Header: top bar + nav + logo
- [ ] Hero slider with search form
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
