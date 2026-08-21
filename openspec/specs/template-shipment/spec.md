# Template: Shipment (Logistics & Transport)

## Purpose

Recreation of ColorLib **Logistic** (preview URL: https://preview.colorlib.com/theme/logistic/), built with Vite, React 19, Tailwind CSS 4, and TypeScript. A professional logistics, shipping, freight forwarding, and cargo transport website featuring hero slider, services grid, solutions overview, shipment quote calculator, client testimonials, and interactive contact/tracking sections.

## Design Tokens

- **Primary Brand**: `#f05423` (Logistic Orange / Vibrant Coral)
- **Secondary / Dark**: `#111111` (Charcoal Black / Dark Neutral)
- **Accent / Info**: `#00b4d8` (Ocean Blue)
- **Background**: `#ffffff` (White) and `#f8f9fa` (Light Gray Neutral)
- **Font Family**: Inter, sans-serif (system stack fallback)
- **Border Radius**: `0.375rem` (rounded-md) / `0.5rem` (rounded-lg)

## Gherkin Requirements & Scenarios

### Feature 1: Navigation & Header

As a visitor, I want to access primary sections and a free quote button.

- **Scenario**: Desktop Header Render
  - Given the user loads the Shipment homepage
  - Then the header displays the logo, navigation links (Home, Services, About, Blog, Contact), social icons, and "Get Free Quote" CTA button.

### Feature 2: Hero Section with Slider / Banner

As a visitor, I want to see prominent logistic messaging and calls-to-action.

- **Scenario**: Hero Carousel Display
  - Given the user views the hero banner
  - Then it shows heading "Give your business a flow", subheading "Transport quality and excellence to enhance your business", and "Our Services" action link with carousel navigation buttons.

### Feature 3: Services Grid

As a user, I want to explore core shipping options (Air Shipping, Logistic Service, Ground Shipping).

- **Scenario**: Services Grid Display
  - Given the user scrolls to the "Our Services" section
  - Then three primary shipping service cards appear with numbered headings (01. Air Shipping, 02. Logistic Service, 03. Ground Shipping) and descriptive summaries.

### Feature 4: Business Solutions & Features

As a customer, I want to learn about wide-ranging logistics solutions.

- **Scenario**: Solutions Section Render
  - Given the user views the solutions section
  - Then it displays "Tracking Is Easy" and "Multiple Warehouses" feature blocks with descriptions and a "Learn More" button.

### Feature 5: Shipment Quote Calculator Form

As a client, I want to request a custom shipping quote with cargo details and preferences.

- **Scenario**: Quote Request Form Submission
  - Given the user fills out the quote form with cargo type, origin, destination, dimensions, and contact info
  - Then clicking "Request Quote" validates the inputs and displays a success confirmation.

### Feature 6: Client Testimonial & Footer

As a visitor, I want to read client feedback and find company contact details and footer links.

- **Scenario**: Testimonial and Footer Render
  - Given the user scrolls to the bottom
  - Then client testimonials appear alongside the address, business hours, quick links, and the Component Dock footer attribution.

## Verification Checklist

- [ ] Spec validates successfully via `npm run spec:validate`
- [ ] 100% test coverage maintained
- [ ] Responsive design verified on mobile and desktop viewports
- [ ] Footer links https://www.componentdock.com/ present
