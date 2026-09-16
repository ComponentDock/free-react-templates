# Template: ChapelWatch (Church / Religious)

## Purpose

Recreation of the ColorLib **Advent** church website template as a modern React
19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source:** https://colorlib.com/wp/template/advent/
- **Preview:** https://preview.colorlib.com/theme/advent/
- **Package:** `@free-react-templates/chapelwatch`
- **App folder:** `apps/chapelwatch`

Dark-themed church website with a hero slider, upcoming events with countdown,
worship schedule, sermon cards with audio, ministry listings, and a 3-column
footer.

## Design Tokens

Extracted from the live preview's `css/style.css` and `css/bootstrap.css`:

| Token | Value | Notes |
|---|---|---|
| `--brand` | `#ffc107` | Amber/gold — section labels, countdown blocks, footer links, dropdown hover |
| `--brand-hover` | `#ffce3a` | Lighter gold for button hover |
| `--bg-primary` | `#262626` | Dark charcoal — body, footer, upcoming-events bg |
| `--bg-dark` | `#000000` | Pure black — sermon cards |
| `--bg-light` | `#ffffff` | White — worship-time section |
| `--text-body` | `#b3b3b3` | Light gray body text on dark |
| `--text-heading` | `#ffffff` | White headings |
| `--border-dark` | `#2e2e2e` | Divider lines (half sections, footer top) |
| `--border-light` | `#e0e0e0` | Light dividers (worship time list) |
| `--font-body` | `"Open Sans", Arial, sans-serif` | 15px, weight 400, line-height 1.8 |
| `--font-heading` | `"Playfair Display", Times, serif` | h1, h2, h3 |
| `--font-label` | 11px uppercase, letter-spacing .2em | Section labels, nav links, meta text |
| `--btn-radius` | `0` | Square buttons |
| `--btn-border` | `2px` | Consistent across primary + outline |
| `--btn-text` | 13px uppercase, letter-spacing .2em | All buttons |
| `--btn-outline-white` | border #fff, text #fff; hover bg #fff text #000 | Hero CTA |
| `--btn-primary-hover` | bg #ffce3a, border #ffce3a | Primary button hover |
| `--nav-height` | transparent over hero | Abs positioned, dark bg on mobile only |
| `--slider-height` | `calc(100vh - 217px)` min 700px | Full-viewport hero |
| `--countdown-bg` | `#ffc107` | Gold blocks, white text, 5-column flex |
| `--sermon-bg` | `#000` | Black card bg |
| `--section-padding` | `7em 0` | Generous vertical rhythm |
| `--dropdown-shadow` | `0 2px 30px rgba(0,0,0,0.2)` | Dropdown menu shadow |
| `--footer-social-radius` | `50%` | Circular social icons, border rgba(255,255,255,0.1) |

## Visual Design (from screenshot)

Dark, reverent church aesthetic. The hero shows a large background image of a
person in worship with a dark overlay — white serif heading "Explore Our Weekend
Services" centered, with a white outline button below. Below the hero is a dark
"Upcoming Events" bar with a gold label, event details, and gold countdown
blocks. A white-background "Worship Time" section uses a split layout (text
left, image right) with a schedule list. Three black sermon cards follow with
audio players. Then three ministry cards with thumbnails on a light background.
Finally a dark 3-column footer with social icons.

## Gherkin Requirements

