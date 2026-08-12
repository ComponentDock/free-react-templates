# Stead (ColorLib Findstate) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-stead`.

## Design notes (replication findings)

- **Original:** ColorLib "Findstate" — real estate / property search landing
  page (source: https://colorlib.com/wp/template/findstate/). TEMPLATES.md
  has THREE rows: line 395 (category Bootstrap), line 1014, and line 2589 —
  mark ALL THREE `[x]` when done. No other spec on main maps to this slug
  (grep-checked before prepping).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/findstate/
  (HTTP 200, 60,352 bytes; title "Findstate - Free Bootstrap 4 Template by
  Colorlib"). Master stylesheet `css/style.css` (79,564 bytes) fully
  extracted; libs: Bootstrap 4 grid, Owl Carousel (offers + testimonials),
  AOS scroll animation, ionicons + flaticon icon fonts, datepicker +
  timepicker (search form). Font **Roboto** (CSS `"Roboto", Arial,
sans-serif`; no Google Fonts link in HTML — add Roboto 300–700 via Google
  Fonts `<link>` in index.html).
- **Screenshot:** `findstate-free-template.jpg` (AVIF, 1200×946, viewed in
  browser) — clean airy real-estate landing: white page, soft-focus
  Victorian-houses photo hero fading into a pale gold→white gradient on the
  left, dark centered headline "Find Properties That Make You Money", gold
  "Search Properties" CTA, black transparent navbar with gold active link,
  white search bar (Location / Property Type / Property Status / Price
  Limit + gold button), white property-card carousel below ("WHAT WE OFFER"
  gold subheading + "Exclusive Offer For You"). Cross-checks the live DOM +
  CSS analysis. Demo brands itself "Findstate"; recreation uses the NEW
  name **Stead**.
- **Visual design (from DOM + CSS tokens + live browser render):** the
  identity hangs on a **mustard gold `#d4ca68`** (alias `#d4c968` in the
  hero gradient — standardize on `#d4ca68`):
  - Navbar: transparent over hero (top 20px), brand + links black 15px/600,
    hover/active gold; mobile: solid black bg, white brand, hamburger.
  - Hero: 850px tall photo bg; white overlay
    `linear-gradient(to bottom, rgba(255,255,255,.71), transparent 50%, #fff)`;
    gold overlay `linear-gradient(to right, #d4c968, rgba(212,201,104,.9)
36%, rgba(212,201,104,.55) 50%, transparent)` at 50% width / opacity .7;
    h1 60px/400 black, lh 1.1 (two lines); gold "Search Properties" button;
    mouse scroll icon bottom.
  - Search form: 4 fields — Location (text + search icon, placeholder
    "City/Locality Name"), Property Type (Type/Commercial/- Office/
    Residential/Villa/Condominium/Apartment), Property Status (Type/Rent/
    Sale), Price Limit ($5,000…$2,000,000); gold submit "Search Property"
    (padding 22px 10px, 20px). Labels 18px/400 black; controls 16px, border
    `rgba(0,0,0,.05)`, radius 4px, text `rgba(0,0,0,.4)`.
  - Section headings: `.subheading` gold 12px/600 uppercase letter-spacing
    2px flanked by 50px gold rules (±60px); h2 40px/600 (mobile 28px).
  - Property cards (`property-wrap`): img 250px; hover → gold 60px circle
    bookmark icon + bottom agent bar (40px avatar, white name, bookmark/
    compare buttons); white `.text` padding 25px, shadow `0px 5px 21px
-14px rgba(0,0,0,.14)`; title 18px/600 black; location muted
    `rgba(0,0,0,.4)`; price "$800,000" + "$3,050 /mo" old price; meta "3 2
    1,878 sqft".
  - Buttons: `.btn-primary` gold bg, 1px solid gold border, white text,
    radius 3px, 14px; hover transparent bg + gold text.
  - Counter: photo band + gold overlay 27% width left (opacity .3);
    numbers 50px/300 gold; labels 18px `rgba(0,0,0,.7)`.
  - City cards ×6 ("New York, USA" + "100 Property Listing" + "See All
    Listing"); testimonials on `bg-light` `#f8f9fa`; agents ×4 (Ben Ford 43,
    John Cooper 28, Janice Clinton 30, Eunice Henceford 25); blog ×3
    (photo 200px, meta "October 17, 2019 Admin 3", title "Why Lead
    Generation is Key for Business Growth").
  - Footer: **solid gold `#d4ca68` bg, white text** (padding 7em 0): brand
    - blurb; Community / About Us / Company link columns; "Have a
      Questions?" (203 Fake St. Mountain View, San Francisco, California, USA
      · +2 392 3929 210 · info@yourdomain.com); copyright bar (paraphrase
      Colorlib credit, add Component Dock link).
- **Section order (1:1, from live demo DOM):**
  1. Navbar (`ftco_navbar ftco-navbar-light`, transparent, top 20px)
  2. Hero (`hero-wrap` 850px, white + gold overlays, h1 + gold CTA, mouse
     icon)
  3. Search form (`ftco-section ftco-no-pb`, 4 fields + gold submit)
  4. Exclusive offer (`ftco-section goto-here`, subheading "What we offer"
     - property card carousel)
  5. Why choose us (`ftco-section ftco-fullwidth`, 4 features)
  6. Counter (`ftco-counter ftco-section img`, 4 gold stats)
  7. Find properties in your city (`ftco-section`, 6 city cards)
  8. Testimonials (`ftco-section testimony-section bg-light`, quote
     carousel)
  9. Agents (`ftco-section ftco-agent`, 4 agent cards)
  10. Blog (`ftco-section ftco-no-pt`, 3 blog cards)
  11. Footer (`ftco-footer ftco-section`, gold bg)
- **Seeds for picsum placeholders (approx 22):** stead-1 hero photo
  (suburban houses vibe — `https://picsum.photos/seed/stead-1/1600/850`),
  stead-2..5 property interiors (or the verified person-photo IDs from the
  replication skill for agent portraits: `/id/1027`, `/id/64`, `/id/823`,
  `/id/996`), stead-6..11 city cards, stead-12..14 blog photos, stead-15..18
  agent portraits. All `picsum.photos/seed/stead-<n>/<w>/<h>`.
- **lucide-react icon map:** search → `search`; location → `map-pin`;
  beds → `bed-double`; baths → `bath`; sqft → `ruler`; bookmark → `bookmark`;
  compare → `arrow-left-right`; menu → `menu`; chevron → `chevron-down`;
  quote → `quote`; counter icons → `users` (population), `home` (properties),
  `building-2` (average house), `map` (branches); socials → inline SVG brand
  icons (facebook, twitter/x, instagram — lucide dropped brand icons).
- **Hero bg note:** the original photo + two gradient overlays is easy to
  recreate: a picsum photo, `bg-white/70`-style gradient overlay, and a
  gold gradient div (w-1/2, opacity 70, `bg-[linear-gradient(to_right,#d4c968,rgba(212,201,104,.9)_36%,rgba(212,201,104,.55)_50%,transparent)]`).
- **Carousels:** Owl Carousel (offers, testimonials) → simple horizontal
  scroll/overflow rows or a lightweight React carousel; no new deps
  preferred.

## Implementation order (suggested)

1. Scaffold `apps/stead` from the simplest existing app; rename package to
   `@free-react-templates/stead`; register in the root lockfile via the
   repo's usual add-workspace flow (implementer's job, NOT prep).
2. `@theme` tokens: gold `#d4ca68`; ink `#000000`; muted `rgba(0,0,0,.4)` /
   `rgba(0,0,0,.7)`; light `#f8f9fa`; footer text `rgba(255,255,255,.9)`;
   font `Roboto`. Gradients as Tailwind arbitrary values.
3. Components (one per section, in `apps/stead/src/components/`):
   `Navbar` (transparent → black on mobile + hamburger), `Hero` (photo +
   dual overlays + h1 + gold CTA + mouse icon), `SearchForm` (4 fields +
   gold submit), `Offers` (property carousel + hover overlays), `WhyUs`
   (4 features), `Counter` (photo band + 4 gold stats), `Cities` (6 city
   cards), `Testimonials` (quote carousel), `Agents` (4 cards), `Blog`
   (3 cards), `Footer` (gold bg, 3 columns + contact + copyright).
4. TDD per component: tests first, 100% coverage via
   `scripts/verify-app.sh stead` (typecheck + lint + vitest + build).
   Carousel/slider tests: assert items render; hover states with
   `fireEvent.mouseEnter` if implemented with CSS hover only, assert via
   class presence.
5. PR description: source template + preview URL + tokens + what differs
   (rename, picsum seeds, lucide icons, CSS-gradient hero overlays, React
   carousel instead of Owl, Roboto via Google Fonts, neutral copyright
   credit + Component Dock link).
6. After deploy: mark TEMPLATES.md lines **395, 1014 AND 2589** `[x]` +
   surge URL, `npm run readme:status`, conventional commit.

## Verification

- [ ] `scripts/verify-app.sh stead` (typecheck + lint + 100% coverage tests + build)
- [ ] Spec scenarios all implemented (`openspec/specs/template-stead/spec.md`)
- [ ] Visual pass vs live demo `https://preview.colorlib.com/theme/findstate/`
- [ ] TEMPLATES.md lines 395 + 1014 + 2589 all `[x]`
