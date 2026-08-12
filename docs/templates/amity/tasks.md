# Amity (ColorLib "The Charity") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-amity` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "The Charity" — free charity/non-profit website
  template (source: https://colorlib.com/wp/template/the-charity/). Listed
  in TEMPLATES.md under **Bootstrap (216)** (line 510; duplicate rows at
  line 1281 under Charity (37) and line 1305 under Church (22) — same
  template, ONE app only). Preview `<title>` is placeholder "Hello World".
- **Preview REACHABLE (HTTP 200) — SLUG HAS NO HYPHEN:**
  `https://preview.colorlib.com/theme/thecharity/`. The hyphenated URL
  (`/theme/the-charity/`) returns 404; products.js registers the slug as
  `thecharity`. DOM fetched (`/tmp/tc-prev2.html`, 51,321 bytes) +
  stylesheet `style.css` (`/tmp/thecharity-style.css`, 43,788 bytes) +
  TEMPLATES.md screenshot (`thecharity-free-template.jpg`, 1200×946 AVIF,
  viewed in browser). No Wayback Machine captures exist — screenshot +
  live DOM cross-check each other.
- **Aesthetic:** clean modern non-profit design, white background, vibrant
  orange `#ff5a00` accent, Montserrat. Rust-orange `#ff4800` top bar,
  dark `#262222` Donate Now chip, big white hero headline over a children
  photo with `rgba(0,0,0,.5)` overlay, rounded `#ecf2f5` icon cards,
  dark-photo welcome + footer sections, progress bars for fundraisers.
- **Note:** hero slider has 3 slides with IDENTICAL content; source uses
  Swiper. Progress bars use barfiller (5px track `#d6dee1`, `#333` fill;
  percentages 83 ×5, 70 ×2). Counters are JS-animated (values from
  `data-to` attrs: 120K / 79 / 253; only the first has a "K" suffix).
  Source phone differs between screenshot ("+24 3772 50 09 / +5642 4267")
  and live DOM ("+24 3772 120 091 / +56452 4567") — use the live DOM
  values. Welcome heading typo "Wellcome" is intentional in the source —
  fix to "Welcome" or keep, but note the deviation in the PR.

## Structure (top → bottom, single page)

1. **Header** — `.top-header-bar` (bg `#ff4800`, white 12px uppercase,
   padding 20px 0): left `MAIL: contact@ourcharity.com` + `PHONE: +24 3772
120 091 / +56452 4567` (48px gap); right `.donate-btn` "Donate Now"
   (bg `#262222`, white, padding 20px 40px, 14px/500). `.nav-bar` white:
   `.site-branding` logo left ("Amity" wordmark + lucide Heart icon —
   source uses images/logo.png, no asset copy), `.site-navigation` right:
   Home (current) / About us / Causes / Gallery / News / Contact — 14px/600
   `#262626`, desktop padding 49px 0 30px, margin 0 16px; hover/current =
   3px `#ff5a00` bottom border + orange text. Mobile: `.hamburger-menu`
   (4-span animated icon) opens `.site-navigation.show` — 320px off-canvas
   white drawer sliding from left (`left: -320px` → `0`, z-index 9999,
   padding 30px 15px, links padding 16px 0).
2. **Hero slider** (`.hero-slider` Swiper, max-height 820px) — 3 identical
   slides: full-bleed photo (children reaching up; screen picsum seed
   `amity-hero1` per the seed-screening method) + `.hero-content-overlay`
   `rgba(0,0,0,.5)`; `.entry-header`: h1 "Donate" (102px/600 white, 48px
   ≤992px) + h4 "4 a better world" (46px/600); `.entry-content`: mission
   paragraph (500, line-height 1.8); `.entry-footer`: `.btn.gradient-bg`
   "Donate Now" + `.btn.orange-border` "Read More" (pill 24px, padding
   18px 40px, 2px border). `.pagination-wrap` bottom: swiper-pagination
   dots + `.swiper-button-next/prev` 70px circular orange-gradient arrows
   (right: 80px / left: 80px, white arrow path).
3. **Icon boxes** (`.home-page-icon-boxes`, padding 96px 0) — 3 `.icon-box`
   (col-lg-4): bg `#ecf2f5`, padding 40px, radius 24px, text-center; first
   is `.active` (orange gradient + white). Figure icon swaps gray→white on
   hover/active (source images: hands-gray/white.png = volunteer,
   donation-gray/white.png = heart+$, charity-gray/white.png = hands+heart
   — recreate with lucide `Sprout`, `HandCoins`, `HeartHandshake` or
   equivalents, colored `#262626`→white on hover). `.entry-title` 24px/600
   `#262626`, margin-top 28px. Titles: **Become a Volunteer** (active),
   **Dance & Music**, **Online Conference**.
4. **Welcome** (`.home-page-welcome`, padding 96px 0) — cover photo +
   `rgba(21,21,21,.9)` overlay; left col-lg-6 `.welcome-content`:
   `.entry-title` "Wellcome to our Charity" (36px/600 white + `::before`
   64×4px `#ff5a00` underline), `.entry-content` 14px line-height 2
   `#b7b7b7`, `.entry-footer`: white-outline pills "Read More" + "Donate
   Now" (border #fff, color #fff — `.help-us .btn` pattern, margin-top
   36px); right col-lg-6: children photo (picsum `amity-welcome`).
