# Template: Accordion Twenty (UI Components & FAQ Showcase)

## Purpose

Recreation of ColorLib Accordion 20 (`https://colorlib.com/wp/template/accordion-20/`). A sleek, modern accordion and FAQ showcase featuring multi-level collapsible groups, search filtering, smooth animated expand/collapse transitions, rich content panels with icons and code snippets, and a fully responsive layout built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Primary Brand Color**: Emerald-600 (`#059669`), Hover Emerald-700 (`#047857`)
- **Secondary Accent**: Teal-500 (`#14b8a6`)
- **Backgrounds**: Page background `bg-gray-50` (`#f9fafb`), Card background `bg-white` (`#ffffff`), Hero gradient `bg-gradient-to-r from-emerald-900 to-teal-900` (`#064e3b` to `#134e4a`)
- **Text Colors**: Heading `text-gray-900` (`#111827`), Body `text-gray-600` (`#4b5563`), Muted `text-gray-400` (`#9ca3af`)
- **Borders & Dividers**: `border-gray-200` (`#e5e7eb`)
- **Radii**: Cards `rounded-xl`, Buttons `rounded-lg`, Badges `rounded-full`
- **Typography**: Font family Inter, system-ui, sans-serif

## Requirements & Gherkin Scenarios

### Requirement 1: Navigation & Header

- The app must display a professional sticky navigation bar with a brand logo, navigation links, and a "Get Started" or CTA button.
- **Scenario**: User views navigation
  - **Given** the user visits Accordion Twenty
  - **Then** the header shows the brand logo and navigation links
  - **And** the sticky bar remains at the top on scroll

### Requirement 2: Hero & Introduction Section

- The hero section must feature a compelling headline, subtitle, quick search input, and category filter pills.
- **Scenario**: User filters accordions by category
  - **Given** the hero search and filter bar is displayed
  - **When** the user clicks the "General" filter pill
  - **Then** only accordion items related to General are shown

### Requirement 3: Interactive Accordion Groups

- The main content must display categorized accordion sections with expandable panels supporting rich text, lists, and action buttons.
- **Scenario**: User expands an accordion panel
  - **Given** an accordion item is collapsed
  - **When** the user clicks the accordion header
  - **Then** the panel expands smoothly to reveal its content
  - **And** the chevron icon rotates 180 degrees

### Requirement 4: Feature Highlights / Statistics

- A statistics or feature highlight strip showing usage metrics, satisfaction rate, and component counts.
- **Scenario**: User inspects stats
  - **Given** the feature highlight banner is visible
  - **Then** metrics such as "100% Responsive", "Fast Animations", and "24/7 Support" are clearly rendered

### Requirement 5: Newsletter & CTA Section

- A call-to-action banner inviting users to subscribe for UI component updates.
- **Scenario**: User subscribes to newsletter
  - **Given** the newsletter input field is empty
  - **When** the user enters a valid email and clicks "Subscribe"
  - **Then** a success confirmation message is displayed

### Requirement 6: Footer

- A professional footer with category links, social icons, and the mandatory "Component Dock" attribution link (`https://www.componentdock.com/`).
- **Scenario**: User checks footer attribution
  - **Given** the page is scrolled to the bottom
  - **Then** the footer displays copyright information and a link to Component Dock

## Verification Checklist

- [ ] Spec validated with `npm run spec:validate`
- [ ] All sections match ColorLib Accordion 20 reference structure
- [ ] Design tokens (Emerald-600, gray-50, etc.) correctly applied via Tailwind v4 classes
- [ ] 100% test coverage maintained across all components
- [ ] Footer links https://www.componentdock.com/
