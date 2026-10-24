# Template: Gloria (Church)
<!-- prep-status: shipped-as=sprout -->
> **SHIPPED-UNDER** — the ColorLib `spring` design this prep describes already
> ships as `apps/sprout` (<https://sprout.free.componentdock.com>).
> Do not scaffold `apps/gloria`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-sprout/spec.md`.

## Purpose

Recreation of the ColorLib "Spring" church template as a single-page React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **Source**: https://colorlib.com/wp/template/spring/
- **Preview**: https://preview.colorlib.com/theme/spring/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/spring-free-template.jpg
- **Category**: Church
- **Stack**: React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Naming**: "Spring" → "Gloria" (new original name, never reuse ColorLib source)

## Design tokens

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| brand-primary | `#c7b198` | Warm tan — primary button fill, CTA accents |
| brand-secondary | `#b59877` | Darker tan — hover state, secondary accents |
| dark-bg | `#000000` | Navbar background, dark overlay, black buttons |
| light-bg | `#f8f9fa` | Alternate section backgrounds (bg-light) |
| white | `#ffffff` | White buttons, card backgrounds |
| body-text | `#212529` | Primary text color |
| muted-text | `#6c757d` | Secondary/muted text |
| overlay | `rgba(0,0,0,0.4–0.5)` | Hero and section background-image overlays |

### Typography
| Element | Font | Weight | Source |
|---------|------|--------|--------|
| Headings | Poppins | 300–700 | Google Fonts via `<link>` |
| Body text | Raleway | 300–700 | Google Fonts via `<link>` |
| Verse / serif accents | Crimson Text | 400 | Google Fonts via `<link>` |

### Buttons
- **Primary** (`.btn-primary`): bg `#c7b198`, text white, border `#c7b198`, transparent bg on hover with `#c7b198` text
- **White** (`.btn-white`): bg white, text black, border white; hover inverts to black bg/white text
- **Black** (`.btn-black`): bg black, text white, border black; hover shows `#c7b198` border
- **Shape**: Bootstrap 4 rounded (`border-radius: 0.25rem`)
- **Padding**: `py-3 px-4` (hero CTAs), `px-4 py-3` (sermon buttons)

### Section backgrounds
| Section | Background |
|---------|-----------|
| Hero | Full-width background image (`bg_1.jpg`) with dark overlay |
| Intro (Upcoming Events) | Background image (`bg_4.jpg`) with dark overlay |
| Daily Verse | `bg-light` (#f8f9fa), centered |
| Church Services | White (default) |
| Sermon for Today | `bg-light` |
| About / Counters | White, left image + right content split |
| Testimony | Full-width background image (`bg_3.jpg`) with dark overlay |
| Upcoming Events | White (default), no padding top |
| Blog | `bg-light` |
| Footer | Dark (#343a40 / ftco-bg-dark) |

## Requirements

### Navbar

#### Scenario: Navbar renders with brand and navigation links

- **GIVEN** the page loads
- **THEN** the navbar displays brand "Gloria" on a dark background
- **AND** social icons (Twitter, Facebook, Instagram) are shown
- **AND** navigation links include: Home, About, Ministries, Sermons, Events, Blog, Contact
- **AND** the navbar is sticky/fixed on scroll

#### Scenario: Mobile hamburger menu toggles navigation

- **GIVEN** the viewport width is less than 992px
- **WHEN** the user clicks the hamburger toggle
- **THEN** the navigation links are revealed

### Hero Section

#### Scenario: Hero displays headline and CTAs

- **GIVEN** the hero section renders
- **THEN** a full-width background image is displayed with a dark overlay
- **AND** the heading reads "Helping Grow Your Faith"
- **AND** a subheading is shown below the heading
- **AND** two CTA buttons appear: "New here!" (primary tan) and "Live Stream" (white)

### Upcoming Events Intro

#### Scenario: Events intro shows countdown and event details

- **GIVEN** the upcoming events intro section renders
- **THEN** a background image with dark overlay is shown
- **AND** a heading displays "Upcoming Events"
- **AND** an event quote/pastor name is shown
- **AND** a countdown timer is displayed (days, hours, minutes, seconds)
- **AND** a "Join our event" CTA button appears

### Daily Verse

#### Scenario: Daily verse section displays scripture

- **GIVEN** the daily verse section renders
- **THEN** it displays on a light background
- **AND** a Bible icon is shown
- **AND** a scripture quote is displayed
- **AND** the attribution (book/chapter:verse) is shown

### Church Services

#### Scenario: Services section shows 6 service items in two columns

- **GIVEN** the church services section renders
- **THEN** a heading "Church Services" is displayed
- **AND** 6 service items are shown in a 2-column layout (3 per column)
- **AND** left column items have icon on right: Daily Prayers, Church Community, Teaching
- **AND** right column items have icon on left: Helpers, Wedding, Events
- **AND** each item has an icon, title, and description

### Sermon for Today

#### Scenario: Sermon section shows featured sermon with video

- **GIVEN** the sermon section renders on a light background
- **THEN** a heading "Sermon for Today" with subheading is displayed
- **AND** a split layout shows: left image, right text content
- **AND** the sermon title, speaker, categories, and date are shown
- **AND** "Watch Sermons" (primary tan) and "Download Sermons" (black) buttons appear

### About / Counter Section

#### Scenario: About section shows church info and stats

- **GIVEN** the about section renders
- **THEN** the left side shows two stacked images (Sunday Services, Announcement)
- **AND** the right side shows heading "About" with description text
- **AND** 4 stat counters are displayed: Members (70,000), Pastors (1,000), Donation (100,000), Churches (100)
- **AND** each counter has an icon, number, and label

### Testimony Section

#### Scenario: Testimony carousel shows member quotes

- **GIVEN** the testimony section renders
- **THEN** a full-width background image with dark overlay is shown
- **AND** a heading "Inspirational Testimony" is displayed
- **AND** a carousel of testimonies is shown
- **AND** each testimony has: avatar image, quote, member name, and position

### Upcoming Events Detail

#### Scenario: Events detail section shows event listings and sidebar

- **GIVEN** the events detail section renders
- **THEN** a heading "Upcoming Events" with subheading is displayed
- **AND** 2 event cards are shown with image + text side by side
- **AND** each event has: title, date/time, location, address, and "Read more" button
- **AND** a sidebar shows "Recent Sermons" with: featured sermon card + 2 recent sermon list items

### Blog Section

#### Scenario: Blog section shows recent posts

- **GIVEN** the blog section renders on a light background
- **THEN** a heading "Recent Blog" is displayed
- **AND** 3 blog cards are shown in a row
- **AND** each card has: cover image, date overlay (day/month/year), title, and excerpt

### Footer

#### Scenario: Footer displays church info and links

- **GIVEN** the footer renders with dark background
- **THEN** 4 columns are shown: Church name + description + social links, About links, Connect links, Service Hours
- **AND** social icons (Twitter, Facebook, Instagram) are in the first column
- **AND** the footer links to Component Dock

## Verification checklist

- [ ] Navbar: dark background, brand name "Gloria", social icons, nav links, mobile responsive
- [ ] Hero: background image, overlay, headline, subheading, 2 CTA buttons
- [ ] Upcoming Events Intro: background image, overlay, countdown timer, CTA
- [ ] Daily Verse: light bg, Bible icon, scripture quote, attribution
- [ ] Church Services: 2 columns, 6 items total, icon + title + description per item
- [ ] Sermon for Today: light bg, split layout, sermon info, 2 action buttons
- [ ] About: split layout, 4 counters, image panels
- [ ] Testimony: background image, carousel, avatar + quote per item
- [ ] Upcoming Events Detail: 2 event cards, sidebar with recent sermons
- [ ] Blog: light bg, 3 cards with date overlay
- [ ] Footer: dark bg, 4 columns, Component Dock link
- [ ] All buttons: correct colors (#c7b198 primary, #000 black, #fff white)
- [ ] Typography: Poppins headings, Raleway body, Crimson Text for verse
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
