# Decibel (ColorLib Deejee) — Tasks & Design Notes

> Recreation of ColorLib "Deejee" (https://colorlib.com/wp/template/deejee/)
> under the NEW name **Decibel** (the unit of sound intensity — a
> DJ/radio-themed brand; single lowercase word, no collision with `apps/`
> or `openspec/specs/` — verified 2026-08-10), per the monorepo naming
> mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Deejee" — free DJ / Radio website template (page
  title "Deejee &mdash; Colorlib Website Template"). TEMPLATES.md has TWO
  dup rows for the same source: line 373 under **Bootstrap (216)** and
  line 2262 under **Music (19)** — same source, ONE item; mark BOTH `[x]`
  at ship time. The recreation brands itself **Decibel**.
- **Preview URL (verified 2026-08-10):**
  `https://preview.colorlib.com/theme/deejee/` returns HTTP 200 (36.0 KB
  HTML). Bootstrap 4 + jQuery + owl.carousel + aos (animate-on-scroll) +
  magnific popup + mediaelementplayer (CSS only, no `<audio>` on this
  page) + icomoon/flaticon icon fonts. The TEMPLATES.md screenshot
  (`deejee-free-template.jpg`, 1200×946, AVIF, viewed in a browser)
  matches the live render.
- **Visual design (screenshot + live render):** DARK nightlife /
  electronic-music aesthetic. Page bg **`#222831`** (charcoal-navy),
  dark sections **`#13171d`**, white text, ONE hot-pink accent
  **`#e3207b`** (buttons, heading underlines, card-title highlight
  strips, carousel dots, social strip, form focus). Hero: big DJ photo
  (headphones + mixing console, blue/pink stage lighting) under a
  `rgba(0,0,0,0.4)` overlay, centered white uppercase headline "TURN ON
  THE FEELING WITH MUSIC" + pink "Download Template" button; white script
  logo "Deejee." top-left; white nav top-right. Below: "UPCOMING SHOWS"
  heading (white uppercase + thin pink underline), grey lorem intro, 4
  image cards. Oswald headings, Nunito Sans body.
- **Structure (1:1, verified live):**
  1. `div.site-wrap` → `nav.site-navbar` (ABSOLUTE over hero, z-99):
     `a.site-logo` "Deejee." (white script text) + `div.site-navigation`:
     mobile-only `a.site-menu-toggle` (icon-menu hamburger) toggling
     `div.site-mobile-menu` (off-canvas; `.site-nav-wrap` links, hover
     pink, arrow-collapse for dropdowns); desktop `ul.site-menu` —
     Home (active), DJs, `li.has-children` Shows ▾ (`ul.dropdown.arrow-
top`: Top 20 of The Week, Featured Artist, Interviews, nested
     has-children Sub Menu ▾ → Menu One/Two/Three), Events, About,
     Contact. Nav links `rgba(255,255,255,0.6)` ls .05em; hover white;
     dropdown hover `#e3207b`.
  2. `div.site-blocks-cover.overlay` — HERO: inline bg `hero_bg_1.jpg`,
     `min-height: 600px; height: calc(100vh)`, `:before` overlay
     `rgba(0,0,0,0.4)`; centered `col-md-7.text-center`: `h1.mb-4` "Turn
     On The Feeling With Music" (white, Oswald 4rem, ls .1em, uppercase)
     - `a.btn.btn-primary.px-4.py-3` "Download Template".
  3. `div.site-section` — "Upcoming Shows": `.site-section-heading
.text-center.mb-5.w-border.col-md-6.mx-auto` — `h2.mb-5` (Oswald
     2rem, ls .2em, uppercase, white) + `:after` 70×2px `#e3207b`
     underline + lorem p. Row of 4 × `a.unit-9` (col-md-6 col-lg-3):
     `div.image` (bg-image, height 300px, cover) + `div.unit-9-content`
     (absolute bottom): `h2` (pink highlight: inline bg + box-shadow
     10px 0 0 `#e3207b`) + `span` "Friday 1:00pm — 2:30pm" + `span`
     "with Wendy Matos". Cards: This Is The Day / Electro Party /
     Classic Hits / Classic Songs (hosts: Wendy Matos, Gaby Tenda,
     James Tenda, Troy Peters).
  4. `div.site-section` — "Featured Podcasts" (same heading block) +
     `div.site-block-retro.d-block.d-md-flex`: LEFT `a.col1.unit-9.
no-height` (img_2.jpg, big) + RIGHT `div.col2.ml-auto` 2 stacked
     `a.col2-row1/row2.unit-9.no-height` (img_3.jpg, img_1.jpg). Each:
     `h2` "Classic Songs For Classic People" (pink highlight) + `span`
     "Friday 1:00pm — 2:30pm" (BLACK highlight: inline bg `#000` +
     box-shadow 10px). QUIRK: all 3 identical → 3 DISTINCT titles.
  5. `div.site-section.bg-dark.block-13` — "Love By Our Listeners"
     (bg `#13171d`): `div.nonloop-block-13.owl-carousel` — N ×
     `div.text-center.p-3.p-md-5.bg-white` (WHITE card): circular avatar
     (person_1.jpg, w-50 rounded-circle) + `h3.font-weight-light.h5`
     name (Megan Smith) + `p.font-italic` quote. QUIRK: 5 slides all
     same lorem → 5 DISTINCT quotes. Owl dots active `#e3207b`.
  6. `div.site-section` — "Our DJs": row of 6 × (col-md-6 col-lg-4 mb-5)
     > `div.team-member` (relative, overflow hidden): `img` person_1..6
     > (hover scale 1.1, .3s) + `div.text` (ABSOLUTE centered: top 50%,
     > translateY(-30%), padding 20px, transition .5s; `:before` scrim
     > fades in on hover): `h2.font-weight-light.h4` name (Megan Smith,
     > Brooke Cagle, Philip Martin, …) + `span.text-white-opacity-05`
     > role ("Creative Director" = rgba(255,255,255,.5)) + `p.mb-4` blurb
     - 3 socials (facebook, twitter, linkedin). QUIRK: all roles
       identical → vary roles (DJ, Producer, Radio Host…).
  7. `div.site-section.bg-dark` — "News & Events": row of 3 ×
     (col-md-6 col-lg-4): `a` > `img` (img_4/2/3) + `div.p-4.bg-white`:
     `span.text-secondary.small.text-uppercase` "Jan 20th, 2019" +
     `h2.h5.text-black` > `a` "This Is The Day, Party, Party!".
     QUIRK: all 3 identical → DISTINCT titles/dates.
  8. `div.bg-primary` — SOCIAL STRIP (`#e3207b`): 6 × `a.col-2.text-
center.py-4.social-icon` (facebook, twitter, instagram, linkedin,
     pinterest, +1); hover → `#eec60a` text on `#cf1a6f` bg.
  9. `footer.site-footer` (padding 4em 0):
     - col-lg-4: "About Deejee" (`h3.footer-heading.mb-4`: 1.3rem
       uppercase ls .1em white + `:before` 40×2px `#e3207b` underline)
       - p (`#737373`); "Subscribe" + `form.site-block-subscribe`:
         `input-group.mb-3` — input `form-control.border-secondary.
text-white.bg-transparent` (height 60px, weight 300, placeholder
         "Enter your email") + `button.btn.btn-primary` "Subscribe".
     - col-lg-4: "Navigations" — 2 `ul.list-unstyled` (Home, DJs, News,
       Top 20 of the week / About Us, Privacy Policy, Contact Us,
       Membership); "Follow Us" — 4 social icons.
     - col-lg-4: "Watch Live Streaming" — `div.block-16` figure: img
       img_1.jpg (rounded) + `a.play-button.popup-vimeo` > span
       icon-play (70×70 WHITE circle, absolute centered, font-size 20px;
       vimeo link — recreation: plain link, new tab).
     - Bottom bar `row.pt-5.mt-5.text-center`: copyright "Copyright ©
       <year> All rights reserved | This template is made with ♥ by
       Colorlib".
