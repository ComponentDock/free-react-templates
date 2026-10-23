# Formsend — Design Notes

Reference: **Contact Form V12** — `https://colorlib.com/wp/template/contact-form-v12/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-v12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v12.jpg  
Shipped: https://formsend.free.componentdock.com

Recreation of ColorLib **Contact Form V12** — a centered card contact form with a purple gradient background overlay on a city skyline image.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/formsend/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-purple` | `#7c3aed` | brand purple |
| `--color-brand-purple-dark` | `#6d28d9` | brand purple dark |
| `--color-brand-purple-light` | `#a78bfa` | brand purple light |
| `--color-bg-page` | `#f5f5f5` | bg page |
| `--color-bg-card` | `#ffffff` | bg card |
| `--color-bg-input` | `#f0f0f0` | bg input |
| `--color-text-primary` | `#1a1a2e` | text primary |
| `--color-text-secondary` | `#6b7280` | text secondary |
| `--color-text-placeholder` | `#9ca3af` | text placeholder |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactCard` | Contact form | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `ContactCard`
The right column SHALL contain a contact form with Name, Email, Message fields and a Send button.

### `Footer`
The page SHALL display a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/formsend/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formsend/public/CNAME` = `formsend.free.componentdock.com`
  and the package `homepage` = `https://formsend.free.componentdock.com`.
