# Template: Captura (Photography Portfolio)

## Purpose

Recreation of ColorLib's **Bato** template — a photography portfolio website with a full-bleed hero carousel and alternating work gallery entries. Built with React 19, Vite, Tailwind CSS 4, TypeScript.

- **Source:** https://colorlib.com/wp/template/bato/
- **Preview:** https://preview.colorlib.com/theme/bato/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bato-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** captura (apps/captura, @free-react-templates/captura)

## Design tokens

Extracted from the live preview CSS (`preview.colorlib.com/theme/bato/css/style.css`):

| Token            | Value                          | Usage                                    |
| ---------------- | ------------------------------ | ---------------------------------------- |
| font-body        | "Karla", sans-serif            | Body text, nav links, descriptions       |
| font-display     | "Playfair Display", serif      | Logo, hero headings, section titles      |
| color-accent     | #F9CE00                        | Active nav links, hover states, tag text |
| color-accent-alt | #FFE9E3                        | Secondary accent (light blush)           |
| color-bg         | #FFFFFF                        | Page background, header                  |
| color-text       | #000000                        | Headings, body text                      |
| color-text-sec   | #333333                        | Secondary text, placeholders             |
| color-text-muted | #727272 (rgba 114,114,114,0.8) | Muted descriptions                       |
| color-btn-bg     | #000000                        | CTA button background                    |
| color-btn-hover  | #F9CE00                        | CTA button hover background              |
| radius-btn       | 0 (square)                     | Buttons: no border-radius                |
| radius-toggle    | 2px                            | Nav hamburger toggle                     |
| hero-split       | 60% / 40%                      | Hero: image left 60%, text right 40%     |
| tag-spacing      | letter-spacing: 7px            | Hero tag labels ("Welcome", "Discover")  |
| logo-size        | 24px, uppercase                | Header logo                              |

## Section structure (single-page React recreation)

The original template is multi-page (index, work, blog, about, contact). For the React recreation we collapse into a single page with these sections in order:

1. **Sidebar Navigation** — full-screen overlay with search input, nav links (Home, Work, Blog, About, Contact), and gallery thumbnail grid
2. **Header / Navbar** — sticky top bar with logo "Captura" (left) and hamburger toggle (right)
3. **Hero Carousel** — 3 slides, each with a 60/40 split (background image left, text panel right with slide number, tag label, headline, description, CTA button "View Galleries")
4. **Works Gallery** — "Works" heading, then 5 work entries with alternating layouts (image 60% + text 40%, alternating left/right), each with title, description, and "View Photo" CTA
5. **Subscribe** — centered section with email input and "Subscribe Now" button
6. **Footer** — 3-column layout: Office address, Get in Touch (email), Social icons (Facebook, Twitter, Google+, Dribbble) + copyright

## Gherkin requirements

### Sidebar Navigation

```gherkin
Feature: Sidebar Navigation
  Scenario: Toggle sidebar visibility
    Given the user is on the page
    When the user clicks the hamburger icon in the header
    Then the sidebar overlay slides in from the left
    And the sidebar shows a search input with placeholder "Enter any key to search..."
    And the sidebar shows navigation links: Home, Work, Blog, About, Contact
    And the sidebar shows a "Gallery" section with 4 thumbnail images

  Scenario: Close sidebar
    Given the sidebar is open
    When the user clicks the hamburger icon again
    Then the sidebar overlay slides out and disappears

  Scenario: Sidebar link navigation
    Given the sidebar is open
    When the user clicks a navigation link
    Then the page scrolls to the corresponding section
    And the sidebar closes
```

### Header / Navbar

```gherkin
Feature: Header
  Scenario: Logo display
    Given the user is on the page
    Then the header shows the logo text "Captura"
    And the logo uses the Playfair Display font
    And the logo is uppercase

  Scenario: Hamburger toggle
    Given the user is on the page
    Then a hamburger toggle button is visible in the header
    When the user hovers over the hamburger toggle
    Then the toggle background changes to black
```

### Hero Carousel

```gherkin
Feature: Hero Carousel
  Scenario: Display first slide
    Given the user is on the page
    Then the hero section fills the viewport height
    And the left 60% shows a full-bleed background image
    And the right 40% shows a text panel with:
      | element    | content                    |
      | slide num  | 01/03                      |
      | tag        | Welcome                    |
      | headline   | Photography is on it's way |
      | desc       | descriptive paragraph      |
      | cta        | View Galleries             |

  Scenario: Carousel navigation
    Given the hero carousel is showing slide 1
    When the carousel advances to slide 2
    Then the slide number updates to 02/03
    And the tag shows "Photography"
    And the headline shows "Capture interesting things."
    And a new background image is displayed

  Scenario: Third slide
    Given the carousel is on slide 3
    Then the slide number shows 03/03
    And the tag shows "Discover"
    And the headline shows "Discover New Things"

  Scenario: CTA button styling
    Given the hero text panel is visible
    Then the "View Galleries" button has a black background
    And the button has no border-radius (square corners)
    And on hover the button background changes to yellow (#F9CE00)
    And the button includes a right arrow icon
```

### Works Gallery

```gherkin
Feature: Works Gallery
  Scenario: Section heading
    Given the user scrolls to the works section
    Then a heading "Works" is displayed centered

  Scenario: Work entry layout
    Given the works section is visible
    Then there are 5 work entries
    And each entry uses a 60/40 split layout
    And entries alternate between:
      | layout           | image position |
      | text-right       | left 60%       |
      | text-left        | right 60%      |
    And each entry has a background image covering the 60% area

  Scenario: Work entry content
    Given a work entry is visible
    Then it shows a heading linking to a detail page
    And it shows a description paragraph
    And it shows a "View Photo" button
    And the button has square corners and black background

  Scenario: Image hover effect
    Given a work entry image is visible
    When the user hovers over the image
    Then a semi-transparent overlay with a search icon appears
```

### Subscribe Section

```gherkin
Feature: Subscribe
  Scenario: Subscribe form display
    Given the user scrolls to the subscribe section
    Then an email input with placeholder "Enter your email" is shown
    And a "Subscribe Now" button is shown next to the input
    And the form is centered on the page

  Scenario: Subscribe button styling
    Given the subscribe form is visible
    Then the "Subscribe Now" button has a black background
    And the button has square corners
    And on hover the button background changes to yellow (#F9CE00)
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer layout
    Given the user scrolls to the footer
    Then 3 columns are displayed:
      | column       | content                                    |
      | Office       | Address with street and suite               |
      | Get in Touch | Email link                                 |
      | Social       | Facebook, Twitter, Google+, Dribbble icons |

  Scenario: Copyright line
    Given the footer is visible
    Then a copyright line shows the current year
    And it links to Component Dock (https://www.componentdock.com/)
```

## Verification checklist

- [ ] Sidebar navigation toggles open/closed with animation
- [ ] Sidebar shows search, nav links, and gallery thumbnails
- [ ] Header shows "Captura" logo in Playfair Display, uppercase
- [ ] Hero carousel cycles through 3 slides automatically
- [ ] Each hero slide has 60/40 split layout (image left, text right)
- [ ] Slide numbers, tags, headlines, descriptions match original
- [ ] CTA buttons are square (no radius), black bg, yellow hover
- [ ] Works section has 5 entries with alternating layouts
- [ ] Work entries have title, description, "View Photo" CTA
- [ ] Subscribe section with email input and button
- [ ] Footer has 3 columns + copyright with Component Dock link
- [ ] All design tokens match: Karla body, Playfair Display headings, #F9CE00 accent
- [ ] Uses picsum.photos placeholder images (deterministic seeds)
- [ ] Uses lucide-react for icons (search, arrow, social)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains captura.free.componentdock.com
- [ ] package.json homepage is https://captura.free.componentdock.com
