# Template: ListFinder (Directory / Listing)

## Purpose

Recreation of ColorLib **DirectoryAds** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **ColorLib source**: https://colorlib.com/wp/template/directoryads/
- **Preview URL**: https://preview.colorlib.com/theme/directoryads/
- **Deployed name**: `listfinder`
- **Deploy URL**: https://listfinder.free.componentdock.com

A classifieds / directory listing homepage with hero search, featured ads carousel, popular categories grid, trending listings, testimonials, blog posts, newsletter, and dark footer.

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#2f89fc` | Buttons, links, hover states, hero CTA, popular-category hover |
| `--brand-primary-dark` | `#046df4` | Popular-category number badge hover |
| `--font-body` | `"Nanum Gothic", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | All text |
| `--text-dark` | `#4d4d4d` | Body text color |
| `--text-heading` | `#000` | Headings, category labels |
| `--bg-footer` | `#333333` | Site footer background |
| `--bg-badge` | `#e9ecef` | Category badges, popular-category number pills |
| `--bg-overlay` | `rgba(0, 0, 0, 0.3)` | Hero image overlay |
| `--radius-card` | `7px` | Listing cards, popular-category cards, overlap-category container |
| `--radius-badge` | `30px` | Category badges, number pills, buttons (fully rounded) |
| `--shadow-card` | `0 2px 20px -2px rgba(0, 0, 0, 0.1)` | Listing card box-shadow |
| `--color-warning` | `#ffc107` (text-warning) | Star rating fill |
| `--color-secondary` | `#6c757d` (text-secondary) | Empty star rating |
| `--color-heart-hover` | `#f23a2e` | Bookmark heart hover |
| `--btn-primary-bg` | `#2f89fc` | Search button, View All Posts button |

Font family note: Use Google Fonts `Nanum Gothic` via `<link>` in `index.html` (weights 400, 700, 800).

## Sections (order as rendered)

1. **Navbar** — Sticky top nav with logo "ListFinder", links: Home, Ads, About (dropdown), Blog, Contact, Log In, Register (primary button badge). Mobile hamburger menu.
2. **Hero** — Full-width background image with dark overlay. Centered heading "Welcome To ListFinder", subtitle text. Search form: keyword input, location input (with map-pin icon), category dropdown, search button. Trending search tags below form.
3. **Featured Ads** — Section heading "Featured Ads". Horizontal carousel of listing cards. Each card: thumbnail image, category badge pill, heart bookmark icon, title link, address, star rating (4/5 stars filled), review count.
4. **Popular Categories** — Section heading "Popular Categories" (primary color). 6 category cards in a 2x3 grid. Each: icon, category name, count pill. Hover: card turns primary blue with white text. Categories: Cars & Vehicles, Furniture, Real Estate, Books & Magazines, Electronics, Other.
5. **Trending Today** — Section heading "Trending Today" (primary color). 2-column grid of horizontal listing cards (same card structure as Featured Ads).
6. **Testimonials** — Section heading "Testimonials" (primary color). Carousel of testimonials, each with avatar image, name, and quoted block text.
7. **Our Blog** — Section heading "Our Blog" + subtitle. 3-column grid of blog post cards: image, title, meta (author, date, category tag), excerpt. "View All Posts" button centered below.
8. **Newsletter** — Primary-blue background section. 2-column layout: left = heading "Newsletter" + description, right = email input + Subscribe button.
9. **Footer** — Dark background (#333333). 3-column layout: About text (6-col), Navigations links (3-col), Follow Us social icons (3-col). Right sidebar: search form. Bottom: copyright with Component Dock link.

## Gherkin scenarios

```gherkin
Feature: ListFinder Template

  Scenario: Navbar renders all links
    Given the page loads
    Then the navbar displays links for Home, Ads, About, Blog, Contact
    And a "Log In" link is visible
    And a "Register" button styled as a primary badge is visible

  Scenario: Hero section displays search form
    Given the hero section is visible
    Then a heading "Welcome To ListFinder" is shown
    And a keyword search input is present
    And a location search input with map-pin icon is present
    And a category dropdown with "All Categories" as default is present
    And a "Search" button is present
    And trending search tags (iPhone, Cars, Flowers, House) are shown

  Scenario: Featured Ads carousel shows listing cards
    Given the Featured Ads section is visible
    Then a heading "Featured Ads" is shown
    And at least 4 listing cards are rendered
    And each card has a thumbnail image, category badge, title, address, and star rating

  Scenario: Popular Categories grid shows 6 categories
    Given the Popular Categories section is visible
    Then a heading "Popular Categories" is shown in primary color
    And 6 category cards are rendered
    And each card has an icon, category name, and count pill
    And hovering a category card changes background to primary blue

  Scenario: Trending Today shows 2-column listing grid
    Given the Trending Today section is visible
    Then a heading "Trending Today" is shown
    And listing cards are displayed in a 2-column layout
    And each card has a thumbnail, category, title, address, and star rating

  Scenario: Testimonials carousel renders testimonial cards
    Given the Testimonials section is visible
    Then a heading "Testimonials" is shown
    And at least 3 testimonial cards are rendered
    And each card has an avatar image, name, and quoted text

  Scenario: Blog section shows 3-column post grid
    Given the Blog section is visible
    Then a heading "Our Blog" is shown
    And 3 blog post cards are rendered
    And each card has an image, title, meta info, and excerpt
    And a "View All Posts" button is visible

  Scenario: Newsletter section has email subscription form
    Given the Newsletter section is visible
    Then a heading "Newsletter" is shown on primary-blue background
    And an email input field is present
    And a "Subscribe" button is present

  Scenario: Footer has multi-column layout
    Given the footer is visible
    Then the footer has a dark background (#333333)
    And About text is shown
    And navigation links (About Us, Services, Testimonials, Contact Us) are present
    And social media icons (Facebook, Twitter, Instagram, LinkedIn) are present
    And a search form with "Search products..." placeholder is present
    And a copyright notice with "Component Dock" link is present

  Scenario: Mobile responsive layout
    Given the page is viewed on a mobile viewport
    Then the navbar collapses to a hamburger menu
    And the hero search form stacks vertically
    And listing cards stack vertically
    And the category grid stacks to single column
    And the footer columns stack vertically
```

## Verification checklist

- [ ] Navbar: all links render, mobile hamburger works, dropdown opens on About
- [ ] Hero: background image loads, search form has 3 inputs + submit, trending tags clickable
- [ ] Featured Ads: carousel scrolls, cards have all elements (image, category, bookmark, title, address, stars)
- [ ] Popular Categories: 6 cards render, icons visible, count pills show, hover turns primary blue
- [ ] Trending Today: 2-column grid on desktop, cards match Featured Ads structure
- [ ] Testimonials: carousel cycles, avatar + name + quote render
- [ ] Blog: 3-column grid, images load, meta info renders, "View All Posts" button works
- [ ] Newsletter: primary-blue background, email input + subscribe button
- [ ] Footer: dark bg, 3-column layout, social icons, search form, Component Dock link in copyright
- [ ] Mobile: responsive breakpoints work, hamburger menu toggles, columns stack
- [ ] Design tokens: Nanum Gothic font loaded, #2f89fc primary color used, 7px card radius, 30px badge radius
