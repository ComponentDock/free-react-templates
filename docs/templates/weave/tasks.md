# Weave (ColorLib Olla) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-weave`.

## Design notes (replication findings)

- **Original:** ColorLib "Olla" — a SaaS/site-builder BUSINESS landing
  one-pager (page title "Business | Template"; source:
  https://colorlib.com/wp/template/olla/, appears 2× in TEMPLATES.md — line
  611 Bootstrap 5 (89) + line 1115 Business (365); mark ALL `[x]` when done).
  The app name MUST differ from the source — hence **Weave** (single
  lowercase word, the idea of weaving sections from a component library
  into a site; no collision with `apps/`, `openspec/specs/`, or
  `docs/templates/` — verified 2026-08-13).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/olla/ (HTTP
  200, ~36 KB HTML; `assets/css/style.css` ~79 KB parsed for tokens). Stack:
  Bootstrap 5 + owl.carousel + slicknav + nice-select + magnific-popup +
  themify/fontawesome icons — recreate ALL interactivity client-side in
  React (accessible accordion/tab patterns, no jQuery libs).
- **Screenshot:** `olla-colorlib-template.jpg` (1200×946, viewed in browser):
  SaaS landing one-pager on stark white. Thin light-grey notification strip
  on top ("This handy little bar is great for informing visitors of various
  features." + orange Learn More); white header ("olla." logo left, centered
  nav, blue "Free Quote" button right). SPLIT hero: left — small blue tag,
  huge bold dark headline "Build your website in record time.", lighter grey
  sub-line, email input + blue "Get Free Quote" button, faint dotted grid
  behind text; right — photo of a bearded tattooed man in a black tee typing
  on a laptop, pendant lamp overhead. Below: centered heading + row of THREE
  pastel feature cards (lavender / soft salmon / pale mint), centered icons.
  Modern, clean, startup-y; blue CTAs; dark navy bands (brand logos, CTA);
  white cards on light grey pricing.
- **Visual design (DOM + CSS tokens + screenshot):** BRAND BLUE `#2845BA`
  (64 uses) — `.btn` bg (Cabin, padding 22px 32px, radius 0 SHARP, white
  text; hover `::before` sweeps CORAL `#ec583a` scaleX 0→1), hero/header
  "Get Free Quote", footer form submit. DARK NAVY `#041735` (16 uses) —
  announcement strip `.header-top`, `.brand-area`, `.wantToWork-area`,
  `.footer-wrapper`; hero p, cat h5, card-mid h4, section h2 color. PASTELS
  — `#F0F3FF` / `#F0E9FF` / `#E9FFFD` (cat1/2/3; mint also the hover fill;
  `.single-cat` radius 5px, padding 60px 60px). PRICING `#F1F2F6` bg, white
  `.card-wrapper` radius 6px padding 45px 20px. TAB `#4AA8C6` on
  `rgba(74,168,198,0.1)` (radius 4px, padding 10px 19px, Cabin 14px/500).
  PINK GRADIENT `#ff4495`→`#ff6d6d` (`.btn_0` "Meet Our Customers": 11px
  36px, 18px/500). BORDERS `#DBDEE9` (header-bottom), shadow
  rgba(4,23,53,0.04), footer border-top rgba(255,255,255,0.09). TEXT
  `#5C6168` (footer input), `#999/#888/#777` muted. Fonts: **Cabin**
  (display + buttons — hero h1 60px/700/lh 1.1, section h2 40px/700/lh 1.3,
  cat h5 25px/600, pricing h4 40px/700, CTA h2 40px/400) + **Open Sans**
  (body 16px/400). Section rhythm: section-padding 120px 0 (100/70
  responsive), pricing 80px 0, brand-area 60px 0, slider-height 800px
  (650/500/450/350), footer-form input 60px radius 4px, gallery-img 565px /
  small-img 410px.

## Section-by-section fidelity notes (build order)

