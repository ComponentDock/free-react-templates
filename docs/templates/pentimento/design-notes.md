# Pentimento — design notes

Source: ColorLib **Ostend** (`ostend`), live preview `https://preview.colorlib.com/theme/ostend/`
(HTTP 200, 69,797 B, read 2026-10-25 with `curl -4`). Recreation name `pentimento`. Spec:
`openspec/specs/template-pentimento/spec.md`. Tasks: `docs/templates/pentimento/tasks.md`.

A 2026 **Astro + Tailwind 4** build (`/*! tailwindcss v4.3.3 */`, one 63,042 B sheet, the same 16,233 B house
kit as the `conduit`/`nightwatch`/`drainwise`/`patina` preps) for **a painter's studio in Copenhagen**. The
`<title>` is the plainest possible — *"Home | Clara Ostend"* — and the `h1` carries the whole pitch:
*"Painting the hour / before the light goes"*, where the second line is a **typewriter cycling three phrases**.
The page is the second half of a genre inversion: it sells paintings by refusing to sell hard (no prints, no
discounts, one or two commissions a year, "I will say no to most requests").

This is the **first prep in the catalogue-gap set whose light theme is the default and whose dark toggle
actually binds** — `[data-dark-toggle]` + `[data-mobile-toggle]` + `[data-nav-link]` + `[data-typewriter]` are
all present, unlike `patina` (dark pinned, no hooks). It is also the first whose **display face carries every
italic line in the page while shipping no italic file**.

## Structure order (measured at 1440 × 900)

| #  | band                          | id / hook         | ground                    |   top | height |
| -- | ----------------------------- | ----------------- | ------------------------- | ----: | -----: |
| 0  | header, sticky, 80 % white    | `[data-header]`   | `#fff/80` + blur          |     0 |     81 |
| 1  | hero (badge · h1 · CTAs · image) | 1st `<section>` | `#faf9f7` → `#ffffff`     |    81 |  1,240 |
| 2  | six paintings                 | `#works`          | transparent on white      | 1,321 |  1,732 |
| 3  | statement (sticky figure)     | `#statement`      | transparent on white      | 3,053 |  1,103 |
| 4  | exhibition history, 7 rows    | `#exhibitions`    | `#1a1815`                 | 4,156 |  1,395 |
| 5  | three ways to buy             | `#acquire`        | `#faf9f7`                 | 5,551 |    942 |
| 6  | five questions                | `#faq`            | `#ffffff`                 | 6,493 |    820 |
| 7  | closing band                  | `#contact`        | 135° `#655e55`→`#2e2b26`  | 7,313 |    500 |
| 8  | footer, 4 zones               | `<footer>`        | `#111827`                 | 7,813 |    543 |

Document height: **8,356** px at 1440 and 1280 · **8,224** at 1024 · **9,636** at 768 · **9,485** at 640 ·
**12,450** at 390 · **12,431** at 320. Header **81** px at ≥1024, **65** below.

Chrome outside the flow: `#preloader`, `#scroll-progress` (2 px), skip link → `#main-content`, `#mobile-cta`
(`lg:hidden`, 69 px, two buttons — coworking leftovers), `#cookie-consent` (87 px at 1440 / 147 at 390),
`#back-to-top` (48 px).

## Token reference block (paste into `apps/pentimento/src/index.css`)

