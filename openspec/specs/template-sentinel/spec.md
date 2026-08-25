# Template: Sentinel (Business)

## Purpose

Recreation of ColorLib **Victor** (`https://colorlib.com/wp/template/victor/`), preview URL: `https://preview.colorlib.com/theme/victor/`. Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design Tokens

- **Font Family**: `DM Sans`, sans-serif
- **Primary Color**: `#FF6D21` (Orange accent / buttons)
- **Header / Footer Gradient**: `#454e6d` to `#232f55`
- **Body Text**: `#454E6D` / `#232F55`
- **Section Background**: `#F8FAFC` (`gray-bg`)

## Sections & Gherkin Requirements

### 1. Navbar

- **Requirement**: The navbar must be fixed/transparent at the top, displaying the logo, menu links (Home, About, Services, Portfolio, Blog, Contact), a contact phone number button, and a "Get Free Consultant" CTA.
- **Scenario**: User views the top of the page
  - Given the user is on the Sentinel homepage
  - Then the navbar should display navigation links and the consultation CTA

### 2. Hero

- **Requirement**: The hero section must display a prominent headline ("Get the help you need, every step of the way"), description text, "Get Started" action button, and a hero illustration shape.
- **Scenario**: User lands on the homepage
  - Given the user loads Sentinel
  - Then the hero section displays the main headline and "Get Started" button

### 3. Clients / Features

- **Requirement**: Three client/value cards displaying key metrics or benefits ("Happier customers", "Faster growth", "Connected workflow") with image illustrations and descriptions.
- **Scenario**: User scrolls past the hero
  - Given the user views the client feature cards
  - Then three distinct benefit cards are rendered in a responsive grid

### 4. ProjectUs / Accordion Services

- **Requirement**: A section titled "Flexible support to suit your business needs" with an introductory paragraph, feature image, and an interactive accordion for service/process steps.
- **Scenario**: User interacts with the accordion
  - Given the user clicks an accordion item
  - Then the corresponding body text expands or collapses smoothly

### 5. Footer

- **Requirement**: A dark gradient footer with links, contact details, and copyright notice linking to `https://www.componentdock.com/`.
- **Scenario**: User scrolls to the bottom
  - Given the user reaches the footer
  - Then the footer displays navigation links and the Component Dock link

## Verification Checklist

- [ ] TypeScript strict check passes
- [ ] Lint check passes
- [ ] Vitest unit tests pass with 100% coverage
- [ ] Build succeeds without errors
- [ ] Footer links to https://www.componentdock.com/
