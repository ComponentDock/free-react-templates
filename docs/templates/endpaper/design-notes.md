# Endpaper — design notes (ColorLib `lantern`)

Measured 2026-10-25 against the live preview (`curl -4` + Playwright at 1440 / 1024 / 768 / 390), the
compiled sheet `_astro/Base.CtG3PydY.css` (62,940 B, `tailwindcss v4.3.3`), the behaviour bundle
`Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` (**16,233 B** — the plain base kit) and the
catalogue screenshot `lantern-template.jpg` (2400 × 1892 JPEG, 257,995 B). The spec is the authority; this
file is the working map.

**What this design is:** a documentation / help-centre landing page. Two near-black bands (`#22272d`)
bookend a run of light ones; a desaturated blue-grey does the structure and stock Tailwind **cyan** does
the signalling; Inter carries prose and **JetBrains Mono carries every number, date, count and label**.
Seven bands, one card grid, one accordion, and a search field that the reference never wired up.

## DOM skeleton (measured: header + seven bands + four fixed pieces)

```
#preloader          fixed inset-0 z-100 bg-white, 40px ring border-4 gray-200 + primary-600 head
                    → window.load → opacity 0 → remove() after 300ms
#main-content       skip-link target
#scroll-progress    fixed top-0 left-0 z-60, h-0.5 (2px) bg-primary-600, width = scroll %
HEADER              sticky top-0 z-50, 81px @1440 / 65px @390, border-b gray-200, bg-white/80 blur-lg
                    container h-16 lg:h-20 px-4 lg:px-8
                    [logo 2×img] [nav: 7 labels, gap-8, lg:flex] [moon] [“Contact support” pill]
                    + hidden lg:hidden panel (data-mobile-menu): 7 links py-3 + full-width CTA

1  #search            397  bg-primary-900, border-b primary-200, py-16 sm:py-20
      mx-auto max-w-3xl text-center
      h1 “How can we help?” (36/40, white, −0.9px) · lede (16/24, primary-300, max-w-xl)
      form[role=search][onsubmit=return false] → magnifier @left-4 · input#docsearch (704×58, r12)
                                                 · kbd ⌘K @right-4
      mt-5: “Popular:” + 5 mono pills (rate limits · webhook retries · 401 unauthorized ·
            sandbox keys · pagination)

2  #categories        985  white, py-20 sm:py-28
      max-w-2xl: eyebrow BROWSE (mono 12, accent-700) · h2 “Documentation by area” · lede
      ul.mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3  → 6 cards (392×279 @1440)
        card: rounded-xl border primary-200 bg-white p-6
              [40×40 rounded-lg primary-100 glyph] [count mono 12 primary-400]
              h3 16/600 (link overlay after:inset-0) · p 14 primary-600
              ul border-t primary-100 → 3 × (→ accent-600 + text primary-500 14)

3  #articles        1,087  bg-primary-50, py-20 sm:py-28
      max-w-2xl: MOST READ · h2 “What people open most this month” · lede
      ol.mt-12 rounded-xl border primary-200 bg-white → 6 li (flex-wrap, p-5, hover primary-50)
        [eyebrow 11 mono accent-700 · title 16/600 · “Updated … · N min read” 12 mono primary-400]
        [dl right: VIEWS / HELPFUL (10 mono uppercase) → 14 mono 600 tabular-nums, helpful accent-700]

4  #changelog       1,223  white, py-20 sm:py-28
      max-w-2xl: CHANGELOG · h2 “What changed, and when it will break you” · lede
      ol.mt-12 → 4 li (border-t primary-200, py-6, grid sm:grid-cols-[8rem_1fr] gap-8)
        [version 14 mono 600 · date 12 mono primary-400]
        [badge 10 mono 700 uppercase · h3 16/600 · p 14 primary-600]
      p.mt-6 rounded-xl border primary-200 bg-primary-50 px-5 py-4 text-sm  (policy note)

5  #support           720  bg-primary-900 text-primary-100, py-20 sm:py-28
      max-w-2xl: eyebrow accent-400 “When the docs do not answer it” · h2 white · lede primary-300
      ul.mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 → 4 cards (primary-800/60, border primary-700)
        h3 white · p 14 primary-300 flex-1 · dl border-t primary-700:
          Response / value (mono 600 accent-400) · “Best for …” (12 primary-400)
      closing p primary-300

6  #faq               820  white, py-20 lg:py-28, container
      centred max-w-3xl: pill “About these docs” (bg primary-100) · h2 · lede
      mx-auto mt-16 max-w-3xl → div.divide-y divide-gray-200 → 5 × div.py-6
        button[data-faq-toggle] (flex justify-between) → span 18/600 + 32px rounded-full gray-100 disc (+)
        div.overflow-hidden.transition-all.duration-300 style="max-height:0;opacity:0" → p 16 gray-600

7  #contact           452  gradient primary-600 → primary-800 (to bottom-right), py-20 lg:py-28
      aria-hidden decorations: 2× 256px rounded-full bg-white/10 blur-3xl · dot grid 40px @10%
      container → max-w-3xl centre: h2 48px (lg:text-5xl) · p 18 primary-100 · 2 CTAs

FOOTER               539  bg-gray-900 text-gray-300, pt-16 lg:pt-24
      grid gap-12 lg:grid-cols-12 lg:gap-8
        [lg:col-span-4] logo-light h-10 · blurb max-w-xs gray-400 · 3 social tiles 40px bg-gray-800
                        · “, Remote,” + support@lantern.dev
        [grid sm:grid-cols-3 lg:col-span-5] SPACES(4, all #spaces) · COMPANY(2) · SUPPORT(2)
        [lg:col-span-3] STAY UPDATED + form[data-newsletter-form] input + Subscribe
      legal bar mt-12 border-t gray-800 pt-8: © 2026 … · Privacy · Terms · Style Guide

#mobile-cta         fixed bottom-0 z-40 lg:hidden, p-3, 2 buttons (“Call Now” / “Book a Tour”)
#cookie-consent     fixed bottom-0 z-50, 87px, role=dialog, slides up @+1.5s
#back-to-top        fixed bottom-6 right-6 z-50, 48px rounded-full primary-600 (opacity 0 until 300px)
```