```css
@theme {
  /* stone / warm-grey — every fill, ground and body colour on the light page */
  --color-primary-50:  #faf9f7;
  --color-primary-100: #f2f0ec;
  --color-primary-200: #e4e0d9;
  --color-primary-300: #cdc7bc;
  --color-primary-400: #a9a196;
  --color-primary-500: #847c71;
  --color-primary-600: #655e55;
  --color-primary-700: #4a453e;
  --color-primary-800: #2e2b26;
  --color-primary-900: #1a1815;

  /* rosewood — ONLY three steps exist in the reference sheet */
  --color-accent-400: #df7484;
  --color-accent-600: #a82f47;
  --color-accent-700: #8a253b;

  --font-sans: Inter, system-ui, sans-serif;
  --font-serif: Lora, Georgia, serif;

  --radius-sm: 0.25rem;   /* exhibition tags only */
  --radius-lg: 0.5rem;    /* buttons, fields, chips */
  --radius-2xl: 1rem;     /* hero image frame only */
}

body      { background: #ffffff; color: #111827; -webkit-font-smoothing: antialiased; }
.dark body{ background: #030712; color: #f3f4f6; }

/* the h1's second line — hand-written in the reference, no dark variant */
.text-gradient {
  background-image: linear-gradient(to right in oklab, #655e55 0%, #a9a196 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

Stock Tailwind greys do the rest of the work: `gray-100 #f3f4f6` (FAQ plus disc) · `gray-200 #e5e7eb`
(dividers, header border, image ring) · `gray-300 #d1d5db` (secondary CTA border, Decline border) ·
`gray-400 #9ca3af` (footer links/social icons) · `gray-500 #6b7280` (bottom bar) · `gray-600 #4b5563` (nav,
hero lead, FAQ copy) · `gray-700 #374151` (input border, secondary CTA text) · `gray-800 #1f2937` (footer input
+ social chip ground) · `gray-900 #111827` (footer ground, headings) · `gray-950 #030712` (dark body / `#faq`).

## Screenshot analysis (`ostend-template.jpg`)

