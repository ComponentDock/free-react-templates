# Seekmint — Search Form Bar 04

Recreation of ColorLib "Search Form/Bar #04"
(https://colorlib.com/wp/template/search-form-bar-04/).

## Purpose

Seekmint is a search form bar 04 with a gradient background, heading, search bar and footer. It recreates the ColorLib **Search Form Bar 04** design (https://colorlib.com/wp/template/search-form-bar-04/, preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-04/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Source reference

- **Preview URL:** https://preview.colorlib.com/theme/search-form-bar-04/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-04.jpg

## Design tokens (extracted from screenshot)

| Token            | Value                                     |
| ---------------- | ----------------------------------------- |
| Background       | Gradient: #667eea (blue) → #a855f7 (pink) |
| Heading text     | White, centered, ~28px                    |
| Search input bg  | White, rounded-full, shadow               |
| Search button bg | Purple circular (#9333ea), white icon     |
| Placeholder text | Gray (#999)                               |
| Font family      | Poppins (Google Fonts)                    |
| Footer text      | White, semi-transparent                   |

## Layout

Single full-height section:

1. **Gradient background** covering the full viewport
2. **Heading** "Seekmint" centered near top
3. **Search bar** centered below heading — white rounded input with a purple circular search button on the RIGHT side
4. **Footer** at bottom with Component Dock link

## Differences from source

- Name changed from "Search Form/Bar #04" to "Seekmint"
- No ColorLib branding or assets
- Footer links to componentdock.com
- Placeholder images via picsum.photos (none needed for this simple template)

## Requirements

### Feature: Seekmint

#### Scenario: [ ] Renders heading with template name

- **Given** the page is rendered
- **When** the page is inspected
- **Then** [ ] Renders heading with template name

#### Scenario: [ ] Renders search input with placeholder

- **Given** the page is rendered
- **When** the page is inspected
- **Then** [ ] Renders search input with placeholder

#### Scenario: [ ] Search button on the right side of the input

- **Given** the page is rendered
- **When** the page is inspected
- **Then** [ ] Search button on the right side of the input

#### Scenario: [ ] Typing updates the search input

- **Given** the page is rendered
- **When** the page is inspected
- **Then** [ ] Typing updates the search input

#### Scenario: [ ] Form submission triggers onSubmit callback

- **Given** the page is rendered
- **When** the page is inspected
- **Then** [ ] Form submission triggers onSubmit callback

#### Scenario: [ ] Search icon button focuses the input

- **Given** the page is rendered
- **When** the page is inspected
- **Then** [ ] Search icon button focuses the input

#### Scenario: [ ] Footer renders Component Dock link

- **Given** the page is rendered
- **When** the page is inspected
- **Then** [ ] Footer renders Component Dock link

#### Scenario: [ ] Footer renders current year

- **Given** the page is rendered
- **When** the page is inspected
- **Then** [ ] Footer renders current year

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
