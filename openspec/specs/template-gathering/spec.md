# Template: Gathering (Event)
<!-- prep-status: shipped-as=lineup -->
> **SHIPPED-UNDER** — the ColorLib `agenda` design this prep describes already
> ships as `apps/lineup` (<https://lineup.free.componentdock.com>).
> Do not scaffold `apps/gathering`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-lineup/spec.md`.

## Purpose

Recreation of the ColorLib **Agenda** template — a bold, purple-gradient event/conference website with a full-width hero slider, countdown timer, masonry featured-events grid, regional event slider, and newsletter subscribe section.

- **ColorLib source**: [Agenda](https://colorlib.com/wp/template/agenda/)
- **Preview URL**: https://preview.colorlib.com/theme/agenda/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/agenda-free-template.jpg
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name**: `gathering` (apps/gathering, package `@free-react-templates/gathering`)

## Design tokens (extracted from preview CSS)

| Token             | Value                                           |
| ----------------- | ----------------------------------------------- |
| Primary color     | `#9a28d7` (vibrant purple)                      |
| Brand gradient    | `linear-gradient(270deg, #ab00e5 0%, #581479 100%)` (purple top → deep plum) |
| Body text         | `#2f2f2f`                                       |
| Heading text      | `#232127`                                       |
| Muted text        | `#777777`                                       |
| Link muted        | `#bec0cc`                                       |
| White             | `#fff`                                          |
| Dark (button/bg)  | `#231e23`                                       |
| Footer background | `#08011e` (near-black indigo)                   |
| Social icon       | `#8f8f8f`                                       |
| Font family       | `'Calibri'` — substitute with `'Open Sans'` via Google Fonts (sans-serif fallback) |
| Button shape      | `border-radius: 50px` (pill), border `2px solid #9a24c1` or gradient-bg |
| Nav menu purple   | `#9a28d7` background (mobile slide-in)          |
| Overlay purple    | `rgba(154,40,215, .85)`                         |
| Input border-radius | `6px` (newsletter inputs)                     |

## Visual design notes (from screenshot)

- Full-width hero slider with dark image background, white bold text (72px desktop), countdown timer (days/hours/minutes/seconds), and pill-shaped gradient-bg CTA buttons.
- Info section: white background, split layout (logo/image left, heading + paragraph right), two CTAs (gradient + dark pill).
- Featured events: parallax background image, masonry grid of event cards with purple overlay labels and date badges.
- Next events: white background, centered section heading, 3-column event cards with circular rating badges (purple, white border), image + title + date + description + "Buy Tickets" link.
- Regional events: full-width parallax with purple overlay, location selector dropdown, horizontal swiper slider of event cards with hover overlay.
- Partners: logo row inside the regional-events parallax section.
- Newsletter: parallax background, centered heading, inline form with name/email inputs and gradient submit button.
- Footer: dark indigo `#08011e` background, centered logo, nav links, social icons, copyright attribution.

## Requirements

### Feature: Gathering template behaviour

#### Scenario: Hero section renders slider with countdown

Feature: Hero slider with countdown

#### Scenario: Displays countdown timer with days/hours/minutes/seconds

- **GIVEN** the hero section is mounted
- **THEN** four countdown units are visible
- **AND** each unit displays a numeric value and a label (Days, Hours, Minutes, Seconds)

#### Scenario: CTA button triggers navigation or modal

- **GIVEN** the hero slider is visible
- **WHEN** the user clicks the "Order here" button
- **THEN** a navigation action or modal is triggered

#### Scenario: Slider advances via arrows or pagination

- **GIVEN** the hero slider is showing slide 1
- **WHEN** the user clicks the next arrow
- **THEN** the second slide becomes visible

#### Scenario: Info section layout

Feature: About / info section

#### Scenario: Displays heading, description, and two CTA buttons

- **GIVEN** the info section is mounted
- **THEN** a logo image is visible on the left
- **AND** an "entry-title" heading is visible
- **AND** a paragraph description is shown
- **AND** two buttons are rendered: "Read More" (gradient) and "Register Now" (dark)

#### Scenario: Featured events grid

Feature: Featured events masonry grid

#### Scenario: Renders event cards with image, title, and date

- **GIVEN** the featured events section is mounted
- **THEN** multiple event cards are visible
- **AND** each card has an image, an uppercase title badge, and a date label

#### Scenario: Responsive layout adapts to screen width

- **GIVEN** the viewport is desktop (>=992px)
- **THEN** cards use absolute positioning for a masonry-like grid
- **AND** a min-height container wraps all cards

#### Scenario: Next events cards

Feature: Next events section

#### Scenario: Displays event cards in 3-column grid

- **GIVEN** the next events section is mounted
- **THEN** three event cards are visible

#### Scenario: Each card shows image, rating badge, title, date, description, and ticket link

- **GIVEN** an event card is visible
- **THEN** a circular rating badge is shown in the top-left corner (purple, white text)
- **AND** an image, heading, date (with purple accent), description paragraph, and "Buy Tickets" link are present

#### Scenario: Buy Tickets link has hover effect

- **GIVEN** the user hovers over the "Buy Tickets" link
- **THEN** the link color and border change to the primary purple

#### Scenario: Regional events slider

Feature: Regional events with location selector

#### Scenario: Location dropdown filters events

- **GIVEN** the regional events section is mounted
- **WHEN** the user selects a different location from the dropdown
- **THEN** the slider shows events for the selected location

#### Scenario: Event cards show overlay on hover

- **GIVEN** the slider is visible
- **WHEN** the user hovers over an event slide
- **THEN** a semi-transparent purple overlay with a "+" icon appears

#### Scenario: Partners logo row

Feature: Partners section

#### Scenario: Displays partner logos in a row

- **GIVEN** the partners section is mounted
- **THEN** multiple partner logo images are visible
- **AND** logos are spaced evenly in a flex row

#### Scenario: Newsletter subscribe form

Feature: Newsletter subscribe

#### Scenario: Form has name, email, and submit button

- **GIVEN** the newsletter section is mounted
- **THEN** a text input for "Name" is visible
- **AND** an email input for "Your e-mail" is visible
- **AND** a "Subscribe" button with gradient background is visible

#### Scenario: Submit triggers form action

- **GIVEN** the user fills in name and email
- **WHEN** the user clicks "Subscribe"
- **THEN** the form submission is triggered

#### Scenario: Footer

Feature: Footer

#### Scenario: Displays logo, nav links, social icons, and copyright

- **GIVEN** the footer is mounted
- **THEN** a logo image is shown
- **AND** navigation links (Home, About us, Events, News, Contact) are visible
- **AND** social media icon links (Pinterest, LinkedIn, Instagram, Facebook, Twitter) are present
- **AND** a copyright line with "Component Dock" attribution is shown

#### Scenario: Footer links point to Component Dock

- **GIVEN** the footer is visible
- **THEN** the attribution link points to https://www.componentdock.com/

#### Scenario: Navigation bar

Feature: Navbar

#### Scenario: Desktop nav shows inline links and Buy Tickets button

- **GIVEN** the viewport is desktop (>=992px)
- **THEN** the navigation is displayed inline
- **AND** a "Buy Tickets" pill button is visible in the header bar

#### Scenario: Mobile nav uses hamburger menu with slide-in drawer

- **GIVEN** the viewport is mobile (<992px)
- **WHEN** the user taps the hamburger icon
- **THEN** a purple slide-in navigation drawer opens from the left
- **AND** nav links are displayed vertically

#### Scenario: Accessibility

Feature: Accessibility

#### Scenario: All interactive elements are keyboard-focusable

- **GIVEN** the page is loaded
- **THEN** buttons, links, and form inputs are focusable via keyboard

#### Scenario: Images have alt text

- **GIVEN** the page is loaded
- **THEN** all img elements have alt attributes

## Verification checklist

- [ ] All sections from the original are present in the correct order: Header/Nav → Hero Slider → Info Section → Featured Events → Next Events → Regional Events → Partners → Newsletter → Footer
- [ ] Design tokens match: `#9a28d7` primary, gradient buttons, pill shapes (`50px` radius), dark footer (`#08011e`)
- [ ] Hero has countdown timer and slider arrows/pagination
- [ ] Featured events grid uses absolute positioning on desktop for masonry effect
- [ ] Next events have circular rating badges
- [ ] Regional events have hover overlay with "+" icon
- [ ] Newsletter form has name, email, and gradient submit button
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Images use `picsum.photos` placeholders
- [ ] Font uses Google Fonts (Open Sans or similar) instead of local Calibri
- [ ] Tests cover all sections with 100% coverage