```gherkin
Feature: ChapelWatch — Church Website Template

  Background:
    Given the user opens the ChapelWatch page
    Then the page loads with a dark background (#262626)

  # ─── Navbar ──────────────────────────────────────────────────

  Scenario: Navbar renders with transparent overlay on hero
    Given the page is at the top
    Then the navbar is transparent and overlays the hero
    And the brand text reads "ChapelWatch" in uppercase with letter-spacing
    And nav links show: Home, Who We Are, Ministries, Events, Contact
    And the Ministries link has a dropdown with: Children, Students, Care Ministry, Missions, Request Prayer
    And on mobile (<768px) the navbar background is black

  Scenario: Navbar dropdown appears on hover/click
    Given the user hovers or clicks "Ministries"
    Then a white dropdown menu appears with shadow
    And dropdown items have a gold (#ffc107) hover background

  # ─── Hero Slider ─────────────────────────────────────────────

  Scenario: Hero slider displays full-viewport slides
    Given the page loads
    Then the hero section is viewport-height (min 700px)
    And each slide has a background image with a dark overlay (rgba(0,0,0,0.2))
    And the heading is white serif text (Playfair Display)
    And the body text is white, 20px, font-weight 300
    And a white outline button reads "Explore Now" (square corners, 2px border)

  Scenario: Hero slider navigation dots
    Given the hero is visible
    Then circular dots appear at the bottom of the slider
    And the active dot has a white border fill

  # ─── Upcoming Events Highlight ────────────────────────────────

  Scenario: Events section shows on dark background
    Given the user scrolls below the hero
    Then the "Upcoming Events" section has a dark (#262626) background
    And a gold (#ffc107) label badge reads "UPCOMING EVENTS"
    And the event title is displayed in white Playfair Display
    And event metadata shows: time, location, speaker in uppercase gray text

  Scenario: Countdown timer displays in gold blocks
    Given the events section is visible
    Then a countdown component shows 5 blocks: Weeks, Days, Hours, Minutes, Seconds
    And each block has a gold (#ffc107) background with white text
    And the count labels (WEEKS, DAYS, etc.) are 12px uppercase
    And the count numbers are 24px white

  # ─── Worship Time ────────────────────────────────────────────

  Scenario: Worship schedule renders in split layout
    Given the user scrolls to the Worship Time section
    Then the section has a white background
    And it uses a 50/50 split: text left, image right
    And the heading reads "Worship Time" in dark text
    And the schedule list shows three entries: Morning (5:30AM-6:00AM), Afternoon (1:30PM-2:00PM), Evening (7:30PM-8:00PM)
    And each list item has a bottom border (#e0e0e0)
    And each item shows time in lighter text (rgba(0,0,0,0.2))

  # ─── Recent Sermons ──────────────────────────────────────────

  Scenario: Sermons section shows 3-column cards
    Given the user scrolls to the Recent Sermons section
    Then a gold label reads "RECENT SERMONS"
    And the heading reads "Listen Our Sermons"
    And 3 sermon cards are displayed in a row
    And each card has a black (#000) background
    And each card shows: sermon title (white, 18px), speaker name, date
    And each card has an audio player component

  # ─── Ministries ──────────────────────────────────────────────

  Scenario: Ministries section shows 3-column list with thumbnails
    Given the user scrolls to the Ministries section
    Then a gold label reads "MINISTRIES"
    And the heading reads "Events & Ministries"
    And 3 ministry items are displayed in a 3-column grid
    And each item shows: thumbnail image (120px), title (18px), date, category link, description
    And category links are white text

  # ─── Footer ──────────────────────────────────────────────────

  Scenario: Footer renders with 3 columns on dark background
    Given the user scrolls to the footer
    Then the footer has a dark (#262626) background with top border (#2e2e2e)
    And column 1: "About" heading + description + 4 social icons (circular)
    And column 2: "Quick Links" with Sermons, Ministries, Events, Contact
    And column 3: "Contact Info" with Address, Telephone, Email
    And all links are gold (#ffc107)
    And social icons are circular with border rgba(255,255,255,0.1)
    And hovering a social icon fills white bg with dark text
    And the footer includes a Component Dock link

  Scenario: Footer text styling
    Given the footer is visible
    Then body text is rgba(255,255,255,0.5) at 13px
    And headings are white, 16px, bold
```

## Verification Checklist

- [ ] All 7 sections present in correct order: Navbar, Hero Slider, Upcoming Events, Worship Time, Sermons, Ministries, Footer
- [ ] Brand color #ffc107 used for section labels, countdown, footer links, dropdown hover
- [ ] Dark theme throughout (#262626 body, black sermon cards)
- [ ] Playfair Display serif font on all headings
- [ ] Open Sans on body text
- [ ] Buttons are square (no border-radius), uppercase, 2px border, letter-spacing .2em
- [ ] Hero is full-viewport with dark overlay on background images
- [ ] Worship Time uses 50/50 split layout (text left, image right)
- [ ] Countdown component in gold blocks (5 columns)
- [ ] Sermon cards have audio players (use HTML5 audio or a React audio component)
- [ ] Ministry items have thumbnail images + metadata
- [ ] Footer has 3 columns: About + social, Quick Links, Contact Info
- [ ] Footer social icons are circular with hover effect
- [ ] Mobile: navbar collapses with black bg, split sections stack vertically
- [ ] All placeholder images via `https://picsum.photos/seed/<name>-<n>/<w>/<h>`
- [ ] No ColorLib references in app code — provenance only in spec
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
