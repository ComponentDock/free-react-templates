# Template: Surge (Business Website)

## Purpose

Surge is a multi-section business website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Atomic" free
template (source: https://colorlib.com/wp/template/atomic/), built under a
DIFFERENT name (**Surge**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery business website with a full-page hero
(video play button), overlapping feature cards, image carousel, services grid,
portfolio thumbnails, counter stats, testimonials, and a multi-column footer.
The page title is "Atomic -- Free Business Website Template by Colorlib".

**WHAT MAKES SURGE DISTINCT (signature behaviors):**

1. **Full-page hero with video play button.** The hero is a full-viewport
   background image with a centered play button (circle with play icon) on the
   right side, heading + lead text + CTA button on the left. The play button
   links to a Vimeo video.
2. **Overlapping feature card.** A white card with `border-radius: 7px` and
   shadow overlaps the hero section (`margin-top: -13em`) containing 3 icon
   feature blocks in a row.
3. **Two-column content section.** "Good Design is a Good Start" heading with
   a two-column text layout (lead paragraph left, two paragraphs right),
   followed by a full-width image carousel.
4. **Services grid on light background.** 6 icon feature cards in a 3-column
   grid on `bg-light` (#f8f9fa), with a "More Features" CTA button.
5. **Portfolio thumbnail grid.** 2x2 asymmetric grid (one-third/two-third
   layout) with background images, dark overlay, and hover-reveal text.
6. **Counter stats section.** Blue (`#0389FF`) background with 3 animated
   counter numbers (Lines of Codes, Projects, Clients).
7. **Testimonial carousel.** Centered blockquotes in a carousel with a large
   quote mark decoration.
8. **Multi-column footer.** Light background with About, Learn More, Support,
   About Us columns, social links, download button, and copyright.

## Naming

The ColorLib source name "Atomic" is FORBIDDEN as the app name.
**Surge** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `surge` in any; only `upsurge`
exists). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Atomic" (page title: "Atomic -- Free Business
  Website Template by Colorlib"). Listed in TEMPLATES.md under **Business (365)**
  (section header line 879; the item at line 897 — `wp/template/atomic/`).
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/atomic/` returns full HTML.
- **Screenshot URL:** `https://colorlib.com/wp/wp-content/uploads/sites/2/atomic-free-template.jpg`
  (JPEG, 1200x946, downloaded successfully).

### Design tokens extracted from preview CSS

| Token                   | Value                                           | Source                                                                                                        |
| ----------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Font family             | `"Work Sans", arial, sans-serif`                | Google Fonts import, weights 300/400/700                                                                      |
| Primary color           | `#0389FF`                                       | `--primary`, buttons, links, navbar bg, active states                                                         |
| Body text color         | `#999999`                                       | `body { color: #999999 }`                                                                                     |
| Heading color           | `#000`                                          | `h1-h6 { color: #000 }`                                                                                       |
| Background              | `#fff`                                          | `body { background-color: #fff }`                                                                             |
| Light section bg        | `#f8f9fa`                                       | Bootstrap `bg-light`                                                                                          |
| Button border-radius    | `0px`                                           | `.btn { border-radius: 0px }` — sharp corners                                                                 |
| Button style            | uppercase, letter-spacing 0.1em, font-size 14px | `.btn { text-transform: uppercase; letter-spacing: .1em }`                                                    |
| Button hover            | `#36a1ff` bg, `#36a1ff` border                  | `.btn.btn-primary:hover { background-color: #36a1ff }`                                                        |
| Black button            | `#000` bg, `#fff` text                          | `.btn.btn-black { background: #000; color: #fff }`                                                            |
| Section padding         | `7em 0`                                         | `.templateux-section, .templateux-footer { padding: 7em 0 }`                                                  |
| Overlap card radius     | `7px`                                           | `.templateux-overlap { border-radius: 7px }`                                                                  |
| Overlap card shadow     | `0 10px 20px -8px rgba(0,0,0,0.2)`              | `.templateux-overlap { box-shadow: ... }`                                                                     |
| Overlap margin-top      | `-13em`                                         | `.templateux-overlap { margin-top: -13em }`                                                                   |
| Icon color (features)   | `#d6dadd`                                       | `.block-icon-1 .icon span { color: #d6dadd }`                                                                 |
| Navbar (mobile)         | `#0389FF` bg                                    | `.templateux-navbar { background-color: #0389FF }`                                                            |
| Navbar (desktop)        | transparent                                     | `@media (min-width:768px) { background-color: transparent }`                                                  |
| Footer headings         | `#cccccc`                                       | `.block-footer-widget h3 { color: #ccc }`                                                                     |
| Counter number          | `#fff`                                          | `.templateux-counter .templateux-number { color: #fff }`                                                      |
| Counter label           | `#fff` at 50% opacity                           | `.templateux-counter .templateux-label { opacity: .5 }`                                                       |
| Testimonial text        | `#000`, font-size 18px, line-height 2           | `.block-testomonial p { color: #000; font-size: 18px; line-height: 2 }`                                       |
| Thumbnail height        | `500px`                                         | `.block-thumbnail-1 { height: 500px }`                                                                        |
| Thumbnail hover overlay | `#000` at 50% opacity                           | `.block-thumbnail-1:hover:before { opacity: .5 }`                                                             |
| Play button             | 80px circle, 2px border `rgba(0,0,0,0.1)`       | `.templateux-block-play { width: 80px; height: 80px; border: 2px solid rgba(0,0,0,0.1); border-radius: 50% }` |
| Play button hover       | 90px                                            | `.templateux-block-play:hover { width: 90px; height: 90px }`                                                  |
| Lead font-size          | 18px                                            | `.lead { font-size: 18px }`                                                                                   |
| Body font-size          | 15px                                            | `body { font-size: 15px }`                                                                                    |
| Line-height             | 1.8                                             | `body { line-height: 1.8 }`                                                                                   |

### Section structure (from preview HTML)

1. **Navbar** — Logo "Atomic" left, nav links right (Home, About, Services
   with dropdown, Gallery, Blog, Contact). Dark/transparent on desktop,
   blue bg on mobile with hamburger toggle.
2. **Hero/Cover** — Full-viewport background image, two-column layout:
   left: heading "Design a better website template.", lead text, "Free Download"
   CTA button; right: circular play button linking to Vimeo video.
3. **Features overlap card** — White card overlapping hero (-13em margin-top),
   3-column grid: Intuitive Thinking, Orange for Carrots, Infinite Possibilities
   (each with ion icon + heading + paragraph).
4. **Content section** — "Good Design is a Good Start" centered heading,
   two-column text (lead left, two paragraphs right), followed by full-width
   image carousel (owl-carousel, 3 images).
5. **Services grid** — `bg-light` background, 3x2 grid of icon features:
   Regular Update, Infinite Possibilities, Good Security, Orange for Carrots,
   Intuitive Thinking, Play Video. "More Features" CTA button below.
6. **Portfolio thumbnails** — 2-row asymmetric grid: row 1 = 1/3 + 2/3,
   row 2 = 2/3 + 1/3. Each has background image, dark overlay, hover-reveal
   heading + category text.
7. **Counter stats** — `bg-primary` (#0389FF) background, 3 columns:
   99399 Lines of Codes, 99 Number of Projects, 124 Number of Clients.
8. **Testimonials** — Centered quote mark, carousel with 3 blockquotes.
9. **Footer** — `bg-light`, 4-column layout: About (text), Learn More (links),
   Support (links), About Us (links + download button + social icons).
   Copyright line at bottom.

## Gherkin requirements

```gherkin
Feature: Surge business website template
  As a visitor
  I want to browse a professional business website
  So that I can learn about the company and its services

  Scenario: Navbar displays correctly
    Given I am on the Surge homepage
    Then I see the logo "Surge" in the navbar
    And I see navigation links: Home, About, Services, Gallery, Blog, Contact
    And the navbar is transparent on desktop
    And the navbar has a blue background on mobile

  Scenario: Hero section renders with video play button
    Given I am on the Surge homepage
    Then I see a full-viewport hero with a background image
    And I see the heading "Design a better website template."
    And I see a "Free Download" CTA button
    And I see a circular play button on the right side

  Scenario: Overlapping feature card appears
    Given I scroll past the hero section
    Then I see a white card overlapping the hero
    And the card contains 3 feature blocks: Intuitive Thinking, Orange for Carrots, Infinite Posibilities
    And each feature block has an icon, heading, and paragraph

  Scenario: Content section displays correctly
    Given I scroll to the content section
    Then I see the heading "Good Design is a Good Start"
    And I see a two-column text layout
    And I see a full-width image carousel below

  Scenario: Services grid shows 6 features
    Given I scroll to the services section
    Then I see 6 feature cards in a 3-column grid
    And the section has a light gray background
    And I see a "More Features" CTA button

  Scenario: Portfolio thumbnails display correctly
    Given I scroll to the portfolio section
    Then I see 4 portfolio items in a 2x2 asymmetric grid
    And each item has a background image with dark overlay
    And hovering reveals the heading and category text

  Scenario: Counter stats animate on scroll
    Given I scroll to the counter section
    Then I see 3 stats on a blue background
    And the stats show: 99399 Lines of Codes, 99 Projects, 124 Clients
    And the numbers animate from 0 to their target values

  Scenario: Testimonials carousel works
    Given I scroll to the testimonials section
    Then I see a large quote mark decoration
    And I see a carousel with testimonial blockquotes
    And I can navigate between testimonials

  Scenario: Footer renders correctly
    Given I scroll to the footer
    Then I see a light gray footer with 4 columns
    And I see About, Learn More, Support, and About Us sections
    And I see social media icons
    And I see a "Download for free" button
    And I see a copyright line linking to Component Dock
```

## Verification checklist

- [ ] Navbar: transparent on desktop, blue on mobile, hamburger toggle works
- [ ] Hero: full-viewport bg image, play button, heading, CTA button
- [ ] Overlap card: white card with shadow, 3 feature blocks, -13em margin
- [ ] Content: two-column text, heading, image carousel
- [ ] Services: 6 icon cards in 3x2 grid, light bg, CTA button
- [ ] Portfolio: 2x2 asymmetric grid, bg images, hover reveal
- [ ] Counter: blue bg, 3 animated stats
- [ ] Testimonials: carousel with blockquotes, quote decoration
- [ ] Footer: 4 columns, social links, download button, Component Dock link
- [ ] All sections use Work Sans font
- [ ] Primary color #0389FF used consistently
- [ ] Buttons are sharp (border-radius: 0), uppercase, letter-spacing
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] Responsive: mobile hamburger, stacked columns
- [ ] Placeholder images via picsum.photos/seed/surge-N
