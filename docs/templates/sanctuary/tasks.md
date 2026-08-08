# Sanctuary (ColorLib Faithcommunity) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sanctuary`.

## Source mapping

- **ColorLib item:** "Faithcommunity" (TEMPLATES.md — THREE copies, lines
  142, 1296, 2911; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/faithcommunity/
- **Preview URL:** https://faithcommunity-colorlib.pages.dev/
  (HTTP 200, ~50 KB DOM — live, analyzed 2026-08-08). NOTE:
  `preview.colorlib.com/theme/faithcommunity/` returns 404 — the ColorLib
  preview portal maps this slug to `faithcommunity-colorlib.pages.dev/`.
  Do not redo this lookup.
- **Preview CSS:** `https://faithcommunity-colorlib.pages.dev/_astro/Base.E9qOMqaj.css`
  (Tailwind v4 output; tokens extracted below).

## Reference research (done — do not redo)

### Screenshot (`faithcommunity-template-1770211119687.jpg`, 2400×1892; verified via vision)

Modern dark-mode church landing page. Hero: full-screen congregation photo
with heavy dark overlay; fixed nav — white cross-in-circle logo +
"Grace Community Church" + tagline "Love God. Love People." left, centered
links (About/Services/Events/Ministries/Sermons/Contact), right phone icon +
"Give" link + white pill "Plan Your Visit" (purple text). Centered hero:
large serif headline "A Place to Belong" in white, sub-paragraph, purple
"Plan Your Visit" button + transparent white-bordered "Watch Online" with
play icon. Below: glassmorphism "Join Us This Week" card with 3 columns —
Sunday Worship (9:00 AM & 11:00 AM), Wednesday Bible Study (7:00 PM),
Youth Group (6:30 PM) — times in gold/yellow. Scroll arrow bottom center.
Palette: deep blacks/blues/purples, lavender/purple accents, muted
gold/yellow highlights. Serif display headings (Lora-like) + clean
sans-serif body (Inter-like).

### Live DOM (primary reference — matches the screenshot)

Section order: fixed transparent header (brand + 6 links + "Give" outline
pill + "Plan Your Visit" white pill + hamburger/dark drawer with 2 CTAs) →
hero (`relative min-h-screen overflow-hidden bg-gray-900`; img
`object-cover opacity-40`; H1 `font-serif text-4xl sm:text-5xl lg:text-6xl
font-bold text-white` "A Place to Belong"; sub; CTAs `rounded-full bg-white
px-8 py-4 text-primary-700 hover:bg-primary-50` + `rounded-full border-2
border-white text-white hover:bg-white/10`; "Join Us This Week" glass card
with 3 services, times in gold `#facc15`) → services (`section#services
section-padding bg-white dark:bg-gray-950`; H2 `font-serif text-3xl sm:text-4xl
lg:text-5xl` "Service Times"; 3 cards: Sunday Worship / Wednesday Bible
Study / Youth Group with descriptions) → about (`section#about section-padding
bg-gray-50 dark:bg-gray-900`; "Who We Are" + paragraph + "What We Believe"
list) → events (`section-padding bg-white dark:bg-gray-950`; "Upcoming
Events"; featured "Easter Sunday Celebration" + 3 list rows: Community
Service Day, Marriage Enrichment Workshop, Vacation Bible School) →
ministries (`section-padding bg-white dark:bg-gray-950`; "Get Connected";
6 cards: Children's Ministry, Youth Ministry, Small Groups, Worship Team,
Outreach & Missions, Care Ministry) → sermons (`section-padding bg-gray-50
dark:bg-gray-900`; "Recent Sermons"; 4 cards: Finding Peace in Uncertain
Times, The Power of Community, Living with Purpose, Grace That Changes
Everything) → stories of faith (`section-padding bg-primary-50 dark:bg-gray-900`;
testimonials w/ avatars `h-12 w-12 rounded-full`: The Martinez Family,
Michael Chen, Jennifer Wilson) → CTA banner (`relative overflow-hidden
bg-primary-700 py-20 lg:py-28`; "You're Welcome Here" white serif + "Plan
Your Visit") → footer (`bg-gray-900 text-white`; brand blurb + socials
Facebook/Instagram/YouTube; columns Connect / Grow / Resources; contact
info@gracecommunity.church, (512) 555-1234, 1200 Faith Avenue Austin TX
78701; © 2026 + Privacy/Terms).

## Design tokens (from `Base.E9qOMqaj.css`)

- **Primary (purple scale, Tailwind):** 50 #faf5ff · 100 #f3e8ff (Stories
  of Faith bg, white-pill hover) · 200 #e9d5ff (drawer border) · 300 #d8b4fe
  · 400 #c084fc · 500 #a855f7 · 600 #9333ea (solid CTA) · 700 #7e22ce (CTA
  banner bg, hover) · 900 #581c87. → `@theme` as `--color-primary-*`.
