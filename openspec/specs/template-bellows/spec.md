# Template: Bellows (UI Component / Interactive Accordion)

## Purpose

- **Recreation of:** ColorLib Accordion 09 (`https://colorlib.com/wp/template/accordion-09/`)
- **New Name:** `bellows` (`apps/bellows`)
- **Category:** Interactive Components / FAQ & Accordions
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React

## Design Tokens (Captured from Reference & Screenshot)

- **Primary Brand Color:** Indigo/Slate (Indigo-600 `#4f46e5`, Slate-900 `#0f172a`)
- **Accent Color:** Violet/Blue (`#6366f1`)
- **Neutral Backgrounds:** White (`#ffffff`), Slate-50 (`#f8fafc`), Slate-100 (`#f1f5f9`)
- **Typography:** Inter / system sans-serif (`font-sans`)
- **Borders & Radii:** Rounded-xl (`0.75rem`), clean borders (`border-slate-200`)
- **Shadows:** Soft drop shadows (`shadow-sm`, `shadow-md`)

## Gherkin Requirements & Scenarios

### Feature: Accordion Showcase & Interactive Panels

As a visitor browsing the Bellows component library template, I want to explore interactive accordion sections with smooth expand/collapse transitions, rich content, and customizable triggers.

#### Scenario: View Main Header & Hero Section

- Given the user opens the Bellows app
- When the page loads
- Then the header displays the brand title "Bellows" and navigation links
- And the hero section features a compelling headline about modern, accessible accordion components and a primary CTA button.

#### Scenario: Explore Multiple Accordion Variants

- Given the user scrolls to the accordion section
- When they view the different accordion groups (Standard, FAQ, Nested, Icon-enhanced)
- Then each accordion item displays a clear header with an expand/collapse indicator (chevron)
- And clicking an accordion header smoothly toggles the visibility of its content panel.

#### Scenario: Footer with Component Dock Attribution

- Given the user scrolls to the bottom of the page
- When the footer is rendered
- Then it contains copyright information and a prominent link to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] App builds successfully with Vite and TypeScript strict mode
- [ ] Tailwind CSS v4 styling matches design tokens
- [ ] All accordion interactions work smoothly with proper ARIA attributes
- [ ] Footer includes `https://www.componentdock.com/` link
- [ ] Vitest unit tests achieve 100% test coverage
