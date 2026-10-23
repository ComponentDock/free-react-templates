# Smokeshade — Design Notes

Reference: **Hazze** — `https://colorlib.com/wp/template/hazze/`  
Live preview: `https://preview.colorlib.com/theme/hazze/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/haze-free-template.jpg  
Shipped: https://smokeshade.free.componentdock.com

A dark-themed fashion agency/creative portfolio template with bold magenta accents. Recreation of ColorLib "Hazze".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Libre Franklin**, **Libre Franklin:wght@400;500;600;700;800;900**

## Design tokens (`apps/smokeshade/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e32879` | brand |
| `--color-charcoal` | `#191919` | charcoal |
| `--color-card` | `#222222` | card |
| `--color-darker` | `#111111` | darker |
| `--color-lighter` | `#2a2a2a` | lighter |
| `--color-mid` | `#303030` | mid |
| `--color-border` | `#393939` | border |
| `--color-text-secondary` | `#b3b3b3` | text secondary |
| `--color-text-dark` | `#0d0a27` | text dark |
| `--color-text-body` | `#5c5c5c` | text body |
| `--font-sans` | `'Libre Franklin', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `AboutUs` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `Portfolio` | — | no dedicated spec block |
| 6 | `Counter` | — | no dedicated spec block |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `CTASection` | — | no dedicated spec block |
| 9 | `Team` | — | no dedicated spec block |
| 10 | `Blog` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · Smokeshade

### `Hero`
*anchors only* — Office Fashion · New Fashion · Read More

### `AboutUs`
*anchors only* — About Us · About Story · Read More

### `Services`
*anchors only* — Best Services Save The World

### `Portfolio`
*anchors only* — Turn Your Dream Into Reality

### `Counter`
*anchors only* — We have a lot of experience · Read More

### `Testimonials`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `CTASection`
*anchors only* — We Create Trends For The World · Work With Us

### `Team`
*anchors only* — Top Designers

### `Blog`
*anchors only* — From Our Blog

### `Footer`
*anchors only* — Smokeshade · We are a fashion agency creating trends that define the future of style and elegance. · Useful Links · Join The Newsletter · Subscribe · Instagram

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
- **Provenance ban.** No file under `apps/smokeshade/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/smokeshade/public/CNAME` = `smokeshade.free.componentdock.com`
  and the package `homepage` = `https://smokeshade.free.componentdock.com`.
