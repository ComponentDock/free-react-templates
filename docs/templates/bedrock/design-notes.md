# Bedrock — Design Notes

Reference: **Bootstrap Footer 11** — `https://colorlib.com/wp/template/bootstrap-footer-11/`  
Live preview: `https://preview.colorlib.com/theme/bft/bootstrap-footer-11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-11.jpg  
Shipped: https://bedrock.free.componentdock.com

Bedrock is a multi-column footer template with a dark navy background, purple accent links, and a four-column layout containing brand info, latest news blog cards, quick links navigation, and contact details. Includes a centered hero section and a copyright bar with Component Dock attribution.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/bedrock/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-footer-bg` | `#0d1824` | Design tokens: dark navy footer with purple accent |
| `--color-footer-text` | `rgba(255, 255, 255, 0.7)` | footer text |
| `--color-footer-muted` | `rgba(255, 255, 255, 0.6)` | footer muted |
| `--color-footer-icon` | `rgba(255, 255, 255, 0.4)` | footer icon |
| `--color-footer-copyright` | `#999999` | footer copyright |
| `--color-accent` | `#7f72e4` | accent |
| `--color-hero-bg` | `#f8f8f8` | hero bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer renders brand column | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The footer SHALL display a brand section with name, description, and social icons.

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
- **Provenance ban.** No file under `apps/bedrock/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bedrock/public/CNAME` = `bedrock.free.componentdock.com`
  and the package `homepage` = `https://bedrock.free.componentdock.com`.
