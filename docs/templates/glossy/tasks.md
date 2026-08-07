# Glossy (ColorLib "Eden") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-glossy` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Eden" — Megazine HTML Template
  (source: https://colorlib.com/wp/template/eden/). Listed in
  TEMPLATES.md (line 255).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/eden/`. DOM fetched
  (`/tmp/eden-preview.html`, 41.5 KB) + stylesheets
  (`/tmp/eden-style.css` 76.4 KB, `css/responsive.css` 9.6 KB) +
  screenshot (`eden-free-template.jpg`, 1200×946, viewed in browser). All
  references verified live.
- **Visual design:** clean modern magazine/blog on white. Thin top utility
  bar: social icons left, centered black-serif logo ("Eden"), search icon +
  About + Subscribe right. Transparent centered navbar below (Home active in
  coral). Hero = asymmetric featured grid of bright high-key photography on
  bold color backdrops (yellow vintage camera, pink-purple gradient,
  blue, purple makeup) with white headline overlays/text cards; then
  image+text post rows with coral category tags ("Fours & Travel"). Palette:
  white + black text + coral `#ff7a7f`; vivid image colors carry the rest.
- **Structure (1:1 from the preview DOM):**
  1. Header top `section.header-top` (line-height 100px, border-bottom
     1px `#e8edf1`): `ul.header_social` (ti-facebook, ti-twitter,
     ti-instagram, ti-skype, ti-vimeo) | centered `div.logo-wrapper >
a.logo > img` | `div.right-button` (search `fas fa-search`, "About",
     "Subscribe").
  2. Navbar `nav.navbar.navbar-expand-lg.navbar-light` (transparent, menu
     `ul.menu_nav.ml-auto.mr-auto`): Home (active), Categories, Archive,
     Blog (dropdown → Blog, Blog Details), Latest news, Contact us; hover
     and active links `#ff7a7f`.
  3. Fullwidth block `section.fullwidth-block.area-padding-bottom`
     (container-fluid): `col-xl-5` `div.single-blog` (thumb img +
     `short_details`: meta-top "Tours & Travel", `a.d-block > h4` title,
     meta-bottom "March 12, 2019" + "By Alen Mark") · `col-xl-4`
     `single-blog.style_two` (thumb + `short_details.text-center`) ·
     `col-xl-3` two stacked `single-blog.style-three` ("Lifestyle").
  4. Editor Picks `section.editors_pick.area-padding`: `div.area-heading`
     (h3 "Editor Picks" 36px 600 `#33353b` + 70×2px ::after underline; p
     "Abundantly creeping saw forth spirit can made appear fourth us.") →
     `col-lg-5 col-xl-6` featured `single-blog` (short_details.pad_25) +
     `col-lg-7 col-xl-6` two `single-blog.row.no-gutters.style-four`
     (col-sm-7 details + col-sm-5 thumb); ends with full-width
     `div.addvertise > a > img` (margin-top 100px).
  5. Travel News `div.video-area.background_one.area-padding` (bg
     `#fbf1f2`): area-heading h3 "Travel News" + same subtitle; `col-lg-7`
     `single-blog.video-style` — thumb img + `div.play_btn > a.play-video`
     (70×70px circle, 2px white border, radius 50%, absolute center,
     ti-control-play) + short_details: meta-top ("shoes" / "March 15,
     2019"), h4, meta-bottom (ti-comment "05 comment", ti-heart "0 like",
     ti-eye "1k view") — plus `col-lg-5` more style-five cards.
  6. three-block `div.three-block.area-padding`: area-heading h3 "Fashion
     News" + subtitle; 3 × `col-lg-4` `single-blog.style-five`.
  7. Latest news `div.latest-news.area-padding-bottom`: area-heading h3
     "Fashion News" + subtitle; 2-col `col-lg-6` style-five grid.
  8. Footer `footer.footer-area` (padding-top 115px): 4 × `col-lg-3
col-sm-6` `single-footer-widget` — "About Us" (blurb + footer-logo
     img), "Contact Info" (footer-address: Address/Phone/Email), "Important
     Link" (ul: WHMCS-bridge, Search Domain, My Account, Shopping Cart, Our
     Shop), "Newsletter" (blurb + form-wrap form: `input.form-control`
     email "Your Email Address" (height 50px, border `#f0e9ff`, radius 0) +
     `button.btn.click-btn` (radius 24px, padding 6px 21px 4px 14px, bg
     `#ff7a7f`, fa-telegram-plane)). Bottom `div.footer-bottom`
     (border-top `#e8edf1`, mt 51px, padding 20px): copyright "© <year> All
     rights reserved | This template is made with <heart> by Colorlib"
     (link `#ff7a7f`) + `div.footer-social` (ti-facebook, ti-twitter-alt,
     ti-dribbble, ti-linkedin).
