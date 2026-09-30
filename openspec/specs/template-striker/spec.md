# Template: Striker (Sports)

## Purpose

Striker is a soccer-club website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Soccer"
website template (source: https://colorlib.com/wp/template/soccer/ — demo
club site with match results, league standings, news and videos), built
under a DIFFERENT name (Striker — the position that scores; single
lowercase word), per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source slug:** `soccer`
- **Source:** https://colorlib.com/wp/template/soccer/
- **Preview (LIVE, verified 2026-09-30 by direct fetch):**
  **https://preview.colorlib.com/theme/soccer/**
  (HTTP 200, 24,299 bytes, `<title>Soccer — Website by Colorlib</title>`)
- **Preview CSS:** `css/style.css` (25,240 bytes) — Bootstrap-derived base +
  hand-written template block. Template-specific rules include `body`
  (`#222831` bg, Montserrat 300), `.hero`, `.site-navbar` (absolute over
  hero), `.team-vs` (the dark VS result card), `.latest-news`
  (`.post-entry .caption` red diagonal), `.widget-next-match`,
  `.video-media .play-button`, `.footer-section`, `.heading` (+ `:before`
  red bar), `.btn`/`.btn-primary` (uppercase 12px/900/2px border), and the
  countdown styles.
- **Scripts (source):** jQuery + owl.carousel + a countdown plugin
  (`js/main.js`, `js/jquery.countdown.min.js`) — reimplement the countdown
  in React with `useEffect` + timers; reimplement the carousel with
  state/CSS scroll-snap; do NOT ship jQuery/owl.
- **Icons:** icomoon/flaticon glyph fonts — **REPLACE with
  lucide-react** (e.g. `Play`, `ChevronLeft`, `ChevronRight`, `Heart`,
  `Facebook`, `Twitter`, `Youtube`, `Instagram`), do not ship icon fonts.
- **Fonts:** Montserrat — load **Google Fonts `<link>` (300, 700, 900)**
  in `index.html`; weights used: 300 (body), 700 (headings/score), 900
  (buttons).
- **Assets:** hero photo (soccer ball in net), news photos, video
  thumbnails, player avatars, two team crests — use
  `https://picsum.photos/seed/striker-<n>/<w>/<h>` placeholders (e.g.
  `striker-hero`, `striker-1..3`, `striker-video-1..5`), never source
  assets. Team crests: picsum seeds or simple inline SVG badges.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/soccer-free-template.jpg
  (visually analyzed 2026-09-30; matches the live preview).
- **TEMPLATES.md:** "## Sports (9)" section, line 2842
  (`- [ ] **Soccer**`).

## Design tokens

(extracted from the live preview stylesheet + verified against the
screenshot; CSS values are canonical)

| Token                 | Value                                                                                                                                       | Notes                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Font family           | `"Montserrat", -apple-system, ..., sans-serif` (Google Fonts 300 + 700 + 900)                                                               | body 16px                                                                                  |
| Body color            | `gray`, weight `300`, line-height `1.7`                                                                                                     | most visible text is white on dark                                                         |
| Page background       | `#222831`                                                                                                                                   | dark blue-gray                                                                             |
| Brand red             | `#ee1e46`                                                                                                                                   | buttons, heading bars, widget title bars, play buttons, caption diagonal, nav active/hover |
| Yellow accent         | `#f6d743`                                                                                                                                   | declared in `.post-entry` rules but overridden by `#ee1e46` — effectively unused           |
| Footer background     | `#1a1e25`                                                                                                                                   | `.footer-section`                                                                          |
| Match-card background | `#0d0f13`                                                                                                                                   | `.team-vs`                                                                                 |
| Widget border         | `1px solid rgba(255,255,255,0.1)`                                                                                                           | `.widget-next-match`                                                                       |
| Light grays           | `#edf0f5`, `#f4f5f9`, `#25262a`                                                                                                             | secondary text/muted UI                                                                    |
| Hero                  | background photo, `cover`, centered + dark overlay (`.hero.overlay`)                                                                        | ball-in-net photo in screenshot                                                            |
| Navbar                | absolute, full width, transparent over hero; uppercase white links; active underline / hover `#ee1e46`                                      | `.site-navbar` z-index 1999                                                                |
| Buttons               | `text-transform: uppercase; font-size: 12px; font-weight: 900; border-width: 2px`                                                           | `.btn`                                                                                     |
| Button primary        | solid `#ee1e46` bg, white text (screenshot: "BOOK TICKET")                                                                                  | hover: `background: transparent; border-color: #fff; color: #fff`                          |
| Text link CTA         | white, no border ("Learn More" — `.more.light`)                                                                                             | hover: `#ee1e46` (`.more:hover`)                                                           |
| Section heading       | white, 20px, weight 700, with 10px wide `#ee1e46` vertical bar on the left (`.heading:before`)                                              | screenshot: "Latest News", "Videos", "Our Blog"                                            |
| Match VS card         | bg `#0d0f13`, `border-radius: 10px`, `margin-top: -90px` (overlaps hero), `box-shadow: 0 15px 30px rgba(0,0,0,0.1)`                         | `.team-vs`; screenshot shows the RIGHT half as solid red `#ee1e46` (diagonal split)        |
| Match score           | white, `3rem`, weight 700, absolutely centered between halves                                                                               | `.score` ("4 – 1" in screenshot)                                                           |
| Section padding       | `2.5em 0` mobile, `5em 0` desktop; `.latest-news` `100px 0`                                                                                 |                                                                                            |
| News cards            | photo + absolute caption overlay; caption reveal uses a red `#ee1e46` diagonal shape (`left: -12%`) + white title + author avatar/name/date | `.post-entry .caption`                                                                     |
| Widget title bar      | bg `#ee1e46`, white text, padding `16px 20px`                                                                                               | "Next Match", "Football League"                                                            |
| Play button           | 50px circle bg `#ee1e46` + 60px 2px `#ee1e46` ring, white play glyph; sits bottom-left of video thumb with caption                          | `.video-media .play-button`                                                                |
| Blog posts            | image + date badge (small `#ee1e46` pill, 12px) + title + excerpt + "Read more" link                                                        | `.custom-media`                                                                            |

