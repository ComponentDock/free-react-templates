# Cargoly (ColorLib Boxe) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-cargoly` by an implementer stream.

## Design notes

- **Original:** ColorLib "Boxe" — free logistics/freight website template.
  Source: https://colorlib.com/wp/template/boxe/. Despite the name it is a
  trucking/freight template (not boxing). New name: **cargoly** (cargo +
  "-ly", matching roamly/skyly/roadly; no collision with `ls apps/` or
  existing specs). Boxe appears once in TEMPLATES.md (line 351, Bootstrap
  section, first unchecked without a prep — the claim).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/boxe/`
  (HTTP 200, 33KB) + stylesheet `css/style.css` (176KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens. Screenshot
  `boxe-free-template.jpg` (1200×946) confirms: dark navy hero with a white
  truck on a mountain road at dusk, bold white headline with a yellow accent
  word, yellow `#f6a515` square arrow button, floating yellow "Logistics
  World 2019 / Get Pick Up Hear" card, violet `#6345fe` logo, uppercase
  small nav + search icon, white content sections below (services, process,
  quote, deliveries, blog, footer).
- **Structure observed (1:1):**
  1. `header.main_menu.home_menu` (navbar): `a.navbar-brand`
     `img/logo.png` → text logo "Cargoly"; `ul.nav` links: **Home, About,
     Services, delivery (dropdown: Blog, Single blog, Elements), Contact**;
     right `i.ti-search`; mobile hamburger.
  2. `section.banner_part` (height 835px, `background-image:
url(../img/banner_bg.png)`, cover, center):
     - `div.banner_text`: `h1` "Run on the **rocky streets**" (white, accent
       word yellow) + `p` "Fast landing delivery / for your goods business".
     - phone input + country-code dropdown (intlInputPhone, e.g. +33) +
       yellow square arrow button.
     - floating yellow card: "Logistics World 2019" (small) / "Get Pick up
       Hear" (bold uppercase) + white right-arrow.
  3. `section.about_part.section_padding` (padding 355px 0 180px — overlaps
     banner):
     - left `div.about_part_img` (image + accent panel); right
       `div.about_part_text`: "about us" eyebrow, `h2` "Boxe Best" →
       "Cargoly Best", two paragraphs, `a.btn_1` "learn more" (violet).
  4. `section.service_part` (padding 400px 0 116px): `h2` "Boxe Best" +
     "Deliverie Services" label + intro, 4 `div.single_service` cards
     (icon + h4 + text): **Planning, List Delivery, Transport, Inventory**.
  5. `section.cta_area` (bg `#000` + `cta_bg.png` cover, text-center, 179px
     0): `h2` "International Truck Freight" + paragraph + `a.btn_1` "view
     all" (violet bg white text).
  6. `section.deliverie_process.section_padding` (70px 0 50px): `h2` "World
     Wide" + "Deliveries Process" label + 4 items (icon, title, % stat):
     **Trucks 50% · Air 10% · Railway 20% · Ship 20%** + short text.
  7. `section.regervation_part.section_padding` (bg `#6345fe` +
     `reservation_bg.png`):
     - left: `h2` "Get A Quote" + form: **Name, Email or phone, Dapurtare
       (Departure), Arrival, Cargo Description, Transportation Method**
       (select) + "GET A QUOTE" submit (white bg, violet text).
     - right: `h2` "Are You A Sender?" + paragraph + "check now" link.
  8. `section.deliveries_part.section_padding` (70px 0 50px): `h2` "Recent
     Deliveries" + 4 `div.single_deliver` cards ("World Corgo"): cargo
     image, `h4` title, address "324 King Heaven tower, House no Melbourne,
     VIC-222, Australia", "check now" link.
  9. `section.blog_part.padding_bottom`: `h2` "Latest Blog" + 3
     `div.single_blog` cards: image + date block ("jan"/"2019"), `h3`
     "Founder Defends", excerpt, meta (100 Likes · 1 Comment), "read more".
  10. `footer.footer-area` (`footer_bg.png`, 4 cols): about + Working Hours
      (Mon–Fri 8AM–6PM, Sat–Sun 8AM–12PM); CATEGORY links (Boat Shippment,
      Services, Transport Planning, Transportation, Truck Delivery
      Checking); Our Gallery (image grid); Newsletter (blurb + email +
      subscribe). Bottom copyright bar → repo-standard credit.
