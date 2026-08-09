# Succor (ColorLib Aid) — Tasks & Design Notes

> Recreation of ColorLib "Aid" — free Bootstrap 4 charity website template
> (https://colorlib.com/wp/template/aid/) under the NEW name **Succor**
> (help or relief given in time of need — the charity theme; single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md — verified 2026-08-09), per the
> monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Aid" — free Bootstrap 4 charity/nonprofit
  website template (page title: "Aid - Free Bootstrap 4 Template by
  Colorlib"), listed in TEMPLATES.md under **Bootstrap (216)** line 329
  (single listing — unlike Campus/Academy there is NO duplicate category
  entry; mark only that one `[x]` when shipped). The recreation brands
  itself **Succor**.
- **Preview DOM analyzed (verified 2026-08-09):**
  `https://preview.colorlib.com/theme/aid/` — HTTP 200, 27.5 KB HTML +
  `css/style.css` 69.5 KB (Bootstrap 4, owl.carousel, magnific-popup, AOS,
  flaticon/icomoon icon fonts, Nunito Sans). URL confirmed via
  `preview.colorlib.com/assets/js/products.js` entry
  `["aid","Aid","Business",0,"2019/04/aid-demo-preview.jpg",1]` → base
  `U[1]` = `https://preview.colorlib.com/theme/` + `aid/`. Screenshot
  `aid-free-template.jpg` (1200×946, browser-verified) matches the live
  render 1:1: monochrome hero photo (man covering his face) + white
  uppercase headline + black CTA + vertical "PLAY VIDEO" left; below the
  fold a smiling volunteer photo (teal shirt — the ONLY color in the
  upper half; note: brand accent in CSS is `#ffb400` yellow, not teal —
  the teal is just the photo subject's shirt) + black "Donation so far
  $380,000" panel.
- **⚠ KEY TRAP:** single-page landing only — nav links (Who we are,
  Causes, Stories, Contact) point to out-of-scope sibling pages; recreate
  as anchors/placeholders, never build the extra pages. No forms on this
  page — nothing to validate (unlike Booking/Regform family). The donation
  counter is a JS count-up animation (`jquery.animateNumber`,
  `data-number="380000"`) — recreate with a scroll-triggered count-up
  hook, not a static number.
- **Visual design (screenshot + live render):** emotional monochrome
  charity aesthetic — transparent navbar over a B&W photo hero, white
  uppercase weight-900 headline with 5px letter-spacing, black square-ish
  (3px radius) buttons, vertical "PLAY VIDEO" text, white text blocks
  overlaid on photos, black `#1e1e1e` donation panel with a huge
  animated $ counter, light-gray services band, golden-yellow `#ffb400`
  accent (navbar dot, link hover, "Join now" button, active service card),
  circular cause photos, purple `#6b76ff` testimonials section with dark
  slate overlay, dark footer.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.navbar.ftco_navbar.bg-dark.ftco-navbar-light` id
     `ftco-navbar`) — absolute, top 20px, transparent, z-index 3, padding
     0; `.container` > brand `Aid<span>.</span>` (white, dot `#ffb400`;
     desktop 18px+) + `.navbar-toggler` (hamburger, `oi oi-menu` icon +
     "Menu" text, `aria-label="Toggle navigation"`) + `.collapse.navbar-
collapse` > `ul.navbar-nav.ml-auto`: Home (`.active`), Who we are,
     Causes, Stories, Contact — `a.nav-link` 18px w700 white, padding
     1.8rem 20px, hover `#ffb400`. Mobile (≤991.98px): bg `#000000`
     solid, position relative, top 0, padding 10px 15px; links
     `rgba(255,255,255,0.7)` hover white.
  2. **Hero** (`div.hero-wrap` inline style `background-image:
url('images/bg_1.jpg')`, `data-stellar-background-ratio="0.5"`) —
     height 800px, `background-size: cover; background-position: top
center`. `.overlay` (absolute inset-0, bg `#fff`, opacity .1, height
     800px; hidden ≤1199px). `.container` > `.row.no-gutters.slider-text
.align-items-center.justify-content-end`: left `.col-md-6.d-none.
d-md-block` with `.play-video.pb-5.d-flex.align-items-center` —
     `p > a.popup-vimeo` (Vimeo 45830194): `<span class="icon"><i
class="ion-ios-play"></i></span> <span class="play">Play video</span>`;
     desktop: `writing-mode: vertical-lr`, rotate 180°, uppercase, 16px,
     ls 2px, icon in black box padding 20px 15px radius 3px; right
     `.col-md-6.order-md-last.ftco-animate.mt-5`: `<h1 class="mb-4">` "We
     can help to save the world" — 54px w900 white uppercase ls 5px,
     line-height 1.2 (40px ≤991px) + `p > a.btn.btn-black.py-3.px-4` "How
     Can I Help".
  3. **Volunteer / donation** (`section.ftco-section.ftco-no-pt.ftco-no-pb
.ftco-volunteer`) — `.row`: `.col-md-7.img-volunteer` (inline bg
     `images/about.jpg`, `margin-top: -70px` ≥992px, cover top-center)
     with `.row.no-gutters.justify-content-end > .col-lg-7` >
     `.text.py-5.pl-md-4.pr-md-3`: `<h2 class="mb-4">` "We need volunteers
     in Africa" (50px w900 black, line-height 1.1) + lorem p + `a.btn.btn-
primary.py-3.px-4` "Join now" (`#ffb400` bg, white text, 3px radius;
     hover transparent + `#ffb400` text). Right `.col-md-5.d-flex.
align-items-center.bg-black` (`#1e1e1e`) > `.about-text.py-5.pl-md-5`:
     `<h2>` "Donation so far <span>$</span><strong class="number"
     data-number="380000">0</strong>" — 50px w900 white; span/strong
     `rgba(255,255,255,0.2)`; count-up 0→380,000 via animateNumber + lorem
     p + `a.btn.btn-black.py-3.px-4` "Donate now".
  4. **Services** (`section.services-section.py-5.py-md-0.bg-light`) —
     `.row.no-gutters.d-flex` of 4 `.col-md-6.col-lg-3.d-flex.align-self-
stretch.ftco-animate` > `.media.block-6.services.d-block` (padding
     40px 25px, transition all .3s): `.icon > span.flaticon-*` (60px,
     `rgba(0,0,0,0.2)`; lucide equivalents: charity → `HandHeart`,
     adoption → `Users`, volunteer → `HeartHandshake`, open-book →
     `BookOpen`) + `.media-body > h3.heading.mb-3` (22px w900) + `p`.
     Cards: **Help & Support** (blurb = the 203 Fake St address) ·
     **Adoption** · **Volunteering** (3rd, `.active` → bg `#ffb400`
     ≥992px) · **Education**. ≥992px padding 10px 0.
  5. **Causes** (`section.ftco-section.ftco-causes`, 7em 0) — centered
     `.row.justify-content-center.pb-3 > .col-md-10.heading-section.
text-center`: `<h2 class="mb-4">` "Let's build the world without
     child abuse and neglect" (50px w900) + lorem p. Then `.row >
.col-md-12 > .carousel-causes.owl-carousel` of 5 `.item` →
     `a.causes.text-center` (`display:block`, width 100%): `.img` div
     (200×200, `border-radius: 50%`, `margin: 0 auto 20px`, overflow
     hidden, inline bg `images/causes-1..5.jpg`) + `<h2>` 20px w900
     (24px on `.causes-2` variant). Hover: `margin-top: -10px` + `.img`
     `:after` overlay opacity .8. Titles: Adoption, Fostering & Children
     Care · Disadvantages Young People · Meditation & Crisis Services ·
     Providing Children Care and Education · Safeguarding & Consultancy
     Services. ≤991.98px margin-bottom 30px.
  6. **Testimonials** (`section.testimony-section`) — bg `#6b76ff`,
     position relative; `.overlay` `#232931` opacity .7. `.row.ftco-
animate.justify-content-center`: `.col-md-6.d-flex` >
     `.testimony-img` (inline bg `images/testimony-img.png`, cover, top
     center, `margin-top: -150px` ≥992px) + `.col-md-6.py-5` >
     `.heading-section.heading-section-white.pt-4` `<h2 class="mb-0">`
     "Success Stories" (40px w900 white) + `.carousel-testimony.owl-
carousel.ftco-owl` of 5 `.item` > `.testimony-wrap.pb-4`: `.text`
     (padding-top 6em, margin-top -65px, radius 4px) `p.mb-4` quote 20px
     `rgba(255,255,255,0.8)` + `.d-flex` > `.user-img` (80×80 round,
     inline bg `images/person_1.jpg`, top center) + `.pos.ml-3`:
     `p.name` "Jeff Nucci" (20px w800 white) + `span.position`
     "Businessman". 5 slides all use the same person/lorem.
  7. **Footer** (`footer.ftco-footer.ftco-section`, bg `#1e1e1e`, 16px,
     padding 7em 0, z-index 0) — `.row.mb-5` of 4 `.col-md`:
     a) `.ftco-footer-widget.mb-4`: `h2.ftco-heading-2` "Aid." (24px w900
     white, margin-bottom 40px) + p blurb (`rgba(255,255,255,0.7)`) +
     `ul.ftco-footer-social.list-unstyled.float-md-left.float-lft.mt-5`
     (Twitter / Facebook / Instagram icon links — inline SVG, lucide has
     NO brand icons);
     b) "Information": `ul.list-unstyled` > Donation · Privacy · Terms
     Condition (`a.py-2.d-block`, `rgba(255,255,255,0.4)`);
     c) "Links": Home · Who we are · Causes · Blog · Contact;
     d) "Have a Questions?" `div.block-23.mb-3` `ul`: `li` map-marker +
     "203 Fake St. Mountain View, San Francisco, California, USA"; `li`
     phone `+2 392 3929 210`; `li` envelope `info@yourdomain.com` — link
     text `rgba(255,255,255,0.4)`, icon spans white. Bottom `.row >
.col-md-12.text-center` © bar: "Copyright © [year] All rights
     reserved | This template is made with ♥ by Colorlib" → reword
     credit (Component Dock), keep © line + heart.
