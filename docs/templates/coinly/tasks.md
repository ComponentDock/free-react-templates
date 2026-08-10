# Coinly (ColorLib Crypto Currency) — Tasks & Design Notes

> Recreation of ColorLib "Crypto Currency"
> (https://colorlib.com/wp/template/crypto-currency/) under the NEW name
> **Coinly** (coin-themed brand; single lowercase word, no collision with
> `apps/` or `openspec/specs/` — verified 2026-08-10), per the monorepo
> naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Crypto Currency" — free Finance landing page
  template (Finance category; TEMPLATES.md dup rows at lines 371, 967,
  1748 — same source, ONE item; mark all three `[x]` at ship time). Page
  title "Cryptocurrency - Landing Page Template". The recreation brands
  itself **Coinly**.
- **Preview URL quirk (verified 2026-08-10):**
  `https://preview.colorlib.com/theme/crypto-currency/` (the TEMPLATES.md
  slug with the hyphen) returns HTTP 404, but `products.js` maps the demo
  as `cryptocurrency` (no hyphen) and
  `https://preview.colorlib.com/theme/cryptocurrency/` returns HTTP 200
  (23 KB HTML + `css/style.css` 29 KB) — that is the live demo analyzed
  here. The live page was ALSO loaded in a browser (accessibility
  snapshot + screenshots) to confirm the render. The TEMPLATES.md
  screenshot (`cryptocurrency-free-template.jpg`, 1200×946, viewed in a
  browser) matches the live render 1:1 (header, hero split, gradient
  polygon, laptop mockup).
- **Visual design (screenshot + live render):** white/`#f3f7f9` page,
  dark blue `#20509e` headings, teal `#16d0c5` accents, indigo `#3e2bce`
  → teal-green `#2dd3aa` gradient bands + gradient pill buttons. Hero =
  split: 70px headline left (dark blue with one teal word), sub-copy,
  pill email input + gradient "Get Started" pill; right = laptop
  trading-dashboard mockup over a big gradient polygon with faint dotted
  world map. Header sits over the dark top of the graphic: WHITE nav
  links + outline pill "Sign Up Free" (2px `#7ad4cc` border, white text).
  Then about split, gradient features band (6 icon cards), 3-step
  process, gradient fact band (4 teal numbers), 4-member team, quote-icon
  testimonial slider, gradient newsletter band, 3-card blog grid, light
  footer with colored social circles. Clean, modern flat fintech
  aesthetic.
- **Structure (1:1, verified live):**
  1. `header.header-section` (absolute, z-index 99, padding 30px 50px 0)
     — logo image left (dark-blue "Crypto" wordmark + stylized B logo —
     ASSET, do not copy → "Coinly" text logo); `ul.menu-list` right:
     Solution / Features / News / About / Contact (white, Futura 16px,
     padding 10px 5px, margin-right 30px); `.site-btn` "Sign Up Free"
     outline pill (2px solid `#7ad4cc`, white text, min-width 170px,
     radius 50px, float right, margin-left 60px).
  2. `section.hero-section` — height 900px, padding-top 260px, bg
     `#f3f7f9` + `img/hero-bg.png` (right-top cover: gradient polygon +
     dotted world map), overflow hidden. `.hero-text` left: h2 70px
     "Invest in Bitcoin Bitcoin Trading" (`#20509e`, teal `#16d0c5`
     span — live render accents "Bitcoin" teal), h4 22px `#75849a` "Use
     modern progressive technologies of Bitcoin to earn money", pill
     email input (placeholder "Enter your email") + `.sb-gradients`
     "Get Started" (gradient bg, white). Right: `.laptop-image` 685px
     (left 80px) laptop mockup.
  3. `section.about-section.spad` (pt 100px / pb 90px) — left
     `.about-text`: h2 48px "What is Bitcoin" + h5 "Bitcoin is an
     innovative payment network and a new kind of money." + 2 paragraphs
     - `.sb-gradients` "Get Started"; right `.about-img` illustration.
  4. `section.features-section.spad.gradient-bg` — gradient band, white
     text; `.section-title` "Our Features"; 6 `.feature` cards (icon +
     h4 + underlined `.readmore`): Mobile Apps (`ti-mobile`), Safe &
     Secure (`ti-shield`), Wallet (`ti-wallet`), Experts Support
     (`ti-headphone-alt`), Instant Exchange (`ti-reload`), Recuring Buys
     (`ti-panel`). Feature content padding-left 70px.
  5. `section.process-section.spad` — `.section-title` "Get Started With
     Bitcoin"; 3 `.process-item` steps (numbered icon + h4). QUIRK:
     source repeats "Create Your Wallet" ×3 — use distinct titles (e.g.
     Create Your Wallet / Fund Your Wallet / Start Trading).
  6. `section.fact-section.gradient-bg` (padding 100px 0) — 4 `.fact`
     stats: h2 60px teal numbers (60, 12K, 5B, 240) + white labels
     (Support Countries, Transactions per hour, Largest Transactions,
     Years of Experience).
  7. `section.team-section.spad` — `.section-title` "Meet Our Team" + p
     "Our experts in the field of crypto currency can always help you
     with any of your questions!"; 4 `.member` cards (photo, name, role,
     3 social circles, gradient on hover): Aaron Ballance (Ceo Bitcoin),
     Jackson Nash (Marketing Director), Melissa Barth (Product Manager),
     Katy Abrams (Head of Design).
  8. `section.review-section.spad` — `.quote` icon + testimonial slider
     (prev/next arrow controls): "“Bitcoin is exciting because it shows
     how cheap it can be. Bitcoin is better than currency in that you
     don't have to be physically in the same place and, of course, for
     large transactions, currency can get pretty inconvenient.”" +
     avatar + h4 author name (Jackson Nash).
  9. `section.newsletter-section.gradient-bg` (padding 50px 0) — h2 36px
     "Subscribe to our Newsletter" + p "Sign up for our weekly industry
     updates, insider perspectives and in-depth market analysis." +
     `.newsletter-form` (padding-left 40px) pill email input
     (placeholder "Enter your email", borderless, 12px 30px, radius
     50px) + `.sb-gradients.sbg-line` "Get Started".
  10. `section.blog-section.spad` — `.section-title` "Latest News"; 3
      `.blog-item` cards: thumb (`blog/1..3.jpg`), `.post-date` teal
      Futura 14px ("03 jan 2018" / "28 dec 2018" / "28 aug 2018"),
      `.blog-title` h4 dark blue, `.post-meta` links "by Admin" / "234
      Likes" / "08 comments".
  11. `footer.footer-section` (light) — logo + lorem blurb; 3
      `.footer-widget` columns: Resources (How to Buy Coin, Coin
      Overview, Blog News, How to Sell Coin, Purchase Theme), Quick Links
      (Network Stats, Block Explorers, Governance, Exchange Markets, Get
      Theme), Follow Us (4 `.social` 40px circles, radius 50%:
      facebook `#4b6cd0`, google `#f03b3b`, pinterest `#bb8950`, twitter
      `#49a7f3`). `.footer-bottom` (border-top 1px solid `#ebebeb`,
      padding 30px 0): copyright "© 2026 All rights reserved | This
      template is made with by Coinly" + links DPA / Terms of Use /
      Privacy Policy / support@company.com / (123) 456-7890.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-10):**
  - Dark blue **#20509e** (headings, logo, blog titles, readmore);
    teal **#16d0c5** (hero span, fact numbers, post dates); gradient
    **#3e2bce → #2dd3aa** (`linear-gradient(to right, #3e2bce 0%,
