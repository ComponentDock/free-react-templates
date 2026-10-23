# Vinylspin — Music Band Landing Template

Recreation of ColorLib "Mixtape" (https://colorlib.com/wp/template/mixtape/).
Preview: https://preview.colorlib.com/theme/mixtape/

## Purpose

Vinylspin is a dark-themed music band landing page template featuring a hero slider,
featured album with audio player, upcoming shows list, artist biography with player,
CTA banner, and newsletter footer. The design uses a black background (#000), white text,
red accent (#de4f32), and Montserrat font (Futura-like geometric sans).

## Requirements

### Requirement: Page renders all sections in correct order

The page SHALL render the following sections in order: Navbar, Hero, FeaturedAlbum,
Shows, Artist, CtaBanner, Footer.

#### Scenario: All sections are visible on page load

- **WHEN** I visit the Vinylspin page
- **THEN** I see the Navbar with logo "Vinylspin"
- **AND** I see the Hero section with title "Love is all around"
- **AND** I see the Featured Album section
- **AND** I see the Upcoming Shows section
- **AND** I see the Artist section
- **AND** I see the CTA banner
- **AND** I see the Footer with newsletter and links

### Requirement: Navbar provides navigation and auth

The Navbar SHALL display the logo "Vinylspin", navigation links (Home, About, Music,
News, Contact), Login/Register links, and a mobile hamburger menu.

#### Scenario: Desktop navigation shows all links

- **WHEN** I visit the page on desktop
- **THEN** the Navbar shows "Vinylspin" as the logo
- **AND** it contains links for Home, About, Music, News, Contact
- **AND** it shows Login and Register links

#### Scenario: Mobile menu toggles open and closed

- **WHEN** I click the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** when I click the close button the menu closes

### Requirement: Hero section displays release info

The Hero SHALL display a "New single release" subtitle, "Love is all around" main title,
and a "Listen on Soundcloud" CTA button over a background image.

#### Scenario: Hero content is visible

- **WHEN** I visit the page
- **THEN** I see "New single release" as subtitle
- **AND** I see "Love is all around" as the main title
- **AND** I see a "Listen on Soundcloud" button

### Requirement: Featured Album shows player

The Featured Album section SHALL display an album artwork image, artist name "Maria Smith",
track title "Love is all Around", play button, progress bar, and "Buy it on iTunes" link.

#### Scenario: Album player content is visible

- **WHEN** I visit the page
- **THEN** I see the "Featured Album" heading
- **AND** I see an album artwork image
- **AND** I see artist name "Maria Smith"
- **AND** I see track title "Love is all Around"
- **AND** I see a play button

### Requirement: Shows section lists upcoming events

The Shows section SHALL display an "Upcoming Shows" heading and at least 5 show entries,
each with a date, venue name, location, and "Buy Tickets" button.

#### Scenario: All shows are listed with buy tickets buttons

- **WHEN** I visit the page
- **THEN** I see "Upcoming Shows" heading
- **AND** I see at least 5 show entries with dates and venues
- **AND** each show has a "Buy Tickets" button

### Requirement: Artist section displays bio

The Artist section SHALL display "The Artist" heading, an artist image, biography text
paragraphs, a signature, and a single-track audio player.

#### Scenario: Artist content is visible

- **WHEN** I visit the page
- **THEN** I see "The Artist" heading
- **AND** I see an artist image
- **AND** I see biography text paragraphs

### Requirement: CTA banner has action button

The CTA Banner SHALL display "Get your tickets now!" heading, description text,
and a "Buy Now" button over a background image.

#### Scenario: CTA banner content is visible

- **WHEN** I visit the page
- **THEN** I see "Get your tickets now!" heading
- **AND** I see a "Buy Now" button

### Requirement: Footer has newsletter and link columns

The Footer SHALL display a newsletter form (email input + Subscribe button),
three link columns (Useful Links, Vinylspin, Connect), and a copyright line
linking to Component Dock.

#### Scenario: Footer content is visible

- **WHEN** I visit the page
- **THEN** I see a newsletter form with email input and Subscribe button
- **AND** I see Useful Links, Vinylspin, and Connect link columns
- **AND** I see a copyright line with Component Dock link

#### Scenario: Newsletter form accepts email

- **WHEN** I type an email into the newsletter input
- **AND** I click Subscribe
- **THEN** the form processes the submission

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/vinylspin/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/vinylspin/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
