# Pitchside (ColorLib Specer) — Design Notes

> Replication research for **Pitchside** (NEW name) — recreation of ColorLib
> **Specer** (slug `specer`). Research done 2026-09-30 by the prep stream;
> implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Specer" (TEMPLATES.md line 2843; section "## Sports (9)").
  Slug `specer` appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/specer/
- **Preview URL — REACHABLE (verified 2026-09-30 by direct fetch):**
  **`https://preview.colorlib.com/theme/specer/`**
  (HTTP 200, 69,789 bytes, `<title>Specer | Template</title>`).
- **Preview CSS:** `css/style.css` (43,869 bytes) — Bootstrap-derived base
  + hand-written template block.
- **Source scripts:** jQuery + slicknav + owl.carousel (trending slider)
  + magnific-popup (video lightbox) — REIMPLEMENT in React (state sliders
  / CSS scroll-snap; modal via state). Do not ship jQuery.
- **Icons:** Font Awesome glyph fonts — REPLACE with lucide-react.
- **Fonts:** Roboto via Google Fonts `<link>` (300, 400, 500, 700).
- **Assets:** all via `https://picsum.photos/seed/pitchside-<n>/<w>/<h>`
  placeholders; never source assets. Flags: picsum seeds or inline SVG.
- **Naming check:** "pitchside" collides with nothing in `apps/` or
  `openspec/specs/` (verified 2026-09-30).

## Screenshot analysis (`specer-free-template.jpg`, 2026-09-30)

