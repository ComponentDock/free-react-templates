# Template: FindBar (Search Form Bar)

Recreation of ColorLib **Search Form/Bar 01**
(https://colorlib.com/wp/template/search-form-bar-01/)

## Purpose

Findbar is a search form bar template. It recreates the ColorLib **Search Form Bar 01** design (https://colorlib.com/wp/template/search-form-bar-01/, preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-01/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (from CSS analysis)

- **Font**: Poppins, sans-serif (Google Fonts)
- **Body font size**: 16px, line-height 1.8
- **Heading font size**: 28px, weight 400, color #000
- **Background**: #fafafa (light gray)
- **Text color**: gray (body), #000 (heading)
- **Search bar**: white (#fff), border-radius 40px (pill), box-shadow 0px 5px 20px -12px rgba(0,0,0,0.34)
- **Search icon**: magnifying glass, 50x50px area, positioned absolute left
- **Input**: height 50px, no border, no shadow, placeholder color rgba(0,0,0,0.7)
- **Section padding**: 7em vertical
- **Layout**: centered, max-width ~33% on large screens (col-lg-4), 50% on medium

## Screenshot Analysis

The template shows a minimalist search bar centered on a light gray background:

- Title "Search Form/Bar #01" centered above the search bar
- Pill-shaped (rounded) white search bar with subtle shadow
- Search magnifying glass icon on the left inside the bar
- "Search..." placeholder text
- Clean, modern, minimal design

## Structure

Single section with:

1. Centered heading
2. Search form with icon + input (pill-shaped)
3. Footer with Component Dock branding

## Requirements

### Feature: SearchBar component

#### Scenario: Renders a search input with placeholder "Search..."

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** it renders a search input with placeholder "Search..."

#### Scenario: Displays a magnifying glass icon on the left

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** it displays a magnifying glass icon on the left

#### Scenario: Has pill-shaped (rounded-full) styling

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** it has pill-shaped (rounded-full) styling

#### Scenario: Has white background with shadow

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** it has white background with shadow

#### Scenario: Accepts keyboard input

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** Accepts keyboard input

#### Scenario: Prevents default form submission on Enter

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** Prevents default form submission on Enter

### Feature: App

#### Scenario: Renders the heading "FindBar"

- **Given** the page is rendered
- **When** the App is inspected
- **Then** it renders the heading "FindBar"

#### Scenario: Renders the SearchBar component

- **Given** the page is rendered
- **When** the App is inspected
- **Then** it renders the SearchBar component

#### Scenario: Uses Poppins font from Google Fonts

- **Given** the page is rendered
- **When** the App is inspected
- **Then** it uses Poppins font from Google Fonts

#### Scenario: Has light gray (#fafafa) background

- **Given** the page is rendered
- **When** the App is inspected
- **Then** it has light gray (#fafafa) background

### Feature: Footer

#### Scenario: Links to https://www.componentdock.com/

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** it links to https://www.componentdock.com/

#### Scenario: Shows "Component Dock" branding

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** it shows "Component Dock" branding

#### Scenario: Shows copyright text

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** it shows copyright text

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/findbar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/findbar/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] SearchBar component — Given** the page is rendered
- [ ] App — Given** the page is rendered
