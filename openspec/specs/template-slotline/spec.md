# Template: Slotline (Business — appointment and reservation booking for studios, clinics and small venues, sold by a live demo of the widget itself)

## Purpose

A one-page sales site for a **booking product**, where the product's argument *is* the page: the hero
says *"One diary, every way people try to book you"* and the second line of that headline **cycles
through three phrases** (a typewriter), then the page walks the visitor through the thing it is
selling — a **live three-step booking widget**, the **manager's weekly diary**, the **cancellation
ladder**, the **four booking channels** with proportional bars, **three per-calendar plans** with a
monthly/yearly switch, and a **six-question FAQ that admits a weakness** (`What is the worst thing
about Halfpast?` — answered *"Class and group booking is newer than the rest and it shows"*).

The composition is **one centred column that keeps breaking into a different instrument**: a centred
hero (`max-w-4xl`) over a sage wash with two blurred floating blobs and a framed 2:1 photograph; a
narrow **four-counter band** on a ruled strip; then five bands that each carry a **data instrument**
(calendar table, availability table, four-rung ladder, four proportional bars, three plan cards), and
a closing band on a **plum gradient with a dot grid**. Section rhythm is strict: `py-20 lg:py-28`
(80/112 px) on every instrument band, `border-y` + `bg-gray-50` on the odd ones, plain white on the
even ones — an alternating white/grey ladder that the two centred bands (pricing, FAQ) break by
sitting on white back to back.

The palette is a **two-ramp split, both hand-picked, neither stock Tailwind**: a **sage green `accent`**
(`#688554` brand — the live dot, the kicker pills, the "held" cells, the settings values, the clock's
minute hand) and a **plum `primary`** (`#7e587a` brand — every CTA, the selected day, the filled bar,
the "Booked" cells, the gradient's second headline line). **Nothing else is coloured**: greys do all the
structure, and the only other hues in the whole page are the kit's `green-600` toast and the
`green-100/green-700` "Save 20%" pill.

The type is the design's second argument and it is **deliberately split**: **Fraunces** (serif, 600) for
the hero `h1` (60 px / 60 px / −1.5 px), the section headings of the **bird's-eye** bands (booking,
availability, policies, channels — 36 px / 40 px / −0.9 px), the channel names, the four ladder rung
titles and the month label; **Inter** for everything else, including — and this is the trap — the
headings of **pricing and FAQ (36 px, weight 700)** and the closing band (**48 px, weight 700**).
Neither the face split nor the two header alignments may be unified: five bands are **left-aligned**
(`max-w-3xl`) with a **12 px uppercase sage pill**, two are **centred** with a **14 px sentence-case
lavender pill**, and the closing band is centred with no pill at all.

Three details carry the "this is a real product, not a brochure" voice:
**the widget's real states** — the calendar's fully-booked days are not buttons but `span`s that cannot
be pressed, the booked slots are `disabled` dashed-border buttons, the two scarce slots are
accent-tinted with `title` text, and the summary's `Confirm booking` button is `disabled` until all
three choices exist;
**the availability grid's four chip states** — `Booked` (solid plum, white `6/6`), `Held, unconfirmed`
(pale sage, `4/6`), `Open` (white with a 1 px inset ring, grey `2/6`) and `Not working` (a **45° hatch
painted with an arbitrary `repeating-linear-gradient`**, no figure at all), each with a legend under the
table;
**the ladder** — four bordered rungs whose pills escalate from sage (`Full refund`) through two plums to
near-black (`Full price`), i.e. the policy's severity is readable before a word of the body text.

Recreation of the ColorLib "Halfpast" design (https://colorlib.com/wp/template/halfpast/, live preview
https://preview.colorlib.com/theme/halfpast/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `halfpast`
* **ColorLib page:** https://colorlib.com/wp/template/halfpast/ — **HTTP 200, 111,192 B**,
  `<title>` **"Halfpast - Booking Website Template 2026 - Colorlib"**, `<h1>` **"Halfpast"**,
  `<meta name="description">` *"The booking widget is live, not a screenshot — pick a service, a day and
  a time and the summary fills in, with real disabled states so it works from a keyboard. Around it sit
  a weekly availability grid, a cancellation ladder with deposits, and the four channels bookings
  actually arrive from."* The catalogue's screenshot is **`halfpast-template.jpg`** (the naive
  `halfpast.jpg` is **404** — do not use it).
* **Live preview:** https://preview.colorlib.com/theme/halfpast/ — **HTTP 200, 105,852 B** read
  2026-10-25 with `curl -4` (**every** fetch on this host needs `-4`: the machine resolves a blackholed
  IPv6 address). An **Astro** build: one hashed stylesheet
  `_astro/Base.CEXwd6Yt.css` (**65,901 B**, sha256 `73c8e695…82f6ff`), one hashed behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.DqpAEKJ6.js` (**17,669 B**, sha256
  `2ac287eb…42f157`) and the Astro view-transition router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.CYDbzu1r.js` (**16,357 B** — the **same**
  `CYDbzu1r` router the other 2026 Astro builds ship). The behaviour bundle is **1,436 B larger than
  the Hedgerow/Groundwork kit** because it adds the booking-flow initializer (`S()`) and the
  billing-toggle initializer (`o()`); it is *not* the same hash, so do not assume sibling parity.
  ⚠️ **Do not store a raw sha256 of the HTML as identity:** two consecutive fetches differ (only in the
  **order** of the twenty inline `@font-face` rules — Cloudflare's `/cf-fonts/` CSS is emitted in a
  shifting order). Both are exactly 105,852 B. The canonical document is the **byte size + section
  census**, not the hash.
  `/theme/halfpast/index.html` is the same 105,852-byte document (directory URL and file URL agree in
  length); every **bare** route answers **308** with a `Location` ending in `/` (verified
  `/theme/halfpast/about` → `…/about/`), and every in-page `href` is bare, so each nav click costs one
  redirect in the reference.
* **No archive:** `https://preview.colorlib.com/downloads/free/halfpast.zip` → **404** (9 B
  `text/plain`). This is one of the 2026 hand-authored-style Astro builds with no downloadable twin, so
  the **live preview is the only authoritative source** (both DOM and tokens).
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**halfpast-template.jpg** —
  **HTTP 200, 299,745 B**, `image/jpeg` (not AVIF this time), **2400×1892**. A **macOS browser window on
  a pale sage `#e8ebe0`-ish desk ground** (three traffic lights, a grey rounded title bar), framing the
  page from the sticky header down to the middle of the hero photograph, with a soft drop shadow under
  the window. It therefore confirms — but does not add to — the header, the hero pill, the two-tone
  headline, the CTA pair, the `Watch a 90-second setup` disc, the four-stat strip and the top of the
  framed photo; it shows **nothing** of the counters, the widget, the diary, the ladder, the channels,
  the plans, the FAQ, the closing band or the footer. Treat it as corroboration, not as a reference.
* **New name:** `slotline` (`apps/slotline`, `@free-react-templates/slotline`) — one lowercase word: a
  diary is a line of bookable slots, which is the design's whole subject, and it is not the source name.
  Checked 2026-10-25 against `origin/main`: **no** `apps/slotline`, **no**
  `openspec/specs/template-slotline/`, **no** `docs/templates/slotline/`, `git grep -il slotline` prints
  **nothing** (0 hits repo-wide), `grep -ci slotline TEMPLATES.md` is **0**, and all three ColorLib URL
  forms — `wp/template/slotline/`, `preview.colorlib.com/theme/slotline/`,
  `preview.colorlib.com/theme/bootstrap/slotline/` — return **404**. Re-run those six checks before
  renaming. (`daybook`, `almanac`, `roster` were all rejected as taken by an existing app or prep;
  `timekeep`/`bookend` were rejected for non-zero substring hits.)
* **Deploy target:** https://slotline.free.componentdock.com (`apps/slotline/public/CNAME`, `homepage`
  in `apps/slotline/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** (see below). Suggested home: **`## Business`**
  (line **880** on `origin/main` `7e20fa642`, heading reads **`## Business (372)`** over **372** rows;
  the next heading is `## Charity (37)` at line 1254). Insert **in source-name alphabetical order,
  between `Hairsal` (line 1042) and `Halo` (line 1043)** — `Hairs` < **`Halfp`** < `Halo` — and bump the
  heading to **`(373)`**.

### Why this design has no row (catalogue gap, measured 2026-10-24/25)

`TEMPLATES.md` is exhausted — **0** `- [ ]`, every one of the 2,866 status marks `[x]` — but the
catalogue is not complete: all 40 pages of https://colorlib.com/wp/templates/ were crawled and compared
with the slugs the checklist cites, and **256 designs are on the listing that the checklist never
recorded** (42 standalone + 214 snippet variants). The census and both buckets live in
`docs/catalog-coverage.md`, whose standalone table carries this design's line:
`| halfpast | preview 200, 105852 B |`. **No app and no spec exist for this slug at all** (unlike
`groundwork`/`lantern`/`onyx`, whose names are taken by different designs), so only the name-collision
checks above are needed.

Queue order in that table: `airwise` → `backstop` → `cairn` → `circles` → `coldsnap` → `commons` →
`curbline` → `dowser` → `everhot` → `fernhill` → `fieldline` → `fieldnotes-student` → `fixtura` →
`flowpage` → `groundwork` → **`halfpast` (this)** → `heatline` → `journeyman` → `kinetic` → `lantern` →
`mainline` → `marrow` → `metroflow` → `nightshift` → `nodig` → `onyx` → … (`docs/catalog-coverage.md`
holds the full 42). Shipped so far: Thermly, Plantroom, Veranda, Flowcert, Aquifer, Smallpaw, Kettle,
Chalkline, Stryde (Emberly), Quarto, Rodline, Brassworks; prepped and unbuilt: Closeknit, Stoke,
Percline, Hedgerow.

**Implementer note:** because there is no row yet, add one **before** the PR claims anything — paste
this line into `## Business` between **Hairsal** and **Halo** and bump the count:

```
- [x] **Halfpast** — [colorlib](https://colorlib.com/wp/template/halfpast/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/halfpast-template.jpg) · [slotline](https://slotline.free.componentdock.com)
```