- **Design tokens extracted from the live CSS (`css/style.css` +
  `css/bootstrap.min.css`, verified 2026-08-10):**
  - Hot pink **#e3207b** (brand; Bootstrap `$primary` override): btn-
    primary bg, bg-primary strip, heading 70×2px underline, unit-9 h2
    highlight, footer-heading 40×2px underline, owl active dot, form
    focus border, dropdown/mobile hover.
  - Pink hovers **#c41969** / **#b91763**; social hover `#eec60a` text
    on `#cf1a6f` bg.
  - Page bg **#222831**; dark section bg **#13171d**; hero overlay
    `rgba(0,0,0,0.4)`.
  - Text: white #fff; body `rgba(255,255,255,0.5)`; footer `#737373`;
    dates `#6c757d`; #ccc separators; black #000 card titles.
  - Fonts: **Oswald** (h1–h5) + **Nunito Sans** (body 1.1rem, lh 1.7,
    w400) — both Google Fonts; logo script is a text wordmark → script
    Google font (Pacifico / Dancing Script).
  - Buttons `.btn.btn-primary`: white on #e3207b, radius **.25rem** (not
    square), hover #c41969; hero CTA px-4 py-3; subscribe button px 20px
    in 60px input group.
  - Section heading: 2rem ls .2em uppercase + 70×2px pink underline;
    footer-heading 1.3rem ls .1em + 40×2px pink underline.
  - unit-9 highlight: `display:inline; background + box-shadow 10px 0 0`
    (pink for h2, black for spans).
  - team-member: absolute centered overlay translateY(-30%), img
    scale(1.1) + scrim on hover; role rgba(255,255,255,.5).
  - Play button 70×70 white circle centered; testimonials white cards
    p-3 p-md-5 with circular avatars; owl dots active pink.
  - Rhythm: sections 3em 0; hero 100vh (min 600px); grids 3-up
    (col-lg-3 shows, col-lg-4 DJs/news); heading blocks col-md-6 centered.
