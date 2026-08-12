# Leadwave (ColorLib "Ultim8") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-leadwave` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Ultim8" — free DIGITAL AGENCY website template
  (source: https://colorlib.com/wp/template/ultim8/). Listed in TEMPLATES.md
  under **Bootstrap (216)** at line 522; duplicate rows at line 1211 under
  **Business (365)** and line 2367 under **One Page (91)** — same template,
  ONE app only. Mark ALL THREE rows `[x]` after merge.
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/ultim8/`.
  DOM fetched (`/tmp/ultim8-preview.html`, 59,055 bytes, title "Ultim8 —
  Website Template by Colorlib") + stylesheet `css/style.css`
  (`/tmp/ultim8-style.css`, 75,852 bytes — the real token source; the
  theme's Bootstrap is DEFAULT palette, the brand color is style.css's own
  `#2f89fc`) + TEMPLATES.md screenshot (`ultim8-free-template.jpg`, viewed
  in browser at 1200×946 — light page, ULTIM8 logo, centered 8-link nav +
  GET A QUOTE blue-outline pill, BLUE hero headline "Template for Digital
  Agency" with dashboard mockup, blue→teal gradient banner "We Provide High
  Quality Services", services heading + blue icon cards).
- **Aesthetic:** clean light SaaS/agency design on white. ONE brand blue
  `#2f89fc` + mint `#55fbc2` gradient end (banner + newsletter band). Body
  text default Bootstrap `#212529`; Work Sans everywhere. Footer dark navy
  `#233142`. Hero right side = dashboard-screenshot carousel (SaaS feel).
  Navbar transparent over the hero → fixed WHITE + shadow + solid-blue CTA
  pill when scrolled. Mobile: solid BLACK navbar.
- **Fonts:** Google **Work Sans** — body 1rem; hero h1 32px weight 400 BLUE;
  section h2s 30px; `.heading-section-white h2` 30px white; nav links 13px
  UPPERCASE weight 400; counter numbers 34px weight 400 white. Load via
  `<link>` in `index.html`.
- **Buttons:** `.btn` Bootstrap 4 default (padding .375rem .75rem, radius
  4px, no transition). `.btn.btn-primary` = solid `#2f89fc`, white text;
  hero CTAs add `px-4 py-3` ("Get a Quote" solid, "Our Portfolio"
  outline). Nav CTA pill `.nav-item.cta > a`: radius 30px (4px ≤991px),
  padding .5rem 20px, blue border + blue text at top; scrolled = SOLID blue
  bg + white text. Newsletter subscribe: white pill (radius 30px,
  `1px solid rgba(255,255,255,0.7)`), transparent input, white "Subscribe"
  with `border-left` divider.
- **Copy is placeholder/Lorem:** hero p ("A small river named Duden..."),
  services blurbs + reasons p ("Even the all-powerful Pointing..." ×many),
  testimonials (identical quote + "Dennis Green" + roles Marketing Manager /
  Interface Designer / UI Designer), blog cards (identical titles, "August
  12, 2018 | Admin | 3" ×3). Paraphrase freely, VARY repeats, keep the
  kinds. KEEP the four pricing numbers ($0 / $19 / $49 / $99) + feature
  lines (Free: 150 GB Bandwidth / 100 GB Storage / $1.00 per GB Overages /
  All features; Startup: 450 GB / 400 GB / $2.00; Premium: 250 GB / 200 GB /
  $5.00; Pro: 250 GB / 200 GB / $5.00 — vary if needed but keep 4 tiers).
- **DOM oddities:** (1) hero h1 = "Template for" + `<strong class="typewrite">`
  cycling `["Digital Agency","Portfolio","SEO Agency","Business"]` with a
  3px BLUE caret (`.typewrite > .wrap:after`); implement as a state-driven
  rotating word (setInterval, cleanup on unmount); (2) hero is `div.hero-wrap`
  (750px) with light overlay `linear-gradient(45deg,#f0f0f0 0%,white
55%,white 100%)` — NOT a dark photo hero; (3) hero right = owl carousel of
  3 dashboard PNGs (`dashboard_full_1..3.png`) with inactive slides dimmed
  (`.owl-item { opacity:.4 }`, active 1) — React carousel or 3-up faded
  grid; (4) navbar: transparent absolute top 20px, BLACK links ≥992px /
  WHITE ≤991px, brand white mobile / black ≥768px — inverted per breakpoint,
  do NOT hardcode one color; scrolled → `position:fixed; background:#fff;
box-shadow:0 0 10px 0 rgba(0,0,0,0.1)` + solid-blue CTA pill; mobile =
  `background:#000` solid; (5) `.ftco-section-2 .overlay` = the banner
  gradient (NOT the section itself); (6) Reasons panel = `.aside-stretch`
  `background:#2f89fc` with a `:after` that extends the blue full-bleed to
  the LEFT — implement as a blue column that bleeds to the container edge;
  (7) counters sit on a bg photo (`images/bg_1.jpg`, stellar parallax) —
  picsum wide photo, parallax optional; (8) pricing cards `.block-7`: white,
  `box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.03)`, padding 30px; price
  numbers blue 40px w500; (9) testimonial cards: white (section is
  `bg-light`), photo 100px circle centered with 40px BLUE quote badge
  hanging at bottom -20px; (10) newsletter `.parallax-img` = same
  blue→mint gradient (`linear-gradient(135deg,#2f89fc 0%,#55fbc2 100%)`);
  (11) footer `#233142`, white widget headings 18px w400; (12) nav has no
  dropdowns (flat 8 links, `Blog`/`Contact` link to inner pages — render
  flat anchors); (13) `Get a Quote` nav pill opens a modal in the source —
  render as a plain anchor (or a no-op) to keep the SPA single-page; (14)
  blog cards `.blog-entry .text` white, radius 2px.

## Structure (top → bottom, single page)

1. **Navbar** (`.ftco-navbar-light`, transparent absolute top 20px; scrolled
   → fixed white + shadow; mobile → solid black) — brand "Leadwave." left
   (bold wordmark; black ≥768px / white mobile); nav links (13px uppercase,
   padding .9rem 20px): Home (active) / About / Services / Work / Team /
   Pricing / Blog / Contact; hover + active → `#2f89fc`; right: "Get a
   Quote" pill CTA (radius 30px, 1px blue border, blue text; scrolled →
   solid blue + white text); mobile: black bar + hamburger (Menu icon) →
   collapsible menu with same links.
2. **Hero** (`div.hero-wrap`, 750px, light gradient overlay 45deg
   `#f0f0f0`→white) — left (40%): h1 (32px, w400, BLUE) "Template for" +
   rotating typewriter word (Digital Agency → Portfolio → SEO Agency →
   Business, blue 3px caret); p (w300, lh 1.5) lorem; CTA row: `btn btn-
primary px-4 py-3` "Get a Quote" (solid) + `btn btn-primary btn-outline-
primary px-4 py-3` "Our Portfolio" (outline); right (60%): dashboard
   mockup carousel (3 slides, inactive dimmed to opacity .4).
3. **Gradient banner** (`.ftco-section-2` + `.overlay` gradient 135deg
   `#2f89fc`→`#55fbc2`, padding 3em 0) — h3 `.heading-white` (20px, white)
   "We Provide High Quality Services".
4. **Services** (`.ftco-section ftco-services`) — centered heading: h2 30px
   "Our Service Keeps you Happy" + subheading "Search Engine & Social Media
   Optimization Experts"; 3 cards (col-md-4 text-center): blue icon circle +
   h3 "Market Research" / "Business Strategy" / "Audience Analytics" + lorem
   p (16px).
5. **Counter strip** (`.ftco-counter img`, bg photo, padding 5em 0) — 4
   stats (white 34px w400 numbers + labels): Happy Clients / Running
   Projects / Project Completed / Cups of Coffee.
6. **Portfolio** (`.ftco-section ftco-work`) — heading "Our Portfolio";
   work gallery: `.work-entry` items (400px image, hover → blue `.text`
   overlay fade-in 0.3s with title + zoom icon), items titled "Work 01",
   "Work 02", "Work 03" (carousel in source — grid of ≥3 is faithful).
7. **Pricing** (`.ftco-section bg-light`) — centered heading "Our Best
   Pricing" + sub "Pricing Plans"; 4 `.block-7` white cards (shadow
   `0 2px 5px rgba(0,0,0,0.03)`, padding 30px, mb 30): plan name; price
   (blue sup 20px + number 40px w500); tagline ("100% free. Forever" /
   "All features are included"); "Get Started" button (blue); "Enjoy All
   The Features" line; feature list (muted `#b3b3b3`, li mb 15): Bandwidth
   / Storage / Overages / All features.
