# Template: Festmark (Event / Conference)

## Purpose

Recreation of the ColorLib **Eventro** template as a single-page event/conference website.

- **Source slug:** `eventro`
- **Preview URL:** https://preview.colorlib.com/theme/eventro/
- **New name:** `festmark` (apps/festmark, @free-react-templates/festmark)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Event

## Design tokens (extracted from live preview CSS)

| Token              | Value                    | Usage                                          |
| ------------------ | ------------------------ | ---------------------------------------------- |
| Brand primary      | `#302072` (dark purple)  | Headings, nav, button hover background          |
| Brand accent       | `#FDE449` (yellow)       | CTA buttons, highlights, underlines, badge bg   |
| Section bg (light) | `#F6F7FF` (lavender)     | Speakers section, alternating section bg         |
| Section bg (blue)  | `#0154F7` (bright blue)  | Contact/CTA section background image overlay     |
| Body text color    | `#79709D` (muted purple) | Paragraphs, descriptions                         |
| Heading font       | Oswald (Google Fonts)     | All h1-h6, nav links, buttons                   |
| Body font          | Roboto (Google Fonts)     | Body text, descriptions, form inputs             |
| Button radius      | 5px                      | All CTA buttons (hero, subscribe, buy ticket)    |
| Button bg          | `#FDE449`                | Primary button background                       |
| Button text        | `#302072`                | Primary button text                             |
| Button hover bg    | `#302072`                | Button hover (animated slide-in)                |
| Button hover text  | `#fff`                   | Button hover text                               |
| Section title size | 60px, weight 700         | Section headings (Oswald)                       |
| Nav link color     | `#fff` (transparent hdr) | Header navigation links on hero                 |
| Nav hover          | `#FDE449`                | Header link hover + underline                   |
| Footer bg          | `#000` (black)           | Footer background                               |
| Footer text        | `#fff`                   | Footer links, copyright                         |

### Visual design notes (from preview screenshot)

- Dark hero with full-width background image (conference venue/audience).
- Large bold Oswald heading "Business Conference" in white, yellow date badge above.
- Yellow CTA "Join Now" + outlined "Watch Video" button side by side.
- "Innovative" rotated text on right side of hero (decorative).
- White/light sections alternate with lavender (#F6F7FF) backgrounds.
- Program schedule uses tabbed interface (by date) with speaker avatars.
- Speakers section: 4-column grid, hover overlay with social icons, yellow accent.
- Contact/CTA section: blue background image, centered "Book your seat" text + yellow button.
- Black footer with centered social icons + nav links.

## Section structure (in page order)

1. **Navbar** — Transparent header, logo left, nav links right (Home, About, Programs, Speakers, Blog dropdown, Contact), "Buy Ticket" CTA button (purple bg, yellow text).
2. **Hero** — Full-width slider (2 slides, same content), large heading, date subtitle, description, "Join Now" + "Watch Video" buttons, rotated "Innovative" text.
3. **About** — "About the Conference" heading, left image, right text with heading "Fully innovative conference", description, location info (map marker + clock icons).
4. **Program Intro** — "The New Era of Tech Companies" heading, description text, "Join Now" button, right-side image.
5. **Subscribe** — Background image section, heading "We have top executive & start up here", email input + subscribe button (right-aligned).
6. **Program Schedule** — Tabbed interface (4 dates: 12 Jan, 13 Jan, 14 Jan, 15 Jan), each tab shows 3 program items with speaker avatar, title, description, time, and speaker name.
7. **Speakers** — "Our Speakers" heading, 4-column grid of speaker cards with image, social overlay on hover (Facebook, Twitter, LinkedIn), name, role.
8. **Contact CTA** — Blue background image, "Book your seat" heading, description, "Buy Ticket" button centered.
9. **Footer** — Black background, centered social icons (Facebook, Instagram, Twitter, LinkedIn, YouTube, Tumblr), nav links (Home, About, Programs, Speakers, Location, Contact), copyright with Component Dock link.

## Gherkin requirements

```gherkin
Feature: Festmark — Event/Conference Landing Page

  Background:
    Given the user opens the Festmark homepage

  # --- Navbar ---
  Scenario: Navbar displays all navigation links
    Then I should see links for "Home", "About", "Programs", "Speakers", "Blog", "Contact"
    And I should see a "Buy Ticket" button

  Scenario: Navbar is transparent over hero
    Given the page has loaded
    Then the navbar background should be transparent

  # --- Hero ---
  Scenario: Hero shows event headline and date
    Then I should see a date label (e.g. "12 Jan - 20 Jan 2020")
    And I should see a large heading "Business Conference"
    And I should see a description paragraph

  Scenario: Hero has call-to-action buttons
    Then I should see a "Join Now" button
    And I should see a "Watch Video" button/link

  # --- About ---
  Scenario: About section displays conference info
    Then I should see an "About the Conference" heading
    And I should see an image on the left
    And I should see text content on the right with location information

  # --- Program Intro ---
  Scenario: Program intro shows tech companies section
    Then I should see a "The New Era of Tech Companies" heading
    And I should see descriptive text
    And I should see a "Join Now" button

  # --- Subscribe ---
  Scenario: Subscribe section has email form
    Then I should see a "We have top executive & start up here" heading
    And I should see an email input field
    And I should see a "Subscribe" button

  # --- Program Schedule ---
  Scenario: Program schedule has date tabs
    Then I should see tabs for at least 4 dates
    And the first tab should be active by default

  Scenario: Each tab shows program items
    Given I click on a date tab
    Then I should see program items with speaker avatar, title, description, time, and speaker name

  # --- Speakers ---
  Scenario: Speakers section shows speaker cards
    Then I should see an "Our Speakers" heading
    And I should see at least 4 speaker cards in a grid
    And each card shows a name and role

  Scenario: Speaker card shows social links on hover
    Given I hover over a speaker card
    Then I should see social media icons (Facebook, Twitter, LinkedIn)

  # --- Contact CTA ---
  Scenario: Contact CTA encourages ticket purchase
    Then I should see a "Book your seat" heading
    And I should see a "Buy Ticket" button

  # --- Footer ---
  Scenario: Footer shows social links and navigation
    Then I should see social media icons
    And I should see navigation links (Home, About, Programs, Speakers, Location, Contact)
    And I should see a copyright notice with "Component Dock" link

  # --- Responsive ---
  Scenario: Mobile menu toggle appears on small screens
    Given the viewport width is less than 992px
    Then I should see a mobile menu toggle
    And the desktop nav should be hidden
```

## Verification checklist

- [ ] All 9 sections present in correct order
- [ ] Design tokens match: Oswald headings, Roboto body, #302072 primary, #FDE449 accent
- [ ] Button radius 5px, yellow bg with purple text
- [ ] Transparent navbar over hero, white sticky navbar on scroll
- [ ] Tabbed program schedule functional
- [ ] Speaker cards have hover overlay with social icons
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] Responsive: mobile hamburger menu, stacked layouts
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Google Fonts loaded via index.html link
- [ ] All text content paraphrased (not copied verbatim)
