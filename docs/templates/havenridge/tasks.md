# Havenridge (ColorLib Oakberry) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-havenridge`. Recreation name: **Havenridge** (NEW
> name — the ColorLib source keeps its name "Oakberry").

## Source mapping

- **ColorLib item:** "Oakberry" (TEMPLATES.md line 609).
- **Source URL:** https://colorlib.com/wp/template/oakberry/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/oakberry/` (HTTP 200, 54,017 bytes).
- **Preview CSS:** `css/style.css` (82,250 bytes) — Bootstrap 4 based with
  custom ftco-* classes, AOS animations, GLightbox, Tiny Slider.
- **Fonts:** "Nunito Sans" via Google Fonts, Font Awesome 4.7 (CDN),
  Ionicons 4.5.6 (CDN), Flaticon (custom icon font).

## Reference research (done — do not redo)

### Screenshot analysis

Browsed the template preview visually. The design shows:

- Dark hero slider with property images, centered white text, green CTA button
- Search form with Buy/Rent tab pills on white background
- 4 category cards (Land, Residential, Commercial, Industrial) on light bg
- 4 featured property cards with images, prices, agent info, amenities
- Split video section (image + play button)
- About section with image, stats counters (green gradient text)
- Testimonials carousel on light background
- Dark footer with social icons and link columns

### Design tokens (extracted from live CSS, verified by fetch)

| Token          | Value                            | Use                                      |
| -------------- | -------------------------------- | ---------------------------------------- |
| Font           | "Nunito Sans", Arial, sans-serif | All text                                 |
| Brand green    | #5ea51d                          | Primary buttons, accent, subheading text |
| Dark bg        | #081637 / #06112a                | Hero overlay, footer                     |
| Section light  | #f8f9fa / #f7f7f7                | `.bg-light` sections                     |
| Body text      | #212529                          | Paragraphs, headings                     |
| Muted text     | #6c757d                          | Secondary text                           |
| White          | #fff                             | Button text, footer text                 |
| Button radius  | 0.25rem (4px)                    | Bootstrap `.btn` default                 |
| Button padding | px-5 py-3                        | CTA buttons                              |

### Section order (from DOM analysis)

1. **Navbar** — Bootstrap `.navbar-expand-lg`, logo "Havenridge" + subtitle,
   nav links, "Get Started" green button
2. **Hero Slider** — `.slider-hero` with 3 slides, each has background image,
   centered text (h2 + description + green CTA "Learn More")
3. **Property Search** — `.ftco-search` with Buy/Rent tab pills, search form
   (keyword input, property type select, location input, price limit select,
   search button)
4. **Categories** — `.ftco-section` white bg, "Explore Our Categories & Places",
   4 cards with flaticon icons + h2 (Land, Residential, Commercial, Industrial)
5. **Featured Properties** — `.ftco-section.bg-light`, "Featured Properties",
   4 property cards with image + price badge + agent avatar/name + property
   name + location + sale/rent badge + amenity icons (bed, bath, sqft)
6. **Video Section** — `.ftco-section`, split layout: image left, video play
   button right with heading "Modern House Video"
7. **About** — `.ftco-section.ftco-about-section`, image left, heading +
   description + 4 stat counters (50 Years, 210K+ Properties, 450 Realtors,
   100 Branches) with green gradient text + second image
8. **Testimonials** — `.testimony-section.bg-light`, "Clients We Help"
   heading, carousel with quote icon, text, avatar, name, role
9. **Footer** — `.ftco-footer` dark bg, logo + description + social icons
   (Twitter, Facebook, Instagram), Offers column, Company column, Contact
   column, copyright bar

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/havenridge` from the simplest existing app, rename
       package to `@free-react-templates/havenridge`, add Nunito Sans 400/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `havenridge.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (logo, nav links, mobile hamburger), Hero
       (slider with 3 slides, headings, CTAs, auto-advance), Search
       (Buy/Rent tabs, form fields), Categories (4 cards), Properties
       (4 cards with image/price/agent/amenities), Video (split layout,
       play button), About (heading, 4 stat counters, images), Testimonials
       (carousel, quotes, avatars), Footer (logo, social, links, copyright,
       Component Dock credit), App (landmarks, document title).
3. [ ] Navbar component: Bootstrap-style responsive navbar, logo
       "Havenridge" with subtitle, nav links (Home, About, Services, Agent,
       Blog, Contact), green CTA "Get Started", mobile hamburger with
       slide-down menu. Use lucide icons (Menu, ChevronDown, ChevronRight).
4. [ ] Hero Slider: dark overlay on background images, 3 slides with
       centered text (h2 + paragraph + green CTA button), auto-advance
       with dot navigation. Images: picsum seeds havenridge-hero-1..3.
       Implement a simple auto-advancing carousel with manual dots.
5. [ ] Property Search: Buy/Rent tab pills (green active state), search
       form with 4 fields (keyword input, property type select with
       Residential/Commercial/Land/Industrial, location input with map pin
       icon, price limit select), green search button. Tabs switch between
       buy and rent views (same form in demo).
6. [ ] Categories grid: white bg, "Explore Our Categories & Places" heading,
       4 cards in a row (Land/Residential/Commercial/Industrial), each with
       lucide icon (TreePine, Home, Building2, Factory) and h2 title.
7. [ ] Featured Properties: light grey bg, "Featured Properties" heading,
       4 property cards, each with: background image (picsum havenridge-
       property-N), price badge (green bg), agent avatar + name + timestamp,
       property name link, location with map pin icon, sale/rent badge,
       amenity icons (Bed, Bath, Maximize). Use lucide icons.
8. [ ] Video Section: split layout, image left (picsum havenridge-video-1),
       right side has heading "Modern House Video", description, circular
       green play button (lucide Play icon).
9. [ ] About section: image left (picsum havenridge-about-1), heading
       "Havenridge A Real Estate Company", description text, 4 stat counters
       in a row (50 Years, 210K+ Properties, 450 Realtors, 100 Branches)
       with green gradient text, second image (picsum havenridge-about-2).
       Implement animated counters that count up on scroll.
10. [ ] Testimonials: light grey bg, "Clients We Help" heading, carousel
        with 3 testimonial slides, each with: quote icon (lucide Quote),
        text, avatar (picsum havenridge-testimonial-N), name, role.
        Implement carousel with dot navigation.
11. [ ] Footer: dark bg (#081637), logo "Havenridge" with subtitle
        "Real Estate Agency", description, social icons (Twitter, Facebook,
        Instagram via lucide), Offers column (Properties, Agents, Locations,
        Clients Support), Company column (Home, About, Blog, Contact Us),
        Contact column (address, phone, email), copyright bar. Include
        Component Dock credit linking https://www.componentdock.com/.
12. [ ] Run `npm run verify:app -- havenridge` (typecheck → lint → vitest
        100% → build) and fix until green.
13. [ ] Open PR `feat/template-havenridge` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (#5ea51d green,
        Nunito Sans, 0.25rem button radius, dark hero, Bootstrap grid),
        and what differs (renamed "Havenridge", Nunito Sans via Google
        Fonts, lucide icons, picsum placeholders, Component Dock footer).
14. [ ] Bookkeeping after merge: mark TEMPLATES.md line 609 `[x]` + surge
        URL (`https://havenridge.free.componentdock.com`), `npm run
    readme:status`, push.
