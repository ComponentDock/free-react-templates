# Template: Focalpoint (Photography Portfolio)

## Purpose

Recreation of the ColorLib "Tulen" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `tulen`
- **Source URL:** https://colorlib.com/wp/template/tulen/
- **Preview URL:** https://preview.colorlib.com/theme/tulen/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/focalpoint`
- **Surge target:** `focalpoint.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/tulen/

| Token | Value | Usage |
|-------|-------|-------|
| Body bg | `#ffffff` | Page background |
| Body text | `#636363` | Default body copy (p tags) |
| Heading color | `#252525` | All headings h1–h6 |
| Brand accent | `#2916e0` | Buttons, skill circles, links, loader accent |
| Dark bg | `#0f0f0f` | Footer background, dark sections |
| Black bg | `#000000` | Preloader, offcanvas overlay |
| White text | `#ffffff` | On dark overlays, hero text |
| Light gray bg | `#e9e9e9` | Alternating section backgrounds |
| Medium gray bg | `#ebebeb` | Subtle section backgrounds |
| Secondary red | `#e21010` | Loader accent color (secondary) |
| Muted text | `#b2b2b2` | Subtle labels, tags |
| Dark text alt | `#242d2e` | Alternative dark text |
| Font body | `Montserrat`, sans-serif | All text (400, 400i, 500, 500i, 600, 600i, 700, 700i) |
| Button shape | `border-radius: 50px` | Pill-shaped buttons (`.profile-btn`) |
| Button padding | `14px 30px` | CTA buttons |
| Card radius | `4px` | Minor card borders |
| Circle radius | `50%` | Skill progress circles |
| Sidebar width | `90px` | Fixed left sidebar |
| Mobile sidebar | `60px` | Narrower on < 420px |
| Shadow | `14px 0px 103px rgba(0,0,0,0.08)` | Sidebar box-shadow |
| Image overlay | `linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 94%)` | Hero text readability gradient |

## Section Structure (in page order)

### 1. Offcanvas Sidebar (Left Fixed)
- Fixed left sidebar (90px wide on desktop, 60px on mobile < 420px)
- Hamburger toggle button at top (`ti-menu` icon)
- Social icons panel slides out from hamburger: Facebook, Twitter, LinkedIn, Instagram (themed-icons)
- Slide-out nav panel (`side-menu-wrapper`) with:
  - Back arrow close button
  - Site logo image
  - Main nav links: Home, About, Gallery, Blog, Contact
  - Social icons row in footer area
  - Copyright text (replace Colorlib attribution with Component Dock link)
- Sidebar casts a subtle box-shadow to the right
- Body has `padding-left: 90px` to accommodate sidebar

### 2. Hero Section (Pana-Accordion)
- Full-viewport horizontal accordion (pana-accordion) with 5+ items
- Each accordion item: full-cover background image with bottom gradient overlay
- Each item shows: category tag (e.g. "people"), title ("69 Flavio Burg Suite"), author avatar + name
- Accordion behavior: clicking/hovering an item expands it, others collapse
- Below the accordion: owl-carousel slider with same content (dual display — accordion on desktop, carousel on mobile)
- Bottom gradient: `linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 94%)` for text readability

### 3. About Section
- Split layout: left half + right half
- **Left half:**
  - Profile photo (full-width within column)
  - Overlaid dark gradient panel with white text:
    - "Hello!" heading
    - "I'm **Glen Cross**" heading
    - Bio paragraph
    - "Say Hello" pill button (brand accent bg)
    - Email link
