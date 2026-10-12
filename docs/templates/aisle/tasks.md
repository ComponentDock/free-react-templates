# Aisle — implementation tasks

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-aisle`. Nothing here is marked `[~]`/`[x]` by prep.

Recreation of ColorLib **"Wedding2"** (source slug `wedding2`, TEMPLATES.md line
**3107**, `## Wedding` section) — a **script-and-serif wedding "Save the Date"
one-pager**: a transparent floating header whose wordmark is a white cursive
script and whose menu is tracked capitals, a **`100vh` photo hero** (clasped
hands, rings, peach rose, wristwatch) under a `rgba(0,0,0,.3)` scrim with a tie
glyph, a letter-spaced date line, "Save The Date" and the names in **giant
`Playball` script** with a rose heart between them, a white **"Our Story" band**
carrying a faint concentric-circle ornament and an ornamental divider (two 60 px
`#aaa` rules + rose star), a **photo countdown band** with four **120 px outlined
circles** for days/hours/minutes/seconds, a **central-spine timeline** of four
alternating detail cards (ceremony · toast & dinner · wedding cake ·
photography) with 56 px rose icons and 18 px dots, a second photo **CTA band**
with a two-bar animated rose underline, a **six-tile gallery** with a lightbox,
a **50/50 contact split** (Playball "Contact Us", 2 em rose phone, map panel),
and a newsletter footer (400×55 pill field + **55×55 circular `#E55D73` submit**,
five socials, five tracked links).

Fonts: **`Playball`** (display/script) + **`Bitter`** (body). Brand:
**rose `#E45F74`**, second rose `#E55D73` on the newsletter button, near-black
`#333`/`#555` text on white, `#aaa`/`#ccc` rules.

