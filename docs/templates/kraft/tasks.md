# Kraft (ColorLib CardBoard) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-kraft` by an implementer stream.

## Design notes

- **Original:** ColorLib "CardBoard" — free Bootstrap 4 creative agency /
  portfolio website template. Source: https://colorlib.com/wp/template/cardboard/.
  New name: **kraft** (kraft paper — the cardboard material; single word, no
  collision with `ls apps/` or existing spec folders). CardBoard appears in
  TEMPLATES.md at line 356 (Bootstrap section — the claim, first unchecked
  without a prep).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/cardboard/`
  (HTTP 200, ~20KB). Stylesheets: `css/style.css` (~42KB — Bootstrap 4 base
  vars + custom template styles), plus animate.css / owl.carousel /
  jquery.fancybox / ionicons / fontawesome / flaticon / simple-line-icons /
  aos. Fonts: **DM Serif Display** (headings) + **Roboto Mono** (body/UI)
  served via inline Cloudflare cf-fonts `@font-face` — use Google Fonts
  `<link>` in the recreation. Screenshot `cardboard-free-template.jpg`
  (1200×946) confirms: dark full-bleed office-team photo hero, huge white
  serif "We create awesome stuff.", small kicker, circular white play button;
  below, white "Latest Work" section with dark serif title, grey lorem, amber
  "View All Portfolio" link, top of the 2×2 image grid (packaging shot left,
  white bottle shot right).
- **Structure observed (1:1):**
  1. `nav.navbar.navbar-expand-lg.bg-dark` — dark **#343a40** bar; brand
     "CardBoard" left; links Home (active), About, Services (dropdown:
     Branding, Web Design, App Design, Start Up), Projects, Contact; right
     search form (magnifier icon + input placeholder "Search...").
  2. `div.slider-item.overlay` — full-viewport hero (`calc(100vh)`, min 700px,
     cover bg image hero_2.jpg, `:before` overlay rgba(0,0,0,0.3), stellar
     parallax): centered kicker "A website template by Colorlib", `h1` 7rem
     white weight 700 **"We create awesome stuff."**, 60px white circular play
     button (`border-radius: 50%`, ion-ios-play) → fancybox YouTube modal.
  3. `div.section.portfolio-section` — "Latest Work" (`h2.section-title` +
     lorem + amber "View All Portfolio" link) → `container-fluid` 2×2
     `no-gutters` grid of `a.work-thumb` (image `border: 10px solid #fff` +
     centered hover caption `div.work-text` opacity 0→1: white h2 1.5rem
     weight 300 + p rgba(255,255,255,0.5)): Startup Brand/Business, Corporate
     Design/Design, Unpacked Branding/Business, Rebranding Work/Business →
     centered "More Portfolio" `btn-outline-white.px-4.py-3`.
  4. `div.section` — "Who We Are" split: text `col-lg-5.ml-auto.order-2`
     (amber uppercase span "Who We Are", serif h2 "Do Things That Matters.
     Plan. Create. Grow.", 2 lorem paras, "Learn More" `btn-outline-black`);
     image `col-lg-6.order-1` `figure.img-dotted-bg` (dotted pattern :after
     -50px top-left 200×400px) + about_1.jpg + absolute work_1.jpg overlay.
  5. `div.section` — services `col-lg-3` ×4 (`div.service`, fade-up delays
     0–300): 3rem amber simple-line-icons + h3 1.2rem weight 400 + lorem —
     Designing (magnet), Branding Identity (screen-desktop), Mobile
     Application (screen-smartphone), Search Engine (magnifier).
  6. `div.section.bg-light.block-11` — light **#f8f9fa** testimonials:
     "Testimonial" title + owl-carousel of 4 `block-33` cards (max-width
     700px): 60px round avatar (5px white border) + h2 name (Carl Smith /
     Craig Darren / John Smith ×2) + span "Customer Corp." + blockquote.
  7. `div.bg-primary.py-5` — amber **#ffc107** CTA band, centered col-lg-7:
     white h3 "Let's do more together" (weight-normal) + white para + "Get In
     Touch!" `btn-outline-white`.
  8. `footer.site-footer` — **amber #ffc809** footer (black text, padding
     7em 0): "About Craft" (h3 1rem bold ls .1em + para + 4 social fa icons
     p-2), "Contact Info" (Address/Telephone/Email caption rows), "Quick
     Links" (About, Terms of Use, Disclaimers, Contact), empty col; bottom
     bar copyright + repo-standard credit.
  9. `#loader.show.fullscreen` — circular SVG spinner stroke **#ffc107**.
