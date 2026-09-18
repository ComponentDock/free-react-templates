# Template: DeskHub (Coworking / Shared Workspace Landing)

## Purpose

Recreation of [ColorLib Sharespace](https://colorlib.com/wp/template/sharespace/)
as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **Preview URL**: https://preview.colorlib.com/theme/sharespace/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/sharespace-free-template.jpg
- **Design category**: Coworking / shared workspace landing page
- **Original slug**: `sharespace`

## Design Tokens

### Colors

| Token              | Value     | Usage                                      |
| ------------------ | --------- | ------------------------------------------ |
| `brand-primary`    | `#c6a16e` | Gold/tan — primary CTA buttons, submenu bg |
| `text-dark`        | `#222222` | Body text, headings                        |
| `text-light`       | `#ffffff` | Text on dark backgrounds                   |
| `bg-page`          | `#ffffff` | Page default                               |
| `bg-testimonial`   | `#fbf9ff` | Testimonials section (`.theme-bg1`)        |
| `bg-video`         | `#f9f9ff` | Video/features section (`.section-bg2`)    |
| `bg-blog`          | `#f7f7f7` | Blog section                               |
| `bg-footer`        | `#222222` | Footer background                          |
| `accent-blue`      | `#6382e6` | Progress bars, accent                      |
| `accent-purple`    | `#a367e7` | Progress bars, accent                      |
| `accent-pink`      | `#e66686` | Progress bars, accent                      |
| `accent-orange`    | `#f09359` | Progress bars, accent                      |
| `accent-teal`      | `#4cd3e3` | Accent                                     |

### Typography

- **Body / headings**: `"Josefin Sans", sans-serif` — geometric sans-serif, weight 300–700
- **Decorative / cursive accent**: `"Great Vibes", cursive` — used sparingly for italic flourish text

### Buttons

- **Primary `.btn`**: bg `#c6a16e`, color `#fff`, padding 27px 44px, border-radius 5px, uppercase, letter-spacing 1px, font-weight 500, font-size 14px
- **Outline `.browse-btn`**: outline style with hover fill
- **`.location-btn`**: secondary outline button on space cards
- **`.subscribe-btn`**: accent button for newsletter section

### Border Radii

- Buttons: **5px** (primary), **20px** (circle variant), **12px** (some cards)
- Most containers: **0** (sharp corners throughout)
- Images: **50%** only for circular profile avatars

## Section Structure

1. **Navbar** — Sticky header with logo ("Shared Workspace" → "DeskHub"), nav links (Home, Spaces, About, Blog, Contact)
2. **Hero Slider** — Full-width image slider (2 slides), each with heading "Amazing workspace you will love", subtext "Discover our spaces that defines a new dimension of luxury.", CTA button "Explore Our Spaces", star rating badge (4.8, 500+ reviews)
3. **About Us** — Two-column: left text ("Premium quality spaces for agency and personal") + "Learn More" link; right side has an image with a rating overlay
4. **Spaces / Gallery** — "Spaces that you'd love" heading, intro text, 4 space cards (image + title + price "$500") + "Explore More Spaces" CTA
5. **Features** — "Make the customer the hero of your story" heading, intro text, 4 feature items with icons: Money saver, A locker and key, Active Listening, Space for events
6. **Video** — Full-width dark/overlay section with centered play button (popup video)
7. **Blog** — "Company Insights" heading, 3 blog cards (image + category tag + title + date + author + excerpt)
8. **Newsletter / Subscribe** — "Subscribe our newsletter to get updates" + email input + subscribe button
9. **Footer** — Dark bg (`#222`), logo + nav links + copyright, "Made with Component Dock"

## Gherkin Requirements

```gherkin
Feature: DeskHub — Coworking landing page
  As a coworking space visitor
  I want a professional landing page
  So that I can explore spaces and learn about the service

  Background:
    Given the page is loaded at "/" 

  Scenario: Navbar renders correctly
    Then the navbar is visible and sticky on scroll
    And it contains the "DeskHub" logo
    And navigation links: Home, Spaces, About, Blog, Contact are visible
    And clicking "Spaces" scrolls to the spaces section

  Scenario: Hero slider displays
    Then a full-width image slider is visible
    And the heading "Amazing workspace you will love" is displayed
    And the subtext mentions discovering spaces
    And an "Explore Our Spaces" CTA button is visible
    And a star rating badge shows "4.8"
    And the slider transitions between slides automatically

  Scenario: About section renders
    Then the heading "Premium quality spaces for agency and personal" is displayed
    And a description paragraph is present
    And a "Learn More" link is visible
    And an image is displayed on the right side

  Scenario: Spaces gallery renders 4 cards
    Then 4 space cards are displayed
    And each card has an image, title, and price
    And the price on each card is "$500"
    And an "Explore More Spaces" button is below the cards

  Scenario: Features section shows 4 items
    Then the heading "Make the customer the hero of your story" is displayed
    And 4 feature items are displayed
    And feature titles are: "Money saver", "A locker and key", "Active Listening", "Space for events"
    And each feature has an icon and description text

  Scenario: Video section plays on click
    Then a video section with play button is visible
    And clicking the play button opens a video modal/popup

  Scenario: Blog section shows 3 posts
    Then the heading "Company Insights" is displayed
    And 3 blog post cards are rendered
    And each card shows an image, title, date, and excerpt

  Scenario: Newsletter subscription works
    Then the heading "Subscribe our newsletter to get updates" is displayed
    And an email input field is present
    And a "Subscribe" button is present
    And submitting with a valid email shows confirmation
    And submitting with an invalid email shows an error

  Scenario: Footer renders correctly
    Then the footer has a dark background
    And it contains navigation links
    And the copyright notice is displayed
    And a "Made with Component Dock" link to componentdock.com is present
```

## Verification Checklist

- [ ] Navbar: sticky, correct links, mobile hamburger menu
- [ ] Hero: slider auto-transitions, CTA button styled, rating badge renders
- [ ] About: two-column layout, responsive stacking on mobile
- [ ] Spaces: 4 cards in a grid, images from picsum, prices shown
- [ ] Features: 4 icon items, responsive grid
- [ ] Video: play button centered, opens modal
- [ ] Blog: 3 cards, images from picsum
- [ ] Newsletter: form validation, email input, subscribe button
- [ ] Footer: dark bg, Component Dock link, responsive
- [ ] All sections use brand tokens (gold #c6a16e, Josefin Sans)
- [ ] 100% test coverage (vitest + testing library)
- [ ] No ColorLib references in app code
- [ ] `packages/ui` components reused where applicable (cn, Button, Card)