#2dd3aa 100%)`) for `.gradient-bg` bands + `.sb-gradients` buttons +
    social hovers; light **#f3f7f9** (hero bg); muted **#75849a** /
    **#acb9cc**; outline **#7ad4cc** (btn border); border **#ebebeb**;
    socials **#4b6cd0** / **#f03b3b** / **#bb8950** / **#49a7f3**.
  - Fonts: **Futura** (headings/nav/buttons/inputs/post dates) + **Lato**
    (body). Futura is NOT on Google Fonts → use **Jost** (open geometric
    sans, standard Futura stand-in) + **Lato**. Link:
    `family=Jost:wght@400;500;600;700&family=Lato:wght@400;700`.
  - `.site-btn`: pill (radius 50px), min-width 170px, padding 15px 30px,
    16px 500, Futura, 2px solid `#7ad4cc`, white text (outline).
    `.sb-gradients`: borderless, padding 17px 32px, gradient bg, white.
  - Inputs: pill (radius 50px), borderless, padding 12px 30px, 16px.
  - Rhythm: `.spad` pt 100px / pb 90px; fact 100px 0; newsletter 50px 0.
  - Scale: h2 48px; h4 24px; hero h2 70px; hero h4 22px `#75849a`; fact
    h2 60px teal; newsletter h2 36px; widget titles 20px.
