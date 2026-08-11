# Dynamo (ColorLib Industry Inc) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-dynamo`.

## Design notes (replication findings)

- **Original:** ColorLib "Industry Inc" — industrial / energy company
  website (Bootstrap 4, page title "Industry.INC | HTML Template")
  (source: https://colorlib.com/wp/template/industry-inc/).
- **Preview analyzed:** https://preview.colorlib.com/theme/industryinc/
  (NOTE: preview host drops the hyphen — `/theme/industry-inc/` 404s).
  HTTP 200, ~55 KB HTML + `css/style.css` ~36 KB parsed; screenshots
  reviewed.
- **Visual design:** hero photo of an industrial facility (pipes, metal
  structures, blue sky); headline "Power & Energy Industry" in white on
  solid yellow `#ffc000` highlight blocks; thin dark `#081624` topbar;
  centered nav with Home active (yellow underline); yellow square search
  button (opens full-screen search modal); white "READ MORE" + dark "OUR
  SERVICES" flat buttons; white services card OVERLAPPING the hero bottom
  (negative margin), 3-col grid of yellow icons; features on a bg image
  with 3 cards + yellow-outlined Read More; dark `#17172d` split
  testimonial box; full-width yellow CTA band; video section with play
  popup; dark footer `#17172d` with near-black `#03031b` bottom bar.
- **Structure (1:1, section order, home page):**
  1. Header `header.header-section.clearfix`:
     - `header-top` (bg `#081624`, padding 14px 40px): two halves of blurb
       text (left + right).
     - `site-navbar` (centered): `a.site-logo` brand left (margin-right
       100px, padding-left 63px); `header-right` = two `header-info-box`
       (icon + h6 + p): "+546 990221 123" / "contact@industryalinc.com" and
       "Main Str, no 23" / "NY, New York PK 23589"; `button.search-switch`
       (83px wide, full height, bg `#ffc000`, white search icon 25px) →
       opens search modal; `nav.site-nav-menu` (inline-flex): Home (active)
       / About us / Solutions (sub-menu → Elements) / Blog / Contact — 15px
       w600 `#081624`, padding 32px 16px, margin-right 35px.
  2. Hero `section.hero-section`: `hero-slider.owl-carousel`, TWO
     `hero-item.set-bg` (height 777px, flex center, bg
     `img/hero-slider/1.jpg` / `2.jpg`): col-xl-8 — h2 (90px w300 white) of
     THREE stacked spans on yellow `#ffc000` blocks (padding-left 25px,
     padding-bottom 15px): "Power" / "& Energy" / "Industry"; buttons
     `site-btn.sb-white` "Read More" + `site-btn.sb-dark` "our Services".
     Owl arrows + dots.
  3. Services `section.services-section`: `services-warp` (white, max-width
     1227px, `margin: -91px auto 0` — OVERLAPS hero, shadow, z-index 99,
     padding 56px/30px): SIX `service-item` (col-lg-4 col-md-6): `si-icon`
     (61px PNG) + h5 + p: **Mechanical Engineering · Professional Workers ·
     Green Energy · Power Engineering · Oil & Lubricants · Power & Energy**.
  4. Features `section.features-section.spad.set-bg` (bg
     `img/features-bg.jpg`): THREE `feature-box` (col-lg-4 col-md-6; third
     col-md-12): img (`features/1-3.jpg`) + h5 + p + `fb-more-btn` "Read
     More" (12px uppercase, `#ffc000`, 2px solid border, padding 15px,
     min-width 128px): **Chemical Research · Engineering · Manufacturing**.
  5. Clients `section.clients-section.spad`: centered `client-text`
     (margin-bottom 90px): h2 w300 "A group of productive enterprises that
     produce or supply Goods, Services, or Sources of Income" + p;
     `client-slider.owl-carousel` of FIVE `single-brand` logos.
  6. Testimonial `section.testimonial-section`: `container-fluid` split —
     left col-lg-6 p-0 `testimonial-bg` (bg `img/testimonial-bg.jpg`, 100%
     height); right col-lg-6 p-0 `testimonial-box` (bg `#17172d`, padding
     100px 15px 70px) > `testi-box-warp` (max-width 740px): h2 "Client's
     Testimonials" + `testimonial-slider` of TWO items: quote p +
     `testi-thumb` avatar + `testi-info`: h5 "Michael Smith" + span "CEO
     Industrial INC". Owl dots.
  7. CTA `section.cta-section` (bg `#ffc000`, padding 33px 0): col-lg-9 h2
     white 37px w300 "We produce or supply Goods, Services, or Sources";
     col-lg-3 text-lg-right `site-btn.sb-dark` "contact us".
  8. Video `section.video-section.spad`: col-lg-6 `video-text`: h2 w300 "We
     produce or supply Goods, & Services" + p + `site-btn` "Read More";
     col-lg-6 `video-box` (bg `img/video-box.jpg` via data-setbg, flex
     center) + `a.video-popup` play → YouTube wbnaHgSttVo.
  9. Footer `footer.footer-section` (bg `#17172d`): about column (blurb +
     social fa-facebook / fa-twitter / fa-dribbble / fa-behance); "Useful
     Resources" (Jobs Vacancies · Client Testimonials · Green Energy ·
     Chemical Research · Oil Extractions · About our Work); "Our Solutions"
     (Metal Industry · Agricultural Engineering · Green Energy · Chemical
     Research · Oil Extractions · Manufacturing); "Contact Us" (address ·
     phone · email + social). Bottom `div.footer-buttom` [sic] (bg
     `#03031b`, margin-top 55px): left `.copyright` (14px `#646470`,
     padding-top 25px) "All rights reserved | made with ♥ by Colorlib"
     (monorepo credit) + right `ul.footer-menu` (Home / About us / Solutions
     / Blog / Contact).
  10. Search modal `div.search-model`: full-screen overlay with centered
      `form.search-form` input, opened by `search-switch`.
