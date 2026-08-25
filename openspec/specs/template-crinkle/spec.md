# Template: Crinkle (UI & Component Library / Accordions)

## Purpose

- **Recreation of**: ColorLib `accordion-04` (`https://colorlib.com/wp/template/accordion-04/`)
- **Preview URL**: `https://colorlib.com/wp/template/accordion-04/` (fallback to screenshot analysis as live preview returned 404)
- **Stack**: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons, `@free-react-templates/ui`
- **Design Category**: Interactive UI Components / Accordions / FAQ Showcase

## Design Tokens & Visual Style

- **Colors**:
  - Primary / Accent: Deep Indigo / Violet (`#4f46e5`, `indigo-600`)
  - Neutral dark: Slate 900 (`#0f172a`)
  - Neutral light: Slate 50 (`#f8fafc`)
  - Border / Card background: White (`#ffffff`) with subtle slate shadows (`shadow-sm`, `border border-slate-200`)
- **Typography**:
  - Font family: Inter / system sans-serif (`font-sans`)
  - Headings: Bold, clean sans-serif with high contrast (`text-slate-900`)
- **Radii & Buttons**:
  - Rounded corners: `rounded-xl` for accordion cards, `rounded-lg` for buttons/inputs
  - Interactive states: Smooth accordion expand/collapse transitions with chevron rotation, focus rings (`focus-visible:ring-2 focus-visible:ring-indigo-500`)
- **Section Layout (Top to Bottom)**:
  1. **Navbar**: Brand logo ("Crinkle"), navigation links (Features, FAQ, Components, Pricing), and CTA button.
  2. **Hero Section**: Bold headline ("Advanced Interactive Accordions & UI Components"), subtitle, primary action button ("Explore Components"), and a preview visual.
  3. **Accordion Showcase Section**: Multiple interactive accordion categories (General FAQs, Technical Specs, Customization Guide, Billing & Licensing) with smooth toggle behavior, rich content, and clear visual hierarchy.
  4. **Feature Grid**: 3-column layout highlighting key features (Accessible, Fully Customizable, Smooth Animations, Lightweight).
  5. **CTA Banner**: Call-to-action block encouraging developers to integrate the accordion library.
  6. **Footer**: Copyright, navigation links, and mandatory "Made with Component Dock" attribution (`https://www.componentdock.com/`).

## Requirements & Gherkin Scenarios

### Feature: Navbar

- Scenario: Displays brand name and navigation links
  - Given the user loads the Crinkle template
  - When the Navbar renders
  - Then it displays the brand logo "Crinkle", navigation links, and a CTA button

### Feature: Hero Section

- Scenario: Displays headline and CTA
  - Given the user views the Hero section
  - Then it shows the main title, subtitle, and an "Explore Components" button

### Feature: Interactive Accordions

- Scenario: Expands and collapses accordion panels
  - Given the user views the Accordion Showcase
  - When the user clicks an accordion header
  - Then the panel expands smoothly to reveal content and the chevron rotates

### Feature: Feature Grid

- Scenario: Displays feature cards
  - Given the user scrolls to the feature section
  - Then it shows 4 feature cards with icons and descriptions

### Feature: CTA Banner

- Scenario: Displays call to action
  - Given the user reaches the CTA banner
  - Then it presents a compelling prompt with a primary button

### Feature: Footer

- Scenario: Displays mandatory footer attribution
  - Given the user scrolls to the footer
  - Then it shows copyright information and a link to https://www.componentdock.com/ as "Component Dock"

## Verification Checklist

- [ ] Spec validation passes (`npm run spec:validate`)
- [ ] Per-app gate passes (`scripts/verify-app.sh crinkle`)
- [ ] 100% test coverage maintained on all new components
- [ ] Mandatory Component Dock footer attribution present
- [ ] CNAME and homepage configured correctly (`crinkle.free.componentdock.com`)
