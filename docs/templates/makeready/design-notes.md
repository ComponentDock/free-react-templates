# Makeready — design notes

Source: ColorLib **Overprint** (`overprint`), live preview `https://preview.colorlib.com/theme/overprint/`
(HTTP 200, 68,551 B, read 2026-10-25 with `curl -4`). Recreation name `makeready`. Spec:
`openspec/specs/template-makeready/spec.md`. Tasks: `docs/templates/makeready/tasks.md`.

A 2026 **Astro + Tailwind 4** build (`/*! tailwindcss v4.3.3 */`, one 62,102 B sheet, the same 16,233 B house
kit — sha256 `e26cc055…` — as the `conduit` / `nightwatch` / `drainwise` / `patina` / `pentimento` preps) for
**a six-person print-first design studio in Dublin**. The `<title>` is the plainest possible —
*"Home | Overprint"* — and the `h1` carries the whole pitch: *"Design that survives / contact with production"*,
where the second line is a **typewriter cycling three phrases** (*a print run*, *being handed to someone else*).

This is the **first prep in the set whose argument is production rather than taste**, and the first whose type
system is **two families by role**: Space Grotesk for every sentence, the **OS mono stack** for every label,
price, duration and file format. It is also the first sibling whose accent is a **lime** (`#c3f53c` / `#a8dc1f`)
and whose **chips are square** — the page's print idiom is *plates*, not pills.

## Structure order (measured at 1440 × 900)

| #  | band                                     | id / hook         | ground                       |   top | height |
| -- | ---------------------------------------- | ----------------- | ---------------------------- | ----: | -----: |
| 0  | header, sticky, 80 % white               | `[data-header]`   | `#fff/80` + blur             |     0 |     81 |
| 1  | hero (badge · h1 · CTAs · stats · image)  | 1st `<section>`   | `#f7f7f6` → `#ffffff`        |    81 |  1,409 |
| 2  | three case studies (brief/approach/outcome) | `#work`        | transparent on white         | 1,490 |  2,001 |
| 3  | four priced disciplines                   | `#disciplines`    | `#141413`                    | 3,491 |  1,103 |
| 4  | four fixed stages                         | `#process`        | transparent on white         | 4,594 |    862 |
| 5  | the published file list                   | `#deliverables`   | `#f7f7f6`                    | 5,455 |    766 |
| 6  | three quotes                              | `#testimonials`   | `#f9fafb`                    | 6,221 |    796 |
| 7  | five questions                            | `#faq`            | `#ffffff`                    | 7,017 |    820 |
| 8  | closing band                              | `#contact`        | 135° `#575751`→`#2b2b28`     | 7,837 |    452 |
| 9  | footer, 4 zones                           | `<footer>`        | `#111827`                    | 8,289 |    568 |

Document height: **8,857** px at 1440 **and** 1280 · **9,295** at 1024 · **10,915** at 768 · **11,486** at 640 ·
**12,778** at 390 · **13,799** at 320. Header **81** px at ≥1024, **65** below. The bands sum to the document
height (±1 px rounding) at every width.

Chrome outside the flow: `#preloader`, `#scroll-progress` (2 px), skip link → `#main-content`, `#mobile-cta`
(`lg:hidden`, 69 px, two buttons — coworking leftovers), `#cookie-consent` (87 px at 1440), `#back-to-top`
(48 px).

## Token reference block (paste into `apps/makeready/src/index.css`)

```css
@theme {
  /* warm paper → charcoal — every fill, ground and body colour on the light page */
  --color-primary-50:  #f7f7f6;
  --color-primary-100: #eeeeec;
  --color-primary-200: #d8d8d4;
  --color-primary-300: #b5b5af;
  --color-primary-400: #8b8b84;
  --color-primary-500: #6e6e67;
  --color-primary-600: #575751;
  --color-primary-700: #464642;
  --color-primary-800: #2b2b28;
  --color-primary-900: #141413;

  /* lime — ONLY two steps exist in the reference sheet */
  --color-accent-400: #c3f53c;
  --color-accent-500: #a8dc1f;

  --font-sans: "Space Grotesk", system-ui, sans-serif;
  /* the technical layer — the OS stack, no webfont, exactly as the reference declares it */
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  --radius-lg: 0.5rem;   /* buttons, fields, chips-grounds, social squares */
  --radius-2xl: 1rem;    /* hero image frame + testimonial cards */
}

body      { background: #ffffff; color: #111827; -webkit-font-smoothing: antialiased; }
.dark body{ background: #030712; color: #f3f4f6; }

/* the h1's second line — hand-written in the reference, no dark variant */
.text-gradient {
  background-image: linear-gradient(to right in oklab, #575751 0%, #8b8b84 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* the one shadow that is a class, not a utility */
.shadow-soft { box-shadow: 0 4px 16px -4px #0000001a; }   /* testimonial cards only */
```

