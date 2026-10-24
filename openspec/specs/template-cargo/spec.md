# Template: Cargo (Logistics & Freight Services)
<!-- prep-status: shipped-as=convey -->
> **SHIPPED-UNDER** — the ColorLib `logistic` design this prep describes already
> ships as `apps/convey` (<https://convey.free.componentdock.com>).
> Do not scaffold `apps/cargo`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-convey/spec.md`.

## Purpose

Recreation of ColorLib "Logistic" free website template (`https://colorlib.com/wp/template/logistic/`), previewed at `https://preview.colorlib.com/theme/logistic/`. Built as a modern, high-performance React 19 + Tailwind CSS v4 single-page application for shipping, logistics, freight forwarding, and supply chain businesses.

## Design Tokens (Extracted from Live Preview)

- **Primary Brand Color**: Crimson Red `#F02930` (used for primary buttons, badges, highlights, and icons)
- **Secondary / Deep Navy**: Deep Blue `#1f2b7b` / `#232F55` (used for headers, hero overlays, dark backgrounds, and footer)
- **Neutral Backgrounds**: Light Gray `#f9f9ff` and pure White `#fff`
- **Text Colors**: Dark Charcoal `#222` / `#4c4c4c` for body text, muted gray `#999999` for metadata
- **Font Family**: `"Raleway", sans-serif`
- **Border Radius**: Subtle rounded corners (`rounded-md`, `rounded-lg`)

## Requirements

### Feature 1: Hero Banner & Navigation

#### Scenario: Feature 1: Hero Banner & Navigation

- **As a** visitor looking for shipping services,
- **I want** to see a professional header, navigation menu, and a compelling hero banner with a clear call-to-action,
- **So that** I understand the logistics value proposition instantly.
**Scenario 1: Navigation and Hero Display**
- **GIVEN** the user loads the Cargo home page,
- **WHEN** the page renders,
- **THEN** the header displays logo ("Cargo"), navigation links (Home, Services, About, Tracking, Contact), and a "Request Quote" button,
- **AND** the hero section displays the heading "Give your business a flow", subtitle, and primary action buttons

### Feature 2: Services Section

#### Scenario: Feature 2: Services Section

- **As a** business owner,
- **I want** to explore the various shipping and logistics services offered (Air Shipping, Ground Shipping, Sea Freight, Warehousing),
- **So that** I can choose the right transport solution.
**Scenario 2: Displaying Core Services**
- **GIVEN** the user scrolls to the Services section,
- **WHEN** the section is visible,
- **AND** cards for Air Shipping, Logistic Service, and Ground Shipping are displayed with icons, descriptions, and read-more links

### Feature 3: Shipment Tracking Feature

#### Scenario: Feature 3: Shipment Tracking Feature

- **As a** customer with an active shipment,
- **I want** to enter a tracking code and check status,
- **So that** I can monitor my delivery in real time.
**Scenario 3: Tracking Interactive Widget**
- **GIVEN** the user views the Tracking Is Easy section,
- **WHEN** the user enters a sample tracking code (e.g. `CRG-987654`) and clicks "Track",
- **THEN** a shipment status timeline or status modal appears showing current transit progress

### Feature 4: Request Quote Form & Contact

#### Scenario: Feature 4: Request Quote Form & Contact

- **As a** potential client,
- **I want** to fill out a quote request form with shipment details,
- **So that** I can receive pricing information.
**Scenario 4: Submitting Quote Form**
- **GIVEN** the user fills out the Get Free Quote form with name, email, origin, destination, and weight,
- **WHEN** the user clicks "Request Quote",
- **THEN** a success confirmation message is displayed

## Verification checklist

- [ ] Renders correctly at mobile, tablet, and desktop viewports.
- [ ] All navigation links and buttons are interactive.
- [ ] Tracking form provides working interactive feedback.
- [ ] Quote form handles validation and success state.
- [ ] Footer includes copyright and required link to `https://www.componentdock.com/`.
- [ ] 100% test coverage and passing quality gates.