- **Icon font mapping (source flaticon/icomoon → lucide-react):**
  flaticon-charity → `HandHeart` · flaticon-adoption → `Users` ·
  flaticon-volunteer → `HeartHandshake` · flaticon-open-book → `BookOpen`
  · icon-map-marker → `MapPin` · icon-phone → `Phone` · icon-envelope →
  `Mail` · icon-heart → `Heart` · ion-ios-play → `Play` · oi-menu →
  `Menu`. Social (icon-twitter/facebook/instagram) → inline SVG brand
  icons.
- **Neighbor check (2026-08-09):** sibling Bootstrap preps: Campus
  (Academy — green gradient education), Facade (Arclabs — dark corporate).
  Nothing in the repo uses the `#ffb400` yellow-on-charcoal + `#6b76ff`
  purple testimonial combo; keep Succor exact.

## Tasks (implementation order)

- [ ] Scaffold `apps/succor` (copy simplest existing app, rename package
      to `@free-react-templates/succor`; NOT `apps/aid`); `npm install`
      at root so package-lock.json registers the workspace
- [ ] `@theme` tokens: `--color-brand: #ffb400`, `--color-ink: #000000`,
      `--color-coal: #1e1e1e`, `--color-violet: #6b76ff`,
      `--color-slate: #232931`, `--color-mist: #f8f9fa`,
      `--color-soft-white: rgba(255,255,255,0.8)` (etc. per spec)
