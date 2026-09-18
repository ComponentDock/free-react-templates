# Commune (ColorLib Sharespace) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-commune`. Recreation name: **Commune** (NEW name —
> the ColorLib source keeps its name "Sharespace").

## Source mapping

- **ColorLib item:** "Sharespace" (TEMPLATES.md line 1163).
- **Source URL:** https://colorlib.com/wp/template/sharespace/
- **Preview URL — REACHABLE (verified 2026-09-14):**
  **`https://preview.colorlib.com/theme/sharespace/`**
  (HTTP 200, 30,504 bytes HTML).
- **Preview CSS:** `assets/css/style.css` (64,274 bytes — ALL styles,
  Bootstrap 4 + custom). Additional CSS: `bootstrap.min.css`,
  `owl.carousel.min.css`, `slicknav.css`, `progressbar_barfiller.css`,
  `gijgo.css`, `animate.min.css`, `animated-headline.css`,
  `magnific-popup.css`, `fontawesome-all.min.css`, `themify-icons.css`,
  `slick.css`, `nice-select.css`.
- **Scripts:** jQuery, Owl Carousel, SlickNav, Gijgo, Magnific Popup,
  slick, nice-select. **Replace ALL with React equivalents.**
- **Fonts:** Google Fonts — Great Vibes (cursive), Josefin Sans
  (300/400/600/700), Montserrat (200–800). Loaded via CSS `@import`.

## Reference research (done — do not redo)

### Screenshot analysis

The ColorLib Sharespace preview image shows a premium co-working space
landing page with:
- **Navbar:** White background, gold logo text, clean nav links
- **Hero:** Split layout — left side has "Amazing workspace you will
  love" headline on warm off-white (#FFF8F5) background with a gold
  accent line, right side has a large workspace photo with a floating
  rating badge (4.8 stars)
- **About:** Two-column layout with workspace image on left (with a
  rotating decorative shape), text on right
- **Spaces Gallery:** Full-width image carousel of workspace locations
  with overlay text and pricing
- **Testimonials:** Clean section with testimonial quotes on warm
  off-white background
- **Features:** Grid of 4 feature cards with icons
- **Video:** Full-width section with play button overlay
- **Blog:** 3-column grid of blog cards with image, date, title
- **Footer:** Dark/black background with social links

### Design tokens (live stylesheet + rendered page, verified 2026-09-14)

| Token           | Value                                         | CSS Source / Notes                                                    |
| --------------- | --------------------------------------------- | -------------------------------------------------------------------- |
| Page bg         | `#FFF8F5`                                     | `.theme-bg1{background:#FFF8F5}`, `.slider-area{background:#FFF8F5}` |
| Brand gold      | `#c6a16e`                                     | buttons, nav hover, preloader, footer links, date badges             |
| Heading color   | `#0b1c39`                                     | `h1-h6{color:#0b1c39}`                                              |
| Body text       | `#506172`                                     | `p{color:#506172}`                                                   |
| Footer bg       | `#000000`                                     | `.footer-wrapper{background:#000000}`                                |
| Card shadow     | `0px 12px 20px rgba(0,0,0,0.06)`              | `.single-offers`                                                     |
| Button radius   | `5px`                                         | `.btn{border-radius:5px}`                                            |
| Button hover    | `#e6373d`                                     | `.btn::before{background:#e6373d}` with scaleX animation            |
| Heading font    | `Josefin Sans`                                | `h1-h6{font-family:"Josefin Sans",sans-serif}`                      |
| Body font       | `Great Vibes` cursive                         | `p{font-family:"Great Vibes",cursive}` (decorative serif)            |
| Font import     | `@import url(Google Fonts)`                   | Great Vibes, Josefin Sans 300-700, Montserrat 200-800               |
| Preloader       | `#f7f7f7` bg, `#c6a16e` spinner              | `.preloader{background-color:#f7f7f7}` + gold border-top spinner    |
| Blog date badge | `#c6a16e` bg, `#fff` text, radius `5px`      | `.blog_item_date{background-color:#c6a16e;border-radius:5px}`       |
| Carousel nav    | Owl Carousel arrows, white bg                 | owl-carousel .owl-nav div with 40×40px white circles                 |

### Icon mapping (lucide)

| Source concept              | Recreation                            |
| --------------------------- | ------------------------------------- |
| Navigation arrow (carousel) | lucide `ChevronLeft` / `ChevronRight` |
| Play button (video)         | lucide `Play`                         |
| Social icons (footer)       | lucide `Facebook`, `Twitter`, `Instagram`, `Linkedin` |
| Hamburger menu              | lucide `Menu` / `X`                   |
| Star rating                 | lucide `Star`                         |

### Picsum placeholder plan

