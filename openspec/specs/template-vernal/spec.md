# Template: Vernal (Church Website)

## Purpose

Vernal is a single-page church website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Spring" free
template (source: https://colorlib.com/wp/template/spring/), built under a
DIFFERENT name (**Vernal**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 multi-section church site with parallax
background images, an events countdown, a daily Bible verse, church services
grid, featured sermon with video, stat counters, testimony carousel, upcoming
events list, a recent sermons sidebar, a 3-column blog grid, a photo gallery
with map, a newsletter parallax section, and a 4-column dark footer. The
design palette uses warm tan (`#c7b198`) as the brand accent on a light/white
base with dark overlay parallax sections. Typography stacks Raleway (primary),
Poppins (secondary/body), and Crimson Text (serif display).

**Source slug:** `spring`
**Preview URL:** https://preview.colorlib.com/theme/spring/

## Naming

The ColorLib source name "Spring" is FORBIDDEN as the app name. The
recreation uses the name **Vernal** (single lowercase word, kebab-case
`vernal`, no collision with existing apps or spec folders).

- App folder: `apps/vernal`
- Package: `@free-react-templates/vernal`
- Deploy: `https://vernal.free.componentdock.com`
- Source provenance: recorded ONLY in this spec and TEMPLATES.md — no
  `colorlib` references in app code.

## Design reference (replication findings)

### Screenshot analysis

Browsed the TEMPLATES.md preview image. The design shows:
- Dark navbar with "Spring Church" branding and social icons (twitter,
  facebook, instagram) in the top-right area. Hamburger menu on mobile.
- Full-viewport parallax hero with a dark overlay, white serif headline
  "Helping Grow Your Faith" and subheading. Two CTA buttons: "New here!"
  (filled tan) and "Live Stream" (white outline with play icon). A scroll
  indicator mouse icon at the bottom.
- Events countdown strip with parallax background, calendar icon, sermon
  title, countdown timer digits, and "Join our event" button.
- Light-background daily Bible verse section with a bible icon and
  centered quoted text (John 3:16).
- Church Services section: 2-column grid of 6 service items (Daily Prayers,
  Church Community, Teaching, Helpers, Wedding, Events), each with a
  circular icon and description.
- Sermon for Today: split layout — left half is a sermon image, right half
  has sermon title, metadata (speaker, categories, date), and two buttons
  ("Watch Sermons" play icon, "Download Sermons" download icon).
- Counter/About section: 2-column — left has 2 stacked background images
  with overlay text ("Sunday Services", "Announcement"); right has "About
  Spring Church" heading, description, and 4 stat counters (70,000 Members,
  1,000 Pastors, 100,000 Donation, 100 Churches) in light boxes with bible
  icons.
- Testimony carousel: parallax background with dark overlay, "Inspirational
  Testimony" heading, owl-carousel of testimonies (avatar circle, quote,
  name, position).
- Upcoming Events + Recent Sermons: 8/4 column split — left shows 2 event
  cards with images and metadata; right sidebar has "Recent Sermons" with a
  featured sermon (image + title + metadata + watch/download buttons) and 2
  mini sermon rows with play icons and durations.
- Blog section: 3-column card grid with date overlay on images and title +
  excerpt.
- Gallery + Map: 2x2 photo grid (left half) with hover instagram icon
  overlay, Google Map (right half).
- Newsletter parallax: dark overlay section with heading, description, and
  email subscribe form (input + submit).
- Dark 4-column footer: brand + description + social icons, About links,
  Connect links, Service Hours. Component Dock credit line.

### Preview DOM (fetched 2026-09-16, HTTP 200)

The live preview at `https://preview.colorlib.com/theme/spring/` is a
Bootstrap 4 page (jQuery + various plugins). Section structure confirmed:

1. `<nav class="navbar navbar-dark">` — dark bg, brand "SpringChurch",
   social icon list, hamburger toggler, 7 nav links (Home, About,
   Ministries, Sermons, Upcoming Events, Blog, Contact).
2. `<div class="hero-wrap js-fullheight">` — parallax bg image
   (`bg_1.jpg`), overlay, centered h1 "Helping Grow Your Faith", subheading,
   two CTA buttons (btn-primary + btn-white with play icon), mouse scroll
   indicator.
