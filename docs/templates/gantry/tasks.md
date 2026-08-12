# Gantry (ColorLib "Engineers") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-gantry` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Engineers" — free construction / engineering
  company HTML template (source: https://colorlib.com/wp/template/engineers/).
  Listed in TEMPLATES.md under **Bootstrap (216)** at line 386; duplicate
  rows at line 996 under **Business (365)**, line 1346 under
  **Construction (29)** and line 1945 under **Industrial (15)** — same
  template, ONE app only. Mark ALL FOUR rows `[x]` after merge.
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/engineers/`. DOM fetched
  (`/tmp/engr/preview.html`, 22,835 bytes, title "Engineers &mdash;
  Website Template by Colorlib") + stylesheet `css/style.css`
  (`/tmp/engr/style.css`, 29,335 bytes) + TEMPLATES.md screenshot
  (`engineers-free-template.jpg`, AVIF 96,538 bytes) + browser
  verification (full screenshot + a 1200×220 top crop to confirm the
  header stack: light strip with logo + 3 contact columns, then the
  SOLID ORANGE navbar).
- **Aesthetic:** high-contrast construction look. Top WHITE strip: black
  bold "ENGINEERS" wordmark + small orange geometric mark, 3 contact
  columns with orange icons (MapPin "San Francisco" / "Mountain View,
  Fake st., CA"; Phone "000 209 392 312" / "Toll free"; Mail
  "info@gmail.com" + grey sub-line). Below it a SOLID ORANGE `#ff5e15`
  navbar with white uppercase menu (HOME / ABOUT US / OUR PROJECTS /
  TESTIMONIALS / BLOG / CONTACT). Hero = full-width engineering-photo
  slider (blueprints, hard hat, calipers) with a light `#222` overlay at
  opacity .3 and a centered white headline with ONE orange word ("We Are
  **Leading** Industry of Engineers"); white square prev/next arrows.
  Body alternates white / light-grey (`#f8f9fa`) with dark-navy
  `#09162a` bands (Why Choose Us, Get A Quote, Our Projects); footer pure
  black. Orange `#ff5e15` is the ONLY saturated accent.
- **jQuery/Bootstrap plugins in the source** (owl-carousel hero slider +
  projects carousel, Bootstrap collapse mobile menu, sticky-wrapper
  navbar, AOS scroll animations) — implement with React state: a 2-slide
  hero slider with prev/next arrows, a 3-up project carousel, a
  hamburger mobile nav, a sticky navbar, cheap fade-ins only where
  trivial.
- **Fonts:** Google **Oswald** (300/400/700) for h1–h5, navbar, buttons,
  client names (uppercase); **Muli** (300/400) for body (1.1rem, lh 1.7).
  Two Google Fonts `<link>`s in `index.html` (the source does exactly
  this).
- **Buttons:** `.btn` — uppercase, 14px, letter-spacing .2rem, Oswald,
  square (radius 0). Quote submit = full-width orange, hover black.
  Subscribe button = black on the orange band. All radius 0.
- **Copy is placeholder/Lorem with typos** ("Subcribe", "Expert in
  Builings", "Gravida sodales condimentum pellen tesq…" repeated on all
  4 service cards, "Building Refinery" x4 projects, "Matt Keygen" x2,
  "Top Companies That Are Best In Industrial Business" x3, "Posted by
  Admin In News" x3) — paraphrase freely, FIX the typos, keep the same
  kinds: nav (Home / About Us / Our Projects / Testimonials / Blog /
  Contact), hero (2 slides), services x4 (Professional Team / Great
  Ideas / Quality Building / Quality Works + number 01–04), why choose
  us (3 features: Expert in Buildings / Modern Design / Leading In Floor
  Planning), quote form (name / phone / email / subject / message +
  "Send Message"), projects x4 (category "Factory" + title), testimonials
  x2, blog x3, newsletter ("Subscribe To Newsletter" + p + input +
  "Subscribe"), footer (Our Company 6 / Our Services 3 / Contact 5).
- **DOM oddities:** (1) the navbar is desktop-only in the source
  (`d-none d-lg-block`) with a separate slide-in `.site-mobile-menu` —
  render the desktop bar + a hamburger that opens the same links on
  mobile; (2) `.block-3` (Our Projects) has `margin-bottom: 14rem` —
  a big gap before the testimonial section; `.projects-carousel-wrap`
  has `margin-bottom: -200px` (the project cards visually pull into the
  next section); (3) `.block-2`'s photo uses `margin-top: -150px` to
  overlap the services section above; (4) the Why-Choose-Us h4s are
  `text-white` because the whole section is dark navy `#09162a`;
  (5) `.section-title` is WHITE by default — light sections override
  with `text-black`; (6) all 4 project titles are "Building Refinery"
  and all 4 project categories "Factory" — vary them; (7) the newsletter
  input has NO placeholder in the source, the button reads "Subcribe"
  (typo — fix); (8) the source footer has NO social icons — keep it as
  plain link lists (no brand-icon SVGs needed).

## Structure (top → bottom, single page)

1. **Header-top** (`.header-top.bg-light`, light strip) — brand logo left
   (black bold uppercase wordmark + small orange mark); 3
   `.quick-contact-icons` columns right (desktop only `lg+`): MapPin +
   "San Francisco" / "Mountain View, Fake st., CA" · Phone + "000 209 392
   312" / "Toll free" · Mail + "info@gmail.com" / grey sub-line. Each:
   orange icon (lucide MapPin / Phone / Mail) + bold caption + small grey
   sub-caption.
2. **Navbar** (`.sticky-wrapper .site-navbar`, bg `#ff5e15`, sticky) —
   white uppercase Oswald links (16px, ls .05rem, weight 900, padding
   20px): Home / About Us / Our Projects / Testimonials / Blog / Contact;
   active link black + 2px underline. Mobile: hamburger → nav toggle.
3. **Hero slider** (`.hero-slide.owl-carousel.site-blocks-cover`,
   full-viewport, min-height 700px) — 2 slides, bg photo
   (`images/hero_1.jpg`, engineering subject) + `#222` overlay (opacity
   .3); centered h1 white (3rem, weight 300; `<strong>` word orange,
   weight 700): "We Are **Leading** Industry of Engineers" / "Experts and
   High Quality Works". White square prev/next arrows.
4. **What We Do** (`.site-section.services-1-wrap`, white) — centered
   `.section-subtitle` orange "What We Do" + h2 `text-black` "We Are
   Leading Industry of Engineering. We Love What We Do" (weight 300,
   strong 700); 4 `.service-1` cards (col-lg-3 col-md-6): number 01–04
   (absolute right/top 10px) + icon badge (flaticon → lucide HardHat /
   Compass / DraftingCompass / Clipboard, orange square badge with
   rotated-diamond backdrop) + h3 `.service-heading` + p. Cards: padding
   20px 30px, 1px `#efefef` border, `border-right: none` (shared
   borders).
5. **Why Choose Us** (`.block-2`, bg `#09162a`, padding 7rem) — split:
   left col-lg-6 photo (`about_1.jpg`, `img-overlap` `margin-top: -150px`
   overlapping the services section); right col-lg-5 ml-auto: orange
   subtitle "Why Choose Us" + h2 white "More than 50 year experience in
   industry" + grey p + 3 feature rows (orange lucide icon + h4 white +
   p white): Expert in Buildings / Modern Design / Leading In Floor
   Planning.
6. **Get A Quote** (`.quote-form-wrap`, bg `#09162a`, padding 5rem) —
   orange subtitle "Get A Quote" + h2 white "Request A Quote"; form
   `.quote-form`: 2-col grid (col-md-6) — Your name* / Phone number /
   Your email* / Subject + full-width Message* textarea (7 rows);
   inputs transparent, white text, `border-bottom: 2px solid
rgba(255,255,255,0.5)`, radius 0; submit "Send Message" =
   full-width orange `btn-block btn-lg rounded-0` (hover black).
7. **Our Projects** (`.block-3`, bg `#09162a`, padding 7rem,
   `margin-bottom: 14rem`) — orange subtitle "Our Projects" + h2 white
   "Explore Our Recent Projects"; `.projects-carousel-wrap`
   (`margin-bottom: -200px`): carousel (3-up desktop) of 4 `.project-item`
   cards — photo + `.project-item-contents` (absolute bottom/left/right
   20px): `.project-item-category` "Factory" + h2 `.project-item-title`
   "Building Refinery"; hover: `rgba(0,0,0,0.7)` overlay + image scale.
   Vary the 4 titles/categories (e.g. Factory / Warehouse / Bridge /
   Industrial).
8. **Testimonial** (`.site-section.testimonial-wrap`, white) — centered
   orange subtitle "Testimonial" + h2 `text-black` "What People Says"; 2
   `.testimonial` blocks (col-md-6): 100px circular photo (square picsum
   seed) + blockquote p (20px, weight 700, black) + `.client-name`
   (Oswald uppercase 1.2rem orange).
9. **News & Updates** (`.site-section.bg-light`) — LEFT-aligned heading
   block: orange subtitle "Blog" + h2 `text-black` "News & Updates"; 3
   `.blog-entry` cards (col-lg-4): photo (hover scale 1.05) +
   `.blog-entry-contents`: h3 title link ("Top Companies That Are Best In
   Industrial Business") + `.meta` "Posted by Admin In News". Vary the 3
   titles.
10. **Newsletter** (`.py-5.bg-primary.block-4`, orange `#ff5e15`) — left
    col-lg-6: h3 white "Subscribe To Newsletter" (weight 300, uppercase)
    - p white; right col-lg-6: `.form-subscribe.d-flex` — text input (2px
      solid white border, transparent bg, radius 0, white text) + black
      "Subscribe" button (`px-4`, radius 0).
11. **Footer** (`.footer`, bg `#000`, padding 4rem 0, 15px) — 4 columns:
    brand (logo + about p + "Learn More" link) · "Our Company" 6 links
    (About / News / Services / Our Team / Careers / Projects) · "Our
    Services" 3 links (Industrial / Construction / Remodeling) ·
    "Contact" 5 links (Help Center / Support Community / Press / FAQ /
    Our Partners); bottom `.copyright` bar: "Copyright © <year> All
    rights reserved | This template is made with ♥ by **Component
    Dock**" → https://www.componentdock.com/ (replaces Colorlib, NO
    ColorLib credit).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/gantry`; `npm install` at repo root; CNAME +
      homepage `gantry.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#ff5e15`, navy `#09162a`,
      ink/black `#000`, soft `#f8f9fa`, card-line `#efefef`; hero overlay
      `#222` at opacity .3; Google Fonts `<link>`s (Oswald 300/400/700 +
      Muli 300/400)
- [ ] `src/data.ts` — contacts (3), nav (6), hero slides (2), services
      (4), why-choose features (3), quote form fields, projects (4),
      testimonials (2), blog cards (3), footer links (Our Company 6 /
      Our Services 3 / Contact 5), newsletter
- [ ] Components: `Header` (light strip + orange navbar + hamburger
      mobile menu), `HeroSlider` (2 slides, prev/next arrows, overlay),
      `Services` (4 numbered cards), `WhyChooseUs` (split + 3 features),
      `QuoteForm` (underline inputs + full-width submit), `Projects`
      (3-up carousel, 4 cards), `Testimonials` (2 blocks), `Blog`
      (3 cards), `Newsletter` (input + black Subscribe), `Footer`
      (4 widgets + Component Dock credit)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (hero slider next/prev, mobile nav toggle, quote form
      submit, subscribe form success — assert input unmounts via
      `queryByLabelText` if the form swaps to a success message)
- [ ] Subject-screen picsum seeds (hero — engineering/blueprints subject
      preferred, 2 slides; about_1 construction photo; project 1–4
      building scenes; 2 square portraits; blog 1–3) — pixel metric +
      browser verify; pin seeds in PR
- [ ] `bash scripts/verify-app.sh gantry` green; PR with source, preview
      URL, tokens, deviations (React slider/carousel / mobile nav /
      Component Dock credit); squash-merge immediately
- [ ] After merge: mark ALL FOUR TEMPLATES.md Engineers rows `[x]` +
      surge URL (lines 386, 996, 1346, 1945 — Bootstrap 216 / Business
      365 / Construction 29 / Industrial 15); `npm run readme:status`

## Verification notes / pitfalls

- Desktop + mobile navs render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies the injected Tailwind CSS, so `hidden lg:flex` desktop
  nav lists are `display:none` and getByRole excludes them — query
  desktop-only links with `{ hidden: true }`; CSS `uppercase` does NOT
  change accessible names, query raw text ('Home'), not 'HOME'.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- The hero is an owl-carousel in the source — implement a state-indexed
  slider with ChevronLeft/ChevronRight (or arrows) and assert the active
  slide's headline changes; same for the 3-up projects carousel (or a
  simple responsive grid — the source carousel is decorative).
