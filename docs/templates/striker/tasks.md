# Striker (ColorLib Soccer) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-striker`. Recreation name: **Striker** (NEW name —
> the ColorLib source keeps its name "Soccer").

## Source mapping

- **ColorLib item:** "Soccer" (TEMPLATES.md line 2842; section
  "## Sports (9)"). Slug `soccer` appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/soccer/
- **Preview URL — REACHABLE (verified 2026-09-30 by direct fetch):**
  **`https://preview.colorlib.com/theme/soccer/`**
  (HTTP 200, 24,299 bytes, `<title>Soccer — Website by Colorlib</title>`).
  No `theme/bootstrap/` path needed for this one — the naive URL works.
- **Preview CSS:** `css/style.css` (25,240 bytes) — Bootstrap-derived base
  + hand-written template block (`.site-navbar`, `.hero`, `.team-vs`,
  `.latest-news .post-entry`, `.widget-next-match`, `.video-media`, `.footer-section`,
  `.heading`, `.btn`/`.btn-primary`).
- **Source scripts:** jQuery + `js/main.js` + owl.carousel +
  jquery.countdown — REIMPLEMENT in React (countdown via `useEffect` +
  timers; carousel via state or CSS scroll-snap). Do not ship jQuery.
- **Icons:** icomoon + flaticon glyph fonts — REPLACE with lucide-react.
- **Fonts:** Montserrat via Google Fonts `<link>` (300, 700, 900).
- **Assets:** hero photo (soccer ball caught in a net, dark overlay),
  3 news photos, video thumbnails, 2 player avatars, 2 team crests —
  all via `https://picsum.photos/seed/striker-<n>/<w>/<h>` placeholders.

## Reference research (done — do not redo)

### Screenshot (`soccer-free-template.jpg`, visually analyzed 2026-09-30)

