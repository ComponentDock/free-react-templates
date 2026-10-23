# Touchback — Design Notes

Reference: **Contact Form 12** — `https://colorlib.com/wp/template/contact-form-12/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-12.jpg  
Shipped: https://touchback.free.componentdock.com

A clean, minimal two-column contact page with a heading, description, and contact details on the left, and a simple form. It also includes Message) with a blue "Send Message" button on the right. Recreation of ColorLib **Contact Form 12**.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/touchback/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4a90d9` | brand |
| `--color-brand-dark` | `#3a7bc8` | brand dark |
| `--color-bg-page` | `#ffffff` | bg page |
| `--color-text-primary` | `#333333` | text primary |
| `--color-text-secondary` | `#888888` | text secondary |
| `--color-text-label` | `#555555` | text label |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactInfo` | Contact form | see fidelity note below |
| 2 | `ContactForm` | Contact info section | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `ContactInfo`
The form has three fields and a submit button.

### `ContactForm`
The left column displays three contact items with icons.

### `Footer`
Every template must link to Component Dock.

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
- **Provenance ban.** No file under `apps/touchback/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/touchback/public/CNAME` = `touchback.free.componentdock.com`
  and the package `homepage` = `https://touchback.free.componentdock.com`.
