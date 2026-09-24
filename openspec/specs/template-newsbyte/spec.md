# Template: NewsByte (News/Magazine)

## Purpose

Recreation of the ColorLib **Magnews** template.
- **Source slug:** `magnews`
- **Source URL:** https://colorlib.com/wp/template/magnews/
- **Preview URL:** https://preview.colorlib.com/theme/magnews/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design Tokens

Extracted from the live preview at `https://preview.colorlib.com/theme/magnews/` and its stylesheet `css/style.css`.

### Colors

| Token               | Value     | Usage                                    |
|----------------------|-----------|------------------------------------------|
| brand-primary        | `#EF233C` | Active nav links, category badges, hover |
| brand-dark           | `#07090C` | Header backgrounds, nav bar, dark areas |
| brand-body           | `#2C2C2C` | Body text color                          |
| brand-grey           | `#DDD`    | Borders, separators                      |
| brand-light-bg       | `#FFFFFF` | Page background, cards                   |
| brand-dark-alt       | `#222`    | Secondary dark for nav hover, borders    |
| brand-white          | `#FFF`    | Text on dark backgrounds                 |

### Typography

| Element       | Font Family          | Weight   | Size Notes                       |
|----------------|----------------------|----------|----------------------------------|
| Body           | Open Sans, sans-serif| 400      | Standard body text               |
| Headings/Nav   | Lato, sans-serif     | 400/700  | Nav items, section titles         |
| Category badge | Lato                 | 700      | Uppercase, white on `#EF233C`    |

### Layout & Shapes

- **Border radius:** 0 (sharp, no rounding — Bootstrap-style flat)
- **Buttons:** flat, background `#EF233C`, white text, no border-radius
- **Nav bar:** solid dark `#07090C`, active link gets `#EF233C` background
- **Section borders:** 1px solid `#DDD` separators between articles
- **Images:** full-width article thumbnails, no border-radius
- **Carousel:** Owl Carousel with center navigation arrows

## Section Structure (top to bottom)

1. **Top header bar** — dark `#07090C` background with nav links (About Us, Contact, Advertisement, Privacy, Login) on the left, social icons on the right, search bar centered
2. **Center header** — Logo "MAGNEWS 24H" on the left, ad space placeholder on the right (728×90)
3. **Main navigation bar** — dark `#07090C`, categories: Home, News, Sport, Lifestyle, Fashion, Music, Business; search icon on right; active state = `#EF233C` background
4. **Hero carousel/slider** — two large side-by-side featured article cards with image overlay, category badge "NEWS" on `#EF233C`, white headline text, date + comment count at bottom
5. **Trending Posts section** — "Trending Posts" title, row of 4 article thumbnails with image + title below; red down-arrow separator between hero and this section
6. **Tabbed content section** — "Stay Connected" title with tabs (News, Sport) — tabbed article lists with thumbnails + titles
7. **Sidebar widgets** — "Subscribe to Newsletter" email input + button, "Most Read" widget, "Popular Video" widget, "Popular Posts" widget
8. **Featured Posts section** — large featured article cards in grid layout
9. **Footer** — dark `#07090C` background, four-column layout: About widget, Gallery widget, Social widget, Tweets widget; copyright bar at bottom

## Gherkin Requirements

### Feature: NewsByte Template

#### Scenario: Top Header Bar renders correctly
  Given the user visits the NewsByte homepage
  Then a dark top header bar is visible with navigation links (About Us, Contact, Advertisement, Privacy, Login)
  And social media icons are displayed on the right side
  And a search bar is centered in the header

#### Scenario: Logo and Ad Area render correctly
  Given the top header bar is visible
  Then the logo "NEWSBYTE" is displayed on the left with a "24H" badge
  And an ad space placeholder is displayed on the right

#### Scenario: Main Navigation Bar renders correctly
  Given the user visits the NewsByte homepage
  Then a dark navigation bar is visible below the logo area
  And category links are displayed: Home, News, Sport, Lifestyle, Fashion, Music, Business
  And the active link has a red (`#EF233C`) background
  And a search icon is visible on the right

#### Scenario: Hero Carousel displays featured articles
  Given the user visits the NewsByte homepage
  Then a carousel with two large side-by-side featured article cards is visible
  And each card has a full-bleed image with dark overlay
  And each card shows a red "NEWS" category badge
  And each card shows a white headline and date + comment count

#### Scenario: Trending Posts section displays thumbnails
  Given the hero carousel is visible
  Then a "Trending Posts" section is displayed below
  And 4 article thumbnails are shown in a row
  And each thumbnail has an image and a title below

#### Scenario: Tabbed Content section allows switching tabs
  Given the user scrolls to the tabbed content section
  Then the "News" tab is active by default with article thumbnails
  And clicking "Sport" switches to show sport articles

#### Scenario: Sidebar Subscribe widget accepts email
  Given the user sees the sidebar
  Then an email input field and subscribe button are visible in the newsletter widget

#### Scenario: Footer renders with four columns
  Given the user scrolls to the bottom
  Then a dark footer is visible with four columns: About, Gallery, Social, Tweets
  And a copyright bar is at the very bottom with Component Dock attribution

## Verification Checklist

- [ ] Top header bar: dark background, nav links, social icons, search bar
- [ ] Logo area: "NEWSBYTE" + "24H" badge, ad space
- [ ] Main nav: dark bar, 7 category links, active state red, search icon
- [ ] Hero carousel: 2 side-by-side cards, image overlay, category badge, headline, meta
- [ ] Red arrow separator between hero and trending
- [ ] Trending Posts: 4 article thumbnails in a row
- [ ] Tabbed content: News/Sport tabs, article lists
- [ ] Sidebar: Subscribe, Most Read, Popular Video, Popular Posts widgets
- [ ] Featured Posts grid
- [ ] Footer: dark, 4-column layout, copyright with Component Dock link
- [ ] Design tokens: brand-primary `#EF233C`, brand-dark `#07090C`, Open Sans + Lato
- [ ] Placeholder images via picsum.photos
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
