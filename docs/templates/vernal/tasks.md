# Vernal (ColorLib Spring) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vernal`. Recreation name: **Vernal** (NEW name —
> the ColorLib source keeps its name "Spring").

## Source mapping

- **ColorLib item:** "Spring" (TEMPLATES.md line 1282, first unchecked item).
- **Source URL:** https://colorlib.com/wp/template/spring/
- **Preview URL — REACHABLE (verified 2026-09-16, HTTP 200):**
  `https://preview.colorlib.com/theme/spring/`
- **Preview CSS:** `css/style.css` (2,990 lines — Bootstrap 4 base + custom
  church template styles). Fonts loaded via Cloudflare Fonts (Poppins
  300–900, Raleway 100–900, Crimson Text 400/400i). Scripts: jQuery,
  Bootstrap 4, Owl Carousel, Magnific Popup, AOS, Stellar.js parallax,
  Waypoints, AnimateNumber, Scrollax, Google Maps API.

## Reference research (done — do not redo)

### Screenshot analysis

Browsed the TEMPLATES.md preview image. A dark-themed church website with:
- Dark navbar with social icons
- Full-viewport parallax hero with dark overlay, white serif headline, two
  CTA buttons, mouse scroll indicator
- Events countdown strip with parallax bg
- Light-background Bible verse section
- 2-column church services grid (6 items with circular icons)
- Featured sermon split layout (image + text + action buttons)
- About section with stat counters (4 blocks: Members/Pastors/Donation/Churches)
- Testimony carousel on parallax background
- Events list + recent sermons sidebar
- 3-column blog grid
- Photo gallery + Google Map
- Newsletter parallax with email form
- Dark 4-column footer

### Design tokens (live stylesheet + rendered page, verified 2026-09-16)

| Token | Value | Notes |
| --- | --- | --- |
| Brand accent | `#c7b198` | Warm tan — btn-primary override, subsermon sidebar, accent links |
| Brand dark | `#b59877` | Darker tan — secondary accent, hover |
| Brand deep | `#3c312e` | Very dark brown — text accents |
| Page bg | `#fff` / `#f8f9fa` | White default, `bg-light` for alternating sections |
| Light alt | `#f2f2f2`, `#ebe3da` | Alternate section backgrounds |
| Dark sections | `#171717`, `#000` | Footer bg, dark overlays |
| Overlay | `rgba(0,0,0,0.5)` | Parallax hero, events strip, testimony, newsletter |
| Text | `#000000` primary, `#495057` secondary | Body and muted |
| Font primary | Raleway 100–900 | Headings, nav — Google Fonts |
| Font secondary | Poppins 300–900 | Body text |
| Font display | Crimson Text 400, 400i | Bible verse, testimonials |
| Button primary | `#c7b198` bg, `#fff` text | Radius 3–5px, `py-3 px-4` hero / `py-2 px-4` elsewhere |
| Button white | `#fff` bg, dark text | Hero secondary button |
| Button black | `#000` bg, `#fff` text | Download button in sermon |
| Counter cards | `#f8f9fa` bg | Light cards with icon + number + label |
| Subsermon | `#c7b198` bg | Right sidebar panel, white text |
| Social icons | White on transparent | Navbar and footer |
| Parallax | bg images + `rgba` overlay | hero, events, testimony, newsletter |
| Heading style | Uppercase, line borders | `heading-section` with decorative spans |

### Icon mapping (flaticon/ionicons → lucide-react)

| Source icon | lucide-react | Section |
| --- | --- | --- |
| `flaticon-praying` | `Heart` or `HandHeart` | Services - Daily Prayers |
| `flaticon-church` | `Church` | Services - Church Community |
| `flaticon-bible` | `BookOpen` | Services - Teaching, counter icons |
| `flaticon-social-care` | `Users` | Services - Helpers |
| `flaticon-rings` | `HeartHandshake` | Services - Wedding |
| `flaticon-promotion` | `Calendar` | Services - Events |
| `icon-twitter` | `Twitter` | Navbar + footer social |
| `icon-facebook` | `Facebook` | Navbar + footer social |
| `icon-instagram` | `Instagram` | Navbar + footer social |
| `icon-play-circle` | `PlayCircle` | Hero "Live Stream" button |
| `icon-play` | `Play` | Sermon watch, mini sermon rows |
| `icon-download` | `Download` | Sermon download |
| `icon-calendar` | `Calendar` | Events metadata |
| `icon-my_location` | `MapPin` | Event location |
| `icon-location_city` | `Building2` | Event venue |
| `icon-quote-left` | `Quote` | Testimony quote |
| `icon-heart` | `Heart` | Footer copyright |
| `ion-ios-arrow-forward` | `ChevronRight` | Footer link arrows |
| `ion-ios-arrow-down` | `ChevronDown` | Hero scroll indicator |

