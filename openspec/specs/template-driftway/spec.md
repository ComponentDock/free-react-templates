# Template: Driftway (Creative — motion-design studio landing page, a template whose product *is* the animation)

## Purpose

A one-page site for a **studio that sells motion work**, and the page is also its own showreel: every band
demonstrates the technique it names. The hero headline is *"Animation is a design decision"* with the last
two words swapping through *design decision → performance budget → accessibility choice*; the second band
is two counter-scrolling marquees of technique names; the third is a four-up counter strip that ends at
`12 / 0 / 60fps / 100%`; and the fourth is a twelve-card catalogue of effects, each card carrying a
category chip (**Hover / Scroll / Ambient / A11y**), a plain-English explanation and the **monospace CSS
primitive** that produces it (`transform: perspective + rotateX/rotateY`, `translateY(110%) inside
overflow-hidden`, `requestAnimationFrame with easeOutQuad`). Nothing is a stock feature grid — the grid is
the argument.

ColorLib's own catalogue copy states the intent exactly: *"An animated template where the animation is the
product, not decoration. Kinetic ships scroll-driven reveals, tilt cards, magnetic buttons, a scroll rail
and self-drawing SVG — and switches every one of them off for visitors who ask for reduced motion."* The
page repeats that promise in the closing FAQ (*"Does it work without JavaScript? Content renders fully."*)
and in the dark band's third rule (*"Reduced motion means off, not faster"*). A recreation that ships the
animations but leaves the accessibility contract out has not recreated this design.

The composition is **centred, then gridded, then one full-bleed dark interruption**. A single-column hero
(`max-w-4xl`, centred) carries a pinging badge, the two-line `h1`, a 20 px lede capped at `max-w-2xl`, three
CTAs (violet pill, white outline pill, a 48 px play disc + label) and a `border-t` stat strip; below it a
**1024 × 512** rounded screenshot. Then the two marquees (opposite directions, edges faded by 96 px
gradients), the counter strip, the 3-column card grid, the **near-black** `#030712` story band with a
4 px sticky progress rail and a self-drawing SVG underline, the 4-up micro-interaction row plus one
magnetic pill, a 3-up testimonial carousel, a 5-row accordion, a violet gradient closing band with a
40 px dot grid, and a 12-column dark footer with a newsletter row. Section rhythm is `py-20` → `sm:py-28`
(**80 / 112 px**); the hero opts into `py-20 / lg:py-32` (**80 / 128 px**) and the marquees into `py-10`
(**40 px**), which is why the marquee band is only **178 px** tall.

