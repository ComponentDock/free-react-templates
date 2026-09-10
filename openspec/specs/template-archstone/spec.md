# Template: Archstone (Architecture / Construction)

## Purpose

Recreation of ColorLib "Balay" — an architecture/construction/interior design portfolio template with a sidebar layout.

- **Source slug:** `balay`
- **Preview URL:** https://preview.colorlib.com/theme/balay/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/balay-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Architecture / Construction / Interior Design Portfolio

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

### Colors

| Token             | Value                      | Usage                                                          |
| ----------------- | -------------------------- | -------------------------------------------------------------- |
| brand-yellow      | `#FFC300`                  | Primary CTA buttons, active nav link, heading accent, hero badge, icon accents |
| sidebar-dark      | `#2C2C2C`                  | Sidebar background, footer in sidebar                          |
| body-text         | `rgba(0, 0, 0, 0.7)`      | Paragraph text (dark with slight transparency)                 |
| muted-text        | `#b3b3b3`                  | Secondary/muted text                                           |
| heading-dark      | `#000`                     | Headings (h1, h2, h3)                                          |
| white             | `#fff`                     | Button text on yellow bg, hero text, counter text              |
| counter-icon-bg   | `#e6e6e6`                  | Circular counter icon background                               |
| counter-icon-text | `#000`                     | Counter icon color                                             |
| counter-label     | `#999999`                  | Counter label text                                             |
| overlay-dark      | `rgba(0,0,0,?)`            | Hero and counter section overlays (dark semi-transparent)      |
| bg-white          | `#fff`                     | Main content area background                                   |

### Typography

- **Font family:** `"Quicksand", Arial, sans-serif` (weights: 300, 400, 500, 700)
- **Body:** `1rem`, `line-height: 1.7`, `font-weight: 400`, `color: rgba(0,0,0,0.7)`
- **Headings:** Quicksand bold (700), `color: #000`
- **Hero h1:** Large, white text on dark overlay, within a yellow badge/container
- **Hero h2:** Subtitle below h1, also white
- **Section subheading (`.heading-meta`):** Small caps / muted color above section headings
- **Section heading (`.colorlib-heading`):** Quicksand bold with yellow underline accent

### Buttons & Shapes

- **Primary CTA (`.btn-primary`):** `#FFC300` yellow bg, white text, rounded corners, hover stays yellow with black text
- **Counter icons:** Circular (50% border-radius), `#e6e6e6` bg, `#000` icon, 50px+ diameter
- **Blog cards:** Rectangular with image on top, text below, hover zoom on image
- **Service cards:** Image background with overlay text on hover
- **Portfolio cards:** Image background with overlay (share, view, like icons) on hover

### Section Backgrounds

1. **Sidebar:** Solid dark `#2C2C2C`, fixed left panel
2. **Hero:** Full-width background images (slider) + dark overlay
3. **About:** White/light bg
4. **Services:** White/light bg
5. **Counters:** Full-width background image + dark overlay
6. **Recent Work:** White/light bg
7. **Recent Blog:** White/light bg
8. **Contact:** White/light bg (`colorlib-bg-color`)

## Section Structure (page order)

1. **Sidebar (Left Panel)** — dark bg `#2C2C2C`, fixed/sticky left:
   - Logo "Archstone" (white text)
   - Navigation: Home, Project, About, Services, Blog, Contact
   - Copyright footer + social icons (Facebook, Twitter, Instagram, LinkedIn)
   - Mobile: collapsible hamburger toggle

2. **Hero Slider** — full-height background images with dark overlay:
   - 3 slides with different background images
   - Each slide: centered text container with yellow badge bg
   - Heading: "An Inspiring Built Space" / "Interior Design Studio" / "The National Gallery"
   - Subtitle below heading
   - "View Project" yellow CTA button with arrow icon

3. **About ("Who we are")** — 2-column layout:
   - Left: background image of a project
   - Right: heading meta "Welcome", heading "Who we are", 2 paragraphs of description
   - Below text: 3 value cards in a row:
     - "We are passionate" (active/highlighted with yellow icon)
     - "Honest Dependable"
     - "Always Improving"
   - Each card has a checkmark icon

4. **Services ("Here are some of my expertise")** — 2-column layout:
   - Left column: icon features list (4 items):
     - General Constructing (worker icon)
     - Pre-Construction Design (sketch icon)
     - Building & Modeling (engineering icon)
     - Construction Management (crane icon)
   - Right column: image service cards grid (5 cards in 3+2 layout):
     - Design & Build (image card)
     - House Remodeling (image card)
     - Construction Management (image card)
     - Painting & Tiling (image card)
     - Kitchen Remodeling (image card)

5. **Counters** — full-width bg image + dark overlay:
   - 4 columns with circular icon + animated counter + label:
     - 1,539 Projects (skyline icon)
     - 3,653 Employees (engineer icon)
     - 5,987 Constructor (architect icon)
     - 3,999 Partners (worker icon)

