# Template: Soundbyte (Radio & Music)

## Purpose

Recreation of ColorLib **Razo** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/razo/
- Preview: https://preview.colorlib.com/theme/razo/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/razo-free-template.jpg
- New name: `soundbyte` (apps/soundbyte, @free-react-templates/soundbyte)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Primary (brand pink) | `#dc2878` | CTA buttons (.razo-btn), social icons hover, accents |
| Heading color | `#191919` | All headings (h1–h6), dark text |
| Body text | `#6e6e6e` | Paragraphs, secondary text |
| Gray background | `#e7f2fd` | `.bg-gray` sections, input backgrounds |
| White | `#ffffff` | Page background, card backgrounds, button-2 variant |
| Dark | `#000000` | Overlay pseudo-element, dark accents |
| Border | `#e5e5e5` | Borders, dividers |
| Secondary | `#a6a6a6` | Muted labels, secondary elements |
| Font family (body) | `Open Sans` (via Google Fonts) | Global body text, paragraphs, links |
| Font family (headings) | `Oswald` (via Google Fonts) | All h1–h6 headings |
| Heading weight | 500 | All h1–h6 |
| Body weight | 400 | Paragraphs, body text |
| Body font size | 16px | Paragraphs |
| Heading line-height | 1.4 | h1–h6 |
| Paragraph line-height | 1.8 | Body paragraphs |
| Button style | `.razo-btn` — primary #dc2878 bg, white text, border-radius 3px | CTA buttons ("Book Now", price buttons) |
| Button alt style | `.btn-2` — white bg, dark text; hover → #dc2878 bg | Secondary CTA buttons |
| Button small | `.btn-sm` — white bg; hover → #dc2878 | Small button variant |
| Section padding | 80px top/bottom (`.section-padding-80`) | Between major sections |
| Dark overlay | `rgba(0,0,0,0.65)` on `.bg-overlay::after` | Hero slides, music charts, app download, latest news |
| Section heading | centered, Oswald font, #191919 | "Blog New", "Trending", "Music Chart", etc. |
| Social share sidebar | vertical strip on left with Facebook, Twitter, Pinterest, Instagram, YouTube icons | Social share area |
| Search modal | Bootstrap modal overlay with search input | Top search area |
| Carousel | Owl Carousel for hero slides, latest news | Hero slider, news slider |
| Parallax | `.jarallax` with background images | Music charts section, app download section |

## Page structure (section order, from live preview DOM)

1. **Preloader** — Full-screen overlay with spinner animation and "Wait, please..." text. Fades out on load. (Will skip in React — not needed.)

2. **Social Share Sidebar** — Vertical fixed-position sidebar on the left with social icons (Facebook, Twitter, Pinterest, Instagram, YouTube) and a close button. (Simplified: social icons in header/footer instead.)

3. **Header/Navbar** — Sticky navbar. Left: logo image. Center: nav links (Home, Pages dropdown, Shows, Charts, Podcasts, Mega menu, Events, Blog). Right: social share icon + search icon. Mobile: hamburger toggles slide-in menu. Uses `.classy-navbar` pattern.

4. **Hero/Welcome Carousel** — Full-width carousel (4 slides). Each slide: background image with dark overlay (`rgba(0,0,0,0.65)`), centered text. Content per slide: heading "Designed For Music, Engineered to Last", subtitle "31st Dec - Night out party....Don't miss it", primary CTA button "Book Now". Carousel auto-rotates.

5. **Blog Area** — White background, two-column layout (8/4 split):
   - **Left: Blog New** — Featured post (large image with dark overlay, post meta with comments/views counts, post title). Below: 4 smaller posts in 2×2 grid (thumbnail on left, post content on right with meta + title).
   - **Right: Trending** — Featured post (smaller image with dark overlay). Below: 4 vertical posts (thumbnail + content stacked).

6. **Music Charts** — Dark overlay background with parallax image. White section heading "Music Chart" left-aligned, "Show All Trending (Top 10)" button right-aligned. 5 music chart items in a vertical list. Each item: serial number, thumbnail, audio player, song title + artist, price button (.razo-btn). Items animate in on scroll.

7. **Trending Video** — White background. Centered section heading "Trending Video". Featured video (full-width YouTube embed iframe). Below: 6 video posts in 3-column grid (thumbnail + post meta + title).

8. **App Download** — Dark overlay background with parallax image. Two-column layout: left — phone mockup image; right — "Download app and Enjoy radio & music" subtitle, "Radio Music" heading, description paragraph, Google Play + App Store badge images.

9. **Weekly Schedule** — White background. Centered section heading "Weekly Schedule". Responsive table with 6 columns (Monday–Saturday). Each cell shows show name + time slot. Table has borderless style.

