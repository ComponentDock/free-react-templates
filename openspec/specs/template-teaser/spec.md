# Template: Teaser (Coming Soon Landing)

## Purpose

Teaser is a single-page coming-soon landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "08 Comming Soon" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-themed coming-soon page with pink/rose accents and a
warm-brown footer. It features a centered countdown or email-signup hero
area, a prominent pink CTA button, and a dark footer with links and
copyright. Teaser recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "08 Comming Soon" — free coming soon website
  template (source: https://colorlib.com/wp/template/08-comming-soon/).
- **Live preview DOM:** `https://preview.colorlib.com/theme/08-comming-soon/`
  returned HTTP 404 — preview is unreachable.
- **Screenshot analyzed:** TEMPLATES.md screenshot
  (`coming-soon-23.jpg`, 1200×972 px) — the sole reference. Pixel-level
  color sampling performed; design tokens extracted below.
- **Section order (1:1 from screenshot):**
  1. Header band (light, transitioning from white to warm gray): likely
     logo text or simple navigation against a light/warm overlay.
  2. Hero (dark purple/navy, ~y=260–560): centered headline + subtext
     over a dark background, possibly with a background image and overlay.
  3. CTA row (pink accent, ~y=570–610): horizontal pink/rose bar with a
     prominent button or email input — brand color #e15e88 with lighter
     pink band #ffd3f1.
  4. Continued dark area (~y=610–730): likely additional content or
     spacing below the CTA.
  5. Footer (warm brown/terra cotta, ~y=730–880): dark reddish-brown
     footer with red accent #b63841 at center, warm brown tones
     (#422527–#7e4e41), possible navigation links and copyright.
  6. Copyright strip (light gray, ~y=890–920): thin light bar at very
     bottom with copyright text.

- **Design tokens extracted from screenshot pixel analysis:**
  - Brand colors: **#e15e88** (pink/rose primary accent) + **#b63841**
    (red secondary accent/footer CTA).
  - Dark backgrounds: **#1d161d** (darkest), **#282432** (dark purple),
    **#2e2834**, **#3e3842** (medium dark).
  - Footer browns: **#422527** (warm brown) through **#7e4e41**
    (lighter terra cotta).
  - Light neutrals: **#ffffff** (header), **#f5f5f5** (copyright strip),
    **#d6d6d8** (light gray).
  - Pink tint band: **#ffd3f1** (light pink).
  - **Font:** Lato (sans-serif) via Google Fonts — standard for ColorLib
    coming-soon series.
  - **Buttons:** pink filled (#e15e88), likely rounded, centered.

## Gherkin Requirements

### Feature: Teaser — Coming Soon Landing Page

  Scenario: Page loads with correct meta and title
    Given the user navigates to the Teaser page
    Then the page title contains "Teaser"
    And the page has a meta description

  Scenario: Header displays brand
    Given the user views the page
    Then a header section is visible
    And the header contains the site brand name "Teaser"

  Scenario: Hero section is visible
    Given the user scrolls to the hero area
    Then a hero heading is displayed
    And the hero has a dark background

  Scenario: Countdown or timer element is present
    Given the user views the hero section
    Then a countdown or timer component is visible
    And the countdown shows days, hours, minutes, and seconds

  Scenario: Email signup form is present
    Given the user views the CTA area
    Then an email input field is visible
    And a subscribe button is visible
    And the subscribe button is styled with the pink brand color #e15e88

  Scenario: Email form validates input
    Given the user clicks the subscribe button without entering an email
    Then a validation message is shown
    Given the user enters "notanemail" in the email field
    And clicks the subscribe button
    Then a validation error is shown

  Scenario: Footer is visible
    Given the user scrolls to the bottom of the page
    Then a footer section is visible
    And the footer has a dark warm-brown background

  Scenario: Footer contains navigation links
    Given the user views the footer
    Then navigation links are present in the footer
    And each link is clickable

  Scenario: Footer contains Component Dock link
    Given the user views the footer
    Then a link to "https://www.componentdock.com/" is present
    And the link text reads "Component Dock"

  Scenario: Footer contains copyright
    Given the user views the footer
    Then a copyright notice is visible in the bottom strip

  Scenario: Page is responsive
    Given the user views the page at 375px width
    Then all sections are visible without horizontal overflow
    And the layout adapts to the narrow viewport

  Scenario: Dark mode toggle works
    Given the user is on the page
    When the user toggles dark mode
    Then the page theme changes appropriately

## Verification checklist

- [ ] Header renders with brand name
- [ ] Hero section with dark background and heading
- [ ] Countdown/timer component functional (days, hours, minutes, seconds)
- [ ] Email signup form with validation
- [ ] Subscribe button with pink #e15e88 styling
- [ ] Footer with dark warm-brown background
- [ ] Footer navigation links
- [ ] Footer Component Dock link (https://www.componentdock.com/)
- [ ] Copyright strip at bottom
- [ ] Responsive layout (375px, 768px, 1280px)
- [ ] Dark mode toggle
- [ ] No ColorLib references in app code
- [ ] All images use picsum.photos seeds
- [ ] Google Fonts loaded via <link>
- [ ] Tests at 100% coverage
- [ ] Build passes
