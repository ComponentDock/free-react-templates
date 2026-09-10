# Bidpoint (ColorLib Auction) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-bidpoint`.

## Design notes (replication findings)

- **Original:** ColorLib "Auction" — auction marketplace / buy-sell-bid
  template (source: https://colorlib.com/wp/template/auction/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/auction/
  (HTTP 200; ~24 KB HTML + `css/style.css` ~30 KB parsed for tokens).
  Title tag: "Auction — Website by Colorlib". Bootstrap 4 + owl-carousel +
  flaticon/icomoon icon fonts, AOS animations.
- **Visual design (from screenshot `auction-free-template.jpg`):** clean
  professional auction marketplace — warm orange (#f37121) accent on white
  neutral base; blurred lifestyle hero background with centered white
  headline "The Best Place to Buy and Sell"; product grid with overlaid
  price badges and "Submit a Bid" buttons; circular orange icons in the
  How It Works steps and About Us features; testimonials over background
  image with orange overlay; light gray footer with 4-column link widgets.
- **Structure (1:1, section order):**
  1. Navbar `.site-navbar` — absolute, transparent over hero, white text.
     Brand "Bidpoint" left. Links: Home, Buy, Sell, Services (dropdown:
     Sell Items, Buy Items, Submit a Bid), Blog, About, Contact. Sign
     In / Register right. Hamburger toggle for mobile.
  2. Hero `.intro-section` — bg image + dark overlay rgba(0,0,0,0.2),
     centered: h1 "The Best Place to Buy and Sell" (white bold), subtext
     paragraph (white 80% opacity), `.btn.btn-primary` "Register" (orange
     #f37121 fill, white text, sharp corners).
  3. Current Auctions `.site-section` — `.caption` "Auctions" (orange
     uppercase 11px ls-.2rem fw-700), h2 "Current Auctions" (black).
     8 `.item` cards in responsive grid (col-6 / md:col-4 / lg:col-3):
     each card: price badge `.price` absolute top-left, product image
     (picsum), h3 title, category + bid count flex row, `.btn.btn-bid`
     "Submit a Bid" (#f8f9fa bg, #000 text, no radius).
  4. How It Works `.site-section.pt-0` — eyebrow "How?", h2 "How It Works".
     4 `.step` items in col-lg-3: circular orange `.wrap-icon` (90px,
     50%, bg #f37121, white icon, icomoon font), heading, description.
     Steps 1–3 show connecting arrow (icomoon `\e315`), step 4 `.last`
     hides arrow. Items: Register (icon-user), Buy or Bid (icon-money),
     Submit a bid (icon-glass), Win (icon-trophy).
  5. About Us `.site-section` — two-col: left col-lg-7 hero image;
     right col-lg-5: eyebrow "About?", h2 "About Us", 3 `.feature-icon`
     rows. Each row: 70px circular orange icon (bg #f37121, white text),
     heading, description. Items: Fast Support (icon-paper-plane), Happy
     Customers (icon-smile-o), 24/7 Support (icon-support).
  6. Testimonials `.section-bg.style-1` — bg image hero_1.jpg + orange
     overlay (#f37121), padding. Eyebrow "Testimonials" white, h2 "Happy
     Clients" white. Owl-carousel of `.ftco-testimonial-1` cards: each
     `.ftco-testimonial-vcard` (round photo + name + role), quote
     paragraph. White text throughout.
  7. CTA `.site-section` — centered h2 "Create an account and start Buy,
     Bid or Sell Now!" + `.btn.btn-primary` "Register" (orange).
  8. Footer `.footer` — bg #f8f9fa, padding 4rem. 4 cols: (1) logo img +
     description + "Learn More" link; (2) Solutions heading + 5 links;
     (3) Services heading + 5 links; (4) Contact heading + 5 links.
     Copyright bar centered at bottom.

## Implementation tasks

### Phase 1: Scaffold (5 min)

- [ ] Copy simplest existing app (e.g. `apps/gavel` or any small one) as
      `apps/bidpoint/`
- [ ] Rename package to `@free-react-templates/bidpoint`
- [ ] Set `"homepage": "https://bidpoint.free.componentdock.com"` in
      `package.json`
- [ ] Create `public/CNAME` with `bidpoint.free.componentdock.com`
- [ ] Update `index.html` title to "Bidpoint — Auction Marketplace"
- [ ] Add Google Fonts `<link>` for Muli (weights 300,400,700,900)
- [ ] Define theme tokens in `src/index.css` `@theme` block:
      `--color-brand: #f37121;` `--color-surface: #f8f9fa;`
      `--color-dark: #000;` `--color-body: #25262a;`
- [ ] Add `injectUiSource()` in `vite.config.ts` (copy pattern)
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Components — Navbar (10 min)

- [ ] Create `src/components/Navbar.tsx`
- [ ] Absolute positioning, transparent bg, white text links
- [ ] Brand "Bidpoint" on left, nav links center, Sign In/Register right
- [ ] Desktop dropdown for Services (hover-triggered)
- [ ] Mobile hamburger toggle
- [ ] Write `Navbar.test.tsx` (content, styling, mobile menu)

### Phase 3: Components — Hero (10 min)

- [ ] Create `src/components/Hero.tsx`
- [ ] Full-width background image (picsum seed `bidpoint-hero`) with
      dark overlay at 20% opacity
- [ ] Centered h1 "The Best Place to Buy and Sell", subtext, Register button
- [ ] Write `Hero.test.tsx` (content, background, CTA button)

### Phase 4: Components — Auctions Grid (15 min)

- [ ] Create `src/components/AuctionsGrid.tsx`
- [ ] 8 product cards with data array (name, category, bids, price, image)
- [ ] Responsive grid: col-6 / md:col-4 / lg:col-3
- [ ] Price badge (absolute top-left on image), product image (picsum
      seed `bidpoint-<n>`), title, category+bid row, "Submit a Bid" button
- [ ] Button style: #f8f9fa bg, #000 text, no radius
- [ ] Write `AuctionsGrid.test.tsx` (renders 8 cards, correct data,
      button exists, responsive grid structure)

### Phase 5: Components — How It Works (10 min)

- [ ] Create `src/components/HowItWorks.tsx`
- [ ] 4 steps in grid: Register, Buy or Bid, Submit a Bid, Win
- [ ] 90px circular orange icons (lucide: User, Coins, Gavel, Trophy)
- [ ] Steps 1-3 show arrow between, step 4 has no arrow
- [ ] Write `HowItWorks.test.tsx` (4 steps, correct content, arrows)

### Phase 6: Components — About Us (10 min)

- [ ] Create `src/components/AboutUs.tsx`
- [ ] Two-column: left image (picsum), right heading + 3 feature rows
- [ ] Feature rows: 70px circular orange icons (lucide: Plane, Smile,
      Headphones), heading, description
- [ ] Write `AboutUs.test.tsx` (image, heading, 3 features)

### Phase 7: Components — Testimonials (10 min)

- [ ] Create `src/components/Testimonials.tsx`
- [ ] Background image with orange (#f37121) overlay
- [ ] White heading "Happy Clients" + carousel of testimonial cards
- [ ] Cards: round avatar (picsum), name, role, quote
- [ ] Use simple CSS-based carousel or state-managed slide rotation
- [ ] Write `Testimonials.test.tsx` (heading, cards, avatars)

### Phase 8: Components — CTA + Footer (10 min)

- [ ] Create `src/components/CtaSection.tsx`
- [ ] Centered "Create an account and start Buy, Bid or Sell Now!" + Register
- [ ] Create `src/components/Footer.tsx`
- [ ] 4-column layout: logo+desc, Solutions, Services, Contact
- [ ] Copyright bar with Component Dock link
- [ ] Write tests for both

### Phase 9: App composition + Integration (10 min)

- [ ] Compose all sections in `src/App.tsx` in correct order:
      Navbar → Hero → AuctionsGrid → HowItWorks → AboutUs → Testimonials
      → CtaSection → Footer
- [ ] Ensure semantic landmarks (banner, main, contentinfo)
- [ ] Set document title "Bidpoint — Auction Marketplace"
- [ ] Write `App.test.tsx` verifying all sections render

### Phase 10: Verification (5 min)

- [ ] `npm run spec:validate` passes
- [ ] `npm run verify:app -- bidpoint` passes (typecheck + lint +
      100% coverage + build)
- [ ] No ColorLib references in any `apps/bidpoint/` file
- [ ] Footer links to https://www.componentdock.com/
- [ ] `npm install` at root to update lockfile
- [ ] Commit: `feat: add bidpoint template (ColorLib Auction recreation)`