- **Design tokens:**
  - Fonts: **Poppins** (headings/nav 300–800) + **Roboto** (body
    300/400/500) — Google Fonts `@import` in style.css; load via `<link>`.
  - Brand violet **#6345fe**: `.btn_1` hover bg, `.btn_4` bg, banner button,
    regervation_part bg, logo, link hovers.
  - Accent yellow **#f6a515**: hero arrow button, pick-up card, headline
    accent word, hover accents.
  - Heading ink **#415094**; body grey **#999999/#777777/#888888**;
    neutrals **#fff/#f9f9ff/#f0e9ff/#000**; borders #f1f1f1/#eee.
  - Buttons `.btn_1`: padding 19px 47px (variants 10px 30px, 14.5px 43px),
    radius 4px, 14px, uppercase, weight 800, bg `#f5f5fd` text `#6345fe` →
    hover bg `#6345fe` text `#fff`; banner variant bg `#6345fe` hover text
    `#f6a515`. `.btn_3` text link + arrow (hover yellow).
  - Section bgs: banner image cover 835px; cta `#000` + image, 179px 0;
    regervation solid `#6345fe`; footer image; content sections white.
- **Implementation notes:**
  - Big vertical paddings on about (355px) and services (400px) make those
    sections overlap the hero/CTA above — recreate with negative margins or
    overlapping containers to match the rhythm.
  - Hero phone input: `<select>` for country code + phone text input +
    yellow square button with right-arrow icon (lucide `ArrowRight`).
  - Pick-up card is absolute-positioned at the hero's bottom-right.
  - Process stats: progress-bar style (50/10/20/20) or stat blocks with
    percent labels — either faithful; keep the same titles.
  - Quote form: zod validation (name, email-or-phone, departure, arrival,
    cargo description, transportation method select); block submit until
    valid; per-field errors.
  - Nav "delivery" dropdown: Blog, Single Blog, Elements (original's odd
    structure; keep or simplify to one "Blog" dropdown — note in PR).
  - Footer newsletter: email input + subscribe button (no backend).
  - Images: `picsum.photos/seed/cargoly-N/w/h` (hero ~1600×835, about,
    service icons via lucide, delivery cards ~370×240, blog ~370×230,
    gallery thumbs ~80×80). Fonts via `<link>`; icons lucide-react.

## Tasks

- [ ] Scaffold app (copy simplest existing app; rename package
      `@free-react-templates/cargoly`; `npm install` at root before
      committing so lockfile registers the workspace).
- [ ] Register `injectUiSource()` in `vite.config.ts` (see
      docs/conventions.md).
- [ ] TDD red: write section tests first (Header, Hero, About, Services,
      CtaBanner, Process, Quote, Deliveries, Blog, Footer, App composition)
      mirroring the spec scenarios.
- [ ] Theme tokens in `index.css` `@theme`: brand `#6345fe`, accent
      `#f6a515`, ink `#415094`, greys, fonts Poppins/Roboto.
- [ ] Header: logo, nav + Delivery dropdown, search icon, mobile hamburger.
- [ ] Hero: full-bleed truck bg, headline w/ yellow accent, phone +
      country select + yellow arrow, floating pick-up card.
- [ ] About: image + eyebrow + heading + copy + learn-more button.
- [ ] Services: 4 icon cards (Planning, List Delivery, Transport,
      Inventory).
- [ ] CTA banner: dark, "International Truck Freight", view-all button.
- [ ] Process: "World Wide" + 4 stat items (50/10/20/20%).
- [ ] Quote: violet section, 6-field validated form + sender column.
- [ ] Deliveries: 4 World Corgo cards with address + link.
- [ ] Blog: 3 cards with date block, meta, read-more.
- [ ] Footer: 4 columns + working hours + gallery + newsletter + credit.
- [ ] App.tsx composition + document title "Cargoly — Logistics & Freight".
- [ ] `npm run verify:app -- cargoly` green (typecheck, lint, 100% coverage,
      build) — FAST_MODE gate; full `npm run gate` runs in CI/nightly.
- [ ] PR to main (branch `feat/template-cargoly`), squash-merge immediately,
      mark `[x]` + surge URL + homepage + `npm run readme:status` (AGENTS.md
      rule 7).
