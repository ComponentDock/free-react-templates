# Template: Navara (Technology / Corporate)

## Purpose

Recreation of ColorLib "Cruise" template.
- **Source slug:** `cruise`
- **Preview URL:** https://preview.colorlib.com/theme/cruise/
- **Source page:** https://colorlib.com/wp/template/cruise/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | DM Sans (300, 400, 700) | Google Fonts via `<link>` |
| Brand color | `#ff5533` | Coral/orange-red — links, primary buttons, accents, quote icons |
| Text color | `#364d59` | Dark slate, body text |
| Black | `#000` | Footer background, strong text |
| Dark section bg | `#1c2d37` | Navy/teal — used for "Our Features" section |
| Light background | `#f6f5f5` | Alternate section bg (`bg-light`) |
| White | `#fff` | Card backgrounds, hero overlay text |
| Success/accent | `#71bc42` | Green — feature-3 checkmark icons |
| Button primary | `bg: #ff5533`, `color: #fff`, `border-radius: 4px` | Standard Bootstrap primary style |
| "More" link | `text-transform: uppercase`, `font-size: 0.75rem`, `letter-spacing: 0.1rem`, `border-bottom: 2px solid #ff5533` | Subtle CTA link style |
| Border radius | `4px` (buttons), `50%` (social icons, circular elements) | Bootstrap default for most elements |
| Section backgrounds | White, `#1c2d37` (dark), `#f6f5f5` (light), `#000` (footer) | Alternating white/dark/light pattern |

## Section structure (order from preview)

1. **Navbar** — transparent/absolute overlay on hero, centered logo ("cruise" → "navara"), split nav: Home/Technology/Careers (left), About/Blog/Contact (right), mobile hamburger toggle
2. **Hero** — full-width background image with dark overlay (`ftco-cover-1 overlay`), centered heading "We can make it together", subtext, white text
3. **What We Do** — 3-column feature cards with background image, white overlay panel with title + description + "Learn More" link; white section background
4. **Our Features** (section-2, dark bg `#1c2d37`) — two alternating rows: large image (9-col) + text sidebar (3-col); reversed layout for second row; numbered captions ("01.", "02.") in brand color; white text
5. **Design for the Future** — 2x2 grid of text-only feature items with green checkmark icons (`#71bc42`); white background
6. **Testimonial** (section-4) — centered blockquote with quote icon in brand color, attribution (name + role); subtle top border
7. **Blog Posts** — 4-column card grid on light background (`#f6f5f5`), each card: image + date meta + title + "Read More" link
8. **Footer** — dark bg (`#000`), 3-column layout: About Us text + Features links list + Newsletter form (email input + Subscribe button) + social icons (Facebook, Twitter, Instagram, LinkedIn); copyright line at bottom

## Gherkin requirements

```gherkin
Feature: Navara technology/corporate template

  Background:
    Given the user opens the Navara template

  Scenario: Navbar renders correctly
    Then the navbar is positioned over the hero (transparent/absolute)
    And the logo "navara" is centered
    And navigation links "Home", "Technology", "Careers" appear on the left
    And navigation links "About", "Blog", "Contact" appear on the right
    And a mobile hamburger menu toggle is present

  Scenario: Hero section displays
    Then a full-width hero banner with a background image is visible
    And the hero has a dark overlay
    And the hero contains the heading "We can make it together"
    And the hero contains a subtext line

  Scenario: What We Do section displays
    Then 3 feature cards are shown in a row
    And each card has a background image
    And each card has a white overlay panel with title and description
    And each card has a "Learn More" link styled with an uppercase border-bottom accent

  Scenario: Our Features section displays with dark background
    Then the section uses a dark navy background (#1c2d37)
    And the section heading "Our Features" is visible
    And 2 feature rows are displayed in alternating layouts
    And each row has a large image (9 columns) and a text sidebar (3 columns)
    And the second row has a reversed layout (text left, image right)
    And each row has a numbered caption ("01.", "02.") in brand color
    And all text in this section is white

  Scenario: Design for the Future section displays
    Then 4 text feature items are shown in a 2x2 grid
    And each feature has a green checkmark icon (#71bc42)
    And each feature has a title and description

  Scenario: Testimonial section displays
    Then a centered blockquote is visible
    And the quote has a quote icon in brand color (#ff5533)
    And the quote text is displayed
    And an attribution line shows name and role

  Scenario: Blog Posts section displays
    Then 4 blog post cards are shown in a 4-column grid
    And the section uses a light background (#f6f5f5)
    And each card has an image, date, title, and "Read More" link

  Scenario: Footer renders correctly
    Then the footer uses a dark background (#000)
    And an "About Us" column with descriptive text is present
    And a "Features" column with a link list is present
    And a "Subscribe to Newsletter" form with email input and button is present
    And social media icons (Facebook, Twitter, Instagram, LinkedIn) are present
    And a copyright line is displayed at the bottom
    And a link to Component Dock is present
```

## Verification checklist

- [ ] All 8 sections render in the correct order
- [ ] Navbar is transparent/absolute over hero, centered logo, split nav links
- [ ] Hero has dark overlay, heading, and subtext
- [ ] What We Do: 3 image cards with overlay panels and "Learn More" links
- [ ] Our Features: dark navy bg, 2 alternating image+text rows with numbered captions
- [ ] Design for the Future: 2x2 grid with green checkmark icons
- [ ] Testimonial: centered blockquote with brand-colored quote icon
- [ ] Blog Posts: 4-column grid on light bg, each card with image/date/title/link
- [ ] Footer: dark bg, 3-column layout, newsletter form, social icons, Component Dock link
- [ ] Brand color #ff5533 used consistently for links, accents, and interactive elements
- [ ] Font is DM Sans (Google Fonts)
- [ ] No references to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Public/CNAME contains navara.free.componentdock.com
- [ ] homepage field set to https://navara.free.componentdock.com
