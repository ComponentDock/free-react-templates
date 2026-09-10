# Template: CoinWave (Cryptocurrency Landing Page)

## Purpose

Recreation of ColorLib "Bitcoin" — a cryptocurrency / bitcoin landing page template.

- **Source slug:** `bitcoin`
- **ColorLib page:** https://colorlib.com/wp/template/bitcoin/
- **Preview URL:** https://preview.colorlib.com/theme/bitcoin/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/coinwave`
- **Deploy:** `coinwave.free.componentdock.com`

## Requirements

### Requirement: Fixed header with navigation

Users SHALL see a fixed header with the CoinWave logo and navigation links.

#### Scenario: Header renders with nav links

- **WHEN** the user visits the CoinWave homepage
- **THEN** a logo "CoinWave" is visible in the header
- **AND** navigation links "Home", "Convert", "Feature", "Price", "Blog", "Pages" are present

#### Scenario: Header scroll effect

- **WHEN** the user is at the top of the page and scrolls down
- **THEN** the header background becomes semi-transparent dark

#### Scenario: Mobile navigation

- **WHEN** the user is on a mobile viewport and taps the hamburger toggle
- **THEN** a slide-in mobile navigation panel appears

### Requirement: Hero banner section

Users SHALL see a hero section with a prominent price display and CTA.

#### Scenario: Hero content displays

- **WHEN** the user visits the homepage
- **THEN** a label "Currently Purchase Rate" is visible
- **AND** a large price "$12,356" is displayed prominently
- **AND** a "Buy Bitcoin" call-to-action button is visible

### Requirement: Currency converter section

Users SHALL see a converter section that overlaps the banner.

#### Scenario: Converter form displays

- **WHEN** the user scrolls to the converter section
- **THEN** a heading "The Currency Converter" is visible
- **AND** input fields for BTC and USD values are visible

### Requirement: Services section

Users SHALL see 3 service cards describing Bitcoin features.

#### Scenario: Service cards display

- **WHEN** the user scrolls to the services section
- **THEN** 3 service cards are visible with titles "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", and "Send & Receive Bitcoin"

### Requirement: About section

Users SHALL see an about section with a dark background.

#### Scenario: About section layout

- **WHEN** the user scrolls to the about section
- **THEN** a heading "Exchange Bitcoin is not that tough Anymore" is visible
- **AND** descriptive text is shown

### Requirement: Features section

Users SHALL see 6 feature items in a grid.

#### Scenario: Feature grid displays

- **WHEN** the user scrolls to the features section
- **THEN** 6 feature items are displayed with titles including "Expert Technicians" and "Professional Service"

### Requirement: Stats section

Users SHALL see a stats section with a chart and CTA.

#### Scenario: Stats section displays

- **WHEN** the user scrolls to the stats section
- **THEN** a heading "Ups and Downs of Bitcoin (Realtime)" is visible
- **AND** a "View Details" button is present

### Requirement: Call to action section

Users SHALL see an orange gradient CTA section.

#### Scenario: CTA section displays

- **WHEN** the user scrolls to the call-to-action section
- **THEN** a heading "Huge Transaction in last Week" is visible
- **AND** a "Buy Bitcoin Now!" button is present

### Requirement: Pricing section

Users SHALL see 3 pricing cards.

#### Scenario: Pricing cards display

- **WHEN** the user scrolls to the pricing section
- **THEN** 3 pricing cards are shown with titles "01 Ripple", "01 Ethereum", and "01 Bitcoin"

### Requirement: Blog section

Users SHALL see 3 blog cards.

#### Scenario: Blog cards display

- **WHEN** the user scrolls to the blog section
- **THEN** 3 blog cards are shown with author names

### Requirement: Footer with Component Dock link

Users SHALL see a footer with newsletter, social icons, and Component Dock attribution.

#### Scenario: Footer layout

- **WHEN** the user scrolls to the footer
- **THEN** a "Top Products" column is visible
- **AND** a "Newsletter" section with email input is present
- **AND** social media icons are present
- **AND** a link to "https://www.componentdock.com/" branded as "Component Dock" is present
