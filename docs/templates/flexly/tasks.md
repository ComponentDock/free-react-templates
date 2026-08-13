# Flexly (ColorLib Slim) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-flexly`.

## Design notes (replication findings)

- **Original:** ColorLib "Slim" — a FITNESS/GYM one-pager (page title "Slim
  - Free Bootstrap 4 Template by Colorlib"; source:
    https://colorlib.com/wp/template/slim/, appears 3× in TEMPLATES.md —
    line 497, line 1875, line 2358; mark ALL `[x]` when done). The app name
    MUST differ from the source — hence **Flexly** (single lowercase word,
    "flex" = gym/muscle + family "-ly" suffix; no collision with `apps/`,
    `openspec/specs/`, or `docs/templates/` — verified 2026-08-13).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/slim/
  (HTTP 200, ~72 KB HTML; `css/style.css` ~83 KB parsed for tokens).
  Stack: Bootstrap 4 + owl.carousel (hero slider) + jQuery tabs
  (v-pills) + magnific-popup (gallery lightbox) + AOS + ionicons +
  flaticon + icomoon — recreate ALL interactivity client-side in React.
- **Screenshot:** `slim-free-template.jpg` (1200×946, viewed in browser):
  white navbar ("SLIM" logo, "Home" in salmon) over a split hero — LEFT
  salmon tagline "WELCOME TO THE CLUB", huge bold black "Get A **Perfect**
  Body **Figure**", lorem, salmon PILL "Join with us"; RIGHT photo of an
  athletic woman in teal sportswear running up outdoor stairs with a large
  vertical "STRENGTH" word in bold black caps along the photo's left edge;
  BOTTOM a solid SALMON band with three columns (dumbbell · clipboard-check
  · sneaker line icons + titles: Free Lesson / 35% Discount / Free
  Testing).
