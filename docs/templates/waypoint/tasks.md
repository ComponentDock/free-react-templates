# Waypoint (ColorLib Directone) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-waypoint`. Source: ColorLib "Directone" — city directory
> & listing template (https://colorlib.com/wp/template/directone/).
> Preview: https://preview.colorlib.com/theme/directone/ (HTTP 200;
> ~56 KB HTML, `css/style.css` ~74 KB parsed).

## Design notes (replication findings)

- **Original:** ColorLib "Directone" — directory & listing website
  (Bootstrap 5 + tiny-slider + glightbox + rellax + aos; font-awesome 4.7 +
  ionicons + flaticon icons; font "Nunito Sans" declared in `css/style.css`
  but NO Google Fonts link in the preview head — load Nunito Sans via
  Google Fonts `<link>` in the recreation). Screenshot
  `directone-free-template.jpg` (1200×946 AVIF) viewed in browser.
- **Screenshot vs live DOM:** the screenshot shows an OLDER variant
  (utility bar with "Search or enter website name" + HELP DESK / SIGN IN;
  3-field hero search: "What are you looking for?" / "Search Location" /
  "All Categories"). The LIVE preview is authoritative: top bar = phone +
  Facebook/Twitter/Dribbble links; hero search = single "All Categories"
  select + red Search button. Both share the same visual language (dark
  ink navbar + red accent, twilight town hero, 12 category cards with
  counts, red "Add Listing", listing cards with Review 5.0/5).
- **Visual design:** bold red/coral `#ff414d` accent over dark ink
  `#151c26` / `#10151c` and light gray `#f8f9fa` surfaces; white 64px
  hero headline on a fixed city photo with black 0.3 overlay; uppercase
  letter-spaced 12px button labels; 4px radii on buttons/cards; Nunito
  Sans throughout (h1 64px 700, section h2 50px 700, listing h3 22px 600,
  nav 13px 700 uppercase).
- **Signature motifs to preserve:**
  - TOP BAR above the navbar: "Free Call +1 234 456 78910" left,
    Facebook/Twitter/Dribbble right (inline SVG brand icons — lucide has
    none).
  - NAVBAR: absolute + transparent over the hero (`top: 51px`), white
    brand + uppercase white links, solid red "Add Listing" button; flips
    to solid `#151c26` + hamburger on mobile.
  - HERO: 100vh / min-height 750px, `background-attachment: fixed` photo,
    black overlay opacity .3, centered h1 + subtext, white search bar
    (category select + solid red Search).
  - CATEGORIES: `.services-wrap { margin-top: -80px }` — 12 white cards
    OVERLAPPING the hero bottom on `bg-light`; featured card solid red
    with white text; each card = icon + name + "N Listings".
  - LISTING CARDS (Popular + Our Listing): image top, red uppercase
    category tag, h3 22px 600 title, red-icon address/phone lines,
    `info-wrap2` (border-top rgba(0,0,0,0.07)) "Review 5.0/5 (100)".
  - SPECIAL OFFERS strip: left text + `btn-darken` "Show Special Offers";
    right `.aside-stretch` red diagonal-stripe panel (linear-gradient
    129deg `#ff414d`/`#f03943` tiles 25.74×31.78px).
  - ABOUT: split image left / text right with red uppercase subheading
    "Welcome to Directone" + h2 + 2 paragraphs + 4 stat counters.
  - TESTIMONIALS: "Happy People" carousel of quote cards (name + role).
  - HOW IT WORKS: dark photo band (overlay `#151c26`), white heading, red
    "Let's Find Out" label, 80px white circle pulse play button, 4
    numbered step cards.
  - BLOG: "Recent Blog" + 4 cards with author/meta row (name, date,
    comments), photo, title, excerpt.
  - FOOTER: `#10151c` bg, brand + blurb + socials, 3 link columns
    (Explore / Quick Links / Categories) + "Have a Questions?" contact
    column; bottom bar `bg-darken` → Component Dock credit.
- **Structure (1:1, section order, home page):**
  1. Top bar (phone + socials)
  2. Navbar (transparent → solid ink on mobile; Home / About / Listing /
     Blog / Contact + red "Add Listing")
  3. Hero (100vh photo + overlay; h1 "Let's Explore Your Awesome City" +
     subtext + category select + red Search)
  4. Categories (12 cards, -80px overlap, one featured red)
  5. Popular Listing (heading + 4 listing cards)
  6. Special Offers strip (text + dark button + red stripe panel)
  7. Our Listing (heading + 8 listing cards)
  8. About (image + text + 4 stat counters)
  9. Testimonials ("Happy People" carousel)
  10. How It Works (dark band + play button + 4 steps)
  11. Recent Blog (4 blog cards)
  12. Footer (brand + 4 widget columns + copyright bar)

