# Deliverly (ColorLib Dusk) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-deliverly`. Source: ColorLib "Dusk" — logistics &
> delivery company template (https://colorlib.com/wp/template/dusk/).
> Preview: https://preview.colorlib.com/theme/dusk/ (HTTP 200;
> ~31 KB HTML, `css/style.css` ~60 KB parsed).

## Design notes (replication findings)

- **Original:** ColorLib "Dusk" — logistics/delivery landing page
  (Bootstrap 5 + tiny-slider + glightbox + aos; icomoon + flaticon icons;
  fonts "Playfair Display" — headings h1–h5 + `.logo` — and "Open Sans" —
  body — declared in `css/style.css` but NO Google Fonts link in the
  preview head — load both via Google Fonts `<link>` in the recreation).
  Screenshot `dusk-free-template.jpg` (1200×946 AVIF) viewed in browser.
- **Screenshot vs live DOM:** the screenshot shows an OLDER variant (a
  centered "Search or enter website name" search bar above the nav; hero
  photo = man pinning photos to a brick wall). The LIVE preview is
  authoritative: NO search bar; hero photo = courier/delivery scene;
  white "Watch" button next to green "Partner with us". Both share the
  green `#61b15a` accent, white serif logo + white nav links over the
  hero, floating white inquiry card, green `.line` underlines.
- **Visual design:** fresh green `#61b15a` accent over white surfaces with
  light-gray `#f8f9fa` / `#efefef` bands; elegant Playfair Display serif
  headlines (h1 50px 700, section headings 40px 700) over Open Sans body;
  black 0.4 hero overlay; soft card shadows; rounded 6px buttons; 4px
  pricing cards; 20px blog cards with flat bottom-left corner.