Preview: `https://preview.colorlib.com/theme/wedding2/` (**HTTP 200**, 14,477 B,
`<title>TITLE</title>` — the source's unrendered placeholder). Stylesheets
`01-homepage/css/styles.css` (HTTP 200, 12,286 B) and
`01-homepage/css/responsive.css` (HTTP 200, 4,147 B) were tokenized; the page
also loads `common-css/bootstrap.css`, `common-css/font-icon.css` (its icon
font) and `common-css/fluidbox.min.css` (gallery lightbox). Screenshot
`wedding2-free-template.jpg` (HTTP 200, 113,016 B, **AVIF** despite the `.jpg`
name, 1200×946 — re-measured 2026-10-12; the 892 first recorded came from the
`ffmpeg` conversion, not the file → converted to PNG and inspected). Full
research:
`docs/templates/aisle/design-notes.md`.

**Host layer (NOT the theme, measured 2026-10-12):** the served preview's
`<head>` opens with the host's `<meta name="robots" content="noindex, nofollow">`
+ `<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">` pair and the
response carries `x-robots-tag: noindex, nofollow`, behind the host's own
`robots.txt` (`User-agent: *` / `Disallow: /`). The theme's own head starts below
that pair; none of it goes into `apps/aisle` (no `noindex`, no `robots.txt`, no
`dns-prefetch`, no `cdnjs`).

Spec: `openspec/specs/template-aisle/spec.md`. New name: **aisle** (the wedding
aisle — single lowercase word; no `apps/`, `openspec/specs/`, `docs/templates/`
or TEMPLATES.md collision; wedding names already taken: altar · matrimony ·
affiance · betrothal · celebrant · trousseau · paperie · wedlock · nuptia ·
nuptials · troth · espousal). Never reuse the source slug `wedding2`, its
placeholder logo images, its photos, the names "Jenny"/"Mark", the strings
"Save The Date" / "23 SETPEMBER 2017" (note the source's typo), the lorem
paragraph, the address, the phone number, its Google Maps key or the string
`Colorlib`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/aisle`
- [ ] Rename package to `@free-react-templates/aisle`; set
      `"homepage": "https://aisle.free.componentdock.com"`
- [ ] `public/CNAME` = `aisle.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/aisle`
      (`grep -c "free-react-templates/aisle" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Document head in `index.html`: the app's **own** `<title>` (the reference's
      is the unrendered `TITLE`), description and favicon — and none of the
      preview host's layer (the injected `<meta name="robots"
      content="noindex, nofollow">` + `<link rel="dns-prefetch"
      href="https://cdnjs.cloudflare.com">` pair, `x-robots-tag`, `cdnjs`, the
      host `robots.txt`)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Bitter:wght@400;500&family=Playball&display=swap`
      (Playball 400 = every script heading and both logos; Bitter 400/500 =
      body, nav, buttons, forms, footer)
- [ ] Icons: `lucide-react` — `Menu`, `X`, `ChevronDown`, `ChevronRight`,
      `Heart`, `Ribbon`/`Gem` (tie/bow glyph), `Star` (section ornaments),
      `Church`, `Wine`, `Cake`, `Camera`, `Phone`, `MapPin`, `Send`/`ArrowRight`,
      plus the lightbox's `ChevronLeft`/`ChevronRight`. The four social brand marks
      (`Facebook`, `Twitter`, `Instagram`, `Pinterest`) are **inline SVG** —
      lucide-react exports no brand icons
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #E45F74`,
      `--color-brand-2: #E55D73`, `--color-ink: #333`, `--color-copy: #555`,
      `--color-rule: #aaa`, `--color-spine: #ccc`, `--color-panel: #333`,
      `--color-panel-rule: #444`, `--color-scrim: rgba(0,0,0,.3)`,
      `--shadow-contact: 1px 10px 40px rgba(0,0,0,.4)`,
      `--shadow-pill: 1px 10px 30px rgba(0,0,0,.2)`,
      `--shadow-pill-focus: 1px 15px 30px rgba(0,0,0,.3)`;
      `--font-display: "Playball", cursive`, `--font-serif: "Bitter", serif`;
      radii: `1px` buttons, `2px` nav items, `20px` dots, `9999px` pills/circles
- [ ] Own decorative assets: faint concentric-ring pattern (CSS
      `repeating-radial-gradient` or an inline SVG data-URI at ~80 % opacity)
      behind the story band and the footer; static map placeholder illustration
      (no API key, no third-party script)
- [ ] Sanity pass at 320 / 767 / 992 / 1440 px for horizontal overflow (the
      `100vh` hero and the 50/50 contact split are the risky parts)

## Header (`Header`) (TDD)

- [ ] Red: asserts an **absolutely positioned floating bar**
      (`top:20px`, full width, `z-index` above the hero, `rgba(255,255,255,.2)`
      hairline bottom rule, `font-size:.95em`, white), the **Aisle** wordmark
      rendered in `Playball` white in a 40 px-tall logo block, five tracked
      capital links — Home · Our Story · The Wedding · Gallery · RSVP — at
      15 px/500 white in 50 px-tall items (`padding:0 15px`,
      `border:2px solid transparent`, 2 px radius) with a **`#E45F74` hover
      border**, and no source spelling slips ("SETPEMBER"/"THER WEDDING"/
      "GELLERY") anywhere
- [ ] Green: `<Header />` — absolute overlay header (no layout space), in-page
      anchors, `aria-current` on the active item, focus-visible rings
- [ ] Guard: assert `Our Story` opens a **`#333` dropdown** (`min-width:200px`,
      `box-shadow:0 3px 10px rgba(0,0,0,.3)`, `#444` row rules, 15/20 px rows,
      first row border-less) with a **nested second-level panel**; `Escape`
      closes it and focus returns to the trigger; `aria-expanded`/`aria-controls`
      are wired
- [ ] Guard: no `href="#!"` anywhere (the source's two `.drop-down` togglers use
      jQuery's dead `#!`; the source page's whole id set is `clock` · `main-menu` ·
      `map`, so it has **no in-page anchors at all** — every destination is ours)

## Mobile navigation (≤767 px) (TDD)

- [ ] Red: asserts the ≤767 px state — header flush at `top:0` with a
      `rgba(255,255,255,.1)` rule, 40 px logo block with 10 px margins, the
      desktop menu gone and a `.menu-nav-icon` toggle (bars glyph, ~50×60) at
      the right controlling `#main-menu`
- [ ] Green: the toggle reveals the menu **in flow** as a `#333` panel
      (`max-height:400px`, `overflow:auto`, `border-top:1px solid #ccc`, rows
      `display:block` with `border-bottom:1px solid #444`, links `padding:15px`,
      nested levels indented 25/35 px)
- [ ] Guard: asserts `aria-expanded` flips, `Escape` closes and restores focus,
      the panel is reachable by keyboard in visual order, and no duplicate
      landmark/link is exposed while the panel is closed

## Hero (`Hero`) (TDD)

- [ ] Red: asserts a **`100vh`** band with `background-size:cover` and an own
      placeholder photo (`picsum.photos/seed/aisle-hero/1920/1080`), a
      `rgba(0,0,0,.3)` scrim behind the content, and a vertically+horizontally
      centred caption stacking: **tie glyph 2.5 em → date line 1.2 em (Bitter,
      white) → script line 2.5 em (`Playball`) → names 5 em (64 px, `Playball`)**
      with an inline **`#E45F74` heart at `.8em`**
- [ ] Green: `<Hero />` — own couple names, own date and invitation line, single
      `<h1>`, decorative glyphs `aria-hidden`, photo marked decorative or
      described
- [ ] Guard: asserts no source strings ("Jenny", "Mark", "Save The Date",
      "23 SETPEMBER 2017"), no `slider-1-1600x900.jpg`, the `h1` ladder
      (5 em → 4 em ≤992 px → 3 em ≤767 px) and no overflow at 320 px

## Our Story band (`Story`) (TDD)

- [ ] Red: asserts a white `.section` with `padding:100px 0 70px`
      (`50px 0 20px` ≤767 px), an own **`Playball`** title at 3.5 em (48 px,
      `#333`) with `padding-bottom:40px`, an **ornament** that is a 160×20 px
      block of two 60 px `#aaa` rules flanking a **`#E45F74`** star
      (`margin-top:20px` → 10 px ≤767 px, `aria-hidden`), a narrow centred
      Bitter paragraph (16.8 px, `#555`, `line-height:26.88px`, ≈570 px measure)
      and the faint ring pattern rendered **behind** the content at
      `z-index:-1` / ≈80 % opacity
- [ ] Green: `<Story />` — own copy of the same kind, pattern from an own
      CSS/SVG definition, ornament as a reusable `HeadingOrnament` primitive
- [ ] Guard: asserts `Background_Circle.png` never appears, the ornament is
      decorative only, and the section reads correctly with images blocked

## Countdown band (`Countdown`) (TDD)

- [ ] Red: asserts a photo band (own placeholder
      `picsum.photos/seed/aisle-countdown/1600/600`, `rgba(0,0,0,.3)` scrim,
      white text), an own `Playball` title with a **white** star ornament, and
      **four 120×120 px circles** (`border:1px solid #fff`,
      `border-radius:100px`, `padding-top:25px`, `margin:0 20px 30px`) each
      showing a 3 em number above a lowercase unit word (days · hours ·
      minutes · seconds)
- [ ] Green: `<Countdown />` — a real client-side countdown to the app's own
      **future** target date, ticking once per second, rendering `00` (not
      blanks) when expired, in a single labelled `role="timer"` region with no
      `aria-live` spam
- [ ] Guard: fake timers assert the day/hour/minute/second maths across a DST
      boundary and at expiry; asserts the circles read their unit names to AT,
      the markup is present before hydration, and the source's dead 2017
      countdown (`00/00/00/00` for ever) is not reproduced

## Wedding Details timeline (`Details`) (TDD)

- [ ] Red: asserts a white `.section` with an own `Playball` title + rose star
      ornament over `.wedding-details` drawing a **1 px `#ccc` spine at
      `left:50%`**, and **four** cards (`width:50%`, `padding:0 50px`,
      `margin-bottom:30px`, `clear:both`, `margin-top:-40px`) alternating
      `float:right; text-align:left` / `float:left; text-align:right`, each with
      an **18×18 px dot** (`border-radius:20px`, `border:1px solid #aaa`,
      white) on the spine and a **3.5 em (56 px) `#E45F74`** icon above a 1.5 em
      `#333` title
- [ ] Green: `<Details />` — ordered list of four moments (ceremony · toast &
      dinner · wedding cake · photography) with **four distinct** blurbs
      (the source repeats one lorem sentence four times — do not copy it)
- [ ] Guard: asserts the ≤767 px flatten (rule at `left:0`, cards `width:100%`
      `padding:0 0 0 30px`, `margin:0 0 30px`, both sides `text-align:left;
      float:none`, dots on the left) and that list semantics preserve order

## Ceremony CTA band (`Ceremony`) (TDD)

- [ ] Red: asserts a second photo band (own placeholder
      `picsum.photos/seed/aisle-ceremony/1600/600`, `rgba(0,0,0,.3)` scrim), a
      **white** `Playball` heading + white ornament + white supporting line, and
      a small-caps `Learn more` link (0.9 em / 14.4 px, white,
      `padding-bottom:5px`, `position:relative`) with **two 2 px `#E45F74`
      bars**, the second starting at `translateX(-130%)` and sliding in on
      hover/focus
- [ ] Green: `<Ceremony />` — anchor/button with an accessible name, the
      underline pair implemented in CSS (no JS), reduced-motion path that shows
      the underline immediately
- [ ] Guard: asserts the band keeps a solid dark fill under the white heading
      when the image fails, the animation is skipped under
      `prefers-reduced-motion`, and the label is the app's own

## Gallery (`Gallery`) (TDD)

- [ ] Red: asserts a white `.section` with an own script title + rose ornament
      and **six tiles** (3 across ≥768 px, 2 across ≥576 px) of `600×400`
      own placeholders (`picsum.photos/seed/aisle-gallery-<n>/600/400`), each a
      single interactive control opening a **lightbox**
      (`rgba(0,0,0,.8)` overlay), plus a `View all gallery` action styled as the
      reference's outlined button (transparent, `1px solid #E45F74`, `1px`
      radius, `letter-spacing:2px`, `#333` label → `#E45F74` fill with white
      text on hover, `margin-top:30px` → 10 px ≤767 px)
