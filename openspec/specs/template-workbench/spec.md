# Template: Workbench (Personal Portfolio / Freelancer)

## Purpose

Recreation of ColorLib **Work** template.
- **Source:** https://colorlib.com/wp/template/work/
- **Preview:** https://preview.colorlib.com/theme/work/
- **New name:** `workbench` (apps/workbench, `@free-react-templates/workbench`)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Category:** Personal portfolio / freelancer / creative agency

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| **Primary accent** | `#F75940` | Coral red-orange, used for `.btn-primary` and links |
| **Primary hover** | `#f86e58` | Slightly lighter coral |
| **Body text** | `#333333` | Main paragraph text |
| **Secondary text** | `#666666` | Descriptions, subtext |
| **Meta/label text** | `#999999` | Uppercase labels, dates, categories |
| **Background (light)** | `#fafafa` | CTA section background |
| **Background (white)** | `#fff` | Sidebar, cards, blog entries |
| **Dark text** | `#000` | Headings, button borders (btn-learn) |
| **Font family** | `"Quicksand", Arial, sans-serif` | Google Font |
| **Font weights** | 300, 400, 500 | Light, regular, medium |
| **Button border-radius** | `30px` | Pill-shaped buttons |
| **Button padding** | `14px 30px` | Primary buttons |
| **Sidebar width** | `20%` | Fixed left sidebar |
| **Project card height** | `450px` | Portfolio grid items |
| **Heading meta** | `10px, uppercase, letter-spacing: 5px, #999` | Section subtitle labels |

## Layout overview

**Sidebar layout** — fixed left sidebar (20% width) + scrollable main content area on the right.

### Section order (top to bottom in main area)

1. **Hero Slider** — Full-height flexslider with 3 background-image slides, dark overlay, centered text (h1 heading + h2 subtitle + "Learn More" button). Slides auto-rotate.
2. **About** — Two-column: left = stacked overlapping images (with fadeIn animations), right = intro text ("Welcome & Introduce" meta + heading + paragraph) + accordion panel (3 items: "Why choose me?", "What I do?", "My Specialties") with collapse/expand.
3. **Services** — 2×3 grid of features, each with icon + h3 title + description. Centered heading ("What I do?" meta + "Here are some of my expertise"). Features: Branding, Web Design, SEO, Web Development, User Interface, Help & Support.
4. **Work/Portfolio** — 2×3 grid of project cards with background images, dark overlay on hover, title + category tags + share/eye/heart icon row. "My Work" meta + "Recent Work" heading.
5. **Blog** — 3-column grid of blog cards, each with image, date/category/comments meta, title, excerpt, "Read More" link. "Read" meta + "Recent Blog" heading.
6. **CTA** — "Get in Touch" section on `#fafafa` background, heading + description + "Contact me!" primary button.

### Sidebar

- Logo: "Work" (styled with two colored spans)
- Navigation: Home, Work, About, Services, Blog, Contact (single-page scroll links)
- Social links: Facebook, Twitter, Instagram, LinkedIn
- Copyright footer with "Made with ❤" attribution

## Gherkin requirements

```gherkin
Feature: Workbench Template
  As a visitor, I want to see a professional portfolio site
  So that I can learn about the freelancer and their work.

  Background:
    Given the template loads at the root URL

  # --- Sidebar ---
  Scenario: Sidebar navigation
    Then a fixed left sidebar is visible
    And the sidebar shows a logo
    And the sidebar shows navigation links: Home, Work, About, Services, Blog, Contact
    And the sidebar shows social media icons (Facebook, Twitter, Instagram, LinkedIn)
    And the sidebar shows a copyright line

  Scenario: Sidebar scroll links
    When I click a navigation link in the sidebar
    Then the page scrolls to the corresponding section

  # --- Hero ---
  Scenario: Hero slider displays
    Then a full-height hero slider is visible
    And the slider shows a heading text
    And the slider shows a subtitle
    And the slider shows a "Learn More" button
    And the slider has a dark overlay on the background image

  Scenario: Hero slider auto-rotation
    Given the page loads
    When I wait a few seconds
    Then the slider transitions to the next slide automatically

  # --- About ---
  Scenario: About section layout
    Then the About section is visible
    And the About section shows two stacked overlapping images on the left
    And the About section shows "Welcome & Introduce" meta label
    And the About section shows an introduction heading
    And the About section shows a paragraph of bio text

  Scenario: About accordion
    Then the About section shows an accordion with 3 panels
    And panel 1 is titled "Why choose me?"
    And panel 2 is titled "What I do?"
    And panel 3 is titled "My Specialties"

  Scenario: Accordion expand/collapse
    When I click an accordion panel header
    Then the panel body becomes visible
    When I click the same panel header again
    Then the panel body is hidden

  # --- Services ---
  Scenario: Services section displays
    Then the Services section is visible
    And the section shows "What I do?" meta label
    And the section shows "Here are some of my expertise" heading
    And there are 6 feature cards displayed in a 2×3 grid

  Scenario: Service feature card content
    Then each service card shows an icon
    And each service card shows a title
    And each service card shows a description paragraph

  # --- Work / Portfolio ---
  Scenario: Portfolio section displays
    Then the Work/Portfolio section is visible
    And the section shows "My Work" meta label
    And the section shows "Recent Work" heading
    And there are 6 project cards displayed in a 2×3 grid

  Scenario: Portfolio card content
    Then each project card shows a background image
    And each project card shows a title
    And each project card shows category tags
    And each project card shows share, view count, and like count icons

  Scenario: Portfolio card hover
    When I hover over a project card
    Then the card shows an overlay with title and tags

  # --- Blog ---
  Scenario: Blog section displays
    Then the Blog section is visible
    And the section shows "Read" meta label
    And the section shows "Recent Blog" heading
    And there are 3 blog cards displayed in a 3-column grid

  Scenario: Blog card content
    Then each blog card shows a featured image
    And each blog card shows date, category, and comment count
    And each blog card shows a title
    And each blog card shows an excerpt paragraph
    And each blog card shows a "Read More" link

  # --- CTA ---
  Scenario: Call-to-action section
    Then a "Get in Touch" section is visible
    And the CTA section has a light gray (#fafafa) background
    And the CTA shows a heading
    And the CTA shows a description paragraph
    And the CTA shows a "Contact me!" primary button

  # --- Footer ---
  Scenario: Footer with Component Dock link
    Then the footer is visible
    And the footer links to https://www.componentdock.com/

  # --- Design tokens ---
  Scenario: Brand color applied
    Then primary buttons use the coral (#F75940) accent color
    And headings use the Quicksand font family
    And buttons have pill-shaped border radius (30px)

  Scenario: Responsive layout
    Then the sidebar collapses on mobile viewports
    And a hamburger toggle appears on mobile
    And the main content takes full width on mobile
```

## Verification checklist

- [ ] Sidebar is fixed, 20% width on desktop, collapses on mobile
- [ ] Hero slider shows 3 slides with auto-rotation and dark overlay
- [ ] About section has stacked images + accordion (3 panels, expand/collapse)
- [ ] Services grid shows 6 cards in 2×3 layout with icons
- [ ] Portfolio grid shows 6 project cards with hover overlay
- [ ] Blog grid shows 3 cards with images and metadata
- [ ] CTA section has #fafafa background and "Contact me!" button
- [ ] Footer links to https://www.componentdock.com/
- [ ] Brand color #F75940 used for primary buttons and accents
- [ ] Quicksand font loaded via Google Fonts
- [ ] Pill-shaped buttons (border-radius: 30px)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Public/CNAME contains `workbench.free.componentdock.com`
