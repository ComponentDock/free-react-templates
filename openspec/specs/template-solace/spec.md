# Template: Solace (Hospitality & Hotel Booking)

## Purpose

- Recreation of ColorLib **Unwind** (`https://colorlib.com/wp/template/unwind/`).
- Preview URL: `https://preview.colorlib.com/theme/unwind/`
- Tech Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict).

## Requirements

### Requirement: Navigation and Hero Display

The application SHALL display a sticky navigation bar with brand logo and links, and a hero banner with title and CTA buttons.

#### Scenario: Navigation and Hero Display

- **WHEN** I load the Solace home page
- **THEN** I should see the sticky navigation bar with brand logo and links (Home, About, Rooms, Resto & Bar, Blog, Contact)
- **AND** I should see the luxury hero banner with title "Most Relaxing Place" and CTA buttons

### Requirement: Interactive Booking Widget

The application SHALL provide a booking form with Check-in, Check-out, Room type, and Guests fields that handles submission without errors.

#### Scenario: Interactive Booking Widget

- **WHEN** I am on the home page
- **AND** I interact with the booking form (Check-in, Check-out, Room type, Guests)
- **AND** I click "Check Availability"
- **THEN** the booking widget should handle selection successfully without errors

### Requirement: Explore Rooms and Services

The application SHALL display room cards with pricing and Book Now buttons, and a services grid with icons.

#### Scenario: Explore Rooms and Services

- **WHEN** I scroll down to Featured Rooms and Hotel Services
- **THEN** I should see room cards (Suite Room, Family Room, Deluxe Room) with "Book Now" buttons
- **AND** I should see service icons for WiFi, Swimming Pool, Restaurant, and Spa

### Requirement: Footer Attribution

The application SHALL display a footer with copyright and a link to https://www.componentdock.com/, and SHALL NOT contain any ColorLib references.

#### Scenario: Footer Attribution

- **WHEN** I scroll to the bottom of the page
- **THEN** the footer must display the copyright and link to `https://www.componentdock.com/` ("Component Dock")
- **AND** no mention of ColorLib should appear in the app code or footer

## Verification checklist

- [ ] `npm run verify:app -- solace` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 4 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Navigation and Hero Display
      - Interactive Booking Widget
      - Explore Rooms and Services
      - Footer Attribution
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
- [ ] Navigation and Hero Display — I should see the sticky navigation bar with brand logo and links (Home, About, Rooms, Resto & Bar, Blog, Contact)
- [ ] Interactive Booking Widget — the booking widget should handle selection successfully without errors
- [x] Explore Rooms and Services — I should see room cards (Suite Room, Family Room, Deluxe Room) with "Book Now" buttons
