# Template: AdLog (Directory & Classifieds Landing)

## Purpose

AdLog is a single-page directory and classifieds landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "DirectoryAds" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a directory/classifieds template with a search hero, featured
ads carousel, popular categories grid, trending listings, testimonials, a
blog section, and a footer with search. AdLog recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "DirectoryAds" — directory/classifieds website template
  (source: https://colorlib.com/wp/template/directoryads/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/directoryads/`
  (HTTP 200, 167.8KB) + stylesheet `css/style.css` (27.1KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`directoryads-free-template.jpg`) confirms the visual design (clean white
  background, blue primary accent, directory listing layout).
- **Section order (1:1):**
  1. Header/navbar: "DirectoryAds" logo + nav links.
  2. Hero: "Welcome To DirectoryAds" headline + paragraph + search form
     (keyword input, location input with map icon, category dropdown, search
     button) + "Trending Search" tags (Real Estate, Books & Magazines,
     Furniture, Electronics, Cars & Vehicles).
  3. Featured Ads (`block-13` carousel): "Featured Ads" heading + carousel of
     listing cards (image, category tag, heart/bookmark icon, title, address,
     star rating with review count).
  4. Popular Categories (`overlap-category`): "Popular Categories" heading +
     6 category cards with icons, names, and listing counts (Cars & Vehicles
     1,921 · Furniture 2,339 · Real Estate 4,398 · Electronics 1,220 · Books
     & Magazines 1,332 · Others 500).
  5. Trending Today: "Trending Today" heading + 6 listing cards in a 2-column
     grid (image, category tag, heart icon, title, address, star rating).
  6. Testimonials: "Testimonials" heading + carousel of testimonial cards.
  7. Blog (`our-blog`): "Our Blog" heading + 3 blog cards (image, date,
     title, excerpt).
  8. Footer (`site-footer`): 3-column layout — About blurb + Navigations +
     Follow Us social icons + Search input. Copyright bar at bottom.

- **Design tokens extracted from `css/style.css`:**
  - Primary color: **#046df4** / **#2f89fc** (blue — buttons, links, accents).
  - Green accent: **#8bc34a** (used for some elements).
  - Dark text: **#212529** headings, **#666666** body.
  - Light backgrounds: **#f8f9fa**, **#edf0f5**.
  - Font: **"Nanum Gothic"** (sans-serif) with system fallbacks.
  - Buttons: `.btn-primary` blue, rounded.
  - Listing cards: horizontal layout with image left, content right.
  - Category tags: small colored labels.
  - Star ratings: yellow stars + review count.
  - Heart/bookmark icons on listings.
  - Footer: dark background with light text.

- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero with search form and trending
  tags; featured ads as a grid of listing cards with images, categories,
  ratings; popular categories as icon cards with counts; trending listings
  as a 2-column grid; testimonials as cards; blog as image cards; footer
  with search and social links. All images picsum-seeded, icons
  lucide-react (no assets copied).

AdLog lives in `apps/adlog` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "AdLog" and
nav links.

#### Scenario: Renders site name and navigation

    Given the page is loaded
    When I look at the navigation bar
    Then I see the text "AdLog" as the site name
    And I see navigation links

#### Scenario: Dark mode toggle

    Given the page is loaded
    When I look at the navigation bar
    Then I see a dark-mode toggle button

### Requirement: Hero search section

The system SHALL render a hero section with a search form and trending tags.

#### Scenario: Hero content

    Given the page is loaded
    When I look at the hero section
    Then I see the headline "Welcome To AdLog"
    And I see a search form with keyword, location, and category fields

#### Scenario: Trending tags

    Given the page is loaded
    When I look at the hero section
    Then I see trending search tags: "Real Estate", "Furniture",
      "Electronics", "Cars & Vehicles"

### Requirement: Featured ads

The system SHALL render a featured ads section with listing cards.

#### Scenario: Featured ads heading

    Given the page is loaded
    When I scroll to the featured ads section
    Then I see the heading "Featured Ads"

#### Scenario: Listing cards

    Given the page is loaded
    When I look at the listing cards
    Then I see cards with images, category tags, titles, addresses,
      star ratings, and review counts

### Requirement: Popular categories

The system SHALL render a popular categories section with icon cards.

#### Scenario: Categories heading

    Given the page is loaded
    When I scroll to the popular categories section
    Then I see the heading "Popular Categories"

#### Scenario: Category cards

    Given the page is loaded
    When I look at the category cards
    Then I see 6 categories with icons, names, and listing counts

### Requirement: Trending today

The system SHALL render a trending listings section with a 2-column grid.

#### Scenario: Trending heading

    Given the page is loaded
    When I scroll to the trending section
    Then I see the heading "Trending Today"

#### Scenario: Trending listings

    Given the page is loaded
    When I look at the trending listings
    Then I see listing cards with images, categories, titles, addresses,
      and star ratings

### Requirement: Testimonials

The system SHALL render a testimonials section with author photos and quotes.

#### Scenario: Testimonials heading

    Given the page is loaded
    When I scroll to the testimonials section
    Then I see the heading "Testimonials"

### Requirement: Blog section

The system SHALL render a blog section with post cards.

#### Scenario: Blog heading

    Given the page is loaded
    When I scroll to the blog section
    Then I see the heading "Our Blog"

#### Scenario: Blog cards

    Given the page is loaded
    When I look at the blog cards
    Then I see cards with images, dates, titles, and excerpts

### Requirement: Footer

The system SHALL render a footer with About, Navigations, Social, and
Search sections. The footer MUST link to `https://www.componentdock.com/`.

#### Scenario: Footer columns

    Given the page is loaded
    When I look at the footer
    Then I see an "About" section with description
    And I see "Navigations" with links
    And I see "Follow Us" with social icons
    And I see a search input

#### Scenario: Footer links to Component Dock

    Given the page is loaded
    When I look at the footer
    Then I see a link to "https://www.componentdock.com/" labeled
      "Component Dock"

### Requirement: Responsive layout

The system SHALL be responsive across mobile, tablet, and desktop viewports.

#### Scenario: Mobile navigation

    Given the viewport is 375px wide
    When I look at the navigation
    Then it adapts to mobile layout with a hamburger menu

## Verification checklist

- [ ] Navbar with "AdLog" logo and nav links
- [ ] Hero with search form and trending tags
- [ ] Featured ads carousel with listing cards
- [ ] Popular categories with 6 icon cards
- [ ] Trending listings in 2-column grid
- [ ] Testimonials section
- [ ] Blog section with 3 image cards
- [ ] Footer with About, Navigations, Social, Search + Component Dock link
- [ ] Primary blue (#046df4) for buttons and links
- [ ] Font: Nanum Gothic (Google Fonts)
- [ ] Dark mode toggle functional
- [ ] All images use picsum.photos seeded URLs
- [ ] No ColorLib references in app code
- [ ] Star ratings on listing cards
- [ ] Heart/bookmark icons on listings