- [ ] `index.html`: Nunito Sans 200–900 Google Fonts `<link>`, title
      "Succor — Charity & Nonprofit Template"
- [ ] Navbar: absolute transparent over hero (top 20px), brand "Succor." + `#ffb400` dot, right-aligned w700 white links (Home active, Who we
      are, Causes, Stories, Contact) hover `#ffb400`; mobile: black solid
      static bg + hamburger toggle (`aria-expanded`, `Menu` + icon)
- [ ] Hero: 800px (desktop) cover photo (`picsum.photos/seed/succor-hero/
    1920/1080`, optional CSS grayscale), white 10% overlay, right-aligned
      h1 "We can help to save the world" (54px w900 uppercase ls 5px →
      40px mobile) + black "How Can I Help" button; left vertical "Play
      video" (rotated text, black play box) opening modal/external Vimeo
- [ ] Volunteer/donation split: left photo panel (`succor-volunteer`,
      -70px overlap desktop) + white overlay text ("We need volunteers in
      Africa" 50px w900 + lorem + `#ffb400` "Join now"); right `#1e1e1e`
      panel ("Donation so far $380,000" — span/digits
      `rgba(255,255,255,0.2)` + scroll-triggered count-up hook 0→380,000 +
      "Donate now" black button)
- [ ] Services band (`#f8f9fa`): 4 cards (Help & Support w/ address blurb
      · Adoption · Volunteering `#ffb400` active on desktop · Education),
      60px lucide icons, 22px w900 headings; 4→2→1 responsive
- [ ] Causes: centered heading + 5 circular 200px photo cards in a
      carousel (`succor-cause-1..5`), titles per section order, hover
      lift -10px; horizontal scroll/auto-advance carousel
- [ ] Testimonials: `#6b76ff` bg + `#232931` 70% overlay, side photo
      (-150px overlap), white "Success Stories" 40px w900 + carousel of
      quote/avatar(80px round `succor-person`)/"Jeff Nucci"/"Businessman"
- [ ] Footer: `#1e1e1e`, 4 widgets (brand + blurb + social inline SVGs ·
      Information · Links · Have a Questions? contact rows) + © bar with
      reworded credit; 4→2→1 columns responsive
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh succor` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs (placeholder
      images, reworded footer credit, lucide icon mapping); merge
      immediately; mark TEMPLATES.md "Aid" row (Bootstrap) `[x]` + surge
      URL + `npm run readme:status`