Stock Tailwind greys do the rest of the work: `gray-50 #f9fafb` (`#testimonials`) · `gray-100 #f3f4f6` (FAQ
plus discs) · `gray-200 #e5e7eb` (header border, hero CTA border, FAQ dividers) · `gray-300 #d1d5db` (cookie
Decline border) · `gray-400 #9ca3af` (footer body, social chips) · `gray-500 #6b7280` (bottom bar, placeholder)
· `gray-600 #4b5563` (nav, hero lead, FAQ answers) · `gray-700 #374151` (hero secondary CTA text, footer input
border) · `gray-800 #1f2937` (footer input + social chip ground) · `gray-900 #111827` (footer ground, headings)
· `gray-950 #030712` (dark body / `#faq`).

## Screenshot analysis (`overprint-template.jpg`)

**307,550 B, a real baseline JPEG, 2400 × 1892** (1200 × 946 CSS px at 2× DPR). A macOS browser capture of the
**fold only** — header + badge + two-line `h1` + lead + three CTAs + a hairline stat strip + the top of the 2:1
photograph. It confirms: the hero ground is warm paper (`#f7f7f6`) and reads as *unbleached stock*, not white;
the gradient second line is visibly lighter and greyer than the sans line above it; the 48 px play disc with its
`Watch Demo` label is the third CTA, not a link; the stat strip is separated by a single hairline rather than
boxes; and *"Deliverables"* appears bolder than its six neighbours — the scroll-spy's active state, frozen
mid-capture. The only saturated thing in the shot is the photograph (a desk with a drawing tablet and a book
titled *Graphic Design Play Book*): the brand's two lime marks are small enough to read as *ink*, not as colour.

Do **not** adopt the window chrome, and do not treat the fold as the whole design — everything below (the
`#141413` band, the 4-up process grid, the file list, the lime plates) is absent from the screenshot and comes
from the DOM.

## Section-by-section fidelity notes

### 0 — Header
Sticky, 81 px (`h-20` + 1 px `gray-200` border) at ≥1024 and 65 px below. `bg-white/80 backdrop-blur-lg`, 32 px
container padding. Logo left (**196 × 40**, `dark:` swaps to `logo-light.svg`), seven labels at `gap-8`
(`14/500 gray-600`, measured x = 430 → 1,016), then moon (36 × 36, `data-dark-toggle`), **Start a project**
(139 × 40, `primary-600`, radius 8) and — below `lg` — the hamburger. Only the first four labels carry
section `data-nav-link` values; `Studio` / `Journal` / `Contact` carry paths, so the scroll-spy can never light
them.

### 1 — Hero
`max-w-4xl` centred over `primary-50 → white`, two blurred discs behind an `aria-hidden` layer. Stack: badge →
`h1` → lead → CTA row → stat strip → image, with `data-animate` delays 0/100/200/300/500. Badge 345 × 34 with a
**two-tone ping dot** (`primary-400` at 75 % over solid `primary-500`); `h1` 896 × 120 (60/60, `−1.5 px`); lead
20/28 `max-w-2xl`; CTAs 187 × 48, 150 × 50 and a 48 px play disc; stat strip four 200 px cells under
`border-t gray-200 pt-10`; image 1,024 × 512 in a 16 px frame with `ring-1 ring-gray-200 shadow-2xl`.
The `.text-gradient` span is the only element on the page that does not invert in dark mode.

Two traps here: **the typewriter changes the `h1`'s height at 390** (span 80 → 40 → 80 px, so the page jumps
40 px every 3 s — defect 1; give the span a fixed two-line box) and **the span's width varies 288 → 845 px** at
1440, so the line re-centres on every cycle. Both are visible in a recording and invisible in a still.