- **Design tokens extracted from `css/style.css`:**
  - Fonts: **"DM Serif Display"** for h1/h2/h3 (weight 900 black; hero h1
    override white 7rem weight 700); **"Roboto Mono"** for body/UI
    (`--font-family-sans-serif` + body default, 1rem/1.5, #212529).
  - Amber **#ffc107**: --primary, bg-primary (CTA band), text-primary ("Who We
    Are" kicker, "View All Portfolio" link), service icons, loader stroke;
    hover **#d39e00**. Footer amber **#ffc809** (black text).
  - Dark **#343a40** navbar; light **#f8f9fa** testimonials; body text
    **#212529**; `body { border-top: 2px solid #dee2e6 }`.
  - Buttons: square (`border-radius: 0`), 2px border, uppercase, bold, 14px,
    padding 10px 20px; outline-white (hover white bg + black text),
    outline-black (hover black bg + white text).
  - Work images 10px solid white border; hover caption centered (opacity
    0→1). Play button 60px circle. Avatar 60px circle 5px white border.
  - Rhythm: `.section { padding: 7em 0 }`; hero 100vh/700px + rgba(0,0,0,0.3)
    overlay; CTA py-5; footer 7em 0. Dotted pattern detail behind about
    image; aos fade-up/fade-left entrances.
- **Recreation decisions:** navbar = dark bar (Roboto Mono logo "Kraft" +
  Home/About/Services dropdown/Projects/Contact + search input w/ Search
  icon; mobile collapse with aria-expanded); hero = full-viewport picsum
  cover + dark overlay, kicker, huge DM Serif Display "We create awesome
  stuff.", 60px white circle Play (lucide, aria-label, link to video URL);
  portfolio = 2×2 picsum grid, 10px white borders, hover caption overlays,
  amber "View All Portfolio" link + "More Portfolio" outline button; about =
  split with CSS radial-gradient dotted detail (no dotted.jpg asset) + two
  stacked picsum images; services = 4 cols (lucide Magnet, MonitorSmartphone,
  Smartphone, Search, 3rem amber); testimonials = bg-light accessible
  carousel of 4 cards (60px round avatar, name, "Customer Corp.", quote);
  CTA = amber band + white heading + "Get In Touch!" outline button; footer =
  amber #ffc809, 4 columns (About + 4 social circles, Contact Info rows, Quick
  Links, empty) + bottom bar repo-standard credit; loader = amber circular
  spinner. Images `picsum.photos/seed/kraft-N/w/h`; fonts DM Serif Display +
  Roboto Mono via Google Fonts; icons via lucide-react (Play, Search, Magnet,
  MonitorSmartphone, Smartphone, Twitter, Facebook, Linkedin, Instagram,
  MapPin, Phone, Mail).

## Implementation tasks (for the implementer stream)

- [ ] Scaffold app: copy simplest existing app → `apps/kraft`, rename package
      to `@free-react-templates/kraft`, register workspace in
      package-lock.json (root `npm install` before committing), keep
      `injectUiSource()` in vite.config.ts.
- [ ] `src/index.css`: `@theme` tokens — brand amber #ffc107 (+ hover
      #d39e00), footer amber #ffc809, dark #343a40, light #f8f9fa, body text
      #212529; font links for DM Serif Display (headings) + Roboto Mono (body)
      in index.html.
- [ ] Components (order of composition in App.tsx):
      Navbar → Hero → Portfolio → About → Services → Testimonials → CtaBand →
      Footer.
- [ ] Navbar: dark bar, brand "Kraft", links + Services dropdown (Branding /
      Web Design / App Design / Start Up), search input with icon; mobile
      toggler with aria-expanded.
- [ ] Hero: full-viewport picsum cover + dark overlay, kicker, DM Serif
      Display headline "We create awesome stuff.", circular white play button
      (lucide Play).
- [ ] Portfolio: 2×2 grid of picsum images (10px white border), hover/focus
      caption overlay (title + category), amber "View All Portfolio" link,
      "More Portfolio" square outline button.
- [ ] About: split — amber uppercase eyebrow, serif heading, paragraphs,
      outline "Learn More" button; image side dotted-bg (CSS dots) + main +
      overlapping image.
- [ ] Services: 4 cards with 3rem amber lucide icons + h3 + blurb.
- [ ] Testimonials: light bg carousel (4 cards: round avatar, name, "Customer
      Corp.", quote) with accessible controls (auto-advance optional).
- [ ] CTA band: amber bg, white heading + para, "Get In Touch!" outline
      button.
- [ ] Footer: amber #ffc809, About + 4 social icon links, Contact Info rows,
      Quick Links, bottom bar repo-standard credit.
- [ ] TDD: spec scenarios → tests → implementation, 100% coverage.
- [ ] Run `npm run verify:app -- kraft` (typecheck + lint + vitest 100% +
      build).
- [ ] PR: source CardBoard, preview URL, tokens, renames; squash-merge
      immediately; then TEMPLATES.md `[~]`→`[x]` + surge URL +
      `npm run readme:status`.
