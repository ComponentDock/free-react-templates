# Keyhold (ColorLib Findstate) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-keyhold`.

## Design notes (replication findings)

- **Original:** ColorLib "Findstate" — real estate / property listing
  template (source: https://colorlib.com/wp/template/findstate/).
  TEMPLATES.md has THREE copies of this item (lines 395, 1014, 2589 — mark
  EVERY copy `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/findstate/
  (HTTP 200, 60 KB rendered DOM, title "Findstate - Free Bootstrap 4
  Template by Colorlib"). Stylesheets: `css/style.css` (~78 KB) main, plus
  animate, aos, bootstrap-datepicker, flaticon, icomoon, ionicons.min,
  jquery.timepicker, magnific-popup, open-iconic-bootstrap.min,
  owl.carousel.min, owl.theme.default.min. Fonts self-hosted via
  `/cf-fonts/`: **Roboto 300/400/500/600/700** — load Roboto from Google
  Fonts in the recreation. Cross-checked against the TEMPLATES.md
  screenshot (`findstate-free-template.jpg`, viewed in browser 1200×946) —
  designs match. The demo brands itself "Findstate"; recreation uses the
  NEW name **Keyhold**.
- **Visual design (from DOM + CSS tokens + screenshot):** light real-estate
  landing page — hero photo of San Francisco "Painted Ladies" houses on
  the right, fading left into a cream/gold gradient; centered dark headline
  "Find Properties That Make You Money" (60px, weight 400) + gold
  rectangular "Search Properties" button; horizontal white search bar with
  4 fields (Location input; Property Type / Property Status / Price Limit
  selects) + gold button over the hero bottom; "What we offer" / "Exclusive
  Offer For You" section with 3 property photo cards (price, title,
  location, bed/bath/sqft icons, agent strip with Bookmark/Compare); split
  "Why Choose Us?" (photo half + 4 feature rows); photo counter section
  (gold numbers); "Find Properties In Your City" — 6 rounded photo cards
  with gold location badges; light-gray testimonials carousel; 4-agent
  grid; 4 blog cards; **gold `#d4ca68` footer**. All demo property/blog
  copy is placeholder ("Blue View Home", "Why Lead Generation is Key for
  Business Growth", agent "Ben Ford") — paraphrase into
  real-estate-themed copy.
- **Structure (1:1, section order):**
  1. Navbar (`nav.ftco-navbar`, `.ftco-navbar-light#ftco-navbar`):
     transparent, `position: absolute; top: 20px`, z-index 3, over hero.
     Brand "Findstate" left (black, w700, 20px); nav right: Home (active) /
     About / Services / Agent / Listing / Blog / Contact (black w600 15px,
     padding .9rem 20px, hover gold `#d4ca68`); hamburger + "Menu" label
     (≤991px: navbar bg `#000`, white brand/nav).
  2. Hero (`.hero-wrap`, 850px, bg photo + `data-stellar-background-ratio
="0.5"`): `.overlay` white gradient (rgba(255,255,255,0.71) →
     transparent 50% → white) + `.overlay-2` gold gradient left panel
     (width 50%, opacity .7: `#d4c968` → rgba(212,201,104,0.9) 36% → 0.55
     50% → transparent); content centered: h1 "Find Properties That Make
     You Money" (60px, black, w400, lh 1.1, `<br>` break) + CTA
     `.btn.btn-primary.py-3.px-4` "Search Properties"; bottom mouse scroll
     indicator (`.mouse` → `.mouse-icon` → `.mouse-wheel` + down arrow).
  3. Search bar (`.ftco-section.ftco-no-pb` → `.search-wrap-1` → form
     `.search-property-1`, overlaps hero bottom): 4 fields in a row —
     Location (label + input, placeholder "City/Locality Name", search
     icon) · Property Type (select: Type / Commercial / - Office /
     Residential / Villa / Condominium / Apartment) · Property Status
     (select: Type / Rent / Sale) · Price Limit (select: $5,000 …
     $2,000,000) + submit button "Search Properties" (`.form-control.btn
.btn-primary`).
  4. Featured properties (`.ftco-section.goto-here`): heading center —
     `.subheading` "What we offer" (12px w600 uppercase ls 2px gold, 50px
     gold rules each side) + h2 "Exclusive Offer For You" (40px w600);
     grid col-md-4 ×3 `.property-wrap`:
     - `.img` bg photo: hover-centered circular gold link icon (40×40) +
       `.list-agent` strip bottom (rounded-circle avatar + "Ben Ford" +
       Bookmark heart + Compare eye icon buttons).
     - `.text` (white, shadow 0 5px 21px -14px rgba(0,0,0,0.14); hover
       0 5px 39px -14px rgba(0,0,0,0.26)): price row (`.old-price`
       strikethrough "800,000" + `.orig-price` gold "$3,050<small>/mo</
       small>") · h3 "Blue View Home" (18px w600 black) · location with pin
       icon · `property_list` (bed 3 · bathtub 2 · floor-plan 1,878 sqft).
  5. Why Choose Us (`.ftco-section.ftco-fullwidth`): heading "Services" /
     "Why Choose Us?"; split — left `.one-half.img` bg photo
     (`images/about.jpg`), right `.one-half.half-text` with 4 stacked
     `.media.block-6.services-wrap` rows (circular icon + h3 + p): **No
     Downpayment**, **All Cash Offer**, **Experts in Your Corner**,
     **Locked in Pricing**.
  6. Counter (`section.ftco-counter.ftco-section.img` #section-counter):
     bg photo + gold overlay panel (left 27% width, opacity .3 ≥lg);
     4 `.block-18` stats: number (50px w300 gold, animate from 0) + label
     (18px rgba(0,0,0,0.7)): 305 Area Population · 1090 Total Properties ·
     209 Average House · 67 Total Branches.
  7. City listings (`.ftco-section`): heading "Find Properties" / "Find
     Properties In Your City"; grid col-md-4 ×6 `.listing-wrap.img.rounded`
     (height 270px, align-items-end): bg photo, gold location badge
     top-left ("New York, USA", bg `#d4ca68` white, padding 10px, rounded),
     bottom `.text` (padding 22px): h3 "100 Property Listing" (20px w600
     white) + "See All Listing" `.btn-link` (white, arrow).
  8. Testimonials (`.ftco-section.testimony-section.bg-light`): heading
     "Testimonial" / "Happy Clients"; owl carousel `.testimony-wrap.py-4`:
     quote p + `.user-img` circle + name "Roger Scott" + `.position`
     "Marketing Manager".
  9. Agents (`.ftco-section.ftco-agent`): heading "Agents" / "Our Agents";
     4 `.agent` cards (col-md-3): photo (`team-1..4.jpg`) + `.desc`: h3
     name link (w600) + `.h-info` (filing icon + "N Properties"): Ben Ford
     43 · John Cooper 28 · Janice Clinton 30 · Eunice Henceford 25.
  10. Blog (`.ftco-section.ftco-no-pt`): heading "Blog" / "Recent Blog";
      4 `.blog-entry` cards (col-md-3): `.block-20.img` bg photo + h3
      heading + `.meta.mb-3` (October 17, 2019 · Admin · chat 3).
  11. Footer (`.ftco-footer.ftco-section`, **bg `#d4ca68`**, padding 7em
      0): brand col (blurb + social circles: twitter / facebook /
      instagram) · Community (Search Properties, For Agents, Reviews,
      FAQs) · About Us (Our Story, Meet the team, Careers) · Company
      (About Us, Press, Contact, Careers) · "Have a Questions?" (address
      "203 Fake St. Mountain View, San Francisco, California, USA" / phone
      "+2 392 3929 210" / email "info@yourdomain.com") · copyright bar:
      "Copyright © <year> All rights reserved | This template is made with
      <heart> by Colorlib" → credit Keyhold.
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Brand **gold `#d4ca68`** (50 uses; variant `#d4c968`): buttons
    (`.btn.btn-primary` override: gold bg, white text, 1px gold border;
    hover transparent + gold text), footer bg, subheadings + side rules,
    counter numbers + overlay panel, nav hover, `.orig-price`, listing
    badge bg, card corner button.
  - Ink `#000`: h1 60px w400 lh 1.1; h2 40px w600 (28px mobile);
    nav links w600 15px; brand w700 20px; card h3 w600 18px; footer
    heading 17px w400.
  - Grays: body rgba(0,0,0,0.8) lh 1.5; muted rgba(0,0,0,0.4); counter
    labels rgba(0,0,0,0.7) 18px; footer links rgba(255,255,255,0.8).
  - Surfaces: white; `.bg-light` `#f8f9fa`; card shadows 0 5px 21px -14px
    → hover 0 5px 39px -14px rgba(0,0,0,…).
  - Buttons: radius **3px**, font-size 14px, no shadow; hero CTA py-3 px-4.
  - Radii: 3px buttons; `rounded` ≈4px (listing cards, badges); 50%:
    avatars, social icons, hero link circle (40px), corner button
    (40px `50% 0 0 0`).
  - Fonts: **Roboto 300/400/500/600/700** via Google Fonts link.
  - Spacing: sections ~7em 0; footer 7em 0; navbar top 20px; counter
    number 50px w300; `.listing-wrap` height 270px; `.agent` photo
    full-width.

## Implementation tasks

- [ ] Spec-first: `openspec/specs/template-keyhold/spec.md` already on main
      (prep). Open a `feat/template-keyhold` branch.
- [ ] Copy the simplest existing landing app (e.g. `apps/` real-estate or
      landing template such as roadly/rently or the nearest one), rename
      package to `@free-react-templates/keyhold`, run `npm install` at
      root so `package-lock.json` registers the workspace (grep
      `free-react-templates/keyhold`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap — see repo memory notes).
- [ ] TDD: write tests first per spec requirement, then implement: 1. `Navbar` — transparent over hero, brand + 7 links (Home active),
      gold hover, mobile black bg + hamburger "Menu" toggle (desktop +
      mobile variants render duplicate links — use `getAllByRole`). 2. `Hero` — bg photo, white gradient overlay, left gold panel, 60px
      headline, gold "Search Properties" CTA (radius 3px), mouse scroll
      indicator linking to the search section. 3. `SearchBar` — 4 fields (Location input; Property Type / Status /
      Price Limit selects with the exact option lists) + gold submit;
      submit prevents default, clears fields, shows confirmation
      (assert `queryByLabelText` absent after success message replaces
      the form). 4. `FeaturedProperties` — 3 property cards (price old+gold, title,
      location, bed/bath/sqft list, agent strip w/ avatar + name +
      Bookmark/Compare buttons, hover gold link circle + shadow
      deepen). 5. `WhyChooseUs` — split layout, image half + 4 feature rows (No
      Downpayment / All Cash Offer / Experts in Your Corner / Locked in
      Pricing). 6. `StatsCounter` — 4 stats (305/1090/209/67), gold 50px numbers,
      animate from 0 on scroll into view (fake-timer + `act()` wrap —
      see repo memory notes on RTL fake timers). 7. `CityListings` — 6 rounded photo cards, gold location badges,
      "100 Property Listing" title + "See All Listing" link. 8. `Testimonials` — bg-light carousel, quote + circular avatar +
      name + position, accessible prev/next controls. 9. `Agents` — 4 cards (name + "N Properties" line). 10. `Blog` — 4 entries (photo, title, meta date/author/comments). 11. `Footer` — gold bg, brand + social circles (inline SVG brand
      icons — lucide-react has no brand icons), 3 link columns +
      contact column, copyright bar crediting Keyhold.
- [ ] Theme tokens in `@theme`: `--color-brand: #d4ca68`, ink `#000`,
      muted rgba(0,0,0,0.4), light `#f8f9fa`.
- [ ] Roboto Google Fonts `<link>` (300–700) in index.html.
- [ ] Placeholders: `picsum.photos/seed/keyhold-<n>/<w>/<h>`; lucide-react
      icons (bed/bath/floor-plan/pin/search/arrow/heart/eye/phone/mail/map
      -pin); inline SVG brand icons for social.
- [ ] Paraphrase demo copy: real-estate-themed property titles, features,
      testimonial quotes, blog titles, agent names; keep the search field
      labels and footer structure.
- [ ] Verify: `scripts/verify-app.sh keyhold` (typecheck + lint + 100%
      coverage + build). Then push branch, open PR, squash-merge
      immediately (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark TEMPLATES.md Findstate lines 395, 1014, 2589
      `[~]`→`[x]` with Surge URL
      `https://free-react-templates-keyhold.surge.sh` + homepage, run
      `npm run readme:status`, commit + push. Verify `npx knip` + curl the
      Surge URL.