- **Signature motifs to preserve:**
  - NAVBAR: `position: absolute; top: 0` transparent over the hero,
    white serif logo (Playfair 24px), white 14px links
    (rgba(255,255,255,0.7) → #fff hover), Dropdown sub-menu, mobile
    slide-in panel.
  - HERO: 100vh / min-height 700px photo, black overlay rgba(0,0,0,0.4),
    centered white serif h1 50px 700 (36px mobile) + subtext + green
    "Partner with us" (.btn-primary `#61b15a`) + white "Watch"
    (.btn-white) buttons.
  - INQUIRY CARD: `.sec-1` white box `margin-top: -200px` overlapping
    the hero, shadow `0 15px 30px rgba(0,0,0,0.1)`; left `#fafafa` 250px
    panel with Package icon (50px green) inside an 80px translucent green
    circle `rgba(97,177,90,0.2)`; right: h2 24px + paragraph + green
    "Get started" link.
  - PROOF ON DISPLAY: photo left (shadow `0 15px 30px rgba(0,0,0,0.2)` +
    curve-lines decoration behind) / right: green `.line` (2×50px) + h2
    40px + lead + 3 icon-stat rows (50px icon + 30px green circle
    `rgba(97,177,90,0.5)` + label): "24/7 Fast Delivery" / "90% Repeat
    Purchase" / "We Deliver Worldwide".
  - PRICING: heading-wrap (centered `.line` + h2) + 4 `.pricing-block`
    cards (border 1px #ccc, radius 4px, shadow `0 0 5px rgba(0,0,0,0.1)`):
    h3 18px name, green 30px price, check-list (included = green
    CheckCircle2; excluded = grayed), "Get started" link.
  - SERVICES: 4 large-icon cards (90px icon + 60px green circle): 24/7
    Fast Delivery / 90% Repeat Purchase / We Deliver Worldwide / Scale
    Sufficiently.
  - TESTIMONIALS (`bg-light`): white cards, left photo `flex: 0 0
400px`, right text (padding 50px): Georgia green 100px " quote,
    30px blockquote text, role attribution. SOURCE REPEATS "Managing
    Director" ×4 — use 4 DISTINCT customers.
  - BLOG (`blog-entries-section`, bg `#f8f9fa`): 5 white post cards
    (radius 20px, flat bottom-left, hover -5px + shadow), NO images —
    uppercase 12px 700 date + Playfair 16px 700 title + 14px excerpt.
    SOURCE REPEATS the same post 5× — use 5 DISTINCT posts.
  - FOOTER (bg `#efefef`, color #888, 14px): brand widget ("About
    Foundation" + blurb + social icons), "Links" and "Company" columns
    (same 5 links), "Contact" column (address + phone ×2 + email);
    bottom bar → Component Dock credit.
- **Structure (1:1, section order, home page):**
  1. Navbar (transparent over hero; logo + Home / Dropdown / Services /
     About / Blog / Contact; mobile slide-in)
  2. Hero (100vh photo + overlay; h1 + subtext + Partner with us + Watch)
  3. Business inquiry card (floating white box + package icon + CTA)
  4. Proof On Display (photo + underline + heading + lead + 3 stats)
  5. Pricing (Choose Your Ideal Pack + 4 tiers)
  6. Services (4 large-icon features)
  7. Testimonials (What people says about us + 4 quotes)
  8. Latest Blog Posts (5 text-only cards)
  9. Footer (brand + Connect + Links + Company + Contact + copyright)

## Implementation tasks

- [ ] Scaffold `apps/deliverly` (copy simplest existing app, rename package
      to `@free-react-templates/deliverly`, `public/CNAME` =
      `deliverly.free.componentdock.com`, homepage
      `https://deliverly.free.componentdock.com`); `npm install` at root
      to register the workspace in package-lock.json.
- [ ] `index.html`: title "Deliverly — Logistics & Delivery Template",
      Google Fonts `<link>` Playfair Display (600;700) + Open Sans
      (400;600;700).
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #61b15a` (green),
      `--color-brand-hover: #79bd73`, `--color-brand-border: #71b96b`,
      `--color-brand-active: #81c17b`, `--color-brand-deep: #436871`,
      `--color-brand-soft: rgba(97,177,90,0.2)`, `--color-brand-soft-strong:
    rgba(97,177,90,0.5)`, `--color-ink: #212529`, `--color-muted:
    #6c757d`, `--color-faint: #fafafa`, `--color-light: #f8f9fa`,
      `--color-footer: #efefef`, `--color-link-muted: #777`; fonts Playfair
      Display + Open Sans.
- [ ] `src/components/Header.tsx`: transparent-over-hero navbar — serif
      "Deliverly" wordmark (white, Playfair), uppercase-or-plain white
      links Home / Dropdown / Services / About / Blog / Contact (14px),
      Dropdown exposing 3–4 sample sub-links, mobile slide-in menu
      (solid + tappable — past transparent-mobile-menu bug; test!).
- [ ] `src/components/Hero.tsx`: 100vh photo (delivery/courier scene seed
      — screen the picsum seed for the right subject) + overlay
      rgba(0,0,0,0.4), centered white serif h1 "We Deliver Your Package
      On Time" (50px 700 / 36px mobile), subtext, solid green "Partner
      with us" + white "Watch" (decorative/placeholder, no backend).
- [ ] `src/components/InquiryCard.tsx`: floating white box (`-mt-48`-ish
      overlap + shadow), left `#fafafa` panel with Package icon (lucide)
      in translucent green circle, right h2 "Are you a Medium to Large
      Size Business?" (typo fixed) + paragraph + green "Get started"
      link with arrow.
- [ ] `src/components/ProofOnDisplay.tsx`: split — photo left with
      decorative curve band behind (SVG or gradient), right green
      2×50px `.line` + h2 "Proof On Display" + lead + 3 icon-stat rows
      (Truck/Clock, Repeat, Globe icons + labels "24/7 Fast Delivery" /
      "90% Repeat Purchase" / "We Deliver Worldwide").
- [ ] `src/components/Pricing.tsx`: heading "Choose Your Ideal Pack" +
      green underline + 4 cards (Basic $12 / Standard $49 / Premium $79
      / Advanced $199); feature lists with CheckCircle2 (included,
      green) vs grayed (excluded); enabled counts Basic 2 / Standard 3 /
      Premium 4 / Advanced 5; "Get started" links. Icon probe:
      CheckCircle2.
- [ ] `src/components/Services.tsx`: heading "Services" + 4 large-icon
      cards (Truck, Repeat, Globe, TrendingUp — probe exports) with
      translucent green circles + titles + DISTINCT paragraphs.
- [ ] `src/components/Testimonials.tsx`: "What people says about us" +
      carousel (state-based) of 4 white cards: photo + Georgia green 100px
      quote mark + 30px quote + name/role. Use 4 DISTINCT customers (e.g.
      Sarah Mitchell — Logistics Director; David Okafor — Supply Chain
      Manager; Elena Rossi — Warehouse Supervisor; James Carter —
      Operations Lead) — source repeats "Managing Director" ×4.
- [ ] `src/components/RecentBlog.tsx`: "Latest Blog Posts" + 5 DISTINCT
      text-only cards (uppercase date "May 12th, 2020" format + Playfair
      title + excerpt), radius 20px flat-bottom-left, hover lift. E.g.
      "How We Deliver Packages On Time, Every Time" / "Inside Our 24/7
      Fulfillment Network" / "Reducing Delivery Times by 30%" /
      "Packaging That Survives the Journey" / "Tracking Your Shipment in
      Real Time".
- [ ] `src/components/Footer.tsx`: `#efefef` bg — brand widget ("About
      Foundation" → rename appropriately, e.g. "About Deliverly") +
      blurb + social icons (inline SVG brand icons; lucide has NO brand
      icons), "Links" + "Company" columns (About us / Services / News /
      Careers / Contact), "Contact" column (address "43 Raymouth Rd.
      Baltemoer, London 3910" + phone + email; build `tel:` hrefs at
      runtime from spaced display strings, never a literal); bottom bar
      with Component Dock link (https://www.componentdock.com/).
- [ ] `src/App.tsx` composition + `src/main.tsx` entry; MemoryStorage
      polyfill in `src/test/setup.ts` (copy from apps/cura — jsdom 30
      has no localStorage).
- [ ] Tests first (TDD) mirroring spec scenarios; 100% coverage; run
      `bash scripts/verify-app.sh deliverly`.
- [ ] PR description: source (ColorLib Dusk), preview URL, tokens (green
      `#61b15a`, hover `#79bd73`, dark teal `#436871`, light
      `#f8f9fa`/`#efefef`, Playfair Display + Open Sans, 6px buttons,
      4px pricing, 20px post cards, floating inquiry card), what differs
      (wordmark, picsum placeholders, distinct testimonials/blog posts,
      Component Dock credit, no asset copying).
- [ ] Post-merge bookkeeping: mark BOTH TEMPLATES.md "Dusk" rows (line
      ~574 and duplicate ~986) `[x]` with the live URL, `npm run
    readme:status`.

## Pitfalls / notes

- The source repeats content everywhere — recreate with DISTINCT values:
  testimonial attribution (only "Managing Director" ×4), 5 blog posts
  (same post 5×), service paragraphs (same Lorem text ×4). Fix the hero
  headline source typo "Larged" → "Large".
- The screenshot is an OLDER variant (search bar above nav, different
  hero) — the LIVE preview is authoritative. Don't build the "Search or
  enter website name" bar.
- Hero buttons: "Partner with us" is `a.btn.btn-primary` (solid green),
  "Watch" is `a.btn.btn-white` (white bg + green text, glightbox video
  trigger) — keep both as links; the video can be a decorative modal
  placeholder or a plain link.
- The `.sec-1` floating box: `margin-top: -200px` overlap + shadow
  `0 15px 30px rgba(0,0,0,0.1)`; icon circle = 80px `rgba(97,177,90,0.2)`
  behind a 50px green icon; left panel bg `#fafafa` (flex 0 0 250px).
- `.list-icons` circles: 30px `rgba(97,177,90,0.5)` behind 50px icons;
  `.list-icons-large`: 60px circle behind 90px icons.
- Testimonials use Georgia serif for the 100px quote mark (NOT Playfair)
  — `font-family: 'Georgia', serif; color: #61b15a; font-size: 100px;
line-height: 0`.
- Blog cards have NO images in the source — keep them text-only (date +
  title + excerpt), radius 20px with `border-bottom-left-radius: 0`,
  hover `top: -5px` + shadow.
- Footer bg is LIGHT (`#efefef`) with `#888` text and `#777` links —
  NOT a dark footer. Widget headings are Playfair 16px 700 black.
- The `.btn-primary` source CSS declares `color: #000` but the hero
  markup adds `.text-white` — use WHITE button text in the recreation.
- lucide-react has no brand icons (Facebook/Twitter/LinkedIn/Instagram/
  Dribbble) — inline SVGs; probe EVERY lucide export with the typeof
  check before importing (renamed exports throw "Element type is
  invalid" at runtime).
- No `[~]`/`[x]` markers were set by the prep stream — implementer
  claims via the usual `[~]` push on `feat/template-deliverly`.
- No `colorlib` string anywhere in `apps/deliverly/*` — provenance lives
  only here, TEMPLATES.md, and the PR.
- Never write a literal `tel:+<digits>` URI in source (secret-scan
  masker rewrites it); compute from a spaced display string at runtime
  or render as plain text.
- Picsum seeds need subject screening — the hero and about photos should
  provably render delivery/courier scenes and the 4 testimonial photos
  should be portrait-appropriate (verified people ids: 1027, 64, 823,
  996 from the Rally/Eventure screening; avoid 91/177/338/65/1005/342/
  838). Pin seeds in spec + tests + docs together.
- Mobile header: past templates shipped transparent mobile menus — make
  sure the mobile drawer/menu is solid and tappable (user tests on
  phone).
