# Lather (ColorLib Barcut) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lather`.

## Design notes (replication findings)

- **Original:** ColorLib "Barcut" — free Bootstrap 4 barber/hair-stylist
  website template (source: https://colorlib.com/wp/template/barcut/).
  TEMPLATES.md line 212 — appears twice in the file (line 193 is `[x]` and
  already shipped as **dapper**; line 212 is `- [ ]` and unchecked). Only the
  line-212 row is the target; do not touch the line-193 row at bookkeeping
  time (dapper already covers it). Recreation uses the NEW name **Lather**
  (barber's lather — foamy shaving cream, a classic barbershop motif; single
  word, no collision with `ls apps/` or spec folders).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/barcut/ (HTTP
  200, ~42 KB; title "Barcut Salon"). Stylesheets: `css/main.css` (~76 KB —
  custom template styles) + linearicons, font-awesome.min,
  availability-calendar, magnific-popup, nice-select, owl.carousel,
  bootstrap, bootstrap-datepicker. JS: jquery, bootstrap, owl.carousel (hero
  - testimonials sliders), magnific-popup (video), main.js. Fonts:
    **"Playfair Display"** (serif — all headings) + **"Roboto"** (sans — body,
    buttons), @font-face via cf-fonts; load both from Google Fonts `<link>` in
    the recreation.
- **Screenshot:** `barcut-free-template.jpg` (TEMPLATES.md line 212) — clean
  white top with gold gradient CTA, large hero photo of a man getting a
  haircut with a gold "Watch Intro Video" play button, white about/services
  sections with gold accents and Playfair Display serif headings, photo
  catalogue, black footer bar. Gold #ba9236 dominant.
- **Visual design (from DOM + CSS tokens + screenshot):** luxury barbershop
  aesthetic — gold gradient **#ba9236 → #fdc136** on all primary CTAs
  (`.primary-btn`, `.video-play-button`, `.single-gallery .thumb
.overlay-bg`, `.testimonials-area .owl-thumb-item.active .overlay-grad`,
  `.single-price.active` h4/h1, `.news-widget .input-group .sub-btn`), solid
  gold variants #ba9236/#bb9236; Playfair Display bold #000 headings; Roboto
  body; white section backgrounds (#fff) with light #f9f9ff / #fafaff /
  #f9f9f9 bands; black #000000 footer; primary buttons pill-shaped
  (`border-radius: 50px`, `line-height: 50px`, `padding: 0 38px`, `font-size:
12px`, uppercase, `letter-spacing: 2px` in about); `.section-gap` padding
  120px 0 (60px < 992px).
- **Structure (1:1, section order):**
  1. `header.header-area` — `background-color: #fff`, `z-index: 999999`;
     brand left; `div.collapse.navbar-collapse.menu-right
#collapsibleNavbar` with `ul.navbar-nav.justify-content-center.w-100`:
     **Home / about / pricing / barbers / gallery / Pages (dropdown:
     Services, Elements) / Blog (dropdown: Blog, Blog Detail) / Contact** +
     right-side nav button. (Nav links carry `hide-lg` except pricing +
     Contact; dropdowns use `id="navbardrop"`.)
  2. `section.home-banner-area.relative` — `div.owl-carousel.home-banner-owl`
     with **three `div.banner-img` slides** (`img/banner/b1..b3.jpg`, each
     with `div.overlay.overlay-bg` dark overlay); static `div.text-wrapper`:
     `h1` **"For All Occasion HairStyle is a Must Try Fashion"**, lorem
     paragraph, `a#play-video.video-play-button` (gold gradient circle,
     YouTube popup) + `div.video-text` "Watch Intro Video".
  3. `section.about-area.section-gap-top` — `div.single-about.row
.align-items-center`: left `div.about-content` (col-lg-4): `h1` **"We
     Believe that Interior beauty Lasts Long"** + lorem + `a.primary-btn`
     **Learn More** (`margin-top: 30px; text-transform: uppercase;
letter-spacing: 2px`); right `div.about-thumb` (col-lg-7) `img/about-
img.jpg` + `div.bordered-img` small `img/about-img2.jpg`.
  4. `section.service-area.section-gap` — `div.section-title` (h1 **"What
     We Can Do for You"** + lorem) + four `col-lg-3.col-sm-6.col-md-3`
     `div.single-service` **photo cards** (img + h4): **Stylish Hair
     Cutting / Quality Gel Shave / Beard Trimming / Executive Wash**.
  5. `section.catalogue-area.section-gap` — `div.tab-area >
div.tab-contact-wraper#horizontalTab`: `h4` **"Select Your Style"** +
     `p` "Shaveing"; `div.jq-tab-menu.justify-content-center` with four
     `div.jq-tab-title` icon tabs (`data-tab="1..4"`, first `.active`,
     alternating `.deff-bg1`); `div.jq-tab-content-wrapper` with four
     `div.jq-tab-content` panels (lorem + `a.view-btn` **"View Gallery..."**).
     NOTE: homepage has NO `.single-gallery` grid — that class (with the
     gold overlay) exists only in CSS for inner gallery pages.
  6. `section.team-area.section-gap` — `div.section-title` **"We Have All
     Famous Barbers"** + three `col-lg-4` `div.single-team-member` cards:
     `div.member-img` photo + `div.proff` h4 name + p role — **Peter Baker /
     Head hair Cut Specialist, Nancy Holmes / Spa & Makeup Specialist, Gavin
     Hansen / Hair Styling Expert**.
  7. `section.testimonials-area.section-gap-top` — background photo +
     `div.overlay.overlay-bg`; centered `img.quote-img`; `div.testi-slider
.owl-carousel` (`data-slider-id="1"`), `div.item > div.testi-item`: h4
     name **Fanny Spencer** + 5-star `ul.list` (fa-star ×5) + quote
     paragraph; `div.owl-thumbs.d-flex.justify-content-center` thumbnails —
     `.owl-thumb-item.active .overlay-grad` gold gradient.
  8. `section.price-area.section-gap-top` — `div.section-title` **"Choose
     Your Package"** + lorem + three `col-lg-4.col-md-6.text-center`
     `div.single-price`: `div.top-sec` h4 plan + p "Standard Package",
     `div.bottom-sec` h1 **$79.00 / $89.00 / $99.00**, `div.end-sec` ul of 5
     features (Basic hair Cut / Basic Shave / Basic Head Wash / Basic Body
     Massage / Basic Snacks) + `a.primary-btn.price-btn.mt-40` **Order Now**;
     middle card (Premium $89.00) is `.active` (gradient h4/h1 + button).
     Plans: **Basic Hair Cut & Shave / Premium Hair Cut & Shave / Luxury
     Hair Cut & Shave**.
  9. `section.blog-area` — `div.section-title` **"Latest From Blog"** + two
     `col-lg-6.mb-30` rows, each `div.single-blog` (row align-items-center):
     `div.blog-thumb` (col-lg-4) photo + `div.blog-details` (col-lg-8):
     `div.blog-meta` (fa-calendar **13th Dec**, fa-heart-o **15**,
     fa-comment-o **04**), `h4 a.blog-title` **"Portable Fashion for women"**
     - lorem snippet. (All cards share the same title/meta in the original.)
  10. `footer.footer-area.section-gap` — `background: #000000`;
      `div.row.footer-inner` with three `aside.f-widget`: **About Me**
      (`div.f-title h3` + paragraph), **Newsletter** (`div.news-widget`:
      form `#mc_embed_signup.subscribe_form`, email input +
      `button.btn.sub-btn` gold gradient + lnr-arrow-right), **Follow Me**
      (`div.social-widget`: fa-facebook / fa-twitter / fa-dribbble /
      fa-behance); bottom `div.ab-widget` copyright + ColorLib credit (→
      repo-standard credit).

## Implementation todo

- [ ] Scaffold `apps/lather` (copy simplest existing app, package
      `@free-react-templates/lather`).
- [ ] `index.html`: title "Lather — Barber Shop", Playfair Display + Roboto
      via Google Fonts `<link>`.
- [ ] `@theme` tokens: `--color-brand: #ba9236`, `--color-brand-light:
    #fdc136`, `--color-ink: #000`, `--color-muted: #777`, `--color-band:
    #f9f9ff`, `--color-footer: #000`, font-serif Playfair Display,
      font-sans Roboto.
- [ ] Header: white bar, brand (lucide Scissors + Lather), centered nav
      Home / about / pricing / barbers / gallery / Pages▾ (Services,
      Elements) / Blog▾ (Blog, Blog Detail) / Contact, right-side nav
      button; mobile toggler with aria-expanded + dropdown menus.
- [ ] Hero: full-width carousel of 3 picsum photos (seed lather-1..3) with
      dark overlay, static headline "For All Occasion HairStyle is a Must
      Try Fashion", paragraph, circular gold Watch Intro Video button
      (lucide Play) + caption.
- [ ] About: left "We Believe that Interior beauty Lasts Long" + paragraph + Learn More gold pill; right photo (seed lather-4) + small bordered
      accent photo (seed lather-5).
- [ ] Services: "What We Can Do for You" + four photo cards (seeds
      lather-6..9) with h4 captions.
- [ ] Catalogue: "Select Your Style" + "Shaveing" + four icon tabs
      (lucide icons) switching four content panels, each with lorem + View
      Gallery... button (aria-selected/aria-expanded for a11y).
- [ ] Barbers: "We Have All Famous Barbers" + three cards (photo seed
      lather-10..12, name, role).
- [ ] Testimonials: quote icon, carousel of Fanny Spencer items (5 stars,
      quote), gold active thumbnail nav.
- [ ] Pricing: "Choose Your Package" + Basic/Premium/Luxury cards
      ($79/$89/$99, "Standard Package", 5 features, Order Now), middle
      Premium card gold-highlighted.
- [ ] Blog: "Latest From Blog" + two cards (thumb seed lather-13..14,
      meta 13th Dec/15/04, title, snippet).
- [ ] Footer: black, About Me + Newsletter (email input + gold subscribe
      button) + Follow Me (4 socials) + repo-standard credit.
- [ ] Tests (vitest + RTL, 100% coverage): header render + dropdowns +
      toggler, hero slides + overlay text, about, services cards, catalogue
      tab switching, team cards, testimonials carousel, pricing cards +
      active plan, blog cards, footer widgets, page composition + title.
- [ ] Verify: `npm run verify:app -- lather` green.
- [ ] PR: `feat/template-lather`, description with source (Barcut), preview
      URL, tokens, renames; merge immediately with `gh pr merge --squash
    --delete-branch`; mark TEMPLATES.md line 212 `[x]` + surge URL +
      `npm run readme:status` (line 193 stays — that's dapper).

## Pitfalls

- TEMPLATES.md has **two Barcut rows**: line 193 `[x]` (shipped as dapper)
  and line 212 `- [ ]` (this template). Only touch line 212 at bookkeeping
  time (exact line-targeted edits only).
- The hero carousel slides are **images only** — the headline/paragraph/
  play button are a static `text-wrapper` overlay, NOT per-slide text.
- The homepage catalogue is the "Select Your Style" **tab block**, not a
  photo grid — `.single-gallery` (with gold overlay) only exists on inner
  gallery pages; don't invent a grid.
- Services cards are **photo + caption** (image with h4 label), not
  icon/heading/blurb.
- Blog cards all share the same title ("Portable Fashion for women") and
  meta (13th Dec / 15 / 04) in the original — keep that or vary minimally.
- Primary buttons are **pill-shaped** (border-radius 50px) — do not make
  them square.
- Fonts are Playfair Display (headings) + Roboto (body) — a serif/sans
  pairing, not a single font.