5. **Events + Featured cause** (`.home-page-events`, padding 96px 0) —
   left col-lg-6 `.upcoming-events`: `.section-heading` "Upcoming Events"
   (36px/600 + orange underline) + 3 `.event-wrap` (margin-top 40px):
   figure 144px thumb (picsum `amity-event-1..3`) + `.event-content-wrap`
   `calc(100% - 180px)` margin-top -10px: `.posted-date` "Aug 25, 2018"
   (11px/500, 1px `#262626` right divider) + `.cats-links`, `.entry-title
a` 18px/600 "Fundraiser for Kids" / "Bring water to the childrens" /
   "Bring water to the childrens", `.entry-content` 14px `#929191`,
   `.entry-footer a` "Read More" `#ff5a00`; venue "Ball Room New York"
   appears in the cats-links area. Right col-lg-6 `.featured-cause`:
   `.section-heading` "Featured Cause" + `.cause-wrap` (bg `#edf3f5`,
   padding 40px 24px): figure 246px + `.cause-content-wrap`
   `calc(100% - 280px)`: title "Fundraiser for Kids", excerpt, "Donate
   Now" link `#ff5a00`, `.fund-raised` bar 83% + `.fund-raised-details`
   14px `#929191`: **Raised: $56 880** / **Goal: $70 000**.
6. **Our Causes** (`.our-causes`, padding 96px 0) — cover photo +
   `rgba(232,237,238,.8)` LIGHT overlay (dark text); `.section-heading`
   "Our Causes" + Swiper `.causes-slider` (margin-top 60px) of 6
   `.cause-wrap` slides: figure photo + `.figure-overlay` (centered icon
   revealed on hover), `.cause-content-wrap`: title 18px/600 ("Bring water
   to the childrens" ×4, "Education for all" ×2), excerpt 14px, bar 83%/70%
   - Raised/Goal, "Donate Now"; gradient circular arrows.
7. **Milestones** (`.home-page-limestone`, padding 96px 0) — left col-lg-6
   `.section-heading`: "We love to help all the children that have problems
   in the world. After 15 years we have many goals achieved." (36px/600,
   padding-bottom 36px, line-height 1.6, orange underline) + p 14px
   `#595858`; right col-lg-6 `.milestones`: 3 `.counter-box` (col-sm-4,
   text-center, margin 20px 0): `.start-counter` 48px/500 `#262626`
   (animate on scroll) + `.counter-k` 24px/500 "K" (first only) +
   `.entry-title` 14px `#595858`: **120K Children helped**, **79 Water
   wells**, **253 Volunteeres**.
8. **Footer** — `.footer-widgets` (padding 96px 0 90px): cover photo +
   `rgba(22,22,22,.92)` overlay; h2 titles 18px white mb 40px; 4 cols
   (col-md-6 col-lg-3):
   - `.foot-about`: wordmark + p 14px `#929191` line-height 2 + 4 social
     icon links (white, margin-right 28px — **inline SVG brand icons**,
     lucide has no Facebook/Instagram/LinkedIn/Twitter).
   - "Useful Links": Privacy Polticy / Become a Volunteer / Donate /
     Testimonials / Causes / Portfolio / News.
   - `.foot-latest-news` "Latest News": 3 items (title 14px + `.posted-date`
     12px `#ff5a00` "MArch 12, 2018", mb 36px): "A new cause to help",
     "We love to help people", "The new ideas for helping".
   - `.foot-contact` "Contact": "+45 677 8993000 223" (phone),
     "office@template.com" (email), "Main Str. no 45-46, b3, 56832, Los
     Angeles, CA" + `.subscribe-form` (margin-top 50px): white email input
     (12px, italic `#9b9a9a` placeholder, `calc(100% - 70px)`, padding
     12px 16px) + `#ff5a00` submit (68px, 12px uppercase, white). No
     backend — validate + success state (screen-reader friendly).
   - `.footer-bar`: padding 30px 0, 12px `#7b7b7b`, bg `#131212`,
     text-center: "Copyright © <year> All rights reserved | This template
     is made with ♥ by **Component Dock**" — Component Dock MUST link
     https://www.componentdock.com/ (replaces source's Colorlib credit).

## Implementation tasks (implementer)

- [ ] Scaffold `apps/amity` from the simplest existing app; package
      `@free-react-templates/amity`; `npm install` at root so the lockfile
      registers the workspace; CNAME `amity.free.componentdock.com`;
      homepage `https://amity.free.componentdock.com`
- [ ] `@theme` tokens (see spec checklist) + Montserrat Google Fonts link
- [ ] Components: `Header` (top bar + nav + mobile drawer),
      `HeroSlider` (3-slide carousel + arrows + pagination + autoplay),
      `IconBoxes`, `Welcome`, `Events` (+ `FeaturedCause`), `CausesSlider`,
      `Milestones` (animated counters), `Footer` (+ subscribe form)
- [ ] Screen picsum seeds for subject-critical photos (hero children,
      welcome children, cause/event thumbs) — pixel-metric screening +
      browser verify, pin verified seeds in spec + PR
- [ ] TDD: Vitest + RTL, 100% coverage; `bash scripts/verify-app.sh amity`
- [ ] PR: source = ColorLib The Charity, preview
      `https://preview.colorlib.com/theme/thecharity/` (NO hyphen), tokens,
      diffs (name, placeholder images, slider impl, form validation)
