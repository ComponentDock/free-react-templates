# Mortar (ColorLib Buildream) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-mortar`.

## Design notes (replication findings)

- **Original:** ColorLib "Buildream" — construction company website template
  (source: https://colorlib.com/wp/template/buildream/). TEMPLATES.md has TWO
  copies of this item (lines 553 and 1337 — mark BOTH `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/buildream/
  (HTTP 200, ~54 KB, title "Buildream - Construction Company Template").
  Stylesheets: `css/style.css` (324 KB — Bootstrap 5.3 base + ftco theme) +
  flaticon / swiper-bundle / glightbox / aos + Font Awesome 7 CDN. Google
  Fonts `<link>`: **Poppins** (300/400/700) + **Prata** (loaded, unused —
  skip). Modern JS: Bootstrap collapse (mobile menu), swiper (testimonials),
  glightbox (project lightbox), AOS (fade-up reveals), countup (counters).
- **Screenshot:** `buildream-free-template.jpg` — verified live in a browser
  (vision): dark charcoal nav with amber accents, thin dark top bar (contact
  info + socials), hero = construction photo + heavy dark overlay, centered
  white headline with "HAPPY" in amber, rotated "SINCE 1982" stamp badge,
  two CTAs (solid amber "Contact us" + ghost "Request A Quote"), white
  content sections, amber small-caps kickers above headings, circular-cropped
  worker photo in the about area.
- **Visual design:** bold high-contrast construction corporate aesthetic —
  brand amber `#ffa62b`, dark charcoal `#3d424a`, footer `#363b42`, light
  `#f8f9fa` bands, Poppins everywhere, 54px weight-500 section headings with
  16px amber uppercase kickers, rectangular slightly-rounded flat buttons
  (solid amber / solid dark; hover inverts to outline), 100vh fixed-bg hero
  with dark overlay, rotated `-90deg` dark counter badge on the about photo,
  80px amber circular play button, amber "Most Popular" pill badge, dark
  `#3d424a` navbar. The demo brands itself "Buildream"; recreation uses the
  NEW name **Mortar**.

## Design tokens (from css/style.css + live DOM)

| Token          | Value                                                                                                                                                                                                                                                                                                      | Where                                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand amber    | `#ffa62b`                                                                                                                                                                                                                                                                                                  | kickers (`.heading-section .subheading` 16px/600), `.btn-primary` bg (text `#3d424a`), `.video-play-btn`, `.popular-badge`, newsletter band, `.btn-primary:hover` (outline + amber text) |
| Dark charcoal  | `#3d424a`                                                                                                                                                                                                                                                                                                  | navbar `.ftco-navbar-light`, `.btn-darken`, `.counter-wrap` (rotated badge), `.btn-primary` text, `.popular-badge` text                                                                  |
| Footer dark    | `#363b42`                                                                                                                                                                                                                                                                                                  | `.ftco-footer` bg, text `rgba(255,255,255,0.7)`                                                                                                                                          |
| Light band     | `#f8f9fa`                                                                                                                                                                                                                                                                                                  | trust band (`ftco-no-pb bg-light`), testimonials (`testimony-section bg-light`)                                                                                                          |
| White button   | `#fff` + 2px `#fff` border                                                                                                                                                                                                                                                                                 | "Make An Appointment" on the intro CTA band                                                                                                                                              |
| Fonts          | 'Poppins', Arial, sans-serif (300/400/700)                                                                                                                                                                                                                                                                 | Google Fonts `<link>`; skip Prata (unused in source CSS)                                                                                                                                 |
| Headings       | `.heading-section h2` 54px weight 500 lh 1.4; kicker 16px weight 600 `#ffa62b` mb 5px                                                                                                                                                                                                                      | all section headings                                                                                                                                                                     |
| Buttons        | radius 4px; primary = `#ffa62b` bg + `#3d424a` text, hover = transparent + `#ffa62b` border/text; darken = `#3d424a` bg + white text; pricing `.btn-primary` width 60% margin auto, uppercase letter-spaced                                                                                                | hero CTAs (`p-4 py-3`), Make An Appointment, Get Quote, Subscribe                                                                                                                        |
| Hero           | `.hero-wrap`: 100vh, min-height 100%, `background-attachment: fixed`, cover, `.overlay` dark, `.slider-text` centered (`text-center`)                                                                                                                                                                      | hero                                                                                                                                                                                     |
| Counter badge  | `.counter-wrap`: absolute `bottom:107px; right:-107px`, bg `#3d424a`, padding 30px, `rotate(-90deg)`; icon + `.number` (countup) + `.caption`                                                                                                                                                              | about photo badge "38 Years of experienced"                                                                                                                                              |
| Play button    | `.video-play-btn`: absolute center, 80×80px circle, bg `#ffa62b`, color `#3d424a`                                                                                                                                                                                                                          | video CTA                                                                                                                                                                                |
| Popular badge  | `.popular-badge`: absolute `top:-12px; left:50%; translateX(-50%)`, bg `#ffa62b`, text `#3d424a`, 12px/700 uppercase ls 1px, `border-radius:20px`                                                                                                                                                          | Premium pricing card                                                                                                                                                                     |
| Pricing card   | `.block-7`: white, padding 40px 0, shadow `0 24px 48px -13px rgba(0,0,0,0.05)`; `.price` `<sup>$</sup>` + `.number`; `.pricing-features` li with check/x; `.excerpt` (tier name) + `.excerpt-desc`                                                                                                         | pricing                                                                                                                                                                                  |
| Gallery tile   | `.gallery-wrap`: height 340px, bg image, `d-flex align-items-end justify-content-center`; `.icon` search (glightbox) + `.desc` (span category + h2 a title)                                                                                                                                                | portfolio `col-md-4` × 6                                                                                                                                                                 |
| Staff card     | `.staff`: radius 4px, shadow `0 24px 48px -13px rgba(0,0,0,0.05)`; `.img` photo + `.ftco-social` overlay (4 icons) + `.text` h3 name + span role                                                                                                                                                           | team `col-lg-3` × 4                                                                                                                                                                      |
| Blog card      | `.block-20 img` image with `.meta-date` badge (span day + small month) + `.text` `.meta` (user + comment counts) + h3 heading + excerpt                                                                                                                                                                    | blog `col-lg-4` × 3                                                                                                                                                                      |
| Newsletter     | `.newsletter-section` bg-primary (`#ffa62b`) 60px 0; `.newsletter-form` input + `.btn-dark px-4 py-3` Subscribe                                                                                                                                                                                            | newsletter                                                                                                                                                                               |
| Section rhythm | `.ftco-section` ~7em 0; `.ftco-no-pb` (trust); counters `6em 0`; intro CTA `3em 0`; `.aside-stretch` appointment form                                                                                                                                                                                      | vertical rhythm                                                                                                                                                                          |
| Icons (source) | flaticon + Font Awesome 7 → lucide-react: HardHat/Helmet (counter), Building2/FloorPlan/Users/Factory (about mini services), service icons, Check/X (pricing), Search (gallery), User/MessageCircle (blog meta), socials (top bar, staff, footer), ChevronDown (FAQ), ArrowRight (hero CTAs), Play (video) | per-section                                                                                                                                                                              |

## Structure (1:1, section order)

1. **Top bar** `div.py-1.top-wrap` (thin dark strip) — left `p.con`: "Free
   Call: +1 234 456 78910"; right `p.con` "Email Adddress:
   buildream@info.com" (sic — fix typo) + `ul.ftco-social-top` social icons
   (Twitter, Facebook, …).
2. **Navbar** `nav.navbar.ftco-navbar-light` (bg `#3d424a`, z-3) —
   `a.navbar-brand.aside-stretch` wordmark "Buildream" → "**Mortar**";
   `button.navbar-toggler` ("Menu" + bars icon, collapse target
   `#navbarSupportedContent`); `ul.navbar-nav.ms-auto`: SEVEN links — Home
   (active), About, Services, Projects, Pricing, Blog, Contact.
3. **Hero** `section.hero-wrap` (100vh, bg image `bg_1.avif`, dark `.overlay`,
   centered `.slider-text`) — `span.subheading` "Since 1982" (rotated stamp
   badge in the source screenshot), `h1.mb-5` "We Will Be **Happy** To Take
   Care Of Your Work" ("Happy" in `span` → amber), two CTAs: `a.btn.btn-primary
p-4 py-3` "Contact us" + arrow, `a.btn.btn-darken p-4 py-3` "Request A
   Quote" + arrow.
4. **About** `section.ftco-section.ftco-about-section` — left `col-md-6`
   `div.img` (about.avif) with `div.counter-wrap` rotated badge (bg
   `#3d424a`, `rotate(-90deg)`, bottom-right): `span.flaticon-engineer` +
   `span.number` countup "38" + `span.caption` "Years of experienced"; right
   `col-md-6.heading-section`: `span.subheading` "Welcome to Buildream" →
   "Welcome to Mortar", `h2.mb-2` "Quality and Affordable Constructor", `p`
   placeholder copy, `h4` "We Can Help You", `div.row` 2×2 `.services` mini
   cards (icon + h2 + p): **Construction** (flaticon-building), **Architecture**
   (flaticon-floor-plan), **Consulting** (flaticon-consult), **Mechanical**
   (flaticon-construction).
5. **Trust badges** `section.ftco-section.ftco-no-pb.bg-light` — centered
   heading "Trusted By" + subheading "Companies We've Worked With"; row of
   SIX text client logos: ABC Corp, City Dev, State Bank, Metro Health,
   Grand Hotels, Industrial Co.
6. **Intro CTA** `section.ftco-intro.img` (bg image `bg_4.avif`, `.overlay`,
   `padding 3em 0`, fixed attachment) — `span.subheading` "You May Contact Us
   For Construction & Renovation Work", `h2` "We Are Great Construction
   Company", `a.btn.btn-primary.py-md-4.py-3.px-md-5.px-4` "Make An
   Appointment" (white bg + 2px white border variant).
7. **Services** `section.ftco-section.ftco-services-section` — kicker "What
   We Do", h2 "Services"; THREE `col-lg-4` cards (`block-3`-style: icon +
   `h3` + `p` + `a.btn-custom` "Learn More"): **Construction Services**,
   **Infrastructure Services**, **Architecture Services**.
8. **Video CTA** `section.ftco-section.video-cta-section` — left: `a.video-play-btn.glightbox`
   (80×80 amber circle, play icon) labeled "Watch Our Story"; right: h2
   "Building Dreams Into Reality Since 1982", paragraph, FOUR check bullets
   (Award-winning construction projects / Sustainable building practices /
   On-time, on-budget delivery / Safety-first approach), `a.btn.btn-primary
py-3.px-4` "Learn More About Us".
9. **Counters** `section.ftco-section-counter.img` (bg image + overlay,
   `padding 6em 0`) — FOUR counters: 3000 Completed Projects, 320 Happy
   Clients, 1000 Cup Of Coffee, 587 Engineers & Staffs.
10. **Team** `section.ftco-section` — kicker "Team & Staff", h2 "Qualified
    Engineers"; FOUR `col-lg-3` `.staff` cards: `.img` photo
    (staff-1..4.avif) with `ul.ftco-social` overlay (Twitter, Facebook,
    Instagram, Google+) + `.text` h3 name + span "Senior Engineer": Lionel
    Wurtchbach, Mike Nintido, Bea Alam, John Buffer.
11. **Portfolio** `section.ftco-gallery.ftco-section` — kicker "Portfolio",
    h2 "Projects"; SIX `col-md-4` `.gallery-wrap.img` tiles (height 340px,
    bg image work-1..6.avif): `a.icon` search (glightbox) + `.desc` span
    "Building" + h2 a "High Tower Works".
12. **Pricing** `section.ftco-section` — kicker "Our Pricing", h2 "Pricing &
    Packages"; FOUR `col-lg-3` `.block-7` cards: `.excerpt` tier name, `.price`
    `$` sup + `.number` (49K / 79K / 109K / 149K+), `.excerpt-desc` tagline
    (Small renovations / Home additions / Full home builds / Commercial
    projects), `ul.pricing-features` SIX li with `fa-check text-primary` or
    `fa-xmark` + `.disabled`, `a.btn.btn-primary.d-block.px-2.py-3` "Get
    Quote"; Premium card = `block-7.featured` with `.popular-badge` "Most
    Popular" (amber pill, top -12px centered). Enterprise features: Unlimited
    sq ft, Custom materials, Custom timeline, 10-year warranty, Full design
    team, Dedicated PM.
13. **Testimonials** `section.ftco-section.testimony-section.bg-light` —
    kicker "Testimonial", h2 "Happy Clients"; swiper carousel of FOUR slides:
    quote paragraph (placeholder copy) + avatar + name "Roger Scott" + role
    "Marketing Manager".
14. **Blog** `section.ftco-section.bg-light.ftco-no-pt` — kicker "Our Blog",
    h2 "Recent Blog"; THREE `col-lg-4` cards: `a.block-20.img` (image_1..3.avif)
    with `.meta-date` badge (span "16" + small "Jan"), `.text`: `p.meta`
    (user icon "Admin" + comment icon "3 Comments"), `h3.heading` a
    "Biggest Construction in New York, USA", `p` excerpt.
15. **FAQ** `section.ftco-section` — kicker "Frequently Ask Question", h2
    "You Want To Ask Something From Us?", paragraph; Bootstrap accordion
    (`.accordion`): items "What are the problems in construction?" and "What
    is best practice in construction?" (source repeats the second question —
    use 2 distinct items or keep 3 with the duplicate; note choice in PR).
