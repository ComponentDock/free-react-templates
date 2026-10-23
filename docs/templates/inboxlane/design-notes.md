# Inboxlane — Design Notes

Reference: **Contact Form 18** — `https://colorlib.com/wp/template/contact-form-18/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-18/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-18.jpg  
Shipped: https://inboxlane.free.componentdock.com

InboxLane is a two-column contact form template with a dark-themed map section. It provides a clean, professional way for visitors to send messages, with form validation and a responsive layout.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/inboxlane/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3b4a6b` | brand |
| `--color-brand-dark` | `#2f3c58` | brand dark |
| `--color-bg-page` | `#f5f5f5` | bg page |
| `--color-bg-card` | `#ffffff` | bg card |
| `--color-text-heading` | `#3b4a6b` | text heading |
| `--color-text-body` | `#666666` | text body |
| `--color-text-label` | `#999999` | text label |
| `--color-input-border` | `#dddddd` | input border |
| `--color-map-overlay` | `#2a2a2a` | map overlay |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | Contact form renders with correct fields | see fidelity note below |
| 2 | `MapSection` | Map section renders alongside form | see fidelity note below |
| 3 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `ContactForm`
The page SHALL display a two-column contact form with fields for Name, Email, Phone, Company, and Message.

### `MapSection`
The page SHALL display a dark-themed map section to the right of the form.

### `Footer`
The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/inboxlane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/inboxlane/public/CNAME` = `inboxlane.free.componentdock.com`
  and the package `homepage` = `https://inboxlane.free.componentdock.com`.
