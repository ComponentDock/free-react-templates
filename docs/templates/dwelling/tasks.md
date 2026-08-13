# Dwelling (ColorLib Oakberry) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-dwelling`.

## Design notes (replication findings)

- **Original:** ColorLib "Oakberry" — a REAL-ESTATE AGENCY landing page
  (page title "Oakberry - Free Bootstrap 5 Template by Colorlib"; source:
  https://colorlib.com/wp/template/oakberry/, appears 2× in TEMPLATES.md —
  line 609 and line 2602; mark ALL `[x]` when done). The app name MUST
  differ from the source — hence **Dwelling** (single lowercase word,
  real-estate noun; no collision with `apps/`, `openspec/specs/`, or
  `docs/templates/` — verified).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/oakberry/
  (HTTP 200, ~54 KB HTML; `css/style.css` ~82 KB parsed for tokens).
  Stack: Bootstrap 5 + tiny-slider (hero slider) + AOS (fade-up) +
  glightbox (video lightbox) + ionicons + font-awesome 4.7 + flaticon —
  recreate ALL interactivity client-side in React.
- **Screenshot:** `oakberry-free-template.jpg` (1200×946, viewed in
  browser): hero = centered white headline "Modern House Make Better Life"
  over an interior photo (dark sofa, yellow chairs, TV wall) + dark
  overlay; white "Oakberry" logo + white UPPERCASE nav links +
  lime-green "SUBMIT A PROPERTY" button; search widget overlapping the
  hero bottom (Buy Properties / Rent Properties tabs, 4 fields, green
  SEARCH); categories = 4 square light-grey cards with black line icons.
  Vision's green estimate ~#a4c639 is approximate — CSS is authoritative:
  `#5ea51d`. Vision's "top dark info bar" does NOT exist in the DOM (noise).
- **Visual design (DOM + CSS tokens + screenshot):** SIGNATURE GREEN
  `#5ea51d` — `.btn.btn-primary` fill (1px green border, white text, arrow
  span; hover = transparent + green outline text), "Sale" badges, location
  icons, active hero `tns-nav` dot (30px pill), hover accents. CORAL
  `#fd5c64` — "Rent" badges. DARK NAVY `#06112a` footer, text
  `rgba(255,255,255,0.7)`. BLACK `#000` — `.btn.btn-black`, property card
  titles (h3 600). LIGHT `#f8f9fa` section backgrounds (categories,
  testimonials, blog). Font: Nunito Sans everywhere (headings + body — NO
  serif; screenshot's serif impression was vision noise). Hero 100vh /
  min-height 700px. Search widget `margin-top: -120px` overlapping hero.
  Property cards: 34px circular agent avatar, hover shadow
  `0 5px 39px -14px rgba(0,0,0,0.26)`. Sections `padding: 7em 0`.

## Section-by-section fidelity notes (build order)

1. **Navbar** — absolute/transparent over hero; "Dwelling" white wordmark
   left; links right: Home, About, Properties, Agents, Blog, Contact —
   13px/700 `rgba(255,255,255,0.7)` → white hover; "Submit A Property"
   green button far right. Mobile: burger toggler → slide panel
   (`aria-expanded`). (Source navbar is `ftco-navbar-light` — light text
   over the dark hero.)
2. **Hero slider** — `h-screen min-h-[700px]`; 3 slides (tiny-slider →
   React state index cycling): H2s "Your Property Is Our Priority",
   "Let Your Home Be Unique & Stylist", "Modern House Make Better Life" +
   "Learn More" buttons; dark overlay over bg photo; pill dots bottom
   (active = green, 30px). Autoplay optional.
3. **Search widget** — overlaps hero bottom: `-mt-30` (source
   `margin-top: -120px`); tabs "Buy Properties" / "Rent Properties"
   (nav-pills: padding 10px 30px, radius 0, white 16px, active = green
   fill); 4 fields: Enter Keyword, Property Type (Residential /
   Commercial / Land / Industrial), Location, Price Limit; green SEARCH
   button. Tab toggle = React state.
4. **Categories & places** — eyebrow "Categories" + h2 "Explore Our
   Categories & Places"; 4 "services" icon cards (Land, Residential,
   Commercial, Industrial — light-grey square cards, black line icons →
   lucide Home/Building2/Factory/Apartment); places list (12 cities ×
   count): New York 200, London 100, Chicago 120, Illinois 300, California
   100, Tennessee 200, Texas 200, North Carolina 200, Florida 422,
   Charlotte 200, Orlando 200, Atlanta 200. Green hover on list items.
