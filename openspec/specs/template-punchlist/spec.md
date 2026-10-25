# Template: Punchlist (Handyman / odd-job services — the published price list as the hero)

## Purpose

A **handyman's site that answers the money question before anyone fills in a form**. The `h1` says *"The odd jobs
you keep meaning to sort"*, a pill above it promises *"Fixed call-out fee. No charge for the quote."*, and the
third band on the page is **a real table of eight jobs with a `From` price and a `Typical` range** — flat-pack
assembly £65, shelving £55, doors £70, small plumbing £80, minor electrical £90, painting £120, garden £75, and a
£180 half-day. The page's argument is that trades sites lose enquiries because they hide their prices, so this one
prints them, then defends them: the FAQ is mostly *"about money, which is fair"*, the credentials band names
**the four documents to ask any tradesperson for**, and the closing band is an instruction, not a pitch —
*"Send us the list."*

The design is a **cream-to-white hero over an orange brand ramp**, with exactly one dark band and one orange band to
break the rhythm: `primary` is Tailwind's **orange** ramp (`#ea580c` CTAs, `#f97316` eyebrows and counters,
`#9a3412` gradient end, `#fff7ed` the hero's top wash), `accent` is Tailwind's **slate** ramp (`#0f172a` the
coverage band and the rates table head, `#cbd5e1` its secondary text, `#94a3b8` reserved), and every other ground
is white or `gray-50`. **One typeface** — DM Sans at 400/500/600/700 — with a system-mono stack used sparingly for
registers (`LS1 · LS2 · LS7 · LS9`, `Policy AXA-4471902`). Radius is generous and consistent: `rounded-2xl` (16) on
cards, `rounded-lg` (8) on every button and input, full radius on pills and chips.

Its distinctive devices, in order: a **sticky 81 px header** with a scroll-progress hairline above it; a centred
hero with **a pulsing-dot pill, a typewriter second line** (`meaning to sort` → `putting off` →
`writing on a list`, on a `#ea580c → #fb923c` text gradient) and a **four-figure stat row** (`£45`, `2,400+`, `4.9`,
`12 yrs`) sitting on a hairline above a **2:1 photo** in a `rounded-2xl` ring; a **`gray-50` counter strip** whose
four numbers count up from `0` on intersect; the **rates table** in a `rounded-2xl overflow-hidden` shell with a
**`#0f172a` head**, `Most booked` chips on two rows and a `border-l-4` footnote strip; **three case-study cards**
(each with a category chip, an `Area / Time / Cost` definition grid and a `£` figure in orange); a **dark slate
`#0f172a` coverage band** of six postcode cards with response-time chips and travel charges; **four credential
cards with `border-2` and a letterform glyph in a dark tile** (`◈ ⚡ ◉ ✓`); a **three-up review carousel** that is
a static 3-up row at 1440 and a 1-up, arrow-and-dot carousel below `lg`; a **five-question accordion**; an
**orange gradient closing band** with a radial dot-grid overlay that phones nothing — it links to the contact
page; and a **four-column dark footer** that still contains a coworking template's *Spaces* column.

Recreation of the ColorLib **"ToolBelt"** design (https://colorlib.com/wp/template/toolbelt/, live preview
https://preview.colorlib.com/theme/toolbelt/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `toolbelt`
- **ColorLib page:** https://colorlib.com/wp/template/toolbelt/ — **HTTP 200, 111,707 B**.
  `<title>` **"ToolBelt - Handyman Website Template 2026 - Colorlib"**, `<h1>` **"ToolBelt"**. Listing
  `og:image` `https://colorlib.com/wp/wp-content/uploads/sites/2/toolbelt-template.jpg`
  (**2,400 × 1,892**, real `image/jpeg`, **271,587 B**). Listing description: *"Homeowners hiring a handyman want
  two numbers before anything else: what it costs and when you can come. ToolBelt puts a job-by-job price list and
  a callout-fee table on the front page instead of a quote form…"*
- **Live preview:** https://preview.colorlib.com/theme/toolbelt/ — **HTTP 200, 66,621 B**,
  `text/html; charset=utf-8`, read **2026-10-25** with `curl -4` (this host answers IPv6 first and hangs).
  `<title>` **"Home | ToolBelt"**, `<meta name="description">` *"Local handyman and home repair — published hourly
  rates, a fixed call-out fee, and a written quote before anyone picks up a tool."*,
  `<meta name="robots" content="noindex, nofollow">`. `theme/bootstrap/toolbelt/` and `theme/bb/toolbelt/` →
  **404**; the slug-only path is the live demo.
- **The 2026 Astro house kit**, same family as Mandrel / Headwater / Cresting / Nightwatch / Conduit / Jetline /
  Emberly / Balancepoint: one hashed stylesheet `_astro/Base.**zxmi9i6j**.css` (**62,960 B**,
  `/*! tailwindcss v4.3.3 */`, sha256 `441426fda5f5cf3e…`), the behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B**, sha256
  `e26cc055dec23e63…` — **byte-identical** to every sibling in the set) and the router
  `_astro/ClientRouter…**CYDbzu1r**.js` (**16,357 B**). Only the stylesheet differs.
- **No archive.** `https://preview.colorlib.com/downloads/free/toolbelt.zip` → **HTTP 404** (as does
  `toolbelt-v2.zip`), so there is no un-versioned twin to diff and no "archive-verified" claim is made anywhere
  below. The live preview is the sole DOM/CSS reference.
- **Three inline `<script>` bodies** (plus the two module tags): a **theme FOUC guard** (442 B — applies `dark`
  when `localStorage.theme === 'dark'`, or when the key is absent **and** `prefers-color-scheme: dark`), a
  **JSON-LD block** (161 B, **structurally broken — `{"@context":"https://***@type":"Organization",…}`**), and a
  **preloader teardown** (358 B: on `load`, fade `#preloader` to `opacity: 0` then `remove()` after 300 ms — but
  the document contains **no `#preloader`**, so this is dead code).
- **One typeface.** `html { font-family: DM Sans, system-ui, sans-serif }` — no serif anywhere, no second display
  face. Faces registered by the host's own font proxy are 300 / 400 / 500 / 600 / 700 (`document.fonts` shows DM
  Sans 300, 400, 500, 600, 700 in `loaded` and `unloaded` pairs); the document has **no Google Fonts `<link>`**.
  `--font-mono` is Tailwind's **system** mono stack (`ui-monospace, SFMono-Regular, Menlo, …`), used only for
  postcode strings, policy/registration lines and `tabular-nums` figures. Use Google Fonts in the recreation
  (verified 2026-10-25: `css2?family=DM+Sans:wght@400;500;600;700&display=swap` → **200**).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (open items **0**, `[~]` **0**, 2,857 rows; the prep scan reports
`items with NO spec on main: 0`), so this design comes from `docs/catalog-coverage.md` — the **42 standalone
designs** on colorlib.com's own listing that the checklist never recorded. This is row **`toolbelt`** of 42
(*preview 200, 66,621 B*), the row **immediately after `threadline`** and **before `trace-developer`** in that
table's order (the per-run queue in the prep skill names `toolbelt` as the next unprepped slug).

When the app ships, append this line under **`## Business`** — currently headed `## Business (384)`, bump it to
**385** — positioned alphabetically **after Publishing Company** (`publishing-company` → `pressline`, line 1167 on
`a3aa45a46`) and **before Racks** (`racks` → `verve`, line 1168). Re-read the section before pasting; a concurrent
stream may have inserted rows above it:

```markdown
- [x] **ToolBelt** — [colorlib](https://colorlib.com/wp/template/toolbelt/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/toolbelt-template.jpg) · [punchlist](https://punchlist.free.componentdock.com)
```

**Note on the name collision that is *not* one:** ColorLib separately has a template literally called
**Handyman** (`handyman`, shipped as `fixero`, and listed twice — line 1050 under `## Business` and line 1370
under `## Construction`). `toolbelt` is a different design; `punchlist` is a new, unused name (0 repo hits, three
404s on the ColorLib URL patterns, no `apps/punchlist`, no spec folder).

## Reference readings (2026-10-25, `curl -4` + Playwright/Chromium 1440 × 900)