- **Right half:**
  - "About Me" heading
  - Multiple bio paragraphs
  - "My Skills" heading
  - 4-column grid of skill circles (animated progress):
    - Photoshop (90%), Make Up (95%), Fashion (80%), Photography (85%)
    - Each: circular progress ring (brand accent #2916e0) + label

### 4. Gallery Section
- Masonry grid layout with filter tabs
- Filter tabs: All, Featured, People, Nature, Animal, Travel
- Each gallery item: image with hover overlay showing author avatar + name
- Grid uses masonry-like layout with varied sizes: standard items, `gi-big` (2x height), `gi-long` (tall)
- Filter tabs: uppercase, letter-spacing, border-bottom active indicator
- Hover overlay: semi-transparent dark bg with author photo + name

### 5. Footer
- Dark background (`#0f0f0f`)
- Copyright text with current year
- Component Dock attribution link (replace Colorlib)
- Minimal single-line layout

## Gherkin Requirements

```gherkin
Feature: Focalpoint — Photography Portfolio Template

  Background:
    Given the template is loaded at the root URL
    Then the page title contains "Focalpoint"
    And the Component Dock footer link is visible

  Scenario: Offsidebar sidebar renders correctly
    Given the page is loaded
    Then a fixed left sidebar is visible with width 90px
    And a hamburger menu icon is visible in the sidebar
    When the user clicks the hamburger icon
    Then a slide-out navigation panel appears
    And navigation links "Home", "About", "Gallery", "Blog", "Contact" are visible
    And social icons (Facebook, Twitter, LinkedIn, Instagram) are visible
    And a copyright line with Component Dock link is visible in the sidebar footer
    When the user clicks the close arrow
    Then the navigation panel slides closed

  Scenario: Hero accordion displays correctly
    Given the hero section is in the viewport
    Then a horizontal accordion with 5 or more items is visible
    And each accordion item has a full-cover background image
    And each item displays a category tag, title, and author info
    And the first item is expanded by default
    When the user clicks a collapsed accordion item
    Then that item expands and the previously active item collapses

  Scenario: About section renders correctly
    Given the about section is scrolled into view
    Then a split layout is visible with left and right halves
    And the left half shows a profile photo with overlaid text "Hello!" and "I'm Glen Cross"
    And a "Say Hello" pill button is visible on the left
    And the right half shows "About Me" heading and bio paragraphs
    And 4 skill circles are visible (Photoshop, Make Up, Fashion, Photography)
    And each skill circle shows a percentage value

  Scenario: Gallery section with filters works
    Given the gallery section is scrolled into view
    Then filter tabs "All", "Featured", "People", "Nature", "Animal", "Travel" are visible
    And a masonry grid of gallery images is displayed
    And each image has a hover overlay with author info
    When the user clicks the "People" filter
    Then only items tagged "people" are visible
    When the user clicks the "All" filter
    Then all gallery items are visible again

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then a dark background footer is visible
    And a copyright line with the current year is visible
    And a link to "https://www.componentdock.com/" is present
    And no other attribution links are visible

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the sidebar narrows to 60px
    And the hero accordion adapts to the reduced width
    And the about section stacks vertically (single column)
    And the gallery grid switches to fewer columns

  Scenario: No ColorLib references in app code
    Given the template source code is inspected
    Then no file contains "colorlib.com" or "preview.colorlib.com"
    And the provenance is only in the spec and TEMPLATES.md
```

## Verification Checklist

- [ ] All 5 sections render in correct page order (Sidebar → Hero → About → Gallery → Footer)
- [ ] Fixed left sidebar with hamburger toggle and slide-out nav panel
- [ ] Sidebar nav links: Home, About, Gallery, Blog, Contact
- [ ] Social icons in sidebar: Facebook, Twitter, LinkedIn, Instagram
- [ ] Sidebar footer with copyright + Component Dock link
- [ ] Sidebar width 90px desktop, 60px mobile (< 420px)
- [ ] Body has padding-left matching sidebar width
- [ ] Hero pana-accordion with 5+ items, full-cover images
- [ ] Each accordion item: category tag, title, author avatar + name
- [ ] Accordion expand/collapse behavior works
- [ ] About section split layout (profile left, text + skills right)
- [ ] Profile overlay: "Hello!", name, bio, "Say Hello" button, email
- [ ] 4 animated skill circles with percentages
- [ ] Gallery masonry grid with filter tabs
- [ ] 6 filter categories: All, Featured, People, Nature, Animal, Travel
- [ ] Gallery hover overlay with author avatar + name
- [ ] Dark footer with copyright + Component Dock link
- [ ] Montserrat font loaded (weights 400–700)
- [ ] Brand accent color #2916e0 used for buttons, skill circles, active states
- [ ] Pill-shaped buttons (border-radius: 50px)
- [ ] No ColorLib references in app code
- [ ] Responsive: sidebar narrows, about stacks, gallery reflows
- [ ] Placeholder images via `picsum.photos/seed/focalpoint-<n>/...`
