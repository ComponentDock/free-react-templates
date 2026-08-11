# Parchment (ColorLib Wordsmith) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-parchment`.

## Source mapping

- **ColorLib item:** "Wordsmith" (TEMPLATES.md line 296 — the only occurrence,
  no dup row; verified with `grep -c 'wp/template/wordsmith/'`).
- **Source URL:** https://colorlib.com/wp/template/wordsmith/
- **Preview URL:** https://preview.colorlib.com/theme/wordsmith/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~35.6 KB HTML). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/wordsmith/css/main.css
  (~80.3 KB) + `css/base.css` (~11.6 KB) + `css/vendor.css` (~10.6 KB) —
  tokens extracted. Site is jQuery + slick slider (featured carousel),
  FontAwesome icons — NOT Tailwind. JS: `js/main.js` (slick init + menu
  handling).

## Reference research (done — do not redo)

### Screenshot (`wordsmith-free-template.jpg`, 1200×946; verified via browser vision)

Stark white header: "wordsmith." logo in black italic serif on the far left,
centered uppercase nav (HOME CATEGORIES BLOG STYLES ABOUT CONTACT) with
dropdown arrows, "SEARCH" label + magnifier icon on the right. Hero: dark
moody guitar photo, small uppercase "MUSIC" label, large white serif headline
"What Your Music Preference Says About You and Your Personality.", meta row
"Jonathan Smith • June 02, 2018" with circular avatar. Three black dots
centered below the hero (middle dot filled = active slide). Light gray page
background; tops of three photo-card thumbnails peek in below. Deep navy
footer is below the fold — confirmed via the live preview. Matches the live
DOM 1:1.

### Live DOM (primary reference — matches the screenshot 1:1)

Section order (verified against the fetched HTML + parsed CSS):

1. **Preloader** `div.dots-fade` — 3 animated dots. Cosmetic, optional; can
   omit or replace with a subtle fade-in.
2. **Header** `header.s-header` — `background-color: #FFFFFF`, `height: 78px`,
   `position: absolute; top: 0; left: 0; width: 100%`, `text-align: center`.
   - `div.header__logo` — absolute, `left: 40px`, `top: 50%`. Logo is an
     image 165×25 ("wordsmith." italic serif wordmark). Recreate as text:
     Libre Baskerville italic, ~2.4rem, black.
   - `div.header__nav-wrap` — `display: inline-block`, centered via the
     header's `text-align: center`. `ul.header__nav`: Nunito Sans 600,
     `font-size: 12px`, `text-transform: uppercase`, `letter-spacing: 2px`,
     `line-height: 78px`. Links: HOME (`li.current`, black), CATEGORIES
     (dropdown: Lifestyle, Health, Family, Management, Travel, Work), BLOG
     (dropdown: Video Post, Audio Post, Standard Post), STYLES, ABOUT,
     CONTACT. Link color `rgba(0,0,0,.6)`, hover/current `#000000`.
     Dropdown `ul`: `background: #151515`, `border-radius: 0 0 3px 3px`,
     padding 1.8rem 0, links 15px `rgba(255,255,255,.6)` hover `#FFFFFF`.
     Mobile: nav-wrap becomes a fixed full-screen white panel; links 18px
     black with `border-top: 1px solid rgba(0,0,0,.1)`, current/hover
     `#111860` bold; dropdowns become static and transparent.
   - `div.header__search-trigger` — absolute right (30px), 18px icon +
     ::before content "Search" (12px uppercase ls 2px, black). Opens
     `div.header__search`: fixed full-screen white overlay, `opacity: 0 →
1`, `visibility`, z-index 900. Form centered at 50%: `label` black,
     `input[type=search]` Nunito Sans 700 `font-size: 6rem`, transparent bg,
     `border-bottom: 1px solid rgba(0,0,0,.1)`, max-width 680px; ::after hint
     "Press Enter to begin your search." `rgba(0,0,0,.5)` 1.6rem. Close
     button top-right.
