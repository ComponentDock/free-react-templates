# Sofalist (ColorLib Furnish) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sofalist`.

## Source mapping

- **ColorLib item:** "Furnish" (TEMPLATES.md — appears 2×: lines 586 and
  1022; both rows point to the same source, one prep covers all; verified
  with `grep -c 'wp/template/furnish/'` = 2).
- **Source URL:** https://colorlib.com/wp/template/furnish/
- **Preview URL:** https://preview.colorlib.com/theme/furnish/ — **HTTP 200,
  live** (confirmed 2026-08-13, ~36 KB HTML; browsed visually too). Do not
  redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/furnish/css/style.css
  (~69.5 KB, minified, one line) — also imports animate.css, flaticon.css,
  tiny-slider.css, glightbox.min.css, aos.css, datepicker.min.css
  (css/), plus Font Awesome 4.7.0 (stackpath CDN) and ionicons 4.5.6
  (cdnjs). Site is Bootstrap 5 + tiny-slider + glightbox + AOS + jQuery —
  NOT Tailwind. Font: `"Poppins", Arial, sans-serif` (4 rules in
  style.css; no Google Fonts link — Poppins is assumed; add the Google
  Fonts `<link>` in index.html).

## Reference research (done — do not redo)

### Screenshot (`furnish-colorlib-template.jpg`, 1200×946)

Browsed visually in the browser. Split hero: left text panel on a very
pale icy-blue background, large dark heading "Best Design of Furniture
Collections", small grey paragraph, white pill "Discover" button; right
product shot of a light-wood stool on the matching pale-blue background.
Below: the 4-column pastel feature strip (dusty pink / sage green / pale
yellow / beige), then an about split — portrait photo of a woman on a warm
beige background, small "ABOUT FURNISH" label, "Quality Makes the Belief
for Customers" headline. NOTE: the screenshot header shows a centered
search bar ("Search or enter website name.") and serif-ish headings — these
are from an OLDER build; the live preview DOM has NO search bar and uses
Poppins everywhere. The live preview DOM + parsed stylesheet are the
authoritative reference; the screenshot confirms the layout + palette.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS + browser)

1. **Navbar** `nav.ftco-navbar.ftco-navbar-light` — transparent over the
   hero. Brand "Furnish" (→ "Sofalist"). `ul.navbar-nav` links: Home /
   About / Collection / Blog / Contact. No search bar in the live DOM.
2. **Hero** `section.hero-wrap` — height 100vh, `position: relative`:
   - `div.img` right half: 50% width, full height, bg photo
     `images/bg_2.jpg`.
   - left half `div.text.desc`: `h1` "Best Design of <span>Furniture
     Collections</span>" (span emphasis), `p` "A small river named Duden
     flows by their place and supplies it with the necessary regelialia.",
     `a.btn.btn-white` "Discover" (padding `py-3 px-4`).
3. **Feature cards** `section.ftco-section.ftco-no-pt.ftco-no-pb` >
   `div.container-fluid` > `div.row.g-2.py-2` — 4 × `div.col-md-3
.services-wrap` (last one without `d-flex`): `div.services.color-N`:
   circular `div.icon` (flaticon span) + `div.text` `h2` + `p.mb-0`.
   - color-1 Amazing Deals — bg `#f5ebeb`, icon `#cb9696` (handshake →
     lucide Handshake).
   - color-2 Quality Furniture — bg `#dcebdd`, icon `#8bbd8e` (kitchen →
     lucide UtensilsCrossed or CookingPot).
   - color-3 Modern Design — bg `#f5efd8`, icon `#d1b54a` (furniture →
     lucide Armchair or Sofa).
   - color-4 Best Support — bg `#f4e6d8`, icon `#d29a61` (support → lucide
     Headphones).
     All four blurbs are the SAME placeholder copy — paraphrase into 4
     distinct blurbs.
4. **About split** `section.ftco-section.ftco-image.img` (bg photo
   `images/bg_4.jpg`) > `div.row.justify-content-end` > `div.col-md-6`:
   `h2` "Quality Makes the Belief for Customers" + `p` + `a.glightbox`
   "Watch Video" (circular play icon + "Watch Video" text; youtube link
   https://www.youtube.com/watch?v=9ZZ7pq331Dc — a generic play link is
   fine, keep aria-label).
5. **Gallery** `section.ftco-gallery.ftco-no-pb.ftco-section` >
   `div.container-fluid`:
   - `div.row.justify-content-center` > `div.col-lg-5.heading-section
text-center.mb-5`: `span.subheading` "Our Finish Projects" + `h2.mb-4`
     "Furniture Collection".
   - `div.row.g-2`: 8 × `div.col-md-3` (data-aos fade-up, staggered
     delays) > `a.gallery-wrap.img` — height 340px, bg photo
     `images/gallery-N.jpg`, hover: `:after` overlay `opacity:.3` + caption
     `div.text` `opacity:1` (caption `h2.mb-0` + search icon). Source
     repeats caption "Business Finance Consulting" ×8 — replace with 8
     distinct furniture-collection names (Oak Dining Set, Velvet Lounge
     Chair, Nordic Sideboard, Brass Floor Lamp, Marble Coffee Table, Linen
     Bed Frame, Rattan Armchair, Walnut Bookshelf).