3. `<section class="ftco-intro">` — parallax bg (`bg_4.jpg`), overlay,
   events headline with calendar icon, countdown timer (days/hours/minutes/
   seconds), "Join our event" btn-primary.
4. `<section class="ftco-daily-verse bg-light">` — bible icon, quoted
   John 3:16 KJV, attribution.
5. `<section class="ftco-section">` — "Spring Church Services" heading,
   2-column grid of 6 services (flaticon icons: praying, church, bible,
   social-care, rings, promotion).
6. `<section class="ftco-section bg-light">` — "Sermon for Today" heading,
   split sermon-wrap (image left, text right with title, metadata, watch/
   download buttons).
7. `<section class="ftco-counter">` — "About Spring Church" heading,
   2 stacked image panels (Sunday Services, Announcement), 4 counter blocks
   (Members, Pastors, Donation, Churches).
8. `<section class="testimony-section">` — parallax bg (`bg_3.jpg`),
   overlay, "Inspirational Testimony" heading, owl-carousel testimony items.
9. `<section class="ftco-section ftco-no-pt ftco-no-pb">` — "Upcoming
   Events" heading + 2 event wraps (image + text + meta + btn), sidebar
   `.subsermon` (featured sermon + mini sermon rows).
10. `<section class="ftco-section bg-light">` — "Recent Blog" heading,
    3-column blog-entry cards (block-20 bg images, topper date overlay,
    desc with title + excerpt).
11. `<section class="ftco-section ftco-gallery">` — 2x2 gallery grid
    (image-popup links with instagram hover icon), Google Map div.
12. `<section class="ftco-section-parallax bg-secondary">` — Newsletter
    parallax with overlay, heading, description, email subscribe form.
13. `<footer class="ftco-footer ftco-bg-dark">` — 4-column: brand +
    social icons, About links, Connect links, Service Hours. Copyright
    with Colorlib attribution (replaced with Component Dock credit).

## Design tokens

Extracted from `css/style.css` (2,990 lines) and the rendered preview.