3. **Featured slider** `section.s-featured` — `background-color: #f2f2f2`,
   `padding: 15rem 0 10.2rem` (header overlays the top; the gray shows above
   the slides). `div.featured-slider` (slick):
   - 3 slides `div.featured__slide` — `height: 600px` (576/564/540/510/486/
     468/456/390/372px at breakpoints), `text-align: center`, transition
     .5s. `div.entry` display table, height/width 100%, padding-top 3rem.
   - `div.entry__background` — absolute cover bg image, inline
     `background-image: url('images/thumbs/featured/featured-guitarman.jpg')`
     etc.
   - `div.entry::before` — black overlay, `opacity: .4`, `z-index: 1`.
   - `div.entry__content` — table-cell middle, `padding: 0 15%` (10% md, 8%
     small), z-index 2: `div.entry__category` (uppercase 1.4rem ls .3rem
     white, mb 1.5rem; slides: "Music", "Management", "LifeStyle"),
     `h1` Libre Baskerville 4.2rem white (headlines: "What Your Music
     Preference Says About You and Your Personality.", "The Pomodoro
     Technique Really Works.", "The difference between Classics, Vintage &
     Antique Cars."), `div.entry__info` — 42px circular avatar (float left)
     - `ul.entry__meta` (1.6rem `rgba(255,255,255,.5)`: author name
       (Jonathan Smith / John Doe) + bullet • + date (June 02, 2018 / June 13,
       2018 / June 12, 2018); bullets via `li::after content '\2022'`).
   - Slick dots: 10px black circles, `li.slick-active button` = transparent
     bg + `border: 3px solid #000000`. Arrows: 70px white circles,
     `left/right: -120px` (outside the slider), icon SVGs; hover scale.
4. **Blog entries** `section.s-content` — bg #f2f2f2, `padding: 6rem 0
7.2rem`. `div.entries` grid (`row.entries-wrap.wide`): 12
   `article.item-entry` — white, centered, `padding-bottom: 6rem`, shadow
   `0 1px 3px rgba(0,0,0,.12)`, overflow hidden. 3-col desktop → 2-col →
   1-col mobile.
   - `div.item-entry__thumb` — cover image, hover scale (~1.03).
   - `div.item-entry__text` — `padding: 1.5rem 2.4rem 0`.
   - `div.item-entry__cat` — `a`: Nunito Sans 700 1.4rem uppercase ls .25rem,
     default color `#1d28a1` (inherited global link color), hover `#000000`,
     mb 1.2rem. Categories: DESIGN, HEALTH, MANAGEMENT, LIFESTYLE, MUSIC,
     RELATIONSHIPS, CREATIVITY, TRAVEL.
   - `h2.item-entry__title` — Libre Baskerville 2.8rem (2.4rem on small),
     `#000`, mb 4.5rem.
   - `div.item-entry__date` — 1.3rem uppercase ls .2rem `rgba(0,0,0,.8)`,
     absolute `left: 50%; bottom: 3.9rem; width: 100%` (translateX(-50%)).
   - The 12 entries (title / category / date):
     1. "3 Benefits of Minimalism In Interior Design." / DESIGN / June 15, 2018
     2. "10 Interesting Facts About Caffeine." / HEALTH / June 14, 2018
     3. "The Power of Music to Reduce Stress." / HEALTH / June 14, 2018
     4. "The Pomodoro Technique Really Works." / MANAGEMENT / June 12, 2018
     5. "Visiting Theme Parks Improves Your Health." / LIFESTYLE / June 12, 2017
     6. "What Your Music Preference Says About You and Your Personality." / MUSIC / June 02, 2018
     7. "Create Meaningful Family Moments." / RELATIONSHIPS / June 02, 2018
     8. "Gardening: The Secret to Happiness." / LIFESTYLE / June 01, 2018
     9. "An Examination of Minimalistic Design." / CREATIVITY / May 30, 2018
     10. "What Skills Are Required For a Photographer?" / CREATIVITY / May 30, 2018
     11. "Throwback To The Good Old Days." / LIFESTYLE / May 28, 2018
     12. "Planning Your First Trip To Sydney." / TRAVEL / May 28, 2018
5. **Pagination** `nav.pgn` — `margin: 3rem auto`, centered. `ul`
   inline-block, `padding: 0 6rem` (5rem mobile). `li.pgn__num`: Nunito Sans
   700 1.7rem, `height: 3.6rem`, `padding: .3rem 1.2rem`, `#000`, hover bg
   `#DDDDDD`. `.current`: bg `#111860` + white. `.pgn__prev/.pgn__next`:
   5rem × 3.6rem arrow-icon buttons, `border-radius: 3px`, hover `#DDDDDD`.
   Items: Prev, 1, 2, 3, 4, 5, …, 8, Next (current page = 1).
6. **s-extra** `section.s-extra` — white bg, `padding: 12rem 0 10.2rem`,
   1.5rem/1.8 Nunito Sans. Column h3: 1.4rem uppercase ls .25rem, mb 4.5rem,
   `padding-top: 1.8rem`, `::before` 1px `rgba(0,0,0,.1)` full-width rule +
   `::after` 2px `#111860` 90px bar (left).
   - `div.col-seven.md-six.tab-full.popular` → h3 "POPULAR POSTS" →
     `div.popular__posts.block-1-2` — 2-col grid of 6 `article.popular__meta`
     (thumb + `h5` serif title + meta "By John Doe on Jun 14, 2018" 1.3rem
     `rgba(0,0,0,.5)`). Entries: "10 Interesting Facts About Caffeine."
     (Jun 14), "Visiting Theme Parks Improves Your Health." (Jun 12), "Key
     Benefits Of Family Photography." (Jun 12), "Absolutely No Sugar Oatmeal
     Cookies." (Jun 12), "Throwback To The Good Old Days." (Jun 12), "Healthy
     Mediterranean Salad Recipes" (Jun 12). Note: `article:nth-child(n+5)`
     hidden on the smallest screens.
   - `div.col-four.md-six.tab-full.end` → inner row: `div.col-six
.categories` — h3 "CATEGORIES", `ul.categories li a`: Lifestyle,
     Travel, Recipes, Management, Health, Creativity (hover `#111860`);
     `div.col-six.sitelinks` — h3 "SITE LINKS", links: Home, Blog, Styles,
     About, Contact, Privacy Policy.
7. **Footer** `footer.s-footer` — NO own background: the `body` bg
   `#111860` shows through (this is the signature navy band). Padding
   10.2rem 0 (mobile 6rem), 1.5rem/2 `rgba(255,255,255,.5)`. Footer h4:
   Nunito Sans 700 1.4rem uppercase ls .25rem white, pb 4.2rem, `::after`
   120px × 1px `rgba(255,255,255,.1)` underline.
   - `div.s-footer__main` (mb 3rem) → row: `div.col-six.tab-full
.s-footer__about` — h4 "ABOUT WORDSMITH" + 3 paragraphs ("Fugiat quas
     eveniet voluptatem natus. Placeat error temporibus magnam sunt optio
     aliquam. Ut ut occaecati placeat at. Fuga fugit ea autem. Dignissimos
     voluptate repellat occaecati minima dignissimos mollitia consequatur.
     Sit vel delectus amet officiis repudiandae est voluptatem. Tempora
     maxime provident nisi et fuga et enim exercitationem ipsam. Culpa error
     temporibus magnam est voluptatem.").
   - `div.col-six.tab-full.s-footer__subscribe` — h4 "OUR NEWSLETTER" +
     paragraph ("Sit vel delectus amet officiis repudiandae est voluptatem.
     Tempora maxime provident nisi et fuga et enim exercitationem ipsam.
     Culpa consequatur occaecati.") + `form.subscribe-form#mc-form`: email
     input (height 5.4rem, mail icon left, `background: url(icon-mail.svg)
20px center no-repeat, rgba(0,0,0,.25)`, white text + placeholder, mb
     1.8rem) + submit "Send" (absolute right, `background: #000000`,
     white, height 5.4rem, padding 0 20px, radius 3px).
   - `div.s-footer__bottom` → row: `div.col-six` copyright: spans
     "© Copyright All rights reserved" | "This template is made with <heart>
     by Colorlib" (span::after "|" `rgba(255,255,255,.1)`; replace the
     Colorlib credit with original attribution); `div.col-six`
     `ul.footer-social` — 5 brand icons (Facebook, Twitter, Instagram,
     Pinterest, Google+), 3rem white; `div.go-top` back-to-top (optional).

## Design tokens (from main.css — computed)

| Token         | Value                  | Usage                                                                                                                |
| ------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------- |
| brand-navy    | `#111860`              | body page bg (footer band), btn--primary bg, pgn current, s-extra h3 bar, mobile nav current/hover, categories hover |
| navy-hover    | `#0d134a`              | btn--primary hover bg/border                                                                                         |
| link-indigo   | `#1d28a1`              | global link color (card category labels, links)                                                                      |
| ink           | `#000000`              | logo, headings, pgn numbers, slider dots, newsletter submit bg, nav hover/current (desktop), cat hover               |
| paper         | `#ffffff`              | header bg, entry-card bg, s-extra bg, text on dark                                                                   |
| section-gray  | `#f2f2f2`              | s-featured + s-content bg                                                                                            |
| dropdown-dark | `#151515`              | nav dropdown bg                                                                                                      |
| hover-gray    | `#dddddd`              | pgn num + prev/next hover bg                                                                                         |
| text-body     | `rgba(0,0,0,.8)`       | body copy, card date                                                                                                 |
| text-soft     | `rgba(0,0,0,.5)`       | popular meta, search hint                                                                                            |
| text-nav      | `rgba(0,0,0,.6)`       | header nav links                                                                                                     |
| text-on-dark  | `rgba(255,255,255,.5)` | slide meta, footer body text                                                                                         |
| font-heading  | "Libre Baskerville"    | logo (italic), slide h1 4.2rem, card titles 2.8rem/2.4rem, popular titles                                            |
| font-body     | "Nunito Sans"          | body 1.8rem lh 1.8333; nav 600 12px ls 2px; h3/h4 1.4rem uppercase ls .25rem; search input 700 6rem                  |

Radii: 3px (buttons, pgn prev/next, dropdown bottom corners), 50% (42px
avatar, 10px dots, 70px arrows). Card shadow `0 1px 3px rgba(0,0,0,.12)`.
Slide overlay: `::before` black opacity .4.

## Implementation task outline

1. Scaffold `apps/parchment` (copy the simplest existing app, rename package
   to `@free-react-templates/parchment`), `npm install` at root (lockfile!),
   `injectUiSource()` in vite.config.ts, Libre Baskerville (400 + italic 400, 700) + Nunito Sans (400/600/700/800) Google Fonts `<link>` in index.html.
2. `src/index.css` — `@theme` tokens: `--color-brand: #111860`,
   `--color-brand-hover: #0d134a`, `--color-link: #1d28a1`,
   `--color-ink: #000`, `--color-paper: #fff`, `--color-section: #f2f2f2`,
   `--color-dropdown: #151515`, `--color-hover-gray: #dddddd`,
   `--font-heading: "Libre Baskerville", serif`, `--font-body: "Nunito
Sans", sans-serif`. Page bg = brand navy on `body`; content sections
   paint their own #f2f2f2 / #fff over it.
3. Components: `Header` (logo text + centered uppercase nav with 2 dropdowns
   - SEARCH trigger + full-screen search overlay + mobile full-screen menu),
     `FeaturedSlider` (state carousel: 3 slides with bg image + black overlay +
     category + serif headline + avatar/author/date meta, dot + prev/next
     controls), `EntriesGrid` (12 cards: thumb + category + title + bottom
     date), `Pagination` (Prev/1–5/…/8/Next with current #111860),
     `ExtraSection` (PopularPosts 6 × 2-col + Categories + SiteLinks),
     `Footer` (about, newsletter form, socials, copyright).
4. Slider: state-based index carousel (no new deps), dots + prev/next,
   keyboard-accessible; reuse an existing shipped pattern if present.
5. Tests per section (scenario-style `it` blocks mirroring the spec Gherkin),
   100% coverage; `npm run verify:app -- parchment`.
6. PR: `feat: implement Parchment (ColorLib Wordsmith)`, description must
   list source template, preview URL, tokens, and renames/placeholder
   decisions.

## Fidelity notes

- The navy #111860 is the PAGE background, not a footer style: the footer has
  no background of its own, so the navy shows through behind it (and in any
  gaps around the light sections). Reproduce by setting the navy on `body`
  and painting the light sections (#f2f2f2 / #fff) on top.
- The white header is absolutely positioned over the gray s-featured section
  (which has 15rem top padding) — the hero slides start below the 78px
  header bar.
- Logo is a wordmark ("wordsmith.") in italic serif on the LEFT of the
  header, NOT centered — the nav is centered, the logo and SEARCH flank it.
- Nav is 12px uppercase with 2px letter-spacing, line-height 78px; dropdowns
  are near-black #151515 (white-ish links), a distinctive contrast to the
  white header.
- Full-screen search overlay: giant 6rem bold input with only a bottom
  border, "Press Enter to begin your search." hint.
- Featured slides: 40% black overlay, centered white Libre Baskerville h1,
  category label above, avatar + name + date below; dots are black 10px with
  a 3px black ring on the active one; arrows are big white circles parked
  outside the slider on desktop.
- Entry cards: white, centered, date pinned near the card bottom (uppercase
  small), category label indigo #1d28a1 → black hover. No excerpt on cards
  in this template.
- Pagination numbers are small squares-ish (3.6rem tall, .3rem 1.2rem
  padding) with #ddd hover; current is navy.
- s-extra headings have the double-rule treatment (1px full-width line +
  2px #111860 90px bar).
- Footer newsletter input has a mail icon + dark translucent bg
  (rgba(0,0,0,.25) over navy) and a black "Send" button.
- Author names: "Jonathan Smith" (featured slide 1) / "John Doe" — fine to
  keep (fictional people). "wordsmith." brand → "parchment." everywhere
  (footer headings ABOUT WORDSMITH → ABOUT PARCHMENT, etc.).
- Footer "made with <heart> by Colorlib" credit → original attribution.
- All images: `https://picsum.photos/seed/parchment-<n>/<w>/<h>` (featured
  parchment-1..3, entry thumbs parchment-4..15, popular thumbs
  parchment-16..21, author avatar parchment-22 reused everywhere). Keep one
  shared avatar seed so the author looks consistent.
- Icons: lucide Search / X / Menu / ChevronLeft / ChevronRight / Mail;
  social brand icons as inline SVG (lucide removed brand icons).
