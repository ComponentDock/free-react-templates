# Findly (ColorLib Gricklo) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-findly`.

## Source mapping

- **ColorLib item:** "Gricklo" (TEMPLATES.md — appears 2×: lines 588 and
  1530; both rows point to the same source, one prep covers all; verified
  with `grep -c 'wp/template/gricklo/'` = 2).
- **Source URL:** https://colorlib.com/wp/template/gricklo/
- **Preview URL:** https://preview.colorlib.com/theme/gricklo/ — **HTTP 200,
  live** (confirmed 2026-08-13, ~45 KB HTML; screenshot browsed visually
  too). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/gricklo/assets/css/style.css
  (~90 KB, parsed for tokens) — also imports bootstrap.min.css,
  owl.carousel.min.css, slicknav.css, animate.min.css, magnific-popup.css,
  fontawesome-all.min.css, themify-icons.css, slick.css, nice-select.css
  (all assets/css/). Site is Bootstrap 5 + jQuery + owl-carousel +
  slicknav — **NOT Tailwind**. Fonts: CSS `@import` of Google Fonts
  "Mulish" 300–800 + "Work Sans" 300–800 — add Google Fonts `<link>`s in
  index.html; do NOT copy font files.

## Reference research (done — do not redo)

### Screenshot (`gricklo-free-template.jpg`, 1200×946)

