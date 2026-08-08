# Congregate (ColorLib Hopefoundation) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-congregate`.

## Source mapping

- **ColorLib item:** "Hopefoundation" (TEMPLATES.md — THREE copies, lines
  147, 1270, 2916; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/hopefoundation/
- **Preview URL:** https://hopefoundation-colorlib.pages.dev/
  (HTTP 200, ~45 KB DOM — live, analyzed 2026-08-08). NOTE:
  `preview.colorlib.com/theme/hopefoundation/` returns 404 — the ColorLib
  preview portal maps this slug to `hopefoundation-colorlib.pages.dev/`. Do
  not redo this lookup.
- **Preview CSS:** `https://hopefoundation-colorlib.pages.dev/_astro/Base.9L0KyljF.css`
  (Tailwind v4 output; tokens extracted below).

## Reference research (done — do not redo)

### Screenshot (`hopefoundation-template-1770211243073.jpg`; verified via

vision on the live demo)

Dark cinematic church landing. Hero: near-black charcoal background with a
blurred close-up photo of hands holding an open Bible, large white bold
headline "Everyone is welcome here.", grey sub-paragraph, solid amber
"Plan Your Visit" button (arrow icon) + outlined "Watch Online" button (play
icon), SCROLL indicator bottom-center. Nav: amber square logo mark with a
white cross + "Hope City Church" wordmark, links About/Watch/Connect/Give,
search icon + amber pill "Plan Your Visit". Warm, intimate, modern aesthetic
— amber (#f59e0b) accents on charcoal, Outfit font.

### Live DOM (primary reference — matches the screenshot 1:1)

Section order: header (amber logo mark + "Hope City Church"; links About,
Watch, Connect, Give; dark-mode toggle `aria-label="Toggle dark mode"`;
amber "Plan Your Visit" pill; hamburger drawer with stacked links + CTA) →
hero (`relative min-h-screen overflow-hidden bg-charcoal-900`; full-bleed
unsplash photo `photo-1504052434569-70ad5836ab65?w=1920`, dark overlay;
H1 "Everyone is welcome here."; sub "Whether you're exploring faith for the
first time or looking for a church home, you belong at Hope City.";
"Plan Your Visit" `rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold
text-white hover:bg-amber-600` + "Watch Online" `rounded-lg border-2
border-white/30 px-8 py-4 text-lg font-semibold text-white`; SCROLL
indicator) → Service Times (`bg-cream-50 py-20 dark:bg-charcoal-900 lg:py-28`:
eyebrow "Join Us" + H2 "Service Times"; Sunday 9:00 AM & 11:00 AM
(In-person & Online); Wednesday 7:00 PM (Midweek Service); "Our Location"
card 1200 Grace Avenue, Austin, TX 78701 + Get Directions) → What to Expect
(`py-20 lg:py-28`: eyebrow "What to Expect" + H2 "You're Invited"; 4 cards:
Welcoming Community, Engaging Worship, Relevant Teaching, Great Kids
Programs) → Watch & Listen (`bg-charcoal-50 py-20 dark:bg-charcoal-900
lg:py-28`: "Recent Messages" + View All Messages; 4 message cards w/ images,
duration badges, pastor/date meta — Unshakeable Peace in the Storm,
Unshakeable Faith Over Fear, Unshakeable Built to Last, The Gift of Hope;
"Watch Live Every Sunday" CTA) → Get Involved (`py-20 lg:py-28`: "Ways to
Connect"; 4 cards: Plan Your Visit, Join a Group, Serve with Us, Next Steps)
→ Stories (`bg-charcoal-900 py-20 lg:py-28`: "Real People. Real Hope."; 3
testimonial cards w/ avatars — The Martinez Family, James K., third card) →
CTA (`relative overflow-hidden py-20 lg:py-28`: "Your story isn't over.";
Plan Your Visit + Watch a Message; stats 10+ Years Serving Austin / 500+
Weekly Attendance / 50+ Small Groups) → footer (`bg-charcoal-900`: brand +
blurb; columns Visit / Connect / Resources; social icons Facebook,
Instagram, YouTube; contact email/phone/address; bottom bar).

### Design tokens (from `Base.9L0KyljF.css`)

- **Brand amber** (`--color-amber-*`): 50 #fffbeb · 100 #fef3c7 (icon-tile
  bg) · 400 #fbbf24 (dark icon-tile text) · 500 #f59e0b (buttons, logo,
  CTA) · 600 #d97706 (hover) · 700 #b45309.
