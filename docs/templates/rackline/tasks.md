# Rackline — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/rackline`
> (<https://rackline.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Server"** (source slug `server` — the Web Hosting
family's **lime-and-slate data-centre** page: a white utility bar (wordmark +
support/e-mail/live-chat blocks) over a flat `#343a40` nav strip whose links are
dim white with a white active state and whose right side pairs a lime-bordered
"Register" with a lime-filled "Login", a **600 px** server-room photo hero with a
`rgba(0,0,0,.4)` wash that slides between two centred 80 px/300 white headlines
("Affordable Domains" + a price sub-line / "24/7 Customer Support") each with a
lime square action beside a white-outline one, a `#f8f9fa` band of **three white
`1px #dee2e6`-bordered shadowed plan cards** (64 px lime icon, plan name, "plans
start at $…/month", lime "View Details"), a second **600 px** photo band with a
left-aligned "Satisfied Clients" headline, a rating line and a lime action, a
white band of **six white `2px #e6e6e6` icon cards** (59×68 lime-stroked inline
SVG) whose **whole surface floods `#7cbd1e`** on hover with white type, a
`#f8f9fa` **four-slide testimonial carousel** (90 px circle avatars, 18 px/300
names, uppercase grey roles, 8 px dots with a lime active one), and a `#393e46`
footer with **three link columns + Europe/USA office blocks** and a centred
running-year credit).
Type is **Nunito Sans**; the shape language is **square corners** (0 radius)
everywhere except the avatar circles and carousel dots; the only shadows are the
plan cards, the dropdown and the off-canvas panel.
Preview: `https://preview.colorlib.com/theme/server/` (HTTP 200, 36,720 B;
`css/style.css` 26,987 B; `css/bootstrap.min.css` 36,889 B — Bootstrap 4.1.3 with
`--primary: #7cbd1e`; `fonts/icomoon/style.css` 79,820 B, never copied).
Screenshot: `server-free-template.jpg` (JPEG 1200×946, 151,368 B).

Spec: `openspec/specs/template-rackline/spec.md`. New name: **rackline** (never
reuse the source slug `server`, the name "Server", its cube logo glyph, its
`hero_bg_*`/`person_*` photos or its copy verbatim). Design notes:
`docs/templates/rackline/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/rackline`
- [ ] Rename package to `@free-react-templates/rackline`; set
      `"homepage": "https://rackline.free.componentdock.com"`