1. **Header** — top strip `bg-[#041735]` text-center py-5 (announcement
   copy + orange "Learn More" link — small, 15px); bottom white sticky
   `shadow-[0_3px_8px_rgba(4,23,53,0.04)] border-b border-[#DBDEE9]`; row:
   left logo (text brand "Weave" — Cabin), center nav (Home / About /
   Services / Portfolio / Blog dropdown: Blog Details / Elements / Contact;
   `hidden lg:flex`), right blue "Get Free Quote" button (`bg-[#2845BA]
px-8 py-[22px] text-white font-[Cabin]`, search icon). Sticky on scroll:
   `sticky top-0` + shadow. Mobile: hamburger + slide-down/drawer menu
   (slicknav equivalent — accessible `aria-expanded` toggle).
2. **Hero** — `h-[800px]` (lg 650, md 500, sm 450, xs 350) split: left
   caption `lg:w-[35%]` (45-50% below 1600px — use `xl:w-[35%] lg:w-[45%]`)
   `pr-[50px]`: h1 "Build your website in record time." —
   `font-[Cabin] text-[60px] font-bold leading-[1.1] text-[#041735]` (clamp
   down mobile); p "Combine sections from Weave's vast component library
   and create beautiful." — `text-[22px] font-medium text-[#041735]
leading-[1.4] mb-10`; blue "Get Free Quote" btn (search icon). Right:
   workspace photo (picsum seed — SCREEN: needs a desk/workspace/laptop
   scene; keep the dotted-grid decorative element optional — the source has
   a `.hero-shape` image; can skip or render a subtle dotted bg pattern).
3. **Feature cards** — `py-[120px]`; centered h2 (Cabin 40px/700 `#041735`)
   "Weave helps you to spruik your product's features." + p; grid of 3
   `single-cat` cards: `bg-[#F0F3FF]` / `bg-[#F0E9FF]` / `bg-[#E9FFFD]`,
   `rounded-[5px] p-[60px]` (lg:p-[40px]), centered lucide icon, h5
   `text-[25px] font-semibold text-[#041735]` — Unlimited Components /
   Awesome Support / Responsive Design + blurb; hover: mint `#E9FFFD` fill
   sweep (use a `::before`-style absolute layer that scales in, or a simple
   `hover:bg-[#E9FFFD]` transition — fidelity: the source fills from
   bottom; group-hover translate-y utility is close enough, note in PR).
4. **About features** — `pb-[120px]`; row: left caption — h2 "All the
   features you'd expect." (Cabin 40px/700) + THREE rows (icon + h4 + p):
   Tons of pre-made sections / Complete CMS integration / Stellar after-sales
   support (paraphrase blurbs); right: about photo (picsum).
