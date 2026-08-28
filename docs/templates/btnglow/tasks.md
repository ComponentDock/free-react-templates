# Btnglow Implementation Tasks & Design Notes

- **Source**: ColorLib Bootstrap Buttons V12 (`https://colorlib.com/wp/template/bootstrap-buttons-12/`)
- **New Name**: `btnglow` (`apps/btnglow`)
- **Theme**: Dark theme (`#111111`), Poppins font, sharp square edges (`rounded-none`), indigo primary (`#494ca2`).

## Component Breakdown

1. `Header.tsx`: Title & navigation links.
2. `StyleSection.tsx`: Default, Outline, Default Round, Outline Round buttons.
3. `SizeSection.tsx`: Small, Regular, Large buttons.
4. `ColorSection.tsx`: Primary, Success, Danger, Warning, Info, Light, Dark buttons & outlines.
5. `IconSocialSection.tsx`: Icon buttons & social networks with counts.
6. `InteractiveSection.tsx`: Links, Disabled buttons, Dropdowns, Button Groups.
7. `FormControlsSection.tsx`: Colored radios & block level buttons.
8. `Footer.tsx`: Component Dock attribution (`https://www.componentdock.com/`).

## Verification Plan

- Unit tests for every component with Vitest + Testing Library.
- 100% coverage across lines/functions/branches/statements.