## Implementation tasks

- [ ] Scaffold `apps/waypoint` (copy simplest existing app, rename package
      to `@free-react-templates/waypoint`, `public/CNAME` =
      `waypoint.free.componentdock.com`, homepage
      `https://waypoint.free.componentdock.com`); `npm install` at root
      to register the workspace in package-lock.json.
- [ ] `index.html`: title "Waypoint — Directory & Listing Template",
      Google Fonts `<link>` Nunito Sans (400;600;700;800).
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #ff414d` (red),
      `--color-brand-dark: #f03943` (stripe), `--color-ink: #151c26`,
      `--color-ink-deep: #10151c` (footer), `--color-ink-darker: #0c1016`
      (footer bottom bar), `--color-light: #f8f9fa` (section bg),
      `--color-body: #212529`, `--color-muted: #6c757d`; font Nunito Sans.
- [ ] `src/components/TopBar.tsx`: slim bar — "Free Call +1 234 456 78910"
      left; Facebook/Twitter/Dribbble inline SVG icons right (lucide has
      NO brand icons — probe every import).
- [ ] `src/components/Header.tsx`: transparent-over-hero navbar — brand
      (MapPin lucide icon + "Waypoint" + tagline "Directory and Listing"),
      uppercase links Home / About / Listing / Blog / Contact, solid red
      "Add Listing" button. Mobile: solid ink bg + hamburger menu (solid
      and tappable — past transparent-mobile-menu bug; test!).
- [ ] `src/components/Hero.tsx`: 100vh fixed-bg city photo + black overlay
      (opacity ~0.3), centered white h1 "Let's Explore Your Awesome City"
      (64px 700, 40px mobile), subtext, white search bar: "All Categories"
      `<select>` (12 options) + solid red "Search" button (radius 4px,
      uppercase 12px 600).
- [ ] `src/components/Categories.tsx`: `bg-light` section with
      `-mt-20`-style overlap over the hero; 12 white cards (icon + name +
      "N Listings") — Food & Drink / Hotels / Shopping / Beauty / Fitness /
      Bar & Club / Games / Places / Circus / Theater / Sports / Health with
      DISTINCT counts (source repeats 103/40/100/36/30/12 twice); Hotels
      card featured solid red + white text. Lucide icon probes:
      UtensilsCrossed, BedDouble, ShoppingBag, Scissors, Dumbbell, Martini,
      Gamepad2, Map, Tent, Clapperboard, Trophy, HeartPulse.
- [ ] `src/components/ListingCard.tsx` (shared card): image, red uppercase
      category tag, h3 title, address + phone lines with red icon spans,
      "Review 5.0/5 (100)" row with top border.
- [ ] `src/components/PopularListings.tsx`: heading "Popular Listing" + 4
      cards (Japanese Restaurant / Harbor Lights Hotel / MS Center Mall of
      Asia / Maxout Fitness Gym).
- [ ] `src/components/SpecialOffers.tsx`: left text (red "Special
      Offers" label + h2 "We Have Special Offers Every Now and Then" +
      solid ink "Show Special Offers" button, hover → outline) + right red
      diagonal-stripe panel — Tailwind arbitrary background
      `[background-image:linear-gradient(129deg,#ff414d_25%,#f03943_25%,#f03943_50%,#ff414d_50%,#ff414d_75%,#f03943_75%,#f03943_100%)]` + `[background-size:25.74px_31.78px]`.
- [ ] `src/components/OurListings.tsx`: heading "Our Listing" + EIGHT
      distinct cards (the 4 popular ones + 4 new: e.g. La Terrazza
      Ristorante / Skyline Boutique Hotel / Galleria Grand Mall / Iron
      Temple Gym).
- [ ] `src/components/About.tsx`: split — left city/storefront photo;
      right red uppercase "Welcome to Waypoint" + h2 "Waypoint A Directory
      & Listing" + 2 paragraphs + 4 stat counters (realistic numbers,
      e.g. 10+ Years of Experience / 2K+ Total Listings / 25 Company
      Staff / 1.5K+ Happy People; fix source "Company Staf" typo).
