# Logistico — Design Notes

Reference: **Thelogistico** — `https://colorlib.com/wp/template/thelogistico/`  
Live preview: `https://preview.colorlib.com/theme/thelogistico/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/logistico-free-template.jpg — the ROW's slug `logistico`, not the spec's `thelogistico`  
Shipped: https://logistico.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `logistico` for this app while the spec records `thelogistico`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

A Logistics & Cargo Transport template with navigation & header, hero section & quick, services grid and about / transport solution sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700;900**

## Design tokens (`apps/logistico/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f60` | Brand orange — #f60 from the original Logistico preview |
| `--color-brand-dark` | `#e55500` | brand dark |
| `--color-blue` | `#2845ba` | Blue accent — #2845ba |
| `--color-cyan` | `#4cd3e3` | Cyan accent — #4cd3e3 |
| `--color-dark` | `#071112` | Dark — header/text — #071112 |
| `--color-mist` | `#999999` | Body text — #999 |
| `--color-paper` | `#f9f9ff` | Light bg — #f9f9ff |
| `--color-lavender` | `#f0e9ff` | Lavender — #f0e9ff |
| `--color-coal` | `#071112` | Footer bg — #071112 |
| `--color-primary-50` | `#fff7ed` | primary 50 |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#fb923c` | primary 400 |
| `--color-primary-500` | `#f97316` | primary 500 |
| `--color-primary-600` | `#ea580c` | primary 600 |
| `--color-primary-700` | `#c2410c` | primary 700 |
| `--color-primary-800` | `#9a3412` | primary 800 |
| `--color-primary-900` | `#7c2d12` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `ShipmentControl` | — | no dedicated spec block |
| 6 | `CTABanner` | — | no dedicated spec block |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `LatestNews` | — | no dedicated spec block |
| 9 | `Contact` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Open menu · Close menu · Mobile menu

### `Hero`
*anchors only* — Quick offer calculator · Truckload type · Commodity type · Distance

### `Services`
*anchors only* — Our Services · Comprehensive logistics solutions tailored to your business needs. · Learn More →

### `About`
*anchors only* — A Professional · Transportation Business · Years Experience

### `ShipmentControl`
*anchors only* — We Give You Complete Control

### `CTABanner`
*anchors only* — Need Help? Get a Free Quote! · Contact Us Now

### `Testimonials`
*anchors only* — Client Testimonials · Hear from businesses that trust Logistico for their logistics needs.

### `LatestNews`
*anchors only* — Latest News · Stay updated with the latest trends and insights in logistics and freight transport. · Read More

### `Contact`
*anchors only* — Contact form · First Name · Last Name · Email · Subject · Message

### `Footer`
*anchors only* — Newsletter subscription · Email for newsletter · Subscribe

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
- **Provenance ban.** No file under `apps/logistico/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/logistico/public/CNAME` = `logistico.free.componentdock.com`
  and the package `homepage` = `https://logistico.free.componentdock.com`.