- **Recreation approach:** Tailwind grid (NO Bootstrap); testimonial
  slider = small stateful carousel (useState index + prev/next arrows, no
  owl.carousel dependency); themify → lucide (Smartphone, ShieldCheck,
  Wallet, Headphones, RefreshCw, Repeat); FontAwesome → inline SVG brand
  icons (socials) + lucide Heart / MessageCircle (blog meta); photos →
  seeded picsum (`picsum.photos/seed/coinly-<n>/<w>/<h>`); Jost + Lato
  via Google Fonts; brand "Crypto"/"Crypto Currency" → "Coinly" (text
  logo — source logo.png is an asset, do not copy); document title
  "Coinly — Crypto & Finance Template"; nav links can be `#` anchors
  (single-page recreation of the demo); process steps get distinct titles
  (source repeats "Create Your Wallet" ×3).
- Accessibility: labels/placeholders on all inputs, `aria-label` on icon
  buttons (social links, carousel arrows), semantic `<main>` landmark,
  `alt` text on photos.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/coinly`
      (package `@free-react-templates/coinly`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: header → hero (900px split) → about → features
      (6 cards) → process (3 steps) → fact band (4 stats) → team (4
      members) → review carousel → newsletter band → blog (3 cards) →
      footer.
- [ ] Tokens in `@theme`: `--color-brand #20509e`, `--color-accent
    #16d0c5`, `--color-grad-start #3e2bce`, `--color-grad-end
    #2dd3aa`, `--color-mist #f3f7f9`, `--color-muted #75849a`,
      `--color-outline #7ad4cc`; fonts `--font-display Jost`,
      `--font-body Lato`.
- [ ] Header: absolute over hero; "Coinly" text logo left; white nav
      Solution / Features / News / About / Contact; outline pill "Sign
      Up Free" right (2px `#7ad4cc`, white text, radius 50px, min-width
      170px).
- [ ] Hero: 900px tall, `#f3f7f9` bg + gradient polygon graphic
      (indigo→teal + dotted map) top-right; 70px h2 dark blue + teal
      span; 22px `#75849a` sub-heading; pill email input + gradient
      "Get Started" pill; laptop mockup right (~685px, picsum).
- [ ] About: left h2 48px "What is Bitcoin" + h5 + 2 paragraphs +
      gradient button; right illustration image.
- [ ] Features: gradient band, white "Our Features" title, 6 cards
      (lucide icon + h4 + underlined Readmore) — Mobile Apps, Safe &
      Secure, Wallet, Experts Support, Instant Exchange, Recuring Buys;
      3-up desktop, stacked mobile.
- [ ] Process: 3 steps with numbered icons + DISTINCT titles (Create
      Your Wallet / Fund Your Wallet / Start Trading).
- [ ] Facts: gradient band, 60px teal numbers + white labels (60 / 12K /
      5B / 240).
- [ ] Team: 4 member cards (photo, name, role, 3 social circles with
      gradient hover) — Aaron Ballance, Jackson Nash, Melissa Barth,
      Katy Abrams; 4-up desktop, 2-up tablet, stacked mobile.
- [ ] Review: quote icon + testimonial slider with prev/next arrows,
      author avatar + h4 name.
- [ ] Newsletter: gradient band, 36px "Subscribe to our Newsletter" +
      copy + pill input + gradient "Get Started".
- [ ] Blog: 3 cards (thumb, teal post date, dark-blue title, meta
      "by Admin / 234 Likes / 08 comments" with Heart + MessageCircle
      icons).
- [ ] Footer: light; blurb + Resources / Quick Links / Follow Us columns
      (40px colored social circles, inline SVG brand icons) +
      footer-bottom `#ebebeb` border-top with copyright + DPA / Terms of
      Use / Privacy Policy / support@company.com / (123) 456-7890.
- [ ] Jost + Lato via Google Fonts link in index.html; document title
      "Coinly — Crypto & Finance Template"; `<main>` landmark.
- [ ] Photos: seeded picsum `coinly-<n>/<w>/<h>` (hero laptop, about,
      process icons 1-3, team 1-4, avatar, blog 1-3); no copied assets.
- [ ] `scripts/verify-app.sh coinly` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` on ALL THREE dup rows (TEMPLATES.md
      lines 371, 967, 1748) + surge URL, `npm run readme:status`, PR +
      immediate squash merge.
