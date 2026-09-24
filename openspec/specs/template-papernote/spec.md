# Template: Papernote (News / Magazine)

## Purpose

Papernote is a single-page news/magazine landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Newspaper" free template (source:
https://colorlib.com/wp/template/newspaper/), built under a DIFFERENT name
(**Papernote**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/newspaper/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/newspaper-free-template.jpg

The original is a Bootstrap 4 + jQuery page with a mega-menu navbar, breaking
news ticker, featured post grid, popular news widget, video post section with
dark overlay, editor's pick grid, and a dark footer with multiple widget
columns. It targets a news/media publication site.

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| **Primary brand** | `#ee002d` (bright red) | Breaking news badges, category labels, newsletter accent, hover |
| **Dark background** | `#02031c` (near-black navy) | Top header bar, newsletter section bg |
| **Alt section bg** | `#eff4f9` (very light blue-gray) | Popular news area, editor's pick area |
| **Body background** | `#fff` (white) | Main page background, featured post area |
| **Text primary** | `#000` (black) | Headings, article titles |
| **Text secondary** | `#393939` (dark gray) | Body text, descriptions |
| **Text muted** | `#656565` (medium gray) | Post meta (dates, author) |
| **Text light** | `#a5a5a5` (light gray) | Post meta accents |
| **Border/divider** | `#d0d5d8` (light gray) | Post separators |
| **Font family** | `"Roboto"`, sans-serif (Google Fonts: Roboto 300,400,500,700,900) | Body and headings |
| **Button radius** | `5px` (slightly rounded) | Category badges, search button |
| **Badge radius** | `0` (sharp corners) | Breaking news badge rectangles |
| **Avatar radius** | `50%` (circle) | Author avatars |
| **Overlay bg** | `rgba(2, 3, 28, 0.9)` (dark navy translucent) | Video section bg overlay |
| **Footer bg** | `#152535` (dark blue-gray) | Footer area |
| **Footer text** | `#a8a8a8` (light gray on dark) | Footer links and text |

## Section structure (from live preview DOM — order is 1:1)

1. **Top Header** (`.top-header-area`) — Dark navy (`#02031c`) background bar.
   Left: Logo text "Papernote" in white (replaces "The News Paper").
   Right: Login and Register links (white text), plus a search bar with
   magnifying glass icon button (red `#ee002d` background).

2. **Navigation Bar** (`.newspaper-main-menu`) — White background, full-width.
   Mega-menu with dropdown categories: Home, Pages, Mega Menu, Politics,
   Breaking News, Business, Technology, Health, Travel, Sports, Contact.
   Active item highlighted. Hamburger toggle on mobile.

3. **Hero / Breaking News** (`.hero-area`) — White background, two-column
   layout. Left (col-lg-8): Two breaking news ticker rows — each has a red
   badge label ("Breaking News", "International") with headline text to the
   right. Right (col-lg-4): Ad banner placeholder (landscape image with
   "Summer Trip" / "Buy Now" overlay — replace with a generic ad placeholder).

4. **Featured Post Area** (`.featured-post-area`) — White background. Two-column
   asymmetric grid:
   - Left large post (col-lg-8): Large hero image, red "FINANCE" category tag,
     large headline "Financial news: A new company is born today at the stock
     market", author byline ("By Christinne Williams" in red).
   - Right column (col-lg-4): 4-5 smaller stacked post cards, each with
     thumbnail image, red category label (FINANCE, POLITICS, HEALTH), headline,
     timestamp ("7:00 AM | April 14").

5. **Popular News + Newsletter** (`.popular-news-area`) — Light blue-gray
   background (`#eff4f9`). Two-column layout:
   - Left (col-lg-8): Section heading "Popular News" (red accent). 4 popular
     post items in a 2-column grid, each with thumbnail, title, post meta
     (date, comments count).
   - Right (col-lg-4): Section heading "Info" with numbered list ("4 Most
     Popular News" — 4 items with rank number + text). Below that, a
     "Newsletter" widget with email input + subscribe button.

6. **Video Post Section** (`.video-post-area`) — Dark overlay background
   (`rgba(2,3,28,0.9)`) with background image. Contains 3 video post cards
   with play button overlays. Dark-themed section with white text.

7. **Editor's Pick** (`.editors-pick-post-area`) — Light blue-gray background
   (`#eff4f9`). Section heading "Editor's Pick". Two-column layout:
   - Left (col-lg-8): 6 post cards in a 2x3 grid, each with thumbnail,
     category tag, headline, post meta (time + date).
   - Right (col-lg-4): "World News" sidebar with 5 smaller post items (thumbnail
     + headline).

8. **Footer Ad** (`.footer-add-area`) — Full-width ad banner placeholder
   (landscape image).

9. **Footer** (`.footer-area`) — Dark background (`#152535`). Logo "Papernote"
   in white. Four widget columns: "Politics" (links), "Featured" (links),
   "FAQ" (links), "+More" (links). Bottom footer bar with copyright and
   "Component Dock" link.

## Gherkin requirements

### Feature: Papernote — News/Magazine Template

  Background:
    Given the user navigates to the Papernote template page
    Then the page loads with a dark top header bar at the top

  Scenario: Top header displays logo and search
    When the top header is visible
    Then the logo "Papernote" is displayed on the left in white text
    And "Login" and "Register" links are visible on the right
    And a search bar with a red search button is displayed

  Scenario: Navigation bar shows mega menu categories
    When the navigation bar is visible
    Then navigation links are displayed including "Home", "Pages", "Mega Menu"
    And "Politics", "Breaking News", "Business", "Technology" links are shown
    And "Health", "Travel", "Sports", "Contact" links are shown

  Scenario: Hero section shows breaking news tickers
    When the hero section is visible
    Then a "Breaking News" red badge with a headline is displayed
    And an "International" red badge with a headline is displayed
    And an ad banner placeholder is shown on the right

  Scenario: Featured post area shows main article and side posts
    When the featured post area is visible
    Then a large featured post with hero image is displayed on the left
    And the featured post has a red "FINANCE" category label
    And the featured post has a large headline and author byline
    And 4-5 smaller post cards with thumbnails are shown on the right
    And each side post shows a category label, headline, and timestamp

  Scenario: Popular news section shows trending articles
    When the user scrolls to the popular news section
    Then the heading "Popular News" is displayed
    And 4 popular post items are shown in a grid
    And each item has a thumbnail, title, and post meta

  Scenario: Newsletter widget collects email subscriptions
    When the newsletter widget is visible
    Then the heading "Newsletter" is displayed
    And an email input field is shown
    And a subscribe button is visible

  Scenario: Info widget shows most popular ranking
    When the info widget is visible
    Then the heading "Info" is displayed
    And "4 Most Popular News" is shown
    And 4 ranked items with numbers 1-4 are listed

  Scenario: Video section shows video posts with dark overlay
    When the user scrolls to the video section
    Then a dark overlay background with background image is displayed
    And 3 video post cards with play button overlays are shown
    And the section has white text on dark background

  Scenario: Editor's pick shows curated articles
    When the user scrolls to the editor's pick section
    Then the heading "Editor's Pick" is displayed
    And 6 post cards are shown in a 2x3 grid on the left
    And each card has a thumbnail, category tag, headline, and meta
    And a "World News" sidebar with 5 items is shown on the right

  Scenario: Footer ad banner is displayed
    When the user scrolls to the footer ad area
    Then a full-width ad banner placeholder is shown

  Scenario: Footer shows site info and navigation
    When the footer is visible
    Then the logo "Papernote" is displayed
    And four widget columns ("Politics", "Featured", "FAQ", "+More") are shown
    And each column contains relevant navigation links
    And a copyright notice with "Component Dock" link is displayed

## Verification checklist

- [ ] All 9 sections present in correct order
- [ ] Dark top header with logo, login/register, search bar
- [ ] Navigation bar with mega menu categories
- [ ] Hero: breaking news tickers with red badges + ad placeholder
- [ ] Featured posts: large left post + 4-5 right side posts
- [ ] Popular news: 4 items in grid + newsletter widget + info ranking
- [ ] Video section: dark overlay with 3 video post cards
- [ ] Editor's pick: 6 post cards grid + World News sidebar
- [ ] Footer ad banner placeholder
- [ ] Footer: dark bg, logo, 4 widget columns, copyright
- [ ] Brand color #ee002d used for category badges, search, accents
- [ ] Roboto font loaded via Google Fonts
- [ ] Slightly rounded buttons (5px radius) on badges
- [ ] Sharp-cornered breaking news badge rectangles
- [ ] Placeholder images from picsum.photos
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] `apps/papernote/public/CNAME` = `papernote.free.componentdock.com`
- [ ] `apps/papernote/package.json` homepage = `https://papernote.free.componentdock.com`
