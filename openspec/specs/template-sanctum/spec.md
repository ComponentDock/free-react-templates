## Purpose

Recreation of ColorLib "Wisdom" (https://colorlib.com/wp/template/wisdom/) as a single-page church website template named "Sanctum" with hero, bible study countdown, about, services, newsletter, sermons, testimonies, counters, events, blog, and dark footer.

## Requirements

### Requirement: Navbar with site branding and navigation

The page SHALL display a dark navbar with the site name "Sanctum Church" and navigation links (Home, About, Events, Sermons, Blog, Contact). A mobile hamburger menu SHALL toggle an expandable mobile nav.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads
- **THEN** the site name "Sanctum Church" is visible
- **AND** all six navigation links are present

#### Scenario: Mobile menu toggles on click

- **WHEN** the hamburger button is clicked
- **THEN** the mobile navigation opens
- **AND** clicking a link closes the menu

### Requirement: Hero section with background image and CTA

The page SHALL display a full-height hero with a background image, dark overlay, heading "Needing Jesus Christ Together", and a CTA link "Save your spirit".

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the heading "Needing Jesus Christ Together" is visible
- **AND** the CTA link is present

### Requirement: Bible Study countdown section

The page SHALL display a "Bible Study" section with a countdown timer and an "Events Details" button.

#### Scenario: Countdown and CTA are visible

- **WHEN** the page loads
- **THEN** the "Bible Study" heading is visible
- **AND** countdown values are displayed
- **AND** the "Events Details" button is present

### Requirement: About section with image and text

The page SHALL display a split about section with an image (including play button) and text "Loving God, Loving Others and Serving the World".

#### Scenario: About content renders

- **WHEN** the page loads
- **THEN** the about heading and paragraphs are visible
- **AND** the about image is present

### Requirement: Services grid with four cards

The page SHALL display a "Giving light to someone" section with four service cards: I'm New Here, Care Ministries, Prayer Request, Podcasts.

#### Scenario: All service cards render

- **WHEN** the page loads
- **THEN** four service cards are rendered with unique titles and descriptions

### Requirement: Newsletter subscription section

The page SHALL display a parallax newsletter section with heading, description, email input, and submit button. Form submission SHALL be prevented (no navigation).

#### Scenario: Newsletter form renders and submits safely

- **WHEN** the page loads
- **THEN** the newsletter heading and email input are present
- **AND** form submission does not navigate away

### Requirement: Sermons section with video cards

The page SHALL display a "Watch our sermons" section with three sermon cards, each having a play button, title, and speaker name. A "Watch all sermons" CTA SHALL be present.

#### Scenario: Sermon cards render

- **WHEN** the page loads
- **THEN** three sermon cards are visible with titles and speakers
- **AND** play buttons are present for each

### Requirement: Testimonies section

The page SHALL display a "Testimonies" section with cards containing a user photo, quote, name, and role.

#### Scenario: Testimony cards render

- **WHEN** the page loads
- **THEN** testimony cards are present with unique quotes, names, and roles

### Requirement: Church Achievements counter section

The page SHALL display a "Church Achievements" section with three stat blocks: Churches, Members, Donations.

#### Scenario: Counter values render

- **WHEN** the page loads
- **THEN** three counter values and labels are visible

### Requirement: Events section with date badges

The page SHALL display an events section with a background image, "Our latest events" heading, and event entries with date badges.

#### Scenario: Event entries render

- **WHEN** the page loads
- **THEN** event titles and date badges are present
- **AND** the "View Events" CTA is visible

### Requirement: Blog section with cards

The page SHALL display a "Recent Blog" section with three blog cards showing date, author, comment count, and title.

#### Scenario: Blog cards render

- **WHEN** the page loads
- **THEN** three blog cards are rendered with unique titles

### Requirement: Footer with Component Dock link and contact info

The page SHALL display a dark footer with site name, Quick Links, Contact Information, social icons, copyright, and a "Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders all elements

- **WHEN** the page loads
- **THEN** the copyright line, Component Dock link, contact info, and social icons are present
