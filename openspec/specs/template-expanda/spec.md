# Template: Expanda (Dashboard & FAQ Accordion)

## Purpose

- Recreation of ColorLib Accordion 05 (`https://colorlib.com/wp/template/accordion-05/`, preview URL: `https://colorlib.com/preview/theme/accordion-05/`)
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict), Lucide icons.
- Category: Dashboard / Interactive Accordion & Settings

## Design Tokens

- Brand Primary: `#6366f1` (Indigo 500), Accent: `#a855f7` (Purple 500)
- Background: `#f8fafc` (Slate 50), Card background: `#ffffff` (White)
- Text Primary: `#0f172a` (Slate 900), Text Muted: `#64748b` (Slate 500)
- Font Family: Inter, sans-serif
- Border Radius: `rounded-xl` (12px) for cards, `rounded-lg` for interactive items

## Gherkin Requirements & Scenarios

### Feature: Accordion Section Navigation

As a user, I want to expand and collapse different accordion sections so that I can view management settings, location details, and hobbies cleanly.

#### Scenario: Expand Manage Section

- Given the Expanda application is loaded
- When the user clicks on the "Manage" accordion header
- Then the Manage section expands to show items: 01 Account, 02 Settings, 03 Profile
- And other sections collapse or adjust accordingly

#### Scenario: Expand Location Section

- Given the Expanda application is loaded
- When the user clicks on the "Location" accordion header
- Then the Location section expands to show regional details and map/location info

#### Scenario: Expand Hobbies Section

- Given the Expanda application is loaded
- When the user clicks on the "Hobbies" accordion header
- Then the Hobbies section expands to show user interests and activity lists

## Verification Checklist

- [ ] Spec validation passes (`npm run spec:validate`)
- [ ] 100% test coverage on components
- [ ] Responsive layout on mobile and desktop
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] Clean modern UI with Lucide icons
