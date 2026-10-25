# Template: Closeknit (Social network — private groups product landing)

## Purpose

A subscription landing page for a **deliberately small social network**: the whole page argues one
idea — posts go to a circle you choose, nothing is ranked, nothing is public, and there is no
advertising business to protect. Every band is built to *prove* that claim rather than say it: a
typewriter headline, a four-cell counter strip, a masonry feed of five invented posts that each name
the circle they went to, six circle cards, four member cards with "in N circles with you", a privacy
band that reads as a spec sheet of defaults, three subscription tiers with a monthly/yearly switch,
three testimonials, five FAQs about what the product refuses to do, and a blue closing call-to-action.

Recreation of the ColorLib **"Circles"** design (https://colorlib.com/wp/template/circles/, live
preview https://preview.colorlib.com/theme/circles/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

* **Source slug:** `circles`
* **ColorLib page:** https://colorlib.com/wp/template/circles/ — HTTP 200, 111,467 B, `<title>`
  **"Circles - Social Network Website Template 2026 - Colorlib"**
* **Live preview:** https://preview.colorlib.com/theme/circles/ — HTTP 200, 92,289 B, page
  `<title>` **"Home | Circles"** (read 2026-10-25 with `curl -4`; this host resolves an IPv6 address
  that is banned, so every fetch needs `-4`)
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/circles-template.jpg
  (served as **JPEG**, 311,833 B, 2400×1892 — a macOS-window-framed capture of the header, the whole
  hero and the hero figure; nothing below the hero is visible in it)
* **New name:** `closeknit` (apps/closeknit, `@free-react-templates/closeknit`) — one lowercase word
  meaning *close-knit*, i.e. the small trusted group the product is about; differs from the source
  slug and has **zero** substring hits repo-wide (`git grep -i closeknit origin/main` → empty), no
  `apps/closeknit`, no `openspec/specs/template-closeknit/`, no `docs/templates/closeknit/`, and no
  `**Closeknit**` bold name in `TEMPLATES.md`
* **Deploy target:** https://closeknit.free.componentdock.com (`apps/closeknit/public/CNAME`,
  `homepage` in `apps/closeknit/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: `## App Landing Page (35)` (line 54), the section that already holds the
  product/subscription landings (`appco` → `flowly`, `appy` → `tandem`, `massive` → `appmint`).

### Why this design has no row (catalogue gap, measured 2026-10-24)

`TEMPLATES.md` is exhausted — 0 `- [ ]`, 2,857 `[x]`, every row resolving to an app and a spec — but
the **catalogue is not complete**: all 40 pages of https://colorlib.com/wp/templates/ were crawled
and compared with the 1,631 slugs the checklist cites, and **256 designs are on the listing that the
checklist never recorded** (42 standalone + 214 snippet variants). The census, its commands, the open
decision and both buckets are recorded in `docs/catalog-coverage.md`.

`circles` is the **third** of the 42 standalone designs to be prepped (`airwise` → `thermly` was the
first, `backstop` → `flowcert` the second, both of which established the hand-off pattern). No spec on
main names `template/circles` (`git grep -l 'wp/template/circles/' origin/main -- openspec/specs` →
empty) and no app named `circles` exists, so this prep is not a duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR title claims a row —
paste this line under `## App Landing Page (35)`, then flip it to `[x]` with the same bookkeeping
commit that writes the surge URL:

```
- [~] **Circles** — [colorlib](https://colorlib.com/wp/template/circles/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/circles-template.jpg) · [closeknit](https://closeknit.free.componentdock.com)
```

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/circles/` page (DOM authority) | 92,289 | `c634579cd48e0176a68ca1a0f054130ef7acc8374019b8573853014e04ad37e0` |
| `theme/circles/_astro/Base.D79t8nIj.css` (token authority) | 63,718 | `db40d037cec30cbdd660896b89c6f73b175ebd187c76aa39151d63707f5759fa` |
| `theme/circles/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `theme/circles/_astro/ClientRouter.astro…CYDbzu1r.js` | 16,357 | `69eb3ac5c16a8d9a6aee7b815f71aa468701cc9c731c9dd5660b58e0dd5e399c` (view-transition router; no design content) |
| inline `<style>` in the page (9,816 B — the **only** font source) | — | Manrope 300/400/500/600/700/800, `@font-face` pointing at the preview's own `/cf-fonts/v/manrope/5.2.8/{latin,latin-ext,cyrillic,cyrillic-ext,greek,vietnamese}/wght/normal.woff2`, `font-display: swap` |
| catalog screenshot `circles-template.jpg` | 311,833 | `ce9c50df146398bfa8fa67dce005b2354c450c0c0b05311765a3fe0711bcb829` (real JPEG, 2400×1892 — see §Screenshot analysis) |
| `colorlib.com/wp/template/circles/` (catalog entry) | 111,467 | — |
| `assets/img/logo.svg` / `logo-light.svg` | 487 / 487 | `98e431836cf6dfebd1da87b3e9ccbf301268a92bec112646383e8ff7cfdf3821` / `59c47cd36846b3425b267de3fe55c209112bd4ffac7d59ac6b15043cee070460` |
| `favicon.svg` | 377 | `5d183df4c100257454ea9657642d6dcdbee62f744542c97b5b6c64b3075d9aa7` |
| `downloads/free/circles.zip` | — | **HTTP 404** — there is no archive twin, so the live preview is the sole DOM/CSS reference |

The preview is an **Astro 5 build with Tailwind 4.3.3 output**: one stylesheet, one deferred kit
script, one client router, no framework bundle. Every band carries `dark:` variants (the sheet
compiles a complete dark palette) and the header ships a working theme toggle persisted in
`localStorage`; the recreation is **light-only**, a recorded deviation (§Deliberate deviations 2).

**Class census (no phantom-rule delta):** the page uses **393 distinct class tokens**; 391 match a
compiled rule in `Base.D79t8nIj.css` verbatim, and the only two that do not (`[&amp;&gt;*]:mb-5`,
`[&amp;&gt;*]:break-inside-avoid`) are the entity-escaped form of the real arbitrary-variant rules
`.\5B\&\>\*\5D\:mb-5` / `…break-inside-avoid` — i.e. **every class in the markup is styled**. There
is no comingsoon_13-style "class with no rule" to floor into the spec.

**Fonts load in the source** — the `@font-face` rules live in an inline `<style>` block, not in the
CSS file, so grepping the sheet alone looks like a missing face. Manrope is the *whole* UI (the html
element itself is `font-family: Manrope, system-ui, sans-serif; line-height: 1.5`), and no other
family is loaded. The recreation loads Manrope (300/400/500/600/700/800) from Google Fonts via
`<link>` in `index.html`; `css2?family=Manrope` and
`css2?family=Manrope:wght@300;400;500;600;700;800` both return **HTTP 200** with a browser UA
(probed 2026-10-25), as does the legacy `css?family=Manrope:300,400,500,600,700,800&display=swap`.

## Design tokens (measured from `_astro/Base.D79t8nIj.css`, 63,718 B)

### Brand ramp — `primary` (sky)

The design does **not** define custom theme tokens; it uses Tailwind's `sky` scale, compiled to the
literals below. This is the single most important fidelity fact on the page: the brand blue is
`#0284c7`, *not* an indigo/violet.

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#f0f9ff` | **hero gradient start** (`from-primary-50`), person-circle chips, hero badge ground |
| `primary-100` | `#e0f2fe` | eyebrow pills (`Circles`, `Plans`, `Why people moved`, `Questions`), testimonial avatar discs, hero blob |
| `primary-200` | `#bae6fd` | hero badge border, hero blob, privacy call-out border |
| `primary-300` | `#7dd3fc` | dark-mode text accent only |
| `primary-400` | `#38bdf8` | **typewriter gradient end**, review stars, avatar gradient start, dark-mode accents |
| `primary-500` | `#0ea5e9` | focus rings, badge dot, avatar gradient mid-stop |
| `primary-600` | `#0284c7` | **brand** — every solid button, pricing ring, toggle-fill, progress bar, link accents |
| `primary-700` | `#0369a1` | button hover, eyebrow-pill text, chip text, closing-CTA label colour |
| `primary-800` | `#075985` | **closing CTA gradient end** (`to-primary-800`) |
| `primary-900` | `#0c4a6e` | dark-mode grounds only (not used in the light recreation) |

### Accent ramp — `accent` (fuchsia)

A second, genuinely-used brand hue — it is *not* decoration: it colours the heart reaction, the
avatar gradients and two of the five eyebrow pills.

| token | hex | where |
| --- | --- | --- |
| `accent-100` | `#fae8ff` | **`Your feed` and `People` eyebrow pills** |
| `accent-300` | `#f0abfc` | dark-mode text accent only |
| `accent-500` | `#d946ef` | **heart icons** (`text-accent-500`), avatar gradient end |
| `accent-700` | `#a21caf` | eyebrow-pill text on the two accent pills |

The logo SVG uses `#c026d3` (fuchsia-600) as its third circle, i.e. the mark sits between the two
ramps.

### Grays, and the stock Tailwind values below them

| token | hex | where |
| --- | --- | --- |
| body ink | `#111827` | `body` colour (`gray-900`); also the footer ground and `nav-active` text |
| `gray-50` | `#f9fafb` | **stats band**, circles band, privacy band, testimonials band grounds; pricing card ground; `btn-secondary` hover |
| `gray-100` | `#f3f4f6` | post-type badges (`Photo`, `Poll`), FAQ icon discs, mobile-CTA secondary button, closing-CTA hover |
| `gray-200` | `#e5e7eb` | header bottom border, stats-band borders, all card borders, FAQ dividers, billing-switch track |
| `gray-300` | `#d1d5db` | hero secondary button border, cookie `Decline` button border |
| `gray-400` | `#9ca3af` | excluded pricing features (`×` glyphs), footer brand copy |
| `gray-500` | `#6b7280` | handles (`@lea`), meta lines, legal bar, placeholders |
| `gray-600` | `#4b5563` | **all band ledes and card body copy** |
| `gray-700` | `#374151` | feed post body, secondary-button label, included feature text |
| `gray-800` | `#1f2937` | footer social tiles, newsletter field, footer link hover ground |
| `gray-900` | `#111827` | **footer ground**, headline colour |

One non-palette accent: the `Save 20%` pill is stock Tailwind `green-100` ground / `green-700` text
(≈ `#dcfce7` / `#15803d`, both compiled as `var(--color-green-*)` `oklch()` tokens).

### Typography

* **Family:** `Manrope, system-ui, sans-serif` for all text (weights 300/400/500/600/700/800); the
  only `monospace` reference is the framework default (`--font-mono`) and nothing on the page uses it.
* **h1:** `text-4xl sm:text-5xl lg:text-6xl` (2.25 → 3 → 3.75 rem), `font-bold`, `tracking-tight`
  (−0.025em), `text-gray-900`, centred, `max-w-4xl`. The second line is a `<span class="text-gradient">`
  — `linear-gradient(to right, #0284c7, #38bdf8)` with `background-clip: text` and transparent text.
* **h2 (band heads):** `text-3xl sm:text-4xl` (1.875 → 2.25 rem), `tracking-tight`;
  `font-extrabold` on the feed / circles / people / privacy bands, `font-bold` on pricing /
  testimonials / FAQ; `text-gray-900`; contact h2 is `text-white` at `text-3xl sm:text-4xl lg:text-5xl`.
* **h3 (card titles):** feed posts have no h3; circle cards `text-lg font-bold`; person cards
  `font-bold`; privacy items `font-bold`; pricing tiers `text-xl font-semibold`.
* **Body:** band ledes `text-lg text-gray-600` (`sm:text-xl` in the hero); card copy `text-sm
  leading-relaxed text-gray-600`; feed post body `text-sm leading-relaxed text-gray-700`; meta and
  footer `text-xs`/`text-sm` in `gray-500`/`gray-400`.
* **Eyebrow pills:** `inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider`
  — ground `primary-100`, text `primary-700`, **or** ground `accent-100`, text `accent-700`
  (the feed and people bands use the accent pair; circles, privacy, pricing, testimonials and FAQ use
  the primary pair).
* **Post-type badge:** `rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-bold uppercase
  tracking-wide text-gray-600` (`Photo`, `Poll`).
* **Numerals:** every count (`24`, `7`, `6 members`, `9 avg`) is `tabular-nums`.

### Buttons, forms, cards

| element | measured |
| --- | --- |
| `.btn-primary` | `inline-flex`, `border-radius: 0.5rem` (`--radius-lg`), padding `0.625rem 1.25rem`, `font-size: 0.875rem`, weight 500, white, `background: #0284c7`, shadow `0 10px 15px -3px #0284c740, 0 4px 6px -4px #0284c740`; hover `#0369a1` + deeper shadow; focus ring 2 px `#0ea5e9`, offset 2 |
| `.btn-secondary` | white ground, 1 px `#d1d5db` border, `#374151` text, same padding/radius; hover `#f9fafb`; focus ring 2 px `#6b7280` |
| hero CTAs | `rounded-lg px-6 py-3 text-base font-medium`; primary `#0284c7` + `shadow-lg shadow-primary-600/25` + arrow icon, hover `#0369a1`; secondary white + 1 px `gray-300`, label `gray-700`, hover `gray-50` |
| watch-demo control | 48 px (`h-12 w-12`) `rounded-full` `#0284c7` play disc with its own `shadow-lg`, label `text-sm font-medium` to its right; hover on the disc deepens the shadow |
| billing switch | `h-7 w-14 rounded-full` track (`bg-gray-200` → `#0284c7` when yearly), 20 px white knob, `role="switch"` + `aria-checked`, knob travels 28 px |
| closing CTA pair | white solid `px-8 py-4` label `#0369a1` (hover `#f3f4f6`) + **2 px** `border-white/30` outline with white label (hover `border-white` + `bg-white/10`), both `rounded-lg text-base font-medium` |
| inputs | newsletter: `rounded-lg`, 1 px `gray-700` on `gray-800`, `px-4 py-2.5`, white text, placeholder `gray-500`, focus `border-primary-500` + 1 px `primary-500` ring; contact form (inner page): white ground, `border-gray-300`, focus ring `primary-500` |
| cards | feed article `rounded-3xl border border-gray-200 bg-white p-5 shadow-sm`, hover `shadow-md`; circle card `rounded-3xl … overflow-hidden`, hover `-translate-y-1` + `shadow-lg`, image 128 px (`h-32`) with `group-hover:scale-105`; person card `rounded-3xl … p-6 text-center`; privacy item `rounded-2xl … p-5`; pricing card `rounded-2xl p-8 shadow-soft`, hover `shadow-soft-lg`, featured card adds `ring-2 ring-primary-600` and a `-top-4` `Most Popular` badge; testimonial card `rounded-2xl bg-white p-8 shadow-soft` |
| avatars | feed 40 px (`h-10 w-10`) `rounded-full` **gradient** `from-primary-400 to-accent-500`, `text-xs font-bold`; person card 64 px (`h-16 w-16`) gradient `from-primary-400 via-primary-500 to-accent-500`, `text-lg font-extrabold`; testimonial 48 px solid `primary-100` / `primary-600` text |
| privacy toggle glyph | 44 × 24 px (`h-6 w-11`) `rounded-full p-1`, `bg-primary-600` + knob `justify-end` (on) vs `bg-gray-200` + `justify-start` (off), `role="img"` with an `aria-label` mirroring the status line |

Radii: `--radius-lg .5rem`, `--radius-xl .75rem`, `--radius-2xl 1rem`, `--radius-3xl 1.5rem`,
pills `9999px`. Custom shadows: `shadow-soft` = `0 4px 16px -4px #0000001a`,
`shadow-soft-lg` (its hover) = `0 12px 32px -8px #00000024`, `shadow-2xl` on the hero figure frame.

### Rhythm

* Sections: `py-20 sm:py-28` (feed, circles, people, privacy); `py-20 lg:py-28` (pricing,
  testimonials, FAQ, contact); the hero `py-20 lg:py-32`; the stats band `py-16 lg:py-20`; the footer
  `pt-16 lg:pt-24` with `py-8` on the legal bar.
* Container: `.container` = `width: 100%`, `margin-inline: auto`, `padding-inline` 1 → 1.5 → 2 → 2.5 →
  3 rem across its max-width steps (`--container-2xl 42rem` … `--container-7xl 80rem`). Inner caps:
  `max-w-7xl` (circles, people), `max-w-5xl` (feed, privacy, hero figure), `max-w-4xl` (hero copy),
  `max-w-3xl` (pricing / testimonials / FAQ heads, contact block, FAQ list), `max-w-2xl` (band heads,
  hero lede), `max-w-xl` (contact lede), `max-w-xs` (footer blurb).
* Band grounds alternate: `primary-50→white` gradient hero → `gray-50` stats → **white** feed →
  `gray-50` circles → white people → `gray-50` privacy → white pricing → `gray-50` testimonials →
  white FAQ → `primary-600→primary-800` gradient contact → `gray-900` footer.
* Header: `sticky top-0 z-50`, `bg-white/80 backdrop-blur-lg`, 1 px `gray-200` bottom border, 64 px
  tall (`lg: 80 px`); `shadow-lg` is added by script past `scrollY > 50`.
* Grid: hero stats `grid-cols-2 sm:grid-cols-4`; feed is a **CSS multi-column** masonry
  (`columns-1 sm:columns-2`, `gap-5`, children `mb-5 break-inside-avoid`); circles
  `sm:grid-cols-2 lg:grid-cols-3`; people `sm:grid-cols-2 lg:grid-cols-4`; privacy
  `sm:grid-cols-2`; pricing `lg:grid-cols-3`; footer `lg:grid-cols-12` (brand 4 / links 5 / newsletter 3).
* Decorative motion: two blurred blobs in the hero (`bg-primary-200/50`, `bg-primary-100/40`,
  `blur-3xl`, `h-[500px]`/`h-[400px]`) animated by `hero-float` — 8 s and 10 s (reversed) ease-in-out
  loops that translate ±30 px and scale 0.95–1.05, driven by `data-parallax` (0.15 / −0.1); a white
  radial-dot grid at 10 % opacity over the closing CTA (`radial-gradient(circle at 1px 1px, white 1px,
  transparent 0)`, 40 px pitch).

## Reference document order (page chrome, header, ten bands, footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| — | `#preloader` | white | fixed full-screen overlay holding a 40 px `animate-spin` ring (`border-4` `gray-200` with a `primary-600` top edge), removed on `load` + 300 ms fade |
| — | skip link | — | `#main-content`, visually hidden until focused |
| — | `#scroll-progress` | — | fixed 2 px (`h-0.5`) `primary-600` bar, width = scrolled % |
| — | `header` | white/80 blurred | three-circle logo mark + `Circles` wordmark; nav `Feed`, `Circles`, `People`, `Privacy`, `About`, `Plans`, `Blog`, `Contact`; dark-mode toggle; `Create your circle`; a mobile disclosure below `lg` (same eight links + CTA) |
| 1 | hero | `primary-50`→white gradient + 2 blobs | badge `No public feed. No follower count. No algorithm.` (with a ping dot) · h1 `Share with the people` / **typewriter** `you actually meant` (`you actually meant` / `who were there` / `who will care`) · lede · `Create your circle` + `See how it works` + `Watch Demo` · four stats `9 avg / People per circle`, `0 / Ads served`, `100% / Chronological`, `2.8k / Circles created` · **hero figure**: one landscape photograph in a `rounded-2xl` `ring-1` `shadow-2xl` frame, `max-w-5xl` |
| 2 | stats band | `gray-50`, `border-y` | four **animated counters** `9 / Average circle size`, `100% / Chronological feed`, `0 / Ads, ever`, `31 sec / Median export time` in `text-4xl lg:text-5xl` `primary-600` |
| 3 | `#feed` | white | accent pill `Your feed`; h2 `Everything, in the order it happened`; lede `No ranking, no suggested posts… it says so and stops.`; **five** posts in a two-column masonry, each `avatar initials · name · in <circle> · time` + optional `Photo`/`Poll` badge + body + optional 4:3 image + `heart 24 · bubble 7` footer |
| 4 | `#circles` | `gray-50` | primary pill `Circles`; h2 `A circle for each part of your life`; lede; **six** cards — 128 px image with a white `Private` / `Invite only` pill, h3 name, blurb, and a hairline row `N members` + `Active today/this week/this month` |
| 5 | `#people` | white | accent pill `People`; h2 `Real connections, not a follower count`; lede; **four** cards — 64 px gradient avatar initials, name, `@handle`, blurb, circle chip list, `In N circles with you`, full-width `Follow` (`btn-primary`) |
| 6 | `#privacy` | `gray-50` | primary pill `Privacy`; h2 `The settings other networks bury`; lede; **six** two-column items, each a switch glyph + h3 + body + a status line (`On by default` ×3, `Permanently off`, `Off by default`, `Always available`); a `primary-50` bordered call-out paragraph under the grid |
| 7 | `#pricing` | white | primary pill `Plans`; h2 `You are the customer, so there is a price`; lede; **Monthly/Yearly switch** with a green `Save 20%` pill; **three** tiers (`Free $0`, `Member $5` + `Most Popular` ribbon + `ring-2`, `Family $12`), each a description, a price line, a billing note, five features (included `✓` in `primary-600` / excluded `×` in `gray-400`+`gray-500`), and a full-width CTA (`Start free` grey / `Become a member` / `Set up a family plan` blue) |
| 8 | `#testimonials` | `gray-50` | primary pill `Why people moved`; h2 `Smaller turned out to be the feature`; lede; **carousel** of three `shadow-soft` cards — five `primary-400` stars, quote, 48 px `primary-100` initial disc, name + role; dots below, prev/next discs at `≥ sm`, 3 slides at `lg` / 2 at `sm` / 1 below, 5 s autoplay, pause on hover |
| 9 | `#faq` | white | primary pill `Questions`; h2 `The things people check first`; lede `Mostly about what we do not do.`; **five** rows divided by hairlines, each a button with a 32 px `gray-100` `+` disc that rotates 45° when open; **exclusive** — opening one closes the rest |
| 10 | `#contact` | `primary-600`→`primary-800` gradient + dot grid + 2 white blobs | h2 `Start with one circle`; one line; white solid `Create your circle` + 2 px outline `Read the privacy defaults` |
| — | `footer` | `gray-900` | brand column (light logo, blurb, three `gray-800` social tiles, address, phone, email) · three link columns `Spaces` (4), `Company` (2), `Support` (2) · `Stay Updated` newsletter (`gray-800` field + `Subscribe`) · legal bar `© 2026 Circles. All rights reserved.` + `Privacy Policy` / `Terms of Service` / `Style Guide` |
| — | `#mobile-cta` | white, `lg:hidden` | fixed bottom bar, two equal buttons — `Call Now` (`tel:`, `gray-100`) and `Book a Tour` (`#contact`, `primary-600`) |
| — | `#cookie-consent` | white | `role="dialog"`, slides up 1.5 s after load, one sentence + `Decline` (outline) / `Accept All` (solid) |
| — | `#back-to-top` | `primary-600` | 48 px circle, appears past 300 px, returns to top |

## Behaviour the recreation must reproduce (read from `Base…BLoalVWc.js`, 16,233 B)

The kit wires 20 behaviours on `astro:page-load`. The home page exercises:

| behaviour | measured detail |
| --- | --- |
| reveal animation | `[data-animate]` starts `opacity:0; translateY(20px)`, resolves to `1 / 0` through an `IntersectionObserver` (threshold 0.1, `rootMargin: 0 0 -10% 0`), each element's `data-delay` (0–500 ms) becoming a CSS transition delay; **skipped entirely** when `prefers-reduced-motion: reduce` matches |
| typewriter | `[data-typewriter]` cycles `JSON.parse` phrases every **3 s**, fading out 300 ms, swapping `textContent`, fading back in; the element's initial text is the first phrase, so the list has 3 entries and the first is not repeated |
| counters | `[data-counter]` animates from 0 to its value over **2 s** with an ease-out cubic, honouring `%`, `K`, `M`, `+` and `$` suffixes; starts on `threshold: 0.5`; the final frame assigns the **verbatim** string (`31 sec`, `9 avg`) |
| hero blobs | `[data-parallax]` translates by `scrollY × factor` (0.15 / −0.1) while on screen |
| header | `shadow-lg` toggles at `scrollY > 50` |
| nav spy | `[data-nav-link]` matching a section id in the page gets `.nav-active` (`#111827`, weight 600) from an observer with `rootMargin: -20% 0 -70% 0` |
| anchor scroll | in-page anchors scroll smoothly to `top - (headerHeight + 20)` and `history.pushState` the hash |
| billing switch | flips `aria-checked`, fills the track `#0284c7`, moves the knob 28 px, swaps label emphasis, rewrites every `[data-price-monthly]` text to `$<yearly>` after a 150 ms fade, and toggles `[data-show-monthly]` / `[data-show-yearly]` |
| FAQ | **exclusive**: any other open panel is collapsed to `maxHeight: 0; opacity: 0` and its icon reset; the clicked panel opens to `scrollHeight` px, opacity 1, icon `rotate(45deg)` |
| carousel | slide width = container/slots (3 at ≥1024, 2 at ≥640, 1 below), track translated by `index × width`, dots rebuilt as `w-8` active / `w-2.5` inactive, arrows hidden when `maxIndex === 0`, autoplay 5 s reset on interaction, paused on `mouseenter` |
| cookie strip | shown after 1.5 s unless `localStorage['cookie-consent']` is set; either button slides it out and removes it after 300 ms |
| back to top | visible past 300 px, smooth `scrollTo(0)` |
| video modal | `[data-video-modal]` injects a fixed overlay (`bg-black/80 backdrop-blur-sm`, opacity fade), a `max-w-4xl` `aspect-video` iframe with `?autoplay=1`, a close button, backdrop-click and `Escape` handlers, and locks body scroll |
| toast + validation | `form[data-validate]` blocks submit, marks empty/`type=email` invalid fields `!border-red-500` with a `text-red-500` message, and on success resets and shows a fixed top-right green toast for 4 s |
| scroll progress | `#scroll-progress` width = `scrollY / (scrollHeight - innerHeight) × 100 %` |
| lazy shimmer | `img[loading=lazy]` gets an animated `img-shimmer` gradient until it loads |

The home page has **no** `data-blog-filters`, `data-blog-search`, `data-lightbox` or `data-carousel`
beyond the testimonial one — those live on `/blog` and `/elements`.

## Link and destination census (LT axis)

The live page holds **52 anchors**:

| target | count | verdict |
| --- | --- | --- |
| `/theme/circles/#circles` | 8 | live fragment — desktop nav, mobile nav and **all six circle cards** (the cards re-anchor to their own band) |
| `/theme/circles/pricing` | 6 | live — 308 → `/pricing/` 200 |
| `/theme/circles/contact` | 5 | live — 308 → `/contact/` 200 (incl. all three plan CTAs) |
| `/theme/circles/#spaces` | 4 | **dead fragment** — no element on the page has `id="spaces"` (the four footer "Spaces" links) |
| `/theme/circles/about` | 3 | live — 308 → 200 |
| `/theme/circles/blog` | 3 | live — 308 → 200 |
| `#` | 3 | **dead** — the footer's Twitter / Instagram / LinkedIn tiles |
| `/theme/circles/` | 2 | live — the header wordmark and the footer logo |
| `/theme/circles/#feed` · `#people` · `#privacy` · `#contact` | 2 each | live fragments — desktop + mobile nav |
| `/theme/circles/terms` | 2 | live — 308 → 200 |
| `#main-content` | 1 | live — the skip link |
| `#circles` · `#privacy` | 1 each | live — hero's `See how it works`, closing CTA's privacy link |
| `tel:(555) 908-2277` | 1 | **malformed** tel URI (spaces and a parenthesis inside the number) |
| `tel:5556789012` | 1 | live — the mobile bar's `Call Now` |
| `mailto:hello@circles.social` | 1 | live (`.social` demo mailbox) |
| `/theme/circles/privacy` · `/elements` | 1 each | live — 308 → 200 |

Every route was probed (2026-10-25): `/pricing`, `/contact`, `/about`, `/blog`, `/terms`, `/privacy`,
`/elements` all answer **308 → `/<page>/` → 200**, with their own `<title>` and 34–55 KB DOMs. They
are the authoritative reference for anything the single page compresses:

| inner page | bytes | `<title>` | what it holds (authoritative for) |
| --- | ---: | --- | --- |
| `/about/` | 35,391 | `About Circles \| Circles` | "Small was the missing feature" + "Three things we will not build" (three stated refusals), "Who runs it" with four named people (Founder / Engineering / Trust & safety / Support) |
| `/blog/` | 40,917 | `Blog \| Circles` | `Insights & Updates`, category filter pills (`All`, `Product`, `Privacy`, `Safety`) and a card grid with dates 2032, authors, read times |
| `/contact/` | 34,386 | `Contact Circles \| Circles` | a four-field message form (name, email, subject, message) + "Other routes" (email, phone, address, support hours) |
| `/pricing/` | 45,192 | `Plans \| Circles` | **the same three tiers** as the home band (identical markup + a second FAQ block) |
| `/privacy/` | 36,449 | `Privacy Policy \| Circles` | a numbered policy (6 sections) |
| `/terms/` | 35,188 | `Terms of Service \| Circles` | a numbered policy (12 sections) |
| `/elements/` | 54,989 | `Elements \| Circles` | the template's own style guide: heading levels, lead/body/small text, a blockquote, button variants (primary / secondary / outline), sizes (small / default / large / disabled) |

`/elements/` is the design system's own documentation — the most direct evidence that the button
system is the `.btn-primary` / `.btn-secondary` pair measured above.

## Screenshot analysis (2400 × 1892, macOS-window framed)

A cool, high-key product page with **one** photograph and no card chrome in the hero. The window
chrome sits on a `#f9fafb` desktop; inside it a white header (circular three-dot logo in two blues and
a fuchsia, `Circles` wordmark in 20 px semibold, eight small `gray-600` nav links, a moon glyph, and a
solid `#0284c7` `Create your circle` button at 8 px radius).

The hero is a **centre-aligned, sky-tinted** block: the ground is a soft `#f0f9ff` that fades to white
by the stats row, and the whole viewport feels airy rather than dense. At the top a small pill —
`#f0f9ff` ground, `#bae6fd` border, `#0369a1` 12 px text — carries a 2 px pulsing dot and the line
*"No public feed. No follower count. No algorithm."*. The headline is two centred lines of very large
dark text (≈ 60 px at this width, Manrope bold, tight tracking): *"Share with the people"* in
`#111827`, then *"you actually meant"* in a **left-to-right blue gradient** from `#0284c7` to
`#38bdf8`, clipped to the glyphs. Under it one 18–20 px `gray-600` paragraph at `max-w-2xl`.

The action row is three items, not two: a solid blue rounded-8 px button with a right arrow, a white
button with a 1 px grey border, and a **circular 48 px blue play disc** followed by the words
*"Watch Demo"* — the third control is deliberately lighter than a button. Below, separated by a full
hairline rule, four small stat blocks: 28–32 px bold values in `#111827` over 14 px `gray-600`
labels in a 4-column row.

The hero figure dominates the lower half: a single landscape photograph (friends arm-in-arm on a
hilltop at dusk, warm haze, cool sky) inside a 16 px-radius frame with a 1 px grey ring and a large soft
shadow, about 1000 px wide, centred below the stats. Nothing else is visible in the capture — the
masonry feed begins below the fold, so its rhythm was read from the DOM rather than the picture.

## Requirements

### Requirement 1: Page chrome (preloader, skip link, scroll progress, back to top)

The app SHALL render a skip link as the first focusable element, a 2 px top scroll-progress bar, and a
48 px back-to-top control that appears past 300 px. It SHALL NOT block the page on a preloader once
the document is ready.

#### Scenario: Visitor loads the page

- **GIVEN** the page is loading
- **WHEN** the document reaches `readyState === "complete"` (or the `load` event fires)
- **THEN** the overlay is gone and the content behind it is interactive
- **AND** no overlay is left at `opacity: 1` when JavaScript is unavailable

#### Scenario: Visitor scrolls

- **GIVEN** the page is at the top
- **WHEN** the visitor scrolls past 300 px
- **THEN** the progress bar width equals `scrollY / (scrollHeight - innerHeight)` as a percentage
- **AND** the back-to-top control becomes visible and returns the page to the top when activated

### Requirement 2: Header and navigation

The app SHALL render a sticky translucent header (64 px, 80 px at `lg`) carrying the wordmark, eight
navigation items, and one solid CTA, which collapses to a disclosure below `lg`. The header SHALL gain
a shadow past 50 px of scroll, and the in-page nav item for the band in view SHALL be emphasised.

#### Scenario: Visitor navigates from the header

- **GIVEN** the header is rendered at a desktop viewport
- **WHEN** the header is inspected
- **THEN** it is a `banner` landmark containing a navigation landmark with eight links —
  `Feed`, `Circles`, `People`, `Privacy`, `About`, `Plans`, `Blog`, `Contact`
- **AND** each link targets an id that exists on the page (the source's four in-page links become
  fragments; the four route links become in-page bands in the single-page recreation)

#### Scenario: Visitor opens the mobile navigation

- **GIVEN** the header is rendered below `lg`
- **WHEN** the visitor activates the menu control
- **THEN** the control reports `aria-expanded="true"` and the panel lists the same eight links and the
  CTA
- **AND** activating it again, following a link, or pressing `Escape` closes the panel

#### Scenario: Visitor scrolls a band into view

- **GIVEN** the `circles` band is scrolled into the middle of the viewport
- **WHEN** the observer fires
- **THEN** exactly one nav item carries the active treatment (`#111827`, weight 600)
- **AND** the header adds its shadow only once `scrollY > 50`

### Requirement 3: Hero

The app SHALL render a centre-aligned gradient hero whose badge, `h1`, lede, three controls, four
statistics and framed figure follow the reference order. The `h1`'s second line SHALL cycle through
three phrases on a 3 s interval and SHALL NOT animate under `prefers-reduced-motion: reduce`.

#### Scenario: Visitor lands on the page

- **GIVEN** the page has loaded
- **WHEN** the hero is in view
- **THEN** the `h1` is the only level-1 heading and reads `Share with the people` followed by the
  active typewriter phrase
- **AND** the second line is painted with a `#0284c7 → #38bdf8` gradient clipped to the text, and the
  phrase is real text (not an image)

#### Scenario: The typewriter cycles

- **GIVEN** the hero has been visible for three seconds
- **WHEN** the interval fires
- **THEN** the phrase becomes the next of `you actually meant` → `who were there` → `who will care`
  and wraps back to the first
- **AND** under `prefers-reduced-motion: reduce` the phrase stays `you actually meant` for the whole
  session

#### Scenario: Visitor reads the hero statistics

- **GIVEN** the hero is in view
- **WHEN** the statistics row is read
- **THEN** four values render in DOM order — `9 avg` / `People per circle`, `0` / `Ads served`,
  `100%` / `Chronological`, `2.8k` / `Circles created`
- **AND** the row is separated from the copy by a 1 px `gray-200` top rule

### Requirement 4: Counter band

The app SHALL render a bordered `gray-50` band of four counters that animate from zero to
`9`, `100%`, `0` and `31 sec` when the band enters the viewport (threshold 0.5), leaving the exact
final string in the DOM.

#### Scenario: Visitor scrolls the band into view

- **GIVEN** the band is below the fold and the counters show `0`
- **WHEN** the band becomes half visible
- **THEN** each counter runs once for ~2 s and settles on `9`, `100%`, `0`, `31 sec`
- **AND** the labels read `Average circle size`, `Chronological feed`, `Ads, ever`,
  `Median export time` in that order

#### Scenario: Reduced-motion visitor loads the page

- **GIVEN** `prefers-reduced-motion: reduce` matches
- **WHEN** the band is reached
- **THEN** the final values are rendered immediately with no animation frame loop

### Requirement 5: Feed band (masonry)

The app SHALL render five invented posts in a one-column list that becomes a **two-column masonry** at
`sm`, each post an article with initials avatar, author, the circle it was posted to, a timestamp, an
optional `Photo`/`Poll` badge, body copy, an optional 4:3 image, and a footer with a heart count and a
comment count. The band SHALL state that the feed is chronological.

#### Scenario: Visitor reads the feed

- **GIVEN** the feed band is in view
- **WHEN** the visitor counts the posts
- **THEN** exactly five articles render in the reference order (Léa Moreau / Sunday Climbers / `2h` /
  `Photo` / 24 / 7; Idris Bello / Flat 3B / `5h` / 5 / 11; Hana Petrova / Book Club / `Yesterday` /
  `Poll` / 18 / 22; Marcus Reid / Sunday Climbers / `Yesterday` / 12 / 4; Nour Haddad /
  Extended Family / `2d` / `Photo` / 63 / 29)
- **AND** every article names its circle inside its meta line, and no post is labelled public

#### Scenario: Visitor reads a post image

- **GIVEN** a post carries an image
- **WHEN** the image is read by assistive technology
- **THEN** it is either described or marked decorative (`alt=""`), matching the reference's
  empty-alt post images
- **AND** the image is a deterministic placeholder, never the source photograph

### Requirement 6: Circles band

The app SHALL render six circle cards in one column, two at `sm` and three at `lg`, each with a 128 px
image, a white `Private` or `Invite only` pill over it, the circle name, a blurb, and a hairline footer
pairing the member count with an activity string.

#### Scenario: Visitor browses the circles

- **GIVEN** the circles band is in view
- **WHEN** the visitor reads the cards
- **THEN** six cards render in the reference order — Sunday Climbers (Private, 6 members, Active
  today), Flat 3B (Private, 4, Active today), Book Club (Invite only, 12, Active this week),
  Extended Family (Private, 31, Active today), Allotment Plot 14 (Invite only, 8, Active this week),
  Old Course Mates (Private, 17, Active this month)
- **AND** each card's image zooms subtly on hover without moving its captions

#### Scenario: Visitor activates a card

- **GIVEN** a card is focused
- **WHEN** the visitor presses `Enter`
- **THEN** the card's link resolves to an id that exists on the page
- **AND** the whole card is one keyboard-reachable target, not a nested-button trap

### Requirement 7: People band

The app SHALL render four member cards in one column, two at `sm` and four at `lg`, each with a 64 px
gradient initials avatar, name, `@handle`, blurb, circle chips, an "In N circles with you" line and a
full-width `Follow` button.

#### Scenario: Visitor reads a member card

- **GIVEN** the people band is in view
- **WHEN** the visitor reads the first card
- **THEN** it shows `LM`, `Léa Moreau`, `@lea`, the chips `Sunday Climbers` and `Book Club`,
  `In 2 circles with you`, and a `Follow` control
- **AND** no follower count, friend count or popularity number appears anywhere in the card

#### Scenario: Visitor follows a member

- **GIVEN** a `Follow` button is idle
- **WHEN** the visitor activates it
- **THEN** it reports its changed state (`Following`) without navigating or posting to the network
- **AND** activating it again returns it to `Follow`

### Requirement 8: Privacy band

The app SHALL render six privacy defaults in a one-column list that becomes two at `sm`, each with a
static switch glyph whose accessible name mirrors the status line, a title, an explanation, and a status
line (`On by default`, `Permanently off`, `Off by default`, `Always available`), followed by a bordered
call-out explaining why no targeted advertising exists.

#### Scenario: Visitor audits the defaults

- **GIVEN** the privacy band is in view
- **WHEN** the visitor reads the six items
- **THEN** they appear in the reference order — Posts default to one circle, No cross-circle
  visibility, Screenshots are not blocked they are logged, Search engine indexing, Read receipts,
  Export everything any time
- **AND** the status labels are `On by default`, `On by default`, `On by default`, `Permanently off`,
  `Off by default`, `Always available`

#### Scenario: Assistive technology reads a switch

- **GIVEN** an item's switch glyph is decorative state, not a control
- **WHEN** it is read
- **THEN** it exposes the same words as the visible status line (`On by default`), so no state is
  communicated only by colour or by knob position
- **AND** no toggle is focusable, because the reference does not let a visitor change these defaults

### Requirement 9: Pricing band with a billing switch

The app SHALL render three tiers with a `role="switch"` control that toggles monthly/yearly pricing,
rewriting each price and swapping the "billed monthly / billed annually" note. Tiers SHALL be
`Free $0`, `Member $5` (featured, `Most Popular` ribbon, 2 px brand ring) and `Family $12`, each with
five features where included items carry a brand `✓` and excluded items a grey `×`.

#### Scenario: Visitor toggles to yearly billing

- **GIVEN** the switch is off and the prices read `$0`, `$5`, `$12`
- **WHEN** the visitor activates the switch
- **THEN** it reports `aria-checked="true"` and the prices read `$0`, `$50`, `$120`
- **AND** each card's note switches from `Billed monthly` to `Billed annually ($0/year)`,
  `($50/year)`, `($120/year)`
- **AND** the switch can be returned to monthly with the same control

#### Scenario: Visitor reads the Free tier

- **GIVEN** the pricing band is in view
- **WHEN** the visitor reads the first tier
- **THEN** it lists five features in order — `Up to 3 circles`, `Unlimited posts and photos`,
  `Full privacy controls` (included) then `Unlimited circles`, `Original-quality photo storage`
  (excluded, grey `×`)
- **AND** its CTA reads `Start free`

### Requirement 10: Testimonials carousel

The app SHALL render a three-card carousel of quotations with five stars, an initial disc, a name and a
role, showing three cards at `lg`, two at `sm` and one below, with dot controls, prev/next discs from
`sm`, a 5 s autoplay and pause-on-hover.

#### Scenario: Visitor advances the carousel

- **GIVEN** three cards fill a desktop viewport
- **WHEN** the visitor activates the next control at `lg`
- **THEN** the track does not move (there is no second position) and the arrows are hidden
- **AND** below `lg` the same control advances by one card and the active dot widens

#### Scenario: Visitor reads a quote with assistive technology

- **GIVEN** a testimonial card is in view
- **WHEN** it is read
- **THEN** the five stars are exposed as one labelled rating, not five unlabelled glyphs
- **AND** the initial is `aria-hidden` and the name and role are text

### Requirement 11: FAQ band (exclusive accordion)

The app SHALL render five hairline-divided questions, each a button reporting its expanded state with a
`+` disc that rotates 45° when open. Opening a question SHALL close any other open question.

#### Scenario: Visitor opens a second question

- **GIVEN** all five rows are collapsed
- **WHEN** the visitor activates the second row
- **THEN** its answer is visible and `aria-expanded="true"`, and its icon reads `×`
- **AND** activating a third row collapses the second

#### Scenario: Visitor closes a question

- **GIVEN** a row is open
- **WHEN** the visitor activates it again
- **THEN** it collapses, its panel is removed from the accessibility tree, and the disc returns to `+`
- **AND** every row stays keyboard reachable with a visible focus ring

### Requirement 12: Closing call-out and footer

The app SHALL render a full-bleed gradient call-out (`#0284c7 → #075985`) with a white heading, one
line of copy, a white solid CTA and a 2 px white/30 outline CTA, followed by a `gray-900` footer with a
brand column, three link columns, a newsletter field, a legal bar and a dismissible cookie strip. The
footer SHALL link `https://www.componentdock.com/` labelled "Component Dock".

#### Scenario: Visitor follows the closing call-out

- **GIVEN** the call-out is in view
- **WHEN** the visitor reads it
- **THEN** the heading is `Start with one circle` and both controls are well-formed links (no `tel:`
  with spaces, no dead fragment)
- **AND** both labels meet a 4.5:1 contrast ratio against the gradient at its darkest stop

#### Scenario: Visitor subscribes to the newsletter

- **GIVEN** the footer is in view
- **WHEN** the visitor submits an empty or malformed address
- **THEN** validation blocks the submit and an inline message names the problem
- **AND** a valid address shows an inline confirmation without a page reload or a network request

#### Scenario: Visitor dismisses the cookie strip

- **GIVEN** the strip is visible after its 1.5 s delay
- **WHEN** the visitor activates `Decline` or `Accept All`
- **THEN** the strip leaves the document and does not return during the session
- **AND** the choice lives in component state, not a made-up storage key

#### Scenario: Visitor follows the marketplace credit

- **GIVEN** the footer legal bar is in view
- **WHEN** the visitor reads it
- **THEN** it renders the copyright line, `Privacy Policy`, `Terms of Service`, `Style Guide` and the
  `Component Dock` link to `https://www.componentdock.com/`
- **AND** no app file names the source design or ColorLib (provenance lives in this spec only)

### Requirement 13: Mobile action bar

The app SHALL render a fixed bottom action bar below `lg` with two equal controls: a secondary
`Call Now` (`tel:`, digits only) and a primary link into the closing call-out.

#### Scenario: Visitor on a phone reaches the bar

- **GIVEN** the viewport is below `lg`
- **WHEN** the bar is inspected
- **THEN** both controls are at least 44 px tall and the phone control is a well-formed `tel:` URI
- **AND** the bar does not overlap the footer's legal text when the page is scrolled to the end

### Requirement 14: Accessibility and provenance

The app SHALL provide one `banner`, one `main`, one `contentinfo`, exactly one `h1`, sequential
headings, labelled controls, visible focus rings (`2px #0ea5e9` on brand controls), and
`aria-expanded` / `aria-checked` states that mirror what is visible. Every animation SHALL resolve to
visible content under `prefers-reduced-motion: reduce`. No asset, stylesheet or font file SHALL be
copied from the reference.

#### Scenario: Assistive technology reads the page

- **GIVEN** the page is loaded
- **WHEN** the landmark and heading structure is read
- **THEN** exactly one `banner`, one `main`, one `contentinfo` and one `h1` exist
- **AND** the eleven band headings appear as `h2` in DOM order

#### Scenario: Reduced-motion visitor browses

- **GIVEN** `prefers-reduced-motion: reduce` matches
- **WHEN** the page renders and is scrolled end to end
- **THEN** no element is left at `opacity: 0`, nothing is translated for a reveal, the typewriter does
  not cycle, the counters show final values, and the carousel does not autoplay

## Deliberate deviations from the reference

1. **Multi-page → one page.** The preview is an eight-route Astro site (`/about`, `/blog`, `/contact`,
   `/pricing`, `/privacy`, `/terms`, `/elements`, all live). The recreation is the single landing page
   described here; those nav items point at the matching in-page bands and the closing CTA stands in
   for `/contact`.
2. **Dark mode dropped.** The source compiles a complete dark palette and a `localStorage` theme
   toggle; the recreation is light-only (house convention). The dark values are recorded above so the
   decision is reversible.
3. **Copy and identity re-branded.** Closeknit replaces the source's product name: the Montréal
   address, the `(555) 908-2277` number, the `hello@circles.social` mailbox and the logo become
   Closeknit equivalents in an invented demo city, and the wordmark is redrawn as three overlapping
   circles in `#0284c7` / `#38bdf8` / `#c026d3` (no SVG copied). Counts, band order, post list, circle
   list, member list, tier structure and the exclusive accordion are kept 1:1. The noun **circle** —
   the product's own word for a group, i.e. the band id `#circles`, the pill label `Circles` and the
   phrases "in N circles with you" / "circles created" — is retained as ordinary vocabulary; the brand
   lockup, the copyright line and every URL say **Closeknit**, never the source name as a brand.
4. **Footer "Spaces" column is source residue.** The reference's first footer column is coworking
   copy (`Hot Desk`, `Dedicated Desk`, `Private Office`, `Meeting Rooms`) pointing at a fragment
   (`#spaces`) that does not exist — clearly left over from another template, and its four links are
   4 of the page's 7 dead anchors. The recreation keeps the three-column shape but labels the first
   column `Product` and links the four bands (`Feed`, `Circles`, `People`, `Privacy`).
5. **Reference defects not reproduced.** The three social tiles (`href="#"`), the four dead
   `#spaces` links and the malformed `tel:(555) 908-2277` URI are not recreated; social tiles get real
   external hrefs with `rel="noreferrer"`, and phone links are digits-only.
6. **Pricing note arithmetic fixed.** The reference's price data is `$0/$5/$12` monthly and
   `$0/$50/$120` yearly, but its notes hard-code `$0`, `$600` and `$1440` per year — a placeholder
   contradiction (10× the yearly data). The recreation derives the note from the active yearly price,
   so the note never disagrees with the number beside it.
7. **The demo video is not embedded.** The source's `Watch Demo` opens a modal with a third-party
   YouTube iframe (`dQw4w9WgXcQ`, i.e. a joke placeholder URL, not product footage). The recreation
   keeps the modal interaction (overlay, close button, backdrop click, `Escape`, scroll lock) but
   renders a locally-drawn placeholder panel with its caption instead of an external iframe.
8. **Photography.** The reference hotlinks Unsplash images (hero, five post images, six circle images).
   The recreation uses `https://picsum.photos/seed/closeknit-<n>/<w>/<h>` — deterministic per slot —
   and the hero frame keeps its ring + `shadow-2xl` treatment.
9. **Cookie strip persistence.** The source stores `cookie-consent` in `localStorage`; the recreation
   keeps the dismissed state in component state so no test depends on a made-up storage key.
10. **Counters and typewriter honour reduced motion.** The source's scripts check reduced motion only
    for the reveal observer; the recreation extends that to the typewriter and the counters, which is
    the house rule for every animated band.

## Verification checklist

- [ ] Spec validates: `openspec validate template-closeknit --type spec` prints
      `Specification 'template-closeknit' is valid`
- [ ] `apps/closeknit` scaffolded from the simplest existing app, package renamed
      `@free-react-templates/closeknit`, `public/CNAME` = `closeknit.free.componentdock.com`, `homepage`
      = `https://closeknit.free.componentdock.com`
- [ ] Tokens: `primary` = sky ramp with `#0284c7` brand, `accent` = fuchsia with `#d946ef` heart /
      `#fae8ff` pill ground, Manrope 300–800, radii `.5/1/1.5 rem`, `shadow-soft`
      `0 4px 16px -4px #0000001a`
- [ ] Header: sticky, `white/80` + `backdrop-blur`, eight links, mobile disclosure with
      `aria-expanded`, shadow past 50 px, active nav item on scroll
- [ ] Hero: badge with ping dot, `h1` two lines with gradient span, three controls (solid, outline,
      48 px play disc), four stats, framed figure; typewriter cycles three phrases every 3 s and is
      inert under reduced motion
- [ ] Counter band: four counters animate once on view and settle on `9`, `100%`, `0`, `31 sec`
- [ ] Feed: five posts in a `columns-1 sm:columns-2` masonry with the reference order, per-post
      type badges, heart/comment counts `24/7`, `5/11`, `18/22`, `12/4`, `63/29`
- [ ] Circles: six cards with `Private` / `Invite only` pills, member counts and activity strings in
      the reference order, hover lift + image zoom
- [ ] People: four cards with gradient initials avatars, `@handle`, circle chips, `In N circles with
      you`, toggleable `Follow`
- [ ] Privacy: six items with switch glyphs whose `aria-label` matches the status line, the four
      status strings in order, and the bordered call-out paragraph
- [ ] Pricing: three tiers, `role="switch"` billing toggle rewriting `$0/$5/$12` ↔ `$0/$50/$120` and
      the notes, included `✓` vs excluded `×`, featured `Most Popular` ribbon with the 2 px ring
- [ ] Testimonials: three quotes, five stars each, carousel dots and `sm`+ arrows, 5 s autoplay paused
      on hover, no autoplay under reduced motion
- [ ] FAQ: five rows, **exclusive** expansion, `aria-expanded` toggles, disc rotates 45°
- [ ] Closing CTA: `#0284c7 → #075985` gradient with the dot grid, white solid + 2 px white/30
      outline, both labels ≥ 4.5:1
- [ ] Footer: brand column, `Product` / `Company` / `Support` columns, newsletter with validation,
      legal bar with the `Component Dock` link to `https://www.componentdock.com/`
- [ ] Mobile action bar below `lg` with a digits-only `tel:` and an in-page primary link
- [ ] Cookie strip dismisses into state; back-to-top past 300 px; scroll-progress bar; skip link
- [ ] No ColorLib / `circles.social` / source-URL string in any file under `apps/closeknit`; no copied
      SVG, font file or stylesheet; placeholder images from `picsum.photos/seed/closeknit-<n>/…`
- [ ] `grep -ril "colorlib" apps/closeknit` → empty; no app file uses the source design's name as a
      brand or links its URLs (the common noun **circle** / the `#circles` anchor is product
      vocabulary and is allowed — the brand, copyright line and CNAME all say `closeknit`)
- [ ] Row added for the design under `## App Landing Page (35)` and flipped to `[x]` with the
      bookkeeping commit (the exact line is in §Purpose)
- [ ] `npm run spec:validate`, `scripts/verify-app.sh closeknit` and the CI gate are green
