# Template: ConfPeak (Event / Conference)

## Purpose

Recreation of ColorLib's **Eventalk** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** [colorlib.com/wp/template/eventalk/](https://colorlib.com/wp/template/eventalk/)
- **Preview:** [preview.colorlib.com/theme/eventalk/](https://preview.colorlib.com/theme/eventalk/)
- **Screenshot:** `eventalk-free-template.jpg` (fallback reference — browser unavailable during prep)
- **App name:** `confpeak`
- **Package:** `@free-react-templates/confpeak`
- **Deploy:** `https://confpeak.free.componentdock.com`

## Design tokens (extracted from live preview)

| Token | Value | Notes |
|-------|-------|-------|
| Primary brand | `#6b75ff` | Indigo-purple, used in CTA button, parallax, hero gradient |
| Secondary brand | `#59b7ff` | Light blue, gradient end in hero overlay |
| Button accent | `#78d5ef` | Light cyan (btn-primary default) |
| CTA button | `#6b76ff` bg, `#fff` text, `border-radius: 2px` | Navbar "Buy ticket" CTA |
| Hero overlay | Gradient 45deg: `#6b75ff` → `#59b7ff` at 8% opacity | Dark bg image with gradient overlay |
| Footer bg | `#222831` | Dark charcoal |
| Footer text | `#fff` | White on dark |
| Section bg (light) | `#f8f9fa` | Bootstrap bg-light |
| Navbar | `bg-dark` (`#343a40`) | Dark navbar, white text |
| Font family | `"Work Sans"` | Sans-serif, weights 100-900 |
| Button border-radius | `0.25rem` (default), `2px` (CTA) | Slightly rounded |
| Heading color | `#212529` | Dark, near-black |
| Section separator | Parallax image with `#6b76ff` solid bg fallback | Newsletter section |

## Section structure (1:1 from preview)

1. **Navbar** — Dark (`bg-dark`), brand "ConfPeak." with accent span, nav links: Home, About, Speakers, Schedule, Blog, Contact, CTA "Buy ticket" button
2. **Hero** — Full-height (`js-fullheight`), background image with gradient overlay, headline "Developer Conference 2019", subtext "December 21-24, 2019. Paris, Italy", countdown timer (days, hours, minutes, seconds)
3. **Services** — 4-column grid on `bg-light`: Venue, Transport, Hotel, Restaurant — each with icon + title + description
4. **Counter** — Parallax/image background, 4 stat counters: 850 (Happy Delegates), 150 (Our Speakers), 340 (Hours Events), 2500 (Our Sponsor)
5. **Speakers carousel** — 5 speakers in owl-carousel: John Adams, Paul George, James Smith, Angelie Crawford, Jackie Spears — each with photo, name, role, social links (Twitter, Facebook, Instagram)
6. **Schedule** — Tabbed (About/Speakers/Schedule/Blog/Contact) with tab panels, each containing 3 speaker-wrap items with image + talk title + speaker name
7. **Testimonials** — Carousel with user testimonials: photo, quote, name
8. **Pricing** — 3-column pricing cards: Personal ($85), Small Team ($200), Family Pack ($499) — each with "Enjoy All Features" and Buy Ticket CTA
9. **Blog** — 3-column blog entries: image, title "Why Lead Generation is Key for Business Growth", date, share count
10. **Newsletter/Subscribe** — Parallax background, heading "Subscribe to our Newsletter", email input + submit button
11. **Gallery** — 4-column icon grid: camera, map-marker, gift, music icons with image backgrounds
12. **Footer** — Dark (`#222831`) with 4 widgets: Brand name + description, Useful Links, Privacy, Questions + address

## Gherkin scenarios

```gherkin
Feature: ConfPeak Event Conference Template

  Background:
    Given the ConfPeak app is loaded at the root URL
    And the browser viewport is desktop-sized (>= 1024px)

  # --- Navbar ---
  Scenario: Navbar displays brand and navigation
    Then I should see a dark navbar with the brand text "ConfPeak"
    And the brand should have an accent-colored span on the second word
    And I should see nav links: Home, About, Speakers, Schedule, Blog, Contact
    And I should see a "Buy ticket" CTA button with primary brand color

  Scenario: Navbar scrolls to dark background
    When I scroll down past 50px
    Then the navbar should have a solid dark background (scrolled state)

  # --- Hero ---
  Scenario: Hero section shows conference info
    Then I should see a full-height hero section with a background image
    And I should see an overlay with a purple-to-blue gradient
    And I should see the headline "Developer Conference 2019"
    And I should see the date "December 21-24, 2019. Paris, Italy"
    And I should see a countdown timer with days, hours, minutes, seconds

  # --- Services ---
  Scenario: Services section shows 4 items
    Then I should see a services section with light background
    And I should see 4 service cards in a row: Venue, Transport, Hotel, Restaurant
    And each card should have an icon, title, and description text

  # --- Counter ---
  Scenario: Counter section shows stats
    Then I should see a counter section with a background image
    And I should see 4 stat counters: "850" Happy Delegates, "150" Our Speakers, "340" Hours Events, "2500" Our Sponsor
    And each counter should have an icon and a label

  # --- Speakers ---
  Scenario: Speakers carousel displays speaker cards
    Then I should see a speakers carousel section
    And I should see 5 speaker cards each with a photo, name, role, and social links
    And social links should include Twitter, Facebook, and Instagram icons

  # --- Schedule ---
  Scenario: Schedule section shows tabbed content
    Then I should see a schedule section with tab navigation
    And the tabs should be: About, Speakers, Schedule, Blog, Contact
    And the first tab should be active by default
    And each tab panel should show 3 items with image, title, and speaker name

  Scenario: Clicking schedule tabs switches content
    When I click the "Speakers" tab
    Then the Speakers tab panel should become visible
    And the About tab panel should be hidden

  # --- Testimonials ---
  Scenario: Testimonials carousel shows user quotes
    Then I should see a testimonials section
    And I should see testimonial cards with a user photo, quote text, and user name

  # --- Pricing ---
  Scenario: Pricing section shows 3 tiers
    Then I should see a pricing section with light background
    And I should see 3 pricing cards: Personal ($85), Small Team ($200), Family Pack ($499)
    And each card should have "Enjoy All Features" text and a "Buy Ticket" button

  # --- Blog ---
  Scenario: Blog section shows 3 entries
    Then I should see a blog section with light background
    And I should see 3 blog entry cards with an image, title, date, and share count
    And each card should show "Why Lead Generation is Key for Business Growth" as the title

  # --- Newsletter ---
  Scenario: Newsletter section has email input
    Then I should see a newsletter section with a parallax background
    And I should see heading "Subscribe to our Newsletter"
    And I should see an email input field and a submit button

  # --- Gallery ---
  Scenario: Gallery shows icon grid
    Then I should see a gallery section with 4 columns
    And each column should show an icon (camera, map-marker, gift, music) with an image background

  # --- Footer ---
  Scenario: Footer displays brand info and links
    Then I should see a dark footer with background color #222831
    And I should see the brand name "ConfPeak"
    And I should see footer widgets with Useful Links, Privacy, and Questions sections
    And I should see a "Made with Component Dock" link pointing to componentdock.com

  # --- Responsive ---
  Scenario: Mobile layout collapses navbar
    Given the browser viewport is mobile-sized (< 768px)
    Then the navbar should show a hamburger toggle button
    And the nav links should be hidden until the toggle is clicked

  Scenario: Mobile layout stacks columns
    Given the browser viewport is mobile-sized (< 768px)
    Then the services section should stack vertically
    And the pricing cards should stack vertically
    And the blog entries should stack vertically
```

## Verification checklist

- [ ] Navbar: dark bg, brand with accent span, 7 nav items including CTA button
- [ ] Hero: full-height, background image, gradient overlay, countdown timer
- [ ] Services: 4 items with icons, bg-light, responsive grid
- [ ] Counter: background image, 4 animated counters
- [ ] Speakers: carousel with 5 speakers, social links
- [ ] Schedule: tabbed interface, 3 items per tab
- [ ] Testimonials: carousel with photos and quotes
- [ ] Pricing: 3 tiers with price, features, CTA
- [ ] Blog: 3 cards with images, dates, share counts
- [ ] Newsletter: parallax bg, email input, submit
- [ ] Gallery: 4 icon columns with images
- [ ] Footer: dark bg, 4 widgets, Component Dock link
- [ ] Responsive: mobile nav, stacked columns
- [ ] Tokens: Work Sans font, #6b75ff primary, #222831 footer, #f8f9fa bg-light
