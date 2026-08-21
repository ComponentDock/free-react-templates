# Shipment Template Tasks & Design Notes

## Overview

Recreation of ColorLib **Logistic** (`https://preview.colorlib.com/theme/logistic/`) under the new name **Shipment** (`apps/shipment`).

## Design & Layout Notes

- **Color Palette**: Vibrant logistic orange (`#f05423`), deep charcoal (`#111111`), light gray (`#f8f9fa`), and white.
- **Typography**: Clean sans-serif with high contrast for professional readability.
- **Components**:
  1. Header / Navbar with logo, links, social icons, and quote button.
  2. Hero Slider with background banner and call to action.
  3. Services Section (Air Shipping, Logistic Service, Ground Shipping with numbered indices).
  4. Solutions Section (Tracking, Warehouses).
  5. Shipment Control & Quote Request form with freight type checkboxes (Ocean, Air, Land).
  6. Testimonial carousel section.
  7. Footer with business hours, address, quick links, and Component Dock attribution.

## Implementation Tasks (for Implementer stream)

1. Initialize app folder `apps/shipment` using standard template scaffold.
2. Configure `public/CNAME` with `shipment.free.componentdock.com`.
3. Implement components and unit tests with 100% coverage.
4. Verify build, tests, and linter.
