# Frolic (ColorLib Kiddy) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-frolic`.

## Source mapping

- **ColorLib item:** "Kiddy" (TEMPLATES.md line 429).
- **Source URL:** https://colorlib.com/wp/template/kiddy/
- **Preview URL:** https://preview.colorlib.com/theme/kiddy/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~20 KB HTML). The ColorLib preview portal
  serves this slug directly. Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/kiddy/css/style.css
  (custom ~22 KB) + `css/bootstrap.min.css` (~30 KB, **re-skinned**: btn-primary
  #dc3545, btn-success #71bc42, btn-warning #ffc107, bg-info #17a2b8) +
  `fonts/icomoon/style.css` + `fonts/flaticon/font/flaticon.css` (icons).
  Site is Bootstrap 4 + jQuery (owl-carousel, AOS) — NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`kiddy-free-template.jpeg`, 1200×946; verified via browser vision)

Light-gray hero: "Kiddy." logo top-left with red dot; contact info (pin +
clock icons) top-right; a white floating pill navbar below it with "Home"
highlighted coral. Hero left: coral "Welcome To Our Website" eyebrow, bold
white headline "Bring Fun Life To Your Kids", red rectangular "LEARN MORE"
button; right: photo of a boy dressed as a superhero (red cape, blue mask,
fist raised) blending into the gray background. Below: three feature blocks
with colored headers — reddish "Indoor Games" (house icon), yellow "Outdoor
Game And Event" (person icon), teal "Camping for Kids" (gear icon). The
screenshot cuts off at the feature blocks; the live DOM below is the primary
reference for the rest.

### Live DOM (primary reference — matches the screenshot 1:1)

