# Landmark (ColorLib Konato) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-landmark`.

## Design notes (replication findings)

- **Original:** ColorLib "Konato" — bright, professional REAL ESTATE
  one-pager (source: https://colorlib.com/wp/template/konato/, Bootstrap 5
  category, `<title>Real Estate</title>`). TEMPLATES.md has TWO copies of
  this item (lines 598, 2598 — mark ALL when done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/konato/
  (HTTP 200, ~42 KB HTML; `assets/css/style.css` ~86 KB parsed for tokens).
  Stack is jQuery + Bootstrap 5 + Owl Carousel (hero) + Slick (property +
  agent carousels) + NiceSelect — recreate all interactivity client-side
  in React.
- **Screenshot:** `konato-free-template.jpg` (1200×946, viewed in browser)
  — dark blue header bar with "Konato" logo (location-pin icon) + centered
  nav + "Call Us" + "Sign In"; white search bar row beneath (keyword field
  - dropdowns + dark blue Search button); hero: scenic waterfront property
    photo with dark overlay, white text left, blue "View Property" button;
    below: white "Display Latest & Featured Properties" with 3–4 property
    cards (photo, blue price, bold type, gray blurb) + carousel arrows.
    Live preview ALSO browser-verified via a11y snapshot (header nav +
    search form, hero caption, both property carousels, services band,
    property-type band, agents carousel, newsletter form, footer columns).
- **New name:** Landmark (a real-estate landmark — fits the property
  theme). Single lowercase word, no collision with `apps/` or existing
  spec folders. NOT "konato" — never reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** white/`#F2F4F8`
  canvas, SKY BLUE `#00AEFF` brand (buttons `.btn`, `.submit-btn2`,
  prices, links, nav hover, preloader ring) + dark navy `#004274`
  (header-top bar, newsletter panel bg, button hover sweep). Headings
  "Jost" 500 on `#192839`; body "Jost" 300 on `#545454`. Buttons 4px
  radius (`#00AEFF` → hover sweep `#004274`); Search pill 35px; search
  inputs 1px `#BECCD6` borders, 4px radius. Services band solid `#00A0EB`.
  Property-type band `#F2F4F8`. Footer bottom bar `#F2F6F9`.

## Structure (1:1, section order — from the live DOM)

1. **Preloader** (`#preloader-active`) — `#f7f7f7` layer + spinner ring
   (`border-top-color:#00AEFF`); decorative, brief client-side fade or
   omit.
2. **Header** (`div.header-area > .main-header`):
   - `header-top` (bg `#004274`): logo "Landmark" (pin icon) left; nav
     Home, Property, About, Blog (submenu: Blog Details, Elements),
     Contact (white 18px, hover `#00AEFF` + 3px blue underline sweep);
     right: "Call Us: +10 (78) 356 3276" + "Sign In" button.
   - `header-bottom` (white): `form.search-box` — keyword input
     ("Enter Keyword.." + search icon), 3 selects (Rent, Bed, Bath × 4
     options), blue Search button (pill 35px). Inputs: border `#BECCD6`
     1px, radius 4px, height 45px, text `#192839`.
3. **Hero slider** (`section.slider-area` > `.slider-active` owl) —
   full-width photo + dark navy gradient overlay (`.hero-overly`:
   `rgba(25,40,57,0.6)→rgba(29,39,59,0.1)`); `hero-caption`: eyebrow
   "3 Bed - 2 Bath - 2200 Sq Ft" (white 18px), h1 "Light House NY"
   (white 60px 500), lorem p, `span.price` "$ 3,272" (white 40px),
   `a.btn.hero-btn` "View Property" (blue, padding 25px 30px, radius 4).
4. **Display Latest & Featured Properties** (`section.latest-items
section-padding`) — centered section-tittle (h2 38px 500 `#192839` +
   p 18px 300 `#656565`); `.items-active` slick carousel (prev/next
   arrows) of 4 `single-cat` property cards: photo, `cap-top` (blue price
   "$ 6,728" + type h5 "Appartment"/"Office"/"Classic home" + blurb),
   `pricing` row (bed "2 Bedroom" · bath "2 Bedroom" · building
   "1050 Sq Ft" — labels `#192839` 14px).
5. **How we help people?** (`section.services-area.section-img-bg2`) —
   solid `#00A0EB` + bg image `section-bg1.jpg`; white `section-tittle2`
   h2 "How we help people?"; 3 icon cards: "Sell home or office" /
   "Rent home or office" / "Find next" (white h5 + p).
6. **Properties for Sale** (`section.latest-items section-padding`) —
   h2 "Properties for Sale" + same 4-card property carousel (VARY
   listings from section 4 — demo repeats the same cards).
7. **Explore by Property Type** (`section.categories-area.section-bg`,
   bg `#F2F4F8`) — left col: h2 "Explore<br> by Property Type" + p +
   `a.btn.mt-30` "View All Property"; right: 4 category cards (icon +
   h5): "Home & Appartment" / "Vila" / "Studio" / "Office".
8. **Our Agents** (`div.team-area.section-padding`) — section-tittle
   "Our Agents"; `.team-active` slick carousel (arrows) of 4
   `single-team` cards: photo, social icons (facebook-f, twitter, globe
   → inline SVG), name h3, p "Real Estate Agent". VARY 4 names (demo:
   Buster Hyman ×2 loop dup, Holly Graham, Nick R. Bocker, Jimmy Changa).
9. **Subscribe Newsletter** (`div.visit-tailor-area`) — left
   `tailor-details` on **`#004274` navy** (the LATER live stylesheet rule
   wins over `#F2F4F8` — verified via computed style): h2 "Subscribe
   Newsletter" white, p white, `subscribe-now` input ("Enter your email",
   transparent bg, white text, bottom border `#BECCD6` 2px) +
   `button.submit-btn2` "Subscribe" (`#00AEFF`, radius 4, padding
   10px 30px); right `tailor-offers` (cover photo `subscribe-img.jpg`
   equiv, height ~414px, ~50% width).