- [ ] Green: `<Gallery />` + `<Lightbox />` — `role="dialog"` with a labelled
      title, `Escape` closes, focus trapped while open and restored to the
      opening tile, `←`/`→` navigate, `data-fluidbox`/`#flavorOverlay` never
      referenced
- [ ] Guard: asserts six tiles and six lightbox entries (count asserted, not
      eyeballed), lazy loading below the first tile (`decoding="async"`),
      keyboard-only operation, and that no source `600x400` asset path survives

## Contact block (`Contact`) (TDD)

- [ ] Red: asserts the band shadow `1px 10px 40px rgba(0,0,0,.4)`, a **50/50
      split** (left `.section`-padded column, right map panel
      `width:50%; position:absolute; top:0; bottom:0; right:0`), an own
      `Playball` title (2.5 em / 32 px, `#333`), a date line, an invitation
      line, a **2 em (48 px) `#E45F74` `tel:` link** and an address paragraph,
      plus a **static map placeholder** with an accessible label
- [ ] Green: `<Contact />` — own venue copy, real `tel:` href, placeholder map
      (own SVG/CSS still + address text), no third-party script
- [ ] Guard: asserts `maps.googleapis.com`, `AIzaSy`, `gtag` and any API key
      are absent from the bundle; ≤767 px stacking (`width:100%`,
      `float:none!important`, map 400 px tall full width); no overflow at 320 px

