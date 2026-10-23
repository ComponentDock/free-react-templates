# Baseplate — Design Notes

Reference: **Bootstrap Footer 03** — `https://colorlib.com/wp/template/bootstrap-footer-03/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap-footer-03/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-03.jpg  
Shipped: https://baseplate.free.componentdock.com

Recreation of ColorLib "Bootstrap Footer 03" (https://colorlib.com/wp/template/bootstrap-footer-03/). Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-03/ Stack: React 19, Vite, Tailwind CSS 4, TypeScript (strict). Vitest + Testing Library with 100% coverage enforced.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/baseplate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-footer-bg` | `#ffffff` | Design tokens: clean white footer with colorful social icons |
| `--color-footer-border` | `#efefef` | footer border |
| `--color-footer-text` | `#777777` | footer text |
| `--color-social-fb` | `#3b579b` | social fb |
| `--color-social-tw` | `#00a0fb` | social tw |
| `--color-social-ig` | `#c31574` | social ig |
| `--color-social-be` | `#394cff` | social be |
| `--color-social-dr` | `#ff2e6e` | social dr |
| `--color-social-yt` | `#fa2614` | social yt |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer renders with brand logo | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The footer MUST display a bold black logo link to the homepage.

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
- **Provenance ban.** No file under `apps/baseplate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/baseplate/public/CNAME` = `baseplate.free.componentdock.com`
  and the package `homepage` = `https://baseplate.free.componentdock.com`.
