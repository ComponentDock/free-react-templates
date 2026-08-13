# Spotless (ColorLib Cleaning) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-spotless` by an implementer stream.

## Design notes

- **Original:** ColorLib "Cleaning" — free cleaning company website template.
  Source: https://colorlib.com/wp/template/cleaning/ (Bootstrap 5 category;
  TEMPLATES.md has a duplicate unchecked entry for this slug — one
  recreation covers both).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/cleaning/`
  (HTTP 200, 48KB) + `css/style.css` (~41KB, unminified) + `css/rockville.css`
  (custom display-font @font-face — do NOT copy). Structure below is from the
  DOM + CSS tokens. Screenshot `cleaning-free-template.jpg` (1200×946)
  confirms: dark navy (#16273f) header bar, white uppercase nav links,
  yellow pill "APPOINTMENT" button right; hero = window-cleaning photo
  background, white organic blob panel left (uppercase blue-ish eyebrow, dark
  bold headline "We Will Make Absolutely Any Place Clean, Neat", yellow
  "FREE QUOTE" pill), blue-gloved-hand spray-bottle photo right; about split
  with smiling woman cleaner (blue plaid shirt, yellow gloves, thumbs up)
  left + "ABOUT CLEANING COMPANY" blue label + "Better life for everyone" +
  yellow "LEARN MORE" pill; flat modern, navy/yellow/white, generous
  whitespace.
- **Structure observed (1:1):**
  1. `header` → `.header` (bg #16273f): `.header__logo` (Rockville Solid
     display wordmark + icon; padding 24px 0) left; centered uppercase white
     links Home / About / Services / Pages / Pricing / Services Details /
     Blog Details / Blog / Contact; right "Appointment" `.site-btn` yellow
     pill; slicknav hamburger on mobile.
  2. `section.hero.set-bg` (bg `img/hero/hero-bg.png`, cover): eyebrow "The
     best cleaning service ever" (uppercase), H1 "We Will Make Absolutely
     Any Place Clean, Neat", yellow "Free quote" `.site-btn`. Screenshot
     adds white blob panel + right glove/spray photo.
  3. `section.about.spad`: left photo (cleaner portrait); right
     `.section-title` eyebrow "About cleaning company" + H2 "Better life for
     everyone" (40px/500 #111) + paragraph ("At bTaskee, it is our duty to
     provide quality home services…" — paraphrase) + yellow "Learn More".
  4. `section.services`: `.section-title` "Our services" / "Better life for
     everyone"; 6 `.services__item` cards (DOM repeats "Residential cleaning
     Starting from $50.00" 4× — write 6 distinct services), hover overlay
     `.services__item__hover` slides up (bottom: 0).
  5. `section.chooseus.spad`: `.section-title` "Why choose us?" / "Why
     People Choose us?"; 4 `.chooseus__item` centered blocks (height 274px,
     decorative shape bg, z-index 1): "Professional", "Eco-friendly", + 2
     more paraphrased (e.g. Affordable Rates, Fully Insured & Trusted).
  6. `section.testimonial.spad.set-bg` (bg `img/testimonial/testimonial-bg.png`,
     height 536px): `.testimonial__slider` owl-carousel — quote cards +
     names (Sophia Allison, …); static 2-card layout OK.
  7. `section.team.spad`: `.section-title` "Our team" / "Better Life For
     Everyone" + "Join us" button; 4 cards — Danny George / Andrew Horton /
     Georgia Foster / Sue Burns, role "Cleaner".
  8. `section.work.spad.set-bg` (bg `img/work-bg.jpg`): `.section-title`
     "How it work" / "Get Amazing Cleaning In 3 Simple Steps"; 3
     `.work__item` steps — `.work__item__icon .icon` 170px circle bg
     #287ff9 radius 50%: "01 Pick a suitable plan", "02 Set your schedule",
     "03 Get things done" + copy.
  9. `section.latest.spad`: `.section-title` "Our Blog" / "News And Tricks"
     - "View all"; 3 blog cards — date "Feb 28, 2020", category
       "Advertising", title, meta "25 Views · 02 Comments".
  10. `section.callto.set-bg` (bg `img/callto-bg.jpg`): "Free Call Back" +
      copy + phone "+1 970-668-3568".
  11. `footer` → `.footer` (bg #16273f, padding-top 70px): contact —
      "777 Kansas Star Drive, Mulvane, KS 67110, USA", "+1 316-719-5000",
      "Cleaning@support.com" (paraphrase); "Company" links (About, Services,
      FAQs, Contact); "Services" links (Classic, Personal, Professional,
      Premium); "Newsletter" form; copyright bar → Component Dock link.
- **Design tokens:** Primary blue **#287FF9** (eyebrow spans, work icon
  circles, accents). Accent yellow **#FFD823**/**#FFD723** (`.site-btn` bg
  rgba(255,215,35,0.3) in CSS; solid yellow in screenshot — use solid for
  fidelity). Dark navy **#16273F** (header + footer). Dark **#111111**
  (headings, button text), **#444444** secondary. Muted **#888888**/**#ADADAD**.
  Light bgs **#F1F8FF**/**#F2F8FF**, **#F5F5F5**. Fonts (Google Fonts):
  **Rubik** (body + buttons 500), **Bai Jamjuree** (secondary accents);
  Rockville Solid is a custom woff — replace with bold Rubik for the logo.
  Buttons `.site-btn`: radius **50px** pill, uppercase, letter-spacing 2px,
  14px, padding 12px 40px 10px, color #111. `.section-title` eyebrow: 16px
  #287ff9 700, letter-spacing 4px, uppercase, mb 16px; h2 40px #111 500; mb
  50px. `.set-bg`: cover, no-repeat, top center.
- **Recreation decisions:** single-page landing with anchor nav (Home, About,
  Services, Why Us, Team, Blog, Contact) + "Appointment" CTA; sticky header
  #16273f; hero photo bg + white rounded blob panel (organic blob via
  border-radius) + glove/spray picsum right; 6 services cards (lucide icons,
  hover overlay slide-up); 4 choose-us features; testimonial photo band (2
  quote cards); team 4-up; 3-step work band with 170px #287ff9 circles; 3
  blog cards; "Free Call Back" band; dark 4-column footer + subscribe;
  picsum seeds `spotless-N`; Rubik + Bai Jamjuree via `<link>`; lucide-react
  icons; copy paraphrased into real cleaning copy (no lorem).

## Tasks / todo outline

1. Scaffold `apps/spotless` (copy simplest existing app; package
   `@free-react-templates/spotless`; `npm install` at root to register the
   workspace in package-lock.json; `injectUiSource()` in vite.config.ts).
2. `src/index.css`: `@theme` tokens — brand blue #287ff9, yellow #ffd823,
   navy #16273f, darks #111111/#444444, muted #888888/#adadad, light bgs
   #f1f8ff/#f5f5f5, fonts Rubik (body) + Bai Jamjuree (accents), pill radius
   50px.
3. `Header.tsx` (sticky, bg #16273f): "Spotless" logo (bold wordmark +
   lucide Sparkles), uppercase nav links (Home, About, Services, Pages, Blog,
   Contact), yellow pill "Appointment", mobile hamburger menu.
4. `Hero.tsx` (photo cover bg): eyebrow, headline "We Will Make Absolutely
   Any Place Clean, Neat", yellow "Free quote" pill, white blob panel +
   right-side glove/spray picsum photo (desktop).
5. `About.tsx`: left cleaner portrait (picsum), right — eyebrow "About
   cleaning company", H2 "Better life for everyone", paragraph, yellow
   "Learn More" pill.
6. `Services.tsx`: "Our services" / "Better life for everyone" + 6 cards
   (lucide icon, title, "Starting from $50.00", "Book now", hover overlay
   slide-up).
7. `ChooseUs.tsx`: "Why choose us?" / "Why People Choose us?" + 4 centered
   feature blocks (Professional, Eco-friendly, Affordable Rates, Fully
   Insured & Trusted).
8. `Testimonials.tsx`: photo-band section + 2 quote cards (Sophia Allison +
   second customer); optional lightweight carousel.
9. `Team.tsx`: "Our team" / "Better Life For Everyone" + "Join us" button +
   4 cleaner cards (Danny George, Andrew Horton, Georgia Foster, Sue Burns).
10. `WorkSteps.tsx`: photo-band section, "How it work" / "Get Amazing
    Cleaning In 3 Simple Steps" + 3 steps with 170px #287ff9 circular icons.
11. `Blog.tsx`: "Our Blog" / "News And Tricks" + "View all" + 3 cards (date,
    category, title, views/comments meta).
12. `CallToAction.tsx`: photo-band "Free Call Back" + copy + phone number.
13. `Footer.tsx` (bg #16273f): contact info, Company + Services link
    columns, Newsletter form (input + button), copyright bar with
    Component Dock link.
14. `App.tsx` composition (order 1:1), document title "Spotless — Cleaning
    Services Template".
15. Tests per component (scenario-style), 100% coverage; run
    `npm run verify:app -- spotless`.
16. Commit `feat: spotless — cleaning services template (ColorLib Cleaning)`,
    push `feat/template-spotless`, open + immediately squash-merge PR,
    re-dispatch `Deploy to Surge.sh -f app=spotless` if needed, mark `[x]`
    in TEMPLATES.md (both duplicate entries) with surge URL,
    `npm run readme:status`.