10. **Latest News** — Dark overlay background with parallax image. Left-aligned "Latest News" heading, right-aligned "Show All Blog" button. Owl Carousel slider of news cards. Each card: background image with overlay, post title, excerpt text, date display (day number + month), "Read More" button.

11. **Footer** — White background, 80px top padding. 3-column layout:
    - Column 1: Logo, description text, contact info (address, phone, email) with icons.
    - Column 2: "Twitter Feed" — 3 tweet items with Twitter icon + tweet text.
    - Column 3: "Instagram" — 3×3 grid of Instagram thumbnail images.
    - Copyright bar at bottom with attribution text and Component Dock link.

## Gherkin requirements

### Feature: Soundbyte Radio Template

```gherkin
Feature: Soundbyte — Radio & Music Website Template
  As a user visiting the Soundbyte website
  I want to see a professional radio/music website
  So that I can browse shows, view music charts, and discover trending content

  Scenario: Header displays navigation and search
    Given I am on the Soundbyte homepage
    Then I see a sticky navbar
    And I see the logo on the left
    And I see navigation links: Home, Pages, Shows, Charts, Podcasts, Events, Blog
    And I see a social share icon and a search icon
    And on mobile I see a hamburger menu toggle

  Scenario: Hero carousel shows music event with CTA
    Given I am on the Soundbyte homepage
    Then I see a full-width carousel with 4 slides
    And each slide has a background image with dark overlay
    And each slide shows heading "Designed For Music, Engineered to Last"
    And each slide shows subtitle about a party event
    And each slide has a "Book Now" CTA button in pink (#dc2878)
    And the carousel auto-rotates

  Scenario: Blog area shows featured and trending posts
    Given I scroll to the Blog area
    Then I see a "Blog New" section on the left (8-column width)
    And I see a featured post with large image overlay and title
    And I see 4 smaller posts in a 2x2 grid with thumbnails
    And I see a "Trending" section on the right (4-column width)
    And I see a featured trending post with image overlay
    And I see 4 trending posts listed vertically

  Scenario: Music charts section displays track list
    Given I scroll to the Music Charts section
    Then I see a dark parallax background
    And I see section heading "Music Chart"
    And I see a "Show All Trending (Top 10)" button
    And I see 5 music chart items listed vertically
    And each item has a serial number, thumbnail, audio player, title, and price button

  Scenario: Trending video section shows video grid
    Given I scroll to the Trending Video section
    Then I see a centered section heading "Trending Video"
    And I see a featured YouTube video embed (full-width)
    And I see 6 video post thumbnails in a 3-column grid

  Scenario: App download section promotes the mobile app
    Given I scroll to the App Download section
    Then I see a dark parallax background
    And I see a phone mockup image on the left
    And I see "Download app and Enjoy radio & music" text on the right
    And I see a "Radio Music" heading
    And I see Google Play and App Store badge images

  Scenario: Weekly schedule shows broadcast timetable
    Given I scroll to the Weekly Schedule section
    Then I see a centered section heading "Weekly Schedule"
    And I see a responsive table with columns for Monday through Saturday
    And each cell shows show name and time slot

  Scenario: Latest news carousel shows news cards
    Given I scroll to the Latest News section
    Then I see a dark parallax background
    And I see "Latest News" heading and "Show All Blog" button
    And I see a carousel of news cards
    And each card has a background image, title, excerpt, date, and "Read More" button

  Scenario: Footer shows contact info and social feeds
    Given I scroll to the footer
    Then I see the logo and description text
    And I see contact info (address, phone, email) with icons
    And I see a Twitter Feed section with 3 tweet items
    And I see an Instagram grid with 9 thumbnail images
    And I see a copyright bar with Component Dock link
```

## Verification checklist

- [ ] App builds without errors (`npm run build`)
- [ ] All sections match original section order (Header → Hero → Blog → Music Charts → Trending Video → App Download → Weekly Schedule → Latest News → Footer)
- [ ] Design tokens match: primary #dc2878, heading #191919, body #6e6e6e, gray bg #e7f2fd
- [ ] Fonts: Open Sans (body), Oswald (headings) loaded via Google Fonts
- [ ] Hero carousel has 4 slides with dark overlay and CTA buttons
- [ ] Music charts show 5 tracks with serial numbers, thumbnails, titles, prices
- [ ] Weekly schedule table is responsive with 6 day columns
- [ ] Latest news has carousel with date display and "Read More" buttons
- [ ] Footer has 3 columns: contact, Twitter feed, Instagram grid
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md/PR)
- [ ] Tests pass at 100% coverage
- [ ] App is responsive (mobile hamburger, responsive table, stacked columns)
