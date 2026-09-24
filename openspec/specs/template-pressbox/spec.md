# Template: Pressbox (Magazine / News Portal)

## Purpose

Pressbox is a magazine-style news portal template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Force" free template
(source: https://colorlib.com/wp/template/force/), built under a DIFFERENT
name (**Pressbox**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4 magazine/news template with a full-width
carousel hero, an "Editor's Choice" grid, a 2-column news area (main feed +
sidebar with popular news), a multi-category product list area, and a
multi-column footer. The design uses Roboto + Open Sans, a hot-pink
accent (`#ff1857`), light lavender backgrounds (`#f9f9ff`), and clean
white content sections.

## Naming

The ColorLib source name "Force" is FORBIDDEN as the app name. **Pressbox**
is the new, original name — single lowercase word, kebab-safe, no collision
with `apps/`, `openspec/specs/`, or `docs/templates/` (verified: zero hits).
Source slug: `force`. Preview URL:
https://preview.colorlib.com/theme/force/

## Design reference (replication findings)

- **Original:** ColorLib "Force" (page title: "Force"). Listed in
  TEMPLATES.md under **Magazine (20)** (section header around line 2196;
  the first unchecked row at line 2197 — `wp/template/force/`). A news /
  magazine portal template.

- **Live preview — REACHABLE (verified 2026-09-24 by direct fetch):**
  `https://preview.colorlib.com/theme/force/` returns HTTP 200
  (~44 KB HTML). Stylesheets: `css/bootstrap.css`, `css/style.css`
  (~54 KB), `css/responsive.css`, `css/font-awesome.min.css`, plus
  vendor CSS for Owl Carousel, lightbox, nice-select, animate.css,
  jQuery UI. Scripts: jQuery, Bootstrap, Owl Carousel, lightbox, etc.
  Fonts: **Roboto** (headings, body) + **Open Sans** (secondary).

- **Live DOM structure (from the fetched HTML + CSS):**
  - `header.header_area` → `nav.navbar.navbar-expand-lg`
    - Top bar (`.top_menu`, bg `#f9f9ff`): left date/info links,
      right social + search; logo in `.logo_part`.
    - Main nav: `.main_menu` with Bootstrap navbar, centered
      container (`.container_inner`, bg `#fff`).
  - `section.home_banner_area` — full-width Owl Carousel hero
    (min-height 600px, dark overlay on images). Two slides with
    centered white text: headline (Roboto 36px bold white), date,
    category badge (`.date`, bg `#ff1857`). Carousel indicators
    active = `#ff1857`.
  - `section.choice_area.p_120` — "Editor's Choice" section
    (bg `#f9f9ff`). Section title: `.main_title2` (bg `#f9f9ff`,
    left border 3px solid `#ff1857`). 4-column grid of
    `.choice_item` cards, each with an image and article title
    (`.choice_text`, Roboto 18px 500, `#222`).
  - `section.news_area` — 2-column layout (8/4 Bootstrap grid):
    - **Main (col-lg-8):** "Latest News" heading + media list of
      3 recent articles (thumbnail left, title + excerpt + author
      right). Below: "Travel and food" sub-section with a 2×2 grid
      of small article cards. Then "Wedding adventure" sub-section
      with another 2×2 grid of articles. Each sub-section has its
      own heading (`.main_title2` style).
    - **Sidebar (col-lg-4):** "Most Popular News" (`.right_sidebar`)
      with a list of popular articles (thumbnail + title), followed
      by a "Newsletter" widget (email input + subscribe button).
  - `section.product_list_area.p_100` — "Best Product Deals" area.
    3-column category tabs: "Tech Culture", "Brilliant Ideas", etc.
    Each tab shows a list of 3–4 articles with thumbnails.
  - `footer.footer-area` — multi-column footer:
    - "Quick Links" column (Sitemaps, Categories, Archives, etc.)
    - "Most Viewed News" column (recent popular articles)
    - Social media widget
    - Copyright bar at bottom.

- **Screenshot** (`force-free-template.jpg`, AVIF format; the
  TEMPLATES.md row embeds a downscaled copy): Shows a magazine-style
  layout with a dark hero carousel at top, white navigation bar,
  "Editor's Choice" grid section with lavender background, a 2-column
  news feed with sidebar, and a dark footer. Clean, editorial
  aesthetic with hot-pink accent touches on badges and active indicators.

## Design tokens

| Token                | Value      | Notes                                                                   |
| -------------------- | ---------- | ----------------------------------------------------------------------- |
| `--color-brand`      | `#ff1857`  | Hot-pink accent: nav date badge, carousel indicator active, sidebar hover |
| `--color-bg-lavender`| `#f9f9ff`  | Light lavender: top menu, section backgrounds, main_title2 bg           |
| `--color-heading`    | `#222222`  | Headings, article titles, h2/h3                                         |
| `--color-body`       | `#222222`  | Body text (Open Sans default)                                           |
| `--color-muted`      | `#777777`  | Meta text, dates, secondary info                                        |
| `--color-white`      | `#ffffff`  | Content cards, navbar bg, footer sections                               |
| `--color-dark`       | `#04091e`  | Dark overlay for hero carousel, footer background                       |
| `--color-border`     | `#eeeeee`  | Card borders, dividers                                                  |
| `--font-heading`     | Roboto     | Headings, article titles (500 weight)                                   |
| `--font-body`        | Open Sans  | Body text, meta, secondary                                              |
| `--radius-card`      | 0          | Bootstrap default — no rounded corners on cards                         |
| `--radius-badge`     | 0          | Square badges (date/category badges)                                    |
| `--section-padding`  | 120px      | `.p_120` on choice_area; `.p_100` on product_list_area                  |

## Gherkin requirements

### Scenario: Navbar renders with logo, links, and search
```
Given the user loads the Pressbox homepage
Then a navigation bar is visible at the top
And the navbar contains a logo text "Force" replaced with "Pressbox"
And the navbar contains menu links (Home, Features, etc.)
And the navbar has a search icon button
And a top bar shows above the navbar with date info and social links
```

### Scenario: Hero carousel displays slides with headlines
```
Given the user loads the Pressbox homepage
Then a full-width carousel hero section is visible
And the carousel shows at least 2 slides
And each slide has a background image with dark overlay
And each slide displays a white headline and subheadline
And each slide has a category badge in hot-pink (#ff1857)
And carousel navigation indicators are visible at the bottom
And the active indicator is colored hot-pink (#ff1857)
```

### Scenario: Editor's Choice section shows article grid
```
Given the user scrolls to the Editor's Choice section
Then a section heading "Editor's Choice" is displayed
And the heading has a left border accent in hot-pink (#ff1857)
And 4 article cards are shown in a row
And each card has a thumbnail image
And each card has an article title below the image
```

### Scenario: News area shows latest articles with sidebar
```
Given the user scrolls to the news section
Then a "Latest News" heading is displayed
And 3 recent article entries are shown in the main column
And each entry has a thumbnail, title, excerpt, and author/date info
And a sidebar column shows "Most Popular News"
And the sidebar lists popular articles with thumbnails
```

### Scenario: Travel and food sub-section displays grid
```
Given the user scrolls within the news area
Then a "Travel and food" sub-heading is displayed
And 4 article cards are shown in a 2×2 grid
And each card has a thumbnail and title
```

### Scenario: Wedding adventure sub-section displays grid
```
Given the user scrolls within the news area
Then a "Wedding adventure" sub-heading is displayed
And 4 article cards are shown in a 2×2 grid
And each card has a thumbnail and title
```

### Scenario: Newsletter subscription widget in sidebar
```
Given the user views the sidebar
Then a "Newsletter" heading is displayed
And an email input field is visible
And a "Subscribe" button is displayed
```

### Scenario: Best Product Deals section shows category tabs
```
Given the user scrolls to the product list area
Then a "Best Product Deals" heading is displayed
And 3 category sections are shown: "Tech Culture", "Brilliant Ideas", etc.
And each category has 3–4 article items with thumbnails and titles
```

### Scenario: Footer renders with multiple columns
```
Given the user scrolls to the footer
Then a multi-column footer is displayed
And it contains a "Quick Links" column with navigation links
And it contains a "Most Viewed News" column with popular articles
And it contains a social media widget
And it contains a copyright/attribution line
And the footer links to https://www.componentdock.com/ ("Component Dock")
```

### Scenario: Responsive layout adapts to mobile
```
Given the user views the page on a 375px viewport
Then the navbar collapses into a hamburger menu
And the carousel text scales down
And article grids stack to single column
And the sidebar moves below the main content
And the footer columns stack vertically
```

## Verification checklist

- [ ] Navbar renders with logo, nav links, and search icon
- [ ] Top bar shows date and social links above navbar
- [ ] Hero carousel shows 2+ slides with images, headlines, and badges
- [ ] Carousel indicators work and active indicator is #ff1857
- [ ] Editor's Choice section has left-border heading and 4 cards
- [ ] News area has Latest News feed (3 articles) in 8-col layout
- [ ] Sidebar has Most Popular News and Newsletter widget
- [ ] Travel and food sub-section shows 2×2 grid
- [ ] Wedding adventure sub-section shows 2×2 grid
- [ ] Product list area shows 3+ category sections with articles
- [ ] Footer has Quick Links, Most Viewed News, social, copyright
- [ ] Footer links to https://www.componentdock.com/
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] Fonts: Roboto (headings) + Open Sans (body) via Google Fonts link
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Responsive: stacks to single column on mobile (375px)
- [ ] Tests: Vitest + Testing Library, 100% coverage
- [ ] Build: Vite production build succeeds
