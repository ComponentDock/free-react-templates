# Kreativ (ColorLib Creativex 3) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-kreativ`.

## Source mapping

- **ColorLib item:** "Creativex 3" (TEMPLATES.md — THREE copies, lines 138,
  1459, 2907; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/creativex-3/
- **Preview URL:** https://creativex-colorlib.pages.dev/
  (HTTP 200, 58 KB DOM — live, analyzed 2026-08-08). NOTE:
  `preview.colorlib.com/theme/creativex-3/` returns 404 — products.js maps
  this slug to `creativex-colorlib.pages.dev/`. Do not redo this lookup.
- **Preview CSS:** `https://creativex-colorlib.pages.dev/_astro/Base.BjbRLE8f.css`
  (Tailwind v4 output; tokens extracted below).

## Reference research (done — do not redo)

### Screenshot (`creativex-template-1770211073725.jpg`, 2400×1892; verified via vision)

Modern creative-agency landing. White header: pink "P" logo icon + "Pixel
Studio" wordmark, centered nav (Work, Services, About, Contact), pink
"Start a Project" pill CTA right. Hero (light bg with soft pink glow left +
peach/orange glow right): pill badge "Award-Winning Creative Agency" (star
icon), huge bold headline "We Create **Bold Digital Experiences**" with a
pink/magenta gradient on "Bold Digital", grey subtext, pink primary CTA
"View Our Work →" + white/grey-bordered "Start a Project". Below: centered
stats row (150+ Projects Delivered, 50+ Happy Clients, 12 Team Members, 8
Years Experience) + "SCROLL" label with mouse icon; then a horizontal awards
strip (Awwwards Site of the Day 2024 · CSS Design Awards · FWA of the Month
2023 · Webby Awards Honoree 2023). Clean, bold, tech-forward; Inter
sans-serif; fuchsia `#d946ef` + orange `#f97316`.

### Live DOM (primary reference — matches the screenshot)

Section order: fixed header (`fixed top-0 z-50 bg-white/95 shadow-sm
backdrop-blur-sm`, logo + centered nav Work/Services/About/Contact +
"Start a Project" pill + hamburger; mobile panel `lg:hidden`) → hero
(`min-h-screen`; two absolute glow blobs `bg-primary-500 blur-[128px]` +
`bg-accent-500 blur-[128px]`; badge; h1 "We Create Bold Digital
Experiences" with gradient span; subtext; "View Our Work" primary pill +
"Start a Project" outline pill; stats 150+/50+/12/8; "Scroll" + mouse
indicator) → awards strip (`border-y border-gray-200 bg-white py-8`: 4
awards w/ years) → Services (`bg-gray-50 py-20 lg:py-28`: "What We Do" +
intro; 4 cards Web Design / Mobile Apps / Brand Identity / Digital
Marketing — gradient icon tile `from-primary-500 to-accent-500`, title,
blurb, 4-feature list, "Learn More" link) → Selected Work (white: heading +
"View All Projects" link; 3 cards — Nova Fintech Rebrand (Branding),
Mindful Wellness App (Mobile App), Urban Eats Platform (Web Design); image
800×600 + category + title + blurb) → Testimonials (`bg-gray-50`: "What
Clients Say"; 3 cards with quote, 100×100 avatar, name, role: David Kim /
CEO Nova Financial, Lisa Thompson / Founder Mindful Inc., Michael Torres /
Marketing Director Urban Eats) → Contact (white: "Let's Work Together" +
intro; left 4 blocks Email Us hello@pixelstudio.com / Call Us (555)
987-6543 / Visit Us 456 Creative Ave Suite 200 Los Angeles CA 90028 /
Follow Us; right form: Name, Email, Company (optional), Service Interested
In select, Budget Range select ($5k–$10k / $10k–$25k / $25k–$50k / $50k+),
Project Details textarea, "Send Message" submit) → footer (`border-t
border-gray-200 bg-gray-50`: brand blurb, Navigation / Services / Contact
columns, bottom bar "© 2026 Pixel Studio. All rights reserved." + Privacy
Policy + Terms of Service).

## Design tokens (from preview CSS)

- Brand fuchsia `#d946ef` (`primary-500`), hover `#c026d3` (`primary-600`);
  scale: 50 `#fdf4ff`, 100 `#fae8ff`, 300 `#f0abfc`, 400 `#e879f9`,
  700 `#a21caf`.
- Accent orange `#f97316` (`accent-500`) — gradient end, right glow blob.
- White `#ffffff`; section grey `#f9fafb` (`gray-50`); borders `#e5e7eb`
  (`gray-200`), `#d1d5db` (`gray-300`); text `#111827` (`gray-900`),
  `#374151` (`gray-700`), `#6b7280` (`gray-500`).
- Font: `'Inter', system-ui, sans-serif` (Google Fonts, 400–800).
- Buttons: pill `rounded-full`; primary bg `#d946ef` + white text +
  `shadow-lg shadow-primary-500/25`, hover `#c026d3`; outline `border-2
border-gray-300` white bg, hover `border-gray-400`/`bg-gray-50`; header
  CTA `px-5 py-2.5 text-sm`.
- Cards: `rounded-2xl`, white, `border-gray-200`, `p-8`; hover
  `border-primary-300` + `shadow-xl shadow-primary-500/10`.
- Badge: `rounded-full border-primary-200 bg-primary-50 text-primary-700`.
- Icon tiles: `rounded-xl bg-gradient-to-br from-primary-500 to-accent-500
p-3 text-white shadow-lg shadow-primary-500/25`.
- Form inputs: `rounded-lg border-gray-300 px-4 py-3`, focus
  `border-primary-500` + `ring-2 ring-primary-500/20`.
- Section bgs alternate: white ↔ `gray-50`.

## Implementation outline (section order 1:1)

1. **Header** — fixed, `bg-white/95 backdrop-blur-sm shadow-sm`; icon +
   wordmark "Kreativ" left, centered nav Work/Services/About/Contact, pill
   "Start a Project" right, hamburger → mobile panel with same links.
2. **Hero** — `min-h-screen` white; absolute glow blobs (fuchsia top-left,
   orange bottom-right, `blur-[128px]`); pill badge (star icon +
   "Award-Winning Creative Agency"); h1 "We Create **Bold Digital
   Experiences**" (`bg-clip-text text-transparent bg-gradient-to-r
from-primary-500 to-accent-500` on "Bold Digital"); subtext; CTAs
   "View Our Work" (primary, arrow icon) + "Start a Project" (outline);
   stats row 150+/50+/12/8; "Scroll" label + mouse indicator (border-2
   rounded-full with animated dot, `animate-scroll-indicator`).
3. **Awards strip** — `border-y border-gray-200 bg-white py-8`: Awwwards
   Site of the Day 2024, CSS Design Awards 2024, FWA of the Month 2023,
   Webby Awards Honoree 2023.
4. **Services** (`bg-gray-50`) — "What We Do" + intro; 4 cards in a
   4-up/2-up grid: gradient icon tile, title, blurb, 4 check-mark features,
   "Learn More" link (fuchsia, hover darker); card hover fuchsia border +
   fuchsia shadow.
5. **Selected Work** (white) — "Selected Work" heading + "View All
   Projects" link; 3 cards (image 800×600, category tag + title overlay on
   dark image area, blurb below).
6. **Testimonials** (`bg-gray-50`) — "What Clients Say"; 3 quote cards
   (quote, round avatar 100×100, name, role).
7. **Contact** (white) — left: "Let's Work Together" + intro + 4 info
   blocks (Email Us / Call Us / Visit Us / Follow Us with icons); right:
   form (Name, Email, Company optional, Service select, Budget select,
   Details textarea, "Send Message" pill submit) with client-side
   validation + success state.
8. **Footer** — `border-t border-gray-200 bg-gray-50`: brand blurb,
   Navigation / Services / Contact columns, bottom bar copyright +
   Privacy Policy + Terms of Service.
9. **Composition** — skip link, `<main>`, banner/contentinfo landmarks,
   document title "Kreativ — Creative Agency Template".

## Fidelity notes

- Match the live DOM: fixed header, min-h-screen hero with gradient
  headline + glow blobs + stats, awards strip, alternating white/`gray-50`
  sections, contact form with two selects. Section order 1:1.
- `#d946ef` brand fuchsia + `#f97316` accent, Inter, pill buttons,
  `rounded-2xl` cards, `#F9FAFB` alt section bgs.
- Never use "Creativex" or "Pixel Studio" as the brand; brand is "Kreativ".
- Placeholders: `picsum.photos/seed/kreativ-<n>/<w>/<h>` (deterministic):
  project cards 800×600, avatars 100×100. No copied assets.
- Icons: lucide-react (Star, ArrowRight, ArrowUpRight, Palette, Smartphone,
  Sparkles, Megaphone, Check, Mail, Phone, MapPin, Menu, X). Brand social
  icons (X/Facebook/Instagram/Linkedin) are NOT in lucide-react — inline
  SVG (simple-icons paths) if exact icons needed.
- Dark-mode classes (`dark:`) in the source may be skipped — light theme
  is the deliverable; note the decision in the PR.
- Form + newsletter: client-side only; "View All Projects", "Learn More"
  and all links decorative anchors.
- Scroll indicator animation: simple CSS keyframes (translateY loop) —
  no dependency.

## Commit + PR conventions

- Prep commit (this): `docs: prep Kreativ (ColorLib Creativex 3) spec +
research`.
- Implementation branch: `feat/template-kreativ`; PR title: `feat: Kreativ
— creative agency website template (ColorLib Creativex 3)`.
- PR body: source URL, preview URL (pages.dev — note the 404 on
  preview.colorlib.com), tokens, differences (rename, placeholders,
  single-page anchors), TEMPLATES.md three-copy note (lines 138 / 1459 /
  2907).
- After merge: surge URL `https://free-react-templates-kreativ.surge.sh`,
  TEMPLATES.md `[x]` on ALL THREE copies, `npm run readme:status`.
