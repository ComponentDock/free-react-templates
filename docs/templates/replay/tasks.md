# Replay (ColorLib Repeat) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-replay`. Recreation name: **Replay** (NEW name —
> the ColorLib source keeps its name "Repeat").

## Source mapping

- **ColorLib item:** "Repeat" (TEMPLATES.md line 619; section
  "## Services / Agency Landing (17)"). The
  `wp/template/repeat/` slug appears exactly ONCE in TEMPLATES.md
  (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/repeat/
- **Preview URL — REACHABLE (verified 2026-08-24 by direct fetch):**
  **`https://preview.colorlib.com/theme/repeat/`**
  (HTTP 200, 21,132 bytes, full Bootstrap 5 template).
  **The preview loads:**
  - `css/style.css` (57,799 bytes — hand-written + Bootstrap 5 overlay)
  - `css/tiny-slider.css`, `css/aos.css` (animation library)
  - `fonts/icomoon/style.css`, `fonts/flaticon/font/flaticon.css`
  - Google Fonts: Comfortaa (400, 700) + Roboto (400)

## Reference research (done — do not redo)

### Screenshot (`repeat-free-template.jpg`)

Browsed visually via the TEMPLATES.md preview image. The template shows a
clean, corporate services/agency landing page with a warm salmon/coral
accent color. The hero has a full-width background image with dark overlay.
The About section uses the same background image with overlay. Services
section splits an image with a dark navy slider. Stats use light card
counters. Footer is light grey. The overall aesthetic is professional,
clean, with a navy + coral color palette and rounded Comfortaa display font.

### Design tokens (live stylesheet + rendered page, verified 2026-08-24)

| Token         | Value                                                        | Use                                                                     |
| ------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Brand accent  | `#ff8e71` (salmon/coral)                                     | btn-primary bg, .subheading color, .v-line bg-color, stat-counter icons |
| Heading       | `#003a70` (deep navy)                                        | .heading color, .hero .heading color, stat-counter .num color           |
| Overlay       | `rgba(0, 58, 112, 0.9)`                                      | .overlay::before on .bg-img-section (about + hero)                      |
| Slider bg     | `rgba(0, 58, 112, 0.9)`                                      | .box-slider-wrap background (services slider)                           |
| Footer bg     | `#efefef`                                                    | .site-footer background                                                 |
| Footer text   | `#888` / links `#777` / hover `#000`                         | .site-footer color, a color, a:hover color                              |
| Stat card bg  | `#fafafa`                                                    | .stat-counter background                                                |
| Stat card rad | `7px`                                                        | .stat-counter border-radius                                             |
| Stat caption  | `#7a7a7a`                                                    | .stat-counter .caption color                                            |
| Body text     | `#212529`                                                    | Default body color                                                      |
| Font display  | Comfortaa 400/700                                            | Google Fonts `<link>`; stat counter .num uses it                        |
| Font body     | Roboto 400                                                   | Google Fonts `<link>`; body text                                        |
| Button radius | `0.25rem`                                                    | .btn border-radius                                                      |
| Button hover  | `#ff9f86`                                                    | .btn-primary:hover background                                           |
| Section pad   | `7rem` top/bottom                                            | .section padding                                                        |
| Hero pad      | `7rem` top / `22rem` bottom                                  | .hero padding (generous bottom space)                                   |
| About image   | `margin-bottom: -150px`                                      | .sec-about .img-wrap negative margin for overlap effect                 |
| V-line accent | `2px` wide, `#ff8e71`, 250px tall (about) / 115px (services) | Decorative vertical lines in intro-box and intro sections               |
| Service card  | White text on navy bg, 20px h3, 30px margin-bottom           | .service h3, .box-slider-wrap h3                                        |
| Intro box     | `margin-top: 30px`, relative positioned                      | .intro-box layout                                                       |

### Fonts

Loaded via Google Fonts `<link>` in `<head>`:

- **Comfortaa** weights: 400, 700 — used for stat counter numbers and
  potentially headings
- **Roboto** weight: 400 — used for body text
- No other fonts needed (source uses icomoon/flaticon icon fonts → REPLACE
  with lucide-react)

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph (flaticon)          | Recreation         |
| -------------------------------- | ------------------ |
| `flaticon-handshake` (Projects)  | lucide `Handshake` |
| `flaticon-mouse` (Happy Clients) | lucide `Mouse`     |
| `flaticon-browser` (Leadership)  | lucide `Monitor`   |
| `flaticon-cursor` (Years Exp.)   | lucide `Pointer`   |

### Picsum placeholder plan

| Slot                | Seed              | Size      | Notes                            |
| ------------------- | ----------------- | --------- | -------------------------------- |
| Hero background     | `replay-hero`     | 1920×1080 | Full-width bg image              |
| About section image | `replay-about`    | 800×600   | Overlapping with negative margin |
| Services left image | `replay-services` | 800×600   | Left side of split layout        |
| Media image 1       | `replay-media-1`  | 800×600   | Primary image in media section   |
| Media image 2       | `replay-media-2`  | 600×400   | Offset image with white border   |

### Section structure (order matches source 1:1)

1. **Navbar** — sticky, logo "Replay", dropdown nav, hamburger on mobile
2. **Hero** — bg image, navy overlay, centered text + CTA button
3. **About** — bg image, navy overlay, split: heading + image left / intro text right
4. **Services** — intro block with v-line, heading + paragraph, split: image left / navy slider right
5. **Stats** — heading, 4-column counter grid (Projects, Clients, Leadership, Years)
6. **Media** — heading + CTA left, overlapping images right
7. **Footer** — grey bg, widgets, Component Dock credit

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/replay` from the simplest existing app
       (`cp -r apps/<simplest> apps/replay`), rename package to
       `@free-react-templates/replay`, add Comfortaa 400/700 + Roboto 400
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `replay.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (logo + dropdown nav + hamburger
       mobile toggle with aria-expanded), Hero (bg image, navy overlay,
       heading "We are pretty Awesome", CTA button), About (overlay bg,
       subheading, heading, image with negative margin, v-line, intro
       text), Services (intro block + v-line, heading, split layout,
       service slider with 4 cards), Stats (heading, 4 counter cards
       with icon + number + caption), Media (heading, CTA, overlapping
       images), Footer (grey bg, Component Dock link), App (landmarks,
       document title "Replay — Services & Agency").
3. [ ] Layout shell: Comfortaa + Roboto Google Fonts `<link>`, Tailwind
       `@theme` with `--color-brand: #ff8e71`, `--color-navy: #003a70`,
       `--color-overlay: rgba(0, 58, 112, 0.9)`.
4. [ ] Navbar component: sticky, logo "Replay", desktop nav links with
       Services dropdown (Menu One, Menu Two, nested Dropdown with
       Sub Menu One/Two/Three), hamburger toggle on mobile with
       `aria-expanded`, mobile menu open/close.
5. [ ] Hero component: full-width bg image (`picsum.photos/seed/replay-hero/1920/1080`),
       navy overlay via Tailwind `bg-navy/90` or pseudo-element,
       centered text ("We are pretty Awesome"), paragraph, salmon
       "Our services" button (`bg-brand text-black rounded`.
6. [ ] About component: bg image with overlay, split layout (col-lg-6
       left with "About us" subheading in brand color, heading in
       white, image with `mb-[-150px]`; col-lg-4 right with v-line
       accent and intro paragraphs in `text-white-50`).
7. [ ] Services component: intro block with v-line, "What We Offer"
       heading + lead paragraph, split: left image, right dark navy
       slider with 4 service cards (Web Design, Graphic Design,
       Web/Mobile Application, Brand Identity) — white headings,
       muted text. Implement as a simple tab or static display
       (the source uses tiny-slider, but a static/mobile-friendly
       approach is acceptable).
8. [ ] Stats component: heading "Stats", 4-column responsive grid
       (`grid-cols-2 lg:grid-cols-4`), stat cards with `bg-[#fafafa]`
       `rounded-[7px]` `p-10`, lucide icons in brand color, large
       Comfortaa numbers in navy, captions in `#7a7a7a`.
9. [ ] Media component: split layout, left with heading, paragraph,
       salmon CTA button; right with two overlapping picsum images
       (main + offset with `border-4 border-white`).
10. [ ] Footer component: `bg-[#efefef]` `text-[#888]`, Contact widget,
        Component Dock credit linking https://www.componentdock.com/.
11. [ ] Run `npm run verify:app -- replay` (typecheck → lint → vitest
        100% → build) and fix until green.
12. [ ] Open PR `feat/template-replay` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (salmon `#ff8e71`,
        navy `#003a70`, Comfortaa + Roboto, 0.25rem button radius,
        7px stat card radius), and what differs (renamed "Replay",
        Google Fonts, lucide icons instead of flaticon, picsum
        placeholders, static service display instead of tiny-slider,
        Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 619 `[x]` +
        surge URL (`https://replay.free.componentdock.com`),
        `npm run readme:status`, push.
