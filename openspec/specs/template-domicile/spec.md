## Purpose

Domicile is a real estate property listing landing page that recreates the ColorLib Homespace design (https://colorlib.com/wp/template/homespace/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

## Requirements

### Requirement: Complete page composition

The app SHALL render all sections: TopBar, Navbar, Hero, SearchFilter, Properties, Services, Blog, and Footer.

#### Scenario: Full page renders all sections

- **WHEN** the app loads
- **THEN** all section headings are present in the DOM

### Requirement: Brand identity

The app SHALL display "Domicile" as the brand name with a red dot accent in navbar and footer.

#### Scenario: Brand name visible

- **WHEN** the page renders
- **THEN** "Domicile" appears in navbar and footer

### Requirement: Property listings

The Properties section SHALL display 6 property cards with title, location, price, beds, baths, and sqft.

#### Scenario: All properties rendered

- **WHEN** the page renders
- **THEN** all 6 property cards are visible with prices

### Requirement: Search filters

The SearchFilter SHALL provide dropdown filters for Lot Area, Bedrooms, Bathrooms, and Price Range.

#### Scenario: Filter dropdowns

- **WHEN** the page renders
- **THEN** all 4 filter dropdowns are visible

### Requirement: Footer Component Dock link

The footer SHALL link to https://www.componentdock.com/ with target="_blank".

#### Scenario: Component Dock link

- **WHEN** the page renders
- **THEN** a link to componentdock.com with target="_blank" is present

### Requirement: 100% test coverage

All source files under src/ (excluding main.tsx, test files, CSS, and configs) SHALL have 100% coverage.

#### Scenario: Coverage gate passes

- **WHEN** verify-app.sh domicile runs
- **THEN** coverage is 100%

### Requirement: Per-app verification gate

The app SHALL pass typecheck, lint, tests with 100% coverage, and build.

#### Scenario: Verification gate

- **WHEN** scripts/verify-app.sh domicile runs
- **THEN** all steps pass
