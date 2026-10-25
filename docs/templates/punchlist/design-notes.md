# Punchlist — design notes

Prep research for `apps/punchlist`, recreating the ColorLib **ToolBelt** design (`toolbelt`).
Live preview: https://preview.colorlib.com/theme/toolbelt/ (200, 66,621 B, read 2026-10-25).
Spec: `openspec/specs/template-punchlist/spec.md`. Tasks: `docs/templates/punchlist/tasks.md`.

## The thesis, in one paragraph

The site sells a **price**, and it puts the price where a hero photograph would normally go. Above the photo, one
pill states the whole commercial offer — *"Fixed call-out fee. No charge for the quote."* — and three bands later a
real table lists **eight jobs with a `From` figure and a `Typical` range**, badged *Most booked* on the two that pay
the bills, footnoted with the one rule that matters (*"Every job starts with a £45 call-out… it comes off the total
if you go ahead"*). Everything after that is defence: three case studies that publish **area, hours and final cost**,
a coverage band that publishes **postcodes, response times and travel charges**, a credentials band that tells you
the four documents to demand from any tradesperson, reviews, and an FAQ that begins *"Mostly about money, which is
fair."* The closing band does not ask for an enquiry — it instructs: *"Send us the list."*

That is why the design is so plain: **cream and white, one orange, one dark slate band, one typeface, no
ornament** other than a floating blob or two. The restraint is the message — a trades site that prints prices
should not look like it is selling you something else.

## Structure order (measured at 1440 × 900)

| #  | band            | height | ground                        | device                                                        |
| -- | --------------- | -----: | ----------------------------- | ------------------------------------------------------------- |
| 0  | skip link       |      — | orange pill on focus          | first focusable                                                |
| 1  | header          |  **81**| white 80 % + `blur(16px)`     | sticky, `h-20`, 8 links, orange CTA, dark + burger             |
| 2  | hero            | **1,409** | `#fff7ed → #ffffff`        | pill + `h1` + typewriter + 3 CTAs + 4-stat row + 2:1 photo     |
| 3  | stats strip     |   **238** | `#f9fafb`, `border-y`      | four counters, 48/700 orange                                   |
| 4  | `#rates`        | **1,080** | `#ffffff`                  | 8-row table, `#0f172a` head, footnote strip                    |
| 5  | `#work`         |   **948** | `#f9fafb`                  | 3 case cards, 4:3 photo + `Area/Time/Cost`                     |
| 6  | `#areas`        |   **736** | `#0f172a`                  | 6 translucent cards, response chips, mono postcodes            |
| 7  | `#credentials`  |   **708** | `#ffffff`                  | 4 `border-2` cards, dark icon tiles, mono footer lines         |
| 8  | `#testimonials` |   **740** | `#f9fafb`                  | 3-up at desktop; carousel below `lg`                           |
| 9  | `#faq`          |   **820** | `#ffffff`                  | 5 disclosures, 768 px rows                                     |
| 10 | `#contact`      |   **452** | `#ea580c → #9a3412`        | dot grid, centred copy, 2 buttons, **no form**                 |
| 11 | footer          |   **566** | `#111827`                  | 12-col 4/2/2/2/3, newsletter, bottom bar                       |

Document **7,778 px** at 1440 and 1280; 7,892 / 8,171 / 11,061 / 11,580 at 1024 / 768 / 390 / 320.
`container` = **1,280** max (content 1,216 at `px-8`); `#rates` `max-w-5xl` (960); `#work` `max-w-7xl`;
`#areas` / `#credentials` `max-w-6xl` (1,088).

## DOM skeleton

```
<a skip>
<div id="scroll-progress">                       2 px, primary-600
<header data-header>                             sticky 81 / 65
  logo (light + dark SVG twins)  nav(8)  dark-toggle  CTA
  <div data-mobile-menu class="hidden lg:hidden"> 8 links + CTA
<main id="main-content">
  <section>                                      hero, no id
    background blobs (data-parallax, aria-hidden)
    pill / h1 (+ [data-typewriter]) / lede / 3 CTAs
    stat row (hairline, 4 cells)
    <img> 2:1 photo
  <section class="border-y">                     stats strip, no id
    4 × <div> <span data-counter>0</span> <label>
  <section id="rates">                           8-row <table> in shell + footnote
  <section id="work">                            3 × <li> cards with <dl> Area/Time/Cost
  <section id="areas">                           6 × <li> light cards on accent-900
  <section id="credentials">                     4 × <li> border-2 cards
  <section id="testimonials">                    [data-carousel] 3 slides + empty dot div
  <section id="faq">                             5 × button[data-faq-toggle] + panel
  <section id="contact">                         gradient + dot grid + 2 links
</main>
<footer>                                         brand / 3 link cols / newsletter / bottom bar
<div id="mobile-cta">                            fixed 69 px, lg:hidden
<div id="cookie-consent">                        slides up after 1.5 s
<div id="back-to-top">                           48 px, past 300 px
```

## CSS token reference block (declare in `@theme`)

The reference's sheet has **no custom properties** — Tailwind inlined everything. The two ramps are Tailwind's
`orange` and `slate`, renamed:

```css
@theme {
  /* primary — orange */
  --color-primary-50:  #fff7ed;
  --color-primary-100: #ffedd5;
  --color-primary-200: #fed7aa;
  --color-primary-300: #fdba74;
  --color-primary-400: #fb923c;
  --color-primary-500: #f97316;
  --color-primary-600: #ea580c;
  --color-primary-700: #c2410c;
  --color-primary-800: #9a3412;
  --color-primary-900: #7c2d12;

  /* accent — slate */
  --color-accent-300:  #cbd5e1;
  --color-accent-400:  #94a3b8;
  --color-accent-900:  #0f172a;

  --shadow-soft: 0 4px 16px -4px rgb(0 0 0 / 0.10);
}
```

Everything else is stock `gray-*` / `white`. Buttons/inputs are `rounded-lg` (8), cards and panels `rounded-2xl`
(16), section pills `rounded-md` (6), the small *Most booked* chip `rounded` (4), and pills/dots/avatars full.
Body copy is `#4b5563`, headings `#111827`, secondary-on-dark `#cbd5e1`.

## Screenshot analysis (`toolbelt-template.jpg`, 2,400 × 1,892, real `image/jpeg`, 271,587 B)

A 1,200 px browser mock showing **only the hero**: cream wash to white, the orange pill, the two-line `h1` (line 2
in orange), the orange + white button pair with the play disc beside them, the hairline stat row, and the 2:1 photo
with wide margins. It confirms proportions and nothing else — no shadow above 16 px radius, no serif, one accent.
It matches the live render; the live page is the authority for the ten bands the shot omits.

## Section-by-section fidelity notes

### Header (0 – 81 px, sticky)

`h-16 lg:h-20` = **65 / 81** (81 includes the 1 px `#e5e7eb` rule). Ground is `bg-white/80` with
`backdrop-blur-lg`; dark mode is `dark:bg-gray-950/80` + `dark:border-gray-800`. Two logo files swap by CSS
(`dark:hidden` / `hidden dark:block`) — in React that is one component with a `tone` prop. Nav `gap-8` (32 px),
labels `text-sm font-medium text-gray-600`, no underline/indicator; current-page marking is a `data-nav-link`
attribute the kit reads, **not** `aria-current` — ship `aria-current="page"` instead. CTA `rounded-lg px-6 py-3` at
the compact size (measured 10/20, 14 px/500), `shadow-lg shadow-primary-600/25`.

### Hero (81 – 1,490 px, 1,409)

Two-column-free: everything is **centred** in `max-w-4xl`, with the photo below in `max-w-5xl`. The gradient is
`from-primary-50 to-white` (top → bottom). The blobs are `h-[500px] w-[500px]` and `h-[400px] w-[400px]`,
`blur-3xl`, `rounded-full`, `primary-200/50` and `primary-100/40`, animated `hero-float` 8 s / 10 s reverse and
carrying `data-parallax` (0.15 / −0.1) — the kit's parallax is a no-op on this page, so treat them as ambient.
The `h1` is `text-6xl` at `lg` (60/60, `tracking-tight`), and the gradient span is `bg-clip-text text-transparent`
with `#ea580c → #fb923c`. The typewriter prepends the existing text to its list, so the first phrase is what the
markup already says; the swap is **opacity/translateY over 300 ms, every 3 s**. The three CTAs: orange (arrow),
white (`border-gray-300`), and a **bare text button** with a 48 px orange play disc — that third one is a video
lightbox, and on the reference it is a rick-roll (see spec defect 7). The stat row is `border-t pt-10 mt-16`,
`grid-cols-2 sm:grid-cols-4 gap-8`, figures `text-3xl lg:text-4xl` **not** the 48 px used in the counter strip — a
detail that is easy to flatten by accident. Photo `max-w-5xl`, `rounded-2xl shadow-2xl ring-1 ring-gray-200`.

### Stats strip (1,490 – 1,728 px, 238)

`border-y border-gray-200 bg-gray-50 py-16 lg:py-20`, `container`, `grid-cols-2 sm:grid-cols-4 gap-8`. Figures
`text-4xl lg:text-5xl font-bold text-primary-600` (48 px at 1440) over `text-sm font-medium text-gray-600` labels.
The markup ships literal `0` and the counter writes the value — the single worst fidelity trap on the page
(spec defect 8).

### `#rates` (1,728 – 2,808 px, 1,080)

`max-w-5xl` (960 content). Table in `mt-12 overflow-hidden rounded-2xl border border-gray-200`. Head
`bg-accent-900 text-white`, `th` = `px-5 py-3 text-xs font-bold uppercase tracking-wider`; columns **286 / 489 / 77 /
106** at 1440. Body `bg-white`; rows separated by `border-t border-gray-100`; cells `px-5 py-4`. Job cell holds the
name (`whitespace-nowrap font-semibold`) + optional `Most booked` chip (`rounded bg-primary-100 px-1.5 py-0.5
text-[10px] font-bold uppercase text-primary-800`) + a `sm:hidden` duplicate of the description (that is how the
description survives at 390). `From` is `text-right font-bold tabular-nums text-primary-700`; `Typical` is
`text-sm text-gray-600`, `hidden md:table-cell`. Row heights vary **57 / 73 px** depending on whether the chips wrap.
Footnote: `mt-8 rounded-r-lg border-l-4 border-primary-500 bg-primary-50 p-4 text-sm` — copy it verbatim; it is the
only place the call-out fee's mechanics are explained.

**The 320 px failure:** the table needs 345 px (`Job` 268 + `From` 77) inside a 288 px `overflow-hidden` shell, so at
320 the price column is cut off with no scrollbar. Fix by stacking the row below `sm` — job name, chip, blurb, then
`From £65 · Typical £65–140` on one line.

### `#work` (2,808 – 3,756 px, 948)

`max-w-7xl`, `mt-14 grid gap-6 md:grid-cols-3`. Card = `group relative flex flex-col overflow-hidden rounded-2xl
border border-gray-200 bg-white`. Image block `aspect-[4/3] overflow-hidden`, `img` `object-cover
group-hover:scale-105` over 500 ms, chip `absolute left-3 top-3 rounded bg-primary-600 px-2 py-0.5 text-[10px]
font-bold uppercase tracking-wide text-white`. Body `flex flex-1 flex-col p-5`; `h3` `font-bold` whose anchor
carries `after:absolute after:inset-0` (whole-card overlay — pointing at `#work` itself on the reference: defect 5);
blurb `mt-2 flex-1 text-sm text-gray-600`; `dl` `mt-4 grid grid-cols-3 gap-2 border-t border-gray-100 pt-4
text-center text-xs` with `dt` `text-gray-500` and `dd` `font-semibold`, the cost also `text-primary-700
tabular-nums`.

### `#areas` (3,756 – 4,492 px, 736)

`bg-accent-900 py-20 sm:py-28 text-white`, `max-w-6xl`. Eyebrow is the **solid** variant
(`bg-primary-500 text-white`), lede `text-accent-300`. Cards `mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3`,
each `rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur` with hover `border-primary-400/60
bg-white/10`. Header row is `flex items-start justify-between gap-3` — name `font-bold`, chip `shrink-0
rounded-full bg-primary-500/20 px-2.5 py-0.5 text-xs font-semibold text-primary-300`. Postcodes `mt-2 font-mono
text-sm text-accent-300`; travel notes `text-xs`. The tint is a 5 % white wash, **not** `gray-800` — keep the
translucency, it is what makes the band feel like one surface.

### `#credentials` (4,492 – 5,200 px, 708)

White ground, **pale** eyebrow (`bg-primary-100 text-primary-800`), copy in `max-w-2xl` centred. Cards
`mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4`, each `flex flex-col rounded-2xl border-2 border-gray-200 bg-white
p-6` — the **only `border-2` on the page**. Icon tile `flex h-12 w-12 items-center justify-center rounded-xl
bg-accent-900 text-xl text-primary-400` — on the reference the "icon" is a Unicode glyph (`◈ ⚡ ◉ ✓`); ship lucide
icons. Title `mt-4 font-bold`, body `mt-2 flex-1 text-sm leading-relaxed text-gray-600`, footer line `mt-4 border-t
border-gray-100 pt-3 font-mono text-xs text-gray-500`.

### `#testimonials` (5,200 – 5,940 px, 740)

`bg-gray-50`, `container`. Pale eyebrow *Reviews*, `max-w-3xl` centred heading block. Carousel: `relative mt-16`,
track `flex transition-transform duration-500 ease-out`, slides `flex-shrink-0 px-3` sized by JS to
`container ÷ visible`. At 1440 three slides are 405 each and **`maxIndex === 0`**, so the arrows are `display: none`
and the dots container is empty — the "carousel" is visually a static row. Below `lg` it becomes real: 2-up at 768
(368 px slides, 2 dots), 1-up at 390 (358 px, 3 dots), arrows `absolute -left-4 / -right-4 top-1/2` as 40 px white
discs with `shadow-lg`. Dots are rebuilt on resize: active is `w-8 bg-primary-600`, inactive `w-2.5 bg-gray-300`.
Card: `rounded-2xl bg-white p-8 shadow-soft`; stars `h-5 w-5 text-primary-400` ×5; quote `text-lg font-medium
text-gray-900`; footer `mt-6 flex items-center gap-3` with a 40 px `rounded-full bg-primary-100` initial disc
(`text-sm font-bold text-primary-700`), name `text-sm font-semibold` and area `text-xs text-gray-500`.

### `#faq` (5,940 – 6,760 px, 820)

White, `container`, copy column `max-w-3xl` (`mt-14 divide-y divide-gray-200`). Each row `py-6`; the toggle is
`flex w-full items-center justify-between text-left` with the question `text-lg font-semibold` and a `ml-4 flex h-8
w-8 ... rounded-full bg-gray-100` plus icon. Panels are `overflow-hidden transition-all duration-300` with an
**inline** `max-height: 0px; opacity: 0` — no `aria-expanded` (defect 6). Rebuild with `aria-expanded` +
`aria-controls` + `hidden`, 300 ms height, icon `rotate-45` when open, single-open.

### `#contact` (6,760 – 7,212 px, 452)

`relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28`, white text, centred
`max-w-3xl`. Decor: two blurred white discs at 10 % and a dot grid — `radial-gradient(circle at 1px 1px, white 1px,
transparent 0)` at `background-size: 40px 40px`, `opacity-10`, covering the band. `h2` `text-3xl sm:text-4xl lg:text-5xl`.
Two buttons: white solid (`text-primary-700`, `px-8 py-4`) and a 2 px `border-white/30` ghost with a phone glyph.
**There is no `<form>` here** — both buttons are links to `/contact/`. If the recreation routes in-app, the form
described in the spec goes there.

### Footer (7,212 – 7,778 px, 566)

`bg-gray-900 pt-16 lg:pt-24 text-gray-300`, `container`, `grid gap-12 lg:grid-cols-12 lg:gap-8`. Brand `col-span-4`
(**384 measured**), the three link columns and the newsletter `col-span-3` (**280**); the middle columns measure
**141** each with the container's own `gap-8`. Column titles `text-sm font-semibold uppercase tracking-wider
text-white`; links `text-gray-400 hover:text-white`; social chips `rounded-lg bg-gray-800 p-2.5`. Newsletter
`flex gap-2` with `min-w-0 flex-1` input (`bg-gray-800 border-gray-700`, placeholder only, no label — defect 11) and
an orange *Subscribe*. Bottom bar `mt-16 border-t border-gray-800 py-8` with `© 2026 …` and three legal links.
Replace the *Spaces* column (defect 2).

## Source → React adaptation table

| source                                      | recreation                                                             |
| ------------------------------------------- | ---------------------------------------------------------------------- |
| Astro `.astro` components, `<ClientRouter>`  | one `App.tsx` composing `<Navbar>`, `<Hero>`, `<StatsStrip>`, `<Rates>`, `<Work>`, `<Areas>`, `<Credentials>`, `<Testimonials>`, `<Faq>`, `<ContactBand>`, `<Footer>` |
| `Base…BLoalVWc.js` dataset bindings          | React state: `typewriter`, `counters`, `carousel`, `faq`, `theme`, `menu`, `cookie`, `video` |
| inline theme FOUC guard                      | `index.html` inline snippet, same `localStorage.theme` key, plus a `useTheme` hook that exposes `aria-pressed` |
| `_astro/Base…css` compiled utilities         | `src/index.css` `@theme` with the two ramps + `shadow-soft`; Tailwind utilities in markup |
| `logo.svg` / `logo-light.svg` (300 × 70)     | authored `Wordmark` component (bold text + orange squared glyph), two tones |
| Unsplash hero + 3 case photos                | `https://picsum.photos/seed/punchlist-1…4/<w>/<h>`                     |
| `font-mono` policy / postcode strings        | keep the system mono stack — do **not** import a mono webfont           |
| `/contact/`, `/pricing/`, `/about/`, `/blog/` | single-page recreation: the form becomes a routed `<ContactForm>` section (or `#contact` with the form inline), `/pricing/` collapses into `#rates`, about/blog copy is already summarised in the FAQ and credentials bands |

## Sibling comparison (the 2026 Astro house kit)

Same kit, same behaviour bundle (byte-identical sha256 `e26cc055dec23e63…`), same preloader/theme/cookie scaffolding.
What is **different** from the siblings:

| sibling            | difference here                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| Balancepoint       | that page is **dark-led with a live calculator**; this one is **light with a static published table**. Do not port the ledger interaction — the table is deliberately inert |
| Mandrel            | Mandrel has **zero** reveals and one typeface; Punchlist has **27** reveals, an infinite blob animation and a typewriter. Keep the motion, guard the reduced-motion query |
| Jetline / Nightwatch | those are **dark-only, zero-photography** builds; this one is light and **photo-led** (4 photographs). Do not strip the imagery |
| Headwater          | two faces (Lora + DM Sans); Punchlist is **DM Sans only**                                             |
| Pipewright (Journeyman) | closest sibling in subject (trades) and in having a price answer, but Pipewright is a one-van story page; Punchlist is a **price list with case studies** |

## Open questions / decisions for the implementer

1. **Form placement.** The reference splits it onto `/contact/`. The recreation is a single-page app, so either
   (a) route `/contact` with `react-router` and keep `#contact` as a CTA band, or (b) put the four-field form into
   `#contact` and drop the CTA-only band. The spec's scenarios accept either — but the orange band must keep its
   shape, and the form must have four labelled fields with per-field validation.
2. **"Watch Demo".** Either own a short clip (a local `<video>` or your own embed) in a real dialog with
   `role="dialog"`, `aria-modal`, focus trap and `Escape`, or delete the control. Do not ship the reference's embed.
3. **Dark mode.** The reference ships a working toggle (`.dark` + `localStorage.theme`), and every band has `dark:`
   utilities. Keep it — this is one of the few templates where dark mode is already fully designed (ground
   `#030712`, `#areas` stays `#0f172a`, the closing band keeps its gradient).
4. **Sample figures.** 2,400 jobs / 4.9 / 96 % / 380 reviews are the design's own demo data. Keep the shape; if you
   keep the numbers, keep the honesty wording the sibling builds use.
