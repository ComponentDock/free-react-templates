# Template: Liturgy (Church)

## Purpose

Recreation of ColorLib's **Advent** church website template
(`https://colorlib.com/wp/template/advent/`)
as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Preview URL:** `https://preview.colorlib.com/theme/advent/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg`
- **Stack:** Vite latest · React 19 · Tailwind CSS 4 · TypeScript strict
- **Deploy:** `https://liturgy.free.componentdock.com` (Surge)

## Design tokens (extracted from preview)

| Token            | Value                                         |
| ---------------- | --------------------------------------------- |
| Brand / accent   | `#ffc107` (golden yellow)                     |
| Body background  | `#262626` (dark charcoal)                     |
| Body text color  | `#b3b3b3` (light gray on dark)                |
| Headings font    | `"Playfair Display", Times, serif`            |
| Body font        | `"Open Sans", Arial, sans-serif`              |
| Headings color   | `#fff` (white)                                |
| Button shape     | Sharp corners — `border-radius: 0`            |
| Button text      | Uppercase, `letter-spacing: 0.2em`, `font-size: 13px` |
| Primary button   | `#ffc107` bg, white text, 2px border          |
| Outline button   | White border, white text                      |
| Section headings | `#ffc107` background badge, white text, uppercase, 11px |
| Sermon cards     | `#000` bg, white text                         |
| Footer           | `#262626` bg, `#2e2e2e` border-top            |
| Footer links     | `#ffc107`                                     |
| Worship section  | `#fff` bg (white)                             |
| Dropdown hover   | `#ffc107` bg, white text                      |
| Social icons     | Circular, 30px, border `rgba(255,255,255,0.1)` |
| Nav link style   | Uppercase, 12px, letter-spacing 0.2em         |

## Section structure (from live preview DOM)

1. **Navbar** — transparent/absolute positioned on dark bg, logo left, links right (Home, Who We Are, Ministries [dropdown], Events, Contact)
2. **Hero Slider** — full-viewport image carousel, centered text, white "outline-white" CTA buttons (e.g. "Watch Now", "Explore Now"), dark overlay
3. **Upcoming Events** — dark bg, yellow section badge ("Upcoming Events"), event title + meta (date, location, speaker), countdown timer blocks in yellow
4. **Worship Time** — split half layout (image right, text left on white bg), worship schedule list with items (Morning / Afternoon / Evening + times)
5. **Recent Sermons** — section heading ("Recent Sermons"), 3-column sermon cards (black bg), each with title, author, date, audio player
6. **Ministries** — section heading ("Events & Ministries"), 3-column media cards with thumbnail, title, category, description
7. **Footer** — 3-column layout: About The Advent + social icons, Quick Links, Contact Info; bottom copyright bar with Component Dock link

## Gherkin requirements

### Navbar

```gherkin
Scenario: Display navigation bar
  Given the page loads
  Then a dark transparent navigation bar is visible at the top
  And the brand name "Liturgy" is shown on the left
  And nav links are shown: Home, Who We Are, Ministries, Events, Contact
  And all nav text is uppercase with wide letter spacing

Scenario: Ministries dropdown
  Given the user hovers or taps "Ministries" in the nav
  Then a dropdown appears with items: Children, Students, Care Ministry, Missions, Request Prayer
  And dropdown items highlight #ffc107 on hover

Scenario: Mobile hamburger menu
  Given the viewport width is below 768px
  Then a hamburger button appears
  And clicking it toggles the nav links vertically
```

### Hero Slider

```gherkin
Scenario: Display hero carousel
  Given the page loads
  Then a full-viewport image carousel is visible
  And each slide has a dark overlay and centered white text
  And a headline (h1) and subtext paragraph are shown
  And an outline-white CTA button ("Watch Now" / "Explore Now") is shown

Scenario: Slider navigation dots
  Given the hero slider is visible
  Then white outlined navigation dots appear at the bottom
  And the active dot has a white filled border
```

### Upcoming Events

```gherkin
Scenario: Display upcoming events section
  Given the user scrolls to the events section
  Then a dark background section is visible
  And a yellow "Upcoming Events" badge is displayed
  And an event headline, date, location, and speaker are shown
  And a countdown timer with yellow blocks is displayed

Scenario: Countdown timer blocks
  Given the upcoming events section is visible
  Then the countdown shows blocks for days, hours, minutes, seconds
  And each block has a #ffc107 background with white numbers
```

### Worship Time

```gherkin
Scenario: Display worship time section
  Given the user scrolls to the worship time section
  Then a white background split layout is visible
  And the left side shows "Worship Time" heading and a schedule list
  And the right side shows an image
  And the schedule lists Morning Worship, Afternoon Worship, Evening Worship with times

Scenario: Schedule list styling
  Given the worship time list is visible
  Then each item has a bottom border separator
  And times are displayed below the service name in lighter text
```

### Recent Sermons

```gherkin
Scenario: Display sermon cards
  Given the user scrolls to the sermons section
  Then a section heading "Recent Sermons" / "Listen Our Sermons" is displayed
  And 3 sermon cards are shown in a row
  And each card has a black background
  And each card shows a sermon title, author name, and date
  And each card has an audio player

Scenario: Sermon card layout
  Given sermon cards are visible
  Then the title uses the heading font (Playfair Display) in white
  And the meta text is uppercase, 11px, with letter spacing
  And cards are arranged in a 3-column grid
```

### Ministries

```gherkin
Scenario: Display ministries section
  Given the user scrolls to the ministries section
  Then a section heading "Ministries" / "Events & Ministries" is displayed
  And 3 ministry cards are shown in a row
  And each card has a thumbnail image, title, category, and description

Scenario: Ministry card layout
  Given ministry cards are visible
  Then the thumbnail is displayed on the left (media layout)
  And the title uses the heading font
  And the category and date are shown in uppercase metadata text
  And a description paragraph follows
```

### Footer

```gherkin
Scenario: Display footer
  Given the user scrolls to the footer
  Then a dark background footer (#262626) is visible with a top border
  And 3 columns are shown: About, Quick Links, Contact Info
  And social media icons (Twitter, Facebook, LinkedIn, Instagram) are shown as circles
  And the Quick Links column lists Sermons, Ministries, Events, Contact

Scenario: Footer attribution
  Given the footer is displayed
  Then a copyright line is shown
  And a "Component Dock" link (https://www.componentdock.com/) is present
  And no ColorLib branding appears in the rendered app
```

## Verification checklist

- [ ] All 7 sections rendered with correct order
- [ ] Navbar: transparent bg, uppercase links, Ministries dropdown works
- [ ] Hero: full-viewport carousel with overlay, CTAs, navigation dots
- [ ] Upcoming Events: dark bg, yellow badge, countdown timer
- [ ] Worship Time: split layout, schedule list, white background
- [ ] Sermons: 3-column black cards with audio players
- [ ] Ministries: 3-column media cards with thumbnails
- [ ] Footer: 3-column layout, social icons, Component Dock link
- [ ] Design tokens: #ffc107 accent, dark #262626 bg, Playfair Display headings, Open Sans body
- [ ] Buttons: sharp corners (radius 0), uppercase, letter-spacing
- [ ] No ColorLib references in app code
- [ ] All tests passing at 100% coverage
- [ ] Build succeeds, no type errors
