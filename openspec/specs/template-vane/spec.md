# Template: Vane (Portfolio / Agency)

## Purpose

Recreation of ColorLib's **Martin** template — a personal portfolio / digital
product designer & art director single-page site.

- **Source slug:** `martin`
- **ColorLib URL:** https://colorlib.com/wp/template/martin/
- **Preview URL:** https://preview.colorlib.com/theme/martin/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (extracted from preview CSS)

| Token              | Value                                              |
| ------------------ | -------------------------------------------------- |
| **Brand primary**  | `#002bdc` (vibrant blue)                           |
| **Accent / CTA**   | `#ffdd00` (yellow — buttons, highlights)           |
| **Dark bg**        | `#000` (black — hero, overlays)                    |
| **Light bg**       | `#f7f7f7`, `#ebebeb`, `#e6e6e6`, `#e0e0e0`       |
| **Gray bg**        | `#b7c2c2`                                          |
| **Text primary**   | `#1a1a1a`, `#333333`                               |
| **Text secondary** | `#4d4d4d`, `#999999`, `#b3b3b3`                   |
| **White text**     | `#fff`, `#fcfcfc`                                  |
| **Font family**    | `"Poppins", Arial, sans-serif`                     |
| **Button radius**  | `1px` (sharp edges)                                |
| **Other radii**    | `30px` (pill shapes), `50%` (circles), `4px`, `2px`|
| **Nav overlay**    | `rgba(0, 43, 220, 0.9)` (blue transparent)        |

## Visual Design Notes (from screenshot)

- **Clean, modern, bold** aesthetic with strong blue (#002bdc) and yellow
  (#ffdd00) accent.
- Full-screen hero with dark background and centered text; "Hire me now" CTA
  in yellow.
- Services section with 3 categories (Explore, Create, Learn) each containing
  3 service items in a grid layout.
- Work/Projects section: project cards with images, category tags, titles,
  descriptions, and "See details" links.
- Newsletter/Subscribe section with a form.
- Footer with contact info, social links (Twitter, Facebook, Instagram,
  Dribbble), and address.
- Navigation: fixed side nav (hamburger menu) that opens as a full-screen
  blue overlay.
- Overall: dark hero, white content sections, bold typography, yellow
  accent buttons with sharp 1px radius.

## Requirements

### Navigation

#### Scenario: Fixed hamburger navigation

- **GIVEN** the user loads the page
- **WHEN** the navbar renders
- **THEN** it should show the brand "V." on the left
- **AND** it should show a hamburger menu icon on the right
- **AND** clicking the hamburger should open a full-screen blue (#002bdc) overlay
- **AND** the overlay should contain nav links: Home, About, Services, Work, Blog, Contact

#### Scenario: Nav overlay closes on link click

- **GIVEN** the nav overlay is open
- **WHEN** the user clicks a nav link
- **THEN** the overlay should close
- **AND** the page should scroll to the corresponding section

### Hero Section

#### Scenario: Full-screen hero with CTA

- **GIVEN** the user loads the page
- **WHEN** the hero section renders
- **THEN** it should be full-screen height with a dark background
- **AND** it should display a headline introducing the designer
- **AND** it should show a subheadline describing the role
- **AND** it should show a "Hire me now" button in yellow (#ffdd00)

### Services Section

#### Scenario: Services grouped by category

- **GIVEN** the user scrolls to the services section
- **WHEN** it renders
- **THEN** it should show heading "Strategy, design and a bit of magic"
- **AND** it should display 3 category groups: Explore, Create, Learn
- **AND** Explore should contain: Design Sprints, Product Strategy, UX Strategy
- **AND** Create should contain: Information, UX/UI Design, Branding
- **AND** Learn should contain: Prototyping, User Testing, UI Testing

### Work/Projects Section

#### Scenario: Project showcase

- **GIVEN** the user scrolls to the work section
- **WHEN** it renders
- **THEN** it should show heading "Happy spending my time to this projects"
- **AND** it should display project cards with images
- **AND** each card should show category tags (e.g. "UI/UX, Art Direction")
- **AND** each card should show a title and description
- **AND** each card should have a "See details" link

### Subscribe/Newsletter Section

#### Scenario: Newsletter subscription

- **GIVEN** the user scrolls to the subscribe section
- **WHEN** it renders
- **THEN** it should show a description paragraph
- **AND** it should show an email input field
- **AND** it should show a subscribe button

### Footer

#### Scenario: Footer with contact and social

- **GIVEN** the user views the footer
- **WHEN** it renders
- **THEN** it should show "Lets Talk" heading
- **AND** it should show an info section with email, phone, and address
- **AND** it should show social links: Twitter, Facebook, Dribbble
- **AND** it should include a copyright notice
- **AND** it should link to https://www.componentdock.com/ (Component Dock)

## Verification Checklist

- [ ] Navbar: hamburger icon → full-screen blue overlay with nav links
- [ ] Hero: full-screen dark bg, headline, subheadline, yellow "Hire me now" CTA
- [ ] Services: 3 categories (Explore, Create, Learn) with 3 items each
- [ ] Work: project cards with images, tags, titles, descriptions, "See details"
- [ ] Subscribe: description text, email input, subscribe button
- [ ] Footer: "Lets Talk", contact info, social links, copyright, Component Dock link
- [ ] Design tokens: #002bdc blue, #ffdd00 yellow, Poppins font, 1px button radius
- [ ] 100% test coverage, typecheck passes, lint passes, build succeeds