- **Design tokens:** brand yellow `#ffc000` (site-btn bg, cta bg, hero
  headline blocks, search-switch bg, fb-more-btn border/text, footer link
  hovers); dark navy `#081624` (header-top bg, sb-dark bg, sb-white text,
  nav link + heading text); `#304a5f` / `#e3f0fa` secondary accents; dark
  sections `#17172d` (testimonial-box, footer), `#03031b` (footer-buttom),
  `#393958`/`#39334f` footer tones; muted `#718090` / `#646470` /
  `#999` / `#333`; font **Open Sans** (only family in style.css; Google
  Fonts `<link>` in index.html); `.site-btn` 14px w600 uppercase min-width
  186px padding 23px 47px, flat (no radius); `.spad` = 103px 0;
  `.services-warp` negative-margin overlap; hero h2 90px w300 white on
  yellow blocks; nav 15px w600 padding 32px 16px margin-right 35px.
- **Recreation decisions:** picsum seeds `dynamo-<n>`; lucide-react icons
  (Search, Phone, MapPin, Cog, HardHat, Leaf, Zap, Droplets, Factory, Play,
  ChevronLeft, ChevronRight, Quote, Facebook, Twitter, Dribbble, Behance,
  Heart, Menu); Open Sans via Google Fonts; brand yellow in `@theme`;
  hero headline = stacked lines on yellow blocks; services warp overlaps
  hero (negative top margin, white card, shadow); simple carousels
  (hero auto-advances; clients + testimonials with arrows/dots); search
  modal implemented. Fix demo typos: "Chemichal Reserach" → "Chemical
  Research", "Profesional Workers" → "Professional Workers",
  "Manufactoring" → "Manufacturing", "industryalinc" email → paraphrased.
  Do NOT reproduce the original "footer-buttom" class typo.

## Task outline (implementer)

1. Scaffold `apps/dynamo` (copy simplest existing app, rename package to
   `@free-react-templates/dynamo`; register in package-lock.json via root
   `npm install`).
2. `@theme` in `src/index.css`: `--color-brand: #ffc000` (yellow), dark
   navy `#081624`, `#17172d`, `#03031b`, `#304a5f`; font Open Sans via
   Google Fonts `<link>` in `index.html`.
3. Data module `src/data.ts`: nav links (+ Solutions dropdown), hero slides
   (2), services (6), features (3), client logos (5), testimonials (2),
   CTA copy, video (heading/blurb/YouTube id), footer columns (about +
   Useful Resources + Our Solutions + Contact + footer menu). Picsum seeds
   `dynamo-<n>`.
4. Components (TDD, 100% coverage):
   - `Header` — dark topbar + brand + info boxes + yellow search button +
     centered nav with Solutions dropdown + mobile toggle + search modal
     (open/close).
   - `HeroSlider` — auto-advancing 2-slide slider, stacked headline on
     yellow blocks, "Read More" (white) + "our Services" (dark) buttons,
     arrows + dots.
   - `Services` — white overlapping card, 6 items (icon + title + blurb),
     3-col grid.
   - `Features` — bg-image section, 3 cards (img + title + blurb +
     yellow-outlined Read More).
   - `Clients` — centered h2/p + logo carousel (5 logos).
   - `Testimonials` — split: bg image left, dark box right, "Client's
     Testimonials" carousel (quote + avatar + name + role).
   - `CtaBand` — yellow band, white h2 + dark "contact us" button.
   - `VideoSection` — text + Read More left; play button over bg image
     right (YouTube lightbox).
   - `Footer` — dark 4-column footer + bottom bar (copyright left, menu
     right); social icons.
5. Compose in `App.tsx`; document title "Dynamo — Industry Inc Template".
6. Verify: `bash scripts/verify-app.sh dynamo` (typecheck + lint + 100%
   coverage + build). PR lists source (ColorLib Industry Inc), preview URL
   (note the no-hyphen host), tokens, and what differs.