## Section structure (from the live DOM)

1. **Navbar** — absolute over hero: wordmark logo image ("SOCCER™" in the
   screenshot — our own wordmark, e.g. "STRIKER"), uppercase links:
   Home · Matches · Players · Blog · Contact; hamburger + slide-in mobile
   menu on small screens (`.site-mobile-menu`).
2. **Hero** (`.hero.overlay`, bg photo + dark overlay) — right column
   (`col-lg-5 ml-auto`): h1 "World Cup Event", lorem subtext, countdown
   (weeks · days · hr · min · sec — screenshot shows big white numbers
   with small labels), CTAs: "Book Ticket" (red `btn-primary`) + "Learn
   More" (white text link).
3. **Match-result VS card** (`.team-vs`, overlaps hero by −90px): center
   big white score "4-1"; LEFT half (dark `#0d0f13`): crest, team name
   "LA LEGA (win)", 4 scorer lines "Name (jersey#)"; RIGHT half (solid
   red `#ee1e46`, diagonal split): crest, "JUVENDU (loss)", 4 scorer
   lines.
4. **Latest News** — heading "Latest News" (red left bar) + 3 photo
   cards; hover caption reveals red diagonal + article title + author
   (avatar, name, date).
5. **Dark section** (`.site-section.bg-dark`) — two
   `.widget-next-match` cards side by side (`col-lg-6` each), each with a
   red title bar:
   - "Next Match": VS block (crest vs crest + "vs" mark), match info
     ("Soccer" / "World Cup League" / "December 20th, 2020 9:30 AM GMT+0"
     / "New Euro Arena"), countdown (`#date-countdown2`).
   - "Football League": VS block + match info, then a **standings
     table** (columns: Team · P · W · D · L · PTS; 8 league rows, e.g.
     Football League 22 3 2 140 …).
6. **Videos** — heading "Videos" (red left bar) + prev/next arrow
   controls (`.custom-nav`) + horizontal carousel of video cards (thumb +
   red play button bottom-left + title caption); 6 items cycling the news
   titles in the source.
