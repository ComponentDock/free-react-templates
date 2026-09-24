# Template: Airtime (Podcast / Magazine)

## Purpose

Airtime is a single-page podcast website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "The Hustle
Hour" podcast/magazine template design (see TEMPLATES.md, line 2218), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "The Hustle Hour" — a dark-themed podcast landing
  page for a tech/founder interview show: dark hero with bold red accent
  heading, embedded audio player CTAs, podcast platform distribution badges,
  statistics counters (episodes, downloads, rating), a stats section with red
  numbers on white, and additional content sections below.
  (source: https://colorlib.com/wp/template/the-hustle-hour/).
- **Live preview URL:** `https://preview.colorlib.com/#the-hustle-hour`
  (JS-rendered SPA; preview not fetchable via curl — falls back to screenshot
  + page metadata for design analysis).
- **Visual design (from screenshot `hustlehour-template-1771943880509.jpg` +
  page metadata):** dark-themed podcast landing page. The navbar is dark
  (near-black `~#0f172a`) with the logo "The Hustle Hour" left (red microphone
  icon + white text), nav links center (white, uppercase-normal weight), a
  dark-mode toggle (moon icon), and a red rounded-full "Listen Now" CTA right.
  Below: hero section with same dark background; a small red pill badge
  "🔴 New Episode Every Tuesday"; a large heading "Stories That" (white) /
  "Spark Ideas" (red/coral gradient); paragraph subtext in light gray; two
  CTA buttons — primary "Listen Latest Episode" (red bg, white text,
  rounded-full, music icon) and secondary "Subscribe" (transparent/dark bg,
  white border, rounded-full); a row of platform pills ("Available on:" +
  Spotify, Apple Podcasts, Google Podcasts, YouTube — dark rounded-full pills
  with icons). Below hero: a stats row (4 columns — "500+ Episodes",
  "2M+ Downloads", "Top 50 Tech Podcast", "4.8 Rating") with large white
  numbers and small gray labels, separated by subtle vertical dividers. An
  angled/diagonal transition cuts from the dark hero/stats into a white
  section below. The white section repeats stats with red numbers ("200+
  Episodes Published", "1M+ Total Downloads", "50+ Countries Reached",
  "4.9 Average Rating"). Below that, a dark section begins (partially visible
  in the screenshot — likely an episodes grid or featured content area).
- **Stack:** Original uses Astro 7 + Tailwind CSS 4.x. We recreate with
  Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens

| Token            | Value                     | Notes                                    |
|------------------|---------------------------|------------------------------------------|
| brand-primary    | `#ef4444` (red-500)       | CTA buttons, accent text, badges         |
| brand-primary-hover | `#dc2626` (red-600)    | Button hover state                       |
| bg-dark          | `#0f172a` (slate-900)     | Navbar, hero, dark sections              |
| bg-dark-card     | `#1e293b` (slate-800)     | Cards, elevated dark surfaces            |
| bg-light         | `#f8fafc` (slate-50)      | Light content sections                   |
| bg-white         | `#ffffff`                 | White content sections                   |
| text-white       | `#ffffff`                 | Headings on dark bg                      |
| text-gray-light  | `#94a3b8` (slate-400)     | Paragraphs on dark bg, subtext           |
| text-dark        | `#0f172a` (slate-900)     | Headings on light bg                     |
| text-gray        | `#64748b` (slate-500)     | Paragraphs on light bg                   |
| border-dark      | `#334155` (slate-700)     | Borders on dark surfaces                 |
| font-heading     | Inter (or system sans)     | Clean modern sans-serif                  |
| font-body        | Inter (or system sans)     | Same family as heading                  |
| radius-full      | `9999px`                   | All buttons, pills, platform badges      |
| radius-lg        | `0.5rem` (8px)             | Card corners if any                      |
| transition       | `200ms ease`               | Hover/transition timing                  |

## Section order (1:1 from screenshot)

1. **Navbar** (sticky, dark bg `#0f172a`, full-width):
   - Logo: microphone icon (red) + "The Hustle Hour" (white text) left
   - Nav links center: Episodes, About, Sponsors, Newsletter, Sponsorships,
     Blog, Release Notes, Contact (white text, ~14px, normal weight)
   - Dark mode toggle (moon icon) right
   - "Listen Now" button right: red bg, white text, rounded-full

2. **Hero** (dark bg `#0f172a`, centered, generous padding):
   - Red pill badge: "🔴 New Episode Every Tuesday" (red bg, white text,
     rounded-full, small font)
   - Heading: "Stories That" (white) / "Spark Ideas" (red/coral, possibly
     gradient from red to slightly pinker)
   - Subtext paragraph: light gray `#94a3b8`, centered, ~16px
   - Two CTA buttons side by side:
     - Primary: "Listen Latest Episode" (red bg, white text, rounded-full,
       music note icon left, padding ~12px 28px)
     - Secondary: "Subscribe" (transparent bg, white border, white text,
       rounded-full)
   - Platform row: "Available on:" label + pill badges for Spotify, Apple
     Podcasts, Google Podcasts, YouTube (each: dark bg `#1e293b`, white text,
     rounded-full, icon left, ~12px font)

3. **Stats Bar** (dark bg, below hero, 4-column grid, centered):
   - 4 stats: "500+" "Episodes" | "2M+" "Downloads" | "Top 50" "Tech
     Podcast" | "4.8" "Rating"
   - Numbers: white, bold, ~32px
   - Labels: light gray `#94a3b8`, ~14px
   - Subtle vertical dividers between columns

4. **Angled transition** — diagonal/angled cut from dark to white
   (CSS clip-path or SVG divider)

5. **Stats Section (light)** (white bg `#f8fafc`, 4-column grid, centered):
   - 4 stats: "200+" "Episodes Published" | "1M+" "Total Downloads" |
     "50+" "Countries Reached" | "4.9" "Average Rating"
   - Numbers: red `#ef4444`, bold, ~32px
   - Labels: dark gray `#64748b`, ~14px

6. **Featured Episodes / Content** (dark bg `#0f172a` — partially visible):
   - Likely an episode grid or cards section (dark cards on dark bg)
   - Audio player or play button on each card
   - Episode titles, dates, durations

7. **Newsletter Signup** (likely dark or red bg):
   - Email input + subscribe button

8. **Footer** (dark bg `#0f172a`):
   - Logo + tagline left
   - Navigation columns
   - Social icons
   - Copyright + "Made with Component Dock" link
   - Link to `https://www.componentdock.com/`

## Gherkin requirements

```gherkin
Feature: Airtime podcast template

  Background:
    Given the user opens the Airtime template at its deployed URL
    And the page has fully loaded

  # --- Navbar ---
  Scenario: Navbar displays logo and navigation links
    Then the navbar is visible and sticky at the top
    And the logo shows a red microphone icon with "The Hustle Hour" text
    And navigation links include "Episodes", "About", "Sponsors", "Newsletter",
      "Blog", "Release Notes", "Contact"
    And a dark mode toggle icon is visible
    And a "Listen Now" button with red background is visible on the right

  Scenario: Navbar dark mode toggle works
    Given the page is in light mode
    When the user clicks the dark mode toggle
    Then the page switches to dark mode
    And clicking the toggle again restores light mode

  # --- Hero ---
  Scenario: Hero section displays podcast branding
    Then a red pill badge reads "New Episode Every Tuesday"
    And a heading displays "Stories That Spark Ideas" with "Spark Ideas" in red
    And a descriptive paragraph is visible below the heading
    And a "Listen Latest Episode" primary button (red, rounded) is visible
    And a "Subscribe" secondary button (outlined, rounded) is visible

  Scenario: Hero platform badges are visible
    Then "Available on:" text is visible
    And platform pills for Spotify, Apple Podcasts, Google Podcasts, YouTube
      are displayed in a horizontal row

  Scenario: CTA buttons are clickable
    When the user clicks "Listen Latest Episode"
    Then the button responds with a hover/click interaction
    When the user clicks "Subscribe"
    Then the button responds with a hover/click interaction

  # --- Stats Bar (dark) ---
  Scenario: Dark stats bar shows key metrics
    Then 4 statistics are displayed in a horizontal row
    And the values are "500+", "2M+", "Top 50", "4.8"
    And the labels are "Episodes", "Downloads", "Tech Podcast", "Rating"
    And the numbers are white and bold

  # --- Light stats section ---
  Scenario: Light stats section shows secondary metrics
    Then 4 statistics are displayed in a horizontal row
    And the values are "200+", "1M+", "50+", "4.9"
    And the labels are "Episodes Published", "Total Downloads",
      "Countries Reached", "Average Rating"
    And the numbers are red and bold
    And the background is white or light gray

  # --- Featured Episodes ---
  Scenario: Featured episodes section renders episode cards
    Then at least 3 episode cards are visible
    And each card shows an episode title, date, and play button or audio element
    And cards are arranged in a responsive grid

  # --- Newsletter ---
  Scenario: Newsletter signup form is functional
    Then an email input field is visible
    And a "Subscribe" button is visible next to the input
    When the user enters an email and clicks subscribe
    Then the form submits (or shows validation feedback)

  # --- Footer ---
  Scenario: Footer displays branding and links
    Then the footer shows the podcast logo/name
    And navigation links are present
    And social media icons are visible
    And a "Made with Component Dock" link points to componentdock.com
    And the copyright text is present
```

## Verification checklist

- [ ] Navbar: sticky, dark bg, logo with mic icon, all nav links, dark mode
      toggle, "Listen Now" red button
- [ ] Hero: red pill badge, two-line heading with red accent, subtext, two
      CTA buttons, platform pill badges row
- [ ] Dark stats bar: 4-column grid, white numbers, gray labels
- [ ] Angled/diagonal transition divider between dark and light sections
- [ ] Light stats section: 4-column grid, red numbers, dark labels, white bg
- [ ] Featured episodes section: responsive card grid with play buttons
- [ ] Newsletter signup: email input + subscribe button
- [ ] Footer: logo, nav links, social icons, Component Dock link, copyright
- [ ] Dark mode toggle switches all sections between dark/light themes
- [ ] Responsive: mobile hamburger nav, stacked columns on small screens
- [ ] All buttons have `rounded-full` (pill shape) styling
- [ ] Brand color `#ef4444` used consistently for CTAs and accent text
- [ ] No references to ColorLib in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/` as "Component Dock"