### Section structure (implementation order)

1. **Navbar** — dark sticky, brand "Vernal Church", social icons, 7 nav
   links, mobile hamburger
2. **Hero** — full-viewport parallax (`bg_1.jpg` → picsum), overlay,
   h1 + subheading, 2 CTA buttons, mouse scroll indicator
3. **Events countdown** — parallax strip (`bg_4.jpg` → picsum), overlay,
   calendar icon, sermon title, countdown timer, "Join our event" button
4. **Daily Bible verse** — light bg, bible icon, John 3:16 KJV quote
5. **Church services** — 2-column grid, 6 items with lucide icons
6. **Featured sermon** — split layout (image + text + watch/download buttons)
7. **About/Counters** — 2-column (stacked images left, counters right)
8. **Testimony carousel** — parallax bg (`bg_3.jpg` → picsum), overlay,
   carousel with avatar + quote + name + position
9. **Events + Sermons sidebar** — 8/4 column, event cards + sermon sidebar
10. **Blog** — 3-column cards with date overlays
11. **Gallery + Map** — 2x2 photo grid (hover icons) + Google Map placeholder
12. **Newsletter** — parallax bg, overlay, heading, email form
13. **Footer** — dark, 4-column (brand, About, Connect, Service Hours),
    Component Dock credit

### Picsum placeholder plan