6. **Stats band** `section.ftco-section-counter.img` (bg photo
   `images/bg_3.jpg`; `.ftco-section-counter .overlay` = bg `#d4eaf5`
   opacity 1 — the pale-blue wash covers the photo) >
   `div.container`:
   - `div.row.justify-content-center` > `div.col-md-6.heading-section
text-center.mb-5`: `span.subheading` "Great Reviews for our services"
     - `h2.mb-0` "Technical Statistics".
   - `div.row.section-counter`: 4 × `div.col-sm-6.col-md-6.col-lg-3` >
     `div.counter-wrap-2` (text-center): `h2.number` (`span.countup`
     value) + `span.caption`. Values: 20 "Year of Experienced" / 10200
     "Satisfied Customers" / 9850 "Project Completed" / 20 "Get Awards".
     Number style: 40px, weight 600, `#000`, line-height 1. Static — no
     count-up animation required.
7. **Testimonials** `section.ftco-section.testimony-section.bg-light` >
   `div.container-xl`:
   - `div.row.justify-content-center.pb-4` > `div.col-lg-7.text-center
heading-section`: `span.subheading` "Testimonial" + `h2.mb-5` "Happy
     Customers".
   - `div.carousel-testimony` (tiny-slider): slides `div.item` >
     `div.testimony-wrap`: `div.icon` (fa-quote-left → lucide Quote) +
     `div.text`: quote `p.mb-4` + author row (`div.user-img` avatar +
     `p.name` + `span.position`). Source: "Roger Scott", "Marketing
     Manager" ×3 identical slides — paraphrase 3–4 distinct quotes with
     varied names/positions.
8. **How it Works** `section.ftco-section.bg-light.ftco-no-pt` >
   `div.row.justify-content-center.g-0`:
   - heading block: `h2` "How it Works" (centered).
   - 3 × `div.col-md-4.text-center.d-flex.align-items-stretch` >
     `div.flow-wrap` (`flow-wrap-right` / `flow-wrap-2` / `flow-wrap-left`):
     `div.icon` (white 130px circle, radius 50%, centered, mb 30px; inside:
     numbered `small` badge 01/02/03 + flaticon span) + `div.text` `h2` +
     `p.mb-4`:
     01 "Get A Free Quote" (flaticon-calculator → lucide Calculator) /
     02 "Production" (flaticon-production → lucide Factory or Boxes) /
     03 "Delivery & Assembly" (flaticon-package → lucide Package).
   - `div.col-md-12.text-center` CTA row: `a.btn.btn-primary.py-3.px-4`
     "Learn More" (amber pill `#cf7500`, white text; hover: transparent bg
     - amber text) + `a.btn.btn-secondary.py-3.px-4` "Get A Request".
