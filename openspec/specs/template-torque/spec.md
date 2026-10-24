# Template: Torque (Magazine / News Blog)
<!-- prep-status: shipped-as=scoop -->
> **SHIPPED-UNDER** — the ColorLib `force` design this prep describes already
> ships as `apps/scoop` (<https://scoop.free.componentdock.com>).
> Do not scaffold `apps/torque`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-scoop/spec.md`.

## Purpose

Recreation of ColorLib **Force** magazine template.
- Source: https://colorlib.com/wp/template/force/
- Preview: https://preview.colorlib.com/theme/force/
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- Design category: Magazine / News Blog

## Design tokens (extracted from preview CSS)

| Token             | Value                     | Usage                                |
| ----------------- | ------------------------- | ------------------------------------ |
| Brand accent      | `#ff1857` (hot pink/red)  | Category badges, CTA buttons, icons, newsletter accent border |
| Secondary cyan    | `#4cd3e3`                 | Accent highlights                    |
| Secondary yellow  | `#f8b600`                 | Accent highlights                    |
| Secondary blue    | `#38a4ff`                 | Accent highlights                    |
| Secondary lime    | `#f4e700`                 | Accent highlights                    |
| Text dark         | `#222222`                 | Headings, body text                  |
| Text muted        | `#777777`                 | Meta info (dates, comments)          |
| Text light        | `#999999`                 | Secondary text                       |
| Text white        | `#ffffff`                 | On dark backgrounds, buttons         |
| Background white  | `#ffffff`                 | Page background, cards               |
| Background lavender | `#f9f9ff`               | Alternate section backgrounds        |
| Background gray   | `#eeeeee`                 | Borders, dividers                    |
| Footer bg         | `#04091e` (dark navy)     | Footer area                          |
| Font primary      | `"Roboto", sans-serif`    | Body text, headings                  |
| Font secondary    | `"Open Sans", sans-serif` | Secondary elements                   |
| Button radius     | `0px` (sharp/square)      | Category badges, CTAs                |
| Card radius       | `0px–3px`                 | Minimal rounding                     |
| Banner min-height | `600px`                   | Hero carousel                        |

## Section structure (from live preview DOM)

### 1. Header (header_area)
- **Top bar**: date text (left) + social icon list (facebook, twitter, dribbble, behance) (right)
- **Logo area**: logo image (left) + magazine banner image (right)
- **Main navbar**: horizontal links — Home, Category, Archive, Elements, Contact + search icon (right)
- Bootstrap-style responsive navbar with hamburger toggle

### 2. Hero Banner / Carousel (home_banner_area)
- Full-width section with background image + dark overlay
- Inner carousel (3 slides), each slide contains:
  - Category badge ("Gadgets") — #ff1857 bg, white text, square
  - Date with calendar icon + comment count with icon
  - Headline (h3, white, centered)
  - Description paragraph (white, centered)
- Carousel indicators at top
- Min-height: 600px

### 3. Editor's Choice (choice_area, p_120)
- Section title: "Editor's Choice" (h2, left-aligned)
- 4-column grid (col-lg-3 col-md-6) of article cards
- Each card: full-width image, category badge + date + comments, title (h4), excerpt paragraph
- 4 cards total

### 4. News Area (news_area)
- Two-column layout: 8/4 (main content + sidebar)

#### 4a. Main content (col-lg-8)
- **"Latest News"** section:
  - 4 horizontal media-style posts (image left ~30%, content right ~70%)
  - Each: thumbnail image, category badge + date + comments, title (h4), excerpt
- **"Travel and food"** subsection:
  - 2×4 grid of small article cards (col-lg-6 col-sm-6)
  - Each: image, title (h4), date + comments
  - 8 cards total

#### 4b. Right sidebar (col-lg-4)
- **"Most Popular News"** widget:
  - Featured article: large image + category badge + title + excerpt
  - Owl-carousel slider of 6 smaller popular posts (image + title + date)
- **Ad banner widget**: centered image placeholder
- **"Social Networks"** widget:
  - 6-item list: Facebook (983 Likes), Twitter (983 Followers), YouTube (9835 Subscribers), Vimeo (59874 Subscribers), Pinterest (36958 Followers), RSS
  - Each with icon + count + call-to-action label
- **"Newsletter"** widget:
  - Envelope icon in #ff1857 circle
  - "Subscribe to our Newsletter" heading
  - Description text
  - Email input + "Subscribe" button
  - Card has #ff1857 top border (3px)

### 5. Product List Area (product_list_area, p_100)
- 3-column layout (col-lg-4 each)
- **Column 1 — "Best Product Deals"**: 4 media-style items (thumbnail + title + date/comments)
- **Column 2 — "Best Product Deals" (continued)**: 4 more media-style items
- **Column 3 — "Brilliant Ideas"**: 4 media-style items

### 6. Footer (footer-area)
- Dark navy background (#04091e), white text
- 3-column layout:
  - **Col 1**: Footer logo + about paragraph
  - **Col 2 — "Quick Links"**: 2 sub-columns of link lists (Sitemaps, Categories, Archives, Advertise, Ad Choice | Privacy Policy, Terms of Use, Help Center, Newsletters, Feedback)
  - **Col 3 — "Most Viewed News"**: 2 small media items (thumbnail + title + date)
- **Bottom bar**: separator line, copyright text ("Made with Component Dock"), social icons (facebook, twitter, youtube, pinterest, rss)

## Requirements

### Feature: Torque template behaviour

#### Scenario: Header renders with navigation

- **GIVEN** the user visits the homepage
- **WHEN** the header loads
- **THEN** a top bar shows the current date and social icons
- **AND** a logo is displayed
- **AND** a navigation bar shows links: Home, Category, Archive, Elements, Contact
- **AND** a search icon is visible in the navbar

#### Scenario: Hero banner displays carousel

- **GIVEN** the user visits the homepage
- **WHEN** the hero banner loads
- **THEN** a full-width carousel with background image is displayed
- **AND** each slide shows a category badge, date, comment count, headline, and description
- **AND** carousel indicators are visible

#### Scenario: Editor's Choice shows 4 article cards

- **GIVEN** the user visits the homepage
- **WHEN** the Editor's Choice section loads
- **THEN** 4 article cards are displayed in a row
- **AND** each card shows an image, category badge, date, title, and excerpt

#### Scenario: Latest News shows 4 horizontal posts

- **GIVEN** the user visits the homepage
- **WHEN** the Latest News section loads
- **THEN** 4 horizontal media-style posts are displayed
- **AND** each post shows a thumbnail, category badge, date, title, and excerpt

#### Scenario: Travel and Food shows 8 small cards

- **GIVEN** the user visits the homepage
- **WHEN** the Travel and Food section loads
- **THEN** 8 small article cards are displayed in a 2×4 grid
- **AND** each card shows an image, title, date, and comment count

#### Scenario: Sidebar shows popular news widget

- **GIVEN** the user visits the homepage
- **WHEN** the sidebar loads
- **THEN** a "Most Popular News" widget is displayed
- **AND** it shows 1 featured article with image and excerpt
- **AND** a carousel of additional popular posts is available

#### Scenario: Sidebar shows social networks widget

- **GIVEN** the user visits the homepage
- **WHEN** the Social Networks widget loads
- **THEN** 6 social platform entries are displayed
- **AND** each shows an icon, follower/subscriber count, and call-to-action

#### Scenario: Sidebar shows newsletter widget

- **GIVEN** the user visits the homepage
- **WHEN** the Newsletter widget loads
- **THEN** an envelope icon in a pink circle is displayed
- **AND** a "Subscribe to our Newsletter" heading is shown
- **AND** an email input field and Subscribe button are present
- **AND** the card has a pink top border accent

#### Scenario: Product List shows 3 columns

- **GIVEN** the user visits the homepage
- **WHEN** the Product List section loads
- **THEN** 3 columns are displayed: "Best Product Deals" (2 columns) and "Brilliant Ideas" (1 column)
- **AND** each column contains 4 media-style items with thumbnail, title, and date

#### Scenario: Footer renders with all sections

- **GIVEN** the user visits the homepage
- **WHEN** the footer loads
- **THEN** a dark navy background is displayed
- **AND** a logo with about text is shown in the first column
- **AND** Quick Links are shown in two sub-columns
- **AND** "Most Viewed News" shows 2 small items
- **AND** a bottom bar shows copyright with "Component Dock" link and social icons

## Verification checklist

- [ ] Header: top bar with date + social icons renders
- [ ] Header: logo + navigation links render
- [ ] Header: search icon visible in navbar
- [ ] Hero: carousel with 3 slides renders with background image
- [ ] Hero: each slide has category badge, date, comments, headline, description
- [ ] Hero: carousel indicators visible
- [ ] Editor's Choice: section title renders
- [ ] Editor's Choice: 4 article cards in a row
- [ ] Editor's Choice: each card has image, badge, date, title, excerpt
- [ ] Latest News: 4 horizontal media posts
- [ ] Latest News: each post has thumbnail, badge, date, title, excerpt
- [ ] Travel and Food: 8 small cards in 2×4 grid
- [ ] Travel and Food: each card has image, title, date, comments
- [ ] Sidebar: "Most Popular News" widget with featured article + carousel
- [ ] Sidebar: Social Networks widget with 6 entries
- [ ] Sidebar: Newsletter widget with email input + subscribe button + pink accent
- [ ] Product List: 3 columns with 4 items each
- [ ] Footer: dark navy background
- [ ] Footer: logo + about text + Quick Links + Most Viewed News
- [ ] Footer: bottom bar with copyright + Component Dock link + social icons
- [ ] Design tokens: brand accent #ff1857 used for badges, buttons, accents
- [ ] Design tokens: Roboto font family applied
- [ ] Design tokens: square buttons (border-radius: 0)
- [ ] Responsive: mobile hamburger menu works
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to https://www.componentdock.com/

## Replication reference notes

- Live preview DOM fetched from https://preview.colorlib.com/theme/force/ on 2026-09-24
- CSS tokens extracted from css/style.css (53,982 bytes)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/force-free-template.jpg (vision tool unavailable, description based on DOM + CSS analysis)
- The template is a magazine/news blog with a clean, professional aesthetic
- Primary visual identity: hot pink (#ff1857) accents on white backgrounds with dark navy footer
- Bootstrap grid system used throughout (12-column responsive)
- Owl Carousel for popular posts slider in sidebar
- Font Awesome icons for social links and metadata
