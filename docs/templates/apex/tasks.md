# Apex (ColorLib Pointer) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-apex/` is the claim marker — implementers
> start here.

## Design notes (replication findings)

- **Original:** ColorLib "Pointer" — free consulting agency website template
  (source: https://colorlib.com/wp/template/pointer/; listed FOUR times in
  TEMPLATES.md — line 477, line 1139, line 1391 and line 2351, all `- [ ]`,
  same slug → implement ONE app, mark ALL FOUR rows `[x]` at bookkeeping).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/pointer/ (HTTP
  200, 45.8KB HTML + `css/style.css` 22.5KB + Bootstrap 4 + owl.carousel +
  fancybox + jquery-ui + bootstrap-datepicker + flaticon + icomoon + aos,
  extracted 2026-08-12 during prep). Screenshot `pointer-free-template.jpg`
  (1200×946, AVIF) converted and viewed in the browser.
- **Visual design:** corporate consulting landing led by photography — misty
  mountain peak with a stone staircase and a hiker silhouette at the summit
  (cool grays/browns/whites) with a dark overlay; transparent white-text
  navbar; centered white 900-weight headline; ONE crimson pill CTA
  ("Get Started"); below the fold a white About block: big photo of a woman
  with a CRIMSON box overlapping bottom-right (white text + PURPLE button).
  Page is white/light-gray with crimson accents; clean Roboto-like sans.
- **Palette (CSS-verified):** primary crimson `#e81050` (btn-primary bg,
  section titles, sub-titles, nav hover, .text-primary icons, img-box bg);
  secondary purple `#505288` (img-box Read More button); footer `#333333`
  bg with headings #fff, body `#737373`; blog meta `#b3b3b3`; dark text
  `#25262a`/#000; light bands Bootstrap `#f8f9fa` (services, contact),
  team cards `#f0f0f0`; hero overlay `rgba(0,0,0,.2)`; img-box sub-title
  `rgba(255,255,255,.7)`, img-box p `rgba(255,255,255,.9)`.
- **Fonts:** Roboto SYSTEM stack — `"Roboto", -apple-system,
BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
sans-serif` (no Google Fonts <link> on the reference). Weights: hero h1
  900, section titles 900, body 300–400, testimonial quotes italic.
- **Buttons:** `.btn` font-size 16px, **border-radius 30px** (pill),
  padding 10px 30px; `.btn-primary` crimson bg, hover = white bg + crimson
  text; `.btn-outline-dark` for secondary; newsletter Send is crimson bg
  with BLACK text (keep the quirk).
