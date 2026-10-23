# Finpilot — Design Notes

Reference: **Busicol** — `https://colorlib.com/wp/template/busicol/`  
Live preview: `https://preview.colorlib.com/theme/busicol/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/busicol-free-template.jpg  
Shipped: https://finpilot.free.componentdock.com

Recreation of ColorLib "Busicol" — a business consulting landing page with hero slider, service cards, about section, stats counters, portfolio gallery, feature highlights, financial solution section, testimonials, and CTA band. Preview URL: https://preview.colorlib.com/theme/busicol/. Source slug: `busicol`.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/finpilot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#28ae60` | brand |
| `--color-brand-dark` | `#209050` | brand dark |
| `--color-ink` | `#1f1f1f` | ink |
| `--color-mist` | `#7e7e7e` | mist |
| `--color-paper` | `#f8f9fa` | paper |
| `--color-dark-bg` | `#2c2c2c` | dark bg |
| `--color-primary-50` | `#e8f5e9` | primary 50 |
| `--color-primary-100` | `#c8e6c9` | primary 100 |
| `--color-primary-200` | `#a5d6a7` | primary 200 |
| `--color-primary-300` | `#81c784` | primary 300 |
| `--color-primary-400` | `#66bb6a` | primary 400 |
| `--color-primary-500` | `#28ae60` | primary 500 |
| `--color-primary-600` | `#209050` | primary 600 |
| `--color-primary-700` | `#1a7a43` | primary 700 |
| `--color-primary-800` | `#156436` | primary 800 |
| `--color-primary-900` | `#104d29` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `Services` | Services Section | see fidelity note below |
| 4 | `About` | About Section | see fidelity note below |
| 5 | `Counters` | Counters Section | see fidelity note below |
| 6 | `Gallery` | Gallery Section | see fidelity note below |
| 7 | `Features` | Features Section | see fidelity note below |
| 8 | `FinancialSolution` | Financial Solution Section | see fidelity note below |
| 9 | `Testimonials` | Testimonials Section | see fidelity note below |
| 10 | `CTA` | CTA Section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display a logo, navigation links, search button, and "Get a Quote" CTA.

### `Hero`
The hero SHALL display a full-width banner with headline and two CTA buttons.

### `Services`
The services section SHALL display 3 service cards with icons and descriptions.

### `About`
The about section SHALL display a split layout with image and text content.

### `Counters`
The counters section SHALL display 3 statistics with labels.

### `Gallery`
The gallery section SHALL display 5 portfolio items with hover overlays.

### `Features`
The features section SHALL display 3 feature highlights on a dark background.

### `FinancialSolution`
The financial solution section SHALL display a split layout with text and image.

### `Testimonials`
The testimonials section SHALL display a carousel of client quotes with navigation.

### `CTA`
The CTA section SHALL display a call-to-action band with heading and button.

### `Footer`
The footer SHALL display brand info, navigation links, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/finpilot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/finpilot/public/CNAME` = `finpilot.free.componentdock.com`
  and the package `homepage` = `https://finpilot.free.componentdock.com`.
