# Template: Compress (UI / Accordion Component Showcase)

## Purpose

Recreation of ColorLib **Accordion 15** (preview URL: `https://colorlib.com/wp/template/accordion-15/`), built as a modern, responsive React 19 + Tailwind CSS 4 single-page application.

- **Design Category**: UI Components / Accordions / Profile Widgets
- **Tech Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict), Lucide React.

## Design Tokens

- **Primary Brand Color**: Indigo / Violet (`#6366f1` / `indigo-600`) with Slate neutrals (`#0f172a` text, `#f8fafc` background).
- **Typography**: Inter / sans-serif.
- **Button / Component Shape**: Rounded-xl borders with smooth accordion transition animations and clean shadows.
- **Section Backgrounds**: Clean light gray (`#f8fafc`) with white card surfaces.

## Gherkin Requirements & Scenarios

### Feature: Interactive Accordion Showcase

As a user browsing the profile widget accordions,
I want to view and interact with various accordion styles and profile cards,
So that I can easily inspect information in a compact layout.

#### Scenario: View main accordion showcase

- Given the Compress application is loaded
- When the user views the main page
- Then the header, interactive accordion sections, profile widget components, and footer with Component Dock link should be visible.

#### Scenario: Expand and collapse accordion panels

- Given an accordion panel is collapsed
- When the user clicks the accordion header
- Then the panel expands smoothly to reveal its content and toggle icon rotates.

#### Scenario: Toggle multiple panels

- Given multiple accordion sections are present
- When the user clicks different panels
- Then the active panels toggle correctly according to the accordion mode.

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to `https://www.componentdock.com/`
