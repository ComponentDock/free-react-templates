# Spec — Bellows (Accordion 03)

Recreation of ColorLib "Accordion 03" (`https://colorlib.com/wp/template/accordion-03/`) under the original name **Bellows**.

## Overview

A clean, modern accordion widget template with dark charcoal header, vibrant accent color, and expandable collapsible content sections, styled with Tailwind CSS 4, React 19, and TypeScript.

## User Stories & Acceptance Criteria

### US1: Accordion List Display

- **As a** visitor,
- **I want to** see a list of accordion items with clear headers and expand/collapse icons,
- **So that** I can easily toggle and read detailed content sections.
- **Scenario:** The page loads with a main heading "Accordion #03", followed by a card container housing multiple interactive accordion panels.

### US2: Interactive Toggle & Single-Open Behavior

- **As a** visitor,
- **I want to** click an accordion header to expand its content and collapse others,
- **So that** the interface remains clean and focused.
- **Scenario:** Clicking an unopened accordion header expands it (setting `aria-expanded="true"` and displaying its content region) and collapses any previously open panel.

### US3: Component Dock Footer Attribution

- **As a** visitor,
- **I want to** see a footer linking to Component Dock,
- **So that** I know where the template ecosystem is hosted.
- **Scenario:** The page footer displays "More templates at Component Dock" linking to `https://www.componentdock.com/`.

## Design Tokens & Replication Notes

- **Page Background:** `#f8f9fa` (light gray)
- **Primary Accent:** `#0d6efd` (bootstrap blue)
- **Typography:** Poppins sans-serif font family.
- **Assets:** Picsum photos for any placeholder imagery; lucide-react icons for chevron/plus/minus indicators.