16. **Newsletter** `section.ftco-section.newsletter-section.bg-primary`
    (`#ffa62b`, padding 60px 0) — h2 "Subscribe to Our Newsletter", subtext
    "Get the latest updates on projects, industry news, and exclusive
    offers.", `form.newsletter-form` email input (placeholder "Enter your
    email address", required) + `button.btn.btn-dark.px-4.py-3` "Subscribe".
17. **Footer** `footer.ftco-footer` (bg `#363b42`, padding 7em 0 0, text
    rgba(255,255,255,0.7)) — four columns: (1) wordmark "Mortar" + blurb
    paragraph ("A small river named Duden…"); (2) "Services" heading + THREE
    recent post links (title + "Admin 19"); (3) "Quick Links" heading — Home,
    About, Services, Project, Pricing, Contact Us; (4) "Have a Questions?"
    heading — address (203 Fake St. Mountain View, San Francisco, California,
    USA), phone (+2 392 3929 210), email (info@yourdomain.com); bottom bar:
    "Copyright © <year> All rights reserved | This template is made with ♥
    by Colorlib" → recreate as "Made with ♥ by **Component Dock**" (link
    https://www.componentdock.com/ — REQUIRED by AGENTS.md; no colorlib
    strings in the app).

## Tasks (implementation order)

