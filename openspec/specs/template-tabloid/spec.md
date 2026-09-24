# Template: Tabloid (Video & Magazine Blog)

## Purpose

Recreation of the ColorLib "Mag" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `mag`
- **Source URL:** https://colorlib.com/wp/template/mag/
- **Preview URL:** https://preview.colorlib.com/theme/mag/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/tabloid`
- **Surge target:** `tabloid.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`style.css`) at https://preview.colorlib.com/theme/mag/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#ed3974` | Buttons, accents, category tags, scroll-up hover |
| Dark | `#000000` | Scroll-up button bg, button hover bg, navbar bg |
| Body bg | `#f2f4f5` | Page background, left sidebar bg |
| White | `#ffffff` | Cards, sidebar widget bg, nav background |
| Heading text | `#1a1a1a` | All headings (h1–h6) |
| Body text | `#777777` | Paragraphs, secondary text |
| Link text | `#000000` | Anchor links |
| Overlay | `rgba(0,0,0,0.5)` | Hero image overlay, parallax bg overlay |
| Font primary | `Poppins`, sans-serif | All text (headings, body, nav, buttons) |
| Button shape | Square (border-radius: 0) | All CTA buttons (`.mag-btn`) |
| Button bg | `#ed3974` | CTA buttons default state |
| Button hover bg | `#000000` | CTA buttons hover/focus |
| Button text | `#ffffff` | White text on brand buttons |
| Scroll-up bg | `#000000` | Back-to-top button |
| Scroll-up hover | `#ed3974` | Back-to-top hover |
| Category tag bg | `#ed3974` | `.post-cata` tag badges |

## Section Structure (in page order)

### 1. Navbar
- Logo (left-aligned, image-based brand logo)
- Navigation links: Home, Archive, Pages (dropdown), Mega (mega-menu), About, Contact
- Right side: search input, login icon, "Submit Video" button (brand pink)
- Sticky on scroll (`.mag-main-menu` with `#sticker`)
- Mobile: hamburger toggle → slide-in menu

### 2. Hero Slider
- Full-width carousel (OwlCarousel-style) with 3 slides
- Each slide: parallax background image + dark overlay
- Content centered: date tag + category tag (pink), post title (large white text), video play button (white circle with play icon)
- Custom dot indicators

### 3. Mag Posts Area (3-column layout)

#### 3a. Left Sidebar
- **Most Popular** widget: 5 post items (thumbnail + title + view/like/comment counts)
- Ad banner placeholder
- **Latest Videos** widget: 5 post items (thumbnail + title + view/like/comment counts)

#### 3b. Main Content (center column)
- **Trending Now**: horizontal list of 6 trending posts (thumbnail + category tag + title)
- **Featured Videos**: split layout — large featured post (7-col) with thumbnail, video play button, date/category, title, excerpt, share buttons + sidebar list of 5 video posts (5-col)
- **Most Viewed Videos**: carousel of 6 video cards (thumbnail + play button + duration badge + title + stats)
- **Sports Videos**: carousel of 3 featured posts (thumbnail + play button + date/category + title + excerpt + share buttons) + 4-column grid of 4 video posts (thumbnail + title + stats)

#### 3c. Right Sidebar
- **Social Followers** widget: Facebook fans, Twitter followers, YouTube subscribers, Google+ followers (colored bars)
- **Categories** widget: list of 7 categories with post counts (Life Style, Travel, Foods, Game, Sports, Football, TV Show)
- Ad banner placeholder
- **Hot Channels** widget: 5 channel items (thumbnail + channel title + Subscribe button)
- **Newsletter** widget: description text + email input + Subscribe button (brand pink, full-width)

### 4. Footer
- 4-column layout:
  - Col 1: Logo + description paragraph + social icons (Facebook, Google+, Instagram, Twitter, LinkedIn)
  - Col 2: Categories nav list (10 items with angle-right icons)
  - Col 3: Sport Videos — 2 post items (thumbnail + title + stats)
  - Col 4: Channels — tag cloud (15 tag links)
- Copyright bar: copyright text left, footer nav links right (Home, Privacy, Advertisement, Contact Us)
- Footer MUST link `https://www.componentdock.com/` (replaces Colorlib attribution)

## Gherkin Requirements

