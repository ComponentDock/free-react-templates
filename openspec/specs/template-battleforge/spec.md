# Template: Battleforge (Gaming Website)

## Purpose

Battleforge is a single-page gaming website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Game Warrior" free template (source:
https://colorlib.com/wp/template/game-warrior/), built under a
DIFFERENT name (**Battleforge**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 gaming template with an Owl Carousel hero
slider, news ticker, 4-column feature cards, a recent-games grid on a
dark background, tournament listings, game reviews with score badges,
a blog/comments footer top section, and a standard dark footer. The
template uses the Roboto font family, an amber/gold (#ffb320) brand
accent on a near-black (#131313) base, and category badges in four
colors (red, green, purple, blue). Buttons are fully rounded pills
(border-radius: 50px).

**Preview URL:** https://preview.colorlib.com/theme/gamewarrior/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/gamewarrior-free-template.jpg

## Design Tokens (extracted from preview CSS)

| Token                | Value                         | Notes                                      |
| -------------------- | ----------------------------- | ------------------------------------------ |
| Font family          | `'Roboto', sans-serif`        | Weights 400, 500, 700 via Google Fonts     |
| Brand color (amber)  | `#ffb320`                     | Buttons, user panel bg, header border, hover |
| Dark background      | `#131313`                     | Header, section backgrounds                |
| Heading color        | `#131313`                     | h2–h5 on light sections                    |
| Body text color      | `#878787`                     | Paragraphs                                 |
| Badge: new           | `#ff205f`                     | Red category badge                         |
| Badge: strategy      | `#4eae60`                     | Green category badge                       |
| Badge: racing        | `#694eae`                     | Purple category badge                      |
| Badge: adventure     | `#40abf5`                     | Blue category badge                        |
| Button radius        | `50px`                        | Fully rounded pill shape                   |
| Button padding       | `16px 30px`                   |                                            |
| Button font          | 15px, weight 500              |                                            |
| Section padding      | `97px 0` (.spad class)        | Top and bottom padding                     |
| Loader animation     | Border rotation, `#f44336` / `#673ab7` | Preloader colors               |

### Dark section backgrounds
- Recent Games section: dark textured background (`recent-game-bg.png`)
- Review section: dark textured background (`review-bg.png`)
- Footer top section: decorative footer background image
- All content sections use white/light backgrounds with dark headings

## Section Structure (in order)

1. **Preloader** — Full-screen white with spinning border loader
2. **Header** — Dark (#131313) bar with logo, Login/Register pill
   (amber bg), horizontal nav (Home, Games, Blog, Forums, Contact)
3. **Hero Slider** — Full-width Owl Carousel with 2 slides, each
   containing: background image, large heading ("The Best Games Out
   There" with "Games" highlighted), subtext paragraph, "Read More"
   amber pill button
4. **Latest News Ticker** — Horizontal scrolling news items with
   colored category badges (new/strategy/racing)
5. **Feature Section** — 4-column grid of feature cards, each with
   background image overlay, category badge, title, excerpt, comment
   count. On dark bg.
6. **Recent Games** — 3-column grid with image thumbnails, category
   badges, title, excerpt, comment link, star/heart icons. Dark
   textured background section.
7. **Tournaments** — 2-column layout, each tournament with image
   thumbnail, "Premium Tournament" label, game name, dates,
   participants, author, prizes. Light background.
8. **Recent Reviews** — 4-column grid of review cards, each with
   cover image, colored score badge (yellow/green/purple/pink),
   game title, excerpt. Dark textured background.
9. **Footer Top** — 3-column layout: logo + description, Latest Posts
   (3 blog items with thumbnails), Top Comments (4 comment items
   with author avatars). Decorative background image.
10. **Footer** — Dark bar with nav links + copyright text

## Gherkin Requirements

### Feature: Battleforge — Gaming Website Template

  Scenario: Header displays correctly
    Given the user visits the Battleforge homepage
    Then the header is visible with dark background
    And the site logo is displayed on the left
    And the Login/Register button is shown with amber background
    And the navigation menu shows Home, Games, Blog, Forums, Contact

  Scenario: Hero slider renders
    Given the user visits the Battleforge homepage
    Then the hero section displays a full-width carousel
    And the heading reads "The Best Games Out There"
    And a "Read More" amber pill button is visible
    And the carousel auto-plays between slides

  Scenario: News ticker scrolls
    Given the user visits the Battleforge homepage
    Then the latest news ticker is visible below the hero
    And it shows at least 3 news items with category badges
    And the items scroll horizontally

  Scenario: Feature cards render in 4-column grid
    Given the user visits the Battleforge homepage
    Then the feature section displays 4 cards
    And each card has a background image
    And each card shows a category badge (new/strategy/racing/adventure)
    And each card has a title, excerpt, and comment count

  Scenario: Recent games grid displays
    Given the user visits the Battleforge homepage
    Then the recent games section shows 3 game cards
    And each card has a thumbnail image and category badge
    And each card has a title, excerpt, and comment link
    And each card shows star and heart icons

  Scenario: Tournaments section shows 2 tournaments
    Given the user visits the Battleforge homepage
    Then the tournaments section displays 2 tournament items
    And each item shows a "Premium Tournament" label
    And each item shows game name, dates, participants, and prizes

  Scenario: Reviews section renders 4 review cards
    Given the user visits the Battleforge homepage
    Then the reviews section shows 4 review cards
    And each card has a cover image and colored score badge
    And each card has a game title and excerpt

  Scenario: Footer top shows 3-column layout
    Given the user visits the Battleforge homepage
    Then the footer top section shows logo + description
    And Latest Posts displays 3 blog items with thumbnails
    And Top Comments displays 4 comment items

  Scenario: Footer navigation
    Given the user visits the Battleforge homepage
    Then the footer shows navigation links (Home, Games, Blog, Forums, Contact)
    And the footer links to Component Dock

  Scenario: Responsive behavior
    Given the user views Battleforge on a mobile device
    Then the navigation collapses to a hamburger menu
    And the feature grid stacks to single column
    And the tournament section stacks vertically
    And all content remains readable

## Verification Checklist

- [ ] Preloader animation works on initial load
- [ ] Header has dark background with amber bottom border
- [ ] Login/Register pill renders with amber background
- [ ] Hero carousel auto-plays and has manual navigation
- [ ] News ticker scrolls horizontally with category badges
- [ ] Feature cards show background images with overlays
- [ ] Recent games cards have image thumbnails + star/heart icons
- [ ] Tournaments show detailed info (dates, participants, prizes)
- [ ] Review cards have colored score badges
- [ ] Footer top has 3-column layout with blog/comment lists
- [ ] Footer links to Component Dock
- [ ] All interactive elements have proper hover states
- [ ] Mobile responsive layout works correctly
- [ ] No references to ColorLib in app code
- [ ] All placeholder images use picsum.photos or similar
- [ ] Footer links to https://www.componentdock.com/
