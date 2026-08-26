# Bellows — Implementation Plan & Design Notes

## Overview

- **Source**: ColorLib Accordion 15 (`https://colorlib.com/wp/template/accordion-15/`)
- **Preview URL**: `https://preview.colorlib.com/theme/accordion-15/`
- **Assigned Name**: Bellows (`apps/bellows`)
- **Category**: UI Components / Accordions / Dashboards

## Section Structure & Order

1. **Header / Title Area**: Clean dashboard header ("Bootstrap Accordion #5" styled as modern profile widget).
2. **Accordion Panels Container**:
   - Panel 1: **Profile** (Expanded by default with sub-links: Profile, Messages, Settings, Sales, Marketing)
   - Panel 2: **Messages** (Collapsible inbox/messages widget)
   - Panel 3: **Settings** (Collapsible user settings and preferences)
   - Panel 4: **Logout** (Session termination trigger)
3. **Footer**: Branded footer with copyright and required link to `https://www.componentdock.com/` ("Component Dock").

## Fidelity Notes

- Replicates the exact vertical accordion layout and icon placement from the ColorLib preview.
- Uses Lucide React icons (`User`, `Mail`, `Settings`, `LogOut`, `ChevronDown`, `ChevronUp`).
- Clean Tailwind v4 styling with crisp transitions.
