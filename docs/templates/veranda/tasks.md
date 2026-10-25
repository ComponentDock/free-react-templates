# Veranda — Tasks

Recreation of ColorLib **"Commons"** (https://colorlib.com/wp/template/commons/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Veranda** (`apps/veranda`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `commons` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under
> `## App Landing Page` (heading count `35` → `36`) *before* opening the PR — the exact line is in
> the spec, §Purpose.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, 84,310 B, `<title>` *Home | Commons*,
      sha256 `7faa41c1…`)
- [x] Token sheet measured (`_astro/Base.DWrPyb6r.css`, 63,818 B, sha256 `d94fae08…`) — brand
      **`#4f46e5`** on the Tailwind indigo ramp (`#eef2ff` → `#312e81`), counter-colour `accent` rose
      `#fff1f2` / `#ffe4e6` / `#f43f5e` / `#be123c`, neutrals `#f9fafb` → `#111827`, status
      `emerald-50/700` + `green-100/700`, radii `.5/1/1.5 rem`, `shadow-soft` `0 4px 16px -4px
      #0000001a`, `.text-gradient` `#4f46e5 → #818cf8`
- [x] Class census: **391** distinct class tokens, **390** compile, the one miss (`group`) is a
      Tailwind marker — **no phantom-class delta**. Two escaping traps recorded in the spec
      (`sm\:` / `\/` escapes; `dark:` compiles as `:is(.dark *)`, which is where `primary-200/300/
      800/900` live)
- [x] Fonts identified: **Outfit 300–800 only** (one family for the whole page), delivered from the
      preview's `/cf-fonts/v/outfit/5.2.8/…` inside a 3,912 B inline `<style>` (so grepping the sheet
      for `@font-face` finds nothing); the Google Fonts URL is the drop-in replacement
- [x] Structure extracted from the DOM: preloader + skip link + progress bar + sticky header (+
      mobile panel) + **hero** + counter band + `#channels` + `#discussions` + `#members` +
      `#events` + `#pricing` + `#testimonials` + `#faq` + `#contact` + footer + sticky mobile CTA +
      cookie strip + back-to-top; 6 channels, 5 threads, 3 spotlight members, 4 events, 3 tiers,
      3 testimonials, 5 FAQs
- [x] Behaviour read from the kit script (`Base.…BLoalVWc.js`, 16,233 B, sha256 `e26cc055…` —
      **byte-identical to the Coldsnap and Circles reads**) plus the page's three inline scripts:
      typewriter (3 s, JSON phrase list), counters (IO `threshold .5`, 2,000 ms cubic ease-out,
      literal `< 3h` land), video modal (injected overlay, `?autoplay=1`, Esc/backdrop close),
      parallax blobs (`0.15` / `-0.1`), billing switch (`role="switch"`, 28 px knob, price + note
      swap), exclusive FAQ, carousel (3/2/1, 5 s, dots + arrows), reveal, header shadow at 50 px,
      mobile disclosure, dark toggle, scroll-spy, smooth-scroll offset, progress, back-to-top, cookie
- [x] Link census: **68** anchors — 3 dead `#` (social tiles), **4 × `#spaces` broken** (no such id),
      1 malformed `tel:(555) 214-0980`, a second contradicting `tel:5556789012` in the mobile bar;
      **all 8 inner routes live** (`/about` 29,994 B, `/pricing` 39,913 B, `/guidelines` 29,615 B,
      `/blog` 36,180 B, `/contact` 28,995 B, `/privacy` 30,980 B, `/terms` 29,719 B, `/elements`
      49,534 B)
- [x] No archive twin: `css/style.css`, `js/snippet.js`, `downloads/free/commons.zip` and the
      referenced `og-image.jpg` all **404**
- [x] Screenshot read (`commons-template.jpg`, real JPEG 309,252 B, 2400×1892, macOS frame — header +
      whole hero + counter row + hero figure only)
- [x] Name check: `veranda` free in `apps/`, `openspec/specs/`, `docs/templates/`,
      `git grep -il veranda origin/main` → empty; `wp/template/veranda/`, `theme/veranda/`,
      `theme/bootstrap/veranda/`, `theme/bb/veranda/` → **404**
