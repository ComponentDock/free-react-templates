# Template: Launchpad (Business / SaaS Landing)

## Purpose

Recreation of ColorLib **Startright** (`https://colorlib.com/wp/template/startright/`), preview URL: `https://preview.colorlib.com/theme/startright/`. Stack: Vite, React 19, Tailwind CSS 4, TypeScript.

## Design Tokens

- **Primary Color**: `#f2ad5f` (Warm Amber)
- **Secondary Color**: `#10495c` (Dark Teal / Navy)
- **Neutral Light**: `#f8f9fa`
- **Neutral Dark**: `#212529`
- **Font Family**: `"Poppins", sans-serif`
- **Button Radius**: Rounded pill / 4px / standard button styling with hover states.

## Sections & Gherkin Requirements

### 1. Navigation Bar

- **Requirement**: The navbar must display the brand logo ("Launchpad"), navigation links (Home, Solutions, Plans & Pricing, Why Us, Contact Us), and remain sticky or accessible.
- **Scenario**: User views the header
  - Given the user loads the page
  - When they look at the top navigation
  - Then they see the "Launchpad" brand and nav items linking to page sections.

### 2. Hero Section

- **Requirement**: The hero section displays a compelling headline ("A big business starts small"), description, "Get started" call-to-action button, and a hero illustration.
- **Scenario**: User lands on the page
  - Given the user views the hero section
  - When they click "Get started"
  - Then it triggers the action or smooth-scrolls to pricing/features.

### 3. Social Proof / Partners

- **Requirement**: Display an "As seen on" section with partner/brand logos.
- **Scenario**: User scrolls past the hero
  - Given the user views the logos section
  - When they inspect partner logos
  - Then they see partner brand placeholders.

### 4. Value Proposition

- **Requirement**: "A better way to run your business" section with explanatory text and feature highlights.
- **Scenario**: User reads about business efficiency
  - Given the user views the value proposition section
  - Then they see feature highlights and a secondary CTA.

### 5. Feature Spotlight & Testimonial

- **Requirement**: Highlight product productivity with a customer testimonial quote and author attribution.
- **Scenario**: User reviews customer feedback
  - Given the user reads the testimonial block
  - Then they see quotes from corporate users like XYZ Inc.

### 6. Stats Counter

- **Requirement**: Display key statistics: Reviews (244,982+), Downloads (2,488,938+), Employees (1,335+).
- **Scenario**: User views metrics
  - Given the user checks company stats
  - When they view the counter section
  - Then accurate statistical values are presented.

### 7. Features Grid

- **Requirement**: A 6-card grid detailing core features: Easy to use, Fast and Secure, Robust and Intuitive, etc. with icons and descriptions.
- **Scenario**: User explores features
  - Given the user scrolls to the features grid
  - When they inspect the cards
  - Then they see 6 structured feature items with distinct icons.

### 8. Footer

- **Requirement**: Multi-column footer containing Help, About, Support links, a newsletter subscription form, and required attribution linking to `https://www.componentdock.com/`.
- **Scenario**: User reaches the bottom of the page
  - Given the user views the footer
  - When they inspect footer links and subscription form
  - Then they can submit the newsletter form and see the Component Dock link.

## Verification Checklist

- [ ] Navigation links function correctly
- [ ] Hero CTA is interactive
- [ ] Stats counters display accurate metrics
- [ ] 6-card features grid renders properly
- [ ] Footer contains working newsletter input and Component Dock attribution
- [ ] 100% test coverage and passing build/lint checks
