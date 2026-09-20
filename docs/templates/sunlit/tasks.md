# Sunlit (ColorLib Sunfest) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sunlit`. Recreation name: **Sunlit** (NEW name —
> the ColorLib source keeps its name "Sunfest").

## Source mapping

- **ColorLib item:** "Sunfest" (TEMPLATES.md line 1689; section
  "## Music Festival (2)" at line 1688).
- **Source URL:** https://colorlib.com/wp/template/sunfest/
- **Preview URL — REACHABLE (verified 2026-09-21 by curl fetch):**
  **`https://preview.colorlib.com/theme/sunfest/`**
  (HTTP 200, 33,306 bytes, full HTML with embedded CSS references).
- **Preview CSS:** `style.css` (41,675 bytes — main custom styles) +
  `css/bootstrap.min.css` (Bootstrap grid/utilities) +
  `css/fontawesome-all.min.css` (icons — replace with lucide-react) +
  `css/swiper.min.css` (slider — implement with CSS or a lightweight
  carousel). No jQuery required.

## Reference research (done — do not redo)

### Screenshot (`sunfest-free-template.jpg`)

Browsed visually via vision_analyze 2026-09-21.

- **Hero:** Full-viewport dark festival scene (nighttime wooden structure,
  fireworks/lights, crowd). Large decorative teal script "Hello world!"
  centered. Date "06.28.018" in small white text above headline. Four
  countdown boxes (52 Days, 5 Hours, 16 Minutes, 20 Seconds) in large
  bold white numbers with labels below. Two square buttons at bottom:
  "Buy Tickets" (white bg, dark text) and "See Lineup" (teal bg, white
  text). Teal decorative swirls and star shapes on left side of hero.
- **Navbar:** Transparent over hero, white text, "SUNFEST" branding
  (uppercase, bold, sans-serif), right-aligned links: HOME, SUNFEST 2018,
  ARTISTS, BLOG, CONTACT, search icon.
- **Overall aesthetic:** Dark festival vibe, neon teal accents on black,
  bold typography, square-edged buttons, energetic/music event feel.

### CSS tokens extracted from `style.css`

**Colors:**
- `#03070c` — near-black (hero bg, body bg)
- `#040608` — near-black variant
- `#050505` — darkest black
- `#0de7e4` — bright teal / cyan (BRAND ACCENT — borders, button bg,
  decorative elements)
- `#232127` — dark grey
- `#7a7a7a` / `#7f7f7f` / `#989898` — mid greys (body text, meta)
- `#f3f8f9` / `#f4f6f7` — very light grey (section backgrounds)
- `#ff0000` / `#ff2630` — red accents
- `#fff` — white (button bg, text on dark)

**Fonts:**
- `'Poppins', sans-serif` — primary body font (Google Fonts)
- `"mountains"` / `"Mountains of Christmas"` — decorative display font
  for hero headline (script style)

**Buttons:**
- `.btn` — `background: white`, `padding: 16px 40px`, `border-radius: 0`
  (square corners), `color: hsl(0,0%,17%)`, `font-weight: 600`
- `.btn.current` — `background: #0de7e4` (teal), used for secondary CTA
- Border variations: `border: 2px solid #0de7e4` for outlined variants

**Section backgrounds:**
- Hero: full-width background image (`images/cover.jpg`) with dark overlay
- Content sections: light grey `#f4f6f7` or white
- Footer: background image (`images/footer-cover.jpg`) with dark overlay
- All dark sections use near-black backgrounds

### DOM structure (from curl parse)

1. `<header.site-header>` — transparent navbar
   - `<div.header-bar>` — container with branding + nav
   - `<div.hero-content>` — hero with bg image
     - `<div.entry-header>` — headline + date
     - `<div.countdown>` — 4 countdown boxes (dday, dhour, dmin, dsec)
     - `<div.entry-footer>` — two CTA buttons

2. `<div.content-section>` — lineup headliners
   - `<div.lineup-artists-headline>` — "JUST THE BEST" + heading
   - `<div.lineup-artists>` — 3 artist cards (name + description + link)

3. `<div.the-complete-lineup>` — artist grid
   - 8 artist thumbnails in 4-column grid
   - "See all lineup" button

4. `<div.homepage-next-events>` — events slider
   - Swiper-based horizontal carousel
   - Event cards with name + location

5. `<div.home-page-last-news>` — blog section
   - 2-column layout with date badge, title, author, comments, excerpt

6. `<footer.site-footer>` — dark footer
   - Cover image bg, large site name, email, social links, copyright

## Component architecture notes

```
apps/sunlit/
  src/
    App.tsx                    — compose all sections
    components/
      Navbar.tsx               — transparent navbar, mobile hamburger
      Hero.tsx                 — hero bg image, countdown, CTAs
      CountdownTimer.tsx       — 4-box countdown component
      LineupHeadliners.tsx     — 3 featured artist cards
      CompleteLineup.tsx       — 8-artist thumbnail grid
      NextEvents.tsx           — event cards carousel/slider
      LatestNews.tsx           — 2-column blog cards
      Footer.tsx               — dark footer with bg image
    index.css                  — Tailwind entry + @theme tokens
    main.tsx                   — entry (excluded from coverage)
```

### Key implementation details

- **Countdown timer:** Use `useEffect` + `setInterval` to calculate time
  remaining to a fixed target date. Display days/hours/minutes/seconds
  in large bold numbers with labels.
- **Events slider:** Implement with CSS scroll-snap or a lightweight
  carousel (avoid swiper dependency). Cards in a horizontal scrollable
  container with prev/next buttons.
- **Hero background:** Use `picsum.photos/seed/sunlit-hero/1920/1080`
  for the festival scene placeholder.
- **Artist photos:** Use `picsum.photos/seed/sunlit-artist-N/400/400`
  for the 8 artist thumbnails.
- **Decorative elements:** Teal swirls/stars on the hero can be SVG
  decorative shapes or CSS pseudo-elements.
- **Font loading:** Google Fonts `<link>` for Poppins (400, 500, 600, 700)
  and Mountains of Christmas (700) in `index.html`.
