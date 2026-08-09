# Shanti (ColorLib Yogalax) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-shanti`.

## Design notes (replication findings)

- **Original:** ColorLib "Yogalax" — free Bootstrap 4 yoga / wellness website
  template (source: https://colorlib.com/wp/template/yogalax/). TEMPLATES.md
  line 236 (Beauty section) — single row, no duplicates (verified: slug
  `yogalax` appears once). Recreation uses the NEW name **Shanti** (Sanskrit
  "peace"; single word, no collision with `ls apps/` or spec folders).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/yogalax/ (HTTP
  200, ~37 KB; title "Yogalax - Free Bootstrap 4 Template by Colorlib").
  Stylesheets: `css/style.css` (69.9 KB — Bootstrap 4.1 base + custom ftco
  styles) + animate, aos, owl.carousel, owl.theme.default, magnific-popup,
  bootstrap-datepicker, jquery.timepicker, flaticon, icomoon, ionicons,
  open-iconic. JS: jquery, bootstrap, owl.carousel, magnific-popup, aos,
  stellar (parallax), animateNumber (counters), main.js. Font: **"Work Sans"**
  (declared in CSS; no <link> in demo head — load from Google Fonts in the
  recreation).
- **Screenshot:** `yogalax-free-template.jpg` (1200×946, viewed in browser) —
  soft mauve/dusty-rose palette; split hero: pale-pink gradient fading to
  white on the left with thin (weight 200) dark headline + typewriter caret,
  lotus-position photo of a woman in white on the right; pill CTA in deeper
  mauve with white text; uppercase spaced nav links; "Why You Should Go To
  Yoga" intro with backbend photo. Live preview browser check confirms the
  scrolled navbar turns solid white with soft shadow (active link stays
  mauve), and the footer is mauve.
- **Visual design (from DOM + CSS tokens + screenshot):** airy wellness
  aesthetic — Work Sans throughout, big thin headlines (hero h1 80px w200,
  section h2 60px w300), body #b3b3b3 16px/1.8, headings #000. Brand mauve
  #d291bc everywhere (links, buttons, active nav + underline, service icon
  glyphs, checkmarks, blog day numbers, price `$`, quote badge, carousel
  active dot, gallery hover circle, gradient overlays, footer bg). Pill
  buttons (radius 30px; hover = transparent + mauve text). 45deg
  #d291bc→transparent overlays (hero 68% width, counter/footer full width,
  opacity .3). Sections alternate white / #f8f9fa; programs cards reveal
  mauve 50% overlay + white text on hover; blog cards overlap their photos
  (margin-top -40px); gallery tiles reveal 60px mauve Instagram circles.
