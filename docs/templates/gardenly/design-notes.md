# Gardenly — Design Notes

Reference: **Gardening** — `https://colorlib.com/wp/template/gardening/`  
Live preview: `https://preview.colorlib.com/theme/gardening/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gardening-colorlib-template.jpg  
Shipped: https://gardenly.free.componentdock.com

Gardenly is a gardening/landscaping service business landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow**, **Barlow:wght@400;500;600;700**

## Design tokens (`apps/gardenly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-garden` | `#00880f` | garden |
| `--color-forest` | `#305534` | forest |
| `--color-sage` | `#66816a` | sage |
| `--color-sage-pale` | `#c9d6cb` | sage pale |
| `--color-mint` | `#eff6f0` | mint |
| `--color-plum` | `#301a22` | plum |
| `--color-pink` | `#e6115f` | pink |
| `--color-coral` | `#ff6162` | coral |
| `--color-bright` | `#12c426` | bright |
| `--color-paper` | `#fff` | paper |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `Categories` | Categories strip | see fidelity note below |
| 4 | `About` | About band | see fidelity note below |
| 5 | `Services` | Services grid | see fidelity note below |
| 6 | `Projects` | Feature Projects | see fidelity note below |
| 7 | `Commitment` | Commitment testimonial | see fidelity note below |
| 8 | `QuoteForm` | Quote form | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky white navbar with a brand wordmark, nav links, a search icon, and a green "Get Free Quote" pill, plus an accessible mobile menu.

### `Hero`
The system SHALL render a 700px full-width hero with a background photo, a dark-green tint overlay, centered white headline, sub-line, and a white pill CTA, with white dot controls.

### `Categories`
The system SHALL render six category cards with line icons, titles, and blurbs on a mint background, plus a centered promo line with a green link.

### `About`
The system SHALL render a forest-green about section with garden photos, a large white heading, and two mission blocks.

### `Services`
The system SHALL render a 3-column services grid with green icons, titles, and blurbs, separated by pale-sage borders.

### `Projects`
The system SHALL render a "Feature Projects" carousel/grid of four project cards with dark-green hover overlays, white captions, and View links.

### `Commitment`
The system SHALL render a mint column with a "Our Commitment" testimonial carousel showing a quote and a founder row.

### `QuoteForm`
The system SHALL render a white column with a "Get Free Quote" heading and a client-side form with pill inputs and a full-width green submit button.

### `Footer`
The system SHALL render a photo-background footer with brand/social, Services, Navigation, and Contact columns, plus a copyright bar crediting Component Dock.

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
- **Provenance ban.** No file under `apps/gardenly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gardenly/public/CNAME` = `gardenly.free.componentdock.com`
  and the package `homepage` = `https://gardenly.free.componentdock.com`.
