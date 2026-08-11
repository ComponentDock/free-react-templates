# Parley (ColorLib Negotiate) — Tasks & Design Notes

> Recreation of ColorLib "Negotiate — Free Bootstrap 4 Template by Colorlib"
> (https://colorlib.com/wp/template/negotiate/) under the NEW name **Parley**
> (a discussion/negotiation between parties — the consulting theme; single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md — verified 2026-08-11), per the monorepo
> naming mandate (never reuse the ColorLib source name). TEMPLATES.md
> category: Bootstrap (216).

## Design notes (replication findings)

- **Original:** ColorLib "Negotiate" — free Bootstrap 4 CONSULTING-AGENCY
  website template ("We Are The Best Consulting Agency" hero, "Free
  Consulting" quote form, Mission/Vision/Value about, teal animated
  counters, 6-item case-study gallery, 6-item "Why Choose Us?" grid, 5-slide
  testimonials, 3-post blog, 4-widget black footer with newsletter). The
  recreation brands itself **Parley**.
- **Live preview analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/negotiate/` — HTTP 200, ~42 KB HTML +
  `css/style.css` ~87 KB (curl). NOT the Cloudflare-Pages "Astro" pattern —
  this one is live on preview.colorlib.com. The TEMPLATES.md screenshot
  (`negotiate-free-template.jpg`, 1200×946, viewed in browser) matches the
  live render 1:1.
- **Visual design (screenshot):** white top bar (bold black "NEGOTIATE"
  logo + "CONSULTING AGENCY" tagline + 3 contact columns) → solid TEAL nav
  strip (7 links + search input right) → wide business-meeting photo hero
  with dark overlay, centered white uppercase subheading + huge white
  headline + TEAL pill "Our Services" button + carousel dots. Below: left
  white "Free Consulting" card (teal heading, white fields, PINK submit);
  right "Negotiate — A Consulting Agency" block + 2×2 service cards with
  teal icon circles. Screenshot cuts off after the services grid; the rest
  was captured from the live DOM + CSS.
- **Section order (1:1, verified from live DOM):**
  1. **Top bar (`.topper`, white)** — map-pin "203 Fake St. Mountain View,
     San Francisco, California, USA" · phone "+2 392 3929 210" · envelope
     "info@yourdomain.com".
  2. **Navbar (`.ftco-navbar-light`, SOLID TEAL `#00bdaa !important`)** —
     brand "Parley" + `<span>` tagline "Consulting Agency" · links Home /
     About / Team / Case Studies / Services / Blog / Contact · search input
     (placeholder "Search"). NOTE: navbar is a solid teal bar, NOT
     transparent-over-hero.
  3. **Hero slider (`.home-slider` owl)** — 2 slides; each: photo (bg_1 /
     bg_2) + dark teal overlay (CSS `background: #000000; background:
#00bdaa`), subheading "Parley Consulting" (14px/700/uppercase/
     letter-spacing 2px/white), h1 (60px/900/white, 40px mobile, inner
     `<span>` = block second line): "We Are The Best Consulting Agency" ·
     "We Help to Grow Your Business", pill `btn-primary` "Our Services".
     Carousel dots bottom-center.
  4. **Free Consulting (`.ftco-consult`)** — `.consult-wrap` WHITE card
     overlapping the hero: `margin-top: -100px` ≥992px + shadow `0 -15px
39px -13px rgba(0,0,0,0.35)`. LEFT: h2 "Free Consulting" + form: First
     Name · Last Name · select "Select Guidance" (Finance/Business/Auto
     Loan/Real Estate/Other Services) · Phone · Message (textarea) · submit
     "Request A Quote" as `btn-secondary` PINK `#f1648f` pill. RIGHT: brand
     "Parley / A Consulting Agency" + 2×2 service cards (.services, icon
     circle + h3 + blurb): Business Solution · Financial Analysis ·
     Marketing Strategy · Investment Planning.
  5. **Intro band #1 (`.ftco-intro img`)** — photo + `:after` overlay
     `linear-gradient(45deg, #48a7f0 0%, #00bdaa 100%)` opacity .9; white
     h2 "You Always Get the Best Guidance" + `btn-link` "Request A Quote" +
     `btn-primary` "Our Services".
  6. **About + counters (`.ftco-about` + `.ftco-counter`)**
     — subheading "Welcome to Parley" · h2 "The Smartest Thing To Do With
     Your Consulting Business" · lead lorem paragraph · TABS: Our Mission /
     Our Vision / Our Value (each a lorem paragraph) · right photo
     (about.jpg) · counter row BELOW: 3 `.block-18` (icon + teal number
     50px/400 `#00bdaa` + label): **1387 Happy Clients · 310 Success
     Reports · 35 Experienced** (labels verbatim from source).
  7. **Case Studies** — subheading "Projects Done" · h2 "Case Studies" ·
     intro lorem · 6 `.gallery` items (height 350px, photo bg): category
     tag (Consulting / Marketing / Financing / Audit & Taxes / Financing /
     Real Estate) + h3 "Consultacy Solutions" + lorem; hover → teal
     overlay + 50px icon circle + PINK `btn-secondary` "Request Quote".
  8. **Why Choose Us?** — subheading "Services" · h2 "Why Choose Us?" ·
     intro lorem · 6 icon items (3-col): Business Analysis · Business
     Consulting · Business Insurance · Global Investigation · Audit &
     Evaluation · Marketing Strategy.
  9. **Intro band #2** — identical to #5 (repeated band).
  10. **Testimonials (`.testimony-section`)** — subheading "Testimonies" ·
      h2 "Our Clients Says" · intro lorem · owl carousel 5 slides: avatar +
      quote + name + position (Racky Henderson—Father · Henry Dee—Business-
      woman · Mark Huff—Businesswoman · Rodel Golez—Businesswoman · Ken
      Bosh—Businesswoman; positions verbatim). Owl prev/next arrows below.
  11. **Blog** — subheading "Blog Posts" · h2 "Recent Blog" · intro lorem ·
      3 `.blog-entry` cards: photo + date badge (15 · Oct. · 2019) + h3
      "Finance And Legal Working Streams Occur Throughout" (placeholder on
      all 3) + lorem + meta (Admin · 3) + "Read More".
  12. **Footer (BLACK, 14px, padding 6em 0)** — widgets: "Have a
      Questions?" (address + phone + email + social FB/Twitter/Googleplus
      with sr-only labels) · "Links" (Home/About/Services/Projects/Contact)
      · "Recent Blog" (2 mini entries "Even the all-powerful Pointing has
      no control about" + meta Oct. 16, 2019 · Admin · 19) · "Subscribe
      Us!" (email input "Enter email address" + "Subscribe" submit) ·
      copyright bar (rephrase "© <year> Parley — All rights reserved | Free
      consulting template").
- **Design tokens (from `css/style.css`, verified 2026-08-11):**
  - Brand: **`#00bdaa`** (teal — navbar bg, hero overlay, `.btn-primary`
    bg, counter numbers, intro gradient end, accents), **`#48a7f0`** (blue
    — intro gradient start), **`#f1648f`** (pink — `.btn-secondary`
    buttons). Neutrals: `#000000` (footer bg), `#fff`, `#212529` (body),
    `#6c757d` (muted), `#fafafa` (light section bg).
  - Font: **"Poppins", Arial, sans-serif** (Google Fonts Poppins 400/600/
    700/900).
  - Type: hero h1 60px/900/white (40px mobile); `.heading-section h2`
    34px/600 (28px mobile); subheading 14px/600 uppercase (hero: 700 +
    letter-spacing 2px); counter number 50px/400; footer 14px.
  - Buttons: **pill — `border-radius: 40px`**, `box-shadow: none`; primary
    teal `#00bdaa`/white, hover → transparent bg + teal text; secondary
    pink `#f1648f`/white; white variant white bg/teal text.
  - Sections: hero photo + dark teal overlay; intro bands photo + 45°
    `#48a7f0`→`#00bdaa` gradient (opacity .9) + white content; consult card
    WHITE + -100px overlap + big shadow; footer black.
  - Spacing: `.ftco-section` 7em 0 (variants no-pt/no-pb); footer 6em 0;
    2×2 services grid; 3-col why-choose-us; 3-col blog; 350px gallery
    items; counter row of 3.
  - Radius family: 40px pills; 50% icon circles/avatars; else flat.
  - Icons: flaticon glyphs → lucide-react equivalents (briefcase,
    bar-chart-3, pie-chart, trending-up, shield, search, map-pin, phone,
    mail, quote, chevrons). Brand icons NOT in lucide-react → inline SVG
    paths.
- **Recreation decisions:** Tailwind re-implementation (NO Bootstrap/owl
  deps); solid TEAL navbar (NOT transparent — matches `.ftco-navbar-light`
  `background: #00bdaa !important` and the screenshot); hero as a 2-slide
  carousel with indicators (implementable with a tiny state machine or
  autoplay + dots — no slider dep); consult card overlap via negative
  margin on ≥md; tabs (Mission/Vision/Value) as accessible tablist;
  counters count up on view (jsdom-safe: fake timers inside `act()`);
  gallery hover overlay via group-hover; testimonials carousel 5 slides
  (prev/next + dots); form submits show success state (assert input gone);
  newsletter same; Poppins via Google Fonts `<link>` in index.html; doc
  title "Parley — Consulting Agency Template"; brand "Negotiate" →
  "Parley" everywhere ("Parley Consulting" subheading, "Welcome to
  Parley", "Parley — A Consulting Agency"). Placeholder images
  `https://picsum.photos/seed/parley-<n>/<w>/<h>` (verify the hero seed
  renders a business/meeting scene — seed-screening method). Source copy
  kept verbatim (headlines, field labels, select options, counter labels,
  testimonial names/positions, nav links, footer link list).

## Tasks (implementation order)

- [ ] Scaffold `apps/parley` (copy simplest existing app, rename package to
      `@free-react-templates/parley`; NOT `apps/negotiate`)
- [ ] `@theme` tokens: `--color-brand: #00bdaa` (teal), `--color-accent:
    #48a7f0` (blue), `--color-secondary: #f1648f` (pink), ink `#212529`,
      muted `#6c757d`, light `#fafafa`, radius-pill 40px
- [ ] `index.html`: Poppins Google Fonts `<link>` (400;600;700;900), title
      "Parley — Consulting Agency Template"
- [ ] Top bar: 3 contact items (map-pin address · phone · envelope email)
      with icons; white bg
- [ ] Navbar: SOLID teal bg, brand "Parley" + "Consulting Agency" tagline,
      links Home/About/Team/Case Studies/Services/Blog/Contact, search
      input; mobile menu toggle
- [ ] Hero slider: 2 slides, photo + dark teal overlay, uppercase
      subheading "Parley Consulting", h1 (60px/900), teal pill "Our
      Services", dots; slide state via useState (no slider dep)
- [ ] Free Consulting: white card overlapping hero (-mt on md), heavy
      shadow; left h2 "Free Consulting" + form (First/Last Name, Select
      Guidance select, Phone, Message, pink "Request A Quote" submit);
      right brand block + 2×2 service cards (icon + title + blurb)
- [ ] Quote form validation: required fields, success state replaces form
      (assert input absent via queryByLabelText)
- [ ] Intro band component (×2): photo + 45° `#48a7f0`→`#00bdaa` gradient
      overlay, white h2 "You Always Get the Best Guidance", "Request A
      Quote" link + teal "Our Services" pill
- [ ] About: subheading "Welcome to Parley", h2, lead paragraph, Mission /
      Vision / Value tablist (accessible, tab content swaps), right photo
- [ ] Counters: 3 blocks (icon + teal number + label): 1387 Happy Clients
      · 310 Success Reports · 35 Experienced; count-up on view (fake
      timers in act())
- [ ] Case Studies: subheading "Projects Done", h2 "Case Studies", 6
      gallery items (350px, category tag + title), hover overlay + pink
      "Request Quote"
- [ ] Why Choose Us?: subheading "Services", h2 "Why Choose Us?", 6 icon
      items in 3-col grid
- [ ] Testimonials: subheading "Testimonies", h2 "Our Clients Says", 5
      slides (avatar, quote, name, position), prev/next controls
- [ ] Blog: subheading "Blog Posts", h2 "Recent Blog", 3 cards (date badge
      15 Oct 2019, title, blurb, Admin · 3, Read More)
- [ ] Footer: black, 4 widgets (Have a Questions? + social SVGs · Links ·
      Recent Blog · Subscribe Us! newsletter), copyright line
- [ ] Newsletter: email validation, success state replaces input
- [ ] Tests first (red) → implementation (green); 100% coverage; watch the
      duplicate-nav-links query pitfall (getAllByRole, index mobile last)
- [ ] Phone: `phone = '+2 392 3929 210'` in data.ts, href computed at
      runtime (`'tel:' + phone.replace(/\D/g, '')`) + href assertion test
      (never write a literal tel: URI)
- [ ] `scripts/verify-app.sh parley` passes; `npm run spec:validate`
- [ ] PR: source template (ColorLib Negotiate), preview URL, tokens, what
      differs; merge immediately; `[~]`→`[x]` + surge URL +
      `npm run readme:status`
