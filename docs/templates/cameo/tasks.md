# Cameo (ColorLib Look) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cameo`.

## Design notes (replication findings)

- **Original:** ColorLib "Look" — dark, high-fashion MODEL AGENCY one-pager
  (source: https://colorlib.com/wp/template/look/). TEMPLATES.md has THREE
  copies of this item (lines 443, 1085, 1716 — mark ALL when done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/look/
  (HTTP 200, ~49 KB HTML, `<title>Look - Free Bootstrap 4 Template by
Colorlib</title>`). Main stylesheet `css/style.css` (~73 KB) parsed for
  tokens. Stack is jQuery + Bootstrap 4 + Owl Carousel + AOS + scrollax —
  recreate all interactivity client-side in React.
- **Screenshot:** `look-free-template.jpg` (1200×946, viewed in browser) —
  dark moody hero with model portrait, "LOOK" thin logo + "MODEL AGENCY"
  under it, "SUPER MODELS" hot pink + "SAMANTHA LEWIS" white bold uppercase,
  stats row, solid pink "Read more" + white-outline "View Gallery",
  hamburger top-right, vertical 1-4 slide indicator at right edge. Below:
  split block — smiling model photo left, white text right with "LOOK A
  MODEL AGENCY" heading + pink bullet list. Live preview ALSO
  browser-verified (dark hero slider, pink eyebrow, pink buttons, hamburger
  menu, model stats).
- **New name:** Cameo (a model's cameo appearance — fits the fashion/model
  theme). Single lowercase word, no collision with `apps/` or existing spec
  folders. NOT "look" — never reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** dark canvas with HOT
  PINK `#f62a66` brand (links, buttons, hero eyebrow, carousel dots, active
  nav link). Headings "Josefin Sans" 400 on `#000`; body "Rubik" 300 on
  `#666666` 16px/1.8. BUTTONS ARE SQUARE (`border-radius: 0px`,
  `box-shadow: none`). Footer bg `#252525`. bg-light cells `#f8f9fa`.
  Inactive dots `#999999`. Secondary accent mint `#79efb4` (Bootstrap var,
  minor).

## Structure (1:1, section order — from the live DOM)

1. **Overlay nav** (`nav#colorlib-main-nav`) — hamburger-only fullscreen
   overlay (toggle top-right, fixed): brand "Cameo" + "Model Agency"
   tagline + model photo panel; 5 numbered links: 01 Home, 02 About, 03
   Models, 04 Blog, 05 Contact (anchors); ACTIVE link text + underline bar
   `#f62a66`; accessible toggle (aria-expanded, aria-label); close on
   link click / toggle.
2. **Hero slider** (`section.home-slider.owl-carousel`) — 4 slides
   (min-height 750px, dark bg photos + overlay): hot-pink uppercase eyebrow
   ("Top Model's" / "Model Agency" / "Super Model's" / "Photo Model's"),
   white uppercase model name (Kate Henderson, Samantha Lewis, Jessica Alba,
   Michael Buff), stats row (Height/Bust/Waist/Hips/Shoe/Eyes/Hair — vary
   per model), "Read more" (solid pink) + "View Gallery" (pink outline)
   square buttons; dots: inactive `#999999`, active `#f62a66`.
3. **About block** (`section.ftco-section-2`) — photo left (col-md-6), text
   right: h3 "Look A Model Agency" → "Cameo — A Model Agency", lorem with
   strong "creative"/"success", 3 checkmark bullets (pink CheckCircle2),
   then row 2: photo block with play button + "Watch our video promo"
   (decorative).
4. **Top models** (`section.ftco-section-2`) — first cell `bg-light`
   (col-md-6): "Our Tops Model's" + intro p; 8 `model-entry` cards
   (col-md-3, 4-up): photo + name + mini stats (Height/Bust/Waist/Hips/
   Shoe) — VARY 8 names/stats; final `bg-light` "View more" cell.
5. **Testimonials** (`section.testimony-section.img`) — dark bg image +
   overlay, centered "Clients Says" + lorem; carousel of 4 (quote + name +
   role) — VARY names/roles; dots pink-active.
6. **Services** (`section.ftco-section-2`) — "Our services"; 4 rows (icon
   box + title + blurb): Fashion Shows (Award), Corporate Events
   (Megaphone), Commercial Photo Shots (ShoppingBag), Exhibitions/Trade
   Shows (Camera).
7. **Blog** (`section.ftco-section`) — "Recent Blog" + lorem; 3 cards
   (image + meta "August 12, 2018 / Admin" + title) — VARY titles/dates;
   "View more" link.
8. **Quote strip** (`section.ftco-quote`) — shadowed box on bg image:
   "Wanna be a Model?" + "Call us now to know how!" link → opens modal.
9. **Request a Quote modal** — "Request a Quote" title; form: Full Name,
   Email, Message + submit → success state (no backend).
10. **Footer** (`footer.ftco-footer`, bg `#252525`) — widget 1: brand
    "Cameo" + pera + social (Twitter/Facebook/Instagram inline SVG);
    widget 2: "Recent Blog" + 2 block-21 mini-posts (thumb + title + meta
    "July 12, 2018 / Admin / 19" — vary); widget 3: "Site Links" (Home,
    About, Model, Services, Blog); widget 4: "Have a Questions?" (address ·
    phone · email — display strings); copyright bar + Component Dock link
    (https://www.componentdock.com/).

## Todo (implementation order)

- [ ] `npm run spec:validate` passes (spec: `openspec/specs/template-cameo/`)
- [ ] Scaffold `apps/cameo` (copy simplest existing app; package
      `@free-react-templates/cameo`; `public/CNAME` =
      `cameo.free.componentdock.com`; homepage
      `https://cameo.free.componentdock.com`); run `npm install` at root
      and verify lockfile registration
- [ ] `src/index.css`: `@theme` tokens — brand `#f62a66`, accent `#79efb4`,
      ink `#000000`, body-text `#666666`, muted `#999999`, paper `#FFFFFF`,
      light `#f8f9fa`, dark `#252525`; Josefin Sans + Rubik Google Fonts
      `<link>` in index.html
- [ ] `OverlayNav` — hamburger toggle (fixed top-right, aria-expanded),
      fullscreen overlay, brand + photo panel, 5 numbered links, active
      pink highlight, close on click
- [ ] `HeroSlider` — 4 slides (dark bg + overlay, eyebrow, name, stats row,
      Read more / View Gallery square buttons), dots navigation, active dot
      pink
- [ ] `About` — photo + heading + lorem + checkmark list + video-promo
      block (decorative play button + "Watch our video promo")
- [ ] `TopModels` — bg-light intro cell + 8 model cards + "View more" cell
      (vary names/stats)
- [ ] `Testimonials` — dark bg + overlay + carousel of 4 (vary
      names/roles), dot navigation
- [ ] `Services` — 4 icon + title + blurb rows
- [ ] `Blog` — 3 post cards (vary titles/dates) + "View more"
- [ ] `QuoteStrip` — "Wanna be a Model?" + call link opening the modal
- [ ] `RequestQuoteModal` — form (Full Name, Email, Message, submit →
      success state)
- [ ] `Footer` — 4 widgets + copyright bar + Component Dock link + social
      icons
- [ ] Tests per section (100% coverage) → `scripts/verify-app.sh cameo`
- [ ] PR `feat/template-cameo` → merge immediately; TEMPLATES.md rows 443 +
      1085 + 1716 → `[x]` + surge URL + readme:status
