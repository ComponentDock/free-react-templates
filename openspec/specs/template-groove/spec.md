# Template: Groove (DJ / Music Events)

## Purpose

Recreation of the ColorLib "Dj" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `dj`
- **Source URL:** https://colorlib.com/wp/template/dj/
- **Preview URL:** https://preview.colorlib.com/theme/dj/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dj-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/groove`
- **Surge target:** `groove.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/dj/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#e4ae50` (gold) | Buttons, accents, highlights, date badges |
| Dark bg | `#000000` | Hero overlay, footer background, dark sections |
| Body bg | `#FFFFFF` | Main content backgrounds |
| Muted bg | `#edf0f5` | Alternating section backgrounds |
| White text | `#FFFFFF` | On dark backgrounds, nav links |
| Heading text | `#25262a` / `#222` | Primary headings |
| Body text | `#333` / `#343a40` | Body copy |
| Muted text | `#737373` / `#999999` | Secondary text, captions |
| Border | `#ccc` | Card borders, section dividers |
| Font primary | `Montserrat`, sans-serif | Headings, nav, buttons, all text |
| Font icon | `icomoon` / `flaticon` | Icon fonts (replace with lucide-react) |
| Button shape | `border-radius: 30px` (pill) | CTA buttons |
| Button bg (primary) | `#e4ae50` | Primary CTA fill |
| Button border (outline) | `#e4ae50` | Outline CTA border |
| Button text | `#FFFFFF` | White on brand |
| Date badge | `#e4ae50` bg, circular (`border-radius: 50%`) | Event date overlay |
| Dark overlay | `rgba(0,0,0,0.6)` | Hero image overlay |
| Gold overlay | `rgba(228,174,80,0.8)` | Hover overlay on upcoming events |

## Section Structure (in page order)

### 1. Navbar
- Logo text "Groove." (left-aligned, white text, bold, with gold dot accent)
- Navigation links: Home, Shows (dropdown), Events, About, Contact (right-aligned)
- Shows dropdown: Top 20 of The Week, Featured Artist, Interviews, Sub Menu
- Mobile: hamburger menu → slide-in mobile menu
- Sticky on scroll

### 2. Hero
- Full-width section with dark background (`#000`)
- DJ performer image (left) + text content (right)
- Headline: "DJ Kathy Music Fest" (large, gold-accented)
- Subtext paragraph about events
- "Join Us" CTA button (outline-primary, gold border + text)

### 3. Featured Events
- White background section
- Centered heading: "Featured Events" with decorative border-bottom
- 3-column grid of event cards
- Each card: image, date badge (gold circle overlay, day + month), title, description, "Info" link
- Cards: Slamp Party (19 Jun), Love For My City (24 Jun), Music Night Fest Party (8 Jul)

### 4. Upcoming Events (Masonry Grid)
- White background section
- Centered heading: "Upcoming Events"
- Asymmetric grid layout (1 large left + 2 stacked right)
- Each item: background-image link with overlay text "Classic Songs For Classic People"
- Gold hover overlay (`rgba(228,174,80,0.8)`)

### 5. About / We Love Music
- White background section
- Two-column layout:
  - Left: featured image with play button overlay (video popup link)
  - Right: "We Love Music" heading + "Join with us today" subtext + description paragraphs + "Join Us" CTA button (solid gold)
- Video play button overlay on the image

### 6. Footer
- Dark background (`#25262a` / near-black)
- 3-column layout:
  - Column 1: "About Us" heading + description + "Navigations" heading + link list (Home, DJs, News, Top 20 of the week)
  - Column 2: "Follow Us" heading + social icons (Facebook, Twitter, Instagram, LinkedIn) + "Subscribe" heading + email input + Subscribe button
  - Column 3: "Watch Video" heading + video thumbnail with play button overlay
- Bottom row: Copyright text + "Made with ❤ by Colorlib" → replaced with Component Dock attribution
- Subscribe button: solid gold, pill shape
- Email input: transparent bg, white text, secondary border

## Gherkin Requirements

```gherkin
Feature: Groove — DJ / Music Events Template

  Background:
    Given the template is loaded at the root URL
    Then the page title contains "Groove"
    And the Component Dock footer link is visible

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo "Groove." is visible in the top-left
    And navigation links "Home", "Shows", "Events", "About", "Contact" are visible
    And on mobile viewports a hamburger menu button is visible

  Scenario: Hero section displays DJ content
    Given the hero section is in the viewport
    Then a DJ performer image is visible on the left
    And the headline "DJ Kathy Music Fest" is displayed
    And a paragraph about events is shown
    And a "Join Us" outline button with gold border is visible

  Scenario: Featured Events shows 3 event cards
    Given the featured events section is scrolled into view
    Then the heading "Featured Events" is visible
    And 3 event cards are displayed in a row
    And each card has an image, date badge, title, description, and Info link

  Scenario: Event date badge displays correctly
    Given an event card is visible
    Then the date badge shows the day and month
    And the badge is a gold circle overlay on the image

  Scenario: Upcoming Events masonry grid renders
    Given the upcoming events section is scrolled into view
    Then the heading "Upcoming Events" is visible
    And an asymmetric grid of 3 items is displayed
    And each item shows "Classic Songs For Classic People" as overlay text

  Scenario: Upcoming Events hover effect
    Given an upcoming event item is hovered
    Then a gold overlay covers the image
    And the text remains readable

  Scenario: About section renders with video
    Given the about section is scrolled into view
    Then the heading "We Love Music" is visible
    And a video thumbnail with play button overlay is on the left
    And description text is on the right
    And a "Join Us" solid gold button is visible

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then "About Us" section with description is visible
    And "Navigations" links (Home, DJs, News, Top 20 of the week) are present
    And "Follow Us" social icons (Facebook, Twitter, Instagram, LinkedIn) are visible
    And "Subscribe" email form with input and button is present
    And "Watch Video" thumbnail with play button is visible
    And a link to "https://www.componentdock.com/" is present

  Scenario: Subscribe form is functional
    Given the subscribe form in the footer is visible
    When the user enters an email address in the input field
    And clicks the "Subscribe" button
    Then the form attempts submission

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And event cards stack vertically
    And the footer columns stack vertically
    And the hero section stacks image above text
```

## Verification Checklist

- [ ] All 6 sections render in correct page order
- [ ] Brand color `#e4ae50` (gold) used for buttons, accents, date badges
- [ ] Montserrat font loaded for all text
- [ ] Hero section has dark background with DJ image + headline + CTA
- [ ] Featured Events shows 3 cards with image, date badge, title, Info link
- [ ] Date badges are gold circular overlays
- [ ] Upcoming Events masonry grid with 1 large + 2 stacked items
- [ ] Gold hover overlay on upcoming events
- [ ] About section has video thumbnail + "We Love Music" heading + CTA
- [ ] Footer has 3 columns: about/nav, social/subscribe, video
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger on mobile, stacked columns, stacked hero
- [ ] Pill-shaped buttons (border-radius: 30px) with gold color
- [ ] Placeholder images via `picsum.photos/seed/groove-<n>/...`
