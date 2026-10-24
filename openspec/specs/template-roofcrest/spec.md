# Template: Roofcrest (Roofing / Construction)
<!-- prep-status: shipped-as=shingle -->
> **SHIPPED-UNDER** — the ColorLib `roofing` design this prep describes already
> ships as `apps/shingle` (<https://shingle.free.componentdock.com>).
> Do not scaffold `apps/roofcrest`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-shingle/spec.md`.

## Purpose

Recreation of ColorLib's **Roofing** contractor/construction company template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/roofing/
- **Preview (analyzed):** https://preview.colorlib.com/theme/roofing/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/roofing-free-template.jpg
- **Package:** `@free-react-templates/roofcrest`
- **Surge target:** `https://roofcrest.free.componentdock.com`

## Design Tokens

Extracted from the preview's `css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Brand / primary | `#d9ba2b` | Buttons, counter bg, video icon, accent text |
| Background light | `#ebecf1` | Alternating section backgrounds (`.bg-light`) |
| Text dark | `#000000` | Headings, strong text |
| Text body | `#5c5c5c` | Paragraph copy |
| Font family | `Poppins, sans-serif` | Global body + headings (via Cloudflare font service) |
| Button radius | `4px` | All `.btn` elements |
| Button style | uppercase, letter-spacing 1px, font-weight 600, font-size 11px | All CTA buttons |
| Counter icon bg | `#fff` (white circle) | Counter section icon circles |
| Counter icon text | `#d9ba2b` | Counter section icon color |
| Nav pill active bg | white with shadow | Tab navigation active state |
| Overlay | semi-transparent dark | Hero section overlays |

## Section Structure (order from preview DOM)

1. **Navbar** — dark background, logo with roof icon + "Roofing" text, nav links: Home, About, Services, Project, Blog, Contact, hamburger for mobile
2. **Hero Slider** — 2-slide full-viewport-height carousel with parallax bg images, centered text: "We care about your home" heading, description paragraph, two buttons: "Get a quote" + "Learn more"
3. **About/Quote Section** — light bg, 2-column: left = heading "We help more than 45 years installing your roof" + paragraph + tabbed content (Our Mission, Our Vision, Our Value); right = "Get a Quote" form (service select, name, date, time, message, submit)
4. **Counter Section** — brand color (#d9ba2b) bg, 4 stats: 45 Years of Experience, 8500 Projects Completed, 2342 Happy Clients, 30 Business Partners. Each: white icon circle + number + label
5. **Services Section** — "Our Best Services" heading, 2-column: left = vertical tab navigation (Skylights, Waterproofing, Industrial Roofing, Residential Roofing, Gutter Cleaning, Commercial Roofing) with icons; right = tab content (title, paragraphs, checklist)
6. **Projects Section** — "Done Projects" heading, 4-column grid of work images with hover overlay (expand icon), title, and category label
7. **Testimonials** — "Testimonial" heading, carousel of testimonial items: user avatar, quote icon, paragraph, author name + position
8. **Blog Section** — 3-column blog entries: background image, author avatar + name + date, title
9. **Footer** — 5-column: Logo + description + social links, Services list, Business Hours, Contact info, Newsletter subscribe

## Requirements

### Feature: Navbar

#### Scenario: Logo and navigation display

- **GIVEN** the user is on any page
- **THEN** a roof icon and "Roofcrest" logo are visible
- **AND** navigation links "Home", "About", "Services", "Project", "Blog", "Contact" are visible

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is mobile width (< 768px)
- **THEN** a hamburger menu icon is visible
- **AND** clicking it opens a slide-in mobile menu

### Feature: Hero Slider

#### Scenario: Hero slider displays

- **GIVEN** the user lands on the page
- **THEN** a full-viewport-height hero slider with parallax backgrounds is shown
- **AND** the heading "We care about your home" is displayed
- **AND** two buttons appear: "Get a quote" and "Learn more"

#### Scenario: Hero auto-slides

- **GIVEN** the hero slider is loaded
- **THEN** slides advance automatically at regular intervals

### Feature: About & Quote

#### Scenario: About section displays

- **GIVEN** the user scrolls past the hero
- **THEN** "We help more than 45 years installing your roof" heading is shown
- **AND** a paragraph about the company is visible
- **AND** tabbed content with "Our Mission", "Our Vision", "Our Value" is displayed

#### Scenario: Quote form displays

- **GIVEN** the about section is visible
- **THEN** a "Get a Quote" form is shown on the right
- **AND** fields for Service (select), Name, Date, Time, Message are visible
- **AND** a submit button is present

### Feature: Counter Section

#### Scenario: Stats display

- **GIVEN** the user scrolls to the counter section
- **THEN** a golden background (#d9ba2b) section with 4 stats is shown
- **AND** "45 Years of Experience", "8500 Projects Completed", "2342 Happy Clients", "30 Business Partners" are displayed

### Feature: Services

#### Scenario: Tabbed services display

- **GIVEN** the user scrolls to the services section
- **THEN** "Our Best Services" heading is shown
- **AND** a vertical tab navigation with 6 services is visible (Skylights, Waterproofing, Industrial Roofing, Residential Roofing, Gutter Cleaning, Commercial Roofing)
- **AND** clicking each tab shows title, paragraphs, and a checklist

### Feature: Projects

#### Scenario: Project grid displays

- **GIVEN** the user scrolls to the projects section
- **THEN** "Done Projects" heading is shown
- **AND** 4 project images are displayed in a row
- **AND** each has a hover overlay with expand icon, title, and category

### Feature: Testimonials

#### Scenario: Testimonial carousel displays

- **GIVEN** the user scrolls to testimonials
- **THEN** "Testimonial" heading is shown
- **AND** a carousel of testimonials appears
- **AND** each has a user avatar, quote icon, paragraph, author name, and position

### Feature: Blog

#### Scenario: Three blog entries display

- **GIVEN** the user scrolls to the blog section
- **THEN** 3 blog cards appear in a row
- **AND** each has a background image, author info (avatar + name + date), and title

### Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the user scrolls to the footer
- **THEN** 5 columns are shown: Logo + description, Services list, Business Hours, Contact info, Newsletter
- **AND** social media links (Twitter, Facebook, Instagram) are visible

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"

## Verification checklist

- [ ] All sections present in correct order matching preview DOM
- [ ] Brand color `#d9ba2b` applied to buttons, counters, accent elements
- [ ] Font Poppins applied globally
- [ ] Buttons have 4px border-radius, uppercase, letter-spacing
- [ ] Hero is full viewport height with parallax bg and 2 slides
- [ ] About section has tabbed content (Mission/Vision/Value)
- [ ] Quote form with 5 fields + submit
- [ ] Counter section with golden bg and 4 stats
- [ ] Services section with vertical tab navigation and 6 services
- [ ] Projects grid with 4 images and hover overlays
- [ ] Testimonials with carousel, avatars, quote icons
- [ ] Blog with 3 cards and author info
- [ ] Footer is 5-column with services, hours, contact, newsletter
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] All images use picsum.photos placeholders (deterministic seeds)
- [ ] Mobile responsive: hamburger menu, stacked columns
- [ ] 100% test coverage
