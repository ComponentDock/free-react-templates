# Template: Odyssey (Blog Template)

## Purpose

Odyssey is a single-page blog/magazine template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Ruft"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ruft" — travel/lifestyle blog template
  (source: https://colorlib.com/wp/template/ruft/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/ruft/
  (HTTP 200 — live DOM + `css/main.css` fetched and parsed; screenshot
  `ruft-free-template.jpg` also reviewed visually).
- **Section order (1:1, from the DOM):**
  1. Fixed navbar: paper-plane logo + "Ruft" wordmark; links Home, Category,
     Archive, Pages, Elements, Blog, Blog Details, Contact (Pages/Blog have
     dropdowns). Transparent over the hero; turns purple
     (`rgba(128, 80, 250, 0.9)`) when scrolled.
  2. Banner hero: full-width image (surfer/wave) under a purple gradient
     overlay (`linear-gradient(0deg, rgba(128,80,250,0.8), rgba(128,80,250,0.8))`),
     centered two-line H1 "Charter Yacht" / "The Luxury Of Traveling"
     (Playfair Display, 60px, weight 300, white). Carousel arrows on the
     right side of the hero image.
  3. Post slider: owl-carousel of featured posts. Slide card: thumbnail,
     meta-head (date "13th Oct, 2018", tag "Image Post", categories
     "Food & Travel", "03 Comments"), H3 title, excerpt, "Read More" pill.
  4. Post area (`main-body`, 120px section-gap): two-column layout —
     - Blog list (col-lg-8): 5 `single-post-item` boxes, each with thumb,
       meta, H3 title, excerpt, "continue Reading" link. Example titles:
       "It's Hurricane Season But We Are Visiting Hilton Island",
       "Global Resorts Network Grn Putting Timeshares To Sham".
     - Sidebar (col-lg-4), widgets top to bottom:
       a. Search widget: "Search Posts" input + circular purple search button.
       b. Author/about widget: avatar, "Charlie ALison Barber", "Senior blog
       writer", short bio, social icons.
       c. Popular Posts: 4 rows (thumb + title + "02 hours ago") — Space
       Final Frontier, The Amazing Hubble, Astronomy Astrology,
       Asteroids telescope.
       d. Post Categories list with counts: Technology 37, Lifestyle 24,
       Fashion 59, Art 29, Food 15, Architecture 09, Adventure 44.
       e. Newsletter widget: "Newsletter" title, email input, full-width
       purple "Subscribe Now" button.
  5. Footer (`footer-area section-gap`), 4 widget columns:
     - About Us: heading + short lorem paragraph.
     - Newsletter: "Stay updated with our latest trends" + subscribe form.
     - Instagram Feed: 2x3 thumbnail grid.
     - Follow Us: "Let us be social" + social icon row.
     - Footer bottom bar: copyright line (replace ColorLib credit with
       monorepo credit, e.g. "© <year> Odyssey. All rights reserved.").
- **Design tokens extracted from the preview CSS (`css/main.css`):**
  - Primary brand **purple `#8050fa`** (buttons, hover states, newsletter
    button, scrolled navbar; banner overlay uses `rgba(128, 80, 250, 0.8)`).
  - Accents: `#4cd3e3` cyan, `#f4e700` yellow, `#f44a40` red, `#38a4ff` blue
    (post tags/meta highlights).
  - Surfaces: `#f9f9ff` (section/light backgrounds — 30 uses), `#fff` (cards),
    `#222222` / `#191919` (dark footer surfaces).
  - Text: headings `#000`, body dark gray, white on hero/footer.
  - Fonts: **"Playfair Display"** (serif) for h1–h6 (weight 700; hero H1
    weight 300); **"Roboto"** for body/nav/meta (sans-serif).
  - Buttons `.primary-btn`: pill shape — `border-radius: 25px`,
    `background: #f9f9ff`, `border: 1px solid #e9e9e9`, `line-height: 38px`,
    `padding: 0 30px`, 12px text, weight 500; hover → `background: #8050fa`,
    `color: #fff`. Newsletter variant: solid purple, full width,
    `line-height: 48px`.
  - Form inputs (newsletter): `border-radius: 42px`, `border: 1px solid #ddd`,
    `line-height: 44px`, `padding: 0 15px`.
  - Spacing rhythm: `.section-gap` = `padding: 120px 0` (60px on mobile).
  - Container: `box_1170` (1170px max-width) for content rows.
  - Header: `position: fixed`; `.header-scrolled` adds
    `background: rgba(128, 80, 250, 0.9)`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/odyssey-<n>/<w>/<h>`); icons → lucide-react
  (paper-plane logo, search, social icons, carousel arrows); Playfair
  Display + Roboto via Google Fonts `<link>` in `index.html`; brand purple in
  `@theme` so shared Button/ButtonLink `primary` variants resolve to
  `#8050fa`; no asset/CSS/font-file copying.

Odyssey lives in `apps/odyssey` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) and the repo-standard Navbar/Footer chrome.

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with a logo, the site name
"Odyssey", navigation links, and a scroll-aware background.

