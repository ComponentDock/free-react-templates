# Trek (ColorLib "Trips") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-trek` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Trips" — free travel website template (source:
  https://colorlib.com/wp/template/trips/). Listed in TEMPLATES.md under
  **Bootstrap (216)** at line 520; duplicate rows at line 1209 under
  **Business (365)** and line 3010 under **Travel (44)** — same
  template, ONE app only. Mark ALL THREE rows `[x]` after merge.
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/trips/`. DOM fetched
  (`/tmp/prep-trips/preview.html`, 24,969 bytes, title "Trips —
  Website Template by Colorlib") + stylesheet `css/style.css`
  (`/tmp/prep-trips/style.css`, 24,783 bytes — the real token source) +
  `css/bootstrap.min.css` (RE-COMPILED with the theme's sand
  `$primary`; `btn-primary{background-color:#efba6c}` and
  `bg-primary{background-color:#efba6c!important}` verified by grep) +
  TEMPLATES.md screenshot (`trips-free-template.jpg`, AVIF → viewed in
  browser at 1200×946: white header with orange mountain-peak logo +
  "TRIPS" wordmark, hikers-on-cliff hero, ghost "STORY" backdrop).
  ALSO: browser computed-style pass on the LIVE preview to resolve the
  footer color question (see pitfall below).
- **Aesthetic:** clean light travel design on white/`#f6f5f5`. ONE
  accent: warm sand `#efba6c` (Bootstrap $primary — buttons, price
  pills, testimonial cards, nav hover/active, subtitle labels, CTA
  wash, input focus borders). Body text `#364d59` weight 300. Section
  headings = giant faint grey ghost word (5rem, 900, uppercase,
  `#efefef`) + small sand uppercase label + black h3. Footer is LIGHT
  `#f6f5f5`. Navbar is WHITE and STATIC (not fixed/transparent).
- **Fonts:** Google **Work Sans** — body 300, 1rem, lh 1.7; headings
  h1 3rem weight 900 (hero), h2s 18–22px, h3 default (1.75rem).
  Load via `<link>` in `index.html`.
- **Buttons:** `.btn` — .8rem UPPERCASE, letter-spacing .2rem, padding
  10px 20px, radius 4px (Bootstrap 4 default). `.btn-primary` sand;
  the CTA adds `py-3 px-4` + `text-white`.
- **Copy is placeholder/Lorem:** hero p, story paragraphs (2), journey
  titles ("Dignissimos debitis" / "Consectetur adipisicing" ×2 /
  "Temporibus aperiam" / "Expedita fugiat" / "Consectetur Amet"), team
  bios (identical ×3), 4 testimonials (identical quote + "John Doe"
  ×4), blog titles (identical ×3) + "July 17, 2019 by Admin" ×3 +
  identical excerpts, CTA p. Paraphrase freely, VARY repeats, keep the
  kinds. Keep the six PRICES ($200.00 / $390.00 / $180.00 / $600.00 /
  $330.00 / $450.00).
- **DOM oddities:** (1) the footer markup says `site-footer bg-light`
  and style.css has a DEAD `.site-footer { background:#efba6c }` rule
  — the `.bg-light { background-color:#f6f5f5 !important }` override
  WINS (verified via computed style `rgb(246,245,245)`): the footer is
  LIGHT, not sand. Implement light `#f6f5f5`; (2) the Get In Touch
  button gets its sand from the recompiled bootstrap
  (`btn-primary`), not from style.css; (3) testimonial owl-carousel
  loops 4 slides to 12 DOM nodes — 4 real testimonials; (4) nav has no
  dropdowns (flat 5 links); (5) hero + CTA share the same photo
  (`images/hero_1.jpg`); (6) ghost backdrop words differ per section
  (Story / Journey / Our Team / Testimonials / Blog — "Journey" is
  BOTH backdrop and label); (7) hero play button is a Vimeo fancybox
  link — render decorative; (8) logo is an image (73px) — render an
  inline SVG mountain-peak mark + uppercase wordmark instead.

## Structure (top → bottom, single page)