- **Visual design (DOM + CSS tokens + screenshot):** BRAND CORAL `#fe9191`
  — `.btn.btn-primary` fill (1px salmon border, white text; hover keeps
  salmon bg, text `#fe9191`), `.ftco-services` salmon band, counter number
  `span.number`, subheading accents; DARKER CORAL `#fe7878` (6 uses —
  band's second bg declaration, hover/darker variant). BLACK `#000000` —
  navbar (bg-dark; scrolled state = fixed WHITE `#fff` + shadow
  `0 0 10px rgba(0,0,0,0.1)`), footer bg, hero overlay, dark counter /
  testimony sections, vertical `.vr` text. LIGHT `#f8f9fa` (`bg-light`) —
  Programs + Blog section backgrounds. Font: **Nunito Sans** (Google
  Fonts), headings 40px/600 (28px mobile), subheadings small uppercase
  letter-spaced. Buttons: `border-radius: 30px` PILL. Round images:
  `.coach-img` 120×120, `.user-img` 130×130 (50% radius). Sections
  `padding: 7em 0`, footer `7em 0`.

## Section-by-section fidelity notes (build order)

1. **Navbar** — absolute/transparent over the hero (`bg-transparent
absolute top-0 z-10`), brand "Flexly" left; 8 links right: Home
   (active), Programs, Services, Schedule, About, Coaches, Blog, Contact
   — anchor to the section ids above. On scroll: `fixed` + white bg +
   shadow. Mobile: burger toggler → collapsible panel (`aria-expanded`).
2. **Hero slider** — full-height carousel, 2 slides (state machine, keep
   the active index + auto-advance). Each slide: RIGHT photo
   (picsum athletic seed) with VERTICAL word "STRENGTH"/"WORKOUT" via
   `[writing-mode:vertical-lr]` + `rotate(180deg)` utility class; LEFT
   text: tagline + h1 with emphasized `<span>`s (Perfect/Figure,
   Temporary/Forever) + lorem + "Join with us" pill CTA
   (`rounded-full bg-[#fe9191] px-5 py-3 text-white`).
3. **Salmon band** — `bg-[#fe9191]` section, 3 centered columns
   (dumbbell, clipboard-check, footprints/shoe lucide icons): Free Lesson
   · 35% Discount · Free Testing.
4. **Programs (tabs)** — `bg-[#f8f9fa]`; left vertical tab list (8 items
   w/ icons, active = salmon highlight), right panels (h2 + paragraph +
   link). Accessible tablist (role=tab/tabpanel, aria-selected,
   arrow-key support if easy — at minimum click + aria).
5. **Services** — centered eyebrow "Sexy & Healthy" + h2 "Get a Perfect
   Body"; 5 cards (icon circle + h3 + p): Make Your Body Harmonic, Weight
   Loss Program, Group Personal Trainings, Optimal Diet Selection,
   Individual Training Programs.
6. **Schedule (tabs)** — centered "Schedule" / "Training Schedule"; left
   7 day tabs (day + program label), right panels with coach rows: round
   photo 120×120 + time "08:00AM - 10:00AM" + class h2 (Basic Exercise /
   Yoga Program / Body Building) + lorem + coach name + position.
7. **About / counter** — split: left photo (about.jpg → picsum), right
   eyebrow "A Few Words About Us" + h2 "We're Functioning for Almost 20
   Years" (count-up 0→20, number `text-[#fe9191]`) + 2 paragraphs.
8. **Testimonials** — dark section, heading "What Client Says", 5 cards:
   quote icon + round avatar + text + name + position.
9. **Coaches** — heading "Our Coaches", 4 cards (round photo + name +
   position): Lloyd Wilson, Rachel Parker, Ian Smith, Alicia Henderson.
10. **Blog** — `bg-[#f8f9fa]`, heading "Our Blog", cards: image + date
    block (04 / 2019 / april) + title + paragraph + Read More pill +
    Admin + comment count.
11. **Contact** — heading "Contact Me", info blocks (address 198 West
    21th Street Suite 721 New York NY 10016 · contact number · email),
    form: Your Name / Your Email / Subject / Message + submit.
12. **Gallery** — image grid (4+ picsum seeds), hover overlay/link
    (source uses magnific-popup lightbox — optional, can be plain links).
13. **Footer** — `bg-black` 4 widgets: About Flexly (brand + text +
    facebook/twitter/instagram inline-SVG icons), Links, Services, Have a
    Questions? (address/phone/email) + copyright bar with neutral credit
    and the MANDATORY Component Dock link
    (https://www.componentdock.com/).

## Todo

- [ ] Scaffold `apps/flexly` (copy simplest existing app; package
      `@free-react-templates/flexly`; `npm install --package-lock-only`)
- [ ] index.html: title "Flexly — Fitness & Gym", Nunito Sans Google
      Fonts `<link>`, CNAME `flexly.free.componentdock.com`, homepage
- [ ] @theme tokens: brand `#fe9191`, accent `#fe7878`, ink `#000000`,
      light `#f8f9fa`
- [ ] Navbar (transparent → fixed white on scroll, 8 anchors, mobile
      burger) + tests
- [ ] Hero slider (2 slides, vertical STRENGTH/WORKOUT, pill CTA) + tests
- [ ] Salmon band (3 columns) + tests
- [ ] Programs tabs (8) + tests
- [ ] Services cards (5) + tests
- [ ] Schedule tabs (7 days, coach rows) + tests
- [ ] About counter (count-up 20) + tests
- [ ] Testimonials (5, dark) + tests
- [ ] Coaches (4) + tests
- [ ] Blog cards + tests
- [ ] Contact form + tests
- [ ] Gallery grid + tests
- [ ] Footer (4 widgets, socials, Component Dock link) + tests
- [ ] `scripts/verify-app.sh flexly` green; push PR `feat/template-flexly`;
      merge immediately; bookkeeping: 3× `[x]` in TEMPLATES.md + surge URL + `npm run readme:status`
