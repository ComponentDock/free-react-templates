# Cherish — design notes (replication of ColorLib "Dreamwed")

- **Source:** https://colorlib.com/wp/template/dreamwed/ (slug `dreamwed`)
- **Preview read:** https://preview.colorlib.com/theme/dreamwed/ — HTTP 200, 34,516 B (2026-10-12)
- **Stylesheet:** `css/style.css` — HTTP 200, 30,285 B (the preview's own `css/main.css` 404s)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dreamwed-free-template.jpg —
  served as AVIF, 1200 × 946, converted to PNG and inspected visually
- **App:** `apps/cherish` (`@free-react-templates/cherish`), shipping at
  https://cherish.free.componentdock.com

## Section order (1:1 with the live DOM)

| # | Source block | Cherish block | id |
| - | ------------ | ------------- | -- |
| 1 | `header` (centred logo, nav row, PAGES dropdown, search switch) | monogram header, nav row + More disclosure, search control + burger | — |
| 2 | `section.hero` (date, names, flourish, message, gold button) | hero over the photograph, scrim, `#seat` button | `#today` |
| 3 | `section.story` (eyebrow, heading, flourish, two partner cards, round portrait) | same, with the portrait between the cards | `#tale` |
| 4 | `section.countdown` (4 × 150px counters, gold colons) | live counters off the real clock | `#countdown` |
| 5 | `section.gallery` (title band on its own photo + 4 × 2 frames) | 4 × 2 frame grid pulled up `-145px` | `#portraits` |
| 6 | `section.event` (Owl carousel of day events on a 1px rail at `top:116px`) | translate track + dots + prev/next, wrapping | `#schedule` |
| 7 | `section.rsvp` (floating white card + white copy beside it) | same, card on `-70px` top and bottom | `#seat` |
| 8 | `section.wedding-time` (3 white cards, clock + place lines) | 3 venue cards | `#where` |
| 9 | `footer` (logo, copyright, 4 circle socials) | monogram, year, 4 circles, Component Dock credit | — |
| — | `div.search-model` (fixed white sheet) | `SearchSheet` | — |

## Tokens (all read from the source's own sheet, all re-measured on the built page)

| Token | Value | Where it lands |
| ----- | ----- | -------------- |
| brand gold | `#d48f4c` | buttons, nav underline, countdown colons, footer credit |
| ink | `#353535` | headings, hover/current nav, digits, dropdown panel, socials' hover |
| muted | `#747e8c` | body copy, eyebrows, event times, venue lines |
| faint | `#b5b5b5` | resting nav links |
| hairline | `#e1e1e1` | field borders, social rings |
| wash | `#eaf1f4` | the dot under each event icon |
| heart | `#cc1111` | the footer heart |
| display face | `Arima Madurai` | `body` |
| secondary face | `Work Sans` | `p`, eyebrows, fields, event times, socials |
| type scale | `h1` 70 (50 < 768) · `h2` 36 · `h3` 30 · `h4` 24 · `p` 17/27 | — |
| hero | `padding: 230px 0 215px; margin: 0 75px` (`15px` < 768) | `#today` |
| cards | `10px` radius, `0 5px 30px` / `0 5px 35px rgba(53,53,53,0.06)` | reply card, venue cards |
| circles | footer socials `40px`, `1px #e1e1e1`, fill gold on hover | footer |
| album band | fluid, 4 cols × 2 rows, frames pulled up `margin-top:-145px` | `#portraits` |
| event rail | `1px rgba(0,0,0,0.1)` at `top:116px`, dots `8px` (`#e1e1e1` / `#353535`) | `#schedule` |

Measured on the built page (Chromium, 1440px): `body` Arima Madurai 17px `#747e8c`; hero
230/215/75; `h1` 70px/500 white; nav 15px/700 uppercase; counters 72px/700 on a 92px line;
frames `-145px` in a 4-column grid; reply card 10px + the 30px shadow at 80/50 padding and `-70px`
margin; fields 48px on `1px #e1e1e1`; button `#d48f4c` square at 14/35; venue cards 10px + the 35px
shadow; socials 40px circles. At 375px: nav `display:none` and the burger takes over, hero margin
`15px`/padding `140px`, `h1` 50px, album margin `0`, frames in 2 columns at `-100px`, counters two to
a row, and `scrollWidth === innerWidth` (no horizontal overflow).

## Interactions the source delegates to plugins (recreated in React)

- **PAGES dropdown** — hover/focus-revealed 150px ink panel, `22px` under the label.
- **Mobile menu** — slicknav's slide-down panel; here a real disclosure (button, `aria-expanded`,
  `aria-controls`) carrying every label the row declares, with the burger crossing into an X.
- **Countdown** — `jquery.countdown`; here `setInterval` against the day on the page's own clock,
  with a single "the day has arrived" line once it passes (the source's counters ran out years ago).
- **Event carousel** — Owl Carousel with round dots; here a translate-based track with prev/next and
  clickable dots, wrapping at both ends, never auto-playing.
- **Search model** — fixed white sheet, `50px` ink circle turned 45° (a `+` reading as a cross),
  underlined field; closes on the switch, on `Escape` and on submit, and keeps nothing typed.
- **Preloader** — dropped: it is a jQuery `fadeOut` on window load, which a Vite SPA has no use for.

## Deltas

1. Placeholder imagery: `https://picsum.photos/seed/cherish-<n>/<w>/<h>` (no source asset is copied).
2. Fonts come from Google Fonts via `<link>` (Arima Madurai + Work Sans).
3. A `rgba(53,53,53,0.35)` scrim over the hero photograph, since a placeholder is not a dark photo.
4. The countdown targets a future date and prints one line once the day arrives.
5. The mobile menu and the dropdown are keyboard-reachable, labelled disclosures.
6. The event rail is reader-driven rather than an auto-playing carousel.
7. The footer's attribution line is the required Component Dock credit instead of the source's.
