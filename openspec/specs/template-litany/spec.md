# Template: Litany (Church / Religious)

## Purpose

Recreation of ColorLib's **Faith 2** template — a church landing page with event countdown, hero slider, ministries, sermons, and donation flow.

- **Source**: https://colorlib.com/wp/template/faith-2/
- **Preview**: https://preview.colorlib.com/theme/faith-2/ (unreachable at prep time — falling back to screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/faith2-free-template.jpg
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package**: `@free-react-templates/litany`
- **App folder**: `apps/litany`
- **Deploy target**: `litany.free.componentdock.com`

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/faith2/` — HTTP 200, 41,374 B, title `Faith - Church Template | Home`.
>
> Sheet: `https://preview.colorlib.com/theme/faith2/style.css` (47,584 B).
> Colours that sheet actually paints: `#ac8a74` ×69, `#1b1b1b` ×25, `#eff4f6` ×12.
> Faces it actually declares: `Poppins`.
> The recorded brand `#b39a7a` occurs nowhere in it: the values below are screenshot samples, not measurements — `docs/replication.md` makes the sheet canonical.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

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

## Requirements

### Feature: Litany template behaviour

Feature: Litany church landing page

Background:
- **GIVEN** the user is on the Litany homepage

#### Scenario: Top event countdown bar displays

- **THEN** a dark bar is visible at the top of the page
- **AND** the text "Next Big Event:" is displayed
- **AND** countdown numbers for days, hours, minutes, and seconds are shown
- **AND** the countdown numbers are styled in golden/brown color

#### Scenario: Header navigation renders correctly

- **THEN** the logo with cross icon and "Faith" text is visible in the top-left
- **AND** navigation links "Home", "Ministries", "Sermons", "Contact" are visible
- **AND** a search icon is visible
- **AND** a "Send Donations" button with brown background is visible
- **AND** the header has a white background

#### Scenario: Hero slider renders with content

- **THEN** a full-width hero image is displayed with a dark overlay
- **AND** a date badge with brown background is visible (e.g. "July 2018")
- **AND** a subtitle text is visible above the heading
- **AND** a large bold heading is visible (e.g. "Children Camp")
- **AND** a description paragraph is visible below the heading
- **AND** slide indicators ("01. 02. 03.") are visible at bottom-right
- **AND** left/right arrow navigation controls are visible

#### Scenario: Hero info box displays worship time

- **THEN** a semi-transparent info box is visible in the top-right of the hero
- **AND** it contains text like "Sunday Worship: 10:30 AM"

#### Scenario: Navigation links are interactive

- **WHEN** the user hovers over a navigation link
- **THEN** the link color changes to brown/accent

#### Scenario: Hero slides advance

- **WHEN** the user clicks the right arrow
- **THEN** the next slide is displayed with a different image and heading
- **AND** the slide indicators update to highlight the current slide

#### Scenario: Mobile responsiveness

- **WHEN** the viewport is narrower than 768px
- **THEN** the navigation collapses to a hamburger menu
- **AND** the hero text size decreases
- **AND** the countdown bar text wraps appropriately
- **AND** sections stack vertically

#### Scenario: Footer renders correctly

- **THEN** the footer displays church information
- **AND** social media icons are visible
- **AND** a "Component Dock" attribution link is present

#### Scenario: All interactive elements are accessible

- **THEN** all buttons have visible focus indicators
- **AND** all images have descriptive alt text
- **AND** navigation links are keyboard-focusable

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