- **Structure (1:1, section order):**
  1. `nav.ftco-navbar-light` — transparent (absolute, top 10px) over hero;
     brand "Yogalax" (22px uppercase ls-2 w300 #000 + lotus icon span 28px
     mauve); links Home(active)/Classes/Schedule/About/Blog/Contact (14px
     w300 #000, padding 1.5rem 20px; active mauve + 2px underline). Scrolled
     (JS): fixed white bar, shadow 0 0 10px rgba(0,0,0,.1), links #000.
     Mobile ≤992px: bg #000, brand/links white (links rgba(255,255,255,.7),
     hover #fff); toggler text "Menu" + menu icon.
  2. `section.hero-wrap.js-fullheight` — 100vh cover bg_2.jpg + overlay
     (45deg mauve gradient, w68%, opacity .3); h1.typewrite 80px w200 #000
     rotating ["Inspiration For Joyful Living.", "Effective Therapy Against
     Stress.", "Flexibility is A Second Power."] with caret; h2 w200 "Do Yoga
     today for a better tomorrow"; pill btn "15 Day Free Trial" (p-3 px-4).
  3. `section.ftco-intro` — cover intro.jpg band; right col-md-6:
     h2 "Why You Should Go To Yoga" + lorem + ul.do-list (5 items: check
     circle icon 22px mauve + 24px w300 label: Yoga boosts brain power / Yoga
     helps you to breathe better / Yoga improves your strength / Yoga helps
     you to focus / Yoga helps give meaning to your day).
  4. `section.ftco-section-services.bg-light` — 4× col-md-3 services: 100px
     circle bg #f7ebf3, 44px mauve flaticon (like, lotus, meditation,
     lotus-1) + h3 20px w500 (Healthy Lifestyle / Body & Mind Balance /
     Meditation Practice / Edeology) + lorem. NO section header.
  5. Programs `section.ftco-section` — subheading "Yoga Classes" + h2
     "Choose Your Level & Focus"; 6× col-md-6 col-lg-4 `a.package-program`:
     400px cover photo (program-1..6.jpg), hover: `:after` #d291bc overlay
     opacity .5 + white .text (opacity 0→1; h3 30px w500 + lorem). Titles:
     Group Lessons / Yoga For Beginners / Yoga For Pregnant / Yoga For
     Couples / Bikram Yoga / Yoga Barre.
  6. Pricing `section.ftco-section.bg-light` — subheading "Pricing Tables" +
     h2 "Membership Cards"; 3× col-md-4 `div.block-7` (white, p-30, shadow
     0 24px 48px -13px rgba(0,0,0,.05)): h2.heading 14px uppercase w500 (Year
     Card / Monthly Card / Weekly Card); price: mauve sup $ (24px) + number
     (449/200/85); excerpt "For 1 Year/1 Month/1 Week"; h3.heading-2
     "Enjoy All The Features" (14px uppercase ls-1 w600); 4 li #4d4d4d;
     full-width pill "Get Started" (d-block px-2 py-4, uppercase w600 ls-1).
     Year list: Onetime Access To All Club, Group Trainer, Book A Group
     Class, Fitness Orientation; Monthly/Weekly: Group Classes, Discuss
     Fitness Goals, Group Trainer, Fitness Orientation.
  7. Testimonial `section.testimony-section` — subheading "Testimony" + h2
     "Successful Stories"; owl carousel, 5 `div.testimony-wrap.p-4.pb-5`:
     quote p + 40px mauve circle badge (white quote icon, left -20px, v-
     centered); 110px round avatar + name (18px w500 #000) + "Customer"
     (13px). Chrome: inactive slides opacity .4; nav arrows mauve; dots 10px
     rgba(0,0,0,.2), active mauve gradient.
  8. Counter `section.ftco-counter.ftco-bg-dark.img#section-counter` — cover
     bg_3.jpg, parallax, base #090808 + full overlay (45deg mauve, .3); 4×
     block-18: strong.number 30px count-up (data-number) + label — 5000 Happy
     Customers / 4560 Yoga Workshops / 570 Years of Experience / 900 Lesson
     Conducted.
  9. Blog `section.ftco-section.bg-light` — subheading "Blog" + h2 "Recent
     Posts"; 3× col-md-4 blog-entry: a.block-20 270px cover (image_1..3.jpg)
     - div.text.p-4 white card margin-top -40px; date: span.day 58px w300
       mauve (31/27/26) + span.yr 2018 + span.mos December (#b3b3b3);
       h3.heading 18px w400 "Young Women Doing Yoga" + lorem.
  10. Gallery `section.ftco-gallery.ftco-section` — subheading "Gallery" + h2
      "See the latest photos"; 4× col-md-3 a.gallery.image-popup.img 270px
      cover (gallery-1..4.jpg) + hover 60px mauve circle (white instagram
      icon, opacity 0→1); magnific popup lightbox in original.
  11. Footer `footer.ftco-footer` — bg **#d291bc**, padding 4em 0, full
      overlay; h1.logo "Yogalax" (30px w300 white); h2.location "203 Fake St.
      Mountain View, San Francisco, California, USA" (24px rgba(255,255,255,
      .9)); ul.ftco-footer-social: 3× 50px circles bg rgba(255,255,255,.05)
      (twitter, facebook, instagram); bottom bar: copyright + heart +
      Colorlib credit → replace with repo-standard credit.
  12. `#ftco-loader.show.fullscreen` — fullscreen white loader, 48px circular
      SVG (path-bg #eeeeee, path #F96D00 in original — leftover orange; use
      brand mauve #d291bc for consistency).
- **Design tokens extracted from `css/style.css`:**
  - Brand mauve **#d291bc**: links, .btn.btn-primary bg (hover: transparent
    bg + mauve border/text), active nav + underline, brand icon, service
    glyphs, checkmarks, blog day, price sup, quote badge, carousel active
    dot, gallery hover circle, overlays (45deg gradient → transparent,
    opacity .3; hero w68%, others 100%), package hover overlay (.5), footer
    bg.
  - Circle bg **#f7ebf3** (services 100px); dark **#090808** (counter);
    light **#f8f9fa** (services/pricing/blog); headings **#000**; body
    **#b3b3b3** (16px/1.8); spans #bfbfbf; pricing list **#4d4d4d**;
    testimonial text rgba(0,0,0,.8); card shadow 0 24px 48px -13px
    rgba(0,0,0,.05); footer social bg rgba(255,255,255,.05).
  - Font: **Work Sans** (Google Fonts in recreation). Hero h1 80px w200; h2
    60px w300 (28px small screens); brand 22px uppercase ls-2 w300; nav 14px
    w300; body 16px/1.8 w400; blog day 58px w300; section subheading 16px
    uppercase ls-3 #b3b3b3.
  - Buttons: pill `border-radius: 30px`; .btn.btn-primary bg #d291bc, 1px
    solid #d291bc border, white text, hover transparent + mauve text;
    pricing/package: uppercase w600 ls-1; pricing full-width d-block py-4.
  - Spacing: .ftco-section padding 7em 0 (6em small); hero 100vh; intro
    cover; block-20/gallery tiles 270px; package img 400px; counter 7em 0;
    footer 4em 0; blog card overlap -40px; nav link padding 1.5rem 20px.
  - Micro-detail: AOS fade-up/fade-left entrances (ftco-animate); body
    border-top 2px #dee2e6; typewriter caret border-right.

## Implementation tasks

- [ ] Spec-first: `openspec/specs/template-shanti/spec.md` already on main
      (prep). Open a `feat/template-shanti` branch.
- [ ] Copy the simplest existing wellness/single-page app (e.g. `apps/halcyon`
      or `apps/sooth`), rename package to `@free-react-templates/shanti`, run
      `npm install` at root so `package-lock.json` registers the workspace
      (grep `free-react-templates/shanti`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap — see repo memory notes).
- [ ] TDD: write tests first per spec requirement, then implement: 1. `Navbar` — transparent-over-hero bar (absolute), brand lotus icon +
      "Shanti", links Home(active)/Classes/Schedule/About/Blog/Contact,
      fixed white bar + shadow on scroll (active stays mauve), mobile dark
      bar + toggler with aria-expanded. Test both desktop + mobile
      duplicate-link rendering (getAllByRole + index). 2. `Hero` — 100vh cover photo, 45deg mauve gradient overlay (w68%),
      typewriter headline (3 rotating phrases, caret), subheading, pill
      "15 Day Free Trial" button. Typewriter: interval-based state machine
      (type/erase/rotate), cleaned up on unmount. 3. `Intro` — cover image band, right-aligned heading + lorem +
      5-item checklist (CheckCircle2 mauve + 24px w300 labels). 4. `Services` — 4 cards: 100px #f7ebf3 circle + mauve lucide icon
      (HeartPulse, Flower2, Brain, Sparkles) + h3 + lorem. 5. `Programs` — subheading + h2 header; 6 photo cards (400px) with
      mauve hover overlay + white centered text fade-in (focusable links). 6. `Pricing` — 3 white cards (Year/Monthly/Weekly) with price, excerpt,
      "Enjoy All The Features", feature lists, full-width pill "Get
      Started". 7. `Testimonial` — carousel of 5 slides (quote + mauve quote badge +
      avatar + name + "Customer"), accessible dots/arrows, auto-advance. 8. `Counter` — dark parallax band, 4 count-up stats (intersection
      observer + animation), overlay. 9. `Blog` — 3 cards: 270px photo + overlapping white card, mauve day
      number + month/year, title, lorem. 10. `Gallery` — 4 photo tiles with hover-revealed mauve Instagram
      circle (focus-within for keyboard). 11. `Footer` — mauve bg, brand, address, 3 social circles, repo-standard
      credit bar.
- [ ] Theme tokens in `@theme`: `--color-brand: #d291bc`, `--color-blush:
    #f7ebf3`, counter dark `#090808`, light `#f8f9fa`, body text `#b3b3b3`,
      heading `#000`.
- [ ] Work Sans Google Fonts `<link>` in index.html (weights 200/300/400/500/
      600).
- [ ] Placeholders: `picsum.photos/seed/shanti-<n>/<w>/<h>` (hero,
      intro band, 6 programs, 5 avatars, 3 blog, 4 gallery, counter bg);
      lucide-react icons (Flower2, CheckCircle2, HeartPulse, Brain, Sparkles,
      Quote, Instagram, Twitter, Facebook, Menu, Heart); loader = inline SVG
      circular spinner with mauve stroke.
- [ ] Paraphrase demo copy where needed but keep the same kind of content
      (headlines, checklist items, program titles, pricing, testimonial
      names, footer address).
- [ ] PR description: source = Yogalax, preview URL, tokens (mauve #d291bc,
      #f7ebf3, #090808, Work Sans, pill buttons), renames, placeholder
      images, and note that the demo's loader stroke (#F96D00) was replaced
      with the brand mauve.
