# Pearly (ColorLib Dental) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-pearly`. Source: ColorLib "Dental" — dental clinic
> template (https://colorlib.com/wp/template/dental/).
> Preview: https://preview.colorlib.com/theme/dental/ (HTTP 200; ~27.5 KB
> HTML, `assets/css/style.css` ~120 KB parsed).

## Design notes (replication findings)

- **Original:** ColorLib "Dental" — dental clinic website (Bootstrap 5 +
  owl-carousel + slicknav + animate + magnific-popup; single font Chivo
  via Google Fonts `@import`). Screenshot `dental-colorlib-template.jpg`
  (1200×946) viewed in browser: split hero (pale mint left panel with
  faint tooth outline + dark-navy headline + rectangular outline button,
  right dental-team photo), about split (left dentist photo, right text
  with teal underline bar + outlined button + PHONE/WORKING TIME/ADDRESS
  blocks), services cards with line icons, bordered testimonial quote
  cards, blog cards, "Get a Call Back" CTA band with mint overlay and
  royal-blue Submit, footer with logo + blurb + social squares + map +
  contact columns.
- **Visual design:** fresh clinical medical brand — mint `#39CCA4`
  primary (header CTA, underline bars, hover fills), dark navy `#122C77`
  (headlines, outlines, footer headings, testimonial borders), royal blue
  `#2845BA` (Submit), pale mint-white `#F9FCFC` section surfaces, body
  gray `#737B92`; Chivo sans-serif everywhere (hero h1 50px 400, section
  h2 44px 400, footer h4 20px 700 uppercase). Buttons square (radius 0):
  solid mint `.header-btn` (white 15px 500, padding 13px 33px), outline
  navy `.btn_01` (1px `#122C77`, 16px 500, padding 19px 36px), 3D-roll
  hero button (248×56px 18px 500 — outline navy face → solid mint on
  hover), solid royal `.btn2` (white 18px 500, 70px tall, padding 14px
  68px).
- **Signature motifs to preserve:**
  - TRANSPARENT → STICKY header with solid mint "Make Appointment" CTA
    (square, radius 0, margin-left 15px); logo = tooth icon + wordmark.
  - SPLIT HERO: left caption column (headline 50px `#122C77` + subtext +
    3D-roll appointment button) over pale mint panel with faint oversized
    tooth outline; right photo column width 52%; floating
    `hero-shape` tooth.png graphic.
  - About: left `tailor-offers` panel (31% width, 828px tall, background
    photo of dentist); right text column with `h3::after` teal underline
    (3px × 100px `#39CCA4`), 3 paragraphs, outline "Make an Appointment"
    button; second column with THREE uppercase contact blocks
    (PHONE / WORKING TIME / OUR CLINIC ADDRESS).
  - Services: `#F9FCFC` bg, `section-tittle` h2 "Our treatment keeps you
    smile" + gray subtext, FIVE cards — 1px border
    `rgba(18,44,119,0.1)`, padding 44px 29px, centered svg line icon
    (margin-bottom 30px) + h4 title.
  - Testimonials: NO section heading; owl carousel of quote cards with
    1px solid `#122C77` border, padding 37px 65px, quotes-sign icon +
    quote + `- Name` founder.
  - Blog: `#F9FCFC` band covering top 59% behind the section
    (`.home-blog::after`), h2 "Latest blog", 3 cards (photo + 18px title
    - excerpt + dark "Read More" text link with underline).
  - CTA band: bg image + mint overlay `rgba(200,255,239,0.6)`; centered
    headphone.svg + h2 "Get a Call Back" (44px 500 `#122C77`) + p "Leave
    your phone number, we will call back"; form row = "Your name" input +
    "Phone no." input (70px tall, bg `#f9f9ff`, radius 0) + solid royal
    blue "Submit" (`.btn2`).
  - Footer: logo + blurb + FOUR 50×50px square social icons (1px border
    `rgba(18,44,119,0.1)`, color `#122C77`, margin-right 10px) + Google
    Maps iframe column (334px tall) + THREE uppercase contact columns
    (h4 20px 700, li `#737B92` 15px); bottom bar border-top
    `rgba(18,44,119,0.1)` → Component Dock credit.
- **Structure (1:1, section order, home page):**
  1. Header: transparent over hero, sticky on scroll — logo left, nav
     Home / About / Treatment / Blog (dropdown: Blog / Blog Details /
     Elements) / Contact, solid mint "Make Appointment" right.
  2. Hero (800px): caption left (h1 "A brighter dental care experienced"
     - p + 3D-roll button + tooth shape), photo right (52%).
  3. About (visit-tailor): photo panel left (31%), text right ("Best
     template for dental specialist" + 3 paragraphs + outline button +
     3 contact blocks).
  4. Treatments: "Our treatment keeps you smile" + 5 icon cards.
  5. Testimonials: 3 bordered quote cards carousel.
  6. Blog: "Latest blog" + 3 article cards.
  7. Call-back CTA: mint-overlay band + headphone icon + name/phone
     inputs + royal-blue Submit.
  8. Footer: logo/blurb/socials + map + contact columns + copyright bar.

## Implementation tasks

- [ ] Scaffold `apps/pearly` (copy simplest existing app, rename package
      to `@free-react-templates/pearly`, `public/CNAME` =
      `pearly.free.componentdock.com`, homepage
      `https://pearly.free.componentdock.com`); `npm install` at root
      to register the workspace in package-lock.json.
- [ ] `index.html`: title "Pearly — Dental Clinic Template", Google Fonts
      `<link>` Chivo (300;400;700;900).
