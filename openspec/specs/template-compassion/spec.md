# Template: Compassion (Church / Charity Template)

## Purpose

Compassion is a single-page church/charity website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Inward" church website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Inward" — free responsive Bootstrap 4 church
  website template (source: https://colorlib.com/wp/template/inward/).
  TEMPLATES.md has TWO copies of this item (line 1274 in the Charity
  category and line 1301 in the Church category — mark BOTH `[x]` when
  done). Both rows reference the same screenshot (`inward-free-template.jpg`).
- **Demo DOM analyzed:** REACHABLE. `https://preview.colorlib.com/theme/inward/`
  returns HTTP 200 (curl verified 2026-09-15, ~18 KB rendered HTML).
  Page title: "Inward Church Website Template". The rendered page is the
  full template: transparent navbar, full-viewport hero slider, split
  worship/events section, audio sermon cards, latest events grid, personal
  testimony carousel, 4-column footer. Stylesheets analyzed: `css/style.css`
  (carries all component tokens below); Bootstrap 4 utilities from
  `css/bootstrap.css`; icons are Ionicons + FontAwesome glyphs.
- **Screenshot:** `inward-free-template.jpg` (1200x946, verified via
  vision_analyze 2026-09-15) — consistent with the live preview: a hand
  raised against warm bokeh/nature background hero with "Welcome to Inward"
  serif heading and "Request a Prayer" outlined button; split camp
  meeting / upcoming events section below; clean modern church aesthetic
  throughout. The DOM is the ground truth for copy and section order.
- **Visual design (from live preview DOM + screenshot vision):** warm,
  reverent church aesthetic. Muted blue **`#6A99CB`** brand/accent color
  on links, dropdown hovers, and navbar brand accent; lighter hover blue
  **`#90b3d8`** on button hover; dark **`#262626`** footer with
  **`#2e2e2e`** border-top; white page background; **`#b3b3b3`** body
  text color; **`#000`** headings. Buttons are uppercase with
  **letter-spacing .2em**, **border-radius 0** (sharp/square corners),
  2px borders. Headings use elegant serif **Playfair Display** (h1/h2/h3,
  40px hero, ~32px section headings); body uses clean sans-serif
  **Open Sans** (15px, weight 400). Sermon cards are **black background**
  with white text; testimony slider uses **circular pastor photos**
  (border-radius 50%) on a **`#fafafa`** light section. The demo brands
  itself "INWARD"; recreation uses the NEW name **Compassion**.

- **Structure (1:1, section order — from the live DOM):**
  1. **Navbar** (`navbar navbar-expand-md navbar-dark bg-dark`) —
     transparent/absolute on desktop (overlays hero), solid black on mobile.
     Uppercase wordmark **"Compassion"** left; nav links **Home (active) /
     About / Messages (dropdown: Audio Sermons, Past Messages, Bible Reading,
     End Time Prophecy) / Events / Contact** center/right; hamburger toggle
     on mobile.
  2. **Hero slider** (`home-slider owl-carousel`) — full-viewport
     (`calc(100vh - 217px)`, min-height 700px) background image slides
     with dark overlay (`:before` pseudo-element). Center-aligned: white
     Playfair Display h1 **"Welcome to Compassion"** (40px mobile / larger
     desktop), lorem subtext, white outlined button **"Request a Prayer"**
     (`btn btn-white btn-outline-white`).
  3. **Worship Time** (`element-animate worship-time`) — split layout
     (`.half d-md-flex d-block`): LEFT = background image (camp meeting)
     with dark overlay, white Playfair h2 **"Camp Meeting Will Start Soon"**,
     countdown timer (weeks/days/hours/min/sec), white outlined "Join Now"
     button; RIGHT = white background, h2 **"Upcoming Events"**, 4 event
     list items (table-row layout: date label **"APR 14"** | event name
     **Child Dedication / Church Fellowship / Mass Baptism / School of the
     Prophets** | **"More Info"** link), separated by `#ccc` borders.
  4. **Audio Sermons** (`section pt-5 pb-2 bg-light`) — light gray
     background, centered h2 **"Audio Sermons"**, 3-column grid
     (`col-12 col-sm-6 col-lg-4`) of sermon cards (`.sermon`): each is a
     black-background card with top image, title link (e.g. **"Arise,
     Shine"**), meta text **"by Luis Matthew on March 28, 2018"**, and an
     HTML5 audio player.
  5. **Latest Events** (`section`) — white background, centered h2
     **"Latest Events"**, 3-column grid (`col-md-6 col-lg-4`) of event
     cards: small thumbnail image (30px wide) left, text right — h3 title
     (**"Prayer & Devotional for Children"** / **"We Must Walk In The
     Middle of The Road"** / **"Tracts Giving"**), date + category meta
     (e.g. **"May 12, 2018, Children Ministries"**), lorem description.
  6. **Personal Testimony** (`section bg-light`) — light background,
     centered h2 **"Personal Testimony"**, owl-carousel slider with
     circular pastor photos (`border-radius: 50%`), blockquote with
     testimony text, attribution (e.g. **"— Jeremy Watson"**). Dot
     pagination below (`#cccccc` inactive, `#000` active).
  7. **Footer** (`footer site-footer`) — dark `#262626` background,
     `border-top: 1px solid #2e2e2e`. 4-column grid: (1) Church name
     **"Compassion Church"** + description + social icons (Twitter,
     Facebook, LinkedIn, Instagram via FontAwesome); (2) **"The Church"**
     links (About Us, Organizational Chart, Events, Contact); (3)
     **"Messages"** links (Audio Sermons, Past Messages, Bible Reading,
     End Time Prophecies); (4) **"Visit or Talk to Us"** contact info
     (address, telephone, email). Bottom copyright line with
     **"Made with Component Dock"** link (replacing ColorLib attribution).

## Gherkin Requirements

### Feature: Navbar

Scenario: Desktop navbar renders all navigation links
  Given the page is loaded on a desktop viewport
  Then the navbar displays the brand "Compassion"
  And the navbar shows links: Home, About, Messages, Events, Contact
  And the Messages link has a dropdown with: Audio Sermons, Past Messages, Bible Reading, End Time Prophecy
  And the Home link is marked as active

Scenario: Mobile navbar toggles on hamburger click
  Given the page is loaded on a mobile viewport
  When the user clicks the hamburger toggle
  Then the navigation links become visible
  And the brand "Compassion" is displayed

### Feature: Hero Section

Scenario: Hero displays welcome heading and CTA
  Given the hero section is visible
  Then the heading "Welcome to Compassion" is displayed
  And a "Request a Prayer" outlined button is shown
  And the hero uses a full-viewport background image with dark overlay

Scenario: Hero is responsive
  Given the page is loaded on a mobile viewport
  Then the hero heading scales down appropriately
  And the CTA button remains accessible

### Feature: Worship Time / Events Split

Scenario: Camp meeting section displays countdown
  Given the worship time section is visible
  Then the left panel shows "Camp Meeting Will Start Soon"
  And a countdown timer is displayed with weeks, days, hours, minutes, seconds
  And a "Join Now" button is shown

Scenario: Upcoming events list renders correctly
  Given the worship time section is visible
  Then the right panel shows "Upcoming Events" heading
  And 4 event items are listed with date and event name
  And each event has a "More Info" link

### Feature: Audio Sermons

Scenario: Sermon cards display audio content
  Given the audio sermons section is visible
  Then 3 sermon cards are displayed in a grid
  And each card has an image, title, author/date metadata, and audio player
  And the section has a light gray background

### Feature: Latest Events

Scenario: Event cards display with thumbnails
  Given the latest events section is visible
  Then 3 event cards are displayed in a grid
  And each card has a thumbnail image, title, date/category metadata, and description

### Feature: Personal Testimony

Scenario: Testimony carousel shows pastor quotes
  Given the personal testimony section is visible
  Then a carousel of testimony slides is displayed
  And each slide has a circular pastor photo, a blockquote, and an attribution
  And dot pagination is visible below the carousel

### Feature: Footer

Scenario: Footer displays church information
  Given the footer is visible
  Then it shows the church name "Compassion Church"
  And social media icons (Twitter, Facebook, LinkedIn, Instagram) are displayed
  And "The Church" links section is present
  And "Messages" links section is present
  And "Visit or Talk to Us" contact info is present
  And the copyright line links to Component Dock

## Verification checklist

- [ ] Section order matches the original 1:1 (navbar → hero → worship time → audio sermons → latest events → personal testimony → footer)
- [ ] Brand accent color `#6A99CB` is used on links and interactive elements
- [ ] Headings use Playfair Display serif font
- [ ] Body text uses Open Sans font
- [ ] Buttons are uppercase with letter-spacing .2em and sharp corners (border-radius 0)
- [ ] Hero uses full-viewport background image with dark overlay
- [ ] Worship time section uses split layout (50/50 on desktop)
- [ ] Audio sermon cards have black background with white text
- [ ] Testimony photos are circular (border-radius 50%)
- [ ] Footer has dark `#262626` background
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] No ColorLib references in app code
- [ ] Placeholder images use `https://picsum.photos/seed/compassion-<n>/<w>/<h>`
- [ ] Icons use lucide-react (replacing Ionicons/FontAwesome)
- [ ] 100% test coverage on all components
