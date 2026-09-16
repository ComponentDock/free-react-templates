# Gracious (ColorLib "Welfare") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-gracious` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Welfare" — free charity/non-profit website
  template (source: https://colorlib.com/wp/template/welfare/). Listed
  in TEMPLATES.md under **Charity (37)** at line 1285.
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/welfare/` — DOM fetched
  (`/tmp/welfare-preview.html`, 42,849 bytes) + stylesheet `style.css`
  (`/tmp/welfare-style.css`, 63,066 bytes). TEMPLATES.md screenshot
  (`welfare-free-template.jpg`) was not separately viewable (browser
  unavailable) but live DOM + CSS provide complete replication data.
- **Aesthetic:** Warm charity design, white/light-grey backgrounds, warm
  orange gradient counter strip (`#f86f2d` → `#fa8f3d` → `#faaa3a`),
  teal/blue `#78d5ef` accent buttons, green `#7cbd1e` progress bars.
  Three fonts: Dosis (headings), Overpass (body), Work Sans (secondary).
  Square-cornered buttons (`border-radius: 0`). Parallax hero with dark
  overlay. Photo gallery with magnific-popup lightbox. Overall clean and
  modern.
- **Key deviating note:** The 3-column orange counter strip overlapping
  the hero (`margin-top: -80px`) is the signature visual element —
  this MUST be replicated faithfully with the correct gradient order
  (darkest left `#f86f2d`, lightest right `#faaa3a`).
- **Font note:** THREE Google Fonts needed: Dosis (200–700), Overpass
  (300–700), Work Sans (400, 600). Most other templates use 1–2 fonts.
- **Gallery:** 6 items with background-image (no `<img>` tags), magnific-
  popup lightbox. Recreate with CSS background-image + a simple modal
  or an image viewer component. Icons: `icon-play` (recreate with lucide
  `PlayCircle` or similar).
- **Social icons:** Source uses Ionicons (`ion-social-`) and Open Iconic
  (`oi`) — recreate with lucide or inline SVGs.
- **Counter:** Only one animated counter value: `1,432,805` (data-number
  attr, animated on scroll via AOS/waypoints).

## Structure (top → bottom, single page)

1. **Navbar** — `.navbar-dark` bg-dark, "Gracious" wordmark left,
   hamburger toggler (mobile), `.collapse` nav right: Home (active) /
   About / Causes / Donate / Blog / Gallery / Events / Contact. Desktop:
   `ml-auto` right-aligned links. 8 nav items (more than typical).
2. **Hero** — `.hero-wrap` full-height (`calc(100vh - 117px)`, min
   700px) background photo (picsum `gracious-hero`) + `.overlay` dark
   layer + parallax (`data-stellar-background-ratio="0.5"`). Centered
   white text: h1 "Doing Nothing is Not An Option of Our Life" (AOS
   animate `data-scrollax`) + subtitle + "Watch Video"
   `.btn.btn-outline-white` button (opens Vimeo popup — recreate as
   external link to `https://vimeo.com/45830194` or a modal).
3. **Counter/Intro Strip** (`.ftco-counter ftco-intro`, `margin-top: -80px`
   overlapping hero) — `.row.no-gutters`, 3 columns:
   - Col 1 (col-md-5, `.block-18.color-1` bg `#f86f2d`): "Served Over"
     + animated counter `1,432,805` (data-number) + "Children in 190
     countries in the world" — all white text.
   - Col 2 (col-md, `.block-18.color-2` bg `#fa8f3d`): h3 "Donate
     Money" + description paragraph + "Donate Now" `.btn-white` (white
     bg, black text, square corners).
   - Col 3 (col-md, `.block-18.color-3` bg `#faaa3a`): h3 "Be a
     Volunteer" + description paragraph + "Be A Volunteer" `.btn-white`.
4. **Services** (`.ftco-section`, white bg, padding 7em 0) — 3 `.media`
   cards (col-md-4): "Make Donation" (lucide `HandCoins`, teal
   `#4ac7ea`), "Become A Volunteer" (lucide `HeartHandshake`), "Sponsorship"
   (lucide `Handshake`). Each: icon + `.media-body` with h3 heading +
   paragraph. AOS animate.