8. **Reasons + quote** (`.ftco-quote`) — LEFT col `.aside-stretch` BLUE
   `#2f89fc` (white text rgba .8/.9): `.heading-section-white` h2 30px
   "Reasons for Choosing Us" + lorem p + 3 checklist items with white check
   icons; RIGHT col: "Get a Free Quote" heading + form (`.form-control`):
   Full Name / Email / Phone / Website + Message textarea (rows 7) + submit
   `btn btn-primary py-3 px-5` "Get a Quote".
9. **Testimonials** (`.testimony-section bg-light`) — heading "Testimony"
   - sub "Our Happy Customer Says"; carousel (arrows/dots, React state) of
     3 white cards: centered 100px circular photo + 40px BLUE quote badge
     (bottom -20px) + quote + "Dennis Green" + role (Marketing Manager /
     Interface Designer / UI Designer).
10. **Newsletter** (`.ftco-section-parallax`, gradient 135deg
    `#2f89fc`→`#55fbc2`, padding 4em 0) — h2 "Subscribe to our Newsletter"
    - lorem p + `.subscribe-form` pill (radius 30px, white border,
      transparent input, white "Subscribe" btn with left border divider).
11. **Blog** (`.ftco-section`) — heading "Latest Blog" + sub "Read our
    blog"; 3 `.blog-entry` cards: photo + white text box (radius 2px):
    meta (date "August 12, 2018" | Admin | 3 comments) + 20px title +
    excerpt.
