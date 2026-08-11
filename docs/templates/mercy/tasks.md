# Mercy (ColorLib Aid) — Tasks & Design Notes

> Recreation of ColorLib "Aid" (https://colorlib.com/wp/template/aid/)
> under the NEW name **Mercy** (a compassion/kindness term for the
> children's-care charity design; single lowercase word, no collision with
> `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
> 2026-08-11), per the monorepo naming mandate (never reuse the ColorLib
> source name). TEMPLATES.md category: Bootstrap (216).

## Design notes (replication findings)

- **Original:** ColorLib "Aid" — free Bootstrap 4 CHARITY / children's care
  & non-profit donation template (transparent navbar, full-height B&W photo
  hero, volunteer callout + animated donation counter, 4-card services row,
  circular-image causes carousel, periwinkle "Success Stories" testimonials,
  near-black 4-column footer). The recreation brands itself **Mercy**.
- **Live preview analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/aid/` — HTTP 200, ~27.5 KB HTML +
  `css/style.css` ~69.5 KB (curl), assets under `images/` (Bootstrap 4 +
  owl.carousel + AOS + jquery.animateNumber + magnific-popup + scrollax +
  stellar + ionicons/flaticon/icomoon icon fonts + google-map). The
  TEMPLATES.md screenshot (`aid-free-template.jpg`, 1200×946, viewed in
  browser) shows the transparent nav + hero + volunteer/donation band and
  cuts off mid-page; it matches the live render (below-the-fold sections
  captured from the live DOM + CSS instead). NOTE: the "search bar at top
  center" in the screenshot is browser chrome, NOT part of the template.
- **Visual design (screenshot):** modern charity landing page on
  high-contrast black-and-white documentary photography. "Aid." white logo
  - white nav links over a full-bleed B&W hero photo of a man's face with
    hands over it; large bold UPPERCASE white headline "WE CAN HELP TO SAVE
    THE WORLD" overlaid right with a black "How Can I Help" button and
    vertical "PLAY VIDEO" text on the left. Below: white band with a
    volunteer photo + black "We need volunteers in Africa" headline + "Join
    now" button (left), and a DARK panel with white "Donation so far
    $380,000" + "Donate now" button (right). Monochrome palette with gold
    `#ffb400` accents; clean sans-serif (Nunito Sans).
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** — `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.ftco-navbar-light`
     — TRANSPARENT over hero (absolute, top 20px): brand "Aid." (24px/900
     white, trailing `.` gold `#ffb400`) + links Home (active) · Who we
     are · Causes · Stories · Contact; mobile "Menu" hamburger. Scrolled:
     fixed, white bg + shadow 0 0 10px rgba(0,0,0,.1), brand black.
  2. **Hero** — `.hero-wrap` 800px, bg image `images/bg_1.jpg` + white
     `.overlay` opacity .1; right-aligned `.slider-text` row: right col
     h1 54px/900 UPPERCASE white ltr-spacing 5px "We can help to save the
     world" + `.btn.btn-black.py-3.px-4` "How Can I Help"; left col
     `d-none d-md-block` `.play-video` popup-vimeo link (ion-ios-play icon
     - "Play video").
  3. **Volunteer + Donation** — `section.ftco-volunteer`: left
     `col-md-7.img-volunteer` bg image `images/about.jpg` > `.text.py-5`
     h2 50px/900 black "We need volunteers in Africa" + lorem +
     `.btn.btn-primary` gold "Join now"; right `col-md-5.bg-black`
     (`#1e1e1e`) `.about-text.py-5.pl-md-5` h2 50px/900 white "Donation
     so far $<strong data-number=380000>" (animateNumber count-up) + lorem
     - `.btn.btn-black` "Donate now".
  4. **Services** — `section.services-section.py-5.py-md-0.bg-light`
     (`#f8f9fa`): 4 equal cards (col-md-6 col-lg-3, align-self-stretch)
     `.block-6.services`: flaticon icon 60px rgba(0,0,0,.2) + h3 + p —
     Help & Support (address), Adoption, Volunteering (`.active` card =
     gold bg `#ffb400` + black text), Education.
  5. **Causes** — `section.ftco-causes`: centered `heading-section` h2
     50px/900 "Let's build the world without child abuse and neglect" + p;
     `carousel-causes owl-carousel` of 5 `a.causes.text-center`:
     `.img` 200×200 `border-radius: 50%` (causes-1..5.jpg) + h2 20px/900 —
     Adoption, Fostering & Children Care · Disadvantages Young People ·
     Meditation & Crisis Services · Providing Children Care and Education
     · Safeguarding & Consultancy Services; hover `margin-top: -10px`.
  6. **Testimony** — `section.testimony-section` bg **`#6b76ff`**: left
     `.testimony-img` bg image; right `.heading-section-white` h2 "Success
     Stories" + `carousel-testimony owl-carousel` of 4 `.testimony-wrap`:
     quote lorem + `.user-img` 80×80 `border-radius: 50%` + `.name`
     20px/800 white "Jeff Nucci" + `.position` 18px rgba(255,255,255,.8)
     "Businessman".
  7. **Footer** — `footer.ftco-footer.ftco-section` bg **`#1e1e1e`**,
     padding 7em 0: 4 widgets — brand col "Aid." + lorem +
     `ftco-footer-social` (twitter/facebook/instagram); Information
     (Donation · Privacy · Terms Condition); Links (Home · Who we are ·
     Causes · Blog · Contact); "Have a Questions?" block-23 (address · +2
     392 3929 210 · info@yourdomain.com). Copyright bar: "Copyright ©<year>
     All rights reserved | made with ♥ by ColorLib" → rephrase to Mercy.
  8. **Loader (optional)** — `#ftco-loader` fullscreen SVG spinner stroke
     `#F96D00` (pre-hydration artifact; skip or replicate as loading state).
- **Key CSS selectors (style.css):** `.ftco-navbar-light` (transparent,
  absolute), `.ftco-navbar-light.scrolled` (fixed white), `.slider-text h1`
  (54px/900/uppercase/5px), `.ftco-volunteer .text h2` + `.about-text h2`
  (50px/900/lh 1.1), `.heading-section h2` (50px/900), `.causes h2`
  (20px/900), `.causes .img` (200px circle), `.services.active`
  (bg #ffb400), `.testimony-wrap .user-img` (80px circle), `.testimony-wrap
.name` (20px/800 white), `.ftco-footer .ftco-footer-widget h2`
  (24px/900 white), `.btn.btn-primary` (gold, hover transparent), `.btn
.btn-black` (black, hover same), `.bg-black` (#1e1e1e), `.testimony-section`
  (#6b76ff).

## Design tokens (summary)

- Brand: `#ffb400` gold · Black `#000000` · Dark `#1e1e1e` (panels+footer)
  · Periwinkle `#6b76ff` (testimonials) · Light gray `#f8f9fa` (services) ·
  Loader orange `#F96D00`.
- Font: "Nunito Sans", Arial, sans-serif (one family for headings + body).
- Buttons: radius 3px; primary gold bg/white text, hover transparent+gold
  text; secondary black bg/white text, hover unchanged. Padding py-3 px-4.
- Shapes: circular cause images (200px) + avatars (80px); hero/volunteer
  photos full-bleed square; images via bg-image divs.
- Sections: hero 800px; services py-5 py-md-0 bg-light; footer 7em padding.

## Tasks / todo outline (implementation order)

- [ ] Scaffold `apps/mercy` (copy simplest existing app, rename package to
      `@free-react-templates/mercy`, register in root `package-lock.json`
      via `npm install`, `injectUiSource()` in vite.config.ts).
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #ffb400`,
      `--color-ink: #000000`, `--color-charcoal: #1e1e1e`,
      `--color-periwinkle: #6b76ff`, `--color-mist: #f8f9fa`; Nunito Sans
      via Google Fonts `<link>` in `index.html`.
- [ ] Components (one per section, colocated tests):
  - [ ] `Navbar.tsx` — transparent over hero → fixed white on scroll;
        brand "Mercy." (gold dot); links Home (active) / Who we are /
        Causes / Stories / Contact; mobile hamburger menu.
  - [ ] `Hero.tsx` — 800px bg image + overlay, uppercase headline, black
        "How Can I Help" button, "Play video" link (Play icon; opens
        nothing or a video modal — decide + test).
  - [ ] `VolunteerBand.tsx` — photo panel + "We need volunteers in
        Africa" + gold "Join now"; dark panel + "Donation so far" +
        count-up amount ($380,000, hook + fake timers) + black "Donate
        now".
  - [ ] `Services.tsx` — 4 equal cards (Help & Support / Adoption /
        Volunteering(active gold) / Education) with inline-SVG icons.
  - [ ] `Causes.tsx` — centered heading + circular-card carousel (5
        items, prev/next, hover lift) using the shared Carousel.
  - [ ] `Testimonials.tsx` — periwinkle band, "Success Stories" heading +
        carousel of 4 quotes (circular avatar, name, position).
  - [ ] `Footer.tsx` — 4 columns (brand+social, Information, Links, Have
        a Questions?) + centered copyright bar.
- [ ] `App.tsx` — compose in exact order: Navbar → Hero → VolunteerBand →
      Services → Causes → Testimonials → Footer.
- [ ] Tests: one `describe` per component mirroring the spec scenarios;
      `getAllByRole` for duplicated nav links (desktop + mobile); fake
      timers for carousel autoplay + count-up; 100% coverage.
- [ ] `scripts/verify-app.sh mercy` green (typecheck + lint + knip +
      fallow + vitest 100% + build).
- [ ] PR: branch `feat/template-mercy`, description with source template
      (ColorLib Aid), preview URL, design tokens, differences (renames,
      picsum placeholders `mercy-<n>`, paraphrased copy); merge
      immediately (`gh pr merge --squash`), verify deploy + curl bundle.
