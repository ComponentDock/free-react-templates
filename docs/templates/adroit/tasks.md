# Adroit (ColorLib Saita) — Tasks & Design Notes

> Recreation of ColorLib "Saita" — free Bootstrap 5 digital-agency website
> template (https://colorlib.com/wp/template/saita/) under the NEW name
> **Adroit** ("adroit" — clever and skillful, fitting a digital agency;
> single lowercase word, no collision with `apps/`, `openspec/specs/` or
> `docs/templates/` — verified 2026-08-14), per the monorepo naming mandate
> (never reuse the ColorLib source name). Full spec:
> `openspec/specs/template-adroit/spec.md`.

## Design notes (replication findings)

- **Original:** ColorLib "Saita" — digital-agency one-pager, Bootstrap 5
  based (bootstrap + font-awesome 4.7 + ionicons 4.5 + tiny-slider +
  glightbox + aos + datepicker + animate) + custom `css/style.css` (~79 KB).
  Brand name used in the source copy: "Saita". TEMPLATES.md category:
  **Bootstrap 5 (89)**, first occurrence at line 623 (`- [ ]`, source NOT
  shipped anywhere). DUP-ROW TRAP: the `saita` slug also appears at line
  1156 (**Business (365)**) — both `- [ ]` rows of the SAME template; ONE
  implementation covers both rows (mark all `[x]` with the same surge URL at
  bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/saita/` — HTTP 200, ~57 KB HTML
  (REACHABLE). Custom CSS in `css/style.css` (~79 KB, carries all tokens);
  plus bootstrap/font-awesome/ionicons/tiny-slider/glightbox/aos/datepicker
  helpers. Screenshot `saita-colorlib-template.jpg` (viewed in browser)
  matches the live DOM: teal→deep-teal gradient hero with cutout
  man-with-tablet photo, white pill CTAs, blue service cards with yellow
  circular icons, lavender team section, light-lavender footer.
- **Visual design:** bright modern digital-agency one-pager. Hero =
  full-width diagonal gradient `#1fc1a9` → `#2889a6` with left-aligned white
  bold headline "We Are Digital Agency Helping To Boost Your sales",
  paragraph, **Start A Project** white pill (`btn btn-white py-3 px-4`: white
  bg / teal text / 1px white border, hover → transparent + white text) +
  **Watch the Video** outlined pill with play icon, right-side cutout photo
  `hero-1.png` (man holding tablet, `img-fluid`). 4 feature cards: first
  white + royal-blue `#5579fa` circular chart icon; other three `#5579fa`
  blue bg + yellow `#feb82c` circular icons + white text. Section headings
  use an uppercase muted eyebrow ("About Us", "Services", "Projects", "Our
  Team", "Our Pricing", "Testimonial", "Our Blog") above a dark `#212529`
  h2. Body font **Poppins** (declared `"Poppins", Arial, sans-serif`).
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.navbar.ftco-navbar-light`, transparent over hero):
     brand **"Saita."** left, links **Home · About · Work · Services ·
     Pricing · Blog · Contact** right (white); scrolled → solid `#052c43`
     navy bar. Recreation: brand "Adroit.", 7 links, hamburger → mobile
     panel.
  2. **Hero** (`section.hero-wrap`, `linear-gradient(135deg, #1fc1a9 0%,
#2889a6 100%)`, white `:after` accent): left col — h1 **"We Are Digital
     Agency Helping To Boost Your sales"** (white bold), p ("A small river
     named Duden flows by their place…"), **Start A Project** white pill +
     **Watch the Video** outlined pill w/ play icon; right col — cutout
     `hero-1.png` (man + tablet).
  3. **Feature cards** (`ftco-section ftco-no-pt` + `services-wrap`): 4
     cards — **"We have experience for your project"** (white bg, blue
     `#5579fa` chart icon) · **"We know how to save your time and money"** ·
     **"We will bring your new pre-qualified customer"** · **"We can boost
     your project sales"** (blue `#5579fa` bg, white text, yellow `#feb82c`
     icons). Icon circle + h2 + short p.
  4. **About** (`ftco-section ftco-no-pt`, white split): eyebrow **About
     Us**, h2 **"We Design, Build Brands & Digital Projects"**, 2 lorem
     paragraphs, **Learn More** (`btn btn-primary py-3 px-4`, teal);
     right col photo `about.jpg` (background-image on `col-lg-6
order-lg-last`).
  5. **Counter strip** (`ftco-section-counter.img`, bg `images/bg_3.jpg` +
     `#5579fa` overlay): **60 Year of Experienced · 9200 Satisfied Customers
     · 5800 Project Completed · 100 Get Awards** (big white numbers + small
     labels).
  6. **Services** (`ftco-section bg-light` `#f8f9fa`): eyebrow **Services**,
     h2 **"Our Exclusive Services We Offer For You"**; 8 cards — **Creative
     Design · Digital Marketing · Application Design · Web Development ·
     Branding · Graphic Design · Email Marketing · Web Design**; `#5579fa`
     circular icon (hover → `#feb82c` icon, card bg → `#5579fa` white text).
  7. **Quote + progress + portfolio** (`ftco-gallery ftco-no-pb`): left —
     blockquote **"Marketers need to build digital relationships and
     reputation before closing a sale"** + **Request A Quote** button; right
     — eyebrow **Projects**, h2 **"Featured Projects"**, filters **All · Web
     Design · Web Development · Branding · Marketing · UI/UX Design**,
     progress bars (**Design & Development 70% · Branding 85% · Marketing
     75%**, `#b088f9` bars), gallery grid of 8 cards (`gallery-1..8.jpg`,
     titled **"Innovative Design"**, zoom icon `#feb82c` on hover).
  8. **Team** (`ftco-section bg-quarternary` `#b088f9`): eyebrow **Our
     Team**, h2 **"Meet Our Team"**; 4 cards (`staff-1..4.jpg`): **Jason
     Smith (President & CEO) · Jeffrey Rockenson (Executive Vice President)
     · Jason Smith (General Manager) · Jason Smith (Strategic Consultant)** —
     photo, name, role, blurb, socials (twitter/fb/google+/ig); hover: text
     → `#feb82c`.
  9. **Pricing** (`ftco-section`, white): eyebrow **Our Pricing**, h2 **"Find
     Plan that is Right for You"**; 4 cards (`.block-7`, bg `#f9faff`, hover
     → white + yellow CTA): **Free $50/mos · Basic Plan $79/mos ·
     Professional $89/mos · Startup $99/mos** — 6 features each (Live Chat
     Support, Minimum of 10 users, Easily Track Payments, Web Conference
     Support, Group Management of users, Remote Monitory) + **Get Started**.
  10. **Testimonials** (`ftco-section testimony-section bg-light` `#f8f9fa`):
      eyebrow **Testimonial**, h2 **"Happy Customers"**; tiny-slider carousel
      (2 slides): avatar `person_1..4.jpg` + **"Roger Scott" (Marketing
      Manager)** + lorem quote; pagination dots.
  11. **Blog** (`ftco-section`, white): eyebrow **Our Blog**, h2 **"Recent
      From Blog"**; 3 cards (`image_1..3.jpg`): meta **Admin · Mar. 01, 2021
      · 3 Comments**, h3 **"Improving Your Design & Programming Skills"**, p,
      **Read More**.
  12. **Intro CTA** (`ftco-intro-2.img`, bg `bg_3.jpg` + `#5579fa` overlay):
      eyebrow **"Prepare for takeoff"**, h1 **"Looking for business
      opportunity?"**, **Get Started** button.
  13. **Footer** (`footer.ftco-footer`, bg `#f4eefe` lavender): col 1 —
      brand "Adroit." + about p + social icons; col 2 — **Recent Posts** (2
      items: date + admin + title); col 3 — **Services** (8 links: Creative
      Design, Digital Marketing, Application Design, Web Development,
      Branding, Graphic Design, Web Design, Email Marketing Consulting); col
      4 — **Have a Questions?** (address **203 Fake St. Mountain View, San
      Francisco, California, USA** · phone **+2 392 3929 210** · email
      **info@yourdomain.com**); bottom bar `.bg-darken` — copyright
      "© <year> All rights reserved | This template is made with by Colorlib"
      → **Component Dock link (mandatory)**
      `https://www.componentdock.com/`.
- **Design tokens (from `style.css`):** brand teal `#1fc1a9` (btn-primary,
  links, hero gradient start, btn-white text), deep teal `#2889a6` (hero
  gradient end), royal blue `#5579fa` (service icons, active card bg, counter
  - intro overlays, footer brand; active-2 `#6e8dfb`, active-3 `#87a0fb`),
    purple `#b088f9` (bg-quarternary team, progress-bar, staff socials),
    yellow `#feb82c` (icon hovers, gallery zoom, pricing hover CTA, staff
    hover text), navy `#052c43` (scrolled navbar, bg-darken), lavender
    `#f4eefe` (footer; `#e0d1fd` footer bg-darken), card `#f9faff` (block-7,
    blog-entry), light `#f8f9fa` (bg-light sections), headings `#212529`;
    body Poppins 16px; btn radius 4px base, hero white pill py-3 px-4; section
    padding ~7em; hero white `:after` accent.

## Implementation tasks (TDD, in order)

- [ ] Scaffold: copy simplest existing app → `apps/adroit`, rename package
      `@free-react-templates/adroit`, register workspace
      (`npm install --package-lock-only`), `public/CNAME` =
      `adroit.free.componentdock.com`, homepage
      `https://adroit.free.componentdock.com`; footer MUST link
      `https://www.componentdock.com/`
- [ ] `@theme` tokens: `--color-teal: #1fc1a9`, `--color-teal-deep:
    #2889a6`, `--color-royal: #5579fa`, `--color-purple: #b088f9`,
      `--color-amber: #feb82c`, `--color-navy: #052c43`,
      `--color-lavender: #f4eefe`, `--color-card: #f9faff`,
      `--color-mist: #f8f9fa`, `--color-ink: #212529`; font Poppins via
      Google Fonts `<link>` in `index.html`
- [ ] Navbar (transparent over hero, ADROIT brand + Home/About/Work/
      Services/Pricing/Blog/Contact, solid `#052c43` on scroll, hamburger →
      mobile panel)
- [ ] Hero (diagonal gradient `#1fc1a9`→`#2889a6`, white h1 "We Are Digital
      Agency Helping To Boost Your sales" + p, Start A Project white pill +
      Watch the Video outlined pill w/ play icon, cutout photo right)
- [ ] Feature cards (1 white + 3 blue `#5579fa` with yellow icons; 4
      headings + paragraphs; responsive 4→2→1)
- [ ] About (eyebrow About Us + "We Design, Build Brands & Digital Projects" + paragraphs + Learn More teal button + photo right)
- [ ] Counter strip (photo bg + `#5579fa` overlay; 60 / 9200 / 5800 / 100
      with labels)
- [ ] Services (`#f8f9fa` band, "Our Exclusive Services We Offer For You",
      8 cards w/ circular icons; hover: icon → yellow, card → blue)
- [ ] Quote + progress + portfolio (blockquote + Request A Quote; progress
      bars 70/85/75% purple; Featured Projects + 5 filters + 8 gallery
      cards "Innovative Design" w/ zoom hover)
- [ ] Team (`#b088f9` section, "Meet Our Team", 4 staff cards w/ socials;
      hover text → yellow)
- [ ] Pricing ("Find Plan that is Right for You", 4 `#f9faff` cards
      $50/$79/$89/$99 with 6 features + Get Started)
- [ ] Testimonials (`#f8f9fa`, "Happy Customers", Roger Scott carousel w/
      avatars + dots)
- [ ] Blog ("Recent From Blog", 3 post cards w/ meta + Read More)
- [ ] Intro CTA (bg_3-style photo + `#5579fa` overlay, "Prepare for
      takeoff" / "Looking for business opportunity?" + Get Started)
- [ ] Footer (`#f4eefe`: brand+about+socials / Recent Posts / Services /
      Have a Questions? contact; bottom bar with Component Dock credit)
- [ ] Placeholder images: `picsum.photos/seed/adroit-<n>/<w>/<h>` — hero
      cutout (man w/ tablet), about photo, counter/intro bg, 8 gallery, 4
      staff, 4 testimonial avatars, 3 blog; screen seeds before pinning
      (seed-screening method: brightness/blue metric + browser_vision on
      top candidates)
- [ ] `scripts/verify-app.sh adroit` green (typecheck + lint + 100%
      coverage + build); spec:validate; PR with source/preview/tokens
      noted; bookkeeping: both `- [ ]` rows (lines ~623, ~1156) → `[x]` +
      same surge URL + `npm run readme:status`
