# Spec: Tavern — Restaurant Landing Template

**Original:** ColorLib "Eatery" — https://colorlib.com/wp/template/eatery/  
**Preview:** https://preview.colorlib.com/theme/eatery/  
**New name:** Tavern (apps/tavern, @free-react-templates/tavern)

## Purpose

Tavern is a restaurant landing template with a navbar, hero, feature cards, special dishes, our menu, testimonials, blog and footer. It recreates the ColorLib **Eatery** design (https://colorlib.com/wp/template/eatery/, preview: https://preview.colorlib.com/theme/eatery/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (from preview CSS)

| Token            | Value                    | Notes                                          |
| ---------------- | ------------------------ | ---------------------------------------------- |
| Brand color      | #cf1d16                  | Primary red, used for buttons, loader, accents |
| Alt brand        | #e9362f                  | Button hover/active state                      |
| Font family      | Open Sans (Google Fonts) | 300/400/700 weights                            |
| Button radius    | 0px                      | Square buttons                                 |
| Light background | #f7f7f7                  | Section bg-light                               |
| Body text        | #868e96                  | Gray text                                      |
| Dark text        | #000                     | Headings                                       |
| White            | #fff                     | Card/text on dark                              |

## Sections (in order)

1. **Navbar** — fixed top, logo "Tavern", nav links (Home, About, Menu, Services, Blog, Contact), hamburger on mobile
2. **Hero** — full-width slider with overlay, headings ("Expert Chefs" / "Delicious Food"), subtext + "Get Started" CTA buttons
3. **Features** — 4-column grid on light bg: Drinks, Sea Foods, Cup Coffees, Fresh Salad (icon + title + description)
4. **Special Dishes** — carousel of dish cards with images, titles, prices (organic tomato salad $11.50, baked broccoli $12.00, spicy meatballs $11.00, eggplant parmigiana $12.00)
5. **Our Menu** — two-column list on light bg, each item: dish name, description, price
6. **Testimonials** — carousel of customer quotes with names/roles
7. **Blog** — 2-column cards: image, title, date, excerpt, "Read More"
8. **Footer** — Newsletter signup, About Us, Opening Hours, Contact Info, Quick Links, Component Dock attribution, copyright

## Fidelity Notes

- Match the original's red (#cf1d16) brand color and Open Sans typeface
- Square buttons (no border-radius) as in the original
- Section order preserved exactly
- Placeholder images via picsum.photos/seed/tavern-{n}
- Footer links to https://www.componentdock.com/ (Component Dock branded)
- No ColorLib references in app source

## Requirements

### Feature: Navbar

#### Scenario: Renders logo text "Tavern"

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** renders logo text "Tavern"

#### Scenario: Shows navigation links on desktop

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** shows navigation links on desktop

#### Scenario: Toggles mobile menu on hamburger click

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** toggles mobile menu on hamburger click

### Feature: Hero

#### Scenario: Displays hero heading and CTA button

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** displays hero heading and CTA button

#### Scenario: Slides between hero slides

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** slides between hero slides

### Feature: Features

#### Scenario: Shows 4 feature cards with icons and descriptions

- **Given** the page is rendered
- **When** the Features is inspected
- **Then** shows 4 feature cards with icons and descriptions

### Feature: Special Dishes

#### Scenario: Displays dish cards with names and prices

- **Given** the page is rendered
- **When** the Special Dishes is inspected
- **Then** displays dish cards with names and prices

#### Scenario: Navigates between slides

- **Given** the page is rendered
- **When** the Special Dishes is inspected
- **Then** navigates between slides

### Feature: Our Menu

#### Scenario: Shows menu items with descriptions and prices

- **Given** the page is rendered
- **When** the Our Menu is inspected
- **Then** shows menu items with descriptions and prices

### Feature: Testimonials

#### Scenario: Displays customer testimonials with names and roles

- **Given** the page is rendered
- **When** the Testimonials is inspected
- **Then** displays customer testimonials with names and roles

### Feature: Blog

#### Scenario: Shows blog post cards with title, date, excerpt

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** shows blog post cards with title, date, excerpt

### Feature: Footer

#### Scenario: Links to Component Dock

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** links to Component Dock

#### Scenario: Shows newsletter signup form

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** shows newsletter signup form

#### Scenario: Displays opening hours and contact info

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** displays opening hours and contact info

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
`apps/tavern/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/tavern/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
