# Cumulus (ColorLib Cloudtemplate) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cumulus` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Cloudtemplate" — free Bootstrap 4 cloud
  hosting/management corporate template from the "ftco" family: transparent
  dark navbar over a purple split hero (flat office SVG illustration +
  headline), grayscale partner-logo strip, 6-card "Cloud Services" grid on
  light gray, 5-item "What Our Software Can Do For You" feature row, purple
  animated counter band ("We Always Try To Understand Users Expectation"),
  "Have any question about us?" pink CTA banner, split FAQ (700px photo +
  pill accordion), 4-plan pricing with pink "Choose Plan" buttons, "What
  Users Saying" testimonial carousel (pink dots), 3-card "Recent Blog" row,
  deep-purple 4-column footer + copyright bar
  (source: https://colorlib.com/wp/template/cloudtemplate/). Listed in
  TEMPLATES.md under Bootstrap (line 361) with a duplicate row at line 3051 —
  one recreation covers both rows.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/cloudtemplate/`
  (HTTP 200, ~41.7KB HTML). DOM + `css/style.css` (78KB) extracted and
  analyzed. Screenshot `cloudtemplate-free-template.jpg` (1200×946) viewed in
  browser: dark navbar with white "Get started" button right, purple hero
  with flat vector illustration (two office workers at a desk, plant on
  desk, darker circular backdrop) LEFT + text RIGHT, white logo strip of
  grayscale tech logos, top of light-gray services section with 3 cards with
  small GREEN circular icons. Footer below the fold; specified from DOM/CSS.
- **Commented-out section:** the preview HTML has `<!-- <section
class="ftco-domain"> ... -->` ("Search Your Domain Name" + TLD select +
  Search button + `.com $9.75 · .net $9.50 · .biz $8.95 · .co $7.80 · .me
  $7.95") commented out — NOT rendered, and absent from the screenshot. Do
  NOT render it; the fidelity target is the rendered page.
- **Brand purple `#3f52e3`** (hover `#293ee0`) — hero overlay/background,
  scrolled-nav active link, counter section bg, pricing hover block, some
  button hover states. **Green `#21bf73`** — nav "Get started" CTA (radius
  5px, hover white bg + purple text), hero "Get in touch" button (btn-
  secondary override), footer social circles. **Pink `#ff8ba7`** (hover
  `#ff7294`) — btn-tertiary: CTA banner "Get in Touch", pricing "Choose
  Plan", testimonial active dot. **Footer bg `#421b9b`** (deep purple;
  `.ftco-footer` rule comes AFTER `.ftco-bg-dark` in style.css, so the purple
  wins over `#3c312e`).
- **Font:** Work Sans via Google Fonts — load 400/500/600/700/900 with
  `<link>` in `index.html`. Brand 20px/900; nav links 16px/600; FAQ buttons
  18px/500; footer headings 20px/700.
- **Signature shapes:** nav CTA radius 5px; FAQ accordion buttons PILLS
  (radius 40px, `box-shadow 0 2px 8px -4px rgba(0,0,0,.2)`, weight 600 black
  text); footer social 40×40px circles radius 50%; testimonial dots 10px
  circles (active pink); FAQ photo radius 4px + shadow `17px 25px 56px -22px
rgba(0,0,0,.38)`; pricing hover block radius 4px offset `bottom: -20px`.
- **Navbar behavior:** transparent absolute over hero (top 20px) → on scroll
  `position: fixed`, white bg, `box-shadow 0 0 10px 0 rgba(0,0,0,.1)`, black
  links, purple active, CTA solid purple. Mobile toggler is an uppercase
  "MENU" text button.
- **Hero:** `div.overlay` solid `#3f52e3` covers the full-height section; the
  illustration SVG (`undraw_co-working_825n.svg`) is `one-third` +
  `order-md-first` (left on desktop, per screenshot), text `one-forth`:
  subheading → h1 three spans "Cloud, Management, Template" → blurb → green
  "Get in touch" (`btn-secondary` overridden to `#21bf73`, `px-4 py-3`).
  Recreate the illustration as an inline SVG (desk + two workers + plant,
  flat style) — do NOT copy the original file.
- **Icons:** original uses Font Awesome + flaticon font icons. Recreation:
  lucide-react for UI icons (search, chat/comment, map-pin, phone, mail,
  chevron-down, star); inline SVG for the social brands (twitter, facebook,
  instagram — lucide-react removed brand icons, see replication skill
  pitfall). Service-card icon badges are circular with a green fill (per
  screenshot); the feature row uses two icon-color variants (`.icon` vs
  `.icon-2`).
- **Placeholders:** `https://picsum.photos/seed/cumulus-<n>/<w>/<h>` — FAQ
  photo (700px tall, e.g. 800×700), 3 blog photos (600×275), 5 grayscale
  partner logos (use a grayscale filter class over picsum or simple SVG
  wordmarks), hero illustration (inline SVG, not an image).
- **Section structure (1:1, rendered DOM):** navbar → hero → partner strip →
  Cloud Services (bg-light, 3×2 cards) → features (white, 5 items) → counter
  band (purple, 4 stats) → CTA banner (bg-light, flush) → FAQ (bg-light, 700px
  photo + accordion) → pricing (bg-light, 4 cards) → testimonials (white,
  4 slides) → Recent Blog (bg-light, 3 cards) → footer (`#421b9b`, 4 columns).

## Implementation tasks (for the implementer stream)

1. **Scaffold:** copy the simplest existing app (e.g. `apps/onepage`), rename
   to `@free-react-templates/cumulus`; run `npm install` at root so
   `package-lock.json` registers the workspace; keep `injectUiSource()` in
   `vite.config.ts` (see `docs/conventions.md`).
