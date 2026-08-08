# Keyhaven (ColorLib Estatehub) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-keyhaven`.

## Source mapping

- **ColorLib item:** "Estatehub" (TEMPLATES.md — THREE copies, lines 140,
  2588, 2909; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/estatehub/
- **Preview URL:** https://estatehub-colorlib.pages.dev/
  (HTTP 200, ~61 KB DOM — live, analyzed 2026-08-08). NOTE:
  `preview.colorlib.com/theme/estatehub/` returns 404 — the ColorLib preview
  portal maps this slug to `estatehub-colorlib.pages.dev/`. Do not redo this
  lookup.
- **Preview CSS:** `https://estatehub-colorlib.pages.dev/_astro/Base.C6er4gMe.css`
  (Tailwind v4 output; tokens extracted below).

## Reference research (done — do not redo)

### Screenshot (`estatehub-template-1770211352442.jpg`, 2400×1892; verified via vision)

Luxury real-estate landing page. Hero: large modern white villa with pool
photo, darkened with a navy/dark gradient overlay; white serif headline "Find
Your Dream Home" with "Dream Home" in bright green serif; white rounded
search card with Buy/Rent/Sell tabs (Buy active in green), three dropdowns
(Location / Property Type / Price Range) and a green Search button; below it
green stat numbers (500+, $2B+, 15+, 98%) on dark. Green is the accent
everywhere (CTAs, stat numbers, active tab). Nav: "Prestige Homes" wordmark
left, links Properties/Agents/About/Contact, green "List Your Property"
button right. Serif (Playfair Display) display headings + Inter sans body.
Below the fold: white stats strip, 2-column property card grid, gray-50
feature/agent sections, testimonial cards, green CTA banner.

### Live DOM (primary reference — matches the screenshot)

Section order: fixed header (`bg-white/95 backdrop-blur-sm shadow-sm`; brand

- 4 links + "List Your Property" `rounded-lg bg-primary-600` CTA + theme
  toggle + hamburger with mobile panel) → hero (`relative min-h-[85vh]
overflow-hidden bg-gray-900`; Unsplash villa photo `opacity-40` +
  `bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent`; H1 serif
  white with `text-primary-500` "Dream Home"; sub `text-gray-300`; search
  card `rounded-2xl bg-white shadow-2xl` with tabs Buy(active
  `bg-primary-600`)/Rent/Sell (`bg-white/20 backdrop-blur-sm`) + form
  `grid gap-6 sm:grid-cols-2 lg:grid-cols-4` of 3 selects + Search submit
  `rounded-xl bg-primary-600 shadow-lg shadow-primary-600/30`; quick stats
  row `text-white` 500+/$2B+/15+) → stats strip (`border-b border-gray-200
bg-white py-12`; `grid sm:grid-cols-4`; values `text-primary-600`) →
  featured properties (`bg-white py-20 lg:py-28`; header row + "View All
  Properties"; `grid lg:grid-cols-2`; 4 cards — first `lg:flex` horizontal
  with `lg:w-1/2` image; badges `rounded-full bg-primary-600` "For Sale" +
  `bg-gray-900` "New"; price chip `rounded-lg bg-white/95 backdrop-blur-sm`;
  features row) → why choose (`bg-gray-50 py-20 lg:py-28`; centered header;
  `grid sm:grid-cols-2 lg:grid-cols-4`; icon chips `rounded-xl bg-primary-100
text-primary-600`; 4 cards) → agents (`bg-gray-50`; centered header;
  `grid sm:grid-cols-2 lg:grid-cols-3`; 3 cards with `h-32 w-32 rounded-full`
  photos, role `text-primary-600`, Call/Email links) → testimonials
  (`bg-white`; centered header; 3 cards — quote icon `text-primary-100`
  absolute top-right, blockquote, property line `text-primary-600`, author
  row with avatar + name/role) → CTA banner (`relative overflow-hidden
bg-primary-700 py-20 lg:py-28`; 20px grid-pattern overlay; H2 serif white;
  sub `text-primary-100`; white "Browse Properties" + outline "Contact Us"
  buttons) → footer (`border-t border-gray-200 bg-gray-50`; 4 columns:
  brand blurb + 4 social chips (Facebook/Instagram/LinkedIn/YouTube,
  `hover:bg-primary-600`), Quick Links, Properties (For Sale/For Rent) +
  Neighborhoods (6 boroughs/towns), Contact (address/phone/email);
  bottom bar © 2026 + Privacy Policy / Terms of Service / Fair Housing).

## Design tokens (from preview CSS)

- **Primary = Tailwind green scale** (`--color-primary-*`): 50 `#f0fdf4` ·
  100 `#dcfce7` · 500 `#22c55e` (hero "Dream Home" accent, focus borders) ·
  600 `#16a34a` (buttons, active tab, badges, stat numbers) · 700 `#15803d`
  (CTA banner bg, button/link hovers).
- **Grays** (Tailwind): 50 `#f9fafb` · 100 `#f3f4f6` · 200 `#e5e7eb` ·
  300 `#d1d5db` · 400 `#9ca3af` · 500 `#6b7280` · 600 `#4b5563` ·
  700 `#374151` · 800 `#1f2937` · 900 `#111827` · 950 `#030712`.
- **Fonts:** Playfair Display (serif display; 400–700) for H1/H2 headings;
  Inter (400–700) for body/nav/buttons/labels. One Google Fonts link in
  `index.html`
  (`family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700`).
- **Radii:** `rounded-lg` 0.5rem (nav CTA, banner buttons, price chip) ·
  `rounded-xl` 0.75rem (selects, Search, icon chips) · `rounded-2xl` 1rem
  (search card, property/agent/testimonial cards) · `rounded-full` (badges,
  agent photos).
- **Buttons:** primary `bg-primary-600 text-white hover:bg-primary-700`
  (nav `rounded-lg px-5 py-2.5 text-sm font-semibold`; search `rounded-xl
px-6 py-3.5 font-bold shadow-lg shadow-primary-600/30`); inactive tabs
  `bg-white/20 backdrop-blur-sm hover:bg-white/30`; white-on-green
  `bg-white text-primary-700 hover:bg-primary-50`; outline-on-green
  `border-2 border-white/30 text-white hover:bg-white/10`; text links
  `text-sm font-semibold text-primary-600 hover:text-primary-700` with
  ArrowRight icon.
- **Surfaces:** hero photo `opacity-40` + `bg-gray-900` +
  `bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent`; stats
  strip `bg-white border-b border-gray-200 py-12`; body alternates
  `bg-white` / `bg-gray-50` `py-20 lg:py-28` (dark `dark:bg-gray-950` /
  `dark:bg-gray-900`); CTA banner `bg-primary-700` + 20px grid-pattern
  overlay; footer `bg-gray-50 border-t border-gray-200` (dark
  `dark:bg-gray-900`); cards `rounded-2xl bg-white shadow-md hover:shadow-xl`
  (dark `dark:bg-gray-800`); section container `mx-auto max-w-7xl px-4 lg:px-8`;
  icon chip `mx-auto flex h-14 w-14 items-center justify-center rounded-xl
bg-primary-100 text-primary-600` (dark `dark:bg-primary-900/30
dark:text-primary-400`).

## Implementation outline (section order 1:1)

1. **Navbar** — fixed `bg-white/95 backdrop-blur-sm shadow-sm`; wordmark
   "Keyhaven" (lucide Building2/Home icon + bold text); links Properties /
   Agents / About / Contact; "List Your Property" primary button; dark
   toggle; mobile hamburger with panel (`aria-expanded`).
2. **Hero** — picsum villa photo + `bg-gray-900` + gradient overlay; H1
   serif "Find Your Dream Home" (`text-primary-500` span); sub; quick stats
   row (500+ / $2B+ / 15+).
3. **Search card** — tabs Buy (active `bg-primary-600`)/Rent/Sell
   (`bg-white/20`); form grid of 3 selects (Location / Property Type / Price
   Range with exact option lists) + Search submit; tab click swaps active
   style + hidden status value. Client-side only.
4. **Stats strip** — `border-b bg-white py-12`, 4 centered cells
   `text-primary-600` values ($2B+ Total Sales Volume / 500+ Properties Sold
   / 15+ Years Experience / 98% Client Satisfaction).
5. **Featured Properties** — header row + "View All Properties"; `lg:grid-cols-2`
   grid; 4 cards (Manhattan Penthouse $8.5M first + horizontal lg:flex +
   "New" badge; Brooklyn Townhouse $3.2M; Hamptons Estate $24.5M; Tribeca
   Loft $4.8M); each: image w/ hover zoom, "For Sale" badge, price chip,
   title, location w/ MapPin, bed/bath/sqft features row.
6. **Why Choose Keyhaven** — centered header; 4 icon cards (Trusted
   Expertise / Exclusive Listings / Personal Service / Best Value) with
   `bg-primary-100` icon chips.
7. **Meet Our Agents** — centered header; 3 cards (Sarah Mitchell / Michael
   Chen / Jennifer Ross): round photo, role in green, sales tagline, tag
   chips, Call + Email links; "View All Agents".
8. **What Our Clients Say** — centered header; 3 testimonial cards (David &
   Emma Thompson / Robert Chen / Sofia Martinez): quote icon top-right,
   blockquote, green property line, avatar + name/role row.
9. **CTA banner** — `bg-primary-700` + grid-pattern overlay; serif white
   H2; `text-primary-100` sub; white "Browse Properties" + outline "Contact
   Us".
10. **Footer** — 4 columns (brand + 4 social chips, Quick Links, Properties
    - Neighborhoods, Contact address/phone/email); bottom bar © 2026
      Keyhaven + Privacy Policy / Terms of Service / Fair Housing.
11. **Extras** — dark-mode toggle (persist), `scroll-smooth`.

## Fidelity notes

- The signature look = Playfair serif headings + Inter UI + **green**
  primary (NOT amber — the stale `template-estatehub` prep said "amber",
  which was wrong; the live demo and screenshot are green #16a34a).
- Demo brand is "Prestige Homes"; our brand is **Keyhaven** — keep the same
  copy shapes with the new brand ("Why Choose Keyhaven", "© 2026 Keyhaven.
  All rights reserved."). Contact details → placeholders
  (`(555) 010-0100`, `info@keyhaven.example`).
- Multi-page demo → single page: nav links are decorative anchors (Properties
  → `#featured`/`#properties`, Agents → `#agents`, About → `#why-choose` or
  `#`, Contact → `#contact`); "View All Properties"/"View All Agents" → `#`
  or matching anchors. Note this in the PR.
- Search form: client-side only (no backend). Tabs + selects are interactive
  UI; submit may navigate nowhere (preventDefault) — tests must cover tab
  switching and the hidden status value.
- Dark mode: `dark:` variants throughout (the demo ships them); keep the
  toggle + persistence.
- Never use "Estatehub" as the brand; brand is "Keyhaven".
- Placeholders: `picsum.photos/seed/keyhaven-<n>/<w>/<h>` — hero 1920×1080,
  property cards 800×600, agent portraits 400×400, testimonial avatars
  100×100 (or initials circles).
- Icons: lucide-react (Building2, Home, Menu, X, Moon, Sun, MapPin,
  BedDouble, Bath, Ruler, Search, Phone, Mail, ArrowRight, Quote,
  ShieldCheck, KeyRound, UserCheck, BadgeDollarSign). Brand social icons
  (Facebook/Instagram/LinkedIn/YouTube) are NOT in lucide-react — inline SVG
  (simple-icons paths) like existing apps.
- Stats, tabs, mobile menu, dark toggle: all state-driven; test interactions
  per the spec scenarios.

## Commit + PR conventions

- Prep commit (this): `docs: prep Keyhaven (ColorLib Estatehub) spec +
research`.
- Implementation branch: `feat/template-keyhaven`; PR title: `feat: Keyhaven
— real estate website template (ColorLib Estatehub)`.
- PR body: source URL, preview URL (pages.dev — note the 404 on
  preview.colorlib.com), tokens, differences (rename, placeholders,
  single-page anchors, client-side search), TEMPLATES.md three-copy note
  (lines 140 / 2588 / 2909).
- After merge: surge URL `https://free-react-templates-keyhaven.surge.sh`,
  TEMPLATES.md `[x]` on ALL THREE copies, `npm run readme:status`.
