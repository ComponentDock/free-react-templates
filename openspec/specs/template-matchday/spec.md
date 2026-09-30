# Template: Matchday (Sports)

## Purpose

Matchday is a sports-club website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Sports
Team" website template (source: https://colorlib.com/wp/template/sportsteam/
— American-football club site with next-match countdown hero, breaking-news
ticker, latest results, upcoming events, latest games, club counters,
player-of-the-month feature, news grid and newsletter footer), built under a
DIFFERENT name (Matchday — the day a fixture is played; single lowercase
word), per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source slug:** `sportsteam`
- **Source:** https://colorlib.com/wp/template/sportsteam/
- **Preview (LIVE, verified 2026-09-30 by direct fetch):**
  **https://preview.colorlib.com/theme/sportsteam/**
  (HTTP 200, 30,526 bytes, `<title>Sports Team</title>`)
- **Preview CSS:** `styles/main_styles.css` (27,889 bytes) +
  `styles/responsive.css` (6,807 bytes) — Bootstrap 4.1.2 base +
  hand-written template block. Template-specific rules include `body`
  (Roboto 14px/`#a5a5a5` on white), `.header` (fixed, `rgba(22,29,74,0.75)`
  - 3px `#ffa54b` bottom border), `.header_bar` (top ticker bar),
    `.home_text` (navy countdown chip + orange number chip), `.next_match_home`
    / `.next_match_guest` (skewed `skew(37deg)` team chips), `.vs` (118px
    rotated outlined "VS"), `.breaking_news_*` (orange title block + navy
    ticker strip), `.results` / `.result_*` (white results band),
    `.upcoming_latest` + `.custom_list_a/b` (navy two-column events/games
    lists), `.milestones` + `.milestone_*` (parallax counters), `.player_*`
    (player of the month), `.news` + `.news_post_*` (light gray news grid),
    `.cta_*` (orange join-club strip), `.newsletter_*` + `.footer_*` (dark
    footer with form), and `.menu_*` (fullscreen mobile menu).
- **Scripts (source):** jQuery 3.3.1 + owl.carousel 2.3.4 (home slider +
  breaking-news ticker). Reimplement in React: state-driven sliders (or CSS
  scroll-snap) + `useEffect` countdown; do NOT ship jQuery/owl.
- **Icons:** Font Awesome 4.7.0 glyph fonts — **REPLACE with
  lucide-react** (e.g. `Menu`, `X`, `ChevronRight`, `MapPin`, `Phone`,
  `Mail`, `Facebook`, `Twitter`, `Instagram`, `Youtube`), do not ship icon
  fonts.
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400, 500, 700, 900)** in `index.html`; weights used: 300 (breaking-news slides), 400
  (body), 500 (nav, list meta, counters), 700 (headings, scores, buttons),
  900 (mobile menu links, `.vs`).
- **Assets:** hero slider photo (`images/index.jpg` inline backgrounds on
  slides, the milestones parallax band, and the footer side image), team
  crests, event/news photos, player photos — use
  `https://picsum.photos/seed/matchday-<n>/<w>/<h>` placeholders (e.g.
  `matchday-hero`, `matchday-crest-1..4`, `matchday-event-1..3`,
  `matchday-news-1..3`, `matchday-player-1..2`), never source assets. Team
  crests: picsum seeds or simple inline SVG badges.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/sportsteam-free-template.jpg
  (visually analyzed 2026-09-30; matches the live preview).
- **TEMPLATES.md:** "## Sports (9)" section, line 2844
  (`- [ ] **Sportsteam**`).

## Design tokens

(extracted from the live preview stylesheet + verified against the
screenshot; CSS values are canonical)