The palette is **violet as the brand, lime as the spark, stock Tailwind grey as the chrome**. `primary` is
the stock Tailwind violet ramp used *as* the brand (`#7c3aed` at 600 for every solid CTA, every badge and
every counter; `#6d28d9` for hover; `#5b21b6` for the closing gradient's far stop), and `accent` is the
lime ramp (`#84cc16` at 500 for the marquee's ✦ separators, `#a3e635` at 400 as the gradient's far stop,
`#d9f99d` at 200 for the "Motion patterns" chip). Grey is **stock** `gray-50 … gray-950` and does the
structural work: `gray-50` for the marquee strip, the counter strip and the testimonials band, `gray-100`
for hairlines and the FAQ's plus disc, `gray-200` for every card border and the header rule, `gray-950` for
the story band and the dark-mode page, `gray-900` for the footer. **Only three hues exist** — violet, lime,
grey — plus `red-500` in the contact page's form errors (not on this page).

The type is **one face doing everything**: Poppins 300–800, delivered from `/cf-fonts/` in **18
`@font-face` rules** (six weights × three subsets). The `h1` is **60 / 60 at −1.5 px** weight 700, the
`h2`s are **36 / 40 at −0.9 px** 700, card titles 18 / 28 700, body 16 / 24, ledes 20 / 28, chips and
mono tokens 11 px uppercase at +0.55 px. There is **no second face and no serif**, so the editorial voice
has to come from tracking and weight alone — and the tight heading tracking is the single easiest thing to
lose.

Recreation of the ColorLib "Kinetic" design (https://colorlib.com/wp/template/kinetic/, live preview
https://preview.colorlib.com/theme/kinetic/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `kinetic`
* **ColorLib page:** https://colorlib.com/wp/template/kinetic/ — **HTTP 200, 111,693 B**, `<title>`
  **"Kinetic - Animated Website Template 2026 - Colorlib"**, breadcrumb *"HTML & CSS Website Templates ›
  Agency Website Templates › Kinetic"*, dated **September 1, 2026**, categories **Agency · Astro ·
  Creative · Tailwind CSS**, credits *"Images from Unsplash"*. `og:description` and
  `<meta name="description">` both carry the catalogue paragraph quoted above.
* **Live preview:** https://preview.colorlib.com/theme/kinetic/ — **HTTP 200, 76,318 B** read 2026-10-25
  with `curl -4`. A 2026 **Astro** build: one hashed stylesheet `_astro/Base.60HYJDXP.css` (**65,542 B**),
  one behaviour bundle `_astro/Base.astro_astro_type_script_index_0_lang.**YE-jyORa**.js` (**18,404 B**)
  and the view-transition router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.CYDbzu1r.js` (**16,357 B** — the same
  `CYDbzu1r` router every 2026 Astro build in this catalogue ships). **18,404 B is a third kit size**:
  neither the 16,233 B base kit nor the 17,669 B booking kit. It carries tilt, magnetic, parallax,
  typewriter, counter, carousel, FAQ, video-modal, lightbox, blog filters, billing toggle and form
  validation initializers — i.e. **more than the landing page uses** (see §Behaviour).
* **No archive:** `https://preview.colorlib.com/downloads/free/kinetic.zip` → **404** (9 B `text/plain`).
  The live preview is the only authoritative source for both DOM and tokens.
* **Prefix ladder** (all **404**, 9 B): `theme/bootstrap/kinetic/`, `theme/bb/kinetic/`,
  `etc/cs/kinetic/index.html`. This is a normal 2026 design at `theme/<slug>/`, not a Bootstrap-family demo.
  `/theme/kinetic/index.html` is the same **76,318-byte** document as the directory URL.
* **Inner pages are live** (they are the authority for anything a single page has to invent):
  `pricing/` **40,815 B** · `about/` **31,288 B** · `blog/` **36,703 B** · `contact/` **29,767 B** ·
  `terms/` **30,745 B** · `privacy/` **32,006 B** · `elements/` **50,560 B** — all HTTP **200**. The
  **`.html` form of every route is 404** (`about.html`, `licence.html`, … all 9 B), so only the
  directory form exists; a bare `/about` answers **308** with a trailing-slash `Location`.
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**kinetic-template.jpg** — **HTTP
  200, 320,074 B**, `image/jpeg` (not AVIF), **2400 × 1892**. A **macOS browser window on a pale grey
  desk ground** (traffic lights, rounded title bar, soft shadow) framing header → hero badge → `h1` →
  lede → three CTAs → the four-stat strip → the top of the hero image. It is a genuine capture, and it
  shows **nothing** below the hero.
* **New name:** `driftway` (`apps/driftway`, `@free-react-templates/driftway`) — one lowercase word:
  *drift* is the motion, *way* is the path; it names the subject without touching the source name.
  Checked 2026-10-25 against `origin/main` (`40c4c3a2e`): **no** `apps/driftway`, **no**
  `openspec/specs/template-driftway/`, **no** `docs/templates/driftway/`, `git grep -il driftway
  origin/main` prints **nothing** (0 hits repo-wide, so the zero-substring rule holds), `grep -ci
  driftway TEMPLATES.md` is **0**, and all three ColorLib URL forms — `wp/template/driftway/`,
  `preview.colorlib.com/theme/driftway/`, `preview.colorlib.com/theme/bootstrap/driftway/` — return
  **404**. Re-run those checks before renaming. (`swayline`, `easeflow`, `glidepath`, `tiltfield` were
  also free and verified; `motional` was rejected — `git grep -il motional` hits **201** files because it
  is a substring of *emotional*; **`kinetic` itself is taken** — `apps/kinetic` recreates a different
  ColorLib design, Bobsled, and `openspec/specs/template-kinetic/spec.md` documents that other design.)
* **Deploy target:** https://driftway.free.componentdock.com (`apps/driftway/public/CNAME`, `homepage` in
  `apps/driftway/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** (see below). Suggested home: **`## Creative`** —
  ColorLib files this design under *Agency* first and *Creative* second, and `TEMPLATES.md` has no
  `## Agency` section. The heading reads **`## Creative (55)`** at line **1455** on `origin/main`
  `40c4c3a2e`; the next heading is `## Dentist (14)` at line 1513. Insert in source-name alphabetical
  order — `Katt` (1485) < `Kiddos` (1486) < **`Kinetic`** < `Labs` (1487) — so the new row goes **between
  `Kiddos` and `Labs`**, and the heading becomes **`(56)`**. Re-measure both the line numbers and the count
  at merge time: this file moves by dozens of lines a day.

### Why this design has no row (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is exhausted — **0** `- [ ]`, every mark `[x]` — but the catalogue is not complete: all 40
pages of https://colorlib.com/wp/templates/ were crawled and compared with the slugs the checklist cites,
and **256 designs are on the listing that the checklist never recorded** (42 standalone + 214 snippet
variants). `docs/catalog-coverage.md` carries this design's line:
`| kinetic | app exists (other design); orphan prep (other design) |`. So **the app name is taken but the
design is not**: `apps/kinetic` and `openspec/specs/template-kinetic/` recreate ColorLib **Bobsled**, and
this design needs a fresh invented name — which is exactly why the row is unbuilt while its name looks
used.

Queue order in that table: … `halfpast` → `heatline` → `journeyman` → **`kinetic` (this)** → `lantern` →
`mainline` → `marrow` → `metroflow` → `nightshift` → `nodig` → `onyx` → … (`docs/catalog-coverage.md`
holds all 42). Prepped and unbuilt before this one: Percline, Quarto, Hedgerow, Slotline, Pipewright;
shipped: Thermly, Plantroom, Veranda, Flowcert, Aquifer, Smallpaw, Kettle, Chalkline, Emberly, Rodline,
Brassworks, Closeknit, Stoke.

⚠️ **Why the usual "is it prepped?" grep lies for this slug.** `grep -rl 'theme/kinetic/' openspec/specs`
returns **two** files: this one and `openspec/specs/template-kinetic/spec.md` — the latter only because its
`## Design tokens` section carries a 2026-10-23 **TOKEN-UNVERIFIED** note that cites
`https://preview.colorlib.com/theme/kinetic/` while explaining which colours the demo does not paint. That
file recreates **Bobsled** (its front-matter says so). So the slug-coverage scan treats `kinetic` as
covered, the checklist scan reports `items with NO spec on main: 0`, and the design sits unbuilt behind a
false positive. When auditing, read the spec's **front-matter `Preview:` line / `Source slug:` line**, never
a bare `theme/<slug>/` hit.

**Implementer note:** because there is no row yet, add one **before** the PR claims anything — paste this
line into `## Creative`, between **Kiddos** and **Labs**, and bump the count:

```
- [x] **Kinetic** — [colorlib](https://colorlib.com/wp/template/kinetic/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/kinetic-template.jpg) · [driftway](https://driftway.free.componentdock.com)
```

⚠️ **Re-measure the line numbers and the count yourself** — this prep recorded `Katt` at 1485, `Kiddos`
at 1486, `Labs` at 1487 and `## Creative (55)` on `40c4c3a2e`. Locate `## Creative`, then find the last
row whose source name sorts before `Kinetic`.

## Reference readings (2026-10-25, `curl -4`)

| reading | URL | status | bytes |
| --- | --- | --- | --- |
| landing page | `https://preview.colorlib.com/theme/kinetic/` | 200 | 76,318 |
| stylesheet | `…/kinetic/_astro/Base.60HYJDXP.css` | 200 | 65,542 |
| behaviour bundle | `…/kinetic/_astro/Base.astro_astro_type_script_index_0_lang.YE-jyORa.js` | 200 | 18,404 |
| view-transition router | `…/kinetic/_astro/ClientRouter…CYDbzu1r.js` | 200 | 16,357 |
| inline `<style>` (fonts) | inside the HTML `<head>` | — | **18** `@font-face` rules, Poppins 5.2.7, all `/cf-fonts/s/…` |
| inline `<script>` (theme) | inside the `<head>` | — | `applyTheme()` — `localStorage.theme` or `prefers-color-scheme` |
| inline `<script>` (preloader) | end of `<body>` | — | window `load` → fade 300 ms → `remove()` |
| favicon | `…/kinetic/favicon.svg` | 200 | 377 |
| header logo (light) | `…/kinetic/assets/img/logo.svg` | 200 | 572 |
| footer logo (light ink) | `…/kinetic/assets/img/logo-light.svg` | 200 | 571 |
| og image | `…/kinetic/og-image.jpg` | **404** | 9 — `<meta property="og:image" content="/og-image.jpg">` is dead |
| archive | `…/downloads/free/kinetic.zip` | **404** | 9 |
| catalogue shot | `https://colorlib.com/wp/wp-content/uploads/sites/2/kinetic-template.jpg` | 200 | 320,074 |
| catalogue page | `https://colorlib.com/wp/template/kinetic/` | 200 | 111,693 |
| inner: pricing | `…/kinetic/pricing/` | 200 | 40,815 |
| inner: about | `…/kinetic/about/` | 200 | 31,288 |
| inner: blog | `…/kinetic/blog/` | 200 | 36,703 |
| inner: contact | `…/kinetic/contact/` | 200 | 29,767 |
| inner: terms | `…/kinetic/terms/` | 200 | 30,745 |
| inner: privacy | `…/kinetic/privacy/` | 200 | 32,006 |
| inner: elements (style guide) | `…/kinetic/elements/` | 200 | 50,560 |
| route with `.html` | `…/kinetic/about.html` (and 6 siblings) | **404** | 9 |

Google Fonts delivery for the recreation — **HTTP 200**, verified with `curl -4 -o /dev/null -w
'%{http_code}'` on 2026-10-25:

```
https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap
```

Poppins is genuinely the single face the reference ships (18 `/cf-fonts/s/poppins/5.2.7/…woff2` faces,
weights 300/400/500/600/700/800 × devanagari/latin/latin-ext). There is **no substitution to document** —
unlike the Georgia and script-face cases elsewhere in this repo — but do **not** add a serif: this design
has none.

## Design tokens (measured from `Base.60HYJDXP.css`, 65,542 B, and from `getComputedStyle` at 1440 px)

### Brand ramp — `primary` (**stock Tailwind violet, used as the brand**)

| token | hex | where it carries the design |
| --- | --- | --- |
| `primary-50` | `#f5f3ff` | the hero's `from-primary-50` gradient stop (the hero ground fades violet-white → white) and the hero badge's fill |
| `primary-100` | `#ede9fe` | the **card category chips** (`bg-primary-100`), the testimonial avatar discs, the "Micro-interactions" / "Feedback" / "Questions" kicker pills, the 48 px hero play button's aura |
| `primary-200` | `#ddd6fe` | the hero badge's 1 px border (`border-primary-200`); also the compiled `bg-primary-200/50` blob behind the hero |
| `primary-300` | `#c4b5fd` | dark-mode only (`dark:text-primary-300` on card tokens and kickers) |
| `primary-400` | `#a78bfa` | the five `primary-400` stars in every testimonial, the pinging badge dot's outer ring, `dark:text-primary-400` on counters |
| `primary-500` | `#8b5cf6` | focus rings, the story band's progress-rail gradient start, the micro-cards' bottom rule gradient start |
| `primary-600` | `#7c3aed` | **the brand**: every solid CTA (`bg-primary-600`), the `.btn-primary` component class, the counter strip's numbers, the closing band's gradient start, `#scroll-progress`'s fill, the back-to-top disc, the cookie "Accept All" |
| `primary-700` | `#6d28d9` | **every hover** (`hover:bg-primary-700`), the hero badge's label, the card tokens' monospace text (`text-primary-700`), the closing band's white CTA label |
| `primary-800` | `#5b21b6` | the card **chip** text (`text-primary-800`), the "Micro-interactions" kicker's text |
| `primary-900` | `#4c1d95` | dark mode only, always as an opacity variant (`dark:bg-primary-900/50`, `dark:bg-primary-900/30`) |

### Accent ramp — `accent` (**stock Tailwind lime, the spark**)

| token | hex | where it carries the design |
| --- | --- | --- |
| `accent-200` | `#d9f99d` | the **"Motion patterns"** chip in the showcase band (`bg-accent-200` / `text-accent-900`) |
| `accent-300` | `#bef264` | the story band's "How it is built" chip text (`text-accent-300`) |
| `accent-400` | `#a3e635` | the self-drawing SVG's gradient **far stop**, the micro-cards' bottom rule and the story progress rail's gradient far stop (`to-accent-400`) |
| `accent-500` | `#84cc16` | the **✦ separator** in both marquee rows (`text-accent-500`) — the only place the lime is a foreground colour at full strength |
| `accent-900` | `#365314` | the "Motion patterns" chip's text, and `dark:bg-accent-900/50` |

Status hue on this page: **none**. `red-500` exists in the sheet for the contact page's form errors only.

### Chrome greys (stock Tailwind)

| token | hex | where |
| --- | --- | --- |
| `gray-50` | `#f9fafb` | **the marquee strip, the counter strip and the testimonials band ground** (`bg-gray-50`), and the marquee's edge-fade gradient |
| `gray-100` | `#f3f4f6` | the card tokens' `border-t` hairline, the FAQ's 32 px plus disc (`bg-gray-100`), the mobile CTA's "Call Now" ground |
| `gray-200` | `#e5e7eb` | **every card border** (`border-gray-200`), the header's bottom rule, the hero stat strip's `border-t`, the hero image's 1 px ring, the FAQ's `divide-y`, the cookie strip's top rule |
| `gray-300` | `#d1d5db` | the hero's secondary CTA border (`border-gray-300`), marquee row 2's text (`text-gray-300`) |
| `gray-400` | `#9ca3af` | the marquee rows' text (row 1), the story band's paragraphs (`text-gray-400`), the micro-cards' mono tokens (`text-gray-400`), the footer blurb/links |
| `gray-500` | `#6b7280` | the footer's legal line and "Style Guide" link (`text-gray-500`) |
| `gray-600` | `#4b5563` | **body copy in the bands** (`text-gray-600`): hero lede at `sm`, card paragraphs, stat labels, the FAQ arrow icon |
| `gray-700` | `#374151` | the hero's secondary CTA label (`text-gray-700`), the "Watch Demo" label, `hover:bg-gray-700` on the footer socials, the newsletter input border |
| `gray-800` | `#1f2937` | the footer's social tiles (`bg-gray-800`), the newsletter input ground, dark-mode cards (`dark:bg-gray-800`) |
| `gray-900` | `#111827` | **the footer ground** (`bg-gray-900`), every heading's ink (`text-gray-900`), dark-mode band grounds |
| `gray-950` | `#030712` | **the story band's ground** (`bg-gray-950`) and the dark-mode page ground |

### Dark mode (measured by clicking `[data-dark-toggle]`)

| role | light | dark |
| --- | --- | --- |
| page / body | `#ffffff` | `#030712` (`gray-950`) |
| header | `rgba(255,255,255,.8)` + `blur(16px)` | `oklab(0.1296 -0.0040 -0.0271 / .8)` ≈ `gray-950/80` + blur |
| hero gradient | `#f5f3ff` → `#ffffff` | `#111827` → `#030712` (`gray-900` → `gray-950`) |
| card | `#ffffff` / border `gray-200` | `gray-900` / border `gray-800` |
| counters | `primary-600` | `primary-400` |
| story band | `gray-950` (unchanged) | `gray-950` (unchanged) |
| footer | `gray-900` (unchanged) | `gray-900` (unchanged) |
| `documentElement.colorScheme` | `normal` | `normal` (the sheet never sets it), `localStorage.theme = "dark"` |

### Typography

| element | face | size / line-height | weight | tracking | colour |
| --- | --- | --- | --- | --- | --- |
| `html`/`body` | `Poppins, system-ui, sans-serif` | 16 / 24 | 400 | normal | `#111827` on `#ffffff` |
| hero badge | Poppins | 14 | 500 | normal | `primary-700` on `primary-50`, 1 px `primary-200`, `rounded-full`, `6 / 16` padding |
| hero `h1` | Poppins | **60 / 60** (`lg:text-6xl`), sm 48, base 36 | **700** | **−1.5 px** (`tracking-tight` at 60 px) | `gray-900` |
| `h1` gradient phrase | Poppins | as `h1` | 700 | −1.5 px | `.text-gradient` — `#7c3aed → #a78bfa` clipped to text |
| hero lede | Poppins | 20 / 28 (`sm:text-xl`), 18 at base | 400 | normal | `gray-600` |
| hero CTA label | Poppins | 16 | 500 | normal | white / `gray-700` |
| hero stat number | Poppins | 36 (`text-3xl lg:text-4xl`), 30 below 1024 | 700 | normal | `gray-900` |
| hero stat label | Poppins | 14 | 400 | normal | `gray-600` |
| marquee item | Poppins | **30 / 36** (`text-2xl sm:text-3xl`) | **700** | −0.025em (`tracking-tight`) | `gray-400` (row 1) / `gray-300` (row 2) |
| counter strip number | Poppins | **48 / 48** (`text-4xl lg:text-5xl`) | 700 | normal | `primary-600` |
| counter strip label | Poppins | 14 | 500 | normal | `gray-600` |
| band `h2` | Poppins | **36 / 40** (`text-3xl sm:text-4xl`) | 700 | **−0.9 px** (`tracking-tight`) | `gray-900` / white in the story + closing bands |
| band lede | Poppins | 16 / 24 (`text-gray-600`), 18 in testimonials/FAQ/closing | 400 | normal | `gray-600` |
| card chip | Poppins **mono** stack | **11** (`text-[11px]`) | 600 | **+0.55 px** (`tracking-wider`), uppercase | `primary-800` on `primary-100`; `accent-900` on `accent-200` for "Motion patterns" |
| card `h3` | Poppins | 18 / 28 (`text-lg`) | 700 | normal | `gray-900` |
| card body | Poppins | 14 / 22.75 (`text-sm leading-relaxed`) | 400 | normal | `gray-600` |
| card token | Poppins **mono** stack | 12 (`text-xs`) | 400 | normal | `primary-700`, above a `border-t gray-100` hairline |
| micro-card code | Poppins **mono** stack | 11 (`text-[11px]`) | 400 | +0.55 px, uppercase | `gray-400` |
| story band number | Poppins **mono** stack | 48 / sm 60 (`text-5xl sm:text-6xl`) | 700 | normal | `white/15` |
| story band `h3` | Poppins | 24 / sm 30 (`text-2xl sm:text-3xl`) | 700 | normal | `white` |
| story band paragraph | Poppins | 16 / 26 (`leading-relaxed`) | 400 | normal | `gray-400` |
| testimonial quote | Poppins | 18 / 28 (`text-lg`) | 500 | normal | `gray-900` |
| FAQ question | Poppins | 18 / 28 (`text-lg`) | 600 | normal | `gray-900` |
| FAQ answer | Poppins | 16 / 24 | 400 | normal | `gray-600` |
| footer column head | Poppins | 14 | 600 | +0.7 px (`tracking-wider`), uppercase | `white` |
| footer link / blurb | Poppins | 16 / 24, blurb `text-gray-400` | 400 | normal | `gray-400` |
| footer legal | Poppins | 14 | 400 | normal | `gray-500` |

Rules that are **not** utilities and must be copied verbatim (all from the compiled sheet):

* `html{scroll-behavior:smooth; -webkit-text-size-adjust:100%}`; `body{line-height:1.5}` — the sheet never
  sets a body colour, so `body` inherits `#111827` from Tailwind's preflight reset.
* `.container` → `width:100%`, capped at **1280 px**, with `px-4` and `lg:px-8`, so the inner content
  measures **1216 px** at 1440 and **358 px** at 390.
* `.tilt` → `transform: perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));
  will-change:transform; transition: transform .22s cubic-bezier(.22,1,.36,1)`.
* `.marquee` → `display:flex; gap:calc(var(--spacing)*8) /* 32 px */; width:max-content;
  animation:32s linear infinite kinetic-marquee`, and `.marquee--reverse{animation-direction:reverse}`.
  `@keyframes kinetic-marquee{0%{transform:translate(0)}to{transform:translate(-50%)}}`.
* `.marquee-viewport:hover .marquee{animation-play-state:paused}`.
* `.reveal-line{display:block;overflow:hidden}` / `.reveal-line>span{display:block;
  transform:translateY(110%); transition:transform .7s cubic-bezier(.22,1,.36,1)}` /
  `.reveal-line.is-visible>span{transform:translateY(0)}`.
* `.draw-path{stroke-dasharray:var(--len,400); stroke-dashoffset:var(--len,400);
  transition:stroke-dashoffset 1.4s ease-in-out}` / `.draw-path.is-visible{stroke-dashoffset:0}`.
* `.magnetic{will-change:transform; transition:transform .26s cubic-bezier(.22,1,.36,1)}`.
* `.shadow-soft{box-shadow:0 4px 16px -4px #0000001a}` (testimonial cards only).
* `.text-gradient{background-image:linear-gradient(to right, #7c3aed, #a78bfa); ...}` — the hero's rotating
  phrase and the `h1`'s second line.
* `.animate-hero-float{animation:8s ease-in-out infinite hero-float}` /
  `.animate-hero-float-reverse{animation:10s ease-in-out infinite reverse hero-float}` with
  `@keyframes hero-float{0%,to{transform:translate(0) scale(1)} 33%{transform:translate(30px,-20px)
  scale(1.05)} 66%{transform:translate(-20px,15px) scale(.95)}}` — the two blurred blobs behind the hero.
* `.img-shimmer{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%) 0 0/200% 100%;
  animation:1.5s ease-in-out infinite shimmer}` — used only by the footer logo.
* `[data-nav-link].nav-active{color:#111827;font-weight:600}` — the active state the landing page's
  IntersectionObserver actually fires (see Requirement 2).
* **`@media (prefers-reduced-motion:reduce)`** — one block, six rules:
  `.marquee{animation:none}`, `.tilt{transition:none;transform:none}`,
  `.magnetic{transition:none;transform:none!important}`, `.reveal-line>span{transition:none;transform:none}`,
  `.draw-path{stroke-dashoffset:0;transition:none}`. This block is the design's promise; it is not optional.
* `.btn`, `.btn-primary`, `.card`, `.container-narrow` are compiled. **`.btn-primary` is used once** (the
  magnetic pill) — `inline-flex; gap:8px; border-radius:8px; padding:10px 20px; font-size:14px;
  font-weight:500; color:#fff; background:#7c3aed; box-shadow:0 10px 15px -3px #7c3aed40,
  0 4px 6px -4px #7c3aed40` with `hover{background:#6d28d9; box-shadow:…}` and a `#8b5cf6` focus ring.
  Inherit it, or author the utilities — but keep the 8 px radius and the violet shadow.
* `.btn`, `.card`, `.container-narrow`, `@keyframes shimmer` and the `.prose` block are **compiled but
  unused by this page** except where noted; do not import them wholesale.

### Buttons, pills, radii, shadows (measured at 1440)

| control | classes (source) | measured |
| --- | --- | --- |
| header CTA | `rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-700` | **10 / 20** padding, radius **8**, 14 px, `#7c3aed`, no shadow |
| hero primary CTA | `rounded-lg bg-primary-600 px-6 py-3 text-base font-medium shadow-lg shadow-primary-600/25 hover:bg-primary-700` | radius **8**, 16 px, violet-tinted `shadow-lg` |
| hero secondary CTA | `rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700` | 1 px `gray-300`, white ground |
| hero "Watch Demo" | `flex h-12 w-12 rounded-full bg-primary-600` disc + 14 px label | **48 px** disc, `gap-3` |
| badges / kicker pills | `inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider` (showcase: `px-3 py-1 text-xs`; hero: `px-4 py-1.5 text-sm`) | 24–28 px tall, radius full |
| card chip | `rounded-lg bg-primary-100 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary-800` | radius **8**, 22 px tall |
| pattern card | `rounded-3xl border border-gray-200 bg-white p-6` | **389 × 250**, radius **24 px**, 24 px padding, **no shadow** |
| micro card | `rounded-2xl border border-gray-200 bg-white p-6 hover:-translate-y-2 hover:border-primary-400 hover:shadow-xl` | radius **16 px**, 300 ms transition |
| testimonial card | `rounded-2xl bg-white p-8 shadow-soft` | radius **16 px**, 32 px padding, `0 4px 16px -4px #0000001a` |
| magnetic pill | `.btn-primary px-8 py-4 text-base` + `data-magnetic="0.3"` | radius **8**, 32 px sides |
| FAQ plus disc | `flex h-8 w-8 rounded-full bg-gray-100 text-gray-600` | **32 px** disc, rotates **45°** when open |
| FAQ row | `py-6` inside `divide-y divide-gray-200` | 24 px vertical padding, 1 px rules |
| closing-band primary | `rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-700 shadow-lg` | radius **8**, 32 px sides |
| closing-band secondary | `rounded-lg border-2 border-white/30 px-8 py-4 text-base font-medium text-white` | 2 px white/30 border |
| social tile | `rounded-lg bg-gray-800 p-2.5 text-gray-400 hover:bg-gray-700` | 40 px square, radius **8** |
| newsletter button | `rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white` | radius **8** |
| back-to-top | `h-12 w-12 rounded-full bg-primary-600 shadow-lg bottom-6 right-6` | **48 px** disc |
| cookie buttons | `rounded-lg px-4 py-2 text-sm font-medium` (outline `border-gray-300` / solid `primary-600`) | 36 px tall |

Radii in use: **8 px** (`rounded-lg`: every button, every chip, every social tile, every input),
**16 px** (`rounded-2xl`: micro cards, testimonial cards, the hero image), **24 px** (`rounded-3xl`: pattern
cards), **full** (`rounded-full`: every badge/pill, the play disc, avatar discs, the FAQ plus, the
back-to-top). No `rounded-xl` on this page.

Shadows in use: Tailwind `shadow-lg` (violet-tinted on the brand CTAs via `shadow-primary-600/25`),
`shadow-xl` (micro-card hover, magnetic pill hover), `shadow-2xl` (`0 25px 50px -12px rgba(0,0,0,.25)` on
the hero image), `.shadow-soft` on testimonial cards. Pattern cards carry **no shadow** — only a border.

### Band heights (measured, document `scrollHeight`)

| band | 1440 | 1024 | 768 | 390 |
| --- | --- | --- | --- | --- |
| header (sticky) | **81** | 81 | **65** | 65 |
| 1 hero | **1,437** | 1,405 | 1,137 | 1,208 |
| 2 marquee strip | **178** | 178 | 178 | 170 |
| 3 counter strip | **238** | 258 | 218 | 338 |
| 4 `#showcase` | **1,504** | 1,643 | 2,074 | 3,709 |
| 5 `#scroll-story` | **1,413** | 1,413 | 1,413 | 1,903 |
| 6 `#interactions` | **805** | 845 | 963 | 1,320 |
| 7 `#testimonials` | **768** | 824 | 742 | 802 |
| 8 `#faq` | **820** | 820 | 756 | 876 |
| 9 `#contact` | **452** | 452 | 380 | 512 |
| footer | **592** | 592 | 970 | 1,262 |
| **document** | **8,288** | 8,511 | 8,896 | 12,165 |

The header is `h-16` (64 px) + 1 px border below 1024 and `lg:h-20` (80 px) + 1 px above it. The pattern
grid is **3 columns at ≥1024, 2 at ≥640, 1 at 390**; the hero `h1` is 60 → 48 → 36 px at those widths.

⚠️ **The reference overflows horizontally at 390 px** (`documentElement.scrollWidth` **487** vs
`clientWidth` **390**). The cause is the footer's newsletter row: the input is **350 px** and the
"Subscribe" button **113 px** inside a **358 px** column, so the form measures **471 px**. It is a genuine
defect — **do not copy it**; let the input shrink (`min-w-0` + a real `flex` parent) or stack the button
below 400 px, and assert `scrollWidth === clientWidth` at 320/390/768/1024/1280/1440.

## Reference document order

Measured ids, in document order, with the element each one is:

```
#preloader            (fixed inset-0 z-100, bg-white, 40 px spinning ring; faded + removed 300 ms after load)
#main-content         (the skip link's target — <main>)
#scroll-progress      (fixed top-0 left-0 z-60, h-0.5 (2 px), bg-primary-600, width = scroll %)
HEADER                (sticky top-0 z-50, 81 px, border-b gray-200, bg-white/80 backdrop-blur-lg; shadow-lg past 50 px)
  band 1  <section>            (no id, hero, 1,437 px, gradient primary-50 → white)
  band 2  <section>            (no id, marquee strip, 178 px, border-y gray-200, bg-gray-50)
  band 3  <section>            (no id, counters, 238 px, border-y gray-200, bg-gray-50)
  band 4  #showcase            (1,504 px, white — twelve pattern cards)
  band 5  #scroll-story        (1,413 px, bg-gray-950, white text — three rules + SVG)
  band 6  #interactions        (805 px, white — four micro cards + magnetic pill)
  band 7  #testimonials        (768 px, bg-gray-50 — 3-up carousel)
  band 8  #faq                 (820 px, white — 5-row accordion)
  band 9  #contact             (452 px, gradient primary-600 → primary-800 — closing CTA)
FOOTER                (bg-gray-900, 592 px, 4 columns + newsletter + legal bar)
#mobile-cta           (fixed bottom-0 z-40, lg:hidden, "Call Now" + "Book a Tour", 2 buttons)
#cookie-consent       (fixed bottom-0 z-50, 87 px, slides up at +1.5 s)
#back-to-top          (fixed bottom-6 right-6 z-50, 48 px violet disc; opacity 0 + translateY(16px) until 300 px)
```

⚠️ Two ids exist but are **not** page anchors: `#kineticGradient` is the SVG `<linearGradient>` inside the
story band, and `#spaces` — referenced by **four footer links** — **does not exist at all** (see the link
census).

## Band-by-band content (the reference's real copy — reproduce order, paraphrase lightly)

### 0 — Header (81 px at ≥1024, sticky)

Logo = **two `<img>` tags** (`logo.svg` in light, `logo-light.svg` in dark), `h-8 lg:h-10`, `gap-2`. Nav
(`hidden lg:flex lg:items-center lg:gap-8`, 32 px gaps) — seven labels, each 14 px / 500 / `gray-600`,
hover `gray-900`: **Showcase** (`#showcase`) · **Scroll story** (`#scroll-story`) · **Interactions**
(`#interactions`) · **About** (`/about`) · **Licence** (`/pricing` — the label does not match the route) ·
**Blog** (`/blog`) · **Contact** (`/contact`). Right cluster: a moon button (`data-dark-toggle`) and the
violet **Get the template** pill (`/pricing`). Below 1024 the nav collapses to a hamburger
(`data-mobile-toggle`, `aria-expanded`) over a `hidden` panel (`data-mobile-menu`) that lists the same
seven labels at 16 px plus a full-width violet CTA.

### 1 — Hero (1,437 px, `bg-gradient-to-b from-primary-50 to-white`)

Two absolutely positioned, blurred, floating blobs (`500 px` and `400 px`, `primary-200/50` and
`primary-100/40`, `blur-3xl`, `data-parallax="0.15"` / `"-0.1"`, `animate-hero-float(-reverse)`), both
`aria-hidden`. Centred column (`max-w-4xl`), `py-20 lg:py-32`:

* Badge — pinging 8 px dot (two spans: `animate-ping` + solid core) + **"Motion that survives a Lighthouse
  audit"**.
* `h1` — **"Animation is a"** `<br>` then the rotating gradient phrase, initial **"design decision"**;
  `data-typewriter` carries `["design decision","performance budget","accessibility choice"]`.
* Lede — *"Kinetic is a template for sites that move. Scroll-driven reveals, cursor-reactive cards,
  magnetic buttons and self-drawing SVG — built on transforms and opacity only, and fully disabled for
  visitors who prefer reduced motion."*
* CTAs — **Get the template** (violet, → `/pricing`) · **See the effects** (white outline, → `#showcase`) ·
  **Watch Demo** (48 px violet play disc + 14 px label, `data-video-modal` pointing at a YouTube embed).
* Stat strip — `mt-16 … border-t border-gray-200 pt-10`, `grid-cols-2 sm:grid-cols-4`, `gap-8`:
  **12 Motion patterns · 60fps On mid-range mobile · 0 kb Animation libraries · 100% Reduced-motion safe**.
* Hero image — `mt-16 lg:mt-24`, `max-w-5xl`, `rounded-2xl shadow-2xl ring-1 ring-gray-200`, **1024 × 512**
  at 1440, `object-cover`, `loading="eager"`, alt *"A scroll-driven animation sequence mid-transition"*
  (the source image is a hotlinked Unsplash URL — replace it, and rewrite the alt).

### 2 — Marquee strip (178 px, `border-y gray-200`, `bg-gray-50`, `py-10`)

Two `.marquee` rows, each `max-content` wide, `gap-8`, **32 s linear infinite**, row 2 also
`marquee--reverse`; both pause on `.marquee-viewport:hover`. Each row is **doubled** (the list is repeated
so `translate(-50%)` loops invisibly). Row 1 items are 30 px / 700 / `gray-400`, separated by a lime ✦:
**Scroll reveal · Cursor tilt · Magnetic buttons · Path drawing · Parallax depth · Count up** (6 × 2 = 12
`<li>`). Row 2 is `gray-300` with the same ✦: **Transform only · No layout thrash · GPU composited ·
Reduced-motion safe · Zero dependencies** (5 × 2 = 10 `<li>`). Both edges are masked by 96 px
(`w-24`) `from-gray-50 to-transparent` gradients, `aria-hidden`.

### 3 — Counter strip (238 px, `border-y gray-200`, `bg-gray-50`, `py-16 lg:py-20`)

Four `[data-counter]` spans in a `grid-cols-2 sm:grid-cols-4 gap-8`, each an `IntersectionObserver`
count-up from 0 over **2 s** (cubic ease-out) to its data value: **`12` Motion patterns included ·
`0` Animation libraries loaded · `60fps` Target on mid-range mobile · `100%` Effects respect reduced
motion**. Numbers 48 px / 700 / `primary-600`; labels 14 px / 500 / `gray-600`. The `0` one is deliberate —
it is the joke that lands the statistic.

### 4 — `#showcase` (1,504 px, white, `py-20 sm:py-28`)

Centred head (`max-w-4xl`): lime chip **"Motion patterns"**, `h2` **"Twelve effects, none of them a
library"**, lede *"Every pattern here is transform and opacity only, so the browser can composite it on the
GPU without touching layout."* Then `ul.mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3` — **twelve**
`li.tilt` cards, `data-tilt="6"`, each with its own reveal delay `0, 80, 160, … 880` (80 ms steps — note
the copy claims *ninety* milliseconds, the implementation uses eighty):

| # | chip | title | body | token |
| --- | --- | --- | --- | --- |
| 1 | Hover | Cursor tilt | Cards rotate toward the pointer with a spring easing and settle back when it leaves. This card is doing it right now. | `transform: perspective + rotateX/rotateY` |
| 2 | Scroll | Line reveal | Headings arrive one line at a time from behind a mask, staggered by ninety milliseconds so the eye can follow. | `translateY(110%) inside overflow-hidden` |
| 3 | Hover | Magnetic buttons | The call to action drifts toward the cursor within its own bounds, then springs home. Subtle enough that most people only feel it. | `translate() driven by pointer offset` |
| 4 | Scroll | Self-drawing SVG | A stroke draws itself in when the section enters view, using dash offset rather than a JavaScript tween. | `stroke-dasharray + stroke-dashoffset` |
| 5 | Scroll | Scroll progress | A rail across the top of the story section scales horizontally with how far through it you are. | `scaleX() bound to bounding-rect position` |
| 6 | Ambient | Infinite marquee | A duplicated track translating by exactly half its width, so the loop point is invisible. Pauses on hover. | `translateX(-50%) on a doubled list` |
| 7 | Scroll | Staggered grid | Cards fade up in sequence with a delay derived from index, rather than every card firing at once. | `IntersectionObserver + transition-delay` |
| 8 | Scroll | Depth parallax | Background shapes drift at a fraction of scroll speed to imply distance without moving real content. | `translateY(scroll × factor)` |
| 9 | Scroll | Count up | Numbers animate from zero when they enter view, easing out so the final digits settle rather than snap. | `requestAnimationFrame with easeOutQuad` |
| 10 | Hover | Underline sweep | A gradient rule scales from the left edge on hover. Used on cards where a full lift would be too much. | `scaleX with transform-origin left` |
| 11 | Hover | Blur bloom | A soft gradient blob scales behind a card on hover, adding warmth without a second image request. | `scale() on a blurred radial gradient` |
| 12 | **A11y** | Reduced-motion fallback | Not an effect but the most important pattern here. Every animation above is switched off, not merely shortened. | `prefers-reduced-motion:reduce guards` |

Every card also carries a decorative `160 px` blurred blob in the top-right corner
(`from-primary-400/30 to-accent-400/30`, `blur-2xl`) that scales to **1.5×** on `group-hover`.

### 5 — `#scroll-story` (1,413 px, `bg-gray-950`, `text-white`, `py-24 sm:py-32`)

Top of the band: a **sticky** rail `h-1 w-full bg-white/10` whose inner `div` is
`bg-gradient-to-r from-primary-500 to-accent-400` with `transform: scaleX(0 → 1)` driven by the band's
scroll progress (`data-scroll-progress`). Head (`max-w-2xl`, `mt-16`): white/10 chip **"How it is built"**
in `accent-300`, `h2` **"Motion with a performance budget"** inside `.reveal-line`, and *"Three rules that
decide whether an effect ships."* Then `ol.space-y-24`, three rows in a `sm:grid-cols-[auto_1fr]` grid with
a 48/60 px monospace ordinal at `white/15`:

1. **01 — Transform and opacity, nothing else.** *"Animating width, top, margin or box-shadow forces the
   browser to recalculate layout on every frame. Transform and opacity are composited on the GPU and cost
   almost nothing. Every effect in this template is written within that constraint, which is why it holds
   sixty frames on hardware that is several years old."*
2. **02 — The observer does the work, not the scroll handler.** *"Attaching effects to a scroll event runs
   your code dozens of times a second whether anything is visible or not. IntersectionObserver fires only
   when an element crosses a threshold, and it unobserves itself once it has done its job. The only scroll
   listener here drives the progress rail, and it is passive."*
3. **03 — Reduced motion means off, not faster.** *"A shortened animation is still an animation, and for
   someone with vestibular sensitivity the duration is not the problem — the movement is. Every pattern in
   Kinetic checks the media query and returns early, leaving the content visible and static rather than
   animating it quickly."*

Then the self-drawing underline: an **800 × 60** `viewBox` SVG (`mt-20 w-full`), one 3 px round-cap path
`M4 46C120 12 260 4 400 24C540 44 680 52 796 20`, stroked with a `linearGradient` from **`#7c3aed`** to
**`#a3e635`**, `aria-hidden`, `.draw-path` → `.is-visible` on view.

### 6 — `#interactions` (805 px, white, `py-20 sm:py-28`)

Centred head (`max-w-2xl`): violet chip **"Micro-interactions"**, `h2` **"The small things people feel but
do not notice"**, lede *"Hover over any of these. The effect should register as responsiveness rather than
as decoration."* Then `ul.mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4`: **Lift on hover**
(`translateY(-8px)`), **Underline sweep** (`scaleX 0 → 1`), **Border warm-up** (`border-color 300ms`),
**Magnetic pull** (`translate() by pointer delta`) — each 14 px body copy, a `font-mono text-[11px] uppercase`
token, and a `h-1` gradient rule across the bottom edge that scales from 0 to 100 % on hover. Below the
grid, centred: one **"This button is magnetic"** pill (`.btn-primary px-8 py-4`, `data-magnetic="0.3"`).

### 7 — `#testimonials` (768 px, `bg-gray-50`, `py-20 lg:py-28`)

Centred head (`max-w-3xl`): violet chip **"Feedback"** (14 px / 500), `h2` **"What people say after
shipping it"**, lede *"Mostly about the parts that do not move."* A `data-carousel` with a
`overflow-hidden` viewport and a `flex` track of **three** `data-carousel-slide` cards
(`flex-shrink-0 px-3`), each `rounded-2xl bg-white p-8 shadow-soft`: five 20 px `primary-400` stars, an
18 px medium `blockquote`, then a 48 px `primary-100` initial disc + name + role:

1. *"The reduced-motion handling is the reason we bought it. Every other animated template we tried just
   shortened the durations and called it done."* — **Priya Anand**, Front-end lead (`P`)
2. *"Sixty frames on a four-year-old Android, which is more than I can say for the library-based template
   we replaced."* — **Tomás Vidal**, Freelance developer (`T`)
3. *"No GSAP, no Framer, no Lottie. It is transforms and an IntersectionObserver, and it does everything we
   needed."* — **Bea Lindholm**, Studio founder (`B`)

### 8 — `#faq` (820 px, white, `py-20 lg:py-28`)

Centred head (`max-w-3xl`): chip **"Questions"**, `h2` **"Before you buy"**, lede *"The things developers
ask about an animated template."* Then `max-w-3xl`, `divide-y divide-gray-200`, five `py-6` rows, each an
18 px / 600 question in a full-width `<button data-faq-toggle>` with a 32 px `gray-100` plus disc on the
right (rotates 45° when open) and an `overflow-hidden` panel that animates `max-height` 0 → `scrollHeight`
over 300 ms:

1. **Which animation library does this use?** → *"None. Every effect is CSS transitions and keyframes
   driven by a small amount of vanilla TypeScript using IntersectionObserver and pointer events. There is
   no GSAP, Framer Motion, Lottie or AOS anywhere in the bundle."*
2. **What actually happens under prefers-reduced-motion?** → *"Effects are disabled rather than shortened.
   Scroll reveals leave content visible, tilt and magnetic handlers never attach, the marquee stops and the
   SVG path renders complete. That is a hard requirement, not a setting."*
3. **Will this hurt my Lighthouse score?** → *"The animation code is a few kilobytes of TypeScript with no
   dependencies, and every effect is transform or opacity so it does not trigger layout. The usual
   performance risk in a template like this is images, not motion."*
4. **Can I remove effects I do not want?** → *"Each pattern is independent — delete the section component
   or the data attribute and nothing else breaks. The CSS is grouped in one clearly marked block in
   input.css."*
5. **Does it work without JavaScript?** → *"Content renders fully. Scroll reveals stay visible, and the
   CSS-only effects such as the marquee and hover states still run. Only the pointer-driven effects need
   JavaScript."*

### 9 — `#contact` (452 px, `bg-gradient-to-br from-primary-600 to-primary-800`, `py-20 lg:py-28`)

Measured gradient: `linear-gradient(to right bottom in oklab, #7c3aed 0%, #5b21b6 100%)`. Decorative layer
(`aria-hidden`): two 256 px `bg-white/10 blur-3xl` discs at the corners plus a **40 px dot grid**
(`radial-gradient(circle at 1px 1px, white 1px, transparent 0)`) at `opacity-10`. Centred `max-w-3xl`:
`h2` **"Motion, without the frame drops"** in white (**48 px** here, `lg:text-5xl`), lede *"Twelve patterns,
no dependencies, and an accessibility story you can actually defend in review."* in `primary-100`, then
**Get the template** (white pill, violet label, → `/pricing`) and **Read the build notes** (2 px
`border-white/30`, → `/blog`).

### 10 — Footer (592 px, `bg-gray-900`, `text-gray-300`, `pt-16 lg:pt-24`)

`lg:grid-cols-12 gap-12`: brand column `lg:col-span-4` — `logo-light.svg` at `h-10`, a 16 px `gray-400`
blurb (*"An animated, interactive website template — scroll-driven reveals, tilt cards, magnetic buttons and
self-drawing SVG, all of it switched off for anyone who asks for reduced motion."*), three 40 px
`gray-800` social tiles (X, Instagram, LinkedIn — all `href="#"` in the reference), then
**19 Rivington Street, London, EC2A 3DT** · `(555) 442-6610` · `studio@kinetic.design`. Link columns
`lg:col-span-5` in `sm:grid-cols-3`: **Spaces** (Hot Desk, Dedicated Desk, Private Office, Meeting Rooms —
all four point at the non-existent `#spaces`), **Company** (About, Blog), **Support** (Contact, Terms).
Newsletter column `lg:col-span-3`: head **Stay Updated**, blurb *"One email a month: new motion patterns,
performance notes and what we removed because it dropped frames."*, an `email` input
(`placeholder="Enter your email"`, `bg-gray-800`, `border-gray-700`) and a violet **Subscribe** button.
Legal bar (`border-t gray-800`, `py-8`): *"© 2026 Kinetic. All rights reserved."* and **Privacy Policy ·
Terms of Service · Style Guide**.

### 11 — Fixed chrome

`#preloader` (white overlay + 40 px ring, removed 300 ms after `load`), the skip link
(`#main-content`, visible on focus, violet pill), `#scroll-progress` (2 px violet at the very top),
`#mobile-cta` (below 1024: **Call Now** `tel:5556789012` in `gray-100` + **Book a Tour** violet, `p-3`
inside a `border-t` bar), `#cookie-consent` (a sentence about cookies + **Decline** / **Accept All**, slides
up at **+1.5 s**, `localStorage.cookie-consent` = `accepted` / `essential`, element removed 300 ms later),
`#back-to-top` (48 px violet disc, `opacity:0; pointer-events:none; translateY(16px)` until 300 px of
scroll).

## Behaviour the recreation must reproduce

Read out of the **18,404 B** bundle. All initializers run on `astro:page-load` (the recreation mounts them
in effects), and **`prefers-reduced-motion` is checked with a single helper** `matchMedia('(prefers-reduced-
motion: reduce)').matches`.

1. **Theme.** `applyTheme()` runs inline in `<head>` (no flash): `localStorage.theme === 'dark'` **or**
   (no stored theme **and** `prefers-color-scheme: dark`) → add `.dark` to `documentElement`. The moon
   button toggles the class and writes `localStorage.theme = 'dark' | 'light'`.
2. **Mobile menu.** `[data-mobile-toggle]` flips `aria-expanded`, toggles `hidden` on `[data-mobile-menu]`
   and **swaps the icon path** (hamburger ⇄ X) by rewriting the `<svg>`'s `innerHTML`.
3. **Header shadow.** `scrollY > 50` → `shadow-lg` on `[data-header]`, removed below it (passive listener).
4. **Reveals.** `[data-animate]` — if reduced motion, **return without touching anything** (content stays
   visible). Otherwise elements below the fold get `opacity:0; translateY(20px)` and their
   `data-delay` as `transition-delay`; an `IntersectionObserver` (`threshold .1`, `rootMargin '0px 0px -10%
   0px'`) restores `opacity:1; translateY(0)` and **unobserves**. 27 + 19 = **46 elements** carry
   `data-animate` on the landing page.
5. **Nav active state.** `[data-nav-link]` → observer with `rootMargin '-20% 0px -70% 0px'` on the
   `#showcase` / `#scroll-story` / `#interactions` sections; the matching label gets `.nav-active`
   (`color:#111827; font-weight:600`). The four page labels (`/about`, `/pricing`, `/blog`, `/contact`)
   never match a section id, so they can never activate.
6. **Smooth anchors.** Every `a[href^="#"]` (except bare `#`) scrolls to its target with
   `top = rect.top + scrollY − (headerHeight + 20)` and `history.pushState`.
7. **Tilt.** `[data-tilt]` — pointermove sets `--ry = ((x/width) − .5) · tilt · 2` degrees and
   `--rx = −((y/height) − .5) · tilt · 2`; pointerleave resets both to `0deg`. **Skipped entirely under
   reduced motion.**
8. **Magnetic.** `[data-magnetic]` — pointermove translates by `(pointer − centre) · strength` (default
   `.35`; the pill uses `.3`); pointerleave returns to `translate(0,0)`. **Skipped under reduced motion.**
9. **Parallax.** `[data-parallax]` — on scroll, `translateY(scrollY · factor)` for elements whose box is
   within a screen of the viewport; factors `0.15` and `-0.1` on the two hero blobs.
10. **Line reveal.** `.reveal-line` — reduced motion adds `.is-visible` to all and returns; otherwise an
    observer adds the class after a **stagger of `index · 90 ms`**.
11. **Self-drawing path.** `.draw-path` — same pattern, `.is-visible` when in view; the CSS transition
    (1.4 s) does the drawing via `stroke-dashoffset`.
12. **Counters.** `[data-counter]` — observer at `threshold .5`; **2,000 ms** ramp with
    `1 − (1 − t)³` easing; the suffix parser understands `%`, `+`, `K`, `M`, `$` and one decimal. `12`,
    `0`, `60fps` and `100%` therefore settle as `12`, `0`, `60fps`, `100%` (an unrecognised suffix is
    re-appended verbatim). jsdom has no `IntersectionObserver`: define it, never `spyOn` it.
13. **Typewriter.** `[data-typewriter]` — cycles `[current text, …data list]` every **3,000 ms**: fade out
    300 ms, swap the text, fade in 300 ms, with `translateY(10px)` on the way out. Four states in practice,
    because "design decision" is both the initial text and the list's first entry.
14. **Carousel.** `[data-carousel]` — `perPage = innerWidth ≥ 1024 ? 3 : innerWidth ≥ 640 ? 2 : 1`;
    `maxIndex = max(0, slides − perPage)`; each slide is set to `viewportWidth / perPage` px and the track
    translates by `index · slideWidth`. Dots are rebuilt as buttons with `aria-label="Go to slide N"`;
    **prev/next are `display:none` when `maxIndex === 0`**; **autoplay every 5,000 ms**, paused on
    `mouseenter`, resumed on `mouseleave`; a `resize` listener re-runs the whole initializer when `perPage`
    changes.
15. **FAQ.** `[data-faq-toggle]` — **single-open**: opening one forces every other panel to
    `max-height:0; opacity:0` and resets its icon; the open panel gets `max-height = scrollHeight` and its
    icon `rotate(45deg)`. ⚠️ The reference sets **no `aria-expanded` and no `aria-controls`** on these
    buttons — see §Deliberate deviations.
16. **Cookie strip.** Only if `localStorage.cookie-consent` is unset: after 1,500 ms slide to
    `translateY(0)`; Accept/Decline store `accepted`/`essential` and slide out (300 ms, then `remove()`).
17. **Scroll progress.** `#scroll-progress.style.width = scrollY / (scrollHeight − innerHeight) · 100 + '%'`
    (passive listener) — separate from the story band's own sticky `scaleX` rail.
18. **Video modal.** `[data-video-modal]` builds a `fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm`
    overlay with a `max-w-4xl` 16:9 iframe, closes on backdrop click, on `[data-video-close]` and on
    `Escape`, and locks `body` scroll while open. (The reference's `src` is a Rick Astley embed — a joke
    placeholder; do not ship that URL.)
19. **Back to top.** Appears past 300 px (`opacity`/`translateY`), smooth-scrolls to `0`.
20. **Bundle-only initializers** present in the 18,404 B file but **not exercised by this page**:
    `[data-lightbox]`, `[data-blog-filters]` / `[data-blog-search]`, `[data-billing-toggle]`,
    `form[data-validate]`, `[data-accordion-toggle]`, the toast helper. Do not build them for the landing
    page; they belong to `/blog`, `/pricing` and `/contact`.

## Data-attribute inventory (measured on the live page)

| attribute | count | behaviour |
| --- | --- | --- |
| `data-animate` | 46 (27 with a value `fade-in-up` + 19 bare) | reveal-on-scroll (item 4) |
| `data-delay` | 20 | per-element `transition-delay` in ms (0–880 in the grid, 100/150/200/300/400/500 elsewhere) |
| `data-tilt="6"` | **12** | cursor tilt on every pattern card |
| `data-magnetic="0.3"` | 1 | the magnetic pill |
| `data-parallax` | 2 | `0.15` and `-0.1`, the two hero blobs |
| `data-typewriter` | 1 | the `h1`'s rotating phrase (JSON array in the attribute) |
| `data-counter` | 4 | `12` · `0` · `60fps` · `100%` |
| `data-faq-toggle` / `data-faq-icon` | 5 / 5 | accordion button / the plus disc |
| `data-carousel` / `-track` / `-slide` / `-dots` / `-prev` / `-next` | 1 / 1 / 3 / 1 / 1 / 1 | testimonials carousel |
| `data-header` | 1 | the sticky header (shadow past 50 px) |
| `data-dark-toggle` | 1 | theme button |
| `data-mobile-toggle` / `data-mobile-menu` | 1 / 1 | disclosure |
| `data-nav-link` | 7 | active-state observer (`showcase`, `scroll-story`, `interactions`, `/about`, `/pricing`, `/blog`, `/contact`) |
| `data-video-modal` | 1 | hero "Watch Demo" |
| `data-scroll-progress` | 1 | the story band's sticky rail |
| `data-cookie-accept` / `data-cookie-decline` | 1 / 1 | cookie strip |

**Dead markers: none.** Every attribute above has a consumer in the 18,404 B bundle — the opposite of the
sibling sites whose `data-emergency` / `data-phone` markers nothing reads.

## Link and destination census (measured 2026-10-25)

The live page holds **42** anchors. The map, counted in the DOM (not by eye):

`/theme/kinetic/pricing` **7** · `/theme/kinetic/blog` **4** · `/theme/kinetic/#spaces` **4** ·
`/theme/kinetic/about` **3** · `#` **3** · `/theme/kinetic/` **2** · `/theme/kinetic/#showcase` **2** ·
`/theme/kinetic/#scroll-story` **2** · `/theme/kinetic/#interactions` **2** ·
`/theme/kinetic/#contact` **2** · `/theme/kinetic/contact` **2** · `/theme/kinetic/terms` **2** ·
`#main-content` **1** · `#showcase` **1** · `tel:(555) 442-6610` **1** · `mailto:studio@kinetic.design` **1** ·
`/theme/kinetic/privacy` **1** · `/theme/kinetic/elements` **1** · `tel:5556789012` **1**.

Four defects to fix (not to copy):

* **3 bare `href="#"`** — the X / Instagram / LinkedIn tiles in the footer.
* **4 × `#spaces`** — the "Spaces" column's four links point at an id that **does not exist** on any page
  (`#spaces` is absent from the landing page's id list *and* from the footer target list). They are dead
  anchors on every page of the reference.
* **`tel:(555) 442-6610`** — parentheses and a space are not a valid `tel:` URI (the mobile CTA's
  `tel:5556789012` is valid, and the two numbers disagree with each other).
* **`/pricing` is labelled "Licence"** and `/blog` is labelled "Read the build notes" — the labels are
  marketing copy, not destinations.

Of the **39** destination anchors, **35** resolve to live pages and **4** are the dead `#spaces`. Every
`.html`-suffixed route is 404; only the directory form exists.

## Class census

The landing page's DOM carries **371 distinct class tokens**, and **every one of them has a rule in
`Base.60HYJDXP.css`** — **0 phantom classes** (checked with Tailwind's escape rules for `:`, `[`, `]`, `.`,
`/`, `%`, `#`, `(`, `)`, `,`, `!`, `+`, `*`, `'`, `"`, `&`, `<`, `>`, `@`, `=`, `~`, `^`, `$`, `|`). So
anything a recreation renders that is not in that set of 371 is invented — a cheap, strong check.

Classes that **exist in the sheet but are not used on this page**: `.btn`, `.card`, `.container-narrow`,
`.prose` (+ its `--tw-prose-*` block), `.btn-secondary`, `.nav-active` (used, but only via JS),
`@keyframes shimmer`/`.img-shimmer` (the footer logo only), `.animate-hero-float*` (used — the hero blobs).
The unused set belongs to inner pages; do not import it wholesale.

## Screenshot analysis (`kinetic-template.jpg`, 2400 × 1892 JPEG, 320,074 B)

A **genuine macOS browser capture** on a pale grey desk ground: three traffic lights, a rounded title bar,
a soft drop shadow, the page inset in the window. It frames the **sticky header** (wordmark left, seven nav
labels, moon, violet pill) and the **whole first viewport of the hero**: the pinging badge, the two-line
`h1` with the violet→light-violet gradient on its second line, the 20 px lede, the three CTAs (violet pill,
white outline pill, violet play disc + "Watch Demo"), the four-stat strip above a hairline, and the top of
the hero image — which in the capture is a **retro-gaming desk** shot in magenta and cyan neon, dominated
by a CRT monitor and a keyboard (the hotlinked Unsplash photo the DOM still points at). The window cuts off
just below the image, so the screenshot corroborates **nothing** of the marquees, the counters, the twelve
cards, the dark band, the micro-interactions, the carousel, the FAQ, the closing band or the footer — all of
which came from the DOM and `getComputedStyle`.

Two details the capture adds: the header's **active nav label is underlined** (a `.nav-active` state — the
capture had the pointer in it, and the underline is `text-gray-900` + `font-weight:600`, not an underline),
and the hero image's 1 px `gray-200` ring is visible against the white ground.

## Requirements

### Requirement 1: Page chrome (skip link, preloader, progress, cookie strip, back-to-top, mobile CTA)

The app SHALL render a skip link as the first focusable element, a 2 px scroll-progress bar fixed to the
top, a cookie strip that appears 1.5 s after load and persists its choice, a 48 px back-to-top disc past
300 px, and — below 1024 px — a two-button sticky call bar.

#### Scenario: Skip link and landmarks

- **GIVEN** the page has loaded
- **WHEN** the visitor presses Tab once
- **THEN** focus lands on a "Skip to content" control that is visually hidden until focused
- **AND** activating it moves focus to `<main id="main-content">`
- **AND** the document has exactly one `<header>`, one `<main>` and one `<footer>`

#### Scenario: Scroll progress

- **GIVEN** the document is 8,288 px tall at a 900 px viewport
- **WHEN** the visitor scrolls to 50 % of `scrollHeight − innerHeight`
- **THEN** the 2 px violet bar's width is 50 % of the viewport, within 1 %
- **AND** at scroll 0 the width is 0 and nothing is painted over the header

#### Scenario: Cookie strip lifecycle

- **GIVEN** `localStorage` has no `cookie-consent` key
- **WHEN** the page has been open for 1.5 s
- **THEN** the strip is visible with exactly two buttons, "Decline" and "Accept All"
- **AND** pressing "Accept All" writes `accepted` and removes the strip from the DOM within 400 ms
- **AND** a second load with the key already set never shows the strip
- **AND** under reduced motion the strip still appears (it is not an animation) but does not slide

#### Scenario: Back to top

- **GIVEN** the visitor is at the top of the page
- **WHEN** the page is at scroll 0
- **THEN** the 48 px disc is `opacity: 0` and not focusable-by-tab-visible
- **AND** past 300 px it is visible and activation scrolls to 0

#### Scenario: Mobile call bar

- **GIVEN** a 390 px viewport
- **WHEN** the page renders
- **THEN** a sticky bar with "Call Now" (`tel:` valid) and "Book a Tour" is visible above the bottom edge
- **AND** at 1024 px and wider the bar is `display: none`

### Requirement 2: Sticky header, seven-label nav and the 1024 px breakpoint

The app SHALL render a sticky header that is 80 px tall at ≥1024 px and 64 px below it (plus a 1 px
`gray-200` rule), with the seven labels visible only at ≥1024 px and a disclosure panel below it.

#### Scenario: Desktop header

- **WHEN** the viewport is 1440 px
- **THEN** the header measures **81 px** (80 + 1 px border), is `position: sticky` with `top: 0`, and its
  ground is `rgba(255,255,255,.8)` with `backdrop-filter: blur(16px)`
- **AND** seven nav labels render at 14 px / 500 / `#4b5563` with **32 px** gaps
- **AND** the wordmark is an `h-10` logo image, and the violet CTA pill measures 10 / 20 padding with an
  **8 px** radius
- **AND** a theme toggle button and no hamburger are present

#### Scenario: The nav collapses at 1023 px, not at 900

- **WHEN** the viewport is 1024 px
- **THEN** the nav is still `display: flex` and the hamburger is hidden
- **AND** at 900 px the nav is `display: none`, the hamburger is visible, and the header is **65 px**

#### Scenario: Mobile disclosure

- **GIVEN** a 390 px viewport
- **WHEN** the hamburger is pressed
- **THEN** `aria-expanded` flips to `true`, the panel opens with the same seven labels at 16 px plus a
  full-width CTA, and the icon becomes a close glyph
- **AND** pressing it again closes the panel and restores `aria-expanded="false"`
- **AND** the panel is reachable and operable by keyboard

#### Scenario: Header elevation

- **WHEN** the visitor scrolls past 50 px
- **THEN** the header gains `shadow-lg`; scrolling back below 50 px removes it

### Requirement 3: Hero

The app SHALL render the hero as a centred column over a `primary-50 → white` gradient, with a pinging
badge, a two-line `h1` whose second line rotates, a 20 px lede, three CTAs, a four-stat hairline strip and
a rounded hero image.

#### Scenario: Desktop hero

- **WHEN** the viewport is 1440 px
- **THEN** the band is **1,437 px** tall and its background is
  `linear-gradient(#f5f3ff, #ffffff)`
- **AND** the badge reads "Motion that survives a Lighthouse audit" at 14 px / 500 in `#6d28d9` on
  `#f5f3ff`, `rounded-full`, with an 8 px pinging dot (`#a78bfa` ring over a `#8b5cf6` core)
- **AND** the `h1` measures 60 px / 60 px at **−1.5 px** tracking, weight 700, wrapping after "is a"
- **AND** the second line is gradient-clipped (`#7c3aed → #a78bfa`) and cycles through the three phrases
- **AND** the lede is 20 px / 28, `max-width: 42rem` (672 px measured)
- **AND** the stat strip has exactly four columns above a 1 px `gray-200` `border-t`

#### Scenario: Mobile hero

- **WHEN** the viewport is 390 px
- **THEN** the `h1` is **36 px** and the band is **1,208 px** tall
- **AND** the stat strip is a 2 × 2 grid and the three CTAs stack vertically, full width
- **AND** the hero image keeps its 16 px radius and full-bleed width inside the container

#### Scenario: Typewriter

- **GIVEN** the hero is mounted
- **WHEN** 3 s elapse with no interaction
- **THEN** the phrase fades out over 300 ms, swaps to "performance budget", and fades back in
- **AND** after three more intervals it cycles back to "design decision"
- **AND** under reduced motion the phrase renders once and **never changes** (this is a motion effect)

### Requirement 4: The two marquee rows

The app SHALL render two counter-scrolling marquee rows, each a doubled list animated with
`translateX(-50%)`, paused on hover, with 96 px edge fades.

#### Scenario: Marquee geometry and motion

- **WHEN** the viewport is 1440 px
- **THEN** the band is **178 px** tall with `40 px` block padding, `border-y` `gray-200` and `bg-gray-50`
- **AND** row 1 holds **12** `<li>` (six phrases, doubled) at 30 px / 700 / `gray-400` with lime ✦
  separators, and row 2 holds **10** at `gray-300` with the reverse direction
- **AND** both rows animate at **32 s linear infinite** and each row's content is at least twice the
  viewport width
- **AND** hovering the viewport pauses both rows
- **AND** the two 96 px edge gradients are `aria-hidden` and never intercept clicks

#### Scenario: Reduced motion stops the marquee

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page renders
- **THEN** `.marquee` has `animation: none` and both rows show their first items at rest
- **AND** no horizontal scrolling is introduced on the document

### Requirement 5: The counter strip

The app SHALL render four counters that animate from zero to their values over 2 s when 50 % visible, and
that render their final values immediately when the observer is unavailable.

#### Scenario: Values, suffixes and layout

- **WHEN** the strip scrolls into view at 1440 px
- **THEN** the four values settle at **`12`, `0`, `60fps`, `100%`** — the suffix on `60fps` and `%` is
  preserved, and the `0` stays `0`
- **AND** numbers are 48 px / 700 / `#7c3aed` and labels 14 px / 500 / `#4b5563`
- **AND** the grid is 4 columns at ≥640 px and 2 columns at 390 px
- **AND** the band carries `border-y` and the same `gray-50` ground as the marquee strip above it

#### Scenario: No observer (jsdom)

- **GIVEN** `IntersectionObserver` is undefined
- **WHEN** the component renders
- **THEN** the four final strings are painted on first render and no timer is scheduled

### Requirement 6: `#showcase` — twelve pattern cards

The app SHALL render exactly twelve cards in a 3 / 2 / 1 column grid, each with a category chip, an 18 px
title, a 14 px paragraph and a monospace token above a hairline.

#### Scenario: Grid and card anatomy

- **WHEN** the viewport is 1440 px
- **THEN** the grid is **3 columns** with a 24 px gap (`gap-6`) and each card measures **389 × 250**
- **AND** the card is `rounded-3xl` (**24 px**), `1 px solid #e5e7eb`, white, 24 px padding, **no shadow**
- **AND** the chip is an 11 px / 600 uppercase monospace pill, radius **8 px**, `#5b21b6` on `#ede9fe`
- **AND** the token line is 12 px monospace `#6d28d9` above a 1 px `gray-100` rule
- **AND** the twelve `(chip, title)` pairs are exactly: (Hover, Cursor tilt) (Scroll, Line reveal)
  (Hover, Magnetic buttons) (Scroll, Self-drawing SVG) (Scroll, Scroll progress) (Ambient, Infinite
  marquee) (Scroll, Staggered grid) (Scroll, Depth parallax) (Scroll, Count up) (Hover, Underline sweep)
  (Hover, Blur bloom) (**A11y**, Reduced-motion fallback)

#### Scenario: Responsive columns

- **WHEN** the viewport is 768 px
- **THEN** the grid is **2 columns** and the band is **2,074 px** tall
- **AND** at 390 px it is **1 column** and **3,709 px** tall, with cards at the container width and their
  250 px height released to content

#### Scenario: Tilt and reveal are real, and both respect reduced motion

- **GIVEN** a pointer over a card at 1440 px
- **WHEN** the pointer moves to a corner
- **THEN** the card's computed transform is a `perspective(900px)` rotation of up to ±12° (`tilt 6 × 2`)
- **AND** on pointer leave it returns to `0deg`
- **AND** under reduced motion no pointer handler is attached and no rotation is ever applied
- **AND** each card's reveal delay is its index × **80 ms** (0 → 880), not 90 ms as the copy claims

### Requirement 7: `#scroll-story` — the dark band

The app SHALL render the story band on `#030712` with a sticky 4 px progress rail, three numbered rules
whose headings mask-reveal, and one self-drawing gradient SVG underline.

#### Scenario: Band structure

- **WHEN** the viewport is 1440 px
- **THEN** the band is **1,413 px** tall, ground `#030712`, text white, block padding **96 / 128 px**
- **AND** the rail is `sticky; top:0; height:4px; background:rgba(255,255,255,.1)` with an inner gradient
  from `#8b5cf6` to `#a3e635` whose `scaleX` tracks the band's scroll progress
- **AND** the chip reads "How it is built" in `#bef264` on `white/10`
- **AND** exactly three rules render, with ordinals `01`/`02`/`03` at 48/60 px monospace `rgba(255,255,255,
  .15)` and `h3` at 24/30 px
- **AND** the paragraphs are 16 px / 26 `#9ca3af` capped at `max-width: 36rem`

#### Scenario: The self-drawing underline

- **WHEN** the SVG enters the viewport
- **THEN** the 3 px round-cap path's `stroke-dashoffset` animates from its length to **0** over 1.4 s
- **AND** the stroke is a linear gradient **`#7c3aed → #a3e635`** across the 800-unit viewBox
- **AND** the SVG is `aria-hidden` and carries no text alternative
- **AND** under reduced motion the path renders **complete** (offset 0, no transition)

#### Scenario: Reveal-line headings

- **GIVEN** a heading wrapped in `.reveal-line > span`
- **WHEN** it scrolls into view
- **THEN** the inner span translates from `110%` to `0` inside an `overflow: hidden` mask
- **AND** successive headings are staggered by 90 ms per index
- **AND** under reduced motion all three are visible with no transform at first paint

### Requirement 8: `#interactions` and the magnetic pill

The app SHALL render four micro-interaction cards and one magnetic pill, each demonstrating the effect its
monospace token names.

#### Scenario: Cards

- **WHEN** the viewport is 1440 px
- **THEN** four cards render in `lg:grid-cols-4` with a 20 px gap, each `rounded-2xl` (**16 px**),
  `1 px solid #e5e7eb`, 24 px padding, white
- **AND** hovering a card applies `translateY(-8px)`, `border-color:#a78bfa` and `shadow-xl` over 300 ms
- **AND** a full-width 4 px gradient rule (`#8b5cf6 → #a3e635`) scales from `scaleX(0)` to `scaleX(1)`
  over 500 ms on hover
- **AND** the four tokens render at 11 px uppercase monospace `#9ca3af`

#### Scenario: Magnetic pill

- **GIVEN** the pill labelled "This button is magnetic"
- **WHEN** the pointer sits 40 px right of its centre
- **THEN** the pill translates by `40 × 0.3 = 12 px` horizontally and follows vertically the same way
- **AND** on pointer leave it returns to `translate(0, 0)`
- **AND** under reduced motion it never moves and its `transition` is `none`

### Requirement 9: `#testimonials` and its responsive carousel

The app SHALL render three testimonial cards in a carousel that is **inert at ≥1024 px**, two-up at
≥640 px and one-up below it, with dots, arrows and 5 s autoplay only when it can move.

#### Scenario: Desktop is a static three-up

- **WHEN** the viewport is 1440 px
- **THEN** each slide measures **405 px** (1216 / 3) and the track's transform is `translateX(0)`
- **AND** the dots container renders **zero** dots and both arrows are `display: none`
  (`maxIndex = max(0, 3 − 3) = 0`)
- **AND** the three cards are `rounded-2xl`, 32 px padding, `shadow-soft`, with five 20 px `#a78bfa` stars

#### Scenario: Two-up and one-up

- **WHEN** the viewport is 900 px
- **THEN** perPage is 2, the dots container holds **2** buttons and both arrows are visible
- **AND** at 390 px perPage is 1 and there are **3** dots
- **AND** in both cases the rail auto-advances every 5 s and pauses while hovered

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the carousel mounts
- **THEN** autoplay does not start and the first slide is shown at rest
- **AND** the manual dots/arrows still work (they are navigation, not decoration)

### Requirement 10: `#faq` accordion

The app SHALL render five FAQ rows in a `divide-y` list, one open at a time, with an animating panel and a
rotating plus icon — **with the ARIA the reference omits**.

#### Scenario: Opening and switching

- **WHEN** the second question is activated
- **THEN** its panel animates from `max-height: 0` to its content height over 300 ms and its icon rotates
  **45°**
- **AND** the first panel closes and its icon returns to `0°`
- **AND** activating an open question closes it

#### Scenario: Accessibility (a deliberate improvement)

- **THEN** every toggle is a `<button type="button">` with `aria-expanded` reflecting its state and
  `aria-controls` pointing at its panel
- **AND** each panel is a labelled region (`role="region"`, `aria-labelledby`) or is otherwise associated
  with its button
- **AND** the plus glyph is `aria-hidden` and the button's accessible name is the question text
- **AND** the whole row is reachable and operable by keyboard with a visible focus ring

### Requirement 11: `#contact` closing band

The app SHALL render the closing band as a `primary-600 → primary-800` diagonal gradient with a dot grid,
one white `h2`, one lede and two CTAs.

#### Scenario: Band and CTAs

- **WHEN** the viewport is 1440 px
- **THEN** the band is **452 px** tall with the gradient `linear-gradient(to bottom right, #7c3aed,
  #5b21b6)` and a 40 px `white` dot grid at `opacity: .10`
- **AND** the `h2` is **48 px** white and the lede 18 px `#ede9fe`
- **AND** the primary CTA is a white pill with an **8 px** radius and a `#6d28d9` label
- **AND** the secondary CTA carries a **2 px** `rgba(255,255,255,.3)` border
- **AND** at 390 px the band is **512 px** and both CTAs are full width and stacked

### Requirement 12: Footer

The app SHALL render the footer on `#111827` with a brand column, three link columns, a newsletter row and
a legal bar — and it SHALL link **https://www.componentdock.com/**.

#### Scenario: Columns and content

- **WHEN** the viewport is 1440 px
- **THEN** the footer is **592 px** tall on `#111827` with 96 px top padding
- **AND** the brand column spans 4 of 12 columns and carries the logo, a 16 px blurb, three 40 px social
  tiles and the address / phone / email block
- **AND** the three link columns (`Spaces`, `Company`, `Support`) render 14 px uppercase white heads and
  16 px `#9ca3af` links with 12 px vertical rhythm
- **AND** the newsletter row holds an `type="email"` input and a violet Subscribe button on one line at
  1440 px, and **stacks without overflow** at 390 px
- **AND** the legal bar carries the copyright line, three legal links and a "Made with Component Dock" link
  to `https://www.componentdock.com/`

#### Scenario: No horizontal overflow

- **GIVEN** viewports of 320, 390, 768, 1024, 1280 and 1440 px
- **WHEN** each renders
- **THEN** `documentElement.scrollWidth === documentElement.clientWidth` at every width
- **AND** the newsletter input is allowed to shrink (the reference's 471 px form inside a 358 px column is
  a defect, not a target)

### Requirement 13: Dark mode

The app SHALL support a `.dark` class on `documentElement`, persist the choice in `localStorage.theme`,
and honour `prefers-color-scheme` on first visit.

#### Scenario: Toggle and persistence

- **GIVEN** no stored theme and a light OS preference
- **WHEN** the page first paints
- **THEN** `documentElement` has no `.dark` class and the body ground is `#ffffff`
- **AND** pressing the toggle adds `.dark`, sets the body ground to `#030712`, the header to
  `gray-950/80`, the hero gradient to `#111827 → #030712`, the counters to `#a78bfa` and the story band /
  footer unchanged
- **AND** `localStorage.theme === 'dark'` and a reload paints dark **before** first paint (no flash)

#### Scenario: System preference

- **GIVEN** no stored theme and `prefers-color-scheme: dark`
- **WHEN** the page loads
- **THEN** `.dark` is applied without any interaction and the moon button's pressed state is exposed

### Requirement 14: Zero dead or malformed links

The app SHALL contain no `href="#"`, no anchor pointing at a missing id, and no malformed `tel:` or `mailto:`
URI.

#### Scenario: Anchor audit

- **GIVEN** the finished page
- **WHEN** every `a[href]` is inspected
- **THEN** there are **no** `href="#"` anchors (the reference has three, in the footer socials)
- **AND** every in-page anchor's target id exists in the document — in particular **no** `#spaces`
  (the reference has four, pointing nowhere)
- **AND** every phone link matches `tel:+?[0-9]{7,15}` — **not** `tel:(555) 442-6610`
- **AND** the displayed phone numbers agree with each other
- **AND** the mailto uses an example-safe address

### Requirement 15: Reduced-motion contract

Every animation in the app SHALL be **off** — not shortened — under `prefers-reduced-motion: reduce`, and
the content SHALL remain fully visible.

#### Scenario: Everything at rest

- **GIVEN** the OS reports `prefers-reduced-motion: reduce`
- **WHEN** the page loads and the visitor scrolls the whole document
- **THEN** no marquee animates, no card tilts, no pill follows the pointer, no blob floats, no heading
  mask-reveals, the SVG path is complete, counters show their final values, the typewriter never changes
  and the carousel does not auto-advance
- **AND** every `[data-animate]` element has `opacity: 1` and no transform from the first paint
- **AND** the FAQ, the theme toggle, the mobile menu and all links still work

## Deliberate deviations from the reference

1. **Multi-page → single page.** The reference ships **seven live inner routes** (`pricing/`, `about/`,
   `blog/`, `contact/`, `terms/`, `privacy/`, `elements/`). The recreation rebuilds the landing page only.
   The three section labels become in-page anchors (`#showcase`, `#scroll-story`, `#interactions`); the
   four page labels (`/about`, `/pricing`, `/blog`, `/contact`) become in-page anchors as well — to the
   FAQ, the closing band or a single-page section — **not** dead routes, and the two legal links are
   dropped rather than left pointing at nothing. The inner pages are the authority for anything the single
   page must invent: `/pricing/` carries the monthly/yearly **billing toggle** (`data-billing-toggle`, a
   28 px knob translate, `aria-checked`); `/blog/` carries the **category filters** + search; `/contact/`
   is a real validated form (`form[data-validate]`, per-field `[data-error]`, a toast on success);
   `/elements/` is the style guide for the same tokens used here. **Do not** rebuild them, and do not
   silently re-invent their content inside the landing page.
2. **The source brand is replaced.** `Kinetic`, `studio@kinetic.design`, `19 Rivington Street, London`,
   `(555) 442-6610`, `tel:5556789012`, `© 2026 Kinetic` and the two brand SVG logos become **Driftway**, a
   `driftway.example` address, a neutral address block, one consistent sample phone number, `© 2026
   Driftway` and an authored wordmark. The three testimonial names are sample data and may stay — the
   quotes must not name the source brand.
3. **The copy that talks about the template is rewritten.** Every band on this page is *about* the
   template ("Kinetic is a template for sites that move", "Can I remove effects I do not want?", "Delete
   the section component … in input.css"). Keep the same *kind* of content and the same section order, but
   retarget the copy at the recreation's own product so the app does not read as a resale page for the
   source.
4. **Dark mode is kept.** Unlike the sibling sites that drop it, this design's dark set is complete and
   measured (§Design tokens). Ship the toggle, the `localStorage` key and the no-flash inline script.
5. **The three dead social links get real targets** (or become non-anchor elements). They are the page's
   only bare `#` anchors.
6. **`#spaces` is given a target or removed.** Four footer links point at an id that does not exist. Either
   point them at real sections of the single page or render them as plain text — do not reproduce four
   dead anchors.
7. **The malformed `tel:` is repaired.** `tel:(555) 442-6610` is not a valid URI; use a digits-only href and
   keep the displayed formatting.
8. **The FAQ gets the ARIA the reference lacks.** Neither `aria-expanded` nor `aria-controls` exists on the
   live buttons, and the panel is a bare `div`. Add both, plus a labelled region — a documented improvement,
   not a fidelity bug.
9. **The preloader is dropped.** The reference paints a full-screen white overlay and removes it 300 ms
   after `load` — a blank first paint, and a WCAG 2.2.2 problem for a purely decorative overlay. The
   recreation mounts nothing.
10. **`og:image` and the JSON-LD are not copied.** `og-image.jpg` is **404**, and the JSON-LD is corrupt:
    `"@context":"https://***@type"` (the URL was mangled into the type key), `"url":"/"` is a bare path.
    Ship a correct `<title>`/description and either no og image or an authored one; write clean structured
    data or none.
11. **The video modal's URL is a joke placeholder.** `data-video-modal` points at a well-known music video.
    Use a neutral placeholder (`about:blank`-style poster or an "demo unavailable" panel) — never hotlink
    that embed.
12. **Images are placeholders.** The hero photo is a hotlinked Unsplash URL and the logos are the source's
    own SVGs. Ship `https://picsum.photos/seed/driftway-<n>/<w>/<h>` at the measured **1024 × 512** aspect
    (2:1) and author the wordmark; rewrite the hero alt to describe **your** image.
13. **The marquee copies are kept but may be re-worded**, since they are template marketing. If re-worded,
    keep six items in row 1 and five in row 2 so the measured widths (3,340 / 3,524 px at 1440) stay
    comparable.
14. **Sample statistics are kept as stated.** `12 / 0 / 60fps / 100%` and the "twelve effects" copy must
    agree with the twelve cards actually rendered — if a card is cut, the copy must change too.
15. **`.btn-primary` is inherited or re-authored, not imported wholesale.** It is the only component class
    this page uses; `.btn`, `.card`, `.container-narrow` and the `.prose` block belong to inner pages.

## Verification checklist

- [ ] `apps/driftway` exists, package `@free-react-templates/driftway`, `public/CNAME` =
      `driftway.free.componentdock.com`, `homepage` the same, footer links `https://www.componentdock.com/`
- [ ] No app file mentions the source brand or the source slug (provenance lives in this spec and the PR)
- [ ] `npm run verify:app driftway` passes (typecheck, lint, 100 % coverage tests, build)
- [ ] Nine bands in the measured order; heights within ±3 % of
      `1,437 / 178 / 238 / 1,504 / 1,413 / 805 / 768 / 820 / 452` at 1440, header **81**, footer **592**,
      document ≈ **8,288** px (re-measure and record any drift)
- [ ] `primary` is the stock violet ramp (`#7c3aed` at 600, `#6d28d9` at 700, `#5b21b6` at 800) and
      `accent` the lime ramp (`#84cc16` at 500, `#a3e635` at 400, `#d9f99d` at 200, `#365314` at 900) —
      hex-for-hex from the tables
- [ ] Body is `Poppins, system-ui, sans-serif` 16 / 24; **no serif anywhere**; `h1` 60 / 60 / −1.5 px /
      700; every `h2` 36 / 40 / −0.9 px / 700; card `h3` 18 / 28 / 700 — verified with `getComputedStyle`
- [ ] Header: **81 px** at 1440, `bg-white/80` + `blur(16px)`, `border-b gray-200`, nav visible **only at
      ≥1024 px**, violet CTA radius **8 px**, moon toggle present, `shadow-lg` past 50 px
- [ ] Hero: 1,437 px, `#f5f3ff → #ffffff` gradient, two floating blobs (`500` / `400` px, `blur-3xl`),
      badge with a pinging dot, `h1` cycling through three phrases, 20 px lede at 672 px, three CTAs, a
      four-stat hairline strip, hero image **1024 × 512** at 16 px radius with a 1 px ring
- [ ] Marquee: two rows (**12** and **10** items), 30 px / 700, 32 s linear, row 2 reversed, pauses on
      hover, 96 px edge fades, band **178 px**
- [ ] Counters settle at `12`, `0`, `60fps`, `100%`; numbers 48 px `#7c3aed`; 2 s ramp; final values
      rendered on first paint when `IntersectionObserver` is absent
- [ ] `#showcase`: **12** cards in 3 / 2 / 1 columns, **389 × 250**, `rounded-3xl` 24 px, border only (no
      shadow), chip 11 px mono radius 8, token 12 px mono `#6d28d9` above a hairline, tilt ±12° with a
      900 px perspective, reveal delays 0 → 880 in 80 ms steps
- [ ] `#scroll-story`: `#030712`, sticky 4 px rail with a `#8b5cf6 → #a3e635` fill, three rules with
      48/60 px ordinals at `white/15`, mask-revealed headings, self-drawing 800 × 60 SVG stroked
      `#7c3aed → #a3e635`, complete under reduced motion
- [ ] `#interactions`: 4 cards (`rounded-2xl`, 16 px), hover lift `-8px` + `border-primary-400` +
      `shadow-xl`, bottom gradient rule `scaleX 0 → 1`, and one magnetic pill that moves
      `pointerDelta × 0.3`
- [ ] `#testimonials`: **zero dots and both arrows `display:none` at 1440**, **2 dots + arrows at 900**,
      **3 dots at 390**, 5 s autoplay pausing on hover, cards `rounded-2xl p-8 shadow-soft` with five
      `#a78bfa` stars
- [ ] `#faq`: 5 rows, `divide-y`, single-open, 300 ms `max-height` transition, 32 px plus disc rotating
      45°, `aria-expanded` + `aria-controls` present on every button (an improvement over the reference)
- [ ] `#contact`: **452 px**, `#7c3aed → #5b21b6` diagonal gradient, 40 px dot grid, white `h2` at **48 px**,
      white pill (8 px radius) + 2 px `white/30` outline CTA
- [ ] Footer: **592 px**, `#111827`, 4 / 5 / 3 columns, 40 px social tiles, newsletter input + Subscribe
      on one line, legal bar links Component Dock
- [ ] Fixed chrome: skip link, 2 px progress bar, cookie strip at +1.5 s with `localStorage`, 48 px
      back-to-top past 300 px, mobile call bar only below 1024 px, **no preloader**
- [ ] Reveals: **46** `[data-animate]` elements with delays 0–880; nothing invisible at first paint under
      reduced motion
- [ ] **Zero** `href="#"`, zero anchors to missing ids (**no `#spaces`**), a digits-only `tel:`, no dead
      in-page anchors
- [ ] 390 px: header **65**, `h1` **36 px**, pattern grid 1 column, hero 1,208, document ≈ **12,165** px,
      and **`scrollWidth === clientWidth` at 320/390/768/1024/1280/1440** (the reference fails this at 390:
      487 vs 390, from its newsletter row)
- [ ] Reduced motion: marquee stopped, no tilt/magnetic/parallax/float, headings visible, path complete,
      counters final, typewriter static, carousel not auto-advancing
- [ ] Dark mode: `.dark` on `documentElement`, body `#030712`, hero `#111827 → #030712`, counters
      `#a78bfa`, persists in `localStorage.theme`, no flash on reload
- [ ] One `h1`, eight `h2`, twelve card `h3` + three story `h3` + four micro `h3`, no skipped level; skip
      link first in tab order; every icon-only control labelled
- [ ] `TEMPLATES.md` row added under `## Creative` between `Kiddos` and `Labs`, heading count bumped from
      `(55)` to `(56)` (re-count it), `README.md` status regenerated after deploy
