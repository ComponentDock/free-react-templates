# Template: Vellum (Accordion / FAQ Template)

## Purpose

- Recreation of ColorLib **Accordion 16** (`https://colorlib.com/wp/template/accordion-16/`).
- Preview URL: `https://colorlib.com/wp/template/accordion-16/` (Live preview endpoint returned 404; fully designed and specified based on the canonical ColorLib screenshot `https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-16.jpg`).
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).

## Design Tokens

- Brand Primary: Deep Navy Blue (`#1e293b` / `bg-slate-800` or `#0f172a`), Accent Indigo (`#4f46e5` / `bg-indigo-600`), Soft Background (`#f8fafc`).
- Typography: Sans-serif (Inter / System font stack). Clean headings with generous line-height.
- Components: Rounded cards (`rounded-xl`), soft shadows (`shadow-sm`), interactive expanding accordion rows with chevron rotation indicators, primary action buttons with hover states.

## Sections

1. **Navbar**: Brand logo ("Vellum"), navigation links (Features, FAQ, Resources, Contact), and a "Get Started" CTA button.
2. **Hero Section**: Bold headline with subtext introducing the modern accordion & content management interface, supported by a hero illustration/placeholder and primary/secondary call-to-action buttons.
3. **Features Overview**: Three-column grid highlighting key benefits (Fast Navigation, Responsive Design, Customizable UI) with icons and brief descriptions.
4. **Interactive Accordion / FAQ Section**: Expandable vertical accordion list featuring common questions and detailed collapsible answers with smooth interactive toggles.
5. **Call to Action Banner**: Dark-themed banner encouraging users to try out the platform with a newsletter subscription or primary signup button.
6. **Footer**: Clean footer links, copyright notice, and required mandatory attribution link to `https://www.componentdock.com/` ("Component Dock").

## Gherkin Requirements & Scenarios

### Feature: Navbar Navigation

- Scenario: User views the navigation bar
  - Given the Vellum application is loaded
  - Then the navbar displays the logo "Vellum" and links for Features, FAQ, Resources, and Contact
  - And a "Get Started" button is visible

### Feature: Interactive Accordion Sections

- Scenario: User expands an accordion item
  - Given the FAQ / Accordion section is visible
  - When the user clicks on an accordion header
  - Then the corresponding accordion content expands smoothly and the chevron icon rotates

### Feature: Footer Attribution

- Scenario: User scrolls to the footer
  - Given the page footer is rendered
  - Then it contains a link pointing to `https://www.componentdock.com/` with anchor text "Component Dock"
