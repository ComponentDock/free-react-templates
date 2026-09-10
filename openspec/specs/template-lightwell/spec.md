# Template: Lightwell (Consulting / Business)

## Purpose

Recreation of ColorLib **Cellon** — a light consulting company template.

- **Source slug:** `cellon`
- **Source URL:** https://colorlib.com/wp/template/cellon/
- **Preview URL:** https://preview.colorlib.com/theme/cellon/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview CSS (`main.css`) on 2026-09-11.

| Token               | Value                      | Notes                                        |
| ------------------- | -------------------------- | -------------------------------------------- |
| Brand color         | `#6cbb23`                  | Green — buttons, accents, overlays, counters |
| Brand light         | `#f0f8e9`                  | Feature icon background                      |
| Brand medium        | `#a6d477`                  | Contact form input borders                   |
| Body background     | `#f6f6fc`                  | Light lavender-gray page background          |
| Card background     | `#ffffff`                  | Feature cards, banner, about, FAQ, footer    |
| Body text           | `#777777`                  | Paragraph text                               |
| Heading text        | `#222222`                  | All headings                                 |
| Overlay (green)     | `rgba(108,187,35,0.85)`    | Video, feature, and contact section overlays |
| Selection color     | `#6cbb23` on `#ffffff`     | ::selection                                  |
| Font family         | `Poppins, sans-serif`      | Weights 100, 300, 500, 600                   |
| Button radius       | `20px` (circle)            | `.genric-btn.circle`                         |
| Input radius        | `0` (square)               | `.common-input` no border-radius             |
| Card shadow         | none                       | Cards are flat on white bg                   |
| Body wrapper shadow | `0 0 50px rgba(0,0,0,0.2)` | `.oz-body-wrap` — the entire page card       |

## Section Order (from live DOM)

1. **Navbar** — Logo + nav links (Home, Generic, Elements) + hamburger menu
2. **Banner (Hero)** — Split: illustration left, headline right ("Behind Every Success There is a Cactus"), subtitle, CTA button
3. **Video CTA** — Full-width with green overlay, play button, two-line heading
4. **About** — Split: text left (heading + paragraph + border CTA button), image right
5. **Features** — 3-column grid, 7 feature cards (icon + heading + text) on green overlay background
6. **FAQ + Stats** — Left column: 4 counter stats; Right column: 3 accordion FAQ items
7. **Contact** — Green overlay background, heading "Send Us Message", form (name, email, message, submit button)
8. **Footer** — 4-column layout: Top Product links, Navigation links, Compare links, Quick About (text + phone + email + social icons), copyright bar

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navbar
  Scenario: Renders logo and navigation links
    Given the page loads
    Then a logo image is visible
    And links "Home", "Generic", "Elements" are displayed

  Scenario: Mobile hamburger menu
    Given the viewport is below 768px
    Then the nav links are hidden
    And a hamburger menu icon is visible
```

### Banner (Hero)

```gherkin
Feature: Banner
  Scenario: Displays hero headline and CTA
    Given the page loads
    Then a hero illustration image is visible
    And heading "Behind Every Success There is a Cactus" is displayed
    And a "Get Started" button with arrow icon is visible

  Scenario: CTA button style
    Given the page loads
    Then the "Get Started" button has a green background and white text
    And the button has fully rounded (pill) corners
```

### Video CTA

```gherkin
Feature: Video CTA
  Scenario: Displays video section with play button
    Given the page loads
    Then a play button image is visible
    And heading "Being unique is the preference" is displayed
    And subtitle "Youtube video will appear in popover" is shown
    And the section has a green semi-transparent overlay
```

### About

```gherkin
Feature: About
  Scenario: Displays about content
    Given the page loads
    Then heading "Brief Information About" is visible
    And a paragraph describing the company is displayed
    And a "View More" button with green border is visible
    And an about illustration image is shown

  Scenario: About layout
    Given the page loads
    Then the text content is on the left
    And the image is on the right
```

### Features

```gherkin
Feature: Features
  Scenario: Displays feature cards
    Given the page loads
    Then 7 feature cards are displayed
    And each card has an icon, heading, and paragraph text
    And the section has a green semi-transparent overlay background

  Scenario: Feature card hover
    Given the page loads
    When a user hovers over a feature card icon
    Then the icon background changes to green
```

### FAQ + Stats

```gherkin
Feature: FAQ and Stats
  Scenario: Displays counter stats
    Given the page loads
    Then 4 statistics are shown with large green numbers
    And labels include "Projects Completed", "New Projects", "Tickets Submitted", "Cup of Coffee"

  Scenario: Displays FAQ items
    Given the page loads
    Then 3 FAQ questions are displayed
    And each FAQ has a question heading and answer paragraph
```

### Contact

```gherkin
Feature: Contact
  Scenario: Displays contact form
    Given the page loads
    Then heading "Send Us Message" is visible
    And the section has a green semi-transparent overlay background
    And a name input field is present
    And an email input field is present
    And a message textarea is present
    And a "Send Message" submit button is visible

  Scenario: Form input styling
    Given the page loads
    Then form inputs have green borders (#a6d477)
    And input text color is white
    And input placeholder text is white
```

### Footer

```gherkin
Feature: Footer
  Scenario: Displays footer columns
    Given the page loads
    Then 4 footer columns are displayed
    And column headings are "Top Product", "Navigation", "Compare", "Quick About"
    And each column contains navigation links

  Scenario: Footer social and copyright
    Given the page loads
    Then social icons for Facebook, Twitter, Dribbble, Behance are visible
    And a copyright notice is displayed at the bottom
```

## Verification Checklist

- [ ] Navbar with logo, nav links, hamburger for mobile
- [ ] Hero banner: split layout with illustration + headline + CTA
- [ ] Video CTA section with green overlay + play button
- [ ] About section: split layout with text + image
- [ ] Features section: 7 cards in grid with green overlay
- [ ] FAQ + Stats: counters left, accordion right
- [ ] Contact form: green overlay, name/email/message/submit
- [ ] Footer: 4 columns + social icons + copyright
- [ ] Brand color #6cbb23 used for buttons, overlays, counters, accents
- [ ] Font: Poppins (Google Fonts)
- [ ] Button style: pill/rounded (border-radius 20px), green primary
- [ ] Body background: #f6f6fc
- [ ] Responsive: mobile hamburger, stacked columns
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
