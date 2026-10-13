## Purpose

Spinwheel is a single-page template built around a testimonial carousel. It recreates the ColorLib **Carousel 17** design (https://colorlib.com/wp/template/carousel-17/).

## Requirements

### Requirement: Testimonial Carousel Section

The template SHALL render a featured testimonial carousel with navigation controls.

#### Scenario: Testimonials are visible with controls

- **GIVEN** the user opens the Spinwheel application
- **WHEN** the testimonial carousel renders
- **THEN** testimonial cards show the author name, avatar and feedback quote
- **AND** navigation controls are present for moving between testimonials

### Requirement: Footer & Branding

The template SHALL render a branded footer that links to Component Dock and carries no external template attribution.

#### Scenario: Footer shows Component Dock branding

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer renders
- **THEN** it links to Component Dock (https://www.componentdock.com/)
- **AND** it contains no ColorLib or external template attribution