- [ ] `src/index.css`: `@theme` tokens — `--color-mint: #39CCA4`
      (brand), `--color-navy: #122C77` (dark), `--color-royal: #2845BA`
      (submit), `--color-mist: #F9FCFC` (section bg),
      `--color-soft: #F9F9FF` (input bg), `--color-body: #737B92`; font
      Chivo.
- [ ] `src/components/Header.tsx`: transparent-overlay → sticky header —
      logo (tooth lucide icon + wordmark), centered nav (Home / About /
      Treatment / Blog with dropdown Blog, Blog Details, Elements /
      Contact), solid mint square "Make Appointment" button. Mobile
      hamburger menu (transparent mobile menus were a past bug — test!).
- [ ] `src/components/Hero.tsx`: 800px split — left pale mint panel with
      faint tooth outline graphic + h1 "A brighter dental care
      experienced" (navy) + subtext + square appointment button
      (outline navy at rest → solid mint on hover; a rotateX 3D roll is
      nice-to-have, a color-swap hover is acceptable), floating
      tooth-shape decoration; right dental-team photo placeholder (52%).
- [ ] `src/components/About.tsx`: left photo panel (31% width, tall,
      picsum seed) + right column: h3 "Best template for dental
      specialist" with teal underline bar + 3 paragraphs + outlined
      "Make an Appointment" button; second column: PHONE / WORKING TIME /
      OUR CLINIC ADDRESS blocks (uppercase h5 + values; build `tel:`
      href at runtime from a spaced display string, never a literal).
- [ ] `src/components/Treatments.tsx`: `#F9FCFC` bg, section title "Our
      treatment keeps you smile" + subtext, FIVE cards — 1px navy-tint
      border, centered lucide line icon + distinct title (Teeth
      Whitening / Teeth Cleaning / Quality Brackets / Modern Anesthetic
      / Dental Implants).
- [ ] `src/components/Testimonials.tsx`: carousel of THREE quote cards —
      1px solid navy border, Quote icon + quote + "- Name" (3 distinct
      patients).
- [ ] `src/components/Blog.tsx`: "Latest blog" + 3 cards (photo + title +
      excerpt + "Read More" text link). Use dental-appropriate titles.
- [ ] `src/components/CallBackCta.tsx`: bg photo + mint overlay
      (`rgba(200,255,239,0.6)`), Headphones icon + "Get a Call Back" +
      "Leave your phone number, we will call back" + name input +
      phone input + solid royal-blue square "Submit" (link, no backend).
- [ ] `src/components/Footer.tsx`: logo + blurb + 4 square bordered
      social icons (inline SVG — lucide-react has NO brand icons) + map
      placeholder panel (neutral embed or styled placeholder — never the
      source embed URL) + 3 uppercase contact columns + bottom bar with
      Component Dock link (https://www.componentdock.com/).
- [ ] `src/App.tsx` composition + `src/main.tsx` entry; MemoryStorage
      polyfill in `src/test/setup.ts` (copy from apps/cura — jsdom 30
      has no localStorage).
- [ ] Tests first (TDD) mirroring spec scenarios; 100% coverage; run
      `bash scripts/verify-app.sh pearly`.
- [ ] PR description: source (ColorLib Dental), preview URL, tokens
      (mint `#39CCA4`, navy `#122C77`, royal `#2845BA`, `#F9FCFC`,
      Chivo, square buttons, mint-overlay CTA), what differs (wordmark,
      picsum placeholders, distinct treatments/testimonials/blog topics,
      Component Dock credit, map placeholder, no asset copying).
- [ ] Post-merge bookkeeping: mark BOTH TEMPLATES.md Dental rows (line
      ~572 and dup ~1505) `[x]` with the live URL,
      `npm run readme:status`.

## Pitfalls / notes

- The source repeats content everywhere — recreate with DISTINCT values:
  5 treatment titles (source repeats "Teeth Cleaning" as the 5th card),
  3 testimonial names (source repeats "- Sharon Needles" on all three
  slides), 3 dental-appropriate blog titles (source posts are
  oncology/orthopedic), 1 sensible clinic phone/hours/address (source
  repeats "Saturday Offlinea" typo).
- The hero appointment button is a `button_base b3d_roll` 3D rollover
  (two stacked faces, rotateX 3D on hover, 248×56px). A faithful
  approximation: outline navy at rest → solid mint on hover with a
  transition; the full 3D roll is optional.
- `.home-blog::after` paints a `#F9FCFC` band over the TOP 59% of the
  blog section — the card row sits on white below it. Replicate with a
  tinted top band behind the heading area.
- Testimonials section has NO heading in the source — don't invent one.
- The footer map is a Google Maps iframe (source embeds a Burj Khalifa
  pin). Never copy the source embed URL; embed a neutral location or use
  a styled placeholder panel.
- lucide-react has no brand icons — Facebook/Instagram/LinkedIn/YouTube
  must be inline SVGs; probe every lucide export with the typeof check
  before importing.
- No `[~]`/`[x]` markers were set by the prep stream — implementer
  claims via the usual `[~]` push on `feat/template-pearly`.
- No `colorlib` string anywhere in `apps/pearly/*` — provenance lives
  only here, TEMPLATES.md, and the PR.
- Never write a literal `tel:+<digits>` URI in source (secret-scan
  masker rewrites it); compute from a spaced display string at runtime
  or render as plain text.
- Picsum seeds for dental/medical/people photos need subject screening —
  pick seeds that provably render appropriate scenes and pin them in
  spec + tests + docs together.
- Mobile header: past templates shipped transparent mobile menus — make
  sure the mobile drawer/menu is solid and tappable (user tests on
  phone).