| Section | Seed pattern | Dimensions |
| --- | --- | --- |
| Hero bg | `vernal-hero` | 1920x1080 |
| Events strip bg | `vernal-events` | 1920x600 |
| Testimony bg | `vernal-testimony` | 1920x800 |
| Newsletter bg | `vernal-newsletter` | 1920x600 |
| Sermon image | `vernal-sermon-1` | 800x600 |
| Event images | `vernal-event-1`, `vernal-event-2` | 800x500 |
| About panels | `vernal-about-1`, `vernal-about-2` | 800x400 |
| Blog images | `vernal-blog-1`, `vernal-blog-2`, `vernal-blog-3` | 600x400 |
| Gallery images | `vernal-gallery-1` through `vernal-gallery-4` | 600x600 |
| Testimony avatars | `vernal-person-1` through `vernal-person-4` | 200x200 |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/vernal` from simplest existing app, rename package to
       `@free-react-templates/vernal`, add Google Fonts `<link>` for Raleway,
       Poppins, Crimson Text in index.html, set `public/CNAME` =
       `vernal.free.componentdock.com` + `"homepage"`. Run `npm install` at
       repo root to register workspace in package-lock.json.

2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (brand, social icons, nav links, mobile toggle,
       scroll state), Hero (heading, subheading, buttons, scroll indicator,
       parallax), EventsCountdown (bg, heading, timer, button, countdown
       decrement), DailyVerse (verse text, attribution, bible icon),
       ChurchServices (6 items, correct icons, 2-column layout), FeaturedSermon
       (image, title, metadata, watch/download buttons), AboutCounters (4
       stats, animation trigger, image panels), TestimonyCarousel (items,
       auto-play, navigation), EventsSidebar (2 events + sidebar sermons),
       Blog (3 cards, date overlays), GalleryMap (2x2 grid, map placeholder),
       Newsletter (heading, form, subscribe button), Footer (4 columns,
       Component Dock credit), App (landmarks, document title).

3. [ ] Navbar component: dark bg (`bg-[#171717]`), flex container with brand
       "Vernal Church" (Raleway bold, white), social icon row (3 icons,
       white), 7 nav links (Raleway, uppercase or normal), hamburger toggle
       for mobile (Menu text + icon). Scroll state: detect scroll position,
       switch to solid bg with visible brand.

4. [ ] Hero section: full-viewport height (`h-screen`), picsum bg image with
       `bg-fixed` (parallax), dark overlay (`bg-black/50`), flex centered
       content with h1 "Helping Grow Your Faith" (Crimson Text, white,
       48–64px), subheading (Poppins, white/70, 18px), two buttons
       (btn-primary `#c7b198` "New here!", btn-white "Live Stream" with
       PlayCircle icon), mouse scroll indicator (ChevronDown, animated).

5. [ ] Events countdown strip: parallax bg, dark overlay, flex row with
       left (calendar icon + heading + sermon title) and right (countdown
       timer digits + "Join our event" button). Countdown: use `useState` +
       `useEffect` with `setInterval` decrementing every second.

6. [ ] Daily Bible verse: light bg section, centered content with BookOpen
       icon (24px), quoted verse text (Crimson Text italic, 24px), attribution
       "— John 3:16 KJV" (Poppins bold).

7. [ ] Church services: white bg section, centered heading with decorative
       line borders, 2-col grid (lg) of 6 service items. Each item: flex
       row with circular icon container (60px, bg `#f8f9fa`, rounded-full)
       and text block (h3 title + p description). Left column: icon on
       right (order-lg-last). Right column: icon on left.

8. [ ] Featured sermon: light bg, heading "Sermon for Today", split layout —
       left half image (picsum), right half with sermon title (h2, Crimson
       Text), metadata (speaker, categories, date), and two buttons
       (Play + "Watch Sermons", Download + "Download Sermons"). The
       "Watch Sermons" button triggers a modal (Magnific Popup equivalent
       or simple React modal with iframe/video placeholder).

9. [ ] About/Counters: white bg, 2-column — left has 2 stacked image panels
       with dark overlay and white text labels ("Sunday Services",
       "Announcement"); right has "About Vernal Church" heading, description,
       and 2x2 grid of stat counter cards. Counter cards: light bg
       (`#f8f9fa`), centered icon (BookOpen), animated number (use
       `react-countup` or custom `useEffect` animation), label text.
       Trigger animation on IntersectionObserver.

10. [ ] Testimony carousel: parallax bg, dark overlay, white heading,
        carousel (use a simple React carousel or CSS-based, or Swiper.js if
        adding a dep — prefer no new deps; implement auto-play with
        `setInterval` + manual prev/next). Each item: circular avatar
        (picsum), quote icon, quote text, name, position label.

11. [ ] Events + Sermons sidebar: 2-col layout — left (col-lg-8) with heading
        "Upcoming Events" + 2 event wraps (flex row: image left, text right
        with title, metadata spans, "Read more" btn). Right (col-lg-4)
        `.subsermon` panel (`#c7b198` bg) with "Recent Sermons" heading,
        featured sermon card (image, title, metadata, watch/download links),
        and 2 mini sermon rows (Play icon + title + duration).

12. [ ] Blog section: light bg, heading "Recent Blog", 3-col grid of blog
        cards. Each card: bg image (block-20), date overlay (day, month, year
        stacked vertically), title + excerpt.

13. [ ] Gallery + Map: 2-col — left has 2x2 grid of gallery images with
        hover instagram icon overlay (Magnific Popup equivalent or simple
        lightbox). Right has a Google Map placeholder (static map image or
        embedded iframe).

14. [ ] Newsletter parallax: dark overlay parallax section, centered white
        heading "Newsletter", description, email input + "Subscribe" button
        (form with `onSubmit` handler).

15. [ ] Footer: dark bg (`#171717`), 4-column grid — col 1: brand "Vernal
        Church" + description + social icons; col 2: "About" heading + 7
        links; col 3: "Connect" heading + 7 links; col 4: "Service Hours"
        heading + schedule. Bottom row: Component Dock credit linking to
        https://www.componentdock.com/.

16. [ ] Run `npm run verify:app -- vernal` (typecheck → lint → vitest 100% →
        build) and fix until green.

17. [ ] Open PR `feat/template-vernal` → merge immediately (`gh pr merge
        --squash --delete-branch`). PR description must include: source URL,
        preview URL, token list (#c7b198 tan brand, Raleway/Poppins/Crimson
        Text fonts, dark overlays, parallax sections), and what differs
        (renamed "Vernal", Google Fonts, lucide icons, picsum placeholders,
        React modal instead of Magnific Popup, IntersectionObserver for
        counter animation, Component Dock footer).

18. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1282 `[x]` + surge
        URL (`https://vernal.free.componentdock.com`), `npm run
        readme:status`, push.
