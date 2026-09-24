# Template: Trendly (Magazine)

## Purpose

Trendly is a single-page news/magazine template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Viral Story"
magazine website template design, built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Viral Story" — magazine/news template
- **ColorLib source:** https://colorlib.com/wp/template/viral/
- **Live preview:** https://preview.colorlib.com/theme/viral/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/viralstory-free-template.jpg
- **Preview fetched:** Yes (44,779 bytes HTML, 41,859 bytes style.css)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds

## Section order (1:1 from the DOM)

1. **Top header bar** — light gray bg (`#f3f5f8`), breaking news marquee ticker
   (left), social icons (Google+, Pinterest, Facebook, Twitter) on right;
   border-bottom: 1px solid `#dedede`
2. **Navbar** — white bg, sticky, logo text "Trendly STORY" (left), navigation
   links (Top 10, Pages dropdown, Funny, Videos, Don't Miss, Mega Menu
   dropdown), search icon, "Add Post" gradient button (right)
3. **Hero ticker / top stories** — 3 horizontal blog post cards with thumbnail
   image + title + date, separated by vertical dividers, hot pink bottom
   border (`#e20378`)
4. **Featured posts slider** — large featured post (left 8-col) with full-width
   image, tag overlay, title, date; 2 stacked posts (right 4-col) with
   images, category tags, titles, dates. Carousel with navigation arrows.
5. **Blog post grid** — 2-column layout: main content (8-col) with 2×N grid
   of blog post cards (thumbnail, category tag, title, author, date), plus
   sidebar (4-col) with: Newsletter widget (gradient bg), Trending Articles
   (3 items with numbered thumbnails), Ad widget, Latest Comments
6. **Pagination** — numbered page links (Previous, 01–15, Next)
7. **Footer** — light gray bg (`#f3f5f8`), hot pink top border (5px `#e20378`):
   3-column layout (logo + footer nav, newsletter widget, latest articles)
8. **Bottom footer** — copyright bar with Component Dock link

## Design tokens

- **Brand primary:** `#e20378` (hot pink — nav active, category tags, borders,
  search active, ticker border)
- **Brand gradient:** `#e30a73` → `#feae04` (pink-to-orange, used on Add Post
  button, newsletter widget bg, hover states)
- **Category tag colors:**
  - Default/Travel: `#e20378` (hot pink)
  - Celebs/Travel (cat-2): `#6bc045` (green)
  - 4 Fun (cat-3): `#ee9202` (orange)
  - Featured (cat-4): `#02aeee` (blue)
- **Text primary:** `#231f1f` (near-black)
- **Text secondary:** `#656565` (gray)
- **Text muted:** `#b0b0b0` (light gray)
- **Bg light:** `#f3f5f8` (top header, hero area, footer)
- **Bg dark overlay:** `rgba(2, 3, 28, 0.9)` (search overlay)
- **White:** `#fff`
- **Black:** `#000`
- **Font:** Montserrat (Google Fonts), sans-serif
- **Buttons:** border-radius: 5px, gradient bg `#e30a73` → `#feae04`, white text
- **Category tags:** small pill/badge, no border-radius (0px), bg color per
  category, white text, uppercase
- **Footer nav:** 2-column flex grid, font-weight 700, color `#231f1f`

## Requirements

### Requirement: Top Header

The system SHALL render a top header bar with a breaking news ticker and social
icons.

#### Scenario: Breaking news ticker

- GIVEN the header is displayed
- WHEN the top bar is rendered
- THEN it SHALL show a scrolling ticker with news headlines
- AND it SHALL have a light gray background (`#f3f5f8`)
- AND it SHALL have a bottom border (1px solid `#dedede`)

#### Scenario: Social icons

- GIVEN the header is displayed
- WHEN the top bar is rendered
- THEN it SHALL show social media icon links (Google+, Pinterest, Facebook,
  Twitter) aligned to the right
- AND the icons SHALL be gray by default and pink (`#e20378`) on hover

### Requirement: Navigation

The system SHALL render a sticky white navbar with logo, navigation links,
search, and Add Post button.

#### Scenario: Logo

- GIVEN the navbar is displayed
- WHEN the logo area is rendered
- THEN it SHALL show "Trendly" as bold black text and "STORY" as pink text
  below or beside it

#### Scenario: Navigation links

- GIVEN the navbar is displayed
- WHEN the nav links are rendered
- THEN it SHALL show: Top 10, Pages (dropdown), Funny, Videos, Don't Miss,
  Mega Menu (dropdown)
- AND the active link SHALL have a pink underline (`#e20378`)

#### Scenario: Add Post button

