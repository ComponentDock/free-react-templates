# Adspot — Design Notes & Implementation Tasks

**Source:** ColorLib Classy Ads (https://preview.colorlib.com/theme/classyads/)
**New name:** Adspot
**Category:** Marketplace / Classified Ads

## Design Notes

### Overall Aesthetic
Clean, modern classified ads marketplace. Teal accent (#30e3ca) with Bootstrap blue (#007bff) for CTAs. Nanum Gothic font gives a friendly, approachable feel. Light/dark section alternation creates visual rhythm.

### Color Strategy
- White sections: navbar, popular products, testimonials
- Light gray sections: category bar, featured ads, trending, blog
- Blue accent: newsletter section (bg-primary)
- Dark gray: footer (#333333)
- Teal accent: section heading underlines, category badges, form focus states

### Key Visual Elements
1. **Section heading accent:** Teal (#30e3ca) underline bar (3px, 80px wide) centered under headings via `.border-primary:after`
2. **Category cards:** Dark overlay bg, icon + caption + large count number, border-radius 7px
3. **Listing cards:** Image with dark overlay, heart bookmark icon, category badge pill, title, address, star ratings
4. **Hero search:** 4-field horizontal form (What, Location, Category, Search button), rounded inputs
5. **"Post an Ad" CTA:** Blue pill button in navbar

### Section-by-Section Fidelity Notes

1. **Navbar:** White bg, sticky. Logo "ClassyAds" with "Ads" in blue. Desktop nav right-aligned. Dropdown on About. "Log In" / "Register" links. "+ Post an Ad" blue pill CTA. Mobile hamburger menu.

2. **Hero:** Full-width bg image (cityscape/urban), dark overlay. Centered h1 "Largest Classifieds In The World", subtitle, then search form with 4 inputs in a flex row (What text, Location text, Category select, Search button). AOS fade animations.

3. **Category Bar:** Light bg section. 6-column grid (2-col on sm, 3-col on md, 6-col on lg). Each card: dark overlay bg, icon (flaticon), category name, listing count number. Cards have border-radius 7px. Hover effect brightens.

4. **Featured Ads:** Light bg. "Featured Ads" heading. Owl-carousel with vertical listing cards: image (bg-image), category badge (teal pill), heart bookmark, h3 title, address, 5-star rating row, review count.

5. **Popular Products:** White bg. "Popular Products" heading with teal underline. 5 listing items in responsive grid (col-md-6 col-lg-4 / col-lg-6). Each: image (img-fluid), overlay with heart bookmark + category badge + title + address.

6. **Trending Today:** Light bg. "Trending Today" heading. 2-column layout. Each column has 3 listing cards in mixed vertical/horizontal layouts (d-block d-md-flex). Same card structure as Featured Ads.

7. **Testimonials:** White bg. "Testimonials" heading with teal underline. Owl-carousel. Each slide: profile photo (img-fluid, rounded), name, blockquote with double-quote styled text.

8. **Our Blog:** Light bg. "Our Blog" heading with subtitle. 3-column grid. Each card: rounded image, title (h2), meta (author, date, category), excerpt paragraph. "View All Posts" centered blue button.

9. **Newsletter:** Blue bg-primary section. 2-column layout: left = "Newsletter" heading + description, right = email input + "Subscribe" white button. Form control has bottom-border-only style.

10. **Footer:** Dark gray (#333333) bg. 2-row layout. Top row: About (text), Navigations (links), Follow Us (social icons), Search form. Bottom row: copyright with border-top.

## Implementation Tasks

### Phase 1: Scaffolding
- [ ] Copy simplest existing app as base
- [ ] Rename package to `@free-react-templates/adspot`
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `adspot.free.componentdock.com`
- [ ] Update `package.json` homepage

### Phase 2: Theme & Tokens
- [ ] Add Nanum Gothic font via Google Fonts link in `index.html`
- [ ] Define Tailwind theme tokens: primary-teal (#30e3ca), primary-blue (#007bff), footer-bg (#333333), body-text (#4d4d4d)
- [ ] Set up base styles (font-family, line-height, color)

### Phase 3: Components
- [ ] `Navbar.tsx` — white bg, brand with accent, dropdown, CTA button
- [ ] `Hero.tsx` — bg image, overlay, headline, search form (4 fields)
- [ ] `CategoryBar.tsx` — 6 category cards with icon/name/count
- [ ] `FeaturedAds.tsx` — carousel with listing cards
- [ ] `PopularProducts.tsx` — 5-item grid listing cards
- [ ] `TrendingToday.tsx` — 2-column listing grid
- [ ] `Testimonials.tsx` — carousel with photos and quotes
- [ ] `BlogSection.tsx` — 3-column blog cards + CTA
- [ ] `Newsletter.tsx` — blue bg, email form
- [ ] `Footer.tsx` — dark bg, multi-column layout

### Phase 4: Shared Components
- [ ] `ListingCard.tsx` — reusable card (image, overlay, category badge, title, address, stars)
- [ ] `SectionHeading.tsx` — heading with teal underline accent

### Phase 5: Testing (TDD)
- [ ] Component tests for each section
- [ ] 100% coverage enforcement
- [ ] Responsive layout tests

### Phase 6: Polish
- [ ] AOS scroll animations
- [ ] Mobile responsive breakpoints
- [ ] Accessibility: semantic HTML, aria-labels
- [ ] Footer Component Dock link
