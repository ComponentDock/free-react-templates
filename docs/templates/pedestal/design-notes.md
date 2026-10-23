# Pedestal — Design Notes

Reference: **Bootstrap Footer 02** — `https://colorlib.com/wp/template/bootstrap-footer-02/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-footer-02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-02.jpg  
Shipped: https://pedestal.free.componentdock.com

Recreation of ColorLib "Bootstrap Footer 02" (https://colorlib.com/wp/template/bootstrap-footer-02/). Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-02/ Stack: React 19, Vite, Tailwind CSS 4, TypeScript (strict). Vitest + Testing Library with 100% coverage enforced.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500**

## Design tokens (`apps/pedestal/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-footer-bg` | `#202126` | Design tokens: dark charcoal footer with orange accent |
| `--color-footer-text` | `#ffffff` | footer text |
| `--color-footer-muted` | `#888888` | footer muted |
| `--color-footer-input` | `#292b31` | footer input |
| `--color-accent-orange` | `#f88020` | accent orange |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer renders with correct semantic structure | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The footer MUST be a `<footer>` element with role="contentinfo" and a dark background.

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
- **Provenance ban.** No file under `apps/pedestal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pedestal/public/CNAME` = `pedestal.free.componentdock.com`
  and the package `homepage` = `https://pedestal.free.componentdock.com`.
