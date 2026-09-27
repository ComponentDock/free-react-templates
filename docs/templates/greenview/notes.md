# GreenView — Design Notes & Task Outline

## Source

- **ColorLib template:** Ecoverde
- **Slug:** `ecoverde`
- **Preview URL:** https://preview.colorlib.com/theme/ecoverde/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ecoverde-free-template.jpg

## Replication Research

### Live Preview DOM Analysis (fetched 2026-09-27)

**Font:** Nunito Sans (weights 200–900, loaded via Cloudflare `@font-face`)

**Brand color:** `#24A148` (vibrant green) — used pervasively:
- Links (`a { color: #24A148 }`)
- Buttons (`.btn.btn-primary { background: #24A148; border: 1px solid #24A148 }`)
- Button hover: transparent bg + green border + green text
- Search bar background (`@media (min-width: 992px) { .search-bg { background: #24A148 } }`)
- Services section (`bg-primary` overridden to `#24A148`)
- Active nav links, subheading text, counter numbers, testimony dots
- Footer links, agent hover bg, blog meta, pagination

**Dark color:** `#343a40` (Bootstrap dark) — navbar, workflow section, footer
**Light color:** `#f8f9fa` — testimonial section background
**Text color:** `#1a1a1a`

**Button shape:** Square (no border-radius), 4px only on small badges

### Screenshot Analysis

From the ColorLib screenshot:
- Clean real estate layout with professional photography
- Hero: large waterfront property image, dark overlay, left-aligned text
- Green search bar overlapping hero bottom
- Green services strip with white text and line-art icons
- White property cards section
- Dark "How it works" section with numbered steps
- Light testimonial section
- Dark footer with green accents

### CSS Token Extraction

```css
/* Custom overrides (not Bootstrap defaults) */
.bg-primary { background: #24A148 !important; }
.btn.btn-primary { background: #24A148; border: 1px solid #24A148; color: #fff; }
.btn.btn-primary:hover { background: transparent; color: #24A148; }
a { color: #24A148; }
.services.services-bg { background: #24A148; }
.heading-section .subheading { color: #24A148; }
.ftco-counter .text strong.number { color: #24A148; }
.testimony-wrap .fa { color: #24A148; }
.ftco-footer a { color: #24A148; }
.search-bg { background: #24A148; } /* desktop only */
```

## Section-by-Section Fidelity Notes

### 1. Navbar
- Dark background (`bg-dark`)
- Brand text left, nav links right
- Links: Home, About, Agents, Services, Properties, Blog, Contact
- Active link: green text
- On scroll: white bg + shadow + black text + green active
- Mobile: hamburger toggle

### 2. Hero
- Full-width background image (`picsum.photos` placeholder)
- Dark overlay (`bg-black/50`)
- White heading: "Find Perfect House From Your Area" (large, bold)
- White subtitle paragraph
- Green CTA button: "View all properties" (square, no radius)
- Text left-aligned, vertically centered

### 3. SearchBar
- White card with box-shadow
- Overlaps hero bottom edge (negative margin or absolute positioning)
- 4-column grid: Keyword (text), Property Type (select), Location (text), Price Limit (select)
- Green "Search" submit button (full-width in its column)
- Labels above each field

### 4. ServicesStrip
- Green background (`bg-brand`)
- 4 equal columns
- Each: icon (line art, `lucide-react`), heading (white, bold), description (white, smaller)
- Text centered in each column

### 5. FeaturedProperties
- White background
- Centered section heading with green subheading + title
- Horizontal carousel of property cards
- Each card: image top (with Sale/Rent badge), details below
- Details: bed/bath/sqft icons, property name, location, green link button, agent row (avatar + name + time)

### 6. HowItWorks
- Dark background (`bg-dark`)
- White text
- Centered heading with green subheading
- 4 columns: numbered steps (01–04)
- Each: SVG blob icon, step title, description
- Steps: Evaluate Property, Meet Your Agent, Close the Deal, Have Your Property

### 7. About
- White background
- Two-column: images right (2 stacked), text left
- Heading: "GreenView Real Estate"
- Two paragraphs of descriptive text

### 8. StatsCounter
- Background image (real estate scene)
- 4 stat blocks in a row
- Each: large green number (animated count-up), label text
- Stats: 1000 Area Population, 2500 Total Properties, 500 Average House, 67 Total Branches

### 9. Testimonials
- Light background (`bg-gray-50`)
- Centered heading with green subheading
- Carousel of testimony cards
- Each card: green quote icon, quote text, person row (circular avatar + name + position)

### 10. OurAgents
- White background
- Centered heading with green subheading
- 4 agent cards
- Each: full-width photo, name below, listing info ("Listing · 10 Properties")
- Hover: name background turns green with white text

### 11. RecentBlog
- White background
- Centered heading with green subheading
- 4 blog cards in a row
- Each: image (with dark overlay at bottom), meta row (date, author, green comment icon + count), heading

### 12. Footer
- Dark background
- 5-column layout:
  1. Brand name + description + social icons (Twitter, Facebook, Instagram)
  2. Community links (Search Properties, For Agents, Reviews, FAQs)
  3. About Us links (Our Story, Meet the team, Careers)
  4. Company links (About Us, Press, Contact, Careers)
  5. Contact info (address, phone, email)
- Bottom: copyright text + Component Dock link

## Implementation Tasks

- [ ] Create `apps/greenview/` (copy minimal starter, rename package)
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind + `@theme` brand color
- [ ] Create `src/App.tsx` composing all sections
- [ ] Implement `Navbar.tsx` — dark, sticky, responsive
- [ ] Implement `Hero.tsx` — bg image, overlay, heading, CTA
- [ ] Implement `SearchBar.tsx` — 4 fields, overlapping hero
- [ ] Implement `ServicesStrip.tsx` — green bg, 4 cards
- [ ] Implement `FeaturedProperties.tsx` — carousel, property cards
- [ ] Implement `HowItWorks.tsx` — dark bg, 4 steps
- [ ] Implement `About.tsx` — images + text
- [ ] Implement `StatsCounter.tsx` — animated counters
- [ ] Implement `Testimonials.tsx` — light bg, carousel
- [ ] Implement `OurAgents.tsx` — 4 agent cards
- [ ] Implement `RecentBlog.tsx` — 4 blog cards
- [ ] Implement `Footer.tsx` — dark, 5 columns, Component Dock link
- [ ] Write tests for all components (100% coverage)
- [ ] Add `public/CNAME` with `greenview.free.componentdock.com`
- [ ] Run `npm install` at repo root for lockfile
- [ ] Verify: `scripts/verify-app.sh greenview`
