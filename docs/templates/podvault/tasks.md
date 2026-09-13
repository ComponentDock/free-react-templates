# Podvault (ColorLib Megapod) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-podvault`. Recreation name: **Podvault** (NEW name —
> the ColorLib source keeps its name "Megapod").

## Source mapping

- **ColorLib item:** "Megapod" (TEMPLATES.md line 1099; section
  "## Business (365)"). Podcast/media template.
- **Source URL:** https://colorlib.com/wp/template/megapod/
- **Preview URL:** https://preview.colorlib.com/theme/megapod/ (REACHABLE, verified by curl 200 OK, 51,714 bytes)
- **Preview CSS:** `css/style.css` (45,714 bytes, ~1,800 lines — hand-written, NO Bootstrap grid classes in the main styles but uses Bootstrap grid HTML). Also loads `css/bootstrap.min.css`, `css/font-awesome.min.css`, `css/elegant-icons.css`, `css/magnific-popup.css`, `css/owl.carousel.min.css`, `css/slicknav.min.css`.
- **Fonts:** Nunito 300–900 via Google Fonts / CF font-face. Use `<link>` in index.html.
- **Icons:** Font Awesome + ElegantIcons in source → REPLACE with `lucide-react`. Do NOT ship font icon files.

## Reference research (done — do not redo)

### Screenshot (`megapod-free-template-1.jpg`)

Dark-themed podcast template. Hero section with a dark background image showing a featured podcast episode — left side has date badge, headline, two CTA buttons (purple "Subscribe with iTunes" + white "Subscribe with RSS"). Right side shows a circular podcast artwork preview with a play button overlay. Below the hero is a translucent indigo audio player track bar with album art, track title, play/pause, progress bar, volume, share/download.

Below the hero: "Live & Upcoming" section with filter tabs (All, Entrepreneurship, Media, Tech, Tutorials). Each podcast item is a row with thumbnail image on left, metadata (date, author, tags), title, description, and embedded audio player.

A parallax call-to-action section with "Support The Show" heading and "Make a Donation" button on a dark background image.

"Latest Episodes" section shows a 3×2 grid of episode cards with background images, tags, duration, play button overlay, episode title and date — all with 20px rounded corners.

Footer has a purple newsletter subscriber box (floating above the footer), logo, copyright, and social icons on a dark background image.

### Design tokens (live stylesheet, verified by curl)

| Token | Value | Source |
| --- | --- | --- |
| Font | `"Nunito", sans-serif` | CSS `html, body` rule |
| Brand primary | `#6763fd` | `.primary-btn` bg, `.hero__text h5 span`, `.footer__copyright__text a`, `.footer__subscriber` bg |
| Heading color | `#111111` | `h1–h6` base color |
| Body text | `#8d8d8d` | `p` color |
| White | `#ffffff` | Button text, hero text, footer text |
| Button text dark | `#232323` | `.primary-btn.white-btn` text |
| Button radius | `5px` | `.primary-btn` border-radius |
| Card radius | `20px` | `.episodes__item` border-radius |
| Subscriber box | `#6763fd` bg, `10px` radius | `.footer__subscriber` |
| Track bar | `rgba(104, 99, 253, 0.2)` | `.single__track` bg |
| Hero bg | Dark image overlay | `.hero.set-bg` with `data-setbg` |
| CTA bg | Dark image overlay | `.callto.set-bg` with `data-setbg` |
| Footer bg | Dark image overlay | `.footer.set-bg` with `data-setbg` |
| Dark section text | `#ffffff` | Hero, CTA, footer headings/paragraphs |

### Section order (from HTML)

1. **Header** — logo, nav (Home, About, Episodes, Pages dropdown, Contact), search form, social icons, hamburger for mobile
2. **Hero** — dark bg image, featured episode (date + headline + 2 CTA buttons), right side circular podcast preview with play button, translucent track bar with audio player
3. **Podcast (Live & Upcoming)** — section heading, filter tabs, list of podcast items (image + metadata + title + description + audio player)
4. **Call to Action** — dark bg image, centered "Support The Show" heading + subtitle + "Make a Donation" primary button
5. **Episodes (Latest)** — section heading, 3-column grid of 6 episode cards (bg image, tags, time, play button, title, date)
6. **Footer** — newsletter subscriber box (floating, purple bg, email input + subscribe), logo, copyright with Component Dock link, social icons

### Audio player (simplified for React)

Source uses jPlayer jQuery plugin — **do NOT use jPlayer**. Implement a simplified HTML5 audio player or a visual mock with:
- Play/pause button (toggle)
- Progress bar (visual, can be non-functional initially)
- Current time / duration display
- Volume control (icon + slider visual)
- Share + Download links (href="#")

### Picsum placeholder plan

