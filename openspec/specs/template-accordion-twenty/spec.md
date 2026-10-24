# Template: Accordion Twenty (UI Components & FAQ Showcase)
<!-- prep-status: shipped-as=jade -->
> **SHIPPED-UNDER** — the ColorLib `accordion-20` design this prep describes already
> ships as `apps/jade` (<https://jade.free.componentdock.com>).
> Do not scaffold `apps/accordion-twenty`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-jade/spec.md`.

## Purpose

Recreation of ColorLib Accordion 20 (`https://colorlib.com/wp/template/accordion-20/`). A sleek, modern accordion and FAQ showcase featuring multi-level collapsible groups, search filtering, smooth animated expand/collapse transitions, rich content panels with icons and code snippets, and a fully responsive layout built with React 19, Tailwind CSS 4, and TypeScript.
- **Source design:** ColorLib "Accordion 20" — https://colorlib.com/wp/template/accordion-20/

## Design Tokens

- **Primary Brand Color**: Emerald-600 (`#059669`), Hover Emerald-700 (`#047857`)
- **Secondary Accent**: Teal-500 (`#14b8a6`)
- **Backgrounds**: Page background `bg-gray-50` (`#f9fafb`), Card background `bg-white` (`#ffffff`), Hero gradient `bg-gradient-to-r from-emerald-900 to-teal-900` (`#064e3b` to `#134e4a`)
- **Text Colors**: Heading `text-gray-900` (`#111827`), Body `text-gray-600` (`#4b5563`), Muted `text-gray-400` (`#9ca3af`)
- **Borders & Dividers**: `border-gray-200` (`#e5e7eb`)
- **Radii**: Cards `rounded-xl`, Buttons `rounded-lg`, Badges `rounded-full`
- **Typography**: Font family Inter, system-ui, sans-serif

## Requirements

### Requirement 1: Navigation & Header

- The app must display a professional sticky navigation bar with a brand logo, navigation links, and a "Get Started" or CTA button.

#### Scenario: User views navigation

- **GIVEN** the user visits Accordion Twenty
- **THEN** the header shows the brand logo and navigation links
- **AND** the sticky bar remains at the top on scroll

### Requirement 2: Hero & Introduction Section

- The hero section must feature a compelling headline, subtitle, quick search input, and category filter pills.

#### Scenario: User filters accordions by category

- **GIVEN** the hero search and filter bar is displayed
- **WHEN** the user clicks the "General" filter pill
- **THEN** only accordion items related to General are shown

### Requirement 3: Interactive Accordion Groups

- The main content must display categorized accordion sections with expandable panels supporting rich text, lists, and action buttons.

#### Scenario: User expands an accordion panel

- **GIVEN** an accordion item is collapsed
- **WHEN** the user clicks the accordion header
- **THEN** the panel expands smoothly to reveal its content
- **AND** the chevron icon rotates 180 degrees

### Requirement 4: Feature Highlights / Statistics

- A statistics or feature highlight strip showing usage metrics, satisfaction rate, and component counts.

#### Scenario: User inspects stats

- **GIVEN** the feature highlight banner is visible
- **THEN** metrics such as "100% Responsive", "Fast Animations", and "24/7 Support" are clearly rendered

### Requirement 5: Newsletter & CTA Section

- A call-to-action banner inviting users to subscribe for UI component updates.

#### Scenario: User subscribes to newsletter

- **GIVEN** the newsletter input field is empty
- **WHEN** the user enters a valid email and clicks "Subscribe"
- **THEN** a success confirmation message is displayed

### Requirement 6: Footer

- A professional footer with category links, social icons, and the mandatory "Component Dock" attribution link (`https://www.componentdock.com/`).

#### Scenario: User checks footer attribution

- **GIVEN** the page is scrolled to the bottom
- **THEN** the footer displays copyright information and a link to Component Dock

## Verification checklist

- [ ] Spec validated with `npm run spec:validate`
- [ ] All sections match ColorLib Accordion 20 reference structure
- [ ] Design tokens (Emerald-600, gray-50, etc.) correctly applied via Tailwind v4 classes
- [ ] 100% test coverage maintained across all components
- [ ] Footer links https://www.componentdock.com/
- [ ] Navigation & Header — the header shows the brand logo and navigation links
- [ ] Hero & Introduction Section — only accordion items related to General are shown
- [ ] Interactive Accordion Groups — the panel expands smoothly to reveal its content
- [ ] Feature Highlights / Statistics — metrics such as "100% Responsive", "Fast Animations", and "24/7 Support" are clearly rendered
- [ ] Newsletter & CTA Section — a success confirmation message is displayed

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bac/accordion-20/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#059669` — nearest `#0056b3` (d=98)
- `#047857` — nearest `#0056b3` (d=98)
- `#14b8a6` — nearest `#0056b3` (d=101)
- `#064e3b` — nearest `#0056b3` (d=120)
- `#134e4a` — nearest `#0056b3` (d=107)
<!-- live-palette-unverified:end -->
