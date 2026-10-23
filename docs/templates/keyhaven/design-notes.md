# Keyhaven — Design Notes

Reference: **Estatehub** — `https://colorlib.com/wp/template/estatehub/`  
Live preview: `https://preview.colorlib.com/theme/estatehub/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/estatehub-template-1770211352442.jpg  
Shipped: https://keyhaven.free.componentdock.com

Keyhaven is a single-page real estate landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**, **Playfair Display**

## Design tokens (`apps/keyhaven/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0fdf4` | primary 50 |
| `--color-primary-100` | `#dcfce7` | primary 100 |
| `--color-primary-200` | `#bbf7d0` | primary 200 |
| `--color-primary-300` | `#86efac` | primary 300 |
| `--color-primary-400` | `#4ade80` | primary 400 |
| `--color-primary-500` | `#22c55e` | primary 500 |
| `--color-primary-600` | `#16a34a` | primary 600 |
| `--color-primary-700` | `#15803d` | primary 700 |
| `--color-primary-800` | `#166534` | primary 800 |
| `--color-primary-900` | `#14532d` | primary 900 |
| `--font-serif` | `'Playfair Display', ui-serif, Georgia, serif` | Playfair Display (display serif) + Inter (body) — the original's fonts |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `StatsStrip` | Stats strip | see fidelity note below |
| 4 | `FeaturedProperties` | Featured properties section | see fidelity note below |
| 5 | `WhyChoose` | Why Choose section | see fidelity note below |
| 6 | `Agents` | Agents section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `CtaBanner` | CTA banner | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top navigation bar with the brand wordmark, section links, a primary CTA, a dark-mode toggle and a mobile menu.

### `Hero`
The system SHALL render a full-height hero with a background photo, a dark gradient overlay, a serif headline with a green accent phrase, a sub-paragraph and quick stats.

### `StatsStrip`
The system SHALL render a white stats strip with four brand-green statistics.

### `FeaturedProperties`
The system SHALL render a "Featured Properties" section with four property cards, each showing a photo, price, badges, location and features.

### `WhyChoose`
The system SHALL render a "Why Choose Keyhaven" section with four feature cards, each with an icon, title and description.

### `Agents`
The system SHALL render a "Meet Our Agents" section with three agent cards, each with a photo, role, tagline, specialty tags and contact links.

### `Testimonials`
The system SHALL render a "What Our Clients Say" section with at least three testimonial cards, each with a quote, a referenced property, an avatar and an author name/role.

### `CtaBanner`
The system SHALL render a brand-green CTA banner with a serif headline, a sub-paragraph and two call-to-action buttons.

### `Footer`
The system SHALL render a footer with brand info, social links, quick links, neighborhood links and contact details.

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
- **Provenance ban.** No file under `apps/keyhaven/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keyhaven/public/CNAME` = `keyhaven.free.componentdock.com`
  and the package `homepage` = `https://keyhaven.free.componentdock.com`.
