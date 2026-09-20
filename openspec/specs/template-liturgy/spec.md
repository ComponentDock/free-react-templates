# Template: Liturgy (Church)

## Purpose

Recreation of ColorLib's **Advent** church website template
(`https://colorlib.com/wp/template/advent/`)
as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Preview URL:** `https://preview.colorlib.com/theme/advent/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg`
- **Stack:** Vite latest · React 19 · Tailwind CSS 4 · TypeScript strict
- **Deploy:** `https://liturgy.free.componentdock.com` (Surge)

## Requirements

### Requirement: Navigation bar

The app SHALL display a transparent navigation bar at the top of the page with the brand name "Liturgy" on the left and navigation links on the right.

#### Scenario: Desktop navigation display

- **WHEN** the page loads on a desktop viewport
- **THEN** a dark transparent navigation bar is visible at the top
- **AND** the brand name "Liturgy" is shown on the left
- **AND** nav links are shown: Home, Who We Are, Ministries, Events, Contact
- **AND** all nav text is uppercase with wide letter spacing

#### Scenario: Ministries dropdown

- **WHEN** the user hovers over "Ministries" in the nav
- **THEN** a dropdown appears with items: Children, Students, Care Ministry, Missions, Request Prayer
- **AND** dropdown items highlight with golden accent on hover

#### Scenario: Mobile hamburger menu

- **WHEN** the viewport width is below 768px
- **THEN** a hamburger button appears
- **AND** clicking it toggles the nav links vertically

### Requirement: Hero slider

The app SHALL display a full-viewport image carousel with centered white text and outline-white CTA buttons.

#### Scenario: Hero carousel display

- **WHEN** the page loads
- **THEN** a full-viewport image carousel is visible
- **AND** each slide has a dark overlay and centered white text
- **AND** a headline (h1) and subtext paragraph are shown
- **AND** an outline-white CTA button is shown

#### Scenario: Slider navigation dots

- **WHEN** the hero slider is visible
- **THEN** white outlined navigation dots appear at the bottom
- **AND** the active dot has a white filled border

### Requirement: Upcoming events section

The app SHALL display an upcoming events section with a dark background, yellow section badge, event details, and a countdown timer.

#### Scenario: Events section display

- **WHEN** the user scrolls to the events section
- **THEN** a dark background section is visible
- **AND** a golden "Upcoming Events" badge is displayed
- **AND** an event headline, date, location, and speaker are shown
- **AND** a countdown timer with golden blocks is displayed

#### Scenario: Countdown timer

- **WHEN** the upcoming events section is visible
- **THEN** the countdown shows blocks for days, hours, minutes, seconds
- **AND** each block has a golden background with white numbers

### Requirement: Worship time section

The app SHALL display a worship time section with a split layout showing a schedule list on the left and an image on the right.

#### Scenario: Worship time display

- **WHEN** the user scrolls to the worship time section
- **THEN** a split layout is visible
- **AND** the left side shows "Worship Time" heading and a schedule list
- **AND** the right side shows an image
- **AND** the schedule lists Morning Worship, Afternoon Worship, Evening Worship with times

#### Scenario: Schedule list styling

- **WHEN** the worship time list is visible
- **THEN** each item has a bottom border separator
- **AND** times are displayed below the service name in lighter text

### Requirement: Recent sermons section

The app SHALL display a recent sermons section with 3 sermon cards in a grid, each with title, author, date, and an audio player.

#### Scenario: Sermon cards display

- **WHEN** the user scrolls to the sermons section
- **THEN** a section heading "Recent Sermons" / "Listen Our Sermons" is displayed
- **AND** 3 sermon cards are shown in a row
- **AND** each card has a black background
- **AND** each card shows a sermon title, author name, and date
- **AND** each card has an audio player

#### Scenario: Sermon card layout

- **WHEN** sermon cards are visible
- **THEN** the title uses the heading font in white
- **AND** the meta text is uppercase with letter spacing
- **AND** cards are arranged in a 3-column grid

### Requirement: Ministries section

The app SHALL display a ministries section with 3 ministry cards showing thumbnail, title, category, and description.

#### Scenario: Ministries section display

- **WHEN** the user scrolls to the ministries section
- **THEN** a section heading "Ministries" / "Events & Ministries" is displayed
- **AND** 3 ministry cards are shown in a row
- **AND** each card has a thumbnail image, title, category, and description

#### Scenario: Ministry card layout

- **WHEN** ministry cards are visible
- **THEN** the thumbnail is displayed on the left
- **AND** the title uses the heading font
- **AND** the category and date are shown in uppercase metadata text
- **AND** a description paragraph follows

### Requirement: Footer

The app SHALL display a dark footer with 3 columns (About, Quick Links, Contact Info), social icons, and a Component Dock attribution link.

#### Scenario: Footer display

- **WHEN** the user scrolls to the footer
- **THEN** a dark background footer is visible with a top border
- **AND** 3 columns are shown: About, Quick Links, Contact Info
- **AND** social media icons are shown as circles
- **AND** the Quick Links column lists Sermons, Ministries, Events, Contact

#### Scenario: Footer attribution

- **WHEN** the footer is displayed
- **THEN** a copyright line is shown
- **AND** a "Component Dock" link (https://www.componentdock.com/) is present
- **AND** no ColorLib branding appears in the rendered app

### Requirement: Design tokens

The app SHALL use the following design tokens matching the original Advent template.

#### Scenario: Visual design tokens

- **WHEN** the template renders
- **THEN** the brand accent color is golden (#ffc107)
- **AND** the body background is dark charcoal (#262626)
- **AND** headings use Playfair Display font
- **AND** body text uses Open Sans font
- **AND** buttons have sharp corners (radius 0), uppercase text, and letter-spacing
