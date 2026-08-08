# Podium (ColorLib Eventor) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-podium`.

## Source mapping

- **ColorLib item:** "Eventor" (TEMPLATES.md — THREE copies, lines 141,
  1678, 2910; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/eventor/
- **Preview URL:** https://eventor-colorlib.pages.dev/
  (HTTP 200, ~102 KB DOM — live, analyzed 2026-08-08). NOTE:
  `preview.colorlib.com/theme/eventor/` returns 404 — the ColorLib preview
  portal maps this slug to `eventor-colorlib.pages.dev/`. Do not redo this
  lookup.
- **Preview CSS:** `https://eventor-colorlib.pages.dev/_astro/index@_@astro.DkeXIFjA.css`
  (Tailwind v4 output; tokens extracted below).

## Reference research (done — do not redo)

### Screenshot (`eventor-template-1770211156837.jpg`, 2400×1892; verified via vision)

Dark tech-conference landing page. Hero: deep indigo/purple → maroon "aurora"
mesh gradient background; fixed nav with "TechSummit 2032" logo left, links
(Speakers/Schedule/Tickets/Sponsors/Venue) center, moon toggle + pink
"Get Tickets" button right; centered hero — pill badge "March 15-17, 2032 •
San Francisco, CA", huge white headline "The Premier Technology Conference"
with "Technology" in pink/magenta gradient, sub-paragraph, four dark glass
countdown boxes (45 DAYS / 12 HOURS / 30 MINUTES / 42 SECONDS), pink
gradient "Get Your Tickets" + dark outline "View Speakers" buttons, stats
row (3,000+ Attendees / 50+ Speakers / 3 Days / 20+ Workshops), "SCROLL"
indicator bottom. Space Grotesk sans throughout. Violet #8b5cf6 → rose
#f43f5e gradient is THE signature (CTAs, "Technology", "Get Tickets Now").

### Live DOM (primary reference — matches the screenshot)

Section order: fixed transparent header (brand + 5 links + gradient
"Get Tickets" pill + theme toggle + hamburger/mobile panel) → hero
(`relative min-h-screen overflow-hidden bg-gray-950`; aurora =
`bg-gradient-to-br from-primary-950 via-gray-950 to-accent-950` +
blur orbs `bg-primary-500/30 blur-[120px]` (top-left), `bg-accent-500/30
blur-[120px]` (bottom-right), `bg-primary-600/20 blur-[100px]` (center) +
1px grid overlay `bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,...)]`;
badge `rounded-full border border-primary-500/30 bg-primary-500/10
px-4 py-2 backdrop-blur-sm`; H1 `max-w-4xl text-5xl font-bold sm:text-6xl
lg:text-7xl` with "Technology" in `bg-gradient-to-r from-primary-400
to-accent-400 bg-clip-text text-transparent`; countdown boxes
`rounded-2xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur-sm`;
"Get Your Tickets" `rounded-full bg-gradient-to-r from-primary-500
to-accent-500 px-8 py-4 shadow-lg shadow-primary-500/25`; "View Speakers"
`rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm`;
stats `grid sm:grid-cols-2 lg:grid-cols-4`; SCROLL `absolute bottom-8
left-1/2 -translate-x-1/2`) → speakers (`bg-white py-20 lg:py-28`, dark
`dark:bg-gray-950`; header eyebrow + H2 "Learn From the Best" + sub; grid
`sm:grid-cols-2 lg:grid-cols-3` of 6 cards: `group relative
overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900`, photo
`aspect-[4/5]` zoom on hover, overlay `bg-gradient-to-t from-gray-900
via-gray-900/50 to-transparent`, bottom p-6: talk title
`text-sm font-medium text-primary-400`, name `text-xl font-bold text-white`,
role `text-sm text-gray-300`, social icons) → schedule (`bg-gray-50 py-20
lg:py-28`; eyebrow "3-Day Event", H2 "Event Schedule"; day tabs
`inline-flex rounded-full border p-1` — active `rounded-full bg-gray-900
text-white dark:bg-white dark:text-gray-900`; timeline rows `rounded-2xl
border bg-white p-6` — time col w-24, type badge `rounded-full bg-primary-100
text-primary-700`, title + speaker + location, "Add to Calendar" text link;
legend chips + "Download Full Schedule (PDF)") → tickets (`bg-white py-20
lg:py-28`; eyebrow "Limited Availability", H2 "Get Your Tickets"; grid
`lg:grid-cols-4` of 4 pricing cards `relative rounded-2xl border-2 p-8`:
Early Bird (Sold Out badge `bg-gray-500`, card `opacity-75 border-gray-200
bg-gray-50`, $299 + strikethrough $499, disabled button), Regular
("Most Popular" gradient badge, card `border-primary-500 bg-primary-50
dark:bg-primary-950/50`, $499, "Get Regular Pass"), VIP ($899, outline
button), Team ($1899, outline button); trust strip `mt-16 rounded-2xl
border bg-gray-50 p-8` `md:grid-cols-3` with `rounded-full bg-primary-100`
icon chips: Secure checkout / 30-day refund policy / Instant confirmation)
→ sponsors (`bg-gray-50 py-20 lg:py-28`; eyebrow "Our Partners", H2
"Proudly Sponsored By"; 4 tier groups with uppercase labels; logo cards
`rounded-xl border bg-white px-10 py-4 hover:border-primary-300
hover:shadow-lg` — Platinum TechCorp/CloudScale h-20, Gold DataFlow/
SecureNet/DevTools Inc h-16, Silver StartupHub/CodeCraft/InnovateLab
h-16, Community TechMedia/DevCommunity h-12 text links; "Become a Sponsor"
box with "Download Sponsorship Kit" + "Contact Sponsorship Team") → venue
(`bg-white py-20 lg:py-28`; eyebrow "The Location", H2 "Event Venue"; grid
`lg:grid-cols-2`: venue card (Moscone Center, 747 Howard Street,
Directions link) + Venue Features (6 CheckCircle2 items); Recommended
Hotels (St. Regis 0.2mi / Marriott Marquis 0.1mi / Hotel Vitale 0.5mi) +
"Use code TECHSUMMIT32…" + "Get Directions") → CTA banner
(`relative overflow-hidden bg-gray-950 py-20 lg:py-28`; eyebrow "Limited
tickets remaining", H2 "Don't Miss Out", sub, date + venue lines, "Get
Tickets Now" gradient, trust row) → footer (`border-t bg-gray-900
dark:border-gray-800`; 4 columns: brand + date/venue + socials, Event
links, Resources links, Contact email + address; © 2026 + Privacy Policy /
Terms of Service).

## Design tokens (from preview CSS)

- **Primary = Tailwind violet scale** (`--color-primary-*`): 100 `#ede9fe`
  (type badges, trust chips) · 400 `#a78bfa` (gradient start, speaker talk
  titles, hover links) · 500 `#8b5cf6` (gradient CTAs, text links) · 600
  `#7c3aed` (link hovers) · 700 `#6d28d9` (badge text) · 950 `#2e1065`
  (hero aurora gradient start).
- **Accent = Tailwind rose scale** (`--color-accent-*`): 400 `#fb7185`
  (gradient end light) · 500 `#f43f5e` (gradient CTAs, "Technology") ·
  950 `#4c0519` (hero aurora gradient end).
- **Grays** (Tailwind): 50 `#f9fafb` · 100 `#f3f4f6` · 200 `#e5e7eb` ·
  300 `#d1d5db` · 400 `#9ca3af` · 500 `#6b7280` · 600 `#4b5563` ·
  700 `#374151` · 800 `#1f2937` · 900 `#111827` · 950 `#030712`.
- **Font:** **"Space Grotesk"** (400–700) for everything — headings, body,
  buttons, countdown. One Google Fonts link in `index.html`
  (`family=Space+Grotesk:wght@400;500;600;700&display=swap`).
- **Radii:** `rounded-full` (buttons, pills, badges, day tabs, icon chips)
  · `rounded-2xl` 1rem (countdown boxes, speaker/schedule/pricing/sponsor/
  venue cards, trust strip) · `rounded-xl` 0.75rem (sponsor cards).
- **Buttons:** primary = gradient `bg-gradient-to-r from-primary-500
to-accent-500 text-white rounded-full shadow-lg shadow-primary-500/25
hover:shadow-xl hover:shadow-primary-500/30` (nav `px-5 py-2.5 text-sm
font-semibold`; hero `px-8 py-4 text-base`; card `block w-full px-6 py-3
text-center font-semibold`); outline `rounded-full border-2
border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:border-primary-500
hover:text-primary-500` (dark `dark:border-gray-700 dark:text-gray-300
dark:hover:border-primary-500 dark:hover:text-primary-400`); hero ghost
  `border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:border-white/30
hover:bg-white/10`; text links `font-medium text-primary-500
hover:text-primary-600`; disabled `bg-gray-300 text-gray-500
cursor-not-allowed`.
- **Surfaces:** hero/CTA banner `bg-gray-950` + aurora (gradient
  `from-primary-950 via-gray-950 to-accent-950` + blur orbs + 1px grid
  overlay); body alternates `bg-white` / `bg-gray-50` `py-20 lg:py-28`
  (dark `dark:bg-gray-950` / `dark:bg-gray-900`); footer `bg-gray-900
border-t border-gray-200` (dark `dark:border-gray-800`); speaker cards
  `rounded-2xl bg-gray-100` (dark `dark:bg-gray-900`); schedule rows
  `rounded-2xl border border-gray-200 bg-white p-6` (dark
  `dark:border-gray-700 dark:bg-gray-800`); pricing `rounded-2xl border-2
p-8` (Regular highlighted `border-primary-500 bg-primary-50
dark:bg-primary-950/50`); sponsor cards `rounded-xl border bg-white px-10
py-4` (dark `dark:border-gray-700 dark:bg-gray-800`); container
  `mx-auto max-w-7xl px-4 lg:px-8`.

## Implementation outline (section order 1:1)

1. **Navbar** — fixed, `bg-transparent` over dark hero; wordmark "Podium"
   (lucide Mic/Presentation icon + bold); links Speakers / Schedule /
   Tickets / Sponsors / Venue; "Get Tickets" gradient pill; dark toggle;
   mobile hamburger with panel (`aria-expanded`).
2. **Hero** — `bg-gray-950` + aurora layers (gradient div + 3 blur orbs +
   grid overlay div); date badge; H1 "The Premier Technology Conference"
   with gradient "Technology" span; sub; countdown row (4 glass boxes,
   Days/Hours/Minutes/Seconds); "Get Your Tickets" gradient + "View
   Speakers" ghost buttons; stats row (3,000+ Attendees / 50+ Speakers /
   3 Days / 20+ Workshops); SCROLL indicator.
3. **Speakers** — centered header (eyebrow, H2 "Learn From the Best" with
   gradient span, sub); `lg:grid-cols-3`; 6 cards: photo `aspect-[4/5]`,
   gradient overlay, talk title `text-primary-400`, name, role, social
   icons (inline SVGs for X/LinkedIn).
4. **Schedule** — eyebrow "3-Day Event", H2 "Event Schedule"; pill day
   tabs (March 15 Day 1 / March 16 Day 2 / March 17 Day 3) switching 3
   timeline data sets; row: time, type badge, title + speaker + location,
   "Add to Calendar"; legend chips; "Download Full Schedule (PDF)".
5. **Tickets** — eyebrow "Limited Availability", H2 "Get Your Tickets";
   4 pricing cards (Early Bird sold-out w/ strikethrough, Regular
   highlighted "Most Popular", VIP, Team); each: name, desc, price,
   features (Check icons), CTA; trust strip (3 items w/ icon chips).
6. **Sponsors** — eyebrow "Our Partners", H2 "Proudly Sponsored By";
   4 tier groups (Platinum/Gold/Silver/Community) with logo wordmark
   cards; "Become a Sponsor" callout + 2 CTAs.
7. **Venue** — eyebrow "The Location", H2 "Event Venue"; 2-col grid:
   venue card (Moscone Center, 747 Howard Street, Directions) + Venue
   Features (6 items); Recommended Hotels (3 w/ distances) + promo code
   note + "Get Directions".
8. **CTA banner** — `bg-gray-950` + aurora reuse; eyebrow "Limited tickets
   remaining", H2 "Don't Miss Out" (gradient span), sub, date + venue
   lines (Calendar/MapPin icons), "Get Tickets Now", trust row.
9. **Footer** — `bg-gray-900`; 4 columns (brand + date/venue + socials,
   Event, Resources, Contact); bottom bar © 2026 Podium + Privacy Policy /
   Terms of Service.
10. **Extras** — dark-mode toggle (persist), `scroll-smooth`, countdown
    (client-side to a fixed future date; tests assert four labelled units
    render), day-tab state, `aria-label` on icon-only controls.

## Fidelity notes

- The signature look = **violet→rose gradient** (`#8b5cf6` → `#f43f5e`)
  CTAs + Space Grotesk + dark aurora hero. NOT blue, NOT plain purple —
  the gradient IS the brand (matches the stale `template-eventor` prep's
  "blue-500/green-500" claim, which was WRONG — that prep was built from a
  different/older demo; the live pages.dev demo + screenshot are violet →
  rose).
- Demo brand is "TechSummit 2032"; our brand is **Podium** — keep the same
  copy shapes with the new brand ("© 2026 Podium. All rights reserved.",
  `info@podium.example`). Event dates may stay "March 15-17, 2032" (or a
  generic near-future date — same shape).
- Multi-page demo → single page: nav links are anchors to sections
  (`#speakers`, `#schedule`, `#tickets`, `#sponsors`, `#venue`) — matches
  the demo's own `/#speakers` style links.
- Schedule day tabs + countdown + dark toggle + mobile menu: all
  state-driven; test interactions per the spec scenarios (tab switch swaps
  timeline; countdown units render).
- Ticket buttons are decorative (`#` links or buttons with no-op);
  "Add to Calendar" / "Download Full Schedule (PDF)" / "Get Directions" /
  "Download Sponsorship Kit" are links to `#` — note in PR.
- Sponsor logos: styled text wordmarks in bordered cards (demo uses real
  company names — keep same names or genericize; keep the h-20/h-16/h-12
  size hierarchy).
- Never use "Eventor" as the brand; brand is "Podium".
- Placeholders: `picsum.photos/seed/podium-<n>/<w>/<h>` — speaker portraits
  400×500 (4:5); no hero image (aurora is pure CSS); no other imagery.
- Icons: lucide-react (Mic, Presentation, Menu, X, Moon, Sun, ArrowRight,
  ChevronDown, Calendar, MapPin, CheckCircle2, Check, Clock, Download,
  Sparkles, ShieldCheck, RefreshCcw, Zap, CreditCard). Brand social icons
  (X/LinkedIn/GitHub/YouTube) are NOT in lucide-react — inline SVG
  (simple-icons paths) like existing apps.
- Dark mode: `dark:` variants throughout (the demo ships them); keep the
  toggle + persistence.

## Commit + PR conventions

- Prep commit (this): `docs: prep Podium (ColorLib Eventor) spec + research`.
- Implementation branch: `feat/template-podium`; PR title: `feat: Podium —
tech conference website template (ColorLib Eventor)`.
- PR body: source URL, preview URL (pages.dev — note the 404 on
  preview.colorlib.com), tokens, differences (rename, placeholders,
  single-page anchors, client-side tabs/countdown), TEMPLATES.md
  three-copy note (lines 141 / 1678 / 2910).
- After merge: surge URL `https://free-react-templates-podium.surge.sh`,
  TEMPLATES.md `[x]` on ALL THREE copies, `npm run readme:status`.
