# Template: Crush (Magazine)

## Purpose

Crush is a DARK-THEMED MAGAZINE template in the free-react-templates monorepo.
It is a React recreation of the ColorLib "Smashed" free template
(source: https://colorlib.com/wp/template/smashed/), built under a
DIFFERENT name (**Crush**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based magazine/news site with a dark charcoal
background (#252525), a complex hero banner carousel with a 3-column left
sidebar, center carousel, and 3-column right sidebar (weather widget +
music playlist), followed by editors picks, international news, tech news,
exclusive video, and popular news sections — all on a dark background with
white text and hot-pink (#ff1857) accent color. The layout uses Open Sans
for body text and Roboto for headings.

**Source mapping:**
- ColorLib item: "Smashed" (TEMPLATES.md line 2215; section "## News & Magazines")
- Source URL: https://colorlib.com/wp/template/smashed/
- Preview URL (REACHABLE): https://preview.colorlib.com/theme/smashed/

## Design tokens

Extracted from the live preview CSS (`css/main.css`, 55KB) and DOM.

### Colors

| Token              | Value     | Usage                                      |
| ------------------ | --------- | ------------------------------------------ |
| brand-primary      | #ff1857   | Buttons, accents, category badges, links   |
| brand-primary-dark | #f6214b   | Declared primary (CSS comment)             |
| body-bg            | #252525   | Page background (dark charcoal)            |
| editors-bg         | #2e2e2e   | Editors area section background            |
| text-body          | #999999   | Body text color                            |
| text-title         | #222222   | Heading color (on light bg only)           |
| text-white         | #ffffff   | Headings on dark bg, nav, footer           |
| off-white          | #f9f9ff   | Light section backgrounds                  |
| selection-bg       | #ff1857   | Text selection highlight                   |

#### Category badge colors (used on `.category-btn` classes)

| Badge color | Hex       |
| ----------- | --------- |
| Red/pink    | #ff1857   |
| Teal        | #4cd3e3   |
| Blue        | #38a4ff   |
| Yellow      | #f4e700   |
| Orange-red  | #f44a40   |
| Purple      | #6382e6   |
| Violet      | #a367e7   |
| Green       | #73fbaf   |
| Light pink  | #e66686   |
| Orange      | #f09359   |

### Typography

| Token          | Value                       | Usage                        |
| -------------- | --------------------------- | ---------------------------- |
| body-font      | "Open Sans", sans-serif     | Body text, paragraphs, meta  |
| heading-font   | "Roboto", sans-serif        | All headings (h1–h6)         |
| body-size      | 14px                        | Base font size               |
| body-weight    | 400                         | Normal body weight           |
| heading-weight | 600                         | Bold headings                |
| line-height    | 1.625em                     | Body line height             |

### Buttons

- **Category badge (`.primary-btn`):** transparent bg, 2px solid #ff1857,
  color #fff, font-size 12px, font-weight 500, text-transform capitalize,
  padding 0 18px, line-height 28px. Hover: fill #ff1857.
- **Fill button (`.primary-btn.fill`):** bg #ff1857, line-height 46px,
  padding 0 38px, font-size 14px. Hover: transparent bg.
- Border radius: none (sharp/rectangular buttons).

### Section spacing

- Standard section padding: 100px 0
- Banner area: full-width, no container padding (edge-to-edge)
- Editors area: 40px padding, #2e2e2e background
- Footer copyright: 25px vertical padding, 1px solid #252525 top border

### Visual characteristics from screenshot

The screenshot shows a dark magazine layout with:
- **Hero banner:** Full-width edge-to-edge, 3-column layout — left sidebar
  has 3 stacked article cards with image overlays, center is a large
  carousel with a featured article (category badge, date, comment count,
  title, excerpt, "Read More" fill button), right sidebar has a weather
  widget (location + temperature) and a "Recent Music Playlist" widget.
- **Navbar:** Below hero — red icon logo + "SMASHED" bold caps + "MAGAZINE"
  subtitle; horizontal nav links (Home, Archive, Category, Pages dropdown,
  Contact) in white text; red active state; search icon right.
- **Editors Area:** 4-column grid of article cards with image thumbnails,
  category badges, article titles. Dark #2e2e2e background.
- **Content sections:** Various grid layouts (3-col, 4-col, 5-col) with
  image thumbnails, category badges, dates, comment counts, titles.
- **Footer:** 3-column — logo + about text | Quick Links (2-col list) |
  "Most Viewed News" with thumbnail items.
- **Copyright bar:** Copyright text left, social media icons right.

## Gherkin requirements

### Hero Banner Area

```gherkin
Feature: Hero Banner Area

  Scenario: Banner displays edge-to-edge with three columns
    Given the page loads
    Then the banner area spans full width with no container padding
    And a left column (col-lg-3) shows 3 stacked article cards
    And a center column (col-lg-6) shows a carousel with featured article
    And a right column (col-lg-3) shows sidebar widgets

  Scenario: Left sidebar articles show image with overlay
    Given the banner area is visible
    Then each left sidebar article has a full-width image with dark overlay
    And each article shows a category badge, date, and comment count
    And each article has a title and excerpt paragraph

  Scenario: Center carousel shows featured article
    Given the banner area is visible
    Then the center carousel shows a large article with image overlay
    And the article displays category badge, date, comment count
    And the article shows a large title with <br> line break
    And the article shows a paragraph excerpt
    And a "read more" fill button is displayed below the excerpt
    And carousel navigation arrows are visible at bottom-right

  Scenario: Right sidebar has weather and playlist widgets
    Given the banner area is visible
    Then a weather widget shows location, date, and temperature
    And a "Recent Music Playlist" widget shows 3 numbered items
    And each playlist item shows a lorem ipsum description
```

### Navbar

```gherkin
Feature: Navigation Bar

  Scenario: Navbar displays below banner
    Given the page loads
    Then a navigation bar is visible below the hero banner
    And the navbar contains a logo with icon and "SMASHED" text
    And the subtitle "MAGAZINE" appears below the logo text

  Scenario: Navigation links are correct
    Given the navbar is visible
    Then the nav menu shows: Home, Archive, Category, Pages, Contact
    And "Home" has the active state styling
    And "Pages" has a dropdown with "Post Details" and "Elements"
    And a search icon is visible on the right

  Scenario: Navbar has dark background
    Given the navbar is visible
    Then the navbar background matches the body dark theme (#252525 area)
    And all nav text is white
    And the active link uses the brand primary color (#ff1857)
```

### Editors Area

```gherkin
Feature: Editors Picks Section

  Scenario: Editors area displays 4-column grid
    Given the page loads
    Then the editors area section is visible
    And it has a dark background (#2e2e2e)
    And it contains 4 equal-width columns (col-lg-3)

  Scenario: Each editor pick shows article card
    Given the editors area is visible
    Then each column shows a single-post card
    And each card has an image thumbnail
    And each card shows a category badge, date, and comment count
    And each card has a title and excerpt
```

### International News Area

```gherkin
Feature: International News Section

  Scenario: International news section displays correctly
    Given the page loads
    Then the international news section is visible
    And it has a section title heading
    And it shows a 3-column grid of news articles
    And each article has image, category badge, date, title
```

### Tech News Area

```gherkin
Feature: Tech News Section

  Scenario: Tech news section displays correctly
    Given the page loads
    Then the tech news section is visible
    And it has a section title heading
    And it shows a 4-column grid of news articles
    And each article has image, category badge, date, title
```

### Exclusive Video Area

```gherkin
Feature: Exclusive Video Section

  Scenario: Video section displays correctly
    Given the page loads
    Then the exclusive video section is visible
    And it has a section title heading
    And it shows a 3-column grid of video articles
    And each article has image, category badge, date, title
```

### Popular News Area

```gherkin
Feature: Popular News Section

  Scenario: Popular news section displays correctly
    Given the page loads
    Then the popular news section is visible
    And it has a section title heading
    And it shows a multi-column grid of news articles
    And each article has image, category badge, date, title
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer has three columns
    Given the page loads
    Then the footer area is visible
    And column 1 shows the logo image and about paragraph
    And column 2 shows "Quick Links" with two sub-columns of nav links
    And column 3 shows "Most Viewed News" with 2 thumbnail items

  Scenario: Footer quick links
    Given the footer is visible
    Then quick links include: Sitemaps, Categories, Archives, Advertise, Ad Choice
    And a second column includes: Privacy Policy, Terms of Use, Help Center, Newsletters, Feedback

  Scenario: Footer most viewed news items
    Given the footer is visible
    Then each most-viewed item shows a thumbnail image
    And each item has a title, date, and comment count

  Scenario: Copyright bar
    Given the footer is visible
    Then a copyright bar appears at the bottom
    And it has a top border (#252525)
    And copyright text is on the left
    And social media icons are on the right
    And links use brand primary color (#ff1857)
    And footer MUST link https://www.componentdock.com/ (Component Dock)
```

## Verification checklist

- [ ] All sections render in correct order: banner → navbar → editors →
  intl news → tech news → video → popular news → footer → copyright
- [ ] Body background is #252525 (dark charcoal)
- [ ] Headings use "Roboto" font, body text uses "Open Sans"
- [ ] Brand accent color #ff1857 used on buttons, badges, active states
- [ ] Hero banner is full-width edge-to-edge (no container padding)
- [ ] Category badges use the correct color palette (10 colors)
- [ ] Buttons are rectangular (no border-radius) with transparent/fill variants
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage (vitest + testing library)
- [ ] Build succeeds (vite build)