Browsed visually in the browser. Directory/listing site: nav with logo
"Gricklo" left, centered links (Home, Listing▾, About, Blog, Contact), Sign
In + blue "Add Listing" pill right; full-width hero photo of a night
restaurant interior (warm hanging lamps, diners) under a dark navy gradient
overlay; white headline "Listing made easy." + white subtext; white pill
search bar split into What? (dropdown, "Eat Food, Service, Hotel,
Shopping") / Where? ("Your City...") / blue Search button; pill category
filters below (Restaurant active-blue, Home/Party/Shopping/Hotel outline);
then white "Top Destination" with a row of six circular city photos (New
York, Toronto, Thailand, Paris, Dhaka, Rome). The live preview DOM +
parsed stylesheet are the authoritative reference; the screenshot confirms
palette + layout.

### Design tokens (from `assets/css/style.css`)

| Token        | Value                                    | Use                                                                   |
| ------------ | ---------------------------------------- | --------------------------------------------------------------------- |
| Brand blue   | `#4DB7FE`                                | `.btn` bg, search button, location-btn, Add Listing, hovers, back-top |
| Deep blue    | `#304CBB`                                | active category pill fill                                             |
| Navy         | `#1A213D`                                | headings, button hover sweep, input labels, submenu bg base           |
| Ink deep     | `#140C40`                                | hero search input text                                                |
| Orange       | `#FF6F00`                                | rating stars + review text                                            |
| Section bg   | `#F1F6F9`                                | interested-in section, how-it-work, testimonial quote card            |
| Footer bg    | `#F1FBFF`                                | footer wrapper (gray-bg)                                              |
| Muted brown  | `#6B5A5A`                                | section subtext, body p                                               |
| Footer text  | `#A4A6AE`                                | footer body                                                           |
| Socials      | `#677F8B`                                | footer social icons                                                   |
| Badge pill   | `rgba(126,109,92,0.9)`                   | "Closed" status badge                                                 |
| Hero overlay | `rgba(26,32,61,0.65→0.75→0.15)` vertical | hero photo gradient (top-heavy)                                       |
| Card shadow  | `rgba(2,25,65,0.08)` `0px 6px 6px 0px`   | properties-card                                                       |
| Borders      | `#ebeff4` / `#DEE0E5` / `#f0e9ff`        | card divider / CTA box / newsletter input                             |
| Fonts        | "Work Sans" + "Mulish"                   | headings/buttons/labels · body                                        |

Button shapes: **30px pill** `.btn` (padding 30px 35px; hover = navy
`#1A213D` scaleX sweep via `::before`, cubic-bezier(0.5,1.6,0.4,0.7));
location-btn 13px 32px pill; category pills radius 20px bg
`rgba(255,255,255,0.25)` (active `#304CBB`); "Closed" badge radius 25px;
header inline search input pill radius 30px, 48px, bg
`rgba(255,255,255,0.25)`; hero search inputs 60px, radius 6px, color
`#140C40`, labels "What?"/"Where?" navy Work Sans 16px/500 absolute at left
22px (input padding-left 94px); search button 60px blue. Destination
images: **circles** (border-radius 50%), hover navy overlay + white
"Explore →" + rotating 2px dotted white ring (92%×91%, `rotateme` 30s
linear infinite). Category/list card images: rounded 10px / 5px 5px 0 0
with a bottom navy gradient `#010a27 → rgba(6,31,120,0.3) → transparent`
for caption legibility. Headings: section-tittle h2 Work Sans 36px/600
(24px mobile), hero h1 60px/600 white, hero p 22px/300 white padding
0 159px, testimonial h2 36px/600, footer h4 white 20px/400.

## Implementation checklist

1. Scaffold `apps/findly` (copy the simplest existing app; package
   `@free-react-templates/findly`; CNAME `findly.free.componentdock.com`;
   homepage `https://findly.free.componentdock.com`).
2. `@theme` tokens: `brand #4DB7FE`, `deep #304CBB`, `navy #1A213D`,
   `ink #140C40`, `orange #FF6F00`, `section #F1F6F9`, `footerbg #F1FBFF`,
   `muted #6B5A5A`, `footertext #A4A6AE`, `socials #677F8B`; overlay/border
   helpers for `rgba(126,109,92,0.9)`, `rgba(255,255,255,0.25)`,
   `rgba(26,33,61,0.5)`, `rgba(2,25,65,0.08)`.
3. Google Fonts `<link>`: Mulish 300–800 + Work Sans 300–800.
4. Sections (order matters — match the preview 1:1):
   1. Header: transparent over hero; sticky → white + shadow
      (`0 10px 15px rgba(25,25,25,0.1)`) on scroll; brand "FINDLY"; inline
      pill search (48px, `rgba(255,255,255,0.25)` bg, white placeholder,
      search icon); nav Home / Listing▾ (Listing, Listing Details) / About
      / Blog▾ (Blog, Blog Details, Element) / Contact — Work Sans 16px/600
      white, hover `#4DB7FE`, submenu `rgba(26,33,61,0.8)`; Sign In link +
      blue pill "Add Listing"; mobile hamburger (client-side menu).
   2. Hero: bg photo (picsum, night-restaurant-ish seed — screen it) +
      top-heavy navy gradient `bg-[linear-gradient(...)]`; min-height
      956px; centered h1 "Listing made easy." (white 60px/600) + p 22px/300
      white; white search bar: What? (placeholder "Ex: Food, Service,
      Hotel, Shopping") + Where? ("Your City....") 60px inputs radius 6px +
      blue "Search" button; category pills Restaurant · Home (active
      `#304CBB`) · Party · Shopping · Hotel.
   3. Top Destination (white): 6 circular city cards (New York, Toronto,
      Thailand, Paris, Dhaka, Rome) — rounded-full img + hover navy
      overlay + "Explore →" + rotating dotted ring (CSS keyframes;
      remember the Tailwind v4 transform-order trap — use arbitrary
      `[animation:...]` or a plain CSS class for the rotation).
   4. Things Are You Interested In (bg `#F1F6F9`): mixed grid — 2 stacked
      cards each side (Restaurant & Bar, Outdoor) + tall middle card
      (Shopping Center with description + blue pill "Explore" that inverts
      on hover); white titles over bottom navy gradient.
   5. Popular Things To do (white): client-side carousel of ≥4
      properties cards — photo (5px 5px 0 0) + "Closed" badge (top-left
      `rgba(126,109,92,0.9)` pill) + heart (top-right) + rating row
      (5 filled orange stars + "- 4.90 (230 Review)"); caption: title
      20px/600 + BadgeCheck + address (MapPin, paraphrase); footer:
      UtensilsCrossed + "Food & Restaurant" + Phone/Mail icons. Vary the
      repeated "Gloria Fast Food Restaurant" titles.
   6. Find More CTA: bordered box (`#DEE0E5`, 5px) — "Do you want to find
      more?" + "10,563 listing for you on our list." + blue pill "Explore
      More" (hover navy sweep).
   7. How It Work? (bg `#F1F6F9`): 3 centered cards — Search/Star/
      CalendarCheck icons + Find Businesses / Review Listings / Make a
      Reservation + blurbs.
   8. Testimonials (white): slider (≥2 slides, 35px black circle arrows) —
      h2 "People talking about" + quote card (`#F1F6F9`, 5px radius, 20px
      navy) + founder row (circular portrait, name 20px/600, role
      paraphrased — not "at Colorlib").
   9. Footer (bg `#F1FBFF`): brand + about + 4 inline-SVG socials
      (Facebook/Instagram/LinkedIn/YouTube); "Navigation" (Home, About,
      Services, Blog, Contact); "Services" (paraphrase the source's
      health-template gibberish — e.g. Find Businesses, List Your Business,
      Pricing, Help Center); "Subscribe newsletter" — 50px input
      (`#f0e9ff` border, radius 0) + white icon button, client-side email
      validation; copyright bar "© 2026 Findly — All rights reserved" +
      required Component Dock link (https://www.componentdock.com/).
5. TDD: write tests first (header + scroll state + mobile menu, hero +
   search form + active pill, destination cards + hover overlay, category
   grid + tall card, listing cards + carousel, CTA band, how-it-work,
   testimonials slider, footer + newsletter validation + Component Dock
   link, composition), 100% coverage. Query decorative `<img alt="">`
   strips with `container.querySelectorAll('img')`; desktop + mobile nav
   duplicates with `getAllByRole` indexing. RTL fake timers need `act()`.
   MemoryStorage polyfill (from apps/cura/src/test/setup.ts) only if the
   app uses localStorage.
6. Verify: `npm run verify:app -- findly`; full gate runs in CI on merge.
7. PR: `feat: Findly — directory/listing template (ColorLib Gricklo)`,
   include source URL, preview URL, token list, and what differs (renames,
   picsum placeholders `findly-<n>` — screen the hero seed for a
   night-restaurant/street subject, Google Fonts links, lucide icons +
   inline-SVG socials, owl-carousel→client-side state, mailchimp→client-
   side validation, paraphrased copy).
8. Bookkeeping after merge: mark both TEMPLATES.md Gricklo rows (lines
   588, 1530) `[x]` + `findly` URL + `npm run readme:status`.