- **Cards/surfaces:** `.team-member` bg #f0f0f0, hover social overlay on
  photo; `.unit-4` d-flex with 3rem crimson icon left; `.testimonial`
  max-width 800px centered, circular ~100px photo; `.h-entry` blog card
  (img mb 30px, meta 14px #b3b3b3); contact form p-5 white card + p-4 mb-3
  white info cards.

## Section order (1:1, LIVE DOM — comments stripped)

1. **Navbar** `.site-navbar.py-4.js-sticky-header` — absolute/transparent
   over hero: logo "Apex." left; links Home / About Us / Team / Services /
   Testimonials / Blog / Contact right (5px 20px padding, hover #e81050).
   Over hero: logo #fff, links rgba(255,255,255,.7). Sticky (`.is-sticky`):
   solid bg, logo #e81050, links #000. Mobile: hamburger + off-canvas menu.
2. **Hero** `div.site-blocks-cover.overlay` (id=home-section, inline bg
   photo, cover, min-height 100vh, overlay rgba(0,0,0,.2)): centered —
   h1 "We Are The Best Consulting Agency" (3rem/900 #fff), p, crimson pill
   "Get Started". SINGLE block — no slider (the `home-slider` class in the
   DOM wraps the TESTIMONIAL carousel; ColorLib quirk).
3. **About CTA** `div.site-section.cta-big-image` (id=about-section):
   full-width img + `.img-box` (bg #e81050, max-width 550px, padding 3rem,
   absolute bottom -10% right 10%; static on mobile): sub-title "Creative
   Skills" (uppercase 13px ls .1em 70% white) + h2 "Create Your Own Web
   Masterpiece" (2rem white) + p (90% white, weight 300) + purple #505288
   "Read More" button.
4. **Team** `section.site-section.border-bottom` (id=team-section): heading
   col-md-5 LEFT: h2 `.section-title` "Our Dedicated <br> Professionals"
   (40px/900 crimson) + p.lead; grid col-md-6.col-lg-3 × 8: `.team-member`
   (bg #f0f0f0): figure + hover social overlay (Facebook/Twitter/LinkedIn/
   Instagram) + img; .p-3: h3 name + span.position "Product Manager".
5. **Approach** `section.site-section`: centered h2 "Our Approach"; 3 ×
   col-lg-4 `.box-with-humber`: h2 30px with crimson span "01." (18px) +
   "Creative" / "02. Strategy" / "03. Production" + p.
6. **Services** `section.site-section.border-bottom.bg-light`
   (id=services-section): centered h2 "Our Services"; 6 × col-lg-4
   `.unit-4.d-flex`: 3rem crimson icon (autorenew/backspace/av/beenhere/
   business/cloud) + h3 (20px) + p + "Learn More" link.
7. **Testimonials** `section.site-section.testimonial-wrap`
   (id=testimonials-section): centered; carousel of 4 `.testimonial` slides:
   blockquote 1.5rem italic + circular photo (~100px) + name (John Smith,
   Christine Aguilar, Robert Spears, Bruce Rogers). Auto-advance; wrap's
   owl-nav hidden in the reference.
8. **CTA split** `section.site-section` (id=about-section DUPLICATED in the
   source — use a distinct id in the app): left col-md-5 ml-auto:
   `.slide-one-item-alt` slider with 4 photos + Prev/Next text links; right
   col-md-6: h2 "Consulting Agency It's Best" + 2 col-lg-6 `.unit-4` cards
   (icon-adb "Web & Mobile Specialties", icon-assignment "Intuitive
   Thinkers" — each p + Learn More).
9. **Blog** `section.site-section` (id=blog-section): centered sub-title
   "Blog" (13px uppercase ls .2em crimson) + h2 "Our Blog Posts"; 3 ×
   col-lg-4 `.h-entry`: img (mb 30px) + h2 20px title link + `.meta`
   (14px #b3b3b3): "Ham Brook • Jan 18, 2019 • News" + excerpt +
   "Continue Reading..." link.
10. **Contact** `section.site-section.bg-light` (id=contact-section):
    centered sub-title "Services" + h2 "Our Services"; col-md-7: `form.p-5.
bg-white` h4 "Contact Form" (First Name/Last Name 2-up, Email, Subject,
    Message textarea placeholder "Write your notes or questions here...",
    crimson "Send Message" submit); col-md-5: 3 white info cards —
    Address / Phone (+1 232 3235 324) / Email Address (youremail@domain.com).
11. **Footer** `footer.site-footer` (bg #333333, padding 4em/8em): About Us
    (p #737373) / Quick Links (About Us, Services, Testimonials, Contact
    Us) / Subscribe Newsletter (transparent input placeholder "Enter Email"
    - crimson "Send" 43px, BLACK text) / Follow Us (4 brand icon links).
      Bottom bar: "Copyright © All rights reserved | This template is made
      with by Colorlib".

## Implementation tasks (TDD, in order)

- [ ] Scaffold `apps/apex` (copy simplest existing app; package
      `@free-react-templates/apex`; vite.config.ts with `injectUiSource()`;
      npm install at root so package-lock.json registers the workspace)
- [ ] Spec-driven tests first: `Navbar.test.tsx`, `Hero.test.tsx`,
      `AboutCta.test.tsx`, `Team.test.tsx`, `Approach.test.tsx`,
      `Services.test.tsx`, `Testimonials.test.tsx`, `CtaSplit.test.tsx`,
      `Blog.test.tsx`, `Contact.test.tsx`, `Footer.test.tsx`,
      `App.test.tsx` (100% coverage; RTL user-event for menu toggle /
      carousels / forms)
- [ ] `@theme` tokens in `src/index.css`: `--color-primary: #e81050`,
      `--color-secondary: #505288`, `--color-footer: #333333`,
      `--color-body: #737373`, `--color-meta: #b3b3b3`, `--color-team:
  #f0f0f0`, `--color-soft: #f8f9fa`; Roboto system sans font stack
- [ ] Navbar: "Apex." logo, 7 links, white-over-hero → sticky white with
      #e81050 logo + dark links on scroll, mobile hamburger (aria-expanded,
      focus rings)
- [ ] Hero: full-viewport bg photo + rgba(0,0,0,.2) overlay, headline,
      paragraph, crimson pill "Get Started" (single block, NOT a slider)
- [ ] AboutCta: full-width image + crimson floating box (bottom-right,
      ~550px) with sub-title / headline / paragraph / purple Read More;
      stacks on mobile
- [ ] Team: left-aligned crimson heading, 8 cards (picsum seeded square
      portraits, name, "Product Manager", hover social overlay — inline SVG
      brand icons)
- [ ] Approach: 3 numbered columns (crimson "01." spans)
- [ ] Services: light band, 6 icon cards (lucide: RefreshCw, Delete,
      MonitorPlay, BadgeCheck, Briefcase, Cloud)
- [ ] Testimonials: centered carousel, 4 slides, auto-advance (custom hook + timer, cleanup on unmount)
- [ ] CtaSplit: 4-image slider + Prev/Next + heading + 2 feature cards
      (lucide: Smartphone, ClipboardList)
- [ ] Blog: 3 cards (picsum thumbs, title, meta "Author • Jan 18, 2019 •
      News", excerpt, Continue Reading...)
- [ ] Contact: white form card (validation + success state) + 3 white info
      cards
- [ ] Footer: 4 widgets + ColorLib copyright bar; subscribe form with
      validation
- [ ] Gate: `bash scripts/verify-app.sh apex` from repo root (typecheck + lint + 100% coverage + build)
- [ ] Bookkeeping: mark ALL FOUR Pointer rows (lines 477, 1139, 1391, 2351) `[x]` with the apex surge URL; `npm run readme:status`; PR +
      immediate squash merge to main

## Pitfalls / notes

- Pointer is listed FOUR times in TEMPLATES.md (477, 1139, 1391, 2351) —
  ONE app, mark all four rows `[x]`.
- The hero is a SINGLE block. The `home-slider owl-carousel` class in the
  preview DOM actually wraps the TESTIMONIAL carousel (ColorLib markup
  quirk) — do not build a hero slider.
- The CTA-split section duplicates the `about-section` id — give it its own
  id in the app.
- The newsletter "Send" button is `btn btn-primary text-black` — crimson
  background with BLACK text. Keep the quirk for fidelity.
- Hero background photo is SUBJECT-CRITICAL (mountain/staircase scene).
  Screen picsum seeds with the pixel-metric method from the replication
  skill; browser-verify the top pick; pin it and update spec + docs
  together. A generic city/forest seed would break fidelity.
- Brand icons (Facebook/Twitter/LinkedIn/Instagram) are NOT in lucide-react
  — use inline SVG (simple-icons paths).
- `getByText` anchors: "Our Services" appears in BOTH the services section
  and the contact section header — scope queries or use exact/anchored
  regexes; "Learn More" repeats on 8+ cards (use getAllByRole or
  within()).
- Team social overlay and testimonial carousel duplicate some DOM text on
  desktop/mobile variants — use getAllByRole and index the mobile one last.
- `.section-title` is 40px/900 crimson; `.section-sub-title` 13px uppercase
  letter-spaced crimson — use them consistently across sections.