2. **Theme tokens** (`src/index.css` `@theme`): `--color-brand: #3f52e3`,
   `--color-brand-hover: #293ee0`, `--color-green: #21bf73`, `--color-pink:
#ff8ba7`, `--color-pink-hover: #ff7294`, `--color-footer: #421b9b`,
   `--color-price: #203d67`, `--color-muted: #72789a`, `--color-light:
#f8f9fa`; Work Sans 400/500/600/700/900 Google Fonts `<link>` in
   `index.html`.
3. **Navbar** (`components/Navbar.tsx`): brand "Cumulus", links Home (active)
   / Company (dropdown) / Pricing / Leadership / Blog / Contact, green
   "Get started" CTA (radius 5px, hover white/purple); transparent-over-hero
   → white fixed scrolled state (shadow, black links, purple active);
   mobile "MENU" toggle with `aria-expanded`.
4. **Hero** (`components/Hero.tsx`): full-height section, purple overlay
   (`bg-[#3f52e3]`), grid: inline SVG illustration left (desktop
   `order-first`), text right — subheading "Cumulus", h1 spans "Cloud,
   Management, Template", blurb, green "Get in touch" button.
5. **Partners** (`components/Partners.tsx`): 5 grayscale logo images in a
   row (`5em` vertical padding).
6. **Services** (`components/Services.tsx`): bg-light, centered "Cloud
   Services" heading, 6 cards in `lg:grid-cols-3 md:grid-cols-2` — circular
   green icon badge + h3 + p (Cloud databases, Website Hosting, File
   Storage, Forex Trading, File Backups, Remote Desktop).
7. **Features** (`components/Features.tsx`): white, "What Our Software Can Do
   For You", 5 items (Responsive Design, Android Apps Development, iOS Apps
   Development, UX/UI Design, Print Ready Design) with two icon-color
   variants.
8. **CounterBand** (`components/CounterBand.tsx`): purple bg, heading "We
   Always Try To Understand Users Expectation", 4 counters (Download, Awards
   Won, Contributors, Satisfied Customers) — 40px white numbers + translucent
   labels; optional count-up animation (start at 0).
9. **CtaBanner** (`components/CtaBanner.tsx`): bg-light flush strip — "Have
   any question about us?" + intro left, pink "Get in Touch" (`btn-tertiary`)
   right.
10. **Faq** (`components/Faq.tsx`): bg-light split — 700px photo (radius 4px,
    big shadow) left; right: "Frequently Asks Questions" + intro + 4-item
    accordion (pill buttons, chevron, one-open-at-a-time).
11. **Pricing** (`components/Pricing.tsx`): bg-light, "Our Best Pricing", 4
    cards (Basic $0 / Advance $19 / Expert $49 / Pro $99 /mo): 60px `#203d67`
    price, tagline, "Enjoy All The Features", feature list (Bandwidth,
    Storage, Overages, All features), pink full-width "Choose Plan"; hover →
    purple offset block behind card.
12. **Testimonials** (`components/Testimonials.tsx`): "What Users Saying"
    carousel — 4 quotes (name + role), prev/next + dots (pink active).
13. **Blog** (`components/Blog.tsx`): bg-light, "Recent Blog" + 3 cards —
    275px photo + meta column (date, Admin, comments) + headline.
14. **Footer** (`components/Footer.tsx`): `#421b9b` bg, 4 columns — brand +
    blurb + 3 green circular social icons; Useful Links; Navigational;
    Office (address, phone, email); copyright row paraphrased to the
    recreation name.
15. **App composition** (`App.tsx`): Navbar → Hero → Partners → Services →
    Features → CounterBand → CtaBanner → Faq → Pricing → Testimonials →
    Blog → Footer; dark-mode `.dark` variants per conventions.
16. **Tests:** one `describe` per component, scenario-style `it` blocks
    mirroring the spec; 100% coverage required.
17. **Verify:** `npm run verify:app cumulus` (typecheck + lint + vitest 100%
    - build) → PR `feat/template-cumulus` → merge immediately → mark BOTH
      TEMPLATES.md rows (line 361 + dup 3051) `[x]` with surge URL +
      `npm run readme:status` on main.

## Fidelity pitfalls

- Do NOT reuse the source name "Cloudtemplate" anywhere as the app/package
  name (new name: cumulus).
- Do NOT render the commented-out domain-search section — it is absent from
  the rendered page and the screenshot. (If an implementer adds it anyway,
  use the DOM comment as the reference: TLD select + Search button + price
  row `.com $9.75 · .net $9.50 · .biz $8.95 · .co $7.80 · .me $7.95`.)
- Do NOT copy original assets: recreate the hero illustration as an inline
  SVG; use picsum seeds for photos; Work Sans via Google Fonts; inline SVG
  for social brand icons (lucide-react dropped brand icons).
- Navbar scrolled state is the tricky one: transparent absolute (top 20px)
  over the hero, then white fixed with shadow. Implement with a scroll
  listener; test both states.
- `.btn-secondary` in the hero is overridden to GREEN `#21bf73` in the theme
  CSS — don't use gray. `.btn-tertiary` is PINK — used for both the banner
  CTA and the pricing "Choose Plan" buttons.
- Footer color: the element carries both `ftco-footer` and `ftco-bg-dark`;
  the purple `#421b9b` wins because `.ftco-footer` is later in the cascade —
  use `#421b9b`.
- Original copy is lorem ipsum + repeated blog headlines — paraphrase
  lightly, keep the same content kinds (subheading + headline + blurb, plan
  feature lists, date/author/comments meta).
- The accordion must allow only one open panel at a time (Bootstrap collapse
  semantics) and the pricing hover block must not affect layout (absolute,
  `-z` or behind the card).
