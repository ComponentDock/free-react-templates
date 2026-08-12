# Momentum (ColorLib "Action") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-momentum` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Action" — free Bootstrap 5 startup / landing
  template (source: https://colorlib.com/wp/template/action/). Listed in
  TEMPLATES.md under Bootstrap 5 (line 549); duplicate row at line 881
  (another category) — same template, ONE app only. Mark BOTH rows `[x]`
  after merge.
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/action/`.
  DOM fetched (`/tmp/action.html`, 23,478 bytes, title "Action — Free
  Bootstrap 5 Website Template by Colorlib") + stylesheet `css/style.css`
  (`/tmp/action-style.css`, 59,342 bytes) + TEMPLATES.md screenshot
  (`action-free-template.jpg`, AVIF, viewed in the browser at 1200×946).
- **Aesthetic:** dark, moody landing page. Hero = full-width photo of dried
  autumn leaves (brown/grey/beige texture) under a black overlay, with a
  huge white two-line headline and a purple/pink gradient pill CTA. Lower
  half of the page is black (`#000`/`#111`/`#222`) with giant white
  countdown numbers; only accent color anywhere is the purple
  `#743ad5` → pink `#d53a9d` gradient (buttons, pricing cards, hover
  fills). Body font Jost 400–700. **Source typo: the hero headline reads
  "New template Boostrap Five" — fix "Boostrap" → "Bootstrap" in the
  recreation.**
- **Sliders/menus are jQuery plugins in the source** (tiny-slider for
  testimonials with dot nav, AOS for hero fade-up, custom countdown timer,
  `js-clone-nav` clones the menu into the mobile slide-in panel) —
  implement with React state: a 3-slide testimonial carousel with 3 dots,
  a real countdown to a fixed future date, a shared menu data structure
  rendered in both the desktop nav and the mobile panel.
- **Fonts:** ONE Google family loaded via Cloudflare cf-fonts in the head:
  **Jost** (400 / 600 / 700) for everything — headings, body, nav, logo.
  Load via `<link>` in `index.html`.
- **Buttons:** `.btn-primary-gradient` = pill (radius 100px), uppercase,
  12px, letter-spacing `.2rem`, padding 17px 28px, white text; layered
  pill: `:before` = purple-pink gradient fill, `:after` = 2px inset
  interior that fades to transparent on hover (interior is `#000` default,
  `#fff` for `.btn-primary-gradient-white-bg` with black text, `#111` for
  `.btn-bg-darker`). `.btn-primary-outline.white` = transparent pill (30px
  radius, 1px `rgba(255,255,255,.2)` border, white text) used for "Buy",
  hover inverts to white bg + `#743ad5` text. `.btn-black` = `#222` bg,
  30px radius, white text, padding 14px 30px (Subscribe button).
- **Copy is lorem placeholder** (all paragraphs are the same few lorem
  snippets; testimonial quotes identical; role line "Product Marketer
  @Google" repeated on all three testimonials; team bios lorem) —
  paraphrase freely, keep the same kinds: nav (Home / Dropdown w/ submenu /
  Services / About / Contact Us), hero (headline + "A free template by
  Colorlib" + Read More), countdown ("Don't wait" / "Event Countdown" /
  Days/Hours/Minutes/Seconds / Get Started), services (Photography /
  Settings / Images / Layered), About ("Who we are" / "About us" / Get
  Started), pricing (Starter $49.99 / Basic $199.99 / Premium $975.99 /
  Buy), More Features (Creative / Design / Development), testimonials
  (People Says... / Jessica Smith, Craig Norton, Jessica Smith),
  team (Jessica Green CEO, Co-Founder / Jon Gold CTO, Co-Founder / Read
  bio), newsletter (Subscribe to Newsletter / Your name / Your email /
  Subscribe), footer (4 socials + copyright credit line).
- **DOM oddity:** the countdown's "We are sorry, Event ended!" alert is a
  hidden `.custom-alert` div — shown only when the timer expires. The
  `#clockdiv` initial values (39 / 27 / 51 / 51) are the jQuery start
  values; the live countdown targets a future date. The About-box image is
  pulled up with `margin-top: -100px` (`.img-overlap`) and the white box
  has `margin-bottom: -50px` — the box straddles the section boundary.
  The section-6 white testimonials box pulls up `-200px` over the black
  section and its bottom half is a `#111` `:before` (50% height, 30%
  mobile). Section-5 is a full-viewport bg-image section. Hero `.heading-2`
  is 90px / 60px / 40px responsive, `.heading` 80px / 60px / 40px.

## Structure (top → bottom, single page)

1. **Navbar** (`nav.site-nav`, `position: absolute; top: 0; z-index: 9;
width: 100%; padding: 20px 0` — transparent OVER the hero) — `a.logo`
   left (24px white wordmark "Action" → recreate "Momentum"); `ul.site-menu
.float-end` right: **Home** (active), **Dropdown** (`li.has-children`,
   icomoon caret; `ul.dropdown` white bg, shadow, black links, hover
   `#743ad5`, min-width 180px: Menu One / Menu Two (nested → Sub Menu
   One/Two/Three) / Menu Three), **Services**, **About**, **Contact Us**
   (white 14px, `rgba(255,255,255,.7)` hover white). Mobile: `a.burger
.light` (white 2px lines) toggles `div.site-mobile-menu` slide-in panel
   (fixed, `site-navbar-target`, close `.icofont-close`) with the cloned
   menu.
2. **Hero** (`div.hero.v-h-full.overlay`, bg `bg_hero.jpg` cover + `#000`
   fallback + `rgba(0,0,0,.4)` `:before`; `v-h-full` 100vh / min-height
   700px; mobile auto + `padding-top: 7rem`) — left col-lg-10 col-xxl-6:
   `h1.heading-2.text-white.mb-4` "New template Boostrap Five" (90px 700
   lh-1, AOS fade-up; fix typo) + `p.subheading.text-white.mb-5` "A free
   template by Colorlib" + `p` > `a.btn.btn-primary-gradient` "Read More".
3. **Event Countdown** (`div.section.section-2.js-countdown`, bg `#000`,
   padding 7rem 0) — centered kicker "Don't wait" (white) + `h2.heading`
   "Event Countdown" (80px white); `div.row.justify-content-between
.counter-wrap#clockdiv`: 4 × `col-6...col-lg-3.text-center` counters —
   `span.number.d-block` white 90px (40px mobile) Days 39 / Hours 27 /
   Minutes 51 / Seconds 51 + 12px uppercase `.2rem` labels
   `rgba(255,255,255,.3)` Days / Hours / Minutes / Seconds; hidden
   `.custom-alert` "We are sorry, Event ended!"; centered `a.btn
.btn-primary-gradient` "Get Started".
4. **Our Services** (`div.section.section-3`, bg `#efefef`,
   `padding-bottom: 0`) — kicker "Services" + `h2.heading` "Our Services";
   `div.row.features-wrap` (mb 12rem): 4 × `col-md-6 col-lg-4 col-xl-3`
   `div.feature` (padding 30px): `div.svg-wrap` 40px `#743ad5` Bootstrap
   Icon (camera / gear / image / layers → lucide Camera, Settings, Image,
   Layers) + `h3` 20px 700 (Photography / Settings / Images / Layered) +
   p; hover: gradient `:before` fill (radius 7px, shadow) + white text.
   Then `div.box-white.pt-5.p-md-5.mx-md-5` (white, z-2, `margin-bottom:
-50px`): left `div.text-wrap` (`margin-right: 200px` desktop): kicker
   "Who we are" + `h2.heading.mb-4` "About us" + 2 paragraphs +
   `a.btn.btn-primary-gradient-white-bg` "Get Started" (gradient ring,
   white interior, black text); right `img.img-fluid.img-overlap`
   (`margin-top: -100px`; mobile auto) — `image_big_2.jpg`.
5. **Pricing** (`div.section.section-4.section-pricing`, bg `#000`) —
   centered kicker "Prices for everyone" (white) + `h2.heading.text-white`
   "Pricing"; `div.col-lg-9.mx-auto` > `div.row.align-items-baseline`: 3 ×
   `div.col-lg-4` `div.pricing` (bg `#743ad5`, padding 40px, centered,
   radius 7px): `h3.mb-4` white 30px Starter / Basic (pt-4) / Premium +
   p `rgba(255,255,255,.5)` + `div.line` 1px `rgba(255,255,255,.2)` (margin
   40px 0) + `div.price.mb-4`: `span.currency` $ (16px, top -20px) +
   `span.price` 50px 700 (49 / 199 / 975) + `span.cents` .99 + `a.btn
.btn-primary-outline.white.px-5` "Buy" (hover invert).
6. **More Features** (`div.section-5.bg-image.overlay.v-h-full`, bg
   `bg_hero_2.jpg` + overlay, 100vh) — white kicker "Features" +
   `h2.heading.text-white` "More Features" + `p.text-white.mb-5`; 3 ×
   `div.col-lg-4` `div.feature.dark` (static `#222` bg via `:before`,
   radius 7px): `h3` white 400 (Creative / Design / Development) + p
   `rgba(255,255,255,.5)`; hover → gradient fill, p white.
7. **Testimonials + Team** (`div.section.section-6.half-overlay`, bg
   `#000`, `:before` bottom 50% (30% mobile) `#111`) — `div.box-white`
   (white, `margin-top: -200px`, padding 50px): kicker "Testimonials" +
   `h2.heading.mb-5` "People Says..." + `div.testimonial-wrap` (3-slide
   slider, dot nav `#efefef` → `#743ad5` active): blockquote + `div.bio-pic`
   (img 80px circle + `strong` name Jessica Smith / Craig Norton / Jessica
   Smith + `span` "Product Marketer @Google"). Below (second container, on
   `#111`): kicker "Team" (white) + `h2.heading.text-white` "Meet our
   team"; 2 × `div.col-lg-6` `div.team`: `img.img-fluid` (mb 50px) + `h3`
   30px white Jessica Green (CEO, Co-Founder) / Jon Gold (CTO, Co-Founder)
   - `p.position` `rgba(255,255,255,.3)` + p lorem
     `rgba(255,255,255,.5)` + `a.btn.btn-primary-gradient.btn-bg-darker`
     "Read bio".
8. **Newsletter** (`div.section.section-contact.m-md-5.px-md-5`, bg
   `#efefef`) — `h2` "Subscribe to Newsletter" + p + `form.form-contact`:
   3 × `col-sm-4...col-lg-4`: text input "Your name", email input "Your
   email" (transparent bg, `border-bottom: 1px solid #ccc`, radius 0) +
   `input[type=submit].btn.btn-black.btn-block` "Subscribe" (bg `#222`,
   30px radius).
9. **Footer** (`div.section.footer`, `container.text-center`) — `ul.social
.list-unstyled`: 4 × `a` 50×50 circle (bg `#efefef`, black icon; hover
   bg `#743ad5` white): facebook / twitter / linkedin / dribbble (inline
   SVG — lucide removed brand glyphs; dribbble has no lucide equivalent);
   copyright line: "Copyright © <year> All rights reserved | This template
   is made with ♥ by Colorlib" (credit kept per CC BY 3.0).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/momentum`; `npm install` at repo root; CNAME +
      homepage `momentum.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand purple `#743ad5`, brand pink
      `#d53a9d` (gradient to-right), black `#000`, `#111`, `#222`, light
      grey `#efefef`, ink `#212529`, muted white `rgba(255,255,255,.5)` /
      `.3`; Google Fonts `<link>` (Jost 400/600/700)
- [ ] `src/data.ts` — nav (5 top-level incl. dropdown w/ nested submenu),
      services (4), pricing (3), more-features (3), testimonials (3),
      team (2), socials (4), countdown target date
- [ ] Components: `Navbar` (absolute transparent, dropdown + nested
      submenu, white burger → mobile slide-in panel with close),
      `Hero` (bg image + overlay, 90px headline w/ typo fix, credit line,
      Read More pill), `Countdown` (4 live units + ended alert + Get
      Started), `Services` (4 hover-fill cards + overlapping white About
      box w/ img-overlap + Get Started white-interior pill), `Pricing`
      (3 purple cards + outline Buy pills), `MoreFeatures` (100vh bg +
      3 dark cards), `TestimonialsTeam` (white box pulled up -200px,
      3-slide carousel w/ dots, then team cards on #111 half),
      `Newsletter` (underline inputs + black Subscribe, validation),
      `Footer` (4 social circles + Component Dock credit)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (dropdown toggle, mobile nav toggle, carousel dot nav,
      countdown render, subscribe forms)
- [ ] Subject-screen picsum seeds (hero — dark texture/leaves-style;
      about 800×600; section-5 bg; 3 bio-pics 160×160; 2 team portraits
      600×750-class) — pixel metric + browser verify; pin seeds in PR
- [ ] `bash scripts/verify-app.sh momentum` green; PR with source, preview
      URL, tokens, deviations (React slider / dropdowns / countdown /
      Component Dock credit / typo fix); squash-merge immediately
- [ ] After merge: mark TEMPLATES.md Action rows at lines 549 AND 881
      `[x]` + surge URL; `npm run readme:status`

## Verification notes / pitfalls

- Desktop + mobile navs render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies the injected Tailwind CSS, so `hidden lg:flex`-style
  desktop nav lists are `display:none` and getByRole excludes them — query
  desktop-only links with `{ hidden: true }`; CSS `uppercase` does NOT
  change accessible names, query raw text ('Dropdown'), not 'DROPDOWN'.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- The countdown is a real timer in the source — implement with a fixed
  future target date and fake timers in tests (`vi.useFakeTimers()` +
  `act()`); assert labels and structure, not exact ticking values.
- The layered gradient pill (`.btn-primary-gradient`) needs TWO layers:
  outer gradient + inset interior that fades on hover — implement with
  Tailwind (e.g. a `before` gradient layer + `after` interior layer) or
  two absolutely positioned spans; the `-white-bg` and `-darker` variants
  change only the interior color.
- Hero headline typo: the source says "New template Boostrap Five" —
  recreate as corrected copy (e.g. "New Template" / "Bootstrap Five"),
  NOT the misspelling.
- No `tel:` literals anywhere (secret-scan rewrites them) — none in the
  source, keep it that way.
- The footer newsletter form posts nowhere in the source — implement as a
  local form (submit → success message pattern per conventions; assert
  input unmounts on success with `queryByLabelText`).
- Social icons: lucide-react removed brand icons — inline SVG paths for
  facebook / twitter / linkedin / dribbble (dribbble is not in lucide at
  all — inline SVG only).
- `.feature.dark` cards are static `#222` until hover (unlike the light
  `.feature` cards which are transparent until hover) — keep the dark
  cards visibly dark at rest, gradient on hover.
- The countdown values in the static HTML (39/27/51/51) are only the
  initial jQuery values — tests should not hardcode a ticking assertion;
  use a mocked/fixed target date.
- The `.box-white` overlap (`margin-bottom: -50px`) and `.img-overlap`
  (`margin-top: -100px`) and section-6 box pull-up (`-200px`) are the
  signature layout moves — approximate with negative margins; tests assert
  order + labels, not exact overlap.
