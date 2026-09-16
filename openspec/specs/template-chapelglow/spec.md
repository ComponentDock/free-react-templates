# Template: ChapelGlow (Church & Religious)

## Purpose

Recreation of the ColorLib **Advent** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/advent/
- **Preview:** https://preview.colorlib.com/theme/advent/
- **Category:** Church & Religious
- **New name:** `chapelglow` (apps/chapelglow, @free-react-templates/chapelglow)
- **Deploy URL:** https://chapelglow.free.componentdock.com

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and inline styles:

| Token | Value | Usage |
|-------|-------|-------|
| Heading font | `"Playfair Display", serif` | h1, h2, h3 (display/serif headings) |
| Body font | `"Open Sans", sans-serif` | body, nav, paragraphs, buttons |
| Body bg | `#262626` | Dark charcoal background |
| Body text | `#b3b3b3` | Muted gray text on dark bg |
| White text | `#fff` | Headings, nav links, accent text |
| Accent gold | `#ffc107` / `#ffce3a` | Primary buttons, highlights, hover states |
| Dark section bg | `#262626` | Sections, footer |
| Button radius | `0` (sharp/square) | All buttons |
| Outline white border | `#fff` | btn-outline-white |
| Link hover | `#ffc107` | Anchor hover color |
| Overlay | `rgba(0,0,0,0.2)` | Slider overlays |

### Color palette summary

- **Dark charcoal:** `#262626` — main background, footer, sections
- **Gold accent:** `#ffc107` — primary buttons, highlights, progress bars, loader spinner
- **White:** `#fff` — text on dark, outline buttons, social icons
- **Muted gray:** `#b3b3b3` — body text on dark background
- **Sharp buttons:** `border-radius: 0` — square/flat button style throughout

## Section Structure (in page order)

1. **Navbar** — dark background, brand "ChapelGlow", links: Home, Who We Are, Ministries (dropdown: Children, Students, Care Ministry, Missions, Request Prayer), Events, Contact. Hamburger toggle on mobile.
2. **Hero Slider** — owl-carousel with 2 slides, each: full-width background image, centered headline + description + "Watch Now" / "Explore Now" white outline button.
3. **Upcoming Events Highlight** — 2-column row: left = section heading "Upcoming Events", event title, meta (time, location, speaker); right = countdown timer.
4. **Worship Time** — split layout: left = image, right = worship schedule list (Morning, Afternoon, Evening with times).
5. **Recent Sermons** — centered heading "Listen Our Sermons", 3 sermon cards: title, author/date meta, audio player.
6. **Events & Ministries** — centered heading, 3 ministry cards: thumbnail image, title, date/category meta, description.
7. **Footer** — dark background, 3 columns: About The Advent + social icons (Twitter, Facebook, LinkedIn, Instagram), Quick Links (Sermons, Ministries, Events, Contact), Contact Info (address, phone, email). Copyright line linking ComponentDock.

## Gherkin Requirements

```gherkin
Feature: ChapelGlow — Church & Religious Template
  As a visitor to the ChapelGlow website
  I want to learn about church services, sermons, and events
  So that I can attend or participate

  Background:
    Given the ChapelGlow page is loaded at the root URL

  # ── Navbar ──
  Scenario: Navbar displays brand and navigation links
    Then the navbar shows the brand "ChapelGlow"
    And the navbar contains links: Home, Who We Are, Ministries, Events, Contact

  Scenario: Navbar has a Ministries dropdown
    Then the Ministries link has a dropdown menu
    And the dropdown contains: Children, Students, Care Ministry, Missions, Request Prayer

  Scenario: Navbar toggles on mobile
    Given the viewport is narrower than 768px
    When the user clicks the hamburger menu button
    Then the navigation menu expands
    And clicking it again collapses the menu

  # ── Hero Slider ──
  Scenario: Hero slider shows slides with background images
    Then the hero slider displays slides with full-width background images
    And each slide has a centered headline and description text
    And each slide has a white outline button

  Scenario: Hero slider has navigation arrows
    Then owl-carousel navigation arrows are visible on hover

  # ── Upcoming Events ──
  Scenario: Events highlight shows next event details
    Then the "Upcoming Events" section is visible
    And it displays an event title, time, location, and speaker name
    And a countdown timer is shown on the right side

  # ── Worship Time ──
  Scenario: Worship time section shows service schedule
    Then the worship time section has a split layout (image + text)
    And it displays "Worship Time" heading
    And a list of worship services is shown with names and times
    And the services include Morning, Afternoon, and Evening worship

  # ── Recent Sermons ──
  Scenario: Sermons section shows three sermon entries
    Then the "Recent Sermons" heading is centered
    And there are three sermon cards
    And each card has a title, author, date, and an audio player

  Scenario: Sermon audio players are functional
    When the user clicks play on a sermon
    Then the audio player starts playing

  # ── Events & Ministries ──
  Scenario: Ministries section shows three ministry entries
    Then the "Events & Ministries" heading is centered
    And there are three ministry cards
    And each card has a thumbnail image, title, date, category, and description

  # ── Footer ──
  Scenario: Footer displays about, links, and contact info
    Then the footer has a dark background
    And the footer shows "About The Advent" with social media icons (Twitter, Facebook, LinkedIn, Instagram)
    And the footer shows "Quick Links" with: Sermons, Ministries, Events, Contact
    And the footer shows "Contact Info" with address, phone, and email
    And the footer copyright links to "https://www.componentdock.com/"

  # ── Global ──
  Scenario: Page uses correct fonts
    Then headings use the "Playfair Display" serif font
    And body text uses the "Open Sans" sans-serif font

  Scenario: Color scheme is dark with gold accents
    Then the background is dark charcoal (#262626)
    And accent color is gold (#ffc107)
    And buttons have sharp corners (no border-radius)
```

## Verification Checklist

- [ ] Navbar: dark bg, brand, 4 links, Ministries dropdown with 5 sub-items, mobile toggle
- [ ] Hero Slider: 2 slides with bg images, headlines, descriptions, white outline buttons
- [ ] Upcoming Events: event title, meta (time, location, speaker), countdown timer
- [ ] Worship Time: split layout, image + worship schedule list (3 services)
- [ ] Recent Sermons: 3 cards with title, author, date, audio player
- [ ] Events & Ministries: 3 cards with thumbnail, title, date/category, description
- [ ] Footer: dark bg, 3 columns (about/social, links, contact), copyright linking ComponentDock
- [ ] Fonts: Playfair Display (headings), Open Sans (body)
- [ ] Colors: dark charcoal #262626, gold #ffc107, white text
- [ ] Buttons: sharp/square corners (border-radius: 0)
- [ ] Responsive: all sections stack on mobile
- [ ] Placeholder images: picsum.photos/seed/chapelglow-*
- [ ] No ColorLib references in app code
- [ ] Footer links https://www.componentdock.com/
- [ ] Test coverage: 100% lines/functions/branches/statements