## CSS token block (verbatim for `@theme`)

```css
@theme {
  /* primary — custom blue-grey (NOT a stock Tailwind ramp). The compiled sheet stops at 900. */
  --color-primary-50:  #f6f7f8;
  --color-primary-100: #eceef0;
  --color-primary-200: #d5dade;
  --color-primary-300: #b0b9c1;
  --color-primary-400: #84919d;
  --color-primary-500: #657381;
  --color-primary-600: #505c69;
  --color-primary-700: #424b56;
  --color-primary-800: #3a4149;
  --color-primary-900: #22272d;

  /* accent — stock Tailwind cyan, used only as the signal */
  --color-accent-300: #67e8f9;
  --color-accent-400: #22d3ee;
  --color-accent-500: #06b6d4;
  --color-accent-600: #0891b2;
  --color-accent-700: #0e7490;

  /* status hues — changelog badges only */
  --color-status-breaking:   #dc2626; /* red-600 */
  --color-status-deprecated: #fbbf24; /* amber-400 */
  --color-status-deprecated-ink: #451a03; /* amber-950 */

  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", Consolas, monospace;

  /* radii actually in use: 4 (badge/kbd) · 8 (buttons) · 12 (cards) · full (pills/discs) */
  --radius-card: 0.75rem;  /* rounded-xl — category card, article card, search field, note */
  --radius-control: 0.5rem; /* rounded-lg — every button, icon square, social tile, input */
  --radius-chip: 0.25rem;   /* rounded — changelog badge, kbd */
}
```

Body/heading rules that are **not** utilities: `html{scroll-behavior:smooth}`; body inherits `#111827`
(the sheet sets no body colour); every `h2` is `tracking-tight` = `−0.025em` (measured `−0.9px` at 36px);
every eyebrow is mono, uppercase, `0.15em` (`1.8px` at 12px). `.container` caps at **1280px** with
`px-4`/`lg:px-8`, so inner content is **1216px** at 1440 and **358px** at 390.

Reduced motion: the compiled sheet has **no** `prefers-reduced-motion` block — only `base.js`'s reveal
initializer checks it. The app must own that guard (and extend it to the preloader fade).

## Section-by-section fidelity notes

1. **Header.** Height is `h-16` + 1px border = **65px** below 1024 and `lg:h-20` + 1px = **81px** above.
   The ground is `bg-white/80 backdrop-blur-lg` — so the hero band's dark colour shows through the header
   on scroll; that translucency is visible in the screenshot and is part of the design. Nav labels rest at
   `gray-600` and go `gray-900` on hover; only the active **section** label is `#111827` at weight 600.
   The CTA is `hidden … lg:inline-flex` — there is no CTA in the mobile header *row* (it lives in the
   disclosure panel and in the fixed bottom bar).
