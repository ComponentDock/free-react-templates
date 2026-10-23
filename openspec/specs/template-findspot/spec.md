# Template: Findspot (Search Form Bar)

Recreation of ColorLib **Search Form Bar 02**
(https://colorlib.com/wp/template/search-form-bar-02/)

## Purpose

Findspot is a search form bar template. It recreates the ColorLib **Search Form Bar 02** design (https://colorlib.com/wp/template/search-form-bar-02/, preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-02/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (from screenshot analysis)

- **Font**: Poppins, sans-serif (Google Fonts)
- **Body font size**: 16px, line-height 1.6
- **Heading font size**: 32px, weight 600, color #ffffff
- **Background**: #1a1a2e (dark navy)
- **Text color**: #ffffff (heading), #a0a0b0 (subtitle)
- **Search bar**: #16213e (dark blue), border-radius 8px (rounded rectangle), border 1px solid #0f3460
- **Search icon**: magnifying glass, 20px, color #e94560 (accent red)
- **Input**: height 56px, no border, placeholder color rgba(255,255,255,0.4)
- **Search button**: background #e94560, border-radius 8px, white text, padding 0 24px
- **Section padding**: 8em vertical
- **Layout**: centered, max-width 600px

## Screenshot Analysis

The template shows a dark-themed search bar centered on a dark background:

- Dark navy (#1a1a2e) full-page background
- Title "Search Form/Bar #02" centered above in white
- Subtitle "Find what you're looking for" in muted gray
- Rectangular (not pill) search bar with dark blue background
- Red accent search icon on the left inside the bar
- "Type to search..." placeholder text
- Red "Search" button on the right side of the bar
- Clean, modern, dark-themed design
- Footer with Component Dock branding

## Structure

Single section with:

1. Centered heading + subtitle
2. Search form with icon + input + submit button (rectangular)
3. Footer with Component Dock branding

## Requirements

### Feature: SearchBar component

#### Scenario: Renders a search input with placeholder "Type to search..."

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** it renders a search input with placeholder "Type to search..."

#### Scenario: Displays a magnifying glass icon on the left

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** it displays a magnifying glass icon on the left

#### Scenario: Has rectangular (rounded-lg) styling

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** it has rectangular (rounded-lg) styling

#### Scenario: Has dark blue background with border

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** it has dark blue background with border

#### Scenario: Displays a red "Search" submit button on the right

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** it displays a red "Search" submit button on the right

#### Scenario: Accepts keyboard input

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** Accepts keyboard input

#### Scenario: Prevents default form submission on Enter

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** Prevents default form submission on Enter

#### Scenario: Focuses input when icon is clicked

- **Given** the page is rendered
- **When** the SearchBar component is inspected
- **Then** Focuses input when icon is clicked

### Feature: App

#### Scenario: Renders the heading "Findspot"

- **Given** the page is rendered
- **When** the App is inspected
- **Then** it renders the heading "Findspot"

#### Scenario: Renders the subtitle "Find what you're looking for"

- **Given** the page is rendered
- **When** the App is inspected
- **Then** it renders the subtitle "Find what you're looking for"

#### Scenario: Renders the SearchBar component

- **Given** the page is rendered
- **When** the App is inspected
- **Then** it renders the SearchBar component

#### Scenario: Uses Poppins font from Google Fonts

- **Given** the page is rendered
- **When** the App is inspected
- **Then** it uses Poppins font from Google Fonts

#### Scenario: Has dark navy (#1a1a2e) background

- **Given** the page is rendered
- **When** the App is inspected
- **Then** it has dark navy (#1a1a2e) background

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
`apps/findspot/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/findspot/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] SearchBar component — Given** the page is rendered
- [ ] App — Given** the page is rendered
