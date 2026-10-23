# Timber — Interior Design / Construction Studio Template

> Recreation of ColorLib "Balay"
> (https://colorlib.com/wp/template/balay/)
> Preview: https://preview.colorlib.com/theme/balay/

## Purpose

Timber is an interior design / construction studio template with a navbar, hero, about welcome, services, projects counter and portfolio gallery. It recreates the ColorLib **Balay** design (https://colorlib.com/wp/template/balay/, preview: https://preview.colorlib.com/theme/balay/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens

- **Primary**: #FFC300 (golden yellow)
- **Dark**: #2C2C2C
- **Text**: #333333 (body), #999999 (muted)
- **Light gray**: #f0f0f0, #fafafa (section alternation)
- **Font**: Quicksand (Google Fonts)
- **Button style**: golden yellow (#FFC300) bg, rounded, dark text

## Sections (in order)

1. **Navbar** — Logo + nav links (Home, Projects, About, Services, Blog, Contact), transparent on hero
2. **Hero** — Full-width slider with overlay text: "An Inspiring Built Space", subtitle, CTA button
3. **About / Welcome** — Heading "Welcome", subtext, feature badges (Passionate, Honest, Dependable, Always Improving)
4. **Services** — Heading "What I do?", 4 service cards with icon, title, description
5. **Projects Counter** — Dark strip with 4 stat counters (Projects, Employees, Constructor, Partners)
6. **Portfolio Gallery** — Heading "My Work", grid of 6 portfolio items with overlay on hover
7. **Blog** — Heading "Read Recent Blog", 3 blog cards with image, meta, excerpt
8. **Contact** — "Get in Touch!" heading, contact form, map placeholder
9. **Footer** — Dark bg, 3 columns (about, links, contact), Component Dock link

## Requirements

### Feature: Navbar

#### Scenario: Renders nav links: Home, Projects, About, Services, Blog, Contact

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** it renders nav links: Home, Projects, About, Services, Blog, Contact

#### Scenario: Clicking a nav link scrolls to the corresponding section

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** clicking a nav link scrolls to the corresponding section

#### Scenario: Navbar is fixed/sticky at the top

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** Navbar is fixed/sticky at the top

### Feature: Hero

#### Scenario: Renders heading "An Inspiring Built Space"

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** it renders heading "An Inspiring Built Space"

#### Scenario: Renders CTA button

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** it renders CTA button

#### Scenario: Background uses a placeholder image

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** Background uses a placeholder image

### Feature: About

#### Scenario: Renders "Welcome" heading

- **Given** the page is rendered
- **When** the About is inspected
- **Then** it renders "Welcome" heading

#### Scenario: Renders 4 feature badges

- **Given** the page is rendered
- **When** the About is inspected
- **Then** it renders 4 feature badges

#### Scenario: Renders descriptive paragraph

- **Given** the page is rendered
- **When** the About is inspected
- **Then** it renders descriptive paragraph

### Feature: Services

#### Scenario: Renders "What I do?" heading

- **Given** the page is rendered
- **When** the Services is inspected
- **Then** it renders "What I do?" heading

#### Scenario: Renders 4 service cards with titles and descriptions

- **Given** the page is rendered
- **When** the Services is inspected
- **Then** it renders 4 service cards with titles and descriptions

#### Scenario: Each card has an icon

- **Given** the page is rendered
- **When** the Services is inspected
- **Then** each card has an icon

### Feature: Projects Counter

#### Scenario: Renders 4 counters with labels and numbers

- **Given** the page is rendered
- **When** the Projects Counter is inspected
- **Then** it renders 4 counters with labels and numbers

#### Scenario: Dark background strip

- **Given** the page is rendered
- **When** the Projects Counter is inspected
- **Then** Dark background strip

### Feature: Portfolio

#### Scenario: Renders "My Work" heading

- **Given** the page is rendered
- **When** the Portfolio is inspected
- **Then** it renders "My Work" heading

#### Scenario: Renders 6 portfolio grid items

- **Given** the page is rendered
- **When** the Portfolio is inspected
- **Then** it renders 6 portfolio grid items

#### Scenario: Each item shows an image

- **Given** the page is rendered
- **When** the Portfolio is inspected
- **Then** each item shows an image

### Feature: Blog

#### Scenario: Renders "Read Recent Blog" heading

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** it renders "Read Recent Blog" heading

#### Scenario: Renders 3 blog cards

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** it renders 3 blog cards

#### Scenario: Each card has image, date, category, comment count, title, excerpt

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** each card has image, date, category, comment count, title, excerpt

### Feature: Contact

#### Scenario: Renders "Get in Touch!" heading

- **Given** the page is rendered
- **When** the Contact is inspected
- **Then** it renders "Get in Touch!" heading

#### Scenario: Renders contact form with name, email, message fields

- **Given** the page is rendered
- **When** the Contact is inspected
- **Then** it renders contact form with name, email, message fields

#### Scenario: Form prevents default submission

- **Given** the page is rendered
- **When** the Contact is inspected
- **Then** Form prevents default submission

### Feature: Footer

#### Scenario: Links to https://www.componentdock.com/

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** it links to https://www.componentdock.com/

#### Scenario: Branded as "Component Dock"

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Branded as "Component Dock"

#### Scenario: Renders copyright text

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** it renders copyright text

#### Scenario: Dark background

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Dark background

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/timber/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/timber/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
