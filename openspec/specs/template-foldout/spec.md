# Template: Foldout (UI Components / Accordion)

## Purpose

Recreation of ColorLib `accordion-04` (`https://preview.colorlib.com/theme/bac/accordion-04/`), an interactive accordion component showcase featuring stylish collapsible accordion cards, custom numbers/icons, smooth expand/collapse behavior, and a clean modern aesthetic. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Font Family**: "Poppins", Arial, sans-serif
- **Background Color**: `#fafafa` (light neutral background)
- **Primary Accent / Gradient**: `#f2dc63` to `#ffe97a` (warm gold/yellow gradient used for active headers, icons, and highlights)
- **Card Styling**: `#fff` background, rounded corners (`rounded-lg` / `rounded-[40px]`), subtle borders (`border border-black/1` or `border-black/5`)
- **Text Colors**: `#000` (headings), `gray` / `rgba(0, 0, 0, 0.8)` (body text), `rgba(0, 0, 0, 0.3)` (muted numbers/icons)

## Sections & Structure

1. **Header / Hero Section**: Centered heading and subtitle introducing the interactive accordion showcase.
2. **Accordion Showcase Section**: Multiple interactive accordion items with numbered badges (01, 02, 03, etc.), icons, collapsible content panels, and smooth toggle states.
3. **Footer**: Clean copyright and mandatory attribution link to Component Dock (`https://www.componentdock.com/`).

## Requirements

### Feature: Foldout Interactive Accordion Showcase

#### Scenario: User views the accordion component list

- **GIVEN** the user opens the Foldout template
- **WHEN** the page loads
- **THEN** the header section displays the main title and subtitle
- **AND** multiple accordion items are rendered with numbered badges and icons

#### Scenario: User expands and collapses accordion items

- **GIVEN** the user is viewing the accordion showcase
- **WHEN** the user clicks on an accordion header
- **THEN** the corresponding panel expands to show its detailed content
- **AND** clicking another header expands that item and optionally collapses others according to accordion behavior

#### Scenario: Footer attribution link

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is visible
- **THEN** it contains a link pointing to `https://www.componentdock.com/` with anchor text "Component Dock"

## Verification checklist

- [ ] Vite + React 19 + Tailwind CSS 4 setup correctly
- [ ] All accordion sections match the 1:1 structure of ColorLib accordion-04
- [ ] Design tokens (Poppins font, #fafafa bg, #f2dc63 gold accent) correctly applied via Tailwind
- [ ] Component Dock footer link present
- [ ] Vitest unit tests with 100% test coverage