1. Scaffold `apps/mortar` (copy simplest existing app; package
   `@free-react-templates/mortar`; `vite.config.ts` with `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/mortar" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-brand: #ffa62b`,
   `--color-charcoal: #3d424a`, `--color-footer: #363b42`,
   `--color-mist: #f8f9fa`, `--font-body: 'Poppins', sans-serif`. Add
   Poppins (300,400,700) Google Fonts `<link>` to `index.html` (skip Prata —
   unused in source).
4. `TopBar.tsx` — thin dark strip: left "Free Call: +1 234 456 78910";
   right "Email: buildream@info.com" (fix the source typo "Adddress") +
   social icon links (lucide has no brand glyphs — inline SVG for Twitter/X,
   Facebook, Instagram).
5. `Navbar.tsx` — `bg-charcoal` (`#3d424a`) bar: wordmark "Mortar" (white,
   bold, maybe amber accent) left; 7 links right (Home active, About,
   Services, Projects, Pricing, Blog, Contact — white, hover `text-brand`);
   mobile (< lg): hamburger (lucide `Menu`) toggling the collapse menu,
   aria-expanded.
6. `Hero.tsx` — `h-screen` section, bg image (picsum seed mortar-hero
   ~1920×1080) `bg-fixed bg-cover` + dark overlay div; centered content:
   "Since 1982" badge (small uppercase amber or rotated stamp — source
   screenshot shows it rotated slightly; a subtle `-rotate-6` reads well),
   H1 "We Will Be **Happy** To Take Care Of Your Work" (white, "Happy" in
   `text-brand`), row of two `ButtonLink`s: "Contact us" (`bg-brand`
   `text-charcoal`, radius 4px, px-8 py-4, ArrowRight icon) + "Request A
   Quote" (`bg-charcoal` text-white, same padding, ArrowRight icon); hover
   inverts (transparent + `border-brand` + `text-brand`).
7. `About.tsx` — 2-col (`lg:grid-cols-2`): left relative photo (picsum seed
   mortar-about ~800×600) with the rotated badge: absolute bottom-right
   `-rotate-90 origin-bottom-right` (or rotate the inner text to read
   horizontally) `bg-charcoal` padding-8, HardHat icon + "38" (countup) +
   "Years of experienced" white; right: kicker "Welcome to Mortar"
   (`text-brand` uppercase text-sm font-semibold), h2 "Quality and
   Affordable Constructor" (54px weight 500), paragraph, h4 "We Can Help
   You", 2×2 grid of mini services (lucide `Building2` / `FloorPlan` /
   `Users` / `Factory`, title + one-line blurb); stack on mobile.
