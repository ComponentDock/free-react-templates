# Inkwell — Design Notes

Reference: **Contact Form v11** — `https://colorlib.com/wp/template/contact-form-v11/`  
Live preview: `https://colorlib.com/etc/cf/ContactFrom_v11/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/axole-website-template.jpg — the ROW's slug `axole`, not the spec's `contact-form-v11`  
Shipped: https://inkwell.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `axole` for this app while the spec records `contact-form-v11`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Inkwell is a minimalist two-column contact form template designed for marketing agencies and web service providers. It provides a clean, professional contact page with separate first/last name fields, email, and message inputs alongside an introductory text column.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@200;300;400;500;600;700;800**

## Design tokens (`apps/inkwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4a90d9` | brand |
| `--color-brand-dark` | `#3a7bc8` | brand dark |
| `--color-bg-page` | `#f5f7fa` | bg page |
| `--color-text-heading` | `#2d3748` | text heading |
| `--color-text-body` | `#4a5568` | text body |
| `--color-text-placeholder` | `#a0aec0` | text placeholder |
| `--color-input-border` | `#e2e8f0` | input border |
| `--color-card` | `#ffffff` | card |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | Contact form with four fields | see fidelity note below |
| 2 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `ContactForm`
The form SHALL contain four controlled fields: First Name (text), Last Name (text), Email (email), and Message (textarea). Each field SHALL have a visible placeholder and an sr-only label for accessibility.

### `Footer`
The template SHALL display a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/inkwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/inkwell/public/CNAME` = `inkwell.free.componentdock.com`
  and the package `homepage` = `https://inkwell.free.componentdock.com`.
