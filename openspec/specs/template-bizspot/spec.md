# Template: BizSpot (Directory Listing)

## Purpose

Recreation of ColorLib "Listio" — a local business directory listing template.
- **Source slug:** `listio`
- **Preview URL:** https://preview.colorlib.com/theme/listio/
- **ColorLib page:** https://colorlib.com/wp/template/listio/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/listio-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#FF377B` | Buttons, accents, links on hover, section subtitle spans, preloader spinner, search icon bg, sticky header bg (80% opacity) |
| Heading dark | `#072366` | Section title h2 elements |
| Heading base | `#140C40` | h1–h6 default color |
| Body text | `#10285d` | Paragraph text |
| Section subtitle text | `#5E5E5E` | `.section-tittle p` |
| Link default | `#635c5c` | Anchor tags |
| Font family | `"Josefin Sans", sans-serif` | All text, headings, buttons |
| Primary button bg | `#FF377B` | `.btn`, `.submit-btn`, `.submit-btn2`, `.btn_1`, `.base-btn` |
| Primary button hover bg | `#ec3472` | `.btn::before` overlay |
| Button border radius | `6px` | `.btn` primary CTA |
| Small button radius | `4px` | `.submit-btn`, `.border-btn`, search icon |
| Header button radius | `4px` | Search icon container |
| Section bg overlay gradient | `rgba(0,0,0,0.6)` → transparent | Hero overlay |
| Footer sticky bg | `rgba(94,3,34,0.8)` | Sticky header when scrolled |

## Page structure (section order, from live DOM)

1. **Navbar** — transparent header overlay on hero; search input (left), logo (center), nav links (right: Home, Explore, Pages dropdown, "Add Listing" button, My Account). Mobile hamburger menu.
2. **Hero** — full-width background image with dark gradient overlay. Left-aligned content: heading "Find your Destination" + search form (text input, category select, city select, "Search Destination" full-width button).
3. **Categories Carousel** — heading "We help you to find" / subtitle "Explore Categories". Horizontal carousel of icon cards (Hotel, Restaurant, Cafe, Shopping Mall, etc.) each with icon image, category name, listing count.
4. **CTA Banner** — split layout: left side has heading "Best Café & Bars", paragraph, "Explore Now" button; right side is a background image area. Uses `section-bg2` with background image.
5. **Featured Listings** — heading "Featured Listing" / subtitle "Explore Categories". 3-column grid (6 cards) of listing cards: each card has image with price badge ("$$$") + status badge ("Closed" / "Open Now"), category icon overlay, title, description, footer with restaurant icon + category name + heart icon. "Explore More" border button below.
6. **How It Works** — heading "How Listio Work" / subtitle "Explore Our Process". 3-column numbered steps (01: Find Businesses, 02: Review Listings, 03: Make a Reservation) on background image (`section_bg01.png`).
7. **Testimonials** — heading "Featured Listing" / subtitle "Explore Categories". Carousel of testimonial cards: quote text, avatar image, name ("Jacson Miller"), role ("Designer @Colorlib").
8. **Newsletter / Subscribe** — heading "Let's Stay In Touch", paragraph about newsletter. Email input + "Subscribe" button on background image (`section_bg02.png`).
9. **Latest News** — heading "Latest News" / subtitle "Explore Blog Post". 2-column grid of blog cards: image, tag button ("Tips"), date + author, title link.
10. **Footer** — 3-column layout: logo + description + social icons (Twitter, Facebook, Pinterest, LinkedIn); Quick Links; Company links. Footer bottom: copyright text.
11. **Back to Top** — fixed circular button bottom-right.

## Gherkin requirements

### Feature: BizSpot Directory Listing Template

#### Scenario: Navbar renders with all navigation elements
- Given the page is loaded
- Then a navbar is visible with a logo, navigation links (Home, Explore, Pages), and an "Add Listing" button
- And a search input is visible in the header
- And the navbar becomes sticky with a semi-transparent background on scroll

#### Scenario: Hero section displays search form
- Given the hero section is in view
- Then a heading "Find your Destination" is visible
- And a search form with text input, category dropdown, city dropdown, and submit button is visible
- And the hero has a full-width background image with dark gradient overlay

#### Scenario: Categories carousel shows category cards
- Given the categories section is in view
- Then a section heading "We help you to find" with subtitle "Explore Categories" is visible
- And at least 5 category cards are displayed in a horizontal carousel
- And each card shows an icon, category name, and listing count

#### Scenario: CTA banner displays with split layout
- Given the CTA section is in view
- Then a heading "Best Café & Bars" is visible
- And a paragraph describing local businesses is visible
- And an "Explore Now" button is visible
- And the section has a background image on the right side

#### Scenario: Featured listings grid shows listing cards
- Given the featured listings section is in view
- Then a heading "Featured Listing" with subtitle "Explore Categories" is visible
- And 6 listing cards are displayed in a 3-column grid
- And each card has an image, price badge, status badge, title, description, category, and heart icon
- And an "Explore More" button is visible below the grid

#### Scenario: How It Works section shows numbered steps
- Given the How It Works section is in view
- Then a heading about how the service works is visible
- And 3 numbered steps are displayed (Find, Review, Reserve)
- And each step has a number, title, and description
- And the section has a background image

#### Scenario: Testimonials section displays review carousel
- Given the testimonials section is in view
- Then a carousel of testimonial cards is visible
- And each card shows a quote, avatar image, name, and role

#### Scenario: Newsletter section collects email subscriptions
- Given the newsletter section is in view
- Then a heading "Let's Stay In Touch" is visible
- And an email input field is visible
- And a "Subscribe" button is visible
- And the section has a background image

#### Scenario: Blog section shows latest posts
- Given the blog section is in view
- Then a heading "Latest News" with subtitle "Explore Blog Post" is visible
- And 2 blog post cards are displayed
- And each card shows an image, tag, date, author, and title

#### Scenario: Footer renders with links and copyright
- Given the footer is visible
- Then a logo and description are displayed in the first column
- And social media icon links are visible
- And Quick Links and Company link lists are displayed
- And a copyright notice is displayed in the footer bottom
- And the footer links to https://www.componentdock.com/

#### Scenario: Back to top button appears on scroll
- Given the user scrolls down the page
- Then a circular "back to top" button appears in the bottom-right corner
- And clicking it scrolls smoothly to the top

## Verification checklist

- [ ] All 11 sections present in correct order
- [ ] Brand color #FF377B used for buttons, accents, hover states
- [ ] Font family "Josefin Sans" applied throughout
- [ ] Hero has background image with gradient overlay
- [ ] Search form in hero is functional (controlled inputs)
- [ ] Categories carousel scrolls horizontally
- [ ] Featured listing cards match 3-column grid layout
- [ ] CTA banner has split layout with background image
- [ ] How It Works has numbered steps on background
- [ ] Testimonial carousel navigates between cards
- [ ] Newsletter has email input + subscribe button
- [ ] Blog section shows 2 post cards
- [ ] Footer has 3 columns + copyright + Component Dock link
- [ ] Back to top button appears on scroll
- [ ] Mobile responsive: hamburger menu, stacked layouts
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
