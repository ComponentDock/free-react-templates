# Sonance — Podcast Website Template

Recreation of ColorLib "Megapod" (https://colorlib.com/wp/template/megapod/).

## Purpose

A podcast website template featuring a hero with featured episode, audio
player, live & upcoming episodes with category tabs, a call-to-action for
donations, a latest-episodes grid, and a newsletter footer. Built with
React 19, Tailwind CSS 4, and TypeScript.

## Requirements

### Requirement: Navbar with logo, navigation, and search

Users SHALL see a sticky dark navbar with the "Sonance" logo, navigation links (Home, Episodes, About, Contact), and a search icon button.

#### Scenario: Navbar renders all elements

- **WHEN** the page loads
- **THEN** the navbar displays the "Sonance" logo text
- **AND** navigation links for Home, Episodes, About, and Contact are visible
- **AND** a search button is present

### Requirement: Hero section with featured episode

Users SHALL see a hero section with the featured episode date, title, two subscription CTAs, and a play button with episode artwork.

#### Scenario: Hero shows featured episode

- **WHEN** the page loads
- **THEN** the date "10 Dec 2019" is displayed
- **AND** a heading with the episode title is visible
- **AND** "Subscribe with iTunes" and "Subscribe with RSS" links are present
- **AND** a play button with episode artwork image is shown

### Requirement: Audio player with playback controls

Users SHALL see an audio player section with track artwork, title, artist, play/pause button, progress bar, share and download buttons.

#### Scenario: Audio player renders and toggles play state

- **WHEN** the page loads
- **THEN** the audio player shows track title and artist
- **AND** a play button is visible
- **WHEN** the user clicks the play button
- **THEN** the button changes to a pause button
- **AND** share and download buttons are present

### Requirement: Live & Upcoming episodes with category tabs

Users SHALL see a "Live & Upcoming" section with category filter tabs and episode cards with inline audio controls.

#### Scenario: Category tabs filter episodes

- **WHEN** the page loads
- **THEN** category tabs for All, Entrepreneurship, Media, Tech, and Tutorials are shown
- **AND** all episodes are displayed
- **WHEN** the user clicks a category tab
- **THEN** the episodes are filtered to that category

### Requirement: Support The Show call-to-action

Users SHALL see a centered "Support The Show" section with a donation CTA button.

#### Scenario: CTA section renders

- **WHEN** the page loads
- **THEN** the "Support The Show" heading is visible
- **AND** a "Make a Donation" button is present

### Requirement: Latest Episodes grid

Users SHALL see a "Latest Episodes" section with a grid of episode cards showing image, category, duration, title, and date.

#### Scenario: Episodes grid renders cards

- **WHEN** the page loads
- **THEN** the "Latest Episodes" heading is displayed
- **AND** six episode cards are shown with artwork, title, category, duration, and date
- **AND** each card has a play button

### Requirement: Footer with newsletter, social links, and Component Dock attribution

Users SHALL see a footer with a newsletter signup form, logo, social media links, copyright, and a link to Component Dock.

#### Scenario: Footer renders all elements

- **WHEN** the page loads
- **THEN** a newsletter signup form with email input and subscribe button is shown
- **AND** social media links for Facebook, Twitter, Instagram, and YouTube are present
- **AND** a link to https://www.componentdock.com/ labeled "More templates at Component Dock" is visible
