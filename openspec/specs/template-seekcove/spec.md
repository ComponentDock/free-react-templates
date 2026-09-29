# Template: SeekCove (Search Form Bar)

## Purpose

Recreation of ColorLib "Search Form Bar 12" — a minimal search-focused navbar
component. Features a white navbar with a blue brand heading on the left, inline
nav links (Home, About, Contact), and a pill-shaped search input with an SVG
magnifying glass icon on the right. The search input expands on focus. The page
body is white with no content below the navbar (the original is a standalone
component snippet, not a full-page template).

- **Source:** https://colorlib.com/wp/template/search-form-bar-12/
- **Preview (archived):** https://preview.colorlib.com/theme/search-form-bar-12/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-12.jpg + downloaded ZIP (`css/style.css` + `index.html`)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded source ZIP (`search-form-bar-12/css/style.css` and
`index.html`) and screenshot analysis.

| Token                      | Value                                                    |
| -------------------------- | -------------------------------------------------------- |
| Font family                | `'Roboto', sans-serif` (weight 400–500)                 |
| Body background            | `#ffffff` (white)                                        |
| Body text color            | `#212529` (dark gray)                                   |
| Link color                 | `#007bff` (blue)                                        |
| Link hover color           | `#0056b3` (darker blue)                                 |
| Link transition            | `0.3s all ease`                                         |
| Brand heading color        | `#007bff` (blue, inherited from `a` tag)                |
| Brand heading font weight  | `500` (medium)                                          |
| Brand heading font size    | `1.5rem` (24px, `cl-h4` class)                          |
| Nav link font              | Uppercase (not explicitly set, appears uppercase in screenshot) |
| Nav link padding           | `25px 0` (vertical 25px, horizontal 0)                  |
| Nav link margin-left       | `20px` between items                                    |
| Search wrapper margin-left | `50px` (from nav links)                                 |
| Search input width         | `120px` default, `200px` on focus/active                |
| Search input border-radius | `30px` (pill shape)                                     |
| Search input padding-left  | `35px` (room for icon)                                  |
| Search input placeholder   | `#cccccc` (light gray)                                  |
| Search input focus border   | `#000000` (black)                                       |
| Search input focus outline  | `none`                                                  |
| Search input focus shadow   | `none`                                                  |
| Search icon color          | `#777777` (medium gray)                                |
| Search icon size           | `12px` font-size (SVG `1em` height)                    |
| Search icon position       | Absolute, `left: 15px`, `top: 50%`, `translateY(-50%)` |
| Navbar border-bottom       | `1px solid #dae0e5`                                     |
| Navbar box-shadow          | `0 1px 5px 0 rgba(0,0,0,0.1)`                          |
| Input focus border-color   | `#80bdff` (bootstrap blue) — overridden to `#000` in search context |
| Input focus box-shadow     | `0 0 0 0.2rem rgba(0,123,255,0.25)` — overridden to `none` |
| Container max-width        | `1140px` (at ≥1200px), responsive breakpoints at 576/768/992/1200 |

## Requirements

### Requirement: Navbar layout

The page SHALL display a white navbar spanning the full viewport width with a subtle bottom border and shadow.

#### Scenario: Navbar renders with border and shadow

- **WHEN** the page loads
- **THEN** the navbar is visible across the full width
- **AND** the navbar has a `1px solid #dae0e5` bottom border
- **AND** the navbar has a `box-shadow: 0 1px 5px 0 rgba(0,0,0,0.1)` shadow

#### Scenario: Navbar contains container with max-width

- **WHEN** the page loads
- **THEN** the navbar content is centered within a container
- **AND** the container has a max-width of `1140px` on large screens
- **AND** the container has horizontal padding of `15px`

### Requirement: Brand heading

The navbar SHALL display a brand heading on the left side.

#### Scenario: Brand heading renders

- **WHEN** the page loads
- **THEN** a heading "Brand" is visible on the left side of the navbar
- **AND** the heading color is `#007bff` (blue)
- **AND** the heading font weight is `500` (medium)
- **AND** the heading font size is `1.5rem` (24px)

#### Scenario: Brand heading is a link

- **WHEN** the user hovers over the brand heading
- **THEN** the heading color darkens to `#0056b3`
- **AND** the transition is `0.3s all ease`

### Requirement: Navigation links

The navbar SHALL display inline navigation links to the right of the brand.

#### Scenario: Nav links render

- **WHEN** the page loads
- **THEN** three navigation links are visible: "Home", "About", "Contact"
- **AND** the links are positioned to the right of the brand heading
- **AND** each link has `25px` vertical padding and `20px` left margin

#### Scenario: Nav links have hover transition

- **WHEN** the user hovers over a nav link
- **THEN** the link color transitions smoothly over `0.3s`
- **AND** the link color darkens from `#007bff` to `#0056b3`

### Requirement: Pill-shaped search input

The navbar SHALL contain a pill-shaped search input with an SVG magnifying glass icon on the right side.

#### Scenario: Search input renders with icon

- **WHEN** the page loads
- **THEN** a search input is visible on the far right of the navbar
- **AND** the input has a `border-radius: 30px` (pill shape)
- **AND** an SVG magnifying glass icon is positioned inside the input at the left (`15px`)
- **AND** the icon color is `#777777`
- **AND** the placeholder text reads "Search..."

#### Scenario: Search input expands on focus

- **WHEN** the user clicks/focuses the search input
- **THEN** the input width transitions from `120px` to `200px`
- **AND** the border color changes to `#000000` (black)
- **AND** no box-shadow is applied
- **AND** no outline is applied

#### Scenario: Search input loses focus

- **WHEN** the user blurs the search input
- **THEN** the input width transitions back to `120px`
- **AND** the border color returns to `#ced4da` (default gray)

#### Scenario: Search input placeholder styling

- **WHEN** the search input is empty and not focused
- **THEN** the placeholder text "Search..." is displayed in `#cccccc` (light gray)

### Requirement: Responsive layout

The navbar SHALL adapt to different screen sizes.

#### Scenario: Mobile layout

- **WHEN** the viewport width is less than `768px`
- **THEN** the brand heading is centered
- **AND** the nav links are right-aligned

#### Scenario: Desktop layout

- **WHEN** the viewport width is `768px` or greater
- **THEN** the brand heading is left-aligned
- **AND** the nav links are right-aligned

### Requirement: Page body

The page SHALL have a white background extending below the navbar.

#### Scenario: Body renders white

- **WHEN** the page loads
- **THEN** the body background is `#ffffff` (white)
- **AND** the body font family is `'Roboto', sans-serif`
- **AND** the body text color is `#212529`

## Verification checklist

- [ ] Navbar renders with bottom border (`1px solid #dae0e5`) and shadow
- [ ] Brand heading "Brand" renders in blue (`#007bff`), weight 500, size 1.5rem
- [ ] Brand heading link hover darkens to `#0056b3` with 0.3s transition
- [ ] Three nav links (Home, About, Contact) render inline with correct spacing
- [ ] Nav links have hover transition (0.3s) and color change
- [ ] Search input renders with pill shape (border-radius 30px)
- [ ] SVG magnifying glass icon is positioned inside input at left (15px)
- [ ] Search input width is 120px default, 200px on focus
- [ ] Focus state: border turns black, no shadow, no outline
- [ ] Placeholder text "Search..." is light gray (#ccc)
- [ ] Responsive: brand centers on mobile, right-aligns on desktop
- [ ] Body background is white, font is Roboto
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