1. **Navbar** (`.site-navbar`, WHITE, STATIC, padding 1rem / 3rem
   mobile) — logo left (inline SVG mountain-peak mark + "TREK"
   uppercase wordmark, font-size 1.7rem); right nav (`.site-menu`,
   links `#000`, margin 15px, padding 20px 0, hover + active sand):
   Home (active) / About / Trips / Blog / Contact; mobile: hamburger
   (lucide Menu) → 300px right off-canvas drawer (`.site-mobile-menu`,
   close X icon) with the same links.
2. **Hero** (`.site-section-cover.overlay`, photo bg + `:before`
   `rgba(0,0,0,0.3)`; height `calc(100vh - 196px)` min 677px, 60vh/600px
   mobile; row align-items-center) — col-md-5: h1 (3rem / 2rem mobile,
   white, weight 900, lh 1, mb-3) "Let's Enjoy The Wonders of Nature" +
   p (15px white) + play row: 60px circle (1px white border,
   `rgba(255,255,255,0.1)` bg, white Play icon; hover white bg + black
   icon) + "Watch the video" small.
3. **Our Story** (`.site-section py-5`, white) — row: col-md-6
   heading (LEFT-aligned: backdrop "Story" + sand 14px uppercase
   "Discover Story" label + h3 "Our Story") + 2 paragraphs; col-md-6:
   hiking photo.
4. **Journey** (`.site-section`, white, padding 7rem/3rem) — centered
   heading (backdrop "Journey" + label "Journey" + h3 "Your Journey
   Starts Here"); row of 6 `.listing-item` cards (col-lg-4, 2-up
   tablet, 1-up mobile): photo + bottom-up gradient overlay
   (transparent → `rgba(255,255,255,0.31)` 47% → `rgba(0,0,0,0.65)`),
   img `object-fit:cover` scale(1.05) → scale(1) hover; content
   absolute bottom 20px centered: sand price pill (radius 30px, 12px
   uppercase, letter-spacing .2em, padding 5px 30px, white) + h2 18px
   white title link. Vary the lorem titles, keep prices.
5. **Our Team** (`.site-section`) — centered heading (backdrop "Our
   Team" + "Amazing Staff" + "Meet Our Team"); 3 `.person-29191`
   cards (col-lg-4, text-center): photo (mb-4) + h2 18px name + p
   `.caption` "Staff" (14px uppercase `#888`, mb-4) + bio p + 3 social
   icon links (facebook / instagram / twitter — inline SVG, lucide has
   no brand icons). Names: John Doe / Jean Doe / Claire Dormey (keep
   or rename).
6. **Testimonials** (`.site-section`) — centered heading (backdrop
   "Testimonials" + "Testimony" + "Happy Customers"); owl carousel →
   React carousel (arrows + dots) of 4 `.testimonial-39191` cards
   (d-flex, SAND bg `#efba6c`, padding 50px, 20px text, mb-30,
   decorative offset-square `:after` at bottom/right -20px): `mr-4`
   photo + blockquote + "— John Doe" (vary authors).
7. **Our Blog** (`.site-section`) — centered heading (backdrop "Blog"
   - "Updates" + "Our Blog"); 3 `.post-entry-1` cards (col-lg-4):
     photo link + `.post-entry-1-contents` (white bg, padding 20px): h2
     22px (mb 20, link black, hover sand) + `.meta` (13px uppercase
     `#ccc`, letter-spacing .1em: "July 17, 2019 by Admin") + excerpt p.
     Vary titles/excerpts.
8. **CTA band** (`.site-section.bg-image.overlay`, photo bg + SAND
   wash `rgba(239,186,108,0.4)` via `:after`, background-attachment
   fixed) — centered col-md-7: h2 bold white "Join and Trip With Us" +
   p white + `.btn.btn-primary.text-white.py-3.px-4` "Get In Touch".
9. **Footer** (`.site-footer.bg-light`, bg `#f6f5f5`, padding 4em 0 /
   8em md, text `#364d59`) — row: col-lg-3 `.footer-heading`
   "Instagram" (16px) + 3×2 grid of 6 square thumbs; col-lg-8 row →
   col-lg-6 `.footer-heading` "Quick Links" (5 links: About Us /
   Testimonials / Terms of Service / Privacy / Contact Us, li mb-10)
   - col-lg-6 `.footer-heading` "Newsletter" (p + form.d-flex:
     55px white input with sand focus border + sand "Send" btn);
     `.border-top` divider + copyright bar: "Copyright © <year> All
     rights reserved | This template is made with ♥ by **Component
     Dock**" → https://www.componentdock.com/ (replaces Colorlib credit,
     NO ColorLib credit).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/trek`; `npm install` at repo root; CNAME +
      homepage `trek.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: sand `#efba6c`, body `#364d59`,
      ink `#000000`, ghost `#efefef`, soft `#f6f5f5`, meta `#ccc`,
      caption `#888`; Google Fonts `<link>` (Work Sans 300/400/700/900)
