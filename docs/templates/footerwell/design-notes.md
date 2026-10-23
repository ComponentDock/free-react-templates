# Footerwell — Design Notes

Reference: **Bootstrap Footer 12** — `https://colorlib.com/wp/template/bootstrap-footer-12/`  
Live preview: `https://preview.colorlib.com/theme/bft/bootstrap-footer-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-12.jpg  
Shipped: https://footerwell.free.componentdock.com

Recreation of ColorLib's **Bootstrap Footer 12** (titled "Footer 02" in the preview) — a dark charcoal footer with a floating email subscribe form (pill-shaped, white), a brand description column with a "read more" link, four bordered nav columns (Discover, About, Resources, Social), a partner strip with company links, and a copyright bar…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/footerwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-footer-bg` | `#131719` | Design tokens: dark charcoal footer with warm gold accent |
| `--color-footer-heading` | `rgba(255, 255, 255, 0.9)` | footer heading |
| `--color-footer-text` | `rgba(255, 255, 255, 0.3)` | footer text |
| `--color-footer-muted` | `rgba(255, 255, 255, 0.4)` | footer muted |
| `--color-footer-copyright` | `rgba(255, 255, 255, 0.4)` | footer copyright |
| `--color-accent` | `#bba387` | accent |
| `--color-accent-light` | `#bfa88e` | accent light |
| `--color-section-bg` | `#f8f8f8` | section bg |
| `--color-divider` | `rgba(255, 255, 255, 0.05)` | divider |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer main content — brand + nav columns | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The footer SHALL render with a #131719 (dark charcoal) background, 5em vertical padding, and two main columns: (1) brand description with logo and "read more" link, (2) four bordered nav columns (Discover, About, Resources, Social).

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
- **Provenance ban.** No file under `apps/footerwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/footerwell/public/CNAME` = `footerwell.free.componentdock.com`
  and the package `homepage` = `https://footerwell.free.componentdock.com`.
