# Formnest — Design Notes

Reference: **Contact Form 14** — `https://colorlib.com/wp/template/contact-form-14/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-14/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-14.jpg  
Shipped: https://formnest.free.componentdock.com

Formnest is a split-screen contact form template for marketing agencies and freelancers. It features an olive green background with a text panel on the left and a white form card on the right. The design recreates ColorLib Contact Form 14 under the original name "Formnest".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/formnest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#80803a` | brand |
| `--color-brand-dark` | `#6b6b32` | brand dark |
| `--color-brand-light` | `#99994d` | brand light |
| `--color-bg-page` | `#80803a` | bg page |
| `--color-text-primary` | `#333333` | text primary |
| `--color-text-secondary` | `#777777` | text secondary |
| `--color-text-on-dark` | `#ffffff` | text on dark |
| `--color-text-cream` | `#f0f0e0` | text cream |
| `--color-text-label` | `#80803a` | text label |
| `--color-input-border` | `#e0e0e0` | input border |
| `--color-card-surface` | `#ffffff` | card surface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `InfoPanel` | Contact information panel | see fidelity note below |
| 2 | `ContactForm` | Contact form renders all fields | see fidelity note below |
| 3 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `InfoPanel`
The left panel SHALL display a heading, descriptive paragraphs, and an email contact link.

### `ContactForm`
The form card SHALL contain fields for Name, Organization, Email, Project Description, Budget, and Target Launch.

### `Footer`
The page SHALL display a footer with a link to Component Dock.

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
- **Provenance ban.** No file under `apps/formnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formnest/public/CNAME` = `formnest.free.componentdock.com`
  and the package `homepage` = `https://formnest.free.componentdock.com`.
