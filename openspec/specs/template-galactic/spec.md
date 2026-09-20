# Template: Galactic (Event Conference)

## Purpose

Galactic is a single-page event/conference landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Eventz" free template (source: https://colorlib.com/wp/template/eventz/),
preview: https://preview.colorlib.com/theme/eventz/), built under a
DIFFERENT name (**Galactic**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 event template with a hero slider, countdown
timer, about section, speakers grid, tabbed event schedule (accordion per
day), mosaic gallery, pricing cards, sponsor logos, blog cards, and a
multi-column footer with newsletter signup.

**WHAT MAKES GALACTIC DISTINCT (signature behaviors):**

1. **Hero with countdown timer.** Full-width hero with background image,
   headline "Digital Conference For Designers", subtitle "Committed to
   success", a Download CTA button and a circular play-video button. An
   absolute-positioned countdown timer (Days/Hrs/Min/Sec) in gold `#ffdb6f`
   sits at the bottom-right of the hero on desktop.
2. **Speakers section on dark background.** A section with a dark
   background image overlay, white text headings, 6 speaker cards in a
   responsive grid, each with photo, name, role, and social media icon
   row (Facebook, Twitter, Globe) on hover.
3. **Tabbed event schedule.** Four tabs (Day 01–04) each containing an
   accordion of time-slot cards. Each card shows time range, session title,
   and expandable description. Tabs switch content without page reload.
4. **Mosaic gallery.** A 2-row, multi-column image gallery using a mix
   of 3-column and 6-column spans for visual variety. Images have a dark
   overlay on hover with a subtle zoom effect.
5. **Pricing cards with active state.** Three pricing tiers; the center
   card is visually elevated (`scale(1.2)`) with a purple background
   `#31118f` and inverted text (white). Other cards have light background
   with dark text.

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/eventz/assets/css/style.css`:

| Token              | Value         | Usage                                         |
| ------------------ | ------------- | --------------------------------------------- |
| brand-primary      | `#331391`     | Buttons, links, accents, active pricing card  |
| brand-secondary    | `#1f2b7b`     | Headings, primary button variant              |
| brand-dark         | `#2e0e8c`     | Sponsors section background                   |
| accent-gold        | `#ffdb6f`     | Countdown timer, video play border            |
| accent-cyan        | `#4cd3e3`     | Success button variant                        |
| bg-light           | `#f9f9ff`     | Page sections, accordion wrapper              |
| bg-lavender        | `#f0e9ff`     | Section subtle tint                           |
| text-heading       | `#26264b`     | Section headings                              |
| text-body          | `#10285d`     | Body paragraphs                               |
| text-muted         | `#999999`     | Secondary text                                |
| pricing-active     | `#31118f`     | Active/hovered pricing card background        |
| font-heading       | Sarabun       | Headings, nav links (Google Fonts)            |
| font-body          | Roboto        | Body text (Google Fonts)                      |
| font-label         | Sen           | Section labels, countdown (Google Fonts)      |
| btn-radius         | `0px`         | All buttons are square (no border-radius)      |
| card-radius        | `6px`         | Pricing cards                                 |
| border-radius-lg   | `50%`         | Circular play button, back-to-top             |

## Gherkin Requirements

### Feature: Galactic — Event Conference Landing Page

  Scenario: Navbar renders with logo, navigation links, and CTA button
    Given the page loads
    Then a sticky navbar displays with the logo on the left
    And navigation links: Home, About, Speakers, Schedule, Blog, Contact
    And a "Get Your Ticket" CTA button on the right
    And on mobile the nav collapses to a hamburger menu

  Scenario: Hero section displays headline and countdown
    Given the page loads
    Then a full-width hero banner is visible with background image
    And the subtitle reads "Committed to success"
    And the main headline reads "Digital Conference For Designers"
    And a "Download" button and a circular play-video button are shown
    And a countdown timer shows Days, Hours, Minutes, Seconds in gold text
    And the countdown updates every second on the client

  Scenario: About section shows event details
    Given the user scrolls to the About section
    Then the heading reads "The Biggest Digital Conference"
    And two info cards display: "Where: New York, United States" and "When: Jan. 21. 2021"
    And a "Get Your Ticket" button is visible
    And an overlapping image pair is shown on the right

  Scenario: Speakers section displays team members
    Given the user scrolls to the Speakers section
    Then the heading reads "The Most Important Speakers"
    And a "View Speaker" button is visible
    And 6 speaker cards are displayed in a responsive grid
    And each card shows a photo, name, role, and social media icons

  Scenario: Event schedule tabs switch content
    Given the user scrolls to the Schedule section
    Then the heading reads "Event Schedule"
    And 4 tabs are visible: Day 01, Day 02, Day 03, Day 04
    When the user clicks "Day 02"
    Then Day 02 content is shown and Day 01 content is hidden
    And each day contains an accordion with 3 time-slot entries
    And each entry shows a time range, title, and expandable description
    And clicking an entry toggles its description open/closed

  Scenario: Gallery displays mosaic images
    Given the user scrolls to the Gallery section
    Then 6 images are displayed in a mosaic grid layout
    And the grid uses a mix of column spans (3-col and 6-col)
    And hovering an image shows a dark overlay

  Scenario: Pricing cards show three tiers
    Given the user scrolls to the Pricing section
    Then the heading reads "Program Pricing"
    And 3 pricing cards are displayed side by side
    And the center card is visually elevated and highlighted in purple
    And each card shows a day range, price, feature list, and a CTA button
    And the center card's CTA button has inverted colors (white on purple)

  Scenario: Sponsors section displays partner logos
    Given the user scrolls to the Sponsors section
    Then the heading reads "Our Top General Sponsors"
    And the section has a deep purple background (`#2e0e8c`)
    And 6 sponsor logo images are displayed in a 3x2 grid

  Scenario: Blog section shows recent posts
    Given the user scrolls to the Blog section
    Then the heading reads "News From Blog"
    And 2 blog cards are displayed side by side
    And each card shows an image, date badge, category, title, and "Read more" link

  Scenario: Footer has four columns and newsletter form
    Given the user scrolls to the Footer
    Then 4 columns are displayed: About Us, Contact Info, Important Links, Newsletter
    And the Newsletter column has an email input and submit button
    And a bottom bar shows statistics (5000+, 451, 568)
    And a copyright line with a link to Component Dock
    And social media icon links are displayed

## Verification Checklist

- [ ] All sections render in correct order (Hero → About → Speakers → Schedule → Gallery → Pricing → Sponsors → Blog → Footer)
- [ ] Navbar is sticky on scroll with shadow effect
- [ ] Hero countdown timer updates in real time
- [ ] Schedule tabs switch content correctly
- [ ] Schedule accordion items expand/collapse
- [ ] Pricing center card has elevated active state
- [ ] Gallery images have hover overlay effect
- [ ] Footer newsletter form has email input
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] All placeholder images use `picsum.photos` with deterministic seeds
- [ ] Fonts loaded via Google Fonts (Sarabun, Roboto, Sen)
- [ ] Responsive: mobile hamburger, stacked columns, scaled pricing
- [ ] Tests pass with 100% coverage
- [ ] `npm run build` succeeds
- [ ] `public/CNAME` contains `galactic.free.componentdock.com`
- [ ] `package.json` homepage is `https://galactic.free.componentdock.com`