## Footer (`Footer`) (TDD)

- [ ] Red: asserts a white footer with `padding-top:70px` and the ring ornament
      behind the content, an own dark `Playball` wordmark, an `h4` at 1.5 em
      (24 px, Bitter, `#333`) with a supporting line, and a form whose field is
      a **400×55 px pill** (`border-radius:100px`, `border:0`,
      `padding:0 70px 0 25px`, `box-shadow:1px 10px 30px rgba(0,0,0,.2)` →
      `1px 15px 30px rgba(0,0,0,.3)` on focus, 90 % ≤767 px) with a **55×55 px
      circular submit** (`#E55D73`, white glyph, inverting to black bg /
      `#E55D73` glyph on hover)
- [ ] Green: `<Footer />` — labelled `type="email"` input, local validation
      (inline `aria-describedby` error, polite success message, never
      navigates), **five** social controls with `aria-label`s and **five**
      tracked-capital in-page links, live-year copyright and a
      `https://www.componentdock.com/` ("Component Dock") attribution line
- [ ] Guard: asserts five socials + five links (counts asserted), no source
      action/Mailchimp/analytics URL, no `logo-black.png`/`logo-white.png`, and
      the ColorLib credit string is gone

## Cross-cutting

- [ ] Reuse `packages/ui` (`Card`, `Button`, `ButtonLink`, `cn`) before adding
      primitives; share the ornament, ring pattern and photo-band treatment
      across both photo bands and the story/footer pattern