```gherkin
Feature: Tabloid — Video & Magazine Blog Template

  Background:
    Given the template is loaded at the root URL
    Then the page title contains "Tabloid"
    And the Component Dock footer link is visible

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo is visible in the top-left
    And navigation links "Home", "Archive", "About", "Contact" are visible
    And a search input is present
    And a login icon is visible
    And a "Submit Video" button with brand pink background is visible
    And on mobile viewports a hamburger menu button is visible

  Scenario: Hero slider displays with parallax
    Given the hero section is in the viewport
    Then a full-width background image with dark overlay is visible
    And a date tag and category tag are displayed
    And a post title in large white text is shown
    And a video play button (white circle) is visible
    And dot indicators are present

  Scenario: Hero slider advances slides
    Given the hero slider is showing slide 1
    When the user navigates to the next slide
    Then slide 2 is displayed with its content
    And the content animates in

  Scenario: Left sidebar shows Most Popular posts
    Given the left sidebar is in the viewport
    Then the heading "Most Popular" is visible
    And 5 post items are displayed (thumbnail + title + stats)

  Scenario: Left sidebar shows Latest Videos
    Given the left sidebar is in the viewport
    Then the heading "Latest Videos" is visible
    And 5 video post items are displayed

  Scenario: Trending Now section shows posts
    Given the main content area is in the viewport
    Then the heading "TRENDING NOW" is visible
    And 6 trending post items are displayed with thumbnails and category tags

  Scenario: Featured Videos section renders
    Given the main content area is in the viewport
    Then the heading "Featured Videos" is visible
    And a large featured post with thumbnail, play button, date, title, and excerpt is shown
    And a sidebar list of 5 video posts is displayed alongside

  Scenario: Most Viewed Videos carousel works
    Given the main content area is in the viewport
    Then the heading "Most Viewed Videos" is visible
    And video cards with thumbnails, play buttons, duration badges, and titles are shown
    And carousel navigation is present

  Scenario: Sports Videos section renders
    Given the main content area is in the viewport
    Then the heading "Sports Videos" is visible
    And 3 featured sports posts with thumbnails, play buttons, and excerpts are shown
    And a 4-column grid of video posts is displayed below

  Scenario: Right sidebar shows Social Followers
    Given the right sidebar is in the viewport
    Then Facebook, Twitter, YouTube, and Google+ follower counts are displayed

  Scenario: Right sidebar shows Categories
    Given the right sidebar is in the viewport
    Then the heading "Categories" is visible
    And 7 category items with post counts are listed

  Scenario: Right sidebar shows Hot Channels
    Given the right sidebar is in the viewport
    Then the heading "Hot Channels" is visible
    And 5 channel items with thumbnails and Subscribe buttons are shown

  Scenario: Right sidebar shows Newsletter
    Given the right sidebar is in the viewport
    Then the heading "Newsletter" is visible
    And a description paragraph is shown
    And an email input field is present
    And a "Subscribe" button with brand pink background is visible

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then a 4-column footer layout is visible
    And social media icon links are present (Facebook, Google+, Instagram, Twitter, LinkedIn)
    And a Categories nav list is shown
    And a Sport Videos widget with 2 post items is shown
    And a Channels tag cloud is displayed
    And a copyright notice is displayed
    And footer navigation links (Home, Privacy, Advertisement, Contact Us) are visible
    And a link to "https://www.componentdock.com/" is present

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And the 3-column layout stacks vertically (left sidebar, main, right sidebar)
    And footer columns stack vertically
    And the hero slider remains full-width

  Scenario: Post items display engagement stats
    Given any post item with stats is visible
    Then view count, like count, and comment count are displayed
    And each stat has an appropriate icon (eye, thumbs-up, comments)
```

## Verification Checklist

- [ ] All sections render in correct page order (navbar → hero → 3-col posts area → footer)
- [ ] Brand color `#ed3974` used for buttons, category tags, accents
- [ ] Poppins font loaded for all text
- [ ] Square CTA buttons (no border-radius) with brand pink background
- [ ] Hero carousel with 3 slides, parallax backgrounds, dark overlay
- [ ] 3-column layout: left sidebar, main content, right sidebar
- [ ] Left sidebar: Most Popular (5 items) + Latest Videos (5 items)
- [ ] Main content: Trending Now + Featured Videos + Most Viewed Videos + Sports Videos
- [ ] Right sidebar: Social Followers + Categories + Hot Channels + Newsletter
- [ ] Footer: 4-column layout with logo, categories, sport videos, channels + copyright bar
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger on mobile, stacked columns, full-width hero
- [ ] Post engagement stats (views, likes, comments) on all post items
- [ ] Placeholder images via `picsum.photos/seed/tabloid-<n>/...`
