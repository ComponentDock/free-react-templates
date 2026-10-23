# Statute — Prep Notes

**Source:** ColorLib "Lawful" — https://colorlib.com/wp/template/lawful/
**Preview:** https://preview.colorlib.com/theme/lawful/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/lawful-free-template.jpg

## Section order (from preview HTML)

1. **Navbar** — sticky top, logo left, nav links center, search icon right
2. **Hero Banner** — full-width, background image, dark overlay (0.2 opacity),
   centered headline "We Combine Business with Finance", subtext, "Get Free Quote" CTA
3. **Feature Counters** — 4-column row: icon + counter number + label
   (596+ Qualified Lawyer, 20650+ Solved Cases, +2 more)
   Pink-to-coral gradient background on hover
4. **Video/About** — 2-column: left has video bg + play button,
   right has heading + text + "Learn More" CTA + author info block
   Background: #f4f8ff
5. **About Grid** — 2×2 grid of "Road to Success" cards,
   gradient bg on hover
6. **Services** — centered "Services Offered By Us" title,
   3-column image cards with linked titles + descriptions
7. **CTA / Services-2** — 2-column on #f4f8ff bg:
   left = subtitle + heading + description + author info,
   right = large image
8. **Team** — centered "Meet Our Experienced Team" title,
   3-column portrait cards with name + profession
9. **Blog** — centered "Latest From Our Blog Posts" title,
   3-column cards with thumbnail + meta + linked title + excerpt
10. **Footer** — dark #222 bg, 4 columns:
    About text, Navigation Links, Newsletter (email + gradient subscribe),
    Contact info
    Copyright bar: #222 bg, #333 border, Component Dock link

## Design tokens (extracted from style.css)

- **Brand gradient:** `linear-gradient(90deg, #f13d80 0%, #f48464 100%)`
  (pink → coral; used on primary-btn hover, copyright link, service hover,
  about hover, newsletter subscribe, counter hover)
- **Secondary gradient:** `linear-gradient(90deg, #e93d88 0%, #e5935a 100%)`
  (slightly different pink-orange, used on some hover states)
- **Primary accent:** `#ea1162` (hot pink, alternate accent)
- **Text:** `#222222` (primary), `#777777` (body), `#999999` (muted)
- **Fonts:** `"Playfair Display", serif` (headings),
  `"Raleway", sans-serif` (body, buttons, nav)
- **Primary button:** white bg, `#222` text, 13px/600 weight, 50px height,
  5px border-radius, gradient on hover
- **Banner overlay:** `rgba(0,0,0,0.2)` over cover image
- **Video/CTA bg:** `#f4f8ff` (light blue-grey)
- **Footer bg:** `#222222`, copyright bar border: `#333333`
- **Border radii:** 3px, 5px (buttons), 10px, 45px, 50px (newsletter)

## Implementation tasks

1. **Setup:** Copy simplest existing app, rename package to
   `@free-react-templates/statute`, update vite.config.ts, index.html
   (Google Fonts: Playfair Display + Raleway), public/CNAME
2. **Navbar component:** Responsive with hamburger toggle, logo, nav links,
   search icon
3. **Hero component:** Full-width bg image, overlay, centered text + CTA
4. **FeatureCounters component:** 4-column responsive grid, counter numbers,
   hover gradient
5. **VideoAbout component:** 2-column, video placeholder + play button left,
   text + author right
6. **AboutGrid component:** 2×2 cards with hover gradient
7. **Services component:** Centered title + 3-column image cards
8. **CTA component:** 2-column light bg, text + image
9. **Team component:** 3-column team member cards
10. **Blog component:** 3-column blog post cards
11. **Footer component:** 4-column dark footer + copyright bar
12. **App.tsx:** Compose all sections in order
13. **Theme tokens:** Set brand gradient in @theme, define custom colors
14. **Tests:** Vitest + RTL for each component, 100% coverage
15. **Responsive testing:** Verify mobile/tablet breakpoints

## Fidelity notes

- Match the pink-to-coral gradient exactly (#f13d80 → #f48464)
- Playfair Display for ALL headings (h1, h2, h4, h5 in sections)
- Raleway for body, buttons, nav — keep the professional law-firm aesthetic
- Banner must be full-viewport-height on desktop with centered content
- Counter section uses animated counters (consider react-countup or similar)
- Video section left side is a background image with play button overlay
  (no actual video embed needed — use a static image + play icon)
- Service cards show images above title+text (stacked layout)
- Footer newsletter subscribe button uses the pink-to-coral gradient
  with 50px border-radius (pill shape)
- Copyright bar: dark bg, #333 top border, grey text
- All images use picsum.photos with deterministic seeds
