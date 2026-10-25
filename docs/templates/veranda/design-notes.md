# Veranda — Design Notes

Recreation of the ColorLib **"Commons"** community/membership design
(https://colorlib.com/wp/template/commons/, live preview
https://preview.colorlib.com/theme/commons/) as **Veranda** — React 19 + Vite + Tailwind CSS 4 +
TypeScript, `apps/veranda`.

Full requirement set: `openspec/specs/template-veranda/spec.md`. This file is the *how*: the DOM
skeleton with classes verbatim, the paste-ready token block, and the per-band fidelity notes.

## Reference set (all read 2026-10-25, `curl -4`)

| file | bytes | why it matters |
| --- | ---: | --- |
| `theme/commons/index.html` | 84,310 | the DOM: hero + counter band + 8 bands + header + footer + 4 chrome pieces |
| `_astro/Base.DWrPyb6r.css` | 63,818 | the only stylesheet — every token, every component class |
| `_astro/Base.…BLoalVWc.js` | 16,233 | the house kit (**identical hash to Coldsnap's and Circles'**): typewriter, counters, video modal, parallax, billing switch, FAQ, carousel, reveal, header shadow, menu, dark toggle, scroll-spy, smooth scroll, progress, back-to-top, cookie |
| `_astro/ClientRouter…CYDbzu1r.js` | 16,357 | Astro view transitions — no design content, ignore |
| inline `<style>` (3,912 B) | — | **Outfit** 300–800 `@font-face` pointing at `/cf-fonts/v/outfit/5.2.8/…` (the page has no other font) |
| inline `<script>` ×3 | 442 / 207 / 358 B | theme boot (`applyTheme`), JSON-LD `Organization`, preloader removal |
| `assets/img/logo.svg` · `logo-light.svg` | 500 · 500 | 168×40 wordmark: three overlapping speech marks, `#4f46e5` + `#f43f5e` (redraw, don't copy) |
| `favicon.svg` | 377 | — |
| `css/style.css`, `js/snippet.js`, `downloads/free/commons.zip`, `og-image.jpg` | 404 | no legacy sheet, no archive twin, and the OG image the page advertises is missing |

Fetches need `-4` (the host's IPv6 is banned) and a browser needs
`--host-resolver-rules=MAP preview.colorlib.com 104.26.10.149`.

## Document order

```
#preloader                    fixed z-100, 40px spinner ring
a.skip                        → #main-content
#scroll-progress              fixed h-0.5 primary-600
header[data-header]           sticky z-50, h-16 / lg:h-20, white/80 + backdrop-blur-lg
  └ nav (lg only, NINE links) + moon toggle + Join the Community (sm+) + burger (lg:hidden)
  └ div[data-mobile-menu]     hidden lg:hidden, nine links + full-width CTA
main#main-content
  ├ section (hero)            gradient primary-50 → white, 2 parallax blobs, badge, typewriter h1,
  │                           3 CTAs, 4-stat row, hero photo
  ├ section (counters)        gray-50 border-y, py-16 lg:py-20, 4 data-counter cells
  ├ section#channels          white, max-w-7xl, 6 cards (sm:2 / lg:3)
  ├ section#discussions       gray-50, max-w-5xl, head row + 5-row bordered list
  ├ section#members           white, max-w-7xl, 3 figures (md:3)
  ├ section#events            gray-50, max-w-6xl, 4 dated cards (sm:2) + calendar CTA
  ├ section#pricing           white, billing switch + 3 tiers (lg:3)
  ├ section#testimonials      gray-50, 3-slide carousel (3/2/1)
  ├ section#faq               white, 5-row exclusive accordion
  └ section#contact           gradient primary-600 → primary-800, dot grid, white CTA + ghost
footer                        gray-900, 4 blocks + newsletter + legal bar
div#mobile-cta                fixed bottom, lg:hidden, two buttons
div#cookie-consent            fixed bottom, role=dialog
button#back-to-top            fixed 48px disc
```

## Paste-ready token block (`src/index.css`)

```css
@import "tailwindcss";

@theme {
  --font-sans: "Outfit", system-ui, sans-serif;

  /* brand — Tailwind's indigo ramp, compiled literally in the reference sheet */
  --color-primary-50: #eef2ff;
  --color-primary-100: #e0e7ff;
  --color-primary-200: #c7d2fe;
  --color-primary-300: #a5b4fc;
  --color-primary-400: #818cf8;
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5; /* brand — buttons, date tiles, progress, ring on the popular tier */
  --color-primary-700: #4338ca; /* hover, eyebrow text, closing-band button label */
  --color-primary-800: #3730a3; /* closing-band gradient end */
  --color-primary-900: #312e81;

  /* counter-colour — rose; keeps six cards from reading as one hue */
  --color-accent-50: #fff1f2;
  --color-accent-100: #ffe4e6;
  --color-accent-500: #f43f5e;
  --color-accent-700: #be123c;

  --radius-lg: 0.5rem;   /* buttons, inputs */
  --radius-xl: 0.75rem;  /* event date tile, channel glyph tile */
  --radius-2xl: 1rem;    /* every card, tier, list container, carousel slide, hero figure */

  --shadow-soft: 0 4px 16px -4px #0000001a;
}

@layer components {
  .btn {
    @apply inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium
           transition-all;
  }
  .btn-primary {
    @apply btn bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700;
  }
  .btn-secondary {
    @apply btn border border-gray-300 bg-white text-gray-700 hover:bg-gray-50;
  }
  .nav-active {
    @apply font-semibold text-gray-900;
  }
}

@utility text-gradient {
  background-image: linear-gradient(to right in oklab, var(--color-primary-600), var(--color-primary-400));
  background-clip: text;
  color: transparent;
}

@keyframes hero-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%      { transform: translate(30px, -20px) scale(1.05); }
  66%      { transform: translate(-20px, 15px) scale(0.95); }
}
```

Two details worth not "simplifying":
* `.nav-active` in the reference is a plain rule (`color:#111827; font-weight:600`), applied by the
  kit's IntersectionObserver — it is not a `:hover` or `aria-current` style. Keep a real state hook
  (`aria-current="true"`) *and* the class, so tests can assert both.
* `.text-gradient` needs `color: transparent` **and** `background-clip: text`; without the pair the
  typed phrase disappears. Keep the phrase in the DOM as text (never an image) for a11y.

## DOM skeleton (abridged, classes verbatim)

### Header

```html
<header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg" data-header>
  <div class="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20 lg:px-8">
    <a href="/" class="flex items-center gap-2"><!-- redrawn wordmark, h-8 lg:h-10 --></a>
    <nav class="hidden lg:flex lg:items-center lg:gap-8" aria-label="Main navigation">
      <a href="#members" data-nav-link="members" class="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">About</a>
      <a href="#channels" data-nav-link="channels" class="…">Channels</a>
      <a href="#discussions" data-nav-link="discussions" class="…">Discussions</a>
      <a href="#events" data-nav-link="events" class="…">Events</a>
      <a href="#members" data-nav-link="members" class="…">Members</a>
      <a href="#pricing" class="…">Membership</a>
      <a href="#faq" class="…">Guidelines</a>
      <a href="#discussions" class="…">Blog</a>
      <a href="#contact" class="…">Contact</a>
    </nav>
    <div class="flex items-center gap-4">
      <a href="#pricing" class="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 sm:inline-flex">Join the Community</a>
      <button type="button" data-mobile-toggle class="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden" aria-label="Open menu" aria-expanded="false"><!-- burger --></button>
    </div>
  </div>
  <div class="hidden lg:hidden" data-mobile-menu>
    <nav class="border-t border-gray-200 bg-white px-4 py-4">
      <a href="#channels" class="block py-3 text-base font-medium text-gray-900">Channels</a><!-- ×8 -->
      <div class="mt-4 border-t border-gray-200 pt-4">
        <a href="#pricing" class="block w-full rounded-lg bg-primary-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-700">Join the Community</a>
      </div>
    </nav>
  </div>
</header>
```

The reference ships a `data-dark-toggle` moon button; the recreation drops it (spec Deviation 2), so
the header cluster is nav → CTA → burger.

### Hero

```html
<section class="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
  <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div class="animate-hero-float absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-200/50 blur-3xl" data-parallax="0.15"></div>
    <div class="animate-hero-float-reverse absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary-100/40 blur-3xl" data-parallax="-0.1"></div>
  </div>
  <div class="container mx-auto px-4 py-20 lg:px-8 lg:py-32">
    <div class="mx-auto max-w-4xl text-center">
      <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
        </span>
        14,000 builders, one front porch
      </div>
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        Every good idea starts <br>
        <span class="text-gradient" data-typewriter='["as a half-formed question","with someone else&apos;s reply"]'>as a conversation</span>
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">A home for people who think out loud — join a channel, ask the awkward question, get an answer from someone who has already solved it.</p>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="#pricing" class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30">Join the Community <!-- arrow --></a>
        <a href="#discussions" class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50">Browse Discussions</a>
        <button type="button" data-video-modal="/demo.mp4" class="inline-flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-primary-600">
          <span class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25"><!-- play --></span>
          Watch Demo
        </button>
      </div>
      <div class="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4">
        <div class="text-center"><div class="text-3xl font-bold text-gray-900 lg:text-4xl">14.2k</div><div class="mt-1 text-sm text-gray-600">Members</div></div>
        <!-- 38 Channels · 1.4k Posts a week · 92% Questions answered -->
      </div>
    </div>
    <div class="mt-16 lg:mt-24">
      <div class="relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200">
        <img src="https://picsum.photos/seed/veranda-1/1600/900" alt="Members of the community talking at a meetup" class="h-auto w-full object-cover" loading="eager">
      </div>
    </div>
  </div>
</section>
```

### Counter band

```html
<section class="border-y border-gray-200 bg-gray-50 py-16 lg:py-20">
  <div class="container mx-auto px-4 lg:px-8">
    <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
      <div class="text-center" data-animate="fade-in-up" data-delay="0">
        <div class="text-4xl font-bold text-primary-600 lg:text-5xl"><span data-counter="14,200">14,200</span></div>
        <div class="mt-2 text-sm font-medium text-gray-600">Active members</div>
      </div>
      <!-- 92% Questions answered · < 3h Median first reply · 240 Events last year -->
    </div>
  </div>
</section>
```

Ship the **final value** in the span, not `0` (the reference ships `0`; a no-JS visitor would read
zeros — the recreation's fallback is the truth, and the counter simply animates from 0 to it).

### Channel card

```html
<li class="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-lg">
  <div class="flex items-start gap-4">
    <span class="flex h-11 w-11 flex-none items-center justify-center rounded-xl text-lg font-semibold bg-primary-100 text-primary-700" aria-hidden="true">◇</span>
    <div class="min-w-0">
      <h3 class="truncate text-base font-semibold"><a href="#channels">Design Critique</a></h3>
      <p class="mt-1 text-sm leading-relaxed text-gray-600">Post work in progress, get structured feedback within a day. No drive-by opinions.</p>
    </div>
  </div>
  <dl class="mt-5 flex gap-6 border-t border-gray-100 pt-4 text-sm">
    <div><dt class="sr-only">Members</dt><dd class="font-semibold tabular-nums">4,120<span class="ml-1 font-normal text-gray-500">members</span></dd></div>
    <div><dt class="sr-only">Posts this week</dt><dd class="font-semibold tabular-nums">180<span class="ml-1 font-normal text-gray-500">posts/wk</span></dd></div>
  </dl>
</li>
```

Glyph + colour rhythm, in order: `◇` primary · `◈` accent · `?` primary · `◆` neutral
(`bg-gray-100 text-gray-700`) · `❋` accent · `◉` neutral. The `?` is really a text glyph in the
reference, not an icon — use a lucide `CircleHelp` if a glyph renders inconsistently, and keep the
tile size/colour identical.

### Discussion row

```html
<li class="relative flex gap-4 p-5 sm:p-6 border-t border-gray-100">
  <div class="flex flex-col items-center gap-1 pt-1" aria-hidden="true">
    <!-- triangle --><span class="text-sm font-semibold tabular-nums">128</span>
  </div>
  <div class="min-w-0 flex-1">
    <div class="flex flex-wrap items-center gap-2">
      <span class="rounded-md bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700">Ask the Room</span>
      <span class="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700"><!-- tick -->Answered</span>
    </div>
    <h3 class="mt-2 text-base font-semibold leading-snug"><a href="#discussions" class="after:absolute after:inset-0 hover:text-primary-600">How do you price a redesign when the client has no brief?</a></h3>
    <div class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
      <span class="inline-flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-[10px] font-semibold text-gray-700">NF</span> Nadia Ferreira</span>
      <span aria-hidden="true">·</span><span>34 replies</span>
      <span aria-hidden="true">·</span><time>2 hours ago</time>
    </div>
  </div>
</li>
```

First row has no `border-t`; all five carry the `after:absolute after:inset-0` title link, so the
whole row is clickable — keep that, and keep the vote column `aria-hidden` with the count repeated in
the row's accessible name.

### Pricing tier (the switch is the fiddly part)

```html
<div class="mt-10 flex items-center justify-center gap-4">
  <span class="text-sm font-medium text-gray-900" data-billing-label="monthly">Monthly</span>
  <button type="button" class="relative h-7 w-14 cursor-pointer rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          data-billing-toggle role="switch" aria-checked="false" aria-label="Toggle annual billing">
    <span class="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200" data-billing-knob></span>
  </button>
  <span class="text-sm font-medium text-gray-500" data-billing-label="yearly">Yearly
    <span class="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Save 20%</span>
  </span>
</div>

<div class="relative rounded-2xl p-8 shadow-soft ring-2 ring-primary-600 bg-white">
  <div class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white">Most Popular</div>
  <div class="text-center"><h3 class="text-xl font-semibold text-gray-900">Member</h3><p class="mt-2 text-sm text-gray-600">Post, reply, vote and join every live session.</p></div>
  <div class="mt-6 text-center">
    <div class="flex items-baseline justify-center gap-1">
      <span class="text-5xl font-bold text-gray-900" data-price-monthly="9" data-price-yearly="90">$9</span>
      <span class="text-gray-600">/month</span>
    </div>
    <p class="mt-1 text-sm text-gray-500">
      <span data-show-monthly>Billed monthly</span>
      <span data-show-yearly class="hidden">Billed annually ($90/year)</span>
    </p>
  </div>
  <ul class="mt-8 space-y-4"><!-- five li: tick svg text-primary-600 + label gray-700 --></ul>
  <div class="mt-8"><a href="#contact" class="block w-full rounded-lg py-3 text-center font-medium bg-primary-600 text-white hover:bg-primary-700">Join the Community</a></div>
</div>
```

Tier 1 (`Reader`, `bg-gray-50`, `bg-gray-200` CTA) strikes two features through with a `gray-400`
cross and `text-gray-500 text-gray-600` label — that contrast dip is deliberate, not a bug. Tier 3
(`Patron`) is `bg-primary-50` with a `bg-primary-100 text-primary-700` CTA.

### Closing band

```html
<section id="contact" class="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28">
  <div class="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
    <div class="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
  </div>
  <div class="container relative z-10 mx-auto px-4 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">The room is already talking</h2>
      <p class="mx-auto mt-6 max-w-xl text-lg text-primary-100">Read anything you like for free. When you want to join in, membership is nine dollars a month.</p>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="#pricing" class="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-700 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl">Join the Community <!-- arrow --></a>
        <a href="#discussions" class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-all hover:border-white hover:bg-white/10"><!-- phone --> Browse discussions first</a>
      </div>
    </div>
  </div>
</section>
```

## Per-band fidelity notes

**Hero.** Vertical rhythm is `py-20 lg:py-32` — the deepest padding on the page. The badge, `h1`,
lede, CTA row and stat row carry `data-animate="fade-in-up"` with delays 0/100/200/300/400/500, so the
hero assembles on load; the hero figure is the last element (delay 500). The `h1` is centred with a
hard `<br>`; do not let the gradient span wrap into three lines at `lg` — the reference measures
two.

**Counters.** `data-counter` values are the *literal strings* `14,200`, `92%`, `< 3h`, `240`. The
kit's formatter strips non-numerics, animates the number, then writes the literal on the final frame.
If you re-implement it, replicate both halves, or `< 3h` will render as `3`.

**Channels.** The band's head is centred (`max-w-2xl`), unlike discussions' left-aligned head. Card
hover is `-translate-y-0.5` + border + shadow — no scale. The `dl` row is `flex gap-6` (not a grid),
with `sr-only` `dt`s; keep them, they are the only accessible names for the two numbers.

**Discussions.** `max-w-5xl` and a single bordered container: the five rows are `<li>`s inside one
`rounded-2xl border` list, separators on rows 2–5 only. The head is a `flex flex-wrap items-end
justify-between` row so the `See all discussions` button sits on the head's baseline at wide widths
and wraps under it on narrow ones.

**Members.** `<figure>`/`<blockquote>`/`<figcaption>` semantics matter — the quote is a real
blockquote, and the badge pill is `accent-50`/`accent-700` (`#fff1f2`/`#be123c`), the only place the
rose ramp carries text on light.

**Events.** Date tile is `h-16 w-16` `rounded-xl` indigo with the day at `text-xl font-bold` over a
`text-[10px]` uppercase month. Cards are `sm:grid-cols-2` (two rows of two) — not three-across.
The seat chip is `bg-gray-100 text-gray-600`, and it is copy, not a control.

**Pricing.** The switch, not the cards, is the interactive part; the tiers are static. Two facts to
keep: tier 2's `ring-2 ring-primary-600` replaces its border (the reference has no `border` on it),
and the `Most Popular` pill is absolutely positioned at `-top-4` so it straddles the card edge.
Prices are `data-` driven; the notes must agree with them (spec Deviation 5 fixes the reference's 10×
error).

**Testimonials.** 3 slides, `flex-shrink-0 px-3` slides inside a `flex transition-transform
duration-500 ease-out` track, dots container empty in markup (the kit fills it). Star colour is
`primary-400` — lighter than every other brand use on the page.

**FAQ.** `divide-y divide-gray-200` over `py-6` rows, each row a full-width button, the plus disc
`h-8 w-8 rounded-full bg-gray-100 text-gray-600` and the panel starting `max-height:0; opacity:0`.
Exclusive behaviour is part of the kit, not of the markup.

**Footer.** 12-col grid: brand `lg:col-span-4`, the three link columns `lg:col-span-5` in an inner
`sm:grid-cols-3`, newsletter `lg:col-span-3`. Social tiles are `rounded-lg bg-gray-800 p-2.5` — the
only `gray-800` surfaces on the page. Bottom bar is `border-t border-gray-800 py-8`.

## Traps found while measuring (do not re-derive)

1. **Two ramps, one brand.** `primary` is indigo, `accent` is rose. Six of the channel glyph tiles
   and the member avatars use `accent`; if you collapse the palette to one hue the page reads flat.
2. **`primary-200/300/800/900` look unused in a naive grep** because they only appear in `dark:`
   rules (`:is(.dark *)`), the hero blob's `/30` and the closing gradient. They exist — keep the
   stops.
3. **`text-gradient` + typewriter together** is the only place the page alters text fill; the span
   must stay real text (JS swaps `textContent`, so an image or pseudo-element would break it).
4. **The counter's final write is a literal**, which is how `< 3h` survives — see §Counters.
5. **The billing note's parenthetical is copy, not state**, in the reference, which is exactly why it
   drifted to `$1080`/`$3480`. Derive both the price and the note from one table.
6. **`#spaces` does not exist**; four footer links point at it. Do not recreate the broken anchor.
7. **Two different phone numbers ship** (`(555) 214-0980` in the footer, `5556789012` in the mobile
   bar, and the footer's own `href` is the malformed `tel:(555) 214-0980`). One number, one format.
8. **The sticky mobile bar and the cookie strip occupy the same `bottom-0`.** Whatever z-order you
   pick, only one may be visible.
9. **`og-image.jpg` is a 404 on the reference** while the page advertises it in `og:image`.
10. **The catalogue page describes a different product** (working groups, directory, named leads)
    than the preview renders. The DOM wins; the spec's band list is the authority.