- [ ] `src/components/Testimonials.tsx`: "Testimonial" label + "Happy
      People" heading + carousel of 3+ DISTINCT quotes (name + role) —
      e.g. Roger Scott (Marketing Manager) / Aisha Patel (Food Blogger) /
      Marco Ruiz (Tour Guide); carousel controls via state (no tiny-slider
      dependency).
- [ ] `src/components/HowItWorks.tsx`: dark photo band (overlay ink) +
      red "Let's Find Out" + white "How It Works" + 80px white circle Play
      button (red icon, pulse) + 4 numbered steps with paragraphs.
- [ ] `src/components/RecentBlog.tsx`: red "Our Blog" + "Recent Blog" + 4
      DISTINCT posts (author, date, comment count, photo, title, excerpt)
      — e.g. "Top 10 Cafés to Try This Season" / "A Weekend Guide to
      Downtown" / "Hidden Gems: Local Boutiques" / "Best Family-Friendly
      Spots in the City".
- [ ] `src/components/Footer.tsx`: `#10151c` bg — brand + blurb + 3 social
      icons, columns Explore (About Us / Account / Listing / Pricing
      Packages), Quick Links (Contact Us / Terms & Conditions / Privacy /
      Feedbacks), Categories (Food & Drinks / Hotels / Shopping / Beauty /
      Fitness / Bar & Club), "Have a Questions?" (address + phone + email;
      build `tel:` href at runtime from a spaced display string, never a
      literal); bottom bar `#0c1016` with Component Dock link
      (https://www.componentdock.com/).
- [ ] `src/App.tsx` composition + `src/main.tsx` entry; MemoryStorage
      polyfill in `src/test/setup.ts` (copy from apps/cura — jsdom 30
      has no localStorage).
- [ ] Tests first (TDD) mirroring spec scenarios; 100% coverage; run
      `bash scripts/verify-app.sh waypoint`.
- [ ] PR description: source (ColorLib Directone), preview URL, tokens
      (red `#ff414d`, ink `#151c26`/`#10151c`, light `#f8f9fa`, Nunito
      Sans, 4px buttons, diagonal-stripe panel), what differs (wordmark,
      picsum placeholders, distinct listings/testimonials/blog posts,
      Component Dock credit, no asset copying).
- [ ] Post-merge bookkeeping: mark the TEMPLATES.md "Directone" row (line
      ~573) `[x]` with the live URL, `npm run readme:status`.

## Pitfalls / notes

- The source repeats content everywhere — recreate with DISTINCT values:
  12 category counts (source repeats 103/40/100/36/30/12 twice), 8
  our-listing entries (source repeats the same 4 twice), 3 testimonial
  people (source repeats Roger Scott), 4 blog posts (source repeats the
  same post 4×), realistic stat counters (source shows 0 / 0K+ / 0 / 0),
  footer "Company Staf" typo fixed.
- The screenshot is an OLDER variant (utility bar + 3-field hero search)
  — the LIVE preview is authoritative (phone + socials top bar, single
  select + Search). Don't build the screenshot's "Search or enter website
  name" bar.
- The hero search "Search" button and navbar "Add Listing" button are
  `a.btn.btn-primary` links (no backend) — keep them as links.
- The `.ftco-intro .aside-stretch` red panel is a diagonal-stripe
  gradient, NOT a solid block — the tiles are 25.74×31.78px. Tailwind:
  arbitrary property class with underscores, or a small inline style.
- Hero play button: 80px white circle with red icon + pulse animation —
  decorative or a modal placeholder; no video backend needed.
- lucide-react has no brand icons (Facebook/Twitter/Dribbble) — inline
  SVGs; probe EVERY lucide export with the typeof check before importing
  (renamed exports throw "Element type is invalid" at runtime).
- No `[~]`/`[x]` markers were set by the prep stream — implementer
  claims via the usual `[~]` push on `feat/template-waypoint`.
- No `colorlib` string anywhere in `apps/waypoint/*` — provenance lives
  only here, TEMPLATES.md, and the PR.
- Never write a literal `tel:+<digits>` URI in source (secret-scan
  masker rewrites it); compute from a spaced display string at runtime
  or render as plain text.
- Picsum seeds for city/town/storefront photos need subject screening —
  pick seeds that provably render appropriate scenes (dusk cityscape for
  the hero, storefronts/hotels for listings, portraits for testimonials/
  blog authors) and pin them in spec + tests + docs together.
- Mobile header: past templates shipped transparent mobile menus — make
  sure the mobile drawer/menu is solid and tappable (user tests on
  phone).