Soccer club news site. Solid red (#dd1515) header bar: white soccer-ball
logo + "SPECER" wordmark left; uppercase white nav right (HOME underlined
active, CLUB, SCHEDULE, RESULTS, SPORT, PAGES, CONTACT US, search icon).
Full-width hero: dark night-stadium photo (packed crowd, green pitch
visible), centered white text — small "30 september 2019 / 9:00 GMT+0000"
line, large bold "Airrosten VS Lerenort in London", solid red square
"More Details" button. Below: dark trending strip — red "▸ Trending
News" block on the left third, headline text center, prev/next square
arrows right. Then a dark low-poly section with two columns: "Next Match"
and "Recent Results" — each 3 dark rows (flag + country left, small
"Ucraina vs England" + bold "VS" or "1 : 2" + date center, country + flag
right). Matches the extracted CSS exactly (Roboto, #dd1515 brand,
#151618 darks, rgba(21,22,24,0.9) match rows).

## Live DOM structure (verbatim skeleton)

```
header.header-section              (solid #dd1515)
  .container .row .col-lg-2 .logo  (white wordmark)
  .col-lg-10 .header__nav
    ul.nav-menu .main-menu: Home | Club | Schedule | Results | Sport(dropdown) | Pages(dropdown: Blog, Blog Details) | Contact Us
    .nm-right  (search icon)
section.hero-section.set-bg        (img/hero/hero-1.jpg, 700px, centered)
  .hero-text: h6 date | h1 "Airrosten VS Lerenort in London" | a.primary-btn "More Details"
section.trending-news-section      (#151618)
  .tn-title "Trending News"  (.news-slider.owl-carousel headline + owl-nav prev/next)
section.match-section.set-bg       (img/match/match-bg.jpg)
  .container: col-lg-6 "Next Match" (3× .mc-table rows: left-team flag+h6 | mt-content mc-op + VS + mc-op date | right-team h6+flag)
              col-lg-6 "Recent Results" (same, center = "1 : 2")
section.soccer-section             (light)
  .container .row: col-lg-3 × 4 → .soccer-item.set-bg (img/soccer/soccer-1..4.jpg)
    .si-tag (red) | .si-text h5 a title + ul li meta (pipe-separated)
section.latest-section
  .section-title.latest-title h3 "Latest News" + ul filter pills
  .row: col-lg-8 → 5× .news-item.left-news (ni-pic.set-bg 240px + ni-tag red + ni-text h4 + ul meta (calendar/edit icons) + p excerpt)
        col-lg-4 → h4 "Club Ranking" .points-table (th: Pos/Team/P/W/L/PTS; rows: flag+team-name + numbers)
section.video-section              (dark #2c2d2f)
  .section-title h3 "Hot Videos"
  .row → 5× .video-item.set-bg (img/videos/video-1.jpg etc.)
    .vi-title h5 (top) | a.play-btn.video-popup (center, hover-reveal) | .vi-time (bottom-right, rgba(0,0,0,0.7))
section.popular-section
  .row: col-lg-8 → .section-title h3 "Popular Post" + 5× .news-item.popular-item.set-bg (240px)
          .ni-tag (red default | .tenis #0054a6 | .football #e3ce1e) | .ni-text h5 a + ul meta (white, bottom)
        col-lg-4 → h5 "Follow Us" ul.follow-links (li.facebook #506eaa | li.twitter #55acee | li.google #dd4b39; icon + .fl-name + .fl-fan)
          .vote-option.set-bg (img/news/vote-bg.jpg): h5 "In your opinion, which country will win this year" + .vt-item radio labels (Germany, Brazil, Myanmar, Argentina)
footer.footer-section.set-bg
  .row: col-lg-3 fs-logo (logo + .fs-social circular icons) | col-lg-4 offset-lg-1 fw-widget "Top Club" (fw-links) | col-lg-4 "Recent News" (fw-item: icon + title)
  .copyright-option: co-text "Copyright © ..." | co-widget (small links)
```

## Design tokens (canonical — from css/style.css)

| Token | Value |
|-------|-------|
| Font | `"Roboto", sans-serif` — 300/400/500/700 |
| Brand red | `#dd1515` (header, primary-btn, tags, section-title bar, hovers) |
| Dark | `#151618` (trending strip, headings on light, match rows `rgba(21,22,24,0.9)`), `#2c2d2f`/`#333`/`#000` |
| Light | `#f2f2f2` (light sections, pills, title rule), `#e5e5e5`/`#e9e9e9` |
| Muted | `#636363` (excerpts/copyright), `#ababab` (meta), `#8a8b8c` (slider arrows) |
| Sport tags | tennis `#0054a6`, football `#e3ce1e` |
| Social rows | facebook `#506eaa`, twitter `#55acee`, google `#dd4b39` |
| Buttons | `.primary-btn` 16px/500, white on `#dd1515`, letter-spacing 1px, padding `14px 36px 12px`, square (no radius) |
| Section title | h3 28px/300 `#151618`; `:before` 70px×3px `#dd1515`; `:after` full-width 3px `#f2f2f2` |
| Tag pill | 10px uppercase/500, ls 1px, pad `3px 9px`, absolute top-left |
| Match row | bg `rgba(21,22,24,0.9)`, td pad 16px, flag 50×30px, center col 150px, score h4 700 white |
| Soccer card | 405px tall, `.si-text` bottom 25px, red `.si-tag` |
| Video item | 200px, play-btn hover-reveal center, `.vi-time` `rgba(0,0,0,0.7)` chip bottom-right |
| Popular card | 240px overlay photo, `.ni-text` bottom 16px, white title+meta |
| Vote widget | 290px `set-bg`, 14px white circle radios (2px border, filled white when checked) |
| Footer | set-bg dark photo, `.fs-social` circular icons hover `#dd1515`, copyright border-top `#2d2e30`, `#636363` 14px text |

## Section-by-section fidelity notes

1. **Header** — solid red bar (NOT transparent-over-hero like
   Striker/Soccer). White ball-glyph wordmark ("PITCHSIDE"); uppercase
   white 15px/500 links with 2px white underline on hover/active; white
   dropdown panels (Blog / Blog Details under Pages); white search icon
   right; mobile hamburger.
2. **Hero** — 700px, centered stack over dark stadium photo: date line,
   big headline, red square CTA "More Details". No countdown (unlike
   Striker — Specer has none; do not add one).
3. **Trending strip** — distinctive: red 32%-width title block flush
   left + headline slider + square prev/next arrows (1px `#8a8b8c`)
   right. React: state-driven slider; keyboard-accessible arrows.
4. **Match section** — two parallel tables ("Next Match" with VS,
   "Recent Results" with "1 : 2" scores); dark low-poly bg; near-black
   translucent rows with flag | center | flag layout.
5. **Soccer feed** — 4-up cards (5px gutters), photo + red tag +
   bottom white title/meta (pipe-separated author/date).
6. **Latest News + Club Ranking** — light section; red-bar title with
   filter pills (hover #dd1515); 5 big cards left (col-8), standings
   table sidebar right (col-4): Pos/Team/P/W/L/PTS with flag images.
7. **Hot Videos** — dark section; top white titles, hover-revealed
   centered play button, duration chip bottom-right; 5 cards (source
   repeats the 5th thumb — dedupe in recreation is fine).
8. **Popular Post + Follow Us + Vote** — 5 overlay photo cards with
   sport-colored tags (red default, blue tennis, yellow football);
   brand-colored social fan-count rows; radio poll widget with white
   circle radios (controlled state).
9. **Footer** — dark photo bg; wordmark + description + social circles;
   "Top Club" + "Recent News" widgets; copyright bar → Component Dock
   link (https://www.componentdock.com/, branded "Component Dock").

## Differences from the sibling Sports template (Striker/Soccer)

Striker (Soccer) and Pitchside (Specer) are both dark sports sites but
structurally different — do not copy Striker's structure:
- Header: Striker = transparent over hero; Pitchside = solid red bar.
- Hero: Striker = right column + 5-unit countdown; Pitchside = centered
  text + single CTA, NO countdown.
- Pitchside's unique sections: trending news strip, match fixtures
  tables (Next Match / Recent Results), soccer feed 4-up, Club Ranking
  points table, vote poll widget.
