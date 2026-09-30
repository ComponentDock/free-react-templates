# Template: Sideline (Sports)

## Purpose

Sideline is a sports-team / sports-magazine website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sportz" website template (source:
https://colorlib.com/wp/template/sportz/ — soccer/football club site with a
full-bleed photo hero slider, overlapping hover-reveal feature cards, a
next-match countdown + tabbed latest-results section, a red-overlay game
highlights band with video popup, a latest-news grid and a dark newsletter
footer), built under a DIFFERENT name (Sideline — the area beside the pitch;
single lowercase word), per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

- **Source slug:** `sportz`
- **Source:** https://colorlib.com/wp/template/sportz/
- **Preview (LIVE, verified 2026-09-30 by direct fetch):**
  **https://preview.colorlib.com/theme/sportz/**
  (HTTP 200, 55,944 bytes, `<title>Sportz &mdash; Colorlib Sports Team
  Template</title>`)
- **Preview CSS:** `css/bootstrap.min.css` (customized Bootstrap —
  `.btn-primary` / `.bg-primary` overridden to `#f23a2e`) + `css/style.css`
  (23,032 bytes, template block). Template-specific rules include `.btn`
  (uppercase, 0.2s transition), `.btn.btn-primary` (font-weight 300,
  letter-spacing .2em), `.bg-image.overlay` (rgba(0,0,0,0.4)),
  `.bg-image.overlay-primary` (rgba(242,58,46,0.9)),
  `.bg-image.overlay-success` (overridden to rgba(238,198,10,0.9) yellow),
  `.slide-one-item` (hero slider, 800px desktop / 300px mobile),
  `.feature-blocks-1` (margin-top -70px, hover-reveal text, bg scale 1.1),
  `.block-12` / `.block-13` (highlights band + white text-inner cards with an
  80px×4px `#f23a2e` top accent bar), `.site-blocks-vs` (bg-light matches
  section), `.site-navbar .site-menu` (black nav + `#edf0f5` dropdowns,
  `#25262a`/`#f4f5f9` hover), `.site-footer` (`#333333`, links `#999999`),
  `.site-mobile-menu` (fullscreen dark mobile menu).
- **Scripts (source):** jQuery + owl.carousel (hero slider, highlights
  carousel), stellar parallax (bg-image fixed sections), magnific-popup
  (Vimeo video popup), jQuery countdown (`#date-countdown`). Reimplement in
  React: state-driven sliders (or CSS scroll-snap), `useEffect` countdown,
  `background-attachment: fixed` for parallax bands, modal/lightbox or plain
  link for the video; do NOT ship jQuery/owl/magnific/stellar.
- **Icons:** icomoon glyph font (facebook, instagram, twitter, linkedin,
  envelope, phone, close2, play) — **REPLACE with lucide-react** (`Facebook`,
  `Instagram`, `Twitter`, `Linkedin`, `Mail`, `Phone`, `X`, `Play`,
  `ChevronLeft`, `ChevronRight`, `Menu`), do not ship icon fonts.
- **Fonts:** Mukta — load **Google Fonts `<link>` (300, 400, 700)** in
  `index.html` (the preview self-hosts Mukta via cf-fonts @font-face 300/400/
  700; weights used: 300 body/buttons, 400 body, 700 headings/nav).
- **Assets:** hero slider photos, feature-card images, next-match team
  thumbnails, promo banner bg, highlights card images, news images — use
  `https://picsum.photos/seed/sideline-<n>/<w>/<h>` placeholders (e.g.
  `sideline-hero-1..3`, `sideline-feature-1..3`, `sideline-team-1..2`,
  `sideline-promo`, `sideline-highlight-1..3`, `sideline-news-1..3`), never
  source assets. Logo: recreate our own shield badge (inline SVG) with the
  "Sideline" wordmark — do NOT copy the source "sportz" shield PNG.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/sportz-free-template.jpg
  (visually analyzed 2026-09-30; matches the live preview).
- **TEMPLATES.md:** "## Sports (9)" section, line 2845
  (`- [ ] **Sportz**`).

