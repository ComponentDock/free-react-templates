# Template: Chalet (Personal Portfolio)
<!-- prep-status: shipped-as=lenscape -->
> **SHIPPED-UNDER** — the ColorLib `schmidt` design this prep describes already
> ships as `apps/lenscape` (<https://lenscape.free.componentdock.com>).
> Do not scaffold `apps/chalet`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-lenscape/spec.md`.

**Design category:** Personal Portfolio / Creative Professional

## Purpose

Recreation of ColorLib **Schmidt** (`https://colorlib.com/wp/template/schmidt/`) — a single-page personal portfolio template for a UI/UX designer & developer.

- **Source template:** Schmidt (ColorLib)
- **Preview URL:** `https://preview.colorlib.com/theme/schmidt/`
- **Stack:** Vite + React 19 + TypeScript + Tailwind CSS 4
- **Package:** `@free-react-templates/chalet`
- **App folder:** `apps/chalet`
- **Deploy target:** `https://chalet.free.componentdock.com`

## Design tokens

Extracted from the live preview DOM and `css/style.css`.

### Colors

| Token                 | Value                                     | Usage                                                        |
| --------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `--brand-gold`        | `#d5c455`                                 | Primary CTA buttons, accent lines, icon colors, hover states |
| `--brand-gold-hover`  | transparent bg with `#d5c455` text/border | Primary button hover                                         |
| `--brand-white`       | `#ffffff`                                 | Secondary button bg, card backgrounds                        |
| `--brand-white-hover` | transparent bg with `#ffffff` text/border | Secondary button hover                                       |
| `--text-primary`      | `#212529`                                 | Body text, headings                                          |
| `--text-muted`        | `#6c757d`                                 | Subtext, meta info                                           |
| `--bg-light`          | `#f8f8f8`                                 | Alternate section backgrounds                                |
| `--bg-white`          | `#ffffff`                                 | Main content backgrounds                                     |
| `--bg-dark`           | `#222222`                                 | Dark sections (footer areas)                                 |
| `--border-subtle`     | `#e9ecef` / `rgba(0,0,0,0.05)`            | Dividers, card borders                                       |

### Typography

- **Font family:** `"Poppins", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
- **Headings:** Poppins, weights 600–700
- **Body:** Poppins, weight 400, line-height 1.5–1.7
- **UI labels (role, category):** Uppercase, letter-spacing ~0.1em, weight 500–600, gold color
- **Buttons:** Uppercase, weight 600, letter-spacing 0.05em

### Spacing & Layout

- **Container max-width:** ~1140px (Bootstrap container)
- **Section vertical padding:** ~80–100px (5–6rem)
- **Card/internal spacing:** 1.5–2rem
- **Grid gaps:** 1.5–2rem (24–32px)

### Border radius

- **Buttons:** `0.25rem` (4px) — small, sharp-ish corners
- **Cards/images:** `0` (sharp) or `0.25rem` for interactive cards
- **Form inputs:** `0.25rem`

### Shadows

- **Card hover:** `0 10px 30px rgba(0,0,0,0.1)` (subtle elevation)
- **Button focus:** `0 0 0 0.25rem rgba(213,196,85,0.25)` (gold ring)

### Breakpoints (Bootstrap 5 defaults)

- `sm`: 576px, `md`: 768px, `lg`: 992px, `xl`: 1200px, `xxl`: 1400px

### Imagery

- **Hero portrait:** Full-height right panel, subject pointing toward content
- **Portfolio thumbnails:** 3:2 aspect ratio, grayscale → color on hover
- **Blog cards:** 16:9 featured images
- **Testimonial avatars:** Circular, ~80px
- **Placeholder strategy:** `https://picsum.photos/seed/chalet-<n>/<w>/<h>` (deterministic per template)

## Section structure (1:1 match with preview)

1. **Navbar** — Fixed top, logo "Chalet.", hamburger on mobile, smooth scroll links
2. **Hero (Split-Screen)** — Left: role label, headline, dual CTAs; Right: full-height portrait with gold bg
3. **About** — Two-column: bio text + stats (experience, projects, clients)
4. **Services** — 3-column grid of icon + title + description cards
5. **Skills** — Progress bars with labels and percentages
6. **Portfolio** — Filterable grid (All, Design, Development, Branding), 6 items, hover overlay
7. **Testimonials** — Carousel/slider, 3+ items, avatar + quote + name/role
8. **Blog** — 3-column grid of post cards (image, meta, title, excerpt, read more)
9. **Contact** — Two-column: form (name, email, subject, message) + contact info cards
10. **Footer** — Copyright + "Made with Component Dock" link (`https://www.componentdock.com/`)

## Requirements

### Feature: Chalet template behaviour

Feature: Chalet — Personal Portfolio Template

Background:
- **GIVEN** the user visits the Chalet portfolio site
- **AND** the viewport is at least 1200px wide

@navbar

#### Scenario: Navbar renders and navigates

- **GIVEN** the page has loaded
- **THEN** a fixed navbar is visible at the top
- **AND** the logo "Chalet." appears on the left
- **AND** navigation links for each section exist (About, Services, Skills, Portfolio, Testimonials, Blog, Contact)
- **AND** clicking a link scrolls smoothly to that section

@navbar

#### Scenario: Mobile navbar toggles

- **GIVEN** the viewport is mobile (< 768px)
- **AND** the navbar is visible
- **THEN** a hamburger button is visible
- **AND** clicking it reveals the navigation links
- **AND** clicking a link closes the menu and scrolls to the section

@hero

#### Scenario: Hero split-screen renders correctly

- **GIVEN** the hero section is in view
- **THEN** the section is split vertically into two equal columns
- **AND** the left column has a white background
- **AND** the right column has a gold background (#d5c455)
- **AND** the left column contains:
| Element              | Content                              |
| Role label           | "UI/UX DESIGNER & DEVELOPER"         |
| Headline             | "I'm [First Name]" / "[Last Name]"   |
| Primary CTA          | "MORE ABOUT ME →" (gold bg)          |
| Secondary CTA        | "HIRE ME →" (white bg)               |
| Copyright footer     | "Copyright ©[Year] All rights reserved | Made with ❤ by Component Dock" |

@hero

#### Scenario: Hero CTAs have correct styling

- **GIVEN** the hero CTAs are visible
- **THEN** the primary button has gold background, white text, 4px radius
- **AND** the secondary button has white background, black text, gold border, 4px radius
- **AND** hovering primary shows transparent bg, gold text/border
- **AND** hovering secondary shows transparent bg, white text/border

@about

#### Scenario: About section renders bio and stats

- **GIVEN** the About section is in view
- **THEN** a two-column layout appears (text left, stats right on desktop)
- **AND** the left column has a heading "About Me" and descriptive paragraphs
- **AND** the right column shows 3 stat items with icons:
| Stat label       | Example value |
| Years Experience | 8+            |
| Projects Done    | 150+          |
| Happy Clients    | 80+           |

@services

#### Scenario: Services grid renders 3 cards

- **GIVEN** the Services section is in view
- **THEN** a 3-column grid of service cards appears
- **AND** each card has an icon, title, and description
- **AND** cards have subtle hover elevation

@skills

#### Scenario: Skills progress bars render

- **GIVEN** the Skills section is in view
- **THEN** labeled progress bars appear for each skill
- **AND** each bar shows a percentage label
- **AND** bars animate on scroll into view

@portfolio

#### Scenario: Portfolio filterable grid renders

- **GIVEN** the Portfolio section is in view
- **THEN** filter tabs appear: All, Design, Development, Branding
- **AND** a grid of 6 project thumbnails displays
- **AND** each thumbnail shows an image, category tag, and project title
- **AND** hovering reveals an overlay with "View Project" link
- **AND** clicking a filter updates the visible items

@testimonials

#### Scenario: Testimonials carousel renders

- **GIVEN** the Testimonials section is in view
- **THEN** a carousel with 3+ testimonials appears
- **AND** each item shows avatar, quote, name, and role
- **AND** navigation arrows/dots allow browsing

@blog

#### Scenario: Blog grid renders 3 posts

- **GIVEN** the Blog section is in view
- **THEN** a 3-column grid of blog post cards appears
- **AND** each card has a featured image, date/category meta, title, excerpt, and "Read More" link

@contact

#### Scenario: Contact form and info render

- **GIVEN** the Contact section is in view
- **THEN** a two-column layout appears (form left, info right)
- **AND** the form has fields: Name, Email, Subject, Message, Submit button
- **AND** the info column shows address, phone, email with icons
- **AND** submitting valid data shows success state
- **AND** submitting invalid data shows inline validation errors

@footer

#### Scenario: Footer renders with Component Dock link

- **GIVEN** the Footer is in view
- **THEN** copyright text appears
- **AND** a "Made with Component Dock" link points to https://www.componentdock.com/
- **AND** no Colorlib attribution appears in the footer

@responsive

#### Scenario: Layout adapts to tablet (768px)

- **GIVEN** the viewport is 768px wide
- **THEN** hero stacks vertically (text above portrait)
- **AND** grids become 2-column (services, portfolio, blog)
- **AND** navbar collapses to hamburger

@responsive

#### Scenario: Layout adapts to mobile (375px)

- **GIVEN** the viewport is 375px wide
- **THEN** all grids become single-column
- **AND** hero text centers
- **AND** contact form stacks
- **AND** footer centers

@accessibility

#### Scenario: Semantic HTML and ARIA

- **GIVEN** the page loads
- **THEN** landmarks exist: <header>, <main>, <section>, <footer>
- **AND** all images have alt text
- **AND** form inputs have associated labels
- **AND** focus-visible outlines are present on all interactive elements
- **AND** color contrast meets WCAG AA

## Verification checklist

- [ ] Spec file created at `openspec/specs/template-chalet/spec.md`
- [ ] Design tokens match preview (colors, fonts, radius, shadows)
- [ ] Section list matches preview screenshot 1:1
- [ ] Gherkin scenarios cover every user-visible behavior
- [ ] New name "Chalet" does not collide with existing apps/ or specs/
- [ ] No ColorLib references in spec (only in this Purpose section)
- [ ] Footer links to Component Dock, not Colorlib
- [ ] Placeholder image seeds use `chalet-<n>` pattern
- [ ] Spec validates with `npm run spec:validate` (when implemented)