- [ ] Accessibility sweep: one `h1`, ordered headings, landmarks, focus rings,
      `aria-expanded`/`aria-controls` on the nav toggle, labelled controls,
      decorative glyphs/patterns `aria-hidden`, countdown/lightbox keyboard paths
- [ ] Responsive sweep at 320 / 479 / 767 / 992 / 1440 px: `h1`–`h5` ladder
      (4/3/2 em ≤992 px; 3/2.5/1.8/1.5/1.2 em ≤767 px), `.section`
      `50px 0 20px`, `p{line-height:1.4}`, body 14 px ≤479 px, timeline flat,
      contact stacked, footer links 10/7 px padding — and no horizontal overflow
- [ ] `prefers-reduced-motion` pass: CTA underline, dropdown reveal and any
      entrance motion skipped
- [ ] `npm run verify:app aisle` green (typecheck + lint + knip + fallow + 100 %
      coverage tests + build); paste the `scripts/verify-app.sh` output in the PR
- [ ] Build the two invented destinations from the source's own inner pages
      (both live, `curl -sS` basis, read 2026-10-12): the **RSVP band** from
      `02-rsvp.html` (9,789 B — RSVP kicker + "Be Our Guest" heading + the
      contact split whose right column is the "Are you getting?" / "RSVP HERE!"
      form with Full Name, Email, a Guest select 00–04 and an Event select) and
      the **"The Wedding" band** from `03-regular-page.html` (10,860 B — the
      "Regular Page" text band with the trip/flowers story blocks, the note pair
      and the pull quote). Ship the app's own copy, contact data and images, a
      real submit control, distinct select `name`s and unique option values; do
      not copy the source's misspelled author credit, its duplicated
      `name="option"` selects or its `TITLE` placeholder
- [ ] PR description: source template + slug, preview URL, tokens used, and what
      differs (new name, own placeholders, own pattern/map, no analytics)
- [ ] After merge: `[~]`→`[x]` on TEMPLATES.md line **3107** with the surge URL
      + homepage, then `npm run readme:status` (implementer's job — prep never
      touches TEMPLATES.md)