- **Accent gold:** #facc15 (service times only).
- **Grays:** 50 #f9fafb · 100 #f3f4f6 · 300 #d1d5db · 400 #9ca3af · 600
  #4b5563 · 700 #374151 · 800 #1f2937 · 900 #111827 (hero/footer) · 950
  #030712.
- **Fonts:** Lora (serif, 400–700 + italics) for headings via `font-serif`;
  Inter (300–700) for body/nav/buttons. One Google Fonts `<link>`:
  `family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap`.
- **Radii:** rounded-full (buttons, pills, avatars) · rounded-2xl (cards).
- **Buttons:** solid primary `rounded-full bg-primary-600 px-5 py-2.5
text-sm font-medium text-white hover:bg-primary-700`; white pill `bg-white
text-primary-700 hover:bg-primary-50` (hero px-8 py-4, header px-5 py-2.5);
  outline `border-2 border-white text-white hover:bg-white/10`; header Give
  `border border-white/30 text-white hover:bg-white/10`.
- **Sections:** hero bg-gray-900 + img opacity-40; white/gray-50 alternate
  (`section-padding` = `py-20 lg:py-28`, container `mx-auto max-w-7xl px-4
lg:px-8`); Stories bg-primary-50; banner bg-primary-700; footer bg-gray-900.
- **Dark mode:** `dark:` variants on every section/card; toggle flips `.dark`
  on `<html>` and persists.

## Implementation tasks (TDD order)

1. Scaffold `apps/sanctuary` (copy simplest app, rename package
   `@free-react-templates/sanctuary`, register `injectUiSource()` in
   `vite.config.ts`, run `npm install` at root so package-lock registers
   the workspace; `grep -c "free-react-templates/sanctuary"
package-lock.json` ≥ 1).
2. `index.css`: `@theme` — `--color-primary-*` purple scale + gold accent;
   `font-serif` → Lora; import Google Fonts in `index.html`.
3. Components: `Navbar` (fixed, transparent→solid, links, CTAs, dark
   toggle, mobile drawer w/ aria-expanded), `Hero` (photo overlay, serif
   headline, 2 CTAs, "Join Us This Week" glass card w/ gold times),
   `Services` (3 cards), `About` (Who We Are + beliefs), `Events` (featured
   - list), `Ministries` (6 cards), `Sermons` (4 cards), `Stories`
     (testimonials + avatars), `CtaBanner`, `Footer` (3 columns + contact +
     legal). Compose in `App.tsx`.
4. Tests per component mirroring the spec scenarios (100% coverage; nav
   duplicates in mobile drawer → `getAllByRole` and index).
5. Icons: lucide-react `Cross`/`Church`, `Menu`, `X`, `Moon`, `Sun`, `Play`,
   `Clock`, `MapPin`, `Phone`, `Mail`, `Heart`, `Users`, `BookOpen`,
   `Music`, `Globe`, `ChevronDown`; Facebook/Instagram/YouTube → inline SVG.
6. Images: `picsum.photos/seed/sanctuary-1/1600/900` (hero), `-2/-3/-4`
   (event/sermon cards 800×600), avatars 100×100.
7. Verify: `scripts/verify-app.sh sanctuary`; push PR, squash-merge
   immediately, then `[~]`→`[x]` on ALL THREE TEMPLATES.md lines (142,
   1296, 2911) + surge URL + `npm run readme:status`.

## Fidelity notes

- Section order + headings are the fidelity contract — keep 1:1.
- The gold #facc15 time highlights are the signature accent — do not
  replace with purple.
- Serif (Lora) headings vs Inter body contrast is essential to the look.
- Multi-page routes (Events/Ministries/Sermons/Contact/Give/Visit) collapse
  to single-page anchors; keep the nav link LABELS unchanged.
- Screenshot vs pages.dev DOM differ slightly on hero buttons (screenshot:
  purple CTA + "Watch Online"; DOM: white CTA + "Contact Us" outline) —
  either pairing is acceptable; keep pill shapes and purple/white colors.
