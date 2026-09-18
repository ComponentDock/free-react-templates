# Template: Shrine (Religious / Church)

## Purpose

Recreation of the ColorLib "Church Wordpress Themes" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `church-wordpress-themes`
- **Source URL:** https://colorlib.com/wp/template/church-wordpress-themes/
- **Preview URL:** https://preview.colorlib.com/theme/church-wordpress-themes/ (404 — unreachable; design based on screenshot)
- **Screenshot URL:** https://colorlib.com/wp/wp-content/uploads/sites/2/wordpress-church-themes-1.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/shrine`
- **Surge target:** `shrine.free.componentdock.com`

## Design Tokens

Extracted from the screenshot (preview CSS unavailable — 404). Tokens are visual approximations.

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#d94f44` | Red/coral — navbar bar, donate button, links, pastor heading |
| Brand dark | `#b33a30` | Darker red hover state |
| Top bar bg | `#3a3a3a` | Countdown timer bar background |
| Navbar bg | `#d94f44` | Primary red/coral nav bar |
| Body bg | `#FFFFFF` | White content backgrounds |
| Body text | `#333333` | Default paragraph/body text |
| Heading text | `#FFFFFF` | White headings on dark/image backgrounds |
| Muted text | `#888888` | Secondary/supporting text |
| White text | `#FFFFFF` | On hero, on dark backgrounds |
| Font primary | `Montserrat`, sans-serif | Headings, nav links, button labels (geometric sans from screenshot) |
| Font secondary | `Open Sans`, sans-serif | Body copy, subtitles |
| Button shape | Rounded (border-radius ~4px) | CTA buttons ("Join us", "Donate") |
| Button bg | `#d94f44` | Red coral on CTA buttons |
| Button text | `#FFFFFF` | White on red buttons |
| Card bg | `#FFFFFF` | White cards over content |
| Icon circle bg | `#f5f5f5` | Light gray circular icon containers |
| Section divider | `#e5e5e5` | Horizontal rule / line under sections |
| Leaf decoration | `#d94f44` tinted | Decorative leaf/branch illustrations |
| Countdown bg | `#3a3a3a` | Dark charcoal top bar |
| Countdown text | `#FFFFFF` | White numbers/text in countdown |
| "Read More" link | `#d94f44` | Coral accent link in countdown bar |

## Section Structure (in page order)

### 1. Countdown Top Bar
- Full-width dark charcoal (`#3a3a3a`) horizontal bar at top
- Text: "NEXT BIG EVENT IN:" followed by countdown units (DAYS, HOURS, MINUTES, SECONDS)
- Numbers are white, bold, each in its own bordered cell
- "Read More" link in coral/red accent on the right
- Fixed at top or static

### 2. Navbar
- Red/coral (`#d94f44`) background bar
- Left side: Logo with leaf/wheat icon + text "WORDPRESS CHURCH THEME"
- Right side: Navigation links — HOME (red icon), ABOUT, MINISTRIES, SERMONS, EVENTS, FEATURES, GALLERY, NEWS, GIVING, STORE — white text, uppercase
- Search icon (magnifying glass)
- "Donate" button — red coral, white text, rounded corners
- Mobile: hamburger menu → slide-in overlay

### 3. Hero Slider
- Full-width hero with background image (parallax-style)
- Large white heading: "Church WordPress Themes" (bold, serif-like weight)
- Subtitle: "Best WordPress themes for religious websites" (lighter weight)
- CTA button: "Join us" — red coral background, white text, rounded corners
- Left/right arrow navigation for slides
- Decorative leaf/branch illustration on bottom-left corner
- Dark overlay on image for text contrast

### 4. Latest Sermon / Pastor Highlight
- Light/white background section below hero
- Left: circular avatar photo of pastor/speaker
- Center: Heading in red/coral: "Love the Lord Your God with All Your Heart"
- Below heading: "Message from <name>, <date>, Category: <category>" — name in coral, rest in muted gray
- Right: Four circular icon buttons (video, headphones, document, link) for media types
- Decorative leaf/branch illustrations on edges

### 5. Section Divider
- Thin horizontal rule with decorative end caps
- Centered text: "Find the best WordPress church themes!"

