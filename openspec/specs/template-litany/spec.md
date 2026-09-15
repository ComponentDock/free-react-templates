# Template: Litany (Church / Religious)

## Purpose

Recreation of ColorLib's **Faith 2** template — a church landing page with event countdown, hero slider, ministries, sermons, and donation flow.

- **Source**: https://colorlib.com/wp/template/faith-2/
- **Preview**: https://preview.colorlib.com/theme/faith-2/ (unreachable at prep time — falling back to screenshot)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/faith2-free-template.jpg
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package**: `@free-react-templates/litany`
- **App folder**: `apps/litany`
- **Deploy target**: `litany.free.componentdock.com`

## Design tokens (extracted from preview screenshot)

| Token | Value | Notes |
|---|---|---|
| Font family | Jost (or similar geometric sans-serif) | Clean, modern headings; body uses system fallback |
| Brand brown | `#b39a7a` | Primary accent — CTA button, date badges, nav highlight |
| Gold/brown alt | `#c2a67c` | Countdown number highlight, secondary accent |
| Top bar bg | `#1a1a1a` | Near-black for event countdown bar |
| Top bar text | `#ffffff` | White text on dark bar |
| Countdown accent | `#c9a96e` | Golden color for countdown numbers |
| Header bg | `#ffffff` | Clean white sticky header |
| Nav link color | `#1a1a1a` | Dark text on white header |
| Hero heading | `#ffffff` | White bold heading on hero overlay |
| Hero subtitle | `#ffffff` | White text, lighter weight |
| Hero date badge bg | `#b39a7a` | Brown badge with white text |
| Info box bg | `rgba(0,0,0,0.5)` | Semi-transparent black for "Sunday Worship" box |
| CTA button bg | `#b39a7a` | Brown/tan "Send Donations" button |
| CTA button text | `#ffffff` | White on brown |
| Button radius | `4px` | Slightly rounded corners (not pill) |
| Hero overlay | `rgba(0,0,0,0.4)` | Dark overlay on hero image |
| Slide arrows | Semi-transparent bg with white arrow | Left/right carousel navigation |
| Slide indicators | `01. 02. 03.` text format | Bottom-right numbered dots |

## Section structure (order from preview DOM)

1. **Top Bar** — Black background, event countdown timer ("Next Big Event: X Days Y Hours Z Minutes W Seconds"), golden numbers, centered text.
2. **Header** — White sticky bar: cross icon + "Faith" logo left, nav links center (Home, Pagos/dropdown, Ministries, Sermons, Contact), search icon, "Send Donations" brown CTA button right. Mobile hamburger menu.
3. **Hero Slider** — Full-width image carousel (multiple slides), dark overlay, date badge ("July 2018" in brown), subtitle ("Let God guide your path"), large heading ("Children Camp"), description paragraph, slide indicators bottom-right, left/right arrow navigation, "Sunday Worship: 10:30 AM" info box top-right.
4. **(Below fold — to be confirmed from full page)** Expected sections for church template: About/Welcome, Ministries grid, Upcoming Events, Sermons/Featured message, Pastors/Team, Gallery/Photos, Contact/Visit info, Footer.

## Gherkin requirements

```gherkin
Feature: Litany church landing page

  Background:
    Given the user is on the Litany homepage

  Scenario: Top event countdown bar displays
    Then a dark bar is visible at the top of the page
    And the text "Next Big Event:" is displayed
    And countdown numbers for days, hours, minutes, and seconds are shown
    And the countdown numbers are styled in golden/brown color

  Scenario: Header navigation renders correctly
    Then the logo with cross icon and "Faith" text is visible in the top-left
    And navigation links "Home", "Ministries", "Sermons", "Contact" are visible
    And a search icon is visible
    And a "Send Donations" button with brown background is visible
    And the header has a white background

  Scenario: Hero slider renders with content
    Then a full-width hero image is displayed with a dark overlay
    And a date badge with brown background is visible (e.g. "July 2018")
    And a subtitle text is visible above the heading
    And a large bold heading is visible (e.g. "Children Camp")
    And a description paragraph is visible below the heading
    And slide indicators ("01. 02. 03.") are visible at bottom-right
    And left/right arrow navigation controls are visible

  Scenario: Hero info box displays worship time
    Then a semi-transparent info box is visible in the top-right of the hero
    And it contains text like "Sunday Worship: 10:30 AM"

  Scenario: Navigation links are interactive
    When the user hovers over a navigation link
    Then the link color changes to brown/accent

  Scenario: Hero slides advance
    When the user clicks the right arrow
    Then the next slide is displayed with a different image and heading
    And the slide indicators update to highlight the current slide

  Scenario: Mobile responsiveness
    When the viewport is narrower than 768px
    Then the navigation collapses to a hamburger menu
    And the hero text size decreases
    And the countdown bar text wraps appropriately
    And sections stack vertically

  Scenario: Footer renders correctly
    Then the footer displays church information
    And social media icons are visible
    And a "Component Dock" attribution link is present

  Scenario: All interactive elements are accessible
    Then all buttons have visible focus indicators
    And all images have descriptive alt text
    And navigation links are keyboard-focusable
```

## Verification checklist

- [ ] Top bar renders with event countdown timer (days, hours, minutes, seconds)
- [ ] Countdown numbers display in golden/brown accent color
- [ ] Header is sticky with white background, cross logo, nav links, search, CTA button
- [ ] Hero slider renders with dark overlay, date badge, subtitle, heading, description
- [ ] "Sunday Worship" info box appears top-right on hero
- [ ] Slide indicators show "01. 02. 03." format at bottom-right
- [ ] Left/right arrow navigation works on hero slider
- [ ] Brand brown (#b39a7a) used consistently for CTA buttons, date badges, accents
- [ ] Font is clean sans-serif (Jost or similar) throughout
- [ ] Button has slight border-radius (4px, not pill-shaped)
- [ ] Mobile responsive: hamburger menu, stacked sections, wrapped countdown
- [ ] Footer has Component Dock attribution
- [ ] No ColorLib references in app code
- [ ] CNAME set to litany.free.componentdock.com
