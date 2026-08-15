# Marina (ColorLib Waterboat) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-marina`.

## Design notes (replication findings)

- **Original:** ColorLib "Waterboat" — yacht charter company landing page
  (source: https://colorlib.com/wp/template/waterboat/). TEMPLATES.md has
  **THREE duplicate rows** — mark ALL `[x]` + same surge URL when done:
  line 529 (## Bootstrap (216)), line 1225 (## Business (365)), line 3017
  (## Travel (44)).
- **Preview URL:** `https://preview.colorlib.com/theme/waterboat/` (HTTP 200,
  27,751 bytes, verified 2026-08-15). Title "WaterBoat — Website Template by
  Colorlib". Template CSS: `css/style.css` (28,284 bytes, fully extracted).
  libs: bootstrap 4, jquery, owl.carousel 2 (hero/team/testimonials),
  bootstrap-datepicker + jquery-ui (booking dates), aos, fancybox, YTPlayer,
  flaticon + icomoon icon fonts. **Google Fonts: Oswald 400/700 (headings/
  buttons/navbar), Dancing Script 400/700 (`.text-serif` accent), Muli
  300/400 (body).**
- **Screenshot cross-check:** `waterboat-free-template.jpg` (1200×946,
  browser-viewed 2026-08-15) matches the live DOM: white top strip (logo +
  3 contact blocks), solid bright-blue navbar (white uppercase links),
  full-width luxury-yacht hero, white headline directly on the photo (no
  heavy dark overlay), blue "READ MORE" button, two white dash slider
  indicators. Screenshot cuts off below the hero — all lower sections
  documented from the live DOM.
- **Visual design:** nautical blue-and-white. Brand blue `#1089ff` on the
  navbar, buttons, feature icons, team roles, price chips, active dash, and
  the `rgba(16,137,255,0.8)` overlays of the two parallax bands. Condensed
  uppercase Oswald headings; light Muli body in gray. White + `bg-light`
  (`#f8f9fa`) alternate. Destination cards: white + soft drop shadow +
  blue price chip.
- **Structure (1:1, section order):**
  1. `header-top bg-light` — logo (sailboat line icon + "Water" "Boat"
     wordmark) + 3 quick-contact blocks: San Francisco / Mountain View,
     Fake st., CA · 000 209 392 312 / Toll free · info@gmail.com / email
  2. `site-navbar` (sticky, brand-blue, Oswald) — Home, About Us, Services,
     Testimonials, Blog, Contact; uppercase white 16px, active link = 2px
     white underline; hamburger on mobile
  3. `hero-slide owl-carousel site-blocks-cover` — 2 slides:
     "Explore, Discover The Ocean" / "Enjoy The Ocean With Your Family",
     each lorem + blue "Read More"; owl dots = 18×4px white dashes (active
     `#1089ff`), bottom 30px centered
  4. `intro-section` — H3 "Welcome To Our Website" + 2 paragraphs + Learn
     More
  5. `intro-section` → 3 × `service-29283` — Luxuries Yacht · 30 Years of
     Experience · Good Captain; 70px blue icon in `#efefef` circle, H3 20px
     black, paragraph
  6. `site-section bg-image overlay` → `counter-39392` (fixed-attachment
     photo + `rgba(16,137,255,0.8)`): 349 Number of Yacht · 7000+
     Customers Satisfied · 120 Number of Staffs · 493 Sea Destinations ·
     230 Professional Sailors — centered, numbers 50px white
  7. `site-section bg-light` — H3 "Our Destinations" + 6 × `service-39381`
     cards (white, `box-shadow 0 0 30px -5px rgba(0,0,0,.2)`): photo,
     "Croatia — Columbia", "Sep. 05 — Oct. 15", "$600" blue chip (radius
     4px, padding 5px 10px)
  8. `site-section` — H3 "Book A Yacht" + form: Full Name · Number of
     People · Date From · Date To · Yacht You're Interested in (select:
     Motor Yacht / Hi-Speed Yacht / Premium Yacht / Presidential Yacht) ·
     Email Address · Phone Number · Notes (textarea) → "Book Now"
     (`btn-primary py-3 px-5`)
  9. `site-section` — H3 "Our Team" + 4 × `person` cards (owl): photo
     (hover scale 1.05), black name ("Craig Daniel"), blue role
     ("Engineer"), social strip absolute bottom-left
  10. `site-section` — "What Customer Saying..." + 3 quotes + "John Doe" /
      "CEO and Co-Founder" (owl)
  11. `site-section` — H2 "Get In Touch With Us" + paragraph + "Contact Us"
  12. `site-section bg-image overlay` — paragraph + "Learn More" (final CTA
      banner)
  13. `footer bg-light` — 4 cols: Our Company (About, News, Services, Our
      Team, Careers, Projects) · Our Services (Industrial, Construction,
      Remodeling) · Contact (Help Center, Support Community, Press, FAQ,
      Our Partners) + copyright bar (ColorLib attribution → Component Dock
      link)
- **Design tokens (from `css/style.css` + screenshot):**
  - Brand: **`#1089ff`** — navbar bg, buttons, feature icons, team roles,
    price chips, active dash, overlay `rgba(16,137,255,0.8)`
  - Headings `#000`; body gray, weight 300, 1.1rem, line-height 1.7
  - Bg: `#fff` / `#f8f9fa` (`bg-light`) / icon circle `#efefef`
  - Buttons `.btn`: uppercase, 14px, `letter-spacing: .2rem`, Oswald,
    solid blue bg + white text
  - Hero dots: 18×4px, 0% radius, white / active blue, bottom 30px centered
  - Cards: shadow `0 0 30px -5px rgba(0,0,0,.2)`; chip radius 4px,
    padding 5px 10px
  - Nav links: uppercase 16px, `letter-spacing: .05rem`, active = 2px white
    underline
  - Parallax: `background-attachment: fixed` → `bg-fixed` in Tailwind
  - Stats: centered, 50px white numbers
- **Recreation decisions (from spec):** picsum seeds `marina-<n>` for hero/
  destinations/team/parallax photos; Google Fonts link (Oswald + Dancing
  Script + Muli); lucide icons + inline SVG brand socials; index-state
  carousels (no owl.js); plain date inputs (no datepicker lib); controlled
  booking form with success state replacing the form; `bg-fixed` for
  parallax; footer attribution replaced with Component Dock link; copy
  paraphrased, same content kinds.

## Tasks (implementation checklist — do in order)

1. [ ] `apps/marina` scaffold: copy the simplest existing app, rename
       package to `@free-react-templates/marina`, update `public/CNAME` →
       `marina.free.componentdock.com`, `homepage` →
       `https://marina.free.componentdock.com`; `npm install` at root so the
       lockfile registers the workspace (grep the lockfile to verify).
2. [ ] Spec-driven tests FIRST (TDD, 100% coverage): top bar (logo + 3
       contact blocks), navbar (6 links, active underline, hamburger),
       hero slider (2 slides, indicators, autoplay), intro, 3 features,
       stats (5 counters + labels), 6 destination cards (title/dates/price
       chip), booking form (8 fields + select options + success state),
       team (4 cards), testimonials, contact CTA, CTA banner, footer (4
       cols + Component Dock link), document title.
3. [ ] `src/index.css`: `@theme` tokens — brand `#1089ff`, heading `#000`,
       body gray, light `#f8f9fa`, icon circle `#efefef`, overlay
       `rgba(16,137,255,0.8)`; Google Fonts `<link>` (Oswald, Dancing
       Script, Muli) in `index.html`.
4. [ ] Components: `TopBar`, `Navbar` (sticky + mobile menu), `HeroSlider`
       (2 slides, dash indicators), `WelcomeIntro`, `FeatureCard` ×3,
       `StatsBand` (bg-fixed + blue overlay), `Destinations` (6 cards),
       `BookingForm` (success state), `Team` (4 person cards + socials),
       `Testimonials` (carousel), `ContactCta`, `CtaBanner` (bg-fixed),
       `Footer` (4 cols + Component Dock link).
5. [ ] `App.tsx`: compose all 13 sections in order inside a `<main>`;
       title "Marina — Yacht Charter Template".
6. [ ] `scripts/verify-app.sh marina` (typecheck + lint + 100% coverage +
       build); PR `feat/template-marina` → merge immediately
       (`gh pr merge --squash --delete-branch`).
7. [ ] Bookkeeping: TEMPLATES.md THREE waterboat rows (lines 529, 1225, 3017) `[~]`→`[x]` + surge URL `https://marina.free.componentdock.com`,
       `npm run readme:status`, push. (Implementer's job — NOT the prep
       stream.)
