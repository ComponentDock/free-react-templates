# Solecraft (ColorLib Solestyle) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-solecraft`. Recreation name: **Solecraft** (NEW name —
> the ColorLib source keeps its name "Solestyle").

## Source mapping

- **ColorLib item:** "Solestyle" (TEMPLATES.md line 1605, first unchecked item).
- **Source URL:** https://colorlib.com/wp/template/solestyle/
- **Preview URL — REACHABLE (verified 2026-09-19):**
  **`https://preview.colorlib.com/theme/solestyle/`**
  (title: "Stride - Step Into Style", HTTP 200, Astro-built, Tailwind 4.3.3).
- **Preview CSS:** `_astro/Base.LD3yxqgO.css` (compiled Tailwind 4.3.3 output,
  ~54KB). Fonts: Inter (body, weights 400–700) + Outfit (display, weights 400–800)
  loaded via Cloudflare `@font-face` → replace with Google Fonts `<link>`.

## Reference research (done — do not redo)

### Live preview DOM analysis (2026-09-19)

Fetched full HTML (105KB) + CSS (54KB) from the preview. The page is an Astro-
generated single-page e-commerce shoe store with these sections top-to-bottom:

1. **Announcement Bar** — full-width gradient (`from-primary-600 to-primary-500`),
   white text, promo copy "Free shipping on orders over $75 | Use code STRIDE20
   for 20% off your first order". Not dismissible. Always visible.

2. **Sticky Header** — `sticky top-0 z-40`, `bg-white/95 backdrop-blur-md`
   (dark: `bg-gray-950/95`), 64px height (80px on lg). Contains:
   - Logo: gradient icon (primary-500→600, rounded-xl) + "Stride" text (Outfit bold)
   - Desktop nav: Shop, Categories, New Arrivals, Sale, About (sm font-medium)
   - Actions: search toggle, dark mode toggle, wishlist (hidden sm), cart with badge
   - Mobile: hamburger toggle, slide-down mobile menu
   - Search modal: overlay with input + popular tags (Running, Sneakers, Boots)

3. **Hero Section** — `min-h-[90vh]`, `bg-gray-950`. Background: multi-stop
   gradient (gray-900 → gray-950 → primary-950) with decorative blur circles
   (primary-500/10, 600px diameter, 100px blur). Content:
   - Badge: "New Collection 2026" (primary-500/10 bg, primary-400 text)
   - Headline: "Step Into Style" (Outfit 6xl bold white, tracking-tight)
   - Subtitle: "Premium footwear for every step..." (gray-400, max-w-2xl)
   - Two CTA buttons: "Shop Now" (primary-600 bg, rounded-full, shadow-lg)
     + "Explore Collection" (bordered, transparent bg)
   - Floating product image (rounded-3xl, shadow-2xl, `float-animation` 4s)
     with a "Best Seller" badge (absolute, rounded-full, yellow-400 bg)

4. **Featured Products** — white bg (dark: bg-gray-950), py-20 lg:py-28.
   - Section label: "Trending Now" (primary-600 pill badge)
   - Headline: "Fan Favorites" (Outfit 3xl/4xl bold)
   - 4-column grid (lg:grid-cols-4) of product cards:
     - Each: aspect-square rounded-2xl image, overlay with Add to Cart button
       + wishlist heart icon (absolute, top-right)
     - Below image: category (gray-500 text-sm), name (font-medium), price
     - Star rating (yellow-400), color swatches (rounded-full dots)
     - Card hover: `card-hover` (translateY(-4px) + shadow-lg)
   - Products: Velocity Runner Pro ($149), Cloud Stride Elite ($129),
     Urban Flex ($99), Cloud 9 Recovery ($59)

5. **Categories** — bg-gray-950, py-20 lg:py-28.
   - Section label: "Browse by Activity" (primary-500/10 pill)
   - Headline: "Find Your Perfect Pair" (Outfit 3xl/4xl bold white)
   - 3-column grid (lg:grid-cols-3) with `aspect-[4/3]` cards:
     - Each: background image (picsum placeholder), dark overlay
     - Overlay text: category name + "XX Products →" (slides up on hover)
     - 6 categories: Running, Sneakers, Basketball, Casual, Boots, Sandals

6. **Newsletter/CTA Section** — `bg-primary-600`, py-20 lg:py-28.
   - Background: repeating grid pattern (32px, white/5%), decorative blur circles
   - Headline: "Ready to Step Up Your Game?" (Outfit 4xl/5xl bold white)
   - Subtitle: community join pitch + 15% off (primary-100)
   - Email form: rounded-full input (border-white/20, bg-white/10) + "Get 15% Off"
     button (white bg, primary-600 text, rounded-full)
   - App Store + Google Play badges (black/30 bg, rounded-xl)