8. `TrustBadges.tsx` — `bg-mist` (`#f8f9fa`) band: "Trusted By" kicker +
   "Companies We've Worked With" heading + 6 text logos (font-semibold
   gray-600): ABC Corp, City Dev, State Bank, Metro Health, Grand Hotels,
   Industrial Co.
9. `IntroCta.tsx` — band with bg image (picsum seed mortar-intro ~1600×600)
   - dark overlay: kicker "You May Contact Us For Construction & Renovation
     Work", h2 "We Are Great Construction Company", white `ButtonLink` "Make
     An Appointment" (bg-white text-charcoal, 2px white border, radius 4px).
10. `Services.tsx` — kicker "What We Do" + h2 "Services"; 3 cards
    (`lg:grid-cols-3`): icon (lucide: `HardHat`/`Building`/`Ruler` — pick
    from flaticon equivalents), h3 title (Construction Services /
    Infrastructure Services / Architecture Services), paragraph, "Learn
    More" link (`text-brand` font-semibold); white cards with soft shadow;
    stack on mobile.
11. `VideoCta.tsx` — split layout: left 80×80 rounded-full `bg-brand` play
    button (lucide `Play`, `text-charcoal`, aria-label "Watch Our Story");
    right: h2 "Building Dreams Into Reality Since 1982", paragraph, 4
    bullets with `Check` icons (`text-brand`), `ButtonLink` "Learn More
    About Us" (`bg-brand` text-charcoal).
