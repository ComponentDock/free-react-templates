# Template: LookupBar (Search Form Bar)

## Purpose

A standalone search form bar template with an inline search input and submit button. Recreation of ColorLib **Search Form Bar 13** as a standalone React component template.

- **ColorLib source:** https://colorlib.com/wp/template/search-form-bar-13/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/search-form-bar-13/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-13.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Search Form / Bar (Bootstrap snippet)

## Description

A minimal, clean navbar with an integrated search form bar. The design features a
horizontal nav bar with a "Brand" logo/link on the left, a full-width rounded search
input with a magnifying glass icon in the center-left, and a simple three-link
navigation menu (Home, About, Contact) on the right. The navbar has a subtle bottom
border and shadow, with responsive stacking on mobile.

This is a **snippet/component** — not a full-page template. It consists of a single
navbar section only.

## Design Tokens (from live preview CSS)

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#007bff` | Link color, brand text color |
| `--brand-hover` | `#0056b3` | Link hover color |
| `--text-body` | `#212529` | Body text color |
| `--bg-page` | `#ffffff` | Page/section background |
| `--border-navbar` | `#dae0e5` | Navbar bottom border |
| `--shadow-navbar` | `0 1px 5px 0 rgba(0, 0, 0, 0.1)` | Navbar box shadow |
| `--input-border` | `#efefef` | Search input border |
| `--input-focus-border` | `#000000` | Search input focus border |
| `--input-placeholder` | `#cccccc` | Search input placeholder text |
| `--icon-color` | `#777777` | Search icon color |

### Typography
| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Roboto", sans-serif` (via Google Fonts) | Body, headings, nav links |
| Body font-size | `1rem` | Default text |
| Body font-weight | `400` | Normal weight |
| Body line-height | `1.5` | Line spacing |
| Heading font-weight | `500` | h3, h4 |
| Brand text | `h3` element (1.75rem default) | "Brand" logo text |

### Spacing & Layout
| Token | Value | Usage |
|-------|-------|-------|
| Container padding | `15px` left/right | `.cl-container` |
| Container max-width | `1140px` (at ≥1200px) | `.cl-container` |
| Navbar link padding | `25px 0` vertical | Nav link tap target |
| Navbar link margin-left | `20px` | Gap between nav links |
| Search input padding-left | `35px` | Space for icon |
| Search icon position | `left: 15px`, vertically centered | `.icon-wrap` |

### Shape
| Token | Value | Usage |
|-------|-------|-------|
| Search input border-radius | `30px` (pill shape) | `.cl-form-control` in navbar |
| Base border-radius | `0.25rem` | Default form controls |
| Transition | `0.3s all ease` | Links, search input |

## Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│ custom-navbar (border-bottom: 1px #dae0e5, box-shadow) │
│  ┌────────────────────────────────────┬──────────────┐  │
│  │ col-md-9 (flex, align-items-center)│ col-md-3     │  │
│  │  ┌────────┐ ┌────────────────────┐ │ ┌──────────┐ │  │
│  │  │ Brand  │ │ 🔍 Search...       │ │ │Home About│ │  │
│  │  │ (h3)   │ │ (pill input)       │ │ │Contact   │ │  │
│  │  └────────┘ └────────────────────┘ │ └──────────┘ │  │
│  └────────────────────────────────────┴──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

- **Mobile (<768px):** Brand centered, search full-width below, nav links centered below
- **Desktop (≥768px):** Brand + search flex row on left (75%), nav links on right (25%)

## Requirements

### Feature: LookupBar template behaviour

#### Scenario: Navbar renders with brand, search, and navigation

- **GIVEN** the LookupBar component is rendered
- **THEN** a nav element with class "custom-navbar" should be visible
- **AND** a "Brand" text link should be present
- **AND** a search input with placeholder "Search..." should be visible
- **AND** navigation links "Home", "About", "Contact" should be visible

#### Scenario: Search input has pill-shaped styling

- **GIVEN** the LookupBar component is rendered
- **WHEN** I inspect the search input
- **THEN** it should have a border-radius of 30px (pill shape)
- **AND** a border color of #efefef
- **AND** a left padding of 35px (for icon space)

#### Scenario: Search icon is displayed inside the search bar

- **GIVEN** the LookupBar component is rendered
- **THEN** a search icon (magnifying glass SVG) should be visible
- **AND** it should be positioned to the left of the input
- **AND** its color should be #777777

#### Scenario: Navbar has shadow and border

- **GIVEN** the LookupBar component is rendered
- **THEN** the navbar should have a bottom border of 1px solid #dae0e5
- **AND** a box-shadow of 0 1px 5px 0 rgba(0, 0, 0, 0.1)

#### Scenario: Navigation links respond to hover

- **GIVEN** the LookupBar component is rendered
- **WHEN** I hover over a navigation link
- **THEN** the link color should transition to #0056b3
- **AND** the transition should be 0.3s ease

#### Scenario: Search input focus state

- **GIVEN** the LookupBar component is rendered
- **WHEN** I focus the search input
- **THEN** the border color should change to #000000
- **AND** the box-shadow should be removed
- **AND** the outline should be removed

#### Scenario: Mobile responsive layout

- **GIVEN** the LookupBar component is rendered on a viewport narrower than 768px
- **THEN** the brand text should be centered
- **AND** the search form should be full-width
- **AND** the navigation links should be centered below

#### Scenario: Brand link navigates to home

- **GIVEN** the LookupBar component is rendered
- **WHEN** I click the "Brand" text
- **THEN** it should navigate to "/"

#### Scenario: Navigation links have correct hrefs

- **GIVEN** the LookupBar component is rendered
- **THEN** the "Home" link should have href "/"
- **AND** the "About" link should have href "/about"
- **AND** the "Contact" link should have href "/contact"

#### Scenario: Search form submits correctly

- **GIVEN** the LookupBar component is rendered
- **WHEN** I type a query into the search input
- **AND** I submit the form
- **THEN** the form should handle the submit event

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

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lookupbar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lookupbar/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Navbar renders with brand, search input, and nav links
- [ ] Search input has pill shape (border-radius: 30px)
- [ ] Search icon (SVG magnifying glass) is positioned left inside input
- [ ] Navbar has bottom border (#dae0e5) and subtle shadow
- [ ] Font family is Roboto (loaded via Google Fonts)
- [ ] Brand text is blue (#007bff), h3 element
- [ ] Nav links are blue (#007bff), hover to darker blue (#0056b3)
- [ ] Transitions are 0.3s ease on interactive elements
- [ ] Focus state on search input: black border, no shadow
- [ ] Responsive: stacked on mobile, side-by-side on desktop (≥768px)
- [x] No ColorLib references in app code
- [ ] Footer includes Component Dock link
- [ ] Package name: @free-react-templates/lookupbar
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
