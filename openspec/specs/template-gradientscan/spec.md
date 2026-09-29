# Template: GradientScan (Search Form Bar)

## Purpose

GradientScan is a single-page search bar component template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Search Form/Bar 04" free template (source:
https://colorlib.com/wp/template/search-form-bar-04/), built under a
DIFFERENT name (**GradientScan**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a minimal, single-section Bootstrap snippet: a centered
pill-shaped search form (white, border-radius 40px, soft shadow) floating
on a vivid purple-to-magenta gradient page background. A circular
gradient-filled search icon button sits at the top-right of the form
container. Above the form is a simple centered heading "Search Form/Bar #04"
in white Poppins. The design is intentionally minimal — one section, one
form, one gradient, no photos, no navigation, no footer beyond the
Component Dock credit.

**WHAT MAKES GRADIENTSCAN DISTINCT (signature behaviors):**

1. **Purple-to-magenta gradient page background.** The entire viewport is
   filled with a horizontal linear gradient from `#3e2bcc` (purple, left)
   to `#c643e0` (magenta/pink, right). No photo, no pattern — pure color.
   This is the dominant visual element.
2. **Pill-shaped white search form.** The form container is white (`#fff`),
   fully rounded (`border-radius: 40px`), with a soft drop shadow
   (`0px 5px 20px -12px rgba(0,0,0,0.34)`). It sits centered in the page
   at roughly 33% width (col-lg-4 within a centered col-md-6). No visible
   border, no background image — just white + shadow + extreme rounding.
3. **Circular gradient search button.** A 46×46px circle
   (`border-radius: 50%`) sits absolutely positioned at the top-right of
   the form container (`top: 2px; right: 2px`). Its background is the same
   purple-to-magenta gradient as the page. The icon inside is white.
   On hover no color change is defined in the source CSS (flat interaction).
4. **Borderless input with subtle placeholder.** The input is 50px tall,
   white background, black text, 14px font, `border-radius: 2px`, no
   visible border. The placeholder text is 70% black
   (`rgba(0,0,0,0.7)`). Padding left 20px, right 50px (to clear the
   absolute-positioned button).
5. **Centered heading.** "Search Form/Bar #04" in white, 28px Poppins 400,
   with 3rem bottom margin separating it from the form. The heading is
   center-aligned within the container.

## Design reference (replication findings)

- **Original:** ColorLib "Search Form/Bar 04" — fancy search bar template
  (source: https://colorlib.com/wp/template/search-form-bar-04/).
- **Preview URL — UNREACHABLE (404):**
  `https://preview.colorlib.com/theme/search-form-bar-04/` returns 404.
  The actual preview lives at
  `https://preview.colorlib.com/theme/bootstrap/search-form-bar-04/`
  (HTTP 200, 1,933 bytes, 77 lines, `<title>Search Form/Bar 04</title>`).
  Stylesheet: `css/style.css` (5,812 bytes, 323 lines — all styles,
  hand-written, NO Bootstrap framework, NO build step). Fonts: local
  Roboto 400/700 @font-face + Google Fonts Poppins via CSS stack.
- **Screenshot:** `search-form-bar-04.jpg` (TEMPLATES.md line 2761,
  1200×972) — analyzed via the ColorLib page and CSS. The visual shows
  a purple-to-magenta gradient background with a white pill-shaped search
  form centered in the viewport and a small heading above it.
- **DOM structure (1:1 section order):**
  1. `section.ftco-section` — single section, padding 7em 0
     - `div.cl-container` — centered container (max-width: 960px at lg)
       - `div.cl-row.cl-justify-content-center` — flex centering row
         - `div.cl-col-md-6.cl-text-center.cl-mb-5` — heading column
           - `h2.heading-section` — "Search Form/Bar #04"
       - `div.cl-row.cl-justify-content-center` — form row
         - `div.cl-col-md-6.cl-col-lg-4` — form column (33% at lg)
           - `form.search-form` — pill-shaped form (radius 40px, white bg,
             shadow)
             - `div.search-input` — input wrapper (padding-right: 50px)
               - `input.search-bar.cl-form-control` — text input
             - `button.search-icon-btn` — circular search button
               - `i.fa > svg.cl-icon` — search magnifier SVG icon
- **Design tokens extracted from `css/style.css`:**
  - **Gradient:** `linear-gradient(to right, #3e2bcc 0%, #c643e0 100%)`
    (purple → magenta, horizontal, applied to body)
  - **Font:** `"Poppins", Arial, sans-serif` (base 16px, line-height 1.8,
    weight 400). Roboto is loaded locally but overridden by Poppins stack.
  - **Heading:** 28px, `color: #fff`, Poppins 400
  - **Form bg:** `#fff`, `border-radius: 40px`, shadow
    `0px 5px 20px -12px rgba(0,0,0,0.34)`
  - **Input:** height 50px, bg `#fff`, color `#000`, font-size 14px,
    `border-radius: 2px`, no border, padding 0 15px 0 20px, placeholder
    `rgba(0,0,0,0.7)`
  - **Search button:** 46×46px, `border-radius: 50%`, gradient
    `#3e2bcc → #c643e0`, white icon, absolute `top: 2px; right: 2px`,
    no box-shadow
  - **Section:** padding 7em 0
  - **Body color:** `gray`
  - **No dark mode defined** in the source

- **Recreation decisions:** No imagery to replace (solid gradient page, no
  photos). Icons → lucide-react Search icon. Form prevents default (no
  backend). No assets copied. Google Fonts Poppins link in index.html.

## Requirements

### Requirement: Page layout

The system SHALL render a full-viewport page with a horizontal purple-to-magenta
gradient background and centered content.

#### Scenario: Gradient background

- **GIVEN** the GradientScan page is rendered
- **WHEN** the page loads
- **THEN** the page background SHALL be a horizontal linear gradient from
  `#3e2bcc` (purple) on the left to `#c643e0` (magenta) on the right
- **AND** the gradient SHALL fill the entire viewport

#### Scenario: Centered content

- **GIVEN** the page is rendered
- **WHEN** the content is displayed
- **THEN** all content SHALL be centered horizontally within a max-width
  container (approximately 960px)
- **AND** vertical padding SHALL be approximately 7em top and bottom

### Requirement: Heading

The system SHALL render a centered heading above the search form.

#### Scenario: Heading content

- **GIVEN** the page is rendered
- **WHEN** the heading is displayed
- **THEN** it SHALL show the text "GradientScan" (replacing the original
  "Search Form/Bar #04")
- **AND** the heading SHALL be white (`#fff`)
- **AND** the heading font SHALL be Poppins at approximately 28px

#### Scenario: Heading spacing

- **GIVEN** the heading is displayed
- **WHEN** measured from the heading to the form below
- **THEN** there SHALL be approximately 3rem of bottom margin

### Requirement: Search form

The system SHALL render a pill-shaped white search form with an input field
and a circular search icon button.

#### Scenario: Form shape and styling

- **GIVEN** the search form is rendered
- **WHEN** the form is displayed
- **THEN** the form container SHALL have a white (`#fff`) background
- **AND** the form SHALL have a border-radius of 40px (pill shape)
- **AND** the form SHALL have a soft drop shadow
  (`0px 5px 20px -12px rgba(0,0,0,0.34)`)

#### Scenario: Input field

- **GIVEN** the form is rendered
- **WHEN** the input field is displayed
- **THEN** the input SHALL have a height of approximately 50px
- **AND** the input SHALL have a white background with black text
- **AND** the input SHALL have no visible border
- **AND** the placeholder text SHALL read "Search..."
- **AND** the input SHALL have left padding of 20px

#### Scenario: Search icon button

- **GIVEN** the form is rendered
- **WHEN** the search button is displayed
- **THEN** the button SHALL be a 46×46px circle (border-radius 50%)
- **AND** the button SHALL have the same purple-to-magenta gradient as
  the page background
- **AND** the button SHALL be positioned at the top-right of the form
  container (approximately 2px from top and right edges)
- **AND** the button SHALL display a white search/magnifier icon

#### Scenario: Form accessibility

- **GIVEN** the search form is rendered
- **WHEN** a screen reader encounters the form
- **THEN** the input SHALL have an accessible label or aria-label
- **AND** the search button SHALL have an accessible label or aria-label
- **AND** the form SHALL have a role or semantic element indicating search

#### Scenario: Form submission prevention

- **GIVEN** the form is rendered
- **WHEN** the user submits the form (Enter key or button click)
- **THEN** the default form submission SHALL be prevented
- **AND** no page navigation or reload SHALL occur

### Requirement: Component Dock footer

The system SHALL render a minimal footer with a Component Dock credit link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to `https://www.componentdock.com/`
- **AND** the link SHALL be styled appropriately for the gradient background
