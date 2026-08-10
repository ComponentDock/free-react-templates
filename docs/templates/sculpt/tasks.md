# Sculpt (ColorLib Flawless) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sculpt`.

## Design notes (replication findings)

- **Original:** ColorLib "Flawless" — one-page gym / fitness-club theme
  (source: https://colorlib.com/wp/template/flawless/). TEMPLATES.md has
  TWO rows: line 401 (category Bootstrap) and line 1849 (category Health
  Fitness) — mark BOTH `[x]` when done. No other spec on main maps to this
  slug (grep-checked before prepping).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/flawless/
  (HTTP 200, 44,621 bytes; title "Flawless Template"). Master stylesheet
  `css/style.css` (43,026 bytes / 1,608 lines) fully extracted; libs:
  Bootstrap 3 grid, FlexSlider (hero), Owl Carousel (trainers),
  bootstrap-datepicker (request date), animate.css, magnific-popup
  (gallery), icomoon + flaticon icon fonts. Font **Work Sans** (body 17px /
  300; headings 400) — not linked via Google Fonts in the demo; load it via
  Google Fonts `<link>` in the recreation.
- **Screenshot:** `flawless-free-template.jpg` (1200×946, viewed in
  browser) — full-bleed hero photo (woman in water) with transparent
  navbar (uppercase white "FLAWLESS" left, white links right), centered
  thin white headline "Working out is a reward not a punishment",
  carousel dots (active dot orange), scroll-down pill; below the hero a
  row of five solid-orange program cards ($150 MONTH, blurb, "MORE").
  Cross-checks the live DOM + CSS analysis. Demo brands itself "Flawless";
  recreation uses the NEW name **Sculpt**.
- **Visual design (from DOM + CSS tokens + live computed styles):** one
  burnt-orange accent (#f17445) drives every section. Transparent navbar
  over the hero (logo 24px/700 uppercase white + orange icon; links 15px
  rgba(255,255,255,.9), dim to .5 on hover/active; Classes dropdown 140px
  shadow; mobile burger). Hero: 4 full-bleed slides (650px min-height,
  overlay rgba(0,0,0,.3), centered h1 50px/300 white opacity .8, NO CTA on
  home), carousel dots (active #f17445), mouse scroll pill (30×45, border
  rgba(255,255,255,.4), animated wheel). Intro: 5× 20%-width #f17445 cards
  pulled up 6em over the hero (even cards get rgba(0,0,0,.05)), h3 22px/300
  white, price 40px/400 "$150" + 12px uppercase "MONTH", blurb
  rgba(255,255,255,.8), "MORE" 12px uppercase white at margin-top 60px.
  Services (white + bottom skew strip 100%×120px skewY 4deg): "Work hard
  stay humble" 34px/300; left 2×2 icon grid (Cardio Program, Body
  Building, Karate Classes, Boxing Program), right collage (1× 240px wide
  - 2× half). Schedule (#f2f3f7): white pill weekday tabs (radius 30px,
    active bg #f17445 white), 2 rows × 4 entries per day (icon 40px
    #f17445, "06am - 8am" 12px #000 with orange underline, h3 18px/300,
    trainer 13px; borders #d9d9d9). Shop: 4 products (image 300px, hover
    cart bar rgba(0,0,0,.8) uppercase 12px links, title 14px uppercase,
    price #f17445, sale struck gray). Counters: bg image band + white skew
    strips, numbers 60px/300 white animate on scroll (1500 Clients / 400
    Trainers / 1200 Managers / 1300 Rooms), labels 20px white 80%.
    Trainers: owl carousel, 5 entries (Diego Carter/Power, Lea Young/Yoga,
    Alysha Reed/Dance, George Cooper/Boxing, Melody Moxin/Boxing).
    Testimonials: fixed bg image (img_bg_2) + dark overlay, white heading
    "What people says behind their success", 5 columns (quote + "Dave
    Henderson" + 30px circular avatar). Classes: 3 cards with **circular**
    250px photos + 80px circular #f17445 price badge "$25.00 /month", h3
    20px/300, "Learn More" 13px #000 + arrow. Request: **solid #f17445**
    band + skew strips; left "Request" white h2 + p; form (Services select
    Yoga/Boxing/Power/Body Building, Fullname, Phone, Date) — inputs 50px,
    radius 0, bg rgba(255,255,255,.9), border 2px #fff, padding 10px 50px
    10px 20px (right icon space), white labels; Submit = **pill radius
    30px**, bg #f17445 white text, border 1px rgba(255,255,255,.3), padding
    12px, margin-top 28px. Events: 3 cards #f2f3f7 padding 1.3em; right-
    aligned date block (day "19" 36px/700 #f17445 + month "APR" 20px),
    "Organized by: Noah Henderson", h2 24px/1.4, location with #f17445
    map-pin ("291 South 21th Street, Suite 721 New York NY 10016"). Blog
    (#f2f3f7 + skew strip): 3 cards, image 250px with date chip overlapping
    bottom-left (day "18" 24px white on #f17445 + month "MAY" 14px #333 on
    white), desc padding 2.5em 1.5em, "Posted by: Noah Henderson", h2 22px.
    Gallery: 10 photos 20% × 300px, hover white plus icon. Newsletter:
    **solid #f17445** band padding 2em 0, white h2 + 18px subtext; input
    transparent NO border white text + "Subscribe Now" button bg
    **rgba(255,255,255,.2)** white (frosted). Footer: **#25282a** padding
    top 6em, text rgba(255,255,255,.6) 14px/1.8; 4 cols — About (blurb + 4
    social circles twitter/facebook/linkedin/dribbble), Quick Links
    (About Us, Testimonials, Classes, Blog, Blog, Contact — check icons),
    Recent Post (3× f-blog: 70×60 thumb + 16px #cccccc title "Tips for sexy
    body" + 13px "18 April 2018"), Contact Info (address, phone +1235 2355
    98, email info@yoursite.com, website yourwebsite.com). Copyright bar
    (padding 1.2em): "Copyright © {year} All rights reserved | This template
    is made with ♥" (drop Colorlib/Unsplash/Pexels credits).
- **Seeds for picsum placeholders (approx 30):** sculpt-1..4 hero,
  sculpt-5..9 intro cards, sculpt-10..12 services, sculpt-13..16 products,
  sculpt-17 counter band, sculpt-18..21 trainers, sculpt-22 testimony band,
  sculpt-23..25 avatars, sculpt-26..28 classes, sculpt-29..31 blog,
  sculpt-32..40 gallery.
- **lucide-react icon map:** gym/weightlifting → `dumbbell`, cardio →
  `heart-pulse`, martial arts → `target`, boxing → `zap` (or `flame`),
  swimmer → `waves`, meditation → `flower-2` (or `leaf`), exercise → `person-standing`;
  schedule/date → `calendar`, time → `clock`, location → `map-pin`,
  phone → `phone`, mail → `mail`, website → `globe`, gallery → `plus`,
  footer quick links → `check`, arrows → `chevron-right`, socials →
  `twitter` / `facebook` / `linkedin` / `dribbble`, nav → `menu`, `search`.

## Implementation order (suggested)

1. Scaffold `apps/sculpt` from the simplest existing app; rename package to
   `@free-react-templates/sculpt`; register in the root lockfile via the
   repo's usual add-workspace flow (implementer's job, NOT prep).
2. `@theme` tokens: brand `#f17445`, brand-hover `#f3865d`, light `#f2f3f7`,
   footer `#25282a`, gold `#F7AF1D`, ink `#000`; font `Work Sans` (300/400/700).
3. Components (one per section, in `apps/sculpt/src/components/`):
   `Navbar` (transparent + mobile burger + Classes dropdown),
   `Hero` (carousel of 4 slides + dots + mouse pill),
   `IntroCards` (5 orange cards),
   `Services` (2×2 icon grid + collage + skew strip),
   `Schedule` (weekday pills + 8-class grid, client-side day switching),
   `Shop` (4 products + hover cart bar),
   `Counters` (IntersectionObserver count-up on scroll),
   `Trainers` (carousel of 5),
   `Testimonials` (5 columns over fixed bg),
   `Classes` (3 circular cards + price badges),
   `RequestForm` (zod-validated: services select, fullname, phone, date),
   `Events` (3 cards), `Blog` (3 cards + date chips),
   `Gallery` (10-image grid + hover overlay),
   `Newsletter` (zod-validated email + success state),
   `Footer` (4 cols + copyright bar).
4. TDD per component: tests first, 100% coverage via
   `scripts/verify-app.sh sculpt` (typecheck + lint + vitest + build).
5. PR description: source template + preview URL + tokens + what differs
   (rename, picsum seeds, lucide icons, React state instead of jQuery libs,
   neutral copyright credit).
6. After deploy: mark TEMPLATES.md lines **401 and 1849** `[x]` + surge
   URL, `npm run readme:status`, conventional commit.

## Verification

- [ ] `scripts/verify-app.sh sculpt` (typecheck + lint + 100% coverage tests + build)
- [ ] Spec scenarios all implemented (`openspec/specs/template-sculpt/spec.md`)
- [ ] Visual pass vs live demo `https://preview.colorlib.com/theme/flawless/`
- [ ] TEMPLATES.md lines 401 + 1849 both `[x]`
