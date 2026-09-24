# Template: Shatter (Magazine / News Blog)

## Purpose

Shatter is a magazine/news blog template in the free-react-templates monorepo.
It is a React recreation of the ColorLib "Smashed" free template (source:
https://colorlib.com/wp/template/smashed/; preview:
https://preview.colorlib.com/theme/smashed/), built under a DIFFERENT name
(**Shatter**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a full-page magazine layout built with Bootstrap 4, Owl
Carousel, jQuery, and Font Awesome. The hero is a complex 3-column grid: a
left stack of 3 small post cards (category tag + date + comment count +
headline + excerpt), a center large featured post (full-bleed image, overlay,
category tag, headline, excerpt, "Read More" button, carousel arrows), and a
right sidebar with weather widget (location, date, temperature, description)
and music playlist widget (3 numbered list items). Below the hero: a dark
`#252525` navbar with logo (red diamond icon + "SMASHED" in white + "MAGAZINE"
subtitle), nav links (Home, Archive, Category, Pages dropdown, Contact) in
white text with the active link in red, and a search form. Then "Editors'
Picks" — 4 horizontal post cards (thumbnail left, category tag + date +
headline right). Then "International News" — a 2-column split: left column
has a large featured post + 2 smaller posts, right column has a sidebar with
category links. Then "Technology News" — 4-column post grid (image + category
tag + date + headline, some with play button overlay for video). Then
"Exclusive Videos" — carousel of large video-style post cards (full-bleed
image with overlay, category tag, date, comment count, headline). Then
"Popular News Feed" — 4-column post grid. Then footer: dark `#252525`
background, 3 columns (logo + description, quick links in 2 columns, most
viewed news with thumbnails).

## Naming

The ColorLib source name "Smashed" is FORBIDDEN as the app name. **Shatter**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name.

- Source slug: `smashed`
- Source URL: https://colorlib.com/wp/template/smashed/
- Preview URL: https://preview.colorlib.com/theme/smashed/
- New name: `shatter`
- Package: `@free-react-templates/shatter`
- Deploy target: `shatter.free.componentdock.com`

## Design tokens (from replication research)

- **Primary brand color:** `#ff1857` (vivid red/crimson — used on category
  tags, active nav links, "Read More" fill button, hover states, accent on
  active pagination)
- **Title color:** `#222222` (near-black, used for headlines)
- **Text color:** `#777777` (grey, body text)
- **Secondary text:** `#999999` (lighter grey, dates, meta)
- **Page background:** `#f9f9ff` (very light lavender/white — sections like
  editors-area, popular-news, and the overall body)
- **Dark background:** `#252525` (navbar and footer background)
- **Dark card background:** `#2e2e2e` (weather widget, music widget)
- **Font — body:** `"Open Sans", sans-serif` (400 weight)
- **Font — headings/navigation:** `"Roboto", sans-serif` (400, 600)
- **Button style:** `.primary-btn` — transparent background, white text,
  category tag style; `.primary-btn.fill` — `#ff1857` background, white text,
  no border-radius (square/0px on primary buttons)
- **Section gap classes:** `section-gap-top` (60px top margin),
  `section-gap-top-60` (similar)
- **Carousel nav arrows:** dark rounded buttons with white chevrons (left/right)
- **Overlay:** `overlay overlay-bg` on image cards (dark semi-transparent
  gradient overlay for text readability)
- **No border-radius on primary buttons** (0px square)
- **Comment count icon:** Linearicons bubble icon
- **Search icon:** Linearicons magnifier
- **Video play button:** circular with play icon overlay

## Gherkin requirements

### Feature: Shatter Magazine Template

#### Scenario: Page loads with full magazine layout
Given the user visits the Shatter homepage
Then they see a banner area with a 3-column grid (left posts, center
  featured, right widgets)
And the banner area spans the full viewport width
And the page background is light (`#f9f9ff`)

#### Scenario: Banner hero section — left column
Given the banner area is displayed
Then 3 small post cards are stacked vertically in the left column
And each card shows an image with dark overlay
And each card shows a category tag (red `#ff1857`), date, and comment count
And each card shows a headline and short excerpt

#### Scenario: Banner hero section — center carousel
Given the banner area is displayed
Then the center column shows a large featured post
And the featured post has a full-bleed image with dark overlay
And the featured post shows a category tag, date, and comment count
And the featured post shows a large headline and excerpt
And a "Read More" fill button is displayed (`#ff1857` background)
And left/right carousel navigation arrows are present

#### Scenario: Banner hero section — right sidebar widgets
Given the banner area is displayed
Then the right column shows a weather widget
And the weather widget shows location ("United States"), date, temperature
  ("28°C"), and weather description
And the right column shows a music playlist widget below the weather widget
And the music playlist shows 3 numbered list items

#### Scenario: Navigation bar
Given the page is scrolled past the banner
Then a sticky/fixed navbar appears with dark `#252525` background
And the navbar shows a logo (diamond icon + "SMASHED" → "SHATTER" name)
And the navbar shows nav links: Home, Archive, Category, Pages, Contact
And the active nav link is highlighted in red `#ff1857`
And a search icon/button is displayed on the right
And clicking the search icon reveals a search input

#### Scenario: Editors' Picks section
Given the user views the Editors' Picks section
Then a heading "Editors' Picks" is displayed
And 4 horizontal post cards are shown in a row
And each card has a thumbnail image on the left
And each card shows a category tag, date, and headline on the right
And the section background is `#f9f9ff`

#### Scenario: International News section
Given the user views the International News section
Then a heading "International News" is displayed
And the section uses an 8/4 column split (content left, sidebar right)
And the left column shows a large featured post (full-width image, category
  tag, date, comment count, headline, and excerpt paragraph)
And the left column shows 2 smaller posts below
And the right column shows a sidebar with category links

#### Scenario: Technology News section
Given the user views the Technology News section
Then a heading "Technology News" is displayed
And 4 post cards are shown in a row
And each card has an image, category tag, date, and headline
And some cards have a play button overlay on the image (video indicator)

#### Scenario: Exclusive Videos section
Given the user views the Exclusive Videos section
Then a heading "Exclusive Videos" is displayed
And a carousel of large video post cards is shown
And each card has a full-bleed image with dark overlay
And each card shows category tag, date, comment count, and headline
And carousel navigation arrows are present

#### Scenario: Popular News Feed section
Given the user views the Popular News Feed section
Then a heading "Popular News Feed" is displayed
And 4 post cards are shown in a row
And each card has an image, category tag, date, and headline

#### Scenario: Footer
Given the user views the footer
Then the footer has a dark `#252525` background
And the footer shows 3 columns
And the first column shows the logo and a description paragraph
And the second column shows quick links (Sitemaps, Categories, Archives,
  Advertise, Ad Choice, Privacy Policy, Terms of Use, Help Center,
  Newsletters, Feedback) in 2 sub-columns
And the third column shows "Most Viewed News" with thumbnail + headline
  cards
And the footer links to `https://www.componentdock.com/` (Component Dock)

#### Scenario: Responsive layout
Given the user views on mobile
Then the 3-column banner collapses to a single column
And the editors' picks stack vertically
And the 4-column grids collapse to 2 columns or 1 column
And the navbar shows a hamburger menu

#### Scenario: Placeholder images
Given any post card or section shows an image
Then the image is a deterministic placeholder from picsum.photos
And the seed is based on the template name (e.g. `picsum.photos/seed/shatter-1/800/600`)

#### Scenario: No ColorLib references
Given any file in `apps/shatter/`
Then no file contains the string "colorlib" or "preview.colorlib.com"
And no comment references the ColorLib source

## Verification checklist

- [ ] All 7 sections render: banner, editors, international news, tech news,
  exclusive videos, popular news, footer
- [ ] Banner hero has 3-column layout with left/center/right
- [ ] Center carousel works with left/right navigation
- [ ] Navbar is dark with red active link
- [ ] Category tags are red `#ff1857` square buttons
- [ ] Section headings use "Roboto" font
- [ ] Body text uses "Open Sans" font
- [ ] Footer links to Component Dock
- [ ] All images use picsum.photos placeholders
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