| what                                        | value                                                                                                     |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| preview HTML                                | 200, **66,621 B**, `text/html; charset=utf-8`                                                             |
| stylesheet `_astro/Base.zxmi9i6j.css`       | 200, **62,960 B**, `/*! tailwindcss v4.3.3 */`, sha256 `441426fda5f5cf3e…`                                 |
| behaviour kit `…_lang.BLoalVWc.js`           | 200, **16,233 B**, sha256 `e26cc055dec23e63…` — the house kit, byte-identical to the sibling builds        |
| router `…CYDbzu1r.js`                        | 200, **16,357 B**                                                                                         |
| official archive `toolbelt.zip`              | **404** — no archive                                                                                      |
| `theme/bootstrap/toolbelt/`, `theme/bb/toolbelt/` | **404** — the slug-only path is the only live demo                                                  |
| assets `assets/img/*.svg`                    | **2 files**: `logo.svg` (header light, rendered **120 × 40** via `h-8` → `lg:h-10`) and `logo-light.svg` (header dark twin **and** footer, `h-10` = 40). A 300 × 70 source viewBox. |
| content images                               | **7 `<img>` elements**: 2 logo SVGs (one duplicated in the footer) + **4 Unsplash photographs** (1 hero 1200 × 600, 3 case-study 600 × 450). No local photography |
| incoming styles                              | **1** `<link rel="stylesheet">`, **0** Google Fonts links (faces come from the host's `/cf-fonts/` proxy), `og-image.jpg` (missing) |
| inner routes                                 | **7** — `/about/`, `/blog/`, `/contact/`, `/elements/`, `/pricing/`, `/privacy/`, `/terms/`, all **200 with a trailing slash**; `/rates/`, `/work/`, `/areas/`, `/credentials/`, `/services/`, `/style-guide/` → **404** |
| document height                              | **7,778** px at 1440 **and** 1280; **7,892** at 1024; **8,171** at 768; **11,061** at 390; **11,580** at 320 |
| horizontal overflow                          | **none** at 320 / 390 / 768 / 1024 / 1280 / 1440 — `window.scrollTo(200,0)` leaves `scrollX === 0` everywhere. `body.scrollWidth` reads **352** at 320 only because the 345 px rates table is **clipped** by its `overflow-hidden` shell (see §Reference defects 1) |
| anchors                                      | **46** `a[href]`, **20** distinct values: **6 ×** `/…/contact`, **5 ×** `/…/#work`, **4 ×** `/…/#spaces` (**dead**), **3 ×** each `/…/about`, `/…/blog`, `#`, **2 ×** each `/…/` (both logos), `#rates` (in-page), `/…/#rates`, `/…/#areas`, `/…/#credentials`, `/…/pricing`, `/…/#contact`, `/…/terms`, **1 ×** each `#main-content`, `tel:(555) 330-8814` (**malformed**), `tel:5556789012` (**different number**), `mailto:bookings@toolbelt.repair`, `/…/privacy`, `/…/elements` |
| inline `<svg>`                               | **34** (arrow, play, stars, phone, pin, sun/moon, burger, social glyphs, back-to-top, accordion plus)      |
| structure                                    | **14 ids**, **14 `<button>`**, **1 `<form>`**, **1 `<input>`**, **0 `<select>`**, **0 `<textarea>`** (home page), **1 `<table>`**, **3 `<dl>`**, **3 `<blockquote>`**, **9 `<section>`**, **0 `<details>`**, **1 `<h1>`**, **7 `<h2>`**, **17 `<h3>`**, **7 `<img>` |
| data attributes                              | `data-animate` **27**, `data-delay` **23**, `data-counter` **4**, `data-typewriter` **1**, `data-carousel` (+ `-track` / `-slide` / `-dots` / `-prev` / `-next`), `data-faq-toggle` **5**, `data-faq-icon` **5**, `data-video-modal` / `data-video-close`, `data-parallax` **2**, `data-dark-toggle`, `data-mobile-toggle`, `data-mobile-menu`, `data-header`, `data-nav-link` **8**, `data-cookie-accept` / `data-cookie-decline`, `data-newsletter-form` |
| gradients                                    | **15** utility hits: hero `from-primary-50 to-white`, closing band `from-primary-600 to-primary-800`, `text-gradient` (`#ea580c → #fb923c`), plus `bg-white/10` blob washes and the radial dot-grid overlay |
| keyframes in the sheet                       | `hero-float` (8 s / 10 s reverse, the two hero blobs), `shimmer`, `spin`, `ping` — **no `prefers-reduced-motion` guard anywhere in the sheet** |

## Page structure (measured 2026-10-25, `getBoundingClientRect` in Playwright/Chromium)

| #  | band           | element                        | ground                                    | top | height | notes                                                                    |
| -- | -------------- | ------------------------------ | ----------------------------------------- | --: | -----: | ------------------------------------------------------------------------ |
| 0  | skip link      | `<a href="#main-content">`     | orange pill on focus                      |   — |      — | first focusable, visually hidden until focused                            |
| 1  | header         | `<header data-header>` sticky, `z-50` | `#fff` 80 % + `blur(16px)`         |   0 |  **81** | 80 px row + 1 px `#e5e7eb`; **65 px** below `lg`                          |
| 2  | hero           | `<section>` (no id)            | `#fff7ed → #ffffff` vertical gradient      |  81 | **1,409** | centred `max-w-4xl` copy, `max-w-5xl` photo inside a `container`         |
| 3  | stats strip    | `<section class="border-y …">`  | `#f9fafb`                                 | 1490 |   **238** | `border-y` `#e5e7eb`, `py-16 lg:py-20`, four counters                      |
| 4  | `#rates`       | `<section id="rates">`         | `#ffffff` (no section bg utility)          | 1728 | **1,080** | `max-w-5xl`; table shell **960** wide, rows 57 / 73 px                     |
| 5  | `#work`        | `<section id="work">`          | `#f9fafb`                                 | 2808 |   **948** | `max-w-7xl`; 3 cards **389 × 523**, `gap-6`                                |
| 6  | `#areas`       | `<section id="areas">`         | `#0f172a` (dark)                          | 3755 |   **736** | `max-w-6xl`; 6 cards **352 × 94**, `gap-4`                                 |
| 7  | `#credentials` | `<section id="credentials">`   | `#ffffff`                                 | 4491 |   **708** | `max-w-6xl`; 4 cards **257 × 307**, `border-2`, `gap-5`                    |
| 8  | `#testimonials`| `<section id="testimonials">`  | `#f9fafb`                                 | 5198 |   **740** | `container`; track **1,216**, 3 slides of **405**, card **381 × 264**      |
| 9  | `#faq`         | `<section id="faq">`           | `#ffffff`                                 | 5938 |   **820** | `container`, copy column `max-w-3xl`; 5 rows **768** wide                  |
| 10 | `#contact`     | `<section id="contact">`       | `#ea580c → #9a3412` gradient + dot grid   | 6758 |   **452** | centred `max-w-3xl`; **no form** — two buttons out to `/contact/`          |
| 11 | footer         | `<footer>`                     | `#111827`                                 | 7210 |   **566** | `pt-16 lg:pt-24`; 12-col **4 / 2 / 2 / 2 / 3** (measured 384 / 488 … 280)  |

**Document height 7,778 px** at 1440 **and** at 1280 (identical — `container` caps at **1,280 px**, content column
**1,216** with `px-8`); **7,892** at 1024; **8,171** at 768; **11,061** at 390; **11,580** at 320. Band heights at
the smaller widths, for the responsive scenarios:

| width | hero  | stats | rates | work  | areas | credentials | testimonials | faq | contact |
| ----: | ----: | ----: | ----: | ----: | ----: | ----------: | -----------: | --: | ------: |
|  1440 | 1,409 |   238 | 1,080 |   948 |   736 |         708 |          740 | 820 |     452 |
|  1280 | 1,409 |   238 | 1,080 |   948 |   736 |         708 |          740 | 820 |     452 |
|  1024 | 1,377 |   258 | 1,080 |   930 |   760 |         771 |          796 | 820 |     452 |
|   768 | 1,109 |   218 | 1,238 |   939 |   887 |         944 |          714 | 756 |     380 |
|   390 | 1,220 |   338 | 1,484 | 1,949 | 1,235 |       1,498 |          746 | 788 |     476 |
|   320 | 1,261 |   358 | 1,569 | 1,936 | 1,306 |       1,613 |          802 | 884 |     504 |

Band padding is `py-20` (**80 px**) → `sm:py-28` (**112 px**) on rates / work / areas / credentials / contact, and
`py-20 lg:py-28` on testimonials / faq; the stats strip is `py-16 lg:py-20` (**64 → 80**). Container widths per
band, measured at 1440: header / hero / stats / testimonials / faq / contact / footer use `container`
(**1,280**, content **1,216**); `#rates` `max-w-5xl` (**1,024**, content **960**); `#work` `max-w-7xl`
(**1,280**, content **1,216**); `#areas` and `#credentials` `max-w-6xl` (**1,152**, content **1,088**).

Fixed chrome, out of flow: `#scroll-progress` (**2 px** = `h-0.5`, `fixed top-0 left-0 z-[60]`, `bg-primary-600`,
width = scroll fraction — **43.2 %** at 3,000 px of 7,778), `#back-to-top` (**48 px** disc, `fixed bottom-6 right-6`,
orange, `opacity 0 → 1` past 300 px; it **overlaps** the mobile CTA bar), `#mobile-cta` (**69 px** fixed
`bottom-0 z-40` bar, `lg:hidden`, two buttons: `tel:5556789012` *"Call Now"* and `#contact` *"Book a Tour"* — the
second label is coworking copy), `#cookie-consent` (`bottom-0`, slides in **1.5 s** after load unless
`localStorage['cookie-consent']` is set, with *Decline* / *Accept All*). The body has **no `padding-bottom`**, so the
69 px bar covers the footer's last 69 px on mobile.

## Design tokens (measured from `Base.zxmi9i6j.css`, 62,960 B, plus `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** Tailwind 4 inlines custom theme colours as **literal hex values**, so the
> sheet contains **no `--color-primary-*` / `--color-accent-*` custom properties** and **no `@theme` block at all** —
> only generated defaults (`--radius-lg .5rem` / `xl .75rem` / `2xl 1rem`, `--spacing .25rem`, `--text-6xl 3.75rem`,
> `--container-6xl 72rem`, `--container-7xl 80rem`, `--font-weight-medium/semibold/bold`). The two ramps below were
> reconstructed by parsing every `bg-` / `text-` / `border-` / `ring-` / `divide-` / `shadow-` rule for `primary-*`
> and `accent-*` (including `/5`, `/10`, `/20`, `/40`, `/50`, `/60` opacity forms) and then confirmed against
> `getComputedStyle` on the rendered page. **They are Tailwind's own `orange` and `slate` ramps renamed** — declare
> them in the app's `@theme` under the same two names so the markup can be transcribed almost literally.

### `primary` — orange (the brand)

| step | hex       | used for                                                                                                    |
| ---- | --------- | ------------------------------------------------------------------------------------------------------------ |
| 50   | `#fff7ed` | **the hero's top gradient stop** (`from-primary-50`), the pill's fill (`bg-primary-50`), the rates footnote strip |
| 100  | `#ffedd5` | **`Most booked` chips** (`bg-primary-100`), the *Reviews* / *Questions* / *Published rates* section pills, the case-study category chips |
| 200  | `#fed7aa` | hero decor blob (`bg-primary-200/50`), the hero pill's 1 px border (`border-primary-200`)                     |
| 300  | `#fdba74` | the closing band's `text-primary-100` sibling in dark mode (`text-primary-300`), the *Recent work* eyebrow on dark |
| 400  | `#fb923c` | **the five stars** on each review card (`text-primary-400`), the `text-gradient`'s second stop, counter colour in dark mode |
| 500  | `#f97316` | **the *Coverage* eyebrow's solid chip** (`bg-primary-500`), the pulsing hero dot, focus borders, area-card hover borders (`primary-400/60`), response chips (`bg-primary-500/20`) |
| 600  | `#ea580c` | **every primary button** (`bg-primary-600`), the case-study category chip, the scroll-progress bar, the stats counters, the hero `text-gradient`'s first stop, the closing band's gradient start |
| 700  | `#c2410c` | `text-primary-700` on CTAs' hover, the hero pill's text, **the `From` price figures in the rates table**, the section eyebrows' text |
| 800  | `#9a3412` | `text-primary-800` on the light section pills, **the closing band's gradient end** (`to-primary-800`)          |
| 900  | `#7c2d12` | present in the sheet, **unused in the markup**                                                                 |

### `accent` — slate (the page's dark ground and its secondary text)

| step | hex       | used for                                                                                                     |
| ---- | --------- | ------------------------------------------------------------------------------------------------------------- |
| 300  | `#cbd5e1` | **every secondary line on the dark bands** (`text-accent-300`): the coverage lede, each postcode string, the travel notes |
| 400  | `#94a3b8` | present in the sheet, unused in the markup                                                                     |
| 900  | `#0f172a` | **the whole `#areas` band** (`bg-accent-900`), **the rates table `<thead>`**, the *Recent work* dark eyebrow chip, the credential icon tile (`bg-accent-900`) |

### Stock Tailwind greys and white — five jobs

- `gray-50` `#f9fafb` — the **stats strip** and the **`#work` band** (and `gray-900/50` for `#work` in dark mode).
- `gray-100` `#f3f4f6` — hairlines inside cards (`border-gray-100`), the FAQ plus-button disc, the mobile *Call Now* button.
- `gray-200` `#e5e7eb` — **the site's border colour**: header bottom rule, `border-y` on the stats strip, every card border, `border-2` on credential cards.
- `gray-400` `#9ca3af` — dark-footer links, `placeholder-gray-500` is used instead inside the newsletter input.
- `gray-500` `#6b7280` — `dt` labels in the case-study grids, the credential footnote lines, the footer bottom bar.
- `gray-600` `#4b5563` / `gray-700` `#374151` — body copy and secondary button text (`text-gray-600` on ledes, `text-gray-700` on the outline CTA).
- `gray-900` `#111827` — **headings** (`text-gray-900`), the footer ground (`bg-gray-900`), and `#030712` (i.e. `gray-950`) becomes the body ground in dark mode.

### Type

| role                | at 1440                                   | at 390                    | notes                                                     |
| ------------------- | ----------------------------------------- | ------------------------- | --------------------------------------------------------- |
| `h1`                | **60/60, 700**, `-0.9 px` (`tracking-tight`) | **36/40, 700**          | `text-4xl sm:text-5xl lg:text-6xl`, two lines: `#111827` then the gradient span |
| `h2`                | **36/40, 700**, `-0.9 px`                 | **30/36, 700**            | `text-3xl sm:text-4xl`                                     |
| `h3` (card titles)  | 16/24 **700**                             | 16/24 **700**             | `font-bold`; area names and step titles the same           |
| lede                | 20/28 `#4b5563` (`text-lg` … `sm:text-xl`) | 18/28                    | hero lede only; every other lede is 16/24 `#4b5563`        |
| body                | 16/24                                     | 16/24                     | `text-sm` = 14/20 inside cards                             |
| eyebrow / section pill | 14/**500** (`text-sm font-medium`) on the hero, **12/700 uppercase `tracking-wider`** on section pills | same | two different eyebrow idioms — see §Content inventory |
| counters            | **48/1, 700**, `#ea580c` (`text-4xl lg:text-5xl`) | 36/1              | hero stat row is **30/36** instead (`text-3xl lg:text-4xl`) |
| table head          | **12/16, 700**, `0.6 px` letter-spacing, uppercase | 12/16            | `px-5 py-3` = 12 / 20                                     |
| mono                | system mono stack, 12–14 px               | same                      | postcodes, `Policy AXA-…`, `tabular-nums` prices           |

### Shape, shadow, rhythm

- Radius: **16** (`rounded-2xl`) on every card, panel, table shell and the hero photo; **8** (`rounded-lg`) on every
  button, input and social tile; **6** (`rounded-md`) on section pills; **4** (`rounded`) on the small `Most booked`
  chips; **full** on the hero pill, response chips, dots and icon discs.
- Shadows: `shadow-soft` = `0 4px 16px -4px #0000001a` (review cards); `shadow-2xl` on the hero photo;
  `shadow-lg` + `shadow-primary-600/25` on primary buttons; `shadow-lg` on the carousel arrows and the mobile bar.
- Spacing rhythm: section padding 80 → 112 px; heading block → content **56 px** (`mt-14`); card padding **20 px**
  (`p-5`) on work/area cards, **24 px** (`p-6`) on credential cards, **32 px** (`p-8`) on review cards.
- Grids: work `md:grid-cols-3` `gap-6` (**24**); areas `sm:grid-cols-2 lg:grid-cols-3` `gap-4` (**16**); credentials
  `sm:grid-cols-2 lg:grid-cols-4` `gap-5` (**20**); hero stat row `grid-cols-2 sm:grid-cols-4` `gap-8` (**32**);
  footer `lg:grid-cols-12`.
- Motion: hero blobs `hero-float` **8 s** and **10 s reverse** (translate ±30/20 px, scale 0.95–1.05); the hero pill's
  dot `animate-ping`; 27 `data-animate="fade-in-up"` reveals with `data-delay` 0–500 ms in 100 ms steps; counters
  **2,000 ms** `easeOutCubic`; typewriter **3,000 ms** per phrase with a 300 ms fade/translateY swap; carousel
  **5,000 ms** autoplay, paused on `mouseenter`.

## Content inventory (verbatim copy; paraphrase the brand, never the operational detail)

### Header (81 px, sticky)

- **Wordmark:** `logo.svg` (an original mark: a small orange box glyph + the word *ToolBelt* — author your own).
- **Nav (8):** *Services* → `#rates` · *Recent work* → `#work` · *Areas covered* → `#areas` · *Credentials* →
  `#credentials` · *About* → `/about/` · *Rates* → `/pricing/` · *Blog* → `/blog/` · *Contact* → `/contact/`.
- **Actions:** dark-mode toggle (`aria-label="Toggle dark mode"`), *Get a fixed quote* button (orange, radius 8).
- **Mobile:** burger (`aria-label="Open menu"`, flips `aria-expanded`), a `hidden lg:hidden` panel of the same 8
  links plus the CTA; **no `aria-controls`**.

### Hero (1,409 px)

- **Pill:** pulsing dot + *"Fixed call-out fee. No charge for the quote."*
- **`h1`:** *"The odd jobs you keep"* / *(typewriter span)* **`["meaning to sort","putting off","writing on a
  list"]`** on the `#ea580c → #fb923c` gradient.
- **Lede:** *"Shelves that need putting up properly, a door that has not closed since spring, the flat-pack still in
  its box. Two qualified tradespeople, published rates, and a written quote before any work starts."*
- **CTAs:** *Get a fixed quote* (orange, arrow) · *See our rates* (white, `border-gray-300`) ·
  **play disc + "Watch Demo"** (opens a video lightbox — see §Reference defects 7).
- **Stat row** (hairline above, 4 cells): **£45** *Call-out, fixed* · **2,400+** *Jobs completed* · **4.9**
  *Average rating* · **12 yrs** *On the tools*.
- **Photo:** 1,024 × 512 (`aspect 2:1`), `rounded-2xl shadow-2xl ring-1 ring-gray-200`, alt *"A ToolBelt
  tradesperson fitting a kitchen shelf"*.

### Stats strip (238 px, `#f9fafb`, `border-y`)

Four counters, `data-counter` values and labels: **2,400** *Jobs completed* · **4.9** *Average rating across 380
reviews* · **96%** *Finished on the first visit* · **12** *Years on the tools*. (Literals ship as `0`.)

### `#rates` — "What things actually cost" (the band that is the template)

- Eyebrow pill: *Published rates* · `h2`: *"What things actually cost"* · lede: *"These are the real numbers we
  quote from. No estimate over the phone that doubles when we arrive."*
- Table head: **Job · What that covers · From · Typical** (`#0f172a`, 12/700 uppercase).
- Eight rows, `From` bold orange, `Typical` grey, two rows badged **Most booked**:

| Job                          | What that covers                                                                   | From  | Typical   |
| ---------------------------- | ---------------------------------------------------------------------------------- | ----- | --------- |
| Flat-pack assembly           | Wardrobes, beds, desks — built, levelled and secured to the wall where needed       | £65   | £65–140   |
| Shelving and wall fixings    | Includes finding the studs properly rather than hoping                              | £55   | £55–120   |
| Door adjustment and hanging  | Sticking doors, dropped hinges, new internal doors hung and trimmed                 | £70   | £70–180   |
| Small plumbing repairs       | Taps, traps, toilet fills and leaks that are not behind a wall                      | £80   | £80–200   |
| Minor electrical             | Sockets, switches and light fittings — Part P certified work only                   | £90   | £90–240   |
| Painting and making good     | Filling, sanding and two coats, usually after another job has made a mess           | £120  | £120–400  |
| Garden and outdoor repairs   | Fence panels, gates, decking boards and outdoor taps                                | £75   | £75–320   |
| Half-day rate                | For a list of small jobs — usually the best value if you have four or more          | £180  | 4 hours   |

- Footnote strip: *"Every job starts with a £45 call-out that covers the first half hour, and it comes off the total
  if you go ahead. Materials are charged at what we pay for them, with the receipt attached to your invoice. Quotes
  are free and given in writing."*

### `#work` — "Jobs from the last month" (948 px, `#f9fafb`)

Eyebrow *Recent work* (dark chip) · lede *"Real jobs with the time and the final cost, because that is what everyone
actually wants to know."* Three cards, each: category chip over a 4:3 photo, `h3` linked to `#work` itself, blurb, and
an `Area / Time / Cost` grid.

1. **Carpentry** · *Kitchen shelving, three walls* — *"Solid oak shelves onto a plasterboard wall with no usable
   studs. Resolved with toggle fixings rated well above the load, and the client sent a photograph of it holding a
   cast-iron pan collection."* — **Headingley · 5 hrs · £240**
2. **Doors** · *Sticking front door, finally fixed* — *"Two previous visits by others had planed the door, which is
   the wrong fix. The frame had dropped. Reset the hinges, packed the top hinge and it has closed properly since."*
   — **Chapel Allerton · 2 hrs · £95**
3. **Outdoor** · *Fence rebuild after storm damage* — *"Six panels and two posts, with the posts set in postcrete
   rather than dry gravel. Old panels taken away and disposed of at the tip, which is included in the quote."* —
   **Meanwood · 1.5 days · £680**

### `#areas` — "Where we work" (736 px, `#0f172a`)

Eyebrow *Coverage* (solid orange) · lede *"If you are outside these, ring anyway — we will tell you honestly whether
it is worth the travel."* Six cards — name, response chip, postcodes (mono), travel note:

| Area                  | Response     | Postcodes             | Note             |
| --------------------- | ------------ | --------------------- | ---------------- |
| Leeds central         | Next day     | LS1 · LS2 · LS7 · LS9 | —                |
| North Leeds           | Next day     | LS6 · LS8 · LS16 · LS17 | —              |
| South Leeds           | 2–3 days     | LS10 · LS11 · LS26    | —                |
| West Leeds            | 2–3 days     | LS12 · LS13 · LS28    | No travel charge |
| Wetherby & Boston Spa | Within a week| LS22 · LS23           | £20 travel added |
| Harrogate fringe      | Within a week| HG1 · HG2 · HG3       | £30 travel added |

Footnote: *"Response times are for a standard booking, not an emergency. We do not run a 24-hour emergency service,
and we would rather say that plainly than take the job and turn up late."*

### `#credentials` — "Insured, certified and checked" (708 px)

Eyebrow *The boring but important part* · lede *"Ask any tradesperson for these four things. If they cannot produce
them, keep looking."* Four `border-2` cards, each a glyph tile (`◈ ⚡ ◉ ✓` as **text**, not SVG), a title, a body and a
mono footer line:

1. **Public liability** — *"Two million pounds of cover, in date, and the certificate goes out with every written
   quote without you having to ask."* — `Policy AXA-4471902`
2. **Part P certified** — *"All electrical work is notifiable and certified. Anyone offering to change your consumer
   unit without this is not someone to let in."* — `NICEIC reg. 7742118`
3. **DBS checked** — *"Both tradespeople hold an enhanced DBS certificate, which matters if you are booking work
   around children or elderly relatives."* — `Renewed annually`
4. **Twelve-month guarantee** — *"Workmanship is guaranteed for a year. If it fails and it was our fault, we come
   back and fix it at no cost, including the call-out."* — `In writing, on every invoice`

### `#testimonials` — "What people say afterwards" (740 px, `#f9fafb`)

Eyebrow *Reviews* · lede *"Collected from real bookings, unedited."* Three 5-star cards with an initial disc:

1. *"The quote was the price. That should not be remarkable and in my experience it absolutely is."* — **H**,
   Helen Ashworth, Headingley
2. *"Turned up when they said, took their boots off without being asked, and told me one of the jobs on my list did
   not need doing."* — **R**, Raj Patel, Chapel Allerton
3. *"They found the actual cause of the sticking door rather than planing it down like the last two people did."* —
   **M**, Marie Dubois, Meanwood

### `#faq` — "What people ask before booking" (820 px)

Eyebrow *Questions* · lede *"Mostly about money, which is fair."* Five disclosures, all closed initially:

1. **Is the quote really fixed?** — *"Yes, provided the job is what we saw. If we open something up and find a
   genuine surprise — rot behind a panel, wiring that is not to standard — we stop, explain it, and give you a
   revised price before continuing. You can say no at that point and only pay the call-out."*
2. **What does the £45 call-out cover?** — *"Travel and the first half hour on site. If you go ahead with the work it
   comes off the total, so it only really costs you anything if you decide not to proceed."*
3. **Do you charge for materials?** — *"At cost, with the receipt attached to your invoice. We do not add a markup
   on materials, because it makes the quote impossible for you to sanity check."*
4. **Can you do electrical work?** — *"Sockets, switches, light fittings and anything else that falls under Part P,
   which we are certified for. Consumer units and full rewires we refer to a full-time electrician rather than
   pretending."*
5. **How far ahead are you booking?** — *"Usually next day in central and north Leeds, two to three days further
   out. We are not an emergency service and will say so rather than take a booking we cannot honour."*

### `#contact` — "Send us the list" (452 px, orange gradient)

`h2` *"Send us the list"* · lede *"Photographs help. Most quotes come back the same day, in writing, with the
call-out and materials spelled out."* Two buttons: **Get a fixed quote** (white, orange text, out to `/contact/`) and
**Check our rates first** (2 px `border-white/30`, phone glyph, to `#rates`). Decorative: two blurred `bg-white/10`
discs and a `radial-gradient(circle at 1px 1px, white 1px, transparent 0)` / `40px 40px` dot grid at `opacity-10`.

### Footer (566 px, `#111827`)

- **Brand column** (4/12): light wordmark, *"Local handyman and home repair — published hourly rates, a fixed
  call-out fee, and a written quote before anyone picks up a tool."*, three social chips, then
  `Unit 6, Brannigan Yard, Leeds, LS9 8AJ` · `(555) 330-8814` · `bookings@toolbelt.repair`.
- **Spaces** (coworking leftovers): *Hot Desk · Dedicated Desk · Private Office · Meeting Rooms* → all `#spaces`.
- **Company:** *About · Blog*. **Support:** *Contact · Terms*.
- **Stay Updated** (3/12): *"Seasonal maintenance reminders and the occasional honest note about what a job should
  cost."* + an email input and *Subscribe* (the page's only `<form>`).
- **Bottom bar:** `© 2026 ToolBelt. All rights reserved.` · *Privacy Policy · Terms of Service · Style Guide*.

## Interaction inventory

| device              | reference behaviour (read from `Base…BLoalVWc.js`, 16,233 B)                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| typewriter          | prepends the current text to the JSON list, then every **3,000 ms** fades out (300 ms, `opacity 0`, `translateY(10px)`), swaps and fades in |
| counters            | `IntersectionObserver` at `threshold .5`, **2,000 ms**, `easeOutCubic`, suffix parsing for `+`, `%`, `K`, `M`, `$` and decimals; final text is restored verbatim |
| carousel            | slides-per-view **1 / 2 / 3** at `<640 / ≥640 / ≥1024`; slide width = container ÷ view; `translateX(-index × width)`; dots rebuilt on resize; arrows hidden when `maxIndex === 0`; **5,000 ms** autoplay, `mouseenter` pauses, `mouseleave` resumes |
| FAQ                 | one open at a time: opens to `scrollHeight` px with `opacity 1`, rotates the plus glyph **45°**; opening another closes all others; toggling an open row closes it |
| dark mode           | flips `.dark` on `<html>`, stores `localStorage.theme = 'dark'` (removal → light), and the inline guard re-applies it on load or follows `prefers-color-scheme` when the key is absent |
| header              | sticky; `data-header` is bound for a scroll state; nav links carry `data-nav-link="/<path>"` for current-page marking |
| mobile menu         | burger toggles `aria-expanded` and swaps `hidden` off the panel; closes on link click |
| video lightbox      | `[data-video-modal="<url>"]` opens a fixed overlay with a YouTube `<iframe>`; closes on backdrop click, `[data-video-close]`, or `Escape` |
| scroll progress     | width = `scrollY / (scrollHeight − innerHeight) × 100 %` on a passive `scroll` listener |
| back-to-top         | appears past 300 px and smooth-scrolls to `0`                                                                                  |
| cookie strip        | slides up after **1,500 ms** unless `localStorage['cookie-consent']` exists; stores `accepted` / `essential`, then removes itself |
| newsletter form     | `data-newsletter-form` + `data-validate`; the email input is `required` with no visible label (placeholder only)                |
| reveals             | 27 `fade-in-up` targets, staged 0–500 ms; **no CSS rule for `[data-animate]`** — the JS writes inline `opacity`/`transform`, so the page is readable with JS off |

## Inner-page inventory (authoritative for anything the home page only summarises)

The theme is **multi-page**; every other page is live and is the real reference for the pieces the home page
compresses.

| route        | `<title>`                              | what it holds (the authoritative reference for…)                                                                 |
| ------------ | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `/contact/`  | `Book ToolBelt \| ToolBelt`            | **the real form** — `name` (text, required), `email` (email, required), `subject` (text, optional), `message` (`<textarea rows=5>`, required), submit *Send…*. Beside it an *"Or just ring"* panel: *Phone* `(555) 330-8814` · *Email* `bookings@toolbelt.repair` · *Workshop* `Unit 6, Brannigan Yard, Leeds LS9 8AJ` · *Working hours* `Mon - Fr: 07:30 - 17:30` / `Sat: 08:00 - 13:00 · Sun: closed`. **No phone field, no job-type select** |
| `/about/`    | `About ToolBelt \| ToolBelt`           | `h1` *About ToolBelt*; bands **"The price we say is the price you pay"**, **"Three things we will not do"** (*Estimate over the phone*, *Mark up materials*, *Take work we cannot do properly*), **"Who turns up"** (two tradespeople: **Dan Whitfield**, **Mo Karim**), closing **"Send the list, however long"** |
| `/pricing/`  | `Rates \| ToolBelt`                    | the **same rates band as the home page** plus the coverage band and FAQ — i.e. `/pricing/` is the canonical rates page and the home `#rates` is its excerpt |
| `/blog/`     | `Blog \| ToolBelt`                     | `h1` *Insights & Updates*, filter chips (*All · Pricing · Advice · Repairs · Maintenance*), a search field, and **6 posts**: *What a Small Job Should Actually Cost*, *Four Questions to Ask Before You Let Anyone In*, *Your Door Is Not Swollen, the Frame Has Dropped*, *The Jobs We Turn Down, and Who to Ring Instead*, *Why Flat-Pack Furniture Falls Apart, and How to Stop It*, *The Twenty-Minute Autumn Checklist* (dated `Mar 09, 2032`) |
| `/terms/`    | `Terms of Service \| ToolBelt`         | legal page; footer links *Terms* here and to `/terms` from the bottom bar's *Terms of Service* |
| `/privacy/`  | `Privacy Policy \| ToolBelt`           | legal page                                                                                                        |
| `/elements/` | `Elements \| ToolBelt`                 | **the design system page** — Typography (h1–h3 demos), Buttons (variants / sizes / disabled), Badges & Tags, Alerts / Notices, Cards (basic / hover shadow). Read it for the component vocabulary before inventing one |

## Screenshot analysis (`toolbelt-template.jpg`, 2,400 × 1,892, real `image/jpeg`, 271,587 B)

The ColorLib product shot is a **browser-chrome mock at 1,200 px logical width** and it **agrees with the live
render down to the pixel rhythm** — cream wash fading to white behind a centred hero, the orange pill, the two-line
`h1` with the second line in orange, the orange + white-outline button pair with the play disc beside them, the
hairline-separated four-figure stat row, and the wide 2:1 photograph with generous white margins. No band below the
photo is shown, so the screenshot tells you the hero's proportions and nothing about the other ten bands — the live
page is the authority for those. Palette read straight off it: near-black `#111827` type, one saturated orange, warm
off-white ground; nothing else. There is **no serif, no card shadow, no border-radius above 16 px** anywhere in the
shot. Treat it as the confirmation that the hero's *airiness* is deliberate: the copy column is 768 px inside a
1,216 px container, and the photo is 1,024 px with 96 px of page margin either side.

## Reference defects (fix in the recreation; do not reproduce)

1. **The rates table clips its own prices at 320 px.** The table needs **345 px** (`Job` 268 + `From` 77) inside a
   shell that is **288 px** wide with `overflow: hidden`, so at 320 the `From` column is **cut off entirely** and
   the figures simply vanish (the page does not scroll horizontally — `scrollTo(200,0)` → `scrollX 0`). Ship a
   layout that holds its prices at 320: stack the row (name, blurb, then `From … Typical` on one line) below `sm`.
2. **The footer still belongs to a coworking template.** The *Spaces* column — *Hot Desk · Dedicated Desk ·
   Private Office · Meeting Rooms* — is four links to `#spaces`, **an id that exists nowhere on the site** (the
   home page's ids are `main-content`, `rates`, `work`, `areas`, `credentials`, `testimonials`, `faq`, `contact`).
   Replace it with trades links (Services / Rates / Recent work / Areas covered) and delete the dead anchors.
3. **The mobile bar says "Book a Tour".** A `#mobile-cta` bar with **"Call Now"** and **"Book a Tour"** is
   coworking language on a handyman site; the same phrase (and *Book a Tour*) appears again in the footer.
   Use *Get a quote* / *Send the list*.
4. **Two different phone numbers, one of them malformed.** The header/footer/contact panel show
   `(555) 330-8814` → `tel:5553308814`, but the mobile bar dials **`tel:5556789012`**, and the contact page's own
   panel carries `tel:(555) 330-8814` (brackets and a space inside the URI). Normalise to one number, one
   well-formed URI.
5. **Five case-study "links" point at the section they are in.** Each work card's `h3` anchor is
   `href="#work"` with an `after:absolute after:inset-0` overlay, so the card looks clickable and reloads the page
   to the same anchor. Either give the cards a real destination or drop the link and the overlay.
6. **The accordion has no accessible state.** Five `data-faq-toggle` buttons carry **no `aria-expanded`, no
   `aria-controls`**, and the answer panels stay in the accessibility tree at `max-height: 0; opacity: 0` instead
   of being hidden. It *works* with a mouse; it is unusable with a screen reader. Ship `<button aria-expanded
   aria-controls>` + a panel with `hidden` (or `aria-hidden`) toggling, first item optionally open, `Escape`
   closes.
7. **"Watch Demo" is a rick-roll.** `data-video-modal="https://www.youtube.com/embed/dQw4w9WgXcQ"` opens a
   358 × 201 iframe of Rick Astley in an overlay with **no `role="dialog"`, no `aria-modal`, no focus trap, no
   accessible name**. Either ship a real product clip (a local `<video>` or an owned embed) in a proper dialog, or
   remove the control — a fake demo button is worse than none.
8. **The counters print zero to anyone who never scrolls.** The markup ships literal `0` text and only the
   `IntersectionObserver` writes the real figure, so crawlers, print, and JS-off users see *"0 jobs completed"*,
   *"0 average rating"*, *"0% finished on the first visit"*. Render the final value in the DOM and animate from it
   (derive the final value during render — see `docs/conventions.md` on `IntersectionObserver` fallbacks).
9. **No `prefers-reduced-motion` guard anywhere.** 27 reveals, two infinite `hero-float` blobs, a 5 s autoplay
   carousel, a pulsing dot and a typewriter all run regardless. Honour the media query: reveals become instant,
   blobs and autoplay stop, the typewriter settles on its first phrase.
10. **The dark toggle exposes no state.** `aria-label="Toggle dark mode"` with **no `aria-pressed`**; the icon swap
    is CSS-only (`dark:hidden` / `hidden dark:block`), so assistive tech cannot tell which mode is on.
11. **The newsletter field has no label** — placeholder-only, `required`, inside a `data-validate` form whose
    handler is not in the document (the base kit binds `data-validate`, not `data-newsletter-form`). Give it a
    `<label class="sr-only">`, a success message, and a real submit path.
12. **The JSON-LD is not valid JSON** — `{"@context":"https://***@type":"Organization",…}` (the context URL is
    truncated into the next key). Emit valid `HomeAndConstructionBusiness` JSON-LD or none.
13. **The credential glyphs are text characters** (`◈ ⚡ ◉ ✓`) in a `text-xl` span. They render at whatever the
    system fallback provides and are announced by screen readers. Ship `lucide-react` icons with `aria-hidden`.
14. **Header shadow never arrives.** The header carries `transition-all` and the kit binds `data-header`, but no
    scroll state is applied — measured `box-shadow: none` at 3,000 px of scroll. If you want the elevation, ship
    it; if not, drop the transition and the binding.
15. **The preloader teardown is dead code** — the script looks for `#preloader`, which the document does not
    contain. Do not port it.
16. **Sample-data caveats cannot be dropped:** *"Average rating across 380 reviews"*, *"2,400+ jobs completed"*,
    *"96% finished on the first visit"* are demo figures on a fictional business; keep the shape and, if you keep
    them as sample data, keep that honesty (`sample data` wording) the sibling builds use.

## Requirements

### Feature: Page shell and chrome

#### Scenario: Landmarks and skip link

- **GIVEN** the page is loaded
- **THEN** the first focusable element is "Skip to content" targeting `#main-content`, visually hidden until focused
  and then an orange (`primary-600`) pill at `left-4 top-4` with `z-[80]`
- **AND** the document has exactly one `<h1>`, one `<main id="main-content">`, one `<header>` and one `<footer>`
- **AND** the `h1` lives in the hero band, not in the header or the closing band

#### Scenario: Band order and grounds

- **GIVEN** a 1440 px viewport
- **THEN** the bands appear in this order: **sticky header (81) → hero (`#fff7ed → #fff`) → stats strip
  (`#f9fafb`, `border-y`) → `#rates` (`#ffffff`) → `#work` (`#f9fafb`) → `#areas` (`#0f172a`) →
  `#credentials` (`#ffffff`) → `#testimonials` (`#f9fafb`) → `#faq` (`#ffffff`) → `#contact`
  (`#ea580c → #9a3412`) → footer (`#111827`)**
- **AND** the heights are within 5 % of 81 / 1,409 / 238 / 1,080 / 948 / 736 / 708 / 740 / 820 / 452 / 566 px and the
  document is **7,778 px** tall
- **AND** exactly **three** grounds are coloured: one dark (`#0f172a`), one orange gradient, one near-black footer;
  every other band is white or `#f9fafb`

#### Scenario: No horizontal overflow anywhere

- **GIVEN** widths 320 / 390 / 768 / 1024 / 1280 / 1440
- **THEN** `body.scrollWidth === documentElement.clientWidth` and `window.scrollTo(200, 0)` leaves `scrollX === 0`
- **AND** at **320** the rates table still shows every `From` figure (the reference clips them — §Reference
  defects 1)

#### Scenario: Fixed chrome

- **THEN** `#scroll-progress` is **2 px** tall, `primary-600`, `fixed top-0 left-0 z-[60]`, `aria-hidden`, width =
  the scroll fraction, **0** at the top
- **AND** the back-to-top disc is **48 × 48**, full radius, orange, `fixed bottom-6 right-6`, hidden below **300 px**
  of scroll, and it does **not** overlap the mobile CTA bar (stack it above the bar, or add
  `pb-[69px]` on mobile)
- **AND** the cookie strip is a labelled `role="dialog"` that appears ~**1.5 s** after load unless
  `localStorage['cookie-consent']` is set, with *Decline* and *Accept All* storing `essential` / `accepted` and then
  dismissing it
- **AND** the mobile CTA bar is **69 px**, `lg:hidden`, `fixed bottom-0 z-40`, with two well-formed actions — and
  the page reserves its height so no content is covered

#### Scenario: Reveals and reduced motion

- **THEN** the bands reveal with `fade-in-up` staged 0–500 ms in 100 ms steps, and every element renders at
  `opacity: 1` before hydration (no CSS rule hides `[data-animate]`)
- **AND** under `prefers-reduced-motion: reduce` there is no reveal animation, the hero blobs do not float, the
  carousel does not autoplay and the typewriter settles on one phrase

### Feature: Sticky header

#### Scenario: Header at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the header is **81 px** (80 + 1 px `#e5e7eb`), `position: sticky`, `top: 0`, `z-50`, ground `#ffffff` at
  **80 %** with `backdrop-filter: blur(16px)`
- **AND** the wordmark is an **original** mark rendered ≤ **160 × 40** (`h-8` → `lg:h-10`), with a light twin used
  in dark mode and in the footer
- **AND** the eight nav labels are 14/20 **500** `#4b5563` with `gap: 32px`, `hover:text-gray-900`, and the
  in-page four scroll to `#rates` / `#work` / `#areas` / `#credentials`
- **AND** the CTA *Get a fixed quote* is radius **8**, `#ea580c`, white 14/500, `px-6 py-3` (measured `10px 20px`
  at the compact size), with `shadow-lg shadow-primary-600/25`
- **AND** the dark toggle and the burger are **40 × 40** icon buttons with `aria-label` "Toggle dark mode" /
  "Open menu"; the toggle exposes `aria-pressed`

#### Scenario: Nav collapses below `lg`

- **GIVEN** widths 1023 / 1024
- **THEN** at 1023 the desktop nav, the CTA and the toggle are hidden, the burger is visible, and the header is
  **65 px** (`h-16`)
- **AND** at 1024 the eight labels, the toggle and the CTA all render and the header is **81 px**

#### Scenario: Mobile panel

- **GIVEN** a 390 px viewport
- **THEN** the burger flips `aria-expanded` to `true`, exposes `aria-controls`, and reveals a panel of the eight links
  plus a full-width orange CTA
- **AND** the panel closes on link activation and on `Escape`, and focus returns to the burger

### Feature: Hero (`#fff7ed → #ffffff`)

#### Scenario: Hero at 1440

- **THEN** the band is **1,409 px** tall on a vertical gradient `primary-50 → white`, with two blurred
  `primary-200/50` / `primary-100/40` discs behind it, `aria-hidden`, floating 8 s / 10 s reverse
- **AND** the copy column is **768 px** (`max-w-4xl`) centred: the pill, the `h1`, a **512 px**-wide
  (`max-w-2xl`) lede, and a button row
- **AND** the `h1` is **60/60 700** `#111827` over two lines with the second line carrying the
  `#ea580c → #fb923c` gradient
- **AND** the pill is full-radius, `primary-50`, 1 px `primary-200`, 14/500 `primary-700`, with an 8 px dot ringed
  by an animated `ping`
- **AND** the primary CTA is orange radius 8 with a right arrow; the secondary is white with a 1 px
  `#d1d5db` border; the third control is a **48 px** orange play disc + "Watch Demo"
- **AND** the stat row sits on a 1 px `#e5e7eb` top rule, four cells `gap-8`, figures **30/36 700** and labels
  14/20 `#4b5563`

#### Scenario: The typewriter

- **THEN** the gradient span cycles `["meaning to sort", "putting off", "writing on a list"]` every **3,000 ms**,
  fading out and back in over 300 ms with a 10 px rise
- **AND** the first phrase is in the DOM before hydration, and with JS off (or reduced motion) it stays put

#### Scenario: Hero photo

- **THEN** the photo is a **2:1** frame, `max-w-5xl` (1,024 × 512 at 1440), `rounded-2xl`, `shadow-2xl`,
  `ring-1 ring-gray-200`, with a descriptive `alt` — a placeholder service image
  (`https://picsum.photos/seed/punchlist-1/1200/600`), never the source's Unsplash file

#### Scenario: Hero stacks below `lg`

- **GIVEN** 390 px
- **THEN** the `h1` is **36/40**, the lede 18/28, the buttons stack full-width in visual order, the stat row is
  `grid-cols-2` and the band grows to **1,220 px**

### Feature: Stats strip

#### Scenario: Four counters

- **THEN** the strip is **`border-y` `#e5e7eb` on `#f9fafb`, `py-16 lg:py-20`, **238 px** at 1440, `grid-cols-2
  sm:grid-cols-4` `gap-8`
- **AND** it shows **2,400** *Jobs completed* · **4.9** *Average rating across 380 reviews* · **96%** *Finished on
  the first visit* · **12** *Years on the tools*, each **48/1 700** `#ea580c` with a 14/20 `#4b5563` label
- **AND** each figure is **already correct in the DOM** and counts up over **2,000 ms** `easeOutCubic` when it
  enters the viewport, keeping its suffix (`%`, `,`, decimal)
- **AND** the sample-data caveat is preserved in the spec's copy and in a visible note where the figures are
  presented as demo data

### Feature: `#rates` — the published price list

#### Scenario: Table at 1440

- **THEN** the band is **1,080 px**, `py-20 sm:py-28`, container `max-w-5xl` (**960** content)
- **AND** the table sits in a `rounded-2xl border border-gray-200 overflow-hidden` shell; the `<thead>` is
  `#0f172a` with 12/700 uppercase white labels `Job · What that covers · From · Typical` (`px-5 py-3`)
- **AND** each row is a 1 px `#f3f4f6` rule (`#e5e7eb` between body rows), `px-5 py-4`; the job name is 16/600, the
  description 14/20 `#4b5563`, `From` is **16/700 `primary-700` `tabular-nums`**, `Typical` is 14/20 `#4b5563`
- **AND** exactly **two** rows carry a `Most booked` chip: 10/700 uppercase, `primary-100` on `primary-800`, radius 4
- **AND** the eight rows are the eight in §Content inventory, at the stated prices, in that order, and the
  half-day row's `Typical` reads **`4 hours`** (not a price)
- **AND** the footnote is a `primary-50` strip with a **4 px** `primary-500` left border and 14/20 `#4b5563` text

#### Scenario: Table reflows honestly

- **GIVEN** widths 390 and 320
- **THEN** below `sm` the `What that covers` column collapses into the job cell and below `md` the `Typical` column
  hides — but **`From` never disappears**, and at 320 the row stacks instead of being clipped
- **AND** every price remains readable at 320 with no horizontal scroll

### Feature: `#work` — three case studies

#### Scenario: Cards at 1440

- **THEN** the band is **948 px** on `#f9fafb`; `max-w-7xl`; three cards **389 × 523** in `md:grid-cols-3` `gap-6`
- **AND** each card is `rounded-2xl border border-gray-200 bg-white overflow-hidden` with a **4:3** image on top, a
  category chip at `left-3 top-3` (10/700 uppercase white on `primary-600`), an `h3` title, a 14/20 blurb that
  flexes, and a **3-cell `dl`** on a 1 px top rule: labels 12 `#6b7280`, values 12/600, the `Cost` value in
  `primary-700` with `tabular-nums`
- **AND** the three cards are *Carpentry / Doors / Outdoor* with the copy, areas, times and costs in
  §Content inventory
- **AND** the card is not a link to its own section: either a real destination or no overlay link at all

#### Scenario: Cards stack

- **GIVEN** 768 and 390
- **THEN** the grid is 1-up below `md` (3-up at `md`), the band is **939** at 768 and **1,949** at 390, and every
  card keeps its image aspect and its `dl` in three columns

### Feature: `#areas` — the coverage band

#### Scenario: Dark band at 1440

- **THEN** the band is **736 px** on `#0f172a` with white text, `max-w-6xl`, eyebrow a **solid** `primary-500` chip
  (12/700 uppercase white)
- **AND** the lede is `accent-300` (`#cbd5e1`)
- **AND** six cards **352 × 94** in `sm:grid-cols-2 lg:grid-cols-3` `gap-4`: `rounded-2xl border border-white/10
  bg-white/5 p-5 backdrop-blur`, hover `border-primary-400/60` + `bg-white/10`
- **AND** each card has the area name (16/700) with a response chip on the right (`bg-primary-500/20`,
  `text-primary-300`, full radius), a **system-mono** postcode line in `accent-300`, and the travel note where one
  exists
- **AND** the six areas are the six in §Content inventory with their response times, postcodes and travel charges,
  followed by the emergency-service disclaimer

#### Scenario: Contrast floor

- **THEN** `#cbd5e1` on `#0f172a` (≈ **9.5:1**) and white on `#0f172a` (≈ 17:1) pass; the response chips
  (`primary-300` on a 20 % orange wash over slate) are darkened/adjusted until they clear **4.5:1**

### Feature: `#credentials`

#### Scenario: Four document cards at 1440

- **THEN** the band is **708 px** on white, `max-w-6xl`, eyebrow a pale `primary-100` chip (12/700 uppercase
  `primary-800`)
- **AND** four cards **257 × 307** with **`border-2 border-gray-200`** (this card set is the only 2 px border on the
  page), `rounded-2xl bg-white p-6`, `lg:grid-cols-4` `gap-5`
- **AND** each card carries a **48 × 48** `rounded-xl bg-accent-900` tile with an orange (`primary-400`)
  `lucide-react` icon at 20 px, a 16/24 **700** title, a 14/20 `#4b5563` body that flexes, and a `border-t` footer line in
  **system mono 12** `#6b7280` (*Policy…*, *NICEIC reg.…*, *Renewed annually*, *In writing, on every invoice*)
- **AND** the four titles, bodies and footer lines match §Content inventory verbatim, and the licence/registration
  numbers are **invented** (never the source's `AXA-4471902` / `7742118`)

### Feature: `#testimonials`

#### Scenario: Three reviews at 1440

- **THEN** the band is **740 px** on `#f9fafb`; the carousel track is **1,216** wide with three **405** slides and
  cards **381 × 264** (`rounded-2xl bg-white p-8 shadow-soft`)
- **AND** each card shows five `primary-400` stars, the quote in 18/500 `#111827`, and a footer with a **40 px**
  initial disc, the name in 14/600 and the area in 12 `#6b7280`
- **AND** at 1440 the three cards are simply visible — **no arrows and no empty dot row** (the reference hides both
  because `maxIndex === 0`)

#### Scenario: Carousel on smaller screens

- **GIVEN** 768 and 390
- **THEN** two slides show at 768 (368 wide, **2** dots) and one at 390 (358 wide, **3** dots), with working
  arrows, an active dot in `primary-600` (`w-8` pill vs `w-2.5` dot), and **5,000 ms** autoplay that pauses on
  hover and respects `prefers-reduced-motion`
- **AND** the author's name is not clickable and the quote is a `<blockquote>`

### Feature: `#faq`

#### Scenario: Five working disclosures

- **THEN** the band is **820 px** on white, copy column `max-w-3xl`, five rows of **768** width separated by 1 px
  `#e5e7eb` rules
- **AND** each row is a real `<button aria-expanded aria-controls>` with a **32 px** plus icon in a `gray-100` disc
  that rotates **45°** when open; the panel is `hidden` while closed and expands to its content height over 300 ms
- **AND** **one row is open at a time**, `Escape` closes the open row, and all five answers are the verbatim text in
  §Content inventory
- **AND** the reference's missing `aria-expanded` is **fixed**, not reproduced

### Feature: `#contact`

#### Scenario: Orange closing band

- **THEN** the band is **452 px** on `linear-gradient(to bottom right, #ea580c, #9a3412)` with two
  `bg-white/10 blur-3xl` discs and a `radial-gradient(circle at 1px 1px, white 1px, transparent 0)` / `40px 40px`
  grid at `opacity-10`, both `aria-hidden`
- **AND** the centred `max-w-3xl` block reads `h2` *Send us the list* (48/700 white at `lg`), the lede in
  `primary-100`, then **Get a fixed quote** (white, `primary-700` text, radius 8, arrow) and **Check our rates
  first** (transparent, 2 px `border-white/30`, phone glyph)
- **AND** the band contains **no form** — the form lives on the contact route, and the buttons navigate there

#### Scenario: Contact route form

- **GIVEN** the contact view is rendered (in-app route or a `<form>` section, per the implementation's routing
  decision)
- **THEN** it has exactly four controls — `name` (text, required), `email` (email, required), `subject` (text,
  optional), `message` (textarea, 5 rows, required) — each with a visible `<label>`, plus a submit button
- **AND** invalid submits show per-field messages and block submission; a valid submit shows a success state
- **AND** the sidebar shows phone, email, workshop address and working hours, with one well-formed `tel:` and one
  `mailto:`

### Feature: Footer

#### Scenario: Footer at 1440

- **THEN** the footer is **566 px** on `#111827`, `pt-16 lg:pt-24`, 12-col (**4** brand / **2** + **2** + **2** link
  columns / **3** newsletter), `gap-12 lg:gap-8`
- **AND** the brand column shows the light wordmark (40 px), the one-sentence description, three social chips
  (`rounded-lg bg-gray-800 p-2.5`, 20 px glyphs, `aria-label` each), and the address / phone / email lines
- **AND** the link columns are **Services · Rates · Recent work · Areas covered** (or Company/Support split) —
  **not** the coworking *Spaces* column, and no link targets a non-existent id
- **AND** the newsletter is a labelled email input + *Subscribe* on `gray-800` with a `gray-700` border and
  `primary-600` button, with validation and a success message
- **AND** the bottom bar reads `© 2026 <Brand>. All rights reserved.` plus *Privacy Policy · Terms of Service ·
  Style Guide* (or drop the last), separated by a 1 px `gray-800` rule
- **AND** the footer links `https://www.componentdock.com/` ("Component Dock") and **no** ColorLib string appears
  in any app file, comments included

### Feature: Content and brand parity

#### Scenario: The price list survives

- **THEN** the eight rates rows, the three case studies (with areas, times and costs), the six coverage areas (with
  postcodes, response times and travel charges), the four credentials, the three reviews and the five FAQ answers
  are present verbatim, brand name aside
- **AND** no figure is rounded, no postcode is invented twice, and the `£` sign is kept throughout (this is a
  British trade site — do not convert to `$`)

#### Scenario: The rename

- **THEN** the app never says "ToolBelt" or "ColorLib" anywhere (source, data, comments, README, `index.css`
  notes), the wordmark and logo are authored, and the App is `Punchlist` in `apps/punchlist` with
  `@free-react-templates/punchlist`, `public/CNAME` and `homepage` = `https://punchlist.free.componentdock.com`
- **AND** the invented credential numbers and the phone/email/domain are the recreation's own

#### Scenario: Dark mode

- **GIVEN** the toggle is activated (or `prefers-color-scheme: dark` with no stored key)
- **THEN** `<html>` gains `.dark`, `localStorage.theme` becomes `dark`, the body ground becomes **`#030712`**, the
  hero gradient becomes `gray-900 → gray-950`, the white bands become `#030712`, the `gray-50` bands become
  `gray-900` (with `#work` at `gray-900/50`), `#areas` stays `#0f172a`, the closing band keeps its orange gradient,
  and the footer stays `#111827`
- **AND** headings invert to white, body copy to `gray-400`, accents move to `primary-400` / `primary-300`, and
  cards become `gray-800` / `gray-900` with `gray-800` borders
- **AND** the toggle exposes `aria-pressed` reflecting the current mode

#### Scenario: Accessibility floor

- **THEN** every icon-only control has an accessible name, every input a label, every band a landmark, and the
  skip link is first in tab order
- **AND** the accordion, the carousel and the video dialog are all keyboard operable with visible focus rings
  (`focus-visible:ring-2 ring-primary-500`)
- **AND** no text on the dark bands drops below **4.5:1**, and the section pills (`primary-800` on `primary-100`,
  `primary-700` on `primary-50`) pass at their sizes

## Verification checklist

- [ ] `apps/punchlist` exists, `@free-react-templates/punchlist` in `package.json`, `public/CNAME` =
      `punchlist.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments included); the
      app never says "ToolBelt"
- [ ] bands in this order: **header → hero → stats strip → `#rates` → `#work` → `#areas` → `#credentials` →
      `#testimonials` → `#faq` → `#contact` → footer** (+ fixed progress bar / back-to-top / mobile bar / cookie)
- [ ] header **81 px** sticky (white 80 % + `blur(16px)`, 1 px `#e5e7eb`), **65 px** below `lg`; eight labels
      14/500 `#4b5563`; orange CTA radius 8; toggle with `aria-pressed`; working mobile panel with `aria-controls`
- [ ] hero **1,409 px**, `primary-50 → white` gradient; pill with pulsing dot; `h1` **60/60 700** + gradient
      typewriter (`3,000 ms`, 3 phrases, first phrase in the DOM); orange CTA + white secondary + 48 px play disc;
      stat row **£45 / 2,400+ / 4.9 / 12 yrs**; **2:1** photo 1,024 × 512 `rounded-2xl shadow-2xl`
- [ ] stats strip **238 px** `#f9fafb` `border-y`; four figures **48/1 700 `#ea580c`** that are correct in the DOM
      and animate 2,000 ms on intersect with suffix preserved
- [ ] `#rates` **1,080 px**; `rounded-2xl overflow-hidden` shell; `#0f172a` head; **eight** rows with the eight
      prices; two `Most booked` chips; `primary-50` footnote with a 4 px `primary-500` left border; `From` visible
      at **320**
- [ ] `#work` **948 px** `#f9fafb`; three **389 × 523** cards, 4:3 image, category chip, `Area / Time / Cost` `dl`
      with the cost in orange `tabular-nums`; no self-referential card link
- [ ] `#areas` **736 px** `#0f172a`; solid orange eyebrow; six **352 × 94** translucent cards with response chips,
      mono postcodes and travel charges; emergency-service disclaimer
- [ ] `#credentials` **708 px**; four **257 × 307** **`border-2`** cards, 48 px dark icon tiles with orange
      `lucide-react` icons, mono footer lines, invented policy/registration numbers
- [ ] `#testimonials` **740 px** `#f9fafb`; 3-up at 1440 with **no** stray arrows or dots; 2-up at 768 / 1-up at
      390 with working arrows, real dots, 5 s autoplay and hover pause; five orange stars; initial discs
- [ ] `#faq` **820 px**; five `<button aria-expanded aria-controls>` disclosures, one open at a time, 32 px rotating
      plus, all five answers verbatim, `Escape` closes
- [ ] `#contact` **452 px** `#ea580c → #9a3412` + dot grid; two buttons; **no form in the band**; the form route has
      the four labelled controls and a working submit with per-field errors
- [ ] footer **566 px** `#111827`; 12-col **4 / 2 / 2 / 2 / 3**; light wordmark 40 px; social chips; address;
      newsletter with a real `<label>` and validation; **no coworking *Spaces* column, no `#spaces` link**;
      bottom bar
- [ ] chrome: 2 px orange progress bar, skip link, 48 px back-to-top that does not collide with the 69 px mobile bar,
      cookie strip storing `accepted` / `essential`
- [ ] reveals staged with `data-delay`; **nothing animates under `prefers-reduced-motion`**; blobs and autoplay stop
- [ ] dark mode: `.dark` on `<html>`, `localStorage.theme`, ground `#030712`, `#areas` stays `#0f172a`, orange
      gradient preserved, accents `primary-400`
- [ ] `body.scrollWidth === clientWidth` and `scrollX 0` at **320 / 390 / 768 / 1024 / 1280 / 1440**
- [ ] **zero** `href="#"`; **zero** `#spaces` anchors; one phone number, one well-formed `tel:`; every icon-only
      control named; valid JSON-LD or none
- [ ] 100 % coverage on the new app; `scripts/verify-app.sh punchlist` green

## Implementation notes for the port (not requirements)

- **The price table is the template.** Build it from a `rates` array (`{ job, covers, from, typical, popular? }`),
  render `From`/`Typical` from data (never hand-place eight rows), and keep `tabular-nums` on every figure so the
  columns line up. If the table is clipped or the `From` column hides on a phone, the page has lost its argument.
- **Two eyebrow idioms, deliberately.** Hero pill = 14/500 on `primary-50` with a live dot; section eyebrows =
  12/700 uppercase `tracking-wider` on `primary-100` (pale) or `primary-500` (solid, on the dark band) or
  `accent-900` with `primary-300` text (`#work`). Keep all three — they encode band lightness.
- **Orange is the only accent, and it must stay scarce.** One orange gradient band (`#contact`), one orange fill
  family (buttons, chips, counters, `From` prices, stars). If body text starts turning orange the page reads like a
  discount flyer.
- **Counters, done right.** Per `docs/conventions.md`, derive the displayed value during render when
  `IntersectionObserver` is missing (`const shown = typeof IntersectionObserver === 'undefined' ? value : animated`)
  and keep the final text in the DOM for crawlers and tests. Parse suffixes (`%`, `,`, `.`) from the data string, not
  from hard-coded conditionals.
- **Typewriter, done right.** Start from the phrase already in the markup, cycle through a JSON array in state, and
  **do not** run the interval under `prefers-reduced-motion`. Tests can assert the first phrase and that a fake-timer
  tick swaps it.
- **The carousel's desktop state is "no controls".** Implement slides-per-view 1 / 2 / 3 and compute `maxIndex`;
  when it is 0, render neither arrows nor dots (this is the reference's real behaviour, not a bug). Only build the
  dot row when there is somewhere to go.
- **Table hairlines, not borders.** Body rows use `border-t` on `#f3f4f6` inside the shell; the head is a single
  `#0f172a` block. Adding a border to every cell doubles every rule and thickens the table by 8 px.
- **Placeholder imagery:** `https://picsum.photos/seed/punchlist-<n>/<w>/<h>` — one hero (1200 × 600) and three
  case-study shots (600 × 450). The reference uses stock photographs of a cleaner and a fence; do not copy them.
- **Icons:** `lucide-react` (`ArrowRight`, `Play`, `Star`, `Phone`, `Mail`, `MapPin`, `Clock`, `Menu`, `X`, `Sun`,
  `Moon`, `Plus`, `ShieldCheck`, `Zap`, `BadgeCheck`, `Check`, `ChevronLeft`, `ChevronRight`, `ArrowUp`). The
  wordmark is yours: a bold wordmark plus a small orange squared glyph reads the same without the source SVG.
- **Copy discipline.** Keep the British voice — `£`, `tradespeople`, `call-out`, `Part P`, `DBS`, postcodes — and
  the blunt disclaimers (*"we would rather say that plainly than take the job"*). That tone is the design.
- **Second face:** there is none. If you add one, you have changed the template.

## Implementation decisions (this run)

Documented so the spec and the shipped app agree. Each is a deliberate deviation from the reference, made
because the reference's version is a defect (§Reference defects) or because a single-page build has no inner
routes to point at.

- **Single-page build, so the nav is seven live labels.** The reference's eight labels include *About*,
  *Blog* and *Pricing* routes; this build ships no inner routes, so every label targets a band that exists
  (`#rates`, `#work`, `#areas`, `#credentials`, `#testimonials`, `#faq`, `#contact`). No label points at a
  page that would 404, and there are zero `href="#"` anchors.
- **The enquiry form is a dialog, not a route.** The closing band keeps its two actions and no form
  (§Feature `#contact` → *Orange closing band*); the four-control form with per-field errors, a success state
  and the phone/email/workshop/hours sidebar lives in the `QuoteDialog` that every "Get a fixed quote" /
  "Send the list" control opens. Escape, the close control and the backdrop all dismiss it; reopening
  resets it.
- **No video control in the hero.** The reference's *Watch Demo* opens a third-party embed in an
  undialogued overlay (§Reference defects 7); this build ships no demo clip at all rather than a fake one.
- **No Privacy/Terms links in the bottom bar.** There are no legal pages in a single-page template, so the
  bottom bar carries the copyright line and the Component Dock link only — no dead legal anchors.
- **The newsletter success message replaces the form** rather than sitting beside it, so the confirmation is
  the only thing in that column after submitting.
- **Counters, typewriter and carousel** follow `docs/conventions.md`: the authored figure/phrase is what
  renders before animation, all animation is additive, and `prefers-reduced-motion` stops all three.
