# Belle (ColorLib Diva) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-belle` by an implementer stream.

## Design notes

- **Original:** ColorLib "Diva" — free beauty salon website template.
  Source: https://colorlib.com/wp/template/diva/.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/diva/`
  (HTTP 200, 14.8KB) + stylesheet `css/style.css` (26.8KB, CRLF line
  endings). Full rendered DOM extracted; structure below is from the DOM +
  CSS tokens. Screenshot `diva-free-template.jpg` (1200×946) confirms:
  black nav bar, white script logo "Diva" + small sans "Beauty Salon"
  subtitle, nav links (Home active w/ pink bg), phone in pink-outlined
  box, solid pink "Book an Appointment" button; hero = split screen (dark
  left with "Be bold. Be beautiful." white uppercase headline + pink dash
  accent + lorem + pink "See Offers" button + 01/02 indicators; right =
  makeup portrait photo); high-contrast black / hot pink / white, chic
  luxurious aesthetic.
- **Structure observed (1:1):**
  1. Header (black): logo img + nav (Home active pink / About Us /
     Services / News / Contact) + phone `+345 322 445 7789` + "Book an
     Appointment" `.site-btn`.
  2. `hero-section set-bg` (bg.jpg; padding 121px/190px): `hero-slider
owl-carousel` (border 2px #e22b63, bg #1e1e1e) × 2 slides
     (`hs-preview set-bg` 1.jpg): h2 "Be bold. Be beautiful." (75px,
     line-height .95, uppercase bold geometric sans, pink dash above),
     lorem p, "See Offers" `.site-btn`, indicators 01 (active pink) / 02.
  3. `brands-section` (105px padding): 5 brand logos (`brands/1..5.png`).
  4. `intro-section spad set-bg` (intro-bg.jpg): "Why Choose Us?" (h2
     55–75px, padding-top 50px) + 2 paragraphs + 4 `circle-progress`
     stats: +3500 Happy Clients / 12 New Locations / +175 Great Employees
     / 56K Instagram Followers (`.fact h2` 48px, 900, Futura LT Bold).
  5. `services-section spad set-bg` (service-bg.png over **solid #e22b63**):
     "Our Services" + 6 × `col-lg-4 col-md-6 service text-white`
     (3×2 grid): flaticon 50px + h2 + p — Hair Dressing, Zen Massage,
     Manicure & Pedicure, Make Up, Tanning Bed, Spa Treatments.
  6. `testimonials-section set-bg` (review-bg.jpg; 110px/81px): "Client
     Testimonials" + slider: big quote mark, quote, h4 "Maria Parker" +
     "Regular Client".
  7. `footer-section set-bg` (footer-bg.jpg; dark, padding-top 135px):
     about widget; "Our Services" links (Manicure, Pedicure, Massage,
     Hair Dressing, Spa, Beauty treatments, Wedding Hair, Botox,
     Slimming); "Make an appointment" `fw-contact-form` (Your Name /
     Your E-mail / Service you need / Date datepicker / Your Message
     textarea / Submit `.site-btn`); footer-nav (Home, About us,
     Services, News, Contact); footer-bottom copyright.
- **Design tokens:** Brand **#e22b63** (hot pink) — `.site-btn` bg+border,
  services-section bg, hero-slider 2px border, active nav bg, links.
  Neutrals: black #1e1e1e/#212121/#000 (nav, hero panel, footer, text),
  white #fff, greys #b0b0b0/#7e7e7e/#6d6d6d. Fonts: **'Futura LT' /
  'Futura LT Bold'** (commercial geometric sans — use free stand-in
  **Jost** (closest Futura-like on Google Fonts) or Montserrat; headings
  bold/uppercase; logo = script image → recreate "Belle" in a script font
  e.g. Dancing Script/Great Vibes + "Beauty Salon" small sans).
  `.site-btn`: 16px #fff, padding 12px 30px, min-width 145px, border 2px
  #e22b63, bg #e22b63, rectangular (no radius), transition .3s. h2 base
  36px; hero 75px (line-height .95); intro 55–75px; section-title
  55–74px; stats 48px/900. Spacing `.spad` 110px; hero 121/190; brands
  105; testimonials 110/81; footer-top 135.
- **Recreation decisions:** repo-standard navbar (dark) + script "Belle"
  logo + Home active pink pill + phone + "Book an Appointment" pink btn;
  hero 2-slide carousel with split dark panel + pink border + dash accent
  - 01/02 indicators; brands strip (5 muted logos); Why Choose Us photo
    band + 4 circular-progress stats (pure-CSS circle or svg, no dep);
    services pink band 3×2 (lucide: Scissors, Flower2/Sparkles, Hand,
    Brush/Palette, Sun, Waves); testimonials photo band quote carousel;
    footer dark: about + services links + appointment form (validated,
    success state) + nav + copyright; picsum seeds `belle-N`; Google Fonts
    via `<link>` (Jost + script accent); lucide-react icons.

## Tasks / todo outline

1. Scaffold `apps/belle` (copy simplest existing app; package
   `@free-react-templates/belle`; `npm install` at root to register the
   workspace in package-lock.json; `injectUiSource()` in vite.config.ts).
2. `src/index.css`: `@theme` tokens — brand pink #e22b63, dark #1e1e1e,
   fonts (sans: Jost; display/script accent for logo), stats circle
   utility.
3. `Header.tsx` (dark bar): script "Belle" + "Beauty Salon" subtitle,
   nav (Home active pink pill, About Us, Services, News, Contact), phone,
   "Book an Appointment" button.
4. `HeroSlider.tsx`: 2-slide carousel — "Be bold. Be beautiful." + pink
   dash + lorem + "See Offers" + 01/02 indicators; dark panel w/ pink
   2px border + photo side.
5. `BrandsStrip.tsx`: 5 muted/greyscale logos in a row.
6. `WhyChooseUs.tsx`: photo bg + "Why Choose Us?" + 2 paragraphs + 4
   circular-progress stats (+3500 / 12 / +175 / 56K).
7. `ServicesBand.tsx`: pink #e22b63 band, "Our Services", 6 cards in
   3×2 grid (icon + title + blurb, white text).
8. `Testimonials.tsx`: photo band + "Client Testimonials" + quote
   carousel (Maria Parker — Regular Client).
9. `Footer.tsx` (dark): about widget, "Our Services" link list, "Make an
   appointment" form (name/e-mail/service/date/message, validation +
   success state), footer nav, copyright.
10. `App.tsx` composition (order 1:1), document title "Belle — Beauty
    Salon".
11. Tests per component (scenario-style), 100% coverage; run
    `npm run verify:app -- belle`.
12. Commit `feat: belle — beauty salon template (ColorLib Diva)`, push
    `feat/template-belle`, open + immediately squash-merge PR,
    re-dispatch `Deploy to Surge.sh -f app=belle` if needed, mark `[x]` in
    TEMPLATES.md with surge URL, `npm run readme:status`.
