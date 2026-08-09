# Tonsor (ColorLib Barcut) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-tonsor` by an implementer stream.

## Design notes

- **Original:** ColorLib "Barcut" — free barbershop website template.
  Source: https://colorlib.com/wp/template/barcut/. New name: **tonsor**
  (Latin for barber; no collision with apps/ or existing specs).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barcut/`
  (HTTP 200, 42.3KB) + stylesheet `css/main.css` (76.2KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens. Screenshot
  `barcut-free-template.jpg` confirms: black/white/gold "noir luxury"
  barbershop — darkened hero photo (man getting a haircut) with white serif
  headline "For All Occasion HairStyle is a Must Try Fashion", gold/mustard
  pill buttons, light sections (services/team/pricing) alternating with
  dark (hero/catalogue/testimonials/black footer), middle "Premium" price
  card inverted black+gold, black blog cards.
- **Structure observed (1:1):**
  1. `header-area` (white, sticky, z-index 999999): `menu-left` (centered)
     = logo img `img/logo.png` ("Bar Cut Salon" → text logo "Tonsor") +
     HOME / ABOUT / BARBERS / GALLERY; `menu-right` (font-size 11px) =
     PRICING, PAGES ▾ (Services, Elements), BLOG ▾ (Blog, Blog Detail),
     CONTACT. Uppercase links; hover/active #ba9236.
  2. `home-banner-area` (bg #eaeaea, padding 172px 20px 100px): darkened
     photo slider (b1/b2/b3.jpg), centered white `banner-content`: h1 serif
     "For All Occasion HairStyle is a Must Try Fashion" + light-grey lorem +
     round gold-gradient `video-play-button` (linear 90deg #ba9236→#fdc136)
     - "WATCH INTRO VIDEO".
  3. `about-area section-gap-top` (white): left photo collage
     (`about-img.jpg` + `about-img2.jpg` overlapping), right: h1 serif "We
     Believe that Interior beauty Lasts Long" + paragraph + `primary-btn`
     "LEARN MORE" (gold gradient, to right #ba9236→#fdc136→#ba9236).
  4. `service-area section-gap` (white): h1 "What We Can Do for You" +
     lorem; 4 `single-service` (col-lg-3) photo cards with absolute bottom
     h4 label (rgba(0,0,0,0.3)): Stylish Hair Cutting / Quality Gel Shave /
     Beard Trimming / Executive Wash; hover h4 → #bb9236.
  5. `catalogue-area section-gap` (bg image `catalogue-bg.jpg`, cover):
     floating white card: h4 "Select Your Style" + p "SHAVEING" (#bb9236,
     uppercase) + 4 tab icons (icon1–4.png) + paragraph + "VIEW
     GALLERY..." link (hover #bb9236; active tab border-bottom #bb9236 +
     shadow rgba(187,146,54,0.3)).
  6. `team-area section-gap` (white): h1 "We Have All Famous Barbers" +
     lorem; 3 `single-team-member` (col-lg-4): photo (person1–3.jpg,
     overflow hidden) + h4 name + p role (uppercase): Peter Baker / Head
     hair Cut Specialist; Nancy Holmes / Spa & Makeup Specialist; Gavin
     Hansen / Hair Styling Expert.
  7. `testimonials-area section-gap-top` (dark, photo-backed): carousel of
     4 quotes — h4 "Fanny Spencer" + 5 gold stars + quote (original repeats
     one lorem quote — paraphrase into distinct quotes); below, thumbnail
     strip (`owl-thumb-item`, t1–4.png) with gold-gradient overlay on
     active/hover; quote icon `quote.png`.
  8. `price-area section-gap-top` (white): h1 "Choose Your Package" +
     lorem; 3 `single-price` (col-lg-4, bg #f9f9f9, padding 40px 30px):
     top-sec h4 title + p "Standard Package"; bottom-sec h1 price (36px
     Roboto 700, dashed top border): Basic $79.00 / Premium $89.00 (active:
     black card, gold gradient h4/price/button) / Luxury $99.00; 5-item
     list (Basic hair Cut, Basic Shave, Basic Head Wash, Basic Body
     Massage, Basic Snacks); `primary-btn.price-btn` "ORDER NOW".
  9. Latest blog (white bg, dark cards): h1 "Latest From Blog" + lorem; 4
     cards (blog1–4.jpg): meta links (calendar 13th Dec, eye 15, comments 04) + h4 "Portable Fashion for women" (repeated — make 4 distinct
     barbershop-ish titles) + excerpt.
  10. `footer-area section-gap` (bg #000000): 3 widgets — "About Me" h3 +
      paragraph; "Newsletter" h3 + "Stay updated with our latest trends" +
      email input ("Enter email address") + gold sub-btn; "Follow Me" h3 +
      "Let us be social" + social icons (Facebook, Twitter, Dribbble,
      Behance). Copyright bar → repo-standard credit.
- **Design tokens:**
  - Brand gradient: `linear-gradient(to right, #ba9236 0%, #fdc136 51%,
#ba9236 100%)` (primary-btn, active price accents, video play button,
    gallery/testimonial overlays).
  - Dark gold #bb9236 (service hover label, catalogue tab text/underline).
  - Black #000000 footer; #eaeaea hero base; #f9f9f9 price cards; #777777
    body text; white sections; #f9f9ff alt light bg.
  - Fonts: Roboto (body/nav/price), Playfair Display (serif headings).
  - Buttons: uppercase, gold gradient, white text, pill/rounded.
  - Spacing: section-gap 120px; section-gap-top 120px; hero padding
    172px 20px 100px.

## Implementation tasks (for the implementer stream)

- [ ] Scaffold `apps/tonsor` (copy simplest existing app; package
      `@free-react-templates/tonsor`), wire into workspace + lockfile.
- [ ] Spec tests (red) per `openspec/specs/template-tonsor/spec.md`
      requirements: header, hero, about, services, catalogue, team,
      testimonials, pricing, blog, footer, composition.
- [ ] Implement (green) with 100% coverage: - Header: white sticky, text logo, 8 flattened nav links, mobile menu. - Hero: darkened picsum photo (or 3-slide crossfade slider), serif
      headline, play button (lucide Play) + "Watch Intro Video". - About: split photo collage + serif heading + gold "Learn More". - Services: 4 photo cards, dark bottom label → gold on hover. - Catalogue: bg-photo band + floating white card, 4 lucide tabs,
      "View Gallery…". - Team: 3 photo/name/role cards. - Testimonials: dark carousel, 5 gold stars, thumbnail strip with
      gold active overlay. - Pricing: 3 cards, Premium active (black+gold), 5-item lists,
      "Order Now". - Blog: 4 dark cards with meta/title/excerpt. - Footer: black, About Me / Newsletter / Follow Me + copyright.
- [ ] Images: `https://picsum.photos/seed/tonsor-<n>/<w>/<h>` for every
      photo (hero x3, about x2, service x4, team x3, testimonial thumbs
      x4, blog x4).
- [ ] Fonts: Roboto + Playfair Display via `<link>` in `index.html`.
- [ ] Icons: lucide-react (Play, Star, Calendar, Eye, MessageSquare,
      social brand icons per repo convention).
- [ ] Verify: `npm run verify:app -- tonsor` (typecheck + lint + 100%
      coverage + build); run full `npm run gate` once before PR.
- [ ] PR: `feat: tonsor — barbershop template (ColorLib Barcut)`, squash
      merge immediately; then `[x]` + surge URL in TEMPLATES.md +
      `npm run readme:status`.