- **Charcoal neutral** (`--color-charcoal-*`): 50 #f7f7f7 · 100 #e3e3e3 ·
  200 #c8c8c8 · 300 #a4a4a4 · 400 #818181 · 500 #666 · 600 #515151 ·
  700 #434343 · 800 #383838 · 900 #1a1a1a.
- **Cream tint**: 50 #fefdfb (service-times section).
- **Font:** Outfit 300–800 (Google Fonts) — headings bold, body
  normal/medium, buttons semibold.
- **Radii:** rounded-lg 0.5rem (buttons/cards), rounded-xl 0.75rem (icon
  tiles). Buttons px-8 py-4 text-lg (hero), px-5 py-2.5 text-sm (header),
  px-6 py-3 (default), font-semibold, gap-2, inline-flex.
- **Sections:** hero bg-charcoal-900 + photo; body alternates bg-cream-50 /
  white with `py-20 lg:py-28` (dark: charcoal-900); watch/listen
  bg-charcoal-50; stories + footer bg-charcoal-900.
- **Container:** `mx-auto max-w-7xl px-4 lg:px-8`.

## Implementation todo

- [ ] Scaffold `apps/congregate` from the simplest existing app; package
      `@free-react-templates/congregate`; `npm install` at root + verify
      lockfile registers the workspace (`grep -c free-react-templates/congregate
    package-lock.json`); `vite.config.ts` MUST keep `injectUiSource()`.
- [ ] `src/index.css` `@theme`: amber scale (primary) + charcoal scale +
      cream-50; Outfit via Google Fonts `<link>` in `index.html`.
- [ ] Spec → tests (red) → components (green), 100% coverage, mirroring the
      spec's Gherkin scenarios 1:1.
- [ ] `Navbar.tsx`: brand (Church icon in amber square + "Congregate"),
      About/Watch/Connect/Give anchors, dark-mode toggle (persist), amber
      "Plan Your Visit", mobile drawer w/ aria-expanded.
- [ ] `Hero.tsx`: min-h-screen, picsum seed `congregate-1/1920/1080` +
      dark overlay, H1 + sub, amber CTA + outlined CTA, SCROLL indicator.
- [ ] `ServiceTimes.tsx`: cream bg, Sunday/Wednesday cards (Clock icon),
      location card (MapPin) + Get Directions.
- [ ] `WhatToExpect.tsx`: "You're Invited", 4 feature cards with amber icon
      tiles (Users, Music, BookOpen, Sparkles).
- [ ] `WatchListen.tsx`: 4 message cards (picsum seeds 2–5, 800×450),
      duration badges, pastor/date meta, View All Messages + Watch Live CTA.
- [ ] `GetInvolved.tsx`: "Ways to Connect", 4 cards with links (MapPin,
      Users, Heart, ChevronRight icons).
- [ ] `Stories.tsx`: dark bg, 3 testimonial cards (quotes from spec,
      avatars picsum seeds 6–8, 200×200).
- [ ] `CtaStats.tsx`: "Your story isn't over." + 2 buttons + 3 stats.
- [ ] `Footer.tsx`: brand + blurb, Visit/Connect/Resources columns, social
      icons (inline SVG), contact, bottom bar.
- [ ] Dark mode: `dark:` variants on all sections; toggle flips `.dark` on
      documentElement and persists (localStorage); cleanup on unmount.
- [ ] `App.tsx` composition: banner/main/contentinfo landmarks, title
      "Congregate — Church Community Template".
- [ ] `scripts/verify-app.sh congregate` → full `npm run gate` green.
- [ ] PR `feat/template-congregate` → docs + merge immediately; then
      `[~]`→`[x]` on ALL THREE Hopefoundation lines (147, 1270, 2916),
      surge URL + homepage, `npm run readme:status`, push.

## Fidelity notes

- The demo is a multi-page Astro site (About/Watch/Connect/Give are real
  routes); our recreation is single-page — keep nav links as anchors to
  on-page sections (`#about`, `#watch`, `#connect`, `#give`) and map
  out-of-page links (socials, Get Directions) to `#`/`https://` placeholders
  so structure matches 1:1.
- Never copy unsplash/ColorLib assets — use seeded picsum with the exact
  seeds above (deterministic per template).
- Rebrand everything: "Hope City Church" → "Congregate",
  `hello@hopecitychurch.com` → `hello@congregate.church`; keep the same
  _kind_ of copy (headline + sub + CTA, card title + blurb + link).
- Amber #f59e0b is the single brand color — put it in `@theme` and use
  Tailwind classes, never inline hex.
