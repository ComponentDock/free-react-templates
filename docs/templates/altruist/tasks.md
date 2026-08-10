# Altruist (ColorLib Cause) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-altruist`.

## Design notes (replication findings)

- **Original:** ColorLib "Cause" —
  `https://colorlib.com/wp/template/cause/` (Bootstrap category). TEMPLATES.md
  lines **358** and **1252** — TWO duplicate rows (Bootstrap + Charity
  categories), both `- [ ]`; mark BOTH `[x]` when done. Recreation uses the
  NEW name **Altruist** (single word, no collision with `ls apps/` or spec
  folders).
- **Preview URL:** `https://preview.colorlib.com/theme/cause/` — **HTTP 200**
  (41.5 KB), analyzed live. Stylesheet: `css/main.css` (65.4 KB, all custom
  tokens) + bootstrap/owl/linearicons/font-awesome deps. Owl carousel drives
  the hero, condition, and events sections; header scroll state via
  `header-scrolled` class; video play opens a youtube modal; newsletter
  posts to Mailchimp.
- **Screenshot** (`cause-free-template-1.jpg`, 1200×946, verified via browser
  vision): leaf-icon logo + serif "Cause" wordmark; nav HOME/ABOUT/CAUSES/
  EVENTS/BLOG▾/PAGES▾/CONTACT (the search bar shown is the colorlib.com
  preview chrome, NOT part of the template); hero split-screen — left serif
  headline "New way to give back" + lorem + teal circular play button "Watch
  our intro video"; right a boy-running-through-a-field photo with a
  semi-transparent WHITE donation box overlay ("Enter Monthly Donation
  Amount", USD, 125.00, green "Donate Now"); centered carousel arrows below;
  "Our Major Causes" serif heading. Clean, airy, minimalist; white bg, dark
  text, green + teal accents.
- **Visual design (DOM + CSS tokens + screenshot):**
  - Primary: **#61c524** (green — `.primary-btn` bg, logo link, nav
    active/hover, cause title hover, progress fill, stat color3, form
    focus).
  - Secondary: **#46dbb7** (teal — `.collection-box:hover`, condition
    bullets, footer `.click-btn`, footer social hover, owl up-arrow).
  - Stat colors (collection boxes): color1 `#f9a22b` (orange), color2
    black, color3 `#61c524`, color4 `#a978e0` (purple).
  - Fonts: headings **Playfair Display** (600, black); body **Roboto**
    16px/500 `#777777`, line-height 1.625em; section h2 36px; card h3 /
    event h4 21px; stat h3 36px; nav 12px.
  - Buttons: `.primary-btn` green bg, white uppercase 14px, padding 0 35px,
    line-height 47px, **radius 0**; hover = outline (transparent + green
    border/text); small variant 13px / 0 30px; footer `.click-btn` teal
    `#46dbb7` radius 0 8px 12px.
  - Sections: hero `#fff`; causes white; collection **#f9f9ff**; condition
    white; donation banner = photo bg + dark overlay (white text); form
    white; brand white; events white (cards `#f9f9ff`); footer **#04091e**
    (newsletter input `#14192c`).
  - Rhythm: `section-gap` = 150px top+bottom; `section-title` centered,
    padding-bottom 95px.
  - Cause progress: 10px, radius 0, track white, fill green (76%).
  - `.donation-box`: white, padding 50px (20px mobile), shadow
    `0 20px 50px rgba(153,153,153,0.2)`; inputs bg `#f9f9ff`, border
    `#ddd`, height 50px, 18px, radius 0; `.donation-type` padding 20px,
    border `#ddd`, labels Playfair 14px bold.
  - `.single-event`: bg `#f9f9ff`, padding 30px 40px, margin-top 45px.
  - `.single-cause`: border `#eee`; `.middle` bg `#f9f9ff`, border-top/
    bottom `#eee`.
  - Header: fixed, transparent over hero; scrolled `rgba(0,0,0,0.8)`;
    mobile `#222`; links `#333` 12px, green active/hover.