Dark, sporty club site. Full-width hero photo of a soccer ball caught in
a goal net, dark overlay; transparent navbar on top: white "SOCCER™"
wordmark left, uppercase white links HOME (underlined) / MATCHES /
PLAYERS / BLOG / CONTACT right. Hero right column: huge white "World Cup
Event" headline, gray lorem subtext, a five-unit countdown (696 weeks /
03 days / 08 hr / 07 min / 33 sec — big white numbers, small labels),
red "BOOK TICKET" button + white "LEARN MORE" text link. Below the hero,
overlapping it: the match-result card — near-black rounded card; LEFT
half dark with a small red crest, "LA LEGA (win)", four white scorer
lines with jersey numbers; center: huge white "4 – 1"; RIGHT half solid
red (#ee1e46) with a DIAGONAL split edge, a dark crest, "JUVENDU
(loss)", four scorer lines. Then "Latest News" (red vertical bar before
the heading) with three photo cards (photos of footballers; hover shows
a red diagonal caption with title + author). Overall palette: dark
blue-gray page (#222831), red #ee1e46 accents, white text — matches the
extracted CSS exactly.

### Live DOM structure (verbatim skeleton)

```
div.site-wrap
  div.site-mobile-menu (slide-in panel: close icon + nav links)
  header.site-navbar (absolute, z-1999, over hero)
    .site-logo > a > img images/logo.png        (white wordmark)
    nav.site-navigation
      ul.site-menu: Home | Matches | Players | Blog | Contact (uppercase)
      button.site-menu-toggle (hamburger, mobile only)
  div.hero.overlay                                (bg photo + dark overlay)
    .container > .row.align-items-center
      .col-lg-5.ml-auto
        h1 "World Cup Event"
        p (lorem subtext)
        #date-countdown                           (weeks/days/hr/min/sec)
        a.btn.btn-primary "Book Ticket"
        a.more.light "Learn More"
  .container > .row > .col-lg-12
    div.d-flex.team-vs                            (#0d0f13, radius 10px,
                                                   margin-top -90px, shadow)
      span.score "4-1"                            (3rem bold white, centered)
      .team-1.w-50 (LEFT — dark half)
        img images/logo_1.png + h3 "LA LEGA (win)"
        ul: Anja Landry (7) · Eadie Salinas (12) · Ashton Allen (10) ·
            Baxter Metcalfe (5)
      .team-2.w-50 (RIGHT — solid red half, diagonal edge)
        img images/logo_2.png + h3 "JUVENDU (loss)"
        ul: Macauly Green (3) · Arham Stark (8) · Stephan Murillo (9) ·
            Ned Ritter (5)
  div.latest-news                                 (padding 100px 0)
    h2.heading "Latest News"                      (10px red left bar)
    .row.no-gutters > 3 × .col-md-4 > .post-entry
      img + .caption > .caption-inner > h3 title + .author
        (avatar img + name "Mellissa Allison" + date)
  div.site-section.bg-dark
    .row > 2 × .col-lg-6 > .widget-next-match    (1px rgba(255,255,255,.1))
      .widget-title > h3                          (bg #ee1e46, white)
      [1] "Next Match": .widget-vs (team-1 img+h3 | span.vs | team-2 img+h3)
          .widget-vs-contents: h4 "Soccer", p "World Cup League",
          "December 20th, 2020 9:30 AM GMT+0", "New Euro Arena"
          #date-countdown2
      [2] "Football League": .widget-vs + .widget-vs-contents (same shape)
          + standings table: Team | P | W | D | L | PTS, 8 rows
          (Football League, Soccer, Juvendo, French Football League,
           Legia Abante, Gliwice League, Cornika, Gravity Smash —
           demo rows all "22 3 2 140")
  div.site-section                                 (Videos)
    .row > .col-6 h2.heading "Videos" + .col-6 .custom-nav
      (a.js-custom-prev-v2 chevron-left | a.js-custom-next-v2 chevron-right)
    .owl-4-slider.owl-carousel > 6 × .item > .video-media
      img thumb + a.play-button (red circle + ring + play glyph) + caption h3
  div.site-section                                  (Our Blog)
    h2.heading "Our Blog"
    2 × .custom-media: img + .text > .meta (red date pill "May 20, 2020")
      + h3 "Romolu to stay at Real Nadrid?" + excerpt lorem + "Read more"
  footer.footer-section                             (bg #1a1e25)
    .row > 4 × .col-lg-3 > .widget (title + ul.links)
      News:    All Club News · Media Center · Video · RSS
      Tickets: Online Ticket · Payment and Prices · Contact & Booking ·
               Tickets Coupon
      Matches: Standings · World Cup · La Lega · Hyper Cup · World League
      Social:  Twitter · Facebook · Instagram · Youtube
    social icon glyphs row + "Copyright © All rights reserved | ..."
    (→ replace with Component Dock link per conventions)
```

## Design tokens (from live CSS — canonical)

| Token | Value |
|-------|-------|
| Font | `"Montserrat", ..., sans-serif`; body 16px / weight 300 / line-height 1.7 |
| Body color | `gray` (visible text is white on dark) |
| Page bg | `#222831` |
| Brand red | `#ee1e46` (buttons, bars, play buttons, caption diagonal, nav hover) |
| Yellow accent | `#f6d743` — declared then overridden by `#ee1e46`; effectively unused |
| Footer bg | `#1a1e25`; footer text `rgba(255,255,255,0.5)`, 14px |
| Match-card bg | `#0d0f13`, radius `10px`, margin-top `-90px`, shadow `0 15px 30px rgba(0,0,0,0.1)` |
| Widget border | `1px solid rgba(255,255,255,0.1)` |
| Widget title bar | bg `#ee1e46`, white, padding `16px 20px` |
| Heading bar | `.heading:before`: 10px wide, `#ee1e46`, full-height left bar; heading 20px/700 white |
| Score | 3rem / 700 / `#fff`, centered between halves |
| Buttons | uppercase, 12px, weight 900, border 2px; primary bg `#ee1e46` white; hover transparent + white border/text |
| Text CTA | `.more.light`: white link; hover `#ee1e46` |
| Hero | bg photo `cover` centered + dark overlay (`.hero.overlay`) |
| Navbar | absolute full-width transparent over hero; links white uppercase; active underline; hover `#ee1e46` |
| News caption | absolute overlay; red `#ee1e46` diagonal shape (`left: -12%`); white title; author avatar/name/date |
| Play button | 50px circle `#ee1e46` + 60px 2px `#ee1e46` ring, white play glyph, bottom-left of thumb |
| Blog date pill | small `#ee1e46` background, 12px, inline-block |
| Section padding | `2.5em 0` mobile → `5em 0` desktop; `.latest-news` `100px 0` |
| Secondary grays | `#edf0f5`, `#f4f5f9`, `#25262a` |

## Structure order (top to bottom)

1. Navbar — absolute over hero: wordmark + uppercase links + hamburger/mobile panel
2. Hero (photo + dark overlay): headline + subtext + 5-unit countdown + "Book Ticket" (red) + "Learn More" (white link)
3. Match-result VS card (overlaps hero −90px): dark left half (crest + "LA LEGA (win)" + scorers) | "4 – 1" | red right half w/ diagonal (crest + "JUVENDU (loss)" + scorers)
4. Latest News: red-bar heading + 3 hover-caption photo cards (author row)
5. Dark section: two widgets — "Next Match" (VS block + info + countdown) and "Football League" (VS block + info + standings table P/W/D/L/PTS × 8 rows)
6. Videos: red-bar heading + prev/next arrows + 6-item carousel (thumb + red play button + caption)
7. Our Blog: 2 posts (image + red date pill + title + excerpt + "Read more")
8. Footer: 4 link columns + social icons + copyright + Component Dock link

## Fidelity notes (section by section)

### Navbar
- Transparent, absolute over the hero (z-index high); logo is a white
  wordmark — use OUR name (text wordmark or simple SVG), never the source
  "SOCCER™" logo asset.
- Uppercase white 12–14px links with an underline on the active item;
  hover turns `#ee1e46`. Mobile: hamburger button → slide-in panel from
  the right/left with the same links + close icon; `aria-expanded`.

### Hero
- Photo background (ball-in-net) via picsum seed `striker-hero` +
  dark overlay (the source uses a dark image + overlay class).
- Content in the RIGHT column on desktop (`col-lg-5 ml-auto`), full
  width on mobile. Headline white bold (h1 4rem/700 at desktop per CSS,
  smaller on mobile — 2.5rem).
- Countdown: five units — weeks, days, hr, min, sec. Big white numbers,
  small labels under each (screenshot). Implement as a React component
  with a fixed target date + `setInterval` (1s), cleanup on unmount;
  format numbers padded (03, 08…). Unit labels are the ONLY countdown
  text — no plugin.
- "Book Ticket": red `#ee1e46`, uppercase, 12px, weight 900, 2px border,
  generous padding (`py-3 px-4`); hover → transparent + white border +
  white text (source rule). "Learn More": plain white text link beside
  it.

### Match-result VS card
- THE signature element. `#0d0f13` card, radius 10px, shadow,
  `margin-top: -90px` so it overlaps the hero bottom; container width.
- Score absolutely centered: "4 – 1", 3rem/700 white. In the screenshot
  the score sits on the dark side of the diagonal split.
- LEFT half: dark — crest (picsum/SVG badge), team name bold white with
  a muted "(win)" suffix, then 4 scorer lines "Name (jersey)" in
  smaller white text, centered.
- RIGHT half: solid `#ee1e46` with a DIAGONAL left edge (screenshot) —
  implement the diagonal with a CSS `clip-path: polygon(...)` (or a
  skewed pseudo-element) so the red half cuts diagonally into the dark
  half; keep the card's outer radius. Same content shape as the left
  half but "(loss)" suffix; crests/names white on red.
- Stacks vertically on mobile (score still centered between halves).

### Latest News
- Red-bar heading ("Latest News" — paraphrase OK, keep short news
  headline).
- 3 equal cards (col-md-4), photo fills the card (`aspect` ~4:3).
- Hover: caption overlay with a red `#ee1e46` DIAGONAL shape
  (`left: -12%` skewed band) + white article title + author row (round
  avatar, name, date). Photos: picsum `striker-1..3`; avatars:
  `striker-avatar`.

### Next Match / Football League widgets
- Dark section bg (`bg-dark` — keep the page's dark tone; section sits
  on `#222831`-ish dark). Two cards, each `1px solid
  rgba(255,255,255,0.1)`, transparent/very-dark fill.
- Red title bar (full widget width, padding 16px 20px, white bold text):
  "Next Match" / "Football League".
- VS block: crest left + big "vs" mark + crest right; team names under
  crests; then centered info: competition line ("Soccer" /
  "World Cup League"), date ("December 20th, 2020 9:30 AM GMT+0"), venue
  ("New Euro Arena"). Paraphrase OK — keep the same kinds of lines.
- "Next Match" widget ends with a ticking countdown (same component as
  hero). "Football League" widget ends with the standings table:
  columns Team · P · W · D · L · PTS; 8 demo rows (numbers can be
  plausible demo data); readable on dark bg — muted header, subtle row
  separators.

### Videos
- Red-bar heading + two circular arrow buttons on the right
  (chevrons, keyboard focusable, aria-labels).
- Carousel: 6 items (cycling the 3 news titles is fine). Each card:
  thumbnail (picsum `striker-video-1..5`), red 50px play circle with a
  60px 2px red ring bottom-left + white play glyph, white title caption
  at bottom. Reimplement with native `overflow-x-auto` + scroll-snap
  (or a simple state slider) — NO owl.carousel/jQuery.

### Our Blog
- 2 posts side by side: image left (or above on mobile), text right:
  small red pill date ("May 20, 2020"), bold white title, gray lorem
  excerpt, "Read more" link (white → red hover).

### Footer
- bg `#1a1e25`, 70px vertical padding, 14px text
  `rgba(255,255,255,0.5)`.
- 4 columns: News / Tickets / Matches / Social with the exact link
  lists in the DOM skeleton (same KIND of content — paraphrase names if
  desired, keep 4–5 links each).
- Social column + icon row: lucide `Twitter`/`Facebook`/`Youtube`/
  `Instagram` with aria-labels; icons in muted white, red on hover.
- Bottom: copyright line + heart icon + **"More templates at Component
  Dock" → https://www.componentdock.com/** (mandatory). NO ColorLib
  attribution anywhere.

## Component outline

- `App.tsx` — page composition (all sections in order)
- `components/Navbar.tsx` — absolute navbar + mobile menu state
- `components/Hero.tsx` — bg + overlay + headline + CTAs
- `components/Countdown.tsx` — reusable 5-unit countdown (hero + widget;
  props: targetDate, variant)
- `components/MatchResultCard.tsx` — VS result card (TeamHalf sub-part
  via `Object.assign` if useful; diagonal red half via clip-path)
- `components/LatestNews.tsx` + `NewsCard.tsx` — hover caption cards
- `components/NextMatchSection.tsx` — dark section composing
  `MatchWidget.tsx` (VS block + info; optional countdown) +
  `StandingsTable.tsx`
- `components/VideosSection.tsx` — heading + arrows + carousel items
- `components/BlogSection.tsx` + `BlogPost.tsx`
- `components/Footer.tsx` — 4 columns + social icons + Component Dock
  line
- `src/index.css` — Tailwind entry + `@theme` tokens:
  `--color-brand: #ee1e46`, `--color-page: #222831`, `--color-card:
  #0d0f13`, `--color-footer: #1a1e25`; heading-bar / diagonal /
  overlay utilities as needed

## Task outline (for the implementer)

1. Scaffold `apps/striker` from the simplest existing app; rename package
   to `@free-react-templates/striker`; set `CNAME`
   (`striker.free.componentdock.com`) + `"homepage"`; run `npm install`
   at repo root; register `injectUiSource()` in `vite.config.ts`.
2. `index.html`: Montserrat Google Fonts link (300, 700, 900).
3. `index.css`: `@theme` tokens (brand `#ee1e46`, page/card/footer bgs).
4. TDD per component, in DOM order: Navbar (mobile menu a11y) →
   Countdown (timer + cleanup + rollover) → Hero → MatchResultCard
   (diagonal split) → LatestNews (hover caption) → NextMatchSection
   (widget + StandingsTable) → VideosSection (carousel nav) →
   BlogSection → Footer (Component Dock link).
5. Tests: getByRole/LabelText; countdown ticks + cleans up (fake
   timers); menu toggle aria-expanded; carousel arrows; 100% coverage.
6. No ColorLib strings anywhere in `apps/striker`; footer links
   `https://www.componentdock.com/`.
7. `scripts/verify-app.sh striker` green → PR `feat/template-striker` →
   squash merge (deploy follows merge).