- **Design tokens (extracted from style.css):**
  - Brand accent `#ff7a7f` (coral/pink, 79 usages): meta-top category
    links (11px uppercase 600 Open Sans), nav active/hover, title hover,
    social hover, `.main_btn` bg, footer `.click-btn` bg, footer-bottom
    link, area-heading underline (70×2px ::after).
  - Headings `#33353b` (`.area-heading h3` 36px 600 Josefin Sans);
    `.single-blog h4` 27px 600 lh36; `short_details h4` 20px.
  - Body `#797979` Open Sans 14px/27px; footer-bottom text `#777777`.
  - Section bg `#fbf1f2` (background_one video area); white elsewhere;
    newsletter input border `#f0e9ff`; header/footer borders `#e8edf1`.
  - Fonts: **Josefin Sans** (h1–h6, bold) + **Open Sans** (body/UI) →
    Google Fonts `<link>`.
  - Buttons: `.main_btn` (bg `#ff7a7f`, padding 0 18px, white; hover white
    bg + 1px coral border); `.click-btn` (radius 24px, bg coral, white);
    `.play_btn a` (70px circle, 2px white border, radius 50%, centered);
    `.button` / `.link-border` (outline coral variants).
  - Cards: `single-blog` variants — `style_two` centered, `style-three`
    stacked small, `style-four` row no-gutters image-left, `style-five`
    grid card, `video-style` play overlay.
- **Recreation name:** Glossy (NEW name, differs from ColorLib "Eden"). App
  folder `apps/glossy`, package `@free-react-templates/glossy`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/glossy-<n>/<w>/<h>`: featured 760×520, video thumb
  800×450, cards 350×240); logo → Josefin Sans text wordmark; lucide-react
  icons (Search, Play, Send, Heart, MessageCircle, Eye, Facebook, Twitter,
  Instagram, Dribbble, Linkedin); Josefin Sans + Open Sans via Google
  Fonts; video play → lightbox or focusable a11y button; ad banner →
  placeholder; no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-glossy/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/glossy` (copy a section-rich landing app pattern,
      e.g. Chronicle/Rivulet; rename package to
      `@free-react-templates/glossy`; run `npm install` at root so
      `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: HeaderTop (socials +
      centered logo + search/About/Subscribe), Navbar (centered menu, Blog
      dropdown, dark toggle), FeaturedGrid (3-part asymmetric: large,
      centered style_two, stacked style-three), EditorsPicks (area-heading + featured + style-four rows + ad banner), TravelNews (video-area
      `#fbf1f2` bg, play circle, counts), FashionGrid (3-col), LatestNews
      (2-col), Footer (4 widgets + newsletter form + bottom bar).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh glossy` in
      FAST_MODE).
- [ ] Push `feat/template-glossy`, open PR (source template ColorLib
      "Eden", preview URL reachable, design tokens, what differs: name,
      placeholder images, text logo), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-glossy.surge.sh) + homepage; run
      `npm run readme:status`; push.