- [ ] `src/data.ts` — nav (5 links), hero, story (2 paragraphs), trips
      (6: price + title), team (3: name/caption/bio/socials),
      testimonials (4: quote + author), blog (3: title/meta/excerpt),
      CTA, footer (quick links 5 / instagram 6)
- [ ] Components: `Navbar` (static white + mobile drawer), `Hero`
      (play button decorative), `Story`, `Journey` (6 cards +
      hover zoom), `Team`, `Testimonials` (carousel state),
      `Blog`, `CtaBand`, `Footer` (instagram grid + newsletter +
      Component Dock credit)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (mobile drawer open/close, testimonial carousel
      next/prev, newsletter submit — assert input unmounts via
      `queryByLabelText` if the form swaps to a success message)
- [ ] Subject-screen picsum seeds (hero + CTA wide nature, journey 1–6,
      story photo, team 1–3 portraits, testimonial 1–4 square, blog
      1–3, instagram 1–6 square) — pixel metric + browser verify; pin
      seeds in PR
- [ ] `bash scripts/verify-app.sh trek` green; PR with source, preview
      URL, tokens, deviations (React carousel / mobile drawer /
      decorative play button / inline SVG logo + brand icons /
      Component Dock credit); squash-merge immediately
- [ ] After merge: mark ALL THREE TEMPLATES.md Trips rows `[x]` + surge
      URL (lines 520, 1209, 3010 — Bootstrap 216 / Business 365 /
      Travel 44); `npm run readme:status`

## Verification notes / pitfalls

- Desktop + mobile navs render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies the injected Tailwind CSS, so `hidden lg:flex` desktop
  nav lists are `display:none` and getByRole excludes them — query
  desktop-only links with `{ hidden: true }`; CSS `uppercase` does NOT
  change accessible names — query the RAW text.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- lucide-react REMOVED brand icons (Facebook/Instagram/Twitter →
  undefined) — verify exports with `node -e "console.log(typeof
require('lucide-react').Instagram)"`; use inline SVG brand paths
  (simple-icons) for team socials, lucide for Menu/X/Play/chevrons.
- FOOTER COLOR TRAP: the source's `.site-footer{background:#efba6c}`
  is dead code — `.bg-light{background:#f6f5f5 !important}` wins
  (verified via computed style). Ship the footer LIGHT `#f6f5f5`, not
  sand. Sand lives on: buttons, price pills, testimonial cards, CTA
  wash, nav hover/active, subtitle labels, input focus borders.
- Ghost backdrop text: absolute span at z-index -1 (behind), 5rem,
  weight 900, uppercase, `#efefef`, line-height 1, top -20% relative
  to the heading block; `text-center` variant centered via
  translateX(-50%). Keep it non-interactive (aria-hidden or plain
  decorative span).
- Testimonial carousel: 4 real slides (owl loops to 12 DOM nodes) —
  a state-indexed carousel with prev/next + dots, or a 2-up grid
  below lg, is faithful.
- The hero play button + "Watch the video" opens Vimeo in the source
  — decorative button (no popup) is fine; keep the hover (white bg,
  black icon).
- Blog meta is `#ccc` 13px uppercase with letter-spacing .1em — the
  "by Admin" author link keeps the same grey.
- The CTA band uses `background-attachment: fixed` on the photo —
  optional in Tailwind (fixed attachment is buggy on mobile); the
  sand wash `rgba(239,186,108,0.4)` is the fidelity-critical part.
- No `tel:` literals anywhere (no phone in this template).
- Cards/images keep Bootstrap's 4px radius where the source has it
  (buttons, inputs); price pills are radius 30px; testimonial cards
  have NO radius (padding 50px sand blocks).
- The source repeats copy everywhere (4 identical quotes, 3 identical
  blog titles/excerpts, 3 identical team bios, journey titles all
  lorem) — vary text, keep prices and structure.