7. **Our Blog** — heading "Our Blog" + 2 `custom-media` posts: image +
   red date pill ("May 20, 2020") + title ("Romolu to stay at Real
   Nadrid?") + excerpt + "Read more" link.
8. **Footer** (`.footer-section`, `#1a1e25`) — 4 widget columns: News
   (All Club News, Media Center, Video, RSS), Tickets (Online Ticket,
   Payment and Prices, Contact & Booking, Tickets Coupon), Matches
   (Standings, World Cup, La Lega, Hyper Cup, World League), Social
   (Twitter, Facebook, Instagram, Youtube) with icon glyphs; bottom line:
   copyright + heart icon — **replace attribution with the mandatory
   Component Dock link** ("More templates at Component Dock",
   https://www.componentdock.com/).

## Requirements

### Requirement: Navbar renders over the hero

The page SHALL display a transparent navbar overlaid on the hero with the
club wordmark, uppercase navigation links, and a mobile menu toggle.

#### Scenario: Desktop navbar with club wordmark and links

```
Given the user visits the Striker home page
Then a navbar is displayed overlaid on the hero section
And a club wordmark (our own "STRIKER" wordmark, NOT the source logo) is shown on the left
And uppercase white links "Home", "Matches", "Players", "Blog", "Contact" are shown on the right
And the active link ("Home") has an underline indicator
When the user hovers a link
Then the link color becomes the brand red #ee1e46
```

#### Scenario: Mobile menu toggles

```
Given the viewport is mobile-sized
Then the inline links are hidden and a hamburger icon button is shown
When the user clicks the hamburger
Then a slide-in mobile menu panel opens with the same links
And the toggle exposes aria-expanded=true
When the user clicks it again (or the close icon)
Then the menu closes
```

### Requirement: Hero with countdown and CTAs

The hero SHALL show a photographic background with a dark overlay, a
headline, subtext, a five-unit countdown ticking every second, and the
primary and secondary calls to action.

#### Scenario: Hero content renders

```
Given the hero section is visible
Then a photographic hero background (picsum placeholder, dark overlay) fills the section
And an h1 headline ("World Cup Event" or paraphrase) is displayed in white on the right column
And a short subtext paragraph is displayed under the headline
```

#### Scenario: Countdown ticks toward the target event

```
Given the hero is visible
Then a countdown displays five units: weeks, days, hr, min, sec
And each unit shows a large white number with a small label below
When a second passes
Then the seconds unit decreases by one (and rolls over correctly)
And the component cleans up its timer on unmount
```

#### Scenario: Hero CTAs

```
Given the hero is visible
Then a "Book Ticket" button is displayed with solid #ee1e46 background, white uppercase 12px/900 text, and a 2px border
And a "Learn More" white text link is displayed beside it
When the user hovers "Book Ticket"
Then the button becomes transparent with a white border and white text
```

### Requirement: Match-result VS card

The page SHALL display a match-result card overlapping the hero, with the
home half on the left, the away half on the right, and the final score
centered between them.

#### Scenario: Result card overlaps the hero

```
Given the page renders
Then a rounded (10px radius) match-result card with #0d0f13 background and a drop shadow is displayed
And the card overlaps the bottom of the hero by approximately 90px (negative top margin)
```

#### Scenario: Score between two team halves

```
Given the result card is visible
Then a large white score ("4 - 1" or equivalent) is centered between the halves
And the LEFT half shows the home team crest, team name "LA LEGA" with a "(win)" suffix, and four scorer lines in the form "Name (jersey)"
And the RIGHT half has a solid #ee1e46 red background with a diagonal split from the dark half
And the right half shows the away team crest, team name "JUVENDU" with a "(loss)" suffix, and four scorer lines
```

### Requirement: Latest News section

The Latest News section SHALL render three photo cards whose caption
overlay reveals on hover or keyboard focus.

#### Scenario: News heading and cards

```
Given the Latest News section is visible
Then the heading "Latest News" (or paraphrase) is white with a 10px red vertical bar on its left
And three news cards are displayed in a row (stacked on mobile)
And each card shows a photo (picsum placeholder) covering the card
```

#### Scenario: Card caption reveal on hover

```
Given a news card is visible
When the user hovers the card
Then a caption overlay appears with a red #ee1e46 diagonal shape
And the article title is shown in white
And an author row shows a small round avatar, author name, and date
```

### Requirement: Next Match and Football League widgets

The dark widgets band SHALL show a Next Match widget with a ticking
countdown and a Football League widget with a standings table.

#### Scenario: Two dark widgets with red title bars

```
Given the dark widgets section is visible
Then two match widgets are displayed side by side (stacked on mobile)
And each widget has a 1px rgba(255,255,255,0.1) border
And each widget's title bar is solid #ee1e46 with white padding-16/20 text ("Next Match", "Football League")
```

#### Scenario: VS matchup block inside each widget

```
Given a widget is visible
Then two team crests are displayed with a "vs" mark between them
And team names are centered under each crest
And match info lines are shown: competition ("Soccer" / "World Cup League"), date ("December 20th, 2020 9:30 AM GMT+0"), venue ("New Euro Arena")
```

#### Scenario: Countdown in the Next Match widget

```
Given the "Next Match" widget is visible
Then a countdown (five units) is displayed below the match info
And it ticks every second, cleaning up on unmount
```

#### Scenario: League standings table in the Football League widget

```
Given the "Football League" widget is visible
Then a standings table is displayed with columns: Team, P, W, D, L, PTS
And eight team rows are rendered (e.g. Football League, Soccer, Juvendo, ...)
And the table is readable on dark background (white/gray text, subtle row separators)
```

### Requirement: Videos carousel

The Videos section SHALL render a carousel of video cards with
previous/next controls and red play buttons.

#### Scenario: Video section renders with controls

```
Given the Videos section is visible
Then the heading "Videos" (or paraphrase) shows the red left bar
And prev/next arrow buttons are displayed on the right of the heading
And a horizontal carousel of video cards is shown
And each card has a thumbnail (picsum placeholder), a red circular play button (50px, #ee1e46, with a 2px ring) at the bottom-left, and a white title caption
```

#### Scenario: Carousel navigation

```
Given the carousel is visible
When the user clicks the next arrow
Then the carousel advances to the next card(s)
When the user clicks the prev arrow
Then it goes back
And the controls are keyboard-focusable with aria-labels
```

### Requirement: Our Blog section

The blog section SHALL render two posts, each with an image, a date pill,
a title, an excerpt, and a read-more link.

#### Scenario: Blog posts render

```
Given the Our Blog section is visible
Then the heading shows the red left bar
And two blog posts are displayed
And each post shows an image, a small red date pill (12px), a title, an excerpt paragraph, and a "Read more" link
```

### Requirement: Footer

The footer SHALL show four link columns including social links, plus a
copyright line linking to Component Dock.

#### Scenario: Footer columns and social icons

```
Given the footer is visible
Then the footer background is #1a1e25 with muted rgba(255,255,255,0.5) 14px text
And four link columns are displayed: News, Tickets, Matches, Social
And the Social column lists Twitter, Facebook, Instagram, Youtube
And social icon buttons are shown with aria-labels
```

#### Scenario: Component Dock attribution

```
Given the footer is visible
Then the bottom line shows a copyright notice
And a link to https://www.componentdock.com/ is present, branded "Component Dock"
And NO ColorLib attribution or links appear anywhere in the page
```

### Requirement: Responsive layout

The layout SHALL adapt to mobile viewports: the navbar collapses to a
hamburger menu and stacked sections remain readable.

#### Scenario: Mobile viewport

```
Given the user views the page on a viewport narrower than 768px
Then the navbar collapses to the hamburger menu
And the hero text column spans full width
And the VS result card stacks its halves vertically (score still visible)
And the two widgets stack vertically
And the carousel remains horizontally scrollable
```

### Requirement: Accessibility

All interactive elements SHALL be keyboard reachable with visible focus
states, and icon-only controls SHALL expose accessible labels.

#### Scenario: Interactive elements

```
Given the page is rendered
Then all interactive elements (links, buttons, arrows, menu toggle) are keyboard reachable with visible focus states
And icon-only controls have aria-labels
And the mobile menu toggle exposes aria-expanded
And images have alt text
And countdown timers do not trap focus or announce every tick (aria-hidden on decorative countdown is acceptable)
```

## Verification checklist

- [ ] Montserrat (300/700/900) loaded via Google Fonts in `index.html`
- [ ] `@theme` tokens: `--color-brand: #ee1e46`, `--color-page: #222831`, `--color-card: #0d0f13`, `--color-footer: #1a1e25`
- [ ] Navbar absolute over hero: wordmark + uppercase links + active underline + red hover; mobile hamburger + slide-in menu with aria-expanded
- [ ] Hero: picsum hero photo + dark overlay; h1 + subtext right column; 5-unit ticking countdown (useEffect, cleanup); "Book Ticket" red uppercase button (hover → transparent + white border) + "Learn More" white link
- [ ] VS result card: `#0d0f13`, radius 10px, −90px overlap, shadow; centered 3rem score; dark left half (crest + "LA LEGA (win)" + 4 scorers); red right half with diagonal split (crest + "JUVENDU (loss)" + 4 scorers)
- [ ] Latest News: red-bar heading + 3 hover caption cards (red diagonal + title + author row)
- [ ] Dark section: 2 widgets with red title bars; VS blocks + info lines; ticking countdown in "Next Match"; standings table (Team/P/W/D/L/PTS, 8 rows) in "Football League"
- [ ] Videos: red-bar heading + prev/next arrows + carousel (red 50px play button + ring + captions), keyboard accessible
- [ ] Our Blog: 2 posts with red date pill + title + excerpt + "Read more"
- [ ] Footer `#1a1e25`: 4 link columns + social icons (aria-labels) + Component Dock link; zero ColorLib references anywhere in the app
- [ ] Placeholder images use deterministic `picsum.photos/seed/striker-*` URLs
- [ ] Lucide-react icons only (no icon fonts); no jQuery/owl — React countdown + native/state carousel
- [ ] 100% test coverage via `scripts/verify-app.sh striker`; PR `feat/template-striker`
