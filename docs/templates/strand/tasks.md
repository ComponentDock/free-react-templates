# Strand (ColorLib Hairsal) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-strand`.

## Design notes (replication findings)

- **Original:** ColorLib "Hairsal" — free Bootstrap 4 hair-salon website
  template (source: https://colorlib.com/wp/template/hairsal/). TEMPLATES.md
  has **three Hairsal rows**: line 198 is `[x]` and already shipped as
  **Tressly** (free-react-templates-tressly.surge.sh) — do NOT touch it; line
  219 `- [ ]` is THIS target; line 1032 is a `- [ ]` duplicate — also leave
  it (only line 219 is claimed/updated at bookkeeping time). Recreation uses
  the NEW name **Strand** (a single lock of hair — hair-salon motif; single
  word, no collision with `ls apps/` or spec folders; the shipped Tressly
  name is untouched).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/hairsal/ (HTTP
  200, ~15 KB; title "HairSal — Colorlib Website Template"). Stylesheets:
  `css/style.css` (~18 KB — custom styles) + bootstrap.min, magnific-popup,
  jquery-ui, owl.carousel(+theme), bootstrap-datepicker, flaticon (feature
  icons), icomoon (social/menu icons), mediaelementplayer, AOS. JS: jquery,
  bootstrap, owl.carousel (hero slider), jquery.stellar (parallax),
  magnific-popup (vimeo popup), aos, main.js. Fonts (Google Fonts `<link>`):
  **Poppins** (200,300,400,700,900 — body/nav/buttons) + **"Display
  Playfair"** (= Playfair Display, headings). Load both via Google Fonts
  `<link>` in index.html.
- **Screenshot:** `hairsal-free-template.jpg` (TEMPLATES.md line 219) —
  transparent header (black serif logo, uppercase centered nav, social
  icons), hero photo of a woman with wavy blonde hair on a soft pink
  background, white "WELCOME TO HAIRSAL" eyebrow + serif "Hair Salon Expert"
  - black rectangular Book Now! + slider arrows; below, 3-col welcome row
    with lime-green italic serif "Hair Salon" / "Opening Hours".
- **Visual design (DOM + CSS tokens + screenshot):** clean light hair-salon
  aesthetic — brand green **#8bc34a** (lime) on white; Playfair Display
  serif headings; Poppins body; square buttons (`border-radius: 0`); black
  hero CTA (`btn-black py-3 px-5`, hover inverts to white bg); nav transparent
  absolute over hero, uppercase 15px letter-spacing .05em, #000 links,
  active/hover #8bc34a, dropdowns `min-width: 200px`, `border-top: 2px solid
#8bc34a`, links #343a40, hover bg #f4f5f9; hero full-height
  (`calc(100vh - 73px)`, min-height 600px) bg cover + `rgba(0,0,0,0.4)`
  overlay; `.site-section` padding 2.5em 0 (desktop media query grows it);
  feature cards `bg-light` (#f8f9fa) `h-100 p-4 p-lg-5` centered, display-3
  green icon + h4 #000 title + lorem + green bold price; `.site-section-heading`
  has a 100px×1px **#8bc34a** underline bar (centered variant offset 50%);
  testimonial band `site-section.bg-light` with white `bg-white p-md-5`
  panel; CTA band `site-blocks-cover.overlay.inner-page-cover` fixed bg +
  dark overlay + circular `.play-single-big` (90px, 2px #fff border, radius
  50%, white play icon) → Vimeo popup in original (recreate as accessible
  play button); footer `background: #333333`, headings #fff 20px, body
  #737373, links #999999 (white hover), newsletter email input transparent +
  `btn btn-primary` **Send** = **#8bc34a** bg white text.
- **Structure (1:1, section order):**
  1. `header.site-navbar.py-1` — transparent absolute; col-2 h1 brand
     **"Hairsal"** (`text-black h2 mb-0`); col-8 nav `ul.site-menu.js-clone-nav`:
     **Home** (li.has-children.active, dropdown: Menu One / Menu Two / Menu
     Three / Sub Menu (li.has-children nested dropdown: Menu One / Menu Two
     / Menu Three)) · **Haircut** (li.has-children, dropdown: Menu One /
     Menu Two / Menu Three) · **Services** · **About** · **Book Online** ·
     **Contact**; col-2 right: 4 social icons (icon-facebook / icon-twitter
     / icon-instagram / icon-youtube-play) hidden below xl + mobile
     `a.site-menu-toggle.js-menu-toggle` (icon-menu). Mobile menu clone
     `div.site-mobile-menu` (header/close/body).
  2. `div.slide-one-item.home-slider.owl-carousel` — hero slider, 2 slides
     `div.site-blocks-cover` (bg images/hero_bg_1.jpg, hero_bg_2.jpg, dark
     overlay via `.overlay`):
     - slide 1: `h5.text-white.font-weight-light.text-uppercase` **"Welcome
       to Hairsal"** + `h2.display-1` **"Hair Salon Expert"** + `a.btn.btn-
black.py-3.px-5` **Book Now!**
     - slide 2: h2 display-1 **"Beautiful Hair, Healthy You!"** + Book Now!
  3. `div.site-section` (white) — row of 3:
     - col-lg-4 text-center: h3 (two d-block spans, display-4): **"Welcome
       to"** (text-black) + **em "Hair Salon"** (text-primary font-weight-
       bold); lorem p; `a` small uppercase bold **Read More**.
     - col-lg-4: `figure.hover-bg-enlarge > div.bg-image.h-100` photo
       (images/img_2.jpg).
     - col-lg-4: `div.border.p-4.d-flex.align-items-center.justify-content-
center.h-100` box: h2 **Opening Hours** (text-primary) + 3 p.mb-4
       rows: bold d-block day + hours — **Mon – Fri** 10:00 AM – 8:30 PM /
       **Saturday** Closed / **Sunday** 10:00 AM – 8:30 PM.
  4. `div.site-section` — centered col-md-7 h2 **"Featured Services"**
     (site-section-heading, green underline) + row of 3 col-md-6.col-lg-4
     `div.h-100.p-4.p-lg-5.bg-light.site-block-feature-7` text-center cards:
     span icon display-3 text-primary (flaticon-razor / flaticon-location-
     pin / flaticon-shave → lucide equivalents) + h3.h4 text-black **Barber
     Razor / Location Pin / Barber Shave** + lorem + p strong text-primary
     **$29 / $46 / $24**.
  5. `div.site-section.bg-light` — row: col-lg-6 `img.person_1.jpg`
     (img-md-fluid) + col-lg-6 `div.bg-white.p-md-5.align-self-center`: h2
     display-1 **"New hairstyle!"** (site-section-heading, green underline)
     - p.lead em quote "Lorem ipsum dolor sit amet…" + p.lead **"— Stellla
       Martin"** (em).
  6. `div.site-blocks-cover.overlay.inner-page-cover` — bg hero_bg_2.jpg,
     `background-attachment: fixed`, centered col-md-10: h2 display-3
     text-white **"Experience Our Outstanding Services"** + `a.play-single-
big.popup-vimeo` circular play (icon-play) → Vimeo popup.
  7. `footer.site-footer` — #333333, container row:
     - col-lg-4: h3 **About Hairsal** + lorem paragraph.
     - col-lg-4: h3 **Quick Menu** + 2 link columns (col-md-6): Home /
       Barbers / News / Team · About Us / Privacy Policy / Contact Us /
       Membership.
     - col-lg-4: h3 **Subscribe Newsletter** + lorem + form (input-group):
       input.form-control border-secondary text-white bg-transparent
       placeholder "Enter Email" + button.btn.btn-primary.text-white
       **Send**.
     - bottom row pt-5 mt-5 text-center: 4 social icons (icon-facebook /
       icon-twitter / icon-instagram / icon-linkedin) + copyright +
       ColorLib credit (→ repo-standard credit).

## Implementation todo

- [ ] Scaffold `apps/strand` (copy simplest existing app, package
      `@free-react-templates/strand`).
- [ ] `index.html`: title "Strand — Hair Salon", Poppins + Playfair Display
      via Google Fonts `<link>`.
- [ ] `@theme` tokens: `--color-brand: #8bc34a`, `--color-ink: #000`,
      `--color-muted: #737373`, `--color-band: #f8f9fa`, `--color-footer:
    #333333`, font-serif "Playfair Display", font-sans Poppins.
- [ ] Header: transparent absolute, brand "Strand", centered uppercase nav
      (Home active; Home▾ + Haircut▾ dropdowns w/ nested Sub Menu), 4
      lucide social icons right, mobile toggler aria-expanded + mobile menu.
- [ ] Hero: full-height 2-slide carousel (picsum seeds strand-1..2), dark
      overlay, slide 1 "Welcome to Strand" + "Hair Salon Expert", slide 2
      "Beautiful Hair, Healthy You!", black square Book Now! buttons,
      accessible prev/next controls.
- [ ] Welcome row: "Welcome to / Hair Salon" (green italic em), lorem,
      Read More link; center photo (seed strand-3); bordered Opening Hours
      box (Mon–Fri 10–8:30 / Sat Closed / Sun 10–8:30).
- [ ] Featured Services: centered heading + 3 bg-light cards (lucide icons
      Scissors/MapPin/Razor → check lucide availability; titles + $29/$46/
      $24 green prices).
- [ ] Testimonial: photo (seed strand-4) + white panel "New hairstyle!",
      italic quote, "— Stellla Martin".
- [ ] CTA band: fixed-bg photo (seed strand-5) + overlay + "Experience Our
      Outstanding Services" + circular play button (aria-label).
- [ ] Footer: #333333, About / Quick Menu (2×4 links) / Subscribe
      Newsletter (email input + green Send) + socials + repo-standard
      credit.
- [ ] Tests (vitest + RTL, 100% coverage): header render + dropdowns +
      toggler, hero slides + controls, welcome row, services cards, quote
      panel, CTA band, footer widgets, page composition + title.
- [ ] Verify: `npm run verify:app -- strand` green.
- [ ] PR: `feat/template-strand`, description with source (Hairsal), preview
      URL, tokens, renames; merge immediately with `gh pr merge --squash
    --delete-branch`; mark TEMPLATES.md line 219 `[x]` + surge URL +
      `npm run readme:status` (lines 198/1032 stay — 198 is tressly's, 1032
      is an untouched duplicate).

## Pitfalls

- TEMPLATES.md has **three Hairsal rows**: line 198 `[x]` (already shipped
  as **Tressly**), line 219 `- [ ]` (THIS template), line 1032 `- [ ]`
  (duplicate). Only touch line 219 at bookkeeping time (exact line-targeted
  edits only; the row also gains the surge link like line 198).
- Buttons are **square** (`border-radius: 0`) — hero CTA is black, NOT the
  green; the green only appears on the footer newsletter **Send** button and
  on text/icon accents.
- The hero is an **image-only slider** — each slide's text is inside the
  slide (eyebrow + headline + CTA differ per slide), unlike templates where
  text is a static overlay.
- `.site-section-heading` gets its green **underline bar** via `:after`
  (100px × 1px #8bc34a) — recreate it, don't skip.
- Feature icons are flaticon classes (razor/location-pin/shave) — use
  lucide-react equivalents (e.g. Scissors / MapPin / Sparkles); icons are
  `text-primary` display-3 scale.
- The CTA band uses `background-attachment: fixed` (parallax) — fine to
  approximate with a plain bg-fixed; play button opens a Vimeo popup in the
  original — keep it a styled, accessible button (popup optional).
- Fonts are Playfair Display (headings) + Poppins (body) — serif/sans
  pairing; nav is uppercase Poppins with letter-spacing, not serif.
