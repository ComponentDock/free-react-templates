# Fortify — Design Notes

Reference: **Security** — `https://colorlib.com/wp/template/security/`  
Live preview: `https://preview.colorlib.com/theme/security/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/security-free-template.jpg  
Shipped: https://fortify.free.componentdock.com

Fortify is a security services landing-page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/fortify/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand` | `#fab700` | brand |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--color-light-bg` | `#f9f9ff` | light bg |
| `--color-footer-bg` | `#04091e` | footer bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Hero banner | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Facts` | Counter/stats section | see fidelity note below |
| 6 | `Gallery` | Gallery section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a full-width hero banner with a background image and dark overlay.

### `Hero`
The system SHALL render a full-width hero banner with a background image and dark overlay.

### `Services`
The system SHALL render a 3-card services grid.

### `Features`
The system SHALL render a 6-card features grid on a light background.

### `Facts`
The system SHALL render an animated statistics counter on a yellow background.

### `Gallery`
The system SHALL render a gallery/image grid section.

### `Blog`
The system SHALL render a 4-card blog grid on a light background.

### `Footer`
The system SHALL render a dark navy footer with links, newsletter, and social media.

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
- **Provenance ban.** No file under `apps/fortify/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fortify/public/CNAME` = `fortify.free.componentdock.com`
  and the package `homepage` = `https://fortify.free.componentdock.com`.
