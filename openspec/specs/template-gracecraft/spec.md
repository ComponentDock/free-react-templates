# Template: Gracecraft (Church / Nonprofit)

## Purpose

Recreation of ColorLib **Mimosan** — a church/nonprofit website template.
- **Source slug:** `mimosan`
- **Preview URL:** https://preview.colorlib.com/theme/mimosan/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/mimosan-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Church / Nonprofit

## Design tokens (extracted from ColorLib preview)

| Token | Value | Notes |
|-------|-------|-------|
| Primary brand | `#b10707` | Dark red — buttons, accents, logo color |
| Secondary/CTA | `#ff6347` | Tomato red — hover states, links |
| Accent light | `#ffa07f` | Light salmon — secondary hover |
| Error/alert red | `#eb4141` | Lighter red |
| Text dark | `#181818` | Headings, nav |
| Text body | `#353535` | Paragraph text |
| Text muted | `#7c7c7c` | Subtitles, meta |
| Text light | `#a5a5a5` | Very light body text |
| White | `#FFFFFF` | Card backgrounds, text on dark |
| Light bg 1 | `#f9f9f9` | Section alternating bg |
| Light bg 2 | `#f7f7f7` | Gallery bg |
| Button radius | `3px` | Near-rectangular with slight rounding |
| Button bg | `#b10707` | Dark red |
| Button text | `#FFFFFF` | White |
| Button width | `160px` | Fixed width |
| Button height | `46px` | Fixed height |
| Body font | `'Assistant', sans-serif` | Main body text |
| Heading font | `'Old Standard TT', serif` | Section titles, logo |
| Secondary font | `'Open Sans', sans-serif` | Nav, buttons, meta |
| Section title size | `36px`, weight `700` | Section headings |
| Section title color | `#181818` | Dark |
| Section subtitle color | `#7c7c7c` | Muted |
| Parallax | Used on hero background + donations + footer | Full-width background images |

## Section structure (order from live preview)

1. **TopBar** — Contact info (email, phone) + social icons (facebook, twitter, pinterest, linkedin, google-plus) on parallax background image
2. **Header** — Logo "Gracecraft" + main nav (Home, About, Sermons, Events, Blog, Contact) + search button + hamburger menu
3. **Hero** — Full-width parallax background image, centered headline "Belief in God as Father and Holy Spirit is at the heart of our faith", body text, CTA button "Join with us"
4. **EventBanner** — Upcoming event card: date badge (day + month), event title, time range, location, countdown timer (days/hours/min/sec)
5. **About** — Section title "Welcome to our church", subtitle, left image + right text with "Read story" button
6. **Sermons** — Section title "Sermons today", 3 sermon cards with image, title, pastor name, categories
7. **Donation** — Parallax background, "Our mission" text, donation card: call-to-action name, categories, date, description, remaining amount, progress bar (70% / $5,000 raised / $7,100 goal), "Donate now" button
8. **Quote** — Blockquote from Ignatius of Antioch, quote icon, source attribution, centered
9. **Gallery** — Image grid (masonry-style flex wrap, 5-6 images with colorbox overlay)
10. **LatestNews** — 3-column grid of news posts: image, title, author, date, comment count, excerpt
11. **Footer** — Parallax background: contact column (logo, address, phone, email), useful links column, newsletter subscribe column, copyright row + social icons

## Gherkin requirements

```gherkin
Feature: Gracecraft church template

  Scenario: TopBar displays contact info and social links
    Given I visit the Gracecraft page
    Then the top bar shows an email address and phone number
    And social media icon links are visible (facebook, twitter, pinterest, linkedin)

  Scenario: Header navigation links
    Given I visit the Gracecraft page
    Then the header shows a logo linking to Home
    And navigation links include Home, About, Sermons, Events, Blog, Contact

  Scenario: Hero section displays headline and CTA
    Given I visit the Gracecraft page
    Then the hero section shows a headline about faith
    And a body paragraph below the headline
    And a "Join with us" CTA button is visible

  Scenario: Event banner shows upcoming event details
    Given I visit the Gracecraft page
    Then an upcoming event card shows date, title, time, and location
    And a countdown timer with days, hours, minutes, seconds is displayed

  Scenario: About section displays church welcome
    Given I visit the Gracecraft page
    Then the about section title reads "Welcome to our church"
    And a descriptive paragraph is shown
    And a "Read story" button is visible

  Scenario: Sermons section displays sermon cards
    Given I visit the Gracecraft page
    Then 3 sermon cards are displayed
    And each card shows a title, pastor name, and categories

  Scenario: Donation section shows progress
    Given I visit the Gracecraft page
    Then a donation section shows a campaign description
    And a progress bar displays percentage raised
    And "Raised" and "Goal" dollar amounts are shown
    And a "Donate now" button is visible

  Scenario: Quote section displays blockquote
    Given I visit the Gracecraft page
    Then a blockquote is displayed with attribution
    And a decorative quote icon appears

  Scenario: Gallery section shows images
    Given I visit the Gracecraft page
    Then a gallery grid of 5+ images is displayed

  Scenario: Latest news shows 3 blog posts
    Given I visit the Gracecraft page
    Then 3 news posts are displayed in a grid
    And each post shows a title, author, date, comment count, and excerpt

  Scenario: Footer displays contact, links, and subscribe
    Given I visit the Gracecraft page
    Then the footer shows contact details (address, phone, email)
    And a useful links list is visible
    And a newsletter subscribe form with email input and button is shown
    And a copyright line includes the year and "Component Dock" link
```

## Verification checklist

- [ ] All 11 sections present in correct order
- [ ] Brand color `#b10707` used for buttons, accents, logo
- [ ] Font families: Assistant (body), Old Standard TT (headings), Open Sans (nav/meta)
- [ ] Button style: 160px wide, 46px tall, 3px radius, dark red background, white text
- [ ] Parallax backgrounds on hero, donation section, footer
- [ ] Event countdown timer with 4 units (days/hours/min/sec)
- [ ] Donation progress bar with percentage and dollar amounts
- [ ] 3 sermon cards with pastor + category metadata
- [ ] 3 news posts with author, date, comment count
- [ ] Footer: Component Dock link in copyright
- [ ] No ColorLib references in app code
- [ ] Screenshot visual matches original design aesthetic (dark red church template)