- **Recreation approach:** Tailwind grid (NO Bootstrap); testimonials =
  small stateful carousel (useState index + dot controls, pink active
  dot — no owl.carousel); aos fade-up → optional (simple CSS fade-in or
  omit — decorative); icomoon/flaticon → lucide-react (Play, Menu, X) +
  inline SVG brand icons (socials); magnific popup → plain link (play
  button opens the Vimeo URL in a new tab); photos → seeded picsum
  (`picsum.photos/seed/decibel-<n>/<w>/<h>`); Oswald + Nunito Sans +
  Pacifico/Dancing Script via Google Fonts; brand "Deejee" → "Decibel"
  (script text logo "Decibel."); document title "Decibel — DJ & Radio
  Template"; nav links `#` anchors (single-page recreation of the demo);
  fix source repetitions (retro ×3, testimonials ×5, news ×3, DJ roles).
- Accessibility: `aria-label` on icon buttons (hamburger, close, socials,
  play, carousel dots), labels/placeholders on the Subscribe input,
  semantic `<main>` landmark, `alt` text on photos.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/decibel`
      (package `@free-react-templates/decibel`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: navbar (logo + nav + Shows ▾ dropdown + Sub Menu ▾ +
      mobile hamburger menu) → hero cover (photo + `rgba(0,0,0,0.4)`
      overlay + headline + CTA) → Upcoming Shows (heading + 4 unit-9
      cards) → Featured Podcasts (heading + retro block: 1 big + 2
      stacked) → Love By Our Listeners (dark testimonials carousel,
      white cards + circular avatars + pink active dots) → Our DJs (6
      overlay cards) → News & Events (dark, 3 white-boxed posts) →
      social strip (pink, 6 icons) → footer (About + Subscribe,
      Navigations + Follow Us, Watch Live Streaming, copyright bar).
- [ ] Tokens in `@theme`: `--color-brand #e3207b`, `--color-brand-hover
#c41969`, `--color-brand-active #b91763`, `--color-surface #222831`,
      `--color-surface-dark #13171d`, `--color-body
rgba(255,255,255,0.5)`, `--color-muted #737373`, `--color-date
#6c757d`, `--color-social-hover #eec60a`, `--color-social-hover-bg
#cf1a6f`; fonts `--font-display Oswald`, `--font-body "Nunito Sans"`,
      `--font-script Pacifico` (or Dancing Script).
- [ ] Navbar: absolute over hero; script logo "Decibel." white; links
      Home (active) / DJs / Shows ▾ / Events / About / Contact at white
      60%, hover white; Shows dropdown (Top 20 of The Week, Featured
      Artist, Interviews, Sub Menu ▾ → Menu One/Two/Three), pink hover;
      mobile: hamburger → off-canvas menu with close.
- [ ] Hero: min-height 600px / 100vh, picsum DJ photo +
      `rgba(0,0,0,0.4)` overlay, h1 "Turn On The Feeling With Music"
      (Oswald 4rem ls .1em uppercase), pink rounded CTA "Download
      Template" (hover `#c41969`).
- [ ] Upcoming Shows: heading 2rem ls .2em uppercase + 70×2px pink
      underline + intro; 4 cards (image 300px cover + bottom overlay):
      pink-highlight title + "Friday 1:00pm — 2:30pm" + "with <host>";
      This Is The Day / Electro Party / Classic Hits / Classic Songs.
- [ ] Featured Podcasts: heading block + retro flex (1 large left, 2
      stacked right); titles pink highlight, times black highlight; 3
      DISTINCT titles.
- [ ] Testimonials: bg `#13171d`, carousel of white cards (circular
      avatar + name + italic quote), 5 DISTINCT quotes, pink active dot.
- [ ] Our DJs: 6 cards, 3-col grid; hover → img scale(1.1) + scrim;
      overlay: name (Oswald light) + role (50% white, varied: DJ /
      Producer / Radio Host) + blurb + 3 social icons.
- [ ] News & Events: bg `#13171d`, 3 cards (image + white box: uppercase
      date `#6c757d` + black title), DISTINCT titles/dates.
- [ ] Social strip: bg `#e3207b`, 6 icons equal width; hover → `#eec60a`
      text on `#cf1a6f`.
- [ ] Footer: 3 columns — About Decibel (pink-underlined heading + about
      p) + Subscribe (60px transparent input, placeholder "Enter your
      email", pink button); Navigations (2×4 links) + Follow Us (4
      socials); Watch Live Streaming (rounded image + 70×70 white
      circular play button linking to the video URL in a new tab);
      centered copyright "made with ♥ by Decibel".
- [ ] Primary buttons rounded .25rem, white text on pink, hover
      `#c41969` — NOT square.
- [ ] Oswald (400/500/600) + Nunito Sans (400/600/700) + Pacifico (logo
      wordmark) via Google Fonts link in index.html; document title
      "Decibel — DJ & Radio Template"; `<main>` landmark.
- [ ] Photos: seeded picsum `decibel-<n>/<w>/<h>` (hero 1, shows 1-4,
      retro 1-3, avatars 1-5, DJs 1-6, news 1-3, streaming 1); no copied
      assets.
- [ ] `scripts/verify-app.sh decibel` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` on BOTH dup rows (TEMPLATES.md
      lines 373 and 2262) + surge URL, `npm run readme:status`, PR +
      immediate squash merge.
