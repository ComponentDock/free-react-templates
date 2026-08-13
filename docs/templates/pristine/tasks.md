# Pristine (ColorLib Cleaningservice) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-pristine` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Cleaningservice" — free cleaning company website
  template. Source: https://colorlib.com/wp/template/cleaningservice/ (two
  `- [ ]` entries in TEMPLATES.md — lines 563 and 939; mark both `[x]` when
  done).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/cleaningservice/`
  (HTTP 200, ~36.2KB, `<title>` "Cleaning Service") + `assets/css/style.css`
  (~78.2KB, SCSS-compiled). Rendered in a browser and inspected visually;
  computed styles verified for hero bg, header-top, footer, buttons. The
  TEMPLATES.md screenshot (`cleaningservice-colorlib-template.jpg`, 1200×946,
  browser chrome at top — apparent "search bar" is the address bar) confirms
  the design. Aesthetic: bright, friendly, high-contrast — navy #0E1B50 +
  blue #006CFF + yellow #FFF323, Rubik type, pill buttons everywhere.
- **Structure observed (1:1):**
  1. `header.header-area` — `.header-top` (bg #0E1B50, padding 11px 210px,
     hidden <576px): left "Call for Free Estimate! We're the Dust Busters:
     700-567-8990" + "Opening Hour: Monday – Friday : 8am – 4pm" (white
     14px, li right-borders 1px rgba(255,255,255,0.2)); right `.header-social`
     (facebook/instagram/twitter icons, white, hover rotateY(180deg)).
     `.header-bottom.header-sticky` (white): `.logo` (logo.png) left, nav
     Home / Services / Project / About / Blog (submenu: Blog, Blog Details,
     Elements) / Contact, right `.header-btn` "Request Free Quote" (solid
     blue #006CFF pill, 13px 26px, radius 30px). Sticky scroll state:
     `.sticky-bar` fixed, white, shadow 0 10px 15px rgba(25,25,25,0.1),
     padding 15px 0. Mobile: `.mobile_menu` slicknav → repo-standard
     hamburger menu.
  2. `div.slider-area` — `.slider-cap-wrapper` bg **#FFF323**: `.hero-img`
     left (52%, hero_img.jpg); `.hero-caption` right (47%, text-center):
     hero-icon.svg (bubbles), `h1` "Best cleaning services helping
     customers worldwide." (50px/500/#0E1B50/lh 1.2, `<br>` breaks), `p`
     "With over 25 years of experience cleaning everything from houses to
     offices, you can trust us.", `a.btn_02` "Our Services" (solid navy
     #0E1B50 pill, 17px 34px, radius 30px; hover → transparent + blue
     border + blue text). Decorative `.hero-shape` SVG behind (left 37px,
     top -101px). Single slide (no carousel needed).
  3. `div.services-wrapper > .services-area` (white, pt 100px, margin
     0 50px): `.section-tittle` centered — `span` "Our Services"
     (#006CFF, mb 22px) + `h2` "Take a look at the variety of services we
     offer" (40px/500); 3 `.single-blogs.single-blogs2` cards (col-lg-4):
     `.blog-img` (services1..3.jpg, hover ::before rgba(84,84,84,0.6)),
     `.blogs-cap` center — `h5 > a` (Commercial Cleaning / Residential
     Cleaning / Carpet & Floor Cleaning; #0E1B50 22px/500), `p` blurb,
     `a.red-btn2 > i` circle (50px, 1px solid #E8E7D3, navy arrow; hover
     bg #006CFF white arrow).
  4. `div.visit-tailor-area.fix`: `.tailor-offers` left (49% w, 676px h,
     bg offers1.jpg cover, ml 50px, ::before #E8E7D3 strip 20% left -50px
     z -1) + `.info-man` (bg #FFF323, absolute bottom-right, padding
     35px 37px): `h3` "25" (#0E1B50 120px/500) + "Years of Experience";
     `.tailor-details` right (36% w, padding 20px 20px 20px 80px): `h2`
     "We know how to build trust & offer the highest quality" (40px) + 2
     paragraphs + `a.btn.mt-15` "Learn More" (solid blue #006CFF pill).
  5. `section.about-area` (::before #F3F3EB strip 80% left, z -1): left
     `.about-caption` — `h2` "Satisfaction<br>Guarantee" (40px/600) + `p`;
     right `.about-img` (about1.jpg, w-100).
  6. `div.testimonial-area.section-padding` (white, 100px): `.section-tittle`
     `h2` "What Our Client Sayes" (typo in source — paraphrase to "What
     Our Clients Say"); `.h1-testimonial-active.dot-style` — 3
     `.single-testimonial`: quote logo img + `p` (20px #232F55, underline)
     - `.testimonial-founder`: 5 stars (#0E1B50) + span "- Robert" (14px
       #4C526E); dots.
  7. `div.gallery-area` (container-fluid p-0): 2 `.single-gallery` tiles
     (col-xl-6 p-0, mb 30px): `.gallery-img` (580px, gallery1..2.jpg
     cover); hover `.thumb-content-box > .thumb-content` — `h3` white
     30px/600 + `p` + yellow (#FFF323) arrow circle link.
  8. `div.team-area.section-padding`: `h2` "Expert Team Members";
     `.team-active` carousel — `.single-team` (margin 0 12px): `.team-img`
     (team1..5.jpg, hover scale(1.1)) + `.team-social` (3 icons:
     facebook-f/twitter/globe, slide up on hover); `.team-caption` — `h3 >
