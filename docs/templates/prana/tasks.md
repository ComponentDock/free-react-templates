# Prana (ColorLib Yogalax) — Tasks & Design Notes

> Recreation of ColorLib "Yogalax" — free YOGA STUDIO one-page template
> (https://colorlib.com/wp/template/yogalax/) under the NEW name **Prana**
> (Sanskrit for "breath/life-force" — yoga theme; single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md — verified 2026-08-09), per the monorepo naming mandate
> (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Yogalax" — free YOGA STUDIO template ("Do Yoga
  today for a better tomorrow", services, class levels, membership pricing
  cards, testimonials, stats counter, blog, gallery, SOLID PINK footer),
  Bootstrap 4 + jQuery (owl.carousel, AOS, magnific-popup, countUp) based.
  The recreation brands itself **Prana**.
- **Preview DOM analyzed (verified 2026-08-09):**
  `https://preview.colorlib.com/theme/yogalax/` — HTTP 200, ~37 KB HTML +
  `css/style.css` ~70 KB. The TEMPLATES.md screenshot
  (`yogalax-free-template.jpg`, 1200×946, browser-verified) matches the
  live render 1:1.
- **⚠ KEY TRAP:** the CSS declares Bootstrap's stock `--primary: #78d5ef`
  (light blue) but the THEME overrides every `.btn.btn-primary` to the
  dusty-pink **`#d291bc`** — links, icons, CTAs, footer bg, gradients,
  prices are ALL pink. Ignore `#78d5ef` entirely.
- **Visual design (screenshot + live render):** airy, feminine, light yoga
  aesthetic. Dusty-pink/mauve `#d291bc` accent on white/light-gray
  `#fafafa`; hero = full-viewport photo (woman meditating) with a soft 45°
  pink gradient washing in from the LEFT 68% (opacity .3); large thin
  (weight 200) black typewriter headline; PINK PILL "15 Day Free Trial"
  button. Sections alternate white / light-gray. Services icons sit in
  pale-pink `#f7ebf3` circles; pricing cards white with soft shadows and
  huge pink price numbers; stats band = dark photo under an opacity-.8
  pink wash with white numbers; footer SOLID PINK with white text. Font:
  Work Sans (200 hero, 300 headings, 400 body, 500 cards/prices, 600
  pricing CTA).
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** — transparent, absolute `top: 10px`, over the hero; brand
     "Yogalax" black + pink lotus icon (`flaticon-lotus`); links Home /
     Classes / Schedule / About / Blog / Contact (14px, w300, black,
     active = pink `#d291bc`); <992px → SOLID BLACK (`#000`) + white links.
  2. **Hero** (`hero-wrap js-fullheight`) — full viewport, bg photo
     `bg_2.jpg`; `.overlay` = `linear-gradient(45deg, #d291bc 0%,
rgba(255,255,255,0) 100%)`, `opacity: .3`, `width: 68%` (LEFT side);
     content `.col-md-8` left-aligned: typewrite `<h1>` (80px, w200, black)
     cycling "Inspiration For Joyful Living." / "Effective Therapy Against
     Stress." / "Flexibility is A Second Power."; `<h2 class="mb-5">` "Do
     Yoga today for a better tomorrow" (w200); CTA `btn btn-primary p-3
px-4` "15 Day Free Trial" — pill (radius 30px), pink bg + white text,
     border `rgba(255,255,255,0.4)`, hover → white bg + black text.
  3. **Intro** (`ftco-section ftco-intro`, bg photo `intro.jpg`) — content
     RIGHT-aligned `.col-md-6` (`row justify-content-end`): h2 "Why You
     Should Go To Yoga" (default black h2), blind-text paragraph, `ul
.do-list` 5 items (24px w300, mb-15, pink `ion-ios-checkmark-circle`
     icon span 22px `#d291bc`): "Yoga boosts brain power" / "Yoga helps
     you to breathe better" / "Yoga improves your strength" / "Yoga helps
     you to focus" / "Yoga helps give meaning to your day".
  4. **Services** (`ftco-section ftco-section-services bg-light`) — 4
     `.col-md-3` cards: `.services .icon` = **100px circle** `#f7ebf3`,
     radius 50%, 44px pink icon span; `<h3>` 20px w500; paragraph.
     Titles: Healthy Lifestyle · Body & Mind Balance · Meditation
     Practice · **Edeology** (source typo — keep verbatim).
  5. **Classes** (`ftco-section` white) — `<h3 class="subheading">Yoga
Classes</h3>` (16px uppercase ls-3px `#b3b3b3` w300) + `<h2
class="mb-1">Choose Your Level & Focus</h2>` (60px w300 black); 6
     `.package-program` cards (`.col-md-4`, 3×2): image block + pink
     `#d291bc` `:after` overlay (opacity 0→1 hover) + `.text` h3 +
     paragraph. Titles: Group Lessons · Yoga For Beginners · Yoga For
     Pregnant · Yoga For Couples · Bikram Yoga · Yoga Barre.
  6. **Pricing** (`ftco-section bg-light`) — subheading "Pricing Tables" +
     h2 "Membership Cards"; 3 `.block-7` cards (`.col-lg-4`): white,
     `padding: 30px`, shadow `0px 24px 48px -13px rgba(0,0,0,0.05)`;
     `.heading-2` (14px uppercase ls-1px w600) "Year Card" / "Monthly
     Card" / "Weekly Card"; `.price` = `$` sup 24px pink + `.number`
     60px w500 pink: 449 / 200 / 85; caption "For 1 Year/Month/Week";
     "Enjoy All The Features"; `.pricing-text` list (`#4d4d4d`, mb-15):
     Year → Onetime Access To All Club / Group Trainer / Book A Group
     Class / Fitness Orientation; Monthly + Weekly → Group Classes /
     Discuss Fitness Goals / Group Trainer / Fitness Orientation; CTA
     `btn-primary` "Get Started" — white UPPERCASE w600 ls-1px, width
     60%, absolute bottom-center.
  7. **Testimonials** (`ftco-section testimony-section` white) —
     subheading "Testimony" + h2 "Successful Stories"; owl-carousel (5
     slides in DOM) of `.testimony-wrap p-4 pb-5`: quote icon, blind-text
     paragraph, `.user-img` circle avatar + `.name` + `.position`
     "Customer". Names: Gabby Smith · Floyd Weather · James Dee.
  8. **Counter** (`ftco-counter ftco-bg-dark img`, bg photo `bg_3.jpg`) —
     same 45° pink gradient overlay, `opacity: .8`; 4 `.col-lg-3` blocks:
     80px square icon (1px `#d291bc` border, rotates 135° on hover, pink
     icon span) + `<strong class="number">` 50px w500 WHITE (count-up) +
     `<span>` label 14px `rgba(255,255,255,0.7)`: Happy Customers · Yoga
     Workshops · Years of Experience · Lesson Conducted.
  9. **Blog** (`ftco-section bg-light`) — subheading "Blog" + h2 "Recent
     Posts"; 3 `.blog-entry` cards (`.col-md-4`): image + `.text` white
     block overlapping (`margin-top: -40px; background: #fff`), `<h3
class="heading">` 18px w400 (link black → pink hover) + `.meta` +
     paragraph. Demo titles all "Young Women Doing Yoga" (placeholder —
     vary per card).
  10. **Gallery** (`ftco-gallery ftco-section`) — subheading "Gallery" +
      h2 "See the latest photos"; 4 `.col-md-3` tiles `.gallery` (height
      270px, bg photos); hover → 60px pink circle `#d291bc` radius 50% +
      white glyph, opacity 0→1 over 0.6s.
  11. **Footer** (`ftco-footer ftco-bg-dark`) — SOLID PINK
      (`background: #d291bc`, padding 4em 0): `h1.logo` 30px w300 white
      "Prana"; `h2.location` 24px `rgba(255,255,255,0.9)` "203 Fake St.
      Mountain View, San Francisco, California, USA"; social icons
      (twitter/facebook/instagram); copyright `rgba(255,255,255,0.7)`:
      "Copyright © <year> All rights reserved | This template is made
      with ❤ by Colorlib" (drop the Colorlib credit).
- **Design tokens (from `css/style.css`, verified 2026-08-09):**
  - Brand: **`#d291bc`** (dusty pink/mauve) — links, lotus icon, do-list
    checks, hero + pricing CTAs, active nav, FOOTER BG, both gradient
    overlays, price numbers, gallery hover circle, counter icon border.
  - Light bg: **`#fafafa`** (`.bg-light` !important); white `#fff`.
  - Body text: **`#b3b3b3`** 16px / lh 1.8 / w400; headings black `#000`.
    Subheading: `#b3b3b3`, 16px, UPPERCASE, ls **3px**, w300.
  - Font: **'Work Sans'** — 200 (hero h1 80px, h2), 300 (subheadings,
    do-list, section h2 60px, footer logo), 400 (body, blog heading 18px),
    500 (card h3 20px, price number 60px), 600 (pricing CTA, heading-2),
    700 (base btn). Google Fonts
    `family=Work+Sans:wght@200;300;400;500;600;700`.
  - Buttons: base `border-radius: 2px`, no shadow, 13px; `.btn.btn-primary`
    = pink bg + white text, hover → transparent bg pink text; HERO override
    = pill radius 30px + `border: 1px solid rgba(255,255,255,0.4)`, hover →
    white bg black text; PRICING override = white uppercase w600 ls-1px,
    width 60% absolute bottom-center.
  - Services icon circle: 100px, `#f7ebf3`, radius 50%; icon 44px pink.
  - Pricing cards: white, `padding: 30px`, shadow `0 24px 48px -13px
rgba(0,0,0,0.05)`; price `.number` 60px w500 pink; sup 24px pink;
    `.pricing-text li` `#4d4d4d` mb-15.
  - Counter: icon 80px square + 1px pink border (rotate 135° hover);
    number 50px w500 white; label 14px `rgba(255,255,255,0.7)`.
  - Gallery tile: height 270px; hover circle 60px pink, white glyph,
    opacity 0→1 0.6s.
  - Blog card: white `.text` overlaps image by -40px; heading 18px w400.
  - Footer: bg `#d291bc`, padding 4em 0; logo 30px w300 white; location
    24px `rgba(255,255,255,0.9)`; text `rgba(255,255,255,0.7)`.
  - Radius family: 50% circles, 30px hero pill, 2px base buttons; cards
    flat.
  - Grid rhythm: sections ~7em padding; 4-col services; 6 class cards
    (3×2); 3-col pricing; 4-col counters; 3-col blog; 4-col gallery;
    hero col-md-8 left; intro col-md-6 right.
  - Responsive: <992px navbar solid black + hamburger; <768px grids
    stack, section h2 → 28px.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap
  grid (NO Bootstrap dep); transparent absolute navbar (black links, pink
  active) collapsing to solid black mobile bar with hamburger
  (`aria-expanded`); hero = full-viewport picsum photo + left-68% 45° pink
  gradient overlay (opacity .3) + typewriter headline (static or simple
  cycling effect — JS typewriter not required) + pink pill CTA; intro with
  right-aligned column over photo bg + 5-item pink-check do-list; 4
  services cards with `#f7ebf3` circles + lucide icons; 6 class cards (3×2)
  with hover pink overlay; 3 pricing cards with pink 60px prices + feature
  lists + "Get Started" CTA; 3 testimonial cards (quote icon, text, circle
  avatar, name, "Customer"); counter band over photo + opacity-.8 pink wash
  with 4 stat blocks (fixed or count-up values: e.g. 800 / 100 / 20 / 200);
  3 blog cards with overlapping white text blocks; 4 gallery tiles with
  hover pink circle; SOLID PINK footer with logo, fake address, 3 social
  icons, copyright. All photos `https://picsum.photos/seed/prana-<n>/<w>/<h>`
  (hero `prana-1/1600/1000`, intro `prana-2/1200/900`, class cards
  `prana-3..8/800/600`, avatars `prana-9..11/100/100`, blog
  `prana-12..14/800/500`, gallery `prana-15..18/600/600`); icons from
  `lucide-react` (Lotus/Flower2 for brand, CheckCircle2 do-list, Heart/
  Users/Leaf services, Quote testimonial, Instagram/Facebook/Twitter
  footer); Work Sans via Google Fonts `<link>`; document title "Prana —
  Yoga Studio Template"; brand "Yogalax" → "Prana". Copy paraphrased but
  same kinds (headline "Inspiration For Joyful Living.", sub "Do Yoga today
  for a better tomorrow", CTA "15 Day Free Trial", headings "Why You
  Should Go To Yoga", "Choose Your Level & Focus", "Membership Cards",
  "Successful Stories", "Recent Posts", "See the latest photos").
- **Neighbor check (2026-08-09):** no existing app/spec uses the pink
  `#d291bc` brand on a light yoga layout — keep exact.

## Tasks (implementation order)

- [ ] Scaffold `apps/prana` (copy simplest existing app, rename package to
      `@free-react-templates/prana`; NOT `apps/yogalax`); `npm install` at
      root so package-lock.json registers the workspace
- [ ] `@theme` tokens: `--color-brand: #d291bc` (pink), `--color-light:
    #fafafa`, `--color-blush: #f7ebf3`, text grays `#b3b3b3`/`#4d4d4d`;
      radii 50% / 30px / 2px
- [ ] `index.html`: Work Sans 200–700 Google Fonts `<link>`, title "Prana
      — Yoga Studio Template"
- [ ] Navbar: transparent absolute top, brand "Prana" + pink lotus icon,
      links Home/Classes/Schedule/About/Blog/Contact (14px w300 black,
      active pink); <992px solid black + white links + hamburger toggle
      (`aria-expanded`)
- [ ] Hero: full-viewport, picsum bg photo, left-68% 45° pink gradient
      overlay (opacity .3); h1 "Inspiration For Joyful Living." 80px w200
      black (typewriter/static); h2 "Do Yoga today for a better tomorrow"
      w200; pink pill CTA "15 Day Free Trial" (radius 30px, white text,
      hover → white bg black text)
- [ ] Intro: bg photo, right-aligned column, h2 "Why You Should Go To
      Yoga", paragraph, 5-item do-list (24px w300, pink check icons)
- [ ] Services (`bg-[#fafafa]`): 4 cards — 100px `#f7ebf3` circle + 44px
      pink icon + 20px w500 title + paragraph (titles incl. "Edeology"
      verbatim)
- [ ] Classes: subheading "Yoga Classes" + h2 "Choose Your Level & Focus"
      (60px w300); 6 cards 3×2 with photos + hover pink overlay + title +
      paragraph
- [ ] Pricing (`#fafafa`): subheading "Pricing Tables" + h2 "Membership
      Cards"; 3 white cards (padding 30px, shadow `0 24px 48px -13px
    rgba(0,0,0,0.05)`): heading-2, $ + 60px pink number (449/200/85),
      "For 1 …", "Enjoy All The Features", 4-item feature list, pink "Get
      Started" CTA (white uppercase w600, 60% width)
- [ ] Testimonials: subheading "Testimony" + h2 "Successful Stories"; 3
      cards — quote icon, paragraph, circular avatar, name, "Customer"
- [ ] Counter: bg photo + opacity-.8 pink wash; 4 blocks — 80px icon w/
      1px pink border (135° rotate hover), 50px w500 white number, 14px
      label (Happy Customers / Yoga Workshops / Years of Experience /
      Lesson Conducted)
- [ ] Blog (`#fafafa`): subheading "Blog" + h2 "Recent Posts"; 3 cards —
      photo + overlapping white text block (18px title link black→pink,
      meta, paragraph)
- [ ] Gallery: subheading "Gallery" + h2 "See the latest photos"; 4 tiles
      270px with hover pink 60px circle + white icon
- [ ] Footer: SOLID `#d291bc` — white logo 30px w300, address 24px
      `rgba(255,255,255,0.9)`, 3 social icons, copyright line
      `rgba(255,255,255,0.7)`
- [ ] Responsive: <992px navbar solid black + hamburger; <768px grids
      stack single-column, section h2 → 28px
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh prana` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs; merge
      immediately; `[~]`→`[x]` + surge URL + `npm run readme:status`
