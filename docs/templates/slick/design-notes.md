# Slick — Design Notes

Reference: **Narosundar** — `https://colorlib.com/wp/template/narosundar/`  
Live preview: `https://preview.colorlib.com/theme/narosundar/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/narosundar-colorlib-template.jpg  
Shipped: https://slick.free.componentdock.com

Slick is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Narosundar" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Chivo**, **Chivo:wght@400;700;900**, **Open Sans**

## Design tokens (`apps/slick/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fb0000` | brand |
| `--color-brand-dark` | `#d40000` | brand dark |
| `--color-cta` | `#2845ba` | cta |
| `--color-cta-dark` | `#1f3694` | cta dark |
| `--color-coal` | `#150303` | Coal — dark bands + footer (#150303 from the original). |
| `--color-coal-dark` | `#0c0202` | coal dark |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-lavender` | `#f0e9ff` | Lavender — alternating light section background (#f0e9ff original). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#fb0000` | primary 500 |
| `--color-primary-600` | `#d40000` | primary 600 |
| `--color-primary-700` | `#b30000` | primary 700 |
| `--color-primary-800` | `#8a0000` | primary 800 |
| `--color-primary-900` | `#660000` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Chivo" (sans headings) + "Open Sans" (body). |
| `--font-display` | `'Chivo', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Prices` | Top prices | see fidelity note below |
| 5 | `Categories` | Categories | see fidelity note below |
| 6 | `Services` | Services grid | see fidelity note below |
| 7 | `Instagram` | — | no dedicated spec block |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Slick", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and a call-to-action button.

### `About`
The system SHALL render an about section with a heading and supporting copy.

### `Prices`
The system SHALL render a "OUR TOP PRICES" section with priced rows.

### `Categories`
The system SHALL render an "All We Do for You" section with For Hair / For Beard panels.

### `Services`
The system SHALL render a services section with at least three service cards.

### `Instagram`
*anchors only* — Instagram · Follow the Craft

### `Testimonials`
The system SHALL render a testimonials section with a heading, a quote, and an author.

### `Footer`
The system SHALL render a footer with the site name, contact info, and social links.

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
- **Provenance ban.** No file under `apps/slick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/slick/public/CNAME` = `slick.free.componentdock.com`
  and the package `homepage` = `https://slick.free.componentdock.com`.
