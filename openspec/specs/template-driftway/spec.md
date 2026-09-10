# Template: Driftway (Technology / Consulting Website)

## Purpose

Driftway is a full-page technology/consulting company website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Cruise" free template (source:
https://colorlib.com/wp/template/cruise/), built under a DIFFERENT name
(**Driftway**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 technology/consulting site with a white +
coral/orange (`#ff5533`) + dark gray (`#364d59`) palette, DM Sans font,
soft rounded buttons (Bootstrap default border-radius), and a long-scroll
single-page layout with 9 distinct sections: navbar, hero banner, "What We
Do" feature cards, "Our Features" split-image showcase, "Design for the
future" feature grid, testimonial quote, blog posts on light background,
and a dark footer. The navbar is transparent/absolute over the hero with
logo centered and nav links split left/right. The hero is a full-width
background image with centered headline ("We can make it together"). Feature
cards use image + title + description + "Learn More" link. The features
section uses large images with offset caption text. Testimonials use a
blockquote with quote icon. Blog cards sit on a `bg-light` background in a
4-column grid. The footer is dark black with About Us, features links,
newsletter form, and social icons.

**Preview URL — REACHABLE:** `https://preview.colorlib.com/theme/cruise/`
(verified 2026-09-11 by curl, full HTML returned).

**Source URL:** https://colorlib.com/wp/template/cruise/

## Design Tokens (extracted from preview CSS)

| Token               | Value                          | Usage                                        |
| ------------------- | ------------------------------ | -------------------------------------------- |
| primary / accent    | `#ff5533`                      | Coral/orange: links, buttons, active states, highlights |
| text-dark           | `#364d59`                      | Body text, headings, general content          |
| black               | `#000`                         | Footer background, selection, strong headings |
| white               | `#fff`                         | Page background, navbar text on hero, footer links |
| bg-light            | `#f8f9fa` (Bootstrap)          | Blog section background                      |
| text-muted          | `#6c757d` (Bootstrap)          | Subtitle / secondary text                     |
| font-family         | `'DM Sans', sans-serif`        | All text (weights: 300, 400, 700)            |
| font-weight-light   | `300`                          | Default body weight, headings                 |
| font-weight-bold    | `700`                          | Strong emphasis                               |
| border-radius       | `0.25rem` (Bootstrap default)  | Buttons, form inputs — soft rounded edges     |
| btn-primary-bg      | `#ff5533`                      | Primary button background                     |
| btn-primary-text    | `#fff`                         | Primary button text color                     |
| section-padding     | `5em 0` (md+), `2.5em 0` (sm) | Vertical rhythm between sections              |
| footer-padding      | `8em 0` (md+), `4em 0` (sm)   | Generous footer spacing                       |

## Section Structure (order from preview DOM)

1. **Header / Navbar** — absolute-positioned transparent navbar over hero; logo centered ("cruise"); nav links split: left side (Home, Technology, Careers), right side (About, Blog, Contact); mobile hamburger menu
2. **Hero Banner** — full-width background image with dark overlay; centered headline "We can make it together"; subtext "Lorem ipsum dolor sit amet consectetur adipisicing elit."
3. **What We Do** — centered section header ("What We Do" in primary color, title, description); 3-column feature cards (image + title + description + "Learn More" link)
4. **Our Features** — centered section header; 2 large split-image feature rows (9-column image + 3-column caption text with number prefix "01."/"02."); alternating image/text order
5. **Design for the Future** — centered section header; 2x2 feature grid (Creative Technology, World-class Quality, Deep Resources, World-class Quality) with title + description
6. **Testimonial** — dark overlay background; centered blockquote with quote icon, testimonial text, author name + title
7. **Blog / Latest News** — light gray (`bg-light`) background; 4-column blog card grid (image + date + title + "Read More" link)
8. **Footer** — dark black background; 2-column layout (left: About Us text + Features links; right: Newsletter subscribe form + social icons); bottom copyright bar

## Gherkin Requirements

### Feature: Navbar

  Scenario: Logo and navigation links are visible
    Given the user loads the page
    Then the navbar displays the logo "Driftway"
    And the nav links include "Home", "About", "Blog", "Contact"

  Scenario: Mobile hamburger menu toggles
    Given the user is on a mobile viewport
    When they click the hamburger menu button
    Then the mobile navigation menu slides in from the right

### Feature: Hero Banner

  Scenario: Hero displays headline and CTA
    Given the user views the page
    Then the hero section shows the headline "We can make it together"
    And a subtitle paragraph is displayed below the headline
    And the hero has a full-width background image with dark overlay

### Feature: What We Do (Feature Cards)

  Scenario: Three feature cards are displayed
    Given the user scrolls to the "What We Do" section
    Then 3 feature cards are visible in a row
    And each card contains an image, title, description, and "Learn More" link

  Scenario: Feature card layout
    Given the user views the feature cards
    Then each card displays an image at the top
    And a title below the image
    And a description paragraph below the title
    And a "Learn More" link styled in primary color

### Feature: Our Features (Split Image Showcase)

  Scenario: Two feature rows are displayed
    Given the user scrolls to the "Our Features" section
    Then 2 feature rows are visible
    And each row has a large image on one side and text content on the other
    And each row has a numbered caption (01., 02.)

  Scenario: Alternating layout
    Given the user views the feature rows
    Then the first row shows image on the left and text on the right
    And the second row shows text on the left and image on the right

### Feature: Design for the Future (Feature Grid)

  Scenario: Four feature items are displayed
    Given the user scrolls to the "Design for the future" section
    Then a 2x2 grid of feature items is visible
    And each item has a title and description

### Feature: Testimonial

  Scenario: Testimonial quote is displayed
    Given the user scrolls to the testimonial section
    Then a blockquote with a quote icon is visible
    And the testimonial text is displayed
    And the author name and title are shown below the quote

### Feature: Blog Posts

  Scenario: Four blog cards are displayed
    Given the user scrolls to the blog section
    Then 4 blog post cards are visible in a row
    And each card contains an image, date, title, and "Read More" link

  Scenario: Blog section background
    Given the user views the blog section
    Then the section has a light gray background

### Feature: Footer

  Scenario: Footer content is visible
    Given the user scrolls to the footer
    Then the footer displays "About Us" text and "Features" link list
    And a newsletter subscribe form with email input and "Subscribe" button
    And social media icon links (Facebook, Twitter, Instagram, LinkedIn)

  Scenario: Footer branding
    Given the user views the footer
    Then the copyright line links to "https://www.componentdock.com/" (branded "Component Dock")

## Verification Checklist

- [ ] All 8 sections present in correct order
- [ ] Navbar: logo centered, nav links split left/right, mobile hamburger works
- [ ] Hero: background image with overlay, centered headline + subtitle
- [ ] What We Do: 3 feature cards with image + title + description + "Learn More"
- [ ] Our Features: 2 split-image rows with alternating layout, numbered captions
- [ ] Design for the Future: 2x2 feature grid
- [ ] Testimonial: blockquote with icon, text, author name + title
- [ ] Blog: 4-column card grid on light background
- [ ] Footer: About Us + Features links + newsletter form + social icons
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (comments, text, links)
- [ ] Design tokens: DM Sans font, #ff5533 primary, #364d59 text, #000 footer bg
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] Responsive: mobile hamburger menu, stacked layout on small screens
- [ ] Accessibility: semantic HTML, aria-labels on interactive elements
