# Template: Meetuply (Event Conference Landing)

## Purpose

Recreation of ColorLib's **Eventalk** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **ColorLib source:** https://colorlib.com/wp/template/eventalk/
- **Preview URL:** https://preview.colorlib.com/theme/eventalk/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/eventalk-free-template.jpg
- **New name:** `meetuply` (package: `@free-react-templates/meetuply`)
- **Deploy target:** `meetuply.free.componentdock.com`

## Design tokens (extracted from preview stylesheet `css/style.css`)

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#6b76ff` | Purple-blue — links, CTA buttons, accents, gradient start |
| Brand gradient | `linear-gradient(45deg, #6b75ff 0%, #59b7ff 100%)` | Hero overlay gradient, CTA sections |
| Dark charcoal | `#222831` | Footer background, dark sections |
| Dark brown | `#3c312e` | Testimony/parallax section background |
| White | `#fff` | Section backgrounds, text on dark |
| Light gray | `#f2f2f2` | Alternate section background |
| Body text | `#4d4d4d` | Paragraph text |
| Button accent | `#78d5ef` | Bootstrap primary button (light blue) |
| Font family | `"Work Sans", sans-serif` | All text (weights 100-900) |
| Button radius | `2px` | CTA buttons, navbar "Buy Ticket" |
| Navbar CTA border | `1px solid #6b76ff` | Navbar "Buy ticket" button border |
| Link color | `#6b76ff` | Anchor text color, hover state |

### Section backgrounds

| Section | Background |
|---------|-----------|
| Navbar | Dark transparent (fixed, `.ftco-navbar-light`) |
| Hero | Full-viewport background image + purple-blue gradient overlay |
| About (Venue) | White `#fff` |
| Features (Fun Facts) | White `#fff` |
| Counters | White `#fff` |
| Speakers | White `#fff` |
| Schedule | Light gray `#f2f2f2` |
| Testimony | Dark brown `#3c312e` with parallax |
| Pricing | White `#fff` |
| Blog | Light gray `#f2f2f2` |
| Newsletter CTA | Dark brown `#3c312e` with parallax |
| Footer | Dark charcoal `#222831` |

### Section title pattern

Two-line heading pattern: first word in light/thin weight on its own line, second word in bold below. Example: "Our / Speakers", "Schedule / Event", "Recent / Blog".

## Gherkin requirements

```gherkin
Feature: Meetuply — Event Conference Landing Page

  Background:
    Given the user visits "meetuply.free.componentdock.com"
    And the page has loaded completely

  Scenario: Navbar displays correctly
    Then the navbar is visible at the top
    And it contains the brand "Meetuply" (or logo text)
    And it contains links: "Home", "About", "Speakers", "Schedule", "Blog", "Contact"
    And there is a "Buy ticket" CTA button in the navbar
    And the CTA button has a purple-blue border and background (#6b76ff)

  Scenario: Hero section fills viewport
    Then the hero section is full viewport height
    And it displays a large heading (e.g. "Developer Conference 2019")
    And it displays a date/location subtext
    And it has a background image with a purple-blue gradient overlay
    And there is a countdown timer showing days, hours, minutes, seconds

  Scenario: Venue/About section
    When the user scrolls to the About section
    Then the section title shows "Venue" (or similar)
    And 4 feature cards are displayed: Venue, Transport, Hotel, Restaurant
    And each card has an icon and description text

  Scenario: Fun Facts section
    When the user scrolls to the Fun Facts section
    Then the section title shows "Fun Facts"
    And there is a descriptive paragraph

  Scenario: Counter statistics
    When the user scrolls to the counters section
    Then 4 statistic counters are visible: Speakers, Sponsor, Total Seats, Topics
    And each counter shows an animated count-up number

  Scenario: Speakers section
    When the user scrolls to the Speakers section
    Then the section title shows "Our Speakers"
    And speaker cards are displayed in a grid
    And each card has an image, name, and role

  Scenario: Schedule section
    When the user scrolls to the Schedule section
    Then the section title shows "Schedule" with "Event Schedule" subtitle
    And there are day tabs (Day 01, Day 02, Day 03, Day 04)
    And each day shows time slots with talk title, description, and speaker

  Scenario: Testimony section
    When the user scrolls to the Testimony section
    Then it has a dark background with parallax effect

  Scenario: Pricing section
    When the user scrolls to the Pricing section
    Then pricing cards are displayed
    And each card has a price, feature list, and "Buy Ticket" button
    And there are at least 2 pricing tiers (e.g. Small Team $200, Family Pack $499)

  Scenario: Blog section
    When the user scrolls to the Blog section
    Then the section title shows "Recent Blog"
    And blog entry cards are displayed with date, title, and excerpt

  Scenario: Newsletter CTA
    When the user scrolls to the newsletter section
    Then there is a "Subscribe to our Newsletter" heading
    And an email input field is present
    And a submit button is present

  Scenario: Footer displays correctly
    Then the footer has a dark background (#222831)
    And it contains the brand name "Meetuply"
    And it has a "Useful Links" column with navigation links
    And it has a "Have a Questions?" column with contact info
    And it has social media icon links
    And it links to https://www.componentdock.com/

  Scenario: Mobile responsiveness
    Then the navbar collapses to a hamburger menu on small screens
    And all sections stack vertically on mobile
    And the schedule tabs are scrollable or stacked on mobile

  Scenario: Accessibility
    Then all images have alt text
    And interactive elements are keyboard-focusable
    And the page has proper heading hierarchy (h1 > h2 > h3)
    And color contrast meets WCAG AA for text on backgrounds
```

## Verification checklist

- [ ] All design tokens match the original (brand color #6b76ff, font Work Sans, button radius 2px)
- [ ] Section order matches the original exactly: Navbar → Hero → Venue → Fun Facts → Counters → Speakers → Schedule → Testimony → Pricing → Blog → Newsletter → Footer
- [ ] Navbar is fixed/sticky with dark background, brand, nav links, and "Buy ticket" CTA
- [ ] Hero section is full viewport height with background image and gradient overlay
- [ ] Countdown timer displays and counts down correctly
- [ ] Venue section shows 4 feature cards with icons
- [ ] Counter statistics animate on scroll into view (count-up effect)
- [ ] Speaker cards display in a responsive grid with image, name, role
- [ ] Schedule section has tabbed day navigation with talk listings
- [ ] Pricing cards show tier details and "Buy Ticket" CTA
- [ ] Blog entries show date, title, and excerpt in a grid
- [ ] Newsletter section has email input and subscribe button
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
- [ ] No ColorLib references in app code (comments, data, etc.)
- [ ] Placeholder images use `https://picsum.photos/seed/<meetuply>-<n>/<w>/<h>`
- [ ] Google Fonts loaded via `<link>` in index.html (Work Sans)
- [ ] Icons from lucide-react (not Font Awesome)
- [ ] 100% test coverage on all components
