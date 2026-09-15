# Template: BlankSlate (Business / Creative Agency)

## Purpose

Recreation of the ColorLib **Whitespace** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source template:** [Whitespace](https://colorlib.com/wp/template/whitespace/)
- **Live preview:** https://preview.colorlib.com/theme/whitespace/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/whitespace-free-template.jpg
- **New name:** `blankslate`
- **Package:** `@free-react-templates/blankslate`
- **Deploy target:** `https://blankslate.free.componentdock.com`
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/whitespace/:

### Colors

| Token | Value | Usage |
|---|---|---|
| Brand Yellow | `#fcd307` | CTA buttons, service icon backgrounds, testimony section bg, pricing highlights |
| Brand Blue | `#4ac7ea` / `#78d5ef` | Secondary accent, links, icon accents |
| Dark BG | `#141313` / `#000000` | Navbar, hero, project section, footer |
| Light BG | `#f8f9fa` / `#fafafa` | Pricing section bg (bg-light) |
| White | `#ffffff` | Content areas, card backgrounds |
| Text Primary | `#1a1a1a` / `#000000` | Headings, body text |
| Text Secondary | `#666666` / `#4d4d4d` | Paragraphs, descriptions |
| Text Muted | `#b3b3b3` | Subtle text |

### Typography

| Element | Font | Weight |
|---|---|---|
| Body | `Work Sans`, sans-serif | 400, 500 |
| Headings | `Poppins`, sans-serif | 600, 700 |

### Border Radii

| Element | Radius |
|---|---|
| Buttons | `30px` (pill-shaped) |
| Cards | `0.25rem` / `5px` |
| Circular elements | `50%` |

### Layout

- **Navbar:** Dark background, fixed/sticky, logo left, nav links right, transparent-to-solid on scroll
- **Hero:** Full-width dark background with centered text, "Get in touch" CTA
- **About section:** Two-column layout (image right, text left) with service list items (icon + title + description)
- **Services grid:** 4-column responsive grid with icon cards on yellow accent backgrounds
- **Counter section:** Full-width background image with overlapping stat numbers
- **Projects:** 3-column grid of project cards with hover overlay
- **Testimonials:** Yellow (`#fcd307`) background, carousel/slider of testimonial cards
- **Case Study:** 3-column card grid with featured image and description
- **Pricing:** Light background, 4 pricing tiers (Free, Startup, Premium, Pro) with feature lists
- **Partner:** Logo carousel on white background
- **Footer:** Dark background, 4-column layout (logo, useful links, quick links, contact)

## Gherkin Requirements

### Feature: BlankSlate Template

  Background:
    Given the user visits "https://blankslate.free.componentdock.com"
    And the page loads successfully

  Scenario: Navbar renders correctly
    Then the navbar is visible at the top
    And the logo text "BlankSlate" is displayed
    And navigation links "Home", "About", "Work", "Pricing", "Blog", "Contact" are present
    And the navbar has a dark background

  Scenario: Hero section displays
    Then the hero section is visible
    And the heading "We Help to Build You the Product" is displayed
    And the subheading "Business Solution" is displayed
    And a "Get in touch" button is visible and styled as a yellow pill button

  Scenario: About section displays service list
    Then the about section is visible
    And the heading "What We Can Do for You" is displayed
    And 7 service items are listed: Market Research, Financial Services, Online Marketing, 24/7 Support, Business Strategy, Data Analysis, Graphic Design
    And each service item has an icon, title, and description

  Scenario: Services grid displays
    Then the services grid section is visible
    And 4 service cards are displayed in a grid
    And each card has an icon with yellow background and a description

  Scenario: Counter/facts section displays
    Then the counter section is visible with a background image
    And the heading "Interesting Facts" is displayed
    And at least 4 numeric counters are shown

  Scenario: Projects gallery displays
    Then the projects section is visible
    And the heading "Recent Projects" is displayed
    And 6 project cards are displayed in a grid
    And each card shows "Branding & Illustration Design"
    And hovering a card shows an overlay with description

  Scenario: Testimonials section displays
    Then the testimonials section is visible
    And the heading "My satisfied customer says" is displayed
    And the section has a yellow (#fcd307) background
    And at least 3 testimonial items are shown with name and role

  Scenario: Case study section displays
    Then the case study section is visible
    And the heading "Case Study" is displayed
    And 3 case study cards are shown

  Scenario: Pricing section displays
    Then the pricing section is visible on a light background
    And the heading "Our Best Pricing" is displayed
    And 4 pricing tiers are shown: Free, Startup, Premium, Pro
    And each tier has a "Get Started" button
    And the Free tier is highlighted as "$0" / "100% free. Forever"

  Scenario: Partner section displays
    Then the partner section is visible
    And a carousel of partner/client logos is displayed

  Scenario: Footer displays
    Then the footer is visible with dark background
    And columns for logo, Useful Links, Quick Links, and Contact are shown
    And the footer links include: Home, About, Work, Pricing, Blog
    And a "Component Dock" link is present in the footer

  Scenario: Responsive behavior
    Given the viewport width is 768px
    Then the navbar collapses to a hamburger menu
    And service items stack vertically
    And project cards display in 2 columns
    And pricing tiers stack vertically

  Scenario: Dark mode support
    Given the user toggles dark mode
    Then the background colors invert appropriately
    And text contrast remains readable

## Verification Checklist

- [ ] All sections render in correct order: Navbar → Hero → About → Services → Counter → Projects → Testimonials → Case Study → Pricing → Partner → Footer
- [ ] Brand yellow `#fcd307` used for CTA buttons, icon backgrounds, and testimonials section
- [ ] Dark backgrounds (#141313 / #000) for navbar, hero, projects, footer
- [ ] Fonts: Poppins for headings, Work Sans for body (via Google Fonts link in index.html)
- [ ] Button style: pill-shaped (border-radius: 30px), yellow background
- [ ] Images use picsum.photos placeholder URLs
- [ ] No ColorLib references in app source code (provenance only in spec and TEMPLATES.md)
- [ ] Footer links to componentdock.com
- [ ] Responsive layout: mobile-first with proper breakpoints
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] TypeCheck passes (`npx tsc --noEmit`)
- [ ] Lint passes
- [ ] Build succeeds
