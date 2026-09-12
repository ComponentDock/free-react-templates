# Template: Paladin (Gaming Blog / Community)

## Purpose

Recreation of ColorLib "Game Warrior" template.
- Source slug: `game-warrior`
- ColorLib page: https://colorlib.com/wp/template/game-warrior/
- Preview URL: https://preview.colorlib.com/theme/gamewarrior/
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Font family | `"Roboto", sans-serif` | Weights 400, 500, 700 |
| Brand primary | `#ffb320` (amber/golden) | Buttons, accent highlights, "new" category tag |
| Accent red | `#ff205f` | Score badge "pink" variant |
| Purple | `#694eae` | "strategy" category tag, score badge "purple" |
| Green | `#4eae60` | "racing" category tag, score badge "green" |
| Dark surface | `#131313` | Header bg, body bg, footer bg |
| Dark alt | `#252525` / `#1f2225` | Section alt backgrounds |
| Light bg | `#eff2f5` / `#eef2f6` | Tournaments section, light sections |
| Light muted | `#d6dee7` / `#dbe2ec` | Text muted areas |
| Button radius | `50px` (pill shape) | `.site-btn` |
| Button padding | `16px 30px` | Min-width 153px |
| Score badges | `border-radius: 50%` (circle) | Colored circles overlaying review covers |

## Sections (in order, 1:1 with original)

1. **Header** — Site logo (left), user panel "Login / Register" (right), nav links: Home, Games, Blog, Forums, Contact. Dark background (#131313). Responsive hamburger menu.
2. **Hero** — Full-width carousel/slider with background images. Centered text overlay: heading "The Best Games Out There" (with "Games" in brand color #ffb320), subtext paragraph, "Read More" pill button (golden #ffb320).
3. **Latest News Ticker** — Horizontal scrolling news ticker bar. Left title "Latest News", scrolling items with colored category tags: "new" (amber), "strategy" (purple), "racing" (green).
4. **Feature Section** — 4-column grid of game/article cards. Each card: background image overlay, category tag badge, title, excerpt text, comment count link. White text on dark image overlays.
5. **Recent Games** — 3-column grid on dark textured background. Section title "Recent Games" with "new" tag. Each card: thumbnail image with category tag, title, excerpt, comment count, star icon, heart icon.
6. **Tournaments** — 2-column grid on light background (#eef2f6). "Premium Tournament" badge. Each tournament: thumbnail, game title, details list (starts, ends, participants, author), prizes info.
7. **Reviews** — 4-column grid on dark background. "Recent Reviews" section title with "new" tag. Each review: cover image with colored score badge circle (yellow 9.3, purple 9.5, green 9.1, pink 9.7), title, short description.
8. **Footer Top** — 3-column layout: logo + description, Latest Posts (3 blog items with thumbnails, dates, author), Top Comments (4 comment items with author avatars, dates). Dark background.
9. **Footer** — Centered nav links (same as header), copyright line. Dark background.

## Gherkin Requirements

### Header
```gherkin
Feature: Header navigation

  Scenario: Header displays logo and navigation
    Given I visit the Paladin homepage
    Then I see the site logo on the left
    And I see a user panel with "Login" and "Register" links
    And I see navigation links: Home, Games, Blog, Forums, Contact

  Scenario: Header is responsive
    Given I visit the Paladin homepage on a mobile viewport
    Then I see a hamburger menu icon
    And the nav menu is hidden by default
    When I tap the hamburger icon
    Then the nav menu slides open
```

### Hero
```gherkin
Feature: Hero section

  Scenario: Hero displays welcome message with CTA
    Given I visit the Paladin homepage
    Then I see a hero section with background imagery
    And I see heading text "The Best Games Out There"
    And the word "Games" is highlighted in brand color
    And I see a descriptive paragraph
    And I see a "Read More" button with pill shape

  Scenario: Hero button is styled correctly
    Given I see the hero "Read More" button
    Then it has a golden amber background (#ffb320)
    And it has pill-shaped border-radius
    And it has dark text color
```

### Latest News Ticker
```gherkin
Feature: News ticker

  Scenario: Ticker displays latest news
    Given I visit the Paladin homepage
    Then I see a "Latest News" label
    And I see scrolling news items with category tags
    And category tags are color-coded: new (amber), strategy (purple), racing (green)

  Scenario: Ticker scrolls horizontally
    Given I see the news ticker
    Then the items scroll or cycle through automatically
```

### Feature Section
```gherkin
Feature: Feature articles grid

  Scenario: Feature section shows 4 game cards
    Given I visit the Paladin homepage
    Then I see a 4-column grid of feature cards
    And each card has a background image
    And each card shows a category badge (new/strategy/racing)
    And each card shows a title, excerpt, and comment count

  Scenario: Feature cards are responsive
    Given I view the feature section on tablet
    Then the grid shows 2 columns
    Given I view the feature section on mobile
    Then the grid shows 1 column
```

### Recent Games
```gherkin
Feature: Recent Games section

  Scenario: Recent Games shows 3 game items
    Given I visit the Paladin homepage
    Then I see a "Recent Games" heading with "new" tag
    And I see 3 game cards on a dark background
    And each card has a thumbnail, title, excerpt, comment count
    And each card has star and heart icons

  Scenario: Recent Games background
    Given I see the Recent Games section
    Then it has a dark textured background image
```

### Tournaments
```gherkin
Feature: Tournaments section

  Scenario: Tournaments shows 2 tournament cards
    Given I visit the Paladin homepage
    Then I see a "Tournaments" heading
    And I see 2 tournament cards side by side
    And each card has a "Premium Tournament" badge
    And each card shows a game thumbnail, title, start/end dates, participants, author, and prizes

  Scenario: Tournaments section background
    Given I see the Tournaments section
    Then it has a light background (#eef2f6 area)
```

### Reviews
```gherkin
Feature: Recent Reviews section

  Scenario: Reviews shows 4 review items
    Given I visit the Paladin homepage
    Then I see a "Recent Reviews" heading with "new" tag
    And I see 4 review cards on a dark background
    And each card has a cover image with a colored score badge circle
    And score badges are colored: yellow, purple, green, pink
    And each card shows a title and short description

  Scenario: Score badges are circular
    Given I see a review score badge
    Then it is a circle overlay on the cover image
    And it displays a numeric score (e.g. 9.3)
```

### Footer Top
```gherkin
Feature: Footer top section

  Scenario: Footer top shows 3 columns
    Given I visit the Paladin homepage
    Then I see a footer top section with 3 columns
    And column 1 has a logo and description
    And column 2 shows Latest Posts (3 items with thumbnails, dates, authors)
    And column 3 shows Top Comments (4 items with avatars, names, dates)
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer displays navigation and copyright
    Given I visit the Paladin homepage
    Then I see a footer with navigation links: Home, Games, Blog, Forums, Contact
    And I see a copyright line
    And the footer links to https://www.componentdock.com/ as "Component Dock"
```

## Verification checklist

- [ ] Header renders logo, user panel, and nav links
- [ ] Hero carousel displays with CTA button
- [ ] News ticker scrolls with color-coded category tags
- [ ] Feature section: 4 cards, responsive grid (4→2→1 columns)
- [ ] Recent Games: 3 cards with icons on dark background
- [ ] Tournaments: 2 cards with premium badge and details
- [ ] Reviews: 4 cards with colored score badges on dark bg
- [ ] Footer top: 3 columns (logo, latest posts, top comments)
- [ ] Footer: nav links + Component Dock attribution
- [ ] All design tokens match: Roboto font, #ffb320 brand, pill buttons
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] `npm run verify:app paladin` passes
