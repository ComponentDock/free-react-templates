# Harvest (ColorLib "Farmie") — Tasks & Design Notes

> Prep artifact from the Harvest spec; the app first shipped as `apps/farmie`
> (source-name reuse, AGENTS.md rule 5) and was renamed to `apps/harvest` in the
> Farmie → Harvest PR. Implementation notes below reflect the shipped app.

## Design notes (replication findings)

- **Original:** ColorLib "Farmie — Farm Services & Organic Food Store"
  (source: https://colorlib.com/wp/template/farmie/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/farmie/
  (HTTP 200, full rendered DOM + `style.css` (324KB) extracted).
- **Structure (1:1, section order):**
  1. Navbar: logo; links Home, About, Shop (Our Products), News, Contact.
  3. Hero (`banner`): full-width bg image (img/bg-img/1.jpg) + h2 "The hearth
     of the farm is the true center of our universe." + blurb + **Contact Us**
     button.
  4. Benefits (`famie-benefits-area`): "Best Services" + 4 tiles — **Farm
     Experiences**, **100% Natural**, **Farm Equipment**, **Organic food**.
  5. About (`about-us-area`): "About us / Let Us Tell You Our Story".
  6. Journey (`farm-to-table-area bg-gray`): "Our Journey From Farm To Your
     Table" + 3 numbered steps — **Grow** (seeds…), **Harvest** (hand-picked…),
     **Quality Check** (inspected & certified…).
  7. Services (`services-area`): "What we do / Our Produce Is Mainstay For
     Us".
  8. Products (`our-products-area`): "Featured Products / Our Product Are
     Highest Quality" + 4 cards — **Hot Strawberry $17.99**, **Baked Breads
     $9.99**, **Prime Beef $59.99**, **Pure Honey $29.99 → $19.99 (Sale)** +
     "Go to Store" button.
  9. Newsletter (`newsletter-area bg-img`): blurb + email input (aria-label
     "Email address for newsletter") + **Subscribe** button.
  10. Farming practices (`farming-practice-area`): "Make the green world /
      Farming Practices To Preserve Land & Water" + practice cards (Chicken
      Farmed For Meat, Pig Farm Management…).
  11. Testimonial (`testimonial-area bg-img`): single large quote over a photo
      background.
  12. Contact (`contact-area`): "Contact now / Get In Touch With Us" + form
      (Your Name, Your Email, Your Subject, Your Message) + **Send Message**.
  13. News (`news-area bg-gray`): 2 posts ("Why innovation is key to
      maintaining our export market share" — 18 Aug 2018 / Carlos Bacca;
      "Rising cattle supplies see beef export lifted" — 18 Aug 2018 / Peter
      Crough).
  14. Trust badges (`trust-badges-area bg-gray`): "Certified Quality / Our
      Certifications & Guarantees" + **USDA Organic, Non-GMO, Fair Trade,
      Eco-Friendly, Quality Assured**.
  15. Footer: blurb + address "120 Raymond Rd, New York" + email + phone +
      QUICK LINK list + RECENT NEWS + social icons + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **green `#77b122`** (famie-btn, accents, section highlights).
  - Dark `#303030`, gray `#707070`, white backgrounds (`#f8f9fa`/white),
    light sections `bg-gray`.
  - Fonts: Font Awesome icons; body/headings via Google Fonts
    (verify exact family at implementation — likely Open Sans/Roboto pair).
  - Buttons: `famie-btn` — green bg, white text, small radius, uppercase.
- **Recreation name:** Harvest (farm/organic-store themed, distinct from the
  source name and all existing names). App folder `apps/harvest`, package
  `@free-react-templates/harvest`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/harvest-<n>/<w>/<h>`); lucide-react icons (replaces
  FontAwesome); green primary in `@theme`; forms prevent default (no backend);
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-harvest/spec.md` (Gherkin requirements +
      scenarios reflecting the real sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/harvest` — package `@free-react-templates/harvest`, CNAME and
      `homepage` = `https://harvest.free.componentdock.com`.
- [x] TDD: tests first for Navbar, Hero, Benefits, About, Farm-to-Table,
      Services, Products, Newsletter, Practices, Testimonials, Contact, News,
      Trust Badges, Footer and App composition.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate (FAST_MODE): `bash scripts/verify-app.sh harvest` —
      typecheck + lint + 100% coverage tests + build.
- [x] Rename `apps/farmie` → `apps/harvest` (rule 5): folder, package, CNAME,
      homepage, wordmark, document title, meta description, picsum seeds, spec,
      docs and the naming audit.
- [x] TEMPLATES.md row link → `[harvest](https://harvest.free.componentdock.com)`
      and `npm run readme:status`.
