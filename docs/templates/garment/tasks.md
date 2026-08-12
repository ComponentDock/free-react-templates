# Garment (ColorLib Essence) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-garment/` is the claim marker — implementers
> pick this template when it is the first `- [ ]` item with a spec.

## Design notes (replication findings)

- **Original:** ColorLib "Essence" — fashion ecommerce store template
  (source: https://colorlib.com/wp/template/essence/). TEMPLATES.md has a
  dup row for Essence (two `- [ ]` entries) — one spec/impl covers both.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/essence/
  (HTTP 200; `css/core-style.css` 56.7 KB + `style.css` extracted; HTML saved
  at /tmp/essence.html).
- **Visual design (from DOM + CSS tokens + screenshot):** clean minimalist
  boutique aesthetic — white background, black sans-serif typography, royal
  blue (`#0315ff`) square CTA buttons, red (`#dc0345`) sale accents, split
  hero (text left / model photo right), 3 photo category tiles with uppercase
  black labels, dark footer. Dominant: white / black / royal blue.
- **Structure (1:1, section order):**
  1. Header: logo "Garment" (left) + nav Shop (dropdown: Dresses, Blouses &
     Shirts, T-shirts, Rompers, Bras & Panties / T-Shirts, Polo, Shirts,
     Jackets, Trench), Pages (dropdown: Home, Product Details, Checkout,
     Regular Page), Blog, Contact; right meta cluster: search input ("Type
     for search"), wishlist heart, account user, cart bag with count badge
     "3" — icon columns 90px wide with 1px `#ebebeb` left borders.
  2. Cart drawer (right slide-out): 3 line items (thumb + name + Size/Color
     - $45.00), summary (Subtotal $274.00 / Delivery Free / Discount -15% /
       Total $232.00), blue "check out" button.
  3. Hero (`welcome_area`, 600px, bg photo right): left text — small gray
     label (screenshot reads "85055"; DOM h6 "asoss"), black "New
     Collection" (60px), blue square "VIEW COLLECTION" button.
  4. Top categories: 3 tiles (240px, photos) — CLOTHING, SHOES,
     ACCESSORIES, 30px bold uppercase black labels, white overlay
     `rgba(255,255,255,0.6)` on hover.
  5. CTA banner: bg photo, right-aligned — red "-60%" (24px), black "Global
     Sale" (60px), blue "Buy Now" button.
  6. Popular products: heading (30px capitalize, weight 600) + 4 cards:
     Knot Front Mini Dress $80.00 · Poplin Displaced Wrap Dress $80.00 ·
     PETITE Crepe Wrap Mini Dress $75.00→$55.00 (red offer badge -30%) ·
     PETITE Belted Jumper Dress $80.00 (blue New badge); each with photo,
     heart favourite, name, price, "Add to Cart" (hover reveal).
  7. Brands strip: `#f5f7f9` bg, padding 100px 5%, brand logo placeholders
     (Mango, Topshop, ...).
  8. Footer (`#252525`, padding 70px 0 60px): row 1 — logo + Shop/Blog/
     Contact links + second list (Order Status, Payment Options, Shipping
     and Delivery, Guides, Privacy Policy, Terms of Use); row 2 —
     "Subscribe" heading + email input + arrow submit; 5 white social icons
     (Facebook, Instagram, Twitter, Pinterest, YouTube); copyright line
     (paraphrase, drop the "made with ♥ by Colorlib" credit).
- **Design tokens extracted from CSS:**
  - Primary **blue `#0315ff`** (essence-btn bg, new-badge, header count
    numbers); accent **red `#dc0345`** (btn hover, offer-badge, sale price,
    CTA "-60%").
  - Black `#000000` (headings, category labels, default badge bg); footer
    `#252525`; text gray `#787878`; light `#f5f7f9`, `#f6f6f6`, borders
    `#ebebeb`.
  - Fonts: body **"Poppins"**; headings h2/h3/h5/h6, badges, prices, counts
    **"Ubuntu"** (both Google Fonts).
  - Buttons `.essence-btn`: square (`border-radius: 0`), min-width 170px,
    height 50px, uppercase 12px, letter-spacing 1.5px, padding 0 40px,
    white text; hover `#dc0345`.
  - Product badges: 25px tall, Ubuntu 700 12px, top 20px left 20px; offer
    `#dc0345`, new `#0315ff`, default black. Price: Ubuntu 24px bold
    `#dc0345`; strike-through `#787878`.
  - Hero h6 18px `#787878`, h2 60px black (48/30 responsive); section
    heading 30px capitalize weight 600; category label 30px bold uppercase.
- **Recreation name:** Garment (NEW — differs from ColorLib "Essence"). App
  folder `apps/garment`, package `@free-react-templates/garment`. Surge
  subdomain `free-react-templates-garment.surge.sh`.
- **Recreation approach:** verified picsum photo refs for the subject-critical
  slots (screened: arbitrary seeds render random scenes — hero
  `picsum.photos/id/64/1600/600`, CTA `id/65/1600/700`, categories
  `id/338|1005|838` 600x480, products `id/64|65|338|838` 400x500); lucide-react
  icons (Heart,
  User, ShoppingBag, Search, ArrowRight; social icons as inline SVG);
  Poppins + Ubuntu via Google Fonts `<link>`; dark-mode toggle per
  conventions; no assets copied.

## Implementation tasks (order)

1. Scaffold `apps/garment` (copy Aurora pattern), rename package to
   `@free-react-templates/garment`, register workspace, `npm install` at
   root, verify lockfile (`grep -c free-react-templates/garment
package-lock.json`), keep `injectUiSource()` in vite.config.ts.
2. `@theme` tokens: `--color-brand` `#0315ff`, `--color-accent` `#dc0345`,
   footer `#252525`, text gray `#787878`; Google Fonts links (Poppins +
   Ubuntu) in index.html.
3. Tests first (red) per spec scenarios, then components:
   - `Navbar` (+ dropdowns, search, icon cluster with count badges,
     dark-mode toggle)
   - `CartDrawer` (slide-out, 3 items, totals summary, check out)
   - `Hero` (bg photo + "New Collection" + View Collection button)
   - `CategoryTiles` (Clothing / Shoes / Accessories)
   - `CtaBanner` ("-60%" / Global Sale / Buy Now)
   - `ProductCard` + `PopularProducts` (4 cards, badges, sale pricing,
     favourite heart, Add to Cart)
   - `BrandsStrip` (light gray, logo placeholders)
   - `Footer` (link columns, subscribe form, social icons, copyright)
4. Compose sections in `App.tsx` in the 1:1 order above.
5. Gate: `scripts/verify-app.sh garment` (typecheck + lint + knip + fallow
   - 100% coverage tests + build). `npm run spec:validate`.
6. PR `feat/template-garment` → merge immediately (`gh pr merge --squash
--delete-branch`), then TEMPLATES.md `[~]`→`[x]` on BOTH Essence rows +
   surge URL + homepage + `npm run readme:status`.