12. `Counters.tsx` — bg image band (picsum seed mortar-counters ~1920×500)
    - overlay; 4 counters (countup on scroll into view): 3000 Completed
      Projects, 320 Happy Clients, 1000 Cup Of Coffee, 587 Engineers & Staffs
      (white numbers 40px+ + label).
13. `Team.tsx` — kicker "Team & Staff" + h2 "Qualified Engineers"; 4 cards
    (`lg:grid-cols-4`): photo (picsum seed mortar-staff-N ~400×500), social
    icon row (inline SVG, appears on hover overlay in source — static row is
    acceptable), h3 name, span "Senior Engineer" (`text-brand` or gray).
14. `Portfolio.tsx` — kicker "Portfolio" + h2 "Projects"; 6 tiles
    (`md:grid-cols-3`, h-[340px]) each: bg image (picsum seed mortar-work-N
    ~600×400), centered search icon (lucide `Search`, white circle),
    bottom desc: span "Building" (amber) + h3 "High Tower Works".
15. `Pricing.tsx` — kicker "Our Pricing" + h2 "Pricing & Packages"; 4 cards
    (`lg:grid-cols-4`, white, `shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)]`,
    py-10, relative): tier name, `$` sup + price (49K / 79K / 109K / 149K+),
    tagline, 6 feature rows (`Check` `text-brand` vs `X` muted + line-through
    or opacity), `ButtonLink` "Get Quote" (d-block w-60% mx-auto, uppercase
    tracking-wider); Premium card: `bg-charcoal`/highlight + absolute
    top-[-12px] centered pill "Most Popular" (`bg-brand` `text-charcoal`
    text-xs font-bold uppercase rounded-full px-4 py-1).
16. `Testimonials.tsx` — `bg-mist` section; kicker "Testimonial" + h2
    "Happy Clients"; state-driven carousel (lucide ChevronLeft/ChevronRight,
    or dots — source uses swiper) of 4 slides: quote paragraph, avatar
    (picsum seed mortar-client-N, rounded-full), name "Roger Scott" bold +
    role "Marketing Manager".
17. `Blog.tsx` — `bg-mist` (pt only, `ftco-no-pt` in source); kicker "Our
    Blog" + h2 "Recent Blog"; 3 cards (`lg:grid-cols-3`): image (picsum seed
    mortar-post-N ~600×400) with absolute date badge (day "16" bold + month
    "Jan" small, `bg-brand` or dark), meta line (lucide `User` "Admin" +
    `MessageCircle` "3 Comments"), h3 "Biggest Construction in New York,
    USA", excerpt.
