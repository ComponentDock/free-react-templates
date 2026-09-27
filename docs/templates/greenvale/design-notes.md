# GreenVale — Design Notes & Task Outline

**Source**: ColorLib Ecoverde (https://preview.colorlib.com/theme/ecoverde/)
**New name**: greenvale
**Category**: Real Estate

---

## Section Order (from preview)

1. Navbar (transparent, scrolls to fixed white)
2. Hero (full-height bg image, dark overlay, headline, CTA)
3. Search Form (dark card, 5 fields, overlaps hero)
4. Services Strip (green bg, 4 icon+text columns)
5. Featured Properties (carousel of property cards)
6. Cities (3 image cards with overlay)
7. How It Works (dark bg, 4 numbered steps)
8. Agents (4-column agent profiles)
9. Blog (4-column blog cards)
10. Footer (5-column, dark)

---

## Structure Notes

### Navbar
- Transparent by default, positioned absolute over hero (top: 20px)
- Logo text "GreenVale" in white, span accent in green
- 7 nav links: Home, About, Agent, Services, Properties, Blog, Contact
- On scroll: becomes fixed, white bg, box-shadow
- Mobile: black bg, hamburger toggler
- Active link color: #24A148

### Hero
- 850px height, background image, dark overlay (#21243d at 50%)
- Title: "Find Perfect House From Your Area." (60px, white, weight 400)
- Subtitle paragraph (white at 80% opacity)
- Green CTA button "View all properties" (border-radius 3px)

### Search Form
- Dark card (#21243d) with 5px border-radius, large box-shadow
- Overlaps hero bottom (margin-top: -60px on desktop)
- 5 fields in a row: Keyword (text), Property Type (select), Location (text), Price Limit (select), Search (green button)
- Labels: white at 80% opacity, 18px
- Inputs: transparent bg, white text at 40% placeholder
- Search button: #24A148 bg, white text, border-radius 4px

### Services Strip
- Full-width green bg (#24A148)
- 4 equal columns, each: icon, title, paragraph
- "Trusted by Thousands", "Wide Range of Properties", "Financing Made Easy", "Locked in Pricing"
- Alternating darker/lighter green variants

### Featured Properties
- Centered heading: "What we offer" subheading + "Featured Properties" h2
- Owl Carousel of property cards (opacity fade between items)
- Each card: image bg with Sale/Rent badge, price overlay, property list (bed/bath/sqft icons), title link, location, agent avatar + name + timestamp
- Shadow: 0px 5px 21px -14px rgba(0,0,0,0.14)

### Cities
- Heading: "Properties" subheading + "Properties for this Cities" h2
- 3-column cards: image bg with overlay, city name in h3 span, property count
- Cities: Miami (24), Chicago (20), Illinois (15)

### How It Works
- Dark bg (#0f101c), white text
- "Work flow" subheading + "How it works" h2
- 4 numbered steps (01–04) with icon, title, description

### Agents
- 4-column grid: agent photo (img-fluid), name (link), listing info
- "Listing" position + "10 Properties" count

### Blog
- "Blog" subheading + "Recent Blog" h2
- 4-column blog cards: image bg, meta (date, author, comment count), title link

### Footer
- 5 columns: brand + social icons, Community links, About Us links, Company links, Contact (address, phone, email)
- Copyright bar with Component Dock link

---

## Tasks

- [ ] Scaffold app from simplest existing template
- [ ] Set up index.css with Tailwind theme tokens (Nunito Sans, brand green #24A148)
- [ ] Implement Navbar component (transparent → fixed, 7 links, mobile hamburger)
- [ ] Implement Hero component (bg image, dark overlay, heading, subtitle, CTA button)
- [ ] Implement SearchForm component (dark card, 5 fields, overlaps hero)
- [ ] Implement ServicesStrip component (green bg, 4 columns with icons)
- [ ] Implement FeaturedProperties component (carousel, property cards with badges)
- [ ] Implement Cities component (3 image cards with overlay text)
- [ ] Implement HowItWorks component (dark bg, 4 numbered steps)
- [ ] Implement Agents component (4-column agent cards)
- [ ] Implement Blog component (4-column blog cards with meta)
- [ ] Implement Footer component (5 columns, social icons, contact, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Add responsive styles (hamburger, stacked layouts)
- [ ] Write Vitest tests for each component (100% coverage)
- [ ] Verify: typecheck, lint, tests, build all pass