2. **The hero is the page's only dark-on-dark field.** `#22272d` ground, `#3a4149` field, `#424b56` field
   border, `#eceef0`-ish placeholder (`primary-400`). Do not "improve" the contrast by inverting them:
   the field being *lighter* than its band is the whole look. The `⌘K` chip is `#424b56` on a `#505c69`
   1 px border — nearly invisible at a glance, deliberately so.
3. **Search is inert in the reference** (`onsubmit="return false"`, no JS handler, no shortcut). The `⌘K`
   chip advertises a command palette that does not exist. This prep requires a working client-side filter
   (spec Requirement 12) rather than copying a dead control.
4. **Popular pills are navigation, not queries.** Four of the five point at `#categories` and one at
   `#articles`; they are *anchors* in the reference DOM. Keep them as anchors if you do not ship a filter;
   with the filter, clicking one should populate the field and filter (then it is honest either way).
5. **Category cards are one link, not six.** The `h3 > a` carries `after:absolute after:inset-0`, and the
   three sub-links are inside the same card but *below* the overlay — which means in the reference the
   sub-links are effectively unclickable in the DOM order they sit in unless they are stacked above the
   overlay. Reproduce the intent: the whole card is one target; if you also want the three sub-links
   clickable, raise them with `relative z-10`. Note the counts sum to **240**, which is the hero's number.
6. **The icons are text glyphs** (▲ ⌘ ⇄ ⚠ ◈ ◉). They are 18px inside a 40px `#eceef0` square. ⚠/◉ may be
   served by the emoji font on some machines (colour, wrong weight), which is why the spec prescribes
   lucide equivalents at the same size — a documented deviation, not a redesign.
7. **Most-read rows are one card with dividers**, not six cards. The card holds the radius and border; the
   rows only own `p-5` + hover. Metrics are right-aligned and `tabular-nums` — the columns must line up
   across rows even though each row has its own `dl`.
8. **Changelog is a 128px + rest grid at ≥640px.** The version/date block is a fixed 128px column, which
   is what makes the four entries align vertically. Below 640 it is one column and the badge sits under
   the date. Four statuses, four colours, no reuse.
9. **Support band reuses the hero's ground** (`#22272d`), not a new dark. Cards are `primary-800/60` —
   translucent, so the band's exact tone shows through; do not substitute an opaque `#2f353b`.
10. **FAQ mechanics**: `max-height` is set inline by JS to the panel's `scrollHeight` (measured **88px**
    for the first answer), `opacity` toggles 0/1, the disc rotates 45°, and opening one closes all others.
    There is **no** `aria-expanded` in the reference (spec Requirement 8 adds it).
11. **Closing band** is the only gradient (`to bottom right`, `#505c69 → #3a4149`) and the only place with
    decorative layers: two `blur-3xl` white/10 circles plus a 40px-pitch white dot grid at 10%. The grid is
    an inline `background-image`, not a background asset.
12. **Footer**: three link columns + brand + newsletter = a 12-column grid (4 / 5 / 3). The "Spaces"
    column is a coworking leftover pointing at a non-existent `#spaces`; the address reads ", Remote,".
    Both are defects, not design intent.
13. **Fixed chrome stacking**: progress z-60 · header z-50 · cookie z-50 · back-to-top z-50 · mobile bar
    z-40 · preloader z-100. The cookie strip sits *above* the mobile bar and overlaps it at 390px.

## Source → React adaptation table

| reference | recreation |
| --- | --- |
| Astro page + `Base.CtG3PydY.css` (tailwind v4.3.3) | Vite + React 19 + Tailwind 4; the `@theme` block above |
| `base.js` initializers on `astro:page-load` | one hook per behaviour, mounted in `useEffect` (`useReveal`, `useFaq`, `useTheme`, `useHeaderShadow`, `useScrollProgress`, `useBackToTop`, `useCookieStrip`, `useActiveSection`, `useSmoothAnchors`) |
| inline `applyTheme()` in `<head>` | the same 6-line inline script in `index.html` (prevents FOUC) + `useTheme` for the toggle |
| inline preloader `load` handler | `useEffect` on mount → 300ms fade → unmount (skip fade under reduced motion) |
| `[data-faq-toggle]` + inline `max-height` | `useFaq` with `aria-expanded`/`aria-controls`; keep `max-height` animation, not a `hidden` toggle |
| `onsubmit="return false"` on the search form | controlled `<input>` + `useDocFilter` (case-insensitive, title+body), `⌘K`/`Ctrl+K` focus, `Escape` clear |
| `form[data-newsletter-form]` (no consumer) | controlled form, `type="email" required`, inline validation + success line, no network |
| 6 text glyphs | `lucide-react` at 18px in the same 40px square |
| logo SVG with a live `<text>` | `Logo` component: SVG lantern mark + Inter 700 21px wordmark, two inks |
| `TEMPLATES.md` row (missing) | add it before the PR claims the design (spec gives the line + placement) |
| 6 inner routes (`about`, `blog`, `contact`, `terms`, `privacy`, `elements`) | in-page anchors or stubs; the recreation is one page (documented deviation 10) |