| Slot | Seed | Size | Notes |
| --- | --- | --- | --- |
| Hero bg | `podvault-hero` | 1920×900 | Dark moody image |
| Podcast artwork | `podvault-podcast-{1..3}` | 400×400 | Square thumbnails |
| Episode cards | `podvault-episode-{1..6}` | 600×370 | 370px height to match card |
| CTA bg | `podvault-cta` | 1920×500 | Dark background |
| Footer bg | `podvault-footer` | 1920×600 | Dark background |

### Icon mapping (lucide — replace Font Awesome + ElegantIcons)

| Source glyph | Recreation |
| --- | --- |
| `fa-bars` (hamburger) | `Menu` |
| `fa-search` | `Search` |
| `fa-facebook/twitter/pinterest/instagram/dribbble/youtube-play` | `Facebook`/`Twitter`/`Pinterest`/`Instagram`/`Dribbble`/`Youtube` |
| `fa-heart` / `fa-heart-o` | `Heart` |
| `fa-download` | `Download` |
| `social_share` | `Share2` |
| `icon_calendar` | `Calendar` |
| `icon_profile` | `User` |
| `icon_tags_alt` | `Tag` |
| `icon_clock_alt` | `Clock` |
| `icon_volume-high` | `Volume2` |
| Play button (custom) | `Play` |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/podvault` from the simplest existing app, rename package to `@free-react-templates/podvault`, add Nunito 400/600/700/800 Google Fonts `<link>` in index.html, set `public/CNAME` = `podvault.free.componentdock.com` + `"homepage"`. Register workspace in package-lock.json.

2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library, 100% coverage): Header (logo, nav links, search, social icons, hamburger on mobile), Hero (date, headline, two CTA buttons, circular preview with play overlay), TrackBar (album art, track title, artist, play button, progress bar, volume, share, download), PodcastSection (heading, filter tabs, active state, podcast items with image/metadata/title/description/player), CTASection (heading, subtitle, primary button on dark bg), EpisodesSection (heading, 6 cards in 3-col grid, each with bg image/tags/duration/play/title/date), Footer (subscriber box with heading + email input + subscribe button, logo, copyright, social icons), App (section order, landmarks, document title).

3. [ ] Header component: logo, nav links (Home, About, Episodes, Pages dropdown, Contact), search icon, social icons. Responsive: hamburger on <992px with offcanvas menu. Use lucide-react icons.

4. [ ] Hero component: dark background image (picsum), left column with date badge, headline h2, two CTA buttons (primary indigo + white variant). Right column with circular preview image (border-radius 50%, rgba purple bg) and Play overlay button. Full-width, min-height or aspect ratio to match source.

5. [ ] TrackBar component: translucent indigo bg (`rgba(104,99,253,0.2)`), positioned at bottom of hero or below it. Left: circular album art (60×60, radius 50%) + track title (bold white) + artist name. Right: simplified audio player (play button, progress bar visual, time display, volume icon, share + download links).

6. [ ] PodcastSection component: "Live & Upcoming" heading, filter tabs (All, Entrepreneurship, Media, Tech, Tutorials) with active state toggle, list of podcast items. Each item: thumbnail left, heart icon, metadata (date, author, tags), title h4, description p, embedded simplified audio player. Filter logic: show/hide items by data attribute.

7. [ ] CTASection component: dark background image (picsum), centered content, "Support The Show" h2 (white, 50px, bold), subtitle p (white, 22px), "Make a Donation" primary-btn.

8. [ ] EpisodesSection component: "Latest Episodes" heading, 3-column grid (col-lg-4 col-md-6), 6 episode cards. Each card: background image (picsum, height 370px, radius 20px, overflow hidden), tags badge top-left, duration top-right, centered play button (opacity 0 → 1 on hover), episode text at bottom (title + date). Use CSS grid or Tailwind grid.

9. [ ] Footer component: newsletter subscriber box (purple #6763fd bg, radius 10px, padding 40px, positioned -65px top to float above footer), heading + subtitle left, email input + subscribe button right. Below: logo, copyright with Component Dock link, social icons row.

10. [ ] App.tsx composition: Header → Hero (with TrackBar) → PodcastSection → CTASection → EpisodesSection → Footer. Set document title "Podvault — Podcast Template".

11. [ ] Run `npm run verify:app -- podvault` (typecheck → lint → vitest 100% → build) and fix until green.

12. [ ] Open PR `feat/template-podvault` → merge immediately. PR description: source URL, preview URL, token list (Nunito, #6763fd indigo, dark bg images, 20px card radius, 10px subscriber box radius), differences (renamed Podvault, Nunito via Google Fonts, lucide icons, simplified audio player, picsum placeholders, Component Dock footer).

13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1099 `[x]` + surge URL, `npm run readme:status`, push.
