# Arena (ColorLib Beko) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-arena` by an implementer stream.

## Design notes

- **Original:** ColorLib "Beko" — free gaming website template
  (source: https://colorlib.com/wp/template/beko/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/beko/`
  (HTTP 200, 37.9KB) + stylesheet `css/style.css` (161.4KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens. Screenshot
  `beko-free-template.jpg` confirms: dark near-black gaming theme, stark white
  text, hot pink/magenta→red gradient CTAs ("Install Now", "Watch Tutorial"),
  white uppercase "BEKO" logo, hero with a 3D red gaming headset/helmet
  graphic with orange rim light, condensed heavy sporty headings, nav with
  fighter/team/Blog/Pages/Contact links.
- **Structure observed (1:1):** header (`main_menu single_page_menu` navbar:
  brand "gaming" + links Home / fighter / team / Blog / Single blog / pages /
  Elements / Contact + "Install Now" `btn_1`) → hero (`banner_part`, bg
  `img/banner_bg.png` contain, 1020px text block, H1 "Best Highlights of the
  Latest" 60px #fff 700 capitalize, lorem copy, "Install Now" `btn_1` +
  "Watch Tutorial" `btn_2`, right-side 3D graphic) → client logos
  (`client_logo` owl-carousel of `single_client_logo` images) → about
  (`about_us section_padding`: "Find out about us in history" + paragraph +
  2 buttons + `learning_img`) → live streams (`live_stareams
padding_bottom`: "live" label + "stareams" H2 + "install now" button;
  carousel of `live_stareams_slide_img` cards — image + red→magenta gradient
  `:after` overlay + `extends_video` play button (popup-youtube) + score
  "190 / 189" + date "27 june 2020" + "Open War chalange") → latest war
  (`Latest_War`: tittle "Latest War Fight"; full-width `Latest_War_text`
  card: "Open War chalange" / "27 june, 2020" / "view fight" / "190 189" /
  "Watch Tutorial", gradient overlay) → gallery (`gallery_part
section_padding`: tittle "All Fighter"; isotope-style masonry `grid` +
  `grid-sizer` of `single_gallery_item` tiles with gradient hover overlay,
  imgs `gallery_item_1.png`…) → upcoming fighter (`upcomming_war`: tittle
  "Upcoming Fighter"; bg `img/event_bg.png` 90% no-repeat; counter card:
  "Dark Dragon" name + `upcomming_war_counter` countdown + "open" button) →
  pricing (`pricing_part padding_top`: tittle "Pricing plans"; 3
  `single_pricing_part` cards col-lg-3 — "Silver Package" $50.00/$60.00/
  $80.00, features "2GB Bandwidth / Two Account / 15GB Storage", "Choose
  Plane" `btn_2`) → footer (`footer_part` dark `footer_top`: logo + about
  copy, "Important Link" (WHMCS-bridge, Search Domain, My Account, Shopping
  Cart, Our Shop), "Contact Info" (Address / Phone +8880 44338899 / Email
  info@colorlib.com), "Newsletter" form `mail_part` + gradient `email_icon`;
  copyright bar "Copyright © All rights reserved | This template is made
  with Colorlib").
- **Design tokens:** Google Fonts
  `Aclonica|Poppins:300,400,500,600` — **Aclonica** (display: body base,
  headings, buttons) + **Poppins** (body text/nav/paragraphs). Brand
  gradient **`linear-gradient(to left, #ff0000 0%, #c6019a 51%, #ff0000
100%)`** (red → magenta → red) on `.btn_1`, nav underline `:before`
  (magenta→red), card `:after` overlays (live stream imgs, Latest_War text,
  gallery items, footer email icon). `.btn_1` = gradient, padding 18.5px
  40px (mobile 10px 30px), `border-radius: 0`, 15px, Aclonica 500, #fff;
  hover = bg-position shift. `.btn_2` = white bg, same metrics; hover =
  `border: 1px solid #ff0000` + white text. `.section_tittle h2` = 45px
  (mobile 25px), line-height 50px, #fff, 500, Aclonica. Hero H1 = 60px /
  70px, #fff, 700, capitalize. Dark page: hero bg image, `live_stareams_bg`
  image, `event_bg.png` (90%), pricing cards **#0b111f** dark navy +
  `pricing_bg.png` top, dark footer. (#f9f9ff/#f0e9ff/#4cd3e3/#f4e700/
  #f44a40 are elements/demo styles — NOT home brand.)
- **Recreation name:** Arena. App folder `apps/arena`, package
  `@free-react-templates/arena` (no collision with `ls apps/` or existing
  spec folders).
- **Design approach:** keep the dark gaming theme; hero = left text (H1 +
  copy + gradient "Install Now" + white "Watch Tutorial") + seeded picsum
  graphic; client-logo carousel; about split with image + two CTAs;
  live-stream card row (image + gradient overlay + play button + score +
  date + match title); Latest War feature banner; masonry gallery with hover
  captions; upcoming fighter + countdown timer (day/hour/minute/second
  blocks); 3 pricing cards on dark navy with feature list + "Choose Plane";
  footer with 3 link/info columns + newsletter (success-state form); all
  images picsum-seeded (`picsum.photos/seed/arena-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks. Social icons:
  lucide-react dropped brand icons — use inline SVG brand icons
  (GitHub/X/LinkedIn per repo standard; original had generic social icons).
- Newsletter form: swap to success message on submit unmounts the input —
  test with `queryByLabelText(...)` absent (not input value).
- The gallery masonry is isotope-style (`grid` + `grid-sizer`) — implement
  with CSS columns or a plain responsive grid (no new deps).
- The live-stream + logo carousels are owl-carousel — a CSS/state-based
  slider is fine (no new deps).
- Dark-mode toggle: the original is dark-only; the repo-standard toggle flips
  `.dark` on `document.documentElement` — default the page to the dark theme.

## Tasks

- [x] Write `openspec/specs/template-arena/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/arena` (copy `apps/aurora`; rename package to
      `@free-react-templates/arena`; `npm install` at root to register the
      workspace in package-lock.json).
- [ ] TDD: tests first for Navbar, Hero, ClientLogos, About, LiveStreams,
      LatestWar, Gallery, UpcomingFighter, Pricing, Footer, App
      composition; run red.
- [ ] Implement sections in order with 100% vitest coverage (lines,
      functions, branches, statements).
- [ ] Verify: `npm run verify:app -- arena` (typecheck → lint → vitest →
      build).
- [ ] Deploy: PR to main, merge immediately (squash), confirm surge URL
      `https://free-react-templates-arena.surge.sh` returns 200.
- [ ] Bookkeeping: mark `- [ ] **Beko**` as `[x]` with the arena surge URL;
      regenerate README template status
      (`npm run readme:status`).
