# Template: DropVex (Dropdown Navbar)

## Purpose

A clean, minimal dropdown navbar component featuring a split-button hamburger menu with a smooth dropdown panel. Recreation of ColorLib "Dropdown V08".

- **Source:** https://colorlib.com/wp/template/dropdown-08/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/dropdown-08/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-08.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Navigation / Dropdown Navbar

## Design tokens

| Token | Value | Source |
|-------|-------|--------|
| Font family | "Roboto", Arial, sans-serif | `body` rule in style.css |
| Body background | `#fafafa` | `body` rule |
| Body text color | `gray` | `body` rule |
| Body font-size | `18px` | `body` rule |
| Brand color (blue) | `#4d80e4` | `.btn-group` background, link color, dropdown hover bg |
| Brand dark blue | `#2161dd` | `.btn-group .split` background |
| Brand hover blue | `#3770e1` | `.btn-group .split:hover` |
| Text white | `#fff` | `.btn-group .logo` color, split icon color |
| Text black | `#000` | `h1–h5` color, heading-section color |
| Dropdown bg | `#fff` | `.dropdown-menu` background |
| Dropdown shadow | `0px 10px 34px -20px rgba(0,0,0,0.41)` | `.dropdown-menu` |
| Dropdown item border | `1px solid rgba(0,0,0,0.05)` | `.dropdown-item` |
| Dropdown item hover bg | `#4d80e4` | `.dropdown-item:hover` |
| Border radius (btn-group) | `4px` | `.btn-group` |
| Border radius (split btn) | `0 4px 4px 0` | `.btn-group .split` |
| Section padding | `5em 0` | `.ftco-section` |
| Heading font-size | `28px` | `.heading-section` |
| Ionicons | v4.5.6 via CDN | `<link>` in preview HTML |

## Structure (from preview DOM)

```
<section class="ftco-section">
  <div class="container">
    <div class="row"> heading "Dropdown #08" centered </div>
    <div class="row justify-content-center">
      <div class="col-md-12 d-flex justify-content-center">
        <div class="btn-group ...">
          <p class="heading"><a class="logo">Splash</a></p>
          <a class="split dropdown-toggle ...">
            <span class="icon ion-ios-menu"></span>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item">Home</a>
            <a class="dropdown-item">About</a>
            <a class="dropdown-item">Services</a>
            <a class="dropdown-item">Blog</a>
            <a class="dropdown-item">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

The component is a **split-button dropdown navbar**: left side shows brand
name "Splash", right side is a 60×60 hamburger icon button that toggles
a right-aligned dropdown menu. Each dropdown item has label text on the
left and an arrow icon (`ion-ios-arrow-round-forward`) on the right.

## Fidelity notes

- The original is a single Bootstrap 4 dropdown component — this is NOT a
  full-page template, just a navbar/dropdown widget centered on the page.
- Brand color `#4d80e4` (blue) is the primary accent throughout.
- The hamburger button has a darker blue `#2161dd` background and is
  separated from the brand bar with a vertical split styling.
- Dropdown menu appears below the button group with a white background,
  subtle shadow, and small upward-pointing arrow decoration.
- Dropdown items have subtle bottom borders and fill blue on hover.
- Font is Roboto (weights 400, 500, 700).

## Requirements

### Feature: DropVex template behaviour

#### Scenario: Page loads with centered heading

- **GIVEN** the user visits the DropVex page
- **THEN** a heading "Dropdown Navbar" is visible centered on the page

#### Scenario: Navbar bar visible with brand and hamburger

- **GIVEN** the user visits the DropVex page
- **THEN** a full-width blue navigation bar is visible in the center
- **AND** the brand name "Splash" is displayed in white uppercase text on the left
- **AND** a hamburger menu icon button is displayed on the right of the bar

#### Scenario: Dropdown opens on hamburger click

- **GIVEN** the user visits the DropVex page
- **WHEN** the user clicks the hamburger menu button
- **THEN** a dropdown menu appears below the navigation bar
- **AND** the dropdown contains items: Home, About, Services, Blog, Contact

#### Scenario: Dropdown items show arrow icons

- **GIVEN** the dropdown menu is open
- **THEN** each item has label text on the left
- **AND** each item has a right-arrow icon on the right

#### Scenario: Dropdown closes on outside click

- **GIVEN** the dropdown menu is open
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown menu closes

#### Scenario: Dropdown item hover styling

- **GIVEN** the dropdown menu is open
- **WHEN** the user hovers over a dropdown item
- **THEN** the item background changes to the brand blue color
- **AND** the item text changes to white

#### Scenario: Brand name styling

- **GIVEN** the user visits the DropVex page
- **THEN** the brand name is styled in uppercase white text
- **AND** the brand name links to the homepage

#### Scenario: Responsive behavior

- **GIVEN** the user views on a mobile device
- **THEN** the navigation bar adjusts to full width
- **AND** the dropdown menu displays at minimum width of 15rem

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
`apps/dropvex/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/dropvex/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Heading renders centered on page
- [ ] Blue navigation bar visible with brand name and hamburger
- [ ] Hamburger click toggles dropdown open/closed
- [ ] Dropdown shows 5 items with correct labels
- [ ] Each item has arrow icon on the right
- [ ] Hover state changes item to blue background with white text
- [ ] Dropdown closes on outside click
- [ ] Brand name is uppercase white text
- [ ] Navigation bar border-radius is 4px
- [ ] Dropdown has white background with shadow
- [ ] Font is Roboto
- [ ] Background is #fafafa
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
