# Template: NewsClip (News & Magazine)

## Purpose

NewsClip is a single-page news/magazine template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "TheGazette"
news website template design, built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "TheGazette" — news/magazine template:
  a 3-tier dark header (breaking news ticker + stock ticker, logo + ad
  banner, navigation), a full-width hero carousel with 4 slides, a latest
  news scrolling ticker, a 2-column main content area (featured post +
  popular posts on the left, breaking news + don't miss + subscribe sidebar
  on the right), a 3-column category posts section, a video posts grid,
  a dark editorial carousel section, and a dark 6-column footer.
- **Live preview:** `https://preview.colorlib.com/theme/thegazette/`
- **Section order (1:1) from the DOM:**
  1. Header (dark bg `#1d1d1d`):
     - Top bar: Breaking news marquee ticker (left) + Stock ticker (right)
     - Middle: Logo text "NewsClip" (left) + Ad banner placeholder (right)
     - Bottom: Navigation links + Search button
  2. Hero carousel: 4 full-width slides with background images, overlays,
     tags, titles, dates, prev/next arrows, dot indicators
  3. Latest news marquee: Scrolling ticker with timestamps and headlines
  4. Main content (2-column 9/3):
     - Left (9): Featured post (image, tag, meta, title, excerpt,
       "Continue Reading" link, social share icons), "Today's Most Popular"
       (2 posts with side-by-side image + content)
     - Right (3/sidebar): Breaking News (2 image overlay cards), "Don't Miss"
       (3 posts with thumbnail), Subscribe (email input + button)
  5. Category posts (3-column):
     - Left: Featured post with image + 3 text-only posts
     - Middle: 4 posts in 2x2 grid with images
     - Right: Featured post with image + 3 text-only posts
  6. Video posts: 8-column grid with play button overlays and duration labels
  7. Editorial (dark bg): Carousel with featured editorial posts — image +
     tag + title + date + excerpt + "Continue Reading" button
  8. Footer (dark bg with overlay): 6-column widget areas (Regions, Fashion,
     Politics, Featured, FAQ, More) + copyright bar with Component Dock link

## Design tokens

- Brand: `#ff084e` (red-pink CTA/accent)
- Dark bg: `#1d1d1d` (header, editorial, footer)
- Light bg: `#f6f6f6` (video section bg)
- Text primary: `#3a3a3a`
- Text secondary: `#9f9f9f`
- White: `#fff` (on dark backgrounds)
- Fonts: Roboto (body), PT Serif (headings) via Google Fonts
- Buttons: square (no border-radius), bg-brand `#ff084e`

## Requirements

### Requirement: Header

The system SHALL render a 3-tier dark header with breaking news ticker,
logo, ad banner, and navigation.

#### Scenario: Breaking news ticker

- GIVEN the header is displayed
- WHEN the top bar is rendered
- THEN it SHALL show a "Breaking" label with scrolling news items
- AND it SHALL show stock ticker values (DOW, S&P, NASDAQ) on the right

#### Scenario: Logo and ad

- GIVEN the header is displayed
- WHEN the middle bar is rendered
- THEN it SHALL show "NewsClip" as a large white wordmark logo
- AND it SHALL show an advertisement placeholder (728×90)

#### Scenario: Navigation

- GIVEN the header is displayed
- WHEN the bottom nav bar is rendered
- THEN it SHALL show links: Today, Politics, Lifestyle, Travel, Health,
  Entertainment, Sport
- AND it SHALL show a search button

### Requirement: Hero carousel

The system SHALL render a full-width hero carousel with 4 slides.

#### Scenario: Slide content

- GIVEN the hero carousel is displayed
- WHEN a slide is rendered
- THEN it SHALL show a background photo with overlay, category tag, date,
  title, and excerpt

#### Scenario: Navigation controls

- GIVEN the hero carousel is displayed
- WHEN the user navigates
- THEN it SHALL have prev/next arrows and dot indicators
- AND it SHALL auto-advance every 5 seconds

### Requirement: Latest news ticker

The system SHALL render a scrolling news ticker with timestamps and headlines.

#### Scenario: Ticker content

- GIVEN the latest news ticker is displayed
- WHEN the ticker scrolls
- THEN it SHALL show timestamps (e.g. "10:40") and headline text
- AND it SHALL use a horizontal scrolling marquee effect

### Requirement: Main content

The system SHALL render a 2-column layout with featured content and sidebar.

#### Scenario: Featured post

- GIVEN the main content is displayed
- WHEN the featured post is rendered
- THEN it SHALL show a large image, category tag, date, comment count,
  title, excerpt, "Continue Reading" link, and social share icons

#### Scenario: Most popular posts

- GIVEN the main content is displayed
- WHEN the popular posts are rendered
- THEN it SHALL show 2 posts with side-by-side image and text layout

#### Scenario: Sidebar widgets

- GIVEN the main content sidebar is displayed
- WHEN widgets are rendered
- THEN it SHALL show Breaking News (2 image overlay cards),
  Don't Miss (3 posts with thumbnails), and Subscribe (email form)

### Requirement: Category posts

The system SHALL render a 3-column category section with featured and text posts.

#### Scenario: Category layout

- GIVEN the category posts section is displayed
- WHEN it renders
- THEN it SHALL show 3 columns with featured posts and text-only posts

### Requirement: Video posts

The system SHALL render an 8-column grid of video posts with play button overlays and duration labels.

#### Scenario: Video grid

- GIVEN the video posts section is displayed
- WHEN it renders
- THEN it SHALL show video cards in a grid with thumbnails, play buttons, and titles

### Requirement: Editorial

The system SHALL render a dark-background editorial carousel with featured posts.

#### Scenario: Editorial carousel

- GIVEN the editorial section is displayed
- WHEN it renders
- THEN it SHALL show a dark background with a featured editorial post
- AND it SHALL have navigation controls

### Requirement: Footer

The system SHALL render a dark footer with 6 widget columns and copyright.

#### Scenario: Footer columns

- GIVEN the footer is displayed
- WHEN it is rendered
- THEN it SHALL show 6 widget areas: Regions, Fashion, Politics, Featured,
  FAQ, More — each with a list of links

#### Scenario: Copyright

- GIVEN the footer is displayed
- WHEN the copyright bar is rendered
- THEN it SHALL show "Component Dock" linking to
  https://www.componentdock.com/

## Verification checklist

- [x] `bash scripts/verify-app.sh newsclip` passes (typecheck + lint +
      vitest 100% coverage + build)
- [x] Section order matches the original (header → hero → ticker → main
      content → categories → videos → editorial → footer)
- [x] Tokens wired through `@theme`: brand `#ff084e`, dark bg `#1d1d1d`,
      light bg `#f6f6f6`, text `#3a3a3a`, meta `#9f9f9f`
- [x] Roboto + PT Serif loaded via Google Fonts `<link>` in `index.html`
- [x] Placeholder images use `https://picsum.photos/seed/newsclip-<n>/<w>/<h>`
- [x] Footer links to https://www.componentdock.com/
- [x] No "colorlib" strings in app source