| Section         | Seed pattern                             | Dimensions       |
| --------------- | ---------------------------------------- | ---------------- |
| Hero image      | `picsum.photos/seed/commune-hero/800/600` | 800×600          |
| About image     | `picsum.photos/seed/commune-about/600/500` | 600×500          |
| Spaces (×4)     | `picsum.photos/seed/commune-space-1/1200/600` | 1200×600 each    |
| Video bg        | `picsum.photos/seed/commune-video/1920/600` | 1920×600         |
| Blog cards (×3) | `picsum.photos/seed/commune-blog-N/400/300` | 400×300 each     |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/commune` from the simplest existing app
       (`cp -r apps/<simplest> apps/commune`), rename package to
       `@free-react-templates/commune`, add Google Fonts `<link>` in
       index.html (Great Vibes, Josefin Sans 300/400/600/700, Montserrat
       200-800), set `public/CNAME` = `commune.free.componentdock.com`
       + `"homepage"`. Register the workspace in package-lock.json.

2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (sticky, mobile toggle),
       Hero (headline, rating badge, CTA button), About (rotating shape,
       two-column layout), SpacesCarousel (4 images, overlay text,
       price), Testimonials (carousel navigation), FeaturesGrid (4
       cards), VideoSection (play button overlay), BrandLogos (horizontal
       row), BlogGrid (3 cards with date badge), Newsletter (email input
       + submit), Footer (black bg, social icons, Component Dock link),
       App (landmarks, document title "Commune — Co-Working Space").

3. [ ] Theme tokens in index.css: set `@theme` with brand gold `#c6a16e`,
       warm off-white `#FFF8F5`, heading ink `#0b1c39`, body text
       `#506172`, footer black `#000000`. Import Google Fonts via
       `<link>` in index.html.

4. [ ] Navbar component: sticky white bar, logo (text, not image),
       nav links (Home, Spaces, About, Blog, Contact), mobile hamburger
       with slide-in overlay. Nav hover: gold bg `#c6a16e` + white text.
       Use `useEffect` + scroll listener for sticky class.

5. [ ] Hero section: split layout — left caption on `#FFF8F5` bg with
       gold accent line (`::before` 75px × 3px `#c6a16e`), headline
       "Amazing workspace you will love" (50px, 700 weight, white text
       on hero — note: the hero text is actually white on an image bg
       overlay), subtext, CTA button (gold `#c6a16e` bg, 5px radius,
       uppercase, 14px). Right side: hero image with floating rating
       badge (4.8 stars, 500+ reviews).

6. [ ] About section: two-column — left has workspace image with
       rotating decorative shape (`animate-spin` on a pseudo-element or
       separate div, 30s infinite linear), right has section title
       "Premium quality spaces for agency and personal" + body text.

7. [ ] Spaces carousel: full-width image carousel (implement with
       React state — no Owl Carousel dependency). Each slide shows a
       workspace image with overlay text (space name + "Starting from
       $500"). Prev/Next arrow buttons. Auto-play optional.

8. [ ] Testimonials section: warm off-white `#FFF8F5` background with
       testimonial quotes. Carousel with prev/next arrows. Each
       testimonial has a quote text, author name, and role.

9. [ ] Features grid: heading "Make the customer the hero of your story",
       4 feature cards in a responsive grid (Money Saver, Locker and
       Key, Active Listening, Space for Events). Each card has a lucide
       icon, title, and description paragraph. Cards use white bg with
       subtle shadow.

10. [ ] Video section: full-width section with background image (picsum),
        centered play button overlay (lucide `Play` in a circle with
        gold border, pulsing animation on hover).

11. [ ] Brand logos: horizontal strip of placeholder partner logos
        (use simple text or svg placeholder shapes on warm off-white bg).

12. [ ] Blog grid: heading "Our Insights" → "Company Insights", 3 cards
        in a responsive grid. Each card: image (picsum), date badge
        (gold `#c6a16e` bg, white text, 5px radius), title, excerpt.
        Box shadow on card body.

13. [ ] Newsletter: centered section with "Subscribe our newsletter to
        get updates" heading, email input, submit button (gold bg).

14. [ ] Footer: black `#000000` background. Top area: nav links
        (Home, Spaces, About, Blog, Contact). Social icons row
        (Facebook, Twitter, Instagram, LinkedIn in gold on hover).
        Bottom area: copyright text with Component Dock credit link
        (https://www.componentdock.com/).

15. [ ] Run `npm run verify:app -- commune` (typecheck → lint → vitest
        100% → build) and fix until green.

16. [ ] Open PR `feat/template-commune` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (#c6a16e gold,
        #FFF8F5 warm off-white, Josefin Sans + Great Vibes, 5px radius
        buttons), and what differs (renamed "Commune", React carousel
        instead of Owl Carousel, lucide icons, picsum placeholders,
        Google Fonts via link, Component Dock footer).

17. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1163 `[x]` +
        surge URL (`https://commune.free.componentdock.com`), `npm run
        readme:status`, push.