a` name (#33384e 22px/500, hover #006CFF) + `p` role (#57667e).
     Source names: Sharon Needles / John Withawind / Doug Lee Duckling /
     Buster Hyman ×2 — paraphrase to 4-5 distinct names + roles
     (e.g. Residential Cleaner Expert).
  9. `div.want-wrapper` (bg #FFF323, pt 50px pb 20px) > `.wantToWork-area`:
     (a) headphones icon + `h2` "Get Free Phone Call" (#132E43 30px/500) +
     `p` (14px #2D0000); (b) phone input (white pill 50px r30 border 0,
     text #006CFF, placeholder "Your phone no." #0E1B50); (c) Services
     select (white pill 50px, #0E1B50 text, open list bg #FFF323; options
     Services/Category 1-3 → paraphrase to service types); (d) `a.btn_01`
     "Send Request" (outline navy pill — 1px #0E1B50, navy text, 13px 27px,
     r30; hover solid blue white).
  10. `footer > .footer-area.footer-padding` (bg #0E1B50): `.footer-logo`
      (logo2_footer.png) + `.footer-pera` blurb (16px/300, lh 1.8);
      "Navigation" h4 (white 20px/400) links Home/About/Services/Projects/
      Blog/Contact; "Services" links Residential/Commercial/Window/Building
      cleaning; "Contact Us" — address "65/A, Green Lane, Kings Garden, CA
      2367", "info@cleaningservice.comm" [sic], "10 (23) 267 3562"
      (paraphrase); `.footer-copy-right` — copyright line (source credits
      Colorlib → Component Dock credit; text #9B9EAC 15px/300, links/heart
      #006CFF).
- **Design tokens:** Brand blue **#006CFF** (kicker spans, header-btn, Learn
  More, circle hover, links/hovers, input text, footer links+heart). Navy
  **#0E1B50** (top bar, footer, h1, btn_02 bg, btn_01 text/border, card
  titles, "25", stars, select text, placeholder). Yellow **#FFF323** (hero
  bg, info-man box, want-wrapper bg, gallery arrow, select open list).
  Cream **#F3F3EB** (about strip), beige **#E8E7D3** (trust strip + circle
  border), footer text **#9B9EAC**, CTA h2 **#132E43** / p **#2D0000**,
  quote **#232F55** (underlined), team **#33384e**/**#57667e**, author
  **#4C526E**. Font: **Rubik** (Google Fonts). Buttons: radius **30px**
  pills; btn_01 outline navy / hover solid blue; btn_02 solid navy / hover
  outline blue; header-btn + Learn More solid blue; red-btn2 50px circle.
  Headings: h1 50px, section h2 40px, card h5 22px, CTA h2 30px, "25"
  120px, footer h4 20px/400. Section paddings: `.section-padding` 100px;
  services pt 100 pb 60 margin 0 50px; gallery tiles 580px. Header states:
  navy top bar; white navbar → sticky white + shadow on scroll.
- **Recreation decisions:** single-page landing with anchor nav (Home,
  Services, Project, About, Blog, Contact) + blue pill "Request Free Quote";
  sticky white navbar + navy top bar; yellow split hero (picsum photo left
  52%, caption right, lucide Sparkles icon, navy h1, navy pill CTA); 3
  service cards with circle arrow buttons (hover dark overlay + blue
  circle); trust band — photo block with yellow "25 Years of Experience"
  box bottom-right + heading + 2 paragraphs + blue "Learn More"; about on
  cream strip ("Satisfaction Guarantee"); testimonial slider (3 slides,
  quote + 5 stars + author, dots); 2 gallery tiles (580px) with hover
  captions + yellow arrow; team row/carousel (4-5 members, hover social
  overlay); yellow CTA band (headphones icon + "Get Free Phone Call" +
  phone input + services select + outline "Send Request"); navy footer
  (logo + blurb, Navigation/Services/Contact Us, Component Dock credit).
  Images: `picsum.photos/seed/pristine-N/w/h`. Fonts: Rubik via `<link>`.
  Icons: lucide-react (probe exports: Sparkles, Phone, PhoneCall, Clock,
  Headphones, Globe, Star, ArrowRight, ArrowUpRight, ChevronRight — brand
  icons like Facebook/Twitter are NOT in lucide-react, use inline SVG if
  needed). Copy paraphrased into real cleaning copy (no lorem).

## Tasks / todo outline

1. Scaffold `apps/pristine` (copy simplest existing app; package
   `@free-react-templates/pristine`; `npm install` at root to register the
   workspace in package-lock.json; `injectUiSource()` in vite.config.ts;
   MemoryStorage polyfill in src/test/setup.ts if jsdom 30 lacks
   localStorage).
2. `src/index.css`: `@theme` tokens — brand blue #006cff, navy #0e1b50,
   yellow #fff323, cream #f3f3eb, beige #e8e7d3, muted #9b9eac, CTA
   #132e43/#2d0000, quote #232f55, team #33384e/#57667e, font Rubik, pill
   radius 30px.
3. `TopBar.tsx` (navy #0e1b50): call-for-free-estimate + hours left, 3
   social icon links right (hidden on mobile).
4. `Header.tsx` (white, sticky on scroll): "Pristine" logo + nav (Home,
   Services, Project, About, Blog, Contact) + blue pill "Request Free
   Quote", mobile hamburger menu.
5. `Hero.tsx` (yellow #fff323 split): picsum photo left (~52%), right
   caption centered — Sparkles icon, navy h1, subtext, navy pill "Our
   Services" (btn_02 style).
6. `Services.tsx`: kicker "Our Services" + h2 "Take a look at the variety
   of services we offer" + 3 cards (photo, title, blurb, circle arrow
   button; hover overlay + blue circle).
7. `TrustBand.tsx`: photo block + yellow "25 Years of Experience" box
   bottom-right + beige strip; right — h2 "We know how to build trust &
   offer the highest quality" + 2 paragraphs + blue "Learn More" pill.
8. `About.tsx`: cream strip bg + "Satisfaction Guarantee" heading + blurb +
   photo.
9. `Testimonials.tsx`: "What Our Clients Say" + slider (3 slides: quote,
   5 navy stars, author; dot indicators).
10. `Gallery.tsx`: 2 half-width tiles (580px picsum photos) with hover
    caption (white title + blurb + yellow arrow circle).
11. `Team.tsx`: "Expert Team Members" + 4-5 member cards (photo, hover
    social overlay, name + role).
12. `CallToAction.tsx` (yellow bg): headphones icon + "Get Free Phone
    Call" + phone input + services select + outline "Send Request" pill.
13. `Footer.tsx` (navy #0e1b50): logo + blurb, Navigation / Services /
    Contact Us columns, copyright bar with Component Dock link.
14. `App.tsx` composition (order 1:1), document title "Pristine — Cleaning
    Services".
15. Tests per component (scenario-style), 100% coverage; run
    `npm run verify:app -- pristine`.
16. Commit `feat: pristine — cleaning services template (ColorLib
Cleaningservice)`, push `feat/template-pristine`, open + immediately
    squash-merge PR, re-dispatch `Deploy to Surge.sh -f app=pristine` if
    needed, mark `[x]` (both lines 563 and 939) in TEMPLATES.md with surge
    URL, `npm run readme:status`.
