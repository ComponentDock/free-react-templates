# Rentora (ColorLib Rental) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-rentora` by an implementer stream.

## Design notes

- **Original:** ColorLib "Rental" — free real estate website template.
  Source: https://colorlib.com/wp/template/rental/. New name: **rentora**
  (coined from "rent" + aura/ora — a property/rental brand feel; single
  lowercase word, no collision with `ls apps/` or existing specs). Rental
  appears in TEMPLATES.md at line 489 (Bootstrap section, first unchecked
  item without a prep — the claim) and as duplicates at line 1149 (Business)
  and line 2608 (Real Estate). No spec existed for rental on origin/main;
  the slug is not shipped anywhere (no `[x]` row references it).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/rental/`
  (HTTP 200, ~27.5KB) + stylesheet `css/style.css` (146KB) plus
  `bootstrap.min.css`, `owl.carousel.min.css` (testimonials), `themify-icons`
  - `flaticon` icon fonts, `magnific-popup.css` (youtube popup), `animate.css`,
    fontawesome. Full rendered DOM extracted; structure below is from the DOM +
    CSS tokens. Screenshot `rental-free-template.jpg` (1200×946) confirms:
    white page with gold/mustard accents, split hero (white text left, glass
    skyscraper photo right masked by a large concave white curve), gold
    circular play button over the photo, gold "View Property" /
    "Submit property" buttons, team section with a family photo on a warm
    orange/peach block beside a light-grey textured column, gold section-title
    underlines. Palette: white base, light-grey sections, gold #cfb579
    primary, dark navy #14303a headings/nav, near-black #1b212e footer.
- **Structure observed (1:1):**
  1. `header.main_menu.home_menu` — transparent over hero: `a.navbar-brand`
     (img logo = house icon + "RENTAL HOME SOLUTION" text), centered
     `ul.navbar-nav` links Home (current) / about / Properties / Blog /
     Pages / Single blog / Elements / Contact us (14px #14303a, hover
     #cfb579), right `div.btn_1.d-none.d-lg-block` "Submit property" (gold,
     desktop only). Mobile: collapsed menu on #bd9f5a/#bd9c50 with white
     links.
  2. `section.banner_part` — 800px (700 mobile) flex-centered; `:after`
     right-half overlay image (concave white curve mask over the photo edge,
     hidden mobile); col-lg-6 text: h5 kicker "Beautiful investments"
     (14px Open Sans 600 uppercase #666), h2 "Everyone Deserves the
     Opportunity of the Home" (50px/1.3/600), p lorem, `a.btn_1.banner_btn`
     "View Property", social row ti-facebook · ti-twitter-alt ·
     ti-instagram; centered `a.video_popup` play button (95px #cfb579
     circle, 7px white border, ti-control-play, hover #d8b25a).
  3. `section.team_part` — padding-top 130px; `:before` left-half photo
     block (team_member.png, top 130px, height 74%, hidden mobile);
     right col (offset-lg-1 col-lg-5): h2 "Living From The Team That Cares"
     (40px/700 + gold underline 15px below), p, ul checklist with
     ti-paint-bucket / ti-check-box / ti-ruler-pencil, `a.btn_1` "Read More"
     (10px 42px); decorative section_overlay.png at the bottom.
  4. `div.passion_part` — padding 250px 0 130px, bg image passion_bg.png
     (cover) → recreate as dark color/gradient; section_tittle h1 (white)
     "Our Passion is People What's Yours?"; 4 `.single_passion` cards —
     `.passion_icon` 80×80 box (1px #afb5be, radius 5px, 42px white icon:
     flaticon compass / desk / bathroom / beach) + h4 (20px/600 white) —
     Creative Design / Experience Style / Product Research / Affordable
     Price — + white p + `a.btn_2` "Read More" (ti-arrow-right). Hover:
     card bg → white (1s), h4 → #14303a, p → #797979, btn_2 → #14303a.
  5. `div.apartment_part` — padding-top 130px; section_tittle h1 #14303a
     "Provide The Beautiful Apartment" + right "View More" btn_2 (#797979,
     gold circle on #e9eef2); 3 `.single_appartment_part` cards: photo +
     ti-heart, ti-location-pin "384 Treeline Park, San Antonio, TX", h3
     "$1,235,632", "Detached House For Sale", meta "Home, Apartment" with
     flaticon bed / bath / frame.
  6. `div.room_part` — padding 130px 0 40px, full-bleed container-fluid:
     room_1 (full-width photo + `.room_text_1` white overlay card: 510px,
     padding 40px, absolute top -175px right 30px, shadow 1px 15px 30px
     #14303a15, "Beginning own light divided male is light" + btn_2 "Read
     More" → gold on hover); room_2 mirrored.
  7. `div.review_part#testimonial` — padding 90px 0 130px; decorative
     client_cercel_overlay.png circle (200px, top-left) + review_overley.png;
     section_tittle "Our Happy Customer Says About us"; owl-carousel of 4
     `.singler_eview_part` — quote + client photo + h4 "Mouunt Alezaber" +
     role "Project manager".
  8. `div.cta_part` — centered on cta_bg.png (cover), padding 170px 0:
     h2 "Are You Ready For Move?" + p + `a.btn_1` "Sing Up" [sic → fix to
     "Sign Up"].
  9. `div.blog_part` — padding 130px 0 125px + `.blog_bg` pattern layer
     (blog_bg.png); section_tittle "Read Latest News From Our Blog"; 4
     `.single_blog`: 2 image cards (photo + content: ti-time "Apartment /
     March 20, 2019", ti-comment, ti-heart, h4 title, excerpt) + 2 `.media`
     rows (thumb + media-body text).
  10. `footer.footer_part` — #1b212e, padding 130px 0 25px: 4 columns —
      About Us (blurb + footer_icon socials), Contact Info (Address / Phone
      +8880 44338899 / Email info@colorlib.com), Important Link (WHMCS-
      bridge, Search Domain, My Account, Shopping Cart, Our Shop),
      Newsletter (blurb + `.mail_part`: pill input radius 50px 2px white
      border + 60×39px gold pill icon button) — + copyright bar (repo-
      standard credit).
- **Design tokens (from css/style.css):**
  - Fonts: Poppins 400/500/600/700 (body 14px + headings; titles 40px/700),
    Open Sans (kicker 14px/600 uppercase), Roboto minor. Google Fonts
    `<link>`.
  - Gold primary #cfb579 (btn_1 bg/border, title underlines 2px×90px,
    play button, nav hover, btn_2 circle, newsletter icon button), hover
    #d8b25a; dark gold #bd9c50/#bd9f5a (mobile nav bg).
  - Dark navy #14303a (headings, nav links, apartment title; room card
    shadow 1px 15px 30px #14303a15); footer #1b212e; light #f9f9ff /
    #e9eef2; grays #666666 / #797979 / #afb5be.
  - btn_1: solid gold, white 500 text, 2px border, capitalize, 7px 12px
    (team 10px 42px). btn_2: text button + 30px gold circle (radius 50%)
    top -5px left -11px; room hover → text gold.
  - Section paddings 130px (70px mobile), title margin-bottom 80px.

