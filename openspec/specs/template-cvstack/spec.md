# Template: CVStack (Personal vCard / CV)
<!-- prep-status: shipped-as=visage -->
> **SHIPPED-UNDER** — the ColorLib `vcard2` design this prep describes already
> ships as `apps/visage` (<https://visage.free.componentdock.com>).
> Do not scaffold `apps/cvstack`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-visage/spec.md`.

## Purpose

Recreation of [ColorLib Vcard2](https://colorlib.com/wp/template/vcard2/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

**Source slug:** `vcard2`
**Preview URL:** https://preview.colorlib.com/theme/vcard2/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/vcard2-free-template.jpg
**Design category:** Personal vCard / CV portfolio

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-brand` | `#8583e1` | Periwinkle/indigo accent — nav active, buttons, scrollbar, logo dot |
| `--color-dark` | `#100f3a` | Very dark navy — sidebar bg, logo text, headings, nav inactive tabs |
| `--color-body` | `#a5a5a5` | Light gray — body text |
| `--color-paragraph` | `#838293` | Muted purple-gray — paragraph text |
| `--color-muted` | `#7a798c` | Secondary text — info labels, subtitles, loader subtitles |
| `--color-light-text` | `#FFFFFF` | White — text on dark backgrounds |
| `--color-bg` | `#f5f0f0` | Light warm gray — main content area background |
| `--color-link-hover` | `#ffa07f` | Salmon — link hover underline |
| `--color-link-active` | `#FF6347` | Tomato — active/visited link |
| `--color-nav-bar` | `#9f9fb0` | Medium gray — nav bar background behind tabs |
| `--color-social` | `#8d8b9b` | Social icon color |
| `--color-selection` | `#e1dada` | Text selection background |
| **Font** | Montserrat (Google Fonts, 300–900) | All text |
| **Button radius** | 0px (square) | Header CTA button |
| **Nav tab style** | Square tabs, brand color active bg | Horizontal tab bar |
| **Sidebar width** | 473px fixed | Left sidebar with profile |

## Layout Structure

Full-viewport app (`100vw × 100vh`, overflow hidden) with padding frame (40px left, 41px right, 97px top, 45px bottom).

### Section Order

1. **Header** — Fixed top bar: logo ("CVStack" with colored dot) + horizontal tab navigation (About, Skills, Services, Experience, Education, Portfolio, Testimonials, Contact) + "Available for freelance work" CTA button. Tabs are square pill-shaped in dark navy (`#100f3a`), active tab uses brand (`#8583e1`). Header shrinks on scroll (97px → 60px).
2. **Sidebar (General Info)** — 473px fixed-width dark panel (`#100f3a`):
   - Profile image (placeholder via picsum.photos)
   - "General Information" title
   - Info list with icons: Name, Location, Date of Birth, Email, Phone, Website
   - Social links row (Google+, Pinterest, Facebook, Twitter — use lucide-react icons)
3. **Main Content Area** — Flex-grow right panel (`#f5f0f0` bg):
   - Name heading ("Jeremy Smith" — large, 92px, bold, dark navy)
   - Subtitle ("HTML5 & CSS Developer" — 30px, muted)
   - Scrollable content with sections:
     - **About** — Description text paragraph
     - **Skills** — Circular progress loaders (intuition 75%, creativity 85%, pure luck 25%, awesomeness 95%) — use animated SVG circles
     - **Services** — Service cards listing offerings
     - **Experience** — Timeline of work experience
     - **Education** — Timeline of education entries
     - **Portfolio** — Image grid/gallery of projects
     - **Testimonials** — Client testimonial cards with quotes
     - **Contact** — Contact form (name, email, subject, message, submit button)
4. **Footer** — Simple copyright line: "© 2026 | Made with ❤ by Component Dock" linking https://www.componentdock.com/

## Requirements

### Feature: CVStack Personal vCard Template

#### Scenario: Page loads with header and sidebar visible

- **GIVEN** the user opens the CVStack page
- **THEN** the header should display the logo "CVStack" with a colored dot
- **AND** the navigation should show 8 tabs: About, Skills, Services, Experience, Education, Portfolio, Testimonials, Contact
- **AND** the sidebar should display a profile image and general information

#### Scenario: Navigation tabs switch content sections

- **GIVEN** the user is on the About section
- **WHEN** the user clicks the "Skills" tab
- **THEN** the main content area should display the Skills section
- **AND** the "Skills" tab should be highlighted with the brand color

#### Scenario: Sidebar displays personal information

- **GIVEN** the sidebar is visible
- **THEN** it should show Name, Location, Date of Birth, Email, Phone, and Website fields
- **AND** each field should have an icon and label-value pair

#### Scenario: Social links are present in sidebar

- **GIVEN** the sidebar is visible
- **THEN** there should be 4 social media icon links
- **AND** each link should have a hover effect changing to white

#### Scenario: Skills section shows animated progress

- **GIVEN** the user navigates to the Skills section
- **THEN** there should be 4 circular skill indicators
- **AND** each indicator should display a skill name and percentage
- **AND** the circles should animate on view

#### Scenario: Contact form validates inputs

- **GIVEN** the user is on the Contact section
- **WHEN** the user submits the form without filling any fields
- **THEN** validation errors should appear
- **WHEN** the user fills in name, email, subject, and message
- **AND** clicks submit
- **THEN** the form should submit successfully

#### Scenario: Header shrinks on scroll

- **GIVEN** the page is loaded
- **WHEN** the user scrolls down in the main content area
- **THEN** the header height should reduce from 97px to 60px
- **AND** the logo should shrink from 36px to 24px

#### Scenario: Footer displays Component Dock branding

- **GIVEN** the page is loaded
- **THEN** the footer should contain a link to https://www.componentdock.com/
- **AND** the link text should reference "Component Dock"

#### Scenario: Responsive layout adapts to smaller screens

- **GIVEN** the user views the page on a screen narrower than 1200px
- **THEN** the sidebar should stack above the main content
- **AND** a hamburger menu should appear for navigation

#### Scenario: Dark mode toggle works

- **GIVEN** the page is loaded in light mode
- **WHEN** the user toggles dark mode
- **THEN** the sidebar background should remain dark
- **AND** the main content background should switch to a dark tone
- **AND** all text should remain readable

## Verification checklist

- [ ] Header with logo + 8 nav tabs + CTA button renders correctly
- [ ] Sidebar shows profile image, general info list, social links
- [ ] Main content switches between 8 sections based on active tab
- [ ] Skills section has 4 animated circular progress indicators
- [ ] Services section lists service cards
- [ ] Experience section has timeline entries
- [ ] Education section has timeline entries
- [ ] Portfolio section shows image grid with hover effects
- [ ] Testimonials section has quote cards
- [ ] Contact form has validation and submit behavior
- [ ] Footer links to https://www.componentdock.com/
- [ ] Header shrinks on scroll (97px → 60px)
- [ ] Responsive: sidebar stacks on narrow screens, hamburger menu appears
- [ ] Design tokens match: Montserrat font, #8583e1 brand, #100f3a dark, #f5f0f0 bg
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Uses picsum.photos for placeholder images
- [ ] Uses lucide-react for icons
- [ ] Uses packages/ui components (Button, Card, cn()) where applicable
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] public/CNAME contains cvstack.free.componentdock.com
- [ ] homepage field set to https://cvstack.free.componentdock.com