- GIVEN the navbar is displayed
- WHEN the right side is rendered
- THEN it SHALL show an "Add Post" button with gradient background
  (`#e30a73` → `#feae04`), white text, border-radius 5px

#### Scenario: Search toggle

- GIVEN the navbar is displayed
- WHEN the search icon is clicked
- THEN a search overlay SHALL appear with a dark semi-transparent background
  and an input field

### Requirement: Hero Ticker

The system SHALL render a horizontal row of 3 top story cards below the navbar.

#### Scenario: Top stories row

- GIVEN the hero area is displayed
- WHEN the ticker is rendered
- THEN it SHALL show 3 blog post cards side by side
- AND each card SHALL have a thumbnail image, title, and date
- AND the row SHALL have a hot pink bottom border (`#e20378`, 5px)
- AND the cards SHALL be separated by vertical dividers

### Requirement: Featured Posts Slider

The system SHALL render a featured posts carousel with one large post and two
smaller stacked posts.

#### Scenario: Featured layout

- GIVEN the featured area is displayed
- WHEN the slider is rendered
- THEN it SHALL show one large post (8-col width) on the left with a full-width
  image, category tag overlay, title text, and date
- AND it SHALL show two stacked posts (4-col width) on the right with images,
  category tags, titles, and dates

#### Scenario: Category tags on featured

- GIVEN a featured post is displayed
- WHEN the tag is rendered
- THEN it SHALL show a colored badge: pink (`#e20378`) for Travel, green
  (`#6bc045`) for Celebs, orange (`#ee9202`) for 4 Fun
- AND the tag text SHALL be white and uppercase

### Requirement: Blog Post Grid

The system SHALL render a 2-column layout with a main content area and sidebar.

#### Scenario: Post cards (main area)

- GIVEN the blog post section is displayed
- WHEN the main content renders
- THEN it SHALL show posts in a 2-column grid
- AND each post card SHALL have a thumbnail image, category tag (colored badge),
  title, author name, and date
- AND category colors SHALL match: default `#e20378`, cat-2 `#6bc045`,
  cat-3 `#ee9202`, cat-4 `#02aeee`

#### Scenario: Sidebar newsletter widget

- GIVEN the sidebar is displayed
- WHEN the newsletter widget renders
- THEN it SHALL show a gradient background (`#e30a73` → `#feae04`)
- AND it SHALL show "Sign up to our newsletter" heading in white
- AND it SHALL show name and email inputs plus a green (`#6bc045`) Subscribe
  button

#### Scenario: Trending articles widget

- GIVEN the sidebar is displayed
- WHEN the trending widget renders
- THEN it SHALL show "Trending Articles" heading
- AND it SHALL show 3 trending posts with numbered thumbnails (01, 02, 03),
  title, and author

#### Scenario: Latest comments widget

- GIVEN the sidebar is displayed
- WHEN the comments widget renders
- THEN it SHALL show "Latest Comments" heading
- AND it SHALL show 3 comment items with avatar, commenter name, article
  reference, and timestamp

### Requirement: Pagination

The system SHALL render numbered pagination below the blog post grid.

#### Scenario: Page numbers

- GIVEN the pagination is displayed
- WHEN the page links render
- THEN it SHALL show Previous, numbered pages (01–15), and Next links
- AND the active page SHALL be highlighted

### Requirement: Footer

The system SHALL render a footer with 3-column widget areas and a copyright bar.

#### Scenario: Footer widgets

- GIVEN the footer is displayed
- WHEN the footer renders
- THEN it SHALL show 3 columns: logo + footer nav links, newsletter widget
  (gradient bg), and latest articles (3 thumbnail+title+date posts)
- AND the footer SHALL have a light gray background (`#f3f5f8`)
- AND it SHALL have a hot pink top border (5px `#e20378`)

#### Scenario: Bottom copyright

- GIVEN the footer is displayed
- WHEN the bottom bar renders
- THEN it SHALL show copyright text and a link to Component Dock
  (`https://www.componentdock.com/`)

## Verification checklist

- [ ] Top header with ticker and social icons renders
- [ ] Sticky navbar with logo, nav links, search, Add Post button
- [ ] Hero ticker with 3 story cards and pink bottom border
- [ ] Featured posts slider (8/4 layout) with category tags
- [ ] Blog post grid (2-col main + sidebar) with correct tag colors
- [ ] Newsletter widget with gradient background
- [ ] Trending articles with numbered thumbnails
- [ ] Latest comments widget
- [ ] Pagination controls
- [ ] Footer with 3-column layout and pink top border
- [ ] Bottom footer with Component Dock link
- [ ] Responsive layout (mobile hamburger, stacked columns)
- [ ] All design tokens match reference (colors, fonts, gradients, radii)
