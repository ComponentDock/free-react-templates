# Lotus (ColorLib Yoga) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lotus`.

## Design notes (replication findings)

- **Original:** ColorLib "Yoga" — clean, airy single-page yoga/fitness
  template (source: https://colorlib.com/wp/template/yoga/). TEMPLATES.md has
  TWO copies (lines 541, 1888 — duplicate rows; one recreation covers both;
  implementer marks BOTH `[x]`). WARNING: Yogaflex (line 542) and the other
  yoga-family templates (Yogabest, Doyoga, Yogastudio, Yogafun, Yogalife,
  Yogalax) are DIFFERENT templates — don't conflate.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/yoga/ (HTTP 200,
  34.9 KB). The `<title>` says "Vertex - Free Bootstrap 4 Template by
  Colorlib" — a stale copy-paste artifact; the BODY is the Yoga template
  (h1 "Experience the best workout humanly possible", services, trainers,
  yoga@info.com). products.js entry `["yoga","Yoga","Fitness",0,
"2018/07/yoga-demo-preview.jpg",1]` — preview slug `yoga` == source slug
  `yoga`. Master stylesheet `css/style.css` (62 KB) fully extracted; libs:
  bootstrap 4, owl.carousel, animate.css, magnific-popup, aos, ionicons,
  flaticon, icomoon.
- **Screenshot:** `yoga-free-template.jpg` (1200×946, viewed in browser) —
  full-width hero photo: blonde woman in a deep yoga backbend on a purple mat
  in a warm wood-toned studio; white headline "Experience the best workout
  humanly possible" overlaid left; top-left logo (square outline, "YOGA"
  stacked), hamburger top-right, 2 slider dots; white content below with
  centered paragraph. Demo brands itself "Yoga"; recreation uses the NEW name
  **Lotus**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist,
  modern, lots of whitespace. Brand accent mint `#79efb4` (CSS `--primary`)
  on buttons/links; dark `#404044`; muted grays `#6c757d`/`#c0c0c3`; light
  bands `#fafafa`/`#f8f9fa` alternating with white. Quicksand everywhere
  (body 18px; hero h1 72px white weight 400; hero p 20px weight 300).
  Buttons are bootstrap-standard 0.25rem radius, mint bg, dark text
  (#212529) — NOT pills. Full-height image hero slider (100vh − 117px).
  Dark footer `#404044`. Demo copy is placeholder lorem — paraphrase into
  yoga/wellness copy (poses, classes, membership).
- **Structure (1:1, section order):**
  1. `nav#colorlib-main-nav` — off-canvas overlay menu (hamburger toggle):
     Home (active), Classes, Trainer, Timetable, About us, Blog, Contact.
  2. `header` — `.colorlib-navbar-brand` split-span logo (`<span>Yo</span>
<span>Ga</span>` → "Lo"+"tus" or wordmark) + hamburger toggle.
  3. `section.home-slider.owl-carousel` — 2 slides (full-height bg images):
     h1 "Experience the best workout humanly possible" / "Wake to your full
     potential", each with "Get in touch" + "Explore our classes"; 2 dots.
  4. `section.ftco-section.about-section` — centered h2 paragraph
     ("Yoga far away, behind the word mountains..." → studio copy).
  5. `section.ftco-section.bg-light` — "Explore our services": 3 cards
     (icon + h3 + p): Body Builder, Yoga Program, Cardio Program.
  6. `section.ftco-section` — "All in one Yoga classes": 3 cards (image +
     h3 + p): Yoga Program, Cardio Program, Body Building + "Explore our
     classes" button.
  7. `section.ftco-section.bg-light` — "Meet our trainers": 3 cards (photo,
     name, role, copy, "View class times"): Alice Smith (Yoga Expert),
     John Bulk (Body Expert), Madonna Henderson (Health Expert).
  8. `section.ftco-section.testimony-section` — "Testimonial": carousel of
     quotes (Dennis Green — Fitness Expert / Health Expert; source reuses
     the name — use distinct names/roles).
  9. `section.ftco-section.bg-light` — "Pricing Plan": 3 cards — Yoga
     Program $7.5, Dance program $12.5, Fitness Program $19, each "per
     class" + "Book now".
  10. `section.ftco-section` — "Classes Schedule": Monday rows 7:00am-8:00am
      Basic Exercise, 9:00am-11:00am Yoga Program, 1:00pm-4:00pm Body
      Building, each with copy + "Join now".
  11. `section.ftco-section.bg-light` — "Our Blog": 4 cards (image, date
      "June 29, 2018"/"July 24, 2018", Admin, title, "Read more").
  12. `section.instagram` — "Instagram" heading + strip of square images.
  13. `footer.ftco-footer.ftco-bg-dark` (#404044) — brand, "Contact Us" +
      yoga@info.com (→ lotus@info.com), copyright
      "© 2026 Lotus. All rights reserved." + "More templates at Component
      Dock" (https://www.componentdock.com/).

## Implementation tasks

1. Scaffold `apps/lotus` from the simplest existing app; rename package to
   `@free-react-templates/lotus`; `npm install` at root for the lockfile;
   `public/CNAME` = `lotus.free.componentdock.com`; homepage in package.json.
2. `src/index.css` — `@theme` tokens: `--color-brand: #79efb4`,
   `--color-brand-dark: #57eba1`, `--color-ink: #404044`, muted grays,
   light band `#fafafa`; Quicksand Google Fonts `<link>` in index.html.
3. Components (one per section, matching conventions):
   `Navbar` (off-canvas overlay + hamburger toggle, aria-expanded),
   `Header` (brand wordmark), `HeroSlider` (2 slides, controls + dots),
   `About`, `Services` (3 cards), `Classes` (3 cards + CTA),
   `Trainers` (3 cards), `Testimonials` (carousel),
   `Pricing` (3 cards), `Schedule` (3 rows), `Blog` (4 cards),
   `InstagramStrip`, `Footer` (brand, contact, Component Dock link).
4. TDD: spec scenarios → tests → implementation; 100% coverage.
5. Placeholder images: `https://picsum.photos/seed/lotus-<n>/<w>/<h>` (hero
   slide 1, slide 2, class ×3, trainer ×3, blog ×4, insta ×4). Prefer
   yoga/wellness-ish subjects; verify seeds visually before pinning.
6. Gate: `scripts/verify-app.sh lotus` (typecheck + lint + 100% coverage
   tests + build).
7. PR + immediate squash merge; then bookkeeping: both "Yoga" rows `[x]` +
   surge URL, `npm run readme:status`.
