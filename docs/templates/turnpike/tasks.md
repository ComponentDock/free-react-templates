# Turnpike (ColorLib Car Rental) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-turnpike`.

## Design notes (replication findings)

- **Original:** ColorLib "Car Rental" (source:
  https://colorlib.com/wp/template/car-rental/). TEMPLATES.md **TWO rows**:
  line 922 (## Business (365)) AND line 2952 (## Transportation 22)) — a
  duplicate listing; mark BOTH `[x]` with the SAME surge URL when done.
  Do NOT confuse with "Carrent" (already shipped as `drively`) or
  "Carrentals" (a separate `- [ ]` item, slug `carrentals`).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/car-rental/`
  is **404** — the demo's theme folder is `carrental` (no hyphen). Use
  **`https://preview.colorlib.com/theme/carrental/`** (HTTP 200, ~32 KB
  HTML; verified 2026-08-15). The ColorLib page's Live Preview href is the
  portal hash `https://preview.colorlib.com/#car-rental`; `products.js` has
  no entry. Stylesheet: `css/main.css` (~46 KB) relative to the `carrental/`
  path. libs: bootstrap 3, jquery + jquery-ui (date/time pickers),
  owl.carousel (models + testimonials), linearicons (service icons),
  font-awesome 4.7, magnific-popup, nice-select. Google Font **Poppins**
  (template's own rules use `"Poppins", sans-serif`). Cross-checked with the
  TEMPLATES.md screenshot (`carrental-free-template.jpg` 1200×946,
  browser-viewed) — consistent: dark hero w/ white sedan + lens flare, gold
  tagline/CTAs, white booking widget on hero right, slim dark navbar, white
  services section.
- **Visual design (DOM + CSS tokens + screenshot):** corporate landing page.
  Slim dark navbar. Hero: full-width photo, heavy dark overlay
  (rgba(0,0,0,0.8)); LEFT column = gold uppercase h6 tagline "the Royal
  Essence of Journey", white uppercase h1 "Relaxed Journey Ever", lorem
  paragraph, gold uppercase "Rent Car Now" button; RIGHT column = white
  "Book Your Car Today!" widget (h4) with the booking form. Then: white
  services grid (6 icon cards), about band, model cards ($149/day gold
  price), SOLID GOLD #fab700 stats band (5 counters), testimonial carousel,
  photo CTA band (overlay rgba(4,9,30,0.75)), light #f9f9ff blog grid,
  near-black #04091e footer.
- **Structure (1:1, section order):**
  1. **Navbar** — dark; logo left; links Home, About, Cars, Service, Team,
     Blog, Contact + Pages dropdown (Blog Single, Elements).
  2. **Banner/hero** — left: h6 gold tagline + h1 white uppercase + lorem +
     `.primary-btn` "Rent Car Now"; right: `.booking-form`-style white
     widget: h4 "Book Your Car Today!" + form: Select Your Car (BMW /
     Farrari / Toyota), Pickup select (Pickup One..Four), Drop off select
     (Drop off One..Four), two "Date & time" inputs, Your name / Email
     address / Phone number, gold "Confirm Car Booking" submit.
  3. **Feature (services)** — h1 "What Services we offer to our clients",
     subtitle "Who are in extremely love with eco friendly system.", 6
     cards (linearicon + title + blurb): Expert Technicians, Professional
     Service, Great Support, Technical Skills, Highly Recomended, Positive
     Reviews.
  4. **Home-about** — h1 "Globally Connected by Large Network", gold span
     "We are here to listen from you deliver exellence", lorem, primary-btn
     "get details" (+ image with play affordance).
  5. **Model area** — h1 "Choose your Desired Car Model" + subtitle; 3 car
     cards: name "Audi 3000 msi" (h4), price `$149<span>/day</span>` (h2,
     #fab700 36px), specs "Capacity : 04 Person / Doors : 04 / Air
     Condition : Dual Zone / Transmission : Automatic", lorem, gold "Book
     This Car Now".
  6. **Facts** — solid #fab700 bg; 5 counters (h1 white): 2536 Projects
     Completed, 6784 Really Happy Clients, 1059 Total Tasks Completed,
     2239 Cups of Coffee Taken, 435 In House Professionals.
  7. **Reviews** — h1 "Some Features that Made us Unique"; 6 testimonial
     slides (no stars): Cody Hines, Chad Herrera, Andre Gonzalez, Jon
     Banks, Landon Houston, Nelle Wade + quotes.
  8. **Callaction** — `callaction-bg.jpg` + rgba(4,9,30,0.75) overlay,
     centered white: h1 "Experience Great Support", lorem, gold
     `.callaction-btn` "Reach Our Support Team".
  9. **Blog** — #f9f9ff bg; h1 "Latest From Our Blog"; 3 cards: photo,
     black date chip "10 Jan 2018" (white 100-weight text, 115px wide),
     title "Addiction When Gambling Becomes A Problem", excerpt, meta
     "15 Likes" / "02 Comments".
  10. **Footer** — #04091e; h6 white 18px/600 headings: About, Quick links,
      Features, Resources, Follow Us, Newsletter ("Stay update with our
      latest" + email input + arrow button); bottom copyright bar (source
      credits Colorlib → replace with Component Dock link).
- **Design tokens (from `css/main.css`):**
  - Font: **"Poppins", sans-serif** (300–700 via Google Fonts).
  - Brand gold **#fab700**: `.primary-btn` bg, `.callaction-btn` bg,
    `.facts-area` bg (solid), model price, tagline/link accent, hovers.
  - Cyan **#4cd3e3** (palette secondary, barely used on this page).
  - Text: headings **#222222**, body **#777777**.
  - Bgs: white sections, **#f9f9ff** blog, **#04091e** footer; overlays
    rgba(0,0,0,0.8) banner / rgba(4,9,30,0.75) callaction.
  - `.primary-btn`: gold bg, white text, line-height 42px, padding 0
    40–50px, uppercase; hover → transparent bg + gold text/border.
    `.callaction-btn`: gold bg, white 600-weight 14px, padding 10px 40px.
  - `.section-gap`: **120px 0**. Blog date chip: #000 bg, 115px wide.
    Footer h6: #fff 18px 600, mb 25px.
- **Recreation decisions:** picsum placeholders for all photos
  (seed `turnpike-N`, verify subject); linearicons → lucide-react (probe
  every export — lucide renamed glyphs, e.g. BadgeCheck/Headphones);
  social icons as inline SVG paths (lucide removed brand icons); Poppins
  via Google Fonts; carousels can be static grids; booking form validated
  with zod per repo conventions; footer MUST link
  https://www.componentdock.com/ ("Component Dock") replacing the source's
  Colorlib credit.

## Implementation task outline

1. Copy the simplest existing app → `apps/turnpike`; rename package to
   `@free-react-templates/turnpike`; run `npm install` at repo root (lockfile
   registers the workspace); register `injectUiSource()` in `vite.config.ts`;
   `public/CNAME` = `turnpike.free.componentdock.com`, `"homepage"` =
   `https://turnpike.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: brand `#fab700`, headings `#222222`,
   body `#777777`, light bg `#f9f9ff`, footer bg `#04091e`, overlay
   rgba(0,0,0,0.8) / rgba(4,9,30,0.75); Poppins (300–700) via Google Fonts
   in `index.html`.
3. Components (src/components/): `Navbar` (sticky, mobile hamburger),
   `Hero` (split: content left + `BookingWidget` right), `BookingForm`
   (zod-validated, success state), `Services` (6 cards), `About`,
   `Models` (3 cards), `Facts` (5 counters), `Testimonials` (6 slides),
   `CallToAction`, `Blog` (3 cards), `Footer` (columns + newsletter +
   social + Component Dock link).
4. `src/App.tsx` composes sections in the exact source order; document
   title "Turnpike — Car Rental Template".
5. Tests FIRST (red) per spec scenarios: navbar links + mobile menu; hero
   content; booking form fields + validation + success; six services cards
   in order; about; three model cards (name/price/specs/button); five
   counters + labels; six testimonials; CTA band; three blog cards;
   footer columns + newsletter + Component Dock link; page composition +
   title. Then implementation; 100% coverage.
6. Verify: `scripts/verify-app.sh turnpike`; `npm run spec:validate`.
7. PR: `feat/template-turnpike` → squash-merge to main; PR description
   includes source template (Car Rental), preview URL (incl. the
   `/theme/carrental/` no-hyphen caveat), design tokens (#fab700 gold,
   Poppins, overlays), what differs (picsum placeholders, lucide icons,
   static carousels, Component Dock footer), and the dup-row note (mark
   BOTH TEMPLATES.md lines 922 + 2952 `[x]` with the same surge URL).
