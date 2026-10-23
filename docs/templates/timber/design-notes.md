# Timber — Design Notes

Reference: **Balay** — `https://colorlib.com/wp/template/balay/`  
Live preview: `https://preview.colorlib.com/theme/balay/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/balay-free-template.jpg  
Shipped: https://timber.free.componentdock.com

Timber is an interior design / construction studio template with a navbar, hero, about welcome, services, projects counter and portfolio gallery.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand:wght@300;400;500;600;700**

## Design tokens (`apps/timber/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#ffc300` | Design tokens: golden yellow construction studio |
| `--color-primary-dark` | `#e6b000` | primary dark |
| `--color-dark` | `#2c2c2c` | dark |
| `--color-body` | `#333333` | body |
| `--color-muted` | `#999999` | muted |
| `--color-light` | `#f0f0f0` | light |
| `--color-lighter` | `#fafafa` | lighter |

> The spec has no section-level requirements; the order below is read from `apps/timber/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `ProjectCounters` | — | no dedicated spec block |
| 6 | `Portfolio` | — | no dedicated spec block |
| 7 | `Blog` | — | no dedicated spec block |
| 8 | `Contact` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — navigation · Main navigation · Toggle navigation

### `Hero`
*anchors only* — An Inspiring Built Space · Where design meets craftsmanship · View Projects

### `About`
*anchors only* — Welcome

### `Services`
*anchors only* — What I do?

### `ProjectCounters`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Portfolio`
*anchors only* — My Work

### `Blog`
*anchors only* — Read Recent Blog

### `Contact`
*anchors only* — Contact form · Get in Touch! · We would love to hear from you. Reach out to us for any inquiries about your next project. · Name · Email · Message

### `Footer`
*anchors only* — contentinfo · Timber · Quick Links · Contact Info · Component Dock

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
- **Provenance ban.** No file under `apps/timber/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/timber/public/CNAME` = `timber.free.componentdock.com`
  and the package `homepage` = `https://timber.free.componentdock.com`.
