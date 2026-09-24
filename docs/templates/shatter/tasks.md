# Shatter (ColorLib Smashed) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-shatter`. Recreation name: **Shatter** (NEW name —
> the ColorLib source keeps its name "Smashed").

## Source mapping

- **ColorLib item:** "Smashed" (TEMPLATES.md line 2215; `- [ ]` item).
- **Source URL:** https://colorlib.com/wp/template/smashed/
- **Preview URL:** https://preview.colorlib.com/theme/smashed/ (REACHABLE,
  HTTP 200, page title "Smashed Magazine")
- **Preview CSS:** `css/main.css` — extracted design tokens below.
- **Screenshot:** `smashed-free-template.jpg` (1200×972, browsed visually).

## Reference research (done — do not redo)

### Screenshot visual analysis

Dark-toned magazine layout. Full-viewport banner hero with 3-column grid:
left 3 stacked post cards (image + dark overlay + red category tag + date +
comment count + headline + excerpt), center large carousel post (full-bleed
image + overlay + "Read More" red button + left/right dark arrow buttons),
right sidebar with weather widget (dark card, location, temp "28°C") and
music playlist widget (3 numbered items). Below: dark `#252525` navbar with
red diamond logo + "SMASHED" wordmark + "MAGAZINE" subtitle, white nav links,
search icon. "Editors' Picks" section on light `#f9f9ff` — 4 horizontal cards
(thumbnail left, tag + date + headline right). "International News" — 2-column
split (featured post + sidebar). "Technology News" — 4 post grid with play
button overlays. "Exclusive Videos" — carousel of large overlay cards.
"Popular News Feed" — 4-column grid. Dark footer with 3 columns (logo +
desc, quick links, most viewed news).

### Live preview DOM structure (from curl fetch)

```
<section class="banner-area">
  [3-column grid: left (3 posts), center (carousel), right (weather + playlist)]
</section>
<header> (navbar — sticky, dark background)
  [logo + nav links + search form]
</header>
<section class="editors-area">
  [4 horizontal post cards in container-fluid]
</section>
<section class="int-news-area section-gap-top">
  [8/4 split: left (featured + 2 small posts), right (category sidebar)]
</section>
<section class="tech-news-area section-gap-top-60">
  [4-column post grid, some with video play overlay]
</section>
<section class="excl-vdo-area section-gap-top-60">
  [owl-carousel of large video posts with overlay]
</section>
<section class="popular-news-area">
  [4-column post grid]
</section>
<footer class="footer-area section-gap-top">
  [3-column: logo+desc, quick links, most viewed news]
</footer>
```

### Design tokens (from CSS extraction)

| Token | Value | Usage |
|-------|-------|-------|
| `$primary-color` | `#f6214b` (CSS var) | Category tags, active nav, accent |
| `primary-btn bg` | `#ff1857` (actual rendered) | Fill buttons, tags, hover states |
| `$title-color` | `#222222` | Headlines |
| `$text-color` | `#777777` | Body text |
| Meta text | `#999999` | Dates, meta info |
| Dark bg | `#252525` | Navbar, footer |
| Widget bg | `#2e2e2e` | Weather, music widgets |
| Section bg | `#f9f9ff` | Light sections |
| Font — body | Open Sans 400 | Body paragraphs |
| Font — headings | Roboto 400/600 | Headings, nav, buttons |
| Button radius | 0px | Square category tags |
| Carousel arrows | Dark circles with white chevrons | Hero + video carousel |
| Overlay | Semi-transparent dark gradient | Image cards |

### Technology stack (original)

- Bootstrap 4 grid (`container-fluid`, `col-lg-*`, `col-md-*`, `col-sm-*`)
- Owl Carousel (`owl-carousel`, `active-banner` class)
- jQuery + plugins
- Font Awesome (icons)
- Linearicons (`lnr-bubble`, `lnr-magnifier`, `lnr-cross`, `lnr-arrow-down`)
- Magnific Popup (lightbox)
- Nice Select (custom select)
- Animate.css
- jQuery UI

**Recreation approach:** Use Tailwind CSS 4 utility classes for all layout and
styling. Use lucide-react icons (replace Linearicons and Font Awesome). Use
CSS transitions for carousel-like interactions. Use picsum.photos for all
placeholder images.

## Implementation tasks (ordered)

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/acumen` or similar)
- [ ] Rename package to `@free-react-templates/shatter`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Set up `public/CNAME` → `shatter.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Add Google Fonts link in `index.html` (Open Sans 400, Roboto 400/600)

### Phase 2: Design tokens
- [ ] Define `@theme` tokens in `index.css`: brand-red `#ff1857`,
  title-color `#222222`, text-color `#777777`, meta-color `#999999`,
  dark-bg `#252525`, widget-bg `#2e2e2e`, section-bg `#f9f9ff`

### Phase 3: Components (section order)
- [ ] `Navbar.tsx` — dark bar, logo (red diamond icon + "SHATTER" + "MAGAZINE"),
  nav links (Home, Archive, Category, Pages dropdown, Contact), search icon.
  Active link in red. Mobile hamburger.
- [ ] `BannerArea.tsx` — 3-column grid:
  - `LeftColumn.tsx` — 3 small post cards stacked (image + overlay + tag +
    date + comment count + headline + excerpt)
  - `CenterCarousel.tsx` — large featured post with image + overlay + tag +
    date + comment count + headline + excerpt + "Read More" button + nav arrows
  - `RightSidebar.tsx` — WeatherWidget (location, date, temp, description) +
    MusicPlaylistWidget (3 numbered items)
- [ ] `EditorsPicks.tsx` — heading + 4 horizontal post cards (thumbnail +
  tag + date + headline)
- [ ] `InternationalNews.tsx` — heading + 8/4 split: featured post (large
  image + tag + date + comment count + headline + excerpt) + 2 small posts
  left, category sidebar right
- [ ] `TechNews.tsx` — heading + 4-column post grid (some with play button
  overlay)
- [ ] `ExclusiveVideos.tsx` — heading + carousel of large overlay post cards
  (tag + date + comment count + headline)
- [ ] `PopularNews.tsx` — heading + 4-column post grid
- [ ] `Footer.tsx` — dark background, 3 columns: logo + description, quick
  links (2 sub-columns), most viewed news (thumbnails + headlines). Link to
  ComponentDock.
- [ ] `PostCard.tsx` — shared component for post cards (image, overlay, tag,
  date, headline, excerpt, comment count)
- [ ] `App.tsx` — compose all sections in order

### Phase 4: Testing (TDD)
- [ ] Write tests for each component (render, accessibility, responsive)
- [ ] 100% coverage gate

### Phase 5: Verification
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npm run build` succeeds
- [ ] `scripts/verify-app.sh shatter` passes
