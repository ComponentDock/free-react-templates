# Emporium (ColorLib Coza Store) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Emporium** (NEW name —
> the ColorLib source keeps its name "Coza Store"/`coza-store`). Implementation
> ships on `feat/template-emporium` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Coza Store" — free e-commerce **fashion store**
  template (source: https://colorlib.com/wp/template/coza-store/; tags:
  Bootstrap 5, Business, eCommerce). TEMPLATES.md row: line 568
  (`- [ ] **Coza Store**`). The `coza-store` slug appears once (no dup rows).
- **Live preview DOM — UNREACHABLE (verified 2026-08-16):**
  `https://preview.colorlib.com/theme/coza-store/` returns **HTTP 404**
  ("Not Found") via both curl and in-browser; no stylesheet (`main.css`) could
  be fetched. **Screenshot is the reference** for this prep
  (`cozastore-free-template.jpg`, 1200×946, analyzed 2026-08-16). Implementer:
  before coding, re-check the preview — if it's back, reconcile section order
  - tokens from the real CSS/DOM and update the spec; if still down, follow
    the screenshot + this spec's token notes.
- **Visual design (screenshot):** minimalist high-fashion storefront,
  monochrome **black/white/light-gray + periwinkle accent**:
  page off-white/light gray (`#f5f5f5`, cards white `#fff`), hero soft gray
  (`#e0e0e0`), black text (`#000`), **periwinkle `#717fe0`** hero "SHOP NOW"
  pill (white text), small red/pink "New" badge. Serif (Playfair-like)
  headlines + sans (Open-Sans/Poppins-like) body/nav.
- **Structure observed (1:1, reconstructed from screenshot + standard Coza
  Store layout):**
  1. Top utility bar — thin FULL-WIDTH BLACK strip: left "Free shipping for
     standard order over $100"; right Help/FAQs · My Account · currency "USD".
  2. Navbar — "Emporium" logo (black uppercase bold sans), links
     Home/Shop/Features(+red New badge)/Blog/About/Contact, right icon cluster
     (search, heart wishlist, cart with "0" badge).
  3. Hero slider (carousel) — full-width fashion banner(s), sans overline
     ("Men Collection 2018"), large SERIF headline ("NEW ARRIVALS"),
     periwinkle pill "SHOP NOW".
  4. Category grid — 3 cards: Women/Spring 2018 · Men/Spring 2018 ·
     Accessories/New Trend, white over light-gray page.
  5. Product Overview — bold uppercase heading "PRODUCT OVERVIEW"; LEFT filter
     sidebar (category, price, color swatches, size) + product GRID of cards
     (image, name, price, optional New/sale badge).
  6. Newsletter — "Special Offer for Subscribers" heading + email + subscribe.
  7. Footer — multi-column (Categories/Links/Help/Newsletter) + copyright bar
     - Component Dock link.

## Implementation task outline

1. **Scaffold** `apps/emporium` from the simplest existing app (e.g. copy a
   sibling storefront app pattern). Rename package to
   `@free-react-templates/emporium`; set `public/CNAME` =
   `emporium.free.componentdock.com` and `"homepage"` =
   `https://emporium.free.componentdock.com`; register via `npm install` at
   root (lockfile). Vite config: keep `injectUiSource()`. Add the jsdom
   localStorage polyfill to `src/test/setup.ts` as needed.
2. **Design tokens** in `src/index.css` `@theme`: `--color-page: #f5f5f5`
   (background, white cards), `--color-hero: #e0e0e0`, `--color-ink: #111`
   (headings/nav), `--color-brand: #717fe0` (periwinkle primary CTA, white
   text, hover a slightly deeper periwinkle), `--color-badge: #e53935`
   (red/pink "New"), warm grays `#666/#999` meta. Buttons fully-rounded
   (pill). Load **Playfair Display** (serif headlines) + **Open Sans** (body)
   via Google Fonts `<link>` in `index.html`.
3. **Components** (mirror section list — see spec Gherkin):
   - `TopBar` — thin black strip (shipping notice + Help/My Account/USD).
   - `Navbar` — logo, links (Features has "New" badge), search/wishlist/cart
     icon cluster + cart count badge; responsive collapsible menu on mobile.
   - `HeroSlider` — carousel (React state, prev/next/dots), fashion picsum
     banner(s), serif headline, periwinkle pill "SHOP NOW".
   - `CategoryGrid` — 3 banner cards (Women/Men/Accessories + label line).
   - `ProductOverview` — "Product Overview" heading; `FilterSidebar` (category,
     price, color swatches, size — working state that filters the grid) +
     `ProductGrid`/`ProductCard` (image, name, price, optional badge).
   - `Newsletter` — heading, email input + subscribe button, validation +
     confirmation (aria-live).
   - `Footer` — multi-column + copyright + Component Dock link.
4. **App.tsx** composes TopBar → Navbar → HeroSlider → CategoryGrid →
   ProductOverview → Newsletter → Footer; set document title
   "Emporium — Fashion Store".
5. **Tests** (TDD, 100% coverage): each section renders its heading/content;
   hero carousel navigation (next/prev/dots change slide); filter sidebar
   updates the product grid; cart badge count; newsletter validation +
   confirmation; footer links Component Dock; document title; responsive
   (mobile navbar toggle). Query multi-button sections by role/text
   carefully (e.g. hero "SHOP NOW", cart badge).
6. **Verify:** `npm run verify:app` (typecheck/lint/knip/fallow/vitest 100%/
   build) for the changed app; `npm run spec:validate`; visual QA the built
   output (periwinkle pill, serif headlines, gray/white sections, images load).
7. **Ship:** commit conventional (`feat:`), push `feat/template-emporium`,
   open PR, **merge immediately** (squash, delete branch), then bookkeep
   (`[x]` + surge URL `https://emporium.free.componentdock.com` +
   `npm run readme:status`).

## Key fidelity pitfalls

- The live preview **404s** right now — don't block on it; if it stays down,
  use the screenshot + this spec. If it returns, reconcile first.
- The signature accent is **periwinkle `#717fe0` (NOT blue/not pink/brand
  default)** — the "SHOP NOW" hero pill. Use it as the primary CTA across the
  storefront.
- Headlines are **SERIF** (Playfair Display) while nav/body/category labels
  are **SANS** — don't make everything sans, keep the high-fashion contrast.
- Buttons are **pill/fully-rounded**, uppercase bold — not square default
  buttons.
- Navbar mobile menu is a known bug class for these templates — make sure the
  collapsible/hamburger menu is transparent and functional on mobile (user
  reports transparent mobile menus as a bug).
- All imagery = picsum placeholders (one stable seed per image); no ColorLib
  assets; icons via `lucide-react` (search, heart, shopping-bag).
- Never put ColorLib in app code; footer MUST link Component Dock.