### 6. Content Sections (below fold — inferred from template type)
- **About/Welcome** — Brief intro about the church, possibly with image + text columns
- **Ministries/Services** — Grid of ministry cards with icons, titles, descriptions
- **Events** — List or cards of upcoming events with dates
- **Gallery** — Photo grid or carousel of church/community images
- **Sermons** — List of recent sermons with play/download links
- **Newsletter** — Email signup form, coral/red background
- **Footer** — Multi-column: logo, quick links, contact info, social links, Component Dock link

## Gherkin Requirements

```gherkin
Feature: Shrine — Religious / Church Template

  Background:
    Given the user opens "https://shrine.free.componentdock.com"
    And the page has fully loaded

  # --- Countdown Top Bar ---
  Scenario: Countdown top bar displays event timer
    Then the top bar should display a countdown with labels "DAYS", "HOURS", "MINUTES", "SECONDS"
    And the countdown numbers should update every second
    And a "Read More" link should be visible

  # --- Navbar ---
  Scenario: Navbar shows logo, navigation, and donate button
    Then the navbar should contain the logo with text "WORDPRESS CHURCH THEME" or "SHRINE"
    And navigation links should include "About", "Ministries", "Sermons", "Events", "Gallery"
    And a "Donate" button should be visible

  Scenario: Navbar is sticky on scroll
    When the user scrolls down past the hero
    Then the navbar should remain fixed at the top of the viewport

  Scenario: Navbar mobile hamburger menu
    When the viewport width is less than 768px
    Then a hamburger menu icon should be visible
    And clicking it should open a slide-in navigation overlay

  # --- Hero Slider ---
  Scenario: Hero displays heading and CTA
    Then the hero should display the heading "Church WordPress Themes" or "Shrine"
    And a subtitle about religious websites should be visible
    And a "Join us" CTA button should be visible

  Scenario: Hero has background image with overlay
    Then the hero should have a full-width background image
    And a dark overlay should ensure white text is readable

  Scenario: Hero slider navigation arrows
    Then left and right arrow controls should be visible on the hero
    And clicking an arrow should transition to the next/previous slide

  # --- Latest Sermon ---
  Scenario: Latest sermon section displays speaker and message
    Then a circular avatar image of the speaker should be visible
    And a sermon title heading should be displayed
    And speaker name, date, and category should be shown

  Scenario: Sermon media icons
    Then four circular media-type icons should be visible (video, audio, document, link)
    And each icon should have a hover state

  # --- Content Sections ---
  Scenario: About section is present
    Then a section describing the church or ministry should be visible
    And it should contain an image and text in a two-column layout

  Scenario: Ministries grid
    Then a grid of ministry/service cards should be displayed
    And each card should have an icon, title, and short description

  Scenario: Events list
    Then upcoming events should be listed with date and title
    And each event should have a link to more details

  Scenario: Gallery section
    Then a photo grid or carousel should display community/church images
    And images should use placeholder URLs (picsum.photos)

  Scenario: Newsletter signup
    Then an email input field should be visible
    And a submit button should be present
    And the section should have a distinct background color

  # --- Footer ---
  Scenario: Footer displays site links and branding
    Then a footer should be visible with navigation links
    And the footer should contain a link to "https://www.componentdock.com/"
    And the Component Dock link should open in a new tab

  # --- Responsive ---
  Scenario: Template is responsive on mobile
    When the viewport width is less than 640px
    Then all sections should stack vertically
    And the navbar should show a hamburger menu
    And the hero text should be readable on small screens
```

## Verification Checklist

- [ ] Countdown top bar with timer updates
- [ ] Red coral navbar with logo, nav links, Donate button
- [ ] Hero slider with background image, heading, subtitle, CTA button
- [ ] Latest sermon section with avatar, heading, speaker info, media icons
- [ ] Content sections (about, ministries, events, gallery, newsletter)
- [ ] Footer with Component Dock link (opens new tab)
- [ ] Responsive mobile layout (hamburger nav, stacked sections)
- [ ] No ColorLib references in app code — provenance only in spec
- [ ] Placeholder images via `picsum.photos`
- [ ] Google Fonts loaded via `<link>` in index.html
- [ ] Icons from `lucide-react`
- [ ] 100% test coverage
- [ ] `npm run spec:validate` passes
- [ ] Surge target: `shrine.free.componentdock.com`