6. **Recent Work (Portfolio)** — masonry-style grid:
   - 6 portfolio items in asymmetric grid (2+1+1 / 1+1+2 pattern):
     - Work 01 (Building) — large (col-6)
     - Work 02 (House, Apartment) — small (col-3)
     - Work 03 (Dining Room) — small (col-3)
     - Work 04 (House, Building) — small (col-3)
     - Work 05 (Condo, Pad) — small (col-3)
     - Work 06 (Table, Chairs) — large (col-6)
   - Each card: background image, hover overlay with title, category, share/view/like icons

7. **Recent Blog** — 3-column cards:
   - 3 blog entries, each with:
     - Image (linked)
     - Date + category + comment count metadata
     - Title (linked)
     - Short description paragraph
   - Example entries: "Renovating National Gallery", "Wordpress for a Beginner", "Make website from scratch"

8. **Contact / Get in Touch** — simple CTA section:
   - Heading: "Get in Touch!"
   - Description paragraph
   - "Contact me!" yellow CTA button

## Gherkin Requirements

### Feature: Sidebar Navigation

  Scenario: Sidebar displays logo and navigation links
    Given the page loads
    Then the sidebar should display the logo "Archstone"
    And the sidebar should show navigation links: Home, Project, About, Services, Blog, Contact

  Scenario: Active nav link is highlighted
    Given the page loads on the home view
    Then the "Home" link should be visually highlighted with the brand yellow color

  Scenario: Sidebar is collapsible on mobile
    Given the viewport is less than 768px wide
    Then the sidebar should be hidden by default
    And a hamburger toggle button should be visible
    When the user clicks the hamburger toggle
    Then the sidebar should slide in from the left

### Feature: Hero Slider

  Scenario: Hero displays a full-screen background image slider
    Given the page loads
    Then the hero section should display a full-width background image
    And the image should have a dark overlay
    And centered text should be visible on top of the overlay

  Scenario: Hero text has yellow badge styling
    Given the hero section is visible
    Then the heading text container should have a yellow (#FFC300) background
    And the heading text should be white

  Scenario: Hero has a call-to-action button
    Given the hero section is visible
    Then a "View Project" button should be displayed
    And the button should be styled with yellow background and white text

### Feature: About Section

  Scenario: About section displays who-we-are content
    Given the user scrolls to the About section
    Then a "Who we are" heading should be visible
    And two paragraphs of descriptive text should be shown
    And a background image should be displayed on the left

  Scenario: About section shows value propositions
    Given the About section is visible
    Then 3 value cards should be displayed in a row
    And the first card should read "We are passionate"
    And the second card should read "Honest Dependable"
    And the third card should read "Always Improving"

### Feature: Services Section

  Scenario: Services displays expertise features
    Given the user scrolls to the Services section
    Then a "Here are some of my expertise" heading should be visible
    And 4 icon features should be listed: General Constructing, Pre-Construction Design, Building & Modeling, Construction Management

  Scenario: Services displays image service cards
    Given the Services section is visible
    Then 5 image service cards should be displayed in a grid
    And each card should have a background image and a title overlay

### Feature: Counters Section

  Scenario: Counters display animated statistics
    Given the user scrolls to the Counters section
    Then 4 statistics should be visible: Projects, Employees, Constructor, Partners
    And each statistic should have a circular icon above it
    And each statistic should show an animated count-up number

  Scenario: Counters section has a parallax background
    Given the Counters section is visible
    Then a full-width background image should be displayed
    And a dark overlay should be applied over the image

### Feature: Recent Work (Portfolio)

  Scenario: Portfolio displays project grid
    Given the user scrolls to the Recent Work section
    Then 6 portfolio items should be displayed in a masonry-style grid
    And each item should show a background image, title, and category

  Scenario: Portfolio items show overlay on hover
    Given a portfolio item is hovered
    Then an overlay should appear with the project title, category, and social icons (share, view count, like count)

### Feature: Blog Section

  Scenario: Blog displays recent entries
    Given the user scrolls to the Blog section
    Then 3 blog entries should be displayed in a row
    And each entry should show an image, date, category, comment count, title, and description

### Feature: Contact Section

  Scenario: Contact section shows CTA
    Given the user scrolls to the Contact section
    Then a "Get in Touch!" heading should be visible
    And a description paragraph should be shown
    And a "Contact me!" yellow CTA button should be displayed

## Verification Checklist

- [ ] Sidebar renders with logo, nav links, and social icons
- [ ] Sidebar is collapsible on mobile with hamburger toggle
- [ ] Hero slider cycles through 3 background images with overlay
- [ ] Hero text container has yellow badge background
- [ ] "View Project" CTA button is yellow with white text
- [ ] About section has 2-column layout (image + text + value cards)
- [ ] 3 value cards display with checkmark icons
- [ ] Services section has icon features (left) + image cards (right)
- [ ] 4 service icon features render with correct icons
- [ ] 5 service image cards render in grid
- [ ] Counters section has bg image + overlay + 4 animated stats
- [ ] Counter numbers animate on scroll into view
- [ ] Portfolio grid displays 6 items in masonry layout
- [ ] Portfolio hover overlay shows title, category, social icons
- [ ] Blog section displays 3 entries with images and metadata
- [ ] Contact section has heading, description, and CTA button
- [ ] All sections use Quicksand font family
- [ ] Brand yellow (#FFC300) used consistently for CTAs and accents
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos
- [ ] All components are responsive (sidebar collapses, grid stacks)