⚠️ **Re-measure the line numbers and the count yourself** — the file moves under this queue by dozens of
lines per day (Hedgerow's own prep recorded `Gravity` at 1039 on `467c8803b`; this prep records
`Hairsal` at 1042 and `Halo` at 1043 on `7e20fa642`). Locate `## Business`, then find the last row whose
source name sorts before `Halfpast`.

## Reference readings (2026-10-25, `curl -4`)

| reading | URL | status | bytes |
| --- | --- | --- | --- |
| landing page | `https://preview.colorlib.com/theme/halfpast/` | 200 | 105,852 |
| stylesheet | `…/halfpast/_astro/Base.CEXwd6Yt.css` | 200 | 65,901 |
| behaviour bundle | `…/halfpast/_astro/Base.astro_astro_type_script_index_0_lang.DqpAEKJ6.js` | 200 | 17,669 |
| view-transition router | `…/halfpast/_astro/ClientRouter…CYDbzu1r.js` | 200 | 16,357 |
| inline `<style>` (fonts) | inside the HTML `<head>` | — | **10,040** (38 `@font-face` rules: Fraunces 400/500/600, Inter 400/500/600/700, all `/cf-fonts/v/…`) |
| logo | `…/halfpast/assets/img/logo.svg` | 200 | 524 |
| og image | `…/halfpast/og-image.jpg` | **404** | 9 — the `<meta property="og:image">` is dead |
| archive | `…/downloads/free/halfpast.zip` | **404** | 9 |
| catalogue shot | `https://colorlib.com/wp/wp-content/uploads/sites/2/halfpast-template.jpg` | 200 | 299,745 |
| catalogue page | `https://colorlib.com/wp/template/halfpast/` | 200 | 111,192 |

Google Fonts delivery for the recreation (both **200**, verified with `curl -4 -o /dev/null -w
'%{http_code}'` on 2026-10-25):

```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap
https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap
```

A malformed axis list returns **400** from the `css2` API, which looks exactly like a face that does not
exist — re-probe the exact URL you ship before committing (`Playfair`-style 400s have bitten this repo
twice).

## Design tokens (measured from `Base.CEXwd6Yt.css`, 65,901 B, and from `getComputedStyle` at 1440 px)

### Brand ramp — `primary` (**hand-picked plum**, not a stock Tailwind family)

| token | hex | where it carries the design |
| --- | --- | --- |
| `primary-50` | `#faf6fa` | the checked service card (`has-[:checked]:bg-primary-50`) |
| `primary-100` | `#f4ecf3` | the two centred kicker pills, the ladder's mid pills |
| `primary-200` | `#e9dae8` | compiled, used only inside opacity variants |
| `primary-300` | `#d5bcd3` | compiled, not used in the markup |
| `primary-400` | `#b894b5` | the `text-gradient`'s **end** stop, `dark:text-primary-400` |
| `primary-500` | `#9a7096` | dark-mode fills, `focus:ring`, `dark:` hover borders |
| `primary-600` | `#7e587a` | **the brand**: header CTA, `text-gradient` start, "Most Popular" pill, the step numbers, bar fills, the contact gradient's first stop |
| `primary-700` | `#684a64` | hero CTA, selected day, selected slot, "Booked" chips, bar fill, `text-gradient` start on the hero |
| `primary-800` | `#563f53` | contact gradient end, CTA hover |
| `primary-900` | `#493748` | the ladder's dark-escaping pills, `shadow-primary-900/20` on the hero CTA |

### Accent ramp — `accent` (**hand-picked sage**)

| token | hex | where it carries the design |
| --- | --- | --- |
| `accent-50` | `#f4f7f1` | the hero's gradient start (`from-accent-50 to-white`) |
| `accent-100` | `#e5ecdf` | kicker pills, "Held, unconfirmed" chips, `Full refund` pill |
| `accent-200` | `#cddac2` | the hero pill's 1 px border, `bg-accent-200/45` blob |
| `accent-300` | `#abc09b` | the two "last slot" buttons' border |
| `accent-400` | `#86a273` | the hero pill's `animate-ping` ring |
| `accent-500` | `#688554` | the **live dot**, the clock's minute hand, the scroll-progress bar |
| `accent-600` | — | **does not exist** in the compiled sheet (0 rules). Do not invent it |
| `accent-700` | `#3f5335` | the word `Setup:` in the channel rows, dark hover borders |
| `accent-800` | `#35442d` | kicker text, "Held" chip text |
| `accent-900` | `#2e3a28` | `bg-accent-900/40–50` dark grounds, the `Full refund` pill's text |

### Chrome greys, grounds and status colours (stock Tailwind, measured through `getComputedStyle`)

| role | value | notes |
| --- | --- | --- |
| body text | `#111827` (`gray-900`) | `body { color:#111827 }`, 16/24 Inter |
| muted text | `#4b5563` (`gray-600`) | the lede and nav labels |
| micro text | `#6b7280` / `#9ca3af` (`gray-500`/`gray-400`) | status lines, footer links |
| white band | `#ffffff` | `#book`, `#policies`, `#pricing`, `#faq` |
| grey band | `#f9fafb` (`gray-50`) | the counter strip and `#availability`, `#channels` |
| hairline | `#e5e7eb` (`gray-200`) | every `border-y`, card border, calendar slot border |
| track | `#f3f4f6` (`gray-100`) | the channel bars' empty track, the FAQ's plus-disc |
| footer ground | `#111827` (`gray-900`) | 539 px tall |
| footer rules | `#1f2937` (`gray-800`) | the newsletter field's border and the bottom bar's rule |
| dark page | `#030712` (`gray-950`) | dark mode only — see §Deliberate deviations 2 |
| dark band | `#111827` (`gray-900`) | dark mode only |

### Typography

