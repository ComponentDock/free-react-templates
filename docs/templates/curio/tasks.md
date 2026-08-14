# Curio (ColorLib Personal) — Tasks & Design Notes

> Prep artifacts (spec + research) prepared on `main` by the prep stream.
> Implementation ships later on `feat/template-curio` by an implementer
> stream — this folder is the handoff.

## Design notes

- **Original:** ColorLib "Personal" — free one-page personal portfolio/CV
  template (source: https://colorlib.com/wp/template/personal/).
  TEMPLATES.md rows: line 472 (**Bootstrap (216)** category) AND duplicate
  row line 2413 (**Personal (53)** category) — the same slug listed twice;
  BOTH must be marked `[x]` with the same surge URL at ship time.
- **Recreation name:** Curio (an old, curious, collectible object). App
  folder `apps/curio`, package `@free-react-templates/curio`,
  `public/CNAME` = `curio.free.componentdock.com`, `"homepage"` =
  `https://curio.free.componentdock.com`.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):**
  `https://preview.colorlib.com/theme/personal/` → HTTP 200, 35,976 bytes
  HTML. Stylesheets: `css/main.css` (67KB — ALL tokens) + bootstrap.css,
  font-awesome.min.css, linearicons.css, owl.carousel.css (testimonial
  slider), magnific-popup.css (portfolio zoom), nice-select.css,
  animate.min.css, jquery-ui.css. Screenshot
  (`personal-free-template.jpg`, 1200×946) browser-verified 2026-08-14.
- **CLASSIC ColorLib one-pager:** the whole page is driven by ONE accent
  family — periwinkle `#8490ff` → light blue `#62bdfc` gradient — used on
  primary buttons (hover), the facts band, the brands band, price-card
  hover, portfolio thumb overlays. Alternate section backgrounds:
  `#f9f9ff` lavender-white on content bands (services, portfolio, price),
  white elsewhere (hero, about, testimonial, blog), footer `#04091e`
  near-black navy. Font: Poppins everywhere.
- **Structure observed (1:1):** navbar (white, sticky; logo "Personal"
  = diamond icon + wordmark — ours "Curio" + lucide `Gem`; menu: Home,
  About, Services, Portfolio, Pricing, Blog [dropdown: Blog Home, Blog
  Single], Pages [dropdown], Contact; uppercase `#333` links, 2px animated
  underline hover) → hero (left: "THIS IS ME" eyebrow, `<h1>` "Philip
  Gilbert", paragraph, "DISCOVER NOW" square primary button; right:
  portrait behind a rounded-corner `#8490ff` square frame) → about
  (eyebrow "ABOUT ME" + uppercase "Personal Details", image left, text +
  "VIEW FULL DETAILS" right, `pt-120` white) → services ("My Offered
  Services", `#f9f9ff`, 6 cards: Web Design, Web Development, Photography,
  Clipping Path, Apps Interface, Graphic Design; colored circle icons,
  hover invert) → facts (INDIGO GRADIENT band, 4 counters: 2536 Projects
  Completed, 6784 Happy Clients, 2239 Cups of Coffee, 435 Real
  Professionals, white text) → portfolio ("Our Latest Featured Projects",
  `#f9f9ff`, tabs All/Vector/Raster/UI/UX/Printing, image grid w/ hover
  gradient overlay + zoom icon) → testimonial ("Client's Feedback About
  Me", white, slider of quote cards: quote + 5 stars + name/role — Harriet
  Maxwell CEO at Google, Carolyn Craig CEO at Facebook + avatar) → pricing
  ("Choose Your Plan", `#f9f9ff`, 4 cards Economy £199 / Business £299 /
  Premium £399 / Exclusive £499, package no. 01–04, features: Secure
  Online Transfer, Unlimited Styles for interface, Reliable Customer
  Service; Buy Now hidden → appears on hover, card flips to gradient) →
  blog ("Latest posts from our blog", white, 3 cards: Break Through Self
  Doubt And Fear / Portable Fashion for young women / Do Dreams Serve As A
  Premonition, author meta) → brands (INDIGO GRADIENT band, logo row) →
  footer (`#04091e`: About Me text / Newsletter "Stay updated with our
  latest trends" + email input / Follow Me "Let us be social" + social
  icons; bottom bar copyright — REPLACE "made with ♥ by Colorlib" with the
  Component Dock link).
- **Buttons (`.primary-btn`):** `#8490ff`, white uppercase text,
  line-height 42px, padding `0 30px`, weight 500, NO border radius
  (square); hover → gradient `#8490ff → #62bdfc`. Price Buy Now: white bg,
  `#222` text, weight 600, padding `10px 50px`, `display: none` → `block`
  on card hover. Newsletter subscribe: small solid button.
