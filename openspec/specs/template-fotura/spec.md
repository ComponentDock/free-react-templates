# Template: Fotura (Photography)

## Purpose

Recreation of ColorLib "Foto" — a fullscreen photography portfolio template.

- **Source slug:** `foto`
- **Preview URL:** https://preview.colorlib.com/theme/foto/
- **Source page:** https://colorlib.com/wp/template/foto/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/foto-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token             | Value                          | Notes                                      |
| ----------------- | ------------------------------ | ------------------------------------------ |
| Font (body)       | `'Poppins', sans-serif`        | Weights 400, 500, 600, 700                |
| Font (accent)     | `'Allura', cursive`            | Script font for decorative headings        |
| Brand color       | `#37D583`                      | Green — hover states, accent links         |
| Brand color alt   | `#36D98A`                      | Near-identical green variant in CSS        |
| Text primary      | `#333`                         | Body text                                  |
| Text secondary    | `#777`                         | Paragraphs                                 |
| Text black        | `#000`                         | Utility class `.color-black`               |
| White             | `#fff`                         | Text on dark backgrounds, body bg          |
| Border/divider    | `#ddd`                         | Dropdown menu borders                      |
| Muted             | `#aaa`                         | Button hover background                    |
| Border radius     | `50px`                         | Slider bullets, navigation arrows          |
| Header height     | `60px`                         | Absolute-positioned top bar                |
| Footer height     | `60px`                         | Absolute-positioned bottom bar             |
| Body margin       | `50px` horizontal sides        | Generous side margins on body              |
| Body padding      | `60px` top/bottom              | Vertical breathing room                    |
| Dropdown shadow   | `0px 3px 10px rgba(0,0,0,.3)`  | Nav dropdowns                              |

## Page Structure (section order)

1. **Header** — Fixed/absolute top bar: logo (left), contact email (right), nav menu with dropdowns (Portfolio, Blog), hamburger on mobile.
2. **Hero Slider** — Fullscreen image carousel with Ken Burns pan/zoom effect, 4 slides. Each slide has centered headline text (white, large) + subtitle + CTA button ("VISIT"). Dark overlay on images.
3. **Footer** — Copyright text (left), "SHOW THUMBNAILS" button (center), social icon links (right: Facebook, Twitter, Instagram, Vimeo, Pinterest).

## Requirements

### Gherkin Scenarios

```gherkin
Feature: Fotura — Photography Portfolio Template

  Background:
    Given the user navigates to the Fotura app

  Scenario: Header renders with logo and navigation
    Then the logo is visible in the header
    And a contact email link is visible on the right
    And navigation links "Home", "Portfolio", "Blog" are present
    And "Portfolio" and "Blog" have dropdown menus

  Scenario: Header is responsive with hamburger menu
    When the viewport is 768px or narrower
    Then the hamburger menu icon is visible
    And the desktop nav menu is hidden
    When the user clicks the hamburger icon
    Then the mobile navigation menu opens

  Scenario: Portfolio dropdown shows sub-items
    When the user hovers over or clicks "Portfolio"
    Then a dropdown shows "Portfolio 1" and "Portfolio 2" links

  Scenario: Blog dropdown shows sub-items
    When the user hovers over or clicks "Blog"
    Then a dropdown shows "Blog Page" and "Blog Detail" links

  Scenario: Hero slider displays fullscreen
    Then the hero section occupies the full viewport height
    And a background image is displayed covering the section
    And a dark overlay is applied over the image

  Scenario: Hero slide shows headline and CTA
    Then the current slide displays a headline in large white text
    And a subtitle is displayed below the headline
    And a CTA button labeled "VISIT" is displayed below the subtitle

  Scenario: Hero slider transitions between slides
    Given the slider is on slide 1
    When the slider auto-advances
    Then the next slide fades in with Ken Burns zoom effect
    And slide indicators are visible at the bottom

  Scenario: CTA button has brand color on hover
    Given a "VISIT" button is displayed
    When the user hovers over the button
    Then the button text color changes to brand green (#37D583)

  Scenario: Footer displays copyright and social links
    Then a copyright notice is visible in the footer
    And social media icon links are visible (Facebook, Twitter, Instagram, Vimeo, Pinterest)
    And a "SHOW THUMBNAILS" button is visible

  Scenario: Social icons link correctly
    Then each social icon is wrapped in an anchor element
    And each social icon uses an icon font glyph

  Scenario: Footer links to Component Dock
    Then the footer contains a link to https://www.componentdock.com/
```

## Verification Checklist

- [ ] All sections render in the correct order: Header → Hero Slider → Footer
- [ ] Header: logo, contact link, nav with dropdowns, hamburger on mobile
- [ ] Hero: fullscreen height, background image, dark overlay, Ken Burns effect
- [ ] Slide content: headline, subtitle, CTA button per slide
- [ ] Slider: auto-advance, fade transitions, slide indicators
- [ ] CTA button hover uses brand green (#37D583)
- [ ] Footer: copyright, show-thumbnails button, social icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] Fonts: Poppins (body) + Allura (accent) loaded via Google Fonts
- [ ] Responsive: hamburger menu at ≤768px, layout adapts
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] `public/CNAME` contains `fotura.free.componentdock.com`
- [ ] `package.json` homepage is `https://fotura.free.componentdock.com`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Build passes with no errors
