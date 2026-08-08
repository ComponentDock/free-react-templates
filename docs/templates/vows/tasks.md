# Vows (ColorLib Forever Always) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vows`.

## Source mapping

- **ColorLib item:** "Forever Always" (TEMPLATES.md — THREE copies, lines
  145, 2914, 3096; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/forever-always/
- **Preview URL:** https://foreveralways-colorlib.pages.dev/
  (HTTP 200, ~84 KB DOM — live, analyzed 2026-08-08). NOTE:
  `preview.colorlib.com/theme/forever-always/` returns 404 — the ColorLib
  preview portal maps this slug to `foreveralways-colorlib.pages.dev/`. Do
  not redo this lookup.
- **Preview CSS:** `https://foreveralways-colorlib.pages.dev/_astro/Base.BBoypNgN.css`
  (Tailwind v4 output, ~63 KB; tokens extracted below).

## Reference research (done — do not redo)

### Screenshot (`foreveralways-template-1771943944925.jpg`, 2400×1892; verified via vision)

Elegant romantic wedding-planner landing page. Soft blush-pink gradient hero
(`#FFF5F7`-family) with a delicate floral icon above a serif headline "Your
Dream Wedding Begins Here" (accent phrase highlighted), sub-paragraph about
crafting unforgettable celebrations, two pill buttons — solid rose pink
"Start Planning" and white/outlined "View Our Work" — then a three-column
stats row (500+ Weddings · 12 Years · 5-Star Rated) and a large rounded,
moody, low-key photograph of a bride with a bouquet. Headings high-contrast
serif (Playfair Display family), body clean sans (Lora). Accent: vibrant
rose/pink (#e11d48 family). Buttons fully pill-shaped (rounded-full).

### Live DOM (primary reference — matches the screenshot)

`<title>Home | Forever &amp; Always</title>`. Section order:
header (sticky: logo icon + serif wordmark "Forever & Always"; links
Services/Portfolio/About/Packages/Testimonials/Blog/Gallery/Contact
`text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-400
dark:hover:text-primary-400`; "Start Planning" `rounded-full bg-primary-600
px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-700`;
mobile hamburger + drawer; dark-mode toggle) → hero (`relative overflow-hidden
bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950`;
floating blur circles `animate-hero-float` primary-100/60 + primary-50/80 +
accent-100/40; centered `container mx-auto px-4 py-20 text-center lg:px-8`;
eyebrow/ampersand mark; H1 serif "Your Dream Wedding Begins Here"; sub "We
craft unforgettable celebrations filled with elegance, romance, and every
magical detail you have ever imagined. Let us turn your love story into an
extraordinary day."; CTAs "Start Planning" solid + "View Our Work" outlined;
stats row grid-cols-3: 500+ Weddings / 12 Years / 5-Star Rated) → stats band
(`border-y border-gray-200 bg-gray-50 py-16 lg:py-20 dark:border-gray-800
dark:bg-gray-900`; 4 count-up stats — Weddings Planned, Years Experience,
Happy Couples, Venue Partners; static HTML renders 0, JS animates to target —
render targets directly, count-up optional) → services (`bg-white py-20
lg:py-28 dark:bg-gray-950`; eyebrow "What We Do" + H2 "Our Services" + sub;
6 cards: Full Planning / Day-of Coordination / Design & Decor / Venue
Selection / Catering & Cake / Entertainment) → portfolio (`bg-gray-50 py-20
lg:py-28 dark:bg-gray-900`; eyebrow "Our Work" + H2 "Our Portfolio" + sub; 6
couple cards: Sarah & Michael — The Grand Estate, Napa Valley; Emma & James —
Seaside Chapel, Malibu; Olivia & William — Botanical Gardens, Charleston;
Grace & Thomas — Historic Mansion, Savannah; Isabella & Alexander — Vineyard
Estate, Sonoma; Charlotte & Benjamin — Lakeside Resort, Lake Como) → venue
transformations (`bg-white py-20 lg:py-28 dark:bg-gray-950`; eyebrow "Venue
Styling" + H2 "Venue Transformations" + sub; before/after pairs: Ceremony
Setup, Reception Design — images with `rounded-full bg-black/60 px-3 py-1
text-xs font-medium text-white` "Before"/"After" badges) → meet your planner
(`bg-white py-20 lg:py-28 dark:bg-gray-950`; eyebrow "About Us" + H2 "Meet
Your Planner"; portrait + "Isabella Sterling" + 12-years bio + credentials
"Featured in Vogue Weddings, Martha Stewart Weddings, and Brides Magazine" +
philosophy) → packages (`bg-gray-50 py-20 lg:py-28 dark:bg-gray-900`; eyebrow
"Investment" + H2 "Wedding Packages" + sub; 3 cards: Intimate $3,500
(up to 50 guests: Day-of coordination, Basic decor consultation, Vendor
coordination, Full event design, Rehearsal dinner planning), Classic $7,500
(up to 150 guests: Partial planning & design, Custom design concept, Venue
search assistance, Rehearsal dinner coordination, Honeymoon planning;
"Most Popular" badge `absolute -top-4 left-1/2 -translate-x-1/2 rounded-full
bg-primary-600 px-4 py-1 text-sm font-medium text-white`), Grand $15,000
(unlimited guests: Full planning + luxury extras); each card has
`block w-full rounded-full bg-primary-600 px-5 py-3 text-center text-sm
font-medium text-white hover:bg-primary-700` "Inquire" (Classic uses soft
`bg-primary-50 text-primary-700 hover:bg-primary-100` for non-featured? — no:
featured = solid primary, others = soft pill)) → testimonials (`bg-white
py-20 lg:py-28 dark:bg-gray-950`; eyebrow "Love Letters" + H2 "What Our
Couples Say" + sub; 3+ cards: 5-star row, quote, author + "June 2025
Wedding"-style dates) → FAQ (`bg-white py-20 lg:py-28 dark:bg-gray-950`;
eyebrow "FAQ" + H2 "Frequently Asked Questions" + sub; 5-question accordion:
booking 12–18 months ahead / tiered pricing + custom proposals / destination
weddings yes + travel fees / involvement adapts to preferences / rain
contingency plan) → contact CTA (`relative overflow-hidden bg-gradient-to-br
from-primary-600 to-primary-800 py-20 lg:py-28`; white/10 blur circles; H2
white serif "Let's Create Your Perfect Day"; sub "Schedule your complimentary
consultation…"; "Schedule Consultation" `rounded-full bg-white text-primary-700
hover:bg-gray-100` + "Call Us" `rounded-full border border-white/60 text-white
hover:bg-white/10`) → footer (dark `bg-gray-900`: blurb "Crafting
unforgettable wedding experiences with elegance, passion, and meticulous
attention to every detail."; columns Services (Full Planning, Day-of
Coordination, Design & Decor, Venue Selection) / Information (FAQ,
Testimonials, Press, Blog) / Connect (Instagram, Pinterest, Contact); Mailing
List "Stay Inspired" newsletter input + Subscribe pill; bottom bar "© 2026
Forever & Always. All rights reserved." + Privacy Policy, Terms of Service,
Style Guide).

## Design tokens (from `Base.BBoypNgN.css`)

- **Primary (ROSE scale, Tailwind):** 50 #fff1f2 (hero gradient, soft pill) ·
  100 #ffe4e6 (blur circle, pill hover) · 200 #fecdd3 · 300 #fda4af · 400
  #fb7185 · 500 #f43f5e · 600 #e11d48 (buttons, badges, links, CTA band) ·
  700 #be123c (hover) · 800 #9f1239 (CTA band end) · 900 #881337 · 950
  #82181a. → `@theme` as `--color-primary-*`. (The CSS also ships unused
  default color vars — ignore; classes resolve to the rose scale. There is
  an `accent-*` family used only for one hero blur circle — optional.)
- **Grays:** 50 #f9fafb (stats/portfolio/packages bg) · 100 #f3f4f6 · 200
  #e5e7eb (stats band border) · 300 #d1d5db (outline borders) · 400 #9ca3af ·
  500 #6b7280 · 600 #4b5563 (nav links) · 700 #374151 · 800 #1f2937 · 900
  #111827 (footer, dark sections) · 950 #030712 (dark body bg).
- **Fonts:** Playfair Display (serif, 400–800) for headings/logo/stats/planner
  name via `font-serif`; Lora (400–700) body/nav/buttons. One Google Fonts
  `<link>`:
  `family=Playfair+Display:wght@400;500;600;700;800&family=Lora:wght@400;500;600;700&display=swap`.
- **Radii:** rounded-full (ALL buttons, newsletter input, badges, "Most
  Popular" pill, Before/After labels) · rounded-xl (portfolio/transformation
  cards) · rounded-2xl (services/testimonial/package cards, portrait).
- **Buttons:** primary `rounded-full bg-primary-600 px-5 py-2.5 font-medium
text-white transition-colors hover:bg-primary-700`; hero secondary
  `rounded-full border border-gray-300 bg-white text-gray-700
hover:border-primary-600 hover:text-primary-600`; soft secondary
  `rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100
dark:bg-primary-900/30 dark:text-primary-400`; CTA-band white
  `rounded-full bg-white text-primary-700 hover:bg-gray-100`; CTA-band outline
  `rounded-full border border-white/60 text-white hover:bg-white/10`; package
  "Inquire" `block w-full rounded-full bg-primary-600 px-5 py-3 text-center
text-sm font-medium text-white hover:bg-primary-700`.
- **Sections:** hero gradient `from-primary-50 to-white`; stats band `bg-gray-50
border-y border-gray-200`; alternate `bg-white` (services, results, about,
  testimonials, faq) / `bg-gray-50` (portfolio, packages) with `py-20
lg:py-28`; contact CTA gradient `from-primary-600 to-primary-800`; footer
  `bg-gray-900`. Container `mx-auto max-w-7xl px-4 lg:px-8`.
- **DARK MODE INCLUDED:** every section has `dark:bg-gray-950` /
  `dark:bg-gray-900` counterparts and the header has a theme toggle — this is
  a full dark-mode site. Include the repo-standard dark toggle; do NOT build
  it light-only.

## Implementation tasks (TDD order)

1. Scaffold `apps/vows` (copy simplest app, rename package
   `@free-react-templates/vows`, register `injectUiSource()` in
   `vite.config.ts`, run `npm install` at root so package-lock registers
   the workspace; `grep -c "free-react-templates/vows" package-lock.json`
   ≥ 1).
2. `index.css`: `@theme` — `--color-primary-*` rose scale; `font-serif` →
   Playfair Display; import Google Fonts in `index.html`.
3. Components: `Navbar` (sticky, links, Start Planning pill, dark toggle,
   mobile drawer w/ aria-expanded), `Hero` (blush gradient + blur circles,
   serif headline, sub, 2 CTAs, stats row 500+/12/5-Star), `StatsBand`
   (border-y gray band, 4 stats), `Services` (6 cards), `Portfolio` (6
   couple cards w/ venue lines), `Transformations` (2 before/after pairs w/
   badges), `Planner` (portrait + bio + credentials), `Packages` (3 pricing
   cards + Most Popular badge), `Testimonials` (3+ cards w/ dates),
   `Faq` (5-question accordion), `ContactCta` (rose gradient band, 2
   buttons), `Footer` (3 link columns, newsletter, legal). Compose in
   `App.tsx`.
4. Tests per component mirroring the spec scenarios (100% coverage; mobile
   nav duplicates → `getAllByRole` + index; accordion by button role +
   aria-expanded; dark toggle by documentElement class).
5. Icons: lucide-react `Heart`/`Sparkles`, `Menu`, `X`, `Sun`, `Moon`,
   `Star`, `Check`, `Phone`, `Mail`, `MapPin`, `ChevronDown`, `ArrowRight`,
   `Send`; socials → inline SVG or lucide (Instagram/Pinterest).
6. Images: `picsum.photos/seed/vows-1/1920/1080` (hero), `-2..-7` (portfolio
   - transformations 800×600), `-8` (planner portrait 600×750), `-9..`
     (testimonial avatars 100×100).
7. Verify: `scripts/verify-app.sh vows`; push PR, squash-merge
   immediately, then `[~]`→`[x]` on ALL THREE TEMPLATES.md lines (145,
   2914, 3096) + surge URL + `npm run readme:status`.

## Fidelity notes

- Section order + headings are the fidelity contract — keep 1:1.
- The rose primary (#e11d48) is the signature accent — do not swap for a
  different hue.
- Serif (Playfair Display) headings vs Lora body is essential to the look;
  pill (rounded-full) buttons are the signature shape.
- THIS TEMPLATE HAS DARK MODE — unlike many ColorLib templates it ships
  `dark:` variants everywhere + a toggle. Include it.
- Blog is a real link in the demo nav but a dead end (no blog section on the
  single page) — keep the link label as-is.
- Count-up stats: the static demo HTML renders 0 (JS animates); render the
  target values (e.g. 500+) directly — count-up animation is an optional
  nicety, not a fidelity requirement.
- Screenshot vs demo match 1:1 (same hero, headline, buttons, rose accents).
  Brand renamed Forever & Always → "Vows"; keep the same _kind_ of content
  (wedding planner, Isabella-style lead planner, couples, packages).