7. **Testimonials** — bg-gray-950, py-20 lg:py-28.
   - Section label: "Customer Love" (primary-500/10 pill)
   - Headline: "What Our Customers Say" (Outfit 3xl/4xl bold white)
   - 3-column grid of testimonial cards (bg-gray-900, rounded-2xl, p-8):
     - Each: 5 yellow stars, blockquote text (gray-300), author avatar
       (circular, h-12) + name (white, semibold) + role (gray-500)
   - Trust stats bar below: 50K+ / 4.9/5 / 15K+ / 98% (Outfit 4xl bold white,
     gray-500 subtitle), separated by gray-800 vertical dividers

8. **Footer** — bg-gray-50 (dark: bg-gray-900).
   - Newsletter signup row (border-b): "Join the Stride Club" + email input + Subscribe
   - 4-column grid: Brand (logo + blurb + social icons), Shop (6 links),
     Help (5 links), About (5 links)
   - Bottom bar (border-t): copyright, Privacy/Terms links, payment icons
     (Visa, Mastercard, Amex, Apple Pay)
   - **MUST replace attribution with Component Dock link**

### Key design decisions for implementation

- **Dark mode is the default** (`bg-gray-950` body, `dark:` prefix for dark theme).
  The `prefers-color-scheme: dark` check sets `.dark` on load; toggle button
  flips and persists to localStorage.
- **No external images needed** — use `https://picsum.photos/seed/solecraft-N/W/H`
  for product images and category backgrounds. Use lucide-react for all icons.
- **Fonts via Google Fonts** — load Inter (400,500,600,700) + Outfit
  (400,500,600,700,800) in `index.html`.
- **Primary color in @theme** — `--color-primary-*` tokens extracted above go
  into `index.css` `@theme` block. Use Tailwind utility classes (`bg-primary-600`,
  `text-primary-400`, etc.) throughout.
- **Product data as static array** — define in a `data/products.ts` file with
  name, category, price, rating, colors, image seed.
- **Category data as static array** — define in a `data/categories.ts` file with
  name, count, image seed.

## Task breakdown

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (rename package to `@free-react-templates/solecraft`)
- [ ] Set up `public/CNAME` → `solecraft.free.componentdock.com`
- [ ] Set up `package.json` homepage
- [ ] Add Google Fonts (Inter + Outfit) to `index.html`
- [ ] Configure `vite.config.ts` with `injectUiSource()` pattern

### Phase 2: Design tokens
- [ ] Add primary color scale to `@theme` in `index.css` (primary-50 through primary-950)
- [ ] Set `--font-display: "Outfit"` in `@theme`
- [ ] Configure dark mode class strategy

### Phase 3: Static data
- [ ] Create `src/data/products.ts` (4 products with name, category, price, rating, colors, image seed)
- [ ] Create `src/data/categories.ts` (6 categories with name, count, image seed)
- [ ] Create `src/data/testimonials.ts` (3 testimonials with quote, author, role, avatar)

### Phase 4: Components (bottom-up)
- [ ] `src/components/AnnouncementBar.tsx` — gradient bar, promo text
- [ ] `src/components/Header.tsx` — sticky header, nav, search, dark toggle, cart
- [ ] `src/components/Hero.tsx` — gradient mesh bg, headline, CTAs, floating image
- [ ] `src/components/FeaturedProducts.tsx` — product grid, cards with hover/animation
- [ ] `src/components/Categories.tsx` — category grid with overlay reveal
- [ ] `src/components/NewsletterCta.tsx` — primary bg, grid pattern, email form, app badges
- [ ] `src/components/Testimonials.tsx` — testimonial cards, trust stats
- [ ] `src/components/Footer.tsx` — newsletter, 4-col links, social, payment, Component Dock
- [ ] `src/components/SearchModal.tsx` — overlay search with popular tags
- [ ] `src/components/DarkModeToggle.tsx` — toggle with localStorage persistence
- [ ] `src/components/MobileMenu.tsx` — hamburger slide-down menu
- [ ] `src/App.tsx` — compose all sections in order
- [ ] `src/index.css` — Tailwind entry + theme tokens

### Phase 5: Tests (TDD — write before implementation where possible)
- [ ] Test each component renders correctly (happy path)
- [ ] Test dark mode toggle (click → class flip → localStorage)
- [ ] Test search modal open/close (button click, Escape key)
- [ ] Test mobile menu toggle (hamburger click → expand/collapse)
- [ ] Test add-to-cart animation trigger
- [ ] Test wishlist toggle (click → filled/outline)
- [ ] Test product card hover state (class presence)
- [ ] Achieve 100% coverage

### Phase 6: Verification
- [ ] `npm run typecheck` — zero errors
- [ ] `npm run lint` — zero errors
- [ ] `npm run test:coverage` — 100% all metrics
- [ ] `npm run build` — clean build
- [ ] Visual check: all sections match reference design
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