10. **Footer** (`footer` > `.footer-area.footer-padding`) — brand logo +
    pera + 4 social icons (Instagram/Facebook/Twitter/Linkedin inline
    SVG); 4 columns `footer-tittle`: "Navigation" (Home, About, Services,
    Blog, Contact), "Services" + "Support" (Drone Mapping, Real State,
    Commercial, Construction), "Contact Us" (Drone Mapping,
    contact@carwash.com, 10 (87) 738-3940 — display strings);
    `footer-bottom-area` (bg `#F2F6F9`) copyright bar + **Component Dock
    link** (https://www.componentdock.com/) replacing Colorlib credit.

## Todo (implementation order)

- [ ] `npm run spec:validate` passes (spec: `openspec/specs/template-landmark/`)
- [ ] Scaffold `apps/landmark` (copy simplest existing app; package
      `@free-react-templates/landmark`; `public/CNAME` =
      `landmark.free.componentdock.com`; homepage
      `https://landmark.free.componentdock.com`); run `npm install` at
      root and verify lockfile registration
- [ ] `src/index.css`: `@theme` tokens — brand `#00AEFF`, navy `#004274`,
      ink `#192839`, body-text `#545454`, muted `#5E5E5E`, light `#F2F4F8`,
      line `#BECCD6`, blue-bg `#00A0EB`, footer-bg `#F2F6F9`; Jost Google
      Fonts `<link>` in index.html
- [ ] `Header` — navy top bar (logo + nav + Call Us + Sign In) + white
      search row (keyword input + Rent/Bed/Bath selects + Search pill)
- [ ] `HeroSlider` — full-width photo slider + navy overlay (eyebrow, h1,
      lorem, price, View Property button), client-side carousel
- [ ] `PropertyCarousel` (reused ×2) — featured ("Display Latest &
      Featured Properties") + for-sale ("Properties for Sale") 4-card
      carousels with arrows (photo, blue price, type, blurb, pricing row
      bed/bath/building)
- [ ] `Services` — solid-blue band, 3 icon cards (Sell home or office /
      Rent home or office / Find next)
- [ ] `PropertyTypes` — `#F2F4F8` band, heading + View All Property +
      4 category icon cards (Home & Appartment / Vila / Studio / Office)
- [ ] `Agents` — carousel of 4 photo cards + social icons + name + role
- [ ] `Newsletter` — navy panel (heading, p, email input, Subscribe →
      success state) + photo panel
- [ ] `Footer` — brand + social + 4 columns + copyright bar + Component
      Dock link
- [ ] Tests per section (100% coverage) → `scripts/verify-app.sh landmark`
- [ ] PR `feat/template-landmark` → merge immediately; TEMPLATES.md rows
      598 + 2598 → `[x]` + surge URL + readme:status
