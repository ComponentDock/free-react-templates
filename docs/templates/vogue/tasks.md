# Vogue (ColorLib "Violet") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-vogue` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Violet" — fashion e-commerce online-store template
  (source: https://colorlib.com/wp/template/violet/). Listed in TEMPLATES.md
  line 527 (Bootstrap section); dup rows at lines 1221 (Business) and 1609
  (Ecommerce) — same source, ONE implementation (line 527 is the claim row;
  mark ALL THREE `[x]` after merge).
- **Naming:** "violet" is TAKEN — it's the shipped recreation of ColorLib
  _Sierra_ (`apps/violet`, TEMPLATES.md line 83). New name = **Vogue**
  (fashion-store fit; verified free in `apps/` and `openspec/specs/`).
- **Preview URL:** https://preview.colorlib.com/theme/violet/ (title "Violet
  | Template"). Fetched: `/tmp/violet-preview.html` (39 KB; slide content is
  owl-carousel JS-injected — all 3 slides share "2019 Lookbook." markup),
  `/tmp/violet-style.css` (37 KB), screenshot `/tmp/violet-shot.jpg`
  (1200×946, viewed in browser: white header "VIOLET / ONLINE STORE", B&W
  clothing-rack hero with "2019 / Lookbook." + "SEE MORE" pill, grey-blue
  promo strip, feature icons, top of lookbook grid).
- **Visual design:** clean editorial fashion store. Signature elements: the
  grey-blue `#B0BCC2` accent (announcement bar, hero arrows, lookbook +
  newsletter buttons), near-black `#1e1e1e` headings/prices/nav, the giant
  two-line hero type ("2019" 110px 700 + "Lookbook." 96px 400) on grayscale
  fashion photos, Futura-style letter-spaced overlay captions on the 3-box
  lookbook collage, pill (50px radius) buttons everywhere, the filterable
  product grid with new/sale/popular status pills, and the dark `#262626`
  footer with round newsletter form + `#222121` social bar.
- **Font:** `"Montserrat"` (body + headings) on Google Fonts; the source
  self-hosts `FuturaBT-Book` for display captions (`.trend-alert`,
  `.trend-year`) — NOT on Google Fonts → substitute **Jost** (geometric
  Futura-like) or Montserrat with wide letter-spacing.
- **Brand colors:** `#1e1e1e` (headings/prices/nav/"new" badge), `#B0BCC2`
  (accent), `#FE439F` (sale pill), `#D0D7DB` (popular pill, button borders),
  `#727272`/`#787878`/`#838383`/`#5b5b5b` (secondary text), `#262626`
  (footer), `#222121` (social bar), `#454747`/`#535353` (newsletter input).
