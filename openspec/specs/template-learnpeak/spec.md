# Template: LearnPeak (Education / Online Courses)

## Purpose

Recreation of ColorLib's **Elearn** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template:** Elearn
- **ColorLib URL:** https://colorlib.com/wp/template/elearn/
- **Live preview:** https://preview.colorlib.com/theme/elearn/
- **New app name:** `learnpeak`
- **Package:** `@free-react-templates/learnpeak`

## Design tokens

Extracted from the live preview CSS (`styles/main_styles.css`):

| Token            | Value                          |
| ---------------- | ------------------------------ |
| Brand primary    | `#ff6600` (orange)             |
| Brand secondary  | `#ff8a00` (lighter orange)     |
| Hover accent     | `#ffae00` (golden orange)      |
| Dark background  | `#2c2b31` (near-black purple)  |
| Dark alt         | `#44425a` (dark slate)         |
| Text muted       | `#6c6a74` (warm gray)          |
| Text light       | `#918ea0` (soft lavender gray) |
| Background light | `#f2f1f8` (faint lavender)     |
| White            | `#FFFFFF`                      |
| Font family      | `"Montserrat", sans-serif`     |
| Button height    | `47px` (fixed height CTA)      |
| Button radius    | `0` (sharp/square corners)     |
| Avatar radius    | `50%` (circular)               |

## Section structure (order from preview)

1. **Top Bar** — Register/Login links, dark background bar at top.
2. **Header/Navbar** — Logo ("learn"), navigation (Home, About Us, Courses, News, Contact), search icon. Dark background matching top bar.
3. **Home Slider** — Full-width carousel with 3 slides, each having: background image, centered logo, heading, subtitle, and two CTA buttons ("learn more" / "see all courses"). Orange buttons on dark overlay.
4. **Featured Course** — Split layout: left side has course tag, price, title ("Online Literature Course"), description text, author avatar+name, sales count; right side has course background image. Light background.
5. **Courses Cards** — Heading "Choose Your Course" + search button. 3 course cards: each with image, tag (Featured/New), title, author avatar+name, footer with stats. Light background.
6. **Milestones/Counters** — 4 milestone counters in a row (icon + number + label). Dark background section.
7. **Why Choose Us** — Accordion FAQ + Upcoming Events with date badges. Two-column layout.
8. **News/Blog** — 3 blog post previews with date badge, image, title, author. Light background.
9. **Join CTA** — "Join Our Platform Today" heading with "register now" button. Orange accent.
10. **Footer** — 4 columns: About (logo + social icons), Quick Menu, Useful Links, Contact Us (address, phone, email). Dark background. Component Dock link.

## Requirements

### Requirement: Navigation

The application SHALL display a top bar with Register/Login links and contact info, and a sticky navbar with logo, navigation links, and search.

#### Scenario: Top bar shows auth links

- **WHEN** the user visits the LearnPeak homepage
- **THEN** "Register" and "Login" links are visible in the top bar

#### Scenario: Main nav has correct links

- **WHEN** the user visits the LearnPeak homepage
- **THEN** the navbar contains: Home, About Us, Courses, News, Contact
- **AND** the logo text reads "learn"

#### Scenario: Mobile menu toggle works

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu opens with all nav links visible

### Requirement: Hero Slider

The application SHALL display a full-width hero carousel with 3 slides, navigation arrows, and pagination dots.

#### Scenario: Hero slider displays three slides

- **WHEN** the user visits the LearnPeak homepage
- **THEN** a full-width image slider is visible
- **AND** each slide has a heading, subtitle, and two CTA buttons

#### Scenario: Slider navigation works

- **WHEN** the user clicks the next arrow
- **THEN** the slider advances to the next slide

#### Scenario: Slider previous navigation works

- **WHEN** the user clicks the previous arrow
- **THEN** the slider goes to the previous slide

#### Scenario: Pagination dots work

- **WHEN** the user clicks a pagination dot
- **THEN** the slider navigates to the corresponding slide

### Requirement: Featured Course

The application SHALL display a featured course section with a split layout showing course details and an image.

#### Scenario: Featured course section shows details

- **WHEN** the user scrolls past the hero
- **THEN** a featured course section is visible
- **AND** it displays a course tag, title, price, description, and author info

### Requirement: Course Cards

The application SHALL display a course grid with 3 course cards, each showing an image, tag, title, author, and stats.

#### Scenario: Course cards display correctly

- **WHEN** the user scrolls to the courses section
- **THEN** a heading reads "Choose Your Course"
- **AND** 3 course cards are visible
- **AND** each card has an image, tag, title, and author

### Requirement: Milestones

The application SHALL display 4 milestone counters in a dark background section with icons, numbers, and labels.

#### Scenario: Four counters are displayed

- **WHEN** the user scrolls to the milestones section
- **THEN** 4 milestone counters are shown
- **AND** each has an icon, number, and label
- **AND** the section has a dark background

### Requirement: Why Choose Us

The application SHALL display accordion FAQ items and upcoming events in a two-column layout.

#### Scenario: Accordion toggles work

- **WHEN** the user clicks an accordion question
- **THEN** the accordion panel toggles open/closed
- **AND** the aria-expanded attribute reflects the current state

#### Scenario: Events are displayed

- **WHEN** the user scrolls to the events section
- **THEN** upcoming events with date badges and titles are visible

### Requirement: News

The application SHALL display 3 blog post previews with date badges, images, titles, and authors.

#### Scenario: Three blog posts are shown

- **WHEN** the user scrolls to the news section
- **THEN** 3 blog post previews are displayed
- **AND** each has a date badge, image, title, and author name

### Requirement: Join CTA

The application SHALL display a call-to-action section prompting registration.

#### Scenario: CTA section prompts registration

- **WHEN** the user scrolls to the join section
- **THEN** a heading reads "Join Our Platform Today"
- **AND** a "Register Now" button is visible

### Requirement: Footer

The application SHALL display a 4-column footer with navigation, useful links, contact info, and a Component Dock attribution link.

#### Scenario: Footer has four columns

- **WHEN** the user scrolls to the footer
- **THEN** 4 columns are visible: About, Quick Menu, Useful Links, Contact Us

#### Scenario: Footer links to Component Dock

- **WHEN** the user scrolls to the footer
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** it is branded as "Component Dock"

#### Scenario: Footer shows contact info

- **WHEN** the user scrolls to the footer
- **THEN** address, phone number, and email are displayed

### Requirement: Accessibility

The application SHALL use semantic HTML landmarks (header, main, footer, nav) and proper ARIA attributes.

#### Scenario: Landmarks are present

- **WHEN** the user visits the LearnPeak homepage
- **THEN** banner, main, and contentinfo landmarks are present
