# Template: Bedrock

Recreation of ColorLib Bootstrap Footer 11 (https://colorlib.com/wp/template/bootstrap-footer-11/)

## Purpose

Bedrock is a multi-column footer template with a dark navy background, purple accent links, and a four-column layout containing brand info, latest news blog cards, quick links navigation, and contact details. Includes a centered hero section and a copyright bar with Component Dock attribution.

## Design Tokens

- Background: `#0d1824` (very dark navy)
- Accent/link: `#7f72e4` (purple)
- Text primary: `rgba(255,255,255,0.7)` (white 70%)
- Text muted: `rgba(255,255,255,0.6)` (white 60%)
- Icon muted: `rgba(255,255,255,0.4)` (white 40%)
- Copyright: `#999999` (gray)
- Footer heading underline: `#7f72e4` purple, 40px wide, 2px height
- Font: Poppins (Google Fonts, weights 300-800)
- Social icon bg: `#7f72e4` purple, white icons, 40x40 circle
- Hero section bg: `#f8f8f8` light gray

## Requirements

### Requirement: App renders correctly

The application SHALL render a hero section with heading and a footer component.

#### Scenario: Sets document title

- **WHEN** the App component mounts
- **THEN** the document title is "Bedrock — Footer Template"

#### Scenario: Renders hero heading

- **WHEN** the App component mounts
- **THEN** a heading with text "Footer #01" is visible in the main content area

#### Scenario: Renders footer

- **WHEN** the App component mounts
- **THEN** a semantic footer element with contentinfo role is present

### Requirement: Footer renders brand column

The footer SHALL display a brand section with name, description, and social icons.

#### Scenario: Renders brand heading

- **WHEN** the Footer renders
- **THEN** a heading with text "Bedrock" is displayed

#### Scenario: Renders brand description

- **WHEN** the Footer renders
- **THEN** a description paragraph containing "A small river named Duden" is visible

#### Scenario: Renders social media icons

- **WHEN** the Footer renders
- **THEN** links for Twitter, Facebook, and Instagram are displayed with accessible labels, target _blank, and rel noreferrer

### Requirement: Footer renders latest news column

The footer SHALL display two blog post cards with thumbnail, title, and metadata.

#### Scenario: Renders Latest News heading

- **WHEN** the Footer renders
- **THEN** a heading with text "Latest News" is displayed

#### Scenario: Renders two blog post cards

- **WHEN** the Footer renders
- **THEN** two blog post titles matching "Even the all-powerful" are present

#### Scenario: Renders blog post metadata

- **WHEN** the Footer renders
- **THEN** date, author, and comment count metadata are displayed for each post

### Requirement: Footer renders quick links column

The footer SHALL display a list of navigation links.

#### Scenario: Renders Quick Links heading and links

- **WHEN** the Footer renders
- **THEN** headings and links for Home, About, Services, Works, Blog, and Contact are displayed

### Requirement: Footer renders contact column

The footer SHALL display contact information with icons.

#### Scenario: Renders Have a Questions heading

- **WHEN** the Footer renders
- **THEN** a heading with text "Have a Questions?" is displayed

#### Scenario: Renders contact details

- **WHEN** the Footer renders
- **THEN** address, phone number, and email are displayed

### Requirement: Footer renders copyright with Component Dock

The footer SHALL display a copyright bar with Component Dock attribution.

#### Scenario: Renders copyright text

- **WHEN** the Footer renders
- **THEN** text containing "All rights reserved" is present

#### Scenario: Renders Component Dock link

- **WHEN** the Footer renders
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is displayed with target _blank and rel noreferrer

### Requirement: Footer has correct layout

The footer SHALL use a four-column responsive grid.

#### Scenario: Renders four-column grid

- **WHEN** the Footer renders
- **THEN** the grid container uses md:grid-cols-4 responsive layout

#### Scenario: Social icons have purple accent

- **WHEN** the Footer renders
- **THEN** social icon links have bg-accent and text-white classes

#### Scenario: Copyright has top border

- **WHEN** the Footer renders
- **THEN** the copyright section has a border-t border-white/10 top border

#### Scenario: Nav links have text styling

- **WHEN** the Footer renders
- **THEN** navigation links use text-footer-text color class
