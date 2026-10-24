# Zenith — Design Notes

Recreation of ColorLib **"Saasify"** (`https://colorlib.com/wp/template/saasify/`, live demo
`https://preview.colorlib.com/theme/saasify/`) as **Zenith** — a four-page SaaS product site shipped
as one landing page.
**Source slug:** `saasify`

Shipped: https://zenith.free.componentdock.com
Spec: `openspec/specs/template-zenith/spec.md` (rewritten 2026-10-24; it previously recorded a
ColorLib button gallery and that gallery's bands — see `docs/spec-row-mismatch.md`).

Row note: `TEMPLATES.md` lines **158** (`## Astro (48)`) and **2929** (`## Tailwind Css (48)`) both
list "Saasify" and both link `zenith` — the same design listed in two categories, so there is no
competing claim and no rename (the name is not the slug's, so rule 5 is satisfied).

## Reference measurements (2026-10-24, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/saasify/` page | 59,642 | `426635e5c1d58d5870b87cacb501b6d327452c2040e7d28e3e657ab658dc565e` (page bodies are request-unstable; quoted for this fetch) |
| `theme/saasify/_astro/Base.D0NGrHY1.css` | 46,802 | `4c1d7758f6863ea2f7fc2431469e634e0946f4a0293c4a0cc48fa9684d38617e` |
| screenshot `saasify-template-1770211006733.jpg` | 52,835 | `be6d8dbb5215934f89b3034abc947c757e1d1bdbe45c5a2182ab0b2ea27ad5eb` (AVIF 2400 × 1892) |

- Page title as served: `Home | SaaSify`; `rebuilt: False`
  (`measure-reference-tokens.py --slug saasify`) — the demo is the original build, so a mismatch with
  the shipped app is drift, not a redesign.
- **Astro build, one hashed stylesheet.** There is no `css/style.css` and no `main.js`; the demo is a
  component-built Astro site whose entire CSS is `_astro/Base.D0NGrHY1.css`. Tokens are therefore
  Tailwind utility outputs (`.bg-primary-600{background-color:#7c3aed}`), not author custom
  properties — grep the compiled rules, not `@theme`.
- **34 anchors**: 6 dead `#`, 5 `#pricing`, 4 `contact/`, 3 `#features`, 3 `docs/`, 3 `blog/`,
  3 `help/`, 2 demo root, 2 `#testimonials`, 2 more `#pricing`, 1 `#demo`. Because the build is
  multi-page, inner links are absolute (`/theme/saasify/docs/`), not relative files.
- **Inner pages are LIVE**: `contact/` 37,085 B ("Contact Us"), `docs/` 39,261 B ("Documentation"),
  `blog/` 28,817 B ("Blog"), `help/` 42,193 B ("Help Center"). Each answers `308` → trailing slash,
  then `200`. The single-page recreation keeps only the landing bands.
- **Markup on the landing page**: 5 `<section>`s, 1 `h1`, 4 `h2`, 13 `h3`, 1 `<form>` with 1
  `<input>` (the footer newsletter), 50 inline `<svg>` icons, 32 `data-animate` hooks
  (`fade-in-up` + `data-delay`), and a class-based dark mode: `data-dark-toggle` in the navbar,
  `data-mobile-toggle` for the ≤`lg` panel, and an inline pre-paint script that reads `localStorage`
  so the theme does not flash.
- **0 `@font-face` in the sheet**; the host injects `/cf-fonts/` for **Inter 5.2.8**, weights
  300–800 across latin / latin-ext / greek / greek-ext / cyrillic / cyrillic-ext / vietnamese,
  `font-display: swap`. No Google Fonts `<link>` on the page. The sheet declares the family once:
  `Inter, system-ui, sans-serif`.
- **No archive**: `downloads/free/saasify.zip` is **404** (9 B) — the archive families are the
  `bootstrap-*` demo families; business themes ship none.

## Visual design (screenshot + live DOM)

The screenshot stops at the fold, and the fold is the whole argument: a white 80%-opaque bar with a
`backdrop-blur-lg` sits on a page that is almost white, and the only saturated thing above the
dashboard is one filled violet button. The wordmark is a violet rounded square holding a white check,
then "SaaSify" in 18px/700. Nav items are `text-sm font-medium` grey. The bar's right side is a moon
icon and a `rounded-lg bg-primary-600` "Get Started".

The hero is a vertical wash, `#f5f3ff` at the top fading to white by the stat row, with two blurred
orbs behind it (violet `primary-200/50` above the headline, a pale cyan `#a5f3fc` at 30% to the
right). Everything is centred in a `max-w-4xl` column. The pill badge carries a pulsing violet dot
(`animate-ping` ring over a solid 8px core) — the only motion on the page besides the fade-ins. The
headline is the reference's signature: near-black first line, then a second line clipped to a
violet→cyan gradient, which is why the right end of "faster than ever" reads cyan in the screenshot.
Below it the blurb is 18px grey, the primary CTA is violet with a soft violet shadow and a trailing
arrow, and the secondary is white with a grey border and a violet play glyph.

Then a hairline, then four evenly spaced statistics — `text-3xl → lg:text-4xl` weight 700 values over
`text-sm` grey labels. The dashboard frame closes the hero: `max-w-5xl`, `rounded-2xl`, `shadow-2xl`,
`ring-1 ring-gray-200`, holding a product screenshot whose dark sidebar and three white metric cards
(`$24,563`, `1,234`, `98.5%`) are what the app re-builds in the DOM.

Below the fold the design turns into a conventional SaaS rhythm: `#f9fafb` features band with six
white `rounded-2xl p-8` cards on `sm:2 / lg:3`, white pricing band with three cards where only the Pro
card is outlined in violet (`ring-2 ring-primary-600`, a `-top-4` violet "Most Popular" tag), then
`#f9fafb` testimonials, a full-bleed violet→deep-violet CTA band, and the near-black footer.

## Design tokens (reference sheet → app `@theme`)

| role | reference value | source | `apps/zenith` token |
| --- | --- | --- | --- |
| Brand violet | `#7c3aed` (10 literals) | `bg-primary-600`, `text-primary-600`, `ring-primary-600`, `from-primary-600` | `--color-primary-600` |
| Violet hover | `#6d28d9` (5) | `hover:bg-primary-700` (navbar CTA, pricing CTA, subscribe) | `--color-primary-700` |
| Violet mid | `#8b5cf6` (7) | pulsing dot, gradient start of the old app tint | `--color-primary-500` |
| Violet light | `#a78bfa` (5), `#ddd6fe`, `#ede9fe`, `#f5f3ff` | icon tints, kicker pills, avatar discs, hero gradient start | `--color-primary-400/200/100/50` |
| Violet deep | `#5b21b6` | CTA band gradient end (`to-primary-800`) | `--color-primary-800` |
| Cyan accent | `#a5f3fc` (oklab 91.67% -.0699 -.0327 at 30%) / `#06b6d4` | second hero orb / `text-gradient` end | `.text-gradient` (endpoint **missing** — see delta) |
| Headline gradient | `linear-gradient(to right in oklab, #7c3aed, #06b6d4)` | `.text-gradient` (`color: #0000`, `background-clip: text`) | `.text-gradient` = `90deg, #a78bfa → #7c3aed` (**delta**) |
| Hero ground | `linear-gradient(to bottom, #f5f3ff, #fff)` | `.from-primary-50.to-white` | `bg-gradient-to-b from-primary-50 to-white` |
| CTA ground | `linear-gradient(to bottom right, #7c3aed, #5b21b6)` | `.from-primary-600.to-primary-800` | `bg-gradient-to-br from-primary-600 to-primary-800` |
| Section grounds | `#fff` and `#f9fafb` alternating | `.bg-white` / `.bg-gray-50` | Tailwind utilities |
| Ink | `#111827` body; `#4b5563` / `#374151` / `#6b7280` / `#9ca3af` secondary | `body{color:#111827}`, `.text-gray-600/700/500/400` | `text-gray-900/600/…` |
| Footer ground | `#111827`; tiles + input `#1f2937`; hairlines `#1f2937` | `.bg-gray-900`, `.bg-gray-800`, `.border-gray-800` | `bg-gray-900` |
| Radii | `--radius-lg: .5rem`, `--radius-xl: .75rem`, `--radius-2xl: 1rem`, pills `9999px` | `--radius-*`, `.rounded-full` | Tailwind `rounded-lg/xl/2xl/full` |
| Soft shadow | `0 4px 16px -4px #0000001a` | `.shadow-soft` | `--shadow-soft: 0 2px 12px -2px rgb(15 23 42 / .08)` (**delta**) |
| Display type | `h1` 36 → 48 → 60px / 700 / `tracking-tight`; `h2` 30 → 36px / 700; card `h3` 20px / 600 | `.text-4xl … .lg:text-6xl`, `.font-bold`, `.tracking-tight` | same utilities |
| Body type | blurb 18 → 20px; subtext 18px; stats label 14px; badge 14px/500 | `.text-lg`, `.sm:text-xl`, `.text-sm` | same utilities |
| Buttons | `rounded-lg`, `px-6 py-3` hero / `px-8 py-4` CTA band, weight 500; primary `#7c3aed` + `shadow-lg shadow-primary-600/30`; secondary white + `border-gray-300`; on the band `border-2 border-white/30` | `.bg-primary-600.px-6.py-3`, `.border-gray-300.bg-white`, `.border-2.border-white/30` | `ButtonLink` + utilities |
| Billing switch | track `h-7 w-14 rounded-full bg-gray-200`, thumb `h-5 w-5 rounded-full bg-white shadow-sm`, active track `bg-primary-600`, `focus:ring-2 focus:ring-primary-500 focus:ring-offset-2` | pricing markup | `role="switch"` button, `aria-checked`, `h-6 w-11` track (**slightly smaller**) |
| Motion | 32 `data-animate="fade-in-up"` + `data-delay`; `hover:shadow-soft-lg`; `animate-ping` badge dot | page markup | `Reveal` (IntersectionObserver) + Tailwind utilities |
| Container | `max-w-7xl`, `px-4 lg:px-8`; hero `py-20 lg:py-32`; bands `py-20 lg:py-28`; footer `pt-16 lg:pt-24` | `.container`, `.py-20`, `.lg:py-28` | same utilities |

## Section skeleton (reference order)

```
header.sticky.top-0.z-50.border-b.bg-white/80.backdrop-blur-lg
  a  (violet rounded-lg tile ▣ + "SaaSify")
  nav[aria-label="Main navigation"]  Features · Pricing · Testimonials · Resources▾ · Contact
  button[data-dark-toggle] ☾
  a.bg-primary-600.rounded-lg  "Get Started"
  button[data-mobile-toggle] ☰        → nav.border-t (accordion rows, ≤lg)

main
  section  .from-primary-50.to-white, orbs, container.py-20.lg:py-32
    div.mx-auto.max-w-4xl.text-center
      span.pill  ● Now with AI-powered automation
      h1        Build better products, <br><span.text-gradient>faster than ever</span>
      p         The all-in-one platform that helps teams ship quality software…
      div CTAs  [Start free trial →] [▷ Watch demo]
      dl.grid-cols-2.sm:grid-cols-4.border-t.pt-10
                10k+ Active users · 99.9% Uptime SLA · 50+ Integrations · 4.9★ User rating
    div.max-w-5xl.rounded-2xl.shadow-2xl.ring-1   img  (product dashboard)

  section#features.bg-gray-50
    span.pill "Features"   h2 "Everything you need to ship faster"   p
    div.mt-16.grid.sm:grid-cols-2.lg:grid-cols-3
      6 × div.rounded-2xl.bg-white.p-8.shadow-soft
            icon tile (bg-primary-100) · h3 · p

  section#pricing.bg-white
    span.pill "Pricing"   h2 "Simple, transparent pricing"   p "…14-day free trial."
    button[role=switch]  Monthly (○—) Annual  [Save 20%]
    div.mt-16.grid.lg:grid-cols-3
      3 × div.rounded-2xl.p-8.shadow-soft            (popular: bg-white ring-2 ring-primary-600)
            [Most Popular] · h3 · p · price /month · "Billed monthly|annually"
            ul 6 feature rows (✓ violet) · a.rounded-lg.py-3 (popular violet, others grey)

  section#testimonials.bg-gray-50
    span.pill "Testimonials"   h2 "Loved by teams worldwide"   p
    3 × div.rounded-2xl.bg-white.p-8.shadow-soft
          ★★★★★ · quote · h-12 w-12 avatar · name · role

  section.from-primary-600.to-primary-800  (orbs at white/10)
    h2 "Ready to transform your workflow?"  p  [Start free trial] [Contact sales]

footer.bg-gray-900.pt-16.lg:pt-24
  div.grid.lg:grid-cols-12
    div.lg:col-span-4   wordmark · blurb · 3 × social tile (bg-gray-800 rounded-lg)
    div.lg:col-span-5.grid.sm:grid-cols-3
        Product (Features, Pricing) · Company (Blog, Contact) · Resources (Documentation, Help Center)
    div.lg:col-span-3   "Stay Updated" · p · form[input bg-gray-800][Subscribe violet]
  div.mt-16.border-t.border-gray-800.py-8   © 2026 SaaSify. All rights reserved. · socials
```

## Copy inventory (reference, renamed in the app)

| band | reference copy | app copy |
| --- | --- | --- |
| badge | "Now with AI-powered automation" | same |
| `h1` | "Build better products, / faster than ever" | same |
| hero blurb | "The all-in-one platform that helps teams ship quality software. Automate workflows, collaborate seamlessly, and scale with confidence." | same |
| CTAs | "Start free trial", "Watch demo" | same |
| stats | 10k+ Active users · 99.9% Uptime SLA · 50+ Integrations · 4.9★ User rating | same |
| features `h2` | "Everything you need to ship faster" | same |
| features | Workflow Automation, Real-time Collaboration, Advanced Analytics, Enterprise Security, API & Integrations, 24/7 Support | same titles, paraphrased blurbs |
| pricing `h2` | "Simple, transparent pricing" / "…All plans include a 14-day free trial." | same |
| tiers | Starter $29 · Pro $79 · Enterprise $199 (`$276` / `$756` / `$1908` per year) | same, plus annual per-month figures `$23` / `$63` / `$159` |
| testimonials `h2` | "Loved by teams worldwide" | same |
| testimonials | Sarah Chen (CTO, TechFlow), Marcus Johnson (Head of Engineering, DataSync), Emily Rodriguez (Product Manager, CloudBase) | same, brand name swapped in quote 1 |
| CTA band | "Ready to transform your workflow?" / "Join thousands of teams already using SaaSify…" | brand name swapped to Zenith |
| footer blurb | "The modern platform for scaling your business" | same + "Automate workflows…" |
| legal | "© 2026 SaaSify. All rights reserved." | Zenith + Component Dock credit |

Assets: the dashboard preview is the only photograph-like surface on the page. The source ships it as
a JPEG `<img>`; the recreation **must not copy it** (`docs/replication.md`) and instead re-builds the
panel in the DOM — dark sidebar, three metric tiles, a violet sparkline-ish accent. Any future
photography uses `https://picsum.photos/seed/zenith-<n>/<w>/<h>`.

## Delta table (reference → shipped app)

| axis | reference (measured) | shipped | note |
| --- | --- | --- | --- |
| Headline gradient | `to right in oklab, #7c3aed → #06b6d4` | `90deg, #a78bfa → #7c3aed` | cyan endpoint missing — cheapest fidelity win |
| Dashboard preview | `<img>` screenshot in `rounded-2xl shadow-2xl ring-1` | DOM mock (`$24,563` / `1,234` / `98.5%` + dark sidebar) | deliberate: no asset copying |
| Popular tier card | `bg-white` + `ring-2 ring-primary-600`, violet `-top-4` tag | `bg-gray-950` dark card + `border-primary-500/50` | inverts the reference's light emphasis |
| Other tier cards | `bg-gray-50` | `bg-white` + `border-gray-200` | |
| Tier CTAs | solid `bg-gray-200 text-gray-900`, "Get started" ×3 | `variant="outline"`, "Contact sales" on Enterprise | |
| Section kickers | pills "Features" / "Pricing" / "Testimonials" | omitted | |
| Billing switch size | track `h-7 w-14` (28 × 56px) | `h-6 w-11` (24 × 44px) | |
| Hero padding | `py-20 lg:py-32` | `pb-20 pt-16 lg:pb-28 lg:pt-24` | |
| Soft shadow | `0 4px 16px -4px #0000001a` | `0 2px 12px -2px rgb(15 23 42 / .08)` | |
| Footer columns | Product · Company · Resources | Product · Company · Legal | single-page set |
| Legal bar right side | social icon row | "Privacy Policy" / "Terms of Service" links | socials already sit in the brand column |
| Nav Resources | dropdown of Documentation / Blog / Help Center | flat links | no inner routes |
| Typeface | Inter 5.2.8 via host `/cf-fonts/` | Inter via Google Fonts `<link>` | restores the declared face |

Closing these is an implementer change (tests + per-app gate), not a prep one.

## Notes for the implementer

- **Do not "fix" the stats.** `10k+`, `99.9%`, `50+`, `4.9★` are the reference's literals; a counter
  animation is optional and must degrade to the literal in jsdom (`docs/conventions.md`,
  "Effects and derived state").
- **The billing switch is the only stateful control on the page.** Keep it a `role="switch"` button
  with `aria-checked`; derive both the monthly figure and the annual note from one state value
  rather than storing two.
- **Dark mode is class-based** (`@custom-variant dark (&:where(.dark, .dark *))` in
  `apps/zenith/src/index.css`) — the sheet's dark utilities are `:is(.dark *)`-scoped, so the class
  must land on `<html>`.
- **Reveal wrapper** exists because the reference animates 32 elements in; in jsdom the effect must
  render the final state (the pattern already shipped in `Reveal.tsx`).
