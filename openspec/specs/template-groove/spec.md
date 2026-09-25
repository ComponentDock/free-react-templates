# Template: Groove (Music Artist Landing)

## Purpose

Groove is a music artist/band landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Hnband"
website template design (see TEMPLATES.md), built under a DIFFERENT name
("Groove") with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Requirements

### Requirement: Navigation bar

Users SHALL see a fixed navigation bar at the top with the "Groove" brand name, navigation links (Home, About, Albums, Tours, Contact), and a "Buy tickets" CTA button.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the "Groove" brand, all navigation links, and the "Buy tickets" button

#### Scenario: Mobile navigation toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile menu opens showing all navigation links and the CTA

### Requirement: Hero section

Users SHALL see a full-screen hero section with a dark gradient background, a script-style subtitle, a heading, a description paragraph, and a "Buy tickets" CTA button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero displays "The electro vibe" subtitle, "Groove Sessions" heading, description text, and a "Buy tickets" button

### Requirement: About section

Users SHALL see a split layout with an image on the left and text on the right, including an "About us" subtitle, heading, description, and "Contact us" button.

#### Scenario: About content

- **WHEN** the user scrolls to the about section
- **THEN** an artist image and descriptive text with a contact button are displayed

### Requirement: Discography section

Users SHALL see a section with "Our Discography" subtitle, "newest albums & singles." heading, a "Buy on iTunes" button, and an 8-card grid of album covers with titles and artist names.

#### Scenario: Album grid

- **WHEN** the user views the discography section
- **THEN** 8 album cards are displayed each with an image, title, and artist name

### Requirement: Music player section

Users SHALL see a split music player with track info (title + artist), playback controls (shuffle, prev, play, next, volume), a progress bar, and an album art display with "Latest album" label.

#### Scenario: Player controls

- **WHEN** the user views the player section
- **THEN** track info, playback buttons, and album art with a label are visible

### Requirement: Video section

Users SHALL see a video section with "Our Videos" subtitle, a video player area with play button and title, playback controls, and a playlist sidebar with track list.

#### Scenario: Video player

- **WHEN** the user views the video section
- **THEN** a video player with play button, controls, and a playlist sidebar are displayed

### Requirement: Shows section

Users SHALL see an "Upcoming Shows" section with a heading, a "View all" button, and a list of show items each containing a date badge, title, genre info, location, time, and "Buy tickets" button.

#### Scenario: Show list

- **WHEN** the user views the shows section
- **THEN** multiple show items are displayed with dates, titles, locations, times, and ticket buttons

### Requirement: Footer

Users SHALL see a footer with a contact form (name, email, message, submit button), address/phone/email info, social media icons, and a copyright line with a "Component Dock" link.

#### Scenario: Contact form

- **WHEN** the user fills out and submits the contact form
- **THEN** the form fields clear after submission

#### Scenario: Component Dock link

- **WHEN** the user views the footer copyright
- **THEN** a "Component Dock" link points to https://www.componentdock.com/