9. **Blog** `section.ftco-section` > `div.row.g-4.justify-content-center`:
   - heading block: `h2` "Recent From Blog".
   - 3 × `div.col-md-6.col-lg-6.d-flex` > `div.blog-entry.justify-content-end
d-md-flex` (3rd has `order-lg-last` on the image — image/text side
     alternates): `a.block-20.img` (bg photo `images/image_N.jpg`) +
     `div.text`: `p.meta` — `<span><i fa-user>Admin</span>` +
     `<span><i fa-calendar>Jan. 27, 2021</span>` +
     `<span><i fa-comment>3 Comments</span>` (→ lucide User / Calendar /
     MessageSquare) + `h3.heading.mb-3 > a` title + `p` excerpt. Source
     repeats title "Shop the Look Cottage Country Living Room" ×3 —
     paraphrase 3 distinct furniture-blog titles (e.g. "Styling a Cottage
     Country Living Room", "5 Sustainable Sofa Fabrics to Consider", "How
     to Mix Wood Tones in One Room").
10. **Footer** `footer.ftco-footer` (bg `#d4eaf5`) >
    `div.container` > `div.row` — 4 × `div.col-md-4.col-lg-3.ftco-footer-widget`:
    - Brand col: `h2` "Furnish" (→ "Sofalist") + about `p` + `ul.ftco-footer-social` social icons.
    - "Services" + `ul.list-unstyled` link list.
    - "Recent Posts" + `ul.list-unstyled` link list.
    - "Have a Questions?" + `div.block-23.mb-3` > `ul`: `li` address
      (`fa-map-marker` "203 Fake St. Mountain View, San Francisco,
      California, USA") / phone (`fa-phone` "+2 392 3929 210") / email
      (`fa-paper-plane` "info@yourdomain.com").
    - Bottom bar `div.container-fluid.px-0.py-5.bg-secondary` >
      `div.container-xl` > `p.mb-0` (14px) — copyright: source credits
      Colorlib → recreation credits Component Dock
      (https://www.componentdock.com/) per AGENTS.md.

## Implementation checklist (order)

1. Scaffold: copy the simplest existing app, rename package to
   `@free-react-templates/sofalist`; register workspace in package-lock.json
   (`npm install` at root before committing); `injectUiSource()` in
   vite.config.ts; Google Fonts `<link>` for Poppins (400/500/600) in
   index.html.
2. `src/index.css` — `@theme` tokens: `--color-amber: #cf7500` (primary
   CTA), `--color-blue: #267aa4` (btn-white text), `--color-paleblue:
#d4eaf5` (footer/stats/hero bg), `--color-linkblue: #3099cd` (footer
   link hover), `--color-light: #f8f9fa` (testimony + how-it-works bands),
   `--color-rose: #f5ebeb` / `--color-rose-icon: #cb9696`, `--color-sage:
#dcebdd` / `--color-sage-icon: #8bbd8e`, `--color-gold: #f5efd8` /
   `--color-gold-icon: #d1b54a`, `--color-tan: #f4e6d8` /
   `--color-tan-icon: #d29a61`, `--color-ink: #000`, `--color-paper: #fff`,
   `--font-sans: "Poppins", sans-serif`. Page bg white, Poppins everywhere.
3. Components: `Navbar` (transparent over hero, 5 links, mobile hamburger
   panel), `Hero` (100vh split: text panel + photo + white pill Discover),
   `FeatureCards` (4 pastel cards, circular icon + distinct blurb),
   `AboutSplit` (bg photo + right text + Watch Video link),
   `Gallery` (8 tiles, hover caption overlay + search icon),
   `StatsBand` (pale-blue band, 4 counters), `Testimonials` (client-side
   carousel, prev/next, 3–4 slides), `HowItWorks` (3 steps, badges + white
   circle icons, Learn More + Get A Request), `Blog` (3 entries, meta row,
   alternating image side), `Footer` (4 columns + contact block + dark
   bottom bar + Component Dock credit).
4. Buttons: pill variant (radius 40px, shadow `0 24px 36px -11px
rgba(0,0,0,0.09)`) with three color variants via `cn()` + typed variant
   maps — `white` (bg #fff, text #267aa4), `primary` (bg #cf7500, white
   text, hover transparent + amber), `secondary` (Bootstrap-ish outline).
5. Gallery caption overlay: group + opacity transitions (hidden → visible
   on hover) with a dark `after:` overlay; search icon (lucide Search).
6. Testimonials carousel: state-based index, prev/next arrows wrap or
   clamp, no tiny-slider dependency.
7. Mobile menu: state-based open/close, Escape + toggle + link-click close,
   focus the panel on open.
8. Stats: static black 40px/600 numbers (source uses jQuery counter-up —
   no animation required; optional count-up must stay testable).
9. Blog/footer links: `href="#"` placeholders or `aria-disabled` — match
   the simplest existing app's pattern.
10. Tests per section (scenario-style `it` blocks mirroring the spec
    Gherkin), 100% coverage; `npm run verify:app -- sofalist`.
11. PR: `feat: implement Sofalist (ColorLib Furnish)`, description must
    list source template, preview URL, tokens, and renames/placeholder
    decisions.

## Fidelity notes

- The template's identity is the LIGHT, AIRY palette: pale blue `#d4eaf5`
  (hero panel, stats band, footer), white pills, and 4 pastel card colors.
  The amber `#cf7500` appears ONLY on the primary "Learn More" button —
  keep it as the sole warm accent, don't spread it around.
- Buttons are PILLS: radius 40px with the soft long shadow
  `0 24px 36px -11px rgba(0,0,0,0.09)`; hero/footer buttons use generous
  padding (`py-3 px-4`).
- Hero: the right half is a PHOTO (50% width, full height); the left text
  panel sits on the pale-blue background. Keep the `<span>` emphasis on
  "Furniture Collections".
- Gallery tiles: 340px tall, hover reveals a dark overlay + caption +
  search icon — the captions must be 8 DISTINCT furniture names (source
  repeats one placeholder).
- Counters: black 40px weight 600; captions under each number.
- Flow icons: white 130px circles with small 01/02/03 badges — the badge
  sits inside the circle with the icon.
- Footer: pale blue with a DARK bottom copyright bar (`bg-secondary`);
  contact info uses icon + text rows. Component Dock credit replaces
  Colorlib.
- Placeholder images: `https://picsum.photos/seed/sofalist-<n>/<w>/<h>`
  (deterministic per tile); icons from lucide-react only (Handshake,
  UtensilsCrossed, Armchair, Headphones, Calculator, Factory, Package,
  Quote, Search, Play, User, Calendar, MessageSquare, MapPin, Phone, Mail,
  social icons).
- NO ColorLib references in any app file (comments included); provenance
  lives only in this spec, TEMPLATES.md, and the PR.
