# Template: Globetrek (Travel Agency)

## Purpose

Globetrek is a single-page TRAVEL AGENCY LANDING PAGE in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Travel Wordpress Themes" free template (source:
https://colorlib.com/wp/template/travel-wordpress-themes/), built under a
DIFFERENT name (**Globetrek**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a WordPress theme ("The Valley" by ThemeXpert) — a travel
agency site with a full-screen hero image slider (aerial ocean reef photos,
teal/turquoise palette), transparent navbar with white text and dropdowns
(Home, Destination, Regions, Shop, Blog), phone number and search icon on
the right, a large left-aligned white heading ("Travel WordPress Themes"),
and a white-bordered CTA button ("Let's go now"). The preview at
https://preview.colorlib.com/theme/travel-wordpress-themes/ returned 404 at
spec time, so design is based on the TEMPLATES.md screenshot only.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens (extracted from screenshot)

- **Primary color:** Teal/turquoise `#008080` (ocean hero tone)
- **Accent color:** White `#ffffff` (buttons, text, logo text)
- **Body background:** `#ffffff` (white)
- **Hero background:** Full-bleed photo (aerial reef/ocean), teal overlay
- **Text color (hero):** `#ffffff` (white on hero)
- **Heading font:** Sans-serif, large bold (`text-5xl`+ or `text-6xl`)
- **Body font:** Sans-serif (e.g. Poppins or similar)
- **Button style:** White border, transparent background, slight border-radius
  (`border-2 border-white rounded`, white text, padding ~12px 28px)
- **Nav style:** Transparent background, white text, hover color ~white/80%
- **Logo:** "The Valley" with mountain icon — recreate as "Globetrek" with
  mountain icon from lucide-react
- **Section backgrounds:** White for content sections, dark teal for footer
- **Border radius (buttons):** ~4–6px (slightly rounded, not pill)
- **Slider arrows:** Semi-transparent left/right chevrons on hero

## Gherkin requirements

Feature: Globetrek travel agency landing page
  As a visitor exploring travel destinations
  I want to browse destinations and book a trip
  So that I can plan my next vacation

  Background:
    Given the Globetrek app is loaded in a browser
    And the viewport is 1280x800 desktop

  # ─── Navbar ────────────────────────────────────────────

  Scenario: Navbar renders with correct links
    Then a navigation bar should be visible at the top
    And the navbar should contain a logo with text "Globetrek"
    And the navbar should have links: "Home", "Destinations", "Regions", "Blog"
    And a phone number contact link should be visible
    And a search icon button should be present

  Scenario: Navbar is transparent over the hero
    Given the user has not scrolled
    Then the navbar background should be transparent
    When the user scrolls past the hero
    Then the navbar background should become solid dark

  # ─── Hero section ──────────────────────────────────────

  Scenario: Hero section displays full-screen with image
    Then a hero section should fill the full viewport height
    And the hero should display a background image of ocean/reef
    And the hero heading should read "Explore The World"
    And the hero should have a "Let's go now" CTA button

  Scenario: Hero has navigation arrows
    Then left and right arrow buttons should be visible on the hero
    And clicking the right arrow should advance the slideshow
    And clicking the left arrow should go to the previous slide

  # ─── Destinations section ──────────────────────────────

  Scenario: Destinations section shows destination cards
    When I scroll to the destinations section
    Then I should see a section heading "Popular Destinations"
    And at least 3 destination cards should be visible
    And each card should have an image, name, and short description

  # ─── Features / Why Choose Us section ──────────────────

  Scenario: Features section displays key benefits
    When I scroll to the features section
    Then I should see a section heading about why choose us
    And at least 3 feature items should be visible
    And each feature should have an icon, title, and description

  # ─── About / Experience section ────────────────────────

  Scenario: About section shows travel experience info
    When I scroll to the about section
    Then I should see a section with travel experience details
    And the section should include a heading and descriptive text
    And a call-to-action button should be present

  # ─── Newsletter section ────────────────────────────────

  Scenario: Newsletter signup section renders
    When I scroll to the newsletter section
    Then I should see a newsletter signup form
    And an email input field should be present
    And a submit button should be visible

  # ─── Footer ────────────────────────────────────────────

  Scenario: Footer renders with links and branding
    When I scroll to the footer
    Then the footer should be visible
    And it should contain navigation links
    And it should contain a "Made with Component Dock" link
      | href                                    | text                    |
      | https://www.componentdock.com/          | Component Dock          |

  # ─── Responsive ────────────────────────────────────────

  Scenario: Mobile view collapses navbar
    Given the viewport is 375x812 mobile
    Then the navbar should show a hamburger menu button
    And clicking the hamburger should open a mobile nav menu

  Scenario: Mobile hero scales properly
    Given the viewport is 375x812 mobile
    Then the hero section should fill the viewport width
    And the hero heading should be smaller than desktop
    And the CTA button should be centered

## Verification checklist

- [ ] Navbar: transparent on hero, solid on scroll, all links present
- [ ] Hero: full-screen, background image, heading, CTA, slider arrows
- [ ] Destinations: grid of cards with images and descriptions
- [ ] Features/Why Us: icon grid with benefits
- [ ] About section: heading, text, CTA
- [ ] Newsletter: email input + submit button
- [ ] Footer: links, "Made with Component Dock" attribution
- [ ] Responsive: hamburger nav on mobile, hero scales, cards stack
- [ ] Accessibility: semantic elements, aria-labels, focus-visible
- [ ] No ColorLib references in app code (only in this spec)
- [ ] Coverage: 100% lines/functions/branches/statements
