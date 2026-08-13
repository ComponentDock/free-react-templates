# Beanery (ColorLib Decoffee) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-beanery`. Source: ColorLib "Decoffee" — boutique coffee
> shop / cafe template (https://colorlib.com/wp/template/decoffee/).
> Preview: https://preview.colorlib.com/theme/decoffee/ (HTTP 200; ~34 KB
> HTML, `assets/css/style.css` ~64 KB parsed).

## Design notes (replication findings)

- **Original:** ColorLib "Decoffee" — coffee shop website (Bootstrap 5 +
  slick + owl-carousel + slicknav + animate + magnific-popup +
  nice-select). Screenshot `decoffee-colorlib-template.jpg` (1200×946)
  viewed in browser: split layout — dark navy sidebar left (logo "De
  Coffee / EST. 1985", vertical links, outlined "Order Online" button,
  phone + address, socials) + outdoor-patio hero photo right with serif
  headline "Handmade 'Cookies' and Coffee Delights" (quoted "Cookies" in
  terracotta) + solid "OUR MENU" button. Cream about/footer sections.
- **Visual design:** warm artisanal boutique-cafe brand — copper
  `#C46B48` primary, deep navy `#202738`, warm cream `#F6F1EA`, pale
  lavender `#f9f9ff`; serif Shippori Mincho headlines (hero h1 69px 600;
  section h2 44px 600) over Chivo sans body (menu rows 17px, nav 14px
  uppercase, footer h4 20px). Buttons square (radius 0): solid copper
  `.btn_1` (white uppercase 15px, padding 14px 24px, hero variant 21px
  51px; hover → outline) and outline `.btn_01` (1px copper border,
  transparent, 16px 500; hover → solid copper).
- **Signature motifs to preserve:**
  - SPLIT LAYOUT: fixed dark `#202738` left sidebar (300px) with logo,
    centered uppercase links `#C3D4E4`, outlined "Order Online" button,
    phone/address, Facebook/Instagram/LinkedIn icons. Visible ≥1600px;
    below 1600px slides off-canvas (`translateX(-100%)`) behind a
    hamburger (`div.off-canvas-menu`, 3 lines) with a close button.
  - Hero: 900px photo slide with `hero-overly::before` dark overlay;
    headline split `Handmade <span>"Cookies"</span> and Coffee Delights`
    — span in copper `#C46B48`.
  - About: cream `#F6F1EA` bg, serif h2 + 3 hours blocks (Hours/Dinner/
    Lunch) + signature image + decorative line-art `about-shape` +
    full-width `section-full.jpg` below.
  - Menu: centered "Our Menu" + 3 columns (Coffee / Drinks / Fast Food —
    `small-tittle` h4 24px 700 copper), 5 items each: `menu-tittle` h4
    (17px Chivo `#636363`) with dotted leaders + `span` price 18px 700
    copper, `menu p` 16px 300; decorative `menu-shape` image.
  - Services: background-image band (data-background `section-bg1.jpg`),
    4 centered cards = svg icon + white 18px 300 text.
  - Gallery: `margin-top:-295px` pulls it UP over the services band;
    staggered cols (col-lg-6 offset / col-lg-5 / col-lg-5 offset /
    col-lg-6), 4 images.
  - Testimonials: "Love from Customers" slick carousel (2 slides), quote
    icon + quote + founder portrait + name (14px 600 copper) + role;
    35px circular slick arrows.
  - Instagram band: `padding-left:300px` (sits right of sidebar),
    owl-carousel of 5 square photos + `insta-btn` (@handle, 2px copper
    border, white bg, Shippori Mincho).
  - Footer: cream `#F6F1EA`; Contact Us col (phone + address), brand col
    (logo + blurb + circular `#202738` social icons) with side borders
    rgba(125,96,84,0.2), Navigation col (About Us/Menu/Gallery/Contact),
    bottom bar `p` 14px `#928888` → Component Dock credit.
- **Structure (1:1, section order, home page):**
  1. Sidebar header (fixed left, off-canvas <1600px): logo + Home /
     About Us / Menu / Gallery / Blog (dropdown: Blog, Blog Details,
     Elements) / Contact us + "Order Online" + phone "+10 (88) 237 3782"
     - address "88/A, Green lane, Monaka CA 92032" + socials.
  2. Hero: 900px photo, overlay, h1 "Handmade \"Cookies\" and Coffee
     Delights" (copper span), p 20px 300, "Our Menu" button (21px 51px).
  3. About (cream): serif headline + p + signature + 3 hours blocks +
     line-art shape + full-width image.
  4. Our Menu: 3 columns × 5 items with dotted leaders + ($5)-style
     prices (copper) + descriptions.
  5. Services (bg image): 4 icon cards, white text.
  6. Gallery: 4 staggered photos overlapping services.
  7. Testimonials: "Love from Customers" carousel (quote + founder).
  8. Instagram band: 5 photos + @handle outline button.
  9. Footer (cream): Contact Us / brand+socials / Navigation / copyright
     bar.

## Implementation tasks

- [ ] Scaffold `apps/beanery` (copy simplest existing app, rename package
      to `@free-react-templates/beanery`, `public/CNAME` =
      `beanery.free.componentdock.com`, homepage
      `https://beanery.free.componentdock.com`); `npm install` at root
      to register the workspace in package-lock.json.
