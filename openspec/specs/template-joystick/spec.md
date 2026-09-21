# Spec: Joystick — Gaming Magazine Template

> Recreation of ColorLib "Egames" (https://colorlib.com/wp/template/egames/)

## Purpose

Joystick is a gaming magazine website template featuring a hero slider, game showcase grid, tabbed monthly picks, video reviews with interactive navigation, latest articles section, and a full footer. It recreates the ColorLib Egames design using React, Tailwind CSS 4, and TypeScript under the "Joystick" brand name.

## Design Tokens

- Brand color: `#20d8da` (cyan/teal)
- Headings: `#424242`, Open Sans bold
- Body text: `#939393`, Open Sans regular
- Button: square (no border-radius), `#20d8da` bg, white text, hover `#000000`
- Dark section overlays: `rgba(0,0,0,0.6)`
- Font: Open Sans (Google Fonts)

## Requirements

### Requirement: Navbar with brand, search, login, and navigation

Joystick SHALL render a top bar with brand logo, search form, and login link, followed by a sticky dark navigation bar with links (Home, Games, Articles, Reviews, Contact) and social media icons.

#### Scenario: Navbar renders brand and navigation links

- **WHEN** the page loads
- **THEN** the brand name "Joystick" is visible in the top bar
- **AND** navigation links for Home, Games, Articles, Reviews, and Contact are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu expands
- **AND** clicking it again collapses the menu

#### Scenario: Search form submission

- **WHEN** the user submits the search form
- **THEN** the form's default submit behavior is prevented

### Requirement: Hero section with background image and overlay

Joystick SHALL display a full-width hero section with a background image, dark overlay, heading text "The Power of Gaming", and descriptive paragraph.

#### Scenario: Hero renders heading and description

- **WHEN** the page loads
- **THEN** the hero heading "The Power of Gaming" is visible
- **AND** descriptive text about gaming is displayed

### Requirement: Games showcase grid

Joystick SHALL display a 3-column grid of game cards, each with a game image and a "View Games" button.

#### Scenario: Games section shows 3 cards

- **WHEN** the page loads
- **THEN** 3 game cards are visible
- **AND** each card has a "View Games" button

### Requirement: Monthly Picks with tabbed interface

Joystick SHALL display a "This Month's Pick" section with three tabs (Popular, Latest, Editor's Pick) that show different game cards when clicked. Each game card shows an image, title, user rating, and genre badge.

#### Scenario: Default tab shows popular games

- **WHEN** the page loads
- **THEN** the Popular tab is active by default
- **AND** games like "Grand Theft Auto V" and "Doom" are visible

#### Scenario: Tab switching

- **WHEN** the user clicks the "Latest" tab
- **THEN** the Latest tab becomes active
- **AND** games like "Elden Ring" are visible

#### Scenario: Editor's Pick tab

- **WHEN** the user clicks the "Editor's Pick" tab
- **THEN** games like "Persona 5" are visible

### Requirement: Video Reviews with interactive navigation

Joystick SHALL display a video reviews section with a vertical list of video items on the left and a main video preview area on the right. Clicking a video item updates the active selection and main preview.

#### Scenario: Default video selection

- **WHEN** the page loads
- **THEN** the first video is highlighted as active
- **AND** a play button is visible in the main video area

#### Scenario: Video switching

- **WHEN** the user clicks a different video item
- **THEN** that video becomes highlighted as active

### Requirement: Latest Articles section

Joystick SHALL display a "Latest Articles" section with article cards (thumbnail, title, date, comment count, excerpt) and a sidebar with a deal/promo widget.

#### Scenario: Articles render correctly

- **WHEN** the page loads
- **THEN** 3 articles are visible with titles, dates, and excerpts
- **AND** a "This week's deal" sidebar is visible

### Requirement: Footer with Component Dock branding

Joystick SHALL render a 4-column footer with brand description, Game Reviews links, Useful Links, and What's New links. The copyright bar MUST link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** Game Reviews, Useful Links, and What's New columns are visible
- **AND** the copyright contains a link to Component Dock

#### Scenario: Footer nav links

- **WHEN** the page loads
- **THEN** footer navigation links (Home, Games, Articles, Reviews, Contact) are visible
