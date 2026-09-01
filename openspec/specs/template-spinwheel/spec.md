# Specification: Spinwheel (Carousel 17)

Recreation of ColorLib Carousel 17 (`https://colorlib.com/wp/template/carousel-17/`) under the new name **Spinwheel**.

## Requirements

### Requirement 1: Testimonial Carousel Section

- **Scenario:** User views the carousel section
  - Given the Spinwheel application is loaded
  - Then a featured testimonial carousel should be visible with navigation controls (prev/next buttons and pagination dots)
  - And testimonials should display author name, role/company, avatar image, and feedback quote

### Requirement 2: Footer & Branding

- **Scenario:** User views the footer
  - Given the page is scrolled to the bottom
  - Then a footer should display copyright and a branded link to `https://www.componentdock.com/` ("Component Dock")
  - And no ColorLib branding or external attribution links should appear

### Requirement 3: Design Tokens & Styling

- **Scenario:** Responsive layout and styling
  - Given the application renders across viewports
  - Then Tailwind CSS styling with responsive utilities should provide a clean modern appearance
  - And typography and color palette should be consistent