- **Service icon circles (6 core colors, map 1:1):** Web Design `#4cd3e3`
  cyan (lucide `Palette`), Web Development `#38a4ff` blue (`Code`),
  Photography `#f4e700` yellow (`Camera`), Clipping Path `#f44a40` red
  (`Scissors`), Apps Interface `#e66686` pink (`Smartphone`), Graphic
  Design `#73fbaf` green (`Brush`). Hover: circle → white bg + colored
  border, icon text → gradient clip.
- **Images:** picsum `https://picsum.photos/seed/curio-<n>/<w>/<h>` — hero
  portrait curio-1 (570×700), about curio-2 (540×450), portfolio curio-3..8
  (600×450), blog curio-9..11 (350×230), brands curio-12..17 (120×40),
  avatars curio-18..19 (80×80). Hero decorative frame = pure CSS rounded
  square `#8490ff` behind the portrait (no asset).
- **Animations (keep cheap, prefer CSS):** facts count-up on scroll (or
  static values — MUST match numbers); testimonial slider (simple state
  index + prev/next/dots is fine, no owl.carousel dependency); portfolio
  filter is client-side state; smooth-scroll anchors.
- **Copy:** paraphrase the reference placeholders (same KIND: eyebrow +
  name + blurb + CTA per section; feature lines verbatim-style: "Secure
  Online Transfer", "Unlimited Styles for interface", "Reliable Customer
  Service").

## Tasks

1. [ ] Scaffold `apps/curio` (copy the simplest existing app; rename
       package to `@free-react-templates/curio`; `public/CNAME` =
       `curio.free.componentdock.com`; `"homepage"` =
       `https://curio.free.componentdock.com`; register
       `injectUiSource()` in `vite.config.ts`; copy the MemoryStorage
       polyfill from `apps/cura/src/test/setup.ts` into
       `src/test/setup.ts`).
2. [ ] Root `npm install` so `package-lock.json` registers
       `@free-react-templates/curio` (deploy Action runs `npm ci`).
3. [ ] `index.html`: title "Curio — Personal Portfolio"; Google Fonts
       `<link>` for Poppins (400/500/600/700).
4. [ ] `src/index.css`: `@theme` tokens — `--color-brand: #8490ff`,
       `--color-brand-end: #62bdfc`, `--color-section: #f9f9ff`,
       `--color-footer: #04091e`, six service circle colors, Poppins
       font family; gradient utility (or `bg-gradient-to-br`-style
       Tailwind classes with the two stops).
5. [ ] Components (TDD, 100% coverage): - `Navbar` — sticky white; logo (lucide `Gem` + "Curio");
       links Home/About/Services/Portfolio/Pricing/Blog/Pages/Contact
       (anchor scroll); Blog + Pages dropdowns; mobile hamburger with
       `aria-expanded` + slide-in menu. - `Hero` — eyebrow "THIS IS ME", name heading, paragraph,
       "DISCOVER NOW" primary button; portrait image + CSS rounded
       `#8490ff` frame behind. - `About` — "ABOUT ME" / "Personal Details", image left, text +
       "VIEW FULL DETAILS". - `Services` — 6 cards + colored circle icons + hover invert. - `Facts` — gradient band, 4 counters (2536/6784/2239/435). - `Portfolio` — tabs (All/Vector/Raster/UI/UX/Printing) + grid +
       hover overlay + client-side filter. - `Testimonial` — slider (2+ quotes, 5 stars, name/role, avatar),
       prev/next + dots, keyboard operable. - `Pricing` — 4 plans, features, hover reveal Buy Now + gradient
       flip. - `Blog` — 3 post cards (image, meta, title). - `Brands` — logo row on gradient band. - `Footer` — About Me / Newsletter (validated submit) / Follow Me + Component Dock link in the bottom bar.
6. [ ] `App.tsx` composes: Navbar → Hero → About → Services → Facts →
       Portfolio → Testimonial → Pricing → Blog → Brands → Footer.
7. [ ] Tests mirror the spec's Gherkin scenarios (navbar dropdowns +
       mobile, hero layout + CTA, about, six services + hover, four
       facts, portfolio filtering + overlay, testimonial navigation,
       pricing hover reveal, blog cards, brands, footer widgets +
       newsletter validation + Component Dock link, mobile stacking).
8. [ ] `scripts/verify-app.sh curio` green (typecheck + lint + vitest
       100% + build).
9. [ ] Commit `feat: add Curio (personal portfolio) template`, PR +
       immediate squash merge, then TEMPLATES.md rows 472 AND 2413
       `[~]` → `[x]` + `https://curio.free.componentdock.com` +
       `npm run readme:status`, push.
10. [ ] PR description: source template, preview URL
        (`https://preview.colorlib.com/theme/personal/`), design tokens,
        the duplicate-row note, paraphrased copy + picsum placeholders.