- `.section-title` is white by default (dark sections) — light sections
  need `text-black`; keep the orange `.section-subtitle` (uppercase,
  1.3rem, weight 300) on every section.
- No `tel:` literals anywhere (secret-scan rewrites them) — the source
  phone is "000 209 392 312"; render it as plain text (matching the
  header-top caption pattern), never a `tel:` href.
- The newsletter input has NO placeholder and the button says "Subcribe"
  (typo) — fix to "Subscribe"; the band is orange with a WHITE-bordered
  transparent input and a BLACK button, all radius 0.
- The quote form inputs are underline-only (transparent, 2px white bottom
  border, radius 0, white text on the navy panel) — do not give them
  solid boxes; labels are placeholders only in the source.
- The Why-Choose-Us photo overlaps the services section above
  (`margin-top: -150px`) — reproduce with a negative margin so the split
  reads as an overlapping collage; the Projects carousel wrap pulls down
  with `margin-bottom: -200px` and `.block-3` leaves a `14rem` gap —
  keep the dark band + generous bottom spacing, exact px are flexible.
- Services cards share 1px `#efefef` borders with `border-right: none`
  (a joined grid look); stack to 2-up/1-up below lg.
- Footer: no social icons in the source — plain link lists only; brand
  column has a logo image + paragraph + "Learn More" link; credit line
  must say Component Dock (no ColorLib credit).
- Sticky navbar: `position: sticky` (top 0) is the React equivalent of
  the source's sticky-wrapper; the header-top strip scrolls away, the
  orange bar sticks.
