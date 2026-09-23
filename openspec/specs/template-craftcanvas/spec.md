# Template: CraftCanvas (Design Agency)

## Purpose

Recreation of ColorLib "Design" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/design/
- **Live preview:** https://preview.colorlib.com/theme/design/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/design-free-template.jpg
- **New name:** craftcanvas (not reusing source name "design")
- **Package:** `@free-react-templates/craftcanvas`
- **Deploy target:** `craftcanvas.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/design/css/style.css:

| Token              | Value                        | Usage                                      |
| ------------------ | ---------------------------- | ------------------------------------------ |
| Font family        | `"Montserrat", sans-serif`   | All text, headings                         |
| Primary brand      | `#1264fa`                    | Buttons, links, active states, icon bgs    |
| Brand hover        | `#2671fa`                    | Button/link hover                          |
| Text primary       | `#000839`                    | Headings, body text, hero text             |
| Body background    | `#ffffff`                    | Page background                            |
| Section alt bg     | `#f8f9fa`                    | services-section, blog-entries backgrounds |
| Button radius      | `30px` (pill shape)          | All primary buttons                        |
| Button padding     | `12px 30px`                  | Primary button vertical/horizontal         |
| Button font size   | `14px`                       | Button text                                |
| Hero image bg      | `#dae1e7`                    | Decorative bg behind hero image            |
| Quote block bg     | `#000839`                    | Dark navy testimonial overlay on hero img  |
| Step icon bg       | `#1264fa` with `border-radius: 50%` | Circular blue icon containers        |
| Nav CTA button     | `border: 1px solid #ececec`, `border-radius: 30px` | Outlined pill CTA   |
| Link color         | `#1264fa`                    | Anchor elements                            |
| Form control border| `2px solid #e9ecef`          | Input fields                               |

### Google Font

Loaded via `@font-face` with multiple subsets (Latin, Latin-Ext, Cyrillic, Vietnamese):
- **Montserrat** — weights 300, 400, 700

## Section Structure (top to bottom, from live DOM)

1. **Navbar** — Logo ("Design" → "CraftCanvas"), centered nav links (Home, Dropdown, Inner Page, Contact us), right-aligned CTA pill button ("Free Templates" → "Free Templates" → "Browse Templates"), mobile hamburger menu
2. **Hero** — Split layout: left has headline ("Create, Code, and Published."), paragraph, "Get Started" pill button, two feature cards below (High Quality icons); right has hero image with overlaid dark quote block and author attribution
3. **Achievements** — 4-column stat row: percentages/numbers (99.55%, 98,000+, 99.99%, 1M+), heading, description
4. **How It Works** — Centered subtitle + heading, 3-column steps (icon circles, numbered titles, descriptions, decorative SVG curved arrows between steps)
5. **Services** — Split layout: left has subtitle, heading, paragraph, checklist, "Get Started" button; right has image with dotted overlay decoration
6. **Testimonials** — Owl carousel (3 testimonial cards): circular avatar image, blockquote, author name + title
7. **Blog Entries** — Centered subtitle + heading, 5-column blog post cards (date, title, excerpt)
8. **Footer** — Dark/gray: About widget, social icons (Facebook, Twitter, Instagram, Dribbble, LinkedIn), 3-column navigation link lists, copyright line

## Gherkin Requirements

```gherkin
Feature: CraftCanvas — Design Agency Template

  Background:
    Given the user opens the CraftCanvas template
    And the page loads with the Montserrat font family

  Scenario: Navbar displays logo and navigation links
    Then the navbar shows the logo "CraftCanvas"
    And the navigation links include "Home", "About", "Services", and "Contact"
    And a right-aligned CTA button "Browse Templates" is visible
    And on mobile a hamburger menu toggle is displayed

  Scenario: Hero section renders split layout
    Then the hero section shows a heading "Create, Code, and Published."
    And a descriptive paragraph is below the heading
    And a "Get Started" pill button is present
    And two feature cards with icons appear below the CTA
    And the right side shows a hero image with a dark quote overlay
    And the quote overlay shows an author name and role

  Scenario: Achievements section shows four stat cards
    Then four stat cards are displayed in a row
    And each card shows a large number, a heading, and a description
    And the numbers are approximately "99.55%", "98,000+", "99.99%", "1M+"

  Scenario: How It Works section shows three steps
    Then the section subtitle reads "How it works"
    And three steps are displayed with circular blue icons
    And each step has a numbered title and description
    And decorative curved arrow SVGs connect the steps

  Scenario: Services section has text and image split
    Then the left side shows subtitle "Services", a heading, and a checklist
    And a "Get Started" pill button appears below the checklist
    And the right side displays an image with a dotted overlay decoration
    And the section background is light gray (#f8f9fa)

  Scenario: Testimonials section renders a carousel
    Then a carousel shows three testimonial cards
    And each card has a circular avatar image
    And each card shows a blockquote with testimonial text
    And each card shows the author's name and role

  Scenario: Blog Entries section displays post cards
    Then the section subtitle reads "Blog"
    And five blog post cards are shown in a row
    And each card has a date, title link, and excerpt text

  Scenario: Footer contains navigation and social links
    Then the footer shows an "About" widget with description
    And social media icon links are present (Facebook, Twitter, Instagram, Dribbble, LinkedIn)
    And three columns of navigation links are displayed
    And a copyright line with "Component Dock" attribution is shown

  Scenario: All buttons use pill shape
    Then every primary button has border-radius of 30px
    And buttons use the brand color #1264fa
    And button hover changes to #2671fa

  Scenario: Responsive behavior
    Then on mobile the navbar collapses to a hamburger menu
    And the hero section stacks vertically
    And stat cards stack to 2 columns then 1 column
    And the 3-step section stacks vertically
    And the services split layout stacks vertically
    And the 5-column blog grid stacks to fewer columns
```

## Verification Checklist

- [ ] Montserrat font loaded from Google Fonts
- [ ] Brand color #1264fa applied to all buttons, links, active states
- [ ] Button pill shape (border-radius: 30px) on all CTAs
- [ ] Hero split layout with image and dark quote overlay
- [ ] Achievements section with 4 stat cards
- [ ] How It Works with 3 steps and decorative curved arrows
- [ ] Services split layout with checklist and image
- [ ] Testimonials carousel with 3 cards
- [ ] Blog entries grid with 5 cards
- [ ] Footer with About, social icons, navigation columns, copyright
- [ ] Mobile responsive (hamburger menu, stacked layouts)
- [ ] No references to ColorLib in app code (only in spec/TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] All placeholder images use picsum.photos/seed/craftcanvas-*
- [ ] lucide-react icons replace flaticon/icomoon icons
- [ ] 100% test coverage on new components
- [ ] Spec and docs committed with message `docs: prep CraftCanvas (ColorLib Design) spec + research`