| Token | Value | Notes |
| --- | --- | --- |
| Brand accent | `#c7b198` | Warm tan/beige — btn-primary override, subsermon sidebar bg, links |
| Brand dark | `#b59877` | Darker tan — secondary accent, hover states |
| Brand deep | `#3c312e` | Very dark brown — darker overlays, text accents |
| Page bg (default) | `#fff` / `#f8f9fa` | White body, light sections use `bg-light` (#f8f9fa) |
| Light alt | `#f2f2f2`, `#ebe3da` | Alternate light section backgrounds |
| Dark sections | `#171717`, `#000` | Footer, dark overlays |
| Dark overlay | `rgba(0,0,0,0.5)` typical | On parallax hero, events strip, testimony, newsletter |
| Text primary | `#000000` | Body text, headings |
| Text secondary | `#495057` | Muted text, meta |
| Bootstrap blue | `#007bff` | Default Bootstrap primary (overridden to #c7b198 in key spots) |
| Font primary | Raleway (100–900) | Headings, nav, body — Google Fonts via `<link>` |
| Font secondary | Poppins (300–900) | Supporting body text |
| Font display | Crimson Text (400, 400i) | Serif display — Bible verse quotes, testimonies |
| Button radius | 3px–5px | Mostly Bootstrap default (0.25rem = 4px); some 5px |
| Button primary | `#c7b198` fill, white text | Rounded, `py-3 px-4` on hero; `py-2 px-4` elsewhere |
| Button white | white fill, dark text | Outline/white variant in hero |
| Button black | `#000` fill, white text | Download button in sermon section |
| Counter blocks | `#f8f9fa` bg, rounded | Light cards with centered icons + numbers |
| Subsermon | `#c7b198` bg | Right sidebar panel |
| Social icons | White on transparent | Navbar + footer; 32px circles |
| Parallax | Background images + `rgba` overlay | hero, events strip, testimony, newsletter |
| Heading decorations | Uppercase, bordered | `heading-section` with line borders or spans |

## Requirements

### Requirement: Navigation bar

The template renders a dark sticky navbar with brand text, social icons,
and navigation links.

#### Scenario: Desktop navbar
Given the viewport is wider than 768px
When the page loads
Then the navbar displays with dark background
And the brand text shows "Vernal Church" (renamed from "Spring Church")
And social icons (twitter, facebook, instagram) appear in the top right
And 7 navigation links appear: Home, About, Ministries, Sermons, Events, Blog, Contact

#### Scenario: Mobile navbar
Given the viewport is 768px or narrower
When the page loads
Then the navbar shows a hamburger menu toggle button
And the nav links are hidden until the toggle is activated
And the social icons remain visible

#### Scenario: Navbar scroll behavior
When the user scrolls past the hero section
Then the navbar gains a scrolled state with a solid background
And the brand text becomes visible on a light background

### Requirement: Hero section

A full-viewport parallax hero with overlay, headline, subheading, two CTA
buttons, and a scroll indicator.

#### Scenario: Hero content
When the hero section renders
Then a background image fills the viewport with a dark overlay
And a centered white h1 reads "Helping Grow Your Faith"
And a subheading reads "Submit your presence to the creator of the universe"
And two buttons appear: "New here!" (primary tan) and "Live Stream" (white with play icon)
And a mouse scroll indicator appears at the bottom center

#### Scenario: Hero parallax
When the user scrolls the page
Then the hero background image moves at a slower rate (parallax effect)

### Requirement: Events countdown strip

A parallax strip showing the next upcoming event with a countdown timer.

#### Scenario: Events strip content
When the events strip renders
Then a parallax background image is displayed with a dark overlay
And a calendar icon appears with "Upcoming Events" heading
And a sermon/speaker title is shown
And a countdown timer displays days, hours, minutes, and seconds
And a "Join our event" button appears (primary tan)

#### Scenario: Countdown updates
Given the countdown timer is displayed
When time passes
Then the timer values decrease in real time (seconds decrement every second)

### Requirement: Daily Bible verse

A centered Bible verse quotation on a light background.

#### Scenario: Verse display
When the daily verse section renders
Then the section has a light background (`#f8f9fa`)
And a bible icon appears above the verse
And the verse text is quoted: John 3:16 KJV
And the attribution shows the book, chapter, verse, and translation

### Requirement: Church services grid

A 2-column grid of 6 service items, each with a circular icon, title,
and description.

#### Scenario: Services layout
When the services section renders
Then 6 service items display in a 2-column grid
And the items are: Daily Prayers, Church Community, Teaching, Helpers, Wedding, Events
And each item has a circular icon on one side and title + description on the other
And the left column items have icons on the right (order-lg-last)
And the right column items have icons on the left

#### Scenario: Service icons
Each service item uses a distinct lucide icon:
- Daily Prayers → Heart (or HandsPraying)
- Church Community → Church
- Teaching → BookOpen
- Helpers → Users
- Wedding → HeartHandshake (or Heart)
- Events → Calendar

### Requirement: Featured sermon

A split-layout section showcasing the latest sermon with image, metadata,
and action buttons.

#### Scenario: Sermon display
When the sermon section renders
Then a heading reads "Sermon for Today"
And a subheading reads "Experience God's Presence"
And a left panel shows a sermon image
And a right panel shows the sermon title, speaker name, categories, and date
And two action buttons appear: "Watch Sermons" (play icon) and "Download Sermons" (download icon)

#### Scenario: Watch button opens video
When the user clicks "Watch Sermons"
Then a modal or overlay opens with the sermon video

### Requirement: About / Counter section

A 2-column section with stacked image panels on the left and church
stats on the right.

#### Scenario: About layout
When the counter section renders
Then the left column shows 2 stacked image panels with text overlays ("Sunday Services", "Announcement")
And the right column shows "About Vernal Church" heading and description
And 4 stat counter cards appear in a 2x2 grid

#### Scenario: Counter values
The 4 stat counters display:
- Members: 70,000
- Pastors: 1,000
- Donation: 100,000
- Churches: 100

#### Scenario: Counter animation
When the counter section scrolls into view
Then the numbers animate from 0 to their target values

### Requirement: Testimony carousel

A parallax section with a carousel of member testimonies.

#### Scenario: Testimony carousel
When the testimony section renders
Then a parallax background image is displayed with a dark overlay
And an "Inspirational Testimony" heading appears in white
And a carousel displays testimony items
And each testimony has a circular avatar, a quote icon, quoted text, name, and position

#### Scenario: Carousel navigation
When the carousel is displayed
Then it auto-plays through testimony items
And users can navigate with previous/next controls

### Requirement: Events list + Sermons sidebar

A split layout with upcoming events on the left and recent sermons sidebar
on the right.

#### Scenario: Events list
When the events + sermons section renders
Then 2 event cards display on the left (8-column width)
And each event card has an image, title, date/time, location, and "Read more" button

#### Scenario: Sermons sidebar
And a right sidebar (4-column width) shows "Recent Sermons" heading
And a featured sermon card displays with image, title, metadata, and watch/download buttons
And 2 mini sermon rows display below with play icons and durations

### Requirement: Blog section

A 3-column grid of blog post cards with date overlays.

#### Scenario: Blog grid
When the blog section renders
Then 3 blog cards display in equal columns
And each card has a background image with a date overlay (day, month, year)
And each card has a title and excerpt text below

### Requirement: Gallery + Map

A 2-column section with a photo gallery grid on the left and a Google Map
on the right.

#### Scenario: Gallery grid
When the gallery section renders
Then a 2x2 grid of photos appears on the left half
And each photo shows an instagram icon on hover
And clicking a photo opens a lightbox/popup

#### Scenario: Map display
And a Google Map (or placeholder) renders on the right half
And the map fills the full height of the gallery column

### Requirement: Newsletter section

A parallax newsletter subscription section with email input.

#### Scenario: Newsletter form
When the newsletter section renders
Then a dark overlay parallax section appears
And a "Newsletter" heading displays
And a description text appears
And an email input field and "Subscribe" button are shown in a form

### Requirement: Footer

A dark 4-column footer with brand info, link columns, and service hours.

#### Scenario: Footer layout
When the footer renders
Then a dark background section appears
And column 1 shows: brand name "Vernal Church", description, social icons (twitter, facebook, instagram)
And column 2 shows "About" links: Staff, Beliefs, History, Mission, Wedding & Funerals, Jobs & Internship, Fellowships
And column 3 shows "Connect" links: Home Groups, Recovery Groups, Memberships, Children & Students, Volunteer, Counseling, Assistance
And column 4 shows "Service Hours" with Saturday Prayer Meeting and Sunday Service times

#### Scenario: Footer Component Dock credit
Then the footer bottom line shows a Component Dock credit linking to
https://www.componentdock.com/

### Requirement: Accessibility and semantics

#### Scenario: Semantic landmarks
When the page renders
Then the navbar uses `<nav>` with `aria-label`
And the hero section uses a heading hierarchy (h1 for main title)
And interactive elements have appropriate roles and labels
And images have descriptive alt text (or aria-hidden for decorative)

#### Scenario: Keyboard navigation
When the user navigates with keyboard
Then all interactive elements are reachable via Tab
And focus-visible rings appear on focused elements
And the mobile menu toggle is keyboard accessible

## Verification checklist

- [ ] All 13 sections render in the correct order matching the original
- [ ] Parallax effects work on hero, events strip, testimony, and newsletter sections
- [ ] Countdown timer decrements in real time
- [ ] Stat counters animate from 0 to target values on scroll
- [ ] Testimony carousel auto-plays and allows manual navigation
- [ ] Navbar becomes solid on scroll (scrolled state)
- [ ] Mobile hamburger menu toggles navigation
- [ ] Blog cards show date overlays correctly
- [ ] Gallery lightbox opens on photo click
- [ ] Newsletter form has email input and subscribe button
- [ ] Footer has 4 columns with correct content
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] Brand accent `#c7b198` used for primary buttons and key accents
- [ ] Fonts loaded via Google Fonts: Raleway, Poppins, Crimson Text
- [ ] Icons use lucide-react (no flaticon/ionicons font files shipped)
- [ ] All placeholder images use picsum.photos URLs
- [ ] `public/CNAME` contains `vernal.free.componentdock.com`
- [ ] `package.json` homepage set to `https://vernal.free.componentdock.com`
- [ ] Package name is `@free-react-templates/vernal`
