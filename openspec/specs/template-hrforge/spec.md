# Template: Hrforge (Corporate HR Agency)

## Purpose

Hrforge is a single-page corporate HR agency website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Humanresources" free template (source:
https://colorlib.com/wp/template/humanresources/), built under a
DIFFERENT name (**Hrforge**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery site with AOS scroll animations, an
owl-carousel image slider, an accordion FAQ, animated counters, staff
hover cards, a testimonial carousel, blog thumbnails, and a multi-column
footer. It targets HR consulting firms and uses a blue (#0389FF) brand
palette on a clean white/light-grey layout with Work Sans typography.

**Preview URL:** https://preview.colorlib.com/theme/humanresources/
(reachable, verified 2026-09-12 — full HTML 541 lines, CSS at
`css/style.css` 132K+ chars including Bootstrap 4 bundle).

## Design tokens

Extracted from `css/style.css` on the live preview:

| Token               | Value                                  | Notes                                      |
| ------------------- | -------------------------------------- | ------------------------------------------ |
| Font family         | `"Work Sans", arial, sans-serif`       | Google Fonts import (300, 400, 700)        |
| Primary / brand     | `#0389FF`                              | Navbar, btn-primary, counters, accordion   |
| Hover primary       | `#0075dc` / `#36a1ff`                  | Button hover, focus ring                   |
| Body text           | `#999999`                              | Paragraphs, lead text                      |
| Headings            | `#000000`                              | h1–h5, all heading elements                |
| Body background     | `#ffffff`                              | Page background                            |
| Light section bg    | `#f8f9fa` (Bootstrap `--light`)        | Counter section, services, footer          |
| Button radius       | `0` (sharp corners)                    | `.btn { border-radius: 0px }`              |
| Button style        | uppercase, 14px, letter-spacing 0.1em  | All buttons                                |
| Button primary bg   | `#0389FF`, text white                  | `.btn-primary`                             |
| Button black        | `#000000` bg, white text               | `.btn-black` used on "More Features" CTA   |
| Form control        | border-radius 0, height 50px, 1px solid `#cccccc` | Sharp, tall inputs             |
| Link color          | `#000000` (a), `#0389FF` (active/acc)| Transitions 0.3s ease                      |
| Navbar (mobile)     | `#0389FF` solid bg                     | `.templateux-navbar` default               |
| Navbar (desktop)    | transparent, absolute over hero        | `@media (min-width:768px)`                 |
| Hero overlay        | `rgba(0, 0, 0, 0.3)`                  | `.templateux-cover:before`                 |
| Hero min-height     | 800px                                  | `.templateux-cover`                        |
| Counter number      | `#0389FF`, 50px                        | `.templateux-counter .templateux-number`   |
| Counter label       | uppercase, black, opacity 0.5          | `.templateux-counter .templateux-label`    |
| Footer heading      | `#cccccc`, uppercase, 15px             | `.block-footer-widget h3`                  |
| Accordion active    | `#0389FF` text, plus/minus icon swap   | `a[aria-expanded=true]` color              |
| Section padding     | `7em 0`                                | `.templateux-section`, `.templateux-footer`|
| Overlap card shadow | `0 15px 30px 0 rgba(0,0,0,0.1)`       | `.templateux-overlap .block-icon-1`        |
| Blog thumbnail      | 500px height, bg-cover, black overlay  | `.block-thumbnail-1`                       |

## Gherkin requirements

### Navbar

```gherkin
Feature: Navbar

  Scenario: Desktop navbar displays over hero
    Given the viewport is ≥ 768px wide
    When the page loads
    Then the navbar is transparent and positioned absolute over the hero
    And the logo text is "Hrforge"
    And nav links are "Home", "About", "Services" (with dropdown), "Blog", "Contact"
    And all nav link text is white, uppercase, 13px, letter-spacing 0.1em

  Scenario: Mobile navbar has solid blue background
    Given the viewport is < 768px wide
    When the page loads
    Then the navbar has a #0389FF background
    And a hamburger toggle button is visible
    And clicking the hamburger toggles the mobile menu

  Scenario: Services dropdown appears on hover/click
    Given the viewport is ≥ 992px wide
    When the user hovers over "Services"
    Then a dropdown appears with "HR Consulting", "Leadership Training", "HR Management" links
    And sub-menus are available under "HR Management" ("Operational Management", "Corporate Program")
```

### Hero / Cover

```gherkin
Feature: Hero Section

  Scenario: Full-width hero with background image and overlay
    Given the page loads
    Then a full-width hero section is displayed with a background image
    And a dark overlay (30% opacity) covers the image
    And the heading reads "We Are Your Partners in Human Resource"
    And a lead paragraph is displayed below the heading
    And a "Get Started" primary button is visible
    And a "Learn More" text link is displayed next to the button
    And all text is white
    And the hero minimum height is 800px
```

### Overlap Features

```gherkin
Feature: Overlap Feature Cards

  Scenario: Three feature cards overlap the hero bottom
    Given the hero section is rendered
    When the user scrolls down slightly
    Then three feature cards are visible overlapping the hero
    And each card has an icon, a title, a description paragraph, and a "Learn More" link
    And the cards are "Corporate Collaboration", "Strategic Partners", "Infinite Posibilities"
    And the cards have a white background with box-shadow 0 15px 30px 0 rgba(0,0,0,0.1)
    And cards are stacked vertically on mobile, side-by-side on desktop (3 columns)
```

### Our Agency + Why Us (Two-Column)

```gherkin
Feature: Agency and FAQ Section

  Scenario: Two-column layout with carousel and accordion
    Given the user scrolls to the Agency section
    Then the left column shows an "Our Agency" heading with an image carousel (3 slides)
    And the right column shows a "Why Us?" heading with 4 accordion items
    And accordion items are: "Provident alias", "Debitis ad similique tempore",
      "Lorem ipsum dolor sit amet", "Modi natus suscipit"
    And clicking an accordion item expands its body text
    And only one accordion item is expanded at a time
    And the active accordion heading is colored #0389FF
```

### Counter Section

```gherkin
Feature: Counter Stats

  Scenario: Three animated counters on a light background
    Given the user scrolls to the counter section
    Then a #f8f9fa light background is displayed
    And three counters are shown: "Number of Clients" (99399),
      "Number of Personnel" (199), "Years Of Experience" (24)
    And counter numbers are displayed in #0389FF at 50px
    And labels are uppercase with reduced opacity
    And numbers animate from 0 to their target on scroll into view
```

### Leadership / Team

```gherkin
Feature: Leadership Team

  Scenario: Three team member cards with hover reveal
    Given the user scrolls to the team section
    Then three staff cards are displayed in a 3-column grid
    And each card has a background image
    And each card shows name, title, and a bio paragraph on hover
    And cards have a default height of 400px
    And the card expands on hover to reveal the full bio text
    And the section heading is "The Leadership"
```

### Testimonials

```gherkin
Feature: Happy Customers Testimonials

  Scenario: Testimonial carousel
    Given the user scrolls to the testimonials section
    Then the heading reads "Happy Customers"
    And a quote mark character is displayed above the carousel
    And three testimonial slides are available, each with a blockquote and cite
    And quotes are centered, 18px, black text, line-height 2
```

### Services Grid

```gherkin
Feature: Our Services

  Scenario: Six service cards in a 3x2 grid
    Given the user scrolls to the services section
    Then a #f8f9fa light background is displayed
    And the heading reads "Our Services"
    And six service cards are shown in a 3-column grid (2 rows)
    And each card has an icon, a title, and a description
    And a "More Features" button with black background is centered below the grid
```

### Blog Thumbnails

```gherkin
Feature: Blog Thumbnails

  Scenario: Four blog posts in asymmetric grid
    Given the user scrolls to the blog section
    Then the heading reads "Our Blog" with a subtitle paragraph
    And four blog thumbnail cards are displayed in 2 rows
    And the first row has 1/3 + 2/3 width split
    And the second row has 2/3 + 1/3 width split (reversed)
    And each card has a background image, a title, and post metadata (date + author)
    And hovering reveals the card content with a dark overlay
    And each card is 500px tall
```

### Footer

```gherkin
Feature: Footer

  Scenario: Multi-column footer with about, links, and social
    Given the user scrolls to the footer
    Then a #f8f9fa light background footer is displayed
    And the left column shows "About" heading with a description paragraph
    And three link columns are shown: "Learn More", "Support", "About Us"
    And a "Connect With Us" column shows social media icons
    And the footer links to "Component Dock" (https://www.componentdock.com/)
```

## Verification checklist

- [ ] All 10 sections render in the correct order: Navbar → Hero → Overlap Features → Agency + FAQ → Counter → Team → Testimonials → Services → Blog → Footer
- [ ] Brand color #0389FF is used consistently: navbar, btn-primary, counter numbers, accordion active state
- [ ] Font family is Work Sans (loaded via Google Fonts `<link>`)
- [ ] All buttons have border-radius 0 (sharp corners), uppercase text, letter-spacing 0.1em
- [ ] Hero has 800px min-height, 30% dark overlay, white text
- [ ] Overlap cards have white background + box-shadow and overlap hero bottom
- [ ] Accordion works: one item expanded at a time, active heading is #0389FF
- [ ] Counter numbers animate on scroll
- [ ] Team cards expand on hover to show bio
- [ ] Blog thumbnails use asymmetric 1/3 + 2/3 grid layout
- [ ] Footer links to https://www.componentdock.com/ (no ColorLib references)
- [ ] No `colorlib.com` or `preview.colorlib.com` references in app code
- [ ] Footer heading color is #cccccc uppercase
- [ ] Placeholder images use `https://picsum.photos/seed/<template>-<n>/<w>/<h>`
- [ ] Icons use `lucide-react`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