18. `Faq.tsx` — kicker "Frequently Ask Question" + h2 "You Want To Ask
    Something From Us?" + paragraph; accordion (state-driven, chevron
    rotate, aria-expanded + aria-controls) with 2 items: "What are the
    problems in construction?" / "What is best practice in construction?";
    only one open at a time.
19. `Newsletter.tsx` — `bg-brand` (`#ffa62b`) band py-[60px]: h2 "Subscribe
    to Our Newsletter" + subtext; form: email input (label sr-only or
    visible, required) + dark `Button` "Subscribe" (`bg-charcoal` text-white
    px-4 py-3, radius 4px); show success state on submit.
20. `Footer.tsx` — `bg-footer` (`#363b42`) `pt-28` text-white/70: 4 columns
    (`lg:grid-cols-4`): wordmark "Mortar" + blurb; "Services" (3 recent post
    links); "Quick Links" (Home, About, Services, Project, Pricing, Contact
    Us); "Have a Questions?" (MapPin address, Phone +2 392 3929 210, Mail
    info@yourdomain.com); bottom bar (`border-t border-white/10`): centered
    "Copyright © <year> All rights reserved | Made with ♥ by **Component
    Dock**" — link https://www.componentdock.com/ (REQUIRED, no colorlib
    strings in the app).
21. `App.tsx` — compose TopBar + Navbar + main (Hero, About, TrustBadges,
    IntroCta, Services, VideoCta, Counters, Team, Portfolio, Pricing,
    Testimonials, Blog, Faq, Newsletter) + Footer; document title "Mortar —
    Construction Company Template".
22. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements.
23. Run `scripts/verify-app.sh mortar` (typecheck + lint + coverage tests +
    build) until green.
24. Update TEMPLATES.md lines 553 AND 1337 `[ ]` → `[x]` (BOTH copies) with
    surge URL + homepage after deploy; `npm run readme:status`; commit
    `feat: Mortar — construction company template (ColorLib Buildream)`;
    PR → main → merge immediately.

## Fidelity gotchas

- **TWO TEMPLATES.md copies** (lines 553, 1337): BOTH must be marked `[x]`.
- **Brand color is `#ffa62b` amber, not Bootstrap blue** — the theme
  overrides `.btn-primary` with `background: #ffa62b !important; color:
#3d424a !important`. All primary buttons are amber with dark charcoal
  text; hover flips to transparent bg + `#ffa62b` border + `#ffa62b` text.
- **The counter badge is rotated `-90deg`** (`.counter-wrap {
transform: rotate(-90deg); bottom: 107px; right: -107px }`) — the badge
  hangs off the bottom-right corner of the about photo and reads vertically.
  Recreate with `-rotate-90` and compensate the anchor (`right: -107px`).
- **Hero CTA buttons are large** (`p-4 py-3` ≈ 16px 16px 12px 12px +
  padding) with arrow icons (`fa-solid fa-arrow-right` → lucide
  `ArrowRight`).
- **Pricing "Most Popular" pill** is the amber badge (`bg #ffa62b`, text
  `#3d424a`, `border-radius: 20px`, `top: -12px`, centered) on the featured
  card; the pricing card buttons are uppercase letter-spaced, width 60%,
  centered.
- **Newsletter band is `bg-primary`** = the theme's `#ffa62b` — the whole
  band is amber, not white with an amber button.
- **Two questions in the FAQ**; the source's third item duplicates the
  second — use 2 distinct items or keep 3 with a paraphrase (document the
  choice in the PR).
- **Footer credit** must be Component Dock (https://www.componentdock.com/),
  NOT the source's ColorLib credit — required by AGENTS.md, and no colorlib
  strings may appear anywhere in `apps/mortar`.
- **Images**: use `https://picsum.photos/seed/mortar-<n>/<w>/<h>`
  (deterministic); never copy the source `.avif` assets. Social brand icons
  (Twitter/Facebook/Instagram/Google+) have no lucide glyphs — inline SVG.
- **Fonts**: Poppins only (300/400/700); Prata is loaded by the source but
  never applied in its CSS — do not add it.
- **Top bar typo**: source says "Email Adddress:" — fix to "Email
  Address:" (or keep for exact fidelity; document the choice).
- **Counters animate** via countup on scroll (waypoints) — recreate with a
  scroll-into-view hook; static numbers are acceptable fallback but the
  countup is part of the design.