- **Section order (1:1, index page):**
  1. `header#header` (fixed) — logo (img → recreate "Altruist" text + leaf/
     heart lucide icon) + nav: Home (active), About, Causes, Events, Blog ▾
     (Blog Home, Blog Single), Pages ▾ (Donation, Event Details, Elements),
     Contact.
  2. Hero `home-banner-area` (white, owl ×2 slides) — left: h1 "New way to
     give back" (Playfair), lorem p, "Watch our intro video" play link
     (youtube modal); right: photo + `.donation-box` (label "Enter Monthly
     Donation Amount", USD select, input placeholder "125.00", green
     "Donate Now"). Rotated up/down owl arrows on the left edge.
  3. `causes-area` (white) — section-title "Our Major Causes" + blurb; 3
     `.single-cause` cards: photo, h3 "Help Restoring Uganda's Water
     Pipelines Construction" (green hover), lorem, 76% green progress bar,
     stats "76% Funded / $7,689 Pledged / 29 Days Remaining", "View
     Details" link + green "Donate Here" btn.
  4. `collection-area` (#f9f9ff) — "Experience / How your Donation Reach
     Over Years" + 4 white stat boxes: USD 21 M 2015 / USD 15 M 2016 /
     USD 23 M 2017 / USD 25 M 2018 (numbers 36px colored orange/black/
     green/purple; teal hover).
  5. `condition-area` (white, owl ×2 slides) — photo (c1.jpg) + "New way to
     give back" h1 + 2–3 lorem paragraphs + teal-bullet checklist; owl
     arrows right side.
  6. `donation-area` (photo bg + dark overlay, white text) — h1 "Donate to
     help People Around the World" + lorem p ("Las Vegas has more than
     100,000 hotel rooms…").
  7. `donation-form-area` (white, `margin-top: -170px` overlap) —
     `.donation-box`: USD select, amount input (125.00), `.donation-type`
     radios **One Time** / **Ongoing** ("Donate your amount for this
     session only"), green "Donate Now".
  8. `brand-area` (white) — 5 partner logo images (b1–b5).
  9. `event-area` (white, owl ×3) — "Upcoming Events" + blurb; 3
     `#f9f9ff` cards: h6 date "12th September, 2018" + h4 title link
     "Help Restoring Uganda's Water Pipelines Construction" (green hover).
  10. `footer-area` (#04091e) — About Us (lorem + copyright credit line),
      Newsletter ("Stay update with our latest" + email input + teal
      click-btn), Follow Us ("Let us be social" + socials, teal hover).
- **Behavior:** header fixed, transparent → dark on scroll; hero/condition/
  events are owl carousels (static grids OK on desktop, arrows decorative);
  video → modal; donation forms (hero + banner) validate client-side with
  success state; newsletter validates; one-page recreation with nav links as
  in-page anchors.

## Tasks (implementation order)

- [ ] `apps/altruist` scaffold (copy simplest existing app; package
      `@free-react-templates/altruist`; `injectUiSource()` in vite.config;
      register workspace + `npm install` at root so package-lock.json
      updates)
- [ ] `src/index.css` theme tokens: `--color-accent: #61c524`,
      `--color-teal: #46dbb7`, stat colors `#f9a22b` / black / `#61c524` /
      `#a978e0`, body Roboto 16px/1.625 `#777777`, headings Playfair Display
      600 black (Google Fonts `<link>` in index.html: Playfair Display +
      Roboto), `bg #f9f9ff`, footer `#04091e`, input bg `#14192c`,
      section-gap 150px, section-title 95px
- [ ] `Header` — fixed, transparent over hero → `rgba(0,0,0,0.8)` on
      scroll; logo (leaf/heart lucide + "Altruist"); 7 links + Blog/Pages
      dropdowns (aria-expanded); mobile slide-in menu (Escape/backdrop
      close)
- [ ] `Hero` — white split: h1 "New way to give back" + lorem + play link
      (video modal); photo + `.donation-box` overlay (label, USD select,
      amount input 125.00, green square "Donate Now"; validation/success,
      no reload)
- [ ] `CausesSection` — centered "Our Major Causes" + 3 cards: photo,
      title (green hover), lorem, 10px 76% green progress, stats row
      (76% Funded / $7,689 Pledged / 29 Days Remaining), "View Details" +
      "Donate Here"
- [ ] `CollectionSection` (bg #f9f9ff) — "Experience / How your Donation
      Reach Over Years" + 4 stat boxes: USD 21 M 2015 … USD 25 M 2018
      (36px colored numbers, teal hover)
- [ ] `ConditionSection` — 2-slide carousel/grid: photo + "New way to give
      back" + paragraphs + teal-bullet checklist
- [ ] `DonationBanner` — photo bg + dark overlay, white h1 "Donate to help
      People Around the World" + paragraph
- [ ] `DonationForm` — white box overlapping banner by -170px: USD select,
      amount input, One Time/Ongoing radios, green "Donate Now"
      (validation/success)
- [ ] `BrandStrip` — 5 partner logos (picsum/text marks)
- [ ] `EventsSection` — "Upcoming Events" + 3 `#f9f9ff` cards: date
      "12th September, 2018" + title link (green hover)
- [ ] `Footer` (#04091e) — About Us + copyright, Newsletter (email input +
      teal click-btn, validation/success), Follow Us socials (teal hover)
- [ ] `App.tsx` composition (10 sections in original order, main landmark) + document title "Altruist — Charity & Donation"
- [ ] Tests (red→green) for every section; 100% coverage via
      `npm run verify:app -- altruist`
- [ ] PR: source (ColorLib Cause), preview URL (HTTP 200), tokens,
      renames; after merge mark TEMPLATES.md lines 358 AND 1252 `[x]` +
      surge URL
