# Sparkwell — task outline

Recreation of the ColorLib **Voltway** electrical-contractor design (`voltway`) at `apps/sparkwell`. The spec is the
authority: `openspec/specs/template-sparkwell/spec.md`. Design notes: `docs/templates/sparkwell/design-notes.md`.
Check boxes only as work ships.

> The page's thesis is **a certificate, not a callout**: a hero that promises work *"that passes inspection"* and a
> rotating second line that says what the paperwork gets you; four documents with **prices** and a `dl` of *who needs
> it* / *what it covers*; eight warning signs **sorted by urgency** with exactly **3 / 3 / 2** per severity; and a
> closing band with no form — two buttons. Build the **certificate grid** and the **dark warning-signs list** first;
> they are the design. The only form on the page is the footer newsletter, and it must validate. Copy lives in the
> spec §Content inventory; keep the numbers, change the brand.

## 0 — Scaffold

- [ ] `cp -r apps/mandrel apps/sparkwell`; rename the package to `@free-react-templates/sparkwell`
- [ ] `public/CNAME` = `sparkwell.free.componentdock.com`; `homepage` = `https://sparkwell.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/sparkwell" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Inter 400/500/600/700** — no second face (mono comes from the
      system stack)
- [ ] `src/index.css`: `@theme` with `primary` 50–900 (`#eff6ff` … `#1e3a8a`, `600 = #2563eb`) and `accent`
      50/300/400/900 (`#fefce8`, `#fde047`, `#facc15`, `#713f12`), `--radius-lg .5rem`, `--radius-2xl 1rem`,
      `--shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1)`
- [ ] `vite.config.ts` keeps `injectUiSource()`

## 1 — Content module (test first)

- [ ] `src/content.ts`: `BRAND = 'Sparkwell'`, address *12 Fenwick Industrial Estate, Newcastle upon Tyne, NE6 2HL*,
      phone `0800 118 7702` / `tel:+448001187702`, email `office@sparkwell.example`, `COMPONENTDOCK_HREF`
- [ ] Typed arrays: `NAV_LINKS` (5 anchors), `HERO_FACTS` (4), `ROTATING_PHRASES` (3), `EMERGENCY_WINDOWS` (3),
      `COUNTERS` (4), `CERTIFICATES` (4, each `code`, `name`, `price` **as a string**, `validity`, `who`, `covers`),
      `WARNING_SIGNS` (8, each `severity` + `title` + `body`), `STANDARDS` (4, each `code`, `subtitle`, `body`,
      `footnote`), `QUOTES` (3), `FAQS` (5), `FOOTER_COLUMNS` (3), `SOCIALS` (3)
- [ ] Tests: the arrays have exactly those lengths; the four prices are `£180`, `Included`, `£45`, `£3.50 per item`;
      the severities are `['stop','stop','stop','week','week','week','next','next']`

## 2 — Chrome (`components/Chrome.tsx`)

- [ ] Preloader: white overlay `z-[100]`, 40 px spinner ring with a `primary-600` top border, hidden on `load` + 300 ms
      — and never traps the page when the document is already `complete` (conventions, "Document readiness")
- [ ] Skip link to `#main-content`, 2 px `primary-600` scroll-progress bar, back-to-top disc (48 px, appears > 300 px)
- [ ] Cookie dialog (`role="dialog"`, delayed, Accept / Decline persisted in `localStorage` keys `essential` /
      `accepted`)
- [ ] Sticky mobile CTA bar: *Call now* (`tel:`) + **Book an EICR** (`#contact`) — not the source's *Book a Tour*

## 3 — Header (`components/Navbar.tsx`)

- [ ] Wordmark (bolt glyph + text), five anchors (Emergency · Certificates · Warning signs · Compliance · Contact),
      36 px moon toggle, `lg:hidden` menu button with `aria-expanded`, CTA *Book an EICR*
- [ ] White/80 + `backdrop-blur-lg` + 1 px `#e5e7eb` rule; nav 14 px / 500 `#4b5563`
- [ ] Mobile panel below the bar (`border-t`, `px-4 py-4`) listing the same anchors
- [ ] Dark toggle flips `.dark` on `document.documentElement` and is labelled ("Switch to light theme" / dark)

## 4 — Hero (`components/Hero.tsx`)

- [ ] Credentials pill with the two-dot ping; `h1` two parts with the **gradient rotating phrase** (3 strings)
- [ ] Rotator: interval-driven, cleans up on unmount, static first phrase under `prefers-reduced-motion` or when
      `IntersectionObserver` / timers are unavailable in jsdom
- [ ] Lede (`max-w-2xl`), controls: filled *Book an EICR* → `#certificates`, outlined *See certificate prices*,
      play chip *Watch Demo*
- [ ] Fact row (4, `grid-cols-2 sm:grid-cols-4`, `border-t pt-10`), photo placeholder `picsum.photos/seed/sparkwell-1/1024/512`
      in a 16 px card with a 1 px ring + `shadow-2xl`