- **Structure (1:1 from the preview DOM):**
  1. `header.header-section` (white, 104px) — text logo "Vogue" + "Online
     Store" caption (source logo is an image reading "Violet Template";
     recreate as text, no asset); centered nav Home · Shop (dropdown:
     Product Page · Shopping Card · Check out) · About · Blog · Contact
     (16px 500 `#1e1e1e`, 2px underline hover/active); right: search /
     user / cart icons + "2" count badge (18px circle, border `#D0D7DB`) +
     "Register · Sign in"; mobile = hamburger (slicknav) panel.
  2. Announcement bar `div.header-info` — `#B0BCC2`, white 14px text,
     rotating: "Free shipping on orders over $30 in USA" · "20% Student
     Discount" · "30% off on dresses. Use code: 30OFF".
  3. Hero `section.hero-slider` — 3 `.single-slider-item` slides (grayscale
     fashion photos, `data-setbg="img/slider-1..3.jpg"`), 270px vertical
     padding, centered h1 "2019" (110px 700 white) + h2 "Lookbook." (96px
     400 white) + `a.primary-btn` "See More" (2px white border, 50px
     radius, uppercase 14px 600, 16px/40px); owl arrows 68px `#B0BCC2`
     circles; dots 11px `#969D9E` / active `#1e1e1e` bottom-left.
  4. Features `section.features-section.spad` (bottom 0) — 3 columns with
     line icons (Truck / Coins / Headset via lucide): h4 22px 700
     `#1e1e1e` "Free shipping" · "100% Money back" · "Online support 24/7"
     - 14px 500 `#727272` lorem.
  5. Lookbook collage `.features-box` — 3 image boxes: first (caption right
     top 106px: "2019 Party · Jewelry · Trend Allert" 22px ls2 uppercase +
     "See More" pill border `#D0D7DB` text `#1e1e1e`), second ("2019
     Trend" white + "Footwear" 16px ls4 `#5b5b5b` + "Bold & Black"),
     large ("2019 Party" `#838383` + "Collection" 60px 700 + "Trend
     Allert" 22px ls2 `#5b5b5b`).
  6. Latest products `section.latest-products.spad` (55/65px) — h2 "Latest
     Products" (60px 700 `#1e1e1e`); tabs All · Dresses · Bags · Shoes ·
     Accesories (14px 500 `#838383`, active `#1e1e1e`); 8 cards
     (`col-lg-3 col-sm-6` + mix filter classes), each: photo + status pill
     top-left (new `#1e1e1e` / sale `#FE439F` / popular `#D0D7DB`; 12px
     white; 50px radius) + h6 name `#727272` + price 18px 700 `#1e1e1e`;
     products: Green Dress with details $22.90 (new) · Yellow Maxi Dress
     $25.90 (sale) · One piece bodysuit $19.90 (new) · Blue Dress with
     details $35.50 (popular) ×2.
  7. Lookbook `section.lookbok-section.spad` — left: "2019" + "#lookbook"
     h2 (60px 700) + p 14px `#787878` + `a.primary-btn.look-btn` "See
     More" (bg `#B0BCC2`); right: tall fashion photo + "fashion"
     watermark.
  8. Logos `.logo-section` (70px/120px) — 5 ghosted wordmark tiles
     (opacity .1 → 1 on hover; recreate as text wordmarks, no copied logo
     images).
  9. Footer `footer.footer-section.spad` (`#262626`) — newsletter form
     (53px pill input, 2px `#454747` border, italic `#535353`, placeholder
     "Your email address" + "Subscribe to our newsletter" button 310px bg
     `#B0BCC2`); 4 link columns ("About us" · "Customer Care" · "Our
     Services" · "Information", 26px white h4 + 14px white links 50%
     opacity); `#222121` social bar (6 icon+label links: instagram ·
     pinterest · facebook · twitter · youtube · tumblr); copyright bar
     "© 2026 Vogue. All rights reserved." + "Made with ❤" → **Component
     Dock link** (mandatory).
- **Note:** inner pages exist in the original (product page, cart, checkout,
  about, blog, contact) — NOT required; single index page only. Nav links
  become scroll anchors or dead anchors `#`. Product filter tabs = simple
  client-side filter (jsdom-safe). No `tel:` literals anywhere.

## Implementation tasks (for the implementer stream)

1. `git fetch origin`; confirm `openspec/specs/template-vogue/spec.md`
   exists on main; claim with a `[~]` mark on TEMPLATES.md line 527.
2. Scaffold `apps/vogue` from the simplest existing app (copy pattern,
   rename package to `@free-react-templates/vogue`); register the
   workspace (`npm install` at root so `package-lock.json` updates;
   verify with `grep -c "free-react-templates/vogue" package-lock.json`);
   keep `injectUiSource()` in `vite.config.ts`.
3. TDD: write tests first (Vitest + Testing Library, 100% coverage)
   mirroring the spec's Gherkin scenarios, then implement:
   - `src/components/Header.tsx` — white 104px header: text logo "Vogue" +
     "Online Store" caption, centered nav (Home active · Shop with
     dropdown Product Page / Shopping Card / Check out · About · Blog ·
     Contact), right icon cluster (search, user, cart + "2" badge,
     Register · Sign in), mobile hamburger with `aria-expanded`.
   - `src/components/AnnouncementBar.tsx` — `#B0BCC2` strip, white 14px,
     rotating promos (static stack or simple rotation; jsdom-safe).
   - `src/components/HeroSlider.tsx` — full-width fashion-photo slides
     (screen picsum seeds for clothing subjects), centered "2019" +
     "Lookbook." + white pill "See More", `#B0BCC2` circular arrows + dot
     pagination; simple prev/next (jsdom-safe, no owl dependency).
   - `src/components/Features.tsx` — 3 columns: lucide Truck / Coins /
     Headset + h4 + lorem.
   - `src/components/LookbookCollage.tsx` — 3 stacked image boxes with
     absolute letter-spaced captions (trend-alert/year styles).
   - `src/components/LatestProducts.tsx` — heading + 5 filter tabs
     (All · Dresses · Bags · Shoes · Accesories) + 8 product cards with
     status pills (new/sale/popular) + name + price; client-side filter.
   - `src/components/Lookbook.tsx` — left text + "2019" "#lookbook" +
     `#B0BCC2` "See More" pill; right tall photo + "fashion" watermark.
   - `src/components/LogoStrip.tsx` — 5 ghosted wordmark tiles (opacity
     10% → 100% hover).
   - `src/components/Footer.tsx` — `#262626` bg: newsletter form (pill
     input + `#B0BCC2` button, success state), 4 link columns, `#222121`
     social bar (6 inline-SVG brand icons + labels), copyright + "Made
     with ❤" Component Dock link (mandatory).
   - `src/App.tsx` — compose in order; `src/index.css` — `@theme` tokens
     (dark `#1e1e1e`, accent `#B0BCC2`, sale `#FE439F`, light `#D0D7DB`,
     secondary `#727272`/`#787878`/`#838383`/`#5b5b5b`, footer `#262626`,
     social `#222121`).
4. Images: `https://picsum.photos/seed/vogue-<n>/<w>/<h>` (3 hero slides,
   3 collage boxes, 8 product shots, 1 lookbook tall photo — SCREEN seeds
   for fashion/clothing subjects; picsum has no fashion catalog shots, so
   prefer neutral garment/studio-style or lifestyle photos and paraphrase
   product names if the seed subjects demand it); icons from lucide-react
   (search, user, shopping-bag, truck, coins, headset, menu, x); brand
   social icons as inline SVGs (lucide has none).
5. Verification: `npm run spec:validate`; `scripts/verify-app.sh vogue`
   (typecheck + lint + 100% coverage + build). Never touch shared files
   (package-lock only via `npm install`).
6. PR: branch `feat/template-vogue`, PR to main, description must state
   source (ColorLib "Violet"), preview URL, design tokens, what differs
   (rename, text logo instead of image, placeholder images, paraphrased
   copy, single page only); merge immediately
   (`gh pr merge --squash --delete-branch`).
7. After merge: pull --rebase; mark TEMPLATES.md line 527 `[x]` AND the
   dup rows at lines 1221 and 1609 `[x]`, add surge URL
   `https://vogue.free.componentdock.com` + homepage;
   `npm run readme:status`; push.