#### Scenario: Navbar content

- **GIVEN** the Odyssey page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show a paper-plane logo mark and the site name "Odyssey"
- **AND** the navbar SHALL show links Home, Category, Archive, Pages, Blog, and Contact
- **AND** the navbar SHALL be fixed to the top of the viewport

#### Scenario: Scrolled navbar background

- **GIVEN** the navbar is fixed at the top
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL switch to a purple background (matching `#8050fa` at ~90% opacity)

### Requirement: Banner hero

The system SHALL render a full-width hero with an image background, a purple
overlay, and a two-line level-1 headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 heading with two lines: "Charter Yacht" and "The Luxury Of Traveling"
- **AND** the hero SHALL have a purple gradient overlay over the background image
- **AND** the hero text SHALL be centered and white

#### Scenario: Hero carousel controls

- **GIVEN** the hero is displayed
- **WHEN** the user inspects the hero
- **THEN** previous/next arrow controls SHALL be visible on the right side of the hero

### Requirement: Featured post slider

The system SHALL render a carousel of featured posts, each with a thumbnail,
meta information, title, excerpt, and a read-more button.

#### Scenario: Slider content

- **GIVEN** the page is rendered
- **WHEN** the post slider section is displayed
- **THEN** it SHALL show at least three featured post slides
- **AND** each slide SHALL contain a thumbnail, date, category tags, comment count, a title, an excerpt, and a "Read More" button

#### Scenario: Slide navigation

- **GIVEN** the post slider is displayed
- **WHEN** the user activates the next control
- **THEN** the slider SHALL advance to the following slide

### Requirement: Blog post list

The system SHALL render a list of blog posts, each with a thumbnail, meta
line, title, excerpt, and a continue-reading link.

#### Scenario: Post list content

- **GIVEN** the page is rendered
- **WHEN** the blog list section is displayed
- **THEN** it SHALL show at least five post items
- **AND** each post SHALL show a thumbnail, meta (date, category, comments), a level-3 title, an excerpt, and a "continue Reading" link

### Requirement: Sidebar widgets

The system SHALL render a sidebar with a search widget, an author widget, a
popular posts list, a categories list, and a newsletter widget.

#### Scenario: Sidebar search

- **GIVEN** the sidebar is rendered
- **WHEN** the user inspects the search widget
- **THEN** it SHALL show a search input with a circular purple search button

#### Scenario: Sidebar author widget

- **GIVEN** the sidebar is rendered
- **WHEN** the author widget is displayed
- **THEN** it SHALL show an avatar, an author name, a role line ("Senior blog writer"), a short bio, and social icons

#### Scenario: Popular posts

- **GIVEN** the sidebar is rendered
- **WHEN** the popular posts widget is displayed
- **THEN** it SHALL show at least four entries, each with a thumbnail, a title, and a relative timestamp

#### Scenario: Post categories

- **GIVEN** the sidebar is rendered
- **WHEN** the categories widget is displayed
- **THEN** it SHALL show a list of categories, each with a name and an item count

#### Scenario: Newsletter subscribe

- **GIVEN** the sidebar newsletter widget is rendered
- **WHEN** the user submits the email form
- **THEN** the form SHALL validate the email address and show a confirmation on success

### Requirement: Footer

The system SHALL render a footer with an About column, a Newsletter column, an
Instagram feed column, a social column, and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show "About Us" text, a newsletter blurb with subscribe form, an Instagram thumbnail grid, and a "Follow Us" social row
- **AND** the footer bottom bar SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Odyssey app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Odyssey — Travel Blog Template"

## Verification checklist

- [ ] `openspec/specs/template-odyssey/spec.md` present with the REAL section
      list (navbar → hero → post slider → blog list + sidebar → footer).
- [ ] Design tokens above (purple `#8050fa`, Playfair Display + Roboto,
      pill buttons radius 25px, section-gap 120px) captured in the spec.
- [ ] `docs/templates/odyssey/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh odyssey`,
      PR lists source (ColorLib Ruft), preview URL, tokens, and what differs.