5. **Causes** (`.ftco-section bg-light` `#f2f2f2`) — h2 "Our Causes"
   + 6 cause cards (3+3 grid): each with background photo (picsum
   `gracious-cause-1..6`), title "Clean water for the urban area" ×6,
   description, `.progress` bar with green `#7cbd1e` fill (percentage
   TBD — source shows 6 identical cards), "Donate Now" link.
   Owl Carousel → React carousel or simple grid.
6. **Latest Donations** (`.ftco-section`, white bg) — h2 "Latest
   Donations" + 3 donation cards (Owl Carousel → React carousel): avatar
   photo (picsum `gracious-donor-1..3`), name "Ivan Jacobson" ×3,
   description paragraph, donation amount text ("Donated $300 for
   Children Needs Food", "$150 for Children Needs Food", "$250 for
   Children Needs Food"). Each card has a left avatar circle + right
   content block.
7. **Gallery** (`.ftco-gallery`) — 6 items in a responsive grid (3+3):
   each has a background photo (picsum `gracious-gallery-1..6`) +
   center icon overlay (hover reveals play/expand icon) + magnific-popup
   lightbox on click. Recreate as CSS background-image + simple modal
   or `<a>` with `target="_blank"`.
8. **Blog** (`.ftco-section`, white bg) — h2 "Recent from blog" + 3
   blog cards (col-md-4): thumbnail photo (picsum `gracious-blog-1..3`),
   date/category meta, h3 title "Hurricane Irma has devastated Florida"
   ×3, excerpt paragraph, "Read more" link.
9. **Events** (`.ftco-section bg-light` `#f2f2f2`) — h2 "Our Latest
   Events" + 3 event cards (Owl Carousel → React carousel): background
   photo (picsum `gracious-event-1..3`), time + venue text ("10:30AM-
   03:30PM Venue Main Campus"), title "World Wide Donation" ×3,
   description, "Join Event" link.
10. **Footer/CTA** (`.ftco-section-3`, background photo with dark overlay)
    — Split layout: left side h2 "Be a volunteer" + "About Us" heading +
    description paragraph; right side "Recent Blog" with 2 blog post
    links + "Site Links" list (Home / About / Causes / Blog / Contact) +
    "Have a Questions?" with phone + email. Copyright bar at bottom:
    "Component Dock" link to https://www.componentdock.com/ (replaces
    ColorLib credit).

## Implementation tasks (implementer)

- [ ] Scaffold `apps/gracious` from the simplest existing app; package
      `@free-react-templates/gracious`; `npm install` at root so the
      lockfile registers the workspace; CNAME
      `gracious.free.componentdock.com`; homepage
      `https://gracious.free.componentdock.com`
- [ ] `@theme` tokens (orange gradient `#f86f2d`/`#fa8f3d`/`#faaa3a`,
      teal `#78d5ef`, green `#7cbd1e`, dark `#1d2124`) + THREE Google
      Fonts links (Dosis 200–700, Overpass 300–700, Work Sans 400/600)
- [ ] Components: `Navbar` (with mobile collapse drawer), `Hero` (parallax
      background + dark overlay + AOS + video button), `CounterStrip`
      (3-column orange gradient with animated counter), `Services` (3
      icon cards), `Causes` (6 cards with progress bars), `LatestDonations`
      (3-card carousel), `Gallery` (6-item grid with lightbox/modal),
      `Blog` (3 cards), `Events` (3-card carousel), `Footer` (photo
      background + 4-column layout + copyright)
- [ ] Counter animation: `1,432,805` number with scroll-triggered count-up
      (use IntersectionObserver or a simple counter hook)
- [ ] Screen picsum seeds for subject-critical photos (hero background,
      cause thumbnails, donation avatars, gallery images, blog thumbnails,
      event photos) — pixel-metric screening + browser verify, pin
      verified seeds in spec + PR
- [ ] TDD: Vitest + RTL, 100% coverage;
      `bash scripts/verify-app.sh gracious`
- [ ] PR: source = ColorLib Welfare, preview
      `https://preview.colorlib.com/theme/welfare/`, tokens, diffs
      (name, placeholder images, carousel impl, three fonts, gallery
      lightbox behavior)