### 2 — `#work`
Left-aligned `max-w-2xl` intro (square chip `#141413`/`#c3f53c`, `h2` 48/48 `−1.2 px`, `primary-600` lead), then
three 580/580 rows with 56 px gaps and `items-center`, the **second reversed** (`lg:[&>figure]:order-2`). Each
figure is 580 × 435 (4:3) in a `primary-100` well with a **lime plate at the top-left** (149 × 28, `11/700` mono
uppercase, `text-primary-900`) reading the discipline and year. The text column repeats a shape the page uses
nowhere else: company line (mono, `+2.4 px`) → `h3` 30/36 → a `dl` with a **2 px lime rule down the left** and
20 px padding → three `dt`/`dd` pairs → a metric line (`36/40 700` figure + `14` caption). The lime rule beside
the `dl` is the section's signature; a 1 px version reads as a border and loses the idea.

### 3 — `#disciplines`
The only near-black band, and the only place where a chip **inverts** (`bg-accent-400` + `text-primary-900`).
Rows are `grid sm:grid-cols-[1fr_1.4fr]` (486.7 / 681.3 at 1440) split by 1 px `#464642` rules with `border-y`
closing top and bottom, 160 px tall, `py-8`. Left cell: `h3` 30/36 that turns **lime on hover** (`group-hover`,
the page's only hover colour change) above the price in lime mono. Right cell: `primary-200` body, then
**square** tag pills (1 px `primary-600` border, 11 px mono, 4/10 padding) — 5 / 5 / 4 / 3 per row.

### 4 — `#process`
`max-w-6xl`. The grid is the trick: `ol.grid.gap-px.bg-primary-200` with white cells at `p-6`, so **the 1 px
ground is the divider** and the four cells measure 271.25 × 322 with no borders of their own. Numeral `01–04` in
**lime mono 30/36** (the only lime numerals), duration right-aligned in 11 px mono, `h3` 18/28, body
`text-sm leading-relaxed primary-600`, and a `You get` footer above a 1 px `primary-200` rule. Then three
footnotes in `sm:grid-cols-3`, each led by a **1.5 × 1.5 px lime square** — the smallest accent mark on the page
and the one most easily lost in a rebuild.

### 5 — `#deliverables`
`primary-50` ground, `max-w-6xl`. Three 346.7 px columns with **2 px `primary-900` top rules** (the heaviest
rules on the page, and the reason the section reads as a spec sheet). Rows are baseline pairs — file name
`14/500` + right-aligned mono format label — 39 px when a note follows, 21 px when it does not. The closing note
is a white box with a **4 px lime left border**: the only place lime appears as a border rather than a fill.

### 6 — `#testimonials`
`gray-50` ground, centred `max-w-3xl`, pill `Clients` (71 × 28, `primary-100`), `h2` 36/40. Three 381 px cards
(`rounded-2xl bg-white p-8 shadow-soft`) at **320 / 292 / 348 px** — **unequal heights, top-aligned**: the kit
does not stretch them, and equalising them changes the band's rhythm. Five **20 px stars in `primary-400`**
(grey, not lime — do not "brand" them), quote 18/28 500, 48 px `primary-100` avatar disc with the initial, name
+ role. At ≥1024 three slides exactly fill the track, so the carousel renders **no dots and no arrows**; below
`lg` it becomes a real carousel (3 dots, visible arrows, 358 px slides).

### 7 — `#faq`
White, centred `max-w-3xl`. Pill `Questions`, `h2` 36/40, lead, then five 81 px rows in a `divide-y` list.
Question 18/600 left, 32 px `gray-100` disc with a `+` right; the kit rotates the icon 45° and animates
`max-height` from 0 to `scrollHeight` (88 px on row 1), closing the others. Single-open, and it has **no**
`aria-expanded` — add it.

### 8 — `#contact`
135° `#575751 → #2b2b28`, two white/10 blobs, and a 40 px white dot grid at 10 % (inline `radial-gradient`,
not a class). Centred white copy, a white filled CTA (203 × 56) and a 2 px white/30 outline CTA (286 × 60).
The recreation adds the `/contact/` four-field form under the CTAs (D2) — the only structural addition in the app.

### 9 — Footer
`gray-900`, `pt-24`, 12-column plate split 4/5/3. Zone 1: light wordmark **196 × 40**, blurb, three 40 px
chips, three contact lines. Zone 2: three link columns, 14/600 uppercase white headings. Zone 3: newsletter
(46 px field + 108 × 46 button). Bottom bar `mt-16 border-t py-8` in `gray-500`. The reference's **SPACES**
column and its four `#spaces` links are coworking leftovers → replaced with **THE STUDIO** (D4).

## The wordmark (do not rasterise it)

`logo.svg` is **507 B** and contains no paths: `viewBox="0 0 196 40"`, a `<rect x=3 y=9 w=18 h=18 rx=2>` plate in
`#141413`, a second `<rect x=13 y=15 w=18 h=18 rx=2>` in `#c3f53c`, a third `<rect x=13 y=15 w=8 h=12>` that fills
**only the overlap** in `#84b012`, and `<text x=40 y=28>` *Overprint* in Space Grotesk 21 / 700, `letter-spacing
−0.4`. `logo-light.svg` is the same geometry with `#f7f7f6` / `#c3f53c` / `#a8dc1f` and white words. Rebuild it as
an inline SVG component with the words as **live text**; the overlap rect only reads at ≥120 px, which is why the
screenshot's mark looks like a single lime square with a bitten corner.

## Source → React adaptation table

| reference                                    | recreation                                                       |
| -------------------------------------------- | ---------------------------------------------------------------- |
| Astro pages + `ClientRouter`                  | one Vite SPA; bands as sections, nav = anchors                    |
| shared kit `…BLoalVWc.js` (16,233 B)          | small typed hooks: `useHeaderShadow`, `useScrollProgress`, `useTypewriter`, `useParallax`, `useReveal`, `useTheme`, `useScrollSpy` |
| `[data-carousel]` + slide-per-view maths      | `Testimonials` renders a static 3-up row at `lg` and a real carousel below it |
| `[data-faq-toggle]` max-height animation      | `Accordion` component with `aria-expanded`/`aria-controls` + CSS grid-rows transition |
| `[data-video-modal]` + YouTube iframe         | `VideoDialog` (native `<dialog>` or portal), Escape + focus restore |
| inline `@font-face` × 12 from `/cf-fonts/`    | one Google Fonts `<link>`: `Space+Grotesk:wght@400;500;600;700`, `display=swap` |
| `--font-mono` (OS stack)                      | keep the theme token; **no** webfont mono                          |
| Unsplash `images.unsplash.com/photo-…`        | `https://picsum.photos/seed/makeready-<n>/<w>/<h>`                 |
| `assets/img/logo.svg` (507 B, live `<text>`)  | inline SVG component with the words as text                        |
| `#mobile-cta` / SPACES column                 | Enquire + Call the studio; **THE STUDIO** links (D4/D5)            |
| `data-newsletter-form` (no handler)           | local form with inline validation + confirmation (D6)              |

## Sibling comparison (same 2026 Astro family)

| prep         | source    | palette                 | theme            | distinctive feature                          |
| ------------ | --------- | ----------------------- | ---------------- | -------------------------------------------- |
| `conduit`    | nodig     | ink + amber             | light            | comparison table, 2xl escaping                |
| `nightwatch` | nightshift| slate + signal          | light            | working square-footage estimator              |
| `drainwise`  | metroflow | navy + cyan             | light            | ZIP finder + 11 inner routes                  |
| `patina`     | onyx      | warm ink + brass        | **dark pinned**  | before/after drag-compare                     |
| `pentimento` | ostend    | stone + rosewood        | **both, toggle** | typewriter `h1` + sticky figure               |
| `makeready`  | overprint | **paper/charcoal + lime** | **both, toggle** | **square chips + OS-mono technical layer + `gap-px` process grid** |

Nothing transfers across the boundary: this sheet is 62,102 B, its accent has **two** steps (not three), it has
**no italic and no serif at all**, its chips and plates are **square** rather than rounded, and it is the only
sibling whose second type "family" is the **system mono** rather than a downloaded face. Copy the structure, not
the tokens.
