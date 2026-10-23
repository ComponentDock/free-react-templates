# Footerpulse — Design Notes

Reference: **Bootstrap Footer 20** — `https://colorlib.com/wp/template/bootstrap-footer-20/`  
Live preview: `https://preview.colorlib.com/theme/bft/bootstrap-footer-20/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-20.jpg  
Shipped: https://footerpulse.free.componentdock.com

FooterPulse is a footer-focused page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Bootstrap Footer 20" free template (source: https://colorlib.com/wp/template/bootstrap-footer-20/), built under a DIFFERENT name (**FooterPulse**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeS…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/footerpulse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-card-blue` | `#6ea8fe` | Design tokens: three-color contact cards + dark footer |
| `--color-card-green` | `#20c997` | card green |
| `--color-card-orange` | `#fd7e14` | card orange |
| `--color-footer-dark` | `#3b3d41` | footer dark |
| `--color-footer-darker` | `#313336` | footer darker |
| `--color-footer-heading` | `rgba(255, 255, 255, 0.9)` | footer heading |
| `--color-footer-text` | `rgba(255, 255, 255, 0.6)` | footer text |
| `--color-footer-muted` | `rgba(255, 255, 255, 0.5)` | footer muted |
| `--color-footer-copyright` | `rgba(255, 255, 255, 0.4)` | footer copyright |
| `--color-section-bg` | `#f8f9fa` | section bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactCards` | ContactCards section renders three colored info cards | see fidelity note below |
| 2 | `Footer` | Footer renders navigation columns and subscribe form | see fidelity note below |

## Section-by-section fidelity

### `ContactCards`
The ContactCards component SHALL render three contact info cards in a responsive grid (1 column on mobile, 3 columns on desktop).

### `Footer`
The Footer component SHALL render three navigation columns (About, Company, Resources) and a newsletter subscribe form.

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
- **Provenance ban.** No file under `apps/footerpulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/footerpulse/public/CNAME` = `footerpulse.free.componentdock.com`
  and the package `homepage` = `https://footerpulse.free.componentdock.com`.