## Implementation tasks (for the implementer stream)

1. **Scaffold** — `cp -r` the simplest existing app to `apps/rentora`;
   rename package to `@free-react-templates/rentora`; run
   `npm install --package-lock-only` (or full `npm install` when the shared
   tree is idle) so the lockfile registers the workspace; verify
   `grep -c "free-react-templates/rentora" package-lock.json`; keep
   `injectUiSource()` in vite.config.ts.
2. **Spec-first** — the spec at
   `openspec/specs/template-rentora/spec.md` already encodes structure,
   tokens, and Gherkin scenarios; write tests first (red), then implement.
3. **Sections (in order):** Navbar (transparent, centered links, gold Submit
   property, mobile collapse #bd9f5a) → Hero (800px split, curved mask via
   a clipped/rounded photo or overlay div, gold play button, social row) →
   Team (left photo block, heading + gold underline, 3-icon checklist,
   Read More) → Passion (dark band, 4 icon cards with hover flip) →
   Apartment (3 listing cards + View More) → Room (2 full-bleed rows with
   white overlay cards) → Testimonials (carousel, 4 slides) → CTA →
   Blog (2 image cards + 2 media rows) → Footer (4 columns + newsletter pill
   - copyright).
4. **Assets:** all picsum-seeded (`picsum.photos/seed/rentora-N/w/h`).
   **Probe subjects before pinning** (see skill lessons): hero must read as
   a modern building/skyscraper (try picsum ids of architecture; the
   original is a low-angle curved glass tower), team photo = people/family,
   room photos = interiors/exteriors, apartment/blog = houses. Rank
   candidates with the pixel metric (bright + blue-dominant for sky
   shots), verify the top pick with a single full-res browser_vision call.
5. **Icons:** lucide-react (Compass, LayoutTemplate, Bath, Umbrella, Heart,
   MapPin, Bed, Bath, Play, ArrowRight, Clock, MessageCircle, PaintBucket,
   CheckSquare, PencilRuler, Mail, Facebook/Twitter/Instagram as inline
   SVG — lucide removed brand icons).
6. **Fonts:** Poppins + Open Sans Google Fonts `<link>` in index.html.
7. **Gate:** `npm run verify:app -- rentora` → typecheck, lint, vitest
   100% coverage, build; then branch `feat/template-rentora`, PR, immediate
   squash merge (`gh pr merge --squash --delete-branch`), bookkeeping
   (`[x]` + surge URL + `npm run readme:status`).
8. **PR description must include:** source template (ColorLib Rental),
   preview URL (https://preview.colorlib.com/theme/rental/), design tokens
   (gold #cfb579, navy #14303a, Poppins/Open Sans, btn_1/btn_2 shapes),
   and renames (Rentora; "Sing Up" → "Sign Up" typo fix; bg images →
   color/gradient/picsum stand-ins).

## Fidelity watchpoints

- The hero's curved white mask (banner_overlay.png) is the signature visual
  — recreate with a masked/clipped photo (e.g. rounded-left large radius or
  an SVG/clip-path curve), not a plain rectangle.
- The passion section bg (passion_bg.png) and CTA bg (cta_bg.png) are
  photos → pick a dark-ish picsum or a deep navy/gold gradient so white text
  stays readable.
- Testimonial slides must be swipable (carousel) — the section heading in
  the original is "Our Happy Customer Says About us" (keep the wording).
- Original footer contact: Address :Your address goes here, your demo
  address. / Phone : +8880 44338899 / Email : info@colorlib.com — paraphrase
  to the repo-standard demo contact (no tel: literals in source — compute
  `tel:` at runtime from a spaced string).
- Nav links are 14px #14303a on white; mobile menu gold #bd9f5a — both
  desktop and mobile navs render in the DOM, so tests must use
  `getAllByRole` and index the mobile menu last.
- Keep 100% coverage; test each section's scenarios from the spec.
