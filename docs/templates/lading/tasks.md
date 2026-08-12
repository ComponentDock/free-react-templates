# Lading (ColorLib Cargo) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-lading` by an implementer stream.

## Design notes

- **Original:** ColorLib "Cargo" — free logistics/cargo website template.
  Source: https://colorlib.com/wp/template/cargo/. New name: **lading**
  (a bill of lading is the core cargo shipping document — fits the freight
  theme; single lowercase word, no collision with `ls apps/` or existing
  specs). Cargo appears in TEMPLATES.md at line 357 (Bootstrap section,
  first unchecked item without a prep — the claim) and as a duplicate at
  line 925 (Transport/Logistics section). No spec existed for cargo on
  origin/main; the slug is not shipped anywhere (no `[x]` row references
  it).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/cargo/`
  (HTTP 200, ~48KB) + stylesheet `css/style.css` (28KB) plus
  `bootstrap.min.css`, `owl.carousel.min.css`, `aos.css`,
  `jquery.fancybox.min.css`, flaticon + icomoon icon fonts. Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens. Screenshot
  `cargo-free-template.jpg` (1200×946) confirms: blue gradient overlay
  (left lighter blue → right cyan) over a busy port photo (cranes + cargo
  ships), white headline, white tracking input + bright orange "Track Now"
  button, three white service cards below (ship / airplane / person with
  box photos, orange uppercase titles), white navbar with orange "CARGO"
  logo, thin grey top bar with contact info + social icons. Palette:
  white/light-grey sections (#f6f5f5), orange #ff8b00 primary, blue
  gradient hero #377aff → #00d9ff, dark #333 footer.
- **Structure observed (1:1):**
  1. `div.top-bar` (border-bottom 1px #e9ecef): left `info@yourdomain.com`
     - `+1 (234) 5678 9101`; right Twitter + Facebook icon links.
  2. `header.site-navbar.js-sticky-header.site-navbar-target` (white,
     sticky): brand "Cargo" in orange; `nav.site-navigation.text-right`:
     Home, Services, About Us, Team, Pricing, FAQ, Why Us, Testimonials,
     Blog, Contact (+ "More Links" dropdown: Menu One/Two/Three); mobile
     `.toggle-button.d-inline-block.d-lg-none` hamburger → collapse.
  3. `div.ftco-cover-1.overlay` (bg source.unsplash.com/pSyfecRCBQA/
     1920x780, 100vh / min-600px, `:before` overlay linear-gradient(45deg,
     #377aff 0%, #00d9ff 100%) opacity .95): col-lg-6: h1 white "Choose
     Your Quality Delivery of Your Cargo" (Oswald 4.5rem), p lorem,
     `<form>`: input placeholder "Enter your tracking number" + submit
     "Track Now" (btn btn-primary text-white px-4 — renders orange; both
     controls 55px height, radius 4px).
  4. `div.ftco-service-image-1.pb-5` (margin-top: -70px → overlaps hero
     bottom): owl-carousel of 3 `div.service.text-center` slides — image
     (cargo_sea_small / cargo_air_small / cargo_delivery_small.jpg) + h3
     orange link title **Sea Freight** / **Air Freight** /
     **Package Forwarding** + lorem p.
  5. `section.site-section` "What We Offer": 6 icon cards (flaticon ferry,
     airplane, box, lorry, warehouse, add) — **Sea Freight**, **Air
     Freight**, **Package Forwarding**, **Trucking**, **Warehouse**,
     **Delivery** — icon + title + lorem + "Read More"
     (`a.btn.border-w-2.rounded.primary-primary-outline--hover`).
  6. `section.site-section.bg-light` "About Us": col-lg-6 image
     (cargo_delivery_big.jpg) + col-lg-6 copy + 4 `.block-counter-1`
     counters — **Years of Experience**, **Companies**, **Covered
     Countries**, **Couriers** — `.number` orange 4rem with 50×3px
     underline bar, `.caption` 14px letter-spacing .05em (animated count-
     up in the original).
  7. `section.site-section` "Our Staff": 6 `.block-team-member-1` cards
     (white, 1px #e9ecef border, 30px padding, hover lift): photo, name,
     role, `.block-social-1` icons — **Max Carlson** (Co-Founder),
     **Charlotte Pilat** (Co-Founder), **Nicole Lewis**, **Jean Smith**,
     **Bob Carry**, **Anne Fisher**.
  8. `section.site-section.bg-light` "Pricing": 3 `.pricing` cards (white,
     30px padding) — **Basic $47 / year**, **Premium $200 / year**,
     **Professional $750 / year** — price number 3rem orange + gray
     `/ year` (#cccccc), 5 lorem feature lines, "Buy Now" buttons
     (original mixes btn-secondary / btn-primary per card).
  9. `section.site-section` "Frequently Ask Questions": 2-col grid
     (col-lg-6) of 8 `div.mb-5` Q&A blocks — orange question icon + h3
     question + lorem answer. NOT an accordion — static pairs. Questions:
     Can I accept both Paypal and Stripe? / What available is refund
     period? / Can I accept both Paypal and Stripe? / What available is
     refund period? / Where are you from? / What is your opening time? /
     Can I accept both Paypal and Stripe? / What available is refund
     period?
  10. `section.site-section` "Why Us": h2 + `h4.text-primary` "We work
      quickly and efficiently!" + lorem + `ul.ul-check.primary` checklist —
      **Cargo express**, **Secure Services**, **Secure Warehouseing**,
      **Cost savings**, **Proven by great companies** (orange checks).
  11. `section.site-section.bg-light.block-13` "Happy Clients": owl
      carousel of 4 `.block-testimony-1` cards — blockquote (white, 30px
      padding, italic 18px, #000, Georgia serif) + rounded avatar +
      `h3.font-size-20` name — **Ricky Fisher**, **Ken Davis**, **Mellisa
      Griffin**, **Robert Steward**.
  12. `section.site-section` "Articles": 2 `div.mb-5.d-flex.blog-entry`
      cards — date "Apr 19, 2019", h2 title "Knowing the Difference Is Key
      to Effective Logistics", lorem excerpt, "Read More".
  13. `section.site-section` "Get In Touch" / "Contact Us": col-lg-6 form
      — First name + First name [sic — duplicate in the original; recreate
      as First name / Last name], Email address, textarea "Write your
      message." (rows 10), submit "Send Message" (btn-primary btn-block
      py-3 px-5); col-lg-4 ml-auto white card "Contact Info" — Address:
      34 Street Name, City Name Here, United States · Phone: +1 242 4942
      290 · Email: info@yourdomain.com.
  14. `footer.site-footer` (bg #333333, 4em 0): About Us blurb col +
      Features links col (About Us, Testimonials, Terms of Service,
      Privacy, Contact Us) + Subscribe to Newsletter
      (`form.footer-suscribe-form`: "Enter Email" input + Subscribe
      button) + Follow Us social col; bottom bar copyright → repo-standard
      credit.
- **Design tokens:**
  - Font: **Oswald** (headings h1–h5) + **Rubik** (body/UI). Google Fonts
    via `<link>` in index.html.
  - Primary orange **#ff8b00**: brand, `.primary-primary-outline--hover`
    buttons (bg orange, white text, 2px border → hover flips to
    transparent bg + orange border), `.block-heading-1 h2` (3rem), counter
    numbers (4rem), pricing numbers (3rem), `.text-primary` card titles /
    FAQ icons / "Why Us" h4.
  - Hero overlay: **linear-gradient(45deg, #377aff 0%, #00d9ff 100%)**,
    opacity .95, over a port photo.
  - Light section bg **#f6f5f5** (`bg-light`: About Us, Pricing, Happy
    Clients).
  - Footer bg **#333333**; footer headings white; footer links
    rgba(255,255,255,0.5).
  - `.block-heading-1` eyebrow span: uppercase 12px, letter-spacing .1em,
    bold, #b8b8b8.
  - Team cards: white bg, 1px #e9ecef border, 30px padding, hover lift.
  - Testimonial blockquote: white bg, 30px padding, italic 18px #000,
    Georgia serif.
  - Form controls: 55px height, border-radius 4px (hero form).
  - Body text #939393; hero paragraph white; headings near-black.
- **Implementation notes:**
  - Original title is a freight/logistics theme — document title should be
    "Lading — Logistics & Cargo".
  - The original's "First name" field is duplicated in the contact form —
    recreate as First name + Last name and note the fix in the PR.
  - "Frequently Ask Questions" heading is grammatically off in the
    original — either keep verbatim or correct to "Frequently Asked
    Questions" (state the choice in the PR).
  - Owl carousels (hero service cards + Happy Clients) can be static
    grids/sliders with prev/next or dots; 3 service cards and 4 unique
    quotes are enough (owl repeats them in the original DOM).
  - The service-card row overlaps the hero bottom (margin-top: -70px in
    the original) — replicate the overlap (negative margin / translate).
  - Counters: implement an animated count-up on scroll into view (simple
    hook; no dependency), matching the orange 4rem number + underline bar.
  - The tracking form and contact form: plain inputs; submit buttons
    don't need real handlers (prevent default / no-op per conventions).
  - Brand icons (Facebook, Twitter) are NOT in lucide-react — use inline
    SVG paths (simple-icons).
  - Images: `picsum.photos/seed/lading-N/w/h` — hero ~1920×780, service
    cards 3×~800×500, about ~900×700, staff 6×~400×400, blog 2×~800×500.
    Verify the hero seed renders a port/shipping scene (see seed-screening
    pitfalls in the replication skill; a port/container subject is
    subject-critical here).
  - Icons via lucide-react: Mail, Phone, Menu, X, Ship, Plane, Package,
    Truck, Warehouse, Box, HelpCircle/QuestionMark, Check, ChevronLeft,
    ChevronRight, MapPin, Send, Facebook, Twitter (latter two as inline
    SVG).

## Tasks

- [ ] Scaffold app (copy simplest existing app; rename package
      `@free-react-templates/lading`; `npm install --package-lock-only` at
      root before committing so lockfile registers the workspace — never a
      full `npm install` in a shared tree).
- [ ] Register `injectUiSource()` in `vite.config.ts` (see
      docs/conventions.md).
- [ ] TDD red: write section tests first (TopBar, Navbar, Hero, Services,
      Offer, About, Staff, Pricing, Faq, WhyUs, Testimonials, Articles,
      Contact, Footer, App composition) mirroring the spec scenarios.
- [ ] Theme tokens in `index.css` `@theme`: primary orange `#ff8b00`,
      hero gradient stops `#377aff` / `#00d9ff`, light `#f6f5f5`, dark
      `#333333`, body grey `#939393`, eyebrow grey `#b8b8b8`, fonts Oswald + Rubik.