- [ ] `public/CNAME` = `rackline.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/rackline`
      (`grep -c "free-react-templates/rackline" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app)
- [ ] Google Fonts `<link>` in `index.html`: **Nunito Sans
      `wght@200;300;400;500;700;900`**
      (`https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;500;700;900&display=swap`)
      — no icon font: icons come from `lucide-react`
- [ ] `@theme` tokens in `src/index.css`: `--color-lime: #7cbd1e`,
      `--color-slate-nav: #343a40`, `--color-surface: #ffffff`,
      `--color-surface-soft: #f8f9fa`, `--color-footer: #393e46`,
      `--color-ink: #000000`, `--color-body: #4d4d4d`,
      `--color-muted: #b3b3b3`, `--color-muted-alt: #adb5bd`,
      `--color-line: #dee2e6`, `--color-line-strong: #e6e6e6`,
      `--color-line-soft: #edf0f5`, `--color-dot: #cccccc`,
      `--color-veil: rgba(0,0,0,0.4)`, radius `0` (only the 90 px avatar and the
      8 px carousel dots are `50%`), font Nunito Sans, the three measured shadows

## Spec + TDD

- [ ] Re-read `openspec/specs/template-rackline/spec.md` and mirror every
      scenario as a failing test first (RED), then implement (GREEN)
- [ ] Components under `src/components/`: `UtilityBar`, `Navbar`
      (+ `HostingDropdown`, `MobileMenu`), `HeroSlider` (+ `HeroSlide`),
      `PlanRow` (+ `PlanCard`), `RatingBand`, `ReasonGrid` (+ `ReasonCard` +
      `ReasonIcon` SVG), `Testimonials` (+ `TestimonialSlide`, `CarouselDots`),
      `Footer` (+ `FooterLinkColumns`, `OfficeBlock`)
- [ ] Reuse `packages/ui` (`Button` / `ButtonLink` / `cn()`) for the lime and
      outline actions; variant maps typed
      `Record<Variant, string>`; no new dependencies

## Implementation notes (measured from the live reference)

Header stack (148 px total, both bars full-bleed and flat):

- [ ] Utility bar: **white**, **72 px**, container `padding:8px 15px`; left
      `lg`-2/12 column = decorative icon tile + wordmark at **`2rem`/200 `#000`**;
      right `lg`-10/12 = right-aligned inline list at **0.8rem (12.8 px)** with
      three blocks (icon 20–32 px `#000` + uppercase `#adb5bd` label over an
      `h6`-sized value): 24/7 Support `1-800-200-3911` (`tel:`), Email
      `mail@domain.com` (`mailto:`), Live Chat `Chat With Us Now`; below `lg`
      hide the label/value column (`d-none d-lg-block`) and drop the glyphs to
      **20 px** at ≤991.98 px
- [ ] Nav strip: **`#343a40`**, **75 px**, container `padding:4px 15px`; five
      links **16 px/400 `rgba(255,255,255,.6)`** (active/hover **white**),
      `letter-spacing:.05em`, `li{padding:10px 5px}`, `a{padding:10px 10px}`;
      right side two square actions `padding:8px 24px` — outlined
      (`1px solid #7cbd1e`, transparent, white, ≈110×42) and lime-filled
      (≈90×42, white) — with `focus-visible` rings
- [ ] `Hosting` dropdown: white panel `top:100%`, `margin-top:20px` → `0` on
      hover/focus, `padding:10px 0`, `box-shadow:0 2px 10px -2px rgba(0,0,0,.25)`,
      `border-left/right/bottom:1px solid #edf0f5`, 10 px white `arrow-top`
      triangle at `left:20%`; rows `min-width:200px`, `padding:5px 20px`,
      `#343a40` → **`#7cbd1e`** hover; four hosting kinds + nested sub-menu panel
      at `left:100%; top:0` (three items); keyboard: open on
      `Enter`/`Space`/`ArrowDown`, close on `Escape` with focus return, close on
      focus-out; trigger carries a chevron and `aria-expanded`
- [ ] Mobile (below `lg`): 28 px hamburger glyph on a transparent control;
      off-canvas panel **300 px white** from `right` (`translateX(110%)` → `0`,
      `.3s ease-in-out`, `padding-top:20px`,
      `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`) over a
      `rgba(0,0,0,.6)` veil; panel header `padding:0 20px` with a floated 30 px
      close glyph (hover `#25262a`); body `padding:20px`,
      `height:calc(100vh - 52px)`, `padding-bottom:150px`; links
      `padding:10px 20px` — 20 px top level, 16 px at `padding-left:40px` /
      `60px`, `#212529` → lime hover, active lime; 36×36 round collapse control
      (`right:0; top:10px`, hover `#f8f9fa`) whose glyph rotates 180°; trap focus
      and return it to the hamburger on close
- [ ] Hero slider: band
      `min-height:600px; height:calc(40vh)` (600 px wins on desktop),
      `background-size:cover; background-repeat:no-repeat;
      background-position:top`, `rgba(0,0,0,.4)` overlay, own picsum photo per
      slide (`rackline-hero-1` / `rackline-hero-2`, 1920×1080); centred
      `col-md-10`: `h1` **80 px/300 white** (`line-height:1.2`; `3rem` below
      768 px) + optional `p` **24 px white** (`line-height:1.5`), then
      `Download`-style lime action (**padding:16px 48px**, ≈173×58) and
      `Get In Touch`-style transparent white-bordered action (≈188×58); slide 1
      has headline + sub-line + buttons, slide 2 headline + buttons only
- [ ] Hero controls: square **50 px** translucent buttons
      (`background:rgba(0,0,0,.2)` → `black`, 25 px white chevrons,
      `position:absolute; top:50%; transform:translateY(-50%)`), previous at
      `left:10px`, next at the right edge, labelled, keyboard operable, no
      auto-advance under `prefers-reduced-motion`
- [ ] Plan row: `#f8f9fa`, `padding:112px 0` (**48 px** ≤768 px), centred
      **32 px/500 `#4d4d4d`** question headline in a block with a 48 px bottom
      margin; three `col-md-6 col-lg-4` cards — white, `1px solid #dee2e6`,
      `padding:48px 0`, `box-shadow:0 5px 20px -5px rgba(0,0,0,.2)`
      (**350×356** at `lg`) — each: 64 px **lime** icon, **24 px/500 `#000`**
      name, `#adb5bd` price line, lime action **≈141×42**
      (`padding:8px 24px`, radius 0); AOS-style reveal with 100/200/300 ms
      stagger (IntersectionObserver is enough)
- [ ] Rating band: second **600 px** photo band (picsum seed `rackline-band`)
      with the same `rgba(0,0,0,.4)` overlay, **left-aligned** `col-md-7`:
      80 px/300 white headline, 24 px white rating line with a 48 px bottom
      margin, one lime action (≈173×58); keep a solid dark fill under the photo
      so the white type stays ≥4.5:1 if the image fails
- [ ] Reason grid: white, `padding:112px 0` (**48 px** ≤768 px), centred
      **32 px/500** headline; six `col-md-6 col-lg-4` cards (`padding:30px`,
      `border:2px solid #e6e6e6`, **350×246**) each with a **59×68** icon column
      (`flex:0 0 59px`) holding an **own inline SVG stroked `#7cbd1e`**
      (`stroke-width:2px`) under a 32 px glyph, a **20 px/500 `#4d4d4d`** title
      and `#b3b3b3` copy
- [ ] Reason-card hover/focus: full-surface `#7cbd1e` layer `scale(1.07)` →
      `scale(1)` with `opacity 0` → `1`, card border → `transparent`, heading +
      copy + glyph + SVG stroke → **white**, all in `.3s`; keep the content
      `z-index` above the fill, expose the same state on focus, and never hide
      content in the resting state
- [ ] Testimonials: `#f8f9fa`, `padding:112px 0` (**48 px** ≤768 px), centred
      **32 px/500** title; carousel of **four** centred slides (measured
      **525 px** at `lg`, one per view below `lg`), each: **90 px circular**
      avatar (picsum `rackline-avatar-<n>`), **18 px/300 `#000`** name,
      **uppercase `#b3b3b3`** role (`margin:0 0 20px`), quote at **17.6 px**
      (`1.1rem`, `line-height:1.7`); four distinct people (do not copy the
      source's two repeated twice)
- [ ] Carousel chrome: **8 px circular** dots 10 px apart (`#cccccc`, active
      **`#7cbd1e`**) plus 30 px prev/next arrows inset 50 px from the band edges
      (`opacity:.2` → `1` on hover, hidden while disabled); real buttons with
      accessible names, active dot exposed to assistive tech, no auto-advance
      under `prefers-reduced-motion`
- [ ] Footer: `#393e46`, `padding:112px 0`, copy `rgba(255,255,255,.4)`, links
      `rgba(255,255,255,.7)` → `#fff`, `ul li{margin-bottom:10px}`; left
      `col-lg-7` = three `col-6 col-md-4` columns (18 px/500 white `mb-4`
      headings + six-link lists with **distinct** link sets); right `col-lg-5` =
      **Europe** and **USA** blocks, each a full-width heading, a `col-md-6`
      street address and a `col-md-6` `tel:`/`mailto:` pair; closing centred
      credit row `padding-top:48px; margin-top:48px` with a
      **computed current year** and the Component Dock link
- [ ] Rules/edges: **no `border-radius` anywhere** except the 90 px avatar
      circles and the 8 px carousel dots; shadows limited to the three measured
      ones (card, dropdown, off-canvas panel); keep `#dee2e6` (card border) and
      `#e6e6e6` (reason-card border) as **two** tokens and `#b3b3b3` /
      `#adb5bd` as **two** muted greys, matching the reference
- [ ] Motion: short `opacity` fade-in for reveals (content always in the DOM —
      `opacity` only, never `display:none`/`visibility:hidden` once mounted) and
      a small scroll-parallax offset on the two photo bands; both off under
      `prefers-reduced-motion: reduce`
- [ ] `scroll-margin-top` (~148 px, 75 px on mobile) on every anchor target so
      sections clear the sticky header

## Verification

- [ ] `npm run spec:validate` (passes now — re-run after any spec edit)
- [ ] `scripts/verify-app.sh rackline` — typecheck + lint + knip + fallow +
      vitest at 100 % coverage + build
- [ ] Screenshot comparison against `server-free-template.jpg` (JPEG 1200×946):
      white utility bar with the stacked-layers glyph + black wordmark and three
      icon blocks (uppercase grey labels), flat `#343a40` nav (white active
      "Home", dim links, chevron on "Hosting", white-outlined "Register" beside
      a lime "Login"), 600 px server-room hero under a black 40 % wash with a
      centred white 80 px/300 headline, a smaller white line and a lime action
      beside a white-outline action, round translucent chevron arrows on both
      edges
- [ ] Token audit: `#7cbd1e` appears only as the `@theme` lime token and its
      uses; `#5f9117`, `#e6e7e9`, `#2c3640`, `#3e4955`, `#a6a6a6` do **not**
      appear anywhere; `#343a40` / `#f8f9fa` / `#393e46` /
      `#4d4d4d` / `#b3b3b3` / `#adb5bd` / `#e6e6e6` / `#dee2e6` match the table
- [ ] Zero `colorlib` / "Server" / `server` provenance references anywhere in
      `apps/rackline` (comments included — record the palette as design notes)
- [ ] No copied assets: no `hero_bg_*.jpg`, no `person_*.jpg`, no icomoon /
      flaticon / fl-bigmug icon fonts, no Bootstrap / OwlCarousel / stellar /
      AOS / magnific-popup CSS or JS, no jQuery, no Analytics snippet; photos
      from picsum, icons from `lucide-react`, artwork drawn as own SVG
- [ ] Accessibility pass: keyboard-only walk through the dropdown, off-canvas
      panel, slider and carousel; icon-only controls named; contrast ≥4.5:1 on
      the photo bands; reduced-motion disables reveals, parallax and autoplay
- [ ] Footer links `https://www.componentdock.com/` exactly once and renders the
      current year
- [ ] PR description includes: source template (ColorLib Server), preview URL
      (`https://preview.colorlib.com/theme/server/` → HTTP 200, 36,720 B;
      `css/style.css` 26,987 B; `css/bootstrap.min.css` 36,889 B, Bootstrap
      4.1.3 with `--primary: #7cbd1e`), the design tokens used (lime `#7cbd1e`,
      nav `#343a40`, bands `#f8f9fa`, footer `#393e46`, text
      `#4d4d4d`/`#b3b3b3`/`#adb5bd`/`#000`, veil `rgba(0,0,0,.4)`, 0 radii
      except the 90 px avatars and 8 px dots, Nunito Sans, `padding:7em 0`
      sections, two 600 px photo bands), the measured structure (148 px header
      stack, 2-slide hero, 3 plan cards 350×356, 600 px rating band, 6 reason
      cards 350×246 with the lime hover wash, 4-slide carousel at 525 px,
      `#393e46` footer with three columns + two offices, page ≈4,207 px) and what
      differs (new name, own photos/icons/copy, lucide icons instead of
      icomoon/fl-bigmug/flaticon glyphs, own SVG stroke artwork, own parallax and
      reveal hooks instead of stellar/AOS, distinct footer link sets, four
      distinct testimonial people, added keyboard/aria states, reduced-motion
      handling, Component Dock attribution)
