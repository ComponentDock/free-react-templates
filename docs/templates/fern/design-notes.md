# Fern — Design Notes

> Recreation of the ColorLib "Ecoverde" Bootstrap 4 real estate template.
> Named **Fern** (NEW name — ColorLib source name "Ecoverde" is forbidden).

## Source mapping

- **ColorLib item:** "Ecoverde" (TEMPLATES.md line 2588, marked `[~]`).
- **Source URL:** https://colorlib.com/wp/template/ecoverde/
- **Preview mirrors:** https://themewagon.github.io/ecoverde/,
  https://themeslab.org/html/ecoverde
- **Original stack:** Bootstrap 4, jQuery, Google Fonts (Nunito Sans),
  Font Awesome icons.

## Design tokens (captured from the original)

| Token         | Value                      | Use                                          |
| ------------- | -------------------------- | -------------------------------------------- |
| Primary green | `#24A148`                  | Navbar bg, buttons, CTAs, section highlights |
| Accent blue   | `#007bff`                  | Links, hover states, secondary buttons       |
| Dark ink      | `#0f101c`                  | Headings, body text, footer background       |
| White         | `#ffffff`                  | Card backgrounds, content areas, navbar      |
| Light gray    | `#f7f7f7`                  | Alternating section backgrounds              |
| Medium gray   | `#666666`                  | Body descriptions, secondary text            |
| Border gray   | `#e0e0e0`                  | Card borders, dividers                       |
| Font family   | Nunito Sans (Google Fonts) | All text (weights: 400, 600, 700)            |

## Section order (top → bottom)

1. **Navbar** — Fixed/sticky white bar, green brand text "Fern", nav links,
   hamburger on mobile.
2. **Hero** — Full-width background image with dark overlay, headline
   "Discover Your Perfect Home", subtext, green "View Properties" CTA.
3. **SearchBar** — Overlapping white card form with location input,
   property type dropdown, price range dropdown, green search button.
4. **Features** — Light gray background, 3–4 feature cards with icons
   (Home, Key, Map, Shield), titles, and descriptions.
5. **FeaturedProperties** — White background, grid of property cards,
   each with image, price tag, title, location, bed/bath/sqft icons.
6. **Cities** — Dark overlay background, grid of city cards with
   background images and green overlay text showing city name + count.
7. **HowItWorks** — White background, 3-step numbered process with
   icons, titles, and descriptions.
8. **Testimonials** — Light gray background, testimonial cards with
   quotes, author names, roles, and avatar placeholders.
9. **Agents** — White background, agent profile cards with photo,
   name, role, and social media icon row.
10. **Blog** — Light gray background, blog post cards with image,
    date badge, title, excerpt, and "Read More" link.
11. **Footer** — Dark (#0f101c) background, multi-column layout with
    About text, Quick Links, Contact info, social icons, and
    Component Dock attribution.

## Replication notes

- **No ColorLib references in app code.** Provenance lives only in
  the spec, TEMPLATES.md, and the PR.
- **Assets replaced.** All original images replaced with
  `picsum.photos` seeded placeholders. Icons replaced with
  `lucide-react` (Font Awesome → lucide mapping below).
- **Component Dock footer.** Every template's footer links
  `https://www.componentdock.com/` branded "Component Dock".
- **CNAME + homepage.** `public/CNAME` = `fern.free.componentdock.com`;
  `package.json` `"homepage"` = `https://fern.free.componentdock.com`.

## Icon mapping (lucide-react)

| Original (Font Awesome) | Lucide replacement |
| ----------------------- | ------------------ |
| `fa-home`               | `Home`             |
| `fa-key`                | `Key`              |
| `fa-map-marker-alt`     | `MapPin`           |
| `fa-shield-alt`         | `Shield`           |
| `fa-search`             | `Search`           |
| `fa-bed`                | `BedDouble`        |
| `fa-bath`               | `Bath`             |
| `fa-maximize`           | `Maximize2`        |
| `fa-star`               | `Star`             |
| `fa-quote-left`         | `Quote`            |
| `fa-facebook-f`         | `Facebook`         |
| `fa-twitter`            | `Twitter`          |
| `fa-instagram`          | `Instagram`        |
| `fa-linkedin-in`        | `Linkedin`         |
| `fa-envelope`           | `Mail`             |
| `fa-phone`              | `Phone`            |
| `fa-map-pin`            | `MapPin`           |
| `fa-arrow-right`        | `ArrowRight`       |
| `fa-calendar`           | `Calendar`         |
| `fa-user`               | `User`             |

## Responsive breakpoints

The original uses Bootstrap 4 breakpoints:

- Mobile: < 576px (single column, stacked layouts)
- Tablet: 576px – 767px (two-column grids where applicable)
- Desktop: ≥ 768px (full multi-column layouts)

Fern will replicate these using Tailwind responsive utilities
(`sm:`, `md:`, `lg:`).
