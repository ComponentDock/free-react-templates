# Template: Silvergrain (Photography Portfolio)

## Purpose

Silvergrain is a single-page photography portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Photography 2" free template (source:
https://colorlib.com/wp/template/photography-2/), built under a DIFFERENT
name (**Silvergrain**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a clean, minimalist photography portfolio with a full-width
image carousel hero, simple navigation bar with an email CTA, and a minimal
footer with social links. The design emphasizes large photography imagery
with overlay text, a green/teal accent color for interactive elements, and
a white overall aesthetic.

**Preview URL:** https://preview.colorlib.com/theme/photography-2/
(returns 404 — analysis based on TEMPLATES.md screenshot)

**Source screenshot:**
https://colorlib.com/wp/wp-content/uploads/sites/2/photography-2-free-template-1.jpg

## Design Tokens (from screenshot analysis — preview unreachable)

| Token | Value | Usage |
| --- | --- | --- |
| Brand accent | `#2ecc71` (green/teal) | Active nav link, email CTA text |
| Background | `#ffffff` | Page body, nav bar, footer |
| Text primary | `#333333` (dark grey) | Logo, nav links, footer text |
| Text on hero | `#ffffff` | Hero heading, CTA button |
| Hero overlay | semi-transparent dark | Gradient or overlay on hero image |
| Nav arrow bg | `rgba(0,0,0,0.35)` | Semi-transparent dark circles for prev/next |
| Font — headings | serif (likely Playfair Display or similar) | Hero heading "Red kayaks" |
| Font — body/nav | sans-serif (likely Poppins or Montserrat) | Nav links, footer, button text |
| Button style | text link with underline, no background | "VIEW PROJECTS" in hero, "SHOW THUMBNICLES" in footer |
| Section spacing | generous whitespace | Clean separation between nav, hero, footer |

## Visual Design Notes (from TEMPLATES.md screenshot)

The template shows a desktop browser viewport with:

1. **Navbar** — white background, full-width. Left: "Foto." logo in bold
   dark serif/sans-serif with a green dot. Center: horizontal nav links
   (Home in green, Portfolio, Blog, About, Contact). Right: green
   "CONTACT@COLORLIB.COM" email link. No hamburger menu visible — desktop
   layout.

2. **Hero carousel** — full-width section with a large landscape photograph
   (mountains with pink/blue misty clouds). Centered large white heading
   text "Red kayaks" in a serif/display font. Below: "VIEW PROJECTS" as a
   white underlined text link. Left and right navigation arrows in semi-
   transparent dark circles. Slide indicator "1 / 2" at bottom center.

3. **Footer** — white background, single row. Left: "Copyright ©2018 All
   rights reserved | This template is made with ♡ by Colorlib" (replaced
   with Component Dock attribution). Center: "SHOW THUMBNICLES" underlined
   text link. Right: social media icon row (Facebook, Twitter, Instagram,
   Behance, Pinterest).

The overall aesthetic is clean, minimal, and photography-focused — letting
the images dominate with minimal UI chrome.

## Gherkin Requirements

### Feature: Navigation Bar

  Scenario: Logo display
    Given the page loads
    Then the navbar displays "Silvergrain." as the logo text
    And the logo is positioned on the left side of the navbar
    And the logo uses a bold font weight

  Scenario: Navigation links
    Given the page loads
    Then the navbar shows links: Home, Portfolio, Blog, About, Contact
    And "Home" is highlighted with the brand accent color
    And links are horizontally arranged in the center of the navbar

  Scenario: Email CTA in navbar
    Given the page loads
    Then the navbar displays an email address on the right side
    And the email text uses the brand accent color
    And the email is a mailto: link

  Scenario: Responsive navbar
    Given the viewport is mobile-width (< 768px)
    Then the navigation links collapse into a hamburger menu
    And the logo remains visible

### Feature: Hero Carousel

  Scenario: Full-width hero image
    Given the page loads
    Then the hero section displays a full-width background image
    And the image covers the entire hero area (object-fit: cover)

  Scenario: Hero heading text
    Given the hero section is visible
    Then a large heading text is centered over the hero image
    And the heading text is white
    And the heading uses a serif/display font

  Scenario: Hero call-to-action
    Given the hero section is visible
    Then a "View Projects" text link is displayed below the heading
    And the link is white with an underline
    And the link navigates to the portfolio section

  Scenario: Carousel navigation arrows
    Given the hero section is visible
    Then left and right arrow buttons are displayed on the sides
    And the arrows are inside semi-transparent dark circular backgrounds
    And clicking the right arrow advances to the next slide
    And clicking the left arrow goes to the previous slide

  Scenario: Carousel slide indicator
    Given the hero section is visible
    Then a slide indicator "1 / 2" is displayed at the bottom center
    And the indicator updates when slides change

  Scenario: Carousel auto-advance
    Given the page is idle
    Then the carousel advances to the next slide after 5 seconds
    And the carousel loops back to the first slide after the last

### Feature: Footer

  Scenario: Footer layout
    Given the page loads
    Then the footer is displayed at the bottom of the page
    And the footer has a white background

  Scenario: Copyright text
    Given the footer is visible
    Then the footer shows copyright attribution text on the left
    And the attribution links to https://www.componentdock.com/
    And the attribution text reads "Made with ♥ by Component Dock"

  Scenario: Show thumbnails link
    Given the footer is visible
    Then a "Show Thumbnails" underlined text link is displayed in the center

  Scenario: Social media icons
    Given the footer is visible
    Then social media icons are displayed on the right side of the footer
    And the icons include: Facebook, Twitter, Instagram, Behance, Pinterest
    And each icon links to the respective social media platform

## Section Order (top to bottom)

1. Navbar (sticky or static, white background)
2. Hero Carousel (full-width, background image, overlay text)
3. Footer (white background, copyright + thumbnails link + social icons)

## Verification Checklist

- [ ] App folder: `apps/silvergrain/`
- [ ] Package: `@free-react-templates/silvergrain`
- [ ] CNAME: `silvergrain.free.componentdock.com`
- [ ] Homepage: `https://silvergrain.free.componentdock.com`
- [ ] No references to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Hero carousel with slide navigation
- [ ] Navbar with green accent on active link + email CTA
- [ ] Responsive hamburger menu on mobile
- [ ] All sections match screenshot order and layout
- [ ] 100% test coverage
- [ ] Spec: `openspec/specs/template-silvergrain/spec.md`
- [ ] Docs: `docs/templates/silvergrain/`
