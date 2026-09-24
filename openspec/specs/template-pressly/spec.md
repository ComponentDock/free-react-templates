# Template: Pressly (Magazine & News)

## Purpose

Pressly is a magazine/news template — a React recreation of the ColorLib free
"Magaznpro" template (preview: https://preview.colorlib.com/theme/magaznpro/).
Built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

**Source mapping:** `apps/pressly` recreates
`https://colorlib.com/wp/template/magaznpro/`.

### Design tokens (from live stylesheet, verified via direct fetch)

| Token | Value | Use |
|-------|-------|-----|
| Font | `"DM Sans"` (Google Fonts, weights 400/500/700) | Body and headings; base 16px |
| Brand pink | `#f0d` | Primary accent: CTA buttons, header nav bg, links, hover states, back-to-top, blog date badges, header-btn bg |
| Heading ink | `#000` | h1-h6 color, font-weight 500-700 |
| Body text | `#646464` | Paragraphs, muted text, 16px/30px line-height |
| Slider caption text | `#5E5E5E` | Hero carousel caption date/author |
| Social icon grey | `#D4D4E1` | Header social icons default color |
| Section title border | `#E8E9FF` | Underline on section headings (1px solid) |
| Light section bg | `#FFF6FE` | Very light pink background for Technology section |
| Blog border | `#f0e9ff` | Card borders, sidebar widget borders |
| Teal badge | `#00CEB2` | Default category badge (small-btn) |
| Blue badge | `#0154F7` | Trending category badge |
| Orange-red badge | `#F04506` | Food category badge |
| Yellow badge | `#FBCE0F` | Entertainment category badge |
| Purple badge | `#DD00FF` | Fashion category badge |
| Button radius | `5px` | All buttons: boxed-btn, submit-btn, small-btn, header-btn |
| Header nav bg | `#f0d` | Sticky navigation bar background, white text |
| Card radius | `10px` | Hero slider caption card overlay |
| Section padding | `120px top / 100px bottom` | Standard section spacing (section-padding) |
| Preloader bg | `#f7f7f7` | Page preloader background |
| Footer dark | `#3B4855` | Footer bottom bar, active pagination |
| Back-to-top | `#f0d`, 50% radius | Circular fixed button bottom-right |

### Visual design notes (from screenshot + DOM)

- Full-width hero carousel with large images (678px height desktop), bottom-left
  caption overlay card (white bg, 10px radius) with category badge + title + date.
- "Trending Now" grid: 1 large card with overlaid caption (left, col-lg-4) + 5
  standard cards (image on top, title below, category badge).
- "What's New" tabbed section: tab nav (All/Lifestyle/Travel/Fashion/Photography),
  left 6/7 column = image slider with caption, right 5/7 column = 3 stacked
  post cards with image + title + date.
- Technology section: light pink `#FFF6FE` bg, 3-column layout — left 2 stacked
  posts, center large video slider with thumbnails, right 2 stacked posts.
- Instagram feed: horizontal row of 6 square images with Instagram icon overlay.
- Footer: 4-column (logo + description + social, Useful Links, Top Categories,
  Newsletter signup form), dark bottom bar with copyright.
- Category badges are color-coded pills (teal default, blue for trending, etc.)
  with 5px radius.

## Requirements

### Requirement: Header renders with top bar, logo, and sticky navigation

Pressly SHALL render a header with a top bar containing social icons (left),
centered logo, and a right section with search, page dropdown, and sign-in
button. Below, a sticky navigation bar with a pink (`#f0d`) background shows
category links (Home, Lifestyle, Food, Review, Sports, Movie, Fitness, Fashion).

#### Scenario: Desktop header displays all elements

- **WHEN** the page loads on desktop viewport
- **THEN** the header shows social icons, logo, search icon, page dropdown, sign-in button
- **AND** the sticky nav bar displays all 8 category links with white text on pink background

#### Scenario: Mobile header hides logo and shows mobile menu toggle

- **WHEN** the page loads on mobile viewport
- **THEN** the main logo is hidden and the mobile hamburger menu toggle is visible

#### Scenario: Search input expands on focus

- **WHEN** the user focuses the search input
- **THEN** the input expands to reveal a text field with a pink bottom border

### Requirement: Hero carousel renders with image slides and caption overlays

Pressly SHALL render a full-width hero carousel with multiple image slides.
Each slide displays a background image with a bottom-left caption card
containing a category badge, headline title, and date/author info.

#### Scenario: Hero slides render with captions

- **WHEN** the page loads
- **THEN** at least 3 hero slides are rendered with background images
- **AND** each slide shows a category badge, title, and date/author text
- **AND** the caption card has a white background with rounded corners

#### Scenario: Hero carousel navigates between slides

- **WHEN** the user clicks the next/previous carousel arrow
- **THEN** the carousel transitions to the adjacent slide

### Requirement: Trending Now section displays post grid

Pressly SHALL render a "Trending Now" section with a heading and a grid of
post cards. The first card is a large featured post with an overlaid caption.
Remaining cards show image on top with title and date below.

#### Scenario: Trending section renders heading with View All link

- **WHEN** the page loads
- **THEN** the "Trending Now" heading is displayed with a "View All" link on the right
- **AND** the heading has a bottom border separator

#### Scenario: Trending posts display with category badges

- **WHEN** the page loads
- **THEN** the trending grid shows post cards with images, category badges, titles, and dates

### Requirement: What's New tabbed section filters posts by category

Pressly SHALL render a "What's New" section with tabbed navigation (All,
Lifestyle, Travel, Fashion, Photography). The active tab shows a split layout:
left side has a large image slider with caption, right side has 3 stacked
post cards.

#### Scenario: Tab navigation switches content

- **WHEN** the user clicks a category tab
- **THEN** the tab becomes visually active and the content area updates

#### Scenario: Default tab shows All content

- **WHEN** the page loads
- **THEN** the "All" tab is active by default
- **AND** a large featured image with caption is shown on the left
- **AND** 3 post cards are shown on the right

### Requirement: Technology section with video slider

Pressly SHALL render a "Technology" section with a light pink (`#FFF6FE`)
background. The layout has 3 columns: left 2 stacked post cards, center
a large video/image slider with thumbnail navigation, right 2 stacked
post cards.

#### Scenario: Technology section renders with light background

- **WHEN** the page loads
- **THEN** the Technology section has a light pink background
- **AND** the heading shows "Technology" with a "View All" link

#### Scenario: Video slider displays with thumbnails

- **WHEN** the page loads
- **THEN** the center column shows a large image slider with thumbnail navigation
- **AND** a play button overlay is visible on the current slide

### Requirement: Instagram feed row renders image thumbnails

Pressly SHALL render a horizontal row of Instagram-style square image thumbnails
with an Instagram icon overlay on hover.

#### Scenario: Instagram row displays images

- **WHEN** the page loads
- **THEN** at least 6 square image thumbnails are displayed in a horizontal row

#### Scenario: Instagram images show icon on hover

- **WHEN** the user hovers over an Instagram image
- **THEN** an Instagram icon overlay appears

### Requirement: Footer with branding, links, categories, and newsletter

Pressly SHALL render a footer with 4 columns: logo + description + social
icons, Useful Links, Top Categories, and Newsletter signup form. Below,
a dark bottom bar contains the copyright notice.

#### Scenario: Footer renders all sections

- **WHEN** the page loads
- **THEN** the footer shows the logo, description, social icons, Useful Links list, Top Categories list, and Newsletter form

#### Scenario: Newsletter form accepts email

- **WHEN** the user types an email and clicks Subscribe
- **THEN** the email input is processed (form action)

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present with target="_blank"
- **AND** the link text says "Component Dock"