## Design tokens

(extracted from the live preview stylesheet + verified against the
screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Mukta", sans-serif` (Google Fonts 300/400/700) | body 16px/300; headings 700 |
| Brand red | `#f23a2e` | `.btn-primary` / `.bg-primary` (customized Bootstrap), active nav link, logo shield, `overlay-primary` band rgba(242,58,46,0.9), block-12 card top accent bar 80px×4px |
| Yellow accent | `#eec60a` (`rgba(238,198,10,0.9)`) | `.overlay-success` override — next-match promo banner overlay |
| Hero overlay | `rgba(0, 0, 0, 0.4)` | `.bg-image.overlay` on hero slides |
| Light section bg | `#f8f9fa` | Bootstrap `bg-light` — matches/results section |
| Dropdown gray | `#edf0f5` bg · hover text `#25262a` · hover bg `#f4f5f9` | nav dropdown panels; `.border-top` also `#edf0f5` |
| Footer | `#333333` bg · headings `#fff` · links `#999999` → `#fff` hover · body copy `#737373` | `.site-footer` padding 4em 0 |
| Navbar | `#000` (bg-black) | right-aligned uppercase white menu; active link `#f23a2e` |
| Body text | `#333333` | `.text-black` = `#000` on headings |
| Muted | `#999999` | feature-block card copy, footer links; card paragraph `#ccc` |
| Buttons (`.btn`) | square — NO border-radius (markup `rounded-0`); uppercase; font-weight 300; letter-spacing .2em; 0.2s transition; bg `#f23a2e`, white text | hero CTA `py-3 px-5`, card CTA `px-4 py-2` |
| Hero slider | ~800px full-bleed (300px mobile); dark 0.4 overlay; white h1 inside a translucent black box; red READ MORE button; white prev/next chevrons bottom-center (padding 20px, font-size 30px, disabled opacity .2) | owl-carousel → React state / scroll-snap |
| Feature blocks | 3-col bg-image cards, `margin-top: -70px` (overlap hero), z-index 2; hover/focus: card rises 10px + shadow `0 10px 40px -5px rgba(0,0,0,0.4)`, bg image scales 1.1, black rgba(0,0,0,0.9) overlay, text block reveals (white h5 + `#ccc` p + red Read More) | keep text keyboard-reachable; visible state on touch |
| Matches section | `bg-light #f8f9fa`, section padding 5em 0 (2.5em mobile); left: "Next match" panel — countdown block, home/away square thumbs + names with muted "vs" between, league line ("Brazil Premier League — Round 10"), score "3:2", date/time "10 September / 7:30 AM"; right: "Latest Matches" + Bootstrap `nav nav-pills` tabs (Match 1 / Match 2 / Match 3) + tab panes of fixture rows (team + league label — score — team + league label); plus a rounded promo banner: bg image + yellow rgba(238,198,10,0.9) overlay, stellar parallax | countdown → `useEffect` |
| Highlights band | `bg-primary #f23a2e` + bg image + `overlay-primary` rgba(242,58,46,0.9), fixed/parallax background; centered white "More Game Highlights" h2 + Vimeo popup play button; carousel of `.block-12` cards: image with bottom gradient, uppercase white date `.meta`, white `.text-inner` box (20px heading black link + excerpt) with 80px×4px `#f23a2e` top accent bar and shadow `0 0 20px -5px rgba(0,0,0,0.3)`; card `.text` pulled up -100px over the image | React carousel; modal or link for video |
| Latest news | white section; 3 `.post-entry` cards: image, `h5` black title link, uppercase small date "By … • Sep 25, 2018", excerpt | |
| Footer | `#333333`, 4 columns: About (heading + blurb), Recent Blog (3 linked titles), Quick Menu (Home, Matches, News, Team, About Us, Privacy Policy, Contact Us, Membership), Follow Us (social icons) + Watch Video + Subscribe Newsletter (text + email input + Send button); bottom bar: "© <year> All rights reserved" + **Component Dock link** (replacing the source Colorlib attribution); zero ColorLib references in the app | |
| Mobile menu | fullscreen dark overlay (`.site-mobile-menu`), close icon, stacked uppercase links | hamburger toggle with aria-expanded |

## Section structure (from the live DOM)

1. **Header** — utility top row (white): social icons left (Facebook,
   Instagram, Twitter, LinkedIn), right: envelope + email ("your email at
   domain") and phone ("+1 232 3532 321"). Below: black navbar — shield
   logo left (overhangs the bar in the screenshot), right-aligned uppercase
   menu: Home (active, red; dropdown: Menu One/Two/Three + Sub Menu with
   nested items), News (dropdown: Menu One/Two/Three), Matches, Team, About,
   Contact. Dropdowns: `#edf0f5` panels, `#25262a` text, `#f4f5f9` hover.
2. **Hero slider** (full-bleed, ~800px) — photographic slides with 0.4 dark
   overlay; content block: white bold h1 "Russia's World Cup Championship"
   in a translucent black box + red square READ MORE; white prev/next
   chevrons bottom-center; owl-carousel in source → React state.
3. **Feature blocks** (3-col, overlapping hero bottom by -70px) — bg-image
   cards ("Russia's World Cup Championship" + lorem + Read More); text
   hidden until hover/focus (desktop), bg zoom + black overlay on hover.
4. **Matches** (`bg-light`) — left "Next match" panel: countdown
   (`#date-countdown`), home thumb "Sea Hawks" vs away thumb "Patriots",
   league "Brazil Premier League — Round 10", score "3:2", date "10
   September / 7:30 AM"; right "Latest Matches": pills "Match 1 / Match 2 /
   Match 3" + fixture rows (Packers — Brazil 3:2 — Steelers — London,
   repeated patterns); below: rounded yellow-overlay parallax promo banner.
5. **Highlights** (red parallax band) — "More Game Highlights" + video
   popup play button + carousel of dated cards ("May 20th 2018 / World Cup
   Championship / lorem") with white text-inner boxes + red accent bars.
6. **Latest News** (white) — 3 post cards: "RealMad vs Striker — Who Will
   Win?" + "By … • Sep 25, 2018" + excerpt.
7. **Footer** (`#333`) — About Sportz blurb, Recent Blog (3 items), Quick
   Menu, Follow Us + Watch Video + Subscribe Newsletter + Send; copyright
   bar with Component Dock attribution.

## Gherkin requirements

### Requirement: Header utility bar and black navbar render

#### Scenario: Desktop header
```
Given the user visits the Sideline home page
Then a white utility top row shows social icon links (Facebook, Instagram, Twitter, LinkedIn) on the left
And the right side shows an email link (with envelope icon) and a phone link (with phone icon)
And below it a black navbar shows a shield logo badge on the left (inline SVG, "Sideline" wordmark, brand red shield)
And the right-aligned menu items are "Home", "News", "Matches", "Team", "About", "Contact"
And menu items are uppercase white; the active item "Home" is brand red #f23a2e
And "Home" and "News" expose dropdown panels (Home: Menu One, Menu Two, Menu Three, Sub Menu with nested items; News: Menu One, Menu Two, Menu Three)
When the user hovers a nav link
Then the link color becomes #f23a2e
When the user opens a dropdown
Then the panel background is #edf0f5 with #25262a text and #f4f5f9 hover rows
```

#### Scenario: Mobile menu toggles
```
Given the viewport is mobile-sized
Then the inline menu is hidden and a hamburger icon button is shown
When the user clicks the hamburger
Then a fullscreen dark overlay menu opens with large uppercase links "Home", "News", "Matches", "Team", "About", "Contact"
And the toggle exposes aria-expanded=true
When the user clicks it again (or the close icon)
Then the menu closes
```

### Requirement: Full-bleed hero photo slider

#### Scenario: Hero slide renders
```
Given the hero slider is visible
Then a ~800px full-bleed photographic slide (picsum placeholder, dark rgba(0,0,0,0.4) overlay) fills the width
And a translucent black content box shows a white bold headline (e.g. "Continental Cup Championship" — paraphrase the source headline) and a red square "Read More" button (uppercase, letter-spacing .2em)
```

#### Scenario: Slider navigation
```
Given the hero slider is visible
Then white prev/next chevron controls are shown bottom-center
When the user clicks "next"
Then the slider advances to the next slide (next headline/CTA)
And the controls are keyboard-focusable with visible focus states
And disabled-direction state (opacity .2) applies at the ends if applicable
```

### Requirement: Overlapping hover-reveal feature cards

#### Scenario: Feature cards render
```
Given the feature block row is visible
Then three equal cards are displayed in a row (stacked on mobile)
And each card is a background-image block overlapping the hero bottom by about -70px
And each card shows a white heading, a #ccc paragraph, and a red "Read More" button
```

#### Scenario: Card hover/focus reveal
```
Given the feature cards are visible on a pointer device
When the user hovers (or keyboard-focuses) a card
Then the card lifts 10px and casts shadow 0 10px 40px -5px rgba(0,0,0,0.4)
And the background image scales to 1.1 with a rgba(0,0,0,0.9) overlay
And the text block becomes visible
And the text remains reachable/readable on touch viewports (no hover-only content loss)
```

### Requirement: Next-match countdown panel

#### Scenario: Next match content
```
Given the Matches section is visible
Then a "Next match" panel displays a countdown to the upcoming fixture
And it shows the home team thumbnail + name, a muted "vs", and the away team thumbnail + name (uppercase black)
And a league line reads "Brazil Premier League — Round 10" (or paraphrase)
And the score "3:2" and the date line "10 September / 7:30 AM" (or paraphrase) are shown
When the countdown ticks
Then the numbers update without re-rendering the whole page layout
And timers clean up on unmount
```

### Requirement: Tabbed latest matches list

#### Scenario: Tabs render and switch
```
Given the Latest Matches block is visible
Then the heading "Latest Matches" is displayed above pill tabs "Match 1", "Match 2", "Match 3"
And the first tab pane is active by default and lists fixture rows
And each fixture row shows: home team name with a small league label, the score "3:2", and the away team name with a league label (e.g. "Packers — Brazil 3:2 Steelers — London")
When the user clicks "Match 2"
Then the second pane becomes active (ARIA tab pattern: aria-selected, tabpanel wiring)
And its fixture rows render
```

### Requirement: Yellow-overlay promo banner

#### Scenario: Promo banner renders
```
Given the Matches section is visible
Then a rounded banner with a photographic background (picsum) and a yellow rgba(238,198,10,0.9) overlay is displayed
And the banner shows team matchup text (e.g. team names / league line)
And the background gets a subtle parallax/fixed treatment
```

### Requirement: Red game-highlights band with video popup

#### Scenario: Highlights band renders
```
Given the highlights section is visible
Then the band background is brand red #f23a2e over a photographic background with an rgba(242,58,46,0.9) overlay and a fixed/parallax background treatment
And a centered white heading "More Game Highlights" is displayed
And a circular/square play button (lucide Play icon, aria-label "Play video") is shown
```

#### Scenario: Highlight cards carousel
```
Given the highlights carousel is visible
Then each card shows a photo with a bottom gradient, an uppercase white date meta (e.g. "May 20th 2018"), and a white text box with a 80px×4px red top accent bar, a black 20px title link, and an excerpt
When the user activates the carousel controls (or scrolls on touch)
Then the next set of cards becomes visible
And the play button opens the video (modal/lightbox or external link) without layout shift
```

### Requirement: Latest news grid

#### Scenario: News cards render
```
Given the Latest News section is visible
Then three post cards are displayed in a row (stacked on mobile)
And each card shows an image, a black bold title link (e.g. "Continental Final — Who Will Win?"), an uppercase date line "By <author> • <date>", and a short excerpt
When the user hovers a title link
Then it turns brand red #f23a2e
```

### Requirement: Dark footer with newsletter and Component Dock attribution

#### Scenario: Footer content
```
Given the footer is visible
Then the footer background is #333333 with white column headings
And an "About" column shows a short blurb (#737373 body copy)
And a "Recent Blog" column lists three linked titles
And a "Quick Menu" column lists "Home", "Matches", "News", "Team", "About Us", "Privacy Policy", "Contact Us", "Membership"
And a "Follow Us" area shows social icon links, a "Watch Video" link, and a "Subscribe Newsletter" block with an email input and a "Send" button
And footer links are #999999 and turn white on hover
```

#### Scenario: Component Dock attribution
```
Given the footer bottom bar is visible
Then a copyright notice with the current year is shown
And a link to https://www.componentdock.com/ is present, branded "Component Dock"
And NO ColorLib attribution or links appear anywhere in the page
```

### Requirement: Responsive layout

#### Scenario: Mobile viewport
```
Given the user views the page on a viewport narrower than 768px
Then the navbar collapses to the hamburger menu
And the hero slider height reduces (~300px) with the content box still readable
And the feature cards stack vertically with their text content available (no hover dependency)
And the matches panel columns stack; tabs remain usable; fixture rows reflow
And the highlights carousel becomes swipeable/stacked and the news grid becomes one column
And the footer columns stack
```

### Requirement: Accessibility

#### Scenario: Interactive elements
```
Given the page is rendered
Then all interactive elements (nav links, dropdowns, slider chevrons, card CTAs, tabs, play button, newsletter form, menu toggle) are keyboard reachable with visible focus states
And icon-only controls have aria-labels
And the mobile menu toggle exposes aria-expanded
And the tab list implements the ARIA tabs pattern (aria-selected + tabpanel wiring)
And images have alt text
And form inputs have associated labels
And countdown/ticker regions do not trap focus or announce every tick
```

## Verification checklist

- [ ] Mukta (300/400/700) loaded via Google Fonts in `index.html`
- [ ] `@theme` tokens: `--color-brand: #f23a2e`, `--color-accent: #eec60a`,
      `--color-ink: #333333`, `--color-mist: #f8f9fa`, `--color-panel:
      #edf0f5`, `--color-footer: #333333`
- [ ] Header: white utility row (social icons + email + phone) + black
      navbar with inline-SVG shield logo, uppercase menu, red active state,
      `#edf0f5` dropdowns; mobile hamburger + fullscreen dark menu with
      aria-expanded
- [ ] Hero slider: ~800px picsum slides with 0.4 dark overlay, translucent
      black headline box + red READ MORE, white chevrons bottom-center,
      keyboard accessible (React state, no owl)
- [ ] Feature cards: 3-col bg-image cards overlapping hero by -70px; hover/
      focus lift + zoom + black overlay + text reveal; text usable on touch
- [ ] Next match panel: useEffect countdown (cleanup on unmount), team
      thumbs + "vs", league line, score, date/time
- [ ] Latest matches: ARIA pill tabs (Match 1/2/3) + fixture rows
      (team/league — score — team/league)
- [ ] Promo banner: yellow rgba(238,198,10,0.9) overlay on picsum bg, fixed
      parallax treatment
- [ ] Highlights band: #f23a2e + rgba(242,58,46,0.9) fixed-overlaid bg,
      "More Game Highlights", play button (aria-label), block-12 style cards
      (date meta + white text box + 80px×4px red accent bar)
- [ ] Latest news: 3 post cards (image, title link, uppercase byline/date,
      excerpt; red title hover)
- [ ] Footer `#333333`: About / Recent Blog / Quick Menu / Follow Us +
      Watch Video + Subscribe Newsletter (label + input + Send) + copyright
      bar with Component Dock link; zero ColorLib references anywhere in the
      app
- [ ] Placeholder images use deterministic `picsum.photos/seed/sideline-*`
      URLs; icons lucide-react only (no icomoon); no jQuery/owl/magnific/
      stellar — React state sliders, useEffect countdown, CSS fixed
      backgrounds
- [ ] 100% test coverage via `scripts/verify-app.sh sideline`; PR
      `feat/template-sideline`
