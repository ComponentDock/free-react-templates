# Template: Boardroom (Creative Agency / Small Company)

## Purpose

Recreation of ColorLib "Bbs" — a small company / creative agency website template.

- **Source:** https://colorlib.com/wp/template/bbs/
- **Preview:** https://preview.colorlib.com/theme/bbs/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bbs-free-small-company-website-template.jpg
- **New name:** `boardroom` (apps/boardroom, @free-react-templates/boardroom)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

### Colors
| Token            | Value     | Usage                                          |
| ---------------- | --------- | ---------------------------------------------- |
| primary          | `#f58e9a` | Buttons, links, hover states (pink)            |
| primary-hover    | `#222222` | Button text on hover                           |
| heading          | `#222222` | All h1–h6 headings                             |
| body-text        | `#777777` | Paragraph / body copy                          |
| video-overlay    | `#7034db` | Video section radial gradient center           |
| video-overlay-end| `#7539dd` | Video section radial gradient edge             |
| story-bg         | `#7034db` | Story section background (solid purple)        |
| section-alt      | `#f9f9ff` | About area + Subscription area backgrounds     |
| footer-bg        | `#333333` | Footer background                              |
| white            | `#ffffff` | Featured area, Blog area, button text          |
| hero-banner-bg   | image     | Banner area uses `banner.png` (purple geometric shapes on light) |

### Typography
| Element   | Family     | Weights        | Size    |
| --------- | ---------- | -------------- | ------- |
| Body      | Poppins    | 300            | 14px    |
| Headings  | Poppins    | 500–600        | 18–36px |
| Hero h1   | Poppins    | 900 (implicit) | 36px+   |

### Buttons
- Class: `.primary-btn`
- Background: `#f58e9a` (pink)
- Text: `#ffffff`
- Border-radius: `20px` (pill)
- Padding: `0 30px`, line-height `40px`
- Hover: background fills darker, text becomes `#222222`
- Has pseudo-element `:after` for hover fill effect

### Section backgrounds
| Section          | Background                        |
| ---------------- | --------------------------------- |
| Header           | Transparent (over banner image)   |
| Banner/Hero      | `banner.png` (contain, right)     |
| Featured area    | `#ffffff`                         |
| About area       | `#f9f9ff`                         |
| Video area       | Background image + purple gradient overlay |
| Blog area        | `#ffffff`                         |
| Story area       | `#7034db` solid purple            |
| Subscription     | `#f9f9ff`                         |
| Footer           | `#333333`                         |

## Section structure (from live preview DOM)

1. **Header/Navbar** — logo left, nav links right (Home / Generic / Elements), hamburger menu icon
2. **Banner (Hero)** — centered headline "we're Creative" (uppercase, large), "Get Started" pill CTA button; background image
3. **Featured area** — 2×2 grid of feature cards (icon left, title + description right):
   - Unlimited Colors
   - Smart Security
   - Endless Support
   - Smart Security (second instance — keep as placeholder)
4. **About area** — 3-column layout: title "About Our Company" left, image center, tabbed content right (History / Mission & Vision tabs)
5. **Video area** — purple gradient overlay, centered headline "New Features that open the door of future", play button, description paragraph
6. **Blog area** — 3-column grid of blog cards (image thumb top, title + description centered below)
   - "Ultimate pet lover"
   - "Upcoming role model"
   - "Colors of Life"
7. **Story area** — full-width purple background, white text, headline "Crafting Our Experiences", paragraph
8. **Subscription area** — centered headline "Subscribe Newsletter", email input + "Get Started" pill button
9. **Footer** — dark background, nav links (Home / Generic / Elements), social icons (Facebook, Twitter, Dribbble, Behance), copyright

## Gherkin requirements

```gherkin
Feature: Boardroom Template

  Background:
    Given the Boardroom template is loaded

  Scenario: Header displays logo and navigation
    Then a logo is visible in the top-left
    And navigation links are visible: Home, Generic, Elements
    And a hamburger menu icon is present

  Scenario: Hero banner renders correctly
    Then the headline "we're Creative" is centered and uppercase
    And a "Get Started" pill button is below the headline
    And the banner area has a background image

  Scenario: Featured section shows four feature cards
    Then 4 feature cards are displayed in a 2-column grid
    And each card has an icon, title, and description paragraph

  Scenario: About section has tabs
    Then the title "About Our Company" is visible
    And an image is displayed beside the title
    And two tabs are available: "History" and "Mission & Vision"
    When the "Mission & Vision" tab is clicked
    Then the Mission & Vision content is displayed
    When the "History" tab is clicked
    Then the History content is displayed

  Scenario: Video section displays with purple overlay
    Then the video area has a purple gradient overlay
    And a heading "New Features that open the door of future" is centered
    And a play button is visible

  Scenario: Blog section shows three blog cards
    Then 3 blog cards are displayed in a 3-column grid
    And each card has an image, title, and short description

  Scenario: Story section has purple background
    Then the story area has a solid purple background
    And white text reads "Crafting Our Experiences"
    And a descriptive paragraph is below the heading

  Scenario: Newsletter subscription form
    Then a "Subscribe Newsletter" heading is visible
    And an email input field with placeholder "Email address" is present
    And a "Get Started" pill button submits the form

  Scenario: Footer links and social icons
    Then the footer has navigation links
    And social media icons are displayed (Facebook, Twitter, Dribbble, Behance)
    And a copyright line is present
    And the footer links to https://www.componentdock.com/

  Scenario: Responsive layout
    When the viewport is below 768px
    Then the feature grid stacks to a single column
    And the blog grid stacks to a single column
    And the hamburger menu is functional
```

## Verification checklist

- [ ] Header: logo + nav links + hamburger menu
- [ ] Hero: centered uppercase headline + pill CTA + background image
- [ ] Featured: 2×2 grid, 4 cards with icon + title + description
- [ ] About: title + image + 2-tab content (History / Mission & Vision)
- [ ] Video: purple gradient overlay + heading + play button + text
- [ ] Blog: 3-column cards with image thumb + title + description
- [ ] Story: full-width purple bg + white heading + paragraph
- [ ] Newsletter: heading + email input + pill submit button
- [ ] Footer: nav links + social icons + copyright + ComponentDock link
- [ ] Tailwind theme tokens match extracted colors
- [ ] All placeholder images use picsum.photos/seed/boardroom-N/W/H
- [ ] Google Fonts: Poppins (300, 500, 600, 900)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app source code
- [ ] `public/CNAME` = boardroom.free.componentdock.com
- [ ] `homepage` = https://boardroom.free.componentdock.com
- [ ] `npm run spec:validate` passes (when implemented)
