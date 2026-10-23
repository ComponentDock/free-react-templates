# Linewell — Design Notes

Reference: **Contact Form V15** — `https://colorlib.com/wp/template/contact-form-v15/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-v15/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v15.jpg  
Shipped: https://linewell.free.componentdock.com

A centered card with a banner header image, "Contact Us" title, and a four-field contact form (underline-style inputs) on a dark map background. Recreation of ColorLib **Contact Form V15**.

## Design tokens (`apps/linewell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-green` | `#4caf50` | brand green |
| `--color-brand-green-hover` | `#43a047` | brand green hover |
| `--color-bg-dark` | `#2c2c3a` | bg dark |
| `--color-text-heading` | `#333333` | text heading |
| `--color-text-label` | `#555555` | text label |
| `--color-text-body` | `#999999` | text body |
| `--color-input-border` | `#cccccc` | input border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BannerHeader` | Banner header | see fidelity note below |
| 2 | `ContactForm` | Contact form | see fidelity note below |
| 3 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `BannerHeader`
The top of the card displays a banner image with the heading and subtitle overlaid.

### `ContactForm`
The card contains a form with four fields and a submit button.

### `Footer`
The page footer links to Component Dock.

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
- **Provenance ban.** No file under `apps/linewell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/linewell/public/CNAME` = `linewell.free.componentdock.com`
  and the package `homepage` = `https://linewell.free.componentdock.com`.
