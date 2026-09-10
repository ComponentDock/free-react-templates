# Template: Celera (Technology/Consulting Landing Page)

## Purpose

Recreation of ColorLib's **CellOn** template — a technology/consulting single-page
landing template with a clean, minimalist design using a green accent palette and
Poppins typography.

- **Source:** https://colorlib.com/wp/template/cellon/
- **Preview:** https://preview.colorlib.com/theme/cellon/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Technology / Consulting / Landing Page

## Design Tokens (extracted from preview CSS)

| Token                  | Value                                  | Notes                                                      |
| ---------------------- | -------------------------------------- | ---------------------------------------------------------- |
| `brand`                | `#6cbb23`                              | Primary green — buttons, accents, overlay tint, highlights |
| `brand-light`          | `#f0f8e9`                              | Feature icon background                                    |
| `brand-border`         | `#a6d477`                              | Contact form input borders                                 |
| `body-text`            | `#777`                                 | Body copy color                                            |
| `heading`              | `#222`                                 | Headings and strong text                                   |
| `bg-page`              | `#f6f6fc`                              | Page background (outside box)                              |
| `bg-white`             | `#fff`                                 | Section backgrounds, banner, about, faq, footer            |
| `bg-light`             | `#f9f9ff`                              | Button default bg, blockquote, table bg                    |
| `overlay-green`        | `rgba(108,187,35,0.85)`                | Video, feature, contact section overlays                   |
| `font-primary`         | `"Poppins", sans-serif`                | All text                                                   |
| `btn-radius`           | `20px`                                 | Pill-shaped / circle buttons (`genric-btn.circle`)         |
| `btn-default-radius`   | `0`                                    | Non-circle buttons are square                              |
| `card-shadow`          | `box-shadow: 0 0 50px rgba(0,0,0,0.2)` | Outer body wrap shadow                                     |
| `font-weight-light`    | `100`                                  | Hero headline, about heading, contact heading              |
| `font-weight-regular`  | `300`                                  | Body text                                                  |
| `font-weight-medium`   | `500`                                  | Nav links, buttons, feature headings                       |
| `font-weight-semibold` | `600`                                  | Highlight spans, FAQ headings                              |

## Section Structure (from preview DOM)

1. **Header** — Logo (top-left), hamburger menu (top-right). Fixed/absolute
   positioning, transparent background.
2. **Banner / Hero** — Fullscreen split: cactus image left, headline right.
   "Behind Every Success There is a Cactus" with green-highlighted word.
   Pill-shaped "Get Started" CTA button.
3. **Video Area** — Background image with green overlay, centered play button,
   heading "Being unique is the preference".
4. **About** — White background. Text left ("Brief Information About CellOn"),
   image right. Paragraph + "View More" outlined button.
5. **Features** — Green overlay background. 3×2 grid of feature cards (white
   cards with icon → title → description). Icons from Linearicons.
6. **Stats / FAQ** — White background. Left column: 4 counter stats (Projects
   Completed, New Projects, Tickets, Coffee). Right column: 3 FAQ items with
   heading + answer text.
7. **Contact** — Green overlay background. Centered "Send Us Message" heading.
   Two-column name/email inputs, full-width textarea, "Send Message" button.
8. **Footer** — White background. 4 columns: Top Product (links), Navigation
   (links), Compare (links), Quick About (text + phone/email + social icons).
   Bottom bar with copyright + Colorlib attribution → replaced with Component Dock.

## Gherkin Scenarios

### Header

```gherkin
Feature: Header
  Scenario: Logo is displayed
    Given the page loads
    Then the header shows a logo image

  Scenario: Hamburger menu is visible on desktop
    Given the page loads on desktop viewport
    Then a hamburger menu icon is visible in the header

  Scenario: Navigation links toggle on menu click
    Given the page loads on mobile viewport
    When the user clicks the hamburger menu
    Then the navigation links become visible
```

