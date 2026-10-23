# Travelogue — Design Notes

Reference: **Travel Wordpress Themes** — `https://colorlib.com/wp/template/travel-wordpress-themes/`  
Live preview: `https://preview.colorlib.com/theme/travel-wordpress-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/travel-wordpress-themes.jpg  
Shipped: https://travelogue.free.componentdock.com

Travelogue is a single-page travel-agency landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700**, **Poppins**

## Design tokens (`apps/travelogue/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e0f7fa` | primary 50 |
| `--color-primary-100` | `#b2ebf2` | primary 100 |
| `--color-primary-200` | `#80deea` | primary 200 |
| `--color-primary-300` | `#4dd0e1` | primary 300 |
| `--color-primary-400` | `#00b4d8` | primary 400 |
| `--color-primary-500` | `#00a3c7` | primary 500 |
| `--color-primary-600` | `#0096b7` | primary 600 |
| `--color-primary-700` | `#007d9d` | primary 700 |
| `--color-primary-800` | `#006a85` | primary 800 |
| `--color-primary-900` | `#00526a` | primary 900 |
| `--color-accent-300` | `#80cbc4` | Accent colors for secondary elements. |
| `--color-accent-400` | `#4db6ac` | accent 400 |
| `--color-accent-500` | `#26a69a` | accent 500 |
| `--color-mist` | `#f5fafb` | Light section backgrounds. |
| `--color-lavender` | `#f0f7f9` | lavender |
| `--color-smoke` | `#7f7f7f` | Muted copy. |
| `--color-ink` | `#1a1a1a` | ink |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Destinations` | Destinations section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `PopularTrips` | Popular trips section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Newsletter` | Newsletter section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Travelogue", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-viewport hero section with a background image, a heading, a call-to-action button, and slider navigation arrows.

### `Destinations`
The system SHALL render a destinations section showcasing travel destinations.

### `Features`
The system SHALL render a features section explaining why users should choose this travel agency.

### `PopularTrips`
The system SHALL render a popular trips section with tour packages.

### `Testimonials`
The system SHALL render a testimonials section with customer reviews.

### `Newsletter`
The system SHALL render a newsletter signup section.

### `Footer`
The system SHALL render a footer with navigation, social links, and Component Dock attribution.

## Deltas from the reference

- Photographs are deterministic placeholders (`picsum.photos/seed/…`); no source asset is copied.
- Icon glyphs come from `lucide-react`, not the source's icon font.
- Copy is paraphrased to the same kind of content (headline + subtext + CTA, card title + blurb + link).
- The source's credit bar is replaced by the Component Dock credit (see delivery contract).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/travelogue/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/travelogue/public/CNAME` = `travelogue.free.componentdock.com`
  and the package `homepage` = `https://travelogue.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

No live demo and no archive exist for this slug — five probe paths 404 and the
slug is missing from the preview host's catalog map (`catalog-products-20261009-trace-developer.js`,
633,990 B, 0 hits). The TEMPLATES.md screenshot is the only reference, and it is
**The Valley on demo.themexpert.com** (the address bar says so), i.e. the ColorLib
entry is a round-up post. Tokens below are pixel samples from that 1200×916 JPEG.

| Token | Reference (screenshot) | App (`apps/travelogue`) |
| ----- | ---------------------- | ----------------------- |
| Hero water, deep marine | `#003c54` (2,854/16,000 samples) | — (photo comes from picsum) |
| Hero water, shallow turquoise | `#0c786c` | — |
| Brand | no flat brand fill exists; the nearest thing to a hue is the water `#003c54`–`#0c786c` | `#00b4d8` (`--color-primary-400`), no pixel within 33 units of it |
| Hero heading | heavy geometric **sans**, ~56 px, white | `--font-display: 'Playfair Display'` (serif) ← the reference has no serif |
| CTA | translucent white ≈ `rgba(255,255,255,0.25)`, near-black label `#0a1212`, square corners | dark solid `Button` (per spec) |
| Logo | white tile + black mountain mark, flush left | text wordmark only |
| Nav | transparent over the photo, white 14 px labels | repo-standard navbar + dark-mode toggle |

Verified 2026-10-23: `/theme/<slug>/`, `/theme/bootstrap/<slug>/`, `/theme/bb/<slug>/`,
`/etc/cs/<slug>/index.html` and `/downloads/free/<slug>.zip` all 404, and the
preview catalog JS has no entry — so "no reference build" is a checked claim, not
a single failed curl.

Section order in the reference: nav (transparent) → full-bleed hero photo → 2-line
H1 → `Let's go now` → carousel chevrons. Nothing below the hero exists in the
reference; the rest of the page is an invented, repo-consistent structure.