- [ ] Two drifting blobs (`blur-3xl`, `animate` 8 s / 10 s, static under reduced motion)
- [ ] Video dialog: `role="dialog"`, 16:9 placeholder panel, Escape closes, focus returns to the trigger

## 5 — Emergency band (`components/EmergencyBand.tsx`)

- [ ] `bg-accent-400`, `py-12`, hazard stripe child div (`repeating-linear-gradient(45deg,#1e293b 0 14px,#facc15
      14px 28px)`, `h-2`)
- [ ] Dark pill with ping, heading, paragraph, phone button (`tel:`, 12 px radius, `#030712`)
- [ ] Three service windows and the £120 disclosure paragraph

## 6 — Counter strip (`components/Counters.tsx`)

- [ ] `bg-gray-50 border-y`, four figures in `primary-600`, `data`-driven from `COUNTERS`
- [ ] Count-up on first intersection, once; **final values rendered immediately** when `IntersectionObserver` is
      missing (derived in render, no `setState` from an effect — `react(set-state-in-effect)` is an error)
- [ ] Suffixes preserved: `6,100` · `90 min` · `18` · `100%`

## 7 — Certificates (`components/Certificates.tsx`)

- [ ] Eyebrow chip `#dbeafe`/`#1e40af` (6 px radius), `h2`, lede `max-w-2xl`
- [ ] Grid `lg:grid-cols-2` `gap-5`; cards 2 px `#e5e7eb`, 16 px radius, `p-6`, hover border `primary-400`
- [ ] Card top: mono code tag (`#1d4ed8`) + name + `24 px` tabular price (string!) + validity line
- [ ] `dl` behind a 1 px rule: *Who needs it* / *What it covers*
- [ ] Amber note bar: `rounded-xl`, 4 px `accent-400` **left** border, `bg-accent-50`, 14 px copy

## 8 — Warning signs (`components/WarningSigns.tsx`)

- [ ] `bg-gray-950` band, yellow *Do not wait* pill, white heading, `#9ca3af` lede
- [ ] Eight rows (`divide-y divide-white/10`, `py-5`) as a two-column flex: severity pill (~180 px) + text
- [ ] Severity styles: red `#dc2626` white text · yellow `accent-400` on `#030712` text · `white/10` on `#d1d5db`
- [ ] Counts asserted in tests: 3 / 3 / 2 — order preserved (urgency, not alphabetical)
- [ ] Closing instruction paragraph after the list

## 9 — Compliance (`components/Compliance.tsx`)

- [ ] `bg-gray-50`, four cards (`lg:grid-cols-4`), 1 px border, 16 px radius, `relative`
- [ ] 36 px `accent-400` square (8 px radius) at top-right; code in `font-mono` 14 px / 700 `#1d4ed8`
- [ ] Subtitle, body, then 1 px rule + 12 px mono footnote

## 10 — Testimonials (`components/Testimonials.tsx`)

- [ ] Carousel: `overflow-hidden` window, `flex` track, `flex-shrink-0` slides, `translateX` + 500 ms
- [ ] 40 px white arrow discs at `-left-4` / `-right-4` (`lg:` only), dot buttons with accessible names
- [ ] Cards: `p-8`, `shadow-soft`, five `#facc15` stars, 18 / 28 quote, 48 px initial avatar, name + role
- [ ] **No horizontal overflow at 390 px** — clip the track, `scrollWidth === 390`

## 11 — FAQ (`components/Faq.tsx`)

- [ ] Five exclusive items: `<button aria-expanded>` + `max-height` panel + plus icon rotating 45°
- [ ] Opening one closes the others; keyboard operable; answer text `#4b5563`

## 12 — Closing band + footer

- [ ] `#contact`: `bg-gradient-to-br from-primary-600 to-primary-800`, dot-grid layer, two blurred discs, white
      heading, white filled + `white/40` outlined buttons
- [ ] Footer `#111827`: brand blurb, address, `tel:`, `mailto:`; three link columns; newsletter (46 px input + blue
      *Subscribe*) that validates and confirms; Component Dock attribution link
- [ ] Bottom bar: copyright (current year), three legal links, three social icons

## 13 — Finish

- [ ] Dark mode pass over every band (hero wash, counters, cards, dark band, footer)
- [ ] `scripts/verify-app.sh sparkwell` green (typecheck · lint · 100 % coverage · build)
- [ ] Check 1440 / 1024 / 768 / 390 screenshots against `/tmp/voltway-full.png` — band order, band heights ±5 %
- [ ] No `colorlib` / `Voltway` string anywhere under `apps/sparkwell`; images are picsum `sparkwell-*`
- [ ] Claim: `TEMPLATES.md` `[~]` under `## Construction` after *Vertex* (29 → 30); on merge `[x]` + surge URL +
      `npm run readme:status`