12. **Footer** (`.ftco-footer`, navy `#233142`, padding 6em 0) — row of 4
    widgets: (a) brand blurb ("Leadwave." + short text); (b) "Quick Links"
    (About / Features / Projects / Blog / Contact); (c) "Recent Blog" (2
    entries with meta); (d) "Contact Info" (203 Fake St. Mountain View,
    San Francisco, California, USA · +2 392 3929 210 · info@yourdomain.com);
    bottom bar: "Copyright © <year> All rights reserved | This template is
    made with ♥ by **Component Dock**" → https://www.componentdock.com/
    (replaces Colorlib credit, NO ColorLib credit).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/leadwave`; `npm install` at repo root; CNAME +
      homepage `leadwave.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#2f89fc`, mint `#55fbc2`,
      navy `#233142`, soft `#f8f9fa`, hero-start `#f0f0f0`, muted
      `#b3b3b3`, ink `#000000`; Google Fonts `<link>` (Work Sans 400/500/700)
- [ ] `src/data.ts` — nav (8 links), hero (headline + 4 rotating words +
      subline), banner, services (3: icon/title/blurb), counters (4),
      portfolio (3+: title), pricing (4 tiers: name/price/tagline/features),
      reasons (3 checks), testimonials (3: quote/author/role), blog (3:
      title/meta/excerpt), newsletter, footer (quick links 5 / recent blog
      2 / contact info)
- [ ] Components: `Navbar` (scroll-aware: transparent→white fixed, mobile
      black + hamburger), `Hero` (rotating typewriter word with blue caret,
      interval cleanup; dashboard carousel with dimmed inactive slides),
      `GradientBanner`, `Services`, `Counters`, `Portfolio` (hover blue
      overlay), `Pricing`, `ReasonsQuote` (blue panel + validated form),
      `Testimonials` (carousel state), `Newsletter` (pill form + success
      state), `Blog`, `Footer` (Component Dock credit)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100% coverage
      (typewriter rotation via fake timers + act(), scroll navbar state,
      quote form validation, newsletter submit success swap, testimonial
      carousel nav, portfolio hover overlay)
- [ ] Subject-screen picsum seeds (dashboard mockups 1–3 must read as
      screenshots/tech, counter bg wide, portfolio 1–6, testimonial 1–3
      square portraits, blog 1–3, recent-blog 1–2) — pixel metric +
      browser verify; pin seeds in PR
- [ ] `bash scripts/verify-app.sh leadwave` green; PR with source, preview
      URL, tokens, deviations (React typewriter/carousel, no modal on nav
      CTA, picsum images, Component Dock credit); squash-merge immediately
- [ ] After merge: mark ALL THREE TEMPLATES.md Ultim8 rows `[x]` + surge
      URL (lines 522, 1211, 2367 — Bootstrap 216 / Business 365 / One
      Page 91); `npm run readme:status`

## Verification notes / pitfalls

- NAVBAR COLORS ARE BREAKPOINT-INVERTED: links black ≥992px / white
  ≤991px, brand black ≥768px / white below, navbar transparent at top →
  fixed WHITE on scroll (desktop) but solid BLACK below 992px (the mobile
  bar is always dark). Don't flatten to one color; test both breakpoints.
- The typewriter word must keep the BLUE 3px caret (`.wrap:after`).
  Implement with setInterval + state; clear the interval on unmount;
  tests need fake timers inside `act()` (RTL fake-timer rule).
- The hero "Get a Quote" is a real button; the nav "Get a Quote" pill
  opens a modal in the source — render as a plain link/anchor (keep SPA
  single-page); note the deviation in the PR.
- The banner gradient lives on `.ftco-section-2 .overlay` (absolute
  inset-0), same 135deg gradient as the newsletter band — reuse one
  `bg-gradient` utility.
- Reasons panel: blue `#2f89fc` column with `:after` full-bleed extension
  to the left — implement the blue bg on the column and let it span the
  container edge; check the screenshot for how far the blue extends.
- Pricing card shadow is VERY soft (`rgba(0,0,0,0.03)`) — use a subtle
  shadow, not the default Tailwind `shadow` (too strong).
- Testimonial photo is 100px circle centered with a 40px blue quote
  badge OVERLAPPING its bottom edge (-20px) — keep the badge.
- Counter strip: photo background; the jQuery count-up + stellar
  parallax are optional — a static white-number stat row is faithful
  enough (note in PR).
- Newsletter input placeholder `rgba(255,255,255,0.7)`; the Subscribe
  button is white text with a `border-left` divider inside the pill.
- Blog meta: "August 12, 2018 | Admin | 3 Comments" — the source repeats
  the same title/excerpt 3×; vary them.
- Footer contact: source has "+2 392 3929 210" — no `tel:` literal
  (monorepo rule); render as plain text.
- No ColorLib references anywhere in app code; footer credits Component
  Dock only.