| Token               | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Notes                                                                                                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font family         | `"Roboto", sans-serif` (Google Fonts 300/400/500/700/900)                                                                                                                                                                                                                                                                                                                                                                                                                            | body 14px                                                                                                                                                                                                                                                 |
| Body color          | `#a5a5a5`, weight 400                                                                                                                                                                                                                                                                                                                                                                                                                                                                | white page background `#FFFFFF`                                                                                                                                                                                                                           |
| Brand orange        | `#ffa54b`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | buttons, header bottom border, active/hover links, `.section_subtitle`, countdown number chip, slider Next button, breaking-news title block, player name, counters, news date day-number, footer contact labels, newsletter button, CTA strip background |
| Navy primary        | `#161d4a`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | header bg `rgba(22,29,74,0.75)`, top bar `rgba(28,36,93,0.75)`, countdown text chip, home-vs chip, breaking-news strip, newsletter input, CTA button, button hover fill                                                                                   |
| Navy alt            | `#161a42`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | player number chip                                                                                                                                                                                                                                        |
| List row navy       | `#242b56`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | upcoming-events + latest-games rows (110px tall, 3px gaps)                                                                                                                                                                                                |
| Navy section        | `#161d4a`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `.upcoming_latest` band bg (padding 92/100)                                                                                                                                                                                                               |
| Footer navy         | `#0a1123` (container), `#070d1d` (footer bar)                                                                                                                                                                                                                                                                                                                                                                                                                                        | dark footer                                                                                                                                                                                                                                               |
| Light blue-gray     | `#d7d9e5`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `.news` section bg; footer contact values; newsletter placeholder                                                                                                                                                                                         |
| LIVE red            | `#ff0410`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | LIVE badge in top bar                                                                                                                                                                                                                                     |
| VS red              | `#d80033` fill + `#191339` 3px text-stroke                                                                                                                                                                                                                                                                                                                                                                                                                                           | giant rotated "VS" in hero                                                                                                                                                                                                                                |
| Heading black       | `#050505`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | section titles, result scores, news titles                                                                                                                                                                                                                |
| Grays               | `#888888` (results title/result team), `#b5b5b5` (results subtitle), `#777b95` / `#737791` (list meta / milestone subtitle), `#dddfe2` (result divider)                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                           |
| Header              | fixed; `rgba(22,29,74,0.75)`; `border-bottom: 3px solid #ffa54b`; top bar 40px `rgba(28,36,93,0.75)` with orange `                                                                                                                                                                                                                                                                                                                                                                   | ` separators (first link orange)                                                                                                                                                                                                                          | scrolled state: nav row 110px, logo shrinks to 170px and drops 40px |
| Buttons (`.button`) | sharp rectangles, NO border-radius; 200×64, bg `#ffa54b`, white 18px/700 text; `::after` 3px `#161d4a` bottom bar expands to full height on hover                                                                                                                                                                                                                                                                                                                                    | navy variant `.cta_button`: bg `#161d4a`, white fill on hover                                                                                                                                                                                             |
| Section titles      | uppercase 36px/700 `#050505` (light variant `#FFFFFF` on dark); subtitle 16px/500 `#ffa54b` (gray variant `#b5b5b5`)                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                           |
| Home slider         | full-viewport slides (inline `background-image: url(...)` photos); countdown chip: `#161d4a` block (white 60px/700 "days until the next match") + `#ffa54b` number chip 109×143 (white 100px/700 numeral, `border-top: 9px solid #161d4a`); vs row: home chip `#161d4a` + guest chip `#ffa54b`, both `skew(37deg)` 70px tall with unskewed 30px/500 white text; `.vs` 118px/900 `rotate(-7deg)`; orange 92px square Next button (hover navy)                                         |                                                                                                                                                                                                                                                           |
| Breaking news       | 78px strip: left 34.48% `#ffa54b` block with `#161d4a` 30px/500 "Breaking News"; right 65.52% `#161d4a` with rotating white 18px/300 headlines                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                           |
| Results             | white bg, padding 92/100; centered title + gray subtitle + league line; two 50% mirrored blocks: team photo 262px (bottom-aligned), score 72px/700 `#050505`, team name 36px/700 `#888888`, blurb; 2×132px `#dddfe2` divider after first block; "See More Info" orange button                                                                                                                                                                                                        |                                                                                                                                                                                                                                                           |
| Events + Games      | navy `#161d4a` two-column band; white uppercase titles + orange subtitles; `.custom_list_a` event rows: 110px `#242b56`, photo + title + date + "See More" link; `.custom_list_b` game rows: same row bg, 37%/26%/37% columns — crest 65×55 + white 16px/500 team name (hover orange) both sides; center: league 12px/500 `#777b95`, score 30px white, date 11px/500 `#777b95`; decorative player photo absolute bottom-left behind                                                  |                                                                                                                                                                                                                                                           |
| Milestones          | parallax band (min-height 400px, dark photo); 4 columns: icon 62px, counter 48px/500 `#ffa54b`, title 18px/500 white, subtitle 11px/500 `#737791`                                                                                                                                                                                                                                                                                                                                    | counters: Team players, Trophies, Medals, Kicks/Match                                                                                                                                                                                                     |
| Player of the month | white bg, padding 104/81; left column: section title, number chip 71×71 `#161a42` (white 48px/500), name 60px/500 `#ffa54b` line-height 0.75, two bio paragraphs; two player photos bottom-anchored to the LEFT half of the viewport (`width: calc(50vw + 55px)`), first with 40px right margin                                                                                                                                                                                      |                                                                                                                                                                                                                                                           |
| News grid           | bg `#d7d9e5`, padding 100/61; 3 cards: photo, white 75×75 date badge bottom-left of image (day 36px/500 `#ffa54b` + month 12px uppercase `#050505`), white content area (padding 16/22/32), title 24px/700 `#050505` (hover orange); hover: `box-shadow 0 16px 38px rgba(9,9,9,0.33)`                                                                                                                                                                                                |                                                                                                                                                                                                                                                           |
| CTA strip           | bg `#ffa54b` with 1px white top/bottom borders, padding 64/56; text 42px white with `#161d4a` 600 uppercase span ("football club?"); navy "See More Info" button right                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                           |
| Footer              | `#0a1123`; side player photo absolute right; contact list — labels 18px/500 `#ffa54b` (86px column), values 15px `#d7d9e5` lh 1.6; newsletter title 24px `#ffa54b`; input `#161d4a` 56px (placeholder 12px/500 `#d7d9e5`); Submit button 107×56 `#ffa54b` white 16px/500; italic disclaimer 12px `rgba(136,136,136,0.41)`; footer nav links (hover orange); footer bar `#070d1d` 57px — **replace the source "made by Colorlib" attribution with the mandatory Component Dock link** |                                                                                                                                                                                                                                                           |
| Mobile menu         | fullscreen overlay `rgba(10,17,35,0.55)`; navy panel; uppercase white 24px/900 links with staggered slide-in, orange hover; hamburger toggle; links: Home, About Us, The Team, News, Contact; user area Sign up / Sign in; GET Tickets + Shop buttons                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                           |

