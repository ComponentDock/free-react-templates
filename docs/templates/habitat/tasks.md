# Habitat (ColorLib Homes) — Tasks & Design Notes

> Recreation of ColorLib "Homes"
> (https://colorlib.com/wp/template/homes/) under the NEW name **Habitat**
> (a real-estate-themed word — the "homes/property" spirit of "Homes"
> without reusing the source name), per the monorepo naming mandate.

## Design notes (replication findings)

- **Original:** ColorLib "Homes" — real-estate/property website template
  (source: https://colorlib.com/wp/template/homes/, category "Bootstrap
  (216)").
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/homes/`
  (HTTP 200, ~97 KB HTML + `css/style.css` ~44.6 KB parsed for tokens).
  The live preview is the authoritative reference.
- **Screenshot:** the TEMPLATES.md URL (`homes-free-template-1.jpg`)
  404s; the real one is
  `https://colorlib.com/wp/wp-content/uploads/sites/2/homes-free-template.jpg`
  (found via the ColorLib template page). It shows: dark-navy hero photo
  (luxury interior) + navy overlay + centered white "Find your next /
  dream home."; white overlapping search bar with lime-green Search
  button; 3-col property card grid (house photos, heart icon, rounded
  corners + shadows). Cropped before newsletter/services/instagram/
  footer — those were captured from the live DOM.
- **Visual design:** clean real-estate aesthetic — dark navy (#30304e)
  used for the hero overlay, newsletter band and footer; a single lime
  green accent (#8AD144) for the Search/Subscribe buttons, checked radio
  pills and button hovers; light gray (#F8F8F9) instagram strip; muted
  purple-gray (#6f6f8a / #8f8fa8) body and outline text. Roboto
  (300/400/500). Property photos + white rounded cards with soft shadows
  do the heavy lifting.
- **Structure (1:1, section order):**
  1. Header (`header-section`, absolute, padding 25px 0): logo img
     top-left (house icon + "Homes.") + `main-menu` float right — Home ·
     Search Results · Categories · Single Property · Blog · Contact ·
     `.top-social` brand icons (Pinterest, Facebook, Twitter, Dribbble,
     Behance).
  2. Hero (`hero-section.home-page.set-bg`, height 633px, bg.jpg):
     `:after` overlay = **rgba(18,16,82,.75)** (solid navy, not
     gradient). Centered (`hero-text`, pt 272px): h2 "Find your next"
     (48px/300) + h1 "dream home." (72px/300), white.
  3. Filter search (`div.filter-search`, margin-top **-57px**, z 9):
     `form.filter-form` white radius 4px, height 115px, shadow
     2px 15px 30px rgba(0,0,0,.1). Fields (each with 1px #F3F3F3 right
     border): Location select (London/US/UAE) · Property Type select
     (House/Resort/Hotel) · Price range slider (50k–300k, dual handles) ·
     Bedrooms pills 1/2/3/4+ · Bathrooms pills 1/2/3/4+ · Search submit
     (bg #8AD144, radius 0 4px 4px 0, padding 42px 40px 43px 31px, 18px
     white, flaticon-search + "Search"). Labels p 14px #61616e/300;
     selects transparent with only bottom border 1px #E7E7E7, value 16px
     500 #3f3f4b; pills label bg #8F8FA8 radius 4px padding 8px 9px white
     text, checked → #8AD144.
  4. Hotel rooms (`hotel-rooms.spad`): 3-col grid (col-lg-4 col-md-6) of
     `.room-items` cards — radius 4px, shadow 2px 2px 30px rgba(0,0,0,.1),
     mb 30px, overflow hidden. Card: `.room-img` photo + heart icon link
     top-right; `.room-text` (p 15px): h5 title 18px 500 #30304e;
     Location (MapPin) + "Show on Map" links 12px #8f8fa8 500; feature
     row Lot Size "2561 sqft" / Beds 9 / Baths 2 / Garage 1 (icon + p
     label + value); `.room-price` p "For Sale" 16px #8f8fa8 + span
     "$345,000" 24px 500 #30304e; `.site-btn.btn-line` "View Property"
     (outline, hover green fill). Demo repeats the same card 4×.
  5. Popular room (`popular-room.set-bg.p-in`, bg-2.jpg dark photo):
     `col-lg-6 offset-lg-6` with owl-carousel `.popular-items` slides —
     white cards (radius 4px, padding 30px 20px 30px 30px): h5 title 18px
     500 #30304e (e.g. "Spacious Modern Smart House") + Location/Show on
     Map links; description p 14px 300 #6f6f89 lh 22px; feature stats;
     `.popular-room-price` "For Sale" + "$345,000" + red pill
     `span.deal` "Best Deal" (bg #E30707, uppercase 14px 500, radius
     50px, padding 1px 9px); "View Property" outline button. Two slides.
  6. Newsletter (`newslatter-section`, bg #30304e, padding 80px 0 94px,
     centered): mail icon img; h4 "Join our mailing to get weekly updates
     on our exclusive deals." (white 24px 500 lh 30px mb 35px); form:
     email input (385×51, radius 4px, p 18px 20px, placeholder "Email
     address", #6f6f8a 300) + `.site-btn.news-btn` "Subscribe!" (bg
     #8AD144, white, p 16px 38px, radius 4px).
  7. Services (`services-section`, p 78px 0 62px): 2-col split
     (col-lg-6 ×2). Left: h2 span "Why choose homes?" (#30304e 500) +
     "Because we we are the best in the business." (h2 36px 400 #6f6f8a
     lh 48px) + lorem p. Right: ul of SIX li, each check icon + lorem.
  8. Instagram (`instagram`, bg #F8F8F9, p 40px 0, centered): h2 "Don’t
     forget to follow us on Instagram @homes" (36px 400 #000). Demo's
     image grid is JS-injected → render heading + square photo row.
  9. Footer (`footer-section`, bg #30304e): `.room-pic` strip
     (container-fluid, FIVE photos img/room-pic/1..5.jpg); centered logo
     (only-logo.png → icon + "Habitat"); three cols (col-lg-4 col-md-6):
     (a) About Homes — h5 + lorem p + `.footer-social` brand icons
     (Pinterest, Facebook, Twitter, Dribbble, Behance); (b) Latest Blog
     Posts — TWO `.single-blog` rows (left thumb + right: h6 "How to find
     the perfect area for your next house.", `.blog-time` clock icon +
     "5 min", `.read-more` arrow + "Read More"); (c) Get In Touch — h5 +
     ul (MapPin "132 Liberty Streetelit, Plano, Texas", Mail
     "hello@home.com", Phone "214-805-4428") + hours "Monday – Friday:
     9 am – 5 pm" / "Saturday: 9 am – 1pm". Bottom `.copyright`
     (centered): "Copyright © <year> All rights reserved | This template
     is made with ♥ by Colorlib".

## Design tokens (from `css/style.css` + preview DOM)

| Token             | Value(s)                                                                                                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand             | #8AD144 (lime green) — Search + Subscribe! buttons, checked radio pills, outline-btn hover fill                                                                               |
| Navy              | #30304e — newsletter bg, footer bg, card h5 titles, price spans, "Why choose homes?" span                                                                                     |
| Muted text        | #6f6f8a (body/secondary, services h2, input text) · #8f8fa8 (outline btn, "For Sale", link text, pill bg)                                                                     |
| Labels / selects  | label p 14px #61616e weight 300; select value 16px weight 500 #3f3f4b; bottom border 1px #E7E7E7                                                                              |
| Light backgrounds | #F8F8F9 (instagram) · #F3F3F3 (field separators, card inner borders)                                                                                                          |
| Badge             | #E30707 red, uppercase 14px weight 500, radius 50px ("Best Deal")                                                                                                             |
| Hero overlay      | rgba(18, 16, 82, 0.75) solid navy (NOT a gradient)                                                                                                                            |
| Font              | "Roboto", sans-serif — weights 300/400/500 (Google Fonts `<link>`)                                                                                                            |
| Buttons           | outline: 2px solid #8f8fa8, radius 4px, p 15px 25px, 16px 500; hover → bg+border #8AD144, white (0.3s). Filled: bg #8AD144 white radius 4px. Search submit radius 0 4px 4px 0 |
| Cards             | radius 4px, shadow 2px 2px 30px rgba(0,0,0,.1), mb 30px                                                                                                                       |
| Filter form       | white, radius 4px, height 115px, shadow 2px 15px 30px rgba(0,0,0,.1), margin-top -57px                                                                                        |
| Hero text         | white; h2 48px/300, h1 72px/300; centered, pt 272px; hero height 633px                                                                                                        |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-brand` = #8AD144, `--color-navy` =
  #30304e, `--color-muted` = #6f6f8a, `--color-outline` = #8f8fa8,
  `--color-label` = #61616e, `--color-select` = #3f3f4b, `--color-light`
  = #F8F8F9, `--color-badge` = #E30707, `--color-divider` = #F3F3F3.
  Use via Tailwind classes per conventions.
- Google Fonts `<link>` in `index.html`:
  `https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap`.
- Only dynamic pieces: the mobile nav toggle (React state, aria-expanded;
  desktop nav is static) and the popular-room carousel (auto-advance +
  prev/next + dots — simple useState index + setInterval with cleanup,
  or a tiny manual loop; do NOT add owl-carousel).
- Brand icons (Pinterest, Facebook, Twitter, Dribbble, Behance):
  lucide-react REMOVED brand icons — use inline SVG paths (simple-icons)
  per the replication skill. Header socials + footer socials + copyright
  heart (lucide `Heart`).
- Lucide mappings (flaticon → lucide): heart `Heart`, placeholder →
  `MapPin`, cursor → `MousePointer2` (or `MapPin` variant), search
  `Search`, clock `Clock`, right-arrow `ArrowRight`, envelope `Mail`,
  smartphone `Phone`, message `Mail`, check `Check`, home logo `Home`.
- Placeholders: `picsum.photos/seed/habitat-<n>/<w>/<h>` — hero
  1920×1280 (633px tall band), room cards 600×400 ×4-6, popular-room bg
  1920×1080, popular slide doesn't need an image (text card), newsletter
  none, footer photo strip 400×300 ×5, blog thumbs 120×90 ×2, instagram
  squares 300×300 ×6.
- Cards: the demo repeats ONE card 4× — use distinct picsum seeds and
  paraphrase titles (same kind of content: title + Location/Show on Map +
  4 stats + For Sale $345,000 + View Property). Vary prices slightly if
  desired; keep the same shape.
- The filter form overlaps the hero by -57px: implement with
  `relative z-10 -mt-14` on the form wrapper (hero keeps its 633px
  height; the white bar sits on the boundary). The Search button is the
  rightmost field, green, radius `rounded-r-md` only.
- Price range slider: jquery-ui in the demo — implement as a simple
  two-thumb range (min 50k, max 300k) with accessible inputs
  (aria-label) or a single labeled range input pair; no new dependency.
- Radio pills: hidden radio inputs + labels styled as pills
  (bg #8F8FA8 white text; `peer-checked:` → bg #8AD144) per the
  Tailwind peer pattern; group name per field (bedrooms/bathrooms).
- Do NOT copy the demo's images, fonts files, or CSS — recreate tokens
  in Tailwind. No icon fonts (fontawesome/flaticon) — lucide + inline
  SVG brand icons only.
- Newsletter form: local state; on submit show a success message (per
  the skill pitfall: assert `queryByLabelText` absent after submit in
  tests).
- The hero overlay is a SOLID rgba(18,16,82,.75), NOT a gradient.
- The instagram heading references the template name — use "@habitat".

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/habitat`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh habitat` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge
