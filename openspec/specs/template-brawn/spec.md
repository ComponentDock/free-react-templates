# Template: Brawn (Health & Fitness / Crossfit Gym)

## Purpose

Brawn is a single-page crossfit / fitness-gym landing page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Vigor"** design, built under a DIFFERENT name (**Brawn** — one lowercase
word meaning muscular strength, the register this page is written in; single
word, kebab-case-safe, no collision with `apps/`, `openspec/specs/template-*`,
`docs/templates/`, any bold name in `TEMPLATES.md`, or any substring in the
repository: `git grep -il brawn origin/main` = **0 hits**; and the name is not a
ColorLib slug — `colorlib.com/wp/template/brawn/`,
`preview.colorlib.com/theme/brawn/` and
`preview.colorlib.com/theme/bootstrap/brawn/` all return **404**) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).

- **Source slug**: `vigor`
- **ColorLib page**: https://colorlib.com/wp/template/vigor/
- **Live preview**: https://preview.colorlib.com/theme/vigor/
  (HTTP 200, **22,653 B** HTML, sha256
  `5c09921d5d66b35821a2a6b31e16ab3b7e1ec6c8dabc9784d63acab407f182e1`; theme
  sheet `css/style.css` **52,074 B**, sha256
  `6a984e823b17ebbd2fc298a509569df69662f02f5c52bd8277be6a53c64aa534`; page
  script `js/main.js` **4,263 B**, sha256
  `5c0398c8d8bc76f0f97a4b65d0e3ab6cadde6a4e4dd2972473c601bbee3b8a3b`;
  `<title>` = **"Vigor — Website Template by Colorlib"**; Bootstrap 4 grid +
  jQuery 3.2.1 + Popper + Owl Carousel 2 + waypoints + fancybox + ionicons +
  Font Awesome + flaticon; **no `js/snippet.js`**). The slug-only path IS the
  live design: `theme/bootstrap/vigor/` is **404** (9-byte body) and
  `theme/bb/vigor/` is **404**, so there is no alias twin.
  `/downloads/free/vigor.zip` is **404** (9-byte `text/plain` body), so the live
  preview is the only DOM/CSS reference and **there is no archive to
  cross-check** — every token below is measured from the live render.
- **Screenshot**:
  https://colorlib.com/wp/wp-content/uploads/sites/2/vigor-free-template.jpg
  (served **AVIF** — a **78,567-byte** body behind a `.jpg` name, 1200×946
  decoded, converted with PIL and inspected: a **browser-chrome** shot of the
  **top fold only** — the white 85px header with the blue 20px/4px-tracked
  "VIGOR" wordmark, six nav items (Home underlined in blue), the underlined
  header search field; the full-bleed gym hero under its 40% black wash with the
  white 80px uppercase "BEST FITNESS IN THE CITY", the white 60px play disc and
  the "Watch Video" label; then the first ~140px of the white services band with
  the **four blue diamonds** (rotated squares) at the top edge. It does **not**
  show the services' text, the two split bands, the blue program band, the
  testimonial band, the CTA band or the footer — those were measured from the
  live render, which is why this spec carries a band table with geometry.)
- **Package**: `@free-react-templates/brawn`
- **Deploy target**: `brawn.free.componentdock.com`

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/vigor/' TEMPLATES.md` = **2** (line **1222** under
`## Business (365)` and line **1884** under `## Health Fitness (72)`, both
`- [x] **Vigor**`) and both credit the **`vigor`** app. But the `vigor` app
recreates a DIFFERENT ColorLib design: its spec names **"Endurance"**
(`https://colorlib.com/wp/template/endurance/`, preview
`https://preview.colorlib.com/theme/endurance/`), which also owns the
`stamina` prep (that spec carries `<!-- prep-status: shipped-as=vigor -->` and a
`SHIPPED-UNDER` banner pointing at `template-vigor`). So both Vigor rows are a
false `[x]` (bucket 2, **APP-WRONG-DESIGN**, in `docs/row-multiplicity.md` §2;
measured exclusive-copy evidence `row-excl / spec-excl` = **0 / 34**, i.e. the
shipped app's copy matches Endurance 34-to-0 and shares no exclusive phrase with
Vigor).

**The prep stream never moves markers.** The implementer re-opens rows 1222 and
1884 on its `feat/` branch, builds `apps/brawn`, and flips them to `[x]` with the
`brawn.free.componentdock.com` link after merge.

### Why the name is not the source name

| check | result |
|---|---|
| `git grep -il brawn origin/main` | 0 hits (no file path, no spec, no doc, no app) |
| `ls apps/ \| grep brawn` | no match |
| `grep -ic '\*\*[^*]*brawn' TEMPLATES.md` | 0 (not a ColorLib row name) |
| `colorlib.com/wp/template/brawn/` | **404** |
| `preview.colorlib.com/theme/brawn/` | **404** |
| `preview.colorlib.com/theme/bootstrap/brawn/` | **404** |

## Design reference (replication findings)

### DOM skeleton (live preview, document order)

```
header[role=banner]
  nav.navbar.navbar-expand-lg.bg-dark      → white bar, 85px (background: none !important)
    a.navbar-brand "Vigor"
    button.navbar-toggler                  → collapsed below 992px
    ul.navbar-nav
      Home(active) About Services▾(dropdown: Crossfit, Fitness, Powerlifting,
      Gym, Body Shaping, Circuit) Gallery Coaches Contact
    .navbar-nav.ml-auto
      form.search-form → span.ion-search + input[placeholder="Search..."]
div.slider-item.overlay[style=bg hero_2.jpg]      ← ONE band, not a carousel
  .container > .row.slider-text.align-items-center.justify-content-center
    .col-lg-9.text-center.element-animate
      h1 "Best Fitness In The City"
      .btn-play-wrap > p > a.btn-play[href=youtube] > span.ion-ios-play
      span "Watch Video"
div.section                                        ← services
  .container > .row
    4 × .col-md-6.col-lg-3 > .service-box
        .square-figure > span.flaticon-*           (90px diamond, rotate 45°)
        .service-text > h3 + p                     (Quality Service, Spacious Gym,
                                                    Live Healthy, Crossfit)
div.site-section.position-relative                 ← "Enjoy The Fitness"
  .img-1[style=bg hero_1.jpg]                      (absolute, LEFT half, full height)
  .container > .row.align-items-center > .col-lg-5.ml-auto > .padding-tb
      h2.heading + 2 × p
div.section.bg-primary                             ← program band (#007bff)
  .container > .row
    3 × .col-md-6.col-lg-4.element-animate > .media.block-6.d-block.text-center
        .icon > span.flaticon-* (text-white) + .media-body > h3.heading + p
        (Health Program, Lose Weight, Cross Fit)
div.site-section.position-relative                 ← "Be Fit & Healthy"
  .img-2[style=bg hero_2.jpg]                      (absolute, RIGHT half, full height)
  .container > .row.align-items-center > .col-lg-5.mr-auto > .padding-tb
      h2.heading + 2 × p
div.section.bg-light.block-11                      ← testimonials (#f8f9fa)
  .container > h2 "Testimonial" (centered) + .nonloop-block-11.owl-carousel
    4 × .block-33 > .vcard.d-flex (img 60px circle, .name-text h2.heading + .meta)
                  + .text > blockquote > p (quoted text)
  .owl-nav (‹ › below the card, bottom: -40px, centered)
div.bg-primary.py-5                                ← CTA (#007bff)
  .container.text-center > .row.justify-content-center > .col-lg-7
    h3.text-white "Join With Us Now!" + p.lead + p > a.btn.btn-warning.px-4.py-3
    "Get In Touch!"
footer.site-footer[role=contentinfo]               ← #333
  .container > .row.mb-5
    .col-md-4  h3 "About Vigor" + p + ul.footer-social (4 × a.p-2, fa glyphs)
    .col-md-5  h3 "Contact Info" (Address / Telephone / Email rows)
               h3 "Subscribe" + form.site-block-subscribe (input + .btn-warning)
    .col-md-3  h3 "Quick Links" (About, Terms of Use, Disclaimers, Contact)
    .col-md-3  (empty spacer)
  .row > .col-12.text-md-center > p  copyright line (source credits Colorlib)
```

### Band table — measured live (chromium, `getBoundingClientRect`)

1440×900 (document **4,739px**, `scrollWidth == clientWidth == 1440`):

| # | band | top | height | paint |
|---|---|---|---|---|
| 1 | `header` | 0 | **85** | white `#fff`, flat, **not** absolute — the hero starts *below* it |
| 2 | `.slider-item` hero | 85 | **900** (`100vh`, `min-height:700px`) | `hero_2.jpg` cover, `#000` wash at **.4** |
| 3 | `.section` services | 985 | **540** | white, `.section{padding:7em 0}` = 117.6px top/bottom |
| 4 | `.site-section` Enjoy The Fitness | 1,525 | **504** | white text right; `.img-1` = 720×504 at x 0 (left half) |
| 5 | `.section.bg-primary` program | 2,029 | **449** | `#007bff` |
| 6 | `.site-section` Be Fit & Healthy | 2,478 | **504** | white text left; `.img-2` = 720×504 at x 720 (right half) |
| 7 | `.section.bg-light.block-11` testimonials | 2,982 | **717** | `#f8f9fa`; card 700×242 at x 370 |
| 8 | `.bg-primary.py-5` CTA | 3,698 | **312** | `#007bff`, 48px padding |
| 9 | `footer.site-footer` | 4,010 | **730** | `#333`, 117.6px padding |

390×844 (document **7,821px**, `scrollWidth == clientWidth == 390` — **no
horizontal overflow**; the Owl `.owl-stage` children sit past the right edge but
are clipped, they do not extend the document):

| # | band | top | height |
|---|---|---|---|
| 1 | `header` (hamburger) | 0 | **62** |
| 2 | hero | 62 | **844** (`100vh`) |
| 3 | services (1 column × 4) | 906 | 1,430 |
| 4 | Enjoy The Fitness (image **above** text) | 2,336 | 1,043 (`.img-1` 390×400 at top 2,336) |
| 5 | program band (3 stacked) | 3,379 | 876 |
| 6 | Be Fit & Healthy (image **above** text) | 4,255 | 1,043 |
| 7 | testimonials | 5,298 | 889 |
| 8 | CTA | 6,187 | 348 |
| 9 | footer (4 stacked blocks) | 6,535 | 1,286 |

768×1024: the split bands keep their halves but the image becomes a **400px-tall
full-width block above** the text (`.img-1` 768×400 at y 1,919, text at y 2,319),
the nav collapses (`.nav-link` measured 0×0, the toggler is shown) and the
header search field is **removed** from the layout (`form.search-form` 0×0) —
prescribe a search control inside the drawer instead of deleting search.

### Anchor census (live DOM, attributed — 24 anchors)

- **10 live**: brand → `index.html` (**this page**; on a single-page build it is
  a no-op in-page `#top`), nav Home → `index.html`, About → `about.html`,
  Services → `services.html` (also the dropdown toggle), Gallery →
  `gallery.html`, Coaches → `coaches.html`, Contact → `contact.html`, the hero
  play disc → `https://www.youtube.com/watch?v=_VnYSoMI-9Q`, the CTA button →
  `contact.html`, and the copyright "Colorlib" → `https://colorlib.com`.
- **14 dead `href="#"`**: the **6** `Services` dropdown items (Crossfit,
  Fitness, Powerlifting, Gym, Body Shaping, Circuit), the **4** footer social
  glyphs (twitter, facebook, linkedin, instagram) and the **4** Quick Links
  (About, Terms of Use, Disclaimers, Contact).
- 0 empty `href=""`, 0 anchors without `href`. 2 forms (header search, footer
  subscribe), 2 inputs, 4 footer `<img>` avatars, 4 `.element-animate` nodes.

### Inner-page inventory (not built — recorded so nothing is invented)

The theme is **multi-page**; all five siblings are LIVE (same `<title>`, same
header/footer chrome):

| page | status | bytes | what it holds (and what the single-page build maps there) |
|---|---|---|---|
| `about.html` | 200 | 15,455 | `h1` About Us, "We Have Unique Fitness Programs" (feature list), a second "Be Fit & Healthy" split, "Meet Our Team" (3 coach cards) → nav **About** anchor |
| `services.html` | 200 | 15,000 | `h1` Our Services + **six** icon cards (Quality Service, Spacious Gym, Live Healthy, Crossfit, Weight Lifting, Roping) → nav **Services** anchor |
| `gallery.html` | 200 | 13,408 | `h1` Our Gallery (fancybox image grid) → nav **Gallery** anchor |
| `coaches.html` | 200 | 14,743 | `h1` Our Coaches + six coach cards (Mellisa Howard, Mike Richardson, Laura Smith ×2) → nav **Coaches** anchor |
| `contact.html` | 200 | 14,155 | `h1` Contact Us + contact form (the 3rd form on the theme) → nav **Contact** anchor and the CTA button target |
| `elements.html`, `blog.html` | **404** | 9 | not part of this theme |

So the single-page Brawn maps its six nav items to in-page anchors
(`#top`, `#about`, `#services`, `#gallery`, `#coaches`, `#contact`) and keeps the
band set of `index.html` exactly — it does **not** invent the team grid, the
six-card services page or the gallery grid. The 6 dropdown items stay
non-navigating (they are dead `#` in the source); render them as a plain list of
program names, not as links that go nowhere.

### Typography and font delivery (measured, not assumed)

- Declared: `body` → `font-family: "Oxygen", -apple-system, …` at **1.05rem
  (16.8px) / 1.8 (30.24px) / 400**, colour `#6c757d`; headings →
  `h1,h2,h3 { color:#000; line-height:1.5; font-family:"Montserrat", sans-serif;
  font-weight:900 }`; `header .navbar` → Montserrat.
- **The source ships no `@font-face`** (`grep -c @font-face` in `style.css` = 0)
  and **no Google Fonts `<link>`** (`document.querySelectorAll('link[rel=stylesheet]')`
  matched `fonts.googleapis` = 0). The **preview host injects 17 `@font-face`
  rules, 14 of them self-hosted `/cf-fonts/`** (Montserrat ×10, Oxygen ×4), and
  `[...document.fonts]` reports **`Montserrat:400` and `Montserrat:700` loaded,
  `Oxygen:400` and `Oxygen:700` loaded** — nothing else.
- Consequence: the sheet **asks for 900** on every heading but only 400/700 are
  delivered, so the live render **synthesises** the 900 weight (computed
  `font-weight: 900`, loaded faces 400/700). Brawn SHALL load the real faces
  and not rely on synthesis:
  `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Oxygen:wght@300;400;700&display=swap`
  (verified **HTTP 200** for the combined URL and for each family alone;
  `Oxygen:wght@300` is required — the CTA `p.lead` is measured at weight **300**).
  Declare `--font-body: "Oxygen", system-ui, sans-serif` and
  `--font-heading: "Montserrat", sans-serif`.

### Interaction the React build must reproduce (from `js/main.js` + the sheet)

1. **No hero carousel.** `main.js` binds `.home-slider` to Owl, but `index.html`
   contains **zero** `.home-slider` wrappers (`document.querySelectorAll('.home-slider').length` = 0)
   and exactly **one** `.slider-item`. The hero is a static 100vh band; build it
   as a section, not a slider.
2. **Dropdown opens on hover** (`$('nav .dropdown').hover(…)` adds `.show`), and
   a click navigates (`.navbar .dropdown > a` → `location.href`). Keep
   hover-open on desktop, click/keyboard-open on touch, and keep the toggle a
   real link.
3. **Scroll reveal** (`waypoints`, `offset: '95%'`): `.element-animate` is
   `opacity:0; visibility:hidden` until `.element-animated` is added — **4**
   nodes on the page (the hero column + the 3 program cards). Brawn SHALL
   reproduce the fade-in-up but SHALL NEVER leave content invisible when JS,
   `IntersectionObserver` or reduced-motion says otherwise (`.element-animate`
   is a source defect when it is the only thing holding the content).
4. **Testimonials are an Owl carousel** (`.nonloop-block-11`: `items:1`,
   `stagePadding:20`, `margin:50`, `loop:false`, nav arrows). One 700px card is
   visible at a time; arrows sit under the band (`bottom:-40px`, centered, 30px
   glyphs, 20px padding, `.disabled{opacity:.2}` at the ends).
5. **Play disc** = fancybox lightbox on the YouTube URL; `a.btn-play` is a 60px
   white circle (`border-radius:50%`, abs-centred) that grows to **80px** on
   hover (0.3s). The React build links out to the video (new tab,
   `rel="noopener"`) and keeps the grow-on-hover.
6. **Subscribe + search forms** post to `#` and do nothing (no `id`, no
   `aria-label` on the input, no `type=email`). Both SHALL become real,
   labelled, validating forms with a visible success/error message — never a
   live network call.

### Source defects and documented deltas (do not copy these)

| source behaviour | delta Brawn ships |
|---|---|
| Testimonials repeat **John Smith ×3** + Joshua Darren, all "XYZ Inc. Client", with lorem quotes | 4 **distinct** people (name + role + quote), same card anatomy; roles stay "client" register |
| `.element-animate` = `opacity:0; visibility:hidden` until a jQuery waypoint fires | IntersectionObserver reveal, `prefers-reduced-motion` → no transform, content visible without JS |
| Header search: placeholder-only input, no submit, no label, removed from the layout below 992px | labelled input (`aria-label="Search"`) + submit button, moved into the mobile drawer |
| Footer `.col-md-3` empty spacer + subscribe `<h3>Subscribe</h3>` above a button also labelled "Subscribe" | drop the spacer; keep the heading, label the button "Subscribe" with an `aria-label` that says what it subscribes to |
| Copyright bar credits **Colorlib** and auto-writes the year via `document.write` | "© {currentYear} Brawn — built with Component Dock" linking **https://www.componentdock.com/** (AGENTS.md rule 5); year rendered in React |
| Hero `h1` rule also styles `h1 span` as a blue highlighter, but the markup has **no** span | no highlight span; do not add one |
| Services glyphs inherit body grey `#6c757d`; only the diamond **border** is blue | same: grey glyph on a `2px solid #007bff` diamond |
| `body` declares 1.05rem (16.8px) — a non-standard base | keep 16.8px/30.24px as the reference rhythm (Tailwind `text-[1.05rem]` or a `--text-body` token) |
| No `lang`, no meta description on the source page | `<html lang="en">` + a Brawn meta description |
| All images are theme JPEGs | `https://picsum.photos/seed/brawn-<n>/<w>/<h>` placeholders (deterministic), lucide-react icons for flaticon/ionicons glyphs |

## Design tokens (from preview `css/style.css` + live computed styles)

| token | value | measured evidence |
|---|---|---|
| `--brand` (primary) | **`#007bff`** | 23 declarations; `.bg-primary`, active/hover nav + dropdown item, `.navbar-brand` link colour, `.service-box .square-figure` 2px border, `.form-control:focus` ring, `.slider-text p a`. Live: program band `rgb(0,123,255)`, diamond border, wordmark |
| `--action` (CTA) | **`#ffc107`** hover `#e0a800` | `.btn-warning` (6 declarations); button text `#212529`; measured CTA button `rgb(255,193,7)`, 174×54 |
| `--ink` | **`#000`** | `h1,h2,h3{color:#000}`; `.heading{color:#000}` |
| `--body` | **`#6c757d`** | `body{color:#6c757d}` (12 declarations), service copy, quotes, footer copy |
| `--surface-light` | **`#f8f9fa`** | `.bg-light` (3) — testimonial band |
| `--surface-dark` | **`#333`** | `.site-footer{background:#333}` |
| `--meta` | **`#a6a6a6`** | `.block-33 .vcard .name-text .meta` (16.8px, "XYZ Inc. Client") |
| nav idle / active | **`#666666`** / **`#007bff`** | `header .navbar .nav-link` / `.nav-link.active` (16.8px, weight 300, Montserrat) |
| footer links | `rgba(255,255,255,.7)` underlined → `#fff` no underline | `.site-footer a` / `:hover` |
| input border | `#6c757d` at **2px** (subscribe), `rgba(0,0,0,.3)` 1px underline (search) | `footer .form-control{border-width:2px}`; measured `2px solid rgb(108,117,125)` |
| radii | **4px** on every button + form control (`0.25rem`); **7px** on the service diamond; `50%` on the play disc and the 60px avatar; header search field square | 7 × `0.25rem`, `7px`, 4 × `50%`, `border-radius:0` on the search field |
| heading scale | h1 **80px / 96px / 700 / UPPERCASE** (hero, 40px below 768px) · h2 `.heading` **48px / 48px / 900** · h3 **28px** base, **19.2px** inside `.service-box` (`1.2rem`), **20px** in the program band (`.block-6`), **18px / 300** for a testimonial name (`.block-33`), **16px / 700 / 1.6px tracking** in the footer | live computed styles per element |
| body type | **16.8px / 30.24px / 400** Oxygen | `body{font-size:1.05rem;line-height:1.8}` |
| buttons | `.btn` base `font-size:13px; font-weight:900; letter-spacing:.2em (2.6px); text-transform:uppercase`; CTA `padding:16px 24px` (`px-4 py-3`), radius **4px**, `#212529` on `#ffc107`; subscribe button `padding:6px 12px`, **118×50**, radius `0 4px 4px 0` | live measured |
| hero | `height:100vh; min-height:700px`, `background: url(hero_2) top center / cover`, `:before` `#000` at **opacity .4**; h1 `margin-left:.5em`, `margin-bottom:30px`; play disc **60×60** → 80×80; "Watch Video" 16.8px white | live measured (900px tall at 900 viewport) |
| section rhythm | `.section { padding: 7em 0 }` = **117.6px**; split bands have no vertical padding — the text column carries `.padding-tb { padding: 64px 0 }`; CTA `py-5` = **48px**; footer `7em 0` | live measured band heights |
| split bands | `.img-1/.img-2` = `position:absolute; width:50%; top:0; bottom:0; background: cover center`; text = `.col-lg-5` (445px at 1440) pushed to the opposite edge (`ml-auto` / `mr-auto`); inner content 376px tall | `.img-1` 720×504 @ x0; `.img-2` 720×504 @ x720; text 445×504 @ x830 / x165 |
| testimonial card | **700px** max-width, `padding:40px`, white, **no shadow**; 60px round avatar + 20px gap; name 18px/300 `#000`; meta 16.8px `#a6a6a6`; quote 16px/28.8 `#6c757d` wrapped in typographic quotes; band heading 48px/900 centered | measured 700×242 @ x370, y3249 |
| header | **85px** tall, white, `position: relative` (in flow), nav items `padding:27.2px 8px` (69×85 each), brand 20px/400/uppercase/`letter-spacing:4px` blue, search field **234×44** right-aligned with 30px left padding and a 1px `rgba(0,0,0,.3)` underline | live measured |
| footer | `#333`, `7em 0`, 3 columns (4 / 5 / 3) + empty spacer; headings 16px/700 white `letter-spacing:1.6px`; 4 social glyphs 30×30 `rgba(255,255,255,.7)`; subscribe field 295×50 + 118×50 button; copyright centered 16.8px | live measured |
| motion | play-disc 0.3s; button/nav 0.15s; carousel `smartSpeed:1000`; reveal = 100ms stagger per card after the waypoint; no parallax, no AOS library | `style.css` transitions + `main.js` |

## Requirements

### Requirement: Page shell and document head

Brawn SHALL render one page whose bands appear in the source's order — header,
hero, services, "Enjoy The Fitness" split, program band, "Be Fit & Healthy"
split, testimonials, CTA, footer — inside a document whose `<title>` is a Brawn
string and whose meta description is a Brawn sentence, with `<html lang="en">`.

#### Scenario: Bands render in source order at 1440

- **GIVEN** Brawn is rendered at 1440×900
- **WHEN** the page has loaded
- **THEN** the bands SHALL appear in the order header → hero → services → Enjoy The Fitness → program band → Be Fit & Healthy → testimonials → CTA → footer
- **AND** the header SHALL be **in flow above** the hero (85px tall, hero starting at y≈85), not overlaying it
- **AND** the document height SHALL be within ±4% of the reference's 4,739px at a 900px viewport

#### Scenario: No ColorLib provenance in app files

- **GIVEN** the built app's source
- **WHEN** any app file is searched for the source brand
- **THEN** no app file SHALL contain the ColorLib name or the source slug (provenance lives only in the spec, `TEMPLATES.md` and the PR)
- **AND** the footer SHALL link `https://www.componentdock.com/` with the text "Component Dock"

### Requirement: White navigation header with hover dropdown and search

The header SHALL be a white 85px bar containing the uppercase blue wordmark
(**20px / 400 / `letter-spacing: 4px`**), six nav items (16.8px Montserrat / 300,
`padding: 27.2px 8px`), a `Services` dropdown of six program names that opens on
hover (and on click/keyboard), and a right-aligned search field (234×44, 1px
underline, magnifier glyph).

#### Scenario: Desktop bar composition

- **GIVEN** a 1440px viewport
- **WHEN** the header renders
- **THEN** the wordmark SHALL sit at the left edge (x≈31) in `#007bff`, uppercase, tracked 4px
- **AND** the active item ("Home") SHALL be `#007bff` while the other five are `#666666`
- **AND** the search input SHALL be right-aligned, placeholder "Search…", with a bottom rule — no box, no fill

#### Scenario: Dropdown is reachable by keyboard

- **GIVEN** focus is on the `Services` toggle
- **WHEN** the user presses Enter/Space
- **THEN** the six program names SHALL become visible and focusable, in the order Crossfit, Fitness, Powerlifting, Gym, Body Shaping, Circuit
- **AND** Escape SHALL close the menu and return focus to the toggle
- **AND** the items SHALL NOT be `<a href="#">` dead links; they route to the services section (or are rendered as non-interactive text)

#### Scenario: Search submits without a network call

- **GIVEN** the search field is empty
- **WHEN** the form is submitted
- **THEN** an inline validation message SHALL appear and no request SHALL be made
- **AND** a labelled query SHALL clear the field and show a polite "no results" style message (no dead-end)

### Requirement: Mobile header

Below 992px the nav SHALL collapse into a drawer behind a toggler, the wordmark
SHALL stay at 20px, and search SHALL remain available.

#### Scenario: Drawer behaviour at 390

- **GIVEN** a 390px viewport
- **WHEN** the toggler is activated
- **THEN** the drawer SHALL reveal all six nav items plus the search field and the six program names
- **AND** the header SHALL be **62px** tall
- **AND** focus SHALL be trapped inside the drawer and Escape SHALL close it

### Requirement: Full-height hero band

A single 100vh (`min-height:700px`) hero SHALL paint a gym photo under a 40%
black wash, with the `h1` "Best Fitness In The City" in white Montserrat
**80px / 96px / 700 / uppercase**, a 60px white play disc linking to the source's
video, and the "Watch Video" label beneath it.

#### Scenario: Hero composition at 1440

- **GIVEN** a 1440×900 viewport
- **WHEN** the hero renders
- **THEN** the band SHALL be 900px tall, starting under the 85px header
- **AND** the `h1` SHALL be the page's only `h1`, centred, uppercase, at 80px with a 30px gap before the play disc
- **AND** the disc SHALL be a 60px white circle centred horizontally, with the 16.8px white "Watch Video" label 24px below it
- **AND** the overlay SHALL read as `rgba(0,0,0,.4)` over the photograph

#### Scenario: Headline reflows on small screens

- **GIVEN** a 390px viewport
- **WHEN** the hero renders
- **THEN** the `h1` SHALL be 40px / 48px and wrap to two lines without clipping
- **AND** the disc SHALL stay 60px, the label SHALL remain readable over the photo

#### Scenario: Play disc is a real link

- **GIVEN** the play disc
- **WHEN** it is activated by mouse or keyboard
- **THEN** the video SHALL open in a new tab with `rel="noopener noreferrer"`
- **AND** the disc SHALL grow to 80px on hover/focus over 0.3s and SHALL expose an accessible name ("Watch the Brawn video")

### Requirement: Four-card services row with rotated-square icons

The services band SHALL be white with 117.6px vertical padding and four centred
cards in one row at ≥992px (two at 768, one at 390). Each card carries a **90px
square rotated 45°** with a `2px solid #007bff` border, radius 7px, a 48px grey
(`#6c757d`) glyph rotated back −45°, a Montserrat **19.2px/900** title and
16.8px/30.24 copy.

#### Scenario: Row composition at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the services band renders
- **THEN** exactly four cards SHALL be visible in one row: Quality Service, Spacious Gym, Live Healthy, Crossfit
- **AND** each diamond SHALL be 90×90 with a blue 2px border and a grey glyph
- **AND** each card SHALL carry a title and one paragraph, with the diamond 32px above the title

#### Scenario: Cards reflow

- **GIVEN** a 768px viewport
- **WHEN** the band renders
- **THEN** the cards SHALL form two rows of two
- **AND** at 390px SHALL form one column of four with centred content and no horizontal scroll

### Requirement: Split band "Enjoy The Fitness" (image left)

A 504px band SHALL carry a full-height photograph occupying the **left 50%** of
the viewport (bleeding to the edge) and a text column (445px at 1440, 64px
vertical padding) on the right with an `h2` "Enjoy The Fitness" (48px/900) and
two paragraphs.

#### Scenario: Split geometry at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the band renders
- **THEN** the image SHALL span x 0→720 and the band's full height
- **AND** the text column SHALL start at x≈830 and be 445px wide
- **AND** the `h2` SHALL be 48px with a 24px gap before the first paragraph

#### Scenario: Split stacks on small screens

- **GIVEN** a 390px viewport
- **WHEN** the band renders
- **THEN** the image SHALL become a 400px-tall full-width block **above** the text
- **AND** the text SHALL keep its 64px vertical padding and 48px `h2`
- **AND** the band SHALL add no horizontal overflow

### Requirement: Blue program band with three icon columns

A `#007bff` band (449px at 1440) SHALL present three centred columns — Health
Program, Lose Weight, Cross Fit — each with a 48px white glyph, a **20px/900**
white title and 16.8px white copy. Its padding is the standard `.section`
rhythm's vertical 117.6px (no special inset).

#### Scenario: Three columns at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the program band renders
- **THEN** three equal columns SHALL be visible with white glyphs, titles and copy on `#007bff`
- **AND** the band SHALL carry no card surface, border or shadow

#### Scenario: Reveal never hides content

- **GIVEN** a user with `prefers-reduced-motion: reduce` (or JavaScript disabled)
- **WHEN** the band enters the viewport
- **THEN** all three columns SHALL be visible immediately, without transform or fade
- **AND** with motion enabled the cards SHALL fade in with a ~100ms stagger and end at full opacity

### Requirement: Split band "Be Fit & Healthy" (image right)

The second split band SHALL mirror the first: photograph on the **right 50%**
(bleeding to the edge) and the text column on the left, `h2` "Be Fit & Healthy"
plus two paragraphs.

#### Scenario: Mirrored geometry at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the band renders
- **THEN** the image SHALL span x 720→1440 and the text column x≈165→610
- **AND** the band height SHALL be 504px

#### Scenario: Image leads on mobile

- **GIVEN** a 390px viewport
- **WHEN** the band renders
- **THEN** the image SHALL render above the text, exactly as the first split band does

### Requirement: Testimonial band with a one-card carousel

A `#f8f9fa` band SHALL hold a centred `h2` "Testimonial" (48px/900) above an
accessible carousel of **four** 700px white cards (40px padding, 60px round
avatar, 18px/300 name, 16.8px `#a6a6a6` role, 16px quoted copy), with previous /
next controls centred **40px below** the card and disabled-looking at the ends.

#### Scenario: Card anatomy at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the testimonial band renders
- **THEN** exactly one card SHALL be visible at a time, 700px wide, centred, with no drop shadow
- **AND** the card SHALL show a 60px round photo, a name, a client-role line and a quoted paragraph
- **AND** the four cards SHALL hold **four distinct people** (source repeats "John Smith" three times — do not)

#### Scenario: Carousel is operable without a mouse

- **GIVEN** keyboard or screen-reader use
- **WHEN** the next/previous control is activated
- **THEN** the visible card SHALL change with a ~1s transition and the control SHALL expose state via `aria-disabled` at the ends
- **AND** each slide SHALL be announced (e.g. `aria-roledescription="slide"`, "2 of 4")
- **AND** autoplay SHALL NOT run (the source does not autoplay this carousel)

#### Scenario: Mobile card

- **GIVEN** a 390px viewport
- **WHEN** the band renders
- **THEN** the card SHALL be 320px wide with 40px padding, and the quote SHALL wrap without clipping

### Requirement: Blue CTA band

A `#007bff` band with 48px padding SHALL carry a centred **28px/900** white
"Join With Us Now!", a 20px/300 white lead line and a yellow CTA button
"Get In Touch!" (13px/900 uppercase, `letter-spacing:2.6px`, radius 4px,
`padding:16px 24px`, ~174×54).

#### Scenario: CTA composition at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the CTA band renders
- **THEN** the heading, lead and button SHALL be centred in a 635px column
- **AND** the button SHALL be `#ffc107` with `#212529` text and a 4px radius, darkening to `#e0a800` on hover/focus
- **AND** the button SHALL navigate to the contact section

### Requirement: Dark footer with Component Dock attribution

The footer SHALL paint `#333` with 117.6px vertical padding and hold three
columns — "About Brawn" (blurb + four social glyphs), "Contact Info" (three
label/value rows) above a "Subscribe" form, and "Quick Links" (four items) —
followed by a centred copyright line that links Component Dock.

#### Scenario: Footer composition at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the footer renders
- **THEN** the columns SHALL be 4/5/3 of the container, with no empty spacer column
- **AND** every heading SHALL be 16px/700 white with 1.6px tracking
- **AND** links SHALL be `rgba(255,255,255,.7)` underlined, turning solid white and un-underlined on hover
- **AND** the subscribe field SHALL be 50px tall with a 2px `#6c757d` border and a flush right yellow button

#### Scenario: Subscribe validates

- **GIVEN** an invalid or empty address
- **WHEN** the form is submitted
- **THEN** an inline error SHALL appear, the field SHALL be marked `aria-invalid`, and no request SHALL be sent
- **AND** a valid address SHALL show a success message and clear the field

#### Scenario: Attribution and year

- **GIVEN** the rendered footer
- **WHEN** the copyright line is read
- **THEN** it SHALL contain the current year, the Brawn name, and a link to `https://www.componentdock.com/` reading "Component Dock"
- **AND** it SHALL NOT mention ColorLib

## Verification checklist

- [ ] `apps/brawn` exists with `package.json` name `@free-react-templates/brawn`, `homepage` `https://brawn.free.componentdock.com`, `public/CNAME` `brawn.free.componentdock.com`
- [ ] Spec passes `/root/free-react-templates/node_modules/.bin/openspec validate template-brawn --type spec`
- [ ] Tests were written first (red), then implementation (green); `scripts/verify-app.sh brawn` is clean (typecheck + lint + 100% coverage + build)
- [ ] Nine bands render in source order at 1440 with the measured heights (±4%): 85 / 900 / 540 / 504 / 449 / 504 / 717 / 312 / 730
- [ ] Header is in flow (not absolute), 85px tall, white, with blue tracked wordmark, six items, hover+keyboard dropdown, labelled search
- [ ] Mobile at 390: header 62px, hero 100vh, services 1 column, split bands image-above-text, no horizontal overflow (`scrollWidth === clientWidth`)
- [ ] Hero `h1` is the only `h1`, 80px/700/uppercase at desktop and 40px at 390; play disc 60→80px and opens the video in a new tab with `rel="noopener noreferrer"`
- [ ] Services: four cards, 90px rotated-square icons with 2px `#007bff` borders, grey glyphs, 19.2px/900 titles
- [ ] Program band paints `#007bff`, three white columns, no card surfaces; reveal is staggered and never leaves content invisible (reduced motion + no-JS)
- [ ] Split bands bleed to opposite viewport edges at 1440 (x 0→720 and x 720→1440) and stack image-first at 390
- [ ] Testimonials: four distinct people, 700px card, 40px padding, 60px round avatar, 48px/900 band heading, keyboard-operable controls with `aria-disabled`
- [ ] CTA button is `#ffc107` → `#e0a800`, 13px/900/2.6px tracked uppercase, 4px radius
- [ ] Footer paints `#333`, 4/5/3 columns, 16px/700 tracked headings, 2px-bordered subscribe field, validating form
- [ ] Footer credits Component Dock with a live `https://www.componentdock.com/` link and the current year; no ColorLib reference anywhere in `apps/brawn`
- [ ] Tokens live in `@theme` (`--brand: #007bff`, `--action: #ffc107`, `--ink: #000`, `--body: #6c757d`, `--surface-light: #f8f9fa`, `--surface-dark: #333`, `--meta: #a6a6a6`, radii 4px/7px) and are used through Tailwind classes, not raw hex
- [ ] Fonts: Montserrat 400/700/900 + Oxygen 300/400/700 loaded from the verified Google Fonts URL; headings resolve to 900 without synthetic bolding
- [ ] Images are `picsum.photos/seed/brawn-*` placeholders; no theme assets, no copied icons (lucide-react)
- [ ] `packages/ui` components and `cn()` reused where they fit; no new runtime dependency
- [ ] `TEMPLATES.md` rows 1222 and 1884 flipped to `[x]` with the `brawn.free.componentdock.com` link by the implementer; README status regenerated
