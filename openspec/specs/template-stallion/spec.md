# Template: Stallion (Gym & Fitness Landing)

## Purpose

Recreation of ColorLib **Fitness** — a gym/fitness landing page with hero banner,
top courses carousel, CTA banner, features, BMI calculator, image gallery,
testimonials, brand logos, and footer CTA.

- **Source slug:** `fitness`
- **Preview URL:** `https://preview.colorlib.com/theme/fitness/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/fitness-free-template.jpg`

## Requirements

### Requirement: Page renders all sections

The Stallion template SHALL render a header with navigation, hero banner, top courses, CTA banner, features, BMI calculator, gallery, testimonials, brands, final CTA, and footer.

#### Scenario: Header and navigation visible

- **WHEN** the Stallion app loads
- **THEN** the header contains a logo, email, phone number, and navigation links (Home, About, Courses, Trainers, Gallery, Contact)

#### Scenario: Hero banner visible

- **WHEN** the Stallion app loads
- **THEN** the hero section displays "Shape your" and "Perfect body" headings with a "Become a Member" button

#### Scenario: Course cards visible

- **WHEN** the Stallion app loads
- **THEN** four course cards are displayed with titles (Target Specific Muscle, Weightlifting, Flex Your Muscle, Cardio Blast) and prices ($275, $200, $225, $180)

#### Scenario: CTA banner visible

- **WHEN** the Stallion app loads
- **THEN** a "Get into shape now" heading and "Book Now" button are visible

#### Scenario: Features visible

- **WHEN** the Stallion app loads
- **THEN** three feature cards are displayed (Smart Security, Unlimited Colors, Endless Support)

#### Scenario: BMI calculator visible

- **WHEN** the Stallion app loads
- **THEN** a BMI calculator form with height and weight inputs and a "Calculate" button is visible

#### Scenario: Gallery visible

- **WHEN** the Stallion app loads
- **THEN** six gallery images are displayed

#### Scenario: Testimonials visible

- **WHEN** the Stallion app loads
- **THEN** three testimonial cards with names, roles, and quotes are displayed

#### Scenario: Brands visible

- **WHEN** the Stallion app loads
- **THEN** five brand placeholders are displayed

#### Scenario: Final CTA visible

- **WHEN** the Stallion app loads
- **THEN** an "It's never late to start" heading and "Become a Member" button are visible

#### Scenario: Footer visible

- **WHEN** the Stallion app loads
- **THEN** the footer contains About Us, Contact Us, Newsletter sections and a link to "https://www.componentdock.com/" labeled "Component Dock"

### Requirement: BMI calculator computes result

The BMI calculator SHALL compute and display the BMI when valid height and weight are submitted.

#### Scenario: Valid BMI calculation

- **WHEN** the user enters height "70" inches and weight "170" lbs
- **AND** clicks "Calculate"
- **THEN** a BMI result of "24.4" is displayed

#### Scenario: Invalid inputs show no result

- **WHEN** the user enters height "0" and weight "0"
- **AND** submits the form
- **THEN** no BMI result is displayed

#### Scenario: Partial invalid inputs show no result

- **WHEN** the user enters height "70" and weight "0"
- **AND** submits the form
- **THEN** no BMI result is displayed

### Requirement: Mobile navigation toggle

The header SHALL support a mobile navigation toggle that shows/hides the mobile menu.

#### Scenario: Toggle mobile menu

- **WHEN** the user clicks the mobile menu button
- **THEN** the mobile navigation menu becomes visible
- **AND** the button label changes to "Close menu"

#### Scenario: Close mobile menu on link click

- **WHEN** the mobile menu is open
- **AND** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Footer links to Component Dock

The footer SHALL include a link to the Component Dock website.

#### Scenario: Component Dock link present

- **WHEN** the footer renders
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is present

### Requirement: Document title

The app SHALL set the document title on load.

#### Scenario: Title set on mount

- **WHEN** the Stallion app loads
- **THEN** the document title is "Stallion — Gym & Fitness Template"
