# Unison (ColorLib Oneder) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Unison** (NEW name —
> the ColorLib source keeps its name "Oneder"). Implementation ships on
> `feat/template-unison` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Oneder" — free one-page business / creative-agency
  website template (source: https://colorlib.com/wp/template/oneder/).
  TEMPLATES.md rows: line 469 (**Bootstrap (216)**) + dup rows at lines
  1116 (Business), 1480 (Creative), 2346 (One Page), 2536 (Portfolio) —
  all `- [ ]`, not shipped anywhere. Mark all five `[x]` at ship time.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-12):**
  `https://preview.colorlib.com/theme/oneder/` (HTTP 200, 45KB HTML) +
  `css/style.css` (25KB — token source; bootstrap/owl/fancybox/datepicker/
  flaticon/icomoon/aos are vendors). Screenshot (`oneder-free-template.jpg`,
  1200×946) browser-verified 2026-08-12: transparent white navbar over a
  full-screen open-office photo hero, centered white uppercase headline
  "I'M CREATIVE ONE PAGE TEMPLATE BY COLORLIB", blue pill "Get in Touch",
  white About section with blue section title and photo/text split.
- **Structure observed (1:1):** navbar (`.site-navbar` absolute over hero:
  white wordmark + links Home / About Us▾ [Team, Pricing, FAQ, More Links▾
  [Menu One, Menu Two, Menu Three]] / Portfolio / Services / Testimonials /
  Blog / Contact; `.js-sticky-header` + `.sticky-wrapper.is-sticky` →
  white bg `#fff` + shadow, logo `#007bff`, links `#000`; mobile
  `.site-menu-toggle` hamburger) → hero (`#home-section`,
  `.site-blocks-cover.overlay` bg `images/hero_1.jpg`, `:before` overlay
  rgba(0,0,0,.4), min-height 600px/100vh; h1 3rem (2rem ≤992px) white
  weight 900 `text-uppercase` "I'm Creative One Page Template by Colorlib";
  `.btn.btn-primary` "Get In Touch" → `#contact-section`; `a.mouse`
  scroll indicator with `.mouse-icon`/`.mouse-wheel`) → about
  (`#about-section`, `.site-section.cta-big-image`: centered `.section-title`
  "About Oneder" blue 40px weight 900; left `figure.circle-bg` [300px
  circle `:after` bottom -90px, z-index -1] photo; right h3 black "For the
  next great business" + lorem + `.ul-check.success` 4 items [check
  `#71bc42`, li padding-left 35px, margin-bottom 15px] + blue "Get In
  Touch") → team (`#team-section`, `.site-section.border-bottom`: centered
  title + `.lead` para; 8 `.team-member` cards `col-md-6 col-lg-3`:
  `figure` photo + absolute `.social` ul [icon-facebook, icon-twitter,
  icon-linkedin, icon-instagram] revealed on hover + `.p-3` h3 name +
  `.position` span; names Kaiara Spencer / Dave Simpson / Ben Thompson /
  Kyla Stewart / Chris Stewart (roles Product Manager, Product Designer,
  Marketing Manager, Web Designer) → portfolio (`#portfolio-section`,
  `.site-section`: centered title; `#filters.filters.button-group.col-md-7`
  — All [active] / Web / Design / Brand, `.btn` pill 0.8rem padding 8px 20px
  bg rgba(52,58,64,.05) color `#343a40`, active/hover bg `#007bff` white;
  `#posts.row.no-gutter` isotope `.item` cards `col-sm-6 col-md-4 col-lg-4
col-xl-3` classes `web`/`design`/`brand`, photo link + hover overlay
  with zoom + fancybox icon) → services (`#services-section`,
  `.site-section.border-bottom.bg-light`: centered title; 6 `.unit-4`
  cards `col-md-6 col-lg-4` — `.unit-4-icon.mr-4` span `text-primary`
  flaticon-startup / flaticon-graphic-design / flaticon-settings /
  flaticon-idea / flaticon-smartphone / flaticon-head; h3 Business
  Consulting, Market Analysis, User Monitoring, Insurance Consulting,
  Financial Investment, Financial Management; lorem + "Learn More" link)
  → testimonials (`#testimonials-section`, `.site-section.testimonial-wrap`:
  centered title; `.slide-one-item.home-slider.owl-carousel` 4 slides:
  `.testimonial` blockquote lorem + `figure` small photo + name John
  Smith / Christine Aguilar / Robert Spears / Bruce Rogers) → pricing
  (`#pricing-section`, `.site-section.bg-light`: centered title; 3
  `.pricing` cards `col-lg-4` white bg padding 30px — h3 plan name Basic /
  Premium / Professional, `.price` span: span 3rem `#007bff` $47 / $200 /
  $599 + "/ year" `#cccccc`; `.ul-check.success.mb-5` 5 items with
  `li.remove` line-through `#dee2e6` for excluded; `.btn.btn-secondary`
  "Buy Now") → FAQ (`#faq-section`, `.site-section`: centered title
  "Frequently Ask Questions"; 2 `col-lg-6` × 4 `.mb-5` blocks: h5 black
  question + lorem p; questions "Can I accept both Paypal and Stripe?",
  "What available is refund period?", "Where are you from?", "What is your
  opening time?" — repeated across the 8 blocks) → about split #2 (SECOND
  `#about-section` duplicate id, `.site-section`: left `col-lg-6` with 2
  `.unit-4` blocks — flaticon-head "Web & Mobile Specialties",
  flaticon-smartphone "Intuitive Thinkers", each icon + h3 + lorem +
  "Learn More"; right `col-lg-6 ml-auto order-1 order-lg-2` `img.rounded`
  photo) → blog (`#blog-section`, `.site-section`: centered title "Our
  Blog"; 3 `.h-entry` cards `col-md-6 col-lg-4` — photo link, h2 title
  link "Repudiandae Quisquam Eaque Dolore", `.meta.mb-4` "Ham Brook •
  Jan 18, 2019 • News", lorem excerpt, "Continue Reading..." link) →
  contact (`#contact-section`, `.site-section.bg-light`: centered title
  "Contact Us"; 3 `col-md-4` centered info cols — `span.icon-room.d-block
h4.text-primary` + "203 Fake St. Mountain View, San Francisco,
  California, USA", `icon-phone` + "+1 232 3235 324", `icon-mail_outline`
  - "youremail@domain.com"; `form.p-5.bg-white` h4 "Contact Form" +
    First Name / Last Name row + Email / Subject / Message + blue "Send
    Message") → footer (`.site-footer` bg `#333333` padding 4em 0 / 8em 0
    ≥768px: `col-md-9` [About Us footer-heading + lorem; Quick Links
    smoothscroll anchors About Us / Services / Testimonials / Contact Us;
    Follow Us icon links facebook/twitter/instagram/linkedin] + `col-md-3`
    Subscribe Newsletter `.footer-subscribe` input-group: transparent input
    `placeholder="Enter Email"` + `.btn.btn-primary.text-black` "Send" 43px
    white; `.row.pt-5.mt-5` `.border-top` rgba(255,255,255,.1) copyright bar
    → "Copyright © <year> All rights reserved | This template is made with ♥
    by Colorlib" → repo attribution).
- **Design tokens:** brand blue **#007bff** (btn-primary bg, section-title
  color, active filter, pricing amount 3rem, text-primary icons, sticky
  logo, form focus border); check green **#71bc42**; excluded gray
  **#dee2e6**; price suffix **#cccccc**; bg-light **#f8f9fa**; footer
  **#333333** + text **#737373** + links **#999999** → white hover;
  filter chip bg rgba(52,58,64,.05) + text **#343a40**; hero overlay
  rgba(0,0,0,.4); fonts **Work Sans** 300/400/700/900 via Google Fonts;
  `.btn` 16px radius 30px padding 10px 30px; `.btn-primary` hover → black
  `#000`; `.form-control` 43px radius 30px; `.section-title` 40px (30px
  mobile) weight 900 blue; `.site-section` padding 2.5em/5em; hero h1
  3rem (2rem) weight 900 uppercase; footer-subscribe button white bg
  black text height 43px.
- **Design approach:** clean modern corporate one-pager, photo-driven,
  blue pill buttons, uppercase hero headline, dark footer. Paraphrase
  lorem copy but keep the same content kinds (team names/roles, service
  titles, plan names/prices, FAQ questions, blog meta, contact info).
  Portfolio tabs + testimonial slider via React state (original uses
  isotope + owl-carousel). Sticky nav via scroll listener. Parallax/AOS
  fade-up optional (IntersectionObserver) — keep it subtle per repo
  conventions.
- **Placeholders:** seeded picsum — `unison-hero` (subject-critical:
  open-plan office with people per screenshot — SCREEN the seed),
  `unison-about` (office/desk), `unison-team-<n>` (n 1..8: professional
  headshots), `unison-portfolio-<n>` (n 1..8: design/work shots),
  `unison-testimonial-<n>` (n 1..4: portraits), `unison-blog-<n>` (n 1..3:
  office/tech scenes).
- **Icons:** lucide-react — `MapPin`, `Phone`, `Mail`, `Menu`, `X`,
  `Check`, `ArrowRight`, `Send`, `Facebook`, `Twitter`, `Linkedin`,
  `Instagram`, `Search` (portfolio lightbox — or use zoom overlay only).
  Note: original uses icomoon/flaticon icon fonts — DO NOT copy those
  files; lucide equivalents + blue `text-primary` tint match the look.

## Implementation tasks

1. **Scaffold** — `apps/unison` from the simplest existing app; rename
   package to `@free-react-templates/unison`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it).
