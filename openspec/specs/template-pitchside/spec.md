# Template: Pitchside (Sports)

## Purpose

Pitchside is a soccer-club news & fixtures website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Specer" website template (source:
https://colorlib.com/wp/template/specer/ — club site with match fixtures,
results, news feed, videos, league table, fan poll), built under a DIFFERENT
name (Pitchside — the touchline where fans stand; single lowercase word),
per the monorepo naming mandate (never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `specer`
- **Source:** https://colorlib.com/wp/template/specer/
- **Preview (LIVE, verified 2026-09-30 by direct fetch):**
  **https://preview.colorlib.com/theme/specer/**
  (HTTP 200, 69,789 bytes, `<title>Specer | Template</title>`)
- **Preview CSS:** `css/style.css` (43,869 bytes) — Bootstrap-derived base +
  hand-written template block. Template-specific rules include
  `.header-section` (solid #dd1515 bar), `.hero-section` (700px flex
  centered over `set-bg` photo), `.trending-news-section` (#151618 strip,
  red 32%-width title block), `.match-section` (two `.mc-table` columns,
  rows bg `rgba(21,22,24,0.9)`), `.soccer-section` (4-up `.soccer-item`
  cards, 405px, red `.si-tag` badges), `.latest-section` (`.news-item
.left-news` big cards + `.points-table` sidebar), `.video-section`
  (200px `.video-item` thumbs, hover play-btn, `.vi-time` duration chip),
  `.popular-section` (240px overlay `.popular-item` cards with sport-tag
  color variants, `.follow-links` sidebar, `.vote-option` radio poll),
  `.footer-section` (set-bg photo, `.fs-social` hover #dd1515,
  `.copyright-option`), `.section-title` (3px 70px #dd1515 underline bar),
  `.primary-btn` (solid #dd1515, square, 14px/36px padding), dropdown nav.
- **Scripts (source):** jQuery + slicknav + owl.carousel (trending news
  slider + soccer feed) + magnific-popup (video lightbox) — reimplement in
  React (slider via state/CSS scroll-snap, video modal via state);
  do NOT ship jQuery/owl/magnific.
- **Icons:** Font Awesome glyph fonts — **REPLACE with lucide-react**
  (e.g. `Play`, `Search`, `Calendar`, `Edit`, `Facebook`, `Twitter`,
  `Instagram`, `Youtube`, `Linkedin`, `ArrowLeft`, `ArrowRight`), do not
  ship icon fonts.
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400, 500, 700)**
  in `index.html`; weights used: 300 (h3 section titles), 400 (body),
  500 (nav/meta/card titles), 700 (match scores, widget titles).
- **Assets:** hero photo (night stadium, packed stands), match background
  (dark low-poly), soccer feed photos (4), latest news photos (5),
  video thumbnails (5), popular post photos (5), team flag images (~12),
  vote background — use `https://picsum.photos/seed/pitchside-<n>/<w>/<h>`
  placeholders (e.g. `pitchside-hero`, `pitchside-match`, `pitchside-feed-1..4`,
  `pitchside-news-1..5`, `pitchside-video-1..5`, `pitchside-pop-1..5`,
  `pitchside-flag-1..12`, `pitchside-vote`), never source assets.
  Flags: picsum seeds or simple inline SVG flag badges.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/specer-free-template.jpg
  (visually analyzed 2026-09-30; matches the live preview).
- **TEMPLATES.md:** "## Sports (9)" section, line 2843
  (`- [ ] **Specer**` — the item immediately after "Soccer"/Striker at
  line 2842).

## Design tokens

(extracted from the live preview stylesheet + verified against the
screenshot; CSS values are canonical)

| Token              | Value                                                                                                                                                 | Notes                                                                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font family        | `"Roboto", sans-serif` (Google Fonts 300/400/500/700)                                                                                                 | body 16px                                                                                                                                                            |
| Brand red          | `#dd1515`                                                                                                                                             | header bar, `.primary-btn`, `.si-tag`/`.ni-tag` badges, `.section-title:before` bar, trending title block, `.mc-op` accents, nav dropdown hover, footer social hover |
| Dark page/sections | `#151618`                                                                                                                                             | trending strip bg, match rows `rgba(21,22,24,0.9)`, dark section treatment                                                                                           |
| Near-black         | `#000` / `#2c2d2f` / `#333`                                                                                                                           | video section bg, dark widgets, nav search block                                                                                                                     |
| Light section bg   | `#f2f2f2`                                                                                                                                             | light sections, `.section-title:after` rule, tag pills                                                                                                               |
| Muted grays        | `#636363` (body copy on light), `#ababab` (meta on light), `#8a8b8c`/`#ababab` (slider arrows)                                                        |                                                                                                                                                                      |
| Sport-tag accents  | tennis `#0054a6` (blue), football `#e3ce1e` (yellow)                                                                                                  | `.ni-tag.tenis` / `.ni-tag.football` on popular cards                                                                                                                |
| Social colors      | facebook `#506eaa`, twitter `#55acee`, google `#dd4b39`                                                                                               | `.follow-links` sidebar rows                                                                                                                                         |
| Heading sizes      | h1 70px, h2 36px, h3 30px (section titles render 28px/300), h4 24px, h5 18px, h6 16px                                                                 |                                                                                                                                                                      |
| Body/hero photo    | `set-bg` pattern: `background-size: cover; background-position: top center`                                                                           | dark overlay over photos for text legibility                                                                                                                         |
| Buttons            | `.primary-btn`: 16px, `#fff` text, solid `#dd1515` bg, weight 500, letter-spacing 1px, padding `14px 36px 12px`, square (no radius), inline-block     | hero CTA "More Details"                                                                                                                                              |
| Section title      | h3 28px weight 300 color `#151618`, with `:before` 70px×3px `#dd1515` bar + `:after` full-width 3px `#f2f2f2` rule                                    | "Next Match", "Latest News", "Hot Videos", "Popular Post"                                                                                                            |
| Tag pills          | 10px uppercase, weight 500, letter-spacing 1px, padding `3px 9px`, absolute top-left of card                                                          | red default; blue/yellow sport variants                                                                                                                              |
| Match row          | table row bg `rgba(21,22,24,0.9)`, td padding 16px, flag img 50×30px, center column 150px, h4 score weight 700 white                                  |                                                                                                                                                                      |
| Soccer card        | `.soccer-item` height 405px, text overlay bottom 25px, red tag top-left                                                                               | 4-column grid                                                                                                                                                        |
| Video item         | 200px height, play-btn centered (opacity 0 → 1 on hover), `.vi-time` chip `rgba(0,0,0,0.7)` bottom-right                                              |                                                                                                                                                                      |
| Popular card       | 240px overlay card, title + meta absolute bottom 16px, white text                                                                                     |                                                                                                                                                                      |
| Vote widget        | 290px `set-bg`, white radio circles (14px, 2px border, filled when checked)                                                                           |                                                                                                                                                                      |
| Footer             | `.footer-section` set-bg photo + dark treatment, `.fs-social` circular icons hover `#dd1515`, copyright bar border-top `#2d2e30`, `#636363` 14px text |                                                                                                                                                                      |
| Copyright          | border-top `1px solid #2d2e30`, co-text 14px `#636363`                                                                                                | replace attribution with Component Dock link                                                                                                                         |

## Section structure (from the live DOM)

1. **Header** (`.header-section`, solid `#dd1515` bar) — logo/wordmark
   left (white "SPECER" wordmark in screenshot — our own wordmark, e.g.
   "PITCHSIDE", with a ball/circle glyph), nav right: Home · Club ·
   Schedule · Results · Sport ▾ · Pages ▾ (Blog, Blog Details) ·
   Contact Us + white search icon; links 15px/500 uppercase white with
   2px white underline on hover/active; dropdowns: white panel, `#151618`
   links, hover `#dd1515`; search icon toggles/opens search affordance.
2. **Hero** (`.hero-section`, 700px, flex centered, `set-bg` night-stadium
   photo `img/hero/hero-1.jpg` + dark overlay) — centered white stack:
   small date line "30 september 2019 / 9:00 GMT+0000", h1/h2 headline
   "Airrosten VS Lerenort in London" (or paraphrase), `.primary-btn`
   "More Details" (solid #dd1515).
3. **Trending news strip** (`.trending-news-section`, `#151618`) — left
   red 32% block with white "▸ Trending News" title; right: a news-headline
   slider (owl-carousel in source — React: state-driven slider or
   scroll-snap) with prev/next square arrow buttons (1px `#8a8b8c` border,
   `#ababab` text).
4. **Match section** (`.match-section`, `set-bg` dark low-poly
   `img/match/match-bg.jpg`) — 2 columns (`col-lg-6` each):
   - "Next Match" (`.ms-content h4`): 3 `.mc-table` rows — each row
     (bg `rgba(21,22,24,0.9)`): left flag+team name ("Cambodia"), center
     (`mc-op` "Ucraina vs England" 14px + big `VS` h4 700 + `mc-op` date
     "15 September 2019"), right team name+flag ("Qatar").
   - "Recent Results": same row structure with score `1 : 2` in the
     center instead of "VS".
5. **Soccer feed** (`.soccer-section`, light bg) — 4-column grid of
   `.soccer-item` cards (405px, photos `img/soccer/soccer-1..4.jpg`):
   red uppercase `.si-tag` badge top-left (10px), title overlay at bottom
   (white h5 links: "Counting Your Chicken Before They Hatch", etc.),
   meta line separated by "|" pipes (author · date).
6. **Latest news + Club Ranking** (`.latest-section`, light) — section
   title "Latest News" (red bar; `.latest-title` variant has filter pills
   right: small `#f2f2f2` chips, hover `#dd1515`); main col (`col-lg-8`):
   5 `.news-item.left-news` cards (photo 240px with red `.ni-tag` badge,
   h4 title in `#151618`, meta row with red icon glyphs + `#ababab`
   text, 14px `#636363` excerpt); sidebar (`col-lg-4`):
   "Club Ranking" `.points-table` — table with columns Pos · Team · P · W
   · L · PTS, flag+team-name rows (e.g. Afghanis, Australia, Qatar,
   Cambodia …).
7. **Hot videos** (`.video-section`, dark) — section title "Hot Videos";
   grid of 5 `.video-item` thumbs (200px; 5th repeated in source):
   white h5 title top (`.vi-title`), centered play button revealed on
   hover (`.play-btn` — circular, opens video popup in source; React:
   state modal or inert button), `.vi-time` duration chip bottom-right
   (`rgba(0,0,0,0.7)`).
8. **Popular post + Follow Us + Vote** (`.popular-section`) — main col
   (`col-lg-8`): section title "Popular Post"; 5 `.news-item.popular-item`
   overlay cards (240px `set-bg` photos): red sport tag top-left (variants:
   tennis `#0054a6`, football `#e3ce1e`), white title + meta absolute
   bottom; sidebar (`col-lg-4`): "Follow Us" `.follow-links` — full-width
   social rows (facebook `#506eaa`, twitter `#55acee`, google `#dd4b39`)
   with icon + name + fan count; below: `.vote-option` poll (290px
   `set-bg`) — white bold h5 "In your opinion, which country will win
   this year" + radio options (Germany / Brazil / Myanmar / Argentina)
   with 14px white circle radios.
9. **Footer** (`.footer-section`, set-bg dark photo) — logo + short
   description + `.fs-social` circular icons (hover `#dd1515`); widgets:
   "Top Club" (fw-links list) + "Recent News" (fw-item entries with
   calendar/copy icons + titles, e.g. "England win shows they have the
   spark to go far at World Cup"); copyright bar (border-top `#2d2e30`):
   "Copyright © All rights reserved | Template" left — **replace with the
   mandatory Component Dock link** ("More templates at Component Dock",
   https://www.componentdock.com/) + small co-widget links right.

## Requirements

### Requirement: Header renders over the light page top with red bar

The page SHALL render a solid brand-red header bar with the club
wordmark, uppercase navigation links, dropdown menus, a search toggle,
and a mobile menu.

#### Scenario: Desktop header with wordmark, nav, and search

```
Given the user visits the Pitchside home page
Then a full-width header bar with solid #dd1515 background is displayed at the top
And a white wordmark (our own "PITCHSIDE" wordmark, NOT the source logo) with a ball glyph is shown on the left
And white uppercase 15px/500 links "Home", "Club", "Schedule", "Results", "Sport", "Pages", "Contact Us" are shown on the right
And a white search icon button is shown at the far right
When the user hovers a link
Then a 2px white underline appears under the link
```

#### Scenario: Dropdown menus

```
Given the desktop header is visible
When the user hovers "Sport" (or "Pages")
Then a white dropdown panel appears below the item
And the dropdown links are #151618 text (e.g. "Blog", "Blog Details" under Pages)
When the user hovers a dropdown link
Then the link color becomes #dd1515
```

#### Scenario: Mobile menu toggles

```
Given the viewport is mobile-sized
Then the inline nav is hidden and a hamburger icon button is shown
When the user clicks the hamburger
Then a mobile menu panel opens with the same links
And the toggle exposes aria-expanded=true
When the user clicks it again
Then the menu closes
```

### Requirement: Hero with featured match and CTA

The hero SHALL show a photographic background with a dark overlay, a date
line, a headline, and a square brand-red call-to-action button.

#### Scenario: Hero content renders

```
Given the hero section is visible
Then a photographic hero background (picsum placeholder night-stadium, dark overlay) fills the 700px-tall section
And the content is vertically and horizontally centered
And a small date line ("30 september 2019 / 9:00 GMT+0000" or paraphrase) is displayed in white
And a large white headline ("Airrosten VS Lerenort in London" or paraphrase) is displayed under the date line
```

#### Scenario: Hero CTA

```
Given the hero is visible
Then a "More Details" button is displayed with solid #dd1515 background, white 16px/500 text, letter-spacing 1px, and square corners (padding 14px 36px 12px)
When the user hovers the button
Then the button visibly reacts (hover treatment consistent with the red brand style)
```

### Requirement: Trending news strip

The trending strip SHALL display a red title block and a headline slider
with previous/next controls.

#### Scenario: Strip layout

```
Given the trending strip is visible
Then it has a #151618 background spanning full width under the hero
And a solid #dd1515 block occupies roughly the left third with white text "Trending News" (with a right-pointing marker)
And a headline item is shown in the remaining right area in white 16px/500 text
And prev/next square arrow buttons (1px #8a8b8c border) are shown at the far right
```

#### Scenario: Slider advances

```
Given the strip is visible
When the user clicks the next arrow
Then the displayed headline advances to the next trending item
When the user clicks the prev arrow
Then it returns to the previous item
And the controls are keyboard-focusable with aria-labels
```

### Requirement: Match fixtures and recent results

The match section SHALL show Next Match and Recent Results columns of
fixture rows with flags, pairing labels or scores, and dates.

#### Scenario: Two-column match section

```
Given the match section is visible
Then a dark low-poly background (picsum placeholder) fills the section
And two columns are displayed side by side (stacked on mobile): "Next Match" and "Recent Results"
And each column heading is a white h4 (24px)
```

#### Scenario: Next Match rows

```
Given the "Next Match" column is visible
Then three match rows are displayed
And each row has a dark rgba(21,22,24,0.9) background
And each row shows a left flag image + team name (e.g. "Cambodia")
And each row shows a right team name + flag image (e.g. "Qatar")
And the center column shows a small "Ucraina vs England" label, a bold white "VS" (24px/700), and a date line ("15 September 2019")
```

#### Scenario: Recent Results rows

```
Given the "Recent Results" column is visible
Then three result rows are displayed with the same flag/label/date layout
And the center column shows a bold white score "1 : 2" instead of "VS"
```

### Requirement: Soccer feed card grid

The soccer feed SHALL render four photo cards with red tags, titles, and
pipe-separated meta lines.

#### Scenario: Feed cards render

```
Given the Soccer Feed section is visible
Then the heading "Soccer Feed" (or paraphrase) is shown with the red-bar section-title treatment
And four image cards are displayed in a row (stacked on mobile)
And each card is 405px tall with a photos placeholder (picsum seed) and dark bottom overlay
And each card has a red uppercase 10px badge tag at the top-left (e.g. "Sport")
And each card shows a white title link at the bottom (e.g. "Counting Your Chicken Before They Hatch")
And a meta line under the title shows author/date separated by "|" pipes
```

### Requirement: Latest news with Club Ranking sidebar

The latest news section SHALL render a filterable news list beside a club
ranking table.

#### Scenario: Latest News list

```
Given the Latest News section is visible
Then the section title "Latest News" (or paraphrase) is shown with the red 70px underline bar
And filter pills (small #f2f2f2 chips) are shown on the right of the title (hover → #dd1515)
And five news cards are displayed in the main column (col-8)
And each card shows a 240px photo (picsum placeholder) with a red uppercase badge tag at the top-left
And each card shows a #151618 title link (e.g. "Once You Learn These Hard Truths About Life, You'll Become")
And each card shows a meta row (calendar/edit icons in #dd1515 + #ababab text) and a 14px #636363 excerpt
```

#### Scenario: Club Ranking table

```
Given the sidebar is visible
Then a "Club Ranking" heading is shown
And a standings table is displayed with columns: Pos, Team, P, W, L, PTS
And at least four team rows are rendered, each with a flag image and team name (e.g. Afghanis, Australia, Qatar, Cambodia)
And the table is readable on the light background
```

### Requirement: Hot Videos section

The hot videos section SHALL render a thumbnail grid whose play buttons
open a modal that closes via its close button or the Escape key.

#### Scenario: Video grid renders

```
Given the Hot Videos section is visible
Then the heading "Hot Videos" (or paraphrase) is shown with the red-bar treatment
And a grid of video cards is displayed
And each card shows a thumbnail (picsum placeholder), a white title at the top (e.g. "A World Of Infinite Opportunities"), and a duration chip (e.g. "10:30") at the bottom-right with rgba(0,0,0,0.7) background
```

#### Scenario: Play button reveal and modal

```
Given a video card is visible
When the user hovers the card
Then a centered circular play button becomes visible
When the user clicks the play button
Then a video modal/placeholder opens (state-driven; source used magnific-popup)
And the modal can be closed (close button + Escape), exposing aria attributes
```

### Requirement: Popular Post with Follow Us and Vote widgets

The popular section SHALL render tagged overlay cards beside follow links
and a vote poll with controlled radio options.

#### Scenario: Popular post cards

```
Given the Popular Post section is visible
Then the section title "Popular Post" (or paraphrase) is shown with the red-bar treatment
And five overlay cards (240px, picsum placeholder photos) are displayed in the main column
And each card shows a colored uppercase sport tag at the top-left (red default; blue #0054a6 tennis variant; yellow #e3ce1e football variant)
And each card shows a white title (e.g. "England reach World Cup last 16 with hard-fought win over Argentina") and meta line at the bottom
```

#### Scenario: Follow Us widget

```
Given the sidebar Follow Us widget is visible
Then three full-width social rows are displayed
And each row has the social brand background: facebook #506eaa, twitter #55acee, google #dd4b39
And each row shows a white icon, network name, and fan count (e.g. "1.2M")
```

#### Scenario: Vote poll widget

```
Given the vote widget is visible
Then a 290px photo background (picsum placeholder) fills the widget
And a white bold question is shown ("In your opinion, which country will win this year" or paraphrase)
And radio options are listed (e.g. Germany, Brazil, Myanmar, Argentina)
And each option has a 14px white circle radio; the checked option fills the circle white
And selecting an option updates state (controlled radio input)
```

### Requirement: Footer

The footer SHALL show the wordmark, social icons, widget columns, and a
copyright bar linking to Component Dock.

#### Scenario: Footer columns and social icons

```
Given the footer is visible
Then the footer has a dark photo background treatment
And a wordmark + short description is shown on the left
And circular social icon buttons (facebook, twitter, instagram, youtube, linkedin) are shown with aria-labels; hovering one turns its background #dd1515
And two widget columns are displayed: "Top Club" (link list) and "Recent News" (entries with calendar/copy icons + titles)
```

#### Scenario: Component Dock attribution

```
Given the footer is visible
Then the copyright bar has a 1px #2d2e30 top border
And a link to https://www.componentdock.com/ is present, branded "Component Dock"
And NO ColorLib attribution or links appear anywhere in the page
```

### Requirement: Responsive layout

The layout SHALL adapt to mobile viewports with a hamburger menu and
stacked sections.

#### Scenario: Mobile viewport

```
Given the user views the page on a viewport narrower than 768px
Then the header collapses to the hamburger menu
And the hero text spans full width
And the match section columns stack vertically
And the soccer feed grid becomes a single column
And the Latest News / Popular Post sidebars stack below the main column
And the video and popular grids become single/two-column
And the footer widgets stack
```

### Requirement: Accessibility

All interactive elements SHALL be keyboard reachable, icon-only controls
SHALL expose accessible labels, and the video modal SHALL close on
Escape.

#### Scenario: Interactive elements

```
Given the page is rendered
Then all interactive elements (links, buttons, arrows, menu toggle, search, radio options, modal controls) are keyboard reachable with visible focus states
And icon-only controls have aria-labels
And the mobile menu toggle exposes aria-expanded
And images have alt text
And the video modal traps/returns focus appropriately and closes on Escape
```

## Verification checklist

- [ ] Roboto (300/400/500/700) loaded via Google Fonts in `index.html`
- [ ] `@theme` tokens: `--color-brand: #dd1515`, `--color-dark: #151618`,
      `--color-ink: #151618`, `--color-muted: #636363`, `--color-meta: #ababab`,
      sport-tag variants `#0054a6` / `#e3ce1e`, social `#506eaa` / `#55acee` / `#dd4b39`
- [ ] Header: solid #dd1515 bar; white wordmark + ball glyph; uppercase white 15px/500 links with 2px white underline on hover/active; white dropdown panels with #dd1515 link hover; search icon; mobile hamburger + panel with aria-expanded
- [ ] Hero: picsum night-stadium photo + dark overlay, 700px centered; date line + headline; solid #dd1515 square "More Details" button (padding 14px 36px 12px, letter-spacing 1px)
- [ ] Trending strip: #151618 bg; red 32% "Trending News" title block; headline slider with prev/next square arrows (keyboard accessible)
- [ ] Match section: dark low-poly picsum bg; "Next Match" (3 VS rows) + "Recent Results" (3 "1 : 2" rows); rows bg rgba(21,22,24,0.9); flag + team name + center label/score/date
- [ ] Soccer feed: 4× 405px cards; red top-left tags; bottom white titles + "|" meta; picsum placeholders
- [ ] Latest news: red-bar title + filter pills (hover #dd1515); 5 left-news cards (240px photo + red tag + #151618 title + red-icon meta + #636363 excerpt); "Club Ranking" points-table (Pos/Team/P/W/L/PTS with flags)
- [ ] Hot videos: dark section; video cards with white top title + bottom-right duration chip; hover-revealed centered play button; state-driven modal (no magnific/jQuery)
- [ ] Popular post: 5 overlay cards (240px) with red/blue/yellow sport tags + white bottom titles; "Follow Us" social rows (#506eaa/#55acee/#dd4b39); vote widget with white circle radios (controlled state)
- [ ] Footer: dark photo treatment; wordmark + description; circular social icons (aria-labels, hover #dd1515); "Top Club" + "Recent News" widgets; copyright bar with Component Dock link; zero ColorLib references anywhere in the app
- [ ] Placeholder images use deterministic `picsum.photos/seed/pitchside-*` URLs
- [ ] Lucide-react icons only (no Font Awesome); no jQuery/owl/magnific — React state sliders/modal
- [ ] 100% test coverage via `scripts/verify-app.sh pitchside`; PR `feat/template-pitchside`
