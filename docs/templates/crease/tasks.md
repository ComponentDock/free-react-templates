# Tasks & Design Notes: Crease (Accordion 05)

## Overview

- **Source**: ColorLib Accordion 05 (`https://colorlib.com/wp/template/accordion-05/`)
- **Live Preview URL**: `https://preview.colorlib.com/theme/bac/accordion-05/`
- **Assigned App Name**: `crease` (`apps/crease`)
- **Package Name**: `@free-react-templates/crease`

## Section Breakdown & Structure Order

1. **Header Section**: Centered page title ("Accordion #05") with `Poppins` typography and clean spacing.
2. **Accordion Component Container**:
   - Card 1: **Manage** (Icon: Settings / Cog) — Expanded by default (`show`), contains sub-list items: 01 Account, 02 Settings, 03 Profile with arrow indicators. Background of expanded body is `#75d6d1` (teal).
   - Card 2: **Location** (Icon: Map Pin) — Collapsed by default, contains description text.
   - Card 3: **Hobbies** (Icon: Basketball / Activity) — Collapsed by default, contains description text.
3. **Footer**: Branded footer with copyright and link to `https://www.componentdock.com/`.

## Design & Styling Notes

- **Color Palette**: Primary teal `#75d6d1`, background `#fafafa`, white card boxes with subtle drop shadows (`0px 10px 29px -16px rgba(0, 0, 0, 0.12)`).
- **Typography**: Poppins font imported via Google Fonts CDN in `index.html`.
- **Icons**: Lucide React icons replacing Ionicons (`Settings`, `MapPin`, `Activity`, `ChevronDown`, `ChevronUp`, `ChevronRight`).