- [ ] `index.html`: title "Beanery — Decoffee Template", Google Fonts
      `<link>` Chivo (300;400;700;900) + Shippori Mincho (400;500;600;
      700;800).
- [ ] `src/index.css`: `@theme` tokens — `--color-copper: #C46B48`
      (brand), `--color-amber: #D6A04C` (secondary accent), `--color-navy:
    #202738` (dark), `--color-link: #C3D4E4` (sidebar links),
      `--color-cream: #F6F1EA` (about + footer bg), `--color-soft:
    #f9f9ff`, body text `#636363`; fonts Chivo / Shippori Mincho.
- [ ] `src/components/Sidebar.tsx`: fixed left 300px `#202738` sidebar —
      logo (Coffee lucide icon + wordmark + "EST. 1985" tagline), 6
      links (uppercase 14px `#C3D4E4`, Blog has dropdown), outlined
      "Order Online" button, phone + address (build `tel:` href at
      runtime from a spaced display string, never a literal), 3 brand
      social icons (inline SVG — lucide-react has NO brand icons).
      Desktop ≥1600px visible; else off-canvas drawer + hamburger/close.
- [ ] `src/components/Hero.tsx`: 900px bg photo (picsum seed — screen
      cafe/patio candidates per seed-screening method) + dark overlay +
      h1 "Handmade \"Cookies\" and Coffee Delights" (copper span) +
      subtext + solid copper "Our Menu" button (large padding).
- [ ] `src/components/About.tsx`: cream bg, serif headline + paragraph +
      signature line + 3 hours blocks (Hours / Dinner / Lunch, distinct
      times) + decorative line-art + full-width image below.
- [ ] `src/components/Menu.tsx`: centered "Our Menu" + 3 columns (Coffee
      / Drinks / Fast Food, copper 24px 700 headers) × 5 items each:
      name + dotted leader + copper price + description (15 distinct
      coffee-shop items).
- [ ] `src/components/Services.tsx`: bg-image band (picsum seed) + 4
      centered icon cards with white blurbs.
- [ ] `src/components/Gallery.tsx`: 4 staggered cafe photos (2+2,
      negative margin overlap over services).
- [ ] `src/components/Testimonials.tsx`: "Love from Customers" carousel
      (2-3 quotes, portrait, copper name, role) with circular arrow
      controls.
- [ ] `src/components/InstagramBand.tsx`: strip offset right (padding-
      left ~300px on wide screens), 5 square photos + "@handle" outline
      button.
- [ ] `src/components/Footer.tsx`: cream bg, Contact Us col (phone +
      address), brand col (logo + blurb + circular social icons, side
      borders), Navigation col (About Us / Menu / Gallery / Contact),
      bottom bar with Component Dock link
      (https://www.componentdock.com/).
- [ ] `src/App.tsx` composition + `src/main.tsx` entry; MemoryStorage
      polyfill in `src/test/setup.ts` (copy from apps/cura — jsdom 30
      has no localStorage).
- [ ] Tests first (TDD) mirroring spec scenarios; 100% coverage; run
      `bash scripts/verify-app.sh beanery`.
- [ ] PR description: source (ColorLib Decoffee), preview URL, tokens
      (copper `#C46B48`, amber `#D6A04C`, navy `#202738`, cream
      `#F6F1EA`, Chivo + Shippori Mincho, square buttons, dotted-leader
      menu prices, split sidebar layout), what differs (wordmark,
      picsum placeholders, Component Dock credit, paraphrase, distinct
      menu/hours/testimonial content, no asset copying).
- [ ] Post-merge bookkeeping: mark BOTH TEMPLATES.md Decoffee rows (line
      571 and dup row ~1778) `[x]` with the live URL,
      `npm run readme:status`.

## Pitfalls / notes

- The sidebar is the SAME element in both modes: fixed visible ≥1600px,
  off-canvas (`translateX(-100%)`) below — implement ONE Sidebar
  component with a responsive class/state toggle + hamburger (3-line)
  and close controls; don't build two separate navigations.
- `.gallery-area{margin-top:-295px}` — the gallery intentionally
  overlaps the bottom of the services band; replicate with a negative
  margin so the section rhythm looks right.
- `.location-house{padding-left:300px}` — instagram strip is offset to
  clear the fixed sidebar; on mobile this padding drops (sidebar gone).
- The source repeats the same dish names/`($5)`/times/blurbs
  everywhere — recreate with 15 distinct menu items, distinct hours, 4
  distinct service blurbs, 2-3 distinct testimonial people (never
  "Poppa Cherry / Designer at Colorlib" verbatim).
- lucide-react has no brand icons — Facebook/Instagram/LinkedIn must be
  inline SVGs; probe every lucide export with the typeof check before
  importing.
- No `[~]`/`[x]` markers were set by the prep stream — implementer
  claims via the usual `[~]` push on `feat/template-beanery`.
- No `colorlib` string anywhere in `apps/beanery/*` — provenance lives
  only here, TEMPLATES.md, and the PR.
- Never write a literal `tel:+<digits>` URI in source (secret-scan
  masker rewrites it); compute from a spaced display string at runtime
  or render as plain text.
- Picsum seeds for cafe/patio/food photos need subject screening (see
  skill: verified people IDs 1027/64/823/996) — pick seeds that provably
  render cafe-appropriate scenes and pin them in spec + tests + docs
  together.