Section order: Header `site-navbar` (absolute, top, w-full, padding 1rem;
ROW 1: logo `site-logo` "Kiddy" + `text-primary` red dot 2.7rem left,
quick-contact right — `icon-map-marker text-yellow` + "34 Street Name, City
Name Here, United States", `icon-clock-o` + "Sunday - Friday 8:00AM - 4:00PM
Saturday CLOSED" (hidden <lg); ROW 2: hamburger `icon-menu` (mobile only),
nav `site-menu` — Home(active)/About/Packages/Gallery/Pricing/Contact,
`top-social` right — Facebook `text-teal`, Twitter `text-success`, LinkedIn
`text-yellow`) → Hero `ftco-blocks-cover-1` > `site-section-cover.overlay`
(min-height 777px = `calc(100vh - 196px)`; `:before` overlay
rgba(0,0,0,.3); left col: `text-cursive h5 text-red` "Welcome To Our
Website", h1 `font-weight-bold text-teal`-classed-but-computed-WHITE
"Bring Fun Life To Your Kids" (48px/700/line-height 1 — `.site-section-cover
h1{color:#fff}` beats `.text-teal`), p "Amazing Playground for your kids"
(white 18px), `btn btn-primary py-4 btn-custom-1` "Learn More" (computed bg
#dc3545, radius `30px 0px` — TL/BR 30px, TR/BL 0); right col `ml-auto
align-self-end`: transparent kid PNG `images/kid_transparent.png`) →
Feature blocks `site-section` (3× `block-2` in col-lg-4: `red` #fd4d40
Indoor Games + `icon-home`, `yellow` #fdb62f Outdoor Game And Event +
`icon-person`, `teal` #16c3b0 Camping for Kids + `icon-cog`; each padding
40px, centered, white 18px h2, p rgba(255,255,255,.7)) → About
`site-section bg-light` (#f6f5f5; col-md-6 photo `images/img_1.jpg` +
col-md-5: `text-cursive h5 text-red` "About Us", h3 `text-black` "Bring Fun
Life To Your Kids", 2 paragraphs, `btn btn-warning py-4 btn-custom-1` "More
About Us" #ffc107 dark text) → Packages `site-section bg-info` (#17a2b8;
centered `text-cursive h5 text-red` "Packages You Like" + white h2 "Our
Packages"; 3 `package text-center bg-white` cards radius 7px padding 40px:
flaticon SVG 80px img-wrap (001-jigsaw / 002-target / 003-mission) + h3
`text-teal` Indoor Games / `text-success` Outdoor Game and Event /
`text-danger`-ish Camping for Kids + `btn btn-primary` / `btn-warning` /
`btn-success` "Learn More") → Pricing `site-section` (col-md-4 intro:
`text-cursive h5 text-red` "Pricing Plan" + black h2 "Our Pricing" + para;
2× col-md-4 `pricing teal|danger` cards: `.price` 90px circle (radius 50%,
bg #16c3b0 | #fd4d40, inner 3px white ring via `:before`, 26px "$30"/"$70"),
h3 "Silver Pack"/"Golden Pack", `ul-check` 3 items (teal | danger checks,
padding-left 35px), `btn btn-teal|btn-danger btn-custom-1` "Buy Now") →
Testimonials `site-section bg-light` (centered `text-cursive h5 text-red`
"Testimonial" + black h2 "What Our Client Says About Us"; `col-md-8`
`testimonial-3-wrap` bg #fd4d40 padding 30px → `owl-carousel nonloop-block-13`
3 slides: `.testimonial-3 d-flex` — 80px square vcard photo (`mr-5`) + white
h3 "Jeff Woodland" 20px + `.position` rgba(255,255,255,.5) 16px "Partner" +
white 20px quote) → Stats row (same bg-light section, `row mt-5
justify-content-center` col-md-8: 4× col-lg-3 text-center — 3423 Happy
Client `text-teal`, 4398 Members `text-yellow`, 50+ Staffs `text-success`,
2000+ Our Followers `text-danger` #dc3545) → CTA band `site-section py-5
bg-warning` (#ffc107; white h2 "Bring Fun Life To Your Kids" + `btn
btn-primary btn-custom-1 py-3 px-5 ml-auto` "Get Started") → Footer
`site-footer` (bg #343a40, padding 4-8em; col-lg-4: `footer-heading` "About
Us" + blurb + "Newsletter" heading + form — `form-control mr-3` 55px email
input + `btn btn-primary` Send; col-lg-8: two col-lg-4 "Navigation" link
columns — About Us/Testimonials/Terms of Service/Privacy/Contact Us; bottom
`border-top` rgba(255,255,255,.1) copyright bar with `icon-heart
text-danger` + ColorLib credit).

### Design tokens (from `css/style.css` + re-skinned bootstrap, computed-verified)

- **Brand coral** `#fd4d40`: `.text-red` eyebrows, `.block-2.red`,
  `.btn.btn-danger`, `.pricing.danger .price`, `.testimonial-3-wrap`,
  nav link color/hover/active, `.ul-check.danger`, form-control focus border.
- **Button red** `#dc3545` (re-skinned Bootstrap primary): `.btn-primary`
  (hero Learn More, Indoor Learn More, Get Started, newsletter Send),
  `.text-primary` logo dot, `.text-danger` stats.
- **Teal** `#16c3b0`: `.text-teal`, `.btn.btn-teal`, `.block-2.teal`,
  `.pricing.teal .price`, `.ul-check.teal`, stats 3423.
- **Yellow** `#fdb62f`: `.text-yellow` (pin, LinkedIn, stats 4398),
  `.block-2.yellow`.
- **Green** `#71bc42`: `.text-success` (Twitter, stats 50+), `.btn-success`.
- **Info** `#17a2b8` (Packages bg), **Warning** `#ffc107` (CTA band bg,
  `.btn-warning` More About Us + Outdoor Learn More, dark text).
- **Neutrals:** ink `#364d59` (body 300 + default headings) · light section
  `#f6f5f5` · footer `#343a40` · package text `#777` · black `#000`.
- **Fonts:** DM Sans (body 1rem/300/1.7 + headings) · Indie Flower (cursive
  eyebrows via `.text-cursive`). Google Fonts `<link>` in `index.html`
  (preview uses Cloudflare cf-fonts of the same families).
- **Buttons:** `.btn` — radius 30px, uppercase, .8rem, letter-spacing .2rem,
  padding 10px 20px; `.btn-custom-1` — radius 30px TL+BR, **0 TR+BL**
  (asymmetric squircle — the template's signature button shape); hero button
  tall `py-4`; CTA `py-3 px-5`.
- **Radii:** 30px buttons · 50% (80px feature icon circles, 90px price
  circles) · 7px package cards · 0 testimonial panel & vcard (square).
- **Navbar:** absolute top, w-full, padding 1rem; logo 2.7rem; nav links
  coral, margin 0 15px, padding 20px 0; sticky → white bg.
- **Cover:** min-height 777px; computed hero bg = transparent white +
  rgba(0,0,0,.3) overlay → light gray (~#b3b3b3); h1 white 48px/700
  (`.site-section-cover h1` overrides `.text-teal`); p white 18px.
- **Container:** Bootstrap `container` → Tailwind `mx-auto max-w-7xl px-4`.

## Implementation todo

- [ ] Scaffold `apps/frolic` from the simplest existing app; package
      `@free-react-templates/frolic`; `npm install` at root + verify
      lockfile registers the workspace (`grep -c free-react-templates/frolic
  package-lock.json`); `vite.config.ts` MUST keep `injectUiSource()`.
- [ ] `src/index.css` `@theme`: coral #fd4d40, button red #dc3545, teal
      #16c3b0, yellow #fdb62f, green #71bc42, info #17a2b8, warning #ffc107,
      ink #364d59, light #f6f5f5, footer #343a40, #777, #000; DM Sans +
      Indie Flower via Google Fonts `<link>` in `index.html`.
- [ ] Spec → tests (red) → components (green), 100% coverage, mirroring the
      spec's Gherkin scenarios 1:1.
- [ ] `Header.tsx`: absolute w-full header — row 1 logo "Frolic" + red dot +
      address/hours with icons (hidden <lg); row 2 hamburger (mobile,
      aria-expanded) + nav links + 3 social icons.
- [ ] `Hero.tsx`: min-h ~777px light-gray section; Indie Flower red eyebrow,
      white 48px/700 headline, white subtext, red asymmetric-radius "Learn
      More" button; right-aligned bottom hero photo (seeded picsum).
- [ ] `FeatureBlocks.tsx`: 3 colored cards (red/yellow/teal), 80px white
      icon circles (lucide Home/User/Settings), white 18px titles, 70%-white
      paragraphs; `md:grid-cols-3`.
- [ ] `About.tsx`: bg-light section — photo left, right: cursive red
      "About Us", black heading, 2 paragraphs, amber "More About Us" button.
- [ ] `Packages.tsx`: bg-[#17a2b8] section — centered cursive red eyebrow +
      white heading; 3 white cards (radius 7px) with icon (lucide Puzzle /
      Target / Rocket in 80px wrap), colored titles, colored Learn More
      buttons (red/amber/green).
- [ ] `Pricing.tsx`: intro column (eyebrow + heading + para) + 2 pricing
      cards — 90px price circle (teal $30 / coral $70, 3px white inner ring),
      20px title, 3-item check list (variant-colored checks), Buy Now button
      (teal / coral).
- [ ] `Testimonials.tsx`: bg-light section — centered heading; coral panel
      with 3 slides (80px square photo, white name/role/quote), prev/next
      or dots cycling; stats row below (3423 teal / 4398 yellow / 50+ green /
      2000+ red).
- [ ] `CtaBand.tsx`: amber #ffc107 band — white heading left, red "Get
      Started" button right (larger padding).
- [ ] `Footer.tsx`: dark #343a40 — About Us + blurb + Newsletter form (55px
      email input + red Send with confirmation state), two Navigation link
      columns, copyright bar with heart + original attribution.
- [ ] `App.tsx` composition: banner/main/contentinfo landmarks, title
      "Frolic — Kids' Activity Template".
- [ ] `scripts/verify-app.sh frolic` → full `npm run gate` green.
- [ ] PR `feat/template-frolic` → docs + merge immediately; then
      `[~]`→`[x]` on the Kiddy line (429), surge URL + homepage,
      `npm run readme:status`, push.

## Fidelity notes

- The source is a multi-page site (about.html, packages.html, gallery.html,
  pricing.html, contact.html). Our recreation is single-page: nav links
  anchor to on-page sections (`#packages`, `#pricing`, ...) or `#`
  placeholders; card/button links point to `#` (non-functional in a
  single-page demo — keep the same _kind_ of link affordance).
- **The signature button shape is the asymmetric squircle**: radius 30px on
  top-left + bottom-right, square on top-right + bottom-left
  (`border-radius: 30px 0 30px 0` → Tailwind `rounded-tl-[30px]
rounded-br-[30px]`). Apply it to ALL primary CTAs — this is the template's
  identity, not a plain rounded-full pill.
- **Hero h1 color trap:** the markup class is `text-teal` but
  `.site-section-cover h1 { color: #fff }` wins by specificity — the live
  page renders the headline WHITE. Implement white.
- **Hero background trap:** the hero has no image; the light-gray look is the
  white body under the CSS `:before` overlay rgba(0,0,0,.3) (≈ #b3b3b3).
  Implement a flat light-gray bg (e.g. `bg-[#b3b3b3]` or a slightly lighter
  gray for readability) with white text — do NOT copy the kid PNG.
- Copy: keep headline/subtext/eyebrow patterns and the same _kind_ of card
  content; paraphrase the lorem ipsum. Rebrand footer credit to
  "made with <heart> by free-react-templates" style, never Colorlib.
- Never copy assets — picsum (subject-verified): hero `id/823` (600×700
  person portrait), about `id/64` (600×450 golden-hour meadow), testimonial
  avatars `id/1027` / `id/996` / `id/1011` (160×160 person photos, rendered
  80×80). Package icons: lucide (Puzzle, Target, Compass) in white 80px
  circles — do NOT copy the flaticon SVGs.
- Icons → lucide-react equivalents: Home, User, Settings/Cog, MapPin, Clock,
  Check, Heart; Facebook/Twitter/LinkedIn as inline SVG brand icons (not in
  lucide).
- Bootstrap grid (`col-lg-4`, `col-md-6`, `col-md-8`) → Tailwind responsive
  classes (`md:grid-cols-3`, `lg:grid-cols-[2fr_1fr]`, etc.).
- The four accent families (coral/red, teal, yellow, green) are the
  template's playful identity — keep the exact hexes in `@theme`; never
  inline hex in components.
- Eyebrows use Indie Flower (handwritten look) in coral #fd4d40 — keep that
  pairing everywhere it appears (hero, about, packages, pricing,
  testimonials).
