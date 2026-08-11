# Artisan (ColorLib Kenedy) — Tasks & Design Notes

> Recreation of ColorLib "Kenedy"
> (https://colorlib.com/wp/template/kenedy/) under the NEW name **Artisan**
> (a skilled creative craftsperson — fits the personal-portfolio positioning),
> per the monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Kenedy" — personal portfolio one-pager for a senior
  creative designer ("Kenedy Jackson"), in the TEMPLATES.md **Bootstrap**
  category.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/kenedy/`
  (HTTP 200, ~55 KB HTML + `css/main.css` ~76 KB parsed for tokens). The live
  preview is the authoritative reference.
- **Screenshot analyzed:** `kenedy-free-template.jpg` (TEMPLATES.md) — clean
  minimalist personal portfolio: white page; small periwinkle speech bubble
  "It's me" above big bold black name "Kenedy Jackson"; role line "Senior
  Creative **Designer** and Content **Developer**" (Designer coral-red,
  Developer periwinkle-blue); coral pill "Hire Me" button; smiling-man photo
  with crossed arms over a soft periwinkle block on the right; coral square +
  white "K" logo top-left; floating white rounded brands card with grayscale
  wordmarks (Forbes, dribbble, 99designs, colorlib, AWWWARDS). Matches the
  live preview.
- **Visual design (from live preview):** minimalist personal portfolio.
  Light hero (bg image cover — recreate as white/very-light with a
  periwinkle #90acd1 block behind the photo), Poppins bold headings, Roboto
  body. Coral #e45447 accent everywhere: pill buttons (radius 40px, with a
  fancy letter-by-letter hover animation), section-title dot+line
  decorations, nav hover, work-card hover overlay, footer social hover.
  Periwinkle #90acd1 as secondary: speech bubble, "Developer" keyword, white
  button borders. Alternate light-gray #f9f9ff bands (works, services, job
  cards) on white. Four colored service cards (terracotta #e2a599,
  mauve-brown #715f69, coral #e45447, periwinkle #90acd1). Solid coral
  contact band. White footer with big social icons.
- **Structure (1:1, section order):**
  1. Header (`#header` + `main-menu`): absolutely positioned over the hero
     (transparent); logo image left (coral square + white "K" per screenshot;
     the CSS `#logo h1` text variant: 34px/700, letter-spacing 3px, 4px
     #e45447 left border); `.nav-menu` right — links Poppins 16px/500 #222
     capitalize, hover/active #e45447, `> li` margin-right 50px; "Pages"
     dropdown (Elements) + "Blog" dropdown (Blog Home, Blog Single), white
     dropdowns, shadow `0 0 30px rgba(127,137,161,0.25)`; scrolled →
     fixed white header, shadow `-21.213px 21.213px 30px rgba(158,158,158,0.3)`.
  2. Hero (`home-banner-area`, bg image cover, fullscreen 100vh): left
     `.banner-content`: `.me` speech bubble "It's me" (bg #90acd1, white
     16px, padding 18px, radius 8px, triangle tail via :after border trick);
     h1 "Kenedy Jackson" (Poppins 700, 60px, line-height 66px, mt/mb 30px);
     `.designation` role line (Roboto 30px/400, lh 42px, max-width 390px,
     mb 50px): "Senior Creative <span .designer>Designer</span> and Content
     <span .developer>Developer</span>" — designer #e45447, developer
     #90acd1; `.primary-btn` "Hire Me" pill (see tokens). Right
     `.banner-img` (col-lg-6, text-right): portrait photo over the
     periwinkle block.
  3. Brands strip (`brands-area`): `.brand-wrap` white card, radius 100px,
     margin-top **-75px** (overlaps hero bottom), padding 64px 14px, shadow
     `0 20px 50px rgba(153,153,153,0.2)`, border
     `1px rgba(214,214,214,0.11)`; 5 `.single-brand` wordmarks, grayscale
     - opacity .5, hover → color + opacity 1.
  4. About (`about-area section-gap`, padding 150px 0): row
     align-items-center; left col-lg-6 `.about-left` photo (about-img.jpg);
     right col-lg-5 `.about-right`: `.section-title` h2 "about myselt"
     (48px/700 capitalize; fix the typo → "About Myself"), 2 paragraphs
     (mb-50), `.primary-btn.white` "More Info" (bg #fff, border 1px #90acd1,
     text #e45447, mr 10px) + `.primary-btn` "Resume" (coral pill).
  5. Latest Works (`work-area section-gap-top section-gap-bottom-90`, bg
     #f9f9ff): `.section-title` h2 "Latest Works" + intro p; `.filters`
     tabs right-aligned, 13px capitalize, padding 0 15px, active/hover
     #e45447 — "All Categories", "Branding", "Creative Work", "Web Design";
     6 `.single-work` cards (radius 5px, mb 30px; image radius 10px):
     hover → `.overlay-bg` #e45447 opacity .80 + `.middle` centered white
     h4 21px title ("2D Vinyl Design") + `.cat` 15px ("Client Project").
  6. Job History (`job-area section-gap-top section-gap-bottom-90`): title
     "Job History" + intro p; 4 `.single-job` cards (2-col): bg #f9f9ff,
     radius 10px, padding 40px 30px, mb 30px; `.top-sec` flex
     justify-between: `.top-left` h4 role 21px/700 #000 + company p; `.top-right`
     `.primary-btn` date pill (bg #fff, border 1px #90acd1, text #222,
     padding 0 28px) "Jul '15 to Present"; `.bottom-sec` description
     (margin-top 30px). Roles: Senior Creative Design, Senior Visualiser,
     Junior Visualiser, Intern Designer — company "Old Bird IT, New York".
  7. Service Offers (`service-area section-gap`, bg #f9f9ff): title
     "Service Offers" + intro p; 4 `.single-service` cards (col-lg-3, white
     text, padding 60px 30px, radius 5px) with per-card backgrounds:
     nth-child 1 #e2a599, 2 #715f69, 3 #e45447, 4 #90acd1; linearicon span
     (lnr-screen, lnr-laptop-phone, lnr-database, lnr-chart-bars); h4
     21px/700 white with `<span>` block line ("Web" over "Design"); p white.
  8. Testimonials (`testimonials_area section-gap`): owl-carousel
     `.testi_slider`, 3 `.testi_item` slides (centered): quote mark image,
     h4 name 21px/700 ("Fanny Spencer", mt 40px), 5 stars #ffc000 14px,
     quote p (max-width 570px); owl-dots: 40×4px bars #eeeeee, active
     #e45447; owl-nav prev/next arrows #000 (prev mr 80px / next ml 80px).
  9. Contact Me (`contact-area section-gap`, bg #e45447): `.contact-title`
     white centered — h2 48px white + centered white dot+line decoration +
     intro p (max-width 540px); row mt-80: 3 `.contact-box` (col-lg-4,
     centered, h4 21px/700 white): "+44 2365 654 8962",
     "information@colorlib.com", "kenedyjackson.me" (plain text, NOT
     links); centered `.primary-btn` white "Hire Me" (bg #fff, color #000,
     border 1px #fff; hover → transparent bg + white text), mt-50.
  10. Footer (`footer-area`, padding 100px 0): `.footer-logo` centered (logo
      img + h4 "Follow Me" 21px/700 #777, mt 48px); `.footer-social`
      centered (margin 25px 0 50px): 4 links, icons 36px #cccccc, padding
      0 20px, hover #e45447 — facebook, twitter, dribbble, behance;
      `.footer-bottom` centered copyright: "© <year> All rights reserved |
      This template is made with ♥ by Colorlib" → replace ColorLib credit
      with original attribution (link #e45447).

## Design tokens (from `css/main.css`)

| Token           | Value(s)                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary         | #e45447 (coral — pill buttons, selection, nav hover/active, section-title dot+line, work hover overlay, filter active, dots active, footer social hover, copyright link) |
| Secondary       | #90acd1 (periwinkle — "It's me" bubble + tail, "Developer" keyword, white-button borders, 4th service card, inner banner bg)                                             |
| Light bg        | #f9f9ff (work-area, service-area, single-job cards)                                                                                                                      |
| Heading ink     | #222222 (h1 60px/700, section h2 48px/700, nav links 16px/500, job h4 21px/700)                                                                                          |
| Body            | #777777 (Roboto 15px/1.625, footer "Follow Me" 21px/700)                                                                                                                 |
| Service cards   | #e2a599 terracotta · #715f69 mauve-brown · #e45447 coral · #90acd1 periwinkle (padding 60px 30px, radius 5px)                                                            |
| Stars           | #ffc000 (gold, 14px)                                                                                                                                                     |
| Social idle     | #cccccc (36px footer icons; hover #e45447)                                                                                                                               |
| Brand strip     | bg #fff, margin-top -75px, radius 100px, padding 64px 14px, shadow 0 20px 50px rgba(153,153,153,0.2), grayscale logos op .5                                              |
| Fonts           | "Poppins" (headings, nav, buttons), "Roboto" (body, designation 30px/400) — Google Fonts link needed                                                                     |
| Buttons         | pill: bg #e45447, white 15px/600, padding 0 52px, radius 40px, border 1px #e45447; hover → white bg + coral text                                                         |
| Button variants | .white: bg #fff, border #90acd1, text #e45447 · job date: bg #fff, border #90acd1, text #222, padding 0 28px · contact: bg #fff, text #000                               |
| Section title   | h2 48px/700 capitalize + coral 10px dot (radius 7px) + 100px×2px line below-left; white centered version on coral band                                                   |
| Job card        | bg #f9f9ff, radius 10px, padding 40px 30px, mb 30px; h4 21px/700 #000 + company p + description mt 30px                                                                  |
| Work card       | radius 5px, mb 30px; image radius 10px; hover → coral overlay op .80 + white title/cat centered                                                                          |
| Testimonial     | centered; name 21px/700; 5 gold stars; quote max-width 570px; dots 40×4px #eeeeee / active #e45447                                                                       |
| Radii           | 40px (pills), 100px (brand strip), 10px (work imgs, job cards), 8px (speech bubble), 5px (service/work cards)                                                            |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-brand` = #e45447, `--color-sky` = #90acd1,
  `--color-mist` = #f9f9ff, `--color-ink` = #222222, `--color-body` =
  #777777, `--color-clay` = #e2a599, `--color-mauve` = #715f69,
  `--color-star` = #ffc000, `--color-idle` = #cccccc. Use via Tailwind
  classes per conventions.
- Google Fonts `<link>` in `index.html`: Poppins (500, 600, 700), Roboto
  (400, 500).
- Interactions in the live demo: scrolled fixed header (scroll listener),
  navbar dropdowns (Pages → Elements; Blog → Blog Home, Blog Single),
  hamburger on mobile, work filter tabs (could be simple active-state
  toggling or a real filter — the demo's filtering is optional; keep the
  tabs + active state, filter behavior may be a no-op with the active tab
  tracked in state), work-card hover overlay, testimonial slider (prev/next
  - dot bars — small state-based index cycler, no library needed), pill
    button letter animation (optional flourish: render label as letter spans
    that rise on hover; the `.primary-btn:before` data-text slide-down is the
    original effect — a simple color swap hover is an acceptable minimal
    equivalent, keep the pill shape).
- Reusable components: SectionTitle (h2 + dot/line decoration + optional p),
  PrimaryButton (pill, letter-span hover), ServiceCard (icon + two-line
  title + copy + colored bg), JobCard (role/company/date/description),
  WorkCard (image + hover overlay title/cat), TestimonialSlide (quote + name
  - stars + copy).
- Section title pattern: h2 48px/700 capitalize (#222222) + coral dot+line
  decoration; the contact band uses the white centered variant.
- Hero decorations: light background (white or #f9f9ff) with an absolute
  periwinkle (#90acd1) block/shape behind the right photo — do NOT copy
  banner-bg.jpg.
- Placeholders: `picsum.photos/seed/artisan-<n>/<w>/<h>` — hero portrait
  (~500×600), about photo (~600×400), 6 work images (~400×300), 5 brand
  wordmarks (text spans, grayscale + opacity-50, NOT images).
- Icons: lucide-react (Monitor, Smartphone, Database, BarChart3 for
  services; Star for testimonials; ChevronLeft/ChevronRight for slider
  arrows; Menu/X for mobile toggle); brand social icons (Facebook, Twitter,
  Dribbble, Behance) → inline SVG paths (lucide removed brand icons).
- Contact boxes are plain text in the original — no tel:/mailto: links
  needed; keep them as display-only strings (avoids the tel: literal
  redaction pitfall entirely).
- Do NOT copy the demo's images, fonts files, or CSS — recreate tokens in
  Tailwind.

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/artisan`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh artisan` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge
