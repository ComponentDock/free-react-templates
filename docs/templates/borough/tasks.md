# Borough (ColorLib Directone) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-borough`.

## Design notes (replication findings)

- **Original:** ColorLib "Directone" — a free **Bootstrap 5** one-page
  **Directory & Listing** template (source:
  https://colorlib.com/wp/template/directone/). TEMPLATES.md has **TWO
  copies** (lines **573** and **1525**, both `- [ ]` unchecked — bookkeep
  BOTH `[x]` + surge URL when done). This prep: Directone → **Borough** (a
  town/district within a city — fits the "Explore Your Awesome City"
  directory theme; single lowercase word, no collision with `apps/`,
  `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **Preview (LIVE, fetched via curl):** `https://preview.colorlib.com/theme/directone/`
  — **HTTP 200**, 56,152 bytes, `<title>Directone - Free Bootstrap 5
Template by Colorlib</title>`. NO path quirk (unlike the Bootstrap Footer
  series). Also verified interactively in a browser: computed styles pulled
  for every token below.
- **Source stack (reference only):** Bootstrap 5, tiny-slider (testimonial
  carousel), glightbox (listing images + video lightbox), AOS (fade-up
  reveals), rellax (parallax), custom counter JS (data-count), icon fonts
  Flaticon/FontAwesome/Ionicons. **NO Google Fonts link** — "Nunito Sans"
  declared in CSS but never loaded; the recreation ADDS the Google Fonts
  `<link>` in index.html.
- **Screenshot:** `directone-free-template.jpg` (1200×946) — twilight city
  photo hero, white headline, white search bar with red Search, white
  category cards with one solid-red "active" card, dark footer. Vision
  readouts were partially unreliable (claimed pill bar / circular button /
  icon circles that computed styles disprove) — **live DOM + computed styles
  are authoritative**; the screenshot corroborates palette + layout rhythm.
- **Palette:** brand red **`#ff414d`** (hover `#f03943`), dark navy
  **`#151c26`** (CTA + copyright bar + How It Works band), footer
  **`#10151c`**, light sections `#f8f9fa`, alt cards `#f0f4f7`. Body text
  `#212529`/headings `rgba(0,0,0,0.8)`, muted `rgba(0,0,0,0.4)` placeholders,
  meta/review `#999999`.
- **Category cards — IMPORTANT verified detail:** the 12 main category cards
  have a **plain red 60px glyph with NO circle** behind it (computed: icon
  div transparent, no radius). The **80px red circle** icon style belongs to
  the How It Works step cards (`.v-section .services .icon`) — don't
  cross-contaminate. One card is `.active` (source: **Hotels**) = solid red
  card, white text/glyph; hover = same red state + decorative 200px circle
  fading in bottom-right.
- **Listing cards:** NO border-radius (0px) — sharp corners, shadow
  `0 5px 21px -14px rgba(0,0,0,0.14)`; image 250px + hover magnifier (40px
  white circle, red glyph); body: red 12px uppercase category chip, 50px red
  circle icon (white 30px glyph), 22px 600 title, pin/phone lines, footer
  row (hairline top border) "Review 5.0/5 (100)" 16px `#999999` + heart.
- **Section paddings:** `.ftco-section` = `7em 0`; `.services-wrap` =
  `margin-top: -80px` (category grid overlaps the hero).
- **Special Offers band:** right half is a **red diagonal-stripe band**
  (`linear-gradient(129deg, #ff414d 25%, #f03943 25% 50%, #ff414d 50% 75%,
#f03943 75%)`) with white subheading + h2 + dark `#151c26` button; left
  half = 300px image.
- **How It Works band:** dark `#151c26` + `curls.png` pattern (flat
  `#151c26` is an acceptable equivalent); white h2 + red subheading
  (white-variant keeps subheading `#ff414d`); 600px video poster with 80px
  white pulsing play circle (red glyph); 4 `#f0f4f7` step cards with red
  80px circles, hover = card red / circle white / glyph red.
- **Counters:** `.counter-wrap` `rgba(0,0,0,0.03)` radius 4px padding
  `30px 20px`; number 40px 600 black, animates 0→N (data-count: 50 / 210 /
  450 / 100). `.number.gradient-text` is UNDEFINED dead CSS in the source —
  render solid black numbers.
- **Testimonial:** tiny-slider, 1 per view, dots; card white radius 4px,
  45px red quote circle at top-center (-20px), 80px avatar, name 22px 600
  black, role 13px uppercase red.
- **Navbar:** transparent absolute `top: 51px` over the hero; brand 31px 900
  white + red compass glyph + 11px uppercase small tagline; links 13px 700
  uppercase ls-2px, padding ~19.2px 25px, active link red; red "Add
  Listing" button; "Menu" toggler below lg.
- **Footer:** `#10151c`, 3 red 40px social circles (Twitter/Facebook/
  Instagram — lucide removed brand icons → inline SVG + aria-labels),
  Explore / Quick Links / Categories columns (source duplicates "Pricing
  Packages" — list ONCE), "Have a Questions?" contact column, copyright bar
  `#151c26` centered 13px `rgba(255,255,255,0.5)` with the Component Dock
  credit replacing the ColorLib credit.
- **Icons:** lucide-react for everything (category glyphs, ui icons, heart,
  play, quote, magnifier). Brand icons (Twitter/Facebook/Instagram) as
  inline SVGs.
- **A11y additions (recreation):** main/nav/footer landmarks, aria-labels on
  icon-only controls (field icons, magnifier, hearts, dots, play, socials),
  labeled select, labeled carousel dots, focus-visible rings.
- **Images:** picsum placeholders `https://picsum.photos/seed/borough-<n>/<w>/<h>`
  (hero city photo, 4+8 listing images, intro image, video poster, 4 blog
  images, avatars) — never copy ColorLib assets.

## Structure order (1:1)

1. Navbar (transparent, absolute over hero): brand "Borough" + "Directory
   and Listing" small · Home / About / Listing / Blog / Contact (Home
   active) · red "Add Listing" button · "Menu" toggler (mobile)
2. Hero `.hero-wrap` (100vh, city-photo bg + black overlay .3): h1 "Let's
   Explore Your Awesome City" (64px/40px) · subtext · white search form
   (4 cols): "What are you looking for?" · "Search Location" · "All
   Categories" select (13 options) · red "Search" button
3. Category grid (`.services-wrap`, -80px overlap, `bg-light`): 12 white
   cards — red glyph, name, count chip; Hotels = active (solid red); red
   hover state
4. Popular Listing (`bg-light`): heading (subheading "Our Listing" + h2
   "Popular Listing") · 4 listing cards (Japanese Restaurant / Harbor Lights
   Hotel / MS Center Mall of Asia / Maxout Fitness Gym)
5. Special Offers (`ftco-intro bg-light`): intro image + red stripe band:
   "Special Offers" / "We Have Special Offers Every Now and Then" + dark
   "Show Special Offers" button
6. Our Listing (`bg-light`): heading (subheading "Listing" + h2 "Our
   Listing") · 8 listing cards (chips: Beauty, Bar & Club, Circus, Theater,
   Theater, Sports, Games, Places)
7. About (`ftco-about-section`): subheading "Welcome to Borough" + h2
   "Borough — A Directory & Listing" · 2 paragraphs · 4 counters
   (50 Years of Experienced / 210 Total Listing / 450 Company Staf / 100
   Happy People)
8. Testimonial (`testimony-section bg-light`): subheading "Testimonial" +
   h2 "Happy People" · carousel (5 slides: quote, avatar, Roger Scott,
   Marketing Manager)
9. How It Works (`img v-section`): dark band · subheading "Let's Find Out" +
   h2 "How It Works" (white) · 600px video poster + pulsing play circle ·
   4 step cards (1. Choose A Category / 2. Find What You Want / 3. Select
   The Best Place / 4. Explore The Place)
10. Blog (`bg-light`): subheading "Our Blog" + h2 "Recent Blog" · 4 blog
    cards (270px image + list-team overlay, meta 13px #999, 20px 700 title,
    excerpt)
11. Footer (`ftco-footer` `#10151c`): brand + blurb + 3 social circles ·
    Explore / Quick Links / Categories columns · "Have a Questions?" ·
    copyright bar `#151c26` with Component Dock link

## Implementation tasks

- [ ] Scaffold `apps/borough` (copy simplest existing app; package
      `@free-react-templates/borough`; `public/CNAME` =
      `borough.free.componentdock.com`; homepage =
      `https://borough.free.componentdock.com`); register the workspace in
      `package-lock.json` (`npm install` at root); copy MemoryStorage
      polyfill from `apps/cura/src/test/setup.ts` if jsdom 30 lacks
      localStorage
- [ ] `index.html`: title "Borough — Directory & Listing", Nunito Sans
      Google Fonts `<link>`
- [ ] `src/index.css` tokens: `--brand: #ff414d`, `--brand-dark: #f03943`,
      `--navy: #151c26`, `--footer: #10151c`, `--light: #f8f9fa`,
      `--alt-card: #f0f4f7`; heading pattern (13px uppercase red subheading + 50px/28px 700 h2); section padding `7em 0`
- [ ] Components: `Navbar` (transparent absolute, brand + links + Add
      Listing + mobile toggler), `Hero` (bg + overlay + 4-col search form
      with labeled select), `CategoryGrid` (12 cards, Hotels active, red
      hover), `ListingCard` (shared, props: image/category/title/address/
      phone/rating) + `PopularListing` + `OurListing` (8 cards),
      `SpecialOffers` (stripe band + dark CTA), `AboutCounters` (4 animated
      counters via IntersectionObserver), `TestimonialCarousel` (1-per-view,
      dots, 5 slides), `HowItWorks` (dark band + video + 4 steps),
      `BlogCards` (4), `Footer` (4 columns + socials + copyright bar)
- [ ] Copy: keep the source's kind of content (headlines, category names +
      counts, listing names, steps, footer columns) — paraphrase filler
      paragraphs; footer MUST link `https://www.componentdock.com/`
- [ ] Category glyphs: lucide icons mapped 1:1 to the 12 categories (e.g.
      Utensils, BedDouble, ShoppingBag, Sparkles, Dumbbell, GlassWater,
      Gamepad2, MapPin, FerrisWheel, Clapperboard, Trophy, HeartPulse) —
      plain glyphs, NO circle (verified)
- [ ] Socials: 3 red 40px circles, inline SVG brand glyphs (lucide removed
      brand icons — probe exports with `typeof`), aria-labels
- [ ] Tests: 100% coverage — navbar links + active state, search form
      fields/options + labeled select, 12 category cards (names/counts/
      active Hotels + hover classes), listing card anatomy (4 + 8),
      offers band text + CTA, counters (labels + data targets), carousel
      navigation + slide content, How It Works steps + play button, blog
      cards, footer columns + socials + Component Dock link, responsive
      grid classes
- [ ] `npm run verify:app borough` passes; commit `feat: add borough …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping — BOTH
      Directone rows (lines 573 AND 1525) → `[x]` + surge URL +
      `npm run readme:status`

## Verification checklist (from spec)

- [ ] Navbar: transparent over hero, brand + tagline, 5 links (Home active
      red), red "Add Listing", "Menu" toggler below lg
- [ ] Hero: 100vh city bg + 0.3 black overlay, h1 64px/40px white 700, white
      search bar (radius 5px) with 2 inputs + labeled 13-option select +
      red Search button (radius 4px)
- [ ] Category grid: 12 white cards (-80px overlap, radius 4px, padding
      30px), red 60px glyphs (no circle), count chips, Hotels active solid
      red, red hover
- [ ] Popular Listing: 4 cards, sharp corners, shadow, image + magnifier,
      chip, red circle icon, title/address/phone, Review 5.0/5 (100) + heart
- [ ] Special Offers: intro image + red diagonal-stripe band, white text,
      dark `#151c26` CTA
- [ ] Our Listing: 8 cards, same anatomy, source chip order
- [ ] About: 2 paragraphs + 4 counters (50/210/450/100) animating on scroll
      (solid black 40px 600)
- [ ] Testimonial: "Happy People" carousel, 45px red quote circle, avatar +
      Roger Scott / Marketing Manager, labeled dots
- [ ] How It Works: `#151c26` band, red subheading + white h2, 600px video
      poster + pulsing white play circle, 4 `#f0f4f7` step cards with red
      80px circles, red hover swap
- [ ] Blog: 4 cards, 270px image + list-team overlay, 13px #999 meta,
      20px 700 title, excerpt
- [ ] Footer: `#10151c`, brand + blurb, 3 social circles (aria-labels),
      Explore/Quick Links/Categories (Pricing Packages once), contact
      column, copyright bar with Component Dock link
      `https://www.componentdock.com/`
- [ ] Nunito Sans Google Fonts link; picsum placeholders only; no ColorLib
      anywhere in `apps/borough`
- [ ] `npm run verify:app borough` green; TEMPLATES.md lines 573 + 1525
      bookkept `[x]` + `borough.free.componentdock.com`
