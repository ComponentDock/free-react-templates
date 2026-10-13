# Template: Pupa (Portfolio)

## Purpose

Recreation of ColorLib "Cocoon" — a portfolio website template with sidebar navigation, masonry portfolio grid, about/services/blog/contact pages.

- **Source:** https://colorlib.com/wp/template/cocoon/
- **Preview:** https://preview.colorlib.com/theme/cocoon/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `pupa` (single-page React app at `apps/pupa`)

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/cocoon/assets/css/main.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Montserrat", sans-serif` (weights 300, 300i, 400, 500) | Body + headings |
| Brand color | `#99896e` (warm taupe/gold) | Accent, buttons, section underlines, sidebar titles |
| Dark background | `#18181c` (near-black) | Sidebar, menu button hover |
| Body text color | `#9c9ca9` (muted gray) | Paragraphs, body copy |
| Heading color | `#18181c` | h3, h4, h5 |
| Page background | `#f7f7f7` (off-white) | Page body, loader overlay |
| Card background | `#ffffff` | Portfolio items, blog cards |
| Button radius | `50px` (pill) | All buttons |
| Button primary bg | `#99896e` | Primary CTA buttons |
| Section title underline | 2px solid `#99896e`, width 30px | Section headings |
| Loader | Circular spinner, `#99896e` border | Page load animation |

## Layout Structure

The template uses a **sidebar + content** layout:

- **Sidebar (left, 2-col / ~16.67%):** Fixed dark panel with logo, nav menu, filter menu, social icons, copyright
- **Content area (right, 10-col / ~83.33%):** Scrollable content

## Requirements

### Feature: Pupa template behaviour

#### Scenario: Sidebar Navigation

- **GIVEN** the user visits the page
- **THEN** a fixed sidebar is visible on the left
- **AND** the sidebar has a dark background (#18181c)
- **AND** the sidebar contains a logo at the top
- **AND** the sidebar contains navigation links: Home, About, Services, Portfolio, Blog, Contact
- **AND** the sidebar contains a filter menu with options: All, Branding, Design, Photography, Architecture
- **AND** the sidebar contains social media icons (Pinterest, Facebook, Twitter, Dribbble)
- **AND** the sidebar contains a copyright line at the bottom
- **AND** clicking a nav link scrolls to or navigates to the corresponding section

#### Scenario: Portfolio Grid (Home)

- **GIVEN** the user is on the home/portfolio section
- **THEN** a masonry grid of portfolio items is displayed
- **AND** each portfolio item shows a placeholder image
- **AND** hovering over a portfolio item reveals an overlay with a plus icon and project name
- **AND** portfolio items are filterable by category (branding, design, photography, architecture)
- **AND** clicking "All" shows all items
- **AND** clicking a category shows only items in that category
- **AND** the grid uses a 4-column layout on large screens
- **AND** the grid uses a 2-column layout on medium screens
- **AND** the grid uses a 1-column layout on small screens

#### Scenario: About Section

- **GIVEN** the user navigates to the About section
- **THEN** a split layout is displayed (image left, content right)
- **AND** the heading reads "Just a few words about us"
- **AND** a description paragraph is present below the heading
- **AND** three counter boxes are displayed: Years of experience (12), Happy clients (257), Projects completed (192)
- **AND** a testimonial carousel is displayed below the counters
- **AND** the carousel shows testimonial cards with author name, role, and quote text

#### Scenario: Services Section

- **GIVEN** the user navigates to the Services section
- **THEN** a split layout is displayed (image left, content right)
- **AND** six service items are listed: Typography Courses, Mix and Match, Architecture Plans, Brand Identity, Interior Design, Collateral Design
- **AND** each service item has a title and description paragraph

#### Scenario: Blog Section

- **GIVEN** the user navigates to the Blog section
- **THEN** blog post cards are displayed in a main content area
- **AND** each blog card has a date badge, title, and excerpt text
- **AND** a sidebar is displayed with widgets: Search, Categories, Instagram, Tags

#### Scenario: Contact Section

- **GIVEN** the user navigates to the Contact section
- **THEN** a split layout is displayed (image left, form right)
- **AND** the contact form contains fields: Name, Email, Subject, Message
- **AND** a "Send" button is present
- **AND** the form fields have placeholder text

#### Scenario: Mobile Responsiveness

- **GIVEN** the user views the page on a mobile device
- **THEN** the sidebar collapses or becomes a hamburger menu
- **AND** the portfolio grid switches to a single-column layout
- **AND** the split layouts stack vertically
- **AND** all text remains readable

#### Scenario: Visual Fidelity

- **GIVEN** the page is rendered
- **THEN** all fonts use Montserrat
- **AND** the brand color #99896e is used for accents and buttons
- **AND** buttons have pill shape (border-radius: 50px)
- **AND** section titles have a short underline accent (2px, #99896e)
- **AND** the overall aesthetic is clean, minimal, portfolio-focused

## Verification Checklist

- [ ] Sidebar navigation matches original (dark bg, logo, menu, filters, social, copyright)
- [ ] Portfolio masonry grid with hover overlay (+ icon + name)
- [ ] Portfolio filtering by category works
- [ ] About section with split layout, counters, testimonials
- [ ] Services section with 6 service items
- [ ] Blog section with cards and sidebar widgets
- [ ] Contact section with form (Name, Email, Subject, Message, Send)
- [ ] All design tokens match (Montserrat, #99896e, #18181c, pill buttons)
- [ ] Mobile responsive (sidebar collapses, grid stacks)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
