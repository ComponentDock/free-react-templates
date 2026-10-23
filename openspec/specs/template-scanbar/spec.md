# Scanbar — Quick City Search Form

Recreation of ColorLib "Search Form 13" (https://colorlib.com/wp/template/colorlib-search-13/).

## Purpose

Scanbar is a quick city search form with a hero section, search bar and footer. It recreates the ColorLib **Colorlib Search 13** design (https://colorlib.com/wp/template/colorlib-search-13/, preview: https://colorlib.com/etc/searchf/colorlib-search-13/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Design tokens (source sheet — the slug-only preview path 404s; the live demo is `colorlib.com/etc/searchf/colorlib-search-13/`, see Purpose)

- Brand color: coral #e84c60 (SEARCH button)
- Background: full-screen hero image (building/balcony against blue sky)
- Text: white headings on background, dark text (#333) in form
- Font heading: Poppins bold
- Font body: Lato
- Form bar: white horizontal strip, max-width ~860px, shadow

## Sections

1. **Hero section** — full-screen background image, centered content
   - Heading: "QUICK FIND YOUR CITY" (white, uppercase, bold, Poppins)
   - Search bar below heading
2. **Search bar** — horizontal white form
   - WHAT field: text input, placeholder "ex: food, service, bar, hotel"
   - WHERE field: select dropdown (1 adult, 2 adults, 3 adults, 4 adults)
   - SEARCH button: coral background, white text, uppercase, with search icon
3. **Footer** — dark navy (#1a1a2e) background
   - Copyright line
   - "More templates at Component Dock" link

## Requirements

### Feature: Scanbar city search form

#### Scenario: The heading "Quick Find Your City" is visible

- **Given** the page loads
- **When** the hero section renders
- **Then** the heading "Quick Find Your City" is visible

#### Scenario: A text input with placeholder "ex: food, service, bar, hotel" is present

- **Given** the search form renders
- **When** I look at the WHAT field
- **Then** a text input with placeholder "ex: food, service, bar, hotel" is present

#### Scenario: A select with guest count options is present

- **Given** the search form renders
- **When** I look at the WHERE field
- **Then** a select with guest count options is present

#### Scenario: The input value updates

- **Given** I type into the WHAT field
- **Then** the input value updates

#### Scenario: The select value changes

- **Given** I select a WHERE option
- **Then** the select value changes

#### Scenario: The form submits without page navigation

- **Given** I click the SEARCH button
- **Then** the form submits without page navigation

#### Scenario: The document title is "Scanbar — Quick City Search Form"

- **Given** the page loads
- **Then** the document title is "Scanbar — Quick City Search Form"

#### Scenario: A link to https://www.componentdock.com/ is present with text…

- **Given** the footer renders
- **Then** a link to https://www.componentdock.com/ is present with text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/scanbar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/scanbar/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