## Extra observations worth keeping (the prep's census findings)

* **309 class tokens, 0 phantom** — every class in the DOM has a rule in the compiled sheet. Anything a
  recreation renders outside that set is invented.
* **No content images.** The only `<img>` elements are three logo instances. No placeholder photography
  is needed anywhere on this page; if you add a photo you have changed the design.
* **`primary-950` does not exist** in the sheet; the ramp stops at `900: #22272d`. Do not synthesise it.
* **Two downgrades are load-bearing**: the hero field is *lighter* than its band, and the mono labels are
  *smaller* than their sans siblings. Flattening either makes the page read as a stock Tailwind blog.
* **Document height** at 1440 is 6,304px across 7 bands + header + footer — a short page by this
  catalogue's standards (Driftway is 8,288px). Keep the bands' padding exact; the page's calm comes from
  112px block padding, not from content volume.
* **Horizontal overflow at 390px is real** (401 vs 390) and comes from the footer's newsletter column
  (min-content 385px) stretching all three tracks. Fix with `min-width: 0`; do not ship the overflow.

## Screenshot analysis

`lantern-template.jpg` (2400 × 1892, 257,995 B) is a **genuine macOS browser capture** on a grey desk
ground — traffic lights, rounded title bar, soft shadow, page inset. It shows:

* the header (lantern wordmark with its cyan bulb, seven nav labels, moon, "Contact support" pill);
* the whole search hero: `#22272d` band, white `h1`, two-line lede, the 58px field with the magnifier and
  the `⌘K` chip, then the five mono pills behind a "Popular:" label;
* the **entire six-card category grid** — two rows of three, each with its glyph square, the `N articles`
  counter on the right, the title, the body and three `→` links.

It corroborates **nothing** below the grid: the most-read list, the changelog, the support band, the FAQ,
the closing band and the footer all come from the DOM + `getComputedStyle` (and from the prep's own
full-page capture at 1440).

Two things the capture settles that the CSS alone would not: the nav's "Support" label is rendered darker
than its neighbours (that is `.nav-active`, not a hover), and the six glyphs genuinely render as small
monochrome symbols in light grey squares — they are text, and their appearance depends on the visitor's
fonts.

## Sibling comparison (same 2026 Astro family — do not copy values blindly)

| | **Endpaper** (`lantern`) | Driftway (`kinetic`) | Rodline (`flowpage`) |
| --- | --- | --- | --- |
| subject | documentation / help centre | motion-design studio | (landing, prepped earlier) |
| stylesheet | `Base.CtG3PydY.css` **62,940 B** | `Base.60HYJDXP.css` **65,542 B** | sibling build |
| behaviour kit | **16,233 B** (plain base kit) | 18,404 B (motion kit) | sibling kit |
| brand | custom blue-grey `#505c69` + cyan `#22d3ee` | violet `#7c3aed` + lime `#84cc16` | — |
| type | **Inter + JetBrains Mono** (two faces, strict split) | Poppins only | — |
| ground rhythm | dark · light · light · light · dark · light · gradient | gradient · grey · grey · white · near-black · … | — |
| dark mode | **yes**, full `dark:` coverage | yes | sibling |
| bands | 7 + header + footer | 9 + header + footer | — |
| document @1440 | 6,304 px | 8,288 px | — |
| overflow @390 | **401 (defect)** | 487 (defect) | — |
| a11y gap to fix | FAQ has no `aria-expanded`; search is inert | FAQ has no `aria-expanded` | — |

The family shares the same router hash (`CYDbzu1r`) and the same kit initializer names, so behaviour can
be reused conceptually — but **the kit size differs**, and this page uses only 6 of the kit's ~14
initializers. Do not import the motion set.