**211,538 B, a real baseline JPEG, 2400 × 1892.** A composed macOS-window mockup on white, cropped to the hero
only: header + badge + two-line `h1` + lead + three CTAs + the top of the 2:1 image frame. It confirms the hero
is the product (no cards in the shot), that the gradient's top reads as warm paper rather than white, that the
gradient phrase is noticeably lighter than the sans line above it, and that *"Acquiring work"* appears bolder
than its neighbours (the scroll-spy's `nav-active` class, frozen in the capture). Do **not** adopt the white
ground or the window chrome.

## Section-by-section fidelity notes

### 0 — Header
Sticky, 81 px (`h-20` + 1 px `gray-200` border) at ≥1024 and 65 px below. `bg-white/80 backdrop-blur-lg`. Logo
left (200 × 40, `dark:` swaps to `logo-light.svg`), seven labels at `gap-8` (`14/500 gray-600`), then moon
(36 × 36 hit area, `data-dark-toggle`), **Enquire** (90 × 40, `primary-600`, radius 8) and — below `lg` — the
hamburger. Only the first four labels carry `data-nav-link`; they are the four *bands*, so the scroll-spy lights
up on band boundaries and never on *About*/*Studio notes*/*Contact*.

### 1 — Hero
`max-w-4xl` centred over `primary-50 → white`, with two animated blobs behind an `aria-hidden` layer. The
stack is badge → `h1` → lead → CTA row → image, with `data-animate` delays 0/100/200/300/500 so it assembles
on load. Badge is 279 × 34 with a ping dot; the `h1` is 896 × 120 (60/60); lead 20/28 `max-w-2xl`; CTAs
235 × 48 and 195 × 50 plus the 48 px play disc; image 1,024 × 512 in a 16 px-radius frame with
`ring-1 ring-gray-200 shadow-2xl`. The `.text-gradient` span is the only element on the page that does not
invert in dark mode.

### 2 — `#works`
Left-aligned `max-w-2xl` intro (eyebrow `accent-700`, serif `h2`, `primary-600` lead), then a 3-column grid of
384 px cards with 32/56 gaps. Each card is a 4:5 image in a `primary-100` well (scales 1.03 over 700 ms on
hover) and a five-line caption: category, italic serif title + non-italic year, medium, dimensions, and a
status row whose dot colour *is* the status (`accent-600` available, `primary-400` reserved, `primary-300`
sold/private). Price is `tabular-nums` pushed right with `ml-auto`; honest data means three prices, not six.

### 3 — `#statement`
The sticky figure is the band's whole idea: 487.6 × 609.5 portrait, `lg:sticky lg:top-28`, image well
`primary-100`, caption `12 italic primary-500`. Right column is 536.4 px of `16/29.6` `primary-700` prose with
`space-y-6`, interrupted after the first paragraph by a pull quote: `border-l-2 accent-600`, `pl-6`,
Lora 20/32.5 italic `primary-800`. The quote is the only accent-coloured rule on the light page.

### 4 — `#exhibitions`
The only near-black band, and the only place where the accent appears as a **fill** (Solo tags). Rows are
`grid-cols-[5rem_1fr]` with `border-t primary-700` and 24 px padding; the year column is Lora `tabular-nums`
`primary-400`, tags are 4 px-radius 10 px caps, titles Lora italic `primary-100`, venues 14 px `primary-300`.
The first row carries a second, borderless **FORTHCOMING** tag in `accent-400` — the only two-tag row.

### 5 — `#acquire`
`primary-50` ground; intro left, then three 341 px cards whose numerals (Lora 30 `accent-600`) are the only
place the accent shows as type in this band. Each card ends with a `border-t primary-200` hairline and a
`14 primary-500` rule-of-the-deal sentence — those sentences are the template's character, keep them.
*Represented by* is a two-pair inline list, and the closing CTA is the page's **only square control**
(228 × 54, 1 px `primary-900` outline, hover inverts).

### 6 — `#faq`
White, centred, `max-w-3xl`. Pill 28 px, `h2` in **Inter 700** (the sans returns here), lead, then five rows in
a `divide-y` list. Question 18/600 left, 32 px `gray-100` disc with a `+` right; the kit rotates the icon 45°
and animates `max-height` from 0 to `scrollHeight` (88 px on row 1), closing the others. Single-open.

### 7 — `#contact`
The page's only saturated surface: 135° `#655e55 → #2e2b26`, two white/10 blobs, and a 40 px white dot grid at
10 % opacity (inline `radial-gradient`, not a class). Centred white copy, then a white filled CTA (254 × 56)
and a 2 px white/30 outline CTA (288 × 60). The recreation adds the `/contact/` four-field form under the CTAs
(D2) — that is the only structural addition in the whole app.

### 8 — Footer
`gray-900`, `pt-24`, 12-column plate split 4/5/3. Zone 1: light logo, blurb, three 40 px chips, three contact
lines. Zone 2: three link columns, 14/600 uppercase white headings. Zone 3: newsletter (46 px field + 109 × 46
button). Bottom bar `mt-16 border-t py-8` in `gray-500`. The reference's **SPACES** column and its four
`#spaces` links are coworking leftovers → replaced with **THE WORK** (D4).

## Source → React adaptation table

| reference                                  | recreation                                                        |
| ------------------------------------------ | ----------------------------------------------------------------- |
| Astro pages + `ClientRouter`               | one Vite SPA; bands as sections, nav = anchors                    |
| shared kit `…BLoalVWc.js` (16,233 B)       | small typed hooks: `useHeaderShadow`, `useScrollProgress`, `useTypewriter`, `useParallax`, `useReveal`, `useTheme`, `useScrollSpy` |
| `[data-faq-toggle]` max-height animation   | `Accordion` component with `aria-expanded`/`aria-controls` + CSS grid-rows transition |
| `[data-video-modal]` + YouTube iframe      | `VideoDialog` (native `<dialog>` or portal), Escape + focus restore |
| inline `@font-face` × 56 from `/cf-fonts/` | one Google Fonts `<link>`: `Lora:ital,wght@0,400..700;1,400..700` + `Inter:wght@300..700`, `display=swap` |
| Unsplash `images.unsplash.com/photo-…`     | `https://picsum.photos/seed/pentimento-<n>/<w>/<h>`                |
| `assets/img/logo.svg` (479 B, live `<text>`) | inline SVG component with the words as text                      |
| `#mobile-cta` / SPACES column              | Enquire + Call the studio; **THE WORK** links (D4/D5)             |
| `data-newsletter-form` (no handler)        | local form with inline validation + confirmation (D6)             |

## Sibling comparison (same 2026 Astro family)

| prep        | source     | palette                       | theme            | distinctive feature                     |
| ----------- | ---------- | ----------------------------- | ---------------- | --------------------------------------- |
| `conduit`   | nodig      | ink + amber                   | light            | comparison table, 2xl escaping          |
| `nightwatch`| nightshift | slate + signal                | light            | working square-footage estimator        |
| `drainwise` | metroflow  | navy + cyan                   | light            | ZIP finder + 11 inner routes            |
| `patina`    | onyx       | warm ink + brass              | **dark pinned**  | before/after drag-compare               |
| `pentimento`| ostend     | **stone + rosewood**          | **both, toggle** | **typewriter `h1` + sticky figure**     |

Nothing transfers across the boundary: this page's sheet is 63,042 B (the largest in the set), it has **three**
gradients plus a dot grid, and it is the only one whose `h1` is sans while its band headings are serif.