- [x] Spec: `openspec/specs/template-veranda/spec.md`
- [x] Design notes: `docs/templates/veranda/design-notes.md`

## Scaffold

- [ ] Copy the single-app scaffold (`package.json`, `vite.config.ts` with `injectUiSource()`,
      `vitest.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/test/setup.ts`,
      `public/CNAME`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
- [ ] `homepage` = `https://veranda.free.componentdock.com`, `public/CNAME` = same host
- [ ] `index.html`: `<title>Veranda — a moderated community for people who build in public</title>`,
      meta description, OG tags, `<link>` for **Outfit 300–800**, inline SVG favicon
- [ ] `src/index.css`: the `@theme` block from `design-notes.md` (indigo `primary` 50–900, rose
      `accent` 50/100/500/700, `shadow-soft`), `.btn` / `.btn-primary` / `.btn-secondary`,
      `.nav-active`, `.text-gradient`, the `hero-float` keyframes + `.animate-hero-float[-reverse]`
- [ ] Draw the wordmark inline (three overlapping speech marks + `VERANDA`) — do not copy `logo.svg`

## Sections (tests first, reference order)

- [ ] Chrome: skip link → `#main-content`, 2 px scroll-progress bar, back-to-top disc past 300 px
      (48 px, `primary-600`, `shadow-primary-600/25`), preloader never blocks the page, cookie strip
      as `role="dialog"` dismissed into state, **sticky mobile bar hidden while the strip is open**
- [ ] Header: sticky `white/80` + `backdrop-blur-lg`, `border-b gray-200`, 64/80 px, **nine** links at
      `lg`, `Join the Community` from `sm`, hamburger below `lg` with `aria-expanded` + glyph swap,
      `shadow-lg` past 50 px, scroll-spy `.nav-active` on channels/discussions/members/events
- [ ] Hero: `from-primary-50 to-white`, two `blur-3xl` blobs (`primary-200/50` at `-top-40`
      `data-parallax="0.15"`, `primary-100/40` top-right `-0.1`) with the 8 s / 10 s float
      animations; pulsing-dot badge pill; `h1` `Every good idea starts` + `<br>` +
      **`.text-gradient` typewriter span** (3 phrases, 3 s, first phrase in the markup, static under
      reduced motion); lede `text-lg sm:text-xl`; solid `Join the Community →` + ghost `Browse
      Discussions` + 48 px play disc `Watch Demo`; four-stat row over `border-t pt-10`;
      `rounded-2xl shadow-2xl ring-1 ring-gray-200` photo (`picsum.photos/seed/veranda-1/1600/900`)
- [ ] Video modal: 16:9 frame in a `bg-black/80 backdrop-blur` overlay, close button above the
      top-right corner, X / backdrop / `Escape`, focus restored to the trigger
- [ ] Counter band: `gray-50` + `border-y`, `py-16 lg:py-20`, `grid-cols-2 sm:grid-cols-4`, the four
      `data-counter` values (`14,200`, `92%`, `< 3h`, `240`) animating over 2,000 ms at 50 %
      visibility, `tabular-nums`, literal land for `< 3h`
- [ ] Channels: `max-w-7xl`, centred eyebrow `Channels`, `h2 Find the room where your problem is
      normal`, six `rounded-2xl border p-6` cards in the exact order (glyph + primary/accent/neutral
      tile rhythm), blurb, `members` / `posts/wk` footer, hover lift + `hover:border-primary-300`
- [ ] Discussions: `gray-50`, `max-w-5xl`, left head with accent `Live now` pill + `See all
      discussions` (`btn-secondary` right), one `rounded-2xl border` list of five rows (vote,
      channel tag, `Answered` chip on rows 1/3/5, title, initials disc + name + replies + relative
      time), `border-t border-gray-100` separators
- [ ] Members: `max-w-7xl`, three `<figure>` cards (`md:grid-cols-3`), 48 px
      `from-primary-500 to-accent-500` initials disc, quote, `border-t` footer with count + badge
- [ ] Events: `gray-50`, `max-w-6xl`, four cards (`sm:grid-cols-2`) with 64 px `rounded-xl
      bg-primary-600` date tiles, event-type label, host line, seat chip; `.btn-primary` `View the
      full calendar`
- [ ] Pricing: centred head + billing switch (`role="switch"`, `aria-checked`, 28 px knob,
      track `gray-200 → primary-600`, label colour swap, green `Save 20%`); three tiers
      (`lg:grid-cols-3`) — `Reader` `gray-50` + two struck features, `Member` white +
      `ring-2 ring-primary-600` + `Most Popular` pill, `Patron` `primary-50`; prices `0 / 9 / 29`
      monthly, `0 / 90 / 290` yearly with **corrected** notes; full-width CTAs
- [ ] Testimonials: `gray-50`, filled `primary-100` eyebrow pill, 3 slides (five `primary-400` stars,
      `text-lg font-medium` quote, 48 px `primary-100` initial disc), 3/2/1 per view, `w-8` active
      dot, arrows only when paged, 5 s autoplay paused on hover, off under reduced motion
- [ ] FAQ: white, five rows, **exclusive**, `aria-expanded`/`aria-controls`, icon rotates 45°, panel
      starts at `max-height: 0; opacity: 0`
- [ ] Closing band: `bg-gradient-to-br from-primary-600 to-primary-800`, two `bg-white/10 blur-3xl`
      discs + 40 px radial dot grid at `opacity-10`, `h2` 36→48 px, `text-primary-100` lede, white
      solid CTA (`text-primary-700`) + `border-2 border-white/30` ghost
- [ ] Footer: `gray-900`, brand block (light wordmark, blurb, three `rounded-lg bg-gray-800 p-2.5`
      social tiles with real hrefs, address / phone / `hello@veranda.example`), four channel links
      (**replace the `Spaces` coworking column**), `Company`, `Support`, `Stay Updated` newsletter
      (`type="email"`, `required`, confirmation without navigation), legal bar with **`Component
      Dock` → https://www.componentdock.com/**
- [ ] Sticky mobile bar: `lg:hidden`, two flex-1 buttons with community labels, consistent phone
      number, never stacked under the cookie strip

## Polish and gates

- [ ] Contrast pass: `primary-600`/`primary-700` only on white or `primary-50`; white on
      `primary-600`/`primary-700` fine at label sizes; `text-primary-100` lede on the closing band
      verified ≥ 4.5:1; `gray-500` meta text ≥ 4.5:1 on `gray-50`
- [ ] Reduced-motion pass: typewriter static, reveal skipped, carousel autoplay off, float
      animations and parallax inert — but counters still *deliver the number* (information, not
      decoration)
- [ ] Keyboard pass: skip link, mobile disclosure, billing switch, carousel arrows + dots, video
      modal focus trap, all five FAQ rows, back-to-top
- [ ] Numeric pass: every visible figure matches the reference (`14.2k`, `38`, `1.4k`, `92%`,
      `14,200`, `240`, 6 channel counts, 5 vote/reply counts, 3 answer counts, 4 seat chips,
      `$0/$9/$29` and `$0/$90/$290`) and the yearly notes agree with the switch
- [ ] No `colorlib` / source brand / `hello@commons.community` / copied SVG or stylesheet anywhere in
      `apps/veranda`
- [ ] `npm run spec:validate` and `scripts/verify-app.sh veranda` green (typecheck, lint, 100 %
      coverage, build)

## Deploy

- [ ] Row added under `## App Landing Page` with the heading bumped to `(36)` (the line is in the
      spec, §Purpose), flipped to `[x]` in the same bookkeeping commit that writes the surge URL
- [ ] PR titled `feat: Veranda — community membership template (ColorLib Commons)`, merged
      immediately (`gh pr merge --squash --delete-branch`)
- [ ] Deploy `veranda.free.componentdock.com`, then verify with the house probe:
      HTTPS 200 + `ssl_verify_result=0`
