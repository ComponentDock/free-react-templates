# Template: Showpiece (Portfolio / Creative Showcase)

## Purpose

Recreation of ColorLib **Portfolio 2** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/portfolio-2/
- Preview: https://preview.colorlib.com/theme/portfolio2/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio2-free-template.jpg
- New name: `showpiece` (apps/showpiece, @free-react-templates/showpiece)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Primary (brand blue) | `#0181F5` | Buttons, links, slider subtitle, outline text accents, gallery hover circle, "More Blogs" button, copyright links |
| Dark background | `#040E27` | Footer background, "More Works" bar background |
| Heading text | `#1F1F1F` | Body heading color |
| Dark text | `#191d34` | Secondary heading color |
| Body text | `#727272` | Paragraphs, body text |
| Muted text | `#7A838B` | Secondary labels |
| Secondary muted | `#7e7e7e` | Tertiary text |
| Light gray | `#cccccc` | Divider lines, muted elements |
| Very light outline | `#EFEFF1` | Outline text stroke for services/blog background words |
| Gallery category color | `#B3D9FC` | Gallery hover category label |
| Copyright text | `#596672` | Footer copyright |
| White | `#fff` | Slider heading, footer widget titles, button text |
| Primary font | `"Alata", sans-serif` | All headings, nav, buttons, UI text |
| Secondary font | `"Roboto", sans-serif` | Body text fallback |
| Border radius | `0px` | Buttons, most elements (sharp corners) |
| Border radius (circle) | `50%` | Gallery hover overlay circle, icon images |
| Slider height | `725px` | Hero section height |
| Gallery item width | `35%` (normal), `30%` (small_width) | Portfolio grid masonry-like layout |

## Visual design notes

- Clean, modern creative portfolio with large hero area
- Big outlined text watermark ("Portfolio", "Services", "Blog") behind sections
- Portfolio grid with hover overlay: blue circular reveal with project title
- Dark navy footer with multiple widget columns
- Sharp-cornered buttons (border-radius: 0)
- Gallery has a distinctive blue circle that slides in from left on hover
- "More Works" bar in dark background links to full portfolio page

## Gherkin requirements

### Requirement: Sticky header with navigation

The template SHALL display a sticky header with a logo on the left and a desktop navigation menu (Home, About, Blog dropdown, Pages dropdown, Contact) on the right. On mobile, a hamburger menu SHALL toggle the navigation.

#### Scenario: Desktop renders all nav links

- **WHEN** the page loads on desktop
- **THEN** the header shows logo and navigation links: Home, About, Blog, Pages, Contact
- **AND** Blog and Pages have dropdown submenus

#### Scenario: Mobile hamburger toggle

- **WHEN** the user taps the mobile menu toggle
- **THEN** the mobile navigation menu expands
- **AND** all navigation links are visible

#### Scenario: Sticky header on scroll

- **WHEN** the user scrolls down
- **THEN** the header remains fixed at the top of the viewport

### Requirement: Hero section with greeting and tagline

The template SHALL display a full-width hero section with a background image, large outlined watermark text "Portfolio", a subtitle "Hello Everyone" in blue, and a heading describing design capabilities.

#### Scenario: Hero displays greeting

- **WHEN** the page loads
- **THEN** the hero section shows "Hello Everyone" subtitle in blue (#0181F5)
- **AND** shows the heading text about design capabilities

#### Scenario: Hero has decorative outline text

- **WHEN** the hero section renders
- **THEN** a large outlined "Portfolio" text is visible as a decorative background element

### Requirement: Portfolio gallery with hover overlays

The template SHALL display a portfolio gallery grid with 9 project items in a masonry-like layout (mix of 35% and 30% widths). Each item SHALL have an image and a hover overlay showing the category label and project title.

#### Scenario: Gallery displays all items

- **WHEN** the portfolio section renders
- **THEN** 9 portfolio items are visible with images

#### Scenario: Gallery hover reveals overlay

- **WHEN** the user hovers over a portfolio item
- **THEN** a blue circular overlay animates in
- **AND** the category label and project title become visible

#### Scenario: More Works link

- **WHEN** the portfolio gallery renders
- **THEN** a "More Works" link bar is visible below the gallery

### Requirement: Services section with three service cards

The template SHALL display a services section with three service cards (3D Modeling, UI/UX Design, Architectural Design). Each card SHALL have an SVG icon, title, and description. The section SHALL have a large outlined "Services" watermark text.

#### Scenario: Services renders all cards

- **WHEN** the services section renders
- **THEN** three service cards are visible: 3D Modeling, UI/UX Design, Architectural Design

#### Scenario: Services has decorative outline text

- **WHEN** the services section renders
- **THEN** a large outlined "Services" text is visible as a decorative background element

### Requirement: Blog carousel with articles

The template SHALL display a blog section with a carousel of blog articles. Each article SHALL show an image, date, title, author thumbnail, author name, and author role. The section SHALL have a "More Blogs" button and a large outlined "Blog" watermark.

#### Scenario: Blog displays articles

- **WHEN** the blog section renders
- **THEN** blog article cards are visible in a carousel

#### Scenario: More Blogs button

- **WHEN** the blog section renders
- **THEN** a "More Blogs" button is visible

### Requirement: Footer with Component Dock link

The template SHALL display a dark navy (#040E27) footer with four columns: logo, Services links, Useful Links, and Follow Us social links. The footer SHALL include a copyright line and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer displays all columns

- **WHEN** the footer renders
- **THEN** four columns are visible: logo, Services, Useful Links, Follow Us

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is visible with text "Component Dock"
- **AND** the link opens in a new tab

#### Scenario: Footer has accessible social links

- **WHEN** the footer renders
- **THEN** social links (Dribbble, Behance, Instagram, Facebook) have accessible labels

### Requirement: Contact page

The template SHALL provide a contact page with a contact form and contact information.

#### Scenario: Contact form renders

- **WHEN** the user navigates to the contact page
- **THEN** a contact form with name, email, subject, and message fields is visible
- **AND** a submit button is present

## Verification checklist

- [ ] Header sticky on scroll with logo and nav links
- [ ] Hero section with background image, subtitle, and heading
- [ ] Portfolio gallery with 9 items in masonry grid
- [ ] Gallery hover overlay with blue circle animation
- [ ] "More Works" link bar
- [ ] Services section with 3 service cards
- [ ] Blog carousel with article cards
- [ ] "More Blogs" button
- [ ] Dark navy footer with 4 columns
- [ ] Footer links to Component Dock
- [ ] Responsive: mobile menu toggle, stacked gallery items
- [ ] Design tokens match: #0181F5 primary, #040E27 dark, Alata font
- [ ] Outline text watermark decorative elements in sections
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
