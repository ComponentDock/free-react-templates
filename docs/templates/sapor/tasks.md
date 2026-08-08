# Sapor (ColorLib Flavor 6) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sapor`.

## Source mapping

- **ColorLib item:** "Flavor 6" (TEMPLATES.md — THREE copies, lines 144,
  1781, 2913; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/flavor-6/
- **Preview URL:** https://flavor-colorlib.pages.dev/
  (HTTP 200, ~47 KB DOM — live, analyzed 2026-08-08). NOTE:
  `preview.colorlib.com/theme/flavor-6/` returns 404 — the ColorLib preview
  portal maps this slug to `flavor-colorlib.pages.dev/`. Do not redo this
  lookup.
- **Preview CSS:** `https://flavor-colorlib.pages.dev/_astro/Base.DA4xZmk2.css`
  (Tailwind v4 output, ~45 KB; tokens extracted below).

## Reference research (done — do not redo)

### Screenshot (`flavor-template-1770211372273.jpg`, 2400×1892; verified via vision)

Elegant high-contrast restaurant landing page. White fixed nav: fork-and-knife
icon + serif "La Tavola" logo left, centered sans links (Home/Menu/About/
Gallery/Contact), red "Reserve a Table" button right. Hero: full-width dark
dining-table photo, centered content — small uppercase red tagline "WELCOME
TO LA TAVOLA", huge white serif "Authentic Italian Cuisine", sub-paragraph
"…crafted with love and served with passion since 1985.", red "Reserve a
Table" button + transparent white-bordered "View Our Menu", scroll-down
arrow. Accent: vibrant warm red/coral (#dc2626 family). Headings serif
(Playfair Display), body sans (Inter). Buttons slightly rounded
(rounded-lg).

### Live DOM (primary reference — matches the screenshot)

`<html lang="en" class="scroll-smooth">` — LIGHT theme, NO dark mode.
Section order: header (`header.fixed.left-0.right-0.top-0.z-50.transition-all.duration-300`
`data-header`, transparent→solid on scroll: fork/knife icon + "La Tavola"
serif wordmark; links Home/Menu/About/Gallery/Contact `text-sm font-medium
text-gray-600 hover:text-primary-600`; "Reserve a Table" `rounded-lg
bg-primary-600 px-5 py-2.5 font-medium text-white hover:bg-primary-700`;
hamburger `rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden` +
drawer) → hero (`relative min-h-[90vh] flex items-center justify-center
overflow-hidden`; photo bg + dark overlay; `container mx-auto px-4 py-20
text-center lg:px-8`; tagline `span mb-4 inline-block font-medium
tracking-widest text-primary-400 uppercase text-sm` "Welcome to La Tavola";
H1 `font-serif text-5xl font-bold text-white sm:text-6xl lg:text-7xl`
"Authentic Italian Cuisine"; sub "Experience the finest Italian traditions,
crafted with love and served with passion since 1985."; CTAs "Reserve a
Table" red + "View Our Menu" `border-2 border-white/60 text-white
hover:bg-white/10`; scroll arrow) → about (`bg-white py-20 lg:py-28`; H2
`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900` "A
Family Tradition of Excellence"; paragraphs "For nearly four decades… Founded
by the Rossi family in 1985…"; stats `grid grid-cols-3` — "40+ Years of
Excellence", "50K+ Happy Guests", "4.9 Star Rating") → menu (`bg-gray-50
py-20 lg:py-28`; eyebrow "Our Menu" + H2 "Chef's Selections" + sub; 4 cards
`bg-white rounded-xl/2xl`: Burrata $18 + "Chef's Pick" badge, Spaghetti alla
Carbonara $24, Branzino al Forno $38, Tiramisu $12 — name `font-serif
text-xl font-semibold`, desc, red price) → testimonials (`bg-white py-20
lg:py-28`; H2 "Reviews & Testimonials"; cards: Sarah M., Michael R. with
stars + quotes) → reservation (`relative overflow-hidden bg-gray-900 py-20
lg:py-28`; H2 white serif "Make a Reservation"; form fields input name,
input email, input date, select time, select guests, input phone, textarea
notes; submit `w-full rounded-lg bg-primary-600 py-4 text-base font-medium
text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700` "Request
Reservation") → gallery (`bg-gray-50 py-20 lg:py-28`; H2 "A Glimpse of La
Tavola"; `mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`;
alts: Elegant dining room, Fresh pasta dish, Italian wine selection,
Restaurant interior) → footer (`bg-gray-900 text-white`; blurb "Authentic
Italian Cuisine" + contact (555) 123-4567 / reservations@latavola.com / 123
Main Street San Francisco CA 94102 + socials; columns Quick Links / Hours
(`h3 text-sm font-semibold uppercase tracking-wider`; rows `li flex
justify-between text-sm` — Mon 5–10 PM, Fri 5–11 PM, Sat 12–11 PM, Sun
12–9 PM; weekday `text-gray-400`, times `text-white`) / Newsletter
(subscribe input + `rounded-lg bg-primary-600 px-5 py-2.5 font-medium
text-white hover:bg-primary-700` "Subscribe"); bottom bar © 2026 + Privacy/
Terms).

## Design tokens (from `Base.DA4xZmk2.css`)

- **Primary (RED scale, Tailwind):** 100 #fee2e2 · 300 #fca5a5 · 400 #f87171
  (tagline) · 500 #ef4444 · 600 #dc2626 (buttons, prices) · 700 #b91c1c
  (hover) · 900 #7f1d1d. → `@theme` as `--color-primary-*`. (The CSS also
  ships unused default orange/amber/green/purple vars — ignore them; the
  classes resolve to the red scale.)
- **Grays:** 50 #f9fafb (menu/gallery bg) · 100 #f3f4f6 · 400 #9ca3af ·
  500 #6b7280 · 600 #4b5563 (nav links) · 700 #374151 · 800 #1f2937 · 900
  #111827 (reservation + footer) · 950 #030712.
- **Fonts:** Playfair Display (serif, 400–700) for headings/logo/stats via
  `font-serif`; Inter (400–700) body/nav/buttons. One Google Fonts `<link>`:
  `family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap`.
- **Radii:** rounded-lg (buttons) · rounded-xl/2xl (cards) · rounded-full
  (badges/avatars).
- **Buttons:** primary `rounded-lg bg-primary-600 px-5 py-2.5 font-medium
text-white transition-colors hover:bg-primary-700`; hero secondary
  `rounded-lg border-2 border-white/60 text-white hover:bg-white/10`; form
  submit `w-full ... py-4 text-base ... shadow-lg shadow-primary-600/25`;
  text links `text-sm font-medium text-gray-600 hover:text-primary-600`.
- **Sections:** hero photo + dark overlay; alternate `bg-white` / `bg-gray-50`
  with `py-20 lg:py-28`; reservation + footer `bg-gray-900`. Container
  `mx-auto max-w-7xl px-4 lg:px-8`.
- **NO dark mode** — `<html lang="en" class="scroll-smooth">`, no `.dark`
  variants anywhere. Do not add a dark toggle.

## Implementation tasks (TDD order)

1. Scaffold `apps/sapor` (copy simplest app, rename package
   `@free-react-templates/sapor`, register `injectUiSource()` in
   `vite.config.ts`, run `npm install` at root so package-lock registers
   the workspace; `grep -c "free-react-templates/sapor" package-lock.json`
   ≥ 1).
2. `index.css`: `@theme` — `--color-primary-*` red scale; `font-serif` →
   Playfair Display; import Google Fonts in `index.html`.
3. Components: `Navbar` (fixed, transparent→solid, links, Reserve CTA,
   mobile drawer w/ aria-expanded), `Hero` (photo bg + overlay, tagline,
   serif headline, 2 CTAs, scroll arrow), `About` (history + 3 stats),
   `Menu` (4 dish cards + Chef's Pick badge), `Testimonials` (2+ cards),
   `Reservation` (dark band + form w/ name/email/date/time/guests/phone/
   notes + submit), `Gallery` (responsive grid, 8 tiles), `Footer` (contact,
   Quick Links, Hours, Newsletter, legal). Compose in `App.tsx`.
4. Tests per component mirroring the spec scenarios (100% coverage; mobile
   nav duplicates → `getAllByRole` + index; form fields by label/name).
5. Icons: lucide-react `UtensilsCrossed`/`ChefHat`, `Menu`, `X`, `Star`,
   `Phone`, `Mail`, `MapPin`, `Clock`, `ChevronDown`, `ArrowDown`, `Send`;
   socials → inline SVG or lucide (Twitter/Github/Linkedin).
6. Images: `picsum.photos/seed/sapor-1/1920/1080` (hero), `-2..-5` (dish
   cards 800×600), `-6..-13` (gallery tiles 800×600), avatars 100×100.
7. Verify: `scripts/verify-app.sh sapor`; push PR, squash-merge
   immediately, then `[~]`→`[x]` on ALL THREE TEMPLATES.md lines (144,
   1781, 2913) + surge URL + `npm run readme:status`.

## Fidelity notes

- Section order + headings are the fidelity contract — keep 1:1.
- The red primary (#dc2626) is the signature accent — do not swap for
  orange/amber (the demo CSS carries unused orange defaults; the classes
  resolve to RED).
- Serif (Playfair Display) headings vs Inter body is essential to the look.
- The template has NO dark mode — the only dark sections are the reservation
  band and footer (bg-gray-900). Do not add `dark:` variants or a toggle.
- Multi-page routes (menu/about/gallery/contact) collapse to single-page
  anchors; keep the nav link LABELS unchanged.
- Screenshot vs demo match 1:1 (same hero, tagline, buttons, red accents).
  Brand renamed La Tavola → "Sapor"; keep the same _kind_ of content
  (authentic Italian restaurant, since 1985, Rossi-family style copy).
