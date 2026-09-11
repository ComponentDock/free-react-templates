# Coinwell — Implementation Tasks

Source: ColorLib "Cryptos" (https://colorlib.com/wp/template/cryptos/)
New name: coinwell
Category: Cryptocurrency / Fintech

## Task List

### 1. Scaffold
- [ ] Create `apps/coinwell/` from simplest existing app template
- [ ] Rename package to `@free-react-templates/coinwell`
- [ ] Set `public/CNAME` to `coinwell.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://coinwell.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Configure Tailwind theme tokens in `src/index.css`:
  - Brand colors: navy `#0d104d`, blue `#28408b`, gold `#ffaf02`
  - Text: dark `#292929`, muted `#8e8e8e`
  - Background light: `#eef3f6`
- [ ] Add Google Fonts link (Montserrat + Open Sans) to index.html
- [ ] Run `npm install` at repo root to register workspace in lockfile

### 2. Components (in DOM order)
- [ ] `TopHeader.tsx` — Dark bar with welcome text + accent span + right-aligned links
- [ ] `Navbar.tsx` — White navbar with logo, nav links (Home, Pages, Currencies, Contact), newsletter form, mobile hamburger
- [ ] `Hero.tsx` — Carousel with 2 slides, split layout (text left, image right), gold CTA button
- [ ] `Features.tsx` — Section heading + 4 feature cards with icons, gold hover effect
- [ ] `About.tsx` — Split layout: image left, heading + text + CTA right
- [ ] `CurrencyCalculator.tsx` — Dark overlay bg, heading, two converter rows with inputs + dropdowns
- [ ] `BlogPrices.tsx` — Two-column: 3 blog posts (thumbnail + meta + title + excerpt) + crypto price table (10 coins)
- [ ] `Newsletter.tsx` — Centered heading + email input + Subscribe button
- [ ] `Footer.tsx` — Dark overlay bg, 3 widget columns (logo+social, Recent Posts, Quick Links), bottom copyright with Component Dock link

### 3. App Composition
- [ ] `App.tsx` — Assemble all sections in order: TopHeader, Navbar, Hero, Features, About, CurrencyCalculator, BlogPrices, Newsletter, Footer

### 4. Tests (TDD — write before impl)
- [ ] TopHeader renders welcome text and links
- [ ] Navbar renders nav links and newsletter form
- [ ] Hero renders headline, description, CTA button, and image
- [ ] Features renders 4 cards with icons, titles, descriptions
- [ ] Features card hover/focus changes background to gold
- [ ] About renders split layout with image and heading
- [ ] CurrencyCalculator renders two converter rows with inputs
- [ ] BlogPrices renders 3 blog posts and price table with 10 coins
- [ ] Newsletter renders heading, email input, submit button
- [ ] Footer renders 3 columns, social icons, copyright with Component Dock link
- [ ] App renders all sections in correct order

### 5. Verification
- [ ] Run `npm run verify:app coinwell` (typecheck + lint + 100% coverage + build)
- [ ] Verify no ColorLib references in `apps/coinwell/`
- [ ] Verify footer links to https://www.componentdock.com/

## Design Notes

- **Overall aesthetic:** Dark fintech theme with navy + gold accents
- **Dark background sections:** Hero, Currency Calculator, Footer use dark overlays on background images
- **Button style:** Sharp corners (no border-radius), 54px height, gold variant with 3px bottom border
- **Crypto price table:** 10 coins with increase/decrease indicators — can use static data or mock data
- **Currency calculator:** Visual only (no actual conversion needed), just interactive form inputs
- **Icons:** Use lucide-react for feature icons and social icons (replace Font Awesome / custom icons)
- **Images:** Use picsum.photos for blog thumbnails, hero image, about illustration
