# Template: CarouselBay (UI Carousel / Showcase)

## Purpose

Recreation of ColorLib **carousel-17** (`https://colorlib.com/wp/template/carousel-17/`), implemented as a modern React 19 + TypeScript + Tailwind CSS 4 single-page template (`@free-react-templates/carouselbay`).

## Requirements

### Requirement: Responsive Navigation Bar

Users SHALL see a navigation bar with brand logo, nav links, and CTA button.

#### Scenario: Navigation Bar Rendering

- **WHEN** the user views the CarouselBay homepage
- **THEN** a sticky navigation bar is visible with brand name "CarouselBay", navigation links, and a "Get Started" button.

### Requirement: Hero Carousel Section

Users SHALL see an interactive hero carousel showcasing featured slides.

#### Scenario: Hero Slider Interaction

- **WHEN** the hero section is displayed and the user interacts with navigation controls
- **THEN** featured slides transition smoothly with bold typography, descriptions, and call-to-action buttons.

### Requirement: Features Grid

Users SHALL see core platform offerings in a multi-column card grid.

#### Scenario: Feature Cards Display

- **WHEN** the user scrolls to the Features section
- **THEN** cards load with icons, titles, and descriptions.

### Requirement: Showcase Carousel

Users SHALL see showcase items displayed in an interactive carousel format.

#### Scenario: Showcase Carousel Navigation

- **WHEN** the showcase carousel section is visible and controls are clicked
- **THEN** new showcase items display with smooth animation.

### Requirement: Testimonials Section

Users SHALL see customer testimonials in a carousel layout.

#### Scenario: Testimonial Cards Render

- **WHEN** the testimonials section is reached
- **THEN** quotes, author avatars, and details render correctly.

### Requirement: Footer with Component Dock Link

Users SHALL see footer navigation and the mandatory Component Dock link.

#### Scenario: Footer Component Dock Branding

- **WHEN** the user scrolls to the footer
- **THEN** a prominent link to "Component Dock" (`https://www.componentdock.com/`) is present.
