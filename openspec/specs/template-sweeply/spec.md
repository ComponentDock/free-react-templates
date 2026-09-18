## Purpose

Sweeply is a cleaning services landing page template that recreates the ColorLib Cleanex design (https://colorlib.com/wp/template/cleanex/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app. The template serves cleaning businesses with a hero, booking form, service showcase, pricing, testimonials, and blog sections.

## Requirements

### Requirement: Complete page composition

The app SHALL render all 14 sections in source order: TopBar, Navbar, Hero, About, Features, Stats, Industries, Services, WorkSteps, Testimonials, Pricing, CallToAction, Blog, and Footer.

#### Scenario: Full page renders all sections

- **WHEN** the app loads
- **THEN** all section headings are present in the DOM (Introducing Sweeply, About Company, Why Choose Us?, Industries We Serve, Our Services, How it Works, Testimonial, Pricing, Our Blog)

### Requirement: Brand identity

The app SHALL display "Sweeply" as the brand name in the navbar and footer, using the Roboto font and brand blue (#225ae1) primary color.

#### Scenario: Brand name visible

- **WHEN** the page renders
- **THEN** the text "Sweeply" appears in both the navbar and footer

### Requirement: Navigation

The navbar SHALL contain links to Home, About, Pricing, Services, Blog, and Contact, plus a "Request A Quote" CTA button with yellow accent (#fedd32).

#### Scenario: Nav links present

- **WHEN** the page renders
- **THEN** all 6 navigation links and the CTA button are visible

### Requirement: Hero section

The hero SHALL display "A Clean Home is A Happy Home" as the main heading with a "Request A Quote" CTA button.

#### Scenario: Hero content

- **WHEN** the page renders
- **THEN** the h1 heading and CTA button are present

### Requirement: Booking form

The About section SHALL contain a "Book A Service" form with first name, last name, service dropdown, phone, date, time fields, and a "Submit Details" button. Form submission SHALL be prevented (no page reload).

#### Scenario: Form renders all fields

- **WHEN** the page renders
- **THEN** all form fields and the submit button are visible

#### Scenario: Form submission prevented

- **WHEN** the user clicks Submit Details
- **THEN** the page does not reload

### Requirement: Service cards

The Services section SHALL display 6 cleaning service cards (Residential, Commercial, Construction, Windows, Carpet, Furniture) each showing "Starting from $50".

#### Scenario: All services rendered

- **WHEN** the page renders
- **THEN** all 6 service titles and prices are visible

### Requirement: Pricing plans

The Pricing section SHALL display 4 plans: Basic ($29), Standard ($59), Premium ($79, highlighted), and Ultimate ($89.50).

#### Scenario: All plans rendered

- **WHEN** the page renders
- **THEN** all 4 plan names and prices are visible

### Requirement: Footer Component Dock link

The footer SHALL link to https://www.componentdock.com/ with the text "Component Dock" and open in a new tab.

#### Scenario: Component Dock link

- **WHEN** the page renders
- **THEN** a link to componentdock.com with target="_blank" is present in the footer

### Requirement: 100% test coverage

All source files under src/ (excluding main.tsx, test files, CSS, and configs) SHALL have 100% line, function, branch, and statement coverage.

#### Scenario: Coverage gate passes

- **WHEN** verify-app.sh sweeply runs
- **THEN** coverage is 100% across all metrics

### Requirement: Per-app verification gate

The app SHALL pass typecheck, lint, tests with 100% coverage, and build without errors.

#### Scenario: Verification gate

- **WHEN** scripts/verify-app.sh sweeply runs
- **THEN** all steps (typecheck, lint, test, build) pass

### Requirement: Lockfile registration

The app workspace SHALL be registered in the root package-lock.json.

#### Scenario: Lockfile contains workspace

- **WHEN** npm install runs at repo root
- **THEN** grep -c "free-react-templates/sweeply" package-lock.json returns >= 1

### Requirement: CNAME and homepage

The app SHALL have public/CNAME containing sweeply.free.componentdock.com and package.json "homepage" set to https://sweeply.free.componentdock.com.

#### Scenario: CNAME file

- **WHEN** the app is deployed
- **THEN** public/CNAME contains the correct domain

#### Scenario: Homepage field

- **WHEN** package.json is inspected
- **THEN** "homepage" is set to the correct URL
