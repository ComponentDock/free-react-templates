# Template: Fixero (Handyman & Construction Landing)

Recreation of ColorLib "Handyman" (https://colorlib.com/wp/template/handyman/)

## Purpose

Provide a free, production-ready handyman and construction landing page template built with React 19, Tailwind CSS 4, and TypeScript. Faithfully recreates the ColorLib "Handyman" design under the name "Fixero" with matching sections, layout, and design tokens.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Handyman** — https://colorlib.com/wp/template/handyman/
- **Preview**: https://preview.colorlib.com/theme/handyman/ — HTTP 200 on 2026-10-23; measured `css/style.min.css` (162,977 bytes, Bootstrap 5 based).
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/handyman-free-template.jpg
- **Measured how**: hex-literal census of `https://preview.colorlib.com/theme/handyman/css/style.min.css?v=3.0.0`.

### Colors

| Token        | Value     | Occurrences | Role                                                |
| ------------ | --------- | ----------- | --------------------------------------------------- |
| Brand orange | `#fb7400` | 42          | Active nav item, CTA fills, short underline accents |
| Ink slate    | `#364d59` | 2           | Headings and body ink                               |
| Dark         | `#212529` | 41          | Bootstrap dark text / dark button                   |
| Mid grey     | `#343a40` | 18          | Dark secondary fills                                |
| Muted        | `#6c757d` | 22          | Paragraph copy                                      |
| Light        | `#f8f9fa` | 19          | Light section bands, input fills                    |

### Typography

| Element         | Family      | Evidence                                                        |
| --------------- | ----------- | --------------------------------------------------------------- |
| Body + headings | `Work Sans` | Google Fonts `Work Sans:400,500,700`; app loads the same family |

### Shapes & rhythm

| Property | Reference value                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------- |
| Radii    | Bootstrap `--bs-border-radius` (12), `1rem` (4), `50%` (6)                                                       |
| Hero     | dark photographic hero, left-aligned white headline with an orange rule under it                                 |
| Layout   | hero with overlapping Get Quotation card -> services -> about tabs -> testimonials -> projects -> blog -> footer |

### Section order (shipped app, 1:1 with the reference)

`Navbar -> Hero -> QuotationForm -> Services -> AboutTabs -> Testimonials -> Projects -> Blog -> Footer`

### Delta vs shipped app

- `--color-lavender: #dedffe` occurs **0 times** in the reference stylesheet (the services band reads white / `#f8f9fa`); confirm before relying on it in a fidelity pass.

## Requirements

### Requirement: Navbar with logo and navigation links

The template SHALL display a fixed navigation bar with the "Fixero" logo (orange dot accent), navigation links (Home, About, Services, Projects, Blog, Contact), and a dark mode toggle.

#### Scenario: Logo and links are visible

- **WHEN** the page loads
- **THEN** I see "Fixero" with an orange dot in the logo area
- **AND** I see navigation links: Home, About, Services, Projects, Blog, Contact

#### Scenario: Dark mode toggle works

- **WHEN** I click the dark mode toggle button
- **THEN** the page switches to dark mode
- **AND** the toggle shows a light mode option

#### Scenario: Navbar scrolls with background change

- **WHEN** I scroll down the page
- **THEN** the navbar background changes from transparent to dark

### Requirement: Hero section with background image

The template SHALL display a full-width hero section with a dark overlay on a background image and the heading "Perfection is always in our mind."

#### Scenario: Hero heading is visible

- **WHEN** the page loads
- **THEN** I see the heading "Perfection is always in our mind."
- **AND** the hero has a background image with dark overlay

### Requirement: Quotation form section

The template SHALL display a split layout with descriptive text on the left and a contact form (Name, Email, Message fields, Send Message button) on the right.

#### Scenario: Form fields are present

- **WHEN** the page loads
- **THEN** I see Name, Email, and Message input fields
- **AND** I see a "Send Message" button

#### Scenario: Form submission shows confirmation

- **WHEN** I fill in the form and click Send Message
- **THEN** I see a thank you confirmation message

### Requirement: Services section with 6 service cards

The template SHALL display 6 service cards on a lavender background (#dedffe) with icons, titles, and descriptions: Renovation, Finishing, Building Construction, House Build, Fence Construction, Bridge Construct.

#### Scenario: All service cards are visible

- **WHEN** the page loads
- **THEN** I see 6 service cards with icons and descriptions

### Requirement: About section with tabbed content

The template SHALL display a tabbed "We Are Leader In The Construction World" section with 3 tabs: Technology, Quality, Staff. Each tab shows an image and descriptive text.

#### Scenario: Tabs switch content

- **WHEN** I click the Quality tab
- **THEN** I see the Quality image and description
- **AND** the Technology content is no longer visible

### Requirement: Testimonials section

The template SHALL display 2 testimonial cards with blockquotes, avatars, names, and roles on a light gray background.

#### Scenario: Testimonials are visible

- **WHEN** the page loads
- **THEN** I see 2 testimonial cards with quotes and avatars

### Requirement: Projects gallery section

The template SHALL display 6 project cards with images that show an overlay with category and title on hover.

#### Scenario: Project cards are visible

- **WHEN** the page loads
- **THEN** I see 6 project cards with images

### Requirement: Blog section

The template SHALL display 3 blog post cards with images, titles, dates, authors, and excerpts.

#### Scenario: Blog posts are visible

- **WHEN** the page loads
- **THEN** I see 3 blog post cards with titles and excerpts

### Requirement: Footer with Component Dock link

The template SHALL display a dark footer with About Us text, 4 Quick Links columns, and a "Component Dock" attribution linking to https://www.componentdock.com/.

#### Scenario: Footer has Component Dock link

- **WHEN** the page loads
- **THEN** I see a "Component Dock" link in the footer
- **AND** the link opens https://www.componentdock.com/

#### Scenario: Footer has Quick Links

- **WHEN** the page loads
- **THEN** I see 4 columns of Quick Links in the footer

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/fixero/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/fixero/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with logo and navigation links — I see "Fixero" with an orange dot in the logo area
- [x] Hero section with background image — I see the heading "Perfection is always in our mind."
- [ ] Quotation form section — I see Name, Email, and Message input fields
- [ ] Services section with 6 service cards — I see 6 service cards with icons and descriptions
- [ ] About section with tabbed content — I see the Quality image and description
- [ ] Testimonials section — I see 2 testimonial cards with quotes and avatars
- [ ] Projects gallery section — I see 6 project cards with images
- [ ] Blog section — I see 3 blog post cards with titles and excerpts
