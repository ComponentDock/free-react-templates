# Template: Crispshot (Photography)

## Purpose

Recreation of ColorLib's **Alime** — a single-page photography portfolio template.

- **Source slug:** `alime`
- **Preview URL:** https://preview.colorlib.com/theme/alime/
- **Source page:** https://colorlib.com/wp/template/alime/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/alime-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#fc6060` | Buttons, links, Instagram hover overlay, accent |
| Text primary | `#252525` | Body text, headings, footer text |
| Text secondary | `#636363` | Paragraphs, secondary copy |
| Background light | `#f7f7f7` | Light section backgrounds |
| White | `#ffffff` | Card backgrounds, text on dark |
| Black | `#000000` | Overlay backgrounds, dark accents |
| Font family | Poppins, sans-serif | All text |
| Button radius | `60px` (pill shape) | Primary CTA buttons |
| Button style | Transparent with border → fills `#fc6060` on hover | `.alime-btn` |
| Section padding | `80px` vertical | Between major sections |
| Instagram hover | `rgba(252, 96, 96, 0.9)` | Overlay on Instagram images |
| Image hover scale | `1.1` | Gallery and Instagram items |
| Header | Fixed, transparent, white text, z-100 | Overlays hero |
| Gallery grid | 4 columns (lg), 2 columns (sm) | Portfolio items |

## Section structure (from preview DOM, order preserved)

1. **Navbar** — Fixed transparent header, logo left, nav links (Home, About, Gallery, Blog, Contact), search icon right. Hamburger toggler for mobile.
2. **Hero / Welcome Area** — Full-width carousel (owl-carousel style), background image with dark overlay, left-aligned text: headline ("Hello I'm Jackson"), paragraph about photography, CTA button ("Get a Quote") + email link. Two slides in original.
3. **Portfolio / Gallery** — Filterable grid (All, Human, Nature, Country, Video filter buttons). 4-column masonry-like grid of images with hover overlay showing "+" icon. "View More" button at bottom. ~12 items.
4. **Follow Instagram** — Section heading "Follow Instagram" + handle "@Alime_photographer". Carousel of 6 Instagram-style images with hover overlay (coral `rgba(252,96,96,0.9)`) showing Instagram icon + handle.
5. **Footer** — Simple horizontal layout: copyright text left, logo center, social icons (Facebook, Twitter, LinkedIn, Pinterest) right. Light background.

## Gherkin requirements

### Feature: Crispshot Photography Template

```gherkin
Feature: Crispshot - Photography Portfolio Template
  As a photographer visiting Crispshot
  I want to see a professional portfolio site
  So that I can evaluate the template for my own use

  Background:
    Given the user opens the Crispshot template
    Then the page loads without errors
    And the Poppins font family is applied

  # --- Navbar ---
  Scenario: Navbar displays correctly
    Then a fixed navbar is visible at the top
    And the navbar contains a logo on the left
    And navigation links are present: Home, About, Gallery, Blog, Contact
    And a search icon is visible on the right
    And the navbar background is transparent over the hero

  Scenario: Navbar mobile responsiveness
    When the viewport is below 992px
    Then a hamburger menu toggler is visible
    And clicking it opens the mobile navigation menu
    And the menu contains all navigation links

  # --- Hero ---
  Scenario: Hero section displays correctly
    Then a full-width hero section is visible
    And the hero has a background image with dark overlay
    And a headline text is displayed (e.g. "Hello I'm Jackson")
    And a paragraph about photography is shown
    And a "Get a Quote" CTA button is visible
    And an email contact link is visible

  Scenario: Hero button styling
    Then the CTA button has pill shape (border-radius 60px)
    And the button is transparent with white text
    And on hover the button fills with brand color #fc6060

  # --- Portfolio Gallery ---
  Scenario: Gallery filter buttons are present
    Then filter buttons are displayed: All, Human, Nature, Country, Video
    And the "All" button is active by default

  Scenario: Gallery grid layout
    Then a 4-column grid of portfolio images is shown on desktop
    And a 2-column grid is shown on mobile
    And each item shows an image

  Scenario: Gallery filter interaction
    When the user clicks the "Nature" filter
    Then only nature-tagged items are visible
    And clicking "All" restores all items

  Scenario: Gallery hover effect
    When the user hovers over a gallery item
    Then a "+" overlay appears on the image
    And the image scales up slightly (1.1x)

  Scenario: View More button
    Then a "View More" button is shown below the gallery grid
    And the button has pill shape matching the brand style

  # --- Instagram Feed ---
  Scenario: Instagram section displays correctly
    Then a section heading "Follow Instagram" is visible
    And a photographer handle is shown (e.g. "@Crispshot_photographer")
    And a carousel/row of Instagram-style images is displayed

  Scenario: Instagram hover overlay
    When the user hovers over an Instagram image
    Then a coral overlay (rgba(252,96,96,0.9)) appears
    And an Instagram icon is shown on the overlay
    And the photographer handle text is displayed
    And the underlying image scales up slightly

  # --- Footer ---
  Scenario: Footer displays correctly
    Then a footer is visible at the bottom
    And copyright text is shown
    And social media icons are present (Facebook, Twitter, LinkedIn, Pinterest)
    And a footer link to Component Dock is present

  Scenario: Footer social icon hover
    When the user hovers over a social icon
    Then the icon color changes to brand color #fc6060

  # --- Responsive ---
  Scenario: Mobile layout adapts
    When the viewport is below 768px
    Then the hero text is smaller
    And the gallery switches to 2 columns
    And the footer stacks vertically
    And the navbar shows a hamburger toggler
```

## Verification checklist

- [ ] All 5 sections render in correct order: Navbar → Hero → Gallery → Instagram → Footer
- [ ] Navbar is fixed, transparent, with white text over hero
- [ ] Hero has background image with dark overlay, headline, paragraph, CTA button, email link
- [ ] CTA button is pill-shaped (border-radius 60px), transparent, fills #fc6060 on hover
- [ ] Gallery shows filter buttons (All/Human/Nature/Country/Video) with "All" active
- [ ] Gallery is a 4-column grid (desktop) / 2-column (mobile) of image cards
- [ ] Gallery items show "+" overlay and scale on hover
- [ ] "View More" button below gallery in pill style
- [ ] Instagram section shows heading + handle + carousel of 6 images
- [ ] Instagram hover shows coral overlay with icon + handle text
- [ ] Footer has copyright, Component Dock link, social icons
- [ ] Social icons turn #fc6060 on hover
- [ ] Poppins font applied throughout
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] `public/CNAME` = `crispshot.free.componentdock.com`
- [ ] `homepage` in package.json = `https://crispshot.free.componentdock.com`