### Banner / Hero

```gherkin
Feature: Banner / Hero
  Scenario: Hero headline is displayed
    Given the page loads
    Then the hero section shows a headline with the word "Success" styled differently

  Scenario: Hero CTA button is clickable
    Given the page loads
    Then a "Get Started" button is visible
    And the button has a pill-shaped border radius

  Scenario: Hero image is displayed
    Given the page loads
    Then the hero section shows a decorative image on the left side
```

### Video Area

```gherkin
Feature: Video Area
  Scenario: Video section heading is visible
    Given the page loads
    Then the video area shows the heading "Being unique is the preference"

  Scenario: Play button is displayed
    Given the page loads
    Then a play button is visible in the video area

  Scenario: Video area has green overlay
    Given the page loads
    Then the video area has a green-tinted overlay on its background image
```

### About

```gherkin
Feature: About
  Scenario: About heading is visible
    Given the page loads
    Then the about section shows a heading "Brief Information About"

  Scenario: About has descriptive text
    Given the page loads
    Then the about section contains paragraph text

  Scenario: About has an image
    Given the page loads
    Then the about section shows an image on the right side

  Scenario: About has a CTA button
    Given the page loads
    Then a "View More" button with a border style is visible in the about section
```

### Features

```gherkin
Feature: Features
  Scenario: Six feature cards are displayed
    Given the page loads
    Then 6 feature cards are visible in the features section

  Scenario: Each feature card has icon, title, and description
    Given the page loads
    Then each feature card shows an icon, a title, and a description paragraph

  Scenario: Features section has green overlay background
    Given the page loads
    Then the features section has a green-tinted overlay on its background image
```

### Stats / FAQ

```gherkin
Feature: Stats / FAQ
  Scenario: Four stat counters are displayed
    Given the page loads
    Then 4 stat counters are visible (Projects Completed, New Projects, Tickets Submitted, Cup of Coffee)

  Scenario: Each stat has a number and label
    Given the page loads
    Then each stat counter shows a large number and a descriptive label

  Scenario: Three FAQ items are displayed
    Given the page loads
    Then 3 FAQ items are visible with heading and answer text
```

### Contact

```gherkin
Feature: Contact Form
  Scenario: Contact heading is visible
    Given the page loads
    Then the contact section shows "Send Us Message" as the heading

  Scenario: Contact form has name and email fields
    Given the page loads
    Then a "name" input field and an "email" input field are visible

  Scenario: Contact form has a message textarea
    Given the page loads
    Then a message textarea is visible in the contact form

  Scenario: Contact form has a submit button
    Given the page loads
    Then a "Send Message" button is visible in the contact form

  Scenario: Contact section has green overlay background
    Given the page loads
    Then the contact section has a green-tinted overlay on its background image
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer has four columns
    Given the page loads
    Then the footer shows 4 link columns: "Top Product", "Navigation", "Compare", "Quick About"

  Scenario: Footer has social icons
    Given the page loads
    Then the footer shows social media icon links

  Scenario: Footer has Component Dock attribution
    Given the page loads
    Then the footer bottom bar shows a link to "https://www.componentdock.com/" branded as "Component Dock"
```

## Verification Checklist

- [ ] Header with logo + hamburger menu renders
- [ ] Hero section: split layout (image left, text right), green-highlighted word, pill CTA
- [ ] Video area: background image + green overlay + play button + heading
- [ ] About section: text left, image right, outlined CTA button
- [ ] Features: 3×2 grid of white cards with icon, title, description on green overlay background
- [ ] Stats/FAQ: left counter stats, right FAQ items
- [ ] Contact: green overlay, centered heading, form with name/email/message + submit
- [ ] Footer: 4-column layout, social icons, Component Dock link
- [ ] Font: Poppins via Google Fonts
- [ ] Brand color #6cbb23 applied consistently
- [ ] No references to ColorLib in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Build succeeds, no TypeScript errors
