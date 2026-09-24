# Template: Newsbeat (Podcast & Audio)

## Purpose

Recreation of the ColorLib "The Hustle Hour" template as a React 19 + Vite +
Tailwind 4 + TypeScript application. The original is a podcast website template
with episode archives, audio players, guest profiles, and newsletter signup
forms.

- **Source:** ColorLib "The Hustle Hour"
  (https://colorlib.com/wp/template/the-hustle-hour/)
- **Preview URL:** https://preview.colorlib.com/theme/the-hustle-hour/
  (returns 404 — fallback to screenshot and listing page reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hustlehour-template-1771943880509.jpg
- **Category:** Podcast & Audio
- **Stack:** Vite (latest), React 19, Tailwind CSS 4, TypeScript (strict)

## Design Tokens

Extracted from the ColorLib listing page CSS and screenshot visual analysis:

### Colors

| Token         | Value   | Usage                                   |
| ------------- | ------- | --------------------------------------- |
| brand-primary | #1a73e8 | Top bar background, links, hover states |
| accent-green  | #77CC6D | Feature icons, accent elements          |
| body-text     | #26282b | Primary body copy                       |
| heading-color | #26282b | Headings (dark)                         |
| bg-white      | #ffffff | Page background                         |
| bg-light      | #f8f9fa | Section alternating background          |
| border-color  | #eeeeee | Section dividers, card borders          |
| nav-text      | #333333 | Navigation link text                    |
| hover-accent  | #1464cc | Link hover state                        |

### Typography

| Token            | Value / Font                                |
| ---------------- | ------------------------------------------- |
| heading-font     | "Playfair Display", serif (from screenshot) |
| body-font        | "Poppins", sans-serif (from screenshot)     |
| body-font-size   | 16px                                        |
| body-line-height | 1.8em                                       |
| nav-font-weight  | 500 (medium), uppercase, letter-spacing 1px |

### Spacing & Layout

| Token             | Value  |
| ----------------- | ------ |
| container-max-w   | 1140px |
| section-padding-y | 60px   |
| grid-gap          | 30px   |

### Button / Badge Styles

- Buttons: rounded corners (border-radius: 4px), padding 12px 24px
- Accent button: bg brand-primary (#1a73e8), white text, hover darken
- Nav links: uppercase, medium weight, letter-spacing, no underlines, hover
  color transitions to brand-primary (#1a73e8)
- Feature icons: green (#77CC6D), large font-size (62px)

## Requirements

### Requirement: Top bar with social links

Users SHALL see a top bar with a blue (#1a73e8) background containing social
media icons (Twitter, Facebook, Instagram) on the right.

#### Scenario: Top bar renders with social icons

- **WHEN** a user loads the page
- **THEN** the top bar displays with brand-primary background
- **AND** social media icons (Twitter, Facebook, Instagram) are visible on the right

### Requirement: Header with site title and navigation

Users SHALL see a header with the site title "Newsbeat" in a serif font and
navigation links (Home, Episodes, Guests, Pricing, Contact) right-aligned.

#### Scenario: Header renders the site title

- **WHEN** a user loads the page
- **THEN** the heading "Newsbeat" is visible in the header area

#### Scenario: Header navigation links render

- **WHEN** a user loads the page
- **THEN** Home, Episodes, Guests, Pricing, and Contact links are visible

### Requirement: Hero section with podcast intro

Users SHALL see a hero section with a headline introducing the podcast, a
description paragraph, and a call-to-action button.

#### Scenario: Hero section renders

- **WHEN** a user loads the page
- **THEN** a headline about the podcast is visible
- **AND** a description paragraph is visible
- **AND** a CTA button with text "Listen Now" is visible

### Requirement: Podcast features section

Users SHALL see a features section with 3 columns showing podcast features,
each with a green icon, title, and description.

#### Scenario: Features section renders 3 columns

- **WHEN** a user scrolls to the features section
- **THEN** 3 feature cards are displayed in a row
- **AND** each card has a green icon, a title, and a description

### Requirement: Episode archives section

Users SHALL see an episode archives section listing recent episodes with
titles, dates, and play buttons.

#### Scenario: Episode list renders

- **WHEN** a user scrolls to the episode archives section
- **THEN** at least 3 episodes are listed
- **AND** each episode shows a title, date, and play/pause button

### Requirement: Guest profiles section

Users SHALL see a guest profiles section with cards showing guest photos,
names, and short bios.

#### Scenario: Guest cards render

- **WHEN** a user scrolls to the guest profiles section
- **THEN** at least 3 guest cards are displayed
- **AND** each card has a placeholder image, guest name, and bio text

### Requirement: Newsletter signup section

Users SHALL see a newsletter signup section with an email input and a
subscribe button.

#### Scenario: Newsletter form renders

- **WHEN** a user scrolls to the newsletter section
- **THEN** an email input field is visible
- **AND** a subscribe button is visible
- **AND** the section has a distinct background color

### Requirement: Pricing plans section

Users SHALL see a pricing section with 3 plans (Single, Membership, Lifetime)
displayed as cards with pricing and feature lists.

#### Scenario: Pricing cards render

- **WHEN** a user scrolls to the pricing section
- **THEN** 3 pricing cards are visible
- **AND** each card shows a plan name, price, and feature list

#### Scenario: Membership plan is highlighted

- **WHEN** a user views the pricing section
- **THEN** the "Membership" card is visually highlighted as the recommended plan

### Requirement: Footer with Component Dock link

Users SHALL see a dark footer with a copyright line and a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** a user scrolls to the footer
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is visible

#### Scenario: Footer renders copyright

- **WHEN** a user scrolls to the footer
- **THEN** copyright text with the current year and "Newsbeat" is visible

### Requirement: Responsive layout on mobile

Users SHALL see a responsive layout where the navigation collapses to a
hamburger menu, feature columns stack vertically, and pricing cards stack
vertically.

#### Scenario: Mobile viewport layout

- **WHEN** a user loads the page on a viewport width of 375px
- **THEN** the navigation shows a hamburger menu toggle
- **AND** feature cards stack vertically
- **AND** pricing cards stack vertically

### Requirement: No ColorLib references in app code

The application SHALL NOT contain any references to "colorlib" in source files,
comments, or data. Provenance lives only in the spec and TEMPLATES.md.

#### Scenario: Clean app source

- **WHEN** any file under apps/newsbeat/ is inspected
- **THEN** no strings contain "colorlib" (case-insensitive)

### Requirement: Tailwind theme tokens

The application SHALL define design tokens in @theme matching the original
design: brand accent (#1a73e8), accent green (#77CC6D), body text (#26282b),
border (#eeeeee), Playfair Display for headings, Poppins for body.

#### Scenario: Theme tokens are defined

- **WHEN** the index.css is compiled
- **THEN** brand, green, ink, border, and font tokens are available