5. **Featured properties** — eyebrow "Our Properties" + h2 "Featured
   Properties"; card grid (preview DOM shows 4 cards; source grid 3-col —
   render 6 in a 3×2 grid for balance). Card: photo, price ("$800,000";
   rent variant "$3,050 / mo"), Sale (green) / Rent (coral) badge, h3
   title "Sunny Loft Property", location "New York" + green MapPin, spec
   list (3 Beds / 2 Baths / 1,878 sqft — vary per card), agent row: 34px
   circular avatar + "John Dorf" + "2 weeks ago". Hover: soft shadow.
6. **Video section** — full-width bg photo (`bg_4.jpg` kind) + dark
   overlay; h2 "Modern House Video" + paragraph ("Far far away, behind the
   word mountains…"); circular play button (ion-ios-play → lucide Play);
   click → glightbox-style video lightbox modal with close.
7. **About + counters** — h2 "Dwelling A Real Estate Company" (source says
   "Oakberry A Real Estate Company" — rebrand the company name, keep copy
   kind), paragraph, 4 counters (Years of Experienced / Total Properties /
   Qualified Realtors / Total Branches). Source markup shows literal "0"
   placeholders filled by JS count-up on scroll-into-view; pick sensible
   targets (e.g. 20 / 12K+ / 48 / 15) and note the deviation in the PR.
8. **Intro CTA band** — full-width photo band + dark overlay; h1 "Find Best
   Place For Leaving" (source typo — prefer "Find Your Best Place for
   Living") + "Get in touch" button.
9. **Testimonials** — `bg-light`; eyebrow "Testimonial" + h2 "Clients We
   Help"; quote card: paragraph + "Roger Scott" / "Marketing Manager".
   (Source repeats the same testimonial — duplicate a couple with varied
   names for balance.)
10. **Agents** — h2 "Our Agents"; 3 cards: Mike Bochs, Jessica Moore,
    Sarah Geronimo; "Listing 10 Properties" line; social icon buttons
    (INLINE SVG brand icons — lucide dropped brand glyphs; probe imports).
    Picsum has no professional headshots — use the skill's verified person
    seeds (1027, 64, 823, 996) and paraphrase names to match portraits if
    needed.
11. **Recent Blog** — h2 "Recent Blog"; 3 cards: meta "Admin · Dec. 01,
    2020 · 3 Comments", title "New Home Sales Picked Up in December"
    (titles may vary), excerpt.
12. **Footer** — `#06112a`, `pt-28`-ish (source 7em); brand column
    "Dwelling Real Estate Agency" + blurb + socials; "Offers" / "Company" /
    "Quick Links" lists; "Have a Questions?" contact: "203 Fake St.
    Mountain View, San Francisco, California, USA", phone, email.
    Copyright line → Component Dock link
    (https://www.componentdock.com/) — REPLACES ColorLib attribution.

## Implementation tasks (TDD order)

- [ ] Scaffold `apps/dwelling` from the simplest existing app; register
      workspace (`npm install --package-lock-only`); `public/CNAME` =
      `dwelling.free.componentdock.com`; homepage =
      `https://dwelling.free.componentdock.com`; footer Component Dock
      link.
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #5ea51d`,
      `--color-brand-dark` (hover ~#4d8a15), `--color-coral: #fd5c64`,
      `--color-navy: #06112a`; Nunito Sans Google Font `<link>` in
      index.html.
- [ ] Tests first (100% coverage), then components in build order:
      Navbar (burger) → HeroSlider (dots/cycling) → SearchWidget (tabs) →
      Categories (cards + places) → PropertyCard grid → VideoSection
      (lightbox) → About (counters, viewport-triggered) → IntroCta →
      Testimonials → Agents → Blog → Footer.
- [ ] Per-app gate: `scripts/verify-app.sh dwelling`; visual QA with the
      browser on `npm run dev`/build; subject-check picsum seeds for
      interiors/houses (few interior shots on picsum — verify each seed
      resolves to a plausible property scene, pin IDs in spec/docs/tests).
- [ ] PR: `feat/template-dwelling` → squash merge immediately → bookkeeping:
      BOTH TEMPLATES.md rows (609 + 2602) `[x]` +
      `https://dwelling.free.componentdock.com`, `npm run readme:status`,
      verify surge URL 200 + `<title>` + bundle hash.