## Section structure (from the live DOM)

1. **Header** (fixed) — top bar: "GET Tickets | Shop" left (orange
   separators, first link orange), right: red LIVE badge + rotating ticker
   ("Lorem ipsum dolor sit amet, consectetur...") + "Sign up / Sign in".
   Main nav split around a centered club crest that overhangs below the
   header line: HOME · ABOUT THE CLUB · MEDIA (left), TICKETS · NEWS ·
   CONTACT (right); uppercase white 14px/500 links, active/orange hover;
   3px orange bottom border. Crest: our own "MATCHDAY FC" style badge (NOT
   the source tiger crest).
2. **Home slider** (full viewport) — photo slides; centered content block:
   orange number chip ("2") + navy chip "days until the next match"; below:
   skewed navy "The Tigers" chip + giant red outlined "VS" + skewed orange
   "The Bears" chip (paraphrase team names, e.g. "The Ravens" vs "The
   Hawks"); orange square "Next" slider button right; 2+ slides in source.
3. **Breaking news strip** — orange "Breaking News" block + navy strip with
   rotating headline slides (OwlCarousel in source → React state).
4. **Latest results** — centered uppercase title, gray subtitle ("great win
   in finals"), league line ("Mon 25 Sept, Champions League"); two mirrored
   result blocks (photo + 72px score + team name + blurb) split by a thin
   vertical divider; "See More Info" orange button.
5. **Upcoming & Latest** (navy band) — col 1 "upcoming events" /
   "What's next this month": event list rows (photo, title, date
   "August 25, 2018 / 17 UTC", "See More"); col 2 "latest games" /
   "Results": game rows (crest + team name | league · score · date | team
   name + crest). Decorative player photo absolute bottom-left behind.
6. **Milestones** (parallax) — 4 counters: Team players, Trophies, Medals,
   Kicks/Match (count-up numbers, orange, with icons).
7. **Player of the month** — left: section title + "What's next this month"
   subtitle, number chip "83", huge orange "Michael Smith" name, two bio
   paragraphs; right: two bottom-anchored player photos spanning the left
   half of the viewport.
8. **Latest news** (light band) — 3 news cards: photo + white date badge +
   title + excerpt.
9. **CTA strip** (orange) — "Would you like to join our FOOTBALL CLUB?"
   (navy uppercase span) + navy "See More Info" button.
10. **Footer** (`#0a1123`) — left: crest logo + contact list (Address /
    Phone / E-mail); newsletter block: "Subscribe to newsletter" + navy
    input + orange Submit + italic disclaimer; footer nav (Home, The Team,
    Tickets, News, Contact); footer bar `#070d1d`: copyright + Component
    Dock link (replacing source attribution).

## Requirements

### Requirement: Header renders fixed with top bar and split navigation

The page SHALL render a fixed header with a translucent navy top bar, a
split navigation around an overhanging club crest, a 3px orange bottom
border, and a fullscreen mobile menu.

#### Scenario: Desktop header

```
Given the user visits the Matchday home page
Then a fixed header is displayed with a translucent navy background and a 3px orange bottom border
And a top bar shows "GET Tickets" and "Shop" links on the left (separated by orange pipes, first link orange)
And a red "LIVE" badge with a rotating headline ticker is shown on the right of the top bar
And "Sign up" / "Sign in" links are shown at the far right of the top bar
And the main navigation is split around a centered club crest that overhangs below the header
And the left links are "Home", "About the Club", "Media" and the right links are "Tickets", "News", "Contact"
And links are uppercase white; the active link ("Home") is orange
When the user hovers a nav link
Then the link color becomes the brand orange #ffa54b
```

#### Scenario: Header scrolled state

```
Given the page is scrolled beyond the hero threshold
Then the header compacts: the nav row shrinks (nav height ~110px) and the crest shrinks (~170px) and drops slightly below the header line
```

#### Scenario: Mobile menu toggles

```
Given the viewport is mobile-sized
Then the inline nav links are hidden and a hamburger icon button is shown
When the user clicks the hamburger
Then a fullscreen overlay menu opens with large uppercase white links "Home", "About Us", "The Team", "News", "Contact"
And the links animate in with a staggered slide
And the toggle exposes aria-expanded=true
When the user clicks it again (or the close icon)
Then the menu closes
```

### Requirement: Home slider with match countdown and VS chips

The hero SHALL show full-viewport photographic slides with a match
countdown chip, skewed home/away team chips around a giant VS mark, and
an orange square Next button that advances the slider.

#### Scenario: Hero slide content

```
Given the hero slider is visible
Then a full-viewport slide shows a photographic background (picsum placeholder, dark overlay) filling the section
And a countdown block displays an orange number chip (large white numeral with a navy top border) beside a navy chip with white bold text "N days until the next match"
And a vs row displays a skewed navy team chip (home), a giant rotated red "VS" with a navy outline, and a skewed orange team chip (away)
And the chips use skew(37deg) with unskewed inner text
```

#### Scenario: Slider navigation

```
Given the hero slider is visible
Then an orange square "Next" button is displayed on the right edge
When the user clicks "Next"
Then the slider advances to the next slide (next countdown/matchup)
And "Next" is keyboard-focusable with a visible focus state
```

### Requirement: Breaking news ticker strip

A breaking-news strip SHALL show an orange title block beside a navy strip
with a rotating white headline.

#### Scenario: Ticker renders

```
Given the breaking-news strip is visible
Then an orange block on the left shows "Breaking News" in bold navy text
And a navy strip on the right shows a rotating white headline
When time passes (or the user advances)
Then the headline rotates to the next item
And the ticker does not trap focus or announce every tick (aria-hidden on the rotating region is acceptable)
```

### Requirement: Latest results section

The latest-results section SHALL show a centered title, subtitle and league
line above two mirrored photo/score result blocks and a brand See More
Info button.

#### Scenario: Results content

```
Given the Latest Results section is visible
Then the section title "LATEST RESULTS" (uppercase, black) is centered
And a gray subtitle ("great win in finals" or paraphrase) and a league line ("Mon 25 Sept, Champions League" or paraphrase) are shown beneath
And two mirrored result blocks are displayed side by side
And each block shows a team photo (picsum), a large score number (72px), a team name, and a short blurb
And a thin vertical divider separates the two blocks
And an orange "See More Info" button (200×64, navy 3px bottom bar that fills on hover) is centered below
```

### Requirement: Upcoming events and latest games lists

The upcoming-events and latest-games section SHALL render a navy two-column
band of #242b56 rows: event rows with photo, title, date and link; game
rows with crests, league, score and date.

#### Scenario: Navy two-column band

```
Given the Upcoming & Latest section is visible
Then the band background is navy #161d4a
And two columns are shown (stacked on mobile): "UPCOMING EVENTS" with subtitle "What's next this month", and "LATEST GAMES" with subtitle "Results"
And both column titles are white uppercase with orange subtitles
And a decorative player photo is positioned absolutely behind the bottom-left of the band
```

#### Scenario: Event list rows

```
Given the upcoming events list is visible
Then at least three event rows are displayed
And each row is a 110px-tall #242b56 strip with 3px vertical gaps
And each row shows a photo thumbnail, an event title, a date line ("August 25, 2018 / 17 UTC" or paraphrase), and a "See More" link
```

#### Scenario: Games list rows

```
Given the latest games list is visible
Then at least three game rows are displayed in the same 110px #242b56 strips
And each row shows: left crest + team name (white, hover orange), center column with league name (small gray), a score ("8 : 3"), and a date line, right team name + crest
And team names are keyboard-focusable links with orange hover
```

### Requirement: Milestone counters over parallax band

The milestones section SHALL render four icon counters over a parallax photo
band that count up from zero when scrolled into view.

#### Scenario: Counters render and count up

```
Given the milestones section is visible
Then a parallax photo band (picsum placeholder, dark treatment) displays four counters: Team players, Trophies, Medals, Kicks/Match
And each counter shows an icon (lucide), an orange 48px number, a white title, and a small gray subtitle
When the section enters the viewport
Then each number counts up from 0 to its target once
And the component cleans up any timers/observers on unmount
```

### Requirement: Player of the month feature

The player-of-the-month section SHALL show a navy squad-number chip, a huge
orange player name, bio paragraphs, and two bottom-anchored photos
spanning the left half of the viewport.

#### Scenario: Player content renders

```
Given the Player of the Month section is visible
Then the section title "PLAYER OF THE MONTH" (uppercase) and an orange subtitle are shown
And a navy 71×71 number chip displays the player's squad number (e.g. "83")
And the player name is rendered in huge orange text (60px) beside the chip
And two bio paragraphs are shown beneath
And two player photos (picsum) are bottom-anchored, spanning the left half of the viewport, the first with a right margin
```

### Requirement: Latest news grid

The latest-news section SHALL render three cards on a light #d7d9e5 band
with white date badges, hover shadows and orange hover titles.

#### Scenario: News cards render

```
Given the Latest News section is visible
Then the band background is light #d7d9e5
And three news cards are displayed in a row (stacked on mobile)
And each card shows a photo, a white date badge at the photo's bottom-left (large orange day number + uppercase month), a bold title, and an excerpt
And each title turns orange on card hover
And the card casts a soft shadow on hover (0 16px 38px rgba(9,9,9,0.33))
```

### Requirement: Join-club CTA strip

The join-club strip SHALL render a brand-orange band with a navy uppercase
span in the headline and a navy button that fills white on hover.

#### Scenario: CTA renders

```
Given the CTA strip is visible
Then the strip background is brand orange #ffa54b with 1px white top and bottom borders
And the text reads "Would you like to join our FOOTBALL CLUB?" (or paraphrase) with "FOOTBALL CLUB?" styled as a navy uppercase span
And a navy "See More Info" button is displayed on the right (stacks below text on mobile)
When the user hovers the button
Then its fill transitions to white and the text turns navy
```

### Requirement: Footer with contact info, newsletter and attribution

The footer SHALL render contact details, a validating newsletter form,
footer nav links, and a darker bottom bar that links Component Dock.

#### Scenario: Footer content

```
Given the footer is visible
Then the footer background is #0a1123 with a darker #070d1d bottom bar
And the club crest/logo and a contact list are shown (Address, Phone, E-mail) with orange 18px labels and #d7d9e5 values
And a newsletter block shows "Subscribe to newsletter", a navy email input (placeholder #d7d9e5), an orange "Submit" button (107×56), and an italic disclaimer line
And footer nav links (Home, The Team, Tickets, News, Contact) are shown, orange on hover
And a decorative player photo is positioned on the right side of the footer
```

#### Scenario: Component Dock attribution

```
Given the footer is visible
Then the bottom bar shows a copyright notice
And a link to https://www.componentdock.com/ is present, branded "Component Dock"
And NO ColorLib attribution or links appear anywhere in the page
```

### Requirement: Responsive layout

The layout SHALL stack every section gracefully on viewports narrower than
768px.

#### Scenario: Mobile viewport

```
Given the user views the page on a viewport narrower than 768px
Then the header collapses to the hamburger menu
And the hero countdown chips stack without overlapping the "VS" mark illegibly
And the breaking-news strip stacks (title block above headline strip)
And the two result blocks stack vertically
And the events/games columns stack vertically and the lists remain scrollable
And the player photos scale down and the news grid becomes one column
And the footer contact list, newsletter and nav stack
```

### Requirement: Accessibility

All interactive elements SHALL be keyboard reachable with visible focus
states, labelled controls, and non-disruptive rotating/counting regions.

#### Scenario: Interactive elements

```
Given the page is rendered
Then all interactive elements (links, buttons, slider Next, menu toggle, form) are keyboard reachable with visible focus states
And icon-only controls have aria-labels
And the mobile menu toggle exposes aria-expanded
And images have alt text
And form inputs have associated labels
And decorative rotating/counting regions do not trap focus or announce every tick
```

## Verification checklist

- [ ] Roboto (300/400/500/700/900) loaded via Google Fonts in `index.html`
- [ ] `@theme` tokens: `--color-brand: #ffa54b`, `--color-navy: #161d4a`, `--color-navy-deep: #0a1123`, `--color-row: #242b56`, `--color-mist: #d7d9e5`, `--color-live: #ff0410`, `--color-vs: #d80033`
- [ ] Fixed header: top bar (GET Tickets | Shop, LIVE badge + ticker, Sign up / Sign in) + split nav around overhanging crest + 3px orange bottom border; scrolled compaction; mobile hamburger + staggered fullscreen menu with aria-expanded
- [ ] Hero slider: full-viewport picsum slides; orange number chip + navy countdown chip; skewed home/away chips + rotated outlined red "VS"; orange 92px Next square (hover navy), keyboard accessible
- [ ] Breaking-news strip: orange title block + navy rotating headline (React state, no owl)
- [ ] Latest results: centered title/subtitle/league line; two mirrored photo+score+name+blurb blocks with divider; orange "See More Info" button with navy fill-on-hover bar
- [ ] Navy events/games band: two titled columns, `#242b56` 110px rows, event rows (photo/title/date/See More), game rows (crest | league · score · date | crest), decorative absolute player photo
- [ ] Milestones: parallax band with 4 lucide-icon counters that count up once in view (cleanup on unmount)
- [ ] Player of the month: navy number chip + 60px orange name + bio; two bottom-anchored photos spanning left half of viewport
- [ ] Latest news: `#d7d9e5` band, 3 cards with white 75×75 date badges (orange day), hover shadow + orange title
- [ ] CTA strip: orange bg + white hairline borders, navy uppercase span text, navy button with white fill hover
- [ ] Footer `#0a1123`: crest + contact list + newsletter form (navy input, orange Submit, disclaimer) + nav links + `#070d1d` bar with Component Dock link; zero ColorLib references anywhere in the app
- [ ] Placeholder images use deterministic `picsum.photos/seed/matchday-*` URLs
- [ ] Lucide-react icons only (no Font Awesome); no jQuery/owl — React state carousels + useEffect countdown/counters
- [ ] 100% test coverage via `scripts/verify-app.sh matchday`; PR `feat/template-matchday`