- [ ] Implement sections in order; keep the original's 1:1 section order.
- [ ] Top bar: thin grey bar, email + phone left, Twitter/Facebook right.
- [ ] Navbar: white sticky, orange "Lading" brand, anchor links + mobile
      hamburger collapse.
- [ ] Hero: full-viewport port photo + blue gradient overlay + white
      Oswald headline + tracking form (input + orange "Track Now").
- [ ] Service cards: 3 image cards overlapping the hero bottom (Sea
      Freight / Air Freight / Package Forwarding).
- [ ] Offer: 6 icon cards (Sea Freight, Air Freight, Package Forwarding,
      Trucking, Warehouse, Delivery) with Read More buttons.
- [ ] About: light-grey split, photo + copy + 4 animated counters
      (orange 4rem number + underline bar).
- [ ] Staff: 6 team cards (photo, name, role, social icons).
- [ ] Pricing: 3 white cards (Basic $47 / Premium $200 / Professional
      $750 per year) + Buy Now buttons.
- [ ] FAQ: static 2-column grid of 8 Q&A pairs with orange question icons.
- [ ] Why Us: h4 "We work quickly and efficiently!" + orange-check
      checklist (5 items).
- [ ] Testimonials: "Happy Clients" carousel/grid, 4 quotes (italic
      Georgia) with avatars.
- [ ] Articles: 2 blog cards (date, title, excerpt, Read More).
- [ ] Contact: form (First name, Last name, Email address, message,
      Send Message) + white Contact Info card (Address/Phone/Email).
- [ ] Footer: dark #333, about blurb + Features links + newsletter
      subscribe + Follow Us social + repo-standard credit.
- [ ] Run `npm run verify:app -- lading` (typecheck → lint → vitest 100% →
      build) until green; fix root causes, never disable gates.
- [ ] Self-review (docs/self-review.md checklists), then PR on
      `feat/template-lading` → merge immediately (`gh pr merge --squash
    --delete-branch`; if main checked out elsewhere, omit --delete-branch
      and `git push origin --delete` the remote).
- [ ] After merge: `[~]`→`[x]` in TEMPLATES.md for Cargo line 357 (+
      duplicate line 925 — check whether the checklist convention marks
      all dup rows; check sibling history first), add surge URL,
      `npm run readme:status`, commit `chore:` and push.