| element | measured | value |
| --- | --- | --- |
| body | Inter 400, **16 / 24**, `#111827` | `font-family: Inter, system-ui, sans-serif` |
| `h1` (hero) | **Fraunces 600, 60 / 60, −1.5 px**, `gray-900` | `text-4xl sm:text-5xl lg:text-6xl` → 36/48/**60**; at 390 it resolves **36 / 40 / −0.9** |
| `h2` — booking, availability, policies, channels | **Fraunces 600, 36 / 40, −0.9 px** | `text-3xl sm:text-4xl` |
| `h2` — pricing, FAQ | **Inter 700, 36 / 40, −0.9 px** | same size, **different face** — do not unify |
| `h2` — contact band | **Inter 700, 48 / 48, −1.2 px**, white | `text-3xl sm:text-4xl lg:text-5xl` |
| `h3` — channel names, ladder rung titles, plan names | 20 / 28, 600 | Fraunces for channels + ladder; **Inter** for plan names |
| `h3` — the widget's three step titles | **14 / 20, 600, `uppercase`, `0.7 px`**, Inter | `text-sm font-semibold uppercase tracking-wider` |
| `h3` — the two instrument sub-labels (`Cancellation ladder`, `What else you can set`) | **12 / 16, 600, `uppercase`, `1.92 px`**, `gray-500` | `text-xs … tracking-[0.16em]` |
| `h4` — `Your booking` | **12 / 16, 600, `uppercase`, `1.92 px`**, `gray-500` | the summary panel's label |
| kicker (left bands) | **12 / 16, 600, `uppercase`, `1.68 px`** (`tracking-[0.14em]`), `accent-800` on `accent-100`, pill `rounded-full px-3 py-1` | `Try it`, `The diary`, `Money`, `Where bookings come from` |
| kicker (centred bands) | **14 / 20, 500, sentence case**, `primary-900`-ish on `primary-100`, `rounded-full px-3 py-1` | `Pricing`, `Questions` — **not** uppercase, **not** sage |
| hero pill | 14 / 20, 500, `accent-800` on `bg-white/70`, 1 px `accent-200`, `rounded-full px-4 py-1.5`, 8 px ping dot | 217 × 34 |
| lede | **18 / 28**, `gray-600`, `max-w-3xl` = 768 px | every instrument band |
| hero lede | **20 / 28**, `gray-600`, `max-w-2xl` = 672 px | 672 × 84 |
| hero stat value | **Fraunces 600, 36 / 40** (`text-3xl lg:text-4xl`), `gray-900` | 4 × 200 px wide |
| hero stat label | 14 / 20, `gray-600` | `Minutes to set up` etc. |
| counter value | **Inter 700, 36 / 40 → 48 / 48** (`text-4xl lg:text-5xl`), **`primary-600`** | **not** serif — the strip and the counters are deliberately different instruments |
| counter label | 14 / 20, **500**, `gray-600` | `Businesses booking with Halfpast` |
| numbers | `.tabular-nums` everywhere (63 occurrences) | prices, times, cell figures, utilisation |

### Buttons, pills, radii, shadows

| control | shape |
| --- | --- |
| hero primary | `rounded-full bg-primary-700 px-6 py-3 text-base font-medium text-white shadow-lg shadow-primary-900/20` + arrow glyph — measured **232 × 48** |
| hero secondary | `rounded-full border border-gray-300 bg-white px-6 py-3 text-base text-gray-700`, hover `border-gray-900` — **135 × 50** |
| hero play | **48 px** `rounded-full bg-primary-700` disc + `Watch a 90-second setup` in 14/20 500 |
| header CTA | **`rounded-lg`** (8 px!) `bg-primary-600 px-5 py-2.5 text-sm font-medium` — **177 × 40**; the only 8 px CTA in the top half of the page |
| mobile-bar CTA | `rounded-full bg-primary-700 py-3 text-sm font-semibold` (2-up with a `bg-gray-100` Pricing pill) |
| plan CTAs | `rounded-lg py-3` — Solo/Venue `bg-gray-200 text-gray-900`, Studio `bg-primary-600 text-white` |
| widget confirm | `rounded-full bg-primary-700 py-3 text-sm font-medium`, `disabled:bg-gray-300 disabled:text-gray-500` |
| contact band | white `rounded-lg px-8 py-4 text-primary-700` + ghost `rounded-lg border-2 border-white/30 px-8 py-4 text-white` |
| cookie | `rounded-lg px-4 py-2 text-sm` — ghost `border-gray-300`, solid `bg-primary-600` |
| radii ladder | `rounded-md` 6 (chips, bars) · `rounded-lg` 8 (cells, slots, inputs, header CTA) · `rounded-xl` 12 (ladder cards, summary panel, service radios) · `rounded-2xl` 16 (widget card, table card, plan cards, hero image) · `rounded-full` |
| `shadow-soft` | `0 4px 16px -4px rgba(0,0,0,.102)` — the plan cards |
| `hover:shadow-soft-lg` | `0 12px 32px -8px rgba(0,0,0,.141)` — the plan cards' hover |
| hero image | `rounded-2xl shadow-2xl ring-1 ring-gray-200`, **1024 × 512**, `max-w-5xl` |
| `container` | Tailwind's `container` = **`max-width: 80rem` (1280 px)** with `padding-inline: 2rem` at `lg`; every band wraps in `container mx-auto px-4 lg:px-8` → **1280 px** at 1440, **1280 px** measured |

### Custom rules that are **not** utilities (copy them verbatim into `index.css`)

```css
.text-gradient{
  --tw-gradient-position: to right in oklab;
  background-image: linear-gradient(var(--tw-gradient-stops));
  --tw-gradient-from: #7e587a;      /* primary-600 */
  --tw-gradient-to:   #b894b5;      /* primary-400 */
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position),
    var(--tw-gradient-from) var(--tw-gradient-from-position),
    var(--tw-gradient-to) var(--tw-gradient-to-position));
  color: #0000; background-clip: text;
}
.nav-active{color:#111827;font-weight:600}          /* .dark * → #fff */
.shadow-soft{box-shadow:0 4px 16px -4px #0000001a}
.animate-hero-float{animation:8s ease-in-out infinite hero-float}
.animate-hero-float-reverse{animation:10s ease-in-out infinite reverse hero-float}
@keyframes hero-float{0%,to{transform:translate(0) scale(1)} 50%{transform:translate(0,-24px) scale(1.04)}}
.img-shimmer{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%) 0 0/200% 100%;
  animation:1.5s ease-in-out infinite shimmer}
@keyframes shimmer{0%{background-position:-200% 0} 100%{background-position:200% 0}}
```

The hero's two blobs are `h-[500px] w-[500px] rounded-full bg-accent-200/45 blur-3xl` (parallax `0.15`)
and `h-[400px] w-[400px] rounded-full bg-primary-100/40 blur-3xl` (parallax `-0.1`), inside
`absolute inset-0 -z-10 overflow-hidden` and `aria-hidden="true"`.

### Gradients and grounds

| band | reference |
| --- | --- |
| hero | `bg-gradient-to-b from-accent-50 to-white` → `#f4f7f1 → #ffffff` (dark: `gray-900 → gray-950`) |
| contact | `bg-gradient-to-br from-primary-600 to-primary-800` → `#7e587a → #563f53`, plus **two** `h-64 w-64 rounded-full bg-white/10 blur-3xl` circles (top-right, bottom-left) and a `radial-gradient(circle at 1px 1px, white 1px, transparent 0)` dot grid at `background-size:40px 40px`, `opacity-10` |
| every instrument band | solid: white or `gray-50`, `border-y border-gray-200` on the grey ones only |

### Rhythm, containers, measured heights (1440 px, cookie strip dismissed)

| # | band | height | wrapper | padding |
| ---: | --- | ---: | --- | --- |
| 0 | hero | **1409** | `container` (1280) → `max-w-4xl` centred text, then `max-w-5xl` photo | `py-20 lg:py-32` = 128 px |
| 1 | counter strip | **238** | `container`, `grid-cols-2 sm:grid-cols-4`, `gap-8` | `py-16 lg:py-20` = 80 px |
| 2 | `#book` | **983** | `container` → `max-w-3xl` header + full-width widget card (1216) | `py-20 lg:py-28` = 112 px |
| 3 | `#availability` | **826** | `container` → `max-w-3xl` header + 1216 table card | 112 px |
| 4 | `#policies` | **1122** | `container` → `max-w-3xl` header, 4-up ladder, 3-col settings | 112 px |
| 5 | `#channels` | **980** | `container` → `max-w-3xl` header + divided 12-col rows | 112 px |
| 6 | `#pricing` | **1072** | `container` → **centred** `max-w-3xl` header, `lg:grid-cols-3 gap-8` cards (384 each) | 112 px |
| 7 | `#faq` | **929** | `container` → **centred** header, `mx-auto max-w-3xl` list | 112 px |
| 8 | `#contact` | **452** | `container relative z-10` → centred `max-w-3xl`, lead `max-w-xl` | `py-20 lg:py-28` |
| — | header | **81** | `container`, `h-16 lg:h-20` | 1 px bottom border |
| — | footer | **539** | `container`, 12-col grid | `pt-16 lg:pt-24`, bottom bar `mt-16 … py-8` |

Header 81 + bands 8,011 + footer 539 = **document height 8,631 px** at 1440 × 1000;
**13,564 px** at 390 × 844.

## Reference document order

```
#preloader (fixed, removed on window load by an inline script)
#scroll-progress (fixed 2 px bar, accent-500)
header[data-header]            → logo, 8 nav labels, moon toggle, plum CTA, hamburger
nav (mobile panel, data-mobile-menu, repeats the 8 labels + full-width CTA)
main#main-content
  section 0  hero        gradient + blobs + pill + typewriter h1 + lede + 3 controls + 4 stats + photo
  section 1  counters    accent→primary-600 numerals, 4-up
  section 2  #book       3-step live widget (services | calendar + slots | summary)
  section 3  #availability  weekly table, 4 chip states, legend
  section 4  #policies   4-rung ladder + 6 settings
  section 5  #channels   4 rows, proportional bars
  section 6  #pricing    monthly/yearly switch + 3 cards
  section 7  #faq        6 exclusive accordion rows
  section 8  #contact    plum gradient + dot grid + 2 CTAs
footer                         4 columns + newsletter + bottom bar
#mobile-cta (fixed, <1024 px, two pills)
#cookie-consent (fixed, slides up 1.5 s after load)
#back-to-top (fixed 48 px disc, past 300 px)
```

## Band-by-band content (the reference's real copy — reproduce this order, paraphrase lightly)

### 0 — Hero (centred, `max-w-4xl`)

* pill: **`Live demo below — try it`** with a `animate-ping` sage dot
* `h1`: **`One diary, every way`** `<br>` + `.text-gradient` typewriter whose three phrases are
  **`people try to book you`**, **`a client wants to reach you`**, **`a slot gets filled`** (3 s cycle,
  300 ms opacity + 10 px translate)
* lede (672 px): *"Halfpast takes bookings from your site, Google, Instagram and the phone, puts them in
  one diary, and enforces the deposit and cancellation rules you actually meant to have."*
* controls: `Try the booking flow` → `#book` · `See pricing` → `#pricing` · play disc + `Watch a
  90-second setup`
* stat strip: a `border-t border-gray-200 pt-10` `grid-cols-2 sm:grid-cols-4` of **static** figures —
  `6 / Minutes to set up`, `31 / Percent fewer no-shows`, `4 / Booking channels`, `0 / Commission per
  booking` (serif 36 px, **no animation, no counters**)
* framed photo `max-w-5xl`, 1024 × 512, `rounded-2xl shadow-2xl ring-1 ring-gray-200`

### 1 — Counter strip (238 px, `bg-gray-50`, `border-y`)

Four **animated** counters, all `primary-600`, Inter 700, 36 → 48 px, labels 14/20 500:

| `data-counter` | rendered | label |
| --- | --- | --- |
| `9400` | **9400** (integer rounding — **no thousands separator**, the code does `Math.round`) | Businesses booking with Halfpast |
| `31` | **31** | Percent fewer no-shows, median |
| `6` | **6** | Minutes to first live booking |
| `0` | **0** (a zero never animates) | Percent commission, ever |

⚠️ **Two different number blocks on one page.** The hero's `6 / 31 / 4 / 0` are static serif; this
band's `9400 / 31 / 6 / 0` are animated sans. The shared values are *different claims* with *different
labels*. Wiring the hero strip as counters, or merging the two blocks, is the obvious wrong
simplification.

### 2 — `#book` — the live widget (`bg-white`)

Header: kicker `Try it`, h2 `This is the widget your clients see`, lead *"Not a screenshot — the real
thing, wired up. Pick a service, a day and a time and watch the summary fill in. It is the same
component that goes on your site, in your colours."*

Card: `rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden` → inner `grid lg:grid-cols-12`
with **three `lg:col-span-4` columns**, `p-6` each, separated by `border-b lg:border-b-0 lg:border-r`.

| step | content |
| --- | --- |
| **1** `Choose a service` | `fieldset` of 3 `label` rows: `Cut and finish` **£42** / `45 min` (checked by default); `Full colour` **£128** / `2 hr 30 min` / note *`Patch test required 48 hours before`*; `Consultation` **Free** / `15 min` / note *`Deposit not taken on free appointments`*. Each label is `rounded-xl border p-4` with `has-[:checked]:border-primary-600 has-[:checked]:bg-primary-50`; the radio is a native `input[type=radio] accent-primary-700` with `name="hp-service"` |
| **2** `Pick a day` | month label **`October 2026`** in Fraunces 18/28 600; a `<table class="w-full border-collapse">` with `caption` **`Availability in October 2026`** (`.sr-only`) and seven `text-[0.65rem] uppercase tracking-wider text-gray-400` day letters (`M T W T F S S`, each with an `.sr-only` full name). **31 cells**: 3 leading blanks (October 2026 starts Thursday), **21 bookable `<button data-day>`** (`h-9 w-full rounded-lg`, hover `bg-primary-100`, `aria-pressed:bg-primary-700 aria-pressed:font-semibold aria-pressed:text-white`) and **10 `span`s** (`title="Fully booked"`, `text-gray-300`, **no pointer cursor, not focusable** — days 2, 4, 8, 11, 13, 18, 20, 25, 26, 30). **Day 14 is `aria-pressed="true"` on load.** Caption line under the grid: *`Greyed days are fully booked. 21 of 31 days still have space.`* |
| **3** `Pick a time` | `grid grid-cols-3 gap-2`, **9 slots**: `09:00`, `09:45`(**disabled**, `title="Already booked"`), `10:30`, `11:15`(**accent-tinted**, `title="Last slot with this stylist"`), `13:00`, `13:45`(**disabled**), `14:30`, `15:15`(**accent-tinted**, `title="Last slot before close"`), `16:00`(**disabled**). Available slots: `rounded-lg border border-gray-200 text-gray-700`; disabled: `border-dashed text-gray-300 cursor-not-allowed`; scarce: `border-accent-300 bg-accent-50 text-accent-800`; selected: `border-primary-700 bg-primary-700 font-semibold text-white` |
| summary | `mt-6 rounded-xl bg-gray-50 p-5` — `h4 Your booking`, a `dl` of **Service / When / Total** (`—`, `Pick a day and time`, `—` before any choice; `Full colour`, `1 October 2026, 09:00`, `£128` after), a **disabled** `Confirm booking` pill (grey) that enables on the third choice, and a status line that reads **`No card needed to hold this slot.`** → **`This slot is held for 10 minutes.`** when complete, and **`Demo only — no booking was made.`** after pressing confirm |

Footer note under the card: *"Nothing here is faked with images. Every state in the calendar and the
slot grid is a real element with a real disabled or selected state, which is why it also works with a
keyboard and a screen reader."*

### 3 — `#availability` — the manager's diary (`bg-gray-50`)

kicker `The diary`, h2 `Everyone's week on one screen`. Card: `overflow-x-auto rounded-2xl border
border-gray-200 bg-white p-5` around `<table class="w-full min-w-[46rem] border-separate
border-spacing-1">` — caption **`Weekly availability by team member`** (`.sr-only`).

Rows (4) and their seven cells, each `h-11 rounded-md text-xs font-medium` with a `title` like
`Nadia Farouk, Wed — Held, unconfirmed` and an `.sr-only` state word:

| row | role | Mon | Tue | Wed | Thu | Fri | Sat | Sun | utilisation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---: |
| Nadia Farouk | Senior stylist | 6/6 Booked | 6/6 Booked | 4/6 Held | 6/6 Booked | 6/6 Booked | 2/6 Open | — Not working | **83%** |
| Tomás Herrera | Colour specialist | — | 4/4 Booked | 4/4 Booked | 1/4 Open | 4/4 Booked | 4/4 Booked | — | **85%** |
| Ivy Chen | Stylist | 3/7 Open | 5/7 Held | 7/7 Booked | 7/7 Booked | 4/7 Open | 7/7 Booked | — | **79%** |
| Treatment room | Bookable resource | 2/8 Open | 3/8 Open | 8/8 Booked | 6/8 Held | 8/8 Booked | 8/8 Booked | — | **73%** |

Four chip states (the legend under the table repeats them as `h-4 w-6 rounded` swatches):

| state | classes |
| --- | --- |
| Booked | `bg-primary-700 text-white` |
| Held, unconfirmed | `bg-accent-100 text-accent-800` |
| Open | `bg-white ring-1 ring-inset ring-gray-200 text-gray-400` |
| Not working | `bg-gray-100 text-gray-400 [background-image:repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(0,0,0,0.05)_4px,rgba(0,0,0,0.05)_8px)]` and **no figure** |

Closing note: *"Held slots expire after ten minutes and drop back to open without anyone touching them.
A resource — a room, a chair, a piece of equipment — books exactly like a person does."*

### 4 — `#policies` — the ladder (`bg-white`)

kicker `Money`, h2 `The rules that decide whether you get paid`. Sub-label
`Cancellation ladder` (12 px uppercase, 1.92 px tracking).

`<ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">`, four `rounded-xl border border-gray-200 p-6`
cards, each a pill + Fraunces `h4` 20/28 + 14/20 body:

| pill (colour) | rung | body gist |
| --- | --- | --- |
| `Full refund` (`accent-100` / `accent-900`) | **More than 48 hours** | client cancels or reschedules themselves; the slot reopens and the waitlist is notified |
| `Deposit kept` (`primary-100` / `primary-900`) | **48 to 24 hours** | still self-service, deposit retained; rescheduling once inside the window is free |
| `50% of service` (`primary-100` / `primary-900`) | **Under 24 hours** | cancellation goes through the business; the client gets a reason, not a dead end |
| `Full price` (`gray-900` / white — `dark:bg-gray-100 dark:text-gray-900`) | **No-show** | charged to the card on file after a two-hour grace period, with a receipt and the policy text |

Then sub-label `What else you can set` and a `<dl class="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2
lg:grid-cols-3">` of six definition blocks, each `border-t border-gray-200 pt-4`, `dt` a
`justify-between` row of **label (14/20 500 `gray-900`)** and **value (14/20 600 `tabular-nums`
`accent-700`)**, `dd` 14/20 `gray-600`:

`Deposit 20%` · `Booking window 60 days` · `Lead time 2 hr` · `Buffer after 15 min` · `Waitlist On` ·
`Reminders 48 & 3 hr`.

Closing note: the 31 % figure *"is the median across accounts that turned on deposits and the
three-hour SMS reminder together. Accounts that turned on only one of the two saw about a third of
that."* — that candour is the design's voice; keep it.

### 5 — `#channels` — four ways in (`bg-gray-50`)

kicker `Where bookings come from`, h2 `Four ways in, one diary`. `<ul class="mt-12 divide-y
divide-gray-200 border-t border-gray-200">`, each `<li class="grid gap-4 py-6 lg:grid-cols-12
lg:items-center lg:gap-8">`: name+share (`lg:col-span-3`), bar (`lg:col-span-4`), blurb
(`lg:col-span-3`), setup (`lg:col-span-2 lg:text-right`).

| name | share | **fill %** (scaled to the largest, not the total) | blurb | setup |
| --- | --- | ---: | --- | --- |
| Your website | 44% of bookings | **100** | the embedded widget, same one above, works on any site | `One script tag` |
| Google | 27% of bookings | **61** | Reserve with Google on Maps and Search | `Verify, then a day` |
| Instagram | 18% of bookings | **41** | booking link in bio and stories, service preselected | `Two minutes` |
| Phone and walk-in | 11% of bookings | **25** | staff book into the same diary from the desk tablet | `Nothing to do` |

Bar: `<div class="h-8 overflow-hidden rounded-md bg-gray-100" role="img" aria-label="Your website: 44
percent of bookings">` with `<div class="h-full rounded-md bg-primary-700" style="width:100%">`. The
`Setup:` word is `font-medium text-accent-700`, its value `text-gray-500`.

Two footnotes: *"Bars are scaled against the largest channel, not the total. The shares add to 100%."*
and *"Phone bookings do not disappear when you go online — they fall to about a tenth and become the
awkward ones, which is exactly the share you want a human answering."*

### 6 — `#pricing` — three plans, **centred** (`bg-white`)

kicker `Pricing` (lavender, sentence case), h2 **Inter 700** `Per calendar, per month, no
commission`; lead *"We do not take a cut of your bookings. A busy month costs the same as a quiet one,
which is the opposite of how most of this market prices."*

Switch: `Monthly` (14/20 500) · `h-7 w-14 rounded-full bg-gray-200` with a `h-5 w-5` white knob
(`translateX(28px)` when on) · `Yearly` + a `bg-green-100 text-green-700` pill **`Save 20%`**.
`role="switch"`, `aria-checked`, `aria-label="Toggle annual billing"`.

`grid gap-8 lg:grid-cols-3`, cards `rounded-2xl p-8 shadow-soft hover:shadow-soft-lg`, price a
`text-5xl font-bold` with `/month` beside it, then a `data-billing-note` line and a `ul` of features
with plum checks (✕ for the two unshipped ones):

| plan | monthly | yearly (/mo) | note | features | CTA |
| --- | ---: | ---: | --- | --- | --- |
| **Solo** — *one person, one diary, everything switched on* | **$12** | **$10** | `Billed monthly` / `Billed annually ($120/year)` | 4 checks + 2 **✕**: `Google and Instagram booking`, `Bookable resources and rooms` | grey `Start free for 30 days` |
| **Studio** — *up to eight calendars, shared resources, one bill* | **$39** | **$32** | `$384/year` | 6 checks | plum `Start free for 30 days` |
| **Venue** — *unlimited calendars, multiple sites, real support* | **$89** | **$74** | `$888/year` | 6 checks (ends `Migration from your current system`) | grey `Talk to us` |

The middle card is the only `bg-white … ring-2 ring-primary-600` card (the other two are `bg-gray-50`)
and the only one with the **`Most Popular`** pill, `absolute -top-4 left-1/2 -translate-x-1/2
rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white`, overlapping the card's top edge.

### 7 — `#faq` — six questions, **centred** (`bg-white`, no border)

kicker `Questions`, h2 **Inter 700** `What people ask before switching`, lead *"Including the ones that
are awkward for us. If yours is not here, the contact page reaches a person."* List
`mx-auto mt-16 max-w-3xl` → `divide-y divide-gray-200`, each row `py-6`:

1. `Do you take a percentage of my bookings?` — no, and not planning to
2. `What happens to my existing bookings if I switch?` — imported by CSV/system, historical as read-only archive
3. `Can a client book without creating an account?` — yes, and it is the default
4. `Does the deposit actually reduce no-shows?` — a little alone, about a third fewer with the 3-hour SMS
5. `What is the worst thing about Halfpast?` — class/group booking is newer and it shows
6. `What happens to my data if I leave?` — CSV export any time, page live for 30 days then redirects

Trigger: `flex w-full items-center justify-between text-left`, question `text-lg font-semibold`, a
**32 px `bg-gray-100` disc** holding a plus glyph (`M12 6v12M6 12h12`) that rotates **45°** when open.
Panel: `overflow-hidden transition-all duration-300` with inline `max-height:0; opacity:0` → `scrollHeight`
+ opacity 1. **Exclusive:** opening one closes the others.

### 8 — `#contact` — the closing band (plum gradient)

h2 **Inter 700 48 px** `Set it up during one coffee`, lead `text-lg text-primary-100 max-w-xl`
*"Thirty days free, no card, and if you are moving from something else we will do the import for
you."*, then two CTAs: white `Start free for 30 days` (arrow) and the ghost `See pricing` with a
**phone** glyph (yes — a phone glyph on a pricing link; reproduce or swap to an arrow, but do not
silently keep a mismatched icon without noting it).

### Footer (539 px, `bg-gray-900`)

`grid gap-12 lg:grid-cols-12 lg:gap-8`:

* **brand** (`lg:col-span-4`): logo-light, the 4-line positioning paragraph, three `rounded-lg
  bg-gray-800 p-2.5` social tiles (X, Instagram, LinkedIn — the reference's three are
  `href="#"`), `hello@halfpast.app` in `text-sm text-gray-600`, and a last line
  **`No commission on your bookings. Ever.`**
* **Product** / **Company** / **Help** (`sm:grid-cols-3 lg:col-span-5`): headings 14/20 600 uppercase
  0.7 px track white; links 16/24 `gray-400` → white on hover. Product: `Booking flow`, `Availability`,
  `Policies and deposits`, `Booking channels`. Company: `About`, `Pricing`, `Notes`, `Contact`. Help:
  `Questions`, `Switching over`, `Privacy`, `Terms`.
* **Stay Updated** (`lg:col-span-3`): paragraph + `mt-4` form with an `bg-gray-800 border-gray-700`
  email field and a `bg-primary-600` **Subscribe** button.
* bottom bar: `mt-16 border-t border-gray-800 py-8`, `© 2026 Halfpast. All rights reserved.` plus
  `Privacy Policy`, `Terms of Service`, `Style Guide` (13 px, `text-sm`, `gray-500`).

## Behaviour the recreation must reproduce

The shared kit (`Base…DqpAEKJ6.js`, 17,669 B) mounts **21 initializers** on `astro:page-load`; the
landing page uses **17** of them:

| behaviour | trigger | measured detail |
| --- | --- | --- |
| dark toggle | `[data-dark-toggle]` | toggles `.dark` on `<html>`, persists `theme` — **dropped in the recreation, see deviations** |
| mobile menu | `[data-mobile-toggle]` | toggles `hidden` + `aria-expanded`, swaps hamburger ↔ close glyph |
| header shadow | scroll | `shadow-lg` past **50 px** |
| reveal | `[data-animate]` (59 nodes) | only arms elements whose `top > innerHeight × 0.8` at load; `opacity 0→1`, `translateY(20px→0)`, 600 ms, `data-delay` in ms |
| scroll-spy | `[data-nav-link]` | `rootMargin: -20% 0 -70% 0`; **only the four ids that exist** (`book`, `availability`, `policies`, `channels`) ever activate — the other four labels carry `data-nav-link="/pricing"` etc., which `getElementById` never resolves |
| smooth anchors | `a[href^="#"]:not([href="#"])` | scrolls to `top − (header.offsetHeight + 20)`, then `history.pushState` |
| billing switch | `[data-billing-toggle]` | knob `translateX(28px)`, pill `gray-200 → primary-600`, label colours swap, prices fade out/in over 150 ms and swap text, `data-show-monthly`/`-yearly` notes toggle |
| FAQ accordion | `[data-faq-toggle]` | exclusive; `max-height = scrollHeight`, icon `rotate(45deg)` |
| cookie strip | `#cookie-consent` | slides up after **1.5 s** unless `cookie-consent` is set; Accept → `accepted`, Decline → `essential`; 300 ms slide-out then removal |
| counters | `[data-counter]` (4) | `IntersectionObserver` `threshold .5`, 2 s **ease-out cubic**, integer rounding, no suffix logic used here |
| back to top | `#back-to-top` | past **300 px**: `opacity 1`, `translateY(0)` |
| scroll progress | `#scroll-progress` | `width = scrollY / (scrollHeight − innerHeight)` %, `accent-500` |
| video modal | `[data-video-modal]` (1, hero) | builds a full-screen overlay with a 16:9 iframe + autoplay, `Escape`/backdrop closes, locks `body` scroll |
| typewriter | `[data-typewriter]` (1) | cycles `["people try to book you","a client wants to reach you","a slot gets filled"]`, 3 s, 300 ms fade + 10 px lift |
| booking flow | `[data-booking-flow]` (1) | reads the checked `[data-service]` (`value`, `data-price`, `data-duration`), the pressed `[data-day]`, the pressed `[data-slot]`; writes summary + status; enables confirm only when all three exist; confirm press writes `Demo only — no booking was made.` |
| parallax | `[data-parallax]` (2) | `translateY(scrollY × factor)`, `0.15` / `-0.1`, only while in view |
| image shimmer | `img[loading="lazy"]` | `img-shimmer` class until `load` |

**Present but unused on this page:** `data-carousel*` (0), `data-lightbox` (0), `data-blog-*` (0),
`data-accordion-toggle` (0 — the mobile panel's accordion branch runs on an empty list),
`data-validate` (0 — **so the footer's `data-newsletter-form` is bound to nothing at all**, even though
the kit has a full validation-toast pipeline).

Inline scripts in the document: `applyTheme()` **442 B**, a JSON-LD block **361 B**, preloader teardown
**358 B** (`window.load` → `opacity 0` → remove after 300 ms).

## Data-attribute inventory (measured on the live page)

| attribute | count | where |
| --- | ---: | --- |
| `data-animate` | 59 | every band's header/cards |
| `data-delay` | 47 | the stagger, in ms (0–500) |
| `data-day` | 21 | the bookable calendar days |
| `data-slot` | 6 | the six **available** slots (the three booked ones carry no `data-slot`) |
| `data-faq-toggle` / `data-faq-icon` | 6 / 6 | the FAQ rows |
| `data-service` | 3 | the service radios |
| `data-nav-link` | 8 | 4 resolve to ids, 4 to route strings |
| `data-counter` | 4 | the counter strip |
| `data-price-monthly` / `data-price-yearly` | 3 / 3 | the plan prices |
| `data-show-monthly` / `data-show-yearly` | 3 / 3 | the billing notes' two spans |
| `data-billing-note` | 3 | the notes' wrapper |
| `data-billing-toggle` / `-knob` / `-label` | 1 / 1 / 2 | the switch |
| `data-summary-service` / `-when` / `-total` | 1 each | the summary |
| `data-book-submit` / `data-book-status` / `data-booking-flow` | 1 each | the widget |
| `data-month-label` | 1 | `October 2026` |
| `data-parallax` | 2 | the hero blobs |
| `data-typewriter` | 1 | the `h1` span |
| `data-video-modal` | 1 | the hero play control |
| `data-dark-toggle` / `data-mobile-toggle` / `data-mobile-menu` / `data-header` | 1 each | the chrome |
| `data-cookie-accept` / `data-cookie-decline` | 1 each | the strip |
| `data-newsletter-form` | 1 | the footer form (**unbound**) |

## Link and destination census (LT axis, measured 2026-10-25)

The live landing page holds **49 anchors** over **17 distinct `href` values**:

| count | href | kind |
| ---: | --- | --- |
| 7 | `/theme/halfpast/contact` | live → **308** → `/contact/` **200** (35,329 B) — header CTA, hero CTA, both contact CTAs, plan CTAs, mobile bar, footer |
| 7 | `/theme/halfpast/#book` (6) + `#book` (1) | live fragment — header, hero, mobile bar, footer |
| 6 | `/theme/halfpast/pricing` | live → 308 → 200 (48,909 B) |
| 4 | `/theme/halfpast/blog` | live → 308 → 200 (42,678 B) |
| 3 | `/theme/halfpast/#availability` | live fragment |
| 3 | `/theme/halfpast/#policies` | live fragment |
| 3 | `/theme/halfpast/#channels` | live fragment |
| 3 | `/theme/halfpast/about` | live → 308 → 200 (36,004 B) |
| 3 | `#` | **dead** — the three footer social tiles (X, Instagram, LinkedIn) |
| 2 | `/theme/halfpast/` | the two wordmarks (header logo, footer logo) — self-links |
| 2 | `/theme/halfpast/privacy` | live → 308 → 200 (37,066 B) |
| 2 | `/theme/halfpast/terms` | live → 308 → 200 (35,810 B) |
| 1 | `#main-content` | skip link → exists |
| 1 | `mailto:hello@halfpast.app` | sample mailbox |
| 1 | `/theme/halfpast/#faq` | live fragment (footer `Questions`) |
| 1 | `/theme/halfpast/elements` | live → 308 → 200 (55,615 B) — the footer's `Style Guide` |

**So: 3 dead `#`, 2 self-links, 7 live inner routes, and no broken fragments** (every `#id` resolves;
the reverse is not true — the nav carries **four route strings** in `data-nav-link`, which is a
scroll-spy defect, not a link defect).

**Inner-page inventory** (all live after the 308; the recreation folds their argument into one page):

| page | bytes | `<title>` | `<h1>` | `h2`s |
| --- | ---: | --- | --- | --- |
| `about/` | 36,004 | About Halfpast \| Halfpast | About Halfpast | The diary is the business · Three things we will not do · Who you actually get · Thirty days, no card |
| `blog/` | 42,678 | Blog \| Halfpast | Insights & Updates | Stay in the Loop |
| `pricing/` | 48,909 | Pricing \| Halfpast | Pricing | Per calendar, per month, no commission · What people ask before switching · Thirty days free, no card |
| `contact/` | 35,329 | Contact \| Halfpast | Contact | Get in touch · Straight to the right person |
| `privacy/` | 37,066 | Privacy Policy \| Halfpast | Privacy Policy | 1. Information We Collect … 6. Your Rights |
| `terms/` | 35,810 | Terms of Service \| Halfpast | Terms of Service | 1. Acceptance of Terms … 6. Prohibited Conduct |
| `elements/` | 55,615 | Elements \| Halfpast | Elements | Typography · Buttons · Badges & Tags · Alerts / Notices · Cards … |

The **only real form** in the reference is on `/contact/`:
`<form class="mt-8 space-y-6" data-validate data-contact-form>` with `Full Name` (text, required),
`Email` (email, required), `Subject` (text, optional) and a `textarea` — i.e. the landing page's
`#contact` band is **CTAs only**; adding an inline form there would be a deviation.

## Class census (no phantom-class delta)

**718 `class` attributes**, **422 distinct class tokens**, and **every token compiles** to a selector in
`Base.CEXwd6Yt.css` (checked programmatically with Tailwind's escape rules, variants included) — **0
phantom classes**. The whole design is therefore expressible in Tailwind 4 utilities plus the custom
rules in §Design tokens; anything you cannot map onto those 422 tokens is invented.

## Screenshot analysis (`halfpast-template.jpg`, 2400×1892 JPEG)

A **macOS browser window on a pale sage desk ground**: three traffic lights, a grey rounded title bar,
a soft drop shadow, the page framed from the sticky header to roughly the top third of the hero photo.
Visible and useful: the wordmark + clock mark, the 8-label nav, the plum CTA, the sage pill with its
live dot, the **two-tone headline with the plum→pale-plum gradient on the second line**, the CTA pair
with a filled disc for the video, the serif stat strip, and the photograph's top edge.

**Not visible, and therefore not corroborated by the shot:** every instrument band, the footer, all
interactive states. Do **not** infer colours from the shot's AVIF-compressed sage ground, and do not
adopt the marketing framing (window chrome, desk ground, drop shadow) into the app.

## Requirements

### Requirement 1: Page chrome (skip link, scroll progress, back to top, cookie strip)

The app SHALL render a skip link as the first focusable element, a 2 px `accent-500` scroll-progress bar
fixed at the top, a 48 px `bg-primary-600` back-to-top disc at `bottom-6 right-6`, and a cookie strip
that slides up 1.5 s after mount and dismisses into component state. It SHALL NOT paint a preloader and
SHALL NOT show a flash of white overlay.

#### Scenario: Visitor loads the page

- **GIVEN** the page is mounting
- **WHEN** the first paint happens
- **THEN** the hero is visible immediately (no `#preloader` overlay, unlike the reference)
- **AND** nothing fixed covers the hero except the sticky header
- **AND** the cookie strip is still off-screen (`translateY(100%)`)

#### Scenario: Cookie strip lifecycle

- **GIVEN** the strip is off-screen
- **WHEN** 1.5 s have elapsed
- **THEN** it slides up over 300 ms with `role="dialog"` and `aria-label="Cookie consent"`
- **AND** pressing `Accept All` or `Decline` slides it back down and unmounts it
- **AND** it does not return in the same session

#### Scenario: Reading progress and back to top

- **GIVEN** the visitor is at the top
- **WHEN** they scroll
- **THEN** the progress bar's width is `scrollY / (scrollHeight − innerHeight)` % of the viewport
- **AND** past 300 px the back-to-top disc fades in and returns the page to `top: 0` when pressed
- **AND** past 50 px the header gains `shadow-lg`

### Requirement 2: Header, mobile disclosure and the scroll-spy quirk

The app SHALL render a sticky header (`h-16 lg:h-20`, `bg-white/80 backdrop-blur-lg`, 1 px
`gray-200` bottom border) with the wordmark, **six** in-page nav labels after the single-page fold
(Requirement 13), a solid plum CTA `rounded-lg` (8 px) and, below 1024 px, a hamburger that opens a
panel repeating the labels plus a full-width CTA.

#### Scenario: Desktop header

- **GIVEN** the viewport is at least 1024 px
- **WHEN** the header renders
- **THEN** it measures **80 px** plus a 1 px border (81 px total) with a **1280 px** inner container
- **AND** the labels are 14 / 20, weight 500, `gray-600`, separated by a 32 px gap
- **AND** the CTA is `rounded-lg bg-primary-600 px-5 py-2.5 text-sm` and measures 177 × 40
- **AND** the hamburger is not rendered

#### Scenario: Mobile disclosure

- **GIVEN** the viewport is 390 px
- **WHEN** the visitor taps the hamburger
- **THEN** the header measures **65 px** and the panel opens with `block py-3` 16 px labels
- **AND** `aria-expanded` flips to `"true"` and the glyph swaps hamburger ↔ close
- **AND** the panel closes on a second tap and on any label press

#### Scenario: Scroll-spy highlights only what exists

- **GIVEN** the page is scrolled into `#availability`
- **WHEN** the spy's `rootMargin` (`-20% 0 -70% 0`) crosses the section
- **THEN** only `Availability` gains `nav-active` (dark ink, weight 600 — white in dark mode, which the
  recreation does not ship)
- **AND** the labels that point at bands which do not exist never activate, because they are anchors
  and not route strings

### Requirement 3: Hero

The app SHALL render a centred hero on `from-accent-50 to-white` with two `blur-3xl` floating blobs
behind it, the sage live pill, the two-line `h1` whose second line is a 3-phrase typewriter rendered
with `.text-gradient`, a 20/28 lede, three controls, a **static** four-figure serif strip, and a
framed 2:1 photograph.

#### Scenario: Desktop hero

- **GIVEN** the viewport is 1440 px
- **WHEN** the hero renders
- **THEN** the text column is 896 px (`max-w-4xl`) and the photo column 1024 px (`max-w-5xl`)
- **AND** the `h1` resolves to **Fraunces 600, 60 px / 60 px, −1.5 px** in `gray-900`
- **AND** the second line is painted by `background-clip: text` from `#7e587a` to `#b894b5`
- **AND** the primary CTA is a 48 px-tall `rounded-full` plum pill measuring 232 × 48
- **AND** the band measures **1409 px** tall at `py-32`

#### Scenario: The headline cycles

- **GIVEN** the hero is on screen
- **WHEN** 3 s elapse
- **THEN** the second line fades out over 300 ms while dropping 10 px
- **AND** it is replaced by the next phrase in the order `people try to book you` → `a client wants to
  reach you` → `a slot gets filled` → (repeat)
- **AND** the first line `One diary, every way` never changes

#### Scenario: The stat strip is not a counter

- **GIVEN** the hero is on screen
- **WHEN** it is observed for five seconds
- **THEN** the figures read `6`, `31`, `4`, `0` and never animate
- **AND** they are Fraunces 600 at 36 px, unlike the animated Inter 700 counters below

#### Scenario: Mobile hero

- **GIVEN** the viewport is 390 px
- **WHEN** the hero renders
- **THEN** the `h1` is **36 / 40 / −0.9** and the lede 20 / 28
- **AND** the three controls stack vertically at full column width
- **AND** the stat strip is `grid-cols-2` and the photo is 358 px wide

#### Scenario: The video control

- **GIVEN** the visitor presses `Watch a 90-second setup`
- **WHEN** the modal opens
- **THEN** it is a full-screen `bg-black/80 backdrop-blur-sm` overlay with a 16:9 player, closed by the
  × button, a backdrop press or `Escape`, and `body` scroll is locked while open
- **AND** the player's source is an authored sample, **never** the reference's `dQw4w9WgXcQ`

### Requirement 4: Counter strip

The app SHALL render a `border-y` `bg-gray-50` band with four counters in `primary-600`, Inter 700,
`text-4xl lg:text-5xl`, whose labels are 14 / 20 weight 500 `gray-600`.

#### Scenario: Counters enter the viewport

- **GIVEN** the band is below the fold
- **WHEN** it crosses 50 % visibility
- **THEN** each figure animates from 0 to its target over **2 s** with an ease-out cubic curve
- **AND** the figures land on `9400`, `31`, `6`, `0` — the first **without** a thousands separator
- **AND** the band measures **238 px** tall

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the band enters the viewport
- **THEN** the final figures are rendered immediately with no animation and no flash of `0`

### Requirement 5: The live booking widget (`#book`)

The app SHALL render a 1216 px `rounded-2xl` card split into three `lg:col-span-4` columns —
services, calendar + slots, summary — with every state held in React state and every control operable
by keyboard.

#### Scenario: Desktop widget

- **GIVEN** the viewport is 1440 px
- **WHEN** `#book` renders
- **THEN** the band measures **983 px** with a 768 px (`max-w-3xl`) left-aligned header
- **AND** the card is 1216 px wide, 493 px tall, `rounded-2xl border border-gray-200 shadow-sm`
- **AND** the three columns are separated by `border-r` and each padded `p-6`

#### Scenario: Initial state

- **GIVEN** the page has just loaded
- **WHEN** the widget is inspected
- **THEN** `Cut and finish` is the checked radio and its label carries the plum border + `bg-primary-50`
- **AND** day **14** is `aria-pressed="true"` in the October 2026 table
- **AND** no slot is selected, the summary reads `—` / `14 October 2026 — pick a time` / `—`
- **AND** `Confirm booking` is `disabled` with `bg-gray-300 text-gray-500`
- **AND** the status line reads `No card needed to hold this slot.`

#### Scenario: Choosing a service, a day and a time

- **GIVEN** the visitor selects `Full colour`
- **WHEN** they then press day `1` and slot `09:00`
- **THEN** the summary reads `Full colour` / `1 October 2026, 09:00` / `£128`
- **AND** the confirm button enables (`bg-primary-700`) and the status becomes
  `This slot is held for 10 minutes.`
- **AND** exactly one day and one slot carry `aria-pressed="true"` at any moment

#### Scenario: Unbookable states are unpressable

- **GIVEN** the calendar is rendered
- **WHEN** a keyboard user tabs through it
- **THEN** the 10 fully-booked days are **not** in the tab order (they are `span`s, `title="Fully
  booked"`)
- **AND** the 3 booked slots are `disabled` buttons with a **dashed** border and `cursor-not-allowed`
- **AND** the 2 scarce slots are accent-tinted (`border-accent-300 bg-accent-50 text-accent-800`) and
  carry their `title` (`Last slot with this stylist`, `Last slot before close`)

#### Scenario: Confirming

- **GIVEN** all three choices exist
- **WHEN** the visitor presses `Confirm booking`
- **THEN** the status line becomes `Demo only — no booking was made.`
- **AND** no network request is made and no state is persisted

#### Scenario: Mobile widget

- **GIVEN** the viewport is 390 px
- **WHEN** the widget renders
- **THEN** the three columns stack into one 358 px column with `border-b` separators
- **AND** the slot grid stays `grid-cols-3` and the day table keeps all 7 columns at 47 × 36 cells

### Requirement 6: The weekly diary (`#availability`)

The app SHALL render a 4-row × 7-day table inside a horizontally scrollable card
(`min-w-[46rem]`), with four visually distinct chip states, a legend, and a right-aligned utilisation
column.

#### Scenario: Desktop grid

- **GIVEN** the viewport is 1280 px or wider
- **WHEN** `#availability` renders
- **THEN** the band measures **826 px** and the card 1216 px
- **AND** the table uses `border-separate border-spacing-1` so the chips read as separate tiles
- **AND** each chip is 44 px tall, `rounded-md`, 12 px medium, and carries a `title` naming person, day
  and state plus an `.sr-only` state word

#### Scenario: The four chip states are distinguishable without colour alone

- **GIVEN** the four states are on screen
- **WHEN** they are compared
- **THEN** `Booked` is solid plum with a white figure, `Held, unconfirmed` pale sage, `Open` white with a
  1 px inset ring, and `Not working` a **45° hatch with no figure**
- **AND** the legend under the table shows all four swatches with their labels
- **AND** the utilisation column reads `83%`, `85%`, `79%`, `73%` in 14 px semibold `tabular-nums`

#### Scenario: Mobile grid

- **GIVEN** the viewport is 390 px
- **WHEN** the table renders
- **THEN** the card scrolls horizontally (its `scrollWidth` exceeds `clientWidth`)
- **AND** no chip is clipped to illegible width

### Requirement 7: The cancellation ladder and settings (`#policies`)

The app SHALL render four bordered rungs whose pills escalate in severity, followed by six settings rows.

#### Scenario: Desktop ladder

- **GIVEN** the viewport is 1024 px or wider
- **WHEN** `#policies` renders
- **THEN** the four cards sit in one row (`lg:grid-cols-4`, 292 px each, `gap-4`), `rounded-xl border p-6`
- **AND** the pills read `Full refund` (sage), `Deposit kept`, `50% of service` (both plum) and
  `Full price` (**near-black with white text**)
- **AND** each rung title is Fraunces 600 at 20 / 28

#### Scenario: The settings block

- **GIVEN** the settings render
- **WHEN** measured
- **THEN** six `border-t` rows sit in `sm:grid-cols-2 lg:grid-cols-3` with `gap-x-10 gap-y-6`
- **AND** each row pairs a 14 px medium label with a 14 px semibold `accent-700` value
  (`20%`, `60 days`, `2 hr`, `15 min`, `On`, `48 & 3 hr`)
- **AND** the values are `tabular-nums`

### Requirement 8: The four channels (`#channels`)

The app SHALL render four divided rows whose bars are proportional to the **largest** channel, not to
the total.

#### Scenario: Desktop rows

- **GIVEN** the viewport is 1024 px or wider
- **WHEN** `#channels` renders
- **THEN** each row is a `lg:grid-cols-12` grid of name+share (3), bar (4) and blurb (3) plus setup (2)
- **AND** the bars fill **100 %**, **61 %**, **41 %**, **25 %** for 44 / 27 / 18 / 11 %
- **AND** each bar is a 32 px `rounded-md bg-gray-100` track with a `bg-primary-700` fill and
  `role="img"` + an `aria-label` of `"<channel>: <n> percent of bookings"`

#### Scenario: The setup column

- **GIVEN** a row is inspected
- **WHEN** the setup text is read
- **THEN** it reads `Setup:` in `accent-700` medium followed by the value in `gray-500`
- **AND** it is right-aligned from `lg` up

#### Scenario: Mobile rows

- **GIVEN** the viewport is 390 px
- **WHEN** the rows render
- **THEN** each row stacks (name, share, bar, blurb, setup) with no horizontal overflow

### Requirement 9: Pricing (`#pricing`)

The app SHALL render a `Monthly / Yearly` switch and three plan cards, with the middle plan ringed,
named `Most Popular`, and priced from data attributes.

#### Scenario: Monthly state

- **GIVEN** the page has loaded
- **WHEN** `#pricing` renders
- **THEN** the prices read **$12 / $39 / $89** and each note reads `Billed monthly`
- **AND** the switch is `aria-checked="false"` with the knob at `translateX(0)` on `bg-gray-200`

#### Scenario: Yearly state

- **GIVEN** the switch is off
- **WHEN** the visitor presses it
- **THEN** `aria-checked` becomes `"true"`, the knob slides `28px`, and the pill turns `primary-600`
- **AND** the prices fade to **$10 / $32 / $74** (over 150 ms) and the notes swap to
  `Billed annually ($120/year)` / `($384/year)` / `($888/year)`
- **AND** pressing it again restores the monthly values exactly

#### Scenario: The three cards

- **GIVEN** the cards render
- **WHEN** compared
- **THEN** Solo and Venue are `bg-gray-50` and Studio is `bg-white ring-2 ring-primary-600` with the
  `Most Popular` pill overlapping its top edge by 16 px
- **AND** the plan names are **Inter** 600 at 20 px (not Fraunces)
- **AND** the prices are 48 px weight 700 `tabular-nums`
- **AND** Solo's two unshipped features carry grey ✕ glyphs while every other feature carries a plum ✓
- **AND** the section's `h2` is **Inter 700**, centred, unlike the four Fraunces left-aligned headings above

### Requirement 10: FAQ accordion (`#faq`)

The app SHALL render six questions as an exclusive accordion in a centred 768 px column, each row
separated by a hairline, with a plus glyph that becomes a × when open.

#### Scenario: Opening a question

- **GIVEN** every panel is closed (`max-height: 0; opacity: 0`)
- **WHEN** the visitor presses a question
- **THEN** that panel animates to its `scrollHeight` with opacity 1 over 300 ms
- **AND** its disc's glyph rotates **45°**
- **AND** the first row's panel measures **88 px** in the reference

#### Scenario: Exclusivity

- **GIVEN** question 1 is open
- **WHEN** question 2 is pressed
- **THEN** question 1 collapses to `max-height: 0` and its glyph returns to 0°
- **AND** at most one panel is ever open

#### Scenario: Keyboard and screen-reader contract

- **GIVEN** a keyboard user reaches a trigger
- **WHEN** it is focused and activated with `Enter`/`Space`
- **THEN** it carries `aria-expanded` and `aria-controls` (added by the recreation — the reference sets
  neither)
- **AND** the panel is associated with its trigger's id

### Requirement 11: Closing band (`#contact`)

The app SHALL render a centred band on `from-primary-600 to-primary-800` with two `bg-white/10`
`blur-3xl` circles, a 40 px white dot grid at `opacity-10`, a white 48 px Inter 700 headline, a
`primary-100` lede and two CTAs.

#### Scenario: Desktop band

- **GIVEN** the viewport is 1440 px
- **WHEN** `#contact` renders
- **THEN** the band measures **452 px** with `py-28`
- **AND** the `h2` is 48 / 48, −1.2 px, white; the lead is 18 / 28 `primary-100` at `max-w-xl`
- **AND** the primary CTA is white `rounded-lg px-8 py-4 text-primary-700` and the ghost is
  `border-2 border-white/30 text-white`

#### Scenario: Mobile band

- **GIVEN** the viewport is 390 px
- **WHEN** the band renders
- **THEN** both CTAs stack full-width and the dot grid still paints
- **AND** the sticky mobile bar does not overlap the last CTA (the band carries bottom padding for it)

### Requirement 12: Footer

The app SHALL render a `bg-gray-900` footer with a brand column, three link columns, a newsletter block
and a bottom bar carrying a link to `https://www.componentdock.com/`.

#### Scenario: Desktop footer

- **GIVEN** the viewport is 1024 px or wider
- **WHEN** the footer renders
- **THEN** it measures **539 px** with `pt-24`, a 12-column grid (brand 4 / links 5 / newsletter 3)
- **AND** the column headings are 14 / 20, 600, uppercase, 0.7 px tracking, white
- **AND** the links are 16 / 24 `gray-400` and turn white on hover
- **AND** the newsletter field is `bg-gray-800 border-gray-700` with a plum `Subscribe` button

#### Scenario: Newsletter submission

- **GIVEN** the form is empty
- **WHEN** the visitor submits
- **THEN** an inline error appears under the field (`This field is required`, then
  `Please enter a valid email address` for a malformed address) — the reference binds nothing at all,
  so this behaviour is a recreation improvement
- **AND** a valid address clears the field and raises the kit's green success toast

#### Scenario: The bottom bar

- **GIVEN** the footer is scrolled into view
- **WHEN** the bottom bar renders
- **THEN** it reads `© 2026 Slotline. All rights reserved.`
- **AND** it contains a link to `https://www.componentdock.com/` labelled `Component Dock`

### Requirement 13: Single page, no dead links

The app SHALL ship as one route. The reference's seven inner routes SHALL be folded away: the nav and
the footer SHALL only contain links that resolve to an id on the page.

#### Scenario: The six nav labels

- **GIVEN** the header renders
- **WHEN** the labels are counted
- **THEN** they are **six**: `Book` → `#book`, `Availability` → `#availability`, `Policies` →
  `#policies`, `Channels` → `#channels`, `Pricing` → `#pricing`, `Contact` → `#contact`
- **AND** `About` and `Notes` are **absent** (their pages are not rebuilt; see deviation 1)
- **AND** every one of the six moves the page to its band with a 20 px header offset

#### Scenario: Footer link columns

- **GIVEN** the footer renders
- **WHEN** every anchor is followed
- **THEN** Product holds the four band anchors, Company holds `Pricing` and `Contact`, and Help holds
  `Questions` → `#faq`
- **AND** `Privacy`, `Terms`, `Style Guide`, `About`, `Notes` and `Switching over` are **not** rendered
  as links (they would be dead), and the footer keeps its four-column shape
- **AND** the only non-fragment hrefs are `mailto:hello@slotline.app` and
  `https://www.componentdock.com/`

#### Scenario: No `href="#"`

- **GIVEN** the DOM is crawled
- **WHEN** anchors are inspected
- **THEN** zero anchors have `href="#"` (the reference has three — the social tiles)
- **AND** each social tile is either a real external profile or a non-anchor element

### Requirement 14: Responsive contract

#### Scenario: 390 × 844

- **GIVEN** the viewport is 390 px wide
- **WHEN** the page loads
- **THEN** the `h1` is **36 / 40 / −0.9**, `h2` **30 / 36 / −0.75**, leads 18 / 28
- **AND** every band's vertical padding is **80 px** (`py-20`)
- **AND** the header is 65 px, the nav is hidden, the hamburger is visible and the sticky mobile bar
  (69 px, `Pricing` + `Try the booking flow` pills) is displayed
- **AND** the document is roughly **13,564 px** tall and nothing overflows horizontally except the
  availability table's own scroll container

#### Scenario: 768 and 1024 breakpoints

- **GIVEN** the viewport is 768 px
- **WHEN** the bands render
- **THEN** the ladder is `sm:grid-cols-2`, the settings `sm:grid-cols-2`, the stat strip 4-up, the
  pricing cards still stacked
- **AND** at 1024 px the widget becomes three columns, the pricing `lg:grid-cols-3`, the ladder
  `lg:grid-cols-4`, the channels `lg:grid-cols-12` and the mobile bar disappears

### Requirement 15: Accessibility

#### Scenario: Document structure

- **GIVEN** the page is parsed
- **WHEN** headings are counted
- **THEN** there is exactly **one `h1`**, **seven `h2`** (book, availability, policies, channels,
  pricing, FAQ, contact), 16 `h3` and 5 `h4` — in DOM order, with no skipped level
- **AND** `lang="en"`, a skip link to `#main-content`, and `<main id="main-content">` all exist
- **AND** the icon-only controls carry `aria-label` (`Toggle dark mode` is dropped with dark mode; the
  hamburger keeps `Open menu`, the back-to-top keeps `Back to top`)

#### Scenario: The widget is operable by keyboard alone

- **GIVEN** a keyboard-only visitor
- **WHEN** they tab from the top of `#book`
- **THEN** the three radios, the 21 day buttons and the 6 slot buttons are all reachable and toggle with
  `Space`/`Enter`
- **AND** the summary and status text update, and are readable through the `dl`'s semantics
- **AND** the day table exposes its `caption` and its `th scope="col"` day names

### Requirement 16: Reduced motion

#### Scenario: Motion is opt-out

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page loads and is scrolled
- **THEN** the reveal, the typewriter, the counters, the floats, the parallax, the scroll-progress
  smoothing and the accordion's height animation are all disabled
- **AND** the page renders in its final state with content visible
- **AND** smooth anchor scrolling becomes instant

## Deliberate deviations from the reference

1. **Multi-page → single page.** The reference ships seven inner routes (`about`, `blog`, `pricing`,
   `contact`, `privacy`, `terms`, `elements`). The recreation rebuilds the landing page only and keeps
   six working nav labels; `About`, `Notes` and the three legal links are dropped rather than left dead
   (Requirement 13). Their copy is **not** rebuilt, but `/about`'s three "we will not do" promises and
   `/contact`'s real four-field form are noted here so no one re-invents them by accident.
2. **Dark mode dropped.** The reference has `data-dark-toggle`, `applyTheme()` and a full `dark:` set
   (page `gray-950 #030712`, bands `gray-900 #111827`, header `gray-950/80`, hero gradient
   `gray-900 → gray-950`, contact gradient `primary-600 → primary-800` unchanged, "Booked" cells
   `primary-600`, kicker pills `accent-900/40`, footer unchanged `gray-900`). The recreation is
   **light-only** and the moon button is omitted, so no control is dead. Every measured dark value is
   recorded in §Design tokens so the decision is reversible.
3. **No preloader.** The reference paints a full-screen white `#preloader` and removes it on
   `window.load` — a flash of blank page. The recreation mounts nothing.
4. **The video modal is not reproduced with the reference's id.** `data-video-modal` points at
   `https://www.youtube.com/embed/dQw4w9WgXcQ` (a placeholder). Either ship the overlay with an authored
   sample clip or drop the control and keep the two CTAs.
5. **The sample vertical is consistent.** The pitch is *studios, clinics and small venues*, but the
   widget demo is a **hair salon** (`Cut and finish`, `Full colour`, `Patch test required 48 hours
   before`, stylists `Nadia Farouk` / `Tomás Herrera` / `Ivy Chen`, `Treatment room`) and the JSON-LD
   prices in **GBP** while the plan cards price in **USD**. Keep the *shapes* — 3 services with price +
   duration + a note, 4 bookable rows including 1 resource, per-day fractions — and pick **one**
   vertical and **one** currency symbol (recommended: keep the salon demo's £ and change only the plan
   cards' `$` to `£`; the numbers `12 / 39 / 89` and `120 / 384 / 888` are already consistent at 12×).
6. **Brand and sample strings are replaced.** `Halfpast`, `hello@halfpast.app`, `© 2026 Halfpast` and
   the three social `#` tiles become `Slotline`, `hello@slotline.app`, `© 2026 Slotline` and real
   destinations (or non-anchor elements). The clock wordmark is **redrawn** (the source's is a
   `#493748` clock circle with a `#688554` minute hand and a Fraunces wordmark) — do not fetch its
   `logo.svg`.
7. **The newsletter form is wired.** `data-newsletter-form` binds to nothing in the kit (the validator
   only attaches to `form[data-validate]`, and the landing page has none). Requirement 12 gives it real
   validation and a toast.
8. **FAQ triggers gain `aria-expanded` / `aria-controls`.** The reference sets neither; its panels
   remain `max-height` transitions, not `<details>`.
9. **`data-nav-link` route strings are repaired.** Four labels carry `/pricing`, `/about`, `/blog`,
   `/contact`, which `getElementById` never resolves. In the recreation all six labels carry real ids.
10. **The JSON-LD is not copied.** The reference's block parses but is nonsense (its `@context` is the
    string `https://***@type`, its `url` is a bare `/`, its `og:image` is **404**, and its currency
    contradicts the plans). Write a clean `SoftwareApplication` block from scratch or emit none.
11. **The hero photograph's alt is honest.** The reference's `alt` reads *"A studio reception desk with a
    day's appointments on screen"* but the Unsplash photo (`photo-1521737604893`) is a co-working table.
    Use `picsum.photos/seed/slotline-hero/1200/600` with a truthful alt.
12. **"Save 20%" is the source's arithmetic.** The yearly prices are 17 % below 12 × monthly
    (`144 → 120`, `468 → 384`, `1068 → 888`). Keep the numbers; if you keep the pill's wording, know it
    is marketing rounding, and do not silently "fix" the prices to match the pill.
13. **No `container`/`max-w-*` normalisation.** Every band uses the same `container` (1280 px at 1440),
    but the hero nests `max-w-4xl` + `max-w-5xl`, the instrument bands nest `max-w-3xl`, the FAQ nests
    its own `max-w-3xl` list, and the contact lead nests `max-w-xl`. Copy each wrapper as measured; do
    not unify them into one width.

## Verification checklist

- [ ] `apps/slotline` exists, package `@free-react-templates/slotline`, `public/CNAME` =
      `slotline.free.componentdock.com`, `homepage` the same, footer links `https://www.componentdock.com/`
- [ ] No app file mentions the source brand or the source slug (provenance lives in this spec and the PR)
- [ ] `npm run verify:app slotline` passes (typecheck, lint, 100 % coverage tests, build)
- [ ] Nine bands in the measured order; heights within ±3 % of `1409 / 238 / 983 / 826 / 1122 / 980 /
      1072 / 929 / 452` at 1440, footer 539, document ≈ 8,631 px
- [ ] `primary` and `accent` ramps match the hex table exactly, including the absence of `accent-600`
- [ ] `h1` Fraunces 600 60/60/−1.5; `h2` **Fraunces** on book/availability/policies/channels and
      **Inter 700** on pricing/FAQ; contact `h2` Inter 700 48 px — all four verified with
      `getComputedStyle`
- [ ] Five left-aligned sage kicker pills + two centred lavender kicker pills; neither unified
- [ ] Hero: pill with ping dot, 3-phrase typewriter on `.text-gradient` (`#7e587a → #b894b5`), three
      controls, **static** `6 / 31 / 4 / 0` serif strip, 1024 × 512 framed photo
- [ ] Counter strip animates `9400 / 31 / 6 / 0` once, Inter 700 `primary-600`, no thousands separator
- [ ] Widget: 3 columns, 3 services with £/duration/note, October 2026 table with 21 pressable days +
      10 `span` days, day 14 pressed on load, 9 slots (3 disabled dashed, 2 accent scarce), summary
      `Service / When / Total`, confirm disabled until complete, `Demo only — no booking was made.`
- [ ] Availability: `border-spacing-1` table, 4 chip states incl. the 45° hatch, legend, `83/85/79/73%`
- [ ] Ladder: 4 rungs with escalating pills (sage → plum → plum → near-black) + 6 settings rows with
      `accent-700` `tabular-nums` values
- [ ] Channels: bars at exactly 100 / 61 / 41 / 25 %, `role="img"` + `aria-label`, `Setup:` in
      `accent-700`
- [ ] Pricing: switch `role="switch"` toggles $12/39/89 ↔ $10/32/74 and the three billed notes; Studio
      ringed + `Most Popular` pill; Solo's two ✕ features
- [ ] FAQ: six rows, exclusive, 45° icon rotation, `aria-expanded`/`aria-controls`, panel ≈ 88 px
- [ ] Contact: plum→plum gradient, two `white/10` circles, 40 px dot grid, two CTAs
- [ ] Footer: 4-column 12-grid, newsletter validates, bottom bar links Component Dock
- [ ] Nav and footer contain **zero** dead links and **zero** `href="#"`
- [ ] 390 px: 36/40 h1, 30/36 h2, 80 px band padding, 65 px header, 69 px mobile bar, table scrolls
- [ ] Reduced motion: no reveal/typewriter/counter/float/parallax animation, content visible
- [ ] One `h1`, seven `h2`, no skipped heading level, skip link first in tab order
- [ ] `TEMPLATES.md` row added under `## Business` between `Hairsal` and `Halo`, heading count bumped
      (re-count it), `README.md` status regenerated after deploy