2. **Theme tokens** — add `#007bff` / `#71bc42` / `#dee2e6` / `#cccccc` /
   `#f8f9fa` / `#333333` / `#737373` / `#999999` / `#343a40` to `@theme`;
   Work Sans Google Fonts `<link>` in `index.html` (300/400/700/900).
3. **Components** (per section, TDD — tests first):
   - `Navbar` — transparent-over-hero → sticky white on scroll (scroll
     listener), About Us dropdown (+ nested More Links), mobile hamburger
     offcanvas (`aria-expanded`).
   - `Hero` — full-viewport photo, `rgba(0,0,0,.4)` overlay, uppercase
     h1 weight 900, blue pill Get In Touch (scrolls to #contact), mouse
     scroll indicator.
   - `AboutSection` — centered blue section-title, circle-bg photo
     (decorative 300px circle behind), heading + paragraph + green-check
     list + CTA.
   - `TeamSection` — 8 cards (4-col responsive), hover/focus social icons.
   - `PortfolioSection` — filter buttons All/Web/Design/Brand + grid,
     client-side state filtering, hover overlay.
   - `ServicesSection` — 6 icon cards (blue lucide icons).
   - `Testimonials` — quote + author, prev/next state slider.
   - `PricingSection` — 3 cards, big blue price, included/excluded lists,
     black pill Buy Now.
   - `FaqSection` — 8 Q/A blocks in 2 columns.
   - `FeatureSplit` — 2 icon boxes + rounded photo (second about split).
   - `BlogSection` — 3 post cards (photo, title, meta, excerpt, continue
     reading).
   - `ContactSection` — 3 info columns + form (First/Last Name, Email,
     Subject, Message; inline validation; presentational).
   - `Footer` — About / Quick Links / Follow Us / Subscribe Newsletter
     (email + white Send) / copyright bar.
4. **Compose** `App`/page in reference order (hero → about → team →
   portfolio → services → testimonials → pricing → faq → feature split →
   blog → contact → footer).
5. **Verify** — `scripts/verify-app.sh unison` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark all five Oneder rows `[~]`→`[x]` (lines 469,
   1116, 1480, 2346, 2536) + surge URL + `npm run readme:status`; PR
   description must list source template, preview URL, tokens, placeholder
   images.