5. **Brand logos band** — `bg-[#041735] py-[60px]`; centered white h2 "You'll
   be in good company." + p (white/70) + pink gradient "Meet Our Customers"
   btn (`bg-gradient-to-b from-[#ff4495] to-[#ff6d6d] px-9 py-[11px]
text-white text-lg font-medium`); below: 2×3 grid of placeholder brand
   logos (grey/white monochrome text or simple SVG marks — do NOT copy
   brand1-4.png; use text-based fake brands like the source's logo row).
6. **FAQ accordion** — `py-[120px]`; row: left h2 "Work fast, create
   beautifully." (Cabin 40px/700) + paragraph; right `collapse-wrapper`:
   accordion of ~4-6 items (paraphrased product FAQs — the source's demo
   copy is generic/insurance filler; keep same kinds: "Complete CMS
   integration?", etc.), first item open, plus/minus toggle, smooth
   expand/collapse, `aria-expanded` + `aria-controls`; each answer: "Weave
   is perfect for building websites of almost any kind."-style lorem.
7. **Pricing** — `bg-[#F1F2F6] py-20`; h2 "Build beautiful, feature-complete
   websites."; Yearly / Monthly toggle (two buttons in a pill — active
   `bg-[#4AA8C6] text-white`, inactive `bg-[rgba(74,168,198,0.1)]
text-[#4AA8C6]`, `rounded-[4px] px-[19px] py-[10px]` Cabin 14px/500);
   two white cards `rounded-[6px] p-[45px_20px]`: h4 "$ 20 /month" and
   "$ 05 /month" (Cabin 40px/700 `#041735`), "per user, per month", feature
   list (check icons), CTA button. Toggle switches active card set
   (tab behavior with `role="tablist"`/`role="tab"` or simple state swap —
   keep it testable).
8. **Testimonials** — `py-[120px]`; centered h2 "They use Weave to create
   great websites." + p; TWO quote cards: quote text (paraphrase) + founder
   row (round avatar — picsum seed, name, role). Simple 2-col grid (no
   carousel in static DOM — it's two caption blocks).
9. **Project gallery** — `py-[120px]`; centered h2 "Projects we have done.";
   grid of 3 tiles: photo `h-[565px]` (or aspect ratio) with absolute
   `bg-black/30` overlay + content (h4 "Mobile App"-style title + p + link
   icon) revealed on hover (`opacity-0 group-hover:opacity-100`).
10. **CTA band** — `bg-[#041735] py-[100px]` (cover bg optional); row:
    left white h2 "Create your amazing website with Weave" (Cabin 40px/400
    lh-1.5) + p; right blue "Get Free Quote" btn.
11. **Footer** — `bg-[#041735]`; grid 4 cols: (1) logo + about paragraph
    (white/70 14px lh-1.8); (2) "Quick Links": Work · Services · Tips &
    Tricks; (3) "Support": FAQ · Submit Ticket · Contact Us; (4)
    "Newsletter": white email input (`h-[60px] rounded-[4px]`, placeholder
    "Enter your email" `#5C6168`) + absolute blue submit button (send
    icon); social icons row. Bottom bar: `border-t border-white/10 pt-[39px]`
    centered copyright: "© {year} All rights reserved | Made with ❤ at
    Component Dock" — MUST link https://www.componentdock.com/.

## Build/task outline (implementer)

- [ ] Scaffold `apps/weave` (copy simplest existing app; package
      `@free-react-templates/weave`; `npm install` at root to register
      workspace + lockfile; `public/CNAME` = `weave.free.componentdock.com`,
      homepage = `https://weave.free.componentdock.com`)
- [ ] `index.html`: title "Weave — Build Websites in Record Time", Google
      Fonts links (Cabin 400–700 + Open Sans 400–600)
- [ ] `src/index.css`: `@theme` tokens (brand `#2845BA`, navy `#041735`,
      lavender `#F0F3FF`, pink `#F0E9FF`, mint `#E9FFFD`, band `#F1F2F6`,
      tab `#4AA8C6`, pink-grad `#ff4495`/`#ff6d6d`, coral `#ec583a`, input
      `#5C6168`, border `#DBDEE9`)
- [ ] Components (TDD, 100% coverage): Header (+AnnouncementStrip,
      +MobileMenu), Hero, FeatureCards, AboutFeatures, BrandBand, FaqAccordion,
      Pricing (+YearlyMonthlyToggle), Testimonials, ProjectGallery, CtaBand,
      Footer (+NewsletterForm)
- [ ] Data module (`src/data.ts`): nav links, announcement copy, feature
      cards (3), about rows (3), brand logos, FAQ items, pricing cards (2
      plans × 2 billing periods), testimonials (2), projects (3), footer
      links — all placeholder copy paraphrased from the source kinds
- [ ] Picsum seeds: screen hero + about + project + testimonial-avatar
      seeds (pixel-metric/browser check; hero must read as a workspace/desk
      scene)
- [ ] Icons: lucide-react (search, plus, minus, check, send, menu, x,
      chevrons) + inline SVG brand icons (facebook/instagram/linkedin/
      twitter) for footer socials
- [ ] `scripts/verify-app.sh weave` green; visual QA of the built bundle
      (announcement strip, sticky header, hero split, card hover fill,
      accordion behavior, pricing toggle, gallery overlay)
- [ ] PR: mention source Olla, preview URL, tokens, renames, placeholder
      images; footer Component Dock link; then bookkeeping — mark BOTH
      TEMPLATES.md rows `[x]` + surge URL + `npm run readme:status`
