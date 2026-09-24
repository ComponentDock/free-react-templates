# Template: Gazemag (Magazine / News Blog)

## Purpose

Gazemag is a magazine-style news blog template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Megazine" free template
(source: https://colorlib.com/wp/template/megazine/), built under a DIFFERENT
name (**Gazemag**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap-based magazine template with a fixed left sidebar
(navigation + logo + copyright + social links), a full-width hero flexslider
with dark-overlay background images, and an asymmetric blog grid with
image-overlaid article cards. The design uses Montserrat, a coral-red
accent (`#F75940`), and dark image-overlay cards with white text.

## Naming

The ColorLib source name "Megazine" is FORBIDDEN as the app name. **Gazemag**
is the new, original name — single lowercase word, kebab-safe, no collision
with `apps/`, `openspec/specs/`, or `docs/templates/` (verified: zero hits).
Source slug: `megazine`. Preview URL:
https://preview.colorlib.com/theme/megazine/

## Design reference (replication findings)

- **Original:** ColorLib "Megazine" (page title: "Megazine Template"). Listed
  in TEMPLATES.md under **Magazine** section (line 2205). A magazine / news
  blog template with sidebar navigation layout.
- **Preview analyzed:** https://preview.colorlib.com/theme/megazine/
  (fetched 2026-09-25; DOM + CSS extracted)
- **Screenshot analyzed:** https://colorlib.com/wp/wp-content/uploads/sites/2/megazine-free-template.jpg

### Layout structure (from preview DOM)

```
<div id="colorlib-page">
  <aside id="colorlib-aside">          ← Fixed left sidebar
    <h1 id="colorlib-logo">           ← "MEGAZINE" logo, uppercase tracking
    <nav id="colorlib-main-menu">     ← Vertical nav: HOME, STYLE, FASHION, TRAVEL, SPORTS, VIDEO, ARCHIVES
    <div class="colorlib-footer">     ← Copyright + social icons (bottom of sidebar)
  </aside>
  <div id="colorlib-main">
    <aside id="colorlib-hero">        ← Full-width hero flexslider
      <div class="flexslider">
        <ul class="slides">
          <li> (3 slides)             ← Background image + dark overlay + tag + headline + description
        </ul>
      </div>
    </aside>
    <div class="colorlib-blog">       ← Blog grid section
      <div class="container-wrap">
        <div class="row">
          ← Asymmetric grid: col-md-6 (featured) + col-md-6 (2x2 grid) + col-md-12 (full-width)
          ← Row 2: col-md-4 + col-md-4 + col-md-4 (3 equal columns)
          ← Row 3: col-md-5 + col-md-7 (asymmetric pair)
          ← Row 4: col-md-6 + col-md-6 (2 equal columns)
        </div>
        ← Pagination (prev, 1-4, next)
      </div>
    </div>
  </div>
</div>
```

### Section order (1:1 fidelity)

1. **Sidebar** — Fixed left column (white bg), logo + nav + copyright + social icons
2. **Hero Slider** — Full-width carousel (3 slides), each with:
   - Background image with semi-transparent dark overlay
   - Category tag (uppercase label like "FASHION", "STYLE", "SPORTS")
   - Large headline (h1, white)
   - Short description paragraph (white, smaller)
3. **Blog Grid** — Asymmetric article card grid:
   - Row 1: 1 large featured card (col-6) + 2 smaller cards (col-6 split into col-6+col-6) + 1 full-width card
   - Row 2: 3 equal-width cards (col-4 each)
   - Row 3: Asymmetric pair (col-5 + col-7)
   - Row 4: 2 equal cards (col-6 each)
   - Each card: background image + dark overlay + category tag + headline + description
4. **Pagination** — Numbered page links (1-4) with prev/next arrows
5. **Sidebar footer** (inside sidebar) — Copyright text + social media icon links

### Design tokens (from CSS extraction)

| Token | Value | Usage |
|---|---|---|
| Font family | `"Montserrat", Arial, sans-serif` | All text |
| Brand/accent color | `#F75940` | Social icons, links, active states, buttons |
| Secondary accent | `#f86e58` | Hover states (slightly lighter coral) |
| Body text dark | `#333333` | Main body text on light backgrounds |
| Body text medium | `#4d4d4d` | Secondary text |
| Background white | `#fff` | Sidebar, card overlays (on hover) |
| Background dark | `#000` | Hero overlay, card backgrounds |
| Background light gray | `#f0f0f0` | Page background, subtle sections |
| Border radius (buttons) | `30px` | Pill-shaped buttons/tags |
| White | `#fff` | Text on dark backgrounds |

### Screenshot visual notes

- Left sidebar is narrow (~20% width), white background, vertically centered
  nav links in uppercase light gray, "HOME" active with darker/bolder text
- Hero slider takes ~80% width, full viewport height, dark overlay on bike photo
- Blog grid cards have dark overlay backgrounds with white text centered
- Category tags are small uppercase labels above headlines
- Social icons in coral red at bottom of sidebar
- Overall aesthetic: dark, moody editorial magazine with high-contrast imagery

## Gherkin requirements

### Sidebar

```gherkin
Feature: Sidebar navigation

  Scenario: Sidebar displays logo
    Given the page loads
    Then the sidebar shows the site logo "Gazemag" at the top
    And the logo is styled in uppercase with letter-spacing

  Scenario: Sidebar displays navigation menu
    Given the page loads
    Then the sidebar shows navigation links: Home, Style, Fashion, Travel, Sports, Video, Archives
    And each link is displayed vertically in uppercase
    And the active link (Home) is visually distinguished

  Scenario: Sidebar displays copyright and social icons
    Given the page loads
    Then the sidebar footer shows copyright text
    And social media icons are displayed (Facebook, Twitter, Instagram, LinkedIn)
    And social icons use the brand accent color (#F75940)
```

### Hero Slider

```gherkin
Feature: Hero slider section

  Scenario: Hero displays fullscreen slider with 3 slides
    Given the page loads
    Then the hero section shows a full-width image slider
    And there are 3 slides, each with a background image
    And each slide has a dark semi-transparent overlay

  Scenario: Each slide shows category tag, headline, and description
    Given a slide is active
    Then a category tag is displayed (e.g. "Style", "Sports", "Fashion")
    And a large headline is shown below the tag
    And a short description paragraph appears below the headline
    And all text is white and centered on the slide

  Scenario: Slider navigation dots are visible
    Given the hero slider is displayed
    Then pagination dots are shown at the bottom right of the slider
    And the active slide's dot is highlighted
```

### Blog Grid

```gherkin
Feature: Blog article grid

  Scenario: Blog grid displays articles in asymmetric layout
    Given the page loads
    Then the blog section shows article cards in an asymmetric grid
    And the first row has: 1 large card (left) + 2 small cards (right top) + 1 full-width card (right bottom)
    And subsequent rows use varying column widths (3-col, 5/7 split, 6/6 split)

  Scenario: Each article card shows image, tag, headline, and description
    Given an article card is rendered
    Then a background image is displayed with a dark overlay
    And a category tag label appears (uppercase, small)
    And a headline (h2) is shown
    And a short description paragraph is displayed
    And all text on the card is white and centered

  Scenario: Article cards have hover interaction
    Given the mouse hovers over an article card
    Then the card shows a visual hover effect (e.g. slight zoom or overlay change)
```

### Pagination

```gherkin
Feature: Blog pagination

  Scenario: Pagination displays numbered page links
    Given the blog grid is displayed
    Then pagination shows numbered links (1, 2, 3, 4)
    And prev/next arrows are shown (« and »)
    And the current page (1) is visually active
    And the prev link on page 1 is disabled
```

## Verification checklist

- [ ] Sidebar is fixed left, ~25% width on desktop, collapses to hamburger on mobile
- [ ] Logo "Gazemag" is uppercase with letter-spacing in sidebar
- [ ] Navigation links are vertical, uppercase, with active state for Home
- [ ] Social icons use brand color (#F75940) and link to Component Dock in footer
- [ ] Hero slider shows 3 full-width slides with background images
- [ ] Each slide has dark overlay, category tag, headline, description (all white, centered)
- [ ] Slider dots are visible and functional
- [ ] Blog grid uses asymmetric column layout matching original (6/6, 4/4/4, 5/7, 6/6)
- [ ] Each blog card has background image + dark overlay + tag + headline + description
- [ ] Cards have hover effects
- [ ] Pagination shows numbered links with prev/next arrows
- [ ] All text uses Montserrat font family
- [ ] Brand color (#F75940) is used for accents, links, social icons
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images use https://picsum.photos/seed/gazemag-<n>/<w>/<h>
- [ ] package.json name is @free-react-templates/gazemag
- [ ] public/CNAME contains gazemag.free.componentdock.com
- [ ] 100% test coverage (lines, functions, branches, statements)
